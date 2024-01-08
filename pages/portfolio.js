import React, { Component, index, goNext, goPrev, setSwiper, isLightboxOpen1, isLightboxOpen } from 'react';

import Layout from '../components/Layout';
// import ReactImageMagnify from 'react-image-magnify';

class Web extends Component {

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
    }

    handleImageClick = (imageNumber) => {
        this.setState((prevState) => ({ ['isZoomed' + imageNumber]: !prevState['isZoomed' + imageNumber] }));
    };

    handleCloseClick = (imageNumber) => {
        this.setState({ ['isZoomed' + imageNumber]: false });
    };

    render() {
        const { isZoomed1, isZoomed2, isZoomed3, isZoomed4, isZoomed5, isZoomed6, isZoomed7, isZoomed8 } = this.state;




        return (
            <Layout>

                <section className="banner-one" id="banner" style={{ backgroundImage: `url(/assets/images/po.jpg)`, marginBottom: '100px' }}>
                    <img src="/assets/images/shapes/banner-shapes-1-1.png" alt="" className="banner-one__shape-1" />
                    <img src="/assets/images/shapes/banner-shapes-1-2.png" alt="" className="banner-one__shape-2" />

                    <img src="/assets/images/shapes/banner-shapes-1-4.png" alt="" className="banner-one__shape-4" />
                    <img src="/assets/images/shapes/banner-shapes-1-5.png" alt="" className="banner-one__shape-5" />
                    <img src="/assets/images/shapes/banner-shapes-1-6.png" alt="" className="banner-one__shape-6" />
                    <img src="/assets/images/shapes/banner-shapes-1-7.png" alt="" className="banner-one__shape-7" />

                    <div className="container">
                        <img src="/assets/images/shapes/banner-shapes-1-3.png" alt="" className="banner-one__shape-moc-1" />
                        {/* <img src="/assets/images/h4.png" alt="" className="banner-one__moc" style={{ height: '400px' }} /> */}
                        <div className="row" >
                            <div className="col-lg-7">
                                <div className="banner-one__content">
                                    {/* <p className="banner-one__tag-line">Welcome to SEO Business <a href="#">free trial</a></p> */}
                                    <h3>Portfolio </h3>

                                    <a href="#contact" data-target="#contact" className="thm-btn banner-one__btn scroll-to-target">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div >



                    <div className="image-container" style={{ width: '100%' }}>
                        {/* First Column */}

                        <div className="" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <img
                                src="/assets/images/e1.png" // Replace with your image source
                                alt="Zoomable Image 1"
                                className={isZoomed1 ? 'zoomed' : ''}
                                onClick={() => this.handleImageClick(1)}
                                width={400} // Set the width of the zoomed-in image
                                height={300}
                                style={{ cursor: 'pointer', border: '2px solid #ccc', borderRadius: '8px', margin:'auto' ,marginBottom:'20px'}}
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
                                height={300} style={{ cursor: 'pointer', border: '2px solid #ccc', borderRadius: '8px', margin:'auto',marginBottom:'20px' }}
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
                                height={300} style={{ cursor: 'pointer', border: '2px solid #ccc', borderRadius: '8px', margin:'auto',marginBottom:'20px' }}
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
                                height={300} style={{ cursor: 'pointer', border: '2px solid #ccc', borderRadius: '8px', margin:'auto',marginBottom:'20px' }}
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

                        {/* Third Column */}
                        <div className="" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <img
                                src="/assets/images/index2.png" // Replace with your image source
                                alt="Zoomable Image 5"
                                className={isZoomed5 ? 'zoomed' : ''}
                                onClick={() => this.handleImageClick(5)}
                                width={400} // Set the width of the zoomed-in image
                                height={300} style={{ cursor: 'pointer', border: '2px solid #ccc', borderRadius: '8px', margin:'auto',marginBottom:'50px' }}
                            />
                            {isZoomed5 && (
                                <div className="zoomed-overlay" onClick={() => this.handleCloseClick(5)}>
                                    {/* Zoomed content for Image 5 */}
                                    <img
                                        src="/assets/images/q7.png" // Replace with your zoomed-in image source
                                        alt="Zoomed Image 5"
                                        className="zoomed-image"
                                        width={400} // Set the width of the zoomed-in image
                                        height={300}
                                    />
                                    <div className="zoomed-title">
                                    Gauzecom Healthcare
                                    </div>
                                </div>
                            )}

                            <img
                                src="/assets/images/q8.png" // Replace with your image source
                                alt="Zoomable Image 6"
                                className={isZoomed6 ? 'zoomed' : ''}
                                onClick={() => this.handleImageClick(6)}
                                width={400} // Set the width of the zoomed-in image
                                height={300} style={{ cursor: 'pointer', border: '2px solid #ccc', borderRadius: '8px', margin:'auto',marginBottom:'50px'  }}
                            />
                            {isZoomed6 && (
                                <div className="zoomed-overlay" onClick={() => this.handleCloseClick(6)}>
                                    {/* Zoomed content for Image 6 */}
                                    <img
                                        src="/assets/images/q9.png" // Replace with your zoomed-in image source
                                        alt="Zoomed Image 6"
                                        className="zoomed-image"
                                        width={400} // Set the width of the zoomed-in image
                                        height={300}
                                    />
                                    <div className="zoomed-title">
                                      Jaiwin promoters
                                    </div>
                                </div>
                            )}


                            {/* Fourth Column */}
                           
                            <img
                                src="/assets/images/d4.png" // Replace with your image source
                                alt="Zoomable Image 7"
                                className={isZoomed7 ? 'zoomed' : ''}
                                onClick={() => this.handleImageClick(7)}
                                width={400} // Set the width of the zoomed-in image
                                height={300} style={{ cursor: 'pointer', border: '2px solid #ccc', borderRadius: '8px', margin:'auto',marginBottom:'50px'  }}
                            />
                            {isZoomed7 && (
                                <div className="zoomed-overlay" onClick={() => this.handleCloseClick(7)}>
                                    {/* Zoomed content for Image 7 */}
                                    <img
                                        src="/assets/images/q10.png" // Replace with your zoomed-in image source
                                        alt="Zoomed Image 7"
                                        className="zoomed-image"
                                    
                                        width={400} // Set the width of the zoomed-in image
                                        height={300}
                                    />
                                    <div className="zoomed-title">
                                    CongenialDesigns & Roofing’s
                                    </div>
                                </div>
                            )}
<div className="zoomed-title">
                                      CADD SPOT
                                    </div>
                            <img
                                src="/assets/images/c1.png" // Replace with your image source
                                alt="Zoomable Image 8"
                                className={isZoomed8 ? 'zoomed' : ''}
                                onClick={() => this.handleImageClick(8)}
                                width={400} // Set the width of the zoomed-in image
                                height={300} style={{ cursor: 'pointer', border: '2px solid #ccc', borderRadius: '8px', margin:'auto',marginBottom:'50px'  }}
                            />
                            
                            
                            
                            {isZoomed8 && (
                                <div className="zoomed-overlay" onClick={() => this.handleCloseClick(8)}>
                                    {/* Zoomed content for Image 8 */}
                                    <img
                                        src="/assets/images/q11.png" // Replace with your zoomed-in image source
                                        alt="Zoomed Image 8"
                                        className="zoomed-image"
                                        width={400} // Set the width of the zoomed-in image
                                        height={300}
                                    />
                                    <div className="zoomed-title">
                                      CADD SPOT
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                    <section className="brand-one brand-one__home-one">
      <style jsx>{`
        .brand-one {
          padding: 100px;
          height: 400px;
        }

        @media only screen and (max-width: 768px) {
          .brand-one {
            padding: 50px;
            height: auto;
          }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .brand-one__carousel {
          display: flex;
          flex-direction: column; /* Updated to column for mobile view */
          align-items: center;
          justify-content: space-between;
        }

        .brand-one__text {
          margin-bottom: 20px;
          text-align: left;
        }

        p,
        h2 {
          color: white;
        }

        .brand-one__contact-button {
          background-color: #007bff;
          color: #fff;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 10%;
          width: 200px;
          transition: background-color 0.3s ease-in-out;
          display: flex;
          flex-direction: column; /* Updated to column for mobile view */
          align-items: center;
          justify-content: space-between;
          margin-top: 20px; /* Added margin for spacing in mobile view */
        }

        .brand-one__contact-button:hover {
          background-color: #0056b3;
        }

        .fas {
          margin-top: 8px; /* Adjusted margin for spacing in mobile view */
        }
      `}</style>
      <div className="container">
        <div className="brand-one__carousel">
          <div className="brand-one__text">
            <p>BUILD YOUR BUSINESS WITH Nazairah</p>
            <h2>We can accelerate your business’ growth and success with our suite of services.</h2>
          </div>
          <a href="#" className="brand-one__contact-button">
            <span>Contact Us</span>
           
          </a>
        </div>
      </div>
    </section>

                    {/* footer start */}
                    <footer className="site-footer" style={{ marginTop: '100px' }}>
                        <img src="/assets/images/shapes/footer-shape-1.png" className="site-footer__shape-1" alt="" />
                        <img src="/assets/images/shapes/footer-shape-2.png" className="site-footer__shape-2" alt="" />
                        <img src="/assets/images/shapes/footer-shape-3.png" className="site-footer__shape-3" alt="" />
                        <div className="site-footer__upper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="footer-widget footer-widget__about">
                                            <h3><b>Nazairah</b></h3>
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
                    {/* <div onClick={this.scrollTop} className="scroll-to-target scroll-to-top" style={{ display: this.state.scrollBtn ? 'block' : 'none' }}><i
                        className="fa fa-angle-up"></i></div> */}

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

            </Layout>
        )
    }
}

export default Web;