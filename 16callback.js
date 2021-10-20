function one(a, callback) {
  console.log(`a = ${a}`);
  callback();
}

one(4, two);

function two() {
  console.log(`two`);
}

one(5, function three() {
  console.log(`three`);
});
