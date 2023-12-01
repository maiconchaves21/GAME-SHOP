function validarCompra() {
  const form = document.getElementById("checkoutForm");
  const formData = new FormData(form);

  fetch("http://jkorpela.fi/cgi-bin/echo.cgi", {
    method: "POST",
    body: formData,
  })
    .then(response => response.text())
    .then(data => {
      console.log(data); 
    })
    .catch(error => {
      console.error("Erro ao enviar o formulário:", error);
    });
}

let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const listaCarrinho = document.getElementById("lista-carrinho");
  const totalCarrinho = document.getElementById("total-carrinho");

  listaCarrinho.innerHTML = "";
  let total = 0;

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    listaCarrinho.appendChild(li);
    total += item.preco;
  });

  totalCarrinho.textContent = total.toFixed(2);
}

function finalizarCompra() {
    alert("Compra finalizada! Obrigado por comprar na GAME SHOP.");
    carrinho = [];
    atualizarCarrinho();
  }

  function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
    atualizarTotal(); 
  }

  
