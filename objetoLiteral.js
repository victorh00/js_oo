const user = {
  nome: "joao",
  email: "joao@joao",
  nascimento: "01.01.2001",
  funcao: "estudante",
  ativo: true,
  exibirInfo: function () {
    console.log(this.nome, this.email);
  },
};

/*
js não usa classes como outras linguagens. usa herança de protótipo, e implementou as palavras
this e class por apelo popular, mas são camadas por cima da implementação original baseada em funções.
*/
console.log("função com contexto: ");
user.exibirInfo();

console.log("função passada por valor perde o contexto: ");
const exibir1 = user.exibirInfo;
exibir1();

console.log("\nfunção solta criada sem contexto:");
const func1 = function () {
  console.log(this.nome, this.email);
};
func1();
console.log("bind do objeto estabelece contexto:");
const exibir2 = func1.bind(user);
exibir2();
