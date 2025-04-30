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



2:document.getElementById("botaoClique").addEventListener("click", function () {
    this.textContent = "Clicado!";
  });
  
 
  document.getElementById("botaoMudarConteudo").addEventListener("click", function () {
    document.getElementById("caixa").innerHTML = "<strong>Conteúdo em negrito</strong>";
  });
  
  document.getElementById("botaoEstiloParagrafo").addEventListener("click", function () {
    const p = document.getElementById("paragrafo");
    p.style.color = "green";
    p.style.fontSize = "20px";
    p.style.backgroundColor = "yellow";
  });

3:
document.getElementById("adicionarEstilo").addEventListener("click", function () {
    document.getElementById("paragrafo").classList.add("estiloAdicionado");
  });
  

  document.getElementById("removerEstilo").addEventListener("click", function () {
    document.getElementById("paragrafo").classList.remove("estiloAdicionado");
  });
  
  document.getElementById("formSaudacao").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
   
    const nome = document.getElementById("nome").value;
  
   
    document.getElementById("saudacao").textContent = "Olá, " + nome + "!";
  
    
    document.getElementById("nome").value = "";
  });
  
4:
let contador = 0;
document.getElementById("botaoClique").addEventListener("click", function () {
  contador++;
  document.getElementById("contador").textContent = "Contador: " + contador;
});


const quadrado = document.getElementById("quadrado");

quadrado.addEventListener("mouseover", function () {
  quadrado.style.backgroundColor = "red"; 
});

quadrado.addEventListener("mouseout", function () {
  quadrado.style.backgroundColor = "#4CAF50";
});

document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const email = document.getElementById("email").value;

  
  if (email === "") {
    document.getElementById("erroEmail").textContent = "O campo de email é obrigatório!";
  } else {
    document.getElementById("erroEmail").textContent = ""; 
    alert("Formulário enviado com sucesso!");
  }
});
