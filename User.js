// criando classe com sintaxe atual
export default class User {
  #nome;
  #email;
  #nascimento;
  #funcao;
  #ativo;
  constructor(nome, email, nascimento, funcao, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#funcao = funcao || "estudante";
    this.#ativo = ativo;
  }
  // getters
  get nome() {
    return this.#nome;
  }
  get email() {
    return this.#email;
  }
  get nascimento() {
    return this.#nascimento;
  }
  get funcao() {
    return this.#funcao;
  }
  get ativo() {
    return this.#ativo;
  }

  set nome(novoNome) {
    this.#nome = novoNome;
  }
  set email(novoEmail) {
    this.#email = novoEmail;
  }
  set nascimento(novoNascimento) {
    this.#nascimento = novoNascimento;
  }
  set funcao(novoFuncao) {
    this.#funcao = novoFuncao;
  }
  set ativo(novoAtivo) {
    this.#ativo = novoAtivo;
  }

  criarPerfil() {}
  apagarPerfil() {}
  exibirInfo() {
    console.log(this.#nome, this.#email);
  }
  exibirInfo2() {
    const objUser = this.#montaObjUser();
    console.log(objUser.nome, objUser.email);
  }
  exibirListaCursos() {}
  matricularEmCurso() {}
  exibirCursosMatriculados() {}
  #montaObjUser() {
    return {
      nome: this.#nome,
      email: this.#email,
      nascimento: this.#nascimento,
      funcao: this.#funcao,
      ativo: this.#ativo,
    };
  }
}
//
// console.log("instanciação usando açúcar sintático class");
// const novoUser = new User("juliana", "j@j.com", "2024-01-01");
// console.log(novoUser);
// novoUser.exibirInfo();
//
// console.log("\nverifica se User é protótipo de novoUser: ");
// console.log(User.prototype.isPrototypeOf(novoUser));
