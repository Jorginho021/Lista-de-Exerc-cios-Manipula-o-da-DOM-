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
