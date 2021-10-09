import "./Fecha.css";
import FechaCards from "./FechaCards";
import { BiChurch } from "react-icons/bi";
import { Typography } from "@mui/material";

const Fecha = () => {
  return (
    <div className="fechaContainer">
      <Typography variant={"h4"} align="center">
        TE INVITAMOS A QUE NOS ACOMPAÑES EN ESTE GRAN DÍA
      </Typography>

      <FechaCards
        icono={<BiChurch className="cIcon" />}
        titulo="Ceremonia"
        localidad="Parroquia Santa María"
        fecha="11 de Diciembre - 17 hrs."
        direccion="Av. La Plata 286"
        gmapsdir="https://www.google.com.ar/maps/place/Av.+La+Plata+216,+C1184+CABA/@-34.6174151,-58.4306926,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcca44cd2766a3:0xda5dc172cdf60528!8m2!3d-34.6174195!4d-58.4285039"
        whatsappdir="https://api.whatsapp.com/send?phone=541127601029&text=Hola!%20Estamos%20muy%20contentos%20de%20que%20quieras%20venir%20a%20nuestra%20boda,%20aguarda%20unos%20instantes%20y%20te%20responder%C3%A9%20a%20la%20brevedad.%20Un%20abrazo!%20"
      />
      <FechaCards
        icono={<BiChurch className="cIcon" />}
        titulo="Ceremonia"
        localidad="Parroquia Santa María"
        fecha="11 de Diciembre - 17 hrs."
        direccion="Av. La Plata 286"
        gmapsdir="https://www.google.com.ar/maps/place/Av.+La+Plata+216,+C1184+CABA/@-34.6174151,-58.4306926,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcca44cd2766a3:0xda5dc172cdf60528!8m2!3d-34.6174195!4d-58.4285039"
        whatsappdir="https://api.whatsapp.com/send?phone=541127601029&text=Hola!%20Estamos%20muy%20contentos%20de%20que%20quieras%20venir%20a%20nuestra%20boda,%20aguarda%20unos%20instantes%20y%20te%20responder%C3%A9%20a%20la%20brevedad.%20Un%20abrazo!%20"
      />
    </div>
  );
};

export default Fecha;
