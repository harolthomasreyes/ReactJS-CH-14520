/*************************************************************************** */
const persona = {
  nombre: "Pablo",
  decirNombre: function () {
    const that = this;
    console.log(this.nombre);
    return function () {
      console.log(this.nombre);
      console.log("arrow that " + that.nombre);
    };
  },
};

persona.decirNombre()();
/*************************************************************************** */
const persona = {
  nombre: "Pablo",
  decirNombre: function () {
    console.log("funcion " + this.nombre);
    return () => {
      console.log("arrow " + this.nombre);
    };
  },
};

persona.decirNombre()();
