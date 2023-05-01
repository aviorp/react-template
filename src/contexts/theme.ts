export default {
  typography: {
    fontFamily: "Varela Round, sans-serif",
    fontSize: 14,
    fontWeightLight: 300
  },
  palette: {
    light: {
      error: "#f44336"
    },
    dark: {
      error: "#f44336"
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#fff"
        },
        a: {
          textDecoration: "none"
        }
      }
    }
  }
};
