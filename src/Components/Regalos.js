import { Typography } from "@mui/material";
import { GrGift } from "react-icons/gr";
import "./Regalos.css";

const Regalos = () => {
  return (
    <section className="regalos">
      <GrGift className="giftIcon" />
      <Typography variant="h2">
        Lo más importante para nosotros es tu presencia en este día especial...
        Pero si algo gustas regalar, en efectivo lo sabremos apreciar.
      </Typography>
    </section>
  );
};

export default Regalos;
