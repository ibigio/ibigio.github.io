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
          I graduated from {orange("Brown University")}, spent 3 years at{" "}
          {orange("Google")}, and am currently working at {orange("OpenAI")}. I
          have a passion for teaching and learning, and spend an astounding
          amount of time on my pet projects.
        </div>
      </div>
    </div>
  );
}
