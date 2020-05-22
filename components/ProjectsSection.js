import styles from "../styles/ProjectsSection.module.css";
import ProjectCard from "./ProjectCard";

export default function ProjectSection({ projectInfos }) {
  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <div className={styles.projects_grid}>
        {projectInfos.map((info) => (
          <div className={styles.project}>
            <ProjectCard {...info} />
          </div>
        ))}
      </div>
    </div>
  );
}
