import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import firebase from '../firebase'

import Delete from "@mui/icons-material/Delete";
import { color } from '@mui/system';

export default function DeleteIngredient(props) {
    const db = firebase.firestore()
    //const ref = firebase.firestore().collection("Ingrédients");
    const deleteIng = (id) => {
        //alert(id)
        //alert(db.collection("Ingrédients").doc(id).Iname)
        db.collection("Ingrédients").doc(id).delete().then(() => {
            alert("Ingredient successfully deleted!");
        }).catch((error) => {
            console.log("Error removing Ingredient: ", error);
        });
    }
    return (
        <button onClick={() => deleteIng(props.id)} > <Delete /> </button>
    )
}
