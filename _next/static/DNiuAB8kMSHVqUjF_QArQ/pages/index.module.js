(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+iuc":function(e,t,r){r("wgeU"),r("FlQf"),r("bBy9"),r("B9jh"),r("dL40"),r("xvv9"),r("V+O7"),e.exports=r("WEpk").Set},"/0+H":function(e,t,r){var n=r("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};n(t,"__esModule",{value:!0});var i=o(r("q1tI")),s=r("lwAK");function a(){var{ampFirst:e=!1,hybrid:t=!1,hasQuery:r=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&r}t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(s.AmpStateContext))}},"/h46":function(e,t,r){r("cHUd")("Map")},"1cVb":function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(0,i.default)(e))throw new TypeError("given propTypes must be an object");if((0,o.default)(e,u)&&(t=e[u],!t||t[u]!==c))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");var t;return(0,n.default)({},e,a({},u,(r=function(t,r,n){var i=Object.keys(t).filter((function(t){return!(0,o.default)(e,t)}));return i.length>0?new TypeError(String(n)+": unknown props found: "+String(i.join(", "))):null},(0,n.default)(r,a({},u,c)))));var r};var n=s(r("kX7M")),o=s(r("oNNP")),i=s(r("KNBU"));function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u="prop-types-exact: \u200b",c="function"===typeof Symbol&&"function"===typeof Symbol.for?Symbol.for(u):u;e.exports=t.default},"2Eek":function(e,t,r){e.exports=r("W7oM")},"3niX":function(e,t,r){t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var n,o=r("q1tI");var i=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),s=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return i.computeId(t,r)})).join(" ")};var o=n.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},n}(o.Component);t.default=s},"4mXO":function(e,t,r){e.exports=r("7TPF")},"7TPF":function(e,t,r){r("AUvm"),e.exports=r("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,r){var n=r("Y7ZC"),o=r("uplh"),i=r("NsO/"),s=r("vwuL"),a=r("IP1Z");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,n=i(e),u=s.f,c=o(n),l={},p=0;c.length>p;)void 0!==(r=u(n,t=c[p++]))&&a(l,t,r);return l}})},"8Kt/":function(e,t,r){var n=r("ttDY"),o=r("hfKm"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(t,"__esModule",{value:!0});var s=i(r("q1tI")),a=i(r("Xuae")),u=r("lwAK"),c=r("FYa8"),l=r("/0+H");function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t),[])):e.concat(t)}t.defaultHead=p;var h=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((e,t)=>{var r=s.default.Children.toArray(t.props.children);return e.concat(r)},[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new n,t=new n,r=new n,o={};return i=>{var s=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var a=i.key.slice(i.key.indexOf("$")+1);e.has(a)?s=!1:e.add(a)}switch(i.type){case"title":case"base":t.has(i.type)?s=!1:t.add(i.type);break;case"meta":for(var u=0,c=h.length;u<c;u++){var l=h[u];if(i.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?s=!1:r.add(l);else{var p=i.props[l],f=o[l]||new n;f.has(p)?s=!1:(f.add(p),o[l]=f)}}}return s}}()).reverse().map((e,t)=>{var r=e.key||t;return s.default.cloneElement(e,{key:r})})}var m=a.default();function v(e){var{children:t}=e;return s.default.createElement(u.AmpStateContext.Consumer,null,e=>s.default.createElement(c.HeadManagerContext.Consumer,null,r=>s.default.createElement(m,{reduceComponentsToState:d,handleStateChange:r,inAmpMode:l.isInAmpMode(e)},t)))}v.rewind=m.rewind,t.default=v},"8iia":function(e,t,r){var n=r("QMMT"),o=r("RRc/");e.exports=function(e){return function(){if(n(this)!=e)throw TypeError(e+"#toJSON isn't generic");return o(this)}}},"9kyW":function(e,t,r){e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},B9jh:function(e,t,r){var n=r("Wu5q"),o=r("n3ko");e.exports=r("raTm")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return n.def(o(this,"Set"),e=0===e?0:e,e)}},n)},D3zA:function(e,t,r){var n=r("aI7X");e.exports=Function.prototype.bind||n},IP1Z:function(e,t,r){var n=r("2faE"),o=r("rr1i");e.exports=function(e,t,r){t in e?n.f(e,t,o(0,r)):e[t]=r}},KNBU:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)},e.exports=t.default},LX0d:function(e,t,r){e.exports=r("UDep")},MX0m:function(e,t,r){e.exports=r("3niX")},RNiq:function(e,t,r){r.r(t);var n=r("MX0m"),o=r.n(n),i=r("q1tI"),s=r.n(i),a=r("8Kt/"),u=r.n(a),c=r("hfKm"),l=r.n(c),p=r("2Eek"),f=r.n(p),h=r("XoMD"),d=r.n(h),m=r("Jo+v"),v=r.n(m),y=r("4mXO"),_=r.n(y),x=r("pLtp"),g=r.n(x);function b(e,t,r){return t in e?l()(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=r("YFqc"),w=r.n(S),j=s.a.createElement;function k(e,t){var r=g()(e);if(_.a){var n=_()(e);t&&(n=n.filter((function(t){return v()(e,t).enumerable}))),r.push.apply(r,n)}return r}var C=[{href:"https://zeit.co/now",label:"ZEIT"},{href:"https://github.com/zeit/next.js",label:"GitHub"}].map(e=>(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){b(e,t,r[t])})):d.a?f()(e,d()(r)):k(Object(r)).forEach((function(t){l()(e,t,v()(r,t))}))}return e})({},e,{key:"nav-link-".concat(e.href,"-").concat(e.label)})),N=()=>j("nav",{className:"jsx-2055897931"},j("ul",{className:"jsx-2055897931"},j("li",{className:"jsx-2055897931"},j(w.a,{href:"/"},j("a",{className:"jsx-2055897931"},"Home"))),C.map(e=>{var{key:t,href:r,label:n}=e;return j("li",{key:t,className:"jsx-2055897931"},j("a",{href:r,className:"jsx-2055897931"},n))})),j(o.a,{id:"2055897931"},["body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}","nav.jsx-2055897931{text-align:center;}","ul.jsx-2055897931{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}","nav.jsx-2055897931>ul.jsx-2055897931{padding:4px 16px;}","li.jsx-2055897931{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;}","a.jsx-2055897931{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}"])),O=s.a.createElement;t.default=()=>O("div",{className:"jsx-243749409"},O(u.a,null,O("meta",{name:"theme-color",content:"#db5945",className:"jsx-243749409"}),O("title",{className:"jsx-243749409"},"Home"),O("link",{rel:"manifest",href:"/static/manifest.json",className:"jsx-243749409"}),O("link",{rel:"icon",href:"/favicon.ico",className:"jsx-243749409"})),O(N,null),O("div",{className:"jsx-243749409 hero"},O("h1",{className:"jsx-243749409 title"},"Welcome to Next.js!"),O("p",{className:"jsx-243749409 description"},"To get started, edit ",O("code",{className:"jsx-243749409"},"pages/index.js")," and save to reload."),O("div",{className:"jsx-243749409 row"},O("a",{href:"https://nextjs.org/docs",className:"jsx-243749409 card"},O("h3",{className:"jsx-243749409"},"Documentation \u2192"),O("p",{className:"jsx-243749409"},"Learn more about Next.js in the documentation.")),O("a",{href:"https://nextjs.org/learn",className:"jsx-243749409 card"},O("h3",{className:"jsx-243749409"},"Next.js Learn \u2192"),O("p",{className:"jsx-243749409"},"Learn about Next.js by following an interactive tutorial!")),O("a",{href:"https://github.com/zeit/next.js/tree/master/examples",className:"jsx-243749409 card"},O("h3",{className:"jsx-243749409"},"Examples \u2192"),O("p",{className:"jsx-243749409"},"Find other example boilerplates on the Next.js GitHub."),O("img",{src:"https://media.tenor.com/images/f4c8059e75d21aa301174d4374ec4680/tenor.gif",alt:"loading...",className:"jsx-243749409"})))),O(o.a,{id:"243749409"},[".hero.jsx-243749409{width:100%;color:#333;}",".title.jsx-243749409{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}",".title.jsx-243749409,.description.jsx-243749409{text-align:center;}",".row.jsx-243749409{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}",".card.jsx-243749409{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}",".card.jsx-243749409:hover{border-color:#067df7;}",".card.jsx-243749409 h3.jsx-243749409{margin:0;color:#067df7;font-size:18px;}",".card.jsx-243749409 p.jsx-243749409{margin:0;padding:12px 0 0;font-size:13px;color:#333;}"]))},"RRc/":function(e,t,r){var n=r("oioR");e.exports=function(e,t){var r=[];return n(e,!1,r.push,r,t),r}},SevZ:function(e,t,r){t.__esModule=!0,t.default=void 0;var n=i(r("9kyW")),o=i(r("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=i,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var o=String(r),i=t+o;return e[i]||(e[i]="jsx-"+(0,n.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=r+n;return t[o]||(t[o]=n.replace(e,r)),t[o]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,o=e.id;if(n){var i=this.computeId(o,n);return{styleId:i,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,r)]}}return{styleId:this.computeId(o),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},UDep:function(e,t,r){r("wgeU"),r("FlQf"),r("bBy9"),r("g33z"),r("XLbu"),r("/h46"),r("dVTT"),e.exports=r("WEpk").Map},"V+O7":function(e,t,r){r("aPfg")("Set")},W7oM:function(e,t,r){r("nZgG");var n=r("WEpk").Object;e.exports=function(e,t){return n.defineProperties(e,t)}},Wu5q:function(e,t,r){var n=r("2faE").f,o=r("oVml"),i=r("XJU/"),s=r("2GTP"),a=r("EXMj"),u=r("oioR"),c=r("MPFp"),l=r("UO39"),p=r("TJWN"),f=r("jmDH"),h=r("6/1s").fastKey,d=r("n3ko"),m=f?"_s":"size",v=function(e,t){var r,n=h(t);if("F"!==n)return e._i[n];for(r=e._f;r;r=r.n)if(r.k==t)return r};e.exports={getConstructor:function(e,t,r,c){var l=e((function(e,n){a(e,l,t,"_i"),e._t=t,e._i=o(null),e._f=void 0,e._l=void 0,e[m]=0,void 0!=n&&u(n,r,e[c],e)}));return i(l.prototype,{clear:function(){for(var e=d(this,t),r=e._i,n=e._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete r[n.i];e._f=e._l=void 0,e[m]=0},delete:function(e){var r=d(this,t),n=v(r,e);if(n){var o=n.n,i=n.p;delete r._i[n.i],n.r=!0,i&&(i.n=o),o&&(o.p=i),r._f==n&&(r._f=o),r._l==n&&(r._l=i),r[m]--}return!!n},forEach:function(e){d(this,t);for(var r,n=s(e,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(n(r.v,r.k,this);r&&r.r;)r=r.p},has:function(e){return!!v(d(this,t),e)}}),f&&n(l.prototype,"size",{get:function(){return d(this,t)[m]}}),l},def:function(e,t,r){var n,o,i=v(e,t);return i?i.v=r:(e._l=i={i:o=h(t,!0),k:t,v:r,p:n=e._l,n:void 0,r:!1},e._f||(e._f=i),n&&(n.n=i),e[m]++,"F"!==o&&(e._i[o]=i)),e},getEntry:v,setStrong:function(e,t,r){c(e,t,(function(e,r){this._t=d(e,t),this._k=r,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?l(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,l(1))}),r?"entries":"values",!r,!0),p(t)}}},XLbu:function(e,t,r){var n=r("Y7ZC");n(n.P+n.R,"Map",{toJSON:r("8iia")("Map")})},XoMD:function(e,t,r){e.exports=r("hYAz")},Xuae:function(e,t,r){var n=r("ttDY");r("hfKm")(t,"__esModule",{value:!0});var o=r("q1tI");t.default=()=>{var e,t=new n;function r(r){e=r.props.reduceComponentsToState([...t],r.props),r.props.handleStateChange&&r.props.handleStateChange(e)}return class extends o.Component{static rewind(){var r=e;return e=void 0,t.clear(),r}constructor(e){super(e)}componentDidMount(){t.add(this),r(this)}componentDidUpdate(){r(this)}componentWillUnmount(){t.delete(this),r(this)}render(){return null}}}},YFqc:function(e,t,r){e.exports=r("cTJO")},aI7X:function(e,t,r){var n="Function.prototype.bind called on incompatible ",o=Array.prototype.slice,i=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!==typeof t||"[object Function]"!==i.call(t))throw new TypeError(n+t);for(var r,s=o.call(arguments,1),a=function(){if(this instanceof r){var n=t.apply(this,s.concat(o.call(arguments)));return Object(n)===n?n:this}return t.apply(e,s.concat(o.call(arguments)))},u=Math.max(0,t.length-s.length),c=[],l=0;l<u;l++)c.push("$"+l);if(r=Function("binder","return function ("+c.join(",")+"){ return binder.apply(this,arguments); }")(a),t.prototype){var p=function(){};p.prototype=t.prototype,r.prototype=new p,p.prototype=null}return r}},bVZc:function(e,t,r){(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,r=t.name,i=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,u=void 0===a?n:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var p=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=p?p.getAttribute("content"):null}var t,i,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,i),a&&r(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,r("8oxB"))},cTJO:function(e,t,r){(function(e){var n=r("LX0d"),o=r("KI45"),i=r("5Uuq");t.__esModule=!0,t.default=void 0;var s,a=r("CxY0"),u=i(r("q1tI")),c=o(r("nOHt")),l=r("g/15");function p(e){return e&&"object"===typeof e?(0,l.formatWithValidation)(e):e}var f=new n,h=window.IntersectionObserver,d={};function m(){return s||(h?s=new h(e=>{e.forEach(e=>{if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),f.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var v=(e,t)=>{var r=m();return r?(r.observe(e),f.set(e,t),()=>{try{r.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):()=>{}};class y extends u.Component{constructor(t){super(t),this.p=void 0,this.cleanUpListeners=()=>{},this.formatUrls=function(e){var t=null,r=null,n=null;return(o,i)=>{if(n&&o===t&&i===r)return n;var s=e(o,i);return t=o,r=i,n=s,s}}((e,t)=>({href:p(e),as:t?p(t):t})),this.linkClicked=e=>{var{nodeName:t,target:r}=e.currentTarget;if("A"!==t||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var{href:n,as:o}=this.formatUrls(this.props.href,this.props.as);if(function(e){var t=(0,a.parse)(e,!1,!0),r=(0,a.parse)((0,l.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(n)){var{pathname:i}=window.location;n=(0,a.resolve)(i,n),o=o?(0,a.resolve)(i,o):n,e.preventDefault();var{scroll:s}=this.props;null==s&&(s=o.indexOf("#")<0),c.default[this.props.replace?"replace":"push"](n,o,{shallow:this.props.shallow}).then(e=>{e&&s&&(window.scrollTo(0,0),document.body.focus())})}}},"production"!==(e&&e.env,"production")&&t.prefetch&&console.warn("Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated"),this.p=!1!==t.prefetch}componentWillUnmount(){this.cleanUpListeners()}getHref(){var{pathname:e}=window.location,{href:t}=this.formatUrls(this.props.href,this.props.as);return(0,a.resolve)(e,t)}handleRef(e){var t=d[this.getHref()];this.p&&h&&e&&e.tagName&&(this.cleanUpListeners(),t||(this.cleanUpListeners=v(e,()=>{this.prefetch()})))}prefetch(){if(this.p){var e=this.getHref();c.default.prefetch(e),d[e]=!0}}render(){var{children:t}=this.props,{href:n,as:o}=this.formatUrls(this.props.href,this.props.as);"string"===typeof t&&(t=u.default.createElement("a",null,t));var i=u.Children.only(t),s={ref:e=>{this.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:e=>{i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),this.prefetch()},onClick:e=>{i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||this.linkClicked(e)}};if(!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||n),e&&e.env){var a=r("P5f7").rewriteUrlForNextExport;s.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=a(s.href))}return u.default.cloneElement(i,s)}}if("development"===(e&&e.env,"production")){var _=(0,l.execOnce)(console.error),x=r("17x9"),g=r("1cVb");y.propTypes=g({href:x.oneOfType([x.string,x.object]).isRequired,as:x.oneOfType([x.string,x.object]),prefetch:x.bool,replace:x.bool,shallow:x.bool,passHref:x.bool,scroll:x.bool,children:x.oneOfType([x.element,(e,t)=>{return"string"===typeof e[t]&&_("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"),null}]).isRequired})}var b=y;t.default=b}).call(this,r("8oxB"))},dL40:function(e,t,r){var n=r("Y7ZC");n(n.P+n.R,"Set",{toJSON:r("8iia")("Set")})},dVTT:function(e,t,r){r("aPfg")("Map")},g33z:function(e,t,r){var n=r("Wu5q"),o=r("n3ko");e.exports=r("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=n.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return n.def(o(this,"Map"),0===e?0:e,t)}},n,!0)},hYAz:function(e,t,r){r("7m0m"),e.exports=r("WEpk").Object.getOwnPropertyDescriptors},kX7M:function(e,t,r){var n=Object.assign.bind(Object);function o(){return n}Object.defineProperties(o(),{implementation:{get:o},shim:{value:o},getPolyfill:{value:o}}),e.exports=o()},lwAK:function(e,t,r){var n=r("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};n(t,"__esModule",{value:!0});var i=o(r("q1tI"));t.AmpStateContext=i.createContext({})},nZgG:function(e,t,r){var n=r("Y7ZC");n(n.S+n.F*!r("jmDH"),"Object",{defineProperties:r("fpC5")})},oNNP:function(e,t,r){var n=r("D3zA");e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},ttDY:function(e,t,r){e.exports=r("+iuc")},uplh:function(e,t,r){var n=r("ar/p"),o=r("mqlF"),i=r("5K7Z"),s=r("5T2Y").Reflect;e.exports=s&&s.ownKeys||function(e){var t=n.f(i(e)),r=o.f;return r?t.concat(r(e)):t}},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])},xvv9:function(e,t,r){r("cHUd")("Set")}},[["vlRD",1,2,0]]]);