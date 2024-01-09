module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Banner.js":
/*!******************************!*\
  !*** ./components/Banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal-video */ "react-modal-video");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/swiper.css */ "./node_modules/swiper/css/swiper.css");
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\components\\Banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Banner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleImageClick", imageNumber => {
      this.setState(prevState => ({
        ['isZoomed' + imageNumber]: !prevState['isZoomed' + imageNumber]
      }));
    });

    _defineProperty(this, "handleCloseClick", imageNumber => {
      this.setState({
        ['isZoomed' + imageNumber]: false
      });
    });

    this.state = {
      isZoomed1: false,
      isZoomed2: false,
      isZoomed3: false,
      isZoomed4: false,
      isZoomed5: false,
      isZoomed6: false,
      isZoomed7: false,
      isZoomed8: false
    };
    this.state = {
      isOpen: false,
      startCounter: false,
      toggleState: {
        month: true,
        year: false
      },
      swiper: null,
      scrollBtn: false
    };
    this.openModal = this.openModal.bind(this);
    this.onVisibilityChange = this.onVisibilityChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  onVisibilityChange(isVisible) {
    if (isVisible) {
      this.setState({
        startCounter: true
      });
    }
  }

  handleToggle() {
    this.setState(prevState => ({
      toggleState: {
        month: !prevState.toggleState.month,
        year: !prevState.toggleState.year
      }
    }));
  }

  goNext() {
    const {
      swiper
    } = this.state;

    if (swiper !== null) {
      swiper.slideNext();
    }
  }

  goPrev() {
    const {
      swiper
    } = this.state;

    if (swiper !== null) {
      swiper.slidePrev();
    }
  }

  handleScroll() {
    if (window.scrollY > 70) {
      this.setState({
        scrollBtn: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        scrollBtn: false
      });
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
    const {
      isZoomed1,
      isZoomed2,
      isZoomed3,
      isZoomed4
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
      className: "banner-one",
      id: "banner",
      style: {
        backgroundImage: `url(/assets/images/background/banner-bg-1-1.png)`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/banner-shapes-1-1.png",
      alt: "",
      className: "banner-one__shape-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/banner-shapes-1-2.png",
      alt: "",
      className: "banner-one__shape-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/banner-shapes-1-4.png",
      alt: "",
      className: "banner-one__shape-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/banner-shapes-1-5.png",
      alt: "",
      className: "banner-one__shape-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/banner-shapes-1-6.png",
      alt: "",
      className: "banner-one__shape-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/banner-shapes-1-7.png",
      alt: "",
      className: "banner-one__shape-7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-lg-7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "banner-one__content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: "banner-one__tag-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 37
      }
    }, "Welcome to SEO Business ", __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 97
      }
    }, "free trial")), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 37
      }
    }, "We help achieve ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 57
      }
    }), " biggest goals"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 37
      }
    }, "We are committed to providing our customers with exceptional service ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 109
      }
    }), " while offering our Digital Marketing."), __jsx("a", {
      href: "#contact",
      "data-target": "#contact",
      className: "thm-btn banner-one__btn scroll-to-target",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 37
      }
    }, "Get Started")))), __jsx("img", {
      src: "/assets/images/shapes/banner-shapes-1-3.png",
      alt: "",
      className: "banner-one__shape-moc-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: "/assets/images/m1.gif",
      style: {
        height: '600px',
        width: '600px',
        borderRadius: '50%',
        objectFit: 'cover'
      },
      alt: "",
      className: "banner-one__moc banner-gif_",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 25
      }
    }))), __jsx("section", {
      className: "service-one",
      id: "features",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "block-title text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "block-title__bubbles",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 29
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 29
      }
    }, "Checkout App Features"), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 29
      }
    }, "Our Highly-Tailored Digital Marketing", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 70
      }
    }), " Services")), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "service-one__col wow fadeInUp",
      "data-wow-duration": "1500ms",
      "data-wow-delay": "000ms",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "service-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "/assets/images/w5.gif",
      style: {
        height: '100px',
        width: '100px',
        borderRadius: '50%',
        marginBottom: '50px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 37
      }
    }), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 37
      }
    }, "SEO"))), __jsx("div", {
      className: "service-one__col wow fadeInUp",
      "data-wow-duration": "1500ms",
      "data-wow-delay": "100ms",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "service-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "/assets/images/w4.gif",
      style: {
        height: '100px',
        width: '100px',
        borderRadius: '50%',
        marginBottom: '50px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 37
      }
    }), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 37
      }
    }, "Content Marketing"))), __jsx("div", {
      className: "service-one__col wow fadeInUp",
      "data-wow-duration": "1500ms",
      "data-wow-delay": "200ms",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "service-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "/assets/images/w6.gif",
      style: {
        height: '100px',
        width: '100px',
        borderRadius: '50%',
        marginBottom: '50px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 37
      }
    }), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 37
      }
    }, "Social Media Marketing"))), __jsx("div", {
      className: "service-one__col wow fadeInUp",
      "data-wow-duration": "1500ms",
      "data-wow-delay": "300ms",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "service-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "/assets/images/w8.gif",
      style: {
        height: '100px',
        width: '100px',
        borderRadius: '50%',
        marginBottom: '50px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 37
      }
    }), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 37
      }
    }, "Email Marketing"))), __jsx("div", {
      className: "service-one__col wow fadeInUp",
      "data-wow-duration": "1500ms",
      "data-wow-delay": "400ms",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "service-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "/assets/images/w10.gif",
      style: {
        height: '100px',
        width: '100px',
        borderRadius: '50%',
        marginBottom: '50px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 37
      }
    }), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 37
      }
    }, " Data Analysis")))))), __jsx("div", {
      className: "cta-three",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/cta-1-shape-2.png",
      alt: "",
      className: "cta-three__shape-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/cta-1-shape-3.png",
      alt: "",
      className: "cta-three__shape-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/cta-1-shape-1.png",
      alt: "",
      className: "cta-three__shape-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: "/assets/images/img.png",
      alt: "",
      className: "cta-three__moc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "row justify-content-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-lg-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "cta-three__content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "block-title text-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "block-title__bubbles",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 41
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 41
      }
    }, "Checkout App Features"), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 41
      }
    }, "Digital Marketing Clue")), __jsx("div", {
      className: "cta-three__box-wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "cta-three__box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "cta-three__box-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 45
      }
    }, __jsx("i", {
      className: "zimed-icon-strategy",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 49
      }
    })), __jsx("div", {
      className: "cta-three__box-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 45
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 49
      }
    }, "Search Engine Marketing"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 49
      }
    }, "All our SEM techniques are conversion-focused, which helps companies meet their revenue goals."))), __jsx("div", {
      className: "cta-three__box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "cta-three__box-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 45
      }
    }, __jsx("i", {
      className: "zimed-icon-training",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 49
      }
    })), __jsx("div", {
      className: "cta-three__box-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 45
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 49
      }
    }, "Content Writing & Marketing"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 49
      }
    }, "Our team  is specially trained to offer the most premium content to clients.")))), __jsx("a", {
      href: "#",
      className: "thm-btn cta-three__btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 37
      }
    }, "View More")))))), __jsx("section", {
      className: "cta-two",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/cta-2-shape-1.png",
      alt: "",
      className: "cta-two__shape-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/cta-2-shape-2.png",
      alt: "",
      className: "cta-two__shape-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/cta-2-shape-3.png",
      alt: "",
      className: "cta-two__shape-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: "/assets/images/img5.jpg",
      style: {
        height: '400px',
        width: '500px'
      },
      alt: "",
      className: "cta-two__moc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-xl-5 col-lg-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "cta-two__content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "block-title text-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "block-title__bubbles",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 41
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 41
      }
    }, "Checkout App Features"), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 41
      }
    }, "A Online Marketing Agency That Makes Waves for Our Clients")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 37
      }
    }, "Our Online marketing agency specializes in improving the visibility, impact, and bottom line of our customers.."), __jsx("a", {
      href: "#",
      className: "thm-btn cta-two__btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 37
      }
    }, "View More")))))), __jsx("section", {
      className: "video-one",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "video-one__box wow fadeInUp",
      "data-wow-duration": "1500ms",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: "/assets/images/bg.jpg",
      style: {
        height: '500px',
        width: '100%'
      },
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "video-one__content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 29
      }
    }, __jsx(react_modal_video__WEBPACK_IMPORTED_MODULE_1___default.a, {
      channel: "youtube",
      isOpen: this.state.isOpen,
      videoId: "aitb---aDYM",
      onClose: () => this.setState({
        isOpen: false
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 33
      }
    }), __jsx("div", {
      onClick: this.openModal,
      className: "video-popup",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 33
      }
    }, __jsx("i", {
      className: "fa fa-play",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 87
      }
    })), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 33
      }
    }, "Watch Our Video"))))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 17
      }
    }, __jsx("section", {
      className: "funfact-one",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/pricing-shape-1.png",
      alt: "",
      className: "funfact-one__shape-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/pricing-shape-2.png",
      alt: "",
      className: "funfact-one__shape-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/pricing-shape-3.png",
      alt: "",
      className: "funfact-one__shape-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "funfact-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 37
      }
    }, __jsx("h3", {
      className: "counter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 41
      }
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 45
      }
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, {
      end: this.state.startCounter ? 700 : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 131
      }
    }))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 41
      }
    }, "Happy Clients"))), __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "funfact-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 37
      }
    }, __jsx("h3", {
      className: "counter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 41
      }
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 45
      }
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, {
      end: this.state.startCounter ? 200 : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 131
      }
    }))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 41
      }
    }, "Achivements"))), __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "funfact-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 37
      }
    }, __jsx("h3", {
      className: "counter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 41
      }
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 45
      }
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, {
      end: this.state.startCounter ? 360 : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 131
      }
    }))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 41
      }
    }, "5 Star Rating"))), __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "funfact-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 37
      }
    }, __jsx("h3", {
      className: "counter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 41
      }
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 45
      }
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, {
      end: this.state.startCounter ? 200 : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 131
      }
    }))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 41
      }
    }, "Project Completed"))))))), __jsx("section", {
      className: "testimonials__one",
      id: "testimonials",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/map-1-1.png",
      alt: "Awesome Image",
      className: "map-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/testi-hape-1.png",
      alt: "",
      className: "testimonials__one-shape-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/testi-shape-2.png",
      alt: "",
      className: "testimonials__one-shape-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-lg-6 d-flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "my-auto wow fadeInUp",
      "data-wow-duration": "1500ms",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 33
      }
    }, __jsx("div", {
      id: "testimonials-slider-pager",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "testimonials-slider-pager-one",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 41
      }
    }, __jsx("span", {
      onClick: react__WEBPACK_IMPORTED_MODULE_0__["goNext"],
      className: "pager-item active",
      "data-slide-index": "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 45
      }
    }, __jsx("img", {
      src: "/assets/images/s10.gif",
      style: {
        height: '100px',
        width: '100px'
      },
      alt: "Awesome Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 119
      }
    })), __jsx("span", {
      onClick: react__WEBPACK_IMPORTED_MODULE_0__["goPrev"],
      className: "pager-item",
      "data-slide-index": "1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 45
      }
    }, __jsx("img", {
      src: "/assets/images/s2.gif",
      style: {
        height: '100px',
        width: '100px'
      },
      alt: "Awesome Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 112
      }
    })), __jsx("span", {
      onClick: react__WEBPACK_IMPORTED_MODULE_0__["goNext"],
      className: "pager-item",
      "data-slide-index": "2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 45
      }
    }, __jsx("img", {
      src: "/assets/images/s3.gif",
      style: {
        height: '100px',
        width: '100px'
      },
      alt: "Awesome Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 112
      }
    })), __jsx("span", {
      onClick: react__WEBPACK_IMPORTED_MODULE_0__["goPrev"],
      className: "pager-item",
      "data-slide-index": "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 45
      }
    }, __jsx("img", {
      src: "/assets/images/s4.gif",
      style: {
        height: '100px',
        width: '100px'
      },
      alt: "Awesome Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 112
      }
    })), __jsx("span", {
      onClick: react__WEBPACK_IMPORTED_MODULE_0__["goNext"],
      className: "pager-item",
      "data-slide-index": "4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 45
      }
    }, __jsx("img", {
      src: "/assets/images/s8.gif",
      style: {
        height: '100px',
        width: '100px'
      },
      alt: "Awesome Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 112
      }
    })), __jsx("span", {
      onClick: react__WEBPACK_IMPORTED_MODULE_0__["goPrev"],
      className: "pager-item",
      "data-slide-index": "5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 45
      }
    }, __jsx("img", {
      src: "/assets/images/s9.gif",
      style: {
        height: '100px',
        width: '100px'
      },
      alt: "Awesome Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 112
      }
    }))), __jsx("div", {
      className: "testimonials-slider-pager-two",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 41
      }
    }, __jsx("a", {
      href: "#",
      className: "pager-item active",
      "data-slide-index": "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 45
      }
    }, __jsx("img", {
      src: "/assets/images/s5.gif",
      alt: "Awesome Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 108
      }
    })), __jsx("a", {
      href: "#",
      className: "pager-item",
      "data-slide-index": "1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 45
      }
    }, __jsx("img", {
      src: "/assets/images/testimonials/testi-1-2.jpg",
      alt: "Awesome Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 101
      }
    })), __jsx("a", {
      href: "#",
      className: "pager-item",
      "data-slide-index": "2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 45
      }
    }, __jsx("img", {
      src: "/assets/images/testimonials/testi-1-3.jpg",
      alt: "Awesome Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 101
      }
    })), __jsx("a", {
      href: "#",
      className: "pager-item",
      "data-slide-index": "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 45
      }
    }, __jsx("img", {
      src: "/assets/images/testimonials/testi-1-4.jpg",
      alt: "Awesome Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 101
      }
    })), __jsx("a", {
      href: "#",
      className: "pager-item",
      "data-slide-index": "4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 45
      }
    }, __jsx("img", {
      src: "/assets/images/testimonials/testi-1-5.jpg",
      alt: "Awesome Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 101
      }
    })), __jsx("a", {
      href: "#",
      className: "pager-item",
      "data-slide-index": "5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 45
      }
    }, __jsx("img", {
      src: "/assets/images/testimonials/testi-1-6.jpg",
      alt: "Awesome Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 101
      }
    })))))), __jsx("div", {
      className: "col-lg-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "block-title text-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 33
      }
    }, __jsx("span", {
      className: "block-title__bubbles",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 37
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 37
      }
    }, "Checkout Latest works"), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 37
      }
    }, "Create a Digital Marketing Plan")), __jsx("ul", {
      className: "slider testimonials-slider",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 33
      }
    }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_4___default.a, {
      getSwiper: react__WEBPACK_IMPORTED_MODULE_0__["setSwiper"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 37
      }
    }, __jsx("li", {
      className: "slide-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "testimonials__one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 45
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 49
      }
    }, "Develop a comprehensive plan that outlines the channels and tactics you'll use. This could include content marketing, social media marketing, search engine optimization (SEO), email marketing, paid advertising, and more."))), __jsx("li", {
      className: "slide-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "testimonials__one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 45
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 49
      }
    }, "This is due to their excellent service, competitive pricing and customer support. It\u2019s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440,
        columnNumber: 49
      }
    }, "Terrilyn Werme"))), __jsx("li", {
      className: "slide-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 443,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "testimonials__one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 45
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 49
      }
    }, "This is due to their excellent service, competitive pricing and customer support. It\u2019s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450,
        columnNumber: 49
      }
    }, "Kyle Demayo"))), __jsx("li", {
      className: "slide-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "testimonials__one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454,
        columnNumber: 45
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455,
        columnNumber: 49
      }
    }, "This is due to their excellent service, competitive pricing and customer support. It\u2019s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 49
      }
    }, "Minta Hadad"))), __jsx("li", {
      className: "slide-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "testimonials__one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 45
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465,
        columnNumber: 49
      }
    }, "This is due to their excellent service, competitive pricing and customer support. It\u2019s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."))), __jsx("li", {
      className: "slide-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "testimonials__one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 474,
        columnNumber: 45
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475,
        columnNumber: 49
      }
    }, "This is due to their excellent service, competitive pricing and customer support. It\u2019s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."))))))))), __jsx("section", {
      className: "blog-one blog-one__home",
      id: "blog",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/blog-shape-1-1.png",
      alt: "",
      className: "blog-one__shape",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 21
      }
    }), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "block-title text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "block-title__bubbles",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502,
        columnNumber: 29
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 29
      }
    }, "Our Works"), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504,
        columnNumber: 29
      }
    }, "Portfolio")), __jsx("div", {
      className: "",
      style: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: "/assets/images/e1.png" // Replace with your image source
      ,
      alt: "Zoomable Image 1",
      className: isZoomed1 ? 'zoomed' : '',
      onClick: () => this.handleImageClick(1),
      width: 400 // Set the width of the zoomed-in image
      ,
      height: 300,
      style: {
        cursor: 'pointer',
        border: '2px solid #ccc',
        borderRadius: '8px',
        margin: 'auto',
        marginBottom: '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 29
      }
    }), isZoomed1 && __jsx("div", {
      className: "zoomed-overlay",
      onClick: () => this.handleCloseClick(1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "/assets/images/q2.png" // Replace with your zoomed-in image source
      ,
      alt: "Zoomed Image 1",
      className: "zoomed-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519,
        columnNumber: 37
      }
    }), __jsx("div", {
      className: "zoomed-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525,
        columnNumber: 37
      }
    }, "KS PUNIL")), __jsx("img", {
      src: "/assets/images/e3.png" // Replace with your image source
      ,
      alt: "Zoomable Image 2",
      className: isZoomed2 ? 'zoomed' : '',
      onClick: () => this.handleImageClick(2),
      width: 400 // Set the width of the zoomed-in image
      ,
      height: 300,
      style: {
        cursor: 'pointer',
        border: '2px solid #ccc',
        borderRadius: '8px',
        margin: 'auto',
        marginBottom: '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531,
        columnNumber: 29
      }
    }), isZoomed2 && __jsx("div", {
      className: "zoomed-overlay",
      onClick: () => this.handleCloseClick(2),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "/assets/images/q3.png" // Replace with your zoomed-in image source
      ,
      alt: "Zoomed Image 2",
      className: "zoomed-image",
      width: 400 // Set the width of the zoomed-in image
      ,
      height: 600,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 37
      }
    }), __jsx("div", {
      className: "zoomed-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 549,
        columnNumber: 37
      }
    }, "RO Water")), __jsx("img", {
      src: "/assets/images/e5.png" // Replace with your image source
      ,
      alt: "Zoomable Image 3",
      className: isZoomed3 ? 'zoomed' : '',
      onClick: () => this.handleImageClick(3),
      width: 400 // Set the width of the zoomed-in image
      ,
      height: 300,
      style: {
        cursor: 'pointer',
        border: '2px solid #ccc',
        borderRadius: '8px',
        margin: 'auto',
        marginBottom: '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558,
        columnNumber: 29
      }
    }), isZoomed3 && __jsx("div", {
      className: "zoomed-overlay",
      onClick: () => this.handleCloseClick(3),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 567,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "/assets/images/q5.png" // Replace with your zoomed-in image source
      ,
      alt: "Zoomed Image 3",
      className: "zoomed-image",
      width: 400 // Set the width of the zoomed-in image
      ,
      height: 300,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 569,
        columnNumber: 37
      }
    }), __jsx("div", {
      className: "zoomed-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576,
        columnNumber: 37
      }
    }, "Daya Law Firm")), __jsx("img", {
      src: "/assets/images/d1.png" // Replace with your image source
      ,
      alt: "Zoomable Image 4",
      className: isZoomed4 ? 'zoomed' : '',
      onClick: () => this.handleImageClick(4),
      width: 400 // Set the width of the zoomed-in image
      ,
      height: 300,
      style: {
        cursor: 'pointer',
        border: '2px solid #ccc',
        borderRadius: '8px',
        margin: 'auto',
        marginBottom: '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 582,
        columnNumber: 29
      }
    }), isZoomed4 && __jsx("div", {
      className: "zoomed-overlay",
      onClick: () => this.handleCloseClick(4),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 591,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "/assets/images/q6.png" // Replace with your zoomed-in image source
      ,
      alt: "Zoomed Image 4",
      className: "zoomed-image",
      width: 400 // Set the width of the zoomed-in image
      ,
      height: 300,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 593,
        columnNumber: 37
      }
    }), __jsx("div", {
      className: "zoomed-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 600,
        columnNumber: 37
      }
    }, "Mount Hermon Educational Institutions"))), __jsx("a", {
      href: "/portfolio",
      className: "thm-btn cta-three__btn",
      style: {
        marginLeft: '800px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606,
        columnNumber: 25
      }
    }, "View More"))), __jsx("section", {
      className: "contact-one",
      id: "contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/contact-shape-2.png",
      alt: "",
      className: "contact-one__shape-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/contact-shape-3.png",
      alt: "",
      className: "contact-one__shape-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 615,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 616,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-lg-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "contact-one__content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "contact-one__images",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: "/assets/images/c2.jpg",
      style: {
        width: '300px'
      },
      className: "wow fadeInUp",
      "data-wow-duration": "1500ms",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: "contact-one__infos",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 625,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "contact-one__infos-single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 626,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "contact-one__infos-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 627,
        columnNumber: 45
      }
    }, __jsx("i", {
      className: "zimed-icon-placeholder",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 628,
        columnNumber: 49
      }
    })), __jsx("div", {
      className: "contact-one__infos-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 630,
        columnNumber: 45
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 631,
        columnNumber: 49
      }
    }, "Addresss"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632,
        columnNumber: 49
      }
    }, "20 Broklyn Street, ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632,
        columnNumber: 71
      }
    }), " Dubai"))), __jsx("div", {
      className: "contact-one__infos-single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 636,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "contact-one__infos-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 637,
        columnNumber: 45
      }
    }, __jsx("i", {
      className: "zimed-icon-message",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 638,
        columnNumber: 49
      }
    })), __jsx("div", {
      className: "contact-one__infos-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 640,
        columnNumber: 45
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 641,
        columnNumber: 49
      }
    }, "Email"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642,
        columnNumber: 49
      }
    }, __jsx("a", {
      href: "mailto:needhelp@zimed.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642,
        columnNumber: 52
      }
    }, "info@Nazairah.com")))), __jsx("div", {
      className: "contact-one__infos-single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 646,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "contact-one__infos-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 647,
        columnNumber: 45
      }
    }, __jsx("i", {
      className: "zimed-icon-phone-call",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648,
        columnNumber: 49
      }
    })), __jsx("div", {
      className: "contact-one__infos-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 650,
        columnNumber: 45
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 651,
        columnNumber: 49
      }
    }, "Phone"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 652,
        columnNumber: 49
      }
    }, __jsx("a", {
      href: "tel:666-888-0000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 652,
        columnNumber: 52
      }
    }, "+1 666 888 0000"))))))), __jsx("div", {
      className: "col-lg-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 658,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "contact-one__form-wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 659,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "block-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 660,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "block-title__bubbles",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 661,
        columnNumber: 41
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 662,
        columnNumber: 41
      }
    }, "Contact Us Now"), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 663,
        columnNumber: 41
      }
    }, "Write a Message")), __jsx("form", {
      action: "",
      className: "contact-form-validated contact-one__form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 665,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 666,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "col-md-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 667,
        columnNumber: 45
      }
    }, __jsx("input", {
      type: "text",
      name: "name",
      placeholder: "Name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 668,
        columnNumber: 49
      }
    })), __jsx("div", {
      className: "col-md-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 671,
        columnNumber: 45
      }
    }, __jsx("input", {
      type: "text",
      name: "subject",
      placeholder: "Phone Number",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 672,
        columnNumber: 49
      }
    })), __jsx("div", {
      className: "col-md-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 674,
        columnNumber: 45
      }
    }, __jsx("textarea", {
      name: "message",
      placeholder: "Message",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 675,
        columnNumber: 49
      }
    }), __jsx("button", {
      type: "submit",
      className: "thm-btn contact-one__form-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 676,
        columnNumber: 49
      }
    }, "Send Message")))), __jsx("div", {
      className: "result",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 682,
        columnNumber: 37
      }
    })))))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 690,
        columnNumber: 17
      }
    }, __jsx("footer", {
      className: "site-footer",
      style: {
        marginTop: '100px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 691,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/footer-shape-1.png",
      className: "site-footer__shape-1",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 692,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/footer-shape-2.png",
      className: "site-footer__shape-2",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 693,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/footer-shape-3.png",
      className: "site-footer__shape-3",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 694,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "site-footer__upper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 696,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 697,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "col-lg-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 698,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "footer-widget footer-widget__about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699,
        columnNumber: 41
      }
    }, __jsx("h3", {
      style: {
        color: 'black'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 700,
        columnNumber: 45
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 700,
        columnNumber: 76
      }
    }, "Nazairah")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 701,
        columnNumber: 45
      }
    }, "Boost your brand with our expert digital marketing solutions. Elevate online presence, engage audiences, and drive results. Let's shape your success together in the dynamic digital landscape. "), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 702,
        columnNumber: 45
      }
    }, __jsx("a", {
      href: "mailto:needhelp@zimed.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 702,
        columnNumber: 48
      }
    }, "info@Zazairah.com"), " ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 702,
        columnNumber: 106
      }
    }), __jsx("a", {
      href: "tel:666-888-0000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 703,
        columnNumber: 49
      }
    }, "+1 666 888 0000")))), __jsx("div", {
      className: "col-lg-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 707,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "footer-widget footer-widget__links",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 708,
        columnNumber: 41
      }
    }, __jsx("h3", {
      className: "footer-widget__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 709,
        columnNumber: 45
      }
    }, "Explore"), __jsx("div", {
      className: "footer-widget__links-wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 710,
        columnNumber: 45
      }
    }, __jsx("ul", {
      className: "list-unstyled",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 711,
        columnNumber: 49
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 712,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 712,
        columnNumber: 57
      }
    }, "Home")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 713,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 713,
        columnNumber: 57
      }
    }, "About Us")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 714,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 714,
        columnNumber: 57
      }
    }, "Services")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 715,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 715,
        columnNumber: 57
      }
    }, "Portfolio")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 716,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 716,
        columnNumber: 57
      }
    }, "Web Development")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 717,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 717,
        columnNumber: 57
      }
    }, "Contact "))), __jsx("ul", {
      className: "list-unstyled",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 720,
        columnNumber: 49
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 721,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 721,
        columnNumber: 57
      }
    }, "Help")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 722,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 722,
        columnNumber: 57
      }
    }, "Support")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 723,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 723,
        columnNumber: 57
      }
    }, "Contact us")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 724,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 724,
        columnNumber: 57
      }
    }, "Privacy Policy")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 725,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 725,
        columnNumber: 57
      }
    }, "Terms & Condition")))))), __jsx("div", {
      className: "col-lg-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 731,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "footer-widget footer-widget__subscribe",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 732,
        columnNumber: 41
      }
    }, __jsx("h3", {
      className: "footer-widget__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 733,
        columnNumber: 45
      }
    }, "Subscribe"), __jsx("form", {
      className: "footer-widget__mc-form mc-form",
      "data-url": "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 734,
        columnNumber: 45
      }
    }, __jsx("input", {
      type: "text",
      name: "email",
      placeholder: "Email address",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 735,
        columnNumber: 49
      }
    }), __jsx("button", {
      type: "submit",
      className: "thm-btn footer-widget__mc-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 736,
        columnNumber: 49
      }
    }, "Register Now")), __jsx("div", {
      className: "mc-form__response",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 741,
        columnNumber: 45
      }
    })))))), __jsx("div", {
      className: "site-footer__bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 748,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 749,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "inner-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 750,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "site-footer__social",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 752,
        columnNumber: 37
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 753,
        columnNumber: 41
      }
    }, "\xA9 copyright 2023 by Nazairah.com")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 759,
        columnNumber: 37
      }
    }, "Developed By OrangeMegaSoftware"))))), __jsx("div", {
      onClick: this.scrollTop,
      className: "scroll-to-target scroll-to-top",
      style: {
        display: this.state.scrollBtn ? 'block' : 'none'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 766,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "fa fa-angle-up",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 766,
        columnNumber: 155
      }
    })), __jsx("div", {
      className: "side-menu__block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 769,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "side-menu__block-overlay custom-cursor__overlay",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 772,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 773,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "cursor-follower",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 774,
        columnNumber: 29
      }
    })), __jsx("div", {
      className: "side-menu__block-inner ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 776,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "side-menu__top justify-content-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 777,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "#",
      className: "side-menu__toggler side-menu__close-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 779,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "assets/images/shapes/close-1-1.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 779,
        columnNumber: 97
      }
    }))), __jsx("nav", {
      className: "mobile-nav__container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 783,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "side-menu__sep",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 786,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "side-menu__content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 788,
        columnNumber: 29
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 789,
        columnNumber: 33
      }
    }, "Boost your brand with our expert digital marketing solutions. Elevate online presence, engage audiences, and drive results. Let's shape your success together in the dynamic digital landscape. "), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 790,
        columnNumber: 33
      }
    }, __jsx("a", {
      href: "mailto:needhelp@zimed.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 790,
        columnNumber: 36
      }
    }, "info@Nazairah.com"), " ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 790,
        columnNumber: 94
      }
    }), " ", __jsx("a", {
      href: "tel:888-999-0000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 790,
        columnNumber: 101
      }
    }, "+1 888 999 0000")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/BlogHome.js":
