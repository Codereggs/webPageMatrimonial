import "./Social.css";
import selfie from "../Assets/selfie.png";
import { Button, Link, Typography } from "@mui/material";
const RedesS = () => {
  const style = {
    color: "#fff",
    backgroundColor: "rgba(0,0,0, 0.5)",
  };
  return (
    <section className="social" id="redes">
      <img className="selfie" src={selfie} alt="selfie" />
      <Typography variant={"h2"} style={style}>
        #BodaRafaelYMaritza
      </Typography>
      <Typography variant={"h5"} style={style}>
        Usa nuestro hashtag en Instagram para subir tus fotos y videos
      </Typography>
      <Link
        href="https://www.instagram.com/explore/tags/BodaRafaelYMaritza/"
        underline="none"
        target="_blank"
        rel="noopener"
      >
        <Button
          variant="outlined"
          style={{
            backgroundColor: "rgba(0,0,0, 0.5)",
            fontSize: "1.2em",
            fontWeight: 700,
          }}
        >
          Ve nuestras fotos en Instagram
        </Button>
      </Link>
    </section>
  );
};

export default RedesS;
