import { Typography } from "@mui/material";
import { Temporizador } from "./ReactTemporizador";

const Inicio = () => {
  const style = { backgroundColor: "rgba(0,0,0, 0.5)" };

  return (
    <div className="inicio" id="inicio">
      <div className="inicioData">
        <Typography variant="h1" style={style}>
          Rafa & Mary
        </Typography>
        <Typography variant="h3" style={style}>
          ¡Nos casamos!
        </Typography>
        <Temporizador />
      </div>
    </div>
  );
};

export default Inicio;
