import React from 'react';
import Chart from 'react-apexcharts';

interface ColumnChartProps {
  data: any[];
}

const ColumnChart: React.FC<ColumnChartProps> = ({ data }) => {
  const countries = [...new Set(data.map((d) => d.country))];
  const series = countries.map((country) => ({
    name: country,
    data: data.filter((d) => d.country === country).length,
  }));

  const options = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: countries,
    },
    yaxis: {
      title: {
        text: 'Number of Visitors',
      },
    },
  };

  return <Chart options={options} series={series} type="bar" />;
};

export default ColumnChart;
