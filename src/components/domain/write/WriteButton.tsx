import { pathLabelState } from "recoil/atoms/PathLabelAtoms";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

const WriteButton = () => {
  const path = useRecoilValue(pathLabelState);

  return (
    <>
      <Link key={path.path} to={`/contents/write${path.path}`}>
        <button className="WriteButton">글쓰기</button>
      </Link>
    </>
  );
};

export default WriteButton;
