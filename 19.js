//Передача по ссылке или по значению, Spread оператор (ES6-ES9)

let a = 5;
b = a;
b = b + 5;
// console.log(b);

const obj = {
  a: 5,
  b: 1,
};

const copy = obj; //передача по ссылке
copy.a = 10;
// console.log(copy);
// console.log(obj);

function makeCopy(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = makeCopy(numbers);
// console.log(newNumbers);
newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);

const add = {
  d: 90,
  e: 20,
};

// console.log(Object.assign(numbers, add)); //объединить объекты
// console.log(Object.assign({}, add)); //клон add

oldArray = ["a", "v"];
newArray = oldArray.slice();
console.log(newArray);
