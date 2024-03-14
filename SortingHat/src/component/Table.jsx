import React, { useState, useEffect } from "react";
import axios from 'axios';
import OutlineCard from "./Card";
import Filter from "./Filter";
import Typography from '@mui/material/Typography';


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
        const response = await axios.get("http://localhost:3030/Namelists/Intorn");
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
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold text-white ">Student of 4kings</h1>
                </div>
            </div>
            <br />
            <Filter FilterFunciton={filterall} />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginInline: '60px' }}>
                {students.map(val => (
                    <div key={val.id}>

                        <OutlineCard key={val.id} data={val} />

                    </div>
                ))}
            </div>
        </>
    )
}