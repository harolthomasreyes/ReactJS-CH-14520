import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => (
  <div>
    <h1>Contenedor</h1>
    <ItemList items={props.items}/>
  </div>
);

export default ItemListContainer;
