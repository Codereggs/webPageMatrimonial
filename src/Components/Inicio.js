import { useEffect } from "react";
/* import { temporizador } from "./Temporizador"; */

const Inicio = () => {
  useEffect(() => {
    /*     temporizador(2021, 12, 11, 0, 0, 0); */
  }, []);

  return (
    <div className="inicio">
      <div className="inicioData">
        <h1>Rafa & Mary</h1>
        <h3>¡Nos casamos!</h3>
      </div>
      {/*       <div className="count"></div> */}
    </div>
  );
};

export default Inicio;
