import { useNavigate } from "react-router-dom";
import Icon from "../Components/Icon";
import NavBar from "../Components/NavBar";
import { useContext } from "react";
import Context from "../Context/Context";
import Model from "../Components/Model";
import CreateContext from "../Context/CreateContext";
const Profile = () => {
  let { state, logoutButton, popuponYes, popuponNo } = useContext(Context);
  let { toDodata } = useContext(CreateContext);

  let navigate = useNavigate();
  const redirectToTodo = () => {
    navigate("/todo");
  };
  let userData = JSON.parse(localStorage.getItem("userInfo")) || {};
  // for login at
  const Logintiming = userData?.iat;
  const Logindate = new Date(Logintiming * 1000);
  const LoginAt = Logindate.toLocaleString();

  // for expire
  const Expiretiming = userData?.exp;
  const ExpireDate = new Date(Expiretiming * 1000);
  const ExpireAt = ExpireDate.toLocaleString();
  return (
    <div className="relative">
      <NavBar profile={true} handleClick={redirectToTodo} />
      <center>
        <div className="mt-[40px]  bg-[#fff] size-[650px] border-[#F81414] border-[2px]">
          <Icon name="profile" className="mt-12" />
          <div className="w-[500px] mt-8">
            <div className="flex justify-between mt-4 text-left">
              <h1 className="text-[#7AAC68] font-[400] text-[24px]">
                User name:
              </h1>
              <h1 className="text-[#000] font-[400] text-[20px]">
                {userData?.username}
              </h1>
            </div>
            <div className="flex justify-between mt-4 text-left">
              <h1 className="text-[#7AAC68] font-[400] text-[24px]">
                Email address
              </h1>
              <h1 className="text-[#000] font-[400] text-[20px]">
                {userData?.email}
              </h1>
            </div>
            <div className="flex justify-between mt-4 text-left">
              <h1 className="text-[#7AAC68] font-[400] text-[24px]">Role</h1>
              <h1 className="text-[#000] font-[400] text-[20px]">
                {" "}
                {userData?.role}
              </h1>
            </div>
            <div className="flex justify-between mt-4 text-left">
              <h1 className="text-[#7AAC68] font-[400] text-[24px]">
                Total task
              </h1>
              <h1 className="text-[#000] font-[400] text-[20px]">
                {" "}
                {toDodata?.length}
              </h1>
            </div>
            <div className="flex justify-between mt-4 text-left">
              <h1 className="text-[#7AAC68] font-[400] text-[24px]">
                In progress
              </h1>
              <h1 className="text-[#000] font-[400] text-[20px]">
                {" "}
                {toDodata?.length}
              </h1>
            </div>
            <div className="flex justify-between mt-4 text-left">
              <h1 className="text-[#7AAC68] font-[400] text-[24px]">
                Login at
              </h1>
              <h1 className="text-[#000] font-[400] text-[20px]"> {LoginAt}</h1>
            </div>
            <div className="flex justify-between mt-4 text-left">
              <h1 className="text-[#7AAC68] font-[400] text-[24px]">
                Login Expire at
              </h1>
              <h1 className="text-[#000] font-[400] text-[20px]">
                {" "}
                {ExpireAt}
              </h1>
            </div>
          </div>
          <button
            onClick={logoutButton}
            className="w-[250px] mt-12 h-[50px] bg-[#BE6464] text-[#fff] text-[20px]"
          >
            Logout
          </button>
        </div>
      </center>
      <div className="absolute top-[40%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
        {state?.open && (
          <Model
            popupYes={popuponYes}
            popupNo={popuponNo}
            PopUpMessage="Are you sure you want to logout ?"
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
