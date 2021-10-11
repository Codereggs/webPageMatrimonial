import { Button, Container, Link, Typography } from "@mui/material";
import { BsWhatsapp } from "react-icons/bs";
import "./Reserva.css";

const Reserva = () => {
  const style = {
    margin: "1.5rem auto",
  };
  return (
    <section className="reserva" id="reserva">
      <Container className="rContainer">
        <Typography variant="h2" style={style}>
          RSVP
        </Typography>
        <Typography variant="h5" style={style}>
          - Se ruega por favor confirmar antes del 20 de Noviembre -
        </Typography>
        <Typography variant="h5" style={style}>
          ¡Contáctanos por Whatsapp para confirmar tu asistencia!
        </Typography>

        <Link
          underline="none"
          target="_blank"
          rel="noopener"
          href="https://api.whatsapp.com/send?phone=541127601029&text=Hola!%20Felicidades%20por%20el%20compromiso,%20gracias%20por%20invitarme%20a%20la%20boda,%20te%20confirmo%20mi%20asistencia%20el%2011%20de%20Diciembre,%20para%20compartir%20con%20ustedes%20este%20momento%20tan%20especial."
        >
          <Button style={style}>
            <BsWhatsapp className="rWIcon" />
          </Button>
        </Link>
      </Container>
    </section>
  );
};

export default Reserva;
