import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { collection, getFirestore } from "firebase/firestore";
import firebase from "../../firebase";
import "./CardFicheTechnique.css"
import Modal from "../Modal";
import IngredientForm from "../IngredientForm";

function CardFicheTechnique() {

    const [enTete, setEnTete] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ficheTech, setFicheTech] = useState(false)

    const ref = firebase.firestore().collection("En-tête fiche technique");

    function getEnTete() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setEnTete(items);
            setLoading(false);
        })
    }

    useEffect(() => {
        getEnTete();
    }, []);

    if (loading) {
        return (
            <h1>Loading...</h1>
        );
    }


    return (
        <div class="cardAcceuil" >
            {enTete.map((elt) => (
                <div>
                    <Modal show={ficheTech} handleClose={() => setFicheTech(false)}>
                        <h1>Fiche Technique : </h1>
                        <h3>nom du plat : {elt.NomPlat}</h3>
                        <h3>nom de l'auteur : {elt.NomAuteur}</h3>
                        <h3>nombre de couverts : {elt.NbCouvert}</h3>
                        <h3>prix total : *calcul du coût total*</h3>
                    </Modal>
                    
                    <Card
                        onClick={() => setFicheTech(true)}
                        bg="primary"
                        key={elt.id}
                        text="Fiche Technique"
                        style={{ width: '18rem', margin: '10px', cursor: "pointer" }}
                        className="mb-2"
                        class="card"
                        onMouseOver="visualiser la fiche"
                        /*onClick={() => alert(elt.NomPlat)}*/
                    >
                        <Card.Header >{elt.NomPlat}</Card.Header>
                        <Card.Body>
                            <Card.Title>Nom du plat : {elt.NomPlat}</Card.Title>
                            <Card.Text>
                                Nom de l'auteur : {elt.NomAuteur}
                            </Card.Text>
                            <Card.Text>
                                Nombre de couvert : {elt.NbCouvert}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default CardFicheTechnique;