import { useLocation } from "react-router-dom";

const WriteButton = () => {
  const location = useLocation();
  return (
    <>
      <a href={`${location.pathname}/write`}>
        <button>글쓰기</button>
      </a>
    </>
  );
};

export default WriteButton;
