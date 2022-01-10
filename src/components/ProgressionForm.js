import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { Component, useEffect, useState } from "react";
import { Form, FloatingLabel, Button, Modal, InputGroup, FormControl, Card, Table } from "react-bootstrap";

import Ingredients from "./Ingredients/Ingredients";
import IngredientsSearchBar from "./IngredientsSearchBar/IngredientsSearchBar";
import firebase from "../firebase";
import { create } from "@mui/material/styles/createTransitions";
import { Send } from "@material-ui/icons";
import EnteteForm from "./EnteteForm";
import MenuBar from "./MenuBar/MenuBar";
import Etape from "./Etape/Etape";
import CheckIcon from '@mui/icons-material/Check';



const db = getFirestore();
async function AddEtape(titre, description, duree, IngList, QuantitiesList) {
    try {
        alert("on a essaye d'ajouter")
        const docRef = await addDoc(collection(db, "Etapes"), {
            Titre: titre,
            Description: description,
            Durée: duree,
            ListIng: IngList,
            ListQuantities: QuantitiesList
        }
        );
        alert('etape bien ajoutée');
    } catch (e) {
        console.error("Error adding document : ", e);
    }
}

async function sendAllEtape(nomPlat, nomAuteur, nbCouvert, listEtape) {
    try {
        alert("ajout en cours")
        const docRef = await addDoc(collection(db, "Fiche technique"), {
            NomPlat: nomPlat,
            NomAuteur: nomAuteur,
            NbCouvert: nbCouvert,
            Etape: listEtape
        }
        );
        alert('etapes bien ajoutée');
    } catch (e) {
        console.error("Error adding document : ", e);
    }
}


const ref = firebase.firestore().collection("Ingrédients");