/*!********************************!*\
  !*** ./components/BlogHome.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\components\\BlogHome.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BlogHome = () => {
  return __jsx("section", {
    className: "blog-one blog-one__home",
    id: "blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/assets/images/shapes/blog-shape-1-1.png",
    alt: "",
    className: "blog-one__shape-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "block-title text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "block-title__bubbles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 29
    }
  }, "Checkout Latest Posts"), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 29
    }
  }, "News & Articles")), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-lg-4 wow fadeInLeft",
    "data-wow-duration": "1500ms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "blog-one__single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "blog-one__image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "/assets/images/blog/blog-1-1.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "blog-one__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 37
    }
  }, __jsx("ul", {
    className: "blog-one__meta list-unstyled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 41
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 45
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "far fa-clock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 61
    }
  }), " 20 Feb")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 45
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "far fa-comments",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 61
    }
  }), " 2 Comments"))), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 41
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 49
    }
  }, "Pre and post launch mobile app marketing pitfalls to avoid"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "blog-one__link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 41
    }
  }, __jsx("i", {
    className: "zimed-icon-right-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 71
    }
  })))))), __jsx("div", {
    className: "col-lg-4 wow fadeInUp",
    "data-wow-duration": "1500ms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "blog-one__single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "blog-one__image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "/assets/images/blog/blog-1-2.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "blog-one__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 37
    }
  }, __jsx("ul", {
    className: "blog-one__meta list-unstyled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 41
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 45
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "far fa-clock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 61
    }
  }), " 20 Feb")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 45
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "far fa-comments",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 61
    }
  }), " 2 Comments"))), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 41
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 49
    }
  }, "It is all exactly as i said, but i don't like it let's unpack that"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "blog-one__link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 41
    }
  }, __jsx("i", {
    className: "zimed-icon-right-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 71
    }
  })))))), __jsx("div", {
    className: "col-lg-4 wow fadeInRight",
    "data-wow-duration": "1500ms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "blog-one__single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "blog-one__image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "/assets/images/blog/blog-1-3.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "blog-one__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 37
    }
  }, __jsx("ul", {
    className: "blog-one__meta list-unstyled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 41
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 45
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "far fa-clock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 61
    }
  }), " 20 Feb")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 45
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "far fa-comments",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 61
    }
  }), " 2 Comments"))), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 41
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 49
    }
  }, "I just wanted to give you a heads-up, or this you feel you would"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "blog-one__link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 41
    }
  }, __jsx("i", {
    className: "zimed-icon-right-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 71
    }
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogHome);

/***/ }),

