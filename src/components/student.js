import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SingleStudentComponent = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        async function fetchStudent() {
            try {
                const response = await axios.get(`/api/students/${id}`);
                setStudent(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchStudent();
    }, [id]);

    if (student === null) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Student #{student.id}</h2>
            <ul>
                <li key={student.id}>
                    <strong>{student.firstName} {student.lastName}</strong>
                    <img src={student.imageUrl} height="100" width="100"/>
                    <p>Email: {student.email}</p>
                    <p>GPA: {student.gpa}</p>
                    {student.Campus ? (
                        <p>Wizarding School: <Link to={`/schools/${student.Campus.id}`}>{student.Campus.name}</Link></p>
                    ) : (
                        <p>Wizarding School: Not assigned to any campus</p>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default SingleStudentComponent;