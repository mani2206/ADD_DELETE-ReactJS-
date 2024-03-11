import React from "react";

function UserTables(props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            
            props.users.map((user) => (
            
              <tr key={user.id || Math.random()}> 
                
                <th scope="row">{user.name}</th>
                <td>{user.username}</td>
                <td>
                  <button onClick={()=>props.deleteUser(user.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No user</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default UserTables;
