// Função para inicializar os filtros
function initializeFilters() {
    // Dados de exemplo para os filtros
    const filterData = {
        ano: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        unidades: ['Unidade 1', 'Unidade 2', 'Unidade 3'],
        outros_poderes: ['Poder 1', 'Poder 2', 'Poder 3'],
        situacao_interna: ['Em andamento', 'Finalizado', 'Pendente'],
        tipo_manifestacao: ['Denúncia', 'Solicitação', 'Reclamação', 'Elogio', 'Sugestão'],
        assunto: ['Assunto 1', 'Assunto 2', 'Assunto 3']
    };

    // Preencher os selects com as opções
    Object.keys(filterData).forEach(filterKey => {
        const select = document.querySelector(`select[data-filter="${filterKey}"]`);
        if (select) {
            filterData[filterKey].forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
        }
    });

    // Adicionar eventos de change aos selects
    document.querySelectorAll('.filter-select').forEach(select => {
        select.addEventListener('change', handleFilterChange);
    });
}

// Função para lidar com a mudança nos filtros
function handleFilterChange(event) {
    const filterType = event.target.dataset.filter;
    const selectedValue = event.target.value;

    // Aqui você pode implementar a lógica para atualizar os dados com base nos filtros
    console.log(`Filtro ${filterType} alterado para: ${selectedValue}`);
    
    // Atualizar os gráficos (exemplo)
    updateCharts();
}

// Função para atualizar os gráficos
function updateCharts() {
    // Aqui você pode implementar a lógica para atualizar os gráficos com base nos filtros
    // Por exemplo:
    if (window.barChart) {
        window.barChart.update();
    }
    if (window.pieChart1) {
        window.pieChart1.update();
    }
    if (window.pieChart2) {
        window.pieChart2.update();
    }
}

// Inicializar os filtros quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', initializeFilters); 