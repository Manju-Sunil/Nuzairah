import React, { Component, params, goNext, goPrev, setSwiper } from 'react';
import ModalVideo from 'react-modal-video';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';



class Service extends Component {
  

 

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <Layout>

<section className="banner-one" id="banner" style={{ backgroundImage: `url(/assets/images/bg6.jpg)` }}>
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
                                    <h3>Our Services </h3>
                                   
                                    <a href="#contact" data-target="#contact" className="thm-btn banner-one__btn scroll-to-target">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div>

                <section className="blog-one blog-one__home" id="blog" style={{marginBottom:'100px'}}>
                    <img src="/assets/images/shapes/blog-shape-1-1.png" alt="" className="blog-one__shape-1" />
                    <div className="container-fluid">
                        <div className="block-title text-center">
                            <span className="block-title__bubbles"></span>
                            <p>OUR SERVICES</p>
                            <h3>Nazairah Digital Marketing is a professional Digital Marketing agency <br></br> with an extensive range of capabilities</h3>
                        </div>

                        <div className=" row">
                        <div className="col-lg-3 wow fadeInRight" data-wow-duration="1500ms">
  <div className="blog-one__single" style={{ textAlign: 'center', width: '400px', height: '600px' }}>
    <div className="blog-one__image" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', borderRadius: '50%', width: '50px', height: '50px', lineHeight: '50px', margin: ' auto', background: '#56CCF2', color: '#fff',marginBottom:'20px' }}>01</h1>
      <img src="/assets/images/g5.gif" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '5%',marginBottom:'30px' }} alt="" />
      <h3 style={{ marginLeft: '20px' ,color:'white'}}><b>Social Media  Marketing</b></h3>
      <p style={{ marginLeft: '20px' ,color:'white'}}>We love talking to our clients no matter where in the world they may be. Our interactive introduction process allows us to make sure we know what exactly you want and how you want us to execute.</p>
    </div>
  </div>
</div>



<div className="col-lg-3 wow fadeInRight" data-wow-duration="1500ms">
  <div className="blog-one__single" style={{ textAlign: 'center', width: '400px', height: '600px' }}>
    <div className="blog-one__image" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', borderRadius: '50%', width: '50px', height: '50px', lineHeight: '50px', margin: ' auto', background: '#56CCF2', color: '#fff',marginBottom:'20px' }}>02</h1>
      <img src="/assets/images/g2.gif" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '5%',marginBottom:'30px' }} alt="" />
      <h3 style={{ marginLeft: '20px' ,color:'white'}}><b>E-Mail Marketing</b></h3>
      <p style={{ marginLeft: '20px' ,color:'white'}}>Your dedicated Project Manager then works with our Technical Execution Team to meet the deliverables. Our collective experience spans various industries, allowing us to craft bespoke strategies that resonate.</p>
    </div>
  </div>
</div> <div className="col-lg-3 wow fadeInRight" data-wow-duration="1500ms">
  <div className="blog-one__single" style={{ textAlign: 'center', width: '400px', height: '600px' }}>
    <div className="blog-one__image" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', borderRadius: '50%', width: '50px', height: '50px', lineHeight: '50px', margin: ' auto', background: '#56CCF2', color: '#fff',marginBottom:'20px' }}>03</h1>
      <img src="/assets/images/g3.gif" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '5%',marginBottom:'30px' }} alt="" />
      <h3 style={{ marginLeft: '20px' ,color:'white'}}><b>Data Analysis</b></h3>
      <p style={{ marginLeft: '20px' ,color:'white'}}>Once we have produced your deliverable, we will provide recommendations for ensuring maximum results for our clients in the long run.providing regular updates on the progress of your digital campaigns</p>
    </div>
  </div>
</div>
<div className="col-lg-3 wow fadeInRight" data-wow-duration="1500ms">
  <div className="blog-one__single" style={{ textAlign: 'center', width: '400px', height: '600px' }}>
    <div className="blog-one__image" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', borderRadius: '50%', width: '50px', height: '50px', lineHeight: '50px', margin: ' auto', background: '#56CCF2', color: '#fff',marginBottom:'20px' }}>04</h1>
      <img src="/assets/images/g7.gif" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '5%',marginBottom:'30px' }} alt="" />
      <h3 style={{ marginLeft: '20px' ,color:'white'}}><b>Content Marketing</b></h3>
      <p style={{ marginLeft: '20px' ,color:'white'}}>Digital marketing is an ever-evolving landscape, and we thrive on staying ahead of the curve. Our team is dedicated to continuous learning, embracing emerging trends, and leveraging .</p>
    </div>
  </div>
