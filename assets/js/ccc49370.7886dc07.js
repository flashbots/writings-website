(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[6103],{4284:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(3366),r=n(7294),i=n(6010),o=n(1401),l=n(3915),s="containerRoot_3RmU",c="TOC_1KIS",u=["sidebar","toc","children"];var m=function(e){e.sidebar;var t=e.toc,n=e.children,m=(0,a.Z)(e,u);return r.createElement(o.Z,m,r.createElement("div",{className:(0,i.Z)("container","margin-vert--md",s)},r.createElement("div",{className:"row"},r.createElement("main",{className:(0,i.Z)("col",{"col--12":!0}),itemScope:!0,itemType:"http://schema.org/Blog"},n),t&&r.createElement("div",{className:(0,i.Z)("col","col--2",c)},r.createElement(l.Z,{toc:t})))))}},6719:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var a=n(7294),r=n(6010),i=n(3905),o=n(4973),l=n(6742),s=n(4996),c=n(941),u=n(90),m="blogPostTitle_nmLu",d="blogPostData_3WzT",f="fixedColor_3yYP";var v=function(e){var t=e.author,n=t.name,r=(t.title,t.url);return t.imageURL,a.createElement("div",{className:"avatar margin-bottom--sm"},n&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(l.Z,{className:f,href:r,itemProp:"url"},a.createElement("span",{itemProp:"name"},n)))))},h="authorCol_HqTB";function g(e){var t=e.authors,n=e.assets;return 0===t.length?a.createElement(a.Fragment,null):a.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var i;return a.createElement("div",{className:(0,r.Z)("col col--6",h),key:t},a.createElement(v,{author:Object.assign({},e,{imageURL:null!=(i=n.authorsImageUrls[t])?i:e.imageURL})}))})))}var b=n(7484),p=n.n(b);var _=function(e){var t,n,f,v=(n=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=(0,s.C)().withBaseUrl,b=e.children,_=e.frontMatter,E=e.assets,Z=e.metadata,N=(e.truncated,e.isBlogPostPage),w=void 0!==N&&N,y=Z.date,k=(Z.formattedDate,Z.permalink),$=(Z.tags,Z.readingTime),D=Z.title,S=(Z.editUrl,Z.authors),M=null!=(t=E.image)?t:_.image;return a.createElement("article",{className:w?void 0:"margin-bottom--lg",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(f=w?"h1":"h2",a.createElement("header",null,a.createElement(f,{className:m,itemProp:"headline"},w?D:a.createElement(l.Z,{itemProp:"url",to:k},D)),a.createElement("div",{className:(0,r.Z)(d,"margin-vert--md")},a.createElement("time",{dateTime:y,itemProp:"datePublished"},p()(y).format("DD.MM.YY")),void 0!==$&&a.createElement(a.Fragment,null," \xb7 ",v($))),a.createElement(g,{authors:S,assets:E}))),M&&a.createElement("meta",{itemProp:"image",content:h(M,{absolute:!0})}),a.createElement("div",{className:"markdown",itemProp:"articleBody"},a.createElement(i.Zo,{components:u.Z},b)))}},6658:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(7294),r=n(1217),i=n(4284),o=n(6719),l=n(4973),s=n(6742);var c=function(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a.createElement("div",{className:"pagination-nav__item"},n&&a.createElement(s.Z,{className:"pagination-nav__link",to:n.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(l.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",n.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&a.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(l.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},u=n(941);var m=function(e){var t,n=e.content,l=e.sidebar,s=n.frontMatter,m=n.assets,d=n.metadata,f=d.title,v=d.description,h=d.nextItem,g=d.prevItem,b=(d.permalink,d.date),p=d.tags,_=d.authors,E=s.hide_table_of_contents,Z=s.keywords,N=null!=(t=m.image)?t:s.image;return a.createElement(i.Z,{wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogPostPage,sidebar:l,toc:!E&&n.toc?n.toc:void 0},a.createElement(r.Z,{title:f,description:v,keywords:Z,image:N},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:b}),_.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:_.map((function(e){return e.url})).filter(Boolean).join(",")}),p.length>0&&a.createElement("meta",{property:"article:tag",content:p.map((function(e){return e.label})).join(",")})),a.createElement(o.Z,{frontMatter:s,assets:m,metadata:d,isBlogPostPage:!0},a.createElement(n,null)),(h||g)&&a.createElement(c,{nextItem:h,prevItem:g}))}},1401:function(e,t,n){"use strict";n.d(t,{Z:function(){return Y}});var a=n(7294),r=n(6010),i=n(3946),o=n(1261),l=n(7462),s=n(4973),c=n(1875),u=n(9189),m=n(5350),d=n(941),f=n(8232),v=n(1839),h=n(3783),g=n(907),b=n(6047),p=n(3366),_=n(6742),E=n(4996),Z=n(2263),N="logoTitle_2plQ",w="wrapper_1M7a",y=["imageClassName","titleClassName"],k=function(e){(0,Z.Z)().siteConfig.title;var t=(0,d.LU)().navbar,n=t.title,i=t.logo,o=void 0===i?{src:""}:i,s=(e.imageClassName,e.titleClassName),c=(0,p.Z)(e,y),u=(0,E.Z)(o.href||"/");return a.createElement(_.Z,(0,l.Z)({className:w,to:u},c,o.target&&{target:o.target}),a.createElement("svg",{width:"12",height:"14",viewBox:"0 0 12 14"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.07289 0L7.91879 0.483459L6.631 4.76674H11.5178L4.19989 12.679L3.35398 12.1956L4.72089 7.64736H0L7.07289 0ZM5.20514 6.03608L6.33835 2.26697L2.28701 6.64736H5.02136L5.20514 6.03608ZM4.93407 10.4124L9.23077 5.76674H6.33078L6.16271 6.3243L4.93407 10.4124Z",fill:"var(--ifm-font-color-base)"})),null!=n&&a.createElement("span",{className:(0,r.Z)(s,N)},n))},$=n(4478),D=n(2670),S={"layoutDefaults_src-theme-Layout-styles-module":"layoutDefaults_src-theme-Layout-styles-module_3uLU",toggle:"toggle_268h",navbarHideable:"navbarHideable_qfwt",navbarHidden:"navbarHidden_3G8N",navbarSidebarToggle:"navbarSidebarToggle_jHOO",navbarSidebarCloseSvg:"navbarSidebarCloseSvg_3glt",logo:"logo_2BbA",title:"title_2fsg",fixFlex:"fixFlex_19nV",navRoot:"navRoot_1Vd8",customNav:"customNav_qIxq",navItems:"navItems_l2fJ"},M="right";function C(){return(0,d.LU)().navbar.items}function I(){var e=(0,d.LU)().colorMode.disableSwitch,t=(0,m.Z)(),n=t.isDarkTheme,r=t.setLightTheme,i=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?i():r()}),[r,i]),disabled:e}}function L(e){var t=e.sidebarShown,n=e.toggleSidebar;(0,v.Z)(t);var i=C(),o=I(),c=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,i=null==(t=(0,d.g8)())?void 0:t({toggleSidebar:r}),o=(0,d.D9)(i),l=(0,a.useState)((function(){return!1})),s=l[0],c=l[1];(0,a.useEffect)((function(){i&&!o&&c(!0)}),[i,o]);var u=!!i;return(0,a.useEffect)((function(){u?n||c(!0):c(!1)}),[n,u]),{shown:s,hide:(0,a.useCallback)((function(){c(!1)}),[]),content:i}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(k,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!o.disabled&&a.createElement(u.Z,{className:S.navbarSidebarToggle,checked:o.isDarkTheme,onChange:o.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(D.Z,{width:20,height:20,className:S.navbarSidebarCloseSvg}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":c.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},i.map((function(e,t){return a.createElement(b.Z,(0,l.Z)({mobile:!0},e,{onClick:n,key:t}))})))),a.createElement("div",{className:"navbar-sidebar__item menu"},i.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:c.hide},a.createElement(s.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu,\xa0 inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),c.content)))}var T=function(){var e,t=(0,d.LU)().navbar,n=t.hideOnScroll,i=t.style,o=function(){var e=(0,h.Z)(),t="mobile"===e,n=(0,a.useState)(!1),r=n[0],i=n[1];(0,d.Rb)((function(){r&&i(!1)}));var o=(0,a.useCallback)((function(){i((function(e){return!e}))}),[]);return(0,a.useEffect)((function(){"desktop"===e&&i(!1)}),[e]),{shouldRender:t,toggle:o,shown:r}}(),s=I(),m=(0,g.gA)(),v=(0,f.Z)(n),p=v.navbarRef,_=v.isNavbarVisible,E=C(),Z=E.some((function(e){return"search"===e.type})),N=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:M)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:M)}))}}(E),w=N.leftItems,y=N.rightItems;return a.createElement("nav",{ref:p,className:(0,r.Z)(S.navRoot,"navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":o.shown},e[S.navbarHideable]=n,e[S.navbarHidden]=n&&!_,e))},a.createElement("div",{className:(0,r.Z)(S.navbarInner,"navbar__inner")},a.createElement("div",{className:(0,r.Z)("navbar__items",S.fixFlex)},((null==E?void 0:E.length)>0||m)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:o.toggle,onKeyDown:o.toggle},a.createElement($.Z,null)),a.createElement(k,{className:"navbar__brand",imageClassName:(0,r.Z)("navbar__logo",S.logo),titleClassName:(0,r.Z)("navbar__title",S.title)})),a.createElement("div",{className:(0,r.Z)("navbar__items navbar__items--right",S.fixFlex,S.navItems)},w.map((function(e,t){return a.createElement(b.Z,(0,l.Z)({},e,{key:t}))})),y.map((function(e,t){return a.createElement(b.Z,(0,l.Z)({},e,{key:t}))})),!s.disabled&&a.createElement(u.Z,{className:S.toggle,checked:s.isDarkTheme,onChange:s.toggle}),!Z&&a.createElement(c.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:o.toggle}),o.shouldRender&&a.createElement(L,{sidebarShown:o.shown,toggleSidebar:o.toggle}))},P="footerLogoLink_qW4Z",x=n(8465),B=["to","href","label","prependBaseUrlToHref"];function O(e){var t=e.to,n=e.href,r=e.label,i=e.prependBaseUrlToHref,o=(0,p.Z)(e,B),s=(0,E.Z)(t),c=(0,E.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(_.Z,(0,l.Z)({className:"footer__link-item"},n?{href:i?c:n}:{to:s},o),r)}var H=function(e){var t=e.sources,n=e.alt;return a.createElement(x.Z,{className:"footer__logo",alt:n,sources:t})};var A=function(){var e=(0,d.LU)().footer,t=e||{},n=t.copyright,i=t.links,o=void 0===i?[]:i,l=t.logo,s=void 0===l?{}:l,c={light:(0,E.Z)(s.src),dark:(0,E.Z)(s.srcDark||s.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},o&&o.length>0&&a.createElement("div",{className:"col footer__links"},o.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"row footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(O,e))}))):null)}))),(s||n)&&a.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},s.href?a.createElement(_.Z,{href:s.href,className:P},a.createElement(H,{alt:s.alt,sources:c})):a.createElement(H,{alt:s.alt,sources:c})),n?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},U=n(3792),R=n(9757),V=n(8245),W="layoutDefaults_1s0t";var Y=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,s=e.pageClassName;return(0,V.Z)(),a.createElement(U.Z,null,a.createElement(R.Z,e),a.createElement(i.Z,null),a.createElement(o.Z,null),a.createElement(T,null),a.createElement("div",{className:(0,r.Z)(d.kM.wrapper.main,l,s,W)},t),!n&&a.createElement(A,null))}},4517:function(e,t,n){"use strict";n.d(t,{O:function(){return h}});var a=n(7462),r=n(3366),i=n(7294),o=n(6010),l=n(6742),s=n(4996),c=n(3919),u=n(6047),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],v=["mobile","position"];function h(e){var t,n=e.activeBasePath,o=e.activeBaseRegex,u=e.to,d=e.href,f=e.label,v=e.activeClassName,h=void 0===v?"":v,g=e.prependBaseUrlToHref,b=(0,r.Z)(e,m),p=(0,s.Z)(u),_=(0,s.Z)(n),E=(0,s.Z)(d,{forcePrependBaseUrl:!0}),Z=f&&d&&!(0,c.Z)(d);return i.createElement(l.Z,(0,a.Z)({},d?{href:g?E:d}:Object.assign({isNavLink:!0,activeClassName:null!=(t=b.className)&&t.includes(h)?"":h,to:p},n||o?{isActive:function(e,t){return o?new RegExp(o).test(t.pathname):t.pathname.startsWith(_)}}:null),b),Z?i.createElement("span",null,f):f)}function g(e){var t=e.className,n=e.isDropdownItem,l=void 0!==n&&n,s=(0,r.Z)(e,d),c=i.createElement(h,(0,a.Z)({className:(0,o.Z)(l?"dropdown__link":"navbar__item navbar__link",t)},s));return l?i.createElement("li",null,c):c}function b(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,f));return i.createElement("li",{className:"menu__list-item"},i.createElement(h,(0,a.Z)({className:(0,o.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,o=void 0!==n&&n,l=(e.position,(0,r.Z)(e,v)),s=o?b:g;return i.createElement(s,(0,a.Z)({},l,{activeClassName:null!=(t=l.activeClassName)?t:(0,u.E)(o)}))}},9061:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(7462),r=n(3366),i=n(7294),o=n(4517),l=n(907),s=n(6010),c=n(6047),u=n(941),m=n(8780),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,h=(0,r.Z)(e,d),g=(0,l.Iw)(v),b=g.activeVersion,p=g.activeDoc,_=(0,u.J)(v).preferredVersion,E=(0,l.yW)(v),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([b,_,E].filter(Boolean)),n),N=(0,c.E)(h.mobile);return i.createElement(o.Z,(0,a.Z)({exact:!0},h,{className:(0,s.Z)(h.className,(t={},t[N]=(null==p?void 0:p.sidebar)&&p.sidebar===Z.sidebar,t)),activeClassName:N,label:null!=f?f:Z.id,to:Z.path}))}},3886:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(7462),r=n(3366),i=n(7294),o=n(4517),l=n(9553),s=n(907),c=n(941),u=n(4973),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,g=e.dropdownItemsBefore,b=e.dropdownItemsAfter,p=(0,r.Z)(e,m),_=(0,s.Iw)(v),E=(0,s.gB)(v),Z=(0,s.yW)(v),N=(0,c.J)(v),w=N.preferredVersion,y=N.savePreferredVersionName;var k,$=(k=E.map((function(e){var t=(null==_?void 0:_.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==_?void 0:_.activeVersion)},onClick:function(){y(e.name)}}})),[].concat(g,k,b)),D=null!=(t=null!=(n=_.activeVersion)?n:w)?t:Z,S=f&&$?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):D.label,M=f&&$?void 0:d(D).path;return $.length<=1?i.createElement(o.Z,(0,a.Z)({},p,{mobile:f,label:S,to:M,isActive:h?function(){return!1}:void 0})):i.createElement(l.Z,(0,a.Z)({},p,{mobile:f,label:S,to:M,items:$,isActive:h?function(){return!1}:void 0}))}},5412:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7462),r=n(3366),i=n(7294),o=n(4517),l=n(907),s=n(941),c=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,c),f=(0,l.zu)(m),v=(0,s.J)(m).preferredVersion,h=(0,l.yW)(m),g=null!=(t=null!=f?f:v)?t:h,b=null!=n?n:g.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return i.createElement(o.Z,(0,a.Z)({},d,{label:b,to:p}))}},9553:function(e,t,n){"use strict";var a=n(7462),r=n(3366),i=n(7294),o=n(6010),l=n(941),s=n(4517),c=n(6047),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,l.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,l=e.position,m=e.className,d=(0,r.Z)(e,u),f=(0,i.useRef)(null),v=(0,i.useRef)(null),h=(0,i.useState)(!1),g=h[0],b=h[1];return(0,i.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),i.createElement("div",{ref:f,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===l,"dropdown--show":g})},i.createElement(s.O,(0,a.Z)({className:(0,o.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!g))}}),null!=(t=d.children)?t:d.label),i.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return i.createElement(c.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,r.Z)(e,m)),v=(0,l.be)(),h=f(n,v),g=(0,l.uR)({initialState:function(){return!h}}),b=g.collapsed,p=g.toggleCollapsed,_=g.setCollapsed;return(0,i.useEffect)((function(){h&&_(!h)}),[v,h]),i.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":b})},i.createElement(s.O,(0,a.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),i.createElement(l.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.map((function(e,t){return i.createElement(c.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,d),o=n?h:v;return i.createElement(o,a)}},6047:function(e,t,n){"use strict";n.d(t,{Z:function(){return _},E:function(){return p}});var a=n(3366),r=n(7294),i=n(4517),o=n(9553),l=n(7462),s=n(3264),c=n(2263),u=n(941),m="iconLanguage_17ys",d=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function f(e){var t=e.mobile,n=e.dropdownItemsBefore,i=e.dropdownItemsAfter,f=(0,a.Z)(e,d),v=(0,c.Z)().i18n,h=v.currentLocale,g=v.locales,b=v.localeConfigs,p=(0,u.l5)();function _(e){return b[e].label}var E=g.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:_(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),Z=[].concat(n,E,i),N=t?"Languages":_(h);return r.createElement(o.Z,(0,l.Z)({},f,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(s.Z,{className:m}),r.createElement("span",null,N)),items:Z}))}var v=n(1875);function h(e){return e.mobile?null:r.createElement(v.Z,null)}var g=["type"],b={default:function(){return i.Z},localeDropdown:function(){return f},search:function(){return h},dropdown:function(){return o.Z},docsVersion:function(){return n(5412).Z},docsVersionDropdown:function(){return n(3886).Z},doc:function(){return n(9061).Z}};var p=function(e){return e?"menu__link--active":"navbar__link--active"};function _(e){var t=e.type,n=(0,a.Z)(e,g),i=function(e){var t=b[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return r.createElement(i,n)}},3915:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),r=n(6010),i=n(5035),o="tableOfContents_rbnR",l="table-of-contents__link",s={linkClassName:l,linkActiveClassName:"table-of-contents__link--active"};function c(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:l,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(c,{isChild:!0,toc:e.children}))}))):null}var u=function(e){var t=e.toc;return(0,i.Z)(s),a.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar")},a.createElement(c,{toc:t}))}},7484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,a="millisecond",r="second",i="minute",o="hour",l="day",s="week",c="month",u="quarter",m="year",d="date",f="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},b=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},p={s:b,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),a=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+b(a,2,"0")+":"+b(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(a,c),i=n-r<0,o=t.clone().add(a+(i?-1:1),c);return+(-(a+(n-r)/(i?r-o:o-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:m,w:s,d:l,D:d,h:o,m:i,s:r,ms:a,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",E={};E[_]=g;var Z=function(e){return e instanceof k},N=function(e,t,n){var a;if(!e)return _;if("string"==typeof e)E[e]&&(a=e),t&&(E[e]=t,a=e);else{var r=e.name;E[r]=e,a=r}return!n&&a&&(_=a),a||!n&&_},w=function(e,t){if(Z(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},y=p;y.l=N,y.i=Z,y.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function g(e){this.$L=N(e.locale,null,!0),this.parse(e)}var b=g.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(v);if(a){var r=a[2]-1||0,i=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)):new Date(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return y},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},b.isAfter=function(e,t){return w(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<w(e)},b.$g=function(e,t,n){return y.u(e)?this[t]:this.set(n,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var n=this,a=!!y.u(t)||t,u=y.p(e),f=function(e,t){var r=y.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return a?r:r.endOf(l)},v=function(e,t){return y.w(n.toDate()[e].apply(n.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,g=this.$M,b=this.$D,p="set"+(this.$u?"UTC":"");switch(u){case m:return a?f(1,0):f(31,11);case c:return a?f(1,g):f(0,g+1);case s:var _=this.$locale().weekStart||0,E=(h<_?h+7:h)-_;return f(a?b-E:b+(6-E),g);case l:case d:return v(p+"Hours",0);case o:return v(p+"Minutes",1);case i:return v(p+"Seconds",2);case r:return v(p+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var n,s=y.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[l]=u+"Date",n[d]=u+"Date",n[c]=u+"Month",n[m]=u+"FullYear",n[o]=u+"Hours",n[i]=u+"Minutes",n[r]=u+"Seconds",n[a]=u+"Milliseconds",n)[s],v=s===l?this.$D+(t-this.$W):t;if(s===c||s===m){var h=this.clone().set(d,1);h.$d[f](v),h.init(),this.$d=h.set(d,Math.min(this.$D,h.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[y.p(e)]()},b.add=function(a,u){var d,f=this;a=Number(a);var v=y.p(u),h=function(e){var t=w(f);return y.w(t.date(t.date()+Math.round(e*a)),f)};if(v===c)return this.set(c,this.$M+a);if(v===m)return this.set(m,this.$y+a);if(v===l)return h(1);if(v===s)return h(7);var g=(d={},d[i]=t,d[o]=n,d[r]=e,d)[v]||1,b=this.$d.getTime()+a*g;return y.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var a=e||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),i=this.$H,o=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=function(e,n,r,i){return e&&(e[n]||e(t,a))||r[n].substr(0,i)},m=function(e){return y.s(i%12||12,e,"0")},d=n.meridiem||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:y.s(l+1,2,"0"),MMM:u(n.monthsShort,l,c,3),MMMM:u(c,l),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,s,2),ddd:u(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(i),HH:y.s(i,2,"0"),h:m(1),hh:m(2),a:d(i,o,!0),A:d(i,o,!1),m:String(o),mm:y.s(o,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return a.replace(h,(function(e,t){return t||v[e]||r.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(a,d,f){var v,h=y.p(d),g=w(a),b=(g.utcOffset()-this.utcOffset())*t,p=this-g,_=y.m(this,g);return _=(v={},v[m]=_/12,v[c]=_,v[u]=_/3,v[s]=(p-b)/6048e5,v[l]=(p-b)/864e5,v[o]=p/n,v[i]=p/t,v[r]=p/e,v)[h]||p,f?_:y.a(_)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return E[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=N(e,t,!0);return a&&(n.$L=a),n},b.clone=function(){return y.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},g}(),$=k.prototype;return w.prototype=$,[["$ms",a],["$s",r],["$m",i],["$H",o],["$W",l],["$M",c],["$y",m],["$D",d]].forEach((function(e){$[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,k,w),e.$i=!0),w},w.locale=N,w.isDayjs=Z,w.unix=function(e){return w(1e3*e)},w.en=E[_],w.Ls=E,w.p={},w}()}}]);