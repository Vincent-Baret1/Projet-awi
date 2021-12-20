import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

class EnteteForm extends React.Component {
    render() {
        return (
            <div>
                <Form style={{marginLeft:"100px", marginRight:"100px"}}>
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Nom du plat"
                    className="mb-3">
                        <Form.Control type="text" placeholder="exemple" />
                    </FloatingLabel>

                    <FloatingLabel
                    controlId="floatingInput"
                    label="Nom de l'auteur"
                    className="mb-3">
                        <Form.Control type="text" placeholder="exemple" />
                    </FloatingLabel>

                    <FloatingLabel
                    controlId="floatingInput"
                    label="Nombre de couvert"
                    className="mb-3">
                        <Form.Control type="text" placeholder="exemple" />
                    </FloatingLabel>
                </Form>
            </div>
        );
    }
}

export default EnteteForm;