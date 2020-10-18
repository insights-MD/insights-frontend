export const line2Options = {
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
      data: [99.23, 99.89, 100.52, 100.62, 101.2, 101.12, 101.29],
      type: 'line',
      symbol: 'triangle',
      symbolSize: 20,
      lineStyle: {
        normal: {
          color: '#64B5F6',
          width: 4,
          type: 'dashed'
        }
      },
      itemStyle: {
        normal: {
          borderWidth: 2,
          borderColor: '#336cfb',
          color: '#64B5F6'
        }
      }
    }
  ]
};
