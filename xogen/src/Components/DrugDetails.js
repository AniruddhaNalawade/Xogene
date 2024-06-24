import React from 'react';

const DrugDetails = ({ drug }) => {
  if (!drug) {
    return <p>No drug details available.</p>;
  }

  return (
    <div>
      <h2 className='text-center'>{drug.name}</h2>
      <p className='text-center'>{drug.description}</p>
      {/* Display other details as needed */}
    </div>
  );
};

export default DrugDetails;
