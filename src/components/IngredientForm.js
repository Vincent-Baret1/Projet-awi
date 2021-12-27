import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { collection, addDoc, getFirestore, updateDoc } from "firebase/firestore";
import Select from 'react-select'
const db = getFirestore();

async function sendIngredient(Iname, Type, Quantity, Unit, Cu) {
    try {
        const docRef = await addDoc(collection(db, "Ingrédients"), {
            Iname: Iname,
            Type : Type,
            Quantity : Quantity,
            Unit : Unit,
            Cu : Cu
        });
        alert("Ingrédient ajouté à la base !");
    } catch (e) {
        console.error("Error adding document : ", e);
    }
}

async function sendIngredientToRecipe(Iname, Type, Quantity, Unit, Cu, NomPlat) {
    try {
        const docRef = await addDoc(collection(collection(db, "Recettes"),"Recette1"), {
            Iname: Iname,
            Type : Type,
            Quantity : Quantity,
            Unit : Unit,
            Cu : Cu
        });
        alert("Ingrédient ajouté à la base !");
    } catch (e) {
        console.error("Error adding document : ", e);
    }
}

class IngredientForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Iname: '', Type: '', Quantity: 0,Unit : '',Cu : 0 };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    resetForm() {
        this.setState({Iname: '', Type: '', Quantity: 0,Unit : '' , Cu : 0});
    }

    render() {

        const Iname = this.state.Iname;
        const Type = this.state.Type;
        const Quantity = this.state.Quantity;
        const UnitOptions = [
            { value: 'Kg', label: 'Kilograms' },
            { value: 'L', label: 'Litres' },
            { value: 'Bottle', label: 'bottles' }
          ];

        return (
            <div>
                <Form style={{ marginLeft: "100px", marginRight: "100px" }}
                style={{ margin: '30px 30px' }}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Nom de l'ingrédient"
                        className="mb-3">
                        <Form.Control type="text" name="Iname" placeholder="exemple" value={this.state.Iname} onChange={this.handleChange} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Type de l'ingrédient"
                        className="mb-3">
                        <Form.Control type="text" name="Type" placeholder="exemple" value={this.state.Type} onChange={this.handleChange} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Quantité"
                        className="mb-3">
                        <Form.Control type="text" name="Quantity" placeholder="exemple" value={this.state.Quantity} onChange={this.handleChange} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="coût unitaire"
                        className="mb-3">
                        <Form.Control type="text" name="Cu" placeholder="exemple" value={this.state.Cu} onChange={this.handleChange} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Unité"
                        className="mb-3">
                        <Form.Control type="select" name="Unit" placeholder="exemple" value={this.state.Unit} onChange={this.handleChange} />
                    </FloatingLabel>

                    <Button variant="primary" onClick={() => {
                        if(this.props.NomPlat == null){
                            sendIngredient(this.state.Iname, this.state.Type, this.state.Quantity, this.state.Unit, this.state.Cu); this.resetForm();
                        }
                        else{
                            alert("on est ici")
                            sendIngredientToRecipe(this.state.Iname, this.state.Type, this.state.Quantity, this.state.Unit, this.state.Cu, this.props.NomPlat); this.resetForm();
                        }    
                    }}>
                        Envoyer
                    </Button>
                </Form>
            </div>
        );
    }
}

export default IngredientForm;