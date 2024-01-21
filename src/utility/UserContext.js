import { createContext, useState } from "react";

export const UserContextProvider = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContextProvider.Provider value={{ user, setUser }}>
      {children}
    </UserContextProvider.Provider>
  );
};

export default UserContext;
