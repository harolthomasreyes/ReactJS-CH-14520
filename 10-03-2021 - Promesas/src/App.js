import { useEffect, useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((todoBien, todoMal) => {
      //Ver que pasa si ponen el setItems(["Pera", "Manzana", "Mango", "Uva"])
      setTimeout(() => {
        todoBien(["Pera", "Manzana", "Mango", "Uva"]);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });

  return (
    <div className="App">
      <ItemListContainer items={items} />
    </div>
  );
}

export default App;
