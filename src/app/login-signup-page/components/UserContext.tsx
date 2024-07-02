'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";

type ProfilePicture = {
  id: number;
  src: string;
  alt: string;
};

interface UserContextType {
  profilePicture: ProfilePicture | null;
  userDetails: string | null;
  setProfilePicture: (picture: ProfilePicture | null) => void;
  updateUserDetails: (details: string | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userDetails, setUserDetails] = useState<string | null>(null);
  const [profilePicture, setProfilePicture] = useState<ProfilePicture | null>(
    null
  );

  const updateUserDetails = (details: string | null) => {
    setUserDetails(details);
  };

  return (
    <UserContext.Provider
      value={{ profilePicture, setProfilePicture, userDetails, updateUserDetails }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
