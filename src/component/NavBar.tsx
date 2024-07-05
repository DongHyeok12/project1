import React from "react";
import "../styles/styles.css"; // 스타일 시트 임포트

export default function BtnTest() {
  return (
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
  );
}
