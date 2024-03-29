import React, { useState, useEffect } from "react";
import axios from 'axios';
import OutlineCard from "./Card";
import Filter from "./Filter";
import Delete from "./Delete";


export default function Table() {
    const [students, setStudents] = useState([]);

    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:3030/Namelists");
        const dataArray = Array.isArray(response.data.data) ? response.data.data : [];
        setStudents(dataArray);
        //console.log(students);
    }
    useEffect(() => {
        fetchAPI()
    }, [])

    const pracha = async () => {
        const response = await axios.get("http://localhost:3030/Namelists/Prachachuen");
        const dataArray = Array.isArray(response.data.data) ? response.data.data : [];
        setStudents(dataArray);
    }

    const kanok = async () => {
        const response = await axios.get("http://localhost:3030/Namelists/Kanok");
        const dataArray = Array.isArray(response.data.data) ? response.data.data : [];
        setStudents(dataArray);
    }

    const intorn = async () => {
        const response = await axios.get("http://localhost:3030/Namelists/Indara");
        const dataArray = Array.isArray(response.data.data) ? response.data.data : [];
        setStudents(dataArray);
    }

    const burana = async () => {
        const response = await axios.get("http://localhost:3030/Namelists/Buranapol");
        const dataArray = Array.isArray(response.data.data) ? response.data.data : [];
        setStudents(dataArray);
    }

    const filterall = [fetchAPI, pracha, kanok, intorn, burana];

    return (
        <>
            <div className="max-w-md mx-auto justify-center flex">
                <h1 className="mb-5 text-4xl font-bold text-white ">Student of 4kings</h1>
            </div>
            <div className="flex justify-center m-4 ">
                <div className="stats shadow bg-base-100 ">
                    <div className="stat">
                        <div className="stat-title text-white">Total students</div>
                        <div className="stat-value text-center text-yellow-500">{students.length}</div>
                    </div>
                </div>
            </div>
            <Filter FilterFunciton={filterall} />
            
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginInline: '50px' }}>

                {students.map(val => (
                    <div key={val.id}>
                        <OutlineCard key={val.id} data={val} />
                    </div>
                ))}
            </div>
            <Delete />
        </>
    )
}