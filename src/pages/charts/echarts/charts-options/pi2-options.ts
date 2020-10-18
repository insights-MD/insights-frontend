export const pi2Options = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    x: 'center',
    y: 'bottom',
    data: ['Ex.1', 'Ex.2', 'Ex.3', 'Ex.4', 'Ex.5', 'Ex.6', 'Ex.7', 'Ex.8']
  },
  grid: {
    left: 0,
    right: 0,
    bottom: 0,
    containLabel: true
  },
  series: [
    {
      name: 'area',
      type: 'pie',
      radius: [30, 110],
      roseType: 'area',
      data: [
        { value: 10, name: 'Upper Respiratory Infections' },
        { value: 5, name: 'Cardiac Arrhythmias' },
        { value: 15, name: 'Pneumonia' },
        { value: 25, name: 'Coronary Atherosclerosis' }
      ]
    }
  ]
};
