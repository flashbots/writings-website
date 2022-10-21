"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[5289],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(r),p=o,d=u["".concat(l,".").concat(p)]||u[p]||m[p]||a;return r?n.createElement(d,i(i({ref:t},h),{},{components:r})):n.createElement(d,i({ref:t},h))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3295:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return h},toc:function(){return m},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={slug:"flashbots-reorgs",title:"Flashbots on Reorgs",authors:["phil"],tags:["flashbots","reorgs"],image:"/img/on-regorgs-1.jpeg",hide_table_of_contents:!1},l=void 0,c={permalink:"/flashbots-reorgs",source:"@site/content/2021-07-16-flashbots-reorgs.mdx",title:"Flashbots on Reorgs",description:"There has been a lot of discussion in the Ethereum community recently about chain-reorgs-as-a-service, and how it relates to MEV, the ETH2 merge, and other important ecosystem developments.",date:"2021-07-16T00:00:00.000Z",formattedDate:"July 16, 2021",tags:[{label:"flashbots",permalink:"/tags/flashbots"},{label:"reorgs",permalink:"/tags/reorgs"}],readingTime:7.32,truncated:!0,authors:[{name:"Phil Daian",title:"Research @Flashbots",url:"https://pdaian.com/",imageURL:"https://pbs.twimg.com/profile_images/968496806639398912/Th087Dhz_400x400.jpg",key:"phil"}],prevItem:{title:"MEV and EIP-1559",permalink:"/mev-1559"},nextItem:{title:"Flashbots Transparency Report \u2014 May & June 2021",permalink:"/transparency-may-june"}},h={authorsImageUrls:[void 0]},m=[{value:"Reorgs are Negative-Sum",id:"reorgs-are-negative-sum",children:[]},{value:"Reorgs are Easily Mitigated",id:"reorgs-are-easily-mitigated",children:[]},{value:"Flashbots\u2019 Commitments",id:"flashbots-commitments",children:[]},{value:"Flashbots as an Anti-Fragile Research Collective",id:"flashbots-as-an-anti-fragile-research-collective",children:[]},{value:"Get involved",id:"get-involved",children:[]}],u={toc:m};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There has been a lot of discussion in the Ethereum community recently about chain-reorgs-as-a-service, and how it relates to MEV, the ETH2 merge, and other important ecosystem developments.\nIn this post, we will provide a high-level overview of why Flashbots does not support reorg games, why we believe reorg games are a net-negative for all actors in the space (including miners!), and how the unique nature of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flashbots/pm"},"the Flashbots organization")," is set up to respond to this and future political and technical challenges."),(0,a.kt)("h2",{id:"reorgs-are-negative-sum"},"Reorgs are Negative-Sum"),(0,a.kt)("p",null,"To put it bluntly, we believe that miner reorg games degenerate into a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tragedy_of_the_commons"},"negative-sum unstable game")," ",(0,a.kt)("strong",{parentName:"p"},"that harms all actors in the cryptocurrency space.")," Here is a cursory and incomplete list of reasons why:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Erosion of settlement assurances:")," In the presence of reorgs, more confirmations are required for a given blockchain transaction, meaning the Ethereum network becomes ",(0,a.kt)("a",{parentName:"p",href:"https://economics.princeton.edu/working-papers/on-the-instability-of-bitcoin-without-the-block-reward/"},"less secure and less stable against attackers.")," This harms all users, developers, and miners who use the network to transfer value.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Systemic effects:")," Reorg incidents also have the potential to lower cryptocurrency prices, either through attacks or instability in external/centralized infrastructure or through bad PR. This can include all correlated-price cryptocurrencies, not just the blockchain under attack.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Less revenue for miners:")," In general, miners are believed to be actors paid by blockchains for network security. By actively attacking networks for short-term gain, miners risk accelerating transitions to systems that reduce their influence. For example, other MEV-carrying chains may also be incentivized to remove miners in the aftermath of an attack on Ethereum.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Flashbots harm:")," We believe a two-sided MEV marketplace is key to democratizing and illuminating the world of MEV. Reorgs harm Flashbots bots and miners by allowing searchers to ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/bertcmiller/status/1382673587715342339"},"have transactions or bundles tampered with, reordered, censored, or potentially stolen.")," In doing this, reorgs limit long-term miner revenue by reducing the efficiency of the extraction engine responsible for generating them MEV. We believe in long-term, positive-EV games at Flashbots. Our current searcher and miner split allows for a democratic, independent, permissionless ecosystem for MEV, and it is these values that we focus on protecting.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Game-theoretic instability:")," The game theory behind reorgs is completely unanalyzed. Consider for example a subset of the reorg meta-game, selfish mining. To understand how to optimize reorgs, one must understand how to optimally selfishly-mine with static rewards. Even this is an unsolved problem! ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1912.01798"},"Recent research")," suggests that ",(0,a.kt)("strong",{parentName:"p"},"selfishly mining turns from profitable to unprofitable when most miners do it"),", and the same is almost certainly true for all miners reorging. So, any miner trying this strategy will at best be profitable only until others switch."))),(0,a.kt)("p",null,"So, we believe reorgs harm everyone, including the owners of the hardware whose support is necessary to pull them off. In general, we hope all this discussion of reorgs amounts to nothing more than some code and discussion that contributes to the hardening of our systems today. Nonetheless, we welcome the community to take this opportunity to think critically, and to join us in defending the long-term and value-creating games that arise from a stable and functional cryptocurrency ecosystem."),(0,a.kt)("h2",{id:"reorgs-are-easily-mitigated"},"Reorgs are Easily Mitigated"),(0,a.kt)("p",null,"There are a number of protocol-level, social, and technical mitigations the community could deploy that would hamper such an attack, and highly increase the probability that it equates to burning money. Subjective fork-choice rules, more complicated rules that disincentivize new forks, exchange-level mitigations to pause deposits in the event of long reorgs, and more are obvious band-aids that call into question the profitability of reorgs."),(0,a.kt)("p",null,"Moreover, the ETH community has an obvious mitigation strategy: accelerating the merge. If a rushed deployment of proof-of-stake is forced to ensure system stability in an environment of reorgs, all miners in the system, including the miners using hardware to try to pull off a reorg attack, will lose money, as they will lose months and months of revenue while the merge is being tested for a safe deployment."),(0,a.kt)("p",null,"We believe the existence of this \u201cnuclear option/mutually-assured-destruction\u201d for miners is the most powerful bulwark against reorgs in the ETH community today. We believe forcing the community\u2019s hand and accelerating the merge benefits nobody, least of all miners."),(0,a.kt)("h2",{id:"flashbots-commitments"},"Flashbots\u2019 Commitments"),(0,a.kt)("p",null,"We once again wish to emphasize that Flashbots was formed to democratize MEV and ",(0,a.kt)("strong",{parentName:"p"},"mitigate negative externalities for Ethereum and its users.")," ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/flashbots/frontrunning-the-mev-crisis-40629a613752"},"Our goals require aligning the incentives of every single actor in the cryptocurrency ecosystem"),", and building a sustainable long-term future for programmatic finance that survives post-merge. This requires a sustainable incentive structure for users, dapp developers, protocol developers, miners, arbitrageurs and bot operators, and researchers."),(0,a.kt)("p",null,"To protect these norms, and in the spirit of our mission statement, we commit to the following public action in the near to medium-term future:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Product development for stability:")," We will research the possibility of releasing products in complement to or in conjunction with MEV-Geth that are aimed at increasing network stability. This includes researching and advocating for fork-choice rules that disincentivize or penalize reorgs, collaborating with client devs and researchers on incentives, and implementing changes to marketplace-design that align existing participants with the incentive to protect a democratic marketplace for MEV long-term.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Protection of the two-sided marketplace:")," Flashbots\u2019 market is key to the democratization of MEV. We commit to ensure that searchers and miners who are acting honestly in the system are treated and compensated fairly. While we cannot guarantee what execution will look like due to the decentralized nature of our system, we can commit to spending our resources on technical and political changes that ensure and protect the two sides of the MEV market.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Illuminate the dark forest:")," We commit to ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.flashbots.net/"},"providing data")," on reorgs to the entire community. Open questions of whether reorgs are already happening and whether they are benign or malicious remain unanswered, and we commit to developing tools to answer these important questions. We also commit to investigating the effects of reorgs on miners, searchers, users, and other actors in the ecosystem, quantifying any possible harms to both the Flashbots marketplace and general Ethereum users.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Research the future:")," It is believed to be the case that the upcoming ETH2 merge is a clear mitigation for reorg attacks due to the attestor-based fork-choice rule. We commit to investigating this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-research/blob/main/FRPs/FRP-15.md"},"further"),", and to publishing our position on definitive answers to the community on how much of a risk reorgs remain after the transition, and the amount of coordination required to pull off such an attack."))),(0,a.kt)("p",null,"We commit to working towards ecosystem stability regardless of our profit or gain as an entity, in any event, indefinitely into the future. We are not interested in destabilizing Ethereum, and will not allow our profit incentives to change this calculation, ever."),(0,a.kt)("h2",{id:"flashbots-as-an-anti-fragile-research-collective"},"Flashbots as an Anti-Fragile Research Collective"),(0,a.kt)("p",null,"Some additional community confusion centers around the notion that Flashbots supports reorgs. While there may have been contributors and users in the Flashbots ecosystem who take such positions, this is not the position of Flashbots."),(0,a.kt)("p",null,"As a collective, we also believe in individual freedom and self-expression. Many people in the Flashbots community are not part of Flashbots the organization, and many people who have a connection to Flashbots the organization also have projects and work outside of Flashbots."),(0,a.kt)("p",null,"We believe that shackles on talent are not appropriate for open source development, particularly in adversarial environments. We also encourage our members to exit the Flashbots collective to pursue non-aligned or conflicting work when appropriate, and our organization is structured to facilitate such easy exits."),(0,a.kt)("p",null,"As stated, we believe the development of reorg clients does not currently have a place in our organization. There are no Flashbots-sanctioned reorg clients, and we have not and have no plans to allocate resources to the development of such clients. We have and will continue to encourage any Flashbots members looking to develop such clients to leverage our easy-exit mechanism."),(0,a.kt)("p",null,"Note that running unsanctioned modifications to or forks to Flashbots code is risky, as Flashbots expends considerable engineering resources to ensure the stability and safety of its modifications to consensus clients. We cannot ever recommend modifying or running any modifications of Flashbots code without appropriate levels of validation."),(0,a.kt)("p",null,"Because of this diverse and ever-changing nature of our collective, we encourage all members of the community to look to our official accounts on Medium, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flashbots/"},"Github"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://hackmd.io/@flashbots"},"HackMD")," for the latest work that represents the position of Flashbots, the research collective."),(0,a.kt)("h2",{id:"get-involved"},"Get involved"),(0,a.kt)("p",null,"At Flashbots, we research and build systems around MEV, and we would love to collaborate with you. We are a distributed organization with the principles of a ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=T0fAznO1wA8"},"pirate hacker collective"),", and have several ",(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/flashbots/Flashbots-Job-Board-94d53cb01ef04a9484711dacf18739e3"},"open positions"),". We also issue grants to external researchers doing work aligned with ours, please find out more in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-research"},"Research repository"),", or join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/7hvTycdNcK"},"Discord"),"!"))}p.isMDXComponent=!0}}]);