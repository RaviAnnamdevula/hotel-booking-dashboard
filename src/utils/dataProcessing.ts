export const processDateRangeData = (data, startDate, endDate) => {
    return data.filter((d) => {
      const bookingDate = new Date(d.arrival_date_year, d.arrival_date_month - 1, d.arrival_date_day_of_month);
      return bookingDate >= startDate && bookingDate <= endDate;
    });
  };
  