import React from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/home.css';
import Table from "./Table";
import Header from "./Header";

export default function Namelist(){
    return(
        <>
        <Header/>
        <div className="list">
            <h1>4Kings List</h1>
            <Table/>
            <br/>
            <div>
            <Button variant="outline-light" style={{ marginRight: '10px' }}>
                <Link style={{ color: "white" }} to="/Name">ยืนยัน</Link>
            </Button>
            <Button variant="outline-light">
                <Link style={{ color: "white" }} to="/">หน้าหลัก</Link>
            </Button>
            </div>
        </div>
        </>
    )
}