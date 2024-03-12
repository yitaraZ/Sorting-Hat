import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function TableP() {
    const [students, setStudents] = useState([]);

    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:3030/Namelists/ประชาชื่น");
        const dataArray = Array.isArray(response.data.data) ? response.data.data : [];
        setStudents(dataArray);
        //console.log(students);
    }
    useEffect(() => {
        fetchAPI()
    }, [])


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th scope="col">ประชาชี่น</th>

                    </tr>
                </thead>
                <tbody>
                    {students.map(val => (
                        <tr key={val.id}>
                            <th scope="row">{val.name}</th>
                        </tr>
                    ))}
                    
                </tbody>
                
            </table>
        </>
    )
}