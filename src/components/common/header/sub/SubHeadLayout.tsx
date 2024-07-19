import React from "react";
import "styles/styles.css";
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
