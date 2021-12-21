import React, { Component } from 'react'
import Ingredient from './Ingredient'
import Table from 'react-bootstrap/Table'
import IngredientsSearchBar from './IngredientsSearchBar';
import DataIngredients from '../DataIngredients.json'
export default class IngredientsList extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            ing1: {
                id: 1,
                Iname: "chocolat",
                Type: "sucreries2",
                Quantity : 2000,
                Unit : "Kg"
            },
            ing2: {
                id: 2,
                Iname: "poulet",
                Type: "viande",
                Quantity : 100,
                Unit : "Kg"
            },
            ing3: {
                id: 3,
                Iname: "huile d'olive",
                Type: "huile",
                Quantity : 70,
                Unit : "Litres"
            }
        };*/
    }
    
    render() {
        return (
            <div>
                
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nom</th>
                            <th>Catégorie</th>
                            <th>Quantité</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {DataIngredients.map((value, key) => {
                        return (
                            <Ingredient
                            ing ={value}/>
                        );
                    })
                    }
                    </tbody>
                </Table>
                <IngredientsSearchBar placeholder ={"ingredient you're looking for"} 
                data = {DataIngredients}/> 
                 
            </div>
        )
    }
}
