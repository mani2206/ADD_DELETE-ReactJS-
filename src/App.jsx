import { useState } from "react";
import UserTables from "./tables/UserTables";

import "./App.css";
import AddUser from "./forms/AddUser";

function App(props) {
  const userData = [
    {
      id: 1,
      name: "mani",
      username: "developer",
    },
    {
      id: 2,
      name: "mano",
      username: "fullStack",
    },
  ];
   const [users,setUsers]= useState(userData)

  //  const addUser = (user)=>{
  //   user.id = user.length +1
  //   setUsers([...users,user])
  //  }
  const addUser = (user) => {
    const newId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
    user.id = newId;
    setUsers([...users, user]);
  };
  

   const deleteUser = (id)=>{
    setUsers(users.filter((user)=>user.id !== id))
   }
  return (
    <>
      <div className="container">
        <h4>CRUD App with Hooks</h4>
        <div className="d-flex justify-content-between pt-5">
          <div>
            <h4>Add User</h4>
            <AddUser addUser={addUser}/>
          </div>
          <div>
            <h4>View User</h4>
            <UserTables deleteUser={deleteUser } users={users}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
