import React from "react";
import CartContext from "./context/cartContext";
import ItemDetails from "./components/itemDetails";
import CartIcon from "./components/cartIcon";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productos: [],
      AgregarProd: this.AgregarProd,
    };
  }

  AgregarProd = (prod) => {
    if (prod) {
      this.setState({ productos: [prod, ...this.state.productos] });
    }

    console.log(this.state);
  };

  render() {
    return (
      <CartContext.Provider value={this.state}>
        <CartIcon />
        <ItemDetails />
        {this.state.productos.map((prod, index) => (
          <div key={index}>
            <ul>
              <li>id: {prod.id}</li>
              <li>nombre: {prod.nombre}</li>
              <li>descripcion: {prod.descripcion}</li>
              <li>stock: {prod.stock}</li>
            </ul>
          </div>
        ))}
      </CartContext.Provider>
    );
  }
}

export default App;
