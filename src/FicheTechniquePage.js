import React, { useState } from "react";
import EnteteForm from "./components/EnteteForm";
import MenuBar from "./components/MenuBar/MenuBar";
import { Button } from "react-bootstrap";
import ProgressionForm from "./components/ProgressionForm";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import IngredientForm from "./components/IngredientForm";
import Modal from "./components/Modal";


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

function FicheTechniquePage() {

    const [nomPlat, setNomPlat] = useState('');
    const onChangeNomPlatHandler = event => {
        setNomPlat(event.target.value);
    }

    const [nomAuteur, setNomAuteur] = useState('');
    const onChangeNomAuteurHandler = event => {
        setNomAuteur(event.target.value);
    }

    const [nbCouvert, setNbCouvert] = useState('');
    const onChangeNbCouvertHandler = event => {
        setNbCouvert(event.target.value);
    }

    const [inputList, setInputList] = useState([]);


    const [titre, setTitre] = useState('');
    const onChangeTitreHandler = event => {
        setTitre(event.target.value);
    }

    const [description, setDescription] = useState('');
    const onChangeDescriptionHandler = event => {
        setDescription(event.target.value);
    }

    const [duree, setDuree] = useState('');
    const onChangeDureeHandler = event => {
        setDuree(event.target.value);
    }

    const createProgressionForm = event => {
        setInputList(inputList.concat(<ProgressionForm key={inputList.length} 
                                                        titre = {titre} onChangeTitre = {onChangeTitreHandler}
                                                        description = {description} onChangeDescription = {onChangeDescriptionHandler}
                                                        duree = {duree} onChangeDuree = {onChangeDureeHandler}
                                                        />))
    }

    

    const resetForm = () => {
        setNomAuteur('');
        setNomPlat('');
        setNbCouvert('');
    }

    return (
        <div >
            <MenuBar />
                <div>
                <h2 style={{ margin: "30px" }}> En-tête de la fiche : </h2>
                <EnteteForm nomPlat = {nomPlat} onChangeNomPlat = {onChangeNomPlatHandler} 
                            nomAuteur = {nomAuteur} onChangeNomAuteur = {onChangeNomAuteurHandler}
                            nbCouvert = {nbCouvert} onChangeNbCouvert = {onChangeNbCouvertHandler} />

                <hr />

                <h2 style={{ margin: "30px" }}> Progression de la fiche : </h2>

                <Button variant="outline-primary" onClick={createProgressionForm}
                    style={{ marginLeft: "100px", marginRight: "100px", marginBottom:"30px"}}> Ajouter une étape</Button>{' '}
                <br />
                {inputList}
                </div>

                <Button variant="outline-primary" onClick={() => {sendEnteteData(nomPlat, nomAuteur, nbCouvert); resetForm();}}
                    style={{ marginLeft: "100px", marginRight: "100px", marginBottom:"30px"}}>Envoyer la fiche technique</Button>
            


        </div>
    );
}

export default FicheTechniquePage;