export default {
  color: ['#ed5564', '#336cfb'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['patients 2020']
  },
  grid: {
    left: 30,
    right: 0,
    top: 50,
    bottom: 50
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: '#336cfb'
        }
      },
      data: [
        '2020-1',
        '2020-2',
        '2020-3',
        '2020-4',
        '2020-5',
        '2020-6',
        '2020-7',
        '2020-8',
        '2020-9',
        '2020-10',
        '2020-11',
        '2020-12'
      ]
    },
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: '#ed5564'
        }
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            return (
              'patients ' +
              params.value +
              (params.seriesData.length ? '：' + params.seriesData[0].data : '')
            );
          }
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'patients 2020',
      type: 'line',
      xAxisIndex: 1,
      smooth: true,
      data: [159, 149, 174, 182, 219, 201, 175, 182, 119, 118, 112, 96]
    }
  ]
};
