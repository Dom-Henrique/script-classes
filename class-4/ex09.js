const senha = "ifpb2026"
let tentativas = 0;
let senhaUsuario;
do{
    senhaUsuario = prompt("Senha:");
    tentativas+=1
} while (senhaUsuario!==senha);
alert(`Bem-vindo(a)! Você acertou em ${tentativas} tentativas`)

// o do...while executa o código antes de fazer a verificação. neste caso, querendo ou não o usuario teria que tentar ao menos uma vez