const mess = "hi";
let num = 222;
console.log(num);
function showMessage() {
  num = 20;
  console.log(`внутри ${num}`);
}
console.log(`до вызова ${num}`);
showMessage();
// console.log(num);

//////////

declaration();
function declaration() {
  console.log("можно вызывать до объявления");
}

const expression = function () {
  console.log("вызывается только после объявления");
};
expression();

const arrowFunc = () => {
  console.log('Стрелочная функция');
};
arrowFunc();
