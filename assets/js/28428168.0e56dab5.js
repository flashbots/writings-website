"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[4352],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4393:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={slug:"fcfs-and-front-running",title:"Can First Come First Served-Based Transaction Ordering Prevent Front-Running?",authors:["ra"],tags:["research"],image:"/img/fcfs-and-front-running.png",hide_table_of_contents:!1},c="Can First Come First Served-Based Transaction Ordering Prevent Front-Running?",u={permalink:"/fcfs-and-front-running",source:"@site/content/2022-09-08-fcfs-and-front-running.mdx",title:"Can First Come First Served-Based Transaction Ordering Prevent Front-Running?",description:"Recently, consensus protocols have been proposed that aim to include transactions on a First Come First Served (FCFS) basis. In this article, we explore whether such FCFS-based ordering of transactions in consensus protocols can prevent front-running in permissionless blockchains.",date:"2022-09-08T00:00:00.000Z",formattedDate:"September 8, 2022",tags:[{label:"research",permalink:"/tags/research"}],readingTime:15.435,truncated:!0,authors:[{name:"Robert Annessi",title:"Research @Flashbots",url:"https://annessi.net/",key:"ra"}],prevItem:{title:"order flow, auctions and centralisation I - a warning",permalink:"/order-flow-auctions-and-centralisation"},nextItem:{title:"Searching Post-Merge",permalink:"/searching-post-merge"}},l={authorsImageUrls:[void 0]},p=[],f={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Recently, consensus protocols have been proposed that aim to include transactions on a First Come First Served (FCFS) basis. In this article, we explore whether such FCFS-based ordering of transactions in consensus protocols can prevent front-running in permissionless blockchains."))}d.isMDXComponent=!0}}]);