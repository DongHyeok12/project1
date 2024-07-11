import { useLocation } from "react-router-dom";
import "../styles/styles.css";
import { useRecoilState } from "recoil";
import { contantsState } from "../state";
import { contants } from "../constant";

const ListBox = () => {
  const location = useLocation();
  const [contant, setContent] = useRecoilState(contantsState);

  return (
    <>
      <table>
        <thead className="ListBox">
          <tr>
            <td className="tdNum">번호</td>
            <td className="tdTitle">제목</td>
            <td className="tdWriter">작성자</td>
          </tr>
        </thead>
        <tbody>
          {contants.map(({ num, title, writer }) => (
            <tr>
              <td>{num}</td>
              <td>
                <a href={`${location.pathname}/${num}`}>{title}</a>
              </td>
              <td>{writer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListBox;
