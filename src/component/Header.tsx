import "../styles/HeadList.css";
import BtnTest from "./BntTest";
import HeadLabel from "./common/HeadLabel";
import UpButton from "./UpButton";

export default function HeadList() {
  return (
    <>
      <BtnTest />
      <UpButton />

      <table id="navBar">
        <thead id="menuList">
          <td>
            <a href="/"> Home </a>
          </td>
          <td>
            <a href="/about"> About </a>
          </td>
          <td>
            <a href="/contact"> Contact </a>
          </td>
          {/* <td>
            <a href="/window1"> Like </a>
          </td>
          <td>
            <a href="/window2"> Stack </a>
          </td> */}
        </thead>
      </table>
    </>
  );
}
