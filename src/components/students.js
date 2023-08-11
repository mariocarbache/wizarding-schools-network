import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddStudentForm from './AddStudentForm';

const StudentsComponent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStudentAdded = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <h2>Wizarding Students</h2>
      <AddStudentForm onStudentAdded={handleStudentAdded} />
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>
              <Link to={`/students/${student.id}`}>{student.firstName} {student.lastName}</Link>
            </strong>
            <img src={student.imageUrl} height="100" width="100" alt={`${student.firstName} ${student.lastName}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsComponent;
