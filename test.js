let json = {
  id1: {
    product1: {
      name: "DONG",
      age: 18,
    },
  },
  id2: {
    product1: {
      name: "DONG",
      age: 18,
    },
  },
};

const object1 = json.id1;
const object2 = json.id2;

let a = object1.product1.name;
let b = object2.product1.age;

console.log(a, b);
