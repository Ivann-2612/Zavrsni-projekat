(this["webpackJsonpzavrsni-projekat"]=this["webpackJsonpzavrsni-projekat"]||[]).push([[0],{43:function(n,e,t){},44:function(n,e,t){},68:function(n,e,t){"use strict";t.r(e);var r,i,c,o,a,s,l,p,d,b,x,h,j,u,g,f,O,m,w,v,y,k,N,S,C,T,A,z,I,E=t(2),L=t.n(E),D=t(33),F=t.n(D),K=(t(43),t(5)),M=(t(44),t(10)),U=t(6),q=t(12),H=t.n(q),R=function(){return H.a.get("https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=ac157cacb088432180276283ed13c3c9")},P=function(){return H.a.get("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=ac157cacb088432180276283ed13c3c9")},W=function(){return H.a.get("https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=ac157cacb088432180276283ed13c3c9")},B=function(){return H.a.get("https://my-json-server.typicode.com/ivann-2612/my-news-app/users")},Y=t(14),_=t(3),G=t(4),J=G.a.div(r||(r=Object(_.a)(["\nbox-shadow: 0px 3px 7px #353535;\nborder:none;\np:hover {\n  color:white;\n}\n\n.btn-login {\n    background-color: rgb(131, 174, 175);\n     display:flex;\n     margin-top: 15px;\n     padding: 8px 20px;\n     margin-left: 5px;\n     border-radius: 5px;\n     outline: none;\n     color: black;\n     letter-spacing: 2px;\n     font-weight:600;\n     &:hover {\n      background-color: #f8f8ff;\n      color:#212121;\n     }\n }\n .not-registered {\n    position: absolute;\n    left: 52%;\n    text-decoration: none;\n    color:black;\n    letter-spacing: 1.5px;\n    font-size: 20px;\n    font-weight: 600;\n    &:hover {\n      color:#f8f8ff;\n     }\n  }\n  \n\n"]))),Q=t(1),X=function(n){var e=n.setUser,t=Object(E.useState)(""),r=Object(K.a)(t,2),i=r[0],c=r[1],o=Object(E.useState)(""),a=Object(K.a)(o,2),s=a[0],l=a[1],p=Object(U.g)();return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)("form",{onSubmit:function(n){n.preventDefault(),B().then((function(n){var t=n.data.find((function(n){return(n.username===i||n.email===i)&&n.password===s}));t?(e(t),p.push("/SerbiaNewsList")):alert("Wrong username or password")}))},children:Object(Q.jsxs)(J,{className:"div-input",children:[Object(Q.jsx)(Y.c,{style:{fontSize:"75px",marginTop:"-30px",position:"absolute",left:"3%",top:"16%",zIndex:"-1",color:"#272727"}}),Object(Q.jsx)("input",{className:"input",type:"text",placeholder:"Username...",onChange:function(n){return c(n.target.value)}}),Object(Q.jsx)("input",{className:"input",type:"password",placeholder:"Password...",onChange:function(n){return l(n.target.value)}}),Object(Q.jsx)("input",{className:"btn-login",type:"submit",value:"Login"}),Object(Q.jsx)(M.b,{className:"not-registered",to:"/register",children:"Not registered?"})]})})})},Z=function n(){var e=new Date,t=e.getHours(),r=e.getMinutes(),i="AM";0==t&&(t=12),t>12&&(t-=12,i="PM");var c=(t=t<10?"0"+t:t)+":"+(r=r<10?"0"+r:r)+" "+i;return setTimeout(n,1e3),c},V=function(){var n=function(){var n=Object(E.useState)(""),e=Object(K.a)(n,2),t=e[0],r=e[1],i=Object(E.useState)(""),c=Object(K.a)(i,2),o=c[0],a=c[1],s=Object(E.useState)(""),l=Object(K.a)(s,2);return[t,r,o,a,l[0],l[1]]}(),e=Object(K.a)(n,6),t=e[0],r=e[1],i=e[2],c=e[3],o=e[4],a=e[5],s=Object(U.g)();return Object(Q.jsx)("form",{onSubmit:function(n){n.preventDefault(),t.length<4&&!function(n){return n.length>=8&&n.split("").some((function(n){return!isNaN(Number(n))}))&&n.split("").some((function(n){return n>="A"&&n<="Z"||n>="a"&&n<="z"}))}(o)?console.log("Invalid input, username at least 4, password 8 characters, one letter, one number"):B().then((function(n){n.data.some((function(n){return n.username===t||n.email===i}))?console.log("User already exists"):function(n,e,t){return H.a.post("http://localhost:3005/users",{username:n,email:e,password:t})}(t,i,o).then((function(n){s.push("/login")}))}))},children:Object(Q.jsxs)("div",{className:"div-input",children:[Object(Q.jsx)("input",{className:"input",type:"text",placeholder:"username...",onChange:function(n){return r(n.target.value)}}),Object(Q.jsx)("input",{className:"input",type:"email",placeholder:"email...",onChange:function(n){return c(n.target.value)}}),Object(Q.jsx)("input",{className:"input",type:"password",placeholder:"password...",onChange:function(n){return a(n.target.value)}}),Object(Q.jsx)("input",{className:"input",type:"submit",value:"Register"})]})})},$=function(n){var e=n.loggedIn;return Object(Q.jsx)(Q.Fragment,{children:e?Object(Q.jsx)(U.a,{to:"/newsdevitem"}):Object(Q.jsx)(U.a,{to:"/login"})})},nn=t(37),en=t(38),tn=G.a.div(i||(i=Object(_.a)(["\nposition: absolute;\ntop:25%;\nleft:90%;\na {\n  display: block;\n  align-items:center;\n  width:43px;\n  transition: all 0.3s ease;\n  color: white;\n  background-color:#232323;\n  font-size: 20px;\n  border-radius: 10px;\n  margin: 15px;\n  margin-left:-19px;\n  margin-top: -5px;\n  padding: 11px 5px;\n  border:1px solid #373737;\n  box-shadow: 0px 0px 0px 1px #e7e7e9;\n  line-height: 20px;\n}\na:hover {\n  background-color:#FFDC00 !important;\n  color:black;\n  transform:translateY(8px);\n}\n"]))),rn=function(){return Object(Q.jsxs)(tn,{children:[Object(Q.jsx)("a",{href:"#",children:Object(Q.jsx)(Y.a,{})}),Object(Q.jsx)("a",{href:"#",children:Object(Q.jsx)(Y.b,{})}),Object(Q.jsx)("a",{href:"#",children:Object(Q.jsx)(nn.a,{})}),Object(Q.jsx)("a",{href:"#",children:Object(Q.jsx)(en.a,{})}),Object(Q.jsx)("a",{href:"#",children:Object(Q.jsx)(Y.d,{})})]})},cn=function(){var n=Object(E.useState)([]),e=Object(K.a)(n,2),t=e[0],r=e[1],i=Object(E.useState)([0,1]),c=Object(K.a)(i,2),o=c[0],a=c[1];return Object(E.useEffect)((function(){var n=!0;return W().then((function(e){n&&r(e.data.articles),setTimeout((function(){a((function(n){return n[0]==t.length-1?[0,1]:[n[0]+1,n[1]+1]}))}),1e4)})),function(){return n=!1}}),[o]),Object(Q.jsxs)("div",{children:[Object(Q.jsx)(rn,{}),t.slice(o[0],o[1]).map((function(n){var e=n.title,t=n.urlToImage,r=n.author;return Object(Q.jsxs)("div",{className:"div",children:[Object(Q.jsx)("h2",{style:{color:"#F5EC43",textAlign:"left"},children:r}),Object(Q.jsx)("p",{className:"marquee",children:Object(Q.jsx)("i",{children:e})}),Object(Q.jsx)("img",{src:t,alt:e})]},e)}))]})},on=G.a.div(c||(c=Object(_.a)(["\nwidth:320px;\nheight:430px;\npadding:10px;\nmargin:5px;\nmargin-top: 50px;\nborder-radius:5px;\nbackground-color:#f4f1de;\n\nimg {\n  width:280px;\n  height:150px;\n  margin-left:10px;\n  margin-bottom:10px;\n}\nh3, p {\n    margin-bottom:5px;\n}\nbox-shadow:2px 1px 2px 2px #141414;\n\n&:hover {\n    background-color:#10002b;\n    transition:all 0.4s;\n    color:white;\n    border:1px solid gray;\n    transform: scale(1.05);\n}\n& a {\n   \n    color:blue;\n}\n"]))),an=function(n){var e=n.title,t=n.description,r=n.url,i=n.urlToImage,c=n.publishedAt,o=n.author;return Object(Q.jsxs)(on,{children:[Object(Q.jsx)("img",{src:i,alt:"New image"}),Object(Q.jsx)("h3",{children:o}),Object(Q.jsx)("p",{children:Object(Q.jsx)("b",{children:c.substring(0,10)})}),Object(Q.jsx)("h3",{children:Object(Q.jsx)("a",{href:r,children:e})}),Object(Q.jsx)("p",{children:t})]})},sn=function(){var n=Object(E.useState)([]),e=Object(K.a)(n,2),t=e[0],r=e[1];return Object(E.useEffect)((function(){var n=!0;return H.a.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=ac157cacb088432180276283ed13c3c9").then((function(e){n&&r(e.data.articles)})),function(){return n=!1}}),[]),Object(Q.jsxs)("div",{children:[Object(Q.jsx)("h4",{children:"Daily News"}),t.map((function(n){var e=n.title,t=n.description,r=n.url,i=n.urlToImage,c=n.publishedAt,o=n.author;return Object(Q.jsx)(an,{title:e,description:t,url:r,urlToImage:i,publishedAt:c,author:o},e)}))]})},ln=G.a.div(o||(o=Object(_.a)(["\nwidth:320px;\nheight:430px;\npadding:10px;\nmargin:5px;\nmargin-top: 60px;\nborder-radius:5px;\nbackground-color:#f4f1de;\n\nimg {\n  width:280px;\n  height:150px;\n  margin-left:10px;\n  margin-bottom:10px;\n}\nh3, p {\n    margin-bottom:5px;\n}\nbox-shadow:2px 1px 2px 2px #141414;\n\n&:hover {\n    background-color:#10002b;\n    transition:all 0.4s;\n    color:white;\n    border:1px solid gray;\n}\n& a {\n   \n    color:blue;\n}\n"]))),pn=function(n){var e=n.title,t=n.description,r=n.url,i=n.urlToImage,c=n.publishedAt,o=n.author;return Object(Q.jsxs)(ln,{children:[Object(Q.jsx)("img",{src:i,alt:"New image"}),Object(Q.jsx)("h3",{children:o}),Object(Q.jsx)("p",{children:Object(Q.jsx)("b",{children:c.substring(0,10)})}),Object(Q.jsx)("h3",{children:Object(Q.jsx)("a",{href:r,children:e})}),Object(Q.jsx)("p",{children:t})]})},dn=G.a.section(a||(a=Object(_.a)(["\nmargin-top: -70px;\nbackground-color:#212121;\ndisplay: grid;\ngrid-template-columns: repeat(4, 1fr);\nplace-items:center;\n\nh4 {\n    margin-top:-26px;\n    color:white !important;\n}\n"]))),bn=function(){var n=Object(E.useState)([]),e=Object(K.a)(n,2),t=e[0],r=e[1],i=Object(E.useState)(""),c=Object(K.a)(i,2),o=c[0];c[1];return Object(E.useEffect)((function(){H.a.get("https://newsapi.org/v2/top-headlines?country=rs&apiKey=ac157cacb088432180276283ed13c3c9").then((function(n){r(n.data.articles)}))}),[]),Object(Q.jsxs)(dn,{children:[Object(Q.jsx)("h4",{children:"Serbia News"}),t.filter((function(n){return n.title.toLowerCase().includes(o)})).map((function(n){var e=n.title,t=n.description,r=n.url,i=n.urlToImage,c=n.publishedAt,o=n.author;return Object(Q.jsx)(pn,{title:e,description:t,url:r,urlToImage:i,publishedAt:c,author:o},t)}))]})},xn=G.a.div(s||(s=Object(_.a)(["\nbackground-color:transparent;\nborder-left:1px solid azure;\nborder-top:1px solid azure;\nwidth:300px;\nheight:300px;\npadding:15px;\nmargin:5px;\ncolor:gray;\nmargin-top: 50px;\nfont-weight:600;\nletter-spacing:1.2px;\n\nh1 {\n    font-size:25px;\n}\nh3, p {\n    margin-bottom:5px;\n}\n\n& a {\n    color:blue;\n    word-wrap: break-word;\n}\n"]))),hn=function(n){var e=n.title,t=n.description,r=n.url,i=n.publishedAt,c=n.author;return Object(Q.jsxs)(xn,{children:[Object(Q.jsx)("h3",{children:c}),Object(Q.jsx)("p",{children:Object(Q.jsx)("b",{children:i.substring(0,10)})}),Object(Q.jsx)("h3",{children:Object(Q.jsx)("a",{href:r,children:e})}),Object(Q.jsx)("p",{children:t})]})},jn=G.a.section(l||(l=Object(_.a)(["\nmargin-top: -50px;\nbackground-color:#212121;\ndisplay: grid;\ngrid-template-columns: repeat(4, 1fr);\nplace-items:center;\n\nh4 {\n    margin-top:-26px;\n    color:white !important;\n}\n"]))),un=function(){var n=Object(E.useState)([]),e=Object(K.a)(n,2),t=e[0],r=e[1];return Object(E.useEffect)((function(){W().then((function(n){r(n.data.articles)}))}),[]),Object(Q.jsxs)(jn,{children:[Object(Q.jsx)("h4",{children:"Events News"}),t.map((function(n){var e=n.title,t=n.description,r=n.url,i=n.publishedAt,c=n.author;return Object(Q.jsx)(hn,{title:e,description:t,url:r,publishedAt:i,author:c},r)}))]})},gn=G.a.div(p||(p=Object(_.a)(["\nwidth:450px;\nheight:230px;\npadding:15px;\nmargin:5px;\ncolor:gray;\nmargin-top: 50px;\nborder-radius:5px;\nfont-weight:700;\nletter-spacing:1.2px;\nbackground-color: transparent;\n\n\nh1 {\n    font-size:25px;\n}\nh3, p {\n    margin-bottom:5px;\n}\n\nborder:1px solid gray;\n\n&:hover {\n    background-color:#272727;\n    transition:all 0.4s;\n    color:white;\n}\n& a {\n    color:blue;\n}\n"]))),fn=function(n){var e=n.title,t=n.description,r=n.url,i=n.publishedAt,c=n.author;return Object(Q.jsxs)(gn,{children:[Object(Q.jsx)("h3",{children:c}),Object(Q.jsx)("p",{children:Object(Q.jsx)("b",{children:i})}),Object(Q.jsx)("h3",{children:Object(Q.jsx)("a",{href:r,children:e})}),Object(Q.jsx)("p",{children:t})]})},On=G.a.section(d||(d=Object(_.a)(["\nmargin-top: 30px;\nbackground-color:#212121;\ndisplay: grid;\ngrid-template-columns: repeat(3, 1fr);\nplace-items:center;\n\nh4 {\n    margin-top:-20px;\n    color:white !important;\n}\n"]))),mn=function(){var n=Object(E.useState)([]),e=Object(K.a)(n,2),t=e[0],r=e[1];return Object(E.useEffect)((function(){H.a.get("https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=ac157cacb088432180276283ed13c3c9").then((function(n){r(n.data.articles)}))}),[]),Object(Q.jsxs)(On,{children:[Object(Q.jsx)("h4",{children:"Health News"}),t.map((function(n){var e=n.title,t=n.description,r=n.url,i=n.publishedAt,c=n.author;return Object(Q.jsx)(fn,{title:e,description:t,url:r,publishedAt:i,author:c},r)}))]})},wn=G.a.div(b||(b=Object(_.a)(["\nwidth:450px;\nheight:230px;\npadding:15px;\nmargin:5px;\ncolor:gray;\nmargin-top: 50px;\nborder-radius:5px;\nfont-weight:700;\nletter-spacing:1.2px;\nbackground-color: #cbdfbd;\n\n\nh1 {\n    font-size:25px;\n}\nh3, p {\n    margin-bottom:5px;\n}\n\nborder:1px solid gray;\n\n&:hover {\n    background-color:#272727;\n    transition:all 0.4s;\n    color:white;\n}\n& a {\n    color:blue;\n}\n"]))),vn=function(n){var e=n.title,t=n.description,r=n.url,i=n.publishedAt,c=n.author;return Object(Q.jsxs)(wn,{children:[Object(Q.jsx)("h3",{children:c}),Object(Q.jsx)("p",{children:Object(Q.jsx)("b",{children:i})}),Object(Q.jsx)("h3",{children:Object(Q.jsx)("a",{href:r,children:e})}),Object(Q.jsx)("p",{children:t})]})},yn=G.a.section(x||(x=Object(_.a)(["\nmargin-top: 30px;\nbackground-color:#212121;\ndisplay: grid;\ngrid-template-columns: repeat(3, 1fr);\nplace-items:center;\n\nh4 {\n    color:white !important;\n}\n\n"]))),kn=function(){var n=Object(E.useState)([]),e=Object(K.a)(n,2),t=e[0],r=e[1];return Object(E.useEffect)((function(){var n=!0;return P().then((function(e){n&&r(e.data.articles)})),function(){return n=!1}}),[]),Object(Q.jsxs)(yn,{children:[Object(Q.jsx)("h4",{children:"Sport News"}),t.map((function(n){var e=n.title,t=n.description,r=n.url,i=n.publishedAt,c=n.author;return Object(Q.jsx)(vn,{title:e,description:t,url:r,publishedAt:i,author:c},r)}))]})},Nn=G.a.div(h||(h=Object(_.a)(["\nbackground-color:transparent;\nborder:1px solid #272727;\nwidth:400px;\nheight:570px;\npadding:15px;\nmargin:5px;\ncolor:gray;\nmargin-top: 50px;\nborder-radius:5px;\nfont-weight:700;\nletter-spacing:1.2px;\n\nh1 {\n    font-size:25px;\n}\nh3, p {\n    margin-bottom:5px;\n}\nimg {\n    width:370px;\n    height:240px;\n}\n\n& a {\n    color:blue;\n    word-wrap: break-word;\n}\n"]))),Sn=function(n){var e=n.title,t=n.content,r=n.url,i=n.urlToImage,c=n.publishedAt,o=n.author;return Object(Q.jsxs)(Nn,{children:[Object(Q.jsx)("img",{src:i,alt:"New image"}),Object(Q.jsx)("h3",{children:o}),Object(Q.jsx)("p",{children:e}),Object(Q.jsx)("p",{children:Object(Q.jsx)("b",{children:c.substring(0,10)})}),Object(Q.jsx)("h3",{children:Object(Q.jsx)("a",{href:r,children:r})}),Object(Q.jsx)("p",{children:t})]})},Cn=G.a.section(j||(j=Object(_.a)(["\nmargin-top: 30px;\nbackground-color:#FEFEFE;\ndisplay: grid;\ngrid-template-columns: repeat(3, 1fr);\nplace-items:center;\n\nh4 {\n    margin-top:-26px;\n    color:black;\n}\n"]))),Tn=function(){var n=Object(E.useState)([]),e=Object(K.a)(n,2),t=e[0],r=e[1];return Object(E.useEffect)((function(){H.a.get("https://newsapi.org/v2/everything?q=apple&from=2021-02-19&to=2021-02-19&sortBy=popularity&apiKey=ac157cacb088432180276283ed13c3c9").then((function(n){r(n.data.articles)}))}),[]),Object(Q.jsxs)(Cn,{children:[Object(Q.jsx)("h4",{children:"Tech News"}),t.map((function(n){var e=n.title,t=n.content,r=n.url,i=n.urlToImage,c=n.publishedAt,o=n.author;return Object(Q.jsx)(Sn,{title:e,content:t,url:r,urlToImage:i,publishedAt:c,author:o},r)}))]})},An=G.a.div(u||(u=Object(_.a)(["\nbackground-color:transparent;\nborder:1px solid gray;\nwidth:400px;\nheight:500px;\npadding:15px;\nmargin:5px;\ncolor:gray;\nmargin-top: 50px;\nborder-radius:5px;\nfont-weight:700;\nletter-spacing:1.2px;\n\nh1 {\n    font-size:25px;\n}\nh3, p {\n    margin-bottom:5px;\n}\nimg {\n    width:370px;\n    height:240px;\n}\n\n& a {\n    color:blue;\n    word-wrap: break-word;\n}\n"]))),zn=function(n){var e=n.id,t=n.title,r=n.description,i=n.url,c=n.urlToImage,o=n.publishedAt,a=n.author;return Object(Q.jsxs)(An,{children:[Object(Q.jsx)("img",{src:c,alt:"New image"}),Object(Q.jsx)("h3",{children:a}),Object(Q.jsx)("p",{children:Object(Q.jsx)("b",{children:o.substring(0,10)})}),Object(Q.jsx)("h3",{children:Object(Q.jsx)("a",{href:i,children:t})}),Object(Q.jsx)("p",{children:r}),Object(Q.jsx)("p",{children:e})]})},In=G.a.section(g||(g=Object(_.a)(["\nmargin-top: 30px;\nbackground-color:#212121;\ndisplay: grid;\ngrid-template-columns: repeat(3, 1fr);\nplace-items:center;\n\nh4 {\n    margin-top:-23px;\n    color:white !important;\n}\n"]))),En=function(){var n=Object(E.useState)([]),e=Object(K.a)(n,2),t=e[0],r=e[1];return Object(E.useEffect)((function(){R().then((function(n){r(n.data.articles)}))}),[]),Object(Q.jsxs)(In,{children:[Object(Q.jsx)("h4",{style:{color:"white"},children:"Top Dev News"}),t.map((function(n){var e=n.id,t=n.title,r=n.description,i=n.url,c=n.urlToImage,o=n.publishedAt,a=n.author;return Object(Q.jsx)(zn,{title:t,description:r,url:i,urlToImage:c,publishedAt:o,author:a},e)}))]})},Ln=G.a.div(f||(f=Object(_.a)(["\nwidth:320px;\nmin-height:240px;\npadding:15px;\nmargin:5px;\ncolor:gray;\nmargin-top: 50px;\nborder-radius:5px;\nfont-weight:700;\nletter-spacing:1.2px;\nbackground:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRADpGCP-O0ReITKhKzwlpkM75NDvHYCslsg&usqp=CAU');\n\nh1 {\n    font-size:25px;\n}\nh3, p {\n    margin-bottom:5px;\n}\nbox-shadow:2px 1px 2px 2px #141414;\nborder:none;\n\n&:hover {\n    background-color:#272727;\n    transition:all 0.4s;\n    color:white;\n}\n& a {\n    color:blue;\n}\n"]))),Dn=function(n){var e=n.source;return Object(Q.jsxs)(Ln,{children:[Object(Q.jsx)("h1",{children:e.name}),Object(Q.jsx)("h3",{children:e.category}),Object(Q.jsx)("h3",{children:Object(Q.jsx)("a",{href:e.url,children:e.url})}),Object(Q.jsx)("p",{children:e.description})]})},Fn=function(){var n=Object(E.useState)([]),e=Object(K.a)(n,2),t=e[0],r=e[1];return Object(E.useEffect)((function(){var n=!0;return H.a.get("https://newsapi.org/v2/sources?apiKey=ac157cacb088432180276283ed13c3c9").then((function(e){n&&r(e.data.sources)})),function(){return n=!1}}),[]),Object(Q.jsxs)("div",{children:[Object(Q.jsx)("h4",{children:"Top World News"}),t.map((function(n){return Object(Q.jsx)(Dn,{source:n},n.id)}))]})},Kn=G.a.nav(O||(O=Object(_.a)(["\n    background-color:#0e1111;\n    color:white;\n    padding:30px;\n    height:18.5vh;\n    font-size:15px;\n    text-align:left;\n    font-family: 'Press Start 2P', sans-serif;\n    box-shadow: 0px 3px 7px #353535;\n    \n a {\n     text-decoration:none;\n     margin-left:20px;\n     color:gray;\n     border:1px solid gray;\n     border-radius:5px;\n     padding: 10px;\n }\n a:hover {\n    background-color:#f1f5f9;\n}\n span {\n     position:absolute;\n     top:20px;\n     left:65%; \n     border:1px solid #f1f5f9;\n     padding:10px; \n     border-radius:5px; \n }\n  button {\n    padding: 10px 20px;\n    position:absolute;\n    left:90%;\n    background-color:darkred;\n    color:white;\n    border-radius:5px;\n    border:none;\n    font-weight:600;\n    letter-spacing:2px;\n    top:3%;\n    border:1px solid gray;\n }\n button:hover {\n   background-color:gray;\n   color:black;\n   font-weight:600;\n }\n h1 {\n     display:none;\n     font-size:80px;\n     padding:180px;\n     width:98%;\n     text-align:center;\n     position:absolute;\n     top:10%;\n     margin-left:-18px;\n     font-family:sans-serif;\n     height:85%; \n }\n button:hover + h1{\n    background-color:#310a31;\n    color:#f9f9f9;\n    border-radius:5px;\n    display: block;\n    z-index:5;\n }\n .img-logout {\n     width:250px;\n     height:250px;\n     border-radius:50%;\n     filter: drop-shadow(0 0 0.75rem yellow);\n }\n .year {\n    position: absolute;\n    left: 62%;\n    top: 20px;\n    color: #e0d7e0;\n    font-size: 20px;\n    color: #DFD73E;\n  }\n  .serbia {\n    color:#118ab2;\n    border: 1px solid #118ab2;\n  }\n  .sport {\n    position:absolute;\n    left:2.8%;\n    top:10%;\n  }\n  .health {\n    position:absolute;\n    left:18.3%;\n    top:10%;\n  }\n  .events {\n    position:absolute;\n    left:34.8%;\n    top:10%;\n  }\n  .daily {\n    position:absolute;\n    left:49.1%;\n    top:10%;\n  }\n  .logo {\n    width:200px;\n    background-color:white;\n    padding:12px;\n    margin-top:-13px;\n    margin-bottom:15px;\n    box-shadow: 0px 3px 7px #353535,\n                0 0 3px 5px #e9C03C,\n                0 0 8px 7px #f8f8ff,\n                0 0 8px 7px blue,\n                0 0 8px 7px #f8f8ff,\n                0 0 3px 3px #C7C03C;\n  text-shadow: 2px 2px 3px rgba(0,0,0,0.5);\n    \n  }\n  \n"]))),Mn=G.a.div(m||(m=Object(_.a)(["\nposition:absolute;\ntop:12%;\nleft:89%;\ncolor: #808080;\n\n"]))),Un=G.a.section(w||(w=Object(_.a)(["\n    margin-top: 50px;\n   > div{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    place-items:center;\n    }\n    h4 {\n        margin-top:-26px;\n        color:black;\n       \n    }\n \n"]))),qn=G.a.section(v||(v=Object(_.a)(["\n    background-color:#0e1111;\n    color:white;\n    position:absolute;\n    top:39%;\n    left:48.5%;\n    padding:20px;\n    width:49.80vw;\n    height:59vh;\n    font-size:15px;\n    text-align:center;\n    box-shadow: 0px 3px 7px #353535;\n    font-family:sans-serif;\n    border:0.5px solid #353535;\n .div {\n     width:100%;\n }\n   \nh2 {\n    text-shadow: 0px 0px 9px blue, 0px 0px 3px #f50abe, 0px 0px 2px red;\n    letter-spacing:2.5px;\n}\n\nimg {\n    width:780px;\n    max-height:300px;\n    margin-top:15px;\n    margin-left:-40px;\n    object-fit:contain;\n} \n"]))),Hn=G.a.section(y||(y=Object(_.a)(["\n    background-color:#0e1111;\n    color:white;\n    display:flex;\n    position:absolute;\n    top:39%;\n    margin-left:-10px;\n    padding: 10px 25px;\n    width:46vw;\n    height:59vh;\n    font-size:15px;\n    text-align:center;\n    font-family:sans-serif;\n    border:0.5px solid #353535;\n    box-shadow: 0px 3px 7px #353535;\n    border-left:12px solid #C7C03C;\n .div {\n     width:100%;\n }\n   \nh2 {\n    text-shadow: 0px 0px 9px blue, 0px 0px 3px #f50abe, 0px 0px 2px red;\n    letter-spacing:2.5px;\n}\n\n"]))),Rn=G.a.section(k||(k=Object(_.a)(["\n    background-color:#0e1111;\n    color:white;\n    position:absolute;\n    top:19.9%;\n    margin-left:-10px;\n    padding:30px;\n    width:46vw;\n    height:16.8vh;\n    font-size:15px;\n    text-align:center;\n    font-family:sans-serif;\n    border:0.5px solid #353535;\n    box-shadow: 0px 3px 7px #353535;\n    border-left:12px solid #C7C03C;\n .div {\n     width:100%;\n }\n   \nh2 {\n    text-shadow: 0px 0px 9px blue, 0px 0px 3px #f50abe, 0px 0px 3px blue;\n    letter-spacing:2.5px;\n}\n\n"]))),Pn=G.a.section(N||(N=Object(_.a)(["\n    margin-top: -50px;\n    background-color:#212121;\n   > div{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    place-items:center;\n   }\n    h4 {\n        margin-top:-26px;\n        color:white !important;\n    }\n    "]))),Wn=G.a.div(S||(S=Object(_.a)(["\nmargin-top: 30px;\nbackground-color:#212121;\nwidth:233px;\nposition:absolute;\nleft:65%;\ntop:5.7%;\n\n\ninput {\n    padding:8px;\n    width:233px;\n    height:38px;\n    border-radius:5px;\n    background-color: #272727;\n    color:white;\n}\n"]))),Bn=function(n){n.search;var e=n.setSearch;return Object(Q.jsx)(Wn,{children:Object(Q.jsx)("input",{type:"search",placeholder:"Search news...",onChange:function(n){return e(n.target.value)}})})},Yn=function(){var n=Object(E.useState)([]),e=Object(K.a)(n,2),t=e[0],r=e[1];return Object(E.useEffect)((function(){P().then((function(n){r(n.data.articles.slice(0,6))}))}),[]),Object(Q.jsx)("div",{children:t.map((function(n){var e=n.title,t=n.author;return Object(Q.jsxs)("div",{className:"div",children:[Object(Q.jsx)("h2",{children:t}),Object(Q.jsx)("br",{}),Object(Q.jsx)("h3",{children:Object(Q.jsx)("i",{children:e})})]},e)}))})},_n=function(){var n=Object(E.useState)([]),e=Object(K.a)(n,2),t=e[0],r=e[1];return Object(E.useEffect)((function(){P().then((function(n){r(n.data.articles.slice(10,11))}))}),[]),Object(Q.jsx)("div",{children:t.map((function(n){var e=n.title,t=n.author;return Object(Q.jsxs)("div",{className:"div",children:[Object(Q.jsx)("h2",{children:t}),Object(Q.jsx)("br",{}),Object(Q.jsx)("p",{children:Object(Q.jsx)("i",{children:e})})]},e)}))})},Gn=G.a.div(C||(C=Object(_.a)(["\nposition: absolute;\n  top: 100.7%;\n  display:flex;\n  justify-content:space-evenly;\n  width: 96.5vw;\n  font-family:sans-serif;\n  margin-left:-10px;\n  height: 40vh;\n  font-size: 20px;\n  color: white;\n  box-shadow: 0px 3px 7px #353535;\n  background-color:#0e1111;\n  border-left:12px solid #C7C03C;\n  img {\n    max-width:350px;\n    height:200px;\n    margin-left:20px;\n  }\n  h3 {\n    margin-top:5px;\n    margin-left:-75px;\n  }\n \n    a {\n    font-size:16px;\n    text-decoration:none;\n    border:none;\n    color:#C7C03C;\n  }\n  a:hover {\n    background-color: unset !important;\n  }\n  i {\n    border:1px solid #C7C03C;\n    border-radius:5px;\n    padding: 7px 12px;\n    font-weight:600;\n  }\n  i:hover {\n    background-color:lightgray;\n    color:black;\n  }\n  \n"]))),Jn=function(){var n=Object(E.useState)([]),e=Object(K.a)(n,2),t=e[0],r=e[1];return Object(E.useEffect)((function(){R().then((function(n){r(n.data.articles.slice(0,2))}))}),[]),Object(Q.jsx)(Gn,{children:t.map((function(n){var e=n.urlToImage,t=n.url,r=n.author,i=n.title;return Object(Q.jsxs)("div",{children:[Object(Q.jsx)("h3",{children:r}),Object(Q.jsx)("br",{}),Object(Q.jsx)("img",{src:e,alt:"new"}),Object(Q.jsx)("a",{href:t,children:Object(Q.jsx)("i",{children:"Read more ....."})})]},i)}))})},Qn=G.a.div(T||(T=Object(_.a)(["\n  position: absolute;\n  top: 143.5%;\n  width: 58.1vw;\n  padding:3px;\n  margin-left:-10px;\n  font-family:sans-serif;\n  height: 43vh;\n  font-size: 20px;\n  color: white;\n  box-shadow: 0px 3px 7px #353535;\n  background-color:#0e1111;\n  border-left:12px solid #C7C03C;\n  h3 {\n    margin-left:13px;\n    margin-top:5px;\n  }\n\n\n\n"]))),Xn=function(){var n=Object(E.useState)([]),e=Object(K.a)(n,2),t=e[0],r=e[1];return Object(E.useEffect)((function(){H.a.get("https://cat-fact.herokuapp.com/facts").then((function(n){r(n.data.slice(0,4))}))}),[]),Object(Q.jsx)(Qn,{children:t.map((function(n){return Object(Q.jsxs)("div",{children:[Object(Q.jsx)("i",{children:Object(Q.jsx)("u",{children:Object(Q.jsx)("h3",{children:n.text})})}),Object(Q.jsx)("br",{})]},n._id)}))})},Zn=G.a.div(A||(A=Object(_.a)(["\n  position: absolute;\n  top: 143.5%;\n  left: 61%;\n  padding:3px;\n  height: 43vh;\n  width: 37.5vw;\n  font-family:sans-serif;\n  font-size: 20px;\n  color: white;\n  box-shadow: 0px 3px 7px #353535;\n  background-color:#0e1111;\n  h2 {\n    text-align:center;\n  }\n\n  img {\n    width:400px;\n    max-height:200px;\n    margin-left:100px;\n    margin-top:-10px;\n    border:3px solid #f8f8ff;\n  }\n  a {\n    text-decoration:none;\n    border:none;\n    color:blue;\n    margin-left:120px;\n  }\n  a:hover {\n    background-color: unset !important;\n  }\n  b {\n    color:white !important;\n    margin-left:-105px;\n    margin-right:5px;\n  }\n"]))),Vn=function(){var n=Object(E.useState)([]),e=Object(K.a)(n,2),t=e[0],r=e[1],i=Object(E.useState)([0,1]),c=Object(K.a)(i,2),o=c[0],a=c[1];return Object(E.useEffect)((function(){H.a.get("https://api.spacexdata.com/v4/rockets").then((function(n){r(n.data.slice(0,4)),setTimeout((function(){a((function(n){return n[0]==t.length-1?[0,1]:[n[0]+1,n[1]+1]}))}),1e4)}))}),[o]),Object(Q.jsx)(Zn,{children:t.slice(o[0],o[1]).map((function(n){var e=n.company,t=n.id,r=n.wikipedia,i=n.flickr_images;return Object(Q.jsxs)("div",{children:[Object(Q.jsxs)("h2",{children:[e," flights"]}),Object(Q.jsx)("br",{}),Object(Q.jsx)("img",{src:i[0],alt:r}),Object(Q.jsx)("br",{}),Object(Q.jsxs)("a",{href:r,children:[Object(Q.jsx)("b",{children:"About flight: "}),r]})]},t)}))})},$n=G.a.section(z||(z=Object(_.a)(["\n    background-color:#0e1111;\n    color:white;\n    position:absolute;\n    top:19.9%;\n    margin-left:-10px;\n    left:49.2%;\n    padding:10px;\n    width:26.5vw;\n    height:16.8vh;\n    font-size:15px;\n    text-align:center;\n    font-family:sans-serif;\n    border:0.5px solid #353535;\n    box-shadow: 0px 3px 7px #353535;\n  &:hover {\n    z-index:10;\n    transform:translateX(12px);\n    transition: all 0.5s ease;\n    border:1px solid blueviolet;\n    color:black;\n    width:25.5vw;\n    background-color:#f8f8ff;\n    }\n  \nh2 {\n    text-shadow: 0px 0px 2px blue, 0px 0px 2px #f50abe;\n    letter-spacing:3.5px;\n    text-align:left;\n    padding-left:30px;\n    margin-top:-5px;\n}\nh3 {\n    text-shadow: 0px 0px 2px blue, 0px 0px 2px #f50abe;\n    letter-spacing:3.5px;\n    text-align:left;\n    padding-left:30px;\n}\n\n"]))),ne=function(){var n=Object(E.useState)(""),e=Object(K.a)(n,2),t=e[0],r=e[1],i=Object(E.useState)(""),c=Object(K.a)(i,2),o=c[0],a=c[1],s=Object(E.useState)(""),l=Object(K.a)(s,2),p=l[0],d=l[1],b=Object(E.useState)(""),x=Object(K.a)(b,2),h=x[0],j=x[1],u=Object(E.useState)(""),g=Object(K.a)(u,2),f=g[0],O=g[1];return Object(E.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=Belgrade&appid=6f9f3c22febc914f1639e706d22918db&units=metric").then((function(n){return n.json()})).then((function(n){r(n.main.temp_max),d(n.main.temp_min),a(n.main.temp),j(n.wind.speed),O(n.name)}))}),[]),Object(Q.jsxs)($n,{children:[Object(Q.jsxs)("h2",{children:["City: ",f]}),Object(Q.jsxs)("h3",{children:["Temp : ",Math.round(o)," \xb0C"]}),Object(Q.jsxs)("h3",{children:["Min-temp: ",p," \xb0C"]}),Object(Q.jsxs)("h3",{children:["Max-temp: ",Math.round(t)," \xb0C"]}),Object(Q.jsxs)("h3",{children:["Wind: ",h," m/s"]})]})},ee=G.a.div(I||(I=Object(_.a)(["\n  position: absolute;\n  top: 189.5%;\n  left: 1.3%;\n  width: 96.5vw;\n  height:15vh;\n  font-family:sans-serif;\n  font-size: 20px;\n  color: white;\n  box-shadow: 0px 3px 7px #353535;\n  background-color:#0e1111;\n  border-left:12px solid #C7C03C;\n\n  p {\n      display:flex;\n      justify-content:center;\n      margin-top:43px;\n      margin-left:45px;\n      color:#CFC83D;\n  }\n\n"]))),te=function(){return Object(Q.jsx)(ee,{children:Object(Q.jsx)("p",{children:" Copyright \xa9 2021 Ivan Nikolic All Rights Reserved"})})},re=function(){var n=Object(E.useState)(null),e=Object(K.a)(n,2),t=e[0],r=e[1],i=Object(E.useState)(""),c=Object(K.a)(i,2),o=c[0],a=c[1];return Object(Q.jsxs)(M.a,{children:[Object(Q.jsx)(Kn,{children:t?Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(M.b,{className:"serbia",to:"/SerbiaNewsList",children:"Serbia News"}),Object(Q.jsx)(M.b,{to:"/newsSourcesList",children:"Top World News"}),Object(Q.jsx)(M.b,{to:"/newsTechList",children:"Top Tech News"}),Object(Q.jsx)(M.b,{to:"/newsDevList",children:"Top Dev News"}),Object(Q.jsx)(M.b,{className:"sport",to:"/newsSportList",children:"Sport News"}),Object(Q.jsx)(M.b,{className:"health",to:"/NewsHealthList",children:"Health News"}),Object(Q.jsx)(M.b,{className:"events",to:"/EventsList",children:"Top Events"}),Object(Q.jsx)(M.b,{className:"daily",to:"/newsList",children:"Daily News"}),Object(Q.jsx)(Bn,{setSearch:a,search:o}),Object(Q.jsxs)("span",{children:["Username: ",t.username]}),Object(Q.jsx)("button",{onClick:function(){return r(null)},children:"LOGOUT"}),Object(Q.jsx)(Mn,{children:Object(Q.jsx)(Z,{})})]}):Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("img",{className:"logo",src:"https://cdn.worldvectorlogo.com/logos/daily-news.svg"}),Object(Q.jsx)("br",{}),Object(Q.jsx)("marquee",{scrollamount:"8",children:Object(Q.jsx)("h3",{children:"THE BEST PLACE FOR QUALITY NEWS"})}),Object(Q.jsxs)("h5",{className:"year",children:[" ",function(){var n=new Date,e=n.getDate(),t=n.getMonth()+1,r=n.getFullYear();return"".concat(e,"-").concat(t<10?"0".concat(t):"".concat(t),"-").concat(r)}()," "]}),Object(Q.jsx)(qn,{children:Object(Q.jsx)(cn,{})}),Object(Q.jsx)(ne,{}),Object(Q.jsx)(Hn,{children:Object(Q.jsx)(Yn,{})}),Object(Q.jsx)(Rn,{children:Object(Q.jsx)(_n,{})}),Object(Q.jsx)(Jn,{}),Object(Q.jsx)(Xn,{}),Object(Q.jsx)(Vn,{}),Object(Q.jsx)(te,{})]})}),Object(Q.jsx)(U.d,{children:Object(Q.jsxs)(Un,{children:[Object(Q.jsx)(U.b,{path:"/login",children:Object(Q.jsx)(X,{setUser:r})}),Object(Q.jsx)(U.b,{path:"/register",children:Object(Q.jsx)(V,{})}),Object(Q.jsx)(U.b,{path:"/newsList",children:Object(Q.jsx)(sn,{loggedIn:t})}),Object(Q.jsxs)(Pn,{children:[Object(Q.jsx)(U.b,{path:"/newsSourcesList",children:Object(Q.jsx)(Fn,{loggedIn:t})}),Object(Q.jsx)(U.b,{path:"/newsTechList",children:Object(Q.jsx)(Tn,{loggedIn:t})}),Object(Q.jsx)(U.b,{path:"/newsDevList",children:Object(Q.jsx)(En,{loggedIn:t})}),Object(Q.jsx)(U.b,{path:"/newsSportList",children:Object(Q.jsx)(kn,{loggedIn:t})}),Object(Q.jsx)(U.b,{path:"/NewsHealthList",children:Object(Q.jsx)(mn,{loggedIn:t})}),Object(Q.jsx)(U.b,{path:"/EventsList",children:Object(Q.jsx)(un,{loggedIn:t})}),Object(Q.jsx)(U.b,{path:"/SerbiaNewsList",children:Object(Q.jsx)(bn,{loggedIn:t})})]}),Object(Q.jsx)(U.b,{path:"/",children:Object(Q.jsx)($,{loggedIn:t})})]})})]})};F.a.render(Object(Q.jsx)(L.a.StrictMode,{children:Object(Q.jsx)(re,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.926f42d2.chunk.js.map