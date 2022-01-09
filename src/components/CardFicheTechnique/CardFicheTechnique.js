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
import ReactPDF, { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


function CardFicheTechnique() {

    const [enTete, setEnTete] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ModalFicheTech, setModalFicheTech] = useState(false)
    const [Items, setItems] = useState()

    const [filteredData, setFilteredData] = useState(enTete);

    const ref = firebase.firestore().collection("Fiche technique");



    function getFiche() {
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

    const [modalFiche, setModalFiche] = useState();


    function createModal(elt) {
        setModalFiche(
            <Modal
                show={ModalFicheTech}
                onHide={() => { setModalFicheTech(false) }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <PDFViewer width='800px' height='600px'>
                    <Document>
                        <Page size="A4">
                            <View>
                                <Text>Titre de la recette : {elt.NomPlat}{"\n"}{"\n"}{"\n"}</Text>
                                <Text>Nom de l'auteur : {elt.NomAuteur}</Text>
                                <Text>Nombre de couvert : {elt.NbCouvert}{"\n"}{"\n"}</Text>
                                {elt.Etape.map(elt => <View>
                                    <Text>{elt.titre}{"\n"}{"\n"}</Text>
                                    <Text>{elt.description}{"\n"}{"\n"}</Text>
                                    <View>{elt.ingredientsList.map(
                                        ing =>  <Text>Ingrédients : {ing}{"\n"}</Text>
                                    )}</View>
                                    <Text>{elt.quantityList.map(
                                        quant => <Text>Quantité : {quant}{"\n"}</Text>
                                    )}{"\n"}{"\n"}</Text>
                                    </View>)}
                            </View>
                        </Page>
                    </Document>
                </PDFViewer>
            </Modal>
        )
    }

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
        getFiche();
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


            {ModalFicheTech == true && modalFiche}

            <div className="searchInputs">
                <input
                    type="text"
                    placeholder="Plat désiré.."
                    value={EnteteEntered}
                    onChange={handleFilter} />

                {EnteteEntered.length === 0 ? (
                    <SearchIcon />
                ) :
                    (<CloseIcon
                        id='clearBtn'
                        onClick={clearInput} />)
                }
            </div>
            {
                filteredData.map((elt) => {

                    return (
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
                                    createModal(elt[0])
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