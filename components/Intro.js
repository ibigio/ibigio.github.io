import styles from "../styles/Intro.module.css";
import utilsStyles from "../styles/utils.module.css";

const orange = (text) => <span className={styles.orange}>{text}</span>;

export default function Intro() {
  return (
    <div className={styles.container}>
      <img className={styles.profile} src="/images/profile.png" />
      <div className={styles.intro_text}>
        <div className={utilsStyles.section_title}>
          Hi, I'm <span className={styles.blue}>Ilan</span>.
        </div>
        <div className={styles.subtitle}>ilanbigio@gmail.com</div>
        <div className={styles.body}>
          I graduated with a degree in computer science from{" "}
          {orange("Brown University")}, and have been working at{" "}
          {orange("Google")} as a software engineer since August 2020. I love
          teaching and learning, and in my free time I build python projects
          that automate stuff to “save me time”.
        </div>
      </div>
    </div>
  );
}
