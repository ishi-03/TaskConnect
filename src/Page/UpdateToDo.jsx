import NavBar from "../Components/NavBar";
import { useContext } from "react";
import CreateContext from "../Context/CreateContext";
import Toast from "../Components/Toast";
import { useNavigate } from "react-router-dom";
const UpdateToDo = () => {

    let {controlFormData, updateData } = useContext(CreateContext);

  //   const navigate = useNavigate();

  return (
    <div className="relative">
      <center>
        <div className="mt-[40px] bg-[#fff] size-[700px] border-[#F81414] border-[2px]">
          <h1 className="text-center text-[40px] mt-8 underline font-bold">
            Update Task
          </h1>
          <div className="w-[700px] h-[700px] mt-12">
            <h1 className="text-left ml-[50px] my-6 text-[#7AAC68] text-[20px] font-bold">
              Title
            </h1>
            <input
              className="w-[600px] h-[50px] border-[#7AAC68] border-[1px] rounded-[5px] outline-none placeholder:pl-4"
              type="text"
              placeholder="Enter your title"
              onChange={(e) => controlFormData(e, "title")}
            />
            <h1 className="text-left ml-[50px] my-6 text-[#7AAC68] text-[20px] font-bold">
              Description
            </h1>
            <input
              className="w-[600px] h-[150px] border-[#7AAC68] border-[1px] rounded-[5px] outline-none placeholder:pl-4"
              type="text"
              placeholder="Enter your description"
              onChange={(e) => controlFormData(e, "description")}
            />
            <button
              onClick={updateData}
              className="w-[350px] mt-12 h-[50px] bg-[#BE6464] text-[#fff] text-[20px]"
            >
              UpdateTask{" "}
            </button>
          </div>
        </div>
      </center>
      <div className="absolute right-3 top-3">
        
      </div>
    </div>
  );
};

export default UpdateToDo;
