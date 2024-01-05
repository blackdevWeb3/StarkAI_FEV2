import React, { useContext, useState } from "react";

const UserContext = React.createContext({});

export const UserProvider = ({ children }: any) => {
  const T_KEY = "user";
  const getInitialUser = () => {
    return localStorage.getItem(T_KEY) ?? "none";
  };
  const [user, setUser] = useState(getInitialUser);

  const handleUser = (value: any) => {
    localStorage.setItem(T_KEY, value);
    setUser(value);
  };

  return (
    <UserContext.Provider value={{ user, setUser: handleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