/***/ "./components/Brands.js":
/*!******************************!*\
  !*** ./components/Brands.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/swiper.css */ "./node_modules/swiper/css/swiper.css");
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\components\\Brands.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Brands = () => {
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    // Responsive breakpoints
    breakpoints: {
      1499: {
        slidesPerView: 5
      },
      991: {
        slidesPerView: 3
      },
      767: {
        slidesPerView: 3
      },
      575: {
        slidesPerView: 2
      }
    }
  };
  return __jsx("section", {
    className: "brand-one brand-one__home-one",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "brand-one__carousel",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, params, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/brand/brand-1-1.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/brand/brand-1-2.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/brand/brand-1-3.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/brand/brand-1-4.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/brand/brand-1-5.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/brand/brand-1-6.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/brand/brand-1-1.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/brand/brand-1-2.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/brand/brand-1-3.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/brand/brand-1-4.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/brand/brand-1-5.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/brand/brand-1-6.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Brands);

/***/ }),

/***/ "./components/CallToAction.js":
/*!************************************!*\
  !*** ./components/CallToAction.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\components\\CallToAction.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CallToAction = () => {
  return __jsx("section", {
    className: "cta-one",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "cta-one__circle-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "cta-one__circle-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "cta-one__circle-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "cta-one__content text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Download our App Today & ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 50
    }
  }), " Experience Endless Possibilities"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "and get started with a free 1 month trial for your business"), __jsx("a", {
    href: "#",
    className: "thm-btn cta-one__btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "Download Our App"))));
};

/* harmony default export */ __webpack_exports__["default"] = (CallToAction);

