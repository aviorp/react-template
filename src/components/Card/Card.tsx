import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Grid,
  CardActions,
  Button
} from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type CardPropsI = {
  title: string;
  subheader: string;
  content: string;
  id: string;
};
const Card: FC<CardPropsI> = ({ content, subheader, title, id }) => {
  const navigate = useNavigate();
  const goToPost = (id: string) => () => {
    navigate(`/post/${id}`);
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <MuiCard elevation={6}>
        <CardHeader title={title} subheader={subheader} />
        <Divider />
        <CardContent>
          <Typography variant="p">{content}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={goToPost(id)}>
            Go to Post
          </Button>
        </CardActions>
      </MuiCard>
    </Grid>
  );
};

export default Card;
