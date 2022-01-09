import React from 'react'
import { Button, Card } from 'react-bootstrap'
import CheckIcon from '@mui/icons-material/Check';

export default class Etape extends React.Component {

    render() {

        return (

            <Card
                bg="white"
                text="Fiche Technique"
                style={{
                    width: '18rem', margin: '10px', height: 'max-content', display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                <Card.Header >
                    {this.props.Etape.Titre}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Description : {this.props.Etape.Description}
                    </Card.Text>
                    <Card.Text>
                        Durée : {this.props.Etape.Durée}
                    </Card.Text>
                    <Card.Text>
                        List des Ingrédients : {this.props.Etape.ListIng.map((value, key) => {
                            return <p>{value}</p>


                        })
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        )

    }
}