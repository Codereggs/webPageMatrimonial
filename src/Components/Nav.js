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
import { Link } from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Link
            onClick={() => {
              document
                .getElementById("inicio")
                .scrollIntoView({ behavior: "smooth" });
            }}
            underline="none"
            target="_blank"
            rel="noopener"
            className="fechaLink"
          >
            <FcHome /> Inicio
          </Link>

          <Link
            onClick={() => {
              document
                .getElementById("inicio")
                .scrollIntoView({ behavior: "smooth" });
            }}
            underline="none"
            target="_blank"
            rel="noopener"
            className="fechaLink"
          >
            <FcHome /> Inicio
          </Link>
          <Link
            onClick={() => {
              document
                .getElementById("inicio")
                .scrollIntoView({ behavior: "smooth" });
            }}
            underline="none"
            target="_blank"
            rel="noopener"
            className="fechaLink"
          >
            <FcClock /> Fecha
          </Link>
          <Link
            onClick={() => {
              document
                .getElementById("inicio")
                .scrollIntoView({ behavior: "smooth" });
            }}
            underline="none"
            target="_blank"
            rel="noopener"
            className="fechaLink"
          >
            <FcMindMap /> Redes Sociales
          </Link>
          <Link
            onClick={() => {
              document
                .getElementById("inicio")
                .scrollIntoView({ behavior: "smooth" });
            }}
            underline="none"
            target="_blank"
            rel="noopener"
            className="fechaLink"
          >
            <FcPackage /> Regalos
          </Link>
          <Link
            onClick={() => {
              document
                .getElementById("inicio")
                .scrollIntoView({ behavior: "smooth" });
            }}
            underline="none"
            target="_blank"
            rel="noopener"
            className="fechaLink"
          >
            <FcCalendar /> Reserva
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
