import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
    <div style={{
        backgroundColor:'blue'
    }}>
        <h1>HomePage</h1>
        <div style={{
            
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <button >
                <Link to="/LoginPage" style={{ textDecoration: 'none' }}>
                    se connecter
                </Link>
            </button>
            <button>
                <Link to="/PageVisitor" style={{ textDecoration: 'none' }}>
                    visualiser les fiches techniques
                </Link>
            </button>
        </div>
    </div>

    )
}
