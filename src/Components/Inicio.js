import { Link, Typography } from "@mui/material";
import { Temporizador } from "./ReactTemporizador";
import { FaAngleDown } from "react-icons/fa";

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
      <div className="dArrow">
        <Link
          onClick={() => {
            document
              .getElementById("fecha")
              .scrollIntoView({ behavior: "smooth" });
          }}
          underline="none"
          className="dArrowLink"
          color="#fff"
        >
          <FaAngleDown />
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
