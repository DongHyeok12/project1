import React, { useEffect } from "react";
import { links } from "constant";
import { useSetRecoilState } from "recoil";
import { pathLabelState } from "recoil/atoms/PathLabelAtoms";
import { Link } from "react-router-dom";

interface navBarProps {
  path: string;
}

const NavBar = (props: navBarProps) => {
  const setPathLabel = useSetRecoilState(pathLabelState);

  useEffect(() => {
    if (props.path.startsWith("/contents/write")) {
    } else {
      setPathLabel(
        links.find((link) => props.path.startsWith(link.path)) || {
          path: "/",
          label: "홈",
        }
      );
    }
  }, [props, setPathLabel]);

  return (
    <>
      <div>
        <Link to="/">
          <img className="Logo" src="/img/logo.jpg" alt="꿀벌" />
        </Link>
        <Link
          className={`NavBar${props.path === "/" ? " selected" : ""}`}
          to="/"
        >
          홈
        </Link>
        {links.map((pathLabel) => (
          <a
            key={pathLabel.path}
            className={`NavBar${
              props.path.startsWith(pathLabel.path) ||
              props.path.endsWith(pathLabel.path) ||
              props.path.includes(pathLabel.path)
                ? " selected"
                : ""
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
