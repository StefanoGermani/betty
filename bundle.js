!function(t){var a={};function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="",o(o.s=0)}([function(t,a,o){"use strict";o.r(a);var e=class{constructor(...t){this.dati=t||[],this.quote=this.dati.map(t=>t.quota),this.quoteInvertite=this.quote.map(t=>this._invertiQuota(t))}get _sommaQuoteInvertite(){return this.quoteInvertite.reduce((t,a)=>t+a,0)}get sommaPuntate(){return this.calcolaPuntate().reduce((t,a)=>t+a,0)}isGuagagno(){const t=this._trovaQuotaMinore();return this.sommaPuntate<=t+t/100}calcolaProbabilta(){return this.quoteInvertite.map(t=>this._arrotonda(t/this._sommaQuoteInvertite*100))}calcolaPuntate(){const t=this._trovaQuotaMinore();return this.quote.map(a=>this._arrotonda(a/t))}calcolaPercentualeGuadagno(){var t=this._trovaQuotaMinore()-this.sommaPuntate;return this._arrotonda(100*t/this.sommaPuntate)}_trovaQuotaMinore(){const t=this.quote.reduce((t,a)=>(a>0&&t.push(a),t),[]);return Math.min(...t)}_invertiQuota(t){return 0===t?0:1/t}_arrotonda(t){return Math.round(100*t)/100}};$(document).ready(function(){$(".quota").on("input",function(){$("#txtPuntata1").val(""),$("#txtPuntataX").val(""),$("#txtPuntata2").val(""),$("#txtProbabilita1").val(""),$("#txtProbabilitaX").val(""),$("#txtProbabilita2").val(""),$("#btnCalcola").removeClass("btn-success"),$("#btnCalcola").removeClass("btn-danger"),$("#btnCalcola").addClass("btn-primary"),$("#result").text("")}),$(".puntata").on("input",function(){$(".puntata").not($(this)).val(""),$("#btnCalcola").removeClass("btn-success"),$("#btnCalcola").removeClass("btn-danger"),$("#btnCalcola").addClass("btn-primary"),$("#result").text("")}),$("#btnCalcola").click(function(t){t.preventDefault();var a=parseFloat($("#txt1").val()),o=parseFloat($("#txtX").val()),n=parseFloat($("#txt2").val());isNaN(n)&&(n=0);var r=new e({quota:a},{quota:o},{quota:n});console.log(`quota1: ${a}`),console.log(`quotaX: ${o}`),console.log(`quota2: ${n}`);const l=r.calcolaProbabilta();console.log(`Probabilità 1: ${l[0]}`),console.log(`Probabilità X: ${l[1]}`),console.log(`Probabilità 2: ${l[2]}`),$("#txtProbabilita1").val(`${l[0]} %`),$("#txtProbabilitaX").val(`${l[1]} %`),$("#txtProbabilita2").val(`${l[2]} %`);const u=r.calcolaPuntate();console.log(`puntata1: ${u[0]}`),console.log(`puntataX: ${u[1]}`),console.log(`puntata2: ${u[2]}`),$("#txtPuntata1").val(u[0]),$("#txtPuntataX").val(u[1]),$("#txtPuntata2").val(u[2]),r.isGuagagno()?($("#btnCalcola").removeClass("btn-primary"),$("#btnCalcola").addClass("btn-success")):($("#btnCalcola").removeClass("btn-primary"),$("#btnCalcola").addClass("btn-danger"));var i=r.calcolaPercentualeGuadagno();$("#result").text(`Somma puntate: ${r.sommaPuntate}; Percentuale guadagno: ${i}%`)})})}]);
//# sourceMappingURL=bundle.js.map