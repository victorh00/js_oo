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

const admin = {
  nome: "pedro",
  // email: ,
  // nascimento: ,
  funcao: "admin",
  // ativo: ,
  // se não houver na instância, js sobe na cadeia de protótipos em busca da propriedade.
  criarCurso() {
    console.log("curso criado");
  },
};

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfo();

console.log("observando a cadeia de protótipos: admin.__proto__");
console.log(admin.__proto__);
console.log("\nmais um nível: admin.__proto__.__proto__");
console.log(admin.__proto__.__proto__);

/*
__proto__ é uma propriedade que todos os objetos têm e que aponta para o 
protótipo que foi definido para aquele objeto.

prototype é uma propriedade da função que é definida como protótipo quando 
usamos new para criar novos objetos.
*/
console.log("\ncriando uma classe usando funções...");
function User() {}
console.log("prototype em branco: ");
console.log(User.prototype);
console.log("editando o prototype...");
User.prototype.perfil = "estudante";
console.log(User.prototype);
User.prototype.nome = "joão";
console.log(User.prototype);
User.prototype.idade = 20;
console.log(User.prototype);
User.prototype.func = function exemploFunc() {
  console.log("User function");
};
console.log(User.prototype);
console.log("instanciando um User...");
let estudante = new User();
console.log("acessando propriedades da instância: ");
console.log(estudante.perfil, estudante.nome, estudante.idade);
console.log("mostrando o prototype");
console.log(estudante.prototype);
console.log(User.prototype);

/*
  obs sobre performance:

  __proto__ é uma propriedade acessora (getter e setter) obsoleta em favor de
  getPrototypeOf e setPrototypeOf. 

  setar um prototype com __proto__ ou set é lento e desaconselhavel em qualquer sistema js.

  todas as propriedades de uma cadeia de protótipos são enumeradas, e o tempo que o 
  interpretador leva para pesquisar uma propriedade, desde o nível mais alto na cadeia, 
  pode ser longo e impactar o desempenho.
*/
