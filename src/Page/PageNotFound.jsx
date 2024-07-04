/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from '../assets/404.png';
const PageNotFound = () => {
  let navigate = useNavigate();
  const back = () => {
    navigate('/');
  };
  return (
    <div className="flex justify-center h-[100vh] w-[100%]">
      <div className=" w-[70%] mx-12 pt-12 ">
        <h1 className="text-[40px] text-red-600 font-bold">Ooops...</h1>
        <h1 className="text-[40px] text-blacks font-bold pt-12">
          Page Not Found
        </h1>
        <p className="text-[24px]  pt-12 w-[40%]">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable. Please check the URL or return
          to the homepage for further assistance.
        </p>
        <button
          className="w-[300px] mt-12 h-[50px] bg-[#FF4F5B] text-[20px] text-[#fff] rounded-[14px]"
          onClick={back}
        >
          Back{' '}
        </button>
      </div>
      <div className=" w-[30%] mt-12 ml-12">
        <img src={notFound} />
      </div>
    </div>
  );
};

export default PageNotFound;
