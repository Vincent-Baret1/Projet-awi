import React from "react";
import MenuBar from "./components/MenuBar/MenuBar";
import Table from 'react-bootstrap/Table'
import IngredientsList from "./components/IngredientsList/IngredientsList";

class ListIngredientsPage extends React.Component {
    render() {
        return (
            <div>
                <MenuBar />
                <IngredientsList />
            </div>
        );
    }
}

export default ListIngredientsPage;