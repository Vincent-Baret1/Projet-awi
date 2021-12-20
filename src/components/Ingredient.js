import React, { Component } from 'react'

export default class Ingredient extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>chocolat</td>
                <td>sucreries</td>
                <td>2000 kg</td>
                <td>
                    <button>Modifier</button>
                    <button>Supprimer</button>
                </td>
            </tr>
        )
    }
}
