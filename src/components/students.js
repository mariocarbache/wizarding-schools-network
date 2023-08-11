import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UpdateStudentForm from './UpdateStudentByIdForm';
import AddStudentForm from './AddStudentForm';

const StudentsComponent = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);


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

  const handleStudentDelete = async (studentId) => {
    try {
      await axios.delete(`/api/students/${studentId}`);
      setStudents(students.filter((student) => student.id !== studentId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditStudent = (student) => {
    setSelectedStudent(student);
  };

  const handleUpdateStudent = (updatedStudent) => {
    setStudents(students.map((student) => (student.id === updatedStudent.id ? updatedStudent : student)));
    setSelectedStudent(null);
  };

  return (
    <div>
      <h2>Wizarding Students</h2>
      <AddStudentForm onStudentAdded={handleStudentAdded} />
      <UpdateStudentForm onUpdate={handleUpdateStudent} />
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>
              <Link to={`/students/${student.id}`}>{student.firstName} {student.lastName}</Link>
            </strong>
            <img src={student.imageUrl} height="100" width="100" alt={`${student.firstName} ${student.lastName}`} />
            <button onClick={() => handleStudentDelete(student.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsComponent;
