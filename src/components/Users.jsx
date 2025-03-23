import React from "react";
import User from "./User";
import { UseUsersContext } from "../hook/UseUsersContext";

const Users = ({ handleDeleteUser }) => {
    const {users} = UseUsersContext();
  return (
    <section className="users">
      {users.map((user) => (
        <User key={user.id} user={user} handleDeleteUser={handleDeleteUser} />
      ))}
    </section>
  );
};

export default Users;
