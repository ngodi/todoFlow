!function(e){var t={};function n(d){if(t[d])return t[d].exports;var o=t[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(d,o,function(t){return e[t]}.bind(null,o));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class d{constructor(e,t,n,d,o,r,l,c){this.project=e,this.id=t,this.title=n,this.description=d,this.dueDate=o,this.priority=r,this.notes=l,this.status=c}}var o=(()=>{const e=e=>document.getElementById(e),t=e=>document.getElementsByClassName(e)[0];return{addNode:e=>document.createElement(e),addAttribute:(e,t,n)=>{e.setAttribute(t,n)},domElementId:e,domElementClass:t,addText:e=>document.createTextNode(e),appendToNode:(e,t)=>{e.appendChild(t)},replaceNode:(e,n,d)=>{t(e).replaceChild(n,d)},appendToDom:(t,n)=>{e(t).appendChild(n)}}})();const r=()=>{document.querySelector("#kick").classList.add("hidden"),document.querySelector("#projectForm").classList.remove("hidden")};var l={getStarted:o.domElementId("kick"),todoBtn:o.domElementId("todoBtn"),projectBtn:o.domElementId("projectBtn")};const c=[],i=[];let s=0;const u=e=>{l.getStarted.addEventListener("click",r),o.domElementId("kick1").addEventListener("click",r),l.projectBtn.addEventListener("click",()=>{const t=(()=>{document.querySelector("#imgId").classList.add("hidden"),document.querySelector("#todoDiv").classList.remove("hidden"),document.querySelector("#projectForm").classList.add("hidden"),document.querySelector(".greeting").classList.add("hidden");const e=null!=o.domElementId("project").value?o.domElementId("project").value:o.domElementId("select").value;return o.domElementId("projectTitle").innerHTML=`Project name: ${e}`,e})();e.push(t),m(i)})},a=e=>{l.todoBtn.addEventListener("click",()=>{const t={title:o.domElementId("title").value,desc:o.domElementId("desc").value,dueDate:o.domElementId("date").value,priority:o.domElementId("priority").value,status:o.domElementId("status").value,notes:o.domElementId("notes").value},n=e[e.length-1],r=new d(n,s++,t.title,t.desc,t.dueDate,t.priority,t.notes,t.status);e.push(r)})},m=e=>{e.forEach(e=>{alert(e)})};u(i),a(c),m(i)}]);