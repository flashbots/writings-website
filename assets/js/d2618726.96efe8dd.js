"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[6963],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(a),d=r,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7911:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},assets:function(){return c},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={slug:"transparency-february",title:"Flashbots Transparency Report \u2014 February 2021",authors:["thegostep"],tags:["transparency report"],image:"/img/transparency-january-1.jpeg",hide_table_of_contents:!1},l=void 0,h={permalink:"/transparency-february",source:"@site/content/2021-03-18-transparency-february.mdx",title:"Flashbots Transparency Report \u2014 February 2021",description:"Sandwiching, Fairness, and EIP-1559",date:"2021-03-18T00:00:00.000Z",formattedDate:"March 18, 2021",tags:[{label:"transparency report",permalink:"/tags/transparency-report"}],readingTime:9.48,truncated:!0,authors:[{name:"Stephane Gosselin",title:"Architect @Flashbots",url:"https://twitter.com/thegostep",imageURL:"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg",key:"thegostep"}],prevItem:{title:"Flashbots Transparency Report \u2014 March 2021",permalink:"/transparency-march"},nextItem:{title:"Quantifying MEV\u2014Introducing MEV-Explore v0",permalink:"/quantifying-mev"}},c={authorsImageUrls:[void 0]},u=[{value:"Overview",id:"overview",children:[]},{value:"Novel Use Cases of Flashbots",id:"novel-use-cases-of-flashbots",children:[{value:"Account Abstraction",id:"account-abstraction",children:[]},{value:"Community Experiments",id:"community-experiments",children:[]}]},{value:"Upgrades and Releases",id:"upgrades-and-releases",children:[]},{value:"Searcher Adoption",id:"searcher-adoption",children:[{value:"2x bundle inclusion",id:"2x-bundle-inclusion",children:[]},{value:"3x unique searchers",id:"3x-unique-searchers",children:[]},{value:"New strategies",id:"new-strategies",children:[]},{value:"A note on sandwiching",id:"a-note-on-sandwiching",children:[]}]},{value:"Miner Participation",id:"miner-participation",children:[{value:"A wild miner appears",id:"a-wild-miner-appears",children:[]},{value:"Profitability is up",id:"profitability-is-up",children:[]},{value:"Biggest bundle award",id:"biggest-bundle-award",children:[]},{value:"MEV and EIP1559",id:"mev-and-eip1559",children:[]},{value:"Solo miners and Flashbots",id:"solo-miners-and-flashbots",children:[]}]},{value:"About Flashbots",id:"about-flashbots",children:[]}],p={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sandwiching, Fairness, and EIP-1559"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"As EIP-1559 and ETH2 are looming with an impact on future income for Ethereum miners, we are witnessing a surge of interest from miners to increase their revenue via MEV extraction. This was an inevitability, but the timeline has accelerated. Will miners pick the democratic, transparent, fair, and efficient path to MEV extraction, or seek to extract on their own in a permissioned manner? We will soon find out\u2026"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"On Jan 6, we launched Flashbots Alpha, our market-based alternative to unilateral trader-miner collusion for the extraction of MEV. Flashbots is a two-sided marketplace composed of miners and MEV searchers. Any miner or mining pool can run MEV-geth and receive additional income from MEV strictly more than what it would earn from running vanilla geth, without the need to enter into any bespoke deal with traders. MEV searchers, predominantly bot operators, are able to send transactions through a Flashbots gateway called MEV-relay to improve chance of landing on-chain without the need to pay for gas on failed transaction, or causing chain congestion and enter into gas war that hurts other Ethereum users.")),(0,i.kt)("p",null,"At the time of writing, there are ",(0,i.kt)("strong",{parentName:"p"},"5 mining pools")," running MEV-geth, collectively accounting for over ",(0,i.kt)("strong",{parentName:"p"},"12%")," of total Ethereum hashrate, collecting ",(0,i.kt)("strong",{parentName:"p"},"0.13ETH")," per block of additional MEV revenue from Flashbots transaction bundles. On the MEV searcher side, we are seeing a 3x increase in unique searchers who have successfully landed bundles on chain."),(0,i.kt)("p",null,"This post constitutes our second monthly update to shed light on the activity happening on Flashbots, as part of our ongoing efforts in fulfilling Flashbots\u2019 commitment to iterate in the public. In addition to open-sourcing our codebase, and providing monthly progress updates via MEV Roasts and Flashbots Community Calls, this Transparency Update aims to review the searcher and miner activity on Flashbots core infrastructure."),(0,i.kt)("h2",{id:"novel-use-cases-of-flashbots"},"Novel Use Cases of Flashbots"),(0,i.kt)("h3",{id:"account-abstraction"},"Account Abstraction"),(0,i.kt)("p",null,"An accidental use case for flashbots was discovered: account abstraction. The creative use cases of Flashbots in the rescue of compromised Cryptokitties and ENS in January has inspired the community to come up with research ideas and experimental implementations."),(0,i.kt)("p",null,"Since Flashbots allows for submitting zero gas transactions, it\u2019s also possible to submit transactions which are paid for with any ERC20 token. This is commonly referred to as \u201caccount abstraction\u201d or \u201csponsored transactions\u201d. Flashbots in-house white hat Scott open-sourced a sample searcher which makes it easy to execute sponsored transactions. EIP-3074 has been proposed for the next hardfork which is poised to play well with our system."),(0,i.kt)("p",null,"Vitalik also chimed in on how Flashbots can be used as a backdoor path to account abstraction."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9761).Z})),(0,i.kt)("h3",{id:"community-experiments"},"Community Experiments"),(0,i.kt)("p",null,"Community is an integral part of the Flashbots ecosystem. We are lucky to have trailblazers pushing the boundary of what is possible on ethereum today with Flashbots."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Integrate flashbots in DApps to align interest of users and miners")),(0,i.kt)("p",null,'For your reference, the idea is inspired by this post. Pay with MEV In brief, DApps may "create" MEV on purpose, to pay\u2026\nethresear.ch'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Beginner\u2019s guide to troubleshooting MEV on Flashbots")),(0,i.kt)("p",null,"When I first started playing with the Flashbots\u2019 infrastructure there was a lot of onion peeling on my part just to\u2026\nfifikobayashi.medium.com"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The enemy of your enemy is NOT your friend")),(0,i.kt)("p",null,"Unbeknownst to the average DeFi user, battlelines are currently being drawn as we speak in the ever evolving realm of\u2026\nfiona.mirror.xyz"),(0,i.kt)("h2",{id:"upgrades-and-releases"},"Upgrades and Releases"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MEV-Relay v2")," \u2014 Searchers no longer need an API key to submit bundles. We now require all bundles to be signed with an ethereum private key which allows us to start tracking a searcher\u2019s reputation. This reputation could in the future be used to provide a priority channel for high reputation searchers as suggested here. You can find out more about this change here."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bundle Simulation")," \u2014 We added an ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_callBundle")," RPC to MEV-relay in order to help searchers debug their bundle execution. By default, this RPC allows for simulating the execution of an arbitrary bundle up to 64 blocks in the past. You can find out more about this new feature here. Bundle simulation was added to both the ethers.js and web3.py flashbots libraries (thanks to 0xVerif !)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MEV-explore v0")," \u2014 We released the v0 of MEV-explore to explore.flashbots.net and received great feedback on how we can continue to improve data accuracy. We were able to pruned several false positives which inflated the initial numbers. Thanks to Ankur for his contributions here. Next steps will be to add Flashbots specific metrics within the dashboard!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Flashbots Forum")," \u2014 Over the course of February, our efforts were focused on improving the UX for searchers and miners. As part of this effort, we created a new forum on github to aggregate feature requests and provide technical support. If you have any suggestions or questions, please direct them there and help us identify the most important discussions by voting up and down!"),(0,i.kt)("h2",{id:"searcher-adoption"},"Searcher Adoption"),(0,i.kt)("h3",{id:"2x-bundle-inclusion"},"2x bundle inclusion"),(0,i.kt)("p",null,"Despite not increasing the amount of hashrate in February compared to January, there was 2x the number of successfully mined flashbots bundles. This indicates flashbots blocks are more frequently competitive with regular blocks. A sneak peak into the month of March shows additional hashrate participation which is expected to increase number of successful bundles mined."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5721).Z})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: Data as of March 18th")),(0,i.kt)("h3",{id:"3x-unique-searchers"},"3x unique searchers"),(0,i.kt)("p",null,"Another metric we are watching closely is the number of unique searchers who\u2019ve successfully landed a bundle on chain. This gives us a good approximate of the level of adoption on the searcher side and how democratic MEV extraction is. We expect removing API keys from the relay will help speed up adoption."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6678).Z})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: Data as of March 18th")),(0,i.kt)("h3",{id:"new-strategies"},"New strategies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Big boy arb")," \u2014 Just a straight (non-toast) arb between uni & sushi. Miner took 40 ETH, searcher took 5 ETH. \u2014 ",(0,i.kt)("a",{parentName:"p",href:"https://etherscan.io/tx/0x5e1657ef0e9be9bc72efefe59a2528d0d730d478cfc9e6cdd09af9f997bb3ef4"},"https://etherscan.io/tx/0x5e1657ef0e9be9bc72efefe59a2528d0d730d478cfc9e6cdd09af9f997bb3ef4"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Multigrain Toast")," \u2014 Toast, with 4-hop ETH->HYPE->METRIC->BUILD->ETH route, turned 1.75 ETH into 10.37. Miner got 2.5ETH, searcher got 7 ETH \u2014 ",(0,i.kt)("a",{parentName:"p",href:"https://etherscan.io/tx/0xe7692082844eb95d5e0946cd6f17031f435e1bf8ef5e14a2d14e7bd423f4e75e"},"https://etherscan.io/tx/0xe7692082844eb95d5e0946cd6f17031f435e1bf8ef5e14a2d14e7bd423f4e75e"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Paint Rescue")," \u2014 CheckAndSend, withdrawing $800 of \u201cPAINT\u201d tokens from a well-known private key. Otherwise tokens would be \u201cstuck\u201d with less knowledgable users trying to pull tokens out by first sending ETH (that gets swept). \u2014 ",(0,i.kt)("a",{parentName:"p",href:"https://etherscan.io/txs?block=12035866&p=4"},"https://etherscan.io/txs?block=12035866&p=4"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Risk Free Breeding")," \u2014 CryptoKitties runs a \u201cprivileges birther\u201d, giving themselves exclusive right to first 5 blocks of birth-eligibility. It would be rough competing against that privileged birther PLUS other regular birthers for the scraps without using Flashbots. Miner took 0.062, searcher took 0.038. \u2014 ",(0,i.kt)("a",{parentName:"p",href:"https://etherscan.io/txs?block=11930608&p=3"},"https://etherscan.io/txs?block=11930608&p=3"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Whitehat Sandwicher")," \u2014 Uniswap sandwiching has seen an uptick in the last month, but a new breed of sandwichers have appeared. Sandwichers that sandwich other sandwichers. \u2014 ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/fifikobayashi/status/1372338964326092802?s=20"},"https://twitter.com/fifikobayashi/status/1372338964326092802?s=20")))),(0,i.kt)("h3",{id:"a-note-on-sandwiching"},"A note on sandwiching"),(0,i.kt)("p",null,"Sandwiching is probably one of the most controversial MEV strategies out there at this moment. It is usually at the core of Flashbots criticism and we do not shy away from it. At Flashbots, we strongly believe the systems we build must exhibit credible neutrality if we wish to be successful in mitigating the bigger MEV crisis. We believe the infrastructure we build must optimize for both fairness and economic optimality if it is to be resilient in the long run. Censorship of any arbitrary strategy would create an economic incentive for less moral actors to deviate from a democratic solution. As such, we are forced to take a research driven stance on what is \u201cgood\u201d and \u201cbad\u201d MEV. We refer to this as an \u201cMEV Taxonomy\u201d which we are helping define at the core of our research agenda. We cannot be the enforcers, but are working hard to provide the education, transparency, and tools necessary for the community to establish their own norms and be able to enforce them."),(0,i.kt)("h2",{id:"miner-participation"},"Miner Participation"),(0,i.kt)("h3",{id:"a-wild-miner-appears"},"A wild miner appears"),(0,i.kt)("p",null,"Several new miners have been hard at work integrating MEV-geth over the course of February and have come online in early March. These miners collectively represent over 12% of the total ethereum hashrate. Many of them are taking a phased approach to integration and will be gradually increasing their level of hashrate pointed to MEV-geth if profitability continues to be high."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3142).Z})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: Data as of March 18th")),(0,i.kt)("h3",{id:"profitability-is-up"},"Profitability is up"),(0,i.kt)("p",null,"Miners collected 174 ETH in flashbots fees in February, up by more than 6x in January. Average per block fees were also up more than 3x in February and continue to increase."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7503).Z})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: Data as of March 18th")),(0,i.kt)("h3",{id:"biggest-bundle-award"},"Biggest bundle award"),(0,i.kt)("p",null,"A massive bundle landed on chain in February and made a miner very happy. Not bad for a single block."),(0,i.kt)("p",null,"[tweet embed missing]"),(0,i.kt)("h3",{id:"mev-and-eip1559"},"MEV and EIP1559"),(0,i.kt)("p",null,"The conversation around EIP-1559 has heated up in the last month and the standard is now set to be included in the upcoming London hard fork. This is a delicate topic and while we aim to remain neutral in discussing potential adoption of the standard, EIP-1559 has become a catalyst for miner awareness of MEV."),(0,i.kt)("p",null,"Indeed, for many solo-miners the EIP1559 community call was the first introduction to MEV and its implications for miner profitability."),(0,i.kt)("p",null,"[embed missing]"),(0,i.kt)("p",null,"The first thing to understand is that not all ethereum transactions are created equal. Regular ethereum transactions bid for \u201cinclusion\u201d where they can be included anywhere in a block, while MEV transactions bid for \u201cpriority\u201d where they want to be included only in specific block positions (often the first in the block)."),(0,i.kt)("p",null,"Under the current EIP1559 proposal, \u201cinclusion\u201d fees are burned as the basefee while \u201cpriority\u201d fees are sent to the miner as a tip. This means everything hangs on this question: How do \u201cinclusion\u201d fees compare to \u201cpriority\u201d fees in the long run?"),(0,i.kt)("p",null,"As shown by MEV-explore, MEV is already a significant driver of transaction flow on the network. This is because priority positions in a block are much more scarce than inclusion positions. Over time, we expect mining fees derived from MEV to greatly exceed mining fees derived from regular ethereum transaction."),(0,i.kt)("p",null,"Miners looking to maximize their fees will adopt MEV extraction systems like MEV-geth regardless of whether EIP1559 is adopted."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5447).Z})),(0,i.kt)("h3",{id:"solo-miners-and-flashbots"},"Solo miners and Flashbots"),(0,i.kt)("p",null,"The Flashbots organization maintains MEV-geth which provides a simple way for miners to maximize their revenues from MEV / priority transactions."),(0,i.kt)("p",null,"Revenues generated from MEV have high variance (ie. they are not distributed equally between blocks), and therefore the likelihood of a solo miner mining a Flashbots block is extremely low."),(0,i.kt)("p",null,"The Flashbots system is still in \u201cAlpha\u201d release which unfortunately means it has some limitations. Revenues generated from MEV have high variance (ie. they are not distributed equally between blocks), and therefore the likelihood of a solo miner mining a Flashbots block is extremely low. For this reason, Flashbots only supports large hashrate providers during the Alpha."),(0,i.kt)("p",null,"If you are a solo miner, we encourage you to reach out to your mining pool of choice and ask if they support MEV-geth."),(0,i.kt)("h2",{id:"about-flashbots"},"About Flashbots"),(0,i.kt)("p",null,"Flashbots is a research and development organization formed to mitigate the negative externalities and existential risks posed by miner-extractable value (MEV) to smart-contract blockchains, starting with Ethereum."),(0,i.kt)("p",null,"We are not your typical startup, we are fully remote and our principles are based on that of a pirate hacker collective and are actively recruiting talented, self-directed individuals to join our crew. You can find out more about us and our open positions on our github."))}d.isMDXComponent=!0},9761:function(e,t,a){t.Z=a.p+"assets/images/transparency-february-1-0abfc90da449c128f063c018ff344019.png"},5721:function(e,t,a){t.Z=a.p+"assets/images/transparency-february-2-588a1f4740cc9b90f879697bfaf7ae5c.png"},6678:function(e,t,a){t.Z=a.p+"assets/images/transparency-february-3-abab1d65f5b882f141e89aa4a4b79011.png"},3142:function(e,t,a){t.Z=a.p+"assets/images/transparency-february-4-541d0d021abb6b2a8afa4e1819e2564e.png"},7503:function(e,t,a){t.Z=a.p+"assets/images/transparency-february-5-de0069f0d577d25b46fad6622ccdda12.png"},5447:function(e,t,a){t.Z=a.p+"assets/images/transparency-february-6-d43c5d709a52f044e06c0aa96674d3f1.png"}}]);