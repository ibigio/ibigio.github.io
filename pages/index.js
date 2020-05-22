import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Head from "next/head";
import styles from "../styles/home.module.css";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import CopyrightSection from "../components/CopyrightSection";

// const title = "Deterministic Minesweeper";
const iconPath = "/twitter-copy.svg";
// const body =
//   "A version of Minesweeper where every game you play is guaranteed to require no guessing. Achieved through algorithmic solving.";
// const langs = ["Python", "JS"];
// const tools = ["Heroku", "SciPy", "p5.js"];

const projectInfo = {
  title: "Deterministic Minesweeper",
  iconPath: "/twitter-copy.svg",
  body:
    "A version of Minesweeper where every game you play is guaranteed to require no guessing. Achieved through algorithmic solving.",
  langs: ["Python", "JS"],
  tools: ["Heroku", "SciPy", "p5.js"],
};

const experienceInfo = {
  role: "Full Stack Engineer",
  company: "Twitter",
  iconPath: "/twitter-copy.svg",
  bullets: [
    "Led team of 12 in a customer-facing redesign to Twitter Developer Portal, revamping dashboard and billing flow.",
    "Held inception meeting with 15 engineers, producing 40 tickets, and then wrote entire technical design document.",
    "Spent a week migrating 22 website routes to a new layouts pattern, writing over 500 lines of React in 11 files.",
  ],
  date: "Summer 2019",
  location: "San Francisco, CA",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <section className={styles.intro_section}>
        <div className={styles.bounded_width}>
          <Intro />
        </div>
      </section>

      <section>
        <ProjectsSection
          projectInfos={[projectInfo, projectInfo, projectInfo, projectInfo]}
        />
      </section>

      <section className={styles.dark_section}>
        <ExperienceSection
          experienceInfos={[experienceInfo, experienceInfo, experienceInfo]}
        />
      </section>
      <section className={styles.dark_section}>
        <CopyrightSection />
      </section>
    </>
    // <Layout home>
    //   <Head>
    //     <title>{siteTitle}</title>
    //   </Head>
    //   <section className={utilStyles.headingMd}>
    //     <p>[Your Self Introduction]</p>
    //     <p>
    //       (This is a sample website - you’ll be building a site like this on{" "}
    //       <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
    //     </p>
    //   </section>
    // </Layout>
  );
}
