import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Page from "../layouts/Page";
import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { getPosts } from "../api/posts";

const Home = () => {
  return (
    <Page>
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
      <pre>{postsQuery.data!}</pre>
    </Page>
  );
};

export default Home;
