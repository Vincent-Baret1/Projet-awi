import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { login } from "../auth";
import { Link } from "react-router-dom";

function FormLogin() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(form);
    }

    return (
        <Form onSubmit={handleSubmit} style={{ margin: '30px 30px' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) =>
                    setForm({ ...form, email: e.target.value })} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) =>
                    setForm({ ...form, password: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

                <Button  variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
    );
};

export default FormLogin;