import React from 'react';
import './CompE.css';
import { Link } from 'react-router-dom';

function E() {
    return (
        <div className="App">
            <section id="navbar">
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/A">Tandoor<img src="leg4.svg" alt="heart" height="45" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/A"><img src="home.svg" alt="heart" /> Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/B"><img src="dishes.svg" alt="heart" /> Dishes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/C"><img src="price.svg" alt="heart" /> Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/D"><img src="contact.svg" alt="heart" /> Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/E"><img src="about.svg" alt="heart" /> About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        
        {/* sgsggsggg */}
        <section className="section" id="about">
        <div className="container mt-5 pt-5 pb-3">
        <h3 className="py-">About Us</h3>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="left-text-content">
                        <div className="section-heading">
                            <h2>We Leave A Delicious Memory For You</h2>
                        </div>
                        <p>Klassy Cafe is one of the best <a href="/A" target="_blank" rel="sponsored">restaurant HTML templates</a> with Bootstrap v4.5.2 CSS framework. You can download and feel free to use this website template layout for your restaurant business. You are allowed to use this template for commercial purposes. <br></br>You are NOT allowed to redistribute the template ZIP file on any template donwnload website. Please contact us for more information.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="right-content">
                        <div className="thumb">
                            <img src="hotel.jpg" alt=""style={{ width: "600px" }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            {/* sgsgsg */}
            <div className="shooter container-fluid">
                <h3>Best Chicken Dishes in Kolhapur City</h3>
                <div className="row">
                    <div className="col-lg-4">
                        <h2>Timing</h2>
                        <h6>11:00am to 11:00pm</h6>
                        <h6>Monday to Sunday</h6>
                    </div>
                    <div className="col-lg-4">
                        <h4>Tandoor<img src="leg4.svg" alt="heart" height="45" /></h4>
                        <footer className="text-center text-white" style={{ backgroundcolor: "#f1f1f1" }}>

                <div className="container pt-1 mt-1">

                    <section className="mb-4">

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><img src="facebook.svg" alt="heart" height="25"/></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><img src="instagram.svg" alt="heart" height="25"/></a>

                        {/* <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><img src="linkedin.svg" alt="heart" height="25"/></a>
 */}

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><img src="maps.svg" alt="heart" height="25"/></a>
                            
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><img src="twitter.svg" alt="heart" height="25"/></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><img src="whatsapp.svg" alt="heart" height="25"/></a>
                    </section>
                </div>
                <div className="copy text-center text-dark mt-0" style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}>
                    All rights reserved ©
                    <a className="text-dark" href="https://shantanuchougule.github.io/cv/">shantanuchougule ,2023</a>
                </div> 
            </footer>
                    </div>
                    <div className="col-lg-4">
                        <h2>Contact</h2>
                        <h6>02312524007</h6>
                        <h6>Shahupuri, Kolhapur.</h6>
                    </div>
                </div>
            </div>
            
        </div>       
    );
}
export default E;