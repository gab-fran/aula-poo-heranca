import Pessoa from "./Pessoa.js";
import Aluno from "./Aluno.js";
import Professor from "./Professor.js";

console.clear();

let pessoa = new Pessoa("José Matheus", 123456789, "zY1tj@example.com");
let aluno = new Aluno("Gabriel", 123456789, "zY1tj@example.com", 12345);
let professor = new Professor("Renato", 123456789, "zY1tj@example.com", 12345);

// Pessoa
console.log("\n Pessoa:");

console.log(`Nome: ${pessoa.getNome()}`);
console.log(`CPF: ${pessoa.getCpf()}`);
console.log(`Email: ${pessoa.getEmail()}`);

pessoa.apresentar();

// Aluno
console.log("\n Aluno:");

console.log(`Nome: ${aluno.getNome()}`);
console.log(`CPF: ${aluno.getCpf()}`);
console.log(`Email: ${aluno.getEmail()}`);

aluno.apresentar();
aluno.estudar();

// Professor
console.log("\n Professor:");

console.log(`Nome: ${professor.getNome()}`);
console.log(`CPF: ${professor.getCpf()}`);
console.log(`Email: ${professor.getEmail()}`);

professor.apresentar();
professor.darAula();