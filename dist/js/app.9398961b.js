(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-094972c3":"eca3d285","chunk-2c7ddc76":"47e325bd","chunk-2d0b8ec0":"cbde84f7","chunk-7f241a44":"2aad7b65","chunk-9a4b8d52":"15ea3f1d","chunk-d672a16a":"8800274c","chunk-ec5e6fa4":"96c4a232"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-094972c3":1,"chunk-2c7ddc76":1,"chunk-7f241a44":1,"chunk-9a4b8d52":1,"chunk-d672a16a":1,"chunk-ec5e6fa4":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-094972c3":"f694490c","chunk-2c7ddc76":"934a8bb0","chunk-2d0b8ec0":"31d6cfe0","chunk-7f241a44":"6cba8e15","chunk-9a4b8d52":"bc180412","chunk-d672a16a":"909c53d6","chunk-ec5e6fa4":"30554d43"}[t]+".css",s=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],m.parentNode.removeChild(m),a(i)},m.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}s[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"0660":function(t,e,a){},"09c5":function(t,e,a){},1288:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("imageViewer",{key:t.currentAlbum,attrs:{images:t.mutatedAlbums[t.currentAlbum].images}}),a("b-overlay",{staticClass:"mt-3",attrs:{opacity:"1",variant:"white"}},[t.mutatedAlbums.length>1?a("flickity",{directives:[{name:"images-loaded",rawName:"v-images-loaded",value:t.loaded,expression:"loaded"}],ref:"flickity",staticClass:"album-carousel",attrs:{options:t.flickityOptions},on:{init:t.onInit}},t._l(t.mutatedAlbums,(function(e,n){return a("div",{key:""+n,staticClass:"album-carousel-cell"},[a("p",{staticClass:"album-text"},[t._v(t._s(e.name))]),a("img",{staticClass:"image",attrs:{src:e.images[0].msrc,alt:""}})])})),0):t._e()],1)],1)},r=[],s=(a("4de4"),a("4160"),a("ac1f"),a("5319"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-preview",{staticClass:"d-flex flex-column align-items-center",attrs:{slides:t.images}})}),i=[],o={name:"image-viewer",props:["images"],data:function(){return{style:null}},created:function(){this.style=document.createElement("style"),document.head.appendChild(this.style),this.checkImageAmount()},beforeDestroy:function(){this.style.parentNode.removeChild(this.style)},methods:{checkImageAmount:function(){var t=this.images.length;this.style.innerHTML=t>5?".my-gallery  :nth-child(4) a:after {content: '".concat(t-5,'+\';\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          text-align: center;\n          transform: translate(0, 50%);\n          line-height: 0;\n          }\n          .my-gallery  :nth-child(4) a:before {\n            content: "";\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            background-color: rgba(0, 0, 0, 0.4);\n            top: 0;\n            bottom: 0;\n          }'):"",t>4&&(this.style.innerHTML+=".my-gallery :nth-child(4) {\n            grid-row: span 2\n          }")}}},c=o,l=(a("1a59"),a("2877")),u=Object(l["a"])(c,s,i,!1,null,null,null),d=u.exports,m=a("b394"),f=a("8ff0"),h=a.n(f),p={name:"albumViewer",props:["albums"],directives:{imagesLoaded:h.a},components:{Flickity:m["a"],imageViewer:d},data:function(){return{mutatedAlbums:this.albums,imagesLoading:!0,flickityOptions:{initialIndex:0,prevNextButtons:!0,pageDots:!0,contain:!1,autoPlay:!1,imagesLoaded:!0,dragThreshold:10,freeScroll:!1},currentAlbum:0}},created:function(){this.mutatedAlbums.length>0&&(this.mutatedAlbums=this.mutatedAlbums.filter((function(t){return t.images.length>0})),this.mutatedAlbums.forEach((function(t){if(0!==t.images.length){var e=t.images;t.images=[],e.forEach((function(e){t.images.push({src:e.url,msrc:e.url.replace("upload/","upload/q_20/"),w:e.w,h:e.h})}))}})))},methods:{loaded:function(){this.imagesLoading=!1,this.$refs.flickity.reloadCells(),this.$refs.flickity.select(0)},onInit:function(){var t=this;this.$refs.flickity.on("change",(function(e){t.currentAlbum=e})),this.$refs.flickity.on("staticClick",(function(e,a,n,r){t.$refs.flickity.select(r)}))}}},b=p,v=(a("6744"),Object(l["a"])(b,n,r,!1,null,null,null));e["a"]=v.exports},"1a59":function(t,e,a){"use strict";var n=a("d376"),r=a.n(n);r.a},"1bf2":function(t,e,a){},2087:function(t,e,a){"use strict";function n(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}a.d(e,"a",(function(){return n}))},4663:function(t,e,a){"use strict";var n=a("a66a"),r=a.n(n);r.a},"4c10":function(t,e,a){"use strict";var n=a("c6d6"),r=a.n(n);r.a},"530d":function(t,e,a){"use strict";var n=a("09c5"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("be3b"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.returned?a("VueNav",{attrs:{branches:t.branches,tabs:t.tabs}}):t._e(),a("main",{class:t.containsPage},[t.returned?a("router-view",{attrs:{branches:t.branches,tabs:t.tabs}}):t._e()],1),t.returned?a("VueFooter",{attrs:{branches:t.branches,tabs:t.tabs}}):t._e()],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{staticClass:"flex-fill navbar-light fixed-top bg-white clean-navbar",attrs:{id:"navbar",toggleable:"lg"}},[n("div",{staticClass:"w-25 d-flex"},[n("b-navbar-brand",{staticClass:"logo d-flex flex-row ml-auto",attrs:{href:"/index"}},[n("img",{staticClass:"mr-3",attrs:{src:a("98af")}}),n("div",{staticClass:"my-auto",attrs:{id:"brand-name"}},[t._v(" Scouting "),n("br"),t._v("Huissen Zand ")])])],1),n("b-navbar-toggle",{attrs:{target:"nav-collapse"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.expanded;return[n("div",{class:e?"nav-collapse-btn active":"nav-collapse-btn"},[n("div")])]}}])}),n("b-collapse",{staticClass:"w-75 ml-auto",attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{href:"/index"}},[t._v("Home")]),t._l(t.$props.tabs,(function(e){return n("b-nav-item",{key:e.tabName,attrs:{href:"/tab/"+e.tabName}},[t._v(t._s(e.tabName))])})),n("div",{on:{mouseover:t.onOver,mouseleave:t.onLeave}},[t.branches.length?n("b-nav-item-dropdown",{ref:"dropdown",attrs:{text:"Speltakken"}},t._l(t.$props.branches,(function(e){return n("b-dropdown-item",{key:e.branchName,attrs:{href:"/speltak/"+e.branchName}},[t._v(t._s(e.branchName))])})),1):t._e()],1)],2)],1)],1)},c=[],l=a("2087"),u={name:"vueNav",props:["tabs","branches"],methods:{onOver:function(){Object(l["a"])()||(this.$refs.dropdown.visible=!0)},onLeave:function(){Object(l["a"])()||(this.$refs.dropdown.visible=!1)},scrollFunction:function(){document.body.scrollTop>10||document.documentElement.scrollTop>10?document.getElementById("navbar").classList.add("small-nav"):document.getElementById("navbar").classList.remove("small-nav")}},mounted:function(){Object(l["a"])()?document.getElementById("navbar").classList.add("small-nav"):(window.onscroll=this.scrollFunction,document.getElementById("navbar").classList.add("transition"),document.querySelector(".navbar .navbar-brand").classList.add("transition"))}},d=u,m=(a("530d"),a("2877")),f=Object(m["a"])(d,o,c,!1,null,null,null),h=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-footer dark"},[a("div",{staticClass:"footer-decoration"}),a("b-container",[a("div",{staticClass:"row d-flex justify-content-center"},[a("div",{staticClass:"col-sm-3"},[a("h5",[t._v("Speltakken")]),a("ul",t._l(t.branches,(function(e){return a("li",{key:e.branchName},[a("a",{attrs:{href:"/speltak/"+e.branchName}},[t._v(t._s(e.branchName))])])})),0)]),a("div",{staticClass:"col-sm-3"},[a("h5",[t._v("Tabbladen")]),a("ul",[t._l(t.tabs,(function(e){return a("li",{key:e.tabName},[a("a",{attrs:{href:"/tab/"+e.tabName}},[t._v(t._s(e.tabName))])])})),a("li",[a("a",{attrs:{href:"/index"}},[t._v("Home")])])],2)]),a("div",{staticClass:"col-sm-3"},[a("h5",[t._v("Support")]),a("ul",[a("li",[a("a",{attrs:{href:"/staf"}},[t._v("Staff login")])]),a("li",[a("a",{attrs:{href:"/creator"}},[t._v("Maker")])])])])])]),t._m(0)],1)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-copyright"},[a("p",[t._v("© 2020 Copyright made by "),a("a",{staticStyle:{color:"#28a745"},attrs:{href:"/creator"}},[t._v("Wout Knuiman")])])])}],v={name:"vueFooter",props:["tabs","branches"]},g=v,k=(a("7b03"),Object(m["a"])(g,p,b,!1,null,null,null)),y=k.exports,w={name:"App",components:{VueNav:h,VueFooter:y},data:function(){return{branches:null,tabs:null,returned:!1}},created:function(){var t=this;try{var e=JSON.parse(document.getElementById("app").getAttribute("data-model"));this.branches=e.branches,this.tabs=e.tabs,this.returned=!0,console.log("loaded from meta")}catch(a){console.log("loading from api"),r["a"].get("/info").then((function(e){t.returned=!0,200===e.status?(t.branches=e.data.branches,t.tabs=e.data.tabs):t.$bvToast.toast("Unknown",A.toastObject("Error"))})).catch((function(e){t.$bvToast.toast(e+"",A.toastObject("Error"))}))}},computed:{containsPage:function(){return"/index"==this.$route.path||"/"==this.$route.path||Object(l["a"])()?"page small-page":"page"}}},_=w,x=(a("034f"),Object(m["a"])(_,s,i,!1,null,null,null)),C=x.exports,j=a("a18c"),E=a("67b0"),S=a("888e"),O=a.n(S),N=a("5f5b"),P=a("b1e0");a("0660"),n["default"].mixin({methods:{toastObject:function(t){return{title:t,autoHideDelay:5e3,appendToast:!0}}}}),n["default"].use(O.a),n["default"].use(E["a"]),n["default"].use(N["a"]),n["default"].use(P["a"]),n["default"].config.productionTip=!1;var A=e["default"]=new n["default"]({router:j["a"],render:function(t){return t(C)}}).$mount("#app")},"5ced":function(t,e,a){},"63fd":function(t,e,a){"use strict";var n=a("1bf2"),r=a.n(n);r.a},6744:function(t,e,a){"use strict";var n=a("7b34"),r=a.n(n);r.a},7210:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.ready?a("article",{staticClass:"ql-editor",domProps:{innerHTML:t._s(t.getHtml)}}):a("div",{staticClass:"d-flex justify-content-center"},[a("span",{staticClass:"my-auto"},[a("b-spinner",{attrs:{variant:"primary",label:"Spinning"}})],1)])},r=[],s=a("ff81"),i={name:"quillViewer",props:["ready","quill"],computed:{getHtml:function(){var t=new s["QuillDeltaToHtmlConverter"](JSON.parse(this.quill),{multiLineParagraph:!1,multiLineBlockquote:!1,multiLineHeader:!1,multiLineCodeblock:!1});return t.convert()}}},o=i,c=(a("63fd"),a("2877")),l=Object(c["a"])(o,n,r,!1,null,null,null);e["a"]=l.exports},"75f9":function(t,e,a){"use strict";var n=a("fe7b"),r=a.n(n);r.a},"7b03":function(t,e,a){"use strict";var n=a("f880"),r=a.n(n);r.a},"7b34":function(t,e,a){},"85ec":function(t,e,a){},"98af":function(t,e,a){t.exports=a.p+"img/navicon.ac1f7c8e.png"},a18c:function(t,e,a){"use strict";a("d3b7");var n=a("2b0e"),r=a("8c4f"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column flex-grow",attrs:{id:"homepage"}},[a("section",[a("carousel")],1),a("section",{staticClass:"clean-block clean-info dark",staticStyle:{position:"relative"}},[a("div",{staticClass:"section-decoration bottom"}),a("b-container",{staticClass:"mt-5"},[a("div",{staticClass:"block-heading"},[a("h2",{staticClass:"text-info"},[t._v("Speltakken")]),a("p",[t._v("Dit zijn de verschillende speltakken van Scouting Huissen Zand")])]),a("b-row",t._l(t.branches,(function(t){return a("b-col",{key:t.branchName,staticClass:"d-flex flex-column"},[a("teammember",{attrs:{branch:t}})],1)})),1)],1),a("div",{staticClass:"section-decoration top"})],1),null!=t.albums&&t.albums.length>0?a("section",{staticClass:"p-0 py-5 photo-block"},[a("b-container",{staticClass:"py-5"},[a("b-card",{staticClass:"my-5 clean-block clean-card pb-5"},[a("div",{staticClass:"block-heading p-0"},[a("h2",{staticClass:"text-info"},[t._v("Foto's")]),a("p",{staticStyle:{"font-size":"1em"}},[t._v("Hier staan een aantal foto's van de verschillende speltakken")])]),a("albumViewer",{attrs:{albums:t.albums}})],1)],1)],1):t._e(),a("section",{staticClass:"clean-block clean-info p-0 py-5",staticStyle:{position:"relative"}},[a("div",{staticClass:"section-decoration bottom",staticStyle:{"background-color":"white"}}),a("b-container",[a("div",{staticClass:"block-heading p-0"},[a("h2",{staticClass:"text-info"},[t._v("Evenementen")]),a("p",[t._v("Deze kalender bevat alle aankomende evenementen van de scouting")])]),a("h2",[t._v("Kalender")]),a("calendarViewer",{attrs:{ready:t.calendarReturned,events:t.events}})],1)],1)])},i=[],o=(a("4160"),a("25f0"),a("159b"),a("be3b")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"team-member mx-auto d-flex flex-column"},[a("a",{staticClass:"mx-auto",attrs:{href:"/speltak/"+t.branch.branchName}},[a("img",{staticClass:"rounded-circle mx-auto",attrs:{src:t.picture,onerror:"this.onerror=null;this.src='https://scoutingrvp.nl/wp-content/uploads/2019/07/Naamloos.png'"}})]),a("h4",{staticClass:"mx-auto mt-3",staticStyle:{color:"#28a745"}},[t._v(t._s(t.branch.branchName))]),a("ul",{staticClass:"list-inline social-buttons mx-auto"},[""!=t.branch.instaUsername?a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"social-link",attrs:{href:"https://www.instagram.com/"+t.branch.instaUsername}},[a("i",{staticClass:"fab fa-instagram fa-2x"})])]):t._e(),""!=t.branch.facebookUsername?a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"social-link",attrs:{href:"https://www.facebook.com/"+t.branch.facebookUsername}},[a("i",{staticClass:"fab fa-facebook fa-2x"})])]):t._e()])])},l=[],u={name:"teammember",props:["branch"],data:function(){return{instaPicture:""}},methods:{getInstaInfo:function(t){var e=this;o["a"].get("https://www.instagram.com/web/search/topsearch/?query="+t.instaUsername,{baseUrl:"",withCredentials:!1}).then((function(t){e.instaPicture=t.data["users"][0]["user"]["profile_pic_url"]})).catch((function(){e.instaPicture="https://scoutingrvp.nl/wp-content/uploads/2019/07/Naamloos.png"}))}},computed:{picture:function(){return""!=this.branch.facebookUsername&&null!=this.branch.facebookUsername?"https://graph.facebook.com/"+this.branch.facebookUsername+"/picture?height=400&width=400":this.instaPicture}},created:function(){""!=this.branch.instaUsername&&null!=this.branch.instaUsername&&this.getInstaInfo(this.branch)}},d=u,m=(a("75f9"),a("2877")),f=Object(m["a"])(d,c,l,!1,null,"3cf0d4d6",null),h=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("flickity",{ref:"flickity",attrs:{options:t.flickityOptions}},[a("div",{staticClass:"carousel-cell clean-block clean-hero"},[a("div",{staticClass:"text"},[a("h2",[t._v("Welkom bij Scouting Huissen Zand")]),a("p",[t._v("Welkom bij de vernieuwde website van Scouting Huissen Zand. Hier kun je informatie over de verschillende speltakken en aankomende evenementen vinden")])])]),a("div",{staticClass:"carousel-cell clean-block clean-hero"},[a("div",{staticClass:"text carousel-text"},[a("h3",[t._v("Gidsen")])]),a("img",{staticClass:"d-block w-100",staticStyle:{"object-fit":"cover",position:"absolute"},attrs:{src:"https://res.cloudinary.com/duj1jfopx/image/upload/v1593523963/78408294_2536457219779413_5672881358192508928_o_ghls3z.jpg",alt:"image slot"}})]),a("div",{staticClass:"carousel-cell clean-block clean-hero"},[a("div",{staticClass:"text carousel-text"},[a("h3",[t._v("Verkenners")])]),a("img",{staticClass:"d-block w-100",staticStyle:{"object-fit":"cover"},attrs:{src:"https://res.cloudinary.com/duj1jfopx/image/upload/v1593523635/88248349_2759330350825431_3042933313594458112_o_fva19f.jpg",alt:"image slot"}})]),a("div",{staticClass:"carousel-cell clean-block clean-hero"},[a("div",{staticClass:"text carousel-text"},[a("h3",[t._v("Rowans")])]),a("img",{staticClass:"d-block w-100",staticStyle:{"object-fit":"cover"},attrs:{src:"https://res.cloudinary.com/duj1jfopx/image/upload/v1600950464/IMG-20190711-WA0004_z0ekqw.jpg",alt:"image slot"}})])])},b=[],v=a("b394"),g={components:{Flickity:v["a"]},data:function(){return{slide:0,sliding:!1,flickityOptions:{initialIndex:0,prevNextButtons:!1,pageDots:!0,contain:!0,wrapAround:!1,autoPlay:!0,pauseAutoPlayOnHover:!1,imagesLoaded:!0}}}},k=g,y=(a("4663"),Object(m["a"])(k,p,b,!1,null,null,null)),w=y.exports,_=a("cf58"),x=a("1288"),C=a("56d7"),j={name:"Home",props:["tabs","branches"],components:{teammember:h,carousel:w,calendarViewer:_["a"],albumViewer:x["a"]},data:function(){return{calendarReturned:!1,events:[],albums:null}},methods:{hashCode:function(t){for(var e=0,a=0;a<t.length;a++)e=t.charCodeAt(a)+((e<<5)-e);return e},intToRGB:function(t){var e=(16777215&t).toString(16).toUpperCase();return"00000".substring(0,6-e.length)+e}},created:function(){var t=this;o["a"].post("/event/getall").then((function(e){e.data.forEach((function(e){t.events.push({title:e.branchName+" - "+e.eventName,start:e.startDate,end:e.endDate,description:e.eventDescription,color:"#"+t.intToRGB(t.hashCode(e.branchName))})})),t.calendarReturned=!0})).catch((function(e){t.calendarReturned=!0,404!=e.response.status&&t.$bvToast.toast("Kalender kon niet worden opgehaald",C["default"].toastObject("Error"))})),o["a"].get("albums/get").then((function(e){t.albums=e.data}))}},E=j,S=(a("cccb"),Object(m["a"])(E,s,i,!1,null,null,null)),O=S.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"clean-block clean-pricing dark"},[a("b-container",[a("h1",{staticClass:"text-center mt-5"},[t._v(t._s(t.getError))])])],1)},P=[],A={name:"NotFound",props:["error"],computed:{getError:function(){return 401==this.error?"401 - Niet Gemachtigd":"404 - Niet Gevonden"}}},L=A,$=Object(m["a"])(L,N,P,!1,null,null,null),T=$.exports;n["default"].use(r["a"]);var B=" | Scouting Huissen Zand",H=[{path:"/",name:"Home",component:O,meta:{title:function(){return"Index"+B}}},{path:"/index",name:"Index",component:O,meta:{title:function(){return"Index"+B}}},{path:"/staf",name:"Staff",component:function(){return a.e("chunk-2c7ddc76").then(a.bind(null,"bb0e"))},meta:{title:function(){return"Staf"+B}}},{path:"/stafpaneel",name:"StaffPanel",component:function(){return a.e("chunk-7f241a44").then(a.bind(null,"2a8b"))},props:!0,meta:{title:function(){return"Staf Paneel"+B}}},{path:"/assignBranch/:who",name:"assignBranch",component:function(){return a.e("chunk-7f241a44").then(a.bind(null,"2a8b"))},props:!0,meta:{title:function(){return"Staf Paneel"+B}}},{path:"/login/:what/:who",name:"loginAssignBranch",component:function(){return a.e("chunk-2c7ddc76").then(a.bind(null,"bb0e"))},props:!0,meta:{title:function(){return"Staf Paneel"+B}}},{path:"/validate/:who/:token",name:"validate",component:function(){return a.e("chunk-2d0b8ec0").then(a.bind(null,"316b"))},props:!0,meta:{title:function(){return"Valideren"+B}}},{path:"/tab/:tab",component:function(){return a.e("chunk-094972c3").then(a.bind(null,"263b"))},props:!0,meta:{title:function(t){return t.params.tab+B}}},{path:"/speltak/:branchName",component:function(){return a.e("chunk-d672a16a").then(a.bind(null,"b858"))},props:!0,meta:{title:function(t){return t.params.branchName+B}}},{path:"/speltak/:branchName/inschrijven",component:function(){return a.e("chunk-ec5e6fa4").then(a.bind(null,"fec8"))},props:!0,meta:{title:function(t){return"Inschrijven voor "+t.params.branchName+B}}},{path:"/creator",component:function(){return a.e("chunk-9a4b8d52").then(a.bind(null,"93cd"))},props:!0,meta:{title:function(){return"Gemaakt door "+B}}},{path:"/error/:error",component:T,props:!0,meta:{title:function(t){return t.params.error+B}}},{path:"*",component:T,meta:{title:function(){return"Error"+B}}}],I=new r["a"]({mode:"history",base:"/",routes:H});I.beforeEach((function(t,e,a){document.title=t.meta.title(t),a()}));e["a"]=I},a66a:function(t,e,a){},be3b:function(t,e,a){"use strict";a("d3b7");var n=a("2b0e"),r=a("bc3a"),s=a.n(r),i={baseURL:"https://scoutinghuissenzand.nl/api",timeout:6e4,withCredentials:!0},o=s.a.create(i);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},n["default"].use(Plugin),e["a"]=o},c6d6:function(t,e,a){},cccb:function(t,e,a){"use strict";var n=a("5ced"),r=a.n(n);r.a},cf58:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.ready?a("FullCalendar",{attrs:{defaultView:"dayGridMonth",events:t.events,locale:t.nlLocale,plugins:t.calendarPlugins,timeZone:"UTC",themeSystem:"bootstrap",header:t.header,views:t.views,height:t.height},on:{eventClick:t.handleEventClick}}):a("div",{staticClass:"d-flex justify-content-center"},[a("span",{staticClass:"my-auto"},[a("b-spinner",{attrs:{variant:"primary",label:"Spinning"}})],1)]),a("b-sidebar",{attrs:{id:"sidebar-right",title:t.sidebarTitle,right:"",shadow:""},model:{value:t.sideBarEvent,callback:function(e){t.sideBarEvent=e},expression:"sideBarEvent"}},[a("div",{staticClass:"w-100 d-flex"},[t.sideBarEvent?a("span",{staticClass:"mx-auto pl-3 pr-1"},[t._v(t._s(t.getFormattedDate))]):t._e()]),a("quillViewer",{attrs:{ready:t.sideBarEvent,quill:t.sidebarDescription}})],1)],1)},r=[],s=(a("a4d3"),a("e01a"),a("88e1")),i=a("dc09"),o=a("19bc"),c=a("36c7"),l=a.n(c),u=a("4990"),d=a("970a"),m=a("f88c"),f=a("7210"),h={name:"calendarViewer",props:["ready","events"],components:{FullCalendar:i["a"],quillViewer:f["a"]},data:function(){return{calendarPlugins:[s["a"],o["a"],d["a"],m["a"]],header:{left:"title",center:"dayGridMonth,listMonth",right:"today prev,next"},views:{listMonth:{buttonText:"Lijst"}},height:"parent",nlLocale:l.a,calendarReturned:!1,sidbarStart:"",sidebarEnd:"",sidebarTitle:"",sideBarEvent:!1,sidebarDescription:"",dateFormat:"D MMM"}},methods:{handleEventClick:function(t){this.sideBarEvent=!1,this.sidebarTitle=t.event.title,this.sidebarStart=t.event.start,this.sidebarEnd=t.event.end,this.sidebarDescription=t.event.extendedProps.description,this.sideBarEvent=!0}},computed:{getFormattedDate:function(){return"Van "+Object(u["eb"])(this.sidebarStart,{month:"long",year:"numeric",day:"numeric",locale:l.a})+" tot "+Object(u["eb"])(this.sidebarEnd,{month:"long",year:"numeric",day:"numeric",locale:l.a})}}},p=h,b=(a("4c10"),a("2877")),v=Object(b["a"])(p,n,r,!1,null,null,null);e["a"]=v.exports},d376:function(t,e,a){},f880:function(t,e,a){},fe7b:function(t,e,a){}});