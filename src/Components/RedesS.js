import "./Social.css";
import selfie from "../Assets/selfie.png";
import { Button, Container, Link, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const RedesS = () => {
  const style = {
    color: "#fff",
    backgroundColor: "rgba(0,0,0, 0.5)",
  };
  const xs = useMediaQuery("(min-width:0px)");
  const md = useMediaQuery("(min-width:426px)");
  const lg = useMediaQuery("(min-width:769px)");
  const xl = useMediaQuery("(min-width:2561px)");
  let res = xl ? "h2" : lg ? "h2" : md ? "h3" : xs ? "h5" : null;
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="social" id="redes">
      <Container
        style={{
          height: "inherit",
          display: "inherit",
          alignItems: "inherit",
          justifyContent: "inherit",
          flexDirection: "inherit",
          textAlign: "center",
        }}
      >
        <img
          className="selfie"
          src={selfie}
          alt="selfie"
          data-aos="fade-right"
        />
        <Typography variant={res} style={style} data-aos="fade-right">
          #BodaRafaelYMaritza
        </Typography>
        <Typography variant={"h5"} style={style} data-aos="fade-right">
          Usa nuestro hashtag en Instagram para subir tus fotos y videos
        </Typography>
        <Link
          href="https://www.instagram.com/explore/tags/BodaRafaelYMaritza/"
          underline="none"
          target="_blank"
          rel="noopener"
          data-aos="fade-left"
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
      </Container>
    </section>
  );
};

export default RedesS;
