import WriteButton from "./WriteButton";
import "../styles/styles.css";
import { useLocation } from "react-router-dom";
import { links } from "../constant";

const SubHead = () => {
  const location = useLocation();
  const isWhere = () => {
    for (let i = 0; i < links.length; i++) {
      if (links[i].path === location.pathname) {
        return links[i].label;
      }
    }
  };
  return (
    <div className="SubHead">
      {/* <button onClick={isWhere}>test</button> */}
      <a className="SubHead_a" href={`${location.pathname}`}>
        {isWhere()}
      </a>{" "}
      <a className="SubHead_b" href={`${location.pathname}`}>
        게시판
      </a>
      <WriteButton />
    </div>
  );
};

export default SubHead;
