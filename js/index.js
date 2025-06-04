// Registrar os plugins do Chart.js antes de qualquer uso
if (typeof Chart !== 'undefined') {
  Chart.register(ChartDataLabels);
}

// Configurar o datalabels como plugin padrão
Chart.defaults.set('plugins.datalabels', {
    color: '#333',
    font: {
        size: 14,
        weight: 'bold'
    },
    formatter: function(value) {
        return value.toLocaleString('pt-BR');
    },
    textStrokeColor: 'white',
    textStrokeWidth: 3,
    textShadow: '0 0 3px white'
});

// Dados de exemplo para demonstração
const projetosECursos = {
  "Projeto A": {
    cursos: ["Curso 1", "Curso 2", "Curso 3"],
    filtros: {
      ano: ["2023", "2024"],
      esfera: ["Municipal", "Estadual"],
      profissao: ["Médico", "Enfermeiro"],
      municipio: ["Fortaleza", "Maracanaú"]
    }
  },
  "Projeto B": {
    cursos: ["Curso 4", "Curso 5"],
    filtros: {
      ano: ["2024"],
      esfera: ["Estadual"],
      profissao: ["Técnico de Enfermagem"],
      municipio: ["Fortaleza", "Caucaia"]
    }
  }
};

// Dados de exemplo para os gráficos
const dadosGraficos = {
  sexo: {
    labels: ['Masculino', 'Feminino'],
    data: [40, 60],
    cores: ['#4CAF50', '#2E7D32']
  },
  raca: {
    labels: ['Branca', 'Preta', 'Parda', 'Amarela', 'Indígena'],
    data: [30, 15, 45, 5, 5],
    cores: ['#81C784', '#4CAF50', '#2E7D32', '#1B5E20', '#388E3C']
  },
  idade: {
    labels: ['18-25', '26-35', '36-45', '46-55', '56+'],
    data: [20, 35, 25, 15, 5],
    cores: ['#81C784', '#4CAF50', '#2E7D32', '#1B5E20', '#388E3C']
  },
  esfera: {
    labels: ['Federal', 'Regional', 'Estadual', 'Municipal', 'Não se aplica'],
    data: [25, 15, 30, 20, 10],
    cores: ['#81C784', '#4CAF50', '#2E7D32', '#1B5E20', '#388E3C']
  }
};

// Dados de exemplo para os gráficos de barra
const dadosGraficosBarra = {
  projetos: {
    labels: ['P. Saúde da Família', 'P. Mais Médicos', 'P. Saúde Mental', 'P. Vacina+', 'P. Gestão em Saúde', 
             'P. Qualificação PSF', 'P. Urg. e Emerg.', 'P. Saúde Bucal', 'P. Vig. em Saúde', 'P. Atenção Básica'],
    data: [180, 165, 150, 140, 130, 120, 110, 100, 90, 80],
    cor: ['#1B5E20', '#2E7D32', '#388E3C', '#43A047', '#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9', '#E8F5E9']
  },
  cursos: {
    labels: ['Gest. Saúde Pública', 'S. da Família', 'Urg. e Emerg.', 'S. Mental', 'Vig. Sanitária',
             'At. Primária', 'Gest. Hospitalar', 'S. do Idoso', 'S. da Mulher', 'S. da Criança'],
    data: [200, 180, 160, 150, 140, 130, 120, 110, 100, 90],
    cor: ['#1B5E20', '#2E7D32', '#388E3C', '#43A047', '#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9', '#E8F5E9']
  }
};

