import React, { Component } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from "react-scrollspy";
import { Link, animateScroll as scroll } from "react-scroll";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/valle.rudhag" },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/malcolm-rudhag-857a3a191/",
  },
];
class HeaderThree extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  stickyHeader() {}

  render() {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    const { color = "default-color" } = this.props;
    let logoUrl;
    // if(logo === 'light'){
    //     logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;
    // }else if(logo === 'dark'){
    //     logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
    // }else if(logo === 'symbol-dark'){
    //     logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" />;
    // }else if(logo === 'symbol-light'){
    //     logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />;
    // }else{
    //     logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
    // }

    return (
      <header className={`header-area header-style-two header--fixed ${color}`}>
        <div className="header-wrapper">
          <div className="header-center d-flex align-items-center">
            <div className="logo">
              <a href={this.props.homeLink}>{logoUrl}</a>
            </div>
            <nav className="mainmenunav d-lg-block ml--50">
              <Scrollspy
                className="mainmenu"
                items={["home", "about", "portfolio", "contact"]}
                currentClassName="is-current"
                offset={-200}
              >
                <li>
                  <Link
                    style={{ cursor: "pointer" }}
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ cursor: "pointer" }}
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ cursor: "pointer" }}
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ cursor: "pointer" }}
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Contact
                  </Link>
                </li>
              </Scrollspy>
            </nav>
          </div>
          <div className="header-right">
            <div className="social-share-inner">
              <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="header-btn">
                            <a className="rn-btn" href="https://themeforest.net/checkout/from_item/25457315?license=regular">
                                <span>buy now</span>
                            </a>
                        </div> */}
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default HeaderThree;
