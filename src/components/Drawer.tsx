import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { drawerWidth } from "../layouts/MainLayout";
import {
  Toolbar,
  IconButton,
  Divider,
  List,
  ListItemButton,
  Box
} from "@mui/material";
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
        width: theme.spacing(0)
      }
    })
  }
}));

type NavItem = {
  label: string;
  href: string;
};

type DrawerProps = {
  open: boolean;
  items: NavItem[];
  toggleDrawer: () => void;
};

const Drawer = ({ open, toggleDrawer, items }: DrawerProps) => {
  return (
    <WithStyleDrawer variant="permanent" open={open}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: theme => theme.spacing(0, 1)
        }}>
        <IconButton onClick={toggleDrawer}>X</IconButton>
      </Box>
      <List component="nav">
        {items &&
          items.map((item, index) => {
            return (
              <ListItemButton key={index} href={item.href}>
                {item.label}
              </ListItemButton>
            );
          })}
      </List>
    </WithStyleDrawer>
  );
};

export default Drawer;
