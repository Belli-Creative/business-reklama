(window.webpackJsonp=window.webpackJsonp||[]).push([[17,23],{355:function(t,e,n){t.exports=n.p+"img/image 84.883aeeb.png"},360:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"NewsComponent",props:{title:{type:String,default:""},list:{type:Array,required:!0},viewAll:{type:Boolean,default:!1}}}),r=n(12),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-6"},[n("div",{staticClass:"border-b-2 border-secondary"},[n("h2",{staticClass:"text-secondary text-[1.5vw] font-medium tracking-widest uppercase font-graphik"},[t._v("\n      "+t._s(t.title)+"\n    ")])]),t._v(" "),n("div",{staticClass:"flex items-center py-6"},t._l(t.list,(function(e,l){return n("div",{key:l,staticClass:"w-1/4",class:{"pr-4 my-2 border-r border-c-gray-100":l<3,"ml-4":l>0&&l<3,"pl-4 py-2":3===l}},[n("img",{staticClass:"w-full object-fit pb-4",attrs:{src:e.img,alt:""}}),t._v(" "),n("span",{staticClass:"text-primary font-medium font-graphik text-sm"},[t._v(t._s(e.date))]),t._v(" "),n("p",{staticClass:"text-lg leading-6"},[t._v("\n        "+t._s(e.content)+"\n      ")])])})),0),t._v(" "),t.viewAll?n("div",{staticClass:"flex justify-center w-full"},[n("button",{staticClass:"w-[15vw] text-white font-graphik px-10 py-2 text-center bg-primary"},[n("span",[t._v(" "+t._s(t.$t("viewall"))+" ")])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},375:function(t,e,n){"use strict";n.r(e);var l=n(0),r=n(360),y=n(370),d=l.default.extend({name:"IdPage",components:{NewsId:y.default,News:r.default},data:function(){return{list:[{date:"Mart 27, 2022",content:"Türkmenistanyň Prezidenti Amerikanyň Birleşen Ştatlarynyň Prezidentini Ikitaraplaýyn Diplomatik Gatnaşyklaryň 30 ýyllygy bilen Gutlady",img:n(355)},{date:"Mart 27, 2022",content:"Türkmenistanyň Prezidenti Amerikanyň Birleşen Ştatlarynyň Prezidentini Ikitaraplaýyn Diplomatik Gatnaşyklaryň 30 ýyllygy bilen Gutlady",img:n(355)},{date:"Mart 27, 2022",content:"Türkmenistanyň Prezidenti Amerikanyň Birleşen Ştatlarynyň Prezidentini Ikitaraplaýyn Diplomatik Gatnaşyklaryň 30 ýyllygy bilen Gutlady",img:n(355)},{date:"Mart 27, 2022",content:"Türkmenistanyň Prezidenti Amerikanyň Birleşen Ştatlarynyň Prezidentini Ikitaraplaýyn Diplomatik Gatnaşyklaryň 30 ýyllygy bilen Gutlady",img:n(355)}]}}}),c=n(12),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full h-full"},[n("div",{staticClass:"w-full pt-10 pb-20"},[n("NewsId"),t._v(" "),n("News",{attrs:{title:"Meňzeş Habarlar",list:t.list}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);