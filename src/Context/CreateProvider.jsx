/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import controlRequest from "../Services/controlRequest";
import CreateContext from "./CreateContext";
import { CreateReducer, initialState } from "./CreateReducer";
const CreateProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const [update, setUpdate] = React.useState(false);
  // https://api.freeapi.app/api/v1/todos
  const [id, setId] = React.useState(false);

  let [state, dispatch] = React.useReducer(CreateReducer, initialState);

  let [toDodata, setToDoData] = React.useState();

  let getApiData = async () => {
    let url = "https://api.freeapi.app/api/v1/todos/";
    let option = {
      method: "GET",
    };
    try {
      let data = await controlRequest(url, option);
      setToDoData(data.data);
      if (data.message === "Todos fetched successfully") {
        dispatch({
          type: "fetchedSuccessFully",
          payload: {
            message: data.message,
            status: true,
          },
        });
      } else {
        dispatch({
          type: "fetchedWrong",
          payload: {
            message: data.message,
            status: true,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: "fetchingError",
        payload: {
          message: "Something went wrong",
          status: true,
        },
      });
    }
  };
  const createToDoData = async () => {
    let url = "https://api.freeapi.app/api/v1/todos/";
    let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: state.description,
        title: state.title,
      }),
    };

    try {
      let data = await controlRequest(url, option);

      if (data.message === "Todo created successfully") {
        getApiData();
        dispatch({
          type: "createdSuccessFully",
          payload: {
            message: data.message,
            status: true,
          },
        });
        dispatch({ type: "empty" });
      } else {
        dispatch({
          type: "createdWrong",
          payload: {
            message: data.message,
            status: true,
          },
        });
        dispatch({ type: "empty" });
      }
    } catch (error) {
      dispatch({
        type: "error",
        payload: {
          message: "Something went wrong",
          status: true,
        },
      });
    }
  };
  const deleteData = async (id) => {
    let url = "https://api.freeapi.app/api/v1/todos/" + id;
    let option = {
      method: "DELETE",
    };
    try {
      let data = await controlRequest(url, option);
      if (data.message === "Todo deleted successfully") {
        getApiData();
        dispatch({
          type: "deletedSuccessFully",
          payload: {
            message: data.message,
            status: true,
          },
        });
      } else {
        dispatch({
          type: "deletedWrong",
          payload: {
            message: data.message,
            status: true,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: "error",
        payload: {
          message: "Something went wrong",
          status: true,
        },
      });
    }
  };

  const UpdateData = (id) => {
    setId(id);
    setUpdate(true);

  };
  const updateData = async () => {
    let url = "https://api.freeapi.app/api/v1/todos/" + id;
    let option = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: state.description,
        title: state.title,
      }),
    };
    try {
      let data = await controlRequest(url, option);
      if (data.message === "Todo updated successfully") {
        getApiData();
        setUpdate(false);

        dispatch({
          type: "updatedSuccessFully",
          payload: {
            message: data.message,
            status: true,
          },
        });
      } else if(data.length<0) {
        dispatch({
          type: "NoData",
          payload: {
            message: "Put Data",
            status: true,
          },
        });
      }
      else {
        dispatch({
          type: "updatedWrong",
          payload: {
            message: data.message,
            status: true,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: "error",
        payload: {
          message: "Something went wrong",
          status: true,
        },
      });
    }
  };
  React.useEffect(() => {
    getApiData();
  }, []);

  const controlFormData = (e, data) => {
    dispatch({ type: data, payload: e.target.value });
  };
  const close = () => {
    dispatch({ type: "close" });
  };

  return (
    <CreateContext.Provider
      value={{
        createToDoData,
        controlFormData,
        state,
        close,
        toDodata,
        deleteData,
        updateData,
        update,
        UpdateData
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default CreateProvider;
