const pieChartLabels = ['Male', 'Female'];

const pieChartData = [53, 47];

const pieChartType = 'pie';

const pieChartColors = {
  backgroundColor: ['#2fa7ff', '#7cdb86', '#805aff'],
  borderColor: ['#2fa7ff', '#7cdb86', '#805aff']
};

export default {
  data: {
    labels: pieChartLabels,
    type: pieChartType,
    datasets: [
      {
        data: pieChartData,
        ...pieChartColors
      }
    ]
  }
};
