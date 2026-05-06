
new Chart(document.getElementById("grafic-redo"), {
    type: 'pie',
    data: {
      labels: ["Africa", "Asia", "America",],
      datasets: [{
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [150,300,50]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
