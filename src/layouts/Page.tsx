import { Box, CircularProgress } from "@mui/material";

type PageProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  isEmpty?: boolean;
};

const Page: React.FC<PageProps> = ({ children, isLoading, isEmpty }) => {
  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column"
      }}>
      {children}
    </Box>
  );
};

export default Page;
