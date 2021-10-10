import { Typography } from "@mui/material";
import historiaVideo from "../Assets/lovevideo.mp4";

const Conocenos = () => {
  return (
    <div>
      <Typography variant={"h3"}>Conoce nuestra historia...</Typography>
      <video
        class="nuestraHistoria"
        src={historiaVideo}
        muted
        controls
        loop
        data-smart-video
        height="250px"
      ></video>
    </div>
  );
};

export default Conocenos;
