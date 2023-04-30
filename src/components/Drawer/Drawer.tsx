import {
  IconButton,
  List,
  Box,
  ListItemButton,
  Typography
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { WithStyleDrawer } from "./WithStyleDrawer";
import { useAuth } from "../../hooks";

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
  const navigate = useNavigate();

  const handleRoute = (href: string) => {
    navigate(href);
  };
  const onLogout = () => {
    logOut();
    toggleDrawer();
  };
  const { logOut } = useAuth();

  return (
    <WithStyleDrawer variant="permanent" open={open}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: ".7rem",
          marginButton: "1rem"
        }}>
        <Typography variant="h5">
          Papito<span>UI</span>
        </Typography>
        <IconButton onClick={toggleDrawer}>
          <Close />
        </IconButton>
      </Box>
      <List component="nav">
        {items &&
          items.map((item, index) => {
            return (
              <ListItemButton
                key={index}
                onClick={() => handleRoute(item.href)}>
                {item.label}
              </ListItemButton>
            );
          })}
        <ListItemButton
          onClick={onLogout}
          sx={{
            marginTop: "80vh",
            backgroundColor: "error.main",
            color: "#fff",
            "&:hover": {
              backgroundColor: "error.dark"
            }
          }}>
          Logout
        </ListItemButton>
      </List>
    </WithStyleDrawer>
  );
};

export default Drawer;
