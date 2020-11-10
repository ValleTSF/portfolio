(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var l=a(5),n=a(6),r=a(8),c=a(7),o=a(9),i=a(1),s=a.n(i),m=a(30),u=a.n(m),d=(a(68),a(31)),E=a.n(d),g=a(13),p=a(57),v=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.Helmet,null,s.a.createElement("title",null,this.props.pageTitle),s.a.createElement("meta",{name:"description",content:"Malcolm Rudhags Portfolio."})))}}]),t}(i.Component),b=a(62),h=a(15),f=a(19),y=a(58),N=a.n(y),w=a(18),k=[{Social:s.a.createElement(f.a,null),link:"https://www.facebook.com/valle.rudhag"},{Social:s.a.createElement(f.c,null),link:"https://www.linkedin.com/in/malcolm-rudhag-857a3a191/"}],j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).menuTrigger=a.menuTrigger.bind(Object(h.a)(a)),a.CLoseMenuTrigger=a.CLoseMenuTrigger.bind(Object(h.a)(a)),a.stickyHeader=a.stickyHeader.bind(Object(h.a)(a)),window.addEventListener("load",function(){console.log("All assets are loaded")}),a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"stickyHeader",value:function(){}},{key:"render",value:function(){window.addEventListener("scroll",function(){window.scrollY>100?document.querySelector(".header--fixed").classList.add("sticky"):document.querySelector(".header--fixed").classList.remove("sticky")});var e=document.querySelectorAll(".has-droupdown > a");for(var t in e)e.hasOwnProperty(t)&&(e[t].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});var a=this.props.color,l=void 0===a?"default-color":a;return s.a.createElement("header",{className:"header-area header-style-two header--fixed ".concat(l)},s.a.createElement("div",{className:"header-wrapper"},s.a.createElement("div",{className:"header-center d-flex align-items-center"},s.a.createElement("div",{className:"logo"},s.a.createElement("a",{href:this.props.homeLink},void 0)),s.a.createElement("nav",{className:"mainmenunav d-lg-block ml--50"},s.a.createElement(N.a,{className:"mainmenu",items:["home","about","portfolio","contact"],currentClassName:"is-current",offset:-200},s.a.createElement("li",null,s.a.createElement(w.Link,{style:{cursor:"pointer"},activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-70,duration:1e3},"Home")),s.a.createElement("li",null,s.a.createElement(w.Link,{style:{cursor:"pointer"},activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:1e3},"About")),s.a.createElement("li",null,s.a.createElement(w.Link,{style:{cursor:"pointer"},activeClass:"active",to:"portfolio",spy:!0,smooth:!0,offset:-70,duration:1e3},"Portfolio")),s.a.createElement("li",null,s.a.createElement(w.Link,{style:{cursor:"pointer"},activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:1e3},"Contact"))))),s.a.createElement("div",{className:"header-right"},s.a.createElement("div",{className:"social-share-inner"},s.a.createElement("ul",{className:"social-share social-style--2 color-black d-flex justify-content-start liststyle"},k.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("a",{href:"".concat(e.link)},e.Social))}))),s.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20"},s.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},s.a.createElement(g.b,null))),s.a.createElement("div",{className:"close-menu d-block d-lg-none"},s.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},s.a.createElement(g.c,null))))))}}]),t}(i.Component),x=a(16),C=a(22),O=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props.tabStyle;return s.a.createElement("div",null,s.a.createElement("div",{className:"tabs-area"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(x.d,null,s.a.createElement(x.b,{className:"".concat(e)},s.a.createElement(x.a,null,"Skillset"),s.a.createElement(x.a,null,"Experience"),s.a.createElement(x.a,null,"Education")),s.a.createElement(x.c,null,s.a.createElement("div",{className:"single-tab-content"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("div",{style:{display:"inline-flex",flexDirection:"column"}},s.a.createElement("span",{style:{fontSize:18}},"Java"),s.a.createElement(C.a,{percent:"80",strokeWidth:"4",strokeColor:"#f10101",trailColor:"#636060",style:{width:"13rem"}}))),s.a.createElement("li",null,s.a.createElement("div",{style:{display:"inline-flex",flexDirection:"column"}},s.a.createElement("span",{style:{fontSize:18}},"React.js"),s.a.createElement(C.a,{percent:"70",strokeWidth:"4",strokeColor:"#f10101",trailColor:"#636060",style:{width:"13rem"}}))),s.a.createElement("li",null,s.a.createElement("div",{style:{display:"inline-flex",flexDirection:"column"}},s.a.createElement("span",{style:{fontSize:18}},"Firebase"),s.a.createElement(C.a,{percent:"60",strokeWidth:"4",strokeColor:"#f10101",trailColor:"#636060",style:{width:"13rem"}}))),s.a.createElement("li",null,s.a.createElement("div",{style:{display:"inline-flex",flexDirection:"column"}},s.a.createElement("span",{style:{fontSize:18}},"TypeScript"),s.a.createElement(C.a,{percent:"50",strokeWidth:"4",strokeColor:"#f10101",trailColor:"#636060",style:{width:"13rem"}}))),s.a.createElement("li",null,s.a.createElement("div",{style:{display:"inline-flex",flexDirection:"column"}},s.a.createElement("span",{style:{fontSize:18}},"JavaScript"),s.a.createElement(C.a,{percent:"50",strokeWidth:"4",strokeColor:"#f10101",trailColor:"#636060",style:{width:"13rem"}})))))),s.a.createElement(x.c,null,s.a.createElement("div",{className:"single-tab-content"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(w.Link,{style:{cursor:"pointer"},activeClass:"active",to:"portfolio",spy:!0,smooth:!0,offset:-70,duration:1e3},"Intern Backend Developer",s.a.createElement("span",null," - Redmind")),"2020 - Current"),s.a.createElement("li",null,s.a.createElement(w.Link,{style:{cursor:"pointer"},activeClass:"active",to:"portfolio",spy:!0,smooth:!0,offset:-70,duration:1e3},"Intern Frontend Developer",s.a.createElement("span",null," - Redmind")),"2020 - Current")))),s.a.createElement(x.c,null,s.a.createElement("div",{className:"single-tab-content"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{href:"/service"},"Vocational Degree",s.a.createElement("span",null," - Nackademin AB, Stockholm"))," ","Current"),s.a.createElement("li",null,s.a.createElement("a",{href:"/service"},"Upper Secondary Diploma",s.a.createElement("span",null," - Huddingegymnasiet, Stockholm"))," ","2012"))))))))))}}]),t}(i.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={rnName:"",rnEmail:"",rnSubject:"",rnMessage:""},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"contact-form--1"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row row--35 align-items-start"},s.a.createElement("div",{className:"col-lg-6 order-2 order-lg-1"},s.a.createElement("div",{className:"section-title text-left mb--50"},s.a.createElement("h2",{className:"title"},this.props.contactTitle),s.a.createElement("p",{className:"description"},"If you want to reach me, I'd love to talk to you. ",s.a.createElement("br",null),"Phone:",s.a.createElement("a",{href:"tel:+46704309685"}," 070-4309685")," ",s.a.createElement("br",null)," Email:",s.a.createElement("a",{href:"mailto:malcolm.rudhag@gmail.com"}," ","malcolm.rudhag@gmail.com")," ")),s.a.createElement("div",{className:"form-wrapper"},s.a.createElement("form",null,s.a.createElement("label",{htmlFor:"item01"},s.a.createElement("input",{type:"text",name:"name",id:"item01",value:this.state.rnName,onChange:function(t){e.setState({rnName:t.target.value})},placeholder:"Your Name *"})),s.a.createElement("label",{htmlFor:"item02"},s.a.createElement("input",{type:"text",name:"email",id:"item02",value:this.state.rnEmail,onChange:function(t){e.setState({rnEmail:t.target.value})},placeholder:"Your email *"})),s.a.createElement("label",{htmlFor:"item03"},s.a.createElement("input",{type:"text",name:"subject",id:"item03",value:this.state.rnSubject,onChange:function(t){e.setState({rnSubject:t.target.value})},placeholder:"Write a Subject"})),s.a.createElement("label",{htmlFor:"item04"},s.a.createElement("textarea",{type:"text",id:"item04",name:"message",value:this.state.rnMessage,onChange:function(t){e.setState({rnMessage:t.target.value})},placeholder:"Your Message"})),s.a.createElement("button",{className:"rn-button-style--2 btn-solid",type:"submit",value:"submit",name:"submit",id:"mc-embedded-subscribe"},"Submit")))),s.a.createElement("div",{className:"col-lg-6 order-1 order-lg-2"},s.a.createElement("div",{className:"thumbnail mb_md--30 mb_sm--30"})))))}}]),t}(i.Component),T=[{image:"image-1",category:"Development",title:"Project 1"},{image:"happyx-preview",category:"Development",title:"Project 2"},{image:"happyx-preview",category:"Development",title:"Project 3"},{image:"happyx-preview",category:"Development",title:"Getting tickets to the big show"},{image:"happyx-preview",category:"Development",title:"Getting tickets to the big show"},{image:"happyx-preview",category:"Development",title:"Getting tickets to the big show"}],P=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.column,a=e.styevariation,l=T.slice(0,this.props.item);return s.a.createElement(s.a.Fragment,null,l.map(function(e,l){return s.a.createElement("div",{className:"".concat(t),key:l},s.a.createElement("div",{className:"portfolio ".concat(a)},s.a.createElement("div",{className:"thumbnail-inner"},s.a.createElement("div",{className:"thumbnail ".concat(e.image)}),s.a.createElement("div",{className:"bg-blr-image ".concat(e.image)})),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"inner"},s.a.createElement("p",null,e.category),s.a.createElement("h4",null,s.a.createElement("a",{href:"/portfolio-details"},e.title)),s.a.createElement("div",{className:"portfolio-button"},s.a.createElement("a",{className:"rn-button-style--2 btn-solid",href:"/happyx-project"},s.a.createElement("span",null,"View Project")))))))}))}}]),t}(i.Component),L=a(45),D=a(46);function M(){var e=Object(L.a)(["\n  color: red;\n  font-size: 50px;\n"]);return M=function(){return e},e}function _(){var e=Object(L.a)(['\n  color: "red";\n  width: 500;\n  height: 500;\n']);return _=function(){return e},e}var A=D.a.h1(_()),R=D.a.span(M()),B=[{textPosition:"text-left",category:"this is who i am",description:"",buttonText:"",buttonLink:""}],I=function(){return s.a.createElement("div",{className:" "},s.a.createElement(v,{pageTitle:"This is Malcolm Rudhag"}),s.a.createElement(j,{homeLink:"/",color:"color-black"}),s.a.createElement("div",{id:"home",className:"fix"},s.a.createElement("div",{className:"slider-wrapper"},B.map(function(e,t){return s.a.createElement("div",{className:"slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_portfolio_bg",key:t},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"inner ".concat(e.textPosition)},e.category?s.a.createElement("span",null,e.category):"",s.a.createElement(A,null,"Malcolm Rudhag ",s.a.createElement("br",null),s.a.createElement(b.a,null,s.a.createElement(R,null," Backend Dev."),s.a.createElement(R,null," Frontend Dev."),s.a.createElement(R,null," Teamplayer."))),e.description?s.a.createElement("p",{className:"description"},e.description):"",e.buttonText?s.a.createElement("div",{className:"slide-btn"},s.a.createElement("a",{className:"rn-button-style--2 btn-primary-color",href:"".concat(e.buttonLink)},e.buttonText)):"")))))}))),s.a.createElement("div",{id:"about",className:"fix"},s.a.createElement("div",{className:"about-area ptb--130 ",style:{backgroundColor:"#e4e4e4"}},s.a.createElement("div",{className:"about-wrapper"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row row--35 align-items-center"},s.a.createElement("div",{className:"col-lg-5"},s.a.createElement("div",{className:"thumbnail"},s.a.createElement("img",{className:"w-100",src:"./assets/images/about/about-me-picturev2.jpg",alt:"About Imagesv3"}))),s.a.createElement("div",{className:"col-lg-7"},s.a.createElement("div",{className:"about-inner inner"},s.a.createElement("div",{className:"section-title"},s.a.createElement("h2",{className:"title"},"This is me"),s.a.createElement("p",{className:"description"},"Things that are important to know about me! I am curious by nature, I love learning about anything and everything that interests me. I love working in teams, I value teamwork and good co-workers very highly. I'm a creative person, if I'm not hammering down on the keyboard coding my newest idea I'm ususally playing the guitar.")),s.a.createElement("div",{className:"row mt--30"},s.a.createElement(O,{tabStyle:"tab-style--1"})),s.a.createElement("a",{style:{marginTop:40},className:"rn-button-style--2 btn-solid",href:"https://drive.google.com/uc?export=download&id=1X6-9DdgM4YH48v6BPrKExGGYr_OV1yrR"},s.a.createElement("span",null,"Download Resum\xe9"))))))))),s.a.createElement("div",{id:"portfolio",className:"fix"},s.a.createElement("div",{className:"portfolio-area ptb--130 bg_color--0"},s.a.createElement("div",{className:"portfolio-sacousel-inner"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"section-title text-center service-style--3 mb--30 mb_sm--0"},s.a.createElement("h2",{className:"title"},"My Latest Projects")))),s.a.createElement("div",{className:"row"},s.a.createElement(P,{styevariation:"text-center mt--40",column:"col-lg-4 col-md-6 col-sm-6 col-12",item:"3"})))))),s.a.createElement("div",{id:"contact",className:"fix"},s.a.createElement("div",{className:"rn-contact-area ptb--130",style:{backgroundColor:"#e4e4e4"}},s.a.createElement(S,{contactTitle:"Contact."}))),s.a.createElement("div",{className:"backto-top"},s.a.createElement(E.a,{duration:1e3,showUnder:160},s.a.createElement(g.a,null))))},W=a(2),H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).menuTrigger=a.menuTrigger.bind(Object(h.a)(a)),a.CLoseMenuTrigger=a.CLoseMenuTrigger.bind(Object(h.a)(a)),window.addEventListener("load",function(){console.log("All assets are loaded")}),a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"render",value:function(){var e=document.querySelectorAll(".has-droupdown > a");for(var t in e)e.hasOwnProperty(t)&&(e[t].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});var a,l=this.props,n=l.logo,r=l.color,c=l.headerPosition;return a="light"===n?s.a.createElement("img",{src:"/assets/images/logo/logo-light.png",alt:"Trydo"}):"dark"===n?s.a.createElement("img",{src:"/assets/images/logo/logo-dark.png",alt:"Trydo"}):"symbol-dark"===n?s.a.createElement("img",{src:"/assets/images/logo/logo-symbol-dark.png",alt:"Trydo"}):"all-dark"===n?s.a.createElement("img",{src:"/assets/images/logo/logo-all-dark.png",alt:"Trydo"}):"symbol-light"===n?s.a.createElement("img",{src:"/assets/images/logo/logo-symbol-light.png",alt:"Trydo"}):s.a.createElement("img",{src:"/assets/images/logo/logo.png",alt:"Trydo"}),s.a.createElement("header",{className:"header-area formobile-menu ".concat(c," ").concat(r)},s.a.createElement("div",{className:"header-wrapper",id:"header-wrapper"},s.a.createElement("div",{className:"header-left"},s.a.createElement("div",{className:"logo"},s.a.createElement("a",{href:"/"},a))),s.a.createElement("div",{className:"header-right"},s.a.createElement("nav",{className:"mainmenunav d-lg-block"},s.a.createElement("ul",{className:"mainmenu"},s.a.createElement("li",{className:"has-droupdown"},s.a.createElement(W.b,{to:"#"},"Home"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",null,s.a.createElement(W.b,{to:"/main-demo"},"Main Demo")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/dark-main-demo"},"Main Demo Dark")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/creative-agency"},"Creative Agency")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/creative-landing"},"Creative One Page")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/creative-portfolio"},"Creative Portfolio")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/personal-portfolio"},"Personal Portfolio")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/portfolio-landing"},"Portfolio One Page")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/dark-portfolio-landing"},"Portfolio One Page 02")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/digital-agency"},"Digital Agency")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/startup"},"Startup")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/paralax"},"Paralax")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/portfolio-home"},"Minimal Portfolio")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/business"},"Business")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/home-particles"},"Home Particles")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/studio-agency"},"Studio Agency")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/designer-portfolio"},"Designer Portfolio")))),s.a.createElement("li",{className:"has-droupdown"},s.a.createElement(W.b,{to:"/service"},"Service"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",null,s.a.createElement(W.b,{to:"/service"},"Service")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/service-details"},"Service Details")))),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/about"},"About")),s.a.createElement("li",{className:"has-droupdown"},s.a.createElement(W.b,{to:"#pages"},"Pages"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",null,s.a.createElement(W.b,{to:"/blog"},"Blog List")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/blog-details"},"Blog Details")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/service"},"Service")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/service-details"},"Service Details")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/portfolio"},"Portfolio")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/portfolio-details"},"Portfolio Details")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/404"},"404")))),s.a.createElement("li",{className:"has-droupdown"},s.a.createElement(W.b,{to:"#"},"Blocks"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",null,s.a.createElement(W.b,{to:"/portfolio"},"Portfolio")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/team"},"Team")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/service"},"Service")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/video-popup"},"Video Popup")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/progressbar"},"Progressbar")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/gallery"},"Gallery")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/counters"},"Counters")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/blog"},"Blog List")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/clint-logo"},"Clint Logo")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/contact-form"},"Contact Form")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/google-map"},"Google Map")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/columns"},"Columns")),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/pricing-table"},"Pricing Table")))),s.a.createElement("li",null,s.a.createElement(W.b,{to:"/contact"},"Contact")))),s.a.createElement("div",{className:"header-btn"},s.a.createElement("a",{className:"rn-btn",href:"https://themeforest.net/checkout/from_item/25457315?license=regular"},s.a.createElement("span",null,"buy now"))),s.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20"},s.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},s.a.createElement(g.b,null))),s.a.createElement("div",{className:"close-menu d-block d-lg-none"},s.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},s.a.createElement(g.c,null))))))}}]),t}(i.Component),F=[{Social:s.a.createElement(f.a,null),link:"https://www.facebook.com/"},{Social:s.a.createElement(f.c,null),link:"https://www.linkedin.com/"},{Social:s.a.createElement(f.b,null),link:"https://www.instagram.com/"},{Social:s.a.createElement(f.d,null),link:"https://twitter.com/"}],q=function(){return s.a.createElement("div",{className:"footer-style-2 ptb--30 bg_image bg_image--1","data-black-overlay":"6"},s.a.createElement("div",{className:"wrapper plr--50 plr_sm--20"},s.a.createElement("div",{className:"row align-items-center justify-content-between"},s.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},s.a.createElement("div",{className:"inner"},s.a.createElement("div",{className:"logo text-center text-sm-left mb_sm--20"},s.a.createElement("a",{href:"/home-one"},s.a.createElement("img",{src:"/assets/images/logo/logo.png",alt:"Logo images"}))))),s.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},s.a.createElement("div",{className:"inner text-center"},s.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-center liststyle"},F.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("a",{href:"".concat(e.link)},e.Social))})))),s.a.createElement("div",{className:"col-lg-4 col-md-12 col-sm-12 col-12"},s.a.createElement("div",{className:"inner text-lg-right text-center mt_md--20 mt_sm--20"},s.a.createElement("div",{className:"text"},s.a.createElement("p",null,"Copyright \xa9 2020 Rainbow-Themes. All Rights Reserved.")))))))},G=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(H,{headerPosition:"header--transparent",color:"color-white",logo:"logo-light"}),s.a.createElement("div",{className:"error-page-inner bg_color--4"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"inner"},s.a.createElement("h1",{className:"title theme-gradient"},"404!"),s.a.createElement("h3",{className:"sub-title"},"Page not found"),s.a.createElement("span",null,"The page you were looking for could not be found."),s.a.createElement("div",{className:"error-button"},s.a.createElement("a",{className:"rn-button-style--2 btn-solid",href:"/"},"Back To Homepage"))))))),s.a.createElement("div",{className:"backto-top"},s.a.createElement(E.a,{showUnder:160},s.a.createElement(g.a,null))),s.a.createElement(q,null))}}]),t}(i.Component),Y=a(17),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}function V(){return s.a.createElement("div",{className:"about-area vh-100 bg_color--1 active-dark"},s.a.createElement("div",{className:"about-wrapper"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row row--35 align-items-center"},s.a.createElement("img",{className:"w-100 preview-image",src:"./assets/images/preview/happyx-preview.jpg",alt:"HappyX Preview",style:{opacity:"30%"}}),s.a.createElement("div",{className:"col-lg-7"},s.a.createElement("div",{className:"about-inner inner"},s.a.createElement("div",{className:"section-title"}),s.a.createElement("div",{className:"row mt--30"}),s.a.createElement("a",{style:{marginTop:40},className:"rn-button-style--2 btn-solid",href:"https://drive.google.com/uc?export=download&id=1X6-9DdgM4YH48v6BPrKExGGYr_OV1yrR"},s.a.createElement("span",null,"Download Resum\xe9"))))))))}var J=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(W.a,{basename:"/"},s.a.createElement(Y.c,null,s.a.createElement(Y.a,{exact:!0,path:"/",component:I}),s.a.createElement(Y.a,{exact:!0,path:"/happyx-project",component:V}),s.a.createElement(Y.a,{path:"/404",component:G}),s.a.createElement(Y.a,{component:I})))}}]),t}(i.Component);u.a.render(s.a.createElement(J,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/portfolio","/service-worker.js");z?(function(e,t){fetch(e).then(function(a){var l=a.headers.get("content-type");404===a.status||null!=l&&-1===l.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):U(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):U(t,e)})}}()},63:function(e,t,a){e.exports=a(107)},68:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.6fb4db23.chunk.js.map