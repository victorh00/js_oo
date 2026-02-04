// no navegador, o window é o objeto global da aba/janela.
// é o escopo global para scripts carregados como <script> (não módulos)
// atribuição sem let/const/var causa vazamento acidental para o global
console.log("=== SLOPPY MODE ===");
console.log("=== exemplo 1 ===");
console.log("caso correto usando let");
const func10 = function () {
  let nome = "Maria";
  console.log(`Oi, ${nome}!`);
};
console.log("chamando a função:");
func10();
console.log("verificando se foi criada uma var global window.nome");
console.log(window.nome);
//
//
console.log(" \ncaso bugado não usando let");
const func20 = () => {
  nome = "Maria";
  console.log(`Oi, ${nome}!!!`);
};
console.log("chamando a função:");
func20();
console.log("verificando se foi criada uma var global window.nome");
console.log(window.nome);
//
//
console.log("\n=== exemplo 2 ===");
//
console.log("criando classe contendo atributo apenas com getter");
class Aluno10 {
  get nota() {
    return 6;
  }
}
const aluno10 = new Aluno10();
console.log("tentando atribuição aluno10.nota = 10...");
aluno10.nota = 10;
console.log(`resultado: aluno10.nota = ${aluno10.nota}`);
console.log("ou seja, atribuição não funcionou, mas não deu erro");
//
console.log("\n=== exemplo 3 ===");
//
console.log("=== SLOPPY MODE END ===\n\n\n");
