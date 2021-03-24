import React from 'react';

// css custom
import './navbar.css';

// image
import brand from '../../assets/images/brand.svg';

// svg
import { ReactSVG } from 'react-svg';

export default function index() {
    return (
        <section id="home">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand text-uppercase" href="#home">
                        <ReactSVG src={brand} />
                        <span>corona-tracker</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#our-result">Our Results</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#spread">Exterior</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#sysmtoms">Interior</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#faq">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#footer">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
}
