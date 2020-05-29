import styles from "../styles/ExperienceSection.module.css";
import utilsStyles from "../styles/utils.module.css";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection({ experienceData }) {
  return (
    <div className={styles.container}>
      <div className={[styles.title, utilsStyles.section_title].join(" ")}>
        Experience
      </div>
      <div className={styles.experience_grid}>
        {experienceData.map((info) => (
          <ExperienceCard {...info} className={styles.experience} />
        ))}
      </div>
    </div>
  );
}
