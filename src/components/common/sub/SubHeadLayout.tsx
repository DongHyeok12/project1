import React from "react";
import SubHead from ".";
interface SubHeadLayoutProps {
  children: React.ReactNode;
}

const SubHeadLayout = ({ children }: SubHeadLayoutProps) => {
  return (
    <div className="SubHeadLayout">
      <SubHead />
      <main>{children}</main>
    </div>
  );
};

export default SubHeadLayout;
