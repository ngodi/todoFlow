!function(o){var e={};function n(t){if(e[t])return e[t].exports;var l=e[t]={i:t,l:!1,exports:{}};return o[t].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=o,n.c=e,n.d=function(o,e,t){n.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:t})},n.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,e){if(1&e&&(o=n(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var l in o)n.d(t,l,function(e){return o[e]}.bind(null,l));return t},n.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(e,"a",e),e},n.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},n.p="",n(n.s=0)}([function(o,e,n){"use strict";n.r(e);var t=(()=>{const o=o=>document.getElementById(o),e=o=>document.getElementsByClassName(o)[0];return{addNode:o=>document.createElement(o),addAttribute:(o,e,n)=>{o.setAttribute(e,n)},domElementId:o,domElementClass:e,addText:o=>document.createTextNode(o),appendToNode:(o,e)=>{o.appendChild(e)},replaceNode:(o,n,t)=>{e(o).replaceChild(n,t)},appendToDom:(e,n)=>{o(e).appendChild(n)}}})();var l={actionPanel:t.domElementId("actionPanel"),project:t.domElementId("project"),addTodoBtn:t.domElementId("addTodo"),projectBtn:t.domElementId("projectBtn")};const d=[];l.addTodoBtn.addEventListener("click",()=>{l.actionPanel.innerHTML='\n              <div class=\'col-md-12 todoForm\'>\n              <h3>Enter Todo Information</h3>\n              <div class=\'row\'>\n               <div class=\'col-md-6\'>\n                  <div class="form-group row">\n                     <label for="title" class="col-md-2">Title</label> \n                     <div class="col-sm-10">\n                      <input type="text" class="form-control" id="title" placeholder="">\n                     </div>\n                  </div>\n                  <div class="form-group row">\n                    <label for="desc" class="col-md-2">Description</label>\n                    <div class="col-sm-10">\n                      <input type="text" class="form-control" id="desc" placeholder="">\n                   </div>\n                  </div>\n                  <div class="form-group row">\n                    <label for="date" class="col-md-2">Due date</label>\n                    <div class="col-sm-10">\n                     <input type="date" class="form-control" id="date" placeholder="">\n                    </div>\n                  </div>\n              </div>\n              <div class=\'col-md-6\'>\n                <div class="form-group row">\n                  <label for="priority" class="col-md-2">Priority</label>\n                  <div class="col-sm-10">\n                    <select class="form-control" id="priority">\n                      <option>Normal</option>\n                      <option>Low</option>\n                      <option>High</option>\n                    </select>\n                 </div>\n                </div>\n                <div class="form-group row">\n                  <label for="status" class="col-md-2">Status</label>\n                    <div class="col-sm-10">\n                     <select class="form-control" id="status">\n                      <option>New</option>\n                      <option>Pending</option>\n                      <option>Completed</option>\n                    </select>\n                    </div>\n                 </div>\n                 <div class="form-group row">\n                  <label for="notes" class="col-md-2">Notes</label>\n                  <div class="col-sm-10">\n                    <textarea class="form-control" id="notes" rows="1"></textarea>\n                  </div>\n                 </div>\n                </div>\n              </div>\n              <div class="form-group row">\n                 <div class=\'col-sm-7\'></div>\n                 <div class="col-sm-5">\n                  <button type="button" class="btn btn-info btn-block" id="todoBtn" >Add to project</button>\n                </div>\n              </div>\n              </div>'}),l.projectBtn.addEventListener("click",()=>{const o=(()=>l.project.value)();d.push(o),alert(d)})}]);