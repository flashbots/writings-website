"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[6212],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),h=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=h(r),m=i,p=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return r?o.createElement(p,n(n({ref:t},d),{},{components:r})):o.createElement(p,n({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var h=2;h<a;h++)n[h]=r[h];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},524:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},assets:function(){return d},toc:function(){return u},default:function(){return m}});var o=r(7462),i=r(3366),a=(r(7294),r(3905)),n=["components"],s={slug:"order-flow-auctions-and-centralisation",title:"order flow, auctions and centralisation I - a warning",authors:["quintus"],tags:["flashbots","pbs","order-flow"],image:"/img/OF4.png",hide_table_of_contents:!1},l="Order flow, auctions and centralisation I: a warning",h={permalink:"/order-flow-auctions-and-centralisation",source:"@site/content/2022-09-12-order-flow-auctions-and-centralisation-1.mdx",title:"order flow, auctions and centralisation I - a warning",description:"Tl;dr This post explores the alarming potential for exclusive order flow to render the builder market uncompetitive. A lack of competition in the builder market threatens to cause rent extraction, poor user experience, and entrenchment of builders with undue influence over network incentives. While cause for concern, the negative externalities of exclusive order flow can be mitigated or wholly avoided as presented in a series of articles, of which this article is the first.",date:"2022-09-12T00:00:00.000Z",formattedDate:"September 12, 2022",tags:[{label:"flashbots",permalink:"/tags/flashbots"},{label:"pbs",permalink:"/tags/pbs"},{label:"order-flow",permalink:"/tags/order-flow"}],readingTime:11.21,truncated:!0,authors:[{name:"Quintus Kilbourn",title:"Researcher",url:"https://twitter.com/0xQuintus",imageURL:"https://pbs.twimg.com/profile_images/1556350725789204480/rAznqxk0_400x400.jpg",key:"quintus"}],prevItem:{title:"order flow, auctions and centralisation II - order flow auctions",permalink:"/order-flow-auctions-and-centralisation-II"},nextItem:{title:"Can First Come First Served-Based Transaction Ordering Prevent Front-Running?",permalink:"/fcfs-and-front-running"}},d={authorsImageUrls:[void 0]},u=[{value:"What is order flow?",id:"what-is-order-flow",children:[]},{value:"A good MEV market",id:"a-good-mev-market",children:[]},{value:"Where the orders flow",id:"where-the-orders-flow",children:[]},{value:"Capturing the market",id:"capturing-the-market",children:[]},{value:"Additional Consequences",id:"additional-consequences",children:[]},{value:"The path forward",id:"the-path-forward",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],c={toc:u};function m(e){var t=e.components,s=(0,i.Z)(e,n);return(0,a.kt)("wrapper",(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tl;dr")," This post explores the alarming potential for exclusive order flow to render the builder market uncompetitive. A lack of competition in the builder market threatens to cause rent extraction, poor user experience, and entrenchment of builders with undue influence over network incentives. While cause for concern, the negative externalities of exclusive order flow can be mitigated or wholly avoided as presented in a series of articles, of which this article is the first."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The gist of this article is captured in ",(0,a.kt)("a",{parentName:"em",href:"https://www.youtube.com/watch?v=ilc3EoSMMDg"},"a talk delivered at the MEV Workshop at SBC \u201822"),". For discussions on this post, see ",(0,a.kt)("a",{parentName:"em",href:"https://collective.flashbots.net/t/order-flow-auctions-and-centralisation-i-a-warning/258"},"here."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mev utopia in danger meme",src:r(9290).Z})),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("h3",{id:"what-is-order-flow"},"What is order flow?"),(0,a.kt)("p",null,"In the context of Ethereum, we regard anything that allows one to change the state of the blockchain as an \u201corder.\u201d The canonical example is a transaction like the ones found in the mempool, although the concept extends to other formats like \u201cintents\u201d from account abstraction too.\nI refer to collections of orders as \u201corder flow\u201d (OF) and refer to exclusive access to order flow as \u201cexclusive order flow\u201d (EOF).  As you will soon see, EOF will be the main antogonist in this article, primarily because most forms of exclusivity easily prevent competition, which is necessary to have a \u201cgood\u201d MEV market."),(0,a.kt)("h3",{id:"a-good-mev-market"},"A good MEV market"),(0,a.kt)("p",null,"The particular MEV market in question in this article is ",(0,a.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/proposer-block-builder-separation-friendly-fee-market-designs/9725"},"PBS")," in the form of ",(0,a.kt)("a",{parentName:"p",href:"https://boost.flashbots.net/"},"MEV-Boost"),", but many different forms of MEV markets likely succumb to similar descriptions and dangers. In order to argue that EOF can have undesirable effects on the MEV market, it is important to first establish some of the properties we require from PBS:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(Approximately) dominant strategy for proposers:")," This is the most essential aim of PBS, so hopefully you are already familiar with this idea. At a high level, the aim is that either the proposer\u2019s best strategy is to build blocks through the builder market or their best strategy yields only marginally higher returns than what the builder market has to offer. We have this goal to prevent centralisation of stake on Ethereum."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No rent-seeking:")," The majority of the MEV that is extracted should not remain with the extracting parties (searchers/builders), but should rather flow back to the rest of the ecosystem. Where exactly the value should flow is a topic for another article, but the obvious contenders are validators, users and DApps."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Censorship resistance:")," just like before PBS, a valid order should be included eventually and, ideally, without much delay."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Improvements to UX:")," admittedly this is more of a desired than a required feature. However, given the addition of a sophisticated agent to the Ethereum ecosystem, it seems remiss not to leverage this agent for improvements to areas of the ecosystem we know to be weak. More detail is added to what UX improvements are possible.")),(0,a.kt)("h3",{id:"where-the-orders-flow"},"Where the orders flow"),(0,a.kt)("p",null,"Consider a wallet trying to send exclusive order flow to a single builder. In order for the wallet\u2019s orders to be executed the builder who receives the orders must land a block on chain, which may not happen immediately. End users don\u2019t like delays and delays also make things like gas fee estimation a lot harder so the wallet is incentivised to minimise this delay by sending OF to the builder with the highest inclusion rate, further increasing their dominance of the market. Clearly, this is a centralising force on the builder market."),(0,a.kt)("p",null,"There are various reasons why a wallet might do this. The most obvious is contractual payment for order flow from the builder, but it might also be in exchange for certain features from the builder or because the wallet maintainer is too lazy to integrate with any builder apart from the largest, dominant builder that produces most blocks anyway. These motives and the ability to control order flow are not unique to wallets. For instance, DApp UI\u2019s are in a very similar position. Lets call an agent that could play this role an \u201coriginator\u201d for generality."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"positive feedback loop diagram",src:r(9349).Z})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Diagram creds: Jon Charbonneau")),(0,a.kt)("h1",{id:"the-problem"},"The problem"),(0,a.kt)("p",null,"Exclusive order flow would allow a builder - or small group of colluding builders - to capture the builder market, making it effectively uncompetitive. As we will see, this would have significantly negative consequences on the builder market."),(0,a.kt)("h3",{id:"capturing-the-market"},"Capturing the market"),(0,a.kt)("p",null,"Consider the builder market centralising to a small number of builders, as ",(0,a.kt)("a",{parentName:"p",href:"https://vitalik.ca/general/2021/12/06/endgame.html"},"we expect it will (and we\u2019re OK with that)"),". In a competitive state, these builders would be spending the majority of their revenue on trying to outbid their competition. The builders could collude to drop their bids significantly and share profits, violating the property of no-rent seeking. Now consider two scenarios:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A new builder, Bob \ud83d\udc77\ud83c\udffd\u200d\u2642\ufe0f, enters the market. Since the bidding ring is bidding very low, it is easy for Bob to outbid them. The bidding ring could include Bob in their ring, further dividing profits, but, as more builders enter the market, the bidding ring has no choice but to lift its bids to compete, shifting value back to the ecosystem."),(0,a.kt)("li",{parentName:"ul"},"Bob enters the market, but cannot access the majority of order flow, because it is all being sent directly to the incumbent builders. As a result the Bob\u2019s blocks are not worth much in comparison to the dominant builders\u2019 who hardly have to try to outbid Bob no matter how good Bob\u2019s building algorithm or user features. Bob attempts to acquire order flow, but originators already have agreements with the incumbent builders. The originators are unlikely to enter similar agreements with Bob as he will likely not have a high inclusion rate. It may even be the case that wallet maintainers simply don\u2019t feel the overhead of integrating with Bob is worth it. After all, Bob hardly gets any blocks on chain.")),(0,a.kt)("p",null,"Hopefully, it is clear that the second scenario is the bad one as it sees the incumbent builders continue to retain the majority of MEV revenue, ",(0,a.kt)("strong",{parentName:"p"},"violating the no-rent seeking property"),". One may contend that the scenarios above did not take into account the payment that originators are receiving in exchange for their order flow. However, if an originator\u2019s business model is selling EOF, switching and sending order flow to a small challenging builder would incur large latency penalties. This switching cost is likely to be reflected in the payment from incumbent builders to originators."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"order flow advantage boxes meme",src:r(4490).Z})),(0,a.kt)("h3",{id:"additional-consequences"},"Additional Consequences"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UX"),": Access to order flow gives builders a competitive advantage. If builders weren\u2019t able to secure payment-for order flow (PFOF), they would be incentivised to compete on implementing user features to lure OF their way. The space of potential builder features is, as of yet, largely unexplored. Some of the ideas that have been floating around include account abstraction, backrunning-as-a-service, gasless cancellations, gasless orders, ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=fAgrIdyWIqc"},"pre-confirmations")," and state channels. If order flow does not respond to the implementation of new features because it is tied up in PFOF contracts or some other reason, there is no incentive for builders to implement these features."),(0,a.kt)("p",null,"It should be noted that having more order flow than another builder because of superior features is different from having more order flow because of PFOF. In the former case, the barrier to entry is implementing more features, in the latter the barrier to entry is payment and convincing originators to break contracts only to incur longer execution delays. In other words, exclusivity is not implied by features, but it is with PFOF."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Proposer incentives:")," Control over the majority of the value in the builder market leads to influence over proposer incentives. Consider ",(0,a.kt)("a",{parentName:"p",href:"https://notes.ethereum.org/@fradamt/H1ZqdtrBF"},"crlists"),". When a proposer publishes a crlist (or performs any honest behaviour in the general case), some builders may opt not to send blocks to that proposer because they are actively censoring the listed accounts or because they are trying to disincentivise publication of crlists in general. If the market is competitive, withheld blocks should be readily replaced with blocks of similar value from non-censoring builders. If, however, there is only a very small number of builders able to produce valuable blocks and these dominant builders choose to withhold blocks, proposers are forced to choose between rational (profit-seeking) and honest behaviour.\nForcing proposers to choose between being honest and earning high returns is bad in that it incentivises dishonest behaviour and worse in that dishonest stake earns higher returns and grows faster than honest stake, leading to honest proposers becoming an every smaller fraction of the network."),(0,a.kt)("p",null,"With rent-seeking, disincentivised censorship resistance and missed opportunities for improvements in UX, clearly exclusive order flow can have a large detrimental impact on the network."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"wat do meme",src:r(4265).Z})),(0,a.kt)("h3",{id:"the-path-forward"},"The path forward"),(0,a.kt)("p",null,"We have established that control over order flow poses a significant risk to the network. How can we go about addressing the problem?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The most obvious response is that the agents who are capable of engaging in harmful behaviour should be made aware of the dangers and ",(0,a.kt)("strong",{parentName:"li"},"held accountable"),". Large entities like Uniswap, Metamask and Infura control large and valuable fractions of Ethereum\u2019s total order flow (e.g. some estimates place Infura\u2019s share of total OF at over 70%) and could break the builder market in a finger snap. Similarly, builders who offer PFOF or special features to originators who send EOF should be called out. That being said, it is not in the spirit of blockchain to rely on agents to \u201cdo the right thing,\u201d we should also build systems which are resistant to misbehaviour. Flashbots has spent some time thinking about ways to do this and we plan to make some of this thinking public soon in future posts in this series. In the meantime the points below should suffice as an overview of the areas for potential improvement."),(0,a.kt)("li",{parentName:"ul"},"An interesting solution space is that of ",(0,a.kt)("strong",{parentName:"li"},"decentralised building"),". It may be possible to construct decentralised builders which would be incapable of carrying out the harmful behaviour outlined above. See ",(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=fAgrIdyWIqc"},"Vitalik\u2019s presentation at MEV workshop at SBC")," for more details."),(0,a.kt)("li",{parentName:"ul"},"It is possible to build solutions which ",(0,a.kt)("strong",{parentName:"li"},"alter the incentives")," of agents in control of order flow. For example, providing a more efficient and less destructive way for wallets to monetise partly addresses the problem. Searchers also face a tradeoff in which they would like to maximise their chances of executing a bundle but are constrained by the threat of builders stealing their bundles. The result being that searchers may only submit bundles to a few dominant builders. This could be relieved by providing a way for searchers to easily detect bundle theft."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Defaults")," are also very harmful. If the set of builders with whom originators are integrated is fixed, new builders cannot challenge incumbents and the development of new features will not be rewarded. Solutions which reduce the overhead of changing where orders flow seem to be a good mitigation strategy for this problem.")),(0,a.kt)("aside",null,"**Aside** \ud83d\udca1: *One knee-jerk reaction to the pitfalls of EOF is to say that all orders must flow through the public mempool. This doesn\u2019t seem to be the best response for a variety of reasons. One being that many UX features like account abstraction are not currently supported by the mempool. Another reason being that builders are unlikely to be incentivised to implement user-facing features if this could not earn them an increase in order flow. Finally, a less obvious reason is that it seems unlikely that a market with purely symmetric order flow would be able to sustain many builders. If one building algorithm is superior to another in the sense that for almost every input the superior algorithm produces a more valuable block, all builders having the same OF would mean that only the builders with the best algorithm would land any blocks. In contrast, if there is some stochasticity in how order flow value is distributed between builders for a given slot, the market is likely to sustain a larger set of builders. A large builder market is more robust to order flow capture as originators have a harder to time sending EOF to builders who have lower inclusion rates and large markets are less susceptible to bidding rings.*"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A proposed goal:")," in order to synthesise several of the different ways of addressing the EOF problem that have been listed above and to outline a research direction, I propose a general goal which attempts to encapsulate what has been written above:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Every order flows to every builder which supports its required features.")),(0,a.kt)("p",null,"In other words, if an order is not being sent via the mempool because of a feature that some builder supports, that order should flow to every builder that supports the desired feature. Research going forward should aim to find a way of achieving this goal or proposing a better alternative goal."),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Exclusive order flow presents a threat to PBS and, by extension, can be detrimental to the health of Ethereum. More research into mechanisms which reduce risk of order flow capture is required. In the meantime, agents in the position to engage in this behaviour should be held accountable while the ecosystem at large should be made aware of this problem. Getting this right could mean entering a world of innovation on user features and order types, while getting it wrong could lead to a dystopic world of MEV capture."),(0,a.kt)("p",null,"Special thanks to Stephane Gosselin and Alejo Salles for helpful feedback on this article."))}m.isMDXComponent=!0},9290:function(e,t,r){t.Z=r.p+"assets/images/OF-129427d23b94e6cc51b1b9cda85bd78d.png"},9349:function(e,t,r){t.Z=r.p+"assets/images/OF1-db38c1b5eed62b796d55fb625e27de4a.png"},4490:function(e,t,r){t.Z=r.p+"assets/images/OF2-bd71868449ad52d6d165b41bd5b5b496.png"},4265:function(e,t,r){t.Z=r.p+"assets/images/OF3-5c6e0f3036f9693404b76c75151c5801.png"}}]);