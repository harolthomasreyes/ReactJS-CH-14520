import { getFirestore } from "./configs/firebase";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const db = getFirestore();
    const categoriasCollection = db.collection("categorias");

    categoriasCollection
      .get()
      .then((resp) => {
        if (resp.size === 0) {
          console.log("Sin datos");
        }

        resp.docs.map((c) => console.log({ id: c.id, ...c.data() }));
      })
      .catch((error) => console.log(error));
  }, []);

  return <div className="App"></div>;
}

export default App;
