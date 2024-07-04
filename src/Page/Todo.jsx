/* eslint-disable no-unused-vars */
import Card from "../Components/Card";
import NavBar from "../Components/NavBar";
import { useContext } from "react";
import CreateContext from "../Context/CreateContext";
import Toast from "../Components/Toast";
import NoData from "./NoData";
import { useNavigate } from "react-router-dom";
import UpdateToDo from "./UpdateToDo";
const Todo = () => {
  const navigate = useNavigate();
  let { toDodata, deleteData, state, close, UpdateData,update } = useContext(CreateContext);

  const createClick = () => {
    navigate("/createTodo");
  };
  const profileClick = () => {
    navigate("/profile");
  };
  return (
    <div className="relative">
      <NavBar
        handleClick={createClick}
        home="true"
        sendToProfile={profileClick}
      />
      <div className="mx-auto">
        {toDodata?.length > 0  ?(
          <div className="grid grid-rows-6 grid-flow-col gap-4">
            {toDodata?.map((item) => {
              return (
                <Card
                  data={item}
                  key={item.id}
                  deleteData={() => deleteData(item?._id)}
                  updateData={() => UpdateData(item?._id)}
                />
              );
            })}
          </div>
        ):<NoData/>}
      </div>
      <div className="absolute right-3 top-3">
        {state?.successDelete?.status && (
          <Toast message={state?.successDelete?.message} close={close} />
        )}
         {state?.successUpdate?.status && (
          <Toast message={state?.successUpdate?.message} close={close} />
        )}
        {state?.unsuccessUpdate?.status && (
          <Toast message={state?.unsuccessUpdate?.message} close={close} />
        )}
        {
          update === true && <UpdateToDo/>
        }
      </div>
    </div>
  );
};

export default Todo;
