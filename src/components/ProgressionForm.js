import React from "react";
import { Form, FloatingLabel, Button, Modal, InputGroup, FormControl } from "react-bootstrap";

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

    return (
        <div style={{ marginLeft: "100px", marginRight: "100px", marginTop: "40px" }}>
            <p> Etape : </p>
            <Form>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Titre"
                    className="mb-3">
                    <Form.Control type="text" placeholder="exemple" />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Description"
                    className="mb-3">
                    <Form.Control type="text" placeholder="exemple" />
                </FloatingLabel>

                <Form.Label>Ingrédients : </Form.Label>
                <Button variant="primary" onClick={() => setModalShow(true)} style={{ marginLeft: "30px" }}>
                    Choisir 
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Form>
        </div>
    );
}

export default ProgressionForm;