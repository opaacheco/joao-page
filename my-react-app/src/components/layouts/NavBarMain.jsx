import Styles from "./NavBarMain.module.css";

function NavBarMain() {
  return (
    <header className={Styles.container}>
      <h1>
        JOÃO <span className={Styles.transform}>ARCH</span>
      </h1>
      <nav>
        <ul className={Styles.lista}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBarMain;
