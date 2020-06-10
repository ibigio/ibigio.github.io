import styles from "../styles/home.module.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Head from "next/head";
import Link from "next/link";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import CopyrightSection from "../components/CopyrightSection";
import { getCardData } from "../lib/loading";
import { Link as SLink } from "react-scroll";

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
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </Head>
      <body>
        <Navbar />
        <section id="intro" className={styles.intro_section}>
          <div className={styles.white_line} />
          <Intro />
          <SLink
            className={styles.down_arrow}
            to="projects"
            smooth="easeInOutQuad"
            duration={800}
            offset={70}
          >
            <img src="/icons/down-arrow.svg" />
          </SLink>
        </section>

        <section id="projects" className={styles.projects_section}>
          <ProjectsSection projectsData={projectsData} />
        </section>

        <section id="experience" className={styles.experience_section}>
          <ExperienceSection experienceData={experienceData} />
        </section>
        <section className={styles.copyright_section}>
          <CopyrightSection />
        </section>
      </body>
    </html>
  );
}
