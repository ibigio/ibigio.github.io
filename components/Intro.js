import styles from "../styles/Intro.module.css";

const orange = (text) => <span className={styles.orange}>{text}</span>;

export default function Intro() {
  return (
    <div className={styles.container}>
      <img className={styles.profile} src="/images/profile.png" />
      <div className={styles.intro_text}>
        <h2>
          Hi, I'm <span className={styles.blue}>Ilan</span>.
        </h2>
        <div className={styles.subtitle}>ilanbigio@gmail.com</div>
        <div className={styles.body}>
          I studied computer science at {orange("Brown University")}, and will
          be starting at {orange("Google")} as a software engineer in August. I
          love teaching and learning, and in my free time I build python
          projects that automate stuff to “save me time”.
        </div>
      </div>
    </div>
  );
}
