import Page from "../layouts/Page";
import { useQuery } from "react-query";
import { getPosts } from "../api/posts";
import { Card } from "@mui/material";

const Home = () => {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    refetchOnWindowFocus: true
  });
  return (
    <Page
      title="Home"
      isLoading={postsQuery.isLoading}
      isEmpty={postsQuery.isFetched && postsQuery?.data?.length <= 0}>
      <Card>
        <h1>Home</h1>
      </Card>
    </Page>
  );
};

export default Home;
