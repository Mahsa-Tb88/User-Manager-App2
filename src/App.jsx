import React, { useEffect, useState } from "react";
import Page from "./Components/Page/Page";
import UserList from "./Components/UserList/UserList";

import { getAllUsers, updateUsers } from "./utils/storaje";
export default function App() {
  const [infoShowUser, setInfoShowUser] = useState({ isShow: false, id: null });
  const [addUserClicked, setAddUserClicked] = useState(false);
  const [selectedUser, setSelectedUser] = useState({ id: 0 });
  const [editUser, setEditUser] = useState({ status: false, id: 0 });
  const [selectedUpdateUser, setSelectedUpdateUser] = useState({
    status: false,
    user: {},
  });
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const allUsers = getAllUsers();
    setUsers(allUsers);
  }, []);

  function showUser(id) {
    console.log(id);
    setInfoShowUser({ isShow: true, id });
    setAddUserClicked(true);
    const user = users.find((user) => user.id == id);
    setSelectedUser(user);
    setSelectedUpdateUser({ status: false, user: {} });
    setEditUser({ status: false, id: null });
  }
  function editHandler(id) {
    setEditUser({ status: true, id });
  }
  return (
    <div className="">
      <div className="d-flex justify-content-between align-items-start w-full ">
        <UserList
          showUser={showUser}
          users={users}
          setUsers={setUsers}
          selectedUser={selectedUser}
        />
        <Page
          addUserClicked={addUserClicked}
          setAddUserClicked={setAddUserClicked}
          infoShowUser={infoShowUser}
          setInfoShowUser={setInfoShowUser}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          editHandler={editHandler}
          editUser={editUser}
          setEditUser={setEditUser}
          setUsers={setUsers}
          selectedUpdateUser={selectedUpdateUser}
          setSelectedUpdateUser={setSelectedUpdateUser}
        />
      </div>
    </div>
  );
}
