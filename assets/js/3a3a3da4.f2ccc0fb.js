(self.webpackChunkparty_js_docs=self.webpackChunkparty_js_docs||[]).push([[1361],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return c},kt:function(){return d}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(i),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return i?n.createElement(k,o(o({ref:t},c),{},{components:i})):n.createElement(k,o({ref:t},c))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},7838:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var n=i(2122),a=i(9756),r=(i(7294),i(3905)),o={id:"particles_options.emissionoptions",title:"Interface: EmissionOptions",sidebar_label:"EmissionOptions",custom_edit_url:null},s={unversionedId:"api/interfaces/particles_options.emissionoptions",id:"api/interfaces/particles_options.emissionoptions",isDocsHomePage:!1,title:"Interface: EmissionOptions",description:"particles/options.EmissionOptions",source:"@site/docs/api/interfaces/particles_options.emissionoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/particles_options.emissionoptions",permalink:"/docs/api/interfaces/particles_options.emissionoptions",editUrl:null,version:"current",sidebar_label:"EmissionOptions",frontMatter:{id:"particles_options.emissionoptions",title:"Interface: EmissionOptions",sidebar_label:"EmissionOptions",custom_edit_url:null},sidebar:"api",previous:{title:"Interface: Burst",permalink:"/docs/api/interfaces/particles_options.burst"},next:{title:"Interface: EmitterOptions",permalink:"/docs/api/interfaces/particles_options.emitteroptions"}},p=[{value:"Properties",id:"properties",children:[{value:"angle",id:"angle",children:[]},{value:"bursts",id:"bursts",children:[]},{value:"initialColor",id:"initialcolor",children:[]},{value:"initialLifetime",id:"initiallifetime",children:[]},{value:"initialRotation",id:"initialrotation",children:[]},{value:"initialSize",id:"initialsize",children:[]},{value:"initialSpeed",id:"initialspeed",children:[]},{value:"rate",id:"rate",children:[]},{value:"sourceSampler",id:"sourcesampler",children:[]}]}],l={toc:p};function c(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules/particles_options"},"particles/options"),".EmissionOptions"),(0,r.kt)("p",null,"Holds a set of options used to configure the way particles are emitted in."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"angle"},"angle"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"angle"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules/index.variation#variation"},(0,r.kt)("inlineCode",{parentName:"a"},"Variation")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,r.kt)("p",null,"The angle that particles will be emitted at, in degrees. This is used to, for example,\ngive the particles a particular amount of initial force in a direction."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," 0"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/5a0e675/src/particles/options/emissionOptions.ts#L34"},"particles/options/emissionOptions.ts:34")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"bursts"},"bursts"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"bursts"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/particles_options.burst"},(0,r.kt)("inlineCode",{parentName:"a"},"Burst")),"[]"),(0,r.kt)("p",null,"The bursts that particles should be bulk-emitted at."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," An empty array."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/5a0e675/src/particles/options/emissionOptions.ts#L20"},"particles/options/emissionOptions.ts:20")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initialcolor"},"initialColor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"initialColor"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules/index.variation#variation"},(0,r.kt)("inlineCode",{parentName:"a"},"Variation")),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.color"},(0,r.kt)("inlineCode",{parentName:"a"},"Color")),">"),(0,r.kt)("p",null,"The variable, initial color of the emitted particles."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"Color.white")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/5a0e675/src/particles/options/emissionOptions.ts#L65"},"particles/options/emissionOptions.ts:65")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initiallifetime"},"initialLifetime"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"initialLifetime"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules/index.variation#variation"},(0,r.kt)("inlineCode",{parentName:"a"},"Variation")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,r.kt)("p",null,"The variable, initial lifetime of the emitted particle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," 5"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/5a0e675/src/particles/options/emissionOptions.ts#L41"},"particles/options/emissionOptions.ts:41")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initialrotation"},"initialRotation"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"initialRotation"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules/index.variation#variation"},(0,r.kt)("inlineCode",{parentName:"a"},"Variation")),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.vector"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector")),">"),(0,r.kt)("p",null,"The variable, initial rotation of the emitted particles, as euler angles."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"Vector.zero")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/5a0e675/src/particles/options/emissionOptions.ts#L59"},"particles/options/emissionOptions.ts:59")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initialsize"},"initialSize"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"initialSize"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules/index.variation#variation"},(0,r.kt)("inlineCode",{parentName:"a"},"Variation")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,r.kt)("p",null,"The variable, initial size of the emitted particles."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," 1"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/5a0e675/src/particles/options/emissionOptions.ts#L53"},"particles/options/emissionOptions.ts:53")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initialspeed"},"initialSpeed"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"initialSpeed"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules/index.variation#variation"},(0,r.kt)("inlineCode",{parentName:"a"},"Variation")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,r.kt)("p",null,"The variable, initial speed of the emitted particles."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," 5"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/5a0e675/src/particles/options/emissionOptions.ts#L47"},"particles/options/emissionOptions.ts:47")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rate"},"rate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"rate"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The number of particles that should be emitted per second."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," 10"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/5a0e675/src/particles/options/emissionOptions.ts#L14"},"particles/options/emissionOptions.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sourcesampler"},"sourceSampler"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"sourceSampler"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules/index.sources#sourcesampler"},(0,r.kt)("inlineCode",{parentName:"a"},"SourceSampler"))),(0,r.kt)("p",null,"The sampler used to generate particle spawn positions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," A sampler that emits particles from (0, 0)."),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/5a0e675/src/particles/options/emissionOptions.ts#L27"},"particles/options/emissionOptions.ts:27")))}c.isMDXComponent=!0}}]);