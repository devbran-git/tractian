import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { StatusChartProps } from './types';

const StatusChart: React.FC<StatusChartProps> = ({ assetsByStatus }) => {
  const assetsInDowntime = assetsByStatus?.filter(
    (asset) => asset === 'inDowntime'
  );

  const assetsInAlert = assetsByStatus?.filter((asset) => asset === 'inAlert');

  const assetsInOperation = assetsByStatus?.filter(
    (asset) => asset === 'inOperation'
  );

  const newSeries = [
    {
      name: 'Em Parada',
      data: [assetsInDowntime.length],
    },
    {
      name: 'Em Alerta',
      data: [assetsInAlert.length],
    },
    {
      name: 'Em Operação',
      data: [assetsInOperation.length],
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      styledMode: true,
    },
    title: {
      text: '',
    },
    xAxis: {
      className: 'highcharts-left-axis',
      categories: [''],
      title: {
        text: 'Status dos ativos',
      },
    },
    yAxis: {
      className: 'highcharts-bottom-axis',
      min: 0,
      title: {
        text: '',
      },
      labels: {
        overflow: 'justify',
      },
    },
    tooltip: {},
    plotOptions: {
      bar: {
        borderRadius: 4,
        dataLabels: {
          enabled: true,
        },
      },
    },
    credits: {
      enabled: false,
    },

    series: newSeries,
  };

  return (
    <figure
      className='status-chart-container'
      style={{ paddingBottom: '16px' }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </figure>
  );
};

export default StatusChart;
