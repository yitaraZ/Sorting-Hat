import React from "react";
import backgroundImage from '../assets/maxresdefault.jpg';
import Register from "./Register";



export default function Welcome({ openModal  }) {


  return (
    <div className="hero min-h-screen " style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Welcome To </h1>
          <h1 className="mb-5 text-5xl font-bold text-red-600">4 Kings</h1>
          <br/>
          <Register />
        </div>
      </div>
      
    </div>
    
  );
}