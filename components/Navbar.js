import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img className={styles.logo} src="/logo.svg" />
        </div>
        <div className={styles.right}>
          <div className={styles.sections}>
            <span className={styles.section}>Home</span>
            <span className={styles.section}>Projects</span>
            <span className={styles.section}>Experience</span>
            <span className={styles.section}>Resume</span>
          </div>
          <img className={styles.github_icon} src="/github.svg" />
        </div>
      </div>
    </div>
  );
}
