import React, { ReactNode } from "react";
import AuroraBackground from "./BackgroundBeams";
interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="h-full  px-4 py-3 ">
      {children}</div>
  );
};

export default Container;
