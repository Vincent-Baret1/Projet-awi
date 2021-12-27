import React, { Component } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import firebase from '../firebase'
import { GoPencil } from 'react-icons/go'
import Modal from './Modal';
import { Form, Button } from "react-bootstrap";
const db = firebase.firestore()
function changeIng(newIname, newType, newQuantity, newUnit, newCu, id) {
    db.collection("Ingrédients").doc(id).update(
        {
            Iname: newIname,
            Type: newType,
            Quantity: newQuantity,
            Unit: newUnit,
            Cu: newCu
        }
    )
}
export default class UpdateIngredient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            Iname: this.props.ing.Iname,
            Type: this.props.ing.Type,
            Quantity: this.props.ing.Quantity,
            Unit: this.props.ing.Unit,
            Cu: this.props.ing.Cu

        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleChangeUnit = this.handleChangeUnit.bind(this);
        this.handleChangeCu = this.handleChangeCu.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeName(event) {
        this.setState({ Iname : event.target.value });
    } 
    handleChangeType(event) {
        this.setState({ Type : event.target.value });
    } 
    handleChangeQuantity(event) {
        this.setState({ Quantity : event.target.value });
    } 
    handleChangeUnit(event) {
        this.setState({ Unit : event.target.value });
    } 
    handleChangeCu(event) {
        this.setState({ Cu : event.target.value });
    } 

    handleSubmit(event) {
        changeIng(this.state.Iname, this.state.Type, this.state.Quantity, this.state.Unit,this.state.Cu, this.props.id)
        alert('Le nom a été soumis : ' + this.state.Iname);
        event.preventDefault();
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
                        <Form style={{ margin: '30px 30px' }} onSubmit={this.handleSubmit}>
                            <Form.Label placeholder={this.props.ing.Iname} >Nom</Form.Label>
                            <Form.Control defaultValue={this.state.Iname} onChange={this.handleChangeName} />

                            <Form.Label placeholder={this.props.ing.Iname}>Type</Form.Label>
                            <Form.Control defaultValue={this.state.Type} onChange={this.handleChangeType}/>

                            <Form.Label placeholder={this.props.ing.Iname}>Quantity</Form.Label>
                            <Form.Control defaultValue={this.state.Quantity} onChange={this.handleChangeQuantity}/>

                            <Form.Label placeholder={this.props.ing.Iname}>Unit</Form.Label>
                            <Form.Control defaultValue={this.state.Unit} onChange={this.handleChangeUnit}/>

                            <Form.Label placeholder={this.props.ing.Iname}>Unit</Form.Label>
                            <Form.Control defaultValue={this.state.Cu} onChange={this.handleChangeCu}/>


                            <Button type="submit" >
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Modal>
                <button onClick={this.showModal}>
                    Modifier <GoPencil />
                </button>
            </div>

        )
    }

}

