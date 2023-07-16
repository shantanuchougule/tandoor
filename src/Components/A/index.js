import React from 'react';
import './CompA.css';
import { Link } from 'react-router-dom';

function A() {
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
                <Link className="nav-link active" aria-current="page" to="/A"><img src="home.svg" alt="heart"/> Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/B"><img src="dishes.svg" alt="heart"/> Dishes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/C"><img src="book.svg" width="24"alt="heart"/> Book</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/D"><img src="contact.svg" alt="heart"/> Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/E"><img src="about.svg" alt="heart"/> About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>


  <section id="photos">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="chicken masala.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1>Chicken Masala</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src="chicken tikka.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1>Chicken Tikka</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src="chicken tandoor.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1>Chicken Tandoor</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src="chicken kebab.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1>Chicken Kebab</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src="chicken biryani.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1>Chicken Biryani</h1>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <section id="cta">
      <h3 className="footer pt-3">Best Chicken Dishes in Kolhapur City</h3>
    </section>
    <h5 className="add mb-0 pb-3">BestShop No. 17/18, Old P B Road, beside Hotel Sayaji, Ayodhya Park, Shahupuri, Kolhapur, Maharashtra 416005</h5>
    {/* <!-- Team Start --> */}
    <section class="section" id="chefs">
        <div class="container pt-5">
            <div class="row">
                <div class="col-lg-4 offset-lg-4 text-center">
                    <div class="section-heading">
                        <h3>Our Chefs</h3>
                        <h6>We offer the best ingredients for you</h6>
                    </div>
                </div>
            </div>
            <div class="row pb-5">
                <div class="col-lg-4">
                    <div class="chef-item">
                        <div class="thumb">
                            <div class="overlay"></div>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                            <img src="chefs-01.jpg" alt="Chef #1"/>
                        </div>
                        <div class="down-content">
                            <h4>Aniket Walker</h4>
                            <span>Tandoor Chef</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="chef-item">
                        <div class="thumb">
                            <div class="overlay"></div>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                            </ul>
                            <img src="chefs-02.jpg" alt="Chef #2"/>
                        </div>
                        <div class="down-content">
                            <h4>Vinayak Martin</h4>
                            <span>Cury Chef</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="chef-item">
                        <div class="thumb">
                            <div class="overlay"></div>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google"></i></a></li>
                            </ul>
                            <img src="chefs-03.jpg" alt="Chef #3"/>
                        </div>
                        <div class="down-content">
                            <h4>Abhijeet Perkson</h4>
                            <span>Biryani Chef</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        {/* <!-- Team End --> */}
      {/* <!-- Service Start --> */}
        <section class="section" id="ser">
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h3>Our Services</h3>
                <h6>We offer the best services for you</h6>
                </div>
                <div class="row g-4 pt-4">
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                <h5>Master Chefs</h5>
                                <p>This are the services we provide you in this restaurant tandoor</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                                <h5>Quality Food</h5>
                                <p>This are the services we provide you in this restaurant tandoor</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                                <h5>Online Order</h5>
                                <p>This are the services we provide you in this restaurant tandoor</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-headset text-primary mb-4"></i>
                                <h5>24/7 Service</h5>
                                <p>This are the services we provide you in this restaurant tandoor</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                <h5>Master Chefs</h5>
                                <p>This are the services we provide you in this restaurant tandoor</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                                <h5>Quality Food</h5>
                                <p>This are the services we provide you in this restaurant tandoor</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                                <h5>Online Order</h5>
                                <p>This are the services we provide you in this restaurant tandoor</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-headset text-primary mb-4"></i>
                                <h5>24/7 Service</h5>
                                <p>This are the services we provide you in this restaurant tandoor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        {/* <!-- Service End --> */}
    <div className="shooter container-fluid fixed-bottom">
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
    
    export default A;
    