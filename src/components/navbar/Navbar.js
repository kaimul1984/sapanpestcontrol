import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./navbar.scss";
import navitems from "./navData";
import { Navlist } from "./Navlist";
import img1 from '../../image/navimg.jpg'
const Navbar = () => {
  const [selected, setSelected] = useState("home");
  const { isOpen, show } = useContext(Context);

  return (
    <div
      className={
        isOpen
          ? "navbar active"
          : "navbar" && show
          ? "navbar"
          : "navbar reverse"
      }>
      <nav>
        <div className="img">
          <img src={img1} alt="" />
          <h1>Sapan Oberoi</h1>
        </div>
        <ul>
          {navitems.map((item) => {
            return (
              <Navlist
                key={item.id}
                path={item.path}
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
