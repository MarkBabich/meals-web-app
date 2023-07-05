import axios from 'axios';

axios.defaults.baseURL = '';

export const mealsdbClient = axios.create({
  baseURL: 'http://www.themealdb.com/api/json/v1/1',
});
