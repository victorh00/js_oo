// rest parameters
console.log("rest parameters ============================");
function soma1(a, b, c) {
  return a + b + c;
}
function soma2(a, b, ...args) {
  let resultado = 0;
  for (let arg of args) {
    resultado += arg;
  }
  return resultado;
}

console.log(`soma1: ${soma1(1, 2, 3)}`);
console.log(`soma2: ${soma2(1, 2, 3, 4, 5, 6, 7)}`);

// objeto arguments
console.log("testando o objeto arguments ============================");
function soma3(a, b, c) {
  console.log(arguments);
  console.log(arguments[0], arguments[1], arguments[2]);
  return a + b + c;
}

function soma4() {
  console.log(arguments);
  console.log(arguments[0], arguments[1], arguments[2]);

  let res = 0;
  for (let arg of arguments) {
    res += arg;
  }
  return res;
}
console.log("consultando arguments");
console.log(soma3(1, 2, 3));
console.log("iterando arguments");
console.log(soma4(1, 2, 3));

// refs
// https://www.alura.com.br/artigos/o-que-sao-as-tipagens-estatica-e-dinamica-em-programacao
// https://www.geeksforgeeks.org/cpp/difference-between-inheritance-and-polymorphism/
// https://github.com/braziljs/eloquente-javascript
