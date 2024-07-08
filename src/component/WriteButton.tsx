import { useLocation } from "react-router-dom";
import "../styles/styles.css";

const WriteButton = () => {
  const location = useLocation();
  return (
    <>
      <a href={`${location.pathname}/write`}>
        <button className="WriteButton">글쓰기</button>
      </a>
    </>
  );
};

export default WriteButton;
