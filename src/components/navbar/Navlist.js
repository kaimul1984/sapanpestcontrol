import React from "react";
import "./navlist.scss";
import { Link } from "react-scroll";
import { useContext } from "react";
import { Context } from "../../context/Context";

export const Navlist = ({ id, path, title, active, setSelected}) => {
  const {setIsOpen} = useContext(Context);
  function todo(){
    setSelected(id);
    setIsOpen(false);
  }
  return (
    <li key={id} >
      {/* <a
        href={path}
        className={active ? "link active" : "link"}
        onClick={() => setSelected(id)}>
        {title}
      </a> */}
      <Link
        to={path}
        spy={true}
        smooth={true}
        offset={-150}
        duration={300}
        className={active ? "link active" : "link"}
        onClick={()=> todo()}>
        {title}
      </Link>
    </li>
  );
};
