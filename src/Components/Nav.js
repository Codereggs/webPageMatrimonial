import * as React from "react";
import "./Nav.css";
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
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Toolbar>
          <Link
            onClick={() => {
              document
                .getElementById("inicio")
                .scrollIntoView({ behavior: "smooth" });
            }}
            component="button"
            variant="body1"
            color="secondary"
            underline="none"
            className="fechaLink"
            sx={{ padding: "0 0.5rem" }}
          >
            <FcHome /> Inicio
          </Link>
          <Link
            onClick={() => {
              document
                .getElementById("fecha")
                .scrollIntoView({ behavior: "smooth" });
            }}
            component="button"
            variant="body1"
            color="secondary"
            underline="none"
            className="fechaLink"
            sx={{ padding: "0 0.5rem" }}
          >
            <FcClock /> Fecha
          </Link>
          <Link
            onClick={() => {
              document
                .getElementById("redes")
                .scrollIntoView({ behavior: "smooth" });
            }}
            component="button"
            variant="body1"
            color="secondary"
            underline="none"
            className="fechaLink"
            sx={{ padding: "0 0.5rem" }}
          >
            <FcMindMap /> Redes Sociales
          </Link>
          <Link
            onClick={() => {
              document
                .getElementById("regalos")
                .scrollIntoView({ behavior: "smooth" });
            }}
            component="button"
            variant="body1"
            color="secondary"
            underline="none"
            className="fechaLink"
            sx={{ padding: "0 0.5rem" }}
          >
            <FcPackage /> Regalos
          </Link>
          <Link
            onClick={() => {
              document
                .getElementById("reserva")
                .scrollIntoView({ behavior: "smooth" });
            }}
            component="button"
            variant="body1"
            color="secondary"
            underline="none"
            className="fechaLink"
            sx={{ padding: "0 0.5rem" }}
          >
            <FcCalendar /> Reserva
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
