!function(t){var e={};function o(n){if(e[n])return e[n].exports;var l=e[n]={i:n,l:!1,exports:{}};return t[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)o.d(n,l,function(e){return t[e]}.bind(null,l));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);class n{constructor(t,e,o,n,l,d,r,s){this.project=t,this.id=e,this.title=o,this.description=n,this.dueDate=l,this.priority=d,this.notes=r,this.status=s}}var l=(()=>{const t=t=>document.getElementById(t),e=t=>document.getElementsByClassName(t)[0];return{addNode:t=>document.createElement(t),addAttribute:(t,e,o)=>{t.setAttribute(e,o)},domElementId:t,domElementClass:e,addText:t=>document.createTextNode(t),appendToNode:(t,e)=>{t.appendChild(e)},replaceNode:(t,o,n)=>{e(t).replaceChild(o,n)},appendToDom:(e,o)=>{t(e).appendChild(o)}}})();var d={actionPanel:l.domElementId("actionPanel"),project:l.domElementId("project"),addTodoBtn:l.domElementId("addTodo"),projectBtn:l.domElementId("projectBtn")};const r=[],s=[];let i=0;d.addTodoBtn.addEventListener("click",()=>{d.actionPanel.innerHTML='\n              <div class=\'col-md-12 todoForm\'>\n              <h3>Enter Todo Information</h3>\n              <div class=\'row\'>\n               <div class=\'col-md-6\'>\n                  <div class="form-group row">\n                     <label for="title" class="col-md-2">Title</label> \n                     <div class="col-sm-10">\n                      <input type="text" class="form-control" id="title" placeholder="">\n                     </div>\n                  </div>\n                  <div class="form-group row">\n                    <label for="desc" class="col-md-2">Description</label>\n                    <div class="col-sm-10">\n                      <input type="text" class="form-control" id="desc" placeholder="">\n                   </div>\n                  </div>\n                  <div class="form-group row">\n                    <label for="date" class="col-md-2">Due date</label>\n                    <div class="col-sm-10">\n                     <input type="date" class="form-control" id="date" placeholder="">\n                    </div>\n                  </div>\n              </div>\n              <div class=\'col-md-6\'>\n                <div class="form-group row">\n                  <label for="priority" class="col-md-2">Priority</label>\n                  <div class="col-sm-10">\n                    <select class="form-control" id="priority">\n                      <option>Normal</option>\n                      <option>Low</option>\n                      <option>High</option>\n                    </select>\n                 </div>\n                </div>\n                <div class="form-group row">\n                  <label for="status" class="col-md-2">Status</label>\n                    <div class="col-sm-10">\n                     <select class="form-control" id="status">\n                      <option>New</option>\n                      <option>Pending</option>\n                      <option>Completed</option>\n                    </select>\n                    </div>\n                 </div>\n                 <div class="form-group row">\n                  <label for="notes" class="col-md-2">Notes</label>\n                  <div class="col-sm-10">\n                    <textarea class="form-control" id="notes" rows="1"></textarea>\n                  </div>\n                 </div>\n                </div>\n              </div>\n              <div class="form-group row">\n                 <div class=\'col-sm-7\'></div>\n                 <div class="col-sm-5">\n                  <button type="button" class="btn btn-info btn-block" id="todoBtn" >Add to project</button>\n                </div>\n              </div>\n              </div>',l.domElementId("todoBtn").addEventListener("click",()=>{const t={project:l.domElementId("selProject").value,title:l.domElementId("title").value,desc:l.domElementId("desc").value,dueDate:l.domElementId("date").value,priority:l.domElementId("priority").value,status:l.domElementId("status").value,notes:l.domElementId("notes").value},e=new n(t.project,i++,t.title,t.desc,t.dueDate,t.priority,t.notes,t.status);r.push(e)})}),d.projectBtn.addEventListener("click",()=>{const t=(()=>d.project.value)();s.push(t)})}]);