(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{360:function(n,t,e){"use strict";e.r(t);e(13),e(22),e(23);var c=e(0),o=e(355),r=c.default.extend({name:"ModalLogin",components:{BaseButton:o.a},props:{cancel:{type:Function,required:!0}},data:function(){return{signup:!1}},computed:{componentInstance:function(){var n="LoginForm.vue";return this.signup&&(n="SignupForm.vue"),function(){return e(374)("./".concat(n))}}}}),l=e(12),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"px-4 py-8 w-115 bg-white"},[e("h1",{staticClass:"text-center uppercase text-3xl"},[n._v("\n    "+n._s(n.signup?n.$t("register"):n.$t("loginAccount"))+"\n  ")]),n._v(" "),e(n.componentInstance,{tag:"component"}),n._v(" "),e("BaseButton",{staticClass:"w-full mt-10"},[n._v(n._s(n.signup?n.$t("register"):n.$t("login")))]),n._v(" "),e("BaseButton",{staticClass:"w-full mt-2",attrs:{transparent:!0},nativeOn:{click:function(t){return n.cancel.apply(null,arguments)}}},[n._v(n._s(n.$t("cancel")))]),n._v(" "),e("div",{staticClass:"w-full text-center mt-6"},[n.signup?e("p",{staticClass:"font-graphik"},[n._v("\n      "+n._s(n.$t("hasAccount"))+"\n      "),e("span",{staticClass:"underline cursor-pointer",on:{click:function(t){n.signup=!1}}},[n._v(n._s(n.$t("login")))])]):e("p",{staticClass:"font-graphik"},[n._v("\n      "+n._s(n.$t("noAccount"))+"\n      "),e("span",{staticClass:"underline cursor-pointer",on:{click:function(t){n.signup=!0}}},[n._v(n._s(n.$t("newAccount")))])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);