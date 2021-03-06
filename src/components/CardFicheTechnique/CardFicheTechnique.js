import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { collection, getFirestore } from "firebase/firestore";
import firebase from "../../firebase";
import "./CardFicheTechnique.css"
import IngredientForm from "../IngredientForm";
import ModalFicheTech from "../ModalFicheTech";
import { Modal } from "react-bootstrap";
import DeleteFicheTech from "../DeleteFicheTech";
import useReactToPrint from 'react-to-print'
import { useRef } from "react";

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

import ReactPDF, { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import FicheTechnique from "../FicheTechnique/FicheTechnique";




function CardFicheTechnique(props) {
    


    const [enTete, setEnTete] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ModalFicheTech, setModalFicheTech] = useState(false)

    const [ModalFicheTechWeb, setModalFicheTechWeb] = useState(false)
    const [Elt, setElt] = useState()

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
                    <Document >
                        <Page size="A4">
                            <View>
                                <Text>Titre de la recette : {elt.NomPlat}{"\n"}{"\n"}{"\n"}</Text>
                                <Text>Nom de l'auteur : {elt.NomAuteur}</Text>
                                <Text>Nombre de couvert : {elt.NbCouvert}{"\n"}{"\n"}</Text>
                                {elt.Etape.map(elt => <View>
                                    <Text>{elt.titre}{"\n"}{"\n"}</Text>
                                    <Text>{elt.description}{"\n"}{"\n"}</Text>
                                    <View>{elt.ingredientsList.map((ing, key) => {
                                        return (<Text>Ingr??dients : {ing} | Q : {elt.quantityList[key]}{"\n"}</Text>);
                                    })}

                                    </View>
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

            <Modal
                show={ModalFicheTechWeb}
                onHide={() => {
                    setModalFicheTechWeb(false)
                }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <FicheTechnique fiche={Elt} style={{marginBottom:'20%'}}/>
                <div class="doNotPrint" >
                    <button style={{marginLeft:'47%', height:'50px', width:'50px'}} onClick={() => {window.print()}} className="BoutonPrint"><LocalPrintshopIcon/> </button>
                </div>
                

            </Modal>



            <div className="searchInputs">
                <input
                    type="text"
                    placeholder="Plat d??sir??.."
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


                                <Card.Header >
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
                                    <div style={{width:'min', marginLeft:'33%', marginBottom:'10px',display : props.visitor}}>
                                        <DeleteFicheTech id={elt[1]}  />
                                    </div>
                                    
                                    
                                    <Button className="printBtn" onClick={() => {
                                        setElt(elt[0])
                                        setModalFicheTechWeb(true)
                                    }}><VisibilityIcon /></Button>
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