/***/ }),

/***/ "./components/Counter.js":
/*!*******************************!*\
  !*** ./components/Counter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Counter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\components\\Counter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Counter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onVisibilityChange", isVisible => {
      if (isVisible) {
        this.setState({
          startCounter: true
        });
      }
    });

    this.state = {
      startCounter: false
    };
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, __jsx("section", {
      className: "funfact-one",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/pricing-shape-1.png",
      alt: "",
      className: "funfact-one__shape-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/pricing-shape-2.png",
      alt: "",
      className: "funfact-one__shape-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/pricing-shape-3.png",
      alt: "",
      className: "funfact-one__shape-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "funfact-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    }, __jsx("h3", {
      className: "counter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 33
      }
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 37
      }
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
      end: this.state.startCounter ? 7842 : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 120
      }
    }))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 33
      }
    }, "Downloads"))), __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "funfact-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 29
      }
    }, __jsx("h3", {
      className: "counter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 33
      }
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 37
      }
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
      end: this.state.startCounter ? 6020 : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 120
      }
    }))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 33
      }
    }, "Likes"))), __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "funfact-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 29
      }
    }, __jsx("h3", {
      className: "counter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 33
      }
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 37
      }
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
      end: this.state.startCounter ? 360 : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 120
      }
    }))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 33
      }
    }, "5 Star Rating"))), __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "funfact-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 29
      }
    }, __jsx("h3", {
      className: "counter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 33
      }
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 37
      }
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
      end: this.state.startCounter ? 200 : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 120
      }
    }))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 33
      }
    }, "Awards")))))));
  }

}

/***/ }),

