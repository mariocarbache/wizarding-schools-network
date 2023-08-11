import React, { useState } from 'react';
import axios from 'axios';

const EditWizardingSchoolForm = ({ school, onUpdate }) => {
  const [name, setName] = useState(school.name);
  const [address, setAddress] = useState(school.address);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/wizarding-schools/${school.id}`, {
        name,
        address,
      });

      //Note to self: this calls the onUpdate callback to update the school in the parent component
      onUpdate(response.data.school);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Edit Wizarding School</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Location:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditWizardingSchoolForm;
