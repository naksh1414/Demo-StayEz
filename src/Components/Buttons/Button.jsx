import { NavLink } from "react-router-dom";

const Button = ({ data, path }) => {
  return (
    <NavLink to={path}>
      <button className="bg-[#00A1FF] font-semibold text-white rounded-[10px] py-3 px-8">
        {data}
      </button>
      
    </NavLink>
  );
};

export default Button;

import { IoIosCall } from "react-icons/io";
export const Button2 = ({ data }) => {
  return (
    <button className="bg-[#00A1FF] font-semibold text-white rounded-[10px] py-3 px-8 flex flex-row justify-center items-center mx-2">
      <IoIosCall className="mr-3"></IoIosCall>
      {data}
    </button>
  );
};

export const Button3 = ({ data, path }) => {
  return (
    <NavLink to={path}>
      <button className="bg-[#00A1FF] font-semibold text-white rounded-[10px] py-3 px-8">
        {data}
      </button>
      
    </NavLink>
  );
};
