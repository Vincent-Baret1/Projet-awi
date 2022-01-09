import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { Component, useEffect, useState } from "react";
import { Form, FloatingLabel, Button, Modal, InputGroup, FormControl, Card, Table } from "react-bootstrap";

import Ingredients from "./Ingredients/Ingredients";
import IngredientsSearchBar from "./IngredientsSearchBar/IngredientsSearchBar";
import firebase from "../firebase";



const db = getFirestore();
async function AddEtape(titre, description, duree, IngList, QuantitiesList) {
    try {
        alert("on a essaye d'ajouter")
        const docRef = await addDoc(collection(db, "Etapes"), {
            Titre: titre,
            Description: description,
            Durée: duree,
            ListIng: IngList,
            ListQuantities : QuantitiesList
        }
        );
        alert('etape bien ajoutée');
    } catch (e) {
        console.error("Error adding document : ", e);
    }
}

function ProgressionForm() {
    const [modalShow, setModalShow] = React.useState(false);
    const [cardShow, setCardShow] = React.useState(true);

    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [duree, setDuree] = useState();

    const [IngList, setIngList] = useState(new Array());
    const [QuantitiesList, setQuantitiesList] = useState(new Array());


    function AddIngsToFichTech() {
        const [Ing, setIng] = useState([]);
        const [loading, setLoading] = useState(false);

        const [ShowModal, setShowModal] = useState(false);
        const [Quantity, setQuantity] = useState();
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
                                IngList.push(this.props.name)
                                setIngList(IngList)
                                QuantitiesList.push(this.state.Q)
                                setQuantitiesList(QuantitiesList)
                                //alert(IngList)
                                //alert(QuantitiesList)
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
            <div style={{ height: 'max-content' }}>
                <div style={{ width: 'auto' }}>
                    <IngredientsSearchBar
                        placeholder={"Rechrche d'ingrédient"}
                        data={Ing} />
                </div>

                <Table className='IngredientTable' striped bordered hover >
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
                                            <Button onClick={() => {
                                                setShowModal(true)
                                                setAddedIng(ing.Iname)
                                            }}> Ajouter </Button>
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

    if (cardShow == true) {
        return (
            <Card style={{ marginLeft: "100px", marginRight: "100px", marginTop: "40px", marginBottom: "30px", padding: "20px" }}>
                <p> Etape : </p>
                <Form>
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
                    <Button variant="primary"
                        onClick={() => {
                            setModalShow(true)
                        }}
                        style={{ marginLeft: "30px" }}>
                        Choisir
                    </Button>

                    <Button variant="primary"
                        onClick={() => {

                            alert(IngList)
                            alert(QuantitiesList)
                            AddEtape(titre, description, duree, IngList, QuantitiesList)


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
                    <Button variant="primary" onClick={() => setCardShow(false)} style={{ marginLeft: "30px" }}>
                        Supprimer cette étape
                    </Button>
                </Form>
            </Card>
        );
    } else {
        return (<div></div>);
    }
}

export default ProgressionForm;