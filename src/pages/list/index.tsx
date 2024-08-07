import SubHeadLayout from "components/common/sub/SubHeadLayout";
import ContentsList from "components/domain/contents";
import { useParams } from "react-router-dom";

const ListPage = () => {
  const { pageId } = useParams();
  if (!pageId) {
    return <div>페이지 ID가 제공되지 않음</div>;
  }
  return (
    <>
      <SubHeadLayout>
        <ContentsList pageId={pageId} />
      </SubHeadLayout>
    </>
  );
};

export default ListPage;
