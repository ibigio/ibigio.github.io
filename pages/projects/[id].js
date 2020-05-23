import { getProjectData, getProjectIDs } from "../../lib/loading";
import ProjectPageLayout from "../../components/ProjectPageLayout";

export default function Project({ projectData }) {
  console.log(projectData);
  return (
    <ProjectPageLayout projectData={projectData}>
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHTML }} />
    </ProjectPageLayout>
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
