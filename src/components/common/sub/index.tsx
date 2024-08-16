import { pathLabelState } from "recoil/atoms/PathLabelAtoms";
import { useRecoilValue } from "recoil";
import WriteButton from "../WriteButton";

const SubHead = () => {
  const pathLabel = useRecoilValue(pathLabelState);
  return (
    <div className="SubHead">
      <span className="SubHead_a">{pathLabel.label}</span>{" "}
      <span className="SubHead_b">게시판</span>
      <WriteButton />
    </div>
  );
};

export default SubHead;
