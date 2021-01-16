const person = () => {
  let saveName = "Name";

  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
      return saveName;
    },
  };
};

const myName = person();

myName.setName("Carlos");
a = myName.getName();
console.log(a);
