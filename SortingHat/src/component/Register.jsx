import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Register() {
    const [registeredStudents, setRegisteredStudents] = useState(0);
    const [maxStudents, setMaxStudents] = useState(0);

    const [name, setname] = useState('');
    const [email, setemail] = useState('');

    const [prachachuenCount, setPrachachuenCount] = useState(0);
    const [kanokCount, setKanokCount] = useState(0);
    const [indaraCount, setIndaraCount] = useState(0);
    const [buranapolCount, setBuranapolCount] = useState(0);

    const constmax = (event) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) {
            setMaxStudents(newValue);
        }
    };

    //console.log(prachachuenCount,kanokCount,indaraCount,buranapolCount);
    const handleRegister = async (e) => {
        if (registeredStudents < maxStudents) {
            setRegisteredStudents(prevCount => prevCount + 1);

            // Find the minimum count among all houses
            const minCount = Math.min(prachachuenCount, kanokCount, indaraCount, buranapolCount);

            // Collect houses with the minimum count
            const minHouses = [];
            if (prachachuenCount === minCount) minHouses.push("Prachachuen");
            if (kanokCount === minCount) minHouses.push("Kanok");
            if (indaraCount === minCount) minHouses.push("Indara");
            if (buranapolCount === minCount) minHouses.push("Buranapol");

            // Randomly select a house from the minimum count houses
            const randomHouseName = minHouses[Math.floor(Math.random() * minHouses.length)];

            // Increment the count for the selected house
            switch (randomHouseName) {
                case "Prachachuen":
                    setPrachachuenCount(prevCount => prevCount + 1);
                    break;
                case "Kanok":
                    setKanokCount(prevCount => prevCount + 1);
                    break;
                case "Indara":
                    setIndaraCount(prevCount => prevCount + 1);
                    break;
                case "Buranapol":
                    setBuranapolCount(prevCount => prevCount + 1);
                    break;
                default:
                    break;
            }

            alert(`You've registered successfully. Your assigned house is ${randomHouseName}.`);
            console.log(randomHouseName);
            e.preventDefault();

            try {
                const response = await axios.post("http://localhost:3030/Namelist", {
                    name: name,
                    email: email,
                    house: randomHouseName,
                });
                console.log('Add new student:', response.data);
            } catch (error) {
                console.error('Error creating new ticket:', error);
            }
        } else {
            alert("You've reached the maximum number of registered students.");
        }
    };

    return (
        <>
            <button className="btn bg-red-500 text-white font-bold text-2xl" onClick={() => document.getElementById('my_modal_5').showModal()}>Register</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100  m-10">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <form className="card-body">
                                <div className="form-control flex-col">
                                    <label className="label">
                                        <span className="label-text">Number of student</span>
                                    </label>
                                    <input type="number" className="input input-bordered" value={maxStudents} onChange={constmax} required />
                                </div>
                                <div className="form-control">
                                    <span className="label-text">Student count = {registeredStudents}</span>
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" placeholder="first-lastname" className="input input-bordered"
                                        value={name} onChange={(e) => setname(e.target.value)} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered"
                                        value={email} onChange={(e) => setemail(e.target.value)} required />
                                </div>
                                <div className="form-control mt-6">
                                    <a className="btn bg-red-500  text-white font-bold" onClick={handleRegister}>Find house</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
}
