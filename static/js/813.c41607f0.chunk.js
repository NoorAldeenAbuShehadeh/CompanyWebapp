"use strict";(self.webpackChunkcompany=self.webpackChunkcompany||[]).push([[813],{6586:function(e,n,t){t(2791);var i=t(4889),r=t(7058),s=t(184),a=(0,i.QM)((function(e){return{description:{fontSize:"16px",fontWeight:400,color:e.colors.darkGray}}}));n.Z=function(e){var n=e.description,t=(0,r.Fg)(),i=a(t);return(0,s.jsx)("p",{className:i.description,children:n})}},4767:function(e,n,t){t(2791);var i=t(4889),r=t(7058),s=t(184),a=(0,i.QM)((function(e){return{title:{fontSize:"24px",fontWeight:600,color:e.colors.background}}}));n.Z=function(e){var n=e.title,t=(0,r.Fg)(),i=a(t);return(0,s.jsx)("h2",{className:i.title,children:n})}},9705:function(e,n,t){t.d(n,{Z:function(){return p}});t(2791);var i=t(2469),r=t(7022),s=t(9743),a=t(2677),o=t(3161),c=t(6654),l=t(3360),d=t(7058),x=(0,t(4889).QM)((function(e){return{AlertContainer:{marginTop:"30px",marginBottom:"70px"},title:{fontSize:"30px",fontWeight:600,color:e.colors.background},description:{fontSize:"16px",fontWeight:400}}})),u=t(184),p=function(){var e=(0,d.Fg)(),n=x({theme:e});return(0,u.jsx)(i.Z,{variant:"secondary",className:"p-5 ".concat(n.AlertContainer),children:(0,u.jsx)(r.Z,{children:(0,u.jsxs)(s.Z,{className:"d-flex flex-wrap align-items-center justify-content-between",children:[(0,u.jsxs)(a.Z,{md:6,children:[(0,u.jsx)("h2",{className:n.title,children:"Stay in the loop"}),(0,u.jsxs)("p",{className:n.description,children:["Subscribe to receive the latest news and updates about TDA. We promise not to spam you!"," "]})]}),(0,u.jsx)(a.Z,{md:4,children:(0,u.jsxs)(o.Z,{className:"mb-3",children:[(0,u.jsx)(c.Z.Control,{placeholder:"Enter email address","aria-label":"Enter email address"}),(0,u.jsx)(l.Z,{variant:"primary",children:"Continue"})]})})]})})})}},6394:function(e,n,t){var i=(0,t(4889).QM)((function(e){return{Container:{maxWidth:"430px"},title:{fontSize:"42px",fontWeight:700,textAlign:"center","& span":{color:e.colors.primary},margin:"20px"},description:{fontSize:"20px",fontWeight:500,textAlign:"center"},InputGroup:{maxWidth:"320px"},searchInput:{backgroundColor:e.colors.SearchBackground}}}));n.Z=i},5813:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var i=t(1413),r=t(9439),s=t(2791),a=t(7022),o=t(3360),c=t(7058),l=t(4767),d=t(6586),x=(0,t(4889).QM)((function(e){return{postContainer:{display:"flex",flexDirection:function(e){return e.flexDirection},maxWidth:function(e){return"column"===e.flexDirection?e.maxWidth:""},marginTop:"50px",marginBottom:"50px","@media (max-width: 1000px)":{flexDirection:"column!important",alignItems:"center"}},postImage:{maxWidth:function(e){return e.maxWidth},height:function(e){return"column"===e.flexDirection?"260px":"310px"},borderRadius:"44px",margin:"0px 30px","@media (max-width: 500px)":{maxWidth:"350px",height:"245px!important"}},postContent:{maxWidth:function(e){return e.maxWidth},padding:"20px"},publisherName:{fontSize:"16px",fontWeight:600},date:{fontSize:"13px",fontWeight:400},publisherImg:{width:"54px",height:"54px",borderRadius:"54px"},publisherContainer:{display:"flex"}}})),u=t(8166),p=t(7689),m=t(6682),h=t(184),f=function(e){var n=e.maxWidth,t=e.flexDirection,i=e.image,f=e.title,j=e.description,g=e.dateOfPublish,Z=e.publisherEmail,v=e.index,b=(0,c.Fg)(),N=x({theme:b,maxWidth:n,flexDirection:t}),C=(0,s.useState)(null),y=(0,r.Z)(C,2),W=y[0],S=y[1],w=(0,p.s0)(),I=(0,m.S)(),k=(0,r.Z)(I,1)[0];return(0,s.useEffect)((function(){(0,u.Z)("Users","email",Z).then((function(e){S(e[0])}))}),[]),W&&(0,h.jsxs)(a.Z,{className:N.postContainer,children:[(0,h.jsx)("img",{src:i,alt:"",className:N.postImage}),(0,h.jsxs)(a.Z,{className:N.postContent,children:[(0,h.jsx)(l.Z,{title:f}),(0,h.jsx)(d.Z,{description:j}),(0,h.jsxs)(a.Z,{className:N.publisherContainer,children:[(0,h.jsx)("img",{src:W.image,alt:"",className:N.publisherImg}),(0,h.jsxs)(a.Z,{fluid:!0,children:[(0,h.jsx)("h5",{className:N.publisherName,children:W.name}),(0,h.jsx)("span",{className:N.date,children:g})]})]}),(null===k||void 0===k?void 0:k.email)===Z&&(0,h.jsx)(a.Z,{className:"d-flex align-items-center justify-content-end",children:(0,h.jsx)(o.Z,{variant:"primary",onClick:function(){return w("update/".concat(v))},children:"update"})})]})]})},j=t(9743),g=t(2677),Z=t(9705),v=t(9126),b=t(3161),N=t(6654),C=t(6394),y=function(e){var n=e.setSearchContent,t=(0,c.Fg)(),i=(0,C.Z)({theme:t});return(0,h.jsxs)(a.Z,{className:"d-flex align-items-center justify-content-center flex-wrap",children:[(0,h.jsx)("img",{src:"images/bell_2 1.png",alt:""}),(0,h.jsxs)(a.Z,{className:"".concat(i.Container," d-flex flex-column align-items-center"),children:[(0,h.jsxs)("h2",{className:i.title,children:["Latest news ",(0,h.jsx)("span",{children:"Updates"})]}),(0,h.jsx)("p",{className:i.description,children:"Lorem Ipsum is simply dummy text of the printing ."}),(0,h.jsxs)(b.Z,{className:"mb-2 ".concat(i.InputGroup),children:[(0,h.jsx)(b.Z.Text,{children:(0,h.jsx)(v.dVI,{})}),(0,h.jsx)(N.Z.Control,{id:"inlineFormInputGroup",placeholder:"publisher name",onChange:function(e){n(e.target.value)},className:i.searchInput})]})]}),(0,h.jsx)("img",{src:"images/lightbulb 1.png",alt:""})]})},W=t(4492),S=t(6493),w=function(){var e=(0,m.S)(),n=(0,r.Z)(e,1)[0],t=(0,s.useState)(!0),c=(0,r.Z)(t,2),l=c[0],d=c[1],x=(0,W.vd)(),v=(0,r.Z)(x,2),b=v[0],N=v[1],C=(0,s.useState)(),w=(0,r.Z)(C,2),I=(w[0],w[1]),k=(0,p.s0)();return(0,s.useEffect)((function(){window.scrollTo(0,0),(0,u.Z)("News").then((function(e){N(e),d(!1)}))}),[]),(0,h.jsxs)(a.Z,{children:[(0,h.jsx)(j.Z,{children:(0,h.jsx)(y,{setSearchContent:I})}),l?(0,h.jsx)(S.Z,{}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(j.Z,{children:("admin"===(null===n||void 0===n?void 0:n.role)||"employee"===(null===n||void 0===n?void 0:n.role))&&(0,h.jsx)(g.Z,{className:"d-flex align-items-center justify-content-end",children:(0,h.jsx)(o.Z,{variant:"primary",onClick:function(){return k("add")},children:"add New"})})}),(0,h.jsx)(j.Z,{children:(0,h.jsx)(f,(0,i.Z)((0,i.Z)({maxWidth:"520px",flexDirection:"row"},b[0]),{},{index:0}))}),(0,h.jsx)(j.Z,{children:b.slice(1,b.length).map((function(e,n){return(0,h.jsx)(f,(0,i.Z)((0,i.Z)({maxWidth:"380px",flexDirection:"column"},e),{},{index:n}),n)}))})]}),(0,h.jsx)(j.Z,{children:(0,h.jsx)(Z.Z,{})})]})}},3161:function(e,n,t){t.d(n,{Z:function(){return j}});var i=t(5987),r=t(1413),s=t(1694),a=t.n(s),o=t(2791),c=t(6543),l=t(162),d=t(6882),x=o.createContext(null);x.displayName="InputGroupContext";var u=x,p=t(184),m=["bsPrefix","size","hasValidation","className","as"],h=(0,c.Z)("input-group-text",{Component:"span"}),f=o.forwardRef((function(e,n){var t=e.bsPrefix,s=e.size,c=e.hasValidation,d=e.className,x=e.as,h=void 0===x?"div":x,f=(0,i.Z)(e,m);t=(0,l.vE)(t,"input-group");var j=(0,o.useMemo)((function(){return{}}),[]);return(0,p.jsx)(u.Provider,{value:j,children:(0,p.jsx)(h,(0,r.Z)((0,r.Z)({ref:n},f),{},{className:a()(d,t,s&&"".concat(t,"-").concat(s),c&&"has-validation")}))})}));f.displayName="InputGroup";var j=Object.assign(f,{Text:h,Radio:function(e){return(0,p.jsx)(h,{children:(0,p.jsx)(d.Z,(0,r.Z)({type:"radio"},e))})},Checkbox:function(e){return(0,p.jsx)(h,{children:(0,p.jsx)(d.Z,(0,r.Z)({type:"checkbox"},e))})}})}}]);
//# sourceMappingURL=813.c41607f0.chunk.js.map