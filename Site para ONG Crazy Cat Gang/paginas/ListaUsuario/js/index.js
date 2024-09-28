window.onload = function() {
    // Supondo que você tenha uma div com id 'display' para mostrar os dados
    var displayDiv = document.getElementById('display');

    // Recuperando todos os dados do localStorage
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.startsWith('dados')) {
            var dados = JSON.parse(localStorage.getItem(key));
            var div = document.createElement('div');
            div.className= 'box';
            div.innerHTML = `
                <p><strong>Nome:</strong> <span class="info" id="nome">${dados.nome}</span></p>
                <p><strong>Quantidade:</strong> <span class="info" id="quantidade">${dados.quantidade}</span></p>
                <p><strong>Descrição:</strong> <span class="info" id="descricao">${dados.descricao}</span></p>
                <div class="logo-caixa">
                    <img src="assets/gato.png" alt="Logo Small">
                </div>    
            `;
            displayDiv.appendChild(div);
        }
    }
};


