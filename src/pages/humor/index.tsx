import SubHeadLayout from "components/common/sub/SubHeadLayout";
import ContentsList from "components/domain/contents";

const HumorPage = () => {
  return (
    <>
      <SubHeadLayout>
        <ContentsList where="/humor" />
      </SubHeadLayout>
    </>
  );
};

export default HumorPage;
