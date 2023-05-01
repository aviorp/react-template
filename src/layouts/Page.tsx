import { FC, ReactNode } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

type PageProps = {
  children: ReactNode;
  isLoading?: boolean;
  isEmpty?: boolean;
  title?: string;
};

const Page: FC<PageProps> = ({ children, isLoading, isEmpty, title }) => {
  if (isLoading)
    return (
      <LinearProgress
        sx={{
          paddingTop: "4.3rem"
        }}
      />
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
    <Box
      sx={{
        padding: " 5em 1.5em",
        backgroundColor: "#fff"
      }}>
      <Typography variant="h4">{title}</Typography>
      <Box
        sx={{
          marginTop: "2em"
        }}>
        {children}
      </Box>
    </Box>
  );
};

export default Page;
