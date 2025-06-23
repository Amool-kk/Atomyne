import{j as ae}from"./iframe-7INQHGgC.js";import{S as te}from"./index-DhqRw9CH.js";import{c as se,a as ne}from"./utils-Cqcfk0e8.js";const z=a=>typeof a=="boolean"?`${a}`:a===0?"0":a,C=se,oe=(a,t)=>e=>{var i;if((t==null?void 0:t.variants)==null)return C(a,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:d,defaultVariants:s}=t,y=Object.keys(d).map(r=>{const n=e==null?void 0:e[r],c=s==null?void 0:s[r];if(n===null)return null;const o=z(n)||z(c);return d[r][o]}),k=e&&Object.entries(e).reduce((r,n)=>{let[c,o]=n;return o===void 0||(r[c]=o),r},{}),Z=t==null||(i=t.compoundVariants)===null||i===void 0?void 0:i.reduce((r,n)=>{let{class:c,className:o,...ee}=n;return Object.entries(ee).every(re=>{let[S,x]=re;return Array.isArray(x)?x.includes({...s,...k}[S]):{...s,...k}[S]===x})?[...r,c,o]:r},[]);return C(a,y,Z,e==null?void 0:e.class,e==null?void 0:e.className)},ie=oe("inline-flex hover:cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/85 transition-colors duration-300 ease-in-out",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/70 transition-colors duration-300 ease-in-out focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground transition-colors duration-300 ease-in-out dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/60 transition-colors duration-300 ease-in-out",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 transition-colors duration-300 ease-in-out",link:"text-primary underline-offset-4 hover:underline transition-colors duration-300 ease-in-out",animated:"hover:scale-105 bg-primary text-primary-foreground shadow-xs hover:bg-primary/85 transition-colors duration-300 ease-in-out relative inline-block overflow-hidden z-[1] transition-transform duration-200 ease-in-out after:content-[''] after:absolute after:inset-0 after:scale-x-0 after:origin-right after:bg-[var(--animatedBg)] after:-z-10 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 hover:after:origin-left"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function Y({className:a,variant:t,size:e,asChild:i=!1,animatedBgColor:d,...s}){const y=i?te:"button";return ae.jsx(y,{"data-slot":"button",style:d?{"--animatedBg":d}:{},className:ne(ie({variant:t,size:e,className:a})),...s})}Y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},animatedBgColor:{required:!1,tsType:{name:"string"},description:""}}};const le={title:"Atoms/Button",component:Y,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","destructive","outline","secondary","ghost","link","animated"]},size:{control:{type:"select"},options:["default","sm","lg","icon"]},asChild:{control:{type:"boolean"}},className:{control:!1}},args:{children:"Button",variant:"default",size:"default",asChild:!1}},u={},l={args:{variant:"destructive"}},m={args:{variant:"outline"}},v={args:{variant:"secondary"}},g={args:{variant:"ghost"}},p={args:{variant:"link"}},f={args:{size:"sm"}},h={args:{size:"lg"}},b={args:{variant:"animated",size:"lg",animatedBgColor:"#029cfd"}};var B,V,w;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:"{}",...(w=(V=u.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var N,_,j;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: "destructive"
  }
}`,...(j=(_=l.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var O,A,D;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var L,T,q;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(q=(T=v.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var E,G,P;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...(P=(G=g.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var I,K,R;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "link"
  }
}`,...(R=(K=p.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var U,W,$;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...($=(W=f.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var F,H,J;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var M,Q,X;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: "animated",
    size: "lg",
    animatedBgColor: "#029cfd"
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const me=["Default","Destructive","Outline","Secondary","Ghost","Link","Small","Large","AnimatedButton"];export{b as AnimatedButton,u as Default,l as Destructive,g as Ghost,h as Large,p as Link,m as Outline,v as Secondary,f as Small,me as __namedExportsOrder,le as default};
