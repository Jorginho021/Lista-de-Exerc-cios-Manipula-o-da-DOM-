
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
  