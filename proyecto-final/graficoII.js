let myChart= new Chart(
    document.getElementById('resultado'),
    config
)
function destroy(){
    myChart.destroy()
}

function render(){
    myChart= new Chart(
        document.getElementById('resultado'),
        config
    )
}

const config = {
    type: 'bar',
    data: [calculoInteresCompuesto[0].capitalI,calculoInteresCompuesto[0].ganancia, calculoInteresCompuesto[0].capitalFinal],
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Resultado'
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    }
  };

const DATA_COUNT = 3;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: calculoInteresCompuesto[0].capitalFinal};

const labels = ['Inicio', 'Ganancia','Final']
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Capital Inicial',
      data: Utils.numbers(NUMBER_CFG),
      backgroundColor: Utils.CHART_COLORS.red,
    },
    {
      label: 'Ganancia',
      data: Utils.numbers(NUMBER_CFG),
      backgroundColor: Utils.CHART_COLORS.blue,
    },
    {
      label: 'Capital Final',
      data: Utils.numbers(NUMBER_CFG),
      backgroundColor: Utils.CHART_COLORS.green,
    },
  ]
};
const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: calculoInteresCompuesto[0].capitalFinal});
        });
        chart.update();
      }
    },
  ];
