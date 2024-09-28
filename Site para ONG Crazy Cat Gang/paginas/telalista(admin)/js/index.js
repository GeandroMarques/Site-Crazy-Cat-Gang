function Gerar_caixa() {
    var conteudo = document.createElement('div');
    conteudo.className = 'meio';
    var uniqueId = Date.now(); // Cria um ID único baseado no timestamp atual
    conteudo.id = 'minhaDiv' + uniqueId;
    conteudo.innerHTML = `
        <div class="info">
        <label>
            Nome:
            <br>
            <input type="text" id="nome${uniqueId}"/>
        </label>
        <br>
        <label>
            Quantidade:
            <br>
            <input type="number" id="quantidade${uniqueId}"/>
        </label>
        <br>
        <label>
            Endereço:
            <br>
            <input type="text" id="address${uniqueId}"/>
        </label>
        <br>
        <label>
            Descrição:
            <br>
            <textarea id="description${uniqueId}"></textarea>
        </label>
        </div>
        <div class="botao">
            <div class="button1" onclick="Salvar(${uniqueId})"> 
                Salvar
            </div>
        </div>
    `;
    document.getElementById("caixa").appendChild(conteudo);
}

function Salvar(uniqueId){
    var nomeEl = document.getElementById("nome" + uniqueId);
    var quantidadeEl = document.getElementById("quantidade" + uniqueId);
    var enderecoEl = document.getElementById("address" + uniqueId);
    var descricaoEl = document.getElementById("description" + uniqueId);

    if (nomeEl && quantidadeEl && enderecoEl && descricaoEl) {
        var nome = nomeEl.value;
        var quantidade = quantidadeEl.value;
        var endereco = enderecoEl.value;
        var descricao = descricaoEl.value;

        // Salvando os dados no localStorage
        localStorage.setItem('dados' + uniqueId, JSON.stringify({nome, quantidade, endereco, descricao}));

        console.log('Dados salvos:', {nome, quantidade, endereco, descricao});
    } else {
        console.log('Erro: Elemento não encontrado.');
    }

    var conteudo2 = document.createElement('div');
    conteudo2.className = 'meio';
    conteudo2.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Quantidade:</strong> ${quantidade}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Descrição:</strong> ${descricao}</p>
    `;
    document.getElementById("caixa").appendChild(conteudo2);
}

