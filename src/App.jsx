import React, { useEffect, useState } from "react";
import Page from "./Components/Page/Page";
import UserList from "./Components/UserList/UserList";
import UserInfo from "./Components/UserInfo/UserInfo";
import { usersData } from "./utils/data";
export default function App() {
  const [infoShowUser, setInfoShowUser] = useState({ isShow: true, id: null });
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log(users);
    setUsers(usersData);
  }, []);
  function showUser(id) {
    console.log(id);
    setInfoShowUser({ isShow: true, id });
  }
  return (
    <div className="">
      <div className="d-flex justify-content-between align-items-start w-full ">
        <UserList showUser={showUser} users={users} />
        <Page />
      </div>
    </div>
  );
}
