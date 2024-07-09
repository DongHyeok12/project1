import React from "react";
import "../styles/styles.css"; // 스타일 시트 임포트
import { useLocation } from "react-router-dom";
import { links } from "../constant";

export default function NavBar() {
  const location = useLocation();

  return (
    <>
      <div>
        <a href="/">
          <img className="Logo" src="/img/logo.jpg" alt="꿀벌" />
        </a>
        {links.map(({ path, label }) => (
          <a
            key={path}
            className={`NavBar${location.pathname === path ? " selected" : ""}`}
            href={path}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
