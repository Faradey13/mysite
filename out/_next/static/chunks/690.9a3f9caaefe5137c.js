"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[690],{7690:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var i=n(5893),o=n(7294),a=n(9477),s=n(9365),r=n(1217),l=n(1776);let c=()=>{let e=(0,o.useRef)(),[t,n]=(0,o.useState)(!0),c=(0,o.useRef)(),d=(0,o.useCallback)(()=>{let{current:t}=c,{current:n}=e;if(n&&t){let i=n.clientWidth,o=n.clientHeight;t.setSize(i,o)}},[]);return(0,o.useEffect)(()=>{let{current:t}=e;if(t){let i=t.clientWidth,o=t.clientHeight,l=new a.CP7({antialias:!0,alpha:!0});l.setPixelRatio(window.devicePixelRatio),l.setSize(i,o),l.outputEncoding=a.knz,t.appendChild(l.domElement),c.current=l;let d=new a.xsS,h=new a.Pa4(-.5,1.2,0),u=new a.Pa4(20*Math.sin(.2*Math.PI),10,20*Math.cos(.2*Math.PI)),w=.005*o+4.8,f=new a.iKG(-w,w,w,-w,.01,5e4);f.position.copy(u),f.lookAt(h);let p=new a.Mig(13421772,1);d.add(p);let m=new s.z(f,l.domElement);m.autoRotate=!0,m.target=h,(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{receiveShadow:!0,castShadow:!0},{receiveShadow:i,castShadow:o}=n;return new Promise((n,a)=>{let s=new r.E;s.load(t,t=>{let a=t.scene;a.name="dog",a.position.y=0,a.position.x=0,a.receiveShadow=i,a.castShadow=o,e.add(a),a.traverse(function(e){e.isMesh&&(e.castShadow=o,e.receiveShadow=i)}),n(a)},void 0,function(e){a(e)})})})(d,"/dog.glb",{receiveShadow:!1,castShadow:!1}).then(()=>{S(),n(!1)});let v=null,M=0,S=()=>{if(v=requestAnimationFrame(S),(M=M<=100?M+1:M)<=100){let e=-Math.sqrt(1-Math.pow(M/120-1,4))*Math.PI*20;f.position.y=10,f.position.x=u.x*Math.cos(e)+u.z*Math.sin(e),f.position.z=u.z*Math.cos(e)-u.x*Math.sin(e),f.lookAt(h)}else m.update();l.render(d,f)};return()=>{cancelAnimationFrame(v),l.domElement.remove(),l.dispose()}}},[]),(0,o.useEffect)(()=>(window.addEventListener("resize",d,!1),()=>{window.removeEventListener("resize",d,!1)}),[d]),(0,i.jsx)(l.Oi,{ref:e,children:t&&(0,i.jsx)(l.j_,{})})};var d=c}}]);