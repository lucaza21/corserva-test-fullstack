import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3030/api',
});

export const getItems = () => api.get('/sales');
export const getItem = (id) => api.get(`/sales/${id}`);
export const createItem = (data) => api.post('/sales/', data);
export const updateItem = (id, data) => api.put(`/sales/${id}`, data);
export const deleteItem = (id) => api.delete(`/sales/${id}`);
