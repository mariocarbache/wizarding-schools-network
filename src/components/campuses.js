import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddWizardingSchoolForm from './AddWizardingSchoolForm';
import EditWizardingSchoolForm from './EditWizardingSchoolForm';

const WizardingSchoolsComponent = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await axios.get('/api/wizarding-schools');
      setSchools(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSchoolAdded = (newSchool) => {
    setSchools([...schools, newSchool]);
  };

  const handleSchoolDelete = async (schoolId) => {
    try {
      await axios.delete(`/api/wizarding-schools/${schoolId}`);
      setSchools(schools.filter((school) => school.id !== schoolId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSchoolUpdated = (updatedSchool) => {
    const index = schools.findIndex((school) => school.id === updatedSchool.id);

    if (index !== -1) {
      const updatedSchools = [...schools];
      updatedSchools[index] = updatedSchool;
      setSchools(updatedSchools);
    }
  };


  return (
    <div>
      <h2>Wizarding Schools</h2>
      <AddWizardingSchoolForm onSchoolAdded={handleSchoolAdded} />
      <ul>
        {schools.map((campus) => (
          <li key={campus.id}>
            <Link to={`/schools/${campus.id}`}>
              <strong>{campus.name}</strong>
            </Link>
            <img src={campus.imageUrl} width="100" height="100" alt={campus.name} />
            <p>{campus.description}</p>
            <p>
              <strong>Location: </strong>
              {campus.address}
            </p>
            <button onClick={() => handleSchoolDelete(campus.id)}>X</button>
            <EditWizardingSchoolForm school={campus} onUpdate={handleSchoolUpdated} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WizardingSchoolsComponent;

