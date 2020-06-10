import styles from "../styles/Navbar.module.css";
import { Link } from "react-scroll";

const showMenu = () => {
  document.getElementById("menu").style.top = "0";
  document.getElementById("cover").style.visibility = "visible";
  document.getElementById("cover").style.opacity = "50%";
};

const hideMenu = () => {
  document.getElementById("menu").style.top = "-60px";
  document.getElementById("cover").style.opacity = "0%";
  document.getElementById("cover").style.visibility = "hidden";
};

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cover} id="cover" onClick={hideMenu} />
        <div className={styles.content}>
          <div className={styles.left}>
            <Link to="intro" smooth={true} duration={500}>
              <img className={styles.logo} src="/icons/logo.svg" />
            </Link>
          </div>
          <div className={styles.right}>
            <img
              className={styles.hamburger}
              src="/icons/hamburger.svg"
              onClick={showMenu}
            />
            <div className={styles.menu} id="menu" onClick={hideMenu}>
              <div className={styles.sections}>
                <span className={styles.section}>
                  <Link
                    to="intro"
                    smooth="easeInOutQuad"
                    duration={500}
                    onClick={hideMenu}
                  >
                    Home
                  </Link>
                </span>
                <span className={styles.section}>
                  <Link
                    to="projects"
                    smooth="easeInOutQuad"
                    duration={500}
                    offset={70}
                    onClick={hideMenu}
                  >
                    Projects
                  </Link>
                </span>
                <span className={styles.section}>
                  <Link
                    to="experience"
                    smooth="easeInOutQuad"
                    duration={500}
                    offset={70}
                    onClick={hideMenu}
                  >
                    Experience
                  </Link>
                </span>
                <span className={styles.section}>
                  <a href="/resume.pdf">Resume</a>
                </span>
                <a className={styles.section} href="https://github.com/ibigio">
                  <img className={styles.github_icon} src="/icons/github.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.grey_line} />
    </>
  );
}
