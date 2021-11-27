import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import PaginaPresencial from "./Components/PaginaPresencial";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaDistancia from "./Components/PaginaDistancia";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<PaginaPresencial />} />
            <Route path="/distancia" element={<PaginaDistancia />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
