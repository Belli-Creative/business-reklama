(window.webpackJsonp=window.webpackJsonp||[]).push([[8,11],{354:function(t,e,n){t.exports=n.p+"img/image 114.133d1cb.png"},355:function(t,e,n){t.exports=n.p+"img/image 84.883aeeb.png"},364:function(t,e,n){"use strict";n.r(e);var r=n(167),o=(n(43),n(78),n(383),n(0).default.extend({props:{imgs:{type:Array,required:!0}},data:function(){return{pred:0,count:1,grab:!1,isAnimating:!1,timer:null}},computed:{list:function(){return[this.imgs[this.imgs.length-1]].concat(Object(r.a)(this.imgs),[this.imgs[0]])}},mounted:function(){var t=this;this.start(),this.$once("hook:beforeDestroy",(function(){t.stop()}))},methods:{navigate:function(t){this.stop(),this.count=t+1,this.start()},start:function(){var t=this;this.timer=setInterval((function(){t.count=(t.count+1)%t.list.length}),4e3),this.$refs.carouselSlider.addEventListener("transitionstart",this.onTransitionStart),this.$refs.carouselSlider.addEventListener("transitionend",this.onTransitionEnd)},stop:function(){clearInterval(this.timer),this.$refs.carouselSlider.removeEventListener("transitionstart",this.onTransitionStart),this.$refs.carouselSlider.removeEventListener("transitionend",this.onTransitionEnd)},onTransitionStart:function(){this.isAnimating=!0},onTransitionEnd:function(){var t=this;this.isAnimating=!1,this.count===this.list.length-1&&(this.$refs.carouselSlider.style.transition="none",this.count=1,setTimeout((function(){t.$refs.carouselSlider.style.transition=""}))),0===this.count&&(this.$refs.carouselSlider.style.transition="none",this.count=this.list.length-2,setTimeout((function(){t.$refs.carouselSlider.style.transition=""})))},onMouseMove:function(t){this.pred=Number(this.dragX-t.screenX)},onMouseDown:function(t){this.isAnimating||(this.stop(),this.$refs.carouselSlider.style.transition="none",this.grab=!0,this.dragX=t.screenX,window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove))},onMouseUp:function(){var t=this;this.grab=!1,window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.$refs.carouselSlider.style.transition="transform 0.2s ease 0s",this.pred>10&&(this.count=this.count+1),this.pred<-10&&(this.count=this.count-1),this.pred=0,this.$nextTick((function(){t.start(),setTimeout((function(){t.$refs.carouselSlider.style.transition=""}),100)}))},onTouchStart:function(t){this.isAnimating||(this.stop(),this.$refs.carouselSlider.style.transition="none",this.grab=!0,this.dragX=t.touches[0].screenX,window.addEventListener("touchend",this.onTouchEnd),window.addEventListener("touchmove",this.onTouchMove))},onTouchEnd:function(){var t=this;this.grab=!1,window.removeEventListener("touchend",this.onTouchEnd),window.removeEventListener("touchmove",this.onTouchMove),this.$refs.carouselSlider.style.transition="transform 0.2s ease 0s",this.pred>10&&(this.count=this.count+1),this.pred<-10&&(this.count=this.count-1),this.pred=0,this.$nextTick((function(){t.start(),setTimeout((function(){t.$refs.carouselSlider.style.transition=""}),100)}))},onTouchMove:function(t){this.pred=this.dragX-t.touches[0].screenX}}})),l=n(12),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider"},[n("div",{staticClass:"w-full mx-auto overflow-hidden relative",class:{grab:t.grab}},[n("div",{ref:"carouselSlider",staticClass:"touch-manipulation whitespace-nowrap transition-transform duration-400 m-0",style:{transform:"translate3D(calc(-"+100*t.count+"% - "+t.pred+"px), 0,0)"},on:{mousedown:t.onMouseDown,touchstart:t.onTouchStart}},t._l(t.list,(function(e,r){return n("div",{key:r,staticClass:"w-full inline-block touch-pan-y back",staticStyle:{"backface-visibility":"hidden"}},[n("img",{class:{active:r===t.count},attrs:{src:e.src,draggable:"false"}}),t._v(" "),n("div",{staticClass:"py-6 bg-black whitespace-normal"},[n("div",{staticClass:"h-full bottom-0 left-0 px-4 pb-10"},[n("h3",{staticClass:"text-secondary font-graphik text-[4vw]"},[t._v("\n              "+t._s(e.date)+"\n            ")]),t._v(" "),n("h1",{staticClass:"text-white text-[6vw] pt-4 pb-2"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),n("p",{staticClass:"text-white text-[4.5vw] font-light"},[t._v("\n              "+t._s(e.content)+"\n            ")])])])])})),0),t._v(" "),n("div",{ref:"form",staticClass:"w-full text-center absolute bottom-5"},t._l(t.imgs,(function(e,r){return n("button",{key:r,staticClass:"inline-block bg-c-gray-500 w-2 h-2 rounded-full mx-1",style:"backgroundColor: "+(r===(t.imgs.length+t.count-1)%t.imgs.length?"#fff":"#5C5C5C"),on:{click:function(e){return t.navigate(r)}}})})),0)])])}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(364),l=r.default.extend({name:"MediaMobilePage",components:{MobileSlider:o.default},data:function(){return{list:[{src:n(354),date:"Fewral 28, 2022",title:"Aladaly kesel: Aladaly ýetginjek aňyna syýahat",content:"Näme üçin Amerikaly ýetginjekleriň köpüsi aladaly, depressiýa we hatda öz janyna kast edýär? Wideoýazgymyz ýetginjekleriň akyl saglygy krizisiniň arkasyndaky ylma seredýär."},{src:n(354),date:"Fewral 28, 2022",title:"Aladaly kesel: Aladaly ýetginjek aňyna syýahat",content:"Näme üçin Amerikaly ýetginjekleriň köpüsi aladaly, depressiýa we hatda öz janyna kast edýär? Wideoýazgymyz ýetginjekleriň akyl saglygy krizisiniň arkasyndaky ylma seredýär."},{src:n(354),date:"Fewral 28, 2022",title:"Aladaly kesel: Aladaly ýetginjek aňyna syýahat",content:"Näme üçin Amerikaly ýetginjekleriň köpüsi aladaly, depressiýa we hatda öz janyna kast edýär? Wideoýazgymyz ýetginjekleriň akyl saglygy krizisiniň arkasyndaky ylma seredýär."},{src:n(354),date:"Fewral 28, 2022",title:"Aladaly kesel: Aladaly ýetginjek aňyna syýahat",content:"Näme üçin Amerikaly ýetginjekleriň köpüsi aladaly, depressiýa we hatda öz janyna kast edýär? Wideoýazgymyz ýetginjekleriň akyl saglygy krizisiniň arkasyndaky ylma seredýär."}],newsList:[{date:"Mart 27, 2022",content:"Türkmenistanyň Prezidenti Amerikanyň Birleşen Ştatlarynyň Prezidentini Ikitaraplaýyn Diplomatik Gatnaşyklaryň 30 ýyllygy bilen Gutlady",img:n(355)},{date:"Mart 27, 2022",content:"Türkmenistanyň Prezidenti Amerikanyň Birleşen Ştatlarynyň Prezidentini Ikitaraplaýyn Diplomatik Gatnaşyklaryň 30 ýyllygy bilen Gutlady",img:n(355)},{date:"Mart 27, 2022",content:"Türkmenistanyň Prezidenti Amerikanyň Birleşen Ştatlarynyň Prezidentini Ikitaraplaýyn Diplomatik Gatnaşyklaryň 30 ýyllygy bilen Gutlady",img:n(355)},{date:"Mart 27, 2022",content:"Türkmenistanyň Prezidenti Amerikanyň Birleşen Ştatlarynyň Prezidentini Ikitaraplaýyn Diplomatik Gatnaşyklaryň 30 ýyllygy bilen Gutlady",img:n(355)}]}}}),c=n(12),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MobileSlider",{attrs:{imgs:t.list}}),t._v(" "),n("div",{staticClass:"w-full px-6 py-10"},[t._m(0),t._v(" "),n("div",{staticClass:"py-10"},[t._l(t.newsList,(function(e,r){return n("div",{key:r,class:{"pt-10":r>0}},[n("div",{staticClass:"w-full h-full"},[n("img",{staticClass:"w-full h-full",attrs:{src:e.img,alt:""}})]),t._v(" "),n("div",{staticClass:"pt-4"},[n("span",{staticClass:"text-[3.5vw] font-graphik font-medium text-primary"},[t._v(t._s(e.date))])]),t._v(" "),n("p",{staticClass:"font-medium text-[4.5vw] leading-none"},[t._v("\n          "+t._s(e.content)+"\n        ")])])})),t._v(" "),n("div",{staticClass:"w-full flex justify-center pt-10"},[n("button",{staticClass:"bg-primary w-[60%] py-2 px-6"},[n("span",{staticClass:"text-white font-graphik mx-auto"},[t._v(t._s(t.$t("viewall")))])])])],2)])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border-b-2 border-secondary"},[n("span",{staticClass:"text-secondary text-[7vw] font-medium font-graphik uppercase tracking-widest"},[t._v("Syýasat")])])}],!1,null,null,null);e.default=component.exports},383:function(t,e,n){"use strict";var r=n(14),o=n(1),l=n(5),c=n(97),d=n(26),y=n(15),h=n(164),f=n(59),m=n(96),v=n(237),k=n(4),w=n(79).f,_=n(52).f,E=n(25).f,x=n(384),S=n(385).trim,T="Number",A=o.Number,C=A.prototype,M=o.TypeError,N=l("".slice),z=l("".charCodeAt),I=function(t){var e=v(t,"number");return"bigint"==typeof e?e:$(e)},$=function(t){var e,n,r,o,l,c,d,code,y=v(t,"number");if(m(y))throw M("Cannot convert a Symbol value to a number");if("string"==typeof y&&y.length>2)if(y=S(y),43===(e=z(y,0))||45===e){if(88===(n=z(y,2))||120===n)return NaN}else if(48===e){switch(z(y,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+y}for(c=(l=N(y,2)).length,d=0;d<c;d++)if((code=z(l,d))<48||code>o)return NaN;return parseInt(l,r)}return+y};if(c(T,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var j,L=function(t){var e=arguments.length<1?0:A(I(t)),n=this;return f(C,n)&&k((function(){x(n)}))?h(Object(e),n,L):e},G=r?w(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;G.length>P;P++)y(A,j=G[P])&&!y(L,j)&&E(L,j,_(A,j));L.prototype=C,C.constructor=L,d(o,T,L,{constructor:!0})}},384:function(t,e,n){var r=n(5);t.exports=r(1..valueOf)},385:function(t,e,n){var r=n(5),o=n(39),l=n(16),c=n(386),d=r("".replace),y="["+c+"]",h=RegExp("^"+y+y+"*"),f=RegExp(y+y+"*$"),m=function(t){return function(e){var n=l(o(e));return 1&t&&(n=d(n,h,"")),2&t&&(n=d(n,f,"")),n}};t.exports={start:m(1),end:m(2),trim:m(3)}},386:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"}}]);