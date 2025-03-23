import React, { useState } from "react";
import { UseUsersContext } from "../hook/UseUsersContext";

const NewUser = () => {
  const [userName, setUserName] = useState("");
  const { addUser } = UseUsersContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = new Date().getTime().toString();
    const newUser = {
      id: newId,
      username: userName,
    };
    addUser(newUser);
    setUserName("");
  };
  const handleInput = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User Name: </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleInput}
          value={userName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewUser;
