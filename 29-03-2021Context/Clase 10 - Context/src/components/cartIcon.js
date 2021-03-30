import { useContext } from "react";
import CartContext from "../context/cartContext";

export default function CartIcon() {
  const context = useContext(CartContext);

  return <div>{context.productos.length}</div>;
}
