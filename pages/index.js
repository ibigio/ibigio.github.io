import styles from "../styles/home.module.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Head from "next/head";
import Link from "next/link";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import CopyrightSection from "../components/CopyrightSection";
import { getCardData } from "../lib/loading";

export async function getStaticProps() {
  const projectsData = getCardData("projects");
  const experienceData = getCardData("experience");
  return {
    props: {
      projectsData,
      experienceData,
    },
  };
}

export default function Home({ projectsData, experienceData }) {
  return (
    <html>
      <Head>
        <title>Ilan Bigio</title>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/x-icon" href="/icons/logo.svg" />
      </Head>
      <body>
        <Navbar />
        <section name="intro" className={styles.intro_section}>
          <Intro />
          <Link href="/#projects">
            <img className={styles.down_arrow} src="/icons/down-arrow.svg" />
          </Link>
        </section>

        <section name="projects" className={styles.projects_section}>
          <ProjectsSection projectsData={projectsData} />
        </section>

        <section name="experience" className={styles.experience_section}>
          <ExperienceSection experienceData={experienceData} />
        </section>
        <section className={styles.copyright_section}>
          <CopyrightSection />
        </section>
      </body>
    </html>
  );
}
