(this["webpackJsonpricky-and-morty-characters-list-react"]=this["webpackJsonpricky-and-morty-characters-list-react"]||[]).push([[0],{86:function(n,e,t){},87:function(n,e,t){"use strict";t.r(e);var a=t(3),i=t.n(a),r=t(40),c=t.n(r),o=t(88),s=t(47);function d(){return new s.a({uri:"https://rickandmortyapi.com/graphql"})}var l,p,j=t(29),b=t(6),m=t(7),h=t.p+"static/media/logo.017129c9.png",u=t(14),g="\n    background: transparent;\n    border: 2px solid var(--white);\n    border-radius: 8px;\n    color: var(--white);\n    font-weight: bold;\n    font-size: 16px;\n    padding: 10px 17px;\n\n    :focus {\n        outline: transparent;\n    }\n\n    ::placeholder {\n        color: #9F9F9F;\n    }\n",x=t(2),O=m.a.input(l||(l=Object(b.a)(["\n    ","\n"])),g);function f(n){return Object(x.jsx)(O,Object(u.a)(Object(u.a)({},n),{},{onChange:function(e){return n.onChange&&n.onChange(e.target.value,e)}}))}function v(n){return Object(x.jsx)(f,Object(u.a)(Object(u.a)({},n),{},{type:"search"}))}f.displayName="Components/Generic/Form/InputBase/InputBase",v.displayName="Components/Generic/Form/Search";var y,w,C,A=m.a.button(p||(p=Object(b.a)(["\n    ","\n    cursor: pointer;\n\n    :focus {\n        outline: transparent;\n        box-shadow: 0 -3px 4px rgba(255, 255, 255, 0.25) inset;\n    }\n"])),g);function k(n){var e=n.type,t=void 0===e?"button":e;return Object(x.jsx)(A,Object(u.a)(Object(u.a)({},n),{},{type:t}))}k.displayName="Components/Generic/Form/Button";var N,S,M=Object(m.a)(v)(y||(y=Object(b.a)(["\n    width: 196px;\n"]))),G=Object(m.a)(k)(w||(w=Object(b.a)(["\n    margin-left: 16px;\n"])));m.a.div(C||(C=Object(b.a)([""])));function z(n){var e=n.className,t=n.onSearch,i=Object(a.useState)(""),r=Object(j.a)(i,2),c=r[0],o=r[1];return Object(x.jsx)("div",{className:e,children:Object(x.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(c)},children:[Object(x.jsx)(M,{placeholder:"Search characters",onChange:o}),Object(x.jsx)(G,{type:"submit",children:"Search"})]})})}z.displayName="Components/Generic/SearchBox/SearchBox";var B,F,E,H,I,L=m.a.img(N||(N=Object(b.a)(["\n    margin: 38px;\n"]))),D=Object(m.a)(z)(S||(S=Object(b.a)(["\n    margin: 38px;\n    text-align: center;\n    \n    "," {\n        width: 196px;\n    }\n"])),v);function P(n){var e=n.onSearch;return Object(x.jsxs)("header",{children:[Object(x.jsx)(L,{src:h,alt:"Rick & Morty"}),Object(x.jsx)(D,{onSearch:e})]})}function Q(n){return"string"===typeof n?n:n+"px"}P.displayName="Components/Header/Header";var R=m.a.div(B||(B=Object(b.a)(["\n    width: ",";\n    height: ",";\n    border: 2px solid var(--gray);\n    border-radius: 8px;\n    overflow: hidden;\n\n    :hover, :active {\n        border: 2px solid var(--yellow);\n        box-shadow: 0px 6px 7px rgba(203, 215, 54, 0.25);\n    }\n"])),(function(n){return n.width?Q(n.width):"auto"}),(function(n){return n.height?Q(n.height):"auto"})),U=m.a.div(F||(F=Object(b.a)(["\n    width: 100%;\n    height: 100%;\n    background-image: url(",");\n    background-position: top;\n    background-repeat: no-repeat;\n    background-size: cover;\n    filter: ",";\n"])),(function(n){return n.image}),(function(n){return n.disabled?"var(--grayscale)":"inherit"})),V=m.a.div(E||(E=Object(b.a)(["\n    background: rgba(30, 30, 30, 0.8);\n    backdrop-filter: var(--blur);\n    bottom: 0;\n    color: var(--white);\n    min-height: 55px;\n    padding: 10px;\n    position: sticky;\n"]))),T=m.a.p(H||(H=Object(b.a)(["\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 25px;\n"]))),$=m.a.p(I||(I=Object(b.a)(["\n    font-size: 12px;\n    line-height: 15px;\n"])));function q(n){var e=n.className,t=void 0===e?"":e,a=n.disabled,i=n.image,r=n.title,c=n.subtitle,o=n.width,s=n.height,d=r||c;return Object(x.jsxs)(R,{width:o,height:s,className:t,children:[Object(x.jsx)(U,{disabled:a,image:i}),d&&Object(x.jsxs)(V,{children:[r&&Object(x.jsx)(T,{children:r}),c&&Object(x.jsx)($,{children:c})]})]})}q.displayName="Components/Generic/Card/Card";var J,W=Object(a.memo)(q),X="unknown",K="Female",Z="Genderless",Y="Male",_="Alive",nn="Dead",en=m.a.div(J||(J=Object(b.a)(["\n    cursor: pointer;\n"])));function tn(n){var e=n.image,t=n.name,a=n.onClick,i=n.species,r=n.status;return Object(x.jsx)(en,{onClick:a,children:Object(x.jsx)(W,{disabled:r===nn,image:e,title:t,subtitle:i,width:224,height:224})})}tn.displayName="Components/CharactersGrid/CharacterCard";var an,rn=Object(a.memo)(tn),cn=m.a.div(an||(an=Object(b.a)(["\n    width: 35%;\n    height: 65%;\n    max-width: 400px;\n    max-height: 470px;\n    top: 0;\n    bottom: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-left: -3vw;\n    grid-column-start: 1;\n    grid-column-end: span 1;\n    grid-row-start: 1;\n    grid-row-end: 1;\n    position: absolute;\n"])));function on(n){var e=n.image,t=n.name,a=n.species,i=n.status;return Object(x.jsx)(cn,{children:Object(x.jsx)(W,{disabled:i===nn,image:e,title:t,subtitle:a,width:"100%",height:"100%"})})}on.displayName="Components/CharactersModal/CharacterModalCard";var sn,dn,ln,pn,jn,bn,mn,hn=Object(a.memo)(on),un=m.a.div(sn||(sn=Object(b.a)(["\n    height: 100vh;\n    width: 100vw;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    position: fixed;\n    z-index: 50;\n"]))),gn=m.a.div(dn||(dn=Object(b.a)(["\n    height: 100vh;\n    width: 100vw;\n    backdrop-filter: var(--blur);\n"]))),xn=m.a.div(ln||(ln=Object(b.a)(["\n    position: absolute;\n"])));function On(n){var e=n.children,t=Object(x.jsxs)(un,{children:[Object(x.jsx)(gn,{}),Object(x.jsx)(xn,{children:e})]});return Object(r.createPortal)(t,document.body)}On.displayName="Components/Generic/BlurryBackground/BlurryBackground";var fn,vn,yn,wn=m.a.div(pn||(pn=Object(b.a)(["\n    width: 100%;\n    height: 100%;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    position: fixed;\n    z-index: 50;\n"]))),Cn=m.a.div(jn||(jn=Object(b.a)(["\n    width: 90vw;\n    height: 90vh;\n    max-width: 1034px;\n    max-height: 650px;\n    background: var(--black);\n    border-radius: 16px;\n    border: 1px solid var(--gray);\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n"]))),An=Object(m.a)(k)(bn||(bn=Object(b.a)(["\n    display: none;\n    margin-top: 15px;\n    margin-left: 15px;\n    position: absolute;\n    z-index: 50;\n\n    @media (min-width: 768px) {\n        display: block;\n    }\n"]))),kn=Object(m.a)(k)(mn||(mn=Object(b.a)(["\n    top: 5px;\n    right: 5px;\n    background-color: var(--black);\n    display: block;\n    position: absolute;\n    z-index: 50;\n\n    @media (min-width: 768px) {\n        display: none;\n    }\n"])));function Nn(n){var e=n.children,t=n.onClose,i=Object(a.useRef)();return Object(x.jsx)(On,{children:Object(x.jsx)(wn,{onClick:function(n){return n.target===i.current&&t()},ref:i,children:Object(x.jsxs)(Cn,{children:[Object(x.jsx)(An,{onClick:t,children:"Close"}),Object(x.jsx)(kn,{onClick:t,children:"x"}),e]})})})}Nn.displayName="Components/Generic/Modal/Modal";var Sn=m.a.section(fn||(fn=Object(b.a)(["\n    width: 100%;\n"]))),Mn=m.a.h4(vn||(vn=Object(b.a)(["\n    color: var(--yellow);\n    font-family: Nunito;\n    font-size: 13px;\n    letter-spacing: 0.65em;\n    line-height: 18px;\n    text-transform: uppercase;\n"]))),Gn=m.a.div(yn||(yn=Object(b.a)(["\n    margin-top: 9px;\n"])));function zn(n){var e=n.className,t=n.children,a=n.title;return Object(x.jsxs)(Sn,{className:e,children:[a&&Object(x.jsx)(Mn,{children:a}),Object(x.jsx)(Gn,{children:t})]})}zn.displayName="Components/Generic/Section/Section";var Bn,Fn,En=Object(a.memo)(zn),Hn=m.a.div(Bn||(Bn=Object(b.a)(["\n    align-items: center;\n    display: flex;\n"]))),In=m.a.div(Fn||(Fn=Object(b.a)(["\n    padding-right: 15px;\n\n    @media (min-width: 768px) {\n        display: none;\n    }\n"])));function Ln(n,e){var t=function(n){var e="He/She";switch(n){case Y:e="He";break;case K:e="She";break;case Z:e="It"}return e}(e);return n===X?"It can't be told if ".concat(t.toLowerCase()," is alive or dead. "):n===_?"".concat(t," is alive and well. "):"".concat(t," is ").concat(n.toLowerCase(),". ")}function Dn(n){var e=n.name,t=n.gender,a=n.species,i=n.status,r=n.episode,c=function(n,e,t,a){var i=e===nn?"was":"is",r=t===X||t===Z?"":t.toLowerCase(),c=a.toLowerCase();return"".concat(n," ").concat(i," a ").concat(r," ").concat(c,".")}(e,i,t,a),o=Ln(i,t),s=function(n){var e=n&&n.length>0&&n[n.length-1];return e?"Last seen ".concat(e.air_date,"."):""}(r);return"".concat(c," ").concat(o," ").concat(s)}function Pn(n){var e=n.data,t=n.image;return Object(x.jsx)(En,{title:"About",children:Object(x.jsxs)(Hn,{children:[Object(x.jsx)(In,{children:Object(x.jsx)(W,{image:t,width:100,height:100})}),Object(x.jsx)("p",{children:Dn(e)})]})})}Pn.displayName="Components/CharacterModal/AboutSection";var Qn,Rn,Un,Vn,Tn=Object(a.memo)(Pn),$n="Unknown dimension",qn="Unknown",Jn="Unknown planet",Wn=m.a.p(Qn||(Qn=Object(b.a)(["\n    color: var(--light-gray);\n    font-size: 14px;\n    line-height: 19px;\n"]))),Xn=m.a.p(Rn||(Rn=Object(b.a)(["\n    font-size: 28px;\n    line-height: 38px;\n"]))),Kn=m.a.p(Un||(Un=Object(b.a)(["\n    font-size: 14px;\n    line-height: 19px;\n"]))),Zn=Object(m.a)(Wn)(Vn||(Vn=Object(b.a)(["\n    margin-top: 12px;\n\n    img {\n        display: inline;\n        margin-top: -2px;\n        margin-right: 11px;\n    }\n"])));function Yn(n){var e=n.data,t=n.title,a=function(n){var e=n.dimension,t=n.name,a=n.residents,i=n.type;return{dimension:e===X||null===e?$n:e,name:t===X||null===t?qn:t,type:i===X||null===i?Jn:i,residents:a}}(e),i=a.dimension,r=a.name,c=a.type,o=a.residents;return Object(x.jsxs)(En,{title:t,children:[Object(x.jsx)(Wn,{children:c}),Object(x.jsx)(Xn,{children:r}),Object(x.jsx)(Kn,{children:i}),o&&Object(x.jsxs)(Zn,{children:[Object(x.jsx)("span",{children:Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAMAAABlXnzoAAAAOVBMVEUAAAB4eHh6enp7e3t7e3t2dnZ7e3t6enp8fHx7e3t6enp6enp6enp7e3t6enp4eHh1dXV8fHx7e3voono0AAAAEnRSTlMAIIDfvxDPcECfkFAw719AMK82eQPZAAAAXUlEQVQI122NQRKDMAwDV7YTSAjQ8v/HtnGZ6YW97ViWmGx2oo2bFuaLaiM5HbRDff2iAVwQa2r5Jntj8UKi8F7GWzxw+DUJlXqAPBvm69hXzNJyp9tfI0/SrQOkD8qTAiseWTO2AAAAAElFTkSuQmCC"})}),o.length,o.length>1?" residents":" resident"]})]})}Yn.displayName="Components/CharacterModal/LocationSection";var _n,ne,ee,te,ae,ie,re=Object(a.memo)(Yn),ce=t(30),oe=Object(ce.a)(_n||(_n=Object(b.a)(["\n    query CHARACTER($id: ID!) {\n        character(id: $id) {\n            id\n            name\n            gender\n            status\n            species\n            episode {\n                air_date\n            }\n            origin {\n                dimension\n                name\n                type\n                residents {\n                    id\n                }\n            }\n            location {\n                dimension\n                name\n                type\n                residents {\n                    id\n                }\n            }\n        }\n    }\n"]))),se=Object(ce.a)(ne||(ne=Object(b.a)(["\n\tquery CHARACTERS($page: Int!, $filter: String) {\n\t\tcharacters(page: $page, filter: { name: $filter }) {\n\t\t\tinfo {\n\t\t\t\tcount\n\t\t\t\tpages\n\t\t\t\tnext\n\t\t\t\tprev\n\t\t\t}\n\t\t\tresults {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tstatus\n\t\t\t\tspecies\n\t\t\t\timage\n\t\t\t}\n\t\t}\n\t}\n"]))),de="We have an error, please refresh the page.",le=m.a.div(ee||(ee=Object(b.a)(["\n    display: grid;\n    grid-template-columns: repeat(5, minmax(0,1fr));\n    height: 100%;\n"]))),pe=m.a.div(te||(te=Object(b.a)(["\n    display: none;\n\n    @media (min-width: 768px) {\n        display: grid;\n        grid-column: span 2/span 2;\n        grid-template-columns: repeat(1, minmax(0,1fr));\n    }\n"]))),je=m.a.div(ae||(ae=Object(b.a)(["\n    width: 100%;\n    height: 100%;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center;\n    filter: var(--blur) var(--darkness);\n    grid-column-start: 1;\n    grid-column-end: span 1;\n    grid-row-start: 1;\n    grid-row-end: 1;\n"])),(function(n){return n.image})),be=m.a.div(ie||(ie=Object(b.a)(["\n    background-color: #000000;\n    color: var(--white);\n    display: grid;\n    gap: 2em;\n    grid-column: span 5/span 5;\n    grid-template-columns: repeat(1, minmax(0,1fr));\n    padding: 3em 4em;\n    overflow: auto;\n    z-index: 10;\n\n    @media (min-width: 768px) {\n        grid-column: span 3/span 3;\n    }\n"])));function me(n){var e=n.card,t=n.onClose,i=Object(o.useQuery)(oe,{variables:{id:e.id}}),r=i.loading,c=i.error,s=i.data;return Object(x.jsx)(Nn,{onClose:t,children:Object(x.jsx)(le,{children:Object(x.jsxs)(a.Fragment,{children:[Object(x.jsxs)(pe,{children:[Object(x.jsx)(je,{image:e.image}),Object(x.jsx)(hn,Object(u.a)({},e))]}),Object(x.jsxs)(be,{children:[s&&Object(x.jsxs)(a.Fragment,{children:[Object(x.jsx)(Tn,{data:s.character,image:e.image}),Object(x.jsx)(re,{title:"Origin",data:s.character.origin}),Object(x.jsx)(re,{title:"Location",data:s.character.location})]}),c&&Object(x.jsx)(En,{title:"Error :/",children:Object(x.jsx)("p",{children:de})}),r&&Object(x.jsx)(En,{title:"Loading..."})]})]})})})}me.displayName="Components/CharacterModal/CharacterModal";var he,ue,ge,xe,Oe=Object(a.memo)(me),fe=m.a.main(he||(he=Object(b.a)(["\n    display: grid;\n    gap: 24px;\n    grid-template-columns: repeat(1, minmax(0,1fr));\n\n    @media (min-width: 640px) {\n        grid-template-columns: repeat(2, minmax(0,1fr));\n    }\n\n    @media (min-width: 768px) {\n        grid-template-columns: repeat(3, minmax(0,1fr));\n    }\n    \n    @media (min-width: 1024px) {\n        grid-template-columns: repeat(4, minmax(0,1fr));\n    }\n"])));function ve(n){var e=Object(a.useState)(null),t=Object(j.a)(e,2),i=t[0],r=t[1],c=n.cards.map((function(n){return Object(x.jsx)(rn,Object(u.a)(Object(u.a)({},n),{},{onClick:function(){return r(n)}}),n.id)})),o=i&&Object(x.jsx)(Oe,{onClose:function(){return r(null)},card:i});return Object(x.jsxs)(fe,{children:[o,c]})}ve.displayName="Components/CharactersGrid/CharactersGrid";var ye=m.a.span(ue||(ue=Object(b.a)(["\n    color: var(--white);\n    cursor: pointer;\n    font-size: 20px;\n    line-height: 25px;\n    text-align: center;\n"]))),we=Object(m.a)(ye)(ge||(ge=Object(b.a)(["\n    color: var(--yellow);\n"]))),Ce=Object(m.a)(ye)(xe||(xe=Object(b.a)(["\n    color: #3E3E3E;\n    cursor: not-allowed;\n"])));function Ae(n){var e=n.disabled,t=n.item,a=n.text,i=n.current,r=n.onChange,c=function(n,e){return n?we:e?Ce:ye}(i,e),o=a||t,s=e?null:function(){return r(t)};return Object(x.jsx)(c,{onClick:s,children:o})}Ae.displayName="Components/Generic/Pagination/PageItem";var ke,Ne=Object(a.memo)(Ae),Se=m.a.div(ke||(ke=Object(b.a)(["\n    display: grid;\n    gap: 48px;\n    grid-gap: 48px;\n    grid-template-columns: repeat(",", minmax(0,1fr));\n"])),(function(n){return n.items}));function Me(n){var e=n.className,t=n.next,a=n.onChange,i=n.page,r=n.pages,c=n.prev,o=function(n,e){var t=Math.min(n,5),a=e-Math.floor(t/2);return a=Math.max(a,1),a=Math.min(a,1+n-t),Array.from({length:t},(function(n,e){return a+e}))}(r,i).map((function(n){return Object(x.jsx)(Ne,{current:n===i,item:n,onChange:a},n)}));return Object(x.jsxs)(Se,{items:o.length+2,className:e,children:[Object(x.jsx)(Ne,{disabled:null===c,item:c,onChange:a,text:"<"}),o,Object(x.jsx)(Ne,{disabled:null===t,item:t,onChange:a,text:">"})]})}Me.displayName="Components/Generic/Pagination/Pagination";var Ge=Object(a.memo)(Me),ze=t.p+"static/media/default-card.9efe1cf5.png";function Be(){return Object(x.jsx)(On,{children:Object(x.jsx)(W,{image:ze,width:200,height:200})})}Be.displayName="Components/Generic/Loading/Loading";var Fe,Ee,He=Object(m.a)(Ge)(Fe||(Fe=Object(b.a)(["\n\tpadding: 30px;\n"])));function Ie(n){var e=n.filter,t=n.page,i=n.setPage,r=Object(o.useQuery)(se,{variables:{page:t,filter:e}}),c=r.data,s=r.error;return r.loading?Object(x.jsx)(Be,{}):s?"GraphQL error: 404: Not Found"===s.message?"No characters found :(":de:c&&Object(x.jsxs)(a.Fragment,{children:[Object(x.jsx)(ve,{cards:c.characters.results}),Object(x.jsx)(He,Object(u.a)(Object(u.a)({},c.characters.info),{},{onChange:i,page:t}))]})}Ie.displayName="ConnectedApp";var Le=m.a.div(Ee||(Ee=Object(b.a)(["\n\tcolor: var(--white);\n\tdisplay: flex;\n    align-items: center;\n\tflex-direction: column;\n\tjustify-content: center;\n"])));function De(){var n=Object(a.useState)(null),e=Object(j.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)(1),c=Object(j.a)(r,2),o=c[0],s=c[1];return Object(x.jsxs)(Le,{children:[Object(x.jsx)(P,{onSearch:function(n){i(n),s(1)}}),null!==t&&Object(x.jsx)(Ie,{filter:t,page:o,setPage:s})]})}De.displayName="Container/AppData";t(86);function Pe(){return Object(x.jsx)(o.ApolloProvider,{client:d(),children:Object(x.jsx)(De,{})})}Pe.displayName="App",c.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(Pe,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.6440b749.chunk.js.map