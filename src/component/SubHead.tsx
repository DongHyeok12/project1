import WriteButton from "./WriteButton";
import "../styles/styles.css";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { pathLabelState } from "../state";

const SubHead = () => {
  const location = useLocation();
  const pathLabel = useRecoilValue(pathLabelState);
  return (
    <div className="SubHead">
      <a className="SubHead_a" href={`${location.pathname}`}>
        {pathLabel.label}
      </a>{" "}
      <a className="SubHead_b" href={`${location.pathname}`}>
        게시판
      </a>
      <WriteButton />
    </div>
  );
};

export default SubHead;
