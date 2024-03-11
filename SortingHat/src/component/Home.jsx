import React from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/home.css';
import Header from "./Header";


export default function Home() {
    return (
        <>

            <div className="container">
                <h1>จำนวนคนที่คัดสรร</h1>
                <Form.Control size="lg" type="text" placeholder="Large text" />
                <br />
                <div>
                    <Button variant="outline-light" style={{ marginRight: '10px' }}>
                        <Link style={{ color: "white" }} to="/Name">ยืนยัน</Link>
                    </Button>
                    <Button variant="outline-light">
                        <Link style={{ color: "white" }} to="/Name_list">รายชื่อ</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}