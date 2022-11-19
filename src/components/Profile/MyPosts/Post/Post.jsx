import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png" />
      <span>{props.message}</span>
      <p>likes {props.like}</p>
    </div>
  );
};

export default Post;
