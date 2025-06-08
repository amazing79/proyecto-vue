import axios from 'axios';

//const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-45.8626&longitude=-67.494&hourly=temperature_2m';
const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-45.8626&longitude=-67.494&current=temperature_2m&timezone=auto'

export const getTemperatura =  async () => {
   const response = await axios.get(API_URL);
   const newTemp = response.data.current.temperature_2m;
   return newTemp;
};
