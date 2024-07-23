import { pathLabelState } from "recoil/atoms/PathLabelAtoms";
import WriteButton from "components/domain/write/WriteButton";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

const SubHead = () => {
  const pathLabel = useRecoilValue(pathLabelState);
  return (
    <div className="SubHead">
      <Link className="SubHead_a" to={`${pathLabel.path}`}>
        {pathLabel.label}
      </Link>{" "}
      <Link className="SubHead_b" to={`${pathLabel.path}`}>
        게시판
      </Link>
      <WriteButton />
    </div>
  );
};

export default SubHead;
