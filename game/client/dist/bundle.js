var Vc="170";var Xf=0,jh=1,qf=2;var cd=1,Gc=2,ei=3,wi=0,zt=1,_t=2,Bn=0,Ds=1,rt=2,Qh=3,eu=4,$f=5,ji=100,Yf=101,Zf=102,Jf=103,Kf=104,jf=200,Qf=201,ep=202,tp=203,gl=204,xl=205,np=206,ip=207,sp=208,rp=209,ap=210,op=211,lp=212,cp=213,hp=214,vl=0,_l=1,yl=2,Fs=3,Ml=4,bl=5,Sl=6,El=7,hd=0,up=1,dp=2,Si=0,Wc=1,Xc=2,qc=3,zr=4,fp=5,$c=6,Yc=7;var ud=300,Bs=301,Os=302,wl=303,Tl=304,to=306,Lr=1e3,ni=1001,Al=1002,cn=1003,pp=1004;var Kr=1005;var kn=1006,Uo=1007;var es=1008;var ri=1009,dd=1010,fd=1011,Dr=1012,Zc=1013,ts=1014,Fn=1015,Pn=1016,Jc=1017,Kc=1018,zs=1020,pd=35902,md=1021,gd=1022,An=1023,xd=1024,vd=1025,Us=1026,Hs=1027,jc=1028,Qc=1029,_d=1030,eh=1031;var th=1033,Ta=33776,Aa=33777,Ra=33778,Ca=33779,Rl=35840,Cl=35841,Pl=35842,Il=35843,Ll=36196,Dl=37492,Ul=37496,Nl=37808,kl=37809,Fl=37810,Bl=37811,Ol=37812,zl=37813,Hl=37814,Vl=37815,Gl=37816,Wl=37817,Xl=37818,ql=37819,$l=37820,Yl=37821,Pa=36492,Zl=36494,Jl=36495,yd=36283,Kl=36284,jl=36285,Ql=36286;var Ia=2300,ec=2301,No=2302,tu=2400,nu=2401,iu=2402;var mp=3200,gp=3201;var Md=0,xp=1,Un="",Ut="srgb",nr="srgb-linear",no="linear",lt="srgb";var fs=7680;var su=519,vp=512,_p=513,yp=514,bd=515,Mp=516,bp=517,Sp=518,Ep=519,tc=35044,io=35048;var ru="300 es",ii=2e3,La=2001,Ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ko=Math.PI/180,nc=180/Math.PI;function Ei(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Vt(n,e,t){return Math.max(e,Math.min(t,n))}function wp(n,e){return(n%e+e)%e}function Fo(n,e,t){return(1-t)*n+t*e}function Nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var se=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],x=i[8],v=s[0],g=s[3],p=s[6],_=s[1],S=s[4],y=s[7],U=s[2],R=s[5],I=s[8];return r[0]=a*v+o*_+l*U,r[3]=a*g+o*S+l*R,r[6]=a*p+o*y+l*I,r[1]=c*v+h*_+u*U,r[4]=c*g+h*S+u*R,r[7]=c*p+h*y+u*I,r[2]=d*v+f*_+x*U,r[5]=d*g+f*S+x*R,r[8]=d*p+f*y+x*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,x=t*u+i*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Bo.makeScale(e,t)),this}rotate(e){return this.premultiply(Bo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Bo=new Ve;function Sd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ur(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tp(){let n=Ur("canvas");return n.style.display="block",n}var au={};function Ar(n){n in au||(au[n]=!0,console.warn(n))}function Ap(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Rp(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cp(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ze={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(n.r=si(n.r),n.g=si(n.g),n.b=si(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(n.r=Ns(n.r),n.g=Ns(n.g),n.b=Ns(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Un?no:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ou=[.64,.33,.3,.6,.15,.06],lu=[.2126,.7152,.0722],cu=[.3127,.329],hu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uu=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[nr]:{primaries:ou,whitePoint:cu,transfer:no,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:lu,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:ou,whitePoint:cu,transfer:lt,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:lu,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}});var ps,ic=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ps===void 0&&(ps=Ur("canvas")),ps.width=e.width,ps.height=e.height;let i=ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ur("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pp=0,Da=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Oo(s[a].image)):r.push(Oo(s[a]))}else r=Oo(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Oo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ic.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ip=0,Gt=class n extends Ti{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ni,s=ni,r=kn,a=es,o=An,l=ri,c=n.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Ei(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lr:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lr:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=ud;Gt.DEFAULT_ANISOTROPY=1;var ft=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],x=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,y=(f+1)/2,U=(p+1)/2,R=(h+d)/4,I=(u+v)/4,C=(x+g)/4;return S>y&&S>U?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=R/i,r=I/i):y>U?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=R/s,r=C/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=I/r,s=C/r),this.set(i,s,r,t),this}let _=Math.sqrt((g-x)*(g-x)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-x)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sc=class extends Ti{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Gt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends sc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ua=class extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rc=class extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ai=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],x=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=x,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==x){let g=1-o,p=l*d+c*f+h*x+u*v,_=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let U=Math.sqrt(S),R=Math.atan2(U,p*_);g=Math.sin(g*R)/U,o=Math.sin(o*R)/U}let y=o*_;if(l=l*g+d*y,c=c*g+f*y,h=h*g+x*y,u=u*g+v*y,g===1-o){let U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+h*u+l*f-c*d,e[t+1]=l*x+h*d+c*u-o*f,e[t+2]=c*x+h*f+o*d-l*u,e[t+3]=h*x-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"YZX":this._x=d*h*u+c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u-d*f*x;break;case"XZY":this._x=d*h*u-c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(du.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zo.copy(this).projectOnVector(e),this.sub(zo)}reflect(e){return this.sub(zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zo=new D,du=new Ai,ai=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),Qr.subVectors(this.max,xr),ms.subVectors(e.a,xr),gs.subVectors(e.b,xr),xs.subVectors(e.c,xr),gi.subVectors(gs,ms),xi.subVectors(xs,gs),Xi.subVectors(ms,xs);let t=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-Xi.z,Xi.y,gi.z,0,-gi.x,xi.z,0,-xi.x,Xi.z,0,-Xi.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-Xi.y,Xi.x,0];return!Ho(t,ms,gs,xs,Qr)||(t=[1,0,0,0,1,0,0,0,1],!Ho(t,ms,gs,xs,Qr))?!1:(ea.crossVectors(gi,xi),t=[ea.x,ea.y,ea.z],Ho(t,ms,gs,xs,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Zn=[new D,new D,new D,new D,new D,new D,new D,new D],En=new D,jr=new ai,ms=new D,gs=new D,xs=new D,gi=new D,xi=new D,Xi=new D,xr=new D,Qr=new D,ea=new D,qi=new D;function Ho(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){qi.fromArray(n,r);let o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=i.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Lp=new ai,vr=new D,Vo=new D,Ri=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Lp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);let t=vr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(vr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(Vo)),this.expandByPoint(vr.copy(e.center).sub(Vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Jn=new D,Go=new D,ta=new D,vi=new D,Wo=new D,na=new D,Xo=new D,Na=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Go.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(Go);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ta),o=vi.dot(this.direction),l=-vi.dot(ta),c=vi.lengthSq(),h=Math.abs(1-a*a),u,d,f,x;if(h>0)if(u=a*l-o,d=a*o-l,x=r*h,u>=0)if(d>=-x)if(d<=x){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Go).addScaledVector(ta,d),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);let i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,s,r){Wo.subVectors(t,e),na.subVectors(i,e),Xo.crossVectors(Wo,na);let a=this.direction.dot(Xo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,e);let l=o*this.direction.dot(na.crossVectors(vi,na));if(l<0)return null;let c=o*this.direction.dot(Wo.cross(vi));if(c<0||l+c>a)return null;let h=-o*vi.dot(Xo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,d,f,x,v,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,f,x,v,g)}set(e,t,i,s,r,a,o,l,c,h,u,d,f,x,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,x=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+x*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,x=c*h,v=c*u;t[0]=d+v*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-x,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,x=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,x=o*h,v=o*u;t[0]=l*h,t[4]=x*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,x=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=x*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+x,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,x=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-x,t[2]=x*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dp,e,Up)}lookAt(e,t,i){let s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),_i.crossVectors(i,on),_i.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),_i.crossVectors(i,on)),_i.normalize(),ia.crossVectors(on,_i),s[0]=_i.x,s[4]=ia.x,s[8]=on.x,s[1]=_i.y,s[5]=ia.y,s[9]=on.y,s[2]=_i.z,s[6]=ia.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],x=i[2],v=i[6],g=i[10],p=i[14],_=i[3],S=i[7],y=i[11],U=i[15],R=s[0],I=s[4],C=s[8],E=s[12],M=s[1],N=s[5],z=s[9],H=s[13],$=s[2],Y=s[6],T=s[10],Z=s[14],A=s[3],q=s[7],V=s[11],j=s[15];return r[0]=a*R+o*M+l*$+c*A,r[4]=a*I+o*N+l*Y+c*q,r[8]=a*C+o*z+l*T+c*V,r[12]=a*E+o*H+l*Z+c*j,r[1]=h*R+u*M+d*$+f*A,r[5]=h*I+u*N+d*Y+f*q,r[9]=h*C+u*z+d*T+f*V,r[13]=h*E+u*H+d*Z+f*j,r[2]=x*R+v*M+g*$+p*A,r[6]=x*I+v*N+g*Y+p*q,r[10]=x*C+v*z+g*T+p*V,r[14]=x*E+v*H+g*Z+p*j,r[3]=_*R+S*M+y*$+U*A,r[7]=_*I+S*N+y*Y+U*q,r[11]=_*C+S*z+y*T+U*V,r[15]=_*E+S*H+y*Z+U*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],x=e[3],v=e[7],g=e[11],p=e[15];return x*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*f-i*l*f)+v*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+g*(+t*c*u-t*o*f-r*a*u+i*a*f+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],x=e[12],v=e[13],g=e[14],p=e[15],_=u*g*c-v*d*c+v*l*f-o*g*f-u*l*p+o*d*p,S=x*d*c-h*g*c-x*l*f+a*g*f+h*l*p-a*d*p,y=h*v*c-x*u*c+x*o*f-a*v*f-h*o*p+a*u*p,U=x*u*l-h*v*l-x*o*d+a*v*d+h*o*g-a*u*g,R=t*_+i*S+s*y+r*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return e[0]=_*I,e[1]=(v*d*r-u*g*r-v*s*f+i*g*f+u*s*p-i*d*p)*I,e[2]=(o*g*r-v*l*r+v*s*c-i*g*c-o*s*p+i*l*p)*I,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*f-i*l*f)*I,e[4]=S*I,e[5]=(h*g*r-x*d*r+x*s*f-t*g*f-h*s*p+t*d*p)*I,e[6]=(x*l*r-a*g*r-x*s*c+t*g*c+a*s*p-t*l*p)*I,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*I,e[8]=y*I,e[9]=(x*u*r-h*v*r-x*i*f+t*v*f+h*i*p-t*u*p)*I,e[10]=(a*v*r-x*o*r+x*i*c-t*v*c-a*i*p+t*o*p)*I,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*f-t*o*f)*I,e[12]=U*I,e[13]=(h*v*s-x*u*s+x*i*d-t*v*d-h*i*g+t*u*g)*I,e[14]=(x*o*s-a*v*s-x*i*l+t*v*l+a*i*g-t*o*g)*I,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*d+t*o*d)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,x=r*u,v=a*h,g=a*u,p=o*u,_=l*c,S=l*h,y=l*u,U=i.x,R=i.y,I=i.z;return s[0]=(1-(v+p))*U,s[1]=(f+y)*U,s[2]=(x-S)*U,s[3]=0,s[4]=(f-y)*R,s[5]=(1-(d+p))*R,s[6]=(g+_)*R,s[7]=0,s[8]=(x+S)*I,s[9]=(g-_)*I,s[10]=(1-(d+v))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=vs.set(s[0],s[1],s[2]).length(),a=vs.set(s[4],s[5],s[6]).length(),o=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],wn.copy(this);let c=1/r,h=1/a,u=1/o;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,t.setFromRotationMatrix(wn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=ii){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,x;if(o===ii)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===La)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ii){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*c,f=(i+s)*h,x,v;if(o===ii)x=(a+r)*u,v=-2*u;else if(o===La)x=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},vs=new D,wn=new pt,Dp=new D(0,0,0),Up=new D(1,1,1),_i=new D,ia=new D,on=new D,fu=new pt,pu=new Ai,On=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pu.setFromEuler(this),this.setFromQuaternion(pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var ka=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Np=0,mu=new D,_s=new Ai,Kn=new pt,sa=new D,_r=new D,kp=new D,Fp=new Ai,gu=new D(1,0,0),xu=new D(0,1,0),vu=new D(0,0,1),_u={type:"added"},Bp={type:"removed"},ys={type:"childadded",child:null},qo={type:"childremoved",child:null},Pt=class n extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new On,i=new Ai,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ve}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(gu,e)}rotateY(e){return this.rotateOnAxis(xu,e)}rotateZ(e){return this.rotateOnAxis(vu,e)}translateOnAxis(e,t){return mu.copy(e).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gu,e)}translateY(e){return this.translateOnAxis(xu,e)}translateZ(e){return this.translateOnAxis(vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?sa.copy(e):sa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(_r,sa,this.up):Kn.lookAt(sa,_r,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(Kn),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_u),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bp),qo.child=e,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_u),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Fp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new D(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new D,jn=new D,$o=new D,Qn=new D,Ms=new D,bs=new D,yu=new D,Yo=new D,Zo=new D,Jo=new D,Ko=new ft,jo=new ft,Qo=new ft,bi=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Tn.subVectors(e,t),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Tn.subVectors(s,t),jn.subVectors(i,t),$o.subVectors(e,t);let a=Tn.dot(Tn),o=Tn.dot(jn),l=Tn.dot($o),c=jn.dot(jn),h=jn.dot($o),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-f-x,x,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ko.setScalar(0),jo.setScalar(0),Qo.setScalar(0),Ko.fromBufferAttribute(e,t),jo.fromBufferAttribute(e,i),Qo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ko,r.x),a.addScaledVector(jo,r.y),a.addScaledVector(Qo,r.z),a}static isFrontFacing(e,t,i,s){return Tn.subVectors(i,t),jn.subVectors(e,t),Tn.cross(jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Tn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ms.subVectors(s,i),bs.subVectors(r,i),Yo.subVectors(e,i);let l=Ms.dot(Yo),c=bs.dot(Yo);if(l<=0&&c<=0)return t.copy(i);Zo.subVectors(e,s);let h=Ms.dot(Zo),u=bs.dot(Zo);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ms,a);Jo.subVectors(e,r);let f=Ms.dot(Jo),x=bs.dot(Jo);if(x>=0&&f<=x)return t.copy(r);let v=f*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(bs,o);let g=h*x-f*u;if(g<=0&&u-h>=0&&f-x>=0)return yu.subVectors(r,s),o=(u-h)/(u-h+(f-x)),t.copy(s).addScaledVector(yu,o);let p=1/(g+v+d);return a=v*p,o=d*p,t.copy(i).addScaledVector(Ms,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function el(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ae=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=wp(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=el(a,r,e+1/3),this.g=el(a,r,e),this.b=el(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let i=Ed[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Ze.fromWorkingColorSpace($t.copy(this),e),Math.round(Vt($t.r*255,0,255))*65536+Math.round(Vt($t.g*255,0,255))*256+Math.round(Vt($t.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace($t.copy(this),t);let i=$t.r,s=$t.g,r=$t.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Ut){Ze.fromWorkingColorSpace($t.copy(this),e);let t=$t.r,i=$t.g,s=$t.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(ra);let i=Fo(yi.h,ra.h,t),s=Fo(yi.s,ra.s,t),r=Fo(yi.l,ra.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new Ae;Ae.NAMES=Ed;var Op=0,oi=class extends Ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Ei(),this.name="",this.blending=Ds,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=xl,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gl&&(i.blendSrc=this.blendSrc),this.blendDst!==xl&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==su&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Rt=class extends oi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dt=new D,aa=new se,Tt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Nn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),e}};var Fa=class extends Tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ba=class extends Tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Xe=class extends Tt{constructor(e,t,i){super(new Float32Array(e),t,i)}},zp=0,xn=new pt,tl=new Pt,Ss=new D,ln=new ai,yr=new ai,Ot=new D,yt=class n extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sd(e)?Ba:Fa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xe(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(ln.min,yr.min),ln.expandByPoint(Ot),Ot.addVectors(ln.max,yr.max),ln.expandByPoint(Ot)):(ln.expandByPoint(yr.min),ln.expandByPoint(yr.max))}ln.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ot.fromBufferAttribute(o,c),l&&(Ss.fromBufferAttribute(e,c),Ot.add(Ss)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new D,l[C]=new D;let c=new D,h=new D,u=new D,d=new se,f=new se,x=new se,v=new D,g=new D;function p(C,E,M){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,E),x.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),x.sub(d);let N=1/(f.x*x.y-x.x*f.y);isFinite(N)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(N),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(N),o[C].add(v),o[E].add(v),o[M].add(v),l[C].add(g),l[E].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,E=_.length;C<E;++C){let M=_[C],N=M.start,z=M.count;for(let H=N,$=N+z;H<$;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let S=new D,y=new D,U=new D,R=new D;function I(C){U.fromBufferAttribute(s,C),R.copy(U);let E=o[C];S.copy(E),S.sub(U.multiplyScalar(U.dot(E))).normalize(),y.crossVectors(R,E);let N=y.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,N)}for(let C=0,E=_.length;C<E;++C){let M=_[C],N=M.start,z=M.count;for(let H=N,$=N+z;H<$;H+=3)I(e.getX(H+0)),I(e.getX(H+1)),I(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let x=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,x=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[x++]=c[f++]}return new Tt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mu=new pt,$i=new Na,oa=new Ri,bu=new D,la=new D,ca=new D,ha=new D,nl=new D,ua=new D,Su=new D,da=new D,le=class extends Pt{constructor(e=new yt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(nl.fromBufferAttribute(u,e),a?ua.addScaledVector(nl,h):ua.addScaledVector(nl.sub(t),h))}t.add(ua)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(oa.containsPoint($i.origin)===!1&&($i.intersectSphere(oa,bu)===null||$i.origin.distanceToSquared(bu)>(e.far-e.near)**2))&&(Mu.copy(r).invert(),$i.copy(e.ray).applyMatrix4(Mu),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){let g=d[x],p=a[g.materialIndex],_=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,U=S;y<U;y+=3){let R=o.getX(y),I=o.getX(y+1),C=o.getX(y+2);s=fa(this,p,e,i,c,h,u,R,I,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=x,p=v;g<p;g+=3){let _=o.getX(g),S=o.getX(g+1),y=o.getX(g+2);s=fa(this,a,e,i,c,h,u,_,S,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){let g=d[x],p=a[g.materialIndex],_=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,U=S;y<U;y+=3){let R=y,I=y+1,C=y+2;s=fa(this,p,e,i,c,h,u,R,I,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=x,p=v;g<p;g+=3){let _=g,S=g+1,y=g+2;s=fa(this,a,e,i,c,h,u,_,S,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Hp(n,e,t,i,s,r,a,o){let l;if(e.side===zt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===wi,o),l===null)return null;da.copy(o),da.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(da);return c<t.near||c>t.far?null:{distance:c,point:da.clone(),object:n}}function fa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,la),n.getVertexPosition(l,ca),n.getVertexPosition(c,ha);let h=Hp(n,e,t,i,la,ca,ha,Su);if(h){let u=new D;bi.getBarycoord(Su,la,ca,ha,u),s&&(h.uv=bi.getInterpolatedAttribute(s,o,l,c,u,new se)),r&&(h.uv1=bi.getInterpolatedAttribute(r,o,l,c,u,new se)),a&&(h.normal=bi.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};bi.getNormal(la,ca,ha,d.normal),h.face=d,h.barycoord=u}return h}var tt=class n extends yt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function x(v,g,p,_,S,y,U,R,I,C,E){let M=y/I,N=U/C,z=y/2,H=U/2,$=R/2,Y=I+1,T=C+1,Z=0,A=0,q=new D;for(let V=0;V<T;V++){let j=V*N-H;for(let oe=0;oe<Y;oe++){let Ee=oe*M-z;q[v]=Ee*_,q[g]=j*S,q[p]=$,c.push(q.x,q.y,q.z),q[v]=0,q[g]=0,q[p]=R>0?1:-1,h.push(q.x,q.y,q.z),u.push(oe/I),u.push(1-V/C),Z+=1}}for(let V=0;V<C;V++)for(let j=0;j<I;j++){let oe=d+j+Y*V,Ee=d+j+Y*(V+1),K=d+(j+1)+Y*(V+1),ne=d+(j+1)+Y*V;l.push(oe,Ee,ne),l.push(Ee,K,ne),A+=6}o.addGroup(f,A,E),f+=A,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Vs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Kt(n){let e={};for(let t=0;t<n.length;t++){let i=Vs(n[t]);for(let s in i)e[s]=i[s]}return e}function Vp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Hn={clone:Vs,merge:Kt},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mt=class extends oi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=Vp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Oa=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mi=new D,Eu=new se,wu=new se,Yt=class extends Oa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=nc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nc*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Eu,wu),t.subVectors(wu,Eu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ko*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Es=-90,ws=1,ac=class extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yt(Es,ws,e,t);s.layers=this.layers,this.add(s);let r=new Yt(Es,ws,e,t);r.layers=this.layers,this.add(r);let a=new Yt(Es,ws,e,t);a.layers=this.layers,this.add(a);let o=new Yt(Es,ws,e,t);o.layers=this.layers,this.add(o);let l=new Yt(Es,ws,e,t);l.layers=this.layers,this.add(l);let c=new Yt(Es,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===La)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},za=class extends Gt{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oc=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new za(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tt(5,5,5),r=new mt({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Bn});r.uniforms.tEquirect.value=t;let a=new le(s,r),o=t.minFilter;return t.minFilter===es&&(t.minFilter=kn),new ac(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},il=new D,Xp=new D,qp=new Ve,ti=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=il.subVectors(i,t).cross(Xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(il),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||qp.getNormalMatrix(e),s=this.coplanarPoint(il).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new Ri,pa=new D,Nr=class{constructor(e=new ti,t=new ti,i=new ti,s=new ti,r=new ti,a=new ti){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],x=s[9],v=s[10],g=s[11],p=s[12],_=s[13],S=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,g-f,y-p).normalize(),i[1].setComponents(l+r,d+c,g+f,y+p).normalize(),i[2].setComponents(l+a,d+h,g+x,y+_).normalize(),i[3].setComponents(l-a,d-h,g-x,y-_).normalize(),i[4].setComponents(l-o,d-u,g-v,y-S).normalize(),t===ii)i[5].setComponents(l+o,d+u,g+v,y+S).normalize();else if(t===La)i[5].setComponents(o,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(pa.x=s.normal.x>0?e.max.x:e.min.x,pa.y=s.normal.y>0?e.max.y:e.min.y,pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Td(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function $p(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){let x=u[d],v=u[f];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){let v=u[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var tn=class n extends yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],x=[],v=[],g=[];for(let p=0;p<h;p++){let _=p*d-a;for(let S=0;S<c;S++){let y=S*u-r;x.push(y,-_,0),v.push(0,0,1),g.push(S/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let S=_+c*p,y=_+c*(p+1),U=_+1+c*(p+1),R=_+1+c*p;f.push(S,y,R),f.push(y,U,R)}this.setIndex(f),this.setAttribute("position",new Xe(x,3)),this.setAttribute("normal",new Xe(v,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zp=`#ifdef USE_ALPHAHASH
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
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,em=`#ifdef USE_AOMAP
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
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
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
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,om=`#ifdef USE_IRIDESCENCE
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
#endif`,lm=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xm=`#define PI 3.141592653589793
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
} // validated`,vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_m=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Em="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nm=`#ifdef USE_GRADIENTMAP
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
}`,km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
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
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
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
#endif`,qm=`struct PhysicalMaterial {
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
}`,$m=`
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Km=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i0=`#if defined( USE_POINTS_UV )
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
#endif`,s0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`#ifdef USE_MORPHTARGETS
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
#endif`,h0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,d0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g0=`#ifdef USE_NORMALMAP
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
#endif`,x0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L0=`float getShadowMask() {
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
}`,D0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,N0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k0=`#ifdef USE_SKINNING
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
#endif`,F0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y0=`uniform sampler2D t2D;
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`#include <common>
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
}`,eg=`#if DEPTH_PACKING == 3200
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
}`,tg=`#define DISTANCE
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
}`,ng=`#define DISTANCE
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`uniform float scale;
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#define LAMBERT
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
}`,hg=`#define LAMBERT
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
}`,ug=`#define MATCAP
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
}`,dg=`#define MATCAP
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
}`,fg=`#define NORMAL
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
}`,pg=`#define NORMAL
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
}`,mg=`#define PHONG
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
}`,gg=`#define PHONG
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
}`,xg=`#define STANDARD
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
}`,vg=`#define STANDARD
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
}`,_g=`#define TOON
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
}`,yg=`#define TOON
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
}`,Mg=`uniform float size;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,Eg=`uniform vec3 color;
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
}`,wg=`uniform float rotation;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Yp,alphahash_pars_fragment:Zp,alphamap_fragment:Jp,alphamap_pars_fragment:Kp,alphatest_fragment:jp,alphatest_pars_fragment:Qp,aomap_fragment:em,aomap_pars_fragment:tm,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:am,iridescence_fragment:om,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:um,clipping_planes_vertex:dm,color_fragment:fm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:xm,cube_uv_reflection_fragment:vm,defaultnormal_vertex:_m,displacementmap_pars_vertex:ym,displacementmap_vertex:Mm,emissivemap_fragment:bm,emissivemap_pars_fragment:Sm,colorspace_fragment:Em,colorspace_pars_fragment:wm,envmap_fragment:Tm,envmap_common_pars_fragment:Am,envmap_pars_fragment:Rm,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:zm,envmap_vertex:Pm,fog_vertex:Im,fog_pars_vertex:Lm,fog_fragment:Dm,fog_pars_fragment:Um,gradientmap_pars_fragment:Nm,lightmap_pars_fragment:km,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Bm,lights_pars_begin:Om,lights_toon_fragment:Hm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Xm,lights_physical_pars_fragment:qm,lights_fragment_begin:$m,lights_fragment_maps:Ym,lights_fragment_end:Zm,logdepthbuf_fragment:Jm,logdepthbuf_pars_fragment:Km,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Qm,map_fragment:e0,map_pars_fragment:t0,map_particle_fragment:n0,map_particle_pars_fragment:i0,metalnessmap_fragment:s0,metalnessmap_pars_fragment:r0,morphinstance_vertex:a0,morphcolor_vertex:o0,morphnormal_vertex:l0,morphtarget_pars_vertex:c0,morphtarget_vertex:h0,normal_fragment_begin:u0,normal_fragment_maps:d0,normal_pars_fragment:f0,normal_pars_vertex:p0,normal_vertex:m0,normalmap_pars_fragment:g0,clearcoat_normal_fragment_begin:x0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:_0,iridescence_pars_fragment:y0,opaque_fragment:M0,packing:b0,premultiplied_alpha_fragment:S0,project_vertex:E0,dithering_fragment:w0,dithering_pars_fragment:T0,roughnessmap_fragment:A0,roughnessmap_pars_fragment:R0,shadowmap_pars_fragment:C0,shadowmap_pars_vertex:P0,shadowmap_vertex:I0,shadowmask_pars_fragment:L0,skinbase_vertex:D0,skinning_pars_vertex:U0,skinning_vertex:N0,skinnormal_vertex:k0,specularmap_fragment:F0,specularmap_pars_fragment:B0,tonemapping_fragment:O0,tonemapping_pars_fragment:z0,transmission_fragment:H0,transmission_pars_fragment:V0,uv_pars_fragment:G0,uv_pars_vertex:W0,uv_vertex:X0,worldpos_vertex:q0,background_vert:$0,background_frag:Y0,backgroundCube_vert:Z0,backgroundCube_frag:J0,cube_vert:K0,cube_frag:j0,depth_vert:Q0,depth_frag:eg,distanceRGBA_vert:tg,distanceRGBA_frag:ng,equirect_vert:ig,equirect_frag:sg,linedashed_vert:rg,linedashed_frag:ag,meshbasic_vert:og,meshbasic_frag:lg,meshlambert_vert:cg,meshlambert_frag:hg,meshmatcap_vert:ug,meshmatcap_frag:dg,meshnormal_vert:fg,meshnormal_frag:pg,meshphong_vert:mg,meshphong_frag:gg,meshphysical_vert:xg,meshphysical_frag:vg,meshtoon_vert:_g,meshtoon_frag:yg,points_vert:Mg,points_frag:bg,shadow_vert:Sg,shadow_frag:Eg,sprite_vert:wg,sprite_frag:Tg},he={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Dn={basic:{uniforms:Kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ae(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Kt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Kt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ae(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Kt([he.points,he.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Kt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Kt([he.common,he.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Kt([he.sprite,he.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Kt([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Kt([he.lights,he.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Dn.physical={uniforms:Kt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var ma={r:0,b:0,g:0},Zi=new On,Ag=new pt;function Rg(n,e,t,i,s,r,a){let o=new Ae(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function x(_){let S=_.isScene===!0?_.background:null;return S&&S.isTexture&&(S=(_.backgroundBlurriness>0?t:e).get(S)),S}function v(_){let S=!1,y=x(_);y===null?p(o,l):y&&y.isColor&&(p(y,1),S=!0);let U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,S){let y=x(S);y&&(y.isCubeTexture||y.mapping===to)?(h===void 0&&(h=new le(new tt(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:Vs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zi.copy(S.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(Zi)),h.material.toneMapped=Ze.getTransfer(y.colorSpace)!==lt,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new le(new tn(2,2),new mt({name:"BackgroundMaterial",uniforms:Vs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,S){_.getRGB(ma,wd(n)),i.buffers.color.setClear(ma.r,ma.g,ma.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:v,addToRenderList:g}}function Cg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(M,N,z,H,$){let Y=!1,T=u(H,z,N);r!==T&&(r=T,c(r.object)),Y=f(M,H,z,$),Y&&x(M,H,z,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(M,N,z,H),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,N,z){let H=z.wireframe===!0,$=i[M.id];$===void 0&&($={},i[M.id]=$);let Y=$[N.id];Y===void 0&&(Y={},$[N.id]=Y);let T=Y[H];return T===void 0&&(T=d(l()),Y[H]=T),T}function d(M){let N=[],z=[],H=[];for(let $=0;$<t;$++)N[$]=0,z[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:H,object:M,attributes:{},index:null}}function f(M,N,z,H){let $=r.attributes,Y=N.attributes,T=0,Z=z.getAttributes();for(let A in Z)if(Z[A].location>=0){let V=$[A],j=Y[A];if(j===void 0&&(A==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),A==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),V===void 0||V.attribute!==j||j&&V.data!==j.data)return!0;T++}return r.attributesNum!==T||r.index!==H}function x(M,N,z,H){let $={},Y=N.attributes,T=0,Z=z.getAttributes();for(let A in Z)if(Z[A].location>=0){let V=Y[A];V===void 0&&(A==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),A==="instanceColor"&&M.instanceColor&&(V=M.instanceColor));let j={};j.attribute=V,V&&V.data&&(j.data=V.data),$[A]=j,T++}r.attributes=$,r.attributesNum=T,r.index=H}function v(){let M=r.newAttributes;for(let N=0,z=M.length;N<z;N++)M[N]=0}function g(M){p(M,0)}function p(M,N){let z=r.newAttributes,H=r.enabledAttributes,$=r.attributeDivisors;z[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),$[M]!==N&&(n.vertexAttribDivisor(M,N),$[M]=N)}function _(){let M=r.newAttributes,N=r.enabledAttributes;for(let z=0,H=N.length;z<H;z++)N[z]!==M[z]&&(n.disableVertexAttribArray(z),N[z]=0)}function S(M,N,z,H,$,Y,T){T===!0?n.vertexAttribIPointer(M,N,z,$,Y):n.vertexAttribPointer(M,N,z,H,$,Y)}function y(M,N,z,H){v();let $=H.attributes,Y=z.getAttributes(),T=N.defaultAttributeValues;for(let Z in Y){let A=Y[Z];if(A.location>=0){let q=$[Z];if(q===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){let V=q.normalized,j=q.itemSize,oe=e.get(q);if(oe===void 0)continue;let Ee=oe.buffer,K=oe.type,ne=oe.bytesPerElement,xe=K===n.INT||K===n.UNSIGNED_INT||q.gpuType===Zc;if(q.isInterleavedBufferAttribute){let ue=q.data,Ie=ue.stride,Be=q.offset;if(ue.isInstancedInterleavedBuffer){for(let $e=0;$e<A.locationSize;$e++)p(A.location+$e,ue.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let $e=0;$e<A.locationSize;$e++)g(A.location+$e);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let $e=0;$e<A.locationSize;$e++)S(A.location+$e,j/A.locationSize,K,V,Ie*ne,(Be+j/A.locationSize*$e)*ne,xe)}else{if(q.isInstancedBufferAttribute){for(let ue=0;ue<A.locationSize;ue++)p(A.location+ue,q.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ue=0;ue<A.locationSize;ue++)g(A.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let ue=0;ue<A.locationSize;ue++)S(A.location+ue,j/A.locationSize,K,V,j*ne,j/A.locationSize*ue*ne,xe)}}else if(T!==void 0){let V=T[Z];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(A.location,V);break;case 3:n.vertexAttrib3fv(A.location,V);break;case 4:n.vertexAttrib4fv(A.location,V);break;default:n.vertexAttrib1fv(A.location,V)}}}}_()}function U(){C();for(let M in i){let N=i[M];for(let z in N){let H=N[z];for(let $ in H)h(H[$].object),delete H[$];delete N[z]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;let N=i[M.id];for(let z in N){let H=N[z];for(let $ in H)h(H[$].object),delete H[$];delete N[z]}delete i[M.id]}function I(M){for(let N in i){let z=i[N];if(z[M.id]===void 0)continue;let H=z[M.id];for(let $ in H)h(H[$].object),delete H[$];delete z[M.id]}}function C(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function Pg(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)a(c[x],h[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let x=0;for(let v=0;v<u;v++)x+=h[v]*d[v];t.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ig(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==An&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let C=I===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ri&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Fn&&!C)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:U,maxSamples:R}}function Lg(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ti,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let x=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):c();else{let _=r?0:i,S=_*4,y=p.clippingState||null;l.value=y,y=h(x,d,S,f);for(let U=0;U!==S;++U)y[U]=t[U];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,x){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,x!==!0||g===null){let p=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,y=f;S!==v;++S,y+=4)a.copy(u[S]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Dg(n){let e=new WeakMap;function t(a,o){return o===wl?a.mapping=Bs:o===Tl&&(a.mapping=Os),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===wl||o===Tl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new oc(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Gs=class extends Oa{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ls=4,Tu=[.125,.215,.35,.446,.526,.582],Qi=20,sl=new Gs,Au=new Ae,rl=null,al=0,ol=0,ll=!1,Ki=(1+Math.sqrt(5))/2,Ts=1/Ki,Ru=[new D(-Ki,Ts,0),new D(Ki,Ts,0),new D(-Ts,0,Ki),new D(Ts,0,Ki),new D(0,Ki,-Ts),new D(0,Ki,Ts),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Ws=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){rl=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rl,al,ol),this._renderer.xr.enabled=ll,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Pn,format:An,colorSpace:nr,depthBuffer:!1},s=Cu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ug(r)),this._blurMaterial=Ng(r,e,t)}return s}_compileMaterial(e){let t=new le(this._lodPlanes[0],e);this._renderer.compile(t,sl)}_sceneToCubeUV(e,t,i,s){let o=new Yt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Au),h.toneMapping=Si,h.autoClear=!1;let f=new Rt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),x=new le(new tt,f),v=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(Au),v=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let S=this._cubeSize;ga(s,_*S,p>2?S:0,S,S),h.setRenderTarget(s),v&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Bs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ga(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,sl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ru[(s-r-1)%Ru.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new le(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),v=r/x,g=isFinite(r)?1+Math.floor(h*v):Qi;g>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Qi}`);let p=[],_=0;for(let I=0;I<Qi;++I){let C=I/v,E=Math.exp(-C*C/2);p.push(E),I===0?_+=E:I<g&&(_+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:S}=this;d.dTheta.value=x,d.mipInt.value=S-i;let y=this._sizeLods[s],U=3*y*(s>S-Ls?s-S+Ls:0),R=4*(this._cubeSize-y);ga(t,U,R,3*y,2*y),l.setRenderTarget(t),l.render(u,sl)}};function Ug(n){let e=[],t=[],i=[],s=n,r=n-Ls+1+Tu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ls?l=Tu[a-n+Ls-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,v=3,g=2,p=1,_=new Float32Array(v*x*f),S=new Float32Array(g*x*f),y=new Float32Array(p*x*f);for(let R=0;R<f;R++){let I=R%3*2/3-1,C=R>2?0:-1,E=[I,C,0,I+2/3,C,0,I+2/3,C+1,0,I,C,0,I+2/3,C+1,0,I,C+1,0];_.set(E,v*x*R),S.set(d,g*x*R);let M=[R,R,R,R,R,R];y.set(M,p*x*R)}let U=new yt;U.setAttribute("position",new Tt(_,v)),U.setAttribute("uv",new Tt(S,g)),U.setAttribute("faceIndex",new Tt(y,p)),e.push(U),s>Ls&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Cu(n,e,t){let i=new jt(n,e,t);return i.texture.mapping=to,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Ng(n,e,t){let i=new Float32Array(Qi),s=new D(0,1,0);return new mt({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Pu(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Iu(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function nh(){return`

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
	`}function kg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===wl||l===Tl,h=l===Bs||l===Os;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ws(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Ws(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Fg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ar("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Bg(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);for(let x in d.morphAttributes){let v=d.morphAttributes[x];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let x in d)e.update(d[x],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let x in f){let v=f[x];for(let g=0,p=v.length;g<p;g++)e.update(v[g],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,x=u.attributes.position,v=0;if(f!==null){let _=f.array;v=f.version;for(let S=0,y=_.length;S<y;S+=3){let U=_[S+0],R=_[S+1],I=_[S+2];d.push(U,R,R,I,I,U)}}else if(x!==void 0){let _=x.array;v=x.version;for(let S=0,y=_.length/3-1;S<y;S+=3){let U=S+0,R=S+1,I=S+2;d.push(U,R,R,I,I,U)}}else return;let g=new(Sd(d)?Ba:Fa)(d,1);g.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Og(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,x){x!==0&&(n.drawElementsInstanced(i,f,r,d*a,x),t.update(f,i,x))}function h(d,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,x);let g=0;for(let p=0;p<x;p++)g+=f[p];t.update(g,i,1)}function u(d,f,x,v){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,x);let p=0;for(let _=0;_<x;_++)p+=f[_]*v[_];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Hg(n,e,t){let i=new WeakMap,s=new ft;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let E=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],S=0;f===!0&&(S=1),x===!0&&(S=2),v===!0&&(S=3);let y=o.attributes.position.count*S,U=1;y>e.maxTextureSize&&(U=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let R=new Float32Array(y*U*4*u),I=new Ua(R,y,U,u);I.type=Fn,I.needsUpdate=!0;let C=S*4;for(let M=0;M<u;M++){let N=g[M],z=p[M],H=_[M],$=y*U*4*M;for(let Y=0;Y<N.count;Y++){let T=Y*C;f===!0&&(s.fromBufferAttribute(N,Y),R[$+T+0]=s.x,R[$+T+1]=s.y,R[$+T+2]=s.z,R[$+T+3]=0),x===!0&&(s.fromBufferAttribute(z,Y),R[$+T+4]=s.x,R[$+T+5]=s.y,R[$+T+6]=s.z,R[$+T+7]=0),v===!0&&(s.fromBufferAttribute(H,Y),R[$+T+8]=s.x,R[$+T+9]=s.y,R[$+T+10]=s.z,R[$+T+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new se(y,U)},i.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Vg(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ha=class extends Gt{constructor(e,t,i,s,r,a,o,l,c,h=Us){if(h!==Us&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Us&&(i=ts),i===void 0&&h===Hs&&(i=zs),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ad=new Gt,Lu=new Ha(1,1),Rd=new Ua,Cd=new rc,Pd=new za,Du=[],Uu=[],Nu=new Float32Array(16),ku=new Float32Array(9),Fu=new Float32Array(4);function ir(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Du[s];if(r===void 0&&(r=new Float32Array(s),Du[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function so(n,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Wg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function Xg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function $g(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Nt(t,i))return;Fu.set(i),n.uniformMatrix2fv(this.addr,!1,Fu),kt(t,i)}}function Yg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Nt(t,i))return;ku.set(i),n.uniformMatrix3fv(this.addr,!1,ku),kt(t,i)}}function Zg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Nt(t,i))return;Nu.set(i),n.uniformMatrix4fv(this.addr,!1,Nu),kt(t,i)}}function Jg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Kg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function jg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function Qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function ex(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function sx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Lu.compareFunction=bd,r=Lu):r=Ad,t.setTexture2D(e||r,s)}function rx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cd,s)}function ax(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Pd,s)}function ox(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Rd,s)}function lx(n){switch(n){case 5126:return Gg;case 35664:return Wg;case 35665:return Xg;case 35666:return qg;case 35674:return $g;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return Kg;case 35668:case 35672:return jg;case 35669:case 35673:return Qg;case 5125:return ex;case 36294:return tx;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return ox}}function cx(n,e){n.uniform1fv(this.addr,e)}function hx(n,e){let t=ir(e,this.size,2);n.uniform2fv(this.addr,t)}function ux(n,e){let t=ir(e,this.size,3);n.uniform3fv(this.addr,t)}function dx(n,e){let t=ir(e,this.size,4);n.uniform4fv(this.addr,t)}function fx(n,e){let t=ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function px(n,e){let t=ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mx(n,e){let t=ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gx(n,e){n.uniform1iv(this.addr,e)}function xx(n,e){n.uniform2iv(this.addr,e)}function vx(n,e){n.uniform3iv(this.addr,e)}function _x(n,e){n.uniform4iv(this.addr,e)}function yx(n,e){n.uniform1uiv(this.addr,e)}function Mx(n,e){n.uniform2uiv(this.addr,e)}function bx(n,e){n.uniform3uiv(this.addr,e)}function Sx(n,e){n.uniform4uiv(this.addr,e)}function Ex(n,e,t){let i=this.cache,s=e.length,r=so(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ad,r[a])}function wx(n,e,t){let i=this.cache,s=e.length,r=so(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cd,r[a])}function Tx(n,e,t){let i=this.cache,s=e.length,r=so(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pd,r[a])}function Ax(n,e,t){let i=this.cache,s=e.length,r=so(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Rd,r[a])}function Rx(n){switch(n){case 5126:return cx;case 35664:return hx;case 35665:return ux;case 35666:return dx;case 35674:return fx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return xx;case 35668:case 35672:return vx;case 35669:case 35673:return _x;case 5125:return yx;case 36294:return Mx;case 36295:return bx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return Ax}}var lc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=lx(t.type)}},cc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rx(t.type)}},hc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},cl=/(\w+)(\])?(\[|\.)?/g;function Bu(n,e){n.seq.push(e),n.map[e.id]=e}function Cx(n,e,t){let i=n.name,s=i.length;for(cl.lastIndex=0;;){let r=cl.exec(i),a=cl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Bu(t,c===void 0?new lc(o,n,e):new cc(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new hc(o),Bu(t,u)),t=u}}}var ks=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Cx(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Ou(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Px=37297,Ix=0;function Lx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var zu=new Ve;function Dx(n){Ze._getMatrix(zu,Ze.workingColorSpace,n);let e=`mat3( ${zu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case no:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Lx(n.getShaderSource(e),a)}else return s}function Ux(n,e){let t=Dx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nx(n,e){let t;switch(e){case Wc:t="Linear";break;case Xc:t="Reinhard";break;case qc:t="Cineon";break;case zr:t="ACESFilmic";break;case $c:t="AgX";break;case Yc:t="Neutral";break;case fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xa=new D;function kx(){Ze.getLuminanceCoefficients(xa);let n=xa.x.toFixed(4),e=xa.y.toFixed(4),t=xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function Bx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ox(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Rr(n){return n!==""}function Vu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(n){return n.replace(zx,Vx)}var Hx=new Map;function Vx(n,e){let t=We[e];if(t===void 0){let i=Hx.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uc(t)}var Gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(n){return n.replace(Gx,Wx)}function Wx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Xx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function qx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bs:case Os:e="ENVMAP_TYPE_CUBE";break;case to:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $x(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function Yx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hd:e="ENVMAP_BLENDING_MULTIPLY";break;case up:e="ENVMAP_BLENDING_MIX";break;case dp:e="ENVMAP_BLENDING_ADD";break}return e}function Zx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Jx(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Xx(t),c=qx(t),h=$x(t),u=Yx(t),d=Zx(t),f=Fx(t),x=Bx(r),v=s.createProgram(),g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Rr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Rr).join(`
`),p.length>0&&(p+=`
`)):(g=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?We.tonemapping_pars_fragment:"",t.toneMapping!==Si?Nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Ux("linearToOutputTexel",t.outputColorSpace),kx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),a=uc(a),a=Vu(a,t),a=Gu(a,t),o=uc(o),o=Vu(o,t),o=Gu(o,t),a=Wu(a),o=Wu(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=_+g+a,y=_+p+o,U=Ou(s,s.VERTEX_SHADER,S),R=Ou(s,s.FRAGMENT_SHADER,y);s.attachShader(v,U),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(N){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(v).trim(),H=s.getShaderInfoLog(U).trim(),$=s.getShaderInfoLog(R).trim(),Y=!0,T=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,U,R);else{let Z=Hu(s,U,"vertex"),A=Hu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+z+`
`+Z+`
`+A)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||$==="")&&(T=!1);T&&(N.diagnostics={runnable:Y,programLog:z,vertexShader:{log:H,prefix:g},fragmentShader:{log:$,prefix:p}})}s.deleteShader(U),s.deleteShader(R),C=new ks(s,v),E=Ox(s,v)}let C;this.getUniforms=function(){return C===void 0&&I(this),C};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Px)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ix++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=R,this}var Kx=0,dc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new fc(e),t.set(e,i)),i}},fc=class{constructor(e){this.id=Kx++,this.code=e,this.usedTimes=0}};function jx(n,e,t,i,s,r,a){let o=new ka,l=new dc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,M,N,z,H){let $=z.fog,Y=H.geometry,T=E.isMeshStandardMaterial?z.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||T),A=Z&&Z.mapping===to?Z.image.height:null,q=x[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let V=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,j=V!==void 0?V.length:0,oe=0;Y.morphAttributes.position!==void 0&&(oe=1),Y.morphAttributes.normal!==void 0&&(oe=2),Y.morphAttributes.color!==void 0&&(oe=3);let Ee,K,ne,xe;if(q){let ht=Dn[q];Ee=ht.vertexShader,K=ht.fragmentShader}else Ee=E.vertexShader,K=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),xe=l.getFragmentShaderID(E);let ue=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),Be=H.isInstancedMesh===!0,$e=H.isBatchedMesh===!0,At=!!E.map,Qe=!!E.matcap,Lt=!!Z,O=!!E.aoMap,mn=!!E.lightMap,Je=!!E.bumpMap,Ke=!!E.normalMap,Ce=!!E.displacementMap,Mt=!!E.emissiveMap,Re=!!E.metalnessMap,P=!!E.roughnessMap,b=E.anisotropy>0,G=E.clearcoat>0,ee=E.dispersion>0,ie=E.iridescence>0,Q=E.sheen>0,we=E.transmission>0,fe=b&&!!E.anisotropyMap,ve=G&&!!E.clearcoatMap,et=G&&!!E.clearcoatNormalMap,re=G&&!!E.clearcoatRoughnessMap,_e=ie&&!!E.iridescenceMap,Pe=ie&&!!E.iridescenceThicknessMap,Ne=Q&&!!E.sheenColorMap,ye=Q&&!!E.sheenRoughnessMap,je=!!E.specularMap,Ge=!!E.specularColorMap,xt=!!E.specularIntensityMap,k=we&&!!E.transmissionMap,de=we&&!!E.thicknessMap,J=!!E.gradientMap,te=!!E.alphaMap,ge=E.alphaTest>0,pe=!!E.alphaHash,ze=!!E.extensions,Ct=Si;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ct=n.toneMapping);let Xt={shaderID:q,shaderType:E.type,shaderName:E.name,vertexShader:Ee,fragmentShader:K,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:$e,batchingColor:$e&&H._colorsTexture!==null,instancing:Be,instancingColor:Be&&H.instanceColor!==null,instancingMorph:Be&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:nr,alphaToCoverage:!!E.alphaToCoverage,map:At,matcap:Qe,envMap:Lt,envMapMode:Lt&&Z.mapping,envMapCubeUVHeight:A,aoMap:O,lightMap:mn,bumpMap:Je,normalMap:Ke,displacementMap:d&&Ce,emissiveMap:Mt,normalMapObjectSpace:Ke&&E.normalMapType===xp,normalMapTangentSpace:Ke&&E.normalMapType===Md,metalnessMap:Re,roughnessMap:P,anisotropy:b,anisotropyMap:fe,clearcoat:G,clearcoatMap:ve,clearcoatNormalMap:et,clearcoatRoughnessMap:re,dispersion:ee,iridescence:ie,iridescenceMap:_e,iridescenceThicknessMap:Pe,sheen:Q,sheenColorMap:Ne,sheenRoughnessMap:ye,specularMap:je,specularColorMap:Ge,specularIntensityMap:xt,transmission:we,transmissionMap:k,thicknessMap:de,gradientMap:J,opaque:E.transparent===!1&&E.blending===Ds&&E.alphaToCoverage===!1,alphaMap:te,alphaTest:ge,alphaHash:pe,combine:E.combine,mapUv:At&&v(E.map.channel),aoMapUv:O&&v(E.aoMap.channel),lightMapUv:mn&&v(E.lightMap.channel),bumpMapUv:Je&&v(E.bumpMap.channel),normalMapUv:Ke&&v(E.normalMap.channel),displacementMapUv:Ce&&v(E.displacementMap.channel),emissiveMapUv:Mt&&v(E.emissiveMap.channel),metalnessMapUv:Re&&v(E.metalnessMap.channel),roughnessMapUv:P&&v(E.roughnessMap.channel),anisotropyMapUv:fe&&v(E.anisotropyMap.channel),clearcoatMapUv:ve&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:et&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(E.sheenRoughnessMap.channel),specularMapUv:je&&v(E.specularMap.channel),specularColorMapUv:Ge&&v(E.specularColorMap.channel),specularIntensityMapUv:xt&&v(E.specularIntensityMap.channel),transmissionMapUv:k&&v(E.transmissionMap.channel),thicknessMapUv:de&&v(E.thicknessMap.channel),alphaMapUv:te&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ke||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(At||te),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,decodeVideoTexture:At&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===lt,decodeVideoTextureEmissive:Mt&&E.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(E.emissiveMap.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_t,flipSided:E.side===zt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ze&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&E.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let N in E.defines)M.push(N),M.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(_(M,E),S(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){let M=x[E.type],N;if(M){let z=Dn[M];N=Hn.clone(z.uniforms)}else N=E.uniforms;return N}function U(E,M){let N;for(let z=0,H=h.length;z<H;z++){let $=h[z];if($.cacheKey===M){N=$,++N.usedTimes;break}}return N===void 0&&(N=new Jx(n,M,E,r),h.push(N)),N}function R(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function I(E){l.remove(E)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:U,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:C}}function Qx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ev(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function qu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $u(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,f,x,v,g){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:v,group:g},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function o(u,d,f,x,v,g){let p=a(u,d,f,x,v,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,x,v,g){let p=a(u,d,f,x,v,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||ev),i.length>1&&i.sort(d||qu),s.length>1&&s.sort(d||qu)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function tv(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new $u,n.set(i,[a])):s>=r.length?(a=new $u,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function nv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ae};break;case"SpotLight":t={position:new D,direction:new D,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function iv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var sv=0;function rv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function av(n){let e=new nv,t=iv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new pt,a=new pt;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,x=0,v=0,g=0,p=0,_=0,S=0,y=0,U=0,R=0,I=0;c.sort(rv);for(let E=0,M=c.length;E<M;E++){let N=c[E],z=N.color,H=N.intensity,$=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=z.r*H,u+=z.g*H,d+=z.b*H;else if(N.isLightProbe){for(let T=0;T<9;T++)i.probe[T].addScaledVector(N.sh.coefficients[T],H);I++}else if(N.isDirectionalLight){let T=e.get(N);if(T.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,A=t.get(N);A.shadowIntensity=Z.intensity,A.shadowBias=Z.bias,A.shadowNormalBias=Z.normalBias,A.shadowRadius=Z.radius,A.shadowMapSize=Z.mapSize,i.directionalShadow[f]=A,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=N.shadow.matrix,_++}i.directional[f]=T,f++}else if(N.isSpotLight){let T=e.get(N);T.position.setFromMatrixPosition(N.matrixWorld),T.color.copy(z).multiplyScalar(H),T.distance=$,T.coneCos=Math.cos(N.angle),T.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),T.decay=N.decay,i.spot[v]=T;let Z=N.shadow;if(N.map&&(i.spotLightMap[U]=N.map,U++,Z.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[v]=Z.matrix,N.castShadow){let A=t.get(N);A.shadowIntensity=Z.intensity,A.shadowBias=Z.bias,A.shadowNormalBias=Z.normalBias,A.shadowRadius=Z.radius,A.shadowMapSize=Z.mapSize,i.spotShadow[v]=A,i.spotShadowMap[v]=Y,y++}v++}else if(N.isRectAreaLight){let T=e.get(N);T.color.copy(z).multiplyScalar(H),T.halfWidth.set(N.width*.5,0,0),T.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=T,g++}else if(N.isPointLight){let T=e.get(N);if(T.color.copy(N.color).multiplyScalar(N.intensity),T.distance=N.distance,T.decay=N.decay,N.castShadow){let Z=N.shadow,A=t.get(N);A.shadowIntensity=Z.intensity,A.shadowBias=Z.bias,A.shadowNormalBias=Z.normalBias,A.shadowRadius=Z.radius,A.shadowMapSize=Z.mapSize,A.shadowCameraNear=Z.camera.near,A.shadowCameraFar=Z.camera.far,i.pointShadow[x]=A,i.pointShadowMap[x]=Y,i.pointShadowMatrix[x]=N.shadow.matrix,S++}i.point[x]=T,x++}else if(N.isHemisphereLight){let T=e.get(N);T.skyColor.copy(N.color).multiplyScalar(H),T.groundColor.copy(N.groundColor).multiplyScalar(H),i.hemi[p]=T,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let C=i.hash;(C.directionalLength!==f||C.pointLength!==x||C.spotLength!==v||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==_||C.numPointShadows!==S||C.numSpotShadows!==y||C.numSpotMaps!==U||C.numLightProbes!==I)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+U-R,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,C.directionalLength=f,C.pointLength=x,C.spotLength=v,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=_,C.numPointShadows=S,C.numSpotShadows=y,C.numSpotMaps=U,C.numLightProbes=I,i.version=sv++)}function l(c,h){let u=0,d=0,f=0,x=0,v=0,g=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let S=c[p];if(S.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(S.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(S.isRectAreaLight){let y=i.rectArea[x];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let y=i.hemi[v];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Yu(n){let e=new av(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ov(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Yu(n),e.set(s,[o])):r>=a.length?(o=new Yu(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var pc=class extends oi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mc=class extends oi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cv=`uniform sampler2D shadow_pass;
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
}`;function hv(n,e,t){let i=new Nr,s=new se,r=new se,a=new ft,o=new pc({depthPacking:gp}),l=new mc,c={},h=t.maxTextureSize,u={[wi]:zt,[zt]:wi,[_t]:_t},d=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:lv,fragmentShader:cv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new yt;x.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new le(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cd;let p=this.type;this.render=function(R,I,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let E=n.getRenderTarget(),M=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Bn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let H=p!==ei&&this.type===ei,$=p===ei&&this.type!==ei;for(let Y=0,T=R.length;Y<T;Y++){let Z=R[Y],A=Z.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;s.copy(A.mapSize);let q=A.getFrameExtents();if(s.multiply(q),r.copy(A.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,A.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,A.mapSize.y=r.y)),A.map===null||H===!0||$===!0){let j=this.type!==ei?{minFilter:cn,magFilter:cn}:{};A.map!==null&&A.map.dispose(),A.map=new jt(s.x,s.y,j),A.map.texture.name=Z.name+".shadowMap",A.camera.updateProjectionMatrix()}n.setRenderTarget(A.map),n.clear();let V=A.getViewportCount();for(let j=0;j<V;j++){let oe=A.getViewport(j);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),z.viewport(a),A.updateMatrices(Z,j),i=A.getFrustum(),y(I,C,A.camera,Z,this.type)}A.isPointLightShadow!==!0&&this.type===ei&&_(A,C),A.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,M,N)};function _(R,I){let C=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new jt(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(I,null,C,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(I,null,C,f,v,null)}function S(R,I,C,E){let M=null,N=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)M=N;else if(M=C.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let z=M.uuid,H=I.uuid,$=c[z];$===void 0&&($={},c[z]=$);let Y=$[H];Y===void 0&&(Y=M.clone(),$[H]=Y,I.addEventListener("dispose",U)),M=Y}if(M.visible=I.visible,M.wireframe=I.wireframe,E===ei?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:u[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=n.properties.get(M);z.light=C}return M}function y(R,I,C,E,M){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===ei)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);let H=e.update(R),$=R.material;if(Array.isArray($)){let Y=H.groups;for(let T=0,Z=Y.length;T<Z;T++){let A=Y[T],q=$[A.materialIndex];if(q&&q.visible){let V=S(R,q,E,M);R.onBeforeShadow(n,R,I,C,H,V,A),n.renderBufferDirect(C,null,H,V,R,A),R.onAfterShadow(n,R,I,C,H,V,A)}}}else if($.visible){let Y=S(R,$,E,M);R.onBeforeShadow(n,R,I,C,H,Y,null),n.renderBufferDirect(C,null,H,Y,R,null),R.onAfterShadow(n,R,I,C,H,Y,null)}}let z=R.children;for(let H=0,$=z.length;H<$;H++)y(z[H],I,C,E,M)}function U(R){R.target.removeEventListener("dispose",U);for(let C in c){let E=c[C],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var uv={[vl]:_l,[yl]:Sl,[Ml]:El,[Fs]:bl,[_l]:vl,[Sl]:yl,[El]:Ml,[bl]:Fs};function dv(n,e){function t(){let k=!1,de=new ft,J=null,te=new ft(0,0,0,0);return{setMask:function(ge){J!==ge&&!k&&(n.colorMask(ge,ge,ge,ge),J=ge)},setLocked:function(ge){k=ge},setClear:function(ge,pe,ze,Ct,Xt){Xt===!0&&(ge*=Ct,pe*=Ct,ze*=Ct),de.set(ge,pe,ze,Ct),te.equals(de)===!1&&(n.clearColor(ge,pe,ze,Ct),te.copy(de))},reset:function(){k=!1,J=null,te.set(-1,0,0,0)}}}function i(){let k=!1,de=!1,J=null,te=null,ge=null;return{setReversed:function(pe){if(de!==pe){let ze=e.get("EXT_clip_control");de?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);let Ct=ge;ge=null,this.setClear(Ct)}de=pe},getReversed:function(){return de},setTest:function(pe){pe?ue(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(pe){J!==pe&&!k&&(n.depthMask(pe),J=pe)},setFunc:function(pe){if(de&&(pe=uv[pe]),te!==pe){switch(pe){case vl:n.depthFunc(n.NEVER);break;case _l:n.depthFunc(n.ALWAYS);break;case yl:n.depthFunc(n.LESS);break;case Fs:n.depthFunc(n.LEQUAL);break;case Ml:n.depthFunc(n.EQUAL);break;case bl:n.depthFunc(n.GEQUAL);break;case Sl:n.depthFunc(n.GREATER);break;case El:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=pe}},setLocked:function(pe){k=pe},setClear:function(pe){ge!==pe&&(de&&(pe=1-pe),n.clearDepth(pe),ge=pe)},reset:function(){k=!1,J=null,te=null,ge=null,de=!1}}}function s(){let k=!1,de=null,J=null,te=null,ge=null,pe=null,ze=null,Ct=null,Xt=null;return{setTest:function(ht){k||(ht?ue(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(ht){de!==ht&&!k&&(n.stencilMask(ht),de=ht)},setFunc:function(ht,bn,$n){(J!==ht||te!==bn||ge!==$n)&&(n.stencilFunc(ht,bn,$n),J=ht,te=bn,ge=$n)},setOp:function(ht,bn,$n){(pe!==ht||ze!==bn||Ct!==$n)&&(n.stencilOp(ht,bn,$n),pe=ht,ze=bn,Ct=$n)},setLocked:function(ht){k=ht},setClear:function(ht){Xt!==ht&&(n.clearStencil(ht),Xt=ht)},reset:function(){k=!1,de=null,J=null,te=null,ge=null,pe=null,ze=null,Ct=null,Xt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],x=null,v=!1,g=null,p=null,_=null,S=null,y=null,U=null,R=null,I=new Ae(0,0,0),C=0,E=!1,M=null,N=null,z=null,H=null,$=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),T=!1,Z=0,A=n.getParameter(n.VERSION);A.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(A)[1]),T=Z>=1):A.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),T=Z>=2);let q=null,V={},j=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),Ee=new ft().fromArray(j),K=new ft().fromArray(oe);function ne(k,de,J,te){let ge=new Uint8Array(4),pe=n.createTexture();n.bindTexture(k,pe),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<J;ze++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(de+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return pe}let xe={};xe[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),a.setFunc(Fs),Je(!1),Ke(jh),ue(n.CULL_FACE),O(Bn);function ue(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function Ie(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function Be(k,de){return u[k]!==de?(n.bindFramebuffer(k,de),u[k]=de,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=de),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=de),!0):!1}function $e(k,de){let J=f,te=!1;if(k){J=d.get(de),J===void 0&&(J=[],d.set(de,J));let ge=k.textures;if(J.length!==ge.length||J[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,ze=ge.length;pe<ze;pe++)J[pe]=n.COLOR_ATTACHMENT0+pe;J.length=ge.length,te=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,te=!0);te&&n.drawBuffers(J)}function At(k){return x!==k?(n.useProgram(k),x=k,!0):!1}let Qe={[ji]:n.FUNC_ADD,[Yf]:n.FUNC_SUBTRACT,[Zf]:n.FUNC_REVERSE_SUBTRACT};Qe[Jf]=n.MIN,Qe[Kf]=n.MAX;let Lt={[jf]:n.ZERO,[Qf]:n.ONE,[ep]:n.SRC_COLOR,[gl]:n.SRC_ALPHA,[ap]:n.SRC_ALPHA_SATURATE,[sp]:n.DST_COLOR,[np]:n.DST_ALPHA,[tp]:n.ONE_MINUS_SRC_COLOR,[xl]:n.ONE_MINUS_SRC_ALPHA,[rp]:n.ONE_MINUS_DST_COLOR,[ip]:n.ONE_MINUS_DST_ALPHA,[op]:n.CONSTANT_COLOR,[lp]:n.ONE_MINUS_CONSTANT_COLOR,[cp]:n.CONSTANT_ALPHA,[hp]:n.ONE_MINUS_CONSTANT_ALPHA};function O(k,de,J,te,ge,pe,ze,Ct,Xt,ht){if(k===Bn){v===!0&&(Ie(n.BLEND),v=!1);return}if(v===!1&&(ue(n.BLEND),v=!0),k!==$f){if(k!==g||ht!==E){if((p!==ji||y!==ji)&&(n.blendEquation(n.FUNC_ADD),p=ji,y=ji),ht)switch(k){case Ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rt:n.blendFunc(n.ONE,n.ONE);break;case Qh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,S=null,U=null,R=null,I.set(0,0,0),C=0,g=k,E=ht}return}ge=ge||de,pe=pe||J,ze=ze||te,(de!==p||ge!==y)&&(n.blendEquationSeparate(Qe[de],Qe[ge]),p=de,y=ge),(J!==_||te!==S||pe!==U||ze!==R)&&(n.blendFuncSeparate(Lt[J],Lt[te],Lt[pe],Lt[ze]),_=J,S=te,U=pe,R=ze),(Ct.equals(I)===!1||Xt!==C)&&(n.blendColor(Ct.r,Ct.g,Ct.b,Xt),I.copy(Ct),C=Xt),g=k,E=!1}function mn(k,de){k.side===_t?Ie(n.CULL_FACE):ue(n.CULL_FACE);let J=k.side===zt;de&&(J=!J),Je(J),k.blending===Ds&&k.transparent===!1?O(Bn):O(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let te=k.stencilWrite;o.setTest(te),te&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Mt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Je(k){M!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),M=k)}function Ke(k){k!==Xf?(ue(n.CULL_FACE),k!==N&&(k===jh?n.cullFace(n.BACK):k===qf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),N=k}function Ce(k){k!==z&&(T&&n.lineWidth(k),z=k)}function Mt(k,de,J){k?(ue(n.POLYGON_OFFSET_FILL),(H!==de||$!==J)&&(n.polygonOffset(de,J),H=de,$=J)):Ie(n.POLYGON_OFFSET_FILL)}function Re(k){k?ue(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function P(k){k===void 0&&(k=n.TEXTURE0+Y-1),q!==k&&(n.activeTexture(k),q=k)}function b(k,de,J){J===void 0&&(q===null?J=n.TEXTURE0+Y-1:J=q);let te=V[J];te===void 0&&(te={type:void 0,texture:void 0},V[J]=te),(te.type!==k||te.texture!==de)&&(q!==J&&(n.activeTexture(J),q=J),n.bindTexture(k,de||xe[k]),te.type=k,te.texture=de)}function G(){let k=V[q];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(k){Ee.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Ee.copy(k))}function ye(k){K.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),K.copy(k))}function je(k,de){let J=c.get(de);J===void 0&&(J=new WeakMap,c.set(de,J));let te=J.get(k);te===void 0&&(te=n.getUniformBlockIndex(de,k.name),J.set(k,te))}function Ge(k,de){let te=c.get(de).get(k);l.get(de)!==te&&(n.uniformBlockBinding(de,te,k.__bindingPointIndex),l.set(de,te))}function xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},q=null,V={},u={},d=new WeakMap,f=[],x=null,v=!1,g=null,p=null,_=null,S=null,y=null,U=null,R=null,I=new Ae(0,0,0),C=0,E=!1,M=null,N=null,z=null,H=null,$=null,Ee.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:Ie,bindFramebuffer:Be,drawBuffers:$e,useProgram:At,setBlending:O,setMaterial:mn,setFlipSided:Je,setCullFace:Ke,setLineWidth:Ce,setPolygonOffset:Mt,setScissorTest:Re,activeTexture:P,bindTexture:b,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:_e,texImage3D:Pe,updateUBOMapping:je,uniformBlockBinding:Ge,texStorage2D:et,texStorage3D:re,texSubImage2D:Q,texSubImage3D:we,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Ne,viewport:ye,reset:xt}}function Zu(n,e,t,i){let s=fv(i);switch(t){case md:return n*e;case xd:return n*e;case vd:return n*e*2;case jc:return n*e/s.components*s.byteLength;case Qc:return n*e/s.components*s.byteLength;case _d:return n*e*2/s.components*s.byteLength;case eh:return n*e*2/s.components*s.byteLength;case gd:return n*e*3/s.components*s.byteLength;case An:return n*e*4/s.components*s.byteLength;case th:return n*e*4/s.components*s.byteLength;case Ta:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ra:case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cl:case Il:return Math.max(n,16)*Math.max(e,8)/4;case Rl:case Pl:return Math.max(n,8)*Math.max(e,8)/2;case Ll:case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Pa:case Zl:case Jl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yd:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fv(n){switch(n){case ri:case dd:return{byteLength:1,components:1};case Dr:case fd:case Pn:return{byteLength:2,components:1};case Jc:case Kc:return{byteLength:2,components:4};case ts:case Zc:case Fn:return{byteLength:4,components:1};case pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function pv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,b){return f?new OffscreenCanvas(P,b):Ur("canvas")}function v(P,b,G){let ee=1,ie=Re(P);if((ie.width>G||ie.height>G)&&(ee=G/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Q=Math.floor(ee*ie.width),we=Math.floor(ee*ie.height);u===void 0&&(u=x(Q,we));let fe=b?x(Q,we):u;return fe.width=Q,fe.height=we,fe.getContext("2d").drawImage(P,0,0,Q,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+we+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(P,b,G,ee,ie=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=b;if(b===n.RED&&(G===n.FLOAT&&(Q=n.R32F),G===n.HALF_FLOAT&&(Q=n.R16F),G===n.UNSIGNED_BYTE&&(Q=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.R8UI),G===n.UNSIGNED_SHORT&&(Q=n.R16UI),G===n.UNSIGNED_INT&&(Q=n.R32UI),G===n.BYTE&&(Q=n.R8I),G===n.SHORT&&(Q=n.R16I),G===n.INT&&(Q=n.R32I)),b===n.RG&&(G===n.FLOAT&&(Q=n.RG32F),G===n.HALF_FLOAT&&(Q=n.RG16F),G===n.UNSIGNED_BYTE&&(Q=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RG8UI),G===n.UNSIGNED_SHORT&&(Q=n.RG16UI),G===n.UNSIGNED_INT&&(Q=n.RG32UI),G===n.BYTE&&(Q=n.RG8I),G===n.SHORT&&(Q=n.RG16I),G===n.INT&&(Q=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),G===n.UNSIGNED_INT&&(Q=n.RGB32UI),G===n.BYTE&&(Q=n.RGB8I),G===n.SHORT&&(Q=n.RGB16I),G===n.INT&&(Q=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),G===n.UNSIGNED_INT&&(Q=n.RGBA32UI),G===n.BYTE&&(Q=n.RGBA8I),G===n.SHORT&&(Q=n.RGBA16I),G===n.INT&&(Q=n.RGBA32I)),b===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),b===n.RGBA){let we=ie?no:Ze.getTransfer(ee);G===n.FLOAT&&(Q=n.RGBA32F),G===n.HALF_FLOAT&&(Q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Q=we===lt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(P,b){let G;return P?b===null||b===ts||b===zs?G=n.DEPTH24_STENCIL8:b===Fn?G=n.DEPTH32F_STENCIL8:b===Dr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ts||b===zs?G=n.DEPTH_COMPONENT24:b===Fn?G=n.DEPTH_COMPONENT32F:b===Dr&&(G=n.DEPTH_COMPONENT16),G}function U(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==cn&&P.minFilter!==kn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function R(P){let b=P.target;b.removeEventListener("dispose",R),C(b),b.isVideoTexture&&h.delete(b)}function I(P){let b=P.target;b.removeEventListener("dispose",I),M(b)}function C(P){let b=i.get(P);if(b.__webglInit===void 0)return;let G=P.source,ee=d.get(G);if(ee){let ie=ee[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&E(P),Object.keys(ee).length===0&&d.delete(G)}i.remove(P)}function E(P){let b=i.get(P);n.deleteTexture(b.__webglTexture);let G=P.source,ee=d.get(G);delete ee[b.__cacheKey],a.memory.textures--}function M(P){let b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let ie=0;ie<b.__webglFramebuffer[ee].length;ie++)n.deleteFramebuffer(b.__webglFramebuffer[ee][ie]);else n.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)n.deleteFramebuffer(b.__webglFramebuffer[ee]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=P.textures;for(let ee=0,ie=G.length;ee<ie;ee++){let Q=i.get(G[ee]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(G[ee])}i.remove(P)}let N=0;function z(){N=0}function H(){let P=N;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function $(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function Y(P,b){let G=i.get(P);if(P.isVideoTexture&&Ce(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){let ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,P,b);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function T(P,b){let G=i.get(P);if(P.version>0&&G.__version!==P.version){K(G,P,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function Z(P,b){let G=i.get(P);if(P.version>0&&G.__version!==P.version){K(G,P,b);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function A(P,b){let G=i.get(P);if(P.version>0&&G.__version!==P.version){ne(G,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}let q={[Lr]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[Al]:n.MIRRORED_REPEAT},V={[cn]:n.NEAREST,[pp]:n.NEAREST_MIPMAP_NEAREST,[Kr]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[Uo]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},j={[vp]:n.NEVER,[Ep]:n.ALWAYS,[_p]:n.LESS,[bd]:n.LEQUAL,[yp]:n.EQUAL,[Sp]:n.GEQUAL,[Mp]:n.GREATER,[bp]:n.NOTEQUAL};function oe(P,b){if(b.type===Fn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===kn||b.magFilter===Uo||b.magFilter===Kr||b.magFilter===es||b.minFilter===kn||b.minFilter===Uo||b.minFilter===Kr||b.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,q[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,q[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,q[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,V[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,V[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,j[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===cn||b.minFilter!==Kr&&b.minFilter!==es||b.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ee(P,b){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",R));let ee=b.source,ie=d.get(ee);ie===void 0&&(ie={},d.set(ee,ie));let Q=$(b);if(Q!==P.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ie[Q].usedTimes++;let we=ie[P.__cacheKey];we!==void 0&&(ie[P.__cacheKey].usedTimes--,we.usedTimes===0&&E(b)),P.__cacheKey=Q,P.__webglTexture=ie[Q].texture}return G}function K(P,b,G){let ee=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=n.TEXTURE_3D);let ie=Ee(P,b),Q=b.source;t.bindTexture(ee,P.__webglTexture,n.TEXTURE0+G);let we=i.get(Q);if(Q.version!==we.__version||ie===!0){t.activeTexture(n.TEXTURE0+G);let fe=Ze.getPrimaries(Ze.workingColorSpace),ve=b.colorSpace===Un?null:Ze.getPrimaries(b.colorSpace),et=b.colorSpace===Un||fe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let re=v(b.image,!1,s.maxTextureSize);re=Mt(b,re);let _e=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type),Ne=S(b.internalFormat,_e,Pe,b.colorSpace,b.isVideoTexture);oe(ee,b);let ye,je=b.mipmaps,Ge=b.isVideoTexture!==!0,xt=we.__version===void 0||ie===!0,k=Q.dataReady,de=U(b,re);if(b.isDepthTexture)Ne=y(b.format===Hs,b.type),xt&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,Ne,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ne,re.width,re.height,0,_e,Pe,null));else if(b.isDataTexture)if(je.length>0){Ge&&xt&&t.texStorage2D(n.TEXTURE_2D,de,Ne,je[0].width,je[0].height);for(let J=0,te=je.length;J<te;J++)ye=je[J],Ge?k&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ye.width,ye.height,_e,Pe,ye.data):t.texImage2D(n.TEXTURE_2D,J,Ne,ye.width,ye.height,0,_e,Pe,ye.data);b.generateMipmaps=!1}else Ge?(xt&&t.texStorage2D(n.TEXTURE_2D,de,Ne,re.width,re.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,_e,Pe,re.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,re.width,re.height,0,_e,Pe,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ge&&xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ne,je[0].width,je[0].height,re.depth);for(let J=0,te=je.length;J<te;J++)if(ye=je[J],b.format!==An)if(_e!==null)if(Ge){if(k)if(b.layerUpdates.size>0){let ge=Zu(ye.width,ye.height,b.format,b.type);for(let pe of b.layerUpdates){let ze=ye.data.subarray(pe*ge/ye.data.BYTES_PER_ELEMENT,(pe+1)*ge/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,pe,ye.width,ye.height,1,_e,ze)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ye.width,ye.height,re.depth,_e,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Ne,ye.width,ye.height,re.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ye.width,ye.height,re.depth,_e,Pe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Ne,ye.width,ye.height,re.depth,0,_e,Pe,ye.data)}else{Ge&&xt&&t.texStorage2D(n.TEXTURE_2D,de,Ne,je[0].width,je[0].height);for(let J=0,te=je.length;J<te;J++)ye=je[J],b.format!==An?_e!==null?Ge?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Ne,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?k&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ye.width,ye.height,_e,Pe,ye.data):t.texImage2D(n.TEXTURE_2D,J,Ne,ye.width,ye.height,0,_e,Pe,ye.data)}else if(b.isDataArrayTexture)if(Ge){if(xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ne,re.width,re.height,re.depth),k)if(b.layerUpdates.size>0){let J=Zu(re.width,re.height,b.format,b.type);for(let te of b.layerUpdates){let ge=re.data.subarray(te*J/re.data.BYTES_PER_ELEMENT,(te+1)*J/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,_e,Pe,ge)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,Pe,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,re.width,re.height,re.depth,0,_e,Pe,re.data);else if(b.isData3DTexture)Ge?(xt&&t.texStorage3D(n.TEXTURE_3D,de,Ne,re.width,re.height,re.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,Pe,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,re.width,re.height,re.depth,0,_e,Pe,re.data);else if(b.isFramebufferTexture){if(xt)if(Ge)t.texStorage2D(n.TEXTURE_2D,de,Ne,re.width,re.height);else{let J=re.width,te=re.height;for(let ge=0;ge<de;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ne,J,te,0,_e,Pe,null),J>>=1,te>>=1}}else if(je.length>0){if(Ge&&xt){let J=Re(je[0]);t.texStorage2D(n.TEXTURE_2D,de,Ne,J.width,J.height)}for(let J=0,te=je.length;J<te;J++)ye=je[J],Ge?k&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,_e,Pe,ye):t.texImage2D(n.TEXTURE_2D,J,Ne,_e,Pe,ye);b.generateMipmaps=!1}else if(Ge){if(xt){let J=Re(re);t.texStorage2D(n.TEXTURE_2D,de,Ne,J.width,J.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Pe,re)}else t.texImage2D(n.TEXTURE_2D,0,Ne,_e,Pe,re);g(b)&&p(ee),we.__version=Q.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ne(P,b,G){if(b.image.length!==6)return;let ee=Ee(P,b),ie=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);let Q=i.get(ie);if(ie.version!==Q.__version||ee===!0){t.activeTexture(n.TEXTURE0+G);let we=Ze.getPrimaries(Ze.workingColorSpace),fe=b.colorSpace===Un?null:Ze.getPrimaries(b.colorSpace),ve=b.colorSpace===Un||we===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let et=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!et&&!re?_e[te]=v(b.image[te],!0,s.maxCubemapSize):_e[te]=re?b.image[te].image:b.image[te],_e[te]=Mt(b,_e[te]);let Pe=_e[0],Ne=r.convert(b.format,b.colorSpace),ye=r.convert(b.type),je=S(b.internalFormat,Ne,ye,b.colorSpace),Ge=b.isVideoTexture!==!0,xt=Q.__version===void 0||ee===!0,k=ie.dataReady,de=U(b,Pe);oe(n.TEXTURE_CUBE_MAP,b);let J;if(et){Ge&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,je,Pe.width,Pe.height);for(let te=0;te<6;te++){J=_e[te].mipmaps;for(let ge=0;ge<J.length;ge++){let pe=J[ge];b.format!==An?Ne!==null?Ge?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,pe.width,pe.height,Ne,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,pe.width,pe.height,Ne,ye,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,je,pe.width,pe.height,0,Ne,ye,pe.data)}}}else{if(J=b.mipmaps,Ge&&xt){J.length>0&&de++;let te=Re(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,je,te.width,te.height)}for(let te=0;te<6;te++)if(re){Ge?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,Ne,ye,_e[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,je,_e[te].width,_e[te].height,0,Ne,ye,_e[te].data);for(let ge=0;ge<J.length;ge++){let ze=J[ge].image[te].image;Ge?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,ze.width,ze.height,Ne,ye,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,je,ze.width,ze.height,0,Ne,ye,ze.data)}}else{Ge?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne,ye,_e[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,je,Ne,ye,_e[te]);for(let ge=0;ge<J.length;ge++){let pe=J[ge];Ge?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,Ne,ye,pe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,je,Ne,ye,pe.image[te])}}}g(b)&&p(n.TEXTURE_CUBE_MAP),Q.__version=ie.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function xe(P,b,G,ee,ie,Q){let we=r.convert(G.format,G.colorSpace),fe=r.convert(G.type),ve=S(G.internalFormat,we,fe,G.colorSpace),et=i.get(b),re=i.get(G);if(re.__renderTarget=b,!et.__hasExternalTextures){let _e=Math.max(1,b.width>>Q),Pe=Math.max(1,b.height>>Q);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,Q,ve,_e,Pe,b.depth,0,we,fe,null):t.texImage2D(ie,Q,ve,_e,Pe,0,we,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ke(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ie,re.__webglTexture,0,Je(b)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ie,re.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(P,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){let ee=b.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,Q=y(b.stencilBuffer,ie),we=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=Je(b);Ke(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,Q,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,Q,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Q,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,P)}else{let ee=b.textures;for(let ie=0;ie<ee.length;ie++){let Q=ee[ie],we=r.convert(Q.format,Q.colorSpace),fe=r.convert(Q.type),ve=S(Q.internalFormat,we,fe,Q.colorSpace),et=Je(b);G&&Ke(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,ve,b.width,b.height):Ke(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,ve,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ve,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(b.depthTexture);ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);let ie=ee.__webglTexture,Q=Je(b);if(b.depthTexture.format===Us)Ke(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(b.depthTexture.format===Hs)Ke(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Be(P){let b=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let ee=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){let ie=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),b.__depthDisposeCallback=ie}b.__boundDepthTexture=ee}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ie(b.__webglFramebuffer,P)}else if(G){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=n.createRenderbuffer(),ue(b.__webglDepthbuffer[ee],P,!1);else{let ie=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ue(b.__webglDepthbuffer,P,!1);else{let ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(P,b,G){let ee=i.get(P);b!==void 0&&xe(ee.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Be(P)}function At(P){let b=P.texture,G=i.get(P),ee=i.get(b);P.addEventListener("dispose",I);let ie=P.textures,Q=P.isWebGLCubeRenderTarget===!0,we=ie.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=b.version,a.memory.textures++),Q){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let ve=0;ve<b.mipmaps.length;ve++)G.__webglFramebuffer[fe][ve]=n.createFramebuffer()}else G.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)G.__webglFramebuffer[fe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(we)for(let fe=0,ve=ie.length;fe<ve;fe++){let et=i.get(ie[fe]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&Ke(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){let ve=ie[fe];G.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);let et=r.convert(ve.format,ve.colorSpace),re=r.convert(ve.type),_e=S(ve.internalFormat,et,re,ve.colorSpace,P.isXRRenderTarget===!0),Pe=Je(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,_e,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),oe(n.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)xe(G.__webglFramebuffer[fe][ve],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else xe(G.__webglFramebuffer[fe],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let fe=0,ve=ie.length;fe<ve;fe++){let et=ie[fe],re=i.get(et);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),oe(n.TEXTURE_2D,et),xe(G.__webglFramebuffer,P,et,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(et)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ee.__webglTexture),oe(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)xe(G.__webglFramebuffer[ve],P,b,n.COLOR_ATTACHMENT0,fe,ve);else xe(G.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,fe,0);g(b)&&p(fe),t.unbindTexture()}P.depthBuffer&&Be(P)}function Qe(P){let b=P.textures;for(let G=0,ee=b.length;G<ee;G++){let ie=b[G];if(g(ie)){let Q=_(P),we=i.get(ie).__webglTexture;t.bindTexture(Q,we),p(Q),t.unbindTexture()}}}let Lt=[],O=[];function mn(P){if(P.samples>0){if(Ke(P)===!1){let b=P.textures,G=P.width,ee=P.height,ie=n.COLOR_BUFFER_BIT,Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(P),fe=b.length>1;if(fe)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);let et=i.get(b[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,G,ee,0,0,G,ee,ie,n.NEAREST),l===!0&&(Lt.length=0,O.length=0,Lt.push(n.COLOR_ATTACHMENT0+ve),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Lt.push(Q),O.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);let et=i.get(b[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Je(P){return Math.min(s.maxSamples,P.samples)}function Ke(P){let b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ce(P){let b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Mt(P,b){let G=P.colorSpace,ee=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==nr&&G!==Un&&(Ze.getTransfer(G)===lt?(ee!==An||ie!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Re(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=T,this.setTexture3D=Z,this.setTextureCube=A,this.rebindTextures=$e,this.setupRenderTarget=At,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ke}function mv(n,e){function t(i,s=Un){let r,a=Ze.getTransfer(s);if(i===ri)return n.UNSIGNED_BYTE;if(i===Jc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dd)return n.BYTE;if(i===fd)return n.SHORT;if(i===Dr)return n.UNSIGNED_SHORT;if(i===Zc)return n.INT;if(i===ts)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===Pn)return n.HALF_FLOAT;if(i===md)return n.ALPHA;if(i===gd)return n.RGB;if(i===An)return n.RGBA;if(i===xd)return n.LUMINANCE;if(i===vd)return n.LUMINANCE_ALPHA;if(i===Us)return n.DEPTH_COMPONENT;if(i===Hs)return n.DEPTH_STENCIL;if(i===jc)return n.RED;if(i===Qc)return n.RED_INTEGER;if(i===_d)return n.RG;if(i===eh)return n.RG_INTEGER;if(i===th)return n.RGBA_INTEGER;if(i===Ta||i===Aa||i===Ra||i===Ca)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rl||i===Cl||i===Pl||i===Il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ll||i===Dl||i===Ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ll||i===Dl)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ul)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nl||i===kl||i===Fl||i===Bl||i===Ol||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===$l||i===Yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Nl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ql)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pa||i===Zl||i===Jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Pa)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yd||i===Kl||i===jl||i===Ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var gc=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Oe=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},gv={type:"move"},Cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Oe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vv=`
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

}`,xc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Gt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new mt({vertexShader:xv,fragmentShader:vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new tn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vc=class extends Ti{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,x=null,v=new xc,g=t.getContextAttributes(),p=null,_=null,S=[],y=[],U=new se,R=null,I=new Yt;I.viewport=new ft;let C=new Yt;C.viewport=new ft;let E=[I,C],M=new gc,N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=S[K];return ne===void 0&&(ne=new Cr,S[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=S[K];return ne===void 0&&(ne=new Cr,S[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=S[K];return ne===void 0&&(ne=new Cr,S[K]=ne),ne.getHandSpace()};function H(K){let ne=y.indexOf(K.inputSource);if(ne===-1)return;let xe=S[ne];xe!==void 0&&(xe.update(K.inputSource,K.frame,c||a),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<S.length;K++){let ne=y[K];ne!==null&&(y[K]=null,S[K].disconnect(ne))}N=null,z=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",$),s.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){let ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new jt(f.framebufferWidth,f.framebufferHeight,{format:An,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,xe=null,ue=null;g.depth&&(ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?Hs:Us,xe=g.stencil?zs:ts);let Ie={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new jt(d.textureWidth,d.textureHeight,{format:An,type:ri,depthTexture:new Ha(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ee.setContext(s),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(K){for(let ne=0;ne<K.removed.length;ne++){let xe=K.removed[ne],ue=y.indexOf(xe);ue>=0&&(y[ue]=null,S[ue].disconnect(xe))}for(let ne=0;ne<K.added.length;ne++){let xe=K.added[ne],ue=y.indexOf(xe);if(ue===-1){for(let Be=0;Be<S.length;Be++)if(Be>=y.length){y.push(xe),ue=Be;break}else if(y[Be]===null){y[Be]=xe,ue=Be;break}if(ue===-1)break}let Ie=S[ue];Ie&&Ie.connect(xe)}}let T=new D,Z=new D;function A(K,ne,xe){T.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(xe.matrixWorld);let ue=T.distanceTo(Z),Ie=ne.projectionMatrix.elements,Be=xe.projectionMatrix.elements,$e=Ie[14]/(Ie[10]-1),At=Ie[14]/(Ie[10]+1),Qe=(Ie[9]+1)/Ie[5],Lt=(Ie[9]-1)/Ie[5],O=(Ie[8]-1)/Ie[0],mn=(Be[8]+1)/Be[0],Je=$e*O,Ke=$e*mn,Ce=ue/(-O+mn),Mt=Ce*-O;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Mt),K.translateZ(Ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Re=$e+Ce,P=At+Ce,b=Je-Mt,G=Ke+(ue-Mt),ee=Qe*At/P*Re,ie=Lt*At/P*Re;K.projectionMatrix.makePerspective(b,G,ee,ie,Re,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function q(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ne=K.near,xe=K.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(xe=v.depthFar)),M.near=C.near=I.near=ne,M.far=C.far=I.far=xe,(N!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,z=M.far),I.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,M.layers.mask=I.layers.mask|C.layers.mask;let ue=K.parent,Ie=M.cameras;q(M,ue);for(let Be=0;Be<Ie.length;Be++)q(Ie[Be],ue);Ie.length===2?A(M,I,C):M.projectionMatrix.copy(I.projectionMatrix),V(K,M,ue)};function V(K,ne,xe){xe===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=nc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let j=null;function oe(K,ne){if(h=ne.getViewerPose(c||a),x=ne,h!==null){let xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ue=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let Be=0;Be<xe.length;Be++){let $e=xe[Be],At=null;if(f!==null)At=f.getViewport($e);else{let Lt=u.getViewSubImage(d,$e);At=Lt.viewport,Be===0&&(e.setRenderTargetTextures(_,Lt.colorTexture,d.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(_))}let Qe=E[Be];Qe===void 0&&(Qe=new Yt,Qe.layers.enable(Be),Qe.viewport=new ft,E[Be]=Qe),Qe.matrix.fromArray($e.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray($e.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(At.x,At.y,At.width,At.height),Be===0&&(M.matrix.copy(Qe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(Qe)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){let Be=u.getDepthInformation(xe[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,s.renderState)}}for(let xe=0;xe<S.length;xe++){let ue=y[xe],Ie=S[xe];ue!==null&&Ie!==void 0&&Ie.update(ue,ne,c||a)}j&&j(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}let Ee=new Td;Ee.setAnimationLoop(oe),this.setAnimationLoop=function(K){j=K},this.dispose=function(){}}},Ji=new On,_v=new pt;function yv(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,wd(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,_,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===zt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===zt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=e.get(p),S=_.envMap,y=_.envMapRotation;S&&(g.envMap.value=S,Ji.copy(y),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),g.envMapRotation.value.setFromMatrix4(_v.makeRotationFromEuler(Ji)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Mv(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let y=S.program;i.uniformBlockBinding(_,y)}function c(_,S){let y=s[_.id];y===void 0&&(x(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",g));let U=S.program;i.updateUBOMapping(_,U);let R=e.render.frame;r[_.id]!==R&&(d(_),r[_.id]=R)}function h(_){let S=u();_.__bindingPointIndex=S;let y=n.createBuffer(),U=_.__size,R=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,U,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let S=s[_.id],y=_.uniforms,U=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,I=y.length;R<I;R++){let C=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,M=C.length;E<M;E++){let N=C[E];if(f(N,R,E,U)===!0){let z=N.__offset,H=Array.isArray(N.value)?N.value:[N.value],$=0;for(let Y=0;Y<H.length;Y++){let T=H[Y],Z=v(T);typeof T=="number"||typeof T=="boolean"?(N.__data[0]=T,n.bufferSubData(n.UNIFORM_BUFFER,z+$,N.__data)):T.isMatrix3?(N.__data[0]=T.elements[0],N.__data[1]=T.elements[1],N.__data[2]=T.elements[2],N.__data[3]=0,N.__data[4]=T.elements[3],N.__data[5]=T.elements[4],N.__data[6]=T.elements[5],N.__data[7]=0,N.__data[8]=T.elements[6],N.__data[9]=T.elements[7],N.__data[10]=T.elements[8],N.__data[11]=0):(T.toArray(N.__data,$),$+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,S,y,U){let R=_.value,I=S+"_"+y;if(U[I]===void 0)return typeof R=="number"||typeof R=="boolean"?U[I]=R:U[I]=R.clone(),!0;{let C=U[I];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return U[I]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function x(_){let S=_.uniforms,y=0,U=16;for(let I=0,C=S.length;I<C;I++){let E=Array.isArray(S[I])?S[I]:[S[I]];for(let M=0,N=E.length;M<N;M++){let z=E[M],H=Array.isArray(z.value)?z.value:[z.value];for(let $=0,Y=H.length;$<Y;$++){let T=H[$],Z=v(T),A=y%U,q=A%Z.boundary,V=A+q;y+=q,V!==0&&U-V<Z.storage&&(y+=U-V),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=Z.storage}}}let R=y%U;return R>0&&(y+=U-R),_.__size=y,_.__cache={},this}function v(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),S}function g(_){let S=_.target;S.removeEventListener("dispose",g);let y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Va=class{constructor(e={}){let{canvas:t=Tp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let x=new Uint32Array(4),v=new Int32Array(4),g=null,p=null,_=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=Si,this.toneMappingExposure=1;let y=this,U=!1,R=0,I=0,C=null,E=-1,M=null,N=new ft,z=new ft,H=null,$=new Ae(0),Y=0,T=t.width,Z=t.height,A=1,q=null,V=null,j=new ft(0,0,T,Z),oe=new ft(0,0,T,Z),Ee=!1,K=new Nr,ne=!1,xe=!1,ue=new pt,Ie=new pt,Be=new D,$e=new ft,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function Lt(){return C===null?A:1}let O=i;function mn(w,F){return t.getContext(w,F)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),O===null){let F="webgl2";if(O=mn(F,w),O===null)throw mn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Je,Ke,Ce,Mt,Re,P,b,G,ee,ie,Q,we,fe,ve,et,re,_e,Pe,Ne,ye,je,Ge,xt,k;function de(){Je=new Fg(O),Je.init(),Ge=new mv(O,Je),Ke=new Ig(O,Je,e,Ge),Ce=new dv(O,Je),Ke.reverseDepthBuffer&&d&&Ce.buffers.depth.setReversed(!0),Mt=new zg(O),Re=new Qx,P=new pv(O,Je,Ce,Re,Ke,Ge,Mt),b=new Dg(y),G=new kg(y),ee=new $p(O),xt=new Cg(O,ee),ie=new Bg(O,ee,Mt,xt),Q=new Vg(O,ie,ee,Mt),Ne=new Hg(O,Ke,P),re=new Lg(Re),we=new jx(y,b,G,Je,Ke,xt,re),fe=new yv(y,Re),ve=new tv,et=new ov(Je),Pe=new Rg(y,b,G,Ce,Q,f,l),_e=new hv(y,Q,Ke),k=new Mv(O,Mt,Ke,Ce),ye=new Pg(O,Je,Mt),je=new Og(O,Je,Mt),Mt.programs=we.programs,y.capabilities=Ke,y.extensions=Je,y.properties=Re,y.renderLists=ve,y.shadowMap=_e,y.state=Ce,y.info=Mt}de();let J=new vc(y,O);this.xr=J,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=Je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(w){w!==void 0&&(A=w,this.setSize(T,Z,!1))},this.getSize=function(w){return w.set(T,Z)},this.setSize=function(w,F,W=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=w,Z=F,t.width=Math.floor(w*A),t.height=Math.floor(F*A),W===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(T*A,Z*A).floor()},this.setDrawingBufferSize=function(w,F,W){T=w,Z=F,A=W,t.width=Math.floor(w*W),t.height=Math.floor(F*W),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,F,W,X){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,F,W,X),Ce.viewport(N.copy(j).multiplyScalar(A).round())},this.getScissor=function(w){return w.copy(oe)},this.setScissor=function(w,F,W,X){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,F,W,X),Ce.scissor(z.copy(oe).multiplyScalar(A).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(w){Ce.setScissorTest(Ee=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){V=w},this.getClearColor=function(w){return w.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(w=!0,F=!0,W=!0){let X=0;if(w){let B=!1;if(C!==null){let ae=C.texture.format;B=ae===th||ae===eh||ae===Qc}if(B){let ae=C.texture.type,me=ae===ri||ae===ts||ae===Dr||ae===zs||ae===Jc||ae===Kc,Me=Pe.getClearColor(),be=Pe.getClearAlpha(),ke=Me.r,He=Me.g,Se=Me.b;me?(x[0]=ke,x[1]=He,x[2]=Se,x[3]=be,O.clearBufferuiv(O.COLOR,0,x)):(v[0]=ke,v[1]=He,v[2]=Se,v[3]=be,O.clearBufferiv(O.COLOR,0,v))}else X|=O.COLOR_BUFFER_BIT}F&&(X|=O.DEPTH_BUFFER_BIT),W&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ve.dispose(),et.dispose(),Re.dispose(),b.dispose(),G.dispose(),Q.dispose(),xt.dispose(),k.dispose(),we.dispose(),J.dispose(),J.removeEventListener("sessionstart",Wh),J.removeEventListener("sessionend",Xh),Wi.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let w=Mt.autoReset,F=_e.enabled,W=_e.autoUpdate,X=_e.needsUpdate,B=_e.type;de(),Mt.autoReset=w,_e.enabled=F,_e.autoUpdate=W,_e.needsUpdate=X,_e.type=B}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ze(w){let F=w.target;F.removeEventListener("dispose",ze),Ct(F)}function Ct(w){Xt(w),Re.remove(w)}function Xt(w){let F=Re.get(w).programs;F!==void 0&&(F.forEach(function(W){we.releaseProgram(W)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,W,X,B,ae){F===null&&(F=At);let me=B.isMesh&&B.matrixWorld.determinant()<0,Me=Vf(w,F,W,X,B);Ce.setMaterial(X,me);let be=W.index,ke=1;if(X.wireframe===!0){if(be=ie.getWireframeAttribute(W),be===void 0)return;ke=2}let He=W.drawRange,Se=W.attributes.position,it=He.start*ke,vt=(He.start+He.count)*ke;ae!==null&&(it=Math.max(it,ae.start*ke),vt=Math.min(vt,(ae.start+ae.count)*ke)),be!==null?(it=Math.max(it,0),vt=Math.min(vt,be.count)):Se!=null&&(it=Math.max(it,0),vt=Math.min(vt,Se.count));let bt=vt-it;if(bt<0||bt===1/0)return;xt.setup(B,X,Me,W,be);let en,at=ye;if(be!==null&&(en=ee.get(be),at=je,at.setIndex(en)),B.isMesh)X.wireframe===!0?(Ce.setLineWidth(X.wireframeLinewidth*Lt()),at.setMode(O.LINES)):at.setMode(O.TRIANGLES);else if(B.isLine){let Te=X.linewidth;Te===void 0&&(Te=1),Ce.setLineWidth(Te*Lt()),B.isLineSegments?at.setMode(O.LINES):B.isLineLoop?at.setMode(O.LINE_LOOP):at.setMode(O.LINE_STRIP)}else B.isPoints?at.setMode(O.POINTS):B.isSprite&&at.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)at.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))at.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Te=B._multiDrawStarts,Yn=B._multiDrawCounts,ot=B._multiDrawCount,Sn=be?ee.get(be).bytesPerElement:1,ds=Re.get(X).currentProgram.getUniforms();for(let an=0;an<ot;an++)ds.setValue(O,"_gl_DrawID",an),at.render(Te[an]/Sn,Yn[an])}else if(B.isInstancedMesh)at.renderInstances(it,bt,B.count);else if(W.isInstancedBufferGeometry){let Te=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Yn=Math.min(W.instanceCount,Te);at.renderInstances(it,bt,Yn)}else at.render(it,bt)};function ht(w,F,W){w.transparent===!0&&w.side===_t&&w.forceSinglePass===!1?(w.side=zt,w.needsUpdate=!0,Jr(w,F,W),w.side=wi,w.needsUpdate=!0,Jr(w,F,W),w.side=_t):Jr(w,F,W)}this.compile=function(w,F,W=null){W===null&&(W=w),p=et.get(W),p.init(F),S.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==W&&w.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let X=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ae=B.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){let Me=ae[me];ht(Me,W,B),X.add(Me)}else ht(ae,W,B),X.add(ae)}),S.pop(),p=null,X},this.compileAsync=function(w,F,W=null){let X=this.compile(w,F,W);return new Promise(B=>{function ae(){if(X.forEach(function(me){Re.get(me).currentProgram.isReady()&&X.delete(me)}),X.size===0){B(w);return}setTimeout(ae,10)}Je.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let bn=null;function $n(w){bn&&bn(w)}function Wh(){Wi.stop()}function Xh(){Wi.start()}let Wi=new Td;Wi.setAnimationLoop($n),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(w){bn=w,J.setAnimationLoop(w),w===null?Wi.stop():Wi.start()},J.addEventListener("sessionstart",Wh),J.addEventListener("sessionend",Xh),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(F),F=J.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,F,C),p=et.get(w,S.length),p.init(F),S.push(p),Ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(Ie),xe=this.localClippingEnabled,ne=re.init(this.clippingPlanes,xe),g=ve.get(w,_.length),g.init(),_.push(g),J.enabled===!0&&J.isPresenting===!0){let ae=y.xr.getDepthSensingMesh();ae!==null&&Do(ae,F,-1/0,y.sortObjects)}Do(w,F,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(q,V),Qe=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Qe&&Pe.addToRenderList(g,w),this.info.render.frame++,ne===!0&&re.beginShadows();let W=p.state.shadowsArray;_e.render(W,w,F),ne===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=g.opaque,B=g.transmissive;if(p.setupLights(),F.isArrayCamera){let ae=F.cameras;if(B.length>0)for(let me=0,Me=ae.length;me<Me;me++){let be=ae[me];$h(X,B,w,be)}Qe&&Pe.render(w);for(let me=0,Me=ae.length;me<Me;me++){let be=ae[me];qh(g,w,be,be.viewport)}}else B.length>0&&$h(X,B,w,F),Qe&&Pe.render(w),qh(g,w,F);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(y,w,F),xt.resetDefaultState(),E=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],ne===!0&&re.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Do(w,F,W,X){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){X&&$e.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ie);let me=Q.update(w),Me=w.material;Me.visible&&g.push(w,me,Me,W,$e.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){let me=Q.update(w),Me=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),$e.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),$e.copy(me.boundingSphere.center)),$e.applyMatrix4(w.matrixWorld).applyMatrix4(Ie)),Array.isArray(Me)){let be=me.groups;for(let ke=0,He=be.length;ke<He;ke++){let Se=be[ke],it=Me[Se.materialIndex];it&&it.visible&&g.push(w,me,it,W,$e.z,Se)}}else Me.visible&&g.push(w,me,Me,W,$e.z,null)}}let ae=w.children;for(let me=0,Me=ae.length;me<Me;me++)Do(ae[me],F,W,X)}function qh(w,F,W,X){let B=w.opaque,ae=w.transmissive,me=w.transparent;p.setupLightsView(W),ne===!0&&re.setGlobalState(y.clippingPlanes,W),X&&Ce.viewport(N.copy(X)),B.length>0&&Zr(B,F,W),ae.length>0&&Zr(ae,F,W),me.length>0&&Zr(me,F,W),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function $h(w,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new jt(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Pn:ri,minFilter:es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let ae=p.state.transmissionRenderTarget[X.id],me=X.viewport||N;ae.setSize(me.z,me.w);let Me=y.getRenderTarget();y.setRenderTarget(ae),y.getClearColor($),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Qe&&Pe.render(W);let be=y.toneMapping;y.toneMapping=Si;let ke=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ne===!0&&re.setGlobalState(y.clippingPlanes,X),Zr(w,W,X),P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae),Je.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Se=0,it=F.length;Se<it;Se++){let vt=F[Se],bt=vt.object,en=vt.geometry,at=vt.material,Te=vt.group;if(at.side===_t&&bt.layers.test(X.layers)){let Yn=at.side;at.side=zt,at.needsUpdate=!0,Yh(bt,W,X,en,at,Te),at.side=Yn,at.needsUpdate=!0,He=!0}}He===!0&&(P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae))}y.setRenderTarget(Me),y.setClearColor($,Y),ke!==void 0&&(X.viewport=ke),y.toneMapping=be}function Zr(w,F,W){let X=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ae=w.length;B<ae;B++){let me=w[B],Me=me.object,be=me.geometry,ke=X===null?me.material:X,He=me.group;Me.layers.test(W.layers)&&Yh(Me,F,W,be,ke,He)}}function Yh(w,F,W,X,B,ae){w.onBeforeRender(y,F,W,X,B,ae),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(y,F,W,X,w,ae),B.transparent===!0&&B.side===_t&&B.forceSinglePass===!1?(B.side=zt,B.needsUpdate=!0,y.renderBufferDirect(W,F,X,B,w,ae),B.side=wi,B.needsUpdate=!0,y.renderBufferDirect(W,F,X,B,w,ae),B.side=_t):y.renderBufferDirect(W,F,X,B,w,ae),w.onAfterRender(y,F,W,X,B,ae)}function Jr(w,F,W){F.isScene!==!0&&(F=At);let X=Re.get(w),B=p.state.lights,ae=p.state.shadowsArray,me=B.state.version,Me=we.getParameters(w,B.state,ae,F,W),be=we.getProgramCacheKey(Me),ke=X.programs;X.environment=w.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(w.isMeshStandardMaterial?G:b).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",ze),ke=new Map,X.programs=ke);let He=ke.get(be);if(He!==void 0){if(X.currentProgram===He&&X.lightsStateVersion===me)return Jh(w,Me),He}else Me.uniforms=we.getUniforms(w),w.onBeforeCompile(Me,y),He=we.acquireProgram(Me,be),ke.set(be,He),X.uniforms=Me.uniforms;let Se=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=re.uniform),Jh(w,Me),X.needsLights=Wf(w),X.lightsStateVersion=me,X.needsLights&&(Se.ambientLightColor.value=B.state.ambient,Se.lightProbe.value=B.state.probe,Se.directionalLights.value=B.state.directional,Se.directionalLightShadows.value=B.state.directionalShadow,Se.spotLights.value=B.state.spot,Se.spotLightShadows.value=B.state.spotShadow,Se.rectAreaLights.value=B.state.rectArea,Se.ltc_1.value=B.state.rectAreaLTC1,Se.ltc_2.value=B.state.rectAreaLTC2,Se.pointLights.value=B.state.point,Se.pointLightShadows.value=B.state.pointShadow,Se.hemisphereLights.value=B.state.hemi,Se.directionalShadowMap.value=B.state.directionalShadowMap,Se.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Se.spotShadowMap.value=B.state.spotShadowMap,Se.spotLightMatrix.value=B.state.spotLightMatrix,Se.spotLightMap.value=B.state.spotLightMap,Se.pointShadowMap.value=B.state.pointShadowMap,Se.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=He,X.uniformsList=null,He}function Zh(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=ks.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Jh(w,F){let W=Re.get(w);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Vf(w,F,W,X,B){F.isScene!==!0&&(F=At),P.resetTextureUnits();let ae=F.fog,me=X.isMeshStandardMaterial?F.environment:null,Me=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:nr,be=(X.isMeshStandardMaterial?G:b).get(X.envMap||me),ke=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Se=!!W.morphAttributes.position,it=!!W.morphAttributes.normal,vt=!!W.morphAttributes.color,bt=Si;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(bt=y.toneMapping);let en=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,at=en!==void 0?en.length:0,Te=Re.get(X),Yn=p.state.lights;if(ne===!0&&(xe===!0||w!==M)){let gn=w===M&&X.id===E;re.setState(X,w,gn)}let ot=!1;X.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Yn.state.version||Te.outputColorSpace!==Me||B.isBatchedMesh&&Te.batching===!1||!B.isBatchedMesh&&Te.batching===!0||B.isBatchedMesh&&Te.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Te.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Te.instancing===!1||!B.isInstancedMesh&&Te.instancing===!0||B.isSkinnedMesh&&Te.skinning===!1||!B.isSkinnedMesh&&Te.skinning===!0||B.isInstancedMesh&&Te.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Te.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Te.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Te.instancingMorph===!1&&B.morphTexture!==null||Te.envMap!==be||X.fog===!0&&Te.fog!==ae||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==re.numPlanes||Te.numIntersection!==re.numIntersection)||Te.vertexAlphas!==ke||Te.vertexTangents!==He||Te.morphTargets!==Se||Te.morphNormals!==it||Te.morphColors!==vt||Te.toneMapping!==bt||Te.morphTargetsCount!==at)&&(ot=!0):(ot=!0,Te.__version=X.version);let Sn=Te.currentProgram;ot===!0&&(Sn=Jr(X,F,B));let ds=!1,an=!1,mr=!1,St=Sn.getUniforms(),Ln=Te.uniforms;if(Ce.useProgram(Sn.program)&&(ds=!0,an=!0,mr=!0),X.id!==E&&(E=X.id,an=!0),ds||M!==w){Ce.buffers.depth.getReversed()?(ue.copy(w.projectionMatrix),Rp(ue),Cp(ue),St.setValue(O,"projectionMatrix",ue)):St.setValue(O,"projectionMatrix",w.projectionMatrix),St.setValue(O,"viewMatrix",w.matrixWorldInverse);let pi=St.map.cameraPosition;pi!==void 0&&pi.setValue(O,Be.setFromMatrixPosition(w.matrixWorld)),Ke.logarithmicDepthBuffer&&St.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&St.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,an=!0,mr=!0)}if(B.isSkinnedMesh){St.setOptional(O,B,"bindMatrix"),St.setOptional(O,B,"bindMatrixInverse");let gn=B.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),St.setValue(O,"boneTexture",gn.boneTexture,P))}B.isBatchedMesh&&(St.setOptional(O,B,"batchingTexture"),St.setValue(O,"batchingTexture",B._matricesTexture,P),St.setOptional(O,B,"batchingIdTexture"),St.setValue(O,"batchingIdTexture",B._indirectTexture,P),St.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&St.setValue(O,"batchingColorTexture",B._colorsTexture,P));let gr=W.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0)&&Ne.update(B,W,Sn),(an||Te.receiveShadow!==B.receiveShadow)&&(Te.receiveShadow=B.receiveShadow,St.setValue(O,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ln.envMap.value=be,Ln.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(Ln.envMapIntensity.value=F.environmentIntensity),an&&(St.setValue(O,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&Gf(Ln,mr),ae&&X.fog===!0&&fe.refreshFogUniforms(Ln,ae),fe.refreshMaterialUniforms(Ln,X,A,Z,p.state.transmissionRenderTarget[w.id]),ks.upload(O,Zh(Te),Ln,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ks.upload(O,Zh(Te),Ln,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&St.setValue(O,"center",B.center),St.setValue(O,"modelViewMatrix",B.modelViewMatrix),St.setValue(O,"normalMatrix",B.normalMatrix),St.setValue(O,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let gn=X.uniformsGroups;for(let pi=0,mi=gn.length;pi<mi;pi++){let Kh=gn[pi];k.update(Kh,Sn),k.bind(Kh,Sn)}}return Sn}function Gf(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Wf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,F,W){Re.get(w.texture).__webglTexture=F,Re.get(w.depthTexture).__webglTexture=W;let X=Re.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){let W=Re.get(w);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,W=0){C=w,R=F,I=W;let X=!0,B=null,ae=!1,me=!1;if(w){let be=Re.get(w);if(be.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(O.FRAMEBUFFER,null),X=!1;else if(be.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(be.__hasExternalTextures)P.rebindTextures(w,Re.get(w.texture).__webglTexture,Re.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Se=w.depthTexture;if(be.__boundDepthTexture!==Se){if(Se!==null&&Re.has(Se)&&(w.width!==Se.image.width||w.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}let ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(me=!0);let He=Re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[F])?B=He[F][W]:B=He[F],ae=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?B=Re.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?B=He[W]:B=He,N.copy(w.viewport),z.copy(w.scissor),H=w.scissorTest}else N.copy(j).multiplyScalar(A).floor(),z.copy(oe).multiplyScalar(A).floor(),H=Ee;if(Ce.bindFramebuffer(O.FRAMEBUFFER,B)&&X&&Ce.drawBuffers(w,B),Ce.viewport(N),Ce.scissor(z),Ce.setScissorTest(H),ae){let be=Re.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,W)}else if(me){let be=Re.get(w.texture),ke=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.__webglTexture,W||0,ke)}E=-1},this.readRenderTargetPixels=function(w,F,W,X,B,ae,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Ce.bindFramebuffer(O.FRAMEBUFFER,Me);try{let be=w.texture,ke=be.format,He=be.type;if(!Ke.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-X&&W>=0&&W<=w.height-B&&O.readPixels(F,W,X,B,Ge.convert(ke),Ge.convert(He),ae)}finally{let be=C!==null?Re.get(C).__webglFramebuffer:null;Ce.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,F,W,X,B,ae,me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){let be=w.texture,ke=be.format,He=be.type;if(!Ke.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-X&&W>=0&&W<=w.height-B){Ce.bindFramebuffer(O.FRAMEBUFFER,Me);let Se=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Se),O.bufferData(O.PIXEL_PACK_BUFFER,ae.byteLength,O.STREAM_READ),O.readPixels(F,W,X,B,Ge.convert(ke),Ge.convert(He),0);let it=C!==null?Re.get(C).__webglFramebuffer:null;Ce.bindFramebuffer(O.FRAMEBUFFER,it);let vt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Ap(O,vt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Se),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ae),O.deleteBuffer(Se),O.deleteSync(vt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,W=0){w.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);let X=Math.pow(2,-W),B=Math.floor(w.image.width*X),ae=Math.floor(w.image.height*X),me=F!==null?F.x:0,Me=F!==null?F.y:0;P.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,me,Me,B,ae),Ce.unbindTexture()},this.copyTextureToTexture=function(w,F,W=null,X=null,B=0){w.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],F=arguments[2],B=arguments[3]||0,W=null);let ae,me,Me,be,ke,He,Se,it,vt,bt=w.isCompressedTexture?w.mipmaps[B]:w.image;W!==null?(ae=W.max.x-W.min.x,me=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,ke=W.min.y,He=W.isBox3?W.min.z:0):(ae=bt.width,me=bt.height,Me=bt.depth||1,be=0,ke=0,He=0),X!==null?(Se=X.x,it=X.y,vt=X.z):(Se=0,it=0,vt=0);let en=Ge.convert(F.format),at=Ge.convert(F.type),Te;F.isData3DTexture?(P.setTexture3D(F,0),Te=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(P.setTexture2DArray(F,0),Te=O.TEXTURE_2D_ARRAY):(P.setTexture2D(F,0),Te=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let Yn=O.getParameter(O.UNPACK_ROW_LENGTH),ot=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Sn=O.getParameter(O.UNPACK_SKIP_PIXELS),ds=O.getParameter(O.UNPACK_SKIP_ROWS),an=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,bt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,bt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,be),O.pixelStorei(O.UNPACK_SKIP_ROWS,ke),O.pixelStorei(O.UNPACK_SKIP_IMAGES,He);let mr=w.isDataArrayTexture||w.isData3DTexture,St=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Ln=Re.get(w),gr=Re.get(F),gn=Re.get(Ln.__renderTarget),pi=Re.get(gr.__renderTarget);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,gn.__webglFramebuffer),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let mi=0;mi<Me;mi++)mr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.get(w).__webglTexture,B,He+mi),w.isDepthTexture?(St&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.get(F).__webglTexture,B,vt+mi),O.blitFramebuffer(be,ke,ae,me,Se,it,ae,me,O.DEPTH_BUFFER_BIT,O.NEAREST)):St?O.copyTexSubImage3D(Te,B,Se,it,vt+mi,be,ke,ae,me):O.copyTexSubImage2D(Te,B,Se,it,vt+mi,be,ke,ae,me);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else St?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Te,B,Se,it,vt,ae,me,Me,en,at,bt.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Te,B,Se,it,vt,ae,me,Me,en,bt.data):O.texSubImage3D(Te,B,Se,it,vt,ae,me,Me,en,at,bt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,Se,it,ae,me,en,at,bt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,Se,it,bt.width,bt.height,en,bt.data):O.texSubImage2D(O.TEXTURE_2D,B,Se,it,ae,me,en,at,bt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Yn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Sn),O.pixelStorei(O.UNPACK_SKIP_ROWS,ds),O.pixelStorei(O.UNPACK_SKIP_IMAGES,an),B===0&&F.generateMipmaps&&O.generateMipmap(Te),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,F,W=null,X=null,B=0){return w.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,w=arguments[2],F=arguments[3],B=arguments[4]||0),Ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,W,X,B)},this.initRenderTarget=function(w){Re.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){R=0,I=0,C=null,Ce.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}},Xs=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qs=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_c=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tc,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Jt=new D,Ga=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Nn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ft=class extends oi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},As,Mr=new D,Rs=new D,Cs=new D,Ps=new se,br=new se,Id=new pt,va=new D,Sr=new D,_a=new D,Ju=new se,hl=new se,Ku=new se,Ht=class extends Pt{constructor(e=new Ft){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _c(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Ga(i,3,0,!1)),As.setAttribute("uv",new Ga(i,2,3,!1))}this.geometry=As,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),Id.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;ya(va.set(-.5,-.5,0),Cs,a,Rs,s,r),ya(Sr.set(.5,-.5,0),Cs,a,Rs,s,r),ya(_a.set(.5,.5,0),Cs,a,Rs,s,r),Ju.set(0,0),hl.set(1,0),Ku.set(1,1);let o=e.ray.intersectTriangle(va,Sr,_a,!1,Mr);if(o===null&&(ya(Sr.set(-.5,.5,0),Cs,a,Rs,s,r),hl.set(0,1),o=e.ray.intersectTriangle(va,_a,Sr,!1,Mr),o===null))return;let l=e.ray.origin.distanceTo(Mr);l<e.near||l>e.far||t.push({distance:l,point:Mr.clone(),uv:bi.getInterpolation(Mr,va,Sr,_a,Ju,hl,Ku,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ya(n,e,t,i,s,r){Ps.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(br.x=r*Ps.x-s*Ps.y,br.y=s*Ps.x+r*Ps.y):br.copy(Ps),n.copy(e),n.x+=br.x,n.y+=br.y,n.applyMatrix4(Id)}var kr=class extends Gt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=cn,h=cn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wa=class extends Tt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new pt,ju=new pt,Ma=[],Qu=new ai,bv=new pt,Er=new le,wr=new Ri,$s=class extends le{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,bv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Is),Qu.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(Qu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Is),wr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(i),e.ray.intersectsSphere(wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),ju.multiplyMatrices(i,Is),Er.matrixWorld=ju,Er.raycast(e,Ma);for(let a=0,o=Ma.length;a<o;a++){let l=Ma[a];l.instanceId=r,l.object=this,t.push(l)}Ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new kr(new Float32Array(s*this.count),s,this.count,jc,Fn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var yc=class extends oi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ed=new pt,Mc=new Na,ba=new Ri,Sa=new D,Ci=class extends Pt{constructor(e=new yt,t=new yc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,e.ray.intersectsSphere(ba)===!1)return;ed.copy(s).invert(),Mc.copy(e.ray).applyMatrix4(ed);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=d,v=f;x<v;x++){let g=c.getX(x);Sa.fromBufferAttribute(u,g),td(Sa,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let x=d,v=f;x<v;x++)Sa.fromBufferAttribute(u,x),td(Sa,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function td(n,e,t,i,s,r,a){let o=Mc.distanceSqToPoint(n);if(o<t){let l=new D;Mc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var li=class extends Gt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new se:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new D,s=[],r=[],a=[],o=new D,l=new pt;for(let f=0;f<=e;f++){let x=f/e;s[f]=this.getTangentAt(x,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Vt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Vt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fr=class extends vn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bc=class extends Fr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ih(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Ea=new D,ul=new ih,dl=new ih,fl=new ih,Sc=class extends vn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ea.subVectors(s[0],s[1]).add(s[0]),c=Ea);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ea.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ea),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),x<1e-4&&(x=v),g<1e-4&&(g=v),ul.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,x,v,g),dl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,x,v,g),fl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,x,v,g)}else this.curveType==="catmullrom"&&(ul.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),dl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),fl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(ul.calc(l),dl.calc(l),fl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nd(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Sv(n,e){let t=1-n;return t*t*e}function Ev(n,e){return 2*(1-n)*n*e}function wv(n,e){return n*n*e}function Pr(n,e,t,i){return Sv(n,e)+Ev(n,t)+wv(n,i)}function Tv(n,e){let t=1-n;return t*t*t*e}function Av(n,e){let t=1-n;return 3*t*t*n*e}function Rv(n,e){return 3*(1-n)*n*n*e}function Cv(n,e){return n*n*n*e}function Ir(n,e,t,i,s){return Tv(n,e)+Av(n,t)+Rv(n,i)+Cv(n,s)}var Xa=class extends vn{constructor(e=new se,t=new se,i=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ir(e,s.x,r.x,a.x,o.x),Ir(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ec=class extends vn{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ir(e,s.x,r.x,a.x,o.x),Ir(e,s.y,r.y,a.y,o.y),Ir(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qa=class extends vn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wc=class extends vn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends vn{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Pr(e,s.x,r.x,a.x),Pr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tc=class extends vn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Pr(e,s.x,r.x,a.x),Pr(e,s.y,r.y,a.y),Pr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(nd(o,l.x,c.x,h.x,u.x),nd(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},id=Object.freeze({__proto__:null,ArcCurve:bc,CatmullRomCurve3:Sc,CubicBezierCurve:Xa,CubicBezierCurve3:Ec,EllipseCurve:Fr,LineCurve:qa,LineCurve3:wc,QuadraticBezierCurve:$a,QuadraticBezierCurve3:Tc,SplineCurve:Ya}),Ac=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new id[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new id[s.type]().fromJSON(s))}return this}},Rc=class extends Ac{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new qa(this.currentPoint.clone(),new se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new $a(this.currentPoint.clone(),new se(e,t),new se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Xa(this.currentPoint.clone(),new se(e,t),new se(i,s),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ya(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new Fr(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Cc=class n extends yt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Vt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new D,d=new se,f=new D,x=new D,v=new D,g=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(x)}for(let _=0;_<=t;_++){let S=i+_*h*s,y=Math.sin(S),U=Math.cos(S);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*y,u.y=e[R].y,u.z=e[R].x*U,a.push(u.x,u.y,u.z),d.x=_/t,d.y=R/(e.length-1),o.push(d.x,d.y);let I=l[3*R+0]*y,C=l[3*R+1],E=l[3*R+0]*U;c.push(I,C,E)}}for(let _=0;_<t;_++)for(let S=0;S<e.length-1;S++){let y=S+_*e.length,U=y,R=y+e.length,I=y+e.length+1,C=y+1;r.push(U,R,C),r.push(I,C,R)}this.setIndex(r),this.setAttribute("position",new Xe(a,3)),this.setAttribute("uv",new Xe(o,2)),this.setAttribute("normal",new Xe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ns=class n extends Cc{constructor(e=1,t=1,i=4,s=8){let r=new Rc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Ys=class n extends yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,h=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(o,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ye=class n extends yt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],x=0,v=[],g=i/2,p=0;_(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function _(){let y=new D,U=new D,R=0,I=(t-e)/i;for(let C=0;C<=r;C++){let E=[],M=C/r,N=M*(t-e)+e;for(let z=0;z<=s;z++){let H=z/s,$=H*l+o,Y=Math.sin($),T=Math.cos($);U.x=N*Y,U.y=-M*i+g,U.z=N*T,u.push(U.x,U.y,U.z),y.set(Y,I,T).normalize(),d.push(y.x,y.y,y.z),f.push(H,1-M),E.push(x++)}v.push(E)}for(let C=0;C<s;C++)for(let E=0;E<r;E++){let M=v[E][C],N=v[E+1][C],z=v[E+1][C+1],H=v[E][C+1];(e>0||E!==0)&&(h.push(M,N,H),R+=3),(t>0||E!==r-1)&&(h.push(N,z,H),R+=3)}c.addGroup(p,R,0),p+=R}function S(y){let U=x,R=new se,I=new D,C=0,E=y===!0?e:t,M=y===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),x++;let N=x;for(let z=0;z<=s;z++){let $=z/s*l+o,Y=Math.cos($),T=Math.sin($);I.x=E*T,I.y=g*M,I.z=E*Y,u.push(I.x,I.y,I.z),d.push(0,M,0),R.x=Y*.5+.5,R.y=T*.5*M+.5,f.push(R.x,R.y),x++}for(let z=0;z<s;z++){let H=U+z,$=N+z;y===!0?h.push($,$+1,H):h.push($+1,$,H),C+=3}c.addGroup(p,C,y===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qt=class n extends Ye{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zs=class n extends yt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let S=new D,y=new D,U=new D;for(let R=0;R<t.length;R+=3)f(t[R+0],S),f(t[R+1],y),f(t[R+2],U),l(S,y,U,_)}function l(_,S,y,U){let R=U+1,I=[];for(let C=0;C<=R;C++){I[C]=[];let E=_.clone().lerp(y,C/R),M=S.clone().lerp(y,C/R),N=R-C;for(let z=0;z<=N;z++)z===0&&C===R?I[C][z]=E:I[C][z]=E.clone().lerp(M,z/N)}for(let C=0;C<R;C++)for(let E=0;E<2*(R-C)-1;E++){let M=Math.floor(E/2);E%2===0?(d(I[C][M+1]),d(I[C+1][M]),d(I[C][M])):(d(I[C][M+1]),d(I[C+1][M+1]),d(I[C+1][M]))}}function c(_){let S=new D;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(_),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let _=new D;for(let S=0;S<r.length;S+=3){_.x=r[S+0],_.y=r[S+1],_.z=r[S+2];let y=g(_)/2/Math.PI+.5,U=p(_)/Math.PI+.5;a.push(y,1-U)}x(),u()}function u(){for(let _=0;_<a.length;_+=6){let S=a[_+0],y=a[_+2],U=a[_+4],R=Math.max(S,y,U),I=Math.min(S,y,U);R>.9&&I<.1&&(S<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),U<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,S){let y=_*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function x(){let _=new D,S=new D,y=new D,U=new D,R=new se,I=new se,C=new se;for(let E=0,M=0;E<r.length;E+=9,M+=6){_.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),R.set(a[M+0],a[M+1]),I.set(a[M+2],a[M+3]),C.set(a[M+4],a[M+5]),U.copy(_).add(S).add(y).divideScalar(3);let N=g(U);v(R,M+0,_,N),v(I,M+2,S,N),v(C,M+4,y,N)}}function v(_,S,y,U){U<0&&_.x===1&&(a[S]=_.x-1),y.x===0&&y.z===0&&(a[S]=U/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Pi=class n extends Zs{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Js=class n extends Zs{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Br=class n extends Zs{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},zn=class n extends yt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new D,x=new se;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){let p=r+g/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,h.push(x.x,x.y)}u+=d}for(let v=0;v<s;v++){let g=v*(i+1);for(let p=0;p<i;p++){let _=p+g,S=_,y=_+i+1,U=_+i+2,R=_+1;o.push(S,y,R),o.push(y,U,R)}}this.setIndex(o),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var gt=class n extends yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,f=[],x=[],v=[],g=[];for(let p=0;p<=i;p++){let _=[],S=p/i,y=0;p===0&&a===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let U=0;U<=t;U++){let R=U/t;u.x=-e*Math.cos(s+R*r)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(s+R*r)*Math.sin(a+S*o),x.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(R+y,1-S),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let S=h[p][_+1],y=h[p][_],U=h[p+1][_],R=h[p+1][_+1];(p!==0||a>0)&&f.push(S,y,R),(p!==i-1||l<Math.PI)&&f.push(y,U,R)}this.setIndex(f),this.setAttribute("position",new Xe(x,3)),this.setAttribute("normal",new Xe(v,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Za=class n extends Zs{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Rn=class n extends yt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new D,u=new D,d=new D;for(let f=0;f<=i;f++)for(let x=0;x<=s;x++){let v=x/s*r,g=f/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(x/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let x=1;x<=s;x++){let v=(s+1)*f+x-1,g=(s+1)*(f-1)+x-1,p=(s+1)*(f-1)+x,_=(s+1)*f+x;a.push(v,g,_),a.push(g,p,_)}this.setIndex(a),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ja=class extends mt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Le=class extends oi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function wa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Pv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ks=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pc=class extends Ks{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tu,endingEnd:tu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case nu:r=e,o=2*t-i;break;case iu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case nu:a=e,l=2*i-t;break;case iu:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(i-t)/(s-t),v=x*x,g=v*x,p=-d*g+2*d*v-d*x,_=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*x+1,S=(-1-f)*g+(1.5+f)*v+.5*x,y=f*g-f*v;for(let U=0;U!==o;++U)r[U]=p*a[h+U]+_*a[c+U]+S*a[l+U]+y*a[u+U];return r}},Ic=class extends Ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Lc=class extends Ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Cn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ia:t=this.InterpolantFactoryMethodDiscrete;break;case ec:t=this.InterpolantFactoryMethodLinear;break;case No:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return ec;case this.InterpolantFactoryMethodSmooth:return No}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Pv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===No,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let x=0;x!==i;++x){let v=t[u+x];if(v!==t[d+x]||v!==t[f+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ec;var is=class extends Cn{constructor(e,t,i){super(e,t,i)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Ia;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Dc=class extends Cn{};Dc.prototype.ValueTypeName="color";var Uc=class extends Cn{};Uc.prototype.ValueTypeName="number";var Nc=class extends Ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ai.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ka=class extends Cn{InterpolantFactoryMethodLinear(e){return new Nc(this.times,this.values,this.getValueSize(),e)}};Ka.prototype.ValueTypeName="quaternion";Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Cn{constructor(e,t,i){super(e,t,i)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Ia;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends Cn{};kc.prototype.ValueTypeName="vector";var sd={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Fc=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],x=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},Iv=new Fc,Or=class{constructor(e){this.manager=e!==void 0?e:Iv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Or.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bc=class extends Or{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=sd.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Ur("img");function l(){h(),sd.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var ja=class extends Or{constructor(e){super(e)}load(e,t,i,s){let r=new Gt,a=new Bc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},js=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Qs=class extends js{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},pl=new pt,rd=new D,ad=new D,Qa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(rd),ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ad),t.updateMatrixWorld(),pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var od=new pt,Tr=new D,ml=new D,Oc=class extends Qa{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Tr),ml.copy(i.position),ml.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ml),i.updateMatrixWorld(),s.makeTranslation(-Tr.x,-Tr.y,-Tr.z),od.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od)}},Ii=class extends js{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Oc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},zc=class extends Qa{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},er=class extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new zc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},tr=class extends js{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var eo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ld(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ld();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ld(){return performance.now()}var sh="\\[\\]\\.:\\/",Lv=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",Dv="[^"+sh.replace("\\.","")+"]",Uv=/((?:WC+[\/:])*)/.source.replace("WC",rh),Nv=/(WCOD+)?/.source.replace("WCOD",Dv),kv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),Fv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),Bv=new RegExp("^"+Uv+Nv+kv+Fv+"$"),Ov=["material","materials","bones","map"],Hc=class{constructor(e,t,i){let s=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lv,"")}static parseTrackName(e){let t=Bv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ov.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Hc;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var A_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);var ro={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},zv=new Gs(-1,1,1,-1,0,1),ah=class extends yt{constructor(){super(),this.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xe([0,2,0,0,2,0],2))}},Hv=new ah,Li=class{constructor(e){this._mesh=new le(Hv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var rr=class extends hn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hn.clone(e.uniforms),this.material=new mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Li(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Hr=class extends hn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ao=class extends hn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var oo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new se);this._width=i.width,this._height=i.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rr(ro),this.copyPass.material.blending=Bn,this.clock=new eo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Hr!==void 0&&(a instanceof Hr?i=!0:a instanceof ao&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var lo=class extends hn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Ld={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ar=class n extends hn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new Ae(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(r,a,{type:Pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new jt(r,a,{type:Pn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new jt(r,a,{type:Pn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Ld;this.highPassUniforms=Hn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new se(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ro;this.copyUniforms=Hn.clone(h.uniforms),this.blendMaterial=new mt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:rt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.basic=new Rt,this.fsQuad=new Li(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new se(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ar.BlurDirectionX=new se(1,0);ar.BlurDirectionY=new se(0,1);var Dd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var co=class extends hn{constructor(){super();let e=Dd;this.uniforms=Hn.clone(e.uniforms),this.material=new Ja({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$c?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ci=.03333333333333333,_n=44,Ud=.7,oh=30,Nd=.18;var lh=20;var kd=5,ch=[0,100,250,450,700],Fd=6.5;var un={ranger:{name:"Pemanah Arkana",desc:"Tembakan cepat jarak jauh",skillName:"Kilat",skillDesc:"Melesat cepat ke arah gerak",hp:100,speed:8.5,fireCd:.16,dmg:9,projSpeed:70,projLife:.7,pellets:1,spread:.015,splash:0,skill:"dash",skillCd:5,color:5104639},mage:{name:"Penyihir Bara",desc:"Bola api dengan ledakan area",skillName:"Nova",skillDesc:"Ledakan di sekeliling tubuh",hp:90,speed:7.5,fireCd:.7,dmg:34,projSpeed:32,projLife:1.6,pellets:1,spread:0,splash:3.5,skill:"nova",skillCd:9,color:16742958},guardian:{name:"Penjaga Rune",desc:"Sebaran rune jarak dekat, tubuh kuat",skillName:"Perisai",skillDesc:"Menahan 70% serangan selama 3 detik",hp:140,speed:7,fireCd:.75,dmg:8,projSpeed:55,projLife:.32,pellets:6,spread:.16,splash:0,skill:"shield",skillCd:10,color:10354538},priest:{name:"Haji Toriq",desc:"Penyembuh: memulihkan diri dan rekan",skillName:"Doa",skillDesc:"Pulihkan 35 HP untukmu dan rekan di dekatmu",hp:95,speed:8,fireCd:.4,dmg:13,projSpeed:45,projLife:.8,pellets:1,spread:.02,splash:0,skill:"heal",skillCd:9,color:16769658}},hh=Object.keys(un);var uh=[],ho=(n,e,t,i,s)=>uh.push({t:"cyl",x:n,z:e,r:t,h:i,kind:s}),or=(n,e,t,i,s,r)=>uh.push({t:"box",x:n,z:e,w:t,d:i,h:s,kind:r});ho(0,0,3.2,1.4,"altar");for(let n of[-1,1])for(let e of[-1,1])ho(n*13,e*13,1.3,9,"pillar"),or(n*30,e*26,12,2,4.5,"wall"),or(n*35,e*31,2,10,4.5,"wall"),or(n*9,e*33,3,3,2.6,"block"),or(n*33,e*9,3,3,2.6,"block");for(let n of[-1,1])ho(0,n*30,1.3,9,"pillar"),ho(n*28,0,1.3,9,"pillar"),or(0,n*21,16,2,4,"wall"),or(n*21,0,2,16,4,"wall");var dh=uh,Vv=[[40,7],[-40,-7],[-7,40],[7,-40],[38,18],[38,-18],[-38,18],[-38,-18],[18,38],[-18,38],[18,-38],[-18,-38]],fh=[[12,0],[-12,0],[0,12],[0,-12],[39,39],[-39,39],[39,-39],[-39,-39]],fo={dm:"Deathmatch",koth:"Rebut Altar"},Vr=7.5;var Di={dmg:{name:"Rune Amarah",desc:"damage +50%",color:16726862},spd:{name:"Rune Angin",desc:"kecepatan +35%",color:5096447}},Gv=[{x:0,z:26,type:"dmg"},{x:0,z:-26,type:"dmg"},{x:18,z:18,type:"spd"},{x:-18,z:-18,type:"spd"}],Bd=.11;fo.tdm="Tim";fo.coop="Lawan Bot";var Od=["tdm","coop"];var dn=[{name:"Fajar",color:15910509},{name:"Senja",color:10513407}],ph=[],uo=(n,e,t,i,s)=>ph.push({t:"cyl",x:n,z:e,r:t,h:i,kind:s}),rs=(n,e,t,i,s,r)=>ph.push({t:"box",x:n,z:e,w:t,d:i,h:s,kind:r});uo(0,0,2.6,2.2,"bell");for(let n of[-1,1])for(let e of[-1,1])rs(n*31,e*13,12,4,5,"shed"),rs(n*13,e*31,4,12,5,"shed"),uo(n*24,e*24,.6,12,"mast"),rs(n*16,e*15,3,3,2.4,"crate"),rs(n*15,e*18.5,2.4,2.4,1.8,"crate"),rs(n*35,e*33,4,9,1.7,"boat");for(let n of[-1,1])rs(0,n*21,9,2.6,2.4,"crate"),rs(n*21,0,2.6,9,2.4,"crate"),uo(n*10.5,n*-10.5,.6,7,"post"),uo(n*-10.5,n*-10.5,.6,7,"post");var Wt={ruins:{name:"Reruntuhan Senja",obst:dh,spawns:Vv,orbs:fh,runes:Gv},harbor:{name:"Pelabuhan Bulan",obst:ph,spawns:[[40,0],[-40,0],[0,40],[0,-40],[39,22],[39,-22],[-39,22],[-39,-22],[22,39],[-22,39],[22,-39],[-22,-39]],orbs:[[10,0],[-10,0],[0,10],[0,-10],[27,27],[-27,27],[27,-27],[-27,-27]],runes:[{x:0,z:30,type:"dmg"},{x:0,z:-30,type:"dmg"},{x:30,z:0,type:"spd"},{x:-30,z:0,type:"spd"}]}},iy=Object.keys(Wt),Ui=[{id:"default",name:"Bawaan kelas",req:null},{id:"zamrud",name:"Zamrud",accent:2059082,req:{stat:"matches",n:5,text:"Selesaikan 5 ronde"}},{id:"senja",name:"Ungu Senja",accent:5974662,req:{stat:"kills",n:25,text:"25 kill total"}},{id:"bulan",name:"Perak Bulan",accent:11187916,glow:14674175,req:{stat:"wins",n:3,text:"Menang 3 ronde"}},{id:"naga",name:"Darah Naga",accent:7999260,glow:16726830,req:{stat:"kills",n:100,text:"100 kill total"}},{id:"raja",name:"Emas Raja",accent:12093738,glow:16766315,req:{stat:"wins",n:10,text:"Menang 10 ronde"}}];function zd(n,e){return!n.req||(e&&e[n.req.stat]||0)>=n.req.n}var mh={eclipse:{name:"Gerhana",desc:"Arena gelap, jarak pandang pendek",dur:25},runerain:{name:"Hujan Rune",desc:"Semua rune muncul dan cepat kembali",dur:20},golden:{name:"Cawan Emas",desc:"Ambil cawan: HP penuh dan kedua rune",dur:30}},gh=100,xh={ranger:{name:"Hujan Panah",desc:"11 panah menyebar sekaligus"},mage:{name:"Meteor",desc:"Meteor jatuh di depan, ledakan besar"},guardian:{name:"Benteng Rune",desc:"Perisai 5 dtk, pulih 50% HP, gelombang kejut"},priest:{name:"Cahaya Fajar",desc:"Rekan pulih penuh dan yang tumbang bangkit; lawan di dekatmu terluka"}};Ui.push({id:"fajar",name:"Bintang Fajar",accent:14248250,glow:16756848,req:{stat:"chal",n:3,text:"Selesaikan 3 tantangan harian"}},{id:"malam",name:"Bayangan Malam",accent:1448494,glow:8057087,req:{stat:"chal",n:10,text:"Selesaikan 10 tantangan harian"}});fo.pve="Bertahan Bersama";var Vn={ghoul:{name:"Hantu Rawa",hp:30,speed:6.2,color:8257418,melee:{dmg:6,cd:1.1,r:1.9}},caster:{name:"Dukun Bayang",hp:38,speed:5.4,color:13134847,range:18,fireCd:1.5,dmg:15,projSpeed:30,projLife:1.6,pellets:1,spread:.04,splash:0,skill:"none",skillCd:99},brute:{name:"Golem Batu",hp:260,speed:4,color:16752704,boss:!0,melee:{dmg:16,cd:1.6,r:2.8},slam:{dmg:18,r:5.5,cd:7}}},hi={...un,...Vn},Gr={breakTime:6,cap:22,bossEvery:5,winWave:10,diffMul:{easy:.55,normal:.75,hard:1.15}};Object.assign(Gr,{windup:.45,reviveTime:3,reviveR:2.4,spareDelay:4,allies:3,checkpointEvery:5,perkBreak:12});var Ni={tajam:{name:"Tajam",desc:"Damage +15%"},cepat:{name:"Cepat",desc:"Kecepatan tembak +12%"},vampir:{name:"Vampir",desc:"Pulih 12% dari damage yang diberikan"},kokoh:{name:"Kokoh",desc:"HP maksimal +25"},lincah:{name:"Lincah",desc:"Kecepatan lari +10%"},fokus:{name:"Fokus",desc:"Jeda skill -20%"},amarah:{name:"Amarah",desc:"Pengukur pamungkas terisi 40% lebih cepat"},ganda:{name:"Ganda",desc:"Tambahan 1 peluru setiap tembakan"},ledak:{name:"Ledak",desc:"Musuh yang tumbang meledak (damage area)"},pulih:{name:"Pulih",desc:"HP mulai pulih 1 dtk lebih cepat, +4 per dtk"}},sy=Object.keys(Ni);Object.assign(Vn,{frost:{name:"Penyihir Es",hp:34,speed:5.2,color:8378623,range:17,slow:!0,fireCd:1.9,dmg:10,projSpeed:26,projLife:1.7,pellets:1,spread:.04,splash:0,skill:"none",skillCd:99},spiderling:{name:"Anak Laba-laba",hp:14,speed:8.2,color:16735610,melee:{dmg:4,cd:.9,r:1.6}},queen:{name:"Ratu Laba-laba",hp:300,speed:4.6,color:16723546,boss:!0,melee:{dmg:14,cd:1.4,r:2.8},summon:{cd:7,n:2,max:6}}});Object.assign(hi,un,Vn);Wt.ruins.barrels=[];Wt.harbor.barrels=[[19,7],[-19,-7],[7,-19],[-7,19],[26,20],[-26,-20]];var lr={giant:{name:"Raksasa",desc:"Semua besar: HP +60%, gerak lebih lambat"},meteor:{name:"Hujan Meteor",desc:"Meteor jatuh di dekat pemain; lihat lingkaran merah"},oneshot:{name:"Tembakan Maut",desc:"Damage x3, tembakan lebih jarang"},mage:{name:"Hanya Penyihir",desc:"Semua bermain sebagai Penyihir Bara"}},vh=["Tolong!","Ke sini!","Bagus!"],_h=[{id:"k100",name:"Pembasmi",text:"100 kill",stat:"kills",n:100},{id:"w10",name:"Juara",text:"Menang 10 ronde",stat:"wins",n:10},{id:"wave5",name:"Penakluk Golem",text:"Selesaikan gelombang 5",stat:"bestWave",n:5},{id:"wave10",name:"Pembasmi Ratu",text:"Selesaikan gelombang 10",stat:"bestWave",n:10},{id:"rev10",name:"Penolong",text:"Tolong rekan 10 kali",stat:"revives",n:10},{id:"bnt5",name:"Pemburu Hadiah",text:"Tumbangkan 5 buronan",stat:"bounties",n:5},{id:"chal7",name:"Rajin",text:"Selesaikan 7 tantangan harian",stat:"chal",n:7}];fo.king="Perburuan Raja";var ry={bossRush:"Bos setiap 3 gelombang",doublePerk:"Dua berkah tiap gelombang",giant:lr.giant.name,meteor:lr.meteor.name,oneshot:lr.oneshot.name,mage:lr.mage.name};Ui.push({id:"golem",name:"Batu Golem",accent:7036242,glow:16747050,req:{stat:"ev_golem",n:1,text:"Capai target event Malam Golem"}},{id:"mahkota",name:"Jubah Mahkota",accent:5902384,glow:16765514,req:{stat:"ev_raja",n:1,text:"Capai target event Perburuan Raja"}});_h.push({id:"ev3",name:"Tamu Setia",text:"Hadir di 3 event",stat:"evAttend",n:3});var Wr=Wt.ruins.obst;function Hd(n){Wr=(Wt[n]||Wt.ruins).obst}function Wv(n,e){for(let t=0;t<2;t++){let i=_n-e;n.x>i?n.x=i:n.x<-i&&(n.x=-i),n.z>i?n.z=i:n.z<-i&&(n.z=-i);for(let s=0;s<Wr.length;s++){let r=Wr[s];if(r.t==="cyl"){let a=n.x-r.x,o=n.z-r.z,l=r.r+e,c=a*a+o*o;if(c<l*l){let h=Math.sqrt(c);h<1e-6&&(a=1,o=0,h=1),n.x=r.x+a/h*l,n.z=r.z+o/h*l}}else{let a=r.w/2,o=r.d/2,l=Math.max(r.x-a,Math.min(n.x,r.x+a)),c=Math.max(r.z-o,Math.min(n.z,r.z+o)),h=n.x-l,u=n.z-c,d=h*h+u*u;if(d<e*e)if(d>1e-10){let f=Math.sqrt(d);n.x=l+h/f*e,n.z=c+u/f*e}else{let f=a-Math.abs(n.x-r.x),x=o-Math.abs(n.z-r.z);f<x?n.x=r.x+Math.sign(n.x-r.x||1)*(a+e):n.z=r.z+Math.sign(n.z-r.z||1)*(o+e)}}}}}function yh(n,e,t,i){n.yaw=e.y;let s=e.mx,r=e.mz,a=Math.hypot(s,r);a>1&&(s/=a,r/=a),n.skillCd>0&&(n.skillCd=Math.max(0,n.skillCd-i));let o=!1;if(e.k&&n.skillCd<=0&&(n.skillCd=t.skillCd,o=!0,t.skill==="dash"&&(n.dashT=Nd,a>.2?(n.dx=e.mx/a,n.dz=e.mz/a):(n.dx=Math.sin(n.yaw),n.dz=Math.cos(n.yaw)))),n.dashT>0)n.x+=n.dx*oh*i,n.z+=n.dz*oh*i,n.dashT=Math.max(0,n.dashT-i);else{let l=t.speed*(n.spd||1);n.x+=s*l*i,n.z+=r*l*i}return Wv(n,Ud),o}function ki(n,e,t){let i=_n-t;if(n>i||n<-i||e>i||e<-i)return!0;for(let s=0;s<Wr.length;s++){let r=Wr[s];if(r.t==="cyl"){let a=n-r.x,o=e-r.z,l=r.r+t;if(a*a+o*o<l*l)return!0}else if(Math.abs(n-r.x)<r.w/2+t&&Math.abs(e-r.z)<r.d/2+t)return!0}return!1}function Vd(n,e,t,i){let s=t-n,r=i-e,a=Math.hypot(s,r),o=Math.ceil(a/.7);for(let l=1;l<o;l++){let c=l/o;if(ki(n+s*c,e+r*c,.1))return!1}return!0}function cr(n,e){let t=(n-e)%(Math.PI*2);return t>Math.PI?t-=Math.PI*2:t<-Math.PI&&(t+=Math.PI*2),t}var Mh=[];function Xd(n,e){let t=Math.min(1024,n.width),i=n;(!n.getContext||n.width!==t)&&(i=document.createElement("canvas"),i.width=i.height=t,i.getContext("2d").drawImage(n,0,0,t,t));let s=i.getContext("2d").getImageData(0,0,t,t).data,r=new Float32Array(t*t);for(let h=0;h<t*t;h++)r[h]=(s[h*4]*.3+s[h*4+1]*.59+s[h*4+2]*.11)/255;let a=document.createElement("canvas");a.width=a.height=t;let o=a.getContext("2d"),l=o.createImageData(t,t),c=(h,u)=>r[(u+t)%t*t+(h+t)%t];for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=(c(u+1,h)-c(u-1,h))*e,f=(c(u,h+1)-c(u,h-1))*e,x=1/Math.hypot(d,f,1),v=(h*t+u)*4;l.data[v]=(-d*x*.5+.5)*255,l.data[v+1]=(f*x*.5+.5)*255,l.data[v+2]=(x*.5+.5)*255,l.data[v+3]=255}return o.putImageData(l,0,0),new li(a)}var bh=(n,e)=>(n.wrapS=e.wrapS,n.wrapT=e.wrapT,n.repeat.copy(e.repeat),n.anisotropy=e.anisotropy,n),qd={},Sh={};function Fi(n,e=2,t=1,i=""){let s={mat:n,tex:bh(Xd(n.map.image,e),n.map),strength:e};return n.normalScale=new se(t,t),Mh.push(s),i&&((qd[i]||=[]).push(s),Sh[i]&&$d(i)),n}function $d(n){let e=Sh[n];for(let t of qd[n]||[]){if(t.hd)continue;t.hd=!0;let i=t.mat.normalMap===t.tex;e.normal||=Xd(e.image,t.strength*1.6);let s=bh(new Gt(e.image),t.mat.map);s.colorSpace=Ut,s.needsUpdate=!0,t.tex=bh(e.normal.clone(),t.mat.map),t.tex.needsUpdate=!0,t.mat.map=s,i&&(t.mat.normalMap=t.tex),t.mat.needsUpdate=!0}}var Gd=!1;async function Yd(){if(Gd)return 0;Gd=!0;let n=0;try{let e=await fetch("/assets/manifest.json");if(!e.ok)return 0;let t=await e.json();await Promise.all(Object.entries(t.tex||{}).map(async([i,s])=>{if(!/^[a-z0-9_-]{1,40}\.webp$/.test(s))return;let r=new Image;r.src=`/assets/${s}?v=${t.v||0}`;try{await r.decode()}catch{return}Sh[i]={image:r,normal:null},$d(i),n++}))}catch{}return n}var Wd=null;function Zd(n){if(!(n===Wd&&Mh.every(e=>e.done))){Wd=n;for(let e of Mh)e.done=!0,e.mat.normalMap===e.tex!==n&&(e.mat.normalMap=n?e.tex:null,e.mat.needsUpdate=!0)}}var Jd=new kr(new Uint8Array([255,255,255,255]),1,1);Jd.needsUpdate=!0;var Kd=[];function po(n,e,t,i=.5){let s={bakeMap:{value:Jd},bakeExt:{value:t},bakeAo:{value:.75},bakeSun:{value:0},bakeShade:{value:i}};return Kd.push(s),new ja().load(e,r=>{r.flipY=!1,r.colorSpace=Un,r.wrapS=r.wrapT=ni,r.generateMipmaps=!0,s.bakeMap.value=r}),n.onBeforeCompile=r=>{Object.assign(r.uniforms,s),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vBakeXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBakeXZ = (modelMatrix * vec4(position, 1.0)).xz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vBakeXZ; uniform sampler2D bakeMap; uniform float bakeExt, bakeAo, bakeSun, bakeShade;`).replace("#include <map_fragment>",`#include <map_fragment>
        { vec2 buv = vBakeXZ / (2.0 * bakeExt) + 0.5;
          if (buv.x > 0.0 && buv.x < 1.0 && buv.y > 0.0 && buv.y < 1.0) {
            vec4 bk = texture2D(bakeMap, buv);
            diffuseColor.rgb *= mix(1.0, bk.r, bakeAo) * mix(1.0, mix(bakeShade, 1.0, bk.g), bakeSun);
          } }`)},n.customProgramCacheKey=()=>"bake",n}function jd(n){for(let e of Kd)e.bakeSun.value=n?1:0}function Qd(n,e){let t=new qs,i=e.clone();i.scale.setScalar(.1),t.add(i);let s=new Ws(n),r=s.fromScene(t,.04,.1,200).texture;return s.dispose(),r}function Bi(n,e=9078472,t=.45){let i=new Ae(e);return n.onBeforeCompile=s=>{s.uniforms.rimColor={value:i},s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 rimColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += rimColor * pow(1.0 - saturate(dot(normal, normalize(vViewPosition))), 3.0) * ${t.toFixed(2)};`)},n.customProgramCacheKey=()=>"rim"+t,n}function ef(){return new rr({uniforms:{tDiffuse:{value:null},sat:{value:1.14},con:{value:1.04},vig:{value:.3}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float sat, con, vig; varying vec2 vUv;
      void main(){ vec4 t=texture2D(tDiffuse,vUv); vec3 c=t.rgb;
        float l=dot(c,vec3(0.2126,0.7152,0.0722));
        c=mix(vec3(l),c,sat);
        c=max(vec3(0.0),(c-0.18)*con+0.18);
        c*=mix(vec3(0.94,0.97,1.06),vec3(1.05,1.0,0.94),smoothstep(0.0,0.7,l)); // bayangan sejuk, sorotan hangat
        vec2 d=vUv-0.5; c*=1.0-vig*smoothstep(0.25,0.85,dot(d,d)*2.2);
        gl_FragColor=vec4(c,t.a); }`})}var tf=new D(-.62,.4,-.68).normalize();function Oi(n){let e=n;return()=>((e=e*16807%2147483647)-1)/2147483646}function zi(n,e,t){let i=document.createElement("canvas");i.width=i.height=n,e(i.getContext("2d"),n);let s=new li(i);return s.colorSpace=Ut,t&&(s.wrapS=s.wrapT=Lr,s.repeat.set(t,t)),s.anisotropy=4,s}function Xv(){return zi(128,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.55)"),t.addColorStop(.6,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=t,n.fillRect(0,0,e,e)})}function qv(){let n=Oi(7);return zi(256,(e,t)=>{e.fillStyle="#8e879a",e.fillRect(0,0,t,t);let i=4,s=t/i;for(let r=0;r<i;r++){let a=r%2*32;for(let o=-1;o<4;o++){let l=128+n()*50;e.fillStyle=`rgb(${l+8},${l},${l+16})`,e.fillRect(o*64+a+2,r*s+2,60,s-4)}}for(let r=0;r<2600;r++){let a=n()<.5?0:255;e.fillStyle=`rgba(${a},${a},${a},${.03+n()*.05})`,e.fillRect(n()*t,n()*t,1+n()*2,1+n()*2)}for(let r=0;r<22;r++)e.fillStyle=`rgba(70,${110+n()*40},70,0.16)`,e.beginPath(),e.arc(n()*t,n()*t,6+n()*16,0,7),e.fill()},1)}function $v(){let n=Oi(21);return zi(512,(e,t)=>{e.fillStyle="#4c5a3c",e.fillRect(0,0,t,t);for(let i=0;i<420;i++){let s=n()*t,r=n()*t,a=14+n()*30,o=96+n()*50;e.fillStyle=`rgba(${o+14},${o+8},${o+20},${.5+n()*.4})`,e.beginPath(),e.ellipse(s,r,a,a*(.6+n()*.4),n()*3,0,7),e.fill();for(let[l,c]of[[t,0],[-t,0],[0,t],[0,-t]])e.beginPath(),e.ellipse(s+l,r+c,a,a*.8,0,0,7),e.fill()}for(let i=0;i<5e3;i++)e.fillStyle=`rgba(${60+n()*50},${120+n()*80},${50+n()*30},${.22+n()*.25})`,e.fillRect(n()*t,n()*t,2,2+n()*3)},22)}function Yv(){let n=Oi(99);return zi(512,(e,t)=>{let i=t/2;e.strokeStyle="#8fefff",e.lineCap="round";for(let[s,r]of[[240,5],[222,2],[150,4],[92,2],[60,3]])e.lineWidth=r,e.beginPath(),e.arc(i,i,s,0,7),e.stroke();e.lineWidth=3;for(let s=0;s<24;s++){let r=s/24*Math.PI*2;e.save(),e.translate(i+Math.cos(r)*186,i+Math.sin(r)*186),e.rotate(r+Math.PI/2),e.beginPath();for(let a=0;a<4;a++)e.lineTo((n()-.5)*22,(n()-.5)*30);e.stroke(),e.restore()}e.lineWidth=2.5;for(let s=0;s<2;s++){e.beginPath();for(let r=0;r<=4;r++){let a=r/4*Math.PI*2+s*Math.PI/4;e.lineTo(i+Math.cos(a)*150,i+Math.sin(a)*150)}e.stroke()}})}function Zv(){let n=Oi(5);return zi(128,(t,i)=>{for(let s=0;s<13;s++){let r=i*(.3+n()*.4),a=(n()-.5)*i*.75,o=i*(.45+n()*.5),l=5+n()*5,c=t.createLinearGradient(0,i,0,i-o);c.addColorStop(0,"#2f5a2a"),c.addColorStop(1,`hsl(${85+n()*30},60%,${50+n()*20}%)`),t.fillStyle=c,t.beginPath(),t.moveTo(r-l,i),t.quadraticCurveTo(r+a*.3,i-o*.6,r+a,i-o),t.quadraticCurveTo(r+a*.4,i-o*.5,r+l,i),t.closePath(),t.fill()}})}function Jv(){let n=[],e=[],t=[],i=[];for(let r=0;r<2;r++){let a=Math.cos(r*Math.PI/2+.4)*.5,o=Math.sin(r*Math.PI/2+.4)*.5,l=r*4;n.push(-a,0,-o,a,0,o,a,.75,o,-a,.75,-o),e.push(0,0,1,0,1,1,0,1),t.push(0,1,0,0,1,0,0,1,0,0,1,0),i.push(l,l+1,l+2,l,l+2,l+3,l,l+2,l+1,l,l+3,l+2)}let s=new yt;return s.setAttribute("position",new Xe(n,3)),s.setAttribute("uv",new Xe(e,2)),s.setAttribute("normal",new Xe(t,3)),s.setIndex(i),s}function Kv(){let n=[],e=[],t=[],i=0;for(let[r,a,o]of[[3,4.2,-2.2],[2.3,3.8,.2],[1.5,3.4,2.6]]){let l=new Qt(r,a,7);l.translate(0,o,0),n.push(...l.attributes.position.array),e.push(...l.attributes.normal.array);for(let c of l.index.array)t.push(c+i);i+=l.attributes.position.count}let s=new yt;return s.setAttribute("position",new Xe(n,3)),s.setAttribute("normal",new Xe(e,3)),s.setIndex(t),s}function nf(n){let e=new Oe;n.add(e);let t=Oi(1234),i=Xv(),s=qv(),r=Fi(new Le({map:s,roughness:.9,metalness:.02}),3.2,1.1,"stone"),a=Fi(new Le({map:s,color:11577020,roughness:.95}),3.2,1.1,"stone"),o={root:e,glowTex:i,orbs:[],spin:[],grass:null,sun:null,pointLights:[]};o.fog=new Xs(7029872,.006);let l=new le(new gt(600,32,16),new mt({side:zt,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:tf}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 sunDir;
        float hash(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float h=d.y;
          vec3 hor=vec3(1.0,0.48,0.26), mid=vec3(0.42,0.17,0.45), top=vec3(0.035,0.05,0.16);
          vec3 c=mix(hor,mid,smoothstep(-0.02,0.22,h)); c=mix(c,top,smoothstep(0.16,0.75,h));
          float s=max(dot(d,sunDir),0.0);
          c+=vec3(1.0,0.55,0.25)*pow(s,6.0)*0.55 + vec3(1.0,0.85,0.6)*pow(s,220.0)*4.0;
          vec3 g=floor(d*220.0); float st=step(0.9972,hash(g));
          c+=vec3(0.9,0.95,1.0)*st*smoothstep(0.25,0.7,h)*(0.6+0.4*hash(g+1.0));
          gl_FragColor=vec4(c,1.0); }`}));l.renderOrder=-10,l.frustumCulled=!1,e.add(l),o.sky=l,e.add(new Qs(9676021,5915216,1.55)),e.add(new tr(9404341,.75));let c=new er(16758912,3.6);c.castShadow=!0,c.shadow.mapSize.set(1024,1024);let h=c.shadow.camera;h.left=-34,h.right=34,h.top=34,h.bottom=-34,h.near=1,h.far=160,c.shadow.bias=-6e-4,c.shadow.normalBias=.04,e.add(c,c.target),o.sun=c;let u=new le(new tn(440,440),new Le({map:$v(),roughness:.96}));u.material.map.repeat.set(60,60),Fi(u.material,2.6,.9,"ground"),po(u.material,"bake/ruins.png",52,.36),u.rotation.x=-Math.PI/2,u.receiveShadow=!0,e.add(u);let d=new le(new tn(22,22),new Rt({map:Yv(),transparent:!0,blending:rt,depthWrite:!1,opacity:.75}));d.rotation.x=-Math.PI/2,d.position.y=.04,e.add(d),o.rune=d;let f=A=>(A.castShadow=!0,A.receiveShadow=!0,A),x=A=>new Le({color:A,emissive:A,emissiveIntensity:1.8,roughness:.25,metalness:.1});function v(A,q,V,j,oe,Ee){let K=new Oe,ne=new le(new Br(j,0),x(oe));ne.scale.y=1.9,K.add(ne);let xe=new Ht(new Ft({map:i,color:oe,blending:rt,depthWrite:!1,transparent:!0,opacity:.7}));if(xe.scale.setScalar(j*7),K.add(xe),K.position.set(A,q,V),e.add(K),o.spin.push({g:K,y:q,sp:.5+t()*.6,ph:t()*6}),Ee){let ue=new Ii(oe,Ee,34,1.6);ue.position.set(A,q,V),e.add(ue),o.pointLights.push(ue)}return K}for(let A of dh)if(A.kind==="altar"){for(let[q,V,j]of[[3.2,.5,.25],[2.6,.5,.75],[2,.4,1.2]]){let oe=f(new le(new Ye(q,q+.15,V,8),r));oe.position.set(A.x,j,A.z),e.add(oe)}v(A.x,4.2,A.z,1,5826303,90)}else if(A.kind==="pillar"){let q=t()<.4,V=q?4+t()*3:A.h,j=f(new le(new tt(A.r*2.5,.7,A.r*2.5),r));j.position.set(A.x,.35,A.z),e.add(j);let oe=f(new le(new Ye(A.r*.82,A.r*.95,V,10),r));if(oe.position.set(A.x,.7+V/2,A.z),oe.rotation.z=q?(t()-.5)*.05:0,e.add(oe),!q){let Ee=f(new le(new tt(A.r*2.6,.6,A.r*2.6),r));Ee.position.set(A.x,.7+V+.3,A.z),e.add(Ee),v(A.x,.7+V+1.6,A.z,.38,16734929,0)}}else if(A.kind==="wall"){let q=f(new le(new tt(A.w,A.h,A.d),r));q.position.set(A.x,A.h/2,A.z),e.add(q);let V=A.w>A.d,j=V?A.w:A.d,oe=Math.floor(j/2);for(let Ee=0;Ee<oe;Ee++){if(t()<.3)continue;let K=.5+t()*.9,ne=-j/2+1+Ee*2,xe=f(new le(new tt(V?1.2:A.w,K,V?A.d:1.2),r));xe.position.set(A.x+(V?ne:0),A.h+K/2,A.z+(V?0:ne)),e.add(xe)}}else{let q=f(new le(new tt(A.w,A.h,A.d),a));q.position.set(A.x,A.h/2,A.z),q.rotation.y=0,e.add(q);let V=f(new le(new tt(A.w*.6,.7,A.d*.6),r));V.position.set(A.x+.3,A.h+.35,A.z-.2),V.rotation.y=.5,e.add(V)}for(let A of[-1,1])v(0,5.6,A*21,.5,16757310,30),v(A*21,5.6,0,.5,16757310,30);let g=_n+1.5;for(let[A,q,V,j]of[[0,g,2*g+3,3],[0,-g,2*g+3,3],[g,0,3,2*g+3],[-g,0,3,2*g+3]]){let oe=f(new le(new tt(V,6,j),a));oe.position.set(A,3,q),e.add(oe)}let p=new Le({color:4861278,roughness:.8});for(let A of[-1,1])for(let q of[-1,1]){let V=f(new le(new Ye(4,4.6,12,10),a));V.position.set(A*g,6,q*g),e.add(V);let j=f(new le(new Qt(5,6,10),p));j.position.set(A*g,15,q*g),e.add(j),v(A*g,19.5,q*g,.6,5826303,0)}let _=new Le({color:4863334,roughness:1,flatShading:!0});for(let A=0;A<30;A++){let q=A/30*Math.PI*2+t()*.2,V=200+t()*90,j=45+t()*70,oe=new Qt(70+t()*50,j,9,4),Ee=oe.attributes.position;for(let ne=0;ne<Ee.count;ne++){let xe=(.5-Ee.getY(ne)/j)*26;Ee.setX(ne,Ee.getX(ne)+(t()-.5)*xe),Ee.setZ(ne,Ee.getZ(ne)+(t()-.5)*xe),Ee.setY(ne,Ee.getY(ne)+(t()-.5)*xe*.5)}oe.computeVertexNormals();let K=new le(oe,_);K.position.set(Math.cos(q)*V,j/2-6,Math.sin(q)*V),K.rotation.y=t()*6,e.add(K)}let S=150,y=new Pt,U=new $s(new Ye(.35,.5,4,6),new Le({color:3877418,roughness:1}),S),R=new $s(Kv(),new Le({color:16777215,roughness:1,flatShading:!0}),S);for(let A=0;A<S;A++){let q,V;do q=(t()-.5)*220,V=(t()-.5)*220;while(Math.abs(q)<g+9&&Math.abs(V)<g+9);let j=.8+t()*1.3;y.position.set(q,2*j,V),y.scale.setScalar(j),y.rotation.set(0,t()*6,0),y.updateMatrix(),U.setMatrixAt(A,y.matrix),y.position.y=7*j,y.updateMatrix(),R.setMatrixAt(A,y.matrix),R.setColorAt(A,new Ae().setHSL(.38+t()*.1,.45,.1+t()*.09))}e.add(U,R);let I=new Pi(.5,0);for(let A=0;A<60;A++){let q=(t()-.5)*84,V=(t()-.5)*84;if(ki(q,V,1.2)||Math.hypot(q,V)<12)continue;let j=f(new le(I,a)),oe=.3+t()*.5;j.scale.set(oe,oe*.6,oe),j.position.set(q,oe*.15,V),j.rotation.set(t()*3,t()*3,0),e.add(j)}let C=4200,E=Jv(),M=new $s(E,new Le({map:Zv(),alphaTest:.45,roughness:1}),C),N=new Ae;for(let A=0;A<C;A++){let q=(t()-.5)*86,V=(t()-.5)*86,j=q+(t()-.5)*2.5,oe=V+(t()-.5)*2.5,Ee=ki(j,oe,.3)?0:.7+t()*1.1;y.position.set(j,0,oe),y.scale.set(Ee,Ee,Ee),y.rotation.set(0,t()*6,0),y.updateMatrix(),M.setMatrixAt(A,y.matrix),M.setColorAt(A,N.setHSL(.22+t()*.12,.5,.42+t()*.25))}M.receiveShadow=!0,e.add(M),o.grass=M,o.grassMax=C;let z=260,H=new Float32Array(z*3),$=new Float32Array(z);for(let A=0;A<z;A++)H[A*3]=(t()-.5)*96,H[A*3+1]=.6+t()*7,H[A*3+2]=(t()-.5)*96,$[A]=t()*100;let Y=new yt;Y.setAttribute("position",new Tt(H,3)),Y.setAttribute("ph",new Tt($,1));let T=new Ci(Y,new mt({transparent:!0,depthWrite:!1,blending:rt,uniforms:{time:{value:0},scale:{value:400}},vertexShader:`attribute float ph; uniform float time; uniform float scale; varying float vA;
      void main(){ vec3 p=position; p.x+=sin(time*0.4+ph)*1.6; p.y+=sin(time*0.7+ph*1.7)*0.7; p.z+=cos(time*0.33+ph*1.3)*1.6;
        vA=0.45+0.55*sin(time*2.0+ph*3.0); vec4 mv=modelViewMatrix*vec4(p,1.0);
        gl_PointSize=scale*0.24/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying float vA; void main(){ float d=length(gl_PointCoord-0.5);
      gl_FragColor=vec4(vec3(1.0,0.86,0.45)*2.0, smoothstep(0.5,0.0,d)*vA); }`}));T.frustumCulled=!1,e.add(T),o.flies=T;let Z=new Le({color:5898140,emissive:3014527,emissiveIntensity:3,roughness:.2});for(let[A,q]of fh){let V=new Oe;V.add(new le(new Js(.42,1),Z));let j=new Ht(new Ft({map:i,color:5898140,blending:rt,depthWrite:!1,transparent:!0,opacity:.8}));j.scale.setScalar(3.2),V.add(j);let oe=new le(new zn(.9,1.1,24),new Rt({color:5898140,transparent:!0,opacity:.5,blending:rt,depthWrite:!1,side:_t}));oe.rotation.x=-Math.PI/2,oe.position.y=-1.15,V.add(oe),V.position.set(A,1.2,q),e.add(V),o.orbs.push(V)}return o.update=(A,q,V)=>{c.target.position.set(q.x,0,q.z),c.position.copy(c.target.position).addScaledVector(tf,80),l.position.set(q.x,0,q.z),T.material.uniforms.time.value=A,d.material.opacity=.55+.25*Math.sin(A*1.3),d.rotation.z=A*.05;for(let j of o.spin)j.g.rotation.y=A*j.sp,j.g.position.y=j.y+Math.sin(A*1.2+j.ph)*.25;for(let j=0;j<o.orbs.length;j++){let oe=o.orbs[j];oe.visible=!!(V&1<<j),oe.position.y=1.2+Math.sin(A*2+j)*.18,oe.rotation.y=A*1.5}},o}function Eh(n,e,t,i,s){let r=t.map(u=>{let d=i[u.type],f=new Oe,x=new Le({color:d.color,emissive:d.color,emissiveIntensity:2.4,roughness:.3}),v=new le(u.type==="dmg"?new Za(.5,0):new Br(.45,0),x);v.castShadow=!0,f.add(v);let g=new Ht(new Ft({map:e,color:d.color,blending:rt,depthWrite:!1,transparent:!0,opacity:.85}));g.scale.setScalar(3),f.add(g);let p=new le(new zn(.8,1.15,6),new Rt({color:d.color,transparent:!0,opacity:.55,blending:rt,depthWrite:!1,side:_t}));return p.rotation.x=-Math.PI/2,p.position.y=-1.15,f.add(p),f.position.set(u.x,1.2,u.z),n.add(f),{g:f,gem:v,base:p}}),a=new Rt({color:16777215,transparent:!0,opacity:.5,blending:rt,depthWrite:!1,side:_t}),o=new le(new zn(s-.35,s,72),a);o.rotation.x=-Math.PI/2,o.position.y=.06,o.visible=!1,n.add(o);let l=new Rt({color:16777215,transparent:!0,opacity:.12,blending:rt,depthWrite:!1,side:_t}),c=new le(new Ye(s,s,6,48,1,!0),l);c.position.y=3,c.visible=!1,n.add(c);let h={0:16773840,mine:15910509,other:16731486,contest:12020735};return{update(u,d,f,x,v){r.forEach((p,_)=>{p.g.visible=!!(d&1<<_),p.gem.rotation.y=u*2+_,p.gem.rotation.x=u*1.3,p.g.position.y=1.2+Math.sin(u*2.4+_)*.2,p.base.rotation.z=u*.8});let g=f==="koth";if(o.visible=c.visible=g,g){let p=x===0?h[0]:x===-1?h.contest:x===v?h.mine:h.other;a.color.setHex(p),l.color.setHex(p),a.opacity=.45+.25*Math.sin(u*(x?6:2)),l.opacity=x?.16:.07}}}}var wh=new D(.55,.5,-.67).normalize();function jv(){let n=Oi(77);return zi(256,(e,t)=>{e.fillStyle="#3a2a22",e.fillRect(0,0,t,t);let i=8,s=t/i;for(let r=0;r<i;r++){let a=70+n()*35;e.fillStyle=`rgb(${a+20},${a},${a-18})`,e.fillRect(0,r*s+1,t,s-2);for(let l=0;l<14;l++){e.strokeStyle=`rgba(30,18,10,${.15+n()*.2})`,e.lineWidth=1;let c=r*s+2+n()*(s-4);e.beginPath(),e.moveTo(0,c),e.bezierCurveTo(t*.3,c+(n()-.5)*3,t*.6,c+(n()-.5)*3,t,c),e.stroke()}let o=n()*t;e.fillStyle="rgba(15,8,5,0.8)",e.fillRect(o,r*s,2,s),e.fillStyle="rgba(160,160,170,0.6)",e.fillRect(o-6,r*s+s/2-1,2,2),e.fillRect(o+6,r*s+s/2-1,2,2)}},1)}function Qv(){return zi(128,(n,e)=>{n.fillStyle="#7a5532",n.fillRect(0,0,e,e),n.fillStyle="#5c3d22";for(let t=0;t<4;t++)n.fillRect(0,t*32+30,e,3);n.lineWidth=10,n.strokeStyle="#4a2f18",n.strokeRect(5,5,e-10,e-10),n.beginPath(),n.moveTo(10,10),n.lineTo(e-10,e-10),n.stroke()},1)}function sf(n,e){let t=Oi(4321),i=new Oe;n.add(i);let s={root:i,glowTex:e,orbs:[],spin:[],grass:null,grassMax:0,sun:null,pointLights:[]};s.fog=new Xs(1450815,.0085);let r=new le(new gt(600,32,16),new mt({side:zt,depthWrite:!1,fog:!1,uniforms:{moon:{value:wh}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 moon;
        float hash(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float h=d.y;
          vec3 c=mix(vec3(0.12,0.2,0.33),vec3(0.03,0.05,0.12),smoothstep(-0.02,0.5,h));
          float m=max(dot(d,moon),0.0);
          c+=vec3(0.55,0.65,0.85)*pow(m,18.0)*0.5 + vec3(1.0,0.97,0.88)*smoothstep(0.9985,0.9992,m)*2.2;
          vec3 g=floor(d*260.0); float st=step(0.9965,hash(g));
          c+=vec3(0.85,0.9,1.0)*st*smoothstep(0.1,0.6,h)*(0.4+0.6*hash(g+2.0))*(1.0-smoothstep(0.98,0.995,m));
          gl_FragColor=vec4(c,1.0); }`}));r.renderOrder=-10,r.frustumCulled=!1,i.add(r),s.sky=r,i.add(new Qs(9414892,3811888,1.7)),i.add(new tr(6978218,.8));let a=new er(11453695,1.9);a.castShadow=!0,a.shadow.mapSize.set(1024,1024);let o=a.shadow.camera;o.left=-34,o.right=34,o.top=34,o.bottom=-34,o.near=1,o.far=160,a.shadow.bias=-6e-4,a.shadow.normalBias=.04,i.add(a,a.target),s.sun=a;let l=jv();l.repeat.set(24,24);let c=new le(new tn(_n*2+4,_n*2+4),Fi(new Le({map:l,roughness:.78,color:13154480}),3,1,"planks"));po(c.material,"bake/harbor.png",52,.42),c.rotation.x=-Math.PI/2,c.receiveShadow=!0,i.add(c);let h=new le(new tn(900,900,1,1),new mt({fog:!0,uniforms:Hn.merge([he.fog,{time:{value:0},moon:{value:wh}}]),vertexShader:`varying vec3 vW;
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
          float edge=max(abs(vW.x),abs(vW.z))-46.0;                       // buih di tepi dermaga
          float foam=smoothstep(2.6,0.0,edge)*step(0.0,edge)*(0.5+0.5*sin(edge*4.0-time*2.0+sin(vW.x*0.8+vW.z*0.7)*2.0));
          c+=vec3(0.55,0.65,0.75)*foam*0.35;
          gl_FragColor=vec4(c,1.0);
#include <fog_fragment>
        }`}));h.rotation.x=-Math.PI/2,h.position.y=-.6,i.add(h),s.water=h;let u=new Le({color:6120048,roughness:.95}),d=Fi(new Le({map:l,color:9071192,roughness:.9}),3,1,"planks"),f=new Le({color:3877412,roughness:.9}),x=Fi(new Le({map:Qv(),roughness:.85}),3,1,"crate"),v=new Le({color:2898514,roughness:.8,flatShading:!0}),g=new Le({color:9402954,roughness:.35,metalness:.9}),p=T=>(T.castShadow=!0,T.receiveShadow=!0,T),_=(T,Z,A,q,V)=>{let j=p(new le(T,Z));return j.position.set(A,q,V),i.add(j),j},S=_n+1;for(let[T,Z,A,q]of[[0,S,2*S+2,2],[0,-S,2*S+2,2],[S,0,2,2*S+2],[-S,0,2,2*S+2]])_(new tt(A,1.4,q),u,T,.2,Z);for(let T=-40;T<=40;T+=10)for(let[Z,A]of[[T,S],[T,-S],[S,T],[-S,T]])_(new Ye(.35,.45,1.2,8),f,Z,1.3,A);let y=(T,Z,A,q)=>{let V=new Oe;V.add(p(new le(new tt(.4,.55,.4),g)));let j=new le(new tt(.3,.4,.3),new Le({color:16757596,emissive:16751162,emissiveIntensity:3}));V.add(j);let oe=new Ht(new Ft({map:e,color:16752704,blending:rt,depthWrite:!1,transparent:!0,opacity:.85}));if(oe.scale.setScalar(4),V.add(oe),V.position.set(T,Z,A),i.add(V),q){let Ee=new Ii(16751173,28,24,1.6);Ee.position.set(T,Z,A),i.add(Ee),s.pointLights.push(Ee)}s.spin.push({flick:oe,ph:t()*10})};for(let T of Wt.harbor.obst)if(T.kind==="bell"){_(new Ye(T.r,T.r+.3,T.h,10),u,T.x,T.h/2,T.z);for(let[q,V]of[[1,1],[1,-1],[-1,1],[-1,-1]])_(new tt(.35,4.2,.35),f,T.x+q*1.5,T.h+2.1,T.z+V*1.5);let Z=_(new Qt(2.8,2,4),v,T.x,T.h+5.2,T.z);Z.rotation.y=Math.PI/4;let A=_(new Ye(.5,1,1.4,16,1,!0),g,T.x,T.h+3,T.z);A.material.side=_t,s.bell=A,y(T.x,T.h+1.6,T.z+1.9,!1),y(T.x,T.h+1.6,T.z-1.9,!1)}else if(T.kind==="shed"){_(new tt(T.w,T.h,T.d),d,T.x,T.h/2,T.z);let Z=T.w>T.d,A=new le(new Ye(.01,(Z?T.d:T.w)*.75,Z?T.w+.6:T.d+.6,3,1),v);A.rotation.set(Z?0:Math.PI/2,0,Z?Math.PI/2:0),Z?A.rotation.set(0,0,Math.PI/2):A.rotation.set(Math.PI/2,0,0),A.scale.set(1,1,.55),A.position.set(T.x,T.h+.9,T.z),p(A),i.add(A);for(let q=-1;q<=1;q+=2){let V=new le(new tn(1.6,2.6),new Le({color:1708040,emissive:3809032,emissiveIntensity:.8}));Z?(V.position.set(T.x+q*T.w/4,1.3,T.z+Math.sign(T.z||1)*-(T.d/2+.02)),V.rotation.y=T.z>0?Math.PI:0):(V.position.set(T.x+Math.sign(T.x||1)*-(T.w/2+.02),1.3,T.z+q*T.d/4),V.rotation.y=T.x>0?-Math.PI/2:Math.PI/2),i.add(V)}}else if(T.kind==="mast"){_(new Ye(T.r*.7,T.r,T.h,8),f,T.x,T.h/2,T.z);let Z=_(new tt(5,.25,.25),f,T.x,T.h*.78,T.z);Z.rotation.y=Math.atan2(T.x,T.z);let A=new le(new tn(4.2,5,4,4),new Le({color:13616820,roughness:1,side:_t}));A.position.set(T.x,T.h*.55,T.z),A.rotation.y=Math.atan2(T.x,T.z),p(A),i.add(A),s.spin.push({sail:A,ph:t()*6}),y(T.x+Math.sign(T.x)*-.6,3.2,T.z+Math.sign(T.z)*-.6,!0)}else if(T.kind==="crate"){let Z=Math.max(1,Math.round(T.w*T.d/6));if(_(new tt(T.w,T.h,T.d),x,T.x,T.h/2,T.z),Z>1){let A=_(new tt(1.6,1.6,1.6),x,T.x+(t()-.5)*(T.w-1.8),T.h+.8,T.z+(t()-.5)*(T.d-1.8));A.rotation.y=t()}}else if(T.kind==="boat"){let Z=_(new Ye(T.w/2,T.w/2,T.d,14,1,!1,0,Math.PI),f,T.x,T.h,T.z);Z.rotation.set(Math.PI/2,0,Math.PI),Z.scale.set(1,1,.75),_(new tt(T.w*.9,.12,T.d*.95),d,T.x,T.h-.05,T.z);let A=_(new tt(.12,.12,4),d,T.x+.6,T.h+.2,T.z);A.rotation.y=.4}else T.kind==="post"&&(_(new Ye(T.r,T.r*1.1,T.h,8),f,T.x,T.h/2,T.z),_(new Rn(T.r+.08,.1,6,14),new Le({color:11901546,roughness:1}),T.x,1.6,T.z).rotation.x=Math.PI/2);let U=new Le({color:857124,roughness:1});for(let[T,Z,A,q]of[[-120,90,.4,1.2],[140,70,-.8,1.6],[-90,-150,1.2,1.3]]){let V=new Oe,j=new le(new tt(6,3,26),U);j.position.y=1,V.add(j);for(let oe of[-6,4]){let Ee=new le(new Ye(.3,.4,18,6),U);Ee.position.set(0,11,oe),V.add(Ee)}V.position.set(T,-.5,Z),V.rotation.y=A,V.scale.setScalar(q),i.add(V)}let R=new Oe;R.add(new le(new Ye(3,5,34,12),new Le({color:14209736,roughness:.9}))),R.children[0].position.y=17;let I=new le(new gt(2.2,12,8),new Le({color:16773312,emissive:16770976,emissiveIntensity:4}));I.position.y=36,R.add(I);let C=new le(new Qt(9,140,24,1,!0),new Rt({color:16773572,transparent:!0,opacity:.08,blending:rt,depthWrite:!1,side:_t,fog:!1}));C.geometry.translate(0,-70,0),C.rotation.z=Math.PI/2;let E=new Oe;E.position.y=36,E.add(C),R.add(E),R.position.set(170,-1,-140),i.add(R),s.beam=E;let M=new Le({color:5898140,emissive:3014527,emissiveIntensity:3,roughness:.2});for(let[T,Z]of Wt.harbor.orbs){let A=new Oe;A.add(new le(new Js(.42,1),M));let q=new Ht(new Ft({map:e,color:5898140,blending:rt,depthWrite:!1,transparent:!0,opacity:.8}));q.scale.setScalar(3.2),A.add(q),A.position.set(T,1.2,Z),i.add(A),s.orbs.push(A)}let N=220,z=new Float32Array(N*3),H=new Float32Array(N);for(let T=0;T<N;T++)z[T*3]=(t()-.5)*100,z[T*3+1]=.4+t()*5,z[T*3+2]=(t()-.5)*100,H[T]=t()*100;let $=new yt;$.setAttribute("position",new Tt(z,3)),$.setAttribute("ph",new Tt(H,1));let Y=new Ci($,new mt({transparent:!0,depthWrite:!1,blending:rt,uniforms:{time:{value:0},scale:{value:400}},vertexShader:`attribute float ph; uniform float time; uniform float scale; varying float vA;
      void main(){ vec3 p=position; p.x+=sin(time*0.2+ph)*2.5; p.y+=sin(time*0.4+ph*1.7)*0.4; p.z+=cos(time*0.17+ph*1.3)*2.5;
        vA=0.25+0.25*sin(time*0.8+ph*3.0); vec4 mv=modelViewMatrix*vec4(p,1.0);
        gl_PointSize=scale*0.6/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying float vA; void main(){ float d=length(gl_PointCoord-0.5);
      gl_FragColor=vec4(vec3(0.7,0.8,1.0), smoothstep(0.5,0.0,d)*vA*0.6); }`}));return Y.frustumCulled=!1,i.add(Y),s.flies=Y,s.barrels=Wt.harbor.barrels.map(([T,Z])=>{let A=new Oe,q=p(new le(new Ye(.55,.5,1.3,12),new Le({color:10234658,roughness:.6})));q.position.y=.65,A.add(q);for(let j of[.3,1]){let oe=new le(new Rn(.55,.04,6,16),g);oe.rotation.x=Math.PI/2,oe.position.y=j,A.add(oe)}let V=new le(new gt(.16,8,6),new Le({color:16761402,emissive:16747034,emissiveIntensity:3}));return V.position.set(0,1.42,0),A.add(V),A.position.set(T,0,Z),i.add(A),A}),s.update=(T,Z,A,q=0)=>{s.barrels.forEach((V,j)=>{V.visible=!!(q&1<<j)}),a.target.position.set(Z.x,0,Z.z),a.position.copy(a.target.position).addScaledVector(wh,80),r.position.set(Z.x,0,Z.z),h.material.uniforms.time.value=T,Y.material.uniforms.time.value=T,s.beam.rotation.y=T*.6,s.bell&&(s.bell.rotation.z=Math.sin(T*.8)*.06);for(let V of s.spin)V.flick&&(V.flick.material.opacity=.7+.15*Math.sin(T*9+V.ph)+.1*Math.sin(T*23+V.ph)),V.sail&&(V.sail.rotation.x=Math.sin(T*.7+V.ph)*.08);for(let V=0;V<s.orbs.length;V++){let j=s.orbs[V];j.visible=!!(A&1<<V),j.position.y=1.2+Math.sin(T*2+V)*.18,j.rotation.y=T*1.5}},s}var Th=Bi(new Le({color:2764100,roughness:.85})),rf=Bi(new Le({color:14263420,roughness:.7}),9078472,.3),Hi=new Le({color:10133692,roughness:.35,metalness:.85}),mo=new Le({color:5978661,roughness:.9}),hr={leg:new ns(.15,.6,3,8),arm:new ns(.11,.5,3,8),torso:new Ye(.36,.27,.85,10),head:new gt(.24,14,10),robe:new Ye(.3,.62,.95,12,1,!0),boot:new tt(.2,.14,.36)};function ct(n,e,t=0,i=0,s=0){let r=new le(n,e);return r.position.set(t,i,s),r.castShadow=!0,r}var go=class{constructor(e,t,i,s,r=null,a="default"){let o=un[e],l=Ui.find(U=>U.id===a)||Ui[0],c=new Ae(l.glow??o.color);this.clsKey=e,this.isMe=i,this.name=t,this.tagColor=r!==null?"#"+r.toString(16).padStart(6,"0"):"#ffe9c4",this.phase=0,this.kick=0,this.deadT=0,this.spawnT=.4,this.lastX=0,this.lastZ=0,this.speed=0,this.shown={hp:-1,maxHp:-1,lvl:-1};let h=this.group=new Oe,u=this.body=new Oe;h.add(u);let d=Bi(new Le({color:l.accent!==void 0?new Ae(l.accent):c.clone().multiplyScalar(.38),roughness:.8,side:_t,metalness:l.id==="raja"||l.id==="bulan"?.5:0})),f=new Le({color:c,emissive:c,emissiveIntensity:3,roughness:.3});this.legL=new Oe,this.legL.position.set(.2,1,0),this.legR=new Oe,this.legR.position.set(-.2,1,0);for(let U of[this.legL,this.legR])U.add(ct(hr.leg,Th,0,-.5,0),ct(hr.boot,mo,0,-.93,.07)),u.add(U);let x=this.upper=new Oe;u.add(x),x.add(ct(hr.torso,Th,0,1.5,0),ct(hr.robe,d,0,1,0),ct(hr.head,rf,0,2.14,0));let v=ct(new Rn(.31,.05,6,16),Hi,0,1.2,0);v.rotation.x=Math.PI/2,x.add(v);let g=ct(new tn(.75,1.15,1,3),d,0,1.3,-.33);g.rotation.x=.16,x.add(g),this.cape=g,this.armL=new Oe,this.armL.position.set(.46,1.82,0),this.armR=new Oe,this.armR.position.set(-.46,1.82,0);for(let U of[this.armL,this.armR])U.add(ct(hr.arm,Th,0,-.32,0),ct(new gt(.1,8,6),rf,0,-.68,0)),x.add(U);let p=this.weapon=new Oe;p.position.set(-.46,1.62,.55),x.add(p);let _=.7,S=0;if(e==="ranger"){let U=ct(new gt(.3,14,10,0,Math.PI*2,0,Math.PI*.62),d,0,2.17,-.03);x.add(U),p.add(ct(new tt(.09,.1,.95),mo,0,0,.1));let R=ct(new Rn(.42,.035,6,14,Math.PI),Hi,0,0,.45);R.rotation.set(Math.PI/2,0,0),p.add(R);let I=ct(new Ye(.03,.03,.7,6),f,0,.07,.3);I.rotation.x=Math.PI/2,p.add(I)}else if(e==="mage"){x.add(ct(new Ye(.48,.48,.04,16),d,0,2.32,0));let U=ct(new Qt(.3,.8,12),d,0,2.72,-.04);U.rotation.x=-.18,x.add(U),p.add(ct(new Ye(.045,.055,2.1,8),mo,0,.15,0)),p.add(ct(new gt(.19,12,10),f,0,1.32,0));let R=ct(new Rn(.22,.03,6,12,Math.PI*1.4),Hi,0,1.3,0);R.rotation.z=-.7,p.add(R),_=0,S=1.32}else if(e==="priest"){let U=ct(new Rn(.27,.035,8,20),f,0,2.55,0);U.rotation.x=Math.PI/2,x.add(U),x.add(ct(new tt(.16,.9,.05),f,0,1.45,.3)),p.add(ct(new Ye(.04,.05,2,8),mo,0,.1,0));let R=ct(new Ye(.24,.24,.05,12),f,0,1.25,0);R.rotation.x=Math.PI/2,p.add(R);for(let I=0;I<8;I++){let C=ct(new Qt(.04,.16,4),f,Math.cos(I*.785)*.33,1.25+Math.sin(I*.785)*.33,0);C.rotation.z=I*.785-Math.PI/2,p.add(C)}_=0,S=1.25}else{x.add(ct(new gt(.29,14,10,0,Math.PI*2,0,Math.PI*.6),Hi,0,2.18,0));for(let C of[-1,1]){let E=ct(new Qt(.07,.34,6),Hi,C*.27,2.4,0);E.rotation.z=-C*.6,x.add(E),x.add(ct(new gt(.2,10,8),Hi,C*.48,1.86,0))}let U=ct(new Ye(.15,.19,.85,10),Hi,0,0,.15);U.rotation.x=Math.PI/2,p.add(U);let R=ct(new Rn(.2,.045,6,16),f,0,0,.5);p.add(R);let I=ct(new Ye(.5,.5,.07,6),Hi,.72,1.5,.28);I.rotation.set(Math.PI/2,0,.2),x.add(I),x.add(ct(new Ys(.2,6),f,.72,1.5,.33)),_=.62}this.tip=new Pt,this.tip.position.set(0,S,_),p.add(this.tip),this.tipGlow=new Ht(new Ft({map:s,color:c,blending:rt,depthWrite:!1,transparent:!0,opacity:.8})),this.tipGlow.scale.setScalar(.9),this.tip.add(this.tipGlow),this.armR.rotation.x=-1.3,this.bubble=new le(new gt(1.55,20,14),new Rt({color:c,transparent:!0,opacity:.22,blending:rt,depthWrite:!1})),this.bubble.position.y=1.3,this.bubble.visible=!1,h.add(this.bubble);let y=new le(new Ys(.75,16),new Rt({color:0,transparent:!0,opacity:.35,depthWrite:!1}));if(y.rotation.x=-Math.PI/2,y.position.y=.03,h.add(y),this.blob=y,r!==null&&(this.ring=new le(new zn(.8,1,32),new Rt({color:r,transparent:!0,opacity:.85,blending:rt,depthWrite:!1,side:_t})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.05,h.add(this.ring)),!i){let U=this.tagCanvas=document.createElement("canvas");U.width=256,U.height=64,this.tagTex=new li(U),this.tagTex.colorSpace=Ut,this.tag=new Ht(new Ft({map:this.tagTex,transparent:!0,depthWrite:!1,fog:!1})),this.tag.scale.set(3.4,.85,1),this.tag.position.y=3.25,this.tag.renderOrder=5,h.add(this.tag)}}setInfo(e,t,i,s=!1){let r=this.shown;if(!this.tag||r.hp===e&&r.maxHp===t&&r.lvl===i&&r.b===s)return;r.hp=e,r.maxHp=t,r.lvl=i,r.b=s;let a=this.tagCanvas.getContext("2d");a.clearRect(0,0,256,64),a.font="600 24px Georgia, serif",a.textAlign="center",a.textBaseline="middle",a.lineWidth=4,a.strokeStyle="rgba(0,0,0,0.85)";let o=`${s?"\u2605 ":""}${this.name}  Lv${i}`;a.strokeText(o,128,20),a.fillStyle=this.tagColor,a.fillText(o,128,20),a.fillStyle="rgba(0,0,0,0.7)",a.fillRect(38,40,180,14);let l=Math.max(0,e/t);a.fillStyle=l>.5?"#ff5d5d":l>.25?"#ff9a3d":"#ffd23d",a.fillRect(40,42,176*l,10),this.tagTex.needsUpdate=!0}fireKick(){this.kick=1}tipWorld(e){return this.tip.getWorldPosition(e)}update(e,t,i,s,r,a){let o=r&1,l=this.group,c=t-this.lastX,h=i-this.lastZ,u=e>0?Math.min(40,Math.hypot(c,h)/e):0;this.speed+=(u-this.speed)*Math.min(1,e*12),this.lastX=t,this.lastZ=i,l.position.set(t,0,i),l.rotation.y=s;let d=Math.min(1,this.speed/6);this.phase+=this.speed*e*1.35;let f=Math.sin(this.phase)*.75*d,x=u>.01?(c*Math.sin(s)+h*Math.cos(s))/(u*e||1):0,v=u>.01?(-c*Math.cos(s)+h*Math.sin(s))/(u*e||1):0;this.legL.rotation.x=f,this.legR.rotation.x=-f,this.legL.rotation.z=this.legR.rotation.z=v*.25*d*Math.sin(this.phase),this.armL.rotation.x=-f*.7,this.body.position.y=Math.abs(Math.sin(this.phase))*.07*d+Math.sin(a*2)*.012,this.upper.rotation.x=.13*d*x,this.upper.rotation.z=-.1*d*v,this.cape.rotation.x=.16+.5*d*Math.max(0,x)+Math.sin(a*3+this.phase)*.04,this.kick=Math.max(0,this.kick-e*7),this.weapon.position.z=.55-this.kick*.22,this.armR.rotation.x=-1.3-this.kick*.25,this.tipGlow.scale.setScalar(.7+this.kick*1.2+Math.sin(a*5)*.08),o?(this.deadT=Math.min(1,this.deadT+e*2.6),this.spawnT=0):(this.deadT>0&&(this.deadT=0,this.spawnT=0),this.spawnT=Math.min(.4,this.spawnT+e));let g=this.deadT*this.deadT*(3-2*this.deadT);this.body.rotation.x=-g*1.5,this.body.position.y+=g*.25;let p=o?1:.4+1.5*this.spawnT;l.scale.setScalar(Math.min(1,p)*(this.big||1)),this.tag&&(this.tag.visible=!o),this.blob.visible=!o,this.ring&&(this.ring.visible=!o);let _=r&2,S=r&4;if(this.bubble.visible=!!(_||S)&&!o,r&64&&!o){if(!this.crown){this.crown=new Oe;let y=new Le({color:16764746,emissive:16753178,emissiveIntensity:1.6,metalness:.8,roughness:.3});this.crown.add(new le(new Ye(.32,.36,.18,10,1,!0),y));for(let U=0;U<5;U++){let R=new le(new Qt(.07,.24,5),y),I=U/5*Math.PI*2;R.position.set(Math.cos(I)*.32,.18,Math.sin(I)*.32),this.crown.add(R)}this.crown.position.y=2.95,this.group.add(this.crown)}this.crown.visible=!0,this.crown.rotation.y=a*1.5,this.crown.position.y=2.95+Math.sin(a*3)*.06}else this.crown&&(this.crown.visible=!1);this.bubble.visible&&(this.bubble.material.opacity=_?.2+.08*Math.sin(a*9):.1+.08*Math.sin(a*18),this.bubble.rotation.y=a*1.5,this.bubble.scale.setScalar(_?1:.85))}dispose(e){e.remove(this.group),this.tagTex&&(this.tagTex.dispose(),this.tag.material.dispose())}},xo=class{constructor(e,t){this.kind=e,this.phase=0,this.kick=0,this.deadT=0,this.lastX=0,this.lastZ=0,this.speed=0;let i=this.group=new Oe,s=this.body=new Oe;i.add(s);let r=(h,u,d=0,f=0,x=0)=>{let v=new le(h,u);return v.position.set(d,f,x),v.castShadow=!0,s.add(v),v},a=h=>new Le({color:h,emissive:h,emissiveIntensity:4});if(e==="ghoul"){let h=Bi(new Le({color:4018752,roughness:.9})),u=r(new gt(.5,12,10),h,0,1.2,-.1);u.scale.set(1,1.2,.9),u.rotation.x=.6,r(new gt(.3,12,10),h,0,1.75,.35);for(let d of[-1,1])r(new gt(.06,8,6),a(9174890),d*.12,1.8,.62);this.armL=new Oe,this.armL.position.set(.45,1.45,.1),this.armR=new Oe,this.armR.position.set(-.45,1.45,.1);for(let d of[this.armL,this.armR]){let f=new le(new ns(.09,.95,3,8),h);f.position.y=-.55,f.castShadow=!0,d.add(f),d.rotation.x=-.5,s.add(d)}this.legL=new Oe,this.legL.position.set(.22,.75,0),this.legR=new Oe,this.legR.position.set(-.22,.75,0);for(let d of[this.legL,this.legR]){let f=new le(new ns(.12,.5,3,8),h);f.position.y=-.38,f.castShadow=!0,d.add(f),s.add(d)}this.tipY=1.4}else if(e==="caster"||e==="frost"){let h=e==="frost"?8378623:13134847,u=Bi(new Le({color:e==="frost"?1715268:2366003,roughness:.8,side:_t}));r(new Qt(.6,1.8,12,1,!0),u,0,1.15,0);let d=r(new gt(.34,12,10,0,Math.PI*2,0,Math.PI*.6),u,0,2.05,0);d.rotation.x=-.2;for(let x of[-1,1])r(new gt(.05,8,6),a(h),x*.1,1.98,.27);this.orb=r(new gt(.2,12,10),a(h),.45,1.5,.45);let f=new Ht(new Ft({map:t,color:h,blending:rt,depthWrite:!1,transparent:!0,opacity:.8}));f.scale.setScalar(1.6),this.orb.add(f),this.tipY=1.5}else if(e==="spiderling"||e==="queen"){let h=e==="queen",u=h?2.4:.75;this.baseScale=u;let d=Bi(new Le({color:h?3804956:2761264,roughness:.6}));r(new gt(.55,12,10),d,0,.7,-.45).scale.set(1,.85,1.25),r(new gt(.32,12,10),d,0,.6,.3),h&&r(new tt(.5,.06,.7),a(16723546),0,1.17,-.45);for(let x of[-1,1])r(new gt(.06,8,6),a(16726843),x*.12,.72,.56),r(new gt(.04,8,6),a(16726843),x*.22,.66,.5);this.spLegs=[];for(let x of[-1,1])for(let v=0;v<4;v++){let g=new Oe;g.position.set(x*.25,.6,.25-v*.22),g.rotation.y=x*(.5-v*.35);let p=new le(new Ye(.035,.02,.9,5),d);p.position.set(x*.4,-.12,0),p.rotation.z=x*1,p.castShadow=!0,g.add(p),s.add(g),this.spLegs.push(g)}s.scale.setScalar(u),this.tipY=.7*u}else{let h=Bi(new Le({color:7036242,roughness:1,flatShading:!0})),u=a(16747050);r(new Pi(1.1,0),h,0,2.3,0).scale.set(1.2,1,.9),r(new tt(.9,.12,.1),u,0,2.3,.85),r(new Pi(.5,0),h,0,3.45,.15);for(let f of[-1,1])r(new gt(.09,8,6),u,f*.2,3.5,.55);this.armL=new Oe,this.armL.position.set(1.35,2.8,0),this.armR=new Oe,this.armR.position.set(-1.35,2.8,0);for(let f of[this.armL,this.armR]){let x=new le(new Pi(.55,0),h);x.position.y=-1.2,x.castShadow=!0,f.add(x);let v=new le(new tt(.5,1.1,.5),h);v.position.y=-.5,v.castShadow=!0,f.add(v),s.add(f)}this.legL=new Oe,this.legL.position.set(.6,1.3,0),this.legR=new Oe,this.legR.position.set(-.6,1.3,0);for(let f of[this.legL,this.legR]){let x=new le(new tt(.65,1.3,.65),h);x.position.y=-.65,x.castShadow=!0,f.add(x),s.add(f)}this.tipY=2.4}this.tip=new Pt,this.tip.position.set(0,this.tipY,.6),s.add(this.tip);let o=e==="brute"||e==="queen",l=new le(new Ys(o?1.6:.75,16),new Rt({color:0,transparent:!0,opacity:.35,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.03,i.add(l),this.blob=l;let c=this.tagCanvas=document.createElement("canvas");c.width=128,c.height=16,this.tagTex=new li(c),this.tag=new Ht(new Ft({map:this.tagTex,transparent:!0,depthWrite:!1,fog:!1})),this.tag.scale.set(o?3.2:1.6,o?.4:.2,1),this.tag.position.y=e==="brute"?4.3:e==="queen"?3.4:e==="spiderling"?1.3:2.5,this.tag.renderOrder=5,i.add(this.tag),this.shown=-1}setInfo(e,t){let i=Math.max(0,e/t);if(Math.abs(i-this.shown)<.01)return;this.shown=i;let s=this.tagCanvas.getContext("2d");s.clearRect(0,0,128,16),s.fillStyle="rgba(0,0,0,.7)",s.fillRect(0,0,128,16),s.fillStyle=this.kind==="brute"||this.kind==="queen"?"#ff8a2a":"#ff5d5d",s.fillRect(2,2,124*i,12),this.tagTex.needsUpdate=!0}fireKick(){this.kick=1,this.windT=0}windup(e){this.windT=e,this.windMax=e}tipWorld(e){return this.tip.getWorldPosition(e)}update(e,t,i,s,r,a){let o=r&1,l=this.group;this.windT=Math.max(0,(this.windT||0)-e);let c=this.windT>0?1-this.windT/this.windMax:0,h=e>0?Math.min(30,Math.hypot(t-this.lastX,i-this.lastZ)/e):0;this.speed+=(h-this.speed)*Math.min(1,e*10),this.lastX=t,this.lastZ=i,l.position.set(t,0,i),l.rotation.y=s;let u=Math.min(1,this.speed/5);this.phase+=this.speed*e*(this.kind==="brute"?.7:1.4);let d=Math.sin(this.phase)*.7*u;this.legL&&(this.legL.rotation.x=d,this.legR.rotation.x=-d),this.kick=Math.max(0,this.kick-e*4),this.armL&&(this.armL.rotation.x=(this.kind==="ghoul"?-.5:0)-d*.6-this.kick*1.6-c*2.4,this.armR.rotation.x=(this.kind==="ghoul"?-.5:0)+d*.6-this.kick*1.6-c*2.4),this.body.scale.setScalar((this.baseScale||1)*(1+c*.15)),this.spLegs&&this.spLegs.forEach((f,x)=>{f.rotation.x=Math.sin(this.phase*2+x*1.7)*.35*u}),this.body.traverse(f=>{f.material&&f.material.emissive&&!f.userData.glow&&(f.userData.base??=f.material.emissive.getHex(),f.material.emissive.setHex(c>0&&Math.sin(a*40)>0?6689041:f.userData.base))}),this.orb?(this.body.position.y=.25+Math.sin(a*2.5)*.12,this.orb.position.y=1.5+Math.sin(a*4)*.08):this.body.position.y=Math.abs(Math.sin(this.phase))*.06*u,this.deadT=o?Math.min(1,this.deadT+e*2):0,this.body.rotation.x=-this.deadT*1.4,this.body.position.y-=this.deadT*.3,l.scale.setScalar(1-this.deadT*.4),this.tag.visible=!o,this.blob.visible=!o}dispose(e){e.remove(this.group),this.tagTex.dispose(),this.tag.material.dispose()}};var Gn=1800,Vi=1.55,vo=class{constructor(e,t){this.scene=e,this.glowTex=t,this.pos=new Float32Array(Gn*3),this.col=new Float32Array(Gn*4),this.size=new Float32Array(Gn),this.vel=new Float32Array(Gn*3),this.life=new Float32Array(Gn),this.max=new Float32Array(Gn),this.base=new Float32Array(Gn*4),this.grav=new Float32Array(Gn),this.cursor=0;let i=new yt;i.setAttribute("position",new Tt(this.pos,3).setUsage(io)),i.setAttribute("pcolor",new Tt(this.col,4).setUsage(io)),i.setAttribute("psize",new Tt(this.size,1).setUsage(io)),this.points=new Ci(i,new mt({transparent:!0,depthWrite:!1,blending:rt,uniforms:{scale:{value:400}},vertexShader:`attribute vec4 pcolor; attribute float psize; uniform float scale; varying vec4 vC;
        void main(){ vC=pcolor; vec4 mv=modelViewMatrix*vec4(position,1.0);
          gl_PointSize=min(180.0, psize*scale/-mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying vec4 vC; void main(){ float d=length(gl_PointCoord-0.5)*2.0;
        float a=smoothstep(1.0,0.0,d); gl_FragColor=vec4(vC.rgb*(1.0+a), a*a*vC.a); }`})),this.points.frustumCulled=!1,this.points.renderOrder=4,e.add(this.points),this.projs=new Map,this.spritePool=[],this.rings=[],this.lights=[];for(let s=0;s<3;s++){let r=new Ii(16777215,0,16,1.8);r.userData.t=0,e.add(r),this.lights.push(r)}this.lightsOn=!0,this.tmpC=new Ae}particle(e,t,i,s,r,a,o,l,c,h=0,u=1){let d=this.cursor;this.cursor=(d+1)%Gn;let f=this.tmpC.set(o);this.pos[d*3]=e,this.pos[d*3+1]=t,this.pos[d*3+2]=i,this.vel[d*3]=s,this.vel[d*3+1]=r,this.vel[d*3+2]=a,this.base[d*4]=f.r,this.base[d*4+1]=f.g,this.base[d*4+2]=f.b,this.base[d*4+3]=u,this.size[d]=l,this.life[d]=c,this.max[d]=c,this.grav[d]=h}burst(e,t,i,s,r,a,o,l,c=6){for(let h=0;h<r;h++){let u=Math.random()*6.283,d=(Math.random()-.3)*2,f=a*(.3+Math.random()*.7);this.particle(e,t,i,Math.cos(u)*f,d*f*.7,Math.sin(u)*f,s,o*(.5+Math.random()),l*(.5+Math.random()*.5),c)}}flash(e,t,i,s,r){if(!this.lightsOn)return;let a=this.lights[0];for(let o of this.lights)o.userData.t<a.userData.t&&(a=o);a.position.set(e,t,i),a.color.set(s),a.userData.t=1,a.userData.i=r,a.intensity=r}ring(e,t,i,s,r=.5){let a=new le(new zn(.82,1,48),new Rt({color:i,transparent:!0,blending:rt,depthWrite:!1,side:_t}));a.rotation.x=-Math.PI/2,a.position.set(e,.25,t),this.scene.add(a),this.rings.push({m:a,t:0,life:r,radius:s})}spawnProj(e,t,i,s,r){let a=hi[t],o=this.spritePool.pop()||new Ht(new Ft({map:this.glowTex,blending:rt,depthWrite:!1,transparent:!0}));o.material.color.set(a.color);let l=t==="mage"?3:t==="ranger"?1.5:1;o.scale.setScalar(l),o.position.set(i,Vi,s),o.visible=!0,this.scene.add(o),this.projs.set(e,{s:o,x:i,z:s,dx:Math.sin(r),dz:Math.cos(r),sp:a.projSpeed,life:a.projLife+.1,color:a.color,cls:t,sc:l})}removeProj(e){let t=this.projs.get(e);t&&(this.scene.remove(t.s),this.spritePool.push(t.s),this.projs.delete(e))}impact(e,t,i){let s=hi[i]||hi.ranger;s.splash>0?(this.burst(e,Vi,t,s.color,46,11,1.5,.7),this.burst(e,Vi,t,16770720,14,5,2.4,.35,0),this.ring(e,t,s.color,s.splash,.4),this.flash(e,Vi+.5,t,s.color,60)):(this.burst(e,Vi,t,s.color,9,6,.8,.35),this.flash(e,Vi,t,s.color,14))}muzzle(e,t,i){let s=hi[t],r=Math.sin(i),a=Math.cos(i);for(let o=0;o<6;o++){let l=4+Math.random()*7;this.particle(e.x,e.y,e.z,r*l+(Math.random()-.5)*3,(Math.random()-.5)*3,a*l+(Math.random()-.5)*3,s.color,.9,.18,0)}this.flash(e.x,e.y,e.z,s.color,10)}nova(e,t,i,s){this.ring(e,t,i,s,.55),this.ring(e,t,16777215,s*.7,.4);for(let r=0;r<70;r++){let a=r/70*6.283,o=s*2.2*(.7+Math.random()*.4);this.particle(e,.5+Math.random()*1.5,t,Math.cos(a)*o,2+Math.random()*4,Math.sin(a)*o,i,1.8,.55,5)}this.flash(e,2,t,i,120)}pillar(e,t,i){for(let s=0;s<44;s++){let r=Math.random()*6.283,a=.5+Math.random()*.6;this.particle(e+Math.cos(r)*a,Math.random()*.5,t+Math.sin(r)*a,0,4+Math.random()*6,0,i,1.1,.9,-1)}this.ring(e,t,i,2.6,.6)}update(e){let{pos:t,vel:i,life:s,max:r,col:a,base:o,grav:l}=this;for(let h=0;h<Gn;h++){if(s[h]<=0)continue;s[h]-=e;let u=h*3,d=h*4;if(s[h]<=0){a[d+3]=0;continue}i[u+1]-=l[h]*e,t[u]+=i[u]*e,t[u+1]+=i[u+1]*e,t[u+2]+=i[u+2]*e,t[u+1]<.05&&(t[u+1]=.05,i[u+1]*=-.3);let f=s[h]/r[h];a[d]=o[d],a[d+1]=o[d+1],a[d+2]=o[d+2],a[d+3]=o[d+3]*f}let c=this.points.geometry;c.attributes.position.needsUpdate=!0,c.attributes.pcolor.needsUpdate=!0,c.attributes.psize.needsUpdate=!0;for(let[h,u]of this.projs){let d=u.sp*e;if(u.x+=u.dx*d,u.z+=u.dz*d,u.life-=e,u.life<=0||ki(u.x,u.z,.1)){this.removeProj(h);continue}u.s.position.set(u.x,Vi,u.z),u.s.scale.setScalar(u.sc*(.9+Math.random()*.25));let f=u.cls==="mage"?3:1;for(let x=0;x<f;x++){let v=Math.random()*d;this.particle(u.x-u.dx*v+(Math.random()-.5)*.2,Vi+(Math.random()-.5)*.2,u.z-u.dz*v+(Math.random()-.5)*.2,(Math.random()-.5)*1.2,Math.random()*1.2,(Math.random()-.5)*1.2,u.color,u.sc*.55,u.cls==="mage"?.45:.22,-1,.8)}}for(let h=this.rings.length-1;h>=0;h--){let u=this.rings[h];u.t+=e;let d=u.t/u.life;if(d>=1){this.scene.remove(u.m),u.m.geometry.dispose(),u.m.material.dispose(),this.rings.splice(h,1);continue}let f=1-(1-d)*(1-d);u.m.scale.setScalar(.3+f*u.radius),u.m.material.opacity=(1-d)*.9}for(let h of this.lights)h.userData.t>0&&(h.userData.t=Math.max(0,h.userData.t-e*6),h.intensity=h.userData.i*h.userData.t)}};var ce={jx:0,jy:0,yaw:0,fire:!1,skillQueued:!1,ultQueued:!1,touch:!1,sens:1,enabled:!1,showScore:!1},nn=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;function af(n){ce.touch=nn;let e={},t=()=>{ce.jx=(e.KeyD||e.ArrowRight?1:0)-(e.KeyA||e.ArrowLeft?1:0),ce.jy=(e.KeyW||e.ArrowUp?1:0)-(e.KeyS||e.ArrowDown?1:0)};addEventListener("keydown",_=>{!ce.enabled||_.target.tagName==="INPUT"||(e[_.code]=!0,t(),(_.code==="Space"||_.code==="ShiftLeft"||_.code==="KeyE")&&(ce.skillQueued=!0,_.preventDefault()),(_.code==="KeyQ"||_.code==="KeyR")&&(ce.ultQueued=!0),_.code==="Tab"&&(ce.showScore=!0,_.preventDefault()))}),addEventListener("keyup",_=>{e[_.code]=!1,t(),_.code==="Tab"&&(ce.showScore=!1)}),addEventListener("blur",()=>{for(let _ in e)e[_]=!1;t(),ce.fire=!1});let i=null;n.touchLayer.addEventListener("mousedown",_=>{if(ce.enabled){if(document.pointerLockElement!==n.canvas)try{n.canvas.requestPointerLock?.()?.catch?.(()=>{})}catch{}i=_.clientX,_.button===0&&(ce.fire=!0),_.button===2&&(ce.skillQueued=!0)}}),addEventListener("mouseup",_=>{_.button===0&&i!==null&&(ce.fire=!1),_.button===0&&(i=null)}),addEventListener("mousemove",_=>{ce.enabled&&(document.pointerLockElement===n.canvas?ce.yaw-=_.movementX*.0026*ce.sens:_.buttons&&i!==null&&(ce.yaw-=(_.clientX-i)*.0045*ce.sens,i=_.clientX))}),n.touchLayer.addEventListener("contextmenu",_=>_.preventDefault());let s=n.stick,r=n.knob,a=null,o=0,l=0,c=null,h=0,u=null,d=0,f=56,x=(_,S)=>{let y=_-o,U=S-l,R=Math.hypot(y,U);if(R>f&&(y*=f/R,U*=f/R),r.style.transform=`translate(${y}px,${U}px)`,Math.min(1,R/f)<.12){ce.jx=0,ce.jy=0;return}ce.jx=y/f,ce.jy=-U/f},v=()=>.0062*ce.sens*(900/Math.max(500,innerWidth))**.5;n.touchLayer.addEventListener("touchstart",_=>{if(ce.enabled){_.preventDefault();for(let S of _.changedTouches)S.clientX<innerWidth*.45&&a===null?(a=S.identifier,o=S.clientX,l=S.clientY,s.style.left=o+"px",s.style.top=l+"px",s.classList.add("on"),x(o,l)):c===null&&(c=S.identifier,h=S.clientX)}},{passive:!1});let g=_=>{if(ce.enabled){_.preventDefault();for(let S of _.changedTouches)S.identifier===a?x(S.clientX,S.clientY):S.identifier===c?(ce.yaw-=(S.clientX-h)*v(),h=S.clientX):S.identifier===u&&(ce.yaw-=(S.clientX-d)*v(),d=S.clientX)}},p=_=>{for(let S of _.changedTouches)S.identifier===a?(a=null,ce.jx=0,ce.jy=0,s.classList.remove("on"),r.style.transform=""):S.identifier===c?c=null:S.identifier===u&&(u=null,ce.fire=!1,n.fireBtn.classList.remove("on"))};addEventListener("touchmove",g,{passive:!1}),addEventListener("touchend",p),addEventListener("touchcancel",p),n.fireBtn.addEventListener("touchstart",_=>{if(_.preventDefault(),_.stopPropagation(),!ce.enabled||u!==null)return;let S=_.changedTouches[0];u=S.identifier,d=S.clientX,ce.fire=!0,n.fireBtn.classList.add("on")},{passive:!1}),n.skillBtn.addEventListener("touchstart",_=>{_.preventDefault(),_.stopPropagation(),ce.enabled&&(ce.skillQueued=!0)},{passive:!1}),n.skillBtn.addEventListener("mousedown",_=>{_.stopPropagation(),ce.enabled&&(ce.skillQueued=!0)}),n.ultBtn.addEventListener("touchstart",_=>{_.preventDefault(),_.stopPropagation(),ce.enabled&&(ce.ultQueued=!0)},{passive:!1}),n.ultBtn.addEventListener("mousedown",_=>{_.stopPropagation(),ce.enabled&&(ce.ultQueued=!0)}),ce.reset=()=>{a=c=u=null,ce.jx=ce.jy=0,ce.fire=!1,ce.skillQueued=!1,ce.ultQueued=!1,s.classList.remove("on"),r.style.transform="",n.fireBtn.classList.remove("on")}}var Fe=null,Rh=null,yo=null,hf=null,Xr=null,Ph=null,uf={music:.6,sfx:.8},Ch=n=>(uf[n]/(n==="music"?.6:.8))**2,Ih=!1;function e_(n){let e=n.createDynamicsCompressor();e.threshold.value=-14,e.knee.value=10,e.ratio.value=6,e.attack.value=.003,e.release.value=.12,e.connect(n.destination);let t=n.createGain();t.gain.value=.5,t.connect(e);let i=n.createGain(),s=n.createGain();i.gain.value=Ch("sfx"),s.gain.value=Ch("music"),i.connect(t),s.connect(t);let r=n.createBuffer(1,Math.floor(n.sampleRate*.6),n.sampleRate),a=r.getChannelData(0);for(let u=0;u<a.length;u++)a[u]=Math.random()*2-1;let o=n.createGain(),l=n.createDelay(.5),c=n.createGain(),h=n.createBiquadFilter();return l.delayTime.value=.13,c.gain.value=.38,h.type="lowpass",h.frequency.value=2600,o.connect(l),l.connect(h),h.connect(c),c.connect(l),h.connect(i),{m:t,nb:r,ein:o,sb:i,mb:s}}function Lh(){if(Fe){Fe.state==="suspended"&&Fe.resume();return}let n=window.AudioContext||window.webkitAudioContext;n&&(Fe=new n,{m:Rh,nb:yo,ein:hf,sb:Xr,mb:Ph}=e_(Fe))}function df(n){Ih=n,Rh&&(Rh.gain.value=n?0:.5)}function Mo(n,e){uf[n]=Math.max(0,Math.min(1,Number(e)||0));let t=n==="music"?Ph:Xr;t&&t.gain.setTargetAtTime(Ch(n),Fe.currentTime,.05)}function ff(n){Fe&&(n?Fe.resume():Fe.suspend())}var pf=()=>!!Fe&&Fe.state==="running",In=n=>1+(Math.random()*2-1)*n;function t_(n,e,t=0,i=1){let s=Fe.createGain();if(s.gain.value=n*i,e){let r=Fe.createBiquadFilter();r.type="lowpass",r.frequency.value=500+5500*Math.min(1,n)**1.5,s.connect(r),r.connect(Xr)}else s.connect(Xr);if(t){let r=Fe.createGain();r.gain.value=t,s.connect(r),r.connect(hf)}return s}function st(n,e,t,i,s,r,a=0,o=.004){let l=Fe.currentTime+a,c=Fe.createOscillator(),h=Fe.createGain();c.type=e,c.frequency.setValueAtTime(t,l),c.frequency.exponentialRampToValueAtTime(Math.max(20,i),l+s),h.gain.setValueAtTime(1e-4,l),h.gain.linearRampToValueAtTime(r,l+o),h.gain.exponentialRampToValueAtTime(8e-4,l+s),c.connect(h),h.connect(n),c.start(l),c.stop(l+s+.02)}function Bt(n,e,t,i,s=i,r=1,a=0,o=.003,l="bandpass"){let c=Fe.currentTime+a,h=Fe.createBufferSource(),u=Fe.createBiquadFilter(),d=Fe.createGain();h.buffer=yo,u.type=l,u.Q.value=r,u.frequency.setValueAtTime(i,c),u.frequency.exponentialRampToValueAtTime(Math.max(30,s),c+e),d.gain.setValueAtTime(1e-4,c),d.gain.linearRampToValueAtTime(t,c+o),d.gain.exponentialRampToValueAtTime(8e-4,c+e),h.connect(u),u.connect(d),d.connect(n),h.start(c,Math.random()*.08),h.stop(c+e+.02)}function as(n,e,t,i,s=0){st(n,"sine",e,e,t,i,s,.002),st(n,"sine",e*2.76,e*2.76,t*.55,i*.4,s,.002),st(n,"sine",e*5.4,e*5.4,t*.25,i*.22,s,.001)}var of={ranger(n){let e=In(.06);Bt(n,.022,.2,5200,5200,.8,0,.001,"highpass"),st(n,"triangle",920*e,610*e,.075,.2,0,.002),st(n,"sine",2500*e,1700*e,.13,.07,.01),Bt(n,.15*In(.15),.1,2300,6200,1.6,.012,.02)},mage(n){let e=In(.08);st(n,"sine",120*e,44,.24,.3,0,.006),Bt(n,.36*In(.1),.24,260*e,1500,.7,0,.035),st(n,"sawtooth",190*e,72,.26,.07,0,.02);for(let t=0;t<3;t++)Bt(n,.025,.09,3400*In(.3),3400,2,.05+Math.random()*.22,.001,"highpass")},guardian(n){let e=In(.07);st(n,"sine",165*e,40,.17,.42,0,.002),Bt(n,.1,.3,620*e,240,.7,0,.001),Bt(n,.03,.14,2600,2600,1.2,0,.001),st(n,"triangle",196*e,185*e,.24,.07,.02,.02),st(n,"triangle",294*e,280*e,.2,.045,.02,.02)},priest(n){as(n,1046.5*[1,1.125,1.25,1.5][Math.floor(Math.random()*4)],.34,.15),Bt(n,.02,.05,4200,4200,1,0,.001,"highpass")},caster(n){Bt(n,.16,.16,900,2600,1.4,0,.02),st(n,"sawtooth",420*In(.08),180,.16,.1,0,.01)},frost(n){st(n,"sine",1900*In(.06),880,.18,.12),Bt(n,.14,.09,4600,7e3,2,0,.01,"highpass")},hit(n){let e=In(.04);Bt(n,.018,.12,3800,3800,1,0,.001,"highpass"),st(n,"triangle",1320*e,1320*e,.05,.17,0,.001),st(n,"sine",1980*e,1980*e,.09,.12,.022,.002)},hurt(n){st(n,"sine",170,58,.15,.34,0,.002),Bt(n,.08,.2,820*In(.15),300,.8,0,.001),st(n,"sawtooth",230,95,.13,.08)},kill(n){as(n,659.3,.22,.16),as(n,987.8,.3,.16,.08),as(n,1318.5,.42,.13,.16)},death(n){st(n,"sawtooth",300,46,.75,.22,0,.01),st(n,"sine",150,38,.8,.22),Bt(n,.6,.1,900,120,.6,0,.02)},boom(n){st(n,"sine",125,30,.5,.42,0,.003),Bt(n,.55,.38,1100,90,.5,0,.004,"lowpass"),Bt(n,.05,.2,2400,2400,.8,0,.001);for(let e=0;e<4;e++)Bt(n,.03,.07,2800*In(.3),2800,2,.1+Math.random()*.35,.001,"highpass")},dash(n){Bt(n,.2,.24,700,5200,1.1,0,.015),st(n,"sine",560,1900,.16,.1,0,.01),st(n,"triangle",1400,2800,.1,.05,.05)},nova(n){st(n,"sine",70,520,.14,.16,0,.02),Bt(n,.14,.1,300,2400,1.2,0,.03),st(n,"sine",140,34,.45,.4,.12,.003),Bt(n,.5,.34,1600,110,.5,.12,.004,"lowpass"),st(n,"sawtooth",320,80,.3,.07,.12)},shield(n){st(n,"sine",110,110,.5,.2,0,.03),st(n,"sine",330,660,.3,.17,0,.02),st(n,"triangle",495,990,.32,.09,.03,.02),as(n,1320,.4,.07,.2),Bt(n,.25,.06,3e3,6e3,2,0,.05)},heal(n){st(n,"sine",261.6,261.6,.7,.12,0,.08),st(n,"sine",392,392,.7,.08,0,.1),[523.3,659.3,784,1046.5].forEach((e,t)=>as(n,e,.5,.11,t*.075))},orb(n){st(n,"sine",700,1400,.2,.16),st(n,"sine",1050,2100,.2,.07,.03)},level(n){[523.3,659.3,784,1046.5].forEach((e,t)=>{st(n,"triangle",e,e,.22,.14,t*.08),as(n,e*2,.3,.05,t*.08)})}},n_={ranger:2.6,mage:1.5,guardian:1.8,priest:1.4,caster:2.2,frost:1.6,hit:2.6,hurt:2.2,dash:2.6,orb:1.6,nova:.75,heal:.8},i_={priest:.5,kill:.5,heal:.6,shield:.45,level:.35,nova:.2,frost:.3};function nt(n,e=1,t=!1){!Fe||Ih||e<=.02||!of[n]||of[n](t_(e,t,i_[n]||0,n_[n]||1))}var _o=[[146.8,174.6,220],[116.5,146.8,174.6],[130.8,164.8,196],[110,130.8,164.8]],lf=[293.7,349.2,392,440,523.3,587.3],os=60/104;function ls(n,e,t,i,s,r,a,o,l=0){let c=Fe.createOscillator(),h=Fe.createGain();c.type=e,c.frequency.value=t,c.detune.value=l,h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(o,i+s),h.gain.setValueAtTime(o,i+s+r),h.gain.linearRampToValueAtTime(0,i+s+r+a),c.connect(h),h.connect(n),c.start(i),c.stop(i+s+r+a+.05)}function s_(n,e,t){let i=Fe.createBufferSource(),s=Fe.createBiquadFilter(),r=Fe.createGain();i.buffer=yo,s.type="highpass",s.frequency.value=6500,r.gain.setValueAtTime(t,e),r.gain.exponentialRampToValueAtTime(8e-4,e+.05),i.connect(s),s.connect(r),r.connect(n),i.start(e,Math.random()*.3),i.stop(e+.07)}function Ah(n,e,t){let i=Fe.createOscillator(),s=Fe.createGain();i.frequency.setValueAtTime(105,e),i.frequency.exponentialRampToValueAtTime(42,e+.16),s.gain.setValueAtTime(t,e),s.gain.exponentialRampToValueAtTime(8e-4,e+.24),i.connect(s),s.connect(n),i.start(e),i.stop(e+.26)}var cf={menu:{len:6,level:.6,bar(n,e,t){let i=_o[t%_o.length];for(let s of i)for(let r of[-4,4])ls(n.soft,"sawtooth",s,e,2,0,5.5,.05,r);ls(n.soft,"sine",i[0]/2,e,1.5,1,3.5,.09);for(let s=0;s<3;s++){let r=e+1+Math.random()*4.5,a=lf[Math.floor(Math.random()*lf.length)];ls(n.dry,"sine",a,r,.02,0,2.4,.06),ls(n.dry,"sine",a*2,r,.02,0,1.2,.015)}}},battle:{len:os*4,level:.45,bar(n,e,t){let i=_o[Math.floor(t/2)%_o.length],s=t%8>=4;for(let a of i)ls(n.soft,"sawtooth",a,e,.3,os*2.6,os,.028,5);for(let a=0;a<8;a++){let o=e+a*os/2;ls(n.dry,"triangle",i[0]/2,o,.008,.05,.16,a%2?.07:.11),a%2&&s_(n.dry,o,s?.028:.016)}Ah(n.dry,e,.2),Ah(n.dry,e+os*2,.17),s&&Ah(n.dry,e+os*3.5,.11);let r=[i[0],i[1],i[2],i[1]*2,i[2],i[1],i[0]*2,i[2]];for(let a=0;a<8;a++)ls(n.soft,"triangle",r[(a+(s?3:0))%8]*2,e+a*os/2,.006,.03,.2,s?.045:.03)}}};function r_(){let n=Fe.createGain();n.connect(Ph);let e=Fe.createBiquadFilter();return e.type="lowpass",e.frequency.value=1400,e.connect(n),{g:n,soft:e,dry:n}}var ur=null;function bo(n){if((!Fe||!cf[n])&&(n=null),ur&&ur.track===n)return;if(ur){let r=ur;clearInterval(r.timer);let a=r.out.g.gain,o=Fe.currentTime;a.cancelScheduledValues(o),a.setValueAtTime(a.value,o),a.linearRampToValueAtTime(0,o+.9),setTimeout(()=>r.out.g.disconnect(),8e3),ur=null}if(!n)return;let e=cf[n],t=r_();t.g.gain.setValueAtTime(0,Fe.currentTime),t.g.gain.linearRampToValueAtTime(e.level,Fe.currentTime+1.5);let i=ur={track:n,out:t,next:Fe.currentTime+.1,i:0,timer:0},s=()=>{for(;i.next<Fe.currentTime+.6;)i.next<Fe.currentTime&&(i.next=Fe.currentTime+.05),e.bar(t,i.next,i.i++),i.next+=e.len};s(),i.timer=setInterval(s,200)}function mf(n=1){if(!Fe||Ih)return;let e=Fe.currentTime,t=Fe.createBufferSource(),i=Fe.createBiquadFilter(),s=Fe.createGain();t.buffer=yo,i.type="bandpass",i.frequency.value=700+Math.random()*500,i.Q.value=1.4,s.gain.setValueAtTime(.07*n,e),s.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(i),i.connect(s),s.connect(Xr),t.start(e,Math.random()*.3),t.stop(e+.08)}var L=n=>document.getElementById(n);addEventListener("error",n=>{let e=document.getElementById("menuMsg");e&&(e.textContent=`Galat: ${n.message}`)});var Ue={get:(n,e)=>{try{return localStorage.getItem("arkana."+n)??e}catch{return e}},set:(n,e)=>{try{localStorage.setItem("arkana."+n,e)}catch{}}};nn&&document.body.classList.add("touch");var Tf=L("c"),Mn=new Va({canvas:Tf,antialias:!nn,powerPreference:"high-performance"});Mn.outputColorSpace=Ut;Mn.toneMapping=zr;Mn.toneMappingExposure=1.15;Mn.shadowMap.enabled=!0;Mn.shadowMap.type=Gc;var pn=new qs,rn=new Yt(62,1,.3,900),Gi={ruins:nf(pn)},ut=Gi.ruins;pn.fog=ut.fog;var De=new vo(pn,ut.glowTex),kh={ruins:Eh(ut.root,ut.glowTex,Wt.ruins.runes,Di,Vr)},Fh=kh.ruins,qn=Wt.ruins,Wn=new Oe;{let n=new Le({color:16764746,emissive:16753178,emissiveIntensity:2.2,metalness:.85,roughness:.25});Wn.add(new le(new Ye(.45,.2,.55,16,1,!0),n));let e=new le(new Ye(.07,.07,.5,8),n);e.position.y=-.5,Wn.add(e);let t=new le(new Ye(.3,.32,.08,16),n);t.position.y=-.75,Wn.add(t);let i=new Ht(new Ft({map:ut.glowTex,color:16766315,blending:rt,depthWrite:!1,transparent:!0}));i.scale.setScalar(4.5),Wn.add(i);let s=new le(new Ye(.6,.6,30,16,1,!0),new Rt({color:16766315,transparent:!0,opacity:.12,blending:rt,depthWrite:!1,side:_t}));s.position.y=15,Wn.add(s),Wn.visible=!1,pn.add(Wn)}var fi=new oo(Mn);fi.addPass(new lo(pn,rn));var a_=new ar(new se(256,256),.42,.5,.9);fi.addPass(a_);fi.addPass(ef());fi.addPass(new co);var cs=Ue.get("quality",nn?"medium":"high"),Af=!Ue.get("qualityManual","");function Co(n){cs=n;let e=Math.min(devicePixelRatio||1,n==="low"?1:n==="medium"?1.5:2);Mn.setPixelRatio(e),fi.setPixelRatio(e),ut.sun.castShadow=n!=="low",Zd(n!=="low"),jd(n==="low"),n!=="low"&&Yd(),n!=="low"&&(ut.env??=Qd(Mn,ut.sky)),pn.environment=n==="low"?null:ut.env,pn.environmentIntensity=.55;let t=n==="high"?4:0;for(let s of[fi.renderTarget1,fi.renderTarget2])s.samples!==t&&(s.samples=t,s.dispose());let i=n==="high"?2048:1024;ut.sun.shadow.mapSize.x!==i&&(ut.sun.shadow.mapSize.set(i,i),ut.sun.shadow.map?.dispose(),ut.sun.shadow.map=null),ut.grass&&(ut.grass.count=n==="low"?700:n==="medium"?2200:ut.grassMax);for(let s of ut.pointLights)s.visible=n!=="low";De.lightsOn=n!=="low",L("quality").value=n,Bh()}function Rf(n){Wt[n]||(n="ruins"),Gi[n]||(Gi[n]=sf(pn,Gi.ruins.glowTex),kh[n]=Eh(Gi[n].root,Gi.ruins.glowTex,Wt[n].runes,Di,Vr));for(let[e,t]of Object.entries(Gi))t.root.visible=e===n;ut=Gi[n],Fh=kh[n],qn=Wt[n],m.mapId=n,pn.fog=ut.fog,Hd(n),zf(),Co(cs)}function Bh(){let n=innerWidth,e=innerHeight;Mn.setSize(n,e,!1),fi.setSize(n,e),rn.aspect=n/e,rn.fov=n>=e?62:82,rn.updateProjectionMatrix();let t=e*Mn.getPixelRatio()*.5;De.points.material.uniforms.scale.value=t,ut.flies.material.uniforms.scale.value=t}addEventListener("resize",Bh);addEventListener("orientationchange",()=>setTimeout(Bh,200));function o_(){let n=Ue.get("pid","");if(!/^[a-z0-9]{16,40}$/.test(n)){let e=new Uint8Array(12);crypto.getRandomValues(e),n=[...e].map(t=>t.toString(36).padStart(2,"0")).join("").slice(0,24),Ue.set("pid",n)}return n}var m={phase:"menu",ws:null,myId:0,clsKey:Ue.get("cls","ranger"),cls:null,players:new Map,roster:new Map,pred:{x:0,z:0,yaw:0,dashT:0,dx:0,dz:0,skillCd:0},rx:0,rz:0,pending:[],seq:0,acc:0,localFireCd:0,me:{hp:100,maxHp:100,lvl:1,flags:0,xp:0,respawnT:0},ended:!1,tm:0,orbMask:255,ping:0,camDist:7.2,lockId:0,autoFire:Ue.get("autoFire",nn?"1":"")==="1",aimAssist:Ue.get("aimAssist",nn?"1":"")==="1",lastShotTick:new Map,shake:0,time:0,vibrate:Ue.get("vibrate","1")==="1",code:null,practice:!1,joinErr:"",buzzT:0,createDiff:Ue.get("diff","normal"),pid:o_(),skin:Ue.get("skin","default"),mapId:"ruins",createMap:Ue.get("map","rotate"),tut:null,stepT:0,team:-1,teamScore:[0,0],gm:"dm",runeMask:15,holder:0,ticks:[],createGm:Ue.get("gm","pve")};window.__arkana=m;var Cf=L("classes");for(let n of hh){let e=un[n],t="#"+e.color.toString(16).padStart(6,"0"),i=document.createElement("div");i.className="cls",i.dataset.k=n,i.style.setProperty("--c",t),i.innerHTML=`<div class="dot"></div><b>${e.name}</b><small>${e.desc}</small><small class="sk">${e.skillName}: ${e.skillDesc}</small>`,i.addEventListener("click",()=>Pf(n)),Cf.appendChild(i)}function Pf(n){m.clsKey=n,Ue.set("cls",n);for(let e of Cf.children)e.classList.toggle("sel",e.dataset.k===n)}Pf(hh.includes(m.clsKey)?m.clsKey:"ranger");L("name").value=Ue.get("name","");L("hint").textContent=nn?"Jempol kiri: gerak \xB7 geser sisi kanan: bidik \xB7 tombol merah: tembak. Lebih nyaman dalam posisi mendatar.":"WASD gerak \xB7 mouse bidik \xB7 klik tembak \xB7 Spasi skill \xB7 Tab papan skor";function l_(){try{localStorage.removeItem("arkana.server")}catch{}return(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws"}var gf=navigator.userAgent,Xn={standalone:matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||navigator.standalone===!0,inApk:/; wv\)/.test(gf),ios:/iPhone|iPad|iPod/.test(gf)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,prompt:null};function us(){let n=Xn.standalone||Xn.inApk||m.phase==="play"||Ue.get("installNo","")==="1"||!(Xn.ios||Xn.prompt);L("installHint").classList.toggle("hidden",n),!n&&(L("installGo").classList.toggle("hidden",!Xn.prompt),L("installText").innerHTML=Xn.prompt?"Pasang <b>Arkana</b> ke layar utama supaya terbuka layar penuh seperti aplikasi.":"Pasang <b>Arkana</b> ke layar utama: ketuk tombol <b>Bagikan</b> di Safari, lalu pilih <b>Tambah ke Layar Utama</b>.")}addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Xn.prompt=n,us()});addEventListener("appinstalled",()=>{Xn.standalone=!0,us()});L("installGo").addEventListener("click",async()=>{let n=Xn.prompt;if(n){Xn.prompt=null;try{await n.prompt()}catch{}us()}});L("installX").addEventListener("click",()=>{Ue.set("installNo","1"),us()});var It={token:Ue.get("token",""),on:!1,reg:!1};function If(n,e){It.token=n,Ue.set("token",n),m.pid=e.pid,Ue.set("pid",e.pid),L("name").value=e.name,L("name").classList.add("hidden"),Ue.set("name",e.name),L("whoName").textContent=e.name,L("who").classList.remove("hidden"),L("auth").classList.add("hidden"),L("authPass").value="",L("authPass2").value="",Po()}function Oh(n=""){It.token="",Ue.set("token",""),L("who").classList.add("hidden"),L("authMsg").textContent=n,It.on&&(L("auth").classList.remove("hidden"),L("authName").value||=Ue.get("name",""))}function hs(n){It.view=n,It.reg=n==="reg";let e=n==="reg",t=n==="login",i=n==="forgot",s=n==="reset",r=(a,o)=>L(a).classList.toggle("hidden",!o);L("tabLogin").classList.toggle("on",t),L("tabReg").classList.toggle("on",e),L("tabLogin").setAttribute("aria-selected",String(t)),L("tabReg").setAttribute("aria-selected",String(e)),r("authTabs",t||e),r("authPassRow",!i),r("authPass2Row",e||s),r("authHint",e),r("authInviteRow",e&&It.invite),r("authMailRow",e&&It.mail),r("authNoMail",!It.mail),r("authCodeRow",s),r("authForgot",t&&It.mail),r("authBack",i||s),L("authName").readOnly=s,L("authPassLabel").textContent=s?"Kata sandi baru":"Kata sandi",L("authPass").autocomplete=t?"current-password":"new-password",L("authGo").textContent=e?"Daftar":i?"Kirim kode ke email":s?"Ganti kata sandi":"Masuk",L("authMsg").textContent=""}L("tabLogin").addEventListener("click",()=>hs("login"));L("tabReg").addEventListener("click",()=>hs("reg"));L("authForgot").addEventListener("click",()=>hs("forgot"));L("authBack").addEventListener("click",()=>hs("login"));L("authForm").addEventListener("submit",async n=>{n.preventDefault();let e=It.view,t=L("authName").value.trim(),i=L("authPass").value,s=L("authMail").value.trim(),r=L("authCode").value.trim(),a=o=>{L("authMsg").textContent=o};if(!/^[A-Za-z0-9_]{3,14}$/.test(t))return a("Nama pengguna 3-14 karakter: huruf, angka, atau garis bawah.");if(e!=="forgot"&&i.length<8)return a("Kata sandi minimal 8 karakter.");if((e==="reg"||e==="reset")&&i!==L("authPass2").value)return a("Kedua kata sandi tidak sama.");if(e==="reg"&&It.mail&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))return a("Isi alamat email yang benar.");if(e==="reset"&&!/^\d{6}$/.test(r))return a("Kode terdiri dari 6 angka.");L("authGo").disabled=!0,a(e==="reg"?"Mendaftarkan\u2026":e==="forgot"?"Mengirim\u2026":"Memeriksa\u2026");try{let o={login:"/api/login",reg:"/api/register",forgot:"/api/forgot",reset:"/api/reset"}[e],c=await(await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,pass:e==="forgot"?void 0:i,pid:m.pid,invite:L("authInvite").value.trim()||void 0,email:e==="reg"&&s?s:void 0,code:e==="reset"?r:void 0})})).json();c.token?(hs("login"),If(c.token,c.user)):e==="forgot"&&c.ok?(hs("reset"),a("Bila akun itu punya email, kode sudah dikirim. Periksa kotak masuk dan folder spam.")):a(c.error||"Gagal. Coba lagi.")}catch{a("Server tidak terjangkau. Periksa koneksi lalu coba lagi.")}L("authGo").disabled=!1});L("logout").addEventListener("click",()=>{fetch("/api/logout",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+It.token},body:"{}"}).catch(()=>{}),Oh()});(async()=>{try{let n=await fetch("/api/me",{headers:It.token?{authorization:"Bearer "+It.token}:{}}).then(e=>e.json());if(It.on=!!n.auth,It.invite=!!n.invite,It.mail=!!n.mail,!It.on)return;hs("login"),n.user?If(It.token,n.user):Oh(),Po()}catch{}})();us();var zh=["play","create","joinBtn","practice","rejoin","evJoin"],Hh=n=>String(n||"").toUpperCase().replace(/[^A-Z]/g,"").slice(0,4);{let n=Hh(new URLSearchParams(location.search).get("room"));n&&(L("code").value=n,L("joinBtn").textContent="Gabung "+n)}L("code").addEventListener("input",n=>{n.target.value=Hh(n.target.value),L("joinBtn").textContent="Gabung"});L("code").addEventListener("keydown",n=>{n.key==="Enter"&&L("joinBtn").click()});function yn(n,e){Lh();let t=L("name").value.trim()||"Pengembara";Ue.set("name",t);for(let i of zh)L(i).disabled=!0;L("menuMsg").textContent=n==="practice"?"Menyiapkan arena latihan\u2026":"Menghubungkan ke arena\u2026",nn&&!document.fullscreenElement&&document.documentElement.requestFullscreen?.().then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{}),d_(t,n,e)}L("play").addEventListener("click",()=>{Ue.get("tutorDone","")?yn("quick"):(m.tut=Bf(),yn("practice"))});for(let n of document.querySelectorAll(".mode[data-gm]")){let e=()=>{m.createGm=n.dataset.gm,Ue.set("gm",m.createGm),fr&&Ff();for(let t of document.querySelectorAll(".mode[data-gm]"))t.classList.toggle("on",t===n),t.setAttribute("aria-checked",t===n)};n.addEventListener("click",e),n.dataset.gm===m.createGm&&(e(),n.closest("#otherModes")&&Lf(!0))}function Lf(n){L("otherModes").classList.toggle("hidden",!n),L("moreModes").setAttribute("aria-expanded",String(n)),L("moreModes").textContent=n?"Sembunyikan mode lain":"Mode lain"}L("moreModes").addEventListener("click",()=>Lf(L("otherModes").classList.contains("hidden")));for(let n of document.querySelectorAll(".diffb")){let e=()=>{m.createDiff=n.dataset.diff,Ue.set("diff",m.createDiff);for(let t of document.querySelectorAll(".diffb"))t.classList.toggle("on",t===n),t.setAttribute("aria-checked",t===n)};n.addEventListener("click",e),n.dataset.diff===m.createDiff&&e()}for(let n of document.querySelectorAll(".mapb")){let e=()=>{m.createMap=n.dataset.map,Ue.set("map",m.createMap);for(let t of document.querySelectorAll(".mapb"))t.classList.toggle("on",t===n),t.setAttribute("aria-checked",t===n)};n.addEventListener("click",e),n.dataset.map===m.createMap&&e()}L("create").addEventListener("click",()=>yn("create"));var xf=[],Dh=[],ui=new D;function c_(){let n=innerWidth,e=innerHeight,t=[],i=m.windIds||new Map;for(let s of m.players.values()){if(s.id===m.myId||s.flags&1||Yr(s.id))continue;let r=Math.hypot(s.x-m.rx,s.z-m.rz);if(r>24||(ui.set(s.x,1.5,s.z).applyMatrix4(rn.matrixWorldInverse),ui.z<0&&(ui.set(s.x,1.5,s.z).project(rn),Math.abs(ui.x)<.92&&Math.abs(ui.y)<.88)))continue;let a=-cr(Math.atan2(s.x-m.rx,s.z-m.rz),ce.yaw);t.push({a,d:r,boss:!!Vn[m.roster.get(s.id)?.cls]?.boss,wind:(i.get(s.id)||0)>m.time})}t.sort((s,r)=>s.d-r.d);for(let s=0;s<6;s++){let r=xf[s];r||(r=document.createElement("i"),r.className="threat",L("threats").appendChild(r),xf.push(r));let a=t[s];if(!a){r.style.opacity=0;continue}let o=Math.min(n,e)*.34,l=o*1.25,c=o,h=n/2+Math.sin(a.a)*l,u=e/2-Math.cos(a.a)*c;r.className="threat"+(a.boss?" boss":"")+(a.wind?" wind":""),r.style.opacity=String(Math.max(.7,1-a.d/40)),r.style.transform=`translate(${h-16}px,${u-15}px) rotate(${a.a}rad) scale(${a.d<8?1.25:1})`}}function h_(){let n=m.gm==="pve"?(m.rv||[]).filter(e=>e[0]!==m.myId):[];for(let e=0;e<Math.max(n.length,Dh.length);e++){let t=Dh[e];t||(t=document.createElement("div"),t.className="down",L("downTags").appendChild(t),Dh.push(t));let i=n[e],s=i&&m.players.get(i[0]);if(!s){t.style.display="none";continue}if(ui.set(s.x,2.2,s.z).project(rn),ui.z>1){t.style.display="none";continue}t.style.display="",t.textContent=i[1]>0?`Menolong ${i[1]}%`:`Tolong ${Zt(i[0])}!`,t.style.transform=`translate(${(ui.x*.5+.5)*innerWidth}px,${(-ui.y*.5+.5)*innerHeight}px) translate(-50%,-100%)`}}function Df(n){if(!(!n||!n.length)){L("perkCards").innerHTML=n.map(e=>`<button class="perk" data-k="${e}"><b>${Ni[e].name}</b><small>${Ni[e].desc}</small><em>Ketuk untuk memilih</em></button>`).join("");for(let e of L("perkCards").querySelectorAll(".perk"))e.addEventListener("click",()=>{m.ws?.send(JSON.stringify({t:"perk",id:e.dataset.k})),L("perks").classList.add("hidden")});L("perks").classList.remove("hidden")}}for(let n of["touchstart","touchmove"])L("perks").addEventListener(n,e=>e.stopPropagation());L("pingMenu").innerHTML=vh.map((n,e)=>`<button data-k="${e}">${n}</button>`).join("");L("pingBtn").addEventListener("click",()=>L("pingMenu").classList.toggle("hidden"));for(let n of L("pingMenu").children)n.addEventListener("click",()=>{m.ws?.send(JSON.stringify({t:"ping",k:+n.dataset.k})),L("pingMenu").classList.add("hidden")});for(let n of[L("pingBtn"),L("pingMenu")])for(let e of["touchstart","touchmove","mousedown"])n.addEventListener(e,t=>t.stopPropagation());function Uf(){let n=Ue.get("lastRoom",""),e=L("rejoin");e.classList.toggle("hidden",!n),n&&(e.textContent=`Kembali ke room ${n}`)}L("rejoin").addEventListener("click",()=>{let n=Ue.get("lastRoom","");n&&yn("join",n)});Uf();var vf=n=>n>=3600?`${Math.floor(n/3600)} j ${Math.floor(n%3600/60)} mnt`:n>=60?`${Math.floor(n/60)} mnt`:`${Math.max(0,n)} dtk`,qr=null,Vh=0;function Nf(){let n=L("eventBanner"),e=qr,t=Math.floor((Date.now()-Vh)/1e3),i=e?.active&&e.active.left-t>0?e.active:null,s=e?.next,r=e?.last;n.classList.toggle("hidden",!i&&!s&&!r?.top?.length),L("evJoin").classList.toggle("hidden",!i),i?(L("evName").textContent=`Event: ${i.name} \xB7 sisa ${vf(i.left-t)}`,L("evInfo").textContent=`${i.desc}. Target: ${i.target} Hadiah: ${i.skin}.${i.top.length?` Terdepan: ${i.top[0].name} (${i.top[0].score} ${i.unit}).`:""}`):s?(L("evName").textContent=`Event berikutnya: ${s.name}`,L("evInfo").textContent=s.in-t>0?`Mulai dalam ${vf(s.in-t)}. ${s.desc}.`:"Segera dimulai\u2026"):r?.top?.length&&(L("evName").textContent=`Event ${r.name} selesai`,L("evInfo").textContent=`Juara: ${r.top.map((a,o)=>`${o+1}. ${a.name} (${a.score} ${r.unit})`).join(" \xB7 ")}`)}async function kf(){if(m.phase==="menu"){try{qr=await fetch("/api/event").then(n=>n.json()),Vh=Date.now()}catch{}Nf()}}kf();setInterval(kf,2e4);setInterval(()=>{m.phase==="menu"&&Nf()},1e3);L("evJoin").addEventListener("click",()=>yn("event"));var _f={dm:"Deathmatch",koth:"Rebut Altar",tdm:"Tim",coop:"Lawan Bot",pve:"Bertahan Bersama",king:"Perburuan Raja"},fr=[];function Ff(){let n=L("lobbyList");n.replaceChildren(),L("lobby").classList.toggle("hidden",!fr.length);for(let i of fr){let s=i.names.length>=i.max,r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("b"),l=document.createElement("small"),c=document.createElement("button");r.className="lobbyRow",o.textContent=`${i.kind==="event"?"Event \xB7 ":""}${_f[i.mode]||i.mode}${i.wave?` \xB7 gelombang ${i.wave}`:""}`,l.textContent=`${i.names.join(", ")} (${i.names.length}/${i.max})`,c.type="button",c.textContent=s?"Penuh":"Gabung",c.disabled=s,c.addEventListener("click",()=>i.kind==="event"?yn("event"):i.code?yn("join",i.code):yn("public")),a.append(o,l),r.append(a,c),n.append(r)}let e=qr?.active&&qr.active.left-Math.floor((Date.now()-Vh)/1e3)>0,t=fr.find(i=>i.kind!=="event"&&i.names.length<i.max);L("playHint").textContent=Ue.get("tutorDone","")?e?`Masuk ke event ${qr.active.name}.`:t?`Bergabung dengan ${t.names.slice(0,3).join(", ")}.`:`Belum ada yang bermain: membuka room ${_f[m.createGm]||""}.`:"Pertama kali: latihan singkat dulu."}async function Po(){if(m.phase==="menu"){try{fr=(await fetch("/api/lobby",{headers:It.token?{authorization:"Bearer "+It.token}:{}}).then(e=>e.json())).rooms||[]}catch{fr=[]}Ff()}}setInterval(Po,8e3);var yf=n=>"#"+n.toString(16).padStart(6,"0");async function u_(){L("ranks").classList.remove("hidden"),L("myStats").textContent="Memuat\u2026",L("skinMsg").textContent="";let n=null,e=null;try{[n,e]=await Promise.all([fetch("/api/top").then(i=>i.json()),fetch(`/api/stats?pid=${m.pid}`).then(i=>i.json())])}catch{L("myStats").textContent="Peringkat belum bisa dimuat dari server, jadi semua jubah tampil terkunci. Coba tutup dan buka lagi."}let t=e?.stats;if(L("waveTable").innerHTML=(n?.waves||[]).map((i,s)=>`<tr><td>${s+1}</td><td></td><td>gelombang ${i.wave}</td></tr>`).join("")||"<tr><td>Belum ada yang bermain Bertahan Bersama minggu ini.</td></tr>",(n?.waves||[]).forEach((i,s)=>{L("waveTable").rows[s].cells[1].textContent=i.name}),L("achv").innerHTML=_h.map(i=>`<span class="${(t?.[i.stat]||0)>=i.n?"on":""}" title="${i.text}">${i.name} \xB7 ${Math.min(t?.[i.stat]||0,i.n)}/${i.n}</span>`).join(""),L("daily").innerHTML=(e?.daily||[]).map(i=>`<li class="${i.done?"done":""}"><i style="width:${Math.round(i.p/i.n*100)}%"></i><span><b></b><em>${i.done?"Selesai":`${i.p}/${i.n}`}</em></span></li>`).join("")||"<li><span>Tantangan belum bisa dimuat.</span></li>",(e?.daily||[]).forEach((i,s)=>{L("daily").children[s].querySelector("b").textContent=i.text}),n){L("myStats").textContent=t?`Kamu: ${t.kills} kill, ${t.deaths} gugur, ${t.wins} menang dari ${t.matches} ronde.`:"Belum ada statistik: selesaikan satu ronde di arena untuk mulai tercatat.",L("weekTitle").textContent=`Minggu ini (${n.week.replace("-W",", minggu ")})`;let i=n.top.map((s,r)=>`<tr class="${t&&s.name===t.name?"me":""}"><td>${r+1}</td><td></td><td>${s.kills}</td><td>${s.wins}</td></tr>`).join("");L("weekTable").innerHTML=`<tr><th>#</th><th>Nama</th><th>Kill</th><th>Menang</th></tr>${i||'<tr><td colspan="4">Belum ada yang bermain minggu ini.</td></tr>'}`,n.top.forEach((s,r)=>{L("weekTable").rows[r+1].cells[1].textContent=s.name})}L("skins").innerHTML=Ui.map(i=>{let s=zd(i,t),r=un[m.clsKey],a=i.accent??Math.round(r.color*1),o=i.glow??r.color,l=i.req?`${Math.min(t?.[i.req.stat]||0,i.req.n)}/${i.req.n}`:"";return`<button class="skin ${s?"":"locked"} ${m.skin===i.id?"on":""}" data-id="${i.id}" ${s?"":'aria-disabled="true"'} style="--c:${yf(i.accent??a)};--g:${yf(o)}"><i></i><span><b>${i.name}</b><small>${s?m.skin===i.id?"Dipakai":"Terbuka":`${i.req.text} \xB7 ${l}`}</small></span></button>`}).join("");for(let i of L("skins").querySelectorAll(".skin"))i.addEventListener("click",()=>{let s=Ui.find(r=>r.id===i.dataset.id);if(i.classList.contains("locked")){L("skinMsg").textContent=`${s.name} masih terkunci: ${s.req.text.toLowerCase()} (sekarang ${Math.min(t?.[s.req.stat]||0,s.req.n)} dari ${s.req.n}).`;return}L("skinMsg").textContent=`${s.name} dipakai mulai ronde berikutnya.`,m.skin=i.dataset.id,Ue.set("skin",m.skin);for(let r of L("skins").querySelectorAll(".skin"))r.classList.toggle("on",r===i),r.classList.contains("locked")||(r.querySelector("small").textContent=r===i?"Dipakai":"Terbuka")})}L("ranksBtn").addEventListener("click",()=>u_().catch(n=>{L("myStats").textContent="Galat: "+n.message}));L("ranksClose").addEventListener("click",()=>L("ranks").classList.add("hidden"));L("joinBtn").addEventListener("click",()=>{let n=Hh(L("code").value);if(n.length!==4){L("menuMsg").textContent="Kode room terdiri dari 4 huruf.",L("code").focus();return}yn("join",n)});L("practice").addEventListener("click",()=>{m.tut=Bf(),yn("practice")});function d_(n,e,t){let i;try{i=new WebSocket(l_())}catch{return Mf("Alamat server tidak valid.")}m.ws=i,m.joinErr="",i.onopen=()=>i.send(JSON.stringify({t:"join",name:n,cls:m.clsKey,mode:e,code:t,gm:m.createGm,map:m.createMap,diff:m.createDiff,pid:m.pid,skin:m.skin,tok:It.token||void 0})),i.onmessage=s=>f_(JSON.parse(s.data)),i.onclose=()=>{if(m.ws!==i)return;let s=!!m.myId;Io(),Mf(m.joinErr||(s?"Koneksi terputus.":"Server tidak terjangkau. Coba lagi.")),m.myId=0},i.onerror=()=>{}}function Mf(n){L("menuMsg").textContent=n;for(let e of zh)L(e).disabled=!1}function Io(){let n=m.ws;m.ws=null,n&&n.readyState<=1&&n.close();for(let e of m.players.values())e.av.dispose(pn);m.players.clear(),m.roster.clear(),m.pending.length=0;for(let e of[...De.projs.keys()])De.removeProj(e);m.phase="menu",ce.enabled=!1,ce.reset?.(),bo("menu"),us(),Po(),m.menuCls&&(m.clsKey=m.menuCls),Uf(),document.exitPointerLock?.(),L("hud").classList.add("hidden"),L("menu").classList.remove("hidden"),L("tutor").classList.add("hidden"),L("hitDir").textContent="";for(let e of zh)L(e).disabled=!1}function f_(n){if(n.t==="w"){m.myId=n.id,m.limit=n.limit||lh,m.menuCls=m.clsKey,un[n.cls]&&(m.clsKey=n.cls),m.cls=un[m.clsKey],m.phase="play",bo("battle"),us(),m.ended=!1,m.mut=n.mut||null,m.mut&&setTimeout(()=>Et(`Mode akhir pekan: ${lr[m.mut].name}`),2200),n.code&&Ue.set("lastRoom",n.code),m.barrelMask=0,m.seq=0,m.pending.length=0,m.me.xp=0,m.me.lvl=1,L("menu").classList.add("hidden"),L("hud").classList.remove("hidden"),L("menuMsg").textContent="",L("skillName").textContent=m.cls.skillName,L("death").classList.add("hidden"),L("score").classList.add("hidden"),L("pause").classList.add("hidden"),ce.enabled=!0,m.code=n.code||null,m.practice=!!n.practice,m.gm=n.gm||"dm",m.ticks.length=0,n.map&&n.map!==m.mapId&&Rf(n.map),m.team=Od.includes(m.gm)?n.team:-1,m.teamScore=[0,0],L("zoneTag").classList.toggle("hidden",m.gm!=="koth"&&m.gm!=="king"),m.event=n.ev||null,m.event&&setTimeout(()=>Et(`Event ${m.event.name}: ${m.event.target}`),2400);let e=L("roomPill");e.classList.toggle("hidden",!m.code&&!m.practice&&!n.ev),e.textContent=m.code?`${{koth:"Altar",tdm:"Tim",coop:"Lawan Bot",pve:"Bertahan",king:"Raja"}[m.gm]||"Room"} ${m.code} \u2934`:m.event?"Event":"Latihan",m.gm==="pve"&&(m.team=0),m.team>=0&&m.gm!=="pve"&&setTimeout(()=>Et(`Kamu di regu ${dn[m.team].name}`),1900),m.practice&&m.tut?m.tut.show():(m.tut=null,L("tutor").classList.add("hidden")),(!m.practice||!m.tut)&&Et(m.code?`Room ${m.code}: ketuk kode untuk membagikan`:m.practice?"Arena latihan":"Pertarungan dimulai")}else if(n.t==="e")m.joinErr=n.m,Ue.set("lastRoom",""),n.auth&&Oh(n.m);else if(n.t==="r"){m.roster.clear();for(let[e,t,i,s,r,a,o,l,c]of n.l)m.roster.set(e,{id:e,name:t,cls:i,kills:s,deaths:r,bot:a,pts:o||0,team:l??-1,skin:c||"default"});n.ts&&(m.teamScore=n.ts),y_()}else n.t==="s"?g_(n):n.t==="pg"?m.ping=Math.round(performance.now()-n.c):n.t==="sp"&&m.ws?.send(JSON.stringify({t:"spr",c:n.c}))}setInterval(()=>{m.ws?.readyState===1&&m.ws.send(JSON.stringify({t:"pg",c:performance.now()}))},2e3);setInterval(()=>{m.ws?.readyState===1&&m.myId&&!document.hidden&&m.ping>0&&m.ws.send(JSON.stringify({t:"st",p:m.ping,f:To}))},5e3);function sn(n){if(!(!m.vibrate||!navigator.vibrate))try{navigator.vibrate(n)}catch{}}function p_(n,e){let t=L("hitDir");for(;t.children.length>=4;)t.firstChild.remove();let i=cr(Math.atan2(n-m.rx,e-m.rz),ce.yaw),s=Math.min(innerWidth,innerHeight)*.38,r=s*.95,a=s*.3,o=document.createElement("div");o.className="arc",o.style.cssText=`width:${r}px;height:${a}px;left:${-r/2}px;top:${-s}px;transform-origin:${r/2}px ${s}px;transform:rotate(${-i*180/Math.PI}deg)`,o.addEventListener("animationend",()=>o.remove()),t.appendChild(o)}function Bf(){let n={i:0,moved:0,turned:0,shots:0,skills:0,kills:0,lastYaw:null,done:!1},e=()=>[[nn?"Geser jempol kiri untuk berjalan.":"Tekan W A S D untuk berjalan.",()=>n.moved>8],[nn?"Geser jari di sisi kanan layar untuk memutar arah bidikan.":"Klik layar, lalu gerakkan mouse untuk membidik.",()=>n.turned>1.6],[nn?"Tahan tombol merah untuk menembak.":"Klik kiri untuk menembak.",()=>n.shots>=5],[`${nn?"Ketuk tombol ungu":"Tekan Spasi"} untuk skill ${m.cls?.skillName||""}. Skill punya waktu jeda.`,()=>n.skills>=1],["Tumbangkan satu bot boneka. Mereka tidak menyerang balik.",()=>n.kills>=1]];return n.show=()=>{L("tutor").classList.remove("hidden"),n.render()},n.render=()=>{let t=e();L("tutorDots").innerHTML=t.map((i,s)=>`<i class="${s<n.i?"on":s===n.i&&!n.done?"now":""}"></i>`).join(""),L("tutorText").textContent=n.done?"Siap. Di arena sungguhan lawan menyerang balik; pertama mencapai 20 kill menang.":`${n.i+1}/${t.length} \xB7 ${t[n.i][0]}`,L("tutorGo").classList.toggle("hidden",!n.done),L("tutorSkip").textContent=n.done?"Tetap berlatih":"Lewati latihan"},n.check=()=>{if(n.done)return;let t=e();t[n.i][1]()&&(n.i++,nt("orb"),sn(30),n.i>=t.length&&(n.done=!0,Ue.set("tutorDone","1"),nt("level")),n.render())},n}L("tutorSkip").addEventListener("click",()=>{if(Ue.set("tutorDone","1"),m.tut?.done){L("tutor").classList.add("hidden"),m.tut=null;return}m.tut=null,Io(),yn("quick")});L("tutorGo").addEventListener("click",()=>{m.tut=null,Io(),yn("quick")});for(let n of["touchstart","touchmove"])L("tutor").addEventListener(n,e=>e.stopPropagation());L("roomPill").addEventListener("click",n=>{if(n.stopPropagation(),!m.code)return;let e=`${location.origin}${location.pathname}?room=${m.code}`,t=()=>Et(`Tautan room ${m.code} disalin`),i=()=>Et(`Kode room: ${m.code}`);try{navigator.clipboard.writeText(e).then(t,i)}catch{i()}});function m_(n){let e=m.players.get(n);if(e)return e;let t=m.roster.get(n);if(!t)return null;let i=Vn[t.cls]?new xo(t.cls,ut.glowTex):new go(t.cls,t.name,n===m.myId,ut.glowTex,t.team>=0&&(m.gm!=="pve"||t.team===0)?dn[t.team].color:null,t.skin);return pn.add(i.group),e={id:n,av:i,buf:[],x:0,z:0,yaw:0,flags:0,hp:1,maxHp:1,lvl:1,cls:t.cls,seen:0},m.players.set(n,e),e}function g_(n){let e=performance.now();if(!m.myId)return;let t=m.ended;if(n.mp&&n.mp!==m.mapId){Rf(n.mp),Et(`Peta: ${qn.name}`);for(let r of[...De.projs.keys()])De.removeProj(r)}m.ended=!!n.st,m.tm=n.tm,m.orbMask=n.o,m.runeMask=n.u??15,m.holder=n.z||0,m.barrelMask=n.bm||0,m.ticks.push([e,n.k||0]),m.ticks.length>30&&m.ticks.shift(),m.snapN=(m.snapN||0)+1;for(let r of n.p){let a=m_(r[0]);a&&(a.seen=m.snapN,a.hp=r[4],a.maxHp=r[5],a.lvl=r[6],a.flags=r[7],r[0]===m.myId?(m.me.hp=r[4],m.me.maxHp=r[5],m.me.lvl=r[6],m.me.flags=r[7]):(a.buf.push({t:e,x:r[1],z:r[2],yaw:r[3]}),a.buf.length>30&&a.buf.shift(),a.av.setInfo(r[4],r[5],r[6],!!(r[7]&64))))}for(let[r,a]of m.players)a.seen!==m.snapN&&(a.av.dispose(pn),m.players.delete(r));let i=n.me,s=m.pred;for(m.me.xp=i[6],m.me.respawnT=i[7],m.me.dmgT=i[8]||0,m.me.spdT=i[9]||0,m.me.ult=i[10]||0,m.ev=n.ev||null,m.wv=n.wv||null,m.rv=n.rv||null,m.me.perks=i[11]||"",m.me.offer=i[12]||0,m.me.spare=i[13]||0,s.spd=i[14]||1;m.pending.length&&m.pending[0].s<=n.a;)m.pending.shift();if(s.x=i[0],s.z=i[1],s.dashT=i[2],s.dx=i[3],s.dz=i[4],s.skillCd=i[5],!(m.me.flags&1)&&!m.ended)for(let r of m.pending)yh(s,r,m.cls,ci);else m.pending.length=0;for(let r of n.e)x_(r);m.ended&&!t&&(ce.fire=!1,Gh(!0),nt("level")),!m.ended&&t&&(L("score").classList.add("hidden"),Et("Ronde baru dimulai"))}var di=new D;function fn(n,e){return Math.max(0,1-Math.hypot(n-m.rx,e-m.rz)/45)}function Zt(n){return m.roster.get(n)?.name||"\u2014"}function x_(n){switch(n[0]){case"s":{let e=m.players.get(n[2]),t=e?.cls||m.roster.get(n[2])?.cls||"ranger";De.spawnProj(n[1],t,n[3],n[4],n[5]),n[2]!==m.myId&&e&&m.lastShotTick.get(n[2])!==m.snapN&&(m.lastShotTick.set(n[2],m.snapN),e.av.fireKick(),De.muzzle(e.av.tipWorld(di),t,n[5]),nt(t,fn(n[3],n[4])*.8,!0));break}case"h":{let t=De.projs.get(n[1])?.cls||"ranger";De.removeProj(n[1]),De.impact(n[2],n[3],t),t==="mage"&&(nt("boom",fn(n[2],n[3])),m.shake=Math.max(m.shake,.5*fn(n[2],n[3])));break}case"d":{let e=n[1]===m.myId;if(e){L("vignette").style.opacity=.75,setTimeout(()=>{L("vignette").style.opacity=0},160),nt("hurt"),m.shake=Math.max(m.shake,.35);let t=n[2]&&n[2]!==m.myId?m.players.get(n[2]):null;t&&(p_(t.x,t.z),m.arcN=(m.arcN||0)+1),m.time-m.buzzT>.12&&(m.buzzT=m.time,sn(35))}if(n[2]===m.myId&&!e){let t=L("cross");t.classList.remove("hit"),t.offsetWidth,t.classList.add("hit"),nt("hit")}(e||n[2]===m.myId)&&v_(n[4],n[5],n[3],e),De.burst(n[4],1.5,n[5],16730938,5,4,.7,.3);break}case"k":{let e=document.createElement("div");(n[1]===m.myId||n[2]===m.myId)&&(e.className="me"),e.innerHTML="<span></span><i>\u2726</i><span></span>",e.children[0].textContent=Zt(n[1]),e.children[2].textContent=Zt(n[2]);let t=L("feed");for(t.appendChild(e);t.children.length>4;)t.firstChild.remove();setTimeout(()=>e.remove(),5e3);let i=m.players.get(n[2]);i&&De.burst(i.x,1.4,i.z,hi[i.cls].color,40,8,1.4,.9),n[1]===m.myId&&n[2]!==m.myId&&(nt("kill"),Et("Lawan tumbang"),sn([40,40,70]),m.tut&&(m.tut.kills++,m.tut.check())),n[2]===m.myId&&(nt("death"),sn(250),ce.fire=!1,L("deathBy").textContent=`Dikalahkan oleh ${Zt(n[1])}`,L("death").classList.remove("hidden"));break}case"r":{if(De.pillar(n[2],n[3],12577279),n[1]===m.myId)ce.yaw=Math.atan2(-n[2],-n[3]),m.rx=n[2],m.rz=n[3],m.pending.length=0,L("death").classList.add("hidden");else{let e=m.players.get(n[1]);e&&(e.buf.length=0)}break}case"l":{let e=m.players.get(n[1]);e&&De.pillar(e.x,e.z,16766571),n[1]===m.myId&&(nt("level"),Et(`Naik ke Level ${n[2]}`));break}case"n":De.nova(n[2],n[3],m.roster.get(n[1])?.cls==="brute"?Vn.brute.color:un.mage.color,m.roster.get(n[1])?.cls==="brute"?Vn.brute.slam.r:Fd),nt("nova",fn(n[2],n[3])),m.shake=Math.max(m.shake,.6*fn(n[2],n[3]));break;case"E":{let e=mh[n[1]];if(!e)break;Et(`${e.name}: ${e.desc}`),nt("level"),sn([60,40,60]);break}case"g":{let e=m.ev?.[2]??0,t=m.ev?.[3]??0;De.pillar(e,t,16766315),De.burst(e,1.4,t,16766315,50,7,1.4,.9,-2),Et(n[1]===m.myId?"Cawan Emas: HP penuh dan kedua rune!":`${Zt(n[1])} mengambil Cawan Emas`),n[1]===m.myId&&(nt("level"),sn([30,30,80]));break}case"B":Et(n[1]===m.myId?"Kamu jadi BURONAN: semua mengincarmu!":`${Zt(n[1])} jadi buronan: tumbangkan untuk hadiah XP`),n[1]===m.myId&&sn([80,60,80]);break;case"b":Et(n[1]===m.myId?"Buronan tumbang: hadiah XP besar!":`${Zt(n[1])} menumbangkan buronan ${Zt(n[2])}`),n[1]===m.myId&&nt("level");break;case"C":n[1]===m.myId&&(setTimeout(()=>Et(`Tantangan selesai: ${n[2]}`),900),nt("level"),sn([40,40,40,40,90]));break;case"U":{let e=m.players.get(n[1]);if(!e)break;let t=un[n[2]]?.color??16766315;De.pillar(e.x,e.z,16766315),De.burst(e.x,1.6,e.z,t,40,9,1.5,.7,0),n[2]==="guardian"&&De.nova(e.x,e.z,t,6),n[1]===m.myId&&(Et(xh[n[2]].name+"!"),sn(120),m.shake=Math.max(m.shake,.5)),nt(n[2]==="mage"?"nova":n[2]==="guardian"?"shield":"ranger",fn(e.x,e.z));break}case"M":De.ring(n[1],n[2],16726830,6,.8),De.ring(n[1],n[2],16756848,4,.8),De.flash(n[1],6,n[2],16734766,30);break;case"m":{De.nova(n[1],n[2],16738862,6),De.burst(n[1],1,n[2],16765562,60,12,2,.8,8),nt("boom",fn(n[1],n[2])),m.shake=Math.max(m.shake,.9*fn(n[1],n[2]));break}case"H":De.ring(n[2],n[3],16769658,7,.7),De.pillar(n[2],n[3],16769658),nt("orb",fn(n[2],n[3]));break;case"X":{let e=qn.barrels?.[n[1]];e&&(De.nova(e[0],e[1],16742958,5),De.burst(e[0],1,e[1],16765562,50,11,1.8,.8,8),nt("boom",fn(e[0],e[1])),m.shake=Math.max(m.shake,.8*fn(e[0],e[1])));break}case"q":{if(n[1]!==m.myId&&!Yr(n[1]))break;let e=document.createElement("div");e.className="ping",e.textContent=`${Zt(n[1])}: ${vh[n[2]]}`,L("feed").appendChild(e),setTimeout(()=>e.remove(),5e3),De.ring(n[3],n[4],8257456,3,1.2),De.pillar(n[3],n[4],8257456),nt("orb",.6),(m.pings||=[]).push({x:n[3],z:n[4],t:m.time+5});break}case"K":Et(n[1]===m.myId?"Kamu dinobatkan menjadi RAJA!":`${Zt(n[1])} menjadi raja: buru dia!`);{let e=m.players.get(n[1]);e&&De.pillar(e.x,e.z,16765514)}n[1]===m.myId&&(nt("level"),sn([80,50,120]));break;case"Z":setTimeout(()=>Et(`Event ${n[1]} selesai. Terima kasih sudah ikut!`),600),m.event=null;break;case"W":Et(n[2]?`Gelombang ${n[1]}: ${n[1]%10===0?"Ratu Laba-laba":"Golem Batu"} datang!`:`Gelombang ${n[1]}`),nt("level"),sn([50,50,50]),L("perks").classList.add("hidden");break;case"w":Et(n[2]===n[1]&&n[1]>0?`Gelombang ${n[1]} selesai! Titik simpan tercapai`:`Gelombang ${n[1]} selesai! Rekan bangkit, HP pulih`),nt("level"),L("death").classList.add("hidden");break;case"A":{let e=m.players.get(n[1]);if(!e)break;e.av.windup?.(n[2]?.9:Gr.windup),(m.windIds||=new Map).set(n[1],m.time+(n[2]?.9:Gr.windup)),De.ring(e.x,e.z,n[2]?16742938:16726843,n[2]?Vn.brute.slam.r:2.4,n[2]?.9:Gr.windup),Math.hypot(e.x-m.rx,e.z-m.rz)<8&&nt("hurt",.4);break}case"P":n[1]===m.myId&&Df(n[2]);break;case"p":n[1]===m.myId?(L("perks").classList.add("hidden"),Et(`Berkah ${Ni[n[2]].name}: ${Ni[n[2]].desc}`)):m.roster.get(n[1])&&Et(`${Zt(n[1])} memilih ${Ni[n[2]].name}`);break;case"v":{let e=m.players.get(n[2]);e&&(De.pillar(e.x,e.z,8257456),De.burst(e.x,1.2,e.z,8257456,30,5,1.2,.7,-2)),n[2]===m.myId?(L("death").classList.add("hidden"),Et(n[1]===m.myId?"Bangkit dengan nyawa cadangan!":`${Zt(n[1])} menolongmu!`),sn([40,40,80]),nt("level")):n[1]===m.myId&&Et(`Kamu menolong ${Zt(n[2])}!`);break}case"x":De.nova(n[1],n[2],16756848,4),nt("boom",fn(n[1],n[2])*.6);break;case"a":{let e=m.players.get(n[1]);e&&(e.av.fireKick(),nt("hit",fn(e.x,e.z)*.6));break}case"u":{let e=qn.runes[n[1]];if(!e)break;let t=Di[e.type];De.burst(e.x,1.2,e.z,t.color,34,6,1.3,.8,-2),De.pillar(e.x,e.z,t.color),n[2]===m.myId&&(nt("level"),sn([30,30,30]),Et(`${t.name}: ${t.desc}`));break}case"o":if(!qn.orbs[n[1]])break;De.burst(qn.orbs[n[1]][0],1.2,qn.orbs[n[1]][1],5898140,26,5,1.1,.7,-2),n[2]===m.myId&&nt("orb");break}}var bf=0;function Et(n){let e=L("toast");e.textContent=n,e.classList.add("on"),clearTimeout(bf),bf=setTimeout(()=>e.classList.remove("on"),1800)}var wo=[];function v_(n,e,t,i){let s=wo.find(r=>r.t<=0)||(()=>{if(wo.length>=20)return null;let r={el:document.createElement("div"),t:0};return L("dmgLayer").appendChild(r.el),wo.push(r),r})();s&&(s.el.className="dmg"+(i?" me":""),s.el.textContent=(i?"-":"")+t,s.t=.8,s.x=n+(Math.random()-.5)*.8,s.z=e+(Math.random()-.5)*.8,s.el.style.display="")}function __(n){for(let e of wo)if(!(e.t<=0)){if(e.t-=n,e.t<=0){e.el.style.display="none";continue}if(di.set(e.x,2.6+(.8-e.t)*2.2,e.z).project(rn),di.z>1){e.el.style.opacity=0;continue}e.el.style.opacity=Math.min(1,e.t*3),e.el.style.transform=`translate(${(di.x*.5+.5)*innerWidth}px,${(-di.y*.5+.5)*innerHeight}px) translate(-50%,-50%) scale(${1+Math.max(0,e.t-.6)*3})`}}function Ao(){return[...m.roster.values()].filter(n=>!Vn[n.cls]).sort((n,e)=>(m.team>=0?n.team-e.team:0)||(m.gm==="koth"||m.gm==="king"?e.pts-n.pts:0)||e.kills-n.kills||n.deaths-e.deaths)}var Yr=n=>m.team>=0&&m.roster.get(n)?.team===m.team;function y_(){let n=Ao(),e=m.roster.get(m.myId);e&&(L("rank").textContent="#"+(n.indexOf(e)+1),m.gm!=="pve"&&(L("myScore").textContent=m.team>=0?`${dn[0].name} ${m.teamScore[0]} \xB7 ${m.teamScore[1]} ${dn[1].name}`:m.gm==="koth"||m.gm==="king"?`${e.pts} / ${m.limit} poin`:`${e.kills} / ${m.limit||lh}`),L("score").classList.contains("hidden")||(Of(),!m.ended&&m.team>=0&&(L("scoreTitle").textContent=`${dn[0].name} ${m.teamScore[0]} \xB7 ${m.teamScore[1]} ${dn[1].name}`)))}function Of(){let n=m.gm==="koth"||m.gm==="king",e=Ao().map((t,i)=>`<tr class="${t.id===m.myId?"me":""}"><td>${i+1}</td><td></td>${n?`<td>${t.pts}</td>`:""}<td>${t.kills}</td><td>${t.deaths}</td></tr>`).join("");L("scoreTable").innerHTML=`<tr><th>#</th><th>Pengembara</th>${n?"<th>Poin</th>":""}<th>Kill</th><th>Gugur</th></tr>${e}`,Ao().forEach((t,i)=>{let s=L("scoreTable").rows[i+1].cells[1];if(s.textContent=t.name+(t.bot?" (bot)":"")+" \xB7 "+un[t.cls].name,t.team>=0){let r=document.createElement("i");r.className="tdot",r.style.background="#"+dn[t.team].color.toString(16).padStart(6,"0"),s.prepend(r)}})}function Gh(n){Of();let e=Ao()[0],t=m.teamScore,i=t[0]===t[1]?-1:t[0]>t[1]?0:1;if(n&&m.gm==="pve"){let s=m.wv?.[3]||0;L("scoreTitle").textContent=`Bertahan sampai gelombang ${m.wv?.[0]||0}`,L("scoreNext").textContent=s?`Ronde berikutnya lanjut dari gelombang ${s+1} (titik simpan) dengan berkah acak`:"Ronde berikutnya mulai dari gelombang 1",L("score").classList.remove("hidden");return}L("scoreTitle").textContent=n?m.team>=0?i<0?"Seri":i===m.team?`Regu ${dn[i].name} Menang!`:`Regu ${dn[i].name} Menang`:e?.id===m.myId?"Kamu Menang!":`${e?.name||""} Menang`:m.team>=0?`${dn[0].name} ${t[0]} \xB7 ${t[1]} ${dn[1].name}`:"Papan Skor",L("score").classList.remove("hidden")}L("top").addEventListener("click",()=>{m.ended||(L("score").classList.contains("hidden")?Gh(!1):L("score").classList.add("hidden"))});L("score").addEventListener("click",()=>{m.ended||L("score").classList.add("hidden")});var Lo=L("pause");L("pauseBtn").addEventListener("click",()=>{Lo.classList.toggle("hidden"),document.exitPointerLock?.(),ce.fire=!1});L("resume").addEventListener("click",()=>Lo.classList.add("hidden"));L("leave").addEventListener("click",()=>{Io(),m.myId=0,L("menuMsg").textContent=""});L("quality").addEventListener("change",n=>{Af=!1,Ue.set("qualityManual","1"),Ue.set("quality",n.target.value),Co(n.target.value)});L("sens").value=Ue.get("sens","1");ce.sens=Number(L("sens").value);L("sens").addEventListener("input",n=>{ce.sens=Number(n.target.value),Ue.set("sens",n.target.value)});L("autoFire").checked=m.autoFire;L("aimAssist").checked=m.aimAssist;L("autoFire").addEventListener("change",n=>{m.autoFire=n.target.checked,Ue.set("autoFire",m.autoFire?"1":"")});L("aimAssist").addEventListener("change",n=>{m.aimAssist=n.target.checked,Ue.set("aimAssist",m.aimAssist?"1":"")});L("mute").addEventListener("change",n=>df(n.target.checked));var $r={music:Number(Ue.get("volMusic",Ue.get("music","1")==="1"?"0.6":"0")),sfx:Number(Ue.get("volSfx","0.8"))};for(let n of document.querySelectorAll("[data-vol]")){let e=n.dataset.vol;n.value=$r[e],n.addEventListener("input",()=>{$r[e]=Number(n.value),Ue.set(e==="music"?"volMusic":"volSfx",n.value),Mo(e,$r[e]);for(let t of document.querySelectorAll(`[data-vol="${e}"]`))t!==n&&(t.value=n.value);pr()}),e==="sfx"&&n.addEventListener("change",()=>nt("hit"))}var M_=()=>m.phase==="play"?"battle":"menu";function pr(){Lh(),Mo("music",$r.music),Mo("sfx",$r.sfx),bo(M_()),pf()&&(removeEventListener("pointerdown",pr,!0),removeEventListener("keydown",pr,!0))}addEventListener("pointerdown",pr,!0);addEventListener("keydown",pr,!0);pr();document.addEventListener("visibilitychange",()=>ff(!document.hidden));L("vibrate").checked=m.vibrate;L("vibrate").addEventListener("change",n=>{m.vibrate=n.target.checked,Ue.set("vibrate",m.vibrate?"1":""),m.vibrate&&sn(40)});for(let n of[Lo])for(let e of["touchstart","touchmove"])n.addEventListener(e,t=>t.stopPropagation());var b_=L("minimap"),qe=b_.getContext("2d"),Ro=document.createElement("canvas");Ro.width=Ro.height=132;function zf(){let n=Ro.getContext("2d"),e=132/(_n*2+6),t=66;n.clearRect(0,0,132,132),n.fillStyle="rgba(190,170,220,0.55)";for(let i of qn.obst)i.t==="cyl"?(n.beginPath(),n.arc(t-i.x*e,t-i.z*e,Math.max(1.5,i.r*e),0,7),n.fill()):n.fillRect(t-(i.x+i.w/2)*e,t-(i.z+i.d/2)*e,i.w*e,i.d*e)}zf();function S_(){let n=132/(_n*2+6),e=66;qe.clearRect(0,0,132,132),qe.drawImage(Ro,0,0),m.pings=(m.pings||[]).filter(t=>t.t>m.time);for(let t of m.pings)qe.strokeStyle="#7dffb0",qe.lineWidth=2,qe.beginPath(),qe.arc(e-t.x*n,e-t.z*n,4+m.time*6%4,0,7),qe.stroke();qn.orbs.forEach(([t,i],s)=>{m.orbMask&1<<s&&(qe.fillStyle="#59ff9c",qe.fillRect(e-t*n-1.5,e-i*n-1.5,3,3))}),qn.runes.forEach((t,i)=>{m.runeMask&1<<i&&(qe.fillStyle=t.type==="dmg"?"#ff3b4e":"#4dc3ff",qe.beginPath(),qe.arc(e-t.x*n,e-t.z*n,3,0,7),qe.fill())}),m.gm==="koth"&&(qe.strokeStyle=m.holder===m.myId?"#f2c66d":m.holder===-1?"#b76bff":m.holder?"#ff4d5e":"rgba(255,242,208,.7)",qe.lineWidth=2,qe.beginPath(),qe.arc(e,e,Vr*n,0,7),qe.stroke());for(let t of m.players.values()){if(t.id===m.myId||t.flags&1)continue;let i=Yr(t.id);if(!!(t.flags&64)){qe.fillStyle="#ffd56b",qe.font="bold 12px sans-serif",qe.textAlign="center",qe.textBaseline="middle",qe.fillText("\u2605",e-t.x*n,e-t.z*n);continue}!i&&Math.hypot(t.x-m.rx,t.z-m.rz)>32||(qe.fillStyle=i?"#"+dn[m.team].color.toString(16).padStart(6,"0"):"#ff5a4a",qe.beginPath(),qe.arc(e-t.x*n,e-t.z*n,3,0,7),qe.fill())}qe.save(),qe.translate(e-m.rx*n,e-m.rz*n),qe.rotate(ce.yaw),qe.fillStyle="#fff",qe.beginPath(),qe.moveTo(0,-6),qe.lineTo(4,4),qe.lineTo(-4,4),qe.closePath(),qe.fill(),qe.restore()}af({canvas:Tf,touchLayer:L("touchLayer"),stick:L("stick"),knob:L("knob"),fireBtn:L("fireBtn"),skillBtn:L("skillBtn"),ultBtn:L("ultBtn")});Co(cs);function E_(){let n=null,e=1e9,t=m.cls.projSpeed*m.cls.projLife;for(let i of m.players.values()){if(i.id===m.myId||i.flags&1||Yr(i.id))continue;let s=i.x-m.rx,r=i.z-m.rz,a=Math.hypot(s,r);if(a>t+2||a<.5)continue;let o=cr(Math.atan2(s,r),ce.yaw);if(Math.abs(o)>.3)continue;let l=Math.abs(o)*20+a*.05;l<e&&Vd(m.rx,m.rz,i.x,i.z)&&(e=l,n={p:i,diff:o,d:a})}return n}function w_(){let n=m.ticks,e=performance.now()-Bd*1e3;if(!n.length)return 0;for(let t=n.length-1;t>0;t--)if(n[t-1][0]<=e){let[i,s]=n[t-1],[r,a]=n[t];return Math.round((s+(a-s)*Math.min(1,(e-i)/(r-i||1)))*10)/10}return n[0][1]}function T_(){let n=m.me.flags&1,e=!Lo.classList.contains("hidden"),t=Math.sin(ce.yaw),i=Math.cos(ce.yaw),s=ce.jx,r=ce.jy,a=ce.fire,o=ce.skillQueued?1:0,l=ce.ultQueued&&m.me.ult>=gh?1:0;ce.skillQueued=!1,ce.ultQueued=!1,(e||m.ended)&&(s=r=0,a=!1,o=0,l=0);let c=(m.autoFire||m.aimAssist)&&!n&&!m.ended?E_():null;if(m.lockId=c?c.p.id:0,c){let x=Math.atan(1/c.d);m.aimAssist&&(a||m.autoFire)&&(ce.yaw+=Math.max(-1.6*ci,Math.min(1.6*ci,c.diff))),m.autoFire&&!e&&Math.abs(c.diff)<x&&(a=!0)}let h=x=>Math.round(x*1e3)/1e3,u={t:"in",s:++m.seq,mx:h(t*r-i*s),mz:h(i*r+t*s),y:h(ce.yaw),f:a&&!n?1:0,k:o,u:n?0:l,vt:w_()};if(m.ws?.readyState===1&&m.ws.send(JSON.stringify(u)),n||m.ended)return;let d=yh(m.pred,u,m.cls,ci);m.pending.push(u),m.pending.length>90&&m.pending.shift();let f=m.players.get(m.myId);if(m.tut&&!m.tut.done){let x=m.tut,v=Math.hypot(m.pred.x-(x.px??m.pred.x),m.pred.z-(x.pz??m.pred.z));v<2&&(x.moved+=v),x.px=m.pred.x,x.pz=m.pred.z,x.lastYaw!==null&&x.i>=1&&(x.turned+=Math.abs(cr(ce.yaw,x.lastYaw))),x.lastYaw=ce.yaw,d&&x.skills++,x.check()}d&&(nt(m.cls.skill),m.cls.skill==="dash"&&f&&De.burst(m.rx,1.2,m.rz,m.cls.color,24,5,1.2,.4,0)),m.localFireCd-=ci,u.f&&m.localFireCd<=0&&f&&(m.localFireCd=m.cls.fireCd,m.tut&&m.tut.shots++,f.av.fireKick(),De.muzzle(f.av.tipWorld(di),m.clsKey,ce.yaw),nt(m.clsKey),m.shake=Math.max(m.shake,m.clsKey==="ranger"?.08:.22))}var dr=7.2,Sf=new D,Ef=new D,wf=performance.now(),So=0,Uh=0,To=60,Eo=0,Nh=0;function Hf(n){requestAnimationFrame(Hf);let e=Math.min(.1,(n-wf)/1e3);wf=n,m.time+=e;let t=m.time;if(m.phase==="play"&&m.myId){m.acc+=e;let i=0;for(;m.acc>=ci&&i++<4;)T_(),m.acc-=ci;m.acc>ci&&(m.acc=0);let s=m.pred,a=Math.hypot(s.x-m.rx,s.z-m.rz)>6?1:Math.min(1,e*22),o=m.rx,l=m.rz;m.rx+=(s.x-m.rx)*a,m.rz+=(s.z-m.rz)*a;let c=e>0?Math.hypot(m.rx-o,m.rz-l)/e:0;c>2&&c<20&&!(m.me.flags&1)&&(m.stepT-=e*c/8.5,m.stepT<=0&&(m.stepT=.36,mf()));let h=n-110;for(let C of m.players.values()){if(C.id===m.myId)C.x=m.rx,C.z=m.rz,C.yaw=ce.yaw,C.flags=m.me.flags;else{let E=C.buf;if(E.length){let M=E.length-1;for(;M>0&&E[M-1].t>h;)M--;let N=E[M],z=E[M-1]||N,H=N.t>z.t?(h-z.t)/(N.t-z.t):1;H=Math.max(0,Math.min(1.25,H)),Math.hypot(N.x-z.x,N.z-z.z)>8&&(H=1),C.x=z.x+(N.x-z.x)*H,C.z=z.z+(N.z-z.z)*H,C.yaw=z.yaw+cr(N.yaw,z.yaw)*Math.min(1,H)}}C.av.update(e,C.x,C.z,C.yaw,C.flags,t),C.flags&8&&Math.random()<.7&&De.particle(C.x,1+Math.random(),C.z,0,.5,0,hi[C.cls].color,1.3,.3,0),m.mut==="giant"&&(C.av.big=1.4),C.flags&128&&Math.random()<.5&&De.particle(C.x+(Math.random()-.5),.3+Math.random()*1.6,C.z+(Math.random()-.5),0,-.5,0,8378623,.9,.5,0),C.flags&1||(C.flags&16&&Math.random()<.5&&De.particle(C.x+(Math.random()-.5),.4+Math.random()*2,C.z+(Math.random()-.5),0,1.6,0,Di.dmg.color,.9,.5,0),C.flags&32&&Math.random()<.5&&De.particle(C.x+(Math.random()-.5),.2+Math.random()*.6,C.z+(Math.random()-.5),0,.3,0,Di.spd.color,1.1,.4,0))}let u=null;if(m.me.flags&1&&m.team>=0){let C=1e9;for(let E of m.players.values()){if(E.id===m.myId||E.flags&1||!Yr(E.id))continue;let M=Math.hypot(E.x-m.pred.x,E.z-m.pred.z);M<C&&(C=M,u=E)}}L("specTag").classList.toggle("hidden",!u),u&&(L("specTag").textContent=`Menonton ${Zt(u.id)}`);let d=u?u.x:m.rx,f=u?u.z:m.rz,x=u?u.yaw:ce.yaw,v=Math.sin(x),g=Math.cos(x),p=dr;for(let C=.15;C<=1.001;C+=.085)if(ki(d-v*dr*C,f-g*dr*C,.5)){p=Math.max(2.2,dr*(C-.1));break}m.camDist+=(p-m.camDist)*Math.min(1,e*(p<m.camDist?16:4)),m.shake=Math.max(0,m.shake-e*2.5);let _=m.shake*m.shake*.6,S=innerHeight>innerWidth;Sf.set(d-v*m.camDist+(Math.random()-.5)*_,(S?6:4.3)+(dr-m.camDist)*.55+(Math.random()-.5)*_,f-g*m.camDist),rn.position.copy(Sf);let y=.8+5.2*(m.camDist/dr);Ef.set(d+v*y,2,f+g*y),rn.lookAt(Ef),di.set(m.rx+v*20,1.55,m.rz+g*20).project(rn);let U=L("cross");if(U.style.left=(di.x*.5+.5)*100+"%",U.style.top=(-di.y*.5+.5)*100+"%",U.classList.toggle("lock",!!m.lockId),U.style.display=m.me.flags&1?"none":"",Nh-=e,Nh<=0){Nh=.1;let C=m.me;L("hpFill").style.width=Math.max(0,C.hp/C.maxHp*100)+"%",L("hpText").textContent=`${Math.max(0,C.hp)} / ${C.maxHp}`,L("lvl").textContent=C.lvl;let E=ch[C.lvl-1],M=ch[C.lvl];L("xpFill").style.width=(C.lvl>=kd?100:Math.min(100,(C.xp-E)/(M-E)*100))+"%";let N=m.pred.skillCd;L("skillCd").style.height=N/m.cls.skillCd*100+"%",L("skillNum").textContent=N>0?Math.ceil(N):"";let z=Math.min(1,(m.me.ult||0)/gh);L("ultRing").style.strokeDashoffset=String(176*(1-z)),L("ultBtn").classList.toggle("ready",z>=1),L("ultName").textContent=z>=1?xh[m.clsKey].name:`${Math.floor(z*100)}%`;let H=m.ev;L("eventTag").classList.toggle("hidden",!H),H&&(L("eventTag").textContent=`${mh[H[0]].name} \xB7 ${H[1]} dtk`),L("skillName").style.opacity=N>0?.25:1;let $=Math.max(0,m.tm);if(L("timer").textContent=m.gm==="pve"&&!m.ended?m.wv?.[1]===0?`Mulai ${$}`:`G${m.wv?.[0]||1}`:`${Math.floor($/60)}:${String($%60).padStart(2,"0")}`,m.gm==="pve"&&m.wv&&(L("myScore").textContent=m.wv[1]===0?`Gelombang ${m.wv[0]+1} segera`:`Gelombang ${m.wv[0]} \xB7 ${m.wv[2]} monster`),C.flags&1){let Y=m.rv?.find(T=>T[0]===m.myId);L("deathT").textContent=m.gm!=="pve"?`Bangkit dalam ${Math.ceil(C.respawnT)}\u2026`:Y?.[2]>0?`Nyawa cadangan: bangkit sendiri dalam ${Y[2]}\u2026`:Y?.[1]>0?`Rekan sedang menolongmu\u2026 ${Y[1]}%`:"Tunggu rekan berdiri di dekatmu 3 detik, atau gelombang selesai."}if(L("perkBar").innerHTML=m.gm==="pve"?(m.me.perks?m.me.perks.split(",").map(Y=>{let T=Y.replace(/\d+$/,""),Z=+Y.slice(T.length);return`<span>${Ni[T]?.name||T}${Z>1?" \xD7"+Z:""}</span>`}).join(""):"")+(m.me.spare?"<span>Nyawa cadangan</span>":""):"",m.me.offer&&L("perks").classList.contains("hidden")&&!(m.me.flags&1)&&Df(m.me.offer),m.ended?L("scoreNext").textContent=m.gm==="pve"&&m.wv?.[3]?`Lanjut dari gelombang ${m.wv[3]+1} (titik simpan) dalam ${$} detik`:`Ronde berikutnya dalam ${$} detik`:L("scoreNext").textContent="",m.ended||(ce.showScore&&L("score").classList.contains("hidden")?Gh(!1):!ce.showScore&&!nn&&m.tabOpen&&L("score").classList.add("hidden"),m.tabOpen=ce.showScore),L("net").textContent=`${m.ping} ms \xB7 ${To} fps`,L("buffs").innerHTML=[["dmg",m.me.dmgT],["spd",m.me.spdT]].filter(([,Y])=>Y>0).map(([Y,T])=>`<span class="buff" style="--c:#${Di[Y].color.toString(16).padStart(6,"0")}"><i></i>${Di[Y].name.replace("Rune ","")} ${Math.ceil(T)}</span>`).join(""),m.gm==="king"){let Y=[...m.players.values()].find(Z=>Z.flags&64),T=L("zoneTag");T.textContent=Y?Y.id===m.myId?"Kamu sang RAJA: bertahan hidup untuk poin!":`Buru sang raja: ${Zt(Y.id)}`:"Mahkota menunggu pemilik baru\u2026",T.style.setProperty("--c",Y?.id===m.myId?"#f2c66d":"#ff4d5e")}if(m.gm==="koth"){let Y=m.holder,T=L("zoneTag"),Z=Math.hypot(m.rx,m.rz)<Vr;T.textContent=Y===m.myId?"Kamu menguasai altar":Y===-1?"Altar diperebutkan":Y?`Altar dikuasai ${Zt(Y)}`:Z?"Bertahan di lingkaran untuk mengumpulkan poin":"Altar kosong: rebut lingkaran di tengah",T.style.setProperty("--c",Y===m.myId?"#f2c66d":Y===-1?"#b76bff":Y?"#ff4d5e":"#fff2d0")}S_()}__(e),ut.update(t,{x:m.rx,z:m.rz},m.orbMask,m.barrelMask),c_(t),h_(),Fh.update(t,m.runeMask,m.gm,m.holder,m.myId);let R=m.ev?.[0]==="eclipse"?1:0;m.eclipse=(m.eclipse||0)+(R-(m.eclipse||0))*Math.min(1,e*1.5),Mn.toneMappingExposure=1.15-.7*m.eclipse,ut.fog&&(ut.fogBase??=ut.fog.density,ut.fog.density=ut.fogBase*(1+3.5*m.eclipse));let I=m.ev?.[0]==="golden"&&!m.ev[4];Wn.visible=I,I&&(Wn.position.set(m.ev[2],1.1+Math.sin(t*2.5)*.15,m.ev[3]),Wn.rotation.y=t*1.2)}else{let i=t*.08;rn.position.set(Math.sin(i)*30,9+Math.sin(t*.2)*1.5,Math.cos(i)*30),rn.lookAt(0,3.5,0),ut.update(t,{x:0,z:0},255),Fh.update(t,15,"dm",0,0)}De.update(e),cs==="low"?Mn.render(pn,rn):fi.render(e),So+=e,Uh++,So>=1&&(To=Math.round(Uh/So),So=0,Uh=0,Af&&!document.hidden&&m.time>4&&(Eo=To<27?Eo+1:0,Eo>=3&&cs!=="low"&&(Eo=0,Co(cs==="high"?"medium":"low"),Ue.set("quality",cs))))}requestAnimationFrame(Hf);
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
