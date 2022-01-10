import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import firebase from '../firebase'

import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from 'react-bootstrap'

export default function DeleteFicheTech(props) {
    const db = firebase.firestore()
    //const ref = firebase.firestore().collection("Ingrédients");
    const deleteFicheTech = (id) => {
        //alert(id)
        //alert(db.collection("Ingrédients").doc(id).Iname)
        db.collection("Fiche technique").doc(id).delete().then(() => {
            alert("Fiche Technique successfully deleted!");
        }).catch((error) => {
            console.log("Error removing Ingredient: ", error);
        });
    }
    return (
        <div>
            <Button className="deleteBtn" onClick={() => deleteFicheTech(props.id)}><DeleteIcon/></Button>
        </div>
        
    )
}