(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{1429:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return r(8878)}])},8598:function(e,n,r){"use strict";r.d(n,{Et:function(){return h},R0:function(){return m},uz:function(){return f}});var t=r(5893),i=r(1664),s=r.n(i),l=r(5675),a=r.n(l),o=r(3100),c=r(3205),u=r(5931),d=r(917),x=r(2498);let f=e=>{let{title:n,icon:r}=e,{colorMode:i}=(0,x.If)();return(0,t.jsxs)(o.xu,{w:"100%",maxHeight:"120px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",className:"skill-item",children:[r(i),(0,t.jsx)(c.x,{fontSize:20,children:n})]})},h=e=>{let{children:n,id:r,title:i,thumbnail:l,inactive:d,href:x}=e;return(0,t.jsx)(o.xu,{w:"100%",textAlign:"center",className:d?"box-work-inactive":"box-work",children:(0,t.jsxs)(u.f,{as:s(),href:null!=x?x:"/works/".concat(r),scroll:!1,cursor:"pointer",target:x&&"_blanck",children:[(0,t.jsx)(a(),{src:l,alt:i,className:"grid-item-thumbnail",placeholder:"blur"}),(0,t.jsx)(u.A,{as:"div",href:"/works/".concat(r),children:(0,t.jsx)(c.x,{mt:2,fontSize:20,children:i})}),(0,t.jsx)(c.x,{fontSize:14,children:n})]})})},m=()=>(0,t.jsx)(d.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n        height:120px;\n        object-fit: cover;\n      }\n    "})},951:function(e,n,r){"use strict";var t=r(5893),i=r(6599),s=r(9008),l=r.n(s),a=r(8598);let o={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}},c=e=>{let{children:n,title:r}=e,s="".concat(r," - Nikolay Gipp");return(0,t.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:o,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[r&&(0,t.jsxs)(l(),{children:[(0,t.jsx)("title",{children:s}),(0,t.jsx)("meta",{name:"twitter:title",content:s}),(0,t.jsx)("meta",{property:"og:title",content:s})]}),n,(0,t.jsx)(a.R0,{})]})})};n.Z=c},4065:function(e,n,r){"use strict";r.d(n,{h_:function(){return v},Dx:function(){return w},WZ:function(){return y}});var t=r(5893),i=r(1664),s=r.n(i),l=r(3100),a=r(3838),o=r(4418),c=r(5059),u=(0,c.G)(function(e,n){let{htmlWidth:r,htmlHeight:i,alt:s,...l}=e;return(0,t.jsx)("img",{width:r,height:i,ref:n,alt:s,...l})});u.displayName="NativeImage";var d=r(6245),x=r(7294),f=(e,n)=>"loaded"!==e&&"beforeLoadOrError"===n||"failed"===e&&"onError"===n,h=r(5523),m=(0,c.G)(function(e,n){let{fallbackSrc:r,fallback:i,src:s,srcSet:l,align:a,fit:o,loading:c,ignoreFallback:m,crossOrigin:g,fallbackStrategy:j="beforeLoadOrError",referrerPolicy:p,...b}=e,k=null!=c||m||!(void 0!==r||void 0!==i),w=function(e){let{loading:n,src:r,srcSet:t,onLoad:i,onError:s,crossOrigin:l,sizes:a,ignoreFallback:o}=e,[c,u]=(0,x.useState)("pending");(0,x.useEffect)(()=>{u(r?"loading":"pending")},[r]);let f=(0,x.useRef)(),h=(0,x.useCallback)(()=>{if(!r)return;m();let e=new Image;e.src=r,l&&(e.crossOrigin=l),t&&(e.srcset=t),a&&(e.sizes=a),n&&(e.loading=n),e.onload=e=>{m(),u("loaded"),null==i||i(e)},e.onerror=e=>{m(),u("failed"),null==s||s(e)},f.current=e},[r,l,t,a,i,s,n]),m=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,d.G)(()=>{if(!o)return"loading"===c&&h(),()=>{m()}},[c,h,o]),o?"loaded":c}({...e,ignoreFallback:k}),y=f(w,j),v={ref:n,objectFit:o,objectPosition:a,...k?b:function(e,n=[]){let r=Object.assign({},e);for(let t of n)t in r&&delete r[t];return r}(b,["onError","onLoad"])};return y?i||(0,t.jsx)(h.m.img,{as:u,className:"chakra-image__placeholder",src:r,...v}):(0,t.jsx)(h.m.img,{as:u,src:s,srcSet:l,crossOrigin:g,loading:c,referrerPolicy:p,className:"chakra-image",...v})});m.displayName="Image";var g=r(1639),j=r(3179),p=r(5432),b=(0,c.G)(function(e,n){let r=(0,g.mq)("Badge",e),{className:i,...s}=(0,j.Lr)(e);return(0,t.jsx)(h.m.span,{ref:n,className:(0,p.cx)("chakra-badge",e.className),...s,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})});b.displayName="Badge";var k=r(6864);let w=e=>{let{children:n}=e;return(0,t.jsxs)(l.xu,{children:[(0,t.jsx)(a.r,{as:s(),href:"/works",children:"Works"}),(0,t.jsx)("span",{children:(0,t.jsx)(k.X,{})}),(0,t.jsx)(o.X,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:n})]})},y=e=>{let{src:n,alt:r}=e;return(0,t.jsx)(m,{borderRadius:"lg",w:"full",src:n,alt:r,mb:4})},v=e=>{let{children:n}=e;return(0,t.jsx)(b,{colorScheme:"green",mr:2,children:n})}},8878:function(e,n,r){"use strict";r.r(n);var t=r(5893),i=r(6979),s=r(4418),l=r(3838),a=r(951),o=r(4065);let c=()=>(0,t.jsx)(a.Z,{title:"Resume",children:(0,t.jsxs)(i.W,{children:[(0,t.jsx)(s.X,{as:"h3",fontSize:20,mb:4,children:"Resume"}),(0,t.jsx)(l.r,{target:"_blank",href:"https://drive.google.com/file/d/1h8yt3qfbHszRw7pUtPZjGWsyFPGYOLyt/view",children:"Open Google Disk"}),(0,t.jsx)(o.WZ,{src:"/images/works/resume.png",alt:"Resume"})]})});n.default=c},6864:function(e,n,r){"use strict";r.d(n,{X:function(){return t}});var t=(0,r(78).I)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"})}},function(e){e.O(0,[864,774,888,179],function(){return e(e.s=1429)}),_N_E=e.O()}]);