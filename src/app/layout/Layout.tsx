import React from "react";
import Header from "../header";
import ToastProvider from "@/common/components/ToastContainer";
// Define LayoutProps interface
export interface LayoutProps {
  children: React.ReactNode;
  isPublic?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-between flex-col">
      <ToastProvider>
        <Header />
         {children}
      </ToastProvider>
    </div>
  );
};

export default Layout;
