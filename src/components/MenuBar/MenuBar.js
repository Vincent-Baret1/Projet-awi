import React, { Component, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { logout } from "../../auth";
import { useNavigate } from "react-router-dom";
import './MenuBar.css'

import LogoutIcon from '@mui/icons-material/Logout';

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
            <Navbar className="Nav" bg="dark" variant="dark">
                <Container>

                    <Link to="/App">
                        <Navbar.Brand className="title" href="#home">Chef</Navbar.Brand>
                    </Link>

                    <Nav className="me-auto">

                        <Nav.Link href="#FicheTechnique">
                            <Link to="/FicheTechniquePage" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
                                Fiche technique
                            </Link>
                        </Nav.Link>

                        <Nav.Link href="#ListIngredient">
                            <Link to="/listIngredientsPage" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
                                Liste des ingéredients
                            </Link>
                        </Nav.Link>

                        <Nav.Link href="#calculCout" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
                            <Link to="/PageCalculCouts" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
                                
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Button style={{ color: 'black', background: 'antiquewhite', border: '10px' }} onClick={() => SignOut()}><LogoutIcon/></Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default MenuBar;