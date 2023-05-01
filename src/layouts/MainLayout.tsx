import Drawer from "../components/Drawer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Router from "../router";
import { Box } from "@mui/material";
import { DRAWER_WIDTH, MENU_ITEMS } from "../utils/constants";
import { useAuth } from "../hooks";
import MuiThemeProvider, { muiTheme } from "../contexts/ThemeContext";

function MainLayout(): JSX.Element {
  const [open, setOpen] = useState(false);
  const handleDrawer = () => setOpen(!open);
  const {
    authInfo: { loggedIn },
    initialize
  } = useAuth();

  useEffect(() => {
    initialize();
    if (!loggedIn) {
      setOpen(false);
    }
  }, []);

  return (
    <MuiThemeProvider>
      {loggedIn && (
        <>
          <Header open={open} toggleDrawer={handleDrawer} theme={muiTheme} />
          <Drawer open={open} toggleDrawer={handleDrawer} items={MENU_ITEMS} />
        </>
      )}

      <Box
        sx={{
          marginLeft: open ? `${DRAWER_WIDTH}px` : 0,
          transition: muiTheme.transitions.create("margin", {
            easing: muiTheme.transitions.easing.sharp,
            duration: muiTheme.transitions.duration.leavingScreen
          })
        }}>
        <Router />
      </Box>
    </MuiThemeProvider>
  );
}

export default MainLayout;
