import React from 'react';

// css custom
import './topic.css';

export default function index() {
    return (
        <section id="topic">
            <div className="container">
                <div className="box-topic">
                    <div className="title text-center fw-bold">Blog Topics</div>
                    <div className="row gap-4">
                        <div className="col-4 col-lg">
                            <div className="card shadow-sm ms-auto">
                                <div className="box-img">
                                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                                </div>
                                <div className="card-body">
                                    <h3>Wearing face mask working</h3>
                                    <p className="card-text">If you wear a mask, then you must know how to use it and dispose of it properly. When…</p>
                                    <ul className="d-flex justify-content-between p-0">
                                        <li className="date">10 Mar 2020</li>
                                        <li>
                                            <a href="##" className="read">read more</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-md">
                            <div className="card shadow-sm ms-auto">
                                <div className="box-img">
                                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                                </div>
                                <div className="card-body">
                                    <h3>Wearing face mask working</h3>
                                    <p className="card-text">If you wear a mask, then you must know how to use it and dispose of it properly. When…</p>
                                    <ul className="d-flex justify-content-between p-0">
                                        <li className="date">10 Mar 2020</li>
                                        <li>
                                            <a href="##" className="read">read more</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-md">
                            <div className="card shadow-sm ms-auto">
                                <div className="box-img">
                                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                                </div>
                                <div className="card-body">
                                    <h3>Wearing face mask working</h3>
                                    <p className="card-text">If you wear a mask, then you must know how to use it and dispose of it properly. When…</p>
                                    <ul className="d-flex justify-content-between p-0">
                                        <li className="date">10 Mar 2020</li>
                                        <li>
                                            <a href="##" className="read">read more</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center box-btn">
                        <button className="view-all">view all</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
