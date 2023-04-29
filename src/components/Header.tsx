import { Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { drawerWidth } from "../layouts/MainLayout";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { Lightbulb, Menu } from "@mui/icons-material";
type AppBarProps = {
  open: boolean;
  toggle: () => void;
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

const Header = ({ open, toggle, theme }: AppBarProps) => {
  return (
    <AppBarStyled position="absolute" open={open} theme={theme} toggle={toggle}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggle}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" })
          }}>
          <Menu />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton color="inherit" onClick={toggle}>
          <Badge badgeContent={4} color="secondary">
            <Lightbulb />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBarStyled>
  );
};

export default Header;
