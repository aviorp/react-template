import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";
import theme from "./theme";

export const muiTheme = createTheme(theme as {});

type MuiThemeProviderI = {
  children: ReactNode;
};

const MuiThemeProvider = ({ children }: MuiThemeProviderI) => {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
