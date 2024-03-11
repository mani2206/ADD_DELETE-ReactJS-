import React from "react";
import { useState } from "react";
function AddUser(props) {
  const initialValue = {
    id:null,
    name:"",
    username:""
  }
  const [user,setAddUser]= useState(initialValue)

  const handleInputChange =(e)=>{
    const {name,value}= e.target
    setAddUser({...user,[name]:value})

  }
  return (
    <>
      <form onSubmit={
        (e)=>{
          e.preventDefault();
          if(!user.name || !user.username)return;
          props.addUser(user)
          setAddUser(initialValue)

        }
      }>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleInputChange}
          
            placeholder="Enter Name"
            name="name"
            value={user.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">UserName</label>
          <input
            type="text"
            className="form-control"
          
            name="username"
            onChange={handleInputChange}
            placeholder="User Name"
            value={user.username}
          />
        </div>

        <button type="submit" className="btn btn-primary my-2">
          Add User
        </button>
      </form>
    </>
  );
}

export default AddUser;
