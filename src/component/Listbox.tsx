import { useLocation } from "react-router-dom";
import "../styles/styles.css";
import { contants } from "../constant";

const ListBox = () => {
  const location = useLocation();

  return (
    <>
      <table>
        <thead className="ListBox">
          <tr>
            <th className="thNum">번호</th>
            <th className="thTitle">제목</th>
            <th className="thWriter">작성자</th>
          </tr>
        </thead>
        <tbody>
          {contants
            .reverse()
            .slice(0, 20)
            .map(({ num, title, writer }) => (
              <tr>
                <td className="thNum">{num}</td>
                <td className="thTitle">
                  <a href={`${location.pathname}/${num}`}>{title}</a>
                </td>
                <td className="thWriter">{writer}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ListBox;
