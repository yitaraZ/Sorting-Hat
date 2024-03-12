import React from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/home.css';
import TableP from "./TableP";
import TableK from "./TableK";
import TableB from "./TableB";
import TableI from "./TableI";

export default function Namelist(){
    return(
        <>
        <div >
            <div style={{ display: 'flex' }}>
                <TableP/>
                <TableK />
                <TableB />
                <TableI />
            </div>
            
            
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