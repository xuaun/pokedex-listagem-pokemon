const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        //body.classList.remove("modo-escuro"); //toggle

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/sun.png");
    } else {
        //body.classList.add("modo-escuro"); //toggle

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/moon.png");
    }
});

// JavaScript para a funcionalidade de busca
document.addEventListener('DOMContentLoaded', () => {
    const inputBusca = document.getElementById('busca');
    const selectTipo1 = document.getElementById('tipo1');
    const selectTipo2 = document.getElementById('tipo2');
    const cartoesPokemon = document.querySelectorAll('li.cartao-pokemon');

    function filtrarCartoes() {
        const termoBusca = inputBusca.value.toLowerCase();
        const tipo1 = selectTipo1.value;
        const tipo2 = selectTipo2.value;

        cartoesPokemon.forEach(cartao => {
            // Pegue os spans de nome e número dentro do cartão
            const informacoes = cartao.querySelectorAll('.informacoes span');
            const tipos = Array.from(cartao.querySelectorAll('.tipos .tipo')).map(tipo => tipo.classList[1]);
            
            // Verifique se algum texto dos spans inclui o termo buscado
            const combinaNomeOuNumero = Array.from(informacoes).some(info => 
                info.textContent.toLowerCase().includes(termoBusca)
            );

            // Verifique se os tipos correspondem às seleções
            const combinaTipos = (
                (tipo1 === "" || tipos.includes(tipo1)) &&
                (tipo2 === "" || tipos.includes(tipo2))
            );

            // Mostre ou esconda o cartão com base nas condições
            if (combinaNomeOuNumero && combinaTipos) {
                cartao.style.display = '';
            } else {
                cartao.style.display = 'none';
            }
        });
    }

    inputBusca.addEventListener('input', filtrarCartoes);
    selectTipo1.addEventListener('change', filtrarCartoes);
    selectTipo2.addEventListener('change', filtrarCartoes);
});

var select1 = document.getElementById('tipo1');
select1.onchange = function () {
    select1.className = this.options[this.selectedIndex].className;
}

var select2 = document.getElementById('tipo2');
select2.onchange = function () {
    select2.className = this.options[this.selectedIndex].className;
}