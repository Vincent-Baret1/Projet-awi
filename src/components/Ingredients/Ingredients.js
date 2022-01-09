import React from 'react'
import { useEffect, useState } from "react";
import Ingredient from '../Ingredient'
import Table from 'react-bootstrap/Table'
import { Form, Button } from "react-bootstrap";
import firebase from "../../firebase";
import IngredientsSearchBar from '../IngredientsSearchBar/IngredientsSearchBar';
import { doc } from 'firebase/firestore';
import './Ingredients.css'
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@material-ui/icons/Search';

export default function Ingredients() {
    const [Ing, setIng] = useState([]);
    const [loading, setLoading] = useState(false);


    const [filteredData, setFilteredData] = useState([]);
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
            setFilteredData(items);
            setLoading(false);
        })
    }


    
    const [IngEntered, setIngEntered] = useState([]);

    const handleFilter = (event) => {

        const searchIng = event.target.value
        setIngEntered(searchIng)

        const newFilter = Ing.filter((value) => {
            return value[0].Iname.toLowerCase().startsWith(searchIng.toLowerCase())
        });
        if (searchIng === "") {
            setFilteredData(Ing);
        }
        else {
            setFilteredData(newFilter);
        }
    };
    const clearInput = () => {
        setIngEntered("");
        setFilteredData(Ing);
    };

    useEffect(() => {
        getIng();
        setFilteredData(Ing);
    }, []);

    if (loading) {
        return (
            <h1>Loading...</h1>
        );
    }
    return (
    <div>
        <div className="searchInputs2">
                <input
                    placeholder='Ingrédient à rechercher'
                    type="text"
                    value={IngEntered}
                    onChange={handleFilter} 
                    />

                {IngEntered.length === 0 ? (
                    <SearchIcon />
                ) :
                    (<CloseIcon
                        id='clearBtn'
                        onClick={clearInput} />)
                }
            </div>
        <Table className='IngredientTable' striped bordered hover>
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
                {filteredData.map((value, key) => {
                    value[0].id = key + 1
                    return (
                        <>
                            <Ingredient ing={value[0]} id={value[1]} />
                        </>

                    );
                })
                }
            </tbody>
        </Table>
    </div>

    )
}
