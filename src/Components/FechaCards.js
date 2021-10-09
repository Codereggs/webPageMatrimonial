import { Button, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { BsWhatsapp } from "react-icons/bs";
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
  return (
    <div className="fecha">
      {icono}
      <Typography variant={"h3"} align="center">
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

      <Link
        href={gmapsdir}
        underline="none"
        target="_blank"
        rel="noopener"
        className="fechaLink"
      >
        <Button variant="contained">📍 Como llegar</Button>
      </Link>
      <Link
        href={whatsappdir}
        underline="none"
        target="_blank"
        rel="noopener"
        className="fechaLink"
      >
        <Button variant="contained">
          <BsWhatsapp /> Agendar
        </Button>
      </Link>
    </div>
  );
};

export default FechaCards;
