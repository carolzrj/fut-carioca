function pesquisar() {
    
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado! Você precisa digitar o nome de um time do futebol carioca.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase() /* confirmar se precisa pra todos abaixo*/

    let resultados = "";
    let nome = "";
    let historia = "";
    let tags = "";

    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        historia = dado.historia.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (nome.includes(campoPesquisa) || historia.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <h3>
                    <a href="${dado.site}" target="_blank">${dado.nome}</a>
                    <img src="${dado.imagem}" alt="${dado.nome}">
                </h3>
                <p class="descricao-meta">${dado.historia}</p>
                <h4>
                    <a href=${dado.linktitulos} target="_blank">GRANDES TÍTULOS</a>
                </h4>
                <p class="titulos">${dado.titulos}</p>
                <h5>
                    <a href=${dado.linkidolos} target="_blank">ÍDOLOS MEMORÁVEIS</a>
                </h5>
                <p class="idolos">${dado.idolos}</p>
                <h6>
                    <a href=${dado.proxJogos} target="_blank">PRÓXIMOS JOGOS</a>
                </h6>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados;
}