import { Container, Typography } from "@mui/material";
import { GrGift } from "react-icons/gr";
import "./Regalos.css";

const Regalos = () => {
  return (
    <section className="regalos" id="regalos">
      <GrGift className="giftIcon" />
      <Container fluid>
        <Typography variant="h2">
          Lo más importante para nosotros es tu presencia en este día
          especial... Pero si algo gustas regalar, en efectivo lo sabremos
          apreciar.
        </Typography>
      </Container>
    </section>
  );
};

export default Regalos;
