import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleSchoolComponent = () => {
    const { id } = useParams();
    const [school, setSchool] = useState(null);

    useEffect(() => {
        async function fetchSchool() {
            try {
                const response = await axios.get(`/api/wizarding-schools/${id}`);
                setSchool(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchSchool();
    }, [id]);

    if (school === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Wizarding School</h2>
            <ul>
                <li key={school.id}>
                    <strong>{school.name}</strong>
                    <img src={school.imageUrl} alt={school.name} height="100" width="100"/>
                    <p>{school.description}</p>
                    <p><strong>Location: </strong>{school.address}</p>
                    <h3>Students</h3>
                    <ul>
                        {school.Students.map((student) => (
                        <li key={student.id}>
                        <p>{student.firstName} {student.lastName}</p>
                    </li>
                ))}
            </ul>
                </li>
            </ul>
        </div>
    );
};

export default SingleSchoolComponent;