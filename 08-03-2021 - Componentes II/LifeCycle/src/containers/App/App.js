import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    // No llames this.setState() aquí!
    this.state = {
      list: ["red", "orange", "yellow"],
      counter: 0,
    };
    // No hagas esto!
    //this.state = { color: props.color };

    //this.countClick = this.countClick.bind(this);
  }

  //se invoca inmediatamente después de que un componente se monte (se inserte en el árbol)
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  //se invoca inmediatamente antes de desmontar y destruir un componente
  componentWillUnmount() {
    console.log("[App.js] componentWillUnmount");
  }

  //se invoca inmediatamente después de que la actualización ocurra.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[App.js] componentDidUpdate");
  }

  // es el único método requerido en un componente de clase.
  render() {
    console.log("[App.js] render");
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de usuario diferente
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div className="App">
        counter:{this.state.counter}
        <br />
        <button onClick={(event) => this.countClick(event)}>Count</button>
      </div>
    );
  }

  countClick(e) {
    e.preventDefault();
    this.setState({ counter: +1 });
    console.log("The link was clicked.");
  }

  /**********************************************/
  //Métodos de ciclo de vida raramente utilizados
  /**********************************************/
  // para avisar a React si la salida de un componente no se ve afectada por el cambio actual en el estado o las props
  /*
  Si estás seguro de querer escribirlo a mano, puedes comparar this.props con nextProps y this.state con nextState 
  y devolver false para indicar a React que se puede omitir la actualización
  */
  shouldComponentUpdate(nextProps, nextState) {
    //Ojo: debemos retornar
    return true;
  }

  /*
  se invoca justo antes de llamar al método de render, tanto en la montura inicial como en las actualizaciones posteriores
  Debes devolver un objeto para actualizar el estado, o null para no actualizar nada.
  */
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");

    //Ojo: debemos retornar
    return null;
  }

  /*
  se invoca justo antes de que la salida renderizada más reciente se entregue, por ejemplo, al DOM.
  Permite al componente capturar cierta información del DOM (por ejemplo, la posición del scroll)
  */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    //Ojo: debemos retornar
    return null;
    //return { message: 'Snapshot!' };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el state, así el siguiente renderizado lo mostrará en la IU.
    return { hasError: true };
  }

  //Este ciclo de vida se invoca después de que un error haya sido lanzado por un componente descendiente
  componentDidCatch(error, info) {
    console.log(error, info);
  }
}

export default App;
