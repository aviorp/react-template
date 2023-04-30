import Page from "../layouts/Page";
import { useQuery } from "react-query";
import { getPosts } from "../api/posts";
import Card from "../components/Card";
import { Grid } from "@mui/material";

type PostI = {
  id: string;
  title: string;
  body: string;
  userId: string;
};

const Home = () => {
  const {
    isLoading,
    data: posts,
    isFetched
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    refetchOnWindowFocus: true
  });
  return (
    <Page
      title="Home"
      isLoading={isLoading}
      isEmpty={isFetched && posts?.length <= 0}>
      <Grid container spacing={2}>
        {posts?.map((post: PostI) => (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            subheader={`Post ID: ${post.id}`}
            content={post.body}
          />
        ))}
      </Grid>
    </Page>
  );
};

export default Home;
