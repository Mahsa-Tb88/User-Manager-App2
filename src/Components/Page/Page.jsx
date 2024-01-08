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
  editHandler,
  editUser,
  setEditUser,
  setUsers,
  setSelectedUpdateUser,
  selectedUpdateUser,
}) {
  function handleButton() {
    setAddUserClicked(!addUserClicked);
    setInfoShowUser({ isShow: false, id: infoShowUser.id });
    setSelectedUser({ id: 0 });
    setEditUser({ status: false, id: editUser.id });
  }
  console.log(infoShowUser.isShow, editUser.status);
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
        {editUser.status && editUser.id == infoShowUser.id ? (
          <TableUser
            editUser={editUser}
            setUsers={setUsers}
            setEditUser={setEditUser}
            setAddUserClicked={setAddUserClicked}
            addUserClicked={addUserClicked}
            setSelectedUpdateUser={setSelectedUpdateUser}
            selectedUpdateUser={selectedUpdateUser}
          />
        ) : infoShowUser.isShow ? (
          <UserInfo
            selectedUser={selectedUser}
            editHandler={editHandler}
            infoShowUser={infoShowUser}
            setInfoShowUser={setInfoShowUser}
            setAddUserClicked={setAddUserClicked}
            setUsers={setUsers}
            selectedUpdateUser={selectedUpdateUser}
          />
        ) : addUserClicked ? (
          <TableUser
            editUser={editUser}
            setUsers={setUsers}
            setEditUser={setEditUser}
            setAddUserClicked={setAddUserClicked}
            addUserClicked={addUserClicked}
            setSelectedUpdateUser={setSelectedUpdateUser}
            selectedUpdateUser={selectedUpdateUser}
          />
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
      <p className="mt-5">Use Above Button For Adding User</p>
      <p>Use Left Menu For Observing and Editing User</p>
    </div>
  );
}
