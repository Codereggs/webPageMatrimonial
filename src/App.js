import "./App.css";
import Fecha from "./Components/Fecha";
import Inicio from "./Components/Inicio";
import RedesS from "./Components/RedesS";
import Regalos from "./Components/Regalos";
import Reserva from "./Components/Reserva";
import NavBar from "./Components/Nav";
import Conocenos from "./Components/Conocenos";
import TeEsperamos from "./Components/TeEsperamos";
import Footer from "./Components/Footer";

function App() {
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
}

export default App;
