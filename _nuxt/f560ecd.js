(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{362:function(n,t,c){"use strict";c.r(t);c(13),c(22),c(23);var e=c(0),o=c(357),l=e.default.extend({name:"ModalLogin",components:{BaseButton:o.a},props:{cancel:{type:Function,required:!0}},data:function(){return{signup:!1}},computed:{componentInstance:function(){var n="LoginForm.vue";return this.signup&&(n="SignupForm.vue"),function(){return c(375)("./".concat(n))}}}}),r=c(12),component=Object(r.a)(l,(function(){var n=this,t=n.$createElement,c=n._self._c||t;return c("div",{staticClass:"px-4 py-8 w-115 bg-white"},[c("h1",{staticClass:"text-center uppercase text-3xl"},[n._v("\n    "+n._s(n.signup?n.$t("register"):n.$t("loginAccount"))+"\n  ")]),n._v(" "),c(n.componentInstance,{tag:"component"}),n._v(" "),c("BaseButton",{staticClass:"w-full mt-10"},[n._v(n._s(n.$t("newAccount")))]),n._v(" "),c("BaseButton",{staticClass:"w-full mt-2",attrs:{transparent:!0},nativeOn:{click:function(t){return n.cancel.apply(null,arguments)}}},[n._v(n._s(n.$t("cancel")))]),n._v(" "),c("div",{staticClass:"w-full text-center mt-6"},[n.signup?c("p",{staticClass:"font-graphik"},[n._v("\n      "+n._s(n.$t("hasAccount"))+"\n      "),c("span",{staticClass:"underline cursor-pointer",on:{click:function(t){n.signup=!1}}},[n._v(n._s(n.$t("login")))])]):c("p",{staticClass:"font-graphik"},[n._v("\n      "+n._s(n.$t("noAccount"))+"\n      "),c("span",{staticClass:"underline cursor-pointer",on:{click:function(t){n.signup=!0}}},[n._v(n._s(n.$t("newAccount")))])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);