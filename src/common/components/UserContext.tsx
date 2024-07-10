'use client'
import React, { createContext, useState, ReactNode } from "react";

export interface UserDetails {
  username?: string;
  email?: string;
  password?: string;
}

interface ContextProps {
  userDetails: UserDetails | null;
  updateUserDetails: (details: UserDetails) => void;
}

const Context = createContext<ContextProps>({
  userDetails: null,
  updateUserDetails: () => {},
});

const UserContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const updateUserDetails = (details: UserDetails) => {
    setUserDetails(details);
  };

  return (
    <Context.Provider value={{ userDetails, updateUserDetails }}>
      {children}
    </Context.Provider>
  );
};

export { UserContext, Context };