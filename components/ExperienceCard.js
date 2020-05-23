import styles from "../styles/Card.module.css";

export default function ExperienceCard({
  role,
  company,
  iconPath,
  bullets,
  date,
  location,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.title}>
            <span className={styles.role}>{role}</span>
            <span className={styles.at}> @ </span>
            <span className={styles.company}>{company}</span>
          </span>
          <img className={styles.icon} src={iconPath} />
        </div>

        {/* Body (Bullets) */}
        <div className={styles.body}>
          <ul className={styles.bullets}>
            {bullets.map((e) => (
              <li className={styles.bullet} key={e}>
                {e}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <hr className={styles.line} />
          <div className={styles.footer_text}>
            <span className={styles.bottom_left}>{date}</span>
            <span className={styles.bottom_right}>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
