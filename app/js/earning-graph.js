const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec']
const data = {
    labels:labels,
    datasets:[{
        label: 'Revenue',
        backgroundColor: '#ac5f7b',
        borderColor: '#ac5f7b',
        fill: 'start',
        pointRadius: 1,
        pointBackgroundColor: '#ac5f7b',
    },
    {
        label: 'Order',
        backgroundColor: '#253340',
        borderColor: '#253340',
        fill: 'start',
        pointRadius: 1,
        pointBackgroundColor: '#253340',
    },
]}

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                display:false
            }
        },
        tension: 0.5,
        scales: {
            x: {
                grid: {
                borderWidth: 2,
                borderDash: [5, 5],
                borderDashOffset: 3,
                tickColor:'white'
                },
                ticks: {
                    color: '#777777',
                }
            },
            y: {
                tickColor:'white',
                grid: {
                borderWidth: 2,
                borderDash: [5, 5],
                borderDashOffset: 3,
                },
                tickColor:'white',
                ticks: {
                    stepSize:5000,
                    padding: 2,
                }
            },

        }
    },
};

const earning_graph = new Chart(
    document.getElementById('earning_graph'),
    config
);
$.ajax("data.json").done(function (response) {
    earning_graph.data.datasets[0].data = response.data1;
    earning_graph.data.datasets[1].data = response.data2;
    earning_graph.update();
});