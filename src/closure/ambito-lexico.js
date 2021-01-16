// Asignar nuevos elementos construir nuevos elementos para recardar el valor

const buildCount = (i) => {
  let count = i;

  const addCount = () => {
    console.log(count++); // Ambito léxico son las funciones que se ejecutan usando la cadena del alcance que teniamos en su momento
  };

  return addCount;
};


const myCount = buildCount(10);

myCount();
myCount();
myCount();


const myOtherCounter = buildCount(1);

myOtherCounter();
myOtherCounter();
myOtherCounter();