// Dados temporais para gráfico temporal de concluintes por sexo, cor e idade
const dadosTemporais = {
  sexo: {
    labels: ['Masculino', 'Feminino'],
    anos: {
      2015: [180, 200],
      2016: [190, 210],
      2017: [200, 220],
      2018: [210, 230],
      2019: [215, 240],
      2020: [220, 250],
      2021: [230, 260],
      2022: [240, 270],
      2023: [260, 246]
    },
    // Tons de azul (9 cores para 9 anos)
    cores: ['#0D47A1', '#1565C0', '#1976D2', '#1E88E5', '#2196F3', '#42A5F5', '#64B5F6', '#90CAF9', '#BBDEFB']
  },
  cor: {
    labels: ['Branca', 'Preta', 'Parda', 'Amarela', 'Indígena'],
    anos: {
      2015: [80, 60, 150, 40, 30],
      2016: [85, 65, 160, 45, 35],
      2017: [90, 70, 165, 50, 40],
      2018: [95, 75, 170, 55, 45],
      2019: [98, 78, 175, 58, 48],
      2020: [100, 80, 180, 60, 50],
      2021: [110, 90, 190, 65, 35],
      2022: [120, 100, 200, 70, 20],
      2023: [130, 110, 210, 75, 10]
    },
    // Tons de verde (9 cores para 9 anos)
    cores: ['#1B5E20', '#2E7D32', '#388E3C', '#43A047', '#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9']
  },
  idade: {
    labels: ['18-25', '26-35', '36-45', '46-55', '56+'],
    anos: {
      2015: [40, 100, 120, 80, 40],
      2016: [45, 105, 125, 85, 40],
      2017: [50, 110, 130, 90, 45],
      2018: [55, 115, 135, 95, 45],
      2019: [58, 118, 138, 98, 48],
      2020: [60, 120, 140, 100, 50],
      2021: [65, 130, 150, 110, 35],
      2022: [70, 140, 160, 120, 20],
      2023: [75, 150, 170, 130, 10]
    },
    // Tons de laranja/vermelho (9 cores para 9 anos)
    cores: ['#BF360C', '#D84315', '#E64A19', '#F57C00', '#FF9800', '#FFB300', '#FF7043', '#FFAB40', '#FF8A65']
  }
};

// Vetores de tags para dropdowns
const tagsAno = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"];
const tagsProjetos = ["Todos", ...Object.keys(projetosECursos)];
const tagsCursos = ["Todos", ...Array.from(new Set(Object.values(projetosECursos).flatMap(p => p.cursos)))];
const tagsProfissao = ["Todos", "Médico", "Enfermeiro", "Dentista", "Fisioterapeuta", "Psicólogo"];
const tagsMunicipio = ["Todos", "Fortaleza", "Caucaia", "Maracanaú", "Sobral"];

// Configurações base para gráficos de pizza
const configPizza = {
    type: 'doughnut',
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    font: {
                        size: 12
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(1);
                        return `${label}: ${value} (${percentage}%)`;
                    }
                }
            }
        },
        cutout: '60%'
    }
};

// Configurações base para gráficos de barra
const configBarra = {
    type: 'bar'
};

