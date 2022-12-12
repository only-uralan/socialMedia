import React from "react";
import c from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          src="https://i.pinimg.com/originals/38/f1/01/38f101312f82af842e144b7119f1b23d.jpg"
          width="1200px"
        />
      </div>
      <img src={props.profile.photos.small} alt="" />
      <div className={c.description}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
