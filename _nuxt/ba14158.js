(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{230:function(A,t,e){"use strict";e.r(t);e(43),e(95);var n=e(0).default.extend({name:"AppHeaderClock",data:function(){return{months:["Ýanwar","Fewral","Mart","Aprel","Maý","Iýun","Iýul","Awgust","Sentýabr","Oktýabr","Dekabr"],weekDays:["Duşenbe","Sişenbe","Çarşenbe","Penşenbe","Anna","Şenbe","Ýekşenbe"],date:"",time:"",timer:null}},mounted:function(){this.startClock()},destroyed:function(){this.timer&&clearTimeout(this.timer)},methods:{startClock:function(){var A=this,t=new Date,e=t.getFullYear(),n=this.months[t.getMonth()],c=this.weekDays[t.getDay()],o=t.getDate(),r=t.getHours(),l=this.updateTime(t.getMinutes());"".concat(c,", ").concat(n," ").concat(o,", ").concat(e)!==this.date&&(this.date="".concat(c,", ").concat(n," ").concat(o,", ").concat(e)),this.time!=="".concat(this.formatAMPM(r,l))&&(this.time="".concat(this.formatAMPM(r,l))),this.timer=setTimeout((function(){A.startClock()}),1e3)},formatAMPM:function(A,t){return(A%12?A%12:12)+":"+t+" "+(A>=12?"PM":"AM")},updateTime:function(A){return A<10?"0"+A:A}}}),c=e(12),component=Object(c.a)(n,(function(){var A=this,t=A.$createElement,n=A._self._c||t;return n("div",{staticClass:"right flex justify-end items-center w-1/3"},[n("div",{staticClass:"left w-12 pr-4 font-graphik font-medium py-1 border-r"},[n("img",{staticClass:"w-full h-full cursor-pointer",attrs:{src:"tm"===A.$i18n.locale?e(379):e(364),alt:""},on:{click:function(t){"tm"===A.$i18n.locale?A.$i18n.setLocale("ru"):A.$i18n.setLocale("tm")}}})]),A._v(" "),n("div",{staticClass:"content pl-4"},[n("p",{staticClass:"font-medium font-graphik"},[A._v(A._s(A.date))]),A._v(" "),n("p",{staticClass:"font-graphik"},[A._v(A._s(A.time))])])])}),[],!1,null,null,null);t.default=component.exports},364:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAYAAAAougcOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJBSURBVHgBrZTLS1RxFMc/9+H4mhzzVZMTjSUqBJYjYmQZWAQWGAWBvZat3Lh05SIIXLSL/oEiFwVFmJQQ9iCyqGbb+MSyRtOYHBxn7jzu/XVnitGLkOM4HzjwO/f8uOd3vudwJPcdDqOo/ciKo5cCet4cRVSrGFodn+rvcVUNki3C0AOGpPSpqMpj03cjdJh1ol0LMuKTaD13BmlwBsqHyBZJAgW9TTaP7vRXh4It3o/H1cbul5eRI1/SIXteCZ7K1tQ5X85nCzjl9Z68axrt7m20oY/4n3ugxr/2KtOCsWUu1F4hakTpqukmU9T1TtDnZrh9DDlQSqj8N5rPBQcm6Nh7lp/h78SNBI+m7qfuHqps4cXcU8KJ0KZJLJWwYxV5xY7PuUDAkKlKimoyOjfMcnQZu2pPX23Y2YiBTiZYKnFUL9H57CT7CsI4I4XMd76F+N/Yj9DXlCmSSm9TP96lMbREJJMcG+UaaPLSFTjGk6LPKON7YP9UOu6pOkJjRQvv/KOMLbwiUyxJknIRKsZrTDOfkGjW8yxh7+L7lG0VS0+ScvVN1tH8y0HPRD2uhm/kgg1yXWp/jZxQ0exhzk/WmnJNsl2s02X+uGilmFUBeqiQqriNXGCdLtciD0c6EGXmqK6U8uHEAzKc0v9iqURMmCvs9DgUqsSvX0RfPEUusCZRS4g1DKK3HsQ2043iz1njxby5mZwpbzVM/s1b/0IdULHE9hGzqo5+XBa2AQmpTMiChLLWBD25VoRC9oggeuzGHwAfx8rqQAtIAAAAAElFTkSuQmCC"},379:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARBAMAAADalBo9AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAFVBMVEXw8PDw8PDW3ukAUrRUMn3YACf////RKH3KAAAAAXRSTlO/Gzh2ewAAAAFiS0dEBmFmuH0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmBhMVJhebxTiWAAAAAW9yTlQBz6J3mgAAACZJREFUCNdjYEABgkhAgASeEhJQYDBGAgZk81yQgANDKBIIIJcHAK/1KvlQBjXuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA2LTE5VDIxOjM4OjAwKzAwOjAwUwBaIQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNi0xOVQyMTozODowMCswMDowMCJd4p0AAAAASUVORK5CYII="}}]);