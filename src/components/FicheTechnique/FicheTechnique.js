import React from 'react'
import './FicheTechnique.css'

export default function FicheTechnique(props) {
    return (
        <div style={{backgroundColor:'navajowhite'}}>
            <div className='TitleFicheTech'>
                <h1 style={{
                    textAlign: 'center',
                    fontStyle: 'italic',
                    fontFamily: 'cursive'
                }}>
                    {props.fiche.NomPlat}
                </h1>
                <hr />
                <h6 style={{
                    textAlign: 'center'
                }}>
                    Auteur : {props.fiche.NomAuteur}
                </h6>
                <h6 style={{
                    textAlign: 'center'
                }}>
                    Nombre de couverts : {props.fiche.NbCouvert}
                </h6>
            </div>
            <div className='etapes'>
                {props.fiche.Etape.map(etp => <div>
                    <h6 style={{ textDecoration: "underline", margin: "5px" }}>{etp.titre}{"\n"}{"\n"}</h6>
                    <h6 style={{ margin: "5px" }}>{etp.description}{"\n"}{"\n"}</h6>
                    <hr />
                </div>)}
            </div>
            <div className='ingrédients'>
                {props.fiche.Etape.map(etp =>
                    <>
                        <h6 style={{ textDecoration: "underline", margin: "5px" }}>{etp.titre}{"\n"}{"\n"}</h6>
                        <div>
                            {etp.ingredientsList.map((ing, key) => {
                                return (
                                    <div>
                                        <h6 style={{  margin: "5px" }}>Ingrédients : {ing} {"\n\n"} </h6>
                                        <h6 style={{  margin: "5px" }}>Quantité : {etp.quantityList[key]}{"\n"}</h6>
                                    </div>
                                );
                            })}

                        </div>
                        <hr />
                    </>
                )}
            </div>
        </div>
    )
}
