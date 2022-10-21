"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[5125],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,h=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},130:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={slug:"formalization-mev",title:"On the Formalization of MEV",authors:["alejo"],tags:["research"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},c=void 0,s={permalink:"/formalization-mev",source:"@site/content/2021-12-04-on-the-formalization-of-mev.mdx",title:"On the Formalization of MEV",description:"Thanks to Phil Daian, Alex Obadia, and Mahimna Kelkar for plenty of discussions on the topic.",date:"2021-12-04T00:00:00.000Z",formattedDate:"December 4, 2021",tags:[{label:"research",permalink:"/tags/research"}],readingTime:12.335,truncated:!0,authors:[{name:"Alejo Salles",title:"Research @Flashbots",url:"https://twitter.com/fiiiu_",imageURL:"https://pbs.twimg.com/profile_images/1005592876930224128/JRAMFVUq_400x400.jpg",key:"alejo"}],prevItem:{title:"Why Building the Most Profitable Block is Important",permalink:"/on-the-most-profitable-block"},nextItem:{title:"Unity is Strength - A Formalization of Cross-Domain Maximal Extractable Value",permalink:"/cross-domain-mev"}},p={authorsImageUrls:[void 0]},u=[],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Thanks to Phil Daian, Alex Obadia, and Mahimna Kelkar for plenty of discussions on the topic.")),(0,o.kt)("p",null,"Since its introduction in the ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1904.05234"},"Flashboys 2.0 paper")," of 2019 by Daian ",(0,o.kt)("em",{parentName:"p"},"et al."),", a lot has been said about ",(0,o.kt)("em",{parentName:"p"},"Miner")," (now ",(0,o.kt)("em",{parentName:"p"},"Maximal"),") ",(0,o.kt)("em",{parentName:"p"},"Extractable Value"),", or MEV. In particular, the launch of the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/overview"},"Flashbots Auction")," propelled what is today a billion dollar economy across various blockchains and centralized exchanges. From ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/bertcmiller/status/1402665992422047747?s=20"},"thrilling Twitter threads")," to academic research papers, the MEV phenomenon has captured a central spot in the cryptocurrency discourse. Oddly, however, there is no agreed upon formal definition of MEV."))}f.isMDXComponent=!0}}]);