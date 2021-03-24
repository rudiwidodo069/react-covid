import React from 'react';

// css custom
import './jumbotron.css';

// images
import covidImage from '../../assets/images/jumbotron.svg';
import corona1 from '../../assets/images/corona-1.svg';
import corona2 from '../../assets/images/corona-2.svg';

// react svg
import { ReactSVG } from 'react-svg';

export default function index() {
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="row gap-2 box-jumbotron">
                    <div className="col-6 col-md">
                        <div className="bg-1">
                            <ReactSVG src={corona1} />
                        </div>
                        <div className="d-flex align-items-center title">
                            <h1>COVID-19 LIVE TRACKER</h1>
                            <ReactSVG src={corona2} />
                        </div>
                        <p>
                            Coronavirus (COVID-19) ingin dilaporkan di Wuhan, Hubel, China pada Desember 2019. Wabah tersebut kemudian diakui sebagai pandemi oleh organisasi kesehatan dunia (WHO) pada 11 Maret 2020.
                        </p>
                        <div>
                            <button className="btn btn-danger">CARA MELINDUNGI <i className="bi bi-chevron-right"></i></button>
                            <button className="btn btn-outline-light">TEMUKAN DOKTER <i className="bi bi-chevron-right"></i></button>
                        </div>
                    </div>
                    <div className="col-6 col-md d-flex align-items-center justify-content-center">
                        <div className="bg-2">
                            <ReactSVG src={covidImage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