/***/ "./components/Faq.js":
/*!***************************!*\
  !*** ./components/Faq.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\components\\Faq.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Faq = () => {
  return __jsx("section", {
    className: "faq-one",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/assets/images/shapes/faq-shape-1.png",
    alt: "",
    className: "faq-one__shape-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "/assets/images/shapes/faq-shape-2.png",
    alt: "",
    className: "faq-one__shape-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "/assets/images/shapes/faq-shape-3.png",
    alt: "",
    className: "faq-one__shape-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "block-title text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "block-title__bubbles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, "Frequently Asked Questions"), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, "Have any Question?")), __jsx("div", {
    className: "accrodion-grp wow fadeIn faq-accrodion animated",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "accrodion",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "accrodion-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "accrodion-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 33
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 37
    }
  }, "Pre and post launch mobile app marketing pitfalls to avoid")), __jsx("div", {
    className: "accrodion-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 37
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 41
    }
  }, "There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam."))))), __jsx("div", {
    className: "accrodion  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "accrodion-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "accrodion-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 37
    }
  }, "Pre and post launch mobile app marketing pitfalls to avoid")), __jsx("div", {
    className: "accrodion-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 37
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 41
    }
  }, "There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam."))))), __jsx("div", {
    className: "accrodion ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "accrodion-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "accrodion-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 37
    }
  }, "How to update application new features")), __jsx("div", {
    className: "accrodion-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 41
    }
  }, "There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam."))))), __jsx("div", {
    className: "accrodion ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "accrodion-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "accrodion-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 33
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 37
    }
  }, "How to connect with the support to improve app experience")), __jsx("div", {
    className: "accrodion-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 37
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 41
    }
  }, "There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam."))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Faq);

/***/ }),

/***/ "./components/FeaturesOne.js":
/*!***********************************!*\
  !*** ./components/FeaturesOne.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\components\\FeaturesOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FeaturesOne = () => {
  return __jsx("div", {
    className: "cta-three",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/assets/images/shapes/cta-1-shape-2.png",
    alt: "",
    className: "cta-three__shape-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "/assets/images/shapes/cta-1-shape-3.png",
    alt: "",
    className: "cta-three__shape-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/assets/images/shapes/cta-1-shape-1.png",
    alt: "",
    className: "cta-three__shape-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 29
    }
  }), __jsx("img", {
    src: "/assets/images/mocs/cta-moc-1-1.png",
    alt: "",
    className: "cta-three__moc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "row justify-content-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "cta-three__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "block-title text-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "block-title__bubbles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 53
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 53
    }
  }, "Checkout App Features"), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 53
    }
  }, "Control Everything From One Application")), __jsx("div", {
    className: "cta-three__box-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "cta-three__box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "cta-three__box-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 57
    }
  }, __jsx("i", {
    className: "zimed-icon-strategy",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 61
    }
  })), __jsx("div", {
    className: "cta-three__box-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 57
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 61
    }
  }, "Feature Here"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 61
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor anagi icdunt ut labore et dolore magna aliqua."))), __jsx("div", {
    className: "cta-three__box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "cta-three__box-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 57
    }
  }, __jsx("i", {
    className: "zimed-icon-training",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 61
    }
  })), __jsx("div", {
    className: "cta-three__box-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 57
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 61
    }
  }, "Feature Here"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 61
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor anagi icdunt ut labore et dolore magna aliqua.")))), __jsx("a", {
    href: "#",
    className: "thm-btn cta-three__btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 49
    }
  }, "Discover More"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturesOne);

/***/ }),

