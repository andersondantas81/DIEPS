// Função para atualizar os valores dos cards
function atualizarEstatisticas(dados) {
    // Atualizar valores dos cards
    document.getElementById('total_vagas').textContent = formatarNumero(dados.vagas || 1482);
    document.getElementById('total_cursos').textContent = formatarNumero(dados.cursos || 428);
    document.getElementById('total_inscritos').textContent = formatarNumero(dados.inscritos || 2245);
    document.getElementById('total_concludentes').textContent = formatarNumero(dados.concludentes || 1876);
}

// Função para formatar números com separador de milhar
function formatarNumero(numero) {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Exemplo de dados iniciais
const dadosIniciais = {
    vagas: 1482,
    cursos: 428,
    inscritos: 2245,
    concludentes: 1876
};

// Inicializar os valores dos cards quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    atualizarEstatisticas(dadosIniciais);
});

// Exportar funções para uso em outros arquivos
export { atualizarEstatisticas, formatarNumero }; 