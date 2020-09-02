// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 == true && boolean2 == true) {
    return true;
  } else {
    return false;
  }
}

// --------------------TESTE DESAFIO 1--------------------------------
// let teste = "true";
// let teste2= "true";
// console.log(compareTrue(teste,teste2));
// -------------------------------------------------------------------

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// --------------------TESTE DESAFIO 2--------------------------------
// let teste = 30;
// let teste2= 10;
// console.log(calcArea(teste,teste2));
// -------------------------------------------------------------------

// Desafio 3
function splitSentence(string) {
  resultado = string.split(" ");
  return resultado;
}

// --------------------TESTE DESAFIO 3--------------------------------
// let teste = "be trybe";
// console.log(splitSentence(teste));
// -------------------------------------------------------------------

// Desafio 4 ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'],
function concatName(array) {
  let novoArray = "";
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (i == array.length - 1) {
      novoArray = novoArray + array[i] + ", ";
    }
    if (i == 0) {
      novoArray = novoArray + array[i];
    }
  }
  return novoArray;
}

// --------------------TESTE DESAFIO 4--------------------------------
// let teste = ["Lucas", "Cassiano", "Ferraz", "Paolillo"];
// console.log(concatName(teste));
// -------------------------------------------------------------------

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  for (let i = 1; i <= wins; i += 1) {
    pontos += 3;
  }
  for (let j = 1; j <= ties; j += 1) {
    pontos += 1;
  }
  return pontos;
}

// --------------------TESTE DESAFIO 5--------------------------------
// let teste = 3;
// let teste2 = 1;
// console.log(footballPoints(teste,teste2));
// -------------------------------------------------------------------

// Desafio 6
function highestCount(array) {
  let count = 0;
  let maior = array[0];
  for (let i in array) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  for (let i in array) {
    if (array[i] == maior) {
      count += 1;
    }
  }
  return count;
}

// --------------------TESTE DESAFIO 6--------------------------------
// let teste = [9, 1, 2, 3, 9, 5, 7];
// console.log(highestCount(teste));
// -------------------------------------------------------------------

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  dist1 = Math.abs(mouse - cat1);
  dist2 = Math.abs(mouse - cat2);
  if (dist1 > dist2) {
    return "cat2";
  } else if (dist2 > dist1) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// --------------------TESTE DESAFIO 7--------------------------------
// let teste = 1;
// let teste2 = 0;
// let teste3 = 2;
// console.log(catAndMouse(teste, teste2, teste3));
// -------------------------------------------------------------------

// Desafio 8
function fizzBuzz(array) {
  let novoArray = [];
  for (let i in array) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      novoArray.push("fizzBuzz");
    } else if (array[i] % 3 == 0) {
      novoArray.push("fizz");
    } else if (array[i] % 5 == 0) {
      novoArray.push("buzz");
    } else {
      novoArray.push("bug!");
    }
  }
  return novoArray;
}

// --------------------TESTE DESAFIO 8--------------------------------
// let teste = [2, 15, 7, 9, 45];
// console.log(fizzBuzz(teste));
// -------------------------------------------------------------------

// Desafio 9
function encode(string) {
  let novaString = "";
  for (let i in string) {
    if (string[i] == "a") {
      novaString = novaString + "1";
    } else if (string[i] == "e") {
      novaString = novaString + "2";
    } else if (string[i] == "i") {
      novaString = novaString + "3";
    } else if (string[i] == "o") {
      novaString = novaString + "4";
    } else if (string[i] == "u") {
      novaString = novaString + "5";
    } else {
      novaString = novaString + string[i];
    }
  }
  return novaString;
}
// --------------------TESTE DESAFIO 9 encode--------------------------------
// let teste = "hi there!";
// console.log(encode(teste));
// -------------------------------------------------------------------

function decode(string) {
  let novaString = "";
  for (let i in string) {
    if (string[i] == "1") {
      novaString = novaString + "a";
    } else if (string[i] == "2") {
      novaString = novaString + "e";
    } else if (string[i] == "3") {
      novaString = novaString + "i";
    } else if (string[i] == "4") {
      novaString = novaString + "o";
    } else if (string[i] == "5") {
      novaString = novaString + "u";
    } else {
      novaString = novaString + string[i];
    }
  }
  return novaString;
}

// --------------------TESTE DESAFIO 9 decode--------------------------------
// let teste = "h3 th2r2!";
// console.log(decode(teste));
// -------------------------------------------------------------------

// Desafio 10
function techList(array, name) {
  if (array == "") {
    return "Vazio!";
  } else {
    let novoArray = [];
    for (let i in array) {
      novoArray[i] = {
        tech: array[i],
        name: name,
      };
    }

    function compare(a, b) {
      if (a.tech < b.tech) {
        return -1;
      }
      if (a.tech > b.tech) {
        return 1;
      }
      return 0;
    }

    novoArray.sort(compare);

    return novoArray;
  }
}

// --------------------TESTE DESAFIO 10--------------------------------
// let teste = [""];
// let teste1 = "Lucas";
// console.log(techList(teste, teste1));
// -------------------------------------------------------------------

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
};
