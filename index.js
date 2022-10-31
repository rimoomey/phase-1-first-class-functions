function boop() {
  console.log("boop");
}

function receivesAFunction(func) {
  func();
}

function returnsANamedFunction() {
  return boop;
}

function returnsAnAnonymousFunction() {
    return (function () {});
}