// Função específica para inicializar o dropdown de Ano
function initializeAnoDropdown(tags) {
    let selectedYear = '2024'; // Set default year to 2024
    let showList = false;

    const dropdownButton = document.getElementById('dropdownButtonAno');
    const dropdownMenu = document.getElementById('dropdownMenuAno');
    const buttonText = document.getElementById('buttonTextAno');
    const tagList = document.getElementById('tagListAno');

    if (!dropdownButton || !dropdownMenu || !buttonText || !tagList) {
        console.error('Elementos não encontrados para o dropdown de Ano');
        return;
    }

    // Exibir/esconder a lista
    dropdownButton.addEventListener('click', () => {
        showList = !showList;
        dropdownMenu.classList.toggle('hidden', !showList);
        const icon = dropdownButton.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-chevron-down', !showList);
            icon.classList.toggle('fa-chevron-up', showList);
        }
    });

    // Função para atualizar a lista de anos
    function renderYears() {
        tagList.innerHTML = '';
        
        // Adiciona a opção "SELECIONE UMA OPÇÃO" (não clicável)
        const selectOption = document.createElement('div');
        selectOption.classList.add('px-3', 'py-2', 'text-slate-900', 'text-opacity-50');
        selectOption.textContent = 'SELECIONE UMA OPÇÃO';
        selectOption.style.cursor = 'default';
        selectOption.style.pointerEvents = 'none'; // Make it non-clickable
        tagList.appendChild(selectOption);

        // Adiciona os anos
        tags.forEach(year => {
            const yearItem = document.createElement('div');
            yearItem.classList.add('px-3', 'py-2', 'cursor-pointer', 'hover:bg-green-500', 'hover:text-white', 'text-slate-900');
            yearItem.textContent = year;
            yearItem.addEventListener('click', () => selectYear(year));
            if (selectedYear === year) {
                yearItem.classList.add('bg-green-500', 'text-white');
            }
            tagList.appendChild(yearItem);
        });
    }

    // Função para selecionar um ano
    function selectYear(year) {
        selectedYear = year;
        buttonText.textContent = year;
        closeDropdown();
        renderYears();

        // Atualizar o gráfico temporal com o ano selecionado
        if (window.renderizarGraficoTemporal) {
            renderizarGraficoTemporal(year);
        }
    }

    // Fechar o dropdown ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
            closeDropdown();
        }
    });

    // Função para fechar o dropdown
    function closeDropdown() {
        showList = false;
        dropdownMenu.classList.add('hidden');
        const icon = dropdownButton.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    }

    // Renderizar os anos iniciais e selecionar 2024 por padrão
    renderYears();
    selectYear('2024'); // Set default year to 2024

    return {
        getValue: () => selectedYear,
        setValue: (value) => selectYear(value)
    };
}

// Função de inicialização de dropdown para os outros filtros
function initializeDropdown(dropdownId, tags) {
    let selectedTags = [];
    let showList = false;

    const dropdownButton = document.getElementById(`dropdownButton${dropdownId}`);
    const dropdownMenu = document.getElementById(`dropdownMenu${dropdownId}`);
    const buttonText = document.getElementById(`buttonText${dropdownId}`);
    const selectAllCheckbox = document.getElementById(`selectAll${dropdownId}`);
    const searchInput = document.getElementById(`searchInput${dropdownId}`);
    const tagList = document.getElementById(`tagList${dropdownId}`);

    if (!dropdownButton || !dropdownMenu || !buttonText || !selectAllCheckbox || !searchInput || !tagList) {
        console.error(`Elementos não encontrados para o dropdown ${dropdownId}`);
        return;
    }

    // Exibir/esconder a lista
    dropdownButton.addEventListener('click', () => {
        showList = !showList;
        dropdownMenu.classList.toggle('hidden', !showList);
        const icon = dropdownButton.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-chevron-down', !showList);
            icon.classList.toggle('fa-chevron-up', showList);
        }
    });

    // Atualizar a lista de tags
    function renderTags() {
        const searchTerm = searchInput.value.toLowerCase();
        tagList.innerHTML = ''; // Limpa a lista
        tags
            .filter(tag => tag.toLowerCase().includes(searchTerm))
            .forEach(tag => {
                const tagItem = document.createElement('div');
                tagItem.classList.add('flex', 'items-center', 'gap-3', 'px-3', 'py-2', 'cursor-pointer', 'hover:bg-green-500', 'hover:text-white', 'text-slate-900');
                tagItem.innerHTML = `
                    <input type="checkbox" id="${tag}-${dropdownId}" ${selectedTags.includes(tag) ? 'checked' : ''} class="w-5 h-5 text-green-600 focus:ring-green-400">
                    <label for="${tag}-${dropdownId}" class="pointer-events-none">${tag}</label>
                `;
                tagItem.addEventListener('click', () => {
                    toggleTag(tag);
                });
                tagList.appendChild(tagItem);
            });
        selectAllCheckbox.checked = tags.every(tag => selectedTags.includes(tag));
        updateButtonText();
    }

    // Alternar a seleção de uma tag
    function toggleTag(tag) {
        if (selectedTags.includes(tag)) {
            selectedTags = selectedTags.filter(t => t !== tag);
        } else {
            selectedTags.push(tag);
        }
        renderTags();
        
        // Se for o dropdown de Projetos, atualizar o dropdown de Cursos
        if (dropdownId === 'Projetos') {
            updateCursosFilter();
        }
    }

    // Selecionar todas as tags visíveis
    selectAllCheckbox.addEventListener('change', () => {
        const visibleTags = tags.filter(tag => tag.toLowerCase().includes(searchInput.value.toLowerCase()));
        if (selectAllCheckbox.checked) {
            visibleTags.forEach(tag => {
                if (!selectedTags.includes(tag)) selectedTags.push(tag);
            });
        } else {
            selectedTags = selectedTags.filter(tag => !visibleTags.includes(tag));
        }
        renderTags();
    });

    // Atualizar a lista ao digitar no campo de busca
    searchInput.addEventListener('input', renderTags);

    // Fechar o dropdown ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
            closeDropdown();
        }
    });

    // Atualizar texto do botão de dropdown
    function updateButtonText() {
        if (selectedTags.length > 0) {
            buttonText.innerHTML = selectedTags.slice(0, 2).join(', ') + (selectedTags.length > 2 ? ` +${selectedTags.length - 2}` : '');
        } else {
            buttonText.textContent = 'Todos';
        }
    }

    // Função para fechar o dropdown
    function closeDropdown() {
        showList = false;
        dropdownMenu.classList.add('hidden');
        const icon = dropdownButton.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    }

    // Renderizar as tags iniciais
    renderTags();
}

