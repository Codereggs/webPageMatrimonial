import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#fff",
        color: "#a3a3a3",
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "inherit",
    },
  },
  palette: {
    primary: {
      main: "#f87c5a",
    },
    secondary: {
      main: "#9AC9FB",
      dark: "#4A85C3",
    },
    neutral: {
      main: "#FAFA88",
    },
  },
  typography: {
    h1: {
      fontFamily: "Pacifico",
    },
    h2: {
      fontFamily: "Pacifico",
    },
    h3: { fontFamily: "Pacifico" },
    h4: { fontFamily: "Pacifico" },
    h5: { fontFamily: "Pacifico" },
    h6: { fontFamily: "Pacifico" },
    fontFamily: "Montserrat",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});

export default theme;
