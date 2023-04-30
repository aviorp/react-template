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
import { FC, useMemo } from "react";
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

  const shortenContent = useMemo(() => {
    return content.length > 100 ? content.slice(0, 100) + "..." : content;
  }, [content]);

  const shortenTitle = useMemo(() => {
    return title.length > 20 ? title.slice(0, 20) + "..." : title;
  }, [title]);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <MuiCard
        elevation={6}
        sx={{
          height: "100%"
        }}>
        <CardHeader title={shortenTitle} subheader={subheader} />
        <Divider />
        <CardContent>
          <Typography>{shortenContent}</Typography>
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
