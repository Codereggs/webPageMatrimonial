import { Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

export const Temporizador = () => {
  const [meses, setMeses] = useState();
  const [dias, setDias] = useState();
  const [minutos, setMinutos] = useState();
  const [horas, setHoras] = useState(null);
  const [segundos, setSegundos] = useState(null);

  const countDown = () => {
    let init = new Date(2021, 12, 11, 0, 0, 0).getTime();
    let today = new Date().getTime();
    let diferencia = init - today;

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
    setInterval(countDown, 1000);
  }, []);

  const textTempStyle = {
    backgroundColor: "rgba(0,0,0, 0.5)",
  };

  return (
    <div className="temporizador">
      {xs && (
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
    </div>
  );
};
/* 
const countDown = () => {
  //Definición de todos los parámetros
  let countDownDate = new Date(2021, 12, 11, 0, 0, 0).getTime();
  let nowTime = new Date().getTime(),
    distance = countDownDate - nowTime,
    yearCountDown = Math.floor(
      (distance % (1000 * 60 * 60 * 24 * 30.41 * 12 * 10)) /
        (1000 * 60 * 60 * 24 * 30.41 * 12)
    ),
    monthCountDown = Math.floor(
      (distance % (1000 * 60 * 60 * 24 * 30.41 * 12)) /
        (1000 * 60 * 60 * 24 * 30.41)
    ),
    daysCountDown = Math.floor(
      (distance % (1000 * 60 * 60 * 24 * 30.41)) / (1000 * 60 * 60 * 24)
    ),
    hoursCountDown = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ),
    minutesCountDown = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    secondsCountDown = Math.floor((distance % (1000 * 60)) / 1000);
};
 */
