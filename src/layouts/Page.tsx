import { Box } from "@mui/material";

type PageProps = {
  children: React.ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => {
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
