import styles from "../styles/Intro.module.css";
import utilsStyles from "../styles/utils.module.css";

const orange = (text) => <span className={styles.orange}>{text}</span>;

export default function Intro() {
  const tenure = Math.floor(
    (new Date() - new Date("August 03, 2020")) / (1000 * 60 * 60 * 24 * 365)
  );
  return (
    <div className={styles.container}>
      <img className={styles.profile} src="/images/profile.png" />
      <div className={styles.intro_text}>
        <div className={utilsStyles.section_title}>
          Hi, I'm <span className={styles.blue}>Ilan</span>.
        </div>
        <div className={styles.subtitle}>ilanbigio@gmail.com</div>
        <div className={styles.body}>
          I studied computer science at {orange("Brown University")} and have
          been a software engineer at {orange("Google")} for {tenure} years. I
          have a passion for teaching and learning, and love sinking time
          building "time-saving" python automations!
        </div>
      </div>
    </div>
  );
}
