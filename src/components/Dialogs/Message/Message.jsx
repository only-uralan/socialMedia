import React from "react";
import c from "./../Dialogs.module.css";

const Message = (props) => {
  return <p className={c.message}>{props.message}</p>;
};

export default Message;
