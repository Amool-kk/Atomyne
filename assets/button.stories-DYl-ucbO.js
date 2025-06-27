import{j as P}from"./iframe-DqFUd-bx.js";import{S as Q}from"./index-DOWreJZ0.js";import{c as U}from"./index-D6u--TKO.js";import{c as W}from"./utils-BTPpdeR8.js";const X=U("inline-flex hover:cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/85 transition-colors duration-300 ease-in-out",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/70 transition-colors duration-300 ease-in-out focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground transition-colors duration-300 ease-in-out dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/60 transition-colors duration-300 ease-in-out",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 transition-colors duration-300 ease-in-out",link:"text-primary underline-offset-4 hover:underline transition-colors duration-300 ease-in-out",animated:"hover:scale-105 bg-primary text-primary-foreground shadow-xs hover:bg-primary/85 transition-colors duration-300 ease-in-out relative inline-block overflow-hidden z-[1] transition-transform duration-200 ease-in-out after:content-[''] after:absolute after:inset-0 after:scale-x-0 after:origin-right after:bg-[var(--animatedBg)] after:-z-10 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 hover:after:origin-left"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function G({className:I,variant:R,size:F,asChild:H=!1,animatedBgColor:J,buttonColor:d,textColor:u,...K}){const M=H?Q:"button";return P.jsx(M,{"data-slot":"button",style:{"--animatedBg":J,backgroundColor:d||"",color:u||""},className:W(X({variant:R,size:F,className:I})),...K})}G.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},animatedBgColor:{required:!1,tsType:{name:"string"},description:""},buttonColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""}}};const re={title:"Atoms/Button",component:G,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","destructive","outline","secondary","ghost","link","animated"]},size:{control:{type:"select"},options:["default","sm","lg","icon"]},asChild:{control:{type:"boolean"}},className:{control:!1}},args:{children:"Button",variant:"default",size:"default",asChild:!1}},e={},r={args:{variant:"destructive"}},a={args:{variant:"outline"}},t={args:{variant:"secondary"}},s={args:{variant:"ghost"}},o={args:{variant:"link"}},n={args:{size:"sm"}},i={args:{size:"lg"}},c={args:{variant:"animated",size:"lg",animatedBgColor:"#029cfd"}};var l,m,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,v,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "destructive"
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,b,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,k,z;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(z=(k=t.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var S,B,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...(w=(B=s.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var C,_,T;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "link"
  }
}`,...(T=(_=o.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var j,q,D;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...(D=(q=n.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var L,A,N;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...(N=(A=i.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var O,V,E;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "animated",
    size: "lg",
    animatedBgColor: "#029cfd"
  }
}`,...(E=(V=c.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const ae=["Default","Destructive","Outline","Secondary","Ghost","Link","Small","Large","AnimatedButton"];export{c as AnimatedButton,e as Default,r as Destructive,s as Ghost,i as Large,o as Link,a as Outline,t as Secondary,n as Small,ae as __namedExportsOrder,re as default};
