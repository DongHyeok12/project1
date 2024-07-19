import React, { useEffect } from "react";
import "styles/styles.css";
import { useLocation } from "react-router-dom";
import { links } from "constant";
import { useRecoilState } from "recoil";
import { pathLabelState } from "recoil/atoms/PathLabelAtoms";

const NavBar = () => {
  const location = useLocation();
  const [pathLabel, setPathLabel] = useRecoilState(pathLabelState);
  useEffect(() => {
    setPathLabel(
      links.find((link) => location.pathname.startsWith(link.path)) || {
        path: "/",
        label: "홈",
      }
    );
  }, [location]);
  return (
    <>
      <div>
        <a href="/">
          <img className="Logo" src="/img/logo.jpg" alt="꿀벌" />
        </a>
        <a
          className={`NavBar${pathLabel.path === "/" ? " selected" : ""}`}
          href="/"
        >
          홈
        </a>
        {links.map((pathLabel) => (
          <a
            key={pathLabel.path}
            className={`NavBar${
              location.pathname.startsWith(pathLabel.path) ? " selected" : ""
            }`}
            href={pathLabel.path}
          >
            {pathLabel.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default NavBar;
