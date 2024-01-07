import React from "react";
import "./userInfo.scss";
import { deleteUser } from "../../utils/storaje";
export default function UserInfo({
  selectedUser,
  editHandler,
  infoShowUser,
  setInfoShowUser,
  setAddUserClicked,
}) {
  const imageUser = "https://i.pravatar.cc/300?img=" + selectedUser.id;
  const listOfProvince = [
    "British Columbia",
    "Alberta",
    "Manitoba",
    "New Brunswick",
    "Nova Scotia",
    "Ontario",
    "Newfoundland and Labrador",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
  ];
  function deleteHandler(id) {
    // console.log("delete", id);
    deleteUser(id);
    setInfoShowUser({ isShow: false, id });
    setAddUserClicked(false);
  }
  return (
    <div className="w-75 userinfo d-flex flex-column justify-content-start align-items-start">
      <div className="d-flex justify-content-start align-items-center">
        <img src={imageUser} className="w-25 rounded-circle me-5" />
        <div>
          <p className="fs-4 mb-4">
            {selectedUser.firstname} {selectedUser.lastname}
          </p>
          <div>
            <button
              className="btn-edit me-3"
              onClick={() => {
                deleteHandler(selectedUser.id);
              }}
            >
              Delete User
            </button>
            <button
              className="btn-delete"
              onClick={() => editHandler(selectedUser.id)}
            >
              Edit User
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4  d-flex flex-column justify-content-start align-items-start">
        <div className="p-2 border-bottom section">
          <span className="fs-5">Phone:</span>
          <span className="fs-5 ms-4">{selectedUser.phone}</span>
        </div>
        <div className="p-2 border-bottom section ">
          <span className="fs-5">Province:</span>
          <span className="fs-5 ms-4">
            {listOfProvince[selectedUser.province]}
          </span>
        </div>
        <div className="p-2 border-bottom section ">
          <span className="fs-5">Description:</span>
          <p className="mt-2 ms-4 desc">lorem50 mamamamamamam</p>
        </div>
      </div>
    </div>
  );
}
