import { Button, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import "./Fecha.css";

const FechaCards = ({
  icono,
  titulo,
  localidad,
  fecha,
  direccion,
  gmapsdir,
  whatsappdir,
}) => {
  const style = {
    color: "#f87c5a",
  };
  return (
    <div className="fecha">
      {icono}
      <Typography variant={"h3"} style={style} align="center">
        {titulo}
      </Typography>
      <Typography variant={"h5"} align="center">
        {localidad}
      </Typography>
      <Typography variant={"h5"} align="center">
        {fecha}
      </Typography>
      <Typography variant={"h5"} align="center">
        {direccion}
      </Typography>
      <br />
      {gmapsdir && (
        <Link
          href={gmapsdir}
          underline="none"
          target="_blank"
          rel="noopener"
          className="fechaLink"
        >
          <Button variant="contained">📍 Como llegar</Button>
        </Link>
      )}
      <br />
      {whatsappdir && (
        <Link
          href={whatsappdir}
          underline="none"
          target="_blank"
          rel="noopener"
          className="fechaLink"
        >
          <Button variant="contained">📞 Agendar</Button>
        </Link>
      )}
    </div>
  );
};

export default FechaCards;
