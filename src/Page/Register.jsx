
import { useNavigate } from 'react-router-dom';
import Icon from '../Components/Icon';
import { useContext } from 'react';
import Context from '../Context/Context';
import Toast from '../Components/Toast';

const Register = () => {
  const { register, collectRegisterData, state, close } = useContext(Context);

  let navigate = useNavigate();
  const redirect = () => {
    navigate('/login');
  };

  return (
    <center>
      <div className="relative">
        <Icon name="Auth" className="mt-[40px]" />
        <div className="w-[700px] h-[700px] ">
          <h1 className="text-left ml-[50px] my-6 text-[#FFF] text-[20px] font-bold">
            User name
          </h1>
          <input
            className="w-[600px] h-[50px] border-[#FFF] border-[1px] rounded-[5px] outline-none placeholder:pl-4"
            type="text"
            value={state.userName}
            placeholder="Enter your username"
            onChange={(e) => collectRegisterData(e, 'USER_NAME')}
          />
          <h1 className="text-left ml-[50px] my-6 text-[#FFF] text-[20px] font-bold">
            Email address
          </h1>
          <input
            className="w-[600px] h-[50px] border-[#FFF] border-[1px] rounded-[5px] outline-none placeholder:pl-4"
            type="email"
            value={state.email}
            placeholder="Enter your email"
            onChange={(e) => collectRegisterData(e, 'EMAIL')}
          />
          <h1 className="text-left ml-[50px] my-6 text-[#FFF] text-[20px] font-bold">
            Password
          </h1>
          <input
            className="w-[600px] h-[50px] border-[#FFF] border-[1px] rounded-[5px] outline-none placeholder:pl-4"
            type="password"
            value={state.password}
            placeholder="Enter your password"
            onChange={(e) => collectRegisterData(e, 'PASSWORD')}
          />
          <button
            onClick={register}
            className="w-[250px] mt-12 h-[50px] bg-[#BE6464] text-[#fff] text-[20px]"
          >
            Register
          </button>

          <p className=" mt-6 text-[20px]">
            Already have an account ?
            <span
              className="text-[#BE6464] cursor-pointer text-[20px] "
              onClick={redirect}
            >
              {' '}
              sign in
            </span>
          </p>
        </div>
        <div className="absolute right-3 top-3">
          {state?.userRegister?.status && (
            <Toast message={state?.userRegister?.message} close={close} />
          )}
          {state?.userError?.status && (
            <Toast
              error={true}
              message={state?.userError?.message}
              close={close}
            />
          )}
          {state?.userExist?.status && (
            <Toast
              exist={true}
              message={state?.userExist?.message}
              close={close}
            />
          )}
          {state?.registerError?.status && (
            <Toast
              registerError={true}
              message={state?.registerError?.message}
              close={close}
            />
          )}
        </div>
      </div>
    </center>
  );
};

export default Register;
