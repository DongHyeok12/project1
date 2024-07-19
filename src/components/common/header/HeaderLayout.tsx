import React from "react";
import Header from ".";
import "styles/styles.css"; // 스타일 시트 임포트

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