/***/ "./components/FeaturesTwo.js":
/*!***********************************!*\
  !*** ./components/FeaturesTwo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\components\\FeaturesTwo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FeaturesTwo = () => {
  return __jsx("section", {
    className: "cta-two",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/assets/images/shapes/cta-2-shape-1.png",
    alt: "",
    className: "cta-two__shape-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "/assets/images/shapes/cta-2-shape-2.png",
    alt: "",
    className: "cta-two__shape-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/assets/images/shapes/cta-2-shape-3.png",
    alt: "",
    className: "cta-two__shape-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "/assets/images/mocs/cta-moc-2-1.png",
    alt: "",
    className: "cta-two__moc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-xl-5 col-lg-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "cta-two__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "block-title text-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "block-title__bubbles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 41
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 41
    }
  }, "Checkout App Features"), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 41
    }
  }, "Discover the Powerful Tools For Your Repeat Customers")), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 37
    }
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make. Lorem ipsum dolor sit amet, consectetur adipisicing elit."), __jsx("a", {
    href: "#",
    className: "thm-btn cta-two__btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 37
    }
  }, "Discover More"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturesTwo);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, props.pageTitle), __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/assets/images/favicons/apple-touch-icon.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/assets/images/favicons/favicon-32x32.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/assets/images/favicons/favicon-16x16.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/assets/css/bootstrap.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/assets/css/animate.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/assets/css/fontawesome-all.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/assets/css/zimed-icon.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/assets/css/style.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/assets/css/responsive.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "page-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\components\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Navbar = () => {
  const {
    0: sticky,
    1: setSticky
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: `main-nav__header-one ${sticky ? "stricky stricked-menu stricky-fixed" : "stricky"}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "header-navigation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "main-nav__logo-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "",
    style: {
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 59
    }
  }, "Nazairah")), __jsx("a", {
    href: "#",
    className: "side-menu__toggler",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "fa fa-bars",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 58
    }
  }))), __jsx("div", {
    className: "main-nav__main-navigation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "one-page-scroll-menu main-nav__navigation-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: "current scrollToLink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 41
    }
  }, "Home")), __jsx("li", {
    className: "scrollToLink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "/About",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 41
    }
  }, "About Us")), __jsx("li", {
    className: "scrollToLink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "/service",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 41
    }
  }, "Services")), __jsx("li", {
    className: "scrollToLink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "/portfolio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 41
    }
  }, "Portfolio")), __jsx("li", {
    className: "scrollToLink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "/web",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }, "Web Development")), __jsx("li", {
    className: "scrollToLink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 41
    }
  }, "Contact"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Pricing.js":
/*!*******************************!*\
  !*** ./components/Pricing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pricing; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\components\\Pricing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Pricing extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: true,
      year: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    const month = this.state.month;
    const year = this.state.year;

    if (month) {
      this.setState({
        year: true,
        month: false
      });
    }

    if (year) {
      this.setState({
        year: false,
        month: true
      });
    }
  }

  render() {
    return __jsx("section", {
      className: "pricing-one",
      id: "pricing",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "pricing-one__sep",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "block-title text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "block-title__bubbles",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, "Our Pricing Tables"), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }, "Choose Pricing Plans")), __jsx("ul", {
      className: "list-inline text-center switch-toggler-list",
      role: "tablist",
      id: "switch-toggle-tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, __jsx("li", {
      className: this.state.month ? 'month active' : 'month',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 85
      }
    }, "Monthly")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, __jsx("label", {
      className: this.state.year ? 'switch off' : 'switch on',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 29
      }
    }, __jsx("span", {
      onClick: this.handleToggle,
      className: "slider round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 33
      }
    }))), __jsx("li", {
      className: this.state.year ? 'year active' : 'year',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 82
      }
    }, "Yearly"))), __jsx("div", {
      className: "tabed-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: "month",
      style: {
        display: this.state.month ? 'block' : 'none'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col-lg-4 wow fadeInLeft",
      "data-wow-duration": "1500ms",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "pricing-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "pricing-one__inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/pricing-line-1-1.png",
      alt: "",
      className: "pricing-one__line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 45
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/pricing-icon-1-1.png",
      alt: "",
      className: "pricing-one__icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 49
      }
    }), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 53
      }
    }, "$20.00"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 53
      }
    }, "Basic Pack"), __jsx("ul", {
      className: "list-unstyled pricing-one__list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 53
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 61
      }
    }), " Extra features"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 61
      }
    }), " Lifetime free support"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 61
      }
    }), " Upgrate options"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 61
      }
    }), " Full access")), __jsx("a", {
      href: "#",
      className: "thm-btn pricing-one__btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 53
      }
    }, "Get Started"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 53
      }
    }, "Get a Free Trial")))), __jsx("div", {
      className: "col-lg-4 wow fadeInUp",
      "data-wow-duration": "1500ms",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "pricing-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "pricing-one__inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/pricing-line-1-1.png",
      alt: "",
      className: "pricing-one__line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 45
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/pricing-icon-1-2.png",
      alt: "",
      className: "pricing-one__icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 49
      }
    }), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 53
      }
    }, "$30.00"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 53
      }
    }, "Standard Pack"), __jsx("ul", {
      className: "list-unstyled pricing-one__list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 53
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 61
      }
    }), " Extra features"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 61
      }
    }), " Lifetime free support"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 61
      }
    }), " Upgrate options"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 61
      }
    }), " Full access")), __jsx("a", {
      href: "#",
      className: "thm-btn pricing-one__btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 53
      }
    }, "Get Started"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 53
      }
    }, "Get a Free Trial")))), __jsx("div", {
      className: "col-lg-4 wow fadeInRight",
      "data-wow-duration": "1500ms",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "pricing-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "pricing-one__inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/pricing-line-1-1.png",
      alt: "",
      className: "pricing-one__line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 45
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/pricing-icon-1-3.png",
      alt: "",
      className: "pricing-one__icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 49
      }
    }), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 53
      }
    }, "$40.00"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 53
      }
    }, "Ultimate Pack"), __jsx("ul", {
      className: "list-unstyled pricing-one__list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 53
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 61
      }
    }), " Extra features"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 61
      }
    }), " Lifetime free support"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 61
      }
    }), " Upgrate options"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 61
      }
    }), " Full access")), __jsx("a", {
      href: "#",
      className: "thm-btn pricing-one__btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 53
      }
    }, "Get Started"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 53
      }
    }, "Get a Free Trial")))))), __jsx("div", {
      id: "year",
      style: {
        display: this.state.year ? 'block' : 'none'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col-lg-4 wow fadeInLeft",
      "data-wow-duration": "1500ms",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "pricing-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "pricing-one__inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/pricing-line-1-1.png",
      alt: "",
      className: "pricing-one__line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 45
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/pricing-icon-1-1.png",
      alt: "",
      className: "pricing-one__icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 49
      }
    }), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 53
      }
    }, "$99.00"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 53
      }
    }, "Basic Pack"), __jsx("ul", {
      className: "list-unstyled pricing-one__list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 53
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 61
      }
    }), " Extra features"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 61
      }
    }), " Lifetime free support"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 61
      }
    }), " Upgrate options"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 61
      }
    }), " Full access")), __jsx("a", {
      href: "#",
      className: "thm-btn pricing-one__btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 53
      }
    }, "Get Started"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 53
      }
    }, "Get a Free Trial")))), __jsx("div", {
      className: "col-lg-4 wow fadeInUp",
      "data-wow-duration": "1500ms",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "pricing-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "pricing-one__inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/pricing-line-1-1.png",
      alt: "",
      className: "pricing-one__line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 45
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/pricing-icon-1-2.png",
      alt: "",
      className: "pricing-one__icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 49
      }
    }), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 53
      }
    }, "$199.00"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 53
      }
    }, "Standard Pack"), __jsx("ul", {
      className: "list-unstyled pricing-one__list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 53
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 61
      }
    }), " Extra features"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 61
      }
    }), " Lifetime free support"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 61
      }
    }), " Upgrate options"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 61
      }
    }), " Full access")), __jsx("a", {
      href: "#",
      className: "thm-btn pricing-one__btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 53
      }
    }, "Get Started"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 53
      }
    }, "Get a Free Trial")))), __jsx("div", {
      className: "col-lg-4 wow fadeInRight",
      "data-wow-duration": "1500ms",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "pricing-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "pricing-one__inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/pricing-line-1-1.png",
      alt: "",
      className: "pricing-one__line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 45
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/pricing-icon-1-3.png",
      alt: "",
      className: "pricing-one__icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 49
      }
    }), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 53
      }
    }, "$299.00"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 53
      }
    }, "Ultimate Pack"), __jsx("ul", {
      className: "list-unstyled pricing-one__list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 53
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 61
      }
    }), " Extra features"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 61
      }
    }), " Lifetime free support"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 61
      }
    }), " Upgrate options"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 57
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 61
      }
    }), " Full access")), __jsx("a", {
      href: "#",
      className: "thm-btn pricing-one__btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 53
      }
    }, "Get Started"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 53
      }
    }, "Get a Free Trial")))))))));
  }

}

/***/ }),

/***/ "./components/Screenshots.js":
/*!***********************************!*\
  !*** ./components/Screenshots.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/swiper.css */ "./node_modules/swiper/css/swiper.css");
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\components\\Screenshots.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Screenshots = () => {
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    // Responsive breakpoints
    breakpoints: {
      1499: {
        slidesPerView: 5
      },
      991: {
        slidesPerView: 3
      },
      767: {
        slidesPerView: 3
      },
      575: {
        slidesPerView: 2
      }
    }
  };
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "app-shot-one",
    id: "app-shots",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shapes/contact-shape-3.png",
    alt: "",
    className: "app-shot__shape-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("img", {
    src: "/assets/images/shapes/contact-shape-2.png",
    alt: "",
    className: "app-shot__shape-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "container-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "block-title text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "block-title__bubbles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "Checkout App Interface"), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "App Screenshots")), __jsx("div", {
    className: "app-shot-one__carousel",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, params, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/app-shots/app-shot-1-1.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/app-shots/app-shot-1-2.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/app-shots/app-shot-1-3.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/app-shots/app-shot-1-4.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/app-shots/app-shot-1-5.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/app-shots/app-shot-1-1.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/app-shots/app-shot-1-2.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/app-shots/app-shot-1-3.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/app-shots/app-shot-1-4.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/app-shots/app-shot-1-5.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/app-shots/app-shot-1-1.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/app-shots/app-shot-1-2.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/app-shots/app-shot-1-3.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/app-shots/app-shot-1-4.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/assets/images/app-shots/app-shot-1-5.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Screenshots);

/***/ }),

