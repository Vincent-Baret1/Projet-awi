import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import firebase from '../firebase'

export default function DeleteIngredient(props) {
    const ref = firebase.firestore().collection("Ingrédients");
    function deleteIng() {
        ref.doc(props.id).delete();
    }
    return (
        <button onClick={deleteIng()}>Supprimer <AiOutlineDelete /> </button>
    )
}
