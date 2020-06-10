import { getProjectData, getProjectIDs } from "../../lib/loading";
import ProjectPageLayout from "../../components/ProjectPageLayout";
import Head from "next/head";

export default function Project({ projectData }) {
  return (
    <>
      <Head>
        <title>Ilan Bigio</title>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </Head>
      <ProjectPageLayout projectData={projectData}>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHTML }} />
      </ProjectPageLayout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getProjectIDs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}
