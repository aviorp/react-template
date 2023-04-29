import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Page from "../layouts/Page";

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
    </Page>
  );
};

export default Home;
