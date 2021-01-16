// TODO: Closure : Es la combinación de una función y el ambito léxico ddonde ha sido creada la función
// "La función recuerda donde ha sido creado"

// Sin estructura de Closure
const moneyBox = (coins) => {
  var saveCoins = 0;

  saveCoins += coins;
  console.log(`Dinero guardado: $${saveCoins}`);
};

moneyBox(5);
moneyBox(10); // En este momento solo immprime el valor que se le pase por argumentos.

// Usando una estructura de closure;

const moneyBox = (coins) => {
  var saveCoins = 0;

  const saveCoinsFunc = (coins) => {
    saveCoins += coins;
    console.log(`Dinero guardado: $${saveCoins}`);
  };

  return saveCoinsFunc;
};

let myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(10);

//

const papa = (nuevoEngendro) =>{
  var cantidadDeHijos = 0;
  const crearEngendro = (nuevoEngendro) =>{
      cantidadDeHijos += nuevoEngendro;
      console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
  }
  return crearEngendro;
}

let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(1)  // cantidad de engendritos = 1
traigamosHijosAlMundo(1)  // cantidad de engendritos = 2
traigamosHijosAlMundo(1)  // cantidad de engendritos = 3



// Bueno quisiera empezar con comentar que me costó entender esto, tuve que ver el video 2 veces para poderlo entender, me gustaría empezar con cambiar un poco los nombres de funciones y variables por algo menos confuso, y quizás mas divertido…

// const papa = (nuevoEngendro) =>{
//     var cantidadDeHijos = 0;
//     const crearEngendro = (nuevoEngendro) =>{
//         cantidadDeHijos += nuevoEngendro;
//         console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
//     }
//     return crearEngendro;
// }

// let traigamosHijosAlMundo = papa();
// traigamosHijosAlMundo(1)  // cantidad de engendritos = 1
// traigamosHijosAlMundo(1)  // cantidad de engendritos = 2
// traigamosHijosAlMundo(1)  // cantidad de engendritos = 3
// Si estudiamos la función papa esta tiene la declaración de la variable cantidaDeHijos y la declaración de la función crearEngendro y al final retorna la función crearEngendro,

// Ahora después de la declaración de la función papa viene la línea

// let traigamosHijosAlMundo = papa();
// Notese el PARENTESIS () de la función papa

// let traigamosHijosAlMundo = papa(); // <-- este paréntesis indica que la función se está ejecutando
// este paréntesis indica que la función se está ejecutando, es decir cada línea de esa función se ejecuta una a una, y si recorremos línea a línea a la función tenemos
// la declaración de cantidadDeHijos que vale 0
// la declaración de la función crearEngendro y el retorno de esta función,

// así que finalmente traigamosHijosAlMundo vale lo que haya retornado la función papa que es crearEngendro (nótese que no se ejecuta la función crearEngendro sino que simplemente se retorna la referencia a ella)

// por ende cada vez que ejecutamos

// traigamosHijosAlMundo(1)
// realmente estamos es llamando a la función crearEngendro con todo su ámbito que es la variable cantidadDeHijos con valor de 0, y a este le suma lo que se le pase por parámetro,

// En la segunda ejecución de

// traigamosHijosAlMundo(1)
// no se está volviendo a correr todas las líneas de la función papa, esto ya se hizo en la asignación ( let traigamosHijosAlMundo = papa(); ), sino que realmente se está volviendo a llamar a crearEngendro() la cual había modificado su variable cantidadDeHijos en la primera llamada

// asi que pienso que la clave es entender que en esta asignación

// let traigamosHijosAlMundo = papa();
// se ejecutó la función papá donde se declararó la variable de dicha función (cantidadDeHijos) y la función que retorna (crearEngendro) UNA SOLA VEZ! lo que se ejecuta multiples veces es el la función crearEngendro