import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Head from "next/head";
import styles from "../styles/home.module.css";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import CopyrightSection from "../components/CopyrightSection";
import { getProjectsData } from "../lib/projects";

import projects from "../projects";

// const title = "Deterministic Minesweeper";
const iconPath = "/icons/twitter.svg";
// const body =
//   "A version of Minesweeper where every game you play is guaranteed to require no guessing. Achieved through algorithmic solving.";
// const langs = ["Python", "JS"];
// const tools = ["Heroku", "SciPy", "p5.js"];

const projectInfo = {
  title: "Deterministic Minesweeper",
  iconPath: "/icons/github.svg",
  body:
    "A version of Minesweeper where every game you play is guaranteed to require no guessing. Achieved through algorithmic solving.",
  langs: ["Python", "JS"],
  tools: ["Heroku", "SciPy", "p5.js"],
  url: "/deterministic-minesweeper",
};

// const experienceInfo = {
//   role: "Full Stack Engineer",
//   company: "Twitter",
//   iconPath: "/icons/t.svg",
//   bullets: [
//     "Led team of 12 in a customer-facing redesign to Twitter Developer Portal, revamping dashboard and billing flow.",
//     "Held inception meeting with 15 engineers, producing 40 tickets, and then wrote entire technical design document.",
//     "Spent a week migrating 22 website routes to a new layouts pattern, writing over 500 lines of React in 11 files.",
//   ],
//   date: "Summer 2019",
//   location: "San Francisco, CA",
// };

const manualProjectData = [
  {
    id: "deterministic-minesweeper",
    projectInfo,
  },
];

export async function getStaticProps() {
  const projectsData = getProjectsData();
  return {
    props: {
      projectsData,
    },
  };
}

export default function Home({ projectsData }) {
  return (
    <html>
      <Head>
        <title>Ilan Bigio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
      </Head>
      <body>
        <Navbar />
        <section name="intro" className={styles.intro_section}>
          <div className={styles.bounded_width}>
            <Intro />
          </div>
        </section>

        <section name="projects" className={styles.projects_section}>
          <ProjectsSection projectsData={projectsData} />
        </section>

        {/* <section name="experience" className={styles.experience_section}>
          <ExperienceSection
            experienceInfos={[experienceInfo, experienceInfo, experienceInfo]}
          />
        </section> */}
        <section className={styles.copyright_section}>
          <CopyrightSection />
        </section>
      </body>
    </html>
  );
}
