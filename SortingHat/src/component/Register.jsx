import React, { useState } from "react";

export default function Register() {
    const [registeredStudents, setRegisteredStudents] = useState(0);
    const [maxStudents, setMaxStudents] = useState(0);

    const constmax = (event) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) {
            setMaxStudents(newValue);
        }
    };

    const handleRegister = () => {
        if (registeredStudents < maxStudents) {
            setRegisteredStudents(prevCount => prevCount + 1);
            const randomHouse = Math.floor(Math.random() * 4) + 1;
            let houseName = '';
            switch (randomHouse) {
                case 1:
                    houseName = 'Prachachuen';
                    break;
                case 2:
                    houseName = 'Kanok';
                    break;
                case 3:
                    houseName = 'Intorn';
                    break;
                case 4:
                    houseName = 'Buranapol';
                    break;
                default:
                    houseName = 'Unknown';}
            alert(`You've registered successfully. Your assigned house is ${houseName}.`);
        } else {
            alert("You've reached the maximum number of registered students.");
        }
    };

    console.log(registeredStudents, maxStudents)
    return (
        <>
            <button className="btn bg-red-500 text-white font-bold text-2xl" onClick={() => document.getElementById('my_modal_5').showModal()}>Register</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100  m-10">
                            <form method="dialog">
                                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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
                                    <input type="name" placeholder="first-lastname" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
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
