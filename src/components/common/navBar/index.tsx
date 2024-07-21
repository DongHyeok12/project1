import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { links } from "constant";
import { useRecoilState } from "recoil";
import { pathLabelState } from "recoil/atoms/PathLabelAtoms";
import { ExpathState } from "recoil/atoms/ExpathAtoms";

const NavBar = () => {
  const location = useLocation();
  const [pathLabel, setPathLabel] = useRecoilState(pathLabelState);
  const [exPath, setExPath] = useRecoilState(ExpathState);

  useEffect(() => {
    if (location.pathname === "/contents/write") {
      setPathLabel(exPath);
    } else {
      setPathLabel(
        links.find((link) => location.pathname.startsWith(link.path)) || {
          path: "/",
          label: "홈",
        }
      );
      setExPath(pathLabel);
    }
  }, [location]);
  console.log(exPath.path + "sss" + pathLabel.path);

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
