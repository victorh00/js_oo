import User from "./User.js";

class Admin extends User {
  constructor(nome, email, nascimento, funcao = "admin", ativo = true) {
    super(nome, email, nascimento, funcao, ativo);
  }
}
