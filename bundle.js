!function(t){var a={};function o(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,a,n){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)o.d(n,e,function(a){return t[a]}.bind(null,e));return n},o.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="",o(o.s=0)}([function(t,a){$(document).ready(function(){var t=function(t,a){return 0===t?0:o(a/t)},a=function(t){return 1/t},o=function(t){return Math.round(100*t)/100};$(".quota").on("input",function(){$("#txtPuntata1").val(""),$("#txtPuntataX").val(""),$("#txtPuntata2").val(""),$("#txtProbabilita1").val(""),$("#txtProbabilitaX").val(""),$("#txtProbabilita2").val(""),$("#btnCalcola").removeClass("btn-success"),$("#btnCalcola").removeClass("btn-danger"),$("#btnCalcola").addClass("btn-primary"),$("#result").text("")}),$("#btnCalcola").click(function(n){n.preventDefault();var e=parseFloat($("#txt1").val()),l=parseFloat($("#txtX").val()),r=parseFloat($("#txt2").val());isNaN(r)&&(r=0),console.log(`quota1: ${e}`),console.log(`quotaX: ${l}`),console.log(`quota2: ${r}`);var u=parseFloat($("#txtMargine").val());isNaN(u)&&(u=0),function(t,n,e){var l=a(t),r=a(n),u=a(e),i=l+r+u,c=o(l/i*100),s=o(r/i*100),b=o(u/i*100);console.log(`Probabilità 1: ${c}`),console.log(`Probabilità X: ${s}`),console.log(`Probabilità 2: ${b}`),$("#txtProbabilita1").val(`${c} %`),$("#txtProbabilitaX").val(`${s} %`),$("#txtProbabilita2").val(`${b} %`)}(e,l,r);var i=[e,l,r].reduce((t,a)=>(a>0&&t.push(a),t),[]);console.log(i);var c=Math.min(...i);console.log(`quota minore: ${c}`);var s=t(e,c),b=t(l,c),v=t(r,c);console.log(`puntata1: ${s}`),console.log(`puntataX: ${b}`),console.log(`puntata2: ${v}`),$("#txtPuntata1").val(s),$("#txtPuntataX").val(b),$("#txtPuntata2").val(v);const f=s+b+v;console.log(`somma puntate: ${f}`),console.log(`margine: ${u}`),console.log(`quota con margine: ${c+c*u/100}`),f<=c+c*u/100?($("#btnCalcola").removeClass("btn-primary"),$("#btnCalcola").addClass("btn-success")):($("#btnCalcola").removeClass("btn-primary"),$("#btnCalcola").addClass("btn-danger"));var p=c-f,d=100*p/(s+b+v);$("#result").text(`Somma puntate: ${o(f)}; Guadagno: ${o(p)}; Percentuale guadagno: ${Math.floor(d)}%`)})})}]);