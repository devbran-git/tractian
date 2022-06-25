import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { HealthScoreChartProps } from './types';

const HealthScoreChart: React.FC<HealthScoreChartProps> = ({
  assetsByHealthScore,
}: HealthScoreChartProps) => {
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
        text: 'Saúde dos ativos',
      },
    },
    yAxis: {
      className: 'highcharts-bottom-axis',
      min: 0,
      title: {
        text: 'Porcentagem',
        align: 'middle',
      },
      labels: {
        overflow: 'right',
      },
    },
    tooltip: {
      valueSuffix: '%',
    },
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
    series: assetsByHealthScore,
  };

  return (
    <figure className='healthscore-chart-container'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </figure>
  );
};

export default HealthScoreChart;
