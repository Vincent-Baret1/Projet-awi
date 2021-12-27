import React from 'react'
import { useEffect, useState } from "react";
import Ingredient from './Ingredient'
import Table from 'react-bootstrap/Table'
import { Form, Button } from "react-bootstrap";
import firebase from "../firebase";
import IngredientsSearchBar from './IngredientsSearchBar/IngredientsSearchBar';
import { doc } from 'firebase/firestore';

export default function Ingredients() {
    const [Ing, setIng] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("Ingrédients");
    function getIng() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push([doc.data(), doc.id]);
            });
            setIng(items.sort((a, b) => {
                if(a[0].Iname.toLowerCase() < b[0].Iname.toLowerCase()) return -1;
                if(a[0].Iname.toLowerCase() > b[0].Iname.toLowerCase()) return 1;
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
    return (<div>
        <IngredientsSearchBar
                    placeholder={"ingredient you're looking for"}
                    data={Ing} />
            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nom</th>
                            <th>Catégorie</th>
                            <th>Quantité</th>
                            <th>Coût Unitaire</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Ing.map((value, key) => {
                            value[0].id = key +1
                                return (
                                    <>
                                    <Ingredient
                                        ing={value[0]} id = {value[1]}/>
                                    </>
                                    
                                );                       
                        })
                        }
                    </tbody>
                </Table>
    </div>
        
    )
}
