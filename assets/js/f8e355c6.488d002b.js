(self.webpackChunkparty_js_docs=self.webpackChunkparty_js_docs||[]).push([[985],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5269:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={title:"Utilities"},l={unversionedId:"ref/utilities",id:"ref/utilities",isDocsHomePage:!1,title:"Utilities",description:"The library provides various utility methods to build it's features on.",source:"@site/docs/ref/utilities.md",sourceDirName:"ref",slug:"/ref/utilities",permalink:"/docs/ref/utilities",editUrl:"https://github.com/yiliansource/party-js/edit/main/docs/docs/ref/utilities.md",version:"current",frontMatter:{title:"Utilities"},sidebar:"docs",previous:{title:"Components",permalink:"/docs/ref/components"},next:{title:"Using Templates",permalink:"/docs/guides/using-templates"}},s=[{value:"Math",id:"math",children:[]},{value:"Randomization",id:"randomization",children:[]},{value:"Others",id:"others",children:[{value:"Despawning Rules",id:"despawning-rules",children:[]},{value:"Methods",id:"methods",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The library provides various utility methods to build it's features on."),(0,i.kt)("h2",{id:"math"},"Math"),(0,i.kt)("p",null,"Since there is a lot of calculation done under the hood, the library defines required mathematical operations that are commonly used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"party.math.deg2rad; // \u03c0 / 180\nparty.math.rad2deg; // 180 / \u03c0\nparty.math.epsilon; // a small value to compare against\n\nparty.math.lerp(a, b, t); // linear interpolation from a to b by t\nparty.math.slerp(a, b, t); // lerp with easing applied\nparty.math.invlerp(a, b, v); // inverse lerp\nparty.math.clamp(value, min, max); // clamps the specified value between min and max\nparty.math.approximately(a, b); // a \u2248 b\n")),(0,i.kt)("h2",{id:"randomization"},"Randomization"),(0,i.kt)("p",null,'Common "random" operations in the library as helper methods.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"party.random.randomRange(min, max); // random number from min to max\nparty.random.pick(array); // random element in array\nparty.random.randomUnitVector(); // random 3d vector\nparty.random.randomInsideRect(rect); // random point inside a given rectangle\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The actual randomization implementation is still up to the underlying JavaScript implementation."))),(0,i.kt)("h2",{id:"others"},"Others"),(0,i.kt)("h3",{id:"despawning-rules"},"Despawning Rules"),(0,i.kt)("p",null,"To allow variety in the way that particles disappear, the particle has the default despawning rules saved in a lookup under ",(0,i.kt)("inlineCode",{parentName:"p"},"party.despawningRules"),". These are functions that take a particle as a parameter, and check whether the particle is ready to be despawned. By default, these rules include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lifetime"),": The particle is despawned once it's lifetime is over."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bounds"),": The particle is despawned once it's position goes below the lower edge of the document.")),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// overrides the defaults specified in A with the partial object B.\nparty.util.overrideDefaults(a, b);\n// converts euler angles (in degrees) to a normal vector.\nparty.util.rotationToNormal(rotation);\n")))}c.isMDXComponent=!0}}]);