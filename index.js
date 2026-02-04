import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

console.log("criando um User.");
const user1 = new User("maria", "m@m.com", "2020-01-01");
console.log("tentando acesso direto a atributos privados");
//console.log(user1.nome, user1.email, user1.#nome, user1.#email); //gera erro
console.log("testando atributos privados: ");
user1.exibirInfo();
console.log("testando método privado: ");
user1.exibirInfo2();