/***/ "./components/Services.js":
/*!********************************!*\
  !*** ./components/Services.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\components\\Services.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Services = () => {
  return __jsx("section", {
    className: "service-one",
    id: "features",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "block-title text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "block-title__bubbles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 25
    }
  }, "Checkout App Features"), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }, "The Only App You\u2019ll Need")), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "service-one__col wow fadeInUp",
    "data-wow-duration": "1500ms",
    "data-wow-delay": "000ms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "service-one__single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "zimed-icon-responsive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }, "Free Setup"))), __jsx("div", {
    className: "service-one__col wow fadeInUp",
    "data-wow-duration": "1500ms",
    "data-wow-delay": "100ms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "service-one__single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "zimed-icon-computer-graphic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 33
    }
  }, "Quick Access"))), __jsx("div", {
    className: "service-one__col wow fadeInUp",
    "data-wow-duration": "1500ms",
    "data-wow-delay": "200ms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "service-one__single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "zimed-icon-development1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 33
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }, "Manage Users"))), __jsx("div", {
    className: "service-one__col wow fadeInUp",
    "data-wow-duration": "1500ms",
    "data-wow-delay": "300ms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "service-one__single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "zimed-icon-development",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, "Fully Secured"))), __jsx("div", {
    className: "service-one__col wow fadeInUp",
    "data-wow-duration": "1500ms",
    "data-wow-delay": "400ms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "service-one__single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "zimed-icon-development",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, "Daily Update"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./components/Testimonial.js":
/*!***********************************!*\
  !*** ./components/Testimonial.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/swiper.css */ "./node_modules/swiper/css/swiper.css");
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\components\\Testimonial.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Testimonial = () => {
  const {
    0: swiper,
    1: setSwiper
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return __jsx("section", {
    className: "testimonials__one",
    id: "testimonials",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shapes/map-1-1.png",
    alt: "Awesome Image",
    className: "map-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: "/assets/images/shapes/testi-shape-1.png",
    alt: "",
    className: "testimonials__one-shape-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: "/assets/images/shapes/testi-shape-2.png",
    alt: "",
    className: "testimonials__one-shape-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-6 d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "my-auto wow fadeInUp",
    "data-wow-duration": "1500ms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx("div", {
    id: "testimonials-slider-pager",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "testimonials-slider-pager-one",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 37
    }
  }, __jsx("span", {
    onClick: goNext,
    className: "pager-item active",
    "data-slide-index": "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/assets/images/testimonials/testi-1-1.jpg",
    alt: "Awesome Image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 115
    }
  })), __jsx("span", {
    onClick: goPrev,
    className: "pager-item",
    "data-slide-index": "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/assets/images/testimonials/testi-1-2.jpg",
    alt: "Awesome Image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 108
    }
  })), __jsx("span", {
    onClick: goNext,
    className: "pager-item",
    "data-slide-index": "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/assets/images/testimonials/testi-1-3.jpg",
    alt: "Awesome Image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 108
    }
  })), __jsx("span", {
    onClick: goPrev,
    className: "pager-item",
    "data-slide-index": "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/assets/images/testimonials/testi-1-4.jpg",
    alt: "Awesome Image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 108
    }
  })), __jsx("span", {
    onClick: goNext,
    className: "pager-item",
    "data-slide-index": "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/assets/images/testimonials/testi-1-5.jpg",
    alt: "Awesome Image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 109
    }
  })), __jsx("span", {
    onClick: goPrev,
    className: "pager-item",
    "data-slide-index": "5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/assets/images/testimonials/testi-1-6.jpg",
    alt: "Awesome Image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 109
    }
  }))), __jsx("div", {
    className: "testimonials-slider-pager-two",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    className: "pager-item active",
    "data-slide-index": "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/assets/images/testimonials/testi-1-1.jpg",
    alt: "Awesome Image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 104
    }
  })), __jsx("a", {
    href: "#",
    className: "pager-item",
    "data-slide-index": "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/assets/images/testimonials/testi-1-2.jpg",
    alt: "Awesome Image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 97
    }
  })), __jsx("a", {
    href: "#",
    className: "pager-item",
    "data-slide-index": "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/assets/images/testimonials/testi-1-3.jpg",
    alt: "Awesome Image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 97
    }
  })), __jsx("a", {
    href: "#",
    className: "pager-item",
    "data-slide-index": "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/assets/images/testimonials/testi-1-4.jpg",
    alt: "Awesome Image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 97
    }
  })), __jsx("a", {
    href: "#",
    className: "pager-item",
    "data-slide-index": "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/assets/images/testimonials/testi-1-5.jpg",
    alt: "Awesome Image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 97
    }
  })), __jsx("a", {
    href: "#",
    className: "pager-item",
    "data-slide-index": "5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/assets/images/testimonials/testi-1-6.jpg",
    alt: "Awesome Image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 97
    }
  })))))), __jsx("div", {
    className: "col-lg-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "block-title text-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "block-title__bubbles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 33
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, "Checkout Latest Posts"), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  }, "What Our Clients Are Saying")), __jsx("ul", {
    className: "slider testimonials-slider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default.a, {
    getSwiper: setSwiper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: "slide-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "testimonials__one__single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 45
    }
  }, "This is due to their excellent service, competitive pricing and customer support. It\u2019s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 45
    }
  }, "Delila Rayam"))), __jsx("li", {
    className: "slide-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "testimonials__one__single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 45
    }
  }, "This is due to their excellent service, competitive pricing and customer support. It\u2019s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 45
    }
  }, "Terrilyn Werme"))), __jsx("li", {
    className: "slide-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "testimonials__one__single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 45
    }
  }, "This is due to their excellent service, competitive pricing and customer support. It\u2019s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 45
    }
  }, "Kyle Demayo"))), __jsx("li", {
    className: "slide-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "testimonials__one__single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 45
    }
  }, "This is due to their excellent service, competitive pricing and customer support. It\u2019s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 45
    }
  }, "Minta Hadad"))), __jsx("li", {
    className: "slide-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "testimonials__one__single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 45
    }
  }, "This is due to their excellent service, competitive pricing and customer support. It\u2019s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 45
    }
  }, "Sherman Cibrian"))), __jsx("li", {
    className: "slide-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "testimonials__one__single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 45
    }
  }, "This is due to their excellent service, competitive pricing and customer support. It\u2019s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 45
    }
  }, "Adrianne Hagans")))), __jsx("div", {
    className: "testimonial_pagination",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "testimonials-slider-pager-one testimonials-slider-pager-two",
    onClick: goPrev,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "zimed-icon-left-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "ml-3",
    onClick: goNext,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "zimed-icon-right-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 41
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

/***/ }),

