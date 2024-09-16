import{b as J,r as i,g as C,j as s,P as m,e as p,f as N,G as K,o as U,D as Y,H as Z,I as Q,J as X,a6 as ee,O as te,u as oe,d as R,l as x}from"./main-CRz_Efm5.js";var y="Dialog",[P,Ce]=J(y),[ae,d]=P(y),O=e=>{const{__scopeDialog:t,children:o,open:n,defaultOpen:r,onOpenChange:a,modal:l=!0}=e,c=i.useRef(null),u=i.useRef(null),[g=!1,v]=oe({prop:n,defaultProp:r,onChange:a});return s.jsx(ae,{scope:t,triggerRef:c,contentRef:u,contentId:R(),titleId:R(),descriptionId:R(),open:g,onOpenChange:v,onOpenToggle:i.useCallback(()=>v(q=>!q),[v]),modal:l,children:o})};O.displayName=y;var I="DialogTrigger",b=i.forwardRef((e,t)=>{const{__scopeDialog:o,...n}=e,r=d(I,o),a=C(t,r.triggerRef);return s.jsx(m.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":E(r.open),...n,ref:a,onClick:p(e.onClick,r.onOpenToggle)})});b.displayName=I;var h="DialogPortal",[ne,j]=P(h,{forceMount:void 0}),T=e=>{const{__scopeDialog:t,forceMount:o,children:n,container:r}=e,a=d(h,t);return s.jsx(ne,{scope:t,forceMount:o,children:i.Children.map(n,l=>s.jsx(N,{present:o||a.open,children:s.jsx(te,{asChild:!0,container:r,children:l})}))})};T.displayName=h;var D="DialogOverlay",A=i.forwardRef((e,t)=>{const o=j(D,e.__scopeDialog),{forceMount:n=o.forceMount,...r}=e,a=d(D,e.__scopeDialog);return a.modal?s.jsx(N,{present:n||a.open,children:s.jsx(re,{...r,ref:t})}):null});A.displayName=D;var re=i.forwardRef((e,t)=>{const{__scopeDialog:o,...n}=e,r=d(D,o);return s.jsx(K,{as:U,allowPinchZoom:!0,shards:[r.contentRef],children:s.jsx(m.div,{"data-state":E(r.open),...n,ref:t,style:{pointerEvents:"auto",...n.style}})})}),f="DialogContent",w=i.forwardRef((e,t)=>{const o=j(f,e.__scopeDialog),{forceMount:n=o.forceMount,...r}=e,a=d(f,e.__scopeDialog);return s.jsx(N,{present:n||a.open,children:a.modal?s.jsx(se,{...r,ref:t}):s.jsx(ie,{...r,ref:t})})});w.displayName=f;var se=i.forwardRef((e,t)=>{const o=d(f,e.__scopeDialog),n=i.useRef(null),r=C(t,o.contentRef,n);return i.useEffect(()=>{const a=n.current;if(a)return Y(a)},[]),s.jsx(M,{...e,ref:r,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:p(e.onCloseAutoFocus,a=>{var l;a.preventDefault(),(l=o.triggerRef.current)==null||l.focus()}),onPointerDownOutside:p(e.onPointerDownOutside,a=>{const l=a.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0;(l.button===2||c)&&a.preventDefault()}),onFocusOutside:p(e.onFocusOutside,a=>a.preventDefault())})}),ie=i.forwardRef((e,t)=>{const o=d(f,e.__scopeDialog),n=i.useRef(!1),r=i.useRef(!1);return s.jsx(M,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var l,c;(l=e.onCloseAutoFocus)==null||l.call(e,a),a.defaultPrevented||(n.current||(c=o.triggerRef.current)==null||c.focus(),a.preventDefault()),n.current=!1,r.current=!1},onInteractOutside:a=>{var u,g;(u=e.onInteractOutside)==null||u.call(e,a),a.defaultPrevented||(n.current=!0,a.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const l=a.target;((g=o.triggerRef.current)==null?void 0:g.contains(l))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&r.current&&a.preventDefault()}})}),M=i.forwardRef((e,t)=>{const{__scopeDialog:o,trapFocus:n,onOpenAutoFocus:r,onCloseAutoFocus:a,...l}=e,c=d(f,o),u=i.useRef(null),g=C(t,u);return Z(),s.jsxs(s.Fragment,{children:[s.jsx(Q,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:r,onUnmountAutoFocus:a,children:s.jsx(X,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":E(c.open),...l,ref:g,onDismiss:()=>c.onOpenChange(!1)})}),s.jsxs(s.Fragment,{children:[s.jsx(ce,{titleId:c.titleId}),s.jsx(ue,{contentRef:u,descriptionId:c.descriptionId})]})]})}),_="DialogTitle",F=i.forwardRef((e,t)=>{const{__scopeDialog:o,...n}=e,r=d(_,o);return s.jsx(m.h2,{id:r.titleId,...n,ref:t})});F.displayName=_;var S="DialogDescription",$=i.forwardRef((e,t)=>{const{__scopeDialog:o,...n}=e,r=d(S,o);return s.jsx(m.p,{id:r.descriptionId,...n,ref:t})});$.displayName=S;var W="DialogClose",le=i.forwardRef((e,t)=>{const{__scopeDialog:o,...n}=e,r=d(W,o);return s.jsx(m.button,{type:"button",...n,ref:t,onClick:p(e.onClick,()=>r.onOpenChange(!1))})});le.displayName=W;function E(e){return e?"open":"closed"}var k="DialogTitleWarning",[Ne,G]=ee(k,{contentName:f,titleName:_,docsSlug:"dialog"}),ce=({titleId:e})=>{const t=G(k),o=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(o))},[o,e]),null},de="DialogDescriptionWarning",ue=({contentRef:e,descriptionId:t})=>{const n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${G(de).contentName}}.`;return i.useEffect(()=>{var a;const r=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&r&&(document.getElementById(t)||console.warn(n))},[n,e,t]),null},fe=O,ge=b,pe=T,L=A,z=w,B=F,H=$;const ye=fe,he=ge,me=pe,V=i.forwardRef(({className:e,...t},o)=>s.jsx(L,{ref:o,className:x("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));V.displayName=L.displayName;const De=i.forwardRef(({className:e,children:t,...o},n)=>s.jsxs(me,{children:[s.jsx(V,{}),s.jsx(z,{ref:n,className:x("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...o,children:t})]}));De.displayName=z.displayName;const xe=i.forwardRef(({className:e,...t},o)=>s.jsx(B,{ref:o,className:x("text-lg font-semibold leading-none tracking-tight",e),...t}));xe.displayName=B.displayName;const ve=i.forwardRef(({className:e,...t},o)=>s.jsx(H,{ref:o,className:x("text-sm text-muted-foreground",e),...t}));ve.displayName=H.displayName;export{ye as D,he as a,De as b};
