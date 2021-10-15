import { Link, Typography } from "@mui/material";
import { Temporizador } from "./ReactTemporizador";
import { FaAngleDown } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Inicio = () => {
  const style = { backgroundColor: "rgba(0,0,0, 0.5)", margin: "10px" };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="inicio" id="inicio">
      <div className="inicioData">
        <Typography variant="h1" style={style} data-aos="fade-right">
          Rafa & Mary
        </Typography>
        <Typography variant="h3" style={style} data-aos="fade-left">
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
