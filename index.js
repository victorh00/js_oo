import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

console.log("criando um User.");
const user1 = new User("maria", "m@m.com", "2020-01-01");
console.log("tentando acesso direto a atributos privados");
//console.log(user1.nome, user1.email, user1.#nome, user1.#email); //gera erro
console.log("testando atributos privados: ");
console.log(user1.exibirInfo());
console.log("testando método privado: ");
console.log(user1.exibirInfo2());
console.log("testando override no admin: ");
const user30 = new User("roberto", "r@funci.com", "2000-01-01");
console.log(user30.exibirInfo());
const user31 = new Admin("roberto", "r@admin.com", "2000-09-09");
console.log(user31.exibirInfo());
console.log("exemplo método estático: ");
console.log(User.exibirInfoGenerica("claude", "c@c.com"));
const user32 = new User("Juliana", "j@j.com", "2024-01-01");
console.log(user32.exibirInfo4("basico"));
console.log(user32.exibirInfo4("completo"));
