import "./Social.css";
import selfie from "../Assets/selfie.png";
import historiaVideo from "../Assets/lovevideo.mp4";
import { Typography } from "@mui/material";
const RedesS = () => {
  return (
    <div className="social">
      <img className="selfie" src={selfie} alt="selfie" />
      <Typography variant={"h2"}># BodaRafaelYMaritza</Typography>
      <Typography variant={"h5"}>
        Usa nuestro hashtag en Instagram para subir tus fotos y videos
      </Typography>
    </div>
  );
};

export default RedesS;
