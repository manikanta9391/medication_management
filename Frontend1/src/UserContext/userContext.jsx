import { createContext, useContext, useState } from "react";


const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    username: "",
    email: "",
    userId: "",
  });

  const login = (userData) => {
    setUser({
      isLoggedIn: true,
      ...userData,
    });
  };

  const logout = () => {
    setUser({
      isLoggedIn: false,
      username: "",
      email: "",
      userId: "",
    });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => useContext(UserContext);
