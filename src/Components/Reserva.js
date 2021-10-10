import { Button, Container, Link, Typography } from "@mui/material";
import { BsWhatsapp } from "react-icons/bs";
import "./Reserva.css";

const Reserva = () => {
  return (
    <section className="reserva" id="reserva">
      <Container className="rContainer">
        <Typography variant="h2">RSVP</Typography>
        <Typography variant="h2">
          ¡Contáctanos por Whatsapp para confirmar tu asistencia!
        </Typography>
        <Link>
          <Button variant="outlined">
            <BsWhatsapp className="rWIcon" />
          </Button>
        </Link>
      </Container>
    </section>
  );
};

export default Reserva;