// Função para atualizar o filtro de Cursos baseado nos Projetos selecionados
function updateFilteredOptions(selectedProject) {
    const tagListCursos = document.getElementById('tagListCursos');
    
    if (!tagListCursos) return;
    
    if (!selectedProject) {
        // Se nenhum projeto selecionado, mostrar todos os cursos
        initializeDropdown("Cursos", tagsCursos);
    } else {
        // Mostrar apenas cursos do projeto selecionado
        const cursosDisponiveis = projetosECursos[selectedProject]?.cursos || [];
        initializeDropdown("Cursos", cursosDisponiveis);
    }
}

// Função para criar gráfico de pizza
function criarGraficoPizza(canvasId, dados) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    const ctx = canvas.getContext('2d');
    const config = {
        ...configPizza,
        data: {
            labels: dados.labels,
            datasets: [{
                data: dados.data,
                backgroundColor: dados.cores,
                borderWidth: 0
            }]
        }
    };
    return new Chart(ctx, config);
}

// Função para criar gráfico de barra
function criarGraficoBarra(canvasId, dados) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    const ctx = canvas.getContext('2d');
    const tipoGrafico = canvasId.includes('projetos') ? 'Top 10 Projetos' : 'Top 10 Cursos';
    
    const config = {
        type: 'bar',
        data: {
            labels: dados.labels,
            datasets: [{
                label: 'Vagas Ofertadas',
                data: dados.data,
                backgroundColor: dados.cor,
                borderRadius: 4,
                barThickness: 30, // Aumentar espessura da barra
                maxBarThickness: 35, // Aumentar espessura máxima
                barPercentage: 0.6, // Aumentar um pouco o tamanho relativo da barra
                categoryPercentage: 0.85 // Aumentar o espaço usado por categoria
            }]
        },            
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    right: 20,
                    top: 10, // Reduzir o padding superior
                    bottom: 10 // Reduzir o padding inferior
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    align: 'center',
                    labels: {
                        boxWidth: 12,
                        padding: 8, // Reduzir o padding da legenda
                        font: {
                            size: 12
                        }
                    }
                },
                title: {
                    display: true,
                    text: tipoGrafico,
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {
                        top: 0,
                        bottom: 5 // Reduzir o espaço entre o título e a legenda
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function(context) {
                            return `Vagas: ${context.raw}`;
                        }
                    }
                },
                datalabels: {
                    anchor: 'center', // Centralizar na barra
                    align: 'center', // Alinhar no centro
                    offset: 0, // Sem offset pois estará centralizado
                    color: '#333',
                    font: {
                        size: 14,
                        weight: 'bold'
                    },
                    formatter: function(value) {
                        return value.toLocaleString('pt-BR');
                    },
                    clamp: true,
                    clip: false,
                    display: true,
                    textStrokeColor: 'white', // Adiciona contorno branco ao texto
                    textStrokeWidth: 3, // Espessura do contorno
                    textShadow: '0 0 3px white' // Sombra suave branca
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        display: true,
                        color: '#E5E7EB'
                    },
                    ticks: {
                        font: {
                            size: 11
                        }
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 11
                        },
                        padding: 5
                    }
                }
            }
        }
    };
    
    return new Chart(ctx, config);
}

