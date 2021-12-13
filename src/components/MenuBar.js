import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function MenuBar() {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>

                    <Link to="/">
                        <Navbar.Brand href="#home">Projet-AWI</Navbar.Brand>
                    </Link>

                    <Nav className="me-auto">

                        <Nav.Link href="#Login">
                            <Link to="/LoginPage" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
                        </Nav.Link>

                        <Nav.Link href="#FicheTechnique">
                            <Link to="/FicheTechniquePage" style={{ textDecoration: 'none', color: 'white' }}>
                                Fiche technique
                            </Link>
                        </Nav.Link>
                        <Nav.Link href="#ListIngredient">Liste des ingéredients</Nav.Link>
                        <Nav.Link href="#calculCout">Calcul des coûts</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default MenuBar;