
document.getElementById("botaoClique").addEventListener("click", function () {
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
  