// Função para inicializar as abas dos gráficos de pizza
function inicializarAbas() {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
    let graficos = {};
    let abaAtiva = null;

    function ajustarTamanhoCanvas(canvas) {
        const container = canvas.parentElement;
        canvas.style.width = '100%';
        canvas.style.height = '300px';
        canvas.width = container.offsetWidth;
        canvas.height = 300;
    }

    function atualizarGrafico(tabName, forceUpdate = false) {
        const canvas = document.getElementById(`grafico-pizza-${tabName}`);
        if (!canvas) return;

        if (!graficos[tabName] || forceUpdate) {
            if (graficos[tabName]) {
                graficos[tabName].destroy();
            }
            ajustarTamanhoCanvas(canvas);
            graficos[tabName] = criarGraficoPizza(canvas.id, dadosGraficos[tabName]);
        }
    }

    function trocarAba(tabAtiva) {
        // Se a aba clicada já está ativa, não faz nada
        if (abaAtiva === tabAtiva) return;

        // Atualiza a referência da aba ativa
        abaAtiva = tabAtiva;

        // Remover classe ativa de todas as abas
        tabs.forEach(t => {
            t.classList.remove('text-white', 'bg-green-500', 'border-b-2', 'border-green-500');
            t.classList.add('text-gray-600', 'hover:bg-gray-50');
            // Remover o estilo inline do border-bottom
            t.style.removeProperty('border-bottom');
        });

        // Adicionar classe ativa na aba clicada
        tabAtiva.classList.remove('text-gray-600', 'hover:bg-gray-50');
        tabAtiva.classList.add('text-white', 'bg-green-500', 'border-b-2', 'border-green-500');

        // Esconder todos os conteúdos
        contents.forEach(content => {
            content.classList.add('hidden');
        });

        // Mostrar o conteúdo correspondente
        const contentId = `grafico-${tabAtiva.getAttribute('data-tab')}`;
        document.getElementById(contentId).classList.remove('hidden');

        // Atualizar o gráfico da aba ativa
        atualizarGrafico(tabAtiva.getAttribute('data-tab'));
    }

    // Adicionar evento de clique em cada aba
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            trocarAba(tab);
        });
    });

    // Ativar a primeira aba ao inicializar
    if (tabs.length > 0) {
        trocarAba(tabs[0]);
    }

    // Ajustar tamanho dos gráficos quando a janela for redimensionada
    window.addEventListener('resize', () => {
        if (abaAtiva) {
            atualizarGrafico(abaAtiva.getAttribute('data-tab'), true);
        }
    });
}

