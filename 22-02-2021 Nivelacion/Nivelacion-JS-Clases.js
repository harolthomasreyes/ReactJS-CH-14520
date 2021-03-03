class Gato {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(this.nombre + " hace ruido.");
  }
}

class Leon extends Gato {
  hablar() {
    super.hablar();
    console.log(this.nombre + " maulla.");
  }
}
const gato = new Gato("mimi");
const leon = new Leon("pancho");

gato.hablar();
leon.hablar();

console.log(gato instanceof Leon);
console.log(leon instanceof Gato);
console.log(leon instanceof Leon);
