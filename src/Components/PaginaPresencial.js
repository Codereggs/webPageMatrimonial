import Conocenos from "./Conocenos";
import Fecha from "./Fecha";
import Footer from "./Footer";
import Inicio from "./Inicio";
import NavBar from "./Nav";
import RedesS from "./RedesS";
import Regalos from "./Regalos";
import Reserva from "./Reserva";
import TeEsperamos from "./TeEsperamos";

const PaginaPresencial = () => {
  return (
    <>
      <NavBar />
      <Inicio />
      <Fecha />
      <RedesS />
      <Conocenos />
      <Regalos />
      <Reserva />
      <TeEsperamos />
      <Footer />
    </>
  );
};

export default PaginaPresencial;
