import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean',
  rejectUnauthorized: false,
})
