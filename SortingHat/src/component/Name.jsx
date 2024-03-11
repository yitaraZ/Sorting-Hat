import React from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/home.css';
import Header from "./Header";

export default function Name() {
    return (
        <>
            
            <div className="container">

                <h1>ชื่อผู้เข้าคัดสรร</h1>
                <Form.Control size="lg" type="text" placeholder="Large text" />
                <br />
                <Button variant="outline-light">
                    <Link style={{ color: "white" }} to="/Name">สุ่ม</Link>
                </Button>
                <br />
                
                <Button variant="outline-light">
                        <Link style={{ color: "white" }} to="/Name_list">รายชื่อ</Link>
                </Button>
            </div>
        </>
    )
}