import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function Nivel3(props) {
  const context = useContext(GlobalContext);
  console.log(context);
  return (
    <dib>
      nivel 3( stock actual: {context.stock})
      <br />
      <br />
    </dib>
  );
}
