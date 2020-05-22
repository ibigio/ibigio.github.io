import styles from "./Card.module.css";

export default function ExperienceCard({
  role,
  company,
  iconPath,
  bullets,
  date,
  location,
}) {
  return (
    <div className={styles.card}>
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

        <div className={styles.arrow_container}></div>
        <hr className={styles.line} />

        {/* Footer */}
        <div className={styles.footer}>
          <span className={styles.bottom_left}>{date}</span>
          <span className={styles.bottom_right}>{location}</span>
        </div>
      </div>
    </div>
  );
}
