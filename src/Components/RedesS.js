import "./Social.css";
import selfie from "../Assets/selfie.png";
import { Button, Link, Typography } from "@mui/material";
const RedesS = () => {
  return (
    <section className="social" id="redes">
      <img className="selfie" src={selfie} alt="selfie" />
      <Typography variant={"h2"}># BodaRafaelYMaritza</Typography>
      <Typography variant={"h5"}>
        Usa nuestro hashtag en Instagram para subir tus fotos y videos
      </Typography>
      <Link>
        <Button variant="outlined">Ve nuestras fotos en Instagram</Button>
      </Link>
    </section>
  );
};

export default RedesS;
