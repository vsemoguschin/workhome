const opt = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    e: 5,
    f: 6,
  },
  makeTest: function () {
    console.log("test");
  },
};

const { e, f } = opt.d;
console.log(e);

// opt.makeTest();

// console.log(opt["d"]["e"]);

// delete opt.c;

// console.log(opt);
// let counter = 0;

// for (let key in opt) {
//   if (typeof (opt[key]) === "object") {
//     for (let i in opt[key]) {
//       console.log(`свойство ${i}, значение ${opt[key][i]}`);
//       // counter++;//счетчик
//     }
//   } else {
//     console.log(`свойство ${key}, значение ${opt[key]}`);
//     // counter++;// счетчик
//   }
// }

// console.log(counter);

// console.log(Object.keys(opt)); //получить все значения
// console.log(Object.keys(opt).length); //получить длинну
