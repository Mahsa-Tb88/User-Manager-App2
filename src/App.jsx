import React, { useEffect, useState } from "react";
import Page from "./Components/Page/Page";
import UserList from "./Components/UserList/UserList";

import { getAllUsers } from "./utils/storaje";
export default function App() {
  const [infoShowUser, setInfoShowUser] = useState({ isShow: false, id: null });
  const [addUserClicked, setAddUserClicked] = useState(false);
  const [selectedUser, setSelectedUser] = useState({ id: 0 });
  const [editUser, setEditUser] = useState(false);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const users = getAllUsers();
    setUsers(users);
  }, []);

  function showUser(id) {
    console.log(id);
    setInfoShowUser({ isShow: true, id });
    setAddUserClicked(true);
    const user = users.find((user) => user.id == id);
    setSelectedUser(user);
  }
  return (
    <div className="">
      <div className="d-flex justify-content-between align-items-start w-full ">
        <UserList
          showUser={showUser}
          users={users}
          selectedUser={selectedUser}
        />
        <Page
          addUserClicked={addUserClicked}
          setAddUserClicked={setAddUserClicked}
          infoShowUser={infoShowUser}
          setInfoShowUser={setInfoShowUser}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      </div>
    </div>
  );
}
