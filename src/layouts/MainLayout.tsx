import Drawer from "../components/Drawer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Router from "../router";
import { Box } from "@mui/material";
import { DRAWER_WIDTH, MENU_ITEMS } from "../utils/constants";
import { useAuth } from "../hooks";

const mdTheme = createTheme();

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
    <ThemeProvider theme={mdTheme}>
      {loggedIn && (
        <>
          <Header open={open} toggleDrawer={handleDrawer} theme={mdTheme} />
          <Drawer open={open} toggleDrawer={handleDrawer} items={MENU_ITEMS} />
        </>
      )}

      <Box
        sx={{
          marginLeft: open ? `${DRAWER_WIDTH}px` : 0,
          transition: mdTheme.transitions.create("margin", {
            easing: mdTheme.transitions.easing.sharp,
            duration: mdTheme.transitions.duration.leavingScreen
          })
        }}>
        <Router />
      </Box>
    </ThemeProvider>
  );
}

export default MainLayout;
