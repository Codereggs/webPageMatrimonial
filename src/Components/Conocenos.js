import "./Conocenos.css";
import { Typography } from "@mui/material";
import historiaVideo from "../Assets/lovevideo.mp4";
import useMediaQuery from "@mui/material/useMediaQuery";

const VideoQuery = ({ height }) => {
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
    ? "200px"
    : null;
  console.log(height);
  console.log(xs, md, lg, xl);
  return (
    <section className="conocenos">
      <Typography variant={"h3"}>Conoce nuestra historia...</Typography>
      <VideoQuery height={height} />
    </section>
  );
};

export default Conocenos;
