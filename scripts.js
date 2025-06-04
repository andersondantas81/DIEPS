// Dados para o gráfico de barras
const barData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
        {
            label: 'Vagas Ofertadas',
            data: [980, 1150, 1320, 1482, 1650],
            backgroundColor: 'rgb(34, 197, 94)',
        },
        {
            label: 'Alunos Matriculados',
            data: [850, 980, 1100, 1245, 1400],
            backgroundColor: 'rgb(59, 130, 246)',
        },
        {
            label: 'Certificados Emitidos',
            data: [720, 820, 890, 892, 950],
            backgroundColor: 'rgb(245, 158, 11)',
        }
    ]
};

// Dados para o primeiro gráfico de pizza (Distribuição por Projeto)
const pieData1 = {
    labels: ['Projeto A', 'Projeto B', 'Projeto C', 'Projeto D', 'Outros'],
    datasets: [{
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
            'rgb(34, 197, 94)',
            'rgb(59, 130, 246)',
            'rgb(245, 158, 11)',
            'rgb(239, 68, 68)',
            'rgb(147, 197, 253)'
        ]
    }]
};

// Dados para o segundo gráfico de pizza (Distribuição por Curso)
const pieData2 = {
    labels: ['Curso A', 'Curso B', 'Curso C', 'Curso D', 'Outros'],
    datasets: [{
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
            'rgb(34, 197, 94)',
            'rgb(59, 130, 246)',
            'rgb(245, 158, 11)',
            'rgb(239, 68, 68)',
            'rgb(147, 197, 253)'
        ]
    }]
};

// Configurações comuns para os gráficos
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                padding: 20,
                boxWidth: 12,
                font: {
                    size: 11
                }
            }
        }
    }
};

// Configurações específicas para o gráfico de barras
const barChartOptions = {
    ...chartOptions,
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
                font: {
                    size: 11
                }
            }
        },
        x: {
            grid: {
                display: false
            },
            ticks: {
                font: {
                    size: 11
                }
            }
        }
    },
    plugins: {
        ...chartOptions.plugins,
        title: {
            display: true,
            text: 'Evolução Anual',
            font: {
                size: 14,
                weight: 'bold'
            },
            padding: {
                bottom: 20
            }
        }
    }
};

// Configurações comuns para os gráficos de pizza
const pieChartOptions = {
    ...chartOptions,
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                padding: 20,
                boxWidth: 12,
                font: {
                    size: 11
                },
                usePointStyle: true,
                pointStyle: 'circle'
            }
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    const label = context.label || '';
                    const value = context.raw || 0;
                    return ` ${label}: ${value}%`;
                }
            }
        }
    }
};

// Inicialização dos gráficos
window.onload = function() {
    // Gráfico de Barras
    window.barChart = new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: barData,
        options: barChartOptions
    });

    // Primeiro Gráfico de Pizza
    window.pieChart1 = new Chart(document.getElementById('pieChart1'), {
        type: 'doughnut',
        data: pieData1,
        options: pieChartOptions
    });

    // Segundo Gráfico de Pizza
    window.pieChart2 = new Chart(document.getElementById('pieChart2'), {
        type: 'doughnut',
        data: pieData2,
        options: pieChartOptions
    });
}; 