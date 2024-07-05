import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <>
      <div>
        <a className="NavBar" href="/">
          홈
        </a>
        {"     "}
        <a className="NavBar" href="/humor">
          유머
        </a>
        {"     "}
        <a className="NavBar" href="/free">
          자유
        </a>
      </div>
    </>
  );
}
