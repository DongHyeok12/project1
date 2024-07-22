import { Link } from "react-router-dom";

const WriteButton = () => {
  return (
    <>
      <Link to={`/contents/write`}>
        <button className="WriteButton">글쓰기</button>
      </Link>
    </>
  );
};

export default WriteButton;
