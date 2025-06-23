import{j as e}from"./iframe-7INQHGgC.js";import{u as J,a as K}from"./utils-Cqcfk0e8.js";import{c as L}from"./createLucideIcon-C20uTYjC.js";/**
 * @license lucide-react v0.521.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],U=L("eye-off",Q);/**
 * @license lucide-react v0.521.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Y=L("eye",X);function $({className:G,type:H="text",...l}){const{eyeIconColor:p,eyeIconSize:u,showEyeIcon:m}=l,{isVisible:y,toggleVisibility:g}=J();return e.jsxs("div",{className:K("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input inline-flex justify-between h-9 min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",G),children:[e.jsx("input",{type:m?y?"text":"password":H,"data-slot":"input",...l,className:"w-full grow focus:outline-0"}),m&&(y?e.jsx(Y,{color:p,onClick:g,size:u}):e.jsx(U,{onClick:g,color:p,size:u}))]})}$.__docgenInfo={description:"",methods:[],displayName:"Input",props:{eyeIconColor:{required:!1,tsType:{name:"string"},description:""},eyeIconSize:{required:!1,tsType:{name:"number"},description:""},showEyeIcon:{required:!1,tsType:{name:"boolean"},description:""},type:{defaultValue:{value:'"text"',computed:!1},required:!1}}};const ae={title:"Atoms/Input",component:$,argTypes:{eyeIconSize:{defaultValue:20},type:{options:["text","email","password","number","search","url","tel","file","date","time"],defaultValue:"text",control:{type:"select"}}},args:{style:{width:"400px"}},tags:["autodocs"]},r={args:{type:"text",placeholder:"Enter your name"}},a={args:{type:"email",placeholder:"Enter your email"}},s={args:{type:"password",placeholder:"Enter your password"}},o={args:{type:"number",placeholder:"Enter a number",min:0,max:100}},t={args:{type:"file"}},n={args:{type:"search",placeholder:"Search..."}},c={args:{type:"text",placeholder:"This is disabled",disabled:!0}},i={args:{type:"text",value:"Read-only text",readOnly:!0}},d={args:{type:"password",placeholder:"Enter your password",showEyeIcon:!0}};var h,f,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "Enter your name"
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,w,E;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "Enter your email"
  }
}`,...(E=(w=a.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var I,S,v;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter your password"
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var k,j,_;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: "number",
    placeholder: "Enter a number",
    min: 0,
    max: 100
  }
}`,...(_=(j=o.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var N,T,z;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: "file"
  }
}`,...(z=(T=t.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var O,R,V;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: "search",
    placeholder: "Search..."
  }
}`,...(V=(R=n.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var q,C,M;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "This is disabled",
    disabled: true
  }
}`,...(M=(C=c.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var P,B,D;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: "text",
    value: "Read-only text",
    readOnly: true
  }
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var F,W,A;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter your password",
    showEyeIcon: true
  }
}`,...(A=(W=d.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const se=["Basic","Email","Password","NumberInput","File","Search","Disabled","ReadOnly","PasswordWithIcon"];export{r as Basic,c as Disabled,a as Email,t as File,o as NumberInput,s as Password,d as PasswordWithIcon,i as ReadOnly,n as Search,se as __namedExportsOrder,ae as default};
