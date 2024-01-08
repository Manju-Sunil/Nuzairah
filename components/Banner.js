import React, { Component, goNext, goPrev, setSwiper, isOpen } from 'react';
import ModalVideo from 'react-modal-video';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';



class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isZoomed1: false,
            isZoomed2: false,
            isZoomed3: false,
            isZoomed4: false,
            isZoomed5: false,
            isZoomed6: false,
            isZoomed7: false,
            isZoomed8: false,
        };

        this.state = {
            isOpen: false,
            startCounter: false,
            toggleState: {
                month: true,
                year: false,
            },
            swiper: null,
            scrollBtn: false,
        };

        this.openModal = this.openModal.bind(this);
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.goNext = this.goNext.bind(this);
        this.goPrev = this.goPrev.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollTop = this.scrollTop.bind(this);

    }

    handleImageClick = (imageNumber) => {
        this.setState((prevState) => ({ ['isZoomed' + imageNumber]: !prevState['isZoomed' + imageNumber] }));
    };

    handleCloseClick = (imageNumber) => {
        this.setState({ ['isZoomed' + imageNumber]: false });
    };



    openModal() {
        this.setState({ isOpen: true });
    }

    onVisibilityChange(isVisible) {
        if (isVisible) {
            this.setState({ startCounter: true });
        }
    }

    handleToggle() {
        this.setState((prevState) => ({
            toggleState: {
                month: !prevState.toggleState.month,
                year: !prevState.toggleState.year,
            },
        }));
    }

    goNext() {
        const { swiper } = this.state;
        if (swiper !== null) {
            swiper.slideNext();
        }
    }

    goPrev() {
        const { swiper } = this.state;
        if (swiper !== null) {
            swiper.slidePrev();
        }
    }

    handleScroll() {
        if (window.scrollY > 70) {
            this.setState({ scrollBtn: true });
        } else if (window.scrollY < 70) {
            this.setState({ scrollBtn: false });
        }
    }

    scrollTop() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }





    render() {
        const { isZoomed1, isZoomed2, isZoomed3, isZoomed4, } = this.state;


        return (
            <>
                <section className="banner-one" id="banner" style={{ backgroundImage: `url(/assets/images/background/banner-bg-1-1.png)` }}>
                    <img src="/assets/images/shapes/banner-shapes-1-1.png" alt="" className="banner-one__shape-1" />
                    <img src="/assets/images/shapes/banner-shapes-1-2.png" alt="" className="banner-one__shape-2" />

                    <img src="/assets/images/shapes/banner-shapes-1-4.png" alt="" className="banner-one__shape-4" />
                    <img src="/assets/images/shapes/banner-shapes-1-5.png" alt="" className="banner-one__shape-5" />
                    <img src="/assets/images/shapes/banner-shapes-1-6.png" alt="" className="banner-one__shape-6" />
                    <img src="/assets/images/shapes/banner-shapes-1-7.png" alt="" className="banner-one__shape-7" />

                    <div className="container">

                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner-one__content">
                                    <p className="banner-one__tag-line">Welcome to SEO Business <a href="#">free trial</a></p>
                                    <h3>We help achieve <br /> biggest goals</h3>
                                    <p>We are committed to providing our customers with exceptional service <br /> while offering our
                                        Digital Marketing.</p>
                                    <a href="#contact" data-target="#contact" className="thm-btn banner-one__btn scroll-to-target">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/shapes/banner-shapes-1-3.png" alt="" className="banner-one__shape-moc-1" />
                        <img
                            src="/assets/images/m1.gif"
                            style={{
                                height: '600px',
                                width: '600px',
                                borderRadius: '50%',
                                
                                objectFit: 'cover'
                            }}
                            alt=""
                            className='banner-one__moc banner-gif_'
                        />

                    </div>
                </section>
                {/* service */}
                <section className="service-one" id="features">
                    <div className="container">
                        <div className="block-title text-center">
                            <span className="block-title__bubbles"></span>
                            <p>Checkout App Features</p>
                            <h3>Our Highly-Tailored Digital Marketing<br></br> Services</h3>
                        </div>
                        <div className="row">
                            <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                                data-wow-delay="000ms">
                                <div className="service-one__single">
                                    <img src="/assets/images/w5.gif" style={{ height: '100px', width: '100px', borderRadius: '50%', marginBottom: '50px' }} />
                                    <h3>SEO</h3>
                                </div>
                            </div>

                            <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                                data-wow-delay="100ms">
                                <div className="service-one__single">
                                    <img src="/assets/images/w4.gif" style={{ height: '100px', width: '100px', borderRadius: '50%', marginBottom: '50px' }} />

                                    <h3>Content Marketing</h3>
                                </div>

                            </div>

                            <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                                data-wow-delay="200ms">
                                <div className="service-one__single">
                                    <img src="/assets/images/w6.gif" style={{ height: '100px', width: '100px', borderRadius: '50%', marginBottom: '50px' }} />

                                    <h3>Social Media Marketing</h3>
                                </div>

                            </div>

                            <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                                data-wow-delay="300ms">
                                <div className="service-one__single">
                                    <img src="/assets/images/w8.gif" style={{ height: '100px', width: '100px', borderRadius: '50%', marginBottom: '50px' }} />

                                    <h3>Email Marketing</h3>
                                </div>

                            </div>

                            <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                                data-wow-delay="400ms">
                                <div className="service-one__single">
                                    <img src="/assets/images/w10.gif" style={{ height: '100px', width: '100px', borderRadius: '50%', marginBottom: '50px' }} />

                                    <h3> Data Analysis</h3>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* feature one  */}

                <div className="cta-three">

                    <img src="/assets/images/shapes/cta-1-shape-2.png" alt="" className="cta-three__shape-2" />
                    <img src="/assets/images/shapes/cta-1-shape-3.png" alt="" className="cta-three__shape-3" />
                    <div className="container">
                        <img src="/assets/images/shapes/cta-1-shape-1.png" alt="" className="cta-three__shape-1" />
                        <img src="/assets/images/img.png" alt="" className="cta-three__moc" />
                        <div className="row justify-content-end">
                            <div className="col-lg-6">
                                <div className="cta-three__content">
                                    <div className="block-title text-left">
                                        <span className="block-title__bubbles"></span>
                                        <p>Checkout App Features</p>
                                        <h3>Digital Marketing Clue</h3>
                                    </div>
                                    <div className="cta-three__box-wrap">
                                        <div className="cta-three__box">
                                            <div className="cta-three__box-icon">
                                                <i className="zimed-icon-strategy"></i>
                                            </div>
                                            <div className="cta-three__box-content">
                                                <h3>Search Engine Marketing</h3>
                                                <p>All our SEM techniques are conversion-focused, which helps companies meet their revenue goals.</p>
                                            </div>

                                        </div>

                                        <div className="cta-three__box">
                                            <div className="cta-three__box-icon">
                                                <i className="zimed-icon-training"></i>
                                            </div>

                                            <div className="cta-three__box-content">
                                                <h3>Content Writing & Marketing</h3>
                                                <p>Our team  is specially trained to offer the most premium content to clients.</p>
                                            </div>

                                        </div>
                                    </div>

                                    <a href="#" className="thm-btn cta-three__btn">View More</a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                {/* feature two */}

                <section className="cta-two">
                    <img src="/assets/images/shapes/cta-2-shape-1.png" alt="" className="cta-two__shape-1" />
                    <img src="/assets/images/shapes/cta-2-shape-2.png" alt="" className="cta-two__shape-2" />
                    <div className="container">
                        <img src="/assets/images/shapes/cta-2-shape-3.png" alt="" className="cta-two__shape-3" />
                        <img src="/assets/images/img5.jpg" style={{ height: '400px', width: '500px' }} alt="" className="cta-two__moc" />
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="cta-two__content">
                                    <div className="block-title text-left">
                                        <span className="block-title__bubbles"></span>
                                        <p>Checkout App Features</p>
                                        <h3>A Online Marketing Agency That Makes Waves for Our Clients</h3>
                                    </div>

                                    <p>Our Online marketing agency specializes in improving

                                        the visibility, impact, and bottom line of our customers..</p>
                                    <a href="#" className="thm-btn cta-two__btn">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* video */}
                <section className="video-one">
                    <div className="container">
                        <div className="video-one__box wow fadeInUp" data-wow-duration="1500ms">
                            <img src="/assets/images/bg.jpg" style={{ height: '500px', width: '100%' }} alt="" />
                            <div className="video-one__content">
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='aitb---aDYM' onClose={() => this.setState({ isOpen: false })} />
                                <div onClick={this.openModal} className="video-popup"><i
                                    className="fa fa-play"></i></div>
                                <h3>Watch Our Video</h3>
                            </div>
                        </div>
                    </div>
                </section>
                {/* counter */}

                <div>
                    <section className="funfact-one">
                        <img src="/assets/images/shapes/pricing-shape-1.png" alt="" className="funfact-one__shape-1" />
                        <img src="/assets/images/shapes/pricing-shape-2.png" alt="" className="funfact-one__shape-2" />
                        <img src="/assets/images/shapes/pricing-shape-3.png" alt="" className="funfact-one__shape-3" />

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="funfact-one__single">
                                        <h3 className="counter">
                                            <VisibilitySensor onChange={this.onVisibilityChange} offset={{ top: 10 }} delayedCall><CountUp end={this.state.startCounter ? 700 : 0} /></VisibilitySensor>
                                        </h3>
                                        <p>Happy Clients</p>
                                    </div>

                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="funfact-one__single">
                                        <h3 className="counter">
                                            <VisibilitySensor onChange={this.onVisibilityChange} offset={{ top: 10 }} delayedCall><CountUp end={this.state.startCounter ? 200 : 0} /></VisibilitySensor>
                                        </h3>
                                        <p>Achivements</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="funfact-one__single">
                                        <h3 className="counter">
                                            <VisibilitySensor onChange={this.onVisibilityChange} offset={{ top: 10 }} delayedCall><CountUp end={this.state.startCounter ? 360 : 0} /></VisibilitySensor>
                                        </h3>
                                        <p>5 Star Rating</p>
                                    </div>

                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="funfact-one__single">
                                        <h3 className="counter">
                                            <VisibilitySensor onChange={this.onVisibilityChange} offset={{ top: 10 }} delayedCall><CountUp end={this.state.startCounter ? 200 : 0} /></VisibilitySensor>
                                        </h3>
                                        <p>Project Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>


                {/* screenshot */}


                {/* testimonial */}
                <section className="testimonials__one" id="testimonials">
                    <img src="/assets/images/shapes/map-1-1.png" alt="Awesome Image" className="map-img" />
                    <img src="/assets/images/shapes/testi-hape-1.png" alt="" className="testimonials__one-shape-1" />
                    <img src="/assets/images/shapes/testi-shape-2.png" alt="" className="testimonials__one-shape-2" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex">
                                <div className="my-auto wow fadeInUp" data-wow-duration="1500ms">
                                    <div id="testimonials-slider-pager">
                                        <div className="testimonials-slider-pager-one">
                                            <span onClick={goNext} className="pager-item active" data-slide-index="0"><img
                                                src="/assets/images/s10.gif" style={{ height: '100px', width: '100px' }}
                                                alt="Awesome Image" /></span>
                                            <span onClick={goPrev} className="pager-item" data-slide-index="1"><img
                                                src="/assets/images/s2.gif" style={{ height: '100px', width: '100px' }}
                                                alt="Awesome Image" /></span>
                                            <span onClick={goNext} className="pager-item" data-slide-index="2"><img
                                                src="/assets/images/s3.gif" style={{ height: '100px', width: '100px' }}
                                                alt="Awesome Image" /></span>
                                            <span onClick={goPrev} className="pager-item" data-slide-index="3"><img
                                                src="/assets/images/s4.gif" style={{ height: '100px', width: '100px' }}
                                                alt="Awesome Image" /></span>
                                            <span onClick={goNext} className="pager-item" data-slide-index="4"><img
                                                src="/assets/images/s8.gif" style={{ height: '100px', width: '100px' }}
                                                alt="Awesome Image" /></span>
                                            <span onClick={goPrev} className="pager-item" data-slide-index="5"><img
                                                src="/assets/images/s9.gif" style={{ height: '100px', width: '100px' }}
                                                alt="Awesome Image" /></span>
                                        </div>
                                        <div className="testimonials-slider-pager-two">
                                            <a href="#" className="pager-item active" data-slide-index="0"><img
                                                src="/assets/images/s5.gif"
                                                alt="Awesome Image" /></a>
                                            <a href="#" className="pager-item" data-slide-index="1"><img
                                                src="/assets/images/testimonials/testi-1-2.jpg"
                                                alt="Awesome Image" /></a>
                                            <a href="#" className="pager-item" data-slide-index="2"><img
                                                src="/assets/images/testimonials/testi-1-3.jpg"
                                                alt="Awesome Image" /></a>
                                            <a href="#" className="pager-item" data-slide-index="3"><img
                                                src="/assets/images/testimonials/testi-1-4.jpg"
                                                alt="Awesome Image" /></a>
                                            <a href="#" className="pager-item" data-slide-index="4"><img
                                                src="/assets/images/testimonials/testi-1-5.jpg"
                                                alt="Awesome Image" /></a>
                                            <a href="#" className="pager-item" data-slide-index="5"><img
                                                src="/assets/images/testimonials/testi-1-6.jpg"
                                                alt="Awesome Image" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="block-title text-left">
                                    <span className="block-title__bubbles"></span>
                                    <p>Checkout Latest works</p>
                                    <h3>Create a Digital Marketing Plan</h3>
                                </div>
                                <ul className="slider testimonials-slider">

                                    <Swiper getSwiper={setSwiper}>

                                        <li className="slide-item">
                                            <div className="testimonials__one__single">
                                                <p>Develop a comprehensive plan that outlines the channels and tactics you'll use. This could include content marketing, social media marketing, search engine optimization (SEO), email marketing, paid advertising, and more.</p>

                                            </div>
                                        </li>
                                        <li className="slide-item">
                                            <div className="testimonials__one__single">
                                                <p>This is due to their excellent service, competitive pricing and
                                                    customer support. It’s
                                                    throughly refresing to get such a personal touch. Duis aute irure
                                                    dolor in reprehenderit
                                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                <h3>Terrilyn Werme</h3>
                                            </div>
                                        </li>
                                        <li className="slide-item">
                                            <div className="testimonials__one__single">
                                                <p>This is due to their excellent service, competitive pricing and
                                                    customer support. It’s
                                                    throughly refresing to get such a personal touch. Duis aute irure
                                                    dolor in reprehenderit
                                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                <h3>Kyle Demayo</h3>
                                            </div>
                                        </li>
                                        <li className="slide-item">
                                            <div className="testimonials__one__single">
                                                <p>This is due to their excellent service, competitive pricing and
                                                    customer support. It’s
                                                    throughly refresing to get such a personal touch. Duis aute irure
                                                    dolor in reprehenderit
                                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                <h3>Minta Hadad</h3>
                                            </div>
                                        </li>
                                        <li className="slide-item">
                                            <div className="testimonials__one__single">
                                                <p>This is due to their excellent service, competitive pricing and
                                                    customer support. It’s
                                                    throughly refresing to get such a personal touch. Duis aute irure
                                                    dolor in reprehenderit
                                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                                            </div>
                                        </li>
                                        <li className="slide-item">
                                            <div className="testimonials__one__single">
                                                <p>This is due to their excellent service, competitive pricing and
                                                    customer support. It’s
                                                    throughly refresing to get such a personal touch. Duis aute irure
                                                    dolor in reprehenderit
                                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                                            </div>
                                        </li>
                                    </Swiper>


                                    {/* <div className="testimonial_pagination">
                                   

                                </div> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* blog home */}

                <section className="blog-one blog-one__home" id="blog" >
                    <img src="/assets/images/shapes/blog-shape-1-1.png" alt="" className="blog-one__shape" />
                    <div>
                        <div className="block-title text-center">
                            <span className="block-title__bubbles"></span>
                            <p>Our Works</p>
                            <h3>Portfolio</h3>
                        </div>
                        <div className="" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <img
                                src="/assets/images/e1.png" // Replace with your image source
                                alt="Zoomable Image 1"
                                className={isZoomed1 ? 'zoomed' : ''}
                                onClick={() => this.handleImageClick(1)}
                                width={400} // Set the width of the zoomed-in image
                                height={300}
                                style={{ cursor: 'pointer', border: '2px solid #ccc', borderRadius: '8px', margin: 'auto', marginBottom: '20px' }}
                            />
                            {isZoomed1 && (
                                <div className="zoomed-overlay" onClick={() => this.handleCloseClick(1)}>
                                    {/* Zoomed content for Image 1 */}
                                    <img
                                        src="/assets/images/q2.png" // Replace with your zoomed-in image source
                                        alt="Zoomed Image 1"
                                        className="zoomed-image"

                                    />
                                    <div className="zoomed-title">
                                        KS PUNIL
                                    </div>
                                </div>
                            )}

                            <img
                                src="/assets/images/e3.png" // Replace with your image source
                                alt="Zoomable Image 2"
                                className={isZoomed2 ? 'zoomed' : ''}
                                onClick={() => this.handleImageClick(2)}
                                width={400} // Set the width of the zoomed-in image
                                height={300} style={{ cursor: 'pointer', border: '2px solid #ccc', borderRadius: '8px', margin: 'auto', marginBottom: '20px' }}
                            />
                            {isZoomed2 && (
                                <div className="zoomed-overlay" onClick={() => this.handleCloseClick(2)}>
                                    {/* Zoomed content for Image 2 */}
                                    <img
                                        src="/assets/images/q3.png" // Replace with your zoomed-in image source
                                        alt="Zoomed Image 2"
                                        className="zoomed-image"
                                        width={400} // Set the width of the zoomed-in image
                                        height={600}
                                    />
                                    <div className="zoomed-title">
                                        RO Water
                                    </div>
                                </div>
                            )}


                            {/* Second Column */}

                            <img
                                src="/assets/images/e5.png" // Replace with your image source
                                alt="Zoomable Image 3"
                                className={isZoomed3 ? 'zoomed' : ''}
                                onClick={() => this.handleImageClick(3)}
                                width={400} // Set the width of the zoomed-in image
                                height={300} style={{ cursor: 'pointer', border: '2px solid #ccc', borderRadius: '8px', margin: 'auto', marginBottom: '20px' }}
                            />
                            {isZoomed3 && (
                                <div className="zoomed-overlay" onClick={() => this.handleCloseClick(3)}>
                                    {/* Zoomed content for Image 3 */}
                                    <img
                                        src="/assets/images/q5.png" // Replace with your zoomed-in image source
                                        alt="Zoomed Image 3"
                                        className="zoomed-image"
                                        width={400} // Set the width of the zoomed-in image
                                        height={300}
                                    />
                                    <div className="zoomed-title">
                                        Daya Law Firm
                                    </div>
                                </div>
                            )}

                            <img
                                src="/assets/images/d1.png" // Replace with your image source
                                alt="Zoomable Image 4"
                                className={isZoomed4 ? 'zoomed' : ''}
                                onClick={() => this.handleImageClick(4)}
                                width={400} // Set the width of the zoomed-in image
                                height={300} style={{ cursor: 'pointer', border: '2px solid #ccc', borderRadius: '8px', margin: 'auto', marginBottom: '20px' }}
                            />
                            {isZoomed4 && (
                                <div className="zoomed-overlay" onClick={() => this.handleCloseClick(4)}>
                                    {/* Zoomed content for Image 4 */}
                                    <img
                                        src="/assets/images/q6.png" // Replace with your zoomed-in image source
                                        alt="Zoomed Image 4"
                                        className="zoomed-image"
                                        width={400} // Set the width of the zoomed-in image
                                        height={300}
                                    />
                                    <div className="zoomed-title">
                                        Mount Hermon Educational Institutions
                                    </div>
                                </div>
                            )}
                        </div>
                        <a href="/portfolio" className="thm-btn cta-three__btn" style={{ marginLeft: '800px' }}>View More</a>
                    </div>
                </section>
                {/* contact */}

                <section className="contact-one" id="contact">
                    {/* <img src="/assets/images/shapes/contact-Shape-1.png" alt="" className="contact-one__shape-1"/> */}
                    <img src="/assets/images/shapes/contact-shape-2.png" alt="" className="contact-one__shape-2" />
                    <img src="/assets/images/shapes/contact-shape-3.png" alt="" className="contact-one__shape-3" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-one__content">
                                    <div className="contact-one__images">
                                        <img src="/assets/images/c2.jpg" style={{ width: '300px' }}
                                            className="wow fadeInUp" data-wow-duration="1500ms" alt="" />
                                        {/* <img src="/assets/images/c4.png"
                                         className="wow fadeInUp" data-wow-duration="1500ms" alt=""/> */}
                                    </div>
                                    <div className="contact-one__infos">
                                        <div className="contact-one__infos-single">
                                            <div className="contact-one__infos-icon">
                                                <i className="zimed-icon-placeholder"></i>
                                            </div>
                                            <div className="contact-one__infos-content">
                                                <h3>Addresss</h3>
                                                <p>20 Broklyn Street, <br /> Dubai
                                                </p>
                                            </div>
                                        </div>
                                        <div className="contact-one__infos-single">
                                            <div className="contact-one__infos-icon">
                                                <i className="zimed-icon-message"></i>
                                            </div>
                                            <div className="contact-one__infos-content">
                                                <h3>Email</h3>
                                                <p><a href="mailto:needhelp@zimed.com">info@Nazairah.com</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="contact-one__infos-single">
                                            <div className="contact-one__infos-icon">
                                                <i className="zimed-icon-phone-call"></i>
                                            </div>
                                            <div className="contact-one__infos-content">
                                                <h3>Phone</h3>
                                                <p><a href="tel:666-888-0000">+1 666 888 0000</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-one__form-wrap">
                                    <div className="block-title">
                                        <span className="block-title__bubbles"></span>
                                        <p>Contact Us Now</p>
                                        <h3>Write a Message</h3>
                                    </div>
                                    <form action="" className="contact-form-validated contact-one__form">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <input type="text" name="name" placeholder="Name" />
                                            </div>

                                            <div className="col-md-12">
                                                <input type="text" name="subject" placeholder="Phone Number" />
                                            </div>
                                            <div className="col-md-12">
                                                <textarea name="message" placeholder="Message"></textarea>
                                                <button type="submit"
                                                    className="thm-btn contact-one__form-btn">Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="result"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* footer */}
                <div>
                    <footer className="site-footer" style={{ marginTop: '100px' }}>
                        <img src="/assets/images/shapes/footer-shape-1.png" className="site-footer__shape-1" alt="" />
                        <img src="/assets/images/shapes/footer-shape-2.png" className="site-footer__shape-2" alt="" />
                        <img src="/assets/images/shapes/footer-shape-3.png" className="site-footer__shape-3" alt="" />
                        <div className="site-footer__upper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="footer-widget footer-widget__about">
                                            <h3 style={{ color: 'black' }}><b>Nazairah</b></h3>
                                            <p>Boost your brand with our expert digital marketing solutions. Elevate online presence, engage audiences, and drive results. Let's shape your success together in the dynamic digital landscape. </p>
                                            <p><a href="mailto:needhelp@zimed.com">info@Zazairah.com</a> <br />
                                                <a href="tel:666-888-0000">+1 666 888 0000</a></p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="footer-widget footer-widget__links">
                                            <h3 className="footer-widget__title">Explore</h3>
                                            <div className="footer-widget__links-wrap">
                                                <ul className="list-unstyled">
                                                    <li><a href="#">Home</a></li>
                                                    <li><a href="#">About Us</a></li>
                                                    <li><a href="#">Services</a></li>
                                                    <li><a href="#">Portfolio</a></li>
                                                    <li><a href="#">Web Development</a></li>
                                                    <li><a href="#">Contact </a></li>
                                                </ul>

                                                <ul className="list-unstyled">
                                                    <li><a href="#">Help</a></li>
                                                    <li><a href="#">Support</a></li>
                                                    <li><a href="#">Contact us</a></li>
                                                    <li><a href="#">Privacy Policy</a></li>
                                                    <li><a href="#">Terms & Condition</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4">
                                        <div className="footer-widget footer-widget__subscribe">
                                            <h3 className="footer-widget__title">Subscribe</h3>
                                            <form className="footer-widget__mc-form mc-form" data-url="">
                                                <input type="text" name="email" placeholder="Email address" />
                                                <button type="submit"
                                                    className="thm-btn footer-widget__mc-btn">Register
                                                    Now
                                                </button>
                                            </form>
                                            <div className="mc-form__response"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="site-footer__bottom">
                            <div className="container">
                                <div className="inner-container">

                                    <div className="site-footer__social">
                                        <p>© copyright 2023 by Nazairah.com</p>
                                        {/* <a className="fab fa-facebook-f" href="#"></a>
                                                <a className="fab fa-twitter" href="#"></a>
                                                <a className="fab fa-instagram" href="#"></a>
                                                <a className="fab fa-pinterest-p" href="#"></a> */}
                                    </div>
                                    <p>Developed By OrangeMegaSoftware</p>
                                </div>

                            </div>

                        </div>
                    </footer>
                    <div onClick={this.scrollTop} className="scroll-to-target scroll-to-top" style={{ display: this.state.scrollBtn ? 'block' : 'none' }}><i
                        className="fa fa-angle-up"></i></div>

                    <div className="side-menu__block">


                        <div className="side-menu__block-overlay custom-cursor__overlay">
                            <div className="cursor"></div>
                            <div className="cursor-follower"></div>
                        </div>
                        <div className="side-menu__block-inner ">
                            <div className="side-menu__top justify-content-end">

                                <a href="#" className="side-menu__toggler side-menu__close-btn"><img
                                    src="assets/images/shapes/close-1-1.png" alt="" /></a>
                            </div>

                            <nav className="mobile-nav__container">

                            </nav>
                            <div className="side-menu__sep"></div>

                            <div className="side-menu__content">
                                <p>Boost your brand with our expert digital marketing solutions. Elevate online presence, engage audiences, and drive results. Let's shape your success together in the dynamic digital landscape. </p>
                                <p><a href="mailto:needhelp@zimed.com">info@Nazairah.com</a> <br /> <a
                                    href="tel:888-999-0000">+1 888 999 0000</a></p>
                                {/* <div className="side-menu__social">
                                <a className="fab fa-facebook-f" href="#"></a>
                                <a className="fab fa-twitter" href="#"></a>
                                <a className="fab fa-instagram" href="#"></a>
                                <a className="fab fa-pinterest-p" href="#"></a>
                            </div> */}
                            </div>

                        </div>

                    </div>

                </div>

            </>
        )
    }
}

export default Banner;