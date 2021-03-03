const numeros = [1,2,3,4,5]
// [1,2,3,4,5]
const agregoNumeros = [...numeros,6]
// [1, 2, 3, 4, 5, 6]
const espacioSoloParaNumeros = [numeros,6]
// [Array(5), 6]
// 0: (5) [1, 2, 3, 4, 5]
// 1: 6
// length: 2
/********************************************************************/
const persona= {
nombre: 'Pedro'
}
// {nombre: "Pedro"}
const nuevaPersona ={
...persona,
edad:30
}
// {nombre: "Pedro", edad: 30}