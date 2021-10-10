import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#DB5752",
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
    fontFamily: "Montserrat",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});

export default theme;
