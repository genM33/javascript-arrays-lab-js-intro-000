var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(nameOfNewKitten) {
  return kittens.push(nameOfNewKitten);
}

function destructivelyPrependKitten(nameOfNewKitten) {
  return kittens.unshift(nameOfNewKitten);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(nameOfNewKitten) {
  return kittens.concat(nameOfNewKitten);
}

function prependKitten(nameOfNewKitten) {
  newKittens = [nameOfNewKitten, ...kittens];
  return newKittens;
}

var removeLastKitten = () => {
  return kittens.slice(0, kittens.length-1);
}

var removeFirstKitten = () => {
  return kittens.slice(1);
}
