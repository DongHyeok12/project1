import "../styles/HeadList.css";

export default function HeadList() {
  const menuEvent = document.getElementById("menuList");

  if (menuEvent) {
    menuEvent.addEventListener(
      "mouseover",
      (event: Event) => {
        const target = event.target as HTMLElement;
        target.style.color = "orange";
        target.style.backgroundColor = "#FFF999";
      },
      false
    );

    menuEvent.addEventListener(
      "mouseout",
      (event: Event) => {
        const target = event.target as HTMLElement;
        target.style.color = "orange";
        target.style.backgroundColor = "FDFD96";
      },
      false
    );
  }

  return (
    <>
      <div id="navBar">
        <ul id="menuList">
          <li>
            <a href="#home"> Home </a>
          </li>
          <li>
            <a href="#about"> About </a>
          </li>
          <li>
            <a href="#window1"> Like </a>
          </li>
          <li>
            <a href="#window2"> Stack </a>
          </li>
        </ul>
      </div>
    </>
  );
}
