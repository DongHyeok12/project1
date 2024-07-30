import ContentsList from "components/domain/contents";
import SubHeadLayout from "components/common/sub/SubHeadLayout";

const FreePage = () => {
  return (
    <>
      <SubHeadLayout>
        <ContentsList where="/free" />
      </SubHeadLayout>
    </>
  );
};

export default FreePage;
