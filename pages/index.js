import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import Intro from "../components/Intro";
import Head from "next/head";
import styles from "../styles/home.module.css";

const title = "Deterministic Minesweeper";
const iconPath = "/twitter-new.svg";
const body =
  "A version of Minesweeper where every game you play is guaranteed to require no guessing. Achieved through algorithmic solving.";
const langs = ["Python", "JS"];
const tools = ["Heroku", "SciPy", "p5.js"];

const role = "Full Stack Engineer";
const company = "Twitter";
const bullets = [
  "Led team of 12 in a customer-facing redesign to Twitter Developer Portal, revamping dashboard and billing flow.",
  "Held inception meeting with 15 engineers, producing 40 tickets, and then wrote entire technical design document.",
  "Spent a week migrating 22 website routes to a new layouts pattern, writing over 500 lines of React in 11 files.",
];
const date = "Summer 2019";
const location = "San Francisco, CA";

export default function Home() {
  return (
    <>
      <section className={styles.intro_section}>
        <div className={styles.section_content}>
          <Intro />
        </div>
      </section>
      <div className={styles.main_container}>
        <ProjectCard
          title={title}
          iconPath={iconPath}
          body={body}
          langs={langs}
          tools={tools}
        />
        <ExperienceCard
          role={role}
          company={company}
          iconPath={iconPath}
          bullets={bullets}
          date={date}
          location={location}
        />
      </div>
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
