import React, { useContext } from 'react';

// css custom 
import './status.css';

//  icon
import global from '../../assets/icons/global.svg';
import icon1 from '../../assets/icons/icon-1.svg';
import icon2 from '../../assets/icons/icon-2.svg';
import icon3 from '../../assets/icons/icon-3.svg';

// react svg
import { ReactSVG } from 'react-svg';

// nomber format
import NumberFormat from 'react-number-format';

export default function Index({ covidContext }) {
    const covidProps = useContext(covidContext);
    console.log(covidProps);
    return (
        <section id="our-result">
            <div className="container">
                <div className="status shadow-sm">
                    <div className="row gap-2">
                        <div className="col-3 col-md">
                            <div className="box-content">
                                <div className="icon-content">
                                    <ReactSVG src={global} />
                                </div>
                                <div>
                                    <p>status overview</p>
                                    <h3>GLOBAL</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md">
                            <div className="box-content">
                                <div className="icon-content">
                                    <ReactSVG src={icon1} />
                                </div>
                                <div>
                                    <p>total coronavirus</p>
                                    <h3>
                                        <NumberFormat value={covidProps.cases} displayType={'text'} thousandSeparator={true} prefix={''} />
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md">
                            <div className="box-content">
                                <div className="icon-content">
                                    <ReactSVG src={icon2} />
                                </div>
                                <div>
                                    <p>total recovered</p>
                                    <h3>
                                        <NumberFormat value={covidProps.recovered} displayType={'text'} thousandSeparator={true} prefix={''} />
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md">
                            <div className="box-content">
                                <div className="icon-content">
                                    <ReactSVG src={icon3} />
                                </div>
                                <div>
                                    <p>total death</p>
                                    <h3>
                                        <NumberFormat value={covidProps.deaths} displayType={'text'} thousandSeparator={true} prefix={''} />
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
