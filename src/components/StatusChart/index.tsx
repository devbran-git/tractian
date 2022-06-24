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
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: [''],
      title: {
        text: 'Status dos ativos',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
        align: 'high',
      },
      labels: {
        overflow: 'justify',
      },
    },
    tooltip: {},
    plotOptions: {
      bar: {
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
    <div style={{ margin: 24 }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StatusChart;
