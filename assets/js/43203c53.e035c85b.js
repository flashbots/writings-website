"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[9903],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,h=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4990:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={slug:"mev-boost",title:"MEV-Boost -- Merge ready Flashbots Architecture",authors:["thegostep"],tags:["eth2","mev-boost"],image:"/img/transparency-january-1.jpeg",hide_table_of_contents:!1},c=void 0,l={permalink:"/mev-boost",source:"@site/content/2021-11-03-mev-boost.mdx",title:"MEV-Boost -- Merge ready Flashbots Architecture",description:"This document outlines the design for a marketplace for block construction (often referred to as block proposer / block builder separation or PBS) compatible with the upcoming Ethereum merge fork. This trust based solution closely resembles the current Flashbots auction design with modifications to enable solo staker participation without introducing changes to Ethereum consensus. This solution aims to bridge the gap to a permissionless PBS design which should be strongly considered for the cleanup fork in order to improve decentralization.",date:"2021-11-03T00:00:00.000Z",formattedDate:"November 3, 2021",tags:[{label:"eth2",permalink:"/tags/eth-2"},{label:"mev-boost",permalink:"/tags/mev-boost"}],readingTime:.61,truncated:!0,authors:[{name:"Stephane Gosselin",title:"Architect @Flashbots",url:"https://twitter.com/thegostep",imageURL:"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg",key:"thegostep"}],prevItem:{title:"Ken Griffin and the MEV dystopia",permalink:"/ken-griffin-mev"},nextItem:{title:"Announcing Flashbots Protect",permalink:"/announcing-protect"}},u={authorsImageUrls:[void 0]},p=[],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document outlines the design for a marketplace for block construction (often referred to as block proposer / block builder separation or PBS) compatible with the upcoming Ethereum merge fork. This trust based solution closely resembles the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/overview"},"current Flashbots auction design")," with modifications to enable solo staker participation without introducing changes to Ethereum consensus. This solution aims to bridge the gap to a ",(0,i.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/proposer-block-builder-separation-friendly-fee-market-designs/9725"},"permissionless PBS design")," which should be strongly considered for the cleanup fork in order to improve decentralization."))}f.isMDXComponent=!0}}]);