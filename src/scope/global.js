var hello = "Hello";  // Es accesible dentro de todo el ambito ( Global )
var hello = "Hola";
let world = "World";
// let world = "Mundo";  ( SyntaxError: Identifier 'world' has already been declared )
const helloWorld = "Hello World";

// console.log(hello);
// console.log(world);
// console.log(helloWorld);

const func = () => {

  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

func();



// Asignación de variable global dentro de un scope de una función

const malaPractica = () => {

    variableGlobal = 'Soy una mala practica';
    console.log(variableGlobal);

}

malaPractica();
console.log(variableGlobal);



const malaPractica2 = () => {

  var prueba = variableGlobal2 = 'Soy una mala practica2';
  console.log(variableGlobal2);

}

malaPractica2();
console.log(variableGlobal2);
console.log(prueba);
