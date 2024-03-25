import React, { useContext, useState } from "react";

const UserContext = React.createContext({});

export const UserProvider = ({ children }: any) => {
  const CONTEXT_KEY = "user";
  const getInitialUser = () => {
    return localStorage.getItem(CONTEXT_KEY) ?? "None";
  };
  const [user, setUser] = useState(getInitialUser);

  const handleUser = (value: any) => {
    localStorage.setItem(CONTEXT_KEY, value);
    setUser(value);
  };

  return (
    <UserContext.Provider value={{ user, setUser: handleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
