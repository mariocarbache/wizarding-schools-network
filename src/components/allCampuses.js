import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WizardingSchoolsComponent = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get("/api/schools/");
        setSchools(response.data);
      } catch (error) {
        console.log(response.data);
        console.error(error);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div>
      <h2>Wizarding Schools</h2>
      <ul>
        {schools.map((Campus) => (
          <li key={Campus.id}>
            <span>{Campus.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WizardingSchoolsComponent;
