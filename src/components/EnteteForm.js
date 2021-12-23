import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const db = getFirestore();

async function sendEnteteData(nomPlat, nomAuteur, nbCouvert) {
    try {
        const docRef = await addDoc(collection(db, "En-tête fiche technique"), {
            NomPlat: nomPlat,
            NomAuteur: nomAuteur,
            NbCouvert: nbCouvert
        });
        alert("En-tête ajouté à la base");
    } catch (e) {
        console.error("Error adding document : ", e);
    }
}

class EnteteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nomPlat: '', nomAuteur: '', nbCouvert: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    resetForm() {
        this.setState({nomPlat:'', nomAuteur:'', nbCouvert:''});
    }

    render() {

        const nomPlat = this.state.nomPlat;
        const nomAuteur = this.state.nomAuteur;
        const nbCouvert = this.state.nbCouvert;

        return (
            <div>
                <Form style={{ marginLeft: "100px", marginRight: "100px" }}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Nom du plat"
                        className="mb-3">
                        <Form.Control type="text" name="nomPlat" placeholder="exemple" value={this.state.nomPlat} onChange={this.handleChange} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Nom de l'auteur"
                        className="mb-3">
                        <Form.Control type="text" name="nomAuteur" placeholder="exemple" value={this.state.nomAuteur} onChange={this.handleChange} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Nombre de couvert"
                        className="mb-3">
                        <Form.Control type="text" name="nbCouvert" placeholder="exemple" value={this.state.nbCouvert} onChange={this.handleChange} />
                    </FloatingLabel>

                    <Button variant="primary" onClick={() => {sendEnteteData(this.state.nomPlat, this.state.nomAuteur, this.state.nbCouvert); this.resetForm();}}>
                        Envoyer
                    </Button>
                </Form>
            </div>
        );
    }
}

export default EnteteForm;