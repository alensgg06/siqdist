var Mc="170";var Yd=0,bh=1,Zd=2;var Lu=1,bc=2,Yn=3,vi=0,ke=1,xe=2,Dn=0,Ss=1,se=2,Sh=3,Eh=4,Jd=5,Wi=100,Kd=101,jd=102,Qd=103,tf=104,ef=200,nf=201,sf=202,rf=203,Yo=204,Zo=205,af=206,of=207,lf=208,cf=209,hf=210,uf=211,df=212,ff=213,pf=214,Jo=0,Ko=1,jo=2,As=3,Qo=4,tl=5,el=6,nl=7,Du=0,mf=1,gf=2,xi=0,Sc=1,Ec=2,Tc=3,br=4,xf=5,wc=6,Ac=7;var Uu=300,Rs=301,Cs=302,il=303,sl=304,ka=306,xr=1e3,qi=1001,rl=1002,on=1003,_f=1004;var Ir=1005;var In=1006,uo=1007;var $i=1008;var jn=1009,Nu=1010,Fu=1011,_r=1012,Rc=1013,Yi=1014,Ln=1015,Tn=1016,Cc=1017,Pc=1018,Ps=1020,ku=35902,Bu=1021,Ou=1022,bn=1023,zu=1024,Hu=1025,Es=1026,Is=1027,Ic=1028,Lc=1029,Vu=1030,Dc=1031;var Uc=1033,aa=33776,oa=33777,la=33778,ca=33779,al=35840,ol=35841,ll=35842,cl=35843,hl=36196,ul=37492,dl=37496,fl=37808,pl=37809,ml=37810,gl=37811,xl=37812,_l=37813,vl=37814,yl=37815,Ml=37816,bl=37817,Sl=37818,El=37819,Tl=37820,wl=37821,ha=36492,Al=36494,Rl=36495,Gu=36283,Cl=36284,Pl=36285,Il=36286;var ua=2300,Ll=2301,fo=2302,Th=2400,wh=2401,Ah=2402;var vf=3200,yf=3201;var Wu=0,Mf=1,mi="",Fe="srgb",Ws="srgb-linear",Ba="linear",oe="srgb";var is=7680;var Rh=519,bf=512,Sf=513,Ef=514,Xu=515,Tf=516,wf=517,Af=518,Rf=519,Dl=35044,Oa=35048;var Ch="300 es",Jn=2e3,da=2001,yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var po=Math.PI/180,Ul=180/Math.PI;function _i(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function Cf(i,t){return(i%t+t)%t}function mo(i,t,e){return(1-e)*i+e*t}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var rt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],_=s[0],g=s[3],p=s[6],v=s[1],S=s[4],y=s[7],D=s[2],R=s[5],I=s[8];return r[0]=a*_+o*v+l*D,r[3]=a*g+o*S+l*R,r[6]=a*p+o*y+l*I,r[1]=c*_+h*v+u*D,r[4]=c*g+h*S+u*R,r[7]=c*p+h*y+u*I,r[2]=f*_+d*v+x*D,r[5]=f*g+d*S+x*R,r[8]=f*p+d*y+x*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,x=e*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(go.makeScale(t,e)),this}rotate(t){return this.premultiply(go.makeRotation(-t)),this}translate(t,e){return this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},go=new zt;function qu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pf(){let i=fa("canvas");return i.style.display="block",i}var Ph={};function dr(i){i in Ph||(Ph[i]=!0,console.warn(i))}function If(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Lf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Df(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Yt={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(i.r=Ts(i.r),i.g=Ts(i.g),i.b=Ts(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mi?Ba:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ih=[.64,.33,.3,.6,.15,.06],Lh=[.2126,.7152,.0722],Dh=[.3127,.329],Uh=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nh=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Ws]:{primaries:Ih,whitePoint:Dh,transfer:Ba,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:Lh,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:Ih,whitePoint:Dh,transfer:oe,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:Lh,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});var ss,Nl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=fa("canvas")),ss.width=t.width,ss.height=t.height;let n=ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Uf=0,pa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xo(s[a].image)):r.push(xo(s[a]))}else r=xo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nf=0,je=class i extends yi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=qi,s=qi,r=In,a=$i,o=bn,l=jn,c=i.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=_i(),this.name="",this.source=new pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xr:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xr:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Uu;je.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,y=(d+1)/2,D=(p+1)/2,R=(h+f)/4,I=(u+_)/4,C=(x+g)/4;return S>y&&S>D?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=R/n,r=I/n):y>D?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=C/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=I/r,s=C/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-x)*(g-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fl=class extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new pa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Fl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ma=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var kl=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],x=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=x,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==x){let g=1-o,p=l*f+c*d+h*x+u*_,v=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let D=Math.sqrt(S),R=Math.atan2(D,p*v);g=Math.sin(g*R)/D,o=Math.sin(o*R)/D}let y=o*v;if(l=l*g+f*y,c=c*g+d*y,h=h*g+x*y,u=u*g+_*y,g===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],x=r[a+3];return t[e]=o*x+h*u+l*d-c*f,t[e+1]=l*x+h*f+c*u-o*d,t[e+2]=c*x+h*d+o*f-l*u,t[e+3]=h*x-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _o.copy(this).projectOnVector(t),this.sub(_o)}reflect(t){return this.sub(_o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_o=new L,Fh=new Mi,Qn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),Dr.subVectors(this.max,nr),rs.subVectors(t.a,nr),as.subVectors(t.b,nr),os.subVectors(t.c,nr),ci.subVectors(as,rs),hi.subVectors(os,as),ki.subVectors(rs,os);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-ki.z,ki.y,ci.z,0,-ci.x,hi.z,0,-hi.x,ki.z,0,-ki.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-ki.y,ki.x,0];return!vo(e,rs,as,os,Dr)||(e=[1,0,0,0,1,0,0,0,1],!vo(e,rs,as,os,Dr))?!1:(Ur.crossVectors(ci,hi),e=[Ur.x,Ur.y,Ur.z],vo(e,rs,as,os,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Gn=[new L,new L,new L,new L,new L,new L,new L,new L],vn=new L,Lr=new Qn,rs=new L,as=new L,os=new L,ci=new L,hi=new L,ki=new L,nr=new L,Dr=new L,Ur=new L,Bi=new L;function vo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Bi.fromArray(i,r);let o=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ff=new Qn,ir=new L,yo=new L,bi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ff.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);let e=ir.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(yo)),this.expandByPoint(ir.copy(t.center).sub(yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wn=new L,Mo=new L,Nr=new L,ui=new L,bo=new L,Fr=new L,So=new L,ga=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Mo.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(Mo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Nr),o=ui.dot(this.direction),l=-ui.dot(Nr),c=ui.lengthSq(),h=Math.abs(1-a*a),u,f,d,x;if(h>0)if(u=a*l-o,f=a*o-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mo).addScaledVector(Nr,f),d}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){bo.subVectors(e,t),Fr.subVectors(n,t),So.crossVectors(bo,Fr);let a=this.direction.dot(So),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,t);let l=o*this.direction.dot(Fr.crossVectors(ui,Fr));if(l<0)return null;let c=o*this.direction.dot(bo.cross(ui));if(c<0||l+c>a)return null;let h=-o*ui.dot(So);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,x,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,x,_,g)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,x,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),a=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,x=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+x*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=x+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,x=c*h,_=c*u;e[0]=f+_*o,e[4]=x*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-x,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,x=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=x+d*o,e[1]=d+x*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,x=o*h,_=o*u;e[0]=l*h,e[4]=x*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,x=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=x*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+x,e[10]=f-_*u}else if(t.order==="XZY"){let f=a*l,d=a*c,x=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-x,e[2]=x*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kf,t,Bf)}lookAt(t,e,n){let s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),di.crossVectors(n,rn),di.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),di.crossVectors(n,rn)),di.normalize(),kr.crossVectors(rn,di),s[0]=di.x,s[4]=kr.x,s[8]=rn.x,s[1]=di.y,s[5]=kr.y,s[9]=rn.y,s[2]=di.z,s[6]=kr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],_=n[6],g=n[10],p=n[14],v=n[3],S=n[7],y=n[11],D=n[15],R=s[0],I=s[4],C=s[8],E=s[12],M=s[1],U=s[5],z=s[9],H=s[13],$=s[2],Y=s[6],w=s[10],Z=s[14],A=s[3],q=s[7],V=s[11],j=s[15];return r[0]=a*R+o*M+l*$+c*A,r[4]=a*I+o*U+l*Y+c*q,r[8]=a*C+o*z+l*w+c*V,r[12]=a*E+o*H+l*Z+c*j,r[1]=h*R+u*M+f*$+d*A,r[5]=h*I+u*U+f*Y+d*q,r[9]=h*C+u*z+f*w+d*V,r[13]=h*E+u*H+f*Z+d*j,r[2]=x*R+_*M+g*$+p*A,r[6]=x*I+_*U+g*Y+p*q,r[10]=x*C+_*z+g*w+p*V,r[14]=x*E+_*H+g*Z+p*j,r[3]=v*R+S*M+y*$+D*A,r[7]=v*I+S*U+y*Y+D*q,r[11]=v*C+S*z+y*w+D*V,r[15]=v*E+S*H+y*Z+D*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],x=t[3],_=t[7],g=t[11],p=t[15];return x*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+_*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+g*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],x=t[12],_=t[13],g=t[14],p=t[15],v=u*g*c-_*f*c+_*l*d-o*g*d-u*l*p+o*f*p,S=x*f*c-h*g*c-x*l*d+a*g*d+h*l*p-a*f*p,y=h*_*c-x*u*c+x*o*d-a*_*d-h*o*p+a*u*p,D=x*u*l-h*_*l-x*o*f+a*_*f+h*o*g-a*u*g,R=e*v+n*S+s*y+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return t[0]=v*I,t[1]=(_*f*r-u*g*r-_*s*d+n*g*d+u*s*p-n*f*p)*I,t[2]=(o*g*r-_*l*r+_*s*c-n*g*c-o*s*p+n*l*p)*I,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*I,t[4]=S*I,t[5]=(h*g*r-x*f*r+x*s*d-e*g*d-h*s*p+e*f*p)*I,t[6]=(x*l*r-a*g*r-x*s*c+e*g*c+a*s*p-e*l*p)*I,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*I,t[8]=y*I,t[9]=(x*u*r-h*_*r-x*n*d+e*_*d+h*n*p-e*u*p)*I,t[10]=(a*_*r-x*o*r+x*n*c-e*_*c-a*n*p+e*o*p)*I,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*I,t[12]=D*I,t[13]=(h*_*s-x*u*s+x*n*f-e*_*f-h*n*g+e*u*g)*I,t[14]=(x*o*s-a*_*s-x*n*l+e*_*l+a*n*g-e*o*g)*I,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,x=r*u,_=a*h,g=a*u,p=o*u,v=l*c,S=l*h,y=l*u,D=n.x,R=n.y,I=n.z;return s[0]=(1-(_+p))*D,s[1]=(d+y)*D,s[2]=(x-S)*D,s[3]=0,s[4]=(d-y)*R,s[5]=(1-(f+p))*R,s[6]=(g+v)*R,s[7]=0,s[8]=(x+S)*I,s[9]=(g-v)*I,s[10]=(1-(f+_))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ls.set(s[0],s[1],s[2]).length(),a=ls.set(s[4],s[5],s[6]).length(),o=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);let c=1/r,h=1/a,u=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Jn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,x;if(o===Jn)d=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===da)d=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Jn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,d=(n+s)*h,x,_;if(o===Jn)x=(a+r)*u,_=-2*u;else if(o===da)x=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ls=new L,yn=new de,kf=new L(0,0,0),Bf=new L(1,1,1),di=new L,kr=new L,rn=new L,kh=new de,Bh=new Mi,Un=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var xa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Of=0,Oh=new L,cs=new Mi,Xn=new de,Br=new L,sr=new L,zf=new L,Hf=new Mi,zh=new L(1,0,0),Hh=new L(0,1,0),Vh=new L(0,0,1),Gh={type:"added"},Vf={type:"removed"},hs={type:"childadded",child:null},Eo={type:"childremoved",child:null},Ce=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Un,n=new Mi,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new zt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(zh,t)}rotateY(t){return this.rotateOnAxis(Hh,t)}rotateZ(t){return this.rotateOnAxis(Vh,t)}translateOnAxis(t,e){return Oh.copy(t).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zh,t)}translateY(t){return this.translateOnAxis(Hh,t)}translateZ(t){return this.translateOnAxis(Vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(sr,Br,this.up):Xn.lookAt(Br,sr,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Xn),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gh),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vf),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gh),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Hf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ce.DEFAULT_UP=new L(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=new L,qn=new L,To=new L,$n=new L,us=new L,ds=new L,Wh=new L,wo=new L,Ao=new L,Ro=new L,Co=new ue,Po=new ue,Io=new ue,gi=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),qn.subVectors(n,e),To.subVectors(t,e);let a=Mn.dot(Mn),o=Mn.dot(qn),l=Mn.dot(To),c=qn.dot(qn),h=qn.dot(To),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,x=(a*h-o*l)*f;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Co.setScalar(0),Po.setScalar(0),Io.setScalar(0),Co.fromBufferAttribute(t,e),Po.fromBufferAttribute(t,n),Io.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Co,r.x),a.addScaledVector(Po,r.y),a.addScaledVector(Io,r.z),a}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),qn.subVectors(t,e),Mn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Mn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;us.subVectors(s,n),ds.subVectors(r,n),wo.subVectors(t,n);let l=us.dot(wo),c=ds.dot(wo);if(l<=0&&c<=0)return e.copy(n);Ao.subVectors(t,s);let h=us.dot(Ao),u=ds.dot(Ao);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(us,a);Ro.subVectors(t,r);let d=us.dot(Ro),x=ds.dot(Ro);if(x>=0&&d<=x)return e.copy(r);let _=d*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(ds,o);let g=h*x-d*u;if(g<=0&&u-h>=0&&d-x>=0)return Wh.subVectors(r,s),o=(u-h)/(u-h+(d-x)),e.copy(s).addScaledVector(Wh,o);let p=1/(g+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(us,a).addScaledVector(ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function Lo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var At=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Cf(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Lo(a,r,t+1/3),this.g=Lo(a,r,t),this.b=Lo(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=$u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Yt.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Oe(Ge.r*255,0,255))*65536+Math.round(Oe(Ge.g*255,0,255))*256+Math.round(Oe(Ge.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Fe){Yt.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Or);let n=mo(fi.h,Or.h,e),s=mo(fi.s,Or.s,e),r=mo(fi.l,Or.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new At;At.NAMES=$u;var Gf=0,ti=class extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=_i(),this.name="",this.blending=Ss,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=Zo,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yo&&(n.blendSrc=this.blendSrc),this.blendDst!==Zo&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ae=class extends ti{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new L,zr=new rt,Te=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dl,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dl&&(t.usage=this.usage),t}};var _a=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var va=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},Wf=0,pn=new de,Do=new Ce,fs=new L,an=new Qn,rr=new Qn,Ne=new L,_e=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qu(t)?va:_a)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Do.lookAt(t),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(an.min,rr.min),an.expandByPoint(Ne),Ne.addVectors(an.max,rr.max),an.expandByPoint(Ne)):(an.expandByPoint(rr.min),an.expandByPoint(rr.max))}an.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ne.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(t,c),Ne.add(fs)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new L,l[C]=new L;let c=new L,h=new L,u=new L,f=new rt,d=new rt,x=new rt,_=new L,g=new L;function p(C,E,M){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,E),x.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),x.sub(f);let U=1/(d.x*x.y-x.x*d.y);isFinite(U)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(U),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(U),o[C].add(_),o[E].add(_),o[M].add(_),l[C].add(g),l[E].add(g),l[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,E=v.length;C<E;++C){let M=v[C],U=M.start,z=M.count;for(let H=U,$=U+z;H<$;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let S=new L,y=new L,D=new L,R=new L;function I(C){D.fromBufferAttribute(s,C),R.copy(D);let E=o[C];S.copy(E),S.sub(D.multiplyScalar(D.dot(E))).normalize(),y.crossVectors(R,E);let U=y.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,U)}for(let C=0,E=v.length;C<E;++C){let M=v[C],U=M.start,z=M.count;for(let H=U,$=U+z;H<$;H+=3)I(t.getX(H+0)),I(t.getX(H+1)),I(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){let x=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,x=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[x++]=c[d++]}return new Te(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xh=new de,Oi=new ga,Hr=new bi,qh=new L,Vr=new L,Gr=new L,Wr=new L,Uo=new L,Xr=new L,$h=new L,qr=new L,lt=class extends Ce{constructor(t=new _e,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Uo.fromBufferAttribute(u,t),a?Xr.addScaledVector(Uo,h):Xr.addScaledVector(Uo.sub(e),h))}e.add(Xr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(Hr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Hr,qh)===null||Oi.origin.distanceToSquared(qh)>(t.far-t.near)**2))&&(Xh.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(Xh),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){let g=f[x],p=a[g.materialIndex],v=Math.max(g.start,d.start),S=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,D=S;y<D;y+=3){let R=o.getX(y),I=o.getX(y+1),C=o.getX(y+2);s=$r(this,p,t,n,c,h,u,R,I,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=x,p=_;g<p;g+=3){let v=o.getX(g),S=o.getX(g+1),y=o.getX(g+2);s=$r(this,a,t,n,c,h,u,v,S,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){let g=f[x],p=a[g.materialIndex],v=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,D=S;y<D;y+=3){let R=y,I=y+1,C=y+2;s=$r(this,p,t,n,c,h,u,R,I,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=x,p=_;g<p;g+=3){let v=g,S=g+1,y=g+2;s=$r(this,a,t,n,c,h,u,v,S,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Xf(i,t,e,n,s,r,a,o){let l;if(t.side===ke?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===vi,o),l===null)return null;qr.copy(o),qr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(qr);return c<e.near||c>e.far?null:{distance:c,point:qr.clone(),object:i}}function $r(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Vr),i.getVertexPosition(l,Gr),i.getVertexPosition(c,Wr);let h=Xf(i,t,e,n,Vr,Gr,Wr,$h);if(h){let u=new L;gi.getBarycoord($h,Vr,Gr,Wr,u),s&&(h.uv=gi.getInterpolatedAttribute(s,o,l,c,u,new rt)),r&&(h.uv1=gi.getInterpolatedAttribute(r,o,l,c,u,new rt)),a&&(h.normal=gi.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new L,materialIndex:0};gi.getNormal(Vr,Gr,Wr,f.normal),h.face=f,h.barycoord=u}return h}var ee=class i extends _e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function x(_,g,p,v,S,y,D,R,I,C,E){let M=y/I,U=D/C,z=y/2,H=D/2,$=R/2,Y=I+1,w=C+1,Z=0,A=0,q=new L;for(let V=0;V<w;V++){let j=V*U-H;for(let ot=0;ot<Y;ot++){let Et=ot*M-z;q[_]=Et*v,q[g]=j*S,q[p]=$,c.push(q.x,q.y,q.z),q[_]=0,q[g]=0,q[p]=R>0?1:-1,h.push(q.x,q.y,q.z),u.push(ot/I),u.push(1-V/C),Z+=1}}for(let V=0;V<C;V++)for(let j=0;j<I;j++){let ot=f+j+Y*V,Et=f+j+Y*(V+1),K=f+(j+1)+Y*(V+1),nt=f+(j+1)+Y*V;l.push(ot,Et,nt),l.push(Et,K,nt),A+=6}o.addGroup(d,A,E),d+=A,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){let t={};for(let e=0;e<i.length;e++){let n=Ls(i[e]);for(let s in n)t[s]=n[s]}return t}function qf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Fn={clone:Ls,merge:$e},$f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fe=class extends ti{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$f,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=qf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ya=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pi=new L,Yh=new rt,Zh=new rt,We=class extends ya{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ul*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,Yh,Zh),e.subVectors(Zh,Yh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(po*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ps=-90,ms=1,Bl=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(ps,ms,t,e);s.layers=this.layers,this.add(s);let r=new We(ps,ms,t,e);r.layers=this.layers,this.add(r);let a=new We(ps,ms,t,e);a.layers=this.layers,this.add(a);let o=new We(ps,ms,t,e);o.layers=this.layers,this.add(o);let l=new We(ps,ms,t,e);l.layers=this.layers,this.add(l);let c=new We(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===da)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ma=class extends je{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Rs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ol=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ma(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ee(5,5,5),r=new fe({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Dn});r.uniforms.tEquirect.value=e;let a=new lt(s,r),o=e.minFilter;return e.minFilter===$i&&(e.minFilter=In),new Bl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},No=new L,Zf=new L,Jf=new zt,Zn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=No.subVectors(n,e).cross(Zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(No),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Jf.getNormalMatrix(t),s=this.coplanarPoint(No).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new bi,Yr=new L,vr=class{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,a=new Zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],x=s[9],_=s[10],g=s[11],p=s[12],v=s[13],S=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,g-d,y-p).normalize(),n[1].setComponents(l+r,f+c,g+d,y+p).normalize(),n[2].setComponents(l+a,f+h,g+x,y+v).normalize(),n[3].setComponents(l-a,f-h,g-x,y-v).normalize(),n[4].setComponents(l-o,f-u,g-_,y-S).normalize(),e===Jn)n[5].setComponents(l+o,f+u,g+_,y+S).normalize();else if(e===da)n[5].setComponents(o,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Yr.x=s.normal.x>0?t.max.x:t.min.x,Yr.y=s.normal.y>0?t.max.y:t.min.y,Yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Kf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){let x=u[f],_=u[d];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){let _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qe=class i extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],x=[],_=[],g=[];for(let p=0;p<h;p++){let v=p*f-a;for(let S=0;S<c;S++){let y=S*u-r;x.push(y,-v,0),_.push(0,0,1),g.push(S/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let S=v+c*p,y=v+c*(p+1),D=v+1+c*(p+1),R=v+1+c*p;d.push(S,y,R),d.push(y,D,R)}this.setIndex(d),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qf=`#ifdef USE_ALPHAHASH
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
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
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
#endif`,rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
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
#endif`,op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,up=`#ifdef USE_IRIDESCENCE
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
#endif`,dp=`#ifdef USE_BUMPMAP
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mp=`#define PI 3.141592653589793
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
} // validated`,bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gp=`uniform bool receiveShadow;
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
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zp=`PhysicalMaterial material;
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
#endif`,Jp=`struct PhysicalMaterial {
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
}`,Kp=`
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,om=`#if defined( USE_POINTS_UV )
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
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
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
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fm=`float getShadowMask() {
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
}`,km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,Om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jm=`uniform sampler2D t2D;
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
}`,Qm=`varying vec3 vWorldDirection;
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`#include <common>
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
}`,sg=`#if DEPTH_PACKING == 3200
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
}`,rg=`#define DISTANCE
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
}`,ag=`#define DISTANCE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`uniform float scale;
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
}`,hg=`uniform vec3 diffuse;
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
}`,ug=`#include <common>
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#define LAMBERT
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
}`,pg=`#define LAMBERT
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
}`,mg=`#define MATCAP
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
}`,gg=`#define MATCAP
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
}`,xg=`#define NORMAL
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
}`,vg=`#define PHONG
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
}`,yg=`#define PHONG
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
}`,Mg=`#define STANDARD
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
}`,bg=`#define STANDARD
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
}`,Eg=`#define TOON
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
}`,wg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Rg=`uniform vec3 color;
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
}`,Cg=`uniform float rotation;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:jf,alphahash_pars_fragment:Qf,alphamap_fragment:tp,alphamap_pars_fragment:ep,alphatest_fragment:np,alphatest_pars_fragment:ip,aomap_fragment:sp,aomap_pars_fragment:rp,batching_pars_vertex:ap,batching_vertex:op,begin_vertex:lp,beginnormal_vertex:cp,bsdfs:hp,iridescence_fragment:up,bumpmap_pars_fragment:dp,clipping_planes_fragment:fp,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:mp,clipping_planes_vertex:gp,color_fragment:xp,color_pars_fragment:_p,color_pars_vertex:vp,color_vertex:yp,common:Mp,cube_uv_reflection_fragment:bp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:Ep,displacementmap_vertex:Tp,emissivemap_fragment:wp,emissivemap_pars_fragment:Ap,colorspace_fragment:Rp,colorspace_pars_fragment:Cp,envmap_fragment:Pp,envmap_common_pars_fragment:Ip,envmap_pars_fragment:Lp,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Wp,envmap_vertex:Up,fog_vertex:Np,fog_pars_vertex:Fp,fog_fragment:kp,fog_pars_fragment:Bp,gradientmap_pars_fragment:Op,lightmap_pars_fragment:zp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:Vp,lights_pars_begin:Gp,lights_toon_fragment:Xp,lights_toon_pars_fragment:qp,lights_phong_fragment:$p,lights_phong_pars_fragment:Yp,lights_physical_fragment:Zp,lights_physical_pars_fragment:Jp,lights_fragment_begin:Kp,lights_fragment_maps:jp,lights_fragment_end:Qp,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:sm,map_pars_fragment:rm,map_particle_fragment:am,map_particle_pars_fragment:om,metalnessmap_fragment:lm,metalnessmap_pars_fragment:cm,morphinstance_vertex:hm,morphcolor_vertex:um,morphnormal_vertex:dm,morphtarget_pars_vertex:fm,morphtarget_vertex:pm,normal_fragment_begin:mm,normal_fragment_maps:gm,normal_pars_fragment:xm,normal_pars_vertex:_m,normal_vertex:vm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:bm,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:Em,opaque_fragment:Tm,packing:wm,premultiplied_alpha_fragment:Am,project_vertex:Rm,dithering_fragment:Cm,dithering_pars_fragment:Pm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Um,shadowmap_vertex:Nm,shadowmask_pars_fragment:Fm,skinbase_vertex:km,skinning_pars_vertex:Bm,skinning_vertex:Om,skinnormal_vertex:zm,specularmap_fragment:Hm,specularmap_pars_fragment:Vm,tonemapping_fragment:Gm,tonemapping_pars_fragment:Wm,transmission_fragment:Xm,transmission_pars_fragment:qm,uv_pars_fragment:$m,uv_pars_vertex:Ym,uv_vertex:Zm,worldpos_vertex:Jm,background_vert:Km,background_frag:jm,backgroundCube_vert:Qm,backgroundCube_frag:tg,cube_vert:eg,cube_frag:ng,depth_vert:ig,depth_frag:sg,distanceRGBA_vert:rg,distanceRGBA_frag:ag,equirect_vert:og,equirect_frag:lg,linedashed_vert:cg,linedashed_frag:hg,meshbasic_vert:ug,meshbasic_frag:dg,meshlambert_vert:fg,meshlambert_frag:pg,meshmatcap_vert:mg,meshmatcap_frag:gg,meshnormal_vert:xg,meshnormal_frag:_g,meshphong_vert:vg,meshphong_frag:yg,meshphysical_vert:Mg,meshphysical_frag:bg,meshtoon_vert:Sg,meshtoon_frag:Eg,points_vert:Tg,points_frag:wg,shadow_vert:Ag,shadow_frag:Rg,sprite_vert:Cg,sprite_frag:Pg},ht={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Cn={basic:{uniforms:$e([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:$e([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new At(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:$e([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:$e([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:$e([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new At(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:$e([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:$e([ht.points,ht.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:$e([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:$e([ht.common,ht.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:$e([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:$e([ht.sprite,ht.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:$e([ht.common,ht.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:$e([ht.lights,ht.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Cn.physical={uniforms:$e([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Zr={r:0,b:0,g:0},Hi=new Un,Ig=new de;function Lg(i,t,e,n,s,r,a){let o=new At(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function x(v){let S=v.isScene===!0?v.background:null;return S&&S.isTexture&&(S=(v.backgroundBlurriness>0?e:t).get(S)),S}function _(v){let S=!1,y=x(v);y===null?p(o,l):y&&y.isColor&&(p(y,1),S=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,S){let y=x(S);y&&(y.isCubeTexture||y.mapping===ka)?(h===void 0&&(h=new lt(new ee(1,1,1),new fe({name:"BackgroundCubeMaterial",uniforms:Ls(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hi.copy(S.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(Hi)),h.material.toneMapped=Yt.getTransfer(y.colorSpace)!==oe,(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new lt(new Qe(2,2),new fe({name:"BackgroundMaterial",uniforms:Ls(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,S){v.getRGB(Zr,Yu(i)),n.buffers.color.setClear(Zr.r,Zr.g,Zr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:_,addToRenderList:g}}function Dg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(M,U,z,H,$){let Y=!1,w=u(H,z,U);r!==w&&(r=w,c(r.object)),Y=d(M,H,z,$),Y&&x(M,H,z,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(M,U,z,H),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,U,z){let H=z.wireframe===!0,$=n[M.id];$===void 0&&($={},n[M.id]=$);let Y=$[U.id];Y===void 0&&(Y={},$[U.id]=Y);let w=Y[H];return w===void 0&&(w=f(l()),Y[H]=w),w}function f(M){let U=[],z=[],H=[];for(let $=0;$<e;$++)U[$]=0,z[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:H,object:M,attributes:{},index:null}}function d(M,U,z,H){let $=r.attributes,Y=U.attributes,w=0,Z=z.getAttributes();for(let A in Z)if(Z[A].location>=0){let V=$[A],j=Y[A];if(j===void 0&&(A==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),A==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),V===void 0||V.attribute!==j||j&&V.data!==j.data)return!0;w++}return r.attributesNum!==w||r.index!==H}function x(M,U,z,H){let $={},Y=U.attributes,w=0,Z=z.getAttributes();for(let A in Z)if(Z[A].location>=0){let V=Y[A];V===void 0&&(A==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),A==="instanceColor"&&M.instanceColor&&(V=M.instanceColor));let j={};j.attribute=V,V&&V.data&&(j.data=V.data),$[A]=j,w++}r.attributes=$,r.attributesNum=w,r.index=H}function _(){let M=r.newAttributes;for(let U=0,z=M.length;U<z;U++)M[U]=0}function g(M){p(M,0)}function p(M,U){let z=r.newAttributes,H=r.enabledAttributes,$=r.attributeDivisors;z[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),$[M]!==U&&(i.vertexAttribDivisor(M,U),$[M]=U)}function v(){let M=r.newAttributes,U=r.enabledAttributes;for(let z=0,H=U.length;z<H;z++)U[z]!==M[z]&&(i.disableVertexAttribArray(z),U[z]=0)}function S(M,U,z,H,$,Y,w){w===!0?i.vertexAttribIPointer(M,U,z,$,Y):i.vertexAttribPointer(M,U,z,H,$,Y)}function y(M,U,z,H){_();let $=H.attributes,Y=z.getAttributes(),w=U.defaultAttributeValues;for(let Z in Y){let A=Y[Z];if(A.location>=0){let q=$[Z];if(q===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){let V=q.normalized,j=q.itemSize,ot=t.get(q);if(ot===void 0)continue;let Et=ot.buffer,K=ot.type,nt=ot.bytesPerElement,xt=K===i.INT||K===i.UNSIGNED_INT||q.gpuType===Rc;if(q.isInterleavedBufferAttribute){let ut=q.data,It=ut.stride,Ft=q.offset;if(ut.isInstancedInterleavedBuffer){for(let Xt=0;Xt<A.locationSize;Xt++)p(A.location+Xt,ut.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Xt=0;Xt<A.locationSize;Xt++)g(A.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Xt=0;Xt<A.locationSize;Xt++)S(A.location+Xt,j/A.locationSize,K,V,It*nt,(Ft+j/A.locationSize*Xt)*nt,xt)}else{if(q.isInstancedBufferAttribute){for(let ut=0;ut<A.locationSize;ut++)p(A.location+ut,q.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ut=0;ut<A.locationSize;ut++)g(A.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let ut=0;ut<A.locationSize;ut++)S(A.location+ut,j/A.locationSize,K,V,j*nt,j/A.locationSize*ut*nt,xt)}}else if(w!==void 0){let V=w[Z];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(A.location,V);break;case 3:i.vertexAttrib3fv(A.location,V);break;case 4:i.vertexAttrib4fv(A.location,V);break;default:i.vertexAttrib1fv(A.location,V)}}}}v()}function D(){C();for(let M in n){let U=n[M];for(let z in U){let H=U[z];for(let $ in H)h(H[$].object),delete H[$];delete U[z]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;let U=n[M.id];for(let z in U){let H=U[z];for(let $ in H)h(H[$].object),delete H[$];delete U[z]}delete n[M.id]}function I(M){for(let U in n){let z=n[U];if(z[M.id]===void 0)continue;let H=z[M.id];for(let $ in H)h(H[$].object),delete H[$];delete z[M.id]}}function C(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Ug(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<c.length;x++)a(c[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*f[_];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ng(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==bn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let C=I===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==jn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ln&&!C)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=x>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:D,maxSamples:R}}function Fg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Zn,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,S=v*4,y=p.clippingState||null;l.value=y,y=h(x,f,S,d);for(let D=0;D!==S;++D)y[D]=e[D];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,x){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,x!==!0||g===null){let p=d+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,y=d;S!==_;++S,y+=4)a.copy(u[S]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function kg(i){let t=new WeakMap;function e(a,o){return o===il?a.mapping=Rs:o===sl&&(a.mapping=Cs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===il||o===sl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ol(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ds=class extends ya{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bs=4,Jh=[.125,.215,.35,.446,.526,.582],Xi=20,Fo=new Ds,Kh=new At,ko=null,Bo=0,Oo=0,zo=!1,Gi=(1+Math.sqrt(5))/2,gs=1/Gi,jh=[new L(-Gi,gs,0),new L(Gi,gs,0),new L(-gs,0,Gi),new L(gs,0,Gi),new L(0,Gi,-gs),new L(0,Gi,gs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],ba=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ko=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ko,Bo,Oo),this._renderer.xr.enabled=zo,t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ko=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Tn,format:bn,colorSpace:Ws,depthBuffer:!1},s=Qh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bg(r)),this._blurMaterial=Og(r,t,e)}return s}_compileMaterial(t){let e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,n,s){let o=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Kh),h.toneMapping=xi,h.autoClear=!1;let d=new Ae({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),x=new lt(new ee,d),_=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(Kh),_=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let S=this._cubeSize;Jr(s,v*S,p>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Rs||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Fo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jh[(s-r-1)%jh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new lt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Xi-1),_=r/x,g=isFinite(r)?1+Math.floor(h*_):Xi;g>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xi}`);let p=[],v=0;for(let I=0;I<Xi;++I){let C=I/_,E=Math.exp(-C*C/2);p.push(E),I===0?v+=E:I<g&&(v+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/v;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=x,f.mipInt.value=S-n;let y=this._sizeLods[s],D=3*y*(s>S-bs?s-S+bs:0),R=4*(this._cubeSize-y);Jr(e,D,R,3*y,2*y),l.setRenderTarget(e),l.render(u,Fo)}};function Bg(i){let t=[],e=[],n=[],s=i,r=i-bs+1+Jh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-bs?l=Jh[a-i+bs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,_=3,g=2,p=1,v=new Float32Array(_*x*d),S=new Float32Array(g*x*d),y=new Float32Array(p*x*d);for(let R=0;R<d;R++){let I=R%3*2/3-1,C=R>2?0:-1,E=[I,C,0,I+2/3,C,0,I+2/3,C+1,0,I,C,0,I+2/3,C+1,0,I,C+1,0];v.set(E,_*x*R),S.set(f,g*x*R);let M=[R,R,R,R,R,R];y.set(M,p*x*R)}let D=new _e;D.setAttribute("position",new Te(v,_)),D.setAttribute("uv",new Te(S,g)),D.setAttribute("faceIndex",new Te(y,p)),t.push(D),s>bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qh(i,t,e){let n=new Ye(i,t,e);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Og(i,t,e){let n=new Float32Array(Xi),s=new L(0,1,0);return new fe({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function tu(){return new fe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function eu(){return new fe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}function zg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===il||l===sl,h=l===Rs||l===Cs;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ba(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new ba(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Hg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&dr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vg(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);for(let x in f.morphAttributes){let _=f.morphAttributes[x];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let x in f)t.update(f[x],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let x in d){let _=d[x];for(let g=0,p=_.length;g<p;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,x=u.attributes.position,_=0;if(d!==null){let v=d.array;_=d.version;for(let S=0,y=v.length;S<y;S+=3){let D=v[S+0],R=v[S+1],I=v[S+2];f.push(D,R,R,I,I,D)}}else if(x!==void 0){let v=x.array;_=x.version;for(let S=0,y=v.length/3-1;S<y;S+=3){let D=S+0,R=S+1,I=S+2;f.push(D,R,R,I,I,D)}}else return;let g=new(qu(f)?va:_a)(f,1);g.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Gg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,f*a,x),e.update(d,n,x))}function h(f,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let g=0;for(let p=0;p<x;p++)g+=d[p];e.update(g,n,1)}function u(f,d,x,_){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,x);let p=0;for(let v=0;v<x;v++)p+=d[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xg(i,t,e){let n=new WeakMap,s=new ue;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let E=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;d===!0&&(S=1),x===!0&&(S=2),_===!0&&(S=3);let y=o.attributes.position.count*S,D=1;y>t.maxTextureSize&&(D=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let R=new Float32Array(y*D*4*u),I=new ma(R,y,D,u);I.type=Ln,I.needsUpdate=!0;let C=S*4;for(let M=0;M<u;M++){let U=g[M],z=p[M],H=v[M],$=y*D*4*M;for(let Y=0;Y<U.count;Y++){let w=Y*C;d===!0&&(s.fromBufferAttribute(U,Y),R[$+w+0]=s.x,R[$+w+1]=s.y,R[$+w+2]=s.z,R[$+w+3]=0),x===!0&&(s.fromBufferAttribute(z,Y),R[$+w+4]=s.x,R[$+w+5]=s.y,R[$+w+6]=s.z,R[$+w+7]=0),_===!0&&(s.fromBufferAttribute(H,Y),R[$+w+8]=s.x,R[$+w+9]=s.y,R[$+w+10]=s.z,R[$+w+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new rt(y,D)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function qg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Sa=class extends je{constructor(t,e,n,s,r,a,o,l,c,h=Es){if(h!==Es&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=Yi),n===void 0&&h===Is&&(n=Ps),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ju=new je,nu=new Sa(1,1),Ku=new ma,ju=new kl,Qu=new Ma,iu=[],su=[],ru=new Float32Array(16),au=new Float32Array(9),ou=new Float32Array(4);function Xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=iu[s];if(r===void 0&&(r=new Float32Array(s),iu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function za(i,t){let e=su[t];e===void 0&&(e=new Int32Array(t),su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;ou.set(n),i.uniformMatrix2fv(this.addr,!1,ou),De(e,n)}}function jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),De(e,n)}}function Qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;ru.set(n),i.uniformMatrix4fv(this.addr,!1,ru),De(e,n)}}function t0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function s0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function r0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function l0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nu.compareFunction=Xu,r=nu):r=Ju,e.setTexture2D(t||r,s)}function c0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ju,s)}function h0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qu,s)}function u0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ku,s)}function d0(i){switch(i){case 5126:return $g;case 35664:return Yg;case 35665:return Zg;case 35666:return Jg;case 35674:return Kg;case 35675:return jg;case 35676:return Qg;case 5124:case 35670:return t0;case 35667:case 35671:return e0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}function f0(i,t){i.uniform1fv(this.addr,t)}function p0(i,t){let e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function m0(i,t){let e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function g0(i,t){let e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function x0(i,t){let e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _0(i,t){let e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function v0(i,t){let e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function y0(i,t){i.uniform1iv(this.addr,t)}function M0(i,t){i.uniform2iv(this.addr,t)}function b0(i,t){i.uniform3iv(this.addr,t)}function S0(i,t){i.uniform4iv(this.addr,t)}function E0(i,t){i.uniform1uiv(this.addr,t)}function T0(i,t){i.uniform2uiv(this.addr,t)}function w0(i,t){i.uniform3uiv(this.addr,t)}function A0(i,t){i.uniform4uiv(this.addr,t)}function R0(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ju,r[a])}function C0(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ju,r[a])}function P0(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qu,r[a])}function I0(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ku,r[a])}function L0(i){switch(i){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return x0;case 35675:return _0;case 35676:return v0;case 5124:case 35670:return y0;case 35667:case 35671:return M0;case 35668:case 35672:return b0;case 35669:case 35673:return S0;case 5125:return E0;case 36294:return T0;case 36295:return w0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return I0}}var zl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=d0(e.type)}},Hl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L0(e.type)}},Vl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ho=/(\w+)(\])?(\[|\.)?/g;function lu(i,t){i.seq.push(t),i.map[t.id]=t}function D0(i,t,e){let n=i.name,s=n.length;for(Ho.lastIndex=0;;){let r=Ho.exec(n),a=Ho.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){lu(e,c===void 0?new zl(o,i,t):new Hl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Vl(o),lu(e,u)),e=u}}}var ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);D0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function cu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var U0=37297,N0=0;function F0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var hu=new zt;function k0(i){Yt._getMatrix(hu,Yt.workingColorSpace,i);let t=`mat3( ${hu.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Ba:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+F0(i.getShaderSource(t),a)}else return s}function B0(i,t){let e=k0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function O0(i,t){let e;switch(t){case Sc:e="Linear";break;case Ec:e="Reinhard";break;case Tc:e="Cineon";break;case br:e="ACESFilmic";break;case wc:e="AgX";break;case Ac:e="Neutral";break;case xf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Kr=new L;function z0(){Yt.getLuminanceCoefficients(Kr);let i=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function V0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function G0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function fr(i){return i!==""}function du(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(i){return i.replace(W0,q0)}var X0=new Map;function q0(i,t){let e=Vt[t];if(e===void 0){let n=X0.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gl(e)}var $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(i){return i.replace($0,Y0)}function Y0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Z0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function J0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rs:case Cs:t="ENVMAP_TYPE_CUBE";break;case ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function K0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function j0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Du:t="ENVMAP_BLENDING_MULTIPLY";break;case mf:t="ENVMAP_BLENDING_MIX";break;case gf:t="ENVMAP_BLENDING_ADD";break}return t}function Q0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function tx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Z0(e),c=J0(e),h=K0(e),u=j0(e),f=Q0(e),d=H0(e),x=V0(r),_=s.createProgram(),g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(fr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(g=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==xi?O0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,B0("linearToOutputTexel",e.outputColorSpace),z0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),a=Gl(a),a=du(a,e),a=fu(a,e),o=Gl(o),o=du(o,e),o=fu(o,e),a=pu(a),o=pu(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=v+g+a,y=v+p+o,D=cu(s,s.VERTEX_SHADER,S),R=cu(s,s.FRAGMENT_SHADER,y);s.attachShader(_,D),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(U){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(D).trim(),$=s.getShaderInfoLog(R).trim(),Y=!0,w=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,R);else{let Z=uu(s,D,"vertex"),A=uu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+z+`
`+Z+`
`+A)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||$==="")&&(w=!1);w&&(U.diagnostics={runnable:Y,programLog:z,vertexShader:{log:H,prefix:g},fragmentShader:{log:$,prefix:p}})}s.deleteShader(D),s.deleteShader(R),C=new ws(s,_),E=G0(s,_)}let C;this.getUniforms=function(){return C===void 0&&I(this),C};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,U0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=R,this}var ex=0,Wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xl(t),e.set(t,n)),n}},Xl=class{constructor(t){this.id=ex++,this.code=t,this.usedTimes=0}};function nx(i,t,e,n,s,r,a){let o=new xa,l=new Wl,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,M,U,z,H){let $=z.fog,Y=H.geometry,w=E.isMeshStandardMaterial?z.environment:null,Z=(E.isMeshStandardMaterial?e:t).get(E.envMap||w),A=Z&&Z.mapping===ka?Z.image.height:null,q=x[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let V=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,j=V!==void 0?V.length:0,ot=0;Y.morphAttributes.position!==void 0&&(ot=1),Y.morphAttributes.normal!==void 0&&(ot=2),Y.morphAttributes.color!==void 0&&(ot=3);let Et,K,nt,xt;if(q){let ce=Cn[q];Et=ce.vertexShader,K=ce.fragmentShader}else Et=E.vertexShader,K=E.fragmentShader,l.update(E),nt=l.getVertexShaderID(E),xt=l.getFragmentShaderID(E);let ut=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),Ft=H.isInstancedMesh===!0,Xt=H.isBatchedMesh===!0,we=!!E.map,Qt=!!E.matcap,Pe=!!Z,O=!!E.aoMap,dn=!!E.lightMap,Jt=!!E.bumpMap,Kt=!!E.normalMap,Ct=!!E.displacementMap,ye=!!E.emissiveMap,Rt=!!E.metalnessMap,P=!!E.roughnessMap,b=E.anisotropy>0,G=E.clearcoat>0,tt=E.dispersion>0,it=E.iridescence>0,Q=E.sheen>0,Tt=E.transmission>0,ft=b&&!!E.anisotropyMap,_t=G&&!!E.clearcoatMap,te=G&&!!E.clearcoatNormalMap,st=G&&!!E.clearcoatRoughnessMap,vt=it&&!!E.iridescenceMap,Pt=it&&!!E.iridescenceThicknessMap,Ut=Q&&!!E.sheenColorMap,yt=Q&&!!E.sheenRoughnessMap,jt=!!E.specularMap,Ht=!!E.specularColorMap,me=!!E.specularIntensityMap,N=Tt&&!!E.transmissionMap,dt=Tt&&!!E.thicknessMap,J=!!E.gradientMap,et=!!E.alphaMap,gt=E.alphaTest>0,pt=!!E.alphaHash,Bt=!!E.extensions,Re=xi;E.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Re=i.toneMapping);let He={shaderID:q,shaderType:E.type,shaderName:E.name,vertexShader:Et,fragmentShader:K,defines:E.defines,customVertexShaderID:nt,customFragmentShaderID:xt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Xt,batchingColor:Xt&&H._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&H.instanceColor!==null,instancingMorph:Ft&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ws,alphaToCoverage:!!E.alphaToCoverage,map:we,matcap:Qt,envMap:Pe,envMapMode:Pe&&Z.mapping,envMapCubeUVHeight:A,aoMap:O,lightMap:dn,bumpMap:Jt,normalMap:Kt,displacementMap:f&&Ct,emissiveMap:ye,normalMapObjectSpace:Kt&&E.normalMapType===Mf,normalMapTangentSpace:Kt&&E.normalMapType===Wu,metalnessMap:Rt,roughnessMap:P,anisotropy:b,anisotropyMap:ft,clearcoat:G,clearcoatMap:_t,clearcoatNormalMap:te,clearcoatRoughnessMap:st,dispersion:tt,iridescence:it,iridescenceMap:vt,iridescenceThicknessMap:Pt,sheen:Q,sheenColorMap:Ut,sheenRoughnessMap:yt,specularMap:jt,specularColorMap:Ht,specularIntensityMap:me,transmission:Tt,transmissionMap:N,thicknessMap:dt,gradientMap:J,opaque:E.transparent===!1&&E.blending===Ss&&E.alphaToCoverage===!1,alphaMap:et,alphaTest:gt,alphaHash:pt,combine:E.combine,mapUv:we&&_(E.map.channel),aoMapUv:O&&_(E.aoMap.channel),lightMapUv:dn&&_(E.lightMap.channel),bumpMapUv:Jt&&_(E.bumpMap.channel),normalMapUv:Kt&&_(E.normalMap.channel),displacementMapUv:Ct&&_(E.displacementMap.channel),emissiveMapUv:ye&&_(E.emissiveMap.channel),metalnessMapUv:Rt&&_(E.metalnessMap.channel),roughnessMapUv:P&&_(E.roughnessMap.channel),anisotropyMapUv:ft&&_(E.anisotropyMap.channel),clearcoatMapUv:_t&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(E.sheenRoughnessMap.channel),specularMapUv:jt&&_(E.specularMap.channel),specularColorMapUv:Ht&&_(E.specularColorMap.channel),specularIntensityMapUv:me&&_(E.specularIntensityMap.channel),transmissionMapUv:N&&_(E.transmissionMap.channel),thicknessMapUv:dt&&_(E.thicknessMap.channel),alphaMapUv:et&&_(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Kt||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(we||et),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:we&&E.map.isVideoTexture===!0&&Yt.getTransfer(E.map.colorSpace)===oe,decodeVideoTextureEmissive:ye&&E.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(E.emissiveMap.colorSpace)===oe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===xe,flipSided:E.side===ke,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Bt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&E.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)M.push(U),M.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(v(M,E),S(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){let M=x[E.type],U;if(M){let z=Cn[M];U=Fn.clone(z.uniforms)}else U=E.uniforms;return U}function D(E,M){let U;for(let z=0,H=h.length;z<H;z++){let $=h[z];if($.cacheKey===M){U=$,++U.usedTimes;break}}return U===void 0&&(U=new tx(i,M,E,r),h.push(U)),U}function R(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function I(E){l.remove(E)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:C}}function ix(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function sx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,x,_,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:_,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function o(u,f,d,x,_,g){let p=a(u,f,d,x,_,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,x,_,g){let p=a(u,f,d,x,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||sx),n.length>1&&n.sort(f||gu),s.length>1&&s.sort(f||gu)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function rx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new xu,i.set(n,[a])):s>=r.length?(a=new xu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ax(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new At};break;case"SpotLight":e={position:new L,direction:new L,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function ox(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var lx=0;function cx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hx(i){let t=new ax,e=ox(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new de,a=new de;function o(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,x=0,_=0,g=0,p=0,v=0,S=0,y=0,D=0,R=0,I=0;c.sort(cx);for(let E=0,M=c.length;E<M;E++){let U=c[E],z=U.color,H=U.intensity,$=U.distance,Y=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=z.r*H,u+=z.g*H,f+=z.b*H;else if(U.isLightProbe){for(let w=0;w<9;w++)n.probe[w].addScaledVector(U.sh.coefficients[w],H);I++}else if(U.isDirectionalLight){let w=t.get(U);if(w.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Z=U.shadow,A=e.get(U);A.shadowIntensity=Z.intensity,A.shadowBias=Z.bias,A.shadowNormalBias=Z.normalBias,A.shadowRadius=Z.radius,A.shadowMapSize=Z.mapSize,n.directionalShadow[d]=A,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=U.shadow.matrix,v++}n.directional[d]=w,d++}else if(U.isSpotLight){let w=t.get(U);w.position.setFromMatrixPosition(U.matrixWorld),w.color.copy(z).multiplyScalar(H),w.distance=$,w.coneCos=Math.cos(U.angle),w.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),w.decay=U.decay,n.spot[_]=w;let Z=U.shadow;if(U.map&&(n.spotLightMap[D]=U.map,D++,Z.updateMatrices(U),U.castShadow&&R++),n.spotLightMatrix[_]=Z.matrix,U.castShadow){let A=e.get(U);A.shadowIntensity=Z.intensity,A.shadowBias=Z.bias,A.shadowNormalBias=Z.normalBias,A.shadowRadius=Z.radius,A.shadowMapSize=Z.mapSize,n.spotShadow[_]=A,n.spotShadowMap[_]=Y,y++}_++}else if(U.isRectAreaLight){let w=t.get(U);w.color.copy(z).multiplyScalar(H),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),n.rectArea[g]=w,g++}else if(U.isPointLight){let w=t.get(U);if(w.color.copy(U.color).multiplyScalar(U.intensity),w.distance=U.distance,w.decay=U.decay,U.castShadow){let Z=U.shadow,A=e.get(U);A.shadowIntensity=Z.intensity,A.shadowBias=Z.bias,A.shadowNormalBias=Z.normalBias,A.shadowRadius=Z.radius,A.shadowMapSize=Z.mapSize,A.shadowCameraNear=Z.camera.near,A.shadowCameraFar=Z.camera.far,n.pointShadow[x]=A,n.pointShadowMap[x]=Y,n.pointShadowMatrix[x]=U.shadow.matrix,S++}n.point[x]=w,x++}else if(U.isHemisphereLight){let w=t.get(U);w.skyColor.copy(U.color).multiplyScalar(H),w.groundColor.copy(U.groundColor).multiplyScalar(H),n.hemi[p]=w,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==x||C.spotLength!==_||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==S||C.numSpotShadows!==y||C.numSpotMaps!==D||C.numLightProbes!==I)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+D-R,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,C.directionalLength=d,C.pointLength=x,C.spotLength=_,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=S,C.numSpotShadows=y,C.numSpotMaps=D,C.numLightProbes=I,n.version=lx++)}function l(c,h){let u=0,f=0,d=0,x=0,_=0,g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let S=c[p];if(S.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(S.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(S.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function _u(i){let t=new hx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ux(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new _u(i),t.set(s,[o])):r>=a.length?(o=new _u(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ql=class extends ti{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$l=class extends ti{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
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
}`;function px(i,t,e){let n=new vr,s=new rt,r=new rt,a=new ue,o=new ql({depthPacking:yf}),l=new $l,c={},h=e.maxTextureSize,u={[vi]:ke,[ke]:vi,[xe]:xe},f=new fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:dx,fragmentShader:fx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new _e;x.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new lt(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let p=this.type;this.render=function(R,I,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let E=i.getRenderTarget(),M=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Dn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let H=p!==Yn&&this.type===Yn,$=p===Yn&&this.type!==Yn;for(let Y=0,w=R.length;Y<w;Y++){let Z=R[Y],A=Z.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;s.copy(A.mapSize);let q=A.getFrameExtents();if(s.multiply(q),r.copy(A.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,A.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,A.mapSize.y=r.y)),A.map===null||H===!0||$===!0){let j=this.type!==Yn?{minFilter:on,magFilter:on}:{};A.map!==null&&A.map.dispose(),A.map=new Ye(s.x,s.y,j),A.map.texture.name=Z.name+".shadowMap",A.camera.updateProjectionMatrix()}i.setRenderTarget(A.map),i.clear();let V=A.getViewportCount();for(let j=0;j<V;j++){let ot=A.getViewport(j);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),z.viewport(a),A.updateMatrices(Z,j),n=A.getFrustum(),y(I,C,A.camera,Z,this.type)}A.isPointLightShadow!==!0&&this.type===Yn&&v(A,C),A.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,M,U)};function v(R,I){let C=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ye(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,C,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,C,d,_,null)}function S(R,I,C,E){let M=null,U=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)M=U;else if(M=C.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let z=M.uuid,H=I.uuid,$=c[z];$===void 0&&($={},c[z]=$);let Y=$[H];Y===void 0&&(Y=M.clone(),$[H]=Y,I.addEventListener("dispose",D)),M=Y}if(M.visible=I.visible,M.wireframe=I.wireframe,E===Yn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:u[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=i.properties.get(M);z.light=C}return M}function y(R,I,C,E,M){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Yn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);let H=t.update(R),$=R.material;if(Array.isArray($)){let Y=H.groups;for(let w=0,Z=Y.length;w<Z;w++){let A=Y[w],q=$[A.materialIndex];if(q&&q.visible){let V=S(R,q,E,M);R.onBeforeShadow(i,R,I,C,H,V,A),i.renderBufferDirect(C,null,H,V,R,A),R.onAfterShadow(i,R,I,C,H,V,A)}}}else if($.visible){let Y=S(R,$,E,M);R.onBeforeShadow(i,R,I,C,H,Y,null),i.renderBufferDirect(C,null,H,Y,R,null),R.onAfterShadow(i,R,I,C,H,Y,null)}}let z=R.children;for(let H=0,$=z.length;H<$;H++)y(z[H],I,C,E,M)}function D(R){R.target.removeEventListener("dispose",D);for(let C in c){let E=c[C],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var mx={[Jo]:Ko,[jo]:el,[Qo]:nl,[As]:tl,[Ko]:Jo,[el]:jo,[nl]:Qo,[tl]:As};function gx(i,t){function e(){let N=!1,dt=new ue,J=null,et=new ue(0,0,0,0);return{setMask:function(gt){J!==gt&&!N&&(i.colorMask(gt,gt,gt,gt),J=gt)},setLocked:function(gt){N=gt},setClear:function(gt,pt,Bt,Re,He){He===!0&&(gt*=Re,pt*=Re,Bt*=Re),dt.set(gt,pt,Bt,Re),et.equals(dt)===!1&&(i.clearColor(gt,pt,Bt,Re),et.copy(dt))},reset:function(){N=!1,J=null,et.set(-1,0,0,0)}}}function n(){let N=!1,dt=!1,J=null,et=null,gt=null;return{setReversed:function(pt){if(dt!==pt){let Bt=t.get("EXT_clip_control");dt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);let Re=gt;gt=null,this.setClear(Re)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?ut(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(pt){J!==pt&&!N&&(i.depthMask(pt),J=pt)},setFunc:function(pt){if(dt&&(pt=mx[pt]),et!==pt){switch(pt){case Jo:i.depthFunc(i.NEVER);break;case Ko:i.depthFunc(i.ALWAYS);break;case jo:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case Qo:i.depthFunc(i.EQUAL);break;case tl:i.depthFunc(i.GEQUAL);break;case el:i.depthFunc(i.GREATER);break;case nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=pt}},setLocked:function(pt){N=pt},setClear:function(pt){gt!==pt&&(dt&&(pt=1-pt),i.clearDepth(pt),gt=pt)},reset:function(){N=!1,J=null,et=null,gt=null,dt=!1}}}function s(){let N=!1,dt=null,J=null,et=null,gt=null,pt=null,Bt=null,Re=null,He=null;return{setTest:function(ce){N||(ce?ut(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(ce){dt!==ce&&!N&&(i.stencilMask(ce),dt=ce)},setFunc:function(ce,xn,Hn){(J!==ce||et!==xn||gt!==Hn)&&(i.stencilFunc(ce,xn,Hn),J=ce,et=xn,gt=Hn)},setOp:function(ce,xn,Hn){(pt!==ce||Bt!==xn||Re!==Hn)&&(i.stencilOp(ce,xn,Hn),pt=ce,Bt=xn,Re=Hn)},setLocked:function(ce){N=ce},setClear:function(ce){He!==ce&&(i.clearStencil(ce),He=ce)},reset:function(){N=!1,dt=null,J=null,et=null,gt=null,pt=null,Bt=null,Re=null,He=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],x=null,_=!1,g=null,p=null,v=null,S=null,y=null,D=null,R=null,I=new At(0,0,0),C=0,E=!1,M=null,U=null,z=null,H=null,$=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),w=!1,Z=0,A=i.getParameter(i.VERSION);A.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(A)[1]),w=Z>=1):A.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),w=Z>=2);let q=null,V={},j=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),Et=new ue().fromArray(j),K=new ue().fromArray(ot);function nt(N,dt,J,et){let gt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(N,pt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<J;Bt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(dt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return pt}let xt={};xt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),a.setFunc(As),Jt(!1),Kt(bh),ut(i.CULL_FACE),O(Dn);function ut(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function It(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ft(N,dt){return u[N]!==dt?(i.bindFramebuffer(N,dt),u[N]=dt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Xt(N,dt){let J=d,et=!1;if(N){J=f.get(dt),J===void 0&&(J=[],f.set(dt,J));let gt=N.textures;if(J.length!==gt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Bt=gt.length;pt<Bt;pt++)J[pt]=i.COLOR_ATTACHMENT0+pt;J.length=gt.length,et=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,et=!0);et&&i.drawBuffers(J)}function we(N){return x!==N?(i.useProgram(N),x=N,!0):!1}let Qt={[Wi]:i.FUNC_ADD,[Kd]:i.FUNC_SUBTRACT,[jd]:i.FUNC_REVERSE_SUBTRACT};Qt[Qd]=i.MIN,Qt[tf]=i.MAX;let Pe={[ef]:i.ZERO,[nf]:i.ONE,[sf]:i.SRC_COLOR,[Yo]:i.SRC_ALPHA,[hf]:i.SRC_ALPHA_SATURATE,[lf]:i.DST_COLOR,[af]:i.DST_ALPHA,[rf]:i.ONE_MINUS_SRC_COLOR,[Zo]:i.ONE_MINUS_SRC_ALPHA,[cf]:i.ONE_MINUS_DST_COLOR,[of]:i.ONE_MINUS_DST_ALPHA,[uf]:i.CONSTANT_COLOR,[df]:i.ONE_MINUS_CONSTANT_COLOR,[ff]:i.CONSTANT_ALPHA,[pf]:i.ONE_MINUS_CONSTANT_ALPHA};function O(N,dt,J,et,gt,pt,Bt,Re,He,ce){if(N===Dn){_===!0&&(It(i.BLEND),_=!1);return}if(_===!1&&(ut(i.BLEND),_=!0),N!==Jd){if(N!==g||ce!==E){if((p!==Wi||y!==Wi)&&(i.blendEquation(i.FUNC_ADD),p=Wi,y=Wi),ce)switch(N){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case se:i.blendFunc(i.ONE,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case se:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,S=null,D=null,R=null,I.set(0,0,0),C=0,g=N,E=ce}return}gt=gt||dt,pt=pt||J,Bt=Bt||et,(dt!==p||gt!==y)&&(i.blendEquationSeparate(Qt[dt],Qt[gt]),p=dt,y=gt),(J!==v||et!==S||pt!==D||Bt!==R)&&(i.blendFuncSeparate(Pe[J],Pe[et],Pe[pt],Pe[Bt]),v=J,S=et,D=pt,R=Bt),(Re.equals(I)===!1||He!==C)&&(i.blendColor(Re.r,Re.g,Re.b,He),I.copy(Re),C=He),g=N,E=!1}function dn(N,dt){N.side===xe?It(i.CULL_FACE):ut(i.CULL_FACE);let J=N.side===ke;dt&&(J=!J),Jt(J),N.blending===Ss&&N.transparent===!1?O(Dn):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let et=N.stencilWrite;o.setTest(et),et&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ye(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function Kt(N){N!==Yd?(ut(i.CULL_FACE),N!==U&&(N===bh?i.cullFace(i.BACK):N===Zd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),U=N}function Ct(N){N!==z&&(w&&i.lineWidth(N),z=N)}function ye(N,dt,J){N?(ut(i.POLYGON_OFFSET_FILL),(H!==dt||$!==J)&&(i.polygonOffset(dt,J),H=dt,$=J)):It(i.POLYGON_OFFSET_FILL)}function Rt(N){N?ut(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function P(N){N===void 0&&(N=i.TEXTURE0+Y-1),q!==N&&(i.activeTexture(N),q=N)}function b(N,dt,J){J===void 0&&(q===null?J=i.TEXTURE0+Y-1:J=q);let et=V[J];et===void 0&&(et={type:void 0,texture:void 0},V[J]=et),(et.type!==N||et.texture!==dt)&&(q!==J&&(i.activeTexture(J),q=J),i.bindTexture(N,dt||xt[N]),et.type=N,et.texture=dt)}function G(){let N=V[q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(N){Et.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Et.copy(N))}function yt(N){K.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function jt(N,dt){let J=c.get(dt);J===void 0&&(J=new WeakMap,c.set(dt,J));let et=J.get(N);et===void 0&&(et=i.getUniformBlockIndex(dt,N.name),J.set(N,et))}function Ht(N,dt){let et=c.get(dt).get(N);l.get(dt)!==et&&(i.uniformBlockBinding(dt,et,N.__bindingPointIndex),l.set(dt,et))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},q=null,V={},u={},f=new WeakMap,d=[],x=null,_=!1,g=null,p=null,v=null,S=null,y=null,D=null,R=null,I=new At(0,0,0),C=0,E=!1,M=null,U=null,z=null,H=null,$=null,Et.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ut,disable:It,bindFramebuffer:Ft,drawBuffers:Xt,useProgram:we,setBlending:O,setMaterial:dn,setFlipSided:Jt,setCullFace:Kt,setLineWidth:Ct,setPolygonOffset:ye,setScissorTest:Rt,activeTexture:P,bindTexture:b,unbindTexture:G,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:vt,texImage3D:Pt,updateUBOMapping:jt,uniformBlockBinding:Ht,texStorage2D:te,texStorage3D:st,texSubImage2D:Q,texSubImage3D:Tt,compressedTexSubImage2D:ft,compressedTexSubImage3D:_t,scissor:Ut,viewport:yt,reset:me}}function vu(i,t,e,n){let s=xx(n);switch(e){case Bu:return i*t;case zu:return i*t;case Hu:return i*t*2;case Ic:return i*t/s.components*s.byteLength;case Lc:return i*t/s.components*s.byteLength;case Vu:return i*t*2/s.components*s.byteLength;case Dc:return i*t*2/s.components*s.byteLength;case Ou:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case Uc:return i*t*4/s.components*s.byteLength;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case la:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ol:case cl:return Math.max(i,16)*Math.max(t,8)/4;case al:case ll:return Math.max(i,8)*Math.max(t,8)/2;case hl:case ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case vl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ha:case Al:case Rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gu:case Cl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Pl:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xx(i){switch(i){case jn:case Nu:return{byteLength:1,components:1};case _r:case Fu:case Tn:return{byteLength:2,components:1};case Cc:case Pc:return{byteLength:2,components:4};case Yi:case Rc:case Ln:return{byteLength:4,components:1};case ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _x(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,b){return d?new OffscreenCanvas(P,b):fa("canvas")}function _(P,b,G){let tt=1,it=Rt(P);if((it.width>G||it.height>G)&&(tt=G/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Q=Math.floor(tt*it.width),Tt=Math.floor(tt*it.height);u===void 0&&(u=x(Q,Tt));let ft=b?x(Q,Tt):u;return ft.width=Q,ft.height=Tt,ft.getContext("2d").drawImage(P,0,0,Q,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Q+"x"+Tt+")."),ft}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(P,b,G,tt,it=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=b;if(b===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),b===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),b===i.RGBA){let Tt=it?Ba:Yt.getTransfer(tt);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=Tt===oe?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function y(P,b){let G;return P?b===null||b===Yi||b===Ps?G=i.DEPTH24_STENCIL8:b===Ln?G=i.DEPTH32F_STENCIL8:b===_r&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yi||b===Ps?G=i.DEPTH_COMPONENT24:b===Ln?G=i.DEPTH_COMPONENT32F:b===_r&&(G=i.DEPTH_COMPONENT16),G}function D(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==on&&P.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function R(P){let b=P.target;b.removeEventListener("dispose",R),C(b),b.isVideoTexture&&h.delete(b)}function I(P){let b=P.target;b.removeEventListener("dispose",I),M(b)}function C(P){let b=n.get(P);if(b.__webglInit===void 0)return;let G=P.source,tt=f.get(G);if(tt){let it=tt[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(P),Object.keys(tt).length===0&&f.delete(G)}n.remove(P)}function E(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let G=P.source,tt=f.get(G);delete tt[b.__cacheKey],a.memory.textures--}function M(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let it=0;it<b.__webglFramebuffer[tt].length;it++)i.deleteFramebuffer(b.__webglFramebuffer[tt][it]);else i.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[tt]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=P.textures;for(let tt=0,it=G.length;tt<it;tt++){let Q=n.get(G[tt]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(G[tt])}n.remove(P)}let U=0;function z(){U=0}function H(){let P=U;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),U+=1,P}function $(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function Y(P,b){let G=n.get(P);if(P.isVideoTexture&&Ct(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){let tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,P,b);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function w(P,b){let G=n.get(P);if(P.version>0&&G.__version!==P.version){K(G,P,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function Z(P,b){let G=n.get(P);if(P.version>0&&G.__version!==P.version){K(G,P,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function A(P,b){let G=n.get(P);if(P.version>0&&G.__version!==P.version){nt(G,P,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}let q={[xr]:i.REPEAT,[qi]:i.CLAMP_TO_EDGE,[rl]:i.MIRRORED_REPEAT},V={[on]:i.NEAREST,[_f]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},j={[bf]:i.NEVER,[Rf]:i.ALWAYS,[Sf]:i.LESS,[Xu]:i.LEQUAL,[Ef]:i.EQUAL,[Af]:i.GEQUAL,[Tf]:i.GREATER,[wf]:i.NOTEQUAL};function ot(P,b){if(b.type===Ln&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===uo||b.magFilter===Ir||b.magFilter===$i||b.minFilter===In||b.minFilter===uo||b.minFilter===Ir||b.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,q[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,q[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,q[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,V[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,V[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,j[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===on||b.minFilter!==Ir&&b.minFilter!==$i||b.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Et(P,b){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",R));let tt=b.source,it=f.get(tt);it===void 0&&(it={},f.set(tt,it));let Q=$(b);if(Q!==P.__cacheKey){it[Q]===void 0&&(it[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),it[Q].usedTimes++;let Tt=it[P.__cacheKey];Tt!==void 0&&(it[P.__cacheKey].usedTimes--,Tt.usedTimes===0&&E(b)),P.__cacheKey=Q,P.__webglTexture=it[Q].texture}return G}function K(P,b,G){let tt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(tt=i.TEXTURE_3D);let it=Et(P,b),Q=b.source;e.bindTexture(tt,P.__webglTexture,i.TEXTURE0+G);let Tt=n.get(Q);if(Q.version!==Tt.__version||it===!0){e.activeTexture(i.TEXTURE0+G);let ft=Yt.getPrimaries(Yt.workingColorSpace),_t=b.colorSpace===mi?null:Yt.getPrimaries(b.colorSpace),te=b.colorSpace===mi||ft===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let st=_(b.image,!1,s.maxTextureSize);st=ye(b,st);let vt=r.convert(b.format,b.colorSpace),Pt=r.convert(b.type),Ut=S(b.internalFormat,vt,Pt,b.colorSpace,b.isVideoTexture);ot(tt,b);let yt,jt=b.mipmaps,Ht=b.isVideoTexture!==!0,me=Tt.__version===void 0||it===!0,N=Q.dataReady,dt=D(b,st);if(b.isDepthTexture)Ut=y(b.format===Is,b.type),me&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Ut,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Ut,st.width,st.height,0,vt,Pt,null));else if(b.isDataTexture)if(jt.length>0){Ht&&me&&e.texStorage2D(i.TEXTURE_2D,dt,Ut,jt[0].width,jt[0].height);for(let J=0,et=jt.length;J<et;J++)yt=jt[J],Ht?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,yt.width,yt.height,vt,Pt,yt.data):e.texImage2D(i.TEXTURE_2D,J,Ut,yt.width,yt.height,0,vt,Pt,yt.data);b.generateMipmaps=!1}else Ht?(me&&e.texStorage2D(i.TEXTURE_2D,dt,Ut,st.width,st.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,vt,Pt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,st.width,st.height,0,vt,Pt,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ht&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ut,jt[0].width,jt[0].height,st.depth);for(let J=0,et=jt.length;J<et;J++)if(yt=jt[J],b.format!==bn)if(vt!==null)if(Ht){if(N)if(b.layerUpdates.size>0){let gt=vu(yt.width,yt.height,b.format,b.type);for(let pt of b.layerUpdates){let Bt=yt.data.subarray(pt*gt/yt.data.BYTES_PER_ELEMENT,(pt+1)*gt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,pt,yt.width,yt.height,1,vt,Bt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,yt.width,yt.height,st.depth,vt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ut,yt.width,yt.height,st.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,yt.width,yt.height,st.depth,vt,Pt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Ut,yt.width,yt.height,st.depth,0,vt,Pt,yt.data)}else{Ht&&me&&e.texStorage2D(i.TEXTURE_2D,dt,Ut,jt[0].width,jt[0].height);for(let J=0,et=jt.length;J<et;J++)yt=jt[J],b.format!==bn?vt!==null?Ht?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,yt.width,yt.height,vt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Ut,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,yt.width,yt.height,vt,Pt,yt.data):e.texImage2D(i.TEXTURE_2D,J,Ut,yt.width,yt.height,0,vt,Pt,yt.data)}else if(b.isDataArrayTexture)if(Ht){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ut,st.width,st.height,st.depth),N)if(b.layerUpdates.size>0){let J=vu(st.width,st.height,b.format,b.type);for(let et of b.layerUpdates){let gt=st.data.subarray(et*J/st.data.BYTES_PER_ELEMENT,(et+1)*J/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,st.width,st.height,1,vt,Pt,gt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Pt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,st.width,st.height,st.depth,0,vt,Pt,st.data);else if(b.isData3DTexture)Ht?(me&&e.texStorage3D(i.TEXTURE_3D,dt,Ut,st.width,st.height,st.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Pt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,st.width,st.height,st.depth,0,vt,Pt,st.data);else if(b.isFramebufferTexture){if(me)if(Ht)e.texStorage2D(i.TEXTURE_2D,dt,Ut,st.width,st.height);else{let J=st.width,et=st.height;for(let gt=0;gt<dt;gt++)e.texImage2D(i.TEXTURE_2D,gt,Ut,J,et,0,vt,Pt,null),J>>=1,et>>=1}}else if(jt.length>0){if(Ht&&me){let J=Rt(jt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Ut,J.width,J.height)}for(let J=0,et=jt.length;J<et;J++)yt=jt[J],Ht?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,vt,Pt,yt):e.texImage2D(i.TEXTURE_2D,J,Ut,vt,Pt,yt);b.generateMipmaps=!1}else if(Ht){if(me){let J=Rt(st);e.texStorage2D(i.TEXTURE_2D,dt,Ut,J.width,J.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Pt,st)}else e.texImage2D(i.TEXTURE_2D,0,Ut,vt,Pt,st);g(b)&&p(tt),Tt.__version=Q.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function nt(P,b,G){if(b.image.length!==6)return;let tt=Et(P,b),it=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);let Q=n.get(it);if(it.version!==Q.__version||tt===!0){e.activeTexture(i.TEXTURE0+G);let Tt=Yt.getPrimaries(Yt.workingColorSpace),ft=b.colorSpace===mi?null:Yt.getPrimaries(b.colorSpace),_t=b.colorSpace===mi||Tt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let te=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,vt=[];for(let et=0;et<6;et++)!te&&!st?vt[et]=_(b.image[et],!0,s.maxCubemapSize):vt[et]=st?b.image[et].image:b.image[et],vt[et]=ye(b,vt[et]);let Pt=vt[0],Ut=r.convert(b.format,b.colorSpace),yt=r.convert(b.type),jt=S(b.internalFormat,Ut,yt,b.colorSpace),Ht=b.isVideoTexture!==!0,me=Q.__version===void 0||tt===!0,N=it.dataReady,dt=D(b,Pt);ot(i.TEXTURE_CUBE_MAP,b);let J;if(te){Ht&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,jt,Pt.width,Pt.height);for(let et=0;et<6;et++){J=vt[et].mipmaps;for(let gt=0;gt<J.length;gt++){let pt=J[gt];b.format!==bn?Ut!==null?Ht?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,pt.width,pt.height,Ut,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,jt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,pt.width,pt.height,Ut,yt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,jt,pt.width,pt.height,0,Ut,yt,pt.data)}}}else{if(J=b.mipmaps,Ht&&me){J.length>0&&dt++;let et=Rt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,jt,et.width,et.height)}for(let et=0;et<6;et++)if(st){Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,vt[et].width,vt[et].height,Ut,yt,vt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,jt,vt[et].width,vt[et].height,0,Ut,yt,vt[et].data);for(let gt=0;gt<J.length;gt++){let Bt=J[gt].image[et].image;Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,Bt.width,Bt.height,Ut,yt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,jt,Bt.width,Bt.height,0,Ut,yt,Bt.data)}}else{Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ut,yt,vt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,jt,Ut,yt,vt[et]);for(let gt=0;gt<J.length;gt++){let pt=J[gt];Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,Ut,yt,pt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,jt,Ut,yt,pt.image[et])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),Q.__version=it.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function xt(P,b,G,tt,it,Q){let Tt=r.convert(G.format,G.colorSpace),ft=r.convert(G.type),_t=S(G.internalFormat,Tt,ft,G.colorSpace),te=n.get(b),st=n.get(G);if(st.__renderTarget=b,!te.__hasExternalTextures){let vt=Math.max(1,b.width>>Q),Pt=Math.max(1,b.height>>Q);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,Q,_t,vt,Pt,b.depth,0,Tt,ft,null):e.texImage2D(it,Q,_t,vt,Pt,0,Tt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Kt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,it,st.__webglTexture,0,Jt(b)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,it,st.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(P,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){let tt=b.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,Q=y(b.stencilBuffer,it),Tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=Jt(b);Kt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Q,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,P)}else{let tt=b.textures;for(let it=0;it<tt.length;it++){let Q=tt[it],Tt=r.convert(Q.format,Q.colorSpace),ft=r.convert(Q.type),_t=S(Q.internalFormat,Tt,ft,Q.colorSpace),te=Jt(b);G&&Kt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,_t,b.width,b.height):Kt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,_t,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,_t,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=n.get(b.depthTexture);tt.__renderTarget=b,(!tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);let it=tt.__webglTexture,Q=Jt(b);if(b.depthTexture.format===Es)Kt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(b.depthTexture.format===Is)Kt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Ft(P){let b=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let tt=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),tt){let it=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),b.__depthDisposeCallback=it}b.__boundDepthTexture=tt}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");It(b.__webglFramebuffer,P)}else if(G){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]===void 0)b.__webglDepthbuffer[tt]=i.createRenderbuffer(),ut(b.__webglDepthbuffer[tt],P,!1);else{let it=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ut(b.__webglDepthbuffer,P,!1);else{let tt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(P,b,G){let tt=n.get(P);b!==void 0&&xt(tt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ft(P)}function we(P){let b=P.texture,G=n.get(P),tt=n.get(b);P.addEventListener("dispose",I);let it=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Tt=it.length>1;if(Tt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=b.version,a.memory.textures++),Q){G.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[ft]=[];for(let _t=0;_t<b.mipmaps.length;_t++)G.__webglFramebuffer[ft][_t]=i.createFramebuffer()}else G.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let ft=0;ft<b.mipmaps.length;ft++)G.__webglFramebuffer[ft]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ft=0,_t=it.length;ft<_t;ft++){let te=n.get(it[ft]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Kt(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ft=0;ft<it.length;ft++){let _t=it[ft];G.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ft]);let te=r.convert(_t.format,_t.colorSpace),st=r.convert(_t.type),vt=S(_t.internalFormat,te,st,_t.colorSpace,P.isXRRenderTarget===!0),Pt=Jt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,vt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,G.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),ot(i.TEXTURE_CUBE_MAP,b);for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)xt(G.__webglFramebuffer[ft][_t],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,_t);else xt(G.__webglFramebuffer[ft],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,_t=it.length;ft<_t;ft++){let te=it[ft],st=n.get(te);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),ot(i.TEXTURE_2D,te),xt(G.__webglFramebuffer,P,te,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),g(te)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,tt.__webglTexture),ot(ft,b),b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)xt(G.__webglFramebuffer[_t],P,b,i.COLOR_ATTACHMENT0,ft,_t);else xt(G.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,ft,0);g(b)&&p(ft),e.unbindTexture()}P.depthBuffer&&Ft(P)}function Qt(P){let b=P.textures;for(let G=0,tt=b.length;G<tt;G++){let it=b[G];if(g(it)){let Q=v(P),Tt=n.get(it).__webglTexture;e.bindTexture(Q,Tt),p(Q),e.unbindTexture()}}}let Pe=[],O=[];function dn(P){if(P.samples>0){if(Kt(P)===!1){let b=P.textures,G=P.width,tt=P.height,it=i.COLOR_BUFFER_BIT,Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(P),ft=b.length>1;if(ft)for(let _t=0;_t<b.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<b.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);let te=n.get(b[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,G,tt,0,0,G,tt,it,i.NEAREST),l===!0&&(Pe.length=0,O.length=0,Pe.push(i.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Pe.push(Q),O.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let _t=0;_t<b.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);let te=n.get(b[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Jt(P){return Math.min(s.maxSamples,P.samples)}function Kt(P){let b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ct(P){let b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function ye(P,b){let G=P.colorSpace,tt=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Ws&&G!==mi&&(Yt.getTransfer(G)===oe?(tt!==bn||it!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Rt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=w,this.setTexture3D=Z,this.setTextureCube=A,this.rebindTextures=Xt,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Kt}function vx(i,t){function e(n,s=mi){let r,a=Yt.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===Cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ku)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nu)return i.BYTE;if(n===Fu)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===Rc)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===Bu)return i.ALPHA;if(n===Ou)return i.RGB;if(n===bn)return i.RGBA;if(n===zu)return i.LUMINANCE;if(n===Hu)return i.LUMINANCE_ALPHA;if(n===Es)return i.DEPTH_COMPONENT;if(n===Is)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===Lc)return i.RED_INTEGER;if(n===Vu)return i.RG;if(n===Dc)return i.RG_INTEGER;if(n===Uc)return i.RGBA_INTEGER;if(n===aa||n===oa||n===la||n===ca)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===al||n===ol||n===ll||n===cl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hl||n===ul||n===dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hl||n===ul)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===vl||n===yl||n===Ml||n===bl||n===Sl||n===El||n===Tl||n===wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_l)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ha||n===Al||n===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ha)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gu||n===Cl||n===Pl||n===Il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Yl=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},kt=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},yx={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bx=`
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

}`,Zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fe({vertexShader:Mx,fragmentShader:bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jl=class extends yi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null,_=new Zl,g=e.getContextAttributes(),p=null,v=null,S=[],y=[],D=new rt,R=null,I=new We;I.viewport=new ue;let C=new We;C.viewport=new ue;let E=[I,C],M=new Yl,U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let nt=S[K];return nt===void 0&&(nt=new pr,S[K]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(K){let nt=S[K];return nt===void 0&&(nt=new pr,S[K]=nt),nt.getGripSpace()},this.getHand=function(K){let nt=S[K];return nt===void 0&&(nt=new pr,S[K]=nt),nt.getHandSpace()};function H(K){let nt=y.indexOf(K.inputSource);if(nt===-1)return;let xt=S[nt];xt!==void 0&&(xt.update(K.inputSource,K.frame,c||a),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<S.length;K++){let nt=y[K];nt!==null&&(y[K]=null,S[K].disconnect(nt))}U=null,z=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,v=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",$),s.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ye(d.framebufferWidth,d.framebufferHeight,{format:bn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,xt=null,ut=null;g.depth&&(ut=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?Is:Es,xt=g.stencil?Ps:Yi);let It={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(It),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ye(f.textureWidth,f.textureHeight,{format:bn,type:jn,depthTexture:new Sa(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(K){for(let nt=0;nt<K.removed.length;nt++){let xt=K.removed[nt],ut=y.indexOf(xt);ut>=0&&(y[ut]=null,S[ut].disconnect(xt))}for(let nt=0;nt<K.added.length;nt++){let xt=K.added[nt],ut=y.indexOf(xt);if(ut===-1){for(let Ft=0;Ft<S.length;Ft++)if(Ft>=y.length){y.push(xt),ut=Ft;break}else if(y[Ft]===null){y[Ft]=xt,ut=Ft;break}if(ut===-1)break}let It=S[ut];It&&It.connect(xt)}}let w=new L,Z=new L;function A(K,nt,xt){w.setFromMatrixPosition(nt.matrixWorld),Z.setFromMatrixPosition(xt.matrixWorld);let ut=w.distanceTo(Z),It=nt.projectionMatrix.elements,Ft=xt.projectionMatrix.elements,Xt=It[14]/(It[10]-1),we=It[14]/(It[10]+1),Qt=(It[9]+1)/It[5],Pe=(It[9]-1)/It[5],O=(It[8]-1)/It[0],dn=(Ft[8]+1)/Ft[0],Jt=Xt*O,Kt=Xt*dn,Ct=ut/(-O+dn),ye=Ct*-O;if(nt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ye),K.translateZ(Ct),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),It[10]===-1)K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Rt=Xt+Ct,P=we+Ct,b=Jt-ye,G=Kt+(ut-ye),tt=Qt*we/P*Rt,it=Pe*we/P*Rt;K.projectionMatrix.makePerspective(b,G,tt,it,Rt,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function q(K,nt){nt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(nt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let nt=K.near,xt=K.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(xt=_.depthFar)),M.near=C.near=I.near=nt,M.far=C.far=I.far=xt,(U!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,z=M.far),I.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,M.layers.mask=I.layers.mask|C.layers.mask;let ut=K.parent,It=M.cameras;q(M,ut);for(let Ft=0;Ft<It.length;Ft++)q(It[Ft],ut);It.length===2?A(M,I,C):M.projectionMatrix.copy(I.projectionMatrix),V(K,M,ut)};function V(K,nt,xt){xt===null?K.matrix.copy(nt.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(nt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ul*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let j=null;function ot(K,nt){if(h=nt.getViewerPose(c||a),x=nt,h!==null){let xt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let ut=!1;xt.length!==M.cameras.length&&(M.cameras.length=0,ut=!0);for(let Ft=0;Ft<xt.length;Ft++){let Xt=xt[Ft],we=null;if(d!==null)we=d.getViewport(Xt);else{let Pe=u.getViewSubImage(f,Xt);we=Pe.viewport,Ft===0&&(t.setRenderTargetTextures(v,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),t.setRenderTarget(v))}let Qt=E[Ft];Qt===void 0&&(Qt=new We,Qt.layers.enable(Ft),Qt.viewport=new ue,E[Ft]=Qt),Qt.matrix.fromArray(Xt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Xt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(we.x,we.y,we.width,we.height),Ft===0&&(M.matrix.copy(Qt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ut===!0&&M.cameras.push(Qt)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){let Ft=u.getDepthInformation(xt[0]);Ft&&Ft.isValid&&Ft.texture&&_.init(t,Ft,s.renderState)}}for(let xt=0;xt<S.length;xt++){let ut=y[xt],It=S[xt];ut!==null&&It!==void 0&&It.update(ut,nt,c||a)}j&&j(K,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),x=null}let Et=new Zu;Et.setAnimationLoop(ot),this.setAnimationLoop=function(K){j=K},this.dispose=function(){}}},Vi=new Un,Sx=new de;function Ex(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Yu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ke&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ke&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),S=v.envMap,y=v.envMapRotation;S&&(g.envMap.value=S,Vi.copy(y),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),g.envMapRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(Vi)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let y=S.program;n.uniformBlockBinding(v,y)}function c(v,S){let y=s[v.id];y===void 0&&(x(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",g));let D=S.program;n.updateUBOMapping(v,D);let R=t.render.frame;r[v.id]!==R&&(f(v),r[v.id]=R)}function h(v){let S=u();v.__bindingPointIndex=S;let y=i.createBuffer(),D=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let S=s[v.id],y=v.uniforms,D=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,I=y.length;R<I;R++){let C=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,M=C.length;E<M;E++){let U=C[E];if(d(U,R,E,D)===!0){let z=U.__offset,H=Array.isArray(U.value)?U.value:[U.value],$=0;for(let Y=0;Y<H.length;Y++){let w=H[Y],Z=_(w);typeof w=="number"||typeof w=="boolean"?(U.__data[0]=w,i.bufferSubData(i.UNIFORM_BUFFER,z+$,U.__data)):w.isMatrix3?(U.__data[0]=w.elements[0],U.__data[1]=w.elements[1],U.__data[2]=w.elements[2],U.__data[3]=0,U.__data[4]=w.elements[3],U.__data[5]=w.elements[4],U.__data[6]=w.elements[5],U.__data[7]=0,U.__data[8]=w.elements[6],U.__data[9]=w.elements[7],U.__data[10]=w.elements[8],U.__data[11]=0):(w.toArray(U.__data,$),$+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,S,y,D){let R=v.value,I=S+"_"+y;if(D[I]===void 0)return typeof R=="number"||typeof R=="boolean"?D[I]=R:D[I]=R.clone(),!0;{let C=D[I];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return D[I]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function x(v){let S=v.uniforms,y=0,D=16;for(let I=0,C=S.length;I<C;I++){let E=Array.isArray(S[I])?S[I]:[S[I]];for(let M=0,U=E.length;M<U;M++){let z=E[M],H=Array.isArray(z.value)?z.value:[z.value];for(let $=0,Y=H.length;$<Y;$++){let w=H[$],Z=_(w),A=y%D,q=A%Z.boundary,V=A+q;y+=q,V!==0&&D-V<Z.storage&&(y+=D-V),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=Z.storage}}}let R=y%D;return R>0&&(y+=D-R),v.__size=y,v.__cache={},this}function _(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),S}function g(v){let S=v.target;S.removeEventListener("dispose",g);let y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ea=class{constructor(t={}){let{canvas:e=Pf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let x=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,v=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=xi,this.toneMappingExposure=1;let y=this,D=!1,R=0,I=0,C=null,E=-1,M=null,U=new ue,z=new ue,H=null,$=new At(0),Y=0,w=e.width,Z=e.height,A=1,q=null,V=null,j=new ue(0,0,w,Z),ot=new ue(0,0,w,Z),Et=!1,K=new vr,nt=!1,xt=!1,ut=new de,It=new de,Ft=new L,Xt=new ue,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function Pe(){return C===null?A:1}let O=n;function dn(T,k){return e.getContext(T,k)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mc}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),O===null){let k="webgl2";if(O=dn(k,T),O===null)throw dn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Jt,Kt,Ct,ye,Rt,P,b,G,tt,it,Q,Tt,ft,_t,te,st,vt,Pt,Ut,yt,jt,Ht,me,N;function dt(){Jt=new Hg(O),Jt.init(),Ht=new vx(O,Jt),Kt=new Ng(O,Jt,t,Ht),Ct=new gx(O,Jt),Kt.reverseDepthBuffer&&f&&Ct.buffers.depth.setReversed(!0),ye=new Wg(O),Rt=new ix,P=new _x(O,Jt,Ct,Rt,Kt,Ht,ye),b=new kg(y),G=new zg(y),tt=new Kf(O),me=new Dg(O,tt),it=new Vg(O,tt,ye,me),Q=new qg(O,it,tt,ye),Ut=new Xg(O,Kt,P),st=new Fg(Rt),Tt=new nx(y,b,G,Jt,Kt,me,st),ft=new Ex(y,Rt),_t=new rx,te=new ux(Jt),Pt=new Lg(y,b,G,Ct,Q,d,l),vt=new px(y,Q,Kt),N=new Tx(O,ye,Kt,Ct),yt=new Ug(O,Jt,ye),jt=new Gg(O,Jt,ye),ye.programs=Tt.programs,y.capabilities=Kt,y.extensions=Jt,y.properties=Rt,y.renderLists=_t,y.shadowMap=vt,y.state=Ct,y.info=ye}dt();let J=new Jl(y,O);this.xr=J,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=Jt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Jt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(T){T!==void 0&&(A=T,this.setSize(w,Z,!1))},this.getSize=function(T){return T.set(w,Z)},this.setSize=function(T,k,W=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,Z=k,e.width=Math.floor(T*A),e.height=Math.floor(k*A),W===!0&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(w*A,Z*A).floor()},this.setDrawingBufferSize=function(T,k,W){w=T,Z=k,A=W,e.width=Math.floor(T*W),e.height=Math.floor(k*W),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,k,W,X){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,k,W,X),Ct.viewport(U.copy(j).multiplyScalar(A).round())},this.getScissor=function(T){return T.copy(ot)},this.setScissor=function(T,k,W,X){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,k,W,X),Ct.scissor(z.copy(ot).multiplyScalar(A).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(T){Ct.setScissorTest(Et=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){V=T},this.getClearColor=function(T){return T.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(T=!0,k=!0,W=!0){let X=0;if(T){let B=!1;if(C!==null){let at=C.texture.format;B=at===Uc||at===Dc||at===Lc}if(B){let at=C.texture.type,mt=at===jn||at===Yi||at===_r||at===Ps||at===Cc||at===Pc,Mt=Pt.getClearColor(),bt=Pt.getClearAlpha(),Nt=Mt.r,Ot=Mt.g,St=Mt.b;mt?(x[0]=Nt,x[1]=Ot,x[2]=St,x[3]=bt,O.clearBufferuiv(O.COLOR,0,x)):(_[0]=Nt,_[1]=Ot,_[2]=St,_[3]=bt,O.clearBufferiv(O.COLOR,0,_))}else X|=O.COLOR_BUFFER_BIT}k&&(X|=O.DEPTH_BUFFER_BIT),W&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),_t.dispose(),te.dispose(),Rt.dispose(),b.dispose(),G.dispose(),Q.dispose(),me.dispose(),N.dispose(),Tt.dispose(),J.dispose(),J.removeEventListener("sessionstart",ph),J.removeEventListener("sessionend",mh),Fi.stop()};function et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let T=ye.autoReset,k=vt.enabled,W=vt.autoUpdate,X=vt.needsUpdate,B=vt.type;dt(),ye.autoReset=T,vt.enabled=k,vt.autoUpdate=W,vt.needsUpdate=X,vt.type=B}function pt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Bt(T){let k=T.target;k.removeEventListener("dispose",Bt),Re(k)}function Re(T){He(T),Rt.remove(T)}function He(T){let k=Rt.get(T).programs;k!==void 0&&(k.forEach(function(W){Tt.releaseProgram(W)}),T.isShaderMaterial&&Tt.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,W,X,B,at){k===null&&(k=we);let mt=B.isMesh&&B.matrixWorld.determinant()<0,Mt=Xd(T,k,W,X,B);Ct.setMaterial(X,mt);let bt=W.index,Nt=1;if(X.wireframe===!0){if(bt=it.getWireframeAttribute(W),bt===void 0)return;Nt=2}let Ot=W.drawRange,St=W.attributes.position,ne=Ot.start*Nt,ge=(Ot.start+Ot.count)*Nt;at!==null&&(ne=Math.max(ne,at.start*Nt),ge=Math.min(ge,(at.start+at.count)*Nt)),bt!==null?(ne=Math.max(ne,0),ge=Math.min(ge,bt.count)):St!=null&&(ne=Math.max(ne,0),ge=Math.min(ge,St.count));let Me=ge-ne;if(Me<0||Me===1/0)return;me.setup(B,X,Mt,W,bt);let Ke,re=yt;if(bt!==null&&(Ke=tt.get(bt),re=jt,re.setIndex(Ke)),B.isMesh)X.wireframe===!0?(Ct.setLineWidth(X.wireframeLinewidth*Pe()),re.setMode(O.LINES)):re.setMode(O.TRIANGLES);else if(B.isLine){let wt=X.linewidth;wt===void 0&&(wt=1),Ct.setLineWidth(wt*Pe()),B.isLineSegments?re.setMode(O.LINES):B.isLineLoop?re.setMode(O.LINE_LOOP):re.setMode(O.LINE_STRIP)}else B.isPoints?re.setMode(O.POINTS):B.isSprite&&re.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)re.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))re.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let wt=B._multiDrawStarts,Vn=B._multiDrawCounts,ae=B._multiDrawCount,_n=bt?tt.get(bt).bytesPerElement:1,ns=Rt.get(X).currentProgram.getUniforms();for(let sn=0;sn<ae;sn++)ns.setValue(O,"_gl_DrawID",sn),re.render(wt[sn]/_n,Vn[sn])}else if(B.isInstancedMesh)re.renderInstances(ne,Me,B.count);else if(W.isInstancedBufferGeometry){let wt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Vn=Math.min(W.instanceCount,wt);re.renderInstances(ne,Me,Vn)}else re.render(ne,Me)};function ce(T,k,W){T.transparent===!0&&T.side===xe&&T.forceSinglePass===!1?(T.side=ke,T.needsUpdate=!0,Pr(T,k,W),T.side=vi,T.needsUpdate=!0,Pr(T,k,W),T.side=xe):Pr(T,k,W)}this.compile=function(T,k,W=null){W===null&&(W=T),p=te.get(W),p.init(k),S.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==W&&T.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let X=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let at=B.material;if(at)if(Array.isArray(at))for(let mt=0;mt<at.length;mt++){let Mt=at[mt];ce(Mt,W,B),X.add(Mt)}else ce(at,W,B),X.add(at)}),S.pop(),p=null,X},this.compileAsync=function(T,k,W=null){let X=this.compile(T,k,W);return new Promise(B=>{function at(){if(X.forEach(function(mt){Rt.get(mt).currentProgram.isReady()&&X.delete(mt)}),X.size===0){B(T);return}setTimeout(at,10)}Jt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let xn=null;function Hn(T){xn&&xn(T)}function ph(){Fi.stop()}function mh(){Fi.start()}let Fi=new Zu;Fi.setAnimationLoop(Hn),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(T){xn=T,J.setAnimationLoop(T),T===null?Fi.stop():Fi.start()},J.addEventListener("sessionstart",ph),J.addEventListener("sessionend",mh),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(k),k=J.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,k,C),p=te.get(T,S.length),p.init(k),S.push(p),It.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(It),xt=this.localClippingEnabled,nt=st.init(this.clippingPlanes,xt),g=_t.get(T,v.length),g.init(),v.push(g),J.enabled===!0&&J.isPresenting===!0){let at=y.xr.getDepthSensingMesh();at!==null&&ho(at,k,-1/0,y.sortObjects)}ho(T,k,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(q,V),Qt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Qt&&Pt.addToRenderList(g,T),this.info.render.frame++,nt===!0&&st.beginShadows();let W=p.state.shadowsArray;vt.render(W,T,k),nt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=g.opaque,B=g.transmissive;if(p.setupLights(),k.isArrayCamera){let at=k.cameras;if(B.length>0)for(let mt=0,Mt=at.length;mt<Mt;mt++){let bt=at[mt];xh(X,B,T,bt)}Qt&&Pt.render(T);for(let mt=0,Mt=at.length;mt<Mt;mt++){let bt=at[mt];gh(g,T,bt,bt.viewport)}}else B.length>0&&xh(X,B,T,k),Qt&&Pt.render(T),gh(g,T,k);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(y,T,k),me.resetDefaultState(),E=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],nt===!0&&st.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function ho(T,k,W,X){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){X&&Xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(It);let mt=Q.update(T),Mt=T.material;Mt.visible&&g.push(T,mt,Mt,W,Xt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){let mt=Q.update(T),Mt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xt.copy(T.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Xt.copy(mt.boundingSphere.center)),Xt.applyMatrix4(T.matrixWorld).applyMatrix4(It)),Array.isArray(Mt)){let bt=mt.groups;for(let Nt=0,Ot=bt.length;Nt<Ot;Nt++){let St=bt[Nt],ne=Mt[St.materialIndex];ne&&ne.visible&&g.push(T,mt,ne,W,Xt.z,St)}}else Mt.visible&&g.push(T,mt,Mt,W,Xt.z,null)}}let at=T.children;for(let mt=0,Mt=at.length;mt<Mt;mt++)ho(at[mt],k,W,X)}function gh(T,k,W,X){let B=T.opaque,at=T.transmissive,mt=T.transparent;p.setupLightsView(W),nt===!0&&st.setGlobalState(y.clippingPlanes,W),X&&Ct.viewport(U.copy(X)),B.length>0&&Cr(B,k,W),at.length>0&&Cr(at,k,W),mt.length>0&&Cr(mt,k,W),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function xh(T,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Ye(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?Tn:jn,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let at=p.state.transmissionRenderTarget[X.id],mt=X.viewport||U;at.setSize(mt.z,mt.w);let Mt=y.getRenderTarget();y.setRenderTarget(at),y.getClearColor($),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Qt&&Pt.render(W);let bt=y.toneMapping;y.toneMapping=xi;let Nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),nt===!0&&st.setGlobalState(y.clippingPlanes,X),Cr(T,W,X),P.updateMultisampleRenderTarget(at),P.updateRenderTargetMipmap(at),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let St=0,ne=k.length;St<ne;St++){let ge=k[St],Me=ge.object,Ke=ge.geometry,re=ge.material,wt=ge.group;if(re.side===xe&&Me.layers.test(X.layers)){let Vn=re.side;re.side=ke,re.needsUpdate=!0,_h(Me,W,X,Ke,re,wt),re.side=Vn,re.needsUpdate=!0,Ot=!0}}Ot===!0&&(P.updateMultisampleRenderTarget(at),P.updateRenderTargetMipmap(at))}y.setRenderTarget(Mt),y.setClearColor($,Y),Nt!==void 0&&(X.viewport=Nt),y.toneMapping=bt}function Cr(T,k,W){let X=k.isScene===!0?k.overrideMaterial:null;for(let B=0,at=T.length;B<at;B++){let mt=T[B],Mt=mt.object,bt=mt.geometry,Nt=X===null?mt.material:X,Ot=mt.group;Mt.layers.test(W.layers)&&_h(Mt,k,W,bt,Nt,Ot)}}function _h(T,k,W,X,B,at){T.onBeforeRender(y,k,W,X,B,at),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(y,k,W,X,T,at),B.transparent===!0&&B.side===xe&&B.forceSinglePass===!1?(B.side=ke,B.needsUpdate=!0,y.renderBufferDirect(W,k,X,B,T,at),B.side=vi,B.needsUpdate=!0,y.renderBufferDirect(W,k,X,B,T,at),B.side=xe):y.renderBufferDirect(W,k,X,B,T,at),T.onAfterRender(y,k,W,X,B,at)}function Pr(T,k,W){k.isScene!==!0&&(k=we);let X=Rt.get(T),B=p.state.lights,at=p.state.shadowsArray,mt=B.state.version,Mt=Tt.getParameters(T,B.state,at,k,W),bt=Tt.getProgramCacheKey(Mt),Nt=X.programs;X.environment=T.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(T.isMeshStandardMaterial?G:b).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Nt===void 0&&(T.addEventListener("dispose",Bt),Nt=new Map,X.programs=Nt);let Ot=Nt.get(bt);if(Ot!==void 0){if(X.currentProgram===Ot&&X.lightsStateVersion===mt)return yh(T,Mt),Ot}else Mt.uniforms=Tt.getUniforms(T),T.onBeforeCompile(Mt,y),Ot=Tt.acquireProgram(Mt,bt),Nt.set(bt,Ot),X.uniforms=Mt.uniforms;let St=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(St.clippingPlanes=st.uniform),yh(T,Mt),X.needsLights=$d(T),X.lightsStateVersion=mt,X.needsLights&&(St.ambientLightColor.value=B.state.ambient,St.lightProbe.value=B.state.probe,St.directionalLights.value=B.state.directional,St.directionalLightShadows.value=B.state.directionalShadow,St.spotLights.value=B.state.spot,St.spotLightShadows.value=B.state.spotShadow,St.rectAreaLights.value=B.state.rectArea,St.ltc_1.value=B.state.rectAreaLTC1,St.ltc_2.value=B.state.rectAreaLTC2,St.pointLights.value=B.state.point,St.pointLightShadows.value=B.state.pointShadow,St.hemisphereLights.value=B.state.hemi,St.directionalShadowMap.value=B.state.directionalShadowMap,St.directionalShadowMatrix.value=B.state.directionalShadowMatrix,St.spotShadowMap.value=B.state.spotShadowMap,St.spotLightMatrix.value=B.state.spotLightMatrix,St.spotLightMap.value=B.state.spotLightMap,St.pointShadowMap.value=B.state.pointShadowMap,St.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ot,X.uniformsList=null,Ot}function vh(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=ws.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function yh(T,k){let W=Rt.get(T);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Xd(T,k,W,X,B){k.isScene!==!0&&(k=we),P.resetTextureUnits();let at=k.fog,mt=X.isMeshStandardMaterial?k.environment:null,Mt=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ws,bt=(X.isMeshStandardMaterial?G:b).get(X.envMap||mt),Nt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ot=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),St=!!W.morphAttributes.position,ne=!!W.morphAttributes.normal,ge=!!W.morphAttributes.color,Me=xi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Me=y.toneMapping);let Ke=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=Ke!==void 0?Ke.length:0,wt=Rt.get(X),Vn=p.state.lights;if(nt===!0&&(xt===!0||T!==M)){let fn=T===M&&X.id===E;st.setState(X,T,fn)}let ae=!1;X.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Vn.state.version||wt.outputColorSpace!==Mt||B.isBatchedMesh&&wt.batching===!1||!B.isBatchedMesh&&wt.batching===!0||B.isBatchedMesh&&wt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&wt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&wt.instancing===!1||!B.isInstancedMesh&&wt.instancing===!0||B.isSkinnedMesh&&wt.skinning===!1||!B.isSkinnedMesh&&wt.skinning===!0||B.isInstancedMesh&&wt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&wt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&wt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&wt.instancingMorph===!1&&B.morphTexture!==null||wt.envMap!==bt||X.fog===!0&&wt.fog!==at||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==st.numPlanes||wt.numIntersection!==st.numIntersection)||wt.vertexAlphas!==Nt||wt.vertexTangents!==Ot||wt.morphTargets!==St||wt.morphNormals!==ne||wt.morphColors!==ge||wt.toneMapping!==Me||wt.morphTargetsCount!==re)&&(ae=!0):(ae=!0,wt.__version=X.version);let _n=wt.currentProgram;ae===!0&&(_n=Pr(X,k,B));let ns=!1,sn=!1,tr=!1,be=_n.getUniforms(),Rn=wt.uniforms;if(Ct.useProgram(_n.program)&&(ns=!0,sn=!0,tr=!0),X.id!==E&&(E=X.id,sn=!0),ns||M!==T){Ct.buffers.depth.getReversed()?(ut.copy(T.projectionMatrix),Lf(ut),Df(ut),be.setValue(O,"projectionMatrix",ut)):be.setValue(O,"projectionMatrix",T.projectionMatrix),be.setValue(O,"viewMatrix",T.matrixWorldInverse);let oi=be.map.cameraPosition;oi!==void 0&&oi.setValue(O,Ft.setFromMatrixPosition(T.matrixWorld)),Kt.logarithmicDepthBuffer&&be.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&be.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,sn=!0,tr=!0)}if(B.isSkinnedMesh){be.setOptional(O,B,"bindMatrix"),be.setOptional(O,B,"bindMatrixInverse");let fn=B.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),be.setValue(O,"boneTexture",fn.boneTexture,P))}B.isBatchedMesh&&(be.setOptional(O,B,"batchingTexture"),be.setValue(O,"batchingTexture",B._matricesTexture,P),be.setOptional(O,B,"batchingIdTexture"),be.setValue(O,"batchingIdTexture",B._indirectTexture,P),be.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&be.setValue(O,"batchingColorTexture",B._colorsTexture,P));let er=W.morphAttributes;if((er.position!==void 0||er.normal!==void 0||er.color!==void 0)&&Ut.update(B,W,_n),(sn||wt.receiveShadow!==B.receiveShadow)&&(wt.receiveShadow=B.receiveShadow,be.setValue(O,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Rn.envMap.value=bt,Rn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(Rn.envMapIntensity.value=k.environmentIntensity),sn&&(be.setValue(O,"toneMappingExposure",y.toneMappingExposure),wt.needsLights&&qd(Rn,tr),at&&X.fog===!0&&ft.refreshFogUniforms(Rn,at),ft.refreshMaterialUniforms(Rn,X,A,Z,p.state.transmissionRenderTarget[T.id]),ws.upload(O,vh(wt),Rn,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ws.upload(O,vh(wt),Rn,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&be.setValue(O,"center",B.center),be.setValue(O,"modelViewMatrix",B.modelViewMatrix),be.setValue(O,"normalMatrix",B.normalMatrix),be.setValue(O,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let fn=X.uniformsGroups;for(let oi=0,li=fn.length;oi<li;oi++){let Mh=fn[oi];N.update(Mh,_n),N.bind(Mh,_n)}}return _n}function qd(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function $d(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,k,W){Rt.get(T.texture).__webglTexture=k,Rt.get(T.depthTexture).__webglTexture=W;let X=Rt.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){let W=Rt.get(T);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,W=0){C=T,R=k,I=W;let X=!0,B=null,at=!1,mt=!1;if(T){let bt=Rt.get(T);if(bt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(O.FRAMEBUFFER,null),X=!1;else if(bt.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(bt.__hasExternalTextures)P.rebindTextures(T,Rt.get(T.texture).__webglTexture,Rt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let St=T.depthTexture;if(bt.__boundDepthTexture!==St){if(St!==null&&Rt.has(St)&&(T.width!==St.image.width||T.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}let Nt=T.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(mt=!0);let Ot=Rt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ot[k])?B=Ot[k][W]:B=Ot[k],at=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?B=Rt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ot)?B=Ot[W]:B=Ot,U.copy(T.viewport),z.copy(T.scissor),H=T.scissorTest}else U.copy(j).multiplyScalar(A).floor(),z.copy(ot).multiplyScalar(A).floor(),H=Et;if(Ct.bindFramebuffer(O.FRAMEBUFFER,B)&&X&&Ct.drawBuffers(T,B),Ct.viewport(U),Ct.scissor(z),Ct.setScissorTest(H),at){let bt=Rt.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,bt.__webglTexture,W)}else if(mt){let bt=Rt.get(T.texture),Nt=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,bt.__webglTexture,W||0,Nt)}E=-1},this.readRenderTargetPixels=function(T,k,W,X,B,at,mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(Mt=Mt[mt]),Mt){Ct.bindFramebuffer(O.FRAMEBUFFER,Mt);try{let bt=T.texture,Nt=bt.format,Ot=bt.type;if(!Kt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-X&&W>=0&&W<=T.height-B&&O.readPixels(k,W,X,B,Ht.convert(Nt),Ht.convert(Ot),at)}finally{let bt=C!==null?Rt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(O.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(T,k,W,X,B,at,mt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(Mt=Mt[mt]),Mt){let bt=T.texture,Nt=bt.format,Ot=bt.type;if(!Kt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-X&&W>=0&&W<=T.height-B){Ct.bindFramebuffer(O.FRAMEBUFFER,Mt);let St=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,St),O.bufferData(O.PIXEL_PACK_BUFFER,at.byteLength,O.STREAM_READ),O.readPixels(k,W,X,B,Ht.convert(Nt),Ht.convert(Ot),0);let ne=C!==null?Rt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(O.FRAMEBUFFER,ne);let ge=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await If(O,ge,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,St),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,at),O.deleteBuffer(St),O.deleteSync(ge),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,W=0){T.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);let X=Math.pow(2,-W),B=Math.floor(T.image.width*X),at=Math.floor(T.image.height*X),mt=k!==null?k.x:0,Mt=k!==null?k.y:0;P.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,mt,Mt,B,at),Ct.unbindTexture()},this.copyTextureToTexture=function(T,k,W=null,X=null,B=0){T.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],k=arguments[2],B=arguments[3]||0,W=null);let at,mt,Mt,bt,Nt,Ot,St,ne,ge,Me=T.isCompressedTexture?T.mipmaps[B]:T.image;W!==null?(at=W.max.x-W.min.x,mt=W.max.y-W.min.y,Mt=W.isBox3?W.max.z-W.min.z:1,bt=W.min.x,Nt=W.min.y,Ot=W.isBox3?W.min.z:0):(at=Me.width,mt=Me.height,Mt=Me.depth||1,bt=0,Nt=0,Ot=0),X!==null?(St=X.x,ne=X.y,ge=X.z):(St=0,ne=0,ge=0);let Ke=Ht.convert(k.format),re=Ht.convert(k.type),wt;k.isData3DTexture?(P.setTexture3D(k,0),wt=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),wt=O.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),wt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let Vn=O.getParameter(O.UNPACK_ROW_LENGTH),ae=O.getParameter(O.UNPACK_IMAGE_HEIGHT),_n=O.getParameter(O.UNPACK_SKIP_PIXELS),ns=O.getParameter(O.UNPACK_SKIP_ROWS),sn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Me.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Me.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,bt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Nt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ot);let tr=T.isDataArrayTexture||T.isData3DTexture,be=k.isDataArrayTexture||k.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Rn=Rt.get(T),er=Rt.get(k),fn=Rt.get(Rn.__renderTarget),oi=Rt.get(er.__renderTarget);Ct.bindFramebuffer(O.READ_FRAMEBUFFER,fn.__webglFramebuffer),Ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let li=0;li<Mt;li++)tr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.get(T).__webglTexture,B,Ot+li),T.isDepthTexture?(be&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.get(k).__webglTexture,B,ge+li),O.blitFramebuffer(bt,Nt,at,mt,St,ne,at,mt,O.DEPTH_BUFFER_BIT,O.NEAREST)):be?O.copyTexSubImage3D(wt,B,St,ne,ge+li,bt,Nt,at,mt):O.copyTexSubImage2D(wt,B,St,ne,ge+li,bt,Nt,at,mt);Ct.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else be?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(wt,B,St,ne,ge,at,mt,Mt,Ke,re,Me.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(wt,B,St,ne,ge,at,mt,Mt,Ke,Me.data):O.texSubImage3D(wt,B,St,ne,ge,at,mt,Mt,Ke,re,Me):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,St,ne,at,mt,Ke,re,Me.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,St,ne,Me.width,Me.height,Ke,Me.data):O.texSubImage2D(O.TEXTURE_2D,B,St,ne,at,mt,Ke,re,Me);O.pixelStorei(O.UNPACK_ROW_LENGTH,Vn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ae),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_n),O.pixelStorei(O.UNPACK_SKIP_ROWS,ns),O.pixelStorei(O.UNPACK_SKIP_IMAGES,sn),B===0&&k.generateMipmaps&&O.generateMipmap(wt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(T,k,W=null,X=null,B=0){return T.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],k=arguments[3],B=arguments[4]||0),dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,W,X,B)},this.initRenderTarget=function(T){Rt.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),Ct.unbindTexture()},this.resetState=function(){R=0,I=0,C=null,Ct.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}},Us=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ta=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Kl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Dl,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qe=new L,wa=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ue=class extends ti{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xs,ar=new L,_s=new L,vs=new L,ys=new rt,or=new rt,td=new de,jr=new L,lr=new L,Qr=new L,yu=new rt,Vo=new rt,Mu=new rt,Be=class extends Ce{constructor(t=new Ue){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new _e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Kl(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new wa(n,3,0,!1)),xs.setAttribute("uv",new wa(n,2,3,!1))}this.geometry=xs,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),td.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-vs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ta(jr.set(-.5,-.5,0),vs,a,_s,s,r),ta(lr.set(.5,-.5,0),vs,a,_s,s,r),ta(Qr.set(.5,.5,0),vs,a,_s,s,r),yu.set(0,0),Vo.set(1,0),Mu.set(1,1);let o=t.ray.intersectTriangle(jr,lr,Qr,!1,ar);if(o===null&&(ta(lr.set(-.5,.5,0),vs,a,_s,s,r),Vo.set(0,1),o=t.ray.intersectTriangle(jr,Qr,lr,!1,ar),o===null))return;let l=t.ray.origin.distanceTo(ar);l<t.near||l>t.far||e.push({distance:l,point:ar.clone(),uv:gi.getInterpolation(ar,jr,lr,Qr,yu,Vo,Mu,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ta(i,t,e,n,s,r){ys.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(or.x=r*ys.x-s*ys.y,or.y=s*ys.x+r*ys.y):or.copy(ys),i.copy(t),i.x+=or.x,i.y+=or.y,i.applyMatrix4(td)}var jl=class extends je{constructor(t=null,e=1,n=1,s,r,a,o,l,c=on,h=on,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Aa=class extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ms=new de,bu=new de,ea=[],Su=new Qn,wx=new de,cr=new lt,hr=new bi,Ns=class extends lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Aa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),Su.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Su)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),hr.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),t.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),bu.multiplyMatrices(n,Ms),cr.matrixWorld=bu,cr.raycast(t,ea);for(let a=0,o=ea.length;a<o;a++){let l=ea[a];l.instanceId=r,l.object=this,e.push(l)}ea.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Aa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jl(new Float32Array(s*this.count),s,this.count,Ic,Ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ql=class extends ti{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Eu=new de,tc=new ga,na=new bi,ia=new L,Si=class extends Ce{constructor(t=new _e,e=new Ql){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),na.radius+=r,t.ray.intersectsSphere(na)===!1)return;Eu.copy(s).invert(),tc.copy(t.ray).applyMatrix4(Eu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let x=f,_=d;x<_;x++){let g=c.getX(x);ia.fromBufferAttribute(u,g),Tu(ia,g,l,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let x=f,_=d;x<_;x++)ia.fromBufferAttribute(u,x),Tu(ia,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Tu(i,t,e,n,s,r,a){let o=tc.distanceSqToPoint(i);if(o<e){let l=new L;tc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Zi=class extends je{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],a=[],o=new L,l=new de;for(let d=0;d<=t;d++){let x=d/t;s[d]=this.getTangentAt(x,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Oe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Oe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},yr=class extends mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ec=class extends yr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var sa=new L,Go=new Fc,Wo=new Fc,Xo=new Fc,nc=class extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(sa.subVectors(s[0],s[1]).add(s[0]),c=sa);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(sa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=sa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),x<1e-4&&(x=_),g<1e-4&&(g=_),Go.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,_,g),Wo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,_,g),Xo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,_,g)}else this.curveType==="catmullrom"&&(Go.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Wo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Xo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Go.calc(l),Wo.calc(l),Xo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function wu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Ax(i,t){let e=1-i;return e*e*t}function Rx(i,t){return 2*(1-i)*i*t}function Cx(i,t){return i*i*t}function mr(i,t,e,n){return Ax(i,t)+Rx(i,e)+Cx(i,n)}function Px(i,t){let e=1-i;return e*e*e*t}function Ix(i,t){let e=1-i;return 3*e*e*i*t}function Lx(i,t){return 3*(1-i)*i*i*t}function Dx(i,t){return i*i*i*t}function gr(i,t,e,n,s){return Px(i,t)+Ix(i,e)+Lx(i,n)+Dx(i,s)}var Ra=class extends mn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gr(t,s.x,r.x,a.x,o.x),gr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ic=class extends mn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gr(t,s.x,r.x,a.x,o.x),gr(t,s.y,r.y,a.y,o.y),gr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ca=class extends mn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sc=class extends mn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pa=class extends mn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(mr(t,s.x,r.x,a.x),mr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rc=class extends mn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(mr(t,s.x,r.x,a.x),mr(t,s.y,r.y,a.y),mr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(wu(o,l.x,c.x,h.x,u.x),wu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},Au=Object.freeze({__proto__:null,ArcCurve:ec,CatmullRomCurve3:nc,CubicBezierCurve:Ra,CubicBezierCurve3:ic,EllipseCurve:yr,LineCurve:Ca,LineCurve3:sc,QuadraticBezierCurve:Pa,QuadraticBezierCurve3:rc,SplineCurve:Ia}),ac=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Au[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Au[s.type]().fromJSON(s))}return this}},oc=class extends ac{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ca(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Pa(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ra(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ia(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new yr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},lc=class i extends _e{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Oe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new L,f=new rt,d=new L,x=new L,_=new L,g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(x)}for(let v=0;v<=e;v++){let S=n+v*h*s,y=Math.sin(S),D=Math.cos(S);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*y,u.y=t[R].y,u.z=t[R].x*D,a.push(u.x,u.y,u.z),f.x=v/e,f.y=R/(t.length-1),o.push(f.x,f.y);let I=l[3*R+0]*y,C=l[3*R+1],E=l[3*R+0]*D;c.push(I,C,E)}}for(let v=0;v<e;v++)for(let S=0;S<t.length-1;S++){let y=S+v*t.length,D=y,R=y+t.length,I=y+t.length+1,C=y+1;r.push(D,R,C),r.push(I,C,R)}this.setIndex(r),this.setAttribute("position",new Gt(a,3)),this.setAttribute("uv",new Gt(o,2)),this.setAttribute("normal",new Gt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Ji=class i extends lc{constructor(t=1,e=1,n=4,s=8){let r=new oc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Fs=class i extends _e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new L,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(o,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qt=class i extends _e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,_=[],g=n/2,p=0;v(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function v(){let y=new L,D=new L,R=0,I=(e-t)/n;for(let C=0;C<=r;C++){let E=[],M=C/r,U=M*(e-t)+t;for(let z=0;z<=s;z++){let H=z/s,$=H*l+o,Y=Math.sin($),w=Math.cos($);D.x=U*Y,D.y=-M*n+g,D.z=U*w,u.push(D.x,D.y,D.z),y.set(Y,I,w).normalize(),f.push(y.x,y.y,y.z),d.push(H,1-M),E.push(x++)}_.push(E)}for(let C=0;C<s;C++)for(let E=0;E<r;E++){let M=_[E][C],U=_[E+1][C],z=_[E+1][C+1],H=_[E][C+1];(t>0||E!==0)&&(h.push(M,U,H),R+=3),(e>0||E!==r-1)&&(h.push(U,z,H),R+=3)}c.addGroup(p,R,0),p+=R}function S(y){let D=x,R=new rt,I=new L,C=0,E=y===!0?t:e,M=y===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),x++;let U=x;for(let z=0;z<=s;z++){let $=z/s*l+o,Y=Math.cos($),w=Math.sin($);I.x=E*w,I.y=g*M,I.z=E*Y,u.push(I.x,I.y,I.z),f.push(0,M,0),R.x=Y*.5+.5,R.y=w*.5*M+.5,d.push(R.x,R.y),x++}for(let z=0;z<s;z++){let H=D+z,$=U+z;y===!0?h.push($,$+1,H):h.push($+1,$,H),C+=3}c.addGroup(p,C,y===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ze=class i extends qt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ks=class i extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(r.slice(),3)),this.setAttribute("uv",new Gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let S=new L,y=new L,D=new L;for(let R=0;R<e.length;R+=3)d(e[R+0],S),d(e[R+1],y),d(e[R+2],D),l(S,y,D,v)}function l(v,S,y,D){let R=D+1,I=[];for(let C=0;C<=R;C++){I[C]=[];let E=v.clone().lerp(y,C/R),M=S.clone().lerp(y,C/R),U=R-C;for(let z=0;z<=U;z++)z===0&&C===R?I[C][z]=E:I[C][z]=E.clone().lerp(M,z/U)}for(let C=0;C<R;C++)for(let E=0;E<2*(R-C)-1;E++){let M=Math.floor(E/2);E%2===0?(f(I[C][M+1]),f(I[C+1][M]),f(I[C][M])):(f(I[C][M+1]),f(I[C+1][M+1]),f(I[C+1][M]))}}function c(v){let S=new L;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(v),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let v=new L;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let y=g(v)/2/Math.PI+.5,D=p(v)/Math.PI+.5;a.push(y,1-D)}x(),u()}function u(){for(let v=0;v<a.length;v+=6){let S=a[v+0],y=a[v+2],D=a[v+4],R=Math.max(S,y,D),I=Math.min(S,y,D);R>.9&&I<.1&&(S<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),D<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,S){let y=v*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function x(){let v=new L,S=new L,y=new L,D=new L,R=new rt,I=new rt,C=new rt;for(let E=0,M=0;E<r.length;E+=9,M+=6){v.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),R.set(a[M+0],a[M+1]),I.set(a[M+2],a[M+3]),C.set(a[M+4],a[M+5]),D.copy(v).add(S).add(y).divideScalar(3);let U=g(D);_(R,M+0,v,U),_(I,M+2,S,U),_(C,M+4,y,U)}}function _(v,S,y,D){D<0&&v.x===1&&(a[S]=v.x-1),y.x===0&&y.z===0&&(a[S]=D/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ei=class i extends ks{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Bs=class i extends ks{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Mr=class i extends ks{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Nn=class i extends _e{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new L,x=new rt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let p=r+g/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),x.x=(d.x/e+1)/2,x.y=(d.y/e+1)/2,h.push(x.x,x.y)}u+=f}for(let _=0;_<s;_++){let g=_*(n+1);for(let p=0;p<n;p++){let v=p+g,S=v,y=v+n+1,D=v+n+2,R=v+1;o.push(S,y,R),o.push(y,D,R)}}this.setIndex(o),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var pe=class i extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,f=new L,d=[],x=[],_=[],g=[];for(let p=0;p<=n;p++){let v=[],S=p/n,y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let D=0;D<=e;D++){let R=D/e;u.x=-t*Math.cos(s+R*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(s+R*r)*Math.sin(a+S*o),x.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(R+y,1-S),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let S=h[p][v+1],y=h[p][v],D=h[p+1][v],R=h[p+1][v+1];(p!==0||a>0)&&d.push(S,y,R),(p!==n-1||l<Math.PI)&&d.push(y,D,R)}this.setIndex(d),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},La=class i extends ks{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Sn=class i extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){let _=x/s*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){let _=(s+1)*d+x-1,g=(s+1)*(d-1)+x-1,p=(s+1)*(d-1)+x,v=(s+1)*d+x;a.push(_,g,v),a.push(g,p,v)}this.setIndex(a),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Da=class extends fe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Lt=class extends ti{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wu,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ra(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ux(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Os=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cc=class extends Os{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wh:r=t,o=2*e-n;break;case Ah:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wh:a=t,l=2*n-e;break;case Ah:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-e)/(s-e),_=x*x,g=_*x,p=-f*g+2*f*_-f*x,v=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*x+1,S=(-1-d)*g+(1.5+d)*_+.5*x,y=d*g-d*_;for(let D=0;D!==o;++D)r[D]=p*a[h+D]+v*a[c+D]+S*a[l+D]+y*a[u+D];return r}},hc=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},uc=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},En=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ra(e,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ra(t.times,Array),values:ra(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ua:e=this.InterpolantFactoryMethodDiscrete;break;case Ll:e=this.InterpolantFactoryMethodLinear;break;case fo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ua;case this.InterpolantFactoryMethodLinear:return Ll;case this.InterpolantFactoryMethodSmooth:return fo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Ux(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let _=e[u+x];if(_!==e[f+x]||_!==e[d+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Ll;var Ki=class extends En{constructor(t,e,n){super(t,e,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=ua;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends En{};dc.prototype.ValueTypeName="color";var fc=class extends En{};fc.prototype.ValueTypeName="number";var pc=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Mi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ua=class extends En{InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}};Ua.prototype.ValueTypeName="quaternion";Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends En{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=ua;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var mc=class extends En{};mc.prototype.ValueTypeName="vector";var gc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],x=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},Nx=new gc,xc=class{constructor(t){this.manager=t!==void 0?t:Nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var zs=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Hs=class extends zs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},qo=new de,Ru=new L,Cu=new L,Na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ru.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ru),Cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cu),e.updateMatrixWorld(),qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Pu=new de,ur=new L,$o=new L,_c=class extends Na{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(ur),$o.copy(n.position),$o.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($o),n.updateMatrixWorld(),s.makeTranslation(-ur.x,-ur.y,-ur.z),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu)}},Ti=class extends zs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _c}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},vc=class extends Na{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new vc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Gs=class extends zs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Fa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Iu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Iu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Iu(){return performance.now()}var kc="\\[\\]\\.:\\/",Fx=new RegExp("["+kc+"]","g"),Bc="[^"+kc+"]",kx="[^"+kc.replace("\\.","")+"]",Bx=/((?:WC+[\/:])*)/.source.replace("WC",Bc),Ox=/(WCOD+)?/.source.replace("WCOD",kx),zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc),Hx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc),Vx=new RegExp("^"+Bx+Ox+zx+Hx+"$"),Gx=["material","materials","bones","map"],yc=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fx,"")}static parseTrackName(t){let e=Vx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=yc;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);var Ha={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Wx=new Ds(-1,1,1,-1,0,1),Oc=class extends _e{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}},Xx=new Oc,wi=class{constructor(t){this._mesh=new lt(Xx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Wx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Va=class extends ln{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof fe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Fn.clone(t.uniforms),this.material=new fe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new wi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Er=class extends ln{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ga=class extends ln{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Wa=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new rt);this._width=n.width,this._height=n.height,e=new Ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Va(Ha),this.copyPass.material.blending=Dn,this.clock=new Fa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Er!==void 0&&(a instanceof Er?n=!0:a instanceof Ga&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Xa=class extends ln{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new At}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var ed={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new At(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var qs=class i extends ln{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new rt(t.x,t.y):new rt(256,256),this.clearColor=new At(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ye(r,a,{type:Tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ye(r,a,{type:Tn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ye(r,a,{type:Tn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=ed;this.highPassUniforms=Fn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new fe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new rt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ha;this.copyUniforms=Fn.clone(h.uniforms),this.blendMaterial=new fe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:se,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new At,this.oldClearAlpha=1,this.basic=new Ae,this.fsQuad=new wi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new rt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new fe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new rt(.5,.5)},direction:{value:new rt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new fe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};qs.BlurDirectionX=new rt(1,0);qs.BlurDirectionY=new rt(0,1);var nd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var qa=class extends ln{constructor(){super();let t=nd;this.uniforms=Fn.clone(t.uniforms),this.material=new Da({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new wi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Sc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ec?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===br?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ac&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ei=.03333333333333333,gn=44,id=.7,zc=30,sd=.18;var Hc=20;var rd=5,Vc=[0,100,250,450,700],ad=6.5;var cn={ranger:{name:"Pemanah Arkana",desc:"Tembakan cepat jarak jauh",skillName:"Kilat",skillDesc:"Melesat cepat ke arah gerak",hp:100,speed:8.5,fireCd:.16,dmg:9,projSpeed:70,projLife:.7,pellets:1,spread:.015,splash:0,skill:"dash",skillCd:5,color:5104639},mage:{name:"Penyihir Bara",desc:"Bola api dengan ledakan area",skillName:"Nova",skillDesc:"Ledakan di sekeliling tubuh",hp:90,speed:7.5,fireCd:.7,dmg:34,projSpeed:32,projLife:1.6,pellets:1,spread:0,splash:3.5,skill:"nova",skillCd:9,color:16742958},guardian:{name:"Penjaga Rune",desc:"Sebaran rune jarak dekat, tubuh kuat",skillName:"Perisai",skillDesc:"Menahan 70% serangan selama 3 detik",hp:140,speed:7,fireCd:.75,dmg:8,projSpeed:55,projLife:.32,pellets:6,spread:.16,splash:0,skill:"shield",skillCd:10,color:10354538},priest:{name:"Haji Toriq",desc:"Penyembuh: memulihkan diri dan rekan",skillName:"Doa",skillDesc:"Pulihkan 35 HP untukmu dan rekan di dekatmu",hp:95,speed:8,fireCd:.4,dmg:13,projSpeed:45,projLife:.8,pellets:1,spread:.02,splash:0,skill:"heal",skillCd:9,color:16769658}},Gc=Object.keys(cn);var Wc=[],$a=(i,t,e,n,s)=>Wc.push({t:"cyl",x:i,z:t,r:e,h:n,kind:s}),$s=(i,t,e,n,s,r)=>Wc.push({t:"box",x:i,z:t,w:e,d:n,h:s,kind:r});$a(0,0,3.2,1.4,"altar");for(let i of[-1,1])for(let t of[-1,1])$a(i*13,t*13,1.3,9,"pillar"),$s(i*30,t*26,12,2,4.5,"wall"),$s(i*35,t*31,2,10,4.5,"wall"),$s(i*9,t*33,3,3,2.6,"block"),$s(i*33,t*9,3,3,2.6,"block");for(let i of[-1,1])$a(0,i*30,1.3,9,"pillar"),$a(i*28,0,1.3,9,"pillar"),$s(0,i*21,16,2,4,"wall"),$s(i*21,0,2,16,4,"wall");var Xc=Wc,qx=[[40,7],[-40,-7],[-7,40],[7,-40],[38,18],[38,-18],[-38,18],[-38,-18],[18,38],[-18,38],[18,-38],[-18,-38]],qc=[[12,0],[-12,0],[0,12],[0,-12],[39,39],[-39,39],[39,-39],[-39,-39]],Za={dm:"Deathmatch",koth:"Rebut Altar"},Tr=7.5;var Ai={dmg:{name:"Rune Amarah",desc:"damage +50%",color:16726862},spd:{name:"Rune Angin",desc:"kecepatan +35%",color:5096447}},$x=[{x:0,z:26,type:"dmg"},{x:0,z:-26,type:"dmg"},{x:18,z:18,type:"spd"},{x:-18,z:-18,type:"spd"}],od=.11;Za.tdm="Tim";Za.coop="Lawan Bot";var ld=["tdm","coop"];var hn=[{name:"Fajar",color:15910509},{name:"Senja",color:10513407}],$c=[],Ya=(i,t,e,n,s)=>$c.push({t:"cyl",x:i,z:t,r:e,h:n,kind:s}),Qi=(i,t,e,n,s,r)=>$c.push({t:"box",x:i,z:t,w:e,d:n,h:s,kind:r});Ya(0,0,2.6,2.2,"bell");for(let i of[-1,1])for(let t of[-1,1])Qi(i*31,t*13,12,4,5,"shed"),Qi(i*13,t*31,4,12,5,"shed"),Ya(i*24,t*24,.6,12,"mast"),Qi(i*16,t*15,3,3,2.4,"crate"),Qi(i*15,t*18.5,2.4,2.4,1.8,"crate"),Qi(i*35,t*33,4,9,1.7,"boat");for(let i of[-1,1])Qi(0,i*21,9,2.6,2.4,"crate"),Qi(i*21,0,2.6,9,2.4,"crate"),Ya(i*10.5,i*-10.5,.6,7,"post"),Ya(i*-10.5,i*-10.5,.6,7,"post");var ze={ruins:{name:"Reruntuhan Senja",obst:Xc,spawns:qx,orbs:qc,runes:$x},harbor:{name:"Pelabuhan Bulan",obst:$c,spawns:[[40,0],[-40,0],[0,40],[0,-40],[39,22],[39,-22],[-39,22],[-39,-22],[22,39],[-22,39],[22,-39],[-22,-39]],orbs:[[10,0],[-10,0],[0,10],[0,-10],[27,27],[-27,27],[27,-27],[-27,-27]],runes:[{x:0,z:30,type:"dmg"},{x:0,z:-30,type:"dmg"},{x:30,z:0,type:"spd"},{x:-30,z:0,type:"spd"}]}},tv=Object.keys(ze),Ri=[{id:"default",name:"Bawaan kelas",req:null},{id:"zamrud",name:"Zamrud",accent:2059082,req:{stat:"matches",n:5,text:"Selesaikan 5 ronde"}},{id:"senja",name:"Ungu Senja",accent:5974662,req:{stat:"kills",n:25,text:"25 kill total"}},{id:"bulan",name:"Perak Bulan",accent:11187916,glow:14674175,req:{stat:"wins",n:3,text:"Menang 3 ronde"}},{id:"naga",name:"Darah Naga",accent:7999260,glow:16726830,req:{stat:"kills",n:100,text:"100 kill total"}},{id:"raja",name:"Emas Raja",accent:12093738,glow:16766315,req:{stat:"wins",n:10,text:"Menang 10 ronde"}}];function cd(i,t){return!i.req||(t&&t[i.req.stat]||0)>=i.req.n}var Yc={eclipse:{name:"Gerhana",desc:"Arena gelap, jarak pandang pendek",dur:25},runerain:{name:"Hujan Rune",desc:"Semua rune muncul dan cepat kembali",dur:20},golden:{name:"Cawan Emas",desc:"Ambil cawan: HP penuh dan kedua rune",dur:30}},Zc=100,Jc={ranger:{name:"Hujan Panah",desc:"11 panah menyebar sekaligus"},mage:{name:"Meteor",desc:"Meteor jatuh di depan, ledakan besar"},guardian:{name:"Benteng Rune",desc:"Perisai 5 dtk, pulih 50% HP, gelombang kejut"},priest:{name:"Cahaya Fajar",desc:"Rekan pulih penuh dan yang tumbang bangkit; lawan di dekatmu terluka"}};Ri.push({id:"fajar",name:"Bintang Fajar",accent:14248250,glow:16756848,req:{stat:"chal",n:3,text:"Selesaikan 3 tantangan harian"}},{id:"malam",name:"Bayangan Malam",accent:1448494,glow:8057087,req:{stat:"chal",n:10,text:"Selesaikan 10 tantangan harian"}});Za.pve="Bertahan Bersama";var kn={ghoul:{name:"Hantu Rawa",hp:30,speed:6.2,color:8257418,melee:{dmg:6,cd:1.1,r:1.9}},caster:{name:"Dukun Bayang",hp:38,speed:5.4,color:13134847,range:18,fireCd:1.5,dmg:15,projSpeed:30,projLife:1.6,pellets:1,spread:.04,splash:0,skill:"none",skillCd:99},brute:{name:"Golem Batu",hp:260,speed:4,color:16752704,boss:!0,melee:{dmg:16,cd:1.6,r:2.8},slam:{dmg:18,r:5.5,cd:7}}},ni={...cn,...kn},wr={breakTime:6,cap:22,bossEvery:5,winWave:10,diffMul:{easy:.55,normal:.75,hard:1.15}};Object.assign(wr,{windup:.45,reviveTime:3,reviveR:2.4,spareDelay:4,allies:3,checkpointEvery:5,perkBreak:12});var Ci={tajam:{name:"Tajam",desc:"Damage +15%"},cepat:{name:"Cepat",desc:"Kecepatan tembak +12%"},vampir:{name:"Vampir",desc:"Pulih 12% dari damage yang diberikan"},kokoh:{name:"Kokoh",desc:"HP maksimal +25"},lincah:{name:"Lincah",desc:"Kecepatan lari +10%"},fokus:{name:"Fokus",desc:"Jeda skill -20%"},amarah:{name:"Amarah",desc:"Pengukur pamungkas terisi 40% lebih cepat"},ganda:{name:"Ganda",desc:"Tambahan 1 peluru setiap tembakan"},ledak:{name:"Ledak",desc:"Musuh yang tumbang meledak (damage area)"},pulih:{name:"Pulih",desc:"HP mulai pulih 1 dtk lebih cepat, +4 per dtk"}},ev=Object.keys(Ci);Object.assign(kn,{frost:{name:"Penyihir Es",hp:34,speed:5.2,color:8378623,range:17,slow:!0,fireCd:1.9,dmg:10,projSpeed:26,projLife:1.7,pellets:1,spread:.04,splash:0,skill:"none",skillCd:99},spiderling:{name:"Anak Laba-laba",hp:14,speed:8.2,color:16735610,melee:{dmg:4,cd:.9,r:1.6}},queen:{name:"Ratu Laba-laba",hp:300,speed:4.6,color:16723546,boss:!0,melee:{dmg:14,cd:1.4,r:2.8},summon:{cd:7,n:2,max:6}}});Object.assign(ni,cn,kn);ze.ruins.barrels=[];ze.harbor.barrels=[[19,7],[-19,-7],[7,-19],[-7,19],[26,20],[-26,-20]];var Ys={giant:{name:"Raksasa",desc:"Semua besar: HP +60%, gerak lebih lambat"},meteor:{name:"Hujan Meteor",desc:"Meteor jatuh di dekat pemain; lihat lingkaran merah"},oneshot:{name:"Tembakan Maut",desc:"Damage x3, tembakan lebih jarang"},mage:{name:"Hanya Penyihir",desc:"Semua bermain sebagai Penyihir Bara"}},Kc=["Tolong!","Ke sini!","Bagus!"],jc=[{id:"k100",name:"Pembasmi",text:"100 kill",stat:"kills",n:100},{id:"w10",name:"Juara",text:"Menang 10 ronde",stat:"wins",n:10},{id:"wave5",name:"Penakluk Golem",text:"Selesaikan gelombang 5",stat:"bestWave",n:5},{id:"wave10",name:"Pembasmi Ratu",text:"Selesaikan gelombang 10",stat:"bestWave",n:10},{id:"rev10",name:"Penolong",text:"Tolong rekan 10 kali",stat:"revives",n:10},{id:"bnt5",name:"Pemburu Hadiah",text:"Tumbangkan 5 buronan",stat:"bounties",n:5},{id:"chal7",name:"Rajin",text:"Selesaikan 7 tantangan harian",stat:"chal",n:7}];Za.king="Perburuan Raja";var nv={bossRush:"Bos setiap 3 gelombang",doublePerk:"Dua berkah tiap gelombang",giant:Ys.giant.name,meteor:Ys.meteor.name,oneshot:Ys.oneshot.name,mage:Ys.mage.name};Ri.push({id:"golem",name:"Batu Golem",accent:7036242,glow:16747050,req:{stat:"ev_golem",n:1,text:"Capai target event Malam Golem"}},{id:"mahkota",name:"Jubah Mahkota",accent:5902384,glow:16765514,req:{stat:"ev_raja",n:1,text:"Capai target event Perburuan Raja"}});jc.push({id:"ev3",name:"Tamu Setia",text:"Hadir di 3 event",stat:"evAttend",n:3});var Ar=ze.ruins.obst;function hd(i){Ar=(ze[i]||ze.ruins).obst}function Yx(i,t){for(let e=0;e<2;e++){let n=gn-t;i.x>n?i.x=n:i.x<-n&&(i.x=-n),i.z>n?i.z=n:i.z<-n&&(i.z=-n);for(let s=0;s<Ar.length;s++){let r=Ar[s];if(r.t==="cyl"){let a=i.x-r.x,o=i.z-r.z,l=r.r+t,c=a*a+o*o;if(c<l*l){let h=Math.sqrt(c);h<1e-6&&(a=1,o=0,h=1),i.x=r.x+a/h*l,i.z=r.z+o/h*l}}else{let a=r.w/2,o=r.d/2,l=Math.max(r.x-a,Math.min(i.x,r.x+a)),c=Math.max(r.z-o,Math.min(i.z,r.z+o)),h=i.x-l,u=i.z-c,f=h*h+u*u;if(f<t*t)if(f>1e-10){let d=Math.sqrt(f);i.x=l+h/d*t,i.z=c+u/d*t}else{let d=a-Math.abs(i.x-r.x),x=o-Math.abs(i.z-r.z);d<x?i.x=r.x+Math.sign(i.x-r.x||1)*(a+t):i.z=r.z+Math.sign(i.z-r.z||1)*(o+t)}}}}}function Qc(i,t,e,n){i.yaw=t.y;let s=t.mx,r=t.mz,a=Math.hypot(s,r);a>1&&(s/=a,r/=a),i.skillCd>0&&(i.skillCd=Math.max(0,i.skillCd-n));let o=!1;if(t.k&&i.skillCd<=0&&(i.skillCd=e.skillCd,o=!0,e.skill==="dash"&&(i.dashT=sd,a>.2?(i.dx=t.mx/a,i.dz=t.mz/a):(i.dx=Math.sin(i.yaw),i.dz=Math.cos(i.yaw)))),i.dashT>0)i.x+=i.dx*zc*n,i.z+=i.dz*zc*n,i.dashT=Math.max(0,i.dashT-n);else{let l=e.speed*(i.spd||1);i.x+=s*l*n,i.z+=r*l*n}return Yx(i,id),o}function Pi(i,t,e){let n=gn-e;if(i>n||i<-n||t>n||t<-n)return!0;for(let s=0;s<Ar.length;s++){let r=Ar[s];if(r.t==="cyl"){let a=i-r.x,o=t-r.z,l=r.r+e;if(a*a+o*o<l*l)return!0}else if(Math.abs(i-r.x)<r.w/2+e&&Math.abs(t-r.z)<r.d/2+e)return!0}return!1}function ud(i,t,e,n){let s=e-i,r=n-t,a=Math.hypot(s,r),o=Math.ceil(a/.7);for(let l=1;l<o;l++){let c=l/o;if(Pi(i+s*c,t+r*c,.1))return!1}return!0}function Zs(i,t){let e=(i-t)%(Math.PI*2);return e>Math.PI?e-=Math.PI*2:e<-Math.PI&&(e+=Math.PI*2),e}var dd=new L(-.62,.4,-.68).normalize();function Ii(i){let t=i;return()=>((t=t*16807%2147483647)-1)/2147483646}function Li(i,t,e){let n=document.createElement("canvas");n.width=n.height=i,t(n.getContext("2d"),i);let s=new Zi(n);return s.colorSpace=Fe,e&&(s.wrapS=s.wrapT=xr,s.repeat.set(e,e)),s.anisotropy=4,s}function Zx(){return Li(128,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(.6,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)})}function Jx(){let i=Ii(7);return Li(256,(t,e)=>{t.fillStyle="#8e879a",t.fillRect(0,0,e,e);let n=4,s=e/n;for(let r=0;r<n;r++){let a=r%2*32;for(let o=-1;o<4;o++){let l=128+i()*50;t.fillStyle=`rgb(${l+8},${l},${l+16})`,t.fillRect(o*64+a+2,r*s+2,60,s-4)}}for(let r=0;r<2600;r++){let a=i()<.5?0:255;t.fillStyle=`rgba(${a},${a},${a},${.03+i()*.05})`,t.fillRect(i()*e,i()*e,1+i()*2,1+i()*2)}for(let r=0;r<22;r++)t.fillStyle=`rgba(70,${110+i()*40},70,0.16)`,t.beginPath(),t.arc(i()*e,i()*e,6+i()*16,0,7),t.fill()},1)}function Kx(){let i=Ii(21);return Li(512,(t,e)=>{t.fillStyle="#4c5a3c",t.fillRect(0,0,e,e);for(let n=0;n<420;n++){let s=i()*e,r=i()*e,a=14+i()*30,o=96+i()*50;t.fillStyle=`rgba(${o+14},${o+8},${o+20},${.5+i()*.4})`,t.beginPath(),t.ellipse(s,r,a,a*(.6+i()*.4),i()*3,0,7),t.fill();for(let[l,c]of[[e,0],[-e,0],[0,e],[0,-e]])t.beginPath(),t.ellipse(s+l,r+c,a,a*.8,0,0,7),t.fill()}for(let n=0;n<5e3;n++)t.fillStyle=`rgba(${60+i()*50},${120+i()*80},${50+i()*30},${.22+i()*.25})`,t.fillRect(i()*e,i()*e,2,2+i()*3)},22)}function jx(){let i=Ii(99);return Li(512,(t,e)=>{let n=e/2;t.strokeStyle="#8fefff",t.lineCap="round";for(let[s,r]of[[240,5],[222,2],[150,4],[92,2],[60,3]])t.lineWidth=r,t.beginPath(),t.arc(n,n,s,0,7),t.stroke();t.lineWidth=3;for(let s=0;s<24;s++){let r=s/24*Math.PI*2;t.save(),t.translate(n+Math.cos(r)*186,n+Math.sin(r)*186),t.rotate(r+Math.PI/2),t.beginPath();for(let a=0;a<4;a++)t.lineTo((i()-.5)*22,(i()-.5)*30);t.stroke(),t.restore()}t.lineWidth=2.5;for(let s=0;s<2;s++){t.beginPath();for(let r=0;r<=4;r++){let a=r/4*Math.PI*2+s*Math.PI/4;t.lineTo(n+Math.cos(a)*150,n+Math.sin(a)*150)}t.stroke()}})}function Qx(){let i=Ii(5);return Li(128,(e,n)=>{for(let s=0;s<13;s++){let r=n*(.3+i()*.4),a=(i()-.5)*n*.75,o=n*(.45+i()*.5),l=5+i()*5,c=e.createLinearGradient(0,n,0,n-o);c.addColorStop(0,"#2f5a2a"),c.addColorStop(1,`hsl(${85+i()*30},60%,${50+i()*20}%)`),e.fillStyle=c,e.beginPath(),e.moveTo(r-l,n),e.quadraticCurveTo(r+a*.3,n-o*.6,r+a,n-o),e.quadraticCurveTo(r+a*.4,n-o*.5,r+l,n),e.closePath(),e.fill()}})}function t_(){let i=[],t=[],e=[],n=[];for(let r=0;r<2;r++){let a=Math.cos(r*Math.PI/2+.4)*.5,o=Math.sin(r*Math.PI/2+.4)*.5,l=r*4;i.push(-a,0,-o,a,0,o,a,.75,o,-a,.75,-o),t.push(0,0,1,0,1,1,0,1),e.push(0,1,0,0,1,0,0,1,0,0,1,0),n.push(l,l+1,l+2,l,l+2,l+3,l,l+2,l+1,l,l+3,l+2)}let s=new _e;return s.setAttribute("position",new Gt(i,3)),s.setAttribute("uv",new Gt(t,2)),s.setAttribute("normal",new Gt(e,3)),s.setIndex(n),s}function e_(){let i=[],t=[],e=[],n=0;for(let[r,a,o]of[[3,4.2,-2.2],[2.3,3.8,.2],[1.5,3.4,2.6]]){let l=new Ze(r,a,7);l.translate(0,o,0),i.push(...l.attributes.position.array),t.push(...l.attributes.normal.array);for(let c of l.index.array)e.push(c+n);n+=l.attributes.position.count}let s=new _e;return s.setAttribute("position",new Gt(i,3)),s.setAttribute("normal",new Gt(t,3)),s.setIndex(e),s}function fd(i){let t=new kt;i.add(t);let e=Ii(1234),n=Zx(),s=Jx(),r=new Lt({map:s,roughness:.92,metalness:.02}),a=new Lt({map:s,color:11577020,roughness:.95}),o={root:t,glowTex:n,orbs:[],spin:[],grass:null,sun:null,pointLights:[]};o.fog=new Us(7029872,.006);let l=new lt(new pe(600,32,16),new fe({side:ke,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:dd}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 sunDir;
        float hash(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float h=d.y;
          vec3 hor=vec3(1.0,0.48,0.26), mid=vec3(0.42,0.17,0.45), top=vec3(0.035,0.05,0.16);
          vec3 c=mix(hor,mid,smoothstep(-0.02,0.22,h)); c=mix(c,top,smoothstep(0.16,0.75,h));
          float s=max(dot(d,sunDir),0.0);
          c+=vec3(1.0,0.55,0.25)*pow(s,6.0)*0.55 + vec3(1.0,0.85,0.6)*pow(s,220.0)*4.0;
          vec3 g=floor(d*220.0); float st=step(0.9972,hash(g));
          c+=vec3(0.9,0.95,1.0)*st*smoothstep(0.25,0.7,h)*(0.6+0.4*hash(g+1.0));
          gl_FragColor=vec4(c,1.0); }`}));l.renderOrder=-10,l.frustumCulled=!1,t.add(l),o.sky=l,t.add(new Hs(9676021,5915216,1.55)),t.add(new Gs(9404341,.75));let c=new Vs(16758912,3.6);c.castShadow=!0,c.shadow.mapSize.set(1024,1024);let h=c.shadow.camera;h.left=-34,h.right=34,h.top=34,h.bottom=-34,h.near=1,h.far=160,c.shadow.bias=-6e-4,c.shadow.normalBias=.04,t.add(c,c.target),o.sun=c;let u=new lt(new Qe(440,440),new Lt({map:Kx(),roughness:.96}));u.material.map.repeat.set(60,60),u.rotation.x=-Math.PI/2,u.receiveShadow=!0,t.add(u);let f=new lt(new Qe(22,22),new Ae({map:jx(),transparent:!0,blending:se,depthWrite:!1,opacity:.75}));f.rotation.x=-Math.PI/2,f.position.y=.04,t.add(f),o.rune=f;let d=A=>(A.castShadow=!0,A.receiveShadow=!0,A),x=A=>new Lt({color:A,emissive:A,emissiveIntensity:1.8,roughness:.25,metalness:.1});function _(A,q,V,j,ot,Et){let K=new kt,nt=new lt(new Mr(j,0),x(ot));nt.scale.y=1.9,K.add(nt);let xt=new Be(new Ue({map:n,color:ot,blending:se,depthWrite:!1,transparent:!0,opacity:.7}));if(xt.scale.setScalar(j*7),K.add(xt),K.position.set(A,q,V),t.add(K),o.spin.push({g:K,y:q,sp:.5+e()*.6,ph:e()*6}),Et){let ut=new Ti(ot,Et,34,1.6);ut.position.set(A,q,V),t.add(ut),o.pointLights.push(ut)}return K}for(let A of Xc)if(A.kind==="altar"){for(let[q,V,j]of[[3.2,.5,.25],[2.6,.5,.75],[2,.4,1.2]]){let ot=d(new lt(new qt(q,q+.15,V,8),r));ot.position.set(A.x,j,A.z),t.add(ot)}_(A.x,4.2,A.z,1,5826303,90)}else if(A.kind==="pillar"){let q=e()<.4,V=q?4+e()*3:A.h,j=d(new lt(new ee(A.r*2.5,.7,A.r*2.5),r));j.position.set(A.x,.35,A.z),t.add(j);let ot=d(new lt(new qt(A.r*.82,A.r*.95,V,10),r));if(ot.position.set(A.x,.7+V/2,A.z),ot.rotation.z=q?(e()-.5)*.05:0,t.add(ot),!q){let Et=d(new lt(new ee(A.r*2.6,.6,A.r*2.6),r));Et.position.set(A.x,.7+V+.3,A.z),t.add(Et),_(A.x,.7+V+1.6,A.z,.38,16734929,0)}}else if(A.kind==="wall"){let q=d(new lt(new ee(A.w,A.h,A.d),r));q.position.set(A.x,A.h/2,A.z),t.add(q);let V=A.w>A.d,j=V?A.w:A.d,ot=Math.floor(j/2);for(let Et=0;Et<ot;Et++){if(e()<.3)continue;let K=.5+e()*.9,nt=-j/2+1+Et*2,xt=d(new lt(new ee(V?1.2:A.w,K,V?A.d:1.2),r));xt.position.set(A.x+(V?nt:0),A.h+K/2,A.z+(V?0:nt)),t.add(xt)}}else{let q=d(new lt(new ee(A.w,A.h,A.d),a));q.position.set(A.x,A.h/2,A.z),q.rotation.y=0,t.add(q);let V=d(new lt(new ee(A.w*.6,.7,A.d*.6),r));V.position.set(A.x+.3,A.h+.35,A.z-.2),V.rotation.y=.5,t.add(V)}for(let A of[-1,1])_(0,5.6,A*21,.5,16757310,30),_(A*21,5.6,0,.5,16757310,30);let g=gn+1.5;for(let[A,q,V,j]of[[0,g,2*g+3,3],[0,-g,2*g+3,3],[g,0,3,2*g+3],[-g,0,3,2*g+3]]){let ot=d(new lt(new ee(V,6,j),a));ot.position.set(A,3,q),t.add(ot)}let p=new Lt({color:4861278,roughness:.8});for(let A of[-1,1])for(let q of[-1,1]){let V=d(new lt(new qt(4,4.6,12,10),a));V.position.set(A*g,6,q*g),t.add(V);let j=d(new lt(new Ze(5,6,10),p));j.position.set(A*g,15,q*g),t.add(j),_(A*g,19.5,q*g,.6,5826303,0)}let v=new Lt({color:4863334,roughness:1,flatShading:!0});for(let A=0;A<30;A++){let q=A/30*Math.PI*2+e()*.2,V=200+e()*90,j=45+e()*70,ot=new Ze(70+e()*50,j,9,4),Et=ot.attributes.position;for(let nt=0;nt<Et.count;nt++){let xt=(.5-Et.getY(nt)/j)*26;Et.setX(nt,Et.getX(nt)+(e()-.5)*xt),Et.setZ(nt,Et.getZ(nt)+(e()-.5)*xt),Et.setY(nt,Et.getY(nt)+(e()-.5)*xt*.5)}ot.computeVertexNormals();let K=new lt(ot,v);K.position.set(Math.cos(q)*V,j/2-6,Math.sin(q)*V),K.rotation.y=e()*6,t.add(K)}let S=150,y=new Ce,D=new Ns(new qt(.35,.5,4,6),new Lt({color:3877418,roughness:1}),S),R=new Ns(e_(),new Lt({color:16777215,roughness:1,flatShading:!0}),S);for(let A=0;A<S;A++){let q,V;do q=(e()-.5)*220,V=(e()-.5)*220;while(Math.abs(q)<g+9&&Math.abs(V)<g+9);let j=.8+e()*1.3;y.position.set(q,2*j,V),y.scale.setScalar(j),y.rotation.set(0,e()*6,0),y.updateMatrix(),D.setMatrixAt(A,y.matrix),y.position.y=7*j,y.updateMatrix(),R.setMatrixAt(A,y.matrix),R.setColorAt(A,new At().setHSL(.38+e()*.1,.45,.1+e()*.09))}t.add(D,R);let I=new Ei(.5,0);for(let A=0;A<60;A++){let q=(e()-.5)*84,V=(e()-.5)*84;if(Pi(q,V,1.2)||Math.hypot(q,V)<12)continue;let j=d(new lt(I,a)),ot=.3+e()*.5;j.scale.set(ot,ot*.6,ot),j.position.set(q,ot*.15,V),j.rotation.set(e()*3,e()*3,0),t.add(j)}let C=4200,E=t_(),M=new Ns(E,new Lt({map:Qx(),alphaTest:.45,roughness:1}),C),U=new At;for(let A=0;A<C;A++){let q=(e()-.5)*86,V=(e()-.5)*86,j=q+(e()-.5)*2.5,ot=V+(e()-.5)*2.5,Et=Pi(j,ot,.3)?0:.7+e()*1.1;y.position.set(j,0,ot),y.scale.set(Et,Et,Et),y.rotation.set(0,e()*6,0),y.updateMatrix(),M.setMatrixAt(A,y.matrix),M.setColorAt(A,U.setHSL(.22+e()*.12,.5,.42+e()*.25))}M.receiveShadow=!0,t.add(M),o.grass=M,o.grassMax=C;let z=260,H=new Float32Array(z*3),$=new Float32Array(z);for(let A=0;A<z;A++)H[A*3]=(e()-.5)*96,H[A*3+1]=.6+e()*7,H[A*3+2]=(e()-.5)*96,$[A]=e()*100;let Y=new _e;Y.setAttribute("position",new Te(H,3)),Y.setAttribute("ph",new Te($,1));let w=new Si(Y,new fe({transparent:!0,depthWrite:!1,blending:se,uniforms:{time:{value:0},scale:{value:400}},vertexShader:`attribute float ph; uniform float time; uniform float scale; varying float vA;
      void main(){ vec3 p=position; p.x+=sin(time*0.4+ph)*1.6; p.y+=sin(time*0.7+ph*1.7)*0.7; p.z+=cos(time*0.33+ph*1.3)*1.6;
        vA=0.45+0.55*sin(time*2.0+ph*3.0); vec4 mv=modelViewMatrix*vec4(p,1.0);
        gl_PointSize=scale*0.24/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying float vA; void main(){ float d=length(gl_PointCoord-0.5);
      gl_FragColor=vec4(vec3(1.0,0.86,0.45)*2.0, smoothstep(0.5,0.0,d)*vA); }`}));w.frustumCulled=!1,t.add(w),o.flies=w;let Z=new Lt({color:5898140,emissive:3014527,emissiveIntensity:3,roughness:.2});for(let[A,q]of qc){let V=new kt;V.add(new lt(new Bs(.42,1),Z));let j=new Be(new Ue({map:n,color:5898140,blending:se,depthWrite:!1,transparent:!0,opacity:.8}));j.scale.setScalar(3.2),V.add(j);let ot=new lt(new Nn(.9,1.1,24),new Ae({color:5898140,transparent:!0,opacity:.5,blending:se,depthWrite:!1,side:xe}));ot.rotation.x=-Math.PI/2,ot.position.y=-1.15,V.add(ot),V.position.set(A,1.2,q),t.add(V),o.orbs.push(V)}return o.update=(A,q,V)=>{c.target.position.set(q.x,0,q.z),c.position.copy(c.target.position).addScaledVector(dd,80),l.position.set(q.x,0,q.z),w.material.uniforms.time.value=A,f.material.opacity=.55+.25*Math.sin(A*1.3),f.rotation.z=A*.05;for(let j of o.spin)j.g.rotation.y=A*j.sp,j.g.position.y=j.y+Math.sin(A*1.2+j.ph)*.25;for(let j=0;j<o.orbs.length;j++){let ot=o.orbs[j];ot.visible=!!(V&1<<j),ot.position.y=1.2+Math.sin(A*2+j)*.18,ot.rotation.y=A*1.5}},o}function th(i,t,e,n,s){let r=e.map(u=>{let f=n[u.type],d=new kt,x=new Lt({color:f.color,emissive:f.color,emissiveIntensity:2.4,roughness:.3}),_=new lt(u.type==="dmg"?new La(.5,0):new Mr(.45,0),x);_.castShadow=!0,d.add(_);let g=new Be(new Ue({map:t,color:f.color,blending:se,depthWrite:!1,transparent:!0,opacity:.85}));g.scale.setScalar(3),d.add(g);let p=new lt(new Nn(.8,1.15,6),new Ae({color:f.color,transparent:!0,opacity:.55,blending:se,depthWrite:!1,side:xe}));return p.rotation.x=-Math.PI/2,p.position.y=-1.15,d.add(p),d.position.set(u.x,1.2,u.z),i.add(d),{g:d,gem:_,base:p}}),a=new Ae({color:16777215,transparent:!0,opacity:.5,blending:se,depthWrite:!1,side:xe}),o=new lt(new Nn(s-.35,s,72),a);o.rotation.x=-Math.PI/2,o.position.y=.06,o.visible=!1,i.add(o);let l=new Ae({color:16777215,transparent:!0,opacity:.12,blending:se,depthWrite:!1,side:xe}),c=new lt(new qt(s,s,6,48,1,!0),l);c.position.y=3,c.visible=!1,i.add(c);let h={0:16773840,mine:15910509,other:16731486,contest:12020735};return{update(u,f,d,x,_){r.forEach((p,v)=>{p.g.visible=!!(f&1<<v),p.gem.rotation.y=u*2+v,p.gem.rotation.x=u*1.3,p.g.position.y=1.2+Math.sin(u*2.4+v)*.2,p.base.rotation.z=u*.8});let g=d==="koth";if(o.visible=c.visible=g,g){let p=x===0?h[0]:x===-1?h.contest:x===_?h.mine:h.other;a.color.setHex(p),l.color.setHex(p),a.opacity=.45+.25*Math.sin(u*(x?6:2)),l.opacity=x?.16:.07}}}}var eh=new L(.55,.5,-.67).normalize();function n_(){let i=Ii(77);return Li(256,(t,e)=>{t.fillStyle="#3a2a22",t.fillRect(0,0,e,e);let n=8,s=e/n;for(let r=0;r<n;r++){let a=70+i()*35;t.fillStyle=`rgb(${a+20},${a},${a-18})`,t.fillRect(0,r*s+1,e,s-2);for(let l=0;l<14;l++){t.strokeStyle=`rgba(30,18,10,${.15+i()*.2})`,t.lineWidth=1;let c=r*s+2+i()*(s-4);t.beginPath(),t.moveTo(0,c),t.bezierCurveTo(e*.3,c+(i()-.5)*3,e*.6,c+(i()-.5)*3,e,c),t.stroke()}let o=i()*e;t.fillStyle="rgba(15,8,5,0.8)",t.fillRect(o,r*s,2,s),t.fillStyle="rgba(160,160,170,0.6)",t.fillRect(o-6,r*s+s/2-1,2,2),t.fillRect(o+6,r*s+s/2-1,2,2)}},1)}function i_(){return Li(128,(i,t)=>{i.fillStyle="#7a5532",i.fillRect(0,0,t,t),i.fillStyle="#5c3d22";for(let e=0;e<4;e++)i.fillRect(0,e*32+30,t,3);i.lineWidth=10,i.strokeStyle="#4a2f18",i.strokeRect(5,5,t-10,t-10),i.beginPath(),i.moveTo(10,10),i.lineTo(t-10,t-10),i.stroke()},1)}function pd(i,t){let e=Ii(4321),n=new kt;i.add(n);let s={root:n,glowTex:t,orbs:[],spin:[],grass:null,grassMax:0,sun:null,pointLights:[]};s.fog=new Us(1450815,.0085);let r=new lt(new pe(600,32,16),new fe({side:ke,depthWrite:!1,fog:!1,uniforms:{moon:{value:eh}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 moon;
        float hash(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float h=d.y;
          vec3 c=mix(vec3(0.12,0.2,0.33),vec3(0.03,0.05,0.12),smoothstep(-0.02,0.5,h));
          float m=max(dot(d,moon),0.0);
          c+=vec3(0.55,0.65,0.85)*pow(m,18.0)*0.5 + vec3(1.0,0.97,0.88)*smoothstep(0.9985,0.9992,m)*2.2;
          vec3 g=floor(d*260.0); float st=step(0.9965,hash(g));
          c+=vec3(0.85,0.9,1.0)*st*smoothstep(0.1,0.6,h)*(0.4+0.6*hash(g+2.0))*(1.0-smoothstep(0.98,0.995,m));
          gl_FragColor=vec4(c,1.0); }`}));r.renderOrder=-10,r.frustumCulled=!1,n.add(r),n.add(new Hs(9414892,3811888,1.7)),n.add(new Gs(6978218,.8));let a=new Vs(11453695,1.9);a.castShadow=!0,a.shadow.mapSize.set(1024,1024);let o=a.shadow.camera;o.left=-34,o.right=34,o.top=34,o.bottom=-34,o.near=1,o.far=160,a.shadow.bias=-6e-4,a.shadow.normalBias=.04,n.add(a,a.target),s.sun=a;let l=n_();l.repeat.set(24,24);let c=new lt(new Qe(gn*2+4,gn*2+4),new Lt({map:l,roughness:.85,color:13154480}));c.rotation.x=-Math.PI/2,c.receiveShadow=!0,n.add(c);let h=new lt(new Qe(900,900,1,1),new fe({fog:!0,uniforms:Fn.merge([ht.fog,{time:{value:0},moon:{value:eh}}]),vertexShader:`varying vec3 vW;
#include <fog_pars_vertex>
        void main(){ vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz; vec4 mvPosition=viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
#include <fog_vertex>
        }`,fragmentShader:`varying vec3 vW; uniform float time; uniform vec3 moon;
#include <fog_pars_fragment>
        void main(){ float w=sin(vW.x*0.35+time*1.2)*0.5+sin(vW.z*0.27-time*0.9)*0.5+sin((vW.x+vW.z)*0.9+time*2.3)*0.25;
          vec3 c=vec3(0.03,0.07,0.13)+vec3(0.02,0.05,0.08)*w;
          float glint=pow(max(0.0,sin(vW.x*1.7+time*3.0)*sin(vW.z*1.3-time*2.0)),24.0);
          float path=exp(-pow((vW.x*moon.z-vW.z*moon.x)*0.03,2.0)); // jejak cahaya bulan di air
          c+=vec3(0.75,0.82,1.0)*glint*(0.25+1.2*path);
          gl_FragColor=vec4(c,1.0);
#include <fog_fragment>
        }`}));h.rotation.x=-Math.PI/2,h.position.y=-.6,n.add(h),s.water=h;let u=new Lt({color:6120048,roughness:.95}),f=new Lt({map:l,color:9071192,roughness:.9}),d=new Lt({color:3877412,roughness:.9}),x=new Lt({map:i_(),roughness:.85}),_=new Lt({color:2898514,roughness:.8,flatShading:!0}),g=new Lt({color:9402954,roughness:.35,metalness:.9}),p=w=>(w.castShadow=!0,w.receiveShadow=!0,w),v=(w,Z,A,q,V)=>{let j=p(new lt(w,Z));return j.position.set(A,q,V),n.add(j),j},S=gn+1;for(let[w,Z,A,q]of[[0,S,2*S+2,2],[0,-S,2*S+2,2],[S,0,2,2*S+2],[-S,0,2,2*S+2]])v(new ee(A,1.4,q),u,w,.2,Z);for(let w=-40;w<=40;w+=10)for(let[Z,A]of[[w,S],[w,-S],[S,w],[-S,w]])v(new qt(.35,.45,1.2,8),d,Z,1.3,A);let y=(w,Z,A,q)=>{let V=new kt;V.add(p(new lt(new ee(.4,.55,.4),g)));let j=new lt(new ee(.3,.4,.3),new Lt({color:16757596,emissive:16751162,emissiveIntensity:3}));V.add(j);let ot=new Be(new Ue({map:t,color:16752704,blending:se,depthWrite:!1,transparent:!0,opacity:.85}));if(ot.scale.setScalar(4),V.add(ot),V.position.set(w,Z,A),n.add(V),q){let Et=new Ti(16751173,28,24,1.6);Et.position.set(w,Z,A),n.add(Et),s.pointLights.push(Et)}s.spin.push({flick:ot,ph:e()*10})};for(let w of ze.harbor.obst)if(w.kind==="bell"){v(new qt(w.r,w.r+.3,w.h,10),u,w.x,w.h/2,w.z);for(let[q,V]of[[1,1],[1,-1],[-1,1],[-1,-1]])v(new ee(.35,4.2,.35),d,w.x+q*1.5,w.h+2.1,w.z+V*1.5);let Z=v(new Ze(2.8,2,4),_,w.x,w.h+5.2,w.z);Z.rotation.y=Math.PI/4;let A=v(new qt(.5,1,1.4,16,1,!0),g,w.x,w.h+3,w.z);A.material.side=xe,s.bell=A,y(w.x,w.h+1.6,w.z+1.9,!1),y(w.x,w.h+1.6,w.z-1.9,!1)}else if(w.kind==="shed"){v(new ee(w.w,w.h,w.d),f,w.x,w.h/2,w.z);let Z=w.w>w.d,A=new lt(new qt(.01,(Z?w.d:w.w)*.75,Z?w.w+.6:w.d+.6,3,1),_);A.rotation.set(Z?0:Math.PI/2,0,Z?Math.PI/2:0),Z?A.rotation.set(0,0,Math.PI/2):A.rotation.set(Math.PI/2,0,0),A.scale.set(1,1,.55),A.position.set(w.x,w.h+.9,w.z),p(A),n.add(A);for(let q=-1;q<=1;q+=2){let V=new lt(new Qe(1.6,2.6),new Lt({color:1708040,emissive:3809032,emissiveIntensity:.8}));Z?(V.position.set(w.x+q*w.w/4,1.3,w.z+Math.sign(w.z||1)*-(w.d/2+.02)),V.rotation.y=w.z>0?Math.PI:0):(V.position.set(w.x+Math.sign(w.x||1)*-(w.w/2+.02),1.3,w.z+q*w.d/4),V.rotation.y=w.x>0?-Math.PI/2:Math.PI/2),n.add(V)}}else if(w.kind==="mast"){v(new qt(w.r*.7,w.r,w.h,8),d,w.x,w.h/2,w.z);let Z=v(new ee(5,.25,.25),d,w.x,w.h*.78,w.z);Z.rotation.y=Math.atan2(w.x,w.z);let A=new lt(new Qe(4.2,5,4,4),new Lt({color:13616820,roughness:1,side:xe}));A.position.set(w.x,w.h*.55,w.z),A.rotation.y=Math.atan2(w.x,w.z),p(A),n.add(A),s.spin.push({sail:A,ph:e()*6}),y(w.x+Math.sign(w.x)*-.6,3.2,w.z+Math.sign(w.z)*-.6,!0)}else if(w.kind==="crate"){let Z=Math.max(1,Math.round(w.w*w.d/6));if(v(new ee(w.w,w.h,w.d),x,w.x,w.h/2,w.z),Z>1){let A=v(new ee(1.6,1.6,1.6),x,w.x+(e()-.5)*(w.w-1.8),w.h+.8,w.z+(e()-.5)*(w.d-1.8));A.rotation.y=e()}}else if(w.kind==="boat"){let Z=v(new qt(w.w/2,w.w/2,w.d,14,1,!1,0,Math.PI),d,w.x,w.h,w.z);Z.rotation.set(Math.PI/2,0,Math.PI),Z.scale.set(1,1,.75),v(new ee(w.w*.9,.12,w.d*.95),f,w.x,w.h-.05,w.z);let A=v(new ee(.12,.12,4),f,w.x+.6,w.h+.2,w.z);A.rotation.y=.4}else w.kind==="post"&&(v(new qt(w.r,w.r*1.1,w.h,8),d,w.x,w.h/2,w.z),v(new Sn(w.r+.08,.1,6,14),new Lt({color:11901546,roughness:1}),w.x,1.6,w.z).rotation.x=Math.PI/2);let D=new Lt({color:857124,roughness:1});for(let[w,Z,A,q]of[[-120,90,.4,1.2],[140,70,-.8,1.6],[-90,-150,1.2,1.3]]){let V=new kt,j=new lt(new ee(6,3,26),D);j.position.y=1,V.add(j);for(let ot of[-6,4]){let Et=new lt(new qt(.3,.4,18,6),D);Et.position.set(0,11,ot),V.add(Et)}V.position.set(w,-.5,Z),V.rotation.y=A,V.scale.setScalar(q),n.add(V)}let R=new kt;R.add(new lt(new qt(3,5,34,12),new Lt({color:14209736,roughness:.9}))),R.children[0].position.y=17;let I=new lt(new pe(2.2,12,8),new Lt({color:16773312,emissive:16770976,emissiveIntensity:4}));I.position.y=36,R.add(I);let C=new lt(new Ze(9,140,24,1,!0),new Ae({color:16773572,transparent:!0,opacity:.08,blending:se,depthWrite:!1,side:xe,fog:!1}));C.geometry.translate(0,-70,0),C.rotation.z=Math.PI/2;let E=new kt;E.position.y=36,E.add(C),R.add(E),R.position.set(170,-1,-140),n.add(R),s.beam=E;let M=new Lt({color:5898140,emissive:3014527,emissiveIntensity:3,roughness:.2});for(let[w,Z]of ze.harbor.orbs){let A=new kt;A.add(new lt(new Bs(.42,1),M));let q=new Be(new Ue({map:t,color:5898140,blending:se,depthWrite:!1,transparent:!0,opacity:.8}));q.scale.setScalar(3.2),A.add(q),A.position.set(w,1.2,Z),n.add(A),s.orbs.push(A)}let U=220,z=new Float32Array(U*3),H=new Float32Array(U);for(let w=0;w<U;w++)z[w*3]=(e()-.5)*100,z[w*3+1]=.4+e()*5,z[w*3+2]=(e()-.5)*100,H[w]=e()*100;let $=new _e;$.setAttribute("position",new Te(z,3)),$.setAttribute("ph",new Te(H,1));let Y=new Si($,new fe({transparent:!0,depthWrite:!1,blending:se,uniforms:{time:{value:0},scale:{value:400}},vertexShader:`attribute float ph; uniform float time; uniform float scale; varying float vA;
      void main(){ vec3 p=position; p.x+=sin(time*0.2+ph)*2.5; p.y+=sin(time*0.4+ph*1.7)*0.4; p.z+=cos(time*0.17+ph*1.3)*2.5;
        vA=0.25+0.25*sin(time*0.8+ph*3.0); vec4 mv=modelViewMatrix*vec4(p,1.0);
        gl_PointSize=scale*0.6/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying float vA; void main(){ float d=length(gl_PointCoord-0.5);
      gl_FragColor=vec4(vec3(0.7,0.8,1.0), smoothstep(0.5,0.0,d)*vA*0.6); }`}));return Y.frustumCulled=!1,n.add(Y),s.flies=Y,s.barrels=ze.harbor.barrels.map(([w,Z])=>{let A=new kt,q=p(new lt(new qt(.55,.5,1.3,12),new Lt({color:10234658,roughness:.6})));q.position.y=.65,A.add(q);for(let j of[.3,1]){let ot=new lt(new Sn(.55,.04,6,16),g);ot.rotation.x=Math.PI/2,ot.position.y=j,A.add(ot)}let V=new lt(new pe(.16,8,6),new Lt({color:16761402,emissive:16747034,emissiveIntensity:3}));return V.position.set(0,1.42,0),A.add(V),A.position.set(w,0,Z),n.add(A),A}),s.update=(w,Z,A,q=0)=>{s.barrels.forEach((V,j)=>{V.visible=!!(q&1<<j)}),a.target.position.set(Z.x,0,Z.z),a.position.copy(a.target.position).addScaledVector(eh,80),r.position.set(Z.x,0,Z.z),h.material.uniforms.time.value=w,Y.material.uniforms.time.value=w,s.beam.rotation.y=w*.6,s.bell&&(s.bell.rotation.z=Math.sin(w*.8)*.06);for(let V of s.spin)V.flick&&(V.flick.material.opacity=.7+.15*Math.sin(w*9+V.ph)+.1*Math.sin(w*23+V.ph)),V.sail&&(V.sail.rotation.x=Math.sin(w*.7+V.ph)*.08);for(let V=0;V<s.orbs.length;V++){let j=s.orbs[V];j.visible=!!(A&1<<V),j.position.y=1.2+Math.sin(w*2+V)*.18,j.rotation.y=w*1.5}},s}var nh=new Lt({color:2764100,roughness:.85}),md=new Lt({color:14263420,roughness:.7}),Di=new Lt({color:10133692,roughness:.35,metalness:.85}),Ja=new Lt({color:5978661,roughness:.9}),Js={leg:new Ji(.15,.6,3,8),arm:new Ji(.11,.5,3,8),torso:new qt(.36,.27,.85,10),head:new pe(.24,14,10),robe:new qt(.3,.62,.95,12,1,!0),boot:new ee(.2,.14,.36)};function le(i,t,e=0,n=0,s=0){let r=new lt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r}var Ka=class{constructor(t,e,n,s,r=null,a="default"){let o=cn[t],l=Ri.find(D=>D.id===a)||Ri[0],c=new At(l.glow??o.color);this.clsKey=t,this.isMe=n,this.name=e,this.tagColor=r!==null?"#"+r.toString(16).padStart(6,"0"):"#ffe9c4",this.phase=0,this.kick=0,this.deadT=0,this.spawnT=.4,this.lastX=0,this.lastZ=0,this.speed=0,this.shown={hp:-1,maxHp:-1,lvl:-1};let h=this.group=new kt,u=this.body=new kt;h.add(u);let f=new Lt({color:l.accent!==void 0?new At(l.accent):c.clone().multiplyScalar(.38),roughness:.8,side:xe,metalness:l.id==="raja"||l.id==="bulan"?.5:0}),d=new Lt({color:c,emissive:c,emissiveIntensity:3,roughness:.3});this.legL=new kt,this.legL.position.set(.2,1,0),this.legR=new kt,this.legR.position.set(-.2,1,0);for(let D of[this.legL,this.legR])D.add(le(Js.leg,nh,0,-.5,0),le(Js.boot,Ja,0,-.93,.07)),u.add(D);let x=this.upper=new kt;u.add(x),x.add(le(Js.torso,nh,0,1.5,0),le(Js.robe,f,0,1,0),le(Js.head,md,0,2.14,0));let _=le(new Sn(.31,.05,6,16),Di,0,1.2,0);_.rotation.x=Math.PI/2,x.add(_);let g=le(new Qe(.75,1.15,1,3),f,0,1.3,-.33);g.rotation.x=.16,x.add(g),this.cape=g,this.armL=new kt,this.armL.position.set(.46,1.82,0),this.armR=new kt,this.armR.position.set(-.46,1.82,0);for(let D of[this.armL,this.armR])D.add(le(Js.arm,nh,0,-.32,0),le(new pe(.1,8,6),md,0,-.68,0)),x.add(D);let p=this.weapon=new kt;p.position.set(-.46,1.62,.55),x.add(p);let v=.7,S=0;if(t==="ranger"){let D=le(new pe(.3,14,10,0,Math.PI*2,0,Math.PI*.62),f,0,2.17,-.03);x.add(D),p.add(le(new ee(.09,.1,.95),Ja,0,0,.1));let R=le(new Sn(.42,.035,6,14,Math.PI),Di,0,0,.45);R.rotation.set(Math.PI/2,0,0),p.add(R);let I=le(new qt(.03,.03,.7,6),d,0,.07,.3);I.rotation.x=Math.PI/2,p.add(I)}else if(t==="mage"){x.add(le(new qt(.48,.48,.04,16),f,0,2.32,0));let D=le(new Ze(.3,.8,12),f,0,2.72,-.04);D.rotation.x=-.18,x.add(D),p.add(le(new qt(.045,.055,2.1,8),Ja,0,.15,0)),p.add(le(new pe(.19,12,10),d,0,1.32,0));let R=le(new Sn(.22,.03,6,12,Math.PI*1.4),Di,0,1.3,0);R.rotation.z=-.7,p.add(R),v=0,S=1.32}else if(t==="priest"){let D=le(new Sn(.27,.035,8,20),d,0,2.55,0);D.rotation.x=Math.PI/2,x.add(D),x.add(le(new ee(.16,.9,.05),d,0,1.45,.3)),p.add(le(new qt(.04,.05,2,8),Ja,0,.1,0));let R=le(new qt(.24,.24,.05,12),d,0,1.25,0);R.rotation.x=Math.PI/2,p.add(R);for(let I=0;I<8;I++){let C=le(new Ze(.04,.16,4),d,Math.cos(I*.785)*.33,1.25+Math.sin(I*.785)*.33,0);C.rotation.z=I*.785-Math.PI/2,p.add(C)}v=0,S=1.25}else{x.add(le(new pe(.29,14,10,0,Math.PI*2,0,Math.PI*.6),Di,0,2.18,0));for(let C of[-1,1]){let E=le(new Ze(.07,.34,6),Di,C*.27,2.4,0);E.rotation.z=-C*.6,x.add(E),x.add(le(new pe(.2,10,8),Di,C*.48,1.86,0))}let D=le(new qt(.15,.19,.85,10),Di,0,0,.15);D.rotation.x=Math.PI/2,p.add(D);let R=le(new Sn(.2,.045,6,16),d,0,0,.5);p.add(R);let I=le(new qt(.5,.5,.07,6),Di,.72,1.5,.28);I.rotation.set(Math.PI/2,0,.2),x.add(I),x.add(le(new Fs(.2,6),d,.72,1.5,.33)),v=.62}this.tip=new Ce,this.tip.position.set(0,S,v),p.add(this.tip),this.tipGlow=new Be(new Ue({map:s,color:c,blending:se,depthWrite:!1,transparent:!0,opacity:.8})),this.tipGlow.scale.setScalar(.9),this.tip.add(this.tipGlow),this.armR.rotation.x=-1.3,this.bubble=new lt(new pe(1.55,20,14),new Ae({color:c,transparent:!0,opacity:.22,blending:se,depthWrite:!1})),this.bubble.position.y=1.3,this.bubble.visible=!1,h.add(this.bubble);let y=new lt(new Fs(.75,16),new Ae({color:0,transparent:!0,opacity:.35,depthWrite:!1}));if(y.rotation.x=-Math.PI/2,y.position.y=.03,h.add(y),this.blob=y,r!==null&&(this.ring=new lt(new Nn(.8,1,32),new Ae({color:r,transparent:!0,opacity:.85,blending:se,depthWrite:!1,side:xe})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.05,h.add(this.ring)),!n){let D=this.tagCanvas=document.createElement("canvas");D.width=256,D.height=64,this.tagTex=new Zi(D),this.tagTex.colorSpace=Fe,this.tag=new Be(new Ue({map:this.tagTex,transparent:!0,depthWrite:!1,fog:!1})),this.tag.scale.set(3.4,.85,1),this.tag.position.y=3.25,this.tag.renderOrder=5,h.add(this.tag)}}setInfo(t,e,n,s=!1){let r=this.shown;if(!this.tag||r.hp===t&&r.maxHp===e&&r.lvl===n&&r.b===s)return;r.hp=t,r.maxHp=e,r.lvl=n,r.b=s;let a=this.tagCanvas.getContext("2d");a.clearRect(0,0,256,64),a.font="600 24px Georgia, serif",a.textAlign="center",a.textBaseline="middle",a.lineWidth=4,a.strokeStyle="rgba(0,0,0,0.85)";let o=`${s?"\u2605 ":""}${this.name}  Lv${n}`;a.strokeText(o,128,20),a.fillStyle=this.tagColor,a.fillText(o,128,20),a.fillStyle="rgba(0,0,0,0.7)",a.fillRect(38,40,180,14);let l=Math.max(0,t/e);a.fillStyle=l>.5?"#ff5d5d":l>.25?"#ff9a3d":"#ffd23d",a.fillRect(40,42,176*l,10),this.tagTex.needsUpdate=!0}fireKick(){this.kick=1}tipWorld(t){return this.tip.getWorldPosition(t)}update(t,e,n,s,r,a){let o=r&1,l=this.group,c=e-this.lastX,h=n-this.lastZ,u=t>0?Math.min(40,Math.hypot(c,h)/t):0;this.speed+=(u-this.speed)*Math.min(1,t*12),this.lastX=e,this.lastZ=n,l.position.set(e,0,n),l.rotation.y=s;let f=Math.min(1,this.speed/6);this.phase+=this.speed*t*1.35;let d=Math.sin(this.phase)*.75*f,x=u>.01?(c*Math.sin(s)+h*Math.cos(s))/(u*t||1):0,_=u>.01?(-c*Math.cos(s)+h*Math.sin(s))/(u*t||1):0;this.legL.rotation.x=d,this.legR.rotation.x=-d,this.legL.rotation.z=this.legR.rotation.z=_*.25*f*Math.sin(this.phase),this.armL.rotation.x=-d*.7,this.body.position.y=Math.abs(Math.sin(this.phase))*.07*f+Math.sin(a*2)*.012,this.upper.rotation.x=.13*f*x,this.upper.rotation.z=-.1*f*_,this.cape.rotation.x=.16+.5*f*Math.max(0,x)+Math.sin(a*3+this.phase)*.04,this.kick=Math.max(0,this.kick-t*7),this.weapon.position.z=.55-this.kick*.22,this.armR.rotation.x=-1.3-this.kick*.25,this.tipGlow.scale.setScalar(.7+this.kick*1.2+Math.sin(a*5)*.08),o?(this.deadT=Math.min(1,this.deadT+t*2.6),this.spawnT=0):(this.deadT>0&&(this.deadT=0,this.spawnT=0),this.spawnT=Math.min(.4,this.spawnT+t));let g=this.deadT*this.deadT*(3-2*this.deadT);this.body.rotation.x=-g*1.5,this.body.position.y+=g*.25;let p=o?1:.4+1.5*this.spawnT;l.scale.setScalar(Math.min(1,p)*(this.big||1)),this.tag&&(this.tag.visible=!o),this.blob.visible=!o,this.ring&&(this.ring.visible=!o);let v=r&2,S=r&4;if(this.bubble.visible=!!(v||S)&&!o,r&64&&!o){if(!this.crown){this.crown=new kt;let y=new Lt({color:16764746,emissive:16753178,emissiveIntensity:1.6,metalness:.8,roughness:.3});this.crown.add(new lt(new qt(.32,.36,.18,10,1,!0),y));for(let D=0;D<5;D++){let R=new lt(new Ze(.07,.24,5),y),I=D/5*Math.PI*2;R.position.set(Math.cos(I)*.32,.18,Math.sin(I)*.32),this.crown.add(R)}this.crown.position.y=2.95,this.group.add(this.crown)}this.crown.visible=!0,this.crown.rotation.y=a*1.5,this.crown.position.y=2.95+Math.sin(a*3)*.06}else this.crown&&(this.crown.visible=!1);this.bubble.visible&&(this.bubble.material.opacity=v?.2+.08*Math.sin(a*9):.1+.08*Math.sin(a*18),this.bubble.rotation.y=a*1.5,this.bubble.scale.setScalar(v?1:.85))}dispose(t){t.remove(this.group),this.tagTex&&(this.tagTex.dispose(),this.tag.material.dispose())}},ja=class{constructor(t,e){this.kind=t,this.phase=0,this.kick=0,this.deadT=0,this.lastX=0,this.lastZ=0,this.speed=0;let n=this.group=new kt,s=this.body=new kt;n.add(s);let r=(h,u,f=0,d=0,x=0)=>{let _=new lt(h,u);return _.position.set(f,d,x),_.castShadow=!0,s.add(_),_},a=h=>new Lt({color:h,emissive:h,emissiveIntensity:4});if(t==="ghoul"){let h=new Lt({color:4018752,roughness:.9}),u=r(new pe(.5,12,10),h,0,1.2,-.1);u.scale.set(1,1.2,.9),u.rotation.x=.6,r(new pe(.3,12,10),h,0,1.75,.35);for(let f of[-1,1])r(new pe(.06,8,6),a(9174890),f*.12,1.8,.62);this.armL=new kt,this.armL.position.set(.45,1.45,.1),this.armR=new kt,this.armR.position.set(-.45,1.45,.1);for(let f of[this.armL,this.armR]){let d=new lt(new Ji(.09,.95,3,8),h);d.position.y=-.55,d.castShadow=!0,f.add(d),f.rotation.x=-.5,s.add(f)}this.legL=new kt,this.legL.position.set(.22,.75,0),this.legR=new kt,this.legR.position.set(-.22,.75,0);for(let f of[this.legL,this.legR]){let d=new lt(new Ji(.12,.5,3,8),h);d.position.y=-.38,d.castShadow=!0,f.add(d),s.add(f)}this.tipY=1.4}else if(t==="caster"||t==="frost"){let h=t==="frost"?8378623:13134847,u=new Lt({color:t==="frost"?1715268:2366003,roughness:.8,side:xe});r(new Ze(.6,1.8,12,1,!0),u,0,1.15,0);let f=r(new pe(.34,12,10,0,Math.PI*2,0,Math.PI*.6),u,0,2.05,0);f.rotation.x=-.2;for(let x of[-1,1])r(new pe(.05,8,6),a(h),x*.1,1.98,.27);this.orb=r(new pe(.2,12,10),a(h),.45,1.5,.45);let d=new Be(new Ue({map:e,color:h,blending:se,depthWrite:!1,transparent:!0,opacity:.8}));d.scale.setScalar(1.6),this.orb.add(d),this.tipY=1.5}else if(t==="spiderling"||t==="queen"){let h=t==="queen",u=h?2.4:.75;this.baseScale=u;let f=new Lt({color:h?3804956:2761264,roughness:.6});r(new pe(.55,12,10),f,0,.7,-.45).scale.set(1,.85,1.25),r(new pe(.32,12,10),f,0,.6,.3),h&&r(new ee(.5,.06,.7),a(16723546),0,1.17,-.45);for(let x of[-1,1])r(new pe(.06,8,6),a(16726843),x*.12,.72,.56),r(new pe(.04,8,6),a(16726843),x*.22,.66,.5);this.spLegs=[];for(let x of[-1,1])for(let _=0;_<4;_++){let g=new kt;g.position.set(x*.25,.6,.25-_*.22),g.rotation.y=x*(.5-_*.35);let p=new lt(new qt(.035,.02,.9,5),f);p.position.set(x*.4,-.12,0),p.rotation.z=x*1,p.castShadow=!0,g.add(p),s.add(g),this.spLegs.push(g)}s.scale.setScalar(u),this.tipY=.7*u}else{let h=new Lt({color:7036242,roughness:1,flatShading:!0}),u=a(16747050);r(new Ei(1.1,0),h,0,2.3,0).scale.set(1.2,1,.9),r(new ee(.9,.12,.1),u,0,2.3,.85),r(new Ei(.5,0),h,0,3.45,.15);for(let d of[-1,1])r(new pe(.09,8,6),u,d*.2,3.5,.55);this.armL=new kt,this.armL.position.set(1.35,2.8,0),this.armR=new kt,this.armR.position.set(-1.35,2.8,0);for(let d of[this.armL,this.armR]){let x=new lt(new Ei(.55,0),h);x.position.y=-1.2,x.castShadow=!0,d.add(x);let _=new lt(new ee(.5,1.1,.5),h);_.position.y=-.5,_.castShadow=!0,d.add(_),s.add(d)}this.legL=new kt,this.legL.position.set(.6,1.3,0),this.legR=new kt,this.legR.position.set(-.6,1.3,0);for(let d of[this.legL,this.legR]){let x=new lt(new ee(.65,1.3,.65),h);x.position.y=-.65,x.castShadow=!0,d.add(x),s.add(d)}this.tipY=2.4}this.tip=new Ce,this.tip.position.set(0,this.tipY,.6),s.add(this.tip);let o=t==="brute"||t==="queen",l=new lt(new Fs(o?1.6:.75,16),new Ae({color:0,transparent:!0,opacity:.35,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.03,n.add(l),this.blob=l;let c=this.tagCanvas=document.createElement("canvas");c.width=128,c.height=16,this.tagTex=new Zi(c),this.tag=new Be(new Ue({map:this.tagTex,transparent:!0,depthWrite:!1,fog:!1})),this.tag.scale.set(o?3.2:1.6,o?.4:.2,1),this.tag.position.y=t==="brute"?4.3:t==="queen"?3.4:t==="spiderling"?1.3:2.5,this.tag.renderOrder=5,n.add(this.tag),this.shown=-1}setInfo(t,e){let n=Math.max(0,t/e);if(Math.abs(n-this.shown)<.01)return;this.shown=n;let s=this.tagCanvas.getContext("2d");s.clearRect(0,0,128,16),s.fillStyle="rgba(0,0,0,.7)",s.fillRect(0,0,128,16),s.fillStyle=this.kind==="brute"||this.kind==="queen"?"#ff8a2a":"#ff5d5d",s.fillRect(2,2,124*n,12),this.tagTex.needsUpdate=!0}fireKick(){this.kick=1,this.windT=0}windup(t){this.windT=t,this.windMax=t}tipWorld(t){return this.tip.getWorldPosition(t)}update(t,e,n,s,r,a){let o=r&1,l=this.group;this.windT=Math.max(0,(this.windT||0)-t);let c=this.windT>0?1-this.windT/this.windMax:0,h=t>0?Math.min(30,Math.hypot(e-this.lastX,n-this.lastZ)/t):0;this.speed+=(h-this.speed)*Math.min(1,t*10),this.lastX=e,this.lastZ=n,l.position.set(e,0,n),l.rotation.y=s;let u=Math.min(1,this.speed/5);this.phase+=this.speed*t*(this.kind==="brute"?.7:1.4);let f=Math.sin(this.phase)*.7*u;this.legL&&(this.legL.rotation.x=f,this.legR.rotation.x=-f),this.kick=Math.max(0,this.kick-t*4),this.armL&&(this.armL.rotation.x=(this.kind==="ghoul"?-.5:0)-f*.6-this.kick*1.6-c*2.4,this.armR.rotation.x=(this.kind==="ghoul"?-.5:0)+f*.6-this.kick*1.6-c*2.4),this.body.scale.setScalar((this.baseScale||1)*(1+c*.15)),this.spLegs&&this.spLegs.forEach((d,x)=>{d.rotation.x=Math.sin(this.phase*2+x*1.7)*.35*u}),this.body.traverse(d=>{d.material&&d.material.emissive&&!d.userData.glow&&(d.userData.base??=d.material.emissive.getHex(),d.material.emissive.setHex(c>0&&Math.sin(a*40)>0?6689041:d.userData.base))}),this.orb?(this.body.position.y=.25+Math.sin(a*2.5)*.12,this.orb.position.y=1.5+Math.sin(a*4)*.08):this.body.position.y=Math.abs(Math.sin(this.phase))*.06*u,this.deadT=o?Math.min(1,this.deadT+t*2):0,this.body.rotation.x=-this.deadT*1.4,this.body.position.y-=this.deadT*.3,l.scale.setScalar(1-this.deadT*.4),this.tag.visible=!o,this.blob.visible=!o}dispose(t){t.remove(this.group),this.tagTex.dispose(),this.tag.material.dispose()}};var Bn=1800,Ui=1.55,Qa=class{constructor(t,e){this.scene=t,this.glowTex=e,this.pos=new Float32Array(Bn*3),this.col=new Float32Array(Bn*4),this.size=new Float32Array(Bn),this.vel=new Float32Array(Bn*3),this.life=new Float32Array(Bn),this.max=new Float32Array(Bn),this.base=new Float32Array(Bn*4),this.grav=new Float32Array(Bn),this.cursor=0;let n=new _e;n.setAttribute("position",new Te(this.pos,3).setUsage(Oa)),n.setAttribute("pcolor",new Te(this.col,4).setUsage(Oa)),n.setAttribute("psize",new Te(this.size,1).setUsage(Oa)),this.points=new Si(n,new fe({transparent:!0,depthWrite:!1,blending:se,uniforms:{scale:{value:400}},vertexShader:`attribute vec4 pcolor; attribute float psize; uniform float scale; varying vec4 vC;
        void main(){ vC=pcolor; vec4 mv=modelViewMatrix*vec4(position,1.0);
          gl_PointSize=min(180.0, psize*scale/-mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying vec4 vC; void main(){ float d=length(gl_PointCoord-0.5)*2.0;
        float a=smoothstep(1.0,0.0,d); gl_FragColor=vec4(vC.rgb*(1.0+a), a*a*vC.a); }`})),this.points.frustumCulled=!1,this.points.renderOrder=4,t.add(this.points),this.projs=new Map,this.spritePool=[],this.rings=[],this.lights=[];for(let s=0;s<3;s++){let r=new Ti(16777215,0,16,1.8);r.userData.t=0,t.add(r),this.lights.push(r)}this.lightsOn=!0,this.tmpC=new At}particle(t,e,n,s,r,a,o,l,c,h=0,u=1){let f=this.cursor;this.cursor=(f+1)%Bn;let d=this.tmpC.set(o);this.pos[f*3]=t,this.pos[f*3+1]=e,this.pos[f*3+2]=n,this.vel[f*3]=s,this.vel[f*3+1]=r,this.vel[f*3+2]=a,this.base[f*4]=d.r,this.base[f*4+1]=d.g,this.base[f*4+2]=d.b,this.base[f*4+3]=u,this.size[f]=l,this.life[f]=c,this.max[f]=c,this.grav[f]=h}burst(t,e,n,s,r,a,o,l,c=6){for(let h=0;h<r;h++){let u=Math.random()*6.283,f=(Math.random()-.3)*2,d=a*(.3+Math.random()*.7);this.particle(t,e,n,Math.cos(u)*d,f*d*.7,Math.sin(u)*d,s,o*(.5+Math.random()),l*(.5+Math.random()*.5),c)}}flash(t,e,n,s,r){if(!this.lightsOn)return;let a=this.lights[0];for(let o of this.lights)o.userData.t<a.userData.t&&(a=o);a.position.set(t,e,n),a.color.set(s),a.userData.t=1,a.userData.i=r,a.intensity=r}ring(t,e,n,s,r=.5){let a=new lt(new Nn(.82,1,48),new Ae({color:n,transparent:!0,blending:se,depthWrite:!1,side:xe}));a.rotation.x=-Math.PI/2,a.position.set(t,.25,e),this.scene.add(a),this.rings.push({m:a,t:0,life:r,radius:s})}spawnProj(t,e,n,s,r){let a=ni[e],o=this.spritePool.pop()||new Be(new Ue({map:this.glowTex,blending:se,depthWrite:!1,transparent:!0}));o.material.color.set(a.color);let l=e==="mage"?3:e==="ranger"?1.5:1;o.scale.setScalar(l),o.position.set(n,Ui,s),o.visible=!0,this.scene.add(o),this.projs.set(t,{s:o,x:n,z:s,dx:Math.sin(r),dz:Math.cos(r),sp:a.projSpeed,life:a.projLife+.1,color:a.color,cls:e,sc:l})}removeProj(t){let e=this.projs.get(t);e&&(this.scene.remove(e.s),this.spritePool.push(e.s),this.projs.delete(t))}impact(t,e,n){let s=ni[n]||ni.ranger;s.splash>0?(this.burst(t,Ui,e,s.color,46,11,1.5,.7),this.burst(t,Ui,e,16770720,14,5,2.4,.35,0),this.ring(t,e,s.color,s.splash,.4),this.flash(t,Ui+.5,e,s.color,60)):(this.burst(t,Ui,e,s.color,9,6,.8,.35),this.flash(t,Ui,e,s.color,14))}muzzle(t,e,n){let s=ni[e],r=Math.sin(n),a=Math.cos(n);for(let o=0;o<6;o++){let l=4+Math.random()*7;this.particle(t.x,t.y,t.z,r*l+(Math.random()-.5)*3,(Math.random()-.5)*3,a*l+(Math.random()-.5)*3,s.color,.9,.18,0)}this.flash(t.x,t.y,t.z,s.color,10)}nova(t,e,n,s){this.ring(t,e,n,s,.55),this.ring(t,e,16777215,s*.7,.4);for(let r=0;r<70;r++){let a=r/70*6.283,o=s*2.2*(.7+Math.random()*.4);this.particle(t,.5+Math.random()*1.5,e,Math.cos(a)*o,2+Math.random()*4,Math.sin(a)*o,n,1.8,.55,5)}this.flash(t,2,e,n,120)}pillar(t,e,n){for(let s=0;s<44;s++){let r=Math.random()*6.283,a=.5+Math.random()*.6;this.particle(t+Math.cos(r)*a,Math.random()*.5,e+Math.sin(r)*a,0,4+Math.random()*6,0,n,1.1,.9,-1)}this.ring(t,e,n,2.6,.6)}update(t){let{pos:e,vel:n,life:s,max:r,col:a,base:o,grav:l}=this;for(let h=0;h<Bn;h++){if(s[h]<=0)continue;s[h]-=t;let u=h*3,f=h*4;if(s[h]<=0){a[f+3]=0;continue}n[u+1]-=l[h]*t,e[u]+=n[u]*t,e[u+1]+=n[u+1]*t,e[u+2]+=n[u+2]*t,e[u+1]<.05&&(e[u+1]=.05,n[u+1]*=-.3);let d=s[h]/r[h];a[f]=o[f],a[f+1]=o[f+1],a[f+2]=o[f+2],a[f+3]=o[f+3]*d}let c=this.points.geometry;c.attributes.position.needsUpdate=!0,c.attributes.pcolor.needsUpdate=!0,c.attributes.psize.needsUpdate=!0;for(let[h,u]of this.projs){let f=u.sp*t;if(u.x+=u.dx*f,u.z+=u.dz*f,u.life-=t,u.life<=0||Pi(u.x,u.z,.1)){this.removeProj(h);continue}u.s.position.set(u.x,Ui,u.z),u.s.scale.setScalar(u.sc*(.9+Math.random()*.25));let d=u.cls==="mage"?3:1;for(let x=0;x<d;x++){let _=Math.random()*f;this.particle(u.x-u.dx*_+(Math.random()-.5)*.2,Ui+(Math.random()-.5)*.2,u.z-u.dz*_+(Math.random()-.5)*.2,(Math.random()-.5)*1.2,Math.random()*1.2,(Math.random()-.5)*1.2,u.color,u.sc*.55,u.cls==="mage"?.45:.22,-1,.8)}}for(let h=this.rings.length-1;h>=0;h--){let u=this.rings[h];u.t+=t;let f=u.t/u.life;if(f>=1){this.scene.remove(u.m),u.m.geometry.dispose(),u.m.material.dispose(),this.rings.splice(h,1);continue}let d=1-(1-f)*(1-f);u.m.scale.setScalar(.3+d*u.radius),u.m.material.opacity=(1-f)*.9}for(let h of this.lights)h.userData.t>0&&(h.userData.t=Math.max(0,h.userData.t-t*6),h.intensity=h.userData.i*h.userData.t)}};var ct={jx:0,jy:0,yaw:0,fire:!1,skillQueued:!1,ultQueued:!1,touch:!1,sens:1,enabled:!1,showScore:!1},tn=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;function gd(i){ct.touch=tn;let t={},e=()=>{ct.jx=(t.KeyD||t.ArrowRight?1:0)-(t.KeyA||t.ArrowLeft?1:0),ct.jy=(t.KeyW||t.ArrowUp?1:0)-(t.KeyS||t.ArrowDown?1:0)};addEventListener("keydown",v=>{!ct.enabled||v.target.tagName==="INPUT"||(t[v.code]=!0,e(),(v.code==="Space"||v.code==="ShiftLeft"||v.code==="KeyE")&&(ct.skillQueued=!0,v.preventDefault()),(v.code==="KeyQ"||v.code==="KeyR")&&(ct.ultQueued=!0),v.code==="Tab"&&(ct.showScore=!0,v.preventDefault()))}),addEventListener("keyup",v=>{t[v.code]=!1,e(),v.code==="Tab"&&(ct.showScore=!1)}),addEventListener("blur",()=>{for(let v in t)t[v]=!1;e(),ct.fire=!1});let n=null;i.touchLayer.addEventListener("mousedown",v=>{if(ct.enabled){if(document.pointerLockElement!==i.canvas)try{i.canvas.requestPointerLock?.()?.catch?.(()=>{})}catch{}n=v.clientX,v.button===0&&(ct.fire=!0),v.button===2&&(ct.skillQueued=!0)}}),addEventListener("mouseup",v=>{v.button===0&&n!==null&&(ct.fire=!1),v.button===0&&(n=null)}),addEventListener("mousemove",v=>{ct.enabled&&(document.pointerLockElement===i.canvas?ct.yaw-=v.movementX*.0026*ct.sens:v.buttons&&n!==null&&(ct.yaw-=(v.clientX-n)*.0045*ct.sens,n=v.clientX))}),i.touchLayer.addEventListener("contextmenu",v=>v.preventDefault());let s=i.stick,r=i.knob,a=null,o=0,l=0,c=null,h=0,u=null,f=0,d=56,x=(v,S)=>{let y=v-o,D=S-l,R=Math.hypot(y,D);if(R>d&&(y*=d/R,D*=d/R),r.style.transform=`translate(${y}px,${D}px)`,Math.min(1,R/d)<.12){ct.jx=0,ct.jy=0;return}ct.jx=y/d,ct.jy=-D/d},_=()=>.0062*ct.sens*(900/Math.max(500,innerWidth))**.5;i.touchLayer.addEventListener("touchstart",v=>{if(ct.enabled){v.preventDefault();for(let S of v.changedTouches)S.clientX<innerWidth*.45&&a===null?(a=S.identifier,o=S.clientX,l=S.clientY,s.style.left=o+"px",s.style.top=l+"px",s.classList.add("on"),x(o,l)):c===null&&(c=S.identifier,h=S.clientX)}},{passive:!1});let g=v=>{if(ct.enabled){v.preventDefault();for(let S of v.changedTouches)S.identifier===a?x(S.clientX,S.clientY):S.identifier===c?(ct.yaw-=(S.clientX-h)*_(),h=S.clientX):S.identifier===u&&(ct.yaw-=(S.clientX-f)*_(),f=S.clientX)}},p=v=>{for(let S of v.changedTouches)S.identifier===a?(a=null,ct.jx=0,ct.jy=0,s.classList.remove("on"),r.style.transform=""):S.identifier===c?c=null:S.identifier===u&&(u=null,ct.fire=!1,i.fireBtn.classList.remove("on"))};addEventListener("touchmove",g,{passive:!1}),addEventListener("touchend",p),addEventListener("touchcancel",p),i.fireBtn.addEventListener("touchstart",v=>{if(v.preventDefault(),v.stopPropagation(),!ct.enabled||u!==null)return;let S=v.changedTouches[0];u=S.identifier,f=S.clientX,ct.fire=!0,i.fireBtn.classList.add("on")},{passive:!1}),i.skillBtn.addEventListener("touchstart",v=>{v.preventDefault(),v.stopPropagation(),ct.enabled&&(ct.skillQueued=!0)},{passive:!1}),i.skillBtn.addEventListener("mousedown",v=>{v.stopPropagation(),ct.enabled&&(ct.skillQueued=!0)}),i.ultBtn.addEventListener("touchstart",v=>{v.preventDefault(),v.stopPropagation(),ct.enabled&&(ct.ultQueued=!0)},{passive:!1}),i.ultBtn.addEventListener("mousedown",v=>{v.stopPropagation(),ct.enabled&&(ct.ultQueued=!0)}),ct.reset=()=>{a=c=u=null,ct.jx=ct.jy=0,ct.fire=!1,ct.skillQueued=!1,ct.ultQueued=!1,s.classList.remove("on"),r.style.transform="",i.fireBtn.classList.remove("on")}}var Zt=null,ii=null,to=null,ih=!1;function vd(){if(Zt){Zt.state==="suspended"&&Zt.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;Zt=new i,ii=Zt.createGain(),ii.gain.value=.5,ii.connect(Zt.destination),to=Zt.createBuffer(1,Zt.sampleRate*.5,Zt.sampleRate);let t=to.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}function yd(i){ih=i,ii&&(ii.gain.value=i?0:.5)}function Je(i,t,e,n,s,r=0){let a=Zt.currentTime+r,o=Zt.createOscillator(),l=Zt.createGain();o.type=i,o.frequency.setValueAtTime(t,a),o.frequency.exponentialRampToValueAtTime(Math.max(20,e),a+n),l.gain.setValueAtTime(s,a),l.gain.exponentialRampToValueAtTime(.001,a+n),o.connect(l),l.connect(ii),o.start(a),o.stop(a+n+.02)}function Ks(i,t,e,n=1){let s=Zt.currentTime,r=Zt.createBufferSource(),a=Zt.createBiquadFilter(),o=Zt.createGain();r.buffer=to,a.type="bandpass",a.frequency.value=e,a.Q.value=n,o.gain.setValueAtTime(t,s),o.gain.exponentialRampToValueAtTime(.001,s+i),r.connect(a),a.connect(o),o.connect(ii),r.start(s),r.stop(s+i)}function ie(i,t=1){if(!(!Zt||ih||t<=.02))switch(i){case"ranger":Je("triangle",1500,420,.09,.16*t),Ks(.05,.08*t,3200);break;case"mage":Je("sawtooth",240,70,.3,.18*t),Ks(.25,.14*t,500);break;case"guardian":Ks(.16,.3*t,900,.6),Je("square",170,55,.14,.13*t);break;case"boom":Ks(.45,.35*t,180,.5),Je("sine",120,35,.4,.3*t);break;case"hit":Je("square",880,660,.05,.1*t);break;case"hurt":Je("sawtooth",200,90,.16,.2*t);break;case"kill":Je("triangle",660,660,.1,.2),Je("triangle",990,990,.2,.2,.09);break;case"death":Je("sawtooth",300,50,.7,.25);break;case"level":[523,659,784,1047].forEach((e,n)=>Je("triangle",e,e,.2,.18,n*.08));break;case"dash":Ks(.2,.2*t,1800,.4);break;case"nova":Ks(.5,.3*t,400,.4),Je("sine",90,400,.35,.22*t);break;case"heal":Je("sine",520,1040,.35,.2*t);break;case"priest":Je("triangle",900,500,.12,.14*t);break;case"shield":Je("sine",330,660,.3,.2*t);break;case"orb":Je("sine",700,1400,.2,.18*t);break}}var ts=null,xd=[[146.8,174.6,220],[116.5,146.8,174.6],[130.8,164.8,196],[110,130.8,164.8]],_d=[293.7,349.2,392,440,523.3,587.3];function sh(i){if(Zt){if(i&&!ts){let t=Zt.createGain();t.connect(ii),t.gain.setValueAtTime(0,Zt.currentTime),t.gain.linearRampToValueAtTime(.09,Zt.currentTime+3);let e=Zt.createBiquadFilter();e.type="lowpass",e.frequency.value=900,e.connect(t);let n=0,s=()=>{let r=Zt.currentTime,a=xd[n++%xd.length];for(let o of a)for(let l of[-4,4]){let c=Zt.createOscillator(),h=Zt.createGain();c.type="sawtooth",c.frequency.value=o,c.detune.value=l,h.gain.setValueAtTime(0,r),h.gain.linearRampToValueAtTime(.05,r+2),h.gain.linearRampToValueAtTime(0,r+7.5),c.connect(h),h.connect(e),c.start(r),c.stop(r+7.6)}for(let o=0;o<3;o++){let l=r+1+Math.random()*5,c=Zt.createOscillator(),h=Zt.createGain();c.type="sine",c.frequency.value=_d[Math.floor(Math.random()*_d.length)],h.gain.setValueAtTime(0,l),h.gain.linearRampToValueAtTime(.06,l+.02),h.gain.exponentialRampToValueAtTime(.001,l+2.5),c.connect(h),h.connect(t),c.start(l),c.stop(l+2.6)}};s(),ts={out:t,timer:setInterval(s,6e3)}}else if(!i&&ts){clearInterval(ts.timer);let t=ts.out.gain;t.cancelScheduledValues(Zt.currentTime),t.setValueAtTime(t.value,Zt.currentTime),t.linearRampToValueAtTime(0,Zt.currentTime+.8);let e=ts;setTimeout(()=>e.out.disconnect(),900),ts=null}}}function Md(i=1){if(!Zt||ih)return;let t=Zt.currentTime,e=Zt.createBufferSource(),n=Zt.createBiquadFilter(),s=Zt.createGain();e.buffer=to,n.type="bandpass",n.frequency.value=700+Math.random()*500,n.Q.value=1.4,s.gain.setValueAtTime(.07*i,t),s.gain.exponentialRampToValueAtTime(.001,t+.07),e.connect(n),n.connect(s),s.connect(ii),e.start(t,Math.random()*.3),e.stop(t+.08)}var F=i=>document.getElementById(i);addEventListener("error",i=>{let t=document.getElementById("menuMsg");t&&(t.textContent=`Galat: ${i.message}`)});var $t={get:(i,t)=>{try{return localStorage.getItem("arkana."+i)??t}catch{return t}},set:(i,t)=>{try{localStorage.setItem("arkana."+i,t)}catch{}}};tn&&document.body.classList.add("touch");var Pd=F("c"),wn=new Ea({canvas:Pd,antialias:!tn,powerPreference:"high-performance"});wn.outputColorSpace=Fe;wn.toneMapping=br;wn.toneMappingExposure=1.15;wn.shadowMap.enabled=!0;wn.shadowMap.type=bc;var An=new Ta,nn=new We(62,1,.3,900),Ni={ruins:fd(An)},ve=Ni.ruins;An.fog=ve.fog;var Dt=new Qa(An,ve.glowTex),lh={ruins:th(ve.root,ve.glowTex,ze.ruins.runes,Ai,Tr)},ch=lh.ruins,zn=ze.ruins,On=new kt;{let i=new Lt({color:16764746,emissive:16753178,emissiveIntensity:2.2,metalness:.85,roughness:.25});On.add(new lt(new qt(.45,.2,.55,16,1,!0),i));let t=new lt(new qt(.07,.07,.5,8),i);t.position.y=-.5,On.add(t);let e=new lt(new qt(.3,.32,.08,16),i);e.position.y=-.75,On.add(e);let n=new Be(new Ue({map:ve.glowTex,color:16766315,blending:se,depthWrite:!1,transparent:!0}));n.scale.setScalar(4.5),On.add(n);let s=new lt(new qt(.6,.6,30,16,1,!0),new Ae({color:16766315,transparent:!0,opacity:.12,blending:se,depthWrite:!1,side:xe}));s.position.y=15,On.add(s),On.visible=!1,An.add(On)}var Qs=new Wa(wn);Qs.addPass(new Xa(An,nn));var s_=new qs(new rt(256,256),.42,.5,.9);Qs.addPass(s_);Qs.addPass(new qa);var es=$t.get("quality",tn?"medium":"high"),Id=!$t.get("qualityManual","");function oo(i){es=i;let t=Math.min(devicePixelRatio||1,i==="low"?1:i==="medium"?1.5:2);wn.setPixelRatio(t),Qs.setPixelRatio(t),ve.sun.castShadow=i!=="low";let e=i==="high"?2048:1024;ve.sun.shadow.mapSize.x!==e&&(ve.sun.shadow.mapSize.set(e,e),ve.sun.shadow.map?.dispose(),ve.sun.shadow.map=null),ve.grass&&(ve.grass.count=i==="low"?700:i==="medium"?2200:ve.grassMax);for(let n of ve.pointLights)n.visible=i!=="low";Dt.lightsOn=i!=="low",F("quality").value=i,hh()}function Ld(i){ze[i]||(i="ruins"),Ni[i]||(Ni[i]=pd(An,Ni.ruins.glowTex),lh[i]=th(Ni[i].root,Ni.ruins.glowTex,ze[i].runes,Ai,Tr));for(let[t,e]of Object.entries(Ni))e.root.visible=t===i;ve=Ni[i],ch=lh[i],zn=ze[i],m.mapId=i,An.fog=ve.fog,hd(i),Gd(),oo(es)}function hh(){let i=innerWidth,t=innerHeight;wn.setSize(i,t,!1),Qs.setSize(i,t),nn.aspect=i/t,nn.fov=i>=t?62:82,nn.updateProjectionMatrix();let e=t*wn.getPixelRatio()*.5;Dt.points.material.uniforms.scale.value=e,ve.flies.material.uniforms.scale.value=e}addEventListener("resize",hh);addEventListener("orientationchange",()=>setTimeout(hh,200));function r_(){let i=$t.get("pid","");if(!/^[a-z0-9]{16,40}$/.test(i)){let t=new Uint8Array(12);crypto.getRandomValues(t),i=[...t].map(e=>e.toString(36).padStart(2,"0")).join("").slice(0,24),$t.set("pid",i)}return i}var m={phase:"menu",ws:null,myId:0,clsKey:$t.get("cls","ranger"),cls:null,players:new Map,roster:new Map,pred:{x:0,z:0,yaw:0,dashT:0,dx:0,dz:0,skillCd:0},rx:0,rz:0,pending:[],seq:0,acc:0,localFireCd:0,me:{hp:100,maxHp:100,lvl:1,flags:0,xp:0,respawnT:0},ended:!1,tm:0,orbMask:255,ping:0,camDist:7.2,lockId:0,autoFire:$t.get("autoFire",tn?"1":"")==="1",aimAssist:$t.get("aimAssist",tn?"1":"")==="1",lastShotTick:new Map,shake:0,time:0,vibrate:$t.get("vibrate","1")==="1",code:null,practice:!1,joinErr:"",buzzT:0,createDiff:$t.get("diff","normal"),pid:r_(),skin:$t.get("skin","default"),mapId:"ruins",createMap:$t.get("map","rotate"),tut:null,music:$t.get("music","1")==="1",stepT:0,team:-1,teamScore:[0,0],gm:"dm",runeMask:15,holder:0,ticks:[],createGm:$t.get("gm","dm")};window.__arkana=m;var Dd=F("classes");for(let i of Gc){let t=cn[i],e="#"+t.color.toString(16).padStart(6,"0"),n=document.createElement("div");n.className="cls",n.dataset.k=i,n.style.setProperty("--c",e),n.innerHTML=`<div class="dot"></div><b>${t.name}</b><small>${t.desc}</small><small class="sk">${t.skillName}: ${t.skillDesc}</small>`,n.addEventListener("click",()=>Ud(i)),Dd.appendChild(n)}function Ud(i){m.clsKey=i,$t.set("cls",i);for(let t of Dd.children)t.classList.toggle("sel",t.dataset.k===i)}Ud(Gc.includes(m.clsKey)?m.clsKey:"ranger");F("name").value=$t.get("name","");F("hint").textContent=tn?"Jempol kiri: gerak \xB7 geser sisi kanan: bidik \xB7 tombol merah: tembak. Lebih nyaman dalam posisi mendatar.":"WASD gerak \xB7 mouse bidik \xB7 klik tembak \xB7 Spasi skill \xB7 Tab papan skor";function a_(){try{localStorage.removeItem("arkana.server")}catch{}return(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws"}var uh=["play","create","joinBtn","practice","rejoin","evJoin"],dh=i=>String(i||"").toUpperCase().replace(/[^A-Z]/g,"").slice(0,4);{let i=dh(new URLSearchParams(location.search).get("room"));i&&(F("code").value=i,F("joinBtn").textContent="Gabung "+i)}F("code").addEventListener("input",i=>{i.target.value=dh(i.target.value),F("joinBtn").textContent="Gabung"});F("code").addEventListener("keydown",i=>{i.key==="Enter"&&F("joinBtn").click()});function ai(i,t){vd(),sh(m.music);let e=F("name").value.trim()||"Pengembara";$t.set("name",e);for(let n of uh)F(n).disabled=!0;F("menuMsg").textContent=i==="practice"?"Menyiapkan arena latihan\u2026":"Menghubungkan ke arena\u2026",tn&&!document.fullscreenElement&&document.documentElement.requestFullscreen?.().then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{}),h_(e,i,t)}F("play").addEventListener("click",()=>{$t.get("tutorDone","")?ai("public"):(m.tut=Hd(),ai("practice"))});for(let i of document.querySelectorAll(".mode[data-gm]")){let t=()=>{m.createGm=i.dataset.gm,$t.set("gm",m.createGm);for(let e of document.querySelectorAll(".mode[data-gm]"))e.classList.toggle("on",e===i),e.setAttribute("aria-checked",e===i)};i.addEventListener("click",t),i.dataset.gm===m.createGm&&t()}for(let i of document.querySelectorAll(".diffb")){let t=()=>{m.createDiff=i.dataset.diff,$t.set("diff",m.createDiff);for(let e of document.querySelectorAll(".diffb"))e.classList.toggle("on",e===i),e.setAttribute("aria-checked",e===i)};i.addEventListener("click",t),i.dataset.diff===m.createDiff&&t()}for(let i of document.querySelectorAll(".mapb")){let t=()=>{m.createMap=i.dataset.map,$t.set("map",m.createMap);for(let e of document.querySelectorAll(".mapb"))e.classList.toggle("on",e===i),e.setAttribute("aria-checked",e===i)};i.addEventListener("click",t),i.dataset.map===m.createMap&&t()}F("create").addEventListener("click",()=>ai("create"));var bd=[],rh=[],si=new L;function o_(){let i=innerWidth,t=innerHeight,e=[],n=m.windIds||new Map;for(let s of m.players.values()){if(s.id===m.myId||s.flags&1||Rr(s.id))continue;let r=Math.hypot(s.x-m.rx,s.z-m.rz);if(r>24||(si.set(s.x,1.5,s.z).applyMatrix4(nn.matrixWorldInverse),si.z<0&&(si.set(s.x,1.5,s.z).project(nn),Math.abs(si.x)<.92&&Math.abs(si.y)<.88)))continue;let a=-Zs(Math.atan2(s.x-m.rx,s.z-m.rz),ct.yaw);e.push({a,d:r,boss:!!kn[m.roster.get(s.id)?.cls]?.boss,wind:(n.get(s.id)||0)>m.time})}e.sort((s,r)=>s.d-r.d);for(let s=0;s<6;s++){let r=bd[s];r||(r=document.createElement("i"),r.className="threat",F("threats").appendChild(r),bd.push(r));let a=e[s];if(!a){r.style.opacity=0;continue}let o=Math.min(i,t)*.34,l=o*1.25,c=o,h=i/2+Math.sin(a.a)*l,u=t/2-Math.cos(a.a)*c;r.className="threat"+(a.boss?" boss":"")+(a.wind?" wind":""),r.style.opacity=String(Math.max(.7,1-a.d/40)),r.style.transform=`translate(${h-16}px,${u-15}px) rotate(${a.a}rad) scale(${a.d<8?1.25:1})`}}function l_(){let i=m.gm==="pve"?(m.rv||[]).filter(t=>t[0]!==m.myId):[];for(let t=0;t<Math.max(i.length,rh.length);t++){let e=rh[t];e||(e=document.createElement("div"),e.className="down",F("downTags").appendChild(e),rh.push(e));let n=i[t],s=n&&m.players.get(n[0]);if(!s){e.style.display="none";continue}if(si.set(s.x,2.2,s.z).project(nn),si.z>1){e.style.display="none";continue}e.style.display="",e.textContent=n[1]>0?`Menolong ${n[1]}%`:`Tolong ${Xe(n[0])}!`,e.style.transform=`translate(${(si.x*.5+.5)*innerWidth}px,${(-si.y*.5+.5)*innerHeight}px) translate(-50%,-100%)`}}function Nd(i){if(!(!i||!i.length)){F("perkCards").innerHTML=i.map(t=>`<button class="perk" data-k="${t}"><b>${Ci[t].name}</b><small>${Ci[t].desc}</small><em>Ketuk untuk memilih</em></button>`).join("");for(let t of F("perkCards").querySelectorAll(".perk"))t.addEventListener("click",()=>{m.ws?.send(JSON.stringify({t:"perk",id:t.dataset.k})),F("perks").classList.add("hidden")});F("perks").classList.remove("hidden")}}for(let i of["touchstart","touchmove"])F("perks").addEventListener(i,t=>t.stopPropagation());F("pingMenu").innerHTML=Kc.map((i,t)=>`<button data-k="${t}">${i}</button>`).join("");F("pingBtn").addEventListener("click",()=>F("pingMenu").classList.toggle("hidden"));for(let i of F("pingMenu").children)i.addEventListener("click",()=>{m.ws?.send(JSON.stringify({t:"ping",k:+i.dataset.k})),F("pingMenu").classList.add("hidden")});for(let i of[F("pingBtn"),F("pingMenu")])for(let t of["touchstart","touchmove","mousedown"])i.addEventListener(t,e=>e.stopPropagation());function Fd(){let i=$t.get("lastRoom",""),t=F("rejoin");t.classList.toggle("hidden",!i),i&&(t.textContent=`Kembali ke room ${i}`)}F("rejoin").addEventListener("click",()=>{let i=$t.get("lastRoom","");i&&ai("join",i)});Fd();var Sd=i=>i>=3600?`${Math.floor(i/3600)} j ${Math.floor(i%3600/60)} mnt`:i>=60?`${Math.floor(i/60)} mnt`:`${Math.max(0,i)} dtk`,kd=null,Bd=0;function Od(){let i=F("eventBanner"),t=kd,e=Math.floor((Date.now()-Bd)/1e3),n=t?.active&&t.active.left-e>0?t.active:null,s=t?.next,r=t?.last;i.classList.toggle("hidden",!n&&!s&&!r?.top?.length),F("evJoin").classList.toggle("hidden",!n),n?(F("evName").textContent=`Event: ${n.name} \xB7 sisa ${Sd(n.left-e)}`,F("evInfo").textContent=`${n.desc}. Target: ${n.target} Hadiah: ${n.skin}.${n.top.length?` Terdepan: ${n.top[0].name} (${n.top[0].score} ${n.unit}).`:""}`):s?(F("evName").textContent=`Event berikutnya: ${s.name}`,F("evInfo").textContent=s.in-e>0?`Mulai dalam ${Sd(s.in-e)}. ${s.desc}.`:"Segera dimulai\u2026"):r?.top?.length&&(F("evName").textContent=`Event ${r.name} selesai`,F("evInfo").textContent=`Juara: ${r.top.map((a,o)=>`${o+1}. ${a.name} (${a.score} ${r.unit})`).join(" \xB7 ")}`)}async function zd(){if(m.phase==="menu"){try{kd=await fetch("/api/event").then(i=>i.json()),Bd=Date.now()}catch{}Od()}}zd();setInterval(zd,2e4);setInterval(()=>{m.phase==="menu"&&Od()},1e3);F("evJoin").addEventListener("click",()=>ai("event"));var Ed=i=>"#"+i.toString(16).padStart(6,"0");async function c_(){F("ranks").classList.remove("hidden"),F("myStats").textContent="Memuat\u2026",F("skinMsg").textContent="";let i=null,t=null;try{[i,t]=await Promise.all([fetch("/api/top").then(n=>n.json()),fetch(`/api/stats?pid=${m.pid}`).then(n=>n.json())])}catch{F("myStats").textContent="Peringkat belum bisa dimuat dari server, jadi semua jubah tampil terkunci. Coba tutup dan buka lagi."}let e=t?.stats;if(F("waveTable").innerHTML=(i?.waves||[]).map((n,s)=>`<tr><td>${s+1}</td><td></td><td>gelombang ${n.wave}</td></tr>`).join("")||"<tr><td>Belum ada yang bermain Bertahan Bersama minggu ini.</td></tr>",(i?.waves||[]).forEach((n,s)=>{F("waveTable").rows[s].cells[1].textContent=n.name}),F("achv").innerHTML=jc.map(n=>`<span class="${(e?.[n.stat]||0)>=n.n?"on":""}" title="${n.text}">${n.name} \xB7 ${Math.min(e?.[n.stat]||0,n.n)}/${n.n}</span>`).join(""),F("daily").innerHTML=(t?.daily||[]).map(n=>`<li class="${n.done?"done":""}"><i style="width:${Math.round(n.p/n.n*100)}%"></i><span><b></b><em>${n.done?"Selesai":`${n.p}/${n.n}`}</em></span></li>`).join("")||"<li><span>Tantangan belum bisa dimuat.</span></li>",(t?.daily||[]).forEach((n,s)=>{F("daily").children[s].querySelector("b").textContent=n.text}),i){F("myStats").textContent=e?`Kamu: ${e.kills} kill, ${e.deaths} gugur, ${e.wins} menang dari ${e.matches} ronde.`:"Belum ada statistik: selesaikan satu ronde di arena untuk mulai tercatat.",F("weekTitle").textContent=`Minggu ini (${i.week.replace("-W",", minggu ")})`;let n=i.top.map((s,r)=>`<tr class="${e&&s.name===e.name?"me":""}"><td>${r+1}</td><td></td><td>${s.kills}</td><td>${s.wins}</td></tr>`).join("");F("weekTable").innerHTML=`<tr><th>#</th><th>Nama</th><th>Kill</th><th>Menang</th></tr>${n||'<tr><td colspan="4">Belum ada yang bermain minggu ini.</td></tr>'}`,i.top.forEach((s,r)=>{F("weekTable").rows[r+1].cells[1].textContent=s.name})}F("skins").innerHTML=Ri.map(n=>{let s=cd(n,e),r=cn[m.clsKey],a=n.accent??Math.round(r.color*1),o=n.glow??r.color,l=n.req?`${Math.min(e?.[n.req.stat]||0,n.req.n)}/${n.req.n}`:"";return`<button class="skin ${s?"":"locked"} ${m.skin===n.id?"on":""}" data-id="${n.id}" ${s?"":'aria-disabled="true"'} style="--c:${Ed(n.accent??a)};--g:${Ed(o)}"><i></i><span><b>${n.name}</b><small>${s?m.skin===n.id?"Dipakai":"Terbuka":`${n.req.text} \xB7 ${l}`}</small></span></button>`}).join("");for(let n of F("skins").querySelectorAll(".skin"))n.addEventListener("click",()=>{let s=Ri.find(r=>r.id===n.dataset.id);if(n.classList.contains("locked")){F("skinMsg").textContent=`${s.name} masih terkunci: ${s.req.text.toLowerCase()} (sekarang ${Math.min(e?.[s.req.stat]||0,s.req.n)} dari ${s.req.n}).`;return}F("skinMsg").textContent=`${s.name} dipakai mulai ronde berikutnya.`,m.skin=n.dataset.id,$t.set("skin",m.skin);for(let r of F("skins").querySelectorAll(".skin"))r.classList.toggle("on",r===n),r.classList.contains("locked")||(r.querySelector("small").textContent=r===n?"Dipakai":"Terbuka")})}F("ranksBtn").addEventListener("click",()=>c_().catch(i=>{F("myStats").textContent="Galat: "+i.message}));F("ranksClose").addEventListener("click",()=>F("ranks").classList.add("hidden"));F("joinBtn").addEventListener("click",()=>{let i=dh(F("code").value);if(i.length!==4){F("menuMsg").textContent="Kode room terdiri dari 4 huruf.",F("code").focus();return}ai("join",i)});F("practice").addEventListener("click",()=>{m.tut=Hd(),ai("practice")});function h_(i,t,e){let n;try{n=new WebSocket(a_())}catch{return Td("Alamat server tidak valid.")}m.ws=n,m.joinErr="",n.onopen=()=>n.send(JSON.stringify({t:"join",name:i,cls:m.clsKey,mode:t,code:e,gm:m.createGm,map:m.createMap,diff:m.createDiff,pid:m.pid,skin:m.skin})),n.onmessage=s=>u_(JSON.parse(s.data)),n.onclose=()=>{if(m.ws!==n)return;let s=!!m.myId;lo(),Td(m.joinErr||(s?"Koneksi terputus.":"Server tidak terjangkau. Coba lagi.")),m.myId=0},n.onerror=()=>{}}function Td(i){F("menuMsg").textContent=i;for(let t of uh)F(t).disabled=!1}function lo(){let i=m.ws;m.ws=null,i&&i.readyState<=1&&i.close();for(let t of m.players.values())t.av.dispose(An);m.players.clear(),m.roster.clear(),m.pending.length=0;for(let t of[...Dt.projs.keys()])Dt.removeProj(t);m.phase="menu",ct.enabled=!1,ct.reset?.(),m.menuCls&&(m.clsKey=m.menuCls),Fd(),document.exitPointerLock?.(),F("hud").classList.add("hidden"),F("menu").classList.remove("hidden"),F("tutor").classList.add("hidden"),F("hitDir").textContent="";for(let t of uh)F(t).disabled=!1}function u_(i){if(i.t==="w"){m.myId=i.id,m.limit=i.limit||Hc,m.menuCls=m.clsKey,cn[i.cls]&&(m.clsKey=i.cls),m.cls=cn[m.clsKey],m.phase="play",m.ended=!1,m.mut=i.mut||null,m.mut&&setTimeout(()=>Se(`Mode akhir pekan: ${Ys[m.mut].name}`),2200),i.code&&$t.set("lastRoom",i.code),m.barrelMask=0,m.seq=0,m.pending.length=0,m.me.xp=0,m.me.lvl=1,F("menu").classList.add("hidden"),F("hud").classList.remove("hidden"),F("menuMsg").textContent="",F("skillName").textContent=m.cls.skillName,F("death").classList.add("hidden"),F("score").classList.add("hidden"),F("pause").classList.add("hidden"),ct.enabled=!0,m.code=i.code||null,m.practice=!!i.practice,m.gm=i.gm||"dm",m.ticks.length=0,i.map&&i.map!==m.mapId&&Ld(i.map),m.team=ld.includes(m.gm)?i.team:-1,m.teamScore=[0,0],F("zoneTag").classList.toggle("hidden",m.gm!=="koth"&&m.gm!=="king"),m.event=i.ev||null,m.event&&setTimeout(()=>Se(`Event ${m.event.name}: ${m.event.target}`),2400);let t=F("roomPill");t.classList.toggle("hidden",!m.code&&!m.practice&&!i.ev),t.textContent=m.code?`${{koth:"Altar",tdm:"Tim",coop:"Lawan Bot",pve:"Bertahan",king:"Raja"}[m.gm]||"Room"} ${m.code} \u2934`:m.event?"Event":"Latihan",m.gm==="pve"&&(m.team=0),m.team>=0&&m.gm!=="pve"&&setTimeout(()=>Se(`Kamu di regu ${hn[m.team].name}`),1900),m.practice&&m.tut?m.tut.show():(m.tut=null,F("tutor").classList.add("hidden")),(!m.practice||!m.tut)&&Se(m.code?`Room ${m.code}: ketuk kode untuk membagikan`:m.practice?"Arena latihan":"Pertarungan dimulai")}else if(i.t==="e")m.joinErr=i.m,$t.set("lastRoom","");else if(i.t==="r"){m.roster.clear();for(let[t,e,n,s,r,a,o,l,c]of i.l)m.roster.set(t,{id:t,name:e,cls:n,kills:s,deaths:r,bot:a,pts:o||0,team:l??-1,skin:c||"default"});i.ts&&(m.teamScore=i.ts),__()}else i.t==="s"?p_(i):i.t==="pg"?m.ping=Math.round(performance.now()-i.c):i.t==="sp"&&m.ws?.send(JSON.stringify({t:"spr",c:i.c}))}setInterval(()=>{m.ws?.readyState===1&&m.ws.send(JSON.stringify({t:"pg",c:performance.now()}))},2e3);setInterval(()=>{m.ws?.readyState===1&&m.myId&&!document.hidden&&m.ping>0&&m.ws.send(JSON.stringify({t:"st",p:m.ping,f:so}))},5e3);function en(i){if(!(!m.vibrate||!navigator.vibrate))try{navigator.vibrate(i)}catch{}}function d_(i,t){let e=F("hitDir");for(;e.children.length>=4;)e.firstChild.remove();let n=Zs(Math.atan2(i-m.rx,t-m.rz),ct.yaw),s=Math.min(innerWidth,innerHeight)*.38,r=s*.95,a=s*.3,o=document.createElement("div");o.className="arc",o.style.cssText=`width:${r}px;height:${a}px;left:${-r/2}px;top:${-s}px;transform-origin:${r/2}px ${s}px;transform:rotate(${-n*180/Math.PI}deg)`,o.addEventListener("animationend",()=>o.remove()),e.appendChild(o)}function Hd(){let i={i:0,moved:0,turned:0,shots:0,skills:0,kills:0,lastYaw:null,done:!1},t=()=>[[tn?"Geser jempol kiri untuk berjalan.":"Tekan W A S D untuk berjalan.",()=>i.moved>8],[tn?"Geser jari di sisi kanan layar untuk memutar arah bidikan.":"Klik layar, lalu gerakkan mouse untuk membidik.",()=>i.turned>1.6],[tn?"Tahan tombol merah untuk menembak.":"Klik kiri untuk menembak.",()=>i.shots>=5],[`${tn?"Ketuk tombol ungu":"Tekan Spasi"} untuk skill ${m.cls?.skillName||""}. Skill punya waktu jeda.`,()=>i.skills>=1],["Tumbangkan satu bot boneka. Mereka tidak menyerang balik.",()=>i.kills>=1]];return i.show=()=>{F("tutor").classList.remove("hidden"),i.render()},i.render=()=>{let e=t();F("tutorDots").innerHTML=e.map((n,s)=>`<i class="${s<i.i?"on":s===i.i&&!i.done?"now":""}"></i>`).join(""),F("tutorText").textContent=i.done?"Siap. Di arena sungguhan lawan menyerang balik; pertama mencapai 20 kill menang.":`${i.i+1}/${e.length} \xB7 ${e[i.i][0]}`,F("tutorGo").classList.toggle("hidden",!i.done),F("tutorSkip").textContent=i.done?"Tetap berlatih":"Lewati latihan"},i.check=()=>{if(i.done)return;let e=t();e[i.i][1]()&&(i.i++,ie("orb"),en(30),i.i>=e.length&&(i.done=!0,$t.set("tutorDone","1"),ie("level")),i.render())},i}F("tutorSkip").addEventListener("click",()=>{if($t.set("tutorDone","1"),m.tut?.done){F("tutor").classList.add("hidden"),m.tut=null;return}m.tut=null,lo(),ai("public")});F("tutorGo").addEventListener("click",()=>{m.tut=null,lo(),ai("public")});for(let i of["touchstart","touchmove"])F("tutor").addEventListener(i,t=>t.stopPropagation());F("roomPill").addEventListener("click",i=>{if(i.stopPropagation(),!m.code)return;let t=`${location.origin}${location.pathname}?room=${m.code}`,e=()=>Se(`Tautan room ${m.code} disalin`),n=()=>Se(`Kode room: ${m.code}`);try{navigator.clipboard.writeText(t).then(e,n)}catch{n()}});function f_(i){let t=m.players.get(i);if(t)return t;let e=m.roster.get(i);if(!e)return null;let n=kn[e.cls]?new ja(e.cls,ve.glowTex):new Ka(e.cls,e.name,i===m.myId,ve.glowTex,e.team>=0&&(m.gm!=="pve"||e.team===0)?hn[e.team].color:null,e.skin);return An.add(n.group),t={id:i,av:n,buf:[],x:0,z:0,yaw:0,flags:0,hp:1,maxHp:1,lvl:1,cls:e.cls,seen:0},m.players.set(i,t),t}function p_(i){let t=performance.now();if(!m.myId)return;let e=m.ended;if(i.mp&&i.mp!==m.mapId){Ld(i.mp),Se(`Peta: ${zn.name}`);for(let r of[...Dt.projs.keys()])Dt.removeProj(r)}m.ended=!!i.st,m.tm=i.tm,m.orbMask=i.o,m.runeMask=i.u??15,m.holder=i.z||0,m.barrelMask=i.bm||0,m.ticks.push([t,i.k||0]),m.ticks.length>30&&m.ticks.shift(),m.snapN=(m.snapN||0)+1;for(let r of i.p){let a=f_(r[0]);a&&(a.seen=m.snapN,a.hp=r[4],a.maxHp=r[5],a.lvl=r[6],a.flags=r[7],r[0]===m.myId?(m.me.hp=r[4],m.me.maxHp=r[5],m.me.lvl=r[6],m.me.flags=r[7]):(a.buf.push({t,x:r[1],z:r[2],yaw:r[3]}),a.buf.length>30&&a.buf.shift(),a.av.setInfo(r[4],r[5],r[6],!!(r[7]&64))))}for(let[r,a]of m.players)a.seen!==m.snapN&&(a.av.dispose(An),m.players.delete(r));let n=i.me,s=m.pred;for(m.me.xp=n[6],m.me.respawnT=n[7],m.me.dmgT=n[8]||0,m.me.spdT=n[9]||0,m.me.ult=n[10]||0,m.ev=i.ev||null,m.wv=i.wv||null,m.rv=i.rv||null,m.me.perks=n[11]||"",m.me.offer=n[12]||0,m.me.spare=n[13]||0,s.spd=n[14]||1;m.pending.length&&m.pending[0].s<=i.a;)m.pending.shift();if(s.x=n[0],s.z=n[1],s.dashT=n[2],s.dx=n[3],s.dz=n[4],s.skillCd=n[5],!(m.me.flags&1)&&!m.ended)for(let r of m.pending)Qc(s,r,m.cls,ei);else m.pending.length=0;for(let r of i.e)m_(r);m.ended&&!e&&(ct.fire=!1,fh(!0),ie("level")),!m.ended&&e&&(F("score").classList.add("hidden"),Se("Ronde baru dimulai"))}var ri=new L;function un(i,t){return Math.max(0,1-Math.hypot(i-m.rx,t-m.rz)/45)}function Xe(i){return m.roster.get(i)?.name||"\u2014"}function m_(i){switch(i[0]){case"s":{let t=m.players.get(i[2]),e=t?.cls||m.roster.get(i[2])?.cls||"ranger";Dt.spawnProj(i[1],e,i[3],i[4],i[5]),i[2]!==m.myId&&t&&m.lastShotTick.get(i[2])!==m.snapN&&(m.lastShotTick.set(i[2],m.snapN),t.av.fireKick(),Dt.muzzle(t.av.tipWorld(ri),e,i[5]),ie(e,un(i[3],i[4])*.7));break}case"h":{let e=Dt.projs.get(i[1])?.cls||"ranger";Dt.removeProj(i[1]),Dt.impact(i[2],i[3],e),e==="mage"&&(ie("boom",un(i[2],i[3])),m.shake=Math.max(m.shake,.5*un(i[2],i[3])));break}case"d":{let t=i[1]===m.myId;if(t){F("vignette").style.opacity=.75,setTimeout(()=>{F("vignette").style.opacity=0},160),ie("hurt"),m.shake=Math.max(m.shake,.35);let e=i[2]&&i[2]!==m.myId?m.players.get(i[2]):null;e&&(d_(e.x,e.z),m.arcN=(m.arcN||0)+1),m.time-m.buzzT>.12&&(m.buzzT=m.time,en(35))}if(i[2]===m.myId&&!t){let e=F("cross");e.classList.remove("hit"),e.offsetWidth,e.classList.add("hit"),ie("hit")}(t||i[2]===m.myId)&&g_(i[4],i[5],i[3],t),Dt.burst(i[4],1.5,i[5],16730938,5,4,.7,.3);break}case"k":{let t=document.createElement("div");(i[1]===m.myId||i[2]===m.myId)&&(t.className="me"),t.innerHTML="<span></span><i>\u2726</i><span></span>",t.children[0].textContent=Xe(i[1]),t.children[2].textContent=Xe(i[2]);let e=F("feed");for(e.appendChild(t);e.children.length>4;)e.firstChild.remove();setTimeout(()=>t.remove(),5e3);let n=m.players.get(i[2]);n&&Dt.burst(n.x,1.4,n.z,ni[n.cls].color,40,8,1.4,.9),i[1]===m.myId&&i[2]!==m.myId&&(ie("kill"),Se("Lawan tumbang"),en([40,40,70]),m.tut&&(m.tut.kills++,m.tut.check())),i[2]===m.myId&&(ie("death"),en(250),ct.fire=!1,F("deathBy").textContent=`Dikalahkan oleh ${Xe(i[1])}`,F("death").classList.remove("hidden"));break}case"r":{if(Dt.pillar(i[2],i[3],12577279),i[1]===m.myId)ct.yaw=Math.atan2(-i[2],-i[3]),m.rx=i[2],m.rz=i[3],m.pending.length=0,F("death").classList.add("hidden");else{let t=m.players.get(i[1]);t&&(t.buf.length=0)}break}case"l":{let t=m.players.get(i[1]);t&&Dt.pillar(t.x,t.z,16766571),i[1]===m.myId&&(ie("level"),Se(`Naik ke Level ${i[2]}`));break}case"n":Dt.nova(i[2],i[3],m.roster.get(i[1])?.cls==="brute"?kn.brute.color:cn.mage.color,m.roster.get(i[1])?.cls==="brute"?kn.brute.slam.r:ad),ie("nova",un(i[2],i[3])),m.shake=Math.max(m.shake,.6*un(i[2],i[3]));break;case"E":{let t=Yc[i[1]];if(!t)break;Se(`${t.name}: ${t.desc}`),ie("level"),en([60,40,60]);break}case"g":{let t=m.ev?.[2]??0,e=m.ev?.[3]??0;Dt.pillar(t,e,16766315),Dt.burst(t,1.4,e,16766315,50,7,1.4,.9,-2),Se(i[1]===m.myId?"Cawan Emas: HP penuh dan kedua rune!":`${Xe(i[1])} mengambil Cawan Emas`),i[1]===m.myId&&(ie("level"),en([30,30,80]));break}case"B":Se(i[1]===m.myId?"Kamu jadi BURONAN: semua mengincarmu!":`${Xe(i[1])} jadi buronan: tumbangkan untuk hadiah XP`),i[1]===m.myId&&en([80,60,80]);break;case"b":Se(i[1]===m.myId?"Buronan tumbang: hadiah XP besar!":`${Xe(i[1])} menumbangkan buronan ${Xe(i[2])}`),i[1]===m.myId&&ie("level");break;case"C":i[1]===m.myId&&(setTimeout(()=>Se(`Tantangan selesai: ${i[2]}`),900),ie("level"),en([40,40,40,40,90]));break;case"U":{let t=m.players.get(i[1]);if(!t)break;let e=cn[i[2]]?.color??16766315;Dt.pillar(t.x,t.z,16766315),Dt.burst(t.x,1.6,t.z,e,40,9,1.5,.7,0),i[2]==="guardian"&&Dt.nova(t.x,t.z,e,6),i[1]===m.myId&&(Se(Jc[i[2]].name+"!"),en(120),m.shake=Math.max(m.shake,.5)),ie(i[2]==="mage"?"nova":i[2]==="guardian"?"shield":"ranger",un(t.x,t.z));break}case"M":Dt.ring(i[1],i[2],16726830,6,.8),Dt.ring(i[1],i[2],16756848,4,.8),Dt.flash(i[1],6,i[2],16734766,30);break;case"m":{Dt.nova(i[1],i[2],16738862,6),Dt.burst(i[1],1,i[2],16765562,60,12,2,.8,8),ie("boom",un(i[1],i[2])),m.shake=Math.max(m.shake,.9*un(i[1],i[2]));break}case"H":Dt.ring(i[2],i[3],16769658,7,.7),Dt.pillar(i[2],i[3],16769658),ie("orb",un(i[2],i[3]));break;case"X":{let t=zn.barrels?.[i[1]];t&&(Dt.nova(t[0],t[1],16742958,5),Dt.burst(t[0],1,t[1],16765562,50,11,1.8,.8,8),ie("boom",un(t[0],t[1])),m.shake=Math.max(m.shake,.8*un(t[0],t[1])));break}case"q":{if(i[1]!==m.myId&&!Rr(i[1]))break;let t=document.createElement("div");t.className="ping",t.textContent=`${Xe(i[1])}: ${Kc[i[2]]}`,F("feed").appendChild(t),setTimeout(()=>t.remove(),5e3),Dt.ring(i[3],i[4],8257456,3,1.2),Dt.pillar(i[3],i[4],8257456),ie("orb",.6),(m.pings||=[]).push({x:i[3],z:i[4],t:m.time+5});break}case"K":Se(i[1]===m.myId?"Kamu dinobatkan menjadi RAJA!":`${Xe(i[1])} menjadi raja: buru dia!`);{let t=m.players.get(i[1]);t&&Dt.pillar(t.x,t.z,16765514)}i[1]===m.myId&&(ie("level"),en([80,50,120]));break;case"Z":setTimeout(()=>Se(`Event ${i[1]} selesai. Terima kasih sudah ikut!`),600),m.event=null;break;case"W":Se(i[2]?`Gelombang ${i[1]}: ${i[1]%10===0?"Ratu Laba-laba":"Golem Batu"} datang!`:`Gelombang ${i[1]}`),ie("level"),en([50,50,50]),F("perks").classList.add("hidden");break;case"w":Se(i[2]===i[1]&&i[1]>0?`Gelombang ${i[1]} selesai! Titik simpan tercapai`:`Gelombang ${i[1]} selesai! Rekan bangkit, HP pulih`),ie("level"),F("death").classList.add("hidden");break;case"A":{let t=m.players.get(i[1]);if(!t)break;t.av.windup?.(i[2]?.9:wr.windup),(m.windIds||=new Map).set(i[1],m.time+(i[2]?.9:wr.windup)),Dt.ring(t.x,t.z,i[2]?16742938:16726843,i[2]?kn.brute.slam.r:2.4,i[2]?.9:wr.windup),Math.hypot(t.x-m.rx,t.z-m.rz)<8&&ie("hurt",.4);break}case"P":i[1]===m.myId&&Nd(i[2]);break;case"p":i[1]===m.myId?(F("perks").classList.add("hidden"),Se(`Berkah ${Ci[i[2]].name}: ${Ci[i[2]].desc}`)):m.roster.get(i[1])&&Se(`${Xe(i[1])} memilih ${Ci[i[2]].name}`);break;case"v":{let t=m.players.get(i[2]);t&&(Dt.pillar(t.x,t.z,8257456),Dt.burst(t.x,1.2,t.z,8257456,30,5,1.2,.7,-2)),i[2]===m.myId?(F("death").classList.add("hidden"),Se(i[1]===m.myId?"Bangkit dengan nyawa cadangan!":`${Xe(i[1])} menolongmu!`),en([40,40,80]),ie("level")):i[1]===m.myId&&Se(`Kamu menolong ${Xe(i[2])}!`);break}case"x":Dt.nova(i[1],i[2],16756848,4),ie("boom",un(i[1],i[2])*.6);break;case"a":{let t=m.players.get(i[1]);t&&(t.av.fireKick(),ie("hit",un(t.x,t.z)*.6));break}case"u":{let t=zn.runes[i[1]];if(!t)break;let e=Ai[t.type];Dt.burst(t.x,1.2,t.z,e.color,34,6,1.3,.8,-2),Dt.pillar(t.x,t.z,e.color),i[2]===m.myId&&(ie("level"),en([30,30,30]),Se(`${e.name}: ${e.desc}`));break}case"o":if(!zn.orbs[i[1]])break;Dt.burst(zn.orbs[i[1]][0],1.2,zn.orbs[i[1]][1],5898140,26,5,1.1,.7,-2),i[2]===m.myId&&ie("orb");break}}var wd=0;function Se(i){let t=F("toast");t.textContent=i,t.classList.add("on"),clearTimeout(wd),wd=setTimeout(()=>t.classList.remove("on"),1800)}var io=[];function g_(i,t,e,n){let s=io.find(r=>r.t<=0)||(()=>{if(io.length>=20)return null;let r={el:document.createElement("div"),t:0};return F("dmgLayer").appendChild(r.el),io.push(r),r})();s&&(s.el.className="dmg"+(n?" me":""),s.el.textContent=(n?"-":"")+e,s.t=.8,s.x=i+(Math.random()-.5)*.8,s.z=t+(Math.random()-.5)*.8,s.el.style.display="")}function x_(i){for(let t of io)if(!(t.t<=0)){if(t.t-=i,t.t<=0){t.el.style.display="none";continue}if(ri.set(t.x,2.6+(.8-t.t)*2.2,t.z).project(nn),ri.z>1){t.el.style.opacity=0;continue}t.el.style.opacity=Math.min(1,t.t*3),t.el.style.transform=`translate(${(ri.x*.5+.5)*innerWidth}px,${(-ri.y*.5+.5)*innerHeight}px) translate(-50%,-50%) scale(${1+Math.max(0,t.t-.6)*3})`}}function ro(){return[...m.roster.values()].filter(i=>!kn[i.cls]).sort((i,t)=>(m.team>=0?i.team-t.team:0)||(m.gm==="koth"||m.gm==="king"?t.pts-i.pts:0)||t.kills-i.kills||i.deaths-t.deaths)}var Rr=i=>m.team>=0&&m.roster.get(i)?.team===m.team;function __(){let i=ro(),t=m.roster.get(m.myId);t&&(F("rank").textContent="#"+(i.indexOf(t)+1),m.gm!=="pve"&&(F("myScore").textContent=m.team>=0?`${hn[0].name} ${m.teamScore[0]} \xB7 ${m.teamScore[1]} ${hn[1].name}`:m.gm==="koth"||m.gm==="king"?`${t.pts} / ${m.limit} poin`:`${t.kills} / ${m.limit||Hc}`),F("score").classList.contains("hidden")||(Vd(),!m.ended&&m.team>=0&&(F("scoreTitle").textContent=`${hn[0].name} ${m.teamScore[0]} \xB7 ${m.teamScore[1]} ${hn[1].name}`)))}function Vd(){let i=m.gm==="koth"||m.gm==="king",t=ro().map((e,n)=>`<tr class="${e.id===m.myId?"me":""}"><td>${n+1}</td><td></td>${i?`<td>${e.pts}</td>`:""}<td>${e.kills}</td><td>${e.deaths}</td></tr>`).join("");F("scoreTable").innerHTML=`<tr><th>#</th><th>Pengembara</th>${i?"<th>Poin</th>":""}<th>Kill</th><th>Gugur</th></tr>${t}`,ro().forEach((e,n)=>{let s=F("scoreTable").rows[n+1].cells[1];if(s.textContent=e.name+(e.bot?" (bot)":"")+" \xB7 "+cn[e.cls].name,e.team>=0){let r=document.createElement("i");r.className="tdot",r.style.background="#"+hn[e.team].color.toString(16).padStart(6,"0"),s.prepend(r)}})}function fh(i){Vd();let t=ro()[0],e=m.teamScore,n=e[0]===e[1]?-1:e[0]>e[1]?0:1;if(i&&m.gm==="pve"){let s=m.wv?.[3]||0;F("scoreTitle").textContent=`Bertahan sampai gelombang ${m.wv?.[0]||0}`,F("scoreNext").textContent=s?`Ronde berikutnya lanjut dari gelombang ${s+1} (titik simpan) dengan berkah acak`:"Ronde berikutnya mulai dari gelombang 1",F("score").classList.remove("hidden");return}F("scoreTitle").textContent=i?m.team>=0?n<0?"Seri":n===m.team?`Regu ${hn[n].name} Menang!`:`Regu ${hn[n].name} Menang`:t?.id===m.myId?"Kamu Menang!":`${t?.name||""} Menang`:m.team>=0?`${hn[0].name} ${e[0]} \xB7 ${e[1]} ${hn[1].name}`:"Papan Skor",F("score").classList.remove("hidden")}F("top").addEventListener("click",()=>{m.ended||(F("score").classList.contains("hidden")?fh(!1):F("score").classList.add("hidden"))});F("score").addEventListener("click",()=>{m.ended||F("score").classList.add("hidden")});var co=F("pause");F("pauseBtn").addEventListener("click",()=>{co.classList.toggle("hidden"),document.exitPointerLock?.(),ct.fire=!1});F("resume").addEventListener("click",()=>co.classList.add("hidden"));F("leave").addEventListener("click",()=>{lo(),m.myId=0,F("menuMsg").textContent=""});F("quality").addEventListener("change",i=>{Id=!1,$t.set("qualityManual","1"),$t.set("quality",i.target.value),oo(i.target.value)});F("sens").value=$t.get("sens","1");ct.sens=Number(F("sens").value);F("sens").addEventListener("input",i=>{ct.sens=Number(i.target.value),$t.set("sens",i.target.value)});F("autoFire").checked=m.autoFire;F("aimAssist").checked=m.aimAssist;F("autoFire").addEventListener("change",i=>{m.autoFire=i.target.checked,$t.set("autoFire",m.autoFire?"1":"")});F("aimAssist").addEventListener("change",i=>{m.aimAssist=i.target.checked,$t.set("aimAssist",m.aimAssist?"1":"")});F("mute").addEventListener("change",i=>yd(i.target.checked));F("music").checked=m.music;F("music").addEventListener("change",i=>{m.music=i.target.checked,$t.set("music",m.music?"1":""),sh(m.music)});F("vibrate").checked=m.vibrate;F("vibrate").addEventListener("change",i=>{m.vibrate=i.target.checked,$t.set("vibrate",m.vibrate?"1":""),m.vibrate&&en(40)});for(let i of[co])for(let t of["touchstart","touchmove"])i.addEventListener(t,e=>e.stopPropagation());var v_=F("minimap"),Wt=v_.getContext("2d"),ao=document.createElement("canvas");ao.width=ao.height=132;function Gd(){let i=ao.getContext("2d"),t=132/(gn*2+6),e=66;i.clearRect(0,0,132,132),i.fillStyle="rgba(190,170,220,0.55)";for(let n of zn.obst)n.t==="cyl"?(i.beginPath(),i.arc(e-n.x*t,e-n.z*t,Math.max(1.5,n.r*t),0,7),i.fill()):i.fillRect(e-(n.x+n.w/2)*t,e-(n.z+n.d/2)*t,n.w*t,n.d*t)}Gd();function y_(){let i=132/(gn*2+6),t=66;Wt.clearRect(0,0,132,132),Wt.drawImage(ao,0,0),m.pings=(m.pings||[]).filter(e=>e.t>m.time);for(let e of m.pings)Wt.strokeStyle="#7dffb0",Wt.lineWidth=2,Wt.beginPath(),Wt.arc(t-e.x*i,t-e.z*i,4+m.time*6%4,0,7),Wt.stroke();zn.orbs.forEach(([e,n],s)=>{m.orbMask&1<<s&&(Wt.fillStyle="#59ff9c",Wt.fillRect(t-e*i-1.5,t-n*i-1.5,3,3))}),zn.runes.forEach((e,n)=>{m.runeMask&1<<n&&(Wt.fillStyle=e.type==="dmg"?"#ff3b4e":"#4dc3ff",Wt.beginPath(),Wt.arc(t-e.x*i,t-e.z*i,3,0,7),Wt.fill())}),m.gm==="koth"&&(Wt.strokeStyle=m.holder===m.myId?"#f2c66d":m.holder===-1?"#b76bff":m.holder?"#ff4d5e":"rgba(255,242,208,.7)",Wt.lineWidth=2,Wt.beginPath(),Wt.arc(t,t,Tr*i,0,7),Wt.stroke());for(let e of m.players.values()){if(e.id===m.myId||e.flags&1)continue;let n=Rr(e.id);if(!!(e.flags&64)){Wt.fillStyle="#ffd56b",Wt.font="bold 12px sans-serif",Wt.textAlign="center",Wt.textBaseline="middle",Wt.fillText("\u2605",t-e.x*i,t-e.z*i);continue}!n&&Math.hypot(e.x-m.rx,e.z-m.rz)>32||(Wt.fillStyle=n?"#"+hn[m.team].color.toString(16).padStart(6,"0"):"#ff5a4a",Wt.beginPath(),Wt.arc(t-e.x*i,t-e.z*i,3,0,7),Wt.fill())}Wt.save(),Wt.translate(t-m.rx*i,t-m.rz*i),Wt.rotate(ct.yaw),Wt.fillStyle="#fff",Wt.beginPath(),Wt.moveTo(0,-6),Wt.lineTo(4,4),Wt.lineTo(-4,4),Wt.closePath(),Wt.fill(),Wt.restore()}gd({canvas:Pd,touchLayer:F("touchLayer"),stick:F("stick"),knob:F("knob"),fireBtn:F("fireBtn"),skillBtn:F("skillBtn"),ultBtn:F("ultBtn")});oo(es);function M_(){let i=null,t=1e9,e=m.cls.projSpeed*m.cls.projLife;for(let n of m.players.values()){if(n.id===m.myId||n.flags&1||Rr(n.id))continue;let s=n.x-m.rx,r=n.z-m.rz,a=Math.hypot(s,r);if(a>e+2||a<.5)continue;let o=Zs(Math.atan2(s,r),ct.yaw);if(Math.abs(o)>.3)continue;let l=Math.abs(o)*20+a*.05;l<t&&ud(m.rx,m.rz,n.x,n.z)&&(t=l,i={p:n,diff:o,d:a})}return i}function b_(){let i=m.ticks,t=performance.now()-od*1e3;if(!i.length)return 0;for(let e=i.length-1;e>0;e--)if(i[e-1][0]<=t){let[n,s]=i[e-1],[r,a]=i[e];return Math.round((s+(a-s)*Math.min(1,(t-n)/(r-n||1)))*10)/10}return i[0][1]}function S_(){let i=m.me.flags&1,t=!co.classList.contains("hidden"),e=Math.sin(ct.yaw),n=Math.cos(ct.yaw),s=ct.jx,r=ct.jy,a=ct.fire,o=ct.skillQueued?1:0,l=ct.ultQueued&&m.me.ult>=Zc?1:0;ct.skillQueued=!1,ct.ultQueued=!1,(t||m.ended)&&(s=r=0,a=!1,o=0,l=0);let c=(m.autoFire||m.aimAssist)&&!i&&!m.ended?M_():null;if(m.lockId=c?c.p.id:0,c){let x=Math.atan(1/c.d);m.aimAssist&&(a||m.autoFire)&&(ct.yaw+=Math.max(-1.6*ei,Math.min(1.6*ei,c.diff))),m.autoFire&&!t&&Math.abs(c.diff)<x&&(a=!0)}let h=x=>Math.round(x*1e3)/1e3,u={t:"in",s:++m.seq,mx:h(e*r-n*s),mz:h(n*r+e*s),y:h(ct.yaw),f:a&&!i?1:0,k:o,u:i?0:l,vt:b_()};if(m.ws?.readyState===1&&m.ws.send(JSON.stringify(u)),i||m.ended)return;let f=Qc(m.pred,u,m.cls,ei);m.pending.push(u),m.pending.length>90&&m.pending.shift();let d=m.players.get(m.myId);if(m.tut&&!m.tut.done){let x=m.tut,_=Math.hypot(m.pred.x-(x.px??m.pred.x),m.pred.z-(x.pz??m.pred.z));_<2&&(x.moved+=_),x.px=m.pred.x,x.pz=m.pred.z,x.lastYaw!==null&&x.i>=1&&(x.turned+=Math.abs(Zs(ct.yaw,x.lastYaw))),x.lastYaw=ct.yaw,f&&x.skills++,x.check()}f&&(ie(m.cls.skill),m.cls.skill==="dash"&&d&&Dt.burst(m.rx,1.2,m.rz,m.cls.color,24,5,1.2,.4,0)),m.localFireCd-=ei,u.f&&m.localFireCd<=0&&d&&(m.localFireCd=m.cls.fireCd,m.tut&&m.tut.shots++,d.av.fireKick(),Dt.muzzle(d.av.tipWorld(ri),m.clsKey,ct.yaw),ie(m.clsKey),m.shake=Math.max(m.shake,m.clsKey==="ranger"?.08:.22))}var js=7.2,Ad=new L,Rd=new L,Cd=performance.now(),eo=0,ah=0,so=60,no=0,oh=0;function Wd(i){requestAnimationFrame(Wd);let t=Math.min(.1,(i-Cd)/1e3);Cd=i,m.time+=t;let e=m.time;if(m.phase==="play"&&m.myId){m.acc+=t;let n=0;for(;m.acc>=ei&&n++<4;)S_(),m.acc-=ei;m.acc>ei&&(m.acc=0);let s=m.pred,a=Math.hypot(s.x-m.rx,s.z-m.rz)>6?1:Math.min(1,t*22),o=m.rx,l=m.rz;m.rx+=(s.x-m.rx)*a,m.rz+=(s.z-m.rz)*a;let c=t>0?Math.hypot(m.rx-o,m.rz-l)/t:0;c>2&&c<20&&!(m.me.flags&1)&&(m.stepT-=t*c/8.5,m.stepT<=0&&(m.stepT=.36,Md()));let h=i-110;for(let C of m.players.values()){if(C.id===m.myId)C.x=m.rx,C.z=m.rz,C.yaw=ct.yaw,C.flags=m.me.flags;else{let E=C.buf;if(E.length){let M=E.length-1;for(;M>0&&E[M-1].t>h;)M--;let U=E[M],z=E[M-1]||U,H=U.t>z.t?(h-z.t)/(U.t-z.t):1;H=Math.max(0,Math.min(1.25,H)),Math.hypot(U.x-z.x,U.z-z.z)>8&&(H=1),C.x=z.x+(U.x-z.x)*H,C.z=z.z+(U.z-z.z)*H,C.yaw=z.yaw+Zs(U.yaw,z.yaw)*Math.min(1,H)}}C.av.update(t,C.x,C.z,C.yaw,C.flags,e),C.flags&8&&Math.random()<.7&&Dt.particle(C.x,1+Math.random(),C.z,0,.5,0,ni[C.cls].color,1.3,.3,0),m.mut==="giant"&&(C.av.big=1.4),C.flags&128&&Math.random()<.5&&Dt.particle(C.x+(Math.random()-.5),.3+Math.random()*1.6,C.z+(Math.random()-.5),0,-.5,0,8378623,.9,.5,0),C.flags&1||(C.flags&16&&Math.random()<.5&&Dt.particle(C.x+(Math.random()-.5),.4+Math.random()*2,C.z+(Math.random()-.5),0,1.6,0,Ai.dmg.color,.9,.5,0),C.flags&32&&Math.random()<.5&&Dt.particle(C.x+(Math.random()-.5),.2+Math.random()*.6,C.z+(Math.random()-.5),0,.3,0,Ai.spd.color,1.1,.4,0))}let u=null;if(m.me.flags&1&&m.team>=0){let C=1e9;for(let E of m.players.values()){if(E.id===m.myId||E.flags&1||!Rr(E.id))continue;let M=Math.hypot(E.x-m.pred.x,E.z-m.pred.z);M<C&&(C=M,u=E)}}F("specTag").classList.toggle("hidden",!u),u&&(F("specTag").textContent=`Menonton ${Xe(u.id)}`);let f=u?u.x:m.rx,d=u?u.z:m.rz,x=u?u.yaw:ct.yaw,_=Math.sin(x),g=Math.cos(x),p=js;for(let C=.15;C<=1.001;C+=.085)if(Pi(f-_*js*C,d-g*js*C,.5)){p=Math.max(2.2,js*(C-.1));break}m.camDist+=(p-m.camDist)*Math.min(1,t*(p<m.camDist?16:4)),m.shake=Math.max(0,m.shake-t*2.5);let v=m.shake*m.shake*.6,S=innerHeight>innerWidth;Ad.set(f-_*m.camDist+(Math.random()-.5)*v,(S?6:4.3)+(js-m.camDist)*.55+(Math.random()-.5)*v,d-g*m.camDist),nn.position.copy(Ad);let y=.8+5.2*(m.camDist/js);Rd.set(f+_*y,2,d+g*y),nn.lookAt(Rd),ri.set(m.rx+_*20,1.55,m.rz+g*20).project(nn);let D=F("cross");if(D.style.left=(ri.x*.5+.5)*100+"%",D.style.top=(-ri.y*.5+.5)*100+"%",D.classList.toggle("lock",!!m.lockId),D.style.display=m.me.flags&1?"none":"",oh-=t,oh<=0){oh=.1;let C=m.me;F("hpFill").style.width=Math.max(0,C.hp/C.maxHp*100)+"%",F("hpText").textContent=`${Math.max(0,C.hp)} / ${C.maxHp}`,F("lvl").textContent=C.lvl;let E=Vc[C.lvl-1],M=Vc[C.lvl];F("xpFill").style.width=(C.lvl>=rd?100:Math.min(100,(C.xp-E)/(M-E)*100))+"%";let U=m.pred.skillCd;F("skillCd").style.height=U/m.cls.skillCd*100+"%",F("skillNum").textContent=U>0?Math.ceil(U):"";let z=Math.min(1,(m.me.ult||0)/Zc);F("ultRing").style.strokeDashoffset=String(176*(1-z)),F("ultBtn").classList.toggle("ready",z>=1),F("ultName").textContent=z>=1?Jc[m.clsKey].name:`${Math.floor(z*100)}%`;let H=m.ev;F("eventTag").classList.toggle("hidden",!H),H&&(F("eventTag").textContent=`${Yc[H[0]].name} \xB7 ${H[1]} dtk`),F("skillName").style.opacity=U>0?.25:1;let $=Math.max(0,m.tm);if(F("timer").textContent=m.gm==="pve"&&!m.ended?m.wv?.[1]===0?`Mulai ${$}`:`G${m.wv?.[0]||1}`:`${Math.floor($/60)}:${String($%60).padStart(2,"0")}`,m.gm==="pve"&&m.wv&&(F("myScore").textContent=m.wv[1]===0?`Gelombang ${m.wv[0]+1} segera`:`Gelombang ${m.wv[0]} \xB7 ${m.wv[2]} monster`),C.flags&1){let Y=m.rv?.find(w=>w[0]===m.myId);F("deathT").textContent=m.gm!=="pve"?`Bangkit dalam ${Math.ceil(C.respawnT)}\u2026`:Y?.[2]>0?`Nyawa cadangan: bangkit sendiri dalam ${Y[2]}\u2026`:Y?.[1]>0?`Rekan sedang menolongmu\u2026 ${Y[1]}%`:"Tunggu rekan berdiri di dekatmu 3 detik, atau gelombang selesai."}if(F("perkBar").innerHTML=m.gm==="pve"?(m.me.perks?m.me.perks.split(",").map(Y=>{let w=Y.replace(/\d+$/,""),Z=+Y.slice(w.length);return`<span>${Ci[w]?.name||w}${Z>1?" \xD7"+Z:""}</span>`}).join(""):"")+(m.me.spare?"<span>Nyawa cadangan</span>":""):"",m.me.offer&&F("perks").classList.contains("hidden")&&!(m.me.flags&1)&&Nd(m.me.offer),m.ended?F("scoreNext").textContent=m.gm==="pve"&&m.wv?.[3]?`Lanjut dari gelombang ${m.wv[3]+1} (titik simpan) dalam ${$} detik`:`Ronde berikutnya dalam ${$} detik`:F("scoreNext").textContent="",m.ended||(ct.showScore&&F("score").classList.contains("hidden")?fh(!1):!ct.showScore&&!tn&&m.tabOpen&&F("score").classList.add("hidden"),m.tabOpen=ct.showScore),F("net").textContent=`${m.ping} ms \xB7 ${so} fps`,F("buffs").innerHTML=[["dmg",m.me.dmgT],["spd",m.me.spdT]].filter(([,Y])=>Y>0).map(([Y,w])=>`<span class="buff" style="--c:#${Ai[Y].color.toString(16).padStart(6,"0")}"><i></i>${Ai[Y].name.replace("Rune ","")} ${Math.ceil(w)}</span>`).join(""),m.gm==="king"){let Y=[...m.players.values()].find(Z=>Z.flags&64),w=F("zoneTag");w.textContent=Y?Y.id===m.myId?"Kamu sang RAJA: bertahan hidup untuk poin!":`Buru sang raja: ${Xe(Y.id)}`:"Mahkota menunggu pemilik baru\u2026",w.style.setProperty("--c",Y?.id===m.myId?"#f2c66d":"#ff4d5e")}if(m.gm==="koth"){let Y=m.holder,w=F("zoneTag"),Z=Math.hypot(m.rx,m.rz)<Tr;w.textContent=Y===m.myId?"Kamu menguasai altar":Y===-1?"Altar diperebutkan":Y?`Altar dikuasai ${Xe(Y)}`:Z?"Bertahan di lingkaran untuk mengumpulkan poin":"Altar kosong: rebut lingkaran di tengah",w.style.setProperty("--c",Y===m.myId?"#f2c66d":Y===-1?"#b76bff":Y?"#ff4d5e":"#fff2d0")}y_()}x_(t),ve.update(e,{x:m.rx,z:m.rz},m.orbMask,m.barrelMask),o_(e),l_(),ch.update(e,m.runeMask,m.gm,m.holder,m.myId);let R=m.ev?.[0]==="eclipse"?1:0;m.eclipse=(m.eclipse||0)+(R-(m.eclipse||0))*Math.min(1,t*1.5),wn.toneMappingExposure=1.15-.7*m.eclipse,ve.fog&&(ve.fogBase??=ve.fog.density,ve.fog.density=ve.fogBase*(1+3.5*m.eclipse));let I=m.ev?.[0]==="golden"&&!m.ev[4];On.visible=I,I&&(On.position.set(m.ev[2],1.1+Math.sin(e*2.5)*.15,m.ev[3]),On.rotation.y=e*1.2)}else{let n=e*.08;nn.position.set(Math.sin(n)*30,9+Math.sin(e*.2)*1.5,Math.cos(n)*30),nn.lookAt(0,3.5,0),ve.update(e,{x:0,z:0},255),ch.update(e,15,"dm",0,0)}Dt.update(t),es==="low"?wn.render(An,nn):Qs.render(t),eo+=t,ah++,eo>=1&&(so=Math.round(ah/eo),eo=0,ah=0,Id&&!document.hidden&&m.time>4&&(no=so<27?no+1:0,no>=3&&es!=="low"&&(no=0,oo(es==="high"?"medium":"low"),$t.set("quality",es))))}requestAnimationFrame(Wd);
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
