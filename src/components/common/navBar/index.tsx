import React, { useEffect } from "react";
import { links } from "constant";
import { useSetRecoilState } from "recoil";
import { pathLabelState } from "recoil/atoms/PathLabelAtoms";

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
  }, [props]);
  console.log(props.path);

  return (
    <>
      <div>
        <a href="/">
          <img className="Logo" src="/img/logo.jpg" alt="꿀벌" />
        </a>
        <a
          className={`NavBar${props.path === "/" ? " selected" : ""}`}
          href="/"
        >
          홈
        </a>
        {links.map((pathLabel) => (
          <a
            key={pathLabel.path}
            className={`NavBar${
              props.path.startsWith(pathLabel.path) ||
              props.path.endsWith(pathLabel.path)
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
