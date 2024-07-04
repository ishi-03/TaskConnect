import { useNavigate } from 'react-router-dom';
import taskManagement from '../assets/Taskmanagement.png';
import Model from '../Components/Model';
import React from 'react';
const Start = () => {
  let [show, setShow] = React.useState(false);
  const navigate = useNavigate();
  const startClick = () => {
    setShow(true);
  };

  const popupYes = () => {
    navigate('/login');
  };
  const popupNo = () => {
    navigate('/register');
  };
  return (
    <section className="relative">
      <center className="">
        <div className="flex justify-center">
          <img src={taskManagement} alt="taskManagement" />
        </div>
        <div className="w-[600px] h-[200px] ml-8 mt-6 border-[3px] border-[#BE6464]  bg-[#fff] rounded-[10px] ">
          <p className="text-center my-3 pt-10 font-[500] text-[20px]">
            Streamline your day with our intuitive task manager, seamlessly
            organizing tasks and boosting productivity. Your ultimate tool for
            efficient task management
          </p>
        </div>
        <button
          onClick={startClick}
          className="w-[250px] absolute top-[100%] mt-24 left-[50%] translate-x-[-50%] translate-y-[-50%] h-[50px] bg-[#BE6464] text-[#fff] text-[20px]"
        >
          Lets Start
        </button>
      </center>
      {show && (
        <div className="absolute top-[70%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
          <Model popupYes={popupYes} popupNo={popupNo} PopUpMessage="Do you have an account?"
 />
        </div>
      )}
    </section>
  );
};

export default Start;
