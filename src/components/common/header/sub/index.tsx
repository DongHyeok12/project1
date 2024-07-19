import { pathLabelState } from "recoil/atoms/PathLabelAtoms";
import WriteButton from "components/domain/write/WriteButton";
import "styles/styles.css";
import { useRecoilValue } from "recoil";

const SubHead = () => {
  const pathLabel = useRecoilValue(pathLabelState);
  return (
    <div className="SubHead">
      <a className="SubHead_a" href={`${pathLabel.path}`}>
        {pathLabel.label}
      </a>{" "}
      <a className="SubHead_b" href={`${pathLabel.path}`}>
        게시판
      </a>
      <WriteButton />
    </div>
  );
};

export default SubHead;
