import Drawer from "../components/Drawer";
import Header from "../components/Header";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
export const drawerWidth: number = 240;
const mdTheme = createTheme();
const MainLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <ThemeProvider theme={mdTheme}>
      <Header open={open} toggleDrawer={() => setOpen(!open)} theme={mdTheme} />
      <Drawer open={open} toggleDrawer={() => setOpen(!open)} />
    </ThemeProvider>
  );
};

export default MainLayout;
