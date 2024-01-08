import React, { Component, params, goNext, goPrev, setSwiper } from 'react';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import 'swiper/css/swiper.css';


import Layout from '../components/Layout';



class AboutUs extends Component {
  
    constructor(props) {
        super(props);

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

        
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
        
      
    }
 

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    onVisibilityChange(isVisible) {
        if (isVisible) {
            this.setState({ startCounter: true });
        }
    }

    render() {
        return (
            <Layout>

<section className="banner-one" id="banner" style={{ backgroundImage: `url(/assets/images/bg1.png)` }}>
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
                                    <h3>ABOUT US </h3>
                                   <p style={{color:'orange'}}>Welcome to Nazairah - Your Strategic Digital Partner</p>
                                    <a href="#contact" data-target="#contact" className="thm-btn banner-one__btn scroll-to-target">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div style={{marginBottom:'5px'}}>

                <section className="cta-two">
                    <img src="/assets/images/shapes/cta-2-shape-1.png" alt="" className="cta-two__shape-1" />
                    <img src="/assets/images/shapes/cta-2-shape-2.png" alt="" className="cta-two__shape-2" />
                    <div className="container">
                        <img src="/assets/images/shapes/cta-2-shape-3.png" alt="" className="cta-two__shape-3" />
                        <img src="/assets/images/a1.png" style={{ height: '400px', width: '600px' }} alt="" className="cta-two__moc" />
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="cta-two__content">
                                    <div className="block-title text-left">
                                        <span className="block-title__bubbles"></span>
                                        <p>Checkout App Features</p>
                                        <h3>Our Mission: Transforming Visions into Digital Reality</h3>
                                    </div>

                                    <p>Our mission is to transform your business vision into a digital reality that captivates your audience, drives engagement, and ultimately achieves your goals.  </p>
                                    <a href="#" className="thm-btn cta-two__btn">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="service-one" id="features">
                    <div className="container">
                        <div className="block-title text-center">
                            <span className="block-title__bubbles"></span>
                            <p>Checkout App Features</p>
                            <h3>Join Us on the Digital Journey</h3>
                        </div>
                        <div className="row">
                        <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms" style={{backgroundColor:'#396afc', borderRadius: '5%', margin: '30px'}}>
    <div>
        <span style={{ fontSize: '20px', color: 'white', backgroundColor: '#12c2e9', height: '50px', width: '50px', borderRadius: '50%', margin: '0 auto', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' ,marginTop:'50px'}}>01</span>
    </div>
    <h style={{color:'white'}}><b>WORKING WITH A WIDE RANGE OF INDUSTRIES GLOBALLY</b></h>
    <p style={{color:'white'}}>Through our experience and yours, we produce excellent results for your digital marketing requirements.</p>
</div>

<div className="service-one__col wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms" style={{backgroundColor:'#396afc', borderRadius: '5%', margin: '30px'}}>
    <div>
        <span style={{ fontSize: '20px', color: 'white', backgroundColor: '#12c2e9', height: '50px', width: '50px', borderRadius: '50%', margin: '0 auto', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' ,marginTop:'50px'}}>02</span>
    </div>
    <h style={{color:'white'}}><b>A COMPANY GROUNDED WITH A PURPOSE.</b></h>
    <p style={{color:'white'}}>Nazairah was built out of passion, envisioning our clients to dominate the digital space at competitive pricing.</p>
</div>

<div className="service-one__col wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms" style={{backgroundColor:'#396afc', borderRadius: '5%', margin: '30px'}}>
    <div>
        <span style={{ fontSize: '20px', color: 'white', backgroundColor: '#12c2e9', height: '50px', width: '50px', borderRadius: '50%', margin: '0 auto', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' ,marginTop:'50px'}}>03</span>
    </div>
    <h style={{color:'white'}}><b>LET'S GROW TOGETHER.</b></h>
    <p style={{color:'white'}}>Our success is bound to yours. We’ll collaborate to create a campaign tailor-fit to your business.</p>
</div>
                        </div>

                    </div>

                </section>

                {/* <section className="service-one" id="features">
                    <div className="container">
                        <div className="block-title text-center">
                            <span className="block-title__bubbles"></span>
                            <p>Why Choose Nazairah</p>
                            <h3 style={{marginBottom:'70px'}}>Work with a Complete<br></br>
Digital Marketing Company</h3>
<h>Save your precious time and allocate it to grow your business instead! Let our team handle your digital marketing requirements.</h>
                        </div>
                   <div className='container'>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '50%' }}>
 
  <div style={{ flex: 1, marginRight: '10px' }}>
    <p><b>SEO</b></p>
  </div>

  
  <div style={{ flex: 2 }}>
    <div className="progress-bar" style={{ width: '100%', marginBottom: '20px',borderRadius:'4%' }}>
      <div className="progress" style={{ width: '10%', height: '15px', backgroundColor: '#ddd', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
        <span className="progress-text" style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: 'black', fontWeight: 'bold' }}>95%</span>
      </div>
    </div>
  </div>
</div>


<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '50%' }}>
  
  <div style={{ flex: 1, marginRight: '10px' }}>
  <p><b>Social Media Marketing</b></p>
  </div>

 
  <div style={{ flex: 2 }}>
    <div className="progress-bar" style={{ width: '100%', marginBottom: '20px',borderRadius:'4%' }}>
      <div className="progress" style={{ width: '25%', height: '15px', backgroundColor: '#ddd', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
        <span className="progress-text" style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: 'black', fontWeight: 'bold' }}>80%</span>
      </div>
    </div>
  </div>
</div>



<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '50%'}}>
  
  <div style={{ flex: 1, marginRight: '10px' }}>
  <p><b>E-Mail Marketing</b></p>
  </div>

  
  <div style={{ flex: 2 }}>
    <div className="progress-bar" style={{ width: '100%', marginBottom: '20px',borderRadius:'4%' }}>
      <div className="progress" style={{ width: '20%', height: '15px', backgroundColor: '#ddd', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
        <span className="progress-text" style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: 'black', fontWeight: 'bold' }}>92%</span>
      </div>
    </div>
  </div>
</div>




<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '50%' }}>
 
  <div style={{ flex: 1, marginRight: '10px' }}>
  <p><b>Data Analysis</b></p>
  </div>

 
  <div style={{ flex: 2 }}>
    <div className="progress-bar" style={{ width: '100%', marginBottom: '20px',borderRadius:'4%' }}>
      <div className="progress" style={{ width: '30%', height: '15px', backgroundColor: '#ddd', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
        <span className="progress-text" style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: 'black', fontWeight: 'bold' }}>70%</span>
      </div>
    </div>
  </div>
</div>



<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '50%'}}>

  <div style={{ flex: 1, marginRight: '10px' }}>
  <p><b>Client-Centric Approach</b></p>
  </div>


  <div style={{ flex: 2 }}>
    <div className="progress-bar" style={{ width: '100%', marginBottom: '20px',borderRadius:'4%' }}>
      <div className="progress" style={{ width: '20%', height: '15px', backgroundColor: '#ddd', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
        <span className="progress-text" style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: 'black', fontWeight: 'bold' }}>80%</span>
      </div>
    </div>
  </div>
</div>

</div>
</div> 

</section> */}

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

export default AboutUs;