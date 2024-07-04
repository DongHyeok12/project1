import "../styles/btnTest.css";

export default function BtnTest() {
  return (
    <>
      <div>
        <a href="/button">
          <button className="buttonTest">button</button>
        </a>

        <button
          className="buttonTest"
          onClick={() => {
            console.log("눌러짐");
          }}
        >
          Test
        </button>
      </div>
    </>
  );
}
