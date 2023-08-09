import React, { useEffect, useState } from 'react';
import axios from 'axios';


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
            <strong>{student.firstName} {student.lastName}</strong>
            <img src={student.imageUrl} height="100" width="100"></img>
            <p><strong>GPA: </strong> {student.gpa}</p>
            <p><strong>Email: </strong>{student.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsComponent;