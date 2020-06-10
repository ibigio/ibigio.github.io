import styles from "../styles/ProjectsSection.module.css";
import utilsStyles from "../styles/utils.module.css";
import ProjectCard from "./ProjectCard";

export default function ProjectSection({ projectsData }) {
  return (
    <div className={styles.container}>
      <div className={utilsStyles.section_title}>Projects</div>
      <div className={styles.projects_grid}>
        {projectsData.map((info) => (
          <ProjectCard {...info} />
        ))}
      </div>
    </div>
  );
}
