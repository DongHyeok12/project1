import WriteButton from "./WriteButton";
import "../styles/styles.css";
import { useLocation } from "react-router-dom";

const SubHead = () => {
  const location = useLocation();
  const isWhere = () => {
    if (location.pathname === "/humor") return "유머";
    else if (location.pathname === "/free") return "자유";
  };
  return (
    <div className="SubHead">
      <a className="SubHead_a" href={`${location.pathname}`}>
        {isWhere()} 게시판
      </a>
      <WriteButton />
    </div>
  );
};

export default SubHead;
