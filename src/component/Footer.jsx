import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-body footer mt-5 pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h3 className="text-light mb-4">Address</h3>
                    <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-body me-1" href="/"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-body me-1" href="/"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-body me-1" href="/"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-body me-0" href="/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3 className="text-light mb-4">Services</h3>
                    <Link className="btn btn-link" to="/services/">Architecture</Link>
                    <Link className="btn btn-link" to="/services/">3D Animation</Link>
                    <Link className="btn btn-link" to="/services/">House Planning</Link>
                    <Link className="btn btn-link" to="/services/">Interior Design</Link>
                    <Link className="btn btn-link" to="/services/">Construction</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3 className="text-light mb-4">Quick Links</h3>
                    <Link className="btn btn-link" to="/about/">About Us</Link>
                    <Link className="btn btn-link" to="/contact/">Contact Us</Link>
                    <Link className="btn btn-link" to="/services/">Our Services</Link>
                    <Link className="btn btn-link" to="/">Terms & Condition</Link>
                    <Link className="btn btn-link" to="/contact/">Support</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3 className="text-light mb-4">Newsletter</h3>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" style={{ maxWidth: "400px"}}>
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <Link to="/">Arkitektur</Link>, All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                       
                        <br/> Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank" rel="noreferrer">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer
