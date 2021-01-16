const helloWorld = () => {
  const cadena = "Hello World";
  console.log(cadena);
};

helloWorld();
console.log(cadena);

var scope = "Global Scope";

const functionScope = () => {
  var scope = "Function local variable";

  const func = () => {
    console.log(scope  + 1);
  };
  func();
  console.log(scope + 2);
};


functionScope();
console.log(scope + 3);