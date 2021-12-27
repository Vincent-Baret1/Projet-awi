import React, { useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../auth";

function FormLogin() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(form);
            navigate("/App")
        } catch {
            setError("Failed to log in");
        }
        setLoading(false);
    }

    return (
        <Card>
            <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit} style={{ margin: '30px 30px' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Adresse email : </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) =>
                    setForm({ ...form, email: e.target.value })} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mot de passe : </Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) =>
                    setForm({ ...form, password: e.target.value })} required />
                    </Form.Group>

                    <Button  disabled={loading}  variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default FormLogin;