import User from "./User.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, funcao = "docente", ativo = true) {
    super(nome, email, nascimento, funcao, ativo);
  }
  aprovarEstudante(estudante, curso) {
    return `estudante ${estudante} aprovado no curso ${curso} do responsável ${this.nome}`;
  }
  reprovarEstudante() {}
}

const novaDocente = new Docente("Ana", "a@a.com", "2025-02-02");
console.log(novaDocente.aprovarEstudante("Maria", "JS"));
