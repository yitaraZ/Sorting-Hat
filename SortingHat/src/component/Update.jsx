import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Update({ data }) {

    const [id, setid] = useState();
    const [name, setname] = useState('');
    const [email, setemail] = useState('');

    const UpdateClick = (data) => {
        setid(data.id); 
        setname(data.name || '');
        setemail(data.email || '');
        document.getElementById('my_modal_6').showModal();
    };
    //console.log(name, email);
    const Submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:3030/Namelists`, {
                id,
                name,
                email,
            });


            console.log('Student updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating Student:', error);
            console.log(id, name, email);
        }
    };

    return (
        <>
            <button className="btn bg-base-500 text-white " onClick={() => UpdateClick(data) }>Update</button>
            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100  m-10">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <form className="card-body" onSubmit={Submit}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="first-lastname" className="input input-bordered text-white"
                                        onChange={(e) => setname(e.target.value)}
                                        value={name} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered text-white"
                                        onChange={(e) => setemail(e.target.value)}
                                        value={email} />
                                </div>

                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-red-500  text-white font-bold">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
}
