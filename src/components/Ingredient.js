import React, { Component } from 'react'
import { GoPencil } from 'react-icons/go'
import { AiOutlineDelete } from 'react-icons/ai'
import Modal from './Modal';
import { Form, Button } from "react-bootstrap";
import DeleteIngredient from './DeleteIngredient';
import UpdateIngredient from './UpdateIngredient';

export default class Ingredient extends Component {
      
    render() {
        return (
            <tr >
                <td>{this.props.ing.id}</td>
                <td>{this.props.ing.Iname}</td>
                <td>{this.props.ing.Type}</td>
                <td>{this.props.ing.Quantity} {this.props.ing.Unit}</td>
                <td>
                    <UpdateIngredient id={this.props.id} ing = {this.props.ing}/>
                    <DeleteIngredient id={this.props.id}/>
                </td>
            </tr>
        )
    }
}
