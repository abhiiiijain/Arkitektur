import React from 'react'

const About = () => {
  return (
    <>
     {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <h1 className="display-1 text-white animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb text-uppercase mb-0">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">About</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- About Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img">
                        <img className="img-fluid" src="/img/about-1.jpg" alt=""/>
                        <img className="img-fluid" src="/img/about-2.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h4 className="section-title">About Us</h4>
                    <h1 className="display-5 mb-4">A Creative Architecture Agency For Your Dream Home</h1>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                    <div className="d-flex align-items-center mb-5">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary" style={{ width: "120px", height: "120px"}}>
                            <h1 className="display-1 mb-n2" data-toggle="counter-up">25</h1>
                        </div>
                        <div className="ps-4">
                            <h3>Years</h3>
                            <h3>Working</h3>
                            <h3 className="mb-0">Experience</h3>
                        </div>
                    </div>
                    <a className="btn btn-primary py-3 px-5" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


    {/* <!-- Feature Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h4 className="section-title">Why Choose Us!</h4>
                    <h1 className="display-5 mb-4">Why You Should Trust Us? Learn More About Us!</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="d-flex align-items-start">
                                <img className="flex-shrink-0" src="/img/icons/icon-2.png" alt="Icon"/>
                                <div className="ms-4">
                                    <h3>Design Approach</h3>
                                    <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex align-items-start">
                                <img className="flex-shrink-0" src="/img/icons/icon-3.png" alt="Icon"/>
                                <div className="ms-4">
                                    <h3>Innovative Solutions</h3>
                                    <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex align-items-start">
                                <img className="flex-shrink-0" src="/img/icons/icon-4.png" alt="Icon"/>
                                <div className="ms-4">
                                    <h3>Project Management</h3>
                                    <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="feature-img">
                        <img className="img-fluid" src="/img/about-2.jpg" alt=""/>
                        <img className="img-fluid" src="/img/about-1.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Feature End --> */}


    {/* <!-- Team Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px"}}>
                <h4 className="section-title">Team Members</h4>
                <h1 className="display-5 mb-4">We Are Creative Architecture Team For Your Dream Home</h1>
            </div>
            <div className="row g-0 team-items">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item position-relative">
                        <div className="position-relative">
                            <img className="img-fluid" src="/img/team-1.jpg" alt=""/>
                            <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h3 className="mt-2">Architect Name</h3>
                            <span className="text-primary">Designation</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item position-relative">
                        <div className="position-relative">
                            <img className="img-fluid" src="/img/team-2.jpg" alt=""/>
                            <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h3 className="mt-2">Architect Name</h3>
                            <span className="text-primary">Designation</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item position-relative">
                        <div className="position-relative">
                            <img className="img-fluid" src="/img/team-3.jpg" alt=""/>
                            <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h3 className="mt-2">Architect Name</h3>
                            <span className="text-primary">Designation</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item position-relative">
                        <div className="position-relative">
                            <img className="img-fluid" src="/img/team-4.jpg" alt=""/>
                            <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h3 className="mt-2">Architect Name</h3>
                            <span className="text-primary">Designation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}
    
    </>
  )
}

export default About
