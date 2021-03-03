import { component } from "./component";
import "./index.css";
document.body.appendChild(component());

const abc = { a: "a", b: "b", c: "c" };
const { a, ...bc } = abc;

console.log(abc);
console.log(a);
console.log(bc);
/***************************/
const msj = "    hola".trimStart();
console.log(msj);
