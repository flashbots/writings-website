"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[7987],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7714:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={slug:"the-cost-of-resilience",title:"The Cost of Resilience",authors:["elaine","alejo","hasu"],tags:["mev-boost","data","research"],image:"/img/savana.jpg",hide_table_of_contents:!1},s="The Cost of Resilience",c={permalink:"/the-cost-of-resilience",source:"@site/content/2022-11-22-the-cost-of-resilience.mdx",title:"The Cost of Resilience",description:"tl;dr",date:"2022-11-22T00:00:00.000Z",formattedDate:"November 22, 2022",tags:[{label:"mev-boost",permalink:"/tags/mev-boost"},{label:"data",permalink:"/tags/data"},{label:"research",permalink:"/tags/research"}],readingTime:7.655,truncated:!0,authors:[{name:"Elaine Hu",title:"Data @Flashbots",url:"https://twitter.com/elenahoolu",imageURL:"https://pbs.twimg.com/profile_images/1544050561657540609/lCtVnAS5_400x400.jpg",key:"elaine"},{name:"Alejo Salles",title:"Research @Flashbots",url:"https://twitter.com/fiiiu_",imageURL:"https://pbs.twimg.com/profile_images/1005592876930224128/JRAMFVUq_400x400.jpg",key:"alejo"},{name:"Hasu",title:"Strategy lead",url:"https://twitter.com/hasufl",imageURL:"https://pbs.twimg.com/profile_images/1512839785232093193/BU3pInpO_400x400.jpg",key:"hasu"}],nextItem:{title:"Open sourcing the Flashbots Builder",permalink:"/open-sourcing-the-flashbots-builder"}},p={authorsImageUrls:[void 0,void 0,void 0]},u=[],h={toc:u};function m(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"tl;dr")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A new mev-boost feature allows validators to maximize Ethereum\u2019s censorship resistance by building low-MEV blocks locally while still outsourcing the building of high-MEV blocks."),(0,i.kt)("li",{parentName:"ul"},"Using this feature carries an opportunity cost\u2014the price of resilience."),(0,i.kt)("li",{parentName:"ul"},"As most blocks are actually low-MEV, however, forfeiting a little profit goes a long way in increasing resilience!"),(0,i.kt)("li",{parentName:"ul"},"This is a breakthrough in the tradeoff between maximizing MEV extraction and maximizing censorship resistance.")),(0,i.kt)("h1",{id:"network-resilience"},"Network Resilience"),(0,i.kt)("p",null,"Flashbots has recently become a target of public scrutiny after OFAC broadened the set of sanctioned addresses to include smart contracts for the first time, affecting many users of the Ethereum network. While Flashbots has tried to navigate both the risk and ambiguity around the application of OFAC sanctions to data and communications infrastructure in web3 since the beginning, this was less fraught before the merge, when relays were sending bundles to mining pools, who were then responsible of assembling full blocks locally. The market moving to full block submission established the full separation between block builders and validators, who can no longer add individual transactions to a block."),(0,i.kt)("p",null,"Today, ",(0,i.kt)("a",{parentName:"p",href:"https://www.mevwatch.info/"},"most blocks in Ethereum are OFAC compatible"),", and although in practice this means that offending transactions only get ",(0,i.kt)("a",{parentName:"p",href:"https://www.inclusion.watch/"},"throttled by a small amount"),", ensuring robust decentralization and resilience at the protocol level is critical for Ethereum's success as neutral infrastructure. Unfortunately, changes to mev-boost alone do not suffice to provide these guarantees. In order for consensus clients to profit-switch between blocks coming from a (potentially selective) market of builders and the local mempool, deep changes to both the Execution and Consensus Clients need to take place. While the community is in agreement that this is an important issue, client teams have different priorities they need to balance. Other long-term proposals like Inclusion Lists and Partial Block Auctions are part of the core ",(0,i.kt)("a",{parentName:"p",href:"https://barnabe.substack.com/p/pbs"},"Proposer-Builder Separation research track"),"."),(0,i.kt)("p",null,"The question then arises of what can we do to address the issue today, while deferring a robust, protocol-level solution. It has been suggested that Flashbots self-limits their share of relayed blocks, but we ultimately believe that market distortions like this won't achieve much, as we cannot really predict how other relays will behave. Flashbots charging a small fee was also proposed, as establishing this standard would encourage other entities to run independent relays. While this seems like a sensible proposal, it risks entrenching the relay role, which we only view as a temporary solution until SUAVE is deployed\u2014a fully trustless building network."),(0,i.kt)("p",null,"Fortunately, other builders and relays have started to emerge and take increasingly larger shares of the market, and we are actively providing support to teams interested in running other relays. As of last week, we have ",(0,i.kt)("a",{parentName:"p",href:"https://writings.flashbots.net/open-sourcing-the-flashbots-builder"},"open sourced our builder"),", so anyone can now easily run a builder too. From the validators\u2019 perspective, however, the question remains: run mev-boost and comply with the regulations that their trusted relays adopt, or build blocks only locally, potentially forfeiting 100+ ETH profit opportunities?"),(0,i.kt)("h1",{id:"the-solution"},"The Solution"),(0,i.kt)("p",null,"Now, validators can sidestep this question by running mev-boost with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-boost#mev-boost-cli-arguments"},"new")," ",(0,i.kt)("inlineCode",{parentName:"p"},"min-bid")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-boost#mev-boost-cli-arguments"},"parameter"),". What this parameter does is only accept blocks from relays if they bid above a chosen value, otherwise a locally-built block is proposed. This leverages the fact that the profit increase coming from mev-boost is not that large for most blocks. Validators can thus forfeit a small amount of profit in exchange for making the network more resilient, while keeping the door open for high-MEV opportunities."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"resilience_1.png",src:n(7013).Z})),(0,i.kt)("p",null,"As depicted, the new ",(0,i.kt)("inlineCode",{parentName:"p"},"min-bid")," parameter allows validators to escape the tradeoff between profit maximization and network resilience. In what follows, we explore the cost that validators incur by opting into this feature."),(0,i.kt)("h1",{id:"block-profit-distribution"},"Block Profit Distribution"),(0,i.kt)("p",null,"We start by looking at the cumulative distribution of block profits, for both blocks coming from the Flashbots relay, and locally built blocks, all data post-merge",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"resilience_2.png",src:n(5027).Z})),(0,i.kt)("p",null,"As expected, the mev-boost distribution has a longer tail. We can look at the data in a different way by displaying the profit difference between both kinds of blocks, as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"resilience_3.png",src:n(9540).Z})),(0,i.kt)("p",null,"The asymmetry in this distribution again shows us how mev-boost blocks are generally more valuable than mempool blocks. However, we also see that a sizeable amount of blocks lie close to having no difference in value. Looking at the profit bucket of 0.05 ETH as an example, historically 35% of the mev-boost blocks have a profit of or below 0.05 ETH. By setting the minimum bid value to 0.05 ETH, the proposer will choose to build local blocks approximately a third of the time."),(0,i.kt)("p",null,"The question now is how much profit would validators be forfeiting by choosing to set a positive value for the ",(0,i.kt)("inlineCode",{parentName:"p"},"min-bid")," parameter."),(0,i.kt)("h1",{id:"opportunity-cost"},"Opportunity Cost"),(0,i.kt)("p",null,"The opportunity cost of setting a minimum bid value is the cumulative difference in block profit between blocks using Flashbots mev-boost relay and blocks built locally. The larger the minimum bid, the more blocks will be locally built, and the larger the opportunity cost:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"resilience_4.png",src:n(5098).Z})),(0,i.kt)("p",null,"As we see from the graph, the opportunity cost can get quite high for large values of the ",(0,i.kt)("inlineCode",{parentName:"p"},"min-bid")," parameter, which mean that most blocks would be built locally. However, as we pointed out, we are mostly concerned with low-profit blocks, which can get us a long way towards network resilience. Looking at only block profits below 0.11 ETH, which account for ~73% of all mev-boost blocks, we see the following opportunity cost, together with the implied approximate APR for each setting of the parameter:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"resilience_5.png",src:n(2409).Z})),(0,i.kt)("p",null,"We see again how the opportunity cost increases with the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"min-bid"),", but at the same time the projected APR falls only very slowly. This leads to the question of whether forfeiting a small amount of profit can make a difference in terms of transaction inclusion, which we look at next."),(0,i.kt)("h1",{id:"effects-on-transaction-inclusion"},"Effects on Transaction Inclusion"),(0,i.kt)("p",null,"With around ",(0,i.kt)("a",{parentName:"p",href:"https://www.inclusion.watch/"},"72% of Ethereum blocks")," are now built in an OFAC-compatible way, this means that some transactions experience delays in getting included on chain. In particular, the probability of one of these transactions to be included after one block is around 28%, corresponding to the validators who either build blocks locally or get profitable blocks from non-compliant relays. If all validators were using mev-boost and connecting only to compliant relays, the inclusion rate would of course fall down to 0."),(0,i.kt)("p",null,"Let's look at the inclusion rate of these transactions for different values of ",(0,i.kt)("inlineCode",{parentName:"p"},"min-bid"),", focusing only on mev-boost instances connected to compliant relays:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"resilience_6.png",src:n(6606).Z})),(0,i.kt)("p",null,"As mentioned, the default value of 0 would prevent any transaction from being included. For relatively small values of ",(0,i.kt)("inlineCode",{parentName:"p"},"min-bid"),", however, we see how non-compliant transactions have a large chance of inclusion even after very few blocks. As an example, setting a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"min-bid")," of 0.05 ETH would bring the inclusion probability after one block from 0 to 35%. Clearly, a majority of validators opting into this feature would go a long way towards increasing the network's resilience."),(0,i.kt)("p",null,"The following table summarizes our results for different values of the ",(0,i.kt)("inlineCode",{parentName:"p"},"min-bid")," parameter:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Minimum bid value"),(0,i.kt)("th",{parentName:"tr",align:null},"0 ETH"),(0,i.kt)("th",{parentName:"tr",align:null},"0.02 ETH"),(0,i.kt)("th",{parentName:"tr",align:null},"0.05 ETH"),(0,i.kt)("th",{parentName:"tr",align:null},"0.10 ETH"),(0,i.kt)("th",{parentName:"tr",align:null},"0.24 ETH"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cumulative % of blocks \u2264 min bid value"),(0,i.kt)("td",{parentName:"tr",align:null},"n.a."),(0,i.kt)("td",{parentName:"tr",align:null},"5%"),(0,i.kt)("td",{parentName:"tr",align:null},"35%"),(0,i.kt)("td",{parentName:"tr",align:null},"70%"),(0,i.kt)("td",{parentName:"tr",align:null},"90%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Opportunity cost per block"),(0,i.kt)("td",{parentName:"tr",align:null},"0 ETH"),(0,i.kt)("td",{parentName:"tr",align:null},"0.001 ETH"),(0,i.kt)("td",{parentName:"tr",align:null},"0.011 ETH"),(0,i.kt)("td",{parentName:"tr",align:null},"0.042 ETH"),(0,i.kt)("td",{parentName:"tr",align:null},"0.059 ETH")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Approximate proposer APR %"),(0,i.kt)("td",{parentName:"tr",align:null},"4.8%"),(0,i.kt)("td",{parentName:"tr",align:null},"4.8%"),(0,i.kt)("td",{parentName:"tr",align:null},"4.6%"),(0,i.kt)("td",{parentName:"tr",align:null},"4.1%"),(0,i.kt)("td",{parentName:"tr",align:null},"3.8%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"non-OFAC inclusion rate after 1 block"),(0,i.kt)("td",{parentName:"tr",align:null},"0%"),(0,i.kt)("td",{parentName:"tr",align:null},"5%"),(0,i.kt)("td",{parentName:"tr",align:null},"35%"),(0,i.kt)("td",{parentName:"tr",align:null},"70%"),(0,i.kt)("td",{parentName:"tr",align:null},"90%")))),(0,i.kt)("h1",{id:"wat-do"},"Wat Do?"),(0,i.kt)("p",null,"While censorship resistance ultimately needs to be tackled at the protocol level, we can today leverage the fact that most blocks are low-profit, such that the difference in profit between local and relay-built blocks is not that large."),(0,i.kt)("p",null,"If you run an Ethereum validator and are willing to incur a small opportunity cost in exchange for making the network more resilient, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-boost#setting-a-minimum-bid-value-with--min-bid"},"run mev-boost with"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mev-boost -min-bid <x> -relay ...\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is the minimum accepted ETH-denominated profit amount from blocks coming from the relays. As we saw on the table in the previous section, setting ",(0,i.kt)("inlineCode",{parentName:"p"},"x = 0.05")," incurs a per-block opportunity cost of 0.011 ETH, which decreases the annual return for proposer by only 0.2% in APR. This small decrease in yield has a sizeable effect in network resilience: if all validators connecting to compliant relays adopted this threshold, the 1 block inclusion probability for non-compliant transactions would increase from the current 28% to coarsely 53%. Larger voluntary forfeitures of profit would of course entail even greater increases in network resilience."),(0,i.kt)("p",null,"We encourage validators to update mev-boost and help reinforce Flashbots ongoing commitment to building open and decentralized infrastructure in line with Ethereum's goals."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Thank you to metachris, Kailin, and Xin for contributions to this post :)")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," Two data sources are used in in this analysis: payloads delivered through the ",(0,i.kt)("a",{parentName:"p",href:"https://boost-relay.flashbots.net/"},"Flashbots MEV-Boost relay")," and included on chain ranging from block number ",(0,i.kt)("inlineCode",{parentName:"p"},"15537940")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"15947320"),", and the Flashbots mempool builder (",(0,i.kt)("inlineCode",{parentName:"p"},"0xa1defa.."),"), which provides reference mempool block values."))}m.isMDXComponent=!0},7013:function(e,t,n){t.Z=n.p+"assets/images/resilience_1-de4aecbc2ee537ccfed4d5636c53ec33.png"},5027:function(e,t,n){t.Z=n.p+"assets/images/resilience_2-8c0958d979549a141faa0691971b6677.png"},9540:function(e,t,n){t.Z=n.p+"assets/images/resilience_3-38927ad05c9d53acd88235a330856248.png"},5098:function(e,t,n){t.Z=n.p+"assets/images/resilience_4-79f4bf0085a51f28add2b0558ff0fe7b.png"},2409:function(e,t,n){t.Z=n.p+"assets/images/resilience_5-57b194a1b840819f2b1aa75b6efbf8bd.png"},6606:function(e,t,n){t.Z=n.p+"assets/images/resilience_6-a9d43d096a348355e07e7b5452f83d6d.png"}}]);