/***/ "./components/Video.js":
/*!*****************************!*\
  !*** ./components/Video.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Video; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal-video */ "react-modal-video");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\components\\Video.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Video extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "openModal", () => {
      this.setState({
        isOpen: true
      });
    });

    this.state = {
      isOpen: false
    };
  }

  render() {
    return __jsx("section", {
      className: "video-one",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "video-one__box wow fadeInUp",
      "data-wow-duration": "1500ms",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/assets/images/resources/video-1-1.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "video-one__content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 29
      }
    }, __jsx(react_modal_video__WEBPACK_IMPORTED_MODULE_1___default.a, {
      channel: "youtube",
      isOpen: this.state.isOpen,
      videoId: "aitb---aDYM",
      onClose: () => this.setState({
        isOpen: false
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 33
      }
    }), __jsx("div", {
      onClick: this.openModal,
      className: "video-popup",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 33
      }
    }, __jsx("i", {
      className: "fa fa-play",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 87
      }
    })), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 33
      }
    }, "Watch Our Video")))));
  }

}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/swiper/css/swiper.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/css/swiper.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/About.js":
/*!************************!*\
  !*** ./pages/About.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/swiper.css */ "./node_modules/swiper/css/swiper.css");
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\pages\\About.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class AboutUs extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      startCounter: false,
      toggleState: {
        month: true,
        year: false
      },
      swiper: null,
      scrollBtn: false
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
      this.setState({
        startCounter: true
      });
    }
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, __jsx("section", {
      className: "banner-one",
      id: "banner",
      style: {
        backgroundImage: `url(/assets/images/bg1.png)`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 1
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/banner-shapes-1-1.png",
      alt: "",
      className: "banner-one__shape-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/banner-shapes-1-2.png",
      alt: "",
      className: "banner-one__shape-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/banner-shapes-1-4.png",
      alt: "",
      className: "banner-one__shape-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/banner-shapes-1-5.png",
      alt: "",
      className: "banner-one__shape-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/banner-shapes-1-6.png",
      alt: "",
      className: "banner-one__shape-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/banner-shapes-1-7.png",
      alt: "",
      className: "banner-one__shape-7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/banner-shapes-1-3.png",
      alt: "",
      className: "banner-one__shape-moc-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-lg-7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "banner-one__content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 33
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 37
      }
    }, "ABOUT US "), __jsx("p", {
      style: {
        color: 'orange'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 36
      }
    }, "Welcome to Nazairah - Your Strategic Digital Partner"), __jsx("a", {
      href: "#contact",
      "data-target": "#contact",
      className: "thm-btn banner-one__btn scroll-to-target",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 37
      }
    }, "Get Started")))))), __jsx("div", {
      style: {
        marginBottom: '5px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, __jsx("section", {
      className: "cta-two",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/cta-2-shape-1.png",
      alt: "",
      className: "cta-two__shape-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/cta-2-shape-2.png",
      alt: "",
      className: "cta-two__shape-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/cta-2-shape-3.png",
      alt: "",
      className: "cta-two__shape-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: "/assets/images/a1.png",
      style: {
        height: '400px',
        width: '600px'
      },
      alt: "",
      className: "cta-two__moc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-xl-5 col-lg-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "cta-two__content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "block-title text-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "block-title__bubbles",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 41
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 41
      }
    }, "Checkout App Features"), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 41
      }
    }, "Our Mission: Transforming Visions into Digital Reality")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 37
      }
    }, "Our mission is to transform your business vision into a digital reality that captivates your audience, drives engagement, and ultimately achieves your goals.  "), __jsx("a", {
      href: "#",
      className: "thm-btn cta-two__btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 37
      }
    }, "View More")))))), __jsx("section", {
      className: "service-one",
      id: "features",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "block-title text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "block-title__bubbles",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 29
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 29
      }
    }, "Checkout App Features"), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 29
      }
    }, "Join Us on the Digital Journey")), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "service-one__col wow fadeInUp",
      "data-wow-duration": "1500ms",
      "data-wow-delay": "000ms",
      style: {
        backgroundColor: '#396afc',
        borderRadius: '5%',
        margin: '30px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 5
      }
    }, __jsx("span", {
      style: {
        fontSize: '20px',
        color: 'white',
        backgroundColor: '#12c2e9',
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }
    }, "01")), __jsx("h", {
      style: {
        color: 'white'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 5
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 32
      }
    }, "WORKING WITH A WIDE RANGE OF INDUSTRIES GLOBALLY")), __jsx("p", {
      style: {
        color: 'white'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 5
      }
    }, "Through our experience and yours, we produce excellent results for your digital marketing requirements.")), __jsx("div", {
      className: "service-one__col wow fadeInUp",
      "data-wow-duration": "1500ms",
      "data-wow-delay": "000ms",
      style: {
        backgroundColor: '#396afc',
        borderRadius: '5%',
        margin: '30px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 1
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 5
      }
    }, __jsx("span", {
      style: {
        fontSize: '20px',
        color: 'white',
        backgroundColor: '#12c2e9',
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }
    }, "02")), __jsx("h", {
      style: {
        color: 'white'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 5
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 32
      }
    }, "A COMPANY GROUNDED WITH A PURPOSE.")), __jsx("p", {
      style: {
        color: 'white'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 5
      }
    }, "Nazairah was built out of passion, envisioning our clients to dominate the digital space at competitive pricing.")), __jsx("div", {
      className: "service-one__col wow fadeInUp",
      "data-wow-duration": "1500ms",
      "data-wow-delay": "000ms",
      style: {
        backgroundColor: '#396afc',
        borderRadius: '5%',
        margin: '30px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 1
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 5
      }
    }, __jsx("span", {
      style: {
        fontSize: '20px',
        color: 'white',
        backgroundColor: '#12c2e9',
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }
    }, "03")), __jsx("h", {
      style: {
        color: 'white'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 5
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 32
      }
    }, "LET'S GROW TOGETHER.")), __jsx("p", {
      style: {
        color: 'white'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 5
      }
    }, "Our success is bound to yours. We\u2019ll collaborate to create a campaign tailor-fit to your business."))))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 1
      }
    }, __jsx("section", {
      className: "funfact-one",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/pricing-shape-1.png",
      alt: "",
      className: "funfact-one__shape-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/pricing-shape-2.png",
      alt: "",
      className: "funfact-one__shape-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/pricing-shape-3.png",
      alt: "",
      className: "funfact-one__shape-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "funfact-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 37
      }
    }, __jsx("h3", {
      className: "counter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 41
      }
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 45
      }
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
      end: this.state.startCounter ? 700 : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 131
      }
    }))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 41
      }
    }, "Happy Clients"))), __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "funfact-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 37
      }
    }, __jsx("h3", {
      className: "counter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 41
      }
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 45
      }
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
      end: this.state.startCounter ? 200 : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 131
      }
    }))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 41
      }
    }, "Achivements"))), __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "funfact-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 37
      }
    }, __jsx("h3", {
      className: "counter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 41
      }
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 45
      }
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
      end: this.state.startCounter ? 360 : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 131
      }
    }))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 41
      }
    }, "5 Star Rating"))), __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "funfact-one__single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 37
      }
    }, __jsx("h3", {
      className: "counter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 41
      }
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 45
      }
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
      end: this.state.startCounter ? 200 : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 131
      }
    }))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 41
      }
    }, "Project Completed"))))))), __jsx("footer", {
      className: "site-footer",
      style: {
        marginTop: '100px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/assets/images/shapes/footer-shape-1.png",
      className: "site-footer__shape-1",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/footer-shape-2.png",
      className: "site-footer__shape-2",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: "/assets/images/shapes/footer-shape-3.png",
      className: "site-footer__shape-3",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "site-footer__upper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "col-lg-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "footer-widget footer-widget__about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 41
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 50
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 54
      }
    }, "Nazairah")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 45
      }
    }, "Boost your brand with our expert digital marketing solutions. Elevate online presence, engage audiences, and drive results. Let's shape your success together in the dynamic digital landscape. "), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 45
      }
    }, __jsx("a", {
      href: "mailto:needhelp@zimed.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 48
      }
    }, "info@Zazairah.com"), " ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 106
      }
    }), __jsx("a", {
      href: "tel:666-888-0000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 49
      }
    }, "+1 666 888 0000")))), __jsx("div", {
      className: "col-lg-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "footer-widget footer-widget__links",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 41
      }
    }, __jsx("h3", {
      className: "footer-widget__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 45
      }
    }, "Explore"), __jsx("div", {
      className: "footer-widget__links-wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 45
      }
    }, __jsx("ul", {
      className: "list-unstyled",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 49
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 57
      }
    }, "Home")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 57
      }
    }, "About Us")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 57
      }
    }, "Services")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 57
      }
    }, "Portfolio")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 57
      }
    }, "Web Development")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 57
      }
    }, "Contact "))), __jsx("ul", {
      className: "list-unstyled",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 49
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 57
      }
    }, "Help")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 57
      }
    }, "Support")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 57
      }
    }, "Contact us")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 57
      }
    }, "Privacy Policy")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 57
      }
    }, "Terms & Condition")))))), __jsx("div", {
      className: "col-lg-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "footer-widget footer-widget__subscribe",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 41
      }
    }, __jsx("h3", {
      className: "footer-widget__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 45
      }
    }, "Subscribe"), __jsx("form", {
      className: "footer-widget__mc-form mc-form",
      "data-url": "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 45
      }
    }, __jsx("input", {
      type: "text",
      name: "email",
      placeholder: "Email address",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 49
      }
    }), __jsx("button", {
      type: "submit",
      className: "thm-btn footer-widget__mc-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 49
      }
    }, "Register Now")), __jsx("div", {
      className: "mc-form__response",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 45
      }
    })))))), __jsx("div", {
      className: "site-footer__bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "inner-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "site-footer__social",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 37
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 41
      }
    }, "\xA9 copyright 2023 by Nazairah.com")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 37
      }
    }, "Developed By OrangeMegaSoftware"))))), __jsx("div", {
      className: "side-menu__block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "side-menu__block-overlay custom-cursor__overlay",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "cursor-follower",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 29
      }
    })), __jsx("div", {
      className: "side-menu__block-inner ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "side-menu__top justify-content-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "#",
      className: "side-menu__toggler side-menu__close-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "assets/images/shapes/close-1-1.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 97
      }
    }))), __jsx("nav", {
      className: "mobile-nav__container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "side-menu__sep",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "side-menu__content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 29
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 33
      }
    }, "Boost your brand with our expert digital marketing solutions. Elevate online presence, engage audiences, and drive results. Let's shape your success together in the dynamic digital landscape. "), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 33
      }
    }, __jsx("a", {
      href: "mailto:needhelp@zimed.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 36
      }
    }, "info@Nazairah.com"), " ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 94
      }
    }), " ", __jsx("a", {
      href: "tel:888-999-0000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 101
      }
    }, "+1 888 999 0000")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AboutUs);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.js");
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Services */ "./components/Services.js");
/* harmony import */ var _components_FeaturesOne__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FeaturesOne */ "./components/FeaturesOne.js");
/* harmony import */ var _components_FeaturesTwo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FeaturesTwo */ "./components/FeaturesTwo.js");
/* harmony import */ var _components_Video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Video */ "./components/Video.js");
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Counter */ "./components/Counter.js");
/* harmony import */ var _components_Pricing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Pricing */ "./components/Pricing.js");
/* harmony import */ var _components_Screenshots__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Screenshots */ "./components/Screenshots.js");
/* harmony import */ var _components_Testimonial__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Testimonial */ "./components/Testimonial.js");
/* harmony import */ var _components_Brands__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Brands */ "./components/Brands.js");
/* harmony import */ var _components_Faq__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Faq */ "./components/Faq.js");
/* harmony import */ var _components_BlogHome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/BlogHome */ "./components/BlogHome.js");
/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/CallToAction */ "./components/CallToAction.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./About */ "./pages/About.js");
var _jsxFileName = "C:\\Finished Project\\zimed\\files\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













 // import Contact from "../components/Contact";




const Home = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  pageTitle: "Nazairah",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}, __jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Finished Project\zimed\files\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-id-swiper":
/*!**********************************!*\
  !*** external "react-id-swiper" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-modal-video":
/*!************************************!*\
  !*** external "react-modal-video" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ }),

/***/ "react-visibility-sensor":
/*!******************************************!*\
  !*** external "react-visibility-sensor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map