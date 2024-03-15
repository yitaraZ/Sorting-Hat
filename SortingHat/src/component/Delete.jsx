import React from "react";
import axios from "axios";

export default function Delete() {
    const DeleteAll = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete all data? This action cannot be undone.");
        
        if (confirmDelete) {
            try {
                const response = await axios.delete("http://localhost:3030/Namelist");
                console.log("All data deleted:", response.data);
                alert("All data has been successfully deleted.");
                // ส่งคำขอลบข้อมูลทั้งหมดไปยัง backend
            } catch (error) {
                console.error("Error deleting all data:", error);
                alert("An error occurred while deleting data. Please try again later.");
            }
        }
    };

    return (

        <div className="max-w-md mx-auto justify-center flex m-4">
            <button className="btn bg-red-500 text-white font-bold text-2xl" 
            onClick={DeleteAll}>Delete data</button>
        </div>

    )
}