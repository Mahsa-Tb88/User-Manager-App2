import React from "react";
import "./user.scss";
export default function User({ showUser, user, selectedUser }) {
  const userClass = [
    "d-flex justify-content-start align-items-center user mb-3 py-2",
    selectedUser.id == user.id ? "userSelected" : "",
  ].join(" ");

  return (
    <div className={userClass} onClick={() => showUser(user.id)}>
      <div className="w-25">
        <img className="w-50 rounded-circle" src={user.img} />
      </div>
      <div>
        <span className="name">{user.firstname} </span>
        <span className="family">{user.lastname}</span>
      </div>
    </div>
  );
}