// Função para inicializar as abas dos gráficos de distribuição
function inicializarAbasDistribuicao() {
    const tabs = document.querySelectorAll('.tab-button-dist');
    const contents = document.querySelectorAll('.tab-content-dist');
    let graficos = {};
    let abaAtiva = null;

    function ajustarTamanhoCanvas(canvas) {
        const container = canvas.parentElement;
        const containerWidth = container.offsetWidth;
        const labelCount = canvas.id.includes('projetos') ? 
            dadosGraficosBarra.projetos.labels.length : 
            dadosGraficosBarra.cursos.labels.length;
        const containerHeight = Math.max(500, labelCount * 45); // Aumentar altura mínima e espaço por label
        
        canvas.style.width = '100%';
        canvas.style.height = containerHeight + 'px';
        canvas.width = containerWidth;
        canvas.height = containerHeight;
    }

    function atualizarGrafico(tabName, forceUpdate = false) {
        const canvas = document.getElementById(`grafico-barra-${tabName}`);
        if (!canvas) {
            console.error(`Canvas não encontrado: grafico-barra-${tabName}`);
            return;
        }

        if (!graficos[tabName] || forceUpdate) {
            if (graficos[tabName]) {
                graficos[tabName].destroy();
            }

            const dados = dadosGraficosBarra[tabName];
            if (!dados) {
                console.error(`Dados não encontrados para: ${tabName}`);
                return;
            }

            ajustarTamanhoCanvas(canvas);
            graficos[tabName] = criarGraficoBarra(canvas.id, dados);
        }
    }

    function trocarAba(tabAtiva) {
        // Se a aba clicada já está ativa, não faz nada
        if (abaAtiva === tabAtiva) return;

        // Atualiza a referência da aba ativa
        abaAtiva = tabAtiva;

        // Remover classe ativa de todas as abas
        tabs.forEach(t => {
            t.classList.remove('text-white', 'bg-green-500', 'border-b-2', 'border-green-500');
            t.classList.add('text-gray-600', 'hover:bg-gray-50');
            // Garantir que a borda inferior seja removida
            t.style.borderBottom = 'none';
        });

        // Adicionar classe ativa na aba clicada
        tabAtiva.classList.remove('text-gray-600', 'hover:bg-gray-50');
        tabAtiva.classList.add('text-white', 'bg-green-500', 'border-b-2', 'border-green-500');
        // Garantir que a borda inferior seja visível
        tabAtiva.style.borderBottom = '2px solid #22C55E';

        // Esconder todos os conteúdos
        contents.forEach(content => {
            content.classList.add('hidden');
        });

        // Mostrar o conteúdo correspondente
        const contentId = `grafico-${tabAtiva.getAttribute('data-tab')}`;
        document.getElementById(contentId).classList.remove('hidden');

        // Atualizar o gráfico da aba ativa
        atualizarGrafico(tabAtiva.getAttribute('data-tab'));
    }

    // Adicionar evento de clique em cada aba
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            trocarAba(tab);
        });
    });

    // Ativar a primeira aba ao inicializar
    if (tabs.length > 0) {
        trocarAba(tabs[0]);
    }

    // Ajustar tamanho dos gráficos quando a janela for redimensionada
    window.addEventListener('resize', () => {
        if (abaAtiva) {
            atualizarGrafico(abaAtiva.getAttribute('data-tab'), true);
        }
    });
}

// Função para renderizar o gráfico temporal
let graficoTemporal = null;
function renderizarGraficoTemporal(anoSelecionado = 'Todos') {
    const ctx = document.getElementById('barChart').getContext('2d');
    if (graficoTemporal) {
        graficoTemporal.destroy();
    }

    let labels = [];
    let data = [];
    
    if (anoSelecionado === 'Todos') {
        // Mostrar dados de todos os anos
        labels = ['2015','2016','2017','2018','2019','2020', '2021', '2022', '2023'];
        
        // Calcular total de concluintes por ano (somando todas as categorias)
        data = labels.map(ano => {
            let totalAno = 0;
            const categorias = ['sexo', 'cor', 'idade'];
            
            categorias.forEach(cat => {
                if (dadosTemporais[cat].anos[ano]) {
                    totalAno += dadosTemporais[cat].anos[ano].reduce((acc, val) => acc + val, 0);
                }
            });
            
            return totalAno;
        });
    } else {
        // Mostrar dados do ano específico por categoria
        labels = ['Sexo', 'Cor', 'Idade'];
        data = [];
        
        const categorias = ['sexo', 'cor', 'idade'];
        categorias.forEach(cat => {
            if (dadosTemporais[cat].anos[anoSelecionado]) {
                const totalCategoria = dadosTemporais[cat].anos[anoSelecionado].reduce((acc, val) => acc + val, 0);
                data.push(totalCategoria);
            } else {
                data.push(0);
            }
        });
    }

    // Cores para as barras - usando as cores originais dos dadosTemporais
    const cores = anoSelecionado === 'Todos' 
        ? dadosTemporais.sexo.cores // Tons de azul para anos (9 cores para 9 anos)
        : [dadosTemporais.sexo.cores[0], dadosTemporais.cor.cores[0], dadosTemporais.idade.cores[0]]; // Primeira cor de cada categoria

    graficoTemporal = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: anoSelecionado === 'Todos' ? 'Vagas Ofertadas' : `Concluintes em ${anoSelecionado}`,
                data: data,
                backgroundColor:     ['#1B5E20', '#2E7D32', '#388E3C', '#43A047', '#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9']
,
                borderRadius: 4,
                barPercentage: 0.6,
                categoryPercentage: 0.8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 12 } }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: '#E5E7EB' },
                    ticks: { font: { size: 12 } }
                }
            }
        }
    });
}

