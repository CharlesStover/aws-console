(this["webpackJsonp@charlesstover/aws-console"]=this["webpackJsonp@charlesstover/aws-console"]||[]).push([[0],{148:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var o=n(22),a=n(77),c=n(78),i=n(26),r=n(24),s=(n(98),n(9)),l=n(0),u=n(72),d=n(25),b=n(43),h=n(36),j=n(73),f=n(35),O=n(86),v=n(84),g=n(88),y=n(58);var m=n(3),p=Object.freeze([]);function C(e){var t=e.children,n=function(e){var t=Object(s.c)(),n=Object(y.a)().handleFollow;return{ariaLabel:t("Breadcrumbs"),handleFollow:n,items:Object(l.useMemo)((function(){return[{text:t("Home")||"...",href:"/"}].concat(Object(g.a)(e))}),[e,t])}}(void 0===t?p:t),o=n.ariaLabel,a=n.handleFollow,c=n.items;return Object(m.jsx)(v.a,{ariaLabel:o,items:c,onFollow:a})}var x=n(62),A=n(67),L=n(85),w=n(28),k=Object(l.createContext)(null);var K=Object(l.createContext)(null);var M=Object(l.createContext)(null);var T=Object(l.createContext)(null);var I,E=n(42);function D(e){var t=function(e){var t=e.onChange,n=e.value,o=Object(s.c)(),a=Object(l.useMemo)((function(){return[{label:o("Comfortable")||"...",value:i.a.Comfortable},{label:o("Compact")||"...",value:i.a.Compact}]}),[o]);return{ariaLabel:o("Density"),options:a,handleChange:Object(l.useCallback)((function(e){t(e.detail.selectedOption.value)}),[t]),selectedOption:Object(l.useMemo)((function(){return a.find((function(e){return e.value===n}))}),[a,n])}}({onChange:e.onChange,value:e.value}),n=t.ariaLabel,o=t.handleChange,a=t.options,c=t.selectedOption;return Object(m.jsx)(E.a,{ariaLabel:n,onChange:o,options:a,selectedOption:c})}!function(e){e.EnUs="en-us"}(I||(I={}));var S=I;function _(e){var t=function(e){var t=e.onChange,n=e.value,o=Object(s.c)(),a=Object(l.useMemo)((function(){return[{label:o("English")||"English",value:S.EnUs}]}),[o]);return{ariaLabel:o("Locale"),options:a,handleChange:Object(l.useCallback)((function(e){t(e.detail.selectedOption.value)}),[t]),selectedOption:Object(l.useMemo)((function(){return a.find((function(e){return e.value===n}))}),[a,n])}}({onChange:e.onChange,value:e.value}),n=t.ariaLabel,o=t.handleChange,a=t.options,c=t.selectedOption;return Object(m.jsx)(E.a,{ariaLabel:n,onChange:o,options:a,selectedOption:c})}function N(e){var t=function(e){var t=e.onChange,n=e.value,o=Object(s.c)(),a=Object(l.useMemo)((function(){return[{label:o("Light")||"...",value:i.b.Light},{label:o("Dark")||"...",value:i.b.Dark}]}),[o]);return{ariaLabel:o("Mode"),options:a,handleChange:Object(l.useCallback)((function(e){t(e.detail.selectedOption.value)}),[t]),selectedOption:Object(l.useMemo)((function(){return a.find((function(e){return e.value===n}))}),[a,n])}}({onChange:e.onChange,value:e.value}),n=t.ariaLabel,o=t.handleChange,a=t.options,c=t.selectedOption;return Object(m.jsx)(E.a,{ariaLabel:n,onChange:o,options:a,selectedOption:c})}function H(e){var t=e.onChange,n=e.value,o=function(e){var t=e.onChange;return{ariaLabel:Object(s.c)()("Motion"),handleChange:Object(l.useCallback)((function(e){t(e.detail.checked)}),[t])}}({onChange:t}),a=o.ariaLabel,c=o.handleChange;return Object(m.jsx)(b.a,{ariaLabel:a,checked:n,onChange:c,children:Object(m.jsx)(s.b,{children:"Motion"})})}function P(e,t){return Object(m.jsxs)(f.a,{direction:"vertical",size:"m",children:[Object(m.jsx)(h.a,{label:Object(m.jsx)(s.b,{children:"Density"}),children:Object(m.jsx)(D,{onChange:function(n){t(Object(o.a)(Object(o.a)({},e),{},{density:n}))},value:e.density})}),Object(m.jsx)(h.a,{label:Object(m.jsx)(s.b,{children:"Locale"}),children:Object(m.jsx)(_,{onChange:function(n){t(Object(o.a)(Object(o.a)({},e),{},{locale:n}))},value:e.locale})}),Object(m.jsx)(h.a,{label:Object(m.jsx)(s.b,{children:"Mode"}),children:Object(m.jsx)(N,{onChange:function(n){t(Object(o.a)(Object(o.a)({},e),{},{mode:n}))},value:e.mode})}),Object(m.jsx)(H,{onChange:function(n){t(Object(o.a)(Object(o.a)({},e),{},{motion:n}))},value:e.motion})]})}function F(){var e=function(){var e=Object(l.useContext)(k);if(null===e)throw new Error("The Density context was not mounted.");return e}(),t=Object(w.a)(e,2),n=t[0],o=t[1],a=function(){var e=Object(l.useContext)(K);if(null===e)throw new Error("The Locale context was not mounted.");return e}(),c=Object(w.a)(a,2),i=c[0],r=c[1],u=function(){var e=Object(l.useContext)(M);if(null===e)throw new Error("The Mode context was not mounted.");return e}(),d=Object(w.a)(u,2),b=d[0],h=d[1],j=function(){var e=Object(l.useContext)(T);if(null===e)throw new Error("The Motion context was not mounted.");return e}(),f=Object(w.a)(j,2),O=f[0],v=f[1],g=Object(s.c)();return{cancelLabel:g("Cancel")||"...",confirmLabel:g("Confirm")||"...",customPreference:P,title:g("Preferences")||"...",handleConfirm:Object(l.useCallback)((function(e){if("undefined"!==typeof e.detail.custom){var t=e.detail.custom,a=t.density,c=t.locale,s=t.mode,l=t.motion;n!==a&&o(a),i!==c&&r(c),b!==s&&h(s),O!==l&&v(l)}}),[n,i,b,O,o,r,h,v]),preferences:Object(l.useMemo)((function(){return{custom:{density:n,locale:i,mode:b,motion:O}}}),[n,i,b,O])}}function R(){var e=F(),t=e.cancelLabel,n=e.confirmLabel,o=e.customPreference,a=e.handleConfirm,c=e.preferences,i=e.title;return Object(m.jsx)(L.a,{cancelLabel:t,confirmLabel:n,customPreference:o,onConfirm:a,preferences:c,title:i})}var U=n(90);function W(){return Object(m.jsx)(s.b,{name:Object(m.jsx)(U.a,{fontSize:"body-s",href:"https://charlesstover.com/",target:"_blank",children:"Charles Stover"}),children:"an unofficial AWS console by $name"})}function J(){var e=Object(l.useRef)(null);return Object(l.useLayoutEffect)((function(){if(null===e.current)throw new Error("The header ref was not mounted.");e.current.firstChild.lastChild.style.setProperty("display","none")}),[]),e}function z(){var e={ref:J()}.ref;return Object(m.jsx)("div",{ref:e,children:Object(m.jsx)(x.a,{header:Object(m.jsx)(A.a,{description:Object(m.jsx)(W,{}),actions:Object(m.jsx)(R,{}),children:Object(m.jsx)(s.b,{children:"Open source AWS console"})})})})}var B=n(68),G=n(87);function $(){var e=Object(s.c)();return Object(l.useMemo)((function(){return[{href:"/",text:e("Home")||"...",type:"link"},{type:"divider"},{href:"/alarms",text:e("Alarms")||"...",type:"link"},{href:"/log-groups",text:e("Log groups")||"...",type:"link"},{href:"/roles",text:e("Roles")||"...",type:"link"},{href:"/users",text:e("Users")||"...",type:"link"}]}),[e])}var q=n(81),V=n.n(q);function Z(){var e=function(){var e=Object(y.b)();return{activeHref:e.activeHref,handleFollow:e.handleFollow,items:$()}}(),t=e.activeHref,n=e.handleFollow,o=e.items;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(B.a,{margin:"m",variant:"h2",children:Object(m.jsx)(s.b,{children:"Navigation"})}),Object(m.jsx)(G.a,{activeHref:t,className:V.a.sideNavigation,items:o,onFollow:n})]})}var Q=Object(l.memo)(Z),X=n(89);function Y(e){var t=e.children;return"undefined"===typeof t||0===t.length?null:Object(m.jsx)(X.a,{items:t})}var ee=n(48);function te(e){var t=e.Tools,n=e.breadcrumbs,o=e.breadcrumbsHide,a=void 0!==o&&o,c=e.children,i=e.contentType,r=e.navigationHide,u=e.notifications,d=e.onToolsChange,b=e.toolsHide,h=function(e){var t=e.controlledToolsOpen,n=e.onToolsChange,o=Object(s.c)(),a=Object(ee.a)({defaultNavigationOpen:!1,defaultToolsOpen:!1}),c=a.handleNavigationChange,i=a.handleToolsChange,r=a.navigationOpen,u=a.toolsOpen,d=Object(l.useRef)(null);return Object(l.useLayoutEffect)((function(){null!==d.current&&d.current.scrollIntoView()}),[]),{handleNavigationChange:c,navigationOpen:r,ref:d,ariaLabels:Object(l.useMemo)((function(){return{navigation:o("Navigation"),navigationToggle:o("Toggle navigation"),navigationClose:o("Close navigation"),notifications:o("Notifications"),tools:o("Tools"),toolsToggle:o("Toggle tools"),toolsClose:o("Close tools")}}),[o]),handleToolsChange:"function"===typeof n?n:i,toolsOpen:"boolean"===typeof t?t:u}}({controlledToolsOpen:e.toolsOpen,onToolsChange:d}),j=h.ariaLabels,f=h.handleNavigationChange,v=h.handleToolsChange,g=h.navigationOpen,y=h.ref,p=h.toolsOpen;return Object(m.jsx)("div",{ref:y,children:Object(m.jsx)(O.a,{ariaLabels:j,breadcrumbs:!a&&Object(m.jsx)(C,{children:n}),content:c,contentType:i,navigation:Object(m.jsx)(Q,{}),navigationOpen:g,navigationHide:r,notifications:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Y,{children:u}),Object(m.jsx)(z,{})]}),onNavigationChange:f,onToolsChange:v,tools:t&&Object(m.jsx)(t,{}),toolsHide:b,toolsOpen:p})})}function ne(e){var t=function(e){var t=e.onAuthentication,n=Object(s.c)(),o=Object(ee.b)(),a=o.checked,c=o.handleChange,i=Object(ee.c)(),r=i.handleChange,u=i.value,d=Object(ee.c)(),b=d.handleChange,h=d.value;return{accessKeyId:u,accessKeyIdAriaLabel:n("Access key ID"),handleAccessKeyIdChange:r,handleRememberChange:c,handleSecretAccessKeyChange:b,remember:a,secretAccessKey:h,secretAccessKeyAriaLabel:n("Secret access key"),handleSubmit:Object(l.useCallback)((function(){t(u,h,a)}),[u,t,a,h])}}({onAuthentication:e.onAuthentication}),n=t.accessKeyId,o=t.accessKeyIdAriaLabel,a=t.handleAccessKeyIdChange,c=t.handleRememberChange,i=t.handleSecretAccessKeyChange,r=t.handleSubmit,u=t.remember,O=t.secretAccessKey,v=t.secretAccessKeyAriaLabel;return Object(m.jsx)(te,{breadcrumbsHide:!0,contentType:"form",navigationHide:!0,toolsHide:!0,children:Object(m.jsxs)(f.a,{direction:"vertical",size:"l",children:[Object(m.jsx)(h.a,{label:Object(m.jsx)(s.b,{children:"Access key ID"}),children:Object(m.jsx)(j.a,{ariaLabel:o,onChange:a,value:n})}),Object(m.jsx)(h.a,{label:Object(m.jsx)(s.b,{children:"Secret access key"}),children:Object(m.jsx)(j.a,{ariaLabel:v,onChange:i,type:"password",value:O})}),Object(m.jsx)(b.a,{checked:u,onChange:c,children:Object(m.jsx)(s.b,{children:"Remember this device"})}),Object(m.jsx)(d.a,{onClick:r,variant:"primary",children:Object(m.jsx)(s.b,{children:"Authenticate"})})]})})}var oe=n(11);function ae(){return Object(m.jsx)(te,{breadcrumbsHide:!0,contentType:"form",toolsHide:!0,children:"Use the navigation bar to manage your resources."})}var ce=n(82),ie={"log-group":{list:{client:"CloudWatchLogs",label:"log-groups",method:"describeLogGroups",token:"nextToken"},view:{client:"CloudWatchLogs",method:"describeLogGroups",request:function(e){return{limit:1,logGroupNamePrefix:e}}}}};function re(){var e=function(e){var t,n=Object(ce.a)(Object.entries(ie));try{for(n.s();!(t=n.n()).done;){var o=Object(w.a)(t.value,2),a=o[0],c=o[1];if("/".concat(c.list.label)===e)return a}}catch(i){n.e(i)}finally{n.f()}throw new Error("x")}(Object(oe.g)().pathname);return Object(m.jsx)(te,{children:e})}var se=Object.entries(ie),le=function(e){var t=Object(w.a)(e,2),n=t[0],o=t[1];return Object(m.jsx)(oe.a,{component:re,path:"/".concat(o.list.label)},n)};function ue(){return Object(m.jsxs)(oe.c,{children:[se.map(le),Object(m.jsx)(oe.a,{component:ae})]})}var de=Object(l.createContext)(null);function be(e){var t=e.accessKeyId,n=e.onAuthentication,o=e.secretAccessKey;return"undefined"===typeof t||"undefined"===typeof o?Object(m.jsx)(ne,{onAuthentication:n}):Object(m.jsx)(de.Provider,{value:{accessKeyId:t,secretAccessKey:o},children:Object(m.jsx)(ue,{})})}var he=n(52),je=n(83),fe=Object(he.a)({},S.EnUs,je);n(148);function Oe(e){var t=e.accessKeyId,n=e.density,o=e.mode,a=e.motion,c=e.onAuthentication,i=e.onDensityChange,r=e.onModeChange,d=e.onMotionChange,b=e.secretAccessKey,h=function(){var e=Object(l.useState)(S.EnUs),t=Object(w.a)(e,2),n=t[0];return{handleLocaleChange:t[1],locale:n}}(),j=h.handleLocaleChange,f=h.locale;return Object(m.jsx)(l.StrictMode,{children:Object(m.jsx)(u.a,{children:Object(m.jsx)(k.Provider,{value:[n,i],children:Object(m.jsx)(s.a,{fallbackLocale:S.EnUs,locale:f,translations:fe,children:Object(m.jsx)(K.Provider,{value:[f,j],children:Object(m.jsx)(M.Provider,{value:[o,r],children:Object(m.jsx)(T.Provider,{value:[a,d],children:Object(m.jsx)(be,{accessKeyId:t,onAuthentication:c,secretAccessKey:b})})})})})})})})}var ve=document.getElementById("root");var ge=n(49);Object(ge.a)((function(e){console.log("Unknown web-vitals metric (CLS)",e)})),Object(ge.b)((function(e){var t=e.value;console.log("Performance paint timing: ".concat(t))})),Object(ge.c)((function(e){var t=e.value;console.log("Performance event timing: ".concat(t))})),Object(ge.d)((function(e){var t=e.value;console.log("Largest contentful paint: ".concat(t))})),Object(ge.e)((function(e){var t=e.value;console.log("Performance navigation timing: ".concat(t))}));var ye=i.a.Compact,me=i.b.Dark,pe=!0;new(function(){function e(t){var n=t.accessKeyId,o=t.defaultDensity,c=void 0===o?ye:o,i=t.defaultMode,r=void 0===i?me:i,s=t.defaultMotion,l=void 0===s?pe:s,u=t.secretAccessKey;Object(a.a)(this,e),this._accessKeyId=void 0,this._density=ye,this._mode=me,this._motion=pe,this._secretAccessKey=void 0,this._accessKeyId=n,this._secretAccessKey=u,this.render=this.render.bind(this),this.applyDensity(c),this.applyMode(r),this.applyMotion(l),this.render()}return Object(c.a)(e,[{key:"applyDensity",value:function(e){this._density=e,Object(i.c)(e,document.body)}},{key:"applyMode",value:function(e){this._mode=e,Object(i.d)(e,document.body)}},{key:"applyMotion",value:function(e){this._motion=e,Object(i.e)(!e)}},{key:"applyAuthentication",value:function(e,t,n){this._accessKeyId=e,this._secretAccessKey=t,n&&function(e){window.localStorage.setItem("authentication",JSON.stringify(e))}({accessKeyId:e,secretAccessKey:t})}},{key:"props",get:function(){return{accessKeyId:this._accessKeyId,density:this._density,mode:this._mode,motion:this._motion,onAuthentication:this.setAuthentication.bind(this),onDensityChange:this.setDensity.bind(this),onModeChange:this.setMode.bind(this),onMotionChange:this.setMotion.bind(this),secretAccessKey:this._secretAccessKey}}},{key:"setAuthentication",value:function(e,t,n){this.applyAuthentication(e,t,n),this.render()}},{key:"setDensity",value:function(e){this.applyDensity(e),this.render()}},{key:"setMode",value:function(e){this.applyMode(e),this.render()}},{key:"setMotion",value:function(e){this.applyMotion(e),this.render()}},{key:"render",value:function(){Object(r.render)(Object(m.jsx)(Oe,Object(o.a)({},this.props)),ve)}}]),e}())(Object(o.a)(Object(o.a)({},function(){var e=window.localStorage.getItem("authentication");if(null===e)return{};try{var t=JSON.parse(e);if(!function(e){return"object"===typeof e&&null!==e}(t))throw new Error("Expected a record.");if(!Object.prototype.hasOwnProperty.call(t,"accessKeyId"))throw new Error("Expected an access key ID.");if(!Object.prototype.hasOwnProperty.call(t,"secretAccessKey"))throw new Error("Expected a secret access key.");if("string"!==typeof t.accessKeyId)throw new Error("Expected access key ID to be a string.");if("string"!==typeof t.secretAccessKey)throw new Error("Expected secret access key to be a string.");return{accessKeyId:t.accessKeyId,secretAccessKey:t.secretAccessKey}}catch(n){return{}}}()),{},{defaultDensity:ye,defaultMode:me,defaultMotion:pe}))},81:function(e,t,n){e.exports={sideNavigation:"navigation_sideNavigation__tO8pZ"}},83:function(e){e.exports=JSON.parse('{"Access key ID":"Access key ID","Alarms":"Alarms","an unofficial AWS console by $name":"an unofficial AWS console by $name","Authenticate":"Authenticate","Breadcrumbs":"Breadcrumbs","Cancel":"Cancel","Close navigation":"Close navigation","Close tools":"Close tools","Comfortable":"Comfortable","Compact":"Compact","Confirm":"Confirm","Dark":"Dark","Density":"Density","English":"English","Home":"Home","Light":"Light","Locale":"Locale","Log groups":"Log groups","Mode":"Mode","Motion":"Motion","Navigation":"Navigation","Notifications":"Notifications","Open source AWS console":"Open source AWS console","Preferences":"Preferences","Remember this device":"Remember this device","Roles":"Roles","Secret access key":"Secret access key","Toggle navigation":"Toggle navigation","Toggle tools":"Toggle tools","Tools":"Tools","Users":"Users"}')}},[[149,1,2]]]);
//# sourceMappingURL=main.b7d36ea8.chunk.js.map