(window.webpackJsonp=window.webpackJsonp||[]).push([[40,12],{"0zqC":function(Fn,gn,e){"use strict";e.r(gn);var U=e("tJVT"),t=e("q1tI"),b=e.n(t),W=e("wx14"),me=e("rePB"),H=e("ODXe"),ln=e("U8pU"),Ne=e("Ff2n"),ge=e("VTBJ"),We=e("TSYQ"),Pe=e.n(We),yn=e("Zm9Q"),wn=e("5Z9U"),Rn=e("6cGi"),pn=e("KQm4"),Qe=e("wgJM"),Wn=e("t23M");function Mn(r){var s=Object(t.useRef)(),h=Object(t.useRef)(!1);function O(){for(var C=arguments.length,y=new Array(C),R=0;R<C;R++)y[R]=arguments[R];h.current||(Qe.a.cancel(s.current),s.current=Object(Qe.a)(function(){r.apply(void 0,y)}))}return Object(t.useEffect)(function(){return function(){h.current=!0,Qe.a.cancel(s.current)}},[]),O}function jn(r){var s=Object(t.useRef)([]),h=Object(t.useState)({}),O=Object(H.a)(h,2),C=O[1],y=Object(t.useRef)(typeof r=="function"?r():r),R=Mn(function(){var B=y.current;s.current.forEach(function($){B=$(B)}),s.current=[],y.current=B,C({})});function P(B){s.current.push(B),R()}return[y.current,P]}var Me=e("4IlW");function kn(r,s){var h,O=r.prefixCls,C=r.id,y=r.active,R=r.rtl,P=r.tab,B=P.key,$=P.tab,J=P.disabled,Y=P.closeIcon,G=r.tabBarGutter,oe=r.tabPosition,X=r.closable,Z=r.renderWrapper,de=r.removeAriaLabel,z=r.editable,ne=r.onClick,se=r.onRemove,k=r.onFocus,ue="".concat(O,"-tab");t.useEffect(function(){return se},[]);var _={};oe==="top"||oe==="bottom"?_[R?"marginLeft":"marginRight"]=G:_.marginBottom=G;var be=z&&X!==!1&&!J;function te(ie){J||ne(ie)}function fe(ie){ie.preventDefault(),ie.stopPropagation(),z.onEdit("remove",{key:B,event:ie})}var pe=t.createElement("div",{key:B,ref:s,className:Pe()(ue,(h={},Object(me.a)(h,"".concat(ue,"-with-remove"),be),Object(me.a)(h,"".concat(ue,"-active"),y),Object(me.a)(h,"".concat(ue,"-disabled"),J),h)),style:_,onClick:te},t.createElement("div",{role:"tab","aria-selected":y,id:C&&"".concat(C,"-tab-").concat(B),className:"".concat(ue,"-btn"),"aria-controls":C&&"".concat(C,"-panel-").concat(B),"aria-disabled":J,tabIndex:J?null:0,onClick:function(Q){Q.stopPropagation(),te(Q)},onKeyDown:function(Q){[Me.a.SPACE,Me.a.ENTER].includes(Q.which)&&(Q.preventDefault(),te(Q))},onFocus:k},$),be&&t.createElement("button",{type:"button","aria-label":de||"remove",tabIndex:0,className:"".concat(ue,"-remove"),onClick:function(Q){Q.stopPropagation(),fe(Q)}},Y||z.removeIcon||"\xD7"));return Z&&(pe=Z(pe)),pe}var Ln=t.forwardRef(kn),qn={width:0,height:0,left:0,top:0};function _n(r,s,h){return Object(t.useMemo)(function(){for(var O,C=new Map,y=s.get((O=r[0])===null||O===void 0?void 0:O.key)||qn,R=y.left+y.width,P=0;P<r.length;P+=1){var B=r[P].key,$=s.get(B);if(!$){var J;$=s.get((J=r[P-1])===null||J===void 0?void 0:J.key)||qn}var Y=C.get(B)||Object(ge.a)({},$);Y.right=R-Y.left-Y.width,C.set(B,Y)}return C},[r.map(function(O){return O.key}).join("_"),s,h])}var et={width:0,height:0,left:0,top:0,right:0};function st(r,s,h,O,C){var y=C.tabs,R=C.tabPosition,P=C.rtl,B,$,J;["top","bottom"].includes(R)?(B="width",$=P?"right":"left",J=Math.abs(s.left)):(B="height",$="top",J=-s.top);var Y=s[B],G=h[B],oe=O[B],X=Y;return G+oe>Y&&(X=Y-oe),Object(t.useMemo)(function(){if(!y.length)return[0,0];for(var Z=y.length,de=Z,z=0;z<Z;z+=1){var ne=r.get(y[z].key)||et;if(ne[$]+ne[B]>J+X){de=z-1;break}}for(var se=0,k=Z-1;k>=0;k-=1){var ue=r.get(y[k].key)||et;if(ue[$]<J){se=k+1;break}}return[se,de]},[r,J,X,R,y.map(function(Z){return Z.key}).join("_"),P])}var Vn=e("Gytx"),I=e.n(Vn),N=e("Kwbf");function A(r,s){var h=r.prefixCls,O=r.invalidate,C=r.item,y=r.renderItem,R=r.responsive,P=r.registerSize,B=r.itemKey,$=r.className,J=r.style,Y=r.children,G=r.display,oe=r.order,X=r.component,Z=X===void 0?"div":X,de=Object(Ne.a)(r,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=R&&!G;function ne(be){P(B,be)}t.useEffect(function(){return function(){ne(null)}},[]);var se=y&&C!==void 0?y(C):Y,k;O||(k={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:R?oe:void 0,pointerEvents:z?"none":void 0});var ue={};z&&(ue["aria-hidden"]=!0);var _=t.createElement(Z,Object(W.a)({className:Pe()(!O&&h,$),style:Object(ge.a)(Object(ge.a)({},k),J)},ue,de,{ref:s}),se);return R&&(_=t.createElement(Wn.default,{onResize:function(te){var fe=te.offsetWidth;ne(fe)}},_)),_}var u=t.forwardRef(A);u.displayName="Item";var o=u;function f(){var r=Object(t.useState)({}),s=Object(H.a)(r,2),h=s[1],O=Object(t.useRef)([]),C=Object(t.useRef)(!1),y=0,R=0;Object(t.useEffect)(function(){return function(){C.current=!0}},[]);function P(B){var $=y;y+=1,O.current.length<$+1&&(O.current[$]=B);var J=O.current[$];function Y(G){O.current[$]=typeof G=="function"?G(O.current[$]):G,Qe.a.cancel(R),R=Object(Qe.a)(function(){C.current||h({})})}return[J,Y]}return P}var g=function(s,h){var O=t.useContext(l);if(!O){var C=s.component,y=C===void 0?"div":C,R=Object(Ne.a)(s,["component"]);return t.createElement(y,Object(W.a)({},R,{ref:h}))}var P=O.className,B=Object(Ne.a)(O,["className"]),$=s.className,J=Object(Ne.a)(s,["className"]);return t.createElement(l.Provider,{value:null},t.createElement(o,Object(W.a)({ref:h,className:Pe()(P,$)},B,J)))},S=t.forwardRef(g);S.displayName="RawItem";var a=S,l=t.createContext(null),i="responsive",M="invalidate";function w(r){return"+ ".concat(r.length," ...")}function j(r,s){var h=r.prefixCls,O=h===void 0?"rc-overflow":h,C=r.data,y=C===void 0?[]:C,R=r.renderItem,P=r.renderRawItem,B=r.itemKey,$=r.itemWidth,J=$===void 0?10:$,Y=r.ssr,G=r.style,oe=r.className,X=r.maxCount,Z=r.renderRest,de=r.renderRawRest,z=r.suffix,ne=r.component,se=ne===void 0?"div":ne,k=r.itemComponent,ue=r.onVisibleChange,_=Object(Ne.a)(r,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=f(),te=Y==="full",fe=be(null),pe=Object(H.a)(fe,2),ie=pe[0],Q=pe[1],ce=ie||0,ye=be(new Map),ve=Object(H.a)(ye,2),Re=ve[0],Ke=ve[1],Oe=be(0),Ce=Object(H.a)(Oe,2),Fe=Ce[0],Ae=Ce[1],Ie=be(0),De=Object(H.a)(Ie,2),Le=De[0],qe=De[1],xe=be(0),Ve=Object(H.a)(xe,2),Ye=Ve[0],Be=Ve[1],En=Object(t.useState)(null),rn=Object(H.a)(En,2),Xe=rn[0],un=rn[1],bn=Object(t.useState)(null),On=Object(H.a)(bn,2),Te=On[0],ze=On[1],_e=t.useMemo(function(){return Te===null&&te?Number.MAX_SAFE_INTEGER:Te||0},[Te,ie]),Ze=Object(t.useState)(!1),Kn=Object(H.a)(Ze,2),Jn=Kn[0],Bn=Kn[1],an="".concat(O,"-item"),Pn=Math.max(Fe,Le),dn=y.length&&X===i,Dn=X===M,en=dn||typeof X=="number"&&y.length>X,sn=Object(t.useMemo)(function(){var he=y;return dn?ie===null&&te?he=y:he=y.slice(0,Math.min(y.length,ce/J)):typeof X=="number"&&(he=y.slice(0,X)),he},[y,J,ie,X,dn]),Nn=Object(t.useMemo)(function(){return dn?y.slice(_e+1):y.slice(sn.length)},[y,sn,dn,_e]),mn=Object(t.useCallback)(function(he,je){var we;return typeof B=="function"?B(he):(we=B&&(he==null?void 0:he[B]))!==null&&we!==void 0?we:je},[B]),ke=Object(t.useCallback)(R||function(he){return he},[R]);function He(he,je){ze(he),je||(Bn(he<y.length-1),ue==null||ue(he))}function Un(he,je){Q(je.clientWidth)}function zn(he,je){Ke(function(we){var nn=new Map(we);return je===null?nn.delete(he):nn.set(he,je),nn})}function tt(he,je){qe(je),Ae(Le)}function Sn(he,je){Be(je)}function vn(he){return Re.get(mn(sn[he],he))}t.useLayoutEffect(function(){if(ce&&Pn&&sn){var he=Ye,je=sn.length,we=je-1;if(!je){He(0),un(null);return}for(var nn=0;nn<je;nn+=1){var Qn=vn(nn);if(Qn===void 0){He(nn-1,!0);break}if(he+=Qn,nn===we-1&&he+vn(we)<=ce){He(we),un(null);break}else if(he+Pn>ce){He(nn-1),un(he-Qn-Ye+Le);break}else if(nn===we){He(we),un(he-Ye);break}}z&&vn(0)+Ye>ce&&un(null)}},[ce,Re,Le,Ye,mn,sn]);var Hn=Jn&&!!Nn.length,Cn={};Xe!==null&&dn&&(Cn={position:"absolute",left:Xe,top:0});var fn={prefixCls:an,responsive:dn,component:k,invalidate:Dn},Gn=P?function(he,je){var we=mn(he,je);return t.createElement(l.Provider,{key:we,value:Object(ge.a)(Object(ge.a)({},fn),{},{order:je,item:he,itemKey:we,registerSize:zn,display:je<=_e})},P(he,je))}:function(he,je){var we=mn(he,je);return t.createElement(o,Object(W.a)({},fn,{order:je,key:we,item:he,renderItem:ke,itemKey:we,registerSize:zn,display:je<=_e}))},In,Yn={order:Hn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(an,"-rest"),registerSize:tt,display:Hn};if(de)de&&(In=t.createElement(l.Provider,{value:Object(ge.a)(Object(ge.a)({},fn),Yn)},de(Nn)));else{var cn=Z||w;In=t.createElement(o,Object(W.a)({},fn,Yn),typeof cn=="function"?cn(Nn):cn)}var Tn=t.createElement(se,Object(W.a)({className:Pe()(!Dn&&O,oe),style:G,ref:s},_),sn.map(Gn),en?In:null,z&&t.createElement(o,Object(W.a)({},fn,{order:_e,className:"".concat(an,"-suffix"),registerSize:Sn,display:!0,style:Cn}),z));return dn&&(Tn=t.createElement(Wn.default,{onResize:Un},Tn)),Tn}var d=t.forwardRef(j);d.displayName="Overflow",d.Item=a,d.RESPONSIVE=i,d.INVALIDATE=M;var E=d,m=E,n=e("1OyB"),v=e("vuIU"),c=e("Ji7U"),D=e("LK+K"),T=e("bT9E"),L=e("YrtM"),V=t.createContext(null);function x(r,s){var h=Object(ge.a)({},r);return Object.keys(s).forEach(function(O){var C=s[O];C!==void 0&&(h[O]=C)}),h}function ae(r){var s=r.children,h=r.locked,O=Object(Ne.a)(r,["children","locked"]),C=t.useContext(V),y=Object(L.a)(function(){return x(C,O)},[C,O],function(R,P){return!h&&(R[0]!==P[0]||!I()(R[1],P[1]))});return t.createElement(V.Provider,{value:y},s)}function Ge(r,s,h,O){var C=t.useContext(V),y=C.activeKey,R=C.onActive,P=C.onInactive,B={active:y===r};return s||(B.onMouseEnter=function($){h==null||h({key:r,domEvent:$}),R(r)},B.onMouseLeave=function($){O==null||O({key:r,domEvent:$}),P(r)}),B}function tn(r){var s=r.item,h=Object(Ne.a)(r,["item"]);return Object.defineProperty(h,"item",{get:function(){return Object(N.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),s}}),h}function p(r){var s=r.icon,h=r.props,O=r.children,C;return typeof s=="function"?C=t.createElement(s,Object(ge.a)({},h)):C=s,C||O||null}function F(r){var s=t.useContext(V),h=s.mode,O=s.rtl,C=s.inlineIndent;if(h!=="inline")return null;var y=r;return O?{paddingRight:y*C}:{paddingLeft:y*C}}var K=[],le=t.createContext(null);function ee(){return t.useContext(le)}var Ee=t.createContext(K);function $e(r){var s=t.useContext(Ee);return t.useMemo(function(){return r!==void 0?[].concat(Object(pn.a)(s),[r]):s},[s,r])}var Ue=t.createContext(null),Jt=t.createContext(null);function Ut(r,s){return r===void 0?null:"".concat(r,"-").concat(s)}function zt(r){var s=t.useContext(Jt);return Ut(s,r)}var br=function(r){Object(c.a)(h,r);var s=Object(D.a)(h);function h(){return Object(n.a)(this,h),s.apply(this,arguments)}return Object(v.a)(h,[{key:"render",value:function(){var C=this.props,y=C.title,R=C.attribute,P=C.elementRef,B=Object(Ne.a)(C,["title","attribute","elementRef"]),$=Object(T.a)(B,["eventKey"]);return Object(N.a)(!R,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(m.Item,Object(W.a)({},R,{title:typeof y=="string"?y:void 0},$,{ref:P}))}}]),h}(t.Component),Or=function(s){var h,O=s.style,C=s.className,y=s.eventKey,R=s.disabled,P=s.itemIcon,B=s.children,$=s.role,J=s.onMouseEnter,Y=s.onMouseLeave,G=s.onClick,oe=s.onKeyDown,X=s.onFocus,Z=Object(Ne.a)(s,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),de=zt(y),z=t.useContext(V),ne=z.prefixCls,se=z.onItemClick,k=z.disabled,ue=z.overflowDisabled,_=z.itemIcon,be=z.selectedKeys,te=z.onActive,fe="".concat(ne,"-item"),pe=t.useRef(),ie=t.useRef(),Q=k||R,ce=$e(y),ye=function(xe){return{key:y,keyPath:ce,item:pe.current,domEvent:xe}},ve=P||_,Re=Ge(y,Q,J,Y),Ke=Re.active,Oe=Object(Ne.a)(Re,["active"]),Ce=be.includes(y),Fe=F(ce.length),Ae=function(xe){if(!Q){var Ve=ye(xe);G==null||G(tn(Ve)),se(Ve)}},Ie=function(xe){if(oe==null||oe(xe),xe.which===Me.a.ENTER){var Ve=ye(xe);G==null||G(tn(Ve)),se(Ve)}},De=function(xe){te(y),X==null||X(xe)},Le={};return s.role==="option"&&(Le["aria-selected"]=Ce),t.createElement(br,Object(W.a)({ref:pe,elementRef:ie,role:$===null?"none":$||"menuitem",tabIndex:R?null:-1,"data-menu-id":ue&&de?null:de},Z,Oe,Le,{component:"li","aria-disabled":R,style:Object(ge.a)(Object(ge.a)({},Fe),O),className:Pe()(fe,(h={},Object(me.a)(h,"".concat(fe,"-active"),Ke),Object(me.a)(h,"".concat(fe,"-selected"),Ce),Object(me.a)(h,"".concat(fe,"-disabled"),Q),h),C),onClick:Ae,onKeyDown:Ie,onFocus:De}),B,t.createElement(p,{props:Object(ge.a)(Object(ge.a)({},s),{},{isSelected:Ce}),icon:ve}))};function Sr(r){var s=r.eventKey,h=ee(),O=$e(s);return t.useEffect(function(){if(h)return h.registerPath(s,O),function(){h.unregisterPath(s,O)}},[O]),h?null:t.createElement(Or,r)}var Pt=Sr;function Dt(r,s){return Object(yn.a)(r).map(function(h,O){if(t.isValidElement(h)){var C=h.key;return C==null&&(C="tmp_key-".concat([].concat(Object(pn.a)(s),[O]).join("-"))),t.cloneElement(h,{key:C,eventKey:C})}return h})}function nt(r){var s=t.useRef(r);s.current=r;var h=t.useCallback(function(){for(var O,C=arguments.length,y=new Array(C),R=0;R<C;R++)y[R]=arguments[R];return(O=s.current)===null||O===void 0?void 0:O.call.apply(O,[s].concat(y))},[]);return r?h:void 0}var Cr=function(s,h){var O=s.className,C=s.children,y=Object(Ne.a)(s,["className","children"]),R=t.useContext(V),P=R.prefixCls,B=R.mode;return t.createElement("ul",Object(W.a)({className:Pe()(P,"".concat(P,"-sub"),"".concat(P,"-").concat(B==="inline"?"inline":"vertical"),O)},y,{"data-menu-list":!0,ref:h}),C)},Ht=t.forwardRef(Cr);Ht.displayName="SubMenuList";var Gt=Ht,Rr=e("uciX"),xn={adjustX:1,adjustY:1},Yt={topLeft:{points:["bl","tl"],overflow:xn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:xn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:xn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:xn,offset:[4,0]}},jr={topLeft:{points:["bl","tl"],overflow:xn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:xn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:xn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:xn,offset:[4,0]}},fa=Yt;function Qt(r,s,h){if(s)return s;if(h)return h[r]||h.other}var Er={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Pr(r){var s=r.prefixCls,h=r.visible,O=r.children,C=r.popup,y=r.popupClassName,R=r.popupOffset,P=r.disabled,B=r.mode,$=r.onVisibleChange,J=t.useContext(V),Y=J.getPopupContainer,G=J.rtl,oe=J.subMenuOpenDelay,X=J.subMenuCloseDelay,Z=J.builtinPlacements,de=J.triggerSubMenuAction,z=J.forceSubMenuRender,ne=J.motion,se=J.defaultMotions,k=t.useState(!1),ue=Object(H.a)(k,2),_=ue[0],be=ue[1],te=G?Object(ge.a)(Object(ge.a)({},jr),Z):Object(ge.a)(Object(ge.a)({},Yt),Z),fe=Er[B],pe=Qt(B,ne,se),ie=Object(ge.a)(Object(ge.a)({},pe),{},{leavedClassName:"".concat(s,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Q=t.useRef();return t.useEffect(function(){return Q.current=Object(Qe.a)(function(){be(h)}),function(){Qe.a.cancel(Q.current)}},[h]),t.createElement(Rr.a,{prefixCls:s,popupClassName:Pe()("".concat(s,"-popup"),Object(me.a)({},"".concat(s,"-rtl"),G),y),stretch:B==="horizontal"?"minWidth":null,getPopupContainer:Y,builtinPlacements:te,popupPlacement:fe,popupVisible:_,popup:C,popupAlign:R&&{offset:R},action:P?[]:[de],mouseEnterDelay:oe,mouseLeaveDelay:X,onPopupVisibleChange:$,forceRender:z,popupMotion:ie},O)}var Dr=e("8XRh");function Nr(r){var s=r.id,h=r.open,O=r.keyPath,C=r.children,y="inline",R=t.useContext(V),P=R.prefixCls,B=R.forceSubMenuRender,$=R.motion,J=R.defaultMotions,Y=R.mode,G=t.useRef(!1);G.current=Y===y;var oe=t.useState(!G.current),X=Object(H.a)(oe,2),Z=X[0],de=X[1],z=G.current?h:!1;t.useEffect(function(){G.current&&de(!1)},[Y]);var ne=Object(ge.a)({},Qt(y,$,J));O.length>1&&(ne.motionAppear=!1);var se=ne.onVisibleChanged;return ne.onVisibleChanged=function(k){return!G.current&&!k&&de(!0),se==null?void 0:se(k)},Z?null:t.createElement(ae,{mode:y,locked:!G.current},t.createElement(Dr.default,Object(W.a)({visible:z},ne,{forceRender:B,removeOnLeave:!1,leavedClassName:"".concat(P,"-hidden")}),function(k){var ue=k.className,_=k.style;return t.createElement(Gt,{id:s,className:ue,style:_},C)}))}var Ir=function(s){var h,O=s.style,C=s.className,y=s.title,R=s.eventKey,P=s.disabled,B=s.internalPopupClose,$=s.children,J=s.itemIcon,Y=s.expandIcon,G=s.popupClassName,oe=s.popupOffset,X=s.onClick,Z=s.onMouseEnter,de=s.onMouseLeave,z=s.onTitleClick,ne=s.onTitleMouseEnter,se=s.onTitleMouseLeave,k=Object(Ne.a)(s,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ue=zt(R),_=t.useContext(V),be=_.prefixCls,te=_.mode,fe=_.openKeys,pe=_.disabled,ie=_.overflowDisabled,Q=_.activeKey,ce=_.selectedKeys,ye=_.itemIcon,ve=_.expandIcon,Re=_.onItemClick,Ke=_.onOpenChange,Oe=_.onActive,Ce=t.useContext(Ue),Fe=Ce.isSubPathKey,Ae=$e(),Ie="".concat(be,"-submenu"),De=pe||P,Le=t.useRef(),qe=t.useRef(),xe=J||ye,Ve=Y||ve,Ye=fe.includes(R),Be=!ie&&Ye,En=Fe(ce,R),rn=Ge(R,De,ne,se),Xe=rn.active,un=Object(Ne.a)(rn,["active"]),bn=t.useState(!1),On=Object(H.a)(bn,2),Te=On[0],ze=On[1],_e=function(He){De||ze(He)},Ze=function(He){_e(!0),Z==null||Z({key:R,domEvent:He})},Kn=function(He){_e(!1),de==null||de({key:R,domEvent:He})},Jn=t.useMemo(function(){return Xe||(te!=="inline"?Te||Fe([Q],R):!1)},[te,Xe,Q,Te,R,Fe]),Bn=F(Ae.length),an=function(He){De||(z==null||z({key:R,domEvent:He}),te==="inline"&&Ke(R,!Ye))},Pn=nt(function(ke){X==null||X(tn(ke)),Re(ke)}),dn=function(He){te!=="inline"&&Ke(R,He)},Dn=function(){Oe(R)},en=ue&&"".concat(ue,"-popup"),sn=t.createElement("div",Object(W.a)({role:"menuitem",style:Bn,className:"".concat(Ie,"-title"),tabIndex:De?null:-1,ref:Le,title:typeof y=="string"?y:null,"data-menu-id":ie&&ue?null:ue,"aria-expanded":Be,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":De,onClick:an,onFocus:Dn},un),y,t.createElement(p,{icon:te!=="horizontal"?Ve:null,props:Object(ge.a)(Object(ge.a)({},s),{},{isOpen:Be,isSubMenu:!0})},t.createElement("i",{className:"".concat(Ie,"-arrow")}))),Nn=t.useRef(te);if(te!=="inline"&&(Nn.current=Ae.length>1?"vertical":te),!ie){var mn=Nn.current;sn=t.createElement(Pr,{mode:mn,prefixCls:Ie,visible:!B&&Be&&te!=="inline",popupClassName:G,popupOffset:oe,popup:t.createElement(ae,{mode:mn},t.createElement(Gt,{id:en,ref:qe},$)),disabled:De,onVisibleChange:dn},sn)}return t.createElement(ae,{onItemClick:Pn,mode:te==="horizontal"?"vertical":te,itemIcon:xe,expandIcon:Ve},t.createElement(m.Item,Object(W.a)({role:"none"},k,{component:"li",style:O,className:Pe()(Ie,"".concat(Ie,"-").concat(te),C,(h={},Object(me.a)(h,"".concat(Ie,"-open"),Be),Object(me.a)(h,"".concat(Ie,"-active"),Jn),Object(me.a)(h,"".concat(Ie,"-selected"),En),Object(me.a)(h,"".concat(Ie,"-disabled"),De),h)),onMouseEnter:Ze,onMouseLeave:Kn}),sn,!ie&&t.createElement(Nr,{id:en,open:Be,keyPath:Ae},$)))};function Xt(r){var s=r.eventKey,h=r.children,O=$e(s),C=Dt(h,O),y=ee();t.useEffect(function(){if(y)return y.registerPath(s,O),function(){y.unregisterPath(s,O)}},[O]);var R;return y?R=C:R=t.createElement(Ir,r,C),t.createElement(Ee.Provider,{value:O},R)}var Tr=e("x/xZ");function Zt(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Tr.a)(r)){var h=r.nodeName.toLowerCase(),O=["input","select","textarea","button"].includes(h)||r.isContentEditable||h==="a"&&!!r.getAttribute("href"),C=r.getAttribute("tabindex"),y=Number(C),R=null;return C&&!Number.isNaN(y)?R=y:O&&R===null&&(R=0),O&&r.disabled&&(R=null),R!==null&&(R>=0||s&&R<0)}return!1}function kt(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,h=Object(pn.a)(r.querySelectorAll("*")).filter(function(O){return Zt(O,s)});return Zt(r,s)&&h.unshift(r),h}var mt=null;function pa(){mt=document.activeElement}function ha(){mt=null}function va(){if(mt)try{mt.focus()}catch(r){}}function ga(r,s){if(s.keyCode===9){var h=kt(r),O=h[s.shiftKey?0:h.length-1],C=O===document.activeElement||r===document.activeElement;if(C){var y=h[s.shiftKey?h.length-1:0];y.focus(),s.preventDefault()}}}var Nt=Me.a.LEFT,It=Me.a.RIGHT,Tt=Me.a.UP,ft=Me.a.DOWN,pt=Me.a.ENTER,qt=Me.a.ESC,_t=[Tt,ft,Nt,It];function Ar(r,s,h,O){var C,y,R,P,B="prev",$="next",J="children",Y="parent";if(r==="inline"&&O===pt)return{inlineTrigger:!0};var G=(C={},Object(me.a)(C,Tt,B),Object(me.a)(C,ft,$),C),oe=(y={},Object(me.a)(y,Nt,h?$:B),Object(me.a)(y,It,h?B:$),Object(me.a)(y,ft,J),Object(me.a)(y,pt,J),y),X=(R={},Object(me.a)(R,Tt,B),Object(me.a)(R,ft,$),Object(me.a)(R,pt,J),Object(me.a)(R,qt,Y),Object(me.a)(R,Nt,h?J:Y),Object(me.a)(R,It,h?Y:J),R),Z={inline:G,horizontal:oe,vertical:X,inlineSub:G,horizontalSub:X,verticalSub:X},de=(P=Z["".concat(r).concat(s?"":"Sub")])===null||P===void 0?void 0:P[O];switch(de){case B:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case Y:return{offset:-1,sibling:!1};case J:return{offset:1,sibling:!1};default:return null}}function Fr(r){for(var s=r;s;){if(s.getAttribute("data-menu-list"))return s;s=s.parentElement}return null}function wr(r,s){for(var h=r||document.activeElement;h;){if(s.has(h))return h;h=h.parentElement}return null}function Mr(r,s){var h=kt(r,!0);return h.filter(function(O){return s.has(O)})}function er(r,s,h){var O=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!r)return null;var C=Mr(r,s),y=C.length,R=C.findIndex(function(P){return h===P});return O<0?R===-1?R=y-1:R-=1:O>0&&(R+=1),R=(R+y)%y,C[R]}function Kr(r,s,h,O,C,y,R,P,B,$){var J=t.useRef(),Y=t.useRef();Y.current=s;var G=function(){Qe.a.cancel(J.current)};return t.useEffect(function(){return function(){G()}},[]),function(oe){var X=oe.which;if([].concat(_t,[pt,qt]).includes(X)){var Z,de,z,ne=function(){Z=new Set,de=new Map,z=new Map;var ye=y();return ye.forEach(function(ve){var Re=document.querySelector("[data-menu-id='".concat(Ut(O,ve),"']"));Re&&(Z.add(Re),z.set(Re,ve),de.set(ve,Re))}),Z};ne();var se=de.get(s),k=wr(se,Z),ue=z.get(k),_=Ar(r,R(ue,!0).length===1,h,X);if(!_)return;_t.includes(X)&&oe.preventDefault();var be=function(ye){if(ye){var ve=ye,Re=ye.querySelector("a");(Re==null?void 0:Re.getAttribute("href"))&&(ve=Re);var Ke=z.get(ye);P(Ke),G(),J.current=Object(Qe.a)(function(){Y.current===Ke&&ve.focus()})}};if(_.sibling||!k){var te;!k||r==="inline"?te=C.current:te=Fr(k);var fe=er(te,Z,k,_.offset);be(fe)}else if(_.inlineTrigger)B(ue);else if(_.offset>0)B(ue,!0),G(),J.current=Object(Qe.a)(function(){ne();var ce=k.getAttribute("aria-controls"),ye=document.getElementById(ce),ve=er(ye,Z);be(ve)},5);else if(_.offset<0){var pe=R(ue,!0),ie=pe[pe.length-2],Q=de.get(ie);B(ie,!1),be(Q)}}$==null||$(oe)}}var Br=Math.random().toFixed(5).toString().slice(2),nr=0;function Wr(r){var s=Object(Rn.a)(r,{value:r}),h=Object(H.a)(s,2),O=h[0],C=h[1];return t.useEffect(function(){nr+=1;var y="".concat(Br,"-").concat(nr);C("rc-menu-uuid-".concat(y))},[]),O}var ya=e("p8sG");function Lr(r){Promise.resolve().then(r)}var At="__RC_UTIL_PATH_SPLIT__",tr=function(s){return s.join(At)},xr=function(s){return s.split(At)},Ft="rc-menu-more";function $r(){var r=t.useState({}),s=Object(H.a)(r,2),h=s[1],O=Object(t.useRef)(new Map),C=Object(t.useRef)(new Map),y=t.useState([]),R=Object(H.a)(y,2),P=R[0],B=R[1],$=Object(t.useRef)(0),J=Object(t.useCallback)(function(z,ne){var se=tr(ne);C.current.set(se,z),O.current.set(z,se),$.current+=1;var k=$.current;Lr(function(){k===$.current&&h({})})},[]),Y=Object(t.useCallback)(function(z,ne){var se=tr(ne);C.current.delete(se),O.current.delete(z)},[]),G=Object(t.useCallback)(function(z){B(z)},[]),oe=Object(t.useCallback)(function(z,ne){var se=O.current.get(z)||"",k=xr(se);return ne&&P.includes(k[0])&&k.unshift(Ft),k},[P]),X=Object(t.useCallback)(function(z,ne){return z.some(function(se){var k=oe(se,!0);return k.includes(ne)})},[oe]),Z=function(){var ne=Object(pn.a)(O.current.keys());return P.length&&ne.push(Ft),ne},de=Object(t.useCallback)(function(z){var ne="".concat(O.current.get(z)).concat(At),se=new Set;return Object(pn.a)(C.current.keys()).forEach(function(k){k.startsWith(ne)&&se.add(C.current.get(k))}),se},[]);return{registerPath:J,unregisterPath:Y,refreshOverflowKeys:G,isSubPathKey:X,getKeyPath:oe,getKeys:Z,getSubPathKeys:de}}var ht=[],Vr=function(s){var h,O,C=s.prefixCls,y=C===void 0?"rc-menu":C,R=s.style,P=s.className,B=s.tabIndex,$=B===void 0?0:B,J=s.children,Y=s.direction,G=s.id,oe=s.mode,X=oe===void 0?"vertical":oe,Z=s.inlineCollapsed,de=s.disabled,z=s.disabledOverflow,ne=s.subMenuOpenDelay,se=ne===void 0?.1:ne,k=s.subMenuCloseDelay,ue=k===void 0?.1:k,_=s.forceSubMenuRender,be=s.defaultOpenKeys,te=s.openKeys,fe=s.activeKey,pe=s.defaultActiveFirst,ie=s.selectable,Q=ie===void 0?!0:ie,ce=s.multiple,ye=ce===void 0?!1:ce,ve=s.defaultSelectedKeys,Re=s.selectedKeys,Ke=s.onSelect,Oe=s.onDeselect,Ce=s.inlineIndent,Fe=Ce===void 0?24:Ce,Ae=s.motion,Ie=s.defaultMotions,De=s.triggerSubMenuAction,Le=De===void 0?"hover":De,qe=s.builtinPlacements,xe=s.itemIcon,Ve=s.expandIcon,Ye=s.overflowedIndicator,Be=Ye===void 0?"...":Ye,En=s.getPopupContainer,rn=s.onClick,Xe=s.onOpenChange,un=s.onKeyDown,bn=s.openAnimation,On=s.openTransitionName,Te=Object(Ne.a)(s,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),ze=Dt(J,ht),_e=t.useState(!1),Ze=Object(H.a)(_e,2),Kn=Ze[0],Jn=Ze[1],Bn=t.useRef(),an=Wr(G),Pn=Y==="rtl",dn=t.useMemo(function(){return X==="inline"&&Z?["vertical",Z]:[X,!1]},[X,Z]),Dn=Object(H.a)(dn,2),en=Dn[0],sn=Dn[1],Nn=t.useState(0),mn=Object(H.a)(Nn,2),ke=mn[0],He=mn[1],Un=ke>=ze.length-1||en!=="horizontal"||z,zn=Object(Rn.a)(be,{value:te,postState:function(q){return q||ht}}),tt=Object(H.a)(zn,2),Sn=tt[0],vn=tt[1],Hn=t.useState(Sn),Cn=Object(H.a)(Hn,2),fn=Cn[0],Gn=Cn[1],In=en==="inline",Yn=t.useRef(!1);t.useEffect(function(){In&&Gn(Sn)},[Sn]),t.useEffect(function(){if(!Yn.current){Yn.current=!0;return}if(In)vn(fn);else{var re=[];vn(re),Xe==null||Xe(re)}},[In]);var cn=$r(),Tn=cn.registerPath,he=cn.unregisterPath,je=cn.refreshOverflowKeys,we=cn.isSubPathKey,nn=cn.getKeyPath,Qn=cn.getKeys,gt=cn.getSubPathKeys,Bt=t.useMemo(function(){return{registerPath:Tn,unregisterPath:he}},[Tn,he]),Wt=t.useMemo(function(){return{isSubPathKey:we}},[we]);t.useEffect(function(){je(Un?ht:ze.slice(ke+1).map(function(re){return re.key}))},[ke,Un]);var Lt=Object(Rn.a)(fe||pe&&((h=ze[0])===null||h===void 0?void 0:h.key),{value:fe}),rt=Object(H.a)(Lt,2),yt=rt[0],ot=rt[1],bt=nt(function(re){ot(re)}),xt=nt(function(){ot(void 0)}),Ot=Object(Rn.a)(ve||[],{value:Re,postState:function(q){return Array.isArray(q)?q:q==null?ht:[q]}}),St=Object(H.a)(Ot,2),at=St[0],An=St[1],Ct=function(q){if(!!Q){var Se=q.key,Je=at.includes(Se),on;Je?on=at.filter(function(Zn){return Zn!==Se}):ye?on=[].concat(Object(pn.a)(at),[Se]):on=[Se],An(on);var $n=Object(ge.a)(Object(ge.a)({},q),{},{selectedKeys:on});Je?Oe==null||Oe($n):Ke==null||Ke($n)}},Rt=nt(function(re){rn==null||rn(tn(re)),Ct(re)}),lt=nt(function(re,q){var Se=Sn.filter(function(on){return on!==re});if(q)Se.push(re);else if(en!=="inline"){var Je=gt(re);Se=Se.filter(function(on){return!Je.has(on)})}I()(Sn,Se)||(vn(Se),Xe==null||Xe(Se))}),Xn=nt(En),ut=function(q,Se){var Je=Se!=null?Se:!Sn.includes(q);lt(q,Je)},dt=Kr(en,yt,Pn,an,Bn,Qn,nn,ot,ut,un);t.useEffect(function(){Jn(!0)},[]);var jt=en!=="horizontal"||z?ze:ze.map(function(re,q){return t.createElement(ae,{key:re.key,overflowDisabled:q>ke},re)}),Et=t.createElement(m,Object(W.a)({id:G,ref:Bn,prefixCls:"".concat(y,"-overflow"),component:"ul",itemComponent:Pt,className:Pe()(y,"".concat(y,"-root"),"".concat(y,"-").concat(en),P,(O={},Object(me.a)(O,"".concat(y,"-inline-collapsed"),sn),Object(me.a)(O,"".concat(y,"-rtl"),Pn),O)),dir:Y,style:R,role:"menu",tabIndex:$,data:jt,renderRawItem:function(q){return q},renderRawRest:function(q){var Se=q.length,Je=Se?ze.slice(-Se):null;return t.createElement(Xt,{eventKey:Ft,title:Be,disabled:Un,internalPopupClose:Se===0},Je)},maxCount:en!=="horizontal"||z?m.INVALIDATE:m.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(q){He(q)},onKeyDown:dt},Te));return t.createElement(Jt.Provider,{value:an},t.createElement(ae,{prefixCls:y,mode:en,openKeys:Sn,rtl:Pn,disabled:de,motion:Kn?Ae:null,defaultMotions:Kn?Ie:null,activeKey:yt,onActive:bt,onInactive:xt,selectedKeys:at,inlineIndent:Fe,subMenuOpenDelay:se,subMenuCloseDelay:ue,forceSubMenuRender:_,builtinPlacements:qe,triggerSubMenuAction:Le,getPopupContainer:Xn,itemIcon:xe,expandIcon:Ve,onItemClick:Rt,onOpenChange:lt},t.createElement(Ue.Provider,{value:Wt},Et),t.createElement(le.Provider,{value:Bt},ze)))},Jr=Vr,Ur=function(s){var h=s.className,O=s.title,C=s.eventKey,y=s.children,R=Object(Ne.a)(s,["className","title","eventKey","children"]),P=t.useContext(V),B=P.prefixCls,$="".concat(B,"-item-group");return t.createElement("li",Object(W.a)({},R,{onClick:function(Y){return Y.stopPropagation()},className:Pe()($,h)}),t.createElement("div",{className:"".concat($,"-title"),title:typeof O=="string"?O:void 0},O),t.createElement("ul",{className:"".concat($,"-list")},y))};function zr(r){var s=r.children,h=Object(Ne.a)(r,["children"]),O=$e(h.eventKey),C=Dt(s,O),y=ee();return y?C:t.createElement(Ur,h,C)}function Hr(r){var s=r.className,h=r.style,O=t.useContext(V),C=O.prefixCls,y=ee();return y?null:t.createElement("li",{className:Pe()("".concat(C,"-item-divider"),s),style:h})}var it=Jr;it.Item=Pt,it.SubMenu=Xt,it.ItemGroup=zr,it.Divider=Hr;var Gr=it,Yr=e("eDIo");function Qr(r,s){var h=r.prefixCls,O=r.editable,C=r.locale,y=r.style;return!O||O.showAdd===!1?null:t.createElement("button",{ref:s,type:"button",className:"".concat(h,"-nav-add"),style:y,"aria-label":(C==null?void 0:C.addAriaLabel)||"Add tab",onClick:function(P){O.onEdit("add",{event:P})}},O.addIcon||"+")}var rr=t.forwardRef(Qr);function Xr(r,s){var h=r.prefixCls,O=r.id,C=r.tabs,y=r.locale,R=r.mobile,P=r.moreIcon,B=P===void 0?"More":P,$=r.moreTransitionName,J=r.style,Y=r.className,G=r.editable,oe=r.tabBarGutter,X=r.rtl,Z=r.onTabClick,de=Object(t.useState)(!1),z=Object(H.a)(de,2),ne=z[0],se=z[1],k=Object(t.useState)(null),ue=Object(H.a)(k,2),_=ue[0],be=ue[1],te="".concat(O,"-more-popup"),fe="".concat(h,"-dropdown"),pe=_!==null?"".concat(te,"-").concat(_):null,ie=y==null?void 0:y.dropdownAriaLabel,Q=t.createElement(Gr,{onClick:function(Ce){var Fe=Ce.key,Ae=Ce.domEvent;Z(Fe,Ae),se(!1)},id:te,tabIndex:-1,role:"listbox","aria-activedescendant":pe,selectedKeys:[_],"aria-label":ie!==void 0?ie:"expanded dropdown"},C.map(function(Oe){return t.createElement(Pt,{key:Oe.key,id:"".concat(te,"-").concat(Oe.key),role:"option","aria-controls":O&&"".concat(O,"-panel-").concat(Oe.key),disabled:Oe.disabled},Oe.tab)}));function ce(Oe){for(var Ce=C.filter(function(Le){return!Le.disabled}),Fe=Ce.findIndex(function(Le){return Le.key===_})||0,Ae=Ce.length,Ie=0;Ie<Ae;Ie+=1){Fe=(Fe+Oe+Ae)%Ae;var De=Ce[Fe];if(!De.disabled){be(De.key);return}}}function ye(Oe){var Ce=Oe.which;if(!ne){[Me.a.DOWN,Me.a.SPACE,Me.a.ENTER].includes(Ce)&&(se(!0),Oe.preventDefault());return}switch(Ce){case Me.a.UP:ce(-1),Oe.preventDefault();break;case Me.a.DOWN:ce(1),Oe.preventDefault();break;case Me.a.ESC:se(!1);break;case Me.a.SPACE:case Me.a.ENTER:_!==null&&Z(_,Oe);break}}Object(t.useEffect)(function(){var Oe=document.getElementById(pe);Oe&&Oe.scrollIntoView&&Oe.scrollIntoView(!1)},[_]),Object(t.useEffect)(function(){ne||be(null)},[ne]);var ve=Object(me.a)({},X?"marginLeft":"marginRight",oe);C.length||(ve.visibility="hidden",ve.order=1);var Re=Pe()(Object(me.a)({},"".concat(fe,"-rtl"),X)),Ke=R?null:t.createElement(Yr.default,{prefixCls:fe,overlay:Q,trigger:["hover"],visible:ne,transitionName:$,onVisibleChange:se,overlayClassName:Re,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(h,"-nav-more"),style:ve,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":te,id:"".concat(O,"-more"),"aria-expanded":ne,onKeyDown:ye},B));return t.createElement("div",{className:Pe()("".concat(h,"-nav-operations"),Y),style:J,ref:s},Ke,t.createElement(rr,{prefixCls:h,locale:y,editable:G}))}var Zr=t.forwardRef(Xr),wt=Object(t.createContext)(null),kr=.1,ar=.01,vt=20,sr=Math.pow(.995,vt);function qr(r,s){var h=Object(t.useState)(),O=Object(H.a)(h,2),C=O[0],y=O[1],R=Object(t.useState)(0),P=Object(H.a)(R,2),B=P[0],$=P[1],J=Object(t.useState)(0),Y=Object(H.a)(J,2),G=Y[0],oe=Y[1],X=Object(t.useState)(),Z=Object(H.a)(X,2),de=Z[0],z=Z[1],ne=Object(t.useRef)();function se(fe){var pe=fe.touches[0],ie=pe.screenX,Q=pe.screenY;y({x:ie,y:Q}),window.clearInterval(ne.current)}function k(fe){if(!!C){fe.preventDefault();var pe=fe.touches[0],ie=pe.screenX,Q=pe.screenY;y({x:ie,y:Q});var ce=ie-C.x,ye=Q-C.y;s(ce,ye);var ve=Date.now();$(ve),oe(ve-B),z({x:ce,y:ye})}}function ue(){if(!!C&&(y(null),z(null),de)){var fe=de.x/G,pe=de.y/G,ie=Math.abs(fe),Q=Math.abs(pe);if(Math.max(ie,Q)<kr)return;var ce=fe,ye=pe;ne.current=window.setInterval(function(){if(Math.abs(ce)<ar&&Math.abs(ye)<ar){window.clearInterval(ne.current);return}ce*=sr,ye*=sr,s(ce*vt,ye*vt)},vt)}}var _=Object(t.useRef)();function be(fe){var pe=fe.deltaX,ie=fe.deltaY,Q=0,ce=Math.abs(pe),ye=Math.abs(ie);ce===ye?Q=_.current==="x"?pe:ie:ce>ye?(Q=pe,_.current="x"):(Q=ie,_.current="y"),s(-Q,-Q)&&fe.preventDefault()}var te=Object(t.useRef)(null);te.current={onTouchStart:se,onTouchMove:k,onTouchEnd:ue,onWheel:be},t.useEffect(function(){function fe(ce){te.current.onTouchStart(ce)}function pe(ce){te.current.onTouchMove(ce)}function ie(ce){te.current.onTouchEnd(ce)}function Q(ce){te.current.onWheel(ce)}return document.addEventListener("touchmove",pe,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),r.current.addEventListener("touchstart",fe,{passive:!1}),r.current.addEventListener("wheel",Q),function(){document.removeEventListener("touchmove",pe),document.removeEventListener("touchend",ie)}},[])}function _r(){var r=Object(t.useRef)(new Map);function s(O){return r.current.has(O)||r.current.set(O,t.createRef()),r.current.get(O)}function h(O){r.current.delete(O)}return[s,h]}function ir(r,s){var h=t.useRef(r),O=t.useState({}),C=Object(H.a)(O,2),y=C[1];function R(P){var B=typeof P=="function"?P(h.current):P;B!==h.current&&s(B,h.current),h.current=B,y({})}return[h.current,R]}var or=function(s){var h=s.position,O=s.prefixCls,C=s.extra;if(!C)return null;var y,R=C;return h==="right"&&(y=R.right||!R.left&&R||null),h==="left"&&(y=R.left||null),y?t.createElement("div",{className:"".concat(O,"-extra-content")},y):null};function ea(r,s){var h,O=t.useContext(wt),C=O.prefixCls,y=O.tabs,R=r.className,P=r.style,B=r.id,$=r.animated,J=r.activeKey,Y=r.rtl,G=r.extra,oe=r.editable,X=r.locale,Z=r.tabPosition,de=r.tabBarGutter,z=r.children,ne=r.onTabClick,se=r.onTabScroll,k=Object(t.useRef)(),ue=Object(t.useRef)(),_=Object(t.useRef)(),be=Object(t.useRef)(),te=_r(),fe=Object(H.a)(te,2),pe=fe[0],ie=fe[1],Q=Z==="top"||Z==="bottom",ce=ir(0,function(re,q){Q&&se&&se({direction:re>q?"left":"right"})}),ye=Object(H.a)(ce,2),ve=ye[0],Re=ye[1],Ke=ir(0,function(re,q){!Q&&se&&se({direction:re>q?"top":"bottom"})}),Oe=Object(H.a)(Ke,2),Ce=Oe[0],Fe=Oe[1],Ae=Object(t.useState)(0),Ie=Object(H.a)(Ae,2),De=Ie[0],Le=Ie[1],qe=Object(t.useState)(0),xe=Object(H.a)(qe,2),Ve=xe[0],Ye=xe[1],Be=Object(t.useState)(0),En=Object(H.a)(Be,2),rn=En[0],Xe=En[1],un=Object(t.useState)(0),bn=Object(H.a)(un,2),On=bn[0],Te=bn[1],ze=Object(t.useState)(null),_e=Object(H.a)(ze,2),Ze=_e[0],Kn=_e[1],Jn=Object(t.useState)(null),Bn=Object(H.a)(Jn,2),an=Bn[0],Pn=Bn[1],dn=Object(t.useState)(0),Dn=Object(H.a)(dn,2),en=Dn[0],sn=Dn[1],Nn=Object(t.useState)(0),mn=Object(H.a)(Nn,2),ke=mn[0],He=mn[1],Un=jn(new Map),zn=Object(H.a)(Un,2),tt=zn[0],Sn=zn[1],vn=_n(y,tt,De),Hn="".concat(C,"-nav-operations-hidden"),Cn=0,fn=0;Q?Y?(Cn=0,fn=Math.max(0,De-Ze)):(Cn=Math.min(0,Ze-De),fn=0):(Cn=Math.min(0,an-Ve),fn=0);function Gn(re){return re<Cn?Cn:re>fn?fn:re}var In=Object(t.useRef)(),Yn=Object(t.useState)(),cn=Object(H.a)(Yn,2),Tn=cn[0],he=cn[1];function je(){he(Date.now())}function we(){window.clearTimeout(In.current)}qr(k,function(re,q){function Se(Je,on){Je(function($n){var Zn=Gn($n+on);return Zn})}if(Q){if(Ze>=De)return!1;Se(Re,re)}else{if(an>=Ve)return!1;Se(Fe,q)}return we(),je(),!0}),Object(t.useEffect)(function(){return we(),Tn&&(In.current=window.setTimeout(function(){he(0)},100)),we},[Tn]);function nn(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:J,q=vn.get(re)||{width:0,height:0,left:0,right:0,top:0};if(Q){var Se=ve;Y?q.right<ve?Se=q.right:q.right+q.width>ve+Ze&&(Se=q.right+q.width-Ze):q.left<-ve?Se=-q.left:q.left+q.width>-ve+Ze&&(Se=-(q.left+q.width-Ze)),Fe(0),Re(Gn(Se))}else{var Je=Ce;q.top<-Ce?Je=-q.top:q.top+q.height>-Ce+an&&(Je=-(q.top+q.height-an)),Re(0),Fe(Gn(Je))}}var Qn=st(vn,{width:Ze,height:an,left:ve,top:Ce},{width:rn,height:On},{width:en,height:ke},Object(ge.a)(Object(ge.a)({},r),{},{tabs:y})),gt=Object(H.a)(Qn,2),Bt=gt[0],Wt=gt[1],Lt=y.map(function(re){var q=re.key;return t.createElement(Ln,{id:B,prefixCls:C,key:q,rtl:Y,tab:re,closable:re.closable,editable:oe,active:q===J,tabPosition:Z,tabBarGutter:de,renderWrapper:z,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:pe(q),onClick:function(Je){ne(q,Je)},onRemove:function(){ie(q)},onFocus:function(){nn(q),je(),Y||(k.current.scrollLeft=0),k.current.scrollTop=0}})}),rt=Mn(function(){var re,q,Se,Je,on,$n,Zn,$t,Vt,la=((re=k.current)===null||re===void 0?void 0:re.offsetWidth)||0,ua=((q=k.current)===null||q===void 0?void 0:q.offsetHeight)||0,mr=((Se=be.current)===null||Se===void 0?void 0:Se.offsetWidth)||0,fr=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,da=((on=_.current)===null||on===void 0?void 0:on.offsetWidth)||0,ca=(($n=_.current)===null||$n===void 0?void 0:$n.offsetHeight)||0;Kn(la),Pn(ua),sn(mr),He(fr);var pr=(((Zn=ue.current)===null||Zn===void 0?void 0:Zn.offsetWidth)||0)-mr,hr=((($t=ue.current)===null||$t===void 0?void 0:$t.offsetHeight)||0)-fr;Le(pr),Ye(hr);var vr=(Vt=_.current)===null||Vt===void 0?void 0:Vt.className.includes(Hn);Xe(pr-(vr?0:da)),Te(hr-(vr?0:ca)),Sn(function(){var gr=new Map;return y.forEach(function(ma){var yr=ma.key,ct=pe(yr).current;ct&&gr.set(yr,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),gr})}),yt=y.slice(0,Bt),ot=y.slice(Wt+1),bt=[].concat(Object(pn.a)(yt),Object(pn.a)(ot)),xt=Object(t.useState)(),Ot=Object(H.a)(xt,2),St=Ot[0],at=Ot[1],An=vn.get(J),Ct=Object(t.useRef)();function Rt(){Qe.a.cancel(Ct.current)}Object(t.useEffect)(function(){var re={};return An&&(Q?(Y?re.right=An.right:re.left=An.left,re.width=An.width):(re.top=An.top,re.height=An.height)),Rt(),Ct.current=Object(Qe.a)(function(){at(re)}),Rt},[An,Q,Y]),Object(t.useEffect)(function(){nn()},[J,An,vn,Q]),Object(t.useEffect)(function(){rt()},[Y,de,J,y.map(function(re){return re.key}).join("_")]);var lt=!!bt.length,Xn="".concat(C,"-nav-wrap"),ut,dt,jt,Et;return Q?Y?(dt=ve>0,ut=ve+Ze<De):(ut=ve<0,dt=-ve+Ze<De):(jt=Ce<0,Et=-Ce+an<Ve),t.createElement("div",{ref:s,role:"tablist",className:Pe()("".concat(C,"-nav"),R),style:P,onKeyDown:function(){je()}},t.createElement(or,{position:"left",extra:G,prefixCls:C}),t.createElement(Wn.default,{onResize:rt},t.createElement("div",{className:Pe()(Xn,(h={},Object(me.a)(h,"".concat(Xn,"-ping-left"),ut),Object(me.a)(h,"".concat(Xn,"-ping-right"),dt),Object(me.a)(h,"".concat(Xn,"-ping-top"),jt),Object(me.a)(h,"".concat(Xn,"-ping-bottom"),Et),h)),ref:k},t.createElement(Wn.default,{onResize:rt},t.createElement("div",{ref:ue,className:"".concat(C,"-nav-list"),style:{transform:"translate(".concat(ve,"px, ").concat(Ce,"px)"),transition:Tn?"none":void 0}},Lt,t.createElement(rr,{ref:be,prefixCls:C,locale:X,editable:oe,style:{visibility:lt?"hidden":null}}),t.createElement("div",{className:Pe()("".concat(C,"-ink-bar"),Object(me.a)({},"".concat(C,"-ink-bar-animated"),$.inkBar)),style:St}))))),t.createElement(Zr,Object(W.a)({},r,{ref:_,prefixCls:C,tabs:bt,className:!lt&&Hn})),t.createElement(or,{position:"right",extra:G,prefixCls:C}))}var lr=t.forwardRef(ea);function na(r){var s=r.id,h=r.activeKey,O=r.animated,C=r.tabPosition,y=r.rtl,R=r.destroyInactiveTabPane,P=t.useContext(wt),B=P.prefixCls,$=P.tabs,J=O.tabPane,Y=$.findIndex(function(G){return G.key===h});return t.createElement("div",{className:Pe()("".concat(B,"-content-holder"))},t.createElement("div",{className:Pe()("".concat(B,"-content"),"".concat(B,"-content-").concat(C),Object(me.a)({},"".concat(B,"-content-animated"),J)),style:Y&&J?Object(me.a)({},y?"marginRight":"marginLeft","-".concat(Y,"00%")):null},$.map(function(G){return t.cloneElement(G.node,{key:G.key,prefixCls:B,tabKey:G.key,id:s,animated:J,active:G.key===h,destroyInactiveTabPane:R})})))}function ur(r){var s=r.prefixCls,h=r.forceRender,O=r.className,C=r.style,y=r.id,R=r.active,P=r.animated,B=r.destroyInactiveTabPane,$=r.tabKey,J=r.children,Y=t.useState(h),G=Object(H.a)(Y,2),oe=G[0],X=G[1];t.useEffect(function(){R?X(!0):B&&X(!1)},[R,B]);var Z={};return R||(P?(Z.visibility="hidden",Z.height=0,Z.overflowY="hidden"):Z.display="none"),t.createElement("div",{id:y&&"".concat(y,"-panel-").concat($),role:"tabpanel",tabIndex:R?0:-1,"aria-labelledby":y&&"".concat(y,"-tab-").concat($),"aria-hidden":!R,style:Object(ge.a)(Object(ge.a)({},Z),C),className:Pe()("".concat(s,"-tabpane"),R&&"".concat(s,"-tabpane-active"),O)},(R||oe||h)&&J)}var dr=0;function ta(r){return Object(yn.a)(r).map(function(s){if(t.isValidElement(s)){var h=s.key!==void 0?String(s.key):void 0;return Object(ge.a)(Object(ge.a)({key:h},s.props),{},{node:s})}return null}).filter(function(s){return s})}function ra(r,s){var h,O=r.id,C=r.prefixCls,y=C===void 0?"rc-tabs":C,R=r.className,P=r.children,B=r.direction,$=r.activeKey,J=r.defaultActiveKey,Y=r.editable,G=r.animated,oe=G===void 0?{inkBar:!0,tabPane:!1}:G,X=r.tabPosition,Z=X===void 0?"top":X,de=r.tabBarGutter,z=r.tabBarStyle,ne=r.tabBarExtraContent,se=r.locale,k=r.moreIcon,ue=r.moreTransitionName,_=r.destroyInactiveTabPane,be=r.renderTabBar,te=r.onChange,fe=r.onTabClick,pe=r.onTabScroll,ie=Object(Ne.a)(r,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),Q=ta(P),ce=B==="rtl",ye;oe===!1?ye={inkBar:!1,tabPane:!1}:oe===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ge.a)({inkBar:!0,tabPane:!1},Object(ln.a)(oe)==="object"?oe:{});var ve=Object(t.useState)(!1),Re=Object(H.a)(ve,2),Ke=Re[0],Oe=Re[1];Object(t.useEffect)(function(){Oe(Object(wn.a)())},[]);var Ce=Object(Rn.a)(function(){var Te;return(Te=Q[0])===null||Te===void 0?void 0:Te.key},{value:$,defaultValue:J}),Fe=Object(H.a)(Ce,2),Ae=Fe[0],Ie=Fe[1],De=Object(t.useState)(function(){return Q.findIndex(function(Te){return Te.key===Ae})}),Le=Object(H.a)(De,2),qe=Le[0],xe=Le[1];Object(t.useEffect)(function(){var Te=Q.findIndex(function(_e){return _e.key===Ae});if(Te===-1){var ze;Te=Math.max(0,Math.min(qe,Q.length-1)),Ie((ze=Q[Te])===null||ze===void 0?void 0:ze.key)}xe(Te)},[Q.map(function(Te){return Te.key}).join("_"),Ae,qe]);var Ve=Object(Rn.a)(null,{value:O}),Ye=Object(H.a)(Ve,2),Be=Ye[0],En=Ye[1],rn=Z;Ke&&!["left","right"].includes(Z)&&(rn="top"),Object(t.useEffect)(function(){O||(En("rc-tabs-".concat(dr)),dr+=1)},[]);function Xe(Te,ze){fe==null||fe(Te,ze),Ie(Te),te==null||te(Te)}var un={id:Be,activeKey:Ae,animated:ye,tabPosition:rn,rtl:ce,mobile:Ke},bn,On=Object(ge.a)(Object(ge.a)({},un),{},{editable:Y,locale:se,moreIcon:k,moreTransitionName:ue,tabBarGutter:de,onTabClick:Xe,onTabScroll:pe,extra:ne,style:z,panes:P});return be?bn=be(On,lr):bn=t.createElement(lr,On),t.createElement(wt.Provider,{value:{tabs:Q,prefixCls:y}},t.createElement("div",Object(W.a)({ref:s,id:O,className:Pe()(y,"".concat(y,"-").concat(rn),(h={},Object(me.a)(h,"".concat(y,"-mobile"),Ke),Object(me.a)(h,"".concat(y,"-editable"),Y),Object(me.a)(h,"".concat(y,"-rtl"),ce),h),R)},ie),bn,t.createElement(na,Object(W.a)({destroyInactiveTabPane:_},un,{animated:ye}))))}var cr=t.forwardRef(ra);cr.TabPane=ur;var aa=cr,sa=aa,Mt=e("MZF8"),hn=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function Kt(r,s){var h,O=(h=r.match(/\.(\w+)$/))===null||h===void 0?void 0:h[1];return O||(O=s.tsx?"tsx":"jsx"),O}var oa=r=>{var s,h,O,C=Object(t.useRef)(),y=Object(t.useContext)(hn.context),R=y.locale,P=Object(hn.useLocaleProps)(R,r),B=Object(hn.useDemoUrl)(P.identifier),$=P.demoUrl||B,J=(Mt.a===null||Mt.a===void 0?void 0:Mt.a.location.hash)==="#".concat(P.identifier),Y=Object.keys(P.sources).length===1,G=Object(hn.useCodeSandbox)((s=P.hideActions)!==null&&s!==void 0&&s.includes("CSB")?null:P),oe=Object(hn.useRiddle)((h=P.hideActions)!==null&&h!==void 0&&h.includes("RIDDLE")?null:P),X=Object(hn.useMotions)(P.motions||[],C.current),Z=Object(U.default)(X,2),de=Z[0],z=Z[1],ne=Object(hn.useCopy)(),se=Object(U.default)(ne,2),k=se[0],ue=se[1],_=Object(t.useState)("_"),be=Object(U.default)(_,2),te=be[0],fe=be[1],pe=Object(t.useState)(Kt(te,P.sources[te])),ie=Object(U.default)(pe,2),Q=ie[0],ce=ie[1],ye=Object(t.useState)(Boolean(P.defaultShowCode)),ve=Object(U.default)(ye,2),Re=ve[0],Ke=ve[1],Oe=Object(t.useState)(Math.random()),Ce=Object(U.default)(Oe,2),Fe=Ce[0],Ae=Ce[1],Ie=P.sources[te][Q]||P.sources[te].content,De=Object(hn.useTSPlaygroundUrl)(R,Ie),Le=Object(t.useRef)(),qe=Object(hn.usePrefersColor)(),xe=Object(U.default)(qe,1),Ve=xe[0];Object(t.useEffect)(()=>{Ae(Math.random())},[Ve]);function Ye(Be){fe(Be),ce(Kt(Be,P.sources[Be]))}return b.a.createElement("div",{style:P.style,className:[P.className,"__dumi-default-previewer",J?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:P.identifier,"data-debug":P.debug||void 0,"data-iframe":P.iframe||void 0},P.iframe&&b.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),b.a.createElement("div",{ref:C,className:"__dumi-default-previewer-demo",style:{transform:P.transform?"translate(0, 0)":void 0,padding:P.compact||P.iframe&&P.compact!==!1?"0":void 0,background:P.background}},P.iframe?b.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(P.iframe).replace(/(\d)$/,"$1px")},key:Fe,src:$,ref:Le}):P.children),b.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":P.title},P.title&&b.a.createElement(hn.AnchorLink,{to:"#".concat(P.identifier)},P.title),P.description&&b.a.createElement("div",{dangerouslySetInnerHTML:{__html:P.description}})),b.a.createElement("div",{className:"__dumi-default-previewer-actions"},G&&b.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:G}),oe&&b.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:oe}),P.motions&&b.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>de()}),P.iframe&&b.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ae(Math.random())}),!((O=P.hideActions)!==null&&O!==void 0&&O.includes("EXTERNAL"))&&b.a.createElement(hn.Link,{target:"_blank",to:$},b.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),b.a.createElement("span",null),b.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ue,onClick:()=>k(Ie)}),Q==="tsx"&&Re&&b.a.createElement(hn.Link,{target:"_blank",to:De},b.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),b.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Re?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Re)})),Re&&b.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!Y&&b.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:te,onChange:Ye},Object.keys(P.sources).map(Be=>b.a.createElement(ur,{tab:Be==="_"?"index.".concat(Kt(Be,P.sources[Be])):Be,key:Be}))),b.a.createElement("div",{className:"__dumi-default-previewer-source"},b.a.createElement(ia.a,{code:Ie,lang:Q,showCopy:!1}))))},Oa=gn.default=oa},"80pN":function(Fn,gn,e){"use strict";(function(U){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var t=e("MgzW"),b=e("q1tI"),W=e("i8i4"),me=e("QCnb");function H(p){for(var F="https://reactjs.org/docs/error-decoder.html?invariant="+p,K=1;K<arguments.length;K++)F+="&args[]="+encodeURIComponent(arguments[K]);return"Minified React error #"+p+"; visit "+F+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ln=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;ln.hasOwnProperty("ReactCurrentDispatcher")||(ln.ReactCurrentDispatcher={current:null}),ln.hasOwnProperty("ReactCurrentBatchConfig")||(ln.ReactCurrentBatchConfig={suspense:null});function Ne(p){var F=p,K=p;if(p.alternate)for(;F.return;)F=F.return;else{p=F;do F=p,(F.effectTag&1026)!=0&&(K=F.return),p=F.return;while(p)}return F.tag===3?K:null}function ge(p){if(Ne(p)!==p)throw Error(H(188))}function We(p){var F=p.alternate;if(!F){if(F=Ne(p),F===null)throw Error(H(188));return F!==p?null:p}for(var K=p,le=F;;){var ee=K.return;if(ee===null)break;var Ee=ee.alternate;if(Ee===null){if(le=ee.return,le!==null){K=le;continue}break}if(ee.child===Ee.child){for(Ee=ee.child;Ee;){if(Ee===K)return ge(ee),p;if(Ee===le)return ge(ee),F;Ee=Ee.sibling}throw Error(H(188))}if(K.return!==le.return)K=ee,le=Ee;else{for(var $e=!1,Ue=ee.child;Ue;){if(Ue===K){$e=!0,K=ee,le=Ee;break}if(Ue===le){$e=!0,le=ee,K=Ee;break}Ue=Ue.sibling}if(!$e){for(Ue=Ee.child;Ue;){if(Ue===K){$e=!0,K=Ee,le=ee;break}if(Ue===le){$e=!0,le=Ee,K=ee;break}Ue=Ue.sibling}if(!$e)throw Error(H(189))}}if(K.alternate!==le)throw Error(H(190))}if(K.tag!==3)throw Error(H(188));return K.stateNode.current===K?p:F}function Pe(){return!0}function yn(){return!1}function wn(p,F,K,le){this.dispatchConfig=p,this._targetInst=F,this.nativeEvent=K,p=this.constructor.Interface;for(var ee in p)p.hasOwnProperty(ee)&&((F=p[ee])?this[ee]=F(K):ee==="target"?this.target=le:this[ee]=K[ee]);return this.isDefaultPrevented=(K.defaultPrevented!=null?K.defaultPrevented:K.returnValue===!1)?Pe:yn,this.isPropagationStopped=yn,this}t(wn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var p=this.nativeEvent;p&&(p.preventDefault?p.preventDefault():typeof p.returnValue!="unknown"&&(p.returnValue=!1),this.isDefaultPrevented=Pe)},stopPropagation:function(){var p=this.nativeEvent;p&&(p.stopPropagation?p.stopPropagation():typeof p.cancelBubble!="unknown"&&(p.cancelBubble=!0),this.isPropagationStopped=Pe)},persist:function(){this.isPersistent=Pe},isPersistent:yn,destructor:function(){var p=this.constructor.Interface,F;for(F in p)this[F]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=yn,this._dispatchInstances=this._dispatchListeners=null}}),wn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(p){return p.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},wn.extend=function(p){function F(){}function K(){return le.apply(this,arguments)}var le=this;F.prototype=le.prototype;var ee=new F;return t(ee,K.prototype),K.prototype=ee,K.prototype.constructor=K,K.Interface=t({},le.Interface,p),K.extend=le.extend,Qe(K),K},Qe(wn);function Rn(p,F,K,le){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,p,F,K,le),ee}return new this(p,F,K,le)}function pn(p){if(!(p instanceof this))throw Error(H(279));p.destructor(),10>this.eventPool.length&&this.eventPool.push(p)}function Qe(p){p.eventPool=[],p.getPooled=Rn,p.release=pn}var Wn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Mn(p,F){var K={};return K[p.toLowerCase()]=F.toLowerCase(),K["Webkit"+p]="webkit"+F,K["Moz"+p]="moz"+F,K}var jn={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionend:Mn("Transition","TransitionEnd")},Me={},kn={};Wn&&(kn=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function Ln(p){if(Me[p])return Me[p];if(!jn[p])return p;var F=jn[p],K;for(K in F)if(F.hasOwnProperty(K)&&K in kn)return Me[p]=F[K];return p}var qn=Ln("animationend"),_n=Ln("animationiteration"),et=Ln("animationstart"),st=Ln("transitionend"),Vn=null;function I(p){if(Vn===null)try{var F=("require"+Math.random()).slice(0,7);Vn=(U&&U[F])("timers").setImmediate}catch(K){Vn=function(le){var ee=new MessageChannel;ee.port1.onmessage=le,ee.port2.postMessage(void 0)}}return Vn(p)}var N=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,A=N[11],u=N[12],o=W.unstable_batchedUpdates,f=ln.IsSomeRendererActing,g=typeof me.unstable_flushAllWithoutAsserting=="function",S=me.unstable_flushAllWithoutAsserting||function(){for(var p=!1;A();)p=!0;return p};function a(p){try{S(),I(function(){S()?a(p):p()})}catch(F){p(F)}}var l=0,i=!1,M=W.findDOMNode,w=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,j=w[0],d=w[4],E=w[5],m=w[6],n=w[7],v=w[8],c=w[9],D=w[10];function T(){}function L(p,F){if(!p)return[];if(p=We(p),!p)return[];for(var K=p,le=[];;){if(K.tag===5||K.tag===6||K.tag===1||K.tag===0){var ee=K.stateNode;F(ee)&&le.push(ee)}if(K.child)K.child.return=K,K=K.child;else{if(K===p)return le;for(;!K.sibling;){if(!K.return||K.return===p)return le;K=K.return}K.sibling.return=K.return,K=K.sibling}}}function V(p,F){if(p&&!p._reactInternalFiber){var K=""+p;throw p=Array.isArray(p)?"an array":p&&p.nodeType===1&&p.tagName?"a DOM node":K==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":K,Error(H(286,F,p))}}var x={renderIntoDocument:function(p){var F=document.createElement("div");return W.render(p,F)},isElement:function(p){return b.isValidElement(p)},isElementOfType:function(p,F){return b.isValidElement(p)&&p.type===F},isDOMComponent:function(p){return!(!p||p.nodeType!==1||!p.tagName)},isDOMComponentElement:function(p){return!!(p&&b.isValidElement(p)&&p.tagName)},isCompositeComponent:function(p){return x.isDOMComponent(p)?!1:p!=null&&typeof p.render=="function"&&typeof p.setState=="function"},isCompositeComponentWithType:function(p,F){return x.isCompositeComponent(p)?p._reactInternalFiber.type===F:!1},findAllInRenderedTree:function(p,F){return V(p,"findAllInRenderedTree"),p?L(p._reactInternalFiber,F):[]},scryRenderedDOMComponentsWithClass:function(p,F){return V(p,"scryRenderedDOMComponentsWithClass"),x.findAllInRenderedTree(p,function(K){if(x.isDOMComponent(K)){var le=K.className;typeof le!="string"&&(le=K.getAttribute("class")||"");var ee=le.split(/\s+/);if(!Array.isArray(F)){if(F===void 0)throw Error(H(11));F=F.split(/\s+/)}return F.every(function(Ee){return ee.indexOf(Ee)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(p,F){if(V(p,"findRenderedDOMComponentWithClass"),p=x.scryRenderedDOMComponentsWithClass(p,F),p.length!==1)throw Error("Did not find exactly one match (found: "+p.length+") for class:"+F);return p[0]},scryRenderedDOMComponentsWithTag:function(p,F){return V(p,"scryRenderedDOMComponentsWithTag"),x.findAllInRenderedTree(p,function(K){return x.isDOMComponent(K)&&K.tagName.toUpperCase()===F.toUpperCase()})},findRenderedDOMComponentWithTag:function(p,F){if(V(p,"findRenderedDOMComponentWithTag"),p=x.scryRenderedDOMComponentsWithTag(p,F),p.length!==1)throw Error("Did not find exactly one match (found: "+p.length+") for tag:"+F);return p[0]},scryRenderedComponentsWithType:function(p,F){return V(p,"scryRenderedComponentsWithType"),x.findAllInRenderedTree(p,function(K){return x.isCompositeComponentWithType(K,F)})},findRenderedComponentWithType:function(p,F){if(V(p,"findRenderedComponentWithType"),p=x.scryRenderedComponentsWithType(p,F),p.length!==1)throw Error("Did not find exactly one match (found: "+p.length+") for componentType:"+F);return p[0]},mockComponent:function(p,F){return F=F||p.mockTagName||"div",p.prototype.render.mockImplementation(function(){return b.createElement(F,null,this.props.children)}),this},nativeTouchData:function(p,F){return{touches:[{pageX:p,pageY:F}]}},Simulate:null,SimulateNative:{},act:function(p){function F(){l--,f.current=K,u.current=le}i===!1&&(i=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),l++;var K=f.current,le=u.current;f.current=!0,u.current=!0;try{var ee=o(p)}catch(Ee){throw F(),Ee}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(Ee,$e){ee.then(function(){1<l||g===!0&&K===!0?(F(),Ee()):a(function(Ue){F(),Ue?$e(Ue):Ee()})},function(Ue){F(),$e(Ue)})}};try{l!==1||g!==!1&&K!==!1||S(),F()}catch(Ee){throw F(),Ee}return{then:function(Ee){Ee()}}}};function ae(p){return function(F,K){if(b.isValidElement(F))throw Error(H(228));if(x.isCompositeComponent(F))throw Error(H(229));var le=d[p],ee=new T;ee.target=F,ee.type=p.toLowerCase();var Ee=j(F),$e=new wn(le,Ee,ee,F);$e.persist(),t($e,K),le.phasedRegistrationNames?E($e):m($e),W.unstable_batchedUpdates(function(){n(F),D($e)}),v()}}x.Simulate={};for(var Ge in d)x.Simulate[Ge]=ae(Ge);function tn(p,F){return function(K,le){var ee=new T(p);t(ee,le),x.isDOMComponent(K)?(K=M(K),ee.target=K,c(F,1,document,ee)):K.tagName&&(ee.target=K,c(F,1,document,ee))}}[["abort","abort"],[qn,"animationEnd"],[_n,"animationIteration"],[et,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[st,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(p){var F=p[1];x.SimulateNative[F]=tn(F,p[0])}),U.exports=x.default||x}).call(this,e("hOG+")(Fn))},JjdP:function(Fn,gn,e){"use strict";e.r(gn);var U=e("9og8"),t=e("WmNS"),b=e.n(t),W=e("LtsZ"),me=`import React, { useRef } from 'react';
import { CardList, Search, TableContainer, useTable } from 'card-render';
import {
  PlusOutlined,
  EllipsisOutlined,
  SettingOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import request from 'umi-request';

// \u53EF\u4EE5\u4F7F\u7528schema\u7F16\u8F91\u5668\u914D\u7F6E https://form-render.github.io/schema-generator/
const schema = {
  type: 'object',
  properties: {
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u72B6\u6001',
    dataIndex: 'state',
    enum: {
      open: '\u672A\u89E3\u51B3',
      closed: '\u5DF2\u89E3\u51B3',
    },
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: row => (
      <a
        href="https://x-render.gitee.io/form-render/"
        target="_blank"
        rel="noopener noreferrer"
      >
        \u67E5\u770B
      </a>
    ),
  },
];

const searchApi = params => {
  params.pageSize = 2;
  return request
    .get(
      'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/getCardList',
      { params }
    )
    .then(res => {
      console.log('response:', res);
      if (res && res.data) {
        return {
          rows: res.data,
          total: res.data.length,
          pageSize: res.data.pageSize || 2,
        }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
      }
    })
    .catch(e => console.log('Oops, error', e));
};

const searchArr = [
  {
    name: '\u6211\u7684\u6570\u636E',
    api: searchApi,
  },
  {
    name: '\u5168\u90E8\u6570\u636E',
    api: searchApi,
  },
];

// const cardRenderOptions = {
//   type: 'default',
//   header: {
//     title: 'title',
//     extra: (card, index) => (
//       <a
//         onClick={e => {
//           e.stopPropagation();
//         }}
//       >
//         action
//       </a>
//     ),
//   },
//   content: {
//     description: 'description',
//     list: ['creator', 'createTime'],
//     remark: 'remark',
//   },
// };

const cardRenderOptions = {
  type: 'image',
  cover: 'imgUrl',
  // cover: {
  //   dataIndex: 'imgUrl',
  //   width: 100,
  //   height: 100
  // },
  header: {
    title: (card, index) => card.title,
  },
  content: {
    description: (card, index) => card.description,
    // list: ['creator', 'createTime'],
    list: [
      {
        title: '\u521B\u5EFA\u4EBA',
        render: card => card.creator,
      },
      {
        title: '\u521B\u5EFA\u65F6\u95F4',
        dataIndex: 'createTime',
      },
    ],
    remark: 'remark',
  },
  footer: (card, idx) => [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ],
};

const Demo = () => {
  const tableRef = useRef();
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <TableContainer ref={tableRef} searchApi={searchArr}>
        <Search schema={schema} />
        <CardList
          // onCardClick={(item, idx) => alert(JSON.stringify(item))}
          cardRender={cardRenderOptions}
          paginationOptions={{ size: 'small' }}
          toolbarRender={() => [
            <Button
              key="primary"
              type="primary"
              onClick={() => alert('table-render\uFF01')}
            >
              <PlusOutlined />
              \u521B\u5EFA
            </Button>,
          ]}
          toolbarAction
        />
      </TableContainer>
    </div>
  );
};

export default Demo;`,H=`import { get, set, cloneDeep } from 'lodash-es';

// \u540E\u9762\u4E09\u4E2A\u53C2\u6570\u90FD\u662F\u5185\u90E8\u9012\u5F52\u4F7F\u7528\u7684\uFF0C\u5C06schema\u7684\u6811\u5F62\u7ED3\u6784\u6241\u5E73\u5316\u6210\u4E00\u5C42, \u6BCF\u4E2Aitem\u7684\u7ED3\u6784
// {
//   parent: '#',
//   schema: ...,
//   children: []
// }

// TODO: \u53D1\u5E03\u540E\u53BB\u6389
window.log1 = value => {
  console.log('%ccommon:', 'color: #00A7F7; font-weight: 500;', value);
};

window.log2 = value => {
  console.log('%cwarning:', 'color: #f50; font-weight: 500;', value);
};

window.log3 = value => {
  console.log('%csuccess:', 'color: #87d068; font-weight: 500;', value);
};

window.log4 = value => {
  console.log('%cspecial:', 'color: #722ed1; font-weight: 500;', value);
};

export function isUrl(string) {
  const protocolRE = /^(?:\\w+:)?\\/\\/(\\S+)$/;
  // const domainRE = /^[^\\s\\.]+\\.\\S{2,}$/;
  if (typeof string !== 'string') return false;
  return protocolRE.test(string);
}

export function isCheckBoxType(schema, readOnly) {
  if (readOnly) return false;
  if (schema.widget === 'checkbox') return true;
  if (schema && schema.type === 'boolean') {
    if (schema.enum) return false;
    if (schema.widget === undefined) return true;
    return false;
  }
}

// a[].b.c => a.b.c
function removeBrackets(string) {
  if (typeof string === 'string') {
    return string.replace(/\\[\\]/g, '');
  } else {
    return string;
  }
}

export function getParentPath(path) {
  if (typeof path === 'string') {
    const pathArr = path.split('.');
    if (pathArr.length === 1) {
      return '#';
    }
    pathArr.pop();
    return pathArr.join('.');
  }
  return '#';
}

export function getValueByPath(formData, path) {
  if (path === '#' || !path) {
    return formData || {};
  } else if (typeof path === 'string') {
    return get(formData, path);
  } else {
    console.error('path has to be a string');
  }
}

//  path: 'a.b[1].c[0]' => { id: 'a.b[].c[]'  dataIndex: [1,0] }
export function destructDataPath(path) {
  let id;
  let dataIndex;
  if (path === '#') {
    return { id: '#', dataIndex: [] };
  }
  if (typeof path !== 'string') {
    throw Error(\`path \${path} is not a string!!! Something wrong here\`);
  }
  const pattern = /\\[[0-9]+\\]/g;
  const matchList = path.match(pattern);
  if (!matchList) {
    id = path;
  } else {
    id = path.replace(pattern, '[]');
    // \u8FD9\u4E2A\u662Fmatch\u4E0B\u6765\u7684\u7ED3\u679C\uFF0C\u53EF\u5B89\u5168\u5904\u7406
    dataIndex = matchList.map(item =>
      Number(item.substring(1, item.length - 1))
    );
  }
  return { id, dataIndex };
}

// id: 'a.b[].c[]'  dataIndex: [1,0] =>  'a.b[1].c[0]'
export function getDataPath(id, dataIndex) {
  if (id === '#') {
    return id;
  }
  if (typeof id !== 'string') {
    throw Error(\`id \${id} is not a string!!! Something wrong here\`);
  }
  let _id = id;
  if (Array.isArray(dataIndex)) {
    // const matches = id.match(/\\[\\]/g) || [];
    // const count = matches.length;
    dataIndex.forEach(item => {
      _id = _id.replace(/\\[\\]/, \`[\${item}]\`);
    });
  }
  return removeBrackets(_id);
}

export function isObjType(schema) {
  return schema && schema.type === 'object' && schema.properties;
}

// TODO: \u652F\u6301\u975E\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u9879
export function isListType(schema) {
  return (
    schema &&
    schema.type === 'array' &&
    isObjType(schema.items) &&
    schema.enum === undefined
  );
}

// TODO: \u68C0\u9A8C\u662F\u5426\u4E22\u8FDB\u53BB\u5404\u79CDschema\u90FD\u80FD\u515C\u5E95\u4E0D\u4F1Acrash
export function flattenSchema(_schema = {}, name = '#', parent, result = {}) {
  const schema = clone(_schema); // TODO: \u662F\u5426\u9700\u8981deepClone\uFF0C\u8FD9\u4E2A\u82B1\u8D39\u662F\u4E0D\u662F\u6709\u70B9\u5927
  let _name = name;
  if (!schema.$id) {
    schema.$id = _name; // \u7ED9\u751F\u6210\u7684schema\u6DFB\u52A0\u4E00\u4E2A\u552F\u4E00\u6807\u8BC6\uFF0C\u65B9\u4FBF\u4ECEschema\u4E2D\u76F4\u63A5\u8BFB\u53D6
  }
  const children = [];
  if (isObjType(schema)) {
    Object.entries(schema.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    // schema.properties = {};
  }
  if (isListType(schema)) {
    Object.entries(schema.items.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    // schema.items.properties = {};
  }

  const rules = Array.isArray(schema.rules) ? [...schema.rules] : [];
  if (['boolean', 'function', 'string'].indexOf(typeof schema.required) > -1) {
    rules.push({ required: schema.required }); // TODO: \u4E07\u4E00\u5185\u90E8\u5DF2\u7ECF\u7528\u91CD\u590D\u7684required\u89C4\u5219\uFF1F
  }

  if (schema.type) {
    // Check: \u4E3A\u5565\u4E00\u5B9A\u8981\u6709type\uFF1F
    // TODO: \u6CA1\u6709\u60F3\u597D validation \u7684\u90E8\u5206
    result[_name] = { parent, schema: schema, children, rules };
  }
  return result;
}

//////////   old

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

export const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u514B\u9686\u5BF9\u8C61
// function clone1(data) {
//   // data = functionToString(data);
//   try {
//     return JSON.parse(JSON.stringify(data));
//   } catch (e) {
//     return data;
//   }
// }

export const clone = cloneDeep;
// export const clone = clone1;

// export const functionToString = data => {
//   let result;
//   if (isObject(data)) {
//     result = {};
//     Object.keys(data).forEach(key => {
//       result[key] = functionToString(data[key]);
//     });
//     return result;
//   } else if (typeof data === 'function') {
//     return result.toString();
//   }
//   return data;
// };

// '3' => true, 3 => true, undefined => false
export function isLooselyNumber(num) {
  if (typeof num === 'number') return true;
  if (typeof num === 'string') {
    return !Number.isNaN(Number(num));
  }
  return false;
}

export function isCssLength(str) {
  if (typeof str !== 'string') return false;
  return str.match(/^([0-9])*(%|px|rem|em)$/i);
}

// \u6DF1\u5EA6\u5BF9\u6BD4
export function isDeepEqual(param1, param2) {
  if (param1 === undefined && param2 === undefined) return true;
  else if (param1 === undefined || param2 === undefined) return false;
  if (param1 === null && param2 === null) return true;
  else if (param1 === null || param2 === null) return false;
  else if (param1.constructor !== param2.constructor) return false;

  if (param1.constructor === Array) {
    if (param1.length !== param2.length) return false;
    for (let i = 0; i < param1.length; i++) {
      if (param1[i].constructor === Array || param1[i].constructor === Object) {
        if (!isDeepEqual(param1[i], param2[i])) return false;
      } else if (param1[i] !== param2[i]) return false;
    }
  } else if (param1.constructor === Object) {
    if (Object.keys(param1).length !== Object.keys(param2).length) return false;
    for (let i = 0; i < Object.keys(param1).length; i++) {
      const key = Object.keys(param1)[i];
      if (
        param1[key] &&
        typeof param1[key] !== 'number' &&
        (param1[key].constructor === Array ||
          param1[key].constructor === Object)
      ) {
        if (!isDeepEqual(param1[key], param2[key])) return false;
      } else if (param1[key] !== param2[key]) return false;
    }
  } else if (param1.constructor === String || param1.constructor === Number) {
    return param1 === param2;
  }
  return true;
}

// \u65F6\u95F4\u7EC4\u4EF6
export function getFormat(format) {
  let dateFormat;
  switch (format) {
    case 'date':
      dateFormat = 'YYYY-MM-DD';
      break;
    case 'time':
      dateFormat = 'HH:mm:ss';
      break;
    case 'dateTime':
      dateFormat = 'YYYY-MM-DD HH:mm:ss';
      break;
    case 'week':
      dateFormat = 'YYYY-w';
      break;
    case 'year':
      dateFormat = 'YYYY';
      break;
    case 'quarter':
      dateFormat = 'YYYY-Q';
      break;
    case 'month':
      dateFormat = 'YYYY-MM';
      break;
    default:
      // dateTime
      if (typeof format === 'string') {
        dateFormat = format;
      } else {
        dateFormat = 'YYYY-MM-DD';
      }
  }
  return dateFormat;
}

export function hasRepeat(list) {
  return list.find(
    (x, i, self) =>
      i !== self.findIndex(y => JSON.stringify(x) === JSON.stringify(y))
  );
}

// ----------------- schema \u76F8\u5173

// \u5408\u5E76propsSchema\u548CUISchema\u3002\u7531\u4E8E\u4E24\u8005\u7684\u903B\u8F91\u76F8\u5173\u6027\uFF0C\u5408\u5E76\u4E3A\u4E00\u4E2A\u5927schema\u80FD\u7B80\u5316\u5185\u90E8\u5904\u7406
export function combineSchema(propsSchema = {}, uiSchema = {}) {
  const propList = getChildren(propsSchema);
  const newList = propList.map(p => {
    const { name } = p;
    const { type, enum: options, properties, items } = p.schema;
    const isObj = type === 'object' && properties;
    const isArr = type === 'array' && items && !options; // enum + array \u4EE3\u8868\u7684\u591A\u9009\u6846\uFF0C\u6CA1\u6709sub
    const ui = name && uiSchema[p.name];
    if (!ui) {
      return p;
    }
    // \u5982\u679C\u662Flist\uFF0C\u9012\u5F52\u5408\u5E76items
    if (isArr) {
      const newItems = combineSchema(items, ui.items || {});
      return { ...p, schema: { ...p.schema, ...ui, items: newItems } };
    }
    // object\u9012\u5F52\u5408\u5E76\u6574\u4E2Aschema
    if (isObj) {
      const newSchema = combineSchema(p.schema, ui);
      return { ...p, schema: newSchema };
    }
    return { ...p, schema: { ...p.schema, ...ui } };
  });

  const newObj = {};
  newList.forEach(s => {
    newObj[s.name] = s.schema;
  });

  const topLevelUi = {};
  Object.keys(uiSchema).forEach(key => {
    if (typeof key === 'string' && key.substring(0, 3) === 'ui:') {
      topLevelUi[key] = uiSchema[key];
    }
  });
  if (isEmpty(newObj)) {
    return { ...propsSchema, ...topLevelUi };
  }
  return { ...propsSchema, ...topLevelUi, properties: newObj };
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// \u83B7\u5F97propsSchema\u7684children
function getChildren(schema) {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

// \u5408\u5E76\u591A\u4E2Aschema\u6811\uFF0C\u6BD4\u5982\u4E00\u4E2Aschema\u7684\u6811\u8282\u70B9\u662F\u53E6\u4E00\u4E2Aschema
export function combine() {}

// \u4EE3\u66FFeval\u7684\u51FD\u6570
export const parseString = string =>
  Function('"use strict";return (' + string + ')')();

// \u89E3\u6790\u51FD\u6570\u5B57\u7B26\u4E32\u503C
export const evaluateString = (string, formData, rootValue) =>
  Function(\`"use strict";
    const rootValue = \${JSON.stringify(rootValue)};
    const formData = \${JSON.stringify(formData)};
    return (\${string})\`)();

// \u5224\u65ADschema\u7684\u503C\u662F\u662F\u5426\u662F\u201C\u51FD\u6570\u201D
// JSON\u65E0\u6CD5\u4F7F\u7528\u51FD\u6570\u503C\u7684\u53C2\u6570\uFF0C\u6240\u4EE5\u4F7F\u7528"{{...}}"\u6765\u6807\u8BB0\u4E3A\u51FD\u6570\uFF0C\u4E5F\u53EF\u4F7F\u7528@\u6807\u8BB0\uFF0C\u4E0D\u63A8\u8350\u3002
export function isExpression(func) {
  // if (typeof func === 'function') {
  //   const funcString = func.toString();
  //   return (
  //     funcString.indexOf('formData') > -1 ||
  //     funcString.indexOf('rootValue') > -1
  //   );
  // }
  // \u4E0D\u518D\u5141\u8BB8\u51FD\u6570\u5F0F\u7684\u8868\u8FBE\u5F0F\u4E86\uFF01
  if (typeof func !== 'string') return false;
  // \u8FD9\u6837\u7684pattern {{.....}}
  const pattern = /^{{(.+)}}$/;
  const reg1 = /^{{(function.+)}}$/;
  const reg2 = /^{{(.+=>.+)}}$/;
  if (
    typeof func === 'string' &&
    func.match(pattern) &&
    !func.match(reg1) &&
    !func.match(reg2)
  ) {
    return true;
  }
  return false;
}

export function parseSingleExpression(func, formData = {}, dataPath) {
  const parentPath = getParentPath(dataPath);
  const parent = getValueByPath(formData, parentPath) || {};
  if (typeof func === 'string') {
    const funcBody = func.substring(2, func.length - 2);
    const str = \`
    return \${funcBody
      .replace(/formData/g, JSON.stringify(formData))
      .replace(/rootValue/g, JSON.stringify(parent))}\`;

    try {
      return Function(str)();
    } catch (error) {
      console.log(error, func, dataPath);
      return func;
    }
    // const funcBody = func.substring(2, func.length - 2);
    // //TODO: \u8FD9\u6837\u6709\u95EE\u9898\uFF0C\u4F8B\u5982 a.b.indexOf(), \u4F1A\u628A a.b.indexOf \u5F53\u505A\u503C
    // const match1 = /formData.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const match2 = /rootValue.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const str = \`
    // return (\${funcBody
    //   .replaceAll(match1, (v, m1) =>
    //     JSON.stringify(getValueByPath(formData, m1))
    //   )
    //   .replaceAll(match2, (v, m1) =>
    //     JSON.stringify(getValueByPath(parent, m1))
    //   )})\`;
    // try {
    //   return Function(str)();
    // } catch (error) {
    //   console.log(error);
    //   return func;
    // }
  } else return func;
}

export const schemaContainsExpression = (schema, shallow = true) => {
  if (isObject(schema)) {
    return Object.keys(schema).some(key => {
      const value = schema[key];
      if (typeof value === 'string') {
        return isExpression(value);
      } else if (
        typeof key === 'string' &&
        key.toLowerCase().indexOf('props') > -1
      ) {
        const propsObj = schema[key];
        if (isObject(propsObj)) {
          return Object.keys(propsObj).some(k => {
            return isExpression(propsObj[k]);
          });
        }
      } else if (!shallow && isObject(value)) {
        return schemaContainsExpression(value, false);
      }
      return false;
    });
  } else {
    return false;
  }
};

// TODO: \u4E24\u4E2A\u4F18\u5316\uFF0C1. \u53EF\u4EE5\u901A\u8FC7\u8868\u8FBE\u5F0F\u7684path\u6765\u5224\u65AD\uFF0C\u907F\u514D\u4E00\u4E9B\u91CD\u590D\u8BA1\u7B97
export const parseAllExpression = (_schema, formData, dataPath) => {
  const schema = clone(_schema);
  Object.keys(schema).forEach(key => {
    const value = schema[key];
    if (isObject(value)) {
      // TODO: dataPath \u8FD9\u8FB9\u8981\u5904\u7406\u4E00\u4E0B\uFF0C\u5426\u5219rootValue\u7C7B\u7684\u6CA1\u6709\u6548\u679C
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseSingleExpression(value, formData, dataPath);
      // console.log(
      //   formData.materialType,
      //   dataPath,
      //   parseSingleExpression(value, formData, dataPath)
      // );
    } else if (
      typeof key === 'string' &&
      key.toLowerCase().indexOf('props') > -1
    ) {
      // \u6709\u53EF\u80FD\u53EB xxxProps
      const propsObj = schema[key];
      if (isObject(propsObj)) {
        Object.keys(propsObj).forEach(k => {
          schema[key][k] = parseSingleExpression(
            propsObj[k],
            formData,
            dataPath
          );
        });
      }
    }
  });
  return schema;
};

// \u5224\u65ADschema\u4E2D\u662F\u5426\u6709\u5C5E\u6027\u503C\u662F\u51FD\u6570\u8868\u8FBE\u5F0F
export function isFunctionSchema(schema) {
  return Object.keys(schema).some(key => {
    if (typeof schema[key] === 'function') {
      return true;
    } else if (typeof schema[key] === 'string') {
      return isExpression(schema[key]);
    } else if (typeof schema[key] === 'object') {
      return isFunctionSchema(schema[key]);
    } else {
      return false;
    }
  });
}

// \u4F8B\u5982\u5F53\u524Ditem\u7684id = '#/obj/input'  propName: 'ui:labelWidth' \u5F80\u4E0A\u4E00\u76F4\u627E\uFF0C\u76F4\u5230\u627E\u5230\u7B2C\u4E00\u4E2A\u4E0D\u662Fundefined\u7684\u503C TODO: \u770B\u770B\u662F\u5426ok
export const getParentProps = (propName, id, flatten) => {
  try {
    const item = flatten[id];
    if (item.schema[propName] !== undefined) return item.schema[propName];
    if (item && item.parent) {
      const parentSchema = flatten[item.parent].schema;
      if (parentSchema[propName] !== undefined) {
        return parentSchema[propName];
      } else {
        return getParentProps(propName, item.parent, flatten);
      }
    }
  } catch (error) {
    return undefined;
  }
};

export const getSaveNumber = () => {
  const searchStr = localStorage.getItem('SAVES');
  if (searchStr) {
    try {
      const saves = JSON.parse(searchStr);
      const length = saves.length;
      if (length) return length + 1;
    } catch (error) {
      return 1;
    }
  } else {
    return 1;
  }
};

export function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ')')();
}

// \u83B7\u5F97propsSchema\u7684children
function getChildren2(schema) {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items.properties;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

export const oldSchemaToNew = schema => {
  if (schema && schema.propsSchema) {
    const { propsSchema, ...rest } = schema;
    return { schema: propsSchema, ...rest };
  }
  return schema;
};

export const newSchemaToOld = setting => {
  if (setting && setting.schema) {
    const { schema, ...rest } = setting;
    return { propsSchema: schema, ...rest };
  }
  return setting;
};

// from FR

export const getEnum = schema => {
  if (!schema) return undefined;
  const itemEnum = schema && schema.items && schema.items.enum;
  const schemaEnum = schema && schema.enum;
  return itemEnum ? itemEnum : schemaEnum;
};

export const getArray = (arr, defaultValue = []) => {
  if (Array.isArray(arr)) return arr;
  return defaultValue;
};

export const isEmail = value => {
  const regex = '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$';
  if (value && new RegExp(regex).test(value)) {
    return true;
  }
  return false;
};

export function defaultGetValueFromEvent(valuePropName, ...args) {
  const event = args[0];
  if (event && event.target && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}

export const getKeyFromPath = path => {
  try {
    const keyList = path.split('.');
    const last = keyList.slice(-1)[0];
    return last;
  } catch (error) {
    console.error(error, 'getKeyFromPath');
    return '';
  }
};

// \u66F4\u591A\u7684\u503C\u83B7\u53D6
export const getDisplayValue = (value, schema) => {
  if (typeof value === 'boolean') {
    return value ? 'yes' : 'no';
  }
  if (isObjType(schema) || isListType(schema)) {
    return '-';
  }
  if (Array.isArray(schema.enum) && Array.isArray(schema.enumNames)) {
    try {
      return schema.enumNames[schema.enum.indexOf(value)];
    } catch (error) {
      return value;
    }
  }
  return value;
};

// \u53BB\u6389\u6570\u7EC4\u91CC\u7684\u7A7A\u5143\u7D20 {a: [null, {x:1}]} => {a: [{x:1}]}
export const removeEmptyItemFromList = formData => {
  let result = {};
  if (isObject(formData)) {
    Object.keys(formData).forEach(key => {
      result[key] = removeEmptyItemFromList(formData[key]);
    });
  } else if (Array.isArray(formData)) {
    result = formData.filter(item => {
      if (item && JSON.stringify(item) !== '{}') {
        return true;
      }
      return false;
    });
  } else {
    result = formData;
  }
  return result;
};

export const getDescriptorFromSchema = ({ schema, isRequired = true }) => {
  let result = {};
  let singleResult = {};
  if (schema.hidden === true) return { validator: () => true };
  if (isObjType(schema)) {
    result.type = 'object';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    result.fields = {};
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else if (isListType(schema)) {
    result.type = 'array';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    if (typeof schema.min === 'number') {
      result.min = schema.min;
    }
    if (typeof schema.max === 'number') {
      result.max = schema.max;
    }
    result.defaultField = { type: 'object', fields: {} }; // \u76EE\u524D\u5C31\u9ED8\u8BA4\u53EA\u6709object\u7C7B\u578B\u7684 TODO:
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.defaultField.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else {
    // \u5355\u4E2A\u7684\u903B\u8F91
    const processRule = item => {
      if (schema.type) return { ...item, type: schema.type };
      if (item.pattern && typeof item.pattern === 'string') {
        return { ...item, pattern: new RegExp(item.pattern) };
      }
      return item;
    };
    const { required, ...rest } = schema;

    ['type', 'pattern', 'min', 'max', 'len'].forEach(key => {
      if (Object.keys(rest).indexOf(key) > -1) {
        singleResult[key] = rest[key];
      }
    });

    switch (schema.type) {
      case 'range':
        // \u6682\u65F6\u5148\u53BB\u6389\uFF0C\u5E94\u8BE5\u6CA1\u4E8B\u4E86\uFF0C\u5728range\u7EC4\u4EF6\u7684\u6E90\u5934\u4E0A\u628A\u5947\u602A\u7684case\u5E72\u6389\u4E86
        // const rangeValidator = {
        //   validator: (rule, value) => {
        //     const rangeRequired = schema.required === true && isRequired;
        //     // range\u7EC4\u4EF6\u70B9\u51FBclear\uFF0C\u4F1A\u53D8\u6210 ['','']
        //     // range\u7EC4\u4EF6\u5BF9\u5E94\u7684\u503Cbind\u7684\u65F6\u5019\uFF0C\u4F1A\u53D8\u6210 [undefined,undefined]
        //     const notValid1 = value[0] === '' && value[1] === '';
        //     const notValid2 = value[0] === undefined && value[1] === undefined;
        //     if (rangeRequired) {
        //       if (!value) return false;
        //       if (Array.isArray(value)) {
        //         if (notValid1 || notValid2) {
        //           return false;
        //         }
        //         return true;
        //       }
        //       return true;
        //     } else {
        //       return true;
        //     }
        //   },
        //   type: 'array',
        //   message: '\${title}\u5FC5\u586B',
        // };
        // singleResult = rangeValidator;
        singleResult.type = 'array';
        break;
      case 'html':
        singleResult.type = 'string';
        break;
      default:
        break;
    }
    switch (schema.format) {
      case 'email':
      case 'url':
        singleResult.type = schema.format;
        break;
      default:
        break;
    }

    let requiredRule;
    if (isRequired && schema.required === true) {
      requiredRule = { required: true, type: singleResult.type || 'string' };
    }

    if (schema.rules) {
      if (Array.isArray(schema.rules)) {
        const _rules = [];
        schema.rules.forEach(item => {
          if (item.required === true) {
            if (isRequired) {
              requiredRule = item;
            }
          } else {
            _rules.push(processRule(item));
          }
        });
        result = [singleResult, ..._rules];
      } else if (isObject(schema.rules)) {
        // TODO: \u89C4\u8303\u4E0A\u4E0D\u5141\u8BB8rules\u662Fobject\uFF0C\u7701\u4E00\u70B9\u4E8B\u513F
        result = [singleResult, processRule(schema.rules)];
      } else {
        result = singleResult;
      }
    } else {
      result = singleResult;
    }

    if (requiredRule) {
      if (Array.isArray(result)) {
        result.push(requiredRule);
      } else if (isObject(result)) {
        result = [result, requiredRule];
      }
    }

    if (schema.format === 'image') {
      const imgValidator = {
        validator: (rule, value) => {
          const pattern = /([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;
          if (!value) return true; // \u8FD9\u91CC\u5224\u65AD\u5BBD\u4E00\u70B9\uFF0Cundefined\u3001null\u3001'' \u90FD\u5F53\u505A\u6CA1\u6709\u586B\u5199
          return !!pattern.exec(value) || isUrl(value);
        },
        message: '\${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage',
      };
      if (Array.isArray(result)) {
        result.push(imgValidator);
      } else if (isObject(result)) {
        result = [result, imgValidator];
      }
    }
  }
  return result;
};

// async-validator \u4EA7\u51FA\u7684path\u6CA1\u6CD5\u7528\uFF0C\u8F6C\u4E00\u4E0B
// "list.1.userName" => "list[1].userName"
export const formatPathFromValidator = err => {
  const errArr = err.split('.');
  return errArr
    .map(item => {
      if (isNaN(Number(item))) {
        return item;
      } else {
        return \`[\${item}]\`;
      }
    })
    .reduce((a, b) => {
      if (b[0] === '[' || a === '') {
        return a + b;
      } else {
        return a + '.' + b;
      }
    }, '');
};

// schema = {
//   type: 'object',
//   properties: {
//     x: {
//       type: 'object',
//       properties: {
//         y: {
//           type: 'string',
//           required: true,
//         },
//       },
//     },
//   },
// };
// path = 'x.y'
// return {required: true, message?: 'xxxx'}
export const isPathRequired = (path, schema) => {
  let pathArr = path.split('.');
  while (pathArr.length > 0) {
    let [_path, ...rest] = pathArr;
    _path = _path.split('[')[0];
    let childSchema;
    if (isObjType(schema)) {
      childSchema = schema.properties[_path];
    } else if (isListType(schema)) {
      childSchema = schema.items.properties[_path];
    }
    pathArr = rest;
    if (childSchema) {
      return isPathRequired(rest.join('.'), childSchema);
    }

    // \u5355\u4E2A\u7684\u903B\u8F91
    let result = { required: false };
    if (schema.required === true) {
      result.required = true;
    }
    if (schema.rules) {
      const requiredItem = schema.rules.find(item => item.required);
      if (requiredItem) {
        result = requiredItem;
      }
    }
    return result;
  }
};

// _path \u53EA\u4F9B\u5185\u90E8\u9012\u5F52\u4F7F\u7528
export const generateDataSkeleton = (schema, formData, _path = '') => {
  let result = {};
  let _formData = clone(formData);
  result = _formData;
  if (isObjType(schema)) {
    if (_formData === undefined || typeof _formData !== 'object') {
      _formData = {};
      result = {};
    }
    Object.keys(schema.properties).forEach(key => {
      const childSchema = schema.properties[key];
      const childData = _formData[key];
      const childResult = generateDataSkeleton(
        childSchema,
        childData,
        \`\${_path}.\${key}\`
      );
      result[key] = childResult;
    });
  } else if (_formData !== undefined) {
    // result = _formData;
  } else {
    if (schema.default !== undefined) {
      result = clone(schema.default);
    } else if (schema.type === 'boolean') {
      // result = false;
      result = undefined;
    } else {
      result = undefined;
    }
  }
  return result;
};

export const translateMessage = (msg, schema) => {
  if (typeof msg !== 'string') {
    return '';
  }
  if (!schema) return msg;
  msg = msg.replace('\${title}', schema.title);
  msg = msg.replace('\${type}', schema.format || schema.type);
  // \u517C\u5BB9\u4EE3\u7801
  if (typeof schema.min === 'number') {
    msg = msg.replace('\${min}', schema.min);
  }
  if (typeof schema.max === 'number') {
    msg = msg.replace('\${max}', schema.max);
  }
  if (schema.rules) {
    const minRule = schema.rules.find(r => r.min !== undefined);
    if (minRule) {
      msg = msg.replace('\${min}', minRule.min);
    }
    const maxRule = schema.rules.find(r => r.max !== undefined);
    if (maxRule) {
      msg = msg.replace('\${max}', maxRule.max);
    }
    const lenRule = schema.rules.find(r => r.len !== undefined);
    if (lenRule) {
      msg = msg.replace('\${len}', lenRule.len);
    }
    const patternRule = schema.rules.find(r => r.pattern !== undefined);
    if (patternRule) {
      msg = msg.replace('\${pattern}', patternRule.pattern);
    }
  }
  return msg;
};

// "objectName": {
//   "title": "\u5BF9\u8C61",
//   "description": "\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",
//   "type": "object",
//   "properties": {

//   }
// }

// "listName": {
//   "title": "\u5BF9\u8C61\u6570\u7EC4",
//   "description": "\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",
//   "type": "array",
//   "items": {
//     "type": "object",
//     "properties": {

//     }
//   }
// }

const changeSchema = (_schema, singleChange) => {
  let schema = clone(_schema);
  schema = singleChange(schema);
  if (isObjType(schema)) {
    let requiredKeys = [];
    if (Array.isArray(schema.required)) {
      requiredKeys = schema.required;
      delete schema.required;
    }
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      if (requiredKeys.indexOf(key) > -1) {
        item.required = true;
      }
      schema.properties[key] = changeSchema(item, singleChange);
    });
  } else if (isListType(schema)) {
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      schema.items.properties[key] = changeSchema(item, singleChange);
    });
  }
  return schema;
};

export const updateSchemaToNewVersion = schema => {
  return changeSchema(schema, updateSingleSchema);
};

const updateSingleSchema = schema => {
  try {
    schema.rules = schema.rules || [];
    schema.props = schema.props || {};
    if (schema['ui:options']) {
      schema.props = schema['ui:options'];
      delete schema['ui:options'];
    }
    if (schema.pattern) {
      const validItem = { pattern: schema.pattern };
      if (schema.message && schema.message.pattern) {
        validItem.message = schema.message.pattern;
      }
      schema.rules.push(validItem);
      delete schema.pattern;
      delete schema.message;
    }
    // min / max
    if (schema.minLength) {
      schema.min = schema.minLength;
      delete schema.minLength;
    }
    if (schema.maxLength) {
      schema.max = schema.maxLength;
      delete schema.maxLength;
    }
    if (schema.minItems) {
      schema.min = schema.minItems;
      delete schema.minItems;
    }
    if (schema.maxItems) {
      schema.max = schema.maxItems;
      delete schema.maxItems;
    }
    if (schema.step) {
      schema.props.step = schema.step;
      delete schema.step;
    }
    // ui:xxx
    if (schema['ui:className']) {
      schema.className = schema['ui:className'];
      delete schema['ui:className'];
    }
    if (schema['ui:hidden']) {
      schema.hidden = schema['ui:hidden'];
      delete schema['ui:hidden'];
    }
    if (schema['ui:readonly']) {
      schema.readOnly = schema['ui:readonly']; // \u6539\u6210\u9A7C\u5CF0\u4E86
      delete schema['ui:readonly'];
    }
    if (schema['ui:disabled']) {
      schema.disabled = schema['ui:disabled'];
      delete schema['ui:disabled'];
    }
    if (schema['ui:width']) {
      schema.width = schema['ui:width'];
      delete schema['ui:width'];
    }
    if (schema['ui:displayType']) {
      schema.displayType = schema['ui:displayType'];
      delete schema['ui:displayType'];
    }
    if (schema['ui:column']) {
      schema.column = schema['ui:column'];
      delete schema['ui:column'];
    }
    if (schema['ui:widget']) {
      schema.widget = schema['ui:widget'];
      delete schema['ui:widget'];
    }
    if (schema['ui:labelWidth']) {
      schema.labelWidth = schema['ui:labelWidth'];
      delete schema['ui:labelWidth'];
    }
    if (schema.rules && schema.rules.length === 0) {
      delete schema.rules;
    }
    if (JSON.stringify(schema.props) === '{}') {
      delete schema.props;
    }
    return schema;
  } catch (error) {
    console.error('schema\u8F6C\u6362\u5931\u8D25\uFF01', error);
    return schema;
  }
};

// \u65E7\u7248schema\u8F6C\u65B0\u7248schema
export const parseExpression = (schema, formData) => {
  let schema1 = parseRootValue(schema);
  let schema2 = replaceParseValue(schema1);
};

// \u68C0\u9A8C\u4E00\u4E2Astring\u662F function\uFF08\u4F20\u7EDF\u6D3B\u7BAD\u5934\u51FD\u6570\uFF09
export const parseFunctionString = string => {
  if (typeof string !== 'string') return false;
  const reg1 = /^{{(function.+)}}$/;
  const reg2 = /^{{(.+=>.+)}}$/;
  if (string.match(reg1)) {
    return string.match(reg1)[1];
  }
  if (string.match(reg2)) {
    return string.match(reg2)[1];
  }
  return false;
};

export const completeSchemaWithTheme = (schema = {}, theme = {}) => {
  let result = {};
  if (isObject(schema)) {
    if (schema.theme && theme[schema.theme]) {
      result = { ...schema, ...theme[schema.theme] };
    }
    Object.keys(schema).forEach(key => {
      result[key] = completeSchemaWithTheme(schema[key], theme);
    });
  } else {
    result = schema;
  }
  return result;
};

export const cleanEmpty = obj => {
  if (Array.isArray(obj)) {
    return obj
      .map(v => (v && isObject(v) ? cleanEmpty(v) : v))
      .filter(v => !(v == undefined));
  } else if (isObject(obj)) {
    return Object.entries(obj)
      .map(([k, v]) => [k, v && isObject(v) ? cleanEmpty(v) : v])
      .reduce((a, [k, v]) => (v == undefined ? a : ((a[k] = v), a)), {});
  } else {
    return obj;
  }
};

export const removeHiddenFromResult = (data, flatten) => {
  Object.keys(flatten).forEach(key => {
    const hidden = flatten[key].schema && flatten[key].schema.hidden === true; // Remark: \u6709\u8868\u8FBE\u5F0F\u7684\u60C5\u51B5, \u6682\u65F6\u4E0D\u53BB\u6389\u4E86\uFF08\u6709\u4E1A\u52A1\u53CD\u800C\u662F\u5E0C\u671B\u7559\u4E0B\u7684\uFF09\uFF0C\u5C31\u53BB\u6389 hidden = true \u7684
    if (get(data, key) !== undefined && hidden) {
      set(data, key, undefined);
    }
  });
  return data;
};`,ln=`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './advanced/utils';
import RichTextEditor from '../../widgets/RichText/src';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  const test = {
    type: 'object',
    properties: {
      input1: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
        max: 12,
        required: true,
      },
      input2: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
        format: 'color',
        required: true,
      },
      b1: {
        title: '\u5224\u65AD',
        type: 'boolean',
      },
      c1: {
        title: '\u6570\u5B57\u54C8',
        type: 'number',
        required: true,
        default: 0,
      },
      multiSelect: {
        title: '\u591A\u9009',
        description: '\u4E0B\u62C9\u591A\u9009',
        type: 'array',
        required: true,
        items: {
          type: 'string',
        },
        enum: ['A', 'B', 'C'],
        enumNames: ['\u676D\u5DDE', '\u6B66\u6C49', '\u6E56\u5DDE'],
        widget: 'multiSelect',
      },
      select1: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
      },
    },
  };

  const test1 = {
    displayType: 'column',
    type: 'object',
    properties: {
      dateName: {
        title: '\u65F6\u95F4\u9009\u62E9',
        type: 'string',
        format: 'date',
        required: true,
      },
      selectName: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        widget: 'select',
      },
      inputName: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
        required: true,
      },
      inputName2: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
      },
      inputName3: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
      },
      listName: {
        title: '\u5BF9\u8C61\u6570\u7EC4',
        description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            selectName: {
              title: '\u5355\u9009',
              type: 'string',
              enum: ['a', 'b', 'c'],
              enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              widget: 'select',
            },
            inputName: {
              title: '\u7B80\u5355\u8F93\u5165\u6846',
              type: 'string',
            },
            activityDesc: {
              title: '\u6D3B\u52A8\u7B80\u4ECB',
              type: 'string',
              format: 'textarea',
              widget: 'richText',
            },
            objectName: {
              title: '\u5BF9\u8C61',
              description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
              type: 'object',
              properties: {
                radioName: {
                  title: '\u5355\u9009radio',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                  widget: 'radio',
                },
                dateName: {
                  title: '\u65F6\u95F4\u9009\u62E9',
                  type: 'string',
                  format: 'date',
                },
                inputName: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  };

  const test2 = {
    type: 'object',
    properties: {
      audio_on_mic_limit: {
        className: 'my-className',
        title: '\u540C\u65F6\u652F\u6301\u8FDE\u9EA6\u4EBA\u6570',
        default: '1',
        enum: ['1', '2', '3'],
        enumNames: ['1\u4EBA', '2\u4EBA', '3\u4EBA'],
        type: 'string',
        widget: 'radio',
        labelWidth: 145,
      },
    },
    displayType: 'row',
  };

  // const onMount = () => {
  //   setSchema(test);
  // };

  useEffect(() => {
    setSchema(test1);
  }, []);

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  const onValuesChange = (a, b) => {
    console.log(a, b);
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        widgets={{
          richText: RichTextEditor,
        }}
        debug
        theme="1"
        // onMount={onMount}
        onFinish={onFinish}
        onValuesChange={onValuesChange}
      />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`,Ne=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,ge=`import React, { useState, useEffect } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

const { createEditorState } = BraftEditor;

const RichTextEditor = ({ name, onChange, value, ...rest }) => {
  const [editor, set] = useState(null);

  useEffect(() => {
    if (value !== undefined) {
      set(createEditorState(value));
    }
  }, [value]);

  const handleChange = editor => {
    set(editor);
    // const htmlContent = editor.toHTML();
    // onChange(name, htmlContent);
  };

  const onSave = () => {
    // Pressing ctrl + s when the editor has focus will execute this method
    // Before the editor content is submitted to the server, you can directly call editorState.toHTML () to get the HTML content
    const htmlContent = editor.toHTML();
    if (name) {
      onChange(name, htmlContent);
    } else {
      onChange(htmlContent);
    }
  };

  return (
    <div style={{ border: '1px solid rgba(0,0,0,0.2)' }}>
      <BraftEditor
        contentStyle={{ minHeight: 100, height: 'auto', maxHeight: 500 }}
        value={editor}
        onChange={handleChange}
        onSave={onSave}
        onBlur={onSave}
      />
    </div>
  );
};

export default RichTextEditor;`,We=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Pe=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,yn=`export const basic = {
  labelWidth: 130,
  type: 'object',
  properties: {
    url: {
      title: 'url\u8F93\u5165\u6846',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email\u8F93\u5165\u6846',
      type: 'string',
      format: 'email',
    },
    string: {
      title: '\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32',
      description: 'a-z',
      type: 'string',
      hidden: false,
      disabled: true,
    },
  },
};

export const expression = {
  type: 'object',
  properties: {
    input: {
      title: '{{formData.config.title || "\u8F93\u5165\u6846"}}',
      type: 'string',
      placeholder: '{{formData.config.placeholder}}',
      props: {
        size: '{{formData.config.size}}',
      },
      hidden: '{{formData.config.hidden === true}}',
      readOnly: '{{formData.config.readOnly === true}}',
      disabled: '{{formData.config.disabled === true}}',
    },
    rate: {
      title: 'rate',
      type: 'number',
      widget: 'rate',
    },
    config: {
      title: '\u914D\u7F6E',
      type: 'object',
      properties: {
        title: {
          title: 'title',
          type: 'string',
        },
        placeholder: {
          title: 'placeholder',
          type: 'string',
        },
        size: {
          title: 'input\u5927\u5C0F',
          type: 'string',
          enum: ['large', 'middle', 'small'],
          enumNames: ['\u5927', '\u4E2D', '\u5C0F'],
          widget: 'radio',
        },
        hidden: {
          title: '\u662F\u5426\u9690\u85CF',
          type: 'boolean',
        },
        readOnly: {
          title: '\u662F\u5426\u53EA\u8BFB',
          type: 'boolean',
        },
        disabled: {
          title: '\u662F\u5426\u7F6E\u7070',
          type: 'boolean',
        },
      },
    },
  },
  required: [],
};

export const titleTrick = {
  displayType: 'row',
  type: 'object',
  properties: {
    inputName1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      width: '50%',
    },
    desc: {
      type: 'html',
      bind: false,
      default: "\u8865\u5145\u8BF4\u660E <span style='color:red'>hello<span>",
      width: '50%',
    },
  },
};`,wn=`import React, { Component } from 'react';
// import GithubCorner from 'react-github-corner';
import Demo from './main';
import { Radio, Select, Switch, Slider } from 'antd';
import './index.css';

const Option = Select.Option;
class Root extends Component {
  state = {
    schemaName: 'simplest',
    column: 1,
    displayType: 'column',
    readOnly: false,
    labelWidth: 110,
  };

  onColumnNumberChange = value => {
    this.setState({ column: value });
  };

  onDisplayChange = value => {
    this.setState({
      displayType: value,
      showDescIcon: value === 'row',
    });
  };

  onReadOnlyChange = value => this.setState({ readOnly: value });

  onSchemaChange = e => {
    this.setState({ schemaName: e.target.value });
  };

  onLabelWidthChange = value => {
    this.setState({ labelWidth: value });
  };

  render() {
    const { showDescIcon, readOnly, labelWidth } = this.state;
    return (
      <div className="fr-playground">
        {/* <GithubCorner
          href="https://github.com/alibaba/form-render"
          bannerColor="#F6C14F"
          className="absolute top-0 right-0 z-999"
        /> */}
        {/* <a href="/" className="f6 absolute top-1 right-1 z-999">
          \u56DE\u4E3B\u9875
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">\u6700\u7B80\u6837\u4F8B</Radio>
            <Radio value="basic">\u57FA\u7840\u63A7\u4EF6</Radio>
            <Radio value="format">\u6821\u9A8C</Radio>
            <Radio value="new-feature">\u65B0\u529F\u80FD</Radio>
            <Radio value="function">\u590D\u6742\u8054\u52A8</Radio>
            <Radio value="input">\u4E2A\u6027\u8F93\u5165\u6846</Radio>
            <Radio value="select">\u4E2A\u6027\u9009\u62E9\u6846</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <Select
              style={{ marginRight: 8, marginLeft: 24 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">\u4E00\u884C\u4E00\u5217</Option>
              <Option value="2">\u4E00\u884C\u4E8C\u5217</Option>
              <Option value="3">\u4E00\u884C\u4E09\u5217</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">\u4E0A\u4E0B\u6392\u5217</Option>
              <Option value="row">\u5DE6\u53F3\u6392\u5217</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 70 }}>\u6807\u7B7E\u5BBD\u5EA6\uFF1A</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        <Demo {...this.state} />
      </div>
    );
  }
}

export default Root;`,Rn=`import React, { useState, useEffect } from 'react';
import parseJson from 'json-parse-better-errors';
import FormRender, { useForm } from 'form-render';
import DefaultSchema from './json/simplest.json';
import { Tabs } from 'antd';
import AsyncSelect from './customized/AsyncSelect';
import MonacoEditor from './monaco';
const { TabPane } = Tabs;

// help functions
const schema2str = obj => JSON.stringify(obj, null, 2) || '';

const Demo = ({ schemaName, theme, ...formProps }) => {
  const [schemaStr, set1] = useState(() => schema2str(DefaultSchema.schema));
  const [error, set2] = useState('');

  useEffect(() => {
    const schema = require(\`./json/\${schemaName}.json\`);
    set1(schema2str(schema.schema));
  }, [schemaName]);

  const tryParse = schemaStr => {
    let schema = {};
    try {
      schema = parseJson(schemaStr);
      if (typeof schema !== 'object') {
        set2('schema\u975E\u6B63\u786Ejson');
        return;
      }
      set2('');
      return schema;
    } catch (error) {
      set2(String(error));
    }
  };

  const handleCodeChange = schemaStr => {
    set1(schemaStr);
    tryParse(schemaStr);
  };

  let schema = {};
  try {
    schema = parseJson(schemaStr);
  } catch (error) {
    console.log(error);
  }

  const form = useForm();

  return (
    <div className="flex-auto flex">
      <div className="w-50 h-100 pl2 flex flex-column">
        <Tabs
          defaultActiveKey="1"
          onChange={() => { }}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <MonacoEditor
              value={schemaStr}
              onChange={handleCodeChange}
            />
          </TabPane>
          <TabPane tab="Data" key="2">
            <MonacoEditor
              value={schema2str(form.getValues())}
              options={{ readOnly: true }}
            />
          </TabPane>
        </Tabs>
      </div>
      <div className="w-50 h-100 flex flex-column pa2">
        <div
          className="h-100 overflow-auto pa3 pt4 flex-auto"
          style={{ borderLeft: '1px solid #ddd' }}
        >
          {error ? (
            <div>{error}</div>
          ) : (
            <FormRender
              form={form}
              schema={schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,pn=`{
  "schema": {
    "type": "object",
    "properties": {
      "string": {
        "title": "\u5B57\u7B26\u4E32",
        "type": "string",
        "required": true
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],
        "widget": "radio"
      }
    }
  }
}`,Qe=`import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, options: uiOptions } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...uiOptions}
        style={{ width: '100%' }}
        showSearch
        value={value || undefined}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;`,Wn=`import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { valueMap, keySuggestions } from './suggestionsMap';

const Demo = ({ value, onChange, options }) => {

  const editorWillMount = (monaco) => {
    monaco.languages.registerCompletionItemProvider('json', {
      provideCompletionItems: (model, position) => {

        // \u5F97\u5230\u5192\u53F7\u4E4B\u524D\u7684\u6587\u672C
        var textUntilPosition = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column
        });

        const word = model.getWordUntilPosition(position);
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn
        };

        let propKey = '';
        const match = textUntilPosition.match(/[a-z]+(?=["][:])/)
        if (match && match.length) {
          propKey = match[0];
        }

        const suggestions = propKey ? (valueMap(range)[propKey] || []) : keySuggestions(range)

        return { suggestions }

      },
      triggerCharacters: ['"']
    });
  }

  return (
    <MonacoEditor
      height="800px"
      language="json"
      value={value}
      onChange={onChange}
      editorWillMount={editorWillMount}
      options={options}
    />
  );
};

export default Demo;`,Mn=`import { monaco } from 'react-monaco-editor'

const valueMap = (range) => {
  return {
    widget: [
      {
        label: 'input',
        insertText: 'input',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u8F93\u5165\u6846'
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u591A\u884C\u8F93\u5165\u6846'
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u7EC4\u4EF6'
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u7EC4\u4EF6'
      },
      {
        label: 'dateRange',
        insertText: 'dateRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u8303\u56F4'
      },
      {
        label: 'timeRange',
        insertText: 'timeRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u8303\u56F4'
      },
      {
        label: 'checkbox',
        insertText: 'checkbox',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u662F\u5426\u9009\u62E9'
      },
      {
        label: 'select',
        insertText: 'select',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u5355\u9009'
      },
      {
        label: 'radio',
        insertText: 'radio',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u5355\u9009'
      },
      {
        label: 'multiSelect',
        insertText: 'multiSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u591A\u9009\u6846'
      },
      {
        label: 'checkboxes',
        insertText: 'checkboxes',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u591A\u9009\u6846'
      },
      {
        label: 'cascader',
        insertText: 'cascader',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u7EA7\u8054\u9009\u62E9'
      },
      {
        label: 'treeSelect',
        insertText: 'treeSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6811\u5F62\u9009\u62E9'
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u989C\u8272\u9009\u62E9'
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0A\u4F20\u7EC4\u4EF6'
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6587\u672C\uFF08\u53EA\u8BFB\u5C55\u793A\uFF09'
      },
      {
        label: 'slider',
        insertText: 'slider',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6ED1\u52A8\u8F93\u5165\u6761'
      },
      {
        label: 'rate',
        insertText: 'rate',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E94\u661F\u8BC4\u5206'
      },
      {
        label: 'map',
        insertText: 'map',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5BF9\u8C61'
      },
      {
        label: 'list0',
        insertText: 'list0',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u590D\u6742\u7ED3\u6784\uFF0C\u4F46item\u6570\u91CF\u4E0D\u5927)'
      },
      {
        label: 'list1',
        insertText: 'list1',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67091-2\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)'
      },
      {
        label: 'list2',
        insertText: 'list2',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67093-5\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)'
      },
      {
        label: 'list3',
        insertText: 'list3',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u6570\u636E\u91CF\u5927\uFF0C\u6216\u8005\u7ED3\u6784\u590D\u6742)'
      },
    ],
    type: [
      {
        label: 'string',
        insertText: 'string',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'string'
      },
      {
        label: 'number',
        insertText: 'number',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'number'
      },
      {
        label: 'boolean',
        insertText: 'boolean',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'boolean'
      },
      {
        label: 'array',
        insertText: 'array',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'array'
      },
      {
        label: 'object',
        insertText: 'object',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'object'
      },
      {
        label: 'range',
        insertText: 'range',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'range'
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'html'
      },
    ],
    format: [
      {
        label: 'image',
        insertText: 'image',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'image'
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'textarea'
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'color'
      },
      {
        label: 'email',
        insertText: 'email',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'email'
      },
      {
        label: 'url',
        insertText: 'url',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'url'
      },
      {
        label: 'dateTime',
        insertText: 'dateTime',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'dateTime'
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'date'
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'time'
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'upload'
      },
    ],
    displayType: [
      {
        label: 'row',
        insertText: 'row',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5E76\u6392\u5C55\u793A'
      },
      {
        label: 'column',
        insertText: 'column',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E24\u6392\u5C55\u793A'
      },
    ]
  }
}

const keySuggestions =(range) => [
  {
    label: 'title',
    insertText: 'title',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F'
  },
  {
    label: 'description',
    insertText: 'description',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F'
  },
  {
    label: 'type',
    insertText: 'type',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u503C\u7684\u6570\u636E\u7C7B\u578B'
  },
  {
    label: 'format',
    insertText: 'format',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8F93\u5165\u6846\u7684\u683C\u5F0F'
  },
  {
    label: 'default',
    insertText: 'default',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C'
  },
  {
    label: 'required',
    insertText: 'required',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u5FC5\u586B'
  },
  {
    label: 'placeholder',
    insertText: 'placeholder',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'placeholder'
  },
  {
    label: 'bind',
    insertText: 'bind',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'bind'
  },
  {
    label: 'min',
    insertText: 'min',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5C0F\u503C'
  },
  {
    label: 'max',
    insertText: 'max',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5927\u503C'
  },
  {
    label: 'disabled',
    insertText: 'disabled',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u7981\u7528'
  },
  {
    label: 'readOnly',
    insertText: 'readOnly',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u53EA\u8BFB'
  },
  {
    label: 'hidden',
    insertText: 'hidden',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u9690\u85CF'
  },
  {
    label: 'displayType',
    insertText: 'displayType',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u5E03\u5C40'
  },
  {
    label: 'width',
    insertText: 'width',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6'
  },
  {
    label: 'labelWidth',
    insertText: 'labelWidth',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'label \u7684\u5BBD\u5EA6'
  },
  {
    label: 'className',
    insertText: 'className',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'className'
  },
  {
    label: 'widget',
    insertText: 'widget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6E32\u67D3'
  },
  {
    label: 'readOnlyWidget',
    insertText: 'readOnlyWidget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3'
  },
  {
    label: 'extra',
    insertText: 'extra',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F'
  },
  {
    label: 'properties',
    insertText: 'properties',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027(\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\u4E2D\u4F7F\u7528)'
  },
  {
    label: 'items',
    insertText: 'items',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u5217\u8868\u4E2D\u6BCF\u4E2Aitem\u7684\u7ED3\u6784(\u53EA\u5728\u5217\u8868\u4E2D\u4F7F\u7528)'
  },
  {
    label: 'enum',
    insertText: 'enum',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C'
  },
  {
    label: 'enumNames',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u6587\u6848'
  },
  {
    label: 'rules',
    insertText: 'rules',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6821\u9A8Crules'
  },
  {
    label: 'props',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u989D\u5916\u7EC4\u4EF6\u5C5E\u6027'
  },
]

export { valueMap, keySuggestions }`,jn=`.markdown p {
  color: #454d64 !important;
  font-size: 15px !important;
  line-height: 1.60625 !important;
}

.markdown ol,
.markdown ul {
  list-style: initial !important;
}

.hidden {
  display: none;
}

.npm__react-simple-code-editor__textarea {
  outline: none;
}

.b {
  font-weight: bold;
}

.pa0 {
  padding: 0;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pl0 {
  padding-left: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.overflow-auto {
  overflow: auto;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.w-50 {
  width: 50%;
}
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
}
.flex-column {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.z-999 {
  z-index: 999;
}

.fr-playground {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  height: 100vh;
}

.fr-playground .setting-container {
  border-bottom: 1px solid #ccc;
  padding: 0 12px 12px;
}

.__dumi-default-previewer-demo {
  padding: 24px;
}`,Me=`import React from 'react';
import { Table, Search, TableProvider, useTable } from 'table-render';
import { Tag, Space, Menu, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  return (
    <TableProvider>
      <TableBody />
    </TableProvider>
  );
};

const TableBody = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={() => message.success('\u590D\u5236\u6210\u529F\uFF01')}>\u590D\u5236</div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={() => message.warning('\u786E\u5B9A\u5220\u9664\u5417\uFF1F')}>\u5220\u9664</div>
      </Menu.Item>
    </Menu>
  );

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={[
          {
            name: '\u5168\u90E8\u6570\u636E',
            api: searchApi,
          },
          {
            name: '\u6211\u7684\u6570\u636E',
            api: searchApi,
          },
        ]}
      />
      <Table
        // size="small"
        columns={columns}
        // headerTitle="\u9AD8\u7EA7\u8868\u5355"
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default Demo;`,kn=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const templates = [
  {
    text: '\u6A21\u677F1',
    name: 'something',
    schema: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        inputName: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
        },
        selectName: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
        dateName: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
        },
      },
    },
  },
];

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator ref={genRef} defaultValue={schema} templates={templates} />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,Ln=`import React from 'react';
import Generator, {
  defaultSettings,
  defaultCommonSettings,
  defaultGlobalSettings,
} from 'fr-generator';

const NewWidget = ({ value = 0, onChange }) => (
  <button onClick={() => onChange(value + 1)}>{value}</button>
);

const Demo = () => {
  console.log(defaultSettings, defaultCommonSettings, defaultGlobalSettings);

  return (
    <div style={{ height: '50vh' }}>
      <Generator
        widgets={{ NewWidget }}
        settings={[
          {
            title: '\u4E2A\u4EBA\u4FE1\u606F',
            widgets: [
              {
                text: '\u8BA1\u6570\u5668',
                name: 'asyncSelect',
                schema: {
                  title: '\u8BA1\u6570\u5668',
                  type: 'number',
                  widget: 'NewWidget',
                },
                setting: {
                  api: { title: 'api', type: 'string' },
                },
              },
              {
                text: '\u59D3\u540D',
                name: 'name',
                schema: {
                  title: '\u8F93\u5165\u6846',
                  type: 'string',
                },
                setting: {
                  maxLength: { title: '\u6700\u957F\u5B57\u6570', type: 'number' },
                },
              },
              {
                text: 'object',
                name: 'object',
                schema: {
                  title: '\u5BF9\u8C61',
                  type: 'object',
                  properties: {},
                },
                setting: {},
              },
              {
                text: 'array',
                name: 'array',
                schema: {
                  title: '\u6570\u7EC4',
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {},
                  },
                },
                setting: {},
              },
            ],
          },
        ]}
        commonSettings={{
          description: {
            title: '\u81EA\u5B9A\u4E49\u5171\u901A\u7528\u7684\u5165\u53C2',
            type: 'string',
          },
        }}
      />
    </div>
  );
};

export default Demo;`,qn=`import React from 'react';
import Generator from 'fr-generator';
import './index.less';

const {
  Provider,
  Sidebar,
  Canvas,
  Settings,
} = Generator;

const Demo = () => {
  return (
    <div className="fr-generator-playground" style={{ height: '40vh' }}>
      <Provider
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      >
        <div className="fr-generator-container">
          <Settings />
          <Canvas />
          <Sidebar />
        </div>
      </Provider>
    </div>
  );
};

export default Demo;`,_n=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,et=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    array: {
      key: 'array',
      type: 'array',
      name: 'array',
      title: 'Name',
      'x-component': 'arraytable',
      items: {
        type: 'object',
        properties: {
          aa: {
            key: 'aa',
            type: 'string',
            name: 'aa',
            title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
            enum: [
              {
                label: '\u663E\u793A',
                value: true,
              },
              {
                label: '\u9690\u85CF',
                value: false,
              },
            ],
            'x-component': 'input',
          },
          bb: {
            key: 'bb',
            type: 'string',
            name: 'bb',
            title: 'BB',
            'x-component': 'input',
          },
        },
      },
    },
    cc: {
      key: 'cc',
      type: 'string',
      name: 'cc',
      title: 'CC',
      'x-component': 'input',
      'x-component-props': { min: 1 },
    },
  },
};

const stringContains = (str, text) => {
  return str.indexOf(text) > -1;
}

const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u83B7\u5F97 propsSchema \u7684 children
const getChildren2 = (schema) => {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items.properties;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

// formily Schema => FRG schema
const transformFrom = (mySchema, parent = null) => {
  const isObj = mySchema.type === 'object' && mySchema.properties;
  const isList =
    mySchema.type === 'array' && mySchema.items && mySchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (mySchema.enum && Array.isArray(mySchema.enum)) {
      const list = mySchema.enum;
      if (
        isObject(list[0]) &&
        list[0].label !== undefined &&
        list[0].value !== undefined
      ) {
        const _enumNames = list.map(i => i.label);
        const _enum = list.map(i => i.value);
        mySchema.enum = _enum;
        mySchema.enumNames = _enumNames;
      }
    }
  } else {
    const childrenList = getChildren2(mySchema);
    childrenList.map(item => {
      if (isObj) {
        mySchema.properties[item.name] = transformFrom(item.schema, mySchema);
      }
      if (isList) {
        mySchema.items.properties[item.name] = transformFrom(
          item.schema,
          mySchema
        );
      }
    });
  }
  if (mySchema['x-component']) {
    mySchema['widget'] = mySchema['x-component'];
  }
  if (mySchema['x-component-props']) {
    mySchema['props'] = mySchema['x-component-props'];
  }
  if (parent && mySchema.required) {
    if (parent.required && Array.isArray(parent.required)) {
      parent.required.push(mySchema.name);
    } else {
      parent.required = [mySchema.name];
    }
  }
  delete mySchema.key;
  delete mySchema.name;
  delete mySchema.required;
  delete mySchema['x-component'];
  delete mySchema['x-component-props'];
  return mySchema;
};

// FRG schema => formily Schema
const transformTo = (frSchema, parent = null, key = null) => {
  const isObj = frSchema.type === 'object' && frSchema.properties;
  const isList =
    frSchema.type === 'array' && frSchema.items && frSchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (
      frSchema.enum &&
      Array.isArray(frSchema.enum) &&
      frSchema.enumNames &&
      Array.isArray(frSchema.enumNames)
    ) {
      const list = frSchema.enum.map((item, idx) => ({
        value: item,
        label: frSchema.enumNames[idx],
      }));
      frSchema.enum = list;
    }
  } else {
    const childrenList = getChildren2(frSchema);
    childrenList.map(item => {
      if (isObj) {
        frSchema.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
      if (isList) {
        frSchema.items.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
    });
  }
  if (frSchema['widget']) {
    frSchema['x-component'] = frSchema['widget'];
  }
  if (frSchema['props']) {
    frSchema['x-component-props'] = frSchema['props'];
  }
  delete frSchema['widget'];
  delete frSchema['props'];
  delete frSchema['enumNames'];
  if (key) {
    frSchema.name = key;
    frSchema.key = key;
  }
  if (parent && key && parent.required && Array.isArray(parent.required)) {
    if (parent.required.indexOf(key) > -1) {
      frSchema.required = true;
    }
  }
  return frSchema;
};

const fromFormily = schema =>  transformFrom(schema);
const toFormily = schema => transformTo(schema);

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator
          ref={genRef}
          defaultValue={schema}
          transformer={{
            from: fromFormily,
            to: toFormily,
          }}
        />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,st=`import React, { useState, useRef } from 'react';
import { useHistory } from 'umi';
import Generator from 'fr-generator';
import './index.less';

const Demo = () => {
  const ref = useRef();

  const goToFrPlayground = () => {
    ref.current.copyValue();
    window.open('/playground');
  };

  return (
    <div className="fr-generator-playground" style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        extraButtons={[
          { text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground },
        ]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,Vn=gn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:me}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l;return b.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return a=function(j,d){if(!d&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var E=S(d);if(E&&E.has(j))return E.get(j);var m={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in j)if(v!=="default"&&Object.prototype.hasOwnProperty.call(j,v)){var c=n?Object.getOwnPropertyDescriptor(j,v):null;c&&(c.get||c.set)?Object.defineProperty(m,v,c):m[v]=j[v]}return m.default=j,E&&E.set(j,m),m},S=function(j){if(typeof WeakMap!="function")return null;var d=new WeakMap,E=new WeakMap;return(S=function(n){return n?E:d})(j)},u=e("K+nK"),M.t0=u,M.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=a,M.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return M.t3=M.sent,f=(0,M.t2)(M.t3),M.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 15:return g=M.sent,l=function(){var j=(0,f.useState)("Line"),d=(0,o.default)(j,2),E=d[0],m=d[1],n={Line:g.Line,Column:g.Column,PivotTable:g.PivotTable}[E];return f.default.createElement("div",null,f.default.createElement("div",{style:{marginBottom:10}},f.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),f.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),f.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),f.default.createElement(n,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},M.abrupt("return",l);case 18:case"end":return M.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Line, Column, PivotTable } from 'chart-render';

export default () => {
  const [component, setComponent] = useState('Line');
  const ChartRender = { Line, Column, PivotTable }[component];

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Line')}
        >
          \u6298\u7EBF\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Column')}
        >
          \u67F1\u72B6\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('PivotTable')}
        >
          \u4EA4\u53C9\u8868
        </button>
      </div>

      <ChartRender
        meta={[
          { id: 'date', name: '\u65E5\u671F', isDim: true },
          { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false },
          { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false },
        ]}
        data={[
          { date: '20200101', pv: 100, uv: 50 },
          { date: '20200102', pv: 120, uv: 60 },
          { date: '20200103', pv: 140, uv: 70 },
          { date: '20200104', pv: 160, uv: 80 },
        ]}
      />
    </div>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u=e("K+nK"),a.t0=u,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u=e("K+nK"),a.t0=u,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u=e("K+nK"),a.t0=u,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u=e("K+nK"),a.t0=u,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u=e("K+nK"),a.t0=u,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    inverted
    label={{
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    }}
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u=e("K+nK"),a.t0=u,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u=e("K+nK"),a.t0=u,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u=e("K+nK"),a.t0=u,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20, pv: 120 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120, pv: 1120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21, pv: 121 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121, pv: 1121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15, pv: 115 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115, pv: 1115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40, pv: 140 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140, pv: 1140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31, pv: 131 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131, pv: 1131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32, pv: 132 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132, pv: 1132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30, pv: 130 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130, pv: 1130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u=e("K+nK"),a.t0=u,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u=e("K+nK"),a.t0=u,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    withArea // \u5F00\u542F\u9762\u79EF\u56FE
    isStack // \u5806\u53E0\u5C55\u793A
    isPercent // \u767E\u5206\u6BD4\u9762\u79EF\u56FE
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u=e("K+nK"),a.t0=u,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u=e("K+nK"),a.t0=u,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(M,w,j){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(w).length]}},M),o.default.createElement("p",null,JSON.stringify(w)),o.default.createElement("p",null,JSON.stringify(j)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    cellRender={(val, dimRecord, indId) => (
      <div>
        <p>\u53C2\u6570\u8868\uFF1A</p>
        <p
          style={{
            color: ['red', 'orange', 'yellow', 'green', 'blue'][
              Object.keys(dimRecord).length
            ],
          }}
        >
          {val}
        </p>
        <p>{JSON.stringify(dimRecord)}</p>
        <p>{JSON.stringify(indId)}</p>
      </div>
    )}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l;return b.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return a=function(j,d){if(!d&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var E=S(d);if(E&&E.has(j))return E.get(j);var m={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in j)if(v!=="default"&&Object.prototype.hasOwnProperty.call(j,v)){var c=n?Object.getOwnPropertyDescriptor(j,v):null;c&&(c.get||c.set)?Object.defineProperty(m,v,c):m[v]=j[v]}return m.default=j,E&&E.set(j,m),m},S=function(j){if(typeof WeakMap!="function")return null;var d=new WeakMap,E=new WeakMap;return(S=function(n){return n?E:d})(j)},u=e("K+nK"),M.t0=u,M.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=a,M.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return M.t3=M.sent,f=(0,M.t2)(M.t3),M.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 15:return g=M.sent,l=function(){var j=(0,f.useState)(!1),d=(0,o.default)(j,2),E=d[0],m=d[1];return f.default.createElement(f.default.Fragment,null,f.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",f.default.createElement("input",{type:"checkbox",value:E,onChange:function(){return m(!E)}})),f.default.createElement(g.PivotTable,{leftExpandable:E,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},M.abrupt("return",l);case 18:case"end":return M.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { PivotTable } from 'chart-render';

export default () => {
  const [expandable, setExpandable] = useState(false);

  return (
    <>
      <label>
        \u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A
        <input
          type="checkbox"
          value={expandable}
          onChange={() => setExpandable(!expandable)}
        />
      </label>
      <PivotTable
        leftExpandable={expandable}
        showSubtotal={false}
        meta={[
          { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
          { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
          { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
          { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
          { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
          { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
        ]}
        data={[
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 782,
            valueB: 0.566,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 856,
            valueB: 0.403,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 886,
            valueB: 0.555,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 555,
            valueB: 0.444,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 444,
            valueB: 0.333,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 922,
            valueB: 0.778,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 888,
            valueB: 0.887,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 879,
            valueB: 0.87,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 800,
            valueB: 0.723,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 813,
            valueB: 0.789,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 500,
            valueB: 0.463,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 833,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 821,
            valueB: 0.442,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 834,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 803,
            valueB: 0.7,
          },
        ]}
      />
    </>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i,M,w,j,d,E,m;return b.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return j=function(D,T){if(!T&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var L=w(T);if(L&&L.has(D))return L.get(D);var V={},x=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in D)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(D,ae)){var Ge=x?Object.getOwnPropertyDescriptor(D,ae):null;Ge&&(Ge.get||Ge.set)?Object.defineProperty(V,ae,Ge):V[ae]=D[ae]}return V.default=D,L&&L.set(D,V),V},w=function(D){if(typeof WeakMap!="function")return null;var T=new WeakMap,L=new WeakMap;return(w=function(x){return x?L:T})(D)},u=e("K+nK"),v.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return v.t0=u,v.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return v.t1=v.sent,o=(0,v.t0)(v.t1),v.t2=u,v.next=13,e.e(83).then(e.bind(null,"fWQN"));case 13:return v.t3=v.sent,f=(0,v.t2)(v.t3),v.t4=u,v.next=18,e.e(84).then(e.bind(null,"mtLc"));case 18:return v.t5=v.sent,g=(0,v.t4)(v.t5),v.t6=u,v.next=23,e.e(74).then(e.bind(null,"yKVA"));case 23:return v.t7=v.sent,S=(0,v.t6)(v.t7),v.t8=u,v.next=28,e.e(72).then(e.bind(null,"879j"));case 28:return v.t9=v.sent,a=(0,v.t8)(v.t9),v.t10=u,v.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return v.t11=v.sent,l=(0,v.t10)(v.t11),v.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 37:return i=v.sent,v.t12=j,v.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 41:return v.t13=v.sent,M=(0,v.t12)(v.t13),d={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},E=function(c){(0,S.default)(T,c);var D=(0,a.default)(T);function T(){return(0,f.default)(this,T),D.apply(this,arguments)}return(0,g.default)(T,[{key:"render",value:function(){var V=this.props.form;return l.default.createElement("div",null,l.default.createElement(M.default,{form:V,schema:d}),l.default.createElement(o.default,{type:"primary",onClick:V.submit},"\u63D0\u4EA4"))}}]),T}(l.default.Component),m=(0,M.connectForm)(E),v.abrupt("return",m);case 47:case"end":return v.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';
// import 'antd/dist/antd.css';    \u5982\u679C\u9879\u76EE\u6CA1\u6709\u5BF9antd\u3001less\u505A\u4EFB\u4F55\u914D\u7F6E\u7684\u8BDD\uFF0C\u9700\u8981\u52A0\u4E0A

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

class Demo extends React.Component {
  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} />
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i,M,w;return b.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return l=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=a(n);if(v&&v.has(m))return v.get(m);var c={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in m)if(T!=="default"&&Object.prototype.hasOwnProperty.call(m,T)){var L=D?Object.getOwnPropertyDescriptor(m,T):null;L&&(L.get||L.set)?Object.defineProperty(c,T,L):c[T]=m[T]}return c.default=m,v&&v.set(m,c),c},a=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(a=function(D){return D?v:n})(m)},u=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=u,d.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,o=(0,d.t0)(d.t1),d.t2=u,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,f=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=d.sent,d.t4=l,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,S=(0,d.t4)(d.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},M=function(){var m=(0,S.useForm)();return f.default.createElement("div",null,f.default.createElement(S.default,{form:m,schema:i}),f.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=M,d.abrupt("return",w);case 27:case"end":return d.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i,M,w;return b.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return l=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=a(n);if(v&&v.has(m))return v.get(m);var c={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in m)if(T!=="default"&&Object.prototype.hasOwnProperty.call(m,T)){var L=D?Object.getOwnPropertyDescriptor(m,T):null;L&&(L.get||L.set)?Object.defineProperty(c,T,L):c[T]=m[T]}return c.default=m,v&&v.set(m,c),c},a=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(a=function(D){return D?v:n})(m)},u=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=u,d.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,o=(0,d.t0)(d.t1),d.t2=u,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,f=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=d.sent,d.t4=l,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,S=(0,d.t4)(d.t5),i={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},M=function(){var m=(0,S.useForm)(),n=function(c,D){D.length>0?alert("errors:"+JSON.stringify(D)):alert("formData:"+JSON.stringify(c,null,2))};return f.default.createElement("div",null,f.default.createElement(S.default,{form:m,schema:i,onFinish:n}),f.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=M,d.abrupt("return",w);case 27:case"end":return d.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  displayType: 'row',
  labelWidth: 60,
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    siteUrl: {
      title: '\u7F51\u5740',
      type: 'string',
      placeholder: '\u6B64\u5904\u5FC5\u586B',
      required: true,
      props: {
        addonBefore: 'https://',
        addonAfter: '.com',
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    if (errors.length > 0) {
      alert('errors:' + JSON.stringify(errors));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i;return b.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return l=function(){var d=(0,f.useForm)(),E=function(n,v){v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(n))};return o.default.createElement("div",null,o.default.createElement(f.default,{form:d,schema:a,onFinish:E}),o.default.createElement("button",{onClick:d.submit},"\u63D0\u4EA4"))},S=function(d,E){if(!E&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=g(E);if(m&&m.has(d))return m.get(d);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in d)if(c!=="default"&&Object.prototype.hasOwnProperty.call(d,c)){var D=v?Object.getOwnPropertyDescriptor(d,c):null;D&&(D.get||D.set)?Object.defineProperty(n,c,D):n[c]=d[c]}return n.default=d,m&&m.set(d,n),n},g=function(d){if(typeof WeakMap!="function")return null;var E=new WeakMap,m=new WeakMap;return(g=function(v){return v?m:E})(d)},u=e("K+nK"),w.t0=u,w.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return w.t1=w.sent,o=(0,w.t0)(w.t1),w.t2=S,w.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return w.t3=w.sent,f=(0,w.t2)(w.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},i=l,w.abrupt("return",i);case 17:case"end":return w.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const form = useForm(); // 2. \u83B7\u53D6 form \u5B9E\u4F8B\uFF0C\u73B0\u5728\u6240\u6709\u8868\u5355\u65B9\u6CD5\u90FD\u6302\u5728\u4E0A\u9762
  // 3 onSubmit \u7684\u5165\u53C2
  const onSubmit = (formData, valid) => {
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };
  return (
    <div>
      <FormRender
        form={form} // 4 \u8865\u4E0A
        schema={schema}
        onFinish={onSubmit} // 5. \u8865\u4E0A
        // formData={formData} // 6. \u5E72\u6389
        // onChange={setData}
        // onValidate={setValid}
      />
      <button onClick={form.submit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i,M,w,j,d,E;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return M=function(c,D){if(!D&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var T=i(D);if(T&&T.has(c))return T.get(c);var L={},V=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in c)if(x!=="default"&&Object.prototype.hasOwnProperty.call(c,x)){var ae=V?Object.getOwnPropertyDescriptor(c,x):null;ae&&(ae.get||ae.set)?Object.defineProperty(L,x,ae):L[x]=c[x]}return L.default=c,T&&T.set(c,L),L},i=function(c){if(typeof WeakMap!="function")return null;var D=new WeakMap,T=new WeakMap;return(i=function(V){return V?T:D})(c)},u=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=u,n.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.t2=u,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,f=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(20)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=u,n.next=20,Promise.all([e.e(0),e.e(14),e.e(19),e.e(23)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=M,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return a=n.sent,n.next=32,Promise.all([e.e(68),e.e(79)]).then(e.bind(null,"7t+U"));case 32:return l=n.sent,w=g.default.TextArea,j={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},d=function(){var c=(0,S.useState)(JSON.stringify(j)),D=(0,f.default)(c,2),T=D[0],L=D[1],V=(0,S.useState)({}),x=(0,f.default)(V,2),ae=x[0],Ge=x[1],tn=function(){try{var le=(0,l.updateSchemaToNewVersion)(JSON.parse(T));Ge(le)}catch(ee){console.log(ee)}},p=function(le){L(le.target.value)},F=function(){L(JSON.stringify(JSON.parse(T),null,2))};return S.default.createElement("div",null,S.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),S.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:T,onChange:p}),S.default.createElement(o.default,{style:{marginRight:12},onClick:F},"\u683C\u5F0F\u5316\u65E7schema"),S.default.createElement(o.default,{type:"primary",onClick:tn},"\u751F\u6210\u65B0\u7248schema"),S.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify(ae,null,2)}))},E=d,n.abrupt("return",E);case 38:case"end":return n.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from '../../packages/form-render/src/utils.js';
const TextArea = Input.TextArea;

const old = {
  type: 'object',
  properties: {
    number: {
      title: '\u6570\u5B57\u8F93\u5165\u6846',
      type: 'number',
      'ui:disabled': true,
    },
    checkbox: {
      title: '\u662F\u5426\u9009\u62E9',
      type: 'boolean',
      'ui:widget': 'switch',
    },
  },
  required: ['number'],
};

const Translator = () => {
  const [oldSchema, setOld] = useState(JSON.stringify(old));
  const [newSchema, setNew] = useState({});

  const handleClick = () => {
    try {
      const _newSchema = updateSchemaToNewVersion(JSON.parse(oldSchema));
      setNew(_newSchema);
    } catch (err) {
      console.log(err);
    }
  };

  const onOldChange = e => {
    setOld(e.target.value);
  };

  const formatOld = () => {
    setOld(JSON.stringify(JSON.parse(oldSchema), null, 2));
  };

  return (
    <div>
      <div>\u586B\u5165\u65E7\u7248schema\uFF1A</div>
      <TextArea
        style={{ minHeight: 400, marginTop: 12, marginBottom: 12 }}
        value={oldSchema}
        onChange={onOldChange}
      />
      <Button style={{ marginRight: 12 }} onClick={formatOld}>
        \u683C\u5F0F\u5316\u65E7schema
      </Button>
      <Button type="primary" onClick={handleClick}>
        \u751F\u6210\u65B0\u7248schema
      </Button>
      <TextArea
        style={{ minHeight: 400, marginTop: 12 }}
        value={JSON.stringify(newSchema, null, 2)}
      />
    </div>
  );
};

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:H}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i,M;return b.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return i=function(){var E=(0,f.useState)({}),m=(0,o.default)(E,2),n=m[0],v=m[1],c=(0,f.useState)([]),D=(0,o.default)(c,2),T=D[0],L=D[1],V=(0,f.useState)(!1),x=(0,o.default)(V,2),ae=x[0],Ge=x[1],tn=(0,g.useForm)({formData:n,onChange:v,onValidate:L,showValidate:ae});(0,f.useEffect)(function(){tn.init()},[]);var p=function(){Ge(!0),T.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(T))):alert(JSON.stringify(n))};return f.default.createElement("div",null,f.default.createElement(g.default,{form:tn,schema:l}),f.default.createElement("button",{onClick:p},"\u63D0\u4EA4"))},a=function(E,m){if(!m&&E&&E.__esModule)return E;if(E===null||typeof E!="object"&&typeof E!="function")return{default:E};var n=S(m);if(n&&n.has(E))return n.get(E);var v={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in E)if(D!=="default"&&Object.prototype.hasOwnProperty.call(E,D)){var T=c?Object.getOwnPropertyDescriptor(E,D):null;T&&(T.get||T.set)?Object.defineProperty(v,D,T):v[D]=E[D]}return v.default=E,n&&n.set(E,v),v},S=function(E){if(typeof WeakMap!="function")return null;var m=new WeakMap,n=new WeakMap;return(S=function(c){return c?n:m})(E)},u=e("K+nK"),j.t0=u,j.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return j.t1=j.sent,o=(0,j.t0)(j.t1),j.t2=a,j.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return j.t3=j.sent,f=(0,j.t2)(j.t3),j.t4=a,j.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 17:return j.t5=j.sent,g=(0,j.t4)(j.t5),l={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},M=i,j.abrupt("return",M);case 22:case"end":return j.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const [formData, setData] = useState({});
  const [valid, setValid] = useState([]);
  const [showValidate, setShowValidate] = useState(false);

  const form = useForm({
    formData,
    onChange: setData,
    onValidate: setValid,
    showValidate,
  }); // 1. formData\u3001onChange \u548C onValidate \u4F5C\u4E3A useForm \u7684\u5165\u53C2\u4F20\u5165

  useEffect(() => {
    form.init();
  }, []);

  const onSubmit = () => {
    setShowValidate(true);
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };

  return (
    <div>
      <FormRender
        form={form} // 3. \u8865\u4E0A
        schema={schema}
        // formData={formData} // 4. \u5168\u653E\u5230 useForm \u91CC\u4E86
        // onChange={setData}
        // onValidate={setValid}
        // showValidate={showValidate}
      />
      <button onClick={onSubmit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"form-render-simple2":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"d+Pc"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:ln},"advanced/utils/index.js":{import:"./advanced/utils",content:Ne},"widgets/RichText/src/index.js":{import:"../../widgets/RichText/src",content:ge}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:"^15.0.2|| ^16.0.0-rc || ^16.0.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:"^15.0.2|| ^16.0.0-rc || ^16.0.0"},"braft-editor":{version:"2.3.9",css:"braft-editor/dist/index.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-simple2"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u=e("K+nK"),l.t0=u,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=u,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),g=function(M){return{type:"object",displayType:M,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(f.default,{schema:g("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(f.default,{schema:g("column")}))},l.abrupt("return",S);case 14:case"end":return l.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = displayType => ({
  type: 'object',
  displayType: displayType,
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    objectName: {
      title: '\u5BF9\u8C61',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
  },
});

export default () => (
  <div>
    <h2>display: row</h2>
    <Form schema={schema('row')} />
    <h2>display: column</h2>
    <Form schema={schema('column')} />
  </div>
);`},"demo/display.js":{import:"../demo/display",content:We}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u=e("K+nK"),l.t0=u,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=u,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),g={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},S=function(){return o.default.createElement(f.default,{schema:g})},l.abrupt("return",S);case 14:case"end":return l.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'inline',
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:We}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u=e("K+nK"),l.t0=u,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=u,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return o.default.createElement(f.default,{readOnly:!0,schema:g})},l.abrupt("return",S);case 14:case"end":return l.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:We}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u=e("K+nK"),l.t0=u,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=u,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return o.default.createElement(f.default,{labelWidth:"200",schema:g})},l.abrupt("return",S);case 14:case"end":return l.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
          width: '50%',
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
          width: '50%',
          labelWidth: 6,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:We}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=e("K+nK"),i.t0=u,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=u,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return o.default.createElement(f.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'list0',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:We}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=e("K+nK"),i.t0=u,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=u,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement(f.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list1',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:We}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=e("K+nK"),i.t0=u,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=u,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return o.default.createElement(f.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list2',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:We}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=e("K+nK"),i.t0=u,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=u,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return o.default.createElement(f.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list3',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'list1',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:We}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i,M,w,j,d,E;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return j=function(c,D){if(!D&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var T=w(D);if(T&&T.has(c))return T.get(c);var L={},V=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in c)if(x!=="default"&&Object.prototype.hasOwnProperty.call(c,x)){var ae=V?Object.getOwnPropertyDescriptor(c,x):null;ae&&(ae.get||ae.set)?Object.defineProperty(L,x,ae):L[x]=c[x]}return L.default=c,T&&T.set(c,L),L},w=function(c){if(typeof WeakMap!="function")return null;var D=new WeakMap,T=new WeakMap;return(w=function(V){return V?T:D})(c)},u=e("K+nK"),n.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=u,n.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=u,n.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,f=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=u,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=u,n.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.t8=j,n.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return n.t9=n.sent,a=(0,n.t8)(n.t9),n.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 36:return l=n.sent,n.t10=j,n.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return n.t11=n.sent,i=(0,n.t10)(n.t11),n.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return M=n.sent,d=function(){var c=(0,i.useForm)(),D=(0,a.useState)({}),T=(0,S.default)(D,2),L=T[0],V=T[1],x=function(){(0,M.fakeApi)("xxx/getForm").then(function(tn){c.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,M.delay)(1e3).then(function(Ge){V({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ae=function(tn,p){p.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(p.map(function(F){return F.name}))):(0,M.fakeApi)("xxx/submit",tn).then(function(F){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(i.default,{form:c,schema:L,onFinish:ae}),a.default.createElement(o.default,null,a.default.createElement(f.default,{onClick:x},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(f.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},E=d,n.abrupt("return",E);case 48:case"end":return n.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './utils';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  useEffect(() => {
    // \u5F02\u6B65\u52A0\u8F7D\u8868\u5355
    delay(1000).then(_ => {
      setSchema({
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      });
    });
  }, []);

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Ne}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i,M,w,j,d,E;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(c,D){if(!D&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var T=M(D);if(T&&T.has(c))return T.get(c);var L={},V=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in c)if(x!=="default"&&Object.prototype.hasOwnProperty.call(c,x)){var ae=V?Object.getOwnPropertyDescriptor(c,x):null;ae&&(ae.get||ae.set)?Object.defineProperty(L,x,ae):L[x]=c[x]}return L.default=c,T&&T.set(c,L),L},M=function(c){if(typeof WeakMap!="function")return null;var D=new WeakMap,T=new WeakMap;return(M=function(V){return V?T:D})(c)},u=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=u,n.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.t2=u,n.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return n.t3=n.sent,f=(0,n.t2)(n.t3),n.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return n.t4=u,n.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=u,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return a=n.sent,n.t8=w,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,l=(0,n.t8)(n.t9),n.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return i=n.sent,j={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},d=function(){var c=(0,l.useForm)(),D=function(V,x){x.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(x.map(function(ae){return ae.name}))):(0,i.fakeApi)("xxx/submit",V).then(function(ae){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},T=function(V){var x=V.data,ae=V.errors,Ge=V.schema,tn=(0,f.default)(V,["data","errors","schema"]);return(0,i.fakeApi)("xxx/validation").then(function(p){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(l.default,{form:c,schema:j,beforeFinish:T,onFinish:D}),S.default.createElement(o.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},E=d,n.abrupt("return",E);case 42:case"end":return n.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  // \u670D\u52A1\u7AEF\u6821\u9A8C\u5728\u8FD9\u91CC\u505A
  const beforeFinish = ({ data, errors, schema, ...rest }) => {
    return fakeApi('xxx/validation').then(_ => {
      return { name: 'select1', error: ['\u5916\u90E8\u6821\u9A8C\u9519\u8BEF'] };
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        beforeFinish={beforeFinish}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Ne}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i,M,w,j,d,E;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(c,D){if(!D&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var T=M(D);if(T&&T.has(c))return T.get(c);var L={},V=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in c)if(x!=="default"&&Object.prototype.hasOwnProperty.call(c,x)){var ae=V?Object.getOwnPropertyDescriptor(c,x):null;ae&&(ae.get||ae.set)?Object.defineProperty(L,x,ae):L[x]=c[x]}return L.default=c,T&&T.set(c,L),L},M=function(c){if(typeof WeakMap!="function")return null;var D=new WeakMap,T=new WeakMap;return(M=function(V){return V?T:D})(c)},u=e("K+nK"),n.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=u,n.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=u,n.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,f=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=u,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=u,n.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 31:return a=n.sent,n.t8=w,n.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 35:return n.t9=n.sent,l=(0,n.t8)(n.t9),n.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return i=n.sent,j={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},d=function(){var c=(0,l.useForm)(),D=function(V,x){x.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(x.map(function(ae){return ae.name}))):(0,i.fakeApi)("xxx/submit",V).then(function(ae){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},T=function(){(0,i.fakeApi)("xxx/getForm").then(function(V){c.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(l.default,{form:c,schema:j,onFinish:D}),S.default.createElement(o.default,null,S.default.createElement(f.default,{onClick:T},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),S.default.createElement(f.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},E=d,n.abrupt("return",E);case 44:case"end":return n.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message, Space } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F\u8303\u56F4',
      type: 'range',
      format: 'date',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ startDate: '2020-04-04', endDate: '2020-04-24' });
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Ne}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i,M,w,j,d;return b.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return M=function(v,c){if(!c&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var D=i(c);if(D&&D.has(v))return D.get(v);var T={},L=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var V in v)if(V!=="default"&&Object.prototype.hasOwnProperty.call(v,V)){var x=L?Object.getOwnPropertyDescriptor(v,V):null;x&&(x.get||x.set)?Object.defineProperty(T,V,x):T[V]=v[V]}return T.default=v,D&&D.set(v,T),T},i=function(v){if(typeof WeakMap!="function")return null;var c=new WeakMap,D=new WeakMap;return(i=function(L){return L?D:c})(v)},u=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=u,m.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,o=(0,m.t0)(m.t1),m.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=u,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,f=(0,m.t2)(m.t3),m.t4=M,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,g=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 24:return S=m.sent,m.t6=M,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,a=(0,m.t6)(m.t7),m.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return l=m.sent,w={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},j=function(){var v=(0,a.useForm)(),c=function(){v.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},D=function(L,V){V.length>0?f.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(V.map(function(x){return x.name}))):f.default.info(JSON.stringify(L))};return g.default.createElement("div",{style:{width:"400px"}},g.default.createElement(a.default,{form:v,schema:w,onMount:c,onFinish:D}),g.default.createElement(o.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},d=j,m.abrupt("return",d);case 37:case"end":return m.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          widget: 'select',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setSchemaByPath('obj1.select1', {
      enum: ['east', 'south', 'west', 'north'],
      enumNames: ['\u4E1C', '\u5357', '\u897F', '\u5317'],
    });
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.info(JSON.stringify(data));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        onMount={onMount}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Ne}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i;return b.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return S=function(d,E){if(!E&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=g(E);if(m&&m.has(d))return m.get(d);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in d)if(c!=="default"&&Object.prototype.hasOwnProperty.call(d,c)){var D=v?Object.getOwnPropertyDescriptor(d,c):null;D&&(D.get||D.set)?Object.defineProperty(n,c,D):n[c]=d[c]}return n.default=d,m&&m.set(d,n),n},g=function(d){if(typeof WeakMap!="function")return null;var E=new WeakMap,m=new WeakMap;return(g=function(v){return v?m:E})(d)},u=e("K+nK"),w.t0=u,w.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return w.t1=w.sent,o=(0,w.t0)(w.t1),w.t2=S,w.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return w.t3=w.sent,f=(0,w.t2)(w.t3),a={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var d=(0,f.useForm)();return o.default.createElement(f.default,{form:d,schema:a})},i=l,w.abrupt("return",i);case 17:case"end":return w.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    select1: {
      title: '\u5355\u9009',
      description: '\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D',
      type: 'string',
      enum: ['a', 'b'],
      enumNames: ['\u9690\u85CF\u8F93\u5165\u6846', '\u663E\u793A\u8F93\u5165\u6846'],
      disabled: '{{rootValue.input1.length > 5}}',
      default: 'a',
    },
    input1: {
      title: '\u8F93\u5165\u6846',
      description: '\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26',
      type: 'string',
      hidden: '{{formData.select1 == "a"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u=e("K+nK"),l.t0=u,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=u,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),l.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return g=l.sent,S=function(){return o.default.createElement(f.default,{schema:g.expression})},l.abrupt("return",S);case 16:case"end":return l.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Pe},"json/schema.js":{import:"../json/schema",content:yn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i,M;return b.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return S=function(E,m){if(!m&&E&&E.__esModule)return E;if(E===null||typeof E!="object"&&typeof E!="function")return{default:E};var n=g(m);if(n&&n.has(E))return n.get(E);var v={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in E)if(D!=="default"&&Object.prototype.hasOwnProperty.call(E,D)){var T=c?Object.getOwnPropertyDescriptor(E,D):null;T&&(T.get||T.set)?Object.defineProperty(v,D,T):v[D]=E[D]}return v.default=E,n&&n.set(E,v),v},g=function(E){if(typeof WeakMap!="function")return null;var m=new WeakMap,n=new WeakMap;return(g=function(c){return c?n:m})(E)},j.t0=S,j.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return j.t1=j.sent,u=(0,j.t0)(j.t1),j.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return o=j.sent,j.t2=S,j.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return j.t3=j.sent,f=(0,j.t2)(j.t3),a=function(E){return new Promise(function(m){return setTimeout(m,E)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},i=function(){var E=(0,f.useForm)(),m=function(){E.setValues({input1:"hello world"}),a(3e3).then(function(v){E.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return u.default.createElement(f.default,{form:E,schema:l,onMount:m})},M=i,j.abrupt("return",M);case 20:case"end":return j.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const delay = ms => new Promise(res => setTimeout(res, ms));

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u4E0B\u62C9\u9009\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'select',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setValues({ input1: 'hello world' });

    delay(3000).then(_ => {
      form.setSchemaByPath('select1', {
        description: '',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
      });
    });
  };

  return <FormRender form={form} schema={schema} onMount={onMount} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=e("K+nK"),i.t0=u,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=u,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return o.default.createElement(f.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'list0',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:We}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=e("K+nK"),i.t0=u,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=u,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement(f.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list1',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:We}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=e("K+nK"),i.t0=u,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=u,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return o.default.createElement(f.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list2',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:We}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=e("K+nK"),i.t0=u,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=u,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return o.default.createElement(f.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list3',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'list1',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:We}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=e("K+nK"),i.t0=u,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=u,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),window.hello=function(M){var w=M.value;console.log(w)},g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return o.default.createElement(f.default,{schema:g})},a=S,i.abrupt("return",a);case 16:case"end":return i.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

window.hello = ({ value }) => {
  console.log(value);
};

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list4',
      itemProps: {
        buttons: [
          {
            callback: 'hello',
            text: '\u590D\u5236',
          },
        ],
      },
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:We}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i;return b.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return S=function(d,E){if(!E&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=g(E);if(m&&m.has(d))return m.get(d);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in d)if(c!=="default"&&Object.prototype.hasOwnProperty.call(d,c)){var D=v?Object.getOwnPropertyDescriptor(d,c):null;D&&(D.get||D.set)?Object.defineProperty(n,c,D):n[c]=d[c]}return n.default=d,m&&m.set(d,n),n},g=function(d){if(typeof WeakMap!="function")return null;var E=new WeakMap,m=new WeakMap;return(g=function(v){return v?m:E})(d)},w.t0=S,w.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return w.t1=w.sent,u=(0,w.t0)(w.t1),w.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return o=w.sent,w.t2=S,w.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return w.t3=w.sent,f=(0,w.t2)(w.t3),a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var d=(0,f.useForm)(),E={"#":function(n){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",n)},input1:function(n){d.setValueByPath("input2",n)}};return u.default.createElement(f.default,{form:d,schema:a,watch:E})},i=l,w.abrupt("return",i);case 19:case"end":return w.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const watch = {
    // # \u4E3A\u5168\u5C40
    '#': val => {
      console.log('\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A', val);
    },
    input1: val => {
      form.setValueByPath('input2', val);
    },
  };

  return <FormRender form={form} schema={schema} watch={watch} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i,M,w;return b.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return l=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=a(n);if(v&&v.has(m))return v.get(m);var c={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in m)if(T!=="default"&&Object.prototype.hasOwnProperty.call(m,T)){var L=D?Object.getOwnPropertyDescriptor(m,T):null;L&&(L.get||L.set)?Object.defineProperty(c,T,L):c[T]=m[T]}return c.default=m,v&&v.set(m,c),c},a=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(a=function(D){return D?v:n})(m)},u=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=u,d.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,o=(0,d.t0)(d.t1),d.t2=l,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,f=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=d.sent,d.t4=l,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,S=(0,d.t4)(d.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},M=function(){var m=(0,S.useForm)(),n=function(D,T){T.length>0?alert("errorFields:"+JSON.stringify(T)):alert("formData:"+JSON.stringify(D,null,2))},v={input1:function(D){D.length>2?m.setSchemaByPath("obj1.select",function(T){var L=T.enumNames;return{enumNames:L.map(function(V){return V+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return f.default.createElement("div",null,f.default.createElement(S.default,{form:m,schema:i,onFinish:n,watch:v}),f.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),f.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=M,d.abrupt("return",w);case 27:case"end":return d.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          widget: 'radio',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errorFields) => {
    if (errorFields.length > 0) {
      alert('errorFields:' + JSON.stringify(errorFields));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  const watch = {
    input1: val => {
      if (val.length > 2) {
        form.setSchemaByPath('obj1.select', ({ enumNames }) => {
          return {
            enumNames: enumNames.map(item => item + 'a'),
          };
        });
      } else {
        form.setSchemaByPath('obj1.select', { enumNames: ['\u65E9', '\u4E2D', '\u665A'] });
      }
    },
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        watch={watch}
      />
      <Button
        type=""
        style={{ marginRight: 8 }}
        onClick={() =>
          form.setSchemaByPath('input2', {
            title: '\u7F16\u8F91\u6846',
            format: 'textarea',
          })
        }
      >
        \u5C06 input \u6539\u4E3A textarea
      </Button>
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i,M,w,j,d,E;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return M=function(c,D){if(!D&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var T=i(D);if(T&&T.has(c))return T.get(c);var L={},V=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in c)if(x!=="default"&&Object.prototype.hasOwnProperty.call(c,x)){var ae=V?Object.getOwnPropertyDescriptor(c,x):null;ae&&(ae.get||ae.set)?Object.defineProperty(L,x,ae):L[x]=c[x]}return L.default=c,T&&T.set(c,L),L},i=function(c){if(typeof WeakMap!="function")return null;var D=new WeakMap,T=new WeakMap;return(i=function(V){return V?T:D})(c)},u=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=u,n.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.next=12,Promise.all([e.e(3),e.e(20)]).then(e.t.bind(null,"cUip",7));case 12:return n.t2=u,n.next=15,Promise.all([e.e(0),e.e(14),e.e(19),e.e(23)]).then(e.t.bind(null,"iJl9",7));case 15:return n.t3=n.sent,f=(0,n.t2)(n.t3),n.t4=u,n.next=20,e.e(85).then(e.bind(null,"0Owb"));case 20:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=M,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return a=n.sent,n.t8=M,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,l=(0,n.t8)(n.t9),w={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},j=function(c){return console.log("widget props:",c),S.default.createElement(f.default,(0,g.default)({addonBefore:"http://",addonAfter:".com"},c))},d=function(){var c=(0,l.useForm)(),D=function(){};return S.default.createElement("div",null,S.default.createElement(l.default,{readOnly:!0,form:c,schema:w,widgets:{site:j},onFinish:function(L){return alert(JSON.stringify(L,null,2))}}),S.default.createElement(o.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},E=d,n.abrupt("return",E);case 40:case"end":return n.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import Form, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    select: {
      title: '\u5355\u9009',
      type: 'number',
      enum: [1, 2, 3],
      enumNames: ['\u9009\u98791', '\u9009\u98792', '\u9009\u98793'],
    },
  },
};

const SiteInput = props => {
  console.log('widget props:', props);
  return <Input addonBefore="http://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  const handleSubmit = () => {};
  return (
    <div>
      <Form
        readOnly
        form={form}
        schema={schema}
        widgets={{ site: SiteInput }}
        onFinish={formData => alert(JSON.stringify(formData, null, 2))}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u=e("K+nK"),l.t0=u,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=u,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),l.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return g=l.sent,S=function(){return o.default.createElement(f.default,{schema:g.basic})},l.abrupt("return",S);case 16:case"end":return l.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Pe},"json/schema.js":{import:"../json/schema",content:yn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u=e("K+nK"),l.t0=u,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=u,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),l.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return g=l.sent,S=function(){return o.default.createElement(f.default,{schema:g.titleTrick})},l.abrupt("return",S);case 16:case"end":return l.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Pe},"json/schema.js":{import:"../json/schema",content:yn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:wn},"main.js":{import:"./main",content:Rn},"json/simplest.json":{import:"./json/simplest.json",content:pn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Qe},"monaco/index.js":{import:"./monaco",content:Wn},"suggestionsMap.js":{import:"./suggestionsMap",content:Mn},"index.css":{import:"./index.css",content:jn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.5.8-beta.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{tsx:Me}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a,l,i,M;return b.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return u=e("K+nK"),j.t0=u,j.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return j.t1=j.sent,o=(0,j.t0)(j.t1),j.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(66)]).then(e.bind(null,"P2DI"));case 8:for(f=j.sent,g=[],S=0;S<6;S++)g.push({id:S.toString(),title:"\u6807\u9898".concat(S+1),created_at:new Date().getTime()});return a={type:"object",properties:{string:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(E,m){return o.default.createElement("a",{onClick:function(){return alert(E.title)}},"\u7F16\u8F91")}}],i=function(){var E=function(){return{rows:g,total:g.length}};return o.default.createElement(f.TableProvider,null,o.default.createElement(f.Search,{schema:a,api:E}),o.default.createElement(f.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},M=i,j.abrupt("return",M);case 16:case"end":return j.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, TableProvider } from 'table-render';

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: \`\u6807\u9898\${i + 1}\`,
    created_at: new Date().getTime(),
  });
}

// \u8BE6\u7EC6\u53EF\u89C1 form-render \u7684\u4F7F\u7528
const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u6807\u9898',
      type: 'string',
      width: '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '30%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20 antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => <a onClick={() => alert(row.title)}>\u7F16\u8F91</a>,
  },
];

const Wrapper = () => {
  const searchApi = () => {
    return {
      rows: dataSource,
      total: dataSource.length,
    };
  };
  return (
    <TableProvider>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </TableProvider>
  );
};

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){var u,o,f,g,S,a;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=e("K+nK"),i.t0=u,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=u,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(65)]).then(e.bind(null,"nYSz"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},S=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(f.default,{defaultValue:g}))},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} />
    </div>
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:kn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:Ln}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"SOdT"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:_n}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:et}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(b.a.mark(function A(){return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},A)}));function N(){return I.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:st},"index.less":{import:"./index.less",content:_n}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Fn,gn,e){},Zs1V:function(Fn){Fn.exports=JSON.parse("{}")},mFKp:function(Fn,gn,e){"use strict";e.r(gn);var U=e("q1tI"),t=e.n(U),b=e("dEAq"),W=e.n(b),me=e("0zqC"),H=e("ZpkN"),ln=e("JjdP"),Ne=t.a.memo(ln.default["watch-demo"].component),ge=t.a.memo(ln.default["watch-demo-1"].component);gn.default=We=>(t.a.useEffect(()=>{We!=null&&We.location.hash&&b.AnchorLink.scrollToAnchor(decodeURIComponent(We.location.hash.slice(1)))},[]),t.a.createElement(t.a.Fragment,null,t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u8868\u5355\u76D1\u542C\uFF08watch\uFF09"},t.a.createElement(b.AnchorLink,{to:"#\u8868\u5355\u76D1\u542C\uFF08watch\uFF09","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u8868\u5355\u76D1\u542C\uFF08watch\uFF09"),t.a.createElement("p",null,"\u6709\u65F6\u6211\u4EEC\u9700\u8981\u6839\u636E\u7279\u5B9A\u8868\u5355\u6570\u636E\u7684\u53D8\u52A8\u800C\u65F6\u65F6\u89E6\u53D1\u4E00\u4E2A callback\uFF0CFormRender \u5F00\u653E\u4E86 ",t.a.createElement("code",null,"watch")," \u53D8\u91CF\uFF0C\u7528\u4E8E\u6570\u636E\u7684\u76D1\u542C\u7684\u5524\u8D77\u56DE\u8C03\u3002\u8BED\u6CD5\u7C7B\u4F3C\u4E8E vue \u7684 watch\u3002"),t.a.createElement("p",null,"\u6CE8\u610F form-render \u5E76\u672A\u9650\u5236\u5728 watch \u7684 callback \u91CC\u80FD\u5199\u7684\u5185\u5BB9\uFF0C\u8BF7\u614E\u91CD\u4F7F\u7528\u3002\u4F8B\u5982 path \u662F'#' \u5219\u9ED8\u8BA4\u6BCF\u6B21\u90FD\u4F1A\u6267\u884C\uFF0C\u8981\u662F\u5728 callback \u91CC\u5199\u4E86\u4EFB\u4F55\u5BF9 formData\u3001schema \u7684\u4FEE\u6539\uFF0C\u5C31\u53EF\u80FD\u4F1A\u9677\u5165\u53CD\u590D\u89E6\u53D1\u3002\u6240\u4EE5\u8BF7\u786E\u4FDD watch \u7684\u903B\u8F91\u7B26\u5408\u771F\u5B9E\u8054\u52A8\u4F7F\u7528\u903B\u8F91\u3002"),t.a.createElement("h2",{id:"\u503C\u7684\u8054\u52A8"},t.a.createElement(b.AnchorLink,{to:"#\u503C\u7684\u8054\u52A8","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u503C\u7684\u8054\u52A8"),t.a.createElement("p",null,"\u6CE8\u610F\u4F7F\u7528 form.setValueByPath \u6307\u5B9A\u8DEF\u5F84\u5BF9\u503C\u8FDB\u884C\u4FEE\u6539")),t.a.createElement(me.default,ln.default["watch-demo"].previewerProps,t.a.createElement(Ne,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"schema-\u7684\u8054\u52A8"},t.a.createElement(b.AnchorLink,{to:"#schema-\u7684\u8054\u52A8","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"schema \u7684\u8054\u52A8"),t.a.createElement("p",null,"form.setSchemaByPath \u6307\u5B9A\u8DEF\u5F84\u5BF9 schema \u8FDB\u884C\u4FEE\u6539")),t.a.createElement(me.default,ln.default["watch-demo-1"].previewerProps,t.a.createElement(ge,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("h3",{id:"\u8BED\u6CD5\u8BF4\u660E"},t.a.createElement(b.AnchorLink,{to:"#\u8BED\u6CD5\u8BF4\u660E","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u8BED\u6CD5\u8BF4\u660E"),t.a.createElement("p",null,t.a.createElement("code",null,"watch")," \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0Ckey \u503C\u4E3A\u6570\u636E\u5BF9\u5E94\u7684\u201C\u8DEF\u5F84\u201D\uFF0Cvalue \u4E3A callback \u51FD\u6570\uFF0C\u6216\u8005\u5728\u590D\u6742\u60C5\u51B5\u662F\u4E2A\u5BF9\u8C61"),t.a.createElement(H.a,{code:`const watch = {
  // # \u4E3A\u5168\u5C40
  '#': val => {
    console.log('\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A', val);
  },
  input1: val => {
    if (val !== undefined) {
      form.onItemChange('input2', val);
    }
  },
  'object1.select2': {
    handler: val => {
      if (val === 'option1') {
        form.onItemChange('object1.input2', 'hello');
      }
    },
    immediate: true,
  },
};`,lang:"js"}),t.a.createElement("h3",{id:"option-immediate"},t.a.createElement(b.AnchorLink,{to:"#option-immediate","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"Option: immediate"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u7C7B\u578B: boolean"),t.a.createElement("li",null,"\u9ED8\u8BA4: false")),t.a.createElement("p",null,t.a.createElement("code",null,"immediate: true")," \u4F1A\u5728\u9996\u6B21\u52A0\u8F7D\u65F6\u5C31\u6267\u884C\u4E00\u6B21 watch \u7684 handler"),t.a.createElement(H.a,{code:`const watch = {
  // # \u4E3A\u5168\u5C40
  input1: {
    handler: val => {
      if (val !== undefined) {
        form.onItemChange('input2', val);
      }
    },
    immediate: true,
  },
};`,lang:"js"})))))},p8sG:function(Fn,gn,e){"use strict";Fn.exports=e("80pN")}}]);