import styles from "../styles/Card.module.css";
import Link from "next/link";

export default function ProjectCard(props) {
  const { id, title, iconPath, description, langs, tools, favorite } = props;
  const url = "/projects/" + id;
  return (
    <div className={styles.container}>
      {favorite && <img className={styles.badge} src="/icons/star-badge.svg" />}
      <div className={styles.selectable}>
        <Link href={url}>
          <div className={styles.content}>
            {/* Header */}
            <div>
              <div className={styles.header}>
                <span className={styles.title}>{title}</span>
                <img className={styles.icon} src={iconPath} />
              </div>

              {/* Body */}
              <div className={styles.body}>{description}</div>
            </div>

            {/* Footer */}
            <div className={styles.footer}>
              <div className={styles.arrow_container}>
                <span className={styles.arrow}>&rarr;</span>
              </div>
              <hr className={styles.line} />
              <div className={styles.footer_text}>
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
        </Link>
      </div>
    </div>
  );
}
