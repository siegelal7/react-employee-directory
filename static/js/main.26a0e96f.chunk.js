(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{42:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(2),a=s.n(r),c=s(16),i=s.n(c),l=s(17),o=s(3),h=s(4),u=s(6),j=s(5),d={background:"navy",height:"18vh"},p={color:"white",margin:"auto",fontFamily:"'Montserrat', sans-serif",paddingTop:"1%",cursor:"pointer"},b=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("nav",{className:"text-center",style:d,children:[Object(n.jsx)("h3",{style:p,onClick:this.props.handleNavClick,children:"Employee Directory"}),Object(n.jsx)("p",{style:{color:"white"},children:"Click Name to sort or use the search to narrow results"})]})}}]),s}(r.Component),m={height:"12vh"},O=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={people:e.props},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.setState({people:this.props.person})}},{key:"render",value:function(){return Object(n.jsxs)("table",{className:"table table-striped",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Image"}),Object(n.jsx)("th",{scope:"col",onClick:this.props.clickEvent,children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Email"}),Object(n.jsx)("th",{scope:"col",children:"Phone"}),Object(n.jsx)("th",{scope:"col",children:"Location"})]})}),this.props.person.map((function(e,t){return Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{style:m,children:[Object(n.jsx)("th",{scope:"row",children:Object(n.jsx)("img",{src:e.picture.thumbnail,alt:e.name.first})}),Object(n.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.phone}),Object(n.jsxs)("td",{children:[e.location.city,", ",e.location.state]})]})},t)}))]})}}]),s}(r.Component),f={marginTop:"0.5%",marginBottom:"0.5%"},v=function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("form",{style:f,className:"text-center",onSubmit:e.handleSubmit,children:Object(n.jsx)("input",{onChange:e.handleInputChange,type:"text",value:e.search,placeholder:"search",name:"search",id:"search"})}),Object(n.jsx)(O,{person:e.searchRes,clickEvent:e.handleSort})]})},x=s(18),y=s.n(x),g=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[],searchRes:[]},e.handleInputChange=function(t){var s=t.target,n=s.name,r=s.value;e.setState(Object(l.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();for(var s=e.state.search,n=[],r=0;r<e.state.results.length;r++){e.state.results[r].name.first===s&&n.push(e.state.results[r])}e.setState({searchRes:n})},e.handleSort=function(t){for(var s=e.state.results,n=[],r=0;r<s.length;r++)n.push(s[r]);n.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0})),e.setState({searchRes:n})},e.handleNavClick=function(t){e.setState({searchRes:e.state.results})},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;y.a.get("https://randomuser.me/api/?results=75&nat=us").then((function(t){e.setState({searchRes:t.data.results,results:t.data.results})}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{handleNavClick:this.handleNavClick}),Object(n.jsx)(v,{search:this.state.search,results:this.state.results,searchRes:this.state.searchRes,handleSubmit:this.handleSubmit,handleInputChange:this.handleInputChange,handleSort:this.handleSort})]})}}]),s}(r.Component);var k=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(g,{})})};s(41);i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.26a0e96f.chunk.js.map