/* eslint-disable react/prop-types */
import Icon from "./Icon";

const Card = ({
  createdOn,
  completed,
  deleteData,
  updateData,
  data = {}, // Setting a default value for data
}) => {
  let InitialValues = {
    initialTitle: "React js",
    initialDescription:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim",
    initialCreatedOn: "5/7/16",
    initialCompleted: "false",
  };

  let { title, description } = data;

  return (
    <div>
      <section className="w-[400px]  border-[2px] border-[#000] relative bg-[#fff]  m-4">
        <h1 className="text-[24px] text-[#000] font-bold text-center">
          {title ? title : InitialValues.initialTitle}
        </h1>
        <hr className="border-[2px] border-[#000] mt-[4px]" />
        <div className="p-6">
          <div className="">
            <h1 className="text-[20px] text-[#000] font-bold">Description :</h1>
            <p className="text-[#000] text-[16px] ">
              {description ? description : InitialValues.initialDescription}
            </p>
          </div>
          <div className="flex justify-between mt-6">
            <div className="flex ">
              <h1 className="text-[20px] text-[#000] font-bold">Created On:</h1>
              <p className="text-[#000] text-[16px] mt-[4px] ml-[4px]">
                {createdOn ? createdOn : InitialValues.initialCreatedOn}
              </p>
            </div>
            <div className="flex ">
              <h1 className="text-[20px] text-[#000] font-bold">Completed:</h1>
              <p className="text-[#000] text-[16px]  mt-[4px]  ml-[4px]">
                {" "}
                {completed ? completed : InitialValues.initialCompleted}
              </p>
            </div>
          </div>

          <div className="absolute bottom-[-30px] right-0 cursor-pointer flex ">
            <Icon name="delete" handleClick={deleteData} />
            <Icon name="update" handleClick={updateData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
