"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[60],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),h=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=h(a),m=o,d=u["".concat(l,".").concat(m)]||u[m]||c[m]||n;return a?r.createElement(d,s(s({ref:t},p),{},{components:a})):r.createElement(d,s({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var h=2;h<n;h++)s[h]=a[h];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1080:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return h},assets:function(){return p},toc:function(){return c},default:function(){return m}});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),s=["components"],i={slug:"transparency-21q4",title:"Flashbots Transparency Report \u2014 Sept-Dec 2021",authors:["sxysun"],tags:["transparency report"],image:"/img/transparency-january-1.jpeg",hide_table_of_contents:!1},l="Flashbots Transparency Report \u2014 Sept-Dec 2021",h={permalink:"/writings/transparency-21q4",source:"@site/writings/2022-01-17-transparency-21q4.mdx",title:"Flashbots Transparency Report \u2014 Sept-Dec 2021",description:"Hi everyone, it's been a while! Here is a double-edition of our latest transparency report. As you can imagine, we've been busy.",date:"2022-01-17T00:00:00.000Z",formattedDate:"January 17, 2022",tags:[{label:"transparency report",permalink:"/writings/tags/transparency-report"}],readingTime:7.53,truncated:!0,authors:[{name:"Xinyuan Sun",title:"Research @Flashbots",url:"https://twitter.com/sxysun1",imageURL:"https://pbs.twimg.com/profile_images/1461834528629080071/xzfOvt9Q_400x400.jpg",key:"sxysun"}],prevItem:{title:"The MEV Supply Chain - a peek into the future of this industry",permalink:"/writings/mev-supply-chain"},nextItem:{title:"How To Light Up The Dark Forest - A Walkthrough of Building A Cryptopunk MEV Inspector",permalink:"/writings/the-anatomy-of-an-inspector"}},p={authorsImageUrls:[void 0]},c=[{value:"Overview",id:"overview",children:[]},{value:"Flashbots Auction",id:"flashbots-auction",children:[{value:"v0.4 Megabundle release",id:"v04-megabundle-release",children:[]},{value:"Infrastructure improvements",id:"infrastructure-improvements",children:[]},{value:"Searcher tooling",id:"searcher-tooling",children:[]},{value:"Preparing for Proof of Stake Ethereum",id:"preparing-for-proof-of-stake-ethereum",children:[]}]},{value:"Flashbots Protect",id:"flashbots-protect",children:[]},{value:"Flashbots Data",id:"flashbots-data",children:[]},{value:"Flashbots Research",id:"flashbots-research",children:[]},{value:"Community",id:"community",children:[{value:"Whitehat",id:"whitehat",children:[]},{value:"Public appearances",id:"public-appearances",children:[]},{value:"Resources",id:"resources",children:[]}]},{value:"Get involved",id:"get-involved",children:[]}],u={toc:c};function m(e){var t=e.components,a=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Hi everyone, it's been a while! Here is a double-edition of our latest transparency report. As you can imagine, we've been busy."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"In the last 4 months of 2021, the Flashbots team has grown to a size of 20 members, welcoming new teammates like myself (hi \ud83d\ude4b\u200d)."),(0,n.kt)("p",null,"We released ",(0,n.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/releases/alpha-v0.4"},"v0.4")," of Flashbots Auction, which introduces megabundles, released ",(0,n.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-protect/overview"},"Flashbots Protect"),", which provides an easy way to use Flashbots for frontrunning protection, and improved the performance and reliability of our infrastructure on many fronts."),(0,n.kt)("p",null,"The research that was started in the previous months on Ethereum 2.0 was productized, culminating in the release of our design of the Flashbots Auction for Ethereum 2.0, ",(0,n.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/mev-boost-merge-ready-flashbots-architecture/11177"},"MEV-Boost"),", and in the creation of the ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/flashbots/announcing-the-flashbots-eth2-working-group-599b2b92634b"},"Flashbots Eth2.0 Working Group"),"."),(0,n.kt)("p",null,"In addition, some of the research we had been working on internally saw the light of day, such as our work on ",(0,n.kt)("a",{parentName:"p",href:"https://writings.flashbots.net/research/formalization-mev"},"MEV formalization")," and on ",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2112.01472.pdf"},"cross-domain MEV"),"."),(0,n.kt)("h2",{id:"flashbots-auction"},"Flashbots Auction"),(0,n.kt)("p",null,"In the last 4 months, miners made 65,961.98 ETH (258,976,454.42 USD) using Flashbots, the Flashbots network sustained a hashrate of around 83%, and our inclusion rate has oscillated at around 55%. You can find all of these numbers and more at ",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.flashbots.net"},"https://dashboard.flashbots.net")),(0,n.kt)("h3",{id:"v04-megabundle-release"},"v0.4 Megabundle release"),(0,n.kt)("p",null,"On September 27th, we published v0.4 of MEV-Geth which introduces megabundles. This allows trusted relayers to submit larger, pre-merged, and ordered bundles of transactions to miners. While those bundles are initially scored and sorted against the existing bundle-merging algorithm introduced in v0.3, the fact bundle-merging now lives at the relayer level means it can be improved without impacting the performance of mev-geth for all mining pools and miners."),(0,n.kt)("p",null,"This update is a prequel to the ",(0,n.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/proposer-block-builder-separation-friendly-fee-market-designs/9725"},"proposer-builder separation on Ethereum"),", where megabundles would become full blocks. For the detailed specification of this update, please see our ",(0,n.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/releases/alpha-v0.4"},"docs"),". We expect mega bundles to continue to be a focus going forward."),(0,n.kt)("h3",{id:"infrastructure-improvements"},"Infrastructure improvements"),(0,n.kt)("p",null,"In the last four months, we\u2019ve been working on making the Flashbots auction more efficient by developing better bundle pricing and merging techniques, and working on specialized infrastructure."),(0,n.kt)("p",null,"With these improvements, we started the journey of delivering the most profitable searcher bundles to miners faster than ever before."),(0,n.kt)("h3",{id:"searcher-tooling"},"Searcher tooling"),(0,n.kt)("p",null,"Shout out to community members ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/libevm"},"libevm")," for adding a new simulation call ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-geth/pull/102"},(0,n.kt)("inlineCode",{parentName:"a"},"estimateGasBundle"))," method to the MEV-Geth repo, and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/shekhirin"},"shekirin")," for adding new RPC method ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-geth/pull/106"},(0,n.kt)("inlineCode",{parentName:"a"},"flashbots_getWork"))," which adds a new block reward including MEV to the ",(0,n.kt)("inlineCode",{parentName:"p"},"eth_getWork")," RPC result."),(0,n.kt)("p",null,"To better help our searchers land bundles, we've published a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/searchers/advanced/troubleshooting/"},"guide")," to troubleshoot bundle inclusion problems. In addition, two articles were published by ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/bertcmiller"},"Robert Miller")," that should help the MEV community understand MEV better. The first is ",(0,n.kt)("a",{parentName:"p",href:"https://bertcmiller.com/2021/09/05/mev-synthetix.html"},(0,n.kt)("em",{parentName:"a"},"Anatomy of an MEV Strategy: Synthetix")),", published alongside ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bertmiller/sMEV"},"a repo")," where the searcher written about was open sourced. The second is a ",(0,n.kt)("a",{parentName:"p",href:"https://www.bertcmiller.com/2021/12/28/glimpse_nonce_reuse.html"},"glimpse")," into some of the MEV bots targeting tail-end opportunities out there, preying on obscure cryptographic inefficiencies"),(0,n.kt)("h3",{id:"preparing-for-proof-of-stake-ethereum"},"Preparing for Proof of Stake Ethereum"),(0,n.kt)("p",null,"Ethereum will soon transition to a proof of stake consensus protocol in an event called 'The Merge'. Anticipating this important change, we released on November 4th ",(0,n.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/mev-boost-merge-ready-flashbots-architecture/11177"},"MEV-Boost: Merge-ready Flashbots Architecture"),", where we outline a design for a marketplace for block construction (or block proposer/builder separation, PBS) compatible with the upcoming Ethereum merge fork."),(0,n.kt)("p",null,"We implemented this prototype on the latest Kintsugi testnet, and walked through it during an Ethereum Core Developer call which you can watch ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ivcI_plFu1o"},"here"),"."),(0,n.kt)("p",null,"We also launched the ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/flashbots/announcing-the-flashbots-eth2-working-group-599b2b92634b"},"Flashbots Eth2 Working Group"),", a working group for flashbots and teams building, staking, and validating in proof of stake Ethereum to come together to ensure that we can continue developing and promoting the adoption of an effective MEV solution on Ethereum post-merge. The working group will be operating in an open and credibly neutral manner, just like Flashbots, and will not be exclusive to a small group of insiders or favor certain groups over others."),(0,n.kt)("p",null,"Since the announcement, the working group has grown to more than 28 members from the validating, staking, client, and infrastructure provider communities."),(0,n.kt)("h2",{id:"flashbots-protect"},"Flashbots Protect"),(0,n.kt)("p",null,"On October 6th, we ",(0,n.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-protect/overview/"},"released")," Flashbots Protect. Protect allows everyday Ethereum users and developers to enjoy frontrunning protection. Specifically, it abstracts away the complexity of submitting bundles to the Flashbots Auction and makes integrating it as simple as adding an RPC URL to your Metamask."),(0,n.kt)("p",null,"Since the release, we've gradually added more features to it, like ",(0,n.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-protect/rpc/cancellations"},"cancellation")," of private transactions and an ",(0,n.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-protect/rpc/status-api"},"API")," to get pending transaction status. The UX has also been improved because Etherscan integrated our pending status API, and are working with rollup providers to help settle large transactions."),(0,n.kt)("p",null,"In the coming months, we'll be integrating Protect with various dApps and ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/alchemistcoin/how-to-add-flashbots-protect-rpc-to-your-metamask-3f1412a16787"},"wallets"),", and will offer offer new features, improve inclusion rates, and make Flashbots Protect onboarding/integration easier."),(0,n.kt)("h2",{id:"flashbots-data"},"Flashbots Data"),(0,n.kt)("p",null,"The Data team has been focused on rewriting mev-inspect from Rust to Python to make it easier for others to contribute to the codebase."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-inspect-py"},"mev-inspect-py")," comes with many improvements, including several orders of magnitude faster analysis of blocks and a much smoother contributor flow."),(0,n.kt)("p",null,"In order to encourage others to collaborate, resources have also been pubished such as a ",(0,n.kt)("a",{parentName:"p",href:"https://writings.flashbots.net/writings/the-anatomy-of-an-inspector/"},"step-by-step walkthrough")," by Robert Miller of how to add a new MEV inspector using as an example a cryptopunk snipers MEV inspector, and a walkthrough of the mev-inspect-py codebase you can watch ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/Fuw891c4vA8"},"here"),"."),(0,n.kt)("p",null,"Thanks to the many awesome community contributors to Inspect for PRs such as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-inspect-py/pull/210"},"this one")," by tmilukin and that ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-inspect-py/pull/109"},"one")," by mazzafish, and to the users trying it out and giving us feedback on what isn't work for them!"),(0,n.kt)("p",null,"In the coming months, we will be updating mev-explore by replacing its backend with mev-inspect-py, revamp other Flashbots dashboards and aim to make mev-inspect data be more accessible to the public."),(0,n.kt)("h2",{id:"flashbots-research"},"Flashbots Research"),(0,n.kt)("p",null,"As we continued research on Proof of Stake Ethereum (FRP-15), we also turned our attention to MEV on Layer 2s and other chains (FRP-16). Out of this work, we released the first paper out of Flashbots Research on December 2nd called ",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2112.01472"},(0,n.kt)("em",{parentName:"a"},"Unity is Strength: A Formalization of Cross-Domain Maximal Extractable Value")),". The paper formalizes a definition of cross-domain MEV in a multi-chain future, as well as possible negative externalities that could arise from cross-domain MEV extraction."),(0,n.kt)("p",null,"As a companion post to the paper, Flashbots researcher Alejo Salles published ",(0,n.kt)("a",{parentName:"p",href:"https://writings.flashbots.net/research/formalization-mev"},(0,n.kt)("em",{parentName:"a"},"On the Formalization of MEV")),". The post presents formal definitions of MEV that improve on issues encountered in previous works and community misconceptions. It also paves the way for a more systematic approach in studying MEV by highlighting many of the subtleties involved in giving a robust MEV formalization."),(0,n.kt)("p",null,"We ran a research workshop on the paper which you can watch ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/uR0Z0nWXeFU"},"here"),", and were happy to see Vitalik Buterin use the paper in ",(0,n.kt)("a",{parentName:"p",href:"https://vitalik.ca/general/2021/12/06/endgame.html"},(0,n.kt)("em",{parentName:"a"},"Endgame"))," to reason about block builder centralization in a 'many rollups' world."),(0,n.kt)("p",null,"In the coming months, we will be working on EVM parallelization (and many other useful relay simulation optimizations), MEV taxonomy, and follow-up works on cross-domain MEV, as well as supporting research on the Proposer-Builder Separation. We are also expanding and hiring talented researchers! If you are interested, please reach out!"),(0,n.kt)("h2",{id:"community"},"Community"),(0,n.kt)("h3",{id:"whitehat"},"Whitehat"),(0,n.kt)("p",null,"The Flashbots Whitehat community has executed 100 successful rescues in the last 6 months. Activities are ramping up to more than 200 rescue requests a month, and more people have joined the effort to support it."),(0,n.kt)("p",null,"Shout out to the amazing ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/epheph"},"Scott Bigelow"),", ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/0xdeadf4ce"},"0xdeadf4ce"),", ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/amanusk_"},"amanusk"),", ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/zeroXbrock"},"zeroXbrock"),", ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/sipox11"},"sipox11"),", mov and ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/MevRefund"},"Riposte")," for pulling off these rescues!"),(0,n.kt)("p",null,"Some highlights:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On Dec 21st in the wake of a $27m whitehat rescue by samczsun and others, the Gelato team, and Flashbots community members (whitehat searchers) 0x911, imagine, Robert Miller helped ",(0,n.kt)("a",{parentName:"li",href:"https://medium.com/gelato-network/sorbet-finance-vulnerability-post-mortem-6f8fba78f109"},"rescue")," user funds that were at risk from an attacker."),(0,n.kt)("li",{parentName:"ul"},"Kane Wallmann used Flashbots Auction to ",(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@kanewallmann_71759/recovering-assets-from-a-hacked-account-with-flashbots-bfe920435fb6"},"recover")," $13k worth of ENS tokens from a hacked account and return them to their rightful owner."),(0,n.kt)("li",{parentName:"ul"},"Steve Pikelny shared about their Flashbots ",(0,n.kt)("a",{parentName:"li",href:"https://steviep.xyz/txt/compromised"},"recovery experience")," saving contract ownership the hacker did not know about until it was too late!")),(0,n.kt)("h3",{id:"public-appearances"},"Public appearances"),(0,n.kt)("p",null,"After several months without one, we hosted a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/pm/issues/98"},"Roast"),' entitled "',(0,n.kt)("em",{parentName:"p"},"PBS on Ethereum Roadmap"),'" on Dec 3rd, covering several Proposer-Builder Separation-related research proposals/WIPs. Watch the recording ',(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/8mcm-jT2nq4"},"here"),"."),(0,n.kt)("p",null,"Flashbots was covered in Bloomberg's article ",(0,n.kt)("a",{parentName:"p",href:"https://www.bloomberg.com/news/articles/2021-09-23/crypto-trading-how-flashbots-work-to-front-run-ether-and-other-coin-purchases"},"Robot Crypto Traders Are the New Flash Boys"),"."),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("p",null,"We released a ",(0,n.kt)("a",{parentName:"p",href:"https://writings.flashbots.net"},"blog")," website where we've aggregated all our written content. This should make it easier for our community to find things we've written."),(0,n.kt)("p",null,"We also aggregated all our videos on a ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCclbTgsnYUy3vmrptIqCmqQ"},"Youtube channel")," which includes ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCclbTgsnYUy3vmrptIqCmqQ/playlists"},"playlists")," for all the Roasts, research workshops, tutorials and community events we participated in."),(0,n.kt)("p",null,"Shoutout to awesome community resources we've seen shared around Twitter and Github such as ",(0,n.kt)("a",{parentName:"p",href:"https://calblockchain.mirror.xyz/c56CHOu-Wow_50qPp2Wlg0rhUvdz1HLbGSUWlB_KX9o"},"Moebius' ",(0,n.kt)("em",{parentName:"a"},"0 to 1 Guide To MEV")," "),"."),(0,n.kt)("h2",{id:"get-involved"},"Get involved"),(0,n.kt)("p",null,"At Flashbots, we research and build systems around MEV, and we would love to collaborate with you. We are a distributed organization with the principles of a ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=T0fAznO1wA8"},"pirate hacker collective"),", and have several ",(0,n.kt)("a",{parentName:"p",href:"https://www.notion.so/flashbots/Flashbots-Job-Board-94d53cb01ef04a9484711dacf18739e3"},"open positions"),". We also issue grants to external researchers doing work aligned with ours, please find out more in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-research"},"our Research repository"),", or join our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/invite/7hvTycdNcK"},"Discord"),"!"))}m.isMDXComponent=!0}}]);