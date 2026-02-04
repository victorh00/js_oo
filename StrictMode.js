"use strict";
// no navegador, o window é o objeto global da aba/janela.
// é o escopo global para scripts carregados como <script> (não módulos)
// atribuição sem let/const/var causa vazamento acidental para o global
console.log("=== STRICT MODE ===");
console.log("=== exemplo 1 ===");
console.log("caso correto usando let");
const func11 = function () {
  let nome = "Maria";
  console.log(`Oi, ${nome}!`);
};
console.log("chamando a função:");
func11();
console.log("verificando se foi criada uma var global window.nome");
console.log(window.nome);
//
//
console.log(" \ncaso bugado não usando let");
/* <exemplo 1 bugado>
const func22 = () => {
  nome = "Maria";
  console.log(`Oi, ${nome}!!!`);
};
console.log("chamando a função:");
func22();
console.log("verificando se foi criada uma var global window.nome");
console.log(window.nome); 
 </exemplo 1 bugado> */
//
//
console.log("\n=== exemplo 2 ===");
//
console.log("criando classe contendo atributo apenas com getter");
class Aluno11 {
  get nota() {
    return 6;
  }
}
const aluno11 = new Aluno11();
console.log("tentando atribuição aluno11.nota = 10...");
aluno11.nota = 10;
console.log(`resultado: aluno11.nota = ${aluno11.nota}`);
console.log("ou seja, atribuição não funcionou, mas não deu erro");
//
console.log("\n=== exemplo 3 ===");
//
console.log("criando funções com argumentos repetidos");
console.log("=== STRICT MODE END ===\n\n\n");
