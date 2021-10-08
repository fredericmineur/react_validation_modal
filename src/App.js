import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

const [users, setUsers] = useState([]);
const userListHandler = (username, age) => {
  setUsers(prevUsers => {
    return [...prevUsers, {username, age, id: Math.random().toString()}]
  })

}

  return (
    <div>
      <AddUser onAddUser={userListHandler} />
      <UsersList users={users}/>
    </div>
  );
}

export default App;
