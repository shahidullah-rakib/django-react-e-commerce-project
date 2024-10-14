import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/products/products/'; // Update this URL to your actual API endpoint

// Fetch products
export const fetchProducts = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Add a product
export const addProduct = async (productData, token) => {
  const response = await axios.post(API_URL, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

// Update a product
export const updateProduct = async (productId, productData, token) => {
  const response = await axios.put(`${API_URL}${productId}/`, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

// Delete a product
export const deleteProduct = async (productId, token) => {
  const response = await axios.delete(`${API_URL}${productId}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
