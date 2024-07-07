import { useLocation } from "react-router-dom";

const ListBox = () => {
  const location = useLocation();

  return (
    <>
      <ul>
        <li>
          <a href={`${location.pathname}/nn`}>hello</a>
        </li>
      </ul>
    </>
  );
};

export default ListBox;
