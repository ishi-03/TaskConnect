/* eslint-disable react/prop-types */
import Icon from './Icon';

// eslint-disable-next-line no-unused-vars
const NavBar = ({ handleClick, sendToProfile, createPage, profile }) => {
  return (
    <nav className="h-[80px] bg-white flex justify-between">
      <Icon name="logo" className="pt-2 pl-6 cursor-pointer" />

      <div className={profile || createPage ? 'hidden' : 'flex'}>
        <select className="w-[180px] h-[50px] outline-none border-[3px] text-[#BE6464] m-4 cursor-pointer border-[#BE6464]">
          <option value="Select option" className="text-center   text-[#000]">
            Select option
          </option>
          <option value="All task" className="text-center text-[#000]">
            All task
          </option>
          <option value="All task" className="text-center text-[#000]">
            In progress
          </option>
          <option value="completed" className="text-center text-[#000]">
            completed
          </option>
        </select>
      </div>

      <div className="flex m-4">
        <button
          onClick={handleClick}
          className="w-[250px] h-[50px] bg-[#BE6464] mx-2 rounded-[48px] text-[#fff] text-[20px] cursor-pointer	"
        >
          {createPage || profile ? 'view task' : 'Create Task'}
        </button>
        {!profile && <Icon name="profile" className="cursor-pointer	" handleClick={sendToProfile} />}
      </div>
    </nav>
  );
};

export default NavBar;
