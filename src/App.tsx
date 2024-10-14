import React, { useState, useEffect } from 'react';
import TimeSeriesChart from './components/TimeSeriesChart';
import ColumnChart from './components/ColumnChart';
import SparklineChart from './components/SparklineChart';
import { fetchData } from './services/api';
import { processDateRangeData } from './utils/dataProcessing';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import './App.css';

const App: React.FC = () => {
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState<[Date, Date] | null>(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch data on mount
    fetchData().then(response => {
      setData(response);
      setFilteredData(response); // Initially show all data
    });
  }, []);

  useEffect(() => {
    if (dateRange) {
      const [startDate, endDate] = dateRange;
      const filtered = processDateRangeData(data, startDate, endDate);
      setFilteredData(filtered);
    }
  }, [dateRange, data]);

  return (
    <div className="App">
      <h1>Hotel Booking Dashboard</h1>
      <DateRangePicker onChange={setDateRange} value={dateRange} />
      <div className="charts">
        <TimeSeriesChart data={filteredData} />
        <ColumnChart data={filteredData} />
        <div className="sparklines">
          <SparklineChart data={filteredData} type="adults" />
          <SparklineChart data={filteredData} type="children" />
        </div>
      </div>
    </div>
  );
};

export default App;
