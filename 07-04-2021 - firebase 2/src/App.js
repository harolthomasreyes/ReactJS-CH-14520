import firebase from "firebase/app";
import { useState } from "react";
import { getFirestore } from "./configs/firebase";
import "firebase/firestore";

function App() {
  const [db, setDb] = useState(getFirestore());
  const [lastId, setLastId] = useState();

  function getById() {
    const productos = db
      .collection("productos")
      .doc(document.getElementById("idDoc").value);

    productos.get().then((res) => {
      console.log(res.data());
    });
  }

  function getAll() {
    const productos = db.collection("productos");

    productos.get().then((res) => {
      console.log(res.docs);
      if (res.size > 0) {
        res.docs.map((d) => {
          console.log({
            id: d.id,
            ...d.data(),
          });
        });
      }
    });
  }

  function getByFilter() {
    const productos = db.collection("productos").where("precio", "==", 300);

    productos.get().then((res) => {
      console.log(res.docs);
      if (res.size > 0) {
        res.docs.map((d) => {
          console.log({
            id: d.id,
            ...d.data(),
          });
        });
      }
    });
  }

  function create() {
    const newOrder = {
      user: { id: 1, nombre: "Ramirez", email: "ramirez@gmail.com" },
      products: [
        { productid: 1, quantity: 3, price: 100 },
        { productid: 2, quantity: 7, price: 100 },
      ],
      createOn: firebase.firestore.Timestamp.fromDate(new Date()),
      total: 2000,
    };

    const orders = db.collection("orders");

    orders.add(newOrder).then((resp) => {
      console.log(resp);
      console.log(resp.id);
      setLastId(resp.id);
    });
  }

  function updateById() {
    const orders = db
      .collection("orders")
      .doc(document.getElementById("idDoc").value);

    const updateObject = { total: 1000 };
    orders.update(updateObject);
  }

  function deleteById() {
    const orders = db
      .collection("orders")
      .doc(document.getElementById("idDoc").value);

    orders.delete();
  }

  return (
    <div className="App">
      Last id:
      <input id="idDoc" type="text" value={lastId} />
      <br />
      <button onClick={create}>create</button>
      <button onClick={updateById}>update</button>
      <button onClick={deleteById}>delete</button>
      <br />
      <button onClick={getAll}>Get All</button>
      <button onClick={getByFilter}>Get by filter</button>
      <button onClick={getById}>Get by id</button>
    </div>
  );
}

export default App;
