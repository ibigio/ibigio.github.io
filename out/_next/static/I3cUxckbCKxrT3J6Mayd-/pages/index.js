(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/PZL":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},"7FV1":function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n("q1tI"),l=(n("i8i4"),n("xFC4"),n("wT0s")),u=n("zPnG"),f=n("17x9"),d=n("Dy/p"),p={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool},m={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||u,f=function(t){function u(e){a(this,u);var t=i(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));return m.call(t),t.state={active:!1},t}return s(u,t),r(u,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();l.isMounted(e)||l.mount(e),this.props.hashSpy&&(d.isMounted()||d.mount(n),d.mapContainer(this.props.to,e)),this.props.spy&&l.addStateHandler(this.stateHandler),l.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){l.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in p)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,c.createElement(e,n)}}]),u}(c.Component),m=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,o({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var o=e.getScrollSpyContainer();if(!d.isMounted()||d.isInitialized()){var r=e.props.to,a=null,i=0,s=0,c=0;if(o.getBoundingClientRect)c=o.getBoundingClientRect().top;if(!a||e.props.isDynamic){if(!(a=n.get(r)))return;var u=a.getBoundingClientRect();s=(i=u.top-c+t)+u.height}var f=t-e.props.offset,p=f>=Math.floor(i)&&f<Math.floor(s),m=f<Math.floor(i)||f>=Math.floor(s),h=n.getActiveLink();return m?(r===h&&n.setActiveLink(void 0),e.props.hashSpy&&d.getHash()===r&&d.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),l.updateStates()):p&&h!==r?(n.setActiveLink(r),e.props.hashSpy&&d.changeHash(r),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(r)),l.updateStates()):void 0}}};return f.propTypes=p,f.defaultProps={offset:0},f},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){a(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return s(n,t),r(n,[{key:"componentDidMount",value:function(){if("undefined"===typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"===typeof window)return!1;u.unregister(this.props.name)}},{key:"registerElems",value:function(e){u.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return c.createElement(e,o({},this.props,{parentBindings:this.childBindings}))}}]),n}(c.Component);return t.propTypes={name:f.string,id:f.string},t}};e.exports=m},"7wkA":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=i(n("q1tI")),a=i(n("pUFB"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return r.default.createElement("input",this.props,this.props.children)}}]),t}(r.default.Component);t.default=(0,a.default)(s)},"8QoP":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("QLqi"),r=["mousedown","mousewheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!==typeof document&&r.forEach((function(t){return(0,o.addPassiveEventListener)(document,t,e)}))}}},"Dy/p":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("QLqi");var o,r=n("xFC4"),a=(o=r)&&o.__esModule?o:{default:o};var i={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout((function(){e.scrollTo(t,!0),e.initialized=!0}),10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var o=this.containers[e]||document;n.scrollTo(e,{container:o})}},getHash:function(){return a.default.getHash()},changeHash:function(e){this.isInitialized()&&a.default.getHash()!==e&&a.default.pushHash(e)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};t.default=i},HeTY:function(e,t,n){e.exports={container:"Navbar_container__Wwf_G",grey_line:"Navbar_grey_line__JoK5D",cover:"Navbar_cover__3SBra",content:"Navbar_content__2qWYQ",left:"Navbar_left__2otBb",logo:"Navbar_logo__gT4EI",right:"Navbar_right__2rJqJ",hamburger:"Navbar_hamburger__2wKdm",sections:"Navbar_sections__37UrD",section:"Navbar_section__2zNV3",menu:"Navbar_menu__1xprr",github_icon:"Navbar_github_icon__3g7D5"}},Lrh3:function(e,t,n){e.exports={container:"ProjectsSection_container__2OcHM",projects_grid:"ProjectsSection_projects_grid__3nvNH"}},NEP4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=(s(n("xFC4")),s(n("/PZL"))),a=s(n("8QoP")),i=s(n("QQPg"));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return r.default[e.smooth]||r.default.defaultEasing},l=function(){if("undefined"!==typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},u=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},f=function e(t,n,o){var r=n.data;if(n.ignoreCancelEvents||!r.cancel)if(r.deltaTop=Math.round(r.targetPositionY-r.startPositionY),null===r.start&&(r.start=o),r.progress=o-r.start,r.percent=r.progress>=r.duration?1:t(r.progress/r.duration),r.currentPositionY=r.startPositionY+Math.ceil(r.deltaTop*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?r.containerElement.scrollTop=r.currentPositionY:window.scrollTo(0,r.currentPositionY),r.percent<1){var a=e.bind(null,t,n);l.call(window,a)}else i.default.registered.end&&i.default.registered.end(r.to,r.target,r.currentPositionY);else i.default.registered.end&&i.default.registered.end(r.to,r.target,r.currentPositionY)},d=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},p=function(e,t,n,o){if(t.data=t.data||{currentPositionY:0,startPositionY:0,targetPositionY:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,deltaTop:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout),a.default.subscribe((function(){t.data.cancel=!0})),d(t),t.data.start=null,t.data.cancel=!1,t.data.startPositionY=u(t),t.data.targetPositionY=t.absolute?e:e+t.data.startPositionY,t.data.startPositionY!==t.data.targetPositionY){var r;t.data.deltaTop=Math.round(t.data.targetPositionY-t.data.startPositionY),t.data.duration=("function"===typeof(r=t.duration)?r:function(){return r})(t.data.deltaTop),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=o;var s=c(t),p=f.bind(null,s,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout((function(){i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),l.call(window,p)}),t.delay):(i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),l.call(window,p))}else i.default.registered.end&&i.default.registered.end(t.data.to,t.data.target,t.data.currentPositionY)},m=function(e){return(e=o({},e)).data=e.data||{currentPositionY:0,startPositionY:0,targetPositionY:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,deltaTop:null,percent:null,delayTimeout:null},e.absolute=!0,e};t.default={animateTopScroll:p,getAnimationType:c,scrollToTop:function(e){p(0,m(e))},scrollToBottom:function(e){e=m(e),d(e),p(function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,o=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)}(e),e)},scrollTo:function(e,t){p(e,m(t))},scrollMore:function(e,t){t=m(t),d(t),p(u(t)+e,t)}}},PBNW:function(e,t,n){e.exports={container:"Card_container__2Mn8y",selectable:"Card_selectable__3xCn9",badge:"Card_badge__2caZg",content:"Card_content__oEdFJ",header:"Card_header__3zZoJ",title:"Card_title__1A-34",at:"Card_at__UzzG0",company:"Card_company__3sqLZ",icon:"Card_icon__tF_67",body:"Card_body__1KIN2",bullets:"Card_bullets__jGoCd",bullet:"Card_bullet__2oVDk",bullet_circle:"Card_bullet_circle__1Vmve",bullet_text:"Card_bullet_text__fU5n3",arrow_container:"Card_arrow_container__pU55w",arrow:"Card_arrow__nAKSa",line:"Card_line__3AucS",footer:"Card_footer__E9AzB",footer_text:"Card_footer_text__yyVbi",bottom_left:"Card_bottom_left__1ArBR",lang:"Card_lang__2X52W",bottom_right:"Card_bottom_right__2R5XT",tool:"Card_tool__2ExM4"}},PGca:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n("q1tI")),r=a(n("pUFB"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.render=function(){return o.default.createElement("a",r.props,r.props.children)},i(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(o.default.Component);t.default=(0,r.default)(s)},QLqi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,n){var o=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}();e.addEventListener(t,n,!!o&&{passive:!0})},t.removePassiveEventListener=function(e,t,n){e.removeEventListener(t,n)}},QQPg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={registered:{},scrollEvent:{register:function(e,t){o.registered[e]=t},remove:function(e){o.registered[e]=null}}};t.default=o},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return W})),n.d(t,"default",(function(){return U}));var o=n("q1tI"),r=n.n(o),a=n("zxYf"),i=n.n(a),s=n("HeTY"),c=n.n(s),l=n("oqc9"),u=r.a.createElement,f=function(){document.getElementById("menu").style.top="0",document.getElementById("cover").style.visibility="visible",document.getElementById("cover").style.opacity="50%"},d=function(){document.getElementById("menu").style.top="-60px",document.getElementById("cover").style.opacity="0%",document.getElementById("cover").style.visibility="hidden"};function p(){return u(r.a.Fragment,null,u("div",{className:c.a.container},u("div",{className:c.a.cover,id:"cover",onClick:d}),u("div",{className:c.a.content},u("div",{className:c.a.left},u(l.Link,{to:"intro",smooth:!0,duration:500},u("img",{className:c.a.logo,src:"/icons/logo.svg"}))),u("div",{className:c.a.right},u("img",{className:c.a.hamburger,src:"/icons/hamburger.svg",onClick:f}),u("div",{className:c.a.menu,id:"menu",onClick:d},u("div",{className:c.a.sections},u("span",{className:c.a.section},u(l.Link,{to:"intro",smooth:"easeInOutQuad",duration:500,onClick:d},"Home")),u("span",{className:c.a.section},u(l.Link,{to:"projects",smooth:"easeInOutQuad",duration:500,offset:70,onClick:d},"Projects")),u("span",{className:c.a.section},u(l.Link,{to:"experience",smooth:"easeInOutQuad",duration:500,offset:70,onClick:d},"Experience")),u("span",{className:c.a.section},u("a",{href:"/resume.pdf"},"Resume")),u("a",{className:c.a.section,href:"https://github.com/ibigio"},u("img",{className:c.a.github_icon,src:"/icons/github.svg"}))))))),u("div",{className:c.a.grey_line}))}var m=n("Wv9t"),h=n.n(m),v=n("Z4Yb"),_=n.n(v),y=r.a.createElement,g=function(e){return y("span",{className:h.a.orange},e)};function b(){return y("div",{className:h.a.container},y("img",{className:h.a.profile,src:"/images/profile.png"}),y("div",{className:h.a.intro_text},y("div",{className:_.a.section_title},"Hi, I'm ",y("span",{className:h.a.blue},"Ilan"),"."),y("div",{className:h.a.subtitle},"ilanbigio@gmail.com"),y("div",{className:h.a.body},"I graduated with a degree in computer science from"," ",g("Brown University"),", and will be starting at"," ",g("Google")," as a software engineer in August. I love teaching and learning, and in my free time I build python projects that automate stuff to \u201csave me time\u201d.")))}var w=n("8Kt/"),O=n.n(w),S=n("YFqc"),C=n.n(S),N=n("Lrh3"),E=n.n(N),P=n("PBNW"),j=n.n(P),T=r.a.createElement;function k(e){var t=e.id,n=e.title,o=e.iconPath,r=e.description,a=e.langs,i=e.tools,s=e.favorite,c="/projects/"+t;return T("div",{className:j.a.container},s&&T("img",{className:j.a.badge,src:"/icons/star-badge.svg"}),T("div",{className:j.a.selectable},T(C.a,{href:c},T("div",{className:j.a.content},T("div",null,T("div",{className:j.a.header},T("span",{className:j.a.title},n),T("img",{className:j.a.icon,src:o})),T("div",{className:j.a.body},r)),T("div",{className:j.a.footer},T("div",{className:j.a.arrow_container},T("span",{className:j.a.arrow},"\u2192")),T("hr",{className:j.a.line}),T("div",{className:j.a.footer_text},T("span",{className:j.a.bottom_left},a.map((function(e){return T("span",{className:j.a.lang},e)}))),T("span",{className:j.a.bottom_right},i.map((function(e){return T("span",{className:j.a.tool},e)})))))))))}var x=r.a.createElement;function I(e){var t=e.projectsData;return x("div",{className:E.a.container},x("div",{className:_.a.section_title},"Projects"),x("div",{className:E.a.projects_grid},t.map((function(e){return x(k,e)}))))}function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var M=n("qQuf"),B=n.n(M),L=r.a.createElement;function Y(e){var t=e.role,n=e.company,o=e.iconPath,r=e.bullets,a=e.date,i=e.location;return L("div",{className:j.a.container},L("div",{className:j.a.content},L("div",{className:j.a.header},L("span",{className:j.a.title},L("span",{className:j.a.role},t),L("span",{className:j.a.at}," @ "),L("span",{className:j.a.company},n)),L("img",{className:j.a.icon,src:o})),L("div",{className:j.a.body},L("ul",{className:j.a.bullets},r.map((function(e){return L("li",{className:j.a.bullet,key:e},L("svg",{className:j.a.bullet_circle,height:"8",width:"8"},L("circle",{cx:"4",cy:"4",r:"3",stroke:"#F2994A","stroke-width":"1.5",fill:"white"})),L("div",{className:j.a.bullet_text},e))})))),L("div",{className:j.a.footer},L("hr",{className:j.a.line}),L("div",{className:j.a.footer_text},L("span",{className:j.a.bottom_left},a),L("span",{className:j.a.bottom_right},i)))))}var D=r.a.createElement;function Q(e){var t=e.experienceData;return D("div",{className:B.a.container},D("div",{className:[B.a.title,_.a.section_title].join(" ")},"Experience"),D("div",{className:B.a.experience_grid},t.map((function(e){return D(Y,H({},e,{className:B.a.experience}))}))))}var A=n("vSW6"),F=n.n(A),q=r.a.createElement;function R(){return q("div",{className:F.a.copyright},"\xa9 2020 Ilan Bigio")}var z=r.a.createElement,W=!0;function U(e){var t=e.projectsData,n=e.experienceData;return z("html",null,z(O.a,null,z("title",null,"Ilan Bigio"),z("meta",{charSet:"utf-8"}),z("meta",{content:"width=device-width, initial-scale=1",name:"viewport"}),z("link",{rel:"icon",type:"image/x-icon",href:"/favicon.svg"})),z("body",null,z(p,null),z("section",{id:"intro",className:i.a.intro_section},z("div",{className:i.a.white_line}),z(b,null),z(l.Link,{className:i.a.down_arrow,to:"projects",smooth:"easeInOutQuad",duration:800,offset:70},z("img",{src:"/icons/down-arrow.svg"}))),z("section",{id:"projects",className:i.a.projects_section},z(I,{projectsData:t})),z("section",{id:"experience",className:i.a.experience_section},z(Q,{experienceData:n})),z("section",{className:i.a.copyright_section},z(R,null))))}},Wv9t:function(e,t,n){e.exports={container:"Intro_container__DxB0T",profile:"Intro_profile__2xe2t",intro_text:"Intro_intro_text__VGAm4",subtitle:"Intro_subtitle__2861q",body:"Intro_body__23Iui",orange:"Intro_orange__19__m",blue:"Intro_blue__30HQL"}},Y30y:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=c(n("q1tI")),i=c(n("w2Tm")),s=c(n("17x9"));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this,t=o({},this.props);return t.parentBindings&&delete t.parentBindings,a.default.createElement("div",o({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}(a.default.Component);l.propTypes={name:s.default.string,id:s.default.string},t.default=(0,i.default)(l)},Z4Yb:function(e,t,n){e.exports={section_title:"utils_section_title__53MF8"}},"hKI/":function(e,t,n){(function(t){var n="Expected a function",o=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,d=u||f||Function("return this")(),p=Object.prototype.toString,m=Math.max,h=Math.min,v=function(){return d.Date.now()};function _(e,t,o){var r,a,i,s,c,l,u=0,f=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(n);function _(t){var n=r,o=a;return r=a=void 0,u=t,s=e.apply(o,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=i}function w(){var e=v();if(b(e))return O(e);c=setTimeout(w,function(e){var n=t-(e-l);return d?h(n,i-(e-u)):n}(e))}function O(e){return c=void 0,p&&r?_(e):(r=a=void 0,s)}function S(){var e=v(),n=b(e);if(r=arguments,a=this,l=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(w,t),f?_(e):s}(l);if(d)return c=setTimeout(w,t),_(l)}return void 0===c&&(c=setTimeout(w,t)),s}return t=g(t)||0,y(o)&&(f=!!o.leading,i=(d="maxWait"in o)?m(g(o.maxWait)||0,t):i,p="trailing"in o?!!o.trailing:p),S.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=l=a=c=void 0},S.flush=function(){return void 0===c?s:O(v())},S}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==r}(e))return o;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=s.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):i.test(e)?o:+e}e.exports=function(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(n);return y(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),_(e,t,{leading:r,maxWait:t,trailing:a})}}).call(this,n("yLpj"))},oqc9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Helpers=t.ScrollElement=t.ScrollLink=t.animateScroll=t.scrollSpy=t.Events=t.scroller=t.Element=t.Button=t.Link=void 0;var o=p(n("PGca")),r=p(n("7wkA")),a=p(n("Y30y")),i=p(n("zPnG")),s=p(n("QQPg")),c=p(n("wT0s")),l=p(n("NEP4")),u=p(n("pUFB")),f=p(n("w2Tm")),d=p(n("7FV1"));function p(e){return e&&e.__esModule?e:{default:e}}t.Link=o.default,t.Button=r.default,t.Element=a.default,t.scroller=i.default,t.Events=s.default,t.scrollSpy=c.default,t.animateScroll=l.default,t.ScrollLink=u.default,t.ScrollElement=f.default,t.Helpers=d.default,t.default={Link:o.default,Button:r.default,Element:a.default,scroller:i.default,Events:s.default,scrollSpy:c.default,animateScroll:l.default,ScrollLink:u.default,ScrollElement:f.default,Helpers:d.default}},pUFB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=u(n("q1tI")),i=u(n("wT0s")),s=u(n("zPnG")),c=u(n("17x9")),l=u(n("Dy/p"));function u(e){return e&&e.__esModule?e:{default:e}}var f={to:c.default.string.isRequired,containerId:c.default.string,container:c.default.object,activeClass:c.default.string,spy:c.default.bool,smooth:c.default.oneOfType([c.default.bool,c.default.string]),offset:c.default.number,delay:c.default.number,isDynamic:c.default.bool,onClick:c.default.func,duration:c.default.oneOfType([c.default.number,c.default.func]),absolute:c.default.bool,onSetActive:c.default.func,onSetInactive:c.default.func,ignoreCancelEvents:c.default.bool,hashSpy:c.default.bool};t.default=function(e,t){var n=t||s.default,c=function(t){function s(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return u.call(t),t.state={active:!1},t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,t),r(s,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();i.default.isMounted(e)||i.default.mount(e),this.props.hashSpy&&(l.default.isMounted()||l.default.mount(n),l.default.mapContainer(this.props.to,e)),i.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){i.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in f)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,a.default.createElement(e,n)}}]),s}(a.default.PureComponent),u=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,o({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t){var o=e.getScrollSpyContainer();if(!l.default.isMounted()||l.default.isInitialized()){var r=e.props.to,a=null,i=0,s=0,c=0;if(o.getBoundingClientRect)c=o.getBoundingClientRect().top;if(!a||e.props.isDynamic){if(!(a=n.get(r)))return;var u=a.getBoundingClientRect();s=(i=u.top-c+t)+u.height}var f=t-e.props.offset,d=f>=Math.floor(i)&&f<Math.floor(s),p=f<Math.floor(i)||f>=Math.floor(s),m=n.getActiveLink();p&&(r===m&&n.setActiveLink(void 0),e.props.hashSpy&&l.default.getHash()===r&&l.default.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(r,a))),!d||m===r&&!1!==e.state.active||(n.setActiveLink(r),e.props.hashSpy&&l.default.changeHash(r),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(r,a)))}}};return c.propTypes=f,c.defaultProps={offset:0},c}},qQuf:function(e,t,n){e.exports={container:"ExperienceSection_container__y5-ev",title:"ExperienceSection_title__EmOFc",experience_grid:"ExperienceSection_experience_grid__1VNuB"}},vSW6:function(e,t,n){e.exports={copyright:"CopyrightSection_copyright__jAojt"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},w2Tm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=c(n("q1tI")),i=(c(n("i8i4")),c(n("zPnG"))),s=c(n("17x9"));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),r(n,[{key:"componentDidMount",value:function(){if("undefined"===typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"===typeof window)return!1;i.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){i.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return a.default.createElement(e,o({},this.props,{parentBindings:this.childBindings}))}}]),n}(a.default.Component);return t.propTypes={name:s.default.string,id:s.default.string},t}},wT0s:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n("hKI/"),a=(o=r)&&o.__esModule?o:{default:o},i=n("QLqi");var s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e){if(e){var t=function(e){return(0,a.default)(e,66)}((function(t){s.scrollHandler(e)}));s.scrollSpyContainers.push(e),(0,i.addPassiveEventListener)(e,"scroll",t)}},isMounted:function(e){return-1!==s.scrollSpyContainers.indexOf(e)},currentPositionY:function(e){if(e===document){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach((function(t){return t(s.currentPositionY(e))}))},addStateHandler:function(e){s.spySetState.push(e)},addSpyHandler:function(e,t){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(s.currentPositionY(t))},updateStates:function(){s.spySetState.forEach((function(e){return e()}))},unmount:function(e,t){s.scrollSpyContainers.forEach((function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)})),s.spySetState&&s.spySetState.length&&s.spySetState.splice(s.spySetState.indexOf(e),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach((function(e){return s.scrollHandler(e)}))}};t.default=s},xFC4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={pushHash:function(e){if(e=e?0===e.indexOf("#")?e:"#"+e:"",history.pushState){var t=window.location;history.pushState(null,null,e?t.pathname+t.search+e:t.pathname+t.search)}else location.hash=e},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t){return e===document?t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset):"static"!==getComputedStyle(e).position?t.offsetTop:t.offsetTop-e.offsetTop}}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===typeof window&&(n=window)}e.exports=n},zPnG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=s(n("xFC4")),a=s(n("NEP4")),i=s(n("QQPg"));function s(e){return e&&e.__esModule?e:{default:e}}var c={},l=void 0;t.default={unmount:function(){c={}},register:function(e,t){c[e]=t},unregister:function(e){delete c[e]},get:function(e){return c[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return l=e},getActiveLink:function(){return l},scrollTo:function(e,t){var n=this.get(e);if(n){var s=(t=o({},t,{absolute:!1})).containerId,c=t.container,l=void 0;l=s?document.getElementById(s):c&&c.nodeType?c:document,t.absolute=!0;var u=r.default.scrollOffset(l,n)+(t.offset||0);if(!t.smooth)return i.default.registered.begin&&i.default.registered.begin(e,n),l===document?window.scrollTo(0,u):l.scrollTop=u,void(i.default.registered.end&&i.default.registered.end(e,n));a.default.animateTopScroll(u,t,e,n)}else console.warn("target Element not found")}}},zxYf:function(e,t,n){e.exports={intro_section:"home_intro_section__1hVW6",white_line:"home_white_line__3tH5F",down_arrow:"home_down_arrow__1uXgx",projects_section:"home_projects_section__1QPLU",experience_section:"home_experience_section__38zQN",copyright_section:"home_copyright_section__1Ag1q"}}},[["vlRD",0,2,1,3]]]);