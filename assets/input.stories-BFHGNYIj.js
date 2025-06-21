import{j as V}from"./iframe-CRtg0qyJ.js";import{a as q}from"./utils-B3HXpwuO.js";function B({className:D,type:F="text",...P}){return V.jsx("input",{type:F,"data-slot":"input",className:q("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",D),...P})}B.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{defaultValue:{value:'"text"',computed:!1},required:!1}}};const C={title:"Atoms/Input",component:B,argTypes:{type:{options:["text","email","password","number","search","url","tel","file","date","time"],defaultValue:"text",control:{type:"select"}}},args:{style:{width:"400px"}},tags:["autodocs"]},e={args:{type:"text",placeholder:"Enter your name"}},r={args:{type:"email",placeholder:"Enter your email"}},a={args:{type:"password",placeholder:"Enter your password"}},s={args:{type:"number",placeholder:"Enter a number",min:0,max:100}},t={args:{type:"file"}},o={args:{type:"search",placeholder:"Search..."}},n={args:{type:"text",placeholder:"This is disabled",disabled:!0}},d={args:{type:"text",value:"Read-only text",readOnly:!0}};var i,l,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "Enter your name"
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "Enter your email"
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,y,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter your password"
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var b,f,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: "number",
    placeholder: "Enter a number",
    min: 0,
    max: 100
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,w,E;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: "file"
  }
}`,...(E=(w=t.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var S,I,O;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: "search",
    placeholder: "Search..."
  }
}`,...(O=(I=o.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var R,N,_;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "This is disabled",
    disabled: true
  }
}`,...(_=(N=n.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var j,T,k;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: "text",
    value: "Read-only text",
    readOnly: true
  }
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const G=["Basic","Email","Password","NumberInput","File","Search","Disabled","ReadOnly"];export{e as Basic,n as Disabled,r as Email,t as File,s as NumberInput,a as Password,d as ReadOnly,o as Search,G as __namedExportsOrder,C as default};
