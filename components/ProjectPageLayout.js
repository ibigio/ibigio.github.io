import styles from "../styles/ProjectPageLayout.module.css";
import Link from "next/link";

export default function Page({ children, projectData }) {
  const { title, langs, tools, githubURL, otherURL } = projectData;
  return (
    <div className={styles.safe_zone}>
      <div className={styles.container}>
        <Link href="/#projects">
          <div className={styles.back_arrow}>&#8592; Projects</div>
        </Link>

        <div className={styles.header}>
          <div className={styles.upper_header}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.icons}>
              {otherURL && (
                <a href={otherURL}>
                  <img className={styles.icon} src="/icons/link.svg" />
                </a>
              )}
              {githubURL && (
                <a href={githubURL}>
                  <img className={styles.icon} src="/icons/github.svg" />
                </a>
              )}
            </div>
          </div>

          <hr className={styles.line} />

          <div className={styles.lower_header}>
            <span className={styles.langs}>
              {langs.map((lang) => (
                <span className={styles.lang}>{lang}</span>
              ))}
            </span>
            <span className={styles.tools}>
              {tools.map((tool) => (
                <span className={styles.tool}>{tool}</span>
              ))}
            </span>
          </div>
        </div>

        <main>{children}</main>
        <div className={styles.copyright}>© 2020 Ilan Bigio</div>
      </div>
    </div>
  );
}
