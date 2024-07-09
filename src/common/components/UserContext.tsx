'use client'
import React, { createContext, useState, ReactNode } from "react";
export interface UserDetails {
  username?: string;
  email?: string;
  password?: string;
}
interface ContextProps {
  userDetails: UserDetails | null;
  updateUserDetails: (details: Partial<UserDetails>) => void;
}

const Context = createContext<ContextProps>({
  userDetails: null,
  updateUserDetails: () => {},

});

const UserContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const updateUserDetails = (details: Partial<UserDetails>) => {
    setUserDetails((prevDetails) => ({
      ...(prevDetails || { username: "", profilePicture: "" }),
      ...details,
    }));
  };

  return (
    <Context.Provider value={{ userDetails, updateUserDetails }}>
      {children}
    </Context.Provider>
  );
};

export { UserContext, Context };