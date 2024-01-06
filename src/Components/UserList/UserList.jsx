import React from "react";
import "./userList.scss";
import User from "../User/User";
export default function UserList({ showUser, users, selectedUser }) {
  return (
    <div className="w-25 text-center py-4 userList">
      <div className="inputSearch">
        <input type="text" placeholder="Search..." className="search" />
      </div>
      <div>
        <h2 className="fs-3 py-5">User List</h2>
        {users.map((user) => (
          <User
            showUser={showUser}
            user={user}
            key={user.id}
            selectedUser={selectedUser}
          />
        ))}
      </div>
    </div>
  );
}