function ProgressionForm() {
    const [modalShow, setModalShow] = React.useState(false);

    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [duree, setDuree] = useState();

    const [IngList, setIngList] = useState(new Array());
    const [QuantitiesList, setQuantitiesList] = useState(new Array());

    const [ingQuantity, setIngQuantity] = useState();




    function AddIngsToFichTech() {
        const [Ing, setIng] = useState([]);
        const [loading, setLoading] = useState(false);

        const [ShowModal, setShowModal] = useState(false);
        const [Quantity, setQuantity] = useState(0);
        const [AddedIng, setAddedIng] = useState();

        class QuantityAdd extends Component {
            constructor(props) {
                super(props);
                this.state = { Q: 0 };

                this.handleChange = this.handleChange.bind(this);
            }

            handleChange(event) {
                this.setState({
                    [event.target.name]: event.target.value,
                });
            }

            resetForm() {
                this.setState({ Q: 0 });
            }

            render() {
                return (
                    <Modal
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Form>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Quantité de l'ingrédient choisi "
                                className="mb-3">
                                <Form.Control type="text" name="Q" placeholder={this.props.name} value={this.state.Q} onChange={this.handleChange} />
                            </FloatingLabel>
                            <Button onClick={() => {
                                //alert(IngList)
                                //alert(QuantitiesList)
                                IngList.push(this.props.name)
                                setIngList(IngList)
                                QuantitiesList.push(this.state.Q)
                                setQuantitiesList(QuantitiesList)
                            }}>
                                validate
                            </Button>
                        </Form>
                    </Modal>
                )
            }
        }

        const ref = firebase.firestore().collection("Ingrédients");
        
        function getIng() {
            setLoading(true);
            ref.onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push([doc.data(), doc.id]);
                });
                setIng(items.sort((a, b) => {
                    if (a[0].Iname.toLowerCase() < b[0].Iname.toLowerCase()) return -1;
                    if (a[0].Iname.toLowerCase() > b[0].Iname.toLowerCase()) return 1;
                    return 0;
                }));
                setLoading(false);

            })
        }

        useEffect(() => {
            getIng();
        }, []);

        if (loading) {
            return (
                <h1>Loading...</h1>
            );
        }



        return (
            <div style={{ height: 'max-content' , width: 'max-content'}}>
                <div style={{ width: 'auto' }}>
                    <IngredientsSearchBar
                        placeholder={"ingrédient"}
                        data={Ing} />
                </div>

                <Table style={{marginLeft:'10%'}} striped bordered hover >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nom</th>
                            <th>Catégorie</th>
                            <th>Quantité Disponible</th>
                            <th>Coût Unitaire</th>
                            <th></th>
                        </tr>
                    </thead>
                    <QuantityAdd
                        name={AddedIng}
                        quantity={ingQuantity}
                        show={ShowModal}
                        onHide={() => setShowModal(false)}
                    />
                    <tbody >
                        {Ing.map((value, key) => {
                            value[0].id = key + 1
                            let ing = value[0]
                            let id = value[1]
                            return (
                                <>

                                    <tr >
                                        <td>{ing.id}</td>
                                        <td>{ing.Iname}</td>
                                        <td>{ing.Type}</td>
                                        <td>{ing.Quantity} {ing.Unit}</td>
                                        <td>{ing.Cu} € </td>
                                        <td>
                                            {ing.Quantity > 0 && <Button onClick={() => {
                                                setShowModal(true)
                                                setAddedIng(ing.Iname)
                                                setIngQuantity(ing.Quantity)
                                            }}> Ajouter </Button>}
                                        </td>
                                    </tr>
                                </>

                            );
                        })
                        }
                    </tbody>
                </Table>

            </div>
        )

    }

    const [Etapes, setEtapes] = useState([]);
    const [ModalEtapes, setModalEtapes] = useState(false);

    const [listEtape, setListEtape] = useState([]);

    const [listAffichage, setListAffichage] = useState([]);

    const [listLabels, setListLabels] = useState([]);

    const [SupprimerBtn, setSupprimerBtn] = useState('none');
    

    const [nomPlat, setNomPlat] = useState("");
    const onChangeNomPlat = event => {
        setNomPlat(event.target.value);
    }

    const [nomAuteur, setNomAuteur] = useState("");
    const onChangeNomAuteur = event => {
        setNomAuteur(event.target.value);
    }

    const [nbCouvert, setNbCouvert] = useState("");
    const onChangeNbCouvert = event => {
        setNbCouvert(event.target.value);
    }


    function onClickAjout(titre, description, duree, IngList, QuantitiesList) {
        setListEtape(listEtape.concat({
            titre: titre,
            description: description,
            duree: duree,
            ingredientsList: IngList,
            quantityList: QuantitiesList
        }))
        setListLabels(listLabels.concat(titre))
        ;
        
    setListAffichage(listAffichage.concat(
        <Card bg="dark" text="white"
                style={{ widht: '50%', margin: '10px', padding: '10px' }}
                className="mb-2">
                <Card.Title>étape numéro {listAffichage.length + 1} - Titre de l'étape : {titre}</Card.Title>
                <Card.Text>Description de l'étape : {description}</Card.Text>
                <Card.Text>Durée de l'étape : {duree}</Card.Text>
                <Card.Text>Ingrédients et Quantités pour cette étape: 
                    {IngList.map((ing,key) => {    
                        return ( <p>ing:{ing} | Q : {QuantitiesList[key]}</p> );
                        })}</Card.Text>
                <Button variant="light" style={{ width: '200px' }}
                onClick={()=>{

                        deleteLastEtape(-1)  

                    }}>
                        Supprimer la dernière étape                    
                        </Button>
            </Card>
            
        ));

        setTitre("");
        setDescription("");
        setDuree("");
        setIngList([]);
        setQuantitiesList([]);

    }

    function deleteLastEtape(indice) {
        listAffichage.slice(indice,1)
        setListAffichage(listAffichage)
        listEtape.slice(indice,1)
        setListEtape(listEtape)
        //alert(listEtape.map((elem)=>elem.titre))
    }

    function resetAll() {
        setListAffichage([]);
        setNomPlat("");
        setNomAuteur("");
        setNbCouvert("");
    }

    const [loading, setLoading] = useState(false);
    const ref = firebase.firestore().collection("Etapes");
    function getEtapes() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push([doc.data(), doc.id]);
            });
            setEtapes(items);
            setLoading(false);


        })
    }

    useEffect(() => {
        getEtapes();
    }, []);

    if (loading) {
        return (
            <h1>Loading...</h1>
        );
    }


    return (
        <div>
            <MenuBar />
            <Card style={{ marginLeft: "100px", marginRight: "100px", marginTop: "40px", marginBottom: "30px", padding: "20px", backgroundColor: 'rgb(243, 241, 241)', borderRadius: '2%' }}>
                <Form>
                    <h1>En-tête de la fiche :</h1><br />
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
                    <h1>étape de la fiche :</h1><br />

                    <Button variant="outline-dark"
                        onClick={() => {
                            setModalEtapes(true)
                        }}
                        style={{ marginLeft: "100px", marginRight: "100px", marginBottom: "30px" }}> Sélectionner une etape existante</Button>{' '}
                    <br />


                    <Modal
                        show={ModalEtapes}
                        handleClose={() => setModalEtapes(false)}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Button onClick={() => setModalEtapes(false)} variant="primary">Close</Button>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            overflowX: 'hidden',
                            overflowY: 'auto'
                        }}>   
                            {
                                Etapes.map((value, key) => {
                                    if (value[0].ListIng == null) {
                                        return (
                                            <h6>no title</h6>
                                        );
                                    }
                                    else {
                                        return <div><Etape Etape={value[0]}></Etape><Button onClick={() => onClickAjout(value[0].Titre, 
                                            value[0].Description, value[0].Durée, value[0].ListIng, value[0].ListQuantities)}>Choisir cette étape <CheckIcon /></Button></div>

                                    }

                                })
                            }
                        </div>
                    </Modal>


                    <FloatingLabel
                        controlId="floatingInput"
                        label="Titre"
                        className="mb-3">
                        <Form.Control name="titre" type="text" placeholder="exemple" value={titre} onChange={e => setTitre(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Description"
                        className="mb-3">
                        <Form.Control name="description" type="text" placeholder="exemple" value={description} onChange={e => setDescription(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="durée"
                        className="mb-3">
                        <Form.Control name="durée" type="text" placeholder="exemple" value={duree} onChange={e => setDuree(e.target.value)} />
                    </FloatingLabel>

                    <Form.Label>Ingrédients : </Form.Label>
                    <Button variant="outline-dark"
                        onClick={() => {
                            setModalShow(true)
                        }}
                        style={{ marginLeft: "30px" }}>
                        Choisir un ingrédient
                    </Button>

                    <Button variant="dark"
                        onClick={() => {


                            AddEtape(titre, description, duree, IngList, QuantitiesList)
                            onClickAjout(titre, description, duree, IngList, QuantitiesList)

                        }}
                        style={{ marginLeft: "30px" }}>
                        Ajouter cette étape
                    </Button>
                    <Modal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <AddIngsToFichTech />
                    </Modal>
                    <br />
                    <br />
                    <ul>
                        {IngList.map(ing => <li>{ing}</li>)}
                    </ul>
                    {listAffichage}

                    <Button variant="dark" onClick={() => { sendAllEtape(nomPlat, nomAuteur, nbCouvert, listEtape); resetAll() }} style={{ marginLeft: "30px" }}>
                        Tout envoyer
                    </Button>
                </Form>
            </Card>
        </div>
    );

}

export default ProgressionForm;