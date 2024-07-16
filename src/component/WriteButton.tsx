import { useLocation } from "react-router-dom";
import "../styles/styles.css";
import { useRecoilValue } from "recoil";
import { pathLabelState } from "../state";

const WriteButton = () => {
  const pathLabel = useRecoilValue(pathLabelState);
  return (
    <>
      <a href={`${pathLabel.path}/write`}>
        <button className="WriteButton">글쓰기</button>
      </a>
    </>
  );
};

export default WriteButton;
