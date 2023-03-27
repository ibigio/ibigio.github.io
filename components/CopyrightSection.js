import styles from "../styles/CopyrightSection.module.css";

export default function ExperienceSection() {
  return (
    <div className={styles.copyright}>
      © {new Date().getFullYear()} Ilan Bigio
    </div>
  );
}
