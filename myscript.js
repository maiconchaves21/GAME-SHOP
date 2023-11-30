function validarompra() {

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var telefone = document.getElementById('telefone').value;
    var cep = document.getElementById('cep').value;


    if (nome && email && cpf && telefone && cep) {

        enviarEmail(nome, email, cpf, telefone, cep);


        registrarVenda();


        alert('Compra concluída com sucesso!');

        document.getElementById('checkoutForm').reset();
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
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

  function validarCompra() {
    // Lógica de validação (se necessário)
    
    // Obtenha os dados do formulário
    const form = document.getElementById("checkoutForm");
    const formData = new FormData(form);
  
    // Use a função fetch para enviar os dados para o servidor
    fetch("http://jkorpela.fi/cgi-bin/echo.cgi", {
      method: "POST",
      body: formData,
    })
      .then(response => response.text())
      .then(data => {
        console.log(data); // Exibe a resposta do servidor no console (pode ser removido em produção)
      })
      .catch(error => {
        console.error("Erro ao enviar o formulário:", error);
      });
  }
