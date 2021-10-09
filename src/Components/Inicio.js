import { useEffect } from "react";
import { temporizador } from "./Temporizador";

const Inicio = () => {
  useEffect(() => {
    temporizador(2021, 12, 11, 0, 0, 0);
  }, []);

  return (
    <div>
      Inicio
      <p className="count"></p>
    </div>
  );
};

export default Inicio;
