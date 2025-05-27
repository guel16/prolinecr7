function adicionarAoCarrinho() {
    alert("Produto adicionado ao carrinho!");
  }
  
  // Carrega produtos extras com PHP
  window.onload = function () {
    fetch("produtos.php")
      .then(res => res.text())
      .then(data => {
        document.getElementById("produtos-container").innerHTML = data;
      });
  };
  

  function mudarImagem(el) {
    const imagemPrincipal = document.getElementById("imagem-principal");
    imagemPrincipal.src = el.src;
  }

  function efeitobotao(el){
    
  }