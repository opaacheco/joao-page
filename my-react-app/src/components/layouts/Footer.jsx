import Styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <p className={Styles.rodape}>
        &copy; {new Date().getFullYear()} joão arquitetura
      </p>
    </footer>
  );
}

export default Footer;
