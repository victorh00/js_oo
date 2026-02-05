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
    return `${this.#nome}, ${this.#email}`;
  }
  exibirInfo2() {
    const objUser = this.#montaObjUser();
    return `${objUser.nome}, ${objUser.email}`;
  }
  // overload ficticio pois o js não suporta a maneira usual
  exibirInfo3() {
    if (this.funcao === "estudante") {
      return `dados estudante: ${this.nome}`;
    }
    if (this.funcao === "admin") {
      return `dados admin    : ${this.nome}, ${this.#funcao}`;
    }
    if (this.funcao === "docente") {
      return `dados docente  : ${this.nome}, ${this.email}`;
    }
  }
  exibirInfo4(tipo) {
    if (tipo === "basico") {
      return `dados básicos: ${this.nome}`;
    }
    if (tipo === "completo") {
      return `dados completos: ${this.nome}, ${this.email}, ${this.nascimento}`;
    }
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
  static exibirInfoGenerica(nome, email) {
    return `${nome}, ${email}`;
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
