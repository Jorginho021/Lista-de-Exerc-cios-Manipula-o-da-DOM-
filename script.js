
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
  } else {
    mensagemErro.textContent = ""; 
    alert("Formulário enviado com sucesso!");
  }
});
