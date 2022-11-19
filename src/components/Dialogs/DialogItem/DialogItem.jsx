import React from "react";
import c from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <li className={c.dialog}>
      <NavLink to={"/dialogs/" + props.id} className={c.link}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default DialogItem;
