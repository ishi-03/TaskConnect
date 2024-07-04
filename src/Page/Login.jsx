import { useNavigate } from "react-router-dom";
import Icon from "../Components/Icon";
import { useContext } from "react";
import Context from "../Context/Context";
import Toast from "../Components/Toast";
const Login = () => {
  const { collectRegisterData, state, close, login } = useContext(Context);
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/register");
  };
  return (
    <center>
      <div className="pt-[40px]">
        <Icon name="Auth" />
        <div className="w-[700px] h-[700px] ">
          <h1 className="text-left ml-[50px] my-6 text-[#FFF] text-[20px] font-bold">
            UserName
          </h1>
          <input
            className="w-[600px] h-[50px] border-[#FFF] border-[1px] rounded-[5px] outline-none placeholder:pl-4"
            type="text"
            placeholder="Enter your email"
            onChange={(e) => collectRegisterData(e, "USER_NAME")}
          />
          <h1 className="text-left ml-[50px] my-6 text-[#FFF] text-[20px] font-bold">
            Password
          </h1>
          <input
            className="w-[600px] h-[50px] border-[#FFF] border-[1px] rounded-[5px] outline-none placeholder:pl-4"
            type="text"
            placeholder="Enter your password"
            onChange={(e) => collectRegisterData(e, "PASSWORD")}
          />
          <button
            onClick={login}
            className="w-[250px] mt-12 h-[50px] bg-[#BE6464] text-[#fff] text-[20px]"
          >
            Login
          </button>
          <p className=" mt-6 text-[20px]">
            Do you have an account ?
            <span
              className="text-[#BE6464] cursor-pointer text-[20px] "
              onClick={redirect}
            >
              {" "}
              sign in
            </span>
          </p>
        </div>
        <div className="absolute right-3 top-3">
          {state?.userError?.status && (
            <Toast
              error={true}
              message={state?.userError?.message}
              close={close}
            />
          )}
        </div>
      </div>
    </center>
  );
};
export default Login;
