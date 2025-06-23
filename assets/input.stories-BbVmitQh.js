import{r as c,j as l}from"./iframe-CIcHpFRg.js";import{u as Y,a as ee}from"./utils-B4WtjYdU.js";/**
 * @license lucide-react v0.521.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ae=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,s)=>s?s.toUpperCase():a.toLowerCase()),b=r=>{const e=ae(r);return e.charAt(0).toUpperCase()+e.slice(1)},K=(...r)=>r.filter((e,a,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===a).join(" ").trim(),se=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.521.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var te={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.521.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=c.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:o="",children:t,iconNode:i,...n},J)=>c.createElement("svg",{ref:J,...te,width:e,height:e,stroke:r,strokeWidth:s?Number(a)*24/Number(e):a,className:K("lucide",o),...!t&&!se(n)&&{"aria-hidden":"true"},...n},[...i.map(([Q,X])=>c.createElement(Q,X)),...Array.isArray(t)?t:[t]]));/**
 * @license lucide-react v0.521.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=(r,e)=>{const a=c.forwardRef(({className:s,...o},t)=>c.createElement(oe,{ref:t,iconNode:e,className:K(`lucide-${re(b(r))}`,`lucide-${r}`,s),...o}));return a.displayName=b(r),a};/**
 * @license lucide-react v0.521.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ce=G("eye-off",ne);/**
 * @license lucide-react v0.521.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],le=G("eye",ie);function H({className:r,type:e="text",...a}){const{eyeIconColor:s,eyeIconSize:o,showEyeIcon:t}=a,{isVisible:i,toggleVisibility:n}=Y();return l.jsxs("div",{className:ee("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input inline-flex justify-between h-9 min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",r),children:[l.jsx("input",{type:t?i?"text":"password":e,"data-slot":"input",...a,className:"w-full grow focus:outline-0"}),t&&(i?l.jsx(le,{color:s,onClick:n,size:o}):l.jsx(ce,{onClick:n,color:s,size:o}))]})}H.__docgenInfo={description:"",methods:[],displayName:"Input",props:{eyeIconColor:{required:!1,tsType:{name:"string"},description:""},eyeIconSize:{required:!1,tsType:{name:"number"},description:""},showEyeIcon:{required:!1,tsType:{name:"boolean"},description:""},type:{defaultValue:{value:'"text"',computed:!1},required:!1}}};const ue={title:"Atoms/Input",component:H,argTypes:{eyeIconSize:{defaultValue:20},type:{options:["text","email","password","number","search","url","tel","file","date","time"],defaultValue:"text",control:{type:"select"}}},args:{style:{width:"400px"}},tags:["autodocs"]},d={args:{type:"text",placeholder:"Enter your name"}},p={args:{type:"email",placeholder:"Enter your email"}},u={args:{type:"password",placeholder:"Enter your password"}},m={args:{type:"number",placeholder:"Enter a number",min:0,max:100}},y={args:{type:"file"}},g={args:{type:"search",placeholder:"Search..."}},h={args:{type:"text",placeholder:"This is disabled",disabled:!0}},f={args:{type:"text",value:"Read-only text",readOnly:!0}},x={args:{type:"password",placeholder:"Enter your password",showEyeIcon:!0}};var w,E,v;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "Enter your name"
  }
}`,...(v=(E=d.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var I,C,S;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "Enter your email"
  }
}`,...(S=(C=p.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var k,j,_;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter your password"
  }
}`,...(_=(j=u.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var A,N,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: "number",
    placeholder: "Enter a number",
    min: 0,
    max: 100
  }
}`,...(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var R,T,P;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: "file"
  }
}`,...(P=(T=y.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var z,L,V;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: "search",
    placeholder: "Search..."
  }
}`,...(V=(L=g.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var $,q,B;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "This is disabled",
    disabled: true
  }
}`,...(B=(q=h.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var M,W,D;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: "text",
    value: "Read-only text",
    readOnly: true
  }
}`,...(D=(W=f.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var F,U,Z;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter your password",
    showEyeIcon: true
  }
}`,...(Z=(U=x.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};const me=["Basic","Email","Password","NumberInput","File","Search","Disabled","ReadOnly","PasswordWithIcon"];export{d as Basic,h as Disabled,p as Email,y as File,m as NumberInput,u as Password,x as PasswordWithIcon,f as ReadOnly,g as Search,me as __namedExportsOrder,ue as default};
