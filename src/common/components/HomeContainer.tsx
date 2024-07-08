import React, { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
}

const HomeContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="h-full   py-3 ">
      {children}</div>
  );
};

export default HomeContainer;
