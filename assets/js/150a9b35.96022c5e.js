"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[8795],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return d}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=h(o),d=r,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||a;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var h=2;h<a;h++)i[h]=o[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},6962:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},assets:function(){return u},toc:function(){return p},default:function(){return d}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],s={slug:"announcing-eth2-working-group",title:"Announcing the Flashbots Eth2 Working Group",authors:["thegostep"],tags:["eth2"],image:"/img/transparency-january-1.jpeg",hide_table_of_contents:!1},l=void 0,h={permalink:"/writings/announcing-eth2-working-group",source:"@site/writings/2021-11-30-announcing-eth2-working-group.mdx",title:"Announcing the Flashbots Eth2 Working Group",description:"Flashbots has been critical to leveling the MEV playing field on Proof-of-Work (PoW) Ethereum (eth1), and aims to bring the same benefits to Proof-of-Stake (PoS) Ethereum (eth2). The adoption of Flashbots involves two distinct parties, block producers, and MEV searchers. In Ethereum, over 90% of miners have adopted Flashbots; however, as we approach eth2 and the transition to PoS, adoption will reset to 0. As such, for the health of the Ethereum ecosystem, it is imperative that validators also adopt an MEV solution for Ethereum post-merge. To assist in this adoption, we are pleased to announce the Flashbots Eth2 Working Group.",date:"2021-11-30T00:00:00.000Z",formattedDate:"November 30, 2021",tags:[{label:"eth2",permalink:"/writings/tags/eth-2"}],readingTime:5.905,truncated:!0,authors:[{name:"Stephane Gosselin",title:"Architect @Flashbots",url:"https://twitter.com/thegostep",imageURL:"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg",key:"thegostep"}],prevItem:{title:"Why Building the Most Profitable Block is Important",permalink:"/writings/on-the-most-profitable-block"},nextItem:{title:"Ken Griffin and the MEV dystopia",permalink:"/writings/ken-griffin-mev"}},u={authorsImageUrls:[void 0]},p=[{value:"A MEV solution is necessary on Ethereum post-merge",id:"a-mev-solution-is-necessary-on-ethereum-post-merge",children:[]},{value:"The goal of the Working Group",id:"the-goal-of-the-working-group",children:[]},{value:"The makeup of the Working Group",id:"the-makeup-of-the-working-group",children:[]},{value:"How does Flashbots benefit validators?",id:"how-does-flashbots-benefit-validators",children:[]},{value:"How does Flashbots benefit stakers?",id:"how-does-flashbots-benefit-stakers",children:[]},{value:"What does this mean for solo stakers?",id:"what-does-this-mean-for-solo-stakers",children:[]},{value:"Working Group Founding Members",id:"working-group-founding-members",children:[]},{value:"What is next?",id:"what-is-next",children:[]}],c={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Flashbots has been critical to leveling the MEV playing field on Proof-of-Work (PoW) Ethereum (eth1), and aims to bring the same benefits to Proof-of-Stake (PoS) Ethereum (eth2). The adoption of Flashbots involves two distinct parties, block producers, and MEV searchers. In Ethereum, over 90% of miners have adopted Flashbots; however, as we approach eth2 and the transition to PoS, adoption will reset to 0. As such, for the health of the Ethereum ecosystem, it is imperative that validators also adopt an MEV solution for Ethereum post-merge. To assist in this adoption, we are pleased to announce the Flashbots Eth2 Working Group."),(0,a.kt)("p",null,"Flashbots is a research and development organization working to mitigate the negative externalities of MEV and to avoid the existential risks MEV could cause to state-rich blockchains like Ethereum."),(0,a.kt)("p",null,"MEV (\u201cMaximal Extractable Value\u201d) is the maximum amount of value that can be extracted through reordering, censoring, or inserting transactions within blocks being produced."),(0,a.kt)("p",null,"Ethereum was built around the fact that miners can run neutral software out of the box that maximizes revenues and network security. Flashbots helps maintain this property in the face of MEV while also providing the ability for users to ",(0,a.kt)("a",{parentName:"p",href:"https://writings.flashbots.net/writings/announcing-protect"},"protect their transactions")," from front running, sandwiching, and other risks."),(0,a.kt)("p",null,"Prior to Flashbots\u2019 launch in early 2021, the Ethereum network suffered from chain congestion due to bidding wars between bots. These bots have now mostly been pushed out of the transaction pool freeing up block space and reducing gas costs for all Ethereum users."),(0,a.kt)("p",null,"Flashbots aims to maintain a fair playing field for the extraction and democratization of MEV by reducing entry barriers to allow anyone to participate in searching (e.g., DeFi trading, liquidations, arbitrage). Without a MEV solution such as Flashbots, market forces would result in MEV extraction being monopolized by a small number of highly-capitalized entities due to economies of scale and barriers to entry (similar to high frequency trading in traditional markets). This outcome must be mitigated in order to maintain the credible neutrality of the Ethereum network."),(0,a.kt)("h2",{id:"a-mev-solution-is-necessary-on-ethereum-post-merge"},"A MEV solution is necessary on Ethereum post-merge"),(0,a.kt)("p",null,"Flashbots has been critical to leveling the MEV playing field on Proof-of-Work (PoW) Ethereum (eth1), and aims to bring the same benefits to Proof-of-Stake (PoS) Ethereum (eth2). The adoption of Flashbots involves two distinct parties, block producers, and MEV searchers. In Ethereum, over 90% of miners have adopted Flashbots; however, as we approach eth2 and the transition to PoS, adoption will reset to 0. As such, for the health of the Ethereum ecosystem, it is imperative that validators also adopt an MEV solution for Ethereum post-merge. To assist in this adoption, we are pleased to announce the ",(0,a.kt)("strong",{parentName:"p"},"Flashbots Eth2 Working Group.")),(0,a.kt)("p",null,"Flashbots Eth2 Working Group members are ecosystem stakeholders who intend to participate in Flashbots on Ethereum post-merge and are committed to making sure the system aligns with the Ethereum ideals by providing technical feedback, contributing to the development, and thoroughly testing the system ahead of the merge."),(0,a.kt)("h2",{id:"the-goal-of-the-working-group"},"The goal of the Working Group"),(0,a.kt)("p",null,"Both searchers and miners prefer Flashbots on the current proof of work chain as it is a credibly neutral, incentive compatible, and effective solution to mitigate the negative externalities of traditional MEV extraction techniques. The goal of the Working Group is to work together to ensure that we can continue developing and promoting adoption of an effective MEV solution on Ethereum post-merge. Just as the Flashbots team worked with the miners when designing, testing, and ultimately implementing Flashbots on eth1, we must do the same with eth2 stakeholders. The working group will be aligned with Flashbots values to be an open, transparent, and credibly neutral organization. The organization will not be exclusive to a small group of insiders or favor certain groups over others."),(0,a.kt)("h2",{id:"the-makeup-of-the-working-group"},"The makeup of the Working Group"),(0,a.kt)("p",null,"The goal of the Working Group is to represent all eth2 stakeholders. This includes (but is not limited to) solo stakers, decentralized staking pools, staking providers, infrastructure providers, exchanges, custodians, and others."),(0,a.kt)("h2",{id:"how-does-flashbots-benefit-validators"},"How does Flashbots benefit validators?"),(0,a.kt)("p",null,"Flashbots maximizes the MEV revenue received by validators while eliminating the need for validators to actively extract MEV. When a searcher submits a MEV extraction transaction through Flashbots, they enter an auction where the searcher sharing the most profit with the validator is prioritized. This bid is paid directly to the validator who processes the transaction and only available to validators connected to the Flashbots system. Hence, running Flashbots significantly increases the reward rate for validators. We have estimated that at ",(0,a.kt)("a",{parentName:"p",href:"https://hackmd.io/@flashbots/mev-in-eth2"},"the current 250k validators (8m ETH staked) can expect increased validator rewards by approximately 60%"),"."),(0,a.kt)("h2",{id:"how-does-flashbots-benefit-stakers"},"How does Flashbots benefit stakers?"),(0,a.kt)("p",null,"Ethereum end-users who participate in eth2 staking through pools, exchanges, or infrastructure providers can choose entities that run Flashbots and align with their values for eth2 and will likely provide better services and higher rewards."),(0,a.kt)("h2",{id:"what-does-this-mean-for-solo-stakers"},"What does this mean for solo stakers?"),(0,a.kt)("p",null,"Supporting solo staker participation and protecting client diversity were the two core objectives in designing the Flashbots system for eth2. There is no minimum size to participate in the Flashbots system on eth2. Anyone running a single validator node or more can run Flashbots software and receive all the benefits. The system is designed with solo validators and Ethereum enthusiasts in mind. To date, the team has been working alongside the Ethereum Foundation and the EthStaker community to ensure solo staker core adoption is seamless and accessible. We would also like to encourage other solo staker communities to join the working group and contribute to this effort."),(0,a.kt)("h2",{id:"working-group-founding-members"},"Working Group Founding Members"),(0,a.kt)("p",null,"The working group\u2019s founding members include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flashbots"),(0,a.kt)("li",{parentName:"ul"},"Alchemy"),(0,a.kt)("li",{parentName:"ul"},"Ankr"),(0,a.kt)("li",{parentName:"ul"},"Bison Trails"),(0,a.kt)("li",{parentName:"ul"},"Bitcoin Suisse"),(0,a.kt)("li",{parentName:"ul"},"Blockdaemon"),(0,a.kt)("li",{parentName:"ul"},"bloXroute"),(0,a.kt)("li",{parentName:"ul"},"Certus One"),(0,a.kt)("li",{parentName:"ul"},"Chorus One"),(0,a.kt)("li",{parentName:"ul"},"ConsenSys"),(0,a.kt)("li",{parentName:"ul"},"Ethermine"),(0,a.kt)("li",{parentName:"ul"},"EthStaker Community"),(0,a.kt)("li",{parentName:"ul"},"Figment"),(0,a.kt)("li",{parentName:"ul"},"Foundry"),(0,a.kt)("li",{parentName:"ul"},"Obol"),(0,a.kt)("li",{parentName:"ul"},"P2P.org"),(0,a.kt)("li",{parentName:"ul"},"RocketPool"),(0,a.kt)("li",{parentName:"ul"},"Staked"),(0,a.kt)("li",{parentName:"ul"},"stakefish"),(0,a.kt)("li",{parentName:"ul"},"Staking Facilities")),(0,a.kt)("p",null,"Stay tuned for more members being announced in the coming weeks!"),(0,a.kt)("h2",{id:"what-is-next"},"What is next?"),(0,a.kt)("p",null,"The initial proposal for the Flashbots eth2 architecture called MEV-Boost is ",(0,a.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/mev-boost-merge-ready-flashbots-architecture/11177/"},"available for feedback on ETHResearch")," and the working group is moving forward to integrate and test the solution with eth2 clients."),(0,a.kt)("p",null,"We are excited to open the door for the next wave of members to the working group following this announcement. Working group members have the opportunity to communicate their requirements to the Flashbots team during the development process and gain technical experience with the software leading up to the merge."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are interested in joining this working group, please reach out to ",(0,a.kt)("a",{parentName:"li",href:"mailto:eth2@flashbots.net"},"eth2@flashbots.net"),", and we\u2019ll be happy to discuss working group membership with you."),(0,a.kt)("li",{parentName:"ul"},"If you are a small or solo validator \u2014 join the ",(0,a.kt)("a",{parentName:"li",href:"https://ethstaker.cc/"},"ETHStaker community")," to receive the benefits of working group membership."),(0,a.kt)("li",{parentName:"ul"},"If you are looking to stake in eth2, ask your staking provider if they plan on supporting Flashbots.")),(0,a.kt)("p",null,"Enabling a permissionless, transparent, and fair ecosystem for MEV is a shared objective across Flashbots and all working group members. We are thrilled to have them join us on the journey to ensuring MEV is a force for good."))}d.isMDXComponent=!0}}]);