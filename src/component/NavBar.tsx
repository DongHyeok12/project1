import React from "react";
import "../styles/styles.css"; // 스타일 시트 임포트
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  const links = [
    { path: "/", label: "홈" },
    { path: "/humor", label: "유머" },
    { path: "/free", label: "자유" },
  ];

  return (
    <div>
      {links.map(({ path, label }) => (
        <a
          key={path}
          className={`NavBar${location.pathname === path ? "-Select" : ""}`}
          href={path}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
