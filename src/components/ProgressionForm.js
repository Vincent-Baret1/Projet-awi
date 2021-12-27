import React, { useState } from "react";
import { Form, FloatingLabel, Button, Modal, InputGroup, FormControl, Card } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Choisir des ingrédients :
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Check
                        type="checkbox"
                        id="default-checkbox"
                        label="chocolat"
                    />

                    <Form.Check
                        type="checkbox"
                        id="default-checkbox"
                        label="farine"
                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


function ProgressionForm() {
    const [modalShow, setModalShow] = React.useState(false);
    const [cardShow, setCardShow] = React.useState(true);

    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [duree, setDuree ] = useState();
    if (cardShow == true) {
        return (
            <Card style={{ marginLeft: "100px", marginRight: "100px", marginTop: "40px", marginBottom:"30px", padding: "20px" }}>
                <p> Etape : </p>
                <Form>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Titre"
                        className="mb-3">
                        <Form.Control name="titre" type="text" placeholder="exemple" value={titre} onChange={e => setTitre(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Description"
                        className="mb-3">
                        <Form.Control name="description" type="text" placeholder="exemple" value={description} onChange={e => setDescription(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="durée"
                        className="mb-3">
                        <Form.Control name="durée" type="text" placeholder="exemple" value={duree} onChange={e => setDuree(e.target.value)} />
                    </FloatingLabel>

                    <Form.Label>Ingrédients : </Form.Label>
                    <Button variant="primary" onClick={() => setModalShow(true)} style={{ marginLeft: "30px" }}>
                        Choisir
                    </Button>

                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <br />
                    <br />
                    <Button variant="primary" onClick={() => setCardShow(false)} style={{ marginLeft: "30px" }}>
                        Supprimer cette étape
                    </Button>
                </Form>
            </Card>
        );
    } else {
        return (<div></div>);
    }
}

export default ProgressionForm;