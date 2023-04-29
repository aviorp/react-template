import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Page from "../layouts/Page";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";
import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Page loading={loading}>
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
