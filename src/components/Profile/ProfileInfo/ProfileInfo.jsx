import React from "react";
import c from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://img5.goodfon.ru/original/3360x1050/2/eb/shveitsariia-gory-ozero-1.jpg"
          width="1200px"
        />
      </div>
      <div className={c.description}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
