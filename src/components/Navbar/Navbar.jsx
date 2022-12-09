import React from "react";
import c from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <ul>
        <li className={c.item}>
          <NavLink
            to="/profile"
            className={(elem) => (elem.isActive ? c.active : c.item)}
          >
            Profile
          </NavLink>
        </li>
        <li className={c.item}>
          <NavLink
            to="/dialogs"
            className={(elem) => (elem.isActive ? c.active : c.item)}
          >
            Messages
          </NavLink>
        </li>
        <li className={c.item}>
          <NavLink
            to="/users"
            className={(elem) => (elem.isActive ? c.active : c.item)}
          >
            Users
          </NavLink>
        </li>
        <li className={c.item}>
          <NavLink
            to="/news"
            className={(elem) => (elem.isActive ? c.active : c.item)}
          >
            News
          </NavLink>
        </li>
        <li className={c.item}>
          <NavLink
            to="/music"
            className={(elem) => (elem.isActive ? c.active : c.item)}
          >
            Music
          </NavLink>
        </li>
        <li className={c.item}>
          <NavLink
            to="/settings"
            className={(elem) => (elem.isActive ? c.active : c.item)}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
