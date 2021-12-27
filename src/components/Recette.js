import React, { Component } from 'react'

import IngredientsSearchBar from './IngredientsSearchBar/IngredientsSearchBar';
import DataIngredients from '../DataIngredients.json'
import AddIcon from '@material-ui/icons/Add';
import Modal from './Modal';
import { Form, Button } from "react-bootstrap";
import IngredientForm from './IngredientForm';
import firebase from "../firebase";
import Ingredients from './Ingredients';

export default class Recette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

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
                        <IngredientForm NomPlat={"Recette1"} />
                    </div>
                </Modal>

                <button style = {{width : "25%", float : "left"}} onClick={this.showModal}>Ajouter un ingrédient<AddIcon /></button>

            </div>
        )
    }
}
