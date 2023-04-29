import { Box, CircularProgress } from "@mui/material";

type PageProps = {
  children: React.ReactNode;
  loading?: boolean;
  isEmpty?: boolean;
};

const Page: React.FC<PageProps> = ({ children, loading }) => {
  if (loading)
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
