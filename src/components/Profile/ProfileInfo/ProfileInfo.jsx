import React from "react";
import c from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://i.pinimg.com/originals/38/f1/01/38f101312f82af842e144b7119f1b23d.jpg"
          width="1200px"
        />
      </div>
      <div className={c.description}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
