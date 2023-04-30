import { FC, ReactNode } from "react";
import { Box, CircularProgress, Container, Typography } from "@mui/material";

type PageProps = {
  children: ReactNode;
  isLoading?: boolean;
  isEmpty?: boolean;
  title: string;
};

const Page: FC<PageProps> = ({ children, isLoading, isEmpty, title }) => {
  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50%"
        }}>
        <CircularProgress />
      </Box>
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
        padding: "1rem 2rem",
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column"
      }}>
      <Typography
        variant="h4"
        sx={{
          marginBottom: "2rem",
          alignSelf: "start",
          display: "block"
        }}>
        {title}
      </Typography>
      <Box
        sx={{
          width: "100%"
        }}>
        {children}
      </Box>
    </Container>
  );
};

export default Page;
