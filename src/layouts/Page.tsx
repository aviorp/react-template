import { FC, ReactNode } from "react";
import { Box, CircularProgress, Container, Typography } from "@mui/material";

type PageProps = {
  children: ReactNode;
  isLoading?: boolean;
  isEmpty?: boolean;
  title?: string;
};

const Page: FC<PageProps> = ({ children, isLoading, isEmpty, title }) => {
  if (isLoading)
    return (
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: "35%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Box>
          <CircularProgress />
        </Box>
      </Container>
    );
  if (isEmpty) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <h1>Empty</h1>
      </Box>
    );
  }
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: "5em",
        backgroundColor: "#fff"
      }}>
      <Typography variant="h4">{title}</Typography>
      <Box
        sx={{
          marginTop: "2em"
        }}>
        {children}
      </Box>
    </Container>
  );
};

export default Page;
