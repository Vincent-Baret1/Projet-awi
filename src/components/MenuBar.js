import React, { Component , useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { logout } from "../auth";
import { useNavigate } from "react-router-dom";

function MenuBar() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const SignOut = async (e) => {
        //e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await logout();
            navigate("/")
        } catch {
            setError("Failed to log out");
        }
        setLoading(false);
    }
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>

                    <Link to="/App">
                        <Navbar.Brand href="#home">Projet-AWI</Navbar.Brand>
                    </Link>

                    <Nav className="me-auto">

                        <Nav.Link href="#FicheTechnique">
                            <Link to="/FicheTechniquePage" style={{ textDecoration: 'none', color: 'white' }}>
                                Fiche technique
                            </Link>
                        </Nav.Link>
                        <Nav.Link href="#ListIngredient">
                            <Link to="/listIngredientsPage" style={{ textDecoration: 'none', color: 'white' }}>
                                Liste des ingéredients
                            </Link>
                            </Nav.Link>
                        <Nav.Link href="#calculCout">Calcul des coûts</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button onClick={() => SignOut()}>se déconnecter</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default MenuBar;