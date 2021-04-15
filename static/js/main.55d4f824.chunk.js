(this["webpackJsonpreact-hooks-mock-code-challenge-plantshop"]=this["webpackJsonpreact-hooks-mock-code-challenge-plantshop"]||[]).push([[0],{17:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n(19),r=n.n(s);n(27);var l=function(){return Object(c.jsxs)("header",{children:[Object(c.jsxs)("h1",{children:["Plantsy",Object(c.jsx)("span",{className:"logo",role:"img",children:"\ud83c\udf31"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"* Data may take a few seconds to fetch *"})]})},i=n(21),j=n(7);var o=function(e){var t=e.handleAddPlant,n=Object(a.useState)(""),s=Object(j.a)(n,2),r=s[0],l=s[1],i=Object(a.useState)(""),o=Object(j.a)(i,2),h=o[0],b=o[1],d=Object(a.useState)(""),u=Object(j.a)(d,2),p=u[0],O=u[1];return Object(c.jsxs)("div",{className:"new-plant-form",children:[Object(c.jsx)("h2",{children:"New Plant"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("HandleSubmit"),fetch("https://plantdb01.herokuapp.com/plants",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,image:h,price:p})}).then((function(e){return e.json()})).then((function(e){return t(e)}))},children:[Object(c.jsx)("input",{type:"text",name:"name",placeholder:"Plant name",value:r,onChange:function(e){return l(e.target.value)}}),Object(c.jsx)("input",{type:"text",name:"image",placeholder:"Image URL",value:h,onChange:function(e){return b(e.target.value)}}),Object(c.jsx)("input",{type:"number",name:"price",step:"0.01",placeholder:"Price",value:p,onChange:function(e){return O(parseFloat(e.target.value))}}),Object(c.jsx)("button",{type:"submit",children:"Add Plant"})]})]})};var h=function(e){var t=e.plant,n=Object(a.useState)(!0),s=Object(j.a)(n,2),r=s[0],l=s[1],i=t.name,o=t.image,h=t.price;function b(){l((function(e){return!e}))}return Object(c.jsxs)("li",{className:"card",children:[Object(c.jsx)("img",{src:o,alt:i}),Object(c.jsx)("h4",{children:i}),Object(c.jsxs)("p",{children:["Price: ",h]}),r?Object(c.jsx)("button",{onClick:b,className:"primary",children:"In Stock"}):Object(c.jsx)("button",{onClick:b,children:"Out of Stock"})]})};var b=function(e){var t=e.plants;return Object(c.jsx)("ul",{className:"cards",children:t.map((function(e){return Object(c.jsx)(h,{plant:e},e.id)}))})};var d=function(e){var t=e.searchTerm,n=e.onSearchChange;return Object(c.jsxs)("div",{className:"searchbar",children:[Object(c.jsx)("label",{htmlFor:"search",children:"Search Plants:"}),Object(c.jsx)("input",{type:"text",id:"search",placeholder:"Type a name to search...",value:t,onChange:function(e){return n(e.target.value)}})]})},u=n(9);n(17);var p=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),l=Object(j.a)(r,2),h=l[0],p=l[1];Object(a.useEffect)((function(){fetch("https://plantdb01.herokuapp.com/plants").then((function(e){return e.json()})).then((function(e){s(e),console.log("Get plants",e)}))}),[]);var O=n.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return Object(c.jsxs)("main",{children:[Object(c.jsx)("a",{href:"https://jaimeportfolio.herokuapp.com/",children:Object(c.jsx)("div",{className:"btn",children:Object(c.jsx)("p",{children:"X"})})}),Object(c.jsx)(u.b,{to:"/",children:Object(c.jsx)("div",{className:"btn2",children:Object(c.jsx)("p",{children:"X"})})}),Object(c.jsx)(o,{handleAddPlant:function(e){var t=[].concat(Object(i.a)(n),[e]);s(t)}}),Object(c.jsx)(d,{searchTerm:h,onSearchChange:p}),Object(c.jsx)(b,{plants:O})]})},O=n.p+"static/media/demoplant.f7977ae4.gif";var m=function(){return Object(c.jsxs)("div",{className:"intro",children:[Object(c.jsx)("a",{href:"https://jaimeportfolio.herokuapp.com/",children:Object(c.jsx)("div",{className:"btn",children:Object(c.jsx)("p",{children:"X"})})}),Object(c.jsxs)("div",{className:"intro__left",children:[Object(c.jsx)("img",{className:"gif",src:O,alt:""}),Object(c.jsx)("h1",{className:"h1title demo",children:"DEMO"})]}),Object(c.jsxs)("div",{className:"intro__right",children:[Object(c.jsx)("h1",{className:"h1title",children:"Plantsy"}),Object(c.jsx)("br",{}),Object(c.jsx)("h2",{className:"h1title",children:"Instructions:"}),Object(c.jsx)("p",{children:"Welcome to Plantsy! You've been tasked with building out some features for the admin side of a plant store. The designers have put together the components and CSS. Now it's up to you to bring the features to life by adding stateful logic as well as persisting data to the backend via our API."}),Object(c.jsx)("br",{}),Object(c.jsx)("h2",{className:"h1title",children:"Project Requirements:"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"When the app starts, I can see all plants."}),Object(c.jsx)("li",{children:"I can add a new plant to the page by submitting the form."}),Object(c.jsx)("li",{children:'I can mark a plant as "sold out".'}),Object(c.jsx)("li",{children:"I can search for plants by their name and see a filtered list of plants."})]}),Object(c.jsx)(u.b,{to:"/app",children:Object(c.jsx)("button",{className:"introbutton",children:"View Final Product"})}),Object(c.jsx)("a",{href:"https://github.com/jaimedavid01/react-hooks-mock-code-challenge-plantshop",children:Object(c.jsx)("button",{className:"introbutton",children:"View Code"})})]})]})},x=n(2);var f=function(){return Object(c.jsx)(u.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(x.c,{children:[Object(c.jsxs)(x.a,{path:"/app",children:[Object(c.jsx)(l,{}),Object(c.jsx)(p,{})]}),Object(c.jsx)(x.a,{path:"/",children:Object(c.jsx)(m,{})})]})})})};r.a.render(Object(c.jsx)(f,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.55d4f824.chunk.js.map