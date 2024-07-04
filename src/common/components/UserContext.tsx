'use client'
import React, { createContext, useState, ReactNode } from "react";

interface UserDetails {
  username: string;
  profilePicture: string;
}

interface ContextProps {
  userDetails: UserDetails | null;
  updateUserDetails: (details: Partial<UserDetails>) => void;
  updateProfile: (profilePicture: string) => void;
}

const Context = createContext<ContextProps>({
  userDetails: null,
  updateUserDetails: () => {},
  updateProfile: () => {},
});

const UserContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const updateUserDetails = (details: Partial<UserDetails>) => {
    setUserDetails((prevDetails) => ({
      ...(prevDetails || { username: "", profilePicture: "" }),
      ...details,
    }));
  };

  const updateProfile = (profilePicture: string) => {
    setUserDetails((prevDetails) => ({
      ...(prevDetails || { username: "", profilePicture: "" }),
      profilePicture: profilePicture,
    }));
  };

  return (
    <Context.Provider value={{ userDetails, updateUserDetails, updateProfile }}>
      {children}
    </Context.Provider>
  );
};

export { UserContext, Context };
