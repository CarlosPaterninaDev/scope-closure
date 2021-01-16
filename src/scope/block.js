const fruits = () => {
  if (true) {
    var fruit1 = "piña";
    let fruit2 = "banana";
    const fruit3 = "mango";
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
  // console.log(fruit2);
  // console.log(fruit3);
};
fruits();

let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);

// Problemas de asignar variables con var en bloques

var x = 1;
{
  var x = 2;
  console.log(x);
}
console.log(x);


// Problema
const anotherFuncVar = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 2000);
  }
};

anotherFuncVar();

// Solución
const anotherFunclet = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 2000);
  }
};

anotherFunclet();
