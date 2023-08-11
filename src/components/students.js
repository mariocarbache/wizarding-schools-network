import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const StudentsComponent = () => {
  const [students, setstudents] = useState([]);

  useEffect(() => {
    async function fetchstudents() {
      try {
        const response = await axios.get("/api/students");
        setstudents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchstudents();
  }, []);

  return (
    <div>
      <h2>Wizarding students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong><Link to={`/students/${student.id}`}>{student.firstName} {student.lastName}</Link></strong>
            <img src={student.imageUrl} height="100" width="100"></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsComponent;