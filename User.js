// criando classe com sintaxe atual
export default class User {
  constructor(nome, email, nascimento, funcao, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.funcao = funcao || "estudante";
    this.ativo = ativo;
  }
  exibirInfo() {
    console.log(this.nome, this.email);
  }
}
//
console.log("instanciação usando açúcar sintático class");
const novoUser = new User("juliana", "j@j.com", "2024-01-01");
console.log(novoUser);
novoUser.exibirInfo();
//
console.log("\nverifica se User é protótipo de novoUser: ");
console.log(User.prototype.isPrototypeOf(novoUser));
