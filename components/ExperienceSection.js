import styles from "../styles/ExperienceSection.module.css";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection({ experienceInfos }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.experience_grid}>
        {experienceInfos.map((info) => (
          <ExperienceCard {...info} className={styles.experience} />
        ))}
      </div>
    </div>
  );
}
