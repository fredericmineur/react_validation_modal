import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [users, setUsers] = useState([]);
  const userListHandler = (username, age) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { username, age, id: Math.random().toString() }];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={userListHandler} />
      <UsersList users={users} />
    </Fragment>
  );
}

export default App;