// Inicializar gráfico temporal ao carregar a página e ao trocar o filtro
window.addEventListener('DOMContentLoaded', () => {
    const filtro = document.getElementById('filtroAnoTemporal');
    if (filtro) {
        renderizarGraficoTemporal(filtro.value);
        filtro.addEventListener('change', (e) => {
            renderizarGraficoTemporal(e.target.value);
        });
    }
});

// Inicializar as abas quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Garantir que as classes iniciais das tabs da primeira seção estejam corretas
    const tabs = document.querySelectorAll('.tab-button');
    if (tabs.length > 0) {
        // Remover classes de todas as tabs
        tabs.forEach(tab => {
            tab.classList.remove('text-white', 'bg-green-500', 'border-b-2', 'border-green-500', 'text-gray-600', 'hover:bg-gray-50');
            tab.classList.add('text-gray-600', 'hover:bg-gray-50');
            // Remover qualquer estilo inline
            tab.style.removeProperty('border-bottom');
        });
        
        // Adicionar classes à primeira tab
        const primeiraTab = tabs[0];
        primeiraTab.classList.remove('text-gray-600', 'hover:bg-gray-50');
        primeiraTab.classList.add('text-white', 'bg-green-500', 'border-b-2', 'border-green-500');
    }

    // Garantir que as classes iniciais das tabs de distribuição estejam corretas
    const tabsDistribuicao = document.querySelectorAll('.tab-button-dist');
    if (tabsDistribuicao.length > 0) {
        // Remover classes de todas as tabs
        tabsDistribuicao.forEach(tab => {
            tab.classList.remove('text-white', 'bg-green-500', 'border-b-2', 'border-green-500', 'text-gray-600', 'hover:bg-gray-50');
            tab.classList.add('text-gray-600', 'hover:bg-gray-50');
            // Remover qualquer estilo inline
            tab.style.removeProperty('border-bottom');
        });
        
        // Adicionar classes à primeira tab
        const primeiraTab = tabsDistribuicao[0];
        primeiraTab.classList.remove('text-gray-600', 'hover:bg-gray-50');
        primeiraTab.classList.add('text-white', 'bg-green-500', 'border-b-2', 'border-green-500');
    }

    // Inicializar as funções das abas
    inicializarAbas();
    inicializarAbasDistribuicao();

    // Inicializar dropdowns com os vetores de tags
    initializeAnoDropdown(tagsAno);
    initializeDropdown("Projetos", tagsProjetos);
    initializeDropdown("Cursos", tagsCursos);
    initializeDropdown("Profissao", tagsProfissao);
    initializeDropdown("Municipio", tagsMunicipio);

    // Adicionar funcionalidade ao botão de reset
    const resetButton = document.getElementById('resetFilters');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            location.reload();
        });
    }
});
