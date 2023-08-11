import React, { useState } from 'react';
import axios from 'axios';

const AddWizardingSchoolForm = ({ onSchoolAdded }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/wizarding-schools', {
        name,
        address,
      });

      if (onSchoolAdded) {
        onSchoolAdded(response.data);
      }

      //Note to self: this will clear input fields after successful submission
      setName('');
      setAddress('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Add a New Wizarding School</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <button type="submit">Add School</button>
        </div>
      </form>
    </div>
  );
};

export default AddWizardingSchoolForm;
