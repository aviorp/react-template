import Drawer from "../components/Drawer";
import Header from "../components/Header";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Router from "../router";
import { Box } from "@mui/material";
import { DRAWER_WIDTH, MENU_ITEMS } from "../utils/constants";

const mdTheme = createTheme();

function MainLayout(): JSX.Element {
  const [open, setOpen] = useState(false);
  const handleDrawer = () => setOpen(!open);

  return (
    <ThemeProvider theme={mdTheme}>
      <Header open={open} toggleDrawer={handleDrawer} theme={mdTheme} />
      <Drawer open={open} toggleDrawer={handleDrawer} items={MENU_ITEMS} />
      <Box
        sx={{
          marginLeft: open ? "0px" : `-${DRAWER_WIDTH}px`
        }}>
        <Router />
      </Box>
    </ThemeProvider>
  );
}

export default MainLayout;
