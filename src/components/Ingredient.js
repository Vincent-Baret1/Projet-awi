import React, { Component } from 'react'
import { GoPencil } from 'react-icons/go'
import { AiOutlineDelete } from 'react-icons/ai'
import Modal from './Modal';
import { Form, Button } from "react-bootstrap";
import DeleteIngredient from './DeleteIngredient';

export default class Ingredient extends Component {
    constructor() {
        super();
        this.state = {
          show: false,
          deleted: false
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
            <tr >
                <td>{this.props.ing.id}</td>
                <td>{this.props.ing.Iname}</td>
                <td>{this.props.ing.Type}</td>
                <td>{this.props.ing.Quantity} {this.props.ing.Unit}</td>
                <td>
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                        <div>
                            <Form style={{ margin: '30px 30px' }}>
                                <Form.Label placeholder={this.props.ing.Iname}>Nom</Form.Label>
                                <Form.Control placeholder={this.props.ing.Iname} />

                                <Form.Label placeholder={this.props.ing.Iname}>Type</Form.Label>
                                <Form.Control placeholder={this.props.ing.Type} />

                                <Form.Label placeholder={this.props.ing.Iname}>Quantity</Form.Label>
                                <Form.Control placeholder={this.props.ing.Quantity} />

                                <Form.Label placeholder={this.props.ing.Iname}>Unit</Form.Label>
                                <Form.Control placeholder={this.props.ing.Unit} />
                                <Button type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Modal>
                    <button onClick={this.showModal}>
                            Modifier <GoPencil />
                            </button>
                    <DeleteIngredient id={this.props.id}/>
                </td>
            </tr>
        )
    }
}
