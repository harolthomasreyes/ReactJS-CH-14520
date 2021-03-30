import Nivel3 from "./Nivel3";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function Nivel2(props) {
  const context = useContext(GlobalContext);

  return (
    <dib>
      nivel 2(<button onClick={() => context.sumar(1)}>+</button>
      <button onClick={() => context.restar(1)}>-</button>)
      <br />
      <Nivel3 />
    </dib>
  );
}
