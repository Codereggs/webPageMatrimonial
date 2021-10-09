import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  FcHome,
  FcClock,
  FcMindMap,
  FcPackage,
  FcCalendar,
} from "react-icons/fc";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <a className="navLink" href="/">
            <FcHome /> Inicio
          </a>
          <a className="navLink" href="/">
            <FcClock /> Fecha
          </a>
          <a className="navLink" href="/">
            <FcMindMap /> Redes Sociales
          </a>
          <a className="navLink" href="/">
            <FcPackage /> Regalos
          </a>
          <a className="navLink" href="/">
            <FcCalendar /> Reserva
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
