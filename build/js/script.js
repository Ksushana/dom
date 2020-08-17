/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*! jQuery UI - v1.12.1 - 2020-03-16
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}t.ui=t.ui||{},t.ui.version="1.12.1";var i=0,s=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},h=e.split(".")[0];e=e.split(".")[1];var l=h+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][l.toLowerCase()]=function(e){return!!t.data(e,l)},t[h]=t[h]||{},n=t[h][e],o=t[h][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:h,widgetName:e,widgetFullName:l}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,n,o=s.call(arguments,1),a=0,r=o.length;r>a;a++)for(i in o[a])n=o[a][i],o[a].hasOwnProperty(i)&&void 0!==n&&(e[i]=t.isPlainObject(n)?t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=s.call(arguments,1),h=this;return a?this.length||"instance"!==o?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(h=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):h=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new i(o,this))})),h}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+o.eventNamespace,c=h[2];c?n.on(l,c,r):i.on(l,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,h=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):h.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=h.test(i[1])?i[1]:"center",t=l.exec(i[0]),e=l.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,h=t(this),l=h.outerWidth(),c=h.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=l+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),I=e(k.my,h.outerWidth(),h.outerHeight());"right"===n.my[0]?D.left-=l:"center"===n.my[0]&&(D.left-=l/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=I[0],D.top+=I[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:l,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+I[0],u[1]+I[1]],my:n.my,at:n.at,within:b,elem:h})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-l,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:h,left:D.left,top:D.top,width:l,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};l>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),h.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-r-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-r-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-h,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),t.ui.focusable=function(i,s){var n,o,a,r,h,l=i.nodeName.toLowerCase();return"area"===l?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(l)?(r=!i.disabled,r&&(h=t(i).closest("fieldset")[0],h&&(r=!h.disabled))):r="a"===l?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,s,n,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(o.find(i).addBack(i))),this.pushStack(n))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,s=this.options.icons;s&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+s.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,s.header)._addClass(i,null,s.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void 0)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),t(o).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),s=e.next(),n=s.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(e=n.height(),this.element.siblings(":visible").each(function(){var i=t(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===s&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,s,n=this.options,o=this.active,a=t(e.currentTarget),r=a[0]===o[0],h=r&&n.collapsible,l=h?t():a.next(),c=o.next(),u={oldHeader:o,oldPanel:c,newHeader:h?t():a,newPanel:l};e.preventDefault(),r&&!n.collapsible||this._trigger("beforeActivate",e,u)===!1||(n.active=h?!1:this.headers.index(a),this.active=r?t():a,this._toggle(u),this._removeClass(o,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=o.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)),r||(this._removeClass(a,"ui-accordion-header-collapsed")._addClass(a,"ui-accordion-header-active","ui-state-active"),n.icons&&(s=a.children(".ui-accordion-header-icon"),this._removeClass(s,null,n.icons.header)._addClass(s,null,n.icons.activeHeader)),this._addClass(a.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var s,n,o,a=this,r=0,h=t.css("box-sizing"),l=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=l&&c.down||c,d=function(){a._toggleComplete(i)};return"number"==typeof u&&(o=u),"string"==typeof u&&(n=u),n=n||u.easing||c.easing,o=o||u.duration||c.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:n,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(this.showProps,{duration:o,easing:n,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==a.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0)}}),void 0):e.animate(this.hideProps,o,n,d):t.animate(this.showProps,o,n,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}})});
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
/**
 * Swiper 6.1.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: August 17, 2020
 */

