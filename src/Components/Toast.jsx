/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import cross from '../assets/cross.png';
import Success from '../assets/success.png';
import errorImg from '../assets/error.svg';
// eslint-disable-next-line react/prop-types
const Toast = ({
  message,
  close,
  error,
  exist,
  registerError,
  createdSuccessFullyWrong,
}) => {
  const className =
    createdSuccessFullyWrong === true ||
    registerError === true ||
    exist === true ||
    error === true
      ? ' flex justify-between p-[20px] h-[80px] rounded-[10px] bg-[#e05959]'
      : ' flex justify-between p-[20px] h-[80px] rounded-[10px] bg-[#18CB40] ';
  let src =
    createdSuccessFullyWrong === true ||
    registerError === true ||
    exist === true ||
    error === true
      ? errorImg
      : Success;
  return (
    <div className={className}>
      <img src={src} alt="" className="w-[40px] h-[40px]" />
      <p className="text-white mx-2 text-[16px] font-[500] mt-2">
        {message ? message : ''}
      </p>
      <img
        src={cross}
        alt=""
        className="w-[20px] h-[20px] mt-2 cursor-pointer"
        onClick={close}
      />
    </div>
  );
};

export default Toast;
