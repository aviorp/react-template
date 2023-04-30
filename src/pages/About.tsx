import { useParams } from "react-router-dom";
import Page from "../layouts/Page";

const About = () => {
  const { id } = useParams();
  return (
    <Page title="About" isLoading={false}>
      <h1>About {id}</h1>
    </Page>
  );
};

export default About;
