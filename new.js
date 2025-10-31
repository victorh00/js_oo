// função construtora: pode ser convertida em uma declaração de classe
// forma antiga de usar classes, mas ainda plenamente funcional.
function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfo = function () {
    return `${this.nome}, ${this.email}`;
  };
}

const novoUser = new User("maria", "m@m");
console.log(novoUser.exibirInfo());
