(this["webpackJsonpk8-todo"]=this["webpackJsonpk8-todo"]||[]).push([[0],{51:function(t,e,n){},52:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var r=n(5),a=n.n(r),c=n(38),o=n.n(c),i=(n(51),n(75)),u=n(27),s=n(39),l=(n(52),n(13)),d=n(22),p=n(76),f=n(1),b=function(t){var e=t.supportDays,n=t.onClickSupportDay,r=t.currentDay;return Object(f.jsxs)("section",{children:[e.map((function(t){return Object(f.jsx)("button",{onClick:function(){return n(t)},children:t},t)})),Object(f.jsx)("h1",{children:r})]})},v=n(0),h=n.n(v),j=n(3),x=function(){var t=Object(j.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:if(t.t0=!!t.sent,!t.t0){t.next=7;break}return t.next=6,m();case 6:t.t0=!!t.sent;case 7:return t.abrupt("return",t.t0);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(j.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",globalThis.localStorage.token);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(j.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:globalThis.localStorage.token=e;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(j.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",globalThis.localStorage.host);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(j.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:globalThis.localStorage.host=e;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=n(7),g=function(t,e,n){return void 0===t&&void 0===e?0:void 0===t?1:void 0===e?-1:n(t,e)},T=function(t,e,n){for(var r=t.filter((function(t){return t})).sort(n),a=e.filter((function(t){return t})).sort(n),c=[],o=0,i=0;r[o]||a[i];){var u=g(r[o],a[i],n);0===u?c.push([r[o++],a[i++]]):u<0?c.push([r[o++],void 0]):c.push([void 0,a[i++]])}return c};function _(t){return"tasks"in t}var C=n(40),D=n(41),S=n(42),E=n(44),P=n(45),A=n(18),L=n.n(A),F=function(t){Object(S.a)(n,t);var e=Object(E.a)(n);function n(){var t;return Object(C.a)(this,n),(t=e.call(this,"joplin token invalid")).type="joplinTokenInvalid",t.message="joplin token invalid",t}return Object(D.a)(n,null,[{key:"isThis",value:function(t){return t instanceof n&&"joplinTokenInvalid"===t.type}}]),n}(Object(P.a)(Error)),I=function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:if(e=t.sent){t.next=5;break}throw new F;case 5:return t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Q=function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:if(e=t.sent){t.next=5;break}throw new F;case 5:return t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function R(t){return N.apply(this,arguments)}function N(){return(N=Object(j.a)(h.a.mark((function t(e){var n,r,a,c,o,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.title,r=e.body,a=e.parent_id,c=e.is_todo,o={title:n,body:r,parent_id:a,is_todo:c},t.t0=L.a,t.t2="",t.next=6,Q();case 6:return t.t3=t.sent,t.t1=t.t2.concat.call(t.t2,t.t3,"/notes?token="),t.next=10,I();case 10:return t.t4=t.sent,t.t5=t.t1.concat.call(t.t1,t.t4),t.t6=o,t.next=15,t.t0.post.call(t.t0,t.t5,t.t6);case 15:return i=t.sent,console.log("createNote result: ",i.data),t.abrupt("return",i.data);case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function q(t,e){return B.apply(this,arguments)}function B(){return(B=Object(j.a)(h.a.mark((function t(e,n){var r,a,c,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.title,a=n.body,c={body:a,title:r},t.t0=L.a,t.t2="",t.next=6,Q();case 6:return t.t3=t.sent,t.t1=t.t2.concat.call(t.t2,t.t3,"/notes/").concat(e,"?token="),t.next=10,I();case 10:return t.t4=t.sent,t.t5=t.t1.concat.call(t.t1,t.t4),t.t6=c,t.next=15,t.t0.put.call(t.t0,t.t5,t.t6);case 15:o=t.sent,console.log("updateNote result: ",o.data);case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function J(t){return W.apply(this,arguments)}function W(){return(W=Object(j.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=L.a,t.t1="",t.next=4,Q();case 4:return t.t2=t.sent,t.t3=t.t1.concat.call(t.t1,t.t2,"/notes/").concat(e),t.next=8,I();case 8:return t.t4=t.sent,t.t5={token:t.t4,fields:"id,parent_id,title,body,is_todo,todo_completed"},t.t6={params:t.t5},t.next=13,t.t0.get.call(t.t0,t.t3,t.t6);case 13:return n=t.sent,t.abrupt("return",n.data);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var z=function(t,e){return function(n){return t(n)&&e(n)}},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=function(t){return!0},n=e;return"parent_id"in t&&(n=z(n,(function(e){return e.parent_id===t.parent_id}))),"is_todo"in t&&(n=t.is_todo?z(n,(function(t){return 1===t.is_todo})):z(n,(function(t){return 1!==t.is_todo}))),"is_completed"in t&&(n=t.is_completed?z(n,(function(t){return 0!==t.todo_completed})):z(n,(function(t){return 0===t.todo_completed}))),n};function V(){return $.apply(this,arguments)}function $(){return($=Object(j.a)(h.a.mark((function t(){var e,n,r,a,c,o=arguments;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=o.length>0&&void 0!==o[0]?o[0]:{},n=0,r=[],c=M(e);case 4:return t.t0=L.a,t.t1="",t.next=8,Q();case 8:return t.t2=t.sent,t.t3=t.t1.concat.call(t.t1,t.t2,"/notes"),t.next=12,I();case 12:return t.t4=t.sent,t.t5=n++,t.t6={token:t.t4,fields:"id,parent_id,title,is_todo,todo_completed,body",limit:100,page:t.t5},t.t7={params:t.t6},t.next=18,t.t0.get.call(t.t0,t.t3,t.t7);case 18:a=t.sent.data,r=r.concat(a.items.filter(c));case 20:if(a.has_more){t.next=4;break}case 21:return t.abrupt("return",r);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function G(t){return H.apply(this,arguments)}function H(){return(H=Object(j.a)(h.a.mark((function t(e){var n,r,a,c,o=arguments;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=o.length>1&&void 0!==o[1]?o[1]:{},r=0;case 2:return t.t0=L.a,t.t1="",t.next=6,Q();case 6:return t.t2=t.sent,t.t3=t.t1.concat.call(t.t1,t.t2,"/notes"),t.t4=w.a,t.next=11,I();case 11:return t.t5=t.sent,t.t6=r++,t.t7={token:t.t5,fields:"id,parent_id,title,is_todo,todo_completed,body",limit:100,page:t.t6},t.t8=n,t.t9=(0,t.t4)(t.t7,t.t8),t.t10={params:t.t9},t.next=19,t.t0.get.call(t.t0,t.t3,t.t10);case 19:if(a=t.sent.data,!(c=a.items.find(e))){t.next=23;break}return t.abrupt("return",c);case 23:if(a.has_more){t.next=2;break}case 24:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var K="9d9446bc2a4c4c7d9e96bd6bbc5a5a4b",U=n(43),X=/\[([^\]]+)\]\(([^)]+)\)/,Y=function(t){var e=t.title,n=t.id;return"[".concat(e,"](:/").concat(n,")")},Z=function(t){var e=t.title,n=t.completed;return"- [".concat(n?"x":" ","] ").concat(e)},tt=function(t){var e=/:\/([\d\w]+)/.exec(t);if(!e)throw new Error("joplin link (:/xxxx..) required, but: "+t);return e[1]},et=function(t){return t.includes("#### \ud15c\ud50c\ub9bf")},nt=function(t){var e=/- \[([x ])\] (.+)/.exec(t);if(!e)throw new Error('"'.concat(t,'" is not valid TaskLine'));return{completed:"x"===e[1],title:e[2]}},rt=function(t){var e=function(t){var e=X.exec(t);if(!e)throw new Error('"'.concat(t,'" is not valid markdown link'));return{link:e[2],title:e[1]}}(t);return{id:tt(e.link),title:e.title}},at=function(t){return et(t)?Object(w.a)({},ot(t)):{tasks:ct(t)}},ct=function(t){var e=t.split("---");return Object(l.a)(e,1)[0].trim().split("\n").filter((function(t){return t})).map((function(t){var e=nt(t),n=rt(e.title);return{id:n.id,title:n.title,completed:e.completed}}))},ot=function(t){var e=t.split("---").map((function(t){return t.trim()})).filter((function(t){return t})),n=e.find(et),r=(null===n||void 0===n?void 0:n.trim().split("\n").filter((function(t){return t.trim()})).filter((function(t){return!function(t){return t.startsWith("#### ")}(t)})).map(nt))||[];return{dayTasks:e.filter((function(t){return!et(t)})).map((function(t){var e=t.trim().split("\n"),n=Object(U.a)(e),r=n[0],a=n.slice(1);return Object(w.a)(Object(w.a)({},it(r)),{},{tasks:a.filter((function(t){return t.trim()})).map((function(t){return nt(t)}))})})),template:r}},it=function(t){var e=/#### ([^\n]+)/.exec(t);if(!e)throw new Error(t+" is not raw title text");try{return rt(e[1])}catch(n){throw new Error(t+" is not valid joplin link")}},ut=function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V({parent_id:"83981f6a4f6d4a0abcffc5363bf3cc8f",is_completed:!1,is_todo:!0});case 2:return e=t.sent,t.abrupt("return",e.map((function(t){var e=t.id,n=t.title,r=t.todo_completed,a=t.body;return Object(w.a)({id:e,title:n,completed:r>0},at(a))})).map((function(t){return{id:t.id,completed:!1,etc:"",title:t.title,tasks:_(t)?[]:t.template}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),st=n(46),lt=function(t,e){return 0===e.length?"":function(t){var e=t.title,n=t.body,r=[];return r.push("## ".concat(e)),r.push(n),r.push(""),r.join("\n")}({title:t,body:e.map((function(t){return[Z({title:Y(t),completed:t.completed})].concat(Object(st.a)(t.tasks.map((function(t){return"\t"+Z(t)})))).join("\n")})).join("\n")}).trim()},dt=function(t){var e=t.todos,n=t.dailyTodos,r=t.totalPoint;return[lt("Todo",e),lt("Daily",n)+"\n",function(t){return"- ".concat(Y({title:"\ud560\uc77c \uc810\uc218",id:"054c87fff0984d028390125538aa7089"})," : ")+(t||"")}(r)].filter((function(t){return t.trim()})).join("\n\n---\n")+"\n"},pt=function(t){var e=/^- \[.+\]\(.+\) : (\d+)$/.exec(t.trim());if(e&&e[1]){var n=Number(e[1]);if(n)return n}},ft=function(t){var e=t.split("---"),n=function(t){return t?t.replace("## Todo","").trim().split("\n").map((function(t){var e=nt(t.trim()),n=e.completed,r=e.title,a=rt(r),c=a.id;return{title:a.title,completed:n,id:c,etc:"",tasks:[]}})):[]}(e.find((function(t){return t.includes("## Todo")}))),r=function(t){if(!t)return[];var e,n=t.replace("## Daily","").trim().split("\n"),r=[];return n.forEach((function(t){if(t.startsWith("\t"))e&&e.tasks.push(nt(t.trim()));else{var n=nt(t.trim()),a=n.completed,c=n.title,o=rt(c),i=o.id,u=o.title;e={title:u,completed:a,id:i,etc:"",tasks:[]},r.push(e)}})),r}(e.find((function(t){return t.includes("## Daily")}))),a=e[e.length-1];return{todos:n,dailyTodos:r,totalPoint:pt(a)}},bt=function(){var t=Object(j.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=dt(e),t.next=3,q(e.id,{title:e.title,body:n});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),vt=function(){var t=Object(j.a)(h.a.mark((function t(e){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=dt(e),t.next=3,R({title:e.title,body:n,parent_id:K,is_todo:1});case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ht=function(){var t=Object(j.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G((function(t){return t.title===e&&t.parent_id===K}),{order_by:"title",order_dir:"ASC"});case 2:if(t.t1=n=t.sent,t.t0=null===t.t1,t.t0){t.next=6;break}t.t0=void 0===n;case 6:if(!t.t0){t.next=10;break}t.t2=void 0,t.next=11;break;case 10:t.t2=n.id;case 11:return t.abrupt("return",t.t2);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),jt=function(){var t=Object(j.a)(h.a.mark((function t(e){var n,r,a,c,o,i,u,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(e);case 2:return n=t.sent,r=n.title,a=n.todo_completed,c=n.body,o=ft(c),i=o.dailyTodos,u=o.todos,s=o.totalPoint,t.abrupt("return",{id:e,title:r,completed:a>0,dailyTodos:i,todos:u,totalPoint:s});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),xt=function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V({parent_id:"09626444fe23477e9704200cf69aff5e",is_todo:!0,is_completed:!1});case 2:return e=t.sent,t.abrupt("return",e.map((function(t){return{id:t.id,completed:t.todo_completed>0,etc:"",title:t.title,tasks:[]}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),mt=function(t){return function(e,n){return e[t]===n[t]?0:e[t]<n[t]?-1:1}},Ot=function(t){return t.todos.filter((function(t){return t.completed})).length+t.dailyTodos.reduce((function(t,e){return e.tasks.length>0?t+e.tasks.filter((function(t){return t.completed})).length:e.completed?t+1:t}),0)},kt=function(){var t=Object(j.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Ot(e),e.totalPoint=n,t.next=4,bt(e);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),yt=function(){var t=Object(j.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,xt();case 3:return t.t1=t.sent,t.next=6,ut();case 6:return t.t2=t.sent,n={title:t.t0,completed:!1,todos:t.t1,dailyTodos:t.t2,id:""},t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),wt=function(){var t=Object(j.a)(h.a.mark((function t(e){var n,r,a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ht(e);case 2:if(n=t.sent){t.next=12;break}return t.next=6,yt(e);case 6:return r=t.sent,t.next=9,vt(r);case 9:a=t.sent,c=a.id,n=c;case 12:return t.next=14,jt(n);case 14:return t.abrupt("return",t.sent);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),gt=function(){var t=Object(j.a)(h.a.mark((function t(e){var n,r,a,c,o,i,u,s,d;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(t,e){return!t&&e?Object(w.a)(Object(w.a)({},e),{},{completed:!0}):t&&!e?Object(w.a)({},t):t&&e?Object(w.a)({},e):void 0},t.next=3,ht(e);case 3:if(r=t.sent){t.next=6;break}throw new Error("no dayTodo for todoDay");case 6:return t.next=8,jt(r);case 8:return a=t.sent,t.next=11,xt();case 11:return c=t.sent,o=T(c,a.todos,mt("id")),i=o.map((function(t){var e=Object(l.a)(t,2),r=e[0],a=e[1];return n(r,a)})).filter((function(t){return t})),t.next=16,ut();case 16:return u=t.sent,s=T(u,a.dailyTodos,mt("id")),d=s.map((function(t){var e=Object(l.a)(t,2),n=e[0],r=e[1];if(n&&r){if(n.tasks.length>0||r.tasks.length>0){var a=T(n.tasks,r.tasks,mt("title")).map((function(t){var e=Object(l.a)(t,2),n=e[0],r=e[1];return n&&r?Object(w.a)({},r):n?Object(w.a)({},n):r?Object(w.a)(Object(w.a)({},r),{},{completed:!0}):void 0})).filter((function(t){return t}));return Object(w.a)(Object(w.a)({},r),{},{tasks:a})}return Object(w.a)({},r)}return n?Object(w.a)({},n):r?Object(w.a)(Object(w.a)({},r),{},{completed:!0}):void 0})).filter((function(t){return t})),t.next=21,kt(Object(w.a)(Object(w.a)({},a),{},{todos:i,dailyTodos:d}));case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Tt=function(){for(var t=d.DateTime.local(2021,3,4),e=[],n=d.DateTime.local();n.diff(t,"days").days>0&&e.length<5;)e.push(n.toISODate()),n=n.minus({days:1});return e},_t=function(){var t=Object(j.a)(h.a.mark((function t(e,n,r){var a,c,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,wt(e);case 2:if(c=t.sent,!(o=null===(a=c.todos)||void 0===a?void 0:a.find((function(t){return t.id===n})))){t.next=8;break}return o.completed=r,t.next=8,kt(c);case 8:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),Ct=function(){var t=Object(j.a)(h.a.mark((function t(e,n,r){var a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,wt(e);case 2:if(a=t.sent,c=a.dailyTodos.find((function(t){return t.id===n}))){t.next=6;break}throw new Error("no dailyTodo (".concat(n,") in of DayTodo (").concat(a.id,"). may have to update dayTodo?"));case 6:return c.completed=r,t.next=9,kt(a);case 9:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),Dt=function(){var t=Object(j.a)(h.a.mark((function t(e,n,r,a){var c,o,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,wt(e);case 2:if(c=t.sent,o=c.dailyTodos.find((function(t){return t.id===n}))){t.next=6;break}return t.abrupt("return");case 6:if(i=o.tasks.find((function(t){return t.title===r}))){t.next=9;break}throw new Error("no task in dayTask (daily: ".concat(n,", dayTodo: ").concat(c.id,"). may have to update daily todo?"));case 9:if(!a){t.next=16;break}return i.completed=!0,o.completed=!0,t.next=14,kt(c);case 14:t.next=20;break;case 16:return i.completed=!1,o.completed=!!o.tasks.find((function(t){return t.completed})),t.next=20,kt(c);case 20:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),St=function(t){var e=t.totalPoint,n=t.onClickRefresh,r=t.oneTimeTodos,a=t.dailyTodos;return Object(f.jsxs)("article",{children:[Object(f.jsxs)("section",{children:[e," point ",Object(f.jsx)("button",{onClick:n,children:"refresh"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Todo"}),r]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"DailyTodo"}),a]})]})},Et=n(77),Pt=function(t){var e=t.checked,n=t.disabled,r=void 0!==n&&n,a=t.onChange;return Object(f.jsx)("input",{type:"checkbox",checked:e,disabled:r,onChange:a})},At=function(t){var e=t.children;return t.loading?Object(f.jsx)(f.Fragment,{children:"\u24db"}):e},Lt=function(t){var e=t.task,n=t.onChangeCompleted;return Object(f.jsxs)("li",{style:{listStyleType:"none",fontSize:"0.8em"},children:[Object(f.jsx)(Pt,{checked:e.completed,onChange:function(t){return n(t.target.checked)}}),e.title]})},Ft=function(t){var e=t.isLoadingAllComplete,n=t.useAllComplete,r=t.todo,a=t.handleChangeAllComplete,c=t.handleChangeSubtaskCompleted;return Object(f.jsxs)("div",{style:{margin:"5px"},children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(At,{loading:e,children:Object(f.jsx)(Pt,{checked:r.completed,disabled:!n,onChange:a})}),r.title]}),Object(f.jsx)("ul",{style:{paddingLeft:"10px",margin:"0"},children:r.tasks.map((function(t){return Object(f.jsx)(Lt,{task:t,onChangeCompleted:function(e){return c(t.title,e)}},t.title)}))})]})},It=function(t){var e=t.todoDay,n=t.todo,r=Object(u.b)(),a=Object(Et.a)(function(){var t=Object(j.a)(h.a.mark((function t(r){var a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.title,c=r.completed,t.abrupt("return",Dt(e,n.id,a,c));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{onSuccess:function(){r.invalidateQueries("dayTodo")}}).mutate,c=Object(Et.a)(function(){var t=Object(j.a)(h.a.mark((function t(r){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.completed,t.abrupt("return",Ct(e,n.id,a));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{onSuccess:function(){r.invalidateQueries("dayTodo")}}),o=0===n.tasks.length;return Object(f.jsx)(Ft,{todo:n,isLoadingAllComplete:!1,useAllComplete:o,handleChangeAllComplete:function(t){c.mutate({completed:t.target.checked})},handleChangeSubtaskCompleted:function(t,e){a({title:t,completed:e})}})},Qt=function(t){var e=t.isLoading,n=t.onChange,r=t.completed,a=t.title;return Object(f.jsxs)("div",{children:[Object(f.jsx)(At,{loading:e,children:Object(f.jsx)("input",{type:"checkbox",checked:r,onChange:n})}),a]})},Rt=function(t){var e=t.todoDay,n=t.todo,r=n.id,a=n.title,c=n.completed,o=Object(u.b)(),i=Object(Et.a)(function(){var t=Object(j.a)(h.a.mark((function t(n){var r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.id,a=n.completed,t.abrupt("return",_t(e,r,a));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{onSuccess:function(){o.invalidateQueries("dayTodo")}}),s=function(){var t=Object(j.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.mutate({id:r,completed:e.target.checked});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsx)(Qt,{isLoading:i.isLoading,completed:c,onChange:s,title:a})},Nt=function(t){var e=t.todoDay,n=Object(p.a)(["dayTodo",e],Object(j.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",wt(e));case 1:case"end":return t.stop()}}),t)})))).data,r=Object(u.b)(),a=function(){var t=Object(j.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,gt(e);case 2:r.invalidateQueries(["dayTodo",e]);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.jsx)(St,{totalPoint:null===n||void 0===n?void 0:n.totalPoint,onClickRefresh:a,oneTimeTodos:null===n||void 0===n?void 0:n.todos.map((function(t){return Object(f.jsx)(Rt,{todo:t,todoDay:n.title},t.id)})),dailyTodos:null===n||void 0===n?void 0:n.dailyTodos.map((function(t){return Object(f.jsx)(It,{todo:t,todoDay:n.title},t.id)}))})},qt=function(){var t=Object(p.a)("joplinConnection",Object(j.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:return t.t0=t.sent,t.next=5,m();case 5:return t.t1=t.sent,t.abrupt("return",{host:t.t0,token:t.t1});case 7:case"end":return t.stop()}}),t)})))).data,e=Object(r.useRef)(null),n=Object(r.useRef)(null),a=Object(u.b)();Object(r.useEffect)((function(){n.current&&t&&t.token&&(n.current.value=t.token),e.current&&t&&t.host&&(e.current.value=t.host)}),[n,e,t]);var c=function(){var t=Object(j.a)(h.a.mark((function t(){var r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((null===(r=n.current)||void 0===r?void 0:r.value)&&(null===(c=e.current)||void 0===c?void 0:c.value)){t.next=3;break}return alert("value required!"),t.abrupt("return");case 3:return t.next=5,O(n.current.value);case 5:return t.next=7,y(e.current.value);case 7:return t.next=9,a.invalidateQueries();case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"TokenInput"}),Object(f.jsxs)("p",{children:["host: ",Object(f.jsx)("input",{type:"text",ref:e})]}),Object(f.jsxs)("p",{children:["token: ",Object(f.jsx)("input",{type:"text",ref:n})]}),Object(f.jsx)("button",{onClick:c,children:"SAVE"})]})};function Bt(){var t=Object(p.a)("checkConnection",x).data,e=Object(p.a)("todoDays",Tt),n=Object(r.useState)(d.DateTime.local().toISODate()),a=Object(l.a)(n,2),c=a[0],o=a[1],i=!t;return Object(f.jsxs)(f.Fragment,{children:[i&&Object(f.jsx)(qt,{}),!i&&e.data&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b,{supportDays:e.data,onClickSupportDay:o,currentDay:c}),Object(f.jsx)(Nt,{todoDay:c})]})]})}var Jt=new i.a;var Wt=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(u.a,{client:Jt,children:[Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(Bt,{})}),Object(f.jsx)(s.ReactQueryDevtools,{initialIsOpen:!1})]})})},zt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))};o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(Wt,{})}),document.getElementById("root")),zt()}},[[73,1,2]]]);
//# sourceMappingURL=main.bb65ac47.chunk.js.map