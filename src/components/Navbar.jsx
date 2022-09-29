import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="row collapse navbar-collapse text-center fs-5" id="navbarNav">
                    <ul className="navbar-nav p-0">
                        <li className="nav-item col">
                        <Link className="nav-link" to="/">Portfolio</Link>
                        </li>
                        <li className="nav-item col">
                        <Link className="nav-link" to="/about">About Me</Link>
                        </li>
                        <li className="nav-item col">
                        <Link className="nav-link" to="/contact">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}