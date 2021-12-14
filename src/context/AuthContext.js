import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <AuthContext.Provider
      value={{
        user: [loggedInUser, setLoggedInUser],
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
