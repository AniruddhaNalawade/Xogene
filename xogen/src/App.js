import React, { useState } from 'react';
import DrugDetails from './Components/DrugDetails';
import { fetchDrugDetails } from './api';
import Navbar from './Components/Navbar';

const App = () => {
  const [drug, setDrug] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    try {
      const drugDetails = await fetchDrugDetails(query);
      setDrug(drugDetails);
      setError('');
    } catch (error) {
      setDrug(null);
      setError('Drug not found. Please try another name.');
    }
  };

  return (
    <div>
      
      <Navbar onSearch={handleSearch} />
      <h1 className='text-center text-primary'>Drug Search App</h1>
      {error && <p>{error}</p>}
      <DrugDetails drug={drug} />
    </div>
  );
};

export default App;

