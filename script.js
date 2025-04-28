1:
let contador = 0;
const botaoContador = document.getElementById("botao-contador");
const h3Contador = document.getElementById("contador");

botaoContador.addEventListener("click", function () {
  contador++;
  h3Contador.textContent = `Contador: ${contador}`;
});

const quadrado = document.getElementById("quadrado");

quadrado.addEventListener("mouseover", function () {
  quadrado.style.backgroundColor = "red";
});

quadrado.addEventListener("mouseout", function () {
  quadrado.style.backgroundColor = "lightgray";
});

const formulario = document.getElementById("formulario-avancado");
const campoEmail = document.getElementById("email-avancado");
const mensagemErro = document.getElementById("mensagem-erro");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (campoEmail.value.trim() === "") {
    mensagemErro.textContent = "O campo de email é obrigatório!";

    

2:document.getElementById("botaoClique").addEventListener("click", function() {
  this.textContent = "Clicado!";
});


function mudarConteudo() {
  document.getElementById("caixa").innerHTML = "<strong>Conteúdo em negrito</strong>";
}


function estilizarParagrafo() {
  const p = document.getElementById("paragrafo");
  p.style.color = "green";          
  p.style.fontSize = "20px";        
  p.style.backgroundColor = "yellow"; 
}

  } else {
    mensagemErro.textContent = ""; 
    alert("Formulário enviado com sucesso!");
  }
});


3:document.getElementById("adicionarEstilo").addEventListener("click", function() {
  document.getElementById("paragrafo").classList.add("estilizado");
});


document.getElementById("removerEstilo").addEventListener("click", function() {
  document.getElementById("paragrafo").classList.remove("estilizado");
});

 
document.getElementById("formSaudacao").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o recarregamento da página ao enviar o formulário
  const nome = document.getElementById("nome").value;
  document.getElementById("saudacao").textContent = `Olá, ${nome}!`;
});


4:let contador = 0;
document.getElementById("botaoContar").addEventListener("click", function() {
  contador++;
  document.getElementById("contador").textContent = `Contador: ${contador}`;
});


const quadrado = document.getElementById("quadrado");
quadrado.addEventListener("mouseover", function() {
  quadrado.style.backgroundColor = "red";  // Mudando para vermelho
});
quadrado.addEventListener("mouseout", function() {
  quadrado.style.backgroundColor = "lightblue";  // Voltando para a cor original
});


document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário para validação

  const email = document.getElementById("email").value;

  // Verificar se o campo de email está vazio
  if (email.trim() === "") {
    document.getElementById("erro").style.display = "block"; // Exibe a mensagem de erro
  } else {
    document.getElementById("erro").style.display = "none"; // Esconde a mensagem de erro
    alert("Formulário enviado com sucesso!"); // Simula o envio do formulário
  }
});
