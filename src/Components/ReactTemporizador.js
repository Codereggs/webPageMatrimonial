import { Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Temporizador = () => {
  const [meses, setMeses] = useState(null);
  const [dias, setDias] = useState(null);
  const [minutos, setMinutos] = useState(null);
  const [horas, setHoras] = useState(null);
  const [segundos, setSegundos] = useState(null);
  const [evento, setEvento] = useState(null);

  const countDown = () => {
    let init = new Date(2021, 11, 11, 0, 0, 0).getTime();
    let today = new Date().getTime();
    let diferencia = init - today;

    if (Math.sign(diferencia) === -1) {
      setEvento(true);
      return;
    }

    setMeses(
      Math.floor(
        (diferencia % (1000 * 60 * 60 * 24 * 30.41 * 12)) /
          (1000 * 60 * 60 * 24 * 30.41)
      )
    );
    setDias(
      Math.floor(
        (diferencia % (1000 * 60 * 60 * 24 * 30.41)) / (1000 * 60 * 60 * 24)
      )
    );
    setHoras(
      Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    setMinutos(Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)));
    setSegundos(Math.floor((diferencia % (1000 * 60)) / 1000));
  };

  const xs = useMediaQuery("(min-width:0px)");
  const lg = useMediaQuery("(min-width:769px)");

  useEffect(() => {
    Aos.init({ duration: 2000 });
    setInterval(countDown, 1000);
  }, []);

  const textTempStyle = {
    backgroundColor: "rgba(0,0,0, 0.5)",
  };
  return (
    <div className="temporizador" data-aos="fade-up">
      {evento === false && xs && (
        <>
          <div>
            <div className="tempObj">{meses}</div>
            <Typography variant="body1" color="#fff" style={textTempStyle}>
              {lg ? "Meses" : "Mes"}
            </Typography>
          </div>
          <div>
            <div className="tempObj">{dias}</div>
            <Typography variant="body1" color="#fff" style={textTempStyle}>
              {lg ? "Dias" : "D."}
            </Typography>
          </div>
          <div>
            <div className="tempObj">{horas}</div>
            <Typography variant="body1" color="#fff" style={textTempStyle}>
              {lg ? "Horas" : "Hrs."}
            </Typography>
          </div>
          <div>
            <div className="tempObj">{minutos}</div>
            <Typography variant="body1" color="#fff" style={textTempStyle}>
              {lg ? "Minutos" : "Min."}
            </Typography>
          </div>
          <div>
            <div className="tempObj">{segundos}</div>
            <Typography variant="body1" color="#fff" style={textTempStyle}>
              {lg ? "Segundos" : "Seg."}
            </Typography>
          </div>
        </>
      )}
      {evento && (
        <div>
          <Typography
            variant="h4"
            style={{ backgroundColor: "rgba(0,0,0, 0.5)", margin: "10px" }}
          >
            <span>🥳</span>
            ¡Felicidades a los esposos! <span>🥳</span>
          </Typography>
        </div>
      )}
    </div>
  );
};
