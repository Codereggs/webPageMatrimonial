import "./Social.css";
import selfie from "../Assets/selfie.png";
import { Button, Container, Link, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
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
        <img className="selfie" src={selfie} alt="selfie" />
        <Typography variant={res} style={style}>
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
      </Container>
    </section>
  );
};

export default RedesS;
