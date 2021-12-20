import React, { Component } from 'react'
import Ingredient from './Ingredient'
import Table from 'react-bootstrap/Table'
export default class IngredientsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            }
        };
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
                        <Ingredient
                            ing ={this.state.ing1}/>
                        <Ingredient
                            ing ={this.state.ing2}/>
                    </tbody>
                </Table>   
            </div>
        )
    }
}
