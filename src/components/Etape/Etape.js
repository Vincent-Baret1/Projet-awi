import React from 'react'
import { Button, Card } from 'react-bootstrap'
import EditIcon from '@mui/icons-material/Edit';

export default function Etape(props) {

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
                {props.Etape.Titre}
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    Description : {props.Etape.Description}
                </Card.Text>
                <Card.Text>
                    Durée : {props.Etape.Durée}
                </Card.Text>
                <Card.Text>
                    List des Ingrédients : {props.Etape.ListIng.map((value, key) => {
                            return <p>{value}</p>


                    })
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button ><EditIcon /></Button>
            </Card.Footer>
        </Card>
    )

}
