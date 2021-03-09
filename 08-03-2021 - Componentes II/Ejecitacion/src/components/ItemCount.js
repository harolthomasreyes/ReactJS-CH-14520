const ItemCount = ({ stock, initial, onAdd }) => {
  return (
    <form>
      Stock: {stock}
      <br />
      <input id="cantidad" type="number" placeholder={initial}></input>
      <br />
      <button onClick={(e) => onAdd(e, 1)}>Agregar al carrito</button>
    </form>
  );
};

export default ItemCount;
