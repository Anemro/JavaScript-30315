const ctx = document.getElementById('resultado').getContext('2d');

function graficar () {   


    const myChart = new Chart(ctx, {    
        
        type: 'bar',
        data: {
            labels: ['Inicio', 'Ganancia','Final'],
            datasets: 
            [{
                label: 'Ganancia',
                data: [calculoInteresCompuesto[0].capitalI,calculoInteresCompuesto[0].ganancia, calculoInteresCompuesto[0].capitalFinal],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    });


    let canvas = document.getElementsByClassName ('headCanvas');
    
    setTimeout (()=> {
        for (i=0; i<localStorage.length; i++){
            const h4 = document.createElement('h4');
            const headCanvas = localStorage.getItem(localStorage.key(0));
            h4.innerHTML = headCanvas
            canvas[0].appendChild (h4);
            
            }
        }, 1000)
}

