import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/products/categories/'; // Update this URL to your actual API endpoint

// Fetch categories
export const fetchCategories = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// // Add a category
// export const addCategory = async (categoryData, token) => {
//   const response = await axios.post(API_URL, categoryData, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//   });
//   return response.data;
// };

// // Update a category
// export const updateCategory = async (categoryId, categoryData, token) => {
//   const response = await axios.put(`${API_URL}${categoryId}/`, categoryData, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//   });
//   return response.data;
// };

// // Delete a category
// export const deleteCategory = async (categoryId, token) => {
//   const response = await axios.delete(`${API_URL}${categoryId}/`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

// Add a category
export const addCategory = async (categoryData, token) => {
  try {
    console.log('Sending data:', categoryData);
    const response = await axios.post(API_URL, categoryData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response);
    throw error;
  }
};

// Update a category
export const updateCategory = async (categoryId, categoryData, token) => {
  try {
    const response = await axios.put(`${API_URL}${categoryId}/`, categoryData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response);
    throw error;
  }
};

// Delete a category
export const deleteCategory = async (categoryId, token) => {
  try {
    const response = await axios.delete(`${API_URL}${categoryId}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response);
    throw error;
  }
};
