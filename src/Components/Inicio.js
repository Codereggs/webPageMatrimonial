import { Typography } from "@mui/material";
import { useEffect } from "react";
import { temporizador } from "./Temporizador";

const Inicio = () => {
  useEffect(() => {
    temporizador(2021, 12, 11, 0, 0, 0);
  }, []);

  return (
    <div className="inicio" id="inicio">
      <div className="inicioData">
        <Typography variant="h1">Rafa & Mary</Typography>
        <Typography variant="h3">¡Nos casamos!</Typography>
        <div className="count"></div>
      </div>
    </div>
  );
};

export default Inicio;
