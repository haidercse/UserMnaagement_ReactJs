import React from "react";
import { UseUsersContext } from "../hook/UseUsersContext";

const User = ({ user }) => {
  const { id, username } = user;
  const { deleteUser } = UseUsersContext();
  const handleDelete = (id) => {
    deleteUser(id);
  };
  return (
    <article className="user">
      <h2>{id}</h2>
      <p>{username}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
