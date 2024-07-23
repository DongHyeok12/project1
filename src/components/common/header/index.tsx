import NavBar from "components/common/navBar";
import UpButton from "components/common/UpButton";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const where = location.pathname;
  return (
    <div className="header">
      <NavBar path={where} />
      <UpButton />
    </div>
  );
};
export default Header;
