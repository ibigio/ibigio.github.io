import styles from "./Card.module.css";

export default function ProjectCard({ title, iconPath, body, langs, tools }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <img className={styles.icon} src={iconPath} />
        </div>

        {/* Body */}
        <div className={styles.body}>{body}</div>

        {/* <div className={styles.arrow_container}>
          <span className={styles.arrow}>&rarr;</span>
        </div> */}
        <hr className={styles.line} />

        {/* Footer */}
        <div className={styles.footer}>
          <span className={styles.bottom_left}>
            {langs.map((lang) => (
              <span className={styles.lang}>{lang}</span>
            ))}
          </span>
          <span className={styles.bottom_right}>
            {tools.map((tool) => (
              <span className={styles.tool}>{tool}</span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
