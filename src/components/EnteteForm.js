import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

class EnteteForm extends React.Component {

    render() {

        const {nomPlat, onChangeNomPlat} = this.props;
        const {nomAuteur, onChangeNomAuteur} = this.props;
        const {nbCouvert, onChangeNbCouvert} = this.props;

        return (
            <div>
                <Form style={{ marginLeft: "100px", marginRight: "100px" }}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Nom du plat"
                        className="mb-3">
                        <Form.Control type="text" name="nomPlat" placeholder="exemple" value={nomPlat} onChange={onChangeNomPlat} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Nom de l'auteur"
                        className="mb-3">
                        <Form.Control type="text" name="nomAuteur" placeholder="exemple" value={nomAuteur} onChange={onChangeNomAuteur} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Nombre de couvert"
                        className="mb-3">
                        <Form.Control type="text" name="nbCouvert" placeholder="exemple" value={nbCouvert} onChange={onChangeNbCouvert} />
                    </FloatingLabel>
                </Form>
            </div>
        );
    }
}

export default EnteteForm;