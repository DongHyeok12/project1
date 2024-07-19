import React from "react";
import Header from ".";

interface HeaderLayoutProps {
  children: React.ReactNode;
}

const HeaderLayout = ({ children }: HeaderLayoutProps) => {
  return (
    <div className="headerLayout">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default HeaderLayout;
