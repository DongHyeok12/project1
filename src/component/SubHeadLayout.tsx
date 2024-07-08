import React from "react";
import SubHead from "./SubHead";
import "../styles/styles.css"; // 스타일 시트 임포트

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
