import React, { useState } from "react";
import './CompB.css';
import { Link } from 'react-router-dom';

function B() {
    const [color, setColor] = useState("am buying");
    const buy = () => {
        alert("You just Bought it");
    }
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
                <Link className="nav-link" to="/A"><img src="home.svg" alt="heart"/> Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/B"><img src="dishes.svg" alt="heart"/> Dishes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/C"><img src="book.svg" width="24"alt="heart"/> Book</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/D"><img src="contact.svg" alt="heart"/> Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/E"><img src="about.svg" alt="heart" /> About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>

        <body>
                <div className="album py-5 bg-light">
                <h3 class="mt-2 pt-5 pb-2">Dishes We Provide</h3>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src="chicken biryani.jpg" alt="" />
                                    <p style={{fontweight:'bold',fontsize:'1.3rem', margin:'10px'}}>
                                        Chicken Biryani
                                    </p>
                                    <div className="card-body">
                                        <p className="card-text">Chicken Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron smooky rice.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => setColor("just bought")}>Buy</button>
                                            </div>
                                            <small className="text-muted">  <h6>I  {color}!</h6></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src="chicken masala.jpg" alt="" />
                                    <p style={{fontweight:'bold',fontsize:'1.3rem', margin:'10px'}}>
                                        Chicken Masala
                                    </p>
                                    <div className="card-body">
                                        <p className="card-text"> Chicken masala is a simple Indian dish made with chicken, spices, herbs, onions and tomatoes. Serve with rice, naan, roti or paratha.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={buy}>Buy</button>
                                            </div>
                                            <small className="text-muted">300Rs</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src="chicken tandoor.jpg" alt="" />
                                    <p style={{fontweight:'bold',fontsize:'1.3rem', margin:'10px'}}>
                                        Chicken Tandoor
                                    </p>
                                    <div className="card-body">
                                        <p className="card-text">Tandoori chicken is a popular Indian dish where marinated chicken is grilled to perfection in a Tandoor, a cylindrical clay oven.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={buy}>Buy</button>
                                            </div>
                                            <small className="text-muted">300Rs</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src="chicken tikka.jpg" alt="" />
                                    <p style={{fontweight:'bold',fontsize:'1.3rem', margin:'10px'}}>
                                        Chicken Tikka
                                    </p>
                                    <div className="card-body">
                                        <p className="card-text">Chicken Tikka are boneless pieces of chicken, marinated in spiced yogurt, threaded on a metal skewer and cooked on live charcoal.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={buy}>Buy</button>
                                            </div>
                                            <small className="text-muted">300Rs</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src="chicken kebab.jpg" alt="" />
                                    <p style={{fontweight:'bold',fontsize:'1.3rem', margin:'10px'}}>
                                        Chicken Kebab
                                    </p>
                                    <div className="card-body">
                                        <p className="card-text">Chicken kebabs are so simple to make, they are basically marinaded chicken, threaded onto skewers and cooked through.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={buy}>Buy</button>
                                            </div>
                                            <small className="text-muted">300Rs</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src="chicken biryani.jpg" alt="" />
                                    <p style={{fontweight:'bold',fontsize:'1.3rem', margin:'10px'}}>
                                        Chicken Dum Biryani
                                    </p>
                                    <div className="card-body">
                                        <p className="card-text">Chicken Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={buy}>Buy</button>
                                            </div>
                                            <small className="text-muted">300Rs</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src="chicken biryani.jpg" alt="" />
                                    <p style={{fontweight:'bold',fontsize:'1.3rem', margin:'10px'}}>
                                        Chicken Biryani
                                    </p>
                                    <div className="card-body">
                                        <p className="card-text">Chicken Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron smooky rice.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={buy}>Buy</button>
                                            </div>
                                            <small className="text-muted">300Rs</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src="chicken masala.jpg" alt="" />
                                    <p style={{fontweight:'bold',fontsize:'1.3rem', margin:'10px'}}>
                                        Chicken Masala
                                    </p>
                                    <div className="card-body">
                                        <p className="card-text"> Chicken masala is a simple Indian dish made with chicken, spices, herbs, onions and tomatoes. Serve with rice, naan, roti or paratha.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={buy}>Buy</button>
                                            </div>
                                            <small className="text-muted">300Rs</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src="chicken tandoor.jpg" alt="" />
                                    <p style={{fontweight:'bold',fontsize:'1.3rem', margin:'10px'}}>
                                        Chicken Tandoor
                                    </p>
                                    <div className="card-body">
                                        <p className="card-text">Tandoori chicken is a popular Indian dish where marinated chicken is grilled to perfection in a Tandoor, a cylindrical clay oven.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={buy}>Buy</button>
                                            </div>
                                            <small className="text-muted">300Rs</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <script src="/docs/5.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
                        </div>
                        </div>
                        </div>
                        </body>
                        {/* gsgsgsgsgsg */}
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
export default B;