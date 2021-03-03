const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
/*************************************************************************** */
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
/*************************************************************************** */
const datos = { a: 1, b: 2, c: 3 };
const { a: uno, b: dos, c: tres } = datos;
console.log(uno);
console.log(dos);
console.log(tres);
/*************************************************************************** */
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
/*************************************************************************** */
function f() {
  return [1, 2];
}

let a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2
/*************************************************************************** */
const animal = {
  tipo: {
    mamifero: {
      perro: {
        edad: 12,
      },
      gato: {
        edad: 4,
      },
    },
  },
};

const { perro, gato } = animal.tipo.mamifero;

console.log(perro);
console.log(gato);
/*************************************************************************** */
const { edad } = animal.tipo.mamifero.perro;

console.log(edad);
/*************************************************************************** */
const animales = ["perro", "gato", "raton"];

const [confiable, mimoso, lindo] = animales;

console.log(`confiable: ${confiable}`);
console.log(`mimoso: ${mimoso}`);
console.log(`lindo: ${lindo}`);
/*************************************************************************** */
animales.forEach(function (animal) {
  console.log(animal);
});
animales.forEach((animal) => {
  console.log(animal);
});
