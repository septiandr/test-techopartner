import axios from 'axios';

export const apiGet = async (url, headers = {}) => {
  try {
    const response = await axios.get(url, { headers });
    return response.data; 
  } catch (error) {
    console.error('Error making GET request:', error);
    throw new Error('GET request failed');
  }
};

export const apiPost = async (url, data = {}, headers = {}) => {
  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error('Error making POST request:', error);
    throw new Error('POST request failed');
  }
};