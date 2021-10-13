import { Container, Typography } from "@mui/material";
import { GrGift } from "react-icons/gr";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Regalos.css";

const Regalos = () => {
  const xs = useMediaQuery("(min-width:0px)");
  const md = useMediaQuery("(min-width:426px)");
  const lg = useMediaQuery("(min-width:769px)");
  const xl = useMediaQuery("(min-width:2561px)");
  let res = xl ? "h3" : lg ? "h4" : md ? "h5" : xs ? "h5" : null;
  return (
    <section className="regalos" id="regalos">
      <GrGift className="giftIcon" />
      <Container>
        <Typography variant={res} color="#f87c5a">
          Lo más importante para nosotros es tu presencia en este día
          especial... Pero si algo gustas regalar, en efectivo lo sabremos
          apreciar.
        </Typography>
      </Container>
    </section>
  );
};

export default Regalos;
