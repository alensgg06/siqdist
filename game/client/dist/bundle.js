var Xc="170";var qf=0,Qh=1,$f=2;var hd=1,qc=2,ti=3,Ai=0,Vt=1,yt=2,On=0,ks=1,rt=2,eu=3,tu=4,Yf=5,es=100,Zf=101,Jf=102,Kf=103,jf=104,Qf=200,ep=201,tp=202,np=203,_l=204,yl=205,ip=206,sp=207,rp=208,ap=209,op=210,lp=211,cp=212,hp=213,up=214,Ml=0,bl=1,Sl=2,zs=3,El=4,wl=5,Tl=6,Al=7,ud=0,dp=1,fp=2,wi=0,$c=1,Yc=2,Zc=3,Vr=4,pp=5,Jc=6,Kc=7;var dd=300,Hs=301,Vs=302,Rl=303,Cl=304,so=306,Ur=1e3,ii=1001,Pl=1002,un=1003,mp=1004;var ea=1005;var Fn=1006,Fo=1007;var ns=1008;var ai=1009,fd=1010,pd=1011,Nr=1012,jc=1013,is=1014,Bn=1015,In=1016,Qc=1017,eh=1018,Gs=1020,md=35902,gd=1021,xd=1022,Rn=1023,vd=1024,_d=1025,Fs=1026,Ws=1027,th=1028,nh=1029,yd=1030,ih=1031;var sh=1033,Ca=33776,Pa=33777,Ia=33778,La=33779,Il=35840,Ll=35841,Dl=35842,Ul=35843,Nl=36196,kl=37492,Fl=37496,Bl=37808,Ol=37809,zl=37810,Hl=37811,Vl=37812,Gl=37813,Wl=37814,Xl=37815,ql=37816,$l=37817,Yl=37818,Zl=37819,Jl=37820,Kl=37821,Da=36492,jl=36494,Ql=36495,Md=36283,ec=36284,tc=36285,nc=36286;var Ua=2300,ic=2301,Bo=2302,nu=2400,iu=2401,su=2402;var gp=3200,xp=3201;var bd=0,vp=1,Nn="",kt="srgb",rr="srgb-linear",ro="linear",lt="srgb";var gs=7680;var ru=519,_p=512,yp=513,Mp=514,Sd=515,bp=516,Sp=517,Ep=518,wp=519,sc=35044,ao=35048;var au="300 es",si=2e3,Na=2001,Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oo=Math.PI/180,rc=180/Math.PI;function Ti(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Wt(n,e,t){return Math.max(e,Math.min(t,n))}function Tp(n,e){return(n%e+e)%e}function zo(n,e,t){return(1-t)*n+t*e}function kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var re=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],x=i[8],v=s[0],g=s[3],p=s[6],_=s[1],S=s[4],y=s[7],U=s[2],A=s[5],I=s[8];return r[0]=a*v+o*_+l*U,r[3]=a*g+o*S+l*A,r[6]=a*p+o*y+l*I,r[1]=c*v+h*_+u*U,r[4]=c*g+h*S+u*A,r[7]=c*p+h*y+u*I,r[2]=d*v+f*_+x*U,r[5]=d*g+f*S+x*A,r[8]=d*p+f*y+x*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,x=t*u+i*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ho.makeScale(e,t)),this}rotate(e){return this.premultiply(Ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ho=new Ve;function Ed(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ap(){let n=kr("canvas");return n.style.display="block",n}var ou={};function Cr(n){n in ou||(ou[n]=!0,console.warn(n))}function Rp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Cp(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Pp(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ze={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(n.r=ri(n.r),n.g=ri(n.g),n.b=ri(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(n.r=Bs(n.r),n.g=Bs(n.g),n.b=Bs(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Nn?ro:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var lu=[.64,.33,.3,.6,.15,.06],cu=[.2126,.7152,.0722],hu=[.3127,.329],uu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),du=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[rr]:{primaries:lu,whitePoint:hu,transfer:ro,toXYZ:uu,fromXYZ:du,luminanceCoefficients:cu,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:lu,whitePoint:hu,transfer:lt,toXYZ:uu,fromXYZ:du,luminanceCoefficients:cu,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}});var xs,ac=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xs===void 0&&(xs=kr("canvas")),xs.width=e.width,xs.height=e.height;let i=xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=kr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ri(t[i]/255)*255):t[i]=ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ip=0,ka=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vo(s[a].image)):r.push(Vo(s[a]))}else r=Vo(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Vo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ac.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lp=0,Xt=class n extends Ri{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ii,s=ii,r=Fn,a=ns,o=Rn,l=ai,c=n.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Ti(),this.name="",this.source=new ka(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ur:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ur:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=dd;Xt.DEFAULT_ANISOTROPY=1;var ft=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],x=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,y=(f+1)/2,U=(p+1)/2,A=(h+d)/4,I=(u+v)/4,R=(x+g)/4;return S>y&&S>U?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=A/i,r=I/i):y>U?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=R/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=I/r,s=R/r),this.set(i,s,r,t),this}let _=Math.sqrt((g-x)*(g-x)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-x)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oc=class extends Ri{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Xt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ka(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends oc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Fa=class extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var lc=class extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ci=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],x=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=x,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==x){let g=1-o,p=l*d+c*f+h*x+u*v,_=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let U=Math.sqrt(S),A=Math.atan2(U,p*_);g=Math.sin(g*A)/U,o=Math.sin(o*A)/U}let y=o*_;if(l=l*g+d*y,c=c*g+f*y,h=h*g+x*y,u=u*g+v*y,g===1-o){let U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+h*u+l*f-c*d,e[t+1]=l*x+h*d+c*u-o*f,e[t+2]=c*x+h*f+o*d-l*u,e[t+3]=h*x-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"YZX":this._x=d*h*u+c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u-d*f*x;break;case"XZY":this._x=d*h*u-c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Go.copy(this).projectOnVector(e),this.sub(Go)}reflect(e){return this.sub(Go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Go=new D,fu=new Ci,oi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ta.copy(i.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),na.subVectors(this.max,_r),vs.subVectors(e.a,_r),_s.subVectors(e.b,_r),ys.subVectors(e.c,_r),vi.subVectors(_s,vs),_i.subVectors(ys,_s),$i.subVectors(vs,ys);let t=[0,-vi.z,vi.y,0,-_i.z,_i.y,0,-$i.z,$i.y,vi.z,0,-vi.x,_i.z,0,-_i.x,$i.z,0,-$i.x,-vi.y,vi.x,0,-_i.y,_i.x,0,-$i.y,$i.x,0];return!Wo(t,vs,_s,ys,na)||(t=[1,0,0,0,1,0,0,0,1],!Wo(t,vs,_s,ys,na))?!1:(ia.crossVectors(vi,_i),t=[ia.x,ia.y,ia.z],Wo(t,vs,_s,ys,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Jn=[new D,new D,new D,new D,new D,new D,new D,new D],wn=new D,ta=new oi,vs=new D,_s=new D,ys=new D,vi=new D,_i=new D,$i=new D,_r=new D,na=new D,ia=new D,Yi=new D;function Wo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Yi.fromArray(n,r);let o=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),h=i.dot(Yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Dp=new oi,yr=new D,Xo=new D,Pi=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Dp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(yr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(Xo)),this.expandByPoint(yr.copy(e.center).sub(Xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new D,qo=new D,sa=new D,yi=new D,$o=new D,ra=new D,Yo=new D,Ba=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){qo.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(qo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(sa),o=yi.dot(this.direction),l=-yi.dot(sa),c=yi.lengthSq(),h=Math.abs(1-a*a),u,d,f,x;if(h>0)if(u=a*l-o,d=a*o-l,x=r*h,u>=0)if(d>=-x)if(d<=x){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qo).addScaledVector(sa,d),f}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);let i=Kn.dot(this.direction),s=Kn.dot(Kn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,s,r){$o.subVectors(t,e),ra.subVectors(i,e),Yo.crossVectors($o,ra);let a=this.direction.dot(Yo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,e);let l=o*this.direction.dot(ra.crossVectors(yi,ra));if(l<0)return null;let c=o*this.direction.dot($o.cross(yi));if(c<0||l+c>a)return null;let h=-o*yi.dot(Yo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,d,f,x,v,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,f,x,v,g)}set(e,t,i,s,r,a,o,l,c,h,u,d,f,x,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),a=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,x=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+x*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,x=c*h,v=c*u;t[0]=d+v*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-x,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,x=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,x=o*h,v=o*u;t[0]=l*h,t[4]=x*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,x=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=x*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+x,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,x=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-x,t[2]=x*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Up,e,Np)}lookAt(e,t,i){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Mi.crossVectors(i,cn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Mi.crossVectors(i,cn)),Mi.normalize(),aa.crossVectors(cn,Mi),s[0]=Mi.x,s[4]=aa.x,s[8]=cn.x,s[1]=Mi.y,s[5]=aa.y,s[9]=cn.y,s[2]=Mi.z,s[6]=aa.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],x=i[2],v=i[6],g=i[10],p=i[14],_=i[3],S=i[7],y=i[11],U=i[15],A=s[0],I=s[4],R=s[8],E=s[12],M=s[1],N=s[5],V=s[9],z=s[13],Y=s[2],J=s[6],W=s[10],P=s[14],T=s[3],H=s[7],Z=s[11],X=s[15];return r[0]=a*A+o*M+l*Y+c*T,r[4]=a*I+o*N+l*J+c*H,r[8]=a*R+o*V+l*W+c*Z,r[12]=a*E+o*z+l*P+c*X,r[1]=h*A+u*M+d*Y+f*T,r[5]=h*I+u*N+d*J+f*H,r[9]=h*R+u*V+d*W+f*Z,r[13]=h*E+u*z+d*P+f*X,r[2]=x*A+v*M+g*Y+p*T,r[6]=x*I+v*N+g*J+p*H,r[10]=x*R+v*V+g*W+p*Z,r[14]=x*E+v*z+g*P+p*X,r[3]=_*A+S*M+y*Y+U*T,r[7]=_*I+S*N+y*J+U*H,r[11]=_*R+S*V+y*W+U*Z,r[15]=_*E+S*z+y*P+U*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],x=e[3],v=e[7],g=e[11],p=e[15];return x*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*f-i*l*f)+v*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+g*(+t*c*u-t*o*f-r*a*u+i*a*f+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],x=e[12],v=e[13],g=e[14],p=e[15],_=u*g*c-v*d*c+v*l*f-o*g*f-u*l*p+o*d*p,S=x*d*c-h*g*c-x*l*f+a*g*f+h*l*p-a*d*p,y=h*v*c-x*u*c+x*o*f-a*v*f-h*o*p+a*u*p,U=x*u*l-h*v*l-x*o*d+a*v*d+h*o*g-a*u*g,A=t*_+i*S+s*y+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return e[0]=_*I,e[1]=(v*d*r-u*g*r-v*s*f+i*g*f+u*s*p-i*d*p)*I,e[2]=(o*g*r-v*l*r+v*s*c-i*g*c-o*s*p+i*l*p)*I,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*f-i*l*f)*I,e[4]=S*I,e[5]=(h*g*r-x*d*r+x*s*f-t*g*f-h*s*p+t*d*p)*I,e[6]=(x*l*r-a*g*r-x*s*c+t*g*c+a*s*p-t*l*p)*I,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*I,e[8]=y*I,e[9]=(x*u*r-h*v*r-x*i*f+t*v*f+h*i*p-t*u*p)*I,e[10]=(a*v*r-x*o*r+x*i*c-t*v*c-a*i*p+t*o*p)*I,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*f-t*o*f)*I,e[12]=U*I,e[13]=(h*v*s-x*u*s+x*i*d-t*v*d-h*i*g+t*u*g)*I,e[14]=(x*o*s-a*v*s-x*i*l+t*v*l+a*i*g-t*o*g)*I,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*d+t*o*d)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,x=r*u,v=a*h,g=a*u,p=o*u,_=l*c,S=l*h,y=l*u,U=i.x,A=i.y,I=i.z;return s[0]=(1-(v+p))*U,s[1]=(f+y)*U,s[2]=(x-S)*U,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+p))*A,s[6]=(g+_)*A,s[7]=0,s[8]=(x+S)*I,s[9]=(g-_)*I,s[10]=(1-(d+v))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ms.set(s[0],s[1],s[2]).length(),a=Ms.set(s[4],s[5],s[6]).length(),o=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Tn.copy(this);let c=1/r,h=1/a,u=1/o;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,t.setFromRotationMatrix(Tn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=si){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,x;if(o===si)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Na)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=si){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*c,f=(i+s)*h,x,v;if(o===si)x=(a+r)*u,v=-2*u;else if(o===Na)x=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ms=new D,Tn=new pt,Up=new D(0,0,0),Np=new D(1,1,1),Mi=new D,aa=new D,cn=new D,pu=new pt,mu=new Ci,zn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mu.setFromEuler(this),this.setFromQuaternion(mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var Oa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kp=0,gu=new D,bs=new Ci,jn=new pt,oa=new D,Mr=new D,Fp=new D,Bp=new Ci,xu=new D(1,0,0),vu=new D(0,1,0),_u=new D(0,0,1),yu={type:"added"},Op={type:"removed"},Ss={type:"childadded",child:null},Zo={type:"childremoved",child:null},It=class n extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new zn,i=new Ci,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ve}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(vu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return gu.copy(e).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(vu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oa.copy(e):oa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Mr,oa,this.up):jn.lookAt(oa,Mr,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(jn),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yu),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Op),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yu),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,Fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Bp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};It.DEFAULT_UP=new D(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new D,Qn=new D,Jo=new D,ei=new D,Es=new D,ws=new D,Mu=new D,Ko=new D,jo=new D,Qo=new D,el=new ft,tl=new ft,nl=new ft,Ei=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),An.subVectors(e,t),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){An.subVectors(s,t),Qn.subVectors(i,t),Jo.subVectors(e,t);let a=An.dot(An),o=An.dot(Qn),l=An.dot(Jo),c=Qn.dot(Qn),h=Qn.dot(Jo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-f-x,x,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(o,ei.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return el.setScalar(0),tl.setScalar(0),nl.setScalar(0),el.fromBufferAttribute(e,t),tl.fromBufferAttribute(e,i),nl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(el,r.x),a.addScaledVector(tl,r.y),a.addScaledVector(nl,r.z),a}static isFrontFacing(e,t,i,s){return An.subVectors(i,t),Qn.subVectors(e,t),An.cross(Qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),An.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Es.subVectors(s,i),ws.subVectors(r,i),Ko.subVectors(e,i);let l=Es.dot(Ko),c=ws.dot(Ko);if(l<=0&&c<=0)return t.copy(i);jo.subVectors(e,s);let h=Es.dot(jo),u=ws.dot(jo);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Es,a);Qo.subVectors(e,r);let f=Es.dot(Qo),x=ws.dot(Qo);if(x>=0&&f<=x)return t.copy(r);let v=f*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(ws,o);let g=h*x-f*u;if(g<=0&&u-h>=0&&f-x>=0)return Mu.subVectors(r,s),o=(u-h)/(u-h+(f-x)),t.copy(s).addScaledVector(Mu,o);let p=1/(g+v+d);return a=v*p,o=d*p,t.copy(i).addScaledVector(Es,a).addScaledVector(ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},la={h:0,s:0,l:0};function il(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ae=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=Tp(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=il(a,r,e+1/3),this.g=il(a,r,e),this.b=il(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let i=wd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Ze.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Wt(Zt.r*255,0,255))*65536+Math.round(Wt(Zt.g*255,0,255))*256+Math.round(Wt(Zt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Zt.copy(this),t);let i=Zt.r,s=Zt.g,r=Zt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=kt){Ze.fromWorkingColorSpace(Zt.copy(this),e);let t=Zt.r,i=Zt.g,s=Zt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(la);let i=zo(bi.h,la.h,t),s=zo(bi.s,la.s,t),r=zo(bi.l,la.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new Ae;Ae.NAMES=wd;var zp=0,li=class extends Ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Ti(),this.name="",this.blending=ks,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=yl,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_l&&(i.blendSrc=this.blendSrc),this.blendDst!==yl&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ct=class extends li{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new D,ca=new re,At=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sc,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sc&&(e.usage=this.usage),e}};var za=class extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ha=class extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Xe=class extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}},Hp=0,_n=new pt,sl=new It,Ts=new D,hn=new oi,br=new oi,Ht=new D,Mt=class n extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ed(e)?Ha:za)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,i){return _n.makeTranslation(e,t,i),this.applyMatrix4(_n),this}scale(e,t,i){return _n.makeScale(e,t,i),this.applyMatrix4(_n),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xe(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];br.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(hn.min,br.min),hn.expandByPoint(Ht),Ht.addVectors(hn.max,br.max),hn.expandByPoint(Ht)):(hn.expandByPoint(br.min),hn.expandByPoint(br.max))}hn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ht.fromBufferAttribute(o,c),l&&(Ts.fromBufferAttribute(e,c),Ht.add(Ts)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new D,l[R]=new D;let c=new D,h=new D,u=new D,d=new re,f=new re,x=new re,v=new D,g=new D;function p(R,E,M){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,E),x.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),x.sub(d);let N=1/(f.x*x.y-x.x*f.y);isFinite(N)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(N),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(N),o[R].add(v),o[E].add(v),o[M].add(v),l[R].add(g),l[E].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,E=_.length;R<E;++R){let M=_[R],N=M.start,V=M.count;for(let z=N,Y=N+V;z<Y;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let S=new D,y=new D,U=new D,A=new D;function I(R){U.fromBufferAttribute(s,R),A.copy(U);let E=o[R];S.copy(E),S.sub(U.multiplyScalar(U.dot(E))).normalize(),y.crossVectors(A,E);let N=y.dot(l[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,N)}for(let R=0,E=_.length;R<E;++R){let M=_[R],N=M.start,V=M.count;for(let z=N,Y=N+V;z<Y;z+=3)I(e.getX(z+0)),I(e.getX(z+1)),I(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let x=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,x=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[x++]=c[f++]}return new At(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bu=new pt,Zi=new Ba,ha=new Pi,Su=new D,ua=new D,da=new D,fa=new D,rl=new D,pa=new D,Eu=new D,ma=new D,le=class extends It{constructor(e=new Mt,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(rl.fromBufferAttribute(u,e),a?pa.addScaledVector(rl,h):pa.addScaledVector(rl.sub(t),h))}t.add(pa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(ha.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(ha,Su)===null||Zi.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(bu.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(bu),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){let g=d[x],p=a[g.materialIndex],_=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,U=S;y<U;y+=3){let A=o.getX(y),I=o.getX(y+1),R=o.getX(y+2);s=ga(this,p,e,i,c,h,u,A,I,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=x,p=v;g<p;g+=3){let _=o.getX(g),S=o.getX(g+1),y=o.getX(g+2);s=ga(this,a,e,i,c,h,u,_,S,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){let g=d[x],p=a[g.materialIndex],_=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,U=S;y<U;y+=3){let A=y,I=y+1,R=y+2;s=ga(this,p,e,i,c,h,u,A,I,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=x,p=v;g<p;g+=3){let _=g,S=g+1,y=g+2;s=ga(this,a,e,i,c,h,u,_,S,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Vp(n,e,t,i,s,r,a,o){let l;if(e.side===Vt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ai,o),l===null)return null;ma.copy(o),ma.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ma);return c<t.near||c>t.far?null:{distance:c,point:ma.clone(),object:n}}function ga(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ua),n.getVertexPosition(l,da),n.getVertexPosition(c,fa);let h=Vp(n,e,t,i,ua,da,fa,Eu);if(h){let u=new D;Ei.getBarycoord(Eu,ua,da,fa,u),s&&(h.uv=Ei.getInterpolatedAttribute(s,o,l,c,u,new re)),r&&(h.uv1=Ei.getInterpolatedAttribute(r,o,l,c,u,new re)),a&&(h.normal=Ei.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};Ei.getNormal(ua,da,fa,d.normal),h.face=d,h.barycoord=u}return h}var tt=class n extends Mt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function x(v,g,p,_,S,y,U,A,I,R,E){let M=y/I,N=U/R,V=y/2,z=U/2,Y=A/2,J=I+1,W=R+1,P=0,T=0,H=new D;for(let Z=0;Z<W;Z++){let X=Z*N-z;for(let se=0;se<J;se++){let Me=se*M-V;H[v]=Me*_,H[g]=X*S,H[p]=Y,c.push(H.x,H.y,H.z),H[v]=0,H[g]=0,H[p]=A>0?1:-1,h.push(H.x,H.y,H.z),u.push(se/I),u.push(1-Z/R),P+=1}}for(let Z=0;Z<R;Z++)for(let X=0;X<I;X++){let se=d+X+J*Z,Me=d+X+J*(Z+1),K=d+(X+1)+J*(Z+1),ne=d+(X+1)+J*Z;l.push(se,Me,ne),l.push(Me,K,ne),T+=6}o.addGroup(f,T,E),f+=T,d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Qt(n){let e={};for(let t=0;t<n.length;t++){let i=Xs(n[t]);for(let s in i)e[s]=i[s]}return e}function Gp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Td(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Vn={clone:Xs,merge:Qt},Wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mt=class extends li{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wp,this.fragmentShader=Xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=Gp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Va=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Si=new D,wu=new re,Tu=new re,Jt=class extends Va{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rc*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Tu),t.subVectors(Tu,wu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},As=-90,Rs=1,cc=class extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(As,Rs,e,t);s.layers=this.layers,this.add(s);let r=new Jt(As,Rs,e,t);r.layers=this.layers,this.add(r);let a=new Jt(As,Rs,e,t);a.layers=this.layers,this.add(a);let o=new Jt(As,Rs,e,t);o.layers=this.layers,this.add(o);let l=new Jt(As,Rs,e,t);l.layers=this.layers,this.add(l);let c=new Jt(As,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Na)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Ga=class extends Xt{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},hc=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ga(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tt(5,5,5),r=new mt({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:On});r.uniforms.tEquirect.value=t;let a=new le(s,r),o=t.minFilter;return t.minFilter===ns&&(t.minFilter=Fn),new cc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},al=new D,qp=new D,$p=new Ve,ni=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=al.subVectors(i,t).cross(qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(al),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||$p.getNormalMatrix(e),s=this.coplanarPoint(al).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new Pi,xa=new D,Fr=class{constructor(e=new ni,t=new ni,i=new ni,s=new ni,r=new ni,a=new ni){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],x=s[9],v=s[10],g=s[11],p=s[12],_=s[13],S=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,g-f,y-p).normalize(),i[1].setComponents(l+r,d+c,g+f,y+p).normalize(),i[2].setComponents(l+a,d+h,g+x,y+_).normalize(),i[3].setComponents(l-a,d-h,g-x,y-_).normalize(),i[4].setComponents(l-o,d-u,g-v,y-S).normalize(),t===si)i[5].setComponents(l+o,d+u,g+v,y+S).normalize();else if(t===Na)i[5].setComponents(o,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(xa.x=s.normal.x>0?e.max.x:e.min.x,xa.y=s.normal.y>0?e.max.y:e.min.y,xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ad(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Yp(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){let x=u[d],v=u[f];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){let v=u[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var sn=class n extends Mt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],x=[],v=[],g=[];for(let p=0;p<h;p++){let _=p*d-a;for(let S=0;S<c;S++){let y=S*u-r;x.push(y,-_,0),v.push(0,0,1),g.push(S/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let S=_+c*p,y=_+c*(p+1),U=_+1+c*(p+1),A=_+1+c*p;f.push(S,y,A),f.push(y,U,A)}this.setIndex(f),this.setAttribute("position",new Xe(x,3)),this.setAttribute("normal",new Xe(v,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
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
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
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
#endif`,nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
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
#endif`,sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lm=`#ifdef USE_IRIDESCENCE
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
#endif`,cm=`#ifdef USE_BUMPMAP
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vm=`#define PI 3.141592653589793
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
} // validated`,_m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ym=`vec3 transformedNormal = objectNormal;
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
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
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
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
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
#endif`,$m=`struct PhysicalMaterial {
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
}`,Ym=`
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s0=`#if defined( USE_POINTS_UV )
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
#endif`,r0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`#ifdef USE_MORPHTARGETS
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
#endif`,u0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
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
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D0=`float getShadowMask() {
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
}`,U0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,k0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z0=`uniform sampler2D t2D;
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`#include <common>
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
}`,tg=`#if DEPTH_PACKING == 3200
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
}`,ng=`#define DISTANCE
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
}`,ig=`#define DISTANCE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
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
}`,og=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#define LAMBERT
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
}`,ug=`#define LAMBERT
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
}`,dg=`#define MATCAP
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
}`,fg=`#define MATCAP
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
}`,pg=`#define NORMAL
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
}`,mg=`#define NORMAL
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
}`,gg=`#define PHONG
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
}`,xg=`#define PHONG
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
}`,vg=`#define STANDARD
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
}`,_g=`#define STANDARD
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
}`,yg=`#define TOON
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
}`,Mg=`#define TOON
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
}`,bg=`uniform float size;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,wg=`uniform vec3 color;
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
}`,Tg=`uniform float rotation;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Zp,alphahash_pars_fragment:Jp,alphamap_fragment:Kp,alphamap_pars_fragment:jp,alphatest_fragment:Qp,alphatest_pars_fragment:em,aomap_fragment:tm,aomap_pars_fragment:nm,batching_pars_vertex:im,batching_vertex:sm,begin_vertex:rm,beginnormal_vertex:am,bsdfs:om,iridescence_fragment:lm,bumpmap_pars_fragment:cm,clipping_planes_fragment:hm,clipping_planes_pars_fragment:um,clipping_planes_pars_vertex:dm,clipping_planes_vertex:fm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:xm,common:vm,cube_uv_reflection_fragment:_m,defaultnormal_vertex:ym,displacementmap_pars_vertex:Mm,displacementmap_vertex:bm,emissivemap_fragment:Sm,emissivemap_pars_fragment:Em,colorspace_fragment:wm,colorspace_pars_fragment:Tm,envmap_fragment:Am,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Cm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Hm,envmap_vertex:Im,fog_vertex:Lm,fog_pars_vertex:Dm,fog_fragment:Um,fog_pars_fragment:Nm,gradientmap_pars_fragment:km,lightmap_pars_fragment:Fm,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:Om,lights_pars_begin:zm,lights_toon_fragment:Vm,lights_toon_pars_fragment:Gm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:qm,lights_physical_pars_fragment:$m,lights_fragment_begin:Ym,lights_fragment_maps:Zm,lights_fragment_end:Jm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:e0,map_fragment:t0,map_pars_fragment:n0,map_particle_fragment:i0,map_particle_pars_fragment:s0,metalnessmap_fragment:r0,metalnessmap_pars_fragment:a0,morphinstance_vertex:o0,morphcolor_vertex:l0,morphnormal_vertex:c0,morphtarget_pars_vertex:h0,morphtarget_vertex:u0,normal_fragment_begin:d0,normal_fragment_maps:f0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:_0,clearcoat_pars_fragment:y0,iridescence_pars_fragment:M0,opaque_fragment:b0,packing:S0,premultiplied_alpha_fragment:E0,project_vertex:w0,dithering_fragment:T0,dithering_pars_fragment:A0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:C0,shadowmap_pars_fragment:P0,shadowmap_pars_vertex:I0,shadowmap_vertex:L0,shadowmask_pars_fragment:D0,skinbase_vertex:U0,skinning_pars_vertex:N0,skinning_vertex:k0,skinnormal_vertex:F0,specularmap_fragment:B0,specularmap_pars_fragment:O0,tonemapping_fragment:z0,tonemapping_pars_fragment:H0,transmission_fragment:V0,transmission_pars_fragment:G0,uv_pars_fragment:W0,uv_pars_vertex:X0,uv_vertex:q0,worldpos_vertex:$0,background_vert:Y0,background_frag:Z0,backgroundCube_vert:J0,backgroundCube_frag:K0,cube_vert:j0,cube_frag:Q0,depth_vert:eg,depth_frag:tg,distanceRGBA_vert:ng,distanceRGBA_frag:ig,equirect_vert:sg,equirect_frag:rg,linedashed_vert:ag,linedashed_frag:og,meshbasic_vert:lg,meshbasic_frag:cg,meshlambert_vert:hg,meshlambert_frag:ug,meshmatcap_vert:dg,meshmatcap_frag:fg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:xg,meshphysical_vert:vg,meshphysical_frag:_g,meshtoon_vert:yg,meshtoon_frag:Mg,points_vert:bg,points_frag:Sg,shadow_vert:Eg,shadow_frag:wg,sprite_vert:Tg,sprite_frag:Ag},he={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Un={basic:{uniforms:Qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ae(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Qt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Qt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ae(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Qt([he.points,he.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Qt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Qt([he.common,he.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Qt([he.sprite,he.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Qt([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Qt([he.lights,he.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Un.physical={uniforms:Qt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var va={r:0,b:0,g:0},Ki=new zn,Rg=new pt;function Cg(n,e,t,i,s,r,a){let o=new Ae(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function x(_){let S=_.isScene===!0?_.background:null;return S&&S.isTexture&&(S=(_.backgroundBlurriness>0?t:e).get(S)),S}function v(_){let S=!1,y=x(_);y===null?p(o,l):y&&y.isColor&&(p(y,1),S=!0);let U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,S){let y=x(S);y&&(y.isCubeTexture||y.mapping===so)?(h===void 0&&(h=new le(new tt(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:Xs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ki.copy(S.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(Ki)),h.material.toneMapped=Ze.getTransfer(y.colorSpace)!==lt,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new le(new sn(2,2),new mt({name:"BackgroundMaterial",uniforms:Xs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,S){_.getRGB(va,Td(n)),i.buffers.color.setClear(va.r,va.g,va.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:v,addToRenderList:g}}function Pg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(M,N,V,z,Y){let J=!1,W=u(z,V,N);r!==W&&(r=W,c(r.object)),J=f(M,z,V,Y),J&&x(M,z,V,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(M,N,V,z),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,N,V){let z=V.wireframe===!0,Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let J=Y[N.id];J===void 0&&(J={},Y[N.id]=J);let W=J[z];return W===void 0&&(W=d(l()),J[z]=W),W}function d(M){let N=[],V=[],z=[];for(let Y=0;Y<t;Y++)N[Y]=0,V[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:z,object:M,attributes:{},index:null}}function f(M,N,V,z){let Y=r.attributes,J=N.attributes,W=0,P=V.getAttributes();for(let T in P)if(P[T].location>=0){let Z=Y[T],X=J[T];if(X===void 0&&(T==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),T==="instanceColor"&&M.instanceColor&&(X=M.instanceColor)),Z===void 0||Z.attribute!==X||X&&Z.data!==X.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function x(M,N,V,z){let Y={},J=N.attributes,W=0,P=V.getAttributes();for(let T in P)if(P[T].location>=0){let Z=J[T];Z===void 0&&(T==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),T==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));let X={};X.attribute=Z,Z&&Z.data&&(X.data=Z.data),Y[T]=X,W++}r.attributes=Y,r.attributesNum=W,r.index=z}function v(){let M=r.newAttributes;for(let N=0,V=M.length;N<V;N++)M[N]=0}function g(M){p(M,0)}function p(M,N){let V=r.newAttributes,z=r.enabledAttributes,Y=r.attributeDivisors;V[M]=1,z[M]===0&&(n.enableVertexAttribArray(M),z[M]=1),Y[M]!==N&&(n.vertexAttribDivisor(M,N),Y[M]=N)}function _(){let M=r.newAttributes,N=r.enabledAttributes;for(let V=0,z=N.length;V<z;V++)N[V]!==M[V]&&(n.disableVertexAttribArray(V),N[V]=0)}function S(M,N,V,z,Y,J,W){W===!0?n.vertexAttribIPointer(M,N,V,Y,J):n.vertexAttribPointer(M,N,V,z,Y,J)}function y(M,N,V,z){v();let Y=z.attributes,J=V.getAttributes(),W=N.defaultAttributeValues;for(let P in J){let T=J[P];if(T.location>=0){let H=Y[P];if(H===void 0&&(P==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),P==="instanceColor"&&M.instanceColor&&(H=M.instanceColor)),H!==void 0){let Z=H.normalized,X=H.itemSize,se=e.get(H);if(se===void 0)continue;let Me=se.buffer,K=se.type,ne=se.bytesPerElement,xe=K===n.INT||K===n.UNSIGNED_INT||H.gpuType===jc;if(H.isInterleavedBufferAttribute){let ue=H.data,Ie=ue.stride,Be=H.offset;if(ue.isInstancedInterleavedBuffer){for(let $e=0;$e<T.locationSize;$e++)p(T.location+$e,ue.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let $e=0;$e<T.locationSize;$e++)g(T.location+$e);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let $e=0;$e<T.locationSize;$e++)S(T.location+$e,X/T.locationSize,K,Z,Ie*ne,(Be+X/T.locationSize*$e)*ne,xe)}else{if(H.isInstancedBufferAttribute){for(let ue=0;ue<T.locationSize;ue++)p(T.location+ue,H.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ue=0;ue<T.locationSize;ue++)g(T.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let ue=0;ue<T.locationSize;ue++)S(T.location+ue,X/T.locationSize,K,Z,X*ne,X/T.locationSize*ue*ne,xe)}}else if(W!==void 0){let Z=W[P];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(T.location,Z);break;case 3:n.vertexAttrib3fv(T.location,Z);break;case 4:n.vertexAttrib4fv(T.location,Z);break;default:n.vertexAttrib1fv(T.location,Z)}}}}_()}function U(){R();for(let M in i){let N=i[M];for(let V in N){let z=N[V];for(let Y in z)h(z[Y].object),delete z[Y];delete N[V]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;let N=i[M.id];for(let V in N){let z=N[V];for(let Y in z)h(z[Y].object),delete z[Y];delete N[V]}delete i[M.id]}function I(M){for(let N in i){let V=i[N];if(V[M.id]===void 0)continue;let z=V[M.id];for(let Y in z)h(z[Y].object),delete z[Y];delete V[M.id]}}function R(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function Ig(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)a(c[x],h[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let x=0;for(let v=0;v<u;v++)x+=h[v]*d[v];t.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Lg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Rn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let R=I===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ai&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Bn&&!R)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:U,maxSamples:A}}function Dg(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ni,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let x=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):c();else{let _=r?0:i,S=_*4,y=p.clippingState||null;l.value=y,y=h(x,d,S,f);for(let U=0;U!==S;++U)y[U]=t[U];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,x){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,x!==!0||g===null){let p=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,y=f;S!==v;++S,y+=4)a.copy(u[S]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Ug(n){let e=new WeakMap;function t(a,o){return o===Rl?a.mapping=Hs:o===Cl&&(a.mapping=Vs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Rl||o===Cl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new hc(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var qs=class extends Va{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ns=4,Au=[.125,.215,.35,.446,.526,.582],ts=20,ol=new qs,Ru=new Ae,ll=null,cl=0,hl=0,ul=!1,Qi=(1+Math.sqrt(5))/2,Cs=1/Qi,Cu=[new D(-Qi,Cs,0),new D(Qi,Cs,0),new D(-Cs,0,Qi),new D(Cs,0,Qi),new D(0,Qi,-Cs),new D(0,Qi,Cs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],$s=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ll,cl,hl),this._renderer.xr.enabled=ul,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:In,format:Rn,colorSpace:rr,depthBuffer:!1},s=Pu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ng(r)),this._blurMaterial=kg(r,e,t)}return s}_compileMaterial(e){let t=new le(this._lodPlanes[0],e);this._renderer.compile(t,ol)}_sceneToCubeUV(e,t,i,s){let o=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ru),h.toneMapping=wi,h.autoClear=!1;let f=new Ct({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),x=new le(new tt,f),v=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(Ru),v=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let S=this._cubeSize;_a(s,_*S,p>2?S:0,S,S),h.setRenderTarget(s),v&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Hs||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;_a(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ol)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Cu[(s-r-1)%Cu.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new le(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ts-1),v=r/x,g=isFinite(r)?1+Math.floor(h*v):ts;g>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ts}`);let p=[],_=0;for(let I=0;I<ts;++I){let R=I/v,E=Math.exp(-R*R/2);p.push(E),I===0?_+=E:I<g&&(_+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:S}=this;d.dTheta.value=x,d.mipInt.value=S-i;let y=this._sizeLods[s],U=3*y*(s>S-Ns?s-S+Ns:0),A=4*(this._cubeSize-y);_a(t,U,A,3*y,2*y),l.setRenderTarget(t),l.render(u,ol)}};function Ng(n){let e=[],t=[],i=[],s=n,r=n-Ns+1+Au.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ns?l=Au[a-n+Ns-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,v=3,g=2,p=1,_=new Float32Array(v*x*f),S=new Float32Array(g*x*f),y=new Float32Array(p*x*f);for(let A=0;A<f;A++){let I=A%3*2/3-1,R=A>2?0:-1,E=[I,R,0,I+2/3,R,0,I+2/3,R+1,0,I,R,0,I+2/3,R+1,0,I,R+1,0];_.set(E,v*x*A),S.set(d,g*x*A);let M=[A,A,A,A,A,A];y.set(M,p*x*A)}let U=new Mt;U.setAttribute("position",new At(_,v)),U.setAttribute("uv",new At(S,g)),U.setAttribute("faceIndex",new At(y,p)),e.push(U),s>Ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pu(n,e,t){let i=new en(n,e,t);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function kg(n,e,t){let i=new Float32Array(ts),s=new D(0,1,0);return new mt({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rh(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Iu(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Lu(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function rh(){return`

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
	`}function Fg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Rl||l===Cl,h=l===Hs||l===Vs;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new $s(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new $s(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Bg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Cr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Og(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);for(let x in d.morphAttributes){let v=d.morphAttributes[x];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let x in d)e.update(d[x],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let x in f){let v=f[x];for(let g=0,p=v.length;g<p;g++)e.update(v[g],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,x=u.attributes.position,v=0;if(f!==null){let _=f.array;v=f.version;for(let S=0,y=_.length;S<y;S+=3){let U=_[S+0],A=_[S+1],I=_[S+2];d.push(U,A,A,I,I,U)}}else if(x!==void 0){let _=x.array;v=x.version;for(let S=0,y=_.length/3-1;S<y;S+=3){let U=S+0,A=S+1,I=S+2;d.push(U,A,A,I,I,U)}}else return;let g=new(Ed(d)?Ha:za)(d,1);g.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function zg(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,x){x!==0&&(n.drawElementsInstanced(i,f,r,d*a,x),t.update(f,i,x))}function h(d,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,x);let g=0;for(let p=0;p<x;p++)g+=f[p];t.update(g,i,1)}function u(d,f,x,v){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,x);let p=0;for(let _=0;_<x;_++)p+=f[_]*v[_];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Vg(n,e,t){let i=new WeakMap,s=new ft;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let E=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],S=0;f===!0&&(S=1),x===!0&&(S=2),v===!0&&(S=3);let y=o.attributes.position.count*S,U=1;y>e.maxTextureSize&&(U=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*U*4*u),I=new Fa(A,y,U,u);I.type=Bn,I.needsUpdate=!0;let R=S*4;for(let M=0;M<u;M++){let N=g[M],V=p[M],z=_[M],Y=y*U*4*M;for(let J=0;J<N.count;J++){let W=J*R;f===!0&&(s.fromBufferAttribute(N,J),A[Y+W+0]=s.x,A[Y+W+1]=s.y,A[Y+W+2]=s.z,A[Y+W+3]=0),x===!0&&(s.fromBufferAttribute(V,J),A[Y+W+4]=s.x,A[Y+W+5]=s.y,A[Y+W+6]=s.z,A[Y+W+7]=0),v===!0&&(s.fromBufferAttribute(z,J),A[Y+W+8]=s.x,A[Y+W+9]=s.y,A[Y+W+10]=s.z,A[Y+W+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new re(y,U)},i.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Gg(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Wa=class extends Xt{constructor(e,t,i,s,r,a,o,l,c,h=Fs){if(h!==Fs&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Fs&&(i=is),i===void 0&&h===Ws&&(i=Gs),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rd=new Xt,Du=new Wa(1,1),Cd=new Fa,Pd=new lc,Id=new Ga,Uu=[],Nu=[],ku=new Float32Array(16),Fu=new Float32Array(9),Bu=new Float32Array(4);function ar(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Uu[s];if(r===void 0&&(r=new Float32Array(s),Uu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function oo(n,e){let t=Nu[e];t===void 0&&(t=new Int32Array(e),Nu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Wg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Xg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function $g(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function Yg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;Bu.set(i),n.uniformMatrix2fv(this.addr,!1,Bu),Bt(t,i)}}function Zg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;Fu.set(i),n.uniformMatrix3fv(this.addr,!1,Fu),Bt(t,i)}}function Jg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;ku.set(i),n.uniformMatrix4fv(this.addr,!1,ku),Bt(t,i)}}function Kg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function Qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function ex(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function tx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function sx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function rx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Du.compareFunction=Sd,r=Du):r=Rd,t.setTexture2D(e||r,s)}function ax(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Pd,s)}function ox(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Id,s)}function lx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Cd,s)}function cx(n){switch(n){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return $g;case 35674:return Yg;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return Kg;case 35667:case 35671:return jg;case 35668:case 35672:return Qg;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return lx}}function hx(n,e){n.uniform1fv(this.addr,e)}function ux(n,e){let t=ar(e,this.size,2);n.uniform2fv(this.addr,t)}function dx(n,e){let t=ar(e,this.size,3);n.uniform3fv(this.addr,t)}function fx(n,e){let t=ar(e,this.size,4);n.uniform4fv(this.addr,t)}function px(n,e){let t=ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function mx(n,e){let t=ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gx(n,e){let t=ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xx(n,e){n.uniform1iv(this.addr,e)}function vx(n,e){n.uniform2iv(this.addr,e)}function _x(n,e){n.uniform3iv(this.addr,e)}function yx(n,e){n.uniform4iv(this.addr,e)}function Mx(n,e){n.uniform1uiv(this.addr,e)}function bx(n,e){n.uniform2uiv(this.addr,e)}function Sx(n,e){n.uniform3uiv(this.addr,e)}function Ex(n,e){n.uniform4uiv(this.addr,e)}function wx(n,e,t){let i=this.cache,s=e.length,r=oo(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Rd,r[a])}function Tx(n,e,t){let i=this.cache,s=e.length,r=oo(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Pd,r[a])}function Ax(n,e,t){let i=this.cache,s=e.length,r=oo(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Id,r[a])}function Rx(n,e,t){let i=this.cache,s=e.length,r=oo(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Cd,r[a])}function Cx(n){switch(n){case 5126:return hx;case 35664:return ux;case 35665:return dx;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return xx;case 35667:case 35671:return vx;case 35668:case 35672:return _x;case 35669:case 35673:return yx;case 5125:return Mx;case 36294:return bx;case 36295:return Sx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Rx}}var uc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cx(t.type)}},dc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cx(t.type)}},fc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},dl=/(\w+)(\])?(\[|\.)?/g;function Ou(n,e){n.seq.push(e),n.map[e.id]=e}function Px(n,e,t){let i=n.name,s=i.length;for(dl.lastIndex=0;;){let r=dl.exec(i),a=dl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ou(t,c===void 0?new uc(o,n,e):new dc(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new fc(o),Ou(t,u)),t=u}}}var Os=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Px(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function zu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Ix=37297,Lx=0;function Dx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Hu=new Ve;function Ux(n){Ze._getMatrix(Hu,Ze.workingColorSpace,n);let e=`mat3( ${Hu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case ro:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Vu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Dx(n.getShaderSource(e),a)}else return s}function Nx(n,e){let t=Ux(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kx(n,e){let t;switch(e){case $c:t="Linear";break;case Yc:t="Reinhard";break;case Zc:t="Cineon";break;case Vr:t="ACESFilmic";break;case Jc:t="AgX";break;case Kc:t="Neutral";break;case pp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ya=new D;function Fx(){Ze.getLuminanceCoefficients(ya);let n=ya.x.toFixed(4),e=ya.y.toFixed(4),t=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function Ox(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Pr(n){return n!==""}function Gu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(n){return n.replace(Hx,Gx)}var Vx=new Map;function Gx(n,e){let t=We[e];if(t===void 0){let i=Vx.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pc(t)}var Wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(n){return n.replace(Wx,Xx)}function Xx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function qx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function $x(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function Zx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ud:e="ENVMAP_BLENDING_MULTIPLY";break;case dp:e="ENVMAP_BLENDING_MIX";break;case fp:e="ENVMAP_BLENDING_ADD";break}return e}function Jx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Kx(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=qx(t),c=$x(t),h=Yx(t),u=Zx(t),d=Jx(t),f=Bx(t),x=Ox(r),v=s.createProgram(),g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Pr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Pr).join(`
`),p.length>0&&(p+=`
`)):(g=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),p=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?We.tonemapping_pars_fragment:"",t.toneMapping!==wi?kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Nx("linearToOutputTexel",t.outputColorSpace),Fx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),a=pc(a),a=Gu(a,t),a=Wu(a,t),o=pc(o),o=Gu(o,t),o=Wu(o,t),a=Xu(a),o=Xu(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=_+g+a,y=_+p+o,U=zu(s,s.VERTEX_SHADER,S),A=zu(s,s.FRAGMENT_SHADER,y);s.attachShader(v,U),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(N){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(U).trim(),Y=s.getShaderInfoLog(A).trim(),J=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,U,A);else{let P=Vu(s,U,"vertex"),T=Vu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+P+`
`+T)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||Y==="")&&(W=!1);W&&(N.diagnostics={runnable:J,programLog:V,vertexShader:{log:z,prefix:g},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(U),s.deleteShader(A),R=new Os(s,v),E=zx(s,v)}let R;this.getUniforms=function(){return R===void 0&&I(this),R};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Ix)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=A,this}var jx=0,mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new gc(e),t.set(e,i)),i}},gc=class{constructor(e){this.id=jx++,this.code=e,this.usedTimes=0}};function Qx(n,e,t,i,s,r,a){let o=new Oa,l=new mc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,M,N,V,z){let Y=V.fog,J=z.geometry,W=E.isMeshStandardMaterial?V.environment:null,P=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),T=P&&P.mapping===so?P.image.height:null,H=x[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let Z=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,X=Z!==void 0?Z.length:0,se=0;J.morphAttributes.position!==void 0&&(se=1),J.morphAttributes.normal!==void 0&&(se=2),J.morphAttributes.color!==void 0&&(se=3);let Me,K,ne,xe;if(H){let ht=Un[H];Me=ht.vertexShader,K=ht.fragmentShader}else Me=E.vertexShader,K=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),xe=l.getFragmentShaderID(E);let ue=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),Be=z.isInstancedMesh===!0,$e=z.isBatchedMesh===!0,Rt=!!E.map,Qe=!!E.matcap,Ut=!!P,O=!!E.aoMap,xn=!!E.lightMap,Je=!!E.bumpMap,Ke=!!E.normalMap,Ce=!!E.displacementMap,bt=!!E.emissiveMap,Re=!!E.metalnessMap,C=!!E.roughnessMap,b=E.anisotropy>0,G=E.clearcoat>0,ee=E.dispersion>0,ie=E.iridescence>0,Q=E.sheen>0,we=E.transmission>0,fe=b&&!!E.anisotropyMap,ve=G&&!!E.clearcoatMap,et=G&&!!E.clearcoatNormalMap,ae=G&&!!E.clearcoatRoughnessMap,_e=ie&&!!E.iridescenceMap,Pe=ie&&!!E.iridescenceThicknessMap,Ne=Q&&!!E.sheenColorMap,ye=Q&&!!E.sheenRoughnessMap,je=!!E.specularMap,Ge=!!E.specularColorMap,vt=!!E.specularIntensityMap,k=we&&!!E.transmissionMap,de=we&&!!E.thicknessMap,j=!!E.gradientMap,te=!!E.alphaMap,ge=E.alphaTest>0,pe=!!E.alphaHash,ze=!!E.extensions,Pt=wi;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Pt=n.toneMapping);let $t={shaderID:H,shaderType:E.type,shaderName:E.name,vertexShader:Me,fragmentShader:K,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:$e,batchingColor:$e&&z._colorsTexture!==null,instancing:Be,instancingColor:Be&&z.instanceColor!==null,instancingMorph:Be&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:rr,alphaToCoverage:!!E.alphaToCoverage,map:Rt,matcap:Qe,envMap:Ut,envMapMode:Ut&&P.mapping,envMapCubeUVHeight:T,aoMap:O,lightMap:xn,bumpMap:Je,normalMap:Ke,displacementMap:d&&Ce,emissiveMap:bt,normalMapObjectSpace:Ke&&E.normalMapType===vp,normalMapTangentSpace:Ke&&E.normalMapType===bd,metalnessMap:Re,roughnessMap:C,anisotropy:b,anisotropyMap:fe,clearcoat:G,clearcoatMap:ve,clearcoatNormalMap:et,clearcoatRoughnessMap:ae,dispersion:ee,iridescence:ie,iridescenceMap:_e,iridescenceThicknessMap:Pe,sheen:Q,sheenColorMap:Ne,sheenRoughnessMap:ye,specularMap:je,specularColorMap:Ge,specularIntensityMap:vt,transmission:we,transmissionMap:k,thicknessMap:de,gradientMap:j,opaque:E.transparent===!1&&E.blending===ks&&E.alphaToCoverage===!1,alphaMap:te,alphaTest:ge,alphaHash:pe,combine:E.combine,mapUv:Rt&&v(E.map.channel),aoMapUv:O&&v(E.aoMap.channel),lightMapUv:xn&&v(E.lightMap.channel),bumpMapUv:Je&&v(E.bumpMap.channel),normalMapUv:Ke&&v(E.normalMap.channel),displacementMapUv:Ce&&v(E.displacementMap.channel),emissiveMapUv:bt&&v(E.emissiveMap.channel),metalnessMapUv:Re&&v(E.metalnessMap.channel),roughnessMapUv:C&&v(E.roughnessMap.channel),anisotropyMapUv:fe&&v(E.anisotropyMap.channel),clearcoatMapUv:ve&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:et&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(E.sheenRoughnessMap.channel),specularMapUv:je&&v(E.specularMap.channel),specularColorMapUv:Ge&&v(E.specularColorMap.channel),specularIntensityMapUv:vt&&v(E.specularIntensityMap.channel),transmissionMapUv:k&&v(E.transmissionMap.channel),thicknessMapUv:de&&v(E.thicknessMap.channel),alphaMapUv:te&&v(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ke||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!J.attributes.uv&&(Rt||te),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Rt&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===lt,decodeVideoTextureEmissive:bt&&E.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(E.emissiveMap.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yt,flipSided:E.side===Vt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ze&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&E.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let N in E.defines)M.push(N),M.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(_(M,E),S(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){let M=x[E.type],N;if(M){let V=Un[M];N=Vn.clone(V.uniforms)}else N=E.uniforms;return N}function U(E,M){let N;for(let V=0,z=h.length;V<z;V++){let Y=h[V];if(Y.cacheKey===M){N=Y,++N.usedTimes;break}}return N===void 0&&(N=new Kx(n,M,E,r),h.push(N)),N}function A(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function I(E){l.remove(E)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:U,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:R}}function ev(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function tv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,f,x,v,g){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:v,group:g},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function o(u,d,f,x,v,g){let p=a(u,d,f,x,v,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,x,v,g){let p=a(u,d,f,x,v,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||tv),i.length>1&&i.sort(d||$u),s.length>1&&s.sort(d||$u)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function nv(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Yu,n.set(i,[a])):s>=r.length?(a=new Yu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function iv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ae};break;case"SpotLight":t={position:new D,direction:new D,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function sv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var rv=0;function av(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ov(n){let e=new iv,t=sv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new pt,a=new pt;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,x=0,v=0,g=0,p=0,_=0,S=0,y=0,U=0,A=0,I=0;c.sort(av);for(let E=0,M=c.length;E<M;E++){let N=c[E],V=N.color,z=N.intensity,Y=N.distance,J=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=V.r*z,u+=V.g*z,d+=V.b*z;else if(N.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(N.sh.coefficients[W],z);I++}else if(N.isDirectionalLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let P=N.shadow,T=t.get(N);T.shadowIntensity=P.intensity,T.shadowBias=P.bias,T.shadowNormalBias=P.normalBias,T.shadowRadius=P.radius,T.shadowMapSize=P.mapSize,i.directionalShadow[f]=T,i.directionalShadowMap[f]=J,i.directionalShadowMatrix[f]=N.shadow.matrix,_++}i.directional[f]=W,f++}else if(N.isSpotLight){let W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(V).multiplyScalar(z),W.distance=Y,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,i.spot[v]=W;let P=N.shadow;if(N.map&&(i.spotLightMap[U]=N.map,U++,P.updateMatrices(N),N.castShadow&&A++),i.spotLightMatrix[v]=P.matrix,N.castShadow){let T=t.get(N);T.shadowIntensity=P.intensity,T.shadowBias=P.bias,T.shadowNormalBias=P.normalBias,T.shadowRadius=P.radius,T.shadowMapSize=P.mapSize,i.spotShadow[v]=T,i.spotShadowMap[v]=J,y++}v++}else if(N.isRectAreaLight){let W=e.get(N);W.color.copy(V).multiplyScalar(z),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=W,g++}else if(N.isPointLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){let P=N.shadow,T=t.get(N);T.shadowIntensity=P.intensity,T.shadowBias=P.bias,T.shadowNormalBias=P.normalBias,T.shadowRadius=P.radius,T.shadowMapSize=P.mapSize,T.shadowCameraNear=P.camera.near,T.shadowCameraFar=P.camera.far,i.pointShadow[x]=T,i.pointShadowMap[x]=J,i.pointShadowMatrix[x]=N.shadow.matrix,S++}i.point[x]=W,x++}else if(N.isHemisphereLight){let W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(z),W.groundColor.copy(N.groundColor).multiplyScalar(z),i.hemi[p]=W,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==f||R.pointLength!==x||R.spotLength!==v||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==S||R.numSpotShadows!==y||R.numSpotMaps!==U||R.numLightProbes!==I)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+U-A,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=I,R.directionalLength=f,R.pointLength=x,R.spotLength=v,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=S,R.numSpotShadows=y,R.numSpotMaps=U,R.numLightProbes=I,i.version=rv++)}function l(c,h){let u=0,d=0,f=0,x=0,v=0,g=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let S=c[p];if(S.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(S.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(S.isRectAreaLight){let y=i.rectArea[x];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let y=i.hemi[v];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Zu(n){let e=new ov(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function lv(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Zu(n),e.set(s,[o])):r>=a.length?(o=new Zu(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var xc=class extends li{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vc=class extends li{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
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
}`;function uv(n,e,t){let i=new Fr,s=new re,r=new re,a=new ft,o=new xc({depthPacking:xp}),l=new vc,c={},h=t.maxTextureSize,u={[Ai]:Vt,[Vt]:Ai,[yt]:yt},d=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:cv,fragmentShader:hv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new Mt;x.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new le(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hd;let p=this.type;this.render=function(A,I,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let E=n.getRenderTarget(),M=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),V=n.state;V.setBlending(On),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let z=p!==ti&&this.type===ti,Y=p===ti&&this.type!==ti;for(let J=0,W=A.length;J<W;J++){let P=A[J],T=P.shadow;if(T===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;s.copy(T.mapSize);let H=T.getFrameExtents();if(s.multiply(H),r.copy(T.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,T.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,T.mapSize.y=r.y)),T.map===null||z===!0||Y===!0){let X=this.type!==ti?{minFilter:un,magFilter:un}:{};T.map!==null&&T.map.dispose(),T.map=new en(s.x,s.y,X),T.map.texture.name=P.name+".shadowMap",T.camera.updateProjectionMatrix()}n.setRenderTarget(T.map),n.clear();let Z=T.getViewportCount();for(let X=0;X<Z;X++){let se=T.getViewport(X);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),V.viewport(a),T.updateMatrices(P,X),i=T.getFrustum(),y(I,R,T.camera,P,this.type)}T.isPointLightShadow!==!0&&this.type===ti&&_(T,R),T.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,M,N)};function _(A,I){let R=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new en(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(I,null,R,d,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(I,null,R,f,v,null)}function S(A,I,R,E){let M=null,N=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)M=N;else if(M=R.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let V=M.uuid,z=I.uuid,Y=c[V];Y===void 0&&(Y={},c[V]=Y);let J=Y[z];J===void 0&&(J=M.clone(),Y[z]=J,I.addEventListener("dispose",U)),M=J}if(M.visible=I.visible,M.wireframe=I.wireframe,E===ti?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:u[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let V=n.properties.get(M);V.light=R}return M}function y(A,I,R,E,M){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ti)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let z=e.update(A),Y=A.material;if(Array.isArray(Y)){let J=z.groups;for(let W=0,P=J.length;W<P;W++){let T=J[W],H=Y[T.materialIndex];if(H&&H.visible){let Z=S(A,H,E,M);A.onBeforeShadow(n,A,I,R,z,Z,T),n.renderBufferDirect(R,null,z,Z,A,T),A.onAfterShadow(n,A,I,R,z,Z,T)}}}else if(Y.visible){let J=S(A,Y,E,M);A.onBeforeShadow(n,A,I,R,z,J,null),n.renderBufferDirect(R,null,z,J,A,null),A.onAfterShadow(n,A,I,R,z,J,null)}}let V=A.children;for(let z=0,Y=V.length;z<Y;z++)y(V[z],I,R,E,M)}function U(A){A.target.removeEventListener("dispose",U);for(let R in c){let E=c[R],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var dv={[Ml]:bl,[Sl]:Tl,[El]:Al,[zs]:wl,[bl]:Ml,[Tl]:Sl,[Al]:El,[wl]:zs};function fv(n,e){function t(){let k=!1,de=new ft,j=null,te=new ft(0,0,0,0);return{setMask:function(ge){j!==ge&&!k&&(n.colorMask(ge,ge,ge,ge),j=ge)},setLocked:function(ge){k=ge},setClear:function(ge,pe,ze,Pt,$t){$t===!0&&(ge*=Pt,pe*=Pt,ze*=Pt),de.set(ge,pe,ze,Pt),te.equals(de)===!1&&(n.clearColor(ge,pe,ze,Pt),te.copy(de))},reset:function(){k=!1,j=null,te.set(-1,0,0,0)}}}function i(){let k=!1,de=!1,j=null,te=null,ge=null;return{setReversed:function(pe){if(de!==pe){let ze=e.get("EXT_clip_control");de?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);let Pt=ge;ge=null,this.setClear(Pt)}de=pe},getReversed:function(){return de},setTest:function(pe){pe?ue(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(pe){j!==pe&&!k&&(n.depthMask(pe),j=pe)},setFunc:function(pe){if(de&&(pe=dv[pe]),te!==pe){switch(pe){case Ml:n.depthFunc(n.NEVER);break;case bl:n.depthFunc(n.ALWAYS);break;case Sl:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case El:n.depthFunc(n.EQUAL);break;case wl:n.depthFunc(n.GEQUAL);break;case Tl:n.depthFunc(n.GREATER);break;case Al:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=pe}},setLocked:function(pe){k=pe},setClear:function(pe){ge!==pe&&(de&&(pe=1-pe),n.clearDepth(pe),ge=pe)},reset:function(){k=!1,j=null,te=null,ge=null,de=!1}}}function s(){let k=!1,de=null,j=null,te=null,ge=null,pe=null,ze=null,Pt=null,$t=null;return{setTest:function(ht){k||(ht?ue(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(ht){de!==ht&&!k&&(n.stencilMask(ht),de=ht)},setFunc:function(ht,Sn,Yn){(j!==ht||te!==Sn||ge!==Yn)&&(n.stencilFunc(ht,Sn,Yn),j=ht,te=Sn,ge=Yn)},setOp:function(ht,Sn,Yn){(pe!==ht||ze!==Sn||Pt!==Yn)&&(n.stencilOp(ht,Sn,Yn),pe=ht,ze=Sn,Pt=Yn)},setLocked:function(ht){k=ht},setClear:function(ht){$t!==ht&&(n.clearStencil(ht),$t=ht)},reset:function(){k=!1,de=null,j=null,te=null,ge=null,pe=null,ze=null,Pt=null,$t=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],x=null,v=!1,g=null,p=null,_=null,S=null,y=null,U=null,A=null,I=new Ae(0,0,0),R=0,E=!1,M=null,N=null,V=null,z=null,Y=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,P=0,T=n.getParameter(n.VERSION);T.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(T)[1]),W=P>=1):T.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(T)[1]),W=P>=2);let H=null,Z={},X=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),Me=new ft().fromArray(X),K=new ft().fromArray(se);function ne(k,de,j,te){let ge=new Uint8Array(4),pe=n.createTexture();n.bindTexture(k,pe),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<j;ze++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(de+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return pe}let xe={};xe[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),a.setFunc(zs),Je(!1),Ke(Qh),ue(n.CULL_FACE),O(On);function ue(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function Ie(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function Be(k,de){return u[k]!==de?(n.bindFramebuffer(k,de),u[k]=de,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=de),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=de),!0):!1}function $e(k,de){let j=f,te=!1;if(k){j=d.get(de),j===void 0&&(j=[],d.set(de,j));let ge=k.textures;if(j.length!==ge.length||j[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,ze=ge.length;pe<ze;pe++)j[pe]=n.COLOR_ATTACHMENT0+pe;j.length=ge.length,te=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,te=!0);te&&n.drawBuffers(j)}function Rt(k){return x!==k?(n.useProgram(k),x=k,!0):!1}let Qe={[es]:n.FUNC_ADD,[Zf]:n.FUNC_SUBTRACT,[Jf]:n.FUNC_REVERSE_SUBTRACT};Qe[Kf]=n.MIN,Qe[jf]=n.MAX;let Ut={[Qf]:n.ZERO,[ep]:n.ONE,[tp]:n.SRC_COLOR,[_l]:n.SRC_ALPHA,[op]:n.SRC_ALPHA_SATURATE,[rp]:n.DST_COLOR,[ip]:n.DST_ALPHA,[np]:n.ONE_MINUS_SRC_COLOR,[yl]:n.ONE_MINUS_SRC_ALPHA,[ap]:n.ONE_MINUS_DST_COLOR,[sp]:n.ONE_MINUS_DST_ALPHA,[lp]:n.CONSTANT_COLOR,[cp]:n.ONE_MINUS_CONSTANT_COLOR,[hp]:n.CONSTANT_ALPHA,[up]:n.ONE_MINUS_CONSTANT_ALPHA};function O(k,de,j,te,ge,pe,ze,Pt,$t,ht){if(k===On){v===!0&&(Ie(n.BLEND),v=!1);return}if(v===!1&&(ue(n.BLEND),v=!0),k!==Yf){if(k!==g||ht!==E){if((p!==es||y!==es)&&(n.blendEquation(n.FUNC_ADD),p=es,y=es),ht)switch(k){case ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rt:n.blendFunc(n.ONE,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,S=null,U=null,A=null,I.set(0,0,0),R=0,g=k,E=ht}return}ge=ge||de,pe=pe||j,ze=ze||te,(de!==p||ge!==y)&&(n.blendEquationSeparate(Qe[de],Qe[ge]),p=de,y=ge),(j!==_||te!==S||pe!==U||ze!==A)&&(n.blendFuncSeparate(Ut[j],Ut[te],Ut[pe],Ut[ze]),_=j,S=te,U=pe,A=ze),(Pt.equals(I)===!1||$t!==R)&&(n.blendColor(Pt.r,Pt.g,Pt.b,$t),I.copy(Pt),R=$t),g=k,E=!1}function xn(k,de){k.side===yt?Ie(n.CULL_FACE):ue(n.CULL_FACE);let j=k.side===Vt;de&&(j=!j),Je(j),k.blending===ks&&k.transparent===!1?O(On):O(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let te=k.stencilWrite;o.setTest(te),te&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),bt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Je(k){M!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),M=k)}function Ke(k){k!==qf?(ue(n.CULL_FACE),k!==N&&(k===Qh?n.cullFace(n.BACK):k===$f?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),N=k}function Ce(k){k!==V&&(W&&n.lineWidth(k),V=k)}function bt(k,de,j){k?(ue(n.POLYGON_OFFSET_FILL),(z!==de||Y!==j)&&(n.polygonOffset(de,j),z=de,Y=j)):Ie(n.POLYGON_OFFSET_FILL)}function Re(k){k?ue(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function C(k){k===void 0&&(k=n.TEXTURE0+J-1),H!==k&&(n.activeTexture(k),H=k)}function b(k,de,j){j===void 0&&(H===null?j=n.TEXTURE0+J-1:j=H);let te=Z[j];te===void 0&&(te={type:void 0,texture:void 0},Z[j]=te),(te.type!==k||te.texture!==de)&&(H!==j&&(n.activeTexture(j),H=j),n.bindTexture(k,de||xe[k]),te.type=k,te.texture=de)}function G(){let k=Z[H];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(k){Me.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Me.copy(k))}function ye(k){K.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),K.copy(k))}function je(k,de){let j=c.get(de);j===void 0&&(j=new WeakMap,c.set(de,j));let te=j.get(k);te===void 0&&(te=n.getUniformBlockIndex(de,k.name),j.set(k,te))}function Ge(k,de){let te=c.get(de).get(k);l.get(de)!==te&&(n.uniformBlockBinding(de,te,k.__bindingPointIndex),l.set(de,te))}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},H=null,Z={},u={},d=new WeakMap,f=[],x=null,v=!1,g=null,p=null,_=null,S=null,y=null,U=null,A=null,I=new Ae(0,0,0),R=0,E=!1,M=null,N=null,V=null,z=null,Y=null,Me.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:Ie,bindFramebuffer:Be,drawBuffers:$e,useProgram:Rt,setBlending:O,setMaterial:xn,setFlipSided:Je,setCullFace:Ke,setLineWidth:Ce,setPolygonOffset:bt,setScissorTest:Re,activeTexture:C,bindTexture:b,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:_e,texImage3D:Pe,updateUBOMapping:je,uniformBlockBinding:Ge,texStorage2D:et,texStorage3D:ae,texSubImage2D:Q,texSubImage3D:we,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Ne,viewport:ye,reset:vt}}function Ju(n,e,t,i){let s=pv(i);switch(t){case gd:return n*e;case vd:return n*e;case _d:return n*e*2;case th:return n*e/s.components*s.byteLength;case nh:return n*e/s.components*s.byteLength;case yd:return n*e*2/s.components*s.byteLength;case ih:return n*e*2/s.components*s.byteLength;case xd:return n*e*3/s.components*s.byteLength;case Rn:return n*e*4/s.components*s.byteLength;case sh:return n*e*4/s.components*s.byteLength;case Ca:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ia:case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ll:case Ul:return Math.max(n,16)*Math.max(e,8)/4;case Il:case Dl:return Math.max(n,8)*Math.max(e,8)/2;case Nl:case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Da:case jl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Md:case ec:return Math.ceil(n/4)*Math.ceil(e/4)*8;case tc:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pv(n){switch(n){case ai:case fd:return{byteLength:1,components:1};case Nr:case pd:case In:return{byteLength:2,components:1};case Qc:case eh:return{byteLength:2,components:4};case is:case jc:case Bn:return{byteLength:4,components:1};case md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function mv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,b){return f?new OffscreenCanvas(C,b):kr("canvas")}function v(C,b,G){let ee=1,ie=Re(C);if((ie.width>G||ie.height>G)&&(ee=G/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Q=Math.floor(ee*ie.width),we=Math.floor(ee*ie.height);u===void 0&&(u=x(Q,we));let fe=b?x(Q,we):u;return fe.width=Q,fe.height=we,fe.getContext("2d").drawImage(C,0,0,Q,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+we+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,b,G,ee,ie=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=b;if(b===n.RED&&(G===n.FLOAT&&(Q=n.R32F),G===n.HALF_FLOAT&&(Q=n.R16F),G===n.UNSIGNED_BYTE&&(Q=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.R8UI),G===n.UNSIGNED_SHORT&&(Q=n.R16UI),G===n.UNSIGNED_INT&&(Q=n.R32UI),G===n.BYTE&&(Q=n.R8I),G===n.SHORT&&(Q=n.R16I),G===n.INT&&(Q=n.R32I)),b===n.RG&&(G===n.FLOAT&&(Q=n.RG32F),G===n.HALF_FLOAT&&(Q=n.RG16F),G===n.UNSIGNED_BYTE&&(Q=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RG8UI),G===n.UNSIGNED_SHORT&&(Q=n.RG16UI),G===n.UNSIGNED_INT&&(Q=n.RG32UI),G===n.BYTE&&(Q=n.RG8I),G===n.SHORT&&(Q=n.RG16I),G===n.INT&&(Q=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),G===n.UNSIGNED_INT&&(Q=n.RGB32UI),G===n.BYTE&&(Q=n.RGB8I),G===n.SHORT&&(Q=n.RGB16I),G===n.INT&&(Q=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),G===n.UNSIGNED_INT&&(Q=n.RGBA32UI),G===n.BYTE&&(Q=n.RGBA8I),G===n.SHORT&&(Q=n.RGBA16I),G===n.INT&&(Q=n.RGBA32I)),b===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),b===n.RGBA){let we=ie?ro:Ze.getTransfer(ee);G===n.FLOAT&&(Q=n.RGBA32F),G===n.HALF_FLOAT&&(Q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Q=we===lt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(C,b){let G;return C?b===null||b===is||b===Gs?G=n.DEPTH24_STENCIL8:b===Bn?G=n.DEPTH32F_STENCIL8:b===Nr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===is||b===Gs?G=n.DEPTH_COMPONENT24:b===Bn?G=n.DEPTH_COMPONENT32F:b===Nr&&(G=n.DEPTH_COMPONENT16),G}function U(C,b){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function A(C){let b=C.target;b.removeEventListener("dispose",A),R(b),b.isVideoTexture&&h.delete(b)}function I(C){let b=C.target;b.removeEventListener("dispose",I),M(b)}function R(C){let b=i.get(C);if(b.__webglInit===void 0)return;let G=C.source,ee=d.get(G);if(ee){let ie=ee[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&E(C),Object.keys(ee).length===0&&d.delete(G)}i.remove(C)}function E(C){let b=i.get(C);n.deleteTexture(b.__webglTexture);let G=C.source,ee=d.get(G);delete ee[b.__cacheKey],a.memory.textures--}function M(C){let b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let ie=0;ie<b.__webglFramebuffer[ee].length;ie++)n.deleteFramebuffer(b.__webglFramebuffer[ee][ie]);else n.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)n.deleteFramebuffer(b.__webglFramebuffer[ee]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=C.textures;for(let ee=0,ie=G.length;ee<ie;ee++){let Q=i.get(G[ee]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(G[ee])}i.remove(C)}let N=0;function V(){N=0}function z(){let C=N;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function Y(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function J(C,b){let G=i.get(C);if(C.isVideoTexture&&Ce(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){let ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,C,b);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function W(C,b){let G=i.get(C);if(C.version>0&&G.__version!==C.version){K(G,C,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function P(C,b){let G=i.get(C);if(C.version>0&&G.__version!==C.version){K(G,C,b);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function T(C,b){let G=i.get(C);if(C.version>0&&G.__version!==C.version){ne(G,C,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}let H={[Ur]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[Pl]:n.MIRRORED_REPEAT},Z={[un]:n.NEAREST,[mp]:n.NEAREST_MIPMAP_NEAREST,[ea]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[Fo]:n.LINEAR_MIPMAP_NEAREST,[ns]:n.LINEAR_MIPMAP_LINEAR},X={[_p]:n.NEVER,[wp]:n.ALWAYS,[yp]:n.LESS,[Sd]:n.LEQUAL,[Mp]:n.EQUAL,[Ep]:n.GEQUAL,[bp]:n.GREATER,[Sp]:n.NOTEQUAL};function se(C,b){if(b.type===Bn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===Fo||b.magFilter===ea||b.magFilter===ns||b.minFilter===Fn||b.minFilter===Fo||b.minFilter===ea||b.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,H[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,H[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,H[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Z[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Z[b.minFilter]),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,X[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===un||b.minFilter!==ea&&b.minFilter!==ns||b.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Me(C,b){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",A));let ee=b.source,ie=d.get(ee);ie===void 0&&(ie={},d.set(ee,ie));let Q=Y(b);if(Q!==C.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ie[Q].usedTimes++;let we=ie[C.__cacheKey];we!==void 0&&(ie[C.__cacheKey].usedTimes--,we.usedTimes===0&&E(b)),C.__cacheKey=Q,C.__webglTexture=ie[Q].texture}return G}function K(C,b,G){let ee=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=n.TEXTURE_3D);let ie=Me(C,b),Q=b.source;t.bindTexture(ee,C.__webglTexture,n.TEXTURE0+G);let we=i.get(Q);if(Q.version!==we.__version||ie===!0){t.activeTexture(n.TEXTURE0+G);let fe=Ze.getPrimaries(Ze.workingColorSpace),ve=b.colorSpace===Nn?null:Ze.getPrimaries(b.colorSpace),et=b.colorSpace===Nn||fe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ae=v(b.image,!1,s.maxTextureSize);ae=bt(b,ae);let _e=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type),Ne=S(b.internalFormat,_e,Pe,b.colorSpace,b.isVideoTexture);se(ee,b);let ye,je=b.mipmaps,Ge=b.isVideoTexture!==!0,vt=we.__version===void 0||ie===!0,k=Q.dataReady,de=U(b,ae);if(b.isDepthTexture)Ne=y(b.format===Ws,b.type),vt&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,Ne,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ae.width,ae.height,0,_e,Pe,null));else if(b.isDataTexture)if(je.length>0){Ge&&vt&&t.texStorage2D(n.TEXTURE_2D,de,Ne,je[0].width,je[0].height);for(let j=0,te=je.length;j<te;j++)ye=je[j],Ge?k&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ye.width,ye.height,_e,Pe,ye.data):t.texImage2D(n.TEXTURE_2D,j,Ne,ye.width,ye.height,0,_e,Pe,ye.data);b.generateMipmaps=!1}else Ge?(vt&&t.texStorage2D(n.TEXTURE_2D,de,Ne,ae.width,ae.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,_e,Pe,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,ae.width,ae.height,0,_e,Pe,ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ge&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ne,je[0].width,je[0].height,ae.depth);for(let j=0,te=je.length;j<te;j++)if(ye=je[j],b.format!==Rn)if(_e!==null)if(Ge){if(k)if(b.layerUpdates.size>0){let ge=Ju(ye.width,ye.height,b.format,b.type);for(let pe of b.layerUpdates){let ze=ye.data.subarray(pe*ge/ye.data.BYTES_PER_ELEMENT,(pe+1)*ge/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,pe,ye.width,ye.height,1,_e,ze)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,ae.depth,_e,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Ne,ye.width,ye.height,ae.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,ae.depth,_e,Pe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Ne,ye.width,ye.height,ae.depth,0,_e,Pe,ye.data)}else{Ge&&vt&&t.texStorage2D(n.TEXTURE_2D,de,Ne,je[0].width,je[0].height);for(let j=0,te=je.length;j<te;j++)ye=je[j],b.format!==Rn?_e!==null?Ge?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Ne,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?k&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ye.width,ye.height,_e,Pe,ye.data):t.texImage2D(n.TEXTURE_2D,j,Ne,ye.width,ye.height,0,_e,Pe,ye.data)}else if(b.isDataArrayTexture)if(Ge){if(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ne,ae.width,ae.height,ae.depth),k)if(b.layerUpdates.size>0){let j=Ju(ae.width,ae.height,b.format,b.type);for(let te of b.layerUpdates){let ge=ae.data.subarray(te*j/ae.data.BYTES_PER_ELEMENT,(te+1)*j/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,_e,Pe,ge)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,_e,Pe,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ae.width,ae.height,ae.depth,0,_e,Pe,ae.data);else if(b.isData3DTexture)Ge?(vt&&t.texStorage3D(n.TEXTURE_3D,de,Ne,ae.width,ae.height,ae.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,_e,Pe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ae.width,ae.height,ae.depth,0,_e,Pe,ae.data);else if(b.isFramebufferTexture){if(vt)if(Ge)t.texStorage2D(n.TEXTURE_2D,de,Ne,ae.width,ae.height);else{let j=ae.width,te=ae.height;for(let ge=0;ge<de;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ne,j,te,0,_e,Pe,null),j>>=1,te>>=1}}else if(je.length>0){if(Ge&&vt){let j=Re(je[0]);t.texStorage2D(n.TEXTURE_2D,de,Ne,j.width,j.height)}for(let j=0,te=je.length;j<te;j++)ye=je[j],Ge?k&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,_e,Pe,ye):t.texImage2D(n.TEXTURE_2D,j,Ne,_e,Pe,ye);b.generateMipmaps=!1}else if(Ge){if(vt){let j=Re(ae);t.texStorage2D(n.TEXTURE_2D,de,Ne,j.width,j.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Pe,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ne,_e,Pe,ae);g(b)&&p(ee),we.__version=Q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ne(C,b,G){if(b.image.length!==6)return;let ee=Me(C,b),ie=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);let Q=i.get(ie);if(ie.version!==Q.__version||ee===!0){t.activeTexture(n.TEXTURE0+G);let we=Ze.getPrimaries(Ze.workingColorSpace),fe=b.colorSpace===Nn?null:Ze.getPrimaries(b.colorSpace),ve=b.colorSpace===Nn||we===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let et=b.isCompressedTexture||b.image[0].isCompressedTexture,ae=b.image[0]&&b.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!et&&!ae?_e[te]=v(b.image[te],!0,s.maxCubemapSize):_e[te]=ae?b.image[te].image:b.image[te],_e[te]=bt(b,_e[te]);let Pe=_e[0],Ne=r.convert(b.format,b.colorSpace),ye=r.convert(b.type),je=S(b.internalFormat,Ne,ye,b.colorSpace),Ge=b.isVideoTexture!==!0,vt=Q.__version===void 0||ee===!0,k=ie.dataReady,de=U(b,Pe);se(n.TEXTURE_CUBE_MAP,b);let j;if(et){Ge&&vt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,je,Pe.width,Pe.height);for(let te=0;te<6;te++){j=_e[te].mipmaps;for(let ge=0;ge<j.length;ge++){let pe=j[ge];b.format!==Rn?Ne!==null?Ge?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,pe.width,pe.height,Ne,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,pe.width,pe.height,Ne,ye,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,je,pe.width,pe.height,0,Ne,ye,pe.data)}}}else{if(j=b.mipmaps,Ge&&vt){j.length>0&&de++;let te=Re(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,je,te.width,te.height)}for(let te=0;te<6;te++)if(ae){Ge?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,Ne,ye,_e[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,je,_e[te].width,_e[te].height,0,Ne,ye,_e[te].data);for(let ge=0;ge<j.length;ge++){let ze=j[ge].image[te].image;Ge?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,ze.width,ze.height,Ne,ye,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,je,ze.width,ze.height,0,Ne,ye,ze.data)}}else{Ge?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne,ye,_e[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,je,Ne,ye,_e[te]);for(let ge=0;ge<j.length;ge++){let pe=j[ge];Ge?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,Ne,ye,pe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,je,Ne,ye,pe.image[te])}}}g(b)&&p(n.TEXTURE_CUBE_MAP),Q.__version=ie.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function xe(C,b,G,ee,ie,Q){let we=r.convert(G.format,G.colorSpace),fe=r.convert(G.type),ve=S(G.internalFormat,we,fe,G.colorSpace),et=i.get(b),ae=i.get(G);if(ae.__renderTarget=b,!et.__hasExternalTextures){let _e=Math.max(1,b.width>>Q),Pe=Math.max(1,b.height>>Q);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,Q,ve,_e,Pe,b.depth,0,we,fe,null):t.texImage2D(ie,Q,ve,_e,Pe,0,we,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ke(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ie,ae.__webglTexture,0,Je(b)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ie,ae.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(C,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer){let ee=b.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,Q=y(b.stencilBuffer,ie),we=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=Je(b);Ke(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,Q,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,Q,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Q,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,C)}else{let ee=b.textures;for(let ie=0;ie<ee.length;ie++){let Q=ee[ie],we=r.convert(Q.format,Q.colorSpace),fe=r.convert(Q.type),ve=S(Q.internalFormat,we,fe,Q.colorSpace),et=Je(b);G&&Ke(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,ve,b.width,b.height):Ke(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,ve,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ve,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(b.depthTexture);ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);let ie=ee.__webglTexture,Q=Je(b);if(b.depthTexture.format===Fs)Ke(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(b.depthTexture.format===Ws)Ke(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Be(C){let b=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let ee=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){let ie=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),b.__depthDisposeCallback=ie}b.__boundDepthTexture=ee}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ie(b.__webglFramebuffer,C)}else if(G){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=n.createRenderbuffer(),ue(b.__webglDepthbuffer[ee],C,!1);else{let ie=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ue(b.__webglDepthbuffer,C,!1);else{let ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(C,b,G){let ee=i.get(C);b!==void 0&&xe(ee.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Be(C)}function Rt(C){let b=C.texture,G=i.get(C),ee=i.get(b);C.addEventListener("dispose",I);let ie=C.textures,Q=C.isWebGLCubeRenderTarget===!0,we=ie.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=b.version,a.memory.textures++),Q){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let ve=0;ve<b.mipmaps.length;ve++)G.__webglFramebuffer[fe][ve]=n.createFramebuffer()}else G.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)G.__webglFramebuffer[fe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(we)for(let fe=0,ve=ie.length;fe<ve;fe++){let et=i.get(ie[fe]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Ke(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){let ve=ie[fe];G.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);let et=r.convert(ve.format,ve.colorSpace),ae=r.convert(ve.type),_e=S(ve.internalFormat,et,ae,ve.colorSpace,C.isXRRenderTarget===!0),Pe=Je(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,_e,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),se(n.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)xe(G.__webglFramebuffer[fe][ve],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else xe(G.__webglFramebuffer[fe],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let fe=0,ve=ie.length;fe<ve;fe++){let et=ie[fe],ae=i.get(et);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),se(n.TEXTURE_2D,et),xe(G.__webglFramebuffer,C,et,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(et)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ee.__webglTexture),se(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)xe(G.__webglFramebuffer[ve],C,b,n.COLOR_ATTACHMENT0,fe,ve);else xe(G.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,fe,0);g(b)&&p(fe),t.unbindTexture()}C.depthBuffer&&Be(C)}function Qe(C){let b=C.textures;for(let G=0,ee=b.length;G<ee;G++){let ie=b[G];if(g(ie)){let Q=_(C),we=i.get(ie).__webglTexture;t.bindTexture(Q,we),p(Q),t.unbindTexture()}}}let Ut=[],O=[];function xn(C){if(C.samples>0){if(Ke(C)===!1){let b=C.textures,G=C.width,ee=C.height,ie=n.COLOR_BUFFER_BIT,Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(C),fe=b.length>1;if(fe)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);let et=i.get(b[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,G,ee,0,0,G,ee,ie,n.NEAREST),l===!0&&(Ut.length=0,O.length=0,Ut.push(n.COLOR_ATTACHMENT0+ve),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ut.push(Q),O.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);let et=i.get(b[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let b=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Je(C){return Math.min(s.maxSamples,C.samples)}function Ke(C){let b=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ce(C){let b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function bt(C,b){let G=C.colorSpace,ee=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==rr&&G!==Nn&&(Ze.getTransfer(G)===lt?(ee!==Rn||ie!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=P,this.setTextureCube=T,this.rebindTextures=$e,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ke}function gv(n,e){function t(i,s=Nn){let r,a=Ze.getTransfer(s);if(i===ai)return n.UNSIGNED_BYTE;if(i===Qc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===eh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===md)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fd)return n.BYTE;if(i===pd)return n.SHORT;if(i===Nr)return n.UNSIGNED_SHORT;if(i===jc)return n.INT;if(i===is)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===In)return n.HALF_FLOAT;if(i===gd)return n.ALPHA;if(i===xd)return n.RGB;if(i===Rn)return n.RGBA;if(i===vd)return n.LUMINANCE;if(i===_d)return n.LUMINANCE_ALPHA;if(i===Fs)return n.DEPTH_COMPONENT;if(i===Ws)return n.DEPTH_STENCIL;if(i===th)return n.RED;if(i===nh)return n.RED_INTEGER;if(i===yd)return n.RG;if(i===ih)return n.RG_INTEGER;if(i===sh)return n.RGBA_INTEGER;if(i===Ca||i===Pa||i===Ia||i===La)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Il||i===Ll||i===Dl||i===Ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nl||i===kl||i===Fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Nl||i===kl)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bl||i===Ol||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===$l||i===Yl||i===Zl||i===Jl||i===Kl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ol)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ql)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$l)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Da||i===jl||i===Ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Da)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Md||i===ec||i===tc||i===nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Da)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var _c=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Oe=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},xv={type:"move"},Ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Oe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_v=`
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

}`,yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new mt({vertexShader:vv,fragmentShader:_v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new sn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mc=class extends Ri{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,x=null,v=new yc,g=t.getContextAttributes(),p=null,_=null,S=[],y=[],U=new re,A=null,I=new Jt;I.viewport=new ft;let R=new Jt;R.viewport=new ft;let E=[I,R],M=new _c,N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=S[K];return ne===void 0&&(ne=new Ir,S[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=S[K];return ne===void 0&&(ne=new Ir,S[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=S[K];return ne===void 0&&(ne=new Ir,S[K]=ne),ne.getHandSpace()};function z(K){let ne=y.indexOf(K.inputSource);if(ne===-1)return;let xe=S[ne];xe!==void 0&&(xe.update(K.inputSource,K.frame,c||a),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",J);for(let K=0;K<S.length;K++){let ne=y[K];ne!==null&&(y[K]=null,S[K].disconnect(ne))}N=null,V=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){let ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new en(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,xe=null,ue=null;g.depth&&(ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?Ws:Fs,xe=g.stencil?Gs:is);let Ie={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new en(d.textureWidth,d.textureHeight,{format:Rn,type:ai,depthTexture:new Wa(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Me.setContext(s),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(K){for(let ne=0;ne<K.removed.length;ne++){let xe=K.removed[ne],ue=y.indexOf(xe);ue>=0&&(y[ue]=null,S[ue].disconnect(xe))}for(let ne=0;ne<K.added.length;ne++){let xe=K.added[ne],ue=y.indexOf(xe);if(ue===-1){for(let Be=0;Be<S.length;Be++)if(Be>=y.length){y.push(xe),ue=Be;break}else if(y[Be]===null){y[Be]=xe,ue=Be;break}if(ue===-1)break}let Ie=S[ue];Ie&&Ie.connect(xe)}}let W=new D,P=new D;function T(K,ne,xe){W.setFromMatrixPosition(ne.matrixWorld),P.setFromMatrixPosition(xe.matrixWorld);let ue=W.distanceTo(P),Ie=ne.projectionMatrix.elements,Be=xe.projectionMatrix.elements,$e=Ie[14]/(Ie[10]-1),Rt=Ie[14]/(Ie[10]+1),Qe=(Ie[9]+1)/Ie[5],Ut=(Ie[9]-1)/Ie[5],O=(Ie[8]-1)/Ie[0],xn=(Be[8]+1)/Be[0],Je=$e*O,Ke=$e*xn,Ce=ue/(-O+xn),bt=Ce*-O;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(bt),K.translateZ(Ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Re=$e+Ce,C=Rt+Ce,b=Je-bt,G=Ke+(ue-bt),ee=Qe*Rt/C*Re,ie=Ut*Rt/C*Re;K.projectionMatrix.makePerspective(b,G,ee,ie,Re,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function H(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ne=K.near,xe=K.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(xe=v.depthFar)),M.near=R.near=I.near=ne,M.far=R.far=I.far=xe,(N!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,V=M.far),I.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,M.layers.mask=I.layers.mask|R.layers.mask;let ue=K.parent,Ie=M.cameras;H(M,ue);for(let Be=0;Be<Ie.length;Be++)H(Ie[Be],ue);Ie.length===2?T(M,I,R):M.projectionMatrix.copy(I.projectionMatrix),Z(K,M,ue)};function Z(K,ne,xe){xe===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=rc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let X=null;function se(K,ne){if(h=ne.getViewerPose(c||a),x=ne,h!==null){let xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ue=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let Be=0;Be<xe.length;Be++){let $e=xe[Be],Rt=null;if(f!==null)Rt=f.getViewport($e);else{let Ut=u.getViewSubImage(d,$e);Rt=Ut.viewport,Be===0&&(e.setRenderTargetTextures(_,Ut.colorTexture,d.ignoreDepthValues?void 0:Ut.depthStencilTexture),e.setRenderTarget(_))}let Qe=E[Be];Qe===void 0&&(Qe=new Jt,Qe.layers.enable(Be),Qe.viewport=new ft,E[Be]=Qe),Qe.matrix.fromArray($e.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray($e.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Be===0&&(M.matrix.copy(Qe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(Qe)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){let Be=u.getDepthInformation(xe[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,s.renderState)}}for(let xe=0;xe<S.length;xe++){let ue=y[xe],Ie=S[xe];ue!==null&&Ie!==void 0&&Ie.update(ue,ne,c||a)}X&&X(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}let Me=new Ad;Me.setAnimationLoop(se),this.setAnimationLoop=function(K){X=K},this.dispose=function(){}}},ji=new zn,yv=new pt;function Mv(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Td(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,_,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Vt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Vt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=e.get(p),S=_.envMap,y=_.envMapRotation;S&&(g.envMap.value=S,ji.copy(y),ji.x*=-1,ji.y*=-1,ji.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),g.envMapRotation.value.setFromMatrix4(yv.makeRotationFromEuler(ji)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bv(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let y=S.program;i.uniformBlockBinding(_,y)}function c(_,S){let y=s[_.id];y===void 0&&(x(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",g));let U=S.program;i.updateUBOMapping(_,U);let A=e.render.frame;r[_.id]!==A&&(d(_),r[_.id]=A)}function h(_){let S=u();_.__bindingPointIndex=S;let y=n.createBuffer(),U=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,U,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let S=s[_.id],y=_.uniforms,U=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,I=y.length;A<I;A++){let R=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,M=R.length;E<M;E++){let N=R[E];if(f(N,A,E,U)===!0){let V=N.__offset,z=Array.isArray(N.value)?N.value:[N.value],Y=0;for(let J=0;J<z.length;J++){let W=z[J],P=v(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,V+Y,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,Y),Y+=P.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,S,y,U){let A=_.value,I=S+"_"+y;if(U[I]===void 0)return typeof A=="number"||typeof A=="boolean"?U[I]=A:U[I]=A.clone(),!0;{let R=U[I];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return U[I]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function x(_){let S=_.uniforms,y=0,U=16;for(let I=0,R=S.length;I<R;I++){let E=Array.isArray(S[I])?S[I]:[S[I]];for(let M=0,N=E.length;M<N;M++){let V=E[M],z=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,J=z.length;Y<J;Y++){let W=z[Y],P=v(W),T=y%U,H=T%P.boundary,Z=T+H;y+=H,Z!==0&&U-Z<P.storage&&(y+=U-Z),V.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=P.storage}}}let A=y%U;return A>0&&(y+=U-A),_.__size=y,_.__cache={},this}function v(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),S}function g(_){let S=_.target;S.removeEventListener("dispose",g);let y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Xa=class{constructor(e={}){let{canvas:t=Ap(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let x=new Uint32Array(4),v=new Int32Array(4),g=null,p=null,_=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=wi,this.toneMappingExposure=1;let y=this,U=!1,A=0,I=0,R=null,E=-1,M=null,N=new ft,V=new ft,z=null,Y=new Ae(0),J=0,W=t.width,P=t.height,T=1,H=null,Z=null,X=new ft(0,0,W,P),se=new ft(0,0,W,P),Me=!1,K=new Fr,ne=!1,xe=!1,ue=new pt,Ie=new pt,Be=new D,$e=new ft,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function Ut(){return R===null?T:1}let O=i;function xn(w,F){return t.getContext(w,F)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),O===null){let F="webgl2";if(O=xn(F,w),O===null)throw xn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Je,Ke,Ce,bt,Re,C,b,G,ee,ie,Q,we,fe,ve,et,ae,_e,Pe,Ne,ye,je,Ge,vt,k;function de(){Je=new Bg(O),Je.init(),Ge=new gv(O,Je),Ke=new Lg(O,Je,e,Ge),Ce=new fv(O,Je),Ke.reverseDepthBuffer&&d&&Ce.buffers.depth.setReversed(!0),bt=new Hg(O),Re=new ev,C=new mv(O,Je,Ce,Re,Ke,Ge,bt),b=new Ug(y),G=new Fg(y),ee=new Yp(O),vt=new Pg(O,ee),ie=new Og(O,ee,bt,vt),Q=new Gg(O,ie,ee,bt),Ne=new Vg(O,Ke,C),ae=new Dg(Re),we=new Qx(y,b,G,Je,Ke,vt,ae),fe=new Mv(y,Re),ve=new nv,et=new lv(Je),Pe=new Cg(y,b,G,Ce,Q,f,l),_e=new uv(y,Q,Ke),k=new bv(O,bt,Ke,Ce),ye=new Ig(O,Je,bt),je=new zg(O,Je,bt),bt.programs=we.programs,y.capabilities=Ke,y.extensions=Je,y.properties=Re,y.renderLists=ve,y.shadowMap=_e,y.state=Ce,y.info=bt}de();let j=new Mc(y,O);this.xr=j,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=Je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return T},this.setPixelRatio=function(w){w!==void 0&&(T=w,this.setSize(W,P,!1))},this.getSize=function(w){return w.set(W,P)},this.setSize=function(w,F,q=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,P=F,t.width=Math.floor(w*T),t.height=Math.floor(F*T),q===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(W*T,P*T).floor()},this.setDrawingBufferSize=function(w,F,q){W=w,P=F,T=q,t.width=Math.floor(w*q),t.height=Math.floor(F*q),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(X)},this.setViewport=function(w,F,q,$){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,F,q,$),Ce.viewport(N.copy(X).multiplyScalar(T).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,F,q,$){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,F,q,$),Ce.scissor(V.copy(se).multiplyScalar(T).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(w){Ce.setScissorTest(Me=w)},this.setOpaqueSort=function(w){H=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(w=!0,F=!0,q=!0){let $=0;if(w){let B=!1;if(R!==null){let oe=R.texture.format;B=oe===sh||oe===ih||oe===nh}if(B){let oe=R.texture.type,me=oe===ai||oe===is||oe===Nr||oe===Gs||oe===Qc||oe===eh,be=Pe.getClearColor(),Se=Pe.getClearAlpha(),ke=be.r,He=be.g,Ee=be.b;me?(x[0]=ke,x[1]=He,x[2]=Ee,x[3]=Se,O.clearBufferuiv(O.COLOR,0,x)):(v[0]=ke,v[1]=He,v[2]=Ee,v[3]=Se,O.clearBufferiv(O.COLOR,0,v))}else $|=O.COLOR_BUFFER_BIT}F&&($|=O.DEPTH_BUFFER_BIT),q&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ve.dispose(),et.dispose(),Re.dispose(),b.dispose(),G.dispose(),Q.dispose(),vt.dispose(),k.dispose(),we.dispose(),j.dispose(),j.removeEventListener("sessionstart",Xh),j.removeEventListener("sessionend",qh),qi.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let w=bt.autoReset,F=_e.enabled,q=_e.autoUpdate,$=_e.needsUpdate,B=_e.type;de(),bt.autoReset=w,_e.enabled=F,_e.autoUpdate=q,_e.needsUpdate=$,_e.type=B}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ze(w){let F=w.target;F.removeEventListener("dispose",ze),Pt(F)}function Pt(w){$t(w),Re.remove(w)}function $t(w){let F=Re.get(w).programs;F!==void 0&&(F.forEach(function(q){we.releaseProgram(q)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,q,$,B,oe){F===null&&(F=Rt);let me=B.isMesh&&B.matrixWorld.determinant()<0,be=Gf(w,F,q,$,B);Ce.setMaterial($,me);let Se=q.index,ke=1;if($.wireframe===!0){if(Se=ie.getWireframeAttribute(q),Se===void 0)return;ke=2}let He=q.drawRange,Ee=q.attributes.position,it=He.start*ke,_t=(He.start+He.count)*ke;oe!==null&&(it=Math.max(it,oe.start*ke),_t=Math.min(_t,(oe.start+oe.count)*ke)),Se!==null?(it=Math.max(it,0),_t=Math.min(_t,Se.count)):Ee!=null&&(it=Math.max(it,0),_t=Math.min(_t,Ee.count));let St=_t-it;if(St<0||St===1/0)return;vt.setup(B,$,be,q,Se);let nn,at=ye;if(Se!==null&&(nn=ee.get(Se),at=je,at.setIndex(nn)),B.isMesh)$.wireframe===!0?(Ce.setLineWidth($.wireframeLinewidth*Ut()),at.setMode(O.LINES)):at.setMode(O.TRIANGLES);else if(B.isLine){let Te=$.linewidth;Te===void 0&&(Te=1),Ce.setLineWidth(Te*Ut()),B.isLineSegments?at.setMode(O.LINES):B.isLineLoop?at.setMode(O.LINE_LOOP):at.setMode(O.LINE_STRIP)}else B.isPoints?at.setMode(O.POINTS):B.isSprite&&at.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)at.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))at.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Te=B._multiDrawStarts,Zn=B._multiDrawCounts,ot=B._multiDrawCount,En=Se?ee.get(Se).bytesPerElement:1,ms=Re.get($).currentProgram.getUniforms();for(let ln=0;ln<ot;ln++)ms.setValue(O,"_gl_DrawID",ln),at.render(Te[ln]/En,Zn[ln])}else if(B.isInstancedMesh)at.renderInstances(it,St,B.count);else if(q.isInstancedBufferGeometry){let Te=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Zn=Math.min(q.instanceCount,Te);at.renderInstances(it,St,Zn)}else at.render(it,St)};function ht(w,F,q){w.transparent===!0&&w.side===yt&&w.forceSinglePass===!1?(w.side=Vt,w.needsUpdate=!0,Qr(w,F,q),w.side=Ai,w.needsUpdate=!0,Qr(w,F,q),w.side=yt):Qr(w,F,q)}this.compile=function(w,F,q=null){q===null&&(q=w),p=et.get(q),p.init(F),S.push(p),q.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==q&&w.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let $=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let oe=B.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){let be=oe[me];ht(be,q,B),$.add(be)}else ht(oe,q,B),$.add(oe)}),S.pop(),p=null,$},this.compileAsync=function(w,F,q=null){let $=this.compile(w,F,q);return new Promise(B=>{function oe(){if($.forEach(function(me){Re.get(me).currentProgram.isReady()&&$.delete(me)}),$.size===0){B(w);return}setTimeout(oe,10)}Je.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Sn=null;function Yn(w){Sn&&Sn(w)}function Xh(){qi.stop()}function qh(){qi.start()}let qi=new Ad;qi.setAnimationLoop(Yn),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(w){Sn=w,j.setAnimationLoop(w),w===null?qi.stop():qi.start()},j.addEventListener("sessionstart",Xh),j.addEventListener("sessionend",qh),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(F),F=j.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,F,R),p=et.get(w,S.length),p.init(F),S.push(p),Ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(Ie),xe=this.localClippingEnabled,ne=ae.init(this.clippingPlanes,xe),g=ve.get(w,_.length),g.init(),_.push(g),j.enabled===!0&&j.isPresenting===!0){let oe=y.xr.getDepthSensingMesh();oe!==null&&ko(oe,F,-1/0,y.sortObjects)}ko(w,F,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(H,Z),Qe=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Qe&&Pe.addToRenderList(g,w),this.info.render.frame++,ne===!0&&ae.beginShadows();let q=p.state.shadowsArray;_e.render(q,w,F),ne===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=g.opaque,B=g.transmissive;if(p.setupLights(),F.isArrayCamera){let oe=F.cameras;if(B.length>0)for(let me=0,be=oe.length;me<be;me++){let Se=oe[me];Yh($,B,w,Se)}Qe&&Pe.render(w);for(let me=0,be=oe.length;me<be;me++){let Se=oe[me];$h(g,w,Se,Se.viewport)}}else B.length>0&&Yh($,B,w,F),Qe&&Pe.render(w),$h(g,w,F);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(y,w,F),vt.resetDefaultState(),E=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],ne===!0&&ae.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function ko(w,F,q,$){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){$&&$e.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ie);let me=Q.update(w),be=w.material;be.visible&&g.push(w,me,be,q,$e.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){let me=Q.update(w),be=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),$e.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),$e.copy(me.boundingSphere.center)),$e.applyMatrix4(w.matrixWorld).applyMatrix4(Ie)),Array.isArray(be)){let Se=me.groups;for(let ke=0,He=Se.length;ke<He;ke++){let Ee=Se[ke],it=be[Ee.materialIndex];it&&it.visible&&g.push(w,me,it,q,$e.z,Ee)}}else be.visible&&g.push(w,me,be,q,$e.z,null)}}let oe=w.children;for(let me=0,be=oe.length;me<be;me++)ko(oe[me],F,q,$)}function $h(w,F,q,$){let B=w.opaque,oe=w.transmissive,me=w.transparent;p.setupLightsView(q),ne===!0&&ae.setGlobalState(y.clippingPlanes,q),$&&Ce.viewport(N.copy($)),B.length>0&&jr(B,F,q),oe.length>0&&jr(oe,F,q),me.length>0&&jr(me,F,q),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Yh(w,F,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new en(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?In:ai,minFilter:ns,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let oe=p.state.transmissionRenderTarget[$.id],me=$.viewport||N;oe.setSize(me.z,me.w);let be=y.getRenderTarget();y.setRenderTarget(oe),y.getClearColor(Y),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),Qe&&Pe.render(q);let Se=y.toneMapping;y.toneMapping=wi;let ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),ne===!0&&ae.setGlobalState(y.clippingPlanes,$),jr(w,q,$),C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe),Je.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ee=0,it=F.length;Ee<it;Ee++){let _t=F[Ee],St=_t.object,nn=_t.geometry,at=_t.material,Te=_t.group;if(at.side===yt&&St.layers.test($.layers)){let Zn=at.side;at.side=Vt,at.needsUpdate=!0,Zh(St,q,$,nn,at,Te),at.side=Zn,at.needsUpdate=!0,He=!0}}He===!0&&(C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe))}y.setRenderTarget(be),y.setClearColor(Y,J),ke!==void 0&&($.viewport=ke),y.toneMapping=Se}function jr(w,F,q){let $=F.isScene===!0?F.overrideMaterial:null;for(let B=0,oe=w.length;B<oe;B++){let me=w[B],be=me.object,Se=me.geometry,ke=$===null?me.material:$,He=me.group;be.layers.test(q.layers)&&Zh(be,F,q,Se,ke,He)}}function Zh(w,F,q,$,B,oe){w.onBeforeRender(y,F,q,$,B,oe),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(y,F,q,$,w,oe),B.transparent===!0&&B.side===yt&&B.forceSinglePass===!1?(B.side=Vt,B.needsUpdate=!0,y.renderBufferDirect(q,F,$,B,w,oe),B.side=Ai,B.needsUpdate=!0,y.renderBufferDirect(q,F,$,B,w,oe),B.side=yt):y.renderBufferDirect(q,F,$,B,w,oe),w.onAfterRender(y,F,q,$,B,oe)}function Qr(w,F,q){F.isScene!==!0&&(F=Rt);let $=Re.get(w),B=p.state.lights,oe=p.state.shadowsArray,me=B.state.version,be=we.getParameters(w,B.state,oe,F,q),Se=we.getProgramCacheKey(be),ke=$.programs;$.environment=w.isMeshStandardMaterial?F.environment:null,$.fog=F.fog,$.envMap=(w.isMeshStandardMaterial?G:b).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",ze),ke=new Map,$.programs=ke);let He=ke.get(Se);if(He!==void 0){if($.currentProgram===He&&$.lightsStateVersion===me)return Kh(w,be),He}else be.uniforms=we.getUniforms(w),w.onBeforeCompile(be,y),He=we.acquireProgram(be,Se),ke.set(Se,He),$.uniforms=be.uniforms;let Ee=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ee.clippingPlanes=ae.uniform),Kh(w,be),$.needsLights=Xf(w),$.lightsStateVersion=me,$.needsLights&&(Ee.ambientLightColor.value=B.state.ambient,Ee.lightProbe.value=B.state.probe,Ee.directionalLights.value=B.state.directional,Ee.directionalLightShadows.value=B.state.directionalShadow,Ee.spotLights.value=B.state.spot,Ee.spotLightShadows.value=B.state.spotShadow,Ee.rectAreaLights.value=B.state.rectArea,Ee.ltc_1.value=B.state.rectAreaLTC1,Ee.ltc_2.value=B.state.rectAreaLTC2,Ee.pointLights.value=B.state.point,Ee.pointLightShadows.value=B.state.pointShadow,Ee.hemisphereLights.value=B.state.hemi,Ee.directionalShadowMap.value=B.state.directionalShadowMap,Ee.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ee.spotShadowMap.value=B.state.spotShadowMap,Ee.spotLightMatrix.value=B.state.spotLightMatrix,Ee.spotLightMap.value=B.state.spotLightMap,Ee.pointShadowMap.value=B.state.pointShadowMap,Ee.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=He,$.uniformsList=null,He}function Jh(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Os.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Kh(w,F){let q=Re.get(w);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Gf(w,F,q,$,B){F.isScene!==!0&&(F=Rt),C.resetTextureUnits();let oe=F.fog,me=$.isMeshStandardMaterial?F.environment:null,be=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:rr,Se=($.isMeshStandardMaterial?G:b).get($.envMap||me),ke=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,He=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ee=!!q.morphAttributes.position,it=!!q.morphAttributes.normal,_t=!!q.morphAttributes.color,St=wi;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(St=y.toneMapping);let nn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,at=nn!==void 0?nn.length:0,Te=Re.get($),Zn=p.state.lights;if(ne===!0&&(xe===!0||w!==M)){let vn=w===M&&$.id===E;ae.setState($,w,vn)}let ot=!1;$.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Zn.state.version||Te.outputColorSpace!==be||B.isBatchedMesh&&Te.batching===!1||!B.isBatchedMesh&&Te.batching===!0||B.isBatchedMesh&&Te.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Te.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Te.instancing===!1||!B.isInstancedMesh&&Te.instancing===!0||B.isSkinnedMesh&&Te.skinning===!1||!B.isSkinnedMesh&&Te.skinning===!0||B.isInstancedMesh&&Te.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Te.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Te.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Te.instancingMorph===!1&&B.morphTexture!==null||Te.envMap!==Se||$.fog===!0&&Te.fog!==oe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ae.numPlanes||Te.numIntersection!==ae.numIntersection)||Te.vertexAlphas!==ke||Te.vertexTangents!==He||Te.morphTargets!==Ee||Te.morphNormals!==it||Te.morphColors!==_t||Te.toneMapping!==St||Te.morphTargetsCount!==at)&&(ot=!0):(ot=!0,Te.__version=$.version);let En=Te.currentProgram;ot===!0&&(En=Qr($,F,B));let ms=!1,ln=!1,xr=!1,Et=En.getUniforms(),Dn=Te.uniforms;if(Ce.useProgram(En.program)&&(ms=!0,ln=!0,xr=!0),$.id!==E&&(E=$.id,ln=!0),ms||M!==w){Ce.buffers.depth.getReversed()?(ue.copy(w.projectionMatrix),Cp(ue),Pp(ue),Et.setValue(O,"projectionMatrix",ue)):Et.setValue(O,"projectionMatrix",w.projectionMatrix),Et.setValue(O,"viewMatrix",w.matrixWorldInverse);let gi=Et.map.cameraPosition;gi!==void 0&&gi.setValue(O,Be.setFromMatrixPosition(w.matrixWorld)),Ke.logarithmicDepthBuffer&&Et.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Et.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ln=!0,xr=!0)}if(B.isSkinnedMesh){Et.setOptional(O,B,"bindMatrix"),Et.setOptional(O,B,"bindMatrixInverse");let vn=B.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Et.setValue(O,"boneTexture",vn.boneTexture,C))}B.isBatchedMesh&&(Et.setOptional(O,B,"batchingTexture"),Et.setValue(O,"batchingTexture",B._matricesTexture,C),Et.setOptional(O,B,"batchingIdTexture"),Et.setValue(O,"batchingIdTexture",B._indirectTexture,C),Et.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&Et.setValue(O,"batchingColorTexture",B._colorsTexture,C));let vr=q.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&Ne.update(B,q,En),(ln||Te.receiveShadow!==B.receiveShadow)&&(Te.receiveShadow=B.receiveShadow,Et.setValue(O,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Dn.envMap.value=Se,Dn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&F.environment!==null&&(Dn.envMapIntensity.value=F.environmentIntensity),ln&&(Et.setValue(O,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&Wf(Dn,xr),oe&&$.fog===!0&&fe.refreshFogUniforms(Dn,oe),fe.refreshMaterialUniforms(Dn,$,T,P,p.state.transmissionRenderTarget[w.id]),Os.upload(O,Jh(Te),Dn,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Os.upload(O,Jh(Te),Dn,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Et.setValue(O,"center",B.center),Et.setValue(O,"modelViewMatrix",B.modelViewMatrix),Et.setValue(O,"normalMatrix",B.normalMatrix),Et.setValue(O,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let vn=$.uniformsGroups;for(let gi=0,xi=vn.length;gi<xi;gi++){let jh=vn[gi];k.update(jh,En),k.bind(jh,En)}}return En}function Wf(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Xf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,F,q){Re.get(w.texture).__webglTexture=F,Re.get(w.depthTexture).__webglTexture=q;let $=Re.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){let q=Re.get(w);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,q=0){R=w,A=F,I=q;let $=!0,B=null,oe=!1,me=!1;if(w){let Se=Re.get(w);if(Se.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(O.FRAMEBUFFER,null),$=!1;else if(Se.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Se.__hasExternalTextures)C.rebindTextures(w,Re.get(w.texture).__webglTexture,Re.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ee=w.depthTexture;if(Se.__boundDepthTexture!==Ee){if(Ee!==null&&Re.has(Ee)&&(w.width!==Ee.image.width||w.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}let ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(me=!0);let He=Re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[F])?B=He[F][q]:B=He[F],oe=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?B=Re.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?B=He[q]:B=He,N.copy(w.viewport),V.copy(w.scissor),z=w.scissorTest}else N.copy(X).multiplyScalar(T).floor(),V.copy(se).multiplyScalar(T).floor(),z=Me;if(Ce.bindFramebuffer(O.FRAMEBUFFER,B)&&$&&Ce.drawBuffers(w,B),Ce.viewport(N),Ce.scissor(V),Ce.setScissorTest(z),oe){let Se=Re.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,Se.__webglTexture,q)}else if(me){let Se=Re.get(w.texture),ke=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Se.__webglTexture,q||0,ke)}E=-1},this.readRenderTargetPixels=function(w,F,q,$,B,oe,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){Ce.bindFramebuffer(O.FRAMEBUFFER,be);try{let Se=w.texture,ke=Se.format,He=Se.type;if(!Ke.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-$&&q>=0&&q<=w.height-B&&O.readPixels(F,q,$,B,Ge.convert(ke),Ge.convert(He),oe)}finally{let Se=R!==null?Re.get(R).__webglFramebuffer:null;Ce.bindFramebuffer(O.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(w,F,q,$,B,oe,me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){let Se=w.texture,ke=Se.format,He=Se.type;if(!Ke.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-$&&q>=0&&q<=w.height-B){Ce.bindFramebuffer(O.FRAMEBUFFER,be);let Ee=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.bufferData(O.PIXEL_PACK_BUFFER,oe.byteLength,O.STREAM_READ),O.readPixels(F,q,$,B,Ge.convert(ke),Ge.convert(He),0);let it=R!==null?Re.get(R).__webglFramebuffer:null;Ce.bindFramebuffer(O.FRAMEBUFFER,it);let _t=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Rp(O,_t,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,oe),O.deleteBuffer(Ee),O.deleteSync(_t),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,q=0){w.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);let $=Math.pow(2,-q),B=Math.floor(w.image.width*$),oe=Math.floor(w.image.height*$),me=F!==null?F.x:0,be=F!==null?F.y:0;C.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,me,be,B,oe),Ce.unbindTexture()},this.copyTextureToTexture=function(w,F,q=null,$=null,B=0){w.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],F=arguments[2],B=arguments[3]||0,q=null);let oe,me,be,Se,ke,He,Ee,it,_t,St=w.isCompressedTexture?w.mipmaps[B]:w.image;q!==null?(oe=q.max.x-q.min.x,me=q.max.y-q.min.y,be=q.isBox3?q.max.z-q.min.z:1,Se=q.min.x,ke=q.min.y,He=q.isBox3?q.min.z:0):(oe=St.width,me=St.height,be=St.depth||1,Se=0,ke=0,He=0),$!==null?(Ee=$.x,it=$.y,_t=$.z):(Ee=0,it=0,_t=0);let nn=Ge.convert(F.format),at=Ge.convert(F.type),Te;F.isData3DTexture?(C.setTexture3D(F,0),Te=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),Te=O.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),Te=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let Zn=O.getParameter(O.UNPACK_ROW_LENGTH),ot=O.getParameter(O.UNPACK_IMAGE_HEIGHT),En=O.getParameter(O.UNPACK_SKIP_PIXELS),ms=O.getParameter(O.UNPACK_SKIP_ROWS),ln=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,St.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Se),O.pixelStorei(O.UNPACK_SKIP_ROWS,ke),O.pixelStorei(O.UNPACK_SKIP_IMAGES,He);let xr=w.isDataArrayTexture||w.isData3DTexture,Et=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Dn=Re.get(w),vr=Re.get(F),vn=Re.get(Dn.__renderTarget),gi=Re.get(vr.__renderTarget);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,vn.__webglFramebuffer),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let xi=0;xi<be;xi++)xr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.get(w).__webglTexture,B,He+xi),w.isDepthTexture?(Et&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.get(F).__webglTexture,B,_t+xi),O.blitFramebuffer(Se,ke,oe,me,Ee,it,oe,me,O.DEPTH_BUFFER_BIT,O.NEAREST)):Et?O.copyTexSubImage3D(Te,B,Ee,it,_t+xi,Se,ke,oe,me):O.copyTexSubImage2D(Te,B,Ee,it,_t+xi,Se,ke,oe,me);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Et?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Te,B,Ee,it,_t,oe,me,be,nn,at,St.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Te,B,Ee,it,_t,oe,me,be,nn,St.data):O.texSubImage3D(Te,B,Ee,it,_t,oe,me,be,nn,at,St):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,Ee,it,oe,me,nn,at,St.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,Ee,it,St.width,St.height,nn,St.data):O.texSubImage2D(O.TEXTURE_2D,B,Ee,it,oe,me,nn,at,St);O.pixelStorei(O.UNPACK_ROW_LENGTH,Zn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot),O.pixelStorei(O.UNPACK_SKIP_PIXELS,En),O.pixelStorei(O.UNPACK_SKIP_ROWS,ms),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ln),B===0&&F.generateMipmaps&&O.generateMipmap(Te),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,F,q=null,$=null,B=0){return w.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,w=arguments[2],F=arguments[3],B=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,q,$,B)},this.initRenderTarget=function(w){Re.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){A=0,I=0,R=null,Ce.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}},Ys=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Zs=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},bc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sc,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},jt=new D,qa=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ot=class extends li{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ps,Sr=new D,Is=new D,Ls=new D,Ds=new re,Er=new re,Ld=new pt,Ma=new D,wr=new D,ba=new D,Ku=new re,fl=new re,ju=new re,Gt=class extends It{constructor(e=new Ot){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new bc(t,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new qa(i,3,0,!1)),Ps.setAttribute("uv",new qa(i,2,3,!1))}this.geometry=Ps,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Is.setFromMatrixScale(this.matrixWorld),Ld.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Is.multiplyScalar(-Ls.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Sa(Ma.set(-.5,-.5,0),Ls,a,Is,s,r),Sa(wr.set(.5,-.5,0),Ls,a,Is,s,r),Sa(ba.set(.5,.5,0),Ls,a,Is,s,r),Ku.set(0,0),fl.set(1,0),ju.set(1,1);let o=e.ray.intersectTriangle(Ma,wr,ba,!1,Sr);if(o===null&&(Sa(wr.set(-.5,.5,0),Ls,a,Is,s,r),fl.set(0,1),o=e.ray.intersectTriangle(Ma,ba,wr,!1,Sr),o===null))return;let l=e.ray.origin.distanceTo(Sr);l<e.near||l>e.far||t.push({distance:l,point:Sr.clone(),uv:Ei.getInterpolation(Sr,Ma,wr,ba,Ku,fl,ju,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Sa(n,e,t,i,s,r){Ds.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Er.x=r*Ds.x-s*Ds.y,Er.y=s*Ds.x+r*Ds.y):Er.copy(Ds),n.copy(e),n.x+=Er.x,n.y+=Er.y,n.applyMatrix4(Ld)}var Br=class extends Xt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=un,h=un,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $a=class extends At{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Us=new pt,Qu=new pt,Ea=[],ed=new oi,Sv=new pt,Tr=new le,Ar=new Pi,Js=class extends le{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $a(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Sv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Us),ed.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(ed)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Us),Ar.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(i),e.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),Qu.multiplyMatrices(i,Us),Tr.matrixWorld=Qu,Tr.raycast(e,Ea);for(let a=0,o=Ea.length;a<o;a++){let l=Ea[a];l.instanceId=r,l.object=this,t.push(l)}Ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $a(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Br(new Float32Array(s*this.count),s,this.count,th,Bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Sc=class extends li{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},td=new pt,Ec=new Ba,wa=new Pi,Ta=new D,Ii=class extends It{constructor(e=new Mt,t=new Sc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,e.ray.intersectsSphere(wa)===!1)return;td.copy(s).invert(),Ec.copy(e.ray).applyMatrix4(td);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=d,v=f;x<v;x++){let g=c.getX(x);Ta.fromBufferAttribute(u,g),nd(Ta,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let x=d,v=f;x<v;x++)Ta.fromBufferAttribute(u,x),nd(Ta,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function nd(n,e,t,i,s,r,a){let o=Ec.distanceSqToPoint(n);if(o<t){let l=new D;Ec.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ci=class extends Xt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new re:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new D,s=[],r=[],a=[],o=new D,l=new pt;for(let f=0;f<=e;f++){let x=f/e;s[f]=this.getTangentAt(x,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Wt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Wt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Or=class extends yn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wc=class extends Or{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Aa=new D,pl=new ah,ml=new ah,gl=new ah,Tc=class extends yn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Aa.subVectors(s[0],s[1]).add(s[0]),c=Aa);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Aa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Aa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),x<1e-4&&(x=v),g<1e-4&&(g=v),pl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,x,v,g),ml.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,x,v,g),gl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,x,v,g)}else this.curveType==="catmullrom"&&(pl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ml.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),gl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(pl.calc(l),ml.calc(l),gl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function id(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Ev(n,e){let t=1-n;return t*t*e}function wv(n,e){return 2*(1-n)*n*e}function Tv(n,e){return n*n*e}function Lr(n,e,t,i){return Ev(n,e)+wv(n,t)+Tv(n,i)}function Av(n,e){let t=1-n;return t*t*t*e}function Rv(n,e){let t=1-n;return 3*t*t*n*e}function Cv(n,e){return 3*(1-n)*n*n*e}function Pv(n,e){return n*n*n*e}function Dr(n,e,t,i,s){return Av(n,e)+Rv(n,t)+Cv(n,i)+Pv(n,s)}var Ya=class extends yn{constructor(e=new re,t=new re,i=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Dr(e,s.x,r.x,a.x,o.x),Dr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ac=class extends yn{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Dr(e,s.x,r.x,a.x,o.x),Dr(e,s.y,r.y,a.y,o.y),Dr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Za=class extends yn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rc=class extends yn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends yn{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Lr(e,s.x,r.x,a.x),Lr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cc=class extends yn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Lr(e,s.x,r.x,a.x),Lr(e,s.y,r.y,a.y),Lr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(id(o,l.x,c.x,h.x,u.x),id(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},sd=Object.freeze({__proto__:null,ArcCurve:wc,CatmullRomCurve3:Tc,CubicBezierCurve:Ya,CubicBezierCurve3:Ac,EllipseCurve:Or,LineCurve:Za,LineCurve3:Rc,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:Cc,SplineCurve:Ka}),Pc=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new sd[s.type]().fromJSON(s))}return this}},Ic=class extends Pc{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Za(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ja(this.currentPoint.clone(),new re(e,t),new re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Ya(this.currentPoint.clone(),new re(e,t),new re(i,s),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ka(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new Or(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Lc=class n extends Mt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Wt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new D,d=new re,f=new D,x=new D,v=new D,g=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(x)}for(let _=0;_<=t;_++){let S=i+_*h*s,y=Math.sin(S),U=Math.cos(S);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*y,u.y=e[A].y,u.z=e[A].x*U,a.push(u.x,u.y,u.z),d.x=_/t,d.y=A/(e.length-1),o.push(d.x,d.y);let I=l[3*A+0]*y,R=l[3*A+1],E=l[3*A+0]*U;c.push(I,R,E)}}for(let _=0;_<t;_++)for(let S=0;S<e.length-1;S++){let y=S+_*e.length,U=y,A=y+e.length,I=y+e.length+1,R=y+1;r.push(U,A,R),r.push(I,R,A)}this.setIndex(r),this.setAttribute("position",new Xe(a,3)),this.setAttribute("uv",new Xe(o,2)),this.setAttribute("normal",new Xe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ss=class n extends Lc{constructor(e=1,t=1,i=4,s=8){let r=new Ic;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Ks=class n extends Mt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,h=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(o,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ye=class n extends Mt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],x=0,v=[],g=i/2,p=0;_(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function _(){let y=new D,U=new D,A=0,I=(t-e)/i;for(let R=0;R<=r;R++){let E=[],M=R/r,N=M*(t-e)+e;for(let V=0;V<=s;V++){let z=V/s,Y=z*l+o,J=Math.sin(Y),W=Math.cos(Y);U.x=N*J,U.y=-M*i+g,U.z=N*W,u.push(U.x,U.y,U.z),y.set(J,I,W).normalize(),d.push(y.x,y.y,y.z),f.push(z,1-M),E.push(x++)}v.push(E)}for(let R=0;R<s;R++)for(let E=0;E<r;E++){let M=v[E][R],N=v[E+1][R],V=v[E+1][R+1],z=v[E][R+1];(e>0||E!==0)&&(h.push(M,N,z),A+=3),(t>0||E!==r-1)&&(h.push(N,V,z),A+=3)}c.addGroup(p,A,0),p+=A}function S(y){let U=x,A=new re,I=new D,R=0,E=y===!0?e:t,M=y===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),x++;let N=x;for(let V=0;V<=s;V++){let Y=V/s*l+o,J=Math.cos(Y),W=Math.sin(Y);I.x=E*W,I.y=g*M,I.z=E*J,u.push(I.x,I.y,I.z),d.push(0,M,0),A.x=J*.5+.5,A.y=W*.5*M+.5,f.push(A.x,A.y),x++}for(let V=0;V<s;V++){let z=U+V,Y=N+V;y===!0?h.push(Y,Y+1,z):h.push(Y+1,Y,z),R+=3}c.addGroup(p,R,y===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},tn=class n extends Ye{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},js=class n extends Mt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let S=new D,y=new D,U=new D;for(let A=0;A<t.length;A+=3)f(t[A+0],S),f(t[A+1],y),f(t[A+2],U),l(S,y,U,_)}function l(_,S,y,U){let A=U+1,I=[];for(let R=0;R<=A;R++){I[R]=[];let E=_.clone().lerp(y,R/A),M=S.clone().lerp(y,R/A),N=A-R;for(let V=0;V<=N;V++)V===0&&R===A?I[R][V]=E:I[R][V]=E.clone().lerp(M,V/N)}for(let R=0;R<A;R++)for(let E=0;E<2*(A-R)-1;E++){let M=Math.floor(E/2);E%2===0?(d(I[R][M+1]),d(I[R+1][M]),d(I[R][M])):(d(I[R][M+1]),d(I[R+1][M+1]),d(I[R+1][M]))}}function c(_){let S=new D;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(_),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let _=new D;for(let S=0;S<r.length;S+=3){_.x=r[S+0],_.y=r[S+1],_.z=r[S+2];let y=g(_)/2/Math.PI+.5,U=p(_)/Math.PI+.5;a.push(y,1-U)}x(),u()}function u(){for(let _=0;_<a.length;_+=6){let S=a[_+0],y=a[_+2],U=a[_+4],A=Math.max(S,y,U),I=Math.min(S,y,U);A>.9&&I<.1&&(S<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),U<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,S){let y=_*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function x(){let _=new D,S=new D,y=new D,U=new D,A=new re,I=new re,R=new re;for(let E=0,M=0;E<r.length;E+=9,M+=6){_.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),A.set(a[M+0],a[M+1]),I.set(a[M+2],a[M+3]),R.set(a[M+4],a[M+5]),U.copy(_).add(S).add(y).divideScalar(3);let N=g(U);v(A,M+0,_,N),v(I,M+2,S,N),v(R,M+4,y,N)}}function v(_,S,y,U){U<0&&_.x===1&&(a[S]=_.x-1),y.x===0&&y.z===0&&(a[S]=U/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Li=class n extends js{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Qs=class n extends js{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},zr=class n extends js{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Hn=class n extends Mt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new D,x=new re;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){let p=r+g/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,h.push(x.x,x.y)}u+=d}for(let v=0;v<s;v++){let g=v*(i+1);for(let p=0;p<i;p++){let _=p+g,S=_,y=_+i+1,U=_+i+2,A=_+1;o.push(S,y,A),o.push(y,U,A)}}this.setIndex(o),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var gt=class n extends Mt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,f=[],x=[],v=[],g=[];for(let p=0;p<=i;p++){let _=[],S=p/i,y=0;p===0&&a===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let U=0;U<=t;U++){let A=U/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+S*o),x.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(A+y,1-S),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let S=h[p][_+1],y=h[p][_],U=h[p+1][_],A=h[p+1][_+1];(p!==0||a>0)&&f.push(S,y,A),(p!==i-1||l<Math.PI)&&f.push(y,U,A)}this.setIndex(f),this.setAttribute("position",new Xe(x,3)),this.setAttribute("normal",new Xe(v,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ja=class n extends js{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Cn=class n extends Mt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new D,u=new D,d=new D;for(let f=0;f<=i;f++)for(let x=0;x<=s;x++){let v=x/s*r,g=f/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(x/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let x=1;x<=s;x++){let v=(s+1)*f+x-1,g=(s+1)*(f-1)+x-1,p=(s+1)*(f-1)+x,_=(s+1)*f+x;a.push(v,g,_),a.push(g,p,_)}this.setIndex(a),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Qa=class extends mt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Le=class extends li{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ra(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Iv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var er=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dc=class extends er{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nu,endingEnd:nu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case iu:r=e,o=2*t-i;break;case su:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case iu:a=e,l=2*i-t;break;case su:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(i-t)/(s-t),v=x*x,g=v*x,p=-d*g+2*d*v-d*x,_=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*x+1,S=(-1-f)*g+(1.5+f)*v+.5*x,y=f*g-f*v;for(let U=0;U!==o;++U)r[U]=p*a[h+U]+_*a[c+U]+S*a[l+U]+y*a[u+U];return r}},Uc=class extends er{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Nc=class extends er{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ra(t,this.TimeBufferType),this.values=Ra(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ra(e.times,Array),values:Ra(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ua:t=this.InterpolantFactoryMethodDiscrete;break;case ic:t=this.InterpolantFactoryMethodLinear;break;case Bo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return ic;case this.InterpolantFactoryMethodSmooth:return Bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Iv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Bo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let x=0;x!==i;++x){let v=t[u+x];if(v!==t[d+x]||v!==t[f+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=ic;var rs=class extends Pn{constructor(e,t,i){super(e,t,i)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Ua;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends Pn{};kc.prototype.ValueTypeName="color";var Fc=class extends Pn{};Fc.prototype.ValueTypeName="number";var Bc=class extends er{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ci.slerpFlat(r,0,a,c-o,a,c,l);return r}},eo=class extends Pn{InterpolantFactoryMethodLinear(e){return new Bc(this.times,this.values,this.getValueSize(),e)}};eo.prototype.ValueTypeName="quaternion";eo.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Pn{constructor(e,t,i){super(e,t,i)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Ua;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends Pn{};Oc.prototype.ValueTypeName="vector";var rd={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},zc=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],x=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},Lv=new zc,Hr=class{constructor(e){this.manager=e!==void 0?e:Lv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Hr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hc=class extends Hr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=rd.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=kr("img");function l(){h(),rd.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var to=class extends Hr{constructor(e){super(e)}load(e,t,i,s){let r=new Xt,a=new Hc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},tr=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},nr=class extends tr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xl=new pt,ad=new D,od=new D,no=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ld=new pt,Rr=new D,vl=new D,Vc=class extends no{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Rr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Rr),vl.copy(i.position),vl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(vl),i.updateMatrixWorld(),s.makeTranslation(-Rr.x,-Rr.y,-Rr.z),ld.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ld)}},Di=class extends tr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Vc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Gc=class extends no{constructor(){super(new qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ir=class extends tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Gc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},sr=class extends tr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var io=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=cd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function cd(){return performance.now()}var oh="\\[\\]\\.:\\/",Dv=new RegExp("["+oh+"]","g"),lh="[^"+oh+"]",Uv="[^"+oh.replace("\\.","")+"]",Nv=/((?:WC+[\/:])*)/.source.replace("WC",lh),kv=/(WCOD+)?/.source.replace("WCOD",Uv),Fv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),Bv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),Ov=new RegExp("^"+Nv+kv+Fv+Bv+"$"),zv=["material","materials","bones","map"],Wc=class{constructor(e,t,i){let s=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dv,"")}static parseTrackName(e){let t=Ov.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);zv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Wc;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var C_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);var lo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Hv=new qs(-1,1,1,-1,0,1),ch=class extends Mt{constructor(){super(),this.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xe([0,2,0,0,2,0],2))}},Vv=new ch,Ui=class{constructor(e){this._mesh=new le(Vv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Hv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var lr=class extends dn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Vn.clone(e.uniforms),this.material=new mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ui(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Gr=class extends dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},co=class extends dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ho=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new re);this._width=i.width,this._height=i.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lr(lo),this.copyPass.material.blending=On,this.clock=new io}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Gr!==void 0&&(a instanceof Gr?i=!0:a instanceof co&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var uo=class extends dn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Dd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var cr=class n extends dn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new Ae(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new en(r,a,{type:In}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new en(r,a,{type:In});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new en(r,a,{type:In});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Dd;this.highPassUniforms=Vn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new re(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=lo;this.copyUniforms=Vn.clone(h.uniforms),this.blendMaterial=new mt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:rt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.basic=new Ct,this.fsQuad=new Ui(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};cr.BlurDirectionX=new re(1,0);cr.BlurDirectionY=new re(0,1);var Ud={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var fo=class extends dn{constructor(){super();let e=Ud;this.uniforms=Vn.clone(e.uniforms),this.material=new Qa({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ui(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$c?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ui=.03333333333333333,xt=58,Gv=xt/44,Lt=n=>Math.round(n*Gv*2)/2,Nd=.7,hh=30,kd=.18;var uh=20;var Fd=5,dh=[0,100,250,450,700],Bd=6.5;var fn={ranger:{name:"Pemanah Arkana",desc:"Tembakan cepat jarak jauh",skillName:"Kilat",skillDesc:"Melesat cepat ke arah gerak",hp:100,speed:8.5,fireCd:.16,dmg:9,projSpeed:70,projLife:.7,pellets:1,spread:.015,splash:0,skill:"dash",skillCd:5,color:5104639},mage:{name:"Penyihir Bara",desc:"Bola api dengan ledakan area",skillName:"Nova",skillDesc:"Ledakan di sekeliling tubuh",hp:90,speed:7.5,fireCd:.7,dmg:34,projSpeed:32,projLife:1.6,pellets:1,spread:0,splash:3.5,skill:"nova",skillCd:9,color:16742958},guardian:{name:"Penjaga Rune",desc:"Sebaran rune jarak dekat, tubuh kuat",skillName:"Perisai",skillDesc:"Menahan 70% serangan selama 3 detik",hp:140,speed:7,fireCd:.75,dmg:8,projSpeed:55,projLife:.32,pellets:6,spread:.16,splash:0,skill:"shield",skillCd:10,color:10354538},priest:{name:"Haji Toriq",desc:"Penyembuh: memulihkan diri dan rekan",skillName:"Doa",skillDesc:"Pulihkan 35 HP untukmu dan rekan di dekatmu",hp:95,speed:8,fireCd:.4,dmg:13,projSpeed:45,projLife:.8,pellets:1,spread:.02,splash:0,skill:"heal",skillCd:9,color:16769658}},fh=Object.keys(fn);var hi=[],po=(n,e,t,i,s)=>hi.push({t:"cyl",x:Lt(n),z:Lt(e),r:t,h:i,kind:s}),Wr=(n,e,t,i,s,r)=>hi.push({t:"box",x:Lt(n),z:Lt(e),w:t,d:i,h:s,kind:r});po(0,0,3.2,1.4,"altar");for(let n of[-1,1])for(let e of[-1,1])po(n*13,e*13,1.3,9,"pillar"),Wr(n*30,e*26,12,2,4.5,"wall"),hi.push({t:"box",x:n*46,z:e*40.5,w:2,d:10,h:4.5,kind:"wall"}),Wr(n*9,e*33,3,3,2.6,"block"),Wr(n*33,e*9,3,3,2.6,"block");for(let n of[-1,1])po(0,n*30,1.3,9,"pillar"),po(n*28,0,1.3,9,"pillar"),Wr(0,n*21,16,2,4,"wall"),Wr(n*21,0,2,16,4,"wall");for(let n of[-1,1])for(let e of[-1,1])hi.push({t:"box",x:n*22,z:e*45,w:10,d:2,h:4,kind:"wall"}),hi.push({t:"box",x:n*45,z:e*22,w:2,d:10,h:4,kind:"wall"}),hi.push({t:"cyl",x:n*30,z:e*29,r:1.3,h:9,kind:"pillar"}),hi.push({t:"box",x:n*12,z:e*21,w:3,d:3,h:2.6,kind:"block"}),hi.push({t:"box",x:n*21,z:e*12,w:3,d:3,h:2.6,kind:"block"});var ph=hi,Wv=[[40,7],[-40,-7],[-7,40],[7,-40],[38,18],[38,-18],[-38,18],[-38,-18],[18,38],[-18,38],[18,-38],[-18,-38]].map(([n,e])=>[Lt(n),Lt(e)]),mh=[[12,0],[-12,0],[0,12],[0,-12],[39,39],[-39,39],[39,-39],[-39,-39]].map(([n,e])=>[Lt(n),Lt(e)]),go={dm:"Deathmatch",koth:"Rebut Altar"},Xr=7.5;var Ni={dmg:{name:"Rune Amarah",desc:"damage +50%",color:16726862},spd:{name:"Rune Angin",desc:"kecepatan +35%",color:5096447}},Xv=[{x:0,z:26,type:"dmg"},{x:0,z:-26,type:"dmg"},{x:18,z:18,type:"spd"},{x:-18,z:-18,type:"spd"}].map(n=>({...n,x:Lt(n.x),z:Lt(n.z)})),Od=.11;go.tdm="Tim";go.coop="Lawan Bot";var zd=["tdm","coop"];var pn=[{name:"Fajar",color:15910509},{name:"Senja",color:10513407}],ls=[],mo=(n,e,t,i,s)=>ls.push({t:"cyl",x:Lt(n),z:Lt(e),r:t,h:i,kind:s}),os=(n,e,t,i,s,r)=>ls.push({t:"box",x:Lt(n),z:Lt(e),w:t,d:i,h:s,kind:r});mo(0,0,2.6,2.2,"bell");for(let n of[-1,1])for(let e of[-1,1])os(n*31,e*13,12,4,5,"shed"),os(n*13,e*31,4,12,5,"shed"),mo(n*24,e*24,.6,12,"mast"),os(n*16,e*15,3,3,2.4,"crate"),os(n*15,e*18.5,2.4,2.4,1.8,"crate"),os(n*35,e*33,4,9,1.7,"boat");for(let n of[-1,1])os(0,n*21,9,2.6,2.4,"crate"),os(n*21,0,2.6,9,2.4,"crate"),mo(n*10.5,n*-10.5,.6,7,"post"),mo(n*-10.5,n*-10.5,.6,7,"post");for(let n of[-1,1])for(let e of[-1,1])ls.push({t:"box",x:n*49,z:e*8,w:3,d:6,h:2.4,kind:"crate"}),ls.push({t:"box",x:n*8,z:e*49,w:6,d:3,h:2.4,kind:"crate"}),ls.push({t:"box",x:n*36,z:e*44,w:3,d:3,h:1.8,kind:"crate"}),ls.push({t:"cyl",x:n*44,z:e*30,r:.6,h:7,kind:"post"});var qt={ruins:{name:"Reruntuhan Senja",obst:ph,spawns:Wv,orbs:mh,runes:Xv},harbor:{name:"Pelabuhan Bulan",obst:ls,spawns:[[40,0],[-40,0],[0,40],[0,-40],[39,22],[39,-22],[-39,22],[-39,-22],[22,39],[-22,39],[22,-39],[-22,-39]].map(([n,e])=>[Lt(n),Lt(e)]),orbs:[[10,0],[-10,0],[0,10],[0,-10],[27,27],[-27,27],[27,-27],[-27,-27]].map(([n,e])=>[Lt(n),Lt(e)]),runes:[{x:0,z:30,type:"dmg"},{x:0,z:-30,type:"dmg"},{x:30,z:0,type:"spd"},{x:-30,z:0,type:"spd"}].map(n=>({...n,x:Lt(n.x),z:Lt(n.z)}))}},ry=Object.keys(qt),ki=[{id:"default",name:"Bawaan kelas",req:null},{id:"zamrud",name:"Zamrud",accent:2059082,req:{stat:"matches",n:5,text:"Selesaikan 5 ronde"}},{id:"senja",name:"Ungu Senja",accent:5974662,req:{stat:"kills",n:25,text:"25 kill total"}},{id:"bulan",name:"Perak Bulan",accent:11187916,glow:14674175,req:{stat:"wins",n:3,text:"Menang 3 ronde"}},{id:"naga",name:"Darah Naga",accent:7999260,glow:16726830,req:{stat:"kills",n:100,text:"100 kill total"}},{id:"raja",name:"Emas Raja",accent:12093738,glow:16766315,req:{stat:"wins",n:10,text:"Menang 10 ronde"}}];function Hd(n,e){return!n.req||(e&&e[n.req.stat]||0)>=n.req.n}var gh={eclipse:{name:"Gerhana",desc:"Arena gelap, jarak pandang pendek",dur:25},runerain:{name:"Hujan Rune",desc:"Semua rune muncul dan cepat kembali",dur:20},golden:{name:"Cawan Emas",desc:"Ambil cawan: HP penuh dan kedua rune",dur:30}},xh=100,vh={ranger:{name:"Hujan Panah",desc:"11 panah menyebar sekaligus"},mage:{name:"Meteor",desc:"Meteor jatuh di depan, ledakan besar"},guardian:{name:"Benteng Rune",desc:"Perisai 5 dtk, pulih 50% HP, gelombang kejut"},priest:{name:"Cahaya Fajar",desc:"Rekan pulih penuh dan yang tumbang bangkit; lawan di dekatmu terluka"}};ki.push({id:"fajar",name:"Bintang Fajar",accent:14248250,glow:16756848,req:{stat:"chal",n:3,text:"Selesaikan 3 tantangan harian"}},{id:"malam",name:"Bayangan Malam",accent:1448494,glow:8057087,req:{stat:"chal",n:10,text:"Selesaikan 10 tantangan harian"}});go.pve="Bertahan Bersama";var Gn={ghoul:{name:"Hantu Rawa",hp:30,speed:6.2,color:8257418,melee:{dmg:6,cd:1.1,r:1.9}},caster:{name:"Dukun Bayang",hp:38,speed:5.4,color:13134847,range:18,fireCd:1.5,dmg:15,projSpeed:30,projLife:1.6,pellets:1,spread:.04,splash:0,skill:"none",skillCd:99},brute:{name:"Golem Batu",hp:260,speed:4,color:16752704,boss:!0,melee:{dmg:16,cd:1.6,r:2.8},slam:{dmg:18,r:5.5,cd:7}}},di={...fn,...Gn},qr={breakTime:6,cap:22,bossEvery:5,winWave:10,diffMul:{easy:.55,normal:.75,hard:1.15}};Object.assign(qr,{windup:.45,reviveTime:3,reviveR:2.4,spareDelay:4,allies:3,checkpointEvery:5,perkBreak:12});var Fi={tajam:{name:"Tajam",desc:"Damage +15%"},cepat:{name:"Cepat",desc:"Kecepatan tembak +12%"},vampir:{name:"Vampir",desc:"Pulih 12% dari damage yang diberikan"},kokoh:{name:"Kokoh",desc:"HP maksimal +25"},lincah:{name:"Lincah",desc:"Kecepatan lari +10%"},fokus:{name:"Fokus",desc:"Jeda skill -20%"},amarah:{name:"Amarah",desc:"Pengukur pamungkas terisi 40% lebih cepat"},ganda:{name:"Ganda",desc:"Tambahan 1 peluru setiap tembakan"},ledak:{name:"Ledak",desc:"Musuh yang tumbang meledak (damage area)"},pulih:{name:"Pulih",desc:"HP mulai pulih 1 dtk lebih cepat, +4 per dtk"}},ay=Object.keys(Fi);Object.assign(Gn,{frost:{name:"Penyihir Es",hp:34,speed:5.2,color:8378623,range:17,slow:!0,fireCd:1.9,dmg:10,projSpeed:26,projLife:1.7,pellets:1,spread:.04,splash:0,skill:"none",skillCd:99},spiderling:{name:"Anak Laba-laba",hp:14,speed:8.2,color:16735610,melee:{dmg:4,cd:.9,r:1.6}},queen:{name:"Ratu Laba-laba",hp:300,speed:4.6,color:16723546,boss:!0,melee:{dmg:14,cd:1.4,r:2.8},summon:{cd:7,n:2,max:6}}});Object.assign(di,fn,Gn);qt.ruins.barrels=[];qt.harbor.barrels=[[19,7],[-19,-7],[7,-19],[-7,19],[26,20],[-26,-20]].map(([n,e])=>[Lt(n),Lt(e)]);var hr={giant:{name:"Raksasa",desc:"Semua besar: HP +60%, gerak lebih lambat"},meteor:{name:"Hujan Meteor",desc:"Meteor jatuh di dekat pemain; lihat lingkaran merah"},oneshot:{name:"Tembakan Maut",desc:"Damage x3, tembakan lebih jarang"},mage:{name:"Hanya Penyihir",desc:"Semua bermain sebagai Penyihir Bara"}},_h=["Tolong!","Ke sini!","Bagus!"],yh=[{id:"k100",name:"Pembasmi",text:"100 kill",stat:"kills",n:100},{id:"w10",name:"Juara",text:"Menang 10 ronde",stat:"wins",n:10},{id:"wave5",name:"Penakluk Golem",text:"Selesaikan gelombang 5",stat:"bestWave",n:5},{id:"wave10",name:"Pembasmi Ratu",text:"Selesaikan gelombang 10",stat:"bestWave",n:10},{id:"rev10",name:"Penolong",text:"Tolong rekan 10 kali",stat:"revives",n:10},{id:"bnt5",name:"Pemburu Hadiah",text:"Tumbangkan 5 buronan",stat:"bounties",n:5},{id:"chal7",name:"Rajin",text:"Selesaikan 7 tantangan harian",stat:"chal",n:7}];go.king="Perburuan Raja";var oy={bossRush:"Bos setiap 3 gelombang",doublePerk:"Dua berkah tiap gelombang",giant:hr.giant.name,meteor:hr.meteor.name,oneshot:hr.oneshot.name,mage:hr.mage.name};ki.push({id:"golem",name:"Batu Golem",accent:7036242,glow:16747050,req:{stat:"ev_golem",n:1,text:"Capai target event Malam Golem"}},{id:"mahkota",name:"Jubah Mahkota",accent:5902384,glow:16765514,req:{stat:"ev_raja",n:1,text:"Capai target event Perburuan Raja"}});yh.push({id:"ev3",name:"Tamu Setia",text:"Hadir di 3 event",stat:"evAttend",n:3});var $r=qt.ruins.obst;function Vd(n){$r=(qt[n]||qt.ruins).obst}function qv(n,e){for(let t=0;t<2;t++){let i=xt-e;n.x>i?n.x=i:n.x<-i&&(n.x=-i),n.z>i?n.z=i:n.z<-i&&(n.z=-i);for(let s=0;s<$r.length;s++){let r=$r[s];if(r.t==="cyl"){let a=n.x-r.x,o=n.z-r.z,l=r.r+e,c=a*a+o*o;if(c<l*l){let h=Math.sqrt(c);h<1e-6&&(a=1,o=0,h=1),n.x=r.x+a/h*l,n.z=r.z+o/h*l}}else{let a=r.w/2,o=r.d/2,l=Math.max(r.x-a,Math.min(n.x,r.x+a)),c=Math.max(r.z-o,Math.min(n.z,r.z+o)),h=n.x-l,u=n.z-c,d=h*h+u*u;if(d<e*e)if(d>1e-10){let f=Math.sqrt(d);n.x=l+h/f*e,n.z=c+u/f*e}else{let f=a-Math.abs(n.x-r.x),x=o-Math.abs(n.z-r.z);f<x?n.x=r.x+Math.sign(n.x-r.x||1)*(a+e):n.z=r.z+Math.sign(n.z-r.z||1)*(o+e)}}}}}function Mh(n,e,t,i){n.yaw=e.y;let s=e.mx,r=e.mz,a=Math.hypot(s,r);a>1&&(s/=a,r/=a),n.skillCd>0&&(n.skillCd=Math.max(0,n.skillCd-i));let o=!1;if(e.k&&n.skillCd<=0&&(n.skillCd=t.skillCd,o=!0,t.skill==="dash"&&(n.dashT=kd,a>.2?(n.dx=e.mx/a,n.dz=e.mz/a):(n.dx=Math.sin(n.yaw),n.dz=Math.cos(n.yaw)))),n.dashT>0)n.x+=n.dx*hh*i,n.z+=n.dz*hh*i,n.dashT=Math.max(0,n.dashT-i);else{let l=t.speed*(n.spd||1);n.x+=s*l*i,n.z+=r*l*i}return qv(n,Nd),o}function Bi(n,e,t){let i=xt-t;if(n>i||n<-i||e>i||e<-i)return!0;for(let s=0;s<$r.length;s++){let r=$r[s];if(r.t==="cyl"){let a=n-r.x,o=e-r.z,l=r.r+t;if(a*a+o*o<l*l)return!0}else if(Math.abs(n-r.x)<r.w/2+t&&Math.abs(e-r.z)<r.d/2+t)return!0}return!1}function Gd(n,e,t,i){let s=t-n,r=i-e,a=Math.hypot(s,r),o=Math.ceil(a/.7);for(let l=1;l<o;l++){let c=l/o;if(Bi(n+s*c,e+r*c,.1))return!1}return!0}function ur(n,e){let t=(n-e)%(Math.PI*2);return t>Math.PI?t-=Math.PI*2:t<-Math.PI&&(t+=Math.PI*2),t}var bh=[];function qd(n,e){let t=Math.min(1024,n.width),i=n;(!n.getContext||n.width!==t)&&(i=document.createElement("canvas"),i.width=i.height=t,i.getContext("2d").drawImage(n,0,0,t,t));let s=i.getContext("2d").getImageData(0,0,t,t).data,r=new Float32Array(t*t);for(let h=0;h<t*t;h++)r[h]=(s[h*4]*.3+s[h*4+1]*.59+s[h*4+2]*.11)/255;let a=document.createElement("canvas");a.width=a.height=t;let o=a.getContext("2d"),l=o.createImageData(t,t),c=(h,u)=>r[(u+t)%t*t+(h+t)%t];for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=(c(u+1,h)-c(u-1,h))*e,f=(c(u,h+1)-c(u,h-1))*e,x=1/Math.hypot(d,f,1),v=(h*t+u)*4;l.data[v]=(-d*x*.5+.5)*255,l.data[v+1]=(f*x*.5+.5)*255,l.data[v+2]=(x*.5+.5)*255,l.data[v+3]=255}return o.putImageData(l,0,0),new ci(a)}var Sh=(n,e)=>(n.wrapS=e.wrapS,n.wrapT=e.wrapT,n.repeat.copy(e.repeat),n.anisotropy=e.anisotropy,n),$d={},Eh={};function Oi(n,e=2,t=1,i=""){let s={mat:n,tex:Sh(qd(n.map.image,e),n.map),strength:e};return n.normalScale=new re(t,t),bh.push(s),i&&(($d[i]||=[]).push(s),Eh[i]&&Yd(i)),n}function Yd(n){let e=Eh[n];for(let t of $d[n]||[]){if(t.hd)continue;t.hd=!0;let i=t.mat.normalMap===t.tex;e.normal||=qd(e.image,t.strength*1.6);let s=Sh(new Xt(e.image),t.mat.map);s.colorSpace=kt,s.needsUpdate=!0,t.tex=Sh(e.normal.clone(),t.mat.map),t.tex.needsUpdate=!0,t.mat.map=s,i&&(t.mat.normalMap=t.tex),t.mat.needsUpdate=!0}}var Wd=!1;async function Zd(){if(Wd)return 0;Wd=!0;let n=0;try{let e=await fetch("/assets/manifest.json");if(!e.ok)return 0;let t=await e.json();await Promise.all(Object.entries(t.tex||{}).map(async([i,s])=>{if(!/^[a-z0-9_-]{1,40}\.webp$/.test(s))return;let r=new Image;r.src=`/assets/${s}?v=${t.v||0}`;try{await r.decode()}catch{return}Eh[i]={image:r,normal:null},Yd(i),n++}))}catch{}return n}var Xd=null;function Jd(n){if(!(n===Xd&&bh.every(e=>e.done))){Xd=n;for(let e of bh)e.done=!0,e.mat.normalMap===e.tex!==n&&(e.mat.normalMap=n?e.tex:null,e.mat.needsUpdate=!0)}}var Kd=new Br(new Uint8Array([255,255,255,255]),1,1);Kd.needsUpdate=!0;var jd=[];function xo(n,e,t,i=.5){let s={bakeMap:{value:Kd},bakeExt:{value:t},bakeAo:{value:.75},bakeSun:{value:0},bakeShade:{value:i}};return jd.push(s),new to().load(e,r=>{r.flipY=!1,r.colorSpace=Nn,r.wrapS=r.wrapT=ii,r.generateMipmaps=!0,s.bakeMap.value=r}),n.onBeforeCompile=r=>{Object.assign(r.uniforms,s),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vBakeXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBakeXZ = (modelMatrix * vec4(position, 1.0)).xz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vBakeXZ; uniform sampler2D bakeMap; uniform float bakeExt, bakeAo, bakeSun, bakeShade;`).replace("#include <map_fragment>",`#include <map_fragment>
        { vec2 buv = vBakeXZ / (2.0 * bakeExt) + 0.5;
          if (buv.x > 0.0 && buv.x < 1.0 && buv.y > 0.0 && buv.y < 1.0) {
            vec4 bk = texture2D(bakeMap, buv);
            diffuseColor.rgb *= mix(1.0, bk.r, bakeAo) * mix(1.0, mix(bakeShade, 1.0, bk.g), bakeSun);
          } }`)},n.customProgramCacheKey=()=>"bake",n}function Qd(n){for(let e of jd)e.bakeSun.value=n?1:0}function ef(n,e){let t=new Zs,i=e.clone();i.scale.setScalar(.1),t.add(i);let s=new $s(n),r=s.fromScene(t,.04,.1,200).texture;return s.dispose(),r}function zi(n,e=9078472,t=.45){let i=new Ae(e);return n.onBeforeCompile=s=>{s.uniforms.rimColor={value:i},s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 rimColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += rimColor * pow(1.0 - saturate(dot(normal, normalize(vViewPosition))), 3.0) * ${t.toFixed(2)};`)},n.customProgramCacheKey=()=>"rim"+t,n}function tf(){return new lr({uniforms:{tDiffuse:{value:null},sat:{value:1.14},con:{value:1.04},vig:{value:.3}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float sat, con, vig; varying vec2 vUv;
      void main(){ vec4 t=texture2D(tDiffuse,vUv); vec3 c=t.rgb;
        float l=dot(c,vec3(0.2126,0.7152,0.0722));
        c=mix(vec3(l),c,sat);
        c=max(vec3(0.0),(c-0.18)*con+0.18);
        c*=mix(vec3(0.94,0.97,1.06),vec3(1.05,1.0,0.94),smoothstep(0.0,0.7,l)); // bayangan sejuk, sorotan hangat
        vec2 d=vUv-0.5; c*=1.0-vig*smoothstep(0.25,0.85,dot(d,d)*2.2);
        gl_FragColor=vec4(c,t.a); }`})}var nf=new D(-.62,.4,-.68).normalize();function Hi(n){let e=n;return()=>((e=e*16807%2147483647)-1)/2147483646}function Vi(n,e,t){let i=document.createElement("canvas");i.width=i.height=n,e(i.getContext("2d"),n);let s=new ci(i);return s.colorSpace=kt,t&&(s.wrapS=s.wrapT=Ur,s.repeat.set(t,t)),s.anisotropy=4,s}function $v(){return Vi(128,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.55)"),t.addColorStop(.6,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=t,n.fillRect(0,0,e,e)})}function Yv(){let n=Hi(7);return Vi(256,(e,t)=>{e.fillStyle="#8e879a",e.fillRect(0,0,t,t);let i=4,s=t/i;for(let r=0;r<i;r++){let a=r%2*32;for(let o=-1;o<4;o++){let l=128+n()*50;e.fillStyle=`rgb(${l+8},${l},${l+16})`,e.fillRect(o*64+a+2,r*s+2,60,s-4)}}for(let r=0;r<2600;r++){let a=n()<.5?0:255;e.fillStyle=`rgba(${a},${a},${a},${.03+n()*.05})`,e.fillRect(n()*t,n()*t,1+n()*2,1+n()*2)}for(let r=0;r<22;r++)e.fillStyle=`rgba(70,${110+n()*40},70,0.16)`,e.beginPath(),e.arc(n()*t,n()*t,6+n()*16,0,7),e.fill()},1)}function Zv(){let n=Hi(21);return Vi(512,(e,t)=>{e.fillStyle="#4c5a3c",e.fillRect(0,0,t,t);for(let i=0;i<420;i++){let s=n()*t,r=n()*t,a=14+n()*30,o=96+n()*50;e.fillStyle=`rgba(${o+14},${o+8},${o+20},${.5+n()*.4})`,e.beginPath(),e.ellipse(s,r,a,a*(.6+n()*.4),n()*3,0,7),e.fill();for(let[l,c]of[[t,0],[-t,0],[0,t],[0,-t]])e.beginPath(),e.ellipse(s+l,r+c,a,a*.8,0,0,7),e.fill()}for(let i=0;i<5e3;i++)e.fillStyle=`rgba(${60+n()*50},${120+n()*80},${50+n()*30},${.22+n()*.25})`,e.fillRect(n()*t,n()*t,2,2+n()*3)},22)}function Jv(){let n=Hi(99);return Vi(512,(e,t)=>{let i=t/2;e.strokeStyle="#8fefff",e.lineCap="round";for(let[s,r]of[[240,5],[222,2],[150,4],[92,2],[60,3]])e.lineWidth=r,e.beginPath(),e.arc(i,i,s,0,7),e.stroke();e.lineWidth=3;for(let s=0;s<24;s++){let r=s/24*Math.PI*2;e.save(),e.translate(i+Math.cos(r)*186,i+Math.sin(r)*186),e.rotate(r+Math.PI/2),e.beginPath();for(let a=0;a<4;a++)e.lineTo((n()-.5)*22,(n()-.5)*30);e.stroke(),e.restore()}e.lineWidth=2.5;for(let s=0;s<2;s++){e.beginPath();for(let r=0;r<=4;r++){let a=r/4*Math.PI*2+s*Math.PI/4;e.lineTo(i+Math.cos(a)*150,i+Math.sin(a)*150)}e.stroke()}})}function Kv(){let n=Hi(5);return Vi(128,(t,i)=>{for(let s=0;s<13;s++){let r=i*(.3+n()*.4),a=(n()-.5)*i*.75,o=i*(.45+n()*.5),l=5+n()*5,c=t.createLinearGradient(0,i,0,i-o);c.addColorStop(0,"#2f5a2a"),c.addColorStop(1,`hsl(${85+n()*30},60%,${50+n()*20}%)`),t.fillStyle=c,t.beginPath(),t.moveTo(r-l,i),t.quadraticCurveTo(r+a*.3,i-o*.6,r+a,i-o),t.quadraticCurveTo(r+a*.4,i-o*.5,r+l,i),t.closePath(),t.fill()}})}function jv(){let n=[],e=[],t=[],i=[];for(let r=0;r<2;r++){let a=Math.cos(r*Math.PI/2+.4)*.5,o=Math.sin(r*Math.PI/2+.4)*.5,l=r*4;n.push(-a,0,-o,a,0,o,a,.75,o,-a,.75,-o),e.push(0,0,1,0,1,1,0,1),t.push(0,1,0,0,1,0,0,1,0,0,1,0),i.push(l,l+1,l+2,l,l+2,l+3,l,l+2,l+1,l,l+3,l+2)}let s=new Mt;return s.setAttribute("position",new Xe(n,3)),s.setAttribute("uv",new Xe(e,2)),s.setAttribute("normal",new Xe(t,3)),s.setIndex(i),s}function Qv(){let n=[],e=[],t=[],i=0;for(let[r,a,o]of[[3,4.2,-2.2],[2.3,3.8,.2],[1.5,3.4,2.6]]){let l=new tn(r,a,7);l.translate(0,o,0),n.push(...l.attributes.position.array),e.push(...l.attributes.normal.array);for(let c of l.index.array)t.push(c+i);i+=l.attributes.position.count}let s=new Mt;return s.setAttribute("position",new Xe(n,3)),s.setAttribute("normal",new Xe(e,3)),s.setIndex(t),s}function sf(n){let e=new Oe;n.add(e);let t=Hi(1234),i=$v(),s=Yv(),r=Oi(new Le({map:s,roughness:.9,metalness:.02}),3.2,1.1,"stone"),a=Oi(new Le({map:s,color:11577020,roughness:.95}),3.2,1.1,"stone"),o={root:e,glowTex:i,orbs:[],spin:[],grass:null,sun:null,pointLights:[]};o.fog=new Ys(7029872,.006);let l=new le(new gt(600,32,16),new mt({side:Vt,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:nf}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 sunDir;
        float hash(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float h=d.y;
          vec3 hor=vec3(1.0,0.48,0.26), mid=vec3(0.42,0.17,0.45), top=vec3(0.035,0.05,0.16);
          vec3 c=mix(hor,mid,smoothstep(-0.02,0.22,h)); c=mix(c,top,smoothstep(0.16,0.75,h));
          float s=max(dot(d,sunDir),0.0);
          c+=vec3(1.0,0.55,0.25)*pow(s,6.0)*0.55 + vec3(1.0,0.85,0.6)*pow(s,220.0)*4.0;
          vec3 g=floor(d*220.0); float st=step(0.9972,hash(g));
          c+=vec3(0.9,0.95,1.0)*st*smoothstep(0.25,0.7,h)*(0.6+0.4*hash(g+1.0));
          gl_FragColor=vec4(c,1.0); }`}));l.renderOrder=-10,l.frustumCulled=!1,e.add(l),o.sky=l,e.add(new nr(9676021,5915216,1.55)),e.add(new sr(9404341,.75));let c=new ir(16758912,3.6);c.castShadow=!0,c.shadow.mapSize.set(1024,1024);let h=c.shadow.camera;h.left=-34,h.right=34,h.top=34,h.bottom=-34,h.near=1,h.far=160,c.shadow.bias=-6e-4,c.shadow.normalBias=.04,e.add(c,c.target),o.sun=c;let u=new le(new sn(440,440),new Le({map:Zv(),roughness:.96}));u.material.map.repeat.set(60,60),Oi(u.material,2.6,.9,"ground"),xo(u.material,"bake/ruins.png",xt+8,.36),u.rotation.x=-Math.PI/2,u.receiveShadow=!0,e.add(u);let d=new le(new sn(22,22),new Ct({map:Jv(),transparent:!0,blending:rt,depthWrite:!1,opacity:.75}));d.rotation.x=-Math.PI/2,d.position.y=.04,e.add(d),o.rune=d;let f=T=>(T.castShadow=!0,T.receiveShadow=!0,T),x=T=>new Le({color:T,emissive:T,emissiveIntensity:1.8,roughness:.25,metalness:.1});function v(T,H,Z,X,se,Me){let K=new Oe,ne=new le(new zr(X,0),x(se));ne.scale.y=1.9,K.add(ne);let xe=new Gt(new Ot({map:i,color:se,blending:rt,depthWrite:!1,transparent:!0,opacity:.7}));if(xe.scale.setScalar(X*7),K.add(xe),K.position.set(T,H,Z),e.add(K),o.spin.push({g:K,y:H,sp:.5+t()*.6,ph:t()*6}),Me){let ue=new Di(se,Me,34,1.6);ue.position.set(T,H,Z),e.add(ue),o.pointLights.push(ue)}return K}for(let T of ph)if(T.kind==="altar"){for(let[H,Z,X]of[[3.2,.5,.25],[2.6,.5,.75],[2,.4,1.2]]){let se=f(new le(new Ye(H,H+.15,Z,8),r));se.position.set(T.x,X,T.z),e.add(se)}v(T.x,4.2,T.z,1,5826303,90)}else if(T.kind==="pillar"){let H=t()<.4,Z=H?4+t()*3:T.h,X=f(new le(new tt(T.r*2.5,.7,T.r*2.5),r));X.position.set(T.x,.35,T.z),e.add(X);let se=f(new le(new Ye(T.r*.82,T.r*.95,Z,10),r));if(se.position.set(T.x,.7+Z/2,T.z),se.rotation.z=H?(t()-.5)*.05:0,e.add(se),!H){let Me=f(new le(new tt(T.r*2.6,.6,T.r*2.6),r));Me.position.set(T.x,.7+Z+.3,T.z),e.add(Me),v(T.x,.7+Z+1.6,T.z,.38,16734929,0)}}else if(T.kind==="wall"){let H=f(new le(new tt(T.w,T.h,T.d),r));H.position.set(T.x,T.h/2,T.z),e.add(H);let Z=T.w>T.d,X=Z?T.w:T.d,se=Math.floor(X/2);for(let Me=0;Me<se;Me++){if(t()<.3)continue;let K=.5+t()*.9,ne=-X/2+1+Me*2,xe=f(new le(new tt(Z?1.2:T.w,K,Z?T.d:1.2),r));xe.position.set(T.x+(Z?ne:0),T.h+K/2,T.z+(Z?0:ne)),e.add(xe)}}else{let H=f(new le(new tt(T.w,T.h,T.d),a));H.position.set(T.x,T.h/2,T.z),H.rotation.y=0,e.add(H);let Z=f(new le(new tt(T.w*.6,.7,T.d*.6),r));Z.position.set(T.x+.3,T.h+.35,T.z-.2),Z.rotation.y=.5,e.add(Z)}for(let T of[-1,1])v(0,5.6,T*21,.5,16757310,30),v(T*21,5.6,0,.5,16757310,30);let g=xt+1.5;for(let[T,H,Z,X]of[[0,g,2*g+3,3],[0,-g,2*g+3,3],[g,0,3,2*g+3],[-g,0,3,2*g+3]]){let se=f(new le(new tt(Z,6,X),a));se.position.set(T,3,H),e.add(se)}let p=new Le({color:4861278,roughness:.8});for(let T of[-1,1])for(let H of[-1,1]){let Z=f(new le(new Ye(4,4.6,12,10),a));Z.position.set(T*g,6,H*g),e.add(Z);let X=f(new le(new tn(5,6,10),p));X.position.set(T*g,15,H*g),e.add(X),v(T*g,19.5,H*g,.6,5826303,0)}let _=new Le({color:4863334,roughness:1,flatShading:!0});for(let T=0;T<30;T++){let H=T/30*Math.PI*2+t()*.2,Z=200+t()*90,X=45+t()*70,se=new tn(70+t()*50,X,9,4),Me=se.attributes.position;for(let ne=0;ne<Me.count;ne++){let xe=(.5-Me.getY(ne)/X)*26;Me.setX(ne,Me.getX(ne)+(t()-.5)*xe),Me.setZ(ne,Me.getZ(ne)+(t()-.5)*xe),Me.setY(ne,Me.getY(ne)+(t()-.5)*xe*.5)}se.computeVertexNormals();let K=new le(se,_);K.position.set(Math.cos(H)*Z,X/2-6,Math.sin(H)*Z),K.rotation.y=t()*6,e.add(K)}let S=150,y=new It,U=new Js(new Ye(.35,.5,4,6),new Le({color:3877418,roughness:1}),S),A=new Js(Qv(),new Le({color:16777215,roughness:1,flatShading:!0}),S);for(let T=0;T<S;T++){let H,Z;do H=(t()-.5)*220,Z=(t()-.5)*220;while(Math.abs(H)<g+9&&Math.abs(Z)<g+9);let X=.8+t()*1.3;y.position.set(H,2*X,Z),y.scale.setScalar(X),y.rotation.set(0,t()*6,0),y.updateMatrix(),U.setMatrixAt(T,y.matrix),y.position.y=7*X,y.updateMatrix(),A.setMatrixAt(T,y.matrix),A.setColorAt(T,new Ae().setHSL(.38+t()*.1,.45,.1+t()*.09))}e.add(U,A);let I=new Li(.5,0);for(let T=0;T<60;T++){let H=(t()-.5)*xt*1.9,Z=(t()-.5)*xt*1.9;if(Bi(H,Z,1.2)||Math.hypot(H,Z)<12)continue;let X=f(new le(I,a)),se=.3+t()*.5;X.scale.set(se,se*.6,se),X.position.set(H,se*.15,Z),X.rotation.set(t()*3,t()*3,0),e.add(X)}let R=6200,E=jv(),M=new Js(E,new Le({map:Kv(),alphaTest:.45,roughness:1}),R),N=new Ae;for(let T=0;T<R;T++){let H=(t()-.5)*xt*1.95,Z=(t()-.5)*xt*1.95,X=H+(t()-.5)*2.5,se=Z+(t()-.5)*2.5,Me=Bi(X,se,.3)?0:.7+t()*1.1;y.position.set(X,0,se),y.scale.set(Me,Me,Me),y.rotation.set(0,t()*6,0),y.updateMatrix(),M.setMatrixAt(T,y.matrix),M.setColorAt(T,N.setHSL(.22+t()*.12,.5,.42+t()*.25))}M.receiveShadow=!0,e.add(M),o.grass=M,o.grassMax=R;let V=260,z=new Float32Array(V*3),Y=new Float32Array(V);for(let T=0;T<V;T++)z[T*3]=(t()-.5)*xt*2.2,z[T*3+1]=.6+t()*7,z[T*3+2]=(t()-.5)*xt*2.2,Y[T]=t()*100;let J=new Mt;J.setAttribute("position",new At(z,3)),J.setAttribute("ph",new At(Y,1));let W=new Ii(J,new mt({transparent:!0,depthWrite:!1,blending:rt,uniforms:{time:{value:0},scale:{value:400}},vertexShader:`attribute float ph; uniform float time; uniform float scale; varying float vA;
      void main(){ vec3 p=position; p.x+=sin(time*0.4+ph)*1.6; p.y+=sin(time*0.7+ph*1.7)*0.7; p.z+=cos(time*0.33+ph*1.3)*1.6;
        vA=0.45+0.55*sin(time*2.0+ph*3.0); vec4 mv=modelViewMatrix*vec4(p,1.0);
        gl_PointSize=scale*0.24/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying float vA; void main(){ float d=length(gl_PointCoord-0.5);
      gl_FragColor=vec4(vec3(1.0,0.86,0.45)*2.0, smoothstep(0.5,0.0,d)*vA); }`}));W.frustumCulled=!1,e.add(W),o.flies=W;let P=new Le({color:5898140,emissive:3014527,emissiveIntensity:3,roughness:.2});for(let[T,H]of mh){let Z=new Oe;Z.add(new le(new Qs(.42,1),P));let X=new Gt(new Ot({map:i,color:5898140,blending:rt,depthWrite:!1,transparent:!0,opacity:.8}));X.scale.setScalar(3.2),Z.add(X);let se=new le(new Hn(.9,1.1,24),new Ct({color:5898140,transparent:!0,opacity:.5,blending:rt,depthWrite:!1,side:yt}));se.rotation.x=-Math.PI/2,se.position.y=-1.15,Z.add(se),Z.position.set(T,1.2,H),e.add(Z),o.orbs.push(Z)}return o.update=(T,H,Z)=>{c.target.position.set(H.x,0,H.z),c.position.copy(c.target.position).addScaledVector(nf,80),l.position.set(H.x,0,H.z),W.material.uniforms.time.value=T,d.material.opacity=.55+.25*Math.sin(T*1.3),d.rotation.z=T*.05;for(let X of o.spin)X.g.rotation.y=T*X.sp,X.g.position.y=X.y+Math.sin(T*1.2+X.ph)*.25;for(let X=0;X<o.orbs.length;X++){let se=o.orbs[X];se.visible=!!(Z&1<<X),se.position.y=1.2+Math.sin(T*2+X)*.18,se.rotation.y=T*1.5}},o}function wh(n,e,t,i,s){let r=t.map(u=>{let d=i[u.type],f=new Oe,x=new Le({color:d.color,emissive:d.color,emissiveIntensity:2.4,roughness:.3}),v=new le(u.type==="dmg"?new ja(.5,0):new zr(.45,0),x);v.castShadow=!0,f.add(v);let g=new Gt(new Ot({map:e,color:d.color,blending:rt,depthWrite:!1,transparent:!0,opacity:.85}));g.scale.setScalar(3),f.add(g);let p=new le(new Hn(.8,1.15,6),new Ct({color:d.color,transparent:!0,opacity:.55,blending:rt,depthWrite:!1,side:yt}));return p.rotation.x=-Math.PI/2,p.position.y=-1.15,f.add(p),f.position.set(u.x,1.2,u.z),n.add(f),{g:f,gem:v,base:p}}),a=new Ct({color:16777215,transparent:!0,opacity:.5,blending:rt,depthWrite:!1,side:yt}),o=new le(new Hn(s-.35,s,72),a);o.rotation.x=-Math.PI/2,o.position.y=.06,o.visible=!1,n.add(o);let l=new Ct({color:16777215,transparent:!0,opacity:.12,blending:rt,depthWrite:!1,side:yt}),c=new le(new Ye(s,s,6,48,1,!0),l);c.position.y=3,c.visible=!1,n.add(c);let h={0:16773840,mine:15910509,other:16731486,contest:12020735};return{update(u,d,f,x,v){r.forEach((p,_)=>{p.g.visible=!!(d&1<<_),p.gem.rotation.y=u*2+_,p.gem.rotation.x=u*1.3,p.g.position.y=1.2+Math.sin(u*2.4+_)*.2,p.base.rotation.z=u*.8});let g=f==="koth";if(o.visible=c.visible=g,g){let p=x===0?h[0]:x===-1?h.contest:x===v?h.mine:h.other;a.color.setHex(p),l.color.setHex(p),a.opacity=.45+.25*Math.sin(u*(x?6:2)),l.opacity=x?.16:.07}}}}var Th=new D(.55,.5,-.67).normalize();function e_(){let n=Hi(77);return Vi(256,(e,t)=>{e.fillStyle="#3a2a22",e.fillRect(0,0,t,t);let i=8,s=t/i;for(let r=0;r<i;r++){let a=70+n()*35;e.fillStyle=`rgb(${a+20},${a},${a-18})`,e.fillRect(0,r*s+1,t,s-2);for(let l=0;l<14;l++){e.strokeStyle=`rgba(30,18,10,${.15+n()*.2})`,e.lineWidth=1;let c=r*s+2+n()*(s-4);e.beginPath(),e.moveTo(0,c),e.bezierCurveTo(t*.3,c+(n()-.5)*3,t*.6,c+(n()-.5)*3,t,c),e.stroke()}let o=n()*t;e.fillStyle="rgba(15,8,5,0.8)",e.fillRect(o,r*s,2,s),e.fillStyle="rgba(160,160,170,0.6)",e.fillRect(o-6,r*s+s/2-1,2,2),e.fillRect(o+6,r*s+s/2-1,2,2)}},1)}function t_(){return Vi(128,(n,e)=>{n.fillStyle="#7a5532",n.fillRect(0,0,e,e),n.fillStyle="#5c3d22";for(let t=0;t<4;t++)n.fillRect(0,t*32+30,e,3);n.lineWidth=10,n.strokeStyle="#4a2f18",n.strokeRect(5,5,e-10,e-10),n.beginPath(),n.moveTo(10,10),n.lineTo(e-10,e-10),n.stroke()},1)}function rf(n,e){let t=Hi(4321),i=new Oe;n.add(i);let s={root:i,glowTex:e,orbs:[],spin:[],grass:null,grassMax:0,sun:null,pointLights:[]};s.fog=new Ys(1450815,.0085);let r=new le(new gt(600,32,16),new mt({side:Vt,depthWrite:!1,fog:!1,uniforms:{moon:{value:Th}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 moon;
        float hash(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float h=d.y;
          vec3 c=mix(vec3(0.12,0.2,0.33),vec3(0.03,0.05,0.12),smoothstep(-0.02,0.5,h));
          float m=max(dot(d,moon),0.0);
          c+=vec3(0.55,0.65,0.85)*pow(m,18.0)*0.5 + vec3(1.0,0.97,0.88)*smoothstep(0.9985,0.9992,m)*2.2;
          vec3 g=floor(d*260.0); float st=step(0.9965,hash(g));
          c+=vec3(0.85,0.9,1.0)*st*smoothstep(0.1,0.6,h)*(0.4+0.6*hash(g+2.0))*(1.0-smoothstep(0.98,0.995,m));
          gl_FragColor=vec4(c,1.0); }`}));r.renderOrder=-10,r.frustumCulled=!1,i.add(r),s.sky=r,i.add(new nr(9414892,3811888,1.7)),i.add(new sr(6978218,.8));let a=new ir(11453695,1.9);a.castShadow=!0,a.shadow.mapSize.set(1024,1024);let o=a.shadow.camera;o.left=-34,o.right=34,o.top=34,o.bottom=-34,o.near=1,o.far=160,a.shadow.bias=-6e-4,a.shadow.normalBias=.04,i.add(a,a.target),s.sun=a;let l=e_();l.repeat.set(Math.round(xt*.55),Math.round(xt*.55));let c=new le(new sn(xt*2+4,xt*2+4),Oi(new Le({map:l,roughness:.78,color:13154480}),3,1,"planks"));xo(c.material,"bake/harbor.png",xt+8,.42),c.rotation.x=-Math.PI/2,c.receiveShadow=!0,i.add(c);let h=new le(new sn(900,900,1,1),new mt({fog:!0,uniforms:Vn.merge([he.fog,{time:{value:0},moon:{value:Th}}]),vertexShader:`varying vec3 vW;
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
          float edge=max(abs(vW.x),abs(vW.z))-${(xt+2).toFixed(1)};                       // buih di tepi dermaga
          float foam=smoothstep(2.6,0.0,edge)*step(0.0,edge)*(0.5+0.5*sin(edge*4.0-time*2.0+sin(vW.x*0.8+vW.z*0.7)*2.0));
          c+=vec3(0.55,0.65,0.75)*foam*0.35;
          gl_FragColor=vec4(c,1.0);
#include <fog_fragment>
        }`}));h.rotation.x=-Math.PI/2,h.position.y=-.6,i.add(h),s.water=h;let u=new Le({color:6120048,roughness:.95}),d=Oi(new Le({map:l,color:9071192,roughness:.9}),3,1,"planks"),f=new Le({color:3877412,roughness:.9}),x=Oi(new Le({map:t_(),roughness:.85}),3,1,"crate"),v=new Le({color:2898514,roughness:.8,flatShading:!0}),g=new Le({color:9402954,roughness:.35,metalness:.9}),p=P=>(P.castShadow=!0,P.receiveShadow=!0,P),_=(P,T,H,Z,X)=>{let se=p(new le(P,T));return se.position.set(H,Z,X),i.add(se),se},S=xt+1;for(let[P,T,H,Z]of[[0,S,2*S+2,2],[0,-S,2*S+2,2],[S,0,2,2*S+2],[-S,0,2,2*S+2]])_(new tt(H,1.4,Z),u,P,.2,T);let y=Math.floor((xt-4)/10)*10;for(let P=-y;P<=y;P+=10)for(let[T,H]of[[P,S],[P,-S],[S,P],[-S,P]])_(new Ye(.35,.45,1.2,8),f,T,1.3,H);let U=(P,T,H,Z)=>{let X=new Oe;X.add(p(new le(new tt(.4,.55,.4),g)));let se=new le(new tt(.3,.4,.3),new Le({color:16757596,emissive:16751162,emissiveIntensity:3}));X.add(se);let Me=new Gt(new Ot({map:e,color:16752704,blending:rt,depthWrite:!1,transparent:!0,opacity:.85}));if(Me.scale.setScalar(4),X.add(Me),X.position.set(P,T,H),i.add(X),Z){let K=new Di(16751173,28,24,1.6);K.position.set(P,T,H),i.add(K),s.pointLights.push(K)}s.spin.push({flick:Me,ph:t()*10})};for(let P of qt.harbor.obst)if(P.kind==="bell"){_(new Ye(P.r,P.r+.3,P.h,10),u,P.x,P.h/2,P.z);for(let[Z,X]of[[1,1],[1,-1],[-1,1],[-1,-1]])_(new tt(.35,4.2,.35),f,P.x+Z*1.5,P.h+2.1,P.z+X*1.5);let T=_(new tn(2.8,2,4),v,P.x,P.h+5.2,P.z);T.rotation.y=Math.PI/4;let H=_(new Ye(.5,1,1.4,16,1,!0),g,P.x,P.h+3,P.z);H.material.side=yt,s.bell=H,U(P.x,P.h+1.6,P.z+1.9,!1),U(P.x,P.h+1.6,P.z-1.9,!1)}else if(P.kind==="shed"){_(new tt(P.w,P.h,P.d),d,P.x,P.h/2,P.z);let T=P.w>P.d,H=new le(new Ye(.01,(T?P.d:P.w)*.75,T?P.w+.6:P.d+.6,3,1),v);H.rotation.set(T?0:Math.PI/2,0,T?Math.PI/2:0),T?H.rotation.set(0,0,Math.PI/2):H.rotation.set(Math.PI/2,0,0),H.scale.set(1,1,.55),H.position.set(P.x,P.h+.9,P.z),p(H),i.add(H);for(let Z=-1;Z<=1;Z+=2){let X=new le(new sn(1.6,2.6),new Le({color:1708040,emissive:3809032,emissiveIntensity:.8}));T?(X.position.set(P.x+Z*P.w/4,1.3,P.z+Math.sign(P.z||1)*-(P.d/2+.02)),X.rotation.y=P.z>0?Math.PI:0):(X.position.set(P.x+Math.sign(P.x||1)*-(P.w/2+.02),1.3,P.z+Z*P.d/4),X.rotation.y=P.x>0?-Math.PI/2:Math.PI/2),i.add(X)}}else if(P.kind==="mast"){_(new Ye(P.r*.7,P.r,P.h,8),f,P.x,P.h/2,P.z);let T=_(new tt(5,.25,.25),f,P.x,P.h*.78,P.z);T.rotation.y=Math.atan2(P.x,P.z);let H=new le(new sn(4.2,5,4,4),new Le({color:13616820,roughness:1,side:yt}));H.position.set(P.x,P.h*.55,P.z),H.rotation.y=Math.atan2(P.x,P.z),p(H),i.add(H),s.spin.push({sail:H,ph:t()*6}),U(P.x+Math.sign(P.x)*-.6,3.2,P.z+Math.sign(P.z)*-.6,!0)}else if(P.kind==="crate"){let T=Math.max(1,Math.round(P.w*P.d/6));if(_(new tt(P.w,P.h,P.d),x,P.x,P.h/2,P.z),T>1){let H=_(new tt(1.6,1.6,1.6),x,P.x+(t()-.5)*(P.w-1.8),P.h+.8,P.z+(t()-.5)*(P.d-1.8));H.rotation.y=t()}}else if(P.kind==="boat"){let T=_(new Ye(P.w/2,P.w/2,P.d,14,1,!1,0,Math.PI),f,P.x,P.h,P.z);T.rotation.set(Math.PI/2,0,Math.PI),T.scale.set(1,1,.75),_(new tt(P.w*.9,.12,P.d*.95),d,P.x,P.h-.05,P.z);let H=_(new tt(.12,.12,4),d,P.x+.6,P.h+.2,P.z);H.rotation.y=.4}else P.kind==="post"&&(_(new Ye(P.r,P.r*1.1,P.h,8),f,P.x,P.h/2,P.z),_(new Cn(P.r+.08,.1,6,14),new Le({color:11901546,roughness:1}),P.x,1.6,P.z).rotation.x=Math.PI/2);let A=new Le({color:857124,roughness:1});for(let[P,T,H,Z]of[[-120,90,.4,1.2],[140,70,-.8,1.6],[-90,-150,1.2,1.3]]){let X=new Oe,se=new le(new tt(6,3,26),A);se.position.y=1,X.add(se);for(let Me of[-6,4]){let K=new le(new Ye(.3,.4,18,6),A);K.position.set(0,11,Me),X.add(K)}X.position.set(P,-.5,T),X.rotation.y=H,X.scale.setScalar(Z),i.add(X)}let I=new Oe;I.add(new le(new Ye(3,5,34,12),new Le({color:14209736,roughness:.9}))),I.children[0].position.y=17;let R=new le(new gt(2.2,12,8),new Le({color:16773312,emissive:16770976,emissiveIntensity:4}));R.position.y=36,I.add(R);let E=new le(new tn(9,140,24,1,!0),new Ct({color:16773572,transparent:!0,opacity:.08,blending:rt,depthWrite:!1,side:yt,fog:!1}));E.geometry.translate(0,-70,0),E.rotation.z=Math.PI/2;let M=new Oe;M.position.y=36,M.add(E),I.add(M),I.position.set(170,-1,-140),i.add(I),s.beam=M;let N=new Le({color:5898140,emissive:3014527,emissiveIntensity:3,roughness:.2});for(let[P,T]of qt.harbor.orbs){let H=new Oe;H.add(new le(new Qs(.42,1),N));let Z=new Gt(new Ot({map:e,color:5898140,blending:rt,depthWrite:!1,transparent:!0,opacity:.8}));Z.scale.setScalar(3.2),H.add(Z),H.position.set(P,1.2,T),i.add(H),s.orbs.push(H)}let V=220,z=new Float32Array(V*3),Y=new Float32Array(V);for(let P=0;P<V;P++)z[P*3]=(t()-.5)*xt*2.2,z[P*3+1]=.4+t()*5,z[P*3+2]=(t()-.5)*xt*2.2,Y[P]=t()*100;let J=new Mt;J.setAttribute("position",new At(z,3)),J.setAttribute("ph",new At(Y,1));let W=new Ii(J,new mt({transparent:!0,depthWrite:!1,blending:rt,uniforms:{time:{value:0},scale:{value:400}},vertexShader:`attribute float ph; uniform float time; uniform float scale; varying float vA;
      void main(){ vec3 p=position; p.x+=sin(time*0.2+ph)*2.5; p.y+=sin(time*0.4+ph*1.7)*0.4; p.z+=cos(time*0.17+ph*1.3)*2.5;
        vA=0.25+0.25*sin(time*0.8+ph*3.0); vec4 mv=modelViewMatrix*vec4(p,1.0);
        gl_PointSize=scale*0.6/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying float vA; void main(){ float d=length(gl_PointCoord-0.5);
      gl_FragColor=vec4(vec3(0.7,0.8,1.0), smoothstep(0.5,0.0,d)*vA*0.6); }`}));return W.frustumCulled=!1,i.add(W),s.flies=W,s.barrels=qt.harbor.barrels.map(([P,T])=>{let H=new Oe,Z=p(new le(new Ye(.55,.5,1.3,12),new Le({color:10234658,roughness:.6})));Z.position.y=.65,H.add(Z);for(let se of[.3,1]){let Me=new le(new Cn(.55,.04,6,16),g);Me.rotation.x=Math.PI/2,Me.position.y=se,H.add(Me)}let X=new le(new gt(.16,8,6),new Le({color:16761402,emissive:16747034,emissiveIntensity:3}));return X.position.set(0,1.42,0),H.add(X),H.position.set(P,0,T),i.add(H),H}),s.update=(P,T,H,Z=0)=>{s.barrels.forEach((X,se)=>{X.visible=!!(Z&1<<se)}),a.target.position.set(T.x,0,T.z),a.position.copy(a.target.position).addScaledVector(Th,80),r.position.set(T.x,0,T.z),h.material.uniforms.time.value=P,W.material.uniforms.time.value=P,s.beam.rotation.y=P*.6,s.bell&&(s.bell.rotation.z=Math.sin(P*.8)*.06);for(let X of s.spin)X.flick&&(X.flick.material.opacity=.7+.15*Math.sin(P*9+X.ph)+.1*Math.sin(P*23+X.ph)),X.sail&&(X.sail.rotation.x=Math.sin(P*.7+X.ph)*.08);for(let X=0;X<s.orbs.length;X++){let se=s.orbs[X];se.visible=!!(H&1<<X),se.position.y=1.2+Math.sin(P*2+X)*.18,se.rotation.y=P*1.5}},s}var Ah=zi(new Le({color:2764100,roughness:.85})),af=zi(new Le({color:14263420,roughness:.7}),9078472,.3),Gi=new Le({color:10133692,roughness:.35,metalness:.85}),vo=new Le({color:5978661,roughness:.9}),dr={leg:new ss(.15,.6,3,8),arm:new ss(.11,.5,3,8),torso:new Ye(.36,.27,.85,10),head:new gt(.24,14,10),robe:new Ye(.3,.62,.95,12,1,!0),boot:new tt(.2,.14,.36)};function ct(n,e,t=0,i=0,s=0){let r=new le(n,e);return r.position.set(t,i,s),r.castShadow=!0,r}var _o=class{constructor(e,t,i,s,r=null,a="default"){let o=fn[e],l=ki.find(U=>U.id===a)||ki[0],c=new Ae(l.glow??o.color);this.clsKey=e,this.isMe=i,this.name=t,this.tagColor=r!==null?"#"+r.toString(16).padStart(6,"0"):"#ffe9c4",this.phase=0,this.kick=0,this.deadT=0,this.spawnT=.4,this.lastX=0,this.lastZ=0,this.speed=0,this.shown={hp:-1,maxHp:-1,lvl:-1};let h=this.group=new Oe,u=this.body=new Oe;h.add(u);let d=zi(new Le({color:l.accent!==void 0?new Ae(l.accent):c.clone().multiplyScalar(.38),roughness:.8,side:yt,metalness:l.id==="raja"||l.id==="bulan"?.5:0})),f=new Le({color:c,emissive:c,emissiveIntensity:3,roughness:.3});this.legL=new Oe,this.legL.position.set(.2,1,0),this.legR=new Oe,this.legR.position.set(-.2,1,0);for(let U of[this.legL,this.legR])U.add(ct(dr.leg,Ah,0,-.5,0),ct(dr.boot,vo,0,-.93,.07)),u.add(U);let x=this.upper=new Oe;u.add(x),x.add(ct(dr.torso,Ah,0,1.5,0),ct(dr.robe,d,0,1,0),ct(dr.head,af,0,2.14,0));let v=ct(new Cn(.31,.05,6,16),Gi,0,1.2,0);v.rotation.x=Math.PI/2,x.add(v);let g=ct(new sn(.75,1.15,1,3),d,0,1.3,-.33);g.rotation.x=.16,x.add(g),this.cape=g,this.armL=new Oe,this.armL.position.set(.46,1.82,0),this.armR=new Oe,this.armR.position.set(-.46,1.82,0);for(let U of[this.armL,this.armR])U.add(ct(dr.arm,Ah,0,-.32,0),ct(new gt(.1,8,6),af,0,-.68,0)),x.add(U);let p=this.weapon=new Oe;p.position.set(-.46,1.62,.55),x.add(p);let _=.7,S=0;if(e==="ranger"){let U=ct(new gt(.3,14,10,0,Math.PI*2,0,Math.PI*.62),d,0,2.17,-.03);x.add(U),p.add(ct(new tt(.09,.1,.95),vo,0,0,.1));let A=ct(new Cn(.42,.035,6,14,Math.PI),Gi,0,0,.45);A.rotation.set(Math.PI/2,0,0),p.add(A);let I=ct(new Ye(.03,.03,.7,6),f,0,.07,.3);I.rotation.x=Math.PI/2,p.add(I)}else if(e==="mage"){x.add(ct(new Ye(.48,.48,.04,16),d,0,2.32,0));let U=ct(new tn(.3,.8,12),d,0,2.72,-.04);U.rotation.x=-.18,x.add(U),p.add(ct(new Ye(.045,.055,2.1,8),vo,0,.15,0)),p.add(ct(new gt(.19,12,10),f,0,1.32,0));let A=ct(new Cn(.22,.03,6,12,Math.PI*1.4),Gi,0,1.3,0);A.rotation.z=-.7,p.add(A),_=0,S=1.32}else if(e==="priest"){let U=ct(new Cn(.27,.035,8,20),f,0,2.55,0);U.rotation.x=Math.PI/2,x.add(U),x.add(ct(new tt(.16,.9,.05),f,0,1.45,.3)),p.add(ct(new Ye(.04,.05,2,8),vo,0,.1,0));let A=ct(new Ye(.24,.24,.05,12),f,0,1.25,0);A.rotation.x=Math.PI/2,p.add(A);for(let I=0;I<8;I++){let R=ct(new tn(.04,.16,4),f,Math.cos(I*.785)*.33,1.25+Math.sin(I*.785)*.33,0);R.rotation.z=I*.785-Math.PI/2,p.add(R)}_=0,S=1.25}else{x.add(ct(new gt(.29,14,10,0,Math.PI*2,0,Math.PI*.6),Gi,0,2.18,0));for(let R of[-1,1]){let E=ct(new tn(.07,.34,6),Gi,R*.27,2.4,0);E.rotation.z=-R*.6,x.add(E),x.add(ct(new gt(.2,10,8),Gi,R*.48,1.86,0))}let U=ct(new Ye(.15,.19,.85,10),Gi,0,0,.15);U.rotation.x=Math.PI/2,p.add(U);let A=ct(new Cn(.2,.045,6,16),f,0,0,.5);p.add(A);let I=ct(new Ye(.5,.5,.07,6),Gi,.72,1.5,.28);I.rotation.set(Math.PI/2,0,.2),x.add(I),x.add(ct(new Ks(.2,6),f,.72,1.5,.33)),_=.62}this.tip=new It,this.tip.position.set(0,S,_),p.add(this.tip),this.tipGlow=new Gt(new Ot({map:s,color:c,blending:rt,depthWrite:!1,transparent:!0,opacity:.8})),this.tipGlow.scale.setScalar(.9),this.tip.add(this.tipGlow),this.armR.rotation.x=-1.3,this.bubble=new le(new gt(1.55,20,14),new Ct({color:c,transparent:!0,opacity:.22,blending:rt,depthWrite:!1})),this.bubble.position.y=1.3,this.bubble.visible=!1,h.add(this.bubble);let y=new le(new Ks(.75,16),new Ct({color:0,transparent:!0,opacity:.35,depthWrite:!1}));if(y.rotation.x=-Math.PI/2,y.position.y=.03,h.add(y),this.blob=y,r!==null&&(this.ring=new le(new Hn(.8,1,32),new Ct({color:r,transparent:!0,opacity:.85,blending:rt,depthWrite:!1,side:yt})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.05,h.add(this.ring)),!i){let U=this.tagCanvas=document.createElement("canvas");U.width=256,U.height=64,this.tagTex=new ci(U),this.tagTex.colorSpace=kt,this.tag=new Gt(new Ot({map:this.tagTex,transparent:!0,depthWrite:!1,fog:!1})),this.tag.scale.set(3.4,.85,1),this.tag.position.y=3.25,this.tag.renderOrder=5,h.add(this.tag)}}setInfo(e,t,i,s=!1){let r=this.shown;if(!this.tag||r.hp===e&&r.maxHp===t&&r.lvl===i&&r.b===s)return;r.hp=e,r.maxHp=t,r.lvl=i,r.b=s;let a=this.tagCanvas.getContext("2d");a.clearRect(0,0,256,64),a.font="600 24px Georgia, serif",a.textAlign="center",a.textBaseline="middle",a.lineWidth=4,a.strokeStyle="rgba(0,0,0,0.85)";let o=`${s?"\u2605 ":""}${this.name}  Lv${i}`;a.strokeText(o,128,20),a.fillStyle=this.tagColor,a.fillText(o,128,20),a.fillStyle="rgba(0,0,0,0.7)",a.fillRect(38,40,180,14);let l=Math.max(0,e/t);a.fillStyle=l>.5?"#ff5d5d":l>.25?"#ff9a3d":"#ffd23d",a.fillRect(40,42,176*l,10),this.tagTex.needsUpdate=!0}fireKick(){this.kick=1}tipWorld(e){return this.tip.getWorldPosition(e)}update(e,t,i,s,r,a){let o=r&1,l=this.group,c=t-this.lastX,h=i-this.lastZ,u=e>0?Math.min(40,Math.hypot(c,h)/e):0;this.speed+=(u-this.speed)*Math.min(1,e*12),this.lastX=t,this.lastZ=i,l.position.set(t,0,i),l.rotation.y=s;let d=Math.min(1,this.speed/6);this.phase+=this.speed*e*1.35;let f=Math.sin(this.phase)*.75*d,x=u>.01?(c*Math.sin(s)+h*Math.cos(s))/(u*e||1):0,v=u>.01?(-c*Math.cos(s)+h*Math.sin(s))/(u*e||1):0;this.legL.rotation.x=f,this.legR.rotation.x=-f,this.legL.rotation.z=this.legR.rotation.z=v*.25*d*Math.sin(this.phase),this.armL.rotation.x=-f*.7,this.body.position.y=Math.abs(Math.sin(this.phase))*.07*d+Math.sin(a*2)*.012,this.upper.rotation.x=.13*d*x,this.upper.rotation.z=-.1*d*v,this.cape.rotation.x=.16+.5*d*Math.max(0,x)+Math.sin(a*3+this.phase)*.04,this.kick=Math.max(0,this.kick-e*7),this.weapon.position.z=.55-this.kick*.22,this.armR.rotation.x=-1.3-this.kick*.25,this.tipGlow.scale.setScalar(.7+this.kick*1.2+Math.sin(a*5)*.08),o?(this.deadT=Math.min(1,this.deadT+e*2.6),this.spawnT=0):(this.deadT>0&&(this.deadT=0,this.spawnT=0),this.spawnT=Math.min(.4,this.spawnT+e));let g=this.deadT*this.deadT*(3-2*this.deadT);this.body.rotation.x=-g*1.5,this.body.position.y+=g*.25;let p=o?1:.4+1.5*this.spawnT;l.scale.setScalar(Math.min(1,p)*(this.big||1)),this.tag&&(this.tag.visible=!o),this.blob.visible=!o,this.ring&&(this.ring.visible=!o);let _=r&2,S=r&4;if(this.bubble.visible=!!(_||S)&&!o,r&64&&!o){if(!this.crown){this.crown=new Oe;let y=new Le({color:16764746,emissive:16753178,emissiveIntensity:1.6,metalness:.8,roughness:.3});this.crown.add(new le(new Ye(.32,.36,.18,10,1,!0),y));for(let U=0;U<5;U++){let A=new le(new tn(.07,.24,5),y),I=U/5*Math.PI*2;A.position.set(Math.cos(I)*.32,.18,Math.sin(I)*.32),this.crown.add(A)}this.crown.position.y=2.95,this.group.add(this.crown)}this.crown.visible=!0,this.crown.rotation.y=a*1.5,this.crown.position.y=2.95+Math.sin(a*3)*.06}else this.crown&&(this.crown.visible=!1);this.bubble.visible&&(this.bubble.material.opacity=_?.2+.08*Math.sin(a*9):.1+.08*Math.sin(a*18),this.bubble.rotation.y=a*1.5,this.bubble.scale.setScalar(_?1:.85))}dispose(e){e.remove(this.group),this.tagTex&&(this.tagTex.dispose(),this.tag.material.dispose())}},yo=class{constructor(e,t){this.kind=e,this.phase=0,this.kick=0,this.deadT=0,this.lastX=0,this.lastZ=0,this.speed=0;let i=this.group=new Oe,s=this.body=new Oe;i.add(s);let r=(h,u,d=0,f=0,x=0)=>{let v=new le(h,u);return v.position.set(d,f,x),v.castShadow=!0,s.add(v),v},a=h=>new Le({color:h,emissive:h,emissiveIntensity:4});if(e==="ghoul"){let h=zi(new Le({color:4018752,roughness:.9})),u=r(new gt(.5,12,10),h,0,1.2,-.1);u.scale.set(1,1.2,.9),u.rotation.x=.6,r(new gt(.3,12,10),h,0,1.75,.35);for(let d of[-1,1])r(new gt(.06,8,6),a(9174890),d*.12,1.8,.62);this.armL=new Oe,this.armL.position.set(.45,1.45,.1),this.armR=new Oe,this.armR.position.set(-.45,1.45,.1);for(let d of[this.armL,this.armR]){let f=new le(new ss(.09,.95,3,8),h);f.position.y=-.55,f.castShadow=!0,d.add(f),d.rotation.x=-.5,s.add(d)}this.legL=new Oe,this.legL.position.set(.22,.75,0),this.legR=new Oe,this.legR.position.set(-.22,.75,0);for(let d of[this.legL,this.legR]){let f=new le(new ss(.12,.5,3,8),h);f.position.y=-.38,f.castShadow=!0,d.add(f),s.add(d)}this.tipY=1.4}else if(e==="caster"||e==="frost"){let h=e==="frost"?8378623:13134847,u=zi(new Le({color:e==="frost"?1715268:2366003,roughness:.8,side:yt}));r(new tn(.6,1.8,12,1,!0),u,0,1.15,0);let d=r(new gt(.34,12,10,0,Math.PI*2,0,Math.PI*.6),u,0,2.05,0);d.rotation.x=-.2;for(let x of[-1,1])r(new gt(.05,8,6),a(h),x*.1,1.98,.27);this.orb=r(new gt(.2,12,10),a(h),.45,1.5,.45);let f=new Gt(new Ot({map:t,color:h,blending:rt,depthWrite:!1,transparent:!0,opacity:.8}));f.scale.setScalar(1.6),this.orb.add(f),this.tipY=1.5}else if(e==="spiderling"||e==="queen"){let h=e==="queen",u=h?2.4:.75;this.baseScale=u;let d=zi(new Le({color:h?3804956:2761264,roughness:.6}));r(new gt(.55,12,10),d,0,.7,-.45).scale.set(1,.85,1.25),r(new gt(.32,12,10),d,0,.6,.3),h&&r(new tt(.5,.06,.7),a(16723546),0,1.17,-.45);for(let x of[-1,1])r(new gt(.06,8,6),a(16726843),x*.12,.72,.56),r(new gt(.04,8,6),a(16726843),x*.22,.66,.5);this.spLegs=[];for(let x of[-1,1])for(let v=0;v<4;v++){let g=new Oe;g.position.set(x*.25,.6,.25-v*.22),g.rotation.y=x*(.5-v*.35);let p=new le(new Ye(.035,.02,.9,5),d);p.position.set(x*.4,-.12,0),p.rotation.z=x*1,p.castShadow=!0,g.add(p),s.add(g),this.spLegs.push(g)}s.scale.setScalar(u),this.tipY=.7*u}else{let h=zi(new Le({color:7036242,roughness:1,flatShading:!0})),u=a(16747050);r(new Li(1.1,0),h,0,2.3,0).scale.set(1.2,1,.9),r(new tt(.9,.12,.1),u,0,2.3,.85),r(new Li(.5,0),h,0,3.45,.15);for(let f of[-1,1])r(new gt(.09,8,6),u,f*.2,3.5,.55);this.armL=new Oe,this.armL.position.set(1.35,2.8,0),this.armR=new Oe,this.armR.position.set(-1.35,2.8,0);for(let f of[this.armL,this.armR]){let x=new le(new Li(.55,0),h);x.position.y=-1.2,x.castShadow=!0,f.add(x);let v=new le(new tt(.5,1.1,.5),h);v.position.y=-.5,v.castShadow=!0,f.add(v),s.add(f)}this.legL=new Oe,this.legL.position.set(.6,1.3,0),this.legR=new Oe,this.legR.position.set(-.6,1.3,0);for(let f of[this.legL,this.legR]){let x=new le(new tt(.65,1.3,.65),h);x.position.y=-.65,x.castShadow=!0,f.add(x),s.add(f)}this.tipY=2.4}this.tip=new It,this.tip.position.set(0,this.tipY,.6),s.add(this.tip);let o=e==="brute"||e==="queen",l=new le(new Ks(o?1.6:.75,16),new Ct({color:0,transparent:!0,opacity:.35,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.03,i.add(l),this.blob=l;let c=this.tagCanvas=document.createElement("canvas");c.width=128,c.height=16,this.tagTex=new ci(c),this.tag=new Gt(new Ot({map:this.tagTex,transparent:!0,depthWrite:!1,fog:!1})),this.tag.scale.set(o?3.2:1.6,o?.4:.2,1),this.tag.position.y=e==="brute"?4.3:e==="queen"?3.4:e==="spiderling"?1.3:2.5,this.tag.renderOrder=5,i.add(this.tag),this.shown=-1}setInfo(e,t){let i=Math.max(0,e/t);if(Math.abs(i-this.shown)<.01)return;this.shown=i;let s=this.tagCanvas.getContext("2d");s.clearRect(0,0,128,16),s.fillStyle="rgba(0,0,0,.7)",s.fillRect(0,0,128,16),s.fillStyle=this.kind==="brute"||this.kind==="queen"?"#ff8a2a":"#ff5d5d",s.fillRect(2,2,124*i,12),this.tagTex.needsUpdate=!0}fireKick(){this.kick=1,this.windT=0}windup(e){this.windT=e,this.windMax=e}tipWorld(e){return this.tip.getWorldPosition(e)}update(e,t,i,s,r,a){let o=r&1,l=this.group;this.windT=Math.max(0,(this.windT||0)-e);let c=this.windT>0?1-this.windT/this.windMax:0,h=e>0?Math.min(30,Math.hypot(t-this.lastX,i-this.lastZ)/e):0;this.speed+=(h-this.speed)*Math.min(1,e*10),this.lastX=t,this.lastZ=i,l.position.set(t,0,i),l.rotation.y=s;let u=Math.min(1,this.speed/5);this.phase+=this.speed*e*(this.kind==="brute"?.7:1.4);let d=Math.sin(this.phase)*.7*u;this.legL&&(this.legL.rotation.x=d,this.legR.rotation.x=-d),this.kick=Math.max(0,this.kick-e*4),this.armL&&(this.armL.rotation.x=(this.kind==="ghoul"?-.5:0)-d*.6-this.kick*1.6-c*2.4,this.armR.rotation.x=(this.kind==="ghoul"?-.5:0)+d*.6-this.kick*1.6-c*2.4),this.body.scale.setScalar((this.baseScale||1)*(1+c*.15)),this.spLegs&&this.spLegs.forEach((f,x)=>{f.rotation.x=Math.sin(this.phase*2+x*1.7)*.35*u}),this.body.traverse(f=>{f.material&&f.material.emissive&&!f.userData.glow&&(f.userData.base??=f.material.emissive.getHex(),f.material.emissive.setHex(c>0&&Math.sin(a*40)>0?6689041:f.userData.base))}),this.orb?(this.body.position.y=.25+Math.sin(a*2.5)*.12,this.orb.position.y=1.5+Math.sin(a*4)*.08):this.body.position.y=Math.abs(Math.sin(this.phase))*.06*u,this.deadT=o?Math.min(1,this.deadT+e*2):0,this.body.rotation.x=-this.deadT*1.4,this.body.position.y-=this.deadT*.3,l.scale.setScalar(1-this.deadT*.4),this.tag.visible=!o,this.blob.visible=!o}dispose(e){e.remove(this.group),this.tagTex.dispose(),this.tag.material.dispose()}};var Wn=1800,Wi=1.55,Mo=class{constructor(e,t){this.scene=e,this.glowTex=t,this.pos=new Float32Array(Wn*3),this.col=new Float32Array(Wn*4),this.size=new Float32Array(Wn),this.vel=new Float32Array(Wn*3),this.life=new Float32Array(Wn),this.max=new Float32Array(Wn),this.base=new Float32Array(Wn*4),this.grav=new Float32Array(Wn),this.cursor=0;let i=new Mt;i.setAttribute("position",new At(this.pos,3).setUsage(ao)),i.setAttribute("pcolor",new At(this.col,4).setUsage(ao)),i.setAttribute("psize",new At(this.size,1).setUsage(ao)),this.points=new Ii(i,new mt({transparent:!0,depthWrite:!1,blending:rt,uniforms:{scale:{value:400}},vertexShader:`attribute vec4 pcolor; attribute float psize; uniform float scale; varying vec4 vC;
        void main(){ vC=pcolor; vec4 mv=modelViewMatrix*vec4(position,1.0);
          gl_PointSize=min(180.0, psize*scale/-mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying vec4 vC; void main(){ float d=length(gl_PointCoord-0.5)*2.0;
        float a=smoothstep(1.0,0.0,d); gl_FragColor=vec4(vC.rgb*(1.0+a), a*a*vC.a); }`})),this.points.frustumCulled=!1,this.points.renderOrder=4,e.add(this.points),this.projs=new Map,this.spritePool=[],this.rings=[],this.lights=[];for(let s=0;s<3;s++){let r=new Di(16777215,0,16,1.8);r.userData.t=0,e.add(r),this.lights.push(r)}this.lightsOn=!0,this.tmpC=new Ae}particle(e,t,i,s,r,a,o,l,c,h=0,u=1){let d=this.cursor;this.cursor=(d+1)%Wn;let f=this.tmpC.set(o);this.pos[d*3]=e,this.pos[d*3+1]=t,this.pos[d*3+2]=i,this.vel[d*3]=s,this.vel[d*3+1]=r,this.vel[d*3+2]=a,this.base[d*4]=f.r,this.base[d*4+1]=f.g,this.base[d*4+2]=f.b,this.base[d*4+3]=u,this.size[d]=l,this.life[d]=c,this.max[d]=c,this.grav[d]=h}burst(e,t,i,s,r,a,o,l,c=6){for(let h=0;h<r;h++){let u=Math.random()*6.283,d=(Math.random()-.3)*2,f=a*(.3+Math.random()*.7);this.particle(e,t,i,Math.cos(u)*f,d*f*.7,Math.sin(u)*f,s,o*(.5+Math.random()),l*(.5+Math.random()*.5),c)}}flash(e,t,i,s,r){if(!this.lightsOn)return;let a=this.lights[0];for(let o of this.lights)o.userData.t<a.userData.t&&(a=o);a.position.set(e,t,i),a.color.set(s),a.userData.t=1,a.userData.i=r,a.intensity=r}ring(e,t,i,s,r=.5){let a=new le(new Hn(.82,1,48),new Ct({color:i,transparent:!0,blending:rt,depthWrite:!1,side:yt}));a.rotation.x=-Math.PI/2,a.position.set(e,.25,t),this.scene.add(a),this.rings.push({m:a,t:0,life:r,radius:s})}spawnProj(e,t,i,s,r){let a=di[t],o=this.spritePool.pop()||new Gt(new Ot({map:this.glowTex,blending:rt,depthWrite:!1,transparent:!0}));o.material.color.set(a.color);let l=t==="mage"?3:t==="ranger"?1.5:1;o.scale.setScalar(l),o.position.set(i,Wi,s),o.visible=!0,this.scene.add(o),this.projs.set(e,{s:o,x:i,z:s,dx:Math.sin(r),dz:Math.cos(r),sp:a.projSpeed,life:a.projLife+.1,color:a.color,cls:t,sc:l})}removeProj(e){let t=this.projs.get(e);t&&(this.scene.remove(t.s),this.spritePool.push(t.s),this.projs.delete(e))}impact(e,t,i){let s=di[i]||di.ranger;s.splash>0?(this.burst(e,Wi,t,s.color,46,11,1.5,.7),this.burst(e,Wi,t,16770720,14,5,2.4,.35,0),this.ring(e,t,s.color,s.splash,.4),this.flash(e,Wi+.5,t,s.color,60)):(this.burst(e,Wi,t,s.color,9,6,.8,.35),this.flash(e,Wi,t,s.color,14))}muzzle(e,t,i){let s=di[t],r=Math.sin(i),a=Math.cos(i);for(let o=0;o<6;o++){let l=4+Math.random()*7;this.particle(e.x,e.y,e.z,r*l+(Math.random()-.5)*3,(Math.random()-.5)*3,a*l+(Math.random()-.5)*3,s.color,.9,.18,0)}this.flash(e.x,e.y,e.z,s.color,10)}nova(e,t,i,s){this.ring(e,t,i,s,.55),this.ring(e,t,16777215,s*.7,.4);for(let r=0;r<70;r++){let a=r/70*6.283,o=s*2.2*(.7+Math.random()*.4);this.particle(e,.5+Math.random()*1.5,t,Math.cos(a)*o,2+Math.random()*4,Math.sin(a)*o,i,1.8,.55,5)}this.flash(e,2,t,i,120)}pillar(e,t,i){for(let s=0;s<44;s++){let r=Math.random()*6.283,a=.5+Math.random()*.6;this.particle(e+Math.cos(r)*a,Math.random()*.5,t+Math.sin(r)*a,0,4+Math.random()*6,0,i,1.1,.9,-1)}this.ring(e,t,i,2.6,.6)}update(e){let{pos:t,vel:i,life:s,max:r,col:a,base:o,grav:l}=this;for(let h=0;h<Wn;h++){if(s[h]<=0)continue;s[h]-=e;let u=h*3,d=h*4;if(s[h]<=0){a[d+3]=0;continue}i[u+1]-=l[h]*e,t[u]+=i[u]*e,t[u+1]+=i[u+1]*e,t[u+2]+=i[u+2]*e,t[u+1]<.05&&(t[u+1]=.05,i[u+1]*=-.3);let f=s[h]/r[h];a[d]=o[d],a[d+1]=o[d+1],a[d+2]=o[d+2],a[d+3]=o[d+3]*f}let c=this.points.geometry;c.attributes.position.needsUpdate=!0,c.attributes.pcolor.needsUpdate=!0,c.attributes.psize.needsUpdate=!0;for(let[h,u]of this.projs){let d=u.sp*e;if(u.x+=u.dx*d,u.z+=u.dz*d,u.life-=e,u.life<=0||Bi(u.x,u.z,.1)){this.removeProj(h);continue}u.s.position.set(u.x,Wi,u.z),u.s.scale.setScalar(u.sc*(.9+Math.random()*.25));let f=u.cls==="mage"?3:1;for(let x=0;x<f;x++){let v=Math.random()*d;this.particle(u.x-u.dx*v+(Math.random()-.5)*.2,Wi+(Math.random()-.5)*.2,u.z-u.dz*v+(Math.random()-.5)*.2,(Math.random()-.5)*1.2,Math.random()*1.2,(Math.random()-.5)*1.2,u.color,u.sc*.55,u.cls==="mage"?.45:.22,-1,.8)}}for(let h=this.rings.length-1;h>=0;h--){let u=this.rings[h];u.t+=e;let d=u.t/u.life;if(d>=1){this.scene.remove(u.m),u.m.geometry.dispose(),u.m.material.dispose(),this.rings.splice(h,1);continue}let f=1-(1-d)*(1-d);u.m.scale.setScalar(.3+f*u.radius),u.m.material.opacity=(1-d)*.9}for(let h of this.lights)h.userData.t>0&&(h.userData.t=Math.max(0,h.userData.t-e*6),h.intensity=h.userData.i*h.userData.t)}};var ce={jx:0,jy:0,yaw:0,fire:!1,skillQueued:!1,ultQueued:!1,touch:!1,sens:1,enabled:!1,showScore:!1},rn=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;function of(n){ce.touch=rn;let e={},t=()=>{ce.jx=(e.KeyD||e.ArrowRight?1:0)-(e.KeyA||e.ArrowLeft?1:0),ce.jy=(e.KeyW||e.ArrowUp?1:0)-(e.KeyS||e.ArrowDown?1:0)};addEventListener("keydown",_=>{!ce.enabled||_.target.tagName==="INPUT"||(e[_.code]=!0,t(),(_.code==="Space"||_.code==="ShiftLeft"||_.code==="KeyE")&&(ce.skillQueued=!0,_.preventDefault()),(_.code==="KeyQ"||_.code==="KeyR")&&(ce.ultQueued=!0),_.code==="Tab"&&(ce.showScore=!0,_.preventDefault()))}),addEventListener("keyup",_=>{e[_.code]=!1,t(),_.code==="Tab"&&(ce.showScore=!1)}),addEventListener("blur",()=>{for(let _ in e)e[_]=!1;t(),ce.fire=!1});let i=null;n.touchLayer.addEventListener("mousedown",_=>{if(ce.enabled){if(document.pointerLockElement!==n.canvas)try{n.canvas.requestPointerLock?.()?.catch?.(()=>{})}catch{}i=_.clientX,_.button===0&&(ce.fire=!0),_.button===2&&(ce.skillQueued=!0)}}),addEventListener("mouseup",_=>{_.button===0&&i!==null&&(ce.fire=!1),_.button===0&&(i=null)}),addEventListener("mousemove",_=>{ce.enabled&&(document.pointerLockElement===n.canvas?ce.yaw-=_.movementX*.0026*ce.sens:_.buttons&&i!==null&&(ce.yaw-=(_.clientX-i)*.0045*ce.sens,i=_.clientX))}),n.touchLayer.addEventListener("contextmenu",_=>_.preventDefault());let s=n.stick,r=n.knob,a=null,o=0,l=0,c=null,h=0,u=null,d=0,f=56,x=(_,S)=>{let y=_-o,U=S-l,A=Math.hypot(y,U);if(A>f&&(y*=f/A,U*=f/A),r.style.transform=`translate(${y}px,${U}px)`,Math.min(1,A/f)<.12){ce.jx=0,ce.jy=0;return}ce.jx=y/f,ce.jy=-U/f},v=()=>.0062*ce.sens*(900/Math.max(500,innerWidth))**.5;n.touchLayer.addEventListener("touchstart",_=>{if(ce.enabled){_.preventDefault();for(let S of _.changedTouches)S.clientX<innerWidth*.45&&a===null?(a=S.identifier,o=S.clientX,l=S.clientY,s.style.left=o+"px",s.style.top=l+"px",s.classList.add("on"),x(o,l)):c===null&&(c=S.identifier,h=S.clientX)}},{passive:!1});let g=_=>{if(ce.enabled){_.preventDefault();for(let S of _.changedTouches)S.identifier===a?x(S.clientX,S.clientY):S.identifier===c?(ce.yaw-=(S.clientX-h)*v(),h=S.clientX):S.identifier===u&&(ce.yaw-=(S.clientX-d)*v(),d=S.clientX)}},p=_=>{for(let S of _.changedTouches)S.identifier===a?(a=null,ce.jx=0,ce.jy=0,s.classList.remove("on"),r.style.transform=""):S.identifier===c?c=null:S.identifier===u&&(u=null,ce.fire=!1,n.fireBtn.classList.remove("on"))};addEventListener("touchmove",g,{passive:!1}),addEventListener("touchend",p),addEventListener("touchcancel",p),n.fireBtn.addEventListener("touchstart",_=>{if(_.preventDefault(),_.stopPropagation(),!ce.enabled||u!==null)return;let S=_.changedTouches[0];u=S.identifier,d=S.clientX,ce.fire=!0,n.fireBtn.classList.add("on")},{passive:!1}),n.skillBtn.addEventListener("touchstart",_=>{_.preventDefault(),_.stopPropagation(),ce.enabled&&(ce.skillQueued=!0)},{passive:!1}),n.skillBtn.addEventListener("mousedown",_=>{_.stopPropagation(),ce.enabled&&(ce.skillQueued=!0)}),n.ultBtn.addEventListener("touchstart",_=>{_.preventDefault(),_.stopPropagation(),ce.enabled&&(ce.ultQueued=!0)},{passive:!1}),n.ultBtn.addEventListener("mousedown",_=>{_.stopPropagation(),ce.enabled&&(ce.ultQueued=!0)}),ce.reset=()=>{a=c=u=null,ce.jx=ce.jy=0,ce.fire=!1,ce.skillQueued=!1,ce.ultQueued=!1,s.classList.remove("on"),r.style.transform="",n.fireBtn.classList.remove("on")}}var Fe=null,Ch=null,So=null,uf=null,Yr=null,Ih=null,df={music:.6,sfx:.8},Ph=n=>(df[n]/(n==="music"?.6:.8))**2,Lh=!1;function n_(n){let e=n.createDynamicsCompressor();e.threshold.value=-14,e.knee.value=10,e.ratio.value=6,e.attack.value=.003,e.release.value=.12,e.connect(n.destination);let t=n.createGain();t.gain.value=.5,t.connect(e);let i=n.createGain(),s=n.createGain();i.gain.value=Ph("sfx"),s.gain.value=Ph("music"),i.connect(t),s.connect(t);let r=n.createBuffer(1,Math.floor(n.sampleRate*.6),n.sampleRate),a=r.getChannelData(0);for(let u=0;u<a.length;u++)a[u]=Math.random()*2-1;let o=n.createGain(),l=n.createDelay(.5),c=n.createGain(),h=n.createBiquadFilter();return l.delayTime.value=.13,c.gain.value=.38,h.type="lowpass",h.frequency.value=2600,o.connect(l),l.connect(h),h.connect(c),c.connect(l),h.connect(i),{m:t,nb:r,ein:o,sb:i,mb:s}}function Dh(){if(Fe){Fe.state==="suspended"&&Fe.resume();return}let n=window.AudioContext||window.webkitAudioContext;n&&(Fe=new n,{m:Ch,nb:So,ein:uf,sb:Yr,mb:Ih}=n_(Fe))}function ff(n){Lh=n,Ch&&(Ch.gain.value=n?0:.5)}function Eo(n,e){df[n]=Math.max(0,Math.min(1,Number(e)||0));let t=n==="music"?Ih:Yr;t&&t.gain.setTargetAtTime(Ph(n),Fe.currentTime,.05)}function pf(n){Fe&&(n?Fe.resume():Fe.suspend())}var mf=()=>!!Fe&&Fe.state==="running",Ln=n=>1+(Math.random()*2-1)*n;function i_(n,e,t=0,i=1){let s=Fe.createGain();if(s.gain.value=n*i,e){let r=Fe.createBiquadFilter();r.type="lowpass",r.frequency.value=500+5500*Math.min(1,n)**1.5,s.connect(r),r.connect(Yr)}else s.connect(Yr);if(t){let r=Fe.createGain();r.gain.value=t,s.connect(r),r.connect(uf)}return s}function st(n,e,t,i,s,r,a=0,o=.004){let l=Fe.currentTime+a,c=Fe.createOscillator(),h=Fe.createGain();c.type=e,c.frequency.setValueAtTime(t,l),c.frequency.exponentialRampToValueAtTime(Math.max(20,i),l+s),h.gain.setValueAtTime(1e-4,l),h.gain.linearRampToValueAtTime(r,l+o),h.gain.exponentialRampToValueAtTime(8e-4,l+s),c.connect(h),h.connect(n),c.start(l),c.stop(l+s+.02)}function zt(n,e,t,i,s=i,r=1,a=0,o=.003,l="bandpass"){let c=Fe.currentTime+a,h=Fe.createBufferSource(),u=Fe.createBiquadFilter(),d=Fe.createGain();h.buffer=So,u.type=l,u.Q.value=r,u.frequency.setValueAtTime(i,c),u.frequency.exponentialRampToValueAtTime(Math.max(30,s),c+e),d.gain.setValueAtTime(1e-4,c),d.gain.linearRampToValueAtTime(t,c+o),d.gain.exponentialRampToValueAtTime(8e-4,c+e),h.connect(u),u.connect(d),d.connect(n),h.start(c,Math.random()*.08),h.stop(c+e+.02)}function cs(n,e,t,i,s=0){st(n,"sine",e,e,t,i,s,.002),st(n,"sine",e*2.76,e*2.76,t*.55,i*.4,s,.002),st(n,"sine",e*5.4,e*5.4,t*.25,i*.22,s,.001)}var lf={ranger(n){let e=Ln(.06);zt(n,.022,.2,5200,5200,.8,0,.001,"highpass"),st(n,"triangle",920*e,610*e,.075,.2,0,.002),st(n,"sine",2500*e,1700*e,.13,.07,.01),zt(n,.15*Ln(.15),.1,2300,6200,1.6,.012,.02)},mage(n){let e=Ln(.08);st(n,"sine",120*e,44,.24,.3,0,.006),zt(n,.36*Ln(.1),.24,260*e,1500,.7,0,.035),st(n,"sawtooth",190*e,72,.26,.07,0,.02);for(let t=0;t<3;t++)zt(n,.025,.09,3400*Ln(.3),3400,2,.05+Math.random()*.22,.001,"highpass")},guardian(n){let e=Ln(.07);st(n,"sine",165*e,40,.17,.42,0,.002),zt(n,.1,.3,620*e,240,.7,0,.001),zt(n,.03,.14,2600,2600,1.2,0,.001),st(n,"triangle",196*e,185*e,.24,.07,.02,.02),st(n,"triangle",294*e,280*e,.2,.045,.02,.02)},priest(n){cs(n,1046.5*[1,1.125,1.25,1.5][Math.floor(Math.random()*4)],.34,.15),zt(n,.02,.05,4200,4200,1,0,.001,"highpass")},caster(n){zt(n,.16,.16,900,2600,1.4,0,.02),st(n,"sawtooth",420*Ln(.08),180,.16,.1,0,.01)},frost(n){st(n,"sine",1900*Ln(.06),880,.18,.12),zt(n,.14,.09,4600,7e3,2,0,.01,"highpass")},hit(n){let e=Ln(.04);zt(n,.018,.12,3800,3800,1,0,.001,"highpass"),st(n,"triangle",1320*e,1320*e,.05,.17,0,.001),st(n,"sine",1980*e,1980*e,.09,.12,.022,.002)},hurt(n){st(n,"sine",170,58,.15,.34,0,.002),zt(n,.08,.2,820*Ln(.15),300,.8,0,.001),st(n,"sawtooth",230,95,.13,.08)},kill(n){cs(n,659.3,.22,.16),cs(n,987.8,.3,.16,.08),cs(n,1318.5,.42,.13,.16)},death(n){st(n,"sawtooth",300,46,.75,.22,0,.01),st(n,"sine",150,38,.8,.22),zt(n,.6,.1,900,120,.6,0,.02)},boom(n){st(n,"sine",125,30,.5,.42,0,.003),zt(n,.55,.38,1100,90,.5,0,.004,"lowpass"),zt(n,.05,.2,2400,2400,.8,0,.001);for(let e=0;e<4;e++)zt(n,.03,.07,2800*Ln(.3),2800,2,.1+Math.random()*.35,.001,"highpass")},dash(n){zt(n,.2,.24,700,5200,1.1,0,.015),st(n,"sine",560,1900,.16,.1,0,.01),st(n,"triangle",1400,2800,.1,.05,.05)},nova(n){st(n,"sine",70,520,.14,.16,0,.02),zt(n,.14,.1,300,2400,1.2,0,.03),st(n,"sine",140,34,.45,.4,.12,.003),zt(n,.5,.34,1600,110,.5,.12,.004,"lowpass"),st(n,"sawtooth",320,80,.3,.07,.12)},shield(n){st(n,"sine",110,110,.5,.2,0,.03),st(n,"sine",330,660,.3,.17,0,.02),st(n,"triangle",495,990,.32,.09,.03,.02),cs(n,1320,.4,.07,.2),zt(n,.25,.06,3e3,6e3,2,0,.05)},heal(n){st(n,"sine",261.6,261.6,.7,.12,0,.08),st(n,"sine",392,392,.7,.08,0,.1),[523.3,659.3,784,1046.5].forEach((e,t)=>cs(n,e,.5,.11,t*.075))},orb(n){st(n,"sine",700,1400,.2,.16),st(n,"sine",1050,2100,.2,.07,.03)},level(n){[523.3,659.3,784,1046.5].forEach((e,t)=>{st(n,"triangle",e,e,.22,.14,t*.08),cs(n,e*2,.3,.05,t*.08)})}},s_={ranger:2.6,mage:1.5,guardian:1.8,priest:1.4,caster:2.2,frost:1.6,hit:2.6,hurt:2.2,dash:2.6,orb:1.6,nova:.75,heal:.8},r_={priest:.5,kill:.5,heal:.6,shield:.45,level:.35,nova:.2,frost:.3};function nt(n,e=1,t=!1){!Fe||Lh||e<=.02||!lf[n]||lf[n](i_(e,t,r_[n]||0,s_[n]||1))}var bo=[[146.8,174.6,220],[116.5,146.8,174.6],[130.8,164.8,196],[110,130.8,164.8]],cf=[293.7,349.2,392,440,523.3,587.3],hs=60/104;function us(n,e,t,i,s,r,a,o,l=0){let c=Fe.createOscillator(),h=Fe.createGain();c.type=e,c.frequency.value=t,c.detune.value=l,h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(o,i+s),h.gain.setValueAtTime(o,i+s+r),h.gain.linearRampToValueAtTime(0,i+s+r+a),c.connect(h),h.connect(n),c.start(i),c.stop(i+s+r+a+.05)}function a_(n,e,t){let i=Fe.createBufferSource(),s=Fe.createBiquadFilter(),r=Fe.createGain();i.buffer=So,s.type="highpass",s.frequency.value=6500,r.gain.setValueAtTime(t,e),r.gain.exponentialRampToValueAtTime(8e-4,e+.05),i.connect(s),s.connect(r),r.connect(n),i.start(e,Math.random()*.3),i.stop(e+.07)}function Rh(n,e,t){let i=Fe.createOscillator(),s=Fe.createGain();i.frequency.setValueAtTime(105,e),i.frequency.exponentialRampToValueAtTime(42,e+.16),s.gain.setValueAtTime(t,e),s.gain.exponentialRampToValueAtTime(8e-4,e+.24),i.connect(s),s.connect(n),i.start(e),i.stop(e+.26)}var hf={menu:{len:6,level:.6,bar(n,e,t){let i=bo[t%bo.length];for(let s of i)for(let r of[-4,4])us(n.soft,"sawtooth",s,e,2,0,5.5,.05,r);us(n.soft,"sine",i[0]/2,e,1.5,1,3.5,.09);for(let s=0;s<3;s++){let r=e+1+Math.random()*4.5,a=cf[Math.floor(Math.random()*cf.length)];us(n.dry,"sine",a,r,.02,0,2.4,.06),us(n.dry,"sine",a*2,r,.02,0,1.2,.015)}}},battle:{len:hs*4,level:.45,bar(n,e,t){let i=bo[Math.floor(t/2)%bo.length],s=t%8>=4;for(let a of i)us(n.soft,"sawtooth",a,e,.3,hs*2.6,hs,.028,5);for(let a=0;a<8;a++){let o=e+a*hs/2;us(n.dry,"triangle",i[0]/2,o,.008,.05,.16,a%2?.07:.11),a%2&&a_(n.dry,o,s?.028:.016)}Rh(n.dry,e,.2),Rh(n.dry,e+hs*2,.17),s&&Rh(n.dry,e+hs*3.5,.11);let r=[i[0],i[1],i[2],i[1]*2,i[2],i[1],i[0]*2,i[2]];for(let a=0;a<8;a++)us(n.soft,"triangle",r[(a+(s?3:0))%8]*2,e+a*hs/2,.006,.03,.2,s?.045:.03)}}};function o_(){let n=Fe.createGain();n.connect(Ih);let e=Fe.createBiquadFilter();return e.type="lowpass",e.frequency.value=1400,e.connect(n),{g:n,soft:e,dry:n}}var fr=null;function wo(n){if((!Fe||!hf[n])&&(n=null),fr&&fr.track===n)return;if(fr){let r=fr;clearInterval(r.timer);let a=r.out.g.gain,o=Fe.currentTime;a.cancelScheduledValues(o),a.setValueAtTime(a.value,o),a.linearRampToValueAtTime(0,o+.9),setTimeout(()=>r.out.g.disconnect(),8e3),fr=null}if(!n)return;let e=hf[n],t=o_();t.g.gain.setValueAtTime(0,Fe.currentTime),t.g.gain.linearRampToValueAtTime(e.level,Fe.currentTime+1.5);let i=fr={track:n,out:t,next:Fe.currentTime+.1,i:0,timer:0},s=()=>{for(;i.next<Fe.currentTime+.6;)i.next<Fe.currentTime&&(i.next=Fe.currentTime+.05),e.bar(t,i.next,i.i++),i.next+=e.len};s(),i.timer=setInterval(s,200)}function gf(n=1){if(!Fe||Lh)return;let e=Fe.currentTime,t=Fe.createBufferSource(),i=Fe.createBiquadFilter(),s=Fe.createGain();t.buffer=So,i.type="bandpass",i.frequency.value=700+Math.random()*500,i.Q.value=1.4,s.gain.setValueAtTime(.07*n,e),s.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(i),i.connect(s),s.connect(Yr),t.start(e,Math.random()*.3),t.stop(e+.08)}var L=n=>document.getElementById(n);addEventListener("error",n=>{let e=document.getElementById("menuMsg");e&&(e.textContent=`Galat: ${n.message}`)});var Ue={get:(n,e)=>{try{return localStorage.getItem("arkana."+n)??e}catch{return e}},set:(n,e)=>{try{localStorage.setItem("arkana."+n,e)}catch{}}};rn&&document.body.classList.add("touch");var Af=L("c"),bn=new Xa({canvas:Af,antialias:!rn,powerPreference:"high-performance"});bn.outputColorSpace=kt;bn.toneMapping=Vr;bn.toneMappingExposure=1.15;bn.shadowMap.enabled=!0;bn.shadowMap.type=qc;var gn=new Zs,on=new Jt(62,1,.3,900),Xi={ruins:sf(gn)},ut=Xi.ruins;gn.fog=ut.fog;var De=new Mo(gn,ut.glowTex),Fh={ruins:wh(ut.root,ut.glowTex,qt.ruins.runes,Ni,Xr)},Bh=Fh.ruins,$n=qt.ruins,Xn=new Oe;{let n=new Le({color:16764746,emissive:16753178,emissiveIntensity:2.2,metalness:.85,roughness:.25});Xn.add(new le(new Ye(.45,.2,.55,16,1,!0),n));let e=new le(new Ye(.07,.07,.5,8),n);e.position.y=-.5,Xn.add(e);let t=new le(new Ye(.3,.32,.08,16),n);t.position.y=-.75,Xn.add(t);let i=new Gt(new Ot({map:ut.glowTex,color:16766315,blending:rt,depthWrite:!1,transparent:!0}));i.scale.setScalar(4.5),Xn.add(i);let s=new le(new Ye(.6,.6,30,16,1,!0),new Ct({color:16766315,transparent:!0,opacity:.12,blending:rt,depthWrite:!1,side:yt}));s.position.y=15,Xn.add(s),Xn.visible=!1,gn.add(Xn)}var mi=new ho(bn);mi.addPass(new uo(gn,on));var l_=new cr(new re(256,256),.42,.5,.9);mi.addPass(l_);mi.addPass(tf());mi.addPass(new fo);var ds=Ue.get("quality",rn?"medium":"high"),Rf=!Ue.get("qualityManual","");function Lo(n){ds=n;let e=Math.min(devicePixelRatio||1,n==="low"?1:n==="medium"?1.5:2);bn.setPixelRatio(e),mi.setPixelRatio(e),ut.sun.castShadow=n!=="low",Jd(n!=="low"),Qd(n==="low"),n!=="low"&&Zd(),n!=="low"&&(ut.env??=ef(bn,ut.sky)),gn.environment=n==="low"?null:ut.env,gn.environmentIntensity=.55;let t=n==="high"?4:0;for(let s of[mi.renderTarget1,mi.renderTarget2])s.samples!==t&&(s.samples=t,s.dispose());let i=n==="high"?2048:1024;ut.sun.shadow.mapSize.x!==i&&(ut.sun.shadow.mapSize.set(i,i),ut.sun.shadow.map?.dispose(),ut.sun.shadow.map=null),ut.grass&&(ut.grass.count=n==="low"?1e3:n==="medium"?3200:ut.grassMax);for(let s of ut.pointLights)s.visible=n!=="low";De.lightsOn=n!=="low",L("quality").value=n,Oh()}function Cf(n){qt[n]||(n="ruins"),Xi[n]||(Xi[n]=rf(gn,Xi.ruins.glowTex),Fh[n]=wh(Xi[n].root,Xi.ruins.glowTex,qt[n].runes,Ni,Xr));for(let[e,t]of Object.entries(Xi))t.root.visible=e===n;ut=Xi[n],Bh=Fh[n],$n=qt[n],m.mapId=n,gn.fog=ut.fog,Vd(n),Hf(),Lo(ds)}function Oh(){let n=innerWidth,e=innerHeight;bn.setSize(n,e,!1),mi.setSize(n,e),on.aspect=n/e,on.fov=n>=e?62:82,on.updateProjectionMatrix();let t=e*bn.getPixelRatio()*.5;De.points.material.uniforms.scale.value=t,ut.flies.material.uniforms.scale.value=t}addEventListener("resize",Oh);addEventListener("orientationchange",()=>setTimeout(Oh,200));function c_(){let n=Ue.get("pid","");if(!/^[a-z0-9]{16,40}$/.test(n)){let e=new Uint8Array(12);crypto.getRandomValues(e),n=[...e].map(t=>t.toString(36).padStart(2,"0")).join("").slice(0,24),Ue.set("pid",n)}return n}var m={phase:"menu",ws:null,myId:0,clsKey:Ue.get("cls","ranger"),cls:null,players:new Map,roster:new Map,pred:{x:0,z:0,yaw:0,dashT:0,dx:0,dz:0,skillCd:0},rx:0,rz:0,pending:[],seq:0,acc:0,localFireCd:0,me:{hp:100,maxHp:100,lvl:1,flags:0,xp:0,respawnT:0},ended:!1,tm:0,orbMask:255,ping:0,camDist:7.2,lockId:0,autoFire:Ue.get("autoFire",rn?"1":"")==="1",aimAssist:Ue.get("aimAssist",rn?"1":"")==="1",lastShotTick:new Map,shake:0,time:0,vibrate:Ue.get("vibrate","1")==="1",code:null,practice:!1,joinErr:"",buzzT:0,createDiff:Ue.get("diff","normal"),pid:c_(),skin:Ue.get("skin","default"),mapId:"ruins",createMap:Ue.get("map","rotate"),tut:null,stepT:0,team:-1,teamScore:[0,0],gm:"dm",runeMask:15,holder:0,ticks:[],createGm:Ue.get("gm","pve")};window.__arkana=m;var Pf=L("classes");for(let n of fh){let e=fn[n],t="#"+e.color.toString(16).padStart(6,"0"),i=document.createElement("div");i.className="cls",i.dataset.k=n,i.style.setProperty("--c",t),i.innerHTML=`<div class="dot"></div><b>${e.name}</b><small>${e.desc}</small><small class="sk">${e.skillName}: ${e.skillDesc}</small>`,i.addEventListener("click",()=>If(n)),Pf.appendChild(i)}function If(n){m.clsKey=n,Ue.set("cls",n);for(let e of Pf.children)e.classList.toggle("sel",e.dataset.k===n)}If(fh.includes(m.clsKey)?m.clsKey:"ranger");L("name").value=Ue.get("name","");L("hint").textContent=rn?"Jempol kiri: gerak \xB7 geser sisi kanan: bidik \xB7 tombol merah: tembak. Lebih nyaman dalam posisi mendatar.":"WASD gerak \xB7 mouse bidik \xB7 klik tembak \xB7 Spasi skill \xB7 Tab papan skor";function h_(){try{localStorage.removeItem("arkana.server")}catch{}return(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws"}var xf=navigator.userAgent,qn={standalone:matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||navigator.standalone===!0,inApk:/; wv\)/.test(xf),ios:/iPhone|iPad|iPod/.test(xf)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,prompt:null};function ps(){let n=qn.standalone||qn.inApk||m.phase==="play"||Ue.get("installNo","")==="1"||!(qn.ios||qn.prompt);L("installHint").classList.toggle("hidden",n),!n&&(L("installGo").classList.toggle("hidden",!qn.prompt),L("installText").innerHTML=qn.prompt?"Pasang <b>Arkana</b> ke layar utama supaya terbuka layar penuh seperti aplikasi.":"Pasang <b>Arkana</b> ke layar utama: ketuk tombol <b>Bagikan</b> di Safari, lalu pilih <b>Tambah ke Layar Utama</b>.")}addEventListener("beforeinstallprompt",n=>{n.preventDefault(),qn.prompt=n,ps()});addEventListener("appinstalled",()=>{qn.standalone=!0,ps()});L("installGo").addEventListener("click",async()=>{let n=qn.prompt;if(n){qn.prompt=null;try{await n.prompt()}catch{}ps()}});L("installX").addEventListener("click",()=>{Ue.set("installNo","1"),ps()});var Dt={token:Ue.get("token",""),on:!1,reg:!1};function Lf(n,e){Dt.token=n,Ue.set("token",n),m.pid=e.pid,Ue.set("pid",e.pid),L("name").value=e.name,L("name").classList.add("hidden"),Ue.set("name",e.name),L("whoName").textContent=e.name,L("who").classList.remove("hidden"),L("auth").classList.add("hidden"),L("authPass").value="",L("authPass2").value="",Do()}function zh(n=""){Dt.token="",Ue.set("token",""),L("who").classList.add("hidden"),L("authMsg").textContent=n,Dt.on&&(L("auth").classList.remove("hidden"),L("authName").value||=Ue.get("name",""))}function fs(n){Dt.view=n,Dt.reg=n==="reg";let e=n==="reg",t=n==="login",i=n==="forgot",s=n==="reset",r=(a,o)=>L(a).classList.toggle("hidden",!o);L("tabLogin").classList.toggle("on",t),L("tabReg").classList.toggle("on",e),L("tabLogin").setAttribute("aria-selected",String(t)),L("tabReg").setAttribute("aria-selected",String(e)),r("authTabs",t||e),r("authPassRow",!i),r("authPass2Row",e||s),r("authHint",e),r("authInviteRow",e&&Dt.invite),r("authMailRow",e&&Dt.mail),r("authNoMail",!Dt.mail),r("authCodeRow",s),r("authForgot",t&&Dt.mail),r("authBack",i||s),L("authName").readOnly=s,L("authPassLabel").textContent=s?"Kata sandi baru":"Kata sandi",L("authPass").autocomplete=t?"current-password":"new-password",L("authGo").textContent=e?"Daftar":i?"Kirim kode ke email":s?"Ganti kata sandi":"Masuk",L("authMsg").textContent=""}L("tabLogin").addEventListener("click",()=>fs("login"));L("tabReg").addEventListener("click",()=>fs("reg"));L("authForgot").addEventListener("click",()=>fs("forgot"));L("authBack").addEventListener("click",()=>fs("login"));L("authForm").addEventListener("submit",async n=>{n.preventDefault();let e=Dt.view,t=L("authName").value.trim(),i=L("authPass").value,s=L("authMail").value.trim(),r=L("authCode").value.trim(),a=o=>{L("authMsg").textContent=o};if(!/^[A-Za-z0-9_]{3,14}$/.test(t))return a("Nama pengguna 3-14 karakter: huruf, angka, atau garis bawah.");if(e!=="forgot"&&i.length<8)return a("Kata sandi minimal 8 karakter.");if((e==="reg"||e==="reset")&&i!==L("authPass2").value)return a("Kedua kata sandi tidak sama.");if(e==="reg"&&Dt.mail&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))return a("Isi alamat email yang benar.");if(e==="reset"&&!/^\d{6}$/.test(r))return a("Kode terdiri dari 6 angka.");L("authGo").disabled=!0,a(e==="reg"?"Mendaftarkan\u2026":e==="forgot"?"Mengirim\u2026":"Memeriksa\u2026");try{let o={login:"/api/login",reg:"/api/register",forgot:"/api/forgot",reset:"/api/reset"}[e],c=await(await fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,pass:e==="forgot"?void 0:i,pid:m.pid,invite:L("authInvite").value.trim()||void 0,email:e==="reg"&&s?s:void 0,code:e==="reset"?r:void 0})})).json();c.token?(fs("login"),Lf(c.token,c.user)):e==="forgot"&&c.ok?(fs("reset"),a("Bila akun itu punya email, kode sudah dikirim. Periksa kotak masuk dan folder spam.")):a(c.error||"Gagal. Coba lagi.")}catch{a("Server tidak terjangkau. Periksa koneksi lalu coba lagi.")}L("authGo").disabled=!1});L("logout").addEventListener("click",()=>{fetch("/api/logout",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+Dt.token},body:"{}"}).catch(()=>{}),zh()});(async()=>{try{let n=await fetch("/api/me",{headers:Dt.token?{authorization:"Bearer "+Dt.token}:{}}).then(e=>e.json());if(Dt.on=!!n.auth,Dt.invite=!!n.invite,Dt.mail=!!n.mail,!Dt.on)return;fs("login"),n.user?Lf(Dt.token,n.user):zh(),Do()}catch{}})();ps();var Hh=["play","create","joinBtn","practice","rejoin","evJoin"],Vh=n=>String(n||"").toUpperCase().replace(/[^A-Z]/g,"").slice(0,4);{let n=Vh(new URLSearchParams(location.search).get("room"));n&&(L("code").value=n,L("joinBtn").textContent="Gabung "+n)}L("code").addEventListener("input",n=>{n.target.value=Vh(n.target.value),L("joinBtn").textContent="Gabung"});L("code").addEventListener("keydown",n=>{n.key==="Enter"&&L("joinBtn").click()});function Mn(n,e){Dh();let t=L("name").value.trim()||"Pengembara";Ue.set("name",t);for(let i of Hh)L(i).disabled=!0;L("menuMsg").textContent=n==="practice"?"Menyiapkan arena latihan\u2026":"Menghubungkan ke arena\u2026",rn&&!document.fullscreenElement&&document.documentElement.requestFullscreen?.().then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{}),p_(t,n,e)}L("play").addEventListener("click",()=>{Ue.get("tutorDone","")?Mn("quick"):(m.tut=Of(),Mn("practice"))});for(let n of document.querySelectorAll(".mode[data-gm]")){let e=()=>{m.createGm=n.dataset.gm,Ue.set("gm",m.createGm),mr&&Bf();for(let t of document.querySelectorAll(".mode[data-gm]"))t.classList.toggle("on",t===n),t.setAttribute("aria-checked",t===n)};n.addEventListener("click",e),n.dataset.gm===m.createGm&&(e(),n.closest("#otherModes")&&Df(!0))}function Df(n){L("otherModes").classList.toggle("hidden",!n),L("moreModes").setAttribute("aria-expanded",String(n)),L("moreModes").textContent=n?"Sembunyikan mode lain":"Mode lain"}L("moreModes").addEventListener("click",()=>Df(L("otherModes").classList.contains("hidden")));for(let n of document.querySelectorAll(".diffb")){let e=()=>{m.createDiff=n.dataset.diff,Ue.set("diff",m.createDiff);for(let t of document.querySelectorAll(".diffb"))t.classList.toggle("on",t===n),t.setAttribute("aria-checked",t===n)};n.addEventListener("click",e),n.dataset.diff===m.createDiff&&e()}for(let n of document.querySelectorAll(".mapb")){let e=()=>{m.createMap=n.dataset.map,Ue.set("map",m.createMap);for(let t of document.querySelectorAll(".mapb"))t.classList.toggle("on",t===n),t.setAttribute("aria-checked",t===n)};n.addEventListener("click",e),n.dataset.map===m.createMap&&e()}L("create").addEventListener("click",()=>Mn("create"));var vf=[],Uh=[],fi=new D;function u_(){let n=innerWidth,e=innerHeight,t=[],i=m.windIds||new Map;for(let s of m.players.values()){if(s.id===m.myId||s.flags&1||Kr(s.id))continue;let r=Math.hypot(s.x-m.rx,s.z-m.rz);if(r>24||(fi.set(s.x,1.5,s.z).applyMatrix4(on.matrixWorldInverse),fi.z<0&&(fi.set(s.x,1.5,s.z).project(on),Math.abs(fi.x)<.92&&Math.abs(fi.y)<.88)))continue;let a=-ur(Math.atan2(s.x-m.rx,s.z-m.rz),ce.yaw);t.push({a,d:r,boss:!!Gn[m.roster.get(s.id)?.cls]?.boss,wind:(i.get(s.id)||0)>m.time})}t.sort((s,r)=>s.d-r.d);for(let s=0;s<6;s++){let r=vf[s];r||(r=document.createElement("i"),r.className="threat",L("threats").appendChild(r),vf.push(r));let a=t[s];if(!a){r.style.opacity=0;continue}let o=Math.min(n,e)*.34,l=o*1.25,c=o,h=n/2+Math.sin(a.a)*l,u=e/2-Math.cos(a.a)*c;r.className="threat"+(a.boss?" boss":"")+(a.wind?" wind":""),r.style.opacity=String(Math.max(.7,1-a.d/40)),r.style.transform=`translate(${h-16}px,${u-15}px) rotate(${a.a}rad) scale(${a.d<8?1.25:1})`}}function d_(){let n=m.gm==="pve"?(m.rv||[]).filter(e=>e[0]!==m.myId):[];for(let e=0;e<Math.max(n.length,Uh.length);e++){let t=Uh[e];t||(t=document.createElement("div"),t.className="down",L("downTags").appendChild(t),Uh.push(t));let i=n[e],s=i&&m.players.get(i[0]);if(!s){t.style.display="none";continue}if(fi.set(s.x,2.2,s.z).project(on),fi.z>1){t.style.display="none";continue}t.style.display="",t.textContent=i[1]>0?`Menolong ${i[1]}%`:`Tolong ${Kt(i[0])}!`,t.style.transform=`translate(${(fi.x*.5+.5)*innerWidth}px,${(-fi.y*.5+.5)*innerHeight}px) translate(-50%,-100%)`}}function Uf(n){if(!(!n||!n.length)){L("perkCards").innerHTML=n.map(e=>`<button class="perk" data-k="${e}"><b>${Fi[e].name}</b><small>${Fi[e].desc}</small><em>Ketuk untuk memilih</em></button>`).join("");for(let e of L("perkCards").querySelectorAll(".perk"))e.addEventListener("click",()=>{m.ws?.send(JSON.stringify({t:"perk",id:e.dataset.k})),L("perks").classList.add("hidden")});L("perks").classList.remove("hidden")}}for(let n of["touchstart","touchmove"])L("perks").addEventListener(n,e=>e.stopPropagation());L("pingMenu").innerHTML=_h.map((n,e)=>`<button data-k="${e}">${n}</button>`).join("");L("pingBtn").addEventListener("click",()=>L("pingMenu").classList.toggle("hidden"));for(let n of L("pingMenu").children)n.addEventListener("click",()=>{m.ws?.send(JSON.stringify({t:"ping",k:+n.dataset.k})),L("pingMenu").classList.add("hidden")});for(let n of[L("pingBtn"),L("pingMenu")])for(let e of["touchstart","touchmove","mousedown"])n.addEventListener(e,t=>t.stopPropagation());function Nf(){let n=Ue.get("lastRoom",""),e=L("rejoin");e.classList.toggle("hidden",!n),n&&(e.textContent=`Kembali ke room ${n}`)}L("rejoin").addEventListener("click",()=>{let n=Ue.get("lastRoom","");n&&Mn("join",n)});Nf();var _f=n=>n>=3600?`${Math.floor(n/3600)} j ${Math.floor(n%3600/60)} mnt`:n>=60?`${Math.floor(n/60)} mnt`:`${Math.max(0,n)} dtk`,Zr=null,Gh=0;function kf(){let n=L("eventBanner"),e=Zr,t=Math.floor((Date.now()-Gh)/1e3),i=e?.active&&e.active.left-t>0?e.active:null,s=e?.next,r=e?.last;n.classList.toggle("hidden",!i&&!s&&!r?.top?.length),L("evJoin").classList.toggle("hidden",!i),i?(L("evName").textContent=`Event: ${i.name} \xB7 sisa ${_f(i.left-t)}`,L("evInfo").textContent=`${i.desc}. Target: ${i.target} Hadiah: ${i.skin}.${i.top.length?` Terdepan: ${i.top[0].name} (${i.top[0].score} ${i.unit}).`:""}`):s?(L("evName").textContent=`Event berikutnya: ${s.name}`,L("evInfo").textContent=s.in-t>0?`Mulai dalam ${_f(s.in-t)}. ${s.desc}.`:"Segera dimulai\u2026"):r?.top?.length&&(L("evName").textContent=`Event ${r.name} selesai`,L("evInfo").textContent=`Juara: ${r.top.map((a,o)=>`${o+1}. ${a.name} (${a.score} ${r.unit})`).join(" \xB7 ")}`)}async function Ff(){if(m.phase==="menu"){try{Zr=await fetch("/api/event").then(n=>n.json()),Gh=Date.now()}catch{}kf()}}Ff();setInterval(Ff,2e4);setInterval(()=>{m.phase==="menu"&&kf()},1e3);L("evJoin").addEventListener("click",()=>Mn("event"));var yf={dm:"Deathmatch",koth:"Rebut Altar",tdm:"Tim",coop:"Lawan Bot",pve:"Bertahan Bersama",king:"Perburuan Raja"},mr=[];function Bf(){let n=L("lobbyList");n.replaceChildren(),L("lobby").classList.toggle("hidden",!mr.length);for(let i of mr){let s=i.names.length>=i.max,r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("b"),l=document.createElement("small"),c=document.createElement("button");r.className="lobbyRow",o.textContent=`${i.kind==="event"?"Event \xB7 ":""}${yf[i.mode]||i.mode}${i.wave?` \xB7 gelombang ${i.wave}`:""}`,l.textContent=`${i.names.join(", ")} (${i.names.length}/${i.max})`,c.type="button",c.textContent=s?"Penuh":"Gabung",c.disabled=s,c.addEventListener("click",()=>i.kind==="event"?Mn("event"):i.code?Mn("join",i.code):Mn("public")),a.append(o,l),r.append(a,c),n.append(r)}let e=Zr?.active&&Zr.active.left-Math.floor((Date.now()-Gh)/1e3)>0,t=mr.find(i=>i.kind!=="event"&&i.names.length<i.max);L("playHint").textContent=Ue.get("tutorDone","")?e?`Masuk ke event ${Zr.active.name}.`:t?`Bergabung dengan ${t.names.slice(0,3).join(", ")}.`:`Belum ada yang bermain: membuka room ${yf[m.createGm]||""}.`:"Pertama kali: latihan singkat dulu."}async function Do(){if(m.phase==="menu"){try{mr=(await fetch("/api/lobby",{headers:Dt.token?{authorization:"Bearer "+Dt.token}:{}}).then(e=>e.json())).rooms||[]}catch{mr=[]}Bf()}}setInterval(Do,8e3);var Mf=n=>"#"+n.toString(16).padStart(6,"0");async function f_(){L("ranks").classList.remove("hidden"),L("myStats").textContent="Memuat\u2026",L("skinMsg").textContent="";let n=null,e=null;try{[n,e]=await Promise.all([fetch("/api/top").then(i=>i.json()),fetch(`/api/stats?pid=${m.pid}`).then(i=>i.json())])}catch{L("myStats").textContent="Peringkat belum bisa dimuat dari server, jadi semua jubah tampil terkunci. Coba tutup dan buka lagi."}let t=e?.stats;if(L("waveTable").innerHTML=(n?.waves||[]).map((i,s)=>`<tr><td>${s+1}</td><td></td><td>gelombang ${i.wave}</td></tr>`).join("")||"<tr><td>Belum ada yang bermain Bertahan Bersama minggu ini.</td></tr>",(n?.waves||[]).forEach((i,s)=>{L("waveTable").rows[s].cells[1].textContent=i.name}),L("achv").innerHTML=yh.map(i=>`<span class="${(t?.[i.stat]||0)>=i.n?"on":""}" title="${i.text}">${i.name} \xB7 ${Math.min(t?.[i.stat]||0,i.n)}/${i.n}</span>`).join(""),L("daily").innerHTML=(e?.daily||[]).map(i=>`<li class="${i.done?"done":""}"><i style="width:${Math.round(i.p/i.n*100)}%"></i><span><b></b><em>${i.done?"Selesai":`${i.p}/${i.n}`}</em></span></li>`).join("")||"<li><span>Tantangan belum bisa dimuat.</span></li>",(e?.daily||[]).forEach((i,s)=>{L("daily").children[s].querySelector("b").textContent=i.text}),n){L("myStats").textContent=t?`Kamu: ${t.kills} kill, ${t.deaths} gugur, ${t.wins} menang dari ${t.matches} ronde.`:"Belum ada statistik: selesaikan satu ronde di arena untuk mulai tercatat.",L("weekTitle").textContent=`Minggu ini (${n.week.replace("-W",", minggu ")})`;let i=n.top.map((s,r)=>`<tr class="${t&&s.name===t.name?"me":""}"><td>${r+1}</td><td></td><td>${s.kills}</td><td>${s.wins}</td></tr>`).join("");L("weekTable").innerHTML=`<tr><th>#</th><th>Nama</th><th>Kill</th><th>Menang</th></tr>${i||'<tr><td colspan="4">Belum ada yang bermain minggu ini.</td></tr>'}`,n.top.forEach((s,r)=>{L("weekTable").rows[r+1].cells[1].textContent=s.name})}L("skins").innerHTML=ki.map(i=>{let s=Hd(i,t),r=fn[m.clsKey],a=i.accent??Math.round(r.color*1),o=i.glow??r.color,l=i.req?`${Math.min(t?.[i.req.stat]||0,i.req.n)}/${i.req.n}`:"";return`<button class="skin ${s?"":"locked"} ${m.skin===i.id?"on":""}" data-id="${i.id}" ${s?"":'aria-disabled="true"'} style="--c:${Mf(i.accent??a)};--g:${Mf(o)}"><i></i><span><b>${i.name}</b><small>${s?m.skin===i.id?"Dipakai":"Terbuka":`${i.req.text} \xB7 ${l}`}</small></span></button>`}).join("");for(let i of L("skins").querySelectorAll(".skin"))i.addEventListener("click",()=>{let s=ki.find(r=>r.id===i.dataset.id);if(i.classList.contains("locked")){L("skinMsg").textContent=`${s.name} masih terkunci: ${s.req.text.toLowerCase()} (sekarang ${Math.min(t?.[s.req.stat]||0,s.req.n)} dari ${s.req.n}).`;return}L("skinMsg").textContent=`${s.name} dipakai mulai ronde berikutnya.`,m.skin=i.dataset.id,Ue.set("skin",m.skin);for(let r of L("skins").querySelectorAll(".skin"))r.classList.toggle("on",r===i),r.classList.contains("locked")||(r.querySelector("small").textContent=r===i?"Dipakai":"Terbuka")})}L("ranksBtn").addEventListener("click",()=>f_().catch(n=>{L("myStats").textContent="Galat: "+n.message}));L("ranksClose").addEventListener("click",()=>L("ranks").classList.add("hidden"));L("joinBtn").addEventListener("click",()=>{let n=Vh(L("code").value);if(n.length!==4){L("menuMsg").textContent="Kode room terdiri dari 4 huruf.",L("code").focus();return}Mn("join",n)});L("practice").addEventListener("click",()=>{m.tut=Of(),Mn("practice")});function p_(n,e,t){let i;try{i=new WebSocket(h_())}catch{return bf("Alamat server tidak valid.")}m.ws=i,m.joinErr="",i.onopen=()=>i.send(JSON.stringify({t:"join",name:n,cls:m.clsKey,mode:e,code:t,gm:m.createGm,map:m.createMap,diff:m.createDiff,pid:m.pid,skin:m.skin,tok:Dt.token||void 0})),i.onmessage=s=>m_(JSON.parse(s.data)),i.onclose=()=>{if(m.ws!==i)return;let s=!!m.myId;Uo(),bf(m.joinErr||(s?"Koneksi terputus.":"Server tidak terjangkau. Coba lagi.")),m.myId=0},i.onerror=()=>{}}function bf(n){L("menuMsg").textContent=n;for(let e of Hh)L(e).disabled=!1}function Uo(){let n=m.ws;m.ws=null,n&&n.readyState<=1&&n.close();for(let e of m.players.values())e.av.dispose(gn);m.players.clear(),m.roster.clear(),m.pending.length=0;for(let e of[...De.projs.keys()])De.removeProj(e);m.phase="menu",ce.enabled=!1,ce.reset?.(),wo("menu"),ps(),Do(),m.menuCls&&(m.clsKey=m.menuCls),Nf(),document.exitPointerLock?.(),L("hud").classList.add("hidden"),L("menu").classList.remove("hidden"),L("tutor").classList.add("hidden"),L("hitDir").textContent="";for(let e of Hh)L(e).disabled=!1}function m_(n){if(n.t==="w"){m.myId=n.id,m.limit=n.limit||uh,m.menuCls=m.clsKey,fn[n.cls]&&(m.clsKey=n.cls),m.cls=fn[m.clsKey],m.phase="play",wo("battle"),ps(),m.ended=!1,m.mut=n.mut||null,m.mut&&setTimeout(()=>wt(`Mode akhir pekan: ${hr[m.mut].name}`),2200),n.code&&Ue.set("lastRoom",n.code),m.barrelMask=0,m.seq=0,m.pending.length=0,m.me.xp=0,m.me.lvl=1,L("menu").classList.add("hidden"),L("hud").classList.remove("hidden"),L("menuMsg").textContent="",L("skillName").textContent=m.cls.skillName,L("death").classList.add("hidden"),L("score").classList.add("hidden"),L("pause").classList.add("hidden"),ce.enabled=!0,m.code=n.code||null,m.practice=!!n.practice,m.gm=n.gm||"dm",m.ticks.length=0,n.map&&n.map!==m.mapId&&Cf(n.map),m.team=zd.includes(m.gm)?n.team:-1,m.teamScore=[0,0],L("zoneTag").classList.toggle("hidden",m.gm!=="koth"&&m.gm!=="king"),m.event=n.ev||null,m.event&&setTimeout(()=>wt(`Event ${m.event.name}: ${m.event.target}`),2400);let e=L("roomPill");e.classList.toggle("hidden",!m.code&&!m.practice&&!n.ev),e.textContent=m.code?`${{koth:"Altar",tdm:"Tim",coop:"Lawan Bot",pve:"Bertahan",king:"Raja"}[m.gm]||"Room"} ${m.code} \u2934`:m.event?"Event":"Latihan",m.gm==="pve"&&(m.team=0),m.team>=0&&m.gm!=="pve"&&setTimeout(()=>wt(`Kamu di regu ${pn[m.team].name}`),1900),m.practice&&m.tut?m.tut.show():(m.tut=null,L("tutor").classList.add("hidden")),(!m.practice||!m.tut)&&wt(m.code?`Room ${m.code}: ketuk kode untuk membagikan`:m.practice?"Arena latihan":"Pertarungan dimulai")}else if(n.t==="e")m.joinErr=n.m,Ue.set("lastRoom",""),n.auth&&zh(n.m);else if(n.t==="r"){m.roster.clear();for(let[e,t,i,s,r,a,o,l,c]of n.l)m.roster.set(e,{id:e,name:t,cls:i,kills:s,deaths:r,bot:a,pts:o||0,team:l??-1,skin:c||"default"});n.ts&&(m.teamScore=n.ts),b_()}else n.t==="s"?v_(n):n.t==="pg"?m.ping=Math.round(performance.now()-n.c):n.t==="sp"&&m.ws?.send(JSON.stringify({t:"spr",c:n.c}))}setInterval(()=>{m.ws?.readyState===1&&m.ws.send(JSON.stringify({t:"pg",c:performance.now()}))},2e3);setInterval(()=>{m.ws?.readyState===1&&m.myId&&!document.hidden&&m.ping>0&&m.ws.send(JSON.stringify({t:"st",p:m.ping,f:Co}))},5e3);function an(n){if(!(!m.vibrate||!navigator.vibrate))try{navigator.vibrate(n)}catch{}}function g_(n,e){let t=L("hitDir");for(;t.children.length>=4;)t.firstChild.remove();let i=ur(Math.atan2(n-m.rx,e-m.rz),ce.yaw),s=Math.min(innerWidth,innerHeight)*.38,r=s*.95,a=s*.3,o=document.createElement("div");o.className="arc",o.style.cssText=`width:${r}px;height:${a}px;left:${-r/2}px;top:${-s}px;transform-origin:${r/2}px ${s}px;transform:rotate(${-i*180/Math.PI}deg)`,o.addEventListener("animationend",()=>o.remove()),t.appendChild(o)}function Of(){let n={i:0,moved:0,turned:0,shots:0,skills:0,kills:0,lastYaw:null,done:!1},e=()=>[[rn?"Geser jempol kiri untuk berjalan.":"Tekan W A S D untuk berjalan.",()=>n.moved>8],[rn?"Geser jari di sisi kanan layar untuk memutar arah bidikan.":"Klik layar, lalu gerakkan mouse untuk membidik.",()=>n.turned>1.6],[rn?"Tahan tombol merah untuk menembak.":"Klik kiri untuk menembak.",()=>n.shots>=5],[`${rn?"Ketuk tombol ungu":"Tekan Spasi"} untuk skill ${m.cls?.skillName||""}. Skill punya waktu jeda.`,()=>n.skills>=1],["Tumbangkan satu bot boneka. Mereka tidak menyerang balik.",()=>n.kills>=1]];return n.show=()=>{L("tutor").classList.remove("hidden"),n.render()},n.render=()=>{let t=e();L("tutorDots").innerHTML=t.map((i,s)=>`<i class="${s<n.i?"on":s===n.i&&!n.done?"now":""}"></i>`).join(""),L("tutorText").textContent=n.done?"Siap. Di arena sungguhan lawan menyerang balik; pertama mencapai 20 kill menang.":`${n.i+1}/${t.length} \xB7 ${t[n.i][0]}`,L("tutorGo").classList.toggle("hidden",!n.done),L("tutorSkip").textContent=n.done?"Tetap berlatih":"Lewati latihan"},n.check=()=>{if(n.done)return;let t=e();t[n.i][1]()&&(n.i++,nt("orb"),an(30),n.i>=t.length&&(n.done=!0,Ue.set("tutorDone","1"),nt("level")),n.render())},n}L("tutorSkip").addEventListener("click",()=>{if(Ue.set("tutorDone","1"),m.tut?.done){L("tutor").classList.add("hidden"),m.tut=null;return}m.tut=null,Uo(),Mn("quick")});L("tutorGo").addEventListener("click",()=>{m.tut=null,Uo(),Mn("quick")});for(let n of["touchstart","touchmove"])L("tutor").addEventListener(n,e=>e.stopPropagation());L("roomPill").addEventListener("click",n=>{if(n.stopPropagation(),!m.code)return;let e=`${location.origin}${location.pathname}?room=${m.code}`,t=()=>wt(`Tautan room ${m.code} disalin`),i=()=>wt(`Kode room: ${m.code}`);try{navigator.clipboard.writeText(e).then(t,i)}catch{i()}});function x_(n){let e=m.players.get(n);if(e)return e;let t=m.roster.get(n);if(!t)return null;let i=Gn[t.cls]?new yo(t.cls,ut.glowTex):new _o(t.cls,t.name,n===m.myId,ut.glowTex,t.team>=0&&(m.gm!=="pve"||t.team===0)?pn[t.team].color:null,t.skin);return gn.add(i.group),e={id:n,av:i,buf:[],x:0,z:0,yaw:0,flags:0,hp:1,maxHp:1,lvl:1,cls:t.cls,seen:0},m.players.set(n,e),e}function v_(n){let e=performance.now();if(!m.myId)return;let t=m.ended;if(n.mp&&n.mp!==m.mapId){Cf(n.mp),wt(`Peta: ${$n.name}`);for(let r of[...De.projs.keys()])De.removeProj(r)}m.ended=!!n.st,m.tm=n.tm,m.orbMask=n.o,m.runeMask=n.u??15,m.holder=n.z||0,m.barrelMask=n.bm||0,m.ticks.push([e,n.k||0]),m.ticks.length>30&&m.ticks.shift(),m.snapN=(m.snapN||0)+1;for(let r of n.p){let a=x_(r[0]);a&&(a.seen=m.snapN,a.hp=r[4],a.maxHp=r[5],a.lvl=r[6],a.flags=r[7],r[0]===m.myId?(m.me.hp=r[4],m.me.maxHp=r[5],m.me.lvl=r[6],m.me.flags=r[7]):(a.buf.push({t:e,x:r[1],z:r[2],yaw:r[3]}),a.buf.length>30&&a.buf.shift(),a.av.setInfo(r[4],r[5],r[6],!!(r[7]&64))))}for(let[r,a]of m.players)a.seen!==m.snapN&&(a.av.dispose(gn),m.players.delete(r));let i=n.me,s=m.pred;for(m.me.xp=i[6],m.me.respawnT=i[7],m.me.dmgT=i[8]||0,m.me.spdT=i[9]||0,m.me.ult=i[10]||0,m.ev=n.ev||null,m.wv=n.wv||null,m.rv=n.rv||null,m.me.perks=i[11]||"",m.me.offer=i[12]||0,m.me.spare=i[13]||0,s.spd=i[14]||1;m.pending.length&&m.pending[0].s<=n.a;)m.pending.shift();if(s.x=i[0],s.z=i[1],s.dashT=i[2],s.dx=i[3],s.dz=i[4],s.skillCd=i[5],!(m.me.flags&1)&&!m.ended)for(let r of m.pending)Mh(s,r,m.cls,ui);else m.pending.length=0;for(let r of n.e)__(r);m.ended&&!t&&(ce.fire=!1,Wh(!0),nt("level")),!m.ended&&t&&(L("score").classList.add("hidden"),wt("Ronde baru dimulai"))}var pi=new D;function mn(n,e){return Math.max(0,1-Math.hypot(n-m.rx,e-m.rz)/45)}function Kt(n){return m.roster.get(n)?.name||"\u2014"}function __(n){switch(n[0]){case"s":{let e=m.players.get(n[2]),t=e?.cls||m.roster.get(n[2])?.cls||"ranger";De.spawnProj(n[1],t,n[3],n[4],n[5]),n[2]!==m.myId&&e&&m.lastShotTick.get(n[2])!==m.snapN&&(m.lastShotTick.set(n[2],m.snapN),e.av.fireKick(),De.muzzle(e.av.tipWorld(pi),t,n[5]),nt(t,mn(n[3],n[4])*.8,!0));break}case"h":{let t=De.projs.get(n[1])?.cls||"ranger";De.removeProj(n[1]),De.impact(n[2],n[3],t),t==="mage"&&(nt("boom",mn(n[2],n[3])),m.shake=Math.max(m.shake,.5*mn(n[2],n[3])));break}case"d":{let e=n[1]===m.myId;if(e){L("vignette").style.opacity=.75,setTimeout(()=>{L("vignette").style.opacity=0},160),nt("hurt"),m.shake=Math.max(m.shake,.35);let t=n[2]&&n[2]!==m.myId?m.players.get(n[2]):null;t&&(g_(t.x,t.z),m.arcN=(m.arcN||0)+1),m.time-m.buzzT>.12&&(m.buzzT=m.time,an(35))}if(n[2]===m.myId&&!e){let t=L("cross");t.classList.remove("hit"),t.offsetWidth,t.classList.add("hit"),nt("hit")}(e||n[2]===m.myId)&&y_(n[4],n[5],n[3],e),De.burst(n[4],1.5,n[5],16730938,5,4,.7,.3);break}case"k":{let e=document.createElement("div");(n[1]===m.myId||n[2]===m.myId)&&(e.className="me"),e.innerHTML="<span></span><i>\u2726</i><span></span>",e.children[0].textContent=Kt(n[1]),e.children[2].textContent=Kt(n[2]);let t=L("feed");for(t.appendChild(e);t.children.length>4;)t.firstChild.remove();setTimeout(()=>e.remove(),5e3);let i=m.players.get(n[2]);i&&De.burst(i.x,1.4,i.z,di[i.cls].color,40,8,1.4,.9),n[1]===m.myId&&n[2]!==m.myId&&(nt("kill"),wt("Lawan tumbang"),an([40,40,70]),m.tut&&(m.tut.kills++,m.tut.check())),n[2]===m.myId&&(nt("death"),an(250),ce.fire=!1,L("deathBy").textContent=`Dikalahkan oleh ${Kt(n[1])}`,L("death").classList.remove("hidden"));break}case"r":{if(De.pillar(n[2],n[3],12577279),n[1]===m.myId)ce.yaw=Math.atan2(-n[2],-n[3]),m.rx=n[2],m.rz=n[3],m.pending.length=0,L("death").classList.add("hidden");else{let e=m.players.get(n[1]);e&&(e.buf.length=0)}break}case"l":{let e=m.players.get(n[1]);e&&De.pillar(e.x,e.z,16766571),n[1]===m.myId&&(nt("level"),wt(`Naik ke Level ${n[2]}`));break}case"n":De.nova(n[2],n[3],m.roster.get(n[1])?.cls==="brute"?Gn.brute.color:fn.mage.color,m.roster.get(n[1])?.cls==="brute"?Gn.brute.slam.r:Bd),nt("nova",mn(n[2],n[3])),m.shake=Math.max(m.shake,.6*mn(n[2],n[3]));break;case"E":{let e=gh[n[1]];if(!e)break;wt(`${e.name}: ${e.desc}`),nt("level"),an([60,40,60]);break}case"g":{let e=m.ev?.[2]??0,t=m.ev?.[3]??0;De.pillar(e,t,16766315),De.burst(e,1.4,t,16766315,50,7,1.4,.9,-2),wt(n[1]===m.myId?"Cawan Emas: HP penuh dan kedua rune!":`${Kt(n[1])} mengambil Cawan Emas`),n[1]===m.myId&&(nt("level"),an([30,30,80]));break}case"B":wt(n[1]===m.myId?"Kamu jadi BURONAN: semua mengincarmu!":`${Kt(n[1])} jadi buronan: tumbangkan untuk hadiah XP`),n[1]===m.myId&&an([80,60,80]);break;case"b":wt(n[1]===m.myId?"Buronan tumbang: hadiah XP besar!":`${Kt(n[1])} menumbangkan buronan ${Kt(n[2])}`),n[1]===m.myId&&nt("level");break;case"C":n[1]===m.myId&&(setTimeout(()=>wt(`Tantangan selesai: ${n[2]}`),900),nt("level"),an([40,40,40,40,90]));break;case"U":{let e=m.players.get(n[1]);if(!e)break;let t=fn[n[2]]?.color??16766315;De.pillar(e.x,e.z,16766315),De.burst(e.x,1.6,e.z,t,40,9,1.5,.7,0),n[2]==="guardian"&&De.nova(e.x,e.z,t,6),n[1]===m.myId&&(wt(vh[n[2]].name+"!"),an(120),m.shake=Math.max(m.shake,.5)),nt(n[2]==="mage"?"nova":n[2]==="guardian"?"shield":"ranger",mn(e.x,e.z));break}case"M":De.ring(n[1],n[2],16726830,6,.8),De.ring(n[1],n[2],16756848,4,.8),De.flash(n[1],6,n[2],16734766,30);break;case"m":{De.nova(n[1],n[2],16738862,6),De.burst(n[1],1,n[2],16765562,60,12,2,.8,8),nt("boom",mn(n[1],n[2])),m.shake=Math.max(m.shake,.9*mn(n[1],n[2]));break}case"H":De.ring(n[2],n[3],16769658,7,.7),De.pillar(n[2],n[3],16769658),nt("orb",mn(n[2],n[3]));break;case"X":{let e=$n.barrels?.[n[1]];e&&(De.nova(e[0],e[1],16742958,5),De.burst(e[0],1,e[1],16765562,50,11,1.8,.8,8),nt("boom",mn(e[0],e[1])),m.shake=Math.max(m.shake,.8*mn(e[0],e[1])));break}case"q":{if(n[1]!==m.myId&&!Kr(n[1]))break;let e=document.createElement("div");e.className="ping",e.textContent=`${Kt(n[1])}: ${_h[n[2]]}`,L("feed").appendChild(e),setTimeout(()=>e.remove(),5e3),De.ring(n[3],n[4],8257456,3,1.2),De.pillar(n[3],n[4],8257456),nt("orb",.6),(m.pings||=[]).push({x:n[3],z:n[4],t:m.time+5});break}case"K":wt(n[1]===m.myId?"Kamu dinobatkan menjadi RAJA!":`${Kt(n[1])} menjadi raja: buru dia!`);{let e=m.players.get(n[1]);e&&De.pillar(e.x,e.z,16765514)}n[1]===m.myId&&(nt("level"),an([80,50,120]));break;case"Z":setTimeout(()=>wt(`Event ${n[1]} selesai. Terima kasih sudah ikut!`),600),m.event=null;break;case"W":wt(n[2]?`Gelombang ${n[1]}: ${n[1]%10===0?"Ratu Laba-laba":"Golem Batu"} datang!`:`Gelombang ${n[1]}`),nt("level"),an([50,50,50]),L("perks").classList.add("hidden");break;case"w":wt(n[2]===n[1]&&n[1]>0?`Gelombang ${n[1]} selesai! Titik simpan tercapai`:`Gelombang ${n[1]} selesai! Rekan bangkit, HP pulih`),nt("level"),L("death").classList.add("hidden");break;case"A":{let e=m.players.get(n[1]);if(!e)break;e.av.windup?.(n[2]?.9:qr.windup),(m.windIds||=new Map).set(n[1],m.time+(n[2]?.9:qr.windup)),De.ring(e.x,e.z,n[2]?16742938:16726843,n[2]?Gn.brute.slam.r:2.4,n[2]?.9:qr.windup),Math.hypot(e.x-m.rx,e.z-m.rz)<8&&nt("hurt",.4);break}case"P":n[1]===m.myId&&Uf(n[2]);break;case"p":n[1]===m.myId?(L("perks").classList.add("hidden"),wt(`Berkah ${Fi[n[2]].name}: ${Fi[n[2]].desc}`)):m.roster.get(n[1])&&wt(`${Kt(n[1])} memilih ${Fi[n[2]].name}`);break;case"v":{let e=m.players.get(n[2]);e&&(De.pillar(e.x,e.z,8257456),De.burst(e.x,1.2,e.z,8257456,30,5,1.2,.7,-2)),n[2]===m.myId?(L("death").classList.add("hidden"),wt(n[1]===m.myId?"Bangkit dengan nyawa cadangan!":`${Kt(n[1])} menolongmu!`),an([40,40,80]),nt("level")):n[1]===m.myId&&wt(`Kamu menolong ${Kt(n[2])}!`);break}case"x":De.nova(n[1],n[2],16756848,4),nt("boom",mn(n[1],n[2])*.6);break;case"a":{let e=m.players.get(n[1]);e&&(e.av.fireKick(),nt("hit",mn(e.x,e.z)*.6));break}case"u":{let e=$n.runes[n[1]];if(!e)break;let t=Ni[e.type];De.burst(e.x,1.2,e.z,t.color,34,6,1.3,.8,-2),De.pillar(e.x,e.z,t.color),n[2]===m.myId&&(nt("level"),an([30,30,30]),wt(`${t.name}: ${t.desc}`));break}case"o":if(!$n.orbs[n[1]])break;De.burst($n.orbs[n[1]][0],1.2,$n.orbs[n[1]][1],5898140,26,5,1.1,.7,-2),n[2]===m.myId&&nt("orb");break}}var Sf=0;function wt(n){let e=L("toast");e.textContent=n,e.classList.add("on"),clearTimeout(Sf),Sf=setTimeout(()=>e.classList.remove("on"),1800)}var Ro=[];function y_(n,e,t,i){let s=Ro.find(r=>r.t<=0)||(()=>{if(Ro.length>=20)return null;let r={el:document.createElement("div"),t:0};return L("dmgLayer").appendChild(r.el),Ro.push(r),r})();s&&(s.el.className="dmg"+(i?" me":""),s.el.textContent=(i?"-":"")+t,s.t=.8,s.x=n+(Math.random()-.5)*.8,s.z=e+(Math.random()-.5)*.8,s.el.style.display="")}function M_(n){for(let e of Ro)if(!(e.t<=0)){if(e.t-=n,e.t<=0){e.el.style.display="none";continue}if(pi.set(e.x,2.6+(.8-e.t)*2.2,e.z).project(on),pi.z>1){e.el.style.opacity=0;continue}e.el.style.opacity=Math.min(1,e.t*3),e.el.style.transform=`translate(${(pi.x*.5+.5)*innerWidth}px,${(-pi.y*.5+.5)*innerHeight}px) translate(-50%,-50%) scale(${1+Math.max(0,e.t-.6)*3})`}}function Po(){return[...m.roster.values()].filter(n=>!Gn[n.cls]).sort((n,e)=>(m.team>=0?n.team-e.team:0)||(m.gm==="koth"||m.gm==="king"?e.pts-n.pts:0)||e.kills-n.kills||n.deaths-e.deaths)}var Kr=n=>m.team>=0&&m.roster.get(n)?.team===m.team;function b_(){let n=Po(),e=m.roster.get(m.myId);e&&(L("rank").textContent="#"+(n.indexOf(e)+1),m.gm!=="pve"&&(L("myScore").textContent=m.team>=0?`${pn[0].name} ${m.teamScore[0]} \xB7 ${m.teamScore[1]} ${pn[1].name}`:m.gm==="koth"||m.gm==="king"?`${e.pts} / ${m.limit} poin`:`${e.kills} / ${m.limit||uh}`),L("score").classList.contains("hidden")||(zf(),!m.ended&&m.team>=0&&(L("scoreTitle").textContent=`${pn[0].name} ${m.teamScore[0]} \xB7 ${m.teamScore[1]} ${pn[1].name}`)))}function zf(){let n=m.gm==="koth"||m.gm==="king",e=Po().map((t,i)=>`<tr class="${t.id===m.myId?"me":""}"><td>${i+1}</td><td></td>${n?`<td>${t.pts}</td>`:""}<td>${t.kills}</td><td>${t.deaths}</td></tr>`).join("");L("scoreTable").innerHTML=`<tr><th>#</th><th>Pengembara</th>${n?"<th>Poin</th>":""}<th>Kill</th><th>Gugur</th></tr>${e}`,Po().forEach((t,i)=>{let s=L("scoreTable").rows[i+1].cells[1];if(s.textContent=t.name+(t.bot?" (bot)":"")+" \xB7 "+fn[t.cls].name,t.team>=0){let r=document.createElement("i");r.className="tdot",r.style.background="#"+pn[t.team].color.toString(16).padStart(6,"0"),s.prepend(r)}})}function Wh(n){zf();let e=Po()[0],t=m.teamScore,i=t[0]===t[1]?-1:t[0]>t[1]?0:1;if(n&&m.gm==="pve"){let s=m.wv?.[3]||0;L("scoreTitle").textContent=`Bertahan sampai gelombang ${m.wv?.[0]||0}`,L("scoreNext").textContent=s?`Ronde berikutnya lanjut dari gelombang ${s+1} (titik simpan) dengan berkah acak`:"Ronde berikutnya mulai dari gelombang 1",L("score").classList.remove("hidden");return}L("scoreTitle").textContent=n?m.team>=0?i<0?"Seri":i===m.team?`Regu ${pn[i].name} Menang!`:`Regu ${pn[i].name} Menang`:e?.id===m.myId?"Kamu Menang!":`${e?.name||""} Menang`:m.team>=0?`${pn[0].name} ${t[0]} \xB7 ${t[1]} ${pn[1].name}`:"Papan Skor",L("score").classList.remove("hidden")}L("top").addEventListener("click",()=>{m.ended||(L("score").classList.contains("hidden")?Wh(!1):L("score").classList.add("hidden"))});L("score").addEventListener("click",()=>{m.ended||L("score").classList.add("hidden")});var No=L("pause");L("pauseBtn").addEventListener("click",()=>{No.classList.toggle("hidden"),document.exitPointerLock?.(),ce.fire=!1});L("resume").addEventListener("click",()=>No.classList.add("hidden"));L("leave").addEventListener("click",()=>{Uo(),m.myId=0,L("menuMsg").textContent=""});L("quality").addEventListener("change",n=>{Rf=!1,Ue.set("qualityManual","1"),Ue.set("quality",n.target.value),Lo(n.target.value)});L("sens").value=Ue.get("sens","1");ce.sens=Number(L("sens").value);L("sens").addEventListener("input",n=>{ce.sens=Number(n.target.value),Ue.set("sens",n.target.value)});L("autoFire").checked=m.autoFire;L("aimAssist").checked=m.aimAssist;L("autoFire").addEventListener("change",n=>{m.autoFire=n.target.checked,Ue.set("autoFire",m.autoFire?"1":"")});L("aimAssist").addEventListener("change",n=>{m.aimAssist=n.target.checked,Ue.set("aimAssist",m.aimAssist?"1":"")});L("mute").addEventListener("change",n=>ff(n.target.checked));var Jr={music:Number(Ue.get("volMusic",Ue.get("music","1")==="1"?"0.6":"0")),sfx:Number(Ue.get("volSfx","0.8"))};for(let n of document.querySelectorAll("[data-vol]")){let e=n.dataset.vol;n.value=Jr[e],n.addEventListener("input",()=>{Jr[e]=Number(n.value),Ue.set(e==="music"?"volMusic":"volSfx",n.value),Eo(e,Jr[e]);for(let t of document.querySelectorAll(`[data-vol="${e}"]`))t!==n&&(t.value=n.value);gr()}),e==="sfx"&&n.addEventListener("change",()=>nt("hit"))}var S_=()=>m.phase==="play"?"battle":"menu";function gr(){Dh(),Eo("music",Jr.music),Eo("sfx",Jr.sfx),wo(S_()),mf()&&(removeEventListener("pointerdown",gr,!0),removeEventListener("keydown",gr,!0))}addEventListener("pointerdown",gr,!0);addEventListener("keydown",gr,!0);gr();document.addEventListener("visibilitychange",()=>pf(!document.hidden));L("vibrate").checked=m.vibrate;L("vibrate").addEventListener("change",n=>{m.vibrate=n.target.checked,Ue.set("vibrate",m.vibrate?"1":""),m.vibrate&&an(40)});for(let n of[No])for(let e of["touchstart","touchmove"])n.addEventListener(e,t=>t.stopPropagation());var E_=L("minimap"),qe=E_.getContext("2d"),Io=document.createElement("canvas");Io.width=Io.height=132;function Hf(){let n=Io.getContext("2d"),e=132/(xt*2+6),t=66;n.clearRect(0,0,132,132),n.fillStyle="rgba(190,170,220,0.55)";for(let i of $n.obst)i.t==="cyl"?(n.beginPath(),n.arc(t-i.x*e,t-i.z*e,Math.max(1.5,i.r*e),0,7),n.fill()):n.fillRect(t-(i.x+i.w/2)*e,t-(i.z+i.d/2)*e,i.w*e,i.d*e)}Hf();function w_(){let n=132/(xt*2+6),e=66;qe.clearRect(0,0,132,132),qe.drawImage(Io,0,0),m.pings=(m.pings||[]).filter(t=>t.t>m.time);for(let t of m.pings)qe.strokeStyle="#7dffb0",qe.lineWidth=2,qe.beginPath(),qe.arc(e-t.x*n,e-t.z*n,4+m.time*6%4,0,7),qe.stroke();$n.orbs.forEach(([t,i],s)=>{m.orbMask&1<<s&&(qe.fillStyle="#59ff9c",qe.fillRect(e-t*n-1.5,e-i*n-1.5,3,3))}),$n.runes.forEach((t,i)=>{m.runeMask&1<<i&&(qe.fillStyle=t.type==="dmg"?"#ff3b4e":"#4dc3ff",qe.beginPath(),qe.arc(e-t.x*n,e-t.z*n,3,0,7),qe.fill())}),m.gm==="koth"&&(qe.strokeStyle=m.holder===m.myId?"#f2c66d":m.holder===-1?"#b76bff":m.holder?"#ff4d5e":"rgba(255,242,208,.7)",qe.lineWidth=2,qe.beginPath(),qe.arc(e,e,Xr*n,0,7),qe.stroke());for(let t of m.players.values()){if(t.id===m.myId||t.flags&1)continue;let i=Kr(t.id);if(!!(t.flags&64)){qe.fillStyle="#ffd56b",qe.font="bold 12px sans-serif",qe.textAlign="center",qe.textBaseline="middle",qe.fillText("\u2605",e-t.x*n,e-t.z*n);continue}!i&&Math.hypot(t.x-m.rx,t.z-m.rz)>32||(qe.fillStyle=i?"#"+pn[m.team].color.toString(16).padStart(6,"0"):"#ff5a4a",qe.beginPath(),qe.arc(e-t.x*n,e-t.z*n,3,0,7),qe.fill())}qe.save(),qe.translate(e-m.rx*n,e-m.rz*n),qe.rotate(ce.yaw),qe.fillStyle="#fff",qe.beginPath(),qe.moveTo(0,-6),qe.lineTo(4,4),qe.lineTo(-4,4),qe.closePath(),qe.fill(),qe.restore()}of({canvas:Af,touchLayer:L("touchLayer"),stick:L("stick"),knob:L("knob"),fireBtn:L("fireBtn"),skillBtn:L("skillBtn"),ultBtn:L("ultBtn")});Lo(ds);function T_(){let n=null,e=1e9,t=m.cls.projSpeed*m.cls.projLife;for(let i of m.players.values()){if(i.id===m.myId||i.flags&1||Kr(i.id))continue;let s=i.x-m.rx,r=i.z-m.rz,a=Math.hypot(s,r);if(a>t+2||a<.5)continue;let o=ur(Math.atan2(s,r),ce.yaw);if(Math.abs(o)>.3)continue;let l=Math.abs(o)*20+a*.05;l<e&&Gd(m.rx,m.rz,i.x,i.z)&&(e=l,n={p:i,diff:o,d:a})}return n}function A_(){let n=m.ticks,e=performance.now()-Od*1e3;if(!n.length)return 0;for(let t=n.length-1;t>0;t--)if(n[t-1][0]<=e){let[i,s]=n[t-1],[r,a]=n[t];return Math.round((s+(a-s)*Math.min(1,(e-i)/(r-i||1)))*10)/10}return n[0][1]}function R_(){let n=m.me.flags&1,e=!No.classList.contains("hidden"),t=Math.sin(ce.yaw),i=Math.cos(ce.yaw),s=ce.jx,r=ce.jy,a=ce.fire,o=ce.skillQueued?1:0,l=ce.ultQueued&&m.me.ult>=xh?1:0;ce.skillQueued=!1,ce.ultQueued=!1,(e||m.ended)&&(s=r=0,a=!1,o=0,l=0);let c=(m.autoFire||m.aimAssist)&&!n&&!m.ended?T_():null;if(m.lockId=c?c.p.id:0,c){let x=Math.atan(1/c.d);m.aimAssist&&(a||m.autoFire)&&(ce.yaw+=Math.max(-1.6*ui,Math.min(1.6*ui,c.diff))),m.autoFire&&!e&&Math.abs(c.diff)<x&&(a=!0)}let h=x=>Math.round(x*1e3)/1e3,u={t:"in",s:++m.seq,mx:h(t*r-i*s),mz:h(i*r+t*s),y:h(ce.yaw),f:a&&!n?1:0,k:o,u:n?0:l,vt:A_()};if(m.ws?.readyState===1&&m.ws.send(JSON.stringify(u)),n||m.ended)return;let d=Mh(m.pred,u,m.cls,ui);m.pending.push(u),m.pending.length>90&&m.pending.shift();let f=m.players.get(m.myId);if(m.tut&&!m.tut.done){let x=m.tut,v=Math.hypot(m.pred.x-(x.px??m.pred.x),m.pred.z-(x.pz??m.pred.z));v<2&&(x.moved+=v),x.px=m.pred.x,x.pz=m.pred.z,x.lastYaw!==null&&x.i>=1&&(x.turned+=Math.abs(ur(ce.yaw,x.lastYaw))),x.lastYaw=ce.yaw,d&&x.skills++,x.check()}d&&(nt(m.cls.skill),m.cls.skill==="dash"&&f&&De.burst(m.rx,1.2,m.rz,m.cls.color,24,5,1.2,.4,0)),m.localFireCd-=ui,u.f&&m.localFireCd<=0&&f&&(m.localFireCd=m.cls.fireCd,m.tut&&m.tut.shots++,f.av.fireKick(),De.muzzle(f.av.tipWorld(pi),m.clsKey,ce.yaw),nt(m.clsKey),m.shake=Math.max(m.shake,m.clsKey==="ranger"?.08:.22))}var pr=7.2,Ef=new D,wf=new D,Tf=performance.now(),To=0,Nh=0,Co=60,Ao=0,kh=0;function Vf(n){requestAnimationFrame(Vf);let e=Math.min(.1,(n-Tf)/1e3);Tf=n,m.time+=e;let t=m.time;if(m.phase==="play"&&m.myId){m.acc+=e;let i=0;for(;m.acc>=ui&&i++<4;)R_(),m.acc-=ui;m.acc>ui&&(m.acc=0);let s=m.pred,a=Math.hypot(s.x-m.rx,s.z-m.rz)>6?1:Math.min(1,e*22),o=m.rx,l=m.rz;m.rx+=(s.x-m.rx)*a,m.rz+=(s.z-m.rz)*a;let c=e>0?Math.hypot(m.rx-o,m.rz-l)/e:0;c>2&&c<20&&!(m.me.flags&1)&&(m.stepT-=e*c/8.5,m.stepT<=0&&(m.stepT=.36,gf()));let h=n-110;for(let R of m.players.values()){if(R.id===m.myId)R.x=m.rx,R.z=m.rz,R.yaw=ce.yaw,R.flags=m.me.flags;else{let E=R.buf;if(E.length){let M=E.length-1;for(;M>0&&E[M-1].t>h;)M--;let N=E[M],V=E[M-1]||N,z=N.t>V.t?(h-V.t)/(N.t-V.t):1;z=Math.max(0,Math.min(1.25,z)),Math.hypot(N.x-V.x,N.z-V.z)>8&&(z=1),R.x=V.x+(N.x-V.x)*z,R.z=V.z+(N.z-V.z)*z,R.yaw=V.yaw+ur(N.yaw,V.yaw)*Math.min(1,z)}}R.av.update(e,R.x,R.z,R.yaw,R.flags,t),R.flags&8&&Math.random()<.7&&De.particle(R.x,1+Math.random(),R.z,0,.5,0,di[R.cls].color,1.3,.3,0),m.mut==="giant"&&(R.av.big=1.4),R.flags&128&&Math.random()<.5&&De.particle(R.x+(Math.random()-.5),.3+Math.random()*1.6,R.z+(Math.random()-.5),0,-.5,0,8378623,.9,.5,0),R.flags&1||(R.flags&16&&Math.random()<.5&&De.particle(R.x+(Math.random()-.5),.4+Math.random()*2,R.z+(Math.random()-.5),0,1.6,0,Ni.dmg.color,.9,.5,0),R.flags&32&&Math.random()<.5&&De.particle(R.x+(Math.random()-.5),.2+Math.random()*.6,R.z+(Math.random()-.5),0,.3,0,Ni.spd.color,1.1,.4,0))}let u=null;if(m.me.flags&1&&m.team>=0){let R=1e9;for(let E of m.players.values()){if(E.id===m.myId||E.flags&1||!Kr(E.id))continue;let M=Math.hypot(E.x-m.pred.x,E.z-m.pred.z);M<R&&(R=M,u=E)}}L("specTag").classList.toggle("hidden",!u),u&&(L("specTag").textContent=`Menonton ${Kt(u.id)}`);let d=u?u.x:m.rx,f=u?u.z:m.rz,x=u?u.yaw:ce.yaw,v=Math.sin(x),g=Math.cos(x),p=pr;for(let R=.15;R<=1.001;R+=.085)if(Bi(d-v*pr*R,f-g*pr*R,.5)){p=Math.max(2.2,pr*(R-.1));break}m.camDist+=(p-m.camDist)*Math.min(1,e*(p<m.camDist?16:4)),m.shake=Math.max(0,m.shake-e*2.5);let _=m.shake*m.shake*.6,S=innerHeight>innerWidth;Ef.set(d-v*m.camDist+(Math.random()-.5)*_,(S?6:4.3)+(pr-m.camDist)*.55+(Math.random()-.5)*_,f-g*m.camDist),on.position.copy(Ef);let y=.8+5.2*(m.camDist/pr);wf.set(d+v*y,2,f+g*y),on.lookAt(wf),pi.set(m.rx+v*20,1.55,m.rz+g*20).project(on);let U=L("cross");if(U.style.left=(pi.x*.5+.5)*100+"%",U.style.top=(-pi.y*.5+.5)*100+"%",U.classList.toggle("lock",!!m.lockId),U.style.display=m.me.flags&1?"none":"",kh-=e,kh<=0){kh=.1;let R=m.me;L("hpFill").style.width=Math.max(0,R.hp/R.maxHp*100)+"%",L("hpText").textContent=`${Math.max(0,R.hp)} / ${R.maxHp}`,L("lvl").textContent=R.lvl;let E=dh[R.lvl-1],M=dh[R.lvl];L("xpFill").style.width=(R.lvl>=Fd?100:Math.min(100,(R.xp-E)/(M-E)*100))+"%";let N=m.pred.skillCd;L("skillCd").style.height=N/m.cls.skillCd*100+"%",L("skillNum").textContent=N>0?Math.ceil(N):"";let V=Math.min(1,(m.me.ult||0)/xh);L("ultRing").style.strokeDashoffset=String(176*(1-V)),L("ultBtn").classList.toggle("ready",V>=1),L("ultName").textContent=V>=1?vh[m.clsKey].name:`${Math.floor(V*100)}%`;let z=m.ev;L("eventTag").classList.toggle("hidden",!z),z&&(L("eventTag").textContent=`${gh[z[0]].name} \xB7 ${z[1]} dtk`),L("skillName").style.opacity=N>0?.25:1;let Y=Math.max(0,m.tm);if(L("timer").textContent=m.gm==="pve"&&!m.ended?m.wv?.[1]===0?`Mulai ${Y}`:`G${m.wv?.[0]||1}`:`${Math.floor(Y/60)}:${String(Y%60).padStart(2,"0")}`,m.gm==="pve"&&m.wv&&(L("myScore").textContent=m.wv[1]===0?`Gelombang ${m.wv[0]+1} segera`:`Gelombang ${m.wv[0]} \xB7 ${m.wv[2]} monster`),R.flags&1){let J=m.rv?.find(W=>W[0]===m.myId);L("deathT").textContent=m.gm!=="pve"?`Bangkit dalam ${Math.ceil(R.respawnT)}\u2026`:J?.[2]>0?`Nyawa cadangan: bangkit sendiri dalam ${J[2]}\u2026`:J?.[1]>0?`Rekan sedang menolongmu\u2026 ${J[1]}%`:"Tunggu rekan berdiri di dekatmu 3 detik, atau gelombang selesai."}if(L("perkBar").innerHTML=m.gm==="pve"?(m.me.perks?m.me.perks.split(",").map(J=>{let W=J.replace(/\d+$/,""),P=+J.slice(W.length);return`<span>${Fi[W]?.name||W}${P>1?" \xD7"+P:""}</span>`}).join(""):"")+(m.me.spare?"<span>Nyawa cadangan</span>":""):"",m.me.offer&&L("perks").classList.contains("hidden")&&!(m.me.flags&1)&&Uf(m.me.offer),m.ended?L("scoreNext").textContent=m.gm==="pve"&&m.wv?.[3]?`Lanjut dari gelombang ${m.wv[3]+1} (titik simpan) dalam ${Y} detik`:`Ronde berikutnya dalam ${Y} detik`:L("scoreNext").textContent="",m.ended||(ce.showScore&&L("score").classList.contains("hidden")?Wh(!1):!ce.showScore&&!rn&&m.tabOpen&&L("score").classList.add("hidden"),m.tabOpen=ce.showScore),L("net").textContent=`${m.ping} ms \xB7 ${Co} fps`,L("buffs").innerHTML=[["dmg",m.me.dmgT],["spd",m.me.spdT]].filter(([,J])=>J>0).map(([J,W])=>`<span class="buff" style="--c:#${Ni[J].color.toString(16).padStart(6,"0")}"><i></i>${Ni[J].name.replace("Rune ","")} ${Math.ceil(W)}</span>`).join(""),m.gm==="king"){let J=[...m.players.values()].find(P=>P.flags&64),W=L("zoneTag");W.textContent=J?J.id===m.myId?"Kamu sang RAJA: bertahan hidup untuk poin!":`Buru sang raja: ${Kt(J.id)}`:"Mahkota menunggu pemilik baru\u2026",W.style.setProperty("--c",J?.id===m.myId?"#f2c66d":"#ff4d5e")}if(m.gm==="koth"){let J=m.holder,W=L("zoneTag"),P=Math.hypot(m.rx,m.rz)<Xr;W.textContent=J===m.myId?"Kamu menguasai altar":J===-1?"Altar diperebutkan":J?`Altar dikuasai ${Kt(J)}`:P?"Bertahan di lingkaran untuk mengumpulkan poin":"Altar kosong: rebut lingkaran di tengah",W.style.setProperty("--c",J===m.myId?"#f2c66d":J===-1?"#b76bff":J?"#ff4d5e":"#fff2d0")}w_()}M_(e),ut.update(t,{x:m.rx,z:m.rz},m.orbMask,m.barrelMask),u_(t),d_(),Bh.update(t,m.runeMask,m.gm,m.holder,m.myId);let A=m.ev?.[0]==="eclipse"?1:0;m.eclipse=(m.eclipse||0)+(A-(m.eclipse||0))*Math.min(1,e*1.5),bn.toneMappingExposure=1.15-.7*m.eclipse,ut.fog&&(ut.fogBase??=ut.fog.density,ut.fog.density=ut.fogBase*(1+3.5*m.eclipse));let I=m.ev?.[0]==="golden"&&!m.ev[4];Xn.visible=I,I&&(Xn.position.set(m.ev[2],1.1+Math.sin(t*2.5)*.15,m.ev[3]),Xn.rotation.y=t*1.2)}else{let i=t*.08;on.position.set(Math.sin(i)*30,9+Math.sin(t*.2)*1.5,Math.cos(i)*30),on.lookAt(0,3.5,0),ut.update(t,{x:0,z:0},255),Bh.update(t,15,"dm",0,0)}De.update(e),ds==="low"?bn.render(gn,on):mi.render(e),To+=e,Nh++,To>=1&&(Co=Math.round(Nh/To),To=0,Nh=0,Rf&&!document.hidden&&m.time>4&&(Ao=Co<27?Ao+1:0,Ao>=3&&ds!=="low"&&(Ao=0,Lo(ds==="high"?"medium":"low"),Ue.set("quality",ds))))}requestAnimationFrame(Vf);
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
