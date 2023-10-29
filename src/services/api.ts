import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/api-cripto',
})

/* 
API Key:  c8415076f55a0324
url : https://coinlib.io/api/v1/coinlist?key=c8415076f55a0324&pref=BRL&page=1&order=volume_desc
*/