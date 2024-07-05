import "../styles/NavBar.css";

export default function BtnTest() {
  return (
    <>
      <div>
        <a href="/">
          <button className="NavBar">HOME</button>
        </a>{" "}
        <a href="/humor">
          <button className="NavBar">HUMOR</button>
        </a>{" "}
        <a href="/free">
          <button className="NavBar">FREE</button>
        </a>
      </div>
    </>
  );
}
