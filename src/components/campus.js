import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SingleSchoolComponent = () => {
  const { id } = useParams();
  const [school, setSchool] = useState(null);

  const fetchSchool = async () => {
    try {
      const response = await axios.get(`/api/wizarding-schools/${id}`);
      setSchool(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSchool();
  }, [id]);

  const handleUnenroll = async (studentId) => {
    try {
      await axios.put(`/api/unenroll/${studentId}`);
      fetchSchool();
    } catch (error) {
      console.error(error);
    }
  };

  if (school === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Wizarding School</h2>
      <ul>
        <li key={school.id}>
          <strong>{school.name}</strong>
          <img src={school.imageUrl} alt={school.name} height="100" width="100" />
          <p>{school.description}</p>
          <p>
            <strong>Location: </strong>
            {school.address}
          </p>
          <h3>Students</h3>
          {school.Students.length === 0 && <p>No students in this campus.</p>}
          {school.Students.length > 0 && (
            <ul>
              {school.Students.map((student) => (
                <li key={student.id}>
                  <p>
                    <Link to={`/students/${student.id}`}>
                      {student.firstName} {student.lastName}
                    </Link>{' '}
                    <button onClick={() => handleUnenroll(student.id)}>Unenroll</button>
                  </p>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SingleSchoolComponent;
