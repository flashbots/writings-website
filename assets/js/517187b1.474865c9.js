"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[874],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,f=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4734:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return m},toc:function(){return u},default:function(){return h}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={slug:"cross-domain-mev",title:"Unity is Strength - A Formalization of Cross-Domain Maximal Extractable Value",authors:["obadiaa","alejo","lakshman","tarun","phil","vaibhav"],tags:["research"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/cross-domain-mev",source:"@site/content/2021-12-03-cross-domain-mev.mdx",title:"Unity is Strength - A Formalization of Cross-Domain Maximal Extractable Value",description:"The multi-chain future is upon us. Modular architectures are coming to maturity across the ecosystem",date:"2021-12-03T00:00:00.000Z",formattedDate:"December 3, 2021",tags:[{label:"research",permalink:"/tags/research"}],readingTime:1.25,truncated:!0,authors:[{name:"Alex Obadia",title:"Research @Flashbots",url:"https://twitter.com/ObadiaAlex",imageURL:"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg",key:"obadiaa"},{name:"Alejo Salles",title:"Research @Flashbots",url:"https://twitter.com/fiiiu_",imageURL:"https://pbs.twimg.com/profile_images/1005592876930224128/JRAMFVUq_400x400.jpg",key:"alejo"},{name:"Lakshman Sankar",title:"Researcher",url:"https://twitter.com/lakshmansankar",imageURL:"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg",key:"lakshman"},{name:"Tarun Chitra",title:"Gauntlet Network",url:"https://twitter.com/tarunchitra",imageURL:"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg",key:"tarun"},{name:"Phil Daian",title:"Research @Flashbots",url:"https://pdaian.com/",imageURL:"https://pbs.twimg.com/profile_images/968496806639398912/Th087Dhz_400x400.jpg",key:"phil"},{name:"Vaibhav Chellani",title:"Movr",url:"https://twitter.com/vaibhavchellani",imageURL:"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg",key:"vaibhav"}],prevItem:{title:"On the Formalization of MEV",permalink:"/formalization-mev"},nextItem:{title:"Announcing the Flashbots Eth2 Working Group",permalink:"/announcing-eth2-working-group"}},m={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0,void 0]},u=[],p={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The multi-chain future is upon us. Modular architectures are coming to maturity across the ecosystem\nto scale bandwidth and throughput of cryptocurrency. One example of such is the Ethereum modular\narchitecture, with its beacon chain, its execution chain, its Layer 2s, and soon its shards. These can all\nbe thought as separate blockchains, heavily inter-connected with one another, and together forming an\necosystem."))}h.isMDXComponent=!0}}]);