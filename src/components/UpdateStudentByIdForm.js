import React, { useState } from 'react';
import axios from 'axios';

const UpdateStudentForm = ({ onUpdate }) => {
  const [studentId, setStudentId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gpa, setGpa] = useState('');
  const [CampusId, setCampusId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/students/${studentId}`, {
        firstName,
        lastName,
        email,
        gpa,
        CampusId,
      });

      onUpdate(response.data.student);
      setStudentId('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setGpa('');
      setCampusId('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h3>Update Student</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gpa">GPA:</label>
          <input
            type="number"
            id="gpa"
            step="0.01"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="CampusId">Campus ID:</label>
          <input
            type="number"
            id="CampusId"
            value={CampusId}
            onChange={(e) => setCampusId(e.target.value)}
          />
        </div>
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default UpdateStudentForm;