import React from 'react';

// css custom
import './footer.css';

// satic image
import banner from '../../assets/images/brand.svg';

// react svg
import { ReactSVG } from 'react-svg';

export default function index() {
    return (
        <section id="footer">
            <div className="box-footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="row gap-3">
                            <div className="col-4 col-lg">
                                <div className="img-logo d-flex align-items-center">
                                    <ReactSVG src={banner} />
                                    <div className="title text-white">CORONA-TRACKER</div>
                                </div>
                                <div className="footer-logo-text text-white">
                                    Design Mamba an online marketplace built to cope with promising future
                                </div>
                            </div>
                            <div className="col-4 col-lg">
                                <div className="contact-us text-white ">
                                    <div className="title text-uppercase">contact-us</div>
                                    <div className="mb-2">
                                        <i className="bi bi-telephone me-3"></i>
                                        <span>phone : +6285718813840</span>
                                    </div>
                                    <div>
                                        <i className="bi bi-envelope me-3"></i>
                                        <span>email : rudiwidodo069@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-lg">
                                <div className="social-media text-white">
                                    <div className="title text-uppercase">social media</div>
                                    <ul>
                                        <li>
                                            <a href="https://www.instagram.com/rudhi_wid098/" className="text-white">
                                                <i className="bi bi-instagram me-3"></i>
                                                <span>instagram</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://web.facebook.com/ruditjah.ploskulcomunity/" className="text-white">
                                                <i className="bi bi-facebook me-3"></i>
                                                <span>facebook</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/rudiwidodo069" className="text-white">
                                                <i className="bi bi-github me-3"></i>
                                                <span>github</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://wa.me/085718813840" className="text-white">
                                                <i className="bi bi-whatsapp me-3"></i>
                                                <span>whatsapp</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="border-bottom" />
                        <div className="footer">
                            <div className="text-white text-center">&copy;DESIGNMAMBA, ALL RIGHTS RESERVED</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
