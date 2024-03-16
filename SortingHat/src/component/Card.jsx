import * as React from 'react';


export default function OutlineCard({ data }) {


  return (
    <div className="card w-80 bg-yellow-500 text-primary-content m-2 ">
      <div className="card-body">
        <h2 className="card-title text-black" > {data.name}</h2>
        <p>Email: {data.email}</p>
        <p>House: {data.house}</p>
        
      </div>
    </div>
  );
}