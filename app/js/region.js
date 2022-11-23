let ctx = document.getElementById('region').getContext('2d');
let marceting_camping = new Chart(ctx,{
    type: 'doughnut',
    data:{
        labels: [
          'Research',
          'Information',
          'Product Desing',
          'Pacaging'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [3, 3, 6,6,6],
          backgroundColor: [
            '#f1a80a',
            '#85c875',
            '#248bcb',
            '#486e91',
            '#00cccc'
          ],
        }]
      },
    options: {
      plugins: {
        legend: {
          display: false,
        }
      }
    },
    plugins: [{
      id: 'text',
      beforeDraw: function (chart, a, b) {
          let width = chart.width,
              height = chart.height,
              ctx = chart.ctx;

          ctx.restore();
          let fontSize = (height / 114).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";

          let text = 'RES',
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.fillStyle = '#00cccc';
          ctx.save();
      }
  }],
})