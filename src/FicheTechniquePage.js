import React from "react";
import FormFicheTechnique from "./components/FormFicheTechnique";
import MenuBar from "./components/MenuBar";

class FicheTechniquePage extends React.Component {
    render() {
        return (
            <div>
                <MenuBar />
                <FormFicheTechnique />
            </div>
        );
    }
}

export default FicheTechniquePage;