(self.webpackChunkomniscraper_frontend=self.webpackChunkomniscraper_frontend||[]).push([[179],{6755:(e,t,n)=>{"use strict";n.d(t,{b:()=>i});var r=n(9669);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n.n(r)().create({baseURL:"https://omnifinal.herokuapp.com/api/",timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT ".concat(localStorage.getItem("access_token")):null,"Content-Type":"application/json",accept:"application/json"}});i.interceptors.response.use((function(e){return e}),(function(e){var t=e.config;if(localStorage.getItem("refresh_token")&&401===e.response.status&&"Unauthorized"===e.response.statusText){var n=localStorage.getItem("refresh_token");return i.post("/token/refresh/",{refresh:n}).then((function(e){return localStorage.setItem("access_token",e.data.access),localStorage.setItem("refresh_token",e.data.refresh),i.defaults.headers.Authorization="JWT "+e.data.access,t.headers.Authorization="JWT "+e.data.access,i(t)})).catch((function(e){return console.log(e)}))}return Promise.reject(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}))},9497:(e,t,n)=>{"use strict";var r=n(7294),o=n(3935),a=n(5513),i=n(2487),c=n(9669),l=n.n(c),s=n(5258),u=n(8358),f=n(282),d=n(773);function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,o,i=y(c);function c(){return p(this,c),i.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.loggedIn,n=e.handleLogout,o=e.classes,i=e.handleClearClickedTag;return r.createElement("div",{style:{flexGrow:1,margin:0}},r.createElement(s.Z,{position:"fixed",style:{backgroundColor:"#1a1c20"}},r.createElement(u.Z,null,r.createElement("h3",{style:{flexGrow:1,textTransform:"uppercase",letterSpacing:"0.1em"},onClick:i},r.createElement(a.rU,{to:"/",style:{color:"white",textDecoration:"none",cursor:"pointer"}},"Omniscraper")),r.createElement("div",null,t&&r.createElement(r.Fragment,null,r.createElement(f.Z,{size:"small",variant:"contained",component:a.rU,to:"/",className:o.navLink,onClick:n},"Logout"))))))}}])&&h(t.prototype,n),o&&h(t,o),c}(r.Component);const S=(0,d.Z)((function(e){return{navLink:{textDecoration:"none",cursor:"pointer"}}}))(k);var O=n(6755),w=n(7373),E=n(3457),T=n(8905);function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=z(e);if(t){var o=z(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}function R(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=r.lazy((function(){return Promise.all([n.e(216),n.e(830)]).then(n.bind(n,4830))})),D=r.lazy((function(){return Promise.all([n.e(216),n.e(351)]).then(n.bind(n,351))})),M=r.lazy((function(){return Promise.all([n.e(216),n.e(219)]).then(n.bind(n,1219))})),U=r.lazy((function(){return Promise.all([n.e(216),n.e(624)]).then(n.bind(n,7624))})),V=(0,w.Z)({typography:{fontFamily:["Montserrat"].join(",")},palette:{primary:{main:"#185adb"},secondary:{main:"#cf0000"}}});const B=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(s,e);var t,n,o,c=A(s);function s(){var e;P(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return W(x(e=c.call.apply(c,[this].concat(n))),"state",{username:"",password:"",loggedIn:!!localStorage.getItem("access_token"),loginLoading:!1,error:null,clickedTag:localStorage.getItem("clicked_tag")||null,tagsLoading:!1,videoTags:[],videosLoadingError:!1,loading:!1,offset:0,limit:6,videos:[],hasMore:!0}),W(x(e),"loadVideos",(function(){e.setState({loading:!0},(function(){var t=e.state,n=t.offset,r=t.limit,o="https://omnifinal.herokuapp.com/api/videos/?limit=".concat(r,"&offset=").concat(n);l().get(o).then((function(t){var o=t.data.videos,a=t.data.has_more;e.setState({hasMore:a,loading:!1,videos:[].concat(j(e.state.videos),j(o)),offset:n+r})})).catch((function(t){e.setState({videosLoadingError:t.message,loading:!1})}))}))})),W(x(e),"loadTags",(function(){e.setState({tagsLoading:!0},(function(){l().get("https://omnifinal.herokuapp.com/api/tags/").then((function(t){var n=t.data.tags;e.setState({videoTags:n,tagsLoading:!1})})).catch((function(t){e.setState({tagsLoading:!1})}))}))})),W(x(e),"handleClickedTag",(function(t){e.setState({clickedTag:t},(function(){return localStorage.setItem("clicked_tag",e.state.clickedTag)}))})),W(x(e),"handleClearClickedTag",(function(){localStorage.removeItem("clicked_tag"),e.setState({clickedTag:null})})),W(x(e),"handleChange",(function(t){e.setState(W({},t.target.name,t.target.value))})),W(x(e),"handleLogin",(function(t){var n=e.state,r=n.username,o=n.password;t.preventDefault(),e.setState({loginLoading:!0},(function(){O.b.post("token/obtain/",{username:r,password:o}).then((function(t){O.b.defaults.headers.Authorization="JWT "+t.data.access,localStorage.setItem("access_token",t.data.access),localStorage.setItem("refresh_token",t.data.refresh),e.setState({loggedIn:!0,loginLoading:!1,username:"",password:""})})).catch((function(t){e.setState({loggedIn:!1,loginLoading:!1})}))}))})),W(x(e),"handleLogout",(function(){O.b.post("/blacklist/",{refresh_token:localStorage.getItem("refresh_token")}).then((function(t){localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),O.b.defaults.headers.Authorization=null,e.setState({loggedIn:!1})})).catch((function(t){console.log(t.statusText),e.setState({loggedIn:!1})}))})),e}return t=s,(n=[{key:"componentDidMount",value:function(){this.loadTags(),this.loadVideos()}},{key:"render",value:function(){var e=this.handleChange,t=this.handleLogin,n=this.handleLogout,o=this.handleClickedTag,c=this.handleClearClickedTag,l=this.loadTags,s=this.loadVideos,u=this.state,f=u.username,d=u.password,g=u.error,p=u.loggedIn,h=u.loginLoading,m=u.videoTags,y=u.clickedTag,b=u.tagsLoading,v=u.videosLoadingError,k=u.loading,O=u.hasMore,w=u.videos;return r.createElement(E.Z,{theme:V},r.createElement(a.VK,null,r.createElement("div",null,r.createElement(r.Suspense,{fallback:r.createElement("div",{style:{height:"100vh",display:"grid",placeItems:"center"}},r.createElement(T.g,{color:"#185adb",height:50,width:50}))},r.createElement(S,{loggedIn:p,handleLogout:n,handleClearClickedTag:c}),r.createElement(i.rs,null,p?r.createElement(i.l_,{from:"/login",to:"/"}):"",r.createElement(i.AW,{exact:!0,path:"/"},r.createElement(Z,{loggedIn:p,videoTags:m,handleClickedTag:o,clickedTag:y,tagsLoading:b,loadTags:l,error:v,loading:k,hasMore:O,videos:w,loadVideos:s})),r.createElement(i.AW,{path:"/tags/:slug",children:r.createElement(U,{videoTags:m,loggedIn:p,handleClickedTag:o,clickedTag:y,tagsLoading:b,loadTags:l})}),r.createElement(i.AW,{path:"/login",children:r.createElement(D,{username:f,password:d,loginLoading:h,error:g,handleChange:e,handleSubmit:t})}),r.createElement(i.AW,{path:"/:slug",children:r.createElement(M,null)}))))))}}])&&L(t.prototype,n),o&&L(t,o),s}(r.Component);var J=n(1516),F=(0,n(5648).lX)();F.listen((function(e){J.ZP.set({page:e.pathname}),J.ZP.pageview(e.pathname)})),J.ZP.initialize("UA-190601275-1"),o.render(r.createElement(a.VK,{history:F},r.createElement(B,null)),document.getElementById("app")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./service-worker.js").then((function(e){console.log("SW registered: ",e)})).catch((function(e){console.log("SW ERROR: ",e)}))}))}},e=>{"use strict";e.O(0,[216],(()=>{return t=9497,e(e.s=t);var t}));e.O()}]);