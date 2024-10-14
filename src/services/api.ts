import axios from 'axios';

export const fetchData = async () => {
  const response = await axios.get('C:\Users\ravia\Downloads\create-react-app\hotel_bookings_1000.csv');
  return response.data;
};