</div>             

                        </div>
                    </div>
              
                {/* <section className="blog-one blog-one__home" id="blog"> */}
                    <img src="/assets/images/shapes/blog-shape-1-1.png" alt="" className="blog-one__shape-1" />
                    <div className="container-fluid">
                        

                        <div className=" row">
                        <div className="col-lg-3 wow fadeInRight" data-wow-duration="1500ms">
  <div className="blog-one__single" style={{ textAlign: 'center', width: '400px', height: '600px' }}>
    <div className="blog-one__image" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', borderRadius: '50%', width: '50px', height: '50px', lineHeight: '50px', margin: 'auto', background: '#56CCF2', color: '#fff',marginBottom:'20px' }}>05</h1>
      <img src="/assets/images/n1.gif" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '5%',marginBottom:'30px' }} alt="" />
      <h3 style={{ marginLeft: '20px' ,color:'white'}}><b>Search Engine Optimization</b></h3>
      <p style={{ marginLeft: '20px' ,color:'white'}}>SEO involves optimizing a website's content and structure to improve its visibility on search engines. The goal is to increase organic (non-paid) traffic by ranking higher in search engine results pages.</p>
    </div>
  </div>
</div>



<div className="col-lg-3 wow fadeInRight" data-wow-duration="1500ms">
  <div className="blog-one__single" style={{ textAlign: 'center', width: '400px', height: '600px' }}>
    <div className="blog-one__image" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', borderRadius: '50%', width: '50px', height: '50px', lineHeight: '50px', margin: ' auto', background: '#56CCF2', color: '#fff',marginBottom:'20px' }}>06</h1>
      <img src="/assets/images/n2.gif" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '5%',marginBottom:'30px' }} alt="" />
      <h3 style={{ marginLeft: '20px' ,color:'white'}}><b>Search Engine Marketing Service </b></h3>
      <p style={{ marginLeft: '20px' ,color:'white'}}>SEM involves paid advertising on search engines. It includes pay-per-click (PPC) campaigns, where advertisers bid on keywords to display their ads in search engine results.</p>
    </div>
  </div>
</div> <div className="col-lg-3 wow fadeInRight" data-wow-duration="1500ms">
  <div className="blog-one__single" style={{ textAlign: 'center', width: '400px', height: '600px' }}>
    <div className="blog-one__image" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', borderRadius: '50%', width: '50px', height: '50px', lineHeight: '50px', margin: ' auto', background: '#56CCF2', color: '#fff',marginBottom:'20px' }}>07</h1>
      <img src="/assets/images/n3.gif" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '5%',marginBottom:'30px' }} alt="" />
      <h3 style={{ marginLeft: '20px' ,color:'white'}}><b>Influencer Marketing Service</b></h3>
      <p style={{ marginLeft: '20px' ,color:'white'}}>This involves partnering with influencers (individuals with a significant following on social media or other online platforms) to promote products or services ,providing updates, and nurturing leads.</p>
    </div>
  </div>
</div>
<div className="col-lg-3 wow fadeInRight" data-wow-duration="1500ms">
  <div className="blog-one__single" style={{ textAlign: 'center', width: '400px', height: '600px' }}>
    <div className="blog-one__image" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', borderRadius: '50%', width: '50px', height: '50px', lineHeight: '50px', margin: ' auto', background: '#56CCF2', color: '#fff',marginBottom:'20px' }}>08</h1>
      <img src="/assets/images/n4.gif" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '5%',marginBottom:'30px' }} alt="" />
      <h3 style={{ marginLeft: '20px' ,color:'white'}}><b>Mobile Marketing Service</b></h3>
      <p style={{ marginLeft: '20px' ,color:'white'}}>With the increasing use of mobile devices, mobile marketing focuses on reaching and engaging users on smartphones and tablets through mobile apps, websites, and other mobile channels and  build brand awareness, and drive traffic. </p>
    </div>
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

export default Service;