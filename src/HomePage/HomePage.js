import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import logo from './logo.png'


export default function HomePage() {
    return (
        <div >
            
            <div className='LogoAndButtons' >
                <img   src={logo} className='MainLogo'></img>
                <h4 className='imageCaption'> Explore the foodie in you...</h4>
                <div className='MainButtons' >
                    <button type="button" class="btn btn-dark btn-lg"
                        style={{
                            marginRight: '15px',
                            marginBottom:'15px'
                        }} >
                        <Link to="/LoginPage" style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>
                            se connecter
                        </Link>
                    </button>
                    <button type="button" class="btn btn-dark btn-lg" style={{
                        marginLeft: '15px',
                        marginBottom:'15px'
                    }}>
                        <Link to="/PageVisitor" style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>
                            Fiches techniques
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
