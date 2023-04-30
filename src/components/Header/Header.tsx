import { Badge, IconButton, Toolbar } from "@mui/material";
import { Lightbulb, Menu } from "@mui/icons-material";
import { AppBarStyled } from "./AppBarStyled";
export type AppBarProps = {
  open: boolean;
  toggleDrawer: () => void;
  theme: any;
};

const Header = ({ open, toggleDrawer, theme }: AppBarProps): JSX.Element => (
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

export default Header;