!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e = e || self).Swiper = t());
})(this, function () {
  'use strict';
  function e(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      (s.enumerable = s.enumerable || !1),
        (s.configurable = !0),
        'value' in s && (s.writable = !0),
        Object.defineProperty(e, s.key, s);
    }
  }
  function t() {
    return (t =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i)
            Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
        }
        return e;
      }).apply(this, arguments);
  }
  function i(e) {
    return (
      null !== e &&
      'object' == typeof e &&
      'constructor' in e &&
      e.constructor === Object
    );
  }
  function s(e, t) {
    void 0 === e && (e = {}),
      void 0 === t && (t = {}),
      Object.keys(t).forEach(function (a) {
        void 0 === e[a]
          ? (e[a] = t[a])
          : i(t[a]) && i(e[a]) && Object.keys(t[a]).length > 0 && s(e[a], t[a]);
      });
  }
  var a = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: { blur: function () {}, nodeName: '' },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return { initEvent: function () {} };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        },
      };
    },
    createElementNS: function () {
      return {};
    },
    importNode: function () {
      return null;
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
  };
  function r() {
    var e = 'undefined' != typeof document ? document : {};
    return s(e, a), e;
  }
  var n = {
    document: a,
    navigator: { userAgent: '' },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {},
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return '';
        },
      };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {};
    },
    requestAnimationFrame: function (e) {
      return 'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function (e) {
      'undefined' != typeof setTimeout && clearTimeout(e);
    },
  };
  function l() {
    var e = 'undefined' != typeof window ? window : {};
    return s(e, n), e;
  }
  function o(e) {
    return (o = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function d(e, t) {
    return (d =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function h() {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {}),
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function p(e, t, i) {
    return (p = h()
      ? Reflect.construct
      : function (e, t, i) {
          var s = [null];
          s.push.apply(s, t);
          var a = new (Function.bind.apply(e, s))();
          return i && d(a, i.prototype), a;
        }).apply(null, arguments);
  }
  function u(e) {
    var t = 'function' == typeof Map ? new Map() : void 0;
    return (u = function (e) {
      if (
        null === e ||
        ((i = e), -1 === Function.toString.call(i).indexOf('[native code]'))
      )
        return e;
      var i;
      if ('function' != typeof e)
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, s);
      }
      function s() {
        return p(e, arguments, o(this).constructor);
      }
      return (
        (s.prototype = Object.create(e.prototype, {
          constructor: {
            value: s,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        d(s, e)
      );
    })(e);
  }
  var c = (function (e) {
    var t, i;
    function s(t) {
      var i, s, a;
      return (
        (i = e.call.apply(e, [this].concat(t)) || this),
        (s = (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return e;
        })(i)),
        (a = s.__proto__),
        Object.defineProperty(s, '__proto__', {
          get: function () {
            return a;
          },
          set: function (e) {
            a.__proto__ = e;
          },
        }),
        i
      );
    }
    return (
      (i = e),
      ((t = s).prototype = Object.create(i.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = i),
      s
    );
  })(u(Array));
  function v(e) {
    void 0 === e && (e = []);
    var t = [];
    return (
      e.forEach(function (e) {
        Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
      }),
      t
    );
  }
  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function m(e, t) {
    var i = l(),
      s = r(),
      a = [];
    if (!t && e instanceof c) return e;
    if (!e) return new c(a);
    if ('string' == typeof e) {
      var n = e.trim();
      if (n.indexOf('<') >= 0 && n.indexOf('>') >= 0) {
        var o = 'div';
        0 === n.indexOf('<li') && (o = 'ul'),
          0 === n.indexOf('<tr') && (o = 'tbody'),
          (0 !== n.indexOf('<td') && 0 !== n.indexOf('<th')) || (o = 'tr'),
          0 === n.indexOf('<tbody') && (o = 'table'),
          0 === n.indexOf('<option') && (o = 'select');
        var d = s.createElement(o);
        d.innerHTML = n;
        for (var h = 0; h < d.childNodes.length; h += 1)
          a.push(d.childNodes[h]);
      } else
        a = (function (e, t) {
          if ('string' != typeof e) return [e];
          for (
            var i = [], s = t.querySelectorAll(e), a = 0;
            a < s.length;
            a += 1
          )
            i.push(s[a]);
          return i;
        })(e.trim(), t || s);
    } else if (e.nodeType || e === i || e === s) a.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof c) return e;
      a = e;
    }
    return new c(
      (function (e) {
        for (var t = [], i = 0; i < e.length; i += 1)
          -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
      })(a),
    );
  }
  m.fn = c.prototype;
  var g,
    w,
    b,
    y = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var s = v(
          t.map(function (e) {
            return e.split(' ');
          }),
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).add.apply(t, s);
          }),
          this
        );
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var s = v(
          t.map(function (e) {
            return e.split(' ');
          }),
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).remove.apply(t, s);
          }),
          this
        );
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var s = v(
          t.map(function (e) {
            return e.split(' ');
          }),
        );
        return (
          f(this, function (e) {
            return (
              s.filter(function (t) {
                return e.classList.contains(t);
              }).length > 0
            );
          }).length > 0
        );
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var s = v(
          t.map(function (e) {
            return e.split(' ');
          }),
        );
        this.forEach(function (e) {
          s.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && 'string' == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (var i = 0; i < this.length; i += 1)
          if (2 === arguments.length) this[i].setAttribute(e, t);
          else
            for (var s in e) (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
        return this;
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (var t = 0; t < this.length; t += 1)
          this[t].style.transition = 'string' != typeof e ? e + 'ms' : e;
        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];
        function l(e) {
          var t = e.target;
          if (t) {
            var i = e.target.dom7EventData || [];
            if ((i.indexOf(e) < 0 && i.unshift(e), m(t).is(a))) r.apply(t, i);
            else
              for (var s = m(t).parents(), n = 0; n < s.length; n += 1)
                m(s[n]).is(a) && r.apply(s[n], i);
          }
        }
        function o(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }
        'function' == typeof t[1] &&
          ((s = t[0]), (r = t[1]), (n = t[2]), (a = void 0)),
          n || (n = !1);
        for (var d, h = s.split(' '), p = 0; p < this.length; p += 1) {
          var u = this[p];
          if (a)
            for (d = 0; d < h.length; d += 1) {
              var c = h[d];
              u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []),
                u.dom7LiveListeners[c].push({ listener: r, proxyListener: l }),
                u.addEventListener(c, l, n);
            }
          else
            for (d = 0; d < h.length; d += 1) {
              var v = h[d];
              u.dom7Listeners || (u.dom7Listeners = {}),
                u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
                u.dom7Listeners[v].push({ listener: r, proxyListener: o }),
                u.addEventListener(v, o, n);
            }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];
        'function' == typeof t[1] &&
          ((s = t[0]), (r = t[1]), (n = t[2]), (a = void 0)),
          n || (n = !1);
        for (var l = s.split(' '), o = 0; o < l.length; o += 1)
          for (var d = l[o], h = 0; h < this.length; h += 1) {
            var p = this[h],
              u = void 0;
            if (
              (!a && p.dom7Listeners
                ? (u = p.dom7Listeners[d])
                : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]),
              u && u.length)
            )
              for (var c = u.length - 1; c >= 0; c -= 1) {
                var v = u[c];
                (r && v.listener === r) ||
                (r &&
                  v.listener &&
                  v.listener.dom7proxy &&
                  v.listener.dom7proxy === r)
                  ? (p.removeEventListener(d, v.proxyListener, n),
                    u.splice(c, 1))
                  : r ||
                    (p.removeEventListener(d, v.proxyListener, n),
                    u.splice(c, 1));
              }
          }
        return this;
      },
      trigger: function () {
        for (
          var e = l(), t = arguments.length, i = new Array(t), s = 0;
          s < t;
          s++
        )
          i[s] = arguments[s];
        for (var a = i[0].split(' '), r = i[1], n = 0; n < a.length; n += 1)
          for (var o = a[n], d = 0; d < this.length; d += 1) {
            var h = this[d];
            if (e.CustomEvent) {
              var p = new e.CustomEvent(o, {
                detail: r,
                bubbles: !0,
                cancelable: !0,
              });
              (h.dom7EventData = i.filter(function (e, t) {
                return t > 0;
              })),
                h.dispatchEvent(p),
                (h.dom7EventData = []),
                delete h.dom7EventData;
            }
          }
        return this;
      },
      transitionEnd: function (e) {
        var t = this;
        return (
          e &&
            t.on('transitionend', function i(s) {
              s.target === this && (e.call(this, s), t.off('transitionend', i));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue('margin-right')) +
              parseFloat(t.getPropertyValue('margin-left'))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue('margin-top')) +
              parseFloat(t.getPropertyValue('margin-bottom'))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        var e = l();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          var e = l(),
            t = r(),
            i = this[0],
            s = i.getBoundingClientRect(),
            a = t.body,
            n = i.clientTop || a.clientTop || 0,
            o = i.clientLeft || a.clientLeft || 0,
            d = i === e ? e.scrollY : i.scrollTop,
            h = i === e ? e.scrollX : i.scrollLeft;
          return { top: s.top + d - n, left: s.left + h - o };
        }
        return null;
      },
      css: function (e, t) {
        var i,
          s = l();
        if (1 === arguments.length) {
          if ('string' != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (var a in e) this[i].style[a] = e[a];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && 'string' == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach(function (t, i) {
              e.apply(t, [t, i]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        var t,
          i,
          s = l(),
          a = r(),
          n = this[0];
        if (!n || void 0 === e) return !1;
        if ('string' == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (t = m(e), i = 0; i < t.length; i += 1) if (t[i] === n) return !0;
          return !1;
        }
        if (e === a) return n === a;
        if (e === s) return n === s;
        if (e.nodeType || e instanceof c) {
          for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
            if (t[i] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return m([]);
        if (e < 0) {
          var i = t + e;
          return m(i < 0 ? [] : [this[i]]);
        }
        return m([this[e]]);
      },
      append: function () {
        for (var e, t = r(), i = 0; i < arguments.length; i += 1) {
          e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          for (var s = 0; s < this.length; s += 1)
            if ('string' == typeof e) {
              var a = t.createElement('div');
              for (a.innerHTML = e; a.firstChild; )
                this[s].appendChild(a.firstChild);
            } else if (e instanceof c)
              for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
            else this[s].appendChild(e);
        }
        return this;
      },
      prepend: function (e) {
        var t,
          i,
          s = r();
        for (t = 0; t < this.length; t += 1)
          if ('string' == typeof e) {
            var a = s.createElement('div');
            for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1)
              this[t].insertBefore(a.childNodes[i], this[t].childNodes[0]);
          } else if (e instanceof c)
            for (i = 0; i < e.length; i += 1)
              this[t].insertBefore(e[i], this[t].childNodes[0]);
          else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e)
              ? m([this[0].nextElementSibling])
              : m([])
            : this[0].nextElementSibling
            ? m([this[0].nextElementSibling])
            : m([])
          : m([]);
      },
      nextAll: function (e) {
        var t = [],
          i = this[0];
        if (!i) return m([]);
        for (; i.nextElementSibling; ) {
          var s = i.nextElementSibling;
          e ? m(s).is(e) && t.push(s) : t.push(s), (i = s);
        }
        return m(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          var t = this[0];
          return e
            ? t.previousElementSibling && m(t.previousElementSibling).is(e)
              ? m([t.previousElementSibling])
              : m([])
            : t.previousElementSibling
            ? m([t.previousElementSibling])
            : m([]);
        }
        return m([]);
      },
      prevAll: function (e) {
        var t = [],
          i = this[0];
        if (!i) return m([]);
        for (; i.previousElementSibling; ) {
          var s = i.previousElementSibling;
          e ? m(s).is(e) && t.push(s) : t.push(s), (i = s);
        }
        return m(t);
      },
      parent: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          null !== this[i].parentNode &&
            (e
              ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode)
              : t.push(this[i].parentNode));
        return m(t);
      },
      parents: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var s = this[i].parentNode; s; )
            e ? m(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
        return m(t);
      },
      closest: function (e) {
        var t = this;
        return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1)
            t.push(s[a]);
        return m(t);
      },
      children: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var s = this[i].children, a = 0; a < s.length; a += 1)
            (e && !m(s[a]).is(e)) || t.push(s[a]);
        return m(t);
      },
      filter: function (e) {
        return m(f(this, e));
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function x() {
    return Date.now();
  }
  function T(e, t) {
    void 0 === t && (t = 'x');
    var i,
      s,
      a,
      r = l(),
      n = r.getComputedStyle(e, null);
    return (
      r.WebKitCSSMatrix
        ? ((s = n.transform || n.webkitTransform).split(',').length > 6 &&
            (s = s
              .split(', ')
              .map(function (e) {
                return e.replace(',', '.');
              })
              .join(', ')),
          (a = new r.WebKitCSSMatrix('none' === s ? '' : s)))
        : (i = (a =
            n.MozTransform ||
            n.OTransform ||
            n.MsTransform ||
            n.msTransform ||
            n.transform ||
            n
              .getPropertyValue('transform')
              .replace('translate(', 'matrix(1, 0, 0, 1,'))
            .toString()
            .split(',')),
      'x' === t &&
        (s = r.WebKitCSSMatrix
          ? a.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      'y' === t &&
        (s = r.WebKitCSSMatrix
          ? a.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      s || 0
    );
  }
  function C(e) {
    return (
      'object' == typeof e &&
      null !== e &&
      e.constructor &&
      e.constructor === Object
    );
  }
  function S() {
    for (
      var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1;
      t < arguments.length;
      t += 1
    ) {
      var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (null != i)
        for (
          var s = Object.keys(Object(i)), a = 0, r = s.length;
          a < r;
          a += 1
        ) {
          var n = s[a],
            l = Object.getOwnPropertyDescriptor(i, n);
          void 0 !== l &&
            l.enumerable &&
            (C(e[n]) && C(i[n])
              ? S(e[n], i[n])
              : !C(e[n]) && C(i[n])
              ? ((e[n] = {}), S(e[n], i[n]))
              : (e[n] = i[n]));
        }
    }
    return e;
  }
  function M(e, t) {
    Object.keys(t).forEach(function (i) {
      C(t[i]) &&
        Object.keys(t[i]).forEach(function (s) {
          'function' == typeof t[i][s] && (t[i][s] = t[i][s].bind(e));
        }),
        (e[i] = t[i]);
    });
  }
  function z() {
    return (
      g ||
        (g = (function () {
          var e = l(),
            t = r();
          return {
            touch: !!(
              'ontouchstart' in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            pointerEvents:
              !!e.PointerEvent &&
              'maxTouchPoints' in e.navigator &&
              e.navigator.maxTouchPoints >= 0,
            observer: 'MutationObserver' in e || 'WebkitMutationObserver' in e,
            passiveListener: (function () {
              var t = !1;
              try {
                var i = Object.defineProperty({}, 'passive', {
                  get: function () {
                    t = !0;
                  },
                });
                e.addEventListener('testPassiveListener', null, i);
              } catch (e) {}
              return t;
            })(),
            gestures: 'ongesturestart' in e,
          };
        })()),
      g
    );
  }
  function P(e) {
    return (
      void 0 === e && (e = {}),
      w ||
        (w = (function (e) {
          var t = (void 0 === e ? {} : e).userAgent,
            i = z(),
            s = l(),
            a = s.navigator.platform,
            r = t || s.navigator.userAgent,
            n = { ios: !1, android: !1 },
            o = s.screen.width,
            d = s.screen.height,
            h = r.match(/(Android);?[\s\/]+([\d.]+)?/),
            p = r.match(/(iPad).*OS\s([\d_]+)/),
            u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
            c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            v = 'Win32' === a,
            f = 'MacIntel' === a;
          return (
            !p &&
              f &&
              i.touch &&
              [
                '1024x1366',
                '1366x1024',
                '834x1194',
                '1194x834',
                '834x1112',
                '1112x834',
                '768x1024',
                '1024x768',
              ].indexOf(o + 'x' + d) >= 0 &&
              ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, '13_0_0']),
              (f = !1)),
            h && !v && ((n.os = 'android'), (n.android = !0)),
            (p || c || u) && ((n.os = 'ios'), (n.ios = !0)),
            n
          );
        })(e)),
      w
    );
  }
  function k() {
    return (
      b ||
        (b = (function () {
          var e,
            t = l();
          return {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari:
              ((e = t.navigator.userAgent.toLowerCase()),
              e.indexOf('safari') >= 0 &&
                e.indexOf('chrome') < 0 &&
                e.indexOf('android') < 0),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              t.navigator.userAgent,
            ),
          };
        })()),
      b
    );
  }
  Object.keys(y).forEach(function (e) {
    m.fn[e] = y[e];
  });
  var $ = {
      name: 'resize',
      create: function () {
        var e = this;
        S(e, {
          resize: {
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit('beforeResize'), e.emit('resize'));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit('orientationchange');
            },
          },
        });
      },
      on: {
        init: function (e) {
          var t = l();
          t.addEventListener('resize', e.resize.resizeHandler),
            t.addEventListener(
              'orientationchange',
              e.resize.orientationChangeHandler,
            );
        },
        destroy: function (e) {
          var t = l();
          t.removeEventListener('resize', e.resize.resizeHandler),
            t.removeEventListener(
              'orientationchange',
              e.resize.orientationChangeHandler,
            );
        },
      },
    },
    L = {
      attach: function (e, t) {
        void 0 === t && (t = {});
        var i = l(),
          s = this,
          a = new (i.MutationObserver || i.WebkitMutationObserver)(function (
            e,
          ) {
            if (1 !== e.length) {
              var t = function () {
                s.emit('observerUpdate', e[0]);
              };
              i.requestAnimationFrame
                ? i.requestAnimationFrame(t)
                : i.setTimeout(t, 0);
            } else s.emit('observerUpdate', e[0]);
          });
        a.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          s.observer.observers.push(a);
      },
      init: function () {
        if (this.support.observer && this.params.observer) {
          if (this.params.observeParents)
            for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
              this.observer.attach(e[t]);
          this.observer.attach(this.$el[0], {
            childList: this.params.observeSlideChildren,
          }),
            this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    },
    I = {
      name: 'observer',
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create: function () {
        M(this, { observer: t(t({}, L), {}, { observers: [] }) });
      },
      on: {
        init: function (e) {
          e.observer.init();
        },
        destroy: function (e) {
          e.observer.destroy();
        },
      },
    };
  function O(e) {
    var t = r(),
      i = l(),
      s = this.touchEventsData,
      a = this.params,
      n = this.touches;
    if (!this.animating || !a.preventInteractionOnTransition) {
      var o = e;
      o.originalEvent && (o = o.originalEvent);
      var d = m(o.target);
      if (
        ('wrapper' !== a.touchEventsTarget ||
          d.closest(this.wrapperEl).length) &&
        ((s.isTouchEvent = 'touchstart' === o.type),
        (s.isTouchEvent || !('which' in o) || 3 !== o.which) &&
          !(
            (!s.isTouchEvent && 'button' in o && o.button > 0) ||
            (s.isTouched && s.isMoved)
          ))
      )
        if (
          a.noSwiping &&
          d.closest(
            a.noSwipingSelector ? a.noSwipingSelector : '.' + a.noSwipingClass,
          )[0]
        )
          this.allowClick = !0;
        else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
          (n.currentX =
            'touchstart' === o.type ? o.targetTouches[0].pageX : o.pageX),
            (n.currentY =
              'touchstart' === o.type ? o.targetTouches[0].pageY : o.pageY);
          var h = n.currentX,
            p = n.currentY,
            u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
            c = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
          if (!u || !(h <= c || h >= i.screen.width - c)) {
            if (
              (S(s, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0,
              }),
              (n.startX = h),
              (n.startY = p),
              (s.touchStartTime = x()),
              (this.allowClick = !0),
              this.updateSize(),
              (this.swipeDirection = void 0),
              a.threshold > 0 && (s.allowThresholdMove = !1),
              'touchstart' !== o.type)
            ) {
              var v = !0;
              d.is(s.formElements) && (v = !1),
                t.activeElement &&
                  m(t.activeElement).is(s.formElements) &&
                  t.activeElement !== d[0] &&
                  t.activeElement.blur();
              var f = v && this.allowTouchMove && a.touchStartPreventDefault;
              (a.touchStartForcePreventDefault || f) && o.preventDefault();
            }
            this.emit('touchStart', o);
          }
        }
    }
  }
  function A(e) {
    var t = r(),
      i = this.touchEventsData,
      s = this.params,
      a = this.touches,
      n = this.rtlTranslate,
      l = e;
    if ((l.originalEvent && (l = l.originalEvent), i.isTouched)) {
      if (!i.isTouchEvent || 'touchmove' === l.type) {
        var o =
            'touchmove' === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          d = 'touchmove' === l.type ? o.pageX : l.pageX,
          h = 'touchmove' === l.type ? o.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (a.startX = d), void (a.startY = h);
        if (!this.allowTouchMove)
          return (
            (this.allowClick = !1),
            void (
              i.isTouched &&
              (S(a, { startX: d, startY: h, currentX: d, currentY: h }),
              (i.touchStartTime = x()))
            )
          );
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (this.isVertical()) {
            if (
              (h < a.startY && this.translate <= this.maxTranslate()) ||
              (h > a.startY && this.translate >= this.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (d < a.startX && this.translate <= this.maxTranslate()) ||
            (d > a.startX && this.translate >= this.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          m(l.target).is(i.formElements)
        )
          return (i.isMoved = !0), void (this.allowClick = !1);
        if (
          (i.allowTouchCallbacks && this.emit('touchMove', l),
          !(l.targetTouches && l.targetTouches.length > 1))
        ) {
          (a.currentX = d), (a.currentY = h);
          var p = a.currentX - a.startX,
            u = a.currentY - a.startY;
          if (
            !(
              this.params.threshold &&
              Math.sqrt(Math.pow(p, 2) + Math.pow(u, 2)) < this.params.threshold
            )
          ) {
            var c;
            if (void 0 === i.isScrolling)
              (this.isHorizontal() && a.currentY === a.startY) ||
              (this.isVertical() && a.currentX === a.startX)
                ? (i.isScrolling = !1)
                : p * p + u * u >= 25 &&
                  ((c = (180 * Math.atan2(Math.abs(u), Math.abs(p))) / Math.PI),
                  (i.isScrolling = this.isHorizontal()
                    ? c > s.touchAngle
                    : 90 - c > s.touchAngle));
            if (
              (i.isScrolling && this.emit('touchMoveOpposite', l),
              void 0 === i.startMoving &&
                ((a.currentX === a.startX && a.currentY === a.startY) ||
                  (i.startMoving = !0)),
              i.isScrolling)
            )
              i.isTouched = !1;
            else if (i.startMoving) {
              (this.allowClick = !1),
                !s.cssMode && l.cancelable && l.preventDefault(),
                s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
                i.isMoved ||
                  (s.loop && this.loopFix(),
                  (i.startTranslate = this.getTranslate()),
                  this.setTransition(0),
                  this.animating &&
                    this.$wrapperEl.trigger(
                      'webkitTransitionEnd transitionend',
                    ),
                  (i.allowMomentumBounce = !1),
                  !s.grabCursor ||
                    (!0 !== this.allowSlideNext &&
                      !0 !== this.allowSlidePrev) ||
                    this.setGrabCursor(!0),
                  this.emit('sliderFirstMove', l)),
                this.emit('sliderMove', l),
                (i.isMoved = !0);
              var v = this.isHorizontal() ? p : u;
              (a.diff = v),
                (v *= s.touchRatio),
                n && (v = -v),
                (this.swipeDirection = v > 0 ? 'prev' : 'next'),
                (i.currentTranslate = v + i.startTranslate);
              var f = !0,
                g = s.resistanceRatio;
              if (
                (s.touchReleaseOnEdges && (g = 0),
                v > 0 && i.currentTranslate > this.minTranslate()
                  ? ((f = !1),
                    s.resistance &&
                      (i.currentTranslate =
                        this.minTranslate() -
                        1 +
                        Math.pow(
                          -this.minTranslate() + i.startTranslate + v,
                          g,
                        )))
                  : v < 0 &&
                    i.currentTranslate < this.maxTranslate() &&
                    ((f = !1),
                    s.resistance &&
                      (i.currentTranslate =
                        this.maxTranslate() +
                        1 -
                        Math.pow(
                          this.maxTranslate() - i.startTranslate - v,
                          g,
                        ))),
                f && (l.preventedByNestedSwiper = !0),
                !this.allowSlideNext &&
                  'next' === this.swipeDirection &&
                  i.currentTranslate < i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                !this.allowSlidePrev &&
                  'prev' === this.swipeDirection &&
                  i.currentTranslate > i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                s.threshold > 0)
              ) {
                if (!(Math.abs(v) > s.threshold || i.allowThresholdMove))
                  return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove)
                  return (
                    (i.allowThresholdMove = !0),
                    (a.startX = a.currentX),
                    (a.startY = a.currentY),
                    (i.currentTranslate = i.startTranslate),
                    void (a.diff = this.isHorizontal()
                      ? a.currentX - a.startX
                      : a.currentY - a.startY)
                  );
              }
              s.followFinger &&
                !s.cssMode &&
                ((s.freeMode ||
                  s.watchSlidesProgress ||
                  s.watchSlidesVisibility) &&
                  (this.updateActiveIndex(), this.updateSlidesClasses()),
                s.freeMode &&
                  (0 === i.velocities.length &&
                    i.velocities.push({
                      position: a[this.isHorizontal() ? 'startX' : 'startY'],
                      time: i.touchStartTime,
                    }),
                  i.velocities.push({
                    position: a[this.isHorizontal() ? 'currentX' : 'currentY'],
                    time: x(),
                  })),
                this.updateProgress(i.currentTranslate),
                this.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && this.emit('touchMoveOpposite', l);
  }
  function D(e) {
    var t = this,
      i = t.touchEventsData,
      s = t.params,
      a = t.touches,
      r = t.rtlTranslate,
      n = t.$wrapperEl,
      l = t.slidesGrid,
      o = t.snapGrid,
      d = e;
    if (
      (d.originalEvent && (d = d.originalEvent),
      i.allowTouchCallbacks && t.emit('touchEnd', d),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    )
      return (
        i.isMoved && s.grabCursor && t.setGrabCursor(!1),
        (i.isMoved = !1),
        void (i.startMoving = !1)
      );
    s.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    var h,
      p = x(),
      u = p - i.touchStartTime;
    if (
      (t.allowClick &&
        (t.updateClickedSlide(d),
        t.emit('tap click', d),
        u < 300 &&
          p - i.lastClickTime < 300 &&
          t.emit('doubleTap doubleClick', d)),
      (i.lastClickTime = x()),
      E(function () {
        t.destroyed || (t.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !t.swipeDirection ||
        0 === a.diff ||
        i.currentTranslate === i.startTranslate)
    )
      return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
    if (
      ((i.isTouched = !1),
      (i.isMoved = !1),
      (i.startMoving = !1),
      (h = s.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -i.currentTranslate),
      !s.cssMode)
    )
      if (s.freeMode) {
        if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (h > -t.maxTranslate())
          return void (t.slides.length < o.length
            ? t.slideTo(o.length - 1)
            : t.slideTo(t.slides.length - 1));
        if (s.freeModeMomentum) {
          if (i.velocities.length > 1) {
            var c = i.velocities.pop(),
              v = i.velocities.pop(),
              f = c.position - v.position,
              m = c.time - v.time;
            (t.velocity = f / m),
              (t.velocity /= 2),
              Math.abs(t.velocity) < s.freeModeMinimumVelocity &&
                (t.velocity = 0),
              (m > 150 || x() - c.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;
          (t.velocity *= s.freeModeMomentumVelocityRatio),
            (i.velocities.length = 0);
          var g = 1e3 * s.freeModeMomentumRatio,
            w = t.velocity * g,
            b = t.translate + w;
          r && (b = -b);
          var y,
            T,
            C = !1,
            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
          if (b < t.maxTranslate())
            s.freeModeMomentumBounce
              ? (b + t.maxTranslate() < -S && (b = t.maxTranslate() - S),
                (y = t.maxTranslate()),
                (C = !0),
                (i.allowMomentumBounce = !0))
              : (b = t.maxTranslate()),
              s.loop && s.centeredSlides && (T = !0);
          else if (b > t.minTranslate())
            s.freeModeMomentumBounce
              ? (b - t.minTranslate() > S && (b = t.minTranslate() + S),
                (y = t.minTranslate()),
                (C = !0),
                (i.allowMomentumBounce = !0))
              : (b = t.minTranslate()),
              s.loop && s.centeredSlides && (T = !0);
          else if (s.freeModeSticky) {
            for (var M, z = 0; z < o.length; z += 1)
              if (o[z] > -b) {
                M = z;
                break;
              }
            b = -(b =
              Math.abs(o[M] - b) < Math.abs(o[M - 1] - b) ||
              'next' === t.swipeDirection
                ? o[M]
                : o[M - 1]);
          }
          if (
            (T &&
              t.once('transitionEnd', function () {
                t.loopFix();
              }),
            0 !== t.velocity)
          ) {
            if (
              ((g = r
                ? Math.abs((-b - t.translate) / t.velocity)
                : Math.abs((b - t.translate) / t.velocity)),
              s.freeModeSticky)
            ) {
              var P = Math.abs((r ? -b : b) - t.translate),
                k = t.slidesSizesGrid[t.activeIndex];
              g = P < k ? s.speed : P < 2 * k ? 1.5 * s.speed : 2.5 * s.speed;
            }
          } else if (s.freeModeSticky) return void t.slideToClosest();
          s.freeModeMomentumBounce && C
            ? (t.updateProgress(y),
              t.setTransition(g),
              t.setTranslate(b),
              t.transitionStart(!0, t.swipeDirection),
              (t.animating = !0),
              n.transitionEnd(function () {
                t &&
                  !t.destroyed &&
                  i.allowMomentumBounce &&
                  (t.emit('momentumBounce'),
                  t.setTransition(s.speed),
                  setTimeout(function () {
                    t.setTranslate(y),
                      n.transitionEnd(function () {
                        t && !t.destroyed && t.transitionEnd();
                      });
                  }, 0));
              }))
            : t.velocity
            ? (t.updateProgress(b),
              t.setTransition(g),
              t.setTranslate(b),
              t.transitionStart(!0, t.swipeDirection),
              t.animating ||
                ((t.animating = !0),
                n.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                })))
            : t.updateProgress(b),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        } else if (s.freeModeSticky) return void t.slideToClosest();
        (!s.freeModeMomentum || u >= s.longSwipesMs) &&
          (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
      } else {
        for (
          var $ = 0, L = t.slidesSizesGrid[0], I = 0;
          I < l.length;
          I += I < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
        ) {
          var O = I < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== l[I + O]
            ? h >= l[I] && h < l[I + O] && (($ = I), (L = l[I + O] - l[I]))
            : h >= l[I] && (($ = I), (L = l[l.length - 1] - l[l.length - 2]));
        }
        var A = (h - l[$]) / L,
          D = $ < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (u > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          'next' === t.swipeDirection &&
            (A >= s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)),
            'prev' === t.swipeDirection &&
              (A > 1 - s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
            ? d.target === t.navigation.nextEl
              ? t.slideTo($ + D)
              : t.slideTo($)
            : ('next' === t.swipeDirection && t.slideTo($ + D),
              'prev' === t.swipeDirection && t.slideTo($));
        }
      }
  }
  function G() {
    var e = this.params,
      t = this.el;
    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
        s = this.allowSlidePrev,
        a = this.snapGrid;
      (this.allowSlideNext = !0),
        (this.allowSlidePrev = !0),
        this.updateSize(),
        this.updateSlides(),
        this.updateSlidesClasses(),
        ('auto' === e.slidesPerView || e.slidesPerView > 1) &&
        this.isEnd &&
        !this.isBeginning &&
        !this.params.centeredSlides
          ? this.slideTo(this.slides.length - 1, 0, !1, !0)
          : this.slideTo(this.activeIndex, 0, !1, !0),
        this.autoplay &&
          this.autoplay.running &&
          this.autoplay.paused &&
          this.autoplay.run(),
        (this.allowSlidePrev = s),
        (this.allowSlideNext = i),
        this.params.watchOverflow &&
          a !== this.snapGrid &&
          this.checkOverflow();
    }
  }
  function N(e) {
    this.allowClick ||
      (this.params.preventClicks && e.preventDefault(),
      this.params.preventClicksPropagation &&
        this.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation()));
  }
  function B() {
    var e = this.wrapperEl,
      t = this.rtlTranslate;
    (this.previousTranslate = this.translate),
      this.isHorizontal()
        ? (this.translate = t
            ? e.scrollWidth - e.offsetWidth - e.scrollLeft
            : -e.scrollLeft)
        : (this.translate = -e.scrollTop),
      -0 === this.translate && (this.translate = 0),
      this.updateActiveIndex(),
      this.updateSlidesClasses();
    var i = this.maxTranslate() - this.minTranslate();
    (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !==
      this.progress &&
      this.updateProgress(t ? -this.translate : this.translate),
      this.emit('setTranslate', this.translate, !1);
  }
  var H = !1;
  function X() {}
  var Y = {
      init: !0,
      direction: 'horizontal',
      touchEventsTarget: 'container',
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: 'slide',
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: 'swiper-container-',
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    },
    V = {
      modular: {
        useParams: function (e) {
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function (i) {
              var s = t.modules[i];
              s.params && S(e, s.params);
            });
        },
        useModules: function (e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function (i) {
              var s = t.modules[i],
                a = e[i] || {};
              s.on &&
                t.on &&
                Object.keys(s.on).forEach(function (e) {
                  t.on(e, s.on[e]);
                }),
                s.create && s.create.bind(t)(a);
            });
        },
      },
      eventsEmitter: {
        on: function (e, t, i) {
          var s = this;
          if ('function' != typeof t) return s;
          var a = i ? 'unshift' : 'push';
          return (
            e.split(' ').forEach(function (e) {
              s.eventsListeners[e] || (s.eventsListeners[e] = []),
                s.eventsListeners[e][a](t);
            }),
            s
          );
        },
        once: function (e, t, i) {
          var s = this;
          if ('function' != typeof t) return s;
          function a() {
            s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
              r[n] = arguments[n];
            t.apply(s, r);
          }
          return (a.__emitterProxy = t), s.on(e, a, i);
        },
        onAny: function (e, t) {
          if ('function' != typeof e) return this;
          var i = t ? 'unshift' : 'push';
          return (
            this.eventsAnyListeners.indexOf(e) < 0 &&
              this.eventsAnyListeners[i](e),
            this
          );
        },
        offAny: function (e) {
          if (!this.eventsAnyListeners) return this;
          var t = this.eventsAnyListeners.indexOf(e);
          return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
        },
        off: function (e, t) {
          var i = this;
          return i.eventsListeners
            ? (e.split(' ').forEach(function (e) {
                void 0 === t
                  ? (i.eventsListeners[e] = [])
                  : i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach(function (s, a) {
                      (s === t ||
                        (s.__emitterProxy && s.__emitterProxy === t)) &&
                        i.eventsListeners[e].splice(a, 1);
                    });
              }),
              i)
            : i;
        },
        emit: function () {
          var e,
            t,
            i,
            s = this;
          if (!s.eventsListeners) return s;
          for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++)
            r[n] = arguments[n];
          'string' == typeof r[0] || Array.isArray(r[0])
            ? ((e = r[0]), (t = r.slice(1, r.length)), (i = s))
            : ((e = r[0].events), (t = r[0].data), (i = r[0].context || s)),
            t.unshift(i);
          var l = Array.isArray(e) ? e : e.split(' ');
          return (
            l.forEach(function (e) {
              if (s.eventsListeners && s.eventsListeners[e]) {
                var a = [];
                s.eventsListeners[e].forEach(function (e) {
                  a.push(e);
                }),
                  a.forEach(function (e) {
                    e.apply(i, t);
                  });
              }
            }),
            s
          );
        },
      },
      update: {
        updateSize: function () {
          var e,
            t,
            i = this.$el;
          (e =
            void 0 !== this.params.width && null !== this.params.width
              ? this.params.width
              : i[0].clientWidth),
            (t =
              void 0 !== this.params.height && null !== this.params.width
                ? this.params.height
                : i[0].clientHeight),
            (0 === e && this.isHorizontal()) ||
              (0 === t && this.isVertical()) ||
              ((e =
                e -
                parseInt(i.css('padding-left') || 0, 10) -
                parseInt(i.css('padding-right') || 0, 10)),
              (t =
                t -
                parseInt(i.css('padding-top') || 0, 10) -
                parseInt(i.css('padding-bottom') || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              S(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t,
              }));
        },
        updateSlides: function () {
          var e = l(),
            t = this.params,
            i = this.$wrapperEl,
            s = this.size,
            a = this.rtlTranslate,
            r = this.wrongRTL,
            n = this.virtual && t.virtual.enabled,
            o = n ? this.virtual.slides.length : this.slides.length,
            d = i.children('.' + this.params.slideClass),
            h = n ? this.virtual.slides.length : d.length,
            p = [],
            u = [],
            c = [];
          function v(e, i) {
            return !t.cssMode || i !== d.length - 1;
          }
          var f = t.slidesOffsetBefore;
          'function' == typeof f && (f = t.slidesOffsetBefore.call(this));
          var m = t.slidesOffsetAfter;
          'function' == typeof m && (m = t.slidesOffsetAfter.call(this));
          var g = this.snapGrid.length,
            w = this.snapGrid.length,
            b = t.spaceBetween,
            y = -f,
            E = 0,
            x = 0;
          if (void 0 !== s) {
            var T, C;
            'string' == typeof b &&
              b.indexOf('%') >= 0 &&
              (b = (parseFloat(b.replace('%', '')) / 100) * s),
              (this.virtualSize = -b),
              a
                ? d.css({ marginLeft: '', marginTop: '' })
                : d.css({ marginRight: '', marginBottom: '' }),
              t.slidesPerColumn > 1 &&
                ((T =
                  Math.floor(h / t.slidesPerColumn) ===
                  h / this.params.slidesPerColumn
                    ? h
                    : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn),
                'auto' !== t.slidesPerView &&
                  'row' === t.slidesPerColumnFill &&
                  (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
            for (
              var M,
                z = t.slidesPerColumn,
                P = T / z,
                k = Math.floor(h / t.slidesPerColumn),
                $ = 0;
              $ < h;
              $ += 1
            ) {
              C = 0;
              var L = d.eq($);
              if (t.slidesPerColumn > 1) {
                var I = void 0,
                  O = void 0,
                  A = void 0;
                if ('row' === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                  var D = Math.floor(
                      $ / (t.slidesPerGroup * t.slidesPerColumn),
                    ),
                    G = $ - t.slidesPerColumn * t.slidesPerGroup * D,
                    N =
                      0 === D
                        ? t.slidesPerGroup
                        : Math.min(
                            Math.ceil((h - D * z * t.slidesPerGroup) / z),
                            t.slidesPerGroup,
                          );
                  (I =
                    (O =
                      G - (A = Math.floor(G / N)) * N + D * t.slidesPerGroup) +
                    (A * T) / z),
                    L.css({
                      '-webkit-box-ordinal-group': I,
                      '-moz-box-ordinal-group': I,
                      '-ms-flex-order': I,
                      '-webkit-order': I,
                      order: I,
                    });
                } else
                  'column' === t.slidesPerColumnFill
                    ? ((A = $ - (O = Math.floor($ / z)) * z),
                      (O > k || (O === k && A === z - 1)) &&
                        (A += 1) >= z &&
                        ((A = 0), (O += 1)))
                    : (O = $ - (A = Math.floor($ / P)) * P);
                L.css(
                  'margin-' + (this.isHorizontal() ? 'top' : 'left'),
                  0 !== A && t.spaceBetween && t.spaceBetween + 'px',
                );
              }
              if ('none' !== L.css('display')) {
                if ('auto' === t.slidesPerView) {
                  var B = e.getComputedStyle(L[0], null),
                    H = L[0].style.transform,
                    X = L[0].style.webkitTransform;
                  if (
                    (H && (L[0].style.transform = 'none'),
                    X && (L[0].style.webkitTransform = 'none'),
                    t.roundLengths)
                  )
                    C = this.isHorizontal()
                      ? L.outerWidth(!0)
                      : L.outerHeight(!0);
                  else if (this.isHorizontal()) {
                    var Y = parseFloat(B.getPropertyValue('width') || 0),
                      V = parseFloat(B.getPropertyValue('padding-left') || 0),
                      F = parseFloat(B.getPropertyValue('padding-right') || 0),
                      W = parseFloat(B.getPropertyValue('margin-left') || 0),
                      R = parseFloat(B.getPropertyValue('margin-right') || 0),
                      q = B.getPropertyValue('box-sizing');
                    C = q && 'border-box' === q ? Y + W + R : Y + V + F + W + R;
                  } else {
                    var j = parseFloat(B.getPropertyValue('height') || 0),
                      _ = parseFloat(B.getPropertyValue('padding-top') || 0),
                      U = parseFloat(B.getPropertyValue('padding-bottom') || 0),
                      K = parseFloat(B.getPropertyValue('margin-top') || 0),
                      Z = parseFloat(B.getPropertyValue('margin-bottom') || 0),
                      J = B.getPropertyValue('box-sizing');
                    C = J && 'border-box' === J ? j + K + Z : j + _ + U + K + Z;
                  }
                  H && (L[0].style.transform = H),
                    X && (L[0].style.webkitTransform = X),
                    t.roundLengths && (C = Math.floor(C));
                } else
                  (C = (s - (t.slidesPerView - 1) * b) / t.slidesPerView),
                    t.roundLengths && (C = Math.floor(C)),
                    d[$] &&
                      (this.isHorizontal()
                        ? (d[$].style.width = C + 'px')
                        : (d[$].style.height = C + 'px'));
                d[$] && (d[$].swiperSlideSize = C),
                  c.push(C),
                  t.centeredSlides
                    ? ((y = y + C / 2 + E / 2 + b),
                      0 === E && 0 !== $ && (y = y - s / 2 - b),
                      0 === $ && (y = y - s / 2 - b),
                      Math.abs(y) < 0.001 && (y = 0),
                      t.roundLengths && (y = Math.floor(y)),
                      x % t.slidesPerGroup == 0 && p.push(y),
                      u.push(y))
                    : (t.roundLengths && (y = Math.floor(y)),
                      (x - Math.min(this.params.slidesPerGroupSkip, x)) %
                        this.params.slidesPerGroup ==
                        0 && p.push(y),
                      u.push(y),
                      (y = y + C + b)),
                  (this.virtualSize += C + b),
                  (E = C),
                  (x += 1);
              }
            }
            if (
              ((this.virtualSize = Math.max(this.virtualSize, s) + m),
              a &&
                r &&
                ('slide' === t.effect || 'coverflow' === t.effect) &&
                i.css({ width: this.virtualSize + t.spaceBetween + 'px' }),
              t.setWrapperSize &&
                (this.isHorizontal()
                  ? i.css({ width: this.virtualSize + t.spaceBetween + 'px' })
                  : i.css({
                      height: this.virtualSize + t.spaceBetween + 'px',
                    })),
              t.slidesPerColumn > 1 &&
                ((this.virtualSize = (C + t.spaceBetween) * T),
                (this.virtualSize =
                  Math.ceil(this.virtualSize / t.slidesPerColumn) -
                  t.spaceBetween),
                this.isHorizontal()
                  ? i.css({ width: this.virtualSize + t.spaceBetween + 'px' })
                  : i.css({ height: this.virtualSize + t.spaceBetween + 'px' }),
                t.centeredSlides))
            ) {
              M = [];
              for (var Q = 0; Q < p.length; Q += 1) {
                var ee = p[Q];
                t.roundLengths && (ee = Math.floor(ee)),
                  p[Q] < this.virtualSize + p[0] && M.push(ee);
              }
              p = M;
            }
            if (!t.centeredSlides) {
              M = [];
              for (var te = 0; te < p.length; te += 1) {
                var ie = p[te];
                t.roundLengths && (ie = Math.floor(ie)),
                  p[te] <= this.virtualSize - s && M.push(ie);
              }
              (p = M),
                Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) >
                  1 && p.push(this.virtualSize - s);
            }
            if (
              (0 === p.length && (p = [0]),
              0 !== t.spaceBetween &&
                (this.isHorizontal()
                  ? a
                    ? d.filter(v).css({ marginLeft: b + 'px' })
                    : d.filter(v).css({ marginRight: b + 'px' })
                  : d.filter(v).css({ marginBottom: b + 'px' })),
              t.centeredSlides && t.centeredSlidesBounds)
            ) {
              var se = 0;
              c.forEach(function (e) {
                se += e + (t.spaceBetween ? t.spaceBetween : 0);
              });
              var ae = (se -= t.spaceBetween) - s;
              p = p.map(function (e) {
                return e < 0 ? -f : e > ae ? ae + m : e;
              });
            }
            if (t.centerInsufficientSlides) {
              var re = 0;
              if (
                (c.forEach(function (e) {
                  re += e + (t.spaceBetween ? t.spaceBetween : 0);
                }),
                (re -= t.spaceBetween) < s)
              ) {
                var ne = (s - re) / 2;
                p.forEach(function (e, t) {
                  p[t] = e - ne;
                }),
                  u.forEach(function (e, t) {
                    u[t] = e + ne;
                  });
              }
            }
            S(this, {
              slides: d,
              snapGrid: p,
              slidesGrid: u,
              slidesSizesGrid: c,
            }),
              h !== o && this.emit('slidesLengthChange'),
              p.length !== g &&
                (this.params.watchOverflow && this.checkOverflow(),
                this.emit('snapGridLengthChange')),
              u.length !== w && this.emit('slidesGridLengthChange'),
              (t.watchSlidesProgress || t.watchSlidesVisibility) &&
                this.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            i = [],
            s = 0;
          if (
            ('number' == typeof e
              ? this.setTransition(e)
              : !0 === e && this.setTransition(this.params.speed),
            'auto' !== this.params.slidesPerView &&
              this.params.slidesPerView > 1)
          )
            if (this.params.centeredSlides)
              this.visibleSlides.each(function (e) {
                i.push(e);
              });
            else
              for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                var a = this.activeIndex + t;
                if (a > this.slides.length) break;
                i.push(this.slides.eq(a)[0]);
              }
          else i.push(this.slides.eq(this.activeIndex)[0]);
          for (t = 0; t < i.length; t += 1)
            if (void 0 !== i[t]) {
              var r = i[t].offsetHeight;
              s = r > s ? r : s;
            }
          s && this.$wrapperEl.css('height', s + 'px');
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this.params,
            i = this.slides,
            s = this.rtlTranslate;
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
            var a = -e;
            s && (a = e),
              i.removeClass(t.slideVisibleClass),
              (this.visibleSlidesIndexes = []),
              (this.visibleSlides = []);
            for (var r = 0; r < i.length; r += 1) {
              var n = i[r],
                l =
                  (a +
                    (t.centeredSlides ? this.minTranslate() : 0) -
                    n.swiperSlideOffset) /
                  (n.swiperSlideSize + t.spaceBetween);
              if (
                t.watchSlidesVisibility ||
                (t.centeredSlides && t.autoHeight)
              ) {
                var o = -(a - n.swiperSlideOffset),
                  d = o + this.slidesSizesGrid[r];
                ((o >= 0 && o < this.size - 1) ||
                  (d > 1 && d <= this.size) ||
                  (o <= 0 && d >= this.size)) &&
                  (this.visibleSlides.push(n),
                  this.visibleSlidesIndexes.push(r),
                  i.eq(r).addClass(t.slideVisibleClass));
              }
              n.progress = s ? -l : l;
            }
            this.visibleSlides = m(this.visibleSlides);
          }
        },
        updateProgress: function (e) {
          if (void 0 === e) {
            var t = this.rtlTranslate ? -1 : 1;
            e = (this && this.translate && this.translate * t) || 0;
          }
          var i = this.params,
            s = this.maxTranslate() - this.minTranslate(),
            a = this.progress,
            r = this.isBeginning,
            n = this.isEnd,
            l = r,
            o = n;
          0 === s
            ? ((a = 0), (r = !0), (n = !0))
            : ((r = (a = (e - this.minTranslate()) / s) <= 0), (n = a >= 1)),
            S(this, { progress: a, isBeginning: r, isEnd: n }),
            (i.watchSlidesProgress ||
              i.watchSlidesVisibility ||
              (i.centeredSlides && i.autoHeight)) &&
              this.updateSlidesProgress(e),
            r && !l && this.emit('reachBeginning toEdge'),
            n && !o && this.emit('reachEnd toEdge'),
            ((l && !r) || (o && !n)) && this.emit('fromEdge'),
            this.emit('progress', a);
        },
        updateSlidesClasses: function () {
          var e,
            t = this.slides,
            i = this.params,
            s = this.$wrapperEl,
            a = this.activeIndex,
            r = this.realIndex,
            n = this.virtual && i.virtual.enabled;
          t.removeClass(
            i.slideActiveClass +
              ' ' +
              i.slideNextClass +
              ' ' +
              i.slidePrevClass +
              ' ' +
              i.slideDuplicateActiveClass +
              ' ' +
              i.slideDuplicateNextClass +
              ' ' +
              i.slideDuplicatePrevClass,
          ),
            (e = n
              ? this.$wrapperEl.find(
                  '.' + i.slideClass + '[data-swiper-slide-index="' + a + '"]',
                )
              : t.eq(a)).addClass(i.slideActiveClass),
            i.loop &&
              (e.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      '.' +
                        i.slideClass +
                        ':not(.' +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        r +
                        '"]',
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      '.' +
                        i.slideClass +
                        '.' +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        r +
                        '"]',
                    )
                    .addClass(i.slideDuplicateActiveClass));
          var l = e
            .nextAll('.' + i.slideClass)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
          var o = e
            .prevAll('.' + i.slideClass)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass),
            i.loop &&
              (l.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      '.' +
                        i.slideClass +
                        ':not(.' +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        l.attr('data-swiper-slide-index') +
                        '"]',
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      '.' +
                        i.slideClass +
                        '.' +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        l.attr('data-swiper-slide-index') +
                        '"]',
                    )
                    .addClass(i.slideDuplicateNextClass),
              o.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      '.' +
                        i.slideClass +
                        ':not(.' +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        o.attr('data-swiper-slide-index') +
                        '"]',
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      '.' +
                        i.slideClass +
                        '.' +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        o.attr('data-swiper-slide-index') +
                        '"]',
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            this.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            i = this.rtlTranslate ? this.translate : -this.translate,
            s = this.slidesGrid,
            a = this.snapGrid,
            r = this.params,
            n = this.activeIndex,
            l = this.realIndex,
            o = this.snapIndex,
            d = e;
          if (void 0 === d) {
            for (var h = 0; h < s.length; h += 1)
              void 0 !== s[h + 1]
                ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2
                  ? (d = h)
                  : i >= s[h] && i < s[h + 1] && (d = h + 1)
                : i >= s[h] && (d = h);
            r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (a.indexOf(i) >= 0) t = a.indexOf(i);
          else {
            var p = Math.min(r.slidesPerGroupSkip, d);
            t = p + Math.floor((d - p) / r.slidesPerGroup);
          }
          if ((t >= a.length && (t = a.length - 1), d !== n)) {
            var u = parseInt(
              this.slides.eq(d).attr('data-swiper-slide-index') || d,
              10,
            );
            S(this, {
              snapIndex: t,
              realIndex: u,
              previousIndex: n,
              activeIndex: d,
            }),
              this.emit('activeIndexChange'),
              this.emit('snapIndexChange'),
              l !== u && this.emit('realIndexChange'),
              (this.initialized || this.params.runCallbacksOnInit) &&
                this.emit('slideChange');
          } else
            t !== o && ((this.snapIndex = t), this.emit('snapIndexChange'));
        },
        updateClickedSlide: function (e) {
          var t = this.params,
            i = m(e.target).closest('.' + t.slideClass)[0],
            s = !1;
          if (i)
            for (var a = 0; a < this.slides.length; a += 1)
              this.slides[a] === i && (s = !0);
          if (!i || !s)
            return (
              (this.clickedSlide = void 0), void (this.clickedIndex = void 0)
            );
          (this.clickedSlide = i),
            this.virtual && this.params.virtual.enabled
              ? (this.clickedIndex = parseInt(
                  m(i).attr('data-swiper-slide-index'),
                  10,
                ))
              : (this.clickedIndex = m(i).index()),
            t.slideToClickedSlide &&
              void 0 !== this.clickedIndex &&
              this.clickedIndex !== this.activeIndex &&
              this.slideToClickedSlide();
        },
      },
      translate: {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
          var t = this.params,
            i = this.rtlTranslate,
            s = this.translate,
            a = this.$wrapperEl;
          if (t.virtualTranslate) return i ? -s : s;
          if (t.cssMode) return s;
          var r = T(a[0], e);
          return i && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
          var i = this.rtlTranslate,
            s = this.params,
            a = this.$wrapperEl,
            r = this.wrapperEl,
            n = this.progress,
            l = 0,
            o = 0;
          this.isHorizontal() ? (l = i ? -e : e) : (o = e),
            s.roundLengths && ((l = Math.floor(l)), (o = Math.floor(o))),
            s.cssMode
              ? (r[
                  this.isHorizontal() ? 'scrollLeft' : 'scrollTop'
                ] = this.isHorizontal() ? -l : -o)
              : s.virtualTranslate ||
                a.transform('translate3d(' + l + 'px, ' + o + 'px, 0px)'),
            (this.previousTranslate = this.translate),
            (this.translate = this.isHorizontal() ? l : o);
          var d = this.maxTranslate() - this.minTranslate();
          (0 === d ? 0 : (e - this.minTranslate()) / d) !== n &&
            this.updateProgress(e),
            this.emit('setTranslate', this.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, i, s, a) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            void 0 === s && (s = !0);
          var r = this,
            n = r.params,
            l = r.wrapperEl;
          if (r.animating && n.preventInteractionOnTransition) return !1;
          var o,
            d = r.minTranslate(),
            h = r.maxTranslate();
          if (
            ((o = s && e > d ? d : s && e < h ? h : e),
            r.updateProgress(o),
            n.cssMode)
          ) {
            var p,
              u = r.isHorizontal();
            if (0 === t) l[u ? 'scrollLeft' : 'scrollTop'] = -o;
            else if (l.scrollTo)
              l.scrollTo(
                (((p = {})[u ? 'left' : 'top'] = -o),
                (p.behavior = 'smooth'),
                p),
              );
            else l[u ? 'scrollLeft' : 'scrollTop'] = -o;
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(o),
                i &&
                  (r.emit('beforeTransitionStart', t, a),
                  r.emit('transitionEnd')))
              : (r.setTransition(t),
                r.setTranslate(o),
                i &&
                  (r.emit('beforeTransitionStart', t, a),
                  r.emit('transitionStart')),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          'transitionend',
                          r.onTranslateToWrapperTransitionEnd,
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          'webkitTransitionEnd',
                          r.onTranslateToWrapperTransitionEnd,
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        i && r.emit('transitionEnd'));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    'transitionend',
                    r.onTranslateToWrapperTransitionEnd,
                  ),
                  r.$wrapperEl[0].addEventListener(
                    'webkitTransitionEnd',
                    r.onTranslateToWrapperTransitionEnd,
                  ))),
            !0
          );
        },
      },
      transition: {
        setTransition: function (e, t) {
          this.params.cssMode || this.$wrapperEl.transition(e),
            this.emit('setTransition', e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          var i = this.activeIndex,
            s = this.params,
            a = this.previousIndex;
          if (!s.cssMode) {
            s.autoHeight && this.updateAutoHeight();
            var r = t;
            if (
              (r || (r = i > a ? 'next' : i < a ? 'prev' : 'reset'),
              this.emit('transitionStart'),
              e && i !== a)
            ) {
              if ('reset' === r)
                return void this.emit('slideResetTransitionStart');
              this.emit('slideChangeTransitionStart'),
                'next' === r
                  ? this.emit('slideNextTransitionStart')
                  : this.emit('slidePrevTransitionStart');
            }
          }
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          var i = this.activeIndex,
            s = this.previousIndex,
            a = this.params;
          if (((this.animating = !1), !a.cssMode)) {
            this.setTransition(0);
            var r = t;
            if (
              (r || (r = i > s ? 'next' : i < s ? 'prev' : 'reset'),
              this.emit('transitionEnd'),
              e && i !== s)
            ) {
              if ('reset' === r)
                return void this.emit('slideResetTransitionEnd');
              this.emit('slideChangeTransitionEnd'),
                'next' === r
                  ? this.emit('slideNextTransitionEnd')
                  : this.emit('slidePrevTransitionEnd');
            }
          }
        },
      },
      slide: {
        slideTo: function (e, t, i, s) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
          var a = this,
            r = e;
          r < 0 && (r = 0);
          var n = a.params,
            l = a.snapGrid,
            o = a.slidesGrid,
            d = a.previousIndex,
            h = a.activeIndex,
            p = a.rtlTranslate,
            u = a.wrapperEl;
          if (a.animating && n.preventInteractionOnTransition) return !1;
          var c = Math.min(a.params.slidesPerGroupSkip, r),
            v = c + Math.floor((r - c) / a.params.slidesPerGroup);
          v >= l.length && (v = l.length - 1),
            (h || n.initialSlide || 0) === (d || 0) &&
              i &&
              a.emit('beforeSlideChangeStart');
          var f,
            m = -l[v];
          if ((a.updateProgress(m), n.normalizeSlideIndex))
            for (var g = 0; g < o.length; g += 1)
              -Math.floor(100 * m) >= Math.floor(100 * o[g]) && (r = g);
          if (a.initialized && r !== h) {
            if (!a.allowSlideNext && m < a.translate && m < a.minTranslate())
              return !1;
            if (
              !a.allowSlidePrev &&
              m > a.translate &&
              m > a.maxTranslate() &&
              (h || 0) !== r
            )
              return !1;
          }
          if (
            ((f = r > h ? 'next' : r < h ? 'prev' : 'reset'),
            (p && -m === a.translate) || (!p && m === a.translate))
          )
            return (
              a.updateActiveIndex(r),
              n.autoHeight && a.updateAutoHeight(),
              a.updateSlidesClasses(),
              'slide' !== n.effect && a.setTranslate(m),
              'reset' !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)),
              !1
            );
          if (n.cssMode) {
            var w,
              b = a.isHorizontal(),
              y = -m;
            if ((p && (y = u.scrollWidth - u.offsetWidth - y), 0 === t))
              u[b ? 'scrollLeft' : 'scrollTop'] = y;
            else if (u.scrollTo)
              u.scrollTo(
                (((w = {})[b ? 'left' : 'top'] = y),
                (w.behavior = 'smooth'),
                w),
              );
            else u[b ? 'scrollLeft' : 'scrollTop'] = y;
            return !0;
          }
          return (
            0 === t
              ? (a.setTransition(0),
                a.setTranslate(m),
                a.updateActiveIndex(r),
                a.updateSlidesClasses(),
                a.emit('beforeTransitionStart', t, s),
                a.transitionStart(i, f),
                a.transitionEnd(i, f))
              : (a.setTransition(t),
                a.setTranslate(m),
                a.updateActiveIndex(r),
                a.updateSlidesClasses(),
                a.emit('beforeTransitionStart', t, s),
                a.transitionStart(i, f),
                a.animating ||
                  ((a.animating = !0),
                  a.onSlideToWrapperTransitionEnd ||
                    (a.onSlideToWrapperTransitionEnd = function (e) {
                      a &&
                        !a.destroyed &&
                        e.target === this &&
                        (a.$wrapperEl[0].removeEventListener(
                          'transitionend',
                          a.onSlideToWrapperTransitionEnd,
                        ),
                        a.$wrapperEl[0].removeEventListener(
                          'webkitTransitionEnd',
                          a.onSlideToWrapperTransitionEnd,
                        ),
                        (a.onSlideToWrapperTransitionEnd = null),
                        delete a.onSlideToWrapperTransitionEnd,
                        a.transitionEnd(i, f));
                    }),
                  a.$wrapperEl[0].addEventListener(
                    'transitionend',
                    a.onSlideToWrapperTransitionEnd,
                  ),
                  a.$wrapperEl[0].addEventListener(
                    'webkitTransitionEnd',
                    a.onSlideToWrapperTransitionEnd,
                  ))),
            !0
          );
        },
        slideToLoop: function (e, t, i, s) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
          var a = e;
          return (
            this.params.loop && (a += this.loopedSlides),
            this.slideTo(a, t, i, s)
          );
        },
        slideNext: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var s = this.params,
            a = this.animating,
            r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
          if (s.loop) {
            if (a && s.loopPreventsSlide) return !1;
            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
          }
          return this.slideTo(this.activeIndex + r, e, t, i);
        },
        slidePrev: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var s = this.params,
            a = this.animating,
            r = this.snapGrid,
            n = this.slidesGrid,
            l = this.rtlTranslate;
          if (s.loop) {
            if (a && s.loopPreventsSlide) return !1;
            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
          }
          function o(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var d,
            h = o(l ? this.translate : -this.translate),
            p = r.map(function (e) {
              return o(e);
            }),
            u = (r[p.indexOf(h)], r[p.indexOf(h) - 1]);
          return (
            void 0 === u &&
              s.cssMode &&
              r.forEach(function (e) {
                !u && h >= e && (u = e);
              }),
            void 0 !== u &&
              (d = n.indexOf(u)) < 0 &&
              (d = this.activeIndex - 1),
            this.slideTo(d, e, t, i)
          );
        },
        slideReset: function (e, t, i) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, i)
          );
        },
        slideToClosest: function (e, t, i, s) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === s && (s = 0.5);
          var a = this.activeIndex,
            r = Math.min(this.params.slidesPerGroupSkip, a),
            n = r + Math.floor((a - r) / this.params.slidesPerGroup),
            l = this.rtlTranslate ? this.translate : -this.translate;
          if (l >= this.snapGrid[n]) {
            var o = this.snapGrid[n];
            l - o > (this.snapGrid[n + 1] - o) * s &&
              (a += this.params.slidesPerGroup);
          } else {
            var d = this.snapGrid[n - 1];
            l - d <= (this.snapGrid[n] - d) * s &&
              (a -= this.params.slidesPerGroup);
          }
          return (
            (a = Math.max(a, 0)),
            (a = Math.min(a, this.slidesGrid.length - 1)),
            this.slideTo(a, e, t, i)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            i = t.params,
            s = t.$wrapperEl,
            a =
              'auto' === i.slidesPerView
                ? t.slidesPerViewDynamic()
                : i.slidesPerView,
            r = t.clickedIndex;
          if (i.loop) {
            if (t.animating) return;
            (e = parseInt(
              m(t.clickedSlide).attr('data-swiper-slide-index'),
              10,
            )),
              i.centeredSlides
                ? r < t.loopedSlides - a / 2 ||
                  r > t.slides.length - t.loopedSlides + a / 2
                  ? (t.loopFix(),
                    (r = s
                      .children(
                        '.' +
                          i.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          i.slideDuplicateClass +
                          ')',
                      )
                      .eq(0)
                      .index()),
                    E(function () {
                      t.slideTo(r);
                    }))
                  : t.slideTo(r)
                : r > t.slides.length - a
                ? (t.loopFix(),
                  (r = s
                    .children(
                      '.' +
                        i.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]:not(.' +
                        i.slideDuplicateClass +
                        ')',
                    )
                    .eq(0)
                    .index()),
                  E(function () {
                    t.slideTo(r);
                  }))
                : t.slideTo(r);
          } else t.slideTo(r);
        },
      },
      loop: {
        loopCreate: function () {
          var e = this,
            t = r(),
            i = e.params,
            s = e.$wrapperEl;
          s.children('.' + i.slideClass + '.' + i.slideDuplicateClass).remove();
          var a = s.children('.' + i.slideClass);
          if (i.loopFillGroupWithBlank) {
            var n = i.slidesPerGroup - (a.length % i.slidesPerGroup);
            if (n !== i.slidesPerGroup) {
              for (var l = 0; l < n; l += 1) {
                var o = m(t.createElement('div')).addClass(
                  i.slideClass + ' ' + i.slideBlankClass,
                );
                s.append(o);
              }
              a = s.children('.' + i.slideClass);
            }
          }
          'auto' !== i.slidesPerView ||
            i.loopedSlides ||
            (i.loopedSlides = a.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(i.loopedSlides || i.slidesPerView, 10),
            )),
            (e.loopedSlides += i.loopAdditionalSlides),
            e.loopedSlides > a.length && (e.loopedSlides = a.length);
          var d = [],
            h = [];
          a.each(function (t, i) {
            var s = m(t);
            i < e.loopedSlides && h.push(t),
              i < a.length && i >= a.length - e.loopedSlides && d.push(t),
              s.attr('data-swiper-slide-index', i);
          });
          for (var p = 0; p < h.length; p += 1)
            s.append(m(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
          for (var u = d.length - 1; u >= 0; u -= 1)
            s.prepend(m(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function () {
          this.emit('beforeLoopFix');
          var e,
            t = this.activeIndex,
            i = this.slides,
            s = this.loopedSlides,
            a = this.allowSlidePrev,
            r = this.allowSlideNext,
            n = this.snapGrid,
            l = this.rtlTranslate;
          (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
          var o = -n[t] - this.getTranslate();
          if (t < s)
            (e = i.length - 3 * s + t),
              (e += s),
              this.slideTo(e, 0, !1, !0) &&
                0 !== o &&
                this.setTranslate((l ? -this.translate : this.translate) - o);
          else if (t >= i.length - s) {
            (e = -i.length + t + s),
              (e += s),
              this.slideTo(e, 0, !1, !0) &&
                0 !== o &&
                this.setTranslate((l ? -this.translate : this.translate) - o);
          }
          (this.allowSlidePrev = a),
            (this.allowSlideNext = r),
            this.emit('loopFix');
        },
        loopDestroy: function () {
          var e = this.$wrapperEl,
            t = this.params,
            i = this.slides;
          e
            .children(
              '.' +
                t.slideClass +
                '.' +
                t.slideDuplicateClass +
                ',.' +
                t.slideClass +
                '.' +
                t.slideBlankClass,
            )
            .remove(),
            i.removeAttr('data-swiper-slide-index');
        },
      },
      grabCursor: {
        setGrabCursor: function (e) {
          if (
            !(
              this.support.touch ||
              !this.params.simulateTouch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode
            )
          ) {
            var t = this.el;
            (t.style.cursor = 'move'),
              (t.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
              (t.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
              (t.style.cursor = e ? 'grabbing' : 'grab');
          }
        },
        unsetGrabCursor: function () {
          this.support.touch ||
            (this.params.watchOverflow && this.isLocked) ||
            this.params.cssMode ||
            (this.el.style.cursor = '');
        },
      },
      manipulation: {
        appendSlide: function (e) {
          var t = this.$wrapperEl,
            i = this.params;
          if (
            (i.loop && this.loopDestroy(),
            'object' == typeof e && 'length' in e)
          )
            for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
          else t.append(e);
          i.loop && this.loopCreate(),
            (i.observer && this.support.observer) || this.update();
        },
        prependSlide: function (e) {
          var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
          t.loop && this.loopDestroy();
          var a = s + 1;
          if ('object' == typeof e && 'length' in e) {
            for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
            a = s + e.length;
          } else i.prepend(e);
          t.loop && this.loopCreate(),
            (t.observer && this.support.observer) || this.update(),
            this.slideTo(a, 0, !1);
        },
        addSlide: function (e, t) {
          var i = this.$wrapperEl,
            s = this.params,
            a = this.activeIndex;
          s.loop &&
            ((a -= this.loopedSlides),
            this.loopDestroy(),
            (this.slides = i.children('.' + s.slideClass)));
          var r = this.slides.length;
          if (e <= 0) this.prependSlide(t);
          else if (e >= r) this.appendSlide(t);
          else {
            for (var n = a > e ? a + 1 : a, l = [], o = r - 1; o >= e; o -= 1) {
              var d = this.slides.eq(o);
              d.remove(), l.unshift(d);
            }
            if ('object' == typeof t && 'length' in t) {
              for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);
              n = a > e ? a + t.length : a;
            } else i.append(t);
            for (var p = 0; p < l.length; p += 1) i.append(l[p]);
            s.loop && this.loopCreate(),
              (s.observer && this.support.observer) || this.update(),
              s.loop
                ? this.slideTo(n + this.loopedSlides, 0, !1)
                : this.slideTo(n, 0, !1);
          }
        },
        removeSlide: function (e) {
          var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
          t.loop &&
            ((s -= this.loopedSlides),
            this.loopDestroy(),
            (this.slides = i.children('.' + t.slideClass)));
          var a,
            r = s;
          if ('object' == typeof e && 'length' in e) {
            for (var n = 0; n < e.length; n += 1)
              (a = e[n]),
                this.slides[a] && this.slides.eq(a).remove(),
                a < r && (r -= 1);
            r = Math.max(r, 0);
          } else
            (a = e),
              this.slides[a] && this.slides.eq(a).remove(),
              a < r && (r -= 1),
              (r = Math.max(r, 0));
          t.loop && this.loopCreate(),
            (t.observer && this.support.observer) || this.update(),
            t.loop
              ? this.slideTo(r + this.loopedSlides, 0, !1)
              : this.slideTo(r, 0, !1);
        },
        removeAllSlides: function () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e);
        },
      },
      events: {
        attachEvents: function () {
          var e = r(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            n = this.device,
            l = this.support;
          (this.onTouchStart = O.bind(this)),
            (this.onTouchMove = A.bind(this)),
            (this.onTouchEnd = D.bind(this)),
            t.cssMode && (this.onScroll = B.bind(this)),
            (this.onClick = N.bind(this));
          var o = !!t.nested;
          if (!l.touch && l.pointerEvents)
            s.addEventListener(i.start, this.onTouchStart, !1),
              e.addEventListener(i.move, this.onTouchMove, o),
              e.addEventListener(i.end, this.onTouchEnd, !1);
          else {
            if (l.touch) {
              var d = !(
                'touchstart' !== i.start ||
                !l.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.addEventListener(i.start, this.onTouchStart, d),
                s.addEventListener(
                  i.move,
                  this.onTouchMove,
                  l.passiveListener ? { passive: !1, capture: o } : o,
                ),
                s.addEventListener(i.end, this.onTouchEnd, d),
                i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, d),
                H || (e.addEventListener('touchstart', X), (H = !0));
            }
            ((t.simulateTouch && !n.ios && !n.android) ||
              (t.simulateTouch && !l.touch && n.ios)) &&
              (s.addEventListener('mousedown', this.onTouchStart, !1),
              e.addEventListener('mousemove', this.onTouchMove, o),
              e.addEventListener('mouseup', this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) &&
            s.addEventListener('click', this.onClick, !0),
            t.cssMode && a.addEventListener('scroll', this.onScroll),
            t.updateOnWindowResize
              ? this.on(
                  n.ios || n.android
                    ? 'resize orientationchange observerUpdate'
                    : 'resize observerUpdate',
                  G,
                  !0,
                )
              : this.on('observerUpdate', G, !0);
        },
        detachEvents: function () {
          var e = r(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            n = this.device,
            l = this.support,
            o = !!t.nested;
          if (!l.touch && l.pointerEvents)
            s.removeEventListener(i.start, this.onTouchStart, !1),
              e.removeEventListener(i.move, this.onTouchMove, o),
              e.removeEventListener(i.end, this.onTouchEnd, !1);
          else {
            if (l.touch) {
              var d = !(
                'onTouchStart' !== i.start ||
                !l.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.removeEventListener(i.start, this.onTouchStart, d),
                s.removeEventListener(i.move, this.onTouchMove, o),
                s.removeEventListener(i.end, this.onTouchEnd, d),
                i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d);
            }
            ((t.simulateTouch && !n.ios && !n.android) ||
              (t.simulateTouch && !l.touch && n.ios)) &&
              (s.removeEventListener('mousedown', this.onTouchStart, !1),
              e.removeEventListener('mousemove', this.onTouchMove, o),
              e.removeEventListener('mouseup', this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) &&
            s.removeEventListener('click', this.onClick, !0),
            t.cssMode && a.removeEventListener('scroll', this.onScroll),
            this.off(
              n.ios || n.android
                ? 'resize orientationchange observerUpdate'
                : 'resize observerUpdate',
              G,
            );
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides,
            s = void 0 === i ? 0 : i,
            a = this.params,
            r = this.$el,
            n = a.breakpoints;
          if (n && (!n || 0 !== Object.keys(n).length)) {
            var l = this.getBreakpoint(n);
            if (l && this.currentBreakpoint !== l) {
              var o = l in n ? n[l] : void 0;
              o &&
                [
                  'slidesPerView',
                  'spaceBetween',
                  'slidesPerGroup',
                  'slidesPerGroupSkip',
                  'slidesPerColumn',
                ].forEach(function (e) {
                  var t = o[e];
                  void 0 !== t &&
                    (o[e] =
                      'slidesPerView' !== e || ('AUTO' !== t && 'auto' !== t)
                        ? 'slidesPerView' === e
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : 'auto');
                });
              var d = o || this.originalParams,
                h = a.slidesPerColumn > 1,
                p = d.slidesPerColumn > 1;
              h && !p
                ? (r.removeClass(
                    a.containerModifierClass +
                      'multirow ' +
                      a.containerModifierClass +
                      'multirow-column',
                  ),
                  this.emitContainerClasses())
                : !h &&
                  p &&
                  (r.addClass(a.containerModifierClass + 'multirow'),
                  'column' === d.slidesPerColumnFill &&
                    r.addClass(a.containerModifierClass + 'multirow-column'),
                  this.emitContainerClasses());
              var u = d.direction && d.direction !== a.direction,
                c = a.loop && (d.slidesPerView !== a.slidesPerView || u);
              u && t && this.changeDirection(),
                S(this.params, d),
                S(this, {
                  allowTouchMove: this.params.allowTouchMove,
                  allowSlideNext: this.params.allowSlideNext,
                  allowSlidePrev: this.params.allowSlidePrev,
                }),
                (this.currentBreakpoint = l),
                c &&
                  t &&
                  (this.loopDestroy(),
                  this.loopCreate(),
                  this.updateSlides(),
                  this.slideTo(e - s + this.loopedSlides, 0, !1)),
                this.emit('breakpoint', d);
            }
          }
        },
        getBreakpoint: function (e) {
          var t = l();
          if (e) {
            var i = !1,
              s = Object.keys(e).map(function (e) {
                if ('string' == typeof e && 0 === e.indexOf('@')) {
                  var i = parseFloat(e.substr(1));
                  return { value: t.innerHeight * i, point: e };
                }
                return { value: e, point: e };
              });
            s.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var a = 0; a < s.length; a += 1) {
              var r = s[a],
                n = r.point;
              r.value <= t.innerWidth && (i = n);
            }
            return i || 'max';
          }
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          var e = this.params,
            t = this.isLocked,
            i =
              this.slides.length > 0 &&
              e.slidesOffsetBefore +
                e.spaceBetween * (this.slides.length - 1) +
                this.slides[0].offsetWidth * this.slides.length;
          e.slidesOffsetBefore && e.slidesOffsetAfter && i
            ? (this.isLocked = i <= this.size)
            : (this.isLocked = 1 === this.snapGrid.length),
            (this.allowSlideNext = !this.isLocked),
            (this.allowSlidePrev = !this.isLocked),
            t !== this.isLocked && this.emit(this.isLocked ? 'lock' : 'unlock'),
            t &&
              t !== this.isLocked &&
              ((this.isEnd = !1), this.navigation && this.navigation.update());
        },
      },
      classes: {
        addClasses: function () {
          var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = this.device,
            r = [];
          r.push('initialized'),
            r.push(t.direction),
            t.freeMode && r.push('free-mode'),
            t.autoHeight && r.push('autoheight'),
            i && r.push('rtl'),
            t.slidesPerColumn > 1 &&
              (r.push('multirow'),
              'column' === t.slidesPerColumnFill && r.push('multirow-column')),
            a.android && r.push('android'),
            a.ios && r.push('ios'),
            t.cssMode && r.push('css-mode'),
            r.forEach(function (i) {
              e.push(t.containerModifierClass + i);
            }),
            s.addClass(e.join(' ')),
            this.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(' ')), this.emitContainerClasses();
        },
      },
      images: {
        loadImage: function (e, t, i, s, a, r) {
          var n,
            o = l();
          function d() {
            r && r();
          }
          m(e).parent('picture')[0] || (e.complete && a)
            ? d()
            : t
            ? (((n = new o.Image()).onload = d),
              (n.onerror = d),
              s && (n.sizes = s),
              i && (n.srcset = i),
              t && (n.src = t))
            : d();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit('imagesReady')));
          }
          e.imagesToLoad = e.$el.find('img');
          for (var i = 0; i < e.imagesToLoad.length; i += 1) {
            var s = e.imagesToLoad[i];
            e.loadImage(
              s,
              s.currentSrc || s.getAttribute('src'),
              s.srcset || s.getAttribute('srcset'),
              s.sizes || s.getAttribute('sizes'),
              !0,
              t,
            );
          }
        },
      },
    },
    F = {},
    W = (function () {
      function t() {
        for (
          var e, i, s = arguments.length, a = new Array(s), r = 0;
          r < s;
          r++
        )
          a[r] = arguments[r];
        1 === a.length && a[0].constructor && a[0].constructor === Object
          ? (i = a[0])
          : ((e = a[0]), (i = a[1])),
          i || (i = {}),
          (i = S({}, i)),
          e && !i.el && (i.el = e);
        var n = this;
        (n.support = z()),
          (n.device = P({ userAgent: i.userAgent })),
          (n.browser = k()),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          Object.keys(V).forEach(function (e) {
            Object.keys(V[e]).forEach(function (i) {
              t.prototype[i] || (t.prototype[i] = V[e][i]);
            });
          }),
          void 0 === n.modules && (n.modules = {}),
          Object.keys(n.modules).forEach(function (e) {
            var t = n.modules[e];
            if (t.params) {
              var s = Object.keys(t.params)[0],
                a = t.params[s];
              if ('object' != typeof a || null === a) return;
              if (!(s in i) || !('enabled' in a)) return;
              !0 === i[s] && (i[s] = { enabled: !0 }),
                'object' != typeof i[s] ||
                  'enabled' in i[s] ||
                  (i[s].enabled = !0),
                i[s] || (i[s] = { enabled: !1 });
            }
          });
        var l = S({}, Y);
        n.useParams(l),
          (n.params = S({}, l, F, i)),
          (n.originalParams = S({}, n.params)),
          (n.passedParams = S({}, i)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach(function (e) {
              n.on(e, n.params.on[e]);
            }),
          (n.$ = m);
        var o = m(n.params.el);
        if ((e = o[0])) {
          if (o.length > 1) {
            var d = [];
            return (
              o.each(function (e) {
                var s = S({}, i, { el: e });
                d.push(new t(s));
              }),
              d
            );
          }
          var h, p, u;
          return (
            (e.swiper = n),
            e && e.shadowRoot && e.shadowRoot.querySelector
              ? ((h = m(
                  e.shadowRoot.querySelector('.' + n.params.wrapperClass),
                )).children = function (e) {
                  return o.children(e);
                })
              : (h = o.children('.' + n.params.wrapperClass)),
            S(n, {
              $el: o,
              el: e,
              $wrapperEl: h,
              wrapperEl: h[0],
              classNames: [],
              slides: m(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return 'horizontal' === n.params.direction;
              },
              isVertical: function () {
                return 'vertical' === n.params.direction;
              },
              rtl:
                'rtl' === e.dir.toLowerCase() || 'rtl' === o.css('direction'),
              rtlTranslate:
                'horizontal' === n.params.direction &&
                ('rtl' === e.dir.toLowerCase() || 'rtl' === o.css('direction')),
              wrongRTL: '-webkit-box' === h.css('display'),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: n.params.allowSlideNext,
              allowSlidePrev: n.params.allowSlidePrev,
              touchEvents:
                ((p = ['touchstart', 'touchmove', 'touchend', 'touchcancel']),
                (u = ['mousedown', 'mousemove', 'mouseup']),
                n.support.pointerEvents &&
                  (u = ['pointerdown', 'pointermove', 'pointerup']),
                (n.touchEventsTouch = {
                  start: p[0],
                  move: p[1],
                  end: p[2],
                  cancel: p[3],
                }),
                (n.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
                n.support.touch || !n.params.simulateTouch
                  ? n.touchEventsTouch
                  : n.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements:
                  'input, select, option, textarea, button, video, label',
                lastClickTime: x(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: n.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            n.useModules(),
            n.emit('_swiper'),
            n.params.init && n.init(),
            n
          );
        }
      }
      var i,
        s,
        a,
        r = t.prototype;
      return (
        (r.emitContainerClasses = function () {
          var e = this;
          if (e.params._emitClasses && e.el) {
            var t = e.el.className.split(' ').filter(function (t) {
              return (
                0 === t.indexOf('swiper-container') ||
                0 === t.indexOf(e.params.containerModifierClass)
              );
            });
            e.emit('_containerClasses', t.join(' '));
          }
        }),
        (r.emitSlidesClasses = function () {
          var e = this;
          e.params._emitClasses &&
            e.el &&
            e.slides.each(function (t) {
              var i = t.className.split(' ').filter(function (t) {
                return (
                  0 === t.indexOf('swiper-slide') ||
                  0 === t.indexOf(e.params.slideClass)
                );
              });
              e.emit('_slideClass', t, i.join(' '));
            });
        }),
        (r.slidesPerViewDynamic = function () {
          var e = this.params,
            t = this.slides,
            i = this.slidesGrid,
            s = this.size,
            a = this.activeIndex,
            r = 1;
          if (e.centeredSlides) {
            for (
              var n, l = t[a].swiperSlideSize, o = a + 1;
              o < t.length;
              o += 1
            )
              t[o] &&
                !n &&
                ((r += 1), (l += t[o].swiperSlideSize) > s && (n = !0));
            for (var d = a - 1; d >= 0; d -= 1)
              t[d] &&
                !n &&
                ((r += 1), (l += t[d].swiperSlideSize) > s && (n = !0));
          } else
            for (var h = a + 1; h < t.length; h += 1)
              i[h] - i[a] < s && (r += 1);
          return r;
        }),
        (r.update = function () {
          var e = this;
          if (e && !e.destroyed) {
            var t = e.snapGrid,
              i = e.params;
            i.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode
                ? (s(), e.params.autoHeight && e.updateAutoHeight())
                : (('auto' === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
              i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit('update');
          }
          function s() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
          }
        }),
        (r.changeDirection = function (e, t) {
          void 0 === t && (t = !0);
          var i = this.params.direction;
          return (
            e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
            e === i ||
              ('horizontal' !== e && 'vertical' !== e) ||
              (this.$el
                .removeClass('' + this.params.containerModifierClass + i)
                .addClass('' + this.params.containerModifierClass + e),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.each(function (t) {
                'vertical' === e ? (t.style.width = '') : (t.style.height = '');
              }),
              this.emit('changeDirection'),
              t && this.update()),
            this
          );
        }),
        (r.init = function () {
          this.initialized ||
            (this.emit('beforeInit'),
            this.params.breakpoints && this.setBreakpoint(),
            this.addClasses(),
            this.params.loop && this.loopCreate(),
            this.updateSize(),
            this.updateSlides(),
            this.params.watchOverflow && this.checkOverflow(),
            this.params.grabCursor && this.setGrabCursor(),
            this.params.preloadImages && this.preloadImages(),
            this.params.loop
              ? this.slideTo(
                  this.params.initialSlide + this.loopedSlides,
                  0,
                  this.params.runCallbacksOnInit,
                )
              : this.slideTo(
                  this.params.initialSlide,
                  0,
                  this.params.runCallbacksOnInit,
                ),
            this.attachEvents(),
            (this.initialized = !0),
            this.emit('init'));
        }),
        (r.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var i,
            s = this,
            a = s.params,
            r = s.$el,
            n = s.$wrapperEl,
            l = s.slides;
          return (
            void 0 === s.params ||
              s.destroyed ||
              (s.emit('beforeDestroy'),
              (s.initialized = !1),
              s.detachEvents(),
              a.loop && s.loopDestroy(),
              t &&
                (s.removeClasses(),
                r.removeAttr('style'),
                n.removeAttr('style'),
                l &&
                  l.length &&
                  l
                    .removeClass(
                      [
                        a.slideVisibleClass,
                        a.slideActiveClass,
                        a.slideNextClass,
                        a.slidePrevClass,
                      ].join(' '),
                    )
                    .removeAttr('style')
                    .removeAttr('data-swiper-slide-index')),
              s.emit('destroy'),
              Object.keys(s.eventsListeners).forEach(function (e) {
                s.off(e);
              }),
              !1 !== e &&
                ((s.$el[0].swiper = null),
                (i = s),
                Object.keys(i).forEach(function (e) {
                  try {
                    i[e] = null;
                  } catch (e) {}
                  try {
                    delete i[e];
                  } catch (e) {}
                })),
              (s.destroyed = !0)),
            null
          );
        }),
        (t.extendDefaults = function (e) {
          S(F, e);
        }),
        (t.installModule = function (e) {
          t.prototype.modules || (t.prototype.modules = {});
          var i = e.name || Object.keys(t.prototype.modules).length + '_' + x();
          t.prototype.modules[i] = e;
        }),
        (t.use = function (e) {
          return Array.isArray(e)
            ? (e.forEach(function (e) {
                return t.installModule(e);
              }),
              t)
            : (t.installModule(e), t);
        }),
        (i = t),
        (a = [
          {
            key: 'extendedDefaults',
            get: function () {
              return F;
            },
          },
          {
            key: 'defaults',
            get: function () {
              return Y;
            },
          },
        ]),
        (s = null) && e(i.prototype, s),
        a && e(i, a),
        t
      );
    })();
  W.use([$, I]);
  var R = {
      update: function (e) {
        var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          n = t.params.virtual,
          l = n.addSlidesBefore,
          o = n.addSlidesAfter,
          d = t.virtual,
          h = d.from,
          p = d.to,
          u = d.slides,
          c = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
        t.updateActiveIndex();
        var m,
          g,
          w,
          b = t.activeIndex || 0;
        (m = t.rtlTranslate ? 'right' : t.isHorizontal() ? 'left' : 'top'),
          r
            ? ((g = Math.floor(s / 2) + a + o), (w = Math.floor(s / 2) + a + l))
            : ((g = s + (a - 1) + o), (w = a + l));
        var y = Math.max((b || 0) - w, 0),
          E = Math.min((b || 0) + g, u.length - 1),
          x = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
        function T() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (
          (S(t.virtual, {
            from: y,
            to: E,
            offset: x,
            slidesGrid: t.slidesGrid,
          }),
          h === y && p === E && !e)
        )
          return (
            t.slidesGrid !== c && x !== f && t.slides.css(m, x + 'px'),
            void t.updateProgress()
          );
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: x,
              from: y,
              to: E,
              slides: (function () {
                for (var e = [], t = y; t <= E; t += 1) e.push(u[t]);
                return e;
              })(),
            }),
            void (t.params.virtual.renderExternalUpdate && T())
          );
        var C = [],
          M = [];
        if (e) t.$wrapperEl.find('.' + t.params.slideClass).remove();
        else
          for (var z = h; z <= p; z += 1)
            (z < y || z > E) &&
              t.$wrapperEl
                .find(
                  '.' +
                    t.params.slideClass +
                    '[data-swiper-slide-index="' +
                    z +
                    '"]',
                )
                .remove();
        for (var P = 0; P < u.length; P += 1)
          P >= y &&
            P <= E &&
            (void 0 === p || e
              ? M.push(P)
              : (P > p && M.push(P), P < h && C.push(P)));
        M.forEach(function (e) {
          t.$wrapperEl.append(v(u[e], e));
        }),
          C.sort(function (e, t) {
            return t - e;
          }).forEach(function (e) {
            t.$wrapperEl.prepend(v(u[e], e));
          }),
          t.$wrapperEl.children('.swiper-slide').css(m, x + 'px'),
          T();
      },
      renderSlide: function (e, t) {
        var i = this.params.virtual;
        if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
        var s = i.renderSlide
          ? m(i.renderSlide.call(this, e, t))
          : m(
              '<div class="' +
                this.params.slideClass +
                '" data-swiper-slide-index="' +
                t +
                '">' +
                e +
                '</div>',
            );
        return (
          s.attr('data-swiper-slide-index') ||
            s.attr('data-swiper-slide-index', t),
          i.cache && (this.virtual.cache[t] = s),
          s
        );
      },
      appendSlide: function (e) {
        if ('object' == typeof e && 'length' in e)
          for (var t = 0; t < e.length; t += 1)
            e[t] && this.virtual.slides.push(e[t]);
        else this.virtual.slides.push(e);
        this.virtual.update(!0);
      },
      prependSlide: function (e) {
        var t = this.activeIndex,
          i = t + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var a = 0; a < e.length; a += 1)
            e[a] && this.virtual.slides.unshift(e[a]);
          (i = t + e.length), (s = e.length);
        } else this.virtual.slides.unshift(e);
        if (this.params.virtual.cache) {
          var r = this.virtual.cache,
            n = {};
          Object.keys(r).forEach(function (e) {
            var t = r[e],
              i = t.attr('data-swiper-slide-index');
            i && t.attr('data-swiper-slide-index', parseInt(i, 10) + 1),
              (n[parseInt(e, 10) + s] = t);
          }),
            (this.virtual.cache = n);
        }
        this.virtual.update(!0), this.slideTo(i, 0);
      },
      removeSlide: function (e) {
        if (null != e) {
          var t = this.activeIndex;
          if (Array.isArray(e))
            for (var i = e.length - 1; i >= 0; i -= 1)
              this.virtual.slides.splice(e[i], 1),
                this.params.virtual.cache && delete this.virtual.cache[e[i]],
                e[i] < t && (t -= 1),
                (t = Math.max(t, 0));
          else
            this.virtual.slides.splice(e, 1),
              this.params.virtual.cache && delete this.virtual.cache[e],
              e < t && (t -= 1),
              (t = Math.max(t, 0));
          this.virtual.update(!0), this.slideTo(t, 0);
        }
      },
      removeAllSlides: function () {
        (this.virtual.slides = []),
          this.params.virtual.cache && (this.virtual.cache = {}),
          this.virtual.update(!0),
          this.slideTo(0, 0);
      },
    },
    q = {
      name: 'virtual',
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create: function () {
        M(this, {
          virtual: t(
            t({}, R),
            {},
            { slides: this.params.virtual.slides, cache: {} },
          ),
        });
      },
      on: {
        beforeInit: function (e) {
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + 'virtual');
            var t = { watchSlidesProgress: !0 };
            S(e.params, t),
              S(e.originalParams, t),
              e.params.initialSlide || e.virtual.update();
          }
        },
        setTranslate: function (e) {
          e.params.virtual.enabled && e.virtual.update();
        },
      },
    },
    j = {
      handle: function (e) {
        var t = l(),
          i = r(),
          s = this.rtlTranslate,
          a = e;
        a.originalEvent && (a = a.originalEvent);
        var n = a.keyCode || a.charCode,
          o = this.params.keyboard.pageUpDown,
          d = o && 33 === n,
          h = o && 34 === n,
          p = 37 === n,
          u = 39 === n,
          c = 38 === n,
          v = 40 === n;
        if (
          !this.allowSlideNext &&
          ((this.isHorizontal() && u) || (this.isVertical() && v) || h)
        )
          return !1;
        if (
          !this.allowSlidePrev &&
          ((this.isHorizontal() && p) || (this.isVertical() && c) || d)
        )
          return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (i.activeElement &&
              i.activeElement.nodeName &&
              ('input' === i.activeElement.nodeName.toLowerCase() ||
                'textarea' === i.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            this.params.keyboard.onlyInViewport &&
            (d || h || p || u || c || v)
          ) {
            var f = !1;
            if (
              this.$el.parents('.' + this.params.slideClass).length > 0 &&
              0 === this.$el.parents('.' + this.params.slideActiveClass).length
            )
              return;
            var m = t.innerWidth,
              g = t.innerHeight,
              w = this.$el.offset();
            s && (w.left -= this.$el[0].scrollLeft);
            for (
              var b = [
                  [w.left, w.top],
                  [w.left + this.width, w.top],
                  [w.left, w.top + this.height],
                  [w.left + this.width, w.top + this.height],
                ],
                y = 0;
              y < b.length;
              y += 1
            ) {
              var E = b[y];
              E[0] >= 0 && E[0] <= m && E[1] >= 0 && E[1] <= g && (f = !0);
            }
            if (!f) return;
          }
          this.isHorizontal()
            ? ((d || h || p || u) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (((h || u) && !s) || ((d || p) && s)) && this.slideNext(),
              (((d || p) && !s) || ((h || u) && s)) && this.slidePrev())
            : ((d || h || c || v) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (h || v) && this.slideNext(),
              (d || c) && this.slidePrev()),
            this.emit('keyPress', n);
        }
      },
      enable: function () {
        var e = r();
        this.keyboard.enabled ||
          (m(e).on('keydown', this.keyboard.handle),
          (this.keyboard.enabled = !0));
      },
      disable: function () {
        var e = r();
        this.keyboard.enabled &&
          (m(e).off('keydown', this.keyboard.handle),
          (this.keyboard.enabled = !1));
      },
    },
    _ = {
      name: 'keyboard',
      params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
      create: function () {
        M(this, { keyboard: t({ enabled: !1 }, j) });
      },
      on: {
        init: function (e) {
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy: function (e) {
          e.keyboard.enabled && e.keyboard.disable();
        },
      },
    };
  var U = {
      lastScrollTime: x(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function () {
        return l().navigator.userAgent.indexOf('firefox') > -1
          ? 'DOMMouseScroll'
          : (function () {
              var e = r(),
                t = 'onwheel' in e;
              if (!t) {
                var i = e.createElement('div');
                i.setAttribute('onwheel', 'return;'),
                  (t = 'function' == typeof i.onwheel);
              }
              return (
                !t &&
                  e.implementation &&
                  e.implementation.hasFeature &&
                  !0 !== e.implementation.hasFeature('', '') &&
                  (t = e.implementation.hasFeature('Events.wheel', '3.0')),
                t
              );
            })()
          ? 'wheel'
          : 'mousewheel';
      },
      normalize: function (e) {
        var t = 0,
          i = 0,
          s = 0,
          a = 0;
        return (
          'detail' in e && (i = e.detail),
          'wheelDelta' in e && (i = -e.wheelDelta / 120),
          'wheelDeltaY' in e && (i = -e.wheelDeltaY / 120),
          'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
          'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
          (s = 10 * t),
          (a = 10 * i),
          'deltaY' in e && (a = e.deltaY),
          'deltaX' in e && (s = e.deltaX),
          e.shiftKey && !s && ((s = a), (a = 0)),
          (s || a) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((s *= 40), (a *= 40))
              : ((s *= 800), (a *= 800))),
          s && !t && (t = s < 1 ? -1 : 1),
          a && !i && (i = a < 1 ? -1 : 1),
          { spinX: t, spinY: i, pixelX: s, pixelY: a }
        );
      },
      handleMouseEnter: function () {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function () {
        this.mouseEntered = !1;
      },
      handle: function (e) {
        var t = e,
          i = this,
          s = i.params.mousewheel;
        i.params.cssMode && t.preventDefault();
        var a = i.$el;
        if (
          ('container' !== i.params.mousewheel.eventsTarget &&
            (a = m(i.params.mousewheel.eventsTarget)),
          !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges)
        )
          return !0;
        t.originalEvent && (t = t.originalEvent);
        var r = 0,
          n = i.rtlTranslate ? -1 : 1,
          l = U.normalize(t);
        if (s.forceToAxis)
          if (i.isHorizontal()) {
            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
            r = -l.pixelX * n;
          } else {
            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
            r = -l.pixelY;
          }
        else
          r =
            Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
        if (0 === r) return !0;
        if ((s.invert && (r = -r), i.params.freeMode)) {
          var o = { time: x(), delta: Math.abs(r), direction: Math.sign(r) },
            d = i.mousewheel.lastEventBeforeSnap,
            h =
              d &&
              o.time < d.time + 500 &&
              o.delta <= d.delta &&
              o.direction === d.direction;
          if (!h) {
            (i.mousewheel.lastEventBeforeSnap = void 0),
              i.params.loop && i.loopFix();
            var p = i.getTranslate() + r * s.sensitivity,
              u = i.isBeginning,
              c = i.isEnd;
            if (
              (p >= i.minTranslate() && (p = i.minTranslate()),
              p <= i.maxTranslate() && (p = i.maxTranslate()),
              i.setTransition(0),
              i.setTranslate(p),
              i.updateProgress(),
              i.updateActiveIndex(),
              i.updateSlidesClasses(),
              ((!u && i.isBeginning) || (!c && i.isEnd)) &&
                i.updateSlidesClasses(),
              i.params.freeModeSticky)
            ) {
              clearTimeout(i.mousewheel.timeout),
                (i.mousewheel.timeout = void 0);
              var v = i.mousewheel.recentWheelEvents;
              v.length >= 15 && v.shift();
              var f = v.length ? v[v.length - 1] : void 0,
                g = v[0];
              if (
                (v.push(o),
                f && (o.delta > f.delta || o.direction !== f.direction))
              )
                v.splice(0);
              else if (
                v.length >= 15 &&
                o.time - g.time < 500 &&
                g.delta - o.delta >= 1 &&
                o.delta <= 6
              ) {
                var w = r > 0 ? 0.8 : 0.2;
                (i.mousewheel.lastEventBeforeSnap = o),
                  v.splice(0),
                  (i.mousewheel.timeout = E(function () {
                    i.slideToClosest(i.params.speed, !0, void 0, w);
                  }, 0));
              }
              i.mousewheel.timeout ||
                (i.mousewheel.timeout = E(function () {
                  (i.mousewheel.lastEventBeforeSnap = o),
                    v.splice(0),
                    i.slideToClosest(i.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (h || i.emit('scroll', t),
              i.params.autoplay &&
                i.params.autoplayDisableOnInteraction &&
                i.autoplay.stop(),
              p === i.minTranslate() || p === i.maxTranslate())
            )
              return !0;
          }
        } else {
          var b = {
              time: x(),
              delta: Math.abs(r),
              direction: Math.sign(r),
              raw: e,
            },
            y = i.mousewheel.recentWheelEvents;
          y.length >= 2 && y.shift();
          var T = y.length ? y[y.length - 1] : void 0;
          if (
            (y.push(b),
            T
              ? (b.direction !== T.direction ||
                  b.delta > T.delta ||
                  b.time > T.time + 150) &&
                i.mousewheel.animateSlider(b)
              : i.mousewheel.animateSlider(b),
            i.mousewheel.releaseScroll(b))
          )
            return !0;
        }
        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
      },
      animateSlider: function (e) {
        var t = l();
        return (
          !(
            this.params.mousewheel.thresholdDelta &&
            e.delta < this.params.mousewheel.thresholdDelta
          ) &&
          !(
            this.params.mousewheel.thresholdTime &&
            x() - this.mousewheel.lastScrollTime <
              this.params.mousewheel.thresholdTime
          ) &&
          ((e.delta >= 6 && x() - this.mousewheel.lastScrollTime < 60) ||
            (e.direction < 0
              ? (this.isEnd && !this.params.loop) ||
                this.animating ||
                (this.slideNext(), this.emit('scroll', e.raw))
              : (this.isBeginning && !this.params.loop) ||
                this.animating ||
                (this.slidePrev(), this.emit('scroll', e.raw)),
            (this.mousewheel.lastScrollTime = new t.Date().getTime()),
            !1))
        );
      },
      releaseScroll: function (e) {
        var t = this.params.mousewheel;
        if (e.direction < 0) {
          if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
        } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges)
          return !0;
        return !1;
      },
      enable: function () {
        var e = U.event();
        if (this.params.cssMode)
          return (
            this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0
          );
        if (!e) return !1;
        if (this.mousewheel.enabled) return !1;
        var t = this.$el;
        return (
          'container' !== this.params.mousewheel.eventsTarget &&
            (t = m(this.params.mousewheel.eventsTarget)),
          t.on('mouseenter', this.mousewheel.handleMouseEnter),
          t.on('mouseleave', this.mousewheel.handleMouseLeave),
          t.on(e, this.mousewheel.handle),
          (this.mousewheel.enabled = !0),
          !0
        );
      },
      disable: function () {
        var e = U.event();
        if (this.params.cssMode)
          return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
        if (!e) return !1;
        if (!this.mousewheel.enabled) return !1;
        var t = this.$el;
        return (
          'container' !== this.params.mousewheel.eventsTarget &&
            (t = m(this.params.mousewheel.eventsTarget)),
          t.off(e, this.mousewheel.handle),
          (this.mousewheel.enabled = !1),
          !0
        );
      },
    },
    K = {
      update: function () {
        var e = this.params.navigation;
        if (!this.params.loop) {
          var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
          s &&
            s.length > 0 &&
            (this.isBeginning
              ? s.addClass(e.disabledClass)
              : s.removeClass(e.disabledClass),
            s[
              this.params.watchOverflow && this.isLocked
                ? 'addClass'
                : 'removeClass'
            ](e.lockClass)),
            i &&
              i.length > 0 &&
              (this.isEnd
                ? i.addClass(e.disabledClass)
                : i.removeClass(e.disabledClass),
              i[
                this.params.watchOverflow && this.isLocked
                  ? 'addClass'
                  : 'removeClass'
              ](e.lockClass));
        }
      },
      onPrevClick: function (e) {
        e.preventDefault(),
          (this.isBeginning && !this.params.loop) || this.slidePrev();
      },
      onNextClick: function (e) {
        e.preventDefault(),
          (this.isEnd && !this.params.loop) || this.slideNext();
      },
      init: function () {
        var e,
          t,
          i = this.params.navigation;
        (i.nextEl || i.prevEl) &&
          (i.nextEl &&
            ((e = m(i.nextEl)),
            this.params.uniqueNavElements &&
              'string' == typeof i.nextEl &&
              e.length > 1 &&
              1 === this.$el.find(i.nextEl).length &&
              (e = this.$el.find(i.nextEl))),
          i.prevEl &&
            ((t = m(i.prevEl)),
            this.params.uniqueNavElements &&
              'string' == typeof i.prevEl &&
              t.length > 1 &&
              1 === this.$el.find(i.prevEl).length &&
              (t = this.$el.find(i.prevEl))),
          e && e.length > 0 && e.on('click', this.navigation.onNextClick),
          t && t.length > 0 && t.on('click', this.navigation.onPrevClick),
          S(this.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0],
          }));
      },
      destroy: function () {
        var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
        t &&
          t.length &&
          (t.off('click', this.navigation.onNextClick),
          t.removeClass(this.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off('click', this.navigation.onPrevClick),
            i.removeClass(this.params.navigation.disabledClass));
      },
    },
    Z = {
      update: function () {
        var e = this.rtl,
          t = this.params.pagination;
        if (
          t.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var i,
            s =
              this.virtual && this.params.virtual.enabled
                ? this.virtual.slides.length
                : this.slides.length,
            a = this.pagination.$el,
            r = this.params.loop
              ? Math.ceil(
                  (s - 2 * this.loopedSlides) / this.params.slidesPerGroup,
                )
              : this.snapGrid.length;
          if (
            (this.params.loop
              ? ((i = Math.ceil(
                  (this.activeIndex - this.loopedSlides) /
                    this.params.slidesPerGroup,
                )) >
                  s - 1 - 2 * this.loopedSlides &&
                  (i -= s - 2 * this.loopedSlides),
                i > r - 1 && (i -= r),
                i < 0 &&
                  'bullets' !== this.params.paginationType &&
                  (i = r + i))
              : (i =
                  void 0 !== this.snapIndex
                    ? this.snapIndex
                    : this.activeIndex || 0),
            'bullets' === t.type &&
              this.pagination.bullets &&
              this.pagination.bullets.length > 0)
          ) {
            var n,
              l,
              o,
              d = this.pagination.bullets;
            if (
              (t.dynamicBullets &&
                ((this.pagination.bulletSize = d
                  .eq(0)
                  [this.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                a.css(
                  this.isHorizontal() ? 'width' : 'height',
                  this.pagination.bulletSize * (t.dynamicMainBullets + 4) +
                    'px',
                ),
                t.dynamicMainBullets > 1 &&
                  void 0 !== this.previousIndex &&
                  ((this.pagination.dynamicBulletIndex +=
                    i - this.previousIndex),
                  this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1
                    ? (this.pagination.dynamicBulletIndex =
                        t.dynamicMainBullets - 1)
                    : this.pagination.dynamicBulletIndex < 0 &&
                      (this.pagination.dynamicBulletIndex = 0)),
                (n = i - this.pagination.dynamicBulletIndex),
                (o =
                  ((l = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) +
                    n) /
                  2)),
              d.removeClass(
                t.bulletActiveClass +
                  ' ' +
                  t.bulletActiveClass +
                  '-next ' +
                  t.bulletActiveClass +
                  '-next-next ' +
                  t.bulletActiveClass +
                  '-prev ' +
                  t.bulletActiveClass +
                  '-prev-prev ' +
                  t.bulletActiveClass +
                  '-main',
              ),
              a.length > 1)
            )
              d.each(function (e) {
                var s = m(e),
                  a = s.index();
                a === i && s.addClass(t.bulletActiveClass),
                  t.dynamicBullets &&
                    (a >= n &&
                      a <= l &&
                      s.addClass(t.bulletActiveClass + '-main'),
                    a === n &&
                      s
                        .prev()
                        .addClass(t.bulletActiveClass + '-prev')
                        .prev()
                        .addClass(t.bulletActiveClass + '-prev-prev'),
                    a === l &&
                      s
                        .next()
                        .addClass(t.bulletActiveClass + '-next')
                        .next()
                        .addClass(t.bulletActiveClass + '-next-next'));
              });
            else {
              var h = d.eq(i),
                p = h.index();
              if ((h.addClass(t.bulletActiveClass), t.dynamicBullets)) {
                for (var u = d.eq(n), c = d.eq(l), v = n; v <= l; v += 1)
                  d.eq(v).addClass(t.bulletActiveClass + '-main');
                if (this.params.loop)
                  if (p >= d.length - t.dynamicMainBullets) {
                    for (var f = t.dynamicMainBullets; f >= 0; f -= 1)
                      d.eq(d.length - f).addClass(
                        t.bulletActiveClass + '-main',
                      );
                    d.eq(d.length - t.dynamicMainBullets - 1).addClass(
                      t.bulletActiveClass + '-prev',
                    );
                  } else
                    u
                      .prev()
                      .addClass(t.bulletActiveClass + '-prev')
                      .prev()
                      .addClass(t.bulletActiveClass + '-prev-prev'),
                      c
                        .next()
                        .addClass(t.bulletActiveClass + '-next')
                        .next()
                        .addClass(t.bulletActiveClass + '-next-next');
                else
                  u
                    .prev()
                    .addClass(t.bulletActiveClass + '-prev')
                    .prev()
                    .addClass(t.bulletActiveClass + '-prev-prev'),
                    c
                      .next()
                      .addClass(t.bulletActiveClass + '-next')
                      .next()
                      .addClass(t.bulletActiveClass + '-next-next');
              }
            }
            if (t.dynamicBullets) {
              var g = Math.min(d.length, t.dynamicMainBullets + 4),
                w =
                  (this.pagination.bulletSize * g -
                    this.pagination.bulletSize) /
                    2 -
                  o * this.pagination.bulletSize,
                b = e ? 'right' : 'left';
              d.css(this.isHorizontal() ? b : 'top', w + 'px');
            }
          }
          if (
            ('fraction' === t.type &&
              (a
                .find('.' + t.currentClass)
                .text(t.formatFractionCurrent(i + 1)),
              a.find('.' + t.totalClass).text(t.formatFractionTotal(r))),
            'progressbar' === t.type)
          ) {
            var y;
            y = t.progressbarOpposite
              ? this.isHorizontal()
                ? 'vertical'
                : 'horizontal'
              : this.isHorizontal()
              ? 'horizontal'
              : 'vertical';
            var E = (i + 1) / r,
              x = 1,
              T = 1;
            'horizontal' === y ? (x = E) : (T = E),
              a
                .find('.' + t.progressbarFillClass)
                .transform(
                  'translate3d(0,0,0) scaleX(' + x + ') scaleY(' + T + ')',
                )
                .transition(this.params.speed);
          }
          'custom' === t.type && t.renderCustom
            ? (a.html(t.renderCustom(this, i + 1, r)),
              this.emit('paginationRender', a[0]))
            : this.emit('paginationUpdate', a[0]),
            a[
              this.params.watchOverflow && this.isLocked
                ? 'addClass'
                : 'removeClass'
            ](t.lockClass);
        }
      },
      render: function () {
        var e = this.params.pagination;
        if (
          e.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var t =
              this.virtual && this.params.virtual.enabled
                ? this.virtual.slides.length
                : this.slides.length,
            i = this.pagination.$el,
            s = '';
          if ('bullets' === e.type) {
            for (
              var a = this.params.loop
                  ? Math.ceil(
                      (t - 2 * this.loopedSlides) / this.params.slidesPerGroup,
                    )
                  : this.snapGrid.length,
                r = 0;
              r < a;
              r += 1
            )
              e.renderBullet
                ? (s += e.renderBullet.call(this, r, e.bulletClass))
                : (s +=
                    '<' +
                    e.bulletElement +
                    ' class="' +
                    e.bulletClass +
                    '"></' +
                    e.bulletElement +
                    '>');
            i.html(s), (this.pagination.bullets = i.find('.' + e.bulletClass));
          }
          'fraction' === e.type &&
            ((s = e.renderFraction
              ? e.renderFraction.call(this, e.currentClass, e.totalClass)
              : '<span class="' +
                e.currentClass +
                '"></span> / <span class="' +
                e.totalClass +
                '"></span>'),
            i.html(s)),
            'progressbar' === e.type &&
              ((s = e.renderProgressbar
                ? e.renderProgressbar.call(this, e.progressbarFillClass)
                : '<span class="' + e.progressbarFillClass + '"></span>'),
              i.html(s)),
            'custom' !== e.type &&
              this.emit('paginationRender', this.pagination.$el[0]);
        }
      },
      init: function () {
        var e = this,
          t = e.params.pagination;
        if (t.el) {
          var i = m(t.el);
          0 !== i.length &&
            (e.params.uniqueNavElements &&
              'string' == typeof t.el &&
              i.length > 1 &&
              (i = e.$el.find(t.el)),
            'bullets' === t.type && t.clickable && i.addClass(t.clickableClass),
            i.addClass(t.modifierClass + t.type),
            'bullets' === t.type &&
              t.dynamicBullets &&
              (i.addClass('' + t.modifierClass + t.type + '-dynamic'),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            'progressbar' === t.type &&
              t.progressbarOpposite &&
              i.addClass(t.progressbarOppositeClass),
            t.clickable &&
              i.on('click', '.' + t.bulletClass, function (t) {
                t.preventDefault();
                var i = m(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides), e.slideTo(i);
              }),
            S(e.pagination, { $el: i, el: i[0] }));
        }
      },
      destroy: function () {
        var e = this.params.pagination;
        if (
          e.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var t = this.pagination.$el;
          t.removeClass(e.hiddenClass),
            t.removeClass(e.modifierClass + e.type),
            this.pagination.bullets &&
              this.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && t.off('click', '.' + e.bulletClass);
        }
      },
    },
    J = {
      setTranslate: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            l = this.params.scrollbar,
            o = s,
            d = (a - s) * i;
          t
            ? (d = -d) > 0
              ? ((o = s - d), (d = 0))
              : -d + s > a && (o = a + d)
            : d < 0
            ? ((o = s + d), (d = 0))
            : d + s > a && (o = a - d),
            this.isHorizontal()
              ? (r.transform('translate3d(' + d + 'px, 0, 0)'),
                (r[0].style.width = o + 'px'))
              : (r.transform('translate3d(0px, ' + d + 'px, 0)'),
                (r[0].style.height = o + 'px')),
            l.hide &&
              (clearTimeout(this.scrollbar.timeout),
              (n[0].style.opacity = 1),
              (this.scrollbar.timeout = setTimeout(function () {
                (n[0].style.opacity = 0), n.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function (e) {
        this.params.scrollbar.el &&
          this.scrollbar.el &&
          this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
          (t[0].style.width = ''), (t[0].style.height = '');
          var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            n = r * (a / this.size);
          (s =
            'auto' === this.params.scrollbar.dragSize
              ? a * r
              : parseInt(this.params.scrollbar.dragSize, 10)),
            this.isHorizontal()
              ? (t[0].style.width = s + 'px')
              : (t[0].style.height = s + 'px'),
            (i[0].style.display = r >= 1 ? 'none' : ''),
            this.params.scrollbar.hide && (i[0].style.opacity = 0),
            S(e, { trackSize: a, divider: r, moveDivider: n, dragSize: s }),
            e.$el[
              this.params.watchOverflow && this.isLocked
                ? 'addClass'
                : 'removeClass'
            ](this.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function (e) {
        return this.isHorizontal()
          ? 'touchstart' === e.type || 'touchmove' === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : 'touchstart' === e.type || 'touchmove' === e.type
          ? e.targetTouches[0].clientY
          : e.clientY;
      },
      setDragPosition: function (e) {
        var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize,
          l = i.dragStartPos;
        (t =
          (i.getPointerPosition(e) -
            a.offset()[this.isHorizontal() ? 'left' : 'top'] -
            (null !== l ? l : r / 2)) /
          (n - r)),
          (t = Math.max(Math.min(t, 1), 0)),
          s && (t = 1 - t);
        var o =
          this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
        this.updateProgress(o),
          this.setTranslate(o),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
        (this.scrollbar.isTouched = !0),
          (this.scrollbar.dragStartPos =
            e.target === r[0] || e.target === r
              ? i.getPointerPosition(e) -
                e.target.getBoundingClientRect()[
                  this.isHorizontal() ? 'left' : 'top'
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          r.transition(100),
          i.setDragPosition(e),
          clearTimeout(this.scrollbar.dragTimeout),
          a.transition(0),
          t.hide && a.css('opacity', 1),
          this.params.cssMode &&
            this.$wrapperEl.css('scroll-snap-type', 'none'),
          this.emit('scrollbarDragStart', e);
      },
      onDragMove: function (e) {
        var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
        this.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          t.setDragPosition(e),
          i.transition(0),
          s.transition(0),
          a.transition(0),
          this.emit('scrollbarDragMove', e));
      },
      onDragEnd: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el;
        this.scrollbar.isTouched &&
          ((this.scrollbar.isTouched = !1),
          this.params.cssMode &&
            (this.$wrapperEl.css('scroll-snap-type', ''), s.transition('')),
          t.hide &&
            (clearTimeout(this.scrollbar.dragTimeout),
            (this.scrollbar.dragTimeout = E(function () {
              a.css('opacity', 0), a.transition(400);
            }, 1e3))),
          this.emit('scrollbarDragEnd', e),
          t.snapOnRelease && this.slideToClosest());
      },
      enableDraggable: function () {
        if (this.params.scrollbar.el) {
          var e = r(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            n = this.support,
            l = t.$el[0],
            o = !(!n.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            d = !(!n.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          n.touch
            ? (l.addEventListener(i.start, this.scrollbar.onDragStart, o),
              l.addEventListener(i.move, this.scrollbar.onDragMove, o),
              l.addEventListener(i.end, this.scrollbar.onDragEnd, d))
            : (l.addEventListener(s.start, this.scrollbar.onDragStart, o),
              e.addEventListener(s.move, this.scrollbar.onDragMove, o),
              e.addEventListener(s.end, this.scrollbar.onDragEnd, d));
        }
      },
      disableDraggable: function () {
        if (this.params.scrollbar.el) {
          var e = r(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            n = this.support,
            l = t.$el[0],
            o = !(!n.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            d = !(!n.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          n.touch
            ? (l.removeEventListener(i.start, this.scrollbar.onDragStart, o),
              l.removeEventListener(i.move, this.scrollbar.onDragMove, o),
              l.removeEventListener(i.end, this.scrollbar.onDragEnd, d))
            : (l.removeEventListener(s.start, this.scrollbar.onDragStart, o),
              e.removeEventListener(s.move, this.scrollbar.onDragMove, o),
              e.removeEventListener(s.end, this.scrollbar.onDragEnd, d));
        }
      },
      init: function () {
        if (this.params.scrollbar.el) {
          var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            s = m(i.el);
          this.params.uniqueNavElements &&
            'string' == typeof i.el &&
            s.length > 1 &&
            1 === t.find(i.el).length &&
            (s = t.find(i.el));
          var a = s.find('.' + this.params.scrollbar.dragClass);
          0 === a.length &&
            ((a = m(
              '<div class="' + this.params.scrollbar.dragClass + '"></div>',
            )),
            s.append(a)),
            S(e, { $el: s, el: s[0], $dragEl: a, dragEl: a[0] }),
            i.draggable && e.enableDraggable();
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    },
    Q = {
      setTransform: function (e, t) {
        var i = this.rtl,
          s = m(e),
          a = i ? -1 : 1,
          r = s.attr('data-swiper-parallax') || '0',
          n = s.attr('data-swiper-parallax-x'),
          l = s.attr('data-swiper-parallax-y'),
          o = s.attr('data-swiper-parallax-scale'),
          d = s.attr('data-swiper-parallax-opacity');
        if (
          (n || l
            ? ((n = n || '0'), (l = l || '0'))
            : this.isHorizontal()
            ? ((n = r), (l = '0'))
            : ((l = r), (n = '0')),
          (n =
            n.indexOf('%') >= 0
              ? parseInt(n, 10) * t * a + '%'
              : n * t * a + 'px'),
          (l = l.indexOf('%') >= 0 ? parseInt(l, 10) * t + '%' : l * t + 'px'),
          null != d)
        ) {
          var h = d - (d - 1) * (1 - Math.abs(t));
          s[0].style.opacity = h;
        }
        if (null == o) s.transform('translate3d(' + n + ', ' + l + ', 0px)');
        else {
          var p = o - (o - 1) * (1 - Math.abs(t));
          s.transform(
            'translate3d(' + n + ', ' + l + ', 0px) scale(' + p + ')',
          );
        }
      },
      setTranslate: function () {
        var e = this,
          t = e.$el,
          i = e.slides,
          s = e.progress,
          a = e.snapGrid;
        t
          .children(
            '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
          )
          .each(function (t) {
            e.parallax.setTransform(t, s);
          }),
          i.each(function (t, i) {
            var r = t.progress;
            e.params.slidesPerGroup > 1 &&
              'auto' !== e.params.slidesPerView &&
              (r += Math.ceil(i / 2) - s * (a.length - 1)),
              (r = Math.min(Math.max(r, -1), 1)),
              m(t)
                .find(
                  '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
                )
                .each(function (t) {
                  e.parallax.setTransform(t, r);
                });
          });
      },
      setTransition: function (e) {
        void 0 === e && (e = this.params.speed);
        this.$el
          .find(
            '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
          )
          .each(function (t) {
            var i = m(t),
              s = parseInt(i.attr('data-swiper-parallax-duration'), 10) || e;
            0 === e && (s = 0), i.transition(s);
          });
      },
    },
    ee = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
      },
      onGestureStart: function (e) {
        var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;
        if (
          ((s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1), !t.gestures)
        ) {
          if (
            'touchstart' !== e.type ||
            ('touchstart' === e.type && e.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureTouched = !0),
            (a.scaleStart = ee.getDistanceBetweenTouches(e));
        }
        (a.$slideEl && a.$slideEl.length) ||
        ((a.$slideEl = m(e.target).closest('.' + this.params.slideClass)),
        0 === a.$slideEl.length &&
          (a.$slideEl = this.slides.eq(this.activeIndex)),
        (a.$imageEl = a.$slideEl.find(
          'img, svg, canvas, picture, .swiper-zoom-target',
        )),
        (a.$imageWrapEl = a.$imageEl.parent('.' + i.containerClass)),
        (a.maxRatio = a.$imageWrapEl.attr('data-swiper-zoom') || i.maxRatio),
        0 !== a.$imageWrapEl.length)
          ? (a.$imageEl && a.$imageEl.transition(0), (this.zoom.isScaling = !0))
          : (a.$imageEl = void 0);
      },
      onGestureChange: function (e) {
        var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;
        if (!t.gestures) {
          if (
            'touchmove' !== e.type ||
            ('touchmove' === e.type && e.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureMoved = !0),
            (a.scaleMove = ee.getDistanceBetweenTouches(e));
        }
        a.$imageEl && 0 !== a.$imageEl.length
          ? (t.gestures
              ? (s.scale = e.scale * s.currentScale)
              : (s.scale = (a.scaleMove / a.scaleStart) * s.currentScale),
            s.scale > a.maxRatio &&
              (s.scale =
                a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, 0.5)),
            s.scale < i.minRatio &&
              (s.scale =
                i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, 0.5)),
            a.$imageEl.transform('translate3d(0,0,0) scale(' + s.scale + ')'))
          : 'gesturechange' === e.type && s.onGestureStart(e);
      },
      onGestureEnd: function (e) {
        var t = this.device,
          i = this.support,
          s = this.params.zoom,
          a = this.zoom,
          r = a.gesture;
        if (!i.gestures) {
          if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
          if (
            'touchend' !== e.type ||
            ('touchend' === e.type && e.changedTouches.length < 2 && !t.android)
          )
            return;
          (a.fakeGestureTouched = !1), (a.fakeGestureMoved = !1);
        }
        r.$imageEl &&
          0 !== r.$imageEl.length &&
          ((a.scale = Math.max(Math.min(a.scale, r.maxRatio), s.minRatio)),
          r.$imageEl
            .transition(this.params.speed)
            .transform('translate3d(0,0,0) scale(' + a.scale + ')'),
          (a.currentScale = a.scale),
          (a.isScaling = !1),
          1 === a.scale && (r.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.device,
          i = this.zoom,
          s = i.gesture,
          a = i.image;
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          (a.isTouched ||
            (t.android && e.cancelable && e.preventDefault(),
            (a.isTouched = !0),
            (a.touchesStart.x =
              'touchstart' === e.type ? e.targetTouches[0].pageX : e.pageX),
            (a.touchesStart.y =
              'touchstart' === e.type ? e.targetTouches[0].pageY : e.pageY)));
      },
      onTouchMove: function (e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((this.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = T(i.$imageWrapEl[0], 'x') || 0),
            (s.startY = T(i.$imageWrapEl[0], 'y') || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
          var r = s.width * t.scale,
            n = s.height * t.scale;
          if (!(r < i.slideWidth && n < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - n / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesCurrent.y =
                'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY),
              !s.isMoved && !t.isScaling)
            ) {
              if (
                this.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !this.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
              a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
              a.prevTime || (a.prevTime = Date.now()),
              (a.x =
                (s.touchesCurrent.x - a.prevPositionX) /
                (Date.now() - a.prevTime) /
                2),
              (a.y =
                (s.touchesCurrent.y - a.prevPositionY) /
                (Date.now() - a.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
              Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
              (a.prevPositionX = s.touchesCurrent.x),
              (a.prevPositionY = s.touchesCurrent.y),
              (a.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                'translate3d(' + s.currentX + 'px, ' + s.currentY + 'px,0)',
              );
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!i.isTouched || !i.isMoved)
            return (i.isTouched = !1), void (i.isMoved = !1);
          (i.isTouched = !1), (i.isMoved = !1);
          var a = 300,
            r = 300,
            n = s.x * a,
            l = i.currentX + n,
            o = s.y * r,
            d = i.currentY + o;
          0 !== s.x && (a = Math.abs((l - i.currentX) / s.x)),
            0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
          var h = Math.max(a, r);
          (i.currentX = l), (i.currentY = d);
          var p = i.width * e.scale,
            u = i.height * e.scale;
          (i.minX = Math.min(t.slideWidth / 2 - p / 2, 0)),
            (i.maxX = -i.minX),
            (i.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
            (i.maxY = -i.minY),
            (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
            (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
            t.$imageWrapEl
              .transition(h)
              .transform(
                'translate3d(' + i.currentX + 'px, ' + i.currentY + 'px,0)',
              );
        }
      },
      onTransitionEnd: function () {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl &&
          this.previousIndex !== this.activeIndex &&
          (t.$imageEl && t.$imageEl.transform('translate3d(0,0,0) scale(1)'),
          t.$imageWrapEl && t.$imageWrapEl.transform('translate3d(0,0,0)'),
          (e.scale = 1),
          (e.currentScale = 1),
          (t.$slideEl = void 0),
          (t.$imageEl = void 0),
          (t.$imageWrapEl = void 0));
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (e) {
        var t,
          i,
          s,
          a,
          r,
          n,
          l,
          o,
          d,
          h,
          p,
          u,
          c,
          v,
          f,
          m,
          g = this.zoom,
          w = this.params.zoom,
          b = g.gesture,
          y = g.image;
        (b.$slideEl ||
          (this.params.virtual && this.params.virtual.enabled && this.virtual
            ? (b.$slideEl = this.$wrapperEl.children(
                '.' + this.params.slideActiveClass,
              ))
            : (b.$slideEl = this.slides.eq(this.activeIndex)),
          (b.$imageEl = b.$slideEl.find(
            'img, svg, canvas, picture, .swiper-zoom-target',
          )),
          (b.$imageWrapEl = b.$imageEl.parent('.' + w.containerClass))),
        b.$imageEl && 0 !== b.$imageEl.length) &&
          (b.$slideEl.addClass('' + w.zoomedSlideClass),
          void 0 === y.touchesStart.x && e
            ? ((t =
                'touchend' === e.type ? e.changedTouches[0].pageX : e.pageX),
              (i = 'touchend' === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((t = y.touchesStart.x), (i = y.touchesStart.y)),
          (g.scale = b.$imageWrapEl.attr('data-swiper-zoom') || w.maxRatio),
          (g.currentScale =
            b.$imageWrapEl.attr('data-swiper-zoom') || w.maxRatio),
          e
            ? ((f = b.$slideEl[0].offsetWidth),
              (m = b.$slideEl[0].offsetHeight),
              (s = b.$slideEl.offset().left + f / 2 - t),
              (a = b.$slideEl.offset().top + m / 2 - i),
              (l = b.$imageEl[0].offsetWidth),
              (o = b.$imageEl[0].offsetHeight),
              (d = l * g.scale),
              (h = o * g.scale),
              (c = -(p = Math.min(f / 2 - d / 2, 0))),
              (v = -(u = Math.min(m / 2 - h / 2, 0))),
              (r = s * g.scale) < p && (r = p),
              r > c && (r = c),
              (n = a * g.scale) < u && (n = u),
              n > v && (n = v))
            : ((r = 0), (n = 0)),
          b.$imageWrapEl
            .transition(300)
            .transform('translate3d(' + r + 'px, ' + n + 'px,0)'),
          b.$imageEl
            .transition(300)
            .transform('translate3d(0,0,0) scale(' + g.scale + ')'));
      },
      out: function () {
        var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
        i.$slideEl ||
          (this.params.virtual && this.params.virtual.enabled && this.virtual
            ? (i.$slideEl = this.$wrapperEl.children(
                '.' + this.params.slideActiveClass,
              ))
            : (i.$slideEl = this.slides.eq(this.activeIndex)),
          (i.$imageEl = i.$slideEl.find(
            'img, svg, canvas, picture, .swiper-zoom-target',
          )),
          (i.$imageWrapEl = i.$imageEl.parent('.' + t.containerClass))),
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((e.scale = 1),
            (e.currentScale = 1),
            i.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
            i.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'),
            i.$slideEl.removeClass('' + t.zoomedSlideClass),
            (i.$slideEl = void 0));
      },
      toggleGestures: function (e) {
        var t = this.zoom,
          i = t.slideSelector,
          s = t.passiveListener;
        this.$wrapperEl[e]('gesturestart', i, t.onGestureStart, s),
          this.$wrapperEl[e]('gesturechange', i, t.onGestureChange, s),
          this.$wrapperEl[e]('gestureend', i, t.onGestureEnd, s);
      },
      enableGestures: function () {
        this.zoom.gesturesEnabled ||
          ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures('on'));
      },
      disableGestures: function () {
        this.zoom.gesturesEnabled &&
          ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures('off'));
      },
      enable: function () {
        var e = this.support,
          t = this.zoom;
        if (!t.enabled) {
          t.enabled = !0;
          var i = !(
              'touchstart' !== this.touchEvents.start ||
              !e.passiveListener ||
              !this.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            s = !e.passiveListener || { passive: !1, capture: !0 },
            a = '.' + this.params.slideClass;
          (this.zoom.passiveListener = i),
            (this.zoom.slideSelector = a),
            e.gestures
              ? (this.$wrapperEl.on(
                  this.touchEvents.start,
                  this.zoom.enableGestures,
                  i,
                ),
                this.$wrapperEl.on(
                  this.touchEvents.end,
                  this.zoom.disableGestures,
                  i,
                ))
              : 'touchstart' === this.touchEvents.start &&
                (this.$wrapperEl.on(
                  this.touchEvents.start,
                  a,
                  t.onGestureStart,
                  i,
                ),
                this.$wrapperEl.on(
                  this.touchEvents.move,
                  a,
                  t.onGestureChange,
                  s,
                ),
                this.$wrapperEl.on(this.touchEvents.end, a, t.onGestureEnd, i),
                this.touchEvents.cancel &&
                  this.$wrapperEl.on(
                    this.touchEvents.cancel,
                    a,
                    t.onGestureEnd,
                    i,
                  )),
            this.$wrapperEl.on(
              this.touchEvents.move,
              '.' + this.params.zoom.containerClass,
              t.onTouchMove,
              s,
            );
        }
      },
      disable: function () {
        var e = this.zoom;
        if (e.enabled) {
          var t = this.support;
          this.zoom.enabled = !1;
          var i = !(
              'touchstart' !== this.touchEvents.start ||
              !t.passiveListener ||
              !this.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            s = !t.passiveListener || { passive: !1, capture: !0 },
            a = '.' + this.params.slideClass;
          t.gestures
            ? (this.$wrapperEl.off(
                this.touchEvents.start,
                this.zoom.enableGestures,
                i,
              ),
              this.$wrapperEl.off(
                this.touchEvents.end,
                this.zoom.disableGestures,
                i,
              ))
            : 'touchstart' === this.touchEvents.start &&
              (this.$wrapperEl.off(
                this.touchEvents.start,
                a,
                e.onGestureStart,
                i,
              ),
              this.$wrapperEl.off(
                this.touchEvents.move,
                a,
                e.onGestureChange,
                s,
              ),
              this.$wrapperEl.off(this.touchEvents.end, a, e.onGestureEnd, i),
              this.touchEvents.cancel &&
                this.$wrapperEl.off(
                  this.touchEvents.cancel,
                  a,
                  e.onGestureEnd,
                  i,
                )),
            this.$wrapperEl.off(
              this.touchEvents.move,
              '.' + this.params.zoom.containerClass,
              e.onTouchMove,
              s,
            );
        }
      },
    },
    te = {
      loadInSlide: function (e, t) {
        void 0 === t && (t = !0);
        var i = this,
          s = i.params.lazy;
        if (void 0 !== e && 0 !== i.slides.length) {
          var a =
              i.virtual && i.params.virtual.enabled
                ? i.$wrapperEl.children(
                    '.' +
                      i.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]',
                  )
                : i.slides.eq(e),
            r = a.find(
              '.' +
                s.elementClass +
                ':not(.' +
                s.loadedClass +
                '):not(.' +
                s.loadingClass +
                ')',
            );
          !a.hasClass(s.elementClass) ||
            a.hasClass(s.loadedClass) ||
            a.hasClass(s.loadingClass) ||
            r.push(a[0]),
            0 !== r.length &&
              r.each(function (e) {
                var r = m(e);
                r.addClass(s.loadingClass);
                var n = r.attr('data-background'),
                  l = r.attr('data-src'),
                  o = r.attr('data-srcset'),
                  d = r.attr('data-sizes'),
                  h = r.parent('picture');
                i.loadImage(r[0], l || n, o, d, !1, function () {
                  if (null != i && i && (!i || i.params) && !i.destroyed) {
                    if (
                      (n
                        ? (r.css('background-image', 'url("' + n + '")'),
                          r.removeAttr('data-background'))
                        : (o &&
                            (r.attr('srcset', o), r.removeAttr('data-srcset')),
                          d && (r.attr('sizes', d), r.removeAttr('data-sizes')),
                          h.length &&
                            h.children('source').each(function (e) {
                              var t = m(e);
                              t.attr('data-srcset') &&
                                (t.attr('srcset', t.attr('data-srcset')),
                                t.removeAttr('data-srcset'));
                            }),
                          l && (r.attr('src', l), r.removeAttr('data-src'))),
                      r.addClass(s.loadedClass).removeClass(s.loadingClass),
                      a.find('.' + s.preloaderClass).remove(),
                      i.params.loop && t)
                    ) {
                      var e = a.attr('data-swiper-slide-index');
                      if (a.hasClass(i.params.slideDuplicateClass)) {
                        var p = i.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            i.params.slideDuplicateClass +
                            ')',
                        );
                        i.lazy.loadInSlide(p.index(), !1);
                      } else {
                        var u = i.$wrapperEl.children(
                          '.' +
                            i.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]',
                        );
                        i.lazy.loadInSlide(u.index(), !1);
                      }
                    }
                    i.emit('lazyImageReady', a[0], r[0]),
                      i.params.autoHeight && i.updateAutoHeight();
                  }
                }),
                  i.emit('lazyImageLoad', a[0], r[0]);
              });
        }
      },
      load: function () {
        var e = this,
          t = e.$wrapperEl,
          i = e.params,
          s = e.slides,
          a = e.activeIndex,
          r = e.virtual && i.virtual.enabled,
          n = i.lazy,
          l = i.slidesPerView;
        function o(e) {
          if (r) {
            if (
              t.children(
                '.' + i.slideClass + '[data-swiper-slide-index="' + e + '"]',
              ).length
            )
              return !0;
          } else if (s[e]) return !0;
          return !1;
        }
        function d(e) {
          return r ? m(e).attr('data-swiper-slide-index') : m(e).index();
        }
        if (
          ('auto' === l && (l = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children('.' + i.slideVisibleClass).each(function (t) {
            var i = r ? m(t).attr('data-swiper-slide-index') : m(t).index();
            e.lazy.loadInSlide(i);
          });
        else if (l > 1)
          for (var h = a; h < a + l; h += 1) o(h) && e.lazy.loadInSlide(h);
        else e.lazy.loadInSlide(a);
        if (n.loadPrevNext)
          if (l > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
            for (
              var p = n.loadPrevNextAmount,
                u = l,
                c = Math.min(a + u + Math.max(p, u), s.length),
                v = Math.max(a - Math.max(u, p), 0),
                f = a + l;
              f < c;
              f += 1
            )
              o(f) && e.lazy.loadInSlide(f);
            for (var g = v; g < a; g += 1) o(g) && e.lazy.loadInSlide(g);
          } else {
            var w = t.children('.' + i.slideNextClass);
            w.length > 0 && e.lazy.loadInSlide(d(w));
            var b = t.children('.' + i.slidePrevClass);
            b.length > 0 && e.lazy.loadInSlide(d(b));
          }
      },
    },
    ie = {
      LinearSpline: function (e, t) {
        var i,
          s,
          a,
          r,
          n,
          l = function (e, t) {
            for (s = -1, i = e.length; i - s > 1; )
              e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a);
            return i;
          };
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = l(this.x, e)),
                (r = n - 1),
                ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                  (this.x[n] - this.x[r]) +
                  this.y[r])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        this.controller.spline ||
          (this.controller.spline = this.params.loop
            ? new ie.LinearSpline(this.slidesGrid, e.slidesGrid)
            : new ie.LinearSpline(this.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        var i,
          s,
          a = this,
          r = a.controller.control,
          n = a.constructor;
        function l(e) {
          var t = a.rtlTranslate ? -a.translate : a.translate;
          'slide' === a.params.controller.by &&
            (a.controller.getInterpolateFunction(e),
            (s = -a.controller.spline.interpolate(-t))),
            (s && 'container' !== a.params.controller.by) ||
              ((i =
                (e.maxTranslate() - e.minTranslate()) /
                (a.maxTranslate() - a.minTranslate())),
              (s = (t - a.minTranslate()) * i + e.minTranslate())),
            a.params.controller.inverse && (s = e.maxTranslate() - s),
            e.updateProgress(s),
            e.setTranslate(s, a),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o += 1)
            r[o] !== t && r[o] instanceof n && l(r[o]);
        else r instanceof n && t !== r && l(r);
      },
      setTransition: function (e, t) {
        var i,
          s = this,
          a = s.constructor,
          r = s.controller.control;
        function n(t) {
          t.setTransition(e, s),
            0 !== e &&
              (t.transitionStart(),
              t.params.autoHeight &&
                E(function () {
                  t.updateAutoHeight();
                }),
              t.$wrapperEl.transitionEnd(function () {
                r &&
                  (t.params.loop &&
                    'slide' === s.params.controller.by &&
                    t.loopFix(),
                  t.transitionEnd());
              }));
        }
        if (Array.isArray(r))
          for (i = 0; i < r.length; i += 1)
            r[i] !== t && r[i] instanceof a && n(r[i]);
        else r instanceof a && t !== r && n(r);
      },
    },
    se = {
      makeElFocusable: function (e) {
        return e.attr('tabIndex', '0'), e;
      },
      makeElNotFocusable: function (e) {
        return e.attr('tabIndex', '-1'), e;
      },
      addElRole: function (e, t) {
        return e.attr('role', t), e;
      },
      addElLabel: function (e, t) {
        return e.attr('aria-label', t), e;
      },
      disableEl: function (e) {
        return e.attr('aria-disabled', !0), e;
      },
      enableEl: function (e) {
        return e.attr('aria-disabled', !1), e;
      },
      onEnterKey: function (e) {
        var t = this.params.a11y;
        if (13 === e.keyCode) {
          var i = m(e.target);
          this.navigation &&
            this.navigation.$nextEl &&
            i.is(this.navigation.$nextEl) &&
            ((this.isEnd && !this.params.loop) || this.slideNext(),
            this.isEnd
              ? this.a11y.notify(t.lastSlideMessage)
              : this.a11y.notify(t.nextSlideMessage)),
            this.navigation &&
              this.navigation.$prevEl &&
              i.is(this.navigation.$prevEl) &&
              ((this.isBeginning && !this.params.loop) || this.slidePrev(),
              this.isBeginning
                ? this.a11y.notify(t.firstSlideMessage)
                : this.a11y.notify(t.prevSlideMessage)),
            this.pagination &&
              i.is('.' + this.params.pagination.bulletClass) &&
              i[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(''), t.html(e));
      },
      updateNavigation: function () {
        if (!this.params.loop && this.navigation) {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          i &&
            i.length > 0 &&
            (this.isBeginning
              ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i))
              : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))),
            t &&
              t.length > 0 &&
              (this.isEnd
                ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t))
                : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
        }
      },
      updatePagination: function () {
        var e = this,
          t = e.params.a11y;
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each(function (i) {
            var s = m(i);
            e.a11y.makeElFocusable(s),
              e.a11y.addElRole(s, 'button'),
              e.a11y.addElLabel(
                s,
                t.paginationBulletMessage.replace(
                  /\{\{index\}\}/,
                  s.index() + 1,
                ),
              );
          });
      },
      init: function () {
        this.$el.append(this.a11y.liveRegion);
        var e,
          t,
          i = this.params.a11y;
        this.navigation &&
          this.navigation.$nextEl &&
          (e = this.navigation.$nextEl),
          this.navigation &&
            this.navigation.$prevEl &&
            (t = this.navigation.$prevEl),
          e &&
            (this.a11y.makeElFocusable(e),
            this.a11y.addElRole(e, 'button'),
            this.a11y.addElLabel(e, i.nextSlideMessage),
            e.on('keydown', this.a11y.onEnterKey)),
          t &&
            (this.a11y.makeElFocusable(t),
            this.a11y.addElRole(t, 'button'),
            this.a11y.addElLabel(t, i.prevSlideMessage),
            t.on('keydown', this.a11y.onEnterKey)),
          this.pagination &&
            this.params.pagination.clickable &&
            this.pagination.bullets &&
            this.pagination.bullets.length &&
            this.pagination.$el.on(
              'keydown',
              '.' + this.params.pagination.bulletClass,
              this.a11y.onEnterKey,
            );
      },
      destroy: function () {
        var e, t;
        this.a11y.liveRegion &&
          this.a11y.liveRegion.length > 0 &&
          this.a11y.liveRegion.remove(),
          this.navigation &&
            this.navigation.$nextEl &&
            (e = this.navigation.$nextEl),
          this.navigation &&
            this.navigation.$prevEl &&
            (t = this.navigation.$prevEl),
          e && e.off('keydown', this.a11y.onEnterKey),
          t && t.off('keydown', this.a11y.onEnterKey),
          this.pagination &&
            this.params.pagination.clickable &&
            this.pagination.bullets &&
            this.pagination.bullets.length &&
            this.pagination.$el.off(
              'keydown',
              '.' + this.params.pagination.bulletClass,
              this.a11y.onEnterKey,
            );
      },
    },
    ae = {
      init: function () {
        var e = l();
        if (this.params.history) {
          if (!e.history || !e.history.pushState)
            return (
              (this.params.history.enabled = !1),
              void (this.params.hashNavigation.enabled = !0)
            );
          var t = this.history;
          (t.initialized = !0),
            (t.paths = ae.getPathValues(this.params.url)),
            (t.paths.key || t.paths.value) &&
              (t.scrollToSlide(
                0,
                t.paths.value,
                this.params.runCallbacksOnInit,
              ),
              this.params.history.replaceState ||
                e.addEventListener(
                  'popstate',
                  this.history.setHistoryPopState,
                ));
        }
      },
      destroy: function () {
        var e = l();
        this.params.history.replaceState ||
          e.removeEventListener('popstate', this.history.setHistoryPopState);
      },
      setHistoryPopState: function () {
        (this.history.paths = ae.getPathValues(this.params.url)),
          this.history.scrollToSlide(
            this.params.speed,
            this.history.paths.value,
            !1,
          );
      },
      getPathValues: function (e) {
        var t = l(),
          i = (e ? new URL(e) : t.location).pathname
            .slice(1)
            .split('/')
            .filter(function (e) {
              return '' !== e;
            }),
          s = i.length;
        return { key: i[s - 2], value: i[s - 1] };
      },
      setHistory: function (e, t) {
        var i = l();
        if (this.history.initialized && this.params.history.enabled) {
          var s;
          s = this.params.url ? new URL(this.params.url) : i.location;
          var a = this.slides.eq(t),
            r = ae.slugify(a.attr('data-history'));
          s.pathname.includes(e) || (r = e + '/' + r);
          var n = i.history.state;
          (n && n.value === r) ||
            (this.params.history.replaceState
              ? i.history.replaceState({ value: r }, null, r)
              : i.history.pushState({ value: r }, null, r));
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]+/g, '')
          .replace(/--+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '');
      },
      scrollToSlide: function (e, t, i) {
        if (t)
          for (var s = 0, a = this.slides.length; s < a; s += 1) {
            var r = this.slides.eq(s);
            if (
              ae.slugify(r.attr('data-history')) === t &&
              !r.hasClass(this.params.slideDuplicateClass)
            ) {
              var n = r.index();
              this.slideTo(n, e, i);
            }
          }
        else this.slideTo(0, e, i);
      },
    },
    re = {
      onHashCange: function () {
        var e = r();
        this.emit('hashChange');
        var t = e.location.hash.replace('#', '');
        if (t !== this.slides.eq(this.activeIndex).attr('data-hash')) {
          var i = this.$wrapperEl
            .children('.' + this.params.slideClass + '[data-hash="' + t + '"]')
            .index();
          if (void 0 === i) return;
          this.slideTo(i);
        }
      },
      setHash: function () {
        var e = l(),
          t = r();
        if (
          this.hashNavigation.initialized &&
          this.params.hashNavigation.enabled
        )
          if (
            this.params.hashNavigation.replaceState &&
            e.history &&
            e.history.replaceState
          )
            e.history.replaceState(
              null,
              null,
              '#' + this.slides.eq(this.activeIndex).attr('data-hash') || '',
            ),
              this.emit('hashSet');
          else {
            var i = this.slides.eq(this.activeIndex),
              s = i.attr('data-hash') || i.attr('data-history');
            (t.location.hash = s || ''), this.emit('hashSet');
          }
      },
      init: function () {
        var e = r(),
          t = l();
        if (
          !(
            !this.params.hashNavigation.enabled ||
            (this.params.history && this.params.history.enabled)
          )
        ) {
          this.hashNavigation.initialized = !0;
          var i = e.location.hash.replace('#', '');
          if (i)
            for (var s = 0, a = this.slides.length; s < a; s += 1) {
              var n = this.slides.eq(s);
              if (
                (n.attr('data-hash') || n.attr('data-history')) === i &&
                !n.hasClass(this.params.slideDuplicateClass)
              ) {
                var o = n.index();
                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
              }
            }
          this.params.hashNavigation.watchState &&
            m(t).on('hashchange', this.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        var e = l();
        this.params.hashNavigation.watchState &&
          m(e).off('hashchange', this.hashNavigation.onHashCange);
      },
    },
    ne = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
        t.attr('data-swiper-autoplay') &&
          (i = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
          clearTimeout(e.autoplay.timeout),
          (e.autoplay.timeout = E(function () {
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  e.slidePrev(e.params.speed, !0, !0),
                  e.emit('autoplay'))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                    e.emit('autoplay'))
                : (e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))
              : e.params.loop
              ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit('autoplay'))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : (e.slideTo(0, e.params.speed, !0, !0), e.emit('autoplay'))
              : (e.slideNext(e.params.speed, !0, !0), e.emit('autoplay')),
              e.params.cssMode && e.autoplay.running && e.autoplay.run();
          }, i));
      },
      start: function () {
        return (
          void 0 === this.autoplay.timeout &&
          !this.autoplay.running &&
          ((this.autoplay.running = !0),
          this.emit('autoplayStart'),
          this.autoplay.run(),
          !0)
        );
      },
      stop: function () {
        return (
          !!this.autoplay.running &&
          void 0 !== this.autoplay.timeout &&
          (this.autoplay.timeout &&
            (clearTimeout(this.autoplay.timeout),
            (this.autoplay.timeout = void 0)),
          (this.autoplay.running = !1),
          this.emit('autoplayStop'),
          !0)
        );
      },
      pause: function (e) {
        this.autoplay.running &&
          (this.autoplay.paused ||
            (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
            (this.autoplay.paused = !0),
            0 !== e && this.params.autoplay.waitForTransition
              ? (this.$wrapperEl[0].addEventListener(
                  'transitionend',
                  this.autoplay.onTransitionEnd,
                ),
                this.$wrapperEl[0].addEventListener(
                  'webkitTransitionEnd',
                  this.autoplay.onTransitionEnd,
                ))
              : ((this.autoplay.paused = !1), this.autoplay.run())));
      },
      onVisibilityChange: function () {
        var e = r();
        'hidden' === e.visibilityState &&
          this.autoplay.running &&
          this.autoplay.pause(),
          'visible' === e.visibilityState &&
            this.autoplay.paused &&
            (this.autoplay.run(), (this.autoplay.paused = !1));
      },
      onTransitionEnd: function (e) {
        this &&
          !this.destroyed &&
          this.$wrapperEl &&
          e.target === this.$wrapperEl[0] &&
          (this.$wrapperEl[0].removeEventListener(
            'transitionend',
            this.autoplay.onTransitionEnd,
          ),
          this.$wrapperEl[0].removeEventListener(
            'webkitTransitionEnd',
            this.autoplay.onTransitionEnd,
          ),
          (this.autoplay.paused = !1),
          this.autoplay.running ? this.autoplay.run() : this.autoplay.stop());
      },
    },
    le = {
      setTranslate: function () {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
          this.params.virtualTranslate || (s -= this.translate);
          var a = 0;
          this.isHorizontal() || ((a = s), (s = 0));
          var r = this.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: r }).transform(
            'translate3d(' + s + 'px, ' + a + 'px, 0px)',
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.$wrapperEl;
        if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
          var a = !1;
          i.transitionEnd(function () {
            if (!a && t && !t.destroyed) {
              (a = !0), (t.animating = !1);
              for (
                var e = ['webkitTransitionEnd', 'transitionend'], i = 0;
                i < e.length;
                i += 1
              )
                s.trigger(e[i]);
            }
          });
        }
      },
    },
    oe = {
      setTranslate: function () {
        var e,
          t = this.$el,
          i = this.$wrapperEl,
          s = this.slides,
          a = this.width,
          r = this.height,
          n = this.rtlTranslate,
          l = this.size,
          o = this.browser,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          u = 0;
        d.shadow &&
          (h
            ? (0 === (e = i.find('.swiper-cube-shadow')).length &&
                ((e = m('<div class="swiper-cube-shadow"></div>')),
                i.append(e)),
              e.css({ height: a + 'px' }))
            : 0 === (e = t.find('.swiper-cube-shadow')).length &&
              ((e = m('<div class="swiper-cube-shadow"></div>')), t.append(e)));
        for (var c = 0; c < s.length; c += 1) {
          var v = s.eq(c),
            f = c;
          p && (f = parseInt(v.attr('data-swiper-slide-index'), 10));
          var g = 90 * f,
            w = Math.floor(g / 360);
          n && ((g = -g), (w = Math.floor(-g / 360)));
          var b = Math.max(Math.min(v[0].progress, 1), -1),
            y = 0,
            E = 0,
            x = 0;
          f % 4 == 0
            ? ((y = 4 * -w * l), (x = 0))
            : (f - 1) % 4 == 0
            ? ((y = 0), (x = 4 * -w * l))
            : (f - 2) % 4 == 0
            ? ((y = l + 4 * w * l), (x = l))
            : (f - 3) % 4 == 0 && ((y = -l), (x = 3 * l + 4 * l * w)),
            n && (y = -y),
            h || ((E = y), (y = 0));
          var T =
            'rotateX(' +
            (h ? 0 : -g) +
            'deg) rotateY(' +
            (h ? g : 0) +
            'deg) translate3d(' +
            y +
            'px, ' +
            E +
            'px, ' +
            x +
            'px)';
          if (
            (b <= 1 &&
              b > -1 &&
              ((u = 90 * f + 90 * b), n && (u = 90 * -f - 90 * b)),
            v.transform(T),
            d.slideShadows)
          ) {
            var C = h
                ? v.find('.swiper-slide-shadow-left')
                : v.find('.swiper-slide-shadow-top'),
              S = h
                ? v.find('.swiper-slide-shadow-right')
                : v.find('.swiper-slide-shadow-bottom');
            0 === C.length &&
              ((C = m(
                '<div class="swiper-slide-shadow-' +
                  (h ? 'left' : 'top') +
                  '"></div>',
              )),
              v.append(C)),
              0 === S.length &&
                ((S = m(
                  '<div class="swiper-slide-shadow-' +
                    (h ? 'right' : 'bottom') +
                    '"></div>',
                )),
                v.append(S)),
              C.length && (C[0].style.opacity = Math.max(-b, 0)),
              S.length && (S[0].style.opacity = Math.max(b, 0));
          }
        }
        if (
          (i.css({
            '-webkit-transform-origin': '50% 50% -' + l / 2 + 'px',
            '-moz-transform-origin': '50% 50% -' + l / 2 + 'px',
            '-ms-transform-origin': '50% 50% -' + l / 2 + 'px',
            'transform-origin': '50% 50% -' + l / 2 + 'px',
          }),
          d.shadow)
        )
          if (h)
            e.transform(
              'translate3d(0px, ' +
                (a / 2 + d.shadowOffset) +
                'px, ' +
                -a / 2 +
                'px) rotateX(90deg) rotateZ(0deg) scale(' +
                d.shadowScale +
                ')',
            );
          else {
            var M = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              z =
                1.5 -
                (Math.sin((2 * M * Math.PI) / 360) / 2 +
                  Math.cos((2 * M * Math.PI) / 360) / 2),
              P = d.shadowScale,
              k = d.shadowScale / z,
              $ = d.shadowOffset;
            e.transform(
              'scale3d(' +
                P +
                ', 1, ' +
                k +
                ') translate3d(0px, ' +
                (r / 2 + $) +
                'px, ' +
                -r / 2 / k +
                'px) rotateX(-90deg)',
            );
          }
        var L = o.isSafari || o.isWebView ? -l / 2 : 0;
        i.transform(
          'translate3d(0px,0,' +
            L +
            'px) rotateX(' +
            (this.isHorizontal() ? 0 : u) +
            'deg) rotateY(' +
            (this.isHorizontal() ? -u : 0) +
            'deg)',
        );
      },
      setTransition: function (e) {
        var t = this.$el;
        this.slides
          .transition(e)
          .find(
            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
          )
          .transition(e),
          this.params.cubeEffect.shadow &&
            !this.isHorizontal() &&
            t.find('.swiper-cube-shadow').transition(e);
      },
    },
    de = {
      setTranslate: function () {
        for (
          var e = this.slides, t = this.rtlTranslate, i = 0;
          i < e.length;
          i += 1
        ) {
          var s = e.eq(i),
            a = s[0].progress;
          this.params.flipEffect.limitRotation &&
            (a = Math.max(Math.min(s[0].progress, 1), -1));
          var r = -180 * a,
            n = 0,
            l = -s[0].swiperSlideOffset,
            o = 0;
          if (
            (this.isHorizontal()
              ? t && (r = -r)
              : ((o = l), (l = 0), (n = -r), (r = 0)),
            (s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length),
            this.params.flipEffect.slideShadows)
          ) {
            var d = this.isHorizontal()
                ? s.find('.swiper-slide-shadow-left')
                : s.find('.swiper-slide-shadow-top'),
              h = this.isHorizontal()
                ? s.find('.swiper-slide-shadow-right')
                : s.find('.swiper-slide-shadow-bottom');
            0 === d.length &&
              ((d = m(
                '<div class="swiper-slide-shadow-' +
                  (this.isHorizontal() ? 'left' : 'top') +
                  '"></div>',
              )),
              s.append(d)),
              0 === h.length &&
                ((h = m(
                  '<div class="swiper-slide-shadow-' +
                    (this.isHorizontal() ? 'right' : 'bottom') +
                    '"></div>',
                )),
                s.append(h)),
              d.length && (d[0].style.opacity = Math.max(-a, 0)),
              h.length && (h[0].style.opacity = Math.max(a, 0));
          }
          s.transform(
            'translate3d(' +
              l +
              'px, ' +
              o +
              'px, 0px) rotateX(' +
              n +
              'deg) rotateY(' +
              r +
              'deg)',
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;
        if (
          (i
            .transition(e)
            .find(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
            )
            .transition(e),
          t.params.virtualTranslate && 0 !== e)
        ) {
          var r = !1;
          i.eq(s).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              (r = !0), (t.animating = !1);
              for (
                var e = ['webkitTransitionEnd', 'transitionend'], i = 0;
                i < e.length;
                i += 1
              )
                a.trigger(e[i]);
            }
          });
        }
      },
    },
    he = {
      setTranslate: function () {
        for (
          var e = this.width,
            t = this.height,
            i = this.slides,
            s = this.slidesSizesGrid,
            a = this.params.coverflowEffect,
            r = this.isHorizontal(),
            n = this.translate,
            l = r ? e / 2 - n : t / 2 - n,
            o = r ? a.rotate : -a.rotate,
            d = a.depth,
            h = 0,
            p = i.length;
          h < p;
          h += 1
        ) {
          var u = i.eq(h),
            c = s[h],
            v = ((l - u[0].swiperSlideOffset - c / 2) / c) * a.modifier,
            f = r ? o * v : 0,
            g = r ? 0 : o * v,
            w = -d * Math.abs(v),
            b = a.stretch;
          'string' == typeof b &&
            -1 !== b.indexOf('%') &&
            (b = (parseFloat(a.stretch) / 100) * c);
          var y = r ? 0 : b * v,
            E = r ? b * v : 0,
            x = 1 - (1 - a.scale) * Math.abs(v);
          Math.abs(E) < 0.001 && (E = 0),
            Math.abs(y) < 0.001 && (y = 0),
            Math.abs(w) < 0.001 && (w = 0),
            Math.abs(f) < 0.001 && (f = 0),
            Math.abs(g) < 0.001 && (g = 0),
            Math.abs(x) < 0.001 && (x = 0);
          var T =
            'translate3d(' +
            E +
            'px,' +
            y +
            'px,' +
            w +
            'px)  rotateX(' +
            g +
            'deg) rotateY(' +
            f +
            'deg) scale(' +
            x +
            ')';
          if (
            (u.transform(T),
            (u[0].style.zIndex = 1 - Math.abs(Math.round(v))),
            a.slideShadows)
          ) {
            var C = r
                ? u.find('.swiper-slide-shadow-left')
                : u.find('.swiper-slide-shadow-top'),
              S = r
                ? u.find('.swiper-slide-shadow-right')
                : u.find('.swiper-slide-shadow-bottom');
            0 === C.length &&
              ((C = m(
                '<div class="swiper-slide-shadow-' +
                  (r ? 'left' : 'top') +
                  '"></div>',
              )),
              u.append(C)),
              0 === S.length &&
                ((S = m(
                  '<div class="swiper-slide-shadow-' +
                    (r ? 'right' : 'bottom') +
                    '"></div>',
                )),
                u.append(S)),
              C.length && (C[0].style.opacity = v > 0 ? v : 0),
              S.length && (S[0].style.opacity = -v > 0 ? -v : 0);
          }
        }
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
          )
          .transition(e);
      },
    },
    pe = {
      init: function () {
        var e = this.params.thumbs;
        if (this.thumbs.initialized) return !1;
        this.thumbs.initialized = !0;
        var t = this.constructor;
        return (
          e.swiper instanceof t
            ? ((this.thumbs.swiper = e.swiper),
              S(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              S(this.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }))
            : C(e.swiper) &&
              ((this.thumbs.swiper = new t(
                S({}, e.swiper, {
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }),
              )),
              (this.thumbs.swiperCreated = !0)),
          this.thumbs.swiper.$el.addClass(
            this.params.thumbs.thumbsContainerClass,
          ),
          this.thumbs.swiper.on('tap', this.thumbs.onThumbClick),
          !0
        );
      },
      onThumbClick: function () {
        var e = this.thumbs.swiper;
        if (e) {
          var t = e.clickedIndex,
            i = e.clickedSlide;
          if (
            !(
              (i && m(i).hasClass(this.params.thumbs.slideThumbActiveClass)) ||
              null == t
            )
          ) {
            var s;
            if (
              ((s = e.params.loop
                ? parseInt(
                    m(e.clickedSlide).attr('data-swiper-slide-index'),
                    10,
                  )
                : t),
              this.params.loop)
            ) {
              var a = this.activeIndex;
              this.slides.eq(a).hasClass(this.params.slideDuplicateClass) &&
                (this.loopFix(),
                (this._clientLeft = this.$wrapperEl[0].clientLeft),
                (a = this.activeIndex));
              var r = this.slides
                  .eq(a)
                  .prevAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index(),
                n = this.slides
                  .eq(a)
                  .nextAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index();
              s = void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r;
            }
            this.slideTo(s);
          }
        }
      },
      update: function (e) {
        var t = this.thumbs.swiper;
        if (t) {
          var i =
              'auto' === t.params.slidesPerView
                ? t.slidesPerViewDynamic()
                : t.params.slidesPerView,
            s = this.params.thumbs.autoScrollOffset,
            a = s && !t.params.loop;
          if (this.realIndex !== t.realIndex || a) {
            var r,
              n,
              l = t.activeIndex;
            if (t.params.loop) {
              t.slides.eq(l).hasClass(t.params.slideDuplicateClass) &&
                (t.loopFix(),
                (t._clientLeft = t.$wrapperEl[0].clientLeft),
                (l = t.activeIndex));
              var o = t.slides
                  .eq(l)
                  .prevAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                  .eq(0)
                  .index(),
                d = t.slides
                  .eq(l)
                  .nextAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                  .eq(0)
                  .index();
              (r =
                void 0 === o
                  ? d
                  : void 0 === d
                  ? o
                  : d - l == l - o
                  ? l
                  : d - l < l - o
                  ? d
                  : o),
                (n = this.activeIndex > this.previousIndex ? 'next' : 'prev');
            } else
              n = (r = this.realIndex) > this.previousIndex ? 'next' : 'prev';
            a && (r += 'next' === n ? s : -1 * s),
              t.visibleSlidesIndexes &&
                t.visibleSlidesIndexes.indexOf(r) < 0 &&
                (t.params.centeredSlides
                  ? (r =
                      r > l
                        ? r - Math.floor(i / 2) + 1
                        : r + Math.floor(i / 2) - 1)
                  : r > l && (r = r - i + 1),
                t.slideTo(r, e ? 0 : void 0));
          }
          var h = 1,
            p = this.params.thumbs.slideThumbActiveClass;
          if (
            (this.params.slidesPerView > 1 &&
              !this.params.centeredSlides &&
              (h = this.params.slidesPerView),
            this.params.thumbs.multipleActiveThumbs || (h = 1),
            (h = Math.floor(h)),
            t.slides.removeClass(p),
            t.params.loop || (t.params.virtual && t.params.virtual.enabled))
          )
            for (var u = 0; u < h; u += 1)
              t.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (this.realIndex + u) + '"]',
                )
                .addClass(p);
          else
            for (var c = 0; c < h; c += 1)
              t.slides.eq(this.realIndex + c).addClass(p);
        }
      },
    },
    ue = [
      q,
      _,
      {
        name: 'mousewheel',
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: 'container',
            thresholdDelta: null,
            thresholdTime: null,
          },
        },
        create: function () {
          M(this, {
            mousewheel: {
              enabled: !1,
              lastScrollTime: x(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: [],
              enable: U.enable,
              disable: U.disable,
              handle: U.handle,
              handleMouseEnter: U.handleMouseEnter,
              handleMouseLeave: U.handleMouseLeave,
              animateSlider: U.animateSlider,
              releaseScroll: U.releaseScroll,
            },
          });
        },
        on: {
          init: function (e) {
            !e.params.mousewheel.enabled &&
              e.params.cssMode &&
              e.mousewheel.disable(),
              e.params.mousewheel.enabled && e.mousewheel.enable();
          },
          destroy: function (e) {
            e.params.cssMode && e.mousewheel.enable(),
              e.mousewheel.enabled && e.mousewheel.disable();
          },
        },
      },
      {
        name: 'navigation',
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
          },
        },
        create: function () {
          M(this, { navigation: t({}, K) });
        },
        on: {
          init: function (e) {
            e.navigation.init(), e.navigation.update();
          },
          toEdge: function (e) {
            e.navigation.update();
          },
          fromEdge: function (e) {
            e.navigation.update();
          },
          destroy: function (e) {
            e.navigation.destroy();
          },
          click: function (e, t) {
            var i,
              s = e.navigation,
              a = s.$nextEl,
              r = s.$prevEl;
            !e.params.navigation.hideOnClick ||
              m(t.target).is(r) ||
              m(t.target).is(a) ||
              (a
                ? (i = a.hasClass(e.params.navigation.hiddenClass))
                : r && (i = r.hasClass(e.params.navigation.hiddenClass)),
              !0 === i ? e.emit('navigationShow') : e.emit('navigationHide'),
              a && a.toggleClass(e.params.navigation.hiddenClass),
              r && r.toggleClass(e.params.navigation.hiddenClass));
          },
        },
      },
      {
        name: 'pagination',
        params: {
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            modifierClass: 'swiper-pagination-',
            currentClass: 'swiper-pagination-current',
            totalClass: 'swiper-pagination-total',
            hiddenClass: 'swiper-pagination-hidden',
            progressbarFillClass: 'swiper-pagination-progressbar-fill',
            progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
            clickableClass: 'swiper-pagination-clickable',
            lockClass: 'swiper-pagination-lock',
          },
        },
        create: function () {
          M(this, { pagination: t({ dynamicBulletIndex: 0 }, Z) });
        },
        on: {
          init: function (e) {
            e.pagination.init(), e.pagination.render(), e.pagination.update();
          },
          activeIndexChange: function (e) {
            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
          },
          snapIndexChange: function (e) {
            e.params.loop || e.pagination.update();
          },
          slidesLengthChange: function (e) {
            e.params.loop && (e.pagination.render(), e.pagination.update());
          },
          snapGridLengthChange: function (e) {
            e.params.loop || (e.pagination.render(), e.pagination.update());
          },
          destroy: function (e) {
            e.pagination.destroy();
          },
          click: function (e, t) {
            e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              e.pagination.$el.length > 0 &&
              !m(t.target).hasClass(e.params.pagination.bulletClass) &&
              (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
                ? e.emit('paginationShow')
                : e.emit('paginationHide'),
              e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
          },
        },
      },
      {
        name: 'scrollbar',
        params: {
          scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
          },
        },
        create: function () {
          M(this, {
            scrollbar: t(
              { isTouched: !1, timeout: null, dragTimeout: null },
              J,
            ),
          });
        },
        on: {
          init: function (e) {
            e.scrollbar.init(),
              e.scrollbar.updateSize(),
              e.scrollbar.setTranslate();
          },
          update: function (e) {
            e.scrollbar.updateSize();
          },
          resize: function (e) {
            e.scrollbar.updateSize();
          },
          observerUpdate: function (e) {
            e.scrollbar.updateSize();
          },
          setTranslate: function (e) {
            e.scrollbar.setTranslate();
          },
          setTransition: function (e, t) {
            e.scrollbar.setTransition(t);
          },
          destroy: function (e) {
            e.scrollbar.destroy();
          },
        },
      },
      {
        name: 'parallax',
        params: { parallax: { enabled: !1 } },
        create: function () {
          M(this, { parallax: t({}, Q) });
        },
        on: {
          beforeInit: function (e) {
            e.params.parallax.enabled &&
              ((e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0));
          },
          init: function (e) {
            e.params.parallax.enabled && e.parallax.setTranslate();
          },
          setTranslate: function (e) {
            e.params.parallax.enabled && e.parallax.setTranslate();
          },
          setTransition: function (e, t) {
            e.params.parallax.enabled && e.parallax.setTransition(t);
          },
        },
      },
      {
        name: 'zoom',
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed',
          },
        },
        create: function () {
          var e = this;
          M(e, {
            zoom: t(
              {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              },
              ee,
            ),
          });
          var i = 1;
          Object.defineProperty(e.zoom, 'scale', {
            get: function () {
              return i;
            },
            set: function (t) {
              if (i !== t) {
                var s = e.zoom.gesture.$imageEl
                    ? e.zoom.gesture.$imageEl[0]
                    : void 0,
                  a = e.zoom.gesture.$slideEl
                    ? e.zoom.gesture.$slideEl[0]
                    : void 0;
                e.emit('zoomChange', t, s, a);
              }
              i = t;
            },
          });
        },
        on: {
          init: function (e) {
            e.params.zoom.enabled && e.zoom.enable();
          },
          destroy: function (e) {
            e.zoom.disable();
          },
          touchStart: function (e, t) {
            e.zoom.enabled && e.zoom.onTouchStart(t);
          },
          touchEnd: function (e, t) {
            e.zoom.enabled && e.zoom.onTouchEnd(t);
          },
          doubleTap: function (e, t) {
            e.params.zoom.enabled &&
              e.zoom.enabled &&
              e.params.zoom.toggle &&
              e.zoom.toggle(t);
          },
          transitionEnd: function (e) {
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
          },
          slideChange: function (e) {
            e.zoom.enabled &&
              e.params.zoom.enabled &&
              e.params.cssMode &&
              e.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: 'lazy',
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: 'swiper-lazy',
            loadingClass: 'swiper-lazy-loading',
            loadedClass: 'swiper-lazy-loaded',
            preloaderClass: 'swiper-lazy-preloader',
          },
        },
        create: function () {
          M(this, { lazy: t({ initialImageLoaded: !1 }, te) });
        },
        on: {
          beforeInit: function (e) {
            e.params.lazy.enabled &&
              e.params.preloadImages &&
              (e.params.preloadImages = !1);
          },
          init: function (e) {
            e.params.lazy.enabled &&
              !e.params.loop &&
              0 === e.params.initialSlide &&
              e.lazy.load();
          },
          scroll: function (e) {
            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
          },
          resize: function (e) {
            e.params.lazy.enabled && e.lazy.load();
          },
          scrollbarDragMove: function (e) {
            e.params.lazy.enabled && e.lazy.load();
          },
          transitionStart: function (e) {
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load();
          },
          transitionEnd: function (e) {
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              e.lazy.load();
          },
          slideChange: function (e) {
            e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
          },
        },
      },
      {
        name: 'controller',
        params: { controller: { control: void 0, inverse: !1, by: 'slide' } },
        create: function () {
          M(this, {
            controller: t({ control: this.params.controller.control }, ie),
          });
        },
        on: {
          update: function (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          resize: function (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          observerUpdate: function (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          setTranslate: function (e, t, i) {
            e.controller.control && e.controller.setTranslate(t, i);
          },
          setTransition: function (e, t, i) {
            e.controller.control && e.controller.setTransition(t, i);
          },
        },
      },
      {
        name: 'a11y',
        params: {
          a11y: {
            enabled: !0,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
          },
        },
        create: function () {
          M(this, {
            a11y: t(
              t({}, se),
              {},
              {
                liveRegion: m(
                  '<span class="' +
                    this.params.a11y.notificationClass +
                    '" aria-live="assertive" aria-atomic="true"></span>',
                ),
              },
            ),
          });
        },
        on: {
          init: function (e) {
            e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
          },
          toEdge: function (e) {
            e.params.a11y.enabled && e.a11y.updateNavigation();
          },
          fromEdge: function (e) {
            e.params.a11y.enabled && e.a11y.updateNavigation();
          },
          paginationUpdate: function (e) {
            e.params.a11y.enabled && e.a11y.updatePagination();
          },
          destroy: function (e) {
            e.params.a11y.enabled && e.a11y.destroy();
          },
        },
      },
      {
        name: 'history',
        params: { history: { enabled: !1, replaceState: !1, key: 'slides' } },
        create: function () {
          M(this, { history: t({}, ae) });
        },
        on: {
          init: function (e) {
            e.params.history.enabled && e.history.init();
          },
          destroy: function (e) {
            e.params.history.enabled && e.history.destroy();
          },
          transitionEnd: function (e) {
            e.history.initialized &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          },
          slideChange: function (e) {
            e.history.initialized &&
              e.params.cssMode &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          },
        },
      },
      {
        name: 'hash-navigation',
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        },
        create: function () {
          M(this, { hashNavigation: t({ initialized: !1 }, re) });
        },
        on: {
          init: function (e) {
            e.params.hashNavigation.enabled && e.hashNavigation.init();
          },
          destroy: function (e) {
            e.params.hashNavigation.enabled && e.hashNavigation.destroy();
          },
          transitionEnd: function (e) {
            e.hashNavigation.initialized && e.hashNavigation.setHash();
          },
          slideChange: function (e) {
            e.hashNavigation.initialized &&
              e.params.cssMode &&
              e.hashNavigation.setHash();
          },
        },
      },
      {
        name: 'autoplay',
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create: function () {
          M(this, { autoplay: t(t({}, ne), {}, { running: !1, paused: !1 }) });
        },
        on: {
          init: function (e) {
            e.params.autoplay.enabled &&
              (e.autoplay.start(),
              r().addEventListener(
                'visibilitychange',
                e.autoplay.onVisibilityChange,
              ));
          },
          beforeTransitionStart: function (e, t, i) {
            e.autoplay.running &&
              (i || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(t)
                : e.autoplay.stop());
          },
          sliderFirstMove: function (e) {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction
                ? e.autoplay.stop()
                : e.autoplay.pause());
          },
          touchEnd: function (e) {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              e.autoplay.run();
          },
          destroy: function (e) {
            e.autoplay.running && e.autoplay.stop(),
              r().removeEventListener(
                'visibilitychange',
                e.autoplay.onVisibilityChange,
              );
          },
        },
      },
      {
        name: 'effect-fade',
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          M(this, { fadeEffect: t({}, le) });
        },
        on: {
          beforeInit: function (e) {
            if ('fade' === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + 'fade');
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            'fade' === e.params.effect && e.fadeEffect.setTranslate();
          },
          setTransition: function (e, t) {
            'fade' === e.params.effect && e.fadeEffect.setTransition(t);
          },
        },
      },
      {
        name: 'effect-cube',
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create: function () {
          M(this, { cubeEffect: t({}, oe) });
        },
        on: {
          beforeInit: function (e) {
            if ('cube' === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + 'cube'),
                e.classNames.push(e.params.containerModifierClass + '3d');
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            'cube' === e.params.effect && e.cubeEffect.setTranslate();
          },
          setTransition: function (e, t) {
            'cube' === e.params.effect && e.cubeEffect.setTransition(t);
          },
        },
      },
      {
        name: 'effect-flip',
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function () {
          M(this, { flipEffect: t({}, de) });
        },
        on: {
          beforeInit: function (e) {
            if ('flip' === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + 'flip'),
                e.classNames.push(e.params.containerModifierClass + '3d');
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            'flip' === e.params.effect && e.flipEffect.setTranslate();
          },
          setTransition: function (e, t) {
            'flip' === e.params.effect && e.flipEffect.setTransition(t);
          },
        },
      },
      {
        name: 'effect-coverflow',
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create: function () {
          M(this, { coverflowEffect: t({}, he) });
        },
        on: {
          beforeInit: function (e) {
            'coverflow' === e.params.effect &&
              (e.classNames.push(e.params.containerModifierClass + 'coverflow'),
              e.classNames.push(e.params.containerModifierClass + '3d'),
              (e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0));
          },
          setTranslate: function (e) {
            'coverflow' === e.params.effect && e.coverflowEffect.setTranslate();
          },
          setTransition: function (e, t) {
            'coverflow' === e.params.effect &&
              e.coverflowEffect.setTransition(t);
          },
        },
      },
      {
        name: 'thumbs',
        params: {
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: 'swiper-slide-thumb-active',
            thumbsContainerClass: 'swiper-container-thumbs',
          },
        },
        create: function () {
          M(this, { thumbs: t({ swiper: null, initialized: !1 }, pe) });
        },
        on: {
          beforeInit: function (e) {
            var t = e.params.thumbs;
            t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
          },
          slideChange: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          update: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          resize: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          observerUpdate: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          setTransition: function (e, t) {
            var i = e.thumbs.swiper;
            i && i.setTransition(t);
          },
          beforeDestroy: function (e) {
            var t = e.thumbs.swiper;
            t && e.thumbs.swiperCreated && t && t.destroy();
          },
        },
      },
    ];
  return W.use(ue), W;
});
//# sourceMappingURL=swiper-bundle.min.js.map

(() => {
  const MOBILE = 767;
  const TABLET = 1023;

  window.isMobile = function () {
    return window.matchMedia(`(max-width: ${MOBILE}px)`).matches;
  };

  window.isTablet = function () {
    return window.matchMedia(`(max-width: ${TABLET}px)`).matches;
  };

  window.isDesktop = function () {
    return window.matchMedia(`(min-width: ${TABLET + 1}px)`).matches;
  };

  window.isMobileSafari = () => {
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iP(ad|od|hone)/i);
    const webkit = !!ua.match(/WebKit/i);
    return iOS && webkit && !ua.match(/CriOS/i) && !ua.match(/OPiOS/i);
  };
})();

$(function() {
  $("#accordion").accordion({
    collapsible: true,
    active: false,
    heightStyle: "content"
  });
});

$(function() {
  $("#phone").mask("+7 (999) 999-99-99");
});
$(function () {
  if (isMobile()) {
    var mySwiper = new Swiper('.pm-landing-insurance-list.swiper-container', {
      speed: 400,
      spaceBetween: 10,
      slidesPerView: 3,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
  }
});
