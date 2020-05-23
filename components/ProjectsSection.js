import styles from "../styles/ProjectsSection.module.css";
import ProjectCard from "./ProjectCard";

export default function ProjectSection({ projectsData }) {
  console.log(projectsData);
  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <div className={styles.projects_grid}>
        {projectsData.map((info) => (
          <ProjectCard {...info} />
        ))}
      </div>
    </div>
  );
}
