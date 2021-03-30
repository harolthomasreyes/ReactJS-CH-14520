import { useState } from "react";
import Nivel1 from "./components/Nivel1";
import GlobalContext from "./contexts/GlobalContext";

function App() {
  const [currentStock, setCurrentStock] = useState(10);

  const onAdd = (numero) => setCurrentStock(currentStock + numero);
  const onSubstract = (numero) => setCurrentStock(currentStock - numero);

  return (
    <GlobalContext.Provider
      value={{ stock: currentStock, sumar: onAdd, restar: onSubstract }}
    >
      <Nivel1 />
    </GlobalContext.Provider>
  );
}

export default App;
