import React from 'react';

// css custom
import './spread.css';

// react svg
import { ReactSVG } from 'react-svg';

// spread content
import SpreadContent from './static.spread';

export default function index() {
    return (
        <section id="spread">
            <div className="container">
                <div className="box-spread">
                    <div className="title text-center fw-bold">Bagaimana Coronavirus Menyebar</div>
                    <div className="row gap-4">
                        {
                            SpreadContent.map(item => {
                                return (
                                    <div key={item.id} className="col-4 col-lg spread-content shadow-sm">
                                        <div className="spread-img rounded-circle">
                                            <ReactSVG src={item.image} />
                                        </div>
                                        <div className="spread-title fw-bold text-center">{item.title}</div>
                                        <div className="spread-text fw-normal text-center">{item.text}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section >
    );
}
