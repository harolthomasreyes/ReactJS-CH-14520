import { useContext } from "react";
import CartContext from "../context/cartContext";

export default function ItemDetails() {
  const context = useContext(CartContext);

  const product = {
    id: 1,
    nombre: "Sonsing",
    descripcion: "Nissan",
    stock: 7,
  };

  return (
    <div>
      <button onClick={() => context.AgregarProd(product)}>Agregar</button>
      hola soy item details
    </div>
  );
}
