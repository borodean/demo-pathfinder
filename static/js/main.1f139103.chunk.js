(this["webpackJsonpstackstate-test-assignment"]=this["webpackJsonpstackstate-test-assignment"]||[]).push([[0],{30:function(n,t,e){n.exports=e(47)},46:function(n,t,e){},47:function(n,t,e){"use strict";e.r(t);var r,a=e(0),o=e.n(a),i=e(15),c=e.n(i),u=e(16),l=e(8),s=e.n(l),f=e(13),d=e(17),h=e(4),p=e(3),b=e(1),m=e(2);function g(){var n=Object(b.a)(["\n  color: #fff;\n  font-size: ","px;\n  font-weight: bold;\n  height: ","px;\n  line-height: ","px;\n  position: relative;\n  text-align: center;\n  width: ","px;\n\n  &,\n  &::before,\n  &::after {\n    transition-duration: 0.1s;\n    transition-property: background-color, transform;\n    transition-timing-function: ease-out;\n  }\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n  }\n\n  &::before {\n    height: ","px;\n    left: 0;\n    top: 100%;\n    transform: rotateX(-90deg);\n    transform-origin: 50% 0;\n    width: 100%;\n  }\n\n  &::after {\n    height: 100%;\n    left: 100%;\n    top: 0;\n    transform: rotateY(90deg);\n    transform-origin: 0 50%;\n    width: ","px;\n  }\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n"]);return g=function(){return n},n}!function(n){n[n.Boulder=1]="Boulder",n[n.Gravel=2]="Gravel",n[n.Regular=3]="Regular",n[n.WormholeEntrance=4]="WormholeEntrance",n[n.WormholeExit=5]="WormholeExit"}(r||(r={}));var x=Object(m.a)((function(n){n.isFinish,n.isStart,n.type;var t=Object(p.a)(n,["isFinish","isStart","type"]);return o.a.createElement("div",t)}))(g(),64,64,64,64,20,20,(function(n){return n.type===r.Boulder&&"\n    background: #acacac;\n    transform: translateZ(".concat(20,"px);\n\n    &::before {\n      background: #5c5c5c;\n      transform: rotateX(-90deg) scaleY(2);\n    }\n\n    &::after {\n      background: #303030;\n      transform: rotateY(90deg) scaleX(2);\n    }\n  ")}),(function(n){return n.type===r.Gravel&&"\n    background: #949494;\n\n    &::before {\n      background: #5c5c5c;\n    }\n\n    &::after {\n      background: #303030;\n    }\n  "}),(function(n){return n.type===r.Regular&&"\n    background: #a3581f;\n\n    &::before {\n      background: #7f4010;\n    }\n\n    &::after {\n      background: #5f240a;\n    }\n  "}),(function(n){return n.type===r.WormholeEntrance&&"\n    background: red;\n    transform: translateZ(".concat(-20,"px);\n\n    &::before {\n      transform: rotateX(-90deg) scaleY(0);\n    }\n\n    &::after {\n      transform: rotateY(90deg) scaleX(0);\n    }\n  ")}),(function(n){return n.type===r.WormholeExit&&"\n    background: blue;\n    transform: translateZ(".concat(-20,"px);\n\n    &::before {\n      transform: rotateX(-90deg) scaleY(0);\n    }\n\n    &::after {\n      transform: rotateY(90deg) scaleX(0);\n    }\n  ")})),v=function(n){var t=n.isFinish,e=n.isStart,r=Object(p.a)(n,["isFinish","isStart"]);return o.a.createElement(x,r,e&&"A",t&&"B")};v.defaultProps={type:r.Regular};var y=v;function E(){var n=Object(b.a)(["\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%) rotateX(60deg) rotateZ(45deg);\n"]);return E=function(){return n},n}function O(){var n=Object(b.a)(["\n  height: ","px;\n  position: relative;\n  width: ","px;\n\n  * {\n    backface-visibility: hidden;\n    transform-style: preserve-3d;\n  }\n"]);return O=function(){return n},n}var w=Object(m.a)((function(n){n.height,n.width;var t=Object(p.a)(n,["height","width"]);return o.a.createElement("div",t)}))(O(),(function(n){return 64*n.height*Math.sqrt(2)/2}),(function(n){return 64*n.width*Math.sqrt(2)})),j=m.a.div(E()),T=function(n){var t=n.children,e=Object(p.a)(n,["children"]);return o.a.createElement(w,e,o.a.createElement(j,null,t))};function k(){var n=Object(b.a)(["\n  background: lime;\n  height: ","px;\n  left: ","px;\n  opacity: 0.5;\n  pointer-events: none;\n  position: absolute;\n  top: ","px;\n  width: ","px;\n  z-index: 2;\n"]);return k=function(){return n},n}function S(){var n=Object(b.a)(["\n  position: relative;\n"]);return S=function(){return n},n}function P(){var n=Object(b.a)(["\n  color: lime;\n  left: 50%;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 500px);\n"]);return P=function(){return n},n}function A(){var n=Object(b.a)(["\n  box-sizing: content-box;\n  margin: auto;\n  padding: ","px 0;\n"]);return A=function(){return n},n}function C(){var n=Object(b.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  width: ","px;\n"]);return C=function(){return n},n}function L(){var n=Object(b.a)(["\n  cursor: pointer;\n  position: relative;\n\n  &:hover {\n    box-shadow: inset 0 0 0 2px #0f0;\n    z-index: 1;\n  }\n"]);return L=function(){return n},n}var I=Object(m.a)(y)(L()),F=Object(m.a)((function(n){n.width;var t=Object(p.a)(n,["width"]);return o.a.createElement("div",t)}))(C(),(function(n){return 64*n.width})),R=Object(m.a)(T)(A(),20),W=m.a.div(P()),_=m.a.div(S()),D=Object(m.a)((function(n){n.x,n.y;var t=Object(p.a)(n,["x","y"]);return o.a.createElement("div",t)}))(k(),(function(n){return 64}),(function(n){return 64*n.x}),(function(n){return 64*n.y}),(function(n){return 64})),B=function(n){var t=n.finish,e=n.onDraw,r=n.path,i=n.rows,c=n.shouldShowPath,u=n.start,l=Object(a.useState)(!1),s=Object(d.a)(l,2),f=s[0],p=s[1],b=function(n,t){return function(){p(!0),e(n,t),document.addEventListener("mouseup",g)}},m=function(n,t){return function(){f&&e(n,t)}},g=function n(){document.removeEventListener("mouseup",n),p(!1)},x=i[0].length,v=i.length;return o.a.createElement(_,null,o.a.createElement(R,{height:v,width:x},o.a.createElement(F,{width:x},Object(h.flatMap)(i,(function(n,e){return n.map((function(n,r){return o.a.createElement(I,{isFinish:Object(h.isEqual)({x:r,y:e},t),isStart:Object(h.isEqual)({x:r,y:e},u),key:"".concat(r,":").concat(e),onMouseDown:b(r,e),onMouseMove:m(r,e),type:n})}))})),c&&r&&r.map((function(n){var t=n.x,e=n.y;return o.a.createElement(D,{key:"".concat(t,":").concat(e),x:t,y:e})})))),c&&!r&&o.a.createElement(W,null,"Shoot! Looks like I can't get there."))};function N(){var n=Object(b.a)(["\n  padding-top: 5px;\n"]);return N=function(){return n},n}function $(){var n=Object(b.a)(["\n  display: flex;\n  margin: 20px auto 0;\n  transform: translate3d(0, 0, 0);\n  width: fit-content;\n"]);return $=function(){return n},n}function G(){var n=Object(b.a)(["\n  margin-bottom: ","px;\n  margin-top: ","px;\n"]);return G=function(){return n},n}function M(){var n=Object(b.a)(["\n  display: flex;\n\n  &:not(:first-child) {\n    margin-left: 10px;\n  }\n"]);return M=function(){return n},n}function U(){var n=Object(b.a)(["\n  background: linear-gradient(#90a4ae, #78909c);\n  border: 1px solid #546e7a;\n  border-radius: 4px;\n  box-shadow: inset 0 1px #cfd8dc;\n  color: #eceff1;\n  cursor: pointer;\n  display: block;\n  font: inherit;\n  padding: 4px;\n  position: relative;\n  text-align: center;\n  width: min-content;\n\n  ","\n\n  &:not(:first-child) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n    margin-left: -1px;\n  }\n\n  &:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n  }\n"]);return U=function(){return n},n}var X=Object(m.a)((function(n){n.isPressed,n.isPrimary;var t=Object(p.a)(n,["isPressed","isPrimary"]);return o.a.createElement("button",t)})).attrs({type:"button"})(U(),(function(n){return n.isPressed?"\n    background: linear-gradient(#42a5f5, #1e88e5);\n    border-color: #1976d2;\n    box-shadow: inset 0 2px 2px #1976d2;\n    color: #bbdefb;\n    z-index: 2;\n  ":n.isPrimary?"\n    background: linear-gradient(#ffb74d, #ffa726);\n    border-color: #fb8c00;\n    box-shadow: inset 0 1px #ffe0b2;\n    color: #fff3e0;\n    width: ".concat(64*Math.sqrt(2)+10,"px;\n\n    &:hover,\n    &:focus {\n      background: linear-gradient(#ffcc80, #ffb74d);\n      border-color: #ffa726;\n      box-shadow: inset 0 1px #fff3e0;\n    }\n\n    &:active {\n      background: linear-gradient(#ffa726, #fb8c00);\n      border-color: #f57c00;\n      box-shadow: inset 0 2px 2px #f57c00;\n      color: #ffe0b2;\n    }\n  "):"\n    &:hover,\n    &:focus {\n      background: linear-gradient(#b0bec5, #90a4ae);\n      border-color: #78909c;\n      box-shadow: inset 0 1px #eceff1;\n      color: #fff;\n      z-index: 1;\n    }\n\n    &:active {\n      background: linear-gradient(#78909c, #546e7a);\n      border-color: #455a64;\n      box-shadow: inset 0 2px 2px #455a64;\n      color: #cfd8dc;\n      z-index: 1;\n    }\n  "})),z=m.a.div(M()),H=Object(m.a)(T).attrs({height:1,width:1})(G(),20,20),Y=m.a.div($()),q=m.a.div(N()),Z=function(n){var t=n.activeTool,e=n.onFind,a=n.onSelectTool,i=[[{type:r.Regular,title:"Dirt"},{type:r.Gravel,title:"Gravel"},{type:r.Boulder,title:"Boulder"}],[{type:r.WormholeEntrance,title:"Wormhole Entrance"},{type:r.WormholeExit,title:"Wormhole Exit"}]];return o.a.createElement(Y,null,i.map((function(n,e){return o.a.createElement(z,{key:e},n.map((function(n){return o.a.createElement(X,{isPressed:n.type===t,key:n.type,onClick:function(){return a(n.type)}},o.a.createElement(H,null,o.a.createElement(y,{type:n.type})),o.a.createElement(q,null,n.title))})))})),o.a.createElement(z,null,o.a.createElement(X,{isPressed:"START_LOCATION"===t,onClick:function(){return a("START_LOCATION")}},o.a.createElement(H,null,o.a.createElement(y,{isStart:!0})),o.a.createElement(q,null,"Start Location")),o.a.createElement(X,{isPressed:"FINISH_LOCATION"===t,onClick:function(){return a("FINISH_LOCATION")}},o.a.createElement(H,null,o.a.createElement(y,{isFinish:!0})),o.a.createElement(q,null,"Finish Location"))),o.a.createElement(z,null,o.a.createElement(X,{isPrimary:!0,onClick:e},"Find")))},J=e(19),K=e(26),Q=e.n(K),V=function(n,t){return Object(h.minBy)(t,(function(t){return Object(h.sumBy)(t,(function(t){var e=n[t.y][t.x];return e===r.Gravel?2:e===r.Boulder?0:1}))}))||null},nn=function(){var n=Object(f.a)(s.a.mark((function n(t,e,a){var o,i,c,u=arguments;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=u.length>3&&void 0!==u[3]&&u[3],(i=new Q.a.js).enableSync(),i.setGrid(t),c=[r.Gravel,r.Regular],o&&c.push(r.WormholeEntrance),i.setAcceptableTiles(c),i.setTileCost(r.Gravel,2),i.setTileCost(r.Regular,1),o&&i.setTileCost(r.WormholeEntrance,1),n.abrupt("return",new Promise((function(n){i.findPath(e.x,e.y,a.x,a.y,n),i.calculate()})));case 11:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),tn=function(){var n=Object(f.a)(s.a.mark((function n(t,e,a){var o,i,c,u,l,f,h,p,b,m;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=[],i=[],n.next=4,nn(t,e,a);case 4:if(c=n.sent,t.forEach((function(n,t){n.forEach((function(n,e){n===r.WormholeEntrance?o.push({x:e,y:t}):n===r.WormholeExit&&i.push({x:e,y:t})}))})),o.length&&i.length){n.next=8;break}return n.abrupt("return",c);case 8:return n.next=10,Promise.all([Promise.all(o.map((function(n){return nn(t,e,n,!0)}))),Promise.all(i.map((function(n){return nn(t,n,a)})))]);case 10:if(u=n.sent,l=Object(d.a)(u,2),f=l[0],h=l[1],p=V(t,f),b=V(t,h),p&&b){n.next=18;break}return n.abrupt("return",c);case 18:if(m=[].concat(Object(J.a)(p),Object(J.a)(b)),c){n.next=21;break}return n.abrupt("return",m);case 21:return n.abrupt("return",V(t,[c,m]));case 22:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),en=Object(u.b)((function(n){return{grid:n.grid,palette:n.palette}}),{selectTool:function(n){return{type:"SELECT_TOOL",tool:n}},updateCell:function(n,t,e){return{type:"UPDATE_CELL",x:n,y:t,cellType:e}},updateFinish:function(n,t){return{type:"UPDATE_FINISH",x:n,y:t}},updatePath:function(n){return{type:"UPDATE_PATH",path:n}},updateStart:function(n,t){return{type:"UPDATE_START",x:n,y:t}}})((function(n){var t=n.grid,e=n.palette,r=n.selectTool,a=n.updateCell,i=n.updateFinish,c=n.updatePath,u=n.updateStart;return o.a.createElement("div",null,o.a.createElement(B,{finish:t.finish,onDraw:function(n,t){"START_LOCATION"===e.activeTool?u(n,t):"FINISH_LOCATION"===e.activeTool?i(n,t):a(n,t,e.activeTool)},path:t.path,rows:t.rows,shouldShowPath:t.shouldShowPath,start:t.start}),o.a.createElement(Z,{activeTool:e.activeTool,onFind:Object(f.a)(s.a.mark((function n(){var e,r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.rows.map((function(n){return n.slice()})),n.next=3,tn(e,t.start,t.finish);case 3:r=n.sent,c(r);case 5:case"end":return n.stop()}}),n)}))),onSelectTool:r}))})),rn=e(10),an=e(27),on=e(7),cn=e(14),un=e.n(cn),ln={finish:{x:9,y:9},path:null,rows:Object(h.times)(10,(function(){return Object(h.fill)(Array(10),r.Regular)})),shouldShowPath:!1,start:{x:0,y:0}},sn=e(28),fn={activeTool:r.Regular},dn=Object(rn.combineReducers)({grid:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ln,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CELL":return Object(h.isMatch)(t,n.start)||Object(h.isMatch)(t,n.finish)?n:un()(n,{rows:Object(on.a)({},String(t.y),Object(on.a)({},String(t.x),{$set:t.cellType})),shouldShowPath:{$set:!1}});case"UPDATE_FINISH":return un()(n,{finish:{$set:{x:t.x,y:t.y}},rows:Object(on.a)({},String(t.y),Object(on.a)({},String(t.x),{$set:r.Regular})),shouldShowPath:{$set:!1}});case"UPDATE_PATH":return un()(n,{path:{$set:t.path},shouldShowPath:{$set:!0}});case"UPDATE_START":return un()(n,{rows:Object(on.a)({},String(t.y),Object(on.a)({},String(t.x),{$set:r.Regular})),shouldShowPath:{$set:!1},start:{$set:{x:t.x,y:t.y}}});default:return n}},palette:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_TOOL":return Object(sn.a)({},n,{activeTool:t.tool});default:return n}}}),hn=function(){return Object(rn.createStore)(dn,Object(an.devToolsEnhancer)({}))};e(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pn=hn();c.a.render(o.a.createElement((function(){return o.a.createElement(u.a,{store:pn},o.a.createElement(en,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.1f139103.chunk.js.map