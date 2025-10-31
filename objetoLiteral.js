//objeto literal user
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
exibir2(); //ou simplesmente func1.bind(user);

/*
métodos para manipular o contexto de this: call() e apply()
call() pode ser utilizado para se implementar herança 
utilizando funções em vez da sintaxe de classe.
*/
func1.call(user);

// "classe" criada nativamente como função
function User(nome, email) {
  this.nome = nome;
  this.email = email;
  this.exibInfo = function () {
    console.log(this.nome, this.email);
  };
  this.executaFuncao = function (func) {
    func.call(this, nome, email);
  };
  this.executaFuncao2 = function (func) {
    func.apply(user, [this.nome, this.email]);
  };
}
// instanciando usuário a partir da classe User
const user2 = new User("roberto", "r@r.com");
console.log("chamando função da instância: ");
user2.exibInfo();
console.log("chamando outra instância na função: ");
user2.exibInfo.call(user);
console.log("\nchamando novamente função da instância: ");
user2.exibInfo();
console.log("usando bind em outra instância (não altera contexto!): ");
user2.exibInfo.bind(user);
user2.exibInfo();
console.log("passando função pra outra var com bind pra outra instância: ");
const exib3 = user2.exibInfo.bind(user);
exib3();

console.log("uso do call com parâmetros: ");
function exibeMensagem(nome, email) {
  console.log(`nome: ${nome}, email: ${email}`);
}
user2.executaFuncao(exibeMensagem);
console.log(
  "uso do apply com parâmetros: mesma coisa, mas parms são passados em array"
);
user2.executaFuncao2(exibeMensagem);

/*
relembrando as 3 formas de declarar funções: 
// declaração de função com nome: sofre hoisting, pode ser usada antes da declaração.
function soma(num1, num2) {
 return num1 + num2;
}
// atribuição ou declaração anônima (expressão de função): 
// não sofre hoisting, interpretada no momento da exec.
 const soma = function(num1, num2) {
 return num1 + num2;
}
// arrow function (expressão de função): 
// não sofre hoisting, interpretada no momento da exec.
 const soma = (num1, num2) => {
 return num1 + num2;
}
*/
