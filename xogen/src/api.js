import axios from 'axios';

const API_URL = 'http://localhost:5000/api/drugs/';

export const fetchDrugDetails = async (drugName) => {
  try {
    const response = await axios.get(`${API_URL}${drugName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
