import React, { Component, params, goNext, goPrev, setSwiper } from 'react';
import ModalVideo from 'react-modal-video';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';



class Contact extends Component {
  

 

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <Layout>

<section className="banner-one" id="banner" style={{ backgroundImage: `url(/assets/images/c5.jpg)` }}>
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
                                    <h3>Contact </h3>
                                   
                                    <a href="#contact" data-target="#contact" className="thm-btn banner-one__btn scroll-to-target">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div></div>



        <section className="contact-one" id="contact" style={{marginBottom:'100px'}}>
            {/* <img src="/assets/images/shapes/contact-shape-1.png" alt="" className="contact-one__shape-1"/> */}
            <img src="/assets/images/shapes/contact-shape-2.png" alt="" className="contact-one__shape-2"/>
            <img src="/assets/images/shapes/contact-shape-3.png" alt="" className="contact-one__shape-3"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-one__content">
                            <div className="contact-one__images">
                                <img src="/assets/images/c6.png" style={{height:'', width:'300px'}}
                                     className="wow fadeInUp" data-wow-duration="1500ms" alt=""/>
                                     <img src="/assets/images/w9.gif" style={{height:'', width:'300px'}}
                                         className="wow fadeInUp" data-wow-duration="1500ms" alt=""/>
                            </div>
                            <div className="contact-one__infos">
                                <div className="contact-one__infos-single">
                                    <div className="contact-one__infos-icon">
                                        <i className="zimed-icon-placeholder"></i>
                                    </div>
                                    <div className="contact-one__infos-content">
                                        <h3>Addresss</h3>
                                        <p>20 Broklyn Street, <br/> Dubai
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
                                        <input type="text" name="name" placeholder="Name"/>
                                    </div>
                                   
                                    <div className="col-md-12">
                                        <input type="number" name="subject" placeholder="Phone Number"/>
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

        <section>
    <div style={{ width: '100%', overflow: 'hidden' }}>
        <iframe src="https://www.google.com/maps/d/embed?mid=1QlqZ-rT0_7n6LT3mbDDRxsyxass&hl=en_US&ehbc=2E312F" width="100%" height="480" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
    </div>
</section>

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

              

            </Layout>
        )
    }
}
  
export default Contact;