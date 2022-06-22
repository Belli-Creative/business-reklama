(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{238:function(t,e,r){"use strict";r.r(e);r(45),r(41),r(53),r(40),r(54);var n=r(6),c=r(20),l=(r(44),r(13),r(22),r(23),r(166),r(64),r(26),r(35),r(78),r(0)),o=r(91),v=r(386),d=r(387),f=r(388),h=r(389),m=r(390),w=r(391),_=r(392),y=r(377),C=r(393),L=r(394);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=[{city:"Aşgabat",lon:"58.383331",lat:"37.950001"},{city:"Balkan",lon:"54.5",lat:"40"},{city:"Mary",lon:"62.5",lat:"37"},{city:"Ahal",lon:"59.75",lat:"38.25"},{city:"Daşoguz",lon:"59.966621",lat:"41.83625"},{city:"Lebap",lon:"63",lat:"39"}],k=l.default.extend({name:"AppHeaderWeather",components:{IconClearSky:v.a,IconFewClouds:d.a,IconScatteredClouds:f.a,IconShowerRain:h.a,IconRain:m.a,IconThunderStorm:w.a,IconSnow:_.a,IconProfile:y.a,IconMist:C.a,IconChevron:L.a},data:function(){return{timer:null,temp:null,weatherDescription:null,active:!1}},computed:A(A({},Object(o.b)("weather",["temperature","isCelcius"])),{},{cityList:function(){for(var t=[],i=0;i<O.length;i++)O[i].city!==this.temperature.city&&t.push(O[i]);return t}}),watch:{temperature:{deep:!0,handler:function(){this.timer&&clearTimeout(this.timer),this.getWeather()}}},mounted:function(){this.getWeather()},destroyed:function(){this.timer&&clearTimeout(this.timer)},methods:A(A({},Object(o.c)("weather",["setTemperature","setIsCelcius"])),{},{getWeather:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(r=new URLSearchParams).append("lon",t.temperature.lon),r.append("lat",t.temperature.lat),r.append("units",t.temperature.units),r.append("appid","4f4c91d52c6d533db540661c2f9b99d3"),e.next=8,t.$api.get("https://api.openweathermap.org/data/2.5/weather",r.toString());case 8:n=e.sent,t.temp=Math.round(n.data.main.temp),t.weatherDescription=n.data.weather[0].description,t.timer=setTimeout((function(){t.getWeather()}),6e4),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()},changeUnit:function(t){if(t){var e=A(A({},this.temperature),{},{units:"imperial"});this.setTemperature(e),this.setIsCelcius(!1)}else{var r=A(A({},this.temperature),{},{units:"metric"});this.setTemperature(r),this.setIsCelcius(!0)}},changeLocation:function(t){var e=O.reduce((function(e,r,n){return r.city===t?e+n:e}),0),r=A(A({},this.temperature),{},{city:O[e].city,lon:O[e].lon,lat:O[e].lat});this.setTemperature(r)}})}),S=r(12),component=Object(S.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center left w-1/3"},[r("div",{staticClass:"flex justify-start relative lg:pr-5"},[r("div",{staticClass:"flex items-center my-2 w-20 cursor-pointer",on:{click:function(e){t.active=!0}}},[r("div",{staticClass:"w-full flex items-center"},[r("h1",{staticClass:"font-medium font-graphik mr-1 lg:text-base text-sm"},[t._v("\n          "+t._s(t.$t(t.temperature.city))+"\n        ")]),t._v(" "),r("div",{staticClass:"w-4"},[r("IconChevron")],1)])]),t._v(" "),r("div",{staticClass:"fixed top-0 left-0 w-full h-full z-[9999]",class:{hidden:!t.active},on:{click:function(e){t.active=!1}}}),t._v(" "),r("div",{staticClass:"absolute top-0 -left-4 bg-white w-30 z-[10000] border divide-y px-4",class:{hidden:!t.active},staticStyle:{"box-shadow":"0px 4px 4px rgba(0, 0, 0, 0.15)"}},[r("div",{staticClass:"py-2 flex items-center cursor-pointer",on:{click:function(e){t.active=!1}}},[r("h1",{staticClass:"font-medium font-graphik mr-1"},[t._v("\n          "+t._s(t.$t(t.temperature.city))+"\n        ")]),t._v(" "),r("IconChevron",{attrs:{width:"10",height:"10"}})],1),t._v(" "),t._l(t.cityList,(function(e,n){return r("div",{key:n,staticClass:"py-2 cursor-pointer",on:{click:function(r){return t.changeLocation(e.city)}}},[r("span",{staticClass:"font-graphik"},[t._v("\n          "+t._s(t.$t(e.city))+"\n        ")])])}))],2)]),t._v(" "),r("div",{staticClass:"flex items-center justify-center relative lg:px-5 pr-5 pl-2 border-r-0 lg:border-r border-l"},[r("div",{staticClass:"w-7 mr-2"},["clear sky"===t.weatherDescription?r("IconClearSky"):"few clouds"===t.weatherDescription?r("IconFewClouds"):"scattered clouds"===t.weatherDescription||"broken clouds"===t.weatherDescription||"overcast clouds"===t.weatherDescription?r("IconScatteredClouds"):"shower rain"===t.weatherDescription?r("IconShowerRain"):"rain"===t.weatherDescription?r("IconRain"):"thunderstorm"===t.weatherDescription?r("IconThunderStorm"):"snow"===t.weatherDescription?r("IconSnow"):"mist"===t.weatherDescription?r("IconMist"):t._e()],1),t._v(" "),r("span",{staticClass:"font-medium font-graphik text-2xl"},[t._v(t._s(t.temp))]),t._v(" "),r("div",{staticClass:"flex items-center font-graphik relative bottom-2 ml-1"},[r("span",{staticClass:"text-xs mr-1 pr-1 border-r border-c-gray-300 cursor-pointer",class:{"font-medium":t.isCelcius},on:{click:function(e){return t.changeUnit(!1)}}},[t._v("°C")]),t._v(" "),r("span",{staticClass:"text-xs cursor-pointer",class:{"font-medium":!t.isCelcius},on:{click:function(e){return t.changeUnit(!0)}}},[t._v("°F")])])]),t._v(" "),t.$isTablet.value?t._e():r("div",{staticClass:"flex justify-end"},[r("div",{staticClass:"w-12 pl-5 cursor-pointer",on:{click:function(e){return t.$emit("openModal")}}},[r("IconProfile")],1)])])}),[],!1,null,null,null);e.default=component.exports},377:function(t,e,r){"use strict";var n=r(12),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M11.0037 10.3547C12.2457 10.3547 13.2525 9.32182 13.2525 8.04771C13.2525 6.7736 12.2457 5.74072 11.0037 5.74072C9.76171 5.74072 8.75488 6.7736 8.75488 8.04771C8.75488 9.32182 9.76171 10.3547 11.0037 10.3547Z",fill:"black"}}),t._v(" "),r("path",{attrs:{d:"M15.0749 15.5186C15.0749 13.2258 13.2355 11.3389 11.0006 11.3389C8.76564 11.3389 6.92676 13.2258 6.92676 15.5186H15.0749Z",fill:"black"}}),t._v(" "),r("circle",{attrs:{cx:"11",cy:"11",r:"10",stroke:"black","stroke-width":"0.740741"}})])}),[],!1,null,null,null);e.a=component.exports},386:function(t,e,r){"use strict";var n=r(12),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 142.68 142.68"}},[r("defs",[r("style",[t._v("\n      .cls-1 {\n        fill: #f9d953;\n      }\n    ")])]),t._v(" "),r("title",[t._v("Asset 27")]),t._v(" "),r("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[r("g",{attrs:{id:"Layer_1-2","data-name":"Layer 1"}},[r("circle",{staticClass:"cls-1",attrs:{cx:"71.34",cy:"71.34",r:"71.34"}})])])])}),[],!1,null,null,null);e.a=component.exports},387:function(t,e,r){"use strict";var n=r(12),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 231.16 149.06"}},[r("defs",[r("style",[t._v("\n      .cls-1 {\n        fill: #f9d953;\n      }\n      .cls-2 {\n        fill: #e0e0e0;\n      }\n    ")])]),t._v(" "),r("title",[t._v("Asset 28")]),t._v(" "),r("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[r("g",{attrs:{id:"Layer_1-2","data-name":"Layer 1"}},[r("path",{staticClass:"cls-1",attrs:{d:"M222,58.5a58.32,58.32,0,0,1-15.15,39.29l-.06-.13c-5.54-11.74-15.08-19.12-27.6-21.35-.78-.14-1.55-.26-2.33-.36C174,55.26,164.19,39.48,148.21,30a37.55,37.55,0,0,0-19.48-5.15A52.28,52.28,0,0,0,114.24,27,58.5,58.5,0,0,1,222,58.5Z"}}),t._v(" "),r("path",{staticClass:"cls-2",attrs:{d:"M104.29,90.58a32.09,32.09,0,0,1,8.51-2.91,34.32,34.32,0,0,1,6.45-.6,44.26,44.26,0,0,1,18.5,4.41,42.54,42.54,0,0,1,33.08-15.93h.94c-2.36-15.41-9.33-31.31-26.12-41.31a32.6,32.6,0,0,0-16.92-4.45,50.37,50.37,0,0,0-18.11,3.69,40.37,40.37,0,0,0-4.18,1.9S90.93,9.09,66.85,9.09a35.75,35.75,0,0,0-13.31,2.66C22,24.36,31.83,54.65,31.83,54.65S9.2,55,1.3,81.37C-4.8,101.7,12.56,120,12.56,120H88.87C88.29,110.28,91.1,97.23,104.29,90.58Zm124.59,35.93c-6.52-11-18.83-11.72-21.86-11.72-.44,0-.69,0-.69,0a44.08,44.08,0,0,0-3.25-13.21c-3.43-8.27-10.45-17.82-24.76-20.37l-.88-.14c-.86-.15-1.71-.25-2.54-.33s-1.7-.15-2.52-.18l-1.55,0C149.4,80.55,139.22,98,139.22,98a40.22,40.22,0,0,0-20-5.89,27.73,27.73,0,0,0-3.5.21A27.31,27.31,0,0,0,106.54,95C94.65,101,93.42,112.82,93.92,120c.07.92.16,1.76.26,2.5.14,1,.3,1.89.43,2.5s.24,1,.24,1a18,18,0,0,0-3.78-.38c-3,0-7.18.72-9.86,4.2C74.36,138.64,83,149.06,83,149.06l145.85-.9S234,135.2,228.88,126.51Z"}})])])])}),[],!1,null,null,null);e.a=component.exports},388:function(t,e,r){"use strict";var n=r(12),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 231.17 128.24"}},[r("defs",[r("style",[t._v("\n      .cls-1 {\n        fill: #e0e0e0;\n      }\n    ")])]),t._v(" "),r("title",[t._v("Asset 29")]),t._v(" "),r("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[r("g",{attrs:{id:"Layer_1-2","data-name":"Layer 1"}},[r("path",{staticClass:"cls-1",attrs:{d:"M228.84,105.22c-6.66-11.24-19.22-12-22.31-12h-.71S204.34,63.83,177.24,59q-1-.18-1.92-.3c-.9-.13-1.79-.22-2.66-.29s-1.75-.1-2.6-.1h-.47c-21.87,0-32.26,17.77-32.26,17.77a41,41,0,0,0-20.38-6,28.48,28.48,0,0,0-13,3C85.8,82.26,92,104.67,92,104.67a17.73,17.73,0,0,0-3.85-.4c-3.08,0-7.33.75-10.07,4.29a13.7,13.7,0,0,0-1.45,2.33,11.9,11.9,0,0,0-.89,2.5,12.09,12.09,0,0,0-.33,2.5c-.23,6.62,4.53,12.35,4.53,12.35l148.86-.93S234.08,114.09,228.84,105.22ZM86.22,91.8c1.12-10.61,6.48-18.61,15.5-23.16A33.43,33.43,0,0,1,117,65.07a44.94,44.94,0,0,1,18.91,4.53,43.28,43.28,0,0,1,32.65-16.27,52.2,52.2,0,0,0-22.85-28.17,32.61,32.61,0,0,0-16.93-4.45,51.55,51.55,0,0,0-22.28,5.58S90.94,0,66.85,0A35.55,35.55,0,0,0,53.54,2.66C22,15.27,31.83,45.56,31.83,45.56S9.2,46,1.3,72.28c-6.1,20.33,11.27,38.61,11.27,38.61H71.29a17.59,17.59,0,0,1,2.88-5.39,16.63,16.63,0,0,1,12-6.14A41,41,0,0,1,86.22,91.8Z"}})])])])}),[],!1,null,null,null);e.a=component.exports},389:function(t,e,r){"use strict";var n=r(12),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 267.22 204.17"}},[r("defs",[r("style",[t._v("\n      .cls-1 {\n        fill: #00a4ff;\n      }\n      .cls-2 {\n        fill: #e0e0e0;\n      }\n    ")])]),t._v(" "),r("title",[t._v("Asset 24")]),t._v(" "),r("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[r("g",{attrs:{id:"Layer_1-2","data-name":"Layer 1"}},[r("path",{staticClass:"cls-1",attrs:{d:"M10.18,198.39a5,5,0,0,1-4.3-7.55L38.21,136.1a5,5,0,0,1,8.61,5.08L14.49,195.93A5,5,0,0,1,10.18,198.39Z"}}),t._v(" "),r("path",{staticClass:"cls-1",attrs:{d:"M54.05,204.17a5,5,0,0,1-2.53-.69,5,5,0,0,1-1.77-6.85l32.33-54.75A5,5,0,1,1,90.69,147L58.36,201.71A5,5,0,0,1,54.05,204.17Z"}}),t._v(" "),r("path",{staticClass:"cls-2",attrs:{d:"M124.06,90.06c.37-.19.75-.37,1.13-.53-.65-6.13.1-13.27,5-18.71,4.55-5,10.79-6.49,14.9-6.9,1.79-7.26,7-16.9,18.35-21.22a51.37,51.37,0,0,0-17.82-17.54,32.54,32.54,0,0,0-16.92-4.44,51.55,51.55,0,0,0-22.28,5.58S90.94,0,66.85,0A35.57,35.57,0,0,0,53.54,2.67C22,15.28,31.83,45.57,31.83,45.57S9.2,46,1.3,72.28C-4.8,92.62,12.57,110.9,12.57,110.9h98.14C111.3,103.35,114.62,94.82,124.06,90.06Zm86.79,21.08c-.37,0-.58,0-.58,0a32.93,32.93,0,0,0-1-5.66c-.19-.79-.42-1.62-.71-2.5s-.54-1.64-.88-2.5c-2.82-7.06-8.72-15.4-21-17.59a35.49,35.49,0,0,0-6.3-.58,31.31,31.31,0,0,0-7.68.94A32.75,32.75,0,0,0,153.81,97,33.83,33.83,0,0,0,137,92a24.09,24.09,0,0,0-6.25.8,24.91,24.91,0,0,0-2.4.79c-.68.26-1.37.57-2.05.91l-.26.14c-7.52,3.91-9.84,10.62-10.32,16.23a30.45,30.45,0,0,0,.75,9.65,14.68,14.68,0,0,0-3.18-.33c-2.54,0-6,.62-8.29,3.54-5.76,7.44,1.53,16.22,1.53,16.22l122.71-.77s4.32-10.9,0-18.21C223.76,111.73,213.41,111.14,210.85,111.14Zm43.68-39.46a20.39,20.39,0,0,0-6.45-1.05,19,19,0,0,0-9.5,2.43s1.92-15.29-9.4-19.89a18.06,18.06,0,0,0-6.91-1.38c-9.68,0-16.89,7.71-16.89,7.71s-7.6-14.29-27-14.29A44.71,44.71,0,0,0,170,46a27.91,27.91,0,0,0-4.13,1.1c-15.53,5.4-16.52,21.7-16.52,21.7s-.55-.06-1.47-.06c-2.93,0-9.6.58-14,5.42-3.47,3.82-4.21,9-3.88,13.67a29.17,29.17,0,0,1,7-.83,37.84,37.84,0,0,1,15.35,3.53,37.12,37.12,0,0,1,20.38-12.43,36.26,36.26,0,0,1,7.67-.8,41.31,41.31,0,0,1,7.18.65c10.79,1.93,19,8.29,23.8,18.41a39.76,39.76,0,0,1,1.66,4.11h54S269.71,76.68,254.53,71.68Z"}})])])])}),[],!1,null,null,null);e.a=component.exports},390:function(t,e,r){"use strict";var n=r(12),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 253.26 213.25"}},[r("defs",[r("style",[t._v("\n      .cls-1 {\n        fill: #00a4ff;\n      }\n      .cls-2 {\n        fill: #f9d953;\n      }\n      .cls-3 {\n        fill: #e0e0e0;\n      }\n    ")])]),t._v(" "),r("title",[t._v("Asset 30")]),t._v(" "),r("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[r("g",{attrs:{id:"Layer_1-2","data-name":"Layer 1"}},[r("path",{staticClass:"cls-1",attrs:{d:"M5,207.46a5,5,0,0,1-4.3-7.54L33,145.18a5,5,0,1,1,8.61,5.08L9.31,205A5,5,0,0,1,5,207.46Z"}}),t._v(" "),r("path",{staticClass:"cls-1",attrs:{d:"M48.87,213.25a4.92,4.92,0,0,1-2.54-.7,5,5,0,0,1-1.76-6.84L76.9,151a5,5,0,0,1,8.61,5.09L53.18,210.79A5,5,0,0,1,48.87,213.25Z"}}),t._v(" "),r("path",{staticClass:"cls-2",attrs:{d:"M244.11,58.49A58.38,58.38,0,0,1,229,97.78l-.06-.13c-5.54-11.74-15.09-19.12-27.61-21.35-.78-.14-1.56-.26-2.33-.36-2.89-20.7-12.67-36.48-28.66-46a37.51,37.51,0,0,0-19.47-5.15A52.72,52.72,0,0,0,136.34,27,58.5,58.5,0,0,1,244.11,58.49Z"}}),t._v(" "),r("path",{staticClass:"cls-3",attrs:{d:"M126.39,90.57a31.78,31.78,0,0,1,8.52-2.9,34.24,34.24,0,0,1,6.45-.6,44.22,44.22,0,0,1,18.49,4.4,42.54,42.54,0,0,1,33.08-15.93h.94c-2.36-15.41-9.33-31.31-26.12-41.31a32.55,32.55,0,0,0-16.92-4.45,50.47,50.47,0,0,0-18.1,3.69,40.37,40.37,0,0,0-4.18,1.9S113,9.08,89,9.08a35.75,35.75,0,0,0-13.31,2.66c-31.53,12.61-21.71,42.9-21.71,42.9S31.3,55,23.4,81.36C17.3,101.7,34.67,120,34.67,120H111C110.39,110.27,113.2,97.22,126.39,90.57ZM251,126.5c-6.52-11-18.82-11.72-21.86-11.72-.44,0-.69,0-.69,0a44.11,44.11,0,0,0-3.25-13.22c-3.43-8.27-10.45-17.81-24.76-20.36l-.88-.14c-.86-.15-1.71-.25-2.54-.33s-1.7-.15-2.52-.18l-1.55,0C171.51,80.54,161.32,98,161.32,98a40.21,40.21,0,0,0-20-5.88,28,28,0,0,0-3.51.21A27.21,27.21,0,0,0,128.64,95C116.75,101,115.52,112.81,116,120c.07.92.16,1.76.26,2.5.14,1,.3,1.89.43,2.5s.24,1,.24,1a18,18,0,0,0-3.78-.38c-3,0-7.17.73-9.86,4.2-6.84,8.85,1.82,19.28,1.82,19.28L251,148.15S256.12,135.19,251,126.5Z"}})])])])}),[],!1,null,null,null);e.a=component.exports},391:function(t,e,r){"use strict";var n=r(12),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 231.16 184.11"}},[r("defs",[r("style",[t._v("\n      .cls-1 {\n        fill: #e0e0e0;\n      }\n      .cls-2 {\n        fill: #f9d953;\n      }\n    ")])]),t._v(" "),r("title",[t._v("Asset 23")]),t._v(" "),r("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[r("g",{attrs:{id:"Layer_1-2","data-name":"Layer 1"}},[r("path",{staticClass:"cls-1",attrs:{d:"M104.28,81.49a33,33,0,0,1,15-3.5,44.15,44.15,0,0,1,18.5,4.41,42.53,42.53,0,0,1,33.08-15.94h.94c-2.36-15.4-9.33-31.3-26.12-41.31a32.68,32.68,0,0,0-16.92-4.44,51.62,51.62,0,0,0-22.29,5.58S90.93,0,66.85,0A35.57,35.57,0,0,0,53.54,2.67C22,15.28,31.83,45.57,31.83,45.57S9.2,46,1.3,72.29C-4.8,92.62,12.56,110.9,12.56,110.9H88.87C88.29,101.21,91.1,88.14,104.28,81.49Zm124.6,35.94c-6.52-11-18.83-11.72-21.86-11.72h-.69s-1.46-28.85-28-33.57l-.89-.14c-.86-.15-1.71-.26-2.54-.34s-1.69-.15-2.51-.18l-1.55,0c-21.43,0-31.61,17.42-31.61,17.42a40.22,40.22,0,0,0-20-5.89,28,28,0,0,0-12.72,3c-11.89,6-13.11,17.79-12.61,25,.07.92.16,1.76.26,2.5.15,1,.31,1.9.43,2.5s.24,1,.24,1a18,18,0,0,0-3.78-.38c-3,0-7.18.73-9.86,4.2C74.36,129.55,83,140,83,140l145.85-.91S234,126.11,228.88,117.43Z"}}),t._v(" "),r("polygon",{staticClass:"cls-2",attrs:{points:"52.88 124.41 47.52 124.41 68.53 89.45 41.12 89.45 25.38 128.08 20.76 139.41 31.83 139.41 40.64 139.41 18.16 183.07 19.75 184.11 59.16 136.03 68.67 124.41 52.88 124.41"}})])])])}),[],!1,null,null,null);e.a=component.exports},392:function(t,e,r){"use strict";var n=r(12),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.94 145.88"}},[r("defs",[r("style",[t._v("\n      .cls-1 {\n        fill: #00a4ff;\n      }\n    ")])]),t._v(" "),r("title",[t._v("Asset 26")]),t._v(" "),r("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[r("g",{attrs:{id:"Layer_1-2","data-name":"Layer 1"}},[r("path",{staticClass:"cls-1",attrs:{d:"M124,78l-22.89,9.74L75.47,72.94l25.62-14.79L124,67.89a4.88,4.88,0,0,0,2,.4,5,5,0,0,0,2-9.6l-16-6.8,14.88-8.59a5,5,0,1,0-5-8.66l-14.88,8.59L109,26a5,5,0,1,0-9.93-1.21l-3,24.7L70.47,64.28V34.7l19.89-15a5,5,0,1,0-6-8L70.47,22.18V5a5,5,0,0,0-10,0V22.18L46.6,11.75a5,5,0,0,0-6,8l19.88,15V64.28L34.85,49.49l-3-24.7A5,5,0,1,0,21.92,26L24,43.23,9.13,34.64a5,5,0,0,0-5,8.66L19,51.89,3,58.69a5,5,0,0,0,2,9.6,4.84,4.84,0,0,0,2-.4l22.89-9.74L55.47,72.94,29.85,87.73,7,78A5,5,0,1,0,3,87.19L19,94,4.13,102.58a5,5,0,0,0,2.51,9.33,4.88,4.88,0,0,0,2.49-.67L24,102.65l-2.09,17.23a5,5,0,0,0,4.36,5.57c.2,0,.41,0,.61,0a5,5,0,0,0,4.95-4.4l3-24.7L60.47,81.6v29.59l-19.88,15a5,5,0,0,0,6,8L60.47,123.7v17.18a5,5,0,0,0,10,0V123.7l13.88,10.43a5,5,0,0,0,7-1,5,5,0,0,0-1-7l-19.89-15V81.6L96.09,96.39l3,24.7a5,5,0,0,0,5,4.4c.2,0,.4,0,.61,0a5,5,0,0,0,4.36-5.57l-2.1-17.23,14.88,8.59a4.94,4.94,0,0,0,2.5.67,5,5,0,0,0,2.5-9.33L111.93,94l16-6.8A5,5,0,0,0,124,78Z"}})])])])}),[],!1,null,null,null);e.a=component.exports},393:function(t,e,r){"use strict";var n=r(12),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 156.36 81.91"}},[r("defs",[r("style",[t._v("\n      .cls-1 {\n        fill: #52daff;\n      }\n      .cls-2 {\n        fill: #95ebf9;\n      }\n    ")])]),t._v(" "),r("title",[t._v("Asset 25")]),t._v(" "),r("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[r("g",{attrs:{id:"Layer_1-2","data-name":"Layer 1"}},[r("path",{staticClass:"cls-1",attrs:{d:"M2.46,10.44a26.19,26.19,0,0,0,13.41,3.9h.42a20.39,20.39,0,0,0,9.42-2.51,13.9,13.9,0,0,1,5.22-1.68,9.87,9.87,0,0,1,5.67,1.08,25.65,25.65,0,0,0,10.95,2.31h0a22.51,22.51,0,0,0,8.85-1.64A13.62,13.62,0,0,1,62,10.82a17.23,17.23,0,0,1,7.09,1.32,23.41,23.41,0,0,0,10.38,1.71,21.74,21.74,0,0,0,9.17-2.37,10.52,10.52,0,0,1,5.1-1.3,12.83,12.83,0,0,1,6.45,1.46,21.36,21.36,0,0,0,10.59,2.21,21,21,0,0,0,9.47-2.62A7.83,7.83,0,0,1,125.05,10a12.65,12.65,0,0,1,5.18,1.48,22.43,22.43,0,0,0,8.9,2.36A26.59,26.59,0,0,0,153.86,10a5,5,0,1,0-5-8.66,16.83,16.83,0,0,1-9.26,2.53,12.68,12.68,0,0,1-5.24-1.48A22.1,22.1,0,0,0,125.52,0a17.48,17.48,0,0,0-9.79,2.28,11,11,0,0,1-5.37,1.55,11.59,11.59,0,0,1-6.13-1.37A22.5,22.5,0,0,0,93.49.18,20.29,20.29,0,0,0,84.4,2.43,12.13,12.13,0,0,1,79,3.86,14.09,14.09,0,0,1,72.5,2.74,26.64,26.64,0,0,0,61.88.82a23.54,23.54,0,0,0-9,1.71,12.88,12.88,0,0,1-5.36,1h0A16.05,16.05,0,0,1,40.42,2,19.59,19.59,0,0,0,29.94.2a23.36,23.36,0,0,0-8.61,2.64,10.75,10.75,0,0,1-5.22,1.5A16.19,16.19,0,0,1,7.54,1.83a5,5,0,0,0-5.08,8.61Zm146.4,35.75a16.83,16.83,0,0,1-9.26,2.53,12.68,12.68,0,0,1-5.24-1.48,22.24,22.24,0,0,0-8.84-2.36,17.55,17.55,0,0,0-9.79,2.29,11,11,0,0,1-5.37,1.55,11.59,11.59,0,0,1-6.13-1.37A22.38,22.38,0,0,0,93.49,45a20.29,20.29,0,0,0-9.09,2.25A12.13,12.13,0,0,1,79,48.72,14.09,14.09,0,0,1,72.5,47.6a26.64,26.64,0,0,0-10.62-1.92,23.54,23.54,0,0,0-9,1.71,12.88,12.88,0,0,1-5.36,1h0a16.05,16.05,0,0,1-7.13-1.55,19.59,19.59,0,0,0-10.48-1.79,23.36,23.36,0,0,0-8.61,2.64,10.75,10.75,0,0,1-5.22,1.5,16.21,16.21,0,0,1-8.57-2.51A5,5,0,0,0,2.46,55.3a26.19,26.19,0,0,0,13.41,3.9h.42a20.39,20.39,0,0,0,9.42-2.51A13.9,13.9,0,0,1,30.93,55a9.87,9.87,0,0,1,5.67,1.08A25.81,25.81,0,0,0,47.55,58.4h0a22.51,22.51,0,0,0,8.85-1.64A13.62,13.62,0,0,1,62,55.68,17.06,17.06,0,0,1,69.1,57a23.55,23.55,0,0,0,10.38,1.71,21.74,21.74,0,0,0,9.17-2.37,10.52,10.52,0,0,1,5.1-1.3,12.83,12.83,0,0,1,6.45,1.46,21.36,21.36,0,0,0,10.59,2.21,21,21,0,0,0,9.47-2.62,7.85,7.85,0,0,1,4.79-1.22,12.49,12.49,0,0,1,5.18,1.48,22.43,22.43,0,0,0,8.9,2.36,26.61,26.61,0,0,0,14.73-3.86,5,5,0,0,0-5-8.66Z"}}),t._v(" "),r("path",{staticClass:"cls-2",attrs:{d:"M19.2,36.37a22.66,22.66,0,0,1,11.91-3.48,17.65,17.65,0,0,1,6.52,1.51,24.37,24.37,0,0,0,11,2,20,20,0,0,0,8.62-2.28,9.63,9.63,0,0,1,4.72-1.24,11.39,11.39,0,0,1,5.81,1.29,25.78,25.78,0,0,0,10,2.39,21.38,21.38,0,0,0,9-1.4A17.36,17.36,0,0,1,93,34a19.57,19.57,0,0,1,7.26,1.07A25.43,25.43,0,0,0,110.4,36.4a29,29,0,0,0,9.2-2.06,16.24,16.24,0,0,1,5.61-1.29,23.28,23.28,0,0,1,12.65,3.35,5,5,0,0,0,4.93-8.7,33.15,33.15,0,0,0-18.06-4.64,26.15,26.15,0,0,0-8.6,1.9,19.19,19.19,0,0,1-6.34,1.46,15.91,15.91,0,0,1-6.66-.9A29.26,29.26,0,0,0,92.68,24a27.39,27.39,0,0,0-9.22,1.71,11.75,11.75,0,0,1-5.31.86A16,16,0,0,1,71.68,25,21.26,21.26,0,0,0,61.63,22.9a19.29,19.29,0,0,0-8.74,2.22,10.49,10.49,0,0,1-4.79,1.3,15,15,0,0,1-6.93-1.37,27.47,27.47,0,0,0-9.82-2.16,32.55,32.55,0,0,0-17.19,4.84,5,5,0,1,0,5,8.64ZM142.79,72.56a33.15,33.15,0,0,0-18.06-4.64,26.15,26.15,0,0,0-8.6,1.9,19.19,19.19,0,0,1-6.34,1.46,15.91,15.91,0,0,1-6.66-.9,29.26,29.26,0,0,0-10.45-1.51,27.39,27.39,0,0,0-9.22,1.71,11.75,11.75,0,0,1-5.31.86,16,16,0,0,1-6.47-1.6,21.32,21.32,0,0,0-10.05-2.08A19.29,19.29,0,0,0,52.89,70a10.49,10.49,0,0,1-4.79,1.3,15,15,0,0,1-6.93-1.37,27.47,27.47,0,0,0-9.82-2.16,32.46,32.46,0,0,0-17.19,4.84,5,5,0,0,0,5,8.64,22.66,22.66,0,0,1,11.91-3.48,17.65,17.65,0,0,1,6.52,1.51,24.37,24.37,0,0,0,11,2A20,20,0,0,0,57.22,79a9.63,9.63,0,0,1,4.72-1.24A11.39,11.39,0,0,1,67.75,79a25.78,25.78,0,0,0,10,2.39,21.42,21.42,0,0,0,9-1.4A17.36,17.36,0,0,1,93,78.87a19.57,19.57,0,0,1,7.26,1.07,25.43,25.43,0,0,0,10.19,1.32,29,29,0,0,0,9.2-2.06,16.24,16.24,0,0,1,5.61-1.29,23.28,23.28,0,0,1,12.65,3.35,5,5,0,0,0,4.93-8.7Z"}})])])])}),[],!1,null,null,null);e.a=component.exports},394:function(t,e,r){"use strict";var n=r(12),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"10",height:"10",viewBox:"0 0 8 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M7 1L4 4L1 1",stroke:"black","stroke-width":"1.2"}})])}),[],!1,null,null,null);e.a=component.exports}}]);