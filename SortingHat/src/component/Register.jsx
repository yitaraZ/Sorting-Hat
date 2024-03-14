import React from "react";


export default function Register() {


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
                                    <input type="name" className="input input-bordered" required />
                                    <div className="form-control mt-6">
                                        <button className="btn bg-red-500  text-white font-bold">Submit</button>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <span className="label-text">Student count = </span>
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
                                    <button className="btn bg-red-500  text-white font-bold">Find house</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </>

    );
}