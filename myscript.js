function validar() {

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

function enviarEmail(nome, email, cpf, telefone, cep) {
    console.log('Enviando e-mail para:', email);
}

