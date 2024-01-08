import React from "react";
import "./userList.scss";
import User from "../User/User";
import { getAllUsers } from "../../utils/storaje";
export default function UserList({ showUser, users, selectedUser, setUsers }) {
  function searchHandler(search) {
    console.log(search);
    const newUsers = getAllUsers();
    const filterUsers = newUsers.filter(
      (user) =>
        user.firstname.toLowerCase().includes(search) ||
        user.lastname.toLowerCase().includes(search)
    );
    setUsers(filterUsers );
  }
  return (
    <div className="w-25 text-center py-4 userList">
      <div className="inputSearch">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => searchHandler(e.target.value)}
        />
      </div>
      <div>
        <h2 className="fs-3 py-5">User List</h2>
        {users.length == 0 ? (
          <p className="bg-primary text-white p-2 fs-5">There is no user</p>
        ) : (
          ""
        )}
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
