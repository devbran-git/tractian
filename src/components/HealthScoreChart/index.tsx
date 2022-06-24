import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { HealthScoreChartProps } from './types';

const HealthScoreChart: React.FC<HealthScoreChartProps> = ({
  assetsByHealthScore,
}: HealthScoreChartProps) => {
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
        text: 'Saúde dos ativos',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Porcentagem',
        align: 'middle',
      },
      labels: {
        overflow: 'justify',
      },
    },
    tooltip: {
      valueSuffix: '%',
    },
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
    series: assetsByHealthScore,
  };

  return (
    <div style={{ margin: 24 }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default HealthScoreChart;
