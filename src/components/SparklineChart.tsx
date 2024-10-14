import React from 'react';
import Chart from 'react-apexcharts';

interface SparklineChartProps {
  data: any[];
  type: 'adults' | 'children';
}

const SparklineChart: React.FC<SparklineChartProps> = ({ data, type }) => {
  const title = type === 'adults' ? 'Adult Visitors' : 'Children Visitors';
  const seriesData = data.map((d) => d[type]);

  const options = {
    chart: {
      type: 'line',
      sparkline: {
        enabled: true,
      },
    },
    title: {
      text: `${title}: ${seriesData.reduce((acc, val) => acc + val, 0)}`,
      style: {
        fontSize: '16px',
      },
    },
  };

  return <Chart options={options} series={[{ name: title, data: seriesData }]} type="line" />;
};

export default SparklineChart;
