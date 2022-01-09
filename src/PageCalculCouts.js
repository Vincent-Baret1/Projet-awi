import React from "react";
import MenuBar from "./components/MenuBar/MenuBar";
import Table from 'react-bootstrap/Table'
import IngredientsList from "./components/IngredientsList/IngredientsList";
import CalculCout from "./CalculCout/CalculCout";

class PageCalculCouts extends React.Component {
    render() {
        return (
            <div>
                <MenuBar />
                <CalculCout />
            </div>
        );
    }
}

export default PageCalculCouts;