var Yc="170";var Jf=0,nu=1,Kf=2;var fd=1,Zc=2,ci=3,Fi=0,zt=1,xt=2,qn=0,Ui=1,Je=2,iu=3,su=4,jf=5,ls=100,Qf=101,ep=102,tp=103,np=104,ip=200,sp=201,rp=202,ap=203,bl=204,El=205,op=206,lp=207,cp=208,hp=209,up=210,dp=211,fp=212,pp=213,mp=214,Sl=0,wl=1,Tl=2,Js=3,Al=4,Rl=5,Cl=6,Pl=7,pd=0,gp=1,xp=2,Ni=0,Jc=1,Kc=2,jc=3,qr=4,vp=5,Qc=6,eh=7;var md=300,Ks=301,js=302,Il=303,Ll=304,lo=306,Or=1e3,ui=1001,Dl=1002,dn=1003,_p=1004;var sa=1005;var Wn=1006,zo=1007;var hs=1008;var pi=1009,gd=1010,xd=1011,zr=1012,th=1013,us=1014,Xn=1015,Nn=1016,nh=1017,ih=1018,Qs=1020,vd=35902,_d=1021,yd=1022,In=1023,Md=1024,bd=1025,$s=1026,er=1027,sh=1028,rh=1029,Ed=1030,ah=1031;var oh=1033,Da=33776,Ua=33777,Na=33778,ka=33779,Ul=35840,Nl=35841,kl=35842,Fl=35843,Bl=36196,Ol=37492,zl=37496,Hl=37808,Vl=37809,Gl=37810,Wl=37811,Xl=37812,ql=37813,$l=37814,Yl=37815,Zl=37816,Jl=37817,Kl=37818,jl=37819,Ql=37820,ec=37821,Fa=36492,tc=36494,nc=36495,Sd=36283,ic=36284,sc=36285,rc=36286;var Ba=2300,ac=2301,Ho=2302,ru=2400,au=2401,ou=2402;var yp=3200,Mp=3201;var wd=0,bp=1,Vn="",Ot="srgb",hr="srgb-linear",co="linear",ht="srgb";var As=7680;var lu=519,Ep=512,Sp=513,wp=514,Td=515,Tp=516,Ap=517,Rp=518,Cp=519,oc=35044,ho=35048;var cu="300 es",di=2e3,Oa=2001,Bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Vo=Math.PI/180,lc=180/Math.PI;function ki(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function qt(n,e,t){return Math.max(e,Math.min(t,n))}function Pp(n,e){return(n%e+e)%e}function Go(n,e,t){return(1-t)*n+t*e}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ae=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],x=i[8],v=s[0],g=s[3],p=s[6],_=s[1],E=s[4],y=s[7],N=s[2],R=s[5],L=s[8];return r[0]=a*v+o*_+l*N,r[3]=a*g+o*E+l*R,r[6]=a*p+o*y+l*L,r[1]=c*v+h*_+u*N,r[4]=c*g+h*E+u*R,r[7]=c*p+h*y+u*L,r[2]=d*v+f*_+x*N,r[5]=d*g+f*E+x*R,r[8]=d*p+f*y+x*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,x=t*u+i*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wo.makeScale(e,t)),this}rotate(e){return this.premultiply(Wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wo=new Ve;function Ad(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ip(){let n=Hr("canvas");return n.style.display="block",n}var hu={};function Ur(n){n in hu||(hu[n]=!0,console.warn(n))}function Lp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Dp(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Up(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ke={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ht&&(n.r=fi(n.r),n.g=fi(n.g),n.b=fi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ht&&(n.r=Ys(n.r),n.g=Ys(n.g),n.b=Ys(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Vn?co:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var uu=[.64,.33,.3,.6,.15,.06],du=[.2126,.7152,.0722],fu=[.3127,.329],pu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mu=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[hr]:{primaries:uu,whitePoint:fu,transfer:co,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:du,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:uu,whitePoint:fu,transfer:ht,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:du,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}});var Rs,cc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Hr("canvas")),Rs.width=e.width,Rs.height=e.height;let i=Rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fi(t[i]/255)*255):t[i]=fi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Np=0,za=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xo(s[a].image)):r.push(Xo(s[a]))}else r=Xo(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Xo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kp=0,$t=class n extends Bi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ui,s=ui,r=Wn,a=hs,o=In,l=pi,c=n.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=ki(),this.name="",this.source=new za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Or:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Or:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=md;$t.DEFAULT_ANISOTROPY=1;var gt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],x=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(f+1)/2,N=(p+1)/2,R=(h+d)/4,L=(u+v)/4,P=(x+g)/4;return E>y&&E>N?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=R/i,r=L/i):y>N?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=R/s,r=P/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=L/r,s=P/r),this.set(i,s,r,t),this}let _=Math.sqrt((g-x)*(g-x)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-x)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hc=class extends Bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new $t(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new za(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends hc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ha=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var uc=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],x=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=x,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==x){let g=1-o,p=l*d+c*f+h*x+u*v,_=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){let N=Math.sqrt(E),R=Math.atan2(N,p*_);g=Math.sin(g*R)/N,o=Math.sin(o*R)/N}let y=o*_;if(l=l*g+d*y,c=c*g+f*y,h=h*g+x*y,u=u*g+v*y,g===1-o){let N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+h*u+l*f-c*d,e[t+1]=l*x+h*d+c*u-o*f,e[t+2]=c*x+h*f+o*d-l*u,e[t+3]=h*x-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"YZX":this._x=d*h*u+c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u-d*f*x;break;case"XZY":this._x=d*h*u-c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qo.copy(this).projectOnVector(e),this.sub(qo)}reflect(e){return this.sub(qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qo=new U,gu=new Oi,mi=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ra.copy(i.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),aa.subVectors(this.max,Sr),Cs.subVectors(e.a,Sr),Ps.subVectors(e.b,Sr),Is.subVectors(e.c,Sr),Ai.subVectors(Ps,Cs),Ri.subVectors(Is,Ps),ts.subVectors(Cs,Is);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-ts.z,ts.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,ts.z,0,-ts.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-ts.y,ts.x,0];return!$o(t,Cs,Ps,Is,aa)||(t=[1,0,0,0,1,0,0,0,1],!$o(t,Cs,Ps,Is,aa))?!1:(oa.crossVectors(Ai,Ri),t=[oa.x,oa.y,oa.z],$o(t,Cs,Ps,Is,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},si=[new U,new U,new U,new U,new U,new U,new U,new U],Rn=new U,ra=new mi,Cs=new U,Ps=new U,Is=new U,Ai=new U,Ri=new U,ts=new U,Sr=new U,aa=new U,oa=new U,ns=new U;function $o(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ns.fromArray(n,r);let o=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=e.dot(ns),c=t.dot(ns),h=i.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Fp=new mi,wr=new U,Yo=new U,zi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Fp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(wr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Yo)),this.expandByPoint(wr.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new U,Zo=new U,la=new U,Ci=new U,Jo=new U,ca=new U,Ko=new U,Va=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Zo.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Zo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(la),o=Ci.dot(this.direction),l=-Ci.dot(la),c=Ci.lengthSq(),h=Math.abs(1-a*a),u,d,f,x;if(h>0)if(u=a*l-o,d=a*o-l,x=r*h,u>=0)if(d>=-x)if(d<=x){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zo).addScaledVector(la,d),f}intersectSphere(e,t){ri.subVectors(e.center,this.origin);let i=ri.dot(this.direction),s=ri.dot(ri)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,i,s,r){Jo.subVectors(t,e),ca.subVectors(i,e),Ko.crossVectors(Jo,ca);let a=this.direction.dot(Ko),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,e);let l=o*this.direction.dot(ca.crossVectors(Ci,ca));if(l<0)return null;let c=o*this.direction.dot(Jo.cross(Ci));if(c<0||l+c>a)return null;let h=-o*Ci.dot(Ko);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,d,f,x,v,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,f,x,v,g)}set(e,t,i,s,r,a,o,l,c,h,u,d,f,x,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ls.setFromMatrixColumn(e,0).length(),r=1/Ls.setFromMatrixColumn(e,1).length(),a=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,x=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+x*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,x=c*h,v=c*u;t[0]=d+v*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-x,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,x=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,x=o*h,v=o*u;t[0]=l*h,t[4]=x*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,x=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=x*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+x,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,x=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-x,t[2]=x*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bp,e,Op)}lookAt(e,t,i){let s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Pi.crossVectors(i,hn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Pi.crossVectors(i,hn)),Pi.normalize(),ha.crossVectors(hn,Pi),s[0]=Pi.x,s[4]=ha.x,s[8]=hn.x,s[1]=Pi.y,s[5]=ha.y,s[9]=hn.y,s[2]=Pi.z,s[6]=ha.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],x=i[2],v=i[6],g=i[10],p=i[14],_=i[3],E=i[7],y=i[11],N=i[15],R=s[0],L=s[4],P=s[8],S=s[12],M=s[1],k=s[5],X=s[9],C=s[13],H=s[2],G=s[6],F=s[10],T=s[14],A=s[3],W=s[7],Z=s[11],$=s[15];return r[0]=a*R+o*M+l*H+c*A,r[4]=a*L+o*k+l*G+c*W,r[8]=a*P+o*X+l*F+c*Z,r[12]=a*S+o*C+l*T+c*$,r[1]=h*R+u*M+d*H+f*A,r[5]=h*L+u*k+d*G+f*W,r[9]=h*P+u*X+d*F+f*Z,r[13]=h*S+u*C+d*T+f*$,r[2]=x*R+v*M+g*H+p*A,r[6]=x*L+v*k+g*G+p*W,r[10]=x*P+v*X+g*F+p*Z,r[14]=x*S+v*C+g*T+p*$,r[3]=_*R+E*M+y*H+N*A,r[7]=_*L+E*k+y*G+N*W,r[11]=_*P+E*X+y*F+N*Z,r[15]=_*S+E*C+y*T+N*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],x=e[3],v=e[7],g=e[11],p=e[15];return x*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*f-i*l*f)+v*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+g*(+t*c*u-t*o*f-r*a*u+i*a*f+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],x=e[12],v=e[13],g=e[14],p=e[15],_=u*g*c-v*d*c+v*l*f-o*g*f-u*l*p+o*d*p,E=x*d*c-h*g*c-x*l*f+a*g*f+h*l*p-a*d*p,y=h*v*c-x*u*c+x*o*f-a*v*f-h*o*p+a*u*p,N=x*u*l-h*v*l-x*o*d+a*v*d+h*o*g-a*u*g,R=t*_+i*E+s*y+r*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return e[0]=_*L,e[1]=(v*d*r-u*g*r-v*s*f+i*g*f+u*s*p-i*d*p)*L,e[2]=(o*g*r-v*l*r+v*s*c-i*g*c-o*s*p+i*l*p)*L,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*f-i*l*f)*L,e[4]=E*L,e[5]=(h*g*r-x*d*r+x*s*f-t*g*f-h*s*p+t*d*p)*L,e[6]=(x*l*r-a*g*r-x*s*c+t*g*c+a*s*p-t*l*p)*L,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*L,e[8]=y*L,e[9]=(x*u*r-h*v*r-x*i*f+t*v*f+h*i*p-t*u*p)*L,e[10]=(a*v*r-x*o*r+x*i*c-t*v*c-a*i*p+t*o*p)*L,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*f-t*o*f)*L,e[12]=N*L,e[13]=(h*v*s-x*u*s+x*i*d-t*v*d-h*i*g+t*u*g)*L,e[14]=(x*o*s-a*v*s-x*i*l+t*v*l+a*i*g-t*o*g)*L,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*d+t*o*d)*L,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,x=r*u,v=a*h,g=a*u,p=o*u,_=l*c,E=l*h,y=l*u,N=i.x,R=i.y,L=i.z;return s[0]=(1-(v+p))*N,s[1]=(f+y)*N,s[2]=(x-E)*N,s[3]=0,s[4]=(f-y)*R,s[5]=(1-(d+p))*R,s[6]=(g+_)*R,s[7]=0,s[8]=(x+E)*L,s[9]=(g-_)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ls.set(s[0],s[1],s[2]).length(),a=Ls.set(s[4],s[5],s[6]).length(),o=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);let c=1/r,h=1/a,u=1/o;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,t.setFromRotationMatrix(Cn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=di){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,x;if(o===di)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Oa)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=di){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*c,f=(i+s)*h,x,v;if(o===di)x=(a+r)*u,v=-2*u;else if(o===Oa)x=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ls=new U,Cn=new vt,Bp=new U(0,0,0),Op=new U(1,1,1),Pi=new U,ha=new U,hn=new U,xu=new vt,vu=new Oi,$n=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vu.setFromEuler(this),this.setFromQuaternion(vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var Ga=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zp=0,_u=new U,Ds=new Oi,ai=new vt,ua=new U,Tr=new U,Hp=new U,Vp=new Oi,yu=new U(1,0,0),Mu=new U(0,1,0),bu=new U(0,0,1),Eu={type:"added"},Gp={type:"removed"},Us={type:"childadded",child:null},jo={type:"childremoved",child:null},It=class n extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new $n,i=new Oi,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ve}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(yu,e)}rotateY(e){return this.rotateOnAxis(Mu,e)}rotateZ(e){return this.rotateOnAxis(bu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yu,e)}translateY(e){return this.translateOnAxis(Mu,e)}translateZ(e){return this.translateOnAxis(bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ua.copy(e):ua.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Tr,ua,this.up):ai.lookAt(ua,Tr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(ai),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eu),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gp),jo.child=e,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eu),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,Hp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};It.DEFAULT_UP=new U(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new U,oi=new U,Qo=new U,li=new U,Ns=new U,ks=new U,Su=new U,el=new U,tl=new U,nl=new U,il=new gt,sl=new gt,rl=new gt,Di=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Pn.subVectors(e,t),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Pn.subVectors(s,t),oi.subVectors(i,t),Qo.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(oi),l=Pn.dot(Qo),c=oi.dot(oi),h=oi.dot(Qo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-f-x,x,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return il.setScalar(0),sl.setScalar(0),rl.setScalar(0),il.fromBufferAttribute(e,t),sl.fromBufferAttribute(e,i),rl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(il,r.x),a.addScaledVector(sl,r.y),a.addScaledVector(rl,r.z),a}static isFrontFacing(e,t,i,s){return Pn.subVectors(i,t),oi.subVectors(e,t),Pn.cross(oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Pn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ns.subVectors(s,i),ks.subVectors(r,i),el.subVectors(e,i);let l=Ns.dot(el),c=ks.dot(el);if(l<=0&&c<=0)return t.copy(i);tl.subVectors(e,s);let h=Ns.dot(tl),u=ks.dot(tl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ns,a);nl.subVectors(e,r);let f=Ns.dot(nl),x=ks.dot(nl);if(x>=0&&f<=x)return t.copy(r);let v=f*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(ks,o);let g=h*x-f*u;if(g<=0&&u-h>=0&&f-x>=0)return Su.subVectors(r,s),o=(u-h)/(u-h+(f-x)),t.copy(s).addScaledVector(Su,o);let p=1/(g+v+d);return a=v*p,o=d*p,t.copy(i).addScaledVector(Ns,a).addScaledVector(ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},da={h:0,s:0,l:0};function al(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ae=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=Pp(e,1),t=qt(t,0,1),i=qt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=al(a,r,e+1/3),this.g=al(a,r,e),this.b=al(a,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=Ot){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let i=Rd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ke.fromWorkingColorSpace(Jt.copy(this),e),Math.round(qt(Jt.r*255,0,255))*65536+Math.round(qt(Jt.g*255,0,255))*256+Math.round(qt(Jt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Jt.copy(this),t);let i=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Ot){Ke.fromWorkingColorSpace(Jt.copy(this),e);let t=Jt.r,i=Jt.g,s=Jt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(da);let i=Go(Ii.h,da.h,t),s=Go(Ii.s,da.s,t),r=Go(Ii.l,da.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Ae;Ae.NAMES=Rd;var Wp=0,gi=class extends Bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=ki(),this.name="",this.blending=Ui,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=El,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bl&&(i.blendSrc=this.blendSrc),this.blendDst!==El&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Tt=class extends gi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new U,fa=new ae,yt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=oc,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oc&&(e.usage=this.usage),e}};var Wa=class extends yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xa=class extends yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var $e=class extends yt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Xp=0,_n=new vt,ol=new It,Fs=new U,un=new mi,Ar=new mi,Xt=new U,_t=class n extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ad(e)?Xa:Wa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,i){return _n.makeTranslation(e,t,i),this.applyMatrix4(_n),this}scale(e,t,i){return _n.makeScale(e,t,i),this.applyMatrix4(_n),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(un.min,Ar.min),un.expandByPoint(Xt),Xt.addVectors(un.max,Ar.max),un.expandByPoint(Xt)):(un.expandByPoint(Ar.min),un.expandByPoint(Ar.max))}un.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Xt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xt.fromBufferAttribute(o,c),l&&(Fs.fromBufferAttribute(e,c),Xt.add(Fs)),s=Math.max(s,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new U,l[P]=new U;let c=new U,h=new U,u=new U,d=new ae,f=new ae,x=new ae,v=new U,g=new U;function p(P,S,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),x.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),x.sub(d);let k=1/(f.x*x.y-x.x*f.y);isFinite(k)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(k),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(k),o[P].add(v),o[S].add(v),o[M].add(v),l[P].add(g),l[S].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,S=_.length;P<S;++P){let M=_[P],k=M.start,X=M.count;for(let C=k,H=k+X;C<H;C+=3)p(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let E=new U,y=new U,N=new U,R=new U;function L(P){N.fromBufferAttribute(s,P),R.copy(N);let S=o[P];E.copy(S),E.sub(N.multiplyScalar(N.dot(S))).normalize(),y.crossVectors(R,S);let k=y.dot(l[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,k)}for(let P=0,S=_.length;P<S;++P){let M=_[P],k=M.start,X=M.count;for(let C=k,H=k+X;C<H;C+=3)L(e.getX(C+0)),L(e.getX(C+1)),L(e.getX(C+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let x=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,x=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[x++]=c[f++]}return new yt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wu=new vt,is=new Va,pa=new zi,Tu=new U,ma=new U,ga=new U,xa=new U,ll=new U,va=new U,Au=new U,_a=new U,ne=class extends It{constructor(e=new _t,t=new Tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ll.fromBufferAttribute(u,e),a?va.addScaledVector(ll,h):va.addScaledVector(ll.sub(t),h))}t.add(va)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(pa.containsPoint(is.origin)===!1&&(is.intersectSphere(pa,Tu)===null||is.origin.distanceToSquared(Tu)>(e.far-e.near)**2))&&(wu.copy(r).invert(),is.copy(e.ray).applyMatrix4(wu),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){let g=d[x],p=a[g.materialIndex],_=Math.max(g.start,f.start),E=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,N=E;y<N;y+=3){let R=o.getX(y),L=o.getX(y+1),P=o.getX(y+2);s=ya(this,p,e,i,c,h,u,R,L,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=x,p=v;g<p;g+=3){let _=o.getX(g),E=o.getX(g+1),y=o.getX(g+2);s=ya(this,a,e,i,c,h,u,_,E,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){let g=d[x],p=a[g.materialIndex],_=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,N=E;y<N;y+=3){let R=y,L=y+1,P=y+2;s=ya(this,p,e,i,c,h,u,R,L,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=x,p=v;g<p;g+=3){let _=g,E=g+1,y=g+2;s=ya(this,a,e,i,c,h,u,_,E,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function qp(n,e,t,i,s,r,a,o){let l;if(e.side===zt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Fi,o),l===null)return null;_a.copy(o),_a.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(_a);return c<t.near||c>t.far?null:{distance:c,point:_a.clone(),object:n}}function ya(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ma),n.getVertexPosition(l,ga),n.getVertexPosition(c,xa);let h=qp(n,e,t,i,ma,ga,xa,Au);if(h){let u=new U;Di.getBarycoord(Au,ma,ga,xa,u),s&&(h.uv=Di.getInterpolatedAttribute(s,o,l,c,u,new ae)),r&&(h.uv1=Di.getInterpolatedAttribute(r,o,l,c,u,new ae)),a&&(h.normal=Di.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new U,materialIndex:0};Di.getNormal(ma,ga,xa,d.normal),h.face=d,h.barycoord=u}return h}var qe=class n extends _t{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function x(v,g,p,_,E,y,N,R,L,P,S){let M=y/L,k=N/P,X=y/2,C=N/2,H=R/2,G=L+1,F=P+1,T=0,A=0,W=new U;for(let Z=0;Z<F;Z++){let $=Z*k-C;for(let re=0;re<G;re++){let Me=re*M-X;W[v]=Me*_,W[g]=$*E,W[p]=H,c.push(W.x,W.y,W.z),W[v]=0,W[g]=0,W[p]=R>0?1:-1,h.push(W.x,W.y,W.z),u.push(re/L),u.push(1-Z/P),T+=1}}for(let Z=0;Z<P;Z++)for(let $=0;$<L;$++){let re=d+$+G*Z,Me=d+$+G*(Z+1),K=d+($+1)+G*(Z+1),ie=d+($+1)+G*Z;l.push(re,Me,ie),l.push(Me,K,ie),A+=6}o.addGroup(f,A,S),f+=A,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function tr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function tn(n){let e={};for(let t=0;t<n.length;t++){let i=tr(n[t]);for(let s in i)e[s]=i[s]}return e}function $p(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var Jn={clone:tr,merge:tn},Yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ot=class extends gi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yp,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},qa=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new U,Ru=new ae,Cu=new ae,Kt=class extends qa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lc*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Ru,Cu),t.subVectors(Cu,Ru)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bs=-90,Os=1,dc=class extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(Bs,Os,e,t);s.layers=this.layers,this.add(s);let r=new Kt(Bs,Os,e,t);r.layers=this.layers,this.add(r);let a=new Kt(Bs,Os,e,t);a.layers=this.layers,this.add(a);let o=new Kt(Bs,Os,e,t);o.layers=this.layers,this.add(o);let l=new Kt(Bs,Os,e,t);l.layers=this.layers,this.add(l);let c=new Kt(Bs,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},$a=class extends $t{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fc=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new $a(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qe(5,5,5),r=new ot({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:qn});r.uniforms.tEquirect.value=t;let a=new ne(s,r),o=t.minFilter;return t.minFilter===hs&&(t.minFilter=Wn),new dc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},cl=new U,Jp=new U,Kp=new Ve,hi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=cl.subVectors(i,t).cross(Jp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(cl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Kp.getNormalMatrix(e),s=this.coplanarPoint(cl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ss=new zi,Ma=new U,Vr=class{constructor(e=new hi,t=new hi,i=new hi,s=new hi,r=new hi,a=new hi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=di){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],x=s[9],v=s[10],g=s[11],p=s[12],_=s[13],E=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,g-f,y-p).normalize(),i[1].setComponents(l+r,d+c,g+f,y+p).normalize(),i[2].setComponents(l+a,d+h,g+x,y+_).normalize(),i[3].setComponents(l-a,d-h,g-x,y-_).normalize(),i[4].setComponents(l-o,d-u,g-v,y-E).normalize(),t===di)i[5].setComponents(l+o,d+u,g+v,y+E).normalize();else if(t===Oa)i[5].setComponents(o,u,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ma.x=s.normal.x>0?e.max.x:e.min.x,Ma.y=s.normal.y>0?e.max.y:e.min.y,Ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pd(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function jp(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){let x=u[d],v=u[f];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){let v=u[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var jt=class n extends _t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],x=[],v=[],g=[];for(let p=0;p<h;p++){let _=p*d-a;for(let E=0;E<c;E++){let y=E*u-r;x.push(y,-_,0),v.push(0,0,1),g.push(E/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let E=_+c*p,y=_+c*(p+1),N=_+1+c*(p+1),R=_+1+c*p;f.push(E,y,R),f.push(y,N,R)}this.setIndex(f),this.setAttribute("position",new $e(x,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,em=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,um=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Km=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,l0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,b0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,R0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,F0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,V0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,q0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,j0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ag=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,og=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_g=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Qp,alphahash_pars_fragment:em,alphamap_fragment:tm,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:sm,aomap_fragment:rm,aomap_pars_fragment:am,batching_pars_vertex:om,batching_vertex:lm,begin_vertex:cm,beginnormal_vertex:hm,bsdfs:um,iridescence_fragment:dm,bumpmap_pars_fragment:fm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:xm,color_fragment:vm,color_pars_fragment:_m,color_pars_vertex:ym,color_vertex:Mm,common:bm,cube_uv_reflection_fragment:Em,defaultnormal_vertex:Sm,displacementmap_pars_vertex:wm,displacementmap_vertex:Tm,emissivemap_fragment:Am,emissivemap_pars_fragment:Rm,colorspace_fragment:Cm,colorspace_pars_fragment:Pm,envmap_fragment:Im,envmap_common_pars_fragment:Lm,envmap_pars_fragment:Dm,envmap_pars_vertex:Um,envmap_physical_pars_fragment:Xm,envmap_vertex:Nm,fog_vertex:km,fog_pars_vertex:Fm,fog_fragment:Bm,fog_pars_fragment:Om,gradientmap_pars_fragment:zm,lightmap_pars_fragment:Hm,lights_lambert_fragment:Vm,lights_lambert_pars_fragment:Gm,lights_pars_begin:Wm,lights_toon_fragment:qm,lights_toon_pars_fragment:$m,lights_phong_fragment:Ym,lights_phong_pars_fragment:Zm,lights_physical_fragment:Jm,lights_physical_pars_fragment:Km,lights_fragment_begin:jm,lights_fragment_maps:Qm,lights_fragment_end:e0,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:n0,logdepthbuf_pars_vertex:i0,logdepthbuf_vertex:s0,map_fragment:r0,map_pars_fragment:a0,map_particle_fragment:o0,map_particle_pars_fragment:l0,metalnessmap_fragment:c0,metalnessmap_pars_fragment:h0,morphinstance_vertex:u0,morphcolor_vertex:d0,morphnormal_vertex:f0,morphtarget_pars_vertex:p0,morphtarget_vertex:m0,normal_fragment_begin:g0,normal_fragment_maps:x0,normal_pars_fragment:v0,normal_pars_vertex:_0,normal_vertex:y0,normalmap_pars_fragment:M0,clearcoat_normal_fragment_begin:b0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:w0,opaque_fragment:T0,packing:A0,premultiplied_alpha_fragment:R0,project_vertex:C0,dithering_fragment:P0,dithering_pars_fragment:I0,roughnessmap_fragment:L0,roughnessmap_pars_fragment:D0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:N0,shadowmap_vertex:k0,shadowmask_pars_fragment:F0,skinbase_vertex:B0,skinning_pars_vertex:O0,skinning_vertex:z0,skinnormal_vertex:H0,specularmap_fragment:V0,specularmap_pars_fragment:G0,tonemapping_fragment:W0,tonemapping_pars_fragment:X0,transmission_fragment:q0,transmission_pars_fragment:$0,uv_pars_fragment:Y0,uv_pars_vertex:Z0,uv_vertex:J0,worldpos_vertex:K0,background_vert:j0,background_frag:Q0,backgroundCube_vert:eg,backgroundCube_frag:tg,cube_vert:ng,cube_frag:ig,depth_vert:sg,depth_frag:rg,distanceRGBA_vert:ag,distanceRGBA_frag:og,equirect_vert:lg,equirect_frag:cg,linedashed_vert:hg,linedashed_frag:ug,meshbasic_vert:dg,meshbasic_frag:fg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:gg,meshmatcap_frag:xg,meshnormal_vert:vg,meshnormal_frag:_g,meshphong_vert:yg,meshphong_frag:Mg,meshphysical_vert:bg,meshphysical_frag:Eg,meshtoon_vert:Sg,meshtoon_frag:wg,points_vert:Tg,points_frag:Ag,shadow_vert:Rg,shadow_frag:Cg,sprite_vert:Pg,sprite_frag:Ig},he={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Hn={basic:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:tn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:tn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:tn([he.points,he.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:tn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:tn([he.common,he.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:tn([he.sprite,he.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:tn([he.common,he.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:tn([he.lights,he.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Hn.physical={uniforms:tn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var ba={r:0,b:0,g:0},rs=new $n,Lg=new vt;function Dg(n,e,t,i,s,r,a){let o=new Ae(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function x(_){let E=_.isScene===!0?_.background:null;return E&&E.isTexture&&(E=(_.backgroundBlurriness>0?t:e).get(E)),E}function v(_){let E=!1,y=x(_);y===null?p(o,l):y&&y.isColor&&(p(y,1),E=!0);let N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,E){let y=x(E);y&&(y.isCubeTexture||y.mapping===lo)?(h===void 0&&(h=new ne(new qe(1,1,1),new ot({name:"BackgroundCubeMaterial",uniforms:tr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),rs.copy(E.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(rs)),h.material.toneMapped=Ke.getTransfer(y.colorSpace)!==ht,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ne(new jt(2,2),new ot({name:"BackgroundMaterial",uniforms:tr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(y.colorSpace)!==ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,E){_.getRGB(ba,Cd(n)),i.buffers.color.setClear(ba.r,ba.g,ba.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(_,E=1){o.set(_),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:v,addToRenderList:g}}function Ug(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(M,k,X,C,H){let G=!1,F=u(C,X,k);r!==F&&(r=F,c(r.object)),G=f(M,C,X,H),G&&x(M,C,X,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(M,k,X,C),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,k,X){let C=X.wireframe===!0,H=i[M.id];H===void 0&&(H={},i[M.id]=H);let G=H[k.id];G===void 0&&(G={},H[k.id]=G);let F=G[C];return F===void 0&&(F=d(l()),G[C]=F),F}function d(M){let k=[],X=[],C=[];for(let H=0;H<t;H++)k[H]=0,X[H]=0,C[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:C,object:M,attributes:{},index:null}}function f(M,k,X,C){let H=r.attributes,G=k.attributes,F=0,T=X.getAttributes();for(let A in T)if(T[A].location>=0){let Z=H[A],$=G[A];if($===void 0&&(A==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),A==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),Z===void 0||Z.attribute!==$||$&&Z.data!==$.data)return!0;F++}return r.attributesNum!==F||r.index!==C}function x(M,k,X,C){let H={},G=k.attributes,F=0,T=X.getAttributes();for(let A in T)if(T[A].location>=0){let Z=G[A];Z===void 0&&(A==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),A==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));let $={};$.attribute=Z,Z&&Z.data&&($.data=Z.data),H[A]=$,F++}r.attributes=H,r.attributesNum=F,r.index=C}function v(){let M=r.newAttributes;for(let k=0,X=M.length;k<X;k++)M[k]=0}function g(M){p(M,0)}function p(M,k){let X=r.newAttributes,C=r.enabledAttributes,H=r.attributeDivisors;X[M]=1,C[M]===0&&(n.enableVertexAttribArray(M),C[M]=1),H[M]!==k&&(n.vertexAttribDivisor(M,k),H[M]=k)}function _(){let M=r.newAttributes,k=r.enabledAttributes;for(let X=0,C=k.length;X<C;X++)k[X]!==M[X]&&(n.disableVertexAttribArray(X),k[X]=0)}function E(M,k,X,C,H,G,F){F===!0?n.vertexAttribIPointer(M,k,X,H,G):n.vertexAttribPointer(M,k,X,C,H,G)}function y(M,k,X,C){v();let H=C.attributes,G=X.getAttributes(),F=k.defaultAttributeValues;for(let T in G){let A=G[T];if(A.location>=0){let W=H[T];if(W===void 0&&(T==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),T==="instanceColor"&&M.instanceColor&&(W=M.instanceColor)),W!==void 0){let Z=W.normalized,$=W.itemSize,re=e.get(W);if(re===void 0)continue;let Me=re.buffer,K=re.type,ie=re.bytesPerElement,xe=K===n.INT||K===n.UNSIGNED_INT||W.gpuType===th;if(W.isInterleavedBufferAttribute){let ue=W.data,Le=ue.stride,Oe=W.offset;if(ue.isInstancedInterleavedBuffer){for(let Ze=0;Ze<A.locationSize;Ze++)p(A.location+Ze,ue.meshPerAttribute);M.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ze=0;Ze<A.locationSize;Ze++)g(A.location+Ze);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let Ze=0;Ze<A.locationSize;Ze++)E(A.location+Ze,$/A.locationSize,K,Z,Le*ie,(Oe+$/A.locationSize*Ze)*ie,xe)}else{if(W.isInstancedBufferAttribute){for(let ue=0;ue<A.locationSize;ue++)p(A.location+ue,W.meshPerAttribute);M.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ue=0;ue<A.locationSize;ue++)g(A.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let ue=0;ue<A.locationSize;ue++)E(A.location+ue,$/A.locationSize,K,Z,$*ie,$/A.locationSize*ue*ie,xe)}}else if(F!==void 0){let Z=F[T];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(A.location,Z);break;case 3:n.vertexAttrib3fv(A.location,Z);break;case 4:n.vertexAttrib4fv(A.location,Z);break;default:n.vertexAttrib1fv(A.location,Z)}}}}_()}function N(){P();for(let M in i){let k=i[M];for(let X in k){let C=k[X];for(let H in C)h(C[H].object),delete C[H];delete k[X]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;let k=i[M.id];for(let X in k){let C=k[X];for(let H in C)h(C[H].object),delete C[H];delete k[X]}delete i[M.id]}function L(M){for(let k in i){let X=i[k];if(X[M.id]===void 0)continue;let C=X[M.id];for(let H in C)h(C[H].object),delete C[H];delete X[M.id]}}function P(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function Ng(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)a(c[x],h[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let x=0;for(let v=0;v<u;v++)x+=h[v]*d[v];t.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==In&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let P=L===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==pi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Xn&&!P)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=x>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:N,maxSamples:R}}function Fg(n){let e=this,t=null,i=0,s=!1,r=!1,a=new hi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let x=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):c();else{let _=r?0:i,E=_*4,y=p.clippingState||null;l.value=y,y=h(x,d,E,f);for(let N=0;N!==E;++N)y[N]=t[N];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,x){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,x!==!0||g===null){let p=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,y=f;E!==v;++E,y+=4)a.copy(u[E]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Bg(n){let e=new WeakMap;function t(a,o){return o===Il?a.mapping=Ks:o===Ll&&(a.mapping=js),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Il||o===Ll)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new fc(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var nr=class extends qa{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qs=4,Pu=[.125,.215,.35,.446,.526,.582],cs=20,hl=new nr,Iu=new Ae,ul=null,dl=0,fl=0,pl=!1,os=(1+Math.sqrt(5))/2,zs=1/os,Lu=[new U(-os,zs,0),new U(os,zs,0),new U(-zs,0,os),new U(zs,0,os),new U(0,os,-zs),new U(0,os,zs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],ir=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,dl,fl),this._renderer.xr.enabled=pl,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Nn,format:In,colorSpace:hr,depthBuffer:!1},s=Du(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(r)),this._blurMaterial=zg(r,e,t)}return s}_compileMaterial(e){let t=new ne(this._lodPlanes[0],e);this._renderer.compile(t,hl)}_sceneToCubeUV(e,t,i,s){let o=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Iu),h.toneMapping=Ni,h.autoClear=!1;let f=new Tt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),x=new ne(new qe,f),v=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(Iu),v=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let E=this._cubeSize;Ea(s,_*E,p>2?E:0,E,E),h.setRenderTarget(s),v&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ks||e.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ne(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ea(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,hl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lu[(s-r-1)%Lu.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ne(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*cs-1),v=r/x,g=isFinite(r)?1+Math.floor(h*v):cs;g>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cs}`);let p=[],_=0;for(let L=0;L<cs;++L){let P=L/v,S=Math.exp(-P*P/2);p.push(S),L===0?_+=S:L<g&&(_+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:E}=this;d.dTheta.value=x,d.mipInt.value=E-i;let y=this._sizeLods[s],N=3*y*(s>E-qs?s-E+qs:0),R=4*(this._cubeSize-y);Ea(t,N,R,3*y,2*y),l.setRenderTarget(t),l.render(u,hl)}};function Og(n){let e=[],t=[],i=[],s=n,r=n-qs+1+Pu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-qs?l=Pu[a-n+qs-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,v=3,g=2,p=1,_=new Float32Array(v*x*f),E=new Float32Array(g*x*f),y=new Float32Array(p*x*f);for(let R=0;R<f;R++){let L=R%3*2/3-1,P=R>2?0:-1,S=[L,P,0,L+2/3,P,0,L+2/3,P+1,0,L,P,0,L+2/3,P+1,0,L,P+1,0];_.set(S,v*x*R),E.set(d,g*x*R);let M=[R,R,R,R,R,R];y.set(M,p*x*R)}let N=new _t;N.setAttribute("position",new yt(_,v)),N.setAttribute("uv",new yt(E,g)),N.setAttribute("faceIndex",new yt(y,p)),e.push(N),s>qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Du(n,e,t){let i=new nn(n,e,t);return i.texture.mapping=lo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ea(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function zg(n,e,t){let i=new Float32Array(cs),s=new U(0,1,0);return new ot({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Uu(){return new ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Nu(){return new ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function lh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Il||l===Ll,h=l===Ks||l===js;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ir(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new ir(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Vg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ur("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Gg(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);for(let x in d.morphAttributes){let v=d.morphAttributes[x];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let x in d)e.update(d[x],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let x in f){let v=f[x];for(let g=0,p=v.length;g<p;g++)e.update(v[g],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,x=u.attributes.position,v=0;if(f!==null){let _=f.array;v=f.version;for(let E=0,y=_.length;E<y;E+=3){let N=_[E+0],R=_[E+1],L=_[E+2];d.push(N,R,R,L,L,N)}}else if(x!==void 0){let _=x.array;v=x.version;for(let E=0,y=_.length/3-1;E<y;E+=3){let N=E+0,R=E+1,L=E+2;d.push(N,R,R,L,L,N)}}else return;let g=new(Ad(d)?Xa:Wa)(d,1);g.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Wg(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,x){x!==0&&(n.drawElementsInstanced(i,f,r,d*a,x),t.update(f,i,x))}function h(d,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,x);let g=0;for(let p=0;p<x;p++)g+=f[p];t.update(g,i,1)}function u(d,f,x,v){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,x);let p=0;for(let _=0;_<x;_++)p+=f[_]*v[_];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Xg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function qg(n,e,t){let i=new WeakMap,s=new gt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let S=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],E=0;f===!0&&(E=1),x===!0&&(E=2),v===!0&&(E=3);let y=o.attributes.position.count*E,N=1;y>e.maxTextureSize&&(N=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let R=new Float32Array(y*N*4*u),L=new Ha(R,y,N,u);L.type=Xn,L.needsUpdate=!0;let P=E*4;for(let M=0;M<u;M++){let k=g[M],X=p[M],C=_[M],H=y*N*4*M;for(let G=0;G<k.count;G++){let F=G*P;f===!0&&(s.fromBufferAttribute(k,G),R[H+F+0]=s.x,R[H+F+1]=s.y,R[H+F+2]=s.z,R[H+F+3]=0),x===!0&&(s.fromBufferAttribute(X,G),R[H+F+4]=s.x,R[H+F+5]=s.y,R[H+F+6]=s.z,R[H+F+7]=0),v===!0&&(s.fromBufferAttribute(C,G),R[H+F+8]=s.x,R[H+F+9]=s.y,R[H+F+10]=s.z,R[H+F+11]=C.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new ae(y,N)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function $g(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ya=class extends $t{constructor(e,t,i,s,r,a,o,l,c,h=$s){if(h!==$s&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===$s&&(i=us),i===void 0&&h===er&&(i=Qs),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Id=new $t,ku=new Ya(1,1),Ld=new Ha,Dd=new uc,Ud=new $a,Fu=[],Bu=[],Ou=new Float32Array(16),zu=new Float32Array(9),Hu=new Float32Array(4);function ur(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Fu[s];if(r===void 0&&(r=new Float32Array(s),Fu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uo(n,e){let t=Bu[e];t===void 0&&(t=new Int32Array(e),Bu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Yg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Zg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function Jg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function Kg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function jg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Hu.set(i),n.uniformMatrix2fv(this.addr,!1,Hu),Vt(t,i)}}function Qg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;zu.set(i),n.uniformMatrix3fv(this.addr,!1,zu),Vt(t,i)}}function ex(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Ou.set(i),n.uniformMatrix4fv(this.addr,!1,Ou),Vt(t,i)}}function tx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function sx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function rx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ax(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function ox(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function lx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function cx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ku.compareFunction=Td,r=ku):r=Id,t.setTexture2D(e||r,s)}function hx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Dd,s)}function ux(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ud,s)}function dx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ld,s)}function fx(n){switch(n){case 5126:return Yg;case 35664:return Zg;case 35665:return Jg;case 35666:return Kg;case 35674:return jg;case 35675:return Qg;case 35676:return ex;case 5124:case 35670:return tx;case 35667:case 35671:return nx;case 35668:case 35672:return ix;case 35669:case 35673:return sx;case 5125:return rx;case 36294:return ax;case 36295:return ox;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return dx}}function px(n,e){n.uniform1fv(this.addr,e)}function mx(n,e){let t=ur(e,this.size,2);n.uniform2fv(this.addr,t)}function gx(n,e){let t=ur(e,this.size,3);n.uniform3fv(this.addr,t)}function xx(n,e){let t=ur(e,this.size,4);n.uniform4fv(this.addr,t)}function vx(n,e){let t=ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _x(n,e){let t=ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yx(n,e){let t=ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Mx(n,e){n.uniform1iv(this.addr,e)}function bx(n,e){n.uniform2iv(this.addr,e)}function Ex(n,e){n.uniform3iv(this.addr,e)}function Sx(n,e){n.uniform4iv(this.addr,e)}function wx(n,e){n.uniform1uiv(this.addr,e)}function Tx(n,e){n.uniform2uiv(this.addr,e)}function Ax(n,e){n.uniform3uiv(this.addr,e)}function Rx(n,e){n.uniform4uiv(this.addr,e)}function Cx(n,e,t){let i=this.cache,s=e.length,r=uo(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Id,r[a])}function Px(n,e,t){let i=this.cache,s=e.length,r=uo(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Dd,r[a])}function Ix(n,e,t){let i=this.cache,s=e.length,r=uo(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ud,r[a])}function Lx(n,e,t){let i=this.cache,s=e.length,r=uo(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ld,r[a])}function Dx(n){switch(n){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return xx;case 35674:return vx;case 35675:return _x;case 35676:return yx;case 5124:case 35670:return Mx;case 35667:case 35671:return bx;case 35668:case 35672:return Ex;case 35669:case 35673:return Sx;case 5125:return wx;case 36294:return Tx;case 36295:return Ax;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Lx}}var pc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fx(t.type)}},mc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dx(t.type)}},gc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},ml=/(\w+)(\])?(\[|\.)?/g;function Vu(n,e){n.seq.push(e),n.map[e.id]=e}function Ux(n,e,t){let i=n.name,s=i.length;for(ml.lastIndex=0;;){let r=ml.exec(i),a=ml.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vu(t,c===void 0?new pc(o,n,e):new mc(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new gc(o),Vu(t,u)),t=u}}}var Zs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ux(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Gu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Nx=37297,kx=0;function Fx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Wu=new Ve;function Bx(n){Ke._getMatrix(Wu,Ke.workingColorSpace,n);let e=`mat3( ${Wu.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case co:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Xu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Fx(n.getShaderSource(e),a)}else return s}function Ox(n,e){let t=Bx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zx(n,e){let t;switch(e){case Jc:t="Linear";break;case Kc:t="Reinhard";break;case jc:t="Cineon";break;case qr:t="ACESFilmic";break;case Qc:t="AgX";break;case eh:t="Neutral";break;case vp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Sa=new U;function Hx(){Ke.getLuminanceCoefficients(Sa);let n=Sa.x.toFixed(4),e=Sa.y.toFixed(4),t=Sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function Gx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Wx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Nr(n){return n!==""}function qu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $u(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(n){return n.replace(Xx,$x)}var qx=new Map;function $x(n,e){let t=Xe[e];if(t===void 0){let i=qx.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xc(t)}var Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(n){return n.replace(Yx,Zx)}function Zx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function Kx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ks:case js:e="ENVMAP_TYPE_CUBE";break;case lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function Qx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pd:e="ENVMAP_BLENDING_MULTIPLY";break;case gp:e="ENVMAP_BLENDING_MIX";break;case xp:e="ENVMAP_BLENDING_ADD";break}return e}function ev(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tv(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Jx(t),c=Kx(t),h=jx(t),u=Qx(t),d=ev(t),f=Vx(t),x=Gx(r),v=s.createProgram(),g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Nr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Nr).join(`
`),p.length>0&&(p+=`
`)):(g=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Ni?zx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Ox("linearToOutputTexel",t.outputColorSpace),Hx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),a=xc(a),a=qu(a,t),a=$u(a,t),o=xc(o),o=qu(o,t),o=$u(o,t),a=Yu(a),o=Yu(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=_+g+a,y=_+p+o,N=Gu(s,s.VERTEX_SHADER,E),R=Gu(s,s.FRAGMENT_SHADER,y);s.attachShader(v,N),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(k){if(n.debug.checkShaderErrors){let X=s.getProgramInfoLog(v).trim(),C=s.getShaderInfoLog(N).trim(),H=s.getShaderInfoLog(R).trim(),G=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,N,R);else{let T=Xu(s,N,"vertex"),A=Xu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+X+`
`+T+`
`+A)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(C===""||H==="")&&(F=!1);F&&(k.diagnostics={runnable:G,programLog:X,vertexShader:{log:C,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(N),s.deleteShader(R),P=new Zs(s,v),S=Wx(s,v)}let P;this.getUniforms=function(){return P===void 0&&L(this),P};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Nx)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=R,this}var nv=0,vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new _c(e),t.set(e,i)),i}},_c=class{constructor(e){this.id=nv++,this.code=e,this.usedTimes=0}};function iv(n,e,t,i,s,r,a){let o=new Ga,l=new vc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,k,X,C){let H=X.fog,G=C.geometry,F=S.isMeshStandardMaterial?X.environment:null,T=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),A=T&&T.mapping===lo?T.image.height:null,W=x[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let Z=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,$=Z!==void 0?Z.length:0,re=0;G.morphAttributes.position!==void 0&&(re=1),G.morphAttributes.normal!==void 0&&(re=2),G.morphAttributes.color!==void 0&&(re=3);let Me,K,ie,xe;if(W){let dt=Hn[W];Me=dt.vertexShader,K=dt.fragmentShader}else Me=S.vertexShader,K=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),xe=l.getFragmentShaderID(S);let ue=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),Oe=C.isInstancedMesh===!0,Ze=C.isBatchedMesh===!0,Ct=!!S.map,nt=!!S.matcap,Nt=!!T,V=!!S.aoMap,xn=!!S.lightMap,je=!!S.bumpMap,Qe=!!S.normalMap,Pe=!!S.displacementMap,Et=!!S.emissiveMap,Ce=!!S.metalnessMap,I=!!S.roughnessMap,b=S.anisotropy>0,q=S.clearcoat>0,ee=S.dispersion>0,se=S.iridescence>0,Q=S.sheen>0,we=S.transmission>0,fe=b&&!!S.anisotropyMap,ve=q&&!!S.clearcoatMap,it=q&&!!S.clearcoatNormalMap,oe=q&&!!S.clearcoatRoughnessMap,_e=se&&!!S.iridescenceMap,Ie=se&&!!S.iridescenceThicknessMap,Ne=Q&&!!S.sheenColorMap,ye=Q&&!!S.sheenRoughnessMap,et=!!S.specularMap,We=!!S.specularColorMap,Mt=!!S.specularIntensityMap,B=we&&!!S.transmissionMap,de=we&&!!S.thicknessMap,j=!!S.gradientMap,te=!!S.alphaMap,ge=S.alphaTest>0,pe=!!S.alphaHash,ze=!!S.extensions,Pt=Ni;S.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Pt=n.toneMapping);let Yt={shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:Me,fragmentShader:K,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ze,batchingColor:Ze&&C._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&C.instanceColor!==null,instancingMorph:Oe&&C.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:hr,alphaToCoverage:!!S.alphaToCoverage,map:Ct,matcap:nt,envMap:Nt,envMapMode:Nt&&T.mapping,envMapCubeUVHeight:A,aoMap:V,lightMap:xn,bumpMap:je,normalMap:Qe,displacementMap:d&&Pe,emissiveMap:Et,normalMapObjectSpace:Qe&&S.normalMapType===bp,normalMapTangentSpace:Qe&&S.normalMapType===wd,metalnessMap:Ce,roughnessMap:I,anisotropy:b,anisotropyMap:fe,clearcoat:q,clearcoatMap:ve,clearcoatNormalMap:it,clearcoatRoughnessMap:oe,dispersion:ee,iridescence:se,iridescenceMap:_e,iridescenceThicknessMap:Ie,sheen:Q,sheenColorMap:Ne,sheenRoughnessMap:ye,specularMap:et,specularColorMap:We,specularIntensityMap:Mt,transmission:we,transmissionMap:B,thicknessMap:de,gradientMap:j,opaque:S.transparent===!1&&S.blending===Ui&&S.alphaToCoverage===!1,alphaMap:te,alphaTest:ge,alphaHash:pe,combine:S.combine,mapUv:Ct&&v(S.map.channel),aoMapUv:V&&v(S.aoMap.channel),lightMapUv:xn&&v(S.lightMap.channel),bumpMapUv:je&&v(S.bumpMap.channel),normalMapUv:Qe&&v(S.normalMap.channel),displacementMapUv:Pe&&v(S.displacementMap.channel),emissiveMapUv:Et&&v(S.emissiveMap.channel),metalnessMapUv:Ce&&v(S.metalnessMap.channel),roughnessMapUv:I&&v(S.roughnessMap.channel),anisotropyMapUv:fe&&v(S.anisotropyMap.channel),clearcoatMapUv:ve&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(S.sheenRoughnessMap.channel),specularMapUv:et&&v(S.specularMap.channel),specularColorMapUv:We&&v(S.specularColorMap.channel),specularIntensityMapUv:Mt&&v(S.specularIntensityMap.channel),transmissionMapUv:B&&v(S.transmissionMap.channel),thicknessMapUv:de&&v(S.thicknessMap.channel),alphaMapUv:te&&v(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Qe||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!G.attributes.uv&&(Ct||te),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Le,skinning:C.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Ct&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===ht,decodeVideoTextureEmissive:Et&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xt,flipSided:S.side===zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ze&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&S.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Yt.vertexUv1s=c.has(1),Yt.vertexUv2s=c.has(2),Yt.vertexUv3s=c.has(3),c.clear(),Yt}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let k in S.defines)M.push(k),M.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(_(M,S),E(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){let M=x[S.type],k;if(M){let X=Hn[M];k=Jn.clone(X.uniforms)}else k=S.uniforms;return k}function N(S,M){let k;for(let X=0,C=h.length;X<C;X++){let H=h[X];if(H.cacheKey===M){k=H,++k.usedTimes;break}}return k===void 0&&(k=new tv(n,M,S,r),h.push(k)),k}function R(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function L(S){l.remove(S)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:N,releaseProgram:R,releaseShaderCache:L,programs:h,dispose:P}}function sv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function rv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ju(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ku(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,f,x,v,g){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:v,group:g},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function o(u,d,f,x,v,g){let p=a(u,d,f,x,v,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,x,v,g){let p=a(u,d,f,x,v,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||rv),i.length>1&&i.sort(d||Ju),s.length>1&&s.sort(d||Ju)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function av(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Ku,n.set(i,[a])):s>=r.length?(a=new Ku,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ov(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ae};break;case"SpotLight":t={position:new U,direction:new U,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function lv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var cv=0;function hv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function uv(n){let e=new ov,t=lv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new vt,a=new vt;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,x=0,v=0,g=0,p=0,_=0,E=0,y=0,N=0,R=0,L=0;c.sort(hv);for(let S=0,M=c.length;S<M;S++){let k=c[S],X=k.color,C=k.intensity,H=k.distance,G=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=X.r*C,u+=X.g*C,d+=X.b*C;else if(k.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(k.sh.coefficients[F],C);L++}else if(k.isDirectionalLight){let F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let T=k.shadow,A=t.get(k);A.shadowIntensity=T.intensity,A.shadowBias=T.bias,A.shadowNormalBias=T.normalBias,A.shadowRadius=T.radius,A.shadowMapSize=T.mapSize,i.directionalShadow[f]=A,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=k.shadow.matrix,_++}i.directional[f]=F,f++}else if(k.isSpotLight){let F=e.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(X).multiplyScalar(C),F.distance=H,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,i.spot[v]=F;let T=k.shadow;if(k.map&&(i.spotLightMap[N]=k.map,N++,T.updateMatrices(k),k.castShadow&&R++),i.spotLightMatrix[v]=T.matrix,k.castShadow){let A=t.get(k);A.shadowIntensity=T.intensity,A.shadowBias=T.bias,A.shadowNormalBias=T.normalBias,A.shadowRadius=T.radius,A.shadowMapSize=T.mapSize,i.spotShadow[v]=A,i.spotShadowMap[v]=G,y++}v++}else if(k.isRectAreaLight){let F=e.get(k);F.color.copy(X).multiplyScalar(C),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),i.rectArea[g]=F,g++}else if(k.isPointLight){let F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){let T=k.shadow,A=t.get(k);A.shadowIntensity=T.intensity,A.shadowBias=T.bias,A.shadowNormalBias=T.normalBias,A.shadowRadius=T.radius,A.shadowMapSize=T.mapSize,A.shadowCameraNear=T.camera.near,A.shadowCameraFar=T.camera.far,i.pointShadow[x]=A,i.pointShadowMap[x]=G,i.pointShadowMatrix[x]=k.shadow.matrix,E++}i.point[x]=F,x++}else if(k.isHemisphereLight){let F=e.get(k);F.skyColor.copy(k.color).multiplyScalar(C),F.groundColor.copy(k.groundColor).multiplyScalar(C),i.hemi[p]=F,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==f||P.pointLength!==x||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==_||P.numPointShadows!==E||P.numSpotShadows!==y||P.numSpotMaps!==N||P.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+N-R,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,P.directionalLength=f,P.pointLength=x,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=_,P.numPointShadows=E,P.numSpotShadows=y,P.numSpotMaps=N,P.numLightProbes=L,i.version=cv++)}function l(c,h){let u=0,d=0,f=0,x=0,v=0,g=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let E=c[p];if(E.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(E.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(E.isRectAreaLight){let y=i.rectArea[x];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(E.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),d++}else if(E.isHemisphereLight){let y=i.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function ju(n){let e=new uv(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function dv(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ju(n),e.set(s,[o])):r>=a.length?(o=new ju(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var yc=class extends gi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Mc=class extends gi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mv(n,e,t){let i=new Vr,s=new ae,r=new ae,a=new gt,o=new yc({depthPacking:Mp}),l=new Mc,c={},h=t.maxTextureSize,u={[Fi]:zt,[zt]:Fi,[xt]:xt},d=new ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:fv,fragmentShader:pv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new _t;x.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ne(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fd;let p=this.type;this.render=function(R,L,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let S=n.getRenderTarget(),M=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),X=n.state;X.setBlending(qn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let C=p!==ci&&this.type===ci,H=p===ci&&this.type!==ci;for(let G=0,F=R.length;G<F;G++){let T=R[G],A=T.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",T,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;s.copy(A.mapSize);let W=A.getFrameExtents();if(s.multiply(W),r.copy(A.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,A.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,A.mapSize.y=r.y)),A.map===null||C===!0||H===!0){let $=this.type!==ci?{minFilter:dn,magFilter:dn}:{};A.map!==null&&A.map.dispose(),A.map=new nn(s.x,s.y,$),A.map.texture.name=T.name+".shadowMap",A.camera.updateProjectionMatrix()}n.setRenderTarget(A.map),n.clear();let Z=A.getViewportCount();for(let $=0;$<Z;$++){let re=A.getViewport($);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),X.viewport(a),A.updateMatrices(T,$),i=A.getFrustum(),y(L,P,A.camera,T,this.type)}A.isPointLightShadow!==!0&&this.type===ci&&_(A,P),A.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(S,M,k)};function _(R,L){let P=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new nn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(L,null,P,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(L,null,P,f,v,null)}function E(R,L,P,S){let M=null,k=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)M=k;else if(M=P.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let X=M.uuid,C=L.uuid,H=c[X];H===void 0&&(H={},c[X]=H);let G=H[C];G===void 0&&(G=M.clone(),H[C]=G,L.addEventListener("dispose",N)),M=G}if(M.visible=L.visible,M.wireframe=L.wireframe,S===ci?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:u[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let X=n.properties.get(M);X.light=P}return M}function y(R,L,P,S,M){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===ci)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);let C=e.update(R),H=R.material;if(Array.isArray(H)){let G=C.groups;for(let F=0,T=G.length;F<T;F++){let A=G[F],W=H[A.materialIndex];if(W&&W.visible){let Z=E(R,W,S,M);R.onBeforeShadow(n,R,L,P,C,Z,A),n.renderBufferDirect(P,null,C,Z,R,A),R.onAfterShadow(n,R,L,P,C,Z,A)}}}else if(H.visible){let G=E(R,H,S,M);R.onBeforeShadow(n,R,L,P,C,G,null),n.renderBufferDirect(P,null,C,G,R,null),R.onAfterShadow(n,R,L,P,C,G,null)}}let X=R.children;for(let C=0,H=X.length;C<H;C++)y(X[C],L,P,S,M)}function N(R){R.target.removeEventListener("dispose",N);for(let P in c){let S=c[P],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var gv={[Sl]:wl,[Tl]:Cl,[Al]:Pl,[Js]:Rl,[wl]:Sl,[Cl]:Tl,[Pl]:Al,[Rl]:Js};function xv(n,e){function t(){let B=!1,de=new gt,j=null,te=new gt(0,0,0,0);return{setMask:function(ge){j!==ge&&!B&&(n.colorMask(ge,ge,ge,ge),j=ge)},setLocked:function(ge){B=ge},setClear:function(ge,pe,ze,Pt,Yt){Yt===!0&&(ge*=Pt,pe*=Pt,ze*=Pt),de.set(ge,pe,ze,Pt),te.equals(de)===!1&&(n.clearColor(ge,pe,ze,Pt),te.copy(de))},reset:function(){B=!1,j=null,te.set(-1,0,0,0)}}}function i(){let B=!1,de=!1,j=null,te=null,ge=null;return{setReversed:function(pe){if(de!==pe){let ze=e.get("EXT_clip_control");de?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);let Pt=ge;ge=null,this.setClear(Pt)}de=pe},getReversed:function(){return de},setTest:function(pe){pe?ue(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(pe){j!==pe&&!B&&(n.depthMask(pe),j=pe)},setFunc:function(pe){if(de&&(pe=gv[pe]),te!==pe){switch(pe){case Sl:n.depthFunc(n.NEVER);break;case wl:n.depthFunc(n.ALWAYS);break;case Tl:n.depthFunc(n.LESS);break;case Js:n.depthFunc(n.LEQUAL);break;case Al:n.depthFunc(n.EQUAL);break;case Rl:n.depthFunc(n.GEQUAL);break;case Cl:n.depthFunc(n.GREATER);break;case Pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=pe}},setLocked:function(pe){B=pe},setClear:function(pe){ge!==pe&&(de&&(pe=1-pe),n.clearDepth(pe),ge=pe)},reset:function(){B=!1,j=null,te=null,ge=null,de=!1}}}function s(){let B=!1,de=null,j=null,te=null,ge=null,pe=null,ze=null,Pt=null,Yt=null;return{setTest:function(dt){B||(dt?ue(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(dt){de!==dt&&!B&&(n.stencilMask(dt),de=dt)},setFunc:function(dt,Tn,ni){(j!==dt||te!==Tn||ge!==ni)&&(n.stencilFunc(dt,Tn,ni),j=dt,te=Tn,ge=ni)},setOp:function(dt,Tn,ni){(pe!==dt||ze!==Tn||Pt!==ni)&&(n.stencilOp(dt,Tn,ni),pe=dt,ze=Tn,Pt=ni)},setLocked:function(dt){B=dt},setClear:function(dt){Yt!==dt&&(n.clearStencil(dt),Yt=dt)},reset:function(){B=!1,de=null,j=null,te=null,ge=null,pe=null,ze=null,Pt=null,Yt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],x=null,v=!1,g=null,p=null,_=null,E=null,y=null,N=null,R=null,L=new Ae(0,0,0),P=0,S=!1,M=null,k=null,X=null,C=null,H=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,T=0,A=n.getParameter(n.VERSION);A.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(A)[1]),F=T>=1):A.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),F=T>=2);let W=null,Z={},$=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),Me=new gt().fromArray($),K=new gt().fromArray(re);function ie(B,de,j,te){let ge=new Uint8Array(4),pe=n.createTexture();n.bindTexture(B,pe),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<j;ze++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(de+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return pe}let xe={};xe[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),a.setFunc(Js),je(!1),Qe(nu),ue(n.CULL_FACE),V(qn);function ue(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function Le(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function Oe(B,de){return u[B]!==de?(n.bindFramebuffer(B,de),u[B]=de,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=de),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Ze(B,de){let j=f,te=!1;if(B){j=d.get(de),j===void 0&&(j=[],d.set(de,j));let ge=B.textures;if(j.length!==ge.length||j[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,ze=ge.length;pe<ze;pe++)j[pe]=n.COLOR_ATTACHMENT0+pe;j.length=ge.length,te=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,te=!0);te&&n.drawBuffers(j)}function Ct(B){return x!==B?(n.useProgram(B),x=B,!0):!1}let nt={[ls]:n.FUNC_ADD,[Qf]:n.FUNC_SUBTRACT,[ep]:n.FUNC_REVERSE_SUBTRACT};nt[tp]=n.MIN,nt[np]=n.MAX;let Nt={[ip]:n.ZERO,[sp]:n.ONE,[rp]:n.SRC_COLOR,[bl]:n.SRC_ALPHA,[up]:n.SRC_ALPHA_SATURATE,[cp]:n.DST_COLOR,[op]:n.DST_ALPHA,[ap]:n.ONE_MINUS_SRC_COLOR,[El]:n.ONE_MINUS_SRC_ALPHA,[hp]:n.ONE_MINUS_DST_COLOR,[lp]:n.ONE_MINUS_DST_ALPHA,[dp]:n.CONSTANT_COLOR,[fp]:n.ONE_MINUS_CONSTANT_COLOR,[pp]:n.CONSTANT_ALPHA,[mp]:n.ONE_MINUS_CONSTANT_ALPHA};function V(B,de,j,te,ge,pe,ze,Pt,Yt,dt){if(B===qn){v===!0&&(Le(n.BLEND),v=!1);return}if(v===!1&&(ue(n.BLEND),v=!0),B!==jf){if(B!==g||dt!==S){if((p!==ls||y!==ls)&&(n.blendEquation(n.FUNC_ADD),p=ls,y=ls),dt)switch(B){case Ui:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Je:n.blendFunc(n.ONE,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ui:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Je:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}_=null,E=null,N=null,R=null,L.set(0,0,0),P=0,g=B,S=dt}return}ge=ge||de,pe=pe||j,ze=ze||te,(de!==p||ge!==y)&&(n.blendEquationSeparate(nt[de],nt[ge]),p=de,y=ge),(j!==_||te!==E||pe!==N||ze!==R)&&(n.blendFuncSeparate(Nt[j],Nt[te],Nt[pe],Nt[ze]),_=j,E=te,N=pe,R=ze),(Pt.equals(L)===!1||Yt!==P)&&(n.blendColor(Pt.r,Pt.g,Pt.b,Yt),L.copy(Pt),P=Yt),g=B,S=!1}function xn(B,de){B.side===xt?Le(n.CULL_FACE):ue(n.CULL_FACE);let j=B.side===zt;de&&(j=!j),je(j),B.blending===Ui&&B.transparent===!1?V(qn):V(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let te=B.stencilWrite;o.setTest(te),te&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Et(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(B){M!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),M=B)}function Qe(B){B!==Jf?(ue(n.CULL_FACE),B!==k&&(B===nu?n.cullFace(n.BACK):B===Kf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),k=B}function Pe(B){B!==X&&(F&&n.lineWidth(B),X=B)}function Et(B,de,j){B?(ue(n.POLYGON_OFFSET_FILL),(C!==de||H!==j)&&(n.polygonOffset(de,j),C=de,H=j)):Le(n.POLYGON_OFFSET_FILL)}function Ce(B){B?ue(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function I(B){B===void 0&&(B=n.TEXTURE0+G-1),W!==B&&(n.activeTexture(B),W=B)}function b(B,de,j){j===void 0&&(W===null?j=n.TEXTURE0+G-1:j=W);let te=Z[j];te===void 0&&(te={type:void 0,texture:void 0},Z[j]=te),(te.type!==B||te.texture!==de)&&(W!==j&&(n.activeTexture(j),W=j),n.bindTexture(B,de||xe[B]),te.type=B,te.texture=de)}function q(){let B=Z[W];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(B){Me.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Me.copy(B))}function ye(B){K.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),K.copy(B))}function et(B,de){let j=c.get(de);j===void 0&&(j=new WeakMap,c.set(de,j));let te=j.get(B);te===void 0&&(te=n.getUniformBlockIndex(de,B.name),j.set(B,te))}function We(B,de){let te=c.get(de).get(B);l.get(de)!==te&&(n.uniformBlockBinding(de,te,B.__bindingPointIndex),l.set(de,te))}function Mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},W=null,Z={},u={},d=new WeakMap,f=[],x=null,v=!1,g=null,p=null,_=null,E=null,y=null,N=null,R=null,L=new Ae(0,0,0),P=0,S=!1,M=null,k=null,X=null,C=null,H=null,Me.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:Le,bindFramebuffer:Oe,drawBuffers:Ze,useProgram:Ct,setBlending:V,setMaterial:xn,setFlipSided:je,setCullFace:Qe,setLineWidth:Pe,setPolygonOffset:Et,setScissorTest:Ce,activeTexture:I,bindTexture:b,unbindTexture:q,compressedTexImage2D:ee,compressedTexImage3D:se,texImage2D:_e,texImage3D:Ie,updateUBOMapping:et,uniformBlockBinding:We,texStorage2D:it,texStorage3D:oe,texSubImage2D:Q,texSubImage3D:we,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Ne,viewport:ye,reset:Mt}}function Qu(n,e,t,i){let s=vv(i);switch(t){case _d:return n*e;case Md:return n*e;case bd:return n*e*2;case sh:return n*e/s.components*s.byteLength;case rh:return n*e/s.components*s.byteLength;case Ed:return n*e*2/s.components*s.byteLength;case ah:return n*e*2/s.components*s.byteLength;case yd:return n*e*3/s.components*s.byteLength;case In:return n*e*4/s.components*s.byteLength;case oh:return n*e*4/s.components*s.byteLength;case Da:case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Na:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nl:case Fl:return Math.max(n,16)*Math.max(e,8)/4;case Ul:case kl:return Math.max(n,8)*Math.max(e,8)/2;case Bl:case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fa:case tc:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Sd:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sc:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vv(n){switch(n){case pi:case gd:return{byteLength:1,components:1};case zr:case xd:case Nn:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case us:case th:case Xn:return{byteLength:4,components:1};case vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function _v(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,b){return f?new OffscreenCanvas(I,b):Hr("canvas")}function v(I,b,q){let ee=1,se=Ce(I);if((se.width>q||se.height>q)&&(ee=q/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Q=Math.floor(ee*se.width),we=Math.floor(ee*se.height);u===void 0&&(u=x(Q,we));let fe=b?x(Q,we):u;return fe.width=Q,fe.height=we,fe.getContext("2d").drawImage(I,0,0,Q,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+we+")."),fe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){n.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(I,b,q,ee,se=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Q=b;if(b===n.RED&&(q===n.FLOAT&&(Q=n.R32F),q===n.HALF_FLOAT&&(Q=n.R16F),q===n.UNSIGNED_BYTE&&(Q=n.R8)),b===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(Q=n.R8UI),q===n.UNSIGNED_SHORT&&(Q=n.R16UI),q===n.UNSIGNED_INT&&(Q=n.R32UI),q===n.BYTE&&(Q=n.R8I),q===n.SHORT&&(Q=n.R16I),q===n.INT&&(Q=n.R32I)),b===n.RG&&(q===n.FLOAT&&(Q=n.RG32F),q===n.HALF_FLOAT&&(Q=n.RG16F),q===n.UNSIGNED_BYTE&&(Q=n.RG8)),b===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(Q=n.RG8UI),q===n.UNSIGNED_SHORT&&(Q=n.RG16UI),q===n.UNSIGNED_INT&&(Q=n.RG32UI),q===n.BYTE&&(Q=n.RG8I),q===n.SHORT&&(Q=n.RG16I),q===n.INT&&(Q=n.RG32I)),b===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),q===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),q===n.UNSIGNED_INT&&(Q=n.RGB32UI),q===n.BYTE&&(Q=n.RGB8I),q===n.SHORT&&(Q=n.RGB16I),q===n.INT&&(Q=n.RGB32I)),b===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),q===n.UNSIGNED_INT&&(Q=n.RGBA32UI),q===n.BYTE&&(Q=n.RGBA8I),q===n.SHORT&&(Q=n.RGBA16I),q===n.INT&&(Q=n.RGBA32I)),b===n.RGB&&q===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),b===n.RGBA){let we=se?co:Ke.getTransfer(ee);q===n.FLOAT&&(Q=n.RGBA32F),q===n.HALF_FLOAT&&(Q=n.RGBA16F),q===n.UNSIGNED_BYTE&&(Q=we===ht?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(I,b){let q;return I?b===null||b===us||b===Qs?q=n.DEPTH24_STENCIL8:b===Xn?q=n.DEPTH32F_STENCIL8:b===zr&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===us||b===Qs?q=n.DEPTH_COMPONENT24:b===Xn?q=n.DEPTH_COMPONENT32F:b===zr&&(q=n.DEPTH_COMPONENT16),q}function N(I,b){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==dn&&I.minFilter!==Wn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function R(I){let b=I.target;b.removeEventListener("dispose",R),P(b),b.isVideoTexture&&h.delete(b)}function L(I){let b=I.target;b.removeEventListener("dispose",L),M(b)}function P(I){let b=i.get(I);if(b.__webglInit===void 0)return;let q=I.source,ee=d.get(q);if(ee){let se=ee[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&S(I),Object.keys(ee).length===0&&d.delete(q)}i.remove(I)}function S(I){let b=i.get(I);n.deleteTexture(b.__webglTexture);let q=I.source,ee=d.get(q);delete ee[b.__cacheKey],a.memory.textures--}function M(I){let b=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let se=0;se<b.__webglFramebuffer[ee].length;se++)n.deleteFramebuffer(b.__webglFramebuffer[ee][se]);else n.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)n.deleteFramebuffer(b.__webglFramebuffer[ee]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let q=I.textures;for(let ee=0,se=q.length;ee<se;ee++){let Q=i.get(q[ee]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(q[ee])}i.remove(I)}let k=0;function X(){k=0}function C(){let I=k;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),k+=1,I}function H(I){let b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function G(I,b){let q=i.get(I);if(I.isVideoTexture&&Pe(I),I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){let ee=I.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(q,I,b);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+b)}function F(I,b){let q=i.get(I);if(I.version>0&&q.__version!==I.version){K(q,I,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+b)}function T(I,b){let q=i.get(I);if(I.version>0&&q.__version!==I.version){K(q,I,b);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+b)}function A(I,b){let q=i.get(I);if(I.version>0&&q.__version!==I.version){ie(q,I,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+b)}let W={[Or]:n.REPEAT,[ui]:n.CLAMP_TO_EDGE,[Dl]:n.MIRRORED_REPEAT},Z={[dn]:n.NEAREST,[_p]:n.NEAREST_MIPMAP_NEAREST,[sa]:n.NEAREST_MIPMAP_LINEAR,[Wn]:n.LINEAR,[zo]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},$={[Ep]:n.NEVER,[Cp]:n.ALWAYS,[Sp]:n.LESS,[Td]:n.LEQUAL,[wp]:n.EQUAL,[Rp]:n.GEQUAL,[Tp]:n.GREATER,[Ap]:n.NOTEQUAL};function re(I,b){if(b.type===Xn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Wn||b.magFilter===zo||b.magFilter===sa||b.magFilter===hs||b.minFilter===Wn||b.minFilter===zo||b.minFilter===sa||b.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,W[b.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,W[b.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,W[b.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Z[b.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Z[b.minFilter]),b.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,$[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==sa&&b.minFilter!==hs||b.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Me(I,b){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",R));let ee=b.source,se=d.get(ee);se===void 0&&(se={},d.set(ee,se));let Q=H(b);if(Q!==I.__cacheKey){se[Q]===void 0&&(se[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,q=!0),se[Q].usedTimes++;let we=se[I.__cacheKey];we!==void 0&&(se[I.__cacheKey].usedTimes--,we.usedTimes===0&&S(b)),I.__cacheKey=Q,I.__webglTexture=se[Q].texture}return q}function K(I,b,q){let ee=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=n.TEXTURE_3D);let se=Me(I,b),Q=b.source;t.bindTexture(ee,I.__webglTexture,n.TEXTURE0+q);let we=i.get(Q);if(Q.version!==we.__version||se===!0){t.activeTexture(n.TEXTURE0+q);let fe=Ke.getPrimaries(Ke.workingColorSpace),ve=b.colorSpace===Vn?null:Ke.getPrimaries(b.colorSpace),it=b.colorSpace===Vn||fe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let oe=v(b.image,!1,s.maxTextureSize);oe=Et(b,oe);let _e=r.convert(b.format,b.colorSpace),Ie=r.convert(b.type),Ne=E(b.internalFormat,_e,Ie,b.colorSpace,b.isVideoTexture);re(ee,b);let ye,et=b.mipmaps,We=b.isVideoTexture!==!0,Mt=we.__version===void 0||se===!0,B=Q.dataReady,de=N(b,oe);if(b.isDepthTexture)Ne=y(b.format===er,b.type),Mt&&(We?t.texStorage2D(n.TEXTURE_2D,1,Ne,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ne,oe.width,oe.height,0,_e,Ie,null));else if(b.isDataTexture)if(et.length>0){We&&Mt&&t.texStorage2D(n.TEXTURE_2D,de,Ne,et[0].width,et[0].height);for(let j=0,te=et.length;j<te;j++)ye=et[j],We?B&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ye.width,ye.height,_e,Ie,ye.data):t.texImage2D(n.TEXTURE_2D,j,Ne,ye.width,ye.height,0,_e,Ie,ye.data);b.generateMipmaps=!1}else We?(Mt&&t.texStorage2D(n.TEXTURE_2D,de,Ne,oe.width,oe.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,_e,Ie,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,oe.width,oe.height,0,_e,Ie,oe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){We&&Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ne,et[0].width,et[0].height,oe.depth);for(let j=0,te=et.length;j<te;j++)if(ye=et[j],b.format!==In)if(_e!==null)if(We){if(B)if(b.layerUpdates.size>0){let ge=Qu(ye.width,ye.height,b.format,b.type);for(let pe of b.layerUpdates){let ze=ye.data.subarray(pe*ge/ye.data.BYTES_PER_ELEMENT,(pe+1)*ge/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,pe,ye.width,ye.height,1,_e,ze)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,oe.depth,_e,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Ne,ye.width,ye.height,oe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,oe.depth,_e,Ie,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Ne,ye.width,ye.height,oe.depth,0,_e,Ie,ye.data)}else{We&&Mt&&t.texStorage2D(n.TEXTURE_2D,de,Ne,et[0].width,et[0].height);for(let j=0,te=et.length;j<te;j++)ye=et[j],b.format!==In?_e!==null?We?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Ne,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?B&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ye.width,ye.height,_e,Ie,ye.data):t.texImage2D(n.TEXTURE_2D,j,Ne,ye.width,ye.height,0,_e,Ie,ye.data)}else if(b.isDataArrayTexture)if(We){if(Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ne,oe.width,oe.height,oe.depth),B)if(b.layerUpdates.size>0){let j=Qu(oe.width,oe.height,b.format,b.type);for(let te of b.layerUpdates){let ge=oe.data.subarray(te*j/oe.data.BYTES_PER_ELEMENT,(te+1)*j/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,oe.width,oe.height,1,_e,Ie,ge)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,_e,Ie,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,oe.width,oe.height,oe.depth,0,_e,Ie,oe.data);else if(b.isData3DTexture)We?(Mt&&t.texStorage3D(n.TEXTURE_3D,de,Ne,oe.width,oe.height,oe.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,_e,Ie,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,oe.width,oe.height,oe.depth,0,_e,Ie,oe.data);else if(b.isFramebufferTexture){if(Mt)if(We)t.texStorage2D(n.TEXTURE_2D,de,Ne,oe.width,oe.height);else{let j=oe.width,te=oe.height;for(let ge=0;ge<de;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ne,j,te,0,_e,Ie,null),j>>=1,te>>=1}}else if(et.length>0){if(We&&Mt){let j=Ce(et[0]);t.texStorage2D(n.TEXTURE_2D,de,Ne,j.width,j.height)}for(let j=0,te=et.length;j<te;j++)ye=et[j],We?B&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,_e,Ie,ye):t.texImage2D(n.TEXTURE_2D,j,Ne,_e,Ie,ye);b.generateMipmaps=!1}else if(We){if(Mt){let j=Ce(oe);t.texStorage2D(n.TEXTURE_2D,de,Ne,j.width,j.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ie,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ne,_e,Ie,oe);g(b)&&p(ee),we.__version=Q.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ie(I,b,q){if(b.image.length!==6)return;let ee=Me(I,b),se=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+q);let Q=i.get(se);if(se.version!==Q.__version||ee===!0){t.activeTexture(n.TEXTURE0+q);let we=Ke.getPrimaries(Ke.workingColorSpace),fe=b.colorSpace===Vn?null:Ke.getPrimaries(b.colorSpace),ve=b.colorSpace===Vn||we===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let it=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!it&&!oe?_e[te]=v(b.image[te],!0,s.maxCubemapSize):_e[te]=oe?b.image[te].image:b.image[te],_e[te]=Et(b,_e[te]);let Ie=_e[0],Ne=r.convert(b.format,b.colorSpace),ye=r.convert(b.type),et=E(b.internalFormat,Ne,ye,b.colorSpace),We=b.isVideoTexture!==!0,Mt=Q.__version===void 0||ee===!0,B=se.dataReady,de=N(b,Ie);re(n.TEXTURE_CUBE_MAP,b);let j;if(it){We&&Mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,et,Ie.width,Ie.height);for(let te=0;te<6;te++){j=_e[te].mipmaps;for(let ge=0;ge<j.length;ge++){let pe=j[ge];b.format!==In?Ne!==null?We?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,pe.width,pe.height,Ne,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,et,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,pe.width,pe.height,Ne,ye,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,et,pe.width,pe.height,0,Ne,ye,pe.data)}}}else{if(j=b.mipmaps,We&&Mt){j.length>0&&de++;let te=Ce(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,et,te.width,te.height)}for(let te=0;te<6;te++)if(oe){We?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,Ne,ye,_e[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,_e[te].width,_e[te].height,0,Ne,ye,_e[te].data);for(let ge=0;ge<j.length;ge++){let ze=j[ge].image[te].image;We?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,ze.width,ze.height,Ne,ye,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,et,ze.width,ze.height,0,Ne,ye,ze.data)}}else{We?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne,ye,_e[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,Ne,ye,_e[te]);for(let ge=0;ge<j.length;ge++){let pe=j[ge];We?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,Ne,ye,pe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,et,Ne,ye,pe.image[te])}}}g(b)&&p(n.TEXTURE_CUBE_MAP),Q.__version=se.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function xe(I,b,q,ee,se,Q){let we=r.convert(q.format,q.colorSpace),fe=r.convert(q.type),ve=E(q.internalFormat,we,fe,q.colorSpace),it=i.get(b),oe=i.get(q);if(oe.__renderTarget=b,!it.__hasExternalTextures){let _e=Math.max(1,b.width>>Q),Ie=Math.max(1,b.height>>Q);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,Q,ve,_e,Ie,b.depth,0,we,fe,null):t.texImage2D(se,Q,ve,_e,Ie,0,we,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Qe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,se,oe.__webglTexture,0,je(b)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,se,oe.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(I,b,q){if(n.bindRenderbuffer(n.RENDERBUFFER,I),b.depthBuffer){let ee=b.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,Q=y(b.stencilBuffer,se),we=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=je(b);Qe(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,Q,b.width,b.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,Q,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Q,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,I)}else{let ee=b.textures;for(let se=0;se<ee.length;se++){let Q=ee[se],we=r.convert(Q.format,Q.colorSpace),fe=r.convert(Q.type),ve=E(Q.internalFormat,we,fe,Q.colorSpace),it=je(b);q&&Qe(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,ve,b.width,b.height):Qe(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,ve,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ve,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(b.depthTexture);ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);let se=ee.__webglTexture,Q=je(b);if(b.depthTexture.format===$s)Qe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(b.depthTexture.format===er)Qe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Oe(I){let b=i.get(I),q=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){let ee=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){let se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=ee}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Le(b.__webglFramebuffer,I)}else if(q){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=n.createRenderbuffer(),ue(b.__webglDepthbuffer[ee],I,!1);else{let se=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ue(b.__webglDepthbuffer,I,!1);else{let ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(I,b,q){let ee=i.get(I);b!==void 0&&xe(ee.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Oe(I)}function Ct(I){let b=I.texture,q=i.get(I),ee=i.get(b);I.addEventListener("dispose",L);let se=I.textures,Q=I.isWebGLCubeRenderTarget===!0,we=se.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=b.version,a.memory.textures++),Q){q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[fe]=[];for(let ve=0;ve<b.mipmaps.length;ve++)q.__webglFramebuffer[fe][ve]=n.createFramebuffer()}else q.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)q.__webglFramebuffer[fe]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(we)for(let fe=0,ve=se.length;fe<ve;fe++){let it=i.get(se[fe]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&Qe(I)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){let ve=se[fe];q.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[fe]);let it=r.convert(ve.format,ve.colorSpace),oe=r.convert(ve.type),_e=E(ve.internalFormat,it,oe,ve.colorSpace,I.isXRRenderTarget===!0),Ie=je(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,_e,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,q.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),re(n.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)xe(q.__webglFramebuffer[fe][ve],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else xe(q.__webglFramebuffer[fe],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let fe=0,ve=se.length;fe<ve;fe++){let it=se[fe],oe=i.get(it);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),re(n.TEXTURE_2D,it),xe(q.__webglFramebuffer,I,it,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(it)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ee.__webglTexture),re(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)xe(q.__webglFramebuffer[ve],I,b,n.COLOR_ATTACHMENT0,fe,ve);else xe(q.__webglFramebuffer,I,b,n.COLOR_ATTACHMENT0,fe,0);g(b)&&p(fe),t.unbindTexture()}I.depthBuffer&&Oe(I)}function nt(I){let b=I.textures;for(let q=0,ee=b.length;q<ee;q++){let se=b[q];if(g(se)){let Q=_(I),we=i.get(se).__webglTexture;t.bindTexture(Q,we),p(Q),t.unbindTexture()}}}let Nt=[],V=[];function xn(I){if(I.samples>0){if(Qe(I)===!1){let b=I.textures,q=I.width,ee=I.height,se=n.COLOR_BUFFER_BIT,Q=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(I),fe=b.length>1;if(fe)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);let it=i.get(b[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,q,ee,0,0,q,ee,se,n.NEAREST),l===!0&&(Nt.length=0,V.length=0,Nt.push(n.COLOR_ATTACHMENT0+ve),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Nt.push(Q),V.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,V)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);let it=i.get(b[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,it,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let b=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function je(I){return Math.min(s.maxSamples,I.samples)}function Qe(I){let b=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pe(I){let b=a.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function Et(I,b){let q=I.colorSpace,ee=I.format,se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==hr&&q!==Vn&&(Ke.getTransfer(q)===ht?(ee!==In||se!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function Ce(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=X,this.setTexture2D=G,this.setTexture2DArray=F,this.setTexture3D=T,this.setTextureCube=A,this.rebindTextures=Ze,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Qe}function yv(n,e){function t(i,s=Vn){let r,a=Ke.getTransfer(s);if(i===pi)return n.UNSIGNED_BYTE;if(i===nh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ih)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gd)return n.BYTE;if(i===xd)return n.SHORT;if(i===zr)return n.UNSIGNED_SHORT;if(i===th)return n.INT;if(i===us)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===Nn)return n.HALF_FLOAT;if(i===_d)return n.ALPHA;if(i===yd)return n.RGB;if(i===In)return n.RGBA;if(i===Md)return n.LUMINANCE;if(i===bd)return n.LUMINANCE_ALPHA;if(i===$s)return n.DEPTH_COMPONENT;if(i===er)return n.DEPTH_STENCIL;if(i===sh)return n.RED;if(i===rh)return n.RED_INTEGER;if(i===Ed)return n.RG;if(i===ah)return n.RG_INTEGER;if(i===oh)return n.RGBA_INTEGER;if(i===Da||i===Ua||i===Na||i===ka)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ul||i===Nl||i===kl||i===Fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bl||i===Ol||i===zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bl||i===Ol)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===$l||i===Yl||i===Zl||i===Jl||i===Kl||i===jl||i===Ql||i===ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Hl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ql)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$l)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ql)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ec)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fa||i===tc||i===nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fa)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sd||i===ic||i===sc||i===rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var bc=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ke=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mv={type:"move"},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ke;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ev=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new $t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ot({vertexShader:bv,fragmentShader:Ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new jt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sc=class extends Bi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,x=null,v=new Ec,g=t.getContextAttributes(),p=null,_=null,E=[],y=[],N=new ae,R=null,L=new Kt;L.viewport=new gt;let P=new Kt;P.viewport=new gt;let S=[L,P],M=new bc,k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=E[K];return ie===void 0&&(ie=new kr,E[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=E[K];return ie===void 0&&(ie=new kr,E[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=E[K];return ie===void 0&&(ie=new kr,E[K]=ie),ie.getHandSpace()};function C(K){let ie=y.indexOf(K.inputSource);if(ie===-1)return;let xe=E[ie];xe!==void 0&&(xe.update(K.inputSource,K.frame,c||a),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",G);for(let K=0;K<E.length;K++){let ie=y[K];ie!==null&&(y[K]=null,E[K].disconnect(ie))}k=null,X=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",H),s.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0){let ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new nn(f.framebufferWidth,f.framebufferHeight,{format:In,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,xe=null,ue=null;g.depth&&(ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=g.stencil?er:$s,xe=g.stencil?Qs:us);let Le={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new nn(d.textureWidth,d.textureHeight,{format:In,type:pi,depthTexture:new Ya(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Me.setContext(s),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(K){for(let ie=0;ie<K.removed.length;ie++){let xe=K.removed[ie],ue=y.indexOf(xe);ue>=0&&(y[ue]=null,E[ue].disconnect(xe))}for(let ie=0;ie<K.added.length;ie++){let xe=K.added[ie],ue=y.indexOf(xe);if(ue===-1){for(let Oe=0;Oe<E.length;Oe++)if(Oe>=y.length){y.push(xe),ue=Oe;break}else if(y[Oe]===null){y[Oe]=xe,ue=Oe;break}if(ue===-1)break}let Le=E[ue];Le&&Le.connect(xe)}}let F=new U,T=new U;function A(K,ie,xe){F.setFromMatrixPosition(ie.matrixWorld),T.setFromMatrixPosition(xe.matrixWorld);let ue=F.distanceTo(T),Le=ie.projectionMatrix.elements,Oe=xe.projectionMatrix.elements,Ze=Le[14]/(Le[10]-1),Ct=Le[14]/(Le[10]+1),nt=(Le[9]+1)/Le[5],Nt=(Le[9]-1)/Le[5],V=(Le[8]-1)/Le[0],xn=(Oe[8]+1)/Oe[0],je=Ze*V,Qe=Ze*xn,Pe=ue/(-V+xn),Et=Pe*-V;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Et),K.translateZ(Pe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Le[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let Ce=Ze+Pe,I=Ct+Pe,b=je-Et,q=Qe+(ue-Et),ee=nt*Ct/I*Ce,se=Nt*Ct/I*Ce;K.projectionMatrix.makePerspective(b,q,ee,se,Ce,I),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function W(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ie=K.near,xe=K.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(xe=v.depthFar)),M.near=P.near=L.near=ie,M.far=P.far=L.far=xe,(k!==M.near||X!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),k=M.near,X=M.far),L.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,M.layers.mask=L.layers.mask|P.layers.mask;let ue=K.parent,Le=M.cameras;W(M,ue);for(let Oe=0;Oe<Le.length;Oe++)W(Le[Oe],ue);Le.length===2?A(M,L,P):M.projectionMatrix.copy(L.projectionMatrix),Z(K,M,ue)};function Z(K,ie,xe){xe===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=lc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let $=null;function re(K,ie){if(h=ie.getViewerPose(c||a),x=ie,h!==null){let xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ue=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let Oe=0;Oe<xe.length;Oe++){let Ze=xe[Oe],Ct=null;if(f!==null)Ct=f.getViewport(Ze);else{let Nt=u.getViewSubImage(d,Ze);Ct=Nt.viewport,Oe===0&&(e.setRenderTargetTextures(_,Nt.colorTexture,d.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(_))}let nt=S[Oe];nt===void 0&&(nt=new Kt,nt.layers.enable(Oe),nt.viewport=new gt,S[Oe]=nt),nt.matrix.fromArray(Ze.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Ze.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Oe===0&&(M.matrix.copy(nt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(nt)}let Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){let Oe=u.getDepthInformation(xe[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,s.renderState)}}for(let xe=0;xe<E.length;xe++){let ue=y[xe],Le=E[xe];ue!==null&&Le!==void 0&&Le.update(ue,ie,c||a)}$&&$(K,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),x=null}let Me=new Pd;Me.setAnimationLoop(re),this.setAnimationLoop=function(K){$=K},this.dispose=function(){}}},as=new $n,Sv=new vt;function wv(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Cd(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,_,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===zt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===zt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=e.get(p),E=_.envMap,y=_.envMapRotation;E&&(g.envMap.value=E,as.copy(y),as.x*=-1,as.y*=-1,as.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),g.envMapRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(as)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=E*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Tv(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let y=E.program;i.uniformBlockBinding(_,y)}function c(_,E){let y=s[_.id];y===void 0&&(x(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",g));let N=E.program;i.updateUBOMapping(_,N);let R=e.render.frame;r[_.id]!==R&&(d(_),r[_.id]=R)}function h(_){let E=u();_.__bindingPointIndex=E;let y=n.createBuffer(),N=_.__size,R=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,N,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let E=s[_.id],y=_.uniforms,N=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let R=0,L=y.length;R<L;R++){let P=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,M=P.length;S<M;S++){let k=P[S];if(f(k,R,S,N)===!0){let X=k.__offset,C=Array.isArray(k.value)?k.value:[k.value],H=0;for(let G=0;G<C.length;G++){let F=C[G],T=v(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,X+H,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,H),H+=T.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,E,y,N){let R=_.value,L=E+"_"+y;if(N[L]===void 0)return typeof R=="number"||typeof R=="boolean"?N[L]=R:N[L]=R.clone(),!0;{let P=N[L];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return N[L]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function x(_){let E=_.uniforms,y=0,N=16;for(let L=0,P=E.length;L<P;L++){let S=Array.isArray(E[L])?E[L]:[E[L]];for(let M=0,k=S.length;M<k;M++){let X=S[M],C=Array.isArray(X.value)?X.value:[X.value];for(let H=0,G=C.length;H<G;H++){let F=C[H],T=v(F),A=y%N,W=A%T.boundary,Z=A+W;y+=W,Z!==0&&N-Z<T.storage&&(y+=N-Z),X.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=T.storage}}}let R=y%N;return R>0&&(y+=N-R),_.__size=y,_.__cache={},this}function v(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),E}function g(_){let E=_.target;E.removeEventListener("dispose",g);let y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Za=class{constructor(e={}){let{canvas:t=Ip(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let x=new Uint32Array(4),v=new Int32Array(4),g=null,p=null,_=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=Ni,this.toneMappingExposure=1;let y=this,N=!1,R=0,L=0,P=null,S=-1,M=null,k=new gt,X=new gt,C=null,H=new Ae(0),G=0,F=t.width,T=t.height,A=1,W=null,Z=null,$=new gt(0,0,F,T),re=new gt(0,0,F,T),Me=!1,K=new Vr,ie=!1,xe=!1,ue=new vt,Le=new vt,Oe=new U,Ze=new gt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function Nt(){return P===null?A:1}let V=i;function xn(w,O){return t.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),V===null){let O="webgl2";if(V=xn(O,w),V===null)throw xn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let je,Qe,Pe,Et,Ce,I,b,q,ee,se,Q,we,fe,ve,it,oe,_e,Ie,Ne,ye,et,We,Mt,B;function de(){je=new Vg(V),je.init(),We=new yv(V,je),Qe=new kg(V,je,e,We),Pe=new xv(V,je),Qe.reverseDepthBuffer&&d&&Pe.buffers.depth.setReversed(!0),Et=new Xg(V),Ce=new sv,I=new _v(V,je,Pe,Ce,Qe,We,Et),b=new Bg(y),q=new Hg(y),ee=new jp(V),Mt=new Ug(V,ee),se=new Gg(V,ee,Et,Mt),Q=new $g(V,se,ee,Et),Ne=new qg(V,Qe,I),oe=new Fg(Ce),we=new iv(y,b,q,je,Qe,Mt,oe),fe=new wv(y,Ce),ve=new av,it=new dv(je),Ie=new Dg(y,b,q,Pe,Q,f,l),_e=new mv(y,Q,Qe),B=new Tv(V,Et,Qe,Pe),ye=new Ng(V,je,Et),et=new Wg(V,je,Et),Et.programs=we.programs,y.capabilities=Qe,y.extensions=je,y.properties=Ce,y.renderLists=ve,y.shadowMap=_e,y.state=Pe,y.info=Et}de();let j=new Sc(y,V);this.xr=j,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let w=je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(w){w!==void 0&&(A=w,this.setSize(F,T,!1))},this.getSize=function(w){return w.set(F,T)},this.setSize=function(w,O,Y=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,T=O,t.width=Math.floor(w*A),t.height=Math.floor(O*A),Y===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(F*A,T*A).floor()},this.setDrawingBufferSize=function(w,O,Y){F=w,T=O,A=Y,t.width=Math.floor(w*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(k)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,O,Y,J){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,O,Y,J),Pe.viewport(k.copy($).multiplyScalar(A).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,O,Y,J){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,O,Y,J),Pe.scissor(X.copy(re).multiplyScalar(A).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(w){Pe.setScissorTest(Me=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(w=!0,O=!0,Y=!0){let J=0;if(w){let z=!1;if(P!==null){let le=P.texture.format;z=le===oh||le===ah||le===rh}if(z){let le=P.texture.type,me=le===pi||le===us||le===zr||le===Qs||le===nh||le===ih,be=Ie.getClearColor(),Ee=Ie.getClearAlpha(),Fe=be.r,He=be.g,Se=be.b;me?(x[0]=Fe,x[1]=He,x[2]=Se,x[3]=Ee,V.clearBufferuiv(V.COLOR,0,x)):(v[0]=Fe,v[1]=He,v[2]=Se,v[3]=Ee,V.clearBufferiv(V.COLOR,0,v))}else J|=V.COLOR_BUFFER_BIT}O&&(J|=V.DEPTH_BUFFER_BIT),Y&&(J|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ve.dispose(),it.dispose(),Ce.dispose(),b.dispose(),q.dispose(),Q.dispose(),Mt.dispose(),B.dispose(),we.dispose(),j.dispose(),j.removeEventListener("sessionstart",Yh),j.removeEventListener("sessionend",Zh),es.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let w=Et.autoReset,O=_e.enabled,Y=_e.autoUpdate,J=_e.needsUpdate,z=_e.type;de(),Et.autoReset=w,_e.enabled=O,_e.autoUpdate=Y,_e.needsUpdate=J,_e.type=z}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ze(w){let O=w.target;O.removeEventListener("dispose",ze),Pt(O)}function Pt(w){Yt(w),Ce.remove(w)}function Yt(w){let O=Ce.get(w).programs;O!==void 0&&(O.forEach(function(Y){we.releaseProgram(Y)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,Y,J,z,le){O===null&&(O=Ct);let me=z.isMesh&&z.matrixWorld.determinant()<0,be=$f(w,O,Y,J,z);Pe.setMaterial(J,me);let Ee=Y.index,Fe=1;if(J.wireframe===!0){if(Ee=se.getWireframeAttribute(Y),Ee===void 0)return;Fe=2}let He=Y.drawRange,Se=Y.attributes.position,rt=He.start*Fe,bt=(He.start+He.count)*Fe;le!==null&&(rt=Math.max(rt,le.start*Fe),bt=Math.min(bt,(le.start+le.count)*Fe)),Ee!==null?(rt=Math.max(rt,0),bt=Math.min(bt,Ee.count)):Se!=null&&(rt=Math.max(rt,0),bt=Math.min(bt,Se.count));let St=bt-rt;if(St<0||St===1/0)return;Mt.setup(z,J,be,Y,Ee);let sn,lt=ye;if(Ee!==null&&(sn=ee.get(Ee),lt=et,lt.setIndex(sn)),z.isMesh)J.wireframe===!0?(Pe.setLineWidth(J.wireframeLinewidth*Nt()),lt.setMode(V.LINES)):lt.setMode(V.TRIANGLES);else if(z.isLine){let Te=J.linewidth;Te===void 0&&(Te=1),Pe.setLineWidth(Te*Nt()),z.isLineSegments?lt.setMode(V.LINES):z.isLineLoop?lt.setMode(V.LINE_LOOP):lt.setMode(V.LINE_STRIP)}else z.isPoints?lt.setMode(V.POINTS):z.isSprite&&lt.setMode(V.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)lt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Te=z._multiDrawStarts,ii=z._multiDrawCounts,ct=z._multiDrawCount,An=Ee?ee.get(Ee).bytesPerElement:1,Ts=Ce.get(J).currentProgram.getUniforms();for(let cn=0;cn<ct;cn++)Ts.setValue(V,"_gl_DrawID",cn),lt.render(Te[cn]/An,ii[cn])}else if(z.isInstancedMesh)lt.renderInstances(rt,St,z.count);else if(Y.isInstancedBufferGeometry){let Te=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ii=Math.min(Y.instanceCount,Te);lt.renderInstances(rt,St,ii)}else lt.render(rt,St)};function dt(w,O,Y){w.transparent===!0&&w.side===xt&&w.forceSinglePass===!1?(w.side=zt,w.needsUpdate=!0,ia(w,O,Y),w.side=Fi,w.needsUpdate=!0,ia(w,O,Y),w.side=xt):ia(w,O,Y)}this.compile=function(w,O,Y=null){Y===null&&(Y=w),p=it.get(Y),p.init(O),E.push(p),Y.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==Y&&w.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let J=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let le=z.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){let be=le[me];dt(be,Y,z),J.add(be)}else dt(le,Y,z),J.add(le)}),E.pop(),p=null,J},this.compileAsync=function(w,O,Y=null){let J=this.compile(w,O,Y);return new Promise(z=>{function le(){if(J.forEach(function(me){Ce.get(me).currentProgram.isReady()&&J.delete(me)}),J.size===0){z(w);return}setTimeout(le,10)}je.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Tn=null;function ni(w){Tn&&Tn(w)}function Yh(){es.stop()}function Zh(){es.start()}let es=new Pd;es.setAnimationLoop(ni),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(w){Tn=w,j.setAnimationLoop(w),w===null?es.stop():es.start()},j.addEventListener("sessionstart",Yh),j.addEventListener("sessionend",Zh),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(O),O=j.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,O,P),p=it.get(w,E.length),p.init(O),E.push(p),Le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(Le),xe=this.localClippingEnabled,ie=oe.init(this.clippingPlanes,xe),g=ve.get(w,_.length),g.init(),_.push(g),j.enabled===!0&&j.isPresenting===!0){let le=y.xr.getDepthSensingMesh();le!==null&&Oo(le,O,-1/0,y.sortObjects)}Oo(w,O,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(W,Z),nt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,nt&&Ie.addToRenderList(g,w),this.info.render.frame++,ie===!0&&oe.beginShadows();let Y=p.state.shadowsArray;_e.render(Y,w,O),ie===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=g.opaque,z=g.transmissive;if(p.setupLights(),O.isArrayCamera){let le=O.cameras;if(z.length>0)for(let me=0,be=le.length;me<be;me++){let Ee=le[me];Kh(J,z,w,Ee)}nt&&Ie.render(w);for(let me=0,be=le.length;me<be;me++){let Ee=le[me];Jh(g,w,Ee,Ee.viewport)}}else z.length>0&&Kh(J,z,w,O),nt&&Ie.render(w),Jh(g,w,O);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(y,w,O),Mt.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],ie===!0&&oe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Oo(w,O,Y,J){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){J&&Ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Le);let me=Q.update(w),be=w.material;be.visible&&g.push(w,me,be,Y,Ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){let me=Q.update(w),be=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ze.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ze.copy(me.boundingSphere.center)),Ze.applyMatrix4(w.matrixWorld).applyMatrix4(Le)),Array.isArray(be)){let Ee=me.groups;for(let Fe=0,He=Ee.length;Fe<He;Fe++){let Se=Ee[Fe],rt=be[Se.materialIndex];rt&&rt.visible&&g.push(w,me,rt,Y,Ze.z,Se)}}else be.visible&&g.push(w,me,be,Y,Ze.z,null)}}let le=w.children;for(let me=0,be=le.length;me<be;me++)Oo(le[me],O,Y,J)}function Jh(w,O,Y,J){let z=w.opaque,le=w.transmissive,me=w.transparent;p.setupLightsView(Y),ie===!0&&oe.setGlobalState(y.clippingPlanes,Y),J&&Pe.viewport(k.copy(J)),z.length>0&&na(z,O,Y),le.length>0&&na(le,O,Y),me.length>0&&na(me,O,Y),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Kh(w,O,Y,J){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new nn(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Nn:pi,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let le=p.state.transmissionRenderTarget[J.id],me=J.viewport||k;le.setSize(me.z,me.w);let be=y.getRenderTarget();y.setRenderTarget(le),y.getClearColor(H),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),nt&&Ie.render(Y);let Ee=y.toneMapping;y.toneMapping=Ni;let Fe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),ie===!0&&oe.setGlobalState(y.clippingPlanes,J),na(w,Y,J),I.updateMultisampleRenderTarget(le),I.updateRenderTargetMipmap(le),je.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Se=0,rt=O.length;Se<rt;Se++){let bt=O[Se],St=bt.object,sn=bt.geometry,lt=bt.material,Te=bt.group;if(lt.side===xt&&St.layers.test(J.layers)){let ii=lt.side;lt.side=zt,lt.needsUpdate=!0,jh(St,Y,J,sn,lt,Te),lt.side=ii,lt.needsUpdate=!0,He=!0}}He===!0&&(I.updateMultisampleRenderTarget(le),I.updateRenderTargetMipmap(le))}y.setRenderTarget(be),y.setClearColor(H,G),Fe!==void 0&&(J.viewport=Fe),y.toneMapping=Ee}function na(w,O,Y){let J=O.isScene===!0?O.overrideMaterial:null;for(let z=0,le=w.length;z<le;z++){let me=w[z],be=me.object,Ee=me.geometry,Fe=J===null?me.material:J,He=me.group;be.layers.test(Y.layers)&&jh(be,O,Y,Ee,Fe,He)}}function jh(w,O,Y,J,z,le){w.onBeforeRender(y,O,Y,J,z,le),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(y,O,Y,J,w,le),z.transparent===!0&&z.side===xt&&z.forceSinglePass===!1?(z.side=zt,z.needsUpdate=!0,y.renderBufferDirect(Y,O,J,z,w,le),z.side=Fi,z.needsUpdate=!0,y.renderBufferDirect(Y,O,J,z,w,le),z.side=xt):y.renderBufferDirect(Y,O,J,z,w,le),w.onAfterRender(y,O,Y,J,z,le)}function ia(w,O,Y){O.isScene!==!0&&(O=Ct);let J=Ce.get(w),z=p.state.lights,le=p.state.shadowsArray,me=z.state.version,be=we.getParameters(w,z.state,le,O,Y),Ee=we.getProgramCacheKey(be),Fe=J.programs;J.environment=w.isMeshStandardMaterial?O.environment:null,J.fog=O.fog,J.envMap=(w.isMeshStandardMaterial?q:b).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",ze),Fe=new Map,J.programs=Fe);let He=Fe.get(Ee);if(He!==void 0){if(J.currentProgram===He&&J.lightsStateVersion===me)return eu(w,be),He}else be.uniforms=we.getUniforms(w),w.onBeforeCompile(be,y),He=we.acquireProgram(be,Ee),Fe.set(Ee,He),J.uniforms=be.uniforms;let Se=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=oe.uniform),eu(w,be),J.needsLights=Zf(w),J.lightsStateVersion=me,J.needsLights&&(Se.ambientLightColor.value=z.state.ambient,Se.lightProbe.value=z.state.probe,Se.directionalLights.value=z.state.directional,Se.directionalLightShadows.value=z.state.directionalShadow,Se.spotLights.value=z.state.spot,Se.spotLightShadows.value=z.state.spotShadow,Se.rectAreaLights.value=z.state.rectArea,Se.ltc_1.value=z.state.rectAreaLTC1,Se.ltc_2.value=z.state.rectAreaLTC2,Se.pointLights.value=z.state.point,Se.pointLightShadows.value=z.state.pointShadow,Se.hemisphereLights.value=z.state.hemi,Se.directionalShadowMap.value=z.state.directionalShadowMap,Se.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Se.spotShadowMap.value=z.state.spotShadowMap,Se.spotLightMatrix.value=z.state.spotLightMatrix,Se.spotLightMap.value=z.state.spotLightMap,Se.pointShadowMap.value=z.state.pointShadowMap,Se.pointShadowMatrix.value=z.state.pointShadowMatrix),J.currentProgram=He,J.uniformsList=null,He}function Qh(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Zs.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function eu(w,O){let Y=Ce.get(w);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function $f(w,O,Y,J,z){O.isScene!==!0&&(O=Ct),I.resetTextureUnits();let le=O.fog,me=J.isMeshStandardMaterial?O.environment:null,be=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:hr,Ee=(J.isMeshStandardMaterial?q:b).get(J.envMap||me),Fe=J.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,He=!!Y.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Se=!!Y.morphAttributes.position,rt=!!Y.morphAttributes.normal,bt=!!Y.morphAttributes.color,St=Ni;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(St=y.toneMapping);let sn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,lt=sn!==void 0?sn.length:0,Te=Ce.get(J),ii=p.state.lights;if(ie===!0&&(xe===!0||w!==M)){let vn=w===M&&J.id===S;oe.setState(J,w,vn)}let ct=!1;J.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ii.state.version||Te.outputColorSpace!==be||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==Ee||J.fog===!0&&Te.fog!==le||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==oe.numPlanes||Te.numIntersection!==oe.numIntersection)||Te.vertexAlphas!==Fe||Te.vertexTangents!==He||Te.morphTargets!==Se||Te.morphNormals!==rt||Te.morphColors!==bt||Te.toneMapping!==St||Te.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,Te.__version=J.version);let An=Te.currentProgram;ct===!0&&(An=ia(J,O,z));let Ts=!1,cn=!1,br=!1,wt=An.getUniforms(),zn=Te.uniforms;if(Pe.useProgram(An.program)&&(Ts=!0,cn=!0,br=!0),J.id!==S&&(S=J.id,cn=!0),Ts||M!==w){Pe.buffers.depth.getReversed()?(ue.copy(w.projectionMatrix),Dp(ue),Up(ue),wt.setValue(V,"projectionMatrix",ue)):wt.setValue(V,"projectionMatrix",w.projectionMatrix),wt.setValue(V,"viewMatrix",w.matrixWorldInverse);let wi=wt.map.cameraPosition;wi!==void 0&&wi.setValue(V,Oe.setFromMatrixPosition(w.matrixWorld)),Qe.logarithmicDepthBuffer&&wt.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&wt.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,cn=!0,br=!0)}if(z.isSkinnedMesh){wt.setOptional(V,z,"bindMatrix"),wt.setOptional(V,z,"bindMatrixInverse");let vn=z.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),wt.setValue(V,"boneTexture",vn.boneTexture,I))}z.isBatchedMesh&&(wt.setOptional(V,z,"batchingTexture"),wt.setValue(V,"batchingTexture",z._matricesTexture,I),wt.setOptional(V,z,"batchingIdTexture"),wt.setValue(V,"batchingIdTexture",z._indirectTexture,I),wt.setOptional(V,z,"batchingColorTexture"),z._colorsTexture!==null&&wt.setValue(V,"batchingColorTexture",z._colorsTexture,I));let Er=Y.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&Ne.update(z,Y,An),(cn||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,wt.setValue(V,"receiveShadow",z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(zn.envMap.value=Ee,zn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&O.environment!==null&&(zn.envMapIntensity.value=O.environmentIntensity),cn&&(wt.setValue(V,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&Yf(zn,br),le&&J.fog===!0&&fe.refreshFogUniforms(zn,le),fe.refreshMaterialUniforms(zn,J,A,T,p.state.transmissionRenderTarget[w.id]),Zs.upload(V,Qh(Te),zn,I)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Zs.upload(V,Qh(Te),zn,I),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&wt.setValue(V,"center",z.center),wt.setValue(V,"modelViewMatrix",z.modelViewMatrix),wt.setValue(V,"normalMatrix",z.normalMatrix),wt.setValue(V,"modelMatrix",z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let vn=J.uniformsGroups;for(let wi=0,Ti=vn.length;wi<Ti;wi++){let tu=vn[wi];B.update(tu,An),B.bind(tu,An)}}return An}function Yf(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Zf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,O,Y){Ce.get(w.texture).__webglTexture=O,Ce.get(w.depthTexture).__webglTexture=Y;let J=Ce.get(w);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Y===void 0,J.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let Y=Ce.get(w);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,Y=0){P=w,R=O,L=Y;let J=!0,z=null,le=!1,me=!1;if(w){let Ee=Ce.get(w);if(Ee.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(V.FRAMEBUFFER,null),J=!1;else if(Ee.__webglFramebuffer===void 0)I.setupRenderTarget(w);else if(Ee.__hasExternalTextures)I.rebindTextures(w,Ce.get(w.texture).__webglTexture,Ce.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Se=w.depthTexture;if(Ee.__boundDepthTexture!==Se){if(Se!==null&&Ce.has(Se)&&(w.width!==Se.image.width||w.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(w)}}let Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(me=!0);let He=Ce.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[O])?z=He[O][Y]:z=He[O],le=!0):w.samples>0&&I.useMultisampledRTT(w)===!1?z=Ce.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?z=He[Y]:z=He,k.copy(w.viewport),X.copy(w.scissor),C=w.scissorTest}else k.copy($).multiplyScalar(A).floor(),X.copy(re).multiplyScalar(A).floor(),C=Me;if(Pe.bindFramebuffer(V.FRAMEBUFFER,z)&&J&&Pe.drawBuffers(w,z),Pe.viewport(k),Pe.scissor(X),Pe.setScissorTest(C),le){let Ee=Ce.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,Y)}else if(me){let Ee=Ce.get(w.texture),Fe=O||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ee.__webglTexture,Y||0,Fe)}S=-1},this.readRenderTargetPixels=function(w,O,Y,J,z,le,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){Pe.bindFramebuffer(V.FRAMEBUFFER,be);try{let Ee=w.texture,Fe=Ee.format,He=Ee.type;if(!Qe.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-J&&Y>=0&&Y<=w.height-z&&V.readPixels(O,Y,J,z,We.convert(Fe),We.convert(He),le)}finally{let Ee=P!==null?Ce.get(P).__webglFramebuffer:null;Pe.bindFramebuffer(V.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(w,O,Y,J,z,le,me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){let Ee=w.texture,Fe=Ee.format,He=Ee.type;if(!Qe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-J&&Y>=0&&Y<=w.height-z){Pe.bindFramebuffer(V.FRAMEBUFFER,be);let Se=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Se),V.bufferData(V.PIXEL_PACK_BUFFER,le.byteLength,V.STREAM_READ),V.readPixels(O,Y,J,z,We.convert(Fe),We.convert(He),0);let rt=P!==null?Ce.get(P).__webglFramebuffer:null;Pe.bindFramebuffer(V.FRAMEBUFFER,rt);let bt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Lp(V,bt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Se),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,le),V.deleteBuffer(Se),V.deleteSync(bt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,Y=0){w.isTexture!==!0&&(Ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let J=Math.pow(2,-Y),z=Math.floor(w.image.width*J),le=Math.floor(w.image.height*J),me=O!==null?O.x:0,be=O!==null?O.y:0;I.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,Y,0,0,me,be,z,le),Pe.unbindTexture()},this.copyTextureToTexture=function(w,O,Y=null,J=null,z=0){w.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,w=arguments[1],O=arguments[2],z=arguments[3]||0,Y=null);let le,me,be,Ee,Fe,He,Se,rt,bt,St=w.isCompressedTexture?w.mipmaps[z]:w.image;Y!==null?(le=Y.max.x-Y.min.x,me=Y.max.y-Y.min.y,be=Y.isBox3?Y.max.z-Y.min.z:1,Ee=Y.min.x,Fe=Y.min.y,He=Y.isBox3?Y.min.z:0):(le=St.width,me=St.height,be=St.depth||1,Ee=0,Fe=0,He=0),J!==null?(Se=J.x,rt=J.y,bt=J.z):(Se=0,rt=0,bt=0);let sn=We.convert(O.format),lt=We.convert(O.type),Te;O.isData3DTexture?(I.setTexture3D(O,0),Te=V.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(I.setTexture2DArray(O,0),Te=V.TEXTURE_2D_ARRAY):(I.setTexture2D(O,0),Te=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,O.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,O.unpackAlignment);let ii=V.getParameter(V.UNPACK_ROW_LENGTH),ct=V.getParameter(V.UNPACK_IMAGE_HEIGHT),An=V.getParameter(V.UNPACK_SKIP_PIXELS),Ts=V.getParameter(V.UNPACK_SKIP_ROWS),cn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,St.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,St.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ee),V.pixelStorei(V.UNPACK_SKIP_ROWS,Fe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,He);let br=w.isDataArrayTexture||w.isData3DTexture,wt=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let zn=Ce.get(w),Er=Ce.get(O),vn=Ce.get(zn.__renderTarget),wi=Ce.get(Er.__renderTarget);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,vn.__webglFramebuffer),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Ti=0;Ti<be;Ti++)br&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ce.get(w).__webglTexture,z,He+Ti),w.isDepthTexture?(wt&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ce.get(O).__webglTexture,z,bt+Ti),V.blitFramebuffer(Ee,Fe,le,me,Se,rt,le,me,V.DEPTH_BUFFER_BIT,V.NEAREST)):wt?V.copyTexSubImage3D(Te,z,Se,rt,bt+Ti,Ee,Fe,le,me):V.copyTexSubImage2D(Te,z,Se,rt,bt+Ti,Ee,Fe,le,me);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else wt?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(Te,z,Se,rt,bt,le,me,be,sn,lt,St.data):O.isCompressedArrayTexture?V.compressedTexSubImage3D(Te,z,Se,rt,bt,le,me,be,sn,St.data):V.texSubImage3D(Te,z,Se,rt,bt,le,me,be,sn,lt,St):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,z,Se,rt,le,me,sn,lt,St.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,z,Se,rt,St.width,St.height,sn,St.data):V.texSubImage2D(V.TEXTURE_2D,z,Se,rt,le,me,sn,lt,St);V.pixelStorei(V.UNPACK_ROW_LENGTH,ii),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ct),V.pixelStorei(V.UNPACK_SKIP_PIXELS,An),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ts),V.pixelStorei(V.UNPACK_SKIP_IMAGES,cn),z===0&&O.generateMipmaps&&V.generateMipmap(Te),Pe.unbindTexture()},this.copyTextureToTexture3D=function(w,O,Y=null,J=null,z=0){return w.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,J=arguments[1]||null,w=arguments[2],O=arguments[3],z=arguments[4]||0),Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,Y,J,z)},this.initRenderTarget=function(w){Ce.get(w).__webglFramebuffer===void 0&&I.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?I.setTextureCube(w,0):w.isData3DTexture?I.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?I.setTexture2DArray(w,0):I.setTexture2D(w,0),Pe.unbindTexture()},this.resetState=function(){R=0,L=0,P=null,Pe.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}},Hi=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var sr=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},wc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oc,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},en=new U,Ja=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Lt=class extends gi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hs,Rr=new U,Vs=new U,Gs=new U,Ws=new ae,Cr=new ae,Nd=new vt,wa=new U,Pr=new U,Ta=new U,ed=new ae,gl=new ae,td=new ae,kt=class extends It{constructor(e=new Lt){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new _t;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new wc(t,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new Ja(i,3,0,!1)),Hs.setAttribute("uv",new Ja(i,2,3,!1))}this.geometry=Hs,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),Nd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Gs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Aa(wa.set(-.5,-.5,0),Gs,a,Vs,s,r),Aa(Pr.set(.5,-.5,0),Gs,a,Vs,s,r),Aa(Ta.set(.5,.5,0),Gs,a,Vs,s,r),ed.set(0,0),gl.set(1,0),td.set(1,1);let o=e.ray.intersectTriangle(wa,Pr,Ta,!1,Rr);if(o===null&&(Aa(Pr.set(-.5,.5,0),Gs,a,Vs,s,r),gl.set(0,1),o=e.ray.intersectTriangle(wa,Ta,Pr,!1,Rr),o===null))return;let l=e.ray.origin.distanceTo(Rr);l<e.near||l>e.far||t.push({distance:l,point:Rr.clone(),uv:Di.getInterpolation(Rr,wa,Pr,Ta,ed,gl,td,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Aa(n,e,t,i,s,r){Ws.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Cr.x=r*Ws.x-s*Ws.y,Cr.y=s*Ws.x+r*Ws.y):Cr.copy(Ws),n.copy(e),n.x+=Cr.x,n.y+=Cr.y,n.applyMatrix4(Nd)}var Gr=class extends $t{constructor(e=null,t=1,i=1,s,r,a,o,l,c=dn,h=dn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ka=class extends yt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xs=new vt,nd=new vt,Ra=[],id=new mi,Av=new vt,Ir=new ne,Lr=new zi,rr=class extends ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ka(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Av)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xs),id.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(id)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xs),Lr.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(i),e.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),nd.multiplyMatrices(i,Xs),Ir.matrixWorld=nd,Ir.raycast(e,Ra);for(let a=0,o=Ra.length;a<o;a++){let l=Ra[a];l.instanceId=r,l.object=this,t.push(l)}Ra.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ka(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Gr(new Float32Array(s*this.count),s,this.count,sh,Xn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Tc=class extends gi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sd=new vt,Ac=new Va,Ca=new zi,Pa=new U,Yn=class extends It{constructor(e=new _t,t=new Tc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,e.ray.intersectsSphere(Ca)===!1)return;sd.copy(s).invert(),Ac.copy(e.ray).applyMatrix4(sd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=d,v=f;x<v;x++){let g=c.getX(x);Pa.fromBufferAttribute(u,g),rd(Pa,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let x=d,v=f;x<v;x++)Pa.fromBufferAttribute(u,x),rd(Pa,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function rd(n,e,t,i,s,r,a){let o=Ac.distanceSqToPoint(n);if(o<t){let l=new U;Ac.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var xi=class extends $t{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ae:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new U,s=[],r=[],a=[],o=new U,l=new vt;for(let f=0;f<=e;f++){let x=f/e;s[f]=this.getTangentAt(x,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(qt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wr=class extends yn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Rc=class extends Wr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ch(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Ia=new U,xl=new ch,vl=new ch,_l=new ch,Cc=class extends yn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new U){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ia.subVectors(s[0],s[1]).add(s[0]),c=Ia);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ia.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),x<1e-4&&(x=v),g<1e-4&&(g=v),xl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,x,v,g),vl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,x,v,g),_l.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,x,v,g)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),vl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),_l.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(xl.calc(l),vl.calc(l),_l.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ad(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Rv(n,e){let t=1-n;return t*t*e}function Cv(n,e){return 2*(1-n)*n*e}function Pv(n,e){return n*n*e}function Fr(n,e,t,i){return Rv(n,e)+Cv(n,t)+Pv(n,i)}function Iv(n,e){let t=1-n;return t*t*t*e}function Lv(n,e){let t=1-n;return 3*t*t*n*e}function Dv(n,e){return 3*(1-n)*n*n*e}function Uv(n,e){return n*n*n*e}function Br(n,e,t,i,s){return Iv(n,e)+Lv(n,t)+Dv(n,i)+Uv(n,s)}var ja=class extends yn{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Br(e,s.x,r.x,a.x,o.x),Br(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pc=class extends yn{constructor(e=new U,t=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Br(e,s.x,r.x,a.x,o.x),Br(e,s.y,r.y,a.y,o.y),Br(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qa=class extends yn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ic=class extends yn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends yn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Fr(e,s.x,r.x,a.x),Fr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lc=class extends yn{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Fr(e,s.x,r.x,a.x),Fr(e,s.y,r.y,a.y),Fr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(ad(o,l.x,c.x,h.x,u.x),ad(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},od=Object.freeze({__proto__:null,ArcCurve:Rc,CatmullRomCurve3:Cc,CubicBezierCurve:ja,CubicBezierCurve3:Pc,EllipseCurve:Wr,LineCurve:Qa,LineCurve3:Ic,QuadraticBezierCurve:eo,QuadraticBezierCurve3:Lc,SplineCurve:to}),Dc=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new od[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new od[s.type]().fromJSON(s))}return this}},Uc=class extends Dc{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Qa(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new eo(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new ja(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new to(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new Wr(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Nc=class n extends _t{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=qt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new U,d=new ae,f=new U,x=new U,v=new U,g=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(x)}for(let _=0;_<=t;_++){let E=i+_*h*s,y=Math.sin(E),N=Math.cos(E);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*y,u.y=e[R].y,u.z=e[R].x*N,a.push(u.x,u.y,u.z),d.x=_/t,d.y=R/(e.length-1),o.push(d.x,d.y);let L=l[3*R+0]*y,P=l[3*R+1],S=l[3*R+0]*N;c.push(L,P,S)}}for(let _=0;_<t;_++)for(let E=0;E<e.length-1;E++){let y=E+_*e.length,N=y,R=y+e.length,L=y+e.length+1,P=y+1;r.push(N,R,P),r.push(L,P,R)}this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("uv",new $e(o,2)),this.setAttribute("normal",new $e(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ds=class n extends Nc{constructor(e=1,t=1,i=4,s=8){let r=new Uc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},ar=class n extends _t{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new U,h=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ge=class n extends _t{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],x=0,v=[],g=i/2,p=0;_(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function _(){let y=new U,N=new U,R=0,L=(t-e)/i;for(let P=0;P<=r;P++){let S=[],M=P/r,k=M*(t-e)+e;for(let X=0;X<=s;X++){let C=X/s,H=C*l+o,G=Math.sin(H),F=Math.cos(H);N.x=k*G,N.y=-M*i+g,N.z=k*F,u.push(N.x,N.y,N.z),y.set(G,L,F).normalize(),d.push(y.x,y.y,y.z),f.push(C,1-M),S.push(x++)}v.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let M=v[S][P],k=v[S+1][P],X=v[S+1][P+1],C=v[S][P+1];(e>0||S!==0)&&(h.push(M,k,C),R+=3),(t>0||S!==r-1)&&(h.push(k,X,C),R+=3)}c.addGroup(p,R,0),p+=R}function E(y){let N=x,R=new ae,L=new U,P=0,S=y===!0?e:t,M=y===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),x++;let k=x;for(let X=0;X<=s;X++){let H=X/s*l+o,G=Math.cos(H),F=Math.sin(H);L.x=S*F,L.y=g*M,L.z=S*G,u.push(L.x,L.y,L.z),d.push(0,M,0),R.x=G*.5+.5,R.y=F*.5*M+.5,f.push(R.x,R.y),x++}for(let X=0;X<s;X++){let C=N+X,H=k+X;y===!0?h.push(H,H+1,C):h.push(H+1,H,C),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gt=class n extends Ge{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},or=class n extends _t{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let E=new U,y=new U,N=new U;for(let R=0;R<t.length;R+=3)f(t[R+0],E),f(t[R+1],y),f(t[R+2],N),l(E,y,N,_)}function l(_,E,y,N){let R=N+1,L=[];for(let P=0;P<=R;P++){L[P]=[];let S=_.clone().lerp(y,P/R),M=E.clone().lerp(y,P/R),k=R-P;for(let X=0;X<=k;X++)X===0&&P===R?L[P][X]=S:L[P][X]=S.clone().lerp(M,X/k)}for(let P=0;P<R;P++)for(let S=0;S<2*(R-P)-1;S++){let M=Math.floor(S/2);S%2===0?(d(L[P][M+1]),d(L[P+1][M]),d(L[P][M])):(d(L[P][M+1]),d(L[P+1][M+1]),d(L[P+1][M]))}}function c(_){let E=new U;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(_),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function h(){let _=new U;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let y=g(_)/2/Math.PI+.5,N=p(_)/Math.PI+.5;a.push(y,1-N)}x(),u()}function u(){for(let _=0;_<a.length;_+=6){let E=a[_+0],y=a[_+2],N=a[_+4],R=Math.max(E,y,N),L=Math.min(E,y,N);R>.9&&L<.1&&(E<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),N<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,E){let y=_*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function x(){let _=new U,E=new U,y=new U,N=new U,R=new ae,L=new ae,P=new ae;for(let S=0,M=0;S<r.length;S+=9,M+=6){_.set(r[S+0],r[S+1],r[S+2]),E.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),R.set(a[M+0],a[M+1]),L.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),N.copy(_).add(E).add(y).divideScalar(3);let k=g(N);v(R,M+0,_,k),v(L,M+2,E,k),v(P,M+4,y,k)}}function v(_,E,y,N){N<0&&_.x===1&&(a[E]=_.x-1),y.x===0&&y.z===0&&(a[E]=N/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Ln=class n extends or{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Vi=class n extends or{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},fs=class n extends or{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Mn=class n extends _t{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new U,x=new ae;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){let p=r+g/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,h.push(x.x,x.y)}u+=d}for(let v=0;v<s;v++){let g=v*(i+1);for(let p=0;p<i;p++){let _=p+g,E=_,y=_+i+1,N=_+i+2,R=_+1;o.push(E,y,R),o.push(y,N,R)}}this.setIndex(o),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ft=class n extends _t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new U,d=new U,f=[],x=[],v=[],g=[];for(let p=0;p<=i;p++){let _=[],E=p/i,y=0;p===0&&a===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let N=0;N<=t;N++){let R=N/t;u.x=-e*Math.cos(s+R*r)*Math.sin(a+E*o),u.y=e*Math.cos(a+E*o),u.z=e*Math.sin(s+R*r)*Math.sin(a+E*o),x.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(R+y,1-E),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let E=h[p][_+1],y=h[p][_],N=h[p+1][_],R=h[p+1][_+1];(p!==0||a>0)&&f.push(E,y,R),(p!==i-1||l<Math.PI)&&f.push(y,N,R)}this.setIndex(f),this.setAttribute("position",new $e(x,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},no=class n extends or{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Dn=class n extends _t{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new U,u=new U,d=new U;for(let f=0;f<=i;f++)for(let x=0;x<=s;x++){let v=x/s*r,g=f/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(x/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let x=1;x<=s;x++){let v=(s+1)*f+x-1,g=(s+1)*(f-1)+x-1,p=(s+1)*(f-1)+x,_=(s+1)*f+x;a.push(v,g,_),a.push(g,p,_)}this.setIndex(a),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var io=class extends ot{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Re=class extends gi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wd,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function La(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Nv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var lr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kc=class extends lr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case au:r=e,o=2*t-i;break;case ou:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case au:a=e,l=2*i-t;break;case ou:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(i-t)/(s-t),v=x*x,g=v*x,p=-d*g+2*d*v-d*x,_=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*x+1,E=(-1-f)*g+(1.5+f)*v+.5*x,y=f*g-f*v;for(let N=0;N!==o;++N)r[N]=p*a[h+N]+_*a[c+N]+E*a[l+N]+y*a[u+N];return r}},Fc=class extends lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Bc=class extends lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Un=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=La(t,this.TimeBufferType),this.values=La(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:La(e.times,Array),values:La(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ba:t=this.InterpolantFactoryMethodDiscrete;break;case ac:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ba;case this.InterpolantFactoryMethodLinear:return ac;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Nv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ho,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let x=0;x!==i;++x){let v=t[u+x];if(v!==t[d+x]||v!==t[f+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=ac;var ps=class extends Un{constructor(e,t,i){super(e,t,i)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Ba;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends Un{};Oc.prototype.ValueTypeName="color";var zc=class extends Un{};zc.prototype.ValueTypeName="number";var Hc=class extends lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Oi.slerpFlat(r,0,a,c-o,a,c,l);return r}},so=class extends Un{InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}};so.prototype.ValueTypeName="quaternion";so.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends Un{constructor(e,t,i){super(e,t,i)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Ba;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends Un{};Vc.prototype.ValueTypeName="vector";var ld={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Gc=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],x=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},kv=new Gc,Xr=class{constructor(e){this.manager=e!==void 0?e:kv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Xr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wc=class extends Xr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ld.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Hr("img");function l(){h(),ld.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var ro=class extends Xr{constructor(e){super(e)}load(e,t,i,s){let r=new $t,a=new Wc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},cr=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Gi=class extends cr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},yl=new vt,cd=new U,hd=new U,ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(cd),hd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hd),t.updateMatrixWorld(),yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ud=new vt,Dr=new U,Ml=new U,Xc=class extends ao{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Dr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Dr),Ml.copy(i.position),Ml.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ml),i.updateMatrixWorld(),s.makeTranslation(-Dr.x,-Dr.y,-Dr.z),ud.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud)}},Zn=class extends cr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},qc=class extends ao{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wi=class extends cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new qc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Xi=class extends cr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var oo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=dd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function dd(){return performance.now()}var hh="\\[\\]\\.:\\/",Fv=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",Bv="[^"+hh.replace("\\.","")+"]",Ov=/((?:WC+[\/:])*)/.source.replace("WC",uh),zv=/(WCOD+)?/.source.replace("WCOD",Bv),Hv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),Vv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),Gv=new RegExp("^"+Ov+zv+Hv+Vv+"$"),Wv=["material","materials","bones","map"],$c=class{constructor(e,t,i){let s=i||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Rt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fv,"")}static parseTrackName(e){let t=Gv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Wv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=$c;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);var fo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var fn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Xv=new nr(-1,1,1,-1,0,1),dh=class extends _t{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}},qv=new dh,qi=class{constructor(e){this._mesh=new ne(qv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var dr=class extends fn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Jn.clone(e.uniforms),this.material=new ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new qi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var $r=class extends fn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},po=class extends fn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var mo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ae);this._width=i.width,this._height=i.height,t=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dr(fo),this.copyPass.material.blending=qn,this.clock=new oo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}$r!==void 0&&(a instanceof $r?i=!0:a instanceof po&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var go=class extends fn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var kd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var fr=class n extends fn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new Ae(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(r,a,{type:Nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new nn(r,a,{type:Nn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new nn(r,a,{type:Nn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=kd;this.highPassUniforms=Jn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ae(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=fo;this.copyUniforms=Jn.clone(h.uniforms),this.blendMaterial=new ot({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Je,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.basic=new Tt,this.fsQuad=new qi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ae(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};fr.BlurDirectionX=new ae(1,0);fr.BlurDirectionY=new ae(0,1);var Fd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var xo=class extends fn{constructor(){super();let e=Fd;this.uniforms=Jn.clone(e.uniforms),this.material=new io({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new qi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===eh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _i=.03333333333333333,tt=58,$v=tt/44,Dt=n=>Math.round(n*$v*2)/2,Bd=.7,fh=30,Od=.18;var ph=20;var zd=5,mh=[0,100,250,450,700],Hd=6.5;var pn={ranger:{name:"Pemanah Arkana",desc:"Tembakan cepat jarak jauh",skillName:"Kilat",skillDesc:"Melesat cepat ke arah gerak",hp:100,speed:8.5,fireCd:.16,dmg:9,projSpeed:70,projLife:.7,pellets:1,spread:.015,splash:0,skill:"dash",skillCd:5,color:5104639},mage:{name:"Penyihir Bara",desc:"Bola api dengan ledakan area",skillName:"Nova",skillDesc:"Ledakan di sekeliling tubuh",hp:90,speed:7.5,fireCd:.7,dmg:34,projSpeed:32,projLife:1.6,pellets:1,spread:0,splash:3.5,skill:"nova",skillCd:9,color:16742958},guardian:{name:"Penjaga Rune",desc:"Sebaran rune jarak dekat, tubuh kuat",skillName:"Perisai",skillDesc:"Menahan 70% serangan selama 3 detik",hp:140,speed:7,fireCd:.75,dmg:8,projSpeed:55,projLife:.32,pellets:6,spread:.16,splash:0,skill:"shield",skillCd:10,color:10354538},priest:{name:"Haji Toriq",desc:"Penyembuh: memulihkan diri dan rekan",skillName:"Doa",skillDesc:"Pulihkan 35 HP untukmu dan rekan di dekatmu",hp:95,speed:8,fireCd:.4,dmg:13,projSpeed:45,projLife:.8,pellets:1,spread:.02,splash:0,skill:"heal",skillCd:9,color:16769658}},gh=Object.keys(pn);var vi=[],vo=(n,e,t,i,s)=>vi.push({t:"cyl",x:Dt(n),z:Dt(e),r:t,h:i,kind:s}),Yr=(n,e,t,i,s,r)=>vi.push({t:"box",x:Dt(n),z:Dt(e),w:t,d:i,h:s,kind:r});vo(0,0,3.2,1.4,"altar");for(let n of[-1,1])for(let e of[-1,1])vo(n*13,e*13,1.3,9,"pillar"),Yr(n*30,e*26,12,2,4.5,"wall"),vi.push({t:"box",x:n*46,z:e*40.5,w:2,d:10,h:4.5,kind:"wall"}),Yr(n*9,e*33,3,3,2.6,"block"),Yr(n*33,e*9,3,3,2.6,"block");for(let n of[-1,1])vo(0,n*30,1.3,9,"pillar"),vo(n*28,0,1.3,9,"pillar"),Yr(0,n*21,16,2,4,"wall"),Yr(n*21,0,2,16,4,"wall");for(let n of[-1,1])for(let e of[-1,1])vi.push({t:"box",x:n*22,z:e*45,w:10,d:2,h:4,kind:"wall"}),vi.push({t:"box",x:n*45,z:e*22,w:2,d:10,h:4,kind:"wall"}),vi.push({t:"cyl",x:n*30,z:e*29,r:1.3,h:9,kind:"pillar"}),vi.push({t:"box",x:n*12,z:e*21,w:3,d:3,h:2.6,kind:"block"}),vi.push({t:"box",x:n*21,z:e*12,w:3,d:3,h:2.6,kind:"block"});var xh=vi,Yv=[[40,7],[-40,-7],[-7,40],[7,-40],[38,18],[38,-18],[-38,18],[-38,-18],[18,38],[-18,38],[18,-38],[-18,-38]].map(([n,e])=>[Dt(n),Dt(e)]),vh=[[12,0],[-12,0],[0,12],[0,-12],[39,39],[-39,39],[39,-39],[-39,-39]].map(([n,e])=>[Dt(n),Dt(e)]),yo={dm:"Deathmatch",koth:"Rebut Altar"},Zr=7.5;var $i={dmg:{name:"Rune Amarah",desc:"damage +50%",color:16726862},spd:{name:"Rune Angin",desc:"kecepatan +35%",color:5096447}},Zv=[{x:0,z:26,type:"dmg"},{x:0,z:-26,type:"dmg"},{x:18,z:18,type:"spd"},{x:-18,z:-18,type:"spd"}].map(n=>({...n,x:Dt(n.x),z:Dt(n.z)})),Vd=.11;yo.tdm="Tim";yo.coop="Lawan Bot";var Gd=["tdm","coop"];var mn=[{name:"Fajar",color:15910509},{name:"Senja",color:10513407}],vs=[],_o=(n,e,t,i,s)=>vs.push({t:"cyl",x:Dt(n),z:Dt(e),r:t,h:i,kind:s}),xs=(n,e,t,i,s,r)=>vs.push({t:"box",x:Dt(n),z:Dt(e),w:t,d:i,h:s,kind:r});_o(0,0,2.6,2.2,"bell");for(let n of[-1,1])for(let e of[-1,1])xs(n*31,e*13,12,4,5,"shed"),xs(n*13,e*31,4,12,5,"shed"),_o(n*24,e*24,.6,12,"mast"),xs(n*16,e*15,3,3,2.4,"crate"),xs(n*15,e*18.5,2.4,2.4,1.8,"crate"),xs(n*35,e*33,4,9,1.7,"boat");for(let n of[-1,1])xs(0,n*21,9,2.6,2.4,"crate"),xs(n*21,0,2.6,9,2.4,"crate"),_o(n*10.5,n*-10.5,.6,7,"post"),_o(n*-10.5,n*-10.5,.6,7,"post");for(let n of[-1,1])for(let e of[-1,1])vs.push({t:"box",x:n*49,z:e*8,w:3,d:6,h:2.4,kind:"crate"}),vs.push({t:"box",x:n*8,z:e*49,w:6,d:3,h:2.4,kind:"crate"}),vs.push({t:"box",x:n*36,z:e*44,w:3,d:3,h:1.8,kind:"crate"}),vs.push({t:"cyl",x:n*44,z:e*30,r:.6,h:7,kind:"post"});var Ft={ruins:{name:"Reruntuhan Senja",obst:xh,spawns:Yv,orbs:vh,runes:Zv},harbor:{name:"Pelabuhan Bulan",obst:vs,spawns:[[40,0],[-40,0],[0,40],[0,-40],[39,22],[39,-22],[-39,22],[-39,-22],[22,39],[-22,39],[22,-39],[-22,-39]].map(([n,e])=>[Dt(n),Dt(e)]),orbs:[[10,0],[-10,0],[0,10],[0,-10],[27,27],[-27,27],[27,-27],[-27,-27]].map(([n,e])=>[Dt(n),Dt(e)]),runes:[{x:0,z:30,type:"dmg"},{x:0,z:-30,type:"dmg"},{x:30,z:0,type:"spd"},{x:-30,z:0,type:"spd"}].map(n=>({...n,x:Dt(n.x),z:Dt(n.z)}))}},Jv=Object.keys(Ft),Yi=[{id:"default",name:"Bawaan kelas",req:null},{id:"zamrud",name:"Zamrud",accent:2059082,req:{stat:"matches",n:5,text:"Selesaikan 5 ronde"}},{id:"senja",name:"Ungu Senja",accent:5974662,req:{stat:"kills",n:25,text:"25 kill total"}},{id:"bulan",name:"Perak Bulan",accent:11187916,glow:14674175,req:{stat:"wins",n:3,text:"Menang 3 ronde"}},{id:"naga",name:"Darah Naga",accent:7999260,glow:16726830,req:{stat:"kills",n:100,text:"100 kill total"}},{id:"raja",name:"Emas Raja",accent:12093738,glow:16766315,req:{stat:"wins",n:10,text:"Menang 10 ronde"}}];function Wd(n,e){return!n.req||(e&&e[n.req.stat]||0)>=n.req.n}var _h={eclipse:{name:"Gerhana",desc:"Arena gelap, jarak pandang pendek",dur:25},runerain:{name:"Hujan Rune",desc:"Semua rune muncul dan cepat kembali",dur:20},golden:{name:"Cawan Emas",desc:"Ambil cawan: HP penuh dan kedua rune",dur:30}},yh=100,Mh={ranger:{name:"Hujan Panah",desc:"11 panah menyebar sekaligus"},mage:{name:"Meteor",desc:"Meteor jatuh di depan, ledakan besar"},guardian:{name:"Benteng Rune",desc:"Perisai 5 dtk, pulih 50% HP, gelombang kejut"},priest:{name:"Cahaya Fajar",desc:"Rekan pulih penuh dan yang tumbang bangkit; lawan di dekatmu terluka"}};Yi.push({id:"fajar",name:"Bintang Fajar",accent:14248250,glow:16756848,req:{stat:"chal",n:3,text:"Selesaikan 3 tantangan harian"}},{id:"malam",name:"Bayangan Malam",accent:1448494,glow:8057087,req:{stat:"chal",n:10,text:"Selesaikan 10 tantangan harian"}});yo.pve="Bertahan Bersama";var Kn={ghoul:{name:"Hantu Rawa",hp:30,speed:6.2,color:8257418,melee:{dmg:6,cd:1.1,r:1.9}},caster:{name:"Dukun Bayang",hp:38,speed:5.4,color:13134847,range:18,fireCd:1.5,dmg:15,projSpeed:30,projLife:1.6,pellets:1,spread:.04,splash:0,skill:"none",skillCd:99},brute:{name:"Golem Batu",hp:260,speed:4,color:16752704,boss:!0,melee:{dmg:16,cd:1.6,r:2.8},slam:{dmg:18,r:5.5,cd:7}}},yi={...pn,...Kn},Jr={breakTime:6,cap:22,bossEvery:5,winWave:10,diffMul:{easy:.55,normal:.75,hard:1.15}};Object.assign(Jr,{windup:.45,reviveTime:3,reviveR:2.4,spareDelay:4,allies:3,checkpointEvery:5,perkBreak:12});var Zi={tajam:{name:"Tajam",desc:"Damage +15%"},cepat:{name:"Cepat",desc:"Kecepatan tembak +12%"},vampir:{name:"Vampir",desc:"Pulih 12% dari damage yang diberikan"},kokoh:{name:"Kokoh",desc:"HP maksimal +25"},lincah:{name:"Lincah",desc:"Kecepatan lari +10%"},fokus:{name:"Fokus",desc:"Jeda skill -20%"},amarah:{name:"Amarah",desc:"Pengukur pamungkas terisi 40% lebih cepat"},ganda:{name:"Ganda",desc:"Tambahan 1 peluru setiap tembakan"},ledak:{name:"Ledak",desc:"Musuh yang tumbang meledak (damage area)"},pulih:{name:"Pulih",desc:"HP mulai pulih 1 dtk lebih cepat, +4 per dtk"}},fy=Object.keys(Zi);Object.assign(Kn,{frost:{name:"Penyihir Es",hp:34,speed:5.2,color:8378623,range:17,slow:!0,fireCd:1.9,dmg:10,projSpeed:26,projLife:1.7,pellets:1,spread:.04,splash:0,skill:"none",skillCd:99},spiderling:{name:"Anak Laba-laba",hp:14,speed:8.2,color:16735610,melee:{dmg:4,cd:.9,r:1.6}},queen:{name:"Ratu Laba-laba",hp:300,speed:4.6,color:16723546,boss:!0,melee:{dmg:14,cd:1.4,r:2.8},summon:{cd:7,n:2,max:6}}});Object.assign(yi,pn,Kn);var bn=[];bn.push({t:"cyl",x:0,z:0,r:2.8,h:2,kind:"heart"});for(let n of[-1,1])for(let e of[-1,1])bn.push({t:"cyl",x:n*16.5,z:e*7,r:1.5,h:6,kind:"crystal"}),bn.push({t:"cyl",x:n*7,z:e*16.5,r:1.5,h:6,kind:"crystal"}),bn.push({t:"cyl",x:n*24,z:e*24,r:2.2,h:4,kind:"rock"}),bn.push({t:"box",x:n*32,z:e*10,w:3,d:12,h:5,kind:"rockwall"}),bn.push({t:"box",x:n*10,z:e*32,w:12,d:3,h:5,kind:"rockwall"}),bn.push({t:"cyl",x:n*40,z:e*40,r:3,h:5,kind:"rock"}),bn.push({t:"box",x:n*44,z:e*22,w:2,d:8,h:4,kind:"rockwall"}),bn.push({t:"box",x:n*22,z:e*44,w:8,d:2,h:4,kind:"rockwall"}),bn.push({t:"cyl",x:n*36,z:e*28,r:1.2,h:7,kind:"crystal"}),bn.push({t:"cyl",x:n*28,z:e*36,r:1.2,h:7,kind:"crystal"});var kn=[];kn.push({t:"cyl",x:0,z:0,r:2.6,h:2,kind:"brazier"});for(let n of[-1,1])for(let e of[-1,1])kn.push({t:"box",x:n*12,z:e*24,w:2,d:16,h:4.5,kind:"icewall"}),kn.push({t:"box",x:n*24,z:e*12,w:16,d:2,h:4.5,kind:"icewall"}),kn.push({t:"cyl",x:n*36,z:e*12,r:1.2,h:8,kind:"column"}),kn.push({t:"cyl",x:n*12,z:e*36,r:1.2,h:8,kind:"column"}),kn.push({t:"cyl",x:n*36,z:e*36,r:1.2,h:8,kind:"column"}),kn.push({t:"box",x:n*46,z:e*30,w:2,d:12,h:4.5,kind:"icewall"}),kn.push({t:"box",x:n*30,z:e*46,w:12,d:2,h:4.5,kind:"icewall"}),kn.push({t:"box",x:n*22,z:e*40,w:3,d:3,h:2.6,kind:"iceblock"}),kn.push({t:"box",x:n*40,z:e*22,w:3,d:3,h:2.6,kind:"iceblock"});var _s=n=>n.flatMap(([e,t])=>e&&t?[[e,t],[-e,t],[e,-t],[-e,-t]]:e?[[e,0],[-e,0]]:[[0,t],[0,-t]]);Ft.cave={name:"Gua Kristal",obst:bn,light:[.35,.78,.52],spawns:[[52,6],[-52,-6],[-6,52],[6,-52],..._s([[50,26],[26,50]])],orbs:[..._s([[13,0],[0,13]]),..._s([[33,33]])],runes:[{x:0,z:26,type:"dmg"},{x:0,z:-26,type:"dmg"},{x:26,z:0,type:"spd"},{x:-26,z:0,type:"spd"}],barrels:[]};Ft.temple={name:"Kuil Salju",obst:kn,light:[-.5,.62,.6],spawns:[..._s([[52,0],[0,52]]),..._s([[50,20],[20,50]])],orbs:[..._s([[10,0],[0,10]]),..._s([[30,30]])],runes:[{x:0,z:34,type:"dmg"},{x:0,z:-34,type:"dmg"},{x:34,z:0,type:"spd"},{x:-34,z:0,type:"spd"}],barrels:[]};Jv.push("cave","temple");Ft.ruins.barrels=[];Ft.harbor.barrels=[[19,7],[-19,-7],[7,-19],[-7,19],[26,20],[-26,-20]].map(([n,e])=>[Dt(n),Dt(e)]);var pr={giant:{name:"Raksasa",desc:"Semua besar: HP +60%, gerak lebih lambat"},meteor:{name:"Hujan Meteor",desc:"Meteor jatuh di dekat pemain; lihat lingkaran merah"},oneshot:{name:"Tembakan Maut",desc:"Damage x3, tembakan lebih jarang"},mage:{name:"Hanya Penyihir",desc:"Semua bermain sebagai Penyihir Bara"}},bh=["Tolong!","Ke sini!","Bagus!"],Eh=[{id:"k100",name:"Pembasmi",text:"100 kill",stat:"kills",n:100},{id:"w10",name:"Juara",text:"Menang 10 ronde",stat:"wins",n:10},{id:"wave5",name:"Penakluk Golem",text:"Selesaikan gelombang 5",stat:"bestWave",n:5},{id:"wave10",name:"Pembasmi Ratu",text:"Selesaikan gelombang 10",stat:"bestWave",n:10},{id:"rev10",name:"Penolong",text:"Tolong rekan 10 kali",stat:"revives",n:10},{id:"bnt5",name:"Pemburu Hadiah",text:"Tumbangkan 5 buronan",stat:"bounties",n:5},{id:"chal7",name:"Rajin",text:"Selesaikan 7 tantangan harian",stat:"chal",n:7}];yo.king="Perburuan Raja";var py={bossRush:"Bos setiap 3 gelombang",doublePerk:"Dua berkah tiap gelombang",giant:pr.giant.name,meteor:pr.meteor.name,oneshot:pr.oneshot.name,mage:pr.mage.name};Yi.push({id:"golem",name:"Batu Golem",accent:7036242,glow:16747050,req:{stat:"ev_golem",n:1,text:"Capai target event Malam Golem"}},{id:"mahkota",name:"Jubah Mahkota",accent:5902384,glow:16765514,req:{stat:"ev_raja",n:1,text:"Capai target event Perburuan Raja"}});Eh.push({id:"ev3",name:"Tamu Setia",text:"Hadir di 3 event",stat:"evAttend",n:3});var Kr=Ft.ruins.obst;function Xd(n){Kr=(Ft[n]||Ft.ruins).obst}function Kv(n,e){for(let t=0;t<2;t++){let i=tt-e;n.x>i?n.x=i:n.x<-i&&(n.x=-i),n.z>i?n.z=i:n.z<-i&&(n.z=-i);for(let s=0;s<Kr.length;s++){let r=Kr[s];if(r.t==="cyl"){let a=n.x-r.x,o=n.z-r.z,l=r.r+e,c=a*a+o*o;if(c<l*l){let h=Math.sqrt(c);h<1e-6&&(a=1,o=0,h=1),n.x=r.x+a/h*l,n.z=r.z+o/h*l}}else{let a=r.w/2,o=r.d/2,l=Math.max(r.x-a,Math.min(n.x,r.x+a)),c=Math.max(r.z-o,Math.min(n.z,r.z+o)),h=n.x-l,u=n.z-c,d=h*h+u*u;if(d<e*e)if(d>1e-10){let f=Math.sqrt(d);n.x=l+h/f*e,n.z=c+u/f*e}else{let f=a-Math.abs(n.x-r.x),x=o-Math.abs(n.z-r.z);f<x?n.x=r.x+Math.sign(n.x-r.x||1)*(a+e):n.z=r.z+Math.sign(n.z-r.z||1)*(o+e)}}}}}function Sh(n,e,t,i){n.yaw=e.y;let s=e.mx,r=e.mz,a=Math.hypot(s,r);a>1&&(s/=a,r/=a),n.skillCd>0&&(n.skillCd=Math.max(0,n.skillCd-i));let o=!1;if(e.k&&n.skillCd<=0&&(n.skillCd=t.skillCd,o=!0,t.skill==="dash"&&(n.dashT=Od,a>.2?(n.dx=e.mx/a,n.dz=e.mz/a):(n.dx=Math.sin(n.yaw),n.dz=Math.cos(n.yaw)))),n.dashT>0)n.x+=n.dx*fh*i,n.z+=n.dz*fh*i,n.dashT=Math.max(0,n.dashT-i);else{let l=t.speed*(n.spd||1);n.x+=s*l*i,n.z+=r*l*i}return Kv(n,Bd),o}function Ji(n,e,t){let i=tt-t;if(n>i||n<-i||e>i||e<-i)return!0;for(let s=0;s<Kr.length;s++){let r=Kr[s];if(r.t==="cyl"){let a=n-r.x,o=e-r.z,l=r.r+t;if(a*a+o*o<l*l)return!0}else if(Math.abs(n-r.x)<r.w/2+t&&Math.abs(e-r.z)<r.d/2+t)return!0}return!1}function qd(n,e,t,i){let s=t-n,r=i-e,a=Math.hypot(s,r),o=Math.ceil(a/.7);for(let l=1;l<o;l++){let c=l/o;if(Ji(n+s*c,e+r*c,.1))return!1}return!0}function mr(n,e){let t=(n-e)%(Math.PI*2);return t>Math.PI?t-=Math.PI*2:t<-Math.PI&&(t+=Math.PI*2),t}var wh=[];function Zd(n,e){let t=Math.min(1024,n.width),i=n;(!n.getContext||n.width!==t)&&(i=document.createElement("canvas"),i.width=i.height=t,i.getContext("2d").drawImage(n,0,0,t,t));let s=i.getContext("2d").getImageData(0,0,t,t).data,r=new Float32Array(t*t);for(let h=0;h<t*t;h++)r[h]=(s[h*4]*.3+s[h*4+1]*.59+s[h*4+2]*.11)/255;let a=document.createElement("canvas");a.width=a.height=t;let o=a.getContext("2d"),l=o.createImageData(t,t),c=(h,u)=>r[(u+t)%t*t+(h+t)%t];for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=(c(u+1,h)-c(u-1,h))*e,f=(c(u,h+1)-c(u,h-1))*e,x=1/Math.hypot(d,f,1),v=(h*t+u)*4;l.data[v]=(-d*x*.5+.5)*255,l.data[v+1]=(f*x*.5+.5)*255,l.data[v+2]=(x*.5+.5)*255,l.data[v+3]=255}return o.putImageData(l,0,0),new xi(a)}var Th=(n,e)=>(n.wrapS=e.wrapS,n.wrapT=e.wrapT,n.repeat.copy(e.repeat),n.anisotropy=e.anisotropy,n),Jd={},Ah={};function Fn(n,e=2,t=1,i=""){let s={mat:n,tex:Th(Zd(n.map.image,e),n.map),strength:e};return n.normalScale=new ae(t,t),wh.push(s),i&&((Jd[i]||=[]).push(s),Ah[i]&&Kd(i)),n}function Kd(n){let e=Ah[n];for(let t of Jd[n]||[]){if(t.hd)continue;t.hd=!0;let i=t.mat.normalMap===t.tex;e.normal||=Zd(e.image,t.strength*1.6);let s=Th(new $t(e.image),t.mat.map);s.colorSpace=Ot,s.needsUpdate=!0,t.tex=Th(e.normal.clone(),t.mat.map),t.tex.needsUpdate=!0,t.mat.map=s,i&&(t.mat.normalMap=t.tex),t.mat.needsUpdate=!0}}var $d=!1;async function jd(){if($d)return 0;$d=!0;let n=0;try{let e=await fetch("/assets/manifest.json");if(!e.ok)return 0;let t=await e.json();await Promise.all(Object.entries(t.tex||{}).map(async([i,s])=>{if(!/^[a-z0-9_-]{1,40}\.webp$/.test(s))return;let r=new Image;r.src=`/assets/${s}?v=${t.v||0}`;try{await r.decode()}catch{return}Ah[i]={image:r,normal:null},Kd(i),n++}))}catch{}return n}var Yd=null;function Qd(n){if(!(n===Yd&&wh.every(e=>e.done))){Yd=n;for(let e of wh)e.done=!0,e.mat.normalMap===e.tex!==n&&(e.mat.normalMap=n?e.tex:null,e.mat.needsUpdate=!0)}}var ef=new Gr(new Uint8Array([255,255,255,255]),1,1);ef.needsUpdate=!0;var tf=[];function gr(n,e,t,i=.5){let s={bakeMap:{value:ef},bakeExt:{value:t},bakeAo:{value:.75},bakeSun:{value:0},bakeShade:{value:i}};return tf.push(s),new ro().load(e,r=>{r.flipY=!1,r.colorSpace=Vn,r.wrapS=r.wrapT=ui,r.generateMipmaps=!0,s.bakeMap.value=r}),n.onBeforeCompile=r=>{Object.assign(r.uniforms,s),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vBakeXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBakeXZ = (modelMatrix * vec4(position, 1.0)).xz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vBakeXZ; uniform sampler2D bakeMap; uniform float bakeExt, bakeAo, bakeSun, bakeShade;`).replace("#include <map_fragment>",`#include <map_fragment>
        { vec2 buv = vBakeXZ / (2.0 * bakeExt) + 0.5;
          if (buv.x > 0.0 && buv.x < 1.0 && buv.y > 0.0 && buv.y < 1.0) {
            vec4 bk = texture2D(bakeMap, buv);
            diffuseColor.rgb *= mix(1.0, bk.r, bakeAo) * mix(1.0, mix(bakeShade, 1.0, bk.g), bakeSun);
          } }`)},n.customProgramCacheKey=()=>"bake",n}function nf(n){for(let e of tf)e.bakeSun.value=n?1:0}function sf(n,e){let t=new sr,i=e.clone();i.scale.setScalar(.1),t.add(i);let s=new ir(n),r=s.fromScene(t,.04,.1,200).texture;return s.dispose(),r}function Ki(n,e=9078472,t=.45){let i=new Ae(e);return n.onBeforeCompile=s=>{s.uniforms.rimColor={value:i},s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 rimColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += rimColor * pow(1.0 - saturate(dot(normal, normalize(vViewPosition))), 3.0) * ${t.toFixed(2)};`)},n.customProgramCacheKey=()=>"rim"+t,n}function rf(){return new dr({uniforms:{tDiffuse:{value:null},sat:{value:1.14},con:{value:1.04},vig:{value:.3}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float sat, con, vig; varying vec2 vUv;
      void main(){ vec4 t=texture2D(tDiffuse,vUv); vec3 c=t.rgb;
        float l=dot(c,vec3(0.2126,0.7152,0.0722));
        c=mix(vec3(l),c,sat);
        c=max(vec3(0.0),(c-0.18)*con+0.18);
        c*=mix(vec3(0.94,0.97,1.06),vec3(1.05,1.0,0.94),smoothstep(0.0,0.7,l)); // bayangan sejuk, sorotan hangat
        vec2 d=vUv-0.5; c*=1.0-vig*smoothstep(0.25,0.85,dot(d,d)*2.2);
        gl_FragColor=vec4(c,t.a); }`})}var af=new U(-.62,.4,-.68).normalize();function En(n){let e=n;return()=>((e=e*16807%2147483647)-1)/2147483646}function Bn(n,e,t){let i=document.createElement("canvas");i.width=i.height=n,e(i.getContext("2d"),n);let s=new xi(i);return s.colorSpace=Ot,t&&(s.wrapS=s.wrapT=Or,s.repeat.set(t,t)),s.anisotropy=4,s}function jv(){return Bn(128,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.55)"),t.addColorStop(.6,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=t,n.fillRect(0,0,e,e)})}function Qv(){let n=En(7);return Bn(256,(e,t)=>{e.fillStyle="#8e879a",e.fillRect(0,0,t,t);let i=4,s=t/i;for(let r=0;r<i;r++){let a=r%2*32;for(let o=-1;o<4;o++){let l=128+n()*50;e.fillStyle=`rgb(${l+8},${l},${l+16})`,e.fillRect(o*64+a+2,r*s+2,60,s-4)}}for(let r=0;r<2600;r++){let a=n()<.5?0:255;e.fillStyle=`rgba(${a},${a},${a},${.03+n()*.05})`,e.fillRect(n()*t,n()*t,1+n()*2,1+n()*2)}for(let r=0;r<22;r++)e.fillStyle=`rgba(70,${110+n()*40},70,0.16)`,e.beginPath(),e.arc(n()*t,n()*t,6+n()*16,0,7),e.fill()},1)}function e_(){let n=En(21);return Bn(512,(e,t)=>{e.fillStyle="#4c5a3c",e.fillRect(0,0,t,t);for(let i=0;i<420;i++){let s=n()*t,r=n()*t,a=14+n()*30,o=96+n()*50;e.fillStyle=`rgba(${o+14},${o+8},${o+20},${.5+n()*.4})`,e.beginPath(),e.ellipse(s,r,a,a*(.6+n()*.4),n()*3,0,7),e.fill();for(let[l,c]of[[t,0],[-t,0],[0,t],[0,-t]])e.beginPath(),e.ellipse(s+l,r+c,a,a*.8,0,0,7),e.fill()}for(let i=0;i<5e3;i++)e.fillStyle=`rgba(${60+n()*50},${120+n()*80},${50+n()*30},${.22+n()*.25})`,e.fillRect(n()*t,n()*t,2,2+n()*3)},22)}function t_(){let n=En(99);return Bn(512,(e,t)=>{let i=t/2;e.strokeStyle="#8fefff",e.lineCap="round";for(let[s,r]of[[240,5],[222,2],[150,4],[92,2],[60,3]])e.lineWidth=r,e.beginPath(),e.arc(i,i,s,0,7),e.stroke();e.lineWidth=3;for(let s=0;s<24;s++){let r=s/24*Math.PI*2;e.save(),e.translate(i+Math.cos(r)*186,i+Math.sin(r)*186),e.rotate(r+Math.PI/2),e.beginPath();for(let a=0;a<4;a++)e.lineTo((n()-.5)*22,(n()-.5)*30);e.stroke(),e.restore()}e.lineWidth=2.5;for(let s=0;s<2;s++){e.beginPath();for(let r=0;r<=4;r++){let a=r/4*Math.PI*2+s*Math.PI/4;e.lineTo(i+Math.cos(a)*150,i+Math.sin(a)*150)}e.stroke()}})}function n_(){let n=En(5);return Bn(128,(t,i)=>{for(let s=0;s<13;s++){let r=i*(.3+n()*.4),a=(n()-.5)*i*.75,o=i*(.45+n()*.5),l=5+n()*5,c=t.createLinearGradient(0,i,0,i-o);c.addColorStop(0,"#2f5a2a"),c.addColorStop(1,`hsl(${85+n()*30},60%,${50+n()*20}%)`),t.fillStyle=c,t.beginPath(),t.moveTo(r-l,i),t.quadraticCurveTo(r+a*.3,i-o*.6,r+a,i-o),t.quadraticCurveTo(r+a*.4,i-o*.5,r+l,i),t.closePath(),t.fill()}})}function i_(){let n=[],e=[],t=[],i=[];for(let r=0;r<2;r++){let a=Math.cos(r*Math.PI/2+.4)*.5,o=Math.sin(r*Math.PI/2+.4)*.5,l=r*4;n.push(-a,0,-o,a,0,o,a,.75,o,-a,.75,-o),e.push(0,0,1,0,1,1,0,1),t.push(0,1,0,0,1,0,0,1,0,0,1,0),i.push(l,l+1,l+2,l,l+2,l+3,l,l+2,l+1,l,l+3,l+2)}let s=new _t;return s.setAttribute("position",new $e(n,3)),s.setAttribute("uv",new $e(e,2)),s.setAttribute("normal",new $e(t,3)),s.setIndex(i),s}function s_(){let n=[],e=[],t=[],i=0;for(let[r,a,o]of[[3,4.2,-2.2],[2.3,3.8,.2],[1.5,3.4,2.6]]){let l=new Gt(r,a,7);l.translate(0,o,0),n.push(...l.attributes.position.array),e.push(...l.attributes.normal.array);for(let c of l.index.array)t.push(c+i);i+=l.attributes.position.count}let s=new _t;return s.setAttribute("position",new $e(n,3)),s.setAttribute("normal",new $e(e,3)),s.setIndex(t),s}function of(n){let e=new ke;n.add(e);let t=En(1234),i=jv(),s=Qv(),r=Fn(new Re({map:s,roughness:.9,metalness:.02}),3.2,1.1,"stone"),a=Fn(new Re({map:s,color:11577020,roughness:.95}),3.2,1.1,"stone"),o={root:e,glowTex:i,orbs:[],spin:[],grass:null,sun:null,pointLights:[]};o.fog=new Hi(7029872,.006);let l=new ne(new ft(600,32,16),new ot({side:zt,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:af}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 sunDir;
        float hash(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float h=d.y;
          vec3 hor=vec3(1.0,0.48,0.26), mid=vec3(0.42,0.17,0.45), top=vec3(0.035,0.05,0.16);
          vec3 c=mix(hor,mid,smoothstep(-0.02,0.22,h)); c=mix(c,top,smoothstep(0.16,0.75,h));
          float s=max(dot(d,sunDir),0.0);
          c+=vec3(1.0,0.55,0.25)*pow(s,6.0)*0.55 + vec3(1.0,0.85,0.6)*pow(s,220.0)*4.0;
          vec3 g=floor(d*220.0); float st=step(0.9972,hash(g));
          c+=vec3(0.9,0.95,1.0)*st*smoothstep(0.25,0.7,h)*(0.6+0.4*hash(g+1.0));
          gl_FragColor=vec4(c,1.0); }`}));l.renderOrder=-10,l.frustumCulled=!1,e.add(l),o.sky=l,e.add(new Gi(9676021,5915216,1.55)),e.add(new Xi(9404341,.75));let c=new Wi(16758912,3.6);c.castShadow=!0,c.shadow.mapSize.set(1024,1024);let h=c.shadow.camera;h.left=-34,h.right=34,h.top=34,h.bottom=-34,h.near=1,h.far=160,c.shadow.bias=-6e-4,c.shadow.normalBias=.04,e.add(c,c.target),o.sun=c;let u=new ne(new jt(440,440),new Re({map:e_(),roughness:.96}));u.material.map.repeat.set(60,60),Fn(u.material,2.6,.9,"ground"),gr(u.material,"bake/ruins.png",tt+8,.36),u.rotation.x=-Math.PI/2,u.receiveShadow=!0,e.add(u);let d=new ne(new jt(22,22),new Tt({map:t_(),transparent:!0,blending:Je,depthWrite:!1,opacity:.75}));d.rotation.x=-Math.PI/2,d.position.y=.04,e.add(d),o.rune=d;let f=A=>(A.castShadow=!0,A.receiveShadow=!0,A),x=A=>new Re({color:A,emissive:A,emissiveIntensity:1.8,roughness:.25,metalness:.1});function v(A,W,Z,$,re,Me){let K=new ke,ie=new ne(new fs($,0),x(re));ie.scale.y=1.9,K.add(ie);let xe=new kt(new Lt({map:i,color:re,blending:Je,depthWrite:!1,transparent:!0,opacity:.7}));if(xe.scale.setScalar($*7),K.add(xe),K.position.set(A,W,Z),e.add(K),o.spin.push({g:K,y:W,sp:.5+t()*.6,ph:t()*6}),Me){let ue=new Zn(re,Me,34,1.6);ue.position.set(A,W,Z),e.add(ue),o.pointLights.push(ue)}return K}for(let A of xh)if(A.kind==="altar"){for(let[W,Z,$]of[[3.2,.5,.25],[2.6,.5,.75],[2,.4,1.2]]){let re=f(new ne(new Ge(W,W+.15,Z,8),r));re.position.set(A.x,$,A.z),e.add(re)}v(A.x,4.2,A.z,1,5826303,90)}else if(A.kind==="pillar"){let W=t()<.4,Z=W?4+t()*3:A.h,$=f(new ne(new qe(A.r*2.5,.7,A.r*2.5),r));$.position.set(A.x,.35,A.z),e.add($);let re=f(new ne(new Ge(A.r*.82,A.r*.95,Z,10),r));if(re.position.set(A.x,.7+Z/2,A.z),re.rotation.z=W?(t()-.5)*.05:0,e.add(re),!W){let Me=f(new ne(new qe(A.r*2.6,.6,A.r*2.6),r));Me.position.set(A.x,.7+Z+.3,A.z),e.add(Me),v(A.x,.7+Z+1.6,A.z,.38,16734929,0)}}else if(A.kind==="wall"){let W=f(new ne(new qe(A.w,A.h,A.d),r));W.position.set(A.x,A.h/2,A.z),e.add(W);let Z=A.w>A.d,$=Z?A.w:A.d,re=Math.floor($/2);for(let Me=0;Me<re;Me++){if(t()<.3)continue;let K=.5+t()*.9,ie=-$/2+1+Me*2,xe=f(new ne(new qe(Z?1.2:A.w,K,Z?A.d:1.2),r));xe.position.set(A.x+(Z?ie:0),A.h+K/2,A.z+(Z?0:ie)),e.add(xe)}}else{let W=f(new ne(new qe(A.w,A.h,A.d),a));W.position.set(A.x,A.h/2,A.z),W.rotation.y=0,e.add(W);let Z=f(new ne(new qe(A.w*.6,.7,A.d*.6),r));Z.position.set(A.x+.3,A.h+.35,A.z-.2),Z.rotation.y=.5,e.add(Z)}for(let A of[-1,1])v(0,5.6,A*21,.5,16757310,30),v(A*21,5.6,0,.5,16757310,30);let g=tt+1.5;for(let[A,W,Z,$]of[[0,g,2*g+3,3],[0,-g,2*g+3,3],[g,0,3,2*g+3],[-g,0,3,2*g+3]]){let re=f(new ne(new qe(Z,6,$),a));re.position.set(A,3,W),e.add(re)}let p=new Re({color:4861278,roughness:.8});for(let A of[-1,1])for(let W of[-1,1]){let Z=f(new ne(new Ge(4,4.6,12,10),a));Z.position.set(A*g,6,W*g),e.add(Z);let $=f(new ne(new Gt(5,6,10),p));$.position.set(A*g,15,W*g),e.add($),v(A*g,19.5,W*g,.6,5826303,0)}let _=new Re({color:4863334,roughness:1,flatShading:!0});for(let A=0;A<30;A++){let W=A/30*Math.PI*2+t()*.2,Z=200+t()*90,$=45+t()*70,re=new Gt(70+t()*50,$,9,4),Me=re.attributes.position;for(let ie=0;ie<Me.count;ie++){let xe=(.5-Me.getY(ie)/$)*26;Me.setX(ie,Me.getX(ie)+(t()-.5)*xe),Me.setZ(ie,Me.getZ(ie)+(t()-.5)*xe),Me.setY(ie,Me.getY(ie)+(t()-.5)*xe*.5)}re.computeVertexNormals();let K=new ne(re,_);K.position.set(Math.cos(W)*Z,$/2-6,Math.sin(W)*Z),K.rotation.y=t()*6,e.add(K)}let E=150,y=new It,N=new rr(new Ge(.35,.5,4,6),new Re({color:3877418,roughness:1}),E),R=new rr(s_(),new Re({color:16777215,roughness:1,flatShading:!0}),E);for(let A=0;A<E;A++){let W,Z;do W=(t()-.5)*220,Z=(t()-.5)*220;while(Math.abs(W)<g+9&&Math.abs(Z)<g+9);let $=.8+t()*1.3;y.position.set(W,2*$,Z),y.scale.setScalar($),y.rotation.set(0,t()*6,0),y.updateMatrix(),N.setMatrixAt(A,y.matrix),y.position.y=7*$,y.updateMatrix(),R.setMatrixAt(A,y.matrix),R.setColorAt(A,new Ae().setHSL(.38+t()*.1,.45,.1+t()*.09))}e.add(N,R);let L=new Ln(.5,0);for(let A=0;A<60;A++){let W=(t()-.5)*tt*1.9,Z=(t()-.5)*tt*1.9;if(Ji(W,Z,1.2)||Math.hypot(W,Z)<12)continue;let $=f(new ne(L,a)),re=.3+t()*.5;$.scale.set(re,re*.6,re),$.position.set(W,re*.15,Z),$.rotation.set(t()*3,t()*3,0),e.add($)}let P=6200,S=i_(),M=new rr(S,new Re({map:n_(),alphaTest:.45,roughness:1}),P),k=new Ae;for(let A=0;A<P;A++){let W=(t()-.5)*tt*1.95,Z=(t()-.5)*tt*1.95,$=W+(t()-.5)*2.5,re=Z+(t()-.5)*2.5,Me=Ji($,re,.3)?0:.7+t()*1.1;y.position.set($,0,re),y.scale.set(Me,Me,Me),y.rotation.set(0,t()*6,0),y.updateMatrix(),M.setMatrixAt(A,y.matrix),M.setColorAt(A,k.setHSL(.22+t()*.12,.5,.42+t()*.25))}M.receiveShadow=!0,e.add(M),o.grass=M,o.grassMax=P;let X=260,C=new Float32Array(X*3),H=new Float32Array(X);for(let A=0;A<X;A++)C[A*3]=(t()-.5)*tt*2.2,C[A*3+1]=.6+t()*7,C[A*3+2]=(t()-.5)*tt*2.2,H[A]=t()*100;let G=new _t;G.setAttribute("position",new yt(C,3)),G.setAttribute("ph",new yt(H,1));let F=new Yn(G,new ot({transparent:!0,depthWrite:!1,blending:Je,uniforms:{time:{value:0},scale:{value:400}},vertexShader:`attribute float ph; uniform float time; uniform float scale; varying float vA;
      void main(){ vec3 p=position; p.x+=sin(time*0.4+ph)*1.6; p.y+=sin(time*0.7+ph*1.7)*0.7; p.z+=cos(time*0.33+ph*1.3)*1.6;
        vA=0.45+0.55*sin(time*2.0+ph*3.0); vec4 mv=modelViewMatrix*vec4(p,1.0);
        gl_PointSize=scale*0.24/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying float vA; void main(){ float d=length(gl_PointCoord-0.5);
      gl_FragColor=vec4(vec3(1.0,0.86,0.45)*2.0, smoothstep(0.5,0.0,d)*vA); }`}));F.frustumCulled=!1,e.add(F),o.flies=F;let T=new Re({color:5898140,emissive:3014527,emissiveIntensity:3,roughness:.2});for(let[A,W]of vh){let Z=new ke;Z.add(new ne(new Vi(.42,1),T));let $=new kt(new Lt({map:i,color:5898140,blending:Je,depthWrite:!1,transparent:!0,opacity:.8}));$.scale.setScalar(3.2),Z.add($);let re=new ne(new Mn(.9,1.1,24),new Tt({color:5898140,transparent:!0,opacity:.5,blending:Je,depthWrite:!1,side:xt}));re.rotation.x=-Math.PI/2,re.position.y=-1.15,Z.add(re),Z.position.set(A,1.2,W),e.add(Z),o.orbs.push(Z)}return o.update=(A,W,Z)=>{c.target.position.set(W.x,0,W.z),c.position.copy(c.target.position).addScaledVector(af,80),l.position.set(W.x,0,W.z),F.material.uniforms.time.value=A,d.material.opacity=.55+.25*Math.sin(A*1.3),d.rotation.z=A*.05;for(let $ of o.spin)$.g.rotation.y=A*$.sp,$.g.position.y=$.y+Math.sin(A*1.2+$.ph)*.25;for(let $=0;$<o.orbs.length;$++){let re=o.orbs[$];re.visible=!!(Z&1<<$),re.position.y=1.2+Math.sin(A*2+$)*.18,re.rotation.y=A*1.5}},o}function Rh(n,e,t,i,s){let r=t.map(u=>{let d=i[u.type],f=new ke,x=new Re({color:d.color,emissive:d.color,emissiveIntensity:2.4,roughness:.3}),v=new ne(u.type==="dmg"?new no(.5,0):new fs(.45,0),x);v.castShadow=!0,f.add(v);let g=new kt(new Lt({map:e,color:d.color,blending:Je,depthWrite:!1,transparent:!0,opacity:.85}));g.scale.setScalar(3),f.add(g);let p=new ne(new Mn(.8,1.15,6),new Tt({color:d.color,transparent:!0,opacity:.55,blending:Je,depthWrite:!1,side:xt}));return p.rotation.x=-Math.PI/2,p.position.y=-1.15,f.add(p),f.position.set(u.x,1.2,u.z),n.add(f),{g:f,gem:v,base:p}}),a=new Tt({color:16777215,transparent:!0,opacity:.5,blending:Je,depthWrite:!1,side:xt}),o=new ne(new Mn(s-.35,s,72),a);o.rotation.x=-Math.PI/2,o.position.y=.06,o.visible=!1,n.add(o);let l=new Tt({color:16777215,transparent:!0,opacity:.12,blending:Je,depthWrite:!1,side:xt}),c=new ne(new Ge(s,s,6,48,1,!0),l);c.position.y=3,c.visible=!1,n.add(c);let h={0:16773840,mine:15910509,other:16731486,contest:12020735};return{update(u,d,f,x,v){r.forEach((p,_)=>{p.g.visible=!!(d&1<<_),p.gem.rotation.y=u*2+_,p.gem.rotation.x=u*1.3,p.g.position.y=1.2+Math.sin(u*2.4+_)*.2,p.base.rotation.z=u*.8});let g=f==="koth";if(o.visible=c.visible=g,g){let p=x===0?h[0]:x===-1?h.contest:x===v?h.mine:h.other;a.color.setHex(p),l.color.setHex(p),a.opacity=.45+.25*Math.sin(u*(x?6:2)),l.opacity=x?.16:.07}}}}var Ch=new U(.55,.5,-.67).normalize();function r_(){let n=En(77);return Bn(256,(e,t)=>{e.fillStyle="#3a2a22",e.fillRect(0,0,t,t);let i=8,s=t/i;for(let r=0;r<i;r++){let a=70+n()*35;e.fillStyle=`rgb(${a+20},${a},${a-18})`,e.fillRect(0,r*s+1,t,s-2);for(let l=0;l<14;l++){e.strokeStyle=`rgba(30,18,10,${.15+n()*.2})`,e.lineWidth=1;let c=r*s+2+n()*(s-4);e.beginPath(),e.moveTo(0,c),e.bezierCurveTo(t*.3,c+(n()-.5)*3,t*.6,c+(n()-.5)*3,t,c),e.stroke()}let o=n()*t;e.fillStyle="rgba(15,8,5,0.8)",e.fillRect(o,r*s,2,s),e.fillStyle="rgba(160,160,170,0.6)",e.fillRect(o-6,r*s+s/2-1,2,2),e.fillRect(o+6,r*s+s/2-1,2,2)}},1)}function a_(){return Bn(128,(n,e)=>{n.fillStyle="#7a5532",n.fillRect(0,0,e,e),n.fillStyle="#5c3d22";for(let t=0;t<4;t++)n.fillRect(0,t*32+30,e,3);n.lineWidth=10,n.strokeStyle="#4a2f18",n.strokeRect(5,5,e-10,e-10),n.beginPath(),n.moveTo(10,10),n.lineTo(e-10,e-10),n.stroke()},1)}function lf(n,e){let t=En(4321),i=new ke;n.add(i);let s={root:i,glowTex:e,orbs:[],spin:[],grass:null,grassMax:0,sun:null,pointLights:[]};s.fog=new Hi(1450815,.0085);let r=new ne(new ft(600,32,16),new ot({side:zt,depthWrite:!1,fog:!1,uniforms:{moon:{value:Ch}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 moon;
        float hash(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float h=d.y;
          vec3 c=mix(vec3(0.12,0.2,0.33),vec3(0.03,0.05,0.12),smoothstep(-0.02,0.5,h));
          float m=max(dot(d,moon),0.0);
          c+=vec3(0.55,0.65,0.85)*pow(m,18.0)*0.5 + vec3(1.0,0.97,0.88)*smoothstep(0.9985,0.9992,m)*2.2;
          vec3 g=floor(d*260.0); float st=step(0.9965,hash(g));
          c+=vec3(0.85,0.9,1.0)*st*smoothstep(0.1,0.6,h)*(0.4+0.6*hash(g+2.0))*(1.0-smoothstep(0.98,0.995,m));
          gl_FragColor=vec4(c,1.0); }`}));r.renderOrder=-10,r.frustumCulled=!1,i.add(r),s.sky=r,i.add(new Gi(9414892,3811888,1.7)),i.add(new Xi(6978218,.8));let a=new Wi(11453695,1.9);a.castShadow=!0,a.shadow.mapSize.set(1024,1024);let o=a.shadow.camera;o.left=-34,o.right=34,o.top=34,o.bottom=-34,o.near=1,o.far=160,a.shadow.bias=-6e-4,a.shadow.normalBias=.04,i.add(a,a.target),s.sun=a;let l=r_();l.repeat.set(Math.round(tt*.55),Math.round(tt*.55));let c=new ne(new jt(tt*2+4,tt*2+4),Fn(new Re({map:l,roughness:.78,color:13154480}),3,1,"planks"));gr(c.material,"bake/harbor.png",tt+8,.42),c.rotation.x=-Math.PI/2,c.receiveShadow=!0,i.add(c);let h=new ne(new jt(900,900,1,1),new ot({fog:!0,uniforms:Jn.merge([he.fog,{time:{value:0},moon:{value:Ch}}]),vertexShader:`varying vec3 vW;
#include <fog_pars_vertex>
        void main(){ vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz; vec4 mvPosition=viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
#include <fog_vertex>
        }`,fragmentShader:`varying vec3 vW; uniform float time; uniform vec3 moon;
#include <fog_pars_fragment>
        vec3 skyCol(vec3 d){ vec3 c=mix(vec3(0.12,0.2,0.33),vec3(0.03,0.05,0.12),smoothstep(-0.02,0.5,d.y)); return c+vec3(0.55,0.65,0.85)*pow(max(dot(d,moon),0.0),18.0)*0.5; }
        void main(){
          // kemiringan permukaan dari beberapa gelombang sinus
          float ax=vW.x*0.35+time*1.2, az=vW.z*0.27-time*0.9, ad=(vW.x+vW.z)*0.9+time*2.3, ar=vW.x*1.9-vW.z*1.4+time*3.1;
          vec2 g=vec2(cos(ax)*0.175+cos(ad)*0.225+cos(ar)*0.19, cos(az)*0.135+cos(ad)*0.225-cos(ar)*0.14);
          vec3 n=normalize(vec3(-g.x*0.55,1.0,-g.y*0.55));
          vec3 v=normalize(cameraPosition-vW);
          float fr=0.03+0.97*pow(1.0-max(dot(n,v),0.0),5.0);
          vec3 r=reflect(-v,n); r.y=abs(r.y);
          vec3 c=mix(vec3(0.015,0.04,0.075),skyCol(r),fr);
          c+=vec3(1.0,0.97,0.88)*pow(max(dot(r,moon),0.0),260.0)*2.4;   // kilau bulan
          c+=vec3(0.6,0.7,0.95)*pow(max(dot(r,moon),0.0),24.0)*0.22;    // jejak cahaya bulan
          float edge=max(abs(vW.x),abs(vW.z))-${(tt+2).toFixed(1)};                       // buih di tepi dermaga
          float foam=smoothstep(2.6,0.0,edge)*step(0.0,edge)*(0.5+0.5*sin(edge*4.0-time*2.0+sin(vW.x*0.8+vW.z*0.7)*2.0));
          c+=vec3(0.55,0.65,0.75)*foam*0.35;
          gl_FragColor=vec4(c,1.0);
#include <fog_fragment>
        }`}));h.rotation.x=-Math.PI/2,h.position.y=-.6,i.add(h),s.water=h;let u=new Re({color:6120048,roughness:.95}),d=Fn(new Re({map:l,color:9071192,roughness:.9}),3,1,"planks"),f=new Re({color:3877412,roughness:.9}),x=Fn(new Re({map:a_(),roughness:.85}),3,1,"crate"),v=new Re({color:2898514,roughness:.8,flatShading:!0}),g=new Re({color:9402954,roughness:.35,metalness:.9}),p=T=>(T.castShadow=!0,T.receiveShadow=!0,T),_=(T,A,W,Z,$)=>{let re=p(new ne(T,A));return re.position.set(W,Z,$),i.add(re),re},E=tt+1;for(let[T,A,W,Z]of[[0,E,2*E+2,2],[0,-E,2*E+2,2],[E,0,2,2*E+2],[-E,0,2,2*E+2]])_(new qe(W,1.4,Z),u,T,.2,A);let y=Math.floor((tt-4)/10)*10;for(let T=-y;T<=y;T+=10)for(let[A,W]of[[T,E],[T,-E],[E,T],[-E,T]])_(new Ge(.35,.45,1.2,8),f,A,1.3,W);let N=(T,A,W,Z)=>{let $=new ke;$.add(p(new ne(new qe(.4,.55,.4),g)));let re=new ne(new qe(.3,.4,.3),new Re({color:16757596,emissive:16751162,emissiveIntensity:3}));$.add(re);let Me=new kt(new Lt({map:e,color:16752704,blending:Je,depthWrite:!1,transparent:!0,opacity:.85}));if(Me.scale.setScalar(4),$.add(Me),$.position.set(T,A,W),i.add($),Z){let K=new Zn(16751173,28,24,1.6);K.position.set(T,A,W),i.add(K),s.pointLights.push(K)}s.spin.push({flick:Me,ph:t()*10})};for(let T of Ft.harbor.obst)if(T.kind==="bell"){_(new Ge(T.r,T.r+.3,T.h,10),u,T.x,T.h/2,T.z);for(let[Z,$]of[[1,1],[1,-1],[-1,1],[-1,-1]])_(new qe(.35,4.2,.35),f,T.x+Z*1.5,T.h+2.1,T.z+$*1.5);let A=_(new Gt(2.8,2,4),v,T.x,T.h+5.2,T.z);A.rotation.y=Math.PI/4;let W=_(new Ge(.5,1,1.4,16,1,!0),g,T.x,T.h+3,T.z);W.material.side=xt,s.bell=W,N(T.x,T.h+1.6,T.z+1.9,!1),N(T.x,T.h+1.6,T.z-1.9,!1)}else if(T.kind==="shed"){_(new qe(T.w,T.h,T.d),d,T.x,T.h/2,T.z);let A=T.w>T.d,W=new ne(new Ge(.01,(A?T.d:T.w)*.75,A?T.w+.6:T.d+.6,3,1),v);W.rotation.set(A?0:Math.PI/2,0,A?Math.PI/2:0),A?W.rotation.set(0,0,Math.PI/2):W.rotation.set(Math.PI/2,0,0),W.scale.set(1,1,.55),W.position.set(T.x,T.h+.9,T.z),p(W),i.add(W);for(let Z=-1;Z<=1;Z+=2){let $=new ne(new jt(1.6,2.6),new Re({color:1708040,emissive:3809032,emissiveIntensity:.8}));A?($.position.set(T.x+Z*T.w/4,1.3,T.z+Math.sign(T.z||1)*-(T.d/2+.02)),$.rotation.y=T.z>0?Math.PI:0):($.position.set(T.x+Math.sign(T.x||1)*-(T.w/2+.02),1.3,T.z+Z*T.d/4),$.rotation.y=T.x>0?-Math.PI/2:Math.PI/2),i.add($)}}else if(T.kind==="mast"){_(new Ge(T.r*.7,T.r,T.h,8),f,T.x,T.h/2,T.z);let A=_(new qe(5,.25,.25),f,T.x,T.h*.78,T.z);A.rotation.y=Math.atan2(T.x,T.z);let W=new ne(new jt(4.2,5,4,4),new Re({color:13616820,roughness:1,side:xt}));W.position.set(T.x,T.h*.55,T.z),W.rotation.y=Math.atan2(T.x,T.z),p(W),i.add(W),s.spin.push({sail:W,ph:t()*6}),N(T.x+Math.sign(T.x)*-.6,3.2,T.z+Math.sign(T.z)*-.6,!0)}else if(T.kind==="crate"){let A=Math.max(1,Math.round(T.w*T.d/6));if(_(new qe(T.w,T.h,T.d),x,T.x,T.h/2,T.z),A>1){let W=_(new qe(1.6,1.6,1.6),x,T.x+(t()-.5)*(T.w-1.8),T.h+.8,T.z+(t()-.5)*(T.d-1.8));W.rotation.y=t()}}else if(T.kind==="boat"){let A=_(new Ge(T.w/2,T.w/2,T.d,14,1,!1,0,Math.PI),f,T.x,T.h,T.z);A.rotation.set(Math.PI/2,0,Math.PI),A.scale.set(1,1,.75),_(new qe(T.w*.9,.12,T.d*.95),d,T.x,T.h-.05,T.z);let W=_(new qe(.12,.12,4),d,T.x+.6,T.h+.2,T.z);W.rotation.y=.4}else T.kind==="post"&&(_(new Ge(T.r,T.r*1.1,T.h,8),f,T.x,T.h/2,T.z),_(new Dn(T.r+.08,.1,6,14),new Re({color:11901546,roughness:1}),T.x,1.6,T.z).rotation.x=Math.PI/2);let R=new Re({color:857124,roughness:1});for(let[T,A,W,Z]of[[-120,90,.4,1.2],[140,70,-.8,1.6],[-90,-150,1.2,1.3]]){let $=new ke,re=new ne(new qe(6,3,26),R);re.position.y=1,$.add(re);for(let Me of[-6,4]){let K=new ne(new Ge(.3,.4,18,6),R);K.position.set(0,11,Me),$.add(K)}$.position.set(T,-.5,A),$.rotation.y=W,$.scale.setScalar(Z),i.add($)}let L=new ke;L.add(new ne(new Ge(3,5,34,12),new Re({color:14209736,roughness:.9}))),L.children[0].position.y=17;let P=new ne(new ft(2.2,12,8),new Re({color:16773312,emissive:16770976,emissiveIntensity:4}));P.position.y=36,L.add(P);let S=new ne(new Gt(9,140,24,1,!0),new Tt({color:16773572,transparent:!0,opacity:.08,blending:Je,depthWrite:!1,side:xt,fog:!1}));S.geometry.translate(0,-70,0),S.rotation.z=Math.PI/2;let M=new ke;M.position.y=36,M.add(S),L.add(M),L.position.set(170,-1,-140),i.add(L),s.beam=M;let k=new Re({color:5898140,emissive:3014527,emissiveIntensity:3,roughness:.2});for(let[T,A]of Ft.harbor.orbs){let W=new ke;W.add(new ne(new Vi(.42,1),k));let Z=new kt(new Lt({map:e,color:5898140,blending:Je,depthWrite:!1,transparent:!0,opacity:.8}));Z.scale.setScalar(3.2),W.add(Z),W.position.set(T,1.2,A),i.add(W),s.orbs.push(W)}let X=220,C=new Float32Array(X*3),H=new Float32Array(X);for(let T=0;T<X;T++)C[T*3]=(t()-.5)*tt*2.2,C[T*3+1]=.4+t()*5,C[T*3+2]=(t()-.5)*tt*2.2,H[T]=t()*100;let G=new _t;G.setAttribute("position",new yt(C,3)),G.setAttribute("ph",new yt(H,1));let F=new Yn(G,new ot({transparent:!0,depthWrite:!1,blending:Je,uniforms:{time:{value:0},scale:{value:400}},vertexShader:`attribute float ph; uniform float time; uniform float scale; varying float vA;
      void main(){ vec3 p=position; p.x+=sin(time*0.2+ph)*2.5; p.y+=sin(time*0.4+ph*1.7)*0.4; p.z+=cos(time*0.17+ph*1.3)*2.5;
        vA=0.25+0.25*sin(time*0.8+ph*3.0); vec4 mv=modelViewMatrix*vec4(p,1.0);
        gl_PointSize=scale*0.6/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying float vA; void main(){ float d=length(gl_PointCoord-0.5);
      gl_FragColor=vec4(vec3(0.7,0.8,1.0), smoothstep(0.5,0.0,d)*vA*0.6); }`}));return F.frustumCulled=!1,i.add(F),s.flies=F,s.barrels=Ft.harbor.barrels.map(([T,A])=>{let W=new ke,Z=p(new ne(new Ge(.55,.5,1.3,12),new Re({color:10234658,roughness:.6})));Z.position.y=.65,W.add(Z);for(let re of[.3,1]){let Me=new ne(new Dn(.55,.04,6,16),g);Me.rotation.x=Math.PI/2,Me.position.y=re,W.add(Me)}let $=new ne(new ft(.16,8,6),new Re({color:16761402,emissive:16747034,emissiveIntensity:3}));return $.position.set(0,1.42,0),W.add($),W.position.set(T,0,A),i.add(W),W}),s.update=(T,A,W,Z=0)=>{s.barrels.forEach(($,re)=>{$.visible=!!(Z&1<<re)}),a.target.position.set(A.x,0,A.z),a.position.copy(a.target.position).addScaledVector(Ch,80),r.position.set(A.x,0,A.z),h.material.uniforms.time.value=T,F.material.uniforms.time.value=T,s.beam.rotation.y=T*.6,s.bell&&(s.bell.rotation.z=Math.sin(T*.8)*.06);for(let $ of s.spin)$.flick&&($.flick.material.opacity=.7+.15*Math.sin(T*9+$.ph)+.1*Math.sin(T*23+$.ph)),$.sail&&($.sail.rotation.x=Math.sin(T*.7+$.ph)*.08);for(let $=0;$<s.orbs.length;$++){let re=s.orbs[$];re.visible=!!(W&1<<$),re.position.y=1.2+Math.sin(T*2+$)*.18,re.rotation.y=T*1.5}},s}var o_={cave:{seed:311,fog:[465442,.011],sky:{hor:[.02,.16,.2],mid:[.01,.07,.11],top:[0,.02,.04],glow:[.25,.9,1],stars:0},hemi:[7332848,1455162,1.7],amb:[4165532,1.1],sun:[10481663,1.9],shade:.5,floor:{base:"#31464b",blob:[58,82,88],speck:[80,170,180],repeat:34},wall:7313310,rock:6260108,edge:1911856,motes:[.45,.95,1],crystal:[5104639,11824127,5898140]},temple:{seed:733,fog:[9415113,.006],sky:{hor:[.62,.62,.66],mid:[.3,.45,.68],top:[.1,.22,.48],glow:[1,.9,.7],stars:0},hemi:[12374773,6122372,.75],amb:[10466516,.3],sun:[16770752,1.45],shade:.5,floor:{base:"#aebdd0",blob:[150,168,192],speck:[215,228,245],repeat:30},wall:8363972,rock:11124182,edge:9414338,motes:[1,1,1],crystal:[16757596]}};function l_(n,e){let t=En(e);return Bn(512,(i,s)=>{i.fillStyle=n.base,i.fillRect(0,0,s,s);for(let r=0;r<360;r++){let a=t()*s,o=t()*s,l=12+t()*34,c=(t()-.5)*26;i.fillStyle=`rgba(${n.blob[0]+c},${n.blob[1]+c},${n.blob[2]+c},${.35+t()*.4})`;for(let[h,u]of[[0,0],[s,0],[-s,0],[0,s],[0,-s]])i.beginPath(),i.ellipse(a+h,o+u,l,l*(.55+t()*.4),t()*3,0,7),i.fill()}for(let r=0;r<3600;r++)i.fillStyle=`rgba(${n.speck[0]},${n.speck[1]},${n.speck[2]},${.08+t()*.16})`,i.fillRect(t()*s,t()*s,1+t()*2,1+t()*2)},n.repeat)}function c_(n,e){let t=En(e),i=new Ae(n),s=r=>Math.max(0,Math.min(255,Math.round(r*255)));return Bn(256,(r,a)=>{r.fillStyle=`rgb(${s(i.r)},${s(i.g)},${s(i.b)})`,r.fillRect(0,0,a,a);for(let o=0;o<70;o++){let l=.75+t()*.5;r.fillStyle=`rgba(${s(i.r*l)},${s(i.g*l)},${s(i.b*l)},0.55)`,r.beginPath(),r.ellipse(t()*a,t()*a,10+t()*40,6+t()*22,t()*3,0,7),r.fill()}r.strokeStyle="rgba(0,0,0,0.28)",r.lineWidth=2;for(let o=0;o<9;o++){r.beginPath();let l=t()*a,c=t()*a;r.moveTo(l,c);for(let h=0;h<4;h++)l+=(t()-.5)*70,c+=(t()-.5)*70,r.lineTo(l,c);r.stroke()}},1)}function cf(n,e,t){let i=o_[t],s=Ft[t],r=En(i.seed),a=new ke;n.add(a);let o={root:a,glowTex:e,orbs:[],spin:[],grass:null,grassMax:0,sun:null,pointLights:[]},l=new U(...s.light).normalize();o.fog=new Hi(i.fog[0],i.fog[1]);let c=C=>new U(...C),h=new ne(new ft(600,32,16),new ot({side:zt,depthWrite:!1,fog:!1,uniforms:{dir:{value:l},hor:{value:c(i.sky.hor)},mid:{value:c(i.sky.mid)},top:{value:c(i.sky.top)},glow:{value:c(i.sky.glow)}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 dir, hor, mid, top, glow;
      void main(){ vec3 d=normalize(vP); float h=d.y;
        vec3 c=mix(hor,mid,smoothstep(-0.02,0.25,h)); c=mix(c,top,smoothstep(0.2,0.8,h));
        float s=max(dot(d,dir),0.0); c+=glow*(pow(s,10.0)*0.35+pow(s,300.0)*2.5);
        gl_FragColor=vec4(c,1.0); }`}));h.renderOrder=-10,h.frustumCulled=!1,a.add(h),o.sky=h,a.add(new Gi(i.hemi[0],i.hemi[1],i.hemi[2])),a.add(new Xi(i.amb[0],i.amb[1]));let u=new Wi(i.sun[0],i.sun[1]);u.castShadow=!0,u.shadow.mapSize.set(1024,1024);let d=u.shadow.camera;d.left=-34,d.right=34,d.top=34,d.bottom=-34,d.near=1,d.far=160,u.shadow.bias=-6e-4,u.shadow.normalBias=.04,a.add(u,u.target),o.sun=u;let f=new ne(new jt(440,440),new Re({map:l_(i.floor,i.seed+1),roughness:t==="temple"?.6:.95}));Fn(f.material,2.4,.9),gr(f.material,`bake/${t}.png`,tt+8,i.shade),f.rotation.x=-Math.PI/2,f.receiveShadow=!0,a.add(f);let x=C=>(C.castShadow=!0,C.receiveShadow=!0,C),v=Fn(new Re({map:c_(i.wall,i.seed+2),roughness:t==="temple"?.35:.95,metalness:t==="temple"?.05:0}),3,1),g=new Re({color:i.rock,roughness:t==="temple"?.55:1,flatShading:!0}),p=new Re({color:i.edge,roughness:1,flatShading:!0}),_=new Re({color:14017266,roughness:.8}),E=(C,H=2.2)=>new Re({color:C,emissive:C,emissiveIntensity:H,roughness:.25}),y=(C,H,G,F,T,A)=>{let W=new kt(new Lt({map:e,color:F,blending:Je,depthWrite:!1,transparent:!0,opacity:.65}));if(W.scale.setScalar(T),W.position.set(C,H,G),a.add(W),A){let Z=new Zn(F,A,30,1.6);Z.position.set(C,H,G),a.add(Z),o.pointLights.push(Z)}},N=0;for(let C of s.obst)if(N++,C.t==="box"){let H=x(new ne(new qe(C.w,C.h,C.d),v));if(H.position.set(C.x,C.h/2,C.z),a.add(H),t==="temple"){let G=x(new ne(new qe(C.w+.3,.35,C.d+.3),_));G.position.set(C.x,C.h+.17,C.z),a.add(G)}else for(let G=0;G<3;G++){let F=x(new ne(new Ln(.9+r()*.6,0),g));F.position.set(C.x+(r()-.5)*(C.w-1),C.h+.2,C.z+(r()-.5)*(C.d-1)),F.rotation.set(r()*3,r()*3,0),a.add(F)}}else if(C.kind==="crystal"){let H=i.crystal[N%i.crystal.length],G=x(new ne(new Ge(C.r*.9,C.r*1.05,.8,7),g));G.position.set(C.x,.4,C.z),a.add(G);for(let F=0;F<4;F++){let T=C.h*(F?.45+r()*.35:1),A=x(new ne(new Gt(C.r*(F?.35:.55),T,5),E(H,1.6))),W=r()*6.28,Z=F?C.r*.55:0;A.position.set(C.x+Math.cos(W)*Z,T/2+.5,C.z+Math.sin(W)*Z),A.rotation.set((r()-.5)*(F?.7:.15),r()*3,(r()-.5)*(F?.7:.15)),a.add(A)}y(C.x,C.h*.6,C.z,H,9,N%3===0?26:0)}else if(C.kind==="rock"){let H=x(new ne(new Ln(C.r*1.12,0),g));H.scale.y=C.h/(C.r*1.6),H.position.set(C.x,C.h*.42,C.z),H.rotation.y=r()*3,a.add(H)}else if(C.kind==="column"){let H=x(new ne(new Ge(C.r*.82,C.r*.95,C.h,12),v));H.position.set(C.x,C.h/2,C.z),a.add(H);for(let F of[.35,C.h-.1]){let T=x(new ne(new qe(C.r*2.5,.7,C.r*2.5),v));T.position.set(C.x,F,C.z),a.add(T)}let G=x(new ne(new qe(C.r*2.7,.3,C.r*2.7),_));G.position.set(C.x,C.h+.4,C.z),a.add(G)}else{let H=t==="cave"?5104639:16752704,G=x(new ne(new Ge(C.r,C.r*1.15,C.h*.6,10),v));G.position.set(C.x,C.h*.3,C.z),a.add(G);let F=new ne(new fs(1.1,0),E(H,3));F.position.set(C.x,C.h+1.6,C.z),a.add(F),o.spin.push({g:F,sp:.7,y:C.h+1.6,ph:0}),y(C.x,C.h+1.6,C.z,H,12,40)}if(t==="temple")for(let C of[-1,1])for(let H of[-1,1])y(C*36,9.2,H*36,16757596,6,22);let R=tt+1.5;for(let[C,H,G,F]of[[0,R,2*R+3,3],[0,-R,2*R+3,3],[R,0,3,2*R+3],[-R,0,3,2*R+3]]){let T=x(new ne(new qe(G,t==="cave"?9:6,F),v));if(T.position.set(C,t==="cave"?4.5:3,H),a.add(T),t==="temple"){let A=new ne(new qe(G+.4,.4,F+.4),_);A.position.set(C,6.2,H),a.add(A)}}for(let C=0;C<46;C++){let H=C/46*Math.PI*2+r()*.2,G=t==="cave"?R+8+r()*60:190+r()*110,F=t==="cave"?14+r()*34:50+r()*80,T=new ne(new Gt(t==="cave"?4+r()*7:60+r()*50,F,t==="cave"?6:8,2),t==="cave"?p:g);T.position.set(Math.cos(H)*G,F/2-1,Math.sin(H)*G),a.add(T)}if(t==="cave")for(let C=0;C<60;C++){let H=(r()-.5)*tt*1.9,G=(r()-.5)*tt*1.9;if(s.obst.some(T=>Math.hypot(H-T.x,G-T.z)<(T.t==="box"?Math.hypot(T.w,T.d)/2:T.r)+1.5))continue;let F=new ne(new Gt(.16,.5+r()*.6,4),E(i.crystal[C%3],1.4));F.position.set(H,.3,G),F.rotation.set((r()-.5)*.6,r()*3,(r()-.5)*.6),a.add(F)}let L=t==="temple"?520:280,P=new Float32Array(L*3),S=new Float32Array(L);for(let C=0;C<L;C++)P[C*3]=(r()-.5)*tt*2.2,P[C*3+1]=.5+r()*(t==="temple"?16:8),P[C*3+2]=(r()-.5)*tt*2.2,S[C]=r()*100;let M=new _t;M.setAttribute("position",new yt(P,3)),M.setAttribute("ph",new yt(S,1));let k=new Yn(M,new ot({transparent:!0,depthWrite:!1,blending:t==="temple"?Ui:Je,uniforms:{time:{value:0},scale:{value:400},fall:{value:t==="temple"?1.4:0},col:{value:c(i.motes)}},vertexShader:`attribute float ph; uniform float time, scale, fall; varying float vA;
      void main(){ vec3 p=position; p.x+=sin(time*0.4+ph)*1.6; p.z+=cos(time*0.33+ph*1.3)*1.6;
        p.y=fall>0.0 ? mod(p.y-time*fall-ph*0.2,16.0)+0.2 : p.y+sin(time*0.7+ph*1.7)*0.7;
        vA=fall>0.0 ? 0.85 : 0.45+0.55*sin(time*2.0+ph*3.0); vec4 mv=modelViewMatrix*vec4(p,1.0);
        gl_PointSize=scale*(fall>0.0 ? 0.16 : 0.24)/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying float vA; uniform vec3 col; uniform float fall; void main(){ float d=length(gl_PointCoord-0.5);
      gl_FragColor=vec4(col*(fall>0.0 ? 1.0 : 2.0), smoothstep(0.5,0.0,d)*vA); }`}));k.frustumCulled=!1,a.add(k),o.flies=k;let X=new Re({color:5898140,emissive:3014527,emissiveIntensity:3,roughness:.2});for(let[C,H]of s.orbs){let G=new ke;G.add(new ne(new Vi(.42,1),X));let F=new kt(new Lt({map:e,color:5898140,blending:Je,depthWrite:!1,transparent:!0,opacity:.8}));F.scale.setScalar(3.2),G.add(F);let T=new ne(new Mn(.9,1.1,24),new Tt({color:5898140,transparent:!0,opacity:.5,blending:Je,depthWrite:!1,side:xt}));T.rotation.x=-Math.PI/2,T.position.y=-1.15,G.add(T),G.position.set(C,1.2,H),a.add(G),o.orbs.push(G)}return o.update=(C,H,G)=>{u.target.position.set(H.x,0,H.z),u.position.copy(u.target.position).addScaledVector(l,80),h.position.set(H.x,0,H.z),k.material.uniforms.time.value=C;for(let F of o.spin)F.g.rotation.y=C*F.sp,F.g.position.y=F.y+Math.sin(C*1.2+F.ph)*.25;for(let F=0;F<o.orbs.length;F++){let T=o.orbs[F];T.visible=!!(G&1<<F),T.position.y=1.2+Math.sin(C*2+F)*.18,T.rotation.y=C*1.5}},o}var Ph=Ki(new Re({color:2764100,roughness:.85})),hf=Ki(new Re({color:14263420,roughness:.7}),9078472,.3),ji=new Re({color:10133692,roughness:.35,metalness:.85}),Mo=new Re({color:5978661,roughness:.9}),xr={leg:new ds(.15,.6,3,8),arm:new ds(.11,.5,3,8),torso:new Ge(.36,.27,.85,10),head:new ft(.24,14,10),robe:new Ge(.3,.62,.95,12,1,!0),boot:new qe(.2,.14,.36)};function ut(n,e,t=0,i=0,s=0){let r=new ne(n,e);return r.position.set(t,i,s),r.castShadow=!0,r}var bo=class{constructor(e,t,i,s,r=null,a="default"){let o=pn[e],l=Yi.find(N=>N.id===a)||Yi[0],c=new Ae(l.glow??o.color);this.clsKey=e,this.isMe=i,this.name=t,this.tagColor=r!==null?"#"+r.toString(16).padStart(6,"0"):"#ffe9c4",this.phase=0,this.kick=0,this.deadT=0,this.spawnT=.4,this.lastX=0,this.lastZ=0,this.speed=0,this.shown={hp:-1,maxHp:-1,lvl:-1};let h=this.group=new ke,u=this.body=new ke;h.add(u);let d=Ki(new Re({color:l.accent!==void 0?new Ae(l.accent):c.clone().multiplyScalar(.38),roughness:.8,side:xt,metalness:l.id==="raja"||l.id==="bulan"?.5:0})),f=new Re({color:c,emissive:c,emissiveIntensity:3,roughness:.3});this.legL=new ke,this.legL.position.set(.2,1,0),this.legR=new ke,this.legR.position.set(-.2,1,0);for(let N of[this.legL,this.legR])N.add(ut(xr.leg,Ph,0,-.5,0),ut(xr.boot,Mo,0,-.93,.07)),u.add(N);let x=this.upper=new ke;u.add(x),x.add(ut(xr.torso,Ph,0,1.5,0),ut(xr.robe,d,0,1,0),ut(xr.head,hf,0,2.14,0));let v=ut(new Dn(.31,.05,6,16),ji,0,1.2,0);v.rotation.x=Math.PI/2,x.add(v);let g=ut(new jt(.75,1.15,1,3),d,0,1.3,-.33);g.rotation.x=.16,x.add(g),this.cape=g,this.armL=new ke,this.armL.position.set(.46,1.82,0),this.armR=new ke,this.armR.position.set(-.46,1.82,0);for(let N of[this.armL,this.armR])N.add(ut(xr.arm,Ph,0,-.32,0),ut(new ft(.1,8,6),hf,0,-.68,0)),x.add(N);let p=this.weapon=new ke;p.position.set(-.46,1.62,.55),x.add(p);let _=.7,E=0;if(e==="ranger"){let N=ut(new ft(.3,14,10,0,Math.PI*2,0,Math.PI*.62),d,0,2.17,-.03);x.add(N),p.add(ut(new qe(.09,.1,.95),Mo,0,0,.1));let R=ut(new Dn(.42,.035,6,14,Math.PI),ji,0,0,.45);R.rotation.set(Math.PI/2,0,0),p.add(R);let L=ut(new Ge(.03,.03,.7,6),f,0,.07,.3);L.rotation.x=Math.PI/2,p.add(L)}else if(e==="mage"){x.add(ut(new Ge(.48,.48,.04,16),d,0,2.32,0));let N=ut(new Gt(.3,.8,12),d,0,2.72,-.04);N.rotation.x=-.18,x.add(N),p.add(ut(new Ge(.045,.055,2.1,8),Mo,0,.15,0)),p.add(ut(new ft(.19,12,10),f,0,1.32,0));let R=ut(new Dn(.22,.03,6,12,Math.PI*1.4),ji,0,1.3,0);R.rotation.z=-.7,p.add(R),_=0,E=1.32}else if(e==="priest"){let N=ut(new Dn(.27,.035,8,20),f,0,2.55,0);N.rotation.x=Math.PI/2,x.add(N),x.add(ut(new qe(.16,.9,.05),f,0,1.45,.3)),p.add(ut(new Ge(.04,.05,2,8),Mo,0,.1,0));let R=ut(new Ge(.24,.24,.05,12),f,0,1.25,0);R.rotation.x=Math.PI/2,p.add(R);for(let L=0;L<8;L++){let P=ut(new Gt(.04,.16,4),f,Math.cos(L*.785)*.33,1.25+Math.sin(L*.785)*.33,0);P.rotation.z=L*.785-Math.PI/2,p.add(P)}_=0,E=1.25}else{x.add(ut(new ft(.29,14,10,0,Math.PI*2,0,Math.PI*.6),ji,0,2.18,0));for(let P of[-1,1]){let S=ut(new Gt(.07,.34,6),ji,P*.27,2.4,0);S.rotation.z=-P*.6,x.add(S),x.add(ut(new ft(.2,10,8),ji,P*.48,1.86,0))}let N=ut(new Ge(.15,.19,.85,10),ji,0,0,.15);N.rotation.x=Math.PI/2,p.add(N);let R=ut(new Dn(.2,.045,6,16),f,0,0,.5);p.add(R);let L=ut(new Ge(.5,.5,.07,6),ji,.72,1.5,.28);L.rotation.set(Math.PI/2,0,.2),x.add(L),x.add(ut(new ar(.2,6),f,.72,1.5,.33)),_=.62}this.tip=new It,this.tip.position.set(0,E,_),p.add(this.tip),this.tipGlow=new kt(new Lt({map:s,color:c,blending:Je,depthWrite:!1,transparent:!0,opacity:.8})),this.tipGlow.scale.setScalar(.9),this.tip.add(this.tipGlow),this.armR.rotation.x=-1.3,this.bubble=new ne(new ft(1.55,20,14),new Tt({color:c,transparent:!0,opacity:.22,blending:Je,depthWrite:!1})),this.bubble.position.y=1.3,this.bubble.visible=!1,h.add(this.bubble);let y=new ne(new ar(.75,16),new Tt({color:0,transparent:!0,opacity:.35,depthWrite:!1}));if(y.rotation.x=-Math.PI/2,y.position.y=.03,h.add(y),this.blob=y,r!==null&&(this.ring=new ne(new Mn(.8,1,32),new Tt({color:r,transparent:!0,opacity:.85,blending:Je,depthWrite:!1,side:xt})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.05,h.add(this.ring)),!i){let N=this.tagCanvas=document.createElement("canvas");N.width=256,N.height=64,this.tagTex=new xi(N),this.tagTex.colorSpace=Ot,this.tag=new kt(new Lt({map:this.tagTex,transparent:!0,depthWrite:!1,fog:!1})),this.tag.scale.set(3.4,.85,1),this.tag.position.y=3.25,this.tag.renderOrder=5,h.add(this.tag)}}setInfo(e,t,i,s=!1){let r=this.shown;if(!this.tag||r.hp===e&&r.maxHp===t&&r.lvl===i&&r.b===s)return;r.hp=e,r.maxHp=t,r.lvl=i,r.b=s;let a=this.tagCanvas.getContext("2d");a.clearRect(0,0,256,64),a.font="600 24px Georgia, serif",a.textAlign="center",a.textBaseline="middle",a.lineWidth=4,a.strokeStyle="rgba(0,0,0,0.85)";let o=`${s?"\u2605 ":""}${this.name}  Lv${i}`;a.strokeText(o,128,20),a.fillStyle=this.tagColor,a.fillText(o,128,20),a.fillStyle="rgba(0,0,0,0.7)",a.fillRect(38,40,180,14);let l=Math.max(0,e/t);a.fillStyle=l>.5?"#ff5d5d":l>.25?"#ff9a3d":"#ffd23d",a.fillRect(40,42,176*l,10),this.tagTex.needsUpdate=!0}fireKick(){this.kick=1}tipWorld(e){return this.tip.getWorldPosition(e)}update(e,t,i,s,r,a){let o=r&1,l=this.group,c=t-this.lastX,h=i-this.lastZ,u=e>0?Math.min(40,Math.hypot(c,h)/e):0;this.speed+=(u-this.speed)*Math.min(1,e*12),this.lastX=t,this.lastZ=i,l.position.set(t,0,i),l.rotation.y=s;let d=Math.min(1,this.speed/6);this.phase+=this.speed*e*1.35;let f=Math.sin(this.phase)*.75*d,x=u>.01?(c*Math.sin(s)+h*Math.cos(s))/(u*e||1):0,v=u>.01?(-c*Math.cos(s)+h*Math.sin(s))/(u*e||1):0;this.legL.rotation.x=f,this.legR.rotation.x=-f,this.legL.rotation.z=this.legR.rotation.z=v*.25*d*Math.sin(this.phase),this.armL.rotation.x=-f*.7,this.body.position.y=Math.abs(Math.sin(this.phase))*.07*d+Math.sin(a*2)*.012,this.upper.rotation.x=.13*d*x,this.upper.rotation.z=-.1*d*v,this.cape.rotation.x=.16+.5*d*Math.max(0,x)+Math.sin(a*3+this.phase)*.04,this.kick=Math.max(0,this.kick-e*7),this.weapon.position.z=.55-this.kick*.22,this.armR.rotation.x=-1.3-this.kick*.25,this.tipGlow.scale.setScalar(.7+this.kick*1.2+Math.sin(a*5)*.08),o?(this.deadT=Math.min(1,this.deadT+e*2.6),this.spawnT=0):(this.deadT>0&&(this.deadT=0,this.spawnT=0),this.spawnT=Math.min(.4,this.spawnT+e));let g=this.deadT*this.deadT*(3-2*this.deadT);this.body.rotation.x=-g*1.5,this.body.position.y+=g*.25;let p=o?1:.4+1.5*this.spawnT;l.scale.setScalar(Math.min(1,p)*(this.big||1)),this.tag&&(this.tag.visible=!o),this.blob.visible=!o,this.ring&&(this.ring.visible=!o);let _=r&2,E=r&4;if(this.bubble.visible=!!(_||E)&&!o,r&64&&!o){if(!this.crown){this.crown=new ke;let y=new Re({color:16764746,emissive:16753178,emissiveIntensity:1.6,metalness:.8,roughness:.3});this.crown.add(new ne(new Ge(.32,.36,.18,10,1,!0),y));for(let N=0;N<5;N++){let R=new ne(new Gt(.07,.24,5),y),L=N/5*Math.PI*2;R.position.set(Math.cos(L)*.32,.18,Math.sin(L)*.32),this.crown.add(R)}this.crown.position.y=2.95,this.group.add(this.crown)}this.crown.visible=!0,this.crown.rotation.y=a*1.5,this.crown.position.y=2.95+Math.sin(a*3)*.06}else this.crown&&(this.crown.visible=!1);this.bubble.visible&&(this.bubble.material.opacity=_?.2+.08*Math.sin(a*9):.1+.08*Math.sin(a*18),this.bubble.rotation.y=a*1.5,this.bubble.scale.setScalar(_?1:.85))}dispose(e){e.remove(this.group),this.tagTex&&(this.tagTex.dispose(),this.tag.material.dispose())}},Eo=class{constructor(e,t){this.kind=e,this.phase=0,this.kick=0,this.deadT=0,this.lastX=0,this.lastZ=0,this.speed=0;let i=this.group=new ke,s=this.body=new ke;i.add(s);let r=(h,u,d=0,f=0,x=0)=>{let v=new ne(h,u);return v.position.set(d,f,x),v.castShadow=!0,s.add(v),v},a=h=>new Re({color:h,emissive:h,emissiveIntensity:4});if(e==="ghoul"){let h=Ki(new Re({color:4018752,roughness:.9})),u=r(new ft(.5,12,10),h,0,1.2,-.1);u.scale.set(1,1.2,.9),u.rotation.x=.6,r(new ft(.3,12,10),h,0,1.75,.35);for(let d of[-1,1])r(new ft(.06,8,6),a(9174890),d*.12,1.8,.62);this.armL=new ke,this.armL.position.set(.45,1.45,.1),this.armR=new ke,this.armR.position.set(-.45,1.45,.1);for(let d of[this.armL,this.armR]){let f=new ne(new ds(.09,.95,3,8),h);f.position.y=-.55,f.castShadow=!0,d.add(f),d.rotation.x=-.5,s.add(d)}this.legL=new ke,this.legL.position.set(.22,.75,0),this.legR=new ke,this.legR.position.set(-.22,.75,0);for(let d of[this.legL,this.legR]){let f=new ne(new ds(.12,.5,3,8),h);f.position.y=-.38,f.castShadow=!0,d.add(f),s.add(d)}this.tipY=1.4}else if(e==="caster"||e==="frost"){let h=e==="frost"?8378623:13134847,u=Ki(new Re({color:e==="frost"?1715268:2366003,roughness:.8,side:xt}));r(new Gt(.6,1.8,12,1,!0),u,0,1.15,0);let d=r(new ft(.34,12,10,0,Math.PI*2,0,Math.PI*.6),u,0,2.05,0);d.rotation.x=-.2;for(let x of[-1,1])r(new ft(.05,8,6),a(h),x*.1,1.98,.27);this.orb=r(new ft(.2,12,10),a(h),.45,1.5,.45);let f=new kt(new Lt({map:t,color:h,blending:Je,depthWrite:!1,transparent:!0,opacity:.8}));f.scale.setScalar(1.6),this.orb.add(f),this.tipY=1.5}else if(e==="spiderling"||e==="queen"){let h=e==="queen",u=h?2.4:.75;this.baseScale=u;let d=Ki(new Re({color:h?3804956:2761264,roughness:.6}));r(new ft(.55,12,10),d,0,.7,-.45).scale.set(1,.85,1.25),r(new ft(.32,12,10),d,0,.6,.3),h&&r(new qe(.5,.06,.7),a(16723546),0,1.17,-.45);for(let x of[-1,1])r(new ft(.06,8,6),a(16726843),x*.12,.72,.56),r(new ft(.04,8,6),a(16726843),x*.22,.66,.5);this.spLegs=[];for(let x of[-1,1])for(let v=0;v<4;v++){let g=new ke;g.position.set(x*.25,.6,.25-v*.22),g.rotation.y=x*(.5-v*.35);let p=new ne(new Ge(.035,.02,.9,5),d);p.position.set(x*.4,-.12,0),p.rotation.z=x*1,p.castShadow=!0,g.add(p),s.add(g),this.spLegs.push(g)}s.scale.setScalar(u),this.tipY=.7*u}else{let h=Ki(new Re({color:7036242,roughness:1,flatShading:!0})),u=a(16747050);r(new Ln(1.1,0),h,0,2.3,0).scale.set(1.2,1,.9),r(new qe(.9,.12,.1),u,0,2.3,.85),r(new Ln(.5,0),h,0,3.45,.15);for(let f of[-1,1])r(new ft(.09,8,6),u,f*.2,3.5,.55);this.armL=new ke,this.armL.position.set(1.35,2.8,0),this.armR=new ke,this.armR.position.set(-1.35,2.8,0);for(let f of[this.armL,this.armR]){let x=new ne(new Ln(.55,0),h);x.position.y=-1.2,x.castShadow=!0,f.add(x);let v=new ne(new qe(.5,1.1,.5),h);v.position.y=-.5,v.castShadow=!0,f.add(v),s.add(f)}this.legL=new ke,this.legL.position.set(.6,1.3,0),this.legR=new ke,this.legR.position.set(-.6,1.3,0);for(let f of[this.legL,this.legR]){let x=new ne(new qe(.65,1.3,.65),h);x.position.y=-.65,x.castShadow=!0,f.add(x),s.add(f)}this.tipY=2.4}this.tip=new It,this.tip.position.set(0,this.tipY,.6),s.add(this.tip);let o=e==="brute"||e==="queen",l=new ne(new ar(o?1.6:.75,16),new Tt({color:0,transparent:!0,opacity:.35,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.03,i.add(l),this.blob=l;let c=this.tagCanvas=document.createElement("canvas");c.width=128,c.height=16,this.tagTex=new xi(c),this.tag=new kt(new Lt({map:this.tagTex,transparent:!0,depthWrite:!1,fog:!1})),this.tag.scale.set(o?3.2:1.6,o?.4:.2,1),this.tag.position.y=e==="brute"?4.3:e==="queen"?3.4:e==="spiderling"?1.3:2.5,this.tag.renderOrder=5,i.add(this.tag),this.shown=-1}setInfo(e,t){let i=Math.max(0,e/t);if(Math.abs(i-this.shown)<.01)return;this.shown=i;let s=this.tagCanvas.getContext("2d");s.clearRect(0,0,128,16),s.fillStyle="rgba(0,0,0,.7)",s.fillRect(0,0,128,16),s.fillStyle=this.kind==="brute"||this.kind==="queen"?"#ff8a2a":"#ff5d5d",s.fillRect(2,2,124*i,12),this.tagTex.needsUpdate=!0}fireKick(){this.kick=1,this.windT=0}windup(e){this.windT=e,this.windMax=e}tipWorld(e){return this.tip.getWorldPosition(e)}update(e,t,i,s,r,a){let o=r&1,l=this.group;this.windT=Math.max(0,(this.windT||0)-e);let c=this.windT>0?1-this.windT/this.windMax:0,h=e>0?Math.min(30,Math.hypot(t-this.lastX,i-this.lastZ)/e):0;this.speed+=(h-this.speed)*Math.min(1,e*10),this.lastX=t,this.lastZ=i,l.position.set(t,0,i),l.rotation.y=s;let u=Math.min(1,this.speed/5);this.phase+=this.speed*e*(this.kind==="brute"?.7:1.4);let d=Math.sin(this.phase)*.7*u;this.legL&&(this.legL.rotation.x=d,this.legR.rotation.x=-d),this.kick=Math.max(0,this.kick-e*4),this.armL&&(this.armL.rotation.x=(this.kind==="ghoul"?-.5:0)-d*.6-this.kick*1.6-c*2.4,this.armR.rotation.x=(this.kind==="ghoul"?-.5:0)+d*.6-this.kick*1.6-c*2.4),this.body.scale.setScalar((this.baseScale||1)*(1+c*.15)),this.spLegs&&this.spLegs.forEach((f,x)=>{f.rotation.x=Math.sin(this.phase*2+x*1.7)*.35*u}),this.body.traverse(f=>{f.material&&f.material.emissive&&!f.userData.glow&&(f.userData.base??=f.material.emissive.getHex(),f.material.emissive.setHex(c>0&&Math.sin(a*40)>0?6689041:f.userData.base))}),this.orb?(this.body.position.y=.25+Math.sin(a*2.5)*.12,this.orb.position.y=1.5+Math.sin(a*4)*.08):this.body.position.y=Math.abs(Math.sin(this.phase))*.06*u,this.deadT=o?Math.min(1,this.deadT+e*2):0,this.body.rotation.x=-this.deadT*1.4,this.body.position.y-=this.deadT*.3,l.scale.setScalar(1-this.deadT*.4),this.tag.visible=!o,this.blob.visible=!o}dispose(e){e.remove(this.group),this.tagTex.dispose(),this.tag.material.dispose()}};var jn=1800,Qi=1.55,So=class{constructor(e,t){this.scene=e,this.glowTex=t,this.pos=new Float32Array(jn*3),this.col=new Float32Array(jn*4),this.size=new Float32Array(jn),this.vel=new Float32Array(jn*3),this.life=new Float32Array(jn),this.max=new Float32Array(jn),this.base=new Float32Array(jn*4),this.grav=new Float32Array(jn),this.cursor=0;let i=new _t;i.setAttribute("position",new yt(this.pos,3).setUsage(ho)),i.setAttribute("pcolor",new yt(this.col,4).setUsage(ho)),i.setAttribute("psize",new yt(this.size,1).setUsage(ho)),this.points=new Yn(i,new ot({transparent:!0,depthWrite:!1,blending:Je,uniforms:{scale:{value:400}},vertexShader:`attribute vec4 pcolor; attribute float psize; uniform float scale; varying vec4 vC;
        void main(){ vC=pcolor; vec4 mv=modelViewMatrix*vec4(position,1.0);
          gl_PointSize=min(180.0, psize*scale/-mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying vec4 vC; void main(){ float d=length(gl_PointCoord-0.5)*2.0;
        float a=smoothstep(1.0,0.0,d); gl_FragColor=vec4(vC.rgb*(1.0+a), a*a*vC.a); }`})),this.points.frustumCulled=!1,this.points.renderOrder=4,e.add(this.points),this.projs=new Map,this.spritePool=[],this.rings=[],this.lights=[];for(let s=0;s<3;s++){let r=new Zn(16777215,0,16,1.8);r.userData.t=0,e.add(r),this.lights.push(r)}this.lightsOn=!0,this.tmpC=new Ae}particle(e,t,i,s,r,a,o,l,c,h=0,u=1){let d=this.cursor;this.cursor=(d+1)%jn;let f=this.tmpC.set(o);this.pos[d*3]=e,this.pos[d*3+1]=t,this.pos[d*3+2]=i,this.vel[d*3]=s,this.vel[d*3+1]=r,this.vel[d*3+2]=a,this.base[d*4]=f.r,this.base[d*4+1]=f.g,this.base[d*4+2]=f.b,this.base[d*4+3]=u,this.size[d]=l,this.life[d]=c,this.max[d]=c,this.grav[d]=h}burst(e,t,i,s,r,a,o,l,c=6){for(let h=0;h<r;h++){let u=Math.random()*6.283,d=(Math.random()-.3)*2,f=a*(.3+Math.random()*.7);this.particle(e,t,i,Math.cos(u)*f,d*f*.7,Math.sin(u)*f,s,o*(.5+Math.random()),l*(.5+Math.random()*.5),c)}}flash(e,t,i,s,r){if(!this.lightsOn)return;let a=this.lights[0];for(let o of this.lights)o.userData.t<a.userData.t&&(a=o);a.position.set(e,t,i),a.color.set(s),a.userData.t=1,a.userData.i=r,a.intensity=r}ring(e,t,i,s,r=.5){let a=new ne(new Mn(.82,1,48),new Tt({color:i,transparent:!0,blending:Je,depthWrite:!1,side:xt}));a.rotation.x=-Math.PI/2,a.position.set(e,.25,t),this.scene.add(a),this.rings.push({m:a,t:0,life:r,radius:s})}spawnProj(e,t,i,s,r){let a=yi[t],o=this.spritePool.pop()||new kt(new Lt({map:this.glowTex,blending:Je,depthWrite:!1,transparent:!0}));o.material.color.set(a.color);let l=t==="mage"?3:t==="ranger"?1.5:1;o.scale.setScalar(l),o.position.set(i,Qi,s),o.visible=!0,this.scene.add(o),this.projs.set(e,{s:o,x:i,z:s,dx:Math.sin(r),dz:Math.cos(r),sp:a.projSpeed,life:a.projLife+.1,color:a.color,cls:t,sc:l})}removeProj(e){let t=this.projs.get(e);t&&(this.scene.remove(t.s),this.spritePool.push(t.s),this.projs.delete(e))}impact(e,t,i){let s=yi[i]||yi.ranger;s.splash>0?(this.burst(e,Qi,t,s.color,46,11,1.5,.7),this.burst(e,Qi,t,16770720,14,5,2.4,.35,0),this.ring(e,t,s.color,s.splash,.4),this.flash(e,Qi+.5,t,s.color,60)):(this.burst(e,Qi,t,s.color,9,6,.8,.35),this.flash(e,Qi,t,s.color,14))}muzzle(e,t,i){let s=yi[t],r=Math.sin(i),a=Math.cos(i);for(let o=0;o<6;o++){let l=4+Math.random()*7;this.particle(e.x,e.y,e.z,r*l+(Math.random()-.5)*3,(Math.random()-.5)*3,a*l+(Math.random()-.5)*3,s.color,.9,.18,0)}this.flash(e.x,e.y,e.z,s.color,10)}nova(e,t,i,s){this.ring(e,t,i,s,.55),this.ring(e,t,16777215,s*.7,.4);for(let r=0;r<70;r++){let a=r/70*6.283,o=s*2.2*(.7+Math.random()*.4);this.particle(e,.5+Math.random()*1.5,t,Math.cos(a)*o,2+Math.random()*4,Math.sin(a)*o,i,1.8,.55,5)}this.flash(e,2,t,i,120)}pillar(e,t,i){for(let s=0;s<44;s++){let r=Math.random()*6.283,a=.5+Math.random()*.6;this.particle(e+Math.cos(r)*a,Math.random()*.5,t+Math.sin(r)*a,0,4+Math.random()*6,0,i,1.1,.9,-1)}this.ring(e,t,i,2.6,.6)}update(e){let{pos:t,vel:i,life:s,max:r,col:a,base:o,grav:l}=this;for(let h=0;h<jn;h++){if(s[h]<=0)continue;s[h]-=e;let u=h*3,d=h*4;if(s[h]<=0){a[d+3]=0;continue}i[u+1]-=l[h]*e,t[u]+=i[u]*e,t[u+1]+=i[u+1]*e,t[u+2]+=i[u+2]*e,t[u+1]<.05&&(t[u+1]=.05,i[u+1]*=-.3);let f=s[h]/r[h];a[d]=o[d],a[d+1]=o[d+1],a[d+2]=o[d+2],a[d+3]=o[d+3]*f}let c=this.points.geometry;c.attributes.position.needsUpdate=!0,c.attributes.pcolor.needsUpdate=!0,c.attributes.psize.needsUpdate=!0;for(let[h,u]of this.projs){let d=u.sp*e;if(u.x+=u.dx*d,u.z+=u.dz*d,u.life-=e,u.life<=0||Ji(u.x,u.z,.1)){this.removeProj(h);continue}u.s.position.set(u.x,Qi,u.z),u.s.scale.setScalar(u.sc*(.9+Math.random()*.25));let f=u.cls==="mage"?3:1;for(let x=0;x<f;x++){let v=Math.random()*d;this.particle(u.x-u.dx*v+(Math.random()-.5)*.2,Qi+(Math.random()-.5)*.2,u.z-u.dz*v+(Math.random()-.5)*.2,(Math.random()-.5)*1.2,Math.random()*1.2,(Math.random()-.5)*1.2,u.color,u.sc*.55,u.cls==="mage"?.45:.22,-1,.8)}}for(let h=this.rings.length-1;h>=0;h--){let u=this.rings[h];u.t+=e;let d=u.t/u.life;if(d>=1){this.scene.remove(u.m),u.m.geometry.dispose(),u.m.material.dispose(),this.rings.splice(h,1);continue}let f=1-(1-d)*(1-d);u.m.scale.setScalar(.3+f*u.radius),u.m.material.opacity=(1-d)*.9}for(let h of this.lights)h.userData.t>0&&(h.userData.t=Math.max(0,h.userData.t-e*6),h.intensity=h.userData.i*h.userData.t)}};var ce={jx:0,jy:0,yaw:0,fire:!1,skillQueued:!1,ultQueued:!1,touch:!1,sens:1,enabled:!1,showScore:!1},rn=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;function uf(n){ce.touch=rn;let e={},t=()=>{ce.jx=(e.KeyD||e.ArrowRight?1:0)-(e.KeyA||e.ArrowLeft?1:0),ce.jy=(e.KeyW||e.ArrowUp?1:0)-(e.KeyS||e.ArrowDown?1:0)};addEventListener("keydown",_=>{!ce.enabled||_.target.tagName==="INPUT"||(e[_.code]=!0,t(),(_.code==="Space"||_.code==="ShiftLeft"||_.code==="KeyE")&&(ce.skillQueued=!0,_.preventDefault()),(_.code==="KeyQ"||_.code==="KeyR")&&(ce.ultQueued=!0),_.code==="Tab"&&(ce.showScore=!0,_.preventDefault()))}),addEventListener("keyup",_=>{e[_.code]=!1,t(),_.code==="Tab"&&(ce.showScore=!1)}),addEventListener("blur",()=>{for(let _ in e)e[_]=!1;t(),ce.fire=!1});let i=null;n.touchLayer.addEventListener("mousedown",_=>{if(ce.enabled){if(document.pointerLockElement!==n.canvas)try{n.canvas.requestPointerLock?.()?.catch?.(()=>{})}catch{}i=_.clientX,_.button===0&&(ce.fire=!0),_.button===2&&(ce.skillQueued=!0)}}),addEventListener("mouseup",_=>{_.button===0&&i!==null&&(ce.fire=!1),_.button===0&&(i=null)}),addEventListener("mousemove",_=>{ce.enabled&&(document.pointerLockElement===n.canvas?ce.yaw-=_.movementX*.0026*ce.sens:_.buttons&&i!==null&&(ce.yaw-=(_.clientX-i)*.0045*ce.sens,i=_.clientX))}),n.touchLayer.addEventListener("contextmenu",_=>_.preventDefault());let s=n.stick,r=n.knob,a=null,o=0,l=0,c=null,h=0,u=null,d=0,f=56,x=(_,E)=>{let y=_-o,N=E-l,R=Math.hypot(y,N);if(R>f&&(y*=f/R,N*=f/R),r.style.transform=`translate(${y}px,${N}px)`,Math.min(1,R/f)<.12){ce.jx=0,ce.jy=0;return}ce.jx=y/f,ce.jy=-N/f},v=()=>.0062*ce.sens*(900/Math.max(500,innerWidth))**.5;n.touchLayer.addEventListener("touchstart",_=>{if(ce.enabled){_.preventDefault();for(let E of _.changedTouches)E.clientX<innerWidth*.45&&a===null?(a=E.identifier,o=E.clientX,l=E.clientY,s.style.left=o+"px",s.style.top=l+"px",s.classList.add("on"),x(o,l)):c===null&&(c=E.identifier,h=E.clientX)}},{passive:!1});let g=_=>{if(ce.enabled){_.preventDefault();for(let E of _.changedTouches)E.identifier===a?x(E.clientX,E.clientY):E.identifier===c?(ce.yaw-=(E.clientX-h)*v(),h=E.clientX):E.identifier===u&&(ce.yaw-=(E.clientX-d)*v(),d=E.clientX)}},p=_=>{for(let E of _.changedTouches)E.identifier===a?(a=null,ce.jx=0,ce.jy=0,s.classList.remove("on"),r.style.transform=""):E.identifier===c?c=null:E.identifier===u&&(u=null,ce.fire=!1,n.fireBtn.classList.remove("on"))};addEventListener("touchmove",g,{passive:!1}),addEventListener("touchend",p),addEventListener("touchcancel",p),n.fireBtn.addEventListener("touchstart",_=>{if(_.preventDefault(),_.stopPropagation(),!ce.enabled||u!==null)return;let E=_.changedTouches[0];u=E.identifier,d=E.clientX,ce.fire=!0,n.fireBtn.classList.add("on")},{passive:!1}),n.skillBtn.addEventListener("touchstart",_=>{_.preventDefault(),_.stopPropagation(),ce.enabled&&(ce.skillQueued=!0)},{passive:!1}),n.skillBtn.addEventListener("mousedown",_=>{_.stopPropagation(),ce.enabled&&(ce.skillQueued=!0)}),n.ultBtn.addEventListener("touchstart",_=>{_.preventDefault(),_.stopPropagation(),ce.enabled&&(ce.ultQueued=!0)},{passive:!1}),n.ultBtn.addEventListener("mousedown",_=>{_.stopPropagation(),ce.enabled&&(ce.ultQueued=!0)}),ce.reset=()=>{a=c=u=null,ce.jx=ce.jy=0,ce.fire=!1,ce.skillQueued=!1,ce.ultQueued=!1,s.classList.remove("on"),r.style.transform="",n.fireBtn.classList.remove("on")}}var Be=null,Lh=null,To=null,mf=null,jr=null,Uh=null,gf={music:.6,sfx:.8},Dh=n=>(gf[n]/(n==="music"?.6:.8))**2,Nh=!1;function h_(n){let e=n.createDynamicsCompressor();e.threshold.value=-14,e.knee.value=10,e.ratio.value=6,e.attack.value=.003,e.release.value=.12,e.connect(n.destination);let t=n.createGain();t.gain.value=.5,t.connect(e);let i=n.createGain(),s=n.createGain();i.gain.value=Dh("sfx"),s.gain.value=Dh("music"),i.connect(t),s.connect(t);let r=n.createBuffer(1,Math.floor(n.sampleRate*.6),n.sampleRate),a=r.getChannelData(0);for(let u=0;u<a.length;u++)a[u]=Math.random()*2-1;let o=n.createGain(),l=n.createDelay(.5),c=n.createGain(),h=n.createBiquadFilter();return l.delayTime.value=.13,c.gain.value=.38,h.type="lowpass",h.frequency.value=2600,o.connect(l),l.connect(h),h.connect(c),c.connect(l),h.connect(i),{m:t,nb:r,ein:o,sb:i,mb:s}}function kh(){if(Be){Be.state==="suspended"&&Be.resume();return}let n=window.AudioContext||window.webkitAudioContext;n&&(Be=new n,{m:Lh,nb:To,ein:mf,sb:jr,mb:Uh}=h_(Be))}function xf(n){Nh=n,Lh&&(Lh.gain.value=n?0:.5)}function Ao(n,e){gf[n]=Math.max(0,Math.min(1,Number(e)||0));let t=n==="music"?Uh:jr;t&&t.gain.setTargetAtTime(Dh(n),Be.currentTime,.05)}function vf(n){Be&&(n?Be.resume():Be.suspend())}var _f=()=>!!Be&&Be.state==="running",On=n=>1+(Math.random()*2-1)*n;function u_(n,e,t=0,i=1){let s=Be.createGain();if(s.gain.value=n*i,e){let r=Be.createBiquadFilter();r.type="lowpass",r.frequency.value=500+5500*Math.min(1,n)**1.5,s.connect(r),r.connect(jr)}else s.connect(jr);if(t){let r=Be.createGain();r.gain.value=t,s.connect(r),r.connect(mf)}return s}function at(n,e,t,i,s,r,a=0,o=.004){let l=Be.currentTime+a,c=Be.createOscillator(),h=Be.createGain();c.type=e,c.frequency.setValueAtTime(t,l),c.frequency.exponentialRampToValueAtTime(Math.max(20,i),l+s),h.gain.setValueAtTime(1e-4,l),h.gain.linearRampToValueAtTime(r,l+o),h.gain.exponentialRampToValueAtTime(8e-4,l+s),c.connect(h),h.connect(n),c.start(l),c.stop(l+s+.02)}function Wt(n,e,t,i,s=i,r=1,a=0,o=.003,l="bandpass"){let c=Be.currentTime+a,h=Be.createBufferSource(),u=Be.createBiquadFilter(),d=Be.createGain();h.buffer=To,u.type=l,u.Q.value=r,u.frequency.setValueAtTime(i,c),u.frequency.exponentialRampToValueAtTime(Math.max(30,s),c+e),d.gain.setValueAtTime(1e-4,c),d.gain.linearRampToValueAtTime(t,c+o),d.gain.exponentialRampToValueAtTime(8e-4,c+e),h.connect(u),u.connect(d),d.connect(n),h.start(c,Math.random()*.08),h.stop(c+e+.02)}function ys(n,e,t,i,s=0){at(n,"sine",e,e,t,i,s,.002),at(n,"sine",e*2.76,e*2.76,t*.55,i*.4,s,.002),at(n,"sine",e*5.4,e*5.4,t*.25,i*.22,s,.001)}var df={ranger(n){let e=On(.06);Wt(n,.022,.2,5200,5200,.8,0,.001,"highpass"),at(n,"triangle",920*e,610*e,.075,.2,0,.002),at(n,"sine",2500*e,1700*e,.13,.07,.01),Wt(n,.15*On(.15),.1,2300,6200,1.6,.012,.02)},mage(n){let e=On(.08);at(n,"sine",120*e,44,.24,.3,0,.006),Wt(n,.36*On(.1),.24,260*e,1500,.7,0,.035),at(n,"sawtooth",190*e,72,.26,.07,0,.02);for(let t=0;t<3;t++)Wt(n,.025,.09,3400*On(.3),3400,2,.05+Math.random()*.22,.001,"highpass")},guardian(n){let e=On(.07);at(n,"sine",165*e,40,.17,.42,0,.002),Wt(n,.1,.3,620*e,240,.7,0,.001),Wt(n,.03,.14,2600,2600,1.2,0,.001),at(n,"triangle",196*e,185*e,.24,.07,.02,.02),at(n,"triangle",294*e,280*e,.2,.045,.02,.02)},priest(n){ys(n,1046.5*[1,1.125,1.25,1.5][Math.floor(Math.random()*4)],.34,.15),Wt(n,.02,.05,4200,4200,1,0,.001,"highpass")},caster(n){Wt(n,.16,.16,900,2600,1.4,0,.02),at(n,"sawtooth",420*On(.08),180,.16,.1,0,.01)},frost(n){at(n,"sine",1900*On(.06),880,.18,.12),Wt(n,.14,.09,4600,7e3,2,0,.01,"highpass")},hit(n){let e=On(.04);Wt(n,.018,.12,3800,3800,1,0,.001,"highpass"),at(n,"triangle",1320*e,1320*e,.05,.17,0,.001),at(n,"sine",1980*e,1980*e,.09,.12,.022,.002)},hurt(n){at(n,"sine",170,58,.15,.34,0,.002),Wt(n,.08,.2,820*On(.15),300,.8,0,.001),at(n,"sawtooth",230,95,.13,.08)},kill(n){ys(n,659.3,.22,.16),ys(n,987.8,.3,.16,.08),ys(n,1318.5,.42,.13,.16)},death(n){at(n,"sawtooth",300,46,.75,.22,0,.01),at(n,"sine",150,38,.8,.22),Wt(n,.6,.1,900,120,.6,0,.02)},boom(n){at(n,"sine",125,30,.5,.42,0,.003),Wt(n,.55,.38,1100,90,.5,0,.004,"lowpass"),Wt(n,.05,.2,2400,2400,.8,0,.001);for(let e=0;e<4;e++)Wt(n,.03,.07,2800*On(.3),2800,2,.1+Math.random()*.35,.001,"highpass")},dash(n){Wt(n,.2,.24,700,5200,1.1,0,.015),at(n,"sine",560,1900,.16,.1,0,.01),at(n,"triangle",1400,2800,.1,.05,.05)},nova(n){at(n,"sine",70,520,.14,.16,0,.02),Wt(n,.14,.1,300,2400,1.2,0,.03),at(n,"sine",140,34,.45,.4,.12,.003),Wt(n,.5,.34,1600,110,.5,.12,.004,"lowpass"),at(n,"sawtooth",320,80,.3,.07,.12)},shield(n){at(n,"sine",110,110,.5,.2,0,.03),at(n,"sine",330,660,.3,.17,0,.02),at(n,"triangle",495,990,.32,.09,.03,.02),ys(n,1320,.4,.07,.2),Wt(n,.25,.06,3e3,6e3,2,0,.05)},heal(n){at(n,"sine",261.6,261.6,.7,.12,0,.08),at(n,"sine",392,392,.7,.08,0,.1),[523.3,659.3,784,1046.5].forEach((e,t)=>ys(n,e,.5,.11,t*.075))},orb(n){at(n,"sine",700,1400,.2,.16),at(n,"sine",1050,2100,.2,.07,.03)},level(n){[523.3,659.3,784,1046.5].forEach((e,t)=>{at(n,"triangle",e,e,.22,.14,t*.08),ys(n,e*2,.3,.05,t*.08)})}},d_={ranger:2.6,mage:1.5,guardian:1.8,priest:1.4,caster:2.2,frost:1.6,hit:2.6,hurt:2.2,dash:2.6,orb:1.6,nova:.75,heal:.8},f_={priest:.5,kill:.5,heal:.6,shield:.45,level:.35,nova:.2,frost:.3};function st(n,e=1,t=!1){!Be||Nh||e<=.02||!df[n]||df[n](u_(e,t,f_[n]||0,d_[n]||1))}var wo=[[146.8,174.6,220],[116.5,146.8,174.6],[130.8,164.8,196],[110,130.8,164.8]],ff=[293.7,349.2,392,440,523.3,587.3],Ms=60/104;function bs(n,e,t,i,s,r,a,o,l=0){let c=Be.createOscillator(),h=Be.createGain();c.type=e,c.frequency.value=t,c.detune.value=l,h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(o,i+s),h.gain.setValueAtTime(o,i+s+r),h.gain.linearRampToValueAtTime(0,i+s+r+a),c.connect(h),h.connect(n),c.start(i),c.stop(i+s+r+a+.05)}function p_(n,e,t){let i=Be.createBufferSource(),s=Be.createBiquadFilter(),r=Be.createGain();i.buffer=To,s.type="highpass",s.frequency.value=6500,r.gain.setValueAtTime(t,e),r.gain.exponentialRampToValueAtTime(8e-4,e+.05),i.connect(s),s.connect(r),r.connect(n),i.start(e,Math.random()*.3),i.stop(e+.07)}function Ih(n,e,t){let i=Be.createOscillator(),s=Be.createGain();i.frequency.setValueAtTime(105,e),i.frequency.exponentialRampToValueAtTime(42,e+.16),s.gain.setValueAtTime(t,e),s.gain.exponentialRampToValueAtTime(8e-4,e+.24),i.connect(s),s.connect(n),i.start(e),i.stop(e+.26)}var pf={menu:{len:6,level:.6,bar(n,e,t){let i=wo[t%wo.length];for(let s of i)for(let r of[-4,4])bs(n.soft,"sawtooth",s,e,2,0,5.5,.05,r);bs(n.soft,"sine",i[0]/2,e,1.5,1,3.5,.09);for(let s=0;s<3;s++){let r=e+1+Math.random()*4.5,a=ff[Math.floor(Math.random()*ff.length)];bs(n.dry,"sine",a,r,.02,0,2.4,.06),bs(n.dry,"sine",a*2,r,.02,0,1.2,.015)}}},battle:{len:Ms*4,level:.45,bar(n,e,t){let i=wo[Math.floor(t/2)%wo.length],s=t%8>=4;for(let a of i)bs(n.soft,"sawtooth",a,e,.3,Ms*2.6,Ms,.028,5);for(let a=0;a<8;a++){let o=e+a*Ms/2;bs(n.dry,"triangle",i[0]/2,o,.008,.05,.16,a%2?.07:.11),a%2&&p_(n.dry,o,s?.028:.016)}Ih(n.dry,e,.2),Ih(n.dry,e+Ms*2,.17),s&&Ih(n.dry,e+Ms*3.5,.11);let r=[i[0],i[1],i[2],i[1]*2,i[2],i[1],i[0]*2,i[2]];for(let a=0;a<8;a++)bs(n.soft,"triangle",r[(a+(s?3:0))%8]*2,e+a*Ms/2,.006,.03,.2,s?.045:.03)}}};function m_(){let n=Be.createGain();n.connect(Uh);let e=Be.createBiquadFilter();return e.type="lowpass",e.frequency.value=1400,e.connect(n),{g:n,soft:e,dry:n}}var vr=null;function Ro(n){if((!Be||!pf[n])&&(n=null),vr&&vr.track===n)return;if(vr){let r=vr;clearInterval(r.timer);let a=r.out.g.gain,o=Be.currentTime;a.cancelScheduledValues(o),a.setValueAtTime(a.value,o),a.linearRampToValueAtTime(0,o+.9),setTimeout(()=>r.out.g.disconnect(),8e3),vr=null}if(!n)return;let e=pf[n],t=m_();t.g.gain.setValueAtTime(0,Be.currentTime),t.g.gain.linearRampToValueAtTime(e.level,Be.currentTime+1.5);let i=vr={track:n,out:t,next:Be.currentTime+.1,i:0,timer:0},s=()=>{for(;i.next<Be.currentTime+.6;)i.next<Be.currentTime&&(i.next=Be.currentTime+.05),e.bar(t,i.next,i.i++),i.next+=e.len};s(),i.timer=setInterval(s,200)}function yf(n=1){if(!Be||Nh)return;let e=Be.currentTime,t=Be.createBufferSource(),i=Be.createBiquadFilter(),s=Be.createGain();t.buffer=To,i.type="bandpass",i.frequency.value=700+Math.random()*500,i.Q.value=1.4,s.gain.setValueAtTime(.07*n,e),s.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(i),i.connect(s),s.connect(jr),t.start(e,Math.random()*.3),t.stop(e+.08)}var D=n=>document.getElementById(n);addEventListener("error",n=>{let e=document.getElementById("menuMsg");e&&(e.textContent=`Galat: ${n.message}`)});var Ue={get:(n,e)=>{try{return localStorage.getItem("arkana."+n)??e}catch{return e}},set:(n,e)=>{try{localStorage.setItem("arkana."+n,e)}catch{}}};rn&&document.body.classList.add("touch");var If=D("c"),wn=new Za({canvas:If,antialias:!rn,powerPreference:"high-performance"});wn.outputColorSpace=Ot;wn.toneMapping=qr;wn.toneMappingExposure=1.15;wn.shadowMap.enabled=!0;wn.shadowMap.type=Zc;var ln=new sr,on=new Kt(62,1,.3,900),Mi={ruins:of(ln)},pt=Mi.ruins;ln.fog=pt.fog;var De=new So(ln,pt.glowTex),zh={ruins:Rh(pt.root,pt.glowTex,Ft.ruins.runes,$i,Zr)},Hh=zh.ruins,ti=Ft.ruins,Qn=new ke;{let n=new Re({color:16764746,emissive:16753178,emissiveIntensity:2.2,metalness:.85,roughness:.25});Qn.add(new ne(new Ge(.45,.2,.55,16,1,!0),n));let e=new ne(new Ge(.07,.07,.5,8),n);e.position.y=-.5,Qn.add(e);let t=new ne(new Ge(.3,.32,.08,16),n);t.position.y=-.75,Qn.add(t);let i=new kt(new Lt({map:pt.glowTex,color:16766315,blending:Je,depthWrite:!1,transparent:!0}));i.scale.setScalar(4.5),Qn.add(i);let s=new ne(new Ge(.6,.6,30,16,1,!0),new Tt({color:16766315,transparent:!0,opacity:.12,blending:Je,depthWrite:!1,side:xt}));s.position.y=15,Qn.add(s),Qn.visible=!1,ln.add(Qn)}var Si=new mo(wn);Si.addPass(new go(ln,on));var g_=new fr(new ae(256,256),.42,.5,.9);Si.addPass(g_);Si.addPass(rf());Si.addPass(new xo);var Es=Ue.get("quality",rn?"medium":"high"),Lf=!Ue.get("qualityManual","");function No(n){Es=n;let e=Math.min(devicePixelRatio||1,n==="low"?1:n==="medium"?1.5:2);wn.setPixelRatio(e),Si.setPixelRatio(e),pt.sun.castShadow=n!=="low",Qd(n!=="low"),nf(n==="low"),n!=="low"&&jd(),n!=="low"&&(pt.env??=sf(wn,pt.sky)),ln.environment=n==="low"?null:pt.env,ln.environmentIntensity=.55;let t=n==="high"?4:0;for(let s of[Si.renderTarget1,Si.renderTarget2])s.samples!==t&&(s.samples=t,s.dispose());let i=n==="high"?2048:1024;pt.sun.shadow.mapSize.x!==i&&(pt.sun.shadow.mapSize.set(i,i),pt.sun.shadow.map?.dispose(),pt.sun.shadow.map=null),pt.grass&&(pt.grass.count=n==="low"?1e3:n==="medium"?3200:pt.grassMax);for(let s of pt.pointLights)s.visible=n!=="low";De.lightsOn=n!=="low",D("quality").value=n,Vh()}function Df(n){Ft[n]||(n="ruins"),Mi[n]||(Mi[n]=n==="harbor"?lf(ln,Mi.ruins.glowTex):cf(ln,Mi.ruins.glowTex,n),zh[n]=Rh(Mi[n].root,Mi.ruins.glowTex,Ft[n].runes,$i,Zr));for(let[e,t]of Object.entries(Mi))t.root.visible=e===n;pt=Mi[n],Hh=zh[n],ti=Ft[n],m.mapId=n,ln.fog=pt.fog,Xd(n),Xf(),No(Es)}function Vh(){let n=innerWidth,e=innerHeight;wn.setSize(n,e,!1),Si.setSize(n,e),on.aspect=n/e,on.fov=n>=e?62:82,on.updateProjectionMatrix();let t=e*wn.getPixelRatio()*.5;De.points.material.uniforms.scale.value=t,pt.flies.material.uniforms.scale.value=t}addEventListener("resize",Vh);addEventListener("orientationchange",()=>setTimeout(Vh,200));function x_(){let n=Ue.get("pid","");if(!/^[a-z0-9]{16,40}$/.test(n)){let e=new Uint8Array(12);crypto.getRandomValues(e),n=[...e].map(t=>t.toString(36).padStart(2,"0")).join("").slice(0,24),Ue.set("pid",n)}return n}var m={phase:"menu",ws:null,myId:0,clsKey:Ue.get("cls","ranger"),cls:null,players:new Map,roster:new Map,pred:{x:0,z:0,yaw:0,dashT:0,dx:0,dz:0,skillCd:0},rx:0,rz:0,pending:[],seq:0,acc:0,localFireCd:0,me:{hp:100,maxHp:100,lvl:1,flags:0,xp:0,respawnT:0},ended:!1,tm:0,orbMask:255,ping:0,camDist:7.2,lockId:0,autoFire:Ue.get("autoFire",rn?"1":"")==="1",aimAssist:Ue.get("aimAssist",rn?"1":"")==="1",lastShotTick:new Map,shake:0,time:0,vibrate:Ue.get("vibrate","1")==="1",code:null,practice:!1,joinErr:"",buzzT:0,createDiff:Ue.get("diff","normal"),pid:x_(),skin:Ue.get("skin","default"),mapId:"ruins",createMap:Ue.get("map","rotate"),tut:null,stepT:0,team:-1,teamScore:[0,0],gm:"dm",runeMask:15,holder:0,ticks:[],createGm:Ue.get("gm","pve")};window.__arkana=m;var Uf=D("classes");for(let n of gh){let e=pn[n],t="#"+e.color.toString(16).padStart(6,"0"),i=document.createElement("div");i.className="cls",i.dataset.k=n,i.style.setProperty("--c",t),i.innerHTML=`<div class="dot"></div><b>${e.name}</b><small>${e.desc}</small><small class="sk">${e.skillName}: ${e.skillDesc}</small>`,i.addEventListener("click",()=>Nf(n)),Uf.appendChild(i)}function Nf(n){m.clsKey=n,Ue.set("cls",n);for(let e of Uf.children)e.classList.toggle("sel",e.dataset.k===n)}Nf(gh.includes(m.clsKey)?m.clsKey:"ranger");D("name").value=Ue.get("name","");D("hint").textContent=rn?"Jempol kiri: gerak \xB7 geser sisi kanan: bidik \xB7 tombol merah: tembak. Lebih nyaman dalam posisi mendatar.":"WASD gerak \xB7 mouse bidik \xB7 klik tembak \xB7 Spasi skill \xB7 Tab papan skor";function v_(){try{localStorage.removeItem("arkana.server")}catch{}return(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws"}var Mf=navigator.userAgent,ei={standalone:matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||navigator.standalone===!0,inApk:/; wv\)/.test(Mf),ios:/iPhone|iPad|iPod/.test(Mf)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,prompt:null};function ws(){let n=ei.standalone||ei.inApk||m.phase==="play"||Ue.get("installNo","")==="1"||!(ei.ios||ei.prompt);D("installHint").classList.toggle("hidden",n),!n&&(D("installGo").classList.toggle("hidden",!ei.prompt),D("installText").innerHTML=ei.prompt?"Pasang <b>Arkana</b> ke layar utama supaya terbuka layar penuh seperti aplikasi.":"Pasang <b>Arkana</b> ke layar utama: ketuk tombol <b>Bagikan</b> di Safari, lalu pilih <b>Tambah ke Layar Utama</b>.")}addEventListener("beforeinstallprompt",n=>{n.preventDefault(),ei.prompt=n,ws()});addEventListener("appinstalled",()=>{ei.standalone=!0,ws()});D("installGo").addEventListener("click",async()=>{let n=ei.prompt;if(n){ei.prompt=null;try{await n.prompt()}catch{}ws()}});D("installX").addEventListener("click",()=>{Ue.set("installNo","1"),ws()});var Ut={token:Ue.get("token",""),on:!1,reg:!1};function kf(n,e){Ut.token=n,Ue.set("token",n),m.pid=e.pid,Ue.set("pid",e.pid),D("name").value=e.name,D("name").classList.add("hidden"),Ue.set("name",e.name),D("whoName").textContent=e.name,D("who").classList.remove("hidden"),D("auth").classList.add("hidden"),D("authPass").value="",D("authPass2").value="",ko()}function Gh(n=""){Ut.token="",Ue.set("token",""),D("who").classList.add("hidden"),D("authMsg").textContent=n,Ut.on&&(D("auth").classList.remove("hidden"),D("authName").value||=Ue.get("name",""))}function Ss(n){Ut.view=n,Ut.reg=n==="reg";let e=n==="reg",t=n==="login",i=n==="forgot",s=n==="reset",r=(a,o)=>D(a).classList.toggle("hidden",!o);D("tabLogin").classList.toggle("on",t),D("tabReg").classList.toggle("on",e),D("tabLogin").setAttribute("aria-selected",String(t)),D("tabReg").setAttribute("aria-selected",String(e)),r("authTabs",t||e),r("authPassRow",!i),r("authPass2Row",e||s),r("authHint",e),r("authInviteRow",e&&Ut.invite),r("authMailRow",e&&Ut.mail),r("authNoMail",!Ut.mail),r("authCodeRow",s),r("authForgot",t&&Ut.mail),r("authBack",i||s),D("authName").readOnly=s,D("authPassLabel").textContent=s?"Kata sandi baru":"Kata sandi",D("authPass").autocomplete=t?"current-password":"new-password",D("authGo").textContent=e?"Daftar":i?"Kirim kode ke email":s?"Ganti kata sandi":"Masuk",D("authMsg").textContent=""}D("tabLogin").addEventListener("click",()=>Ss("login"));D("tabReg").addEventListener("click",()=>Ss("reg"));D("authForgot").addEventListener("click",()=>Ss("forgot"));D("authBack").addEventListener("click",()=>Ss("login"));D("authForm").addEventListener("submit",async n=>{n.preventDefault();let e=Ut.view,t=D("authName").value.trim(),i=D("authPass").value,s=D("authMail").value.trim(),r=D("authCode").value.trim(),a=o=>{D("authMsg").textContent=o};if(!/^[A-Za-z0-9_]{3,14}$/.test(t))return a("Nama pengguna 3-14 karakter: huruf, angka, atau garis bawah.");if(e!=="forgot"&&i.length<8)return a("Kata sandi minimal 8 karakter.");if((e==="reg"||e==="reset")&&i!==D("authPass2").value)return a("Kedua kata sandi tidak sama.");if(e==="reg"&&Ut.mail&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))return a("Isi alamat email yang benar.");if(e==="reset"&&!/^\d{6}$/.test(r))return a("Kode terdiri dari 6 angka.");D("authGo").disabled=!0,a(e==="reg"?"Mendaftarkan\u2026":e==="forgot"?"Mengirim\u2026":"Memeriksa\u2026");try{let o={login:"/api/login",reg:"/api/register",forgot:"/api/forgot",reset:"/api/reset"}[e],c=await(await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,pass:e==="forgot"?void 0:i,pid:m.pid,invite:D("authInvite").value.trim()||void 0,email:e==="reg"&&s?s:void 0,code:e==="reset"?r:void 0})})).json();c.token?(Ss("login"),kf(c.token,c.user)):e==="forgot"&&c.ok?(Ss("reset"),a("Bila akun itu punya email, kode sudah dikirim. Periksa kotak masuk dan folder spam.")):a(c.error||"Gagal. Coba lagi.")}catch{a("Server tidak terjangkau. Periksa koneksi lalu coba lagi.")}D("authGo").disabled=!1});D("logout").addEventListener("click",()=>{fetch("/api/logout",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+Ut.token},body:"{}"}).catch(()=>{}),Gh()});(async()=>{try{let n=await fetch("/api/me",{headers:Ut.token?{authorization:"Bearer "+Ut.token}:{}}).then(e=>e.json());if(Ut.on=!!n.auth,Ut.invite=!!n.invite,Ut.mail=!!n.mail,!Ut.on)return;Ss("login"),n.user?kf(Ut.token,n.user):Gh(),ko()}catch{}})();ws();var Wh=["play","create","joinBtn","practice","rejoin","evJoin"],Xh=n=>String(n||"").toUpperCase().replace(/[^A-Z]/g,"").slice(0,4);{let n=Xh(new URLSearchParams(location.search).get("room"));n&&(D("code").value=n,D("joinBtn").textContent="Gabung "+n)}D("code").addEventListener("input",n=>{n.target.value=Xh(n.target.value),D("joinBtn").textContent="Gabung"});D("code").addEventListener("keydown",n=>{n.key==="Enter"&&D("joinBtn").click()});function Sn(n,e){kh();let t=D("name").value.trim()||"Pengembara";Ue.set("name",t);for(let i of Wh)D(i).disabled=!0;D("menuMsg").textContent=n==="practice"?"Menyiapkan arena latihan\u2026":"Menghubungkan ke arena\u2026",rn&&!document.fullscreenElement&&document.documentElement.requestFullscreen?.().then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{}),b_(t,n,e)}D("play").addEventListener("click",()=>{Ue.get("tutorDone","")?Sn("quick"):(m.tut=Gf(),Sn("practice"))});for(let n of document.querySelectorAll(".mode[data-gm]")){let e=()=>{m.createGm=n.dataset.gm,Ue.set("gm",m.createGm),yr&&Vf();for(let t of document.querySelectorAll(".mode[data-gm]"))t.classList.toggle("on",t===n),t.setAttribute("aria-checked",t===n)};n.addEventListener("click",e),n.dataset.gm===m.createGm&&(e(),n.closest("#otherModes")&&Ff(!0))}function Ff(n){D("otherModes").classList.toggle("hidden",!n),D("moreModes").setAttribute("aria-expanded",String(n)),D("moreModes").textContent=n?"Sembunyikan mode lain":"Mode lain"}D("moreModes").addEventListener("click",()=>Ff(D("otherModes").classList.contains("hidden")));for(let n of document.querySelectorAll(".diffb")){let e=()=>{m.createDiff=n.dataset.diff,Ue.set("diff",m.createDiff);for(let t of document.querySelectorAll(".diffb"))t.classList.toggle("on",t===n),t.setAttribute("aria-checked",t===n)};n.addEventListener("click",e),n.dataset.diff===m.createDiff&&e()}for(let n of document.querySelectorAll(".mapb")){let e=()=>{m.createMap=n.dataset.map,Ue.set("map",m.createMap);for(let t of document.querySelectorAll(".mapb"))t.classList.toggle("on",t===n),t.setAttribute("aria-checked",t===n)};n.addEventListener("click",e),n.dataset.map===m.createMap&&e()}D("create").addEventListener("click",()=>Sn("create"));var bf=[],Fh=[],bi=new U;function __(){let n=innerWidth,e=innerHeight,t=[],i=m.windIds||new Map;for(let s of m.players.values()){if(s.id===m.myId||s.flags&1||ta(s.id))continue;let r=Math.hypot(s.x-m.rx,s.z-m.rz);if(r>24||(bi.set(s.x,1.5,s.z).applyMatrix4(on.matrixWorldInverse),bi.z<0&&(bi.set(s.x,1.5,s.z).project(on),Math.abs(bi.x)<.92&&Math.abs(bi.y)<.88)))continue;let a=-mr(Math.atan2(s.x-m.rx,s.z-m.rz),ce.yaw);t.push({a,d:r,boss:!!Kn[m.roster.get(s.id)?.cls]?.boss,wind:(i.get(s.id)||0)>m.time})}t.sort((s,r)=>s.d-r.d);for(let s=0;s<6;s++){let r=bf[s];r||(r=document.createElement("i"),r.className="threat",D("threats").appendChild(r),bf.push(r));let a=t[s];if(!a){r.style.opacity=0;continue}let o=Math.min(n,e)*.34,l=o*1.25,c=o,h=n/2+Math.sin(a.a)*l,u=e/2-Math.cos(a.a)*c;r.className="threat"+(a.boss?" boss":"")+(a.wind?" wind":""),r.style.opacity=String(Math.max(.7,1-a.d/40)),r.style.transform=`translate(${h-16}px,${u-15}px) rotate(${a.a}rad) scale(${a.d<8?1.25:1})`}}function y_(){let n=m.gm==="pve"?(m.rv||[]).filter(e=>e[0]!==m.myId):[];for(let e=0;e<Math.max(n.length,Fh.length);e++){let t=Fh[e];t||(t=document.createElement("div"),t.className="down",D("downTags").appendChild(t),Fh.push(t));let i=n[e],s=i&&m.players.get(i[0]);if(!s){t.style.display="none";continue}if(bi.set(s.x,2.2,s.z).project(on),bi.z>1){t.style.display="none";continue}t.style.display="",t.textContent=i[1]>0?`Menolong ${i[1]}%`:`Tolong ${Qt(i[0])}!`,t.style.transform=`translate(${(bi.x*.5+.5)*innerWidth}px,${(-bi.y*.5+.5)*innerHeight}px) translate(-50%,-100%)`}}function Bf(n){if(!(!n||!n.length)){D("perkCards").innerHTML=n.map(e=>`<button class="perk" data-k="${e}"><b>${Zi[e].name}</b><small>${Zi[e].desc}</small><em>Ketuk untuk memilih</em></button>`).join("");for(let e of D("perkCards").querySelectorAll(".perk"))e.addEventListener("click",()=>{m.ws?.send(JSON.stringify({t:"perk",id:e.dataset.k})),D("perks").classList.add("hidden")});D("perks").classList.remove("hidden")}}for(let n of["touchstart","touchmove"])D("perks").addEventListener(n,e=>e.stopPropagation());D("pingMenu").innerHTML=bh.map((n,e)=>`<button data-k="${e}">${n}</button>`).join("");D("pingBtn").addEventListener("click",()=>D("pingMenu").classList.toggle("hidden"));for(let n of D("pingMenu").children)n.addEventListener("click",()=>{m.ws?.send(JSON.stringify({t:"ping",k:+n.dataset.k})),D("pingMenu").classList.add("hidden")});for(let n of[D("pingBtn"),D("pingMenu")])for(let e of["touchstart","touchmove","mousedown"])n.addEventListener(e,t=>t.stopPropagation());function Of(){let n=Ue.get("lastRoom",""),e=D("rejoin");e.classList.toggle("hidden",!n),n&&(e.textContent=`Kembali ke room ${n}`)}D("rejoin").addEventListener("click",()=>{let n=Ue.get("lastRoom","");n&&Sn("join",n)});Of();var Ef=n=>n>=3600?`${Math.floor(n/3600)} j ${Math.floor(n%3600/60)} mnt`:n>=60?`${Math.floor(n/60)} mnt`:`${Math.max(0,n)} dtk`,Qr=null,qh=0;function zf(){let n=D("eventBanner"),e=Qr,t=Math.floor((Date.now()-qh)/1e3),i=e?.active&&e.active.left-t>0?e.active:null,s=e?.next,r=e?.last;n.classList.toggle("hidden",!i&&!s&&!r?.top?.length),D("evJoin").classList.toggle("hidden",!i),i?(D("evName").textContent=`Event: ${i.name} \xB7 sisa ${Ef(i.left-t)}`,D("evInfo").textContent=`${i.desc}. Target: ${i.target} Hadiah: ${i.skin}.${i.top.length?` Terdepan: ${i.top[0].name} (${i.top[0].score} ${i.unit}).`:""}`):s?(D("evName").textContent=`Event berikutnya: ${s.name}`,D("evInfo").textContent=s.in-t>0?`Mulai dalam ${Ef(s.in-t)}. ${s.desc}.`:"Segera dimulai\u2026"):r?.top?.length&&(D("evName").textContent=`Event ${r.name} selesai`,D("evInfo").textContent=`Juara: ${r.top.map((a,o)=>`${o+1}. ${a.name} (${a.score} ${r.unit})`).join(" \xB7 ")}`)}async function Hf(){if(m.phase==="menu"){try{Qr=await fetch("/api/event").then(n=>n.json()),qh=Date.now()}catch{}zf()}}Hf();setInterval(Hf,2e4);setInterval(()=>{m.phase==="menu"&&zf()},1e3);D("evJoin").addEventListener("click",()=>Sn("event"));var Sf={dm:"Deathmatch",koth:"Rebut Altar",tdm:"Tim",coop:"Lawan Bot",pve:"Bertahan Bersama",king:"Perburuan Raja"},yr=[];function Vf(){let n=D("lobbyList");n.replaceChildren(),D("lobby").classList.toggle("hidden",!yr.length);for(let i of yr){let s=i.names.length>=i.max,r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("b"),l=document.createElement("small"),c=document.createElement("button");r.className="lobbyRow",o.textContent=`${i.kind==="event"?"Event \xB7 ":""}${Sf[i.mode]||i.mode}${i.wave?` \xB7 gelombang ${i.wave}`:""}`,l.textContent=`${i.names.join(", ")} (${i.names.length}/${i.max})`,c.type="button",c.textContent=s?"Penuh":"Gabung",c.disabled=s,c.addEventListener("click",()=>i.kind==="event"?Sn("event"):i.code?Sn("join",i.code):Sn("public")),a.append(o,l),r.append(a,c),n.append(r)}let e=Qr?.active&&Qr.active.left-Math.floor((Date.now()-qh)/1e3)>0,t=yr.find(i=>i.kind!=="event"&&i.names.length<i.max);D("playHint").textContent=Ue.get("tutorDone","")?e?`Masuk ke event ${Qr.active.name}.`:t?`Bergabung dengan ${t.names.slice(0,3).join(", ")}.`:`Belum ada yang bermain: membuka room ${Sf[m.createGm]||""}.`:"Pertama kali: latihan singkat dulu."}async function ko(){if(m.phase==="menu"){try{yr=(await fetch("/api/lobby",{headers:Ut.token?{authorization:"Bearer "+Ut.token}:{}}).then(e=>e.json())).rooms||[]}catch{yr=[]}Vf()}}setInterval(ko,8e3);var wf=n=>"#"+n.toString(16).padStart(6,"0");async function M_(){D("ranks").classList.remove("hidden"),D("myStats").textContent="Memuat\u2026",D("skinMsg").textContent="";let n=null,e=null;try{[n,e]=await Promise.all([fetch("/api/top").then(i=>i.json()),fetch(`/api/stats?pid=${m.pid}`).then(i=>i.json())])}catch{D("myStats").textContent="Peringkat belum bisa dimuat dari server, jadi semua jubah tampil terkunci. Coba tutup dan buka lagi."}let t=e?.stats;if(D("waveTable").innerHTML=(n?.waves||[]).map((i,s)=>`<tr><td>${s+1}</td><td></td><td>gelombang ${i.wave}</td></tr>`).join("")||"<tr><td>Belum ada yang bermain Bertahan Bersama minggu ini.</td></tr>",(n?.waves||[]).forEach((i,s)=>{D("waveTable").rows[s].cells[1].textContent=i.name}),D("achv").innerHTML=Eh.map(i=>`<span class="${(t?.[i.stat]||0)>=i.n?"on":""}" title="${i.text}">${i.name} \xB7 ${Math.min(t?.[i.stat]||0,i.n)}/${i.n}</span>`).join(""),D("daily").innerHTML=(e?.daily||[]).map(i=>`<li class="${i.done?"done":""}"><i style="width:${Math.round(i.p/i.n*100)}%"></i><span><b></b><em>${i.done?"Selesai":`${i.p}/${i.n}`}</em></span></li>`).join("")||"<li><span>Tantangan belum bisa dimuat.</span></li>",(e?.daily||[]).forEach((i,s)=>{D("daily").children[s].querySelector("b").textContent=i.text}),n){D("myStats").textContent=t?`Kamu: ${t.kills} kill, ${t.deaths} gugur, ${t.wins} menang dari ${t.matches} ronde.`:"Belum ada statistik: selesaikan satu ronde di arena untuk mulai tercatat.",D("weekTitle").textContent=`Minggu ini (${n.week.replace("-W",", minggu ")})`;let i=n.top.map((s,r)=>`<tr class="${t&&s.name===t.name?"me":""}"><td>${r+1}</td><td></td><td>${s.kills}</td><td>${s.wins}</td></tr>`).join("");D("weekTable").innerHTML=`<tr><th>#</th><th>Nama</th><th>Kill</th><th>Menang</th></tr>${i||'<tr><td colspan="4">Belum ada yang bermain minggu ini.</td></tr>'}`,n.top.forEach((s,r)=>{D("weekTable").rows[r+1].cells[1].textContent=s.name})}D("skins").innerHTML=Yi.map(i=>{let s=Wd(i,t),r=pn[m.clsKey],a=i.accent??Math.round(r.color*1),o=i.glow??r.color,l=i.req?`${Math.min(t?.[i.req.stat]||0,i.req.n)}/${i.req.n}`:"";return`<button class="skin ${s?"":"locked"} ${m.skin===i.id?"on":""}" data-id="${i.id}" ${s?"":'aria-disabled="true"'} style="--c:${wf(i.accent??a)};--g:${wf(o)}"><i></i><span><b>${i.name}</b><small>${s?m.skin===i.id?"Dipakai":"Terbuka":`${i.req.text} \xB7 ${l}`}</small></span></button>`}).join("");for(let i of D("skins").querySelectorAll(".skin"))i.addEventListener("click",()=>{let s=Yi.find(r=>r.id===i.dataset.id);if(i.classList.contains("locked")){D("skinMsg").textContent=`${s.name} masih terkunci: ${s.req.text.toLowerCase()} (sekarang ${Math.min(t?.[s.req.stat]||0,s.req.n)} dari ${s.req.n}).`;return}D("skinMsg").textContent=`${s.name} dipakai mulai ronde berikutnya.`,m.skin=i.dataset.id,Ue.set("skin",m.skin);for(let r of D("skins").querySelectorAll(".skin"))r.classList.toggle("on",r===i),r.classList.contains("locked")||(r.querySelector("small").textContent=r===i?"Dipakai":"Terbuka")})}D("ranksBtn").addEventListener("click",()=>M_().catch(n=>{D("myStats").textContent="Galat: "+n.message}));D("ranksClose").addEventListener("click",()=>D("ranks").classList.add("hidden"));D("joinBtn").addEventListener("click",()=>{let n=Xh(D("code").value);if(n.length!==4){D("menuMsg").textContent="Kode room terdiri dari 4 huruf.",D("code").focus();return}Sn("join",n)});D("practice").addEventListener("click",()=>{m.tut=Gf(),Sn("practice")});function b_(n,e,t){let i;try{i=new WebSocket(v_())}catch{return Tf("Alamat server tidak valid.")}m.ws=i,m.joinErr="",i.onopen=()=>i.send(JSON.stringify({t:"join",name:n,cls:m.clsKey,mode:e,code:t,gm:m.createGm,map:m.createMap,diff:m.createDiff,pid:m.pid,skin:m.skin,tok:Ut.token||void 0})),i.onmessage=s=>E_(JSON.parse(s.data)),i.onclose=()=>{if(m.ws!==i)return;let s=!!m.myId;Fo(),Tf(m.joinErr||(s?"Koneksi terputus.":"Server tidak terjangkau. Coba lagi.")),m.myId=0},i.onerror=()=>{}}function Tf(n){D("menuMsg").textContent=n;for(let e of Wh)D(e).disabled=!1}function Fo(){let n=m.ws;m.ws=null,n&&n.readyState<=1&&n.close();for(let e of m.players.values())e.av.dispose(ln);m.players.clear(),m.roster.clear(),m.pending.length=0;for(let e of[...De.projs.keys()])De.removeProj(e);m.phase="menu",ce.enabled=!1,ce.reset?.(),Ro("menu"),ws(),ko(),m.menuCls&&(m.clsKey=m.menuCls),Of(),document.exitPointerLock?.(),D("hud").classList.add("hidden"),D("menu").classList.remove("hidden"),D("tutor").classList.add("hidden"),D("hitDir").textContent="";for(let e of Wh)D(e).disabled=!1}function E_(n){if(n.t==="w"){m.myId=n.id,m.limit=n.limit||ph,m.menuCls=m.clsKey,pn[n.cls]&&(m.clsKey=n.cls),m.cls=pn[m.clsKey],m.phase="play",Ro("battle"),ws(),m.ended=!1,m.mut=n.mut||null,m.mut&&setTimeout(()=>At(`Mode akhir pekan: ${pr[m.mut].name}`),2200),n.code&&Ue.set("lastRoom",n.code),m.barrelMask=0,m.seq=0,m.pending.length=0,m.me.xp=0,m.me.lvl=1,D("menu").classList.add("hidden"),D("hud").classList.remove("hidden"),D("menuMsg").textContent="",D("skillName").textContent=m.cls.skillName,D("death").classList.add("hidden"),D("score").classList.add("hidden"),D("pause").classList.add("hidden"),ce.enabled=!0,m.code=n.code||null,m.practice=!!n.practice,m.gm=n.gm||"dm",m.ticks.length=0,n.map&&n.map!==m.mapId&&Df(n.map),m.team=Gd.includes(m.gm)?n.team:-1,m.teamScore=[0,0],D("zoneTag").classList.toggle("hidden",m.gm!=="koth"&&m.gm!=="king"),m.event=n.ev||null,m.event&&setTimeout(()=>At(`Event ${m.event.name}: ${m.event.target}`),2400);let e=D("roomPill");e.classList.toggle("hidden",!m.code&&!m.practice&&!n.ev),e.textContent=m.code?`${{koth:"Altar",tdm:"Tim",coop:"Lawan Bot",pve:"Bertahan",king:"Raja"}[m.gm]||"Room"} ${m.code} \u2934`:m.event?"Event":"Latihan",m.gm==="pve"&&(m.team=0),m.team>=0&&m.gm!=="pve"&&setTimeout(()=>At(`Kamu di regu ${mn[m.team].name}`),1900),m.practice&&m.tut?m.tut.show():(m.tut=null,D("tutor").classList.add("hidden")),(!m.practice||!m.tut)&&At(m.code?`Room ${m.code}: ketuk kode untuk membagikan`:m.practice?"Arena latihan":"Pertarungan dimulai")}else if(n.t==="e")m.joinErr=n.m,Ue.set("lastRoom",""),n.auth&&Gh(n.m);else if(n.t==="r"){m.roster.clear();for(let[e,t,i,s,r,a,o,l,c]of n.l)m.roster.set(e,{id:e,name:t,cls:i,kills:s,deaths:r,bot:a,pts:o||0,team:l??-1,skin:c||"default"});n.ts&&(m.teamScore=n.ts),P_()}else n.t==="s"?T_(n):n.t==="pg"?m.ping=Math.round(performance.now()-n.c):n.t==="sp"&&m.ws?.send(JSON.stringify({t:"spr",c:n.c}))}setInterval(()=>{m.ws?.readyState===1&&m.ws.send(JSON.stringify({t:"pg",c:performance.now()}))},2e3);setInterval(()=>{m.ws?.readyState===1&&m.myId&&!document.hidden&&m.ping>0&&m.ws.send(JSON.stringify({t:"st",p:m.ping,f:Lo}))},5e3);function an(n){if(!(!m.vibrate||!navigator.vibrate))try{navigator.vibrate(n)}catch{}}function S_(n,e){let t=D("hitDir");for(;t.children.length>=4;)t.firstChild.remove();let i=mr(Math.atan2(n-m.rx,e-m.rz),ce.yaw),s=Math.min(innerWidth,innerHeight)*.38,r=s*.95,a=s*.3,o=document.createElement("div");o.className="arc",o.style.cssText=`width:${r}px;height:${a}px;left:${-r/2}px;top:${-s}px;transform-origin:${r/2}px ${s}px;transform:rotate(${-i*180/Math.PI}deg)`,o.addEventListener("animationend",()=>o.remove()),t.appendChild(o)}function Gf(){let n={i:0,moved:0,turned:0,shots:0,skills:0,kills:0,lastYaw:null,done:!1},e=()=>[[rn?"Geser jempol kiri untuk berjalan.":"Tekan W A S D untuk berjalan.",()=>n.moved>8],[rn?"Geser jari di sisi kanan layar untuk memutar arah bidikan.":"Klik layar, lalu gerakkan mouse untuk membidik.",()=>n.turned>1.6],[rn?"Tahan tombol merah untuk menembak.":"Klik kiri untuk menembak.",()=>n.shots>=5],[`${rn?"Ketuk tombol ungu":"Tekan Spasi"} untuk skill ${m.cls?.skillName||""}. Skill punya waktu jeda.`,()=>n.skills>=1],["Tumbangkan satu bot boneka. Mereka tidak menyerang balik.",()=>n.kills>=1]];return n.show=()=>{D("tutor").classList.remove("hidden"),n.render()},n.render=()=>{let t=e();D("tutorDots").innerHTML=t.map((i,s)=>`<i class="${s<n.i?"on":s===n.i&&!n.done?"now":""}"></i>`).join(""),D("tutorText").textContent=n.done?"Siap. Di arena sungguhan lawan menyerang balik; pertama mencapai 20 kill menang.":`${n.i+1}/${t.length} \xB7 ${t[n.i][0]}`,D("tutorGo").classList.toggle("hidden",!n.done),D("tutorSkip").textContent=n.done?"Tetap berlatih":"Lewati latihan"},n.check=()=>{if(n.done)return;let t=e();t[n.i][1]()&&(n.i++,st("orb"),an(30),n.i>=t.length&&(n.done=!0,Ue.set("tutorDone","1"),st("level")),n.render())},n}D("tutorSkip").addEventListener("click",()=>{if(Ue.set("tutorDone","1"),m.tut?.done){D("tutor").classList.add("hidden"),m.tut=null;return}m.tut=null,Fo(),Sn("quick")});D("tutorGo").addEventListener("click",()=>{m.tut=null,Fo(),Sn("quick")});for(let n of["touchstart","touchmove"])D("tutor").addEventListener(n,e=>e.stopPropagation());D("roomPill").addEventListener("click",n=>{if(n.stopPropagation(),!m.code)return;let e=`${location.origin}${location.pathname}?room=${m.code}`,t=()=>At(`Tautan room ${m.code} disalin`),i=()=>At(`Kode room: ${m.code}`);try{navigator.clipboard.writeText(e).then(t,i)}catch{i()}});function w_(n){let e=m.players.get(n);if(e)return e;let t=m.roster.get(n);if(!t)return null;let i=Kn[t.cls]?new Eo(t.cls,pt.glowTex):new bo(t.cls,t.name,n===m.myId,pt.glowTex,t.team>=0&&(m.gm!=="pve"||t.team===0)?mn[t.team].color:null,t.skin);return ln.add(i.group),e={id:n,av:i,buf:[],x:0,z:0,yaw:0,flags:0,hp:1,maxHp:1,lvl:1,cls:t.cls,seen:0},m.players.set(n,e),e}function T_(n){let e=performance.now();if(!m.myId)return;let t=m.ended;if(n.mp&&n.mp!==m.mapId){Df(n.mp),At(`Peta: ${ti.name}`);for(let r of[...De.projs.keys()])De.removeProj(r)}m.ended=!!n.st,m.tm=n.tm,m.orbMask=n.o,m.runeMask=n.u??15,m.holder=n.z||0,m.barrelMask=n.bm||0,m.ticks.push([e,n.k||0]),m.ticks.length>30&&m.ticks.shift(),m.snapN=(m.snapN||0)+1;for(let r of n.p){let a=w_(r[0]);a&&(a.seen=m.snapN,a.hp=r[4],a.maxHp=r[5],a.lvl=r[6],a.flags=r[7],r[0]===m.myId?(m.me.hp=r[4],m.me.maxHp=r[5],m.me.lvl=r[6],m.me.flags=r[7]):(a.buf.push({t:e,x:r[1],z:r[2],yaw:r[3]}),a.buf.length>30&&a.buf.shift(),a.av.setInfo(r[4],r[5],r[6],!!(r[7]&64))))}for(let[r,a]of m.players)a.seen!==m.snapN&&(a.av.dispose(ln),m.players.delete(r));let i=n.me,s=m.pred;for(m.me.xp=i[6],m.me.respawnT=i[7],m.me.dmgT=i[8]||0,m.me.spdT=i[9]||0,m.me.ult=i[10]||0,m.ev=n.ev||null,m.wv=n.wv||null,m.rv=n.rv||null,m.me.perks=i[11]||"",m.me.offer=i[12]||0,m.me.spare=i[13]||0,s.spd=i[14]||1;m.pending.length&&m.pending[0].s<=n.a;)m.pending.shift();if(s.x=i[0],s.z=i[1],s.dashT=i[2],s.dx=i[3],s.dz=i[4],s.skillCd=i[5],!(m.me.flags&1)&&!m.ended)for(let r of m.pending)Sh(s,r,m.cls,_i);else m.pending.length=0;for(let r of n.e)A_(r);m.ended&&!t&&(ce.fire=!1,$h(!0),st("level")),!m.ended&&t&&(D("score").classList.add("hidden"),At("Ronde baru dimulai"))}var Ei=new U;function gn(n,e){return Math.max(0,1-Math.hypot(n-m.rx,e-m.rz)/45)}function Qt(n){return m.roster.get(n)?.name||"\u2014"}function A_(n){switch(n[0]){case"s":{let e=m.players.get(n[2]),t=e?.cls||m.roster.get(n[2])?.cls||"ranger";De.spawnProj(n[1],t,n[3],n[4],n[5]),n[2]!==m.myId&&e&&m.lastShotTick.get(n[2])!==m.snapN&&(m.lastShotTick.set(n[2],m.snapN),e.av.fireKick(),De.muzzle(e.av.tipWorld(Ei),t,n[5]),st(t,gn(n[3],n[4])*.8,!0));break}case"h":{let t=De.projs.get(n[1])?.cls||"ranger";De.removeProj(n[1]),De.impact(n[2],n[3],t),t==="mage"&&(st("boom",gn(n[2],n[3])),m.shake=Math.max(m.shake,.5*gn(n[2],n[3])));break}case"d":{let e=n[1]===m.myId;if(e){D("vignette").style.opacity=.75,setTimeout(()=>{D("vignette").style.opacity=0},160),st("hurt"),m.shake=Math.max(m.shake,.35);let t=n[2]&&n[2]!==m.myId?m.players.get(n[2]):null;t&&(S_(t.x,t.z),m.arcN=(m.arcN||0)+1),m.time-m.buzzT>.12&&(m.buzzT=m.time,an(35))}if(n[2]===m.myId&&!e){let t=D("cross");t.classList.remove("hit"),t.offsetWidth,t.classList.add("hit"),st("hit")}(e||n[2]===m.myId)&&R_(n[4],n[5],n[3],e),De.burst(n[4],1.5,n[5],16730938,5,4,.7,.3);break}case"k":{let e=document.createElement("div");(n[1]===m.myId||n[2]===m.myId)&&(e.className="me"),e.innerHTML="<span></span><i>\u2726</i><span></span>",e.children[0].textContent=Qt(n[1]),e.children[2].textContent=Qt(n[2]);let t=D("feed");for(t.appendChild(e);t.children.length>4;)t.firstChild.remove();setTimeout(()=>e.remove(),5e3);let i=m.players.get(n[2]);i&&De.burst(i.x,1.4,i.z,yi[i.cls].color,40,8,1.4,.9),n[1]===m.myId&&n[2]!==m.myId&&(st("kill"),At("Lawan tumbang"),an([40,40,70]),m.tut&&(m.tut.kills++,m.tut.check())),n[2]===m.myId&&(st("death"),an(250),ce.fire=!1,D("deathBy").textContent=`Dikalahkan oleh ${Qt(n[1])}`,D("death").classList.remove("hidden"));break}case"r":{if(De.pillar(n[2],n[3],12577279),n[1]===m.myId)ce.yaw=Math.atan2(-n[2],-n[3]),m.rx=n[2],m.rz=n[3],m.pending.length=0,D("death").classList.add("hidden");else{let e=m.players.get(n[1]);e&&(e.buf.length=0)}break}case"l":{let e=m.players.get(n[1]);e&&De.pillar(e.x,e.z,16766571),n[1]===m.myId&&(st("level"),At(`Naik ke Level ${n[2]}`));break}case"n":De.nova(n[2],n[3],m.roster.get(n[1])?.cls==="brute"?Kn.brute.color:pn.mage.color,m.roster.get(n[1])?.cls==="brute"?Kn.brute.slam.r:Hd),st("nova",gn(n[2],n[3])),m.shake=Math.max(m.shake,.6*gn(n[2],n[3]));break;case"E":{let e=_h[n[1]];if(!e)break;At(`${e.name}: ${e.desc}`),st("level"),an([60,40,60]);break}case"g":{let e=m.ev?.[2]??0,t=m.ev?.[3]??0;De.pillar(e,t,16766315),De.burst(e,1.4,t,16766315,50,7,1.4,.9,-2),At(n[1]===m.myId?"Cawan Emas: HP penuh dan kedua rune!":`${Qt(n[1])} mengambil Cawan Emas`),n[1]===m.myId&&(st("level"),an([30,30,80]));break}case"B":At(n[1]===m.myId?"Kamu jadi BURONAN: semua mengincarmu!":`${Qt(n[1])} jadi buronan: tumbangkan untuk hadiah XP`),n[1]===m.myId&&an([80,60,80]);break;case"b":At(n[1]===m.myId?"Buronan tumbang: hadiah XP besar!":`${Qt(n[1])} menumbangkan buronan ${Qt(n[2])}`),n[1]===m.myId&&st("level");break;case"C":n[1]===m.myId&&(setTimeout(()=>At(`Tantangan selesai: ${n[2]}`),900),st("level"),an([40,40,40,40,90]));break;case"U":{let e=m.players.get(n[1]);if(!e)break;let t=pn[n[2]]?.color??16766315;De.pillar(e.x,e.z,16766315),De.burst(e.x,1.6,e.z,t,40,9,1.5,.7,0),n[2]==="guardian"&&De.nova(e.x,e.z,t,6),n[1]===m.myId&&(At(Mh[n[2]].name+"!"),an(120),m.shake=Math.max(m.shake,.5)),st(n[2]==="mage"?"nova":n[2]==="guardian"?"shield":"ranger",gn(e.x,e.z));break}case"M":De.ring(n[1],n[2],16726830,6,.8),De.ring(n[1],n[2],16756848,4,.8),De.flash(n[1],6,n[2],16734766,30);break;case"m":{De.nova(n[1],n[2],16738862,6),De.burst(n[1],1,n[2],16765562,60,12,2,.8,8),st("boom",gn(n[1],n[2])),m.shake=Math.max(m.shake,.9*gn(n[1],n[2]));break}case"H":De.ring(n[2],n[3],16769658,7,.7),De.pillar(n[2],n[3],16769658),st("orb",gn(n[2],n[3]));break;case"X":{let e=ti.barrels?.[n[1]];e&&(De.nova(e[0],e[1],16742958,5),De.burst(e[0],1,e[1],16765562,50,11,1.8,.8,8),st("boom",gn(e[0],e[1])),m.shake=Math.max(m.shake,.8*gn(e[0],e[1])));break}case"q":{if(n[1]!==m.myId&&!ta(n[1]))break;let e=document.createElement("div");e.className="ping",e.textContent=`${Qt(n[1])}: ${bh[n[2]]}`,D("feed").appendChild(e),setTimeout(()=>e.remove(),5e3),De.ring(n[3],n[4],8257456,3,1.2),De.pillar(n[3],n[4],8257456),st("orb",.6),(m.pings||=[]).push({x:n[3],z:n[4],t:m.time+5});break}case"K":At(n[1]===m.myId?"Kamu dinobatkan menjadi RAJA!":`${Qt(n[1])} menjadi raja: buru dia!`);{let e=m.players.get(n[1]);e&&De.pillar(e.x,e.z,16765514)}n[1]===m.myId&&(st("level"),an([80,50,120]));break;case"Z":setTimeout(()=>At(`Event ${n[1]} selesai. Terima kasih sudah ikut!`),600),m.event=null;break;case"W":At(n[2]?`Gelombang ${n[1]}: ${n[1]%10===0?"Ratu Laba-laba":"Golem Batu"} datang!`:`Gelombang ${n[1]}`),st("level"),an([50,50,50]),D("perks").classList.add("hidden");break;case"w":At(n[2]===n[1]&&n[1]>0?`Gelombang ${n[1]} selesai! Titik simpan tercapai`:`Gelombang ${n[1]} selesai! Rekan bangkit, HP pulih`),st("level"),D("death").classList.add("hidden");break;case"A":{let e=m.players.get(n[1]);if(!e)break;e.av.windup?.(n[2]?.9:Jr.windup),(m.windIds||=new Map).set(n[1],m.time+(n[2]?.9:Jr.windup)),De.ring(e.x,e.z,n[2]?16742938:16726843,n[2]?Kn.brute.slam.r:2.4,n[2]?.9:Jr.windup),Math.hypot(e.x-m.rx,e.z-m.rz)<8&&st("hurt",.4);break}case"P":n[1]===m.myId&&Bf(n[2]);break;case"p":n[1]===m.myId?(D("perks").classList.add("hidden"),At(`Berkah ${Zi[n[2]].name}: ${Zi[n[2]].desc}`)):m.roster.get(n[1])&&At(`${Qt(n[1])} memilih ${Zi[n[2]].name}`);break;case"v":{let e=m.players.get(n[2]);e&&(De.pillar(e.x,e.z,8257456),De.burst(e.x,1.2,e.z,8257456,30,5,1.2,.7,-2)),n[2]===m.myId?(D("death").classList.add("hidden"),At(n[1]===m.myId?"Bangkit dengan nyawa cadangan!":`${Qt(n[1])} menolongmu!`),an([40,40,80]),st("level")):n[1]===m.myId&&At(`Kamu menolong ${Qt(n[2])}!`);break}case"x":De.nova(n[1],n[2],16756848,4),st("boom",gn(n[1],n[2])*.6);break;case"a":{let e=m.players.get(n[1]);e&&(e.av.fireKick(),st("hit",gn(e.x,e.z)*.6));break}case"u":{let e=ti.runes[n[1]];if(!e)break;let t=$i[e.type];De.burst(e.x,1.2,e.z,t.color,34,6,1.3,.8,-2),De.pillar(e.x,e.z,t.color),n[2]===m.myId&&(st("level"),an([30,30,30]),At(`${t.name}: ${t.desc}`));break}case"o":if(!ti.orbs[n[1]])break;De.burst(ti.orbs[n[1]][0],1.2,ti.orbs[n[1]][1],5898140,26,5,1.1,.7,-2),n[2]===m.myId&&st("orb");break}}var Af=0;function At(n){let e=D("toast");e.textContent=n,e.classList.add("on"),clearTimeout(Af),Af=setTimeout(()=>e.classList.remove("on"),1800)}var Io=[];function R_(n,e,t,i){let s=Io.find(r=>r.t<=0)||(()=>{if(Io.length>=20)return null;let r={el:document.createElement("div"),t:0};return D("dmgLayer").appendChild(r.el),Io.push(r),r})();s&&(s.el.className="dmg"+(i?" me":""),s.el.textContent=(i?"-":"")+t,s.t=.8,s.x=n+(Math.random()-.5)*.8,s.z=e+(Math.random()-.5)*.8,s.el.style.display="")}function C_(n){for(let e of Io)if(!(e.t<=0)){if(e.t-=n,e.t<=0){e.el.style.display="none";continue}if(Ei.set(e.x,2.6+(.8-e.t)*2.2,e.z).project(on),Ei.z>1){e.el.style.opacity=0;continue}e.el.style.opacity=Math.min(1,e.t*3),e.el.style.transform=`translate(${(Ei.x*.5+.5)*innerWidth}px,${(-Ei.y*.5+.5)*innerHeight}px) translate(-50%,-50%) scale(${1+Math.max(0,e.t-.6)*3})`}}function Do(){return[...m.roster.values()].filter(n=>!Kn[n.cls]).sort((n,e)=>(m.team>=0?n.team-e.team:0)||(m.gm==="koth"||m.gm==="king"?e.pts-n.pts:0)||e.kills-n.kills||n.deaths-e.deaths)}var ta=n=>m.team>=0&&m.roster.get(n)?.team===m.team;function P_(){let n=Do(),e=m.roster.get(m.myId);e&&(D("rank").textContent="#"+(n.indexOf(e)+1),m.gm!=="pve"&&(D("myScore").textContent=m.team>=0?`${mn[0].name} ${m.teamScore[0]} \xB7 ${m.teamScore[1]} ${mn[1].name}`:m.gm==="koth"||m.gm==="king"?`${e.pts} / ${m.limit} poin`:`${e.kills} / ${m.limit||ph}`),D("score").classList.contains("hidden")||(Wf(),!m.ended&&m.team>=0&&(D("scoreTitle").textContent=`${mn[0].name} ${m.teamScore[0]} \xB7 ${m.teamScore[1]} ${mn[1].name}`)))}function Wf(){let n=m.gm==="koth"||m.gm==="king",e=Do().map((t,i)=>`<tr class="${t.id===m.myId?"me":""}"><td>${i+1}</td><td></td>${n?`<td>${t.pts}</td>`:""}<td>${t.kills}</td><td>${t.deaths}</td></tr>`).join("");D("scoreTable").innerHTML=`<tr><th>#</th><th>Pengembara</th>${n?"<th>Poin</th>":""}<th>Kill</th><th>Gugur</th></tr>${e}`,Do().forEach((t,i)=>{let s=D("scoreTable").rows[i+1].cells[1];if(s.textContent=t.name+(t.bot?" (bot)":"")+" \xB7 "+pn[t.cls].name,t.team>=0){let r=document.createElement("i");r.className="tdot",r.style.background="#"+mn[t.team].color.toString(16).padStart(6,"0"),s.prepend(r)}})}function $h(n){Wf();let e=Do()[0],t=m.teamScore,i=t[0]===t[1]?-1:t[0]>t[1]?0:1;if(n&&m.gm==="pve"){let s=m.wv?.[3]||0;D("scoreTitle").textContent=`Bertahan sampai gelombang ${m.wv?.[0]||0}`,D("scoreNext").textContent=s?`Ronde berikutnya lanjut dari gelombang ${s+1} (titik simpan) dengan berkah acak`:"Ronde berikutnya mulai dari gelombang 1",D("score").classList.remove("hidden");return}D("scoreTitle").textContent=n?m.team>=0?i<0?"Seri":i===m.team?`Regu ${mn[i].name} Menang!`:`Regu ${mn[i].name} Menang`:e?.id===m.myId?"Kamu Menang!":`${e?.name||""} Menang`:m.team>=0?`${mn[0].name} ${t[0]} \xB7 ${t[1]} ${mn[1].name}`:"Papan Skor",D("score").classList.remove("hidden")}D("top").addEventListener("click",()=>{m.ended||(D("score").classList.contains("hidden")?$h(!1):D("score").classList.add("hidden"))});D("score").addEventListener("click",()=>{m.ended||D("score").classList.add("hidden")});var Bo=D("pause");D("pauseBtn").addEventListener("click",()=>{Bo.classList.toggle("hidden"),document.exitPointerLock?.(),ce.fire=!1});D("resume").addEventListener("click",()=>Bo.classList.add("hidden"));D("leave").addEventListener("click",()=>{Fo(),m.myId=0,D("menuMsg").textContent=""});D("quality").addEventListener("change",n=>{Lf=!1,Ue.set("qualityManual","1"),Ue.set("quality",n.target.value),No(n.target.value)});D("sens").value=Ue.get("sens","1");ce.sens=Number(D("sens").value);D("sens").addEventListener("input",n=>{ce.sens=Number(n.target.value),Ue.set("sens",n.target.value)});D("autoFire").checked=m.autoFire;D("aimAssist").checked=m.aimAssist;D("autoFire").addEventListener("change",n=>{m.autoFire=n.target.checked,Ue.set("autoFire",m.autoFire?"1":"")});D("aimAssist").addEventListener("change",n=>{m.aimAssist=n.target.checked,Ue.set("aimAssist",m.aimAssist?"1":"")});D("mute").addEventListener("change",n=>xf(n.target.checked));var ea={music:Number(Ue.get("volMusic",Ue.get("music","1")==="1"?"0.6":"0")),sfx:Number(Ue.get("volSfx","0.8"))};for(let n of document.querySelectorAll("[data-vol]")){let e=n.dataset.vol;n.value=ea[e],n.addEventListener("input",()=>{ea[e]=Number(n.value),Ue.set(e==="music"?"volMusic":"volSfx",n.value),Ao(e,ea[e]);for(let t of document.querySelectorAll(`[data-vol="${e}"]`))t!==n&&(t.value=n.value);Mr()}),e==="sfx"&&n.addEventListener("change",()=>st("hit"))}var I_=()=>m.phase==="play"?"battle":"menu";function Mr(){kh(),Ao("music",ea.music),Ao("sfx",ea.sfx),Ro(I_()),_f()&&(removeEventListener("pointerdown",Mr,!0),removeEventListener("keydown",Mr,!0))}addEventListener("pointerdown",Mr,!0);addEventListener("keydown",Mr,!0);Mr();document.addEventListener("visibilitychange",()=>vf(!document.hidden));D("vibrate").checked=m.vibrate;D("vibrate").addEventListener("change",n=>{m.vibrate=n.target.checked,Ue.set("vibrate",m.vibrate?"1":""),m.vibrate&&an(40)});for(let n of[Bo])for(let e of["touchstart","touchmove"])n.addEventListener(e,t=>t.stopPropagation());var L_=D("minimap"),Ye=L_.getContext("2d"),Uo=document.createElement("canvas");Uo.width=Uo.height=132;function Xf(){let n=Uo.getContext("2d"),e=132/(tt*2+6),t=66;n.clearRect(0,0,132,132),n.fillStyle="rgba(190,170,220,0.55)";for(let i of ti.obst)i.t==="cyl"?(n.beginPath(),n.arc(t-i.x*e,t-i.z*e,Math.max(1.5,i.r*e),0,7),n.fill()):n.fillRect(t-(i.x+i.w/2)*e,t-(i.z+i.d/2)*e,i.w*e,i.d*e)}Xf();function D_(){let n=132/(tt*2+6),e=66;Ye.clearRect(0,0,132,132),Ye.drawImage(Uo,0,0),m.pings=(m.pings||[]).filter(t=>t.t>m.time);for(let t of m.pings)Ye.strokeStyle="#7dffb0",Ye.lineWidth=2,Ye.beginPath(),Ye.arc(e-t.x*n,e-t.z*n,4+m.time*6%4,0,7),Ye.stroke();ti.orbs.forEach(([t,i],s)=>{m.orbMask&1<<s&&(Ye.fillStyle="#59ff9c",Ye.fillRect(e-t*n-1.5,e-i*n-1.5,3,3))}),ti.runes.forEach((t,i)=>{m.runeMask&1<<i&&(Ye.fillStyle=t.type==="dmg"?"#ff3b4e":"#4dc3ff",Ye.beginPath(),Ye.arc(e-t.x*n,e-t.z*n,3,0,7),Ye.fill())}),m.gm==="koth"&&(Ye.strokeStyle=m.holder===m.myId?"#f2c66d":m.holder===-1?"#b76bff":m.holder?"#ff4d5e":"rgba(255,242,208,.7)",Ye.lineWidth=2,Ye.beginPath(),Ye.arc(e,e,Zr*n,0,7),Ye.stroke());for(let t of m.players.values()){if(t.id===m.myId||t.flags&1)continue;let i=ta(t.id);if(!!(t.flags&64)){Ye.fillStyle="#ffd56b",Ye.font="bold 12px sans-serif",Ye.textAlign="center",Ye.textBaseline="middle",Ye.fillText("\u2605",e-t.x*n,e-t.z*n);continue}!i&&Math.hypot(t.x-m.rx,t.z-m.rz)>32||(Ye.fillStyle=i?"#"+mn[m.team].color.toString(16).padStart(6,"0"):"#ff5a4a",Ye.beginPath(),Ye.arc(e-t.x*n,e-t.z*n,3,0,7),Ye.fill())}Ye.save(),Ye.translate(e-m.rx*n,e-m.rz*n),Ye.rotate(ce.yaw),Ye.fillStyle="#fff",Ye.beginPath(),Ye.moveTo(0,-6),Ye.lineTo(4,4),Ye.lineTo(-4,4),Ye.closePath(),Ye.fill(),Ye.restore()}uf({canvas:If,touchLayer:D("touchLayer"),stick:D("stick"),knob:D("knob"),fireBtn:D("fireBtn"),skillBtn:D("skillBtn"),ultBtn:D("ultBtn")});No(Es);function U_(){let n=null,e=1e9,t=m.cls.projSpeed*m.cls.projLife;for(let i of m.players.values()){if(i.id===m.myId||i.flags&1||ta(i.id))continue;let s=i.x-m.rx,r=i.z-m.rz,a=Math.hypot(s,r);if(a>t+2||a<.5)continue;let o=mr(Math.atan2(s,r),ce.yaw);if(Math.abs(o)>.3)continue;let l=Math.abs(o)*20+a*.05;l<e&&qd(m.rx,m.rz,i.x,i.z)&&(e=l,n={p:i,diff:o,d:a})}return n}function N_(){let n=m.ticks,e=performance.now()-Vd*1e3;if(!n.length)return 0;for(let t=n.length-1;t>0;t--)if(n[t-1][0]<=e){let[i,s]=n[t-1],[r,a]=n[t];return Math.round((s+(a-s)*Math.min(1,(e-i)/(r-i||1)))*10)/10}return n[0][1]}function k_(){let n=m.me.flags&1,e=!Bo.classList.contains("hidden"),t=Math.sin(ce.yaw),i=Math.cos(ce.yaw),s=ce.jx,r=ce.jy,a=ce.fire,o=ce.skillQueued?1:0,l=ce.ultQueued&&m.me.ult>=yh?1:0;ce.skillQueued=!1,ce.ultQueued=!1,(e||m.ended)&&(s=r=0,a=!1,o=0,l=0);let c=(m.autoFire||m.aimAssist)&&!n&&!m.ended?U_():null;if(m.lockId=c?c.p.id:0,c){let x=Math.atan(1/c.d);m.aimAssist&&(a||m.autoFire)&&(ce.yaw+=Math.max(-1.6*_i,Math.min(1.6*_i,c.diff))),m.autoFire&&!e&&Math.abs(c.diff)<x&&(a=!0)}let h=x=>Math.round(x*1e3)/1e3,u={t:"in",s:++m.seq,mx:h(t*r-i*s),mz:h(i*r+t*s),y:h(ce.yaw),f:a&&!n?1:0,k:o,u:n?0:l,vt:N_()};if(m.ws?.readyState===1&&m.ws.send(JSON.stringify(u)),n||m.ended)return;let d=Sh(m.pred,u,m.cls,_i);m.pending.push(u),m.pending.length>90&&m.pending.shift();let f=m.players.get(m.myId);if(m.tut&&!m.tut.done){let x=m.tut,v=Math.hypot(m.pred.x-(x.px??m.pred.x),m.pred.z-(x.pz??m.pred.z));v<2&&(x.moved+=v),x.px=m.pred.x,x.pz=m.pred.z,x.lastYaw!==null&&x.i>=1&&(x.turned+=Math.abs(mr(ce.yaw,x.lastYaw))),x.lastYaw=ce.yaw,d&&x.skills++,x.check()}d&&(st(m.cls.skill),m.cls.skill==="dash"&&f&&De.burst(m.rx,1.2,m.rz,m.cls.color,24,5,1.2,.4,0)),m.localFireCd-=_i,u.f&&m.localFireCd<=0&&f&&(m.localFireCd=m.cls.fireCd,m.tut&&m.tut.shots++,f.av.fireKick(),De.muzzle(f.av.tipWorld(Ei),m.clsKey,ce.yaw),st(m.clsKey),m.shake=Math.max(m.shake,m.clsKey==="ranger"?.08:.22))}var _r=7.2,Rf=new U,Cf=new U,Pf=performance.now(),Co=0,Bh=0,Lo=60,Po=0,Oh=0;function qf(n){requestAnimationFrame(qf);let e=Math.min(.1,(n-Pf)/1e3);Pf=n,m.time+=e;let t=m.time;if(m.phase==="play"&&m.myId){m.acc+=e;let i=0;for(;m.acc>=_i&&i++<4;)k_(),m.acc-=_i;m.acc>_i&&(m.acc=0);let s=m.pred,a=Math.hypot(s.x-m.rx,s.z-m.rz)>6?1:Math.min(1,e*22),o=m.rx,l=m.rz;m.rx+=(s.x-m.rx)*a,m.rz+=(s.z-m.rz)*a;let c=e>0?Math.hypot(m.rx-o,m.rz-l)/e:0;c>2&&c<20&&!(m.me.flags&1)&&(m.stepT-=e*c/8.5,m.stepT<=0&&(m.stepT=.36,yf()));let h=n-110;for(let P of m.players.values()){if(P.id===m.myId)P.x=m.rx,P.z=m.rz,P.yaw=ce.yaw,P.flags=m.me.flags;else{let S=P.buf;if(S.length){let M=S.length-1;for(;M>0&&S[M-1].t>h;)M--;let k=S[M],X=S[M-1]||k,C=k.t>X.t?(h-X.t)/(k.t-X.t):1;C=Math.max(0,Math.min(1.25,C)),Math.hypot(k.x-X.x,k.z-X.z)>8&&(C=1),P.x=X.x+(k.x-X.x)*C,P.z=X.z+(k.z-X.z)*C,P.yaw=X.yaw+mr(k.yaw,X.yaw)*Math.min(1,C)}}P.av.update(e,P.x,P.z,P.yaw,P.flags,t),P.flags&8&&Math.random()<.7&&De.particle(P.x,1+Math.random(),P.z,0,.5,0,yi[P.cls].color,1.3,.3,0),m.mut==="giant"&&(P.av.big=1.4),P.flags&128&&Math.random()<.5&&De.particle(P.x+(Math.random()-.5),.3+Math.random()*1.6,P.z+(Math.random()-.5),0,-.5,0,8378623,.9,.5,0),P.flags&1||(P.flags&16&&Math.random()<.5&&De.particle(P.x+(Math.random()-.5),.4+Math.random()*2,P.z+(Math.random()-.5),0,1.6,0,$i.dmg.color,.9,.5,0),P.flags&32&&Math.random()<.5&&De.particle(P.x+(Math.random()-.5),.2+Math.random()*.6,P.z+(Math.random()-.5),0,.3,0,$i.spd.color,1.1,.4,0))}let u=null;if(m.me.flags&1&&m.team>=0){let P=1e9;for(let S of m.players.values()){if(S.id===m.myId||S.flags&1||!ta(S.id))continue;let M=Math.hypot(S.x-m.pred.x,S.z-m.pred.z);M<P&&(P=M,u=S)}}D("specTag").classList.toggle("hidden",!u),u&&(D("specTag").textContent=`Menonton ${Qt(u.id)}`);let d=u?u.x:m.rx,f=u?u.z:m.rz,x=u?u.yaw:ce.yaw,v=Math.sin(x),g=Math.cos(x),p=_r;for(let P=.15;P<=1.001;P+=.085)if(Ji(d-v*_r*P,f-g*_r*P,.5)){p=Math.max(2.2,_r*(P-.1));break}m.camDist+=(p-m.camDist)*Math.min(1,e*(p<m.camDist?16:4)),m.shake=Math.max(0,m.shake-e*2.5);let _=m.shake*m.shake*.6,E=innerHeight>innerWidth;Rf.set(d-v*m.camDist+(Math.random()-.5)*_,(E?6:4.3)+(_r-m.camDist)*.55+(Math.random()-.5)*_,f-g*m.camDist),on.position.copy(Rf);let y=.8+5.2*(m.camDist/_r);Cf.set(d+v*y,2,f+g*y),on.lookAt(Cf),Ei.set(m.rx+v*20,1.55,m.rz+g*20).project(on);let N=D("cross");if(N.style.left=(Ei.x*.5+.5)*100+"%",N.style.top=(-Ei.y*.5+.5)*100+"%",N.classList.toggle("lock",!!m.lockId),N.style.display=m.me.flags&1?"none":"",Oh-=e,Oh<=0){Oh=.1;let P=m.me;D("hpFill").style.width=Math.max(0,P.hp/P.maxHp*100)+"%",D("hpText").textContent=`${Math.max(0,P.hp)} / ${P.maxHp}`,D("lvl").textContent=P.lvl;let S=mh[P.lvl-1],M=mh[P.lvl];D("xpFill").style.width=(P.lvl>=zd?100:Math.min(100,(P.xp-S)/(M-S)*100))+"%";let k=m.pred.skillCd;D("skillCd").style.height=k/m.cls.skillCd*100+"%",D("skillNum").textContent=k>0?Math.ceil(k):"";let X=Math.min(1,(m.me.ult||0)/yh);D("ultRing").style.strokeDashoffset=String(176*(1-X)),D("ultBtn").classList.toggle("ready",X>=1),D("ultName").textContent=X>=1?Mh[m.clsKey].name:`${Math.floor(X*100)}%`;let C=m.ev;D("eventTag").classList.toggle("hidden",!C),C&&(D("eventTag").textContent=`${_h[C[0]].name} \xB7 ${C[1]} dtk`),D("skillName").style.opacity=k>0?.25:1;let H=Math.max(0,m.tm);if(D("timer").textContent=m.gm==="pve"&&!m.ended?m.wv?.[1]===0?`Mulai ${H}`:`G${m.wv?.[0]||1}`:`${Math.floor(H/60)}:${String(H%60).padStart(2,"0")}`,m.gm==="pve"&&m.wv&&(D("myScore").textContent=m.wv[1]===0?`Gelombang ${m.wv[0]+1} segera`:`Gelombang ${m.wv[0]} \xB7 ${m.wv[2]} monster`),P.flags&1){let G=m.rv?.find(F=>F[0]===m.myId);D("deathT").textContent=m.gm!=="pve"?`Bangkit dalam ${Math.ceil(P.respawnT)}\u2026`:G?.[2]>0?`Nyawa cadangan: bangkit sendiri dalam ${G[2]}\u2026`:G?.[1]>0?`Rekan sedang menolongmu\u2026 ${G[1]}%`:"Tunggu rekan berdiri di dekatmu 3 detik, atau gelombang selesai."}if(D("perkBar").innerHTML=m.gm==="pve"?(m.me.perks?m.me.perks.split(",").map(G=>{let F=G.replace(/\d+$/,""),T=+G.slice(F.length);return`<span>${Zi[F]?.name||F}${T>1?" \xD7"+T:""}</span>`}).join(""):"")+(m.me.spare?"<span>Nyawa cadangan</span>":""):"",m.me.offer&&D("perks").classList.contains("hidden")&&!(m.me.flags&1)&&Bf(m.me.offer),m.ended?D("scoreNext").textContent=m.gm==="pve"&&m.wv?.[3]?`Lanjut dari gelombang ${m.wv[3]+1} (titik simpan) dalam ${H} detik`:`Ronde berikutnya dalam ${H} detik`:D("scoreNext").textContent="",m.ended||(ce.showScore&&D("score").classList.contains("hidden")?$h(!1):!ce.showScore&&!rn&&m.tabOpen&&D("score").classList.add("hidden"),m.tabOpen=ce.showScore),D("net").textContent=`${m.ping} ms \xB7 ${Lo} fps`,D("buffs").innerHTML=[["dmg",m.me.dmgT],["spd",m.me.spdT]].filter(([,G])=>G>0).map(([G,F])=>`<span class="buff" style="--c:#${$i[G].color.toString(16).padStart(6,"0")}"><i></i>${$i[G].name.replace("Rune ","")} ${Math.ceil(F)}</span>`).join(""),m.gm==="king"){let G=[...m.players.values()].find(T=>T.flags&64),F=D("zoneTag");F.textContent=G?G.id===m.myId?"Kamu sang RAJA: bertahan hidup untuk poin!":`Buru sang raja: ${Qt(G.id)}`:"Mahkota menunggu pemilik baru\u2026",F.style.setProperty("--c",G?.id===m.myId?"#f2c66d":"#ff4d5e")}if(m.gm==="koth"){let G=m.holder,F=D("zoneTag"),T=Math.hypot(m.rx,m.rz)<Zr;F.textContent=G===m.myId?"Kamu menguasai altar":G===-1?"Altar diperebutkan":G?`Altar dikuasai ${Qt(G)}`:T?"Bertahan di lingkaran untuk mengumpulkan poin":"Altar kosong: rebut lingkaran di tengah",F.style.setProperty("--c",G===m.myId?"#f2c66d":G===-1?"#b76bff":G?"#ff4d5e":"#fff2d0")}D_()}C_(e),pt.update(t,{x:m.rx,z:m.rz},m.orbMask,m.barrelMask),__(t),y_(),Hh.update(t,m.runeMask,m.gm,m.holder,m.myId);let R=m.ev?.[0]==="eclipse"?1:0;m.eclipse=(m.eclipse||0)+(R-(m.eclipse||0))*Math.min(1,e*1.5),wn.toneMappingExposure=1.15-.7*m.eclipse,pt.fog&&(pt.fogBase??=pt.fog.density,pt.fog.density=pt.fogBase*(1+3.5*m.eclipse));let L=m.ev?.[0]==="golden"&&!m.ev[4];Qn.visible=L,L&&(Qn.position.set(m.ev[2],1.1+Math.sin(t*2.5)*.15,m.ev[3]),Qn.rotation.y=t*1.2)}else{let i=t*.08;on.position.set(Math.sin(i)*30,9+Math.sin(t*.2)*1.5,Math.cos(i)*30),on.lookAt(0,3.5,0),pt.update(t,{x:0,z:0},255),Hh.update(t,15,"dm",0,0)}De.update(e),Es==="low"?wn.render(ln,on):Si.render(e),Co+=e,Bh++,Co>=1&&(Lo=Math.round(Bh/Co),Co=0,Bh=0,Lf&&!document.hidden&&m.time>4&&(Po=Lo<27?Po+1:0,Po>=3&&Es!=="low"&&(Po=0,No(Es==="high"?"medium":"low"),Ue.set("quality",Es))))}requestAnimationFrame(qf);
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
