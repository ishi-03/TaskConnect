/* eslint-disable react/prop-types */
import { useReducer } from "react";
import Context from "./Context";
import { ContextReducer, initialState } from "./ContextReducer";
import { useNavigate } from "react-router-dom";
const Provider = ({ children }) => {
  
  let [state, dispatch] = useReducer(ContextReducer, initialState);
  const collectRegisterData = (e, data) => {
    dispatch({ type: data, payload: e.target.value });
  };
  const navigate = useNavigate();
  const register = () => {
    let url = "https://api.freeapi.app/api/v1/users/register";
    let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: state.userName,
        email: state.email,
        password: state.password,
      }),
    };
    fetch(url, option)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "User with email or username already exists") {
          dispatch({
            type: "userExist",
            payload: {
              message: data.message,
              status: true,
            },
          });
          dispatch({ type: "empty" });
        } else if (
          data.message ===
          "Users registered successfully and verification email has been sent on your email."
        ) {
          dispatch({
            type: "userRegister",
            payload: {
              message: data.message,
              status: true,
            },
          });
          dispatch({ type: "empty" });
        } else {
          dispatch({
            type: "userDetailRegisterWrong",
            payload: {
              message: data.message,
              status: true,
            },
          });
          dispatch({ type: "empty" });
        }
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        dispatch({
          type: "error",
          payload: {
            message: "Something went wrong",
            status: true,
          },
        });
        dispatch({ type: "empty" });
      });
  };
  const login = () => {
    let link = "https://api.freeapi.app/api/v1/users/login";
    let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: state.password,
        username: state.userName,
      }),
    };
    fetch(link, option)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "User logged in successfully") {
          let loginaccessToken = data.data.accessToken;
          localStorage.setItem("accessToken", loginaccessToken);
          if (!loginaccessToken) return;
          navigate('/todo');
        } else {
          dispatch({
            type: "userDetailRegisterWrong",
            payload: {
              message: data.message,
              status: true,
            },
          });
          dispatch({ type: "empty" });
        }
      })
      .catch((error) => {
        dispatch({
          type: "error",
          payload: {
            message: error,
            status: true,
          },
        });
        dispatch({ type: "empty" });
      });
  };
  const close = () => {
    dispatch({ type: "close" });
  };

  const logoutButton = () => {
    dispatch({ type: "popup", payload: true });
  };

  const popuponYes = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
    dispatch({ type: "popup", payload: false });
    navigate("/");
  };
  const popuponNo = () => {
    dispatch({ type: "popup", payload: false });
  };
  return (
    <Context.Provider
      value={{
        register,
        collectRegisterData,
        state,
        close,
        login,
        popuponNo,
        logoutButton,
        popuponYes,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provider;
