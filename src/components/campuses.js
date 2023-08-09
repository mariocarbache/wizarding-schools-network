import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const WizardingSchoolsComponent = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    async function fetchSchools() {
      try {
        const response = await axios.get("/api/wizarding-schools");
        setSchools(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div>
      <h2>Wizarding Schools</h2>
      <ul>
        {schools.map((campus) => (
          <li key={campus.id}>
            <Link to={`/schools/${campus.id}`}><strong>{campus.name}</strong></Link>
            <img src={campus.imageUrl} width="100" height="100"></img>
            <p>{campus.description}</p>
            <p><strong>Location: </strong>{campus.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WizardingSchoolsComponent;
