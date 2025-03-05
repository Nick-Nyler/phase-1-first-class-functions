function receivesAFunction(callback) {
  callback();
}
const returnsANamedFunction = function() {
  return function namedFunction() {
    console.log("before all");
  };
}
const returnsAnAnonymousFunction = function() {
  return function() {
    console.log("before all");
  };
}

