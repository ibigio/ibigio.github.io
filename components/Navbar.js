import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Link href="/">
            <img className={styles.logo} src="/icons/logo.svg" />
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.sections}>
            <Link href="/">
              <span className={styles.section}>Home</span>
            </Link>
            <Link href="#projects">
              <span className={styles.section}>Projects</span>
            </Link>
            <Link href="#experience">
              <span className={styles.section}>Experience</span>
            </Link>
            <a href="/resume.pdf">
              <span className={styles.section}>Resume</span>
            </a>
          </div>
          <a href="https://github.com/ibigio">
            <img className={styles.github_icon} src="/icons/github.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}
