import "./Fecha.css";
import FechaCards from "./FechaCards";
import { BiChurch, BiCloset } from "react-icons/bi";
import { GiGlassCelebration } from "react-icons/gi";
import { Typography } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Fecha = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="fechaContainer" id="fecha">
      <Typography
        variant={"h4"}
        align="center"
        style={{
          marginTop: "3rem",
          fontFamily: "Montserrat",
          paddingTop: "110px",
        }}
        data-aos="flip-left"
      >
        TE INVITAMOS A QUE NOS ACOMPAÑES EN ESTE GRAN DÍA
      </Typography>

      <FechaCards
        icono={<BiChurch className="cIcon" />}
        titulo="Ceremonia"
        localidad="Parroquia Santa María"
        fecha="11 de Diciembre del 2021 - 17 hrs."
        direccion="Av. La Plata 286"
        gmapsdir="https://www.google.com.ar/maps/place/Av.+La+Plata+286,+C1184+CABA/@-34.6180872,-58.4287399,19z/data=!3m1!4b1!4m5!3m4!1s0x95bcca5b28d8c90d:0xa4bf84b58531c4b0!8m2!3d-34.6180883!4d-58.4281927"
      />
      <FechaCards
        icono={<GiGlassCelebration className="fIcon" />}
        titulo="Fiesta"
        localidad="Salon Zsar Recepciones"
        fecha="11 de Diciembre del 2021 - 18:30 hrs."
        direccion="Av. Juan B. Justo 5902"
        gmapsdir="https://www.google.com.ar/maps/place/Av.+Juan+B.+Justo+5902,+C1416DLN+CABA/@-34.6200267,-58.4805432,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcc9ee9c1e4005:0x88cea73a32c8a723!8m2!3d-34.6200311!4d-58.4783545"
      />
      <FechaCards
        icono={<BiCloset className="cloIcon" />}
        titulo="Código de vestimenta"
        localidad="Elegante"
      />
    </section>
  );
};

export default Fecha;
