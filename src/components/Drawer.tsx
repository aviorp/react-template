import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { drawerWidth } from "../layouts/MainLayout";
import { Toolbar, IconButton, Divider, List } from "@mui/material";
const WithStyleDrawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open"
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    height: "100vh",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      zIndex: 0,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9)
      }
    })
  }
}));

type DrawerProps = {
  open: boolean;
  toggleDrawer: () => void;
};

const Drawer = ({ open, toggleDrawer }: DrawerProps) => {
  return (
    <WithStyleDrawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1]
        }}>
        <IconButton onClick={toggleDrawer}>X</IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">NAV</List>
    </WithStyleDrawer>
  );
};

export default Drawer;
