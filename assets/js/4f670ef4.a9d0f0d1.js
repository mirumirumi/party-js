(self.webpackChunkparty_js_docs=self.webpackChunkparty_js_docs||[]).push([[729],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||p;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<p;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7829:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var r=n(2122),a=n(9756),p=(n(7294),n(3905)),i={id:"particles_options.renderoptions",title:"Interface: RenderOptions",sidebar_label:"RenderOptions",custom_edit_url:null},o={unversionedId:"api/interfaces/particles_options.renderoptions",id:"api/interfaces/particles_options.renderoptions",isDocsHomePage:!1,title:"Interface: RenderOptions",description:"particles/options.RenderOptions",source:"@site/docs/api/interfaces/particles_options.renderoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/particles_options.renderoptions",permalink:"/docs/api/interfaces/particles_options.renderoptions",editUrl:null,version:"current",sidebar_label:"RenderOptions",frontMatter:{id:"particles_options.renderoptions",title:"Interface: RenderOptions",sidebar_label:"RenderOptions",custom_edit_url:null},sidebar:"api",previous:{title:"Interface: EmitterOptions",permalink:"/docs/api/interfaces/particles_options.emitteroptions"}},l=[{value:"Properties",id:"properties",children:[{value:"applyColor",id:"applycolor",children:[]},{value:"applyLighting",id:"applylighting",children:[]},{value:"applyOpacity",id:"applyopacity",children:[]},{value:"applyTransform",id:"applytransform",children:[]},{value:"shapeFactory",id:"shapefactory",children:[]}]}],s={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/particles_options"},"particles/options"),".RenderOptions"),(0,p.kt)("p",null,"Holds the options used to configure the renderer for a particle system."),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"applycolor"},"applyColor"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"applyColor"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/particles_options#applyfunction"},(0,p.kt)("inlineCode",{parentName:"a"},"ApplyFunction")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/components.color"},(0,p.kt)("inlineCode",{parentName:"a"},"Color")),">"),(0,p.kt)("p",null,"The delegate used to apply a certain color to the particle's HTMLElement."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"defaultvalue")),' Applies the specified color to the element\'s "background" property.'),(0,p.kt)("h4",{id:"defined-in"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/5a0e675/src/particles/options/renderOptions.ts#L36"},"particles/options/renderOptions.ts:36")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"applylighting"},"applyLighting"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"applyLighting"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/particles_options#applyfunction"},(0,p.kt)("inlineCode",{parentName:"a"},"ApplyFunction")),"<",(0,p.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,p.kt)("p",null,"The delegate used to apply a certain degree of lighting to the particle's HTMLElement."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," Applies the specified lighting to the element as a brightness filter."),(0,p.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/5a0e675/src/particles/options/renderOptions.ts#L46"},"particles/options/renderOptions.ts:46")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"applyopacity"},"applyOpacity"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"applyOpacity"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/particles_options#applyfunction"},(0,p.kt)("inlineCode",{parentName:"a"},"ApplyFunction")),"<",(0,p.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,p.kt)("p",null,"The delegate used to apply a certain degree of opacity to the particle's HTMLElement."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"defaultvalue")),' Applies the specified opacity to the element\'s "opacity" property.'),(0,p.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/5a0e675/src/particles/options/renderOptions.ts#L41"},"particles/options/renderOptions.ts:41")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"applytransform"},"applyTransform"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"applyTransform"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/particles_options#applyfunction"},(0,p.kt)("inlineCode",{parentName:"a"},"ApplyFunction")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/index.particle"},(0,p.kt)("inlineCode",{parentName:"a"},"Particle")),">"),(0,p.kt)("p",null,"The delegate used to apply a certain transform to the particle's HTMLElement."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," Applies the specified transform to the element as a 3D CSS transform."),(0,p.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/5a0e675/src/particles/options/renderOptions.ts#L51"},"particles/options/renderOptions.ts:51")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"shapefactory"},"shapeFactory"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"shapeFactory"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/index.variation#variation"},(0,p.kt)("inlineCode",{parentName:"a"},"Variation")),"<",(0,p.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"HTMLElement"),">"),(0,p.kt)("p",null,'The factory used to determine the element (or "shape") that a particle will be rendered as.\nThis variation can also return a resolve-able string.'),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"remarks")),"\nDepending on the type of value that is returned from the factory, additional\nprocessing has to be done."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"strings: The ",(0,p.kt)("inlineCode",{parentName:"li"},"party.resolvableShapes")," lookup is used to resolve the string to an actual\nHTMLElement, before following the same procedure as if an HTMLElement would have been passed."),(0,p.kt)("li",{parentName:"ul"},"HTMLElements: The returned element is deep cloned and used to represent the particle in the document.")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," Creates a square-shaped ",(0,p.kt)("inlineCode",{parentName:"p"},"<div>")," element with a size of 10px."),(0,p.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/5a0e675/src/particles/options/renderOptions.ts#L30"},"particles/options/renderOptions.ts:30")))}c.isMDXComponent=!0}}]);