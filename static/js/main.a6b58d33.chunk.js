(this["webpackJsonpbaas-waldo"]=this["webpackJsonpbaas-waldo"]||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/ss3.fe5cf257.png"},18:function(e,a,t){e.exports=t.p+"static/media/ss2.c8f448a0.png"},19:function(e,a,t){e.exports=t.p+"static/media/ss4.2656e386.png"},26:function(e,a,t){e.exports=t.p+"static/media/main.d8de0a0b.jpg"},29:function(e,a,t){e.exports=t(45)},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(24),l=t.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(11),o=t(17),i=t.n(o),m=t(18),u=t.n(m),d=t(19),p=t.n(d);var f=function(e){var a=r.a.useRef();return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"pink lighten-2"},r.a.createElement("div",{className:"navwrapper"},r.a.createElement(s.b,{to:"/"},r.a.createElement("a",{href:"/",className:"brand-logo center teal-text text-darken-4"},"Where's Waldo!?"))),r.a.createElement("div",{className:"right"},r.a.createElement("button",{className:"btn waves-effect light-blue darken-3",onClick:function(e){"block"===a.current.style.display?(a.current.style.display="none",e.target.style.color="white"):(a.current.style.display="block",e.target.style.color="dodgerblue")}},"Instructions"),r.a.createElement("button",{className:"btn waves-effect pulse light-blue darken-3 btn2"},r.a.createElement(s.b,{to:"/leaderboards"},"Leaderboard"))),r.a.createElement("div",{className:"left people"},r.a.createElement("span",{className:"person"},r.a.createElement("span",null,"Minny"),r.a.createElement("span",null,r.a.createElement("img",{alt:"find1",className:"responsive-image find",src:i.a}))),r.a.createElement("span",{className:"person"},r.a.createElement("span",null,"Waldo"),r.a.createElement("span",null,r.a.createElement("img",{alt:"find2",className:"responsive-image find",src:u.a}))),r.a.createElement("span",{className:"person"},r.a.createElement("span",null,"Carry"),r.a.createElement("span",null,r.a.createElement("img",{alt:"find3",className:"responsive-image find",src:p.a}))))),r.a.createElement("div",{ref:a,className:"container modal indigo white-text"},r.a.createElement("h3",{className:"center"},"Intructions"),r.a.createElement("div",{className:"center"},"Your Task Is To Find:"),r.a.createElement("div",{className:"center"},r.a.createElement("span",null,"Minny"),r.a.createElement("img",{src:i.a,alt:"minny",className:"inst-pic"})),r.a.createElement("div",{className:"center"},r.a.createElement("span",null,"Waldo"),r.a.createElement("img",{src:u.a,alt:"waldo",className:"inst-pic"})),r.a.createElement("div",{className:"center"},r.a.createElement("span",null,"Carry"),r.a.createElement("img",{src:p.a,alt:"carry",className:"inst-pic"})),r.a.createElement("div",{className:"center"},"GOODLUCK!")))},E=t(8),b=t(26),g=t.n(b),v=t(27),y=(t(46),t(38),t(40),v.initializeApp({apiKey:"AIzaSyCJNwu8QCxnabaPs_HStPFtz6YNJRv0nwQ",authDomain:"baas-waldo.firebaseapp.com",databaseURL:"https://baas-waldo.firebaseio.com",projectId:"baas-waldo",storageBucket:"baas-waldo.appspot.com",messagingSenderId:"614705905258",appId:"1:614705905258:web:931a249f66acebd0c79413",measurementId:"G-MQ2YVCD2F9"})),N=y.firestore();var h=function(e){var a=r.a.useState(0),t=Object(E.a)(a,2),n=t[0],c=t[1],l=r.a.useState(0),s=Object(E.a)(l,2),o=s[0],i=s[1],m=r.a.useState(!1),u=Object(E.a)(m,2),d=u[0],p=u[1],f=r.a.useState(!1),b=Object(E.a)(f,2),v=b[0],y=b[1],h=r.a.useState(!1),w=Object(E.a)(h,2),k=w[0],x=w[1],C=r.a.useState(!0),S=Object(E.a)(C,2),W=S[0],j=S[1],I=r.a.useRef(),O=r.a.useRef(),Y=r.a.useRef(),R=r.a.useRef(),B=r.a.useRef(),M=r.a.useRef(),T=r.a.useCallback((function(){return!!(d&&v&&k)&&(R.current.style.display="block",j(!1),!0)}),[R,d,v,k]);function F(e){var a=e.target.id;N.collection("find").doc(a).get().then((function(e){var t=e.data(),n=Y.current.x-25,r=Y.current.x+30,c=Y.current.y-30,l=Y.current.y+50,s=t.posY>=c&&t.posY<=l,o=t.posX>=n&&t.posX<=r;s&&o?(I.current.style.borderColor="green",setTimeout((function(){I.current.style.borderColor="#00897b",I.current.style.display="none"}),500),console.log("found ".concat(a)),"minny"===a?p(!0):"waldo"===a?y(!0):x(!0)):(I.current.style.borderColor="red",setTimeout((function(){I.current.style.borderColor="#00897b",I.current.style.display="none"}),500))})).catch((function(e){alert(e)}))}return r.a.useEffect((function(){var e=setInterval((function(){c((function(e){return e+1})),T()&&console.log("won"),60===n&&(i((function(e){return e+1})),c(0))}),1e3);return!1===W&&clearInterval(e),function(){return clearInterval(e)}}),[n,W,T]),r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{alt:"mainimage",src:g.a,className:"main-img",onClick:function(e){if(!T()){var a=e.target.getBoundingClientRect(),t=e.clientX-a.left,n=e.clientY-a.top,r=Math.round(1263*t/e.target.clientWidth),c=Math.round(811*n/e.target.clientWidth);Y.current={x:r,y:c},I.current.style.left="".concat(e.pageX-50,"px"),I.current.style.top="".concat(e.pageY-50,"px"),"flex"===I.current.style.display?I.current.style.display="none":I.current.style.display="flex"}}}),r.a.createElement("div",{ref:I,className:"find-panel"},r.a.createElement("div",{className:"box",ref:O}),d?null:r.a.createElement("button",{className:"btn",id:"minny",onClick:F},"Minny"),v?null:r.a.createElement("button",{className:"btn",id:"waldo",onClick:F},"Waldo"),k?null:r.a.createElement("button",{className:"btn",id:"carry",onClick:F},"Carry")),r.a.createElement("div",{ref:R,className:"container modal "},r.a.createElement("div",{className:"card-panel"},r.a.createElement("div",{className:"card-content center"},"Congratulations You Won!"),r.a.createElement("form",{className:"form-control"},r.a.createElement("div",{className:"input-field"},r.a.createElement("span",{className:"label"},"Enter Your Name"),r.a.createElement("input",{ref:B,type:"text",required:!0}),r.a.createElement("br",null),r.a.createElement("span",{className:"label"},"Your Words"),r.a.createElement("input",{ref:M,type:"text",required:!0}),r.a.createElement("button",{className:"btn right light-blue darken-3",onClick:function(e){e.preventDefault();var a=2===String(n).length?String(n):"0".concat(n),t=2===String(o).length?String(o):"0".concat(o),r="".concat(t,":").concat(a),c=B.current.value,l=M.current.value;N.collection("winners").add({name:c,description:l,time:r}).then((function(e){R.current.style.display="none",alert("Congratulations You Have Been Added To The LeaderBoard")})).catch((function(){alert("Sorry Something Went Wrong")}))}},"Submit"))))))};function w(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!0),o=Object(E.a)(l,2),i=o[0],m=o[1];return Object(n.useEffect)((function(){y.firestore().collection("winners").onSnapshot((function(e){var a=e.docChanges();c(a),m(!1)}))}),[]),r.a.createElement("div",null,r.a.createElement("h3",{className:"center"},"LeaderBoard"),i?r.a.createElement("div",{className:"loader center"}):null,r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement("div",{className:"col s12 m6 l4 animate",key:e.doc.id},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"indigo darken-3 white-text center card-title"},e.doc.data().name),r.a.createElement("div",{className:"card-content center indigo white-text"},r.a.createElement("span",null,"Words From The Player:"),r.a.createElement("br",null),e.doc.data().description),r.a.createElement("div",{className:"center"},"Completed In   ",e.doc.data().time," minutes!")))}))),r.a.createElement("div",{className:"center"},r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{className:"btn white-text"},"Go Back To Main Game Page"))))}var k=t(2);var x=function(){return r.a.createElement(s.a,null,r.a.createElement(f,null),r.a.createElement(k.a,{path:"/",exact:!0},r.a.createElement(h,null)),r.a.createElement(k.a,{path:"/leaderboards"},r.a.createElement(w,null)))};t(44);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.a6b58d33.chunk.js.map