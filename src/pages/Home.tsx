import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Page from "../layouts/Page";
import { useQuery } from "react-query";
import { getPosts } from "../api/posts";

const Home = () => {
  const postsQuery = useQuery(["posts"], getPosts);
  return (
    <Page
      isLoading={postsQuery.isLoading}
      isEmpty={postsQuery.isFetched && postsQuery?.data?.length <= 0}>
      <Card
        sx={{
          minWidth: 345,
          minHeight: 300
        }}>
        <CardHeader>
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            Word of the Day
          </Typography>
        </CardHeader>
      </Card>
    </Page>
  );
};

export default Home;
