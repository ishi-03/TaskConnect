/* eslint-disable react/prop-types */
import Icon from './Icon';

const Model = ({ popupYes, popupNo, PopUpMessage }) => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="bg-gradient-to-r  from-[#BE6464]  to-[#7AAC68] w-[600px] pt-8 h-[400px]">
        <div className="flex justify-center">
          <Icon name="warning" className="mt-12" />
        </div>
        <h1 className="text-center text-white text-[24px] mt-8">
          {PopUpMessage}
        </h1>
        <div className="flex justify-between mx-[130px] mt-12">
          <button
            onClick={popupYes}
            className="bg-gradient-to-r from-[#7AAC68]  to-[#F45C2B] text-[20px] rounded-[24px] text-white w-[130px] h-[50px]"
          >
            Yes
          </button>
          <button
            onClick={popupNo}
            className="bg-gradient-to-r from-[#EFAE2B]  to-[#F45C2B] text-[20px] rounded-[24px] text-white w-[130px] h-[50px]"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
