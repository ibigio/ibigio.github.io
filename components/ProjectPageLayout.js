import styles from "../styles/ProjectPageLayout.module.css";
import Link from "next/link";

export default function Page({ children, projectData }) {
  const { title, langs, tools, githubURL, otherURL } = projectData;
  return (
    <div className={styles.safe_zone}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.upper_header}>
            <div className={styles.back_arrow}>
              <Link href="/#projects">
                <a>&#8592; Projects</a>
              </Link>
            </div>

            <div className={styles.title}>{title}</div>
            <div className={styles.icons}>
              {otherURL ? (
                <a href={otherURL} target="_blank">
                  <img className={styles.icon} src="/icons/link.svg" />
                </a>
              ) : (
                <img className={styles.icon_gray} src="/icons/gray-link.svg" />
              )}
              {githubURL ? (
                <a href={githubURL} target="_blank">
                  <img className={styles.icon} src="/icons/github.svg" />
                </a>
              ) : (
                <img className={styles.icon} src="/icons/gray-github.svg" />
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

        <main className={styles.main}> {children}</main>
      </div>
      <footer className={styles.copyright}>
        © {new Date().getFullYear()} Ilan Bigio
      </footer>
    </div>
  );
}
