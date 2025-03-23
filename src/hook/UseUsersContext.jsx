import { useContext } from "react";
import { UsersContext } from "../context/UserContext";

export const UseUsersContext = () => {
  return useContext(UsersContext);
};
