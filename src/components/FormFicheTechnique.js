import React from "react";
import { Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Tab } from "react-bootstrap";

function FormFicheTechnique() {
    return (
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column" style={{ margin: '10px 30px' }}>
                            <Nav.Item>
                                <Nav.Link eventKey="first">En-tête de la fiche</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Progression de la fiche</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Calcul des coûts</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <br />
                                <h1>En-tête de la fiche : </h1><br />
                                <Form style={{ margin: '10px 30px' }}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nom du plat : </Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Nom de l'auteur : </Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Nombre de couverts : </Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </Form>
                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                                <br />
                                <h1>Progression de la fiche : </h1><br />
                                <Form style={{ margin: '10px 30px' }}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nombre d'étapes : </Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Nom de l'auteur : </Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Nombre de couverts : </Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>


                                    <Form.Select aria-label="Default select example">
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                </Form>
                            </Tab.Pane>

                            <Tab.Pane eventKey="third">

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default FormFicheTechnique;