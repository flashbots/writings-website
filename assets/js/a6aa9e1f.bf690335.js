(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[3089],{4284:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(7294),r=a(6010),s=a(3721),l=a(3915);const i="containerRoot_MxZn",o="TOC_BWJh";const c=function(e){const{sidebar:t,toc:a,children:c,...m}=e;return n.createElement(s.Z,m,n.createElement("div",{className:(0,r.Z)("container","margin-vert--md",i)},n.createElement("div",{className:"row"},n.createElement("main",{className:(0,r.Z)("col",{"col--12":!0}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&n.createElement("div",{className:(0,r.Z)("col","col--2",o)},n.createElement(l.Z,{toc:a})))))}},8787:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>_});var n=a(7294),r=a(2263),s=a(4284),l=a(6719),i=a(4973);const o=e=>{let{metadata:{previousPage:t,nextPage:a}}=e;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement("div",{className:"pagination-nav__link",onClick:t},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(i.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement("div",{className:"pagination-nav__link",onClick:a},n.createElement("div",{className:"pagination-nav__label"},n.createElement(i.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var c=a(6010),m=a(1917);const u="tags_Rk3g",d="tag_eGB+";function h(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("span",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Filter:")),n.createElement("ul",{className:(0,c.Z)(u,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:d},n.createElement(m.Z,{name:t,permalink:a}))}))))}var f=a(6848);const g="blogPageRoot_7epq",v="header_qwT2",b="root_kCQX",p=e=>{let{setValue:t}=e;return n.createElement("input",{placeholder:"Search",className:b,autoFocus:!0,onChange:e=>t(e.target.value),type:"text"})};const _=function(e){const{metadata:t,items:a,location:i}=e,{siteConfig:{title:m}}=(0,r.Z)(),{blogDescription:u,blogTitle:d,permalink:b}=t,_="/"===b?m:d,E=(e=>{let{items:t}=e;const a={};return t.map((e=>{let{content:t}=e;return t.metadata.tags.map((e=>{a[e.label]?a[e.label].count++:a[e.label]={permalink:e.permalink,count:1}}))})),Object.keys(a).map((e=>({label:e,permalink:a[e].permalink,count:a[e].count})))})(e),[Z,N]=(0,n.useState)(0),w=(0,n.useMemo)((()=>{return e=[...a],t=Z+1,n=10,t=(t=Math.abs(t))>0?t-1:t,n=n<1?1:n,[...e.filter(((e,a)=>a>=t*n&&a<(t+1)*n))];var e,t,n}),[a,Z]),k=(0,n.useMemo)((()=>({...t,blogTitle:t.blogTitle,blogDescription:t.blogDescription,page:Z,postsPerPage:10,nextPage:10*(Z+1)<t.totalCount?()=>N(Z+1):void 0,previousPage:Z>=1?()=>N(Z-1):void 0,totalPages:Math.ceil(t.totalCount/10)})),[t,Z]),[y,$]=(0,n.useState)("");return n.createElement(s.Z,{title:_,description:u,wrapperClassName:(0,c.Z)(f.kM.wrapper.blogPages,g),pageClassName:f.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},n.createElement("div",{className:v},n.createElement("h1",null,"Writings"),n.createElement("p",null,"A collection of articles and papers from Flashbots.")),n.createElement(h,{tags:E}),n.createElement(p,{setValue:$}),w.filter((e=>""===y||e.content.frontMatter.title.toLowerCase().includes(y.toLowerCase()))).map((e=>{let{content:t}=e;return n.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(o,{metadata:k}))}},6719:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var n=a(7294),r=a(6010),s=a(3905),l=a(4973),i=a(6742),o=a(4996),c=a(6848),m=a(90);const u="blogPostTitle_RC3s",d="blogPostData_A2Le",h="fixedColor_BDNu";const f=function(e){let{author:t}=e;const{name:a,title:r,url:s,imageURL:l}=t;return n.createElement("div",{className:"avatar margin-bottom--sm"},a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(i.Z,{className:h,href:s,itemProp:"url"},n.createElement("span",{itemProp:"name"},a)))))},g="authorCol_WtYC";function v(e){let{authors:t,assets:a}=e;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>n.createElement("div",{className:(0,r.Z)("col col--6",g),key:t},n.createElement(f,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}var b=a(7484),p=a.n(b);const _=function(e){const t=function(){const{selectMessage:e}=(0,c.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,o.C)(),{children:h,frontMatter:f,assets:g,metadata:b,truncated:_,isBlogPostPage:E=!1}=e,{date:Z,formattedDate:N,permalink:w,tags:k,readingTime:y,title:$,editUrl:D,authors:C}=b,M=g.image??f.image;return n.createElement("article",{className:E?void 0:"margin-bottom--lg",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=E?"h1":"h2";return n.createElement("header",null,n.createElement(e,{className:u,itemProp:"headline"},E?$:n.createElement(i.Z,{itemProp:"url",to:w},$)),n.createElement("div",{className:(0,r.Z)(d,"margin-vert--md")},n.createElement("time",{dateTime:Z,itemProp:"datePublished"},p()(Z).format("DD.MM.YY")),void 0!==y&&n.createElement(n.Fragment,null," \xb7 ",t(y))),n.createElement(v,{authors:C,assets:g}))})(),M&&n.createElement("meta",{itemProp:"image",content:a(M,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(s.Zo,{components:m.Z},h)))}},3721:(e,t,a)=>{"use strict";a.d(t,{Z:()=>V});var n=a(7294),r=a(6010),s=a(3946),l=a(1261),i=a(7462),o=a(4973),c=a(1875),m=a(9189),u=a(5350),d=a(6848),h=a(8232),f=a(1839),g=a(3783),v=a(907),b=a(6047),p=a(6742),_=a(4996),E=a(2263);const Z="logoTitle_PCW0",N="wrapper_BbhS",w=e=>{const{siteConfig:{title:t}}=(0,E.Z)(),{navbar:{title:a,logo:s={src:""}}}=(0,d.LU)(),{imageClassName:l,titleClassName:o,...c}=e,m=(0,_.Z)(s.href||"/");return n.createElement(p.Z,(0,i.Z)({className:N,to:m},c,s.target&&{target:s.target}),n.createElement("svg",{width:"12",height:"14",viewBox:"0 0 12 14"},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.07289 0L7.91879 0.483459L6.631 4.76674H11.5178L4.19989 12.679L3.35398 12.1956L4.72089 7.64736H0L7.07289 0ZM5.20514 6.03608L6.33835 2.26697L2.28701 6.64736H5.02136L5.20514 6.03608ZM4.93407 10.4124L9.23077 5.76674H6.33078L6.16271 6.3243L4.93407 10.4124Z",fill:"var(--ifm-font-color-base)"})),null!=a&&n.createElement("span",{className:(0,r.Z)(o,Z)},a))};var k=a(4478),y=a(2670);const $={"layoutDefaults_src-theme-Layout-styles-module":"layoutDefaults_src-theme-Layout-styles-module_CJDC",toggle:"toggle_F2cT",navbarHideable:"navbarHideable_fBz2",navbarHidden:"navbarHidden_190W",navbarSidebarToggle:"navbarSidebarToggle_cnNu",navbarSidebarCloseSvg:"navbarSidebarCloseSvg_noAl",logo:"logo_0HPH",title:"title_WuSz",fixFlex:"fixFlex_OJh4",navRoot:"navRoot_LKda",customNav:"customNav_XdyM",navItems:"navItems_TfOx"},D="right";function C(){return(0,d.LU)().navbar.items}function M(){const{colorMode:{disableSwitch:e}}=(0,d.LU)(),{isDarkTheme:t,setLightTheme:a,setDarkTheme:r}=(0,u.Z)();return{isDarkTheme:t,toggle:(0,n.useCallback)((e=>e.target.checked?r():a()),[a,r]),disabled:e}}function S(e){let{sidebarShown:t,toggleSidebar:a}=e;(0,f.Z)(t);const s=C(),l=M(),c=function(e){let{sidebarShown:t,toggleSidebar:a}=e;const r=(0,d.g8)()?.({toggleSidebar:a}),s=(0,d.D9)(r),[l,i]=(0,n.useState)((()=>!1));(0,n.useEffect)((()=>{r&&!s&&i(!0)}),[r,s]);const o=!!r;return(0,n.useEffect)((()=>{o?t||i(!0):i(!1)}),[t,o]),{shown:l,hide:(0,n.useCallback)((()=>{i(!1)}),[]),content:r}}({sidebarShown:t,toggleSidebar:a});return n.createElement("div",{className:"navbar-sidebar"},n.createElement("div",{className:"navbar-sidebar__brand"},n.createElement(w,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!l.disabled&&n.createElement(m.Z,{className:$.navbarSidebarToggle,checked:l.isDarkTheme,onChange:l.toggle}),n.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:a},n.createElement(y.Z,{width:20,height:20,className:$.navbarSidebarCloseSvg}))),n.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":c.shown})},n.createElement("div",{className:"navbar-sidebar__item menu"},n.createElement("ul",{className:"menu__list"},s.map(((e,t)=>n.createElement(b.Z,(0,i.Z)({mobile:!0},e,{onClick:a,key:t})))))),n.createElement("div",{className:"navbar-sidebar__item menu"},s.length>0&&n.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:c.hide},n.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu,\xa0 inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),c.content)))}const L=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,d.LU)(),a=function(){const e=(0,g.Z)(),t="mobile"===e,[a,r]=(0,n.useState)(!1);(0,d.Rb)((()=>{a&&r(!1)}));const s=(0,n.useCallback)((()=>{r((e=>!e))}),[]);return(0,n.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:s,shown:a}}(),s=M(),l=(0,v.gA)(),{navbarRef:o,isNavbarVisible:u}=(0,h.Z)(e),f=C(),p=f.some((e=>"search"===e.type)),{leftItems:_,rightItems:E}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??D))),rightItems:e.filter((e=>"right"===(e.position??D)))}}(f);return n.createElement("nav",{ref:o,className:(0,r.Z)($.navRoot,"navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":a.shown,[$.navbarHideable]:e,[$.navbarHidden]:e&&!u})},n.createElement("div",{className:(0,r.Z)($.navbarInner,"navbar__inner")},n.createElement("div",{className:(0,r.Z)("navbar__items",$.fixFlex)},(f?.length>0||l)&&n.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:a.toggle,onKeyDown:a.toggle},n.createElement(k.Z,null)),n.createElement(w,{className:"navbar__brand",imageClassName:(0,r.Z)("navbar__logo",$.logo),titleClassName:(0,r.Z)("navbar__title",$.title)})),n.createElement("div",{className:(0,r.Z)("navbar__items navbar__items--right",$.fixFlex,$.navItems)},_.map(((e,t)=>n.createElement(b.Z,(0,i.Z)({},e,{key:t})))),E.map(((e,t)=>n.createElement(b.Z,(0,i.Z)({},e,{key:t})))),!s.disabled&&n.createElement(m.Z,{className:$.toggle,checked:s.isDarkTheme,onChange:s.toggle}),!p&&n.createElement(c.Z,null))),n.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:a.toggle}),a.shouldRender&&n.createElement(S,{sidebarShown:a.shown,toggleSidebar:a.toggle}))},T="footerLogoLink_94kH";var I=a(8465);function P(e){let{to:t,href:a,label:r,prependBaseUrlToHref:s,...l}=e;const o=(0,_.Z)(t),c=(0,_.Z)(a,{forcePrependBaseUrl:!0});return n.createElement(p.Z,(0,i.Z)({className:"footer__link-item"},a?{href:s?c:a}:{to:o},l),r)}const x=e=>{let{sources:t,alt:a}=e;return n.createElement(I.Z,{className:"footer__logo",alt:a,sources:t})};const H=function(){const{footer:e}=(0,d.LU)(),{copyright:t,links:a=[],logo:s={}}=e||{},l={light:(0,_.Z)(s.src),dark:(0,_.Z)(s.srcDark||s.src)};return e?n.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("div",{className:"container"},a&&a.length>0&&n.createElement("div",{className:"col footer__links"},a.map(((e,t)=>n.createElement("div",{key:t},null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"row footer__items"},e.items.map(((e,t)=>e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(P,e))))):null)))),(s||t)&&n.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&n.createElement("div",{className:"margin-bottom--sm"},s.href?n.createElement(p.Z,{href:s.href,className:T},n.createElement(x,{alt:s.alt,sources:l})):n.createElement(x,{alt:s.alt,sources:l})),t?n.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var O=a(3792),B=a(9757),R=a(8245);const A="layoutDefaults_XzHD";var U=a(6550);var W=a(340);const V=function(e){const{children:t,noFooter:a,wrapperClassName:i,pageClassName:o}=e;return(0,R.Z)(),(()=>{const e=["/writings/","/research/"],{pathname:t}=(0,U.TH)(),a=(0,_.Z)("/"),r=(0,U.k6)();(0,n.useEffect)((()=>{const n=e.find((e=>t.includes(e)));n&&r.push(`${a}${t.replace(n,"")}`)}),[t])})(),n.createElement(O.Z,null,n.createElement(W.c,null),n.createElement(B.Z,e),n.createElement(s.Z,null),n.createElement(l.Z,null),n.createElement(L,null),n.createElement("div",{className:(0,r.Z)(d.kM.wrapper.main,i,o,A)},t),!a&&n.createElement(H,null))}},4517:(e,t,a)=>{"use strict";a.d(t,{O:()=>m,Z:()=>h});var n=a(7462),r=a(7294),s=a(6010),l=a(6742),i=a(4996),o=a(3919),c=a(6047);function m(e){let{activeBasePath:t,activeBaseRegex:a,to:s,href:c,label:m,activeClassName:u="",prependBaseUrlToHref:d,...h}=e;const f=(0,i.Z)(s),g=(0,i.Z)(t),v=(0,i.Z)(c,{forcePrependBaseUrl:!0}),b=m&&c&&!(0,o.Z)(c);return r.createElement(l.Z,(0,n.Z)({},c?{href:d?v:c}:{isNavLink:!0,activeClassName:h.className?.includes(u)?"":u,to:f,...t||a?{isActive:(e,t)=>a?new RegExp(a).test(t.pathname):t.pathname.startsWith(g)}:null},h),b?r.createElement("span",null,m):m)}function u(e){let{className:t,isDropdownItem:a=!1,...l}=e;const i=r.createElement(m,(0,n.Z)({className:(0,s.Z)(a?"dropdown__link":"navbar__item navbar__link",t)},l));return a?r.createElement("li",null,i):i}function d(e){let{className:t,isDropdownItem:a,...l}=e;return r.createElement("li",{className:"menu__list-item"},r.createElement(m,(0,n.Z)({className:(0,s.Z)("menu__link",t)},l)))}const h=function(e){let{mobile:t=!1,position:a,...s}=e;const l=t?d:u;return r.createElement(l,(0,n.Z)({},s,{activeClassName:s.activeClassName??(0,c.E)(t)}))}},9061:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(7462),r=a(7294),s=a(4517),l=a(907),i=a(6010),o=a(6047),c=a(6848),m=a(8780);function u(e){let{docId:t,label:a,docsPluginId:u,...d}=e;const{activeVersion:h,activeDoc:f}=(0,l.Iw)(u),{preferredVersion:g}=(0,c.J)(u),v=(0,l.yW)(u),b=function(e,t){const a=e.flatMap((e=>e.docs)),n=a.find((e=>e.id===t));if(!n){const n=a.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${n}`)}return n}((0,m.uniq)([h,g,v].filter(Boolean)),t),p=(0,o.E)(d.mobile);return r.createElement(s.Z,(0,n.Z)({exact:!0},d,{className:(0,i.Z)(d.className,{[p]:f?.sidebar&&f.sidebar===b.sidebar}),activeClassName:p,label:a??b.id,to:b.path}))}},3886:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(7462),r=a(7294),s=a(4517),l=a(9553),i=a(907),o=a(6848),c=a(4973);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function u(e){let{mobile:t,docsPluginId:a,dropdownActiveClassDisabled:u,dropdownItemsBefore:d,dropdownItemsAfter:h,...f}=e;const g=(0,i.Iw)(a),v=(0,i.gB)(a),b=(0,i.yW)(a),{preferredVersion:p,savePreferredVersionName:_}=(0,o.J)(a);const E=function(){const e=v.map((e=>{const t=g?.alternateDocVersions[e.name]||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===g?.activeVersion,onClick:()=>{_(e.name)}}}));return[...d,...e,...h]}(),Z=g.activeVersion??p??b,N=t&&E?(0,c.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):Z.label,w=t&&E?void 0:m(Z).path;return E.length<=1?r.createElement(s.Z,(0,n.Z)({},f,{mobile:t,label:N,to:w,isActive:u?()=>!1:void 0})):r.createElement(l.Z,(0,n.Z)({},f,{mobile:t,label:N,to:w,items:E,isActive:u?()=>!1:void 0}))}},5412:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(7462),r=a(7294),s=a(4517),l=a(907),i=a(6848);function o(e){let{label:t,to:a,docsPluginId:o,...c}=e;const m=(0,l.zu)(o),{preferredVersion:u}=(0,i.J)(o),d=(0,l.yW)(o),h=m??u??d,f=t??h.label,g=a??(e=>e.docs.find((t=>t.id===e.mainDocId)))(h).path;return r.createElement(s.Z,(0,n.Z)({},c,{label:f,to:g}))}},9553:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),s=a(6010),l=a(6848),i=a(4517),o=a(6047);function c(e,t){return e.some((e=>function(e,t){return!!(0,l.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function m(e){let{items:t,position:a,className:l,...c}=e;const m=(0,r.useRef)(null),u=(0,r.useRef)(null),[d,h]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]),r.createElement("div",{ref:m,className:(0,s.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===a,"dropdown--show":d})},r.createElement(i.O,(0,n.Z)({className:(0,s.Z)("navbar__link",l)},c,{onClick:c.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),h(!d))}}),c.children??c.label),r.createElement("ul",{ref:u,className:"dropdown__menu"},t.map(((e,a)=>r.createElement(o.Z,(0,n.Z)({isDropdownItem:!0,onKeyDown:e=>{if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);const t=m.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active"},e,{key:a}))))))}function u(e){let{items:t,className:a,position:m,...u}=e;const d=(0,l.be)(),h=c(t,d),{collapsed:f,toggleCollapsed:g,setCollapsed:v}=(0,l.uR)({initialState:()=>!h});return(0,r.useEffect)((()=>{h&&v(!h)}),[d,h]),r.createElement("li",{className:(0,s.Z)("menu__list-item",{"menu__list-item--collapsed":f})},r.createElement(i.O,(0,n.Z)({role:"button",className:(0,s.Z)("menu__link menu__link--sublist",a)},u,{onClick:e=>{e.preventDefault(),g()}}),u.children??u.label),r.createElement(l.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},t.map(((e,t)=>r.createElement(o.Z,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:u.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const d=function(e){let{mobile:t=!1,...a}=e;const n=t?u:m;return r.createElement(n,a)}},6047:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v,E:()=>g});var n=a(7294),r=a(4517),s=a(9553),l=a(7462),i=a(3264),o=a(2263),c=a(6848);const m="iconLanguage_zID8";function u(e){let{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:r,...u}=e;const{i18n:{currentLocale:d,locales:h,localeConfigs:f}}=(0,o.Z)(),g=(0,c.l5)();function v(e){return f[e].label}const b=[...a,...h.map((e=>{const t=`pathname://${g.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:v(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],p=t?"Languages":v(d);return n.createElement(s.Z,(0,l.Z)({},u,{href:"#",mobile:t,label:n.createElement("span",null,n.createElement(i.Z,{className:m}),n.createElement("span",null,p)),items:b}))}var d=a(1875);function h(e){let{mobile:t}=e;return t?null:n.createElement(d.Z,null)}const f={default:()=>r.Z,localeDropdown:()=>u,search:()=>h,dropdown:()=>s.Z,docsVersion:()=>a(5412).Z,docsVersionDropdown:()=>a(3886).Z,doc:()=>a(9061).Z};const g=e=>e?"menu__link--active":"navbar__link--active";function v(e){let{type:t,...a}=e;const r=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a.items),s=(e=>{const t=f[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()})(r);return n.createElement(s,a)}},3915:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(7294),r=a(6010),s=a(5035);const l="tableOfContents_H-s0",i="table-of-contents__link",o={linkClassName:i,linkActiveClassName:"table-of-contents__link--active"};function c(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:i,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(c,{isChild:!0,toc:e.children}))))):null}const m=function(e){let{toc:t}=e;return(0,s.Z)(o),n.createElement("div",{className:(0,r.Z)(l,"thin-scrollbar")},n.createElement(c,{toc:t}))}},1917:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(7294),r=a(6010),s=a(6742);const l="tag_6TIk",i="tagRegular_fTkM",o="tagWithCount_4sRq";const c=function(e){const{permalink:t,name:a,count:c}=e;return n.createElement(s.Z,{href:t,className:(0,r.Z)(l,{[i]:!c,[o]:c})},a,c&&n.createElement("span",null,c))}},7484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,a=36e5,n="millisecond",r="second",s="minute",l="hour",i="day",o="week",c="month",m="quarter",u="year",d="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return"["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}},b=function(e,t,a){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(a)+e},p={s:b,z:function(e){var t=-e.utcOffset(),a=Math.abs(t),n=Math.floor(a/60),r=a%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(r,2,"0")},m:function e(t,a){if(t.date()<a.date())return-e(a,t);var n=12*(a.year()-t.year())+(a.month()-t.month()),r=t.clone().add(n,c),s=a-r<0,l=t.clone().add(n+(s?-1:1),c);return+(-(n+(a-r)/(s?r-l:l-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:o,d:i,D:d,h:l,m:s,s:r,ms:n,Q:m}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",E={};E[_]=v;var Z=function(e){return e instanceof y},N=function e(t,a,n){var r;if(!t)return _;if("string"==typeof t){var s=t.toLowerCase();E[s]&&(r=s),a&&(E[s]=a,r=s);var l=t.split("-");if(!r&&l.length>1)return e(l[0])}else{var i=t.name;E[i]=t,r=i}return!n&&r&&(_=r),r||!n&&_},w=function(e,t){if(Z(e))return e.clone();var a="object"==typeof t?t:{};return a.date=e,a.args=arguments,new y(a)},k=p;k.l=N,k.i=Z,k.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var y=function(){function v(e){this.$L=N(e.locale,null,!0),this.parse(e)}var b=v.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,a=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(f);if(n){var r=n[2]-1||0,s=(n[7]||"0").substring(0,3);return a?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return k},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var a=w(e);return this.startOf(t)<=a&&a<=this.endOf(t)},b.isAfter=function(e,t){return w(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<w(e)},b.$g=function(e,t,a){return k.u(e)?this[t]:this.set(a,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var a=this,n=!!k.u(t)||t,m=k.p(e),h=function(e,t){var r=k.w(a.$u?Date.UTC(a.$y,t,e):new Date(a.$y,t,e),a);return n?r:r.endOf(i)},f=function(e,t){return k.w(a.toDate()[e].apply(a.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),a)},g=this.$W,v=this.$M,b=this.$D,p="set"+(this.$u?"UTC":"");switch(m){case u:return n?h(1,0):h(31,11);case c:return n?h(1,v):h(0,v+1);case o:var _=this.$locale().weekStart||0,E=(g<_?g+7:g)-_;return h(n?b-E:b+(6-E),v);case i:case d:return f(p+"Hours",0);case l:return f(p+"Minutes",1);case s:return f(p+"Seconds",2);case r:return f(p+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var a,o=k.p(e),m="set"+(this.$u?"UTC":""),h=(a={},a[i]=m+"Date",a[d]=m+"Date",a[c]=m+"Month",a[u]=m+"FullYear",a[l]=m+"Hours",a[s]=m+"Minutes",a[r]=m+"Seconds",a[n]=m+"Milliseconds",a)[o],f=o===i?this.$D+(t-this.$W):t;if(o===c||o===u){var g=this.clone().set(d,1);g.$d[h](f),g.init(),this.$d=g.set(d,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[k.p(e)]()},b.add=function(n,m){var d,h=this;n=Number(n);var f=k.p(m),g=function(e){var t=w(h);return k.w(t.date(t.date()+Math.round(e*n)),h)};if(f===c)return this.set(c,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===i)return g(1);if(f===o)return g(7);var v=(d={},d[s]=t,d[l]=a,d[r]=e,d)[f]||1,b=this.$d.getTime()+n*v;return k.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,a=this.$locale();if(!this.isValid())return a.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",r=k.z(this),s=this.$H,l=this.$m,i=this.$M,o=a.weekdays,c=a.months,m=function(e,a,r,s){return e&&(e[a]||e(t,n))||r[a].slice(0,s)},u=function(e){return k.s(s%12||12,e,"0")},d=a.meridiem||function(e,t,a){var n=e<12?"AM":"PM";return a?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:i+1,MM:k.s(i+1,2,"0"),MMM:m(a.monthsShort,i,c,3),MMMM:m(c,i),D:this.$D,DD:k.s(this.$D,2,"0"),d:String(this.$W),dd:m(a.weekdaysMin,this.$W,o,2),ddd:m(a.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:k.s(s,2,"0"),h:u(1),hh:u(2),a:d(s,l,!0),A:d(s,l,!1),m:String(l),mm:k.s(l,2,"0"),s:String(this.$s),ss:k.s(this.$s,2,"0"),SSS:k.s(this.$ms,3,"0"),Z:r};return n.replace(g,(function(e,t){return t||f[e]||r.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,d,h){var f,g=k.p(d),v=w(n),b=(v.utcOffset()-this.utcOffset())*t,p=this-v,_=k.m(this,v);return _=(f={},f[u]=_/12,f[c]=_,f[m]=_/3,f[o]=(p-b)/6048e5,f[i]=(p-b)/864e5,f[l]=p/a,f[s]=p/t,f[r]=p/e,f)[g]||p,h?_:k.a(_)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return E[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var a=this.clone(),n=N(e,t,!0);return n&&(a.$L=n),a},b.clone=function(){return k.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},v}(),$=y.prototype;return w.prototype=$,[["$ms",n],["$s",r],["$m",s],["$H",l],["$W",i],["$M",c],["$y",u],["$D",d]].forEach((function(e){$[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,y,w),e.$i=!0),w},w.locale=N,w.isDayjs=Z,w.unix=function(e){return w(1e3*e)},w.en=E[_],w.Ls=E,w.p={},w}()}}]);