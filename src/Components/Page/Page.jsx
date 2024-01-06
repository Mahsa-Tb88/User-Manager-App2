import React, { useState } from "react";
import "./page.scss";
import { FaUserPlus } from "react-icons/fa6";
import { HiArrowUturnLeft } from "react-icons/hi2";
import TableUser from "../TableUser/TableUser";
import UserInfo from "../UserInfo/UserInfo";
export default function Page({
  addUserClicked,
  setAddUserClicked,
  infoShowUser,
  setInfoShowUser,
  selectedUser,
  setSelectedUser,
}) {
  function handleButton() {
    setAddUserClicked(!addUserClicked);
    setInfoShowUser({ isShow: false, id: infoShowUser.id });
    setSelectedUser({ id: 0 });
  }

  return (
    <div className=" w-75 page p-4">
      <header className="d-flex justify-content-between align-items-center header">
        <div className="btn-group fs-6 d-flex justify-content-between align-items-center">
          <button className="btnAdd text-white" onClick={() => handleButton()}>
            {addUserClicked ? "Back" : "Add User"}
          </button>
          {addUserClicked ? <HiArrowUturnLeft /> : <FaUserPlus />}
        </div>
        <h2 className="fs-4">Home</h2>
      </header>
      <div className="text-center mt-5">
        {infoShowUser.isShow ? (
          <UserInfo selectedUser={selectedUser} />
        ) : addUserClicked ? (
          <TableUser />
        ) : (
          <DefaultPage />
        )}
      </div>
    </div>
  );
}

function DefaultPage() {
  return (
    <div>
      <h1>Welcome to User Manager App</h1>
      <p className="mt-5">Use Button above For Adding User</p>
      <p>Use Right Menu For Observing and Editing User</p>
    </div>
  );
}
