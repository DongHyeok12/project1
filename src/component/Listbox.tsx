import { useLocation } from "react-router-dom";
import "../styles/styles.css";

const ListBox = () => {
  const location = useLocation();

  return (
    <>
      <ul>
        <li className="ListBox">
          <a href={`${location.pathname}/nn`}>hello</a>
        </li>
      </ul>
    </>
  );
};

export default ListBox;
