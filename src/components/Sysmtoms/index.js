import React from 'react';

// css custom
import './sysmtoms.css';

// stsic content
import SysmtomsContent from './static.sysmtoms';

// react svg
import { ReactSVG } from 'react-svg';

export default function index() {
    return (
        <section id="sysmtoms">
            <div className="container">
                <div className="box-sysmtoms">
                    <div className="title fw-bold text-center">Gejala virus korona</div>
                    <div className="row gap-4 grid-sysmtoms">
                        {
                            SysmtomsContent.map(item => {
                                return (
                                    <div key={item.id} className="col-3 col-xl">
                                        <div className="sysmtoms-content shadow-sm">
                                            <div className="sysmtoms-img">
                                                <ReactSVG src={item.image} />
                                            </div>
                                            <div className="sysmtoms-title text-center fw-bold">{item.title}</div>
                                            <div className="sysmtoms-text fw-normal">{item.text}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
