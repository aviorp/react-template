import Drawer from "../components/Drawer";
import Header from "../components/Header";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Router from "../router";

export const drawerWidth: number = 240;
const mdTheme = createTheme();
const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/test" },
  { label: "Contact", href: "/contact" }
];
const MainLayout = () => {
  const [open, setOpen] = useState(true);
  const handleDrawer = () => setOpen(!open);

  return (
    <ThemeProvider theme={mdTheme}>
      <Header open={open} toggleDrawer={handleDrawer} theme={mdTheme} />
      <Drawer open={open} toggleDrawer={handleDrawer} items={menuItems} />
      <Router />
    </ThemeProvider>
  );
};

export default MainLayout;
