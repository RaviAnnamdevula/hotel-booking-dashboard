import React from 'react';
import Chart from 'react-apexcharts';

interface TimeSeriesChartProps {
  data: any[];
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ data }) => {
  const series = [
    {
      name: 'Visitors',
      data: data.map((d) => ({
        x: new Date(d.arrival_date_year, d.arrival_date_month - 1, d.arrival_date_day_of_month),
        y: d.adults + d.children + d.babies,
      })),
    },
  ];

  const options = {
    chart: {
      type: 'line',
      zoom: {
        enabled: true,
      },
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      title: {
        text: 'Number of Visitors',
      },
    },
  };

  return <Chart options={options} series={series} type="line" />;
};

export default TimeSeriesChart;
