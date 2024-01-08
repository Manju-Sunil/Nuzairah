import React, { Component, params, goNext, goPrev, setSwiper } from 'react';
import ModalVideo from 'react-modal-video';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';



class Web extends Component {
  

 

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <Layout>

<section className="banner-one" id="banner" style={{ backgroundImage: `url(/assets/images/bgi3.gif)`,marginBottom:'100px' }}>
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
                                    <h3>Web Development </h3>
                                   
                                    <a href="#contact" data-target="#contact" className="thm-btn banner-one__btn scroll-to-target">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div>

                <div className="cta-three">

<img src="/assets/images/shapes/cta-1-shape-2.png" alt="" className="cta-three__shape-2" />
<img src="/assets/images/shapes/cta-1-shape-3.png" alt="" className="cta-three__shape-3" />
<div className="container">
    <img src="/assets/images/shapes/cta-1-shape-1.png" alt="" className="cta-three__shape-1" />
    <img src="/assets/images/w1.gif" style={{height:'600px', width:'700px'}} alt="" className="cta-three__moc" />
    <div className="row justify-content-end">
        <div className="col-lg-6">
            <div className="cta-three__content">
                <div className="block-title text-left">
                    <span className="block-title__bubbles"></span>
                    <p>Checkout App Features</p>
                    <h3>Web Development</h3>
                </div>
                <div className="cta-three__box-wrap">
                <div className="cta-three__box" style={{marginLeft:'50px'}}>
    <div className="cta-three__box-icon">
        <img src="/assets/images/w7.jpg" style={{ height: '80px', width: '80px', borderRadius: '50%',marginTop:'50px' }} alt="" className="cta-three__moc" />
    </div>
    <div className="cta-three__box-content" style={{marginLeft:'30px'}}>
        <h3>Responsive Web Design</h3>
        <p>Creating websites that work well on various devices and screen sizes..</p>
    </div>
</div>

<div className="cta-three__box" style={{marginLeft:'50px'}}>
    <div className="cta-three__box-icon">
        <img src="/assets/images/w5.gif" style={{ height: '80px', width: '80px', borderRadius: '50%',marginTop:'50px' }} alt="" className="cta-three__moc" />
    </div>
    <div className="cta-three__box-content" style={{marginLeft:'30px'}}>
        <h3>Web Security</h3>
        <p>Common security practices, HTTPS, protecting against common web vulnerabilities</p>
    </div>
</div>
                </div>

                <a href="#" className="thm-btn cta-three__btn">View More</a>
            </div>

        </div>

    </div>
</div>
</div>

<section className="cta-two">
                    <img src="/assets/images/shapes/cta-2-shape-1.png" alt="" className="cta-two__shape-1" />
                    <img src="/assets/images/shapes/cta-2-shape-2.png" alt="" className="cta-two__shape-2" />
                    <div className="container">
                        <img src="/assets/images/shapes/cta-2-shape-3.png" alt="" className="cta-two__shape-3" />
                        <img src="/assets/images/w8.gif" style={{ height: '500px', width: '600px' }} alt="" className="cta-two__moc" />
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="cta-two__content">
                                    <div className="block-title text-left">
                                        <span className="block-title__bubbles"></span>
                                        <p>Checkout App Features</p>
                                        <h3 style={{marginBottom:'-20px'}}>Updated Latest Technologies </h3>
                                    </div>

                                  <ul>
                                    <li><b>+ Frontend Development</b></li>
                                    <li><b>+ Backend Development</b></li>
                                    <li><b>+ Web Frameworks</b></li>
                                    <li><b>+ Version Control/Git</b></li>
                                    <li><b>+ Web Hosting and Deployment</b></li>
                                    <li><b>+ APIs</b></li>
                                    <li><b>+ Testing and Debugging</b></li>
                                    <li><b>+ Content Management Systems </b></li>
                                  </ul>
                                    <a href="#" className="thm-btn cta-two__btn">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


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


{/* <section className="banner-one" id="banner" style={{ backgroundImage: `url(/assets/images/po.jpg)`,marginBottom:'100px' }}>
                    <img src="/assets/images/shapes/banner-shapes-1-1.png" alt="" className="banner-one__shape-1" />
                    <img src="/assets/images/shapes/banner-shapes-1-2.png" alt="" className="banner-one__shape-2" />

                    <img src="/assets/images/shapes/banner-shapes-1-4.png" alt="" className="banner-one__shape-4" />
                    <img src="/assets/images/shapes/banner-shapes-1-5.png" alt="" className="banner-one__shape-5" />
                    <img src="/assets/images/shapes/banner-shapes-1-6.png" alt="" className="banner-one__shape-6" />
                    <img src="/assets/images/shapes/banner-shapes-1-7.png" alt="" className="banner-one__shape-7" />

                    <div className="container">
                        <img src="/assets/images/shapes/banner-shapes-1-3.png" alt="" className="banner-one__shape-moc-1" />
                        {/* <img src="/assets/images/h4.png" alt="" className="banner-one__moc" style={{ height: '400px' }} /> */}
                //         <div className="row" >
                //             <div className="col-lg-7">
                //                 <div className="banner-one__content">
                //                     {/* <p className="banner-one__tag-line">Welcome to SEO Business <a href="#">free trial</a></p> */}
                //                     <h3>Portfolio </h3>
                                   
                //                     <a href="#contact" data-target="#contact" className="thm-btn banner-one__btn scroll-to-target">Get Started</a>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </section> */}