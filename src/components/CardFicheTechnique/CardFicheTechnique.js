import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { collection, getFirestore } from "firebase/firestore";
import firebase from "../../firebase";
import "./CardFicheTechnique.css"
import IngredientForm from "../IngredientForm";
import ModalFicheTech from "../ModalFicheTech";
import Modal from "../Modal";
import DeleteFicheTech from "../DeleteFicheTech";

import EditIcon from '@mui/icons-material/Edit';


function CardFicheTechnique() {

    const [enTete, setEnTete] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ModalFicheTech, setModalFicheTech] = useState(false)
    const [Items, setItems] = useState()

    const ref = firebase.firestore().collection("En-tête fiche technique");

    

    function getEnTete() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push([doc.data(), doc.id]);
            });
            setEnTete(items);
            setLoading(false);
        })
    }
    //à faire une fonction qui récupère la fiche technique de la base de données et le renvoie dans un modal

    function getFicheTech(NomPlat) {

    }
    //

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
                    <Modal show={ModalFicheTech}
                        handleClose={() => setModalFicheTech(false)}>
                        <h1> {elt[0].NomAuteur} </h1>
                    </Modal>

                    <Card
                        bg="white"
                        key={elt[0].id}
                        text="Fiche Technique"
                        style={{ width: '18rem', margin: '10px' }}
                        //className="mb-2"
                        //class="card"
                        onMouseOver="visualiser la fiche"
                        /*onClick={() => alert(elt[0].NomPlat)}*/
                    >
                        <Card.Header onClick={() => {
                            setModalFicheTech(true)
                        }}>
                            {elt[0].NomPlat}
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Nom du plat : {elt[0].NomPlat}</Card.Title>
                            <Card.Text>
                                Nom de l'auteur : {elt[0].NomAuteur}
                            </Card.Text>
                            <Card.Text>
                                Nombre de couvert : {elt[0].NbCouvert}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <DeleteFicheTech id = {elt[1]}/>
                            <Button className="modifyBtn" ><EditIcon /></Button>
                        </Card.Footer>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default CardFicheTechnique;