import NavBar from "components/common/navBar";
import UpButton from "components/common/UpButton";
import "styles/styles.css"; // 스타일 시트 임포트

const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <UpButton />
    </div>
  );
};
export default Header;
