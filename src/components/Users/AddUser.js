import React from "react";

const AddUsers = (props) => {
  function addUserHandler(event) {
    event.prevent.default();
  }

  return (
    <form onSubmit={(event) => addUserHandler(event)}>
      <label htmlFor="name">Username</label>
      <input type="text" id="username" placeholder="Enter your name" />
      <label htmlFor="age">Age</label>
      <input type="number" id="age" placeholder="Enter your age" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUsers;
