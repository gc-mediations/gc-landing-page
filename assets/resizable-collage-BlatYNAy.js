import{r as ve,u as rn,j as C,c as he,Y as $n,$ as on,Z as Dn,U as Ke}from"./index-Dm11sv-d.js";import{D as an,a as ln,b as sn}from"./dialog-BNLcPmZC.js";const pt=({images:e,columns:n=3})=>{const[t,r]=ve.useState(null),i=rn(),o=ve.useMemo(()=>{const a=[];let l=[],s=0;return e.forEach((f,h)=>{const d=Math.floor(Math.random()*2)+1,c=Math.random()*.5+.75;s+d>n&&(a.push(l),l=[],s=0),l.push({image:f,width:d,aspectRatio:c}),s+=d,h===e.length-1&&l.length>0&&a.push(l)}),a},[e,n]);return C.jsx("div",{className:"container mx-auto px-8 pb-8 pt-2",children:o.map((a,l)=>C.jsx("div",{className:"flex mb-4",children:a.map(({image:s,width:f,aspectRatio:h},d)=>C.jsxs(an,{children:[C.jsx(ln,{asChild:!0,children:C.jsx("div",{className:he("cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mr-4 last:mr-0",`w-${f}/${n}`),style:{aspectRatio:h},children:C.jsx("img",{src:s,alt:`Gallery ${$n()}`,className:"w-full h-full object-cover transition-transform duration-300 hover:scale-110",onClick:()=>r(s)})})}),C.jsx(sn,{className:he(i?"max-w-sm":"max-w-3xl"),children:C.jsx("div",{className:"relative",style:{aspectRatio:h},children:C.jsx("img",{src:t||"",alt:"Selected",className:"w-full h-full object-contain rounded-lg"})})})]},d))},l))})},{createElement:me,createContext:kn,createRef:ht,forwardRef:cn,useCallback:H,useContext:un,useEffect:oe,useImperativeHandle:dn,useLayoutEffect:_n,useMemo:jn,useRef:G,useState:fe}=on,Ue=on[`useId${Math.random()}`.slice(0,5)],Hn=_n,Ie=kn(null);Ie.displayName="PanelGroupContext";const ie=Hn,Gn=typeof Ue=="function"?Ue:()=>null;let Bn=0;function Ge(e=null){const n=Gn(),t=G(e||n||null);return t.current===null&&(t.current=""+Bn++),e??t.current}function fn({children:e,className:n="",collapsedSize:t,collapsible:r,defaultSize:i,forwardedRef:o,id:a,maxSize:l,minSize:s,onCollapse:f,onExpand:h,onResize:d,order:c,style:m,tagName:p="div",...E}){const P=un(Ie);if(P===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:b,expandPanel:A,getPanelSize:M,getPanelStyle:$,groupId:U,isPanelCollapsed:L,reevaluatePanelConstraints:g,registerPanel:B,resizePanel:T,unregisterPanel:Q}=P,W=Ge(a),N=G({callbacks:{onCollapse:f,onExpand:h,onResize:d},constraints:{collapsedSize:t,collapsible:r,defaultSize:i,maxSize:l,minSize:s},id:W,idIsFromProps:a!==void 0,order:c});G({didLogMissingDefaultSizeWarning:!1}),ie(()=>{const{callbacks:k,constraints:_}=N.current,j={..._};N.current.id=W,N.current.idIsFromProps=a!==void 0,N.current.order=c,k.onCollapse=f,k.onExpand=h,k.onResize=d,_.collapsedSize=t,_.collapsible=r,_.defaultSize=i,_.maxSize=l,_.minSize=s,(j.collapsedSize!==_.collapsedSize||j.collapsible!==_.collapsible||j.maxSize!==_.maxSize||j.minSize!==_.minSize)&&g(N.current,j)}),ie(()=>{const k=N.current;return B(k),()=>{Q(k)}},[c,W,B,Q]),dn(o,()=>({collapse:()=>{b(N.current)},expand:k=>{A(N.current,k)},getId(){return W},getSize(){return M(N.current)},isCollapsed(){return L(N.current)},isExpanded(){return!L(N.current)},resize:k=>{T(N.current,k)}}),[b,A,M,L,W,T]);const Y=$(N.current,i);return me(p,{...E,children:e,className:n,id:a,style:{...Y,...m},"data-panel":"","data-panel-collapsible":r||void 0,"data-panel-group-id":U,"data-panel-id":W,"data-panel-size":parseFloat(""+Y.flexGrow).toFixed(1)})}const pn=cn((e,n)=>me(fn,{...e,forwardedRef:n}));fn.displayName="Panel";pn.displayName="forwardRef(Panel)";let He=null,re=null;function Fn(e,n){if(n){const t=(n&yn)!==0,r=(n&zn)!==0,i=(n&vn)!==0,o=(n&Sn)!==0;if(t)return i?"se-resize":o?"ne-resize":"e-resize";if(r)return i?"sw-resize":o?"nw-resize":"w-resize";if(i)return"s-resize";if(o)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function Tn(){re!==null&&(document.head.removeChild(re),He=null,re=null)}function _e(e,n){const t=Fn(e,n);He!==t&&(He=t,re===null&&(re=document.createElement("style"),document.head.appendChild(re)),re.innerHTML=`*{cursor: ${t}!important;}`)}function hn(e){return e.type==="keydown"}function mn(e){return e.type.startsWith("pointer")}function gn(e){return e.type.startsWith("mouse")}function Me(e){if(mn(e)){if(e.isPrimary)return{x:e.clientX,y:e.clientY}}else if(gn(e))return{x:e.clientX,y:e.clientY};return{x:1/0,y:1/0}}function Wn(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function Kn(e,n,t){return e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y}function Un(e,n){if(e===n)throw new Error("Cannot compare node with itself");const t={a:qe(e),b:qe(n)};let r;for(;t.a.at(-1)===t.b.at(-1);)e=t.a.pop(),n=t.b.pop(),r=e;v(r,"Stacking order can only be calculated for elements with a common ancestor");const i={a:Ve(Oe(t.a)),b:Ve(Oe(t.b))};if(i.a===i.b){const o=r.childNodes,a={a:t.a.at(-1),b:t.b.at(-1)};let l=o.length;for(;l--;){const s=o[l];if(s===a.a)return 1;if(s===a.b)return-1}}return Math.sign(i.a-i.b)}const On=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function Vn(e){var n;const t=getComputedStyle((n=xn(e))!==null&&n!==void 0?n:e).display;return t==="flex"||t==="inline-flex"}function qn(e){const n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&(n.position!=="static"||Vn(e))||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||On.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function Oe(e){let n=e.length;for(;n--;){const t=e[n];if(v(t,"Missing node"),qn(t))return t}return null}function Ve(e){return e&&Number(getComputedStyle(e).zIndex)||0}function qe(e){const n=[];for(;e;)n.push(e),e=xn(e);return n}function xn(e){const{parentNode:n}=e;return n&&n instanceof ShadowRoot?n.host:n}const yn=1,zn=2,vn=4,Sn=8,Xn=Wn()==="coarse";let q=[],pe=!1,Z=new Map,Ne=new Map;const Se=new Set;function Jn(e,n,t,r,i){var o;const{ownerDocument:a}=n,l={direction:t,element:n,hitAreaMargins:r,setResizeHandlerState:i},s=(o=Z.get(a))!==null&&o!==void 0?o:0;return Z.set(a,s+1),Se.add(l),Le(),function(){var h;Ne.delete(e),Se.delete(l);const d=(h=Z.get(a))!==null&&h!==void 0?h:1;if(Z.set(a,d-1),Le(),d===1&&Z.delete(a),q.includes(l)){const c=q.indexOf(l);c>=0&&q.splice(c,1),Fe(),i("up",!0,null)}}}function Xe(e){const{target:n}=e,{x:t,y:r}=Me(e);pe=!0,Be({target:n,x:t,y:r}),Le(),q.length>0&&(Re("down",e),e.preventDefault(),e.stopPropagation())}function xe(e){const{x:n,y:t}=Me(e);if(pe&&e.buttons===0&&(pe=!1,Re("up",e)),!pe){const{target:r}=e;Be({target:r,x:n,y:t})}Re("move",e),Fe(),q.length>0&&e.preventDefault()}function se(e){const{target:n}=e,{x:t,y:r}=Me(e);Ne.clear(),pe=!1,q.length>0&&e.preventDefault(),Re("up",e),Be({target:n,x:t,y:r}),Fe(),Le()}function Be({target:e,x:n,y:t}){q.splice(0);let r=null;e instanceof HTMLElement&&(r=e),Se.forEach(i=>{const{element:o,hitAreaMargins:a}=i,l=o.getBoundingClientRect(),{bottom:s,left:f,right:h,top:d}=l,c=Xn?a.coarse:a.fine;if(n>=f-c&&n<=h+c&&t>=d-c&&t<=s+c){if(r!==null&&document.contains(r)&&o!==r&&!o.contains(r)&&!r.contains(o)&&Un(r,o)>0){let p=r,E=!1;for(;p&&!p.contains(o);){if(Kn(p.getBoundingClientRect(),l)){E=!0;break}p=p.parentElement}if(E)return}q.push(i)}})}function je(e,n){Ne.set(e,n)}function Fe(){let e=!1,n=!1;q.forEach(r=>{const{direction:i}=r;i==="horizontal"?e=!0:n=!0});let t=0;Ne.forEach(r=>{t|=r}),e&&n?_e("intersection",t):e?_e("horizontal",t):n?_e("vertical",t):Tn()}function Le(){Z.forEach((e,n)=>{const{body:t}=n;t.removeEventListener("contextmenu",se),t.removeEventListener("pointerdown",Xe),t.removeEventListener("pointerleave",xe),t.removeEventListener("pointermove",xe)}),window.removeEventListener("pointerup",se),window.removeEventListener("pointercancel",se),Se.size>0&&(pe?(q.length>0&&Z.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("contextmenu",se),t.addEventListener("pointerleave",xe),t.addEventListener("pointermove",xe))}),window.addEventListener("pointerup",se),window.addEventListener("pointercancel",se)):Z.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("pointerdown",Xe,{capture:!0}),t.addEventListener("pointermove",xe))}))}function Re(e,n){Se.forEach(t=>{const{setResizeHandlerState:r}=t,i=q.includes(t);r(e,i,n)})}function Yn(){const[e,n]=fe(0);return H(()=>n(t=>t+1),[])}function v(e,n){if(!e)throw console.error(n),Error(n)}const Te=10;function ae(e,n,t=Te){return e.toFixed(t)===n.toFixed(t)?0:e>n?1:-1}function J(e,n,t=Te){return ae(e,n,t)===0}function F(e,n,t){return ae(e,n,t)===0}function Zn(e,n,t){if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++){const i=e[r],o=n[r];if(!F(i,o,t))return!1}return!0}function de({panelConstraints:e,panelIndex:n,size:t}){const r=e[n];v(r!=null,`Panel constraints not found for index ${n}`);let{collapsedSize:i=0,collapsible:o,maxSize:a=100,minSize:l=0}=r;if(ae(t,l)<0)if(o){const s=(i+l)/2;ae(t,s)<0?t=i:t=l}else t=l;return t=Math.min(a,t),t=parseFloat(t.toFixed(Te)),t}function ye({delta:e,initialLayout:n,panelConstraints:t,pivotIndices:r,prevLayout:i,trigger:o}){if(F(e,0))return n;const a=[...n],[l,s]=r;v(l!=null,"Invalid first pivot index"),v(s!=null,"Invalid second pivot index");let f=0;if(o==="keyboard"){{const d=e<0?s:l,c=t[d];v(c,`Panel constraints not found for index ${d}`);const{collapsedSize:m=0,collapsible:p,minSize:E=0}=c;if(p){const P=n[d];if(v(P!=null,`Previous layout not found for panel index ${d}`),F(P,m)){const b=E-P;ae(b,Math.abs(e))>0&&(e=e<0?0-b:b)}}}{const d=e<0?l:s,c=t[d];v(c,`No panel constraints found for index ${d}`);const{collapsedSize:m=0,collapsible:p,minSize:E=0}=c;if(p){const P=n[d];if(v(P!=null,`Previous layout not found for panel index ${d}`),F(P,E)){const b=P-m;ae(b,Math.abs(e))>0&&(e=e<0?0-b:b)}}}}{const d=e<0?1:-1;let c=e<0?s:l,m=0;for(;;){const E=n[c];v(E!=null,`Previous layout not found for panel index ${c}`);const b=de({panelConstraints:t,panelIndex:c,size:100})-E;if(m+=b,c+=d,c<0||c>=t.length)break}const p=Math.min(Math.abs(e),Math.abs(m));e=e<0?0-p:p}{let c=e<0?l:s;for(;c>=0&&c<t.length;){const m=Math.abs(e)-Math.abs(f),p=n[c];v(p!=null,`Previous layout not found for panel index ${c}`);const E=p-m,P=de({panelConstraints:t,panelIndex:c,size:E});if(!F(p,P)&&(f+=p-P,a[c]=P,f.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?c--:c++}}if(Zn(i,a))return i;{const d=e<0?s:l,c=n[d];v(c!=null,`Previous layout not found for panel index ${d}`);const m=c+f,p=de({panelConstraints:t,panelIndex:d,size:m});if(a[d]=p,!F(p,m)){let E=m-p,b=e<0?s:l;for(;b>=0&&b<t.length;){const A=a[b];v(A!=null,`Previous layout not found for panel index ${b}`);const M=A+E,$=de({panelConstraints:t,panelIndex:b,size:M});if(F(A,$)||(E-=$-A,a[b]=$),F(E,0))break;e>0?b--:b++}}}const h=a.reduce((d,c)=>c+d,0);return F(h,100)?a:i}function Qn({layout:e,panelsArray:n,pivotIndices:t}){let r=0,i=100,o=0,a=0;const l=t[0];v(l!=null,"No pivot index found"),n.forEach((d,c)=>{const{constraints:m}=d,{maxSize:p=100,minSize:E=0}=m;c===l?(r=E,i=p):(o+=E,a+=p)});const s=Math.min(i,100-o),f=Math.max(r,100-a),h=e[l];return{valueMax:s,valueMin:f,valueNow:h}}function be(e,n=document){return Array.from(n.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function bn(e,n,t=document){const i=be(e,t).findIndex(o=>o.getAttribute("data-panel-resize-handle-id")===n);return i??null}function wn(e,n,t){const r=bn(e,n,t);return r!=null?[r,r+1]:[-1,-1]}function Pn(e,n=document){var t;if(n instanceof HTMLElement&&(n==null||(t=n.dataset)===null||t===void 0?void 0:t.panelGroupId)==e)return n;const r=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return r||null}function Ae(e,n=document){const t=n.querySelector(`[data-panel-resize-handle-id="${e}"]`);return t||null}function et(e,n,t,r=document){var i,o,a,l;const s=Ae(n,r),f=be(e,r),h=s?f.indexOf(s):-1,d=(i=(o=t[h])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:null,c=(a=(l=t[h+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[d,c]}function nt({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:r,panelDataArray:i,panelGroupElement:o,setLayout:a}){G({didWarnAboutMissingResizeHandle:!1}),ie(()=>{if(!o)return;const l=be(t,o);for(let s=0;s<i.length-1;s++){const{valueMax:f,valueMin:h,valueNow:d}=Qn({layout:r,panelsArray:i,pivotIndices:[s,s+1]}),c=l[s];if(c!=null){const m=i[s];v(m,`No panel data found for index "${s}"`),c.setAttribute("aria-controls",m.id),c.setAttribute("aria-valuemax",""+Math.round(f)),c.setAttribute("aria-valuemin",""+Math.round(h)),c.setAttribute("aria-valuenow",d!=null?""+Math.round(d):"")}}return()=>{l.forEach((s,f)=>{s.removeAttribute("aria-controls"),s.removeAttribute("aria-valuemax"),s.removeAttribute("aria-valuemin"),s.removeAttribute("aria-valuenow")})}},[t,r,i,o]),oe(()=>{if(!o)return;const l=n.current;v(l,"Eager values not found");const{panelDataArray:s}=l,f=Pn(t,o);v(f!=null,`No group found for id "${t}"`);const h=be(t,o);v(h,`No resize handles found for group id "${t}"`);const d=h.map(c=>{const m=c.getAttribute("data-panel-resize-handle-id");v(m,"Resize handle element has no handle id attribute");const[p,E]=et(t,m,s,o);if(p==null||E==null)return()=>{};const P=b=>{if(!b.defaultPrevented)switch(b.key){case"Enter":{b.preventDefault();const A=s.findIndex(M=>M.id===p);if(A>=0){const M=s[A];v(M,`No panel data found for index ${A}`);const $=r[A],{collapsedSize:U=0,collapsible:L,minSize:g=0}=M.constraints;if($!=null&&L){const B=ye({delta:F($,U)?g-U:U-$,initialLayout:r,panelConstraints:s.map(T=>T.constraints),pivotIndices:wn(t,m,o),prevLayout:r,trigger:"keyboard"});r!==B&&a(B)}}break}}};return c.addEventListener("keydown",P),()=>{c.removeEventListener("keydown",P)}});return()=>{d.forEach(c=>c())}},[o,e,n,t,r,i,a])}function Je(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function En(e,n){const t=e==="horizontal",{x:r,y:i}=Me(n);return t?r:i}function tt(e,n,t,r,i){const o=t==="horizontal",a=Ae(n,i);v(a,`No resize handle element found for id "${n}"`);const l=a.getAttribute("data-panel-group-id");v(l,"Resize handle element has no group id attribute");let{initialCursorPosition:s}=r;const f=En(t,e),h=Pn(l,i);v(h,`No group element found for id "${l}"`);const d=h.getBoundingClientRect(),c=o?d.width:d.height;return(f-s)/c*100}function rt(e,n,t,r,i,o){if(hn(e)){const a=t==="horizontal";let l=0;e.shiftKey?l=100:i!=null?l=i:l=10;let s=0;switch(e.key){case"ArrowDown":s=a?0:l;break;case"ArrowLeft":s=a?-l:0;break;case"ArrowRight":s=a?l:0;break;case"ArrowUp":s=a?0:-l;break;case"End":s=100;break;case"Home":s=-100;break}return s}else return r==null?0:tt(e,n,t,r,o)}function ot({panelDataArray:e}){const n=Array(e.length),t=e.map(o=>o.constraints);let r=0,i=100;for(let o=0;o<e.length;o++){const a=t[o];v(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;l!=null&&(r++,n[o]=l,i-=l)}for(let o=0;o<e.length;o++){const a=t[o];v(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;if(l!=null)continue;const s=e.length-r,f=i/s;r++,n[o]=f,i-=f}return n}function ce(e,n,t){n.forEach((r,i)=>{const o=e[i];v(o,`Panel data not found for index ${i}`);const{callbacks:a,constraints:l,id:s}=o,{collapsedSize:f=0,collapsible:h}=l,d=t[s];if(d==null||r!==d){t[s]=r;const{onCollapse:c,onExpand:m,onResize:p}=a;p&&p(r,d),h&&(c||m)&&(m&&(d==null||J(d,f))&&!J(r,f)&&m(),c&&(d==null||!J(d,f))&&J(r,f)&&c())}})}function Ce(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function it({defaultSize:e,dragState:n,layout:t,panelData:r,panelIndex:i,precision:o=3}){const a=t[i];let l;return a==null?l=e!=null?e.toPrecision(o):"1":r.length===1?l="1":l=a.toPrecision(o),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function at(e,n=10){let t=null;return(...i)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...i)},n)}}function Ye(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Cn(e){return`react-resizable-panels:${e}`}function Ln(e){return e.map(n=>{const{constraints:t,id:r,idIsFromProps:i,order:o}=n;return i?r:o?`${o}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function Rn(e,n){try{const t=Cn(e),r=n.getItem(t);if(r){const i=JSON.parse(r);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function lt(e,n,t){var r,i;const o=(r=Rn(e,t))!==null&&r!==void 0?r:{},a=Ln(n);return(i=o[a])!==null&&i!==void 0?i:null}function st(e,n,t,r,i){var o;const a=Cn(e),l=Ln(n),s=(o=Rn(e,i))!==null&&o!==void 0?o:{};s[l]={expandToSizes:Object.fromEntries(t.entries()),layout:r};try{i.setItem(a,JSON.stringify(s))}catch(f){console.error(f)}}function Ze({layout:e,panelConstraints:n}){const t=[...e],r=t.reduce((o,a)=>o+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(o=>`${o}%`).join(", ")}`);if(!F(r,100)&&t.length>0)for(let o=0;o<n.length;o++){const a=t[o];v(a!=null,`No layout data found for index ${o}`);const l=100/r*a;t[o]=l}let i=0;for(let o=0;o<n.length;o++){const a=t[o];v(a!=null,`No layout data found for index ${o}`);const l=de({panelConstraints:n,panelIndex:o,size:a});a!=l&&(i+=a-l,t[o]=l)}if(!F(i,0))for(let o=0;o<n.length;o++){const a=t[o];v(a!=null,`No layout data found for index ${o}`);const l=a+i,s=de({panelConstraints:n,panelIndex:o,size:l});if(a!==s&&(i-=s-a,t[o]=s,F(i,0)))break}return t}const ct=100,ze={getItem:e=>(Ye(ze),ze.getItem(e)),setItem:(e,n)=>{Ye(ze),ze.setItem(e,n)}},Qe={};function In({autoSaveId:e=null,children:n,className:t="",direction:r,forwardedRef:i,id:o=null,onLayout:a=null,keyboardResizeBy:l=null,storage:s=ze,style:f,tagName:h="div",...d}){const c=Ge(o),m=G(null),[p,E]=fe(null),[P,b]=fe([]),A=Yn(),M=G({}),$=G(new Map),U=G(0),L=G({autoSaveId:e,direction:r,dragState:p,id:c,keyboardResizeBy:l,onLayout:a,storage:s}),g=G({layout:P,panelDataArray:[],panelDataArrayChanged:!1});G({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),dn(i,()=>({getId:()=>L.current.id,getLayout:()=>{const{layout:u}=g.current;return u},setLayout:u=>{const{onLayout:S}=L.current,{layout:z,panelDataArray:x}=g.current,y=Ze({layout:u,panelConstraints:x.map(w=>w.constraints)});Je(z,y)||(b(y),g.current.layout=y,S&&S(y),ce(x,y,M.current))}}),[]),ie(()=>{L.current.autoSaveId=e,L.current.direction=r,L.current.dragState=p,L.current.id=c,L.current.onLayout=a,L.current.storage=s}),nt({committedValuesRef:L,eagerValuesRef:g,groupId:c,layout:P,panelDataArray:g.current.panelDataArray,setLayout:b,panelGroupElement:m.current}),oe(()=>{const{panelDataArray:u}=g.current;if(e){if(P.length===0||P.length!==u.length)return;let S=Qe[e];S==null&&(S=at(st,ct),Qe[e]=S);const z=[...u],x=new Map($.current);S(e,z,x,P,s)}},[e,P,s]),oe(()=>{});const B=H(u=>{const{onLayout:S}=L.current,{layout:z,panelDataArray:x}=g.current;if(u.constraints.collapsible){const y=x.map(O=>O.constraints),{collapsedSize:w=0,panelSize:R,pivotIndices:D}=te(x,u,z);if(v(R!=null,`Panel size not found for panel "${u.id}"`),!J(R,w)){$.current.set(u.id,R);const K=ue(x,u)===x.length-1?R-w:w-R,I=ye({delta:K,initialLayout:z,panelConstraints:y,pivotIndices:D,prevLayout:z,trigger:"imperative-api"});Ce(z,I)||(b(I),g.current.layout=I,S&&S(I),ce(x,I,M.current))}}},[]),T=H((u,S)=>{const{onLayout:z}=L.current,{layout:x,panelDataArray:y}=g.current;if(u.constraints.collapsible){const w=y.map(V=>V.constraints),{collapsedSize:R=0,panelSize:D=0,minSize:O=0,pivotIndices:K}=te(y,u,x),I=S??O;if(J(D,R)){const V=$.current.get(u.id),Pe=V!=null&&V>=I?V:I,Ee=ue(y,u)===y.length-1?D-Pe:Pe-D,ne=ye({delta:Ee,initialLayout:x,panelConstraints:w,pivotIndices:K,prevLayout:x,trigger:"imperative-api"});Ce(x,ne)||(b(ne),g.current.layout=ne,z&&z(ne),ce(y,ne,M.current))}}},[]),Q=H(u=>{const{layout:S,panelDataArray:z}=g.current,{panelSize:x}=te(z,u,S);return v(x!=null,`Panel size not found for panel "${u.id}"`),x},[]),W=H((u,S)=>{const{panelDataArray:z}=g.current,x=ue(z,u);return it({defaultSize:S,dragState:p,layout:P,panelData:z,panelIndex:x})},[p,P]),N=H(u=>{const{layout:S,panelDataArray:z}=g.current,{collapsedSize:x=0,collapsible:y,panelSize:w}=te(z,u,S);return v(w!=null,`Panel size not found for panel "${u.id}"`),y===!0&&J(w,x)},[]),Y=H(u=>{const{layout:S,panelDataArray:z}=g.current,{collapsedSize:x=0,collapsible:y,panelSize:w}=te(z,u,S);return v(w!=null,`Panel size not found for panel "${u.id}"`),!y||ae(w,x)>0},[]),k=H(u=>{const{panelDataArray:S}=g.current;S.push(u),S.sort((z,x)=>{const y=z.order,w=x.order;return y==null&&w==null?0:y==null?-1:w==null?1:y-w}),g.current.panelDataArrayChanged=!0,A()},[A]);ie(()=>{if(g.current.panelDataArrayChanged){g.current.panelDataArrayChanged=!1;const{autoSaveId:u,onLayout:S,storage:z}=L.current,{layout:x,panelDataArray:y}=g.current;let w=null;if(u){const D=lt(u,y,z);D&&($.current=new Map(Object.entries(D.expandToSizes)),w=D.layout)}w==null&&(w=ot({panelDataArray:y}));const R=Ze({layout:w,panelConstraints:y.map(D=>D.constraints)});Je(x,R)||(b(R),g.current.layout=R,S&&S(R),ce(y,R,M.current))}}),ie(()=>{const u=g.current;return()=>{u.layout=[]}},[]);const _=H(u=>function(z){z.preventDefault();const x=m.current;if(!x)return()=>null;const{direction:y,dragState:w,id:R,keyboardResizeBy:D,onLayout:O}=L.current,{layout:K,panelDataArray:I}=g.current,{initialLayout:V}=w??{},Pe=wn(R,u,x);let X=rt(z,u,y,w,D,x);const Ee=y==="horizontal";document.dir==="rtl"&&Ee&&(X=-X);const ne=I.map(An=>An.constraints),ge=ye({delta:X,initialLayout:V??K,panelConstraints:ne,pivotIndices:Pe,prevLayout:K,trigger:hn(z)?"keyboard":"mouse-or-touch"}),We=!Ce(K,ge);(mn(z)||gn(z))&&U.current!=X&&(U.current=X,!We&&X!==0?Ee?je(u,X<0?yn:zn):je(u,X<0?vn:Sn):je(u,0)),We&&(b(ge),g.current.layout=ge,O&&O(ge),ce(I,ge,M.current))},[]),j=H((u,S)=>{const{onLayout:z}=L.current,{layout:x,panelDataArray:y}=g.current,w=y.map(V=>V.constraints),{panelSize:R,pivotIndices:D}=te(y,u,x);v(R!=null,`Panel size not found for panel "${u.id}"`);const K=ue(y,u)===y.length-1?R-S:S-R,I=ye({delta:K,initialLayout:x,panelConstraints:w,pivotIndices:D,prevLayout:x,trigger:"imperative-api"});Ce(x,I)||(b(I),g.current.layout=I,z&&z(I),ce(y,I,M.current))},[]),$e=H((u,S)=>{const{layout:z,panelDataArray:x}=g.current,{collapsedSize:y=0,collapsible:w}=S,{collapsedSize:R=0,collapsible:D,maxSize:O=100,minSize:K=0}=u.constraints,{panelSize:I}=te(x,u,z);I!=null&&(w&&D&&J(I,y)?J(y,R)||j(u,R):I<K?j(u,K):I>O&&j(u,O))},[j]),ee=H((u,S)=>{const{direction:z}=L.current,{layout:x}=g.current;if(!m.current)return;const y=Ae(u,m.current);v(y,`Drag handle element not found for id "${u}"`);const w=En(z,S);E({dragHandleId:u,dragHandleRect:y.getBoundingClientRect(),initialCursorPosition:w,initialLayout:x})},[]),De=H(()=>{E(null)},[]),we=H(u=>{const{panelDataArray:S}=g.current,z=ue(S,u);z>=0&&(S.splice(z,1),delete M.current[u.id],g.current.panelDataArrayChanged=!0,A())},[A]),ke=jn(()=>({collapsePanel:B,direction:r,dragState:p,expandPanel:T,getPanelSize:Q,getPanelStyle:W,groupId:c,isPanelCollapsed:N,isPanelExpanded:Y,reevaluatePanelConstraints:$e,registerPanel:k,registerResizeHandle:_,resizePanel:j,startDragging:ee,stopDragging:De,unregisterPanel:we,panelGroupElement:m.current}),[B,p,r,T,Q,W,c,N,Y,$e,k,_,j,ee,De,we]),le={display:"flex",flexDirection:r==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return me(Ie.Provider,{value:ke},me(h,{...d,children:n,className:t,id:o,ref:m,style:{...le,...f},"data-panel-group":"","data-panel-group-direction":r,"data-panel-group-id":c}))}const Mn=cn((e,n)=>me(In,{...e,forwardedRef:n}));In.displayName="PanelGroup";Mn.displayName="forwardRef(PanelGroup)";function ue(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function te(e,n,t){const r=ue(e,n),o=r===e.length-1?[r-1,r]:[r,r+1],a=t[r];return{...n.constraints,panelSize:a,pivotIndices:o}}function ut({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:r}){oe(()=>{if(e||t==null||r==null)return;const i=Ae(n,r);if(i==null)return;const o=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=i.getAttribute("data-panel-group-id");v(l,`No group element found for id "${l}"`);const s=be(l,r),f=bn(l,n,r);v(f!==null,`No resize element found for id "${n}"`);const h=a.shiftKey?f>0?f-1:s.length-1:f+1<s.length?f+1:0;s[h].focus();break}}};return i.addEventListener("keydown",o),()=>{i.removeEventListener("keydown",o)}},[r,e,n,t])}function Nn({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:r,id:i,onBlur:o,onDragging:a,onFocus:l,style:s={},tabIndex:f=0,tagName:h="div",...d}){var c,m;const p=G(null),E=G({onDragging:a});oe(()=>{E.current.onDragging=a});const P=un(Ie);if(P===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:b,groupId:A,registerResizeHandle:M,startDragging:$,stopDragging:U,panelGroupElement:L}=P,g=Ge(i),[B,T]=fe("inactive"),[Q,W]=fe(!1),[N,Y]=fe(null),k=G({state:B});ie(()=>{k.current.state=B}),oe(()=>{if(t)Y(null);else{const ee=M(g);Y(()=>ee)}},[t,g,M]);const _=(c=r==null?void 0:r.coarse)!==null&&c!==void 0?c:15,j=(m=r==null?void 0:r.fine)!==null&&m!==void 0?m:5;return oe(()=>{if(t||N==null)return;const ee=p.current;return v(ee,"Element ref not attached"),Jn(g,ee,b,{coarse:_,fine:j},(we,ke,le)=>{if(ke)switch(we){case"down":{T("drag"),v(le,'Expected event to be defined for "down" action'),$(g,le);const{onDragging:u}=E.current;u&&u(!0);break}case"move":{const{state:u}=k.current;u!=="drag"&&T("hover"),v(le,'Expected event to be defined for "move" action'),N(le);break}case"up":{T("hover"),U();const{onDragging:u}=E.current;u&&u(!1);break}}else T("inactive")})},[_,b,t,j,M,g,N,$,U]),ut({disabled:t,handleId:g,resizeHandler:N,panelGroupElement:L}),me(h,{...d,children:e,className:n,id:i,onBlur:()=>{W(!1),o==null||o()},onFocus:()=>{W(!0),l==null||l()},ref:p,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...s},tabIndex:f,"data-panel-group-direction":b,"data-panel-group-id":A,"data-resize-handle":"","data-resize-handle-active":B==="drag"?"pointer":Q?"keyboard":void 0,"data-resize-handle-state":B,"data-panel-resize-handle-enabled":!t,"data-panel-resize-handle-id":g})}Nn.displayName="PanelResizeHandle";const en=({className:e,...n})=>C.jsx(Mn,{className:he("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",e),...n}),nn=pn,tn=({withHandle:e,className:n,...t})=>C.jsx(Nn,{className:he("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",n),...t,children:e&&C.jsx("div",{className:"z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border",children:C.jsx(Dn,{className:"h-2.5 w-2.5"})})}),mt=({images:e,columns:n=3})=>{const[t,r]=ve.useState(""),i=rn(),o=Math.ceil(e.length/n),a=ve.useMemo(()=>Array.from({length:o},(s,f)=>e.slice(f*n,(f+1)*n)),[e,n,o]),l=ve.useMemo(()=>{const s=f=>{const h=Array.from({length:f},()=>Math.random()*50+50),d=h.reduce((c,m)=>c+m,0);return h.map(c=>c/d*100)};return{rows:s(o),columns:Array.from({length:o},()=>s(n))}},[o,n]);return C.jsx(en,{direction:"vertical",className:he(i?"min-h-[190vh]":"min-h-[100vh]","rounded-md hover:shadow-lg shadow-md transition-all ease-in-out"),children:a.map((s,f)=>C.jsxs(Ke.Fragment,{children:[f>0&&C.jsx(tn,{}),C.jsx(nn,{defaultSize:l.rows[f],minSize:10,children:C.jsx(en,{direction:i?"vertical":"horizontal",children:s.map((h,d)=>C.jsxs(Ke.Fragment,{children:[d>0&&C.jsx(tn,{}),C.jsx(nn,{defaultSize:l.columns[f][d],minSize:10,children:C.jsxs(an,{children:[C.jsx(ln,{asChild:!0,children:C.jsx("div",{className:"w-full h-full animate-fadeIn",children:C.jsx("img",{src:h,alt:`${f*n+d+1}`,className:"w-full h-full object-cover cursor-pointer hover:opacity-80 transition-all ease-in-out transform hover:scale-105 duration-300",onClick:()=>r(h)})})}),C.jsx(sn,{className:he(i?"max-w-[375px]":"max-w-[750px]","rounded-md"),children:C.jsx("div",{className:"relative transform scale-95  animate-zoomIn",children:C.jsx("img",{src:t||"",alt:"Selected",className:"w-full h-auto max-h-[100vh] object-contain rounded-lg"})})})]})})]},`${f}-${d}`))})})]},f))})};export{pt as C,mt as R};
