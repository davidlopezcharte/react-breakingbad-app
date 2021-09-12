import axios from 'axios';

export const breakingbadApi = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api',
});
