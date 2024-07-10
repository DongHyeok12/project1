import React, { useEffect } from "react";
import "../styles/styles.css"; // 스타일 시트 임포트
import { useLocation } from "react-router-dom";
import { links } from "../constant";
import { useRecoilState } from "recoil";
import { pathLabelState } from "../state";

export default function NavBar() {
  const location = useLocation();
  const [pathLabel, setPathLabel] = useRecoilState(pathLabelState);
  console.log(pathLabel);
  useEffect(() => {
    const a = links.find((link) => location.pathname.startsWith(link.path)) || {
      path: "/",
      label: "홈",
    };
    setPathLabel(a);
  }, [location]);
  return (
    <>
      <div>
        <a href="/">
          <img className="Logo" src="/img/logo.jpg" alt="꿀벌" />
        </a>
        <a
          className={`NavBar${location.pathname === "/" ? " selected" : ""}`}
          href="/"
        >
          홈
        </a>
        {links.map(({ path, label }) => (
          <a
            key={path}
            className={`NavBar${
              location.pathname.startsWith(path) ? " selected" : ""
            }`}
            href={path}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
