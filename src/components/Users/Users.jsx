import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
  console.log(props);
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png",
        followed: false,
        fullname: "Arslan",
        status: "I am a boss",
        location: { city: "Elista", country: "Russia" },
      },
      {
        id: 2,
        photoUrl:
          "https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png",
        followed: true,
        fullname: "Aldar",
        status: "I am a boss",
        location: { city: "Pattaya", country: "Thailand" },
      },
      {
        id: 3,
        photoUrl:
          "https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png",
        followed: false,
        fullname: "Elveg",
        status: "I am a boss",
        location: { city: "Toronto", country: "Canada" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullname}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
