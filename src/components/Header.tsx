import { Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { drawerWidth } from "../layouts/MainLayout";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { Lightbulb, Menu } from "@mui/icons-material";
type AppBarProps = {
  open: boolean;
  toggleDrawer: () => void;
  theme: any;
};

const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Header = ({ open, toggleDrawer, theme }: AppBarProps) => {
  return (
    <AppBarStyled
      position="absolute"
      open={open}
      theme={theme}
      toggleDrawer={toggleDrawer}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between"
        }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" })
          }}>
          <Menu />
        </IconButton>

        <IconButton color="inherit" onClick={toggleDrawer}>
          <Badge badgeContent={4} color="secondary">
            <Lightbulb />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBarStyled>
  );
};

export default Header;
