(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{356:function(t,e,l){"use strict";var r=l(0).default.extend({props:{disabled:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1}}}),n=l(12),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({staticClass:"px-20 py-3 font-graphik font-medium",class:{"bg-transparent text-black border-c-gray-100 border":t.transparent,"bg-primary text-white":!t.transparent},attrs:{disabled:t.disabled}},"button",t.$attrs,!1),[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},357:function(t,e,l){t.exports=l.p+"img/image 82.b6010c3.jpg"},358:function(t,e,l){t.exports=l.p+"img/image 99.51c838b.jpg"},362:function(t,e,l){t.exports=l.p+"img/image 90.22004ec.jpg"},366:function(t,e,l){t.exports=l.p+"img/image 33.9b49d7f.jpg"},367:function(t,e,l){t.exports=l.p+"img/image 83.e744871.jpg"},372:function(t,e,l){t.exports=l.p+"img/image 91.149964d.jpg"},388:function(t,e,l){"use strict";var r=l(0).default.extend({props:{title:{type:String,default:""},list:{type:Array,required:!0}}}),n=l(12),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"div"},[t.title?l("div",{staticClass:"w-full py-2 border-b border-secondary mb-12"},[l("h1",{staticClass:"font-medium font-graphik text-2xl uppercase text-secondary"},[t._v("\n      "+t._s(t.title)+"\n    ")])]):t._e(),t._v(" "),l("div",{staticClass:"news-wrapper w-full flex lg:flex-row flex-col"},[l("div",{staticClass:"left lg:w-1/2 w-full lg:pr-4 lg:border-r lg:pb-0 pb-4"},[l("div",{staticClass:"lg-news cursor-pointer",on:{click:function(e){return t.$router.push("/news")}}},[l("div",{staticClass:"img-wrapper relative w-full pt-[60%] mb-4"},[l("img",{staticClass:"w-full h-full absolute top-0 left-0 object-cover",attrs:{src:t.list[0].src,alt:""}})]),t._v(" "),l("span",{staticClass:"text-primary font-graphik font-medium"},[t._v(t._s(t.list[0].date))]),t._v(" "),l("div",{staticClass:"content mt-5"},[l("h1",{staticClass:"font-georgia text-3xl"},[t._v("\n            "+t._s(t.list[0].title)+"\n          ")]),t._v(" "),l("p",{staticClass:"text-black mt-3 w-[65%]"},[t._v(t._s(t.list[0].content))])])])]),t._v(" "),l("div",{staticClass:"right flex lg:flex-col flex-row lg:w-1/2 w-full lg:pl-4 lg:divide-y lg:justify-start justify-between lg:border-t-0 border-t gap-x-8"},t._l(t.list.slice(1),(function(e,r){return l("div",{key:r,staticClass:"news-item lg:h-1/3 h-auto lg:w-auto w-1/3 flex lg:flex-row flex-col mt-4 lg:first-of-type:mt-0 lg:pt-4 pt-2 lg:first-of-type:pt-0 cursor-pointer",on:{click:function(e){return t.$router.push("/news")}}},[l("div",{staticClass:"img-wrapper lg:w-[40%] w-full"},[l("img",{staticClass:"w-full h-full object-cover",attrs:{src:e.src,alt:""}})]),t._v(" "),l("div",{staticClass:"content lg:ml-5 lg:w-[60%] w-full h-full lg:mt-0 mt-5"},[l("span",{staticClass:"text-primary font-medium font-graphik"},[t._v(t._s(e.date))]),t._v(" "),l("p",{staticClass:"lg:mt-4 mt-2"},[t._v("\n            "+t._s(e.title)+"\n          ")])])])})),0)])])}),[],!1,null,null,null);e.a=component.exports},401:function(t,e,l){t.exports=l.p+"img/image 1.988420e.jpg"},408:function(t,e,l){t.exports=l.p+"img/image 67.d0bfca8.jpg"},409:function(t,e,l){t.exports=l.p+"img/image 104.4949db4.jpg"},410:function(t,e,l){t.exports=l.p+"img/image 105.83e2ca5.jpg"},420:function(t,e,l){"use strict";l.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-full p-10 mt-20"},[e("img",{staticClass:"w-full h-full",attrs:{src:l(401),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-full p-10 mt-20"},[e("img",{staticClass:"w-full h-full",attrs:{src:l(401),alt:""}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"border-b-2 border-secondary w-full"},[l("h2",{staticClass:"text-secondary text-2xl font-medium tracking-widest uppercase font-graphik"},[t._v("\n        «Redaksiýanyň kitaphanasyndan»\n      ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full text-center"},[l("span",{staticClass:"font-light font-graphik text-sm"},[t._v("April 11, 2022")]),t._v(" "),l("p",{staticClass:"text-lg leading-6"},[t._v("Turkmenistan Gazeti")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-full p-10 mt-20"},[e("img",{staticClass:"w-full h-full",attrs:{src:l(408),alt:""}})])}],n=l(0),c=n.default.extend({props:{item:{type:Object,required:!0},second:{type:Boolean,default:!1}}}),o=l(12),d=Object(o.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"item cursor-pointer",class:t.second?"pt-4 border-t border-c-gray-100":"pb-4",on:{click:function(e){return t.$router.push("/news")}}},[l("div",{staticClass:"img w-full h-full relative pt-[56.25%]"},[l("img",{staticClass:"h-full w-full object-cover absolute top-0 left-0",attrs:{src:t.item.src,alt:""}})]),t._v(" "),l("div",{staticClass:"content xl:text-lg text-base mt-5"},[l("h1",[t._v(t._s(t.item.title))])]),t._v(" "),l("div",{staticClass:"bottom mt-4"},[l("span",{staticClass:"font-graphik uppercase text-primary font-medium xl:text-base text-sm"},[t._v(t._s(t.item.date))]),t._v(" "),l("span",{staticClass:"text-secondary uppercase font-graphik font-medium xl:ml-5 xl:text-base text-sm"},[t._v(t._s(t.item.section))])])])}),[],!1,null,null,null).exports,m=n.default.extend({props:{item:{type:Object,required:!0}}}),f=Object(o.a)(m,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"item cursor-pointer",on:{click:function(e){return t.$router.push("/news")}}},[l("div",{staticClass:"img w-full h-full relative pt-[58%]"},[l("img",{staticClass:"h-full w-full object-cover absolute top-0 left-0",attrs:{src:t.item.src,alt:""}})]),t._v(" "),l("div",{staticClass:"content xl:mt-10 mt-8"},[l("h1",{staticClass:"xl:text-3xl text-xl"},[t._v("\n      "+t._s(t.item.title)+"\n    ")]),t._v(" "),l("p",{staticClass:"mt-6.5 xl:text-lg text-base"},[t._v("\n      "+t._s(t.item.content)+"\n    ")])]),t._v(" "),l("div",{staticClass:"bottom mt-4"},[l("span",{staticClass:"font-graphik uppercase text-primary font-medium xl:text-base text-sm"},[t._v(t._s(t.item.date))]),t._v(" "),l("span",{staticClass:"text-secondary uppercase font-graphik font-medium xl:ml-5 xl:text-base text-sm"},[t._v(t._s(t.item.section))])])])}),[],!1,null,null,null).exports,v=n.default.extend({name:"BaseGridLayout1",components:{NewsItem:d,NewsItemLg:f},props:{title:{type:String,default:""},list:{type:Array,required:!0}}}),_=Object(o.a)(v,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"div"},[t.title?l("div",{staticClass:"w-full py-2 border-b border-secondary mb-12"},[l("h1",{staticClass:"font-medium font-graphik text-2xl uppercase text-secondary"},[t._v("\n      "+t._s(t.title)+"\n    ")])]):t._e(),t._v(" "),l("div",{staticClass:"news flex lg:flex-row flex-col"},[l("div",{staticClass:"left xl:pr-4 pr-2 w-[25%] lg:block hidden"},[l("NewsItem",{attrs:{item:t.list[0]}}),t._v(" "),l("NewsItem",{attrs:{second:!0,item:t.list[1]}})],1),t._v(" "),l("div",{staticClass:"center lg:border-l lg:border-r border-c-gray-100 w-full lg:w-[50%] xl:px-4 px-2"},[l("NewsItemLg",{attrs:{item:t.list[2]}})],1),t._v(" "),t.$isTablet.value?l("div",{staticClass:"w-full flex flex-col mt-8"},[l("div",{staticClass:"row flex w-full border-b pb-4"},[l("div",{staticClass:"w-1/2 pr-4"},[l("div",{staticClass:"item cursor-pointer",on:{click:function(e){return t.$router.push("/news")}}},[l("div",{staticClass:"img w-full h-full relative pt-[56.25%]"},[l("img",{staticClass:"h-full w-full object-cover absolute top-0 left-0",attrs:{src:t.list[0].src,alt:""}})]),t._v(" "),l("div",{staticClass:"content text-base mt-5"},[l("h1",[t._v(t._s(t.list[0].title))])]),t._v(" "),l("div",{staticClass:"bottom mt-4"},[l("span",{staticClass:"font-graphik uppercase text-primary font-medium"},[t._v(t._s(t.list[0].date))]),t._v(" "),l("span",{staticClass:"text-secondary uppercase font-graphik font-medium"},[t._v(t._s(t.list[0].section))])])])]),t._v(" "),l("div",{staticClass:"w-1/2 pl-4 border-l"},[l("div",{staticClass:"item cursor-pointer",on:{click:function(e){return t.$router.push("/news")}}},[l("div",{staticClass:"img w-full h-full relative pt-[56.25%]"},[l("img",{staticClass:"h-full w-full object-cover absolute top-0 left-0",attrs:{src:t.list[1].src,alt:""}})]),t._v(" "),l("div",{staticClass:"content text-base mt-5"},[l("h1",[t._v(t._s(t.list[0].title))])]),t._v(" "),l("div",{staticClass:"bottom mt-4"},[l("span",{staticClass:"font-graphik uppercase text-primary font-medium"},[t._v(t._s(t.list[0].date))]),t._v(" "),l("span",{staticClass:"text-secondary uppercase font-graphik font-medium"},[t._v(t._s(t.list[0].section))])])])])]),t._v(" "),l("div",{staticClass:"row flex pt-4"},[l("div",{staticClass:"w-1/2 pr-4"},[l("div",{staticClass:"item cursor-pointer",on:{click:function(e){return t.$router.push("/news")}}},[l("div",{staticClass:"img w-full h-full relative pt-[56.25%]"},[l("img",{staticClass:"h-full w-full object-cover absolute top-0 left-0",attrs:{src:t.list[3].src,alt:""}})]),t._v(" "),l("div",{staticClass:"content text-base mt-5"},[l("h1",[t._v(t._s(t.list[0].title))])]),t._v(" "),l("div",{staticClass:"bottom mt-4"},[l("span",{staticClass:"font-graphik uppercase text-primary font-medium"},[t._v(t._s(t.list[0].date))]),t._v(" "),l("span",{staticClass:"text-secondary uppercase font-graphik font-medium"},[t._v(t._s(t.list[0].section))])])])]),t._v(" "),l("div",{staticClass:"w-1/2 pl-4 border-l"},[l("div",{staticClass:"item cursor-pointer",on:{click:function(e){return t.$router.push("/news")}}},[l("div",{staticClass:"img w-full h-full relative pt-[56.25%]"},[l("img",{staticClass:"h-full w-full object-cover absolute top-0 left-0",attrs:{src:t.list[4].src,alt:""}})]),t._v(" "),l("div",{staticClass:"content text-base mt-5"},[l("h1",[t._v(t._s(t.list[0].title))])]),t._v(" "),l("div",{staticClass:"bottom mt-4"},[l("span",{staticClass:"font-graphik uppercase text-primary font-medium"},[t._v(t._s(t.list[0].date))]),t._v(" "),l("span",{staticClass:"text-secondary uppercase font-graphik font-medium"},[t._v(t._s(t.list[0].section))])])])])])]):t._e(),t._v(" "),l("div",{staticClass:"right xl:pl-4 pl-2 w-[25%] lg:block hidden"},[l("NewsItem",{attrs:{item:t.list[3]}}),t._v(" "),l("NewsItem",{attrs:{second:!0,item:t.list[4]}})],1)])])}),[],!1,null,null,null).exports,y=l(388),w=n.default.extend({props:{title:{type:String,default:""},list:{type:Array,required:!0}}}),x=Object(o.a)(w,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"div"},[t.title?l("div",{staticClass:"w-full py-2 border-b border-secondary mb-12"},[l("h1",{staticClass:"font-medium font-graphik text-2xl uppercase text-secondary"},[t._v("\n      "+t._s(t.title)+"\n    ")])]):t._e(),t._v(" "),l("div",{staticClass:"news-wrapper w-full flex"},[l("div",{staticClass:"left w-1/2 pr-4 border-r"},[l("div",{staticClass:"lg-news cursor-pointer",on:{click:function(e){return t.$router.push("/news")}}},[l("div",{staticClass:"img-wrapper relative w-full pt-[60%] mb-4"},[l("img",{staticClass:"w-full h-full absolute top-0 left-0 object-cover",attrs:{src:t.list[0].src,alt:""}})]),t._v(" "),l("span",{staticClass:"text-primary font-graphik font-medium"},[t._v(t._s(t.list[0].date))]),t._v(" "),l("div",{staticClass:"content mt-5"},[l("h1",{staticClass:"font-georgia text-3xl"},[t._v("\n            "+t._s(t.list[0].title)+"\n          ")]),t._v(" "),l("p",{staticClass:"text-black mt-3 w-[65%]"},[t._v("\n            On “WE,” the band returns to the exhilarating anthems that once\n            made its live shows resemble tent revivals.\n          ")])])])]),t._v(" "),l("div",{staticClass:"right flex flex-wrap w-1/2 pl-4"},t._l(t.list.slice(1),(function(e,r){return l("div",{key:r,staticClass:"news-item w-1/2 cursor-pointer",class:{"pr-4":0===r||2===r,"pl-4 border-l":1===r||3===r,"pb-4 border-b":0===r||1===r,"pt-4":2===r||3===r},on:{click:function(e){return t.$router.push("/news")}}},[l("div",{staticClass:"img-wrapper"},[l("img",{staticClass:"w-full h-full object-cover",attrs:{src:e.src,alt:""}})]),t._v(" "),l("div",{staticClass:"content ml-5 w-[80%] h-full"},[l("p",{staticClass:"mt-4"},[t._v(t._s(e.title.slice(0,45))+"...")]),t._v(" "),l("span",{staticClass:"text-primary font-medium font-graphik"},[t._v(t._s(e.date))])])])})),0)])])}),[],!1,null,null,null).exports,h=n.default.extend({props:{title:{type:String,default:""},list:{type:Array,required:!0}}}),C=Object(o.a)(h,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"px-5"},t._l(t.list,(function(e,r){return l("div",{key:r,class:{"pt-10":r>0}},[l("div",{staticClass:"w-full h-full"},[l("img",{staticClass:"w-full h-full",attrs:{src:e.src,alt:""}})]),t._v(" "),t._m(0,!0),t._v(" "),l("p",{staticClass:"font-medium text-xl leading-6 mt-2"},[t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),l("span",{staticClass:"font-graphik font-light mt-1.5 block"},[t._v(t._s(e.date))])])})),0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mt-4"},[l("span",{staticClass:"text-base font-graphik font-medium text-secondary uppercase tracking-wider"},[t._v("Jemgyýet")])])}],!1,null,null,null).exports,k=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative pt-full md:pt-[60%] w-full h-full"},[e("img",{staticClass:"w-full h-full absolute top-0 left-0 object-cover",attrs:{src:l(357),alt:""}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"content mt-3 w-full"},[l("span",{staticClass:"text-primary font-graphik font-medium"},[t._v("Aprel 26, 2022")]),t._v(" "),l("p",{staticClass:"w-full whitespace-normal"},[t._v("\n          SCRMET Auksionynda Geleşikleriň Umumy Mukdary 17 million 654 müň ABŞ\n          Dollaryndan Gowrak Boldy\n        ")])])}],$=n.default.extend({props:{title:{type:String,required:!0},list:{type:Array,required:!0}}}),B=Object(o.a)($,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full px-5"},[l("div",{staticClass:"py-1 w-full border-b-2 border-secondary"},[l("h1",{staticClass:"font-graphik font-medium text-secondary tracking-wider uppercase text-2xl"},[t._v("\n      "+t._s(t.title)+"\n    ")])]),t._v(" "),l("div",{staticClass:"mt-10 overflow-x-scroll overflow-y-hidden whitespace-nowrap w-auto"},t._l(5,(function(e,r){return l("div",{key:r,staticClass:"item w-[40vw] h-full ml-4 first:ml-0 inline-block"},[t._m(0,!0),t._v(" "),t._m(1,!0)])})),0)])}),k,!1,null,null,null).exports,j=l(356),G=n.default.extend({name:"BaseHorizontalGrid2",components:{BaseButton:j.a},props:{title:{type:String,default:""},list:{type:Array,required:!0},viewAll:{type:Boolean,default:!1}}}),E=Object(o.a)(G,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"py-6"},[l("div",{staticClass:"border-b-2 border-secondary"},[l("h2",{staticClass:"text-secondary text-[1.5vw] font-medium tracking-widest uppercase font-graphik"},[t._v("\n      "+t._s(t.title)+"\n    ")])]),t._v(" "),l("div",{staticClass:"flex py-6"},t._l(t.list,(function(e,r){return l("div",{key:r,staticClass:"w-1/4 cursor-pointer",class:{"pr-4 my-2 border-r border-c-gray-100":r<3,"ml-4":r>0&&r<3,"pl-4 py-2":3===r},on:{click:function(e){return t.$router.push("/news")}}},[l("img",{staticClass:"w-full object-fit pb-4",attrs:{src:e.src,alt:""}}),t._v(" "),l("span",{staticClass:"text-primary font-medium font-graphik text-sm"},[t._v(t._s(e.date))]),t._v(" "),l("p",{staticClass:"text-lg leading-6"},[t._v("\n        "+t._s(e.content)+"\n      ")])])})),0),t._v(" "),t.viewAll?l("div",{staticClass:"flex justify-center w-full"},[l("BaseButton",{on:{click:function(e){return t.$router.push("/politics")}}},[t._v(t._s(t.$t("viewall")))])],1):t._e()])}),[],!1,null,null,null).exports,A=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"left pr-4 pb-4 lg:w-[25%] md:w-[35%] w-[50%] h-full lg:my-0 mb-20"},[e("div",{staticClass:"w-full h-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:l(409),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right pl-4 pb-4 lg:w-[25%] md:w-[35%] w-[50%] h-full lg:my-0 mt-20"},[e("div",{staticClass:"w-full h-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:l(410),alt:""}})])])}],S=Object(o.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",{staticClass:"w-full mt-10 border-collapse"},[l("tbody",[t._m(0),t._v(" "),l("tr",[l("td",{staticClass:"text-c-blue py-2 px-3 text-lg"},[t._v(t._s(t.$t("nebit")))])]),t._v(" "),t._l(5,(function(i){return l("tr",{key:i,staticClass:"odd:bg-c-lightblue"},[l("td",{staticClass:"px-3 py-2"},[t._v("Önüm ady "+t._s(i))]),t._v(" "),l("td",[t._v("$630.44")])])}))],2)])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("tr",{staticClass:"border-b border-c-gray-100"},[l("td",{staticClass:"text-secondary font-graphik font-medium uppercase pb-2 pl-3"},[t._v("\n        Harydyň Ady\n      ")]),t._v(" "),l("td",{staticClass:"text-secondary font-graphik font-medium uppercase pb-2"},[t._v("\n        Bahasy\n      ")])])}],!1,null,null,null).exports,T=n.default.extend({name:"ScremView",components:{ScremTable:S,BaseButton:j.a}}),M=Object(o.a)(T,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"screm flex lg:flex-row flex-col justify-center items-center mt-25 min-h-[37.5rem]"},[t._m(0),t._v(" "),l("div",{staticClass:"center pl-4 pr-4 lg:border-l lg:border-r border-c-gray-100 lg:w-[50%] w-full h-full flex flex-col items-center"},[l("div",{staticClass:"pb-2 w-full border-b border-c-gray-100"},[l("h1",{staticClass:"lg:text-3xl text-xl text-center",domProps:{innerHTML:t._s(t.$t("scrmet"))}})]),t._v(" "),l("div",{staticClass:"w-full"},[l("ScremTable")],1),t._v(" "),l("div",{staticClass:"flex flex-wrap gap-2 mt-8 lg:text-base text-xs"},[l("div",{staticClass:"item cursor-pointer bg-black text-white w-fit px-2 py-2"},[t._v("\n        "+t._s(t.$t("nebit"))+"\n      ")]),t._v(" "),l("div",{staticClass:"item cursor-pointer bg-c-gray-100 w-fit px-2 py-2"},[t._v("\n        "+t._s(t.$t("oba"))+"\n      ")]),t._v(" "),l("div",{staticClass:"item cursor-pointer bg-c-gray-100 w-fit px-2 py-2"},[t._v("\n        "+t._s(t.$t("mashyn"))+"\n      ")]),t._v(" "),l("div",{staticClass:"item cursor-pointer bg-c-gray-100 w-fit px-2 py-2"},[t._v("\n        "+t._s(t.$t("senagat"))+"\n      ")]),t._v(" "),l("div",{staticClass:"item cursor-pointer bg-c-gray-100 w-fit px-2 py-2"},[t._v("\n        "+t._s(t.$t("gurlushuk"))+"\n      ")])]),t._v(" "),l("BaseButton",{staticClass:"mt-20",nativeOn:{click:function(e){return t.$router.push("/scrmet")}}},[t._v(t._s(t.$t("viewall")))])],1),t._v(" "),t._m(1)])}),A,!1,null,null,null).exports,z=n.default.extend({name:"IndexPage",components:{BaseHorizontalGrid2:E,BaseHorizontalGrid:B,BaseGridLayout1:_,BaseGridLayout2:y.a,BaseGridLayout3:x,BaseMobileGrid:C,BaseButton:j.a,Screm:M},data:function(){return{list:[{src:l(357),date:"Fewral 28, 2022",title:"Türkmenistanyň Prezidenti Daniýanyň Şa Aýalyny Gutlaýar",content:null,section:"Syýasat"},{src:l(367),date:"Fewral 28, 2022",title:"Türkmenistanyň Prezidenti Amerikanyň Birleşen Ştatlarynyň Prezidentini Ikitaraplaýyn Diplomatik Gatnaşyklaryň 30 Ýyllygy bilen Gutlady",content:null,section:"Syýasat"},{src:l(358),date:"Fewral 28, 2022",title:"“Airbnb” -iň kärende jaýlary ýokarlanýar",content:"Öý kärendesi platformasy «Airbnb» omikron keseliniň köpelmegine hem-de koronawirusyň dowam etmegine garamazdan, bron etmegiň 2022-nji ýylyň ilkinji çärýeginde 102 milliondan aşandygyny duýurdy.",section:"Syýasat"},{src:l(362),date:"Fewral 28, 2022",title:"43 Geleşikler Ýerli Bir Exchangeada Hasaba Alyndy",content:null,section:"Syýasat"},{src:l(372),date:"Fewral 28, 2022",title:"Scrmet Söwdasyndaky Geleşikleriň Umumy Mukdary 96 million 537 müň ABŞ Dollaryndan Gowrak Boldy",content:null,section:"Syýasat"}],list2:[{src:l(357),date:"Fewral 28, 2022",title:"Ahalda Akhan Bedewiň Heýkeli Gurlar",content:"Halkymyzyň milli buýsanjy bolan meşhur ahalteke bedewleriniň şan-şöhratyny artdyrmak maksady bilen, Türkmenistanyň Prezidenti Karara gol"},{src:l(367),date:"Fewral 28, 2022",title:"Türkmenistanyň Prezidenti Amerikanyň Birleşen Ştatlarynyň Prezidentini Ikitaraplaýyn Diplomatik Gatnaşyklaryň 30 Ýyllygy bilen Gutlady",content:null},{src:l(358),date:"Fewral 28, 2022",title:"Türkmenistanyň Prezidenti Niderlandlaryň Patyşasyny Gutlady"},{src:l(362),date:"Fewral 28, 2022",title:"Scrmet Söwdasyndaky Geleşikleriň Umumy Mukdary 96 million 537 müň ABŞ Dollaryndan Gowrak Boldy"}],horizontalList:[{src:l(362),date:"Fewral 28, 2022",content:"The President of Turkmenistan Congratulated the President of the United Mexican States on the 30th Anniversary of Bilateral Diplomatic Relations"},{src:l(372),date:"Fewral 28, 2022",content:"The President of Turkmenistan Congratulated the President of the Syrian Arab Republic on the 30th Anniversary of Bilateral Diplomatic Relations"},{src:l(358),date:"Fewral 28, 2022",content:"The Results of the Presidental Election have been Announced"},{src:l(357),date:"Fewral 28, 2022",content:"The President of Turkmenistan Congratulated the President of the Republic of Bulgaria on the National Holiday - Freedom Day"}]}}}),L=Object(o.a)(z,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper my-10"},[t.$isMobile.value?r("BaseMobileGrid",{attrs:{list:t.list}}):r("BaseGridLayout1",{attrs:{list:t.list}}),t._v(" "),r("Screm"),t._v(" "),r("div",{staticClass:"politcs flex flex-col items-center mt-20 w-full"},[t.$isTablet.value||t.$isMobile.value?r("BaseHorizontalGrid",{attrs:{title:"Syýasat",list:t.list2}}):r("BaseGridLayout2",{attrs:{title:"Syýasat",list:t.list2}}),t._v(" "),r("BaseButton",{staticClass:"mt-20",on:{click:function(e){return t.$router.push("/politics")}}},[t._v(t._s(t.$t("viewall")))])],1),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"politcs flex flex-col items-center mt-20"},[t.$isTablet.value||t.$isMobile.value?r("BaseHorizontalGrid",{attrs:{title:"Ykdysadyýet",list:t.list2}}):r("BaseGridLayout1",{attrs:{title:"Ykdysadyýet",list:t.list}}),t._v(" "),r("BaseButton",{staticClass:"mt-20",on:{click:function(e){return t.$router.push("/politics")}}},[t._v(t._s(t.$t("viewall")))])],1),t._v(" "),r("div",{staticClass:"politcs flex flex-col items-center mt-20"},[t.$isTablet.value||t.$isMobile.value?r("BaseHorizontalGrid",{attrs:{title:"Medeniýet",list:t.list2}}):r("BaseGridLayout3",{attrs:{title:"Medeniýet",list:t.list}}),t._v(" "),r("BaseButton",{staticClass:"mt-20",on:{click:function(e){return t.$router.push("/politics")}}},[t._v(t._s(t.$t("viewall")))])],1),t._v(" "),t.$isTablet.value||t.$isMobile.value?t._e():r("div",{staticClass:"mt-10"},[r("BaseHorizontalGrid2",{attrs:{title:"Mediýa",list:t.horizontalList,"view-all":""}})],1),t._v(" "),t._m(1),t._v(" "),t.$isTablet.value||t.$isMobile.value?t._e():r("div",{staticClass:"politcs flex flex-col items-center mt-20"},[r("BaseGridLayout2",{attrs:{title:"Söwda",list:t.list2}}),t._v(" "),r("BaseButton",{staticClass:"mt-20",on:{click:function(e){return t.$router.push("/politics")}}},[t._v(t._s(t.$t("viewall")))])],1),t._v(" "),t.$isTablet.value||t.$isMobile.value?t._e():r("div",{staticClass:"politcs flex flex-col items-center mt-20"},[r("BaseGridLayout1",{attrs:{title:"Sport",list:t.list}}),t._v(" "),r("BaseButton",{staticClass:"mt-20",on:{click:function(e){return t.$router.push("/politics")}}},[t._v(t._s(t.$t("viewall")))])],1),t._v(" "),t.$isTablet.value||t.$isMobile.value?t._e():r("div",{staticClass:"politcs flex flex-col items-center mt-20"},[r("BaseGridLayout3",{attrs:{title:"Edebiýat",list:t.list}}),t._v(" "),r("BaseButton",{staticClass:"mt-20",on:{click:function(e){return t.$router.push("/politics")}}},[t._v(t._s(t.$t("viewall")))])],1),t._v(" "),r("div",{staticClass:"py-6 w-full mt-20 md:px-0 px-5"},[t._m(2),t._v(" "),r("div",{staticClass:"w-full flex flex-wrap mt-10 md:gap-8 gap-4 justify-between"},t._l(4,(function(e,n){return r("div",{key:n,staticClass:"md:w-[calc(25%-2rem)] w-[calc(50%-1rem)] cursor-pointer",on:{click:function(e){return t.$router.push("/news")}}},[r("img",{staticClass:"w-full object-fit pb-4",attrs:{src:l(366),alt:""}}),t._v(" "),t._m(3,!0)])})),0)]),t._v(" "),t.$isTablet.value||t.$isMobile.value?t._e():r("div",{staticClass:"politcs flex flex-col items-center mt-20"},[r("BaseGridLayout2",{attrs:{title:"Jemgyýet",list:t.list2}}),t._v(" "),r("BaseButton",{staticClass:"mt-20",on:{click:function(e){return t.$router.push("/politics")}}},[t._v(t._s(t.$t("viewall")))])],1),t._v(" "),t.$isTablet.value||t.$isMobile.value?t._e():r("div",{staticClass:"politcs flex flex-col items-center mt-20"},[r("BaseGridLayout1",{attrs:{title:"Dünýä",list:t.list}}),t._v(" "),r("BaseButton",{staticClass:"mt-20",on:{click:function(e){return t.$router.push("/politics")}}},[t._v(t._s(t.$t("viewall")))])],1),t._v(" "),t._m(4)],1)}),r,!1,null,null,null);e.default=L.exports}}]);