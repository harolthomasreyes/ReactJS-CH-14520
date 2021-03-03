// function myFunction() {
//   console.log("Hello World");
// }
// myFunction(); // 'Hello World'
// /*************************************************************************** */
// (function () {
//   console.log("Hello World");
// })();
// /*************************************************************************** */
// (function (param1, param2) {
//   console.log(param1); // Hello World
// })("Hello World");
// /*************************************************************************** */
// // Classic
// (function () {})();

// // Crockford's favorite
// (function () {})();

// // Unary versions
// +(function () {})();

// // Facebook version
// !(function () {})();

// // Crazy version
// !1 % -+~(function () {})();

// new (function () {})();
// /*************************************************************************** */
// // If we want to pass arguments, we need the set of parens:
// new (function () {})(params);

// var myApp = (function () {
//   var foo = "Hello World";
//   return {
//     foo: foo,
//   };
// })();

// console.log(myApp.foo); // Hello World
/*************************************************************************** */

//ARROW FUNCTION
// Función tradicional
// function suma(a, b) {
//   console.log(a + b);
// }

// suma(1, 3);

// Desglose de la función flecha
// 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
// suma = (a, b) => {
//   console.log(a + b);
// };
// suma(1, 2);
/*************************************************************************** */
// // 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
suma100 = (a) => console.log(a + 100);
suma100(1);
/*************************************************************************** */
