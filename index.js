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
