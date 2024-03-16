import React from "react";

export default function About() {
    return (
        <>
            <li><a onClick={() => document.getElementById('About').showModal()}>About</a></li>
            <dialog id="About" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-center">About this website!</h3>
                    <p className="py-4 text-center">It is a website that is intended to receive a number of students.<br/>
                    Fill in each person's information until the number of students you originally entered is complete.<br/>
                    Then a random house will be assigned to every student. <br/>
                    By having each house have the same average number of people.<br/>
                    and can show a list of names of who lives in which house<br/>
                    <br/>
                    Good luck with the random house!</p>
                    
                </div>
            </dialog>
        </>
    )
}