// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
});

export const getCakes = async () => {
  const response = await api.get('/cakes');
  return response.data;
};

export const getWalletBalance = async (userId) => {
  const response = await api.get(`/wallet/${userId}`);
  return response.data.balance;
};
