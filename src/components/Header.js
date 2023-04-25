import React from "react";
import logo from "../images/Favicon.png";

function Header(props) {
  const { setquery } = props;

  const updateQuery = (value) => {
    value = value.toLowerCase().split(" ").join("");
    setquery(value);
  };

  return (
    <div className="flex header justify-between px-10 h-10 items-center ">
      <div className="bg-black rounded-full  w-12 h-12 flex justify-center items-center">
        {" "}
        <img src={logo} alt="logo" className="w-10"></img>
      </div>
      <select
        onChange={(e) => {
          updateQuery(e.target.value);
        }}
        className="bg-transparent text-lg  border-[3px] 
           text-[white] outline-none px-8 font-semibold py-1  rounded-2xl  border-[rgb(255,211,166)]"
      >
        <option>Query 1</option>
        <option>Query 2</option>
        <option>Query 3</option>
        <option>Query 4</option>
        <option>Query 5</option>
      </select>
    </div>
  );
}

export default Header;
