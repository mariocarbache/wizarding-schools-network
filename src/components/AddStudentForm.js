import React, { useState } from 'react';
import axios from 'axios';

const AddStudentForm = ({ onStudentAdded }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/students', {
        firstName,
        lastName,
        email,
      });

      if (onStudentAdded) {
        onStudentAdded(response.data);
      }

      setFirstName('');
      setLastName('');
      setEmail('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Add a New Student</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <button type="submit">Add Student</button>
        </div>
      </form>
    </div>
  );
};

export default AddStudentForm;
