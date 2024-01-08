import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setSticky(true);
      } else if (window.scrollY < 70) {
        setSticky(false);
      }
    };

    const mobileMenu = () => {
      let mobileNavContainer = document.querySelector(".mobile-nav__container");
      let mainNavContent = document.querySelector(".main-nav__main-navigation").innerHTML;
      mobileNavContainer.innerHTML = mainNavContent;

      document.querySelector(".side-menu__toggler").addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.toggle('active');
        e.preventDefault();
      });

      document.querySelector(".side-menu__close-btn").addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.remove('active');
        e.preventDefault();
      });
    };

    window.addEventListener('scroll', handleScroll);
    mobileMenu();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return (
    <div>
      <header className={`main-nav__header-one ${sticky ? "stricky stricked-menu stricky-fixed" : "stricky"}`}>
        <nav className="header-navigation">
          <div className="container">
            <div className="main-nav__logo-box">
              <h1 className='' style={{ color: "white" }}><b>Nazairah</b></h1>
              <a href="#" className="side-menu__toggler"><i className="fa fa-bars"></i></a>
            </div>
            <div className="main-nav__main-navigation">
                                <ul className="one-page-scroll-menu main-nav__navigation-box">
                                    <li className="current scrollToLink">
                                        <a href="/">Home</a>
                                    </li>
                                    <li className="scrollToLink">
                                        <a href="/About">About Us</a>
                                    </li>
                                    <li className="scrollToLink">
                                        <a href="/service">Services</a>
                                    </li>
                                    <li className="scrollToLink">
                                        <a href="/portfolio">Portfolio</a>
                                    </li>
                                    <li className="scrollToLink">
                                        <a href="/web">Web Development</a>
                                    </li>
                                    <li className="scrollToLink">
                                        <a href="/contact">Contact</a>
                                    </li>
                                    {/* <li className="scrollToLink">
                                        <a href="#features">Features</a>
                                    </li>
                                    <li className="scrollToLink">
                                        <a href="#pricing">Pricing</a>
                                    </li>
                                    <li className="scrollToLink">
                                        <a href="#app-shots">App Screens</a>
                                    </li>
                                    <li className="scrollToLink">
                                        <a href="#testimonials">Testimonials</a>
                                    </li> */}
                                    {/* <li className="dropdown scrollToLink">
                                        <a href="#blog">Blog</a>
                                        <ul>
                                            <li>
                                                <Link href="/blog">
                                                <a>Blog Page</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-details">
                                                <a>Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul>

                                    </li> */}
                                    {/* <li className="scrollToLink">
                                        <a href="#contact">Contact</a>
                                    </li> */}
                                </ul>
                            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
