import React from "react";
import "./user.scss";
export default function User({ showUser, user }) {
  const id = 3;
  const srcImg = `https://i.pravatar.cc/300?img=${user.id}`;
  return (
    <div
      className="d-flex justify-content-start align-items-center user mb-3 py-2 "
      onClick={() => showUser(id)}
    >
      <div className="w-25">
        <img className="w-50 rounded-circle" src={srcImg} />
      </div>
      <div>
        <span className="name">{user.firstname} </span>
        <span className="family">{user.lastname}</span>
      </div>
    </div>
  );
}
