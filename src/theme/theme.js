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
      main: "#a3a3a3",
    },
    neutral: {
      main: "#fff",
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
    body1: {
      color: "#a3a3a3",
      fontWeight: 600,
    },
    fontFamily: "Montserrat",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});

export default theme;
