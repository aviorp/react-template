import Drawer from "../components/Drawer";
import Header from "../components/Header";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Router from "../router";
import { Box } from "@mui/material";

export const drawerWidth: number = 240;
const mdTheme = createTheme();

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/test" },
  { label: "Contact", href: "/contact" },
  { label: "Post", href: "/posts/1" }
];
const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const handleDrawer = () => setOpen(!open);

  return (
    <ThemeProvider theme={mdTheme}>
      <Header open={open} toggleDrawer={handleDrawer} theme={mdTheme} />
      <Drawer open={open} toggleDrawer={handleDrawer} items={menuItems} />
      <Box
        sx={{
          marginLeft: open ? "0px" : `-${drawerWidth}px`
        }}>
        <Router />
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
