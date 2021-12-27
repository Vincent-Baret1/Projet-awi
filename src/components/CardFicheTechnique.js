import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { collection, getFirestore } from "firebase/firestore";
import firebase from "../firebase";
import "./CardFicheTechnique.css"

function CardFicheTechnique() {

    const [enTete, setEnTete] = useState([]);
    const [loading, setLoading] = useState(false);


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
        <div class="cardAcceuil">
            {enTete.map((elt) => (<Card
                bg="primary"
                key={elt.id}
                text="Fiche Technique"
                style={{ width: '18rem', margin: '10px' }}
                className="mb-2"
                
            >
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>Nom du plat : {elt.NomPlat}</Card.Title>
                    <Card.Text>
                        Nom de l'auteur : {elt.NomAuteur}
                    </Card.Text>
                    <Card.Text>
                        Nombre de couvert : {elt.NbCouvert}
                    </Card.Text>
                </Card.Body>
            </Card>))}
        </div>
    );
}

export default CardFicheTechnique;