import React, { Component } from 'react'
import IngredientsSearchBar from '../IngredientsSearchBar/IngredientsSearchBar';
import DataIngredients from '../../DataIngredients.json'

import AddIcon from '@material-ui/icons/Add';

import Modal from '../Modal';
import { Form, Button } from "react-bootstrap";
import IngredientForm from '../IngredientForm';
import firebase from "../../firebase";
import Ingredients from '../Ingredients/Ingredients';
import './IngredientList.css'

export default class IngredientsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

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
    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        
        return (
            <div>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <div>
                        <IngredientForm />
                    </div>
                </Modal>

                <button className='addIng' onClick={this.showModal}>Ajouter un ingrédient<AddIcon /></button>

                <Ingredients/>

            </div>
        )
    }
}