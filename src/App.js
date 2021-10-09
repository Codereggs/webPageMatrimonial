import "./App.css";
import Fecha from "./Components/Fecha";
import Inicio from "./Components/Inicio";
import RedesS from "./Components/RedesS";
import Regalos from "./Components/Regalos";
import Reserva from "./Components/Reserva";
import NavBar from "./Components/Nav";

function App() {
  return (
    <>
      <NavBar />
      <Inicio />
      <Fecha />
      <RedesS />
      <Regalos />
      <Reserva />
    </>
  );
}

export default App;
