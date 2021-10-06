const obj = {
  b: "",
};
let a = prompt("quest", "");
if (a.length < 3) {
  obj.b = a;
} else {
  console.log("err");
}

console.log(obj);
