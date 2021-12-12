import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./navbar.scss";
import navitems from "./navData";
import { Navlist } from "./Navlist";
const Navbar = () => {
  const [selected, setSelected] = useState("home");
  const { isOpen } = useContext(Context);
  //const [isOpen, setIsopen] = useState("false");
  return (
    <div className={isOpen ? 'navbar active' : 'navbar'}>
      <nav>
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
