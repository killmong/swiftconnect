import React from 'react';
import Header from '../header';

// Define LayoutProps interface
export interface LayoutProps {
  children: React.ReactNode;
  isPublic?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex justify-between flex-col'>
      <Header/>
      {children} {/* Render children components */}
    </div>
  );
};

export default Layout;
