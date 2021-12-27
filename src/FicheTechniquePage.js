import React, { useState } from "react";
import EnteteForm from "./components/EnteteForm";
import MenuBar from "./components/MenuBar";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import ProgressionForm from "./components/ProgressionForm";
import IngredientsList from "./components/IngredientsList";
import Recette from "./components/Recette";


function FicheTechniquePage() {
    const [inputList, setInputList] = useState([]);

    const createProgressionForm = event => {
        setInputList(inputList.concat(<ProgressionForm key={inputList.length} />))
    }

    return (
        <div >
            <MenuBar />
            <div style={{
                margin:"10px",
                width: "48%", float: "right", 
                borderWidth: "5px",
                borderStyle: "double",
                borderColor: "blue",
                borderRadius: "10px"
            }}>
                <h2 style={{ margin: "30px" }}> En-tête de la fiche : </h2>
                <EnteteForm />

                <hr />

                <h2 style={{ margin: "30px" }}> Progression de la fiche : </h2>

                <Button variant="outline-primary" onClick={createProgressionForm}
                    style={{ marginLeft: "100px", marginRight: "100px", marginBottom:"30px"}}> Ajouter une étape</Button>{' '}
                <br />
                {inputList}
            </div>
            <div style={{
                margin:"10px",
                width: "48%", float: "left", 
                borderWidth: "5px",
                borderStyle: "double",
                borderColor: "blue",
                borderRadius: "10px"
            }}>
                <Recette />
            </div>


        </div>
    );
}

export default FicheTechniquePage;