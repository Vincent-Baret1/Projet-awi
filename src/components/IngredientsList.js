import React, { Component } from 'react'
import Ingredient from './Ingredient'
import Table from 'react-bootstrap/Table'
export default class IngredientsList extends Component {
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
                        <Ingredient />
                    </tbody>
                </Table>   
            </div>
        )
    }
}
