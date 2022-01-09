import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { collection, getFirestore } from "firebase/firestore";
import firebase from "../../firebase";
import "./CardFicheTechnique.css"
import IngredientForm from "../IngredientForm";
import ModalFicheTech from "../ModalFicheTech";
import { Modal } from "react-bootstrap";
import DeleteFicheTech from "../DeleteFicheTech";

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@mui/icons-material/Edit';


function CardFicheTechnique() {

    const [enTete, setEnTete] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ModalFicheTech, setModalFicheTech] = useState(false)
    const [Items, setItems] = useState()

    const [filteredData, setFilteredData] = useState(enTete);

    const ref = firebase.firestore().collection("En-tête fiche technique");



    function getEnTete() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push([doc.data(), doc.id]);
            });
            setEnTete(items);
            setFilteredData(items);
            setLoading(false);
        })
    }
    //à faire une fonction qui récupère la fiche technique de la base de données et le renvoie dans un modal

    function getFicheTech(NomPlat) {

    }
    //


    const [EnteteEntered, setEnteteEntered] = useState([]);

    const handleFilter = (event) => {

        const searchEntete = event.target.value
        setEnteteEntered(searchEntete)

        const newFilter = enTete.filter((value) => {
            return value[0].NomPlat.toLowerCase().startsWith(searchEntete.toLowerCase())
        });
        if (searchEntete === "") {
            setFilteredData(enTete);
        }
        else {
            setFilteredData(newFilter);
        }
    };
    const clearInput = () => {
        setFilteredData(enTete);
        setEnteteEntered("");
    };

    useEffect(() => {
        getEnTete();
        setFilteredData(enTete);
    }, []);

    if (loading) {
        return (
            <h1>Loading...</h1>
        );
    }


    return (
        <div class="cardAcceuil"
            style={{
                position: 'relative',
                marginLeft: '15%',
                marginRight: '15%'
            }}>

            <Modal
                show={ModalFicheTech}
                onHide={() => { setModalFicheTech(false) }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <div>
                    <p>
                        Fiche technique à inserer ici
                    </p>
                </div>


            </Modal>

            <div className="searchInputs">
                <input
                    type="text"
                    value={EnteteEntered}
                    onChange={handleFilter} />

                {filteredData.length === 0 ? (
                    <SearchIcon />
                ) :
                    (<CloseIcon
                        id='clearBtn'
                        onClick={clearInput} />)
                }
            </div>
            {
                filteredData.map((elt) => {

                    return(
                        <div>
                            <Card
                                props={elt[0]}
                                bg="white"
                                key={elt[0].id}
                                text="Fiche Technique"
                                style={{ width: '18rem', margin: '10px' }}
                            //className="mb-2"
                            //class="card"
    
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
                                    <DeleteFicheTech id={elt[1]} />
                                    <Button className="modifyBtn" ><EditIcon /></Button>
                                </Card.Footer>
                            </Card>
                        </div>
                    )
                }
                    )}
        </div>
    );
}

export default CardFicheTechnique;