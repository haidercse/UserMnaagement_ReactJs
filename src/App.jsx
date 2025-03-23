import React from "react";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import UserProvider from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>User Management</h1>
        <NewUser />
        <Users />
      </div>
    </UserProvider>
  );
};

export default App;
