import "./Conocenos.css";
import { Typography } from "@mui/material";
import historiaVideo from "../Assets/lovevideo.mp4";
import useMediaQuery from "@mui/material/useMediaQuery";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const VideoQuery = ({ height }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <video
        className="nuestraHistoria"
        src={historiaVideo}
        muted
        controls
        loop
        data-smart-video
        height={height}
      ></video>
    </>
  );
};

const Conocenos = () => {
  const xs = useMediaQuery("(min-width:0px)");
  const md = useMediaQuery("(min-width:426px)");
  const lg = useMediaQuery("(min-width:769px)");
  const xl = useMediaQuery("(min-width:2561px)");
  let height = xl
    ? "1000px"
    : lg
    ? "500px"
    : md
    ? "250px"
    : xs
    ? "150px"
    : null;
  return (
    <section className="conocenos" id="conocenos">
      <Typography
        variant={"h3"}
        color="#f87c5a"
        style={{ textAlign: "center", margin: "4rem 0" }}
        data-aos="fade-up-right"
      >
        Conoce nuestra historia...
      </Typography>
      <VideoQuery height={height} data-aos="fade-up-left" />
    </section>
  );
};

export default Conocenos;
