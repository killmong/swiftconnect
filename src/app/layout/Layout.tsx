import React from "react";
import Header from "../header";
import ToastProvider from "@/common/components/ToastContainer";
import { UserContext } from "@/common/components/UserContext";
// Define LayoutProps interface
export interface LayoutProps {
  children: React.ReactNode;
  isPublic?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-between flex-col">
      <UserContext>
      <ToastProvider>
        <Header />
         {children}
      </ToastProvider>
      </UserContext>
    </div>
  );
};

export default Layout;
