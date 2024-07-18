import React from "react";
import "../../../../styles/styles.css"; // 스타일 시트 임포트
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
