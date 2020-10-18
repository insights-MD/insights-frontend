export const lineOptions = {
  grid: {
    left: 0,
    right: 0,
    bottom: 0,
    containLabel: true
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00']
  },
  yAxis: {
    type: 'value',
    min: 'dataMin'
  },
  series: [
    {
      data: [88, 93, 110, 100, 90, 94, 97],
      type: 'line',
      lineStyle: {
        normal: {
          color: '#ed5564'
        }
      }
    }
  ]
};
