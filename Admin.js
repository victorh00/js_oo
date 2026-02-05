import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nascimento, funcao = "admin", ativo = true) {
    super(nome, email, nascimento, funcao, ativo);
  }
  criarCurso(nomeCurso, qtdVagas) {
    return `curso ${nomeCurso} criado com ${qtdVagas} vagas`;
  }
  excluirCurso() {}
  desativarPerfil() {}
  // override, sobrescrita do método exibirInfo()
  exibirInfo() {
    const info = super.exibirInfo();
    return `${info} (admin)`;
  }
}

// const novoAdmin = new Admin("rodrigo", "r@r.com", "2025-01-01");
// novoAdmin.exibirInfo(); // método herdado
// console.log(novoAdmin.ativo, novoAdmin.funcao); // atributos herdados
// console.log(novoAdmin.criarCurso("JS", 100));
