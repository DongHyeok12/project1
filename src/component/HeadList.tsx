import "../styles/HeadList.css";

export default function HeadList() {
  const menuEvent = document.getElementById("menuList");

  if (menuEvent) {
    menuEvent.addEventListener(
      "mouseover",
      (event: Event) => {
        const target = event.target as HTMLElement;

        target.className = "tableTestHover";
      },
      false
    );

    menuEvent.addEventListener(
      "mouseout",
      (event: Event) => {
        const target = event.target as HTMLElement;

        target.style.backgroundColor = "";
      },
      false
    );
  }

  return (
    <>
      <table id="navBar">
        <thead id="menuList">
          <td>
            <a href="#home"> Home </a>
          </td>
          <td>
            <a href="#about"> About </a>
          </td>
          <td>
            <a href="#window1"> Like </a>
          </td>
          <td>
            <a href="#window2"> Stack </a>
          </td>
        </thead>
      </table>
    </>
  );
}
