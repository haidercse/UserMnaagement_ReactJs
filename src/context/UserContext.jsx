import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/UsersReducer";

export const UsersContext = createContext({});

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    users: state.users,
    addUser: (newUser) => {
      dispatch({ type: "ADD_USER", payload: newUser });
    },
    deleteUser: (id) => {
      dispatch({ type: "DELETE_USER", payload: id });
    },
  };
  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  );
};

export default UserProvider;
