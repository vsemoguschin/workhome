//Массивы и псевдомассивы

const arr = [1, 2, 33, 6, 10];
arr.sort(compareNum); //sort() начислах работает иначе
console.log(arr);

function compareNum(a,b){
    return a-b;
}

const str = 'fdfd, dsad, aaa';
const products = str.split(', '); //разделить заданным образом(массив на выходе)
console.log(products);
products.sort(); //сортирует по алфавиту
console.log(products.join('; '));  // объединить все элементы массива в строку через заданные символы

arr.pop(); //удаляет последний элемент массива
// console.log(arr);

arr.push("push"); //добавляет элемент в конец массива
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
}
//циклы аналогичны
for (let value of arr){
    // console.log(value);
}

arr.forEach(function(item, i, mass){
    // console.log(`${i}: ${item} in array ${mass}`);
})