(() => {
  // vendor/three.core.min.js
  var t = "185";
  var i = 0;
  var r = 1;
  var n = 2;
  var h = 1;
  var l = 2;
  var c = 3;
  var u = 0;
  var d = 1;
  var p = 2;
  var m = 0;
  var y = 1;
  var g = 2;
  var f = 3;
  var x = 4;
  var b = 5;
  var w = 100;
  var M = 101;
  var S = 102;
  var _ = 103;
  var A = 104;
  var T = 200;
  var z = 201;
  var C = 202;
  var I = 203;
  var B = 204;
  var k = 205;
  var O = 206;
  var P = 207;
  var R = 208;
  var E = 209;
  var N = 210;
  var V = 211;
  var L = 212;
  var F = 213;
  var D = 214;
  var U = 0;
  var j = 1;
  var W = 2;
  var J = 3;
  var q = 4;
  var H = 5;
  var X = 6;
  var Y = 7;
  var Z = 0;
  var G = 1;
  var $ = 2;
  var Q = 0;
  var K = 1;
  var tt = 2;
  var et = 3;
  var st = 4;
  var it = 5;
  var rt = 6;
  var nt = 7;
  var ht = 300;
  var lt = 301;
  var ct = 302;
  var ut = 303;
  var dt = 304;
  var pt = 306;
  var mt = 1e3;
  var yt = 1001;
  var gt = 1002;
  var ft = 1003;
  var xt = 1004;
  var vt = 1005;
  var Mt = 1006;
  var St = 1007;
  var At = 1008;
  var zt = 1009;
  var Ct = 1010;
  var It = 1011;
  var Bt = 1012;
  var kt = 1013;
  var Ot = 1014;
  var Pt = 1015;
  var Rt = 1016;
  var Et = 1017;
  var Nt = 1018;
  var Vt = 1020;
  var Lt = 35902;
  var Ft = 35899;
  var Dt = 1021;
  var Ut = 1022;
  var jt = 1023;
  var Wt = 1026;
  var Jt = 1027;
  var qt = 1028;
  var Ht = 1029;
  var Xt = 1030;
  var Yt = 1031;
  var Gt = 1033;
  var $t = 33776;
  var Qt = 33777;
  var Kt = 33778;
  var te = 33779;
  var ee = 35840;
  var se = 35841;
  var ie = 35842;
  var re = 35843;
  var ne = 36196;
  var ae = 37492;
  var oe = 37496;
  var he = 37488;
  var le = 37489;
  var ce = 37490;
  var ue = 37491;
  var de = 37808;
  var pe = 37809;
  var me = 37810;
  var ye = 37811;
  var ge = 37812;
  var fe = 37813;
  var xe = 37814;
  var be = 37815;
  var ve = 37816;
  var we = 37817;
  var Me = 37818;
  var Se = 37819;
  var _e = 37820;
  var Ae = 37821;
  var Te = 36492;
  var ze = 36494;
  var Ce = 36495;
  var Ie = 36283;
  var Be = 36284;
  var ke = 36285;
  var Oe = 36286;
  var Ne = 2300;
  var Ve = 2301;
  var Le = 2302;
  var Fe = 2303;
  var De = 2400;
  var Ue = 2401;
  var je = 2402;
  var Qe = 0;
  var Ke = 1;
  var ts = "";
  var es = "srgb";
  var ss = "srgb-linear";
  var is = "linear";
  var rs = "srgb";
  var ls = 7680;
  var _s = 512;
  var As = 513;
  var Ts = 514;
  var zs = 515;
  var Cs = 516;
  var Is = 517;
  var Bs = 518;
  var ks = 519;
  var Os = 35044;
  var js = "300 es";
  var Ws = 2e3;
  var Js = 2001;
  function $s(t2) {
    return ArrayBuffer.isView(t2) && !(t2 instanceof DataView);
  }
  function Qs(t2) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", t2);
  }
  function Ks() {
    const t2 = Qs("canvas");
    return t2.style.display = "block", t2;
  }
  var ti = {};
  var ei = null;
  function ri(...t2) {
    const e2 = "THREE." + t2.shift();
    ei ? ei("log", e2, ...t2) : console.log(e2, ...t2);
  }
  function ni(t2) {
    const e2 = t2[0];
    if ("string" == typeof e2 && e2.startsWith("TSL:")) {
      const e3 = t2[1];
      e3 && e3.isStackTrace ? t2[0] += " " + e3.getLocation() : t2[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
    }
    return t2;
  }
  function ai(...t2) {
    const e2 = "THREE." + (t2 = ni(t2)).shift();
    if (ei) ei("warn", e2, ...t2);
    else {
      const s2 = t2[0];
      s2 && s2.isStackTrace ? console.warn(s2.getError(e2)) : console.warn(e2, ...t2);
    }
  }
  function oi(...t2) {
    const e2 = "THREE." + (t2 = ni(t2)).shift();
    if (ei) ei("error", e2, ...t2);
    else {
      const s2 = t2[0];
      s2 && s2.isStackTrace ? console.error(s2.getError(e2)) : console.error(e2, ...t2);
    }
  }
  function hi(...t2) {
    const e2 = t2.join(" ");
    e2 in ti || (ti[e2] = true, ai(...t2));
  }
  function ci(t2, e2, s2) {
    return new Promise(function(i2, r2) {
      setTimeout(function n2() {
        switch (t2.clientWaitSync(e2, t2.SYNC_FLUSH_COMMANDS_BIT, 0)) {
          case t2.WAIT_FAILED:
            r2();
            break;
          case t2.TIMEOUT_EXPIRED:
            setTimeout(n2, s2);
            break;
          default:
            i2();
        }
      }, s2);
    });
  }
  var ui = { [U]: 1, [W]: 6, [q]: 7, [J]: 5, [j]: 0, [X]: 2, [Y]: 4, [H]: 3 };
  var di = class {
    addEventListener(t2, e2) {
      void 0 === this._listeners && (this._listeners = {});
      const s2 = this._listeners;
      void 0 === s2[t2] && (s2[t2] = []), -1 === s2[t2].indexOf(e2) && s2[t2].push(e2);
    }
    hasEventListener(t2, e2) {
      const s2 = this._listeners;
      return void 0 !== s2 && (void 0 !== s2[t2] && -1 !== s2[t2].indexOf(e2));
    }
    removeEventListener(t2, e2) {
      const s2 = this._listeners;
      if (void 0 === s2) return;
      const i2 = s2[t2];
      if (void 0 !== i2) {
        const t3 = i2.indexOf(e2);
        -1 !== t3 && i2.splice(t3, 1);
      }
    }
    dispatchEvent(t2) {
      const e2 = this._listeners;
      if (void 0 === e2) return;
      const s2 = e2[t2.type];
      if (void 0 !== s2) {
        t2.target = this;
        const e3 = s2.slice(0);
        for (let s3 = 0, i2 = e3.length; s3 < i2; s3++) e3[s3].call(this, t2);
        t2.target = null;
      }
    }
  };
  var pi = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  var yi = Math.PI / 180;
  var gi = 180 / Math.PI;
  function fi() {
    const t2 = 4294967295 * Math.random() | 0, e2 = 4294967295 * Math.random() | 0, s2 = 4294967295 * Math.random() | 0, i2 = 4294967295 * Math.random() | 0;
    return (pi[255 & t2] + pi[t2 >> 8 & 255] + pi[t2 >> 16 & 255] + pi[t2 >> 24 & 255] + "-" + pi[255 & e2] + pi[e2 >> 8 & 255] + "-" + pi[e2 >> 16 & 15 | 64] + pi[e2 >> 24 & 255] + "-" + pi[63 & s2 | 128] + pi[s2 >> 8 & 255] + "-" + pi[s2 >> 16 & 255] + pi[s2 >> 24 & 255] + pi[255 & i2] + pi[i2 >> 8 & 255] + pi[i2 >> 16 & 255] + pi[i2 >> 24 & 255]).toLowerCase();
  }
  function xi(t2, e2, s2) {
    return Math.max(e2, Math.min(s2, t2));
  }
  function bi(t2, e2) {
    return (t2 % e2 + e2) % e2;
  }
  function vi(t2, e2, s2) {
    return (1 - s2) * t2 + s2 * e2;
  }
  function wi(t2, e2) {
    switch (e2.constructor) {
      case Float32Array:
        return t2;
      case Uint32Array:
        return t2 / 4294967295;
      case Uint16Array:
        return t2 / 65535;
      case Uint8Array:
        return t2 / 255;
      case Int32Array:
        return Math.max(t2 / 2147483647, -1);
      case Int16Array:
        return Math.max(t2 / 32767, -1);
      case Int8Array:
        return Math.max(t2 / 127, -1);
      default:
        throw new Error("THREE.MathUtils: Invalid component type.");
    }
  }
  function Mi(t2, e2) {
    switch (e2.constructor) {
      case Float32Array:
        return t2;
      case Uint32Array:
        return Math.round(4294967295 * t2);
      case Uint16Array:
        return Math.round(65535 * t2);
      case Uint8Array:
        return Math.round(255 * t2);
      case Int32Array:
        return Math.round(2147483647 * t2);
      case Int16Array:
        return Math.round(32767 * t2);
      case Int8Array:
        return Math.round(127 * t2);
      default:
        throw new Error("THREE.MathUtils: Invalid component type.");
    }
  }
  var _i = class __i {
    static {
      __i.prototype.isVector2 = true;
    }
    constructor(t2 = 0, e2 = 0) {
      this.x = t2, this.y = e2;
    }
    get width() {
      return this.x;
    }
    set width(t2) {
      this.x = t2;
    }
    get height() {
      return this.y;
    }
    set height(t2) {
      this.y = t2;
    }
    set(t2, e2) {
      return this.x = t2, this.y = e2, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setComponent(t2, e2) {
      switch (t2) {
        case 0:
          this.x = e2;
          break;
        case 1:
          this.y = e2;
          break;
        default:
          throw new Error("THREE.Vector2: index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("THREE.Vector2: index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this;
    }
    addVectors(t2, e2) {
      return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this;
    }
    addScaledVector(t2, e2) {
      return this.x += t2.x * e2, this.y += t2.y * e2, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this;
    }
    subVectors(t2, e2) {
      return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this;
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    applyMatrix3(t2) {
      const e2 = this.x, s2 = this.y, i2 = t2.elements;
      return this.x = i2[0] * e2 + i2[3] * s2 + i2[6], this.y = i2[1] * e2 + i2[4] * s2 + i2[7], this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this;
    }
    clamp(t2, e2) {
      return this.x = xi(this.x, t2.x, e2.x), this.y = xi(this.y, t2.y, e2.y), this;
    }
    clampScalar(t2, e2) {
      return this.x = xi(this.x, t2, e2), this.y = xi(this.y, t2, e2), this;
    }
    clampLength(t2, e2) {
      const s2 = this.length();
      return this.divideScalar(s2 || 1).multiplyScalar(xi(s2, t2, e2));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y;
    }
    cross(t2) {
      return this.x * t2.y - this.y * t2.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(t2) {
      const e2 = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e2) return Math.PI / 2;
      const s2 = this.dot(t2) / e2;
      return Math.acos(xi(s2, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e2 = this.x - t2.x, s2 = this.y - t2.y;
      return e2 * e2 + s2 * s2;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e2) {
      return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this;
    }
    lerpVectors(t2, e2, s2) {
      return this.x = t2.x + (e2.x - t2.x) * s2, this.y = t2.y + (e2.y - t2.y) * s2, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y;
    }
    fromArray(t2, e2 = 0) {
      return this.x = t2[e2], this.y = t2[e2 + 1], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.x, t2[e2 + 1] = this.y, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.x = t2.getX(e2), this.y = t2.getY(e2), this;
    }
    rotateAround(t2, e2) {
      const s2 = Math.cos(e2), i2 = Math.sin(e2), r2 = this.x - t2.x, n2 = this.y - t2.y;
      return this.x = r2 * s2 - n2 * i2 + t2.x, this.y = r2 * i2 + n2 * s2 + t2.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  };
  var Ai = class {
    constructor(t2 = 0, e2 = 0, s2 = 0, i2 = 1) {
      this.isQuaternion = true, this._x = t2, this._y = e2, this._z = s2, this._w = i2;
    }
    static slerpFlat(t2, e2, s2, i2, r2, n2, a2) {
      let o2 = s2[i2 + 0], h2 = s2[i2 + 1], l2 = s2[i2 + 2], c2 = s2[i2 + 3], u2 = r2[n2 + 0], d2 = r2[n2 + 1], p2 = r2[n2 + 2], m2 = r2[n2 + 3];
      if (c2 !== m2 || o2 !== u2 || h2 !== d2 || l2 !== p2) {
        let t3 = o2 * u2 + h2 * d2 + l2 * p2 + c2 * m2;
        t3 < 0 && (u2 = -u2, d2 = -d2, p2 = -p2, m2 = -m2, t3 = -t3);
        let e3 = 1 - a2;
        if (t3 < 0.9995) {
          const s3 = Math.acos(t3), i3 = Math.sin(s3);
          e3 = Math.sin(e3 * s3) / i3, o2 = o2 * e3 + u2 * (a2 = Math.sin(a2 * s3) / i3), h2 = h2 * e3 + d2 * a2, l2 = l2 * e3 + p2 * a2, c2 = c2 * e3 + m2 * a2;
        } else {
          o2 = o2 * e3 + u2 * a2, h2 = h2 * e3 + d2 * a2, l2 = l2 * e3 + p2 * a2, c2 = c2 * e3 + m2 * a2;
          const t4 = 1 / Math.sqrt(o2 * o2 + h2 * h2 + l2 * l2 + c2 * c2);
          o2 *= t4, h2 *= t4, l2 *= t4, c2 *= t4;
        }
      }
      t2[e2] = o2, t2[e2 + 1] = h2, t2[e2 + 2] = l2, t2[e2 + 3] = c2;
    }
    static multiplyQuaternionsFlat(t2, e2, s2, i2, r2, n2) {
      const a2 = s2[i2], o2 = s2[i2 + 1], h2 = s2[i2 + 2], l2 = s2[i2 + 3], c2 = r2[n2], u2 = r2[n2 + 1], d2 = r2[n2 + 2], p2 = r2[n2 + 3];
      return t2[e2] = a2 * p2 + l2 * c2 + o2 * d2 - h2 * u2, t2[e2 + 1] = o2 * p2 + l2 * u2 + h2 * c2 - a2 * d2, t2[e2 + 2] = h2 * p2 + l2 * d2 + a2 * u2 - o2 * c2, t2[e2 + 3] = l2 * p2 - a2 * c2 - o2 * u2 - h2 * d2, t2;
    }
    get x() {
      return this._x;
    }
    set x(t2) {
      this._x = t2, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t2) {
      this._y = t2, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t2) {
      this._z = t2, this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(t2) {
      this._w = t2, this._onChangeCallback();
    }
    set(t2, e2, s2, i2) {
      return this._x = t2, this._y = e2, this._z = s2, this._w = i2, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t2) {
      return this._x = t2.x, this._y = t2.y, this._z = t2.z, this._w = t2.w, this._onChangeCallback(), this;
    }
    setFromEuler(t2, e2 = true) {
      const s2 = t2._x, i2 = t2._y, r2 = t2._z, n2 = t2._order, a2 = Math.cos, o2 = Math.sin, h2 = a2(s2 / 2), l2 = a2(i2 / 2), c2 = a2(r2 / 2), u2 = o2(s2 / 2), d2 = o2(i2 / 2), p2 = o2(r2 / 2);
      switch (n2) {
        case "XYZ":
          this._x = u2 * l2 * c2 + h2 * d2 * p2, this._y = h2 * d2 * c2 - u2 * l2 * p2, this._z = h2 * l2 * p2 + u2 * d2 * c2, this._w = h2 * l2 * c2 - u2 * d2 * p2;
          break;
        case "YXZ":
          this._x = u2 * l2 * c2 + h2 * d2 * p2, this._y = h2 * d2 * c2 - u2 * l2 * p2, this._z = h2 * l2 * p2 - u2 * d2 * c2, this._w = h2 * l2 * c2 + u2 * d2 * p2;
          break;
        case "ZXY":
          this._x = u2 * l2 * c2 - h2 * d2 * p2, this._y = h2 * d2 * c2 + u2 * l2 * p2, this._z = h2 * l2 * p2 + u2 * d2 * c2, this._w = h2 * l2 * c2 - u2 * d2 * p2;
          break;
        case "ZYX":
          this._x = u2 * l2 * c2 - h2 * d2 * p2, this._y = h2 * d2 * c2 + u2 * l2 * p2, this._z = h2 * l2 * p2 - u2 * d2 * c2, this._w = h2 * l2 * c2 + u2 * d2 * p2;
          break;
        case "YZX":
          this._x = u2 * l2 * c2 + h2 * d2 * p2, this._y = h2 * d2 * c2 + u2 * l2 * p2, this._z = h2 * l2 * p2 - u2 * d2 * c2, this._w = h2 * l2 * c2 - u2 * d2 * p2;
          break;
        case "XZY":
          this._x = u2 * l2 * c2 - h2 * d2 * p2, this._y = h2 * d2 * c2 - u2 * l2 * p2, this._z = h2 * l2 * p2 + u2 * d2 * c2, this._w = h2 * l2 * c2 + u2 * d2 * p2;
          break;
        default:
          ai("Quaternion: .setFromEuler() encountered an unknown order: " + n2);
      }
      return true === e2 && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t2, e2) {
      const s2 = e2 / 2, i2 = Math.sin(s2);
      return this._x = t2.x * i2, this._y = t2.y * i2, this._z = t2.z * i2, this._w = Math.cos(s2), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2) {
      const e2 = t2.elements, s2 = e2[0], i2 = e2[4], r2 = e2[8], n2 = e2[1], a2 = e2[5], o2 = e2[9], h2 = e2[2], l2 = e2[6], c2 = e2[10], u2 = s2 + a2 + c2;
      if (u2 > 0) {
        const t3 = 0.5 / Math.sqrt(u2 + 1);
        this._w = 0.25 / t3, this._x = (l2 - o2) * t3, this._y = (r2 - h2) * t3, this._z = (n2 - i2) * t3;
      } else if (s2 > a2 && s2 > c2) {
        const t3 = 2 * Math.sqrt(1 + s2 - a2 - c2);
        this._w = (l2 - o2) / t3, this._x = 0.25 * t3, this._y = (i2 + n2) / t3, this._z = (r2 + h2) / t3;
      } else if (a2 > c2) {
        const t3 = 2 * Math.sqrt(1 + a2 - s2 - c2);
        this._w = (r2 - h2) / t3, this._x = (i2 + n2) / t3, this._y = 0.25 * t3, this._z = (o2 + l2) / t3;
      } else {
        const t3 = 2 * Math.sqrt(1 + c2 - s2 - a2);
        this._w = (n2 - i2) / t3, this._x = (r2 + h2) / t3, this._y = (o2 + l2) / t3, this._z = 0.25 * t3;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t2, e2) {
      let s2 = t2.dot(e2) + 1;
      return s2 < 1e-8 ? (s2 = 0, Math.abs(t2.x) > Math.abs(t2.z) ? (this._x = -t2.y, this._y = t2.x, this._z = 0, this._w = s2) : (this._x = 0, this._y = -t2.z, this._z = t2.y, this._w = s2)) : (this._x = t2.y * e2.z - t2.z * e2.y, this._y = t2.z * e2.x - t2.x * e2.z, this._z = t2.x * e2.y - t2.y * e2.x, this._w = s2), this.normalize();
    }
    angleTo(t2) {
      return 2 * Math.acos(Math.abs(xi(this.dot(t2), -1, 1)));
    }
    rotateTowards(t2, e2) {
      const s2 = this.angleTo(t2);
      if (0 === s2) return this;
      const i2 = Math.min(1, e2 / s2);
      return this.slerp(t2, i2), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(t2) {
      return this._x * t2._x + this._y * t2._y + this._z * t2._z + this._w * t2._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let t2 = this.length();
      return 0 === t2 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t2 = 1 / t2, this._x = this._x * t2, this._y = this._y * t2, this._z = this._z * t2, this._w = this._w * t2), this._onChangeCallback(), this;
    }
    multiply(t2) {
      return this.multiplyQuaternions(this, t2);
    }
    premultiply(t2) {
      return this.multiplyQuaternions(t2, this);
    }
    multiplyQuaternions(t2, e2) {
      const s2 = t2._x, i2 = t2._y, r2 = t2._z, n2 = t2._w, a2 = e2._x, o2 = e2._y, h2 = e2._z, l2 = e2._w;
      return this._x = s2 * l2 + n2 * a2 + i2 * h2 - r2 * o2, this._y = i2 * l2 + n2 * o2 + r2 * a2 - s2 * h2, this._z = r2 * l2 + n2 * h2 + s2 * o2 - i2 * a2, this._w = n2 * l2 - s2 * a2 - i2 * o2 - r2 * h2, this._onChangeCallback(), this;
    }
    slerp(t2, e2) {
      let s2 = t2._x, i2 = t2._y, r2 = t2._z, n2 = t2._w, a2 = this.dot(t2);
      a2 < 0 && (s2 = -s2, i2 = -i2, r2 = -r2, n2 = -n2, a2 = -a2);
      let o2 = 1 - e2;
      if (a2 < 0.9995) {
        const t3 = Math.acos(a2), h2 = Math.sin(t3);
        o2 = Math.sin(o2 * t3) / h2, e2 = Math.sin(e2 * t3) / h2, this._x = this._x * o2 + s2 * e2, this._y = this._y * o2 + i2 * e2, this._z = this._z * o2 + r2 * e2, this._w = this._w * o2 + n2 * e2, this._onChangeCallback();
      } else this._x = this._x * o2 + s2 * e2, this._y = this._y * o2 + i2 * e2, this._z = this._z * o2 + r2 * e2, this._w = this._w * o2 + n2 * e2, this.normalize();
      return this;
    }
    slerpQuaternions(t2, e2, s2) {
      return this.copy(t2).slerp(e2, s2);
    }
    random() {
      const t2 = 2 * Math.PI * Math.random(), e2 = 2 * Math.PI * Math.random(), s2 = Math.random(), i2 = Math.sqrt(1 - s2), r2 = Math.sqrt(s2);
      return this.set(i2 * Math.sin(t2), i2 * Math.cos(t2), r2 * Math.sin(e2), r2 * Math.cos(e2));
    }
    equals(t2) {
      return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._w === this._w;
    }
    fromArray(t2, e2 = 0) {
      return this._x = t2[e2], this._y = t2[e2 + 1], this._z = t2[e2 + 2], this._w = t2[e2 + 3], this._onChangeCallback(), this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this._x, t2[e2 + 1] = this._y, t2[e2 + 2] = this._z, t2[e2 + 3] = this._w, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this._x = t2.getX(e2), this._y = t2.getY(e2), this._z = t2.getZ(e2), this._w = t2.getW(e2), this._onChangeCallback(), this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(t2) {
      return this._onChangeCallback = t2, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  };
  var Ti = class _Ti {
    static {
      _Ti.prototype.isVector3 = true;
    }
    constructor(t2 = 0, e2 = 0, s2 = 0) {
      this.x = t2, this.y = e2, this.z = s2;
    }
    set(t2, e2, s2) {
      return void 0 === s2 && (s2 = this.z), this.x = t2, this.y = e2, this.z = s2, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this.z = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setZ(t2) {
      return this.z = t2, this;
    }
    setComponent(t2, e2) {
      switch (t2) {
        case 0:
          this.x = e2;
          break;
        case 1:
          this.y = e2;
          break;
        case 2:
          this.z = e2;
          break;
        default:
          throw new Error("THREE.Vector3: index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("THREE.Vector3: index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this.z = t2.z, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this.z += t2.z, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this.z += t2, this;
    }
    addVectors(t2, e2) {
      return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this.z = t2.z + e2.z, this;
    }
    addScaledVector(t2, e2) {
      return this.x += t2.x * e2, this.y += t2.y * e2, this.z += t2.z * e2, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this;
    }
    subVectors(t2, e2) {
      return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this.z = t2.z - e2.z, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this;
    }
    multiplyVectors(t2, e2) {
      return this.x = t2.x * e2.x, this.y = t2.y * e2.y, this.z = t2.z * e2.z, this;
    }
    applyEuler(t2) {
      return this.applyQuaternion(Ci.setFromEuler(t2));
    }
    applyAxisAngle(t2, e2) {
      return this.applyQuaternion(Ci.setFromAxisAngle(t2, e2));
    }
    applyMatrix3(t2) {
      const e2 = this.x, s2 = this.y, i2 = this.z, r2 = t2.elements;
      return this.x = r2[0] * e2 + r2[3] * s2 + r2[6] * i2, this.y = r2[1] * e2 + r2[4] * s2 + r2[7] * i2, this.z = r2[2] * e2 + r2[5] * s2 + r2[8] * i2, this;
    }
    applyNormalMatrix(t2) {
      return this.applyMatrix3(t2).normalize();
    }
    applyMatrix4(t2) {
      const e2 = this.x, s2 = this.y, i2 = this.z, r2 = t2.elements, n2 = 1 / (r2[3] * e2 + r2[7] * s2 + r2[11] * i2 + r2[15]);
      return this.x = (r2[0] * e2 + r2[4] * s2 + r2[8] * i2 + r2[12]) * n2, this.y = (r2[1] * e2 + r2[5] * s2 + r2[9] * i2 + r2[13]) * n2, this.z = (r2[2] * e2 + r2[6] * s2 + r2[10] * i2 + r2[14]) * n2, this;
    }
    applyQuaternion(t2) {
      const e2 = this.x, s2 = this.y, i2 = this.z, r2 = t2.x, n2 = t2.y, a2 = t2.z, o2 = t2.w, h2 = 2 * (n2 * i2 - a2 * s2), l2 = 2 * (a2 * e2 - r2 * i2), c2 = 2 * (r2 * s2 - n2 * e2);
      return this.x = e2 + o2 * h2 + n2 * c2 - a2 * l2, this.y = s2 + o2 * l2 + a2 * h2 - r2 * c2, this.z = i2 + o2 * c2 + r2 * l2 - n2 * h2, this;
    }
    project(t2) {
      return this.applyMatrix4(t2.matrixWorldInverse).applyMatrix4(t2.projectionMatrix);
    }
    unproject(t2) {
      return this.applyMatrix4(t2.projectionMatrixInverse).applyMatrix4(t2.matrixWorld);
    }
    transformDirection(t2) {
      const e2 = this.x, s2 = this.y, i2 = this.z, r2 = t2.elements;
      return this.x = r2[0] * e2 + r2[4] * s2 + r2[8] * i2, this.y = r2[1] * e2 + r2[5] * s2 + r2[9] * i2, this.z = r2[2] * e2 + r2[6] * s2 + r2[10] * i2, this.normalize();
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this;
    }
    clamp(t2, e2) {
      return this.x = xi(this.x, t2.x, e2.x), this.y = xi(this.y, t2.y, e2.y), this.z = xi(this.z, t2.z, e2.z), this;
    }
    clampScalar(t2, e2) {
      return this.x = xi(this.x, t2, e2), this.y = xi(this.y, t2, e2), this.z = xi(this.z, t2, e2), this;
    }
    clampLength(t2, e2) {
      const s2 = this.length();
      return this.divideScalar(s2 || 1).multiplyScalar(xi(s2, t2, e2));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y + this.z * t2.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e2) {
      return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this.z += (t2.z - this.z) * e2, this;
    }
    lerpVectors(t2, e2, s2) {
      return this.x = t2.x + (e2.x - t2.x) * s2, this.y = t2.y + (e2.y - t2.y) * s2, this.z = t2.z + (e2.z - t2.z) * s2, this;
    }
    cross(t2) {
      return this.crossVectors(this, t2);
    }
    crossVectors(t2, e2) {
      const s2 = t2.x, i2 = t2.y, r2 = t2.z, n2 = e2.x, a2 = e2.y, o2 = e2.z;
      return this.x = i2 * o2 - r2 * a2, this.y = r2 * n2 - s2 * o2, this.z = s2 * a2 - i2 * n2, this;
    }
    projectOnVector(t2) {
      const e2 = t2.lengthSq();
      if (0 === e2) return this.set(0, 0, 0);
      const s2 = t2.dot(this) / e2;
      return this.copy(t2).multiplyScalar(s2);
    }
    projectOnPlane(t2) {
      return zi.copy(this).projectOnVector(t2), this.sub(zi);
    }
    reflect(t2) {
      return this.sub(zi.copy(t2).multiplyScalar(2 * this.dot(t2)));
    }
    angleTo(t2) {
      const e2 = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e2) return Math.PI / 2;
      const s2 = this.dot(t2) / e2;
      return Math.acos(xi(s2, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e2 = this.x - t2.x, s2 = this.y - t2.y, i2 = this.z - t2.z;
      return e2 * e2 + s2 * s2 + i2 * i2;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y) + Math.abs(this.z - t2.z);
    }
    setFromSpherical(t2) {
      return this.setFromSphericalCoords(t2.radius, t2.phi, t2.theta);
    }
    setFromSphericalCoords(t2, e2, s2) {
      const i2 = Math.sin(e2) * t2;
      return this.x = i2 * Math.sin(s2), this.y = Math.cos(e2) * t2, this.z = i2 * Math.cos(s2), this;
    }
    setFromCylindrical(t2) {
      return this.setFromCylindricalCoords(t2.radius, t2.theta, t2.y);
    }
    setFromCylindricalCoords(t2, e2, s2) {
      return this.x = t2 * Math.sin(e2), this.y = s2, this.z = t2 * Math.cos(e2), this;
    }
    setFromMatrixPosition(t2) {
      const e2 = t2.elements;
      return this.x = e2[12], this.y = e2[13], this.z = e2[14], this;
    }
    setFromMatrixScale(t2) {
      const e2 = this.setFromMatrixColumn(t2, 0).length(), s2 = this.setFromMatrixColumn(t2, 1).length(), i2 = this.setFromMatrixColumn(t2, 2).length();
      return this.x = e2, this.y = s2, this.z = i2, this;
    }
    setFromMatrixColumn(t2, e2) {
      return this.fromArray(t2.elements, 4 * e2);
    }
    setFromMatrix3Column(t2, e2) {
      return this.fromArray(t2.elements, 3 * e2);
    }
    setFromEuler(t2) {
      return this.x = t2._x, this.y = t2._y, this.z = t2._z, this;
    }
    setFromColor(t2) {
      return this.x = t2.r, this.y = t2.g, this.z = t2.b, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y && t2.z === this.z;
    }
    fromArray(t2, e2 = 0) {
      return this.x = t2[e2], this.y = t2[e2 + 1], this.z = t2[e2 + 2], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.x, t2[e2 + 1] = this.y, t2[e2 + 2] = this.z, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.x = t2.getX(e2), this.y = t2.getY(e2), this.z = t2.getZ(e2), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      const t2 = Math.random() * Math.PI * 2, e2 = 2 * Math.random() - 1, s2 = Math.sqrt(1 - e2 * e2);
      return this.x = s2 * Math.cos(t2), this.y = e2, this.z = s2 * Math.sin(t2), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  };
  var zi = new Ti();
  var Ci = new Ai();
  var Ii = class _Ii {
    static {
      _Ii.prototype.isMatrix3 = true;
    }
    constructor(t2, e2, s2, i2, r2, n2, a2, o2, h2) {
      this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e2, s2, i2, r2, n2, a2, o2, h2);
    }
    set(t2, e2, s2, i2, r2, n2, a2, o2, h2) {
      const l2 = this.elements;
      return l2[0] = t2, l2[1] = i2, l2[2] = a2, l2[3] = e2, l2[4] = r2, l2[5] = o2, l2[6] = s2, l2[7] = n2, l2[8] = h2, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(t2) {
      const e2 = this.elements, s2 = t2.elements;
      return e2[0] = s2[0], e2[1] = s2[1], e2[2] = s2[2], e2[3] = s2[3], e2[4] = s2[4], e2[5] = s2[5], e2[6] = s2[6], e2[7] = s2[7], e2[8] = s2[8], this;
    }
    extractBasis(t2, e2, s2) {
      return t2.setFromMatrix3Column(this, 0), e2.setFromMatrix3Column(this, 1), s2.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(t2) {
      const e2 = t2.elements;
      return this.set(e2[0], e2[4], e2[8], e2[1], e2[5], e2[9], e2[2], e2[6], e2[10]), this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e2) {
      const s2 = t2.elements, i2 = e2.elements, r2 = this.elements, n2 = s2[0], a2 = s2[3], o2 = s2[6], h2 = s2[1], l2 = s2[4], c2 = s2[7], u2 = s2[2], d2 = s2[5], p2 = s2[8], m2 = i2[0], y2 = i2[3], g2 = i2[6], f2 = i2[1], x2 = i2[4], b2 = i2[7], v2 = i2[2], w2 = i2[5], M2 = i2[8];
      return r2[0] = n2 * m2 + a2 * f2 + o2 * v2, r2[3] = n2 * y2 + a2 * x2 + o2 * w2, r2[6] = n2 * g2 + a2 * b2 + o2 * M2, r2[1] = h2 * m2 + l2 * f2 + c2 * v2, r2[4] = h2 * y2 + l2 * x2 + c2 * w2, r2[7] = h2 * g2 + l2 * b2 + c2 * M2, r2[2] = u2 * m2 + d2 * f2 + p2 * v2, r2[5] = u2 * y2 + d2 * x2 + p2 * w2, r2[8] = u2 * g2 + d2 * b2 + p2 * M2, this;
    }
    multiplyScalar(t2) {
      const e2 = this.elements;
      return e2[0] *= t2, e2[3] *= t2, e2[6] *= t2, e2[1] *= t2, e2[4] *= t2, e2[7] *= t2, e2[2] *= t2, e2[5] *= t2, e2[8] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e2 = t2[0], s2 = t2[1], i2 = t2[2], r2 = t2[3], n2 = t2[4], a2 = t2[5], o2 = t2[6], h2 = t2[7], l2 = t2[8];
      return e2 * n2 * l2 - e2 * a2 * h2 - s2 * r2 * l2 + s2 * a2 * o2 + i2 * r2 * h2 - i2 * n2 * o2;
    }
    invert() {
      const t2 = this.elements, e2 = t2[0], s2 = t2[1], i2 = t2[2], r2 = t2[3], n2 = t2[4], a2 = t2[5], o2 = t2[6], h2 = t2[7], l2 = t2[8], c2 = l2 * n2 - a2 * h2, u2 = a2 * o2 - l2 * r2, d2 = h2 * r2 - n2 * o2, p2 = e2 * c2 + s2 * u2 + i2 * d2;
      if (0 === p2) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const m2 = 1 / p2;
      return t2[0] = c2 * m2, t2[1] = (i2 * h2 - l2 * s2) * m2, t2[2] = (a2 * s2 - i2 * n2) * m2, t2[3] = u2 * m2, t2[4] = (l2 * e2 - i2 * o2) * m2, t2[5] = (i2 * r2 - a2 * e2) * m2, t2[6] = d2 * m2, t2[7] = (s2 * o2 - h2 * e2) * m2, t2[8] = (n2 * e2 - s2 * r2) * m2, this;
    }
    transpose() {
      let t2;
      const e2 = this.elements;
      return t2 = e2[1], e2[1] = e2[3], e2[3] = t2, t2 = e2[2], e2[2] = e2[6], e2[6] = t2, t2 = e2[5], e2[5] = e2[7], e2[7] = t2, this;
    }
    getNormalMatrix(t2) {
      return this.setFromMatrix4(t2).invert().transpose();
    }
    transposeIntoArray(t2) {
      const e2 = this.elements;
      return t2[0] = e2[0], t2[1] = e2[3], t2[2] = e2[6], t2[3] = e2[1], t2[4] = e2[4], t2[5] = e2[7], t2[6] = e2[2], t2[7] = e2[5], t2[8] = e2[8], this;
    }
    setUvTransform(t2, e2, s2, i2, r2, n2, a2) {
      const o2 = Math.cos(r2), h2 = Math.sin(r2);
      return this.set(s2 * o2, s2 * h2, -s2 * (o2 * n2 + h2 * a2) + n2 + t2, -i2 * h2, i2 * o2, -i2 * (-h2 * n2 + o2 * a2) + a2 + e2, 0, 0, 1), this;
    }
    scale(t2, e2) {
      return hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(Bi.makeScale(t2, e2)), this;
    }
    rotate(t2) {
      return hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(Bi.makeRotation(-t2)), this;
    }
    translate(t2, e2) {
      return hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(Bi.makeTranslation(t2, e2)), this;
    }
    makeTranslation(t2, e2) {
      return t2.isVector2 ? this.set(1, 0, t2.x, 0, 1, t2.y, 0, 0, 1) : this.set(1, 0, t2, 0, 1, e2, 0, 0, 1), this;
    }
    makeRotation(t2) {
      const e2 = Math.cos(t2), s2 = Math.sin(t2);
      return this.set(e2, -s2, 0, s2, e2, 0, 0, 0, 1), this;
    }
    makeScale(t2, e2) {
      return this.set(t2, 0, 0, 0, e2, 0, 0, 0, 1), this;
    }
    equals(t2) {
      const e2 = this.elements, s2 = t2.elements;
      for (let t3 = 0; t3 < 9; t3++) if (e2[t3] !== s2[t3]) return false;
      return true;
    }
    fromArray(t2, e2 = 0) {
      for (let s2 = 0; s2 < 9; s2++) this.elements[s2] = t2[s2 + e2];
      return this;
    }
    toArray(t2 = [], e2 = 0) {
      const s2 = this.elements;
      return t2[e2] = s2[0], t2[e2 + 1] = s2[1], t2[e2 + 2] = s2[2], t2[e2 + 3] = s2[3], t2[e2 + 4] = s2[4], t2[e2 + 5] = s2[5], t2[e2 + 6] = s2[6], t2[e2 + 7] = s2[7], t2[e2 + 8] = s2[8], t2;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  };
  var Bi = new Ii();
  var ki = new Ii().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322);
  var Oi = new Ii().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
  function Pi() {
    const t2 = { enabled: true, workingColorSpace: ss, spaces: {}, convert: function(t3, e3, s3) {
      return false !== this.enabled && e3 !== s3 && e3 && s3 ? (this.spaces[e3].transfer === rs && (t3.r = Ei(t3.r), t3.g = Ei(t3.g), t3.b = Ei(t3.b)), this.spaces[e3].primaries !== this.spaces[s3].primaries && (t3.applyMatrix3(this.spaces[e3].toXYZ), t3.applyMatrix3(this.spaces[s3].fromXYZ)), this.spaces[s3].transfer === rs && (t3.r = Ni(t3.r), t3.g = Ni(t3.g), t3.b = Ni(t3.b)), t3) : t3;
    }, workingToColorSpace: function(t3, e3) {
      return this.convert(t3, this.workingColorSpace, e3);
    }, colorSpaceToWorking: function(t3, e3) {
      return this.convert(t3, e3, this.workingColorSpace);
    }, getPrimaries: function(t3) {
      return this.spaces[t3].primaries;
    }, getTransfer: function(t3) {
      return "" === t3 ? is : this.spaces[t3].transfer;
    }, getToneMappingMode: function(t3) {
      return this.spaces[t3].outputColorSpaceConfig.toneMappingMode || "standard";
    }, getLuminanceCoefficients: function(t3, e3 = this.workingColorSpace) {
      return t3.fromArray(this.spaces[e3].luminanceCoefficients);
    }, define: function(t3) {
      Object.assign(this.spaces, t3);
    }, _getMatrix: function(t3, e3, s3) {
      return t3.copy(this.spaces[e3].toXYZ).multiply(this.spaces[s3].fromXYZ);
    }, _getDrawingBufferColorSpace: function(t3) {
      return this.spaces[t3].outputColorSpaceConfig.drawingBufferColorSpace;
    }, _getUnpackColorSpace: function(t3 = this.workingColorSpace) {
      return this.spaces[t3].workingColorSpaceConfig.unpackColorSpace;
    }, fromWorkingColorSpace: function(e3, s3) {
      return hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), t2.workingToColorSpace(e3, s3);
    }, toWorkingColorSpace: function(e3, s3) {
      return hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), t2.colorSpaceToWorking(e3, s3);
    } }, e2 = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], s2 = [0.2126, 0.7152, 0.0722], i2 = [0.3127, 0.329];
    return t2.define({ [ss]: { primaries: e2, whitePoint: i2, transfer: is, toXYZ: ki, fromXYZ: Oi, luminanceCoefficients: s2, workingColorSpaceConfig: { unpackColorSpace: es }, outputColorSpaceConfig: { drawingBufferColorSpace: es } }, [es]: { primaries: e2, whitePoint: i2, transfer: rs, toXYZ: ki, fromXYZ: Oi, luminanceCoefficients: s2, outputColorSpaceConfig: { drawingBufferColorSpace: es } } }), t2;
  }
  var Ri = Pi();
  function Ei(t2) {
    return t2 < 0.04045 ? 0.0773993808 * t2 : Math.pow(0.9478672986 * t2 + 0.0521327014, 2.4);
  }
  function Ni(t2) {
    return t2 < 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 0.41666) - 0.055;
  }
  var Vi;
  var Li = class {
    static getDataURL(t2, e2 = "image/png") {
      if (/^data:/i.test(t2.src)) return t2.src;
      if ("undefined" == typeof HTMLCanvasElement) return t2.src;
      let s2;
      if (t2 instanceof HTMLCanvasElement) s2 = t2;
      else {
        void 0 === Vi && (Vi = Qs("canvas")), Vi.width = t2.width, Vi.height = t2.height;
        const e3 = Vi.getContext("2d");
        t2 instanceof ImageData ? e3.putImageData(t2, 0, 0) : e3.drawImage(t2, 0, 0, t2.width, t2.height), s2 = Vi;
      }
      return s2.toDataURL(e2);
    }
    static sRGBToLinear(t2) {
      if ("undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap) {
        const e2 = Qs("canvas");
        e2.width = t2.width, e2.height = t2.height;
        const s2 = e2.getContext("2d");
        s2.drawImage(t2, 0, 0, t2.width, t2.height);
        const i2 = s2.getImageData(0, 0, t2.width, t2.height), r2 = i2.data;
        for (let t3 = 0; t3 < r2.length; t3++) r2[t3] = 255 * Ei(r2[t3] / 255);
        return s2.putImageData(i2, 0, 0), e2;
      }
      if (t2.data) {
        const e2 = t2.data.slice(0);
        for (let t3 = 0; t3 < e2.length; t3++) e2 instanceof Uint8Array || e2 instanceof Uint8ClampedArray ? e2[t3] = Math.floor(255 * Ei(e2[t3] / 255)) : e2[t3] = Ei(e2[t3]);
        return { data: e2, width: t2.width, height: t2.height };
      }
      return ai("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t2;
    }
  };
  var Fi = 0;
  var Di = class {
    constructor(t2 = null) {
      this.isSource = true, Object.defineProperty(this, "id", { value: Fi++ }), this.uuid = fi(), this.data = t2, this.dataReady = true, this.version = 0;
    }
    getSize(t2) {
      const e2 = this.data;
      return "undefined" != typeof HTMLVideoElement && e2 instanceof HTMLVideoElement ? t2.set(e2.videoWidth, e2.videoHeight, 0) : "undefined" != typeof VideoFrame && e2 instanceof VideoFrame ? t2.set(e2.displayWidth, e2.displayHeight, 0) : null !== e2 ? t2.set(e2.width, e2.height, e2.depth || 0) : t2.set(0, 0, 0), t2;
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2;
      if (!e2 && void 0 !== t2.images[this.uuid]) return t2.images[this.uuid];
      const s2 = { uuid: this.uuid, url: "" }, i2 = this.data;
      if (null !== i2) {
        let t3;
        if (Array.isArray(i2)) {
          t3 = [];
          for (let e3 = 0, s3 = i2.length; e3 < s3; e3++) i2[e3].isDataTexture ? t3.push(Ui(i2[e3].image)) : t3.push(Ui(i2[e3]));
        } else t3 = Ui(i2);
        s2.url = t3;
      }
      return e2 || (t2.images[this.uuid] = s2), s2;
    }
  };
  function Ui(t2) {
    return "undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap ? Li.getDataURL(t2) : t2.data ? { data: Array.from(t2.data), width: t2.width, height: t2.height, type: t2.data.constructor.name } : (ai("Texture: Unable to serialize Texture."), {});
  }
  var ji = 0;
  var Wi = new Ti();
  var Ji = class _Ji extends di {
    constructor(t2 = _Ji.DEFAULT_IMAGE, e2 = _Ji.DEFAULT_MAPPING, s2 = 1001, i2 = 1001, r2 = 1006, n2 = 1008, a2 = 1023, o2 = 1009, h2 = _Ji.DEFAULT_ANISOTROPY, l2 = "") {
      super(), this.isTexture = true, Object.defineProperty(this, "id", { value: ji++ }), this.uuid = fi(), this.name = "", this.source = new Di(t2), this.mipmaps = [], this.mapping = e2, this.channel = 0, this.wrapS = s2, this.wrapT = i2, this.magFilter = r2, this.minFilter = n2, this.anisotropy = h2, this.format = a2, this.internalFormat = null, this.type = o2, this.offset = new _i(0, 0), this.repeat = new _i(1, 1), this.center = new _i(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ii(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = l2, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(t2 && t2.depth && t2.depth > 1), this.pmremVersion = 0, this.normalized = false;
    }
    get width() {
      return this.source.getSize(Wi).x;
    }
    get height() {
      return this.source.getSize(Wi).y;
    }
    get depth() {
      return this.source.getSize(Wi).z;
    }
    get image() {
      return this.source.data;
    }
    set image(t2) {
      this.source.data = t2;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    addUpdateRange(t2, e2) {
      this.updateRanges.push({ start: t2, count: e2 });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.name = t2.name, this.source = t2.source, this.mipmaps = t2.mipmaps.slice(0), this.mapping = t2.mapping, this.channel = t2.channel, this.wrapS = t2.wrapS, this.wrapT = t2.wrapT, this.magFilter = t2.magFilter, this.minFilter = t2.minFilter, this.anisotropy = t2.anisotropy, this.format = t2.format, this.internalFormat = t2.internalFormat, this.type = t2.type, this.normalized = t2.normalized, this.offset.copy(t2.offset), this.repeat.copy(t2.repeat), this.center.copy(t2.center), this.rotation = t2.rotation, this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrix.copy(t2.matrix), this.generateMipmaps = t2.generateMipmaps, this.premultiplyAlpha = t2.premultiplyAlpha, this.flipY = t2.flipY, this.unpackAlignment = t2.unpackAlignment, this.colorSpace = t2.colorSpace, this.renderTarget = t2.renderTarget, this.isRenderTargetTexture = t2.isRenderTargetTexture, this.isArrayTexture = t2.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t2.userData)), this.needsUpdate = true, this;
    }
    setValues(t2) {
      for (const e2 in t2) {
        const s2 = t2[e2];
        if (void 0 === s2) {
          ai(`Texture.setValues(): parameter '${e2}' has value of undefined.`);
          continue;
        }
        const i2 = this[e2];
        void 0 !== i2 ? i2 && s2 && i2.isVector2 && s2.isVector2 || i2 && s2 && i2.isVector3 && s2.isVector3 || i2 && s2 && i2.isMatrix3 && s2.isMatrix3 ? i2.copy(s2) : this[e2] = s2 : ai(`Texture.setValues(): property '${e2}' does not exist.`);
      }
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2;
      if (!e2 && void 0 !== t2.textures[this.uuid]) return t2.textures[this.uuid];
      const s2 = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t2).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, normalized: this.normalized, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
      return Object.keys(this.userData).length > 0 && (s2.userData = this.userData), e2 || (t2.textures[this.uuid] = s2), s2;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(t2) {
      if (this.mapping !== ht) return t2;
      if (t2.applyMatrix3(this.matrix), t2.x < 0 || t2.x > 1) switch (this.wrapS) {
        case mt:
          t2.x = t2.x - Math.floor(t2.x);
          break;
        case yt:
          t2.x = t2.x < 0 ? 0 : 1;
          break;
        case gt:
          1 === Math.abs(Math.floor(t2.x) % 2) ? t2.x = Math.ceil(t2.x) - t2.x : t2.x = t2.x - Math.floor(t2.x);
      }
      if (t2.y < 0 || t2.y > 1) switch (this.wrapT) {
        case mt:
          t2.y = t2.y - Math.floor(t2.y);
          break;
        case yt:
          t2.y = t2.y < 0 ? 0 : 1;
          break;
        case gt:
          1 === Math.abs(Math.floor(t2.y) % 2) ? t2.y = Math.ceil(t2.y) - t2.y : t2.y = t2.y - Math.floor(t2.y);
      }
      return this.flipY && (t2.y = 1 - t2.y), t2;
    }
    set needsUpdate(t2) {
      true === t2 && (this.version++, this.source.needsUpdate = true);
    }
    set needsPMREMUpdate(t2) {
      true === t2 && this.pmremVersion++;
    }
  };
  Ji.DEFAULT_IMAGE = null, Ji.DEFAULT_MAPPING = ht, Ji.DEFAULT_ANISOTROPY = 1;
  var qi = class _qi {
    static {
      _qi.prototype.isVector4 = true;
    }
    constructor(t2 = 0, e2 = 0, s2 = 0, i2 = 1) {
      this.x = t2, this.y = e2, this.z = s2, this.w = i2;
    }
    get width() {
      return this.z;
    }
    set width(t2) {
      this.z = t2;
    }
    get height() {
      return this.w;
    }
    set height(t2) {
      this.w = t2;
    }
    set(t2, e2, s2, i2) {
      return this.x = t2, this.y = e2, this.z = s2, this.w = i2, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this.z = t2, this.w = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setZ(t2) {
      return this.z = t2, this;
    }
    setW(t2) {
      return this.w = t2, this;
    }
    setComponent(t2, e2) {
      switch (t2) {
        case 0:
          this.x = e2;
          break;
        case 1:
          this.y = e2;
          break;
        case 2:
          this.z = e2;
          break;
        case 3:
          this.w = e2;
          break;
        default:
          throw new Error("THREE.Vector4: index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("THREE.Vector4: index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this.z = t2.z, this.w = void 0 !== t2.w ? t2.w : 1, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this.z += t2.z, this.w += t2.w, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this.z += t2, this.w += t2, this;
    }
    addVectors(t2, e2) {
      return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this.z = t2.z + e2.z, this.w = t2.w + e2.w, this;
    }
    addScaledVector(t2, e2) {
      return this.x += t2.x * e2, this.y += t2.y * e2, this.z += t2.z * e2, this.w += t2.w * e2, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this.w -= t2.w, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this.w -= t2, this;
    }
    subVectors(t2, e2) {
      return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this.z = t2.z - e2.z, this.w = t2.w - e2.w, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this.w *= t2.w, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this.w *= t2, this;
    }
    applyMatrix4(t2) {
      const e2 = this.x, s2 = this.y, i2 = this.z, r2 = this.w, n2 = t2.elements;
      return this.x = n2[0] * e2 + n2[4] * s2 + n2[8] * i2 + n2[12] * r2, this.y = n2[1] * e2 + n2[5] * s2 + n2[9] * i2 + n2[13] * r2, this.z = n2[2] * e2 + n2[6] * s2 + n2[10] * i2 + n2[14] * r2, this.w = n2[3] * e2 + n2[7] * s2 + n2[11] * i2 + n2[15] * r2, this;
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this.w /= t2.w, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    setAxisAngleFromQuaternion(t2) {
      this.w = 2 * Math.acos(t2.w);
      const e2 = Math.sqrt(1 - t2.w * t2.w);
      return e2 < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t2.x / e2, this.y = t2.y / e2, this.z = t2.z / e2), this;
    }
    setAxisAngleFromRotationMatrix(t2) {
      let e2, s2, i2, r2;
      const n2 = 0.01, a2 = 0.1, o2 = t2.elements, h2 = o2[0], l2 = o2[4], c2 = o2[8], u2 = o2[1], d2 = o2[5], p2 = o2[9], m2 = o2[2], y2 = o2[6], g2 = o2[10];
      if (Math.abs(l2 - u2) < n2 && Math.abs(c2 - m2) < n2 && Math.abs(p2 - y2) < n2) {
        if (Math.abs(l2 + u2) < a2 && Math.abs(c2 + m2) < a2 && Math.abs(p2 + y2) < a2 && Math.abs(h2 + d2 + g2 - 3) < a2) return this.set(1, 0, 0, 0), this;
        e2 = Math.PI;
        const t3 = (h2 + 1) / 2, o3 = (d2 + 1) / 2, f3 = (g2 + 1) / 2, x2 = (l2 + u2) / 4, b2 = (c2 + m2) / 4, v2 = (p2 + y2) / 4;
        return t3 > o3 && t3 > f3 ? t3 < n2 ? (s2 = 0, i2 = 0.707106781, r2 = 0.707106781) : (s2 = Math.sqrt(t3), i2 = x2 / s2, r2 = b2 / s2) : o3 > f3 ? o3 < n2 ? (s2 = 0.707106781, i2 = 0, r2 = 0.707106781) : (i2 = Math.sqrt(o3), s2 = x2 / i2, r2 = v2 / i2) : f3 < n2 ? (s2 = 0.707106781, i2 = 0.707106781, r2 = 0) : (r2 = Math.sqrt(f3), s2 = b2 / r2, i2 = v2 / r2), this.set(s2, i2, r2, e2), this;
      }
      let f2 = Math.sqrt((y2 - p2) * (y2 - p2) + (c2 - m2) * (c2 - m2) + (u2 - l2) * (u2 - l2));
      return Math.abs(f2) < 1e-3 && (f2 = 1), this.x = (y2 - p2) / f2, this.y = (c2 - m2) / f2, this.z = (u2 - l2) / f2, this.w = Math.acos((h2 + d2 + g2 - 1) / 2), this;
    }
    setFromMatrixPosition(t2) {
      const e2 = t2.elements;
      return this.x = e2[12], this.y = e2[13], this.z = e2[14], this.w = e2[15], this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this.w = Math.min(this.w, t2.w), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this.w = Math.max(this.w, t2.w), this;
    }
    clamp(t2, e2) {
      return this.x = xi(this.x, t2.x, e2.x), this.y = xi(this.y, t2.y, e2.y), this.z = xi(this.z, t2.z, e2.z), this.w = xi(this.w, t2.w, e2.w), this;
    }
    clampScalar(t2, e2) {
      return this.x = xi(this.x, t2, e2), this.y = xi(this.y, t2, e2), this.z = xi(this.z, t2, e2), this.w = xi(this.w, t2, e2), this;
    }
    clampLength(t2, e2) {
      const s2 = this.length();
      return this.divideScalar(s2 || 1).multiplyScalar(xi(s2, t2, e2));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y + this.z * t2.z + this.w * t2.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e2) {
      return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this.z += (t2.z - this.z) * e2, this.w += (t2.w - this.w) * e2, this;
    }
    lerpVectors(t2, e2, s2) {
      return this.x = t2.x + (e2.x - t2.x) * s2, this.y = t2.y + (e2.y - t2.y) * s2, this.z = t2.z + (e2.z - t2.z) * s2, this.w = t2.w + (e2.w - t2.w) * s2, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y && t2.z === this.z && t2.w === this.w;
    }
    fromArray(t2, e2 = 0) {
      return this.x = t2[e2], this.y = t2[e2 + 1], this.z = t2[e2 + 2], this.w = t2[e2 + 3], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.x, t2[e2 + 1] = this.y, t2[e2 + 2] = this.z, t2[e2 + 3] = this.w, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.x = t2.getX(e2), this.y = t2.getY(e2), this.z = t2.getZ(e2), this.w = t2.getW(e2), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  };
  var Hi = class extends di {
    constructor(t2 = 1, e2 = 1, s2 = {}) {
      super(), s2 = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Mt, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false, useArrayDepthTexture: false }, s2), this.isRenderTarget = true, this.width = t2, this.height = e2, this.depth = s2.depth, this.scissor = new qi(0, 0, t2, e2), this.scissorTest = false, this.viewport = new qi(0, 0, t2, e2), this.textures = [];
      const i2 = { width: t2, height: e2, depth: s2.depth }, r2 = new Ji(i2), n2 = s2.count;
      for (let t3 = 0; t3 < n2; t3++) this.textures[t3] = r2.clone(), this.textures[t3].isRenderTargetTexture = true, this.textures[t3].renderTarget = this;
      this._setTextureOptions(s2), this.depthBuffer = s2.depthBuffer, this.stencilBuffer = s2.stencilBuffer, this.resolveDepthBuffer = s2.resolveDepthBuffer, this.resolveStencilBuffer = s2.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = s2.depthTexture, this.samples = s2.samples, this.multiview = s2.multiview, this.useArrayDepthTexture = s2.useArrayDepthTexture;
    }
    _setTextureOptions(t2 = {}) {
      const e2 = { minFilter: Mt, generateMipmaps: false, flipY: false, internalFormat: null };
      void 0 !== t2.mapping && (e2.mapping = t2.mapping), void 0 !== t2.wrapS && (e2.wrapS = t2.wrapS), void 0 !== t2.wrapT && (e2.wrapT = t2.wrapT), void 0 !== t2.wrapR && (e2.wrapR = t2.wrapR), void 0 !== t2.magFilter && (e2.magFilter = t2.magFilter), void 0 !== t2.minFilter && (e2.minFilter = t2.minFilter), void 0 !== t2.format && (e2.format = t2.format), void 0 !== t2.type && (e2.type = t2.type), void 0 !== t2.anisotropy && (e2.anisotropy = t2.anisotropy), void 0 !== t2.colorSpace && (e2.colorSpace = t2.colorSpace), void 0 !== t2.flipY && (e2.flipY = t2.flipY), void 0 !== t2.generateMipmaps && (e2.generateMipmaps = t2.generateMipmaps), void 0 !== t2.internalFormat && (e2.internalFormat = t2.internalFormat);
      for (let t3 = 0; t3 < this.textures.length; t3++) {
        this.textures[t3].setValues(e2);
      }
    }
    get texture() {
      return this.textures[0];
    }
    set texture(t2) {
      this.textures[0] = t2;
    }
    set depthTexture(t2) {
      null !== this._depthTexture && (this._depthTexture.renderTarget = null), null !== t2 && (t2.renderTarget = this), this._depthTexture = t2;
    }
    get depthTexture() {
      return this._depthTexture;
    }
    setSize(t2, e2, s2 = 1) {
      if (this.width !== t2 || this.height !== e2 || this.depth !== s2) {
        this.width = t2, this.height = e2, this.depth = s2;
        for (let i2 = 0, r2 = this.textures.length; i2 < r2; i2++) this.textures[i2].image.width = t2, this.textures[i2].image.height = e2, this.textures[i2].image.depth = s2, true !== this.textures[i2].isData3DTexture && (this.textures[i2].isArrayTexture = this.textures[i2].image.depth > 1);
        this.dispose();
      }
      this.viewport.set(0, 0, t2, e2), this.scissor.set(0, 0, t2, e2);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.width = t2.width, this.height = t2.height, this.depth = t2.depth, this.scissor.copy(t2.scissor), this.scissorTest = t2.scissorTest, this.viewport.copy(t2.viewport), this.textures.length = 0;
      for (let e2 = 0, s2 = t2.textures.length; e2 < s2; e2++) {
        this.textures[e2] = t2.textures[e2].clone(), this.textures[e2].isRenderTargetTexture = true, this.textures[e2].renderTarget = this;
        const s3 = Object.assign({}, t2.textures[e2].image);
        this.textures[e2].source = new Di(s3);
      }
      return this.depthBuffer = t2.depthBuffer, this.stencilBuffer = t2.stencilBuffer, this.resolveDepthBuffer = t2.resolveDepthBuffer, this.resolveStencilBuffer = t2.resolveStencilBuffer, null !== t2.depthTexture && (this.depthTexture = t2.depthTexture.clone()), this.samples = t2.samples, this.multiview = t2.multiview, this.useArrayDepthTexture = t2.useArrayDepthTexture, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var Xi = class extends Hi {
    constructor(t2 = 1, e2 = 1, s2 = {}) {
      super(t2, e2, s2), this.isWebGLRenderTarget = true;
    }
  };
  var Yi = class extends Ji {
    constructor(t2 = null, e2 = 1, s2 = 1, i2 = 1) {
      super(null), this.isDataArrayTexture = true, this.image = { data: t2, width: e2, height: s2, depth: i2 }, this.magFilter = ft, this.minFilter = ft, this.wrapR = yt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
    }
    addLayerUpdate(t2) {
      this.layerUpdates.add(t2);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  };
  var Gi = class extends Ji {
    constructor(t2 = null, e2 = 1, s2 = 1, i2 = 1) {
      super(null), this.isData3DTexture = true, this.image = { data: t2, width: e2, height: s2, depth: i2 }, this.magFilter = ft, this.minFilter = ft, this.wrapR = yt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var Qi = class _Qi {
    static {
      _Qi.prototype.isMatrix4 = true;
    }
    constructor(t2, e2, s2, i2, r2, n2, a2, o2, h2, l2, c2, u2, d2, p2, m2, y2) {
      this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e2, s2, i2, r2, n2, a2, o2, h2, l2, c2, u2, d2, p2, m2, y2);
    }
    set(t2, e2, s2, i2, r2, n2, a2, o2, h2, l2, c2, u2, d2, p2, m2, y2) {
      const g2 = this.elements;
      return g2[0] = t2, g2[4] = e2, g2[8] = s2, g2[12] = i2, g2[1] = r2, g2[5] = n2, g2[9] = a2, g2[13] = o2, g2[2] = h2, g2[6] = l2, g2[10] = c2, g2[14] = u2, g2[3] = d2, g2[7] = p2, g2[11] = m2, g2[15] = y2, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new _Qi().fromArray(this.elements);
    }
    copy(t2) {
      const e2 = this.elements, s2 = t2.elements;
      return e2[0] = s2[0], e2[1] = s2[1], e2[2] = s2[2], e2[3] = s2[3], e2[4] = s2[4], e2[5] = s2[5], e2[6] = s2[6], e2[7] = s2[7], e2[8] = s2[8], e2[9] = s2[9], e2[10] = s2[10], e2[11] = s2[11], e2[12] = s2[12], e2[13] = s2[13], e2[14] = s2[14], e2[15] = s2[15], this;
    }
    copyPosition(t2) {
      const e2 = this.elements, s2 = t2.elements;
      return e2[12] = s2[12], e2[13] = s2[13], e2[14] = s2[14], this;
    }
    setFromMatrix3(t2) {
      const e2 = t2.elements;
      return this.set(e2[0], e2[3], e2[6], 0, e2[1], e2[4], e2[7], 0, e2[2], e2[5], e2[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(t2, e2, s2) {
      return 0 === this.determinantAffine() ? (t2.set(1, 0, 0), e2.set(0, 1, 0), s2.set(0, 0, 1), this) : (t2.setFromMatrixColumn(this, 0), e2.setFromMatrixColumn(this, 1), s2.setFromMatrixColumn(this, 2), this);
    }
    makeBasis(t2, e2, s2) {
      return this.set(t2.x, e2.x, s2.x, 0, t2.y, e2.y, s2.y, 0, t2.z, e2.z, s2.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(t2) {
      if (0 === t2.determinantAffine()) return this.identity();
      const e2 = this.elements, s2 = t2.elements, i2 = 1 / Ki.setFromMatrixColumn(t2, 0).length(), r2 = 1 / Ki.setFromMatrixColumn(t2, 1).length(), n2 = 1 / Ki.setFromMatrixColumn(t2, 2).length();
      return e2[0] = s2[0] * i2, e2[1] = s2[1] * i2, e2[2] = s2[2] * i2, e2[3] = 0, e2[4] = s2[4] * r2, e2[5] = s2[5] * r2, e2[6] = s2[6] * r2, e2[7] = 0, e2[8] = s2[8] * n2, e2[9] = s2[9] * n2, e2[10] = s2[10] * n2, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, this;
    }
    makeRotationFromEuler(t2) {
      const e2 = this.elements, s2 = t2.x, i2 = t2.y, r2 = t2.z, n2 = Math.cos(s2), a2 = Math.sin(s2), o2 = Math.cos(i2), h2 = Math.sin(i2), l2 = Math.cos(r2), c2 = Math.sin(r2);
      if ("XYZ" === t2.order) {
        const t3 = n2 * l2, s3 = n2 * c2, i3 = a2 * l2, r3 = a2 * c2;
        e2[0] = o2 * l2, e2[4] = -o2 * c2, e2[8] = h2, e2[1] = s3 + i3 * h2, e2[5] = t3 - r3 * h2, e2[9] = -a2 * o2, e2[2] = r3 - t3 * h2, e2[6] = i3 + s3 * h2, e2[10] = n2 * o2;
      } else if ("YXZ" === t2.order) {
        const t3 = o2 * l2, s3 = o2 * c2, i3 = h2 * l2, r3 = h2 * c2;
        e2[0] = t3 + r3 * a2, e2[4] = i3 * a2 - s3, e2[8] = n2 * h2, e2[1] = n2 * c2, e2[5] = n2 * l2, e2[9] = -a2, e2[2] = s3 * a2 - i3, e2[6] = r3 + t3 * a2, e2[10] = n2 * o2;
      } else if ("ZXY" === t2.order) {
        const t3 = o2 * l2, s3 = o2 * c2, i3 = h2 * l2, r3 = h2 * c2;
        e2[0] = t3 - r3 * a2, e2[4] = -n2 * c2, e2[8] = i3 + s3 * a2, e2[1] = s3 + i3 * a2, e2[5] = n2 * l2, e2[9] = r3 - t3 * a2, e2[2] = -n2 * h2, e2[6] = a2, e2[10] = n2 * o2;
      } else if ("ZYX" === t2.order) {
        const t3 = n2 * l2, s3 = n2 * c2, i3 = a2 * l2, r3 = a2 * c2;
        e2[0] = o2 * l2, e2[4] = i3 * h2 - s3, e2[8] = t3 * h2 + r3, e2[1] = o2 * c2, e2[5] = r3 * h2 + t3, e2[9] = s3 * h2 - i3, e2[2] = -h2, e2[6] = a2 * o2, e2[10] = n2 * o2;
      } else if ("YZX" === t2.order) {
        const t3 = n2 * o2, s3 = n2 * h2, i3 = a2 * o2, r3 = a2 * h2;
        e2[0] = o2 * l2, e2[4] = r3 - t3 * c2, e2[8] = i3 * c2 + s3, e2[1] = c2, e2[5] = n2 * l2, e2[9] = -a2 * l2, e2[2] = -h2 * l2, e2[6] = s3 * c2 + i3, e2[10] = t3 - r3 * c2;
      } else if ("XZY" === t2.order) {
        const t3 = n2 * o2, s3 = n2 * h2, i3 = a2 * o2, r3 = a2 * h2;
        e2[0] = o2 * l2, e2[4] = -c2, e2[8] = h2 * l2, e2[1] = t3 * c2 + r3, e2[5] = n2 * l2, e2[9] = s3 * c2 - i3, e2[2] = i3 * c2 - s3, e2[6] = a2 * l2, e2[10] = r3 * c2 + t3;
      }
      return e2[3] = 0, e2[7] = 0, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, this;
    }
    makeRotationFromQuaternion(t2) {
      return this.compose(er, t2, sr);
    }
    lookAt(t2, e2, s2) {
      const i2 = this.elements;
      return nr.subVectors(t2, e2), 0 === nr.lengthSq() && (nr.z = 1), nr.normalize(), ir.crossVectors(s2, nr), 0 === ir.lengthSq() && (1 === Math.abs(s2.z) ? nr.x += 1e-4 : nr.z += 1e-4, nr.normalize(), ir.crossVectors(s2, nr)), ir.normalize(), rr.crossVectors(nr, ir), i2[0] = ir.x, i2[4] = rr.x, i2[8] = nr.x, i2[1] = ir.y, i2[5] = rr.y, i2[9] = nr.y, i2[2] = ir.z, i2[6] = rr.z, i2[10] = nr.z, this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e2) {
      const s2 = t2.elements, i2 = e2.elements, r2 = this.elements, n2 = s2[0], a2 = s2[4], o2 = s2[8], h2 = s2[12], l2 = s2[1], c2 = s2[5], u2 = s2[9], d2 = s2[13], p2 = s2[2], m2 = s2[6], y2 = s2[10], g2 = s2[14], f2 = s2[3], x2 = s2[7], b2 = s2[11], v2 = s2[15], w2 = i2[0], M2 = i2[4], S2 = i2[8], _2 = i2[12], A2 = i2[1], T2 = i2[5], z2 = i2[9], C2 = i2[13], I2 = i2[2], B2 = i2[6], k2 = i2[10], O2 = i2[14], P2 = i2[3], R2 = i2[7], E2 = i2[11], N2 = i2[15];
      return r2[0] = n2 * w2 + a2 * A2 + o2 * I2 + h2 * P2, r2[4] = n2 * M2 + a2 * T2 + o2 * B2 + h2 * R2, r2[8] = n2 * S2 + a2 * z2 + o2 * k2 + h2 * E2, r2[12] = n2 * _2 + a2 * C2 + o2 * O2 + h2 * N2, r2[1] = l2 * w2 + c2 * A2 + u2 * I2 + d2 * P2, r2[5] = l2 * M2 + c2 * T2 + u2 * B2 + d2 * R2, r2[9] = l2 * S2 + c2 * z2 + u2 * k2 + d2 * E2, r2[13] = l2 * _2 + c2 * C2 + u2 * O2 + d2 * N2, r2[2] = p2 * w2 + m2 * A2 + y2 * I2 + g2 * P2, r2[6] = p2 * M2 + m2 * T2 + y2 * B2 + g2 * R2, r2[10] = p2 * S2 + m2 * z2 + y2 * k2 + g2 * E2, r2[14] = p2 * _2 + m2 * C2 + y2 * O2 + g2 * N2, r2[3] = f2 * w2 + x2 * A2 + b2 * I2 + v2 * P2, r2[7] = f2 * M2 + x2 * T2 + b2 * B2 + v2 * R2, r2[11] = f2 * S2 + x2 * z2 + b2 * k2 + v2 * E2, r2[15] = f2 * _2 + x2 * C2 + b2 * O2 + v2 * N2, this;
    }
    multiplyScalar(t2) {
      const e2 = this.elements;
      return e2[0] *= t2, e2[4] *= t2, e2[8] *= t2, e2[12] *= t2, e2[1] *= t2, e2[5] *= t2, e2[9] *= t2, e2[13] *= t2, e2[2] *= t2, e2[6] *= t2, e2[10] *= t2, e2[14] *= t2, e2[3] *= t2, e2[7] *= t2, e2[11] *= t2, e2[15] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e2 = t2[0], s2 = t2[4], i2 = t2[8], r2 = t2[12], n2 = t2[1], a2 = t2[5], o2 = t2[9], h2 = t2[13], l2 = t2[2], c2 = t2[6], u2 = t2[10], d2 = t2[14], p2 = t2[3], m2 = t2[7], y2 = t2[11], g2 = t2[15], f2 = o2 * d2 - h2 * u2, x2 = a2 * d2 - h2 * c2, b2 = a2 * u2 - o2 * c2, v2 = n2 * d2 - h2 * l2, w2 = n2 * u2 - o2 * l2, M2 = n2 * c2 - a2 * l2;
      return e2 * (m2 * f2 - y2 * x2 + g2 * b2) - s2 * (p2 * f2 - y2 * v2 + g2 * w2) + i2 * (p2 * x2 - m2 * v2 + g2 * M2) - r2 * (p2 * b2 - m2 * w2 + y2 * M2);
    }
    determinantAffine() {
      const t2 = this.elements, e2 = t2[0], s2 = t2[4], i2 = t2[8], r2 = t2[1], n2 = t2[5], a2 = t2[9], o2 = t2[2], h2 = t2[6], l2 = t2[10];
      return e2 * (n2 * l2 - a2 * h2) - s2 * (r2 * l2 - a2 * o2) + i2 * (r2 * h2 - n2 * o2);
    }
    transpose() {
      const t2 = this.elements;
      let e2;
      return e2 = t2[1], t2[1] = t2[4], t2[4] = e2, e2 = t2[2], t2[2] = t2[8], t2[8] = e2, e2 = t2[6], t2[6] = t2[9], t2[9] = e2, e2 = t2[3], t2[3] = t2[12], t2[12] = e2, e2 = t2[7], t2[7] = t2[13], t2[13] = e2, e2 = t2[11], t2[11] = t2[14], t2[14] = e2, this;
    }
    setPosition(t2, e2, s2) {
      const i2 = this.elements;
      return t2.isVector3 ? (i2[12] = t2.x, i2[13] = t2.y, i2[14] = t2.z) : (i2[12] = t2, i2[13] = e2, i2[14] = s2), this;
    }
    invert() {
      const t2 = this.elements, e2 = t2[0], s2 = t2[1], i2 = t2[2], r2 = t2[3], n2 = t2[4], a2 = t2[5], o2 = t2[6], h2 = t2[7], l2 = t2[8], c2 = t2[9], u2 = t2[10], d2 = t2[11], p2 = t2[12], m2 = t2[13], y2 = t2[14], g2 = t2[15], f2 = e2 * a2 - s2 * n2, x2 = e2 * o2 - i2 * n2, b2 = e2 * h2 - r2 * n2, v2 = s2 * o2 - i2 * a2, w2 = s2 * h2 - r2 * a2, M2 = i2 * h2 - r2 * o2, S2 = l2 * m2 - c2 * p2, _2 = l2 * y2 - u2 * p2, A2 = l2 * g2 - d2 * p2, T2 = c2 * y2 - u2 * m2, z2 = c2 * g2 - d2 * m2, C2 = u2 * g2 - d2 * y2, I2 = f2 * C2 - x2 * z2 + b2 * T2 + v2 * A2 - w2 * _2 + M2 * S2;
      if (0 === I2) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const B2 = 1 / I2;
      return t2[0] = (a2 * C2 - o2 * z2 + h2 * T2) * B2, t2[1] = (i2 * z2 - s2 * C2 - r2 * T2) * B2, t2[2] = (m2 * M2 - y2 * w2 + g2 * v2) * B2, t2[3] = (u2 * w2 - c2 * M2 - d2 * v2) * B2, t2[4] = (o2 * A2 - n2 * C2 - h2 * _2) * B2, t2[5] = (e2 * C2 - i2 * A2 + r2 * _2) * B2, t2[6] = (y2 * b2 - p2 * M2 - g2 * x2) * B2, t2[7] = (l2 * M2 - u2 * b2 + d2 * x2) * B2, t2[8] = (n2 * z2 - a2 * A2 + h2 * S2) * B2, t2[9] = (s2 * A2 - e2 * z2 - r2 * S2) * B2, t2[10] = (p2 * w2 - m2 * b2 + g2 * f2) * B2, t2[11] = (c2 * b2 - l2 * w2 - d2 * f2) * B2, t2[12] = (a2 * _2 - n2 * T2 - o2 * S2) * B2, t2[13] = (e2 * T2 - s2 * _2 + i2 * S2) * B2, t2[14] = (m2 * x2 - p2 * v2 - y2 * f2) * B2, t2[15] = (l2 * v2 - c2 * x2 + u2 * f2) * B2, this;
    }
    scale(t2) {
      const e2 = this.elements, s2 = t2.x, i2 = t2.y, r2 = t2.z;
      return e2[0] *= s2, e2[4] *= i2, e2[8] *= r2, e2[1] *= s2, e2[5] *= i2, e2[9] *= r2, e2[2] *= s2, e2[6] *= i2, e2[10] *= r2, e2[3] *= s2, e2[7] *= i2, e2[11] *= r2, this;
    }
    getMaxScaleOnAxis() {
      const t2 = this.elements, e2 = t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2], s2 = t2[4] * t2[4] + t2[5] * t2[5] + t2[6] * t2[6], i2 = t2[8] * t2[8] + t2[9] * t2[9] + t2[10] * t2[10];
      return Math.sqrt(Math.max(e2, s2, i2));
    }
    makeTranslation(t2, e2, s2) {
      return t2.isVector3 ? this.set(1, 0, 0, t2.x, 0, 1, 0, t2.y, 0, 0, 1, t2.z, 0, 0, 0, 1) : this.set(1, 0, 0, t2, 0, 1, 0, e2, 0, 0, 1, s2, 0, 0, 0, 1), this;
    }
    makeRotationX(t2) {
      const e2 = Math.cos(t2), s2 = Math.sin(t2);
      return this.set(1, 0, 0, 0, 0, e2, -s2, 0, 0, s2, e2, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(t2) {
      const e2 = Math.cos(t2), s2 = Math.sin(t2);
      return this.set(e2, 0, s2, 0, 0, 1, 0, 0, -s2, 0, e2, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(t2) {
      const e2 = Math.cos(t2), s2 = Math.sin(t2);
      return this.set(e2, -s2, 0, 0, s2, e2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(t2, e2) {
      const s2 = Math.cos(e2), i2 = Math.sin(e2), r2 = 1 - s2, n2 = t2.x, a2 = t2.y, o2 = t2.z, h2 = r2 * n2, l2 = r2 * a2;
      return this.set(h2 * n2 + s2, h2 * a2 - i2 * o2, h2 * o2 + i2 * a2, 0, h2 * a2 + i2 * o2, l2 * a2 + s2, l2 * o2 - i2 * n2, 0, h2 * o2 - i2 * a2, l2 * o2 + i2 * n2, r2 * o2 * o2 + s2, 0, 0, 0, 0, 1), this;
    }
    makeScale(t2, e2, s2) {
      return this.set(t2, 0, 0, 0, 0, e2, 0, 0, 0, 0, s2, 0, 0, 0, 0, 1), this;
    }
    makeShear(t2, e2, s2, i2, r2, n2) {
      return this.set(1, s2, r2, 0, t2, 1, n2, 0, e2, i2, 1, 0, 0, 0, 0, 1), this;
    }
    compose(t2, e2, s2) {
      const i2 = this.elements, r2 = e2._x, n2 = e2._y, a2 = e2._z, o2 = e2._w, h2 = r2 + r2, l2 = n2 + n2, c2 = a2 + a2, u2 = r2 * h2, d2 = r2 * l2, p2 = r2 * c2, m2 = n2 * l2, y2 = n2 * c2, g2 = a2 * c2, f2 = o2 * h2, x2 = o2 * l2, b2 = o2 * c2, v2 = s2.x, w2 = s2.y, M2 = s2.z;
      return i2[0] = (1 - (m2 + g2)) * v2, i2[1] = (d2 + b2) * v2, i2[2] = (p2 - x2) * v2, i2[3] = 0, i2[4] = (d2 - b2) * w2, i2[5] = (1 - (u2 + g2)) * w2, i2[6] = (y2 + f2) * w2, i2[7] = 0, i2[8] = (p2 + x2) * M2, i2[9] = (y2 - f2) * M2, i2[10] = (1 - (u2 + m2)) * M2, i2[11] = 0, i2[12] = t2.x, i2[13] = t2.y, i2[14] = t2.z, i2[15] = 1, this;
    }
    decompose(t2, e2, s2) {
      const i2 = this.elements;
      t2.x = i2[12], t2.y = i2[13], t2.z = i2[14];
      const r2 = this.determinantAffine();
      if (0 === r2) return s2.set(1, 1, 1), e2.identity(), this;
      let n2 = Ki.set(i2[0], i2[1], i2[2]).length();
      const a2 = Ki.set(i2[4], i2[5], i2[6]).length(), o2 = Ki.set(i2[8], i2[9], i2[10]).length();
      r2 < 0 && (n2 = -n2), tr.copy(this);
      const h2 = 1 / n2, l2 = 1 / a2, c2 = 1 / o2;
      return tr.elements[0] *= h2, tr.elements[1] *= h2, tr.elements[2] *= h2, tr.elements[4] *= l2, tr.elements[5] *= l2, tr.elements[6] *= l2, tr.elements[8] *= c2, tr.elements[9] *= c2, tr.elements[10] *= c2, e2.setFromRotationMatrix(tr), s2.x = n2, s2.y = a2, s2.z = o2, this;
    }
    makePerspective(t2, e2, s2, i2, r2, n2, a2 = 2e3, o2 = false) {
      const h2 = this.elements, l2 = 2 * r2 / (e2 - t2), c2 = 2 * r2 / (s2 - i2), u2 = (e2 + t2) / (e2 - t2), d2 = (s2 + i2) / (s2 - i2);
      let p2, m2;
      if (o2) p2 = r2 / (n2 - r2), m2 = n2 * r2 / (n2 - r2);
      else if (a2 === Ws) p2 = -(n2 + r2) / (n2 - r2), m2 = -2 * n2 * r2 / (n2 - r2);
      else {
        if (a2 !== Js) throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a2);
        p2 = -n2 / (n2 - r2), m2 = -n2 * r2 / (n2 - r2);
      }
      return h2[0] = l2, h2[4] = 0, h2[8] = u2, h2[12] = 0, h2[1] = 0, h2[5] = c2, h2[9] = d2, h2[13] = 0, h2[2] = 0, h2[6] = 0, h2[10] = p2, h2[14] = m2, h2[3] = 0, h2[7] = 0, h2[11] = -1, h2[15] = 0, this;
    }
    makeOrthographic(t2, e2, s2, i2, r2, n2, a2 = 2e3, o2 = false) {
      const h2 = this.elements, l2 = 2 / (e2 - t2), c2 = 2 / (s2 - i2), u2 = -(e2 + t2) / (e2 - t2), d2 = -(s2 + i2) / (s2 - i2);
      let p2, m2;
      if (o2) p2 = 1 / (n2 - r2), m2 = n2 / (n2 - r2);
      else if (a2 === Ws) p2 = -2 / (n2 - r2), m2 = -(n2 + r2) / (n2 - r2);
      else {
        if (a2 !== Js) throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a2);
        p2 = -1 / (n2 - r2), m2 = -r2 / (n2 - r2);
      }
      return h2[0] = l2, h2[4] = 0, h2[8] = 0, h2[12] = u2, h2[1] = 0, h2[5] = c2, h2[9] = 0, h2[13] = d2, h2[2] = 0, h2[6] = 0, h2[10] = p2, h2[14] = m2, h2[3] = 0, h2[7] = 0, h2[11] = 0, h2[15] = 1, this;
    }
    equals(t2) {
      const e2 = this.elements, s2 = t2.elements;
      for (let t3 = 0; t3 < 16; t3++) if (e2[t3] !== s2[t3]) return false;
      return true;
    }
    fromArray(t2, e2 = 0) {
      for (let s2 = 0; s2 < 16; s2++) this.elements[s2] = t2[s2 + e2];
      return this;
    }
    toArray(t2 = [], e2 = 0) {
      const s2 = this.elements;
      return t2[e2] = s2[0], t2[e2 + 1] = s2[1], t2[e2 + 2] = s2[2], t2[e2 + 3] = s2[3], t2[e2 + 4] = s2[4], t2[e2 + 5] = s2[5], t2[e2 + 6] = s2[6], t2[e2 + 7] = s2[7], t2[e2 + 8] = s2[8], t2[e2 + 9] = s2[9], t2[e2 + 10] = s2[10], t2[e2 + 11] = s2[11], t2[e2 + 12] = s2[12], t2[e2 + 13] = s2[13], t2[e2 + 14] = s2[14], t2[e2 + 15] = s2[15], t2;
    }
  };
  var Ki = new Ti();
  var tr = new Qi();
  var er = new Ti(0, 0, 0);
  var sr = new Ti(1, 1, 1);
  var ir = new Ti();
  var rr = new Ti();
  var nr = new Ti();
  var ar = new Qi();
  var or = new Ai();
  var hr = class _hr {
    constructor(t2 = 0, e2 = 0, s2 = 0, i2 = _hr.DEFAULT_ORDER) {
      this.isEuler = true, this._x = t2, this._y = e2, this._z = s2, this._order = i2;
    }
    get x() {
      return this._x;
    }
    set x(t2) {
      this._x = t2, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t2) {
      this._y = t2, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t2) {
      this._z = t2, this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(t2) {
      this._order = t2, this._onChangeCallback();
    }
    set(t2, e2, s2, i2 = this._order) {
      return this._x = t2, this._y = e2, this._z = s2, this._order = i2, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t2) {
      return this._x = t2._x, this._y = t2._y, this._z = t2._z, this._order = t2._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2, e2 = this._order, s2 = true) {
      const i2 = t2.elements, r2 = i2[0], n2 = i2[4], a2 = i2[8], o2 = i2[1], h2 = i2[5], l2 = i2[9], c2 = i2[2], u2 = i2[6], d2 = i2[10];
      switch (e2) {
        case "XYZ":
          this._y = Math.asin(xi(a2, -1, 1)), Math.abs(a2) < 0.9999999 ? (this._x = Math.atan2(-l2, d2), this._z = Math.atan2(-n2, r2)) : (this._x = Math.atan2(u2, h2), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-xi(l2, -1, 1)), Math.abs(l2) < 0.9999999 ? (this._y = Math.atan2(a2, d2), this._z = Math.atan2(o2, h2)) : (this._y = Math.atan2(-c2, r2), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(xi(u2, -1, 1)), Math.abs(u2) < 0.9999999 ? (this._y = Math.atan2(-c2, d2), this._z = Math.atan2(-n2, h2)) : (this._y = 0, this._z = Math.atan2(o2, r2));
          break;
        case "ZYX":
          this._y = Math.asin(-xi(c2, -1, 1)), Math.abs(c2) < 0.9999999 ? (this._x = Math.atan2(u2, d2), this._z = Math.atan2(o2, r2)) : (this._x = 0, this._z = Math.atan2(-n2, h2));
          break;
        case "YZX":
          this._z = Math.asin(xi(o2, -1, 1)), Math.abs(o2) < 0.9999999 ? (this._x = Math.atan2(-l2, h2), this._y = Math.atan2(-c2, r2)) : (this._x = 0, this._y = Math.atan2(a2, d2));
          break;
        case "XZY":
          this._z = Math.asin(-xi(n2, -1, 1)), Math.abs(n2) < 0.9999999 ? (this._x = Math.atan2(u2, h2), this._y = Math.atan2(a2, r2)) : (this._x = Math.atan2(-l2, d2), this._y = 0);
          break;
        default:
          ai("Euler: .setFromRotationMatrix() encountered an unknown order: " + e2);
      }
      return this._order = e2, true === s2 && this._onChangeCallback(), this;
    }
    setFromQuaternion(t2, e2, s2) {
      return ar.makeRotationFromQuaternion(t2), this.setFromRotationMatrix(ar, e2, s2);
    }
    setFromVector3(t2, e2 = this._order) {
      return this.set(t2.x, t2.y, t2.z, e2);
    }
    reorder(t2) {
      return or.setFromEuler(this), this.setFromQuaternion(or, t2);
    }
    equals(t2) {
      return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._order === this._order;
    }
    fromArray(t2) {
      return this._x = t2[0], this._y = t2[1], this._z = t2[2], void 0 !== t2[3] && (this._order = t2[3]), this._onChangeCallback(), this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this._x, t2[e2 + 1] = this._y, t2[e2 + 2] = this._z, t2[e2 + 3] = this._order, t2;
    }
    _onChange(t2) {
      return this._onChangeCallback = t2, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  };
  hr.DEFAULT_ORDER = "XYZ";
  var lr = class {
    constructor() {
      this.mask = 1;
    }
    set(t2) {
      this.mask = 1 << t2 >>> 0;
    }
    enable(t2) {
      this.mask |= 1 << t2;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t2) {
      this.mask ^= 1 << t2;
    }
    disable(t2) {
      this.mask &= ~(1 << t2);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t2) {
      return 0 !== (this.mask & t2.mask);
    }
    isEnabled(t2) {
      return !!(this.mask & 1 << t2);
    }
  };
  var cr = 0;
  var ur = new Ti();
  var dr = new Ai();
  var pr = new Qi();
  var mr = new Ti();
  var yr = new Ti();
  var gr = new Ti();
  var fr = new Ai();
  var xr = new Ti(1, 0, 0);
  var br = new Ti(0, 1, 0);
  var vr = new Ti(0, 0, 1);
  var wr = { type: "added" };
  var Mr = { type: "removed" };
  var Sr = { type: "childadded", child: null };
  var _r = { type: "childremoved", child: null };
  var Ar = class _Ar extends di {
    constructor() {
      super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: cr++ }), this.uuid = fi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _Ar.DEFAULT_UP.clone();
      const t2 = new Ti(), e2 = new hr(), s2 = new Ai(), i2 = new Ti(1, 1, 1);
      e2._onChange(function() {
        s2.setFromEuler(e2, false);
      }), s2._onChange(function() {
        e2.setFromQuaternion(s2, void 0, false);
      }), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t2 }, rotation: { configurable: true, enumerable: true, value: e2 }, quaternion: { configurable: true, enumerable: true, value: s2 }, scale: { configurable: true, enumerable: true, value: i2 }, modelViewMatrix: { value: new Qi() }, normalMatrix: { value: new Ii() } }), this.matrix = new Qi(), this.matrixWorld = new Qi(), this.matrixAutoUpdate = _Ar.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _Ar.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new lr(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = false, this.userData = {}, this.pivot = null;
    }
    onBeforeShadow() {
    }
    onAfterShadow() {
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(t2) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t2), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(t2) {
      return this.quaternion.premultiply(t2), this;
    }
    setRotationFromAxisAngle(t2, e2) {
      this.quaternion.setFromAxisAngle(t2, e2);
    }
    setRotationFromEuler(t2) {
      this.quaternion.setFromEuler(t2, true);
    }
    setRotationFromMatrix(t2) {
      this.quaternion.setFromRotationMatrix(t2);
    }
    setRotationFromQuaternion(t2) {
      this.quaternion.copy(t2);
    }
    rotateOnAxis(t2, e2) {
      return dr.setFromAxisAngle(t2, e2), this.quaternion.multiply(dr), this;
    }
    rotateOnWorldAxis(t2, e2) {
      return dr.setFromAxisAngle(t2, e2), this.quaternion.premultiply(dr), this;
    }
    rotateX(t2) {
      return this.rotateOnAxis(xr, t2);
    }
    rotateY(t2) {
      return this.rotateOnAxis(br, t2);
    }
    rotateZ(t2) {
      return this.rotateOnAxis(vr, t2);
    }
    translateOnAxis(t2, e2) {
      return ur.copy(t2).applyQuaternion(this.quaternion), this.position.add(ur.multiplyScalar(e2)), this;
    }
    translateX(t2) {
      return this.translateOnAxis(xr, t2);
    }
    translateY(t2) {
      return this.translateOnAxis(br, t2);
    }
    translateZ(t2) {
      return this.translateOnAxis(vr, t2);
    }
    localToWorld(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(pr.copy(this.matrixWorld).invert());
    }
    lookAt(t2, e2, s2) {
      t2.isVector3 ? mr.copy(t2) : mr.set(t2, e2, s2);
      const i2 = this.parent;
      this.updateWorldMatrix(true, false), yr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? pr.lookAt(yr, mr, this.up) : pr.lookAt(mr, yr, this.up), this.quaternion.setFromRotationMatrix(pr), i2 && (pr.extractRotation(i2.matrixWorld), dr.setFromRotationMatrix(pr), this.quaternion.premultiply(dr.invert()));
    }
    add(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.add(arguments[t3]);
        return this;
      }
      return t2 === this ? (oi("Object3D.add: object can't be added as a child of itself.", t2), this) : (t2 && t2.isObject3D ? (t2.removeFromParent(), t2.parent = this, this.children.push(t2), t2.dispatchEvent(wr), Sr.child = t2, this.dispatchEvent(Sr), Sr.child = null) : oi("Object3D.add: object not an instance of THREE.Object3D.", t2), this);
    }
    remove(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.remove(arguments[t3]);
        return this;
      }
      const e2 = this.children.indexOf(t2);
      return -1 !== e2 && (t2.parent = null, this.children.splice(e2, 1), t2.dispatchEvent(Mr), _r.child = t2, this.dispatchEvent(_r), _r.child = null), this;
    }
    removeFromParent() {
      const t2 = this.parent;
      return null !== t2 && t2.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(t2) {
      return this.updateWorldMatrix(true, false), pr.copy(this.matrixWorld).invert(), null !== t2.parent && (t2.parent.updateWorldMatrix(true, false), pr.multiply(t2.parent.matrixWorld)), t2.applyMatrix4(pr), t2.removeFromParent(), t2.parent = this, this.children.push(t2), t2.updateWorldMatrix(false, true), t2.dispatchEvent(wr), Sr.child = t2, this.dispatchEvent(Sr), Sr.child = null, this;
    }
    getObjectById(t2) {
      return this.getObjectByProperty("id", t2);
    }
    getObjectByName(t2) {
      return this.getObjectByProperty("name", t2);
    }
    getObjectByProperty(t2, e2) {
      if (this[t2] === e2) return this;
      for (let s2 = 0, i2 = this.children.length; s2 < i2; s2++) {
        const i3 = this.children[s2].getObjectByProperty(t2, e2);
        if (void 0 !== i3) return i3;
      }
    }
    getObjectsByProperty(t2, e2, s2 = []) {
      this[t2] === e2 && s2.push(this);
      const i2 = this.children;
      for (let r2 = 0, n2 = i2.length; r2 < n2; r2++) i2[r2].getObjectsByProperty(t2, e2, s2);
      return s2;
    }
    getWorldPosition(t2) {
      return this.updateWorldMatrix(true, false), t2.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(yr, t2, gr), t2;
    }
    getWorldScale(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(yr, fr, t2), t2;
    }
    getWorldDirection(t2) {
      this.updateWorldMatrix(true, false);
      const e2 = this.matrixWorld.elements;
      return t2.set(e2[8], e2[9], e2[10]).normalize();
    }
    raycast() {
    }
    traverse(t2) {
      t2(this);
      const e2 = this.children;
      for (let s2 = 0, i2 = e2.length; s2 < i2; s2++) e2[s2].traverse(t2);
    }
    traverseVisible(t2) {
      if (false === this.visible) return;
      t2(this);
      const e2 = this.children;
      for (let s2 = 0, i2 = e2.length; s2 < i2; s2++) e2[s2].traverseVisible(t2);
    }
    traverseAncestors(t2) {
      const e2 = this.parent;
      null !== e2 && (t2(e2), e2.traverseAncestors(t2));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale);
      const t2 = this.pivot;
      if (null !== t2) {
        const e2 = t2.x, s2 = t2.y, i2 = t2.z, r2 = this.matrix.elements;
        r2[12] += e2 - r2[0] * e2 - r2[4] * s2 - r2[8] * i2, r2[13] += s2 - r2[1] * e2 - r2[5] * s2 - r2[9] * i2, r2[14] += i2 - r2[2] * e2 - r2[6] * s2 - r2[10] * i2;
      }
      this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(t2) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t2) && (true === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t2 = true);
      const e2 = this.children;
      for (let s2 = 0, i2 = e2.length; s2 < i2; s2++) {
        e2[s2].updateMatrixWorld(t2);
      }
    }
    updateWorldMatrix(t2, e2, s2 = false) {
      const i2 = this.parent;
      if (true === t2 && null !== i2 && i2.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || s2) && (true === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, s2 = true), true === e2) {
        const t3 = this.children;
        for (let e3 = 0, i3 = t3.length; e3 < i3; e3++) {
          t3[e3].updateWorldMatrix(false, true, s2);
        }
      }
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2, s2 = {};
      e2 && (t2 = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, s2.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
      const i2 = {};
      function r2(e3, s3) {
        return void 0 === e3[s3.uuid] && (e3[s3.uuid] = s3.toJSON(t2)), s3.uuid;
      }
      if (i2.uuid = this.uuid, i2.type = this.type, "" !== this.name && (i2.name = this.name), true === this.castShadow && (i2.castShadow = true), true === this.receiveShadow && (i2.receiveShadow = true), false === this.visible && (i2.visible = false), false === this.frustumCulled && (i2.frustumCulled = false), 0 !== this.renderOrder && (i2.renderOrder = this.renderOrder), false !== this.static && (i2.static = this.static), Object.keys(this.userData).length > 0 && (i2.userData = this.userData), i2.layers = this.layers.mask, i2.matrix = this.matrix.toArray(), i2.up = this.up.toArray(), null !== this.pivot && (i2.pivot = this.pivot.toArray()), false === this.matrixAutoUpdate && (i2.matrixAutoUpdate = false), void 0 !== this.morphTargetDictionary && (i2.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), void 0 !== this.morphTargetInfluences && (i2.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (i2.type = "InstancedMesh", i2.count = this.count, i2.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i2.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i2.type = "BatchedMesh", i2.perObjectFrustumCulled = this.perObjectFrustumCulled, i2.sortObjects = this.sortObjects, i2.drawRanges = this._drawRanges, i2.reservedRanges = this._reservedRanges, i2.geometryInfo = this._geometryInfo.map((t3) => ({ ...t3, boundingBox: t3.boundingBox ? t3.boundingBox.toJSON() : void 0, boundingSphere: t3.boundingSphere ? t3.boundingSphere.toJSON() : void 0 })), i2.instanceInfo = this._instanceInfo.map((t3) => ({ ...t3 })), i2.availableInstanceIds = this._availableInstanceIds.slice(), i2.availableGeometryIds = this._availableGeometryIds.slice(), i2.nextIndexStart = this._nextIndexStart, i2.nextVertexStart = this._nextVertexStart, i2.geometryCount = this._geometryCount, i2.maxInstanceCount = this._maxInstanceCount, i2.maxVertexCount = this._maxVertexCount, i2.maxIndexCount = this._maxIndexCount, i2.geometryInitialized = this._geometryInitialized, i2.matricesTexture = this._matricesTexture.toJSON(t2), i2.indirectTexture = this._indirectTexture.toJSON(t2), null !== this._colorsTexture && (i2.colorsTexture = this._colorsTexture.toJSON(t2)), null !== this.boundingSphere && (i2.boundingSphere = this.boundingSphere.toJSON()), null !== this.boundingBox && (i2.boundingBox = this.boundingBox.toJSON())), this.isScene) this.background && (this.background.isColor ? i2.background = this.background.toJSON() : this.background.isTexture && (i2.background = this.background.toJSON(t2).uuid)), this.environment && this.environment.isTexture && true !== this.environment.isRenderTargetTexture && (i2.environment = this.environment.toJSON(t2).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i2.geometry = r2(t2.geometries, this.geometry);
        const e3 = this.geometry.parameters;
        if (void 0 !== e3 && void 0 !== e3.shapes) {
          const s3 = e3.shapes;
          if (Array.isArray(s3)) for (let e4 = 0, i3 = s3.length; e4 < i3; e4++) {
            const i4 = s3[e4];
            r2(t2.shapes, i4);
          }
          else r2(t2.shapes, s3);
        }
      }
      if (this.isSkinnedMesh && (i2.bindMode = this.bindMode, i2.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r2(t2.skeletons, this.skeleton), i2.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
        const e3 = [];
        for (let s3 = 0, i3 = this.material.length; s3 < i3; s3++) e3.push(r2(t2.materials, this.material[s3]));
        i2.material = e3;
      } else i2.material = r2(t2.materials, this.material);
      if (this.children.length > 0) {
        i2.children = [];
        for (let e3 = 0; e3 < this.children.length; e3++) i2.children.push(this.children[e3].toJSON(t2).object);
      }
      if (this.animations.length > 0) {
        i2.animations = [];
        for (let e3 = 0; e3 < this.animations.length; e3++) {
          const s3 = this.animations[e3];
          i2.animations.push(r2(t2.animations, s3));
        }
      }
      if (e2) {
        const e3 = n2(t2.geometries), i3 = n2(t2.materials), r3 = n2(t2.textures), a2 = n2(t2.images), o2 = n2(t2.shapes), h2 = n2(t2.skeletons), l2 = n2(t2.animations), c2 = n2(t2.nodes);
        e3.length > 0 && (s2.geometries = e3), i3.length > 0 && (s2.materials = i3), r3.length > 0 && (s2.textures = r3), a2.length > 0 && (s2.images = a2), o2.length > 0 && (s2.shapes = o2), h2.length > 0 && (s2.skeletons = h2), l2.length > 0 && (s2.animations = l2), c2.length > 0 && (s2.nodes = c2);
      }
      return s2.object = i2, s2;
      function n2(t3) {
        const e3 = [];
        for (const s3 in t3) {
          const i3 = t3[s3];
          delete i3.metadata, e3.push(i3);
        }
        return e3;
      }
    }
    clone(t2) {
      return new this.constructor().copy(this, t2);
    }
    copy(t2, e2 = true) {
      if (this.name = t2.name, this.up.copy(t2.up), this.position.copy(t2.position), this.rotation.order = t2.rotation.order, this.quaternion.copy(t2.quaternion), this.scale.copy(t2.scale), this.pivot = null !== t2.pivot ? t2.pivot.clone() : null, this.matrix.copy(t2.matrix), this.matrixWorld.copy(t2.matrixWorld), this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrixWorldAutoUpdate = t2.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t2.matrixWorldNeedsUpdate, this.layers.mask = t2.layers.mask, this.visible = t2.visible, this.castShadow = t2.castShadow, this.receiveShadow = t2.receiveShadow, this.frustumCulled = t2.frustumCulled, this.renderOrder = t2.renderOrder, this.static = t2.static, this.animations = t2.animations.slice(), this.userData = JSON.parse(JSON.stringify(t2.userData)), true === e2) for (let e3 = 0; e3 < t2.children.length; e3++) {
        const s2 = t2.children[e3];
        this.add(s2.clone());
      }
      return this;
    }
  };
  Ar.DEFAULT_UP = new Ti(0, 1, 0), Ar.DEFAULT_MATRIX_AUTO_UPDATE = true, Ar.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  var Tr = class extends Ar {
    constructor() {
      super(), this.isGroup = true, this.type = "Group";
    }
  };
  var zr = { type: "move" };
  var Cr = class {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
      return null === this._hand && (this._hand = new Tr(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
    }
    getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new Tr(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new Ti(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new Ti()), this._targetRay;
    }
    getGripSpace() {
      return null === this._grip && (this._grip = new Tr(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new Ti(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new Ti(), this._grip.eventsEnabled = false), this._grip;
    }
    dispatchEvent(t2) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(t2), null !== this._grip && this._grip.dispatchEvent(t2), null !== this._hand && this._hand.dispatchEvent(t2), this;
    }
    connect(t2) {
      if (t2 && t2.hand) {
        const e2 = this._hand;
        if (e2) for (const s2 of t2.hand.values()) this._getHandJoint(e2, s2);
      }
      return this.dispatchEvent({ type: "connected", data: t2 }), this;
    }
    disconnect(t2) {
      return this.dispatchEvent({ type: "disconnected", data: t2 }), null !== this._targetRay && (this._targetRay.visible = false), null !== this._grip && (this._grip.visible = false), null !== this._hand && (this._hand.visible = false), this;
    }
    update(t2, e2, s2) {
      let i2 = null, r2 = null, n2 = null;
      const a2 = this._targetRay, o2 = this._grip, h2 = this._hand;
      if (t2 && "visible-blurred" !== e2.session.visibilityState) {
        if (h2 && t2.hand) {
          n2 = true;
          for (const i4 of t2.hand.values()) {
            const t3 = e2.getJointPose(i4, s2), r4 = this._getHandJoint(h2, i4);
            null !== t3 && (r4.matrix.fromArray(t3.transform.matrix), r4.matrix.decompose(r4.position, r4.rotation, r4.scale), r4.matrixWorldNeedsUpdate = true, r4.jointRadius = t3.radius), r4.visible = null !== t3;
          }
          const i3 = h2.joints["index-finger-tip"], r3 = h2.joints["thumb-tip"], a3 = i3.position.distanceTo(r3.position), o3 = 0.02, l2 = 5e-3;
          h2.inputState.pinching && a3 > o3 + l2 ? (h2.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t2.handedness, target: this })) : !h2.inputState.pinching && a3 <= o3 - l2 && (h2.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t2.handedness, target: this }));
        } else null !== o2 && t2.gripSpace && (r2 = e2.getPose(t2.gripSpace, s2), null !== r2 && (o2.matrix.fromArray(r2.transform.matrix), o2.matrix.decompose(o2.position, o2.rotation, o2.scale), o2.matrixWorldNeedsUpdate = true, r2.linearVelocity ? (o2.hasLinearVelocity = true, o2.linearVelocity.copy(r2.linearVelocity)) : o2.hasLinearVelocity = false, r2.angularVelocity ? (o2.hasAngularVelocity = true, o2.angularVelocity.copy(r2.angularVelocity)) : o2.hasAngularVelocity = false, o2.eventsEnabled && o2.dispatchEvent({ type: "gripUpdated", data: t2, target: this })));
        null !== a2 && (i2 = e2.getPose(t2.targetRaySpace, s2), null === i2 && null !== r2 && (i2 = r2), null !== i2 && (a2.matrix.fromArray(i2.transform.matrix), a2.matrix.decompose(a2.position, a2.rotation, a2.scale), a2.matrixWorldNeedsUpdate = true, i2.linearVelocity ? (a2.hasLinearVelocity = true, a2.linearVelocity.copy(i2.linearVelocity)) : a2.hasLinearVelocity = false, i2.angularVelocity ? (a2.hasAngularVelocity = true, a2.angularVelocity.copy(i2.angularVelocity)) : a2.hasAngularVelocity = false, this.dispatchEvent(zr)));
      }
      return null !== a2 && (a2.visible = null !== i2), null !== o2 && (o2.visible = null !== r2), null !== h2 && (h2.visible = null !== n2), this;
    }
    _getHandJoint(t2, e2) {
      if (void 0 === t2.joints[e2.jointName]) {
        const s2 = new Tr();
        s2.matrixAutoUpdate = false, s2.visible = false, t2.joints[e2.jointName] = s2, t2.add(s2);
      }
      return t2.joints[e2.jointName];
    }
  };
  var Ir = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  var Br = { h: 0, s: 0, l: 0 };
  var kr = { h: 0, s: 0, l: 0 };
  function Or(t2, e2, s2) {
    return s2 < 0 && (s2 += 1), s2 > 1 && (s2 -= 1), s2 < 1 / 6 ? t2 + 6 * (e2 - t2) * s2 : s2 < 0.5 ? e2 : s2 < 2 / 3 ? t2 + 6 * (e2 - t2) * (2 / 3 - s2) : t2;
  }
  var Pr = class {
    constructor(t2, e2, s2) {
      return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t2, e2, s2);
    }
    set(t2, e2, s2) {
      if (void 0 === e2 && void 0 === s2) {
        const e3 = t2;
        e3 && e3.isColor ? this.copy(e3) : "number" == typeof e3 ? this.setHex(e3) : "string" == typeof e3 && this.setStyle(e3);
      } else this.setRGB(t2, e2, s2);
      return this;
    }
    setScalar(t2) {
      return this.r = t2, this.g = t2, this.b = t2, this;
    }
    setHex(t2, e2 = es) {
      return t2 = Math.floor(t2), this.r = (t2 >> 16 & 255) / 255, this.g = (t2 >> 8 & 255) / 255, this.b = (255 & t2) / 255, Ri.colorSpaceToWorking(this, e2), this;
    }
    setRGB(t2, e2, s2, i2 = Ri.workingColorSpace) {
      return this.r = t2, this.g = e2, this.b = s2, Ri.colorSpaceToWorking(this, i2), this;
    }
    setHSL(t2, e2, s2, i2 = Ri.workingColorSpace) {
      if (t2 = bi(t2, 1), e2 = xi(e2, 0, 1), s2 = xi(s2, 0, 1), 0 === e2) this.r = this.g = this.b = s2;
      else {
        const i3 = s2 <= 0.5 ? s2 * (1 + e2) : s2 + e2 - s2 * e2, r2 = 2 * s2 - i3;
        this.r = Or(r2, i3, t2 + 1 / 3), this.g = Or(r2, i3, t2), this.b = Or(r2, i3, t2 - 1 / 3);
      }
      return Ri.colorSpaceToWorking(this, i2), this;
    }
    setStyle(t2, e2 = es) {
      function s2(e3) {
        void 0 !== e3 && parseFloat(e3) < 1 && ai("Color: Alpha component of " + t2 + " will be ignored.");
      }
      let i2;
      if (i2 = /^(\w+)\(([^\)]*)\)/.exec(t2)) {
        let r2;
        const n2 = i2[1], a2 = i2[2];
        switch (n2) {
          case "rgb":
          case "rgba":
            if (r2 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a2)) return s2(r2[4]), this.setRGB(Math.min(255, parseInt(r2[1], 10)) / 255, Math.min(255, parseInt(r2[2], 10)) / 255, Math.min(255, parseInt(r2[3], 10)) / 255, e2);
            if (r2 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a2)) return s2(r2[4]), this.setRGB(Math.min(100, parseInt(r2[1], 10)) / 100, Math.min(100, parseInt(r2[2], 10)) / 100, Math.min(100, parseInt(r2[3], 10)) / 100, e2);
            break;
          case "hsl":
          case "hsla":
            if (r2 = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a2)) return s2(r2[4]), this.setHSL(parseFloat(r2[1]) / 360, parseFloat(r2[2]) / 100, parseFloat(r2[3]) / 100, e2);
            break;
          default:
            ai("Color: Unknown color model " + t2);
        }
      } else if (i2 = /^\#([A-Fa-f\d]+)$/.exec(t2)) {
        const s3 = i2[1], r2 = s3.length;
        if (3 === r2) return this.setRGB(parseInt(s3.charAt(0), 16) / 15, parseInt(s3.charAt(1), 16) / 15, parseInt(s3.charAt(2), 16) / 15, e2);
        if (6 === r2) return this.setHex(parseInt(s3, 16), e2);
        ai("Color: Invalid hex color " + t2);
      } else if (t2 && t2.length > 0) return this.setColorName(t2, e2);
      return this;
    }
    setColorName(t2, e2 = es) {
      const s2 = Ir[t2.toLowerCase()];
      return void 0 !== s2 ? this.setHex(s2, e2) : ai("Color: Unknown color " + t2), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(t2) {
      return this.r = t2.r, this.g = t2.g, this.b = t2.b, this;
    }
    copySRGBToLinear(t2) {
      return this.r = Ei(t2.r), this.g = Ei(t2.g), this.b = Ei(t2.b), this;
    }
    copyLinearToSRGB(t2) {
      return this.r = Ni(t2.r), this.g = Ni(t2.g), this.b = Ni(t2.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(t2 = es) {
      return Ri.workingToColorSpace(Rr.copy(this), t2), 65536 * Math.round(xi(255 * Rr.r, 0, 255)) + 256 * Math.round(xi(255 * Rr.g, 0, 255)) + Math.round(xi(255 * Rr.b, 0, 255));
    }
    getHexString(t2 = es) {
      return ("000000" + this.getHex(t2).toString(16)).slice(-6);
    }
    getHSL(t2, e2 = Ri.workingColorSpace) {
      Ri.workingToColorSpace(Rr.copy(this), e2);
      const s2 = Rr.r, i2 = Rr.g, r2 = Rr.b, n2 = Math.max(s2, i2, r2), a2 = Math.min(s2, i2, r2);
      let o2, h2;
      const l2 = (a2 + n2) / 2;
      if (a2 === n2) o2 = 0, h2 = 0;
      else {
        const t3 = n2 - a2;
        switch (h2 = l2 <= 0.5 ? t3 / (n2 + a2) : t3 / (2 - n2 - a2), n2) {
          case s2:
            o2 = (i2 - r2) / t3 + (i2 < r2 ? 6 : 0);
            break;
          case i2:
            o2 = (r2 - s2) / t3 + 2;
            break;
          case r2:
            o2 = (s2 - i2) / t3 + 4;
        }
        o2 /= 6;
      }
      return t2.h = o2, t2.s = h2, t2.l = l2, t2;
    }
    getRGB(t2, e2 = Ri.workingColorSpace) {
      return Ri.workingToColorSpace(Rr.copy(this), e2), t2.r = Rr.r, t2.g = Rr.g, t2.b = Rr.b, t2;
    }
    getStyle(t2 = es) {
      Ri.workingToColorSpace(Rr.copy(this), t2);
      const e2 = Rr.r, s2 = Rr.g, i2 = Rr.b;
      return t2 !== es ? `color(${t2} ${e2.toFixed(3)} ${s2.toFixed(3)} ${i2.toFixed(3)})` : `rgb(${Math.round(255 * e2)},${Math.round(255 * s2)},${Math.round(255 * i2)})`;
    }
    offsetHSL(t2, e2, s2) {
      return this.getHSL(Br), this.setHSL(Br.h + t2, Br.s + e2, Br.l + s2);
    }
    add(t2) {
      return this.r += t2.r, this.g += t2.g, this.b += t2.b, this;
    }
    addColors(t2, e2) {
      return this.r = t2.r + e2.r, this.g = t2.g + e2.g, this.b = t2.b + e2.b, this;
    }
    addScalar(t2) {
      return this.r += t2, this.g += t2, this.b += t2, this;
    }
    sub(t2) {
      return this.r = Math.max(0, this.r - t2.r), this.g = Math.max(0, this.g - t2.g), this.b = Math.max(0, this.b - t2.b), this;
    }
    multiply(t2) {
      return this.r *= t2.r, this.g *= t2.g, this.b *= t2.b, this;
    }
    multiplyScalar(t2) {
      return this.r *= t2, this.g *= t2, this.b *= t2, this;
    }
    lerp(t2, e2) {
      return this.r += (t2.r - this.r) * e2, this.g += (t2.g - this.g) * e2, this.b += (t2.b - this.b) * e2, this;
    }
    lerpColors(t2, e2, s2) {
      return this.r = t2.r + (e2.r - t2.r) * s2, this.g = t2.g + (e2.g - t2.g) * s2, this.b = t2.b + (e2.b - t2.b) * s2, this;
    }
    lerpHSL(t2, e2) {
      this.getHSL(Br), t2.getHSL(kr);
      const s2 = vi(Br.h, kr.h, e2), i2 = vi(Br.s, kr.s, e2), r2 = vi(Br.l, kr.l, e2);
      return this.setHSL(s2, i2, r2), this;
    }
    setFromVector3(t2) {
      return this.r = t2.x, this.g = t2.y, this.b = t2.z, this;
    }
    applyMatrix3(t2) {
      const e2 = this.r, s2 = this.g, i2 = this.b, r2 = t2.elements;
      return this.r = r2[0] * e2 + r2[3] * s2 + r2[6] * i2, this.g = r2[1] * e2 + r2[4] * s2 + r2[7] * i2, this.b = r2[2] * e2 + r2[5] * s2 + r2[8] * i2, this;
    }
    equals(t2) {
      return t2.r === this.r && t2.g === this.g && t2.b === this.b;
    }
    fromArray(t2, e2 = 0) {
      return this.r = t2[e2], this.g = t2[e2 + 1], this.b = t2[e2 + 2], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.r, t2[e2 + 1] = this.g, t2[e2 + 2] = this.b, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.r = t2.getX(e2), this.g = t2.getY(e2), this.b = t2.getZ(e2), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  };
  var Rr = new Pr();
  Pr.NAMES = Ir;
  var Nr = class _Nr {
    constructor(t2, e2 = 1, s2 = 1e3) {
      this.isFog = true, this.name = "", this.color = new Pr(t2), this.near = e2, this.far = s2;
    }
    clone() {
      return new _Nr(this.color, this.near, this.far);
    }
    toJSON() {
      return { type: "Fog", name: this.name, color: this.color.getHex(), near: this.near, far: this.far };
    }
  };
  var Vr = class extends Ar {
    constructor() {
      super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new hr(), this.environmentIntensity = 1, this.environmentRotation = new hr(), this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    copy(t2, e2) {
      return super.copy(t2, e2), null !== t2.background && (this.background = t2.background.clone()), null !== t2.environment && (this.environment = t2.environment.clone()), null !== t2.fog && (this.fog = t2.fog.clone()), this.backgroundBlurriness = t2.backgroundBlurriness, this.backgroundIntensity = t2.backgroundIntensity, this.backgroundRotation.copy(t2.backgroundRotation), this.environmentIntensity = t2.environmentIntensity, this.environmentRotation.copy(t2.environmentRotation), null !== t2.overrideMaterial && (this.overrideMaterial = t2.overrideMaterial.clone()), this.matrixAutoUpdate = t2.matrixAutoUpdate, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return null !== this.fog && (e2.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e2.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (e2.object.backgroundIntensity = this.backgroundIntensity), e2.object.backgroundRotation = this.backgroundRotation.toArray(), 1 !== this.environmentIntensity && (e2.object.environmentIntensity = this.environmentIntensity), e2.object.environmentRotation = this.environmentRotation.toArray(), e2;
    }
  };
  var Lr = new Ti();
  var Fr = new Ti();
  var Dr = new Ti();
  var Ur = new Ti();
  var jr = new Ti();
  var Wr = new Ti();
  var Jr = new Ti();
  var qr = new Ti();
  var Hr = new Ti();
  var Xr = new Ti();
  var Yr = new qi();
  var Zr = new qi();
  var Gr = new qi();
  var $r = class _$r {
    constructor(t2 = new Ti(), e2 = new Ti(), s2 = new Ti()) {
      this.a = t2, this.b = e2, this.c = s2;
    }
    static getNormal(t2, e2, s2, i2) {
      i2.subVectors(s2, e2), Lr.subVectors(t2, e2), i2.cross(Lr);
      const r2 = i2.lengthSq();
      return r2 > 0 ? i2.multiplyScalar(1 / Math.sqrt(r2)) : i2.set(0, 0, 0);
    }
    static getBarycoord(t2, e2, s2, i2, r2) {
      Lr.subVectors(i2, e2), Fr.subVectors(s2, e2), Dr.subVectors(t2, e2);
      const n2 = Lr.dot(Lr), a2 = Lr.dot(Fr), o2 = Lr.dot(Dr), h2 = Fr.dot(Fr), l2 = Fr.dot(Dr), c2 = n2 * h2 - a2 * a2;
      if (0 === c2) return r2.set(0, 0, 0), null;
      const u2 = 1 / c2, d2 = (h2 * o2 - a2 * l2) * u2, p2 = (n2 * l2 - a2 * o2) * u2;
      return r2.set(1 - d2 - p2, p2, d2);
    }
    static containsPoint(t2, e2, s2, i2) {
      return null !== this.getBarycoord(t2, e2, s2, i2, Ur) && (Ur.x >= 0 && Ur.y >= 0 && Ur.x + Ur.y <= 1);
    }
    static getInterpolation(t2, e2, s2, i2, r2, n2, a2, o2) {
      return null === this.getBarycoord(t2, e2, s2, i2, Ur) ? (o2.x = 0, o2.y = 0, "z" in o2 && (o2.z = 0), "w" in o2 && (o2.w = 0), null) : (o2.setScalar(0), o2.addScaledVector(r2, Ur.x), o2.addScaledVector(n2, Ur.y), o2.addScaledVector(a2, Ur.z), o2);
    }
    static getInterpolatedAttribute(t2, e2, s2, i2, r2, n2) {
      return Yr.setScalar(0), Zr.setScalar(0), Gr.setScalar(0), Yr.fromBufferAttribute(t2, e2), Zr.fromBufferAttribute(t2, s2), Gr.fromBufferAttribute(t2, i2), n2.setScalar(0), n2.addScaledVector(Yr, r2.x), n2.addScaledVector(Zr, r2.y), n2.addScaledVector(Gr, r2.z), n2;
    }
    static isFrontFacing(t2, e2, s2, i2) {
      return Lr.subVectors(s2, e2), Fr.subVectors(t2, e2), Lr.cross(Fr).dot(i2) < 0;
    }
    set(t2, e2, s2) {
      return this.a.copy(t2), this.b.copy(e2), this.c.copy(s2), this;
    }
    setFromPointsAndIndices(t2, e2, s2, i2) {
      return this.a.copy(t2[e2]), this.b.copy(t2[s2]), this.c.copy(t2[i2]), this;
    }
    setFromAttributeAndIndices(t2, e2, s2, i2) {
      return this.a.fromBufferAttribute(t2, e2), this.b.fromBufferAttribute(t2, s2), this.c.fromBufferAttribute(t2, i2), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.a.copy(t2.a), this.b.copy(t2.b), this.c.copy(t2.c), this;
    }
    getArea() {
      return Lr.subVectors(this.c, this.b), Fr.subVectors(this.a, this.b), 0.5 * Lr.cross(Fr).length();
    }
    getMidpoint(t2) {
      return t2.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(t2) {
      return _$r.getNormal(this.a, this.b, this.c, t2);
    }
    getPlane(t2) {
      return t2.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t2, e2) {
      return _$r.getBarycoord(t2, this.a, this.b, this.c, e2);
    }
    getInterpolation(t2, e2, s2, i2, r2) {
      return _$r.getInterpolation(t2, this.a, this.b, this.c, e2, s2, i2, r2);
    }
    containsPoint(t2) {
      return _$r.containsPoint(t2, this.a, this.b, this.c);
    }
    isFrontFacing(t2) {
      return _$r.isFrontFacing(this.a, this.b, this.c, t2);
    }
    intersectsBox(t2) {
      return t2.intersectsTriangle(this);
    }
    closestPointToPoint(t2, e2) {
      const s2 = this.a, i2 = this.b, r2 = this.c;
      let n2, a2;
      jr.subVectors(i2, s2), Wr.subVectors(r2, s2), qr.subVectors(t2, s2);
      const o2 = jr.dot(qr), h2 = Wr.dot(qr);
      if (o2 <= 0 && h2 <= 0) return e2.copy(s2);
      Hr.subVectors(t2, i2);
      const l2 = jr.dot(Hr), c2 = Wr.dot(Hr);
      if (l2 >= 0 && c2 <= l2) return e2.copy(i2);
      const u2 = o2 * c2 - l2 * h2;
      if (u2 <= 0 && o2 >= 0 && l2 <= 0) return n2 = o2 / (o2 - l2), e2.copy(s2).addScaledVector(jr, n2);
      Xr.subVectors(t2, r2);
      const d2 = jr.dot(Xr), p2 = Wr.dot(Xr);
      if (p2 >= 0 && d2 <= p2) return e2.copy(r2);
      const m2 = d2 * h2 - o2 * p2;
      if (m2 <= 0 && h2 >= 0 && p2 <= 0) return a2 = h2 / (h2 - p2), e2.copy(s2).addScaledVector(Wr, a2);
      const y2 = l2 * p2 - d2 * c2;
      if (y2 <= 0 && c2 - l2 >= 0 && d2 - p2 >= 0) return Jr.subVectors(r2, i2), a2 = (c2 - l2) / (c2 - l2 + (d2 - p2)), e2.copy(i2).addScaledVector(Jr, a2);
      const g2 = 1 / (y2 + m2 + u2);
      return n2 = m2 * g2, a2 = u2 * g2, e2.copy(s2).addScaledVector(jr, n2).addScaledVector(Wr, a2);
    }
    equals(t2) {
      return t2.a.equals(this.a) && t2.b.equals(this.b) && t2.c.equals(this.c);
    }
  };
  var Qr = class {
    constructor(t2 = new Ti(1 / 0, 1 / 0, 1 / 0), e2 = new Ti(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = true, this.min = t2, this.max = e2;
    }
    set(t2, e2) {
      return this.min.copy(t2), this.max.copy(e2), this;
    }
    setFromArray(t2) {
      this.makeEmpty();
      for (let e2 = 0, s2 = t2.length; e2 < s2; e2 += 3) this.expandByPoint(tn.fromArray(t2, e2));
      return this;
    }
    setFromBufferAttribute(t2) {
      this.makeEmpty();
      for (let e2 = 0, s2 = t2.count; e2 < s2; e2++) this.expandByPoint(tn.fromBufferAttribute(t2, e2));
      return this;
    }
    setFromPoints(t2) {
      this.makeEmpty();
      for (let e2 = 0, s2 = t2.length; e2 < s2; e2++) this.expandByPoint(t2[e2]);
      return this;
    }
    setFromCenterAndSize(t2, e2) {
      const s2 = tn.copy(e2).multiplyScalar(0.5);
      return this.min.copy(t2).sub(s2), this.max.copy(t2).add(s2), this;
    }
    setFromObject(t2, e2 = false) {
      return this.makeEmpty(), this.expandByObject(t2, e2);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.min.copy(t2.min), this.max.copy(t2.max), this;
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(t2) {
      return this.isEmpty() ? t2.set(0, 0, 0) : t2.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t2) {
      return this.isEmpty() ? t2.set(0, 0, 0) : t2.subVectors(this.max, this.min);
    }
    expandByPoint(t2) {
      return this.min.min(t2), this.max.max(t2), this;
    }
    expandByVector(t2) {
      return this.min.sub(t2), this.max.add(t2), this;
    }
    expandByScalar(t2) {
      return this.min.addScalar(-t2), this.max.addScalar(t2), this;
    }
    expandByObject(t2, e2 = false) {
      t2.updateWorldMatrix(false, false);
      const s2 = t2.geometry;
      if (void 0 !== s2) {
        const i3 = s2.getAttribute("position");
        if (true === e2 && void 0 !== i3 && true !== t2.isInstancedMesh) for (let e3 = 0, s3 = i3.count; e3 < s3; e3++) true === t2.isMesh ? t2.getVertexPosition(e3, tn) : tn.fromBufferAttribute(i3, e3), tn.applyMatrix4(t2.matrixWorld), this.expandByPoint(tn);
        else void 0 !== t2.boundingBox ? (null === t2.boundingBox && t2.computeBoundingBox(), en.copy(t2.boundingBox)) : (null === s2.boundingBox && s2.computeBoundingBox(), en.copy(s2.boundingBox)), en.applyMatrix4(t2.matrixWorld), this.union(en);
      }
      const i2 = t2.children;
      for (let t3 = 0, s3 = i2.length; t3 < s3; t3++) this.expandByObject(i2[t3], e2);
      return this;
    }
    containsPoint(t2) {
      return t2.x >= this.min.x && t2.x <= this.max.x && t2.y >= this.min.y && t2.y <= this.max.y && t2.z >= this.min.z && t2.z <= this.max.z;
    }
    containsBox(t2) {
      return this.min.x <= t2.min.x && t2.max.x <= this.max.x && this.min.y <= t2.min.y && t2.max.y <= this.max.y && this.min.z <= t2.min.z && t2.max.z <= this.max.z;
    }
    getParameter(t2, e2) {
      return e2.set((t2.x - this.min.x) / (this.max.x - this.min.x), (t2.y - this.min.y) / (this.max.y - this.min.y), (t2.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(t2) {
      return t2.max.x >= this.min.x && t2.min.x <= this.max.x && t2.max.y >= this.min.y && t2.min.y <= this.max.y && t2.max.z >= this.min.z && t2.min.z <= this.max.z;
    }
    intersectsSphere(t2) {
      return this.clampPoint(t2.center, tn), tn.distanceToSquared(t2.center) <= t2.radius * t2.radius;
    }
    intersectsPlane(t2) {
      let e2, s2;
      return t2.normal.x > 0 ? (e2 = t2.normal.x * this.min.x, s2 = t2.normal.x * this.max.x) : (e2 = t2.normal.x * this.max.x, s2 = t2.normal.x * this.min.x), t2.normal.y > 0 ? (e2 += t2.normal.y * this.min.y, s2 += t2.normal.y * this.max.y) : (e2 += t2.normal.y * this.max.y, s2 += t2.normal.y * this.min.y), t2.normal.z > 0 ? (e2 += t2.normal.z * this.min.z, s2 += t2.normal.z * this.max.z) : (e2 += t2.normal.z * this.max.z, s2 += t2.normal.z * this.min.z), e2 <= -t2.constant && s2 >= -t2.constant;
    }
    intersectsTriangle(t2) {
      if (this.isEmpty()) return false;
      this.getCenter(ln), cn.subVectors(this.max, ln), sn.subVectors(t2.a, ln), rn.subVectors(t2.b, ln), nn.subVectors(t2.c, ln), an.subVectors(rn, sn), on.subVectors(nn, rn), hn.subVectors(sn, nn);
      let e2 = [0, -an.z, an.y, 0, -on.z, on.y, 0, -hn.z, hn.y, an.z, 0, -an.x, on.z, 0, -on.x, hn.z, 0, -hn.x, -an.y, an.x, 0, -on.y, on.x, 0, -hn.y, hn.x, 0];
      return !!pn(e2, sn, rn, nn, cn) && (e2 = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!pn(e2, sn, rn, nn, cn) && (un.crossVectors(an, on), e2 = [un.x, un.y, un.z], pn(e2, sn, rn, nn, cn)));
    }
    clampPoint(t2, e2) {
      return e2.copy(t2).clamp(this.min, this.max);
    }
    distanceToPoint(t2) {
      return this.clampPoint(t2, tn).distanceTo(t2);
    }
    getBoundingSphere(t2) {
      return this.isEmpty() ? t2.makeEmpty() : (this.getCenter(t2.center), t2.radius = 0.5 * this.getSize(tn).length()), t2;
    }
    intersect(t2) {
      return this.min.max(t2.min), this.max.min(t2.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(t2) {
      return this.min.min(t2.min), this.max.max(t2.max), this;
    }
    applyMatrix4(t2) {
      return this.isEmpty() || (Kr[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t2), Kr[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t2), Kr[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t2), Kr[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t2), Kr[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t2), Kr[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t2), Kr[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t2), Kr[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t2), this.setFromPoints(Kr)), this;
    }
    translate(t2) {
      return this.min.add(t2), this.max.add(t2), this;
    }
    equals(t2) {
      return t2.min.equals(this.min) && t2.max.equals(this.max);
    }
    toJSON() {
      return { min: this.min.toArray(), max: this.max.toArray() };
    }
    fromJSON(t2) {
      return this.min.fromArray(t2.min), this.max.fromArray(t2.max), this;
    }
  };
  var Kr = [new Ti(), new Ti(), new Ti(), new Ti(), new Ti(), new Ti(), new Ti(), new Ti()];
  var tn = new Ti();
  var en = new Qr();
  var sn = new Ti();
  var rn = new Ti();
  var nn = new Ti();
  var an = new Ti();
  var on = new Ti();
  var hn = new Ti();
  var ln = new Ti();
  var cn = new Ti();
  var un = new Ti();
  var dn = new Ti();
  function pn(t2, e2, s2, i2, r2) {
    for (let n2 = 0, a2 = t2.length - 3; n2 <= a2; n2 += 3) {
      dn.fromArray(t2, n2);
      const a3 = r2.x * Math.abs(dn.x) + r2.y * Math.abs(dn.y) + r2.z * Math.abs(dn.z), o2 = e2.dot(dn), h2 = s2.dot(dn), l2 = i2.dot(dn);
      if (Math.max(-Math.max(o2, h2, l2), Math.min(o2, h2, l2)) > a3) return false;
    }
    return true;
  }
  var mn = yn();
  function yn() {
    const t2 = new ArrayBuffer(4), e2 = new Float32Array(t2), s2 = new Uint32Array(t2), i2 = new Uint32Array(512), r2 = new Uint32Array(512);
    for (let t3 = 0; t3 < 256; ++t3) {
      const e3 = t3 - 127;
      e3 < -27 ? (i2[t3] = 0, i2[256 | t3] = 32768, r2[t3] = 24, r2[256 | t3] = 24) : e3 < -14 ? (i2[t3] = 1024 >> -e3 - 14, i2[256 | t3] = 1024 >> -e3 - 14 | 32768, r2[t3] = -e3 - 1, r2[256 | t3] = -e3 - 1) : e3 <= 15 ? (i2[t3] = e3 + 15 << 10, i2[256 | t3] = e3 + 15 << 10 | 32768, r2[t3] = 13, r2[256 | t3] = 13) : e3 < 128 ? (i2[t3] = 31744, i2[256 | t3] = 64512, r2[t3] = 24, r2[256 | t3] = 24) : (i2[t3] = 31744, i2[256 | t3] = 64512, r2[t3] = 13, r2[256 | t3] = 13);
    }
    const n2 = new Uint32Array(2048), a2 = new Uint32Array(64), o2 = new Uint32Array(64);
    for (let t3 = 1; t3 < 1024; ++t3) {
      let e3 = t3 << 13, s3 = 0;
      for (; !(8388608 & e3); ) e3 <<= 1, s3 -= 8388608;
      e3 &= -8388609, s3 += 947912704, n2[t3] = e3 | s3;
    }
    for (let t3 = 1024; t3 < 2048; ++t3) n2[t3] = 939524096 + (t3 - 1024 << 13);
    for (let t3 = 1; t3 < 31; ++t3) a2[t3] = t3 << 23;
    a2[31] = 1199570944, a2[32] = 2147483648;
    for (let t3 = 33; t3 < 63; ++t3) a2[t3] = 2147483648 + (t3 - 32 << 23);
    a2[63] = 3347054592;
    for (let t3 = 1; t3 < 64; ++t3) 32 !== t3 && (o2[t3] = 1024);
    return { floatView: e2, uint32View: s2, baseTable: i2, shiftTable: r2, mantissaTable: n2, exponentTable: a2, offsetTable: o2 };
  }
  var bn = new Ti();
  var vn = new _i();
  var wn = 0;
  var Mn = class extends di {
    constructor(t2, e2, s2 = false) {
      if (super(), Array.isArray(t2)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: wn++ }), this.name = "", this.array = t2, this.itemSize = e2, this.count = void 0 !== t2 ? t2.length / e2 : 0, this.normalized = s2, this.usage = Os, this.updateRanges = [], this.gpuType = Pt, this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    setUsage(t2) {
      return this.usage = t2, this;
    }
    addUpdateRange(t2, e2) {
      this.updateRanges.push({ start: t2, count: e2 });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t2) {
      return this.name = t2.name, this.array = new t2.array.constructor(t2.array), this.itemSize = t2.itemSize, this.count = t2.count, this.normalized = t2.normalized, this.usage = t2.usage, this.gpuType = t2.gpuType, this;
    }
    copyAt(t2, e2, s2) {
      t2 *= this.itemSize, s2 *= e2.itemSize;
      for (let i2 = 0, r2 = this.itemSize; i2 < r2; i2++) this.array[t2 + i2] = e2.array[s2 + i2];
      return this;
    }
    copyArray(t2) {
      return this.array.set(t2), this;
    }
    applyMatrix3(t2) {
      if (2 === this.itemSize) for (let e2 = 0, s2 = this.count; e2 < s2; e2++) vn.fromBufferAttribute(this, e2), vn.applyMatrix3(t2), this.setXY(e2, vn.x, vn.y);
      else if (3 === this.itemSize) for (let e2 = 0, s2 = this.count; e2 < s2; e2++) bn.fromBufferAttribute(this, e2), bn.applyMatrix3(t2), this.setXYZ(e2, bn.x, bn.y, bn.z);
      return this;
    }
    applyMatrix4(t2) {
      for (let e2 = 0, s2 = this.count; e2 < s2; e2++) bn.fromBufferAttribute(this, e2), bn.applyMatrix4(t2), this.setXYZ(e2, bn.x, bn.y, bn.z);
      return this;
    }
    applyNormalMatrix(t2) {
      for (let e2 = 0, s2 = this.count; e2 < s2; e2++) bn.fromBufferAttribute(this, e2), bn.applyNormalMatrix(t2), this.setXYZ(e2, bn.x, bn.y, bn.z);
      return this;
    }
    transformDirection(t2) {
      for (let e2 = 0, s2 = this.count; e2 < s2; e2++) bn.fromBufferAttribute(this, e2), bn.transformDirection(t2), this.setXYZ(e2, bn.x, bn.y, bn.z);
      return this;
    }
    set(t2, e2 = 0) {
      return this.array.set(t2, e2), this;
    }
    getComponent(t2, e2) {
      let s2 = this.array[t2 * this.itemSize + e2];
      return this.normalized && (s2 = wi(s2, this.array)), s2;
    }
    setComponent(t2, e2, s2) {
      return this.normalized && (s2 = Mi(s2, this.array)), this.array[t2 * this.itemSize + e2] = s2, this;
    }
    getX(t2) {
      let e2 = this.array[t2 * this.itemSize];
      return this.normalized && (e2 = wi(e2, this.array)), e2;
    }
    setX(t2, e2) {
      return this.normalized && (e2 = Mi(e2, this.array)), this.array[t2 * this.itemSize] = e2, this;
    }
    getY(t2) {
      let e2 = this.array[t2 * this.itemSize + 1];
      return this.normalized && (e2 = wi(e2, this.array)), e2;
    }
    setY(t2, e2) {
      return this.normalized && (e2 = Mi(e2, this.array)), this.array[t2 * this.itemSize + 1] = e2, this;
    }
    getZ(t2) {
      let e2 = this.array[t2 * this.itemSize + 2];
      return this.normalized && (e2 = wi(e2, this.array)), e2;
    }
    setZ(t2, e2) {
      return this.normalized && (e2 = Mi(e2, this.array)), this.array[t2 * this.itemSize + 2] = e2, this;
    }
    getW(t2) {
      let e2 = this.array[t2 * this.itemSize + 3];
      return this.normalized && (e2 = wi(e2, this.array)), e2;
    }
    setW(t2, e2) {
      return this.normalized && (e2 = Mi(e2, this.array)), this.array[t2 * this.itemSize + 3] = e2, this;
    }
    setXY(t2, e2, s2) {
      return t2 *= this.itemSize, this.normalized && (e2 = Mi(e2, this.array), s2 = Mi(s2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = s2, this;
    }
    setXYZ(t2, e2, s2, i2) {
      return t2 *= this.itemSize, this.normalized && (e2 = Mi(e2, this.array), s2 = Mi(s2, this.array), i2 = Mi(i2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = s2, this.array[t2 + 2] = i2, this;
    }
    setXYZW(t2, e2, s2, i2, r2) {
      return t2 *= this.itemSize, this.normalized && (e2 = Mi(e2, this.array), s2 = Mi(s2, this.array), i2 = Mi(i2, this.array), r2 = Mi(r2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = s2, this.array[t2 + 2] = i2, this.array[t2 + 3] = r2, this;
    }
    onUpload(t2) {
      return this.onUploadCallback = t2, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const t2 = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
      return "" !== this.name && (t2.name = this.name), this.usage !== Os && (t2.usage = this.usage), t2;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var zn = class extends Mn {
    constructor(t2, e2, s2) {
      super(new Uint16Array(t2), e2, s2);
    }
  };
  var In = class extends Mn {
    constructor(t2, e2, s2) {
      super(new Uint32Array(t2), e2, s2);
    }
  };
  var kn = class extends Mn {
    constructor(t2, e2, s2) {
      super(new Float32Array(t2), e2, s2);
    }
  };
  var On = new Qr();
  var Pn = new Ti();
  var Rn = new Ti();
  var En = class {
    constructor(t2 = new Ti(), e2 = -1) {
      this.isSphere = true, this.center = t2, this.radius = e2;
    }
    set(t2, e2) {
      return this.center.copy(t2), this.radius = e2, this;
    }
    setFromPoints(t2, e2) {
      const s2 = this.center;
      void 0 !== e2 ? s2.copy(e2) : On.setFromPoints(t2).getCenter(s2);
      let i2 = 0;
      for (let e3 = 0, r2 = t2.length; e3 < r2; e3++) i2 = Math.max(i2, s2.distanceToSquared(t2[e3]));
      return this.radius = Math.sqrt(i2), this;
    }
    copy(t2) {
      return this.center.copy(t2.center), this.radius = t2.radius, this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(t2) {
      return t2.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t2) {
      return t2.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t2) {
      const e2 = this.radius + t2.radius;
      return t2.center.distanceToSquared(this.center) <= e2 * e2;
    }
    intersectsBox(t2) {
      return t2.intersectsSphere(this);
    }
    intersectsPlane(t2) {
      return Math.abs(t2.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t2, e2) {
      const s2 = this.center.distanceToSquared(t2);
      return e2.copy(t2), s2 > this.radius * this.radius && (e2.sub(this.center).normalize(), e2.multiplyScalar(this.radius).add(this.center)), e2;
    }
    getBoundingBox(t2) {
      return this.isEmpty() ? (t2.makeEmpty(), t2) : (t2.set(this.center, this.center), t2.expandByScalar(this.radius), t2);
    }
    applyMatrix4(t2) {
      return this.center.applyMatrix4(t2), this.radius = this.radius * t2.getMaxScaleOnAxis(), this;
    }
    translate(t2) {
      return this.center.add(t2), this;
    }
    expandByPoint(t2) {
      if (this.isEmpty()) return this.center.copy(t2), this.radius = 0, this;
      Pn.subVectors(t2, this.center);
      const e2 = Pn.lengthSq();
      if (e2 > this.radius * this.radius) {
        const t3 = Math.sqrt(e2), s2 = 0.5 * (t3 - this.radius);
        this.center.addScaledVector(Pn, s2 / t3), this.radius += s2;
      }
      return this;
    }
    union(t2) {
      return t2.isEmpty() ? this : this.isEmpty() ? (this.copy(t2), this) : (true === this.center.equals(t2.center) ? this.radius = Math.max(this.radius, t2.radius) : (Rn.subVectors(t2.center, this.center).setLength(t2.radius), this.expandByPoint(Pn.copy(t2.center).add(Rn)), this.expandByPoint(Pn.copy(t2.center).sub(Rn))), this);
    }
    equals(t2) {
      return t2.center.equals(this.center) && t2.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      return { radius: this.radius, center: this.center.toArray() };
    }
    fromJSON(t2) {
      return this.radius = t2.radius, this.center.fromArray(t2.center), this;
    }
  };
  var Nn = 0;
  var Vn = new Qi();
  var Ln = new Ar();
  var Fn = new Ti();
  var Dn = new Qr();
  var Un = new Qr();
  var jn = new Ti();
  var Wn = class _Wn extends di {
    constructor() {
      super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Nn++ }), this.uuid = fi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {}, this._transformed = false;
    }
    getIndex() {
      return this.index;
    }
    setIndex(t2) {
      return Array.isArray(t2) ? this.index = new ((function(t3) {
        for (let e2 = t3.length - 1; e2 >= 0; --e2) if (t3[e2] >= 65535) return true;
        return false;
      })(t2) ? In : zn)(t2, 1) : this.index = t2, this;
    }
    setIndirect(t2, e2 = 0) {
      return this.indirect = t2, this.indirectOffset = e2, this;
    }
    getIndirect() {
      return this.indirect;
    }
    getAttribute(t2) {
      return this.attributes[t2];
    }
    setAttribute(t2, e2) {
      return this.attributes[t2] = e2, this;
    }
    deleteAttribute(t2) {
      return delete this.attributes[t2], this;
    }
    hasAttribute(t2) {
      return void 0 !== this.attributes[t2];
    }
    addGroup(t2, e2, s2 = 0) {
      this.groups.push({ start: t2, count: e2, materialIndex: s2 });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t2, e2) {
      this.drawRange.start = t2, this.drawRange.count = e2;
    }
    applyMatrix4(t2) {
      const e2 = this.attributes.position;
      void 0 !== e2 && (e2.applyMatrix4(t2), e2.needsUpdate = true);
      const s2 = this.attributes.normal;
      if (void 0 !== s2) {
        const e3 = new Ii().getNormalMatrix(t2);
        s2.applyNormalMatrix(e3), s2.needsUpdate = true;
      }
      const i2 = this.attributes.tangent;
      return void 0 !== i2 && (i2.transformDirection(t2), i2.needsUpdate = true), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this._transformed = true, this;
    }
    applyQuaternion(t2) {
      return Vn.makeRotationFromQuaternion(t2), this.applyMatrix4(Vn), this;
    }
    rotateX(t2) {
      return Vn.makeRotationX(t2), this.applyMatrix4(Vn), this;
    }
    rotateY(t2) {
      return Vn.makeRotationY(t2), this.applyMatrix4(Vn), this;
    }
    rotateZ(t2) {
      return Vn.makeRotationZ(t2), this.applyMatrix4(Vn), this;
    }
    translate(t2, e2, s2) {
      return Vn.makeTranslation(t2, e2, s2), this.applyMatrix4(Vn), this;
    }
    scale(t2, e2, s2) {
      return Vn.makeScale(t2, e2, s2), this.applyMatrix4(Vn), this;
    }
    lookAt(t2) {
      return Ln.lookAt(t2), Ln.updateMatrix(), this.applyMatrix4(Ln.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(Fn).negate(), this.translate(Fn.x, Fn.y, Fn.z), this;
    }
    setFromPoints(t2) {
      const e2 = this.getAttribute("position");
      if (void 0 === e2) {
        const e3 = [];
        for (let s2 = 0, i2 = t2.length; s2 < i2; s2++) {
          const i3 = t2[s2];
          e3.push(i3.x, i3.y, i3.z || 0);
        }
        this.setAttribute("position", new kn(e3, 3));
      } else {
        const s2 = Math.min(t2.length, e2.count);
        for (let i2 = 0; i2 < s2; i2++) {
          const s3 = t2[i2];
          e2.setXYZ(i2, s3.x, s3.y, s3.z || 0);
        }
        t2.length > e2.count && ai("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e2.needsUpdate = true;
      }
      return this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new Qr());
      const t2 = this.attributes.position, e2 = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return oi("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), void this.boundingBox.set(new Ti(-1 / 0, -1 / 0, -1 / 0), new Ti(1 / 0, 1 / 0, 1 / 0));
      if (void 0 !== t2) {
        if (this.boundingBox.setFromBufferAttribute(t2), e2) for (let t3 = 0, s2 = e2.length; t3 < s2; t3++) {
          const s3 = e2[t3];
          Dn.setFromBufferAttribute(s3), this.morphTargetsRelative ? (jn.addVectors(this.boundingBox.min, Dn.min), this.boundingBox.expandByPoint(jn), jn.addVectors(this.boundingBox.max, Dn.max), this.boundingBox.expandByPoint(jn)) : (this.boundingBox.expandByPoint(Dn.min), this.boundingBox.expandByPoint(Dn.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && oi('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new En());
      const t2 = this.attributes.position, e2 = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return oi("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), void this.boundingSphere.set(new Ti(), 1 / 0);
      if (t2) {
        const s2 = this.boundingSphere.center;
        if (Dn.setFromBufferAttribute(t2), e2) for (let t3 = 0, s3 = e2.length; t3 < s3; t3++) {
          const s4 = e2[t3];
          Un.setFromBufferAttribute(s4), this.morphTargetsRelative ? (jn.addVectors(Dn.min, Un.min), Dn.expandByPoint(jn), jn.addVectors(Dn.max, Un.max), Dn.expandByPoint(jn)) : (Dn.expandByPoint(Un.min), Dn.expandByPoint(Un.max));
        }
        Dn.getCenter(s2);
        let i2 = 0;
        for (let e3 = 0, r2 = t2.count; e3 < r2; e3++) jn.fromBufferAttribute(t2, e3), i2 = Math.max(i2, s2.distanceToSquared(jn));
        if (e2) for (let r2 = 0, n2 = e2.length; r2 < n2; r2++) {
          const n3 = e2[r2], a2 = this.morphTargetsRelative;
          for (let e3 = 0, r3 = n3.count; e3 < r3; e3++) jn.fromBufferAttribute(n3, e3), a2 && (Fn.fromBufferAttribute(t2, e3), jn.add(Fn)), i2 = Math.max(i2, s2.distanceToSquared(jn));
        }
        this.boundingSphere.radius = Math.sqrt(i2), isNaN(this.boundingSphere.radius) && oi('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      const t2 = this.index, e2 = this.attributes;
      if (null === t2 || void 0 === e2.position || void 0 === e2.normal || void 0 === e2.uv) return void oi("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      const s2 = e2.position, i2 = e2.normal, r2 = e2.uv;
      let n2 = this.getAttribute("tangent");
      void 0 !== n2 && n2.count === s2.count || (n2 = new Mn(new Float32Array(4 * s2.count), 4), this.setAttribute("tangent", n2));
      const a2 = [], o2 = [];
      for (let t3 = 0; t3 < s2.count; t3++) a2[t3] = new Ti(), o2[t3] = new Ti();
      const h2 = new Ti(), l2 = new Ti(), c2 = new Ti(), u2 = new _i(), d2 = new _i(), p2 = new _i(), m2 = new Ti(), y2 = new Ti();
      function g2(t3, e3, i3) {
        h2.fromBufferAttribute(s2, t3), l2.fromBufferAttribute(s2, e3), c2.fromBufferAttribute(s2, i3), u2.fromBufferAttribute(r2, t3), d2.fromBufferAttribute(r2, e3), p2.fromBufferAttribute(r2, i3), l2.sub(h2), c2.sub(h2), d2.sub(u2), p2.sub(u2);
        const n3 = 1 / (d2.x * p2.y - p2.x * d2.y);
        isFinite(n3) && (m2.copy(l2).multiplyScalar(p2.y).addScaledVector(c2, -d2.y).multiplyScalar(n3), y2.copy(c2).multiplyScalar(d2.x).addScaledVector(l2, -p2.x).multiplyScalar(n3), a2[t3].add(m2), a2[e3].add(m2), a2[i3].add(m2), o2[t3].add(y2), o2[e3].add(y2), o2[i3].add(y2));
      }
      let f2 = this.groups;
      0 === f2.length && (f2 = [{ start: 0, count: t2.count }]);
      for (let e3 = 0, s3 = f2.length; e3 < s3; ++e3) {
        const s4 = f2[e3], i3 = s4.start;
        for (let e4 = i3, r3 = i3 + s4.count; e4 < r3; e4 += 3) g2(t2.getX(e4 + 0), t2.getX(e4 + 1), t2.getX(e4 + 2));
      }
      const x2 = new Ti(), b2 = new Ti(), v2 = new Ti(), w2 = new Ti();
      function M2(t3) {
        v2.fromBufferAttribute(i2, t3), w2.copy(v2);
        const e3 = a2[t3];
        x2.copy(e3), x2.sub(v2.multiplyScalar(v2.dot(e3))).normalize(), b2.crossVectors(w2, e3);
        const s3 = b2.dot(o2[t3]) < 0 ? -1 : 1;
        n2.setXYZW(t3, x2.x, x2.y, x2.z, s3);
      }
      for (let e3 = 0, s3 = f2.length; e3 < s3; ++e3) {
        const s4 = f2[e3], i3 = s4.start;
        for (let e4 = i3, r3 = i3 + s4.count; e4 < r3; e4 += 3) M2(t2.getX(e4 + 0)), M2(t2.getX(e4 + 1)), M2(t2.getX(e4 + 2));
      }
      this._transformed = true;
    }
    computeVertexNormals() {
      const t2 = this.index, e2 = this.getAttribute("position");
      if (void 0 !== e2) {
        let s2 = this.getAttribute("normal");
        if (void 0 === s2 || s2.count !== e2.count) s2 = new Mn(new Float32Array(3 * e2.count), 3), this.setAttribute("normal", s2);
        else for (let t3 = 0, e3 = s2.count; t3 < e3; t3++) s2.setXYZ(t3, 0, 0, 0);
        const i2 = new Ti(), r2 = new Ti(), n2 = new Ti(), a2 = new Ti(), o2 = new Ti(), h2 = new Ti(), l2 = new Ti(), c2 = new Ti();
        if (t2) for (let u2 = 0, d2 = t2.count; u2 < d2; u2 += 3) {
          const d3 = t2.getX(u2 + 0), p2 = t2.getX(u2 + 1), m2 = t2.getX(u2 + 2);
          i2.fromBufferAttribute(e2, d3), r2.fromBufferAttribute(e2, p2), n2.fromBufferAttribute(e2, m2), l2.subVectors(n2, r2), c2.subVectors(i2, r2), l2.cross(c2), a2.fromBufferAttribute(s2, d3), o2.fromBufferAttribute(s2, p2), h2.fromBufferAttribute(s2, m2), a2.add(l2), o2.add(l2), h2.add(l2), s2.setXYZ(d3, a2.x, a2.y, a2.z), s2.setXYZ(p2, o2.x, o2.y, o2.z), s2.setXYZ(m2, h2.x, h2.y, h2.z);
        }
        else for (let t3 = 0, a3 = e2.count; t3 < a3; t3 += 3) i2.fromBufferAttribute(e2, t3 + 0), r2.fromBufferAttribute(e2, t3 + 1), n2.fromBufferAttribute(e2, t3 + 2), l2.subVectors(n2, r2), c2.subVectors(i2, r2), l2.cross(c2), s2.setXYZ(t3 + 0, l2.x, l2.y, l2.z), s2.setXYZ(t3 + 1, l2.x, l2.y, l2.z), s2.setXYZ(t3 + 2, l2.x, l2.y, l2.z);
        this.normalizeNormals(), s2.needsUpdate = true;
      }
    }
    normalizeNormals() {
      const t2 = this.attributes.normal;
      for (let e2 = 0, s2 = t2.count; e2 < s2; e2++) jn.fromBufferAttribute(t2, e2), jn.normalize(), t2.setXYZ(e2, jn.x, jn.y, jn.z);
    }
    toNonIndexed() {
      function t2(t3, e3) {
        const s3 = t3.array, i3 = t3.itemSize, r3 = t3.normalized, n3 = new s3.constructor(e3.length * i3);
        let a2 = 0, o2 = 0;
        for (let r4 = 0, h2 = e3.length; r4 < h2; r4++) {
          a2 = t3.isInterleavedBufferAttribute ? e3[r4] * t3.data.stride + t3.offset : e3[r4] * i3;
          for (let t4 = 0; t4 < i3; t4++) n3[o2++] = s3[a2++];
        }
        return new Mn(n3, i3, r3);
      }
      if (null === this.index) return ai("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const e2 = new _Wn(), s2 = this.index.array, i2 = this.attributes;
      for (const r3 in i2) {
        const n3 = t2(i2[r3], s2);
        e2.setAttribute(r3, n3);
      }
      const r2 = this.morphAttributes;
      for (const i3 in r2) {
        const n3 = [], a2 = r2[i3];
        for (let e3 = 0, i4 = a2.length; e3 < i4; e3++) {
          const i5 = t2(a2[e3], s2);
          n3.push(i5);
        }
        e2.morphAttributes[i3] = n3;
      }
      e2.morphTargetsRelative = this.morphTargetsRelative;
      const n2 = this.groups;
      for (let t3 = 0, s3 = n2.length; t3 < s3; t3++) {
        const s4 = n2[t3];
        e2.addGroup(s4.start, s4.count, s4.materialIndex);
      }
      return e2;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
      if (t2.uuid = this.uuid, t2.type = void 0 !== this.parameters && true === this._transformed ? "BufferGeometry" : this.type, "" !== this.name && (t2.name = this.name), Object.keys(this.userData).length > 0 && (t2.userData = this.userData), void 0 !== this.parameters && true !== this._transformed) {
        const e3 = this.parameters;
        for (const s3 in e3) void 0 !== e3[s3] && (t2[s3] = e3[s3]);
        return t2;
      }
      t2.data = { attributes: {} };
      const e2 = this.index;
      null !== e2 && (t2.data.index = { type: e2.array.constructor.name, array: Array.prototype.slice.call(e2.array) });
      const s2 = this.attributes;
      for (const e3 in s2) {
        const i3 = s2[e3];
        t2.data.attributes[e3] = i3.toJSON(t2.data);
      }
      const i2 = {};
      let r2 = false;
      for (const e3 in this.morphAttributes) {
        const s3 = this.morphAttributes[e3], n3 = [];
        for (let e4 = 0, i3 = s3.length; e4 < i3; e4++) {
          const i4 = s3[e4];
          n3.push(i4.toJSON(t2.data));
        }
        n3.length > 0 && (i2[e3] = n3, r2 = true);
      }
      r2 && (t2.data.morphAttributes = i2, t2.data.morphTargetsRelative = this.morphTargetsRelative);
      const n2 = this.groups;
      n2.length > 0 && (t2.data.groups = JSON.parse(JSON.stringify(n2)));
      const a2 = this.boundingSphere;
      return null !== a2 && (t2.data.boundingSphere = a2.toJSON()), t2;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      const e2 = {};
      this.name = t2.name;
      const s2 = t2.index;
      null !== s2 && this.setIndex(s2.clone());
      const i2 = t2.attributes;
      for (const t3 in i2) {
        const s3 = i2[t3];
        this.setAttribute(t3, s3.clone(e2));
      }
      const r2 = t2.morphAttributes;
      for (const t3 in r2) {
        const s3 = [], i3 = r2[t3];
        for (let t4 = 0, r3 = i3.length; t4 < r3; t4++) s3.push(i3[t4].clone(e2));
        this.morphAttributes[t3] = s3;
      }
      this.morphTargetsRelative = t2.morphTargetsRelative;
      const n2 = t2.groups;
      for (let t3 = 0, e3 = n2.length; t3 < e3; t3++) {
        const e4 = n2[t3];
        this.addGroup(e4.start, e4.count, e4.materialIndex);
      }
      const a2 = t2.boundingBox;
      null !== a2 && (this.boundingBox = a2.clone());
      const o2 = t2.boundingSphere;
      return null !== o2 && (this.boundingSphere = o2.clone()), this.drawRange.start = t2.drawRange.start, this.drawRange.count = t2.drawRange.count, this.userData = t2.userData, this._transformed = t2._transformed, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var Jn = class {
    constructor(t2, e2) {
      this.isInterleavedBuffer = true, this.array = t2, this.stride = e2, this.count = void 0 !== t2 ? t2.length / e2 : 0, this.usage = Os, this.updateRanges = [], this.version = 0, this.uuid = fi();
    }
    onUploadCallback() {
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    setUsage(t2) {
      return this.usage = t2, this;
    }
    addUpdateRange(t2, e2) {
      this.updateRanges.push({ start: t2, count: e2 });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t2) {
      return this.array = new t2.array.constructor(t2.array), this.count = t2.count, this.stride = t2.stride, this.usage = t2.usage, this;
    }
    copyAt(t2, e2, s2) {
      t2 *= this.stride, s2 *= e2.stride;
      for (let i2 = 0, r2 = this.stride; i2 < r2; i2++) this.array[t2 + i2] = e2.array[s2 + i2];
      return this;
    }
    set(t2, e2 = 0) {
      return this.array.set(t2, e2), this;
    }
    clone(t2) {
      void 0 === t2.arrayBuffers && (t2.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = fi()), void 0 === t2.arrayBuffers[this.array.buffer._uuid] && (t2.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
      const e2 = new this.array.constructor(t2.arrayBuffers[this.array.buffer._uuid]), s2 = new this.constructor(e2, this.stride);
      return s2.setUsage(this.usage), s2;
    }
    onUpload(t2) {
      return this.onUploadCallback = t2, this;
    }
    toJSON(t2) {
      return void 0 === t2.arrayBuffers && (t2.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = fi()), void 0 === t2.arrayBuffers[this.array.buffer._uuid] && (t2.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
    }
  };
  var qn = new Ti();
  var Hn = class _Hn {
    constructor(t2, e2, s2, i2 = false) {
      this.isInterleavedBufferAttribute = true, this.name = "", this.data = t2, this.itemSize = e2, this.offset = s2, this.normalized = i2;
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(t2) {
      this.data.needsUpdate = t2;
    }
    applyMatrix4(t2) {
      for (let e2 = 0, s2 = this.data.count; e2 < s2; e2++) qn.fromBufferAttribute(this, e2), qn.applyMatrix4(t2), this.setXYZ(e2, qn.x, qn.y, qn.z);
      return this;
    }
    applyNormalMatrix(t2) {
      for (let e2 = 0, s2 = this.count; e2 < s2; e2++) qn.fromBufferAttribute(this, e2), qn.applyNormalMatrix(t2), this.setXYZ(e2, qn.x, qn.y, qn.z);
      return this;
    }
    transformDirection(t2) {
      for (let e2 = 0, s2 = this.count; e2 < s2; e2++) qn.fromBufferAttribute(this, e2), qn.transformDirection(t2), this.setXYZ(e2, qn.x, qn.y, qn.z);
      return this;
    }
    getComponent(t2, e2) {
      let s2 = this.array[t2 * this.data.stride + this.offset + e2];
      return this.normalized && (s2 = wi(s2, this.array)), s2;
    }
    setComponent(t2, e2, s2) {
      return this.normalized && (s2 = Mi(s2, this.array)), this.data.array[t2 * this.data.stride + this.offset + e2] = s2, this;
    }
    setX(t2, e2) {
      return this.normalized && (e2 = Mi(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset] = e2, this;
    }
    setY(t2, e2) {
      return this.normalized && (e2 = Mi(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset + 1] = e2, this;
    }
    setZ(t2, e2) {
      return this.normalized && (e2 = Mi(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset + 2] = e2, this;
    }
    setW(t2, e2) {
      return this.normalized && (e2 = Mi(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset + 3] = e2, this;
    }
    getX(t2) {
      let e2 = this.data.array[t2 * this.data.stride + this.offset];
      return this.normalized && (e2 = wi(e2, this.array)), e2;
    }
    getY(t2) {
      let e2 = this.data.array[t2 * this.data.stride + this.offset + 1];
      return this.normalized && (e2 = wi(e2, this.array)), e2;
    }
    getZ(t2) {
      let e2 = this.data.array[t2 * this.data.stride + this.offset + 2];
      return this.normalized && (e2 = wi(e2, this.array)), e2;
    }
    getW(t2) {
      let e2 = this.data.array[t2 * this.data.stride + this.offset + 3];
      return this.normalized && (e2 = wi(e2, this.array)), e2;
    }
    setXY(t2, e2, s2) {
      return t2 = t2 * this.data.stride + this.offset, this.normalized && (e2 = Mi(e2, this.array), s2 = Mi(s2, this.array)), this.data.array[t2 + 0] = e2, this.data.array[t2 + 1] = s2, this;
    }
    setXYZ(t2, e2, s2, i2) {
      return t2 = t2 * this.data.stride + this.offset, this.normalized && (e2 = Mi(e2, this.array), s2 = Mi(s2, this.array), i2 = Mi(i2, this.array)), this.data.array[t2 + 0] = e2, this.data.array[t2 + 1] = s2, this.data.array[t2 + 2] = i2, this;
    }
    setXYZW(t2, e2, s2, i2, r2) {
      return t2 = t2 * this.data.stride + this.offset, this.normalized && (e2 = Mi(e2, this.array), s2 = Mi(s2, this.array), i2 = Mi(i2, this.array), r2 = Mi(r2, this.array)), this.data.array[t2 + 0] = e2, this.data.array[t2 + 1] = s2, this.data.array[t2 + 2] = i2, this.data.array[t2 + 3] = r2, this;
    }
    clone(t2) {
      if (void 0 === t2) {
        ri("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
        const t3 = [];
        for (let e2 = 0; e2 < this.count; e2++) {
          const s2 = e2 * this.data.stride + this.offset;
          for (let e3 = 0; e3 < this.itemSize; e3++) t3.push(this.data.array[s2 + e3]);
        }
        return new Mn(new this.array.constructor(t3), this.itemSize, this.normalized);
      }
      return void 0 === t2.interleavedBuffers && (t2.interleavedBuffers = {}), void 0 === t2.interleavedBuffers[this.data.uuid] && (t2.interleavedBuffers[this.data.uuid] = this.data.clone(t2)), new _Hn(t2.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    }
    toJSON(t2) {
      if (void 0 === t2) {
        ri("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
        const t3 = [];
        for (let e2 = 0; e2 < this.count; e2++) {
          const s2 = e2 * this.data.stride + this.offset;
          for (let e3 = 0; e3 < this.itemSize; e3++) t3.push(this.data.array[s2 + e3]);
        }
        return { itemSize: this.itemSize, type: this.array.constructor.name, array: t3, normalized: this.normalized };
      }
      return void 0 === t2.interleavedBuffers && (t2.interleavedBuffers = {}), void 0 === t2.interleavedBuffers[this.data.uuid] && (t2.interleavedBuffers[this.data.uuid] = this.data.toJSON(t2)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
    }
  };
  var Xn;
  var Yn = 0;
  var Zn = class extends di {
    constructor() {
      super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Yn++ }), this.uuid = fi(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Pr(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ls, this.stencilZFail = ls, this.stencilZPass = ls, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t2) {
      this._alphaTest > 0 != t2 > 0 && this.version++, this._alphaTest = t2;
    }
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t2) {
      if (void 0 !== t2) for (const e2 in t2) {
        const s2 = t2[e2];
        if (void 0 === s2) {
          ai(`Material: parameter '${e2}' has value of undefined.`);
          continue;
        }
        const i2 = this[e2];
        void 0 !== i2 ? i2 && i2.isColor ? i2.set(s2) : i2 && i2.isVector2 && s2 && s2.isVector2 || i2 && i2.isEuler && s2 && s2.isEuler || i2 && i2.isVector3 && s2 && s2.isVector3 ? i2.copy(s2) : this[e2] = s2 : ai(`Material: '${e2}' is not a property of THREE.${this.type}.`);
      }
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2;
      e2 && (t2 = { textures: {}, images: {} });
      const s2 = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
      function i2(t3) {
        const e3 = [];
        for (const s3 in t3) {
          const i3 = t3[s3];
          delete i3.metadata, e3.push(i3);
        }
        return e3;
      }
      if (s2.uuid = this.uuid, s2.type = this.type, "" !== this.name && (s2.name = this.name), this.color && this.color.isColor && (s2.color = this.color.getHex()), void 0 !== this.roughness && (s2.roughness = this.roughness), void 0 !== this.metalness && (s2.metalness = this.metalness), void 0 !== this.sheen && (s2.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (s2.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (s2.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (s2.emissive = this.emissive.getHex()), void 0 !== this.emissiveIntensity && 1 !== this.emissiveIntensity && (s2.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (s2.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (s2.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (s2.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (s2.shininess = this.shininess), void 0 !== this.clearcoat && (s2.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (s2.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (s2.clearcoatMap = this.clearcoatMap.toJSON(t2).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (s2.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t2).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (s2.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t2).uuid, s2.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (s2.sheenColorMap = this.sheenColorMap.toJSON(t2).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (s2.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t2).uuid), void 0 !== this.dispersion && (s2.dispersion = this.dispersion), void 0 !== this.iridescence && (s2.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (s2.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (s2.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (s2.iridescenceMap = this.iridescenceMap.toJSON(t2).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (s2.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t2).uuid), void 0 !== this.anisotropy && (s2.anisotropy = this.anisotropy), void 0 !== this.anisotropyRotation && (s2.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (s2.anisotropyMap = this.anisotropyMap.toJSON(t2).uuid), this.map && this.map.isTexture && (s2.map = this.map.toJSON(t2).uuid), this.matcap && this.matcap.isTexture && (s2.matcap = this.matcap.toJSON(t2).uuid), this.alphaMap && this.alphaMap.isTexture && (s2.alphaMap = this.alphaMap.toJSON(t2).uuid), this.lightMap && this.lightMap.isTexture && (s2.lightMap = this.lightMap.toJSON(t2).uuid, s2.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (s2.aoMap = this.aoMap.toJSON(t2).uuid, s2.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (s2.bumpMap = this.bumpMap.toJSON(t2).uuid, s2.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (s2.normalMap = this.normalMap.toJSON(t2).uuid, s2.normalMapType = this.normalMapType, s2.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (s2.displacementMap = this.displacementMap.toJSON(t2).uuid, s2.displacementScale = this.displacementScale, s2.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (s2.roughnessMap = this.roughnessMap.toJSON(t2).uuid), this.metalnessMap && this.metalnessMap.isTexture && (s2.metalnessMap = this.metalnessMap.toJSON(t2).uuid), this.emissiveMap && this.emissiveMap.isTexture && (s2.emissiveMap = this.emissiveMap.toJSON(t2).uuid), this.specularMap && this.specularMap.isTexture && (s2.specularMap = this.specularMap.toJSON(t2).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (s2.specularIntensityMap = this.specularIntensityMap.toJSON(t2).uuid), this.specularColorMap && this.specularColorMap.isTexture && (s2.specularColorMap = this.specularColorMap.toJSON(t2).uuid), this.envMap && this.envMap.isTexture && (s2.envMap = this.envMap.toJSON(t2).uuid, void 0 !== this.combine && (s2.combine = this.combine)), void 0 !== this.envMapRotation && (s2.envMapRotation = this.envMapRotation.toArray()), void 0 !== this.envMapIntensity && (s2.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (s2.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (s2.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (s2.gradientMap = this.gradientMap.toJSON(t2).uuid), void 0 !== this.transmission && (s2.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (s2.transmissionMap = this.transmissionMap.toJSON(t2).uuid), void 0 !== this.thickness && (s2.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (s2.thicknessMap = this.thicknessMap.toJSON(t2).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (s2.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (s2.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (s2.size = this.size), null !== this.shadowSide && (s2.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (s2.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (s2.blending = this.blending), 0 !== this.side && (s2.side = this.side), true === this.vertexColors && (s2.vertexColors = true), this.opacity < 1 && (s2.opacity = this.opacity), true === this.transparent && (s2.transparent = true), 204 !== this.blendSrc && (s2.blendSrc = this.blendSrc), 205 !== this.blendDst && (s2.blendDst = this.blendDst), 100 !== this.blendEquation && (s2.blendEquation = this.blendEquation), null !== this.blendSrcAlpha && (s2.blendSrcAlpha = this.blendSrcAlpha), null !== this.blendDstAlpha && (s2.blendDstAlpha = this.blendDstAlpha), null !== this.blendEquationAlpha && (s2.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (s2.blendColor = this.blendColor.getHex()), 0 !== this.blendAlpha && (s2.blendAlpha = this.blendAlpha), 3 !== this.depthFunc && (s2.depthFunc = this.depthFunc), false === this.depthTest && (s2.depthTest = this.depthTest), false === this.depthWrite && (s2.depthWrite = this.depthWrite), false === this.colorWrite && (s2.colorWrite = this.colorWrite), 255 !== this.stencilWriteMask && (s2.stencilWriteMask = this.stencilWriteMask), 519 !== this.stencilFunc && (s2.stencilFunc = this.stencilFunc), 0 !== this.stencilRef && (s2.stencilRef = this.stencilRef), 255 !== this.stencilFuncMask && (s2.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== ls && (s2.stencilFail = this.stencilFail), this.stencilZFail !== ls && (s2.stencilZFail = this.stencilZFail), this.stencilZPass !== ls && (s2.stencilZPass = this.stencilZPass), true === this.stencilWrite && (s2.stencilWrite = this.stencilWrite), void 0 !== this.rotation && 0 !== this.rotation && (s2.rotation = this.rotation), true === this.polygonOffset && (s2.polygonOffset = true), 0 !== this.polygonOffsetFactor && (s2.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (s2.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (s2.linewidth = this.linewidth), void 0 !== this.dashSize && (s2.dashSize = this.dashSize), void 0 !== this.gapSize && (s2.gapSize = this.gapSize), void 0 !== this.scale && (s2.scale = this.scale), true === this.dithering && (s2.dithering = true), this.alphaTest > 0 && (s2.alphaTest = this.alphaTest), true === this.alphaHash && (s2.alphaHash = true), true === this.alphaToCoverage && (s2.alphaToCoverage = true), true === this.premultipliedAlpha && (s2.premultipliedAlpha = true), true === this.forceSinglePass && (s2.forceSinglePass = true), false === this.allowOverride && (s2.allowOverride = false), true === this.wireframe && (s2.wireframe = true), this.wireframeLinewidth > 1 && (s2.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (s2.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (s2.wireframeLinejoin = this.wireframeLinejoin), true === this.flatShading && (s2.flatShading = true), false === this.visible && (s2.visible = false), false === this.toneMapped && (s2.toneMapped = false), false === this.fog && (s2.fog = false), Object.keys(this.userData).length > 0 && (s2.userData = this.userData), e2) {
        const e3 = i2(t2.textures), r2 = i2(t2.images);
        e3.length > 0 && (s2.textures = e3), r2.length > 0 && (s2.images = r2);
      }
      return s2;
    }
    fromJSON(t2, e2) {
      if (void 0 !== t2.uuid && (this.uuid = t2.uuid), void 0 !== t2.name && (this.name = t2.name), void 0 !== t2.color && void 0 !== this.color && this.color.setHex(t2.color), void 0 !== t2.roughness && (this.roughness = t2.roughness), void 0 !== t2.metalness && (this.metalness = t2.metalness), void 0 !== t2.sheen && (this.sheen = t2.sheen), void 0 !== t2.sheenColor && (this.sheenColor = new Pr().setHex(t2.sheenColor)), void 0 !== t2.sheenRoughness && (this.sheenRoughness = t2.sheenRoughness), void 0 !== t2.emissive && void 0 !== this.emissive && this.emissive.setHex(t2.emissive), void 0 !== t2.specular && void 0 !== this.specular && this.specular.setHex(t2.specular), void 0 !== t2.specularIntensity && (this.specularIntensity = t2.specularIntensity), void 0 !== t2.specularColor && void 0 !== this.specularColor && this.specularColor.setHex(t2.specularColor), void 0 !== t2.shininess && (this.shininess = t2.shininess), void 0 !== t2.clearcoat && (this.clearcoat = t2.clearcoat), void 0 !== t2.clearcoatRoughness && (this.clearcoatRoughness = t2.clearcoatRoughness), void 0 !== t2.dispersion && (this.dispersion = t2.dispersion), void 0 !== t2.iridescence && (this.iridescence = t2.iridescence), void 0 !== t2.iridescenceIOR && (this.iridescenceIOR = t2.iridescenceIOR), void 0 !== t2.iridescenceThicknessRange && (this.iridescenceThicknessRange = t2.iridescenceThicknessRange), void 0 !== t2.transmission && (this.transmission = t2.transmission), void 0 !== t2.thickness && (this.thickness = t2.thickness), void 0 !== t2.attenuationDistance && (this.attenuationDistance = t2.attenuationDistance), void 0 !== t2.attenuationColor && void 0 !== this.attenuationColor && this.attenuationColor.setHex(t2.attenuationColor), void 0 !== t2.anisotropy && (this.anisotropy = t2.anisotropy), void 0 !== t2.anisotropyRotation && (this.anisotropyRotation = t2.anisotropyRotation), void 0 !== t2.fog && (this.fog = t2.fog), void 0 !== t2.flatShading && (this.flatShading = t2.flatShading), void 0 !== t2.blending && (this.blending = t2.blending), void 0 !== t2.combine && (this.combine = t2.combine), void 0 !== t2.side && (this.side = t2.side), void 0 !== t2.shadowSide && (this.shadowSide = t2.shadowSide), void 0 !== t2.opacity && (this.opacity = t2.opacity), void 0 !== t2.transparent && (this.transparent = t2.transparent), void 0 !== t2.alphaTest && (this.alphaTest = t2.alphaTest), void 0 !== t2.alphaHash && (this.alphaHash = t2.alphaHash), void 0 !== t2.depthFunc && (this.depthFunc = t2.depthFunc), void 0 !== t2.depthTest && (this.depthTest = t2.depthTest), void 0 !== t2.depthWrite && (this.depthWrite = t2.depthWrite), void 0 !== t2.colorWrite && (this.colorWrite = t2.colorWrite), void 0 !== t2.blendSrc && (this.blendSrc = t2.blendSrc), void 0 !== t2.blendDst && (this.blendDst = t2.blendDst), void 0 !== t2.blendEquation && (this.blendEquation = t2.blendEquation), void 0 !== t2.blendSrcAlpha && (this.blendSrcAlpha = t2.blendSrcAlpha), void 0 !== t2.blendDstAlpha && (this.blendDstAlpha = t2.blendDstAlpha), void 0 !== t2.blendEquationAlpha && (this.blendEquationAlpha = t2.blendEquationAlpha), void 0 !== t2.blendColor && void 0 !== this.blendColor && this.blendColor.setHex(t2.blendColor), void 0 !== t2.blendAlpha && (this.blendAlpha = t2.blendAlpha), void 0 !== t2.stencilWriteMask && (this.stencilWriteMask = t2.stencilWriteMask), void 0 !== t2.stencilFunc && (this.stencilFunc = t2.stencilFunc), void 0 !== t2.stencilRef && (this.stencilRef = t2.stencilRef), void 0 !== t2.stencilFuncMask && (this.stencilFuncMask = t2.stencilFuncMask), void 0 !== t2.stencilFail && (this.stencilFail = t2.stencilFail), void 0 !== t2.stencilZFail && (this.stencilZFail = t2.stencilZFail), void 0 !== t2.stencilZPass && (this.stencilZPass = t2.stencilZPass), void 0 !== t2.stencilWrite && (this.stencilWrite = t2.stencilWrite), void 0 !== t2.wireframe && (this.wireframe = t2.wireframe), void 0 !== t2.wireframeLinewidth && (this.wireframeLinewidth = t2.wireframeLinewidth), void 0 !== t2.wireframeLinecap && (this.wireframeLinecap = t2.wireframeLinecap), void 0 !== t2.wireframeLinejoin && (this.wireframeLinejoin = t2.wireframeLinejoin), void 0 !== t2.rotation && (this.rotation = t2.rotation), void 0 !== t2.linewidth && (this.linewidth = t2.linewidth), void 0 !== t2.dashSize && (this.dashSize = t2.dashSize), void 0 !== t2.gapSize && (this.gapSize = t2.gapSize), void 0 !== t2.scale && (this.scale = t2.scale), void 0 !== t2.polygonOffset && (this.polygonOffset = t2.polygonOffset), void 0 !== t2.polygonOffsetFactor && (this.polygonOffsetFactor = t2.polygonOffsetFactor), void 0 !== t2.polygonOffsetUnits && (this.polygonOffsetUnits = t2.polygonOffsetUnits), void 0 !== t2.dithering && (this.dithering = t2.dithering), void 0 !== t2.alphaToCoverage && (this.alphaToCoverage = t2.alphaToCoverage), void 0 !== t2.premultipliedAlpha && (this.premultipliedAlpha = t2.premultipliedAlpha), void 0 !== t2.forceSinglePass && (this.forceSinglePass = t2.forceSinglePass), void 0 !== t2.allowOverride && (this.allowOverride = t2.allowOverride), void 0 !== t2.visible && (this.visible = t2.visible), void 0 !== t2.toneMapped && (this.toneMapped = t2.toneMapped), void 0 !== t2.userData && (this.userData = t2.userData), void 0 !== t2.vertexColors && ("number" == typeof t2.vertexColors ? this.vertexColors = t2.vertexColors > 0 : this.vertexColors = t2.vertexColors), void 0 !== t2.size && (this.size = t2.size), void 0 !== t2.sizeAttenuation && (this.sizeAttenuation = t2.sizeAttenuation), void 0 !== t2.map && (this.map = e2[t2.map] || null), void 0 !== t2.matcap && (this.matcap = e2[t2.matcap] || null), void 0 !== t2.alphaMap && (this.alphaMap = e2[t2.alphaMap] || null), void 0 !== t2.bumpMap && (this.bumpMap = e2[t2.bumpMap] || null), void 0 !== t2.bumpScale && (this.bumpScale = t2.bumpScale), void 0 !== t2.normalMap && (this.normalMap = e2[t2.normalMap] || null), void 0 !== t2.normalMapType && (this.normalMapType = t2.normalMapType), void 0 !== t2.normalScale) {
        let e3 = t2.normalScale;
        false === Array.isArray(e3) && (e3 = [e3, e3]), this.normalScale = new _i().fromArray(e3);
      }
      return void 0 !== t2.displacementMap && (this.displacementMap = e2[t2.displacementMap] || null), void 0 !== t2.displacementScale && (this.displacementScale = t2.displacementScale), void 0 !== t2.displacementBias && (this.displacementBias = t2.displacementBias), void 0 !== t2.roughnessMap && (this.roughnessMap = e2[t2.roughnessMap] || null), void 0 !== t2.metalnessMap && (this.metalnessMap = e2[t2.metalnessMap] || null), void 0 !== t2.emissiveMap && (this.emissiveMap = e2[t2.emissiveMap] || null), void 0 !== t2.emissiveIntensity && (this.emissiveIntensity = t2.emissiveIntensity), void 0 !== t2.specularMap && (this.specularMap = e2[t2.specularMap] || null), void 0 !== t2.specularIntensityMap && (this.specularIntensityMap = e2[t2.specularIntensityMap] || null), void 0 !== t2.specularColorMap && (this.specularColorMap = e2[t2.specularColorMap] || null), void 0 !== t2.envMap && (this.envMap = e2[t2.envMap] || null), void 0 !== t2.envMapRotation && this.envMapRotation.fromArray(t2.envMapRotation), void 0 !== t2.envMapIntensity && (this.envMapIntensity = t2.envMapIntensity), void 0 !== t2.reflectivity && (this.reflectivity = t2.reflectivity), void 0 !== t2.refractionRatio && (this.refractionRatio = t2.refractionRatio), void 0 !== t2.lightMap && (this.lightMap = e2[t2.lightMap] || null), void 0 !== t2.lightMapIntensity && (this.lightMapIntensity = t2.lightMapIntensity), void 0 !== t2.aoMap && (this.aoMap = e2[t2.aoMap] || null), void 0 !== t2.aoMapIntensity && (this.aoMapIntensity = t2.aoMapIntensity), void 0 !== t2.gradientMap && (this.gradientMap = e2[t2.gradientMap] || null), void 0 !== t2.clearcoatMap && (this.clearcoatMap = e2[t2.clearcoatMap] || null), void 0 !== t2.clearcoatRoughnessMap && (this.clearcoatRoughnessMap = e2[t2.clearcoatRoughnessMap] || null), void 0 !== t2.clearcoatNormalMap && (this.clearcoatNormalMap = e2[t2.clearcoatNormalMap] || null), void 0 !== t2.clearcoatNormalScale && (this.clearcoatNormalScale = new _i().fromArray(t2.clearcoatNormalScale)), void 0 !== t2.iridescenceMap && (this.iridescenceMap = e2[t2.iridescenceMap] || null), void 0 !== t2.iridescenceThicknessMap && (this.iridescenceThicknessMap = e2[t2.iridescenceThicknessMap] || null), void 0 !== t2.transmissionMap && (this.transmissionMap = e2[t2.transmissionMap] || null), void 0 !== t2.thicknessMap && (this.thicknessMap = e2[t2.thicknessMap] || null), void 0 !== t2.anisotropyMap && (this.anisotropyMap = e2[t2.anisotropyMap] || null), void 0 !== t2.sheenColorMap && (this.sheenColorMap = e2[t2.sheenColorMap] || null), void 0 !== t2.sheenRoughnessMap && (this.sheenRoughnessMap = e2[t2.sheenRoughnessMap] || null), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.name = t2.name, this.blending = t2.blending, this.side = t2.side, this.vertexColors = t2.vertexColors, this.opacity = t2.opacity, this.transparent = t2.transparent, this.blendSrc = t2.blendSrc, this.blendDst = t2.blendDst, this.blendEquation = t2.blendEquation, this.blendSrcAlpha = t2.blendSrcAlpha, this.blendDstAlpha = t2.blendDstAlpha, this.blendEquationAlpha = t2.blendEquationAlpha, this.blendColor.copy(t2.blendColor), this.blendAlpha = t2.blendAlpha, this.depthFunc = t2.depthFunc, this.depthTest = t2.depthTest, this.depthWrite = t2.depthWrite, this.stencilWriteMask = t2.stencilWriteMask, this.stencilFunc = t2.stencilFunc, this.stencilRef = t2.stencilRef, this.stencilFuncMask = t2.stencilFuncMask, this.stencilFail = t2.stencilFail, this.stencilZFail = t2.stencilZFail, this.stencilZPass = t2.stencilZPass, this.stencilWrite = t2.stencilWrite;
      const e2 = t2.clippingPlanes;
      let s2 = null;
      if (null !== e2) {
        const t3 = e2.length;
        s2 = new Array(t3);
        for (let i2 = 0; i2 !== t3; ++i2) s2[i2] = e2[i2].clone();
      }
      return this.clippingPlanes = s2, this.clipIntersection = t2.clipIntersection, this.clipShadows = t2.clipShadows, this.shadowSide = t2.shadowSide, this.colorWrite = t2.colorWrite, this.precision = t2.precision, this.polygonOffset = t2.polygonOffset, this.polygonOffsetFactor = t2.polygonOffsetFactor, this.polygonOffsetUnits = t2.polygonOffsetUnits, this.dithering = t2.dithering, this.alphaTest = t2.alphaTest, this.alphaHash = t2.alphaHash, this.alphaToCoverage = t2.alphaToCoverage, this.premultipliedAlpha = t2.premultipliedAlpha, this.forceSinglePass = t2.forceSinglePass, this.allowOverride = t2.allowOverride, this.visible = t2.visible, this.toneMapped = t2.toneMapped, this.userData = JSON.parse(JSON.stringify(t2.userData)), this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
  };
  var Gn = class extends Zn {
    constructor(t2) {
      super(), this.isSpriteMaterial = true, this.type = "SpriteMaterial", this.color = new Pr(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = true, this.transparent = true, this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.alphaMap = t2.alphaMap, this.rotation = t2.rotation, this.sizeAttenuation = t2.sizeAttenuation, this.fog = t2.fog, this;
    }
  };
  var $n = new Ti();
  var Qn = new Ti();
  var Kn = new Ti();
  var ta = new _i();
  var ea = new _i();
  var sa = new Qi();
  var ia = new Ti();
  var ra = new Ti();
  var na = new Ti();
  var aa = new _i();
  var oa = new _i();
  var ha = new _i();
  var la = class extends Ar {
    constructor(t2 = new Gn()) {
      if (super(), this.isSprite = true, this.type = "Sprite", void 0 === Xn) {
        Xn = new Wn();
        const t3 = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), e2 = new Jn(t3, 5);
        Xn.setIndex([0, 1, 2, 0, 2, 3]), Xn.setAttribute("position", new Hn(e2, 3, 0, false)), Xn.setAttribute("uv", new Hn(e2, 2, 3, false));
      }
      this.geometry = Xn, this.material = t2, this.center = new _i(0.5, 0.5), this.count = 1;
    }
    raycast(t2, e2) {
      null === t2.camera && oi('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Qn.setFromMatrixScale(this.matrixWorld), sa.copy(t2.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t2.camera.matrixWorldInverse, this.matrixWorld), Kn.setFromMatrixPosition(this.modelViewMatrix), t2.camera.isPerspectiveCamera && false === this.material.sizeAttenuation && Qn.multiplyScalar(-Kn.z);
      const s2 = this.material.rotation;
      let i2, r2;
      0 !== s2 && (r2 = Math.cos(s2), i2 = Math.sin(s2));
      const n2 = this.center;
      ca(ia.set(-0.5, -0.5, 0), Kn, n2, Qn, i2, r2), ca(ra.set(0.5, -0.5, 0), Kn, n2, Qn, i2, r2), ca(na.set(0.5, 0.5, 0), Kn, n2, Qn, i2, r2), aa.set(0, 0), oa.set(1, 0), ha.set(1, 1);
      let a2 = t2.ray.intersectTriangle(ia, ra, na, false, $n);
      if (null === a2 && (ca(ra.set(-0.5, 0.5, 0), Kn, n2, Qn, i2, r2), oa.set(0, 1), a2 = t2.ray.intersectTriangle(ia, na, ra, false, $n), null === a2)) return;
      const o2 = t2.ray.origin.distanceTo($n);
      o2 < t2.near || o2 > t2.far || e2.push({ distance: o2, point: $n.clone(), uv: $r.getInterpolation($n, ia, ra, na, aa, oa, ha, new _i()), face: null, object: this });
    }
    copy(t2, e2) {
      return super.copy(t2, e2), void 0 !== t2.center && this.center.copy(t2.center), this.material = t2.material, this;
    }
  };
  function ca(t2, e2, s2, i2, r2, n2) {
    ta.subVectors(t2, s2).addScalar(0.5).multiply(i2), void 0 !== r2 ? (ea.x = n2 * ta.x - r2 * ta.y, ea.y = r2 * ta.x + n2 * ta.y) : ea.copy(ta), t2.copy(e2), t2.x += ea.x, t2.y += ea.y, t2.applyMatrix4(sa);
  }
  var ua = new Ti();
  var da = new Ti();
  var ma = new Ti();
  var ya = new Ti();
  var ga = new Ti();
  var fa = new Ti();
  var xa = new Ti();
  var ba = new Ti();
  var va = new Ti();
  var wa = class {
    constructor(t2 = new Ti(), e2 = new Ti(0, 0, -1)) {
      this.origin = t2, this.direction = e2;
    }
    set(t2, e2) {
      return this.origin.copy(t2), this.direction.copy(e2), this;
    }
    copy(t2) {
      return this.origin.copy(t2.origin), this.direction.copy(t2.direction), this;
    }
    at(t2, e2) {
      return e2.copy(this.origin).addScaledVector(this.direction, t2);
    }
    lookAt(t2) {
      return this.direction.copy(t2).sub(this.origin).normalize(), this;
    }
    recast(t2) {
      return this.origin.copy(this.at(t2, ma)), this;
    }
    closestPointToPoint(t2, e2) {
      e2.subVectors(t2, this.origin);
      const s2 = e2.dot(this.direction);
      return s2 < 0 ? e2.copy(this.origin) : e2.copy(this.origin).addScaledVector(this.direction, s2);
    }
    distanceToPoint(t2) {
      return Math.sqrt(this.distanceSqToPoint(t2));
    }
    distanceSqToPoint(t2) {
      const e2 = ma.subVectors(t2, this.origin).dot(this.direction);
      return e2 < 0 ? this.origin.distanceToSquared(t2) : (ma.copy(this.origin).addScaledVector(this.direction, e2), ma.distanceToSquared(t2));
    }
    distanceSqToSegment(t2, e2, s2, i2) {
      ya.copy(t2).add(e2).multiplyScalar(0.5), ga.copy(e2).sub(t2).normalize(), fa.copy(this.origin).sub(ya);
      const r2 = 0.5 * t2.distanceTo(e2), n2 = -this.direction.dot(ga), a2 = fa.dot(this.direction), o2 = -fa.dot(ga), h2 = fa.lengthSq(), l2 = Math.abs(1 - n2 * n2);
      let c2, u2, d2, p2;
      if (l2 > 0) if (c2 = n2 * o2 - a2, u2 = n2 * a2 - o2, p2 = r2 * l2, c2 >= 0) if (u2 >= -p2) if (u2 <= p2) {
        const t3 = 1 / l2;
        c2 *= t3, u2 *= t3, d2 = c2 * (c2 + n2 * u2 + 2 * a2) + u2 * (n2 * c2 + u2 + 2 * o2) + h2;
      } else u2 = r2, c2 = Math.max(0, -(n2 * u2 + a2)), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2;
      else u2 = -r2, c2 = Math.max(0, -(n2 * u2 + a2)), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2;
      else u2 <= -p2 ? (c2 = Math.max(0, -(-n2 * r2 + a2)), u2 = c2 > 0 ? -r2 : Math.min(Math.max(-r2, -o2), r2), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2) : u2 <= p2 ? (c2 = 0, u2 = Math.min(Math.max(-r2, -o2), r2), d2 = u2 * (u2 + 2 * o2) + h2) : (c2 = Math.max(0, -(n2 * r2 + a2)), u2 = c2 > 0 ? r2 : Math.min(Math.max(-r2, -o2), r2), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2);
      else u2 = n2 > 0 ? -r2 : r2, c2 = Math.max(0, -(n2 * u2 + a2)), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2;
      return s2 && s2.copy(this.origin).addScaledVector(this.direction, c2), i2 && i2.copy(ya).addScaledVector(ga, u2), d2;
    }
    intersectSphere(t2, e2) {
      ma.subVectors(t2.center, this.origin);
      const s2 = ma.dot(this.direction), i2 = ma.dot(ma) - s2 * s2, r2 = t2.radius * t2.radius;
      if (i2 > r2) return null;
      const n2 = Math.sqrt(r2 - i2), a2 = s2 - n2, o2 = s2 + n2;
      return o2 < 0 ? null : a2 < 0 ? this.at(o2, e2) : this.at(a2, e2);
    }
    intersectsSphere(t2) {
      return !(t2.radius < 0) && this.distanceSqToPoint(t2.center) <= t2.radius * t2.radius;
    }
    distanceToPlane(t2) {
      const e2 = t2.normal.dot(this.direction);
      if (0 === e2) return 0 === t2.distanceToPoint(this.origin) ? 0 : null;
      const s2 = -(this.origin.dot(t2.normal) + t2.constant) / e2;
      return s2 >= 0 ? s2 : null;
    }
    intersectPlane(t2, e2) {
      const s2 = this.distanceToPlane(t2);
      return null === s2 ? null : this.at(s2, e2);
    }
    intersectsPlane(t2) {
      const e2 = t2.distanceToPoint(this.origin);
      if (0 === e2) return true;
      return t2.normal.dot(this.direction) * e2 < 0;
    }
    intersectBox(t2, e2) {
      let s2, i2, r2, n2, a2, o2;
      const h2 = 1 / this.direction.x, l2 = 1 / this.direction.y, c2 = 1 / this.direction.z, u2 = this.origin;
      return h2 >= 0 ? (s2 = (t2.min.x - u2.x) * h2, i2 = (t2.max.x - u2.x) * h2) : (s2 = (t2.max.x - u2.x) * h2, i2 = (t2.min.x - u2.x) * h2), l2 >= 0 ? (r2 = (t2.min.y - u2.y) * l2, n2 = (t2.max.y - u2.y) * l2) : (r2 = (t2.max.y - u2.y) * l2, n2 = (t2.min.y - u2.y) * l2), s2 > n2 || r2 > i2 ? null : ((r2 > s2 || isNaN(s2)) && (s2 = r2), (n2 < i2 || isNaN(i2)) && (i2 = n2), c2 >= 0 ? (a2 = (t2.min.z - u2.z) * c2, o2 = (t2.max.z - u2.z) * c2) : (a2 = (t2.max.z - u2.z) * c2, o2 = (t2.min.z - u2.z) * c2), s2 > o2 || a2 > i2 ? null : ((a2 > s2 || s2 != s2) && (s2 = a2), (o2 < i2 || i2 != i2) && (i2 = o2), i2 < 0 ? null : this.at(s2 >= 0 ? s2 : i2, e2)));
    }
    intersectsBox(t2) {
      return null !== this.intersectBox(t2, ma);
    }
    intersectTriangle(t2, e2, s2, i2, r2) {
      xa.subVectors(e2, t2), ba.subVectors(s2, t2), va.crossVectors(xa, ba);
      let n2, a2 = this.direction.dot(va);
      if (a2 > 0) {
        if (i2) return null;
        n2 = 1;
      } else {
        if (!(a2 < 0)) return null;
        n2 = -1, a2 = -a2;
      }
      fa.subVectors(this.origin, t2);
      const o2 = n2 * this.direction.dot(ba.crossVectors(fa, ba));
      if (o2 < 0) return null;
      const h2 = n2 * this.direction.dot(xa.cross(fa));
      if (h2 < 0) return null;
      if (o2 + h2 > a2) return null;
      const l2 = -n2 * fa.dot(va);
      return l2 < 0 ? null : this.at(l2 / a2, r2);
    }
    applyMatrix4(t2) {
      return this.origin.applyMatrix4(t2), this.direction.transformDirection(t2), this;
    }
    equals(t2) {
      return t2.origin.equals(this.origin) && t2.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var Ma = class extends Zn {
    constructor(t2) {
      super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Pr(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hr(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.specularMap = t2.specularMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.envMapRotation.copy(t2.envMapRotation), this.combine = t2.combine, this.reflectivity = t2.reflectivity, this.refractionRatio = t2.refractionRatio, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.fog = t2.fog, this;
    }
  };
  var Sa = new Qi();
  var _a = new wa();
  var Aa = new En();
  var Ta = new Ti();
  var za = new Ti();
  var Ca = new Ti();
  var Ia = new Ti();
  var Ba = new Ti();
  var ka = new Ti();
  var Oa = new Ti();
  var Pa = new Ti();
  var Ra = class extends Ar {
    constructor(t2 = new Wn(), e2 = new Ma()) {
      super(), this.isMesh = true, this.type = "Mesh", this.geometry = t2, this.material = e2, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), void 0 !== t2.morphTargetInfluences && (this.morphTargetInfluences = t2.morphTargetInfluences.slice()), void 0 !== t2.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t2.morphTargetDictionary)), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
    }
    updateMorphTargets() {
      const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
      if (e2.length > 0) {
        const s2 = t2[e2[0]];
        if (void 0 !== s2) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t3 = 0, e3 = s2.length; t3 < e3; t3++) {
            const e4 = s2[t3].name || String(t3);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
          }
        }
      }
    }
    getVertexPosition(t2, e2) {
      const s2 = this.geometry, i2 = s2.attributes.position, r2 = s2.morphAttributes.position, n2 = s2.morphTargetsRelative;
      e2.fromBufferAttribute(i2, t2);
      const a2 = this.morphTargetInfluences;
      if (r2 && a2) {
        ka.set(0, 0, 0);
        for (let s3 = 0, i3 = r2.length; s3 < i3; s3++) {
          const i4 = a2[s3], o2 = r2[s3];
          0 !== i4 && (Ba.fromBufferAttribute(o2, t2), n2 ? ka.addScaledVector(Ba, i4) : ka.addScaledVector(Ba.sub(e2), i4));
        }
        e2.add(ka);
      }
      return e2;
    }
    raycast(t2, e2) {
      const s2 = this.geometry, i2 = this.material, r2 = this.matrixWorld;
      if (void 0 !== i2) {
        if (null === s2.boundingSphere && s2.computeBoundingSphere(), Aa.copy(s2.boundingSphere), Aa.applyMatrix4(r2), _a.copy(t2.ray).recast(t2.near), false === Aa.containsPoint(_a.origin)) {
          if (null === _a.intersectSphere(Aa, Ta)) return;
          if (_a.origin.distanceToSquared(Ta) > (t2.far - t2.near) ** 2) return;
        }
        Sa.copy(r2).invert(), _a.copy(t2.ray).applyMatrix4(Sa), null !== s2.boundingBox && false === _a.intersectsBox(s2.boundingBox) || this._computeIntersections(t2, e2, _a);
      }
    }
    _computeIntersections(t2, e2, s2) {
      let i2;
      const r2 = this.geometry, n2 = this.material, a2 = r2.index, o2 = r2.attributes.position, h2 = r2.attributes.uv, l2 = r2.attributes.uv1, c2 = r2.attributes.normal, u2 = r2.groups, d2 = r2.drawRange;
      if (null !== a2) if (Array.isArray(n2)) for (let r3 = 0, o3 = u2.length; r3 < o3; r3++) {
        const o4 = u2[r3], p2 = n2[o4.materialIndex];
        for (let r4 = Math.max(o4.start, d2.start), n3 = Math.min(a2.count, Math.min(o4.start + o4.count, d2.start + d2.count)); r4 < n3; r4 += 3) {
          i2 = Ea(this, p2, t2, s2, h2, l2, c2, a2.getX(r4), a2.getX(r4 + 1), a2.getX(r4 + 2)), i2 && (i2.faceIndex = Math.floor(r4 / 3), i2.face.materialIndex = o4.materialIndex, e2.push(i2));
        }
      }
      else {
        for (let r3 = Math.max(0, d2.start), o3 = Math.min(a2.count, d2.start + d2.count); r3 < o3; r3 += 3) {
          i2 = Ea(this, n2, t2, s2, h2, l2, c2, a2.getX(r3), a2.getX(r3 + 1), a2.getX(r3 + 2)), i2 && (i2.faceIndex = Math.floor(r3 / 3), e2.push(i2));
        }
      }
      else if (void 0 !== o2) if (Array.isArray(n2)) for (let r3 = 0, a3 = u2.length; r3 < a3; r3++) {
        const a4 = u2[r3], p2 = n2[a4.materialIndex];
        for (let r4 = Math.max(a4.start, d2.start), n3 = Math.min(o2.count, Math.min(a4.start + a4.count, d2.start + d2.count)); r4 < n3; r4 += 3) {
          i2 = Ea(this, p2, t2, s2, h2, l2, c2, r4, r4 + 1, r4 + 2), i2 && (i2.faceIndex = Math.floor(r4 / 3), i2.face.materialIndex = a4.materialIndex, e2.push(i2));
        }
      }
      else {
        for (let r3 = Math.max(0, d2.start), a3 = Math.min(o2.count, d2.start + d2.count); r3 < a3; r3 += 3) {
          i2 = Ea(this, n2, t2, s2, h2, l2, c2, r3, r3 + 1, r3 + 2), i2 && (i2.faceIndex = Math.floor(r3 / 3), e2.push(i2));
        }
      }
    }
  };
  function Ea(t2, e2, s2, i2, r2, n2, a2, o2, h2, l2) {
    t2.getVertexPosition(o2, za), t2.getVertexPosition(h2, Ca), t2.getVertexPosition(l2, Ia);
    const c2 = (function(t3, e3, s3, i3, r3, n3, a3, o3) {
      let h3;
      if (h3 = 1 === e3.side ? i3.intersectTriangle(a3, n3, r3, true, o3) : i3.intersectTriangle(r3, n3, a3, 0 === e3.side, o3), null === h3) return null;
      Pa.copy(o3), Pa.applyMatrix4(t3.matrixWorld);
      const l3 = s3.ray.origin.distanceTo(Pa);
      return l3 < s3.near || l3 > s3.far ? null : { distance: l3, point: Pa.clone(), object: t3 };
    })(t2, e2, s2, i2, za, Ca, Ia, Oa);
    if (c2) {
      const t3 = new Ti();
      $r.getBarycoord(Oa, za, Ca, Ia, t3), r2 && (c2.uv = $r.getInterpolatedAttribute(r2, o2, h2, l2, t3, new _i())), n2 && (c2.uv1 = $r.getInterpolatedAttribute(n2, o2, h2, l2, t3, new _i())), a2 && (c2.normal = $r.getInterpolatedAttribute(a2, o2, h2, l2, t3, new Ti()), c2.normal.dot(i2.direction) > 0 && c2.normal.multiplyScalar(-1));
      const e3 = { a: o2, b: h2, c: l2, normal: new Ti(), materialIndex: 0 };
      $r.getNormal(za, Ca, Ia, e3.normal), c2.face = e3, c2.barycoord = t3;
    }
    return c2;
  }
  var Na = new qi();
  var Va = new qi();
  var La = new qi();
  var Fa = new qi();
  var Da = new Qi();
  var Ua = new Ti();
  var ja = new En();
  var Wa = new Qi();
  var Ja = new wa();
  var Xa = class extends Ji {
    constructor(t2 = null, e2 = 1, s2 = 1, i2, r2, n2, a2, o2, h2 = 1003, l2 = 1003, c2, u2) {
      super(null, n2, a2, o2, h2, l2, i2, r2, c2, u2), this.isDataTexture = true, this.image = { data: t2, width: e2, height: s2 }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var Ya = new Qi();
  var Za = new Qi();
  var Qa = new Qi();
  var Ka = new Qi();
  var eo = new Qr();
  var so = new Qi();
  var io = new Ra();
  var ro = new En();
  var ao = new Ti();
  var oo = new Ti();
  var ho = new Ii();
  var lo = class {
    constructor(t2 = new Ti(1, 0, 0), e2 = 0) {
      this.isPlane = true, this.normal = t2, this.constant = e2;
    }
    set(t2, e2) {
      return this.normal.copy(t2), this.constant = e2, this;
    }
    setComponents(t2, e2, s2, i2) {
      return this.normal.set(t2, e2, s2), this.constant = i2, this;
    }
    setFromNormalAndCoplanarPoint(t2, e2) {
      return this.normal.copy(t2), this.constant = -e2.dot(this.normal), this;
    }
    setFromCoplanarPoints(t2, e2, s2) {
      const i2 = ao.subVectors(s2, e2).cross(oo.subVectors(t2, e2)).normalize();
      return this.setFromNormalAndCoplanarPoint(i2, t2), this;
    }
    copy(t2) {
      return this.normal.copy(t2.normal), this.constant = t2.constant, this;
    }
    normalize() {
      const t2 = 1 / this.normal.length();
      return this.normal.multiplyScalar(t2), this.constant *= t2, this;
    }
    negate() {
      return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(t2) {
      return this.normal.dot(t2) + this.constant;
    }
    distanceToSphere(t2) {
      return this.distanceToPoint(t2.center) - t2.radius;
    }
    projectPoint(t2, e2) {
      return e2.copy(t2).addScaledVector(this.normal, -this.distanceToPoint(t2));
    }
    intersectLine(t2, e2, s2 = true) {
      const i2 = t2.delta(ao), r2 = this.normal.dot(i2);
      if (0 === r2) return 0 === this.distanceToPoint(t2.start) ? e2.copy(t2.start) : null;
      const n2 = -(t2.start.dot(this.normal) + this.constant) / r2;
      return true === s2 && (n2 < 0 || n2 > 1) ? null : e2.copy(t2.start).addScaledVector(i2, n2);
    }
    intersectsLine(t2) {
      const e2 = this.distanceToPoint(t2.start), s2 = this.distanceToPoint(t2.end);
      return e2 < 0 && s2 > 0 || s2 < 0 && e2 > 0;
    }
    intersectsBox(t2) {
      return t2.intersectsPlane(this);
    }
    intersectsSphere(t2) {
      return t2.intersectsPlane(this);
    }
    coplanarPoint(t2) {
      return t2.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(t2, e2) {
      const s2 = e2 || ho.getNormalMatrix(t2), i2 = this.coplanarPoint(ao).applyMatrix4(t2), r2 = this.normal.applyMatrix3(s2).normalize();
      return this.constant = -i2.dot(r2), this;
    }
    translate(t2) {
      return this.constant -= t2.dot(this.normal), this;
    }
    equals(t2) {
      return t2.normal.equals(this.normal) && t2.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var co = new En();
  var uo = new _i(0.5, 0.5);
  var po = new Ti();
  var mo = class {
    constructor(t2 = new lo(), e2 = new lo(), s2 = new lo(), i2 = new lo(), r2 = new lo(), n2 = new lo()) {
      this.planes = [t2, e2, s2, i2, r2, n2];
    }
    set(t2, e2, s2, i2, r2, n2) {
      const a2 = this.planes;
      return a2[0].copy(t2), a2[1].copy(e2), a2[2].copy(s2), a2[3].copy(i2), a2[4].copy(r2), a2[5].copy(n2), this;
    }
    copy(t2) {
      const e2 = this.planes;
      for (let s2 = 0; s2 < 6; s2++) e2[s2].copy(t2.planes[s2]);
      return this;
    }
    setFromProjectionMatrix(t2, e2 = 2e3, s2 = false) {
      const i2 = this.planes, r2 = t2.elements, n2 = r2[0], a2 = r2[1], o2 = r2[2], h2 = r2[3], l2 = r2[4], c2 = r2[5], u2 = r2[6], d2 = r2[7], p2 = r2[8], m2 = r2[9], y2 = r2[10], g2 = r2[11], f2 = r2[12], x2 = r2[13], b2 = r2[14], v2 = r2[15];
      if (i2[0].setComponents(h2 - n2, d2 - l2, g2 - p2, v2 - f2).normalize(), i2[1].setComponents(h2 + n2, d2 + l2, g2 + p2, v2 + f2).normalize(), i2[2].setComponents(h2 + a2, d2 + c2, g2 + m2, v2 + x2).normalize(), i2[3].setComponents(h2 - a2, d2 - c2, g2 - m2, v2 - x2).normalize(), s2) i2[4].setComponents(o2, u2, y2, b2).normalize(), i2[5].setComponents(h2 - o2, d2 - u2, g2 - y2, v2 - b2).normalize();
      else if (i2[4].setComponents(h2 - o2, d2 - u2, g2 - y2, v2 - b2).normalize(), e2 === Ws) i2[5].setComponents(h2 + o2, d2 + u2, g2 + y2, v2 + b2).normalize();
      else {
        if (e2 !== Js) throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e2);
        i2[5].setComponents(o2, u2, y2, b2).normalize();
      }
      return this;
    }
    intersectsObject(t2) {
      if (void 0 !== t2.boundingSphere) null === t2.boundingSphere && t2.computeBoundingSphere(), co.copy(t2.boundingSphere).applyMatrix4(t2.matrixWorld);
      else {
        const e2 = t2.geometry;
        null === e2.boundingSphere && e2.computeBoundingSphere(), co.copy(e2.boundingSphere).applyMatrix4(t2.matrixWorld);
      }
      return this.intersectsSphere(co);
    }
    intersectsSprite(t2) {
      co.center.set(0, 0, 0);
      const e2 = uo.distanceTo(t2.center);
      return co.radius = 0.7071067811865476 + e2, co.applyMatrix4(t2.matrixWorld), this.intersectsSphere(co);
    }
    intersectsSphere(t2) {
      const e2 = this.planes, s2 = t2.center, i2 = -t2.radius;
      for (let t3 = 0; t3 < 6; t3++) {
        if (e2[t3].distanceToPoint(s2) < i2) return false;
      }
      return true;
    }
    intersectsBox(t2) {
      const e2 = this.planes;
      for (let s2 = 0; s2 < 6; s2++) {
        const i2 = e2[s2];
        if (po.x = i2.normal.x > 0 ? t2.max.x : t2.min.x, po.y = i2.normal.y > 0 ? t2.max.y : t2.min.y, po.z = i2.normal.z > 0 ? t2.max.z : t2.min.z, i2.distanceToPoint(po) < 0) return false;
      }
      return true;
    }
    containsPoint(t2) {
      const e2 = this.planes;
      for (let s2 = 0; s2 < 6; s2++) if (e2[s2].distanceToPoint(t2) < 0) return false;
      return true;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var yo = new Qi();
  var go = class _go {
    constructor() {
      this.coordinateSystem = Ws, this._frustums = [], this._count = 0;
    }
    setFromArrayCamera(t2) {
      const e2 = t2.cameras, s2 = this._frustums;
      for (let t3 = 0; t3 < e2.length; t3++) {
        const i2 = e2[t3];
        yo.multiplyMatrices(i2.projectionMatrix, i2.matrixWorldInverse), void 0 === s2[t3] && (s2[t3] = new mo()), s2[t3].setFromProjectionMatrix(yo, i2.coordinateSystem, i2.reversedDepth);
      }
      return this._count = e2.length, this;
    }
    intersectsObject(t2) {
      const e2 = this._frustums;
      for (let s2 = 0; s2 < this._count; s2++) if (e2[s2].intersectsObject(t2)) return true;
      return false;
    }
    intersectsSprite(t2) {
      const e2 = this._frustums;
      for (let s2 = 0; s2 < this._count; s2++) if (e2[s2].intersectsSprite(t2)) return true;
      return false;
    }
    intersectsSphere(t2) {
      const e2 = this._frustums;
      for (let s2 = 0; s2 < this._count; s2++) if (e2[s2].intersectsSphere(t2)) return true;
      return false;
    }
    intersectsBox(t2) {
      const e2 = this._frustums;
      for (let s2 = 0; s2 < this._count; s2++) if (e2[s2].intersectsBox(t2)) return true;
      return false;
    }
    containsPoint(t2) {
      const e2 = this._frustums;
      for (let s2 = 0; s2 < this._count; s2++) if (e2[s2].containsPoint(t2)) return true;
      return false;
    }
    copy(t2) {
      this.coordinateSystem = t2.coordinateSystem;
      const e2 = this._frustums, s2 = t2._frustums;
      for (let i2 = 0; i2 < t2._count; i2++) void 0 === e2[i2] && (e2[i2] = new mo()), e2[i2].copy(s2[i2]);
      return this._count = t2._count, this;
    }
    clone() {
      return new _go().copy(this);
    }
  };
  var vo = class {
    constructor() {
      this.index = 0, this.pool = [], this.list = [];
    }
    push(t2, e2, s2, i2) {
      const r2 = this.pool, n2 = this.list;
      this.index >= r2.length && r2.push({ start: -1, count: -1, z: -1, index: -1 });
      const a2 = r2[this.index];
      n2.push(a2), this.index++, a2.start = t2, a2.count = e2, a2.z = s2, a2.index = i2;
    }
    reset() {
      this.list.length = 0, this.index = 0;
    }
  };
  var wo = new Qi();
  var Mo = new Pr(1, 1, 1);
  var So = new mo();
  var _o = new go();
  var Ao = new Qr();
  var To = new En();
  var zo = new Ti();
  var Co = new Ti();
  var Io = new Ti();
  var Bo = new vo();
  var ko = new Ra();
  var No = class extends Zn {
    constructor(t2) {
      super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Pr(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.linewidth = t2.linewidth, this.linecap = t2.linecap, this.linejoin = t2.linejoin, this.fog = t2.fog, this;
    }
  };
  var Vo = new Ti();
  var Lo = new Ti();
  var Fo = new Qi();
  var Do = new wa();
  var Uo = new En();
  var jo = new Ti();
  var Wo = new Ti();
  var Jo = class extends Ar {
    constructor(t2 = new Wn(), e2 = new No()) {
      super(), this.isLine = true, this.type = "Line", this.geometry = t2, this.material = e2, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
    }
    computeLineDistances() {
      const t2 = this.geometry;
      if (null === t2.index) {
        const e2 = t2.attributes.position, s2 = [0];
        for (let t3 = 1, i2 = e2.count; t3 < i2; t3++) Vo.fromBufferAttribute(e2, t3 - 1), Lo.fromBufferAttribute(e2, t3), s2[t3] = s2[t3 - 1], s2[t3] += Vo.distanceTo(Lo);
        t2.setAttribute("lineDistance", new kn(s2, 1));
      } else ai("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
    raycast(t2, e2) {
      const s2 = this.geometry, i2 = this.matrixWorld, r2 = t2.params.Line.threshold, n2 = s2.drawRange;
      if (null === s2.boundingSphere && s2.computeBoundingSphere(), Uo.copy(s2.boundingSphere), Uo.applyMatrix4(i2), Uo.radius += r2, false === t2.ray.intersectsSphere(Uo)) return;
      Fo.copy(i2).invert(), Do.copy(t2.ray).applyMatrix4(Fo);
      const a2 = r2 / ((this.scale.x + this.scale.y + this.scale.z) / 3), o2 = a2 * a2, h2 = this.isLineSegments ? 2 : 1, l2 = s2.index, c2 = s2.attributes.position;
      if (null !== l2) {
        const s3 = Math.max(0, n2.start), i3 = Math.min(l2.count, n2.start + n2.count);
        for (let r3 = s3, n3 = i3 - 1; r3 < n3; r3 += h2) {
          const s4 = l2.getX(r3), i4 = l2.getX(r3 + 1), n4 = qo(this, t2, Do, o2, s4, i4, r3);
          n4 && e2.push(n4);
        }
        if (this.isLineLoop) {
          const r3 = l2.getX(i3 - 1), n3 = l2.getX(s3), a3 = qo(this, t2, Do, o2, r3, n3, i3 - 1);
          a3 && e2.push(a3);
        }
      } else {
        const s3 = Math.max(0, n2.start), i3 = Math.min(c2.count, n2.start + n2.count);
        for (let r3 = s3, n3 = i3 - 1; r3 < n3; r3 += h2) {
          const s4 = qo(this, t2, Do, o2, r3, r3 + 1, r3);
          s4 && e2.push(s4);
        }
        if (this.isLineLoop) {
          const r3 = qo(this, t2, Do, o2, i3 - 1, s3, i3 - 1);
          r3 && e2.push(r3);
        }
      }
    }
    updateMorphTargets() {
      const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
      if (e2.length > 0) {
        const s2 = t2[e2[0]];
        if (void 0 !== s2) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t3 = 0, e3 = s2.length; t3 < e3; t3++) {
            const e4 = s2[t3].name || String(t3);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
          }
        }
      }
    }
  };
  function qo(t2, e2, s2, i2, r2, n2, a2) {
    const o2 = t2.geometry.attributes.position;
    Vo.fromBufferAttribute(o2, r2), Lo.fromBufferAttribute(o2, n2);
    if (s2.distanceSqToSegment(Vo, Lo, jo, Wo) > i2) return;
    jo.applyMatrix4(t2.matrixWorld);
    const h2 = e2.ray.origin.distanceTo(jo);
    return h2 < e2.near || h2 > e2.far ? void 0 : { distance: h2, point: Wo.clone().applyMatrix4(t2.matrixWorld), index: a2, face: null, faceIndex: null, barycoord: null, object: t2 };
  }
  var Ho = new Ti();
  var Xo = new Ti();
  var Yo = class extends Jo {
    constructor(t2, e2) {
      super(t2, e2), this.isLineSegments = true, this.type = "LineSegments";
    }
    computeLineDistances() {
      const t2 = this.geometry;
      if (null === t2.index) {
        const e2 = t2.attributes.position, s2 = [];
        for (let t3 = 0, i2 = e2.count; t3 < i2; t3 += 2) Ho.fromBufferAttribute(e2, t3), Xo.fromBufferAttribute(e2, t3 + 1), s2[t3] = 0 === t3 ? 0 : s2[t3 - 1], s2[t3 + 1] = s2[t3] + Ho.distanceTo(Xo);
        t2.setAttribute("lineDistance", new kn(s2, 1));
      } else ai("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
  };
  var Zo = class extends Jo {
    constructor(t2, e2) {
      super(t2, e2), this.isLineLoop = true, this.type = "LineLoop";
    }
  };
  var Go = class extends Zn {
    constructor(t2) {
      super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Pr(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.alphaMap = t2.alphaMap, this.size = t2.size, this.sizeAttenuation = t2.sizeAttenuation, this.fog = t2.fog, this;
    }
  };
  var $o = new Qi();
  var Qo = new wa();
  var Ko = new En();
  var th = new Ti();
  var eh = class extends Ar {
    constructor(t2 = new Wn(), e2 = new Go()) {
      super(), this.isPoints = true, this.type = "Points", this.geometry = t2, this.material = e2, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
    }
    raycast(t2, e2) {
      const s2 = this.geometry, i2 = this.matrixWorld, r2 = t2.params.Points.threshold, n2 = s2.drawRange;
      if (null === s2.boundingSphere && s2.computeBoundingSphere(), Ko.copy(s2.boundingSphere), Ko.applyMatrix4(i2), Ko.radius += r2, false === t2.ray.intersectsSphere(Ko)) return;
      $o.copy(i2).invert(), Qo.copy(t2.ray).applyMatrix4($o);
      const a2 = r2 / ((this.scale.x + this.scale.y + this.scale.z) / 3), o2 = a2 * a2, h2 = s2.index, l2 = s2.attributes.position;
      if (null !== h2) {
        for (let s3 = Math.max(0, n2.start), r3 = Math.min(h2.count, n2.start + n2.count); s3 < r3; s3++) {
          const r4 = h2.getX(s3);
          th.fromBufferAttribute(l2, r4), sh(th, r4, o2, i2, t2, e2, this);
        }
      } else {
        for (let s3 = Math.max(0, n2.start), r3 = Math.min(l2.count, n2.start + n2.count); s3 < r3; s3++) th.fromBufferAttribute(l2, s3), sh(th, s3, o2, i2, t2, e2, this);
      }
    }
    updateMorphTargets() {
      const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
      if (e2.length > 0) {
        const s2 = t2[e2[0]];
        if (void 0 !== s2) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t3 = 0, e3 = s2.length; t3 < e3; t3++) {
            const e4 = s2[t3].name || String(t3);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
          }
        }
      }
    }
  };
  function sh(t2, e2, s2, i2, r2, n2, a2) {
    const o2 = Qo.distanceSqToPoint(t2);
    if (o2 < s2) {
      const s3 = new Ti();
      Qo.closestPointToPoint(t2, s3), s3.applyMatrix4(i2);
      const h2 = r2.ray.origin.distanceTo(s3);
      if (h2 < r2.near || h2 > r2.far) return;
      n2.push({ distance: h2, distanceToRay: Math.sqrt(o2), point: s3, index: e2, face: null, faceIndex: null, barycoord: null, object: a2 });
    }
  }
  var lh = class extends Ji {
    constructor(t2 = [], e2 = 301, s2, i2, r2, n2, a2, o2, h2, l2) {
      super(t2, e2, s2, i2, r2, n2, a2, o2, h2, l2), this.isCubeTexture = true, this.flipY = false;
    }
    get images() {
      return this.image;
    }
    set images(t2) {
      this.image = t2;
    }
  };
  var ch = class extends Ji {
    constructor(t2, e2, s2, i2, r2, n2, a2, o2, h2) {
      super(t2, e2, s2, i2, r2, n2, a2, o2, h2), this.isCanvasTexture = true, this.needsUpdate = true;
    }
  };
  var dh = class extends Ji {
    constructor(t2, e2, s2 = 1014, i2, r2, n2, a2 = 1003, o2 = 1003, h2, l2 = 1026, c2 = 1) {
      if (l2 !== Wt && 1027 !== l2) throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      super({ width: t2, height: e2, depth: c2 }, i2, r2, n2, a2, o2, l2, s2, h2), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
    }
    copy(t2) {
      return super.copy(t2), this.source = new Di(Object.assign({}, t2.image)), this.compareFunction = t2.compareFunction, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return null !== this.compareFunction && (e2.compareFunction = this.compareFunction), e2;
    }
  };
  var ph = class extends dh {
    constructor(t2, e2 = 1014, s2 = 301, i2, r2, n2 = 1003, a2 = 1003, o2, h2 = 1026) {
      const l2 = { width: t2, height: t2, depth: 1 }, c2 = [l2, l2, l2, l2, l2, l2];
      super(t2, t2, e2, s2, i2, r2, n2, a2, o2, h2), this.image = c2, this.isCubeDepthTexture = true, this.isCubeTexture = true;
    }
    get images() {
      return this.image;
    }
    set images(t2) {
      this.image = t2;
    }
  };
  var mh = class extends Ji {
    constructor(t2 = null) {
      super(), this.sourceTexture = t2, this.isExternalTexture = true;
    }
    copy(t2) {
      return super.copy(t2), this.sourceTexture = t2.sourceTexture, this;
    }
  };
  var yh = class _yh extends Wn {
    constructor(t2 = 1, e2 = 1, s2 = 1, i2 = 1, r2 = 1, n2 = 1) {
      super(), this.type = "BoxGeometry", this.parameters = { width: t2, height: e2, depth: s2, widthSegments: i2, heightSegments: r2, depthSegments: n2 };
      const a2 = this;
      i2 = Math.floor(i2), r2 = Math.floor(r2), n2 = Math.floor(n2);
      const o2 = [], h2 = [], l2 = [], c2 = [];
      let u2 = 0, d2 = 0;
      function p2(t3, e3, s3, i3, r3, n3, p3, m2, y2, g2, f2) {
        const x2 = n3 / y2, b2 = p3 / g2, v2 = n3 / 2, w2 = p3 / 2, M2 = m2 / 2, S2 = y2 + 1, _2 = g2 + 1;
        let A2 = 0, T2 = 0;
        const z2 = new Ti();
        for (let n4 = 0; n4 < _2; n4++) {
          const a3 = n4 * b2 - w2;
          for (let o3 = 0; o3 < S2; o3++) {
            const u3 = o3 * x2 - v2;
            z2[t3] = u3 * i3, z2[e3] = a3 * r3, z2[s3] = M2, h2.push(z2.x, z2.y, z2.z), z2[t3] = 0, z2[e3] = 0, z2[s3] = m2 > 0 ? 1 : -1, l2.push(z2.x, z2.y, z2.z), c2.push(o3 / y2), c2.push(1 - n4 / g2), A2 += 1;
          }
        }
        for (let t4 = 0; t4 < g2; t4++) for (let e4 = 0; e4 < y2; e4++) {
          const s4 = u2 + e4 + S2 * t4, i4 = u2 + e4 + S2 * (t4 + 1), r4 = u2 + (e4 + 1) + S2 * (t4 + 1), n4 = u2 + (e4 + 1) + S2 * t4;
          o2.push(s4, i4, n4), o2.push(i4, r4, n4), T2 += 6;
        }
        a2.addGroup(d2, T2, f2), d2 += T2, u2 += A2;
      }
      p2("z", "y", "x", -1, -1, s2, e2, t2, n2, r2, 0), p2("z", "y", "x", 1, -1, s2, e2, -t2, n2, r2, 1), p2("x", "z", "y", 1, 1, t2, s2, e2, i2, n2, 2), p2("x", "z", "y", 1, -1, t2, s2, -e2, i2, n2, 3), p2("x", "y", "z", 1, -1, t2, e2, s2, i2, r2, 4), p2("x", "y", "z", -1, -1, t2, e2, -s2, i2, r2, 5), this.setIndex(o2), this.setAttribute("position", new kn(h2, 3)), this.setAttribute("normal", new kn(l2, 3)), this.setAttribute("uv", new kn(c2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _yh(t2.width, t2.height, t2.depth, t2.widthSegments, t2.heightSegments, t2.depthSegments);
    }
  };
  var gh = class _gh extends Wn {
    constructor(t2 = 1, e2 = 1, s2 = 4, i2 = 8, r2 = 1) {
      super(), this.type = "CapsuleGeometry", this.parameters = { radius: t2, height: e2, capSegments: s2, radialSegments: i2, heightSegments: r2 }, e2 = Math.max(0, e2), s2 = Math.max(1, Math.floor(s2)), i2 = Math.max(3, Math.floor(i2)), r2 = Math.max(1, Math.floor(r2));
      const n2 = [], a2 = [], o2 = [], h2 = [], l2 = e2 / 2, c2 = Math.PI / 2 * t2, u2 = e2, d2 = 2 * c2 + u2, p2 = 2 * s2 + r2, m2 = i2 + 1, y2 = new Ti(), g2 = new Ti();
      for (let f2 = 0; f2 <= p2; f2++) {
        let x2 = 0, b2 = 0, v2 = 0, w2 = 0;
        if (f2 <= s2) {
          const e3 = f2 / s2, i3 = e3 * Math.PI / 2;
          b2 = -l2 - t2 * Math.cos(i3), v2 = t2 * Math.sin(i3), w2 = -t2 * Math.cos(i3), x2 = e3 * c2;
        } else if (f2 <= s2 + r2) {
          const i3 = (f2 - s2) / r2;
          b2 = i3 * e2 - l2, v2 = t2, w2 = 0, x2 = c2 + i3 * u2;
        } else {
          const e3 = (f2 - s2 - r2) / s2, i3 = e3 * Math.PI / 2;
          b2 = l2 + t2 * Math.sin(i3), v2 = t2 * Math.cos(i3), w2 = t2 * Math.sin(i3), x2 = c2 + u2 + e3 * c2;
        }
        const M2 = Math.max(0, Math.min(1, x2 / d2));
        let S2 = 0;
        0 === f2 ? S2 = 0.5 / i2 : f2 === p2 && (S2 = -0.5 / i2);
        for (let t3 = 0; t3 <= i2; t3++) {
          const e3 = t3 / i2, s3 = e3 * Math.PI * 2, r3 = Math.sin(s3), n3 = Math.cos(s3);
          g2.x = -v2 * n3, g2.y = b2, g2.z = v2 * r3, a2.push(g2.x, g2.y, g2.z), y2.set(-v2 * n3, w2, v2 * r3), y2.normalize(), o2.push(y2.x, y2.y, y2.z), h2.push(e3 + S2, M2);
        }
        if (f2 > 0) {
          const t3 = (f2 - 1) * m2;
          for (let e3 = 0; e3 < i2; e3++) {
            const s3 = t3 + e3, i3 = t3 + e3 + 1, r3 = f2 * m2 + e3, a3 = f2 * m2 + e3 + 1;
            n2.push(s3, i3, r3), n2.push(i3, a3, r3);
          }
        }
      }
      this.setIndex(n2), this.setAttribute("position", new kn(a2, 3)), this.setAttribute("normal", new kn(o2, 3)), this.setAttribute("uv", new kn(h2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _gh(t2.radius, t2.height, t2.capSegments, t2.radialSegments, t2.heightSegments);
    }
  };
  var fh = class _fh extends Wn {
    constructor(t2 = 1, e2 = 32, s2 = 0, i2 = 2 * Math.PI) {
      super(), this.type = "CircleGeometry", this.parameters = { radius: t2, segments: e2, thetaStart: s2, thetaLength: i2 }, e2 = Math.max(3, e2);
      const r2 = [], n2 = [], a2 = [], o2 = [], h2 = new Ti(), l2 = new _i();
      n2.push(0, 0, 0), a2.push(0, 0, 1), o2.push(0.5, 0.5);
      for (let r3 = 0, c2 = 3; r3 <= e2; r3++, c2 += 3) {
        const u2 = s2 + r3 / e2 * i2;
        h2.x = t2 * Math.cos(u2), h2.y = t2 * Math.sin(u2), n2.push(h2.x, h2.y, h2.z), a2.push(0, 0, 1), l2.x = (n2[c2] / t2 + 1) / 2, l2.y = (n2[c2 + 1] / t2 + 1) / 2, o2.push(l2.x, l2.y);
      }
      for (let t3 = 1; t3 <= e2; t3++) r2.push(t3, t3 + 1, 0);
      this.setIndex(r2), this.setAttribute("position", new kn(n2, 3)), this.setAttribute("normal", new kn(a2, 3)), this.setAttribute("uv", new kn(o2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _fh(t2.radius, t2.segments, t2.thetaStart, t2.thetaLength);
    }
  };
  var xh = class _xh extends Wn {
    constructor(t2 = 1, e2 = 1, s2 = 1, i2 = 32, r2 = 1, n2 = false, a2 = 0, o2 = 2 * Math.PI) {
      super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t2, radiusBottom: e2, height: s2, radialSegments: i2, heightSegments: r2, openEnded: n2, thetaStart: a2, thetaLength: o2 };
      const h2 = this;
      i2 = Math.floor(i2), r2 = Math.floor(r2);
      const l2 = [], c2 = [], u2 = [], d2 = [];
      let p2 = 0;
      const m2 = [], y2 = s2 / 2;
      let g2 = 0;
      function f2(s3) {
        const r3 = p2, n3 = new _i(), m3 = new Ti();
        let f3 = 0;
        const x2 = true === s3 ? t2 : e2, b2 = true === s3 ? 1 : -1;
        for (let t3 = 1; t3 <= i2; t3++) c2.push(0, y2 * b2, 0), u2.push(0, b2, 0), d2.push(0.5, 0.5), p2++;
        const v2 = p2;
        for (let t3 = 0; t3 <= i2; t3++) {
          const e3 = t3 / i2 * o2 + a2, s4 = Math.cos(e3), r4 = Math.sin(e3);
          m3.x = x2 * r4, m3.y = y2 * b2, m3.z = x2 * s4, c2.push(m3.x, m3.y, m3.z), u2.push(0, b2, 0), n3.x = 0.5 * s4 + 0.5, n3.y = 0.5 * r4 * b2 + 0.5, d2.push(n3.x, n3.y), p2++;
        }
        for (let t3 = 0; t3 < i2; t3++) {
          const e3 = r3 + t3, i3 = v2 + t3;
          true === s3 ? l2.push(i3, i3 + 1, e3) : l2.push(i3 + 1, i3, e3), f3 += 3;
        }
        h2.addGroup(g2, f3, true === s3 ? 1 : 2), g2 += f3;
      }
      !(function() {
        const n3 = new Ti(), f3 = new Ti();
        let x2 = 0;
        const b2 = (e2 - t2) / s2;
        for (let h3 = 0; h3 <= r2; h3++) {
          const l3 = [], g3 = h3 / r2, x3 = g3 * (e2 - t2) + t2;
          for (let t3 = 0; t3 <= i2; t3++) {
            const e3 = t3 / i2, r3 = e3 * o2 + a2, h4 = Math.sin(r3), m3 = Math.cos(r3);
            f3.x = x3 * h4, f3.y = -g3 * s2 + y2, f3.z = x3 * m3, c2.push(f3.x, f3.y, f3.z), n3.set(h4, b2, m3).normalize(), u2.push(n3.x, n3.y, n3.z), d2.push(e3, 1 - g3), l3.push(p2++);
          }
          m2.push(l3);
        }
        for (let s3 = 0; s3 < i2; s3++) for (let i3 = 0; i3 < r2; i3++) {
          const n4 = m2[i3][s3], a3 = m2[i3 + 1][s3], o3 = m2[i3 + 1][s3 + 1], h3 = m2[i3][s3 + 1];
          (t2 > 0 || 0 !== i3) && (l2.push(n4, a3, h3), x2 += 3), (e2 > 0 || i3 !== r2 - 1) && (l2.push(a3, o3, h3), x2 += 3);
        }
        h2.addGroup(g2, x2, 0), g2 += x2;
      })(), false === n2 && (t2 > 0 && f2(true), e2 > 0 && f2(false)), this.setIndex(l2), this.setAttribute("position", new kn(c2, 3)), this.setAttribute("normal", new kn(u2, 3)), this.setAttribute("uv", new kn(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _xh(t2.radiusTop, t2.radiusBottom, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var bh = class _bh extends xh {
    constructor(t2 = 1, e2 = 1, s2 = 32, i2 = 1, r2 = false, n2 = 0, a2 = 2 * Math.PI) {
      super(0, t2, e2, s2, i2, r2, n2, a2), this.type = "ConeGeometry", this.parameters = { radius: t2, height: e2, radialSegments: s2, heightSegments: i2, openEnded: r2, thetaStart: n2, thetaLength: a2 };
    }
    static fromJSON(t2) {
      return new _bh(t2.radius, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var vh = class _vh extends Wn {
    constructor(t2 = [], e2 = [], s2 = 1, i2 = 0) {
      super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: t2, indices: e2, radius: s2, detail: i2 };
      const r2 = [], n2 = [];
      function a2(t3, e3, s3, i3) {
        const r3 = i3 + 1, n3 = [];
        for (let i4 = 0; i4 <= r3; i4++) {
          n3[i4] = [];
          const a3 = t3.clone().lerp(s3, i4 / r3), o3 = e3.clone().lerp(s3, i4 / r3), h3 = r3 - i4;
          for (let t4 = 0; t4 <= h3; t4++) n3[i4][t4] = 0 === t4 && i4 === r3 ? a3 : a3.clone().lerp(o3, t4 / h3);
        }
        for (let t4 = 0; t4 < r3; t4++) for (let e4 = 0; e4 < 2 * (r3 - t4) - 1; e4++) {
          const s4 = Math.floor(e4 / 2);
          e4 % 2 == 0 ? (o2(n3[t4][s4 + 1]), o2(n3[t4 + 1][s4]), o2(n3[t4][s4])) : (o2(n3[t4][s4 + 1]), o2(n3[t4 + 1][s4 + 1]), o2(n3[t4 + 1][s4]));
        }
      }
      function o2(t3) {
        r2.push(t3.x, t3.y, t3.z);
      }
      function h2(e3, s3) {
        const i3 = 3 * e3;
        s3.x = t2[i3 + 0], s3.y = t2[i3 + 1], s3.z = t2[i3 + 2];
      }
      function l2(t3, e3, s3, i3) {
        i3 < 0 && 1 === t3.x && (n2[e3] = t3.x - 1), 0 === s3.x && 0 === s3.z && (n2[e3] = i3 / 2 / Math.PI + 0.5);
      }
      function c2(t3) {
        return Math.atan2(t3.z, -t3.x);
      }
      function u2(t3) {
        return Math.atan2(-t3.y, Math.sqrt(t3.x * t3.x + t3.z * t3.z));
      }
      !(function(t3) {
        const s3 = new Ti(), i3 = new Ti(), r3 = new Ti();
        for (let n3 = 0; n3 < e2.length; n3 += 3) h2(e2[n3 + 0], s3), h2(e2[n3 + 1], i3), h2(e2[n3 + 2], r3), a2(s3, i3, r3, t3);
      })(i2), (function(t3) {
        const e3 = new Ti();
        for (let s3 = 0; s3 < r2.length; s3 += 3) e3.x = r2[s3 + 0], e3.y = r2[s3 + 1], e3.z = r2[s3 + 2], e3.normalize().multiplyScalar(t3), r2[s3 + 0] = e3.x, r2[s3 + 1] = e3.y, r2[s3 + 2] = e3.z;
      })(s2), (function() {
        const t3 = new Ti();
        for (let e3 = 0; e3 < r2.length; e3 += 3) {
          t3.x = r2[e3 + 0], t3.y = r2[e3 + 1], t3.z = r2[e3 + 2];
          const s3 = c2(t3) / 2 / Math.PI + 0.5, i3 = u2(t3) / Math.PI + 0.5;
          n2.push(s3, 1 - i3);
        }
        (function() {
          const t4 = new Ti(), e3 = new Ti(), s3 = new Ti(), i3 = new Ti(), a3 = new _i(), o3 = new _i(), h3 = new _i();
          for (let u3 = 0, d2 = 0; u3 < r2.length; u3 += 9, d2 += 6) {
            t4.set(r2[u3 + 0], r2[u3 + 1], r2[u3 + 2]), e3.set(r2[u3 + 3], r2[u3 + 4], r2[u3 + 5]), s3.set(r2[u3 + 6], r2[u3 + 7], r2[u3 + 8]), a3.set(n2[d2 + 0], n2[d2 + 1]), o3.set(n2[d2 + 2], n2[d2 + 3]), h3.set(n2[d2 + 4], n2[d2 + 5]), i3.copy(t4).add(e3).add(s3).divideScalar(3);
            const p2 = c2(i3);
            l2(a3, d2 + 0, t4, p2), l2(o3, d2 + 2, e3, p2), l2(h3, d2 + 4, s3, p2);
          }
        })(), (function() {
          for (let t4 = 0; t4 < n2.length; t4 += 6) {
            const e3 = n2[t4 + 0], s3 = n2[t4 + 2], i3 = n2[t4 + 4], r3 = Math.max(e3, s3, i3), a3 = Math.min(e3, s3, i3);
            r3 > 0.9 && a3 < 0.1 && (e3 < 0.2 && (n2[t4 + 0] += 1), s3 < 0.2 && (n2[t4 + 2] += 1), i3 < 0.2 && (n2[t4 + 4] += 1));
          }
        })();
      })(), this.setAttribute("position", new kn(r2, 3)), this.setAttribute("normal", new kn(r2.slice(), 3)), this.setAttribute("uv", new kn(n2, 2)), 0 === i2 ? this.computeVertexNormals() : this.normalizeNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _vh(t2.vertices, t2.indices, t2.radius, t2.detail);
    }
  };
  var wh = class _wh extends vh {
    constructor(t2 = 1, e2 = 0) {
      const s2 = (1 + Math.sqrt(5)) / 2, i2 = 1 / s2;
      super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i2, -s2, 0, -i2, s2, 0, i2, -s2, 0, i2, s2, -i2, -s2, 0, -i2, s2, 0, i2, -s2, 0, i2, s2, 0, -s2, 0, -i2, s2, 0, -i2, -s2, 0, i2, s2, 0, i2], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t2, e2), this.type = "DodecahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _wh(t2.radius, t2.detail);
    }
  };
  var Mh = new Ti();
  var Sh = new Ti();
  var _h = new Ti();
  var Ah = new $r();
  var Th = class extends Wn {
    constructor(t2 = null, e2 = 1) {
      if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t2, thresholdAngle: e2 }, null !== t2) {
        const s2 = 4, i2 = Math.pow(10, s2), r2 = Math.cos(yi * e2), n2 = t2.getIndex(), a2 = t2.getAttribute("position"), o2 = n2 ? n2.count : a2.count, h2 = [0, 0, 0], l2 = ["a", "b", "c"], c2 = new Array(3), u2 = {}, d2 = [];
        for (let t3 = 0; t3 < o2; t3 += 3) {
          n2 ? (h2[0] = n2.getX(t3), h2[1] = n2.getX(t3 + 1), h2[2] = n2.getX(t3 + 2)) : (h2[0] = t3, h2[1] = t3 + 1, h2[2] = t3 + 2);
          const { a: e3, b: s3, c: o3 } = Ah;
          if (e3.fromBufferAttribute(a2, h2[0]), s3.fromBufferAttribute(a2, h2[1]), o3.fromBufferAttribute(a2, h2[2]), Ah.getNormal(_h), c2[0] = `${Math.round(e3.x * i2)},${Math.round(e3.y * i2)},${Math.round(e3.z * i2)}`, c2[1] = `${Math.round(s3.x * i2)},${Math.round(s3.y * i2)},${Math.round(s3.z * i2)}`, c2[2] = `${Math.round(o3.x * i2)},${Math.round(o3.y * i2)},${Math.round(o3.z * i2)}`, c2[0] !== c2[1] && c2[1] !== c2[2] && c2[2] !== c2[0]) for (let t4 = 0; t4 < 3; t4++) {
            const e4 = (t4 + 1) % 3, s4 = c2[t4], i3 = c2[e4], n3 = Ah[l2[t4]], a3 = Ah[l2[e4]], o4 = `${s4}_${i3}`, p2 = `${i3}_${s4}`;
            p2 in u2 && u2[p2] ? (_h.dot(u2[p2].normal) <= r2 && (d2.push(n3.x, n3.y, n3.z), d2.push(a3.x, a3.y, a3.z)), u2[p2] = null) : o4 in u2 || (u2[o4] = { index0: h2[t4], index1: h2[e4], normal: _h.clone() });
          }
        }
        for (const t3 in u2) if (u2[t3]) {
          const { index0: e3, index1: s3 } = u2[t3];
          Mh.fromBufferAttribute(a2, e3), Sh.fromBufferAttribute(a2, s3), d2.push(Mh.x, Mh.y, Mh.z), d2.push(Sh.x, Sh.y, Sh.z);
        }
        this.setAttribute("position", new kn(d2, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  var zh = class {
    constructor() {
      this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
    }
    getPoint() {
      ai("Curve: .getPoint() not implemented.");
    }
    getPointAt(t2, e2) {
      const s2 = this.getUtoTmapping(t2);
      return this.getPoint(s2, e2);
    }
    getPoints(t2 = 5) {
      const e2 = [];
      for (let s2 = 0; s2 <= t2; s2++) e2.push(this.getPoint(s2 / t2));
      return e2;
    }
    getSpacedPoints(t2 = 5) {
      const e2 = [];
      for (let s2 = 0; s2 <= t2; s2++) e2.push(this.getPointAt(s2 / t2));
      return e2;
    }
    getLength() {
      const t2 = this.getLengths();
      return t2[t2.length - 1];
    }
    getLengths(t2 = this.arcLengthDivisions) {
      if (this.cacheArcLengths && this.cacheArcLengths.length === t2 + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = false;
      const e2 = [];
      let s2, i2 = this.getPoint(0), r2 = 0;
      e2.push(0);
      for (let n2 = 1; n2 <= t2; n2++) s2 = this.getPoint(n2 / t2), r2 += s2.distanceTo(i2), e2.push(r2), i2 = s2;
      return this.cacheArcLengths = e2, e2;
    }
    updateArcLengths() {
      this.needsUpdate = true, this.getLengths();
    }
    getUtoTmapping(t2, e2 = null) {
      const s2 = this.getLengths();
      let i2 = 0;
      const r2 = s2.length;
      let n2;
      n2 = e2 || t2 * s2[r2 - 1];
      let a2, o2 = 0, h2 = r2 - 1;
      for (; o2 <= h2; ) if (i2 = Math.floor(o2 + (h2 - o2) / 2), a2 = s2[i2] - n2, a2 < 0) o2 = i2 + 1;
      else {
        if (!(a2 > 0)) {
          h2 = i2;
          break;
        }
        h2 = i2 - 1;
      }
      if (i2 = h2, s2[i2] === n2) return i2 / (r2 - 1);
      const l2 = s2[i2];
      return (i2 + (n2 - l2) / (s2[i2 + 1] - l2)) / (r2 - 1);
    }
    getTangent(t2, e2) {
      const s2 = 1e-4;
      let i2 = t2 - s2, r2 = t2 + s2;
      i2 < 0 && (i2 = 0), r2 > 1 && (r2 = 1);
      const n2 = this.getPoint(i2), a2 = this.getPoint(r2), o2 = e2 || (n2.isVector2 ? new _i() : new Ti());
      return o2.copy(a2).sub(n2).normalize(), o2;
    }
    getTangentAt(t2, e2) {
      const s2 = this.getUtoTmapping(t2);
      return this.getTangent(s2, e2);
    }
    computeFrenetFrames(t2, e2 = false) {
      const s2 = new Ti(), i2 = [], r2 = [], n2 = [], a2 = new Ti(), o2 = new Qi();
      for (let e3 = 0; e3 <= t2; e3++) {
        const s3 = e3 / t2;
        i2[e3] = this.getTangentAt(s3, new Ti());
      }
      r2[0] = new Ti(), n2[0] = new Ti();
      let h2 = Number.MAX_VALUE;
      const l2 = Math.abs(i2[0].x), c2 = Math.abs(i2[0].y), u2 = Math.abs(i2[0].z);
      l2 <= h2 && (h2 = l2, s2.set(1, 0, 0)), c2 <= h2 && (h2 = c2, s2.set(0, 1, 0)), u2 <= h2 && s2.set(0, 0, 1), a2.crossVectors(i2[0], s2).normalize(), r2[0].crossVectors(i2[0], a2), n2[0].crossVectors(i2[0], r2[0]);
      for (let e3 = 1; e3 <= t2; e3++) {
        if (r2[e3] = r2[e3 - 1].clone(), n2[e3] = n2[e3 - 1].clone(), a2.crossVectors(i2[e3 - 1], i2[e3]), a2.length() > Number.EPSILON) {
          a2.normalize();
          const t3 = Math.acos(xi(i2[e3 - 1].dot(i2[e3]), -1, 1));
          r2[e3].applyMatrix4(o2.makeRotationAxis(a2, t3));
        }
        n2[e3].crossVectors(i2[e3], r2[e3]);
      }
      if (true === e2) {
        let e3 = Math.acos(xi(r2[0].dot(r2[t2]), -1, 1));
        e3 /= t2, i2[0].dot(a2.crossVectors(r2[0], r2[t2])) > 0 && (e3 = -e3);
        for (let s3 = 1; s3 <= t2; s3++) r2[s3].applyMatrix4(o2.makeRotationAxis(i2[s3], e3 * s3)), n2[s3].crossVectors(i2[s3], r2[s3]);
      }
      return { tangents: i2, normals: r2, binormals: n2 };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.arcLengthDivisions = t2.arcLengthDivisions, this;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" } };
      return t2.arcLengthDivisions = this.arcLengthDivisions, t2.type = this.type, t2;
    }
    fromJSON(t2) {
      return this.arcLengthDivisions = t2.arcLengthDivisions, this;
    }
  };
  var Ch = class extends zh {
    constructor(t2 = 0, e2 = 0, s2 = 1, i2 = 1, r2 = 0, n2 = 2 * Math.PI, a2 = false, o2 = 0) {
      super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = t2, this.aY = e2, this.xRadius = s2, this.yRadius = i2, this.aStartAngle = r2, this.aEndAngle = n2, this.aClockwise = a2, this.aRotation = o2;
    }
    getPoint(t2, e2 = new _i()) {
      const s2 = e2, i2 = 2 * Math.PI;
      let r2 = this.aEndAngle - this.aStartAngle;
      const n2 = Math.abs(r2) < Number.EPSILON;
      for (; r2 < 0; ) r2 += i2;
      for (; r2 > i2; ) r2 -= i2;
      r2 < Number.EPSILON && (r2 = n2 ? 0 : i2), true !== this.aClockwise || n2 || (r2 === i2 ? r2 = -i2 : r2 -= i2);
      const a2 = this.aStartAngle + t2 * r2;
      let o2 = this.aX + this.xRadius * Math.cos(a2), h2 = this.aY + this.yRadius * Math.sin(a2);
      if (0 !== this.aRotation) {
        const t3 = Math.cos(this.aRotation), e3 = Math.sin(this.aRotation), s3 = o2 - this.aX, i3 = h2 - this.aY;
        o2 = s3 * t3 - i3 * e3 + this.aX, h2 = s3 * e3 + i3 * t3 + this.aY;
      }
      return s2.set(o2, h2);
    }
    copy(t2) {
      return super.copy(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.aX = this.aX, t2.aY = this.aY, t2.xRadius = this.xRadius, t2.yRadius = this.yRadius, t2.aStartAngle = this.aStartAngle, t2.aEndAngle = this.aEndAngle, t2.aClockwise = this.aClockwise, t2.aRotation = this.aRotation, t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
    }
  };
  var Ih = class extends Ch {
    constructor(t2, e2, s2, i2, r2, n2) {
      super(t2, e2, s2, s2, i2, r2, n2), this.isArcCurve = true, this.type = "ArcCurve";
    }
  };
  function Bh() {
    let t2 = 0, e2 = 0, s2 = 0, i2 = 0;
    function r2(r3, n2, a2, o2) {
      t2 = r3, e2 = a2, s2 = -3 * r3 + 3 * n2 - 2 * a2 - o2, i2 = 2 * r3 - 2 * n2 + a2 + o2;
    }
    return { initCatmullRom: function(t3, e3, s3, i3, n2) {
      r2(e3, s3, n2 * (s3 - t3), n2 * (i3 - e3));
    }, initNonuniformCatmullRom: function(t3, e3, s3, i3, n2, a2, o2) {
      let h2 = (e3 - t3) / n2 - (s3 - t3) / (n2 + a2) + (s3 - e3) / a2, l2 = (s3 - e3) / a2 - (i3 - e3) / (a2 + o2) + (i3 - s3) / o2;
      h2 *= a2, l2 *= a2, r2(e3, s3, h2, l2);
    }, calc: function(r3) {
      const n2 = r3 * r3;
      return t2 + e2 * r3 + s2 * n2 + i2 * (n2 * r3);
    } };
  }
  var kh = new Ti();
  var Oh = new Ti();
  var Ph = new Bh();
  var Rh = new Bh();
  var Eh = new Bh();
  var Nh = class extends zh {
    constructor(t2 = [], e2 = false, s2 = "centripetal", i2 = 0.5) {
      super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = t2, this.closed = e2, this.curveType = s2, this.tension = i2;
    }
    getPoint(t2, e2 = new Ti()) {
      const s2 = e2, i2 = this.points, r2 = i2.length, n2 = (r2 - (this.closed ? 0 : 1)) * t2;
      let a2, o2, h2 = Math.floor(n2), l2 = n2 - h2;
      this.closed ? h2 += h2 > 0 ? 0 : (Math.floor(Math.abs(h2) / r2) + 1) * r2 : 0 === l2 && h2 === r2 - 1 && (h2 = r2 - 2, l2 = 1), this.closed || h2 > 0 ? a2 = i2[(h2 - 1) % r2] : (Oh.subVectors(i2[0], i2[1]).add(i2[0]), a2 = Oh);
      const c2 = i2[h2 % r2], u2 = i2[(h2 + 1) % r2];
      if (this.closed || h2 + 2 < r2 ? o2 = i2[(h2 + 2) % r2] : (kh.subVectors(i2[r2 - 1], i2[r2 - 2]).add(i2[r2 - 1]), o2 = kh), "centripetal" === this.curveType || "chordal" === this.curveType) {
        const t3 = "chordal" === this.curveType ? 0.5 : 0.25;
        let e3 = Math.pow(a2.distanceToSquared(c2), t3), s3 = Math.pow(c2.distanceToSquared(u2), t3), i3 = Math.pow(u2.distanceToSquared(o2), t3);
        s3 < 1e-4 && (s3 = 1), e3 < 1e-4 && (e3 = s3), i3 < 1e-4 && (i3 = s3), Ph.initNonuniformCatmullRom(a2.x, c2.x, u2.x, o2.x, e3, s3, i3), Rh.initNonuniformCatmullRom(a2.y, c2.y, u2.y, o2.y, e3, s3, i3), Eh.initNonuniformCatmullRom(a2.z, c2.z, u2.z, o2.z, e3, s3, i3);
      } else "catmullrom" === this.curveType && (Ph.initCatmullRom(a2.x, c2.x, u2.x, o2.x, this.tension), Rh.initCatmullRom(a2.y, c2.y, u2.y, o2.y, this.tension), Eh.initCatmullRom(a2.z, c2.z, u2.z, o2.z, this.tension));
      return s2.set(Ph.calc(l2), Rh.calc(l2), Eh.calc(l2)), s2;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e2 = 0, s2 = t2.points.length; e2 < s2; e2++) {
        const s3 = t2.points[e2];
        this.points.push(s3.clone());
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e2 = 0, s2 = this.points.length; e2 < s2; e2++) {
        const s3 = this.points[e2];
        t2.points.push(s3.toArray());
      }
      return t2.closed = this.closed, t2.curveType = this.curveType, t2.tension = this.tension, t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e2 = 0, s2 = t2.points.length; e2 < s2; e2++) {
        const s3 = t2.points[e2];
        this.points.push(new Ti().fromArray(s3));
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
  };
  function Vh(t2, e2, s2, i2, r2) {
    const n2 = 0.5 * (i2 - e2), a2 = 0.5 * (r2 - s2), o2 = t2 * t2;
    return (2 * s2 - 2 * i2 + n2 + a2) * (t2 * o2) + (-3 * s2 + 3 * i2 - 2 * n2 - a2) * o2 + n2 * t2 + s2;
  }
  function Lh(t2, e2, s2, i2) {
    return (function(t3, e3) {
      const s3 = 1 - t3;
      return s3 * s3 * e3;
    })(t2, e2) + (function(t3, e3) {
      return 2 * (1 - t3) * t3 * e3;
    })(t2, s2) + (function(t3, e3) {
      return t3 * t3 * e3;
    })(t2, i2);
  }
  function Fh(t2, e2, s2, i2, r2) {
    return (function(t3, e3) {
      const s3 = 1 - t3;
      return s3 * s3 * s3 * e3;
    })(t2, e2) + (function(t3, e3) {
      const s3 = 1 - t3;
      return 3 * s3 * s3 * t3 * e3;
    })(t2, s2) + (function(t3, e3) {
      return 3 * (1 - t3) * t3 * t3 * e3;
    })(t2, i2) + (function(t3, e3) {
      return t3 * t3 * t3 * e3;
    })(t2, r2);
  }
  var Dh = class extends zh {
    constructor(t2 = new _i(), e2 = new _i(), s2 = new _i(), i2 = new _i()) {
      super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = t2, this.v1 = e2, this.v2 = s2, this.v3 = i2;
    }
    getPoint(t2, e2 = new _i()) {
      const s2 = e2, i2 = this.v0, r2 = this.v1, n2 = this.v2, a2 = this.v3;
      return s2.set(Fh(t2, i2.x, r2.x, n2.x, a2.x), Fh(t2, i2.y, r2.y, n2.y, a2.y)), s2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
    }
  };
  var Uh = class extends zh {
    constructor(t2 = new Ti(), e2 = new Ti(), s2 = new Ti(), i2 = new Ti()) {
      super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = t2, this.v1 = e2, this.v2 = s2, this.v3 = i2;
    }
    getPoint(t2, e2 = new Ti()) {
      const s2 = e2, i2 = this.v0, r2 = this.v1, n2 = this.v2, a2 = this.v3;
      return s2.set(Fh(t2, i2.x, r2.x, n2.x, a2.x), Fh(t2, i2.y, r2.y, n2.y, a2.y), Fh(t2, i2.z, r2.z, n2.z, a2.z)), s2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
    }
  };
  var jh = class extends zh {
    constructor(t2 = new _i(), e2 = new _i()) {
      super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = t2, this.v2 = e2;
    }
    getPoint(t2, e2 = new _i()) {
      const s2 = e2;
      return 1 === t2 ? s2.copy(this.v2) : (s2.copy(this.v2).sub(this.v1), s2.multiplyScalar(t2).add(this.v1)), s2;
    }
    getPointAt(t2, e2) {
      return this.getPoint(t2, e2);
    }
    getTangent(t2, e2 = new _i()) {
      return e2.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e2) {
      return this.getTangent(t2, e2);
    }
    copy(t2) {
      return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var Wh = class extends zh {
    constructor(t2 = new Ti(), e2 = new Ti()) {
      super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = t2, this.v2 = e2;
    }
    getPoint(t2, e2 = new Ti()) {
      const s2 = e2;
      return 1 === t2 ? s2.copy(this.v2) : (s2.copy(this.v2).sub(this.v1), s2.multiplyScalar(t2).add(this.v1)), s2;
    }
    getPointAt(t2, e2) {
      return this.getPoint(t2, e2);
    }
    getTangent(t2, e2 = new Ti()) {
      return e2.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e2) {
      return this.getTangent(t2, e2);
    }
    copy(t2) {
      return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var Jh = class extends zh {
    constructor(t2 = new _i(), e2 = new _i(), s2 = new _i()) {
      super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = t2, this.v1 = e2, this.v2 = s2;
    }
    getPoint(t2, e2 = new _i()) {
      const s2 = e2, i2 = this.v0, r2 = this.v1, n2 = this.v2;
      return s2.set(Lh(t2, i2.x, r2.x, n2.x), Lh(t2, i2.y, r2.y, n2.y)), s2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var qh = class extends zh {
    constructor(t2 = new Ti(), e2 = new Ti(), s2 = new Ti()) {
      super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = t2, this.v1 = e2, this.v2 = s2;
    }
    getPoint(t2, e2 = new Ti()) {
      const s2 = e2, i2 = this.v0, r2 = this.v1, n2 = this.v2;
      return s2.set(Lh(t2, i2.x, r2.x, n2.x), Lh(t2, i2.y, r2.y, n2.y), Lh(t2, i2.z, r2.z, n2.z)), s2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var Hh = class extends zh {
    constructor(t2 = []) {
      super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = t2;
    }
    getPoint(t2, e2 = new _i()) {
      const s2 = e2, i2 = this.points, r2 = (i2.length - 1) * t2, n2 = Math.floor(r2), a2 = r2 - n2, o2 = i2[0 === n2 ? n2 : n2 - 1], h2 = i2[n2], l2 = i2[n2 > i2.length - 2 ? i2.length - 1 : n2 + 1], c2 = i2[n2 > i2.length - 3 ? i2.length - 1 : n2 + 2];
      return s2.set(Vh(a2, o2.x, h2.x, l2.x, c2.x), Vh(a2, o2.y, h2.y, l2.y, c2.y)), s2;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e2 = 0, s2 = t2.points.length; e2 < s2; e2++) {
        const s3 = t2.points[e2];
        this.points.push(s3.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e2 = 0, s2 = this.points.length; e2 < s2; e2++) {
        const s3 = this.points[e2];
        t2.points.push(s3.toArray());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e2 = 0, s2 = t2.points.length; e2 < s2; e2++) {
        const s3 = t2.points[e2];
        this.points.push(new _i().fromArray(s3));
      }
      return this;
    }
  };
  var Xh = Object.freeze({ __proto__: null, ArcCurve: Ih, CatmullRomCurve3: Nh, CubicBezierCurve: Dh, CubicBezierCurve3: Uh, EllipseCurve: Ch, LineCurve: jh, LineCurve3: Wh, QuadraticBezierCurve: Jh, QuadraticBezierCurve3: qh, SplineCurve: Hh });
  var Yh = class extends zh {
    constructor() {
      super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
    }
    add(t2) {
      this.curves.push(t2);
    }
    closePath() {
      const t2 = this.curves[0].getPoint(0), e2 = this.curves[this.curves.length - 1].getPoint(1);
      if (!t2.equals(e2)) {
        const s2 = true === t2.isVector2 ? "LineCurve" : "LineCurve3";
        this.curves.push(new Xh[s2](e2, t2));
      }
      return this;
    }
    getPoint(t2, e2) {
      const s2 = t2 * this.getLength(), i2 = this.getCurveLengths();
      let r2 = 0;
      for (; r2 < i2.length; ) {
        if (i2[r2] >= s2) {
          const t3 = i2[r2] - s2, n2 = this.curves[r2], a2 = n2.getLength(), o2 = 0 === a2 ? 0 : 1 - t3 / a2;
          return n2.getPointAt(o2, e2);
        }
        r2++;
      }
      return null;
    }
    getLength() {
      const t2 = this.getCurveLengths();
      return t2[t2.length - 1];
    }
    updateArcLengths() {
      this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
      const t2 = [];
      let e2 = 0;
      for (let s2 = 0, i2 = this.curves.length; s2 < i2; s2++) e2 += this.curves[s2].getLength(), t2.push(e2);
      return this.cacheLengths = t2, t2;
    }
    getSpacedPoints(t2 = 40) {
      const e2 = [];
      for (let s2 = 0; s2 <= t2; s2++) e2.push(this.getPoint(s2 / t2));
      return this.autoClose && e2.push(e2[0]), e2;
    }
    getPoints(t2 = 12) {
      const e2 = [];
      let s2;
      for (let i2 = 0, r2 = this.curves; i2 < r2.length; i2++) {
        const n2 = r2[i2], a2 = n2.isEllipseCurve ? 2 * t2 : n2.isLineCurve || n2.isLineCurve3 ? 1 : n2.isSplineCurve ? t2 * n2.points.length : t2, o2 = n2.getPoints(a2);
        for (let t3 = 0; t3 < o2.length; t3++) {
          const i3 = o2[t3];
          s2 && s2.equals(i3) || (e2.push(i3), s2 = i3);
        }
      }
      return this.autoClose && e2.length > 1 && !e2[e2.length - 1].equals(e2[0]) && e2.push(e2[0]), e2;
    }
    copy(t2) {
      super.copy(t2), this.curves = [];
      for (let e2 = 0, s2 = t2.curves.length; e2 < s2; e2++) {
        const s3 = t2.curves[e2];
        this.curves.push(s3.clone());
      }
      return this.autoClose = t2.autoClose, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.autoClose = this.autoClose, t2.curves = [];
      for (let e2 = 0, s2 = this.curves.length; e2 < s2; e2++) {
        const s3 = this.curves[e2];
        t2.curves.push(s3.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.autoClose = t2.autoClose, this.curves = [];
      for (let e2 = 0, s2 = t2.curves.length; e2 < s2; e2++) {
        const s3 = t2.curves[e2];
        this.curves.push(new Xh[s3.type]().fromJSON(s3));
      }
      return this;
    }
  };
  var Zh = class extends Yh {
    constructor(t2) {
      super(), this.type = "Path", this.currentPoint = new _i(), t2 && this.setFromPoints(t2);
    }
    setFromPoints(t2) {
      this.moveTo(t2[0].x, t2[0].y);
      for (let e2 = 1, s2 = t2.length; e2 < s2; e2++) this.lineTo(t2[e2].x, t2[e2].y);
      return this;
    }
    moveTo(t2, e2) {
      return this.currentPoint.set(t2, e2), this;
    }
    lineTo(t2, e2) {
      const s2 = new jh(this.currentPoint.clone(), new _i(t2, e2));
      return this.curves.push(s2), this.currentPoint.set(t2, e2), this;
    }
    quadraticCurveTo(t2, e2, s2, i2) {
      const r2 = new Jh(this.currentPoint.clone(), new _i(t2, e2), new _i(s2, i2));
      return this.curves.push(r2), this.currentPoint.set(s2, i2), this;
    }
    bezierCurveTo(t2, e2, s2, i2, r2, n2) {
      const a2 = new Dh(this.currentPoint.clone(), new _i(t2, e2), new _i(s2, i2), new _i(r2, n2));
      return this.curves.push(a2), this.currentPoint.set(r2, n2), this;
    }
    splineThru(t2) {
      const e2 = [this.currentPoint.clone()].concat(t2), s2 = new Hh(e2);
      return this.curves.push(s2), this.currentPoint.copy(t2[t2.length - 1]), this;
    }
    arc(t2, e2, s2, i2, r2, n2) {
      const a2 = this.currentPoint.x, o2 = this.currentPoint.y;
      return this.absarc(t2 + a2, e2 + o2, s2, i2, r2, n2), this;
    }
    absarc(t2, e2, s2, i2, r2, n2) {
      return this.absellipse(t2, e2, s2, s2, i2, r2, n2), this;
    }
    ellipse(t2, e2, s2, i2, r2, n2, a2, o2) {
      const h2 = this.currentPoint.x, l2 = this.currentPoint.y;
      return this.absellipse(t2 + h2, e2 + l2, s2, i2, r2, n2, a2, o2), this;
    }
    absellipse(t2, e2, s2, i2, r2, n2, a2, o2) {
      const h2 = new Ch(t2, e2, s2, i2, r2, n2, a2, o2);
      if (this.curves.length > 0) {
        const t3 = h2.getPoint(0);
        t3.equals(this.currentPoint) || this.lineTo(t3.x, t3.y);
      }
      this.curves.push(h2);
      const l2 = h2.getPoint(1);
      return this.currentPoint.copy(l2), this;
    }
    copy(t2) {
      return super.copy(t2), this.currentPoint.copy(t2.currentPoint), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.currentPoint = this.currentPoint.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.currentPoint.fromArray(t2.currentPoint), this;
    }
  };
  var Gh = class extends Zh {
    constructor(t2) {
      super(t2), this.uuid = fi(), this.type = "Shape", this.holes = [];
    }
    getPointsHoles(t2) {
      const e2 = [];
      for (let s2 = 0, i2 = this.holes.length; s2 < i2; s2++) e2[s2] = this.holes[s2].getPoints(t2);
      return e2;
    }
    extractPoints(t2) {
      return { shape: this.getPoints(t2), holes: this.getPointsHoles(t2) };
    }
    copy(t2) {
      super.copy(t2), this.holes = [];
      for (let e2 = 0, s2 = t2.holes.length; e2 < s2; e2++) {
        const s3 = t2.holes[e2];
        this.holes.push(s3.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.uuid = this.uuid, t2.holes = [];
      for (let e2 = 0, s2 = this.holes.length; e2 < s2; e2++) {
        const s3 = this.holes[e2];
        t2.holes.push(s3.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.uuid = t2.uuid, this.holes = [];
      for (let e2 = 0, s2 = t2.holes.length; e2 < s2; e2++) {
        const s3 = t2.holes[e2];
        this.holes.push(new Zh().fromJSON(s3));
      }
      return this;
    }
  };
  function $h(t2, e2, s2 = 2) {
    const i2 = e2 && e2.length, r2 = i2 ? e2[0] * s2 : t2.length;
    let n2 = Qh(t2, 0, r2, s2, true);
    const a2 = [];
    if (!n2 || n2.next === n2.prev) return a2;
    let o2, h2, l2;
    if (i2 && (n2 = (function(t3, e3, s3, i3) {
      const r3 = [];
      for (let s4 = 0, n3 = e3.length; s4 < n3; s4++) {
        const a3 = Qh(t3, e3[s4] * i3, s4 < n3 - 1 ? e3[s4 + 1] * i3 : t3.length, i3, false);
        a3 === a3.next && (a3.steiner = true), r3.push(ll(a3));
      }
      r3.sort(nl);
      for (let t4 = 0; t4 < r3.length; t4++) s3 = al(r3[t4], s3);
      return s3;
    })(t2, e2, n2, s2)), t2.length > 80 * s2) {
      o2 = t2[0], h2 = t2[1];
      let e3 = o2, i3 = h2;
      for (let n3 = s2; n3 < r2; n3 += s2) {
        const s3 = t2[n3], r3 = t2[n3 + 1];
        s3 < o2 && (o2 = s3), r3 < h2 && (h2 = r3), s3 > e3 && (e3 = s3), r3 > i3 && (i3 = r3);
      }
      l2 = Math.max(e3 - o2, i3 - h2), l2 = 0 !== l2 ? 32767 / l2 : 0;
    }
    return tl(n2, a2, s2, o2, h2, l2, 0), a2;
  }
  function Qh(t2, e2, s2, i2, r2) {
    let n2;
    if (r2 === (function(t3, e3, s3, i3) {
      let r3 = 0;
      for (let n3 = e3, a2 = s3 - i3; n3 < s3; n3 += i3) r3 += (t3[a2] - t3[n3]) * (t3[n3 + 1] + t3[a2 + 1]), a2 = n3;
      return r3;
    })(t2, e2, s2, i2) > 0) for (let r3 = e2; r3 < s2; r3 += i2) n2 = vl(r3 / i2 | 0, t2[r3], t2[r3 + 1], n2);
    else for (let r3 = s2 - i2; r3 >= e2; r3 -= i2) n2 = vl(r3 / i2 | 0, t2[r3], t2[r3 + 1], n2);
    return n2 && ml(n2, n2.next) && (wl(n2), n2 = n2.next), n2;
  }
  function Kh(t2, e2) {
    if (!t2) return t2;
    e2 || (e2 = t2);
    let s2, i2 = t2;
    do {
      if (s2 = false, i2.steiner || !ml(i2, i2.next) && 0 !== pl(i2.prev, i2, i2.next)) i2 = i2.next;
      else {
        if (wl(i2), i2 = e2 = i2.prev, i2 === i2.next) break;
        s2 = true;
      }
    } while (s2 || i2 !== e2);
    return e2;
  }
  function tl(t2, e2, s2, i2, r2, n2, a2) {
    if (!t2) return;
    !a2 && n2 && (function(t3, e3, s3, i3) {
      let r3 = t3;
      do {
        0 === r3.z && (r3.z = hl(r3.x, r3.y, e3, s3, i3)), r3.prevZ = r3.prev, r3.nextZ = r3.next, r3 = r3.next;
      } while (r3 !== t3);
      r3.prevZ.nextZ = null, r3.prevZ = null, (function(t4) {
        let e4, s4 = 1;
        do {
          let i4, r4 = t4;
          t4 = null;
          let n3 = null;
          for (e4 = 0; r4; ) {
            e4++;
            let a3 = r4, o3 = 0;
            for (let t5 = 0; t5 < s4 && (o3++, a3 = a3.nextZ, a3); t5++) ;
            let h2 = s4;
            for (; o3 > 0 || h2 > 0 && a3; ) 0 !== o3 && (0 === h2 || !a3 || r4.z <= a3.z) ? (i4 = r4, r4 = r4.nextZ, o3--) : (i4 = a3, a3 = a3.nextZ, h2--), n3 ? n3.nextZ = i4 : t4 = i4, i4.prevZ = n3, n3 = i4;
            r4 = a3;
          }
          n3.nextZ = null, s4 *= 2;
        } while (e4 > 1);
      })(r3);
    })(t2, i2, r2, n2);
    let o2 = t2;
    for (; t2.prev !== t2.next; ) {
      const h2 = t2.prev, l2 = t2.next;
      if (n2 ? sl(t2, i2, r2, n2) : el(t2)) e2.push(h2.i, t2.i, l2.i), wl(t2), t2 = l2.next, o2 = l2.next;
      else if ((t2 = l2) === o2) {
        a2 ? 1 === a2 ? tl(t2 = il(Kh(t2), e2), e2, s2, i2, r2, n2, 2) : 2 === a2 && rl(t2, e2, s2, i2, r2, n2) : tl(Kh(t2), e2, s2, i2, r2, n2, 1);
        break;
      }
    }
  }
  function el(t2) {
    const e2 = t2.prev, s2 = t2, i2 = t2.next;
    if (pl(e2, s2, i2) >= 0) return false;
    const r2 = e2.x, n2 = s2.x, a2 = i2.x, o2 = e2.y, h2 = s2.y, l2 = i2.y, c2 = Math.min(r2, n2, a2), u2 = Math.min(o2, h2, l2), d2 = Math.max(r2, n2, a2), p2 = Math.max(o2, h2, l2);
    let m2 = i2.next;
    for (; m2 !== e2; ) {
      if (m2.x >= c2 && m2.x <= d2 && m2.y >= u2 && m2.y <= p2 && ul(r2, o2, n2, h2, a2, l2, m2.x, m2.y) && pl(m2.prev, m2, m2.next) >= 0) return false;
      m2 = m2.next;
    }
    return true;
  }
  function sl(t2, e2, s2, i2) {
    const r2 = t2.prev, n2 = t2, a2 = t2.next;
    if (pl(r2, n2, a2) >= 0) return false;
    const o2 = r2.x, h2 = n2.x, l2 = a2.x, c2 = r2.y, u2 = n2.y, d2 = a2.y, p2 = Math.min(o2, h2, l2), m2 = Math.min(c2, u2, d2), y2 = Math.max(o2, h2, l2), g2 = Math.max(c2, u2, d2), f2 = hl(p2, m2, e2, s2, i2), x2 = hl(y2, g2, e2, s2, i2);
    let b2 = t2.prevZ, v2 = t2.nextZ;
    for (; b2 && b2.z >= f2 && v2 && v2.z <= x2; ) {
      if (b2.x >= p2 && b2.x <= y2 && b2.y >= m2 && b2.y <= g2 && b2 !== r2 && b2 !== a2 && ul(o2, c2, h2, u2, l2, d2, b2.x, b2.y) && pl(b2.prev, b2, b2.next) >= 0) return false;
      if (b2 = b2.prevZ, v2.x >= p2 && v2.x <= y2 && v2.y >= m2 && v2.y <= g2 && v2 !== r2 && v2 !== a2 && ul(o2, c2, h2, u2, l2, d2, v2.x, v2.y) && pl(v2.prev, v2, v2.next) >= 0) return false;
      v2 = v2.nextZ;
    }
    for (; b2 && b2.z >= f2; ) {
      if (b2.x >= p2 && b2.x <= y2 && b2.y >= m2 && b2.y <= g2 && b2 !== r2 && b2 !== a2 && ul(o2, c2, h2, u2, l2, d2, b2.x, b2.y) && pl(b2.prev, b2, b2.next) >= 0) return false;
      b2 = b2.prevZ;
    }
    for (; v2 && v2.z <= x2; ) {
      if (v2.x >= p2 && v2.x <= y2 && v2.y >= m2 && v2.y <= g2 && v2 !== r2 && v2 !== a2 && ul(o2, c2, h2, u2, l2, d2, v2.x, v2.y) && pl(v2.prev, v2, v2.next) >= 0) return false;
      v2 = v2.nextZ;
    }
    return true;
  }
  function il(t2, e2) {
    let s2 = t2;
    do {
      const i2 = s2.prev, r2 = s2.next.next;
      !ml(i2, r2) && yl(i2, s2, s2.next, r2) && xl(i2, r2) && xl(r2, i2) && (e2.push(i2.i, s2.i, r2.i), wl(s2), wl(s2.next), s2 = t2 = r2), s2 = s2.next;
    } while (s2 !== t2);
    return Kh(s2);
  }
  function rl(t2, e2, s2, i2, r2, n2) {
    let a2 = t2;
    do {
      let t3 = a2.next.next;
      for (; t3 !== a2.prev; ) {
        if (a2.i !== t3.i && dl(a2, t3)) {
          let o2 = bl(a2, t3);
          return a2 = Kh(a2, a2.next), o2 = Kh(o2, o2.next), tl(a2, e2, s2, i2, r2, n2, 0), void tl(o2, e2, s2, i2, r2, n2, 0);
        }
        t3 = t3.next;
      }
      a2 = a2.next;
    } while (a2 !== t2);
  }
  function nl(t2, e2) {
    let s2 = t2.x - e2.x;
    if (0 === s2 && (s2 = t2.y - e2.y, 0 === s2)) {
      s2 = (t2.next.y - t2.y) / (t2.next.x - t2.x) - (e2.next.y - e2.y) / (e2.next.x - e2.x);
    }
    return s2;
  }
  function al(t2, e2) {
    const s2 = (function(t3, e3) {
      let s3 = e3;
      const i3 = t3.x, r2 = t3.y;
      let n2, a2 = -1 / 0;
      if (ml(t3, s3)) return s3;
      do {
        if (ml(t3, s3.next)) return s3.next;
        if (r2 <= s3.y && r2 >= s3.next.y && s3.next.y !== s3.y) {
          const t4 = s3.x + (r2 - s3.y) * (s3.next.x - s3.x) / (s3.next.y - s3.y);
          if (t4 <= i3 && t4 > a2 && (a2 = t4, n2 = s3.x < s3.next.x ? s3 : s3.next, t4 === i3)) return n2;
        }
        s3 = s3.next;
      } while (s3 !== e3);
      if (!n2) return null;
      const o2 = n2, h2 = n2.x, l2 = n2.y;
      let c2 = 1 / 0;
      s3 = n2;
      do {
        if (i3 >= s3.x && s3.x >= h2 && i3 !== s3.x && cl(r2 < l2 ? i3 : a2, r2, h2, l2, r2 < l2 ? a2 : i3, r2, s3.x, s3.y)) {
          const e4 = Math.abs(r2 - s3.y) / (i3 - s3.x);
          xl(s3, t3) && (e4 < c2 || e4 === c2 && (s3.x > n2.x || s3.x === n2.x && ol(n2, s3))) && (n2 = s3, c2 = e4);
        }
        s3 = s3.next;
      } while (s3 !== o2);
      return n2;
    })(t2, e2);
    if (!s2) return e2;
    const i2 = bl(s2, t2);
    return Kh(i2, i2.next), Kh(s2, s2.next);
  }
  function ol(t2, e2) {
    return pl(t2.prev, t2, e2.prev) < 0 && pl(e2.next, t2, t2.next) < 0;
  }
  function hl(t2, e2, s2, i2, r2) {
    return (t2 = 1431655765 & ((t2 = 858993459 & ((t2 = 252645135 & ((t2 = 16711935 & ((t2 = (t2 - s2) * r2 | 0) | t2 << 8)) | t2 << 4)) | t2 << 2)) | t2 << 1)) | (e2 = 1431655765 & ((e2 = 858993459 & ((e2 = 252645135 & ((e2 = 16711935 & ((e2 = (e2 - i2) * r2 | 0) | e2 << 8)) | e2 << 4)) | e2 << 2)) | e2 << 1)) << 1;
  }
  function ll(t2) {
    let e2 = t2, s2 = t2;
    do {
      (e2.x < s2.x || e2.x === s2.x && e2.y < s2.y) && (s2 = e2), e2 = e2.next;
    } while (e2 !== t2);
    return s2;
  }
  function cl(t2, e2, s2, i2, r2, n2, a2, o2) {
    return (r2 - a2) * (e2 - o2) >= (t2 - a2) * (n2 - o2) && (t2 - a2) * (i2 - o2) >= (s2 - a2) * (e2 - o2) && (s2 - a2) * (n2 - o2) >= (r2 - a2) * (i2 - o2);
  }
  function ul(t2, e2, s2, i2, r2, n2, a2, o2) {
    return !(t2 === a2 && e2 === o2) && cl(t2, e2, s2, i2, r2, n2, a2, o2);
  }
  function dl(t2, e2) {
    return t2.next.i !== e2.i && t2.prev.i !== e2.i && !(function(t3, e3) {
      let s2 = t3;
      do {
        if (s2.i !== t3.i && s2.next.i !== t3.i && s2.i !== e3.i && s2.next.i !== e3.i && yl(s2, s2.next, t3, e3)) return true;
        s2 = s2.next;
      } while (s2 !== t3);
      return false;
    })(t2, e2) && (xl(t2, e2) && xl(e2, t2) && (function(t3, e3) {
      let s2 = t3, i2 = false;
      const r2 = (t3.x + e3.x) / 2, n2 = (t3.y + e3.y) / 2;
      do {
        s2.y > n2 != s2.next.y > n2 && s2.next.y !== s2.y && r2 < (s2.next.x - s2.x) * (n2 - s2.y) / (s2.next.y - s2.y) + s2.x && (i2 = !i2), s2 = s2.next;
      } while (s2 !== t3);
      return i2;
    })(t2, e2) && (pl(t2.prev, t2, e2.prev) || pl(t2, e2.prev, e2)) || ml(t2, e2) && pl(t2.prev, t2, t2.next) > 0 && pl(e2.prev, e2, e2.next) > 0);
  }
  function pl(t2, e2, s2) {
    return (e2.y - t2.y) * (s2.x - e2.x) - (e2.x - t2.x) * (s2.y - e2.y);
  }
  function ml(t2, e2) {
    return t2.x === e2.x && t2.y === e2.y;
  }
  function yl(t2, e2, s2, i2) {
    const r2 = fl(pl(t2, e2, s2)), n2 = fl(pl(t2, e2, i2)), a2 = fl(pl(s2, i2, t2)), o2 = fl(pl(s2, i2, e2));
    return r2 !== n2 && a2 !== o2 || (!(0 !== r2 || !gl(t2, s2, e2)) || (!(0 !== n2 || !gl(t2, i2, e2)) || (!(0 !== a2 || !gl(s2, t2, i2)) || !(0 !== o2 || !gl(s2, e2, i2)))));
  }
  function gl(t2, e2, s2) {
    return e2.x <= Math.max(t2.x, s2.x) && e2.x >= Math.min(t2.x, s2.x) && e2.y <= Math.max(t2.y, s2.y) && e2.y >= Math.min(t2.y, s2.y);
  }
  function fl(t2) {
    return t2 > 0 ? 1 : t2 < 0 ? -1 : 0;
  }
  function xl(t2, e2) {
    return pl(t2.prev, t2, t2.next) < 0 ? pl(t2, e2, t2.next) >= 0 && pl(t2, t2.prev, e2) >= 0 : pl(t2, e2, t2.prev) < 0 || pl(t2, t2.next, e2) < 0;
  }
  function bl(t2, e2) {
    const s2 = Ml(t2.i, t2.x, t2.y), i2 = Ml(e2.i, e2.x, e2.y), r2 = t2.next, n2 = e2.prev;
    return t2.next = e2, e2.prev = t2, s2.next = r2, r2.prev = s2, i2.next = s2, s2.prev = i2, n2.next = i2, i2.prev = n2, i2;
  }
  function vl(t2, e2, s2, i2) {
    const r2 = Ml(t2, e2, s2);
    return i2 ? (r2.next = i2.next, r2.prev = i2, i2.next.prev = r2, i2.next = r2) : (r2.prev = r2, r2.next = r2), r2;
  }
  function wl(t2) {
    t2.next.prev = t2.prev, t2.prev.next = t2.next, t2.prevZ && (t2.prevZ.nextZ = t2.nextZ), t2.nextZ && (t2.nextZ.prevZ = t2.prevZ);
  }
  function Ml(t2, e2, s2) {
    return { i: t2, x: e2, y: s2, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: false };
  }
  var Sl = class {
    static triangulate(t2, e2, s2 = 2) {
      return $h(t2, e2, s2);
    }
  };
  var _l = class __l {
    static area(t2) {
      const e2 = t2.length;
      let s2 = 0;
      for (let i2 = e2 - 1, r2 = 0; r2 < e2; i2 = r2++) s2 += t2[i2].x * t2[r2].y - t2[r2].x * t2[i2].y;
      return 0.5 * s2;
    }
    static isClockWise(t2) {
      return __l.area(t2) < 0;
    }
    static triangulateShape(t2, e2) {
      const s2 = [], i2 = [], r2 = [];
      Al(t2), Tl(s2, t2);
      let n2 = t2.length;
      e2.forEach(Al);
      for (let t3 = 0; t3 < e2.length; t3++) i2.push(n2), n2 += e2[t3].length, Tl(s2, e2[t3]);
      const a2 = Sl.triangulate(s2, i2);
      for (let t3 = 0; t3 < a2.length; t3 += 3) r2.push(a2.slice(t3, t3 + 3));
      return r2;
    }
  };
  function Al(t2) {
    const e2 = t2.length;
    e2 > 2 && t2[e2 - 1].equals(t2[0]) && t2.pop();
  }
  function Tl(t2, e2) {
    for (let s2 = 0; s2 < e2.length; s2++) t2.push(e2[s2].x), t2.push(e2[s2].y);
  }
  var zl = class _zl extends Wn {
    constructor(t2 = new Gh([new _i(0.5, 0.5), new _i(-0.5, 0.5), new _i(-0.5, -0.5), new _i(0.5, -0.5)]), e2 = {}) {
      super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t2, options: e2 }, t2 = Array.isArray(t2) ? t2 : [t2];
      const s2 = this, i2 = [], r2 = [];
      for (let e3 = 0, s3 = t2.length; e3 < s3; e3++) {
        n2(t2[e3]);
      }
      function n2(t3) {
        const n3 = [], a2 = void 0 !== e2.curveSegments ? e2.curveSegments : 12, o2 = void 0 !== e2.steps ? e2.steps : 1, h2 = void 0 !== e2.depth ? e2.depth : 1;
        let l2 = void 0 === e2.bevelEnabled || e2.bevelEnabled, c2 = void 0 !== e2.bevelThickness ? e2.bevelThickness : 0.2, u2 = void 0 !== e2.bevelSize ? e2.bevelSize : c2 - 0.1, d2 = void 0 !== e2.bevelOffset ? e2.bevelOffset : 0, p2 = void 0 !== e2.bevelSegments ? e2.bevelSegments : 3;
        const m2 = e2.extrudePath, y2 = void 0 !== e2.UVGenerator ? e2.UVGenerator : Cl;
        let g2, f2, x2, b2, v2, w2 = false;
        if (m2) {
          g2 = m2.getSpacedPoints(o2), w2 = true, l2 = false;
          const t4 = !!m2.isCatmullRomCurve3 && m2.closed;
          f2 = m2.computeFrenetFrames(o2, t4), x2 = new Ti(), b2 = new Ti(), v2 = new Ti();
        }
        l2 || (p2 = 0, c2 = 0, u2 = 0, d2 = 0);
        const M2 = t3.extractPoints(a2);
        let S2 = M2.shape;
        const _2 = M2.holes;
        if (!_l.isClockWise(S2)) {
          S2 = S2.reverse();
          for (let t4 = 0, e3 = _2.length; t4 < e3; t4++) {
            const e4 = _2[t4];
            _l.isClockWise(e4) && (_2[t4] = e4.reverse());
          }
        }
        function A2(t4) {
          const e3 = 1e-10 * 1e-10;
          let s3 = t4[0];
          for (let i3 = 1; i3 <= t4.length; i3++) {
            const r3 = i3 % t4.length, n4 = t4[r3], a3 = n4.x - s3.x, o3 = n4.y - s3.y, h3 = a3 * a3 + o3 * o3, l3 = Math.max(Math.abs(n4.x), Math.abs(n4.y), Math.abs(s3.x), Math.abs(s3.y));
            h3 <= e3 * l3 * l3 ? (t4.splice(r3, 1), i3--) : s3 = n4;
          }
        }
        A2(S2), _2.forEach(A2);
        const T2 = _2.length, z2 = S2;
        for (let t4 = 0; t4 < T2; t4++) {
          const e3 = _2[t4];
          S2 = S2.concat(e3);
        }
        function C2(t4, e3, s3) {
          return e3 || oi("ExtrudeGeometry: vec does not exist"), t4.clone().addScaledVector(e3, s3);
        }
        const I2 = S2.length;
        function B2(t4, e3, s3) {
          let i3, r3, n4;
          const a3 = t4.x - e3.x, o3 = t4.y - e3.y, h3 = s3.x - t4.x, l3 = s3.y - t4.y, c3 = a3 * a3 + o3 * o3, u3 = a3 * l3 - o3 * h3;
          if (Math.abs(u3) > Number.EPSILON) {
            const u4 = Math.sqrt(c3), d3 = Math.sqrt(h3 * h3 + l3 * l3), p3 = e3.x - o3 / u4, m3 = e3.y + a3 / u4, y3 = ((s3.x - l3 / d3 - p3) * l3 - (s3.y + h3 / d3 - m3) * h3) / (a3 * l3 - o3 * h3);
            i3 = p3 + a3 * y3 - t4.x, r3 = m3 + o3 * y3 - t4.y;
            const g3 = i3 * i3 + r3 * r3;
            if (g3 <= 2) return new _i(i3, r3);
            n4 = Math.sqrt(g3 / 2);
          } else {
            let t5 = false;
            a3 > Number.EPSILON ? h3 > Number.EPSILON && (t5 = true) : a3 < -Number.EPSILON ? h3 < -Number.EPSILON && (t5 = true) : Math.sign(o3) === Math.sign(l3) && (t5 = true), t5 ? (i3 = -o3, r3 = a3, n4 = Math.sqrt(c3)) : (i3 = a3, r3 = o3, n4 = Math.sqrt(c3 / 2));
          }
          return new _i(i3 / n4, r3 / n4);
        }
        const k2 = [];
        for (let t4 = 0, e3 = z2.length, s3 = e3 - 1, i3 = t4 + 1; t4 < e3; t4++, s3++, i3++) s3 === e3 && (s3 = 0), i3 === e3 && (i3 = 0), k2[t4] = B2(z2[t4], z2[s3], z2[i3]);
        const O2 = [];
        let P2, R2, E2 = k2.concat();
        for (let t4 = 0, e3 = T2; t4 < e3; t4++) {
          const e4 = _2[t4];
          P2 = [];
          for (let t5 = 0, s3 = e4.length, i3 = s3 - 1, r3 = t5 + 1; t5 < s3; t5++, i3++, r3++) i3 === s3 && (i3 = 0), r3 === s3 && (r3 = 0), P2[t5] = B2(e4[t5], e4[i3], e4[r3]);
          O2.push(P2), E2 = E2.concat(P2);
        }
        if (0 === p2) R2 = _l.triangulateShape(z2, _2);
        else {
          const t4 = [], e3 = [];
          for (let s3 = 0; s3 < p2; s3++) {
            const i3 = s3 / p2, r3 = c2 * Math.cos(i3 * Math.PI / 2), n4 = u2 * Math.sin(i3 * Math.PI / 2) + d2;
            for (let e4 = 0, s4 = z2.length; e4 < s4; e4++) {
              const s5 = C2(z2[e4], k2[e4], n4);
              F2(s5.x, s5.y, -r3), 0 === i3 && t4.push(s5);
            }
            for (let t5 = 0, s4 = T2; t5 < s4; t5++) {
              const s5 = _2[t5];
              P2 = O2[t5];
              const a3 = [];
              for (let t6 = 0, e4 = s5.length; t6 < e4; t6++) {
                const e5 = C2(s5[t6], P2[t6], n4);
                F2(e5.x, e5.y, -r3), 0 === i3 && a3.push(e5);
              }
              0 === i3 && e3.push(a3);
            }
          }
          R2 = _l.triangulateShape(t4, e3);
        }
        const N2 = R2.length, V2 = u2 + d2;
        for (let t4 = 0; t4 < I2; t4++) {
          const e3 = l2 ? C2(S2[t4], E2[t4], V2) : S2[t4];
          w2 ? (b2.copy(f2.normals[0]).multiplyScalar(e3.x), x2.copy(f2.binormals[0]).multiplyScalar(e3.y), v2.copy(g2[0]).add(b2).add(x2), F2(v2.x, v2.y, v2.z)) : F2(e3.x, e3.y, 0);
        }
        for (let t4 = 1; t4 <= o2; t4++) for (let e3 = 0; e3 < I2; e3++) {
          const s3 = l2 ? C2(S2[e3], E2[e3], V2) : S2[e3];
          w2 ? (b2.copy(f2.normals[t4]).multiplyScalar(s3.x), x2.copy(f2.binormals[t4]).multiplyScalar(s3.y), v2.copy(g2[t4]).add(b2).add(x2), F2(v2.x, v2.y, v2.z)) : F2(s3.x, s3.y, h2 / o2 * t4);
        }
        for (let t4 = p2 - 1; t4 >= 0; t4--) {
          const e3 = t4 / p2, s3 = c2 * Math.cos(e3 * Math.PI / 2), i3 = u2 * Math.sin(e3 * Math.PI / 2) + d2;
          for (let t5 = 0, e4 = z2.length; t5 < e4; t5++) {
            const e5 = C2(z2[t5], k2[t5], i3);
            F2(e5.x, e5.y, h2 + s3);
          }
          for (let t5 = 0, e4 = _2.length; t5 < e4; t5++) {
            const e5 = _2[t5];
            P2 = O2[t5];
            for (let t6 = 0, r3 = e5.length; t6 < r3; t6++) {
              const r4 = C2(e5[t6], P2[t6], i3);
              w2 ? F2(r4.x, r4.y + g2[o2 - 1].y, g2[o2 - 1].x + s3) : F2(r4.x, r4.y, h2 + s3);
            }
          }
        }
        function L2(t4, e3) {
          let s3 = t4.length;
          for (; --s3 >= 0; ) {
            const i3 = s3;
            let r3 = s3 - 1;
            r3 < 0 && (r3 = t4.length - 1);
            for (let t5 = 0, s4 = o2 + 2 * p2; t5 < s4; t5++) {
              const s5 = I2 * t5, n4 = I2 * (t5 + 1);
              U2(e3 + i3 + s5, e3 + r3 + s5, e3 + r3 + n4, e3 + i3 + n4);
            }
          }
        }
        function F2(t4, e3, s3) {
          n3.push(t4), n3.push(e3), n3.push(s3);
        }
        function D2(t4, e3, r3) {
          j2(t4), j2(e3), j2(r3);
          const n4 = i2.length / 3, a3 = y2.generateTopUV(s2, i2, n4 - 3, n4 - 2, n4 - 1);
          W2(a3[0]), W2(a3[1]), W2(a3[2]);
        }
        function U2(t4, e3, r3, n4) {
          j2(t4), j2(e3), j2(n4), j2(e3), j2(r3), j2(n4);
          const a3 = i2.length / 3, o3 = y2.generateSideWallUV(s2, i2, a3 - 6, a3 - 3, a3 - 2, a3 - 1);
          W2(o3[0]), W2(o3[1]), W2(o3[3]), W2(o3[1]), W2(o3[2]), W2(o3[3]);
        }
        function j2(t4) {
          i2.push(n3[3 * t4 + 0]), i2.push(n3[3 * t4 + 1]), i2.push(n3[3 * t4 + 2]);
        }
        function W2(t4) {
          r2.push(t4.x), r2.push(t4.y);
        }
        !(function() {
          const t4 = i2.length / 3;
          if (l2) {
            let t5 = 0, e3 = I2 * t5;
            for (let t6 = 0; t6 < N2; t6++) {
              const s3 = R2[t6];
              D2(s3[2] + e3, s3[1] + e3, s3[0] + e3);
            }
            t5 = o2 + 2 * p2, e3 = I2 * t5;
            for (let t6 = 0; t6 < N2; t6++) {
              const s3 = R2[t6];
              D2(s3[0] + e3, s3[1] + e3, s3[2] + e3);
            }
          } else {
            for (let t5 = 0; t5 < N2; t5++) {
              const e3 = R2[t5];
              D2(e3[2], e3[1], e3[0]);
            }
            for (let t5 = 0; t5 < N2; t5++) {
              const e3 = R2[t5];
              D2(e3[0] + I2 * o2, e3[1] + I2 * o2, e3[2] + I2 * o2);
            }
          }
          s2.addGroup(t4, i2.length / 3 - t4, 0);
        })(), (function() {
          const t4 = i2.length / 3;
          let e3 = 0;
          L2(z2, e3), e3 += z2.length;
          for (let t5 = 0, s3 = _2.length; t5 < s3; t5++) {
            const s4 = _2[t5];
            L2(s4, e3), e3 += s4.length;
          }
          s2.addGroup(t4, i2.length / 3 - t4, 1);
        })();
      }
      this.setAttribute("position", new kn(i2, 3)), this.setAttribute("uv", new kn(r2, 2)), this.computeVertexNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return (function(t3, e2, s2) {
        if (s2.shapes = [], Array.isArray(t3)) for (let e3 = 0, i2 = t3.length; e3 < i2; e3++) {
          const i3 = t3[e3];
          s2.shapes.push(i3.uuid);
        }
        else s2.shapes.push(t3.uuid);
        s2.options = Object.assign({}, e2), void 0 !== e2.extrudePath && (s2.options.extrudePath = e2.extrudePath.toJSON());
        return s2;
      })(this.parameters.shapes, this.parameters.options, t2);
    }
    static fromJSON(t2, e2) {
      const s2 = [];
      for (let i3 = 0, r2 = t2.shapes.length; i3 < r2; i3++) {
        const r3 = e2[t2.shapes[i3]];
        s2.push(r3);
      }
      const i2 = t2.options.extrudePath;
      return void 0 !== i2 && (t2.options.extrudePath = new Xh[i2.type]().fromJSON(i2)), new _zl(s2, t2.options);
    }
  };
  var Cl = { generateTopUV: function(t2, e2, s2, i2, r2) {
    const n2 = e2[3 * s2], a2 = e2[3 * s2 + 1], o2 = e2[3 * i2], h2 = e2[3 * i2 + 1], l2 = e2[3 * r2], c2 = e2[3 * r2 + 1];
    return [new _i(n2, a2), new _i(o2, h2), new _i(l2, c2)];
  }, generateSideWallUV: function(t2, e2, s2, i2, r2, n2) {
    const a2 = e2[3 * s2], o2 = e2[3 * s2 + 1], h2 = e2[3 * s2 + 2], l2 = e2[3 * i2], c2 = e2[3 * i2 + 1], u2 = e2[3 * i2 + 2], d2 = e2[3 * r2], p2 = e2[3 * r2 + 1], m2 = e2[3 * r2 + 2], y2 = e2[3 * n2], g2 = e2[3 * n2 + 1], f2 = e2[3 * n2 + 2];
    return Math.abs(o2 - c2) < Math.abs(a2 - l2) ? [new _i(a2, 1 - h2), new _i(l2, 1 - u2), new _i(d2, 1 - m2), new _i(y2, 1 - f2)] : [new _i(o2, 1 - h2), new _i(c2, 1 - u2), new _i(p2, 1 - m2), new _i(g2, 1 - f2)];
  } };
  var Il = class _Il extends vh {
    constructor(t2 = 1, e2 = 0) {
      const s2 = (1 + Math.sqrt(5)) / 2;
      super([-1, s2, 0, 1, s2, 0, -1, -s2, 0, 1, -s2, 0, 0, -1, s2, 0, 1, s2, 0, -1, -s2, 0, 1, -s2, s2, 0, -1, s2, 0, 1, -s2, 0, -1, -s2, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t2, e2), this.type = "IcosahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _Il(t2.radius, t2.detail);
    }
  };
  var Bl = class _Bl extends Wn {
    constructor(t2 = [new _i(0, -0.5), new _i(0.5, 0), new _i(0, 0.5)], e2 = 12, s2 = 0, i2 = 2 * Math.PI) {
      super(), this.type = "LatheGeometry", this.parameters = { points: t2, segments: e2, phiStart: s2, phiLength: i2 }, e2 = Math.floor(e2), i2 = xi(i2, 0, 2 * Math.PI);
      const r2 = [], n2 = [], a2 = [], o2 = [], h2 = [], l2 = 1 / e2, c2 = new Ti(), u2 = new _i(), d2 = new Ti(), p2 = new Ti(), m2 = new Ti();
      let y2 = 0, g2 = 0;
      for (let e3 = 0; e3 <= t2.length - 1; e3++) switch (e3) {
        case 0:
          y2 = t2[e3 + 1].x - t2[e3].x, g2 = t2[e3 + 1].y - t2[e3].y, d2.x = 1 * g2, d2.y = -y2, d2.z = 0 * g2, m2.copy(d2), d2.normalize(), o2.push(d2.x, d2.y, d2.z);
          break;
        case t2.length - 1:
          o2.push(m2.x, m2.y, m2.z);
          break;
        default:
          y2 = t2[e3 + 1].x - t2[e3].x, g2 = t2[e3 + 1].y - t2[e3].y, d2.x = 1 * g2, d2.y = -y2, d2.z = 0 * g2, p2.copy(d2), d2.x += m2.x, d2.y += m2.y, d2.z += m2.z, d2.normalize(), o2.push(d2.x, d2.y, d2.z), m2.copy(p2);
      }
      for (let r3 = 0; r3 <= e2; r3++) {
        const d3 = s2 + r3 * l2 * i2, p3 = Math.sin(d3), m3 = Math.cos(d3);
        for (let s3 = 0; s3 <= t2.length - 1; s3++) {
          c2.x = t2[s3].x * p3, c2.y = t2[s3].y, c2.z = t2[s3].x * m3, n2.push(c2.x, c2.y, c2.z), u2.x = r3 / e2, u2.y = s3 / (t2.length - 1), a2.push(u2.x, u2.y);
          const i3 = o2[3 * s3 + 0] * p3, l3 = o2[3 * s3 + 1], d4 = o2[3 * s3 + 0] * m3;
          h2.push(i3, l3, d4);
        }
      }
      for (let s3 = 0; s3 < e2; s3++) for (let e3 = 0; e3 < t2.length - 1; e3++) {
        const i3 = e3 + s3 * t2.length, n3 = i3, a3 = i3 + t2.length, o3 = i3 + t2.length + 1, h3 = i3 + 1;
        r2.push(n3, a3, h3), r2.push(o3, h3, a3);
      }
      this.setIndex(r2), this.setAttribute("position", new kn(n2, 3)), this.setAttribute("uv", new kn(a2, 2)), this.setAttribute("normal", new kn(h2, 3));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Bl(t2.points, t2.segments, t2.phiStart, t2.phiLength);
    }
  };
  var kl = class _kl extends vh {
    constructor(t2 = 1, e2 = 0) {
      super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t2, e2), this.type = "OctahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _kl(t2.radius, t2.detail);
    }
  };
  var Ol = class _Ol extends Wn {
    constructor(t2 = 1, e2 = 1, s2 = 1, i2 = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = { width: t2, height: e2, widthSegments: s2, heightSegments: i2 };
      const r2 = t2 / 2, n2 = e2 / 2, a2 = Math.floor(s2), o2 = Math.floor(i2), h2 = a2 + 1, l2 = o2 + 1, c2 = t2 / a2, u2 = e2 / o2, d2 = [], p2 = [], m2 = [], y2 = [];
      for (let t3 = 0; t3 < l2; t3++) {
        const e3 = t3 * u2 - n2;
        for (let s3 = 0; s3 < h2; s3++) {
          const i3 = s3 * c2 - r2;
          p2.push(i3, -e3, 0), m2.push(0, 0, 1), y2.push(s3 / a2), y2.push(1 - t3 / o2);
        }
      }
      for (let t3 = 0; t3 < o2; t3++) for (let e3 = 0; e3 < a2; e3++) {
        const s3 = e3 + h2 * t3, i3 = e3 + h2 * (t3 + 1), r3 = e3 + 1 + h2 * (t3 + 1), n3 = e3 + 1 + h2 * t3;
        d2.push(s3, i3, n3), d2.push(i3, r3, n3);
      }
      this.setIndex(d2), this.setAttribute("position", new kn(p2, 3)), this.setAttribute("normal", new kn(m2, 3)), this.setAttribute("uv", new kn(y2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Ol(t2.width, t2.height, t2.widthSegments, t2.heightSegments);
    }
  };
  var Pl = class _Pl extends Wn {
    constructor(t2 = 0.5, e2 = 1, s2 = 32, i2 = 1, r2 = 0, n2 = 2 * Math.PI) {
      super(), this.type = "RingGeometry", this.parameters = { innerRadius: t2, outerRadius: e2, thetaSegments: s2, phiSegments: i2, thetaStart: r2, thetaLength: n2 }, s2 = Math.max(3, s2);
      const a2 = [], o2 = [], h2 = [], l2 = [];
      let c2 = t2;
      const u2 = (e2 - t2) / (i2 = Math.max(1, i2)), d2 = new Ti(), p2 = new _i();
      for (let t3 = 0; t3 <= i2; t3++) {
        for (let t4 = 0; t4 <= s2; t4++) {
          const i3 = r2 + t4 / s2 * n2;
          d2.x = c2 * Math.cos(i3), d2.y = c2 * Math.sin(i3), o2.push(d2.x, d2.y, d2.z), h2.push(0, 0, 1), p2.x = (d2.x / e2 + 1) / 2, p2.y = (d2.y / e2 + 1) / 2, l2.push(p2.x, p2.y);
        }
        c2 += u2;
      }
      for (let t3 = 0; t3 < i2; t3++) {
        const e3 = t3 * (s2 + 1);
        for (let t4 = 0; t4 < s2; t4++) {
          const i3 = t4 + e3, r3 = i3, n3 = i3 + s2 + 1, o3 = i3 + s2 + 2, h3 = i3 + 1;
          a2.push(r3, n3, h3), a2.push(n3, o3, h3);
        }
      }
      this.setIndex(a2), this.setAttribute("position", new kn(o2, 3)), this.setAttribute("normal", new kn(h2, 3)), this.setAttribute("uv", new kn(l2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Pl(t2.innerRadius, t2.outerRadius, t2.thetaSegments, t2.phiSegments, t2.thetaStart, t2.thetaLength);
    }
  };
  var Rl = class _Rl extends Wn {
    constructor(t2 = new Gh([new _i(0, 0.5), new _i(-0.5, -0.5), new _i(0.5, -0.5)]), e2 = 12) {
      super(), this.type = "ShapeGeometry", this.parameters = { shapes: t2, curveSegments: e2 };
      const s2 = [], i2 = [], r2 = [], n2 = [];
      let a2 = 0, o2 = 0;
      if (false === Array.isArray(t2)) h2(t2);
      else for (let e3 = 0; e3 < t2.length; e3++) h2(t2[e3]), this.addGroup(a2, o2, e3), a2 += o2, o2 = 0;
      function h2(t3) {
        const a3 = i2.length / 3, h3 = t3.extractPoints(e2);
        let l2 = h3.shape;
        const c2 = h3.holes;
        false === _l.isClockWise(l2) && (l2 = l2.reverse());
        for (let t4 = 0, e3 = c2.length; t4 < e3; t4++) {
          const e4 = c2[t4];
          true === _l.isClockWise(e4) && (c2[t4] = e4.reverse());
        }
        const u2 = _l.triangulateShape(l2, c2);
        for (let t4 = 0, e3 = c2.length; t4 < e3; t4++) {
          const e4 = c2[t4];
          l2 = l2.concat(e4);
        }
        for (let t4 = 0, e3 = l2.length; t4 < e3; t4++) {
          const e4 = l2[t4];
          i2.push(e4.x, e4.y, 0), r2.push(0, 0, 1), n2.push(e4.x, e4.y);
        }
        for (let t4 = 0, e3 = u2.length; t4 < e3; t4++) {
          const e4 = u2[t4], i3 = e4[0] + a3, r3 = e4[1] + a3, n3 = e4[2] + a3;
          s2.push(i3, r3, n3), o2 += 3;
        }
      }
      this.setIndex(s2), this.setAttribute("position", new kn(i2, 3)), this.setAttribute("normal", new kn(r2, 3)), this.setAttribute("uv", new kn(n2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return (function(t3, e2) {
        if (e2.shapes = [], Array.isArray(t3)) for (let s2 = 0, i2 = t3.length; s2 < i2; s2++) {
          const i3 = t3[s2];
          e2.shapes.push(i3.uuid);
        }
        else e2.shapes.push(t3.uuid);
        return e2;
      })(this.parameters.shapes, t2);
    }
    static fromJSON(t2, e2) {
      const s2 = [];
      for (let i2 = 0, r2 = t2.shapes.length; i2 < r2; i2++) {
        const r3 = e2[t2.shapes[i2]];
        s2.push(r3);
      }
      return new _Rl(s2, t2.curveSegments);
    }
  };
  var El = class _El extends Wn {
    constructor(t2 = 1, e2 = 32, s2 = 16, i2 = 0, r2 = 2 * Math.PI, n2 = 0, a2 = Math.PI) {
      super(), this.type = "SphereGeometry", this.parameters = { radius: t2, widthSegments: e2, heightSegments: s2, phiStart: i2, phiLength: r2, thetaStart: n2, thetaLength: a2 }, e2 = Math.max(3, Math.floor(e2)), s2 = Math.max(2, Math.floor(s2));
      const o2 = Math.min(n2 + a2, Math.PI);
      let h2 = 0;
      const l2 = [], c2 = new Ti(), u2 = new Ti(), d2 = [], p2 = [], m2 = [], y2 = [];
      for (let d3 = 0; d3 <= s2; d3++) {
        const g2 = [], f2 = d3 / s2, x2 = n2 + f2 * a2, b2 = t2 * Math.cos(x2), v2 = Math.sqrt(t2 * t2 - b2 * b2);
        let w2 = 0;
        0 === d3 && 0 === n2 ? w2 = 0.5 / e2 : d3 === s2 && o2 === Math.PI && (w2 = -0.5 / e2);
        for (let t3 = 0; t3 <= e2; t3++) {
          const s3 = t3 / e2, n3 = i2 + s3 * r2;
          c2.x = -v2 * Math.cos(n3), c2.y = b2, c2.z = v2 * Math.sin(n3), p2.push(c2.x, c2.y, c2.z), u2.copy(c2).normalize(), m2.push(u2.x, u2.y, u2.z), y2.push(s3 + w2, 1 - f2), g2.push(h2++);
        }
        l2.push(g2);
      }
      for (let t3 = 0; t3 < s2; t3++) for (let i3 = 0; i3 < e2; i3++) {
        const e3 = l2[t3][i3 + 1], r3 = l2[t3][i3], a3 = l2[t3 + 1][i3], h3 = l2[t3 + 1][i3 + 1];
        (0 !== t3 || n2 > 0) && d2.push(e3, r3, h3), (t3 !== s2 - 1 || o2 < Math.PI) && d2.push(r3, a3, h3);
      }
      this.setIndex(d2), this.setAttribute("position", new kn(p2, 3)), this.setAttribute("normal", new kn(m2, 3)), this.setAttribute("uv", new kn(y2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _El(t2.radius, t2.widthSegments, t2.heightSegments, t2.phiStart, t2.phiLength, t2.thetaStart, t2.thetaLength);
    }
  };
  var Nl = class _Nl extends vh {
    constructor(t2 = 1, e2 = 0) {
      super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t2, e2), this.type = "TetrahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _Nl(t2.radius, t2.detail);
    }
  };
  var Vl = class _Vl extends Wn {
    constructor(t2 = 1, e2 = 0.4, s2 = 12, i2 = 48, r2 = 2 * Math.PI, n2 = 0, a2 = 2 * Math.PI) {
      super(), this.type = "TorusGeometry", this.parameters = { radius: t2, tube: e2, radialSegments: s2, tubularSegments: i2, arc: r2, thetaStart: n2, thetaLength: a2 }, s2 = Math.floor(s2), i2 = Math.floor(i2);
      const o2 = [], h2 = [], l2 = [], c2 = [], u2 = new Ti(), d2 = new Ti(), p2 = new Ti();
      for (let o3 = 0; o3 <= s2; o3++) {
        const m2 = n2 + o3 / s2 * a2;
        for (let n3 = 0; n3 <= i2; n3++) {
          const a3 = n3 / i2 * r2;
          d2.x = (t2 + e2 * Math.cos(m2)) * Math.cos(a3), d2.y = (t2 + e2 * Math.cos(m2)) * Math.sin(a3), d2.z = e2 * Math.sin(m2), h2.push(d2.x, d2.y, d2.z), u2.x = t2 * Math.cos(a3), u2.y = t2 * Math.sin(a3), p2.subVectors(d2, u2).normalize(), l2.push(p2.x, p2.y, p2.z), c2.push(n3 / i2), c2.push(o3 / s2);
        }
      }
      for (let t3 = 1; t3 <= s2; t3++) for (let e3 = 1; e3 <= i2; e3++) {
        const s3 = (i2 + 1) * t3 + e3 - 1, r3 = (i2 + 1) * (t3 - 1) + e3 - 1, n3 = (i2 + 1) * (t3 - 1) + e3, a3 = (i2 + 1) * t3 + e3;
        o2.push(s3, r3, a3), o2.push(r3, n3, a3);
      }
      this.setIndex(o2), this.setAttribute("position", new kn(h2, 3)), this.setAttribute("normal", new kn(l2, 3)), this.setAttribute("uv", new kn(c2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Vl(t2.radius, t2.tube, t2.radialSegments, t2.tubularSegments, t2.arc);
    }
  };
  var Ll = class _Ll extends Wn {
    constructor(t2 = 1, e2 = 0.4, s2 = 64, i2 = 8, r2 = 2, n2 = 3) {
      super(), this.type = "TorusKnotGeometry", this.parameters = { radius: t2, tube: e2, tubularSegments: s2, radialSegments: i2, p: r2, q: n2 }, s2 = Math.floor(s2), i2 = Math.floor(i2);
      const a2 = [], o2 = [], h2 = [], l2 = [], c2 = new Ti(), u2 = new Ti(), d2 = new Ti(), p2 = new Ti(), m2 = new Ti(), y2 = new Ti(), g2 = new Ti();
      for (let a3 = 0; a3 <= s2; ++a3) {
        const x2 = a3 / s2 * r2 * Math.PI * 2;
        f2(x2, r2, n2, t2, d2), f2(x2 + 0.01, r2, n2, t2, p2), y2.subVectors(p2, d2), g2.addVectors(p2, d2), m2.crossVectors(y2, g2), g2.crossVectors(m2, y2), m2.normalize(), g2.normalize();
        for (let t3 = 0; t3 <= i2; ++t3) {
          const r3 = t3 / i2 * Math.PI * 2, n3 = -e2 * Math.cos(r3), p3 = e2 * Math.sin(r3);
          c2.x = d2.x + (n3 * g2.x + p3 * m2.x), c2.y = d2.y + (n3 * g2.y + p3 * m2.y), c2.z = d2.z + (n3 * g2.z + p3 * m2.z), o2.push(c2.x, c2.y, c2.z), u2.subVectors(c2, d2).normalize(), h2.push(u2.x, u2.y, u2.z), l2.push(a3 / s2), l2.push(t3 / i2);
        }
      }
      for (let t3 = 1; t3 <= s2; t3++) for (let e3 = 1; e3 <= i2; e3++) {
        const s3 = (i2 + 1) * (t3 - 1) + (e3 - 1), r3 = (i2 + 1) * t3 + (e3 - 1), n3 = (i2 + 1) * t3 + e3, o3 = (i2 + 1) * (t3 - 1) + e3;
        a2.push(s3, r3, o3), a2.push(r3, n3, o3);
      }
      function f2(t3, e3, s3, i3, r3) {
        const n3 = Math.cos(t3), a3 = Math.sin(t3), o3 = s3 / e3 * t3, h3 = Math.cos(o3);
        r3.x = i3 * (2 + h3) * 0.5 * n3, r3.y = i3 * (2 + h3) * a3 * 0.5, r3.z = i3 * Math.sin(o3) * 0.5;
      }
      this.setIndex(a2), this.setAttribute("position", new kn(o2, 3)), this.setAttribute("normal", new kn(h2, 3)), this.setAttribute("uv", new kn(l2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Ll(t2.radius, t2.tube, t2.tubularSegments, t2.radialSegments, t2.p, t2.q);
    }
  };
  var Fl = class _Fl extends Wn {
    constructor(t2 = new qh(new Ti(-1, -1, 0), new Ti(-1, 1, 0), new Ti(1, 1, 0)), e2 = 64, s2 = 1, i2 = 8, r2 = false) {
      super(), this.type = "TubeGeometry", this.parameters = { path: t2, tubularSegments: e2, radius: s2, radialSegments: i2, closed: r2 };
      const n2 = t2.computeFrenetFrames(e2, r2);
      this.tangents = n2.tangents, this.normals = n2.normals, this.binormals = n2.binormals;
      const a2 = new Ti(), o2 = new Ti(), h2 = new _i();
      let l2 = new Ti();
      const c2 = [], u2 = [], d2 = [], p2 = [];
      function m2(r3) {
        l2 = t2.getPointAt(r3 / e2, l2);
        const h3 = n2.normals[r3], d3 = n2.binormals[r3];
        for (let t3 = 0; t3 <= i2; t3++) {
          const e3 = t3 / i2 * Math.PI * 2, r4 = Math.sin(e3), n3 = -Math.cos(e3);
          o2.x = n3 * h3.x + r4 * d3.x, o2.y = n3 * h3.y + r4 * d3.y, o2.z = n3 * h3.z + r4 * d3.z, o2.normalize(), u2.push(o2.x, o2.y, o2.z), a2.x = l2.x + s2 * o2.x, a2.y = l2.y + s2 * o2.y, a2.z = l2.z + s2 * o2.z, c2.push(a2.x, a2.y, a2.z);
        }
      }
      !(function() {
        for (let t3 = 0; t3 < e2; t3++) m2(t3);
        m2(false === r2 ? e2 : 0), (function() {
          for (let t3 = 0; t3 <= e2; t3++) for (let s3 = 0; s3 <= i2; s3++) h2.x = t3 / e2, h2.y = s3 / i2, d2.push(h2.x, h2.y);
        })(), (function() {
          for (let t3 = 1; t3 <= e2; t3++) for (let e3 = 1; e3 <= i2; e3++) {
            const s3 = (i2 + 1) * (t3 - 1) + (e3 - 1), r3 = (i2 + 1) * t3 + (e3 - 1), n3 = (i2 + 1) * t3 + e3, a3 = (i2 + 1) * (t3 - 1) + e3;
            p2.push(s3, r3, a3), p2.push(r3, n3, a3);
          }
        })();
      })(), this.setIndex(p2), this.setAttribute("position", new kn(c2, 3)), this.setAttribute("normal", new kn(u2, 3)), this.setAttribute("uv", new kn(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.path = this.parameters.path.toJSON(), t2;
    }
    static fromJSON(t2) {
      return new _Fl(new Xh[t2.path.type]().fromJSON(t2.path), t2.tubularSegments, t2.radius, t2.radialSegments, t2.closed);
    }
  };
  var Dl = class extends Wn {
    constructor(t2 = null) {
      if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: t2 }, null !== t2) {
        const e2 = [], s2 = /* @__PURE__ */ new Set(), i2 = new Ti(), r2 = new Ti();
        if (null !== t2.index) {
          const n2 = t2.attributes.position, a2 = t2.index;
          let o2 = t2.groups;
          0 === o2.length && (o2 = [{ start: 0, count: a2.count, materialIndex: 0 }]);
          for (let t3 = 0, h2 = o2.length; t3 < h2; ++t3) {
            const h3 = o2[t3], l2 = h3.start;
            for (let t4 = l2, o3 = l2 + h3.count; t4 < o3; t4 += 3) for (let o4 = 0; o4 < 3; o4++) {
              const h4 = a2.getX(t4 + o4), l3 = a2.getX(t4 + (o4 + 1) % 3);
              i2.fromBufferAttribute(n2, h4), r2.fromBufferAttribute(n2, l3), true === Ul(i2, r2, s2) && (e2.push(i2.x, i2.y, i2.z), e2.push(r2.x, r2.y, r2.z));
            }
          }
        } else {
          const n2 = t2.attributes.position;
          for (let t3 = 0, a2 = n2.count / 3; t3 < a2; t3++) for (let a3 = 0; a3 < 3; a3++) {
            const o2 = 3 * t3 + a3, h2 = 3 * t3 + (a3 + 1) % 3;
            i2.fromBufferAttribute(n2, o2), r2.fromBufferAttribute(n2, h2), true === Ul(i2, r2, s2) && (e2.push(i2.x, i2.y, i2.z), e2.push(r2.x, r2.y, r2.z));
          }
        }
        this.setAttribute("position", new kn(e2, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  function Ul(t2, e2, s2) {
    const i2 = `${t2.x},${t2.y},${t2.z}-${e2.x},${e2.y},${e2.z}`, r2 = `${e2.x},${e2.y},${e2.z}-${t2.x},${t2.y},${t2.z}`;
    return true !== s2.has(i2) && true !== s2.has(r2) && (s2.add(i2), s2.add(r2), true);
  }
  var jl = Object.freeze({ __proto__: null, BoxGeometry: yh, CapsuleGeometry: gh, CircleGeometry: fh, ConeGeometry: bh, CylinderGeometry: xh, DodecahedronGeometry: wh, EdgesGeometry: Th, ExtrudeGeometry: zl, IcosahedronGeometry: Il, LatheGeometry: Bl, OctahedronGeometry: kl, PlaneGeometry: Ol, PolyhedronGeometry: vh, RingGeometry: Pl, ShapeGeometry: Rl, SphereGeometry: El, TetrahedronGeometry: Nl, TorusGeometry: Vl, TorusKnotGeometry: Ll, TubeGeometry: Fl, WireframeGeometry: Dl });
  function Jl(t2) {
    const e2 = {};
    for (const s2 in t2) {
      e2[s2] = {};
      for (const i2 in t2[s2]) {
        const r2 = t2[s2][i2];
        if (Hl(r2)) r2.isRenderTargetTexture ? (ai("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e2[s2][i2] = null) : e2[s2][i2] = r2.clone();
        else if (Array.isArray(r2)) if (Hl(r2[0])) {
          const t3 = [];
          for (let e3 = 0, s3 = r2.length; e3 < s3; e3++) t3[e3] = r2[e3].clone();
          e2[s2][i2] = t3;
        } else e2[s2][i2] = r2.slice();
        else e2[s2][i2] = r2;
      }
    }
    return e2;
  }
  function ql(t2) {
    const e2 = {};
    for (let s2 = 0; s2 < t2.length; s2++) {
      const i2 = Jl(t2[s2]);
      for (const t3 in i2) e2[t3] = i2[t3];
    }
    return e2;
  }
  function Hl(t2) {
    return t2 && (t2.isColor || t2.isMatrix3 || t2.isMatrix4 || t2.isVector2 || t2.isVector3 || t2.isVector4 || t2.isTexture || t2.isQuaternion);
  }
  function Xl(t2) {
    const e2 = t2.getRenderTarget();
    return null === e2 ? t2.outputColorSpace : true === e2.isXRRenderTarget ? e2.texture.colorSpace : Ri.workingColorSpace;
  }
  var Yl = { clone: Jl, merge: ql };
  var Zl = class extends Zn {
    constructor(t2) {
      super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, void 0 !== t2 && this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.fragmentShader = t2.fragmentShader, this.vertexShader = t2.vertexShader, this.uniforms = Jl(t2.uniforms), this.uniformsGroups = (function(t3) {
        const e2 = [];
        for (let s2 = 0; s2 < t3.length; s2++) e2.push(t3[s2].clone());
        return e2;
      })(t2.uniformsGroups), this.defines = Object.assign({}, t2.defines), this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.fog = t2.fog, this.lights = t2.lights, this.clipping = t2.clipping, this.extensions = Object.assign({}, t2.extensions), this.glslVersion = t2.glslVersion, this.defaultAttributeValues = Object.assign({}, t2.defaultAttributeValues), this.index0AttributeName = t2.index0AttributeName, this.uniformsNeedUpdate = t2.uniformsNeedUpdate, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      e2.glslVersion = this.glslVersion, e2.uniforms = {};
      for (const s3 in this.uniforms) {
        const i2 = this.uniforms[s3].value;
        i2 && i2.isTexture ? e2.uniforms[s3] = { type: "t", value: i2.toJSON(t2).uuid } : i2 && i2.isColor ? e2.uniforms[s3] = { type: "c", value: i2.getHex() } : i2 && i2.isVector2 ? e2.uniforms[s3] = { type: "v2", value: i2.toArray() } : i2 && i2.isVector3 ? e2.uniforms[s3] = { type: "v3", value: i2.toArray() } : i2 && i2.isVector4 ? e2.uniforms[s3] = { type: "v4", value: i2.toArray() } : i2 && i2.isMatrix3 ? e2.uniforms[s3] = { type: "m3", value: i2.toArray() } : i2 && i2.isMatrix4 ? e2.uniforms[s3] = { type: "m4", value: i2.toArray() } : e2.uniforms[s3] = { value: i2 };
      }
      Object.keys(this.defines).length > 0 && (e2.defines = this.defines), e2.vertexShader = this.vertexShader, e2.fragmentShader = this.fragmentShader, e2.lights = this.lights, e2.clipping = this.clipping;
      const s2 = {};
      for (const t3 in this.extensions) true === this.extensions[t3] && (s2[t3] = true);
      return Object.keys(s2).length > 0 && (e2.extensions = s2), e2;
    }
    fromJSON(t2, e2) {
      if (super.fromJSON(t2, e2), void 0 !== t2.uniforms) for (const s2 in t2.uniforms) {
        const i2 = t2.uniforms[s2];
        switch (this.uniforms[s2] = {}, i2.type) {
          case "t":
            this.uniforms[s2].value = e2[i2.value] || null;
            break;
          case "c":
            this.uniforms[s2].value = new Pr().setHex(i2.value);
            break;
          case "v2":
            this.uniforms[s2].value = new _i().fromArray(i2.value);
            break;
          case "v3":
            this.uniforms[s2].value = new Ti().fromArray(i2.value);
            break;
          case "v4":
            this.uniforms[s2].value = new qi().fromArray(i2.value);
            break;
          case "m3":
            this.uniforms[s2].value = new Ii().fromArray(i2.value);
            break;
          case "m4":
            this.uniforms[s2].value = new Qi().fromArray(i2.value);
            break;
          default:
            this.uniforms[s2].value = i2.value;
        }
      }
      if (void 0 !== t2.defines && (this.defines = t2.defines), void 0 !== t2.vertexShader && (this.vertexShader = t2.vertexShader), void 0 !== t2.fragmentShader && (this.fragmentShader = t2.fragmentShader), void 0 !== t2.glslVersion && (this.glslVersion = t2.glslVersion), void 0 !== t2.extensions) for (const e3 in t2.extensions) this.extensions[e3] = t2.extensions[e3];
      return void 0 !== t2.lights && (this.lights = t2.lights), void 0 !== t2.clipping && (this.clipping = t2.clipping), this;
    }
  };
  var Gl = class extends Zl {
    constructor(t2) {
      super(t2), this.isRawShaderMaterial = true, this.type = "RawShaderMaterial";
    }
  };
  var ic = class extends Zn {
    constructor(t2) {
      super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.depthPacking = t2.depthPacking, this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this;
    }
  };
  var rc = class extends Zn {
    constructor(t2) {
      super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this;
    }
  };
  function oc(t2, e2) {
    return t2 && t2.constructor !== e2 ? "number" == typeof e2.BYTES_PER_ELEMENT ? new e2(t2) : Array.prototype.slice.call(t2) : t2;
  }
  var dc = class {
    constructor(t2, e2, s2, i2) {
      this.parameterPositions = t2, this._cachedIndex = 0, this.resultBuffer = void 0 !== i2 ? i2 : new e2.constructor(s2), this.sampleValues = e2, this.valueSize = s2, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(t2) {
      const e2 = this.parameterPositions;
      let s2 = this._cachedIndex, i2 = e2[s2], r2 = e2[s2 - 1];
      t: {
        e: {
          let n2;
          s: {
            i: if (!(t2 < i2)) {
              for (let n3 = s2 + 2; ; ) {
                if (void 0 === i2) {
                  if (t2 < r2) break i;
                  return s2 = e2.length, this._cachedIndex = s2, this.copySampleValue_(s2 - 1);
                }
                if (s2 === n3) break;
                if (r2 = i2, i2 = e2[++s2], t2 < i2) break e;
              }
              n2 = e2.length;
              break s;
            }
            if (!(t2 >= r2)) {
              const a2 = e2[1];
              t2 < a2 && (s2 = 2, r2 = a2);
              for (let n3 = s2 - 2; ; ) {
                if (void 0 === r2) return this._cachedIndex = 0, this.copySampleValue_(0);
                if (s2 === n3) break;
                if (i2 = r2, r2 = e2[--s2 - 1], t2 >= r2) break e;
              }
              n2 = s2, s2 = 0;
              break s;
            }
            break t;
          }
          for (; s2 < n2; ) {
            const i3 = s2 + n2 >>> 1;
            t2 < e2[i3] ? n2 = i3 : s2 = i3 + 1;
          }
          if (i2 = e2[s2], r2 = e2[s2 - 1], void 0 === r2) return this._cachedIndex = 0, this.copySampleValue_(0);
          if (void 0 === i2) return s2 = e2.length, this._cachedIndex = s2, this.copySampleValue_(s2 - 1);
        }
        this._cachedIndex = s2, this.intervalChanged_(s2, r2, i2);
      }
      return this.interpolate_(s2, r2, t2, i2);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(t2) {
      const e2 = this.resultBuffer, s2 = this.sampleValues, i2 = this.valueSize, r2 = t2 * i2;
      for (let t3 = 0; t3 !== i2; ++t3) e2[t3] = s2[r2 + t3];
      return e2;
    }
    interpolate_() {
      throw new Error("THREE.Interpolant: Call to abstract method.");
    }
    intervalChanged_() {
    }
  };
  var pc = class extends dc {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: De, endingEnd: De };
    }
    intervalChanged_(t2, e2, s2) {
      const i2 = this.parameterPositions;
      let r2 = t2 - 2, n2 = t2 + 1, a2 = i2[r2], o2 = i2[n2];
      if (void 0 === a2) switch (this.getSettings_().endingStart) {
        case Ue:
          r2 = t2, a2 = 2 * e2 - s2;
          break;
        case je:
          r2 = i2.length - 2, a2 = e2 + i2[r2] - i2[r2 + 1];
          break;
        default:
          r2 = t2, a2 = s2;
      }
      if (void 0 === o2) switch (this.getSettings_().endingEnd) {
        case Ue:
          n2 = t2, o2 = 2 * s2 - e2;
          break;
        case je:
          n2 = 1, o2 = s2 + i2[1] - i2[0];
          break;
        default:
          n2 = t2 - 1, o2 = e2;
      }
      const h2 = 0.5 * (s2 - e2), l2 = this.valueSize;
      this._weightPrev = h2 / (e2 - a2), this._weightNext = h2 / (o2 - s2), this._offsetPrev = r2 * l2, this._offsetNext = n2 * l2;
    }
    interpolate_(t2, e2, s2, i2) {
      const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = t2 * a2, h2 = o2 - a2, l2 = this._offsetPrev, c2 = this._offsetNext, u2 = this._weightPrev, d2 = this._weightNext, p2 = (s2 - e2) / (i2 - e2), m2 = p2 * p2, y2 = m2 * p2, g2 = -u2 * y2 + 2 * u2 * m2 - u2 * p2, f2 = (1 + u2) * y2 + (-1.5 - 2 * u2) * m2 + (-0.5 + u2) * p2 + 1, x2 = (-1 - d2) * y2 + (1.5 + d2) * m2 + 0.5 * p2, b2 = d2 * y2 - d2 * m2;
      for (let t3 = 0; t3 !== a2; ++t3) r2[t3] = g2 * n2[l2 + t3] + f2 * n2[h2 + t3] + x2 * n2[o2 + t3] + b2 * n2[c2 + t3];
      return r2;
    }
  };
  var mc = class extends dc {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2);
    }
    interpolate_(t2, e2, s2, i2) {
      const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = t2 * a2, h2 = o2 - a2, l2 = (s2 - e2) / (i2 - e2), c2 = 1 - l2;
      for (let t3 = 0; t3 !== a2; ++t3) r2[t3] = n2[h2 + t3] * c2 + n2[o2 + t3] * l2;
      return r2;
    }
  };
  var yc = class extends dc {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2);
    }
    interpolate_(t2) {
      return this.copySampleValue_(t2 - 1);
    }
  };
  var gc = class extends dc {
    interpolate_(t2, e2, s2, i2) {
      const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = t2 * a2, h2 = o2 - a2, l2 = this.inTangents, c2 = this.outTangents;
      if (!l2 || !c2) {
        const t3 = (s2 - e2) / (i2 - e2), l3 = 1 - t3;
        for (let e3 = 0; e3 !== a2; ++e3) r2[e3] = n2[h2 + e3] * l3 + n2[o2 + e3] * t3;
        return r2;
      }
      const u2 = 2 * a2, d2 = t2 - 1;
      for (let p2 = 0; p2 !== a2; ++p2) {
        const a3 = n2[h2 + p2], m2 = n2[o2 + p2], y2 = d2 * u2 + 2 * p2, g2 = c2[y2], f2 = c2[y2 + 1], x2 = t2 * u2 + 2 * p2, b2 = l2[x2], v2 = l2[x2 + 1];
        let w2, M2, S2, _2, A2, T2 = (s2 - e2) / (i2 - e2);
        for (let t3 = 0; t3 < 8; t3++) {
          w2 = T2 * T2, M2 = w2 * T2, S2 = 1 - T2, _2 = S2 * S2, A2 = _2 * S2;
          const t4 = A2 * e2 + 3 * _2 * T2 * g2 + 3 * S2 * w2 * b2 + M2 * i2 - s2;
          if (Math.abs(t4) < 1e-10) break;
          const r3 = 3 * _2 * (g2 - e2) + 6 * S2 * T2 * (b2 - g2) + 3 * w2 * (i2 - b2);
          if (Math.abs(r3) < 1e-10) break;
          T2 -= t4 / r3, T2 = Math.max(0, Math.min(1, T2));
        }
        r2[p2] = A2 * a3 + 3 * _2 * T2 * f2 + 3 * S2 * w2 * v2 + M2 * m2;
      }
      return r2;
    }
  };
  var fc = class {
    constructor(t2, e2, s2, i2) {
      if (void 0 === t2) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === e2 || 0 === e2.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t2);
      this.name = t2, this.times = oc(e2, this.TimeBufferType), this.values = oc(s2, this.ValueBufferType), this.setInterpolation(i2 || this.DefaultInterpolation);
    }
    static toJSON(t2) {
      const e2 = t2.constructor;
      let s2;
      if (e2.toJSON !== this.toJSON) s2 = e2.toJSON(t2);
      else {
        s2 = { name: t2.name, times: oc(t2.times, Array), values: oc(t2.values, Array) };
        const e3 = t2.getInterpolation();
        e3 !== t2.DefaultInterpolation && (s2.interpolation = e3);
      }
      return s2.type = t2.ValueTypeName, s2;
    }
    InterpolantFactoryMethodDiscrete(t2) {
      return new yc(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodLinear(t2) {
      return new mc(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodSmooth(t2) {
      return new pc(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodBezier(t2) {
      const e2 = new gc(this.times, this.values, this.getValueSize(), t2);
      return this.settings && (e2.inTangents = this.settings.inTangents, e2.outTangents = this.settings.outTangents), e2;
    }
    setInterpolation(t2) {
      let e2;
      switch (t2) {
        case Ne:
          e2 = this.InterpolantFactoryMethodDiscrete;
          break;
        case Ve:
          e2 = this.InterpolantFactoryMethodLinear;
          break;
        case Le:
          e2 = this.InterpolantFactoryMethodSmooth;
          break;
        case Fe:
          e2 = this.InterpolantFactoryMethodBezier;
      }
      if (void 0 === e2) {
        const e3 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (void 0 === this.createInterpolant) {
          if (t2 === this.DefaultInterpolation) throw new Error(e3);
          this.setInterpolation(this.DefaultInterpolation);
        }
        return ai("KeyframeTrack:", e3), this;
      }
      return this.createInterpolant = e2, this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return Ne;
        case this.InterpolantFactoryMethodLinear:
          return Ve;
        case this.InterpolantFactoryMethodSmooth:
          return Le;
        case this.InterpolantFactoryMethodBezier:
          return Fe;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(t2) {
      if (0 !== t2) {
        const e2 = this.times;
        for (let s2 = 0, i2 = e2.length; s2 !== i2; ++s2) e2[s2] += t2;
      }
      return this;
    }
    scale(t2) {
      if (1 !== t2) {
        const e2 = this.times;
        for (let s2 = 0, i2 = e2.length; s2 !== i2; ++s2) e2[s2] *= t2;
      }
      return this;
    }
    trim(t2, e2) {
      const s2 = this.times, i2 = s2.length;
      let r2 = 0, n2 = i2 - 1;
      for (; r2 !== i2 && s2[r2] < t2; ) ++r2;
      for (; -1 !== n2 && s2[n2] > e2; ) --n2;
      if (++n2, 0 !== r2 || n2 !== i2) {
        r2 >= n2 && (n2 = Math.max(n2, 1), r2 = n2 - 1);
        const t3 = this.getValueSize();
        this.times = s2.slice(r2, n2), this.values = this.values.slice(r2 * t3, n2 * t3);
      }
      return this;
    }
    validate() {
      let t2 = true;
      const e2 = this.getValueSize();
      e2 - Math.floor(e2) !== 0 && (oi("KeyframeTrack: Invalid value size in track.", this), t2 = false);
      const s2 = this.times, i2 = this.values, r2 = s2.length;
      0 === r2 && (oi("KeyframeTrack: Track is empty.", this), t2 = false);
      let n2 = null;
      for (let e3 = 0; e3 !== r2; e3++) {
        const i3 = s2[e3];
        if ("number" == typeof i3 && isNaN(i3)) {
          oi("KeyframeTrack: Time is not a valid number.", this, e3, i3), t2 = false;
          break;
        }
        if (null !== n2 && n2 > i3) {
          oi("KeyframeTrack: Out of order keys.", this, e3, i3, n2), t2 = false;
          break;
        }
        n2 = i3;
      }
      if (void 0 !== i2 && $s(i2)) for (let e3 = 0, s3 = i2.length; e3 !== s3; ++e3) {
        const s4 = i2[e3];
        if (isNaN(s4)) {
          oi("KeyframeTrack: Value is not a valid number.", this, e3, s4), t2 = false;
          break;
        }
      }
      return t2;
    }
    optimize() {
      const t2 = this.times.slice(), e2 = this.values.slice(), s2 = this.getValueSize(), i2 = this.getInterpolation() === Le, r2 = t2.length - 1;
      let n2 = 1;
      for (let a2 = 1; a2 < r2; ++a2) {
        let r3 = false;
        const o2 = t2[a2];
        if (o2 !== t2[a2 + 1] && (1 !== a2 || o2 !== t2[0])) if (i2) r3 = true;
        else {
          const t3 = a2 * s2, i3 = t3 - s2, n3 = t3 + s2;
          for (let a3 = 0; a3 !== s2; ++a3) {
            const s3 = e2[t3 + a3];
            if (s3 !== e2[i3 + a3] || s3 !== e2[n3 + a3]) {
              r3 = true;
              break;
            }
          }
        }
        if (r3) {
          if (a2 !== n2) {
            t2[n2] = t2[a2];
            const i3 = a2 * s2, r4 = n2 * s2;
            for (let t3 = 0; t3 !== s2; ++t3) e2[r4 + t3] = e2[i3 + t3];
          }
          ++n2;
        }
      }
      if (r2 > 0) {
        t2[n2] = t2[r2];
        for (let t3 = r2 * s2, i3 = n2 * s2, a2 = 0; a2 !== s2; ++a2) e2[i3 + a2] = e2[t3 + a2];
        ++n2;
      }
      return n2 !== t2.length ? (this.times = t2.slice(0, n2), this.values = e2.slice(0, n2 * s2)) : (this.times = t2, this.values = e2), this;
    }
    clone() {
      const t2 = this.times.slice(), e2 = this.values.slice(), s2 = new (0, this.constructor)(this.name, t2, e2);
      return s2.createInterpolant = this.createInterpolant, s2;
    }
  };
  fc.prototype.ValueTypeName = "", fc.prototype.TimeBufferType = Float32Array, fc.prototype.ValueBufferType = Float32Array, fc.prototype.DefaultInterpolation = Ve;
  var xc = class extends fc {
    constructor(t2, e2, s2) {
      super(t2, e2, s2);
    }
  };
  xc.prototype.ValueTypeName = "bool", xc.prototype.ValueBufferType = Array, xc.prototype.DefaultInterpolation = Ne, xc.prototype.InterpolantFactoryMethodLinear = void 0, xc.prototype.InterpolantFactoryMethodSmooth = void 0;
  var bc = class extends fc {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2);
    }
  };
  bc.prototype.ValueTypeName = "color";
  var vc = class extends fc {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2);
    }
  };
  vc.prototype.ValueTypeName = "number";
  var wc = class extends dc {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2);
    }
    interpolate_(t2, e2, s2, i2) {
      const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = (s2 - e2) / (i2 - e2);
      let h2 = t2 * a2;
      for (let t3 = h2 + a2; h2 !== t3; h2 += 4) Ai.slerpFlat(r2, 0, n2, h2 - a2, n2, h2, o2);
      return r2;
    }
  };
  var Mc = class extends fc {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2);
    }
    InterpolantFactoryMethodLinear(t2) {
      return new wc(this.times, this.values, this.getValueSize(), t2);
    }
  };
  Mc.prototype.ValueTypeName = "quaternion", Mc.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Sc = class extends fc {
    constructor(t2, e2, s2) {
      super(t2, e2, s2);
    }
  };
  Sc.prototype.ValueTypeName = "string", Sc.prototype.ValueBufferType = Array, Sc.prototype.DefaultInterpolation = Ne, Sc.prototype.InterpolantFactoryMethodLinear = void 0, Sc.prototype.InterpolantFactoryMethodSmooth = void 0;
  var _c = class extends fc {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2);
    }
  };
  _c.prototype.ValueTypeName = "vector";
  var Ic = class {
    constructor(t2, e2, s2) {
      const i2 = this;
      let r2, n2 = false, a2 = 0, o2 = 0;
      const h2 = [];
      this.onStart = void 0, this.onLoad = t2, this.onProgress = e2, this.onError = s2, this._abortController = null, this.itemStart = function(t3) {
        o2++, false === n2 && void 0 !== i2.onStart && i2.onStart(t3, a2, o2), n2 = true;
      }, this.itemEnd = function(t3) {
        a2++, void 0 !== i2.onProgress && i2.onProgress(t3, a2, o2), a2 === o2 && (n2 = false, void 0 !== i2.onLoad && i2.onLoad());
      }, this.itemError = function(t3) {
        void 0 !== i2.onError && i2.onError(t3);
      }, this.resolveURL = function(t3) {
        return t3 = t3.normalize("NFC"), r2 ? r2(t3) : t3;
      }, this.setURLModifier = function(t3) {
        return r2 = t3, this;
      }, this.addHandler = function(t3, e3) {
        return h2.push(t3, e3), this;
      }, this.removeHandler = function(t3) {
        const e3 = h2.indexOf(t3);
        return -1 !== e3 && h2.splice(e3, 2), this;
      }, this.getHandler = function(t3) {
        for (let e3 = 0, s3 = h2.length; e3 < s3; e3 += 2) {
          const s4 = h2[e3], i3 = h2[e3 + 1];
          if (s4.global && (s4.lastIndex = 0), s4.test(t3)) return i3;
        }
        return null;
      }, this.abort = function() {
        return this.abortController.abort(), this._abortController = null, this;
      };
    }
    get abortController() {
      return this._abortController || (this._abortController = new AbortController()), this._abortController;
    }
  };
  var Bc = new Ic();
  var kc = class {
    constructor(t2) {
      this.manager = void 0 !== t2 ? t2 : Bc, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {}, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    load() {
    }
    loadAsync(t2, e2) {
      const s2 = this;
      return new Promise(function(i2, r2) {
        s2.load(t2, i2, e2, r2);
      });
    }
    parse() {
    }
    setCrossOrigin(t2) {
      return this.crossOrigin = t2, this;
    }
    setWithCredentials(t2) {
      return this.withCredentials = t2, this;
    }
    setPath(t2) {
      return this.path = t2, this;
    }
    setResourcePath(t2) {
      return this.resourcePath = t2, this;
    }
    setRequestHeader(t2) {
      return this.requestHeader = t2, this;
    }
    abort() {
      return this;
    }
  };
  kc.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  var jc = class extends Ar {
    constructor(t2, e2 = 1) {
      super(), this.isLight = true, this.type = "Light", this.color = new Pr(t2), this.intensity = e2;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.color.copy(t2.color), this.intensity = t2.intensity, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.color = this.color.getHex(), e2.object.intensity = this.intensity, e2;
    }
  };
  var Wc = class extends jc {
    constructor(t2, e2, s2) {
      super(t2, s2), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(Ar.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Pr(e2);
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.groundColor.copy(t2.groundColor), this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.groundColor = this.groundColor.getHex(), e2;
    }
  };
  var Jc = new Qi();
  var qc = new Ti();
  var Hc = new Ti();
  var Xc = class {
    constructor(t2) {
      this.camera = t2, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new _i(512, 512), this.mapType = zt, this.map = null, this.mapPass = null, this.matrix = new Qi(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new mo(), this._frameExtents = new _i(1, 1), this._viewportCount = 1, this._viewports = [new qi(0, 0, 1, 1)];
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(t2) {
      const e2 = this.camera, s2 = this.matrix;
      qc.setFromMatrixPosition(t2.matrixWorld), e2.position.copy(qc), Hc.setFromMatrixPosition(t2.target.matrixWorld), e2.lookAt(Hc), e2.updateMatrixWorld(), Jc.multiplyMatrices(e2.projectionMatrix, e2.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Jc, e2.coordinateSystem, e2.reversedDepth), e2.coordinateSystem === Js || e2.reversedDepth ? s2.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1) : s2.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), s2.multiply(Jc);
    }
    getViewport(t2) {
      return this._viewports[t2];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(t2) {
      return this.camera = t2.camera.clone(), this.intensity = t2.intensity, this.bias = t2.bias, this.radius = t2.radius, this.autoUpdate = t2.autoUpdate, this.needsUpdate = t2.needsUpdate, this.normalBias = t2.normalBias, this.blurSamples = t2.blurSamples, this.mapSize.copy(t2.mapSize), this.biasNode = t2.biasNode, this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const t2 = {};
      return 1 !== this.intensity && (t2.intensity = this.intensity), 0 !== this.bias && (t2.bias = this.bias), 0 !== this.normalBias && (t2.normalBias = this.normalBias), 1 !== this.radius && (t2.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t2.mapSize = this.mapSize.toArray()), t2.camera = this.camera.toJSON(false).object, delete t2.camera.matrix, t2;
    }
  };
  var Yc = new Ti();
  var Zc = new Ai();
  var Gc = new Ti();
  var $c = class extends Ar {
    constructor() {
      super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Qi(), this.projectionMatrix = new Qi(), this.projectionMatrixInverse = new Qi(), this.coordinateSystem = Ws, this._reversedDepth = false;
    }
    get reversedDepth() {
      return this._reversedDepth;
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.matrixWorldInverse.copy(t2.matrixWorldInverse), this.projectionMatrix.copy(t2.projectionMatrix), this.projectionMatrixInverse.copy(t2.projectionMatrixInverse), this.coordinateSystem = t2.coordinateSystem, this;
    }
    getWorldDirection(t2) {
      return super.getWorldDirection(t2).negate();
    }
    updateMatrixWorld(t2) {
      super.updateMatrixWorld(t2), this.matrixWorld.decompose(Yc, Zc, Gc), 1 === Gc.x && 1 === Gc.y && 1 === Gc.z ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Yc, Zc, Gc.set(1, 1, 1)).invert();
    }
    updateWorldMatrix(t2, e2, s2 = false) {
      super.updateWorldMatrix(t2, e2, s2), this.matrixWorld.decompose(Yc, Zc, Gc), 1 === Gc.x && 1 === Gc.y && 1 === Gc.z ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Yc, Zc, Gc.set(1, 1, 1)).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var Qc = new Ti();
  var Kc = new _i();
  var tu = new _i();
  var eu = class extends $c {
    constructor(t2 = 50, e2 = 1, s2 = 0.1, i2 = 2e3) {
      super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t2, this.zoom = 1, this.near = s2, this.far = i2, this.focus = 10, this.aspect = e2, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.fov = t2.fov, this.zoom = t2.zoom, this.near = t2.near, this.far = t2.far, this.focus = t2.focus, this.aspect = t2.aspect, this.view = null === t2.view ? null : Object.assign({}, t2.view), this.filmGauge = t2.filmGauge, this.filmOffset = t2.filmOffset, this;
    }
    setFocalLength(t2) {
      const e2 = 0.5 * this.getFilmHeight() / t2;
      this.fov = 2 * gi * Math.atan(e2), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const t2 = Math.tan(0.5 * yi * this.fov);
      return 0.5 * this.getFilmHeight() / t2;
    }
    getEffectiveFOV() {
      return 2 * gi * Math.atan(Math.tan(0.5 * yi * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(t2, e2, s2) {
      Qc.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e2.set(Qc.x, Qc.y).multiplyScalar(-t2 / Qc.z), Qc.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), s2.set(Qc.x, Qc.y).multiplyScalar(-t2 / Qc.z);
    }
    getViewSize(t2, e2) {
      return this.getViewBounds(t2, Kc, tu), e2.subVectors(tu, Kc);
    }
    setViewOffset(t2, e2, s2, i2, r2, n2) {
      this.aspect = t2 / e2, null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e2, this.view.offsetX = s2, this.view.offsetY = i2, this.view.width = r2, this.view.height = n2, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = this.near;
      let e2 = t2 * Math.tan(0.5 * yi * this.fov) / this.zoom, s2 = 2 * e2, i2 = this.aspect * s2, r2 = -0.5 * i2;
      const n2 = this.view;
      if (null !== this.view && this.view.enabled) {
        const t3 = n2.fullWidth, a3 = n2.fullHeight;
        r2 += n2.offsetX * i2 / t3, e2 -= n2.offsetY * s2 / a3, i2 *= n2.width / t3, s2 *= n2.height / a3;
      }
      const a2 = this.filmOffset;
      0 !== a2 && (r2 += t2 * a2 / this.getFilmWidth()), this.projectionMatrix.makePerspective(r2, r2 + i2, e2, e2 - s2, t2, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.fov = this.fov, e2.object.zoom = this.zoom, e2.object.near = this.near, e2.object.far = this.far, e2.object.focus = this.focus, e2.object.aspect = this.aspect, null !== this.view && (e2.object.view = Object.assign({}, this.view)), e2.object.filmGauge = this.filmGauge, e2.object.filmOffset = this.filmOffset, e2;
    }
  };
  var ru = class extends Xc {
    constructor() {
      super(new eu(90, 1, 0.5, 500)), this.isPointLightShadow = true;
    }
  };
  var nu = class extends jc {
    constructor(t2, e2, s2 = 0, i2 = 2) {
      super(t2, e2), this.isPointLight = true, this.type = "PointLight", this.distance = s2, this.decay = i2, this.shadow = new ru();
    }
    get power() {
      return 4 * this.intensity * Math.PI;
    }
    set power(t2) {
      this.intensity = t2 / (4 * Math.PI);
    }
    dispose() {
      super.dispose(), this.shadow.dispose();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.distance = t2.distance, this.decay = t2.decay, this.shadow = t2.shadow.clone(), this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.distance = this.distance, e2.object.decay = this.decay, e2.object.shadow = this.shadow.toJSON(), e2;
    }
  };
  var au = class extends $c {
    constructor(t2 = -1, e2 = 1, s2 = 1, i2 = -1, r2 = 0.1, n2 = 2e3) {
      super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t2, this.right = e2, this.top = s2, this.bottom = i2, this.near = r2, this.far = n2, this.updateProjectionMatrix();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.left = t2.left, this.right = t2.right, this.top = t2.top, this.bottom = t2.bottom, this.near = t2.near, this.far = t2.far, this.zoom = t2.zoom, this.view = null === t2.view ? null : Object.assign({}, t2.view), this;
    }
    setViewOffset(t2, e2, s2, i2, r2, n2) {
      null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e2, this.view.offsetX = s2, this.view.offsetY = i2, this.view.width = r2, this.view.height = n2, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = (this.right - this.left) / (2 * this.zoom), e2 = (this.top - this.bottom) / (2 * this.zoom), s2 = (this.right + this.left) / 2, i2 = (this.top + this.bottom) / 2;
      let r2 = s2 - t2, n2 = s2 + t2, a2 = i2 + e2, o2 = i2 - e2;
      if (null !== this.view && this.view.enabled) {
        const t3 = (this.right - this.left) / this.view.fullWidth / this.zoom, e3 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        r2 += t3 * this.view.offsetX, n2 = r2 + t3 * this.view.width, a2 -= e3 * this.view.offsetY, o2 = a2 - e3 * this.view.height;
      }
      this.projectionMatrix.makeOrthographic(r2, n2, a2, o2, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.zoom = this.zoom, e2.object.left = this.left, e2.object.right = this.right, e2.object.top = this.top, e2.object.bottom = this.bottom, e2.object.near = this.near, e2.object.far = this.far, null !== this.view && (e2.object.view = Object.assign({}, this.view)), e2;
    }
  };
  var Cu = new Qi();
  var Iu = new Qi();
  var Bu = new Qi();
  var Ou = -90;
  var Pu = class extends Ar {
    constructor(t2, e2, s2) {
      super(), this.type = "CubeCamera", this.renderTarget = s2, this.coordinateSystem = null, this.activeMipmapLevel = 0;
      const i2 = new eu(Ou, 1, t2, e2);
      i2.layers = this.layers, this.add(i2);
      const r2 = new eu(Ou, 1, t2, e2);
      r2.layers = this.layers, this.add(r2);
      const n2 = new eu(Ou, 1, t2, e2);
      n2.layers = this.layers, this.add(n2);
      const a2 = new eu(Ou, 1, t2, e2);
      a2.layers = this.layers, this.add(a2);
      const o2 = new eu(Ou, 1, t2, e2);
      o2.layers = this.layers, this.add(o2);
      const h2 = new eu(Ou, 1, t2, e2);
      h2.layers = this.layers, this.add(h2);
    }
    updateCoordinateSystem() {
      const t2 = this.coordinateSystem, e2 = this.children.concat(), [s2, i2, r2, n2, a2, o2] = e2;
      for (const t3 of e2) this.remove(t3);
      if (t2 === Ws) s2.up.set(0, 1, 0), s2.lookAt(1, 0, 0), i2.up.set(0, 1, 0), i2.lookAt(-1, 0, 0), r2.up.set(0, 0, -1), r2.lookAt(0, 1, 0), n2.up.set(0, 0, 1), n2.lookAt(0, -1, 0), a2.up.set(0, 1, 0), a2.lookAt(0, 0, 1), o2.up.set(0, 1, 0), o2.lookAt(0, 0, -1);
      else {
        if (t2 !== Js) throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t2);
        s2.up.set(0, -1, 0), s2.lookAt(-1, 0, 0), i2.up.set(0, -1, 0), i2.lookAt(1, 0, 0), r2.up.set(0, 0, 1), r2.lookAt(0, 1, 0), n2.up.set(0, 0, -1), n2.lookAt(0, -1, 0), a2.up.set(0, -1, 0), a2.lookAt(0, 0, 1), o2.up.set(0, -1, 0), o2.lookAt(0, 0, -1);
      }
      for (const t3 of e2) this.add(t3), t3.updateMatrixWorld();
    }
    update(t2, e2) {
      null === this.parent && this.updateMatrixWorld();
      const { renderTarget: s2, activeMipmapLevel: i2 } = this;
      this.coordinateSystem !== t2.coordinateSystem && (this.coordinateSystem = t2.coordinateSystem, this.updateCoordinateSystem());
      const [r2, n2, a2, o2, h2, l2] = this.children, c2 = t2.getRenderTarget(), u2 = t2.getActiveCubeFace(), d2 = t2.getActiveMipmapLevel(), p2 = t2.xr.enabled;
      t2.xr.enabled = false;
      const m2 = s2.texture.generateMipmaps;
      s2.texture.generateMipmaps = false;
      let y2 = false;
      y2 = true === t2.isWebGLRenderer ? t2.state.buffers.depth.getReversed() : t2.reversedDepthBuffer, t2.setRenderTarget(s2, 0, i2), y2 && false === t2.autoClear && t2.clearDepth(), t2.render(e2, r2), t2.setRenderTarget(s2, 1, i2), y2 && false === t2.autoClear && t2.clearDepth(), t2.render(e2, n2), t2.setRenderTarget(s2, 2, i2), y2 && false === t2.autoClear && t2.clearDepth(), t2.render(e2, a2), t2.setRenderTarget(s2, 3, i2), y2 && false === t2.autoClear && t2.clearDepth(), t2.render(e2, o2), t2.setRenderTarget(s2, 4, i2), y2 && false === t2.autoClear && t2.clearDepth(), t2.render(e2, h2), s2.texture.generateMipmaps = m2, t2.setRenderTarget(s2, 5, i2), y2 && false === t2.autoClear && t2.clearDepth(), t2.render(e2, l2), t2.setRenderTarget(c2, u2, d2), t2.xr.enabled = p2, s2.texture.needsPMREMUpdate = true;
    }
  };
  var Ru = class extends eu {
    constructor(t2 = []) {
      super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = t2;
    }
  };
  var Vu = new Ti();
  var Lu = new Ai();
  var Fu = new Ti();
  var Du = new Ti();
  var Uu = new Ti();
  var Ju = new Ti();
  var qu = new Ai();
  var Hu = new Ti();
  var Xu = new Ti();
  var $u = "\\[\\]\\.:\\/";
  var Qu = new RegExp("[" + $u + "]", "g");
  var Ku = "[^" + $u + "]";
  var td = "[^" + $u.replace("\\.", "") + "]";
  var ed = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", Ku) + /(WCOD+)?/.source.replace("WCOD", td) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ku) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ku) + "$");
  var sd = ["material", "materials", "bones", "map"];
  var id = class _id {
    constructor(t2, e2, s2) {
      this.path = e2, this.parsedPath = s2 || _id.parseTrackName(e2), this.node = _id.findNode(t2, this.parsedPath.nodeName), this.rootNode = t2, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(t2, e2, s2) {
      return t2 && t2.isAnimationObjectGroup ? new _id.Composite(t2, e2, s2) : new _id(t2, e2, s2);
    }
    static sanitizeNodeName(t2) {
      return t2.replace(/\s/g, "_").replace(Qu, "");
    }
    static parseTrackName(t2) {
      const e2 = ed.exec(t2);
      if (null === e2) throw new Error("THREE.PropertyBinding: Cannot parse trackName: " + t2);
      const s2 = { nodeName: e2[2], objectName: e2[3], objectIndex: e2[4], propertyName: e2[5], propertyIndex: e2[6] }, i2 = s2.nodeName && s2.nodeName.lastIndexOf(".");
      if (void 0 !== i2 && -1 !== i2) {
        const t3 = s2.nodeName.substring(i2 + 1);
        -1 !== sd.indexOf(t3) && (s2.nodeName = s2.nodeName.substring(0, i2), s2.objectName = t3);
      }
      if (null === s2.propertyName || 0 === s2.propertyName.length) throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + t2);
      return s2;
    }
    static findNode(t2, e2) {
      if (void 0 === e2 || "" === e2 || "." === e2 || -1 === e2 || e2 === t2.name || e2 === t2.uuid) return t2;
      if (t2.skeleton) {
        const s2 = t2.skeleton.getBoneByName(e2);
        if (void 0 !== s2) return s2;
      }
      if (t2.children) {
        const s2 = function(t3) {
          for (let i3 = 0; i3 < t3.length; i3++) {
            const r2 = t3[i3];
            if (r2.name === e2 || r2.uuid === e2) return r2;
            const n2 = s2(r2.children);
            if (n2) return n2;
          }
          return null;
        }, i2 = s2(t2.children);
        if (i2) return i2;
      }
      return null;
    }
    _getValue_unavailable() {
    }
    _setValue_unavailable() {
    }
    _getValue_direct(t2, e2) {
      t2[e2] = this.targetObject[this.propertyName];
    }
    _getValue_array(t2, e2) {
      const s2 = this.resolvedProperty;
      for (let i2 = 0, r2 = s2.length; i2 !== r2; ++i2) t2[e2++] = s2[i2];
    }
    _getValue_arrayElement(t2, e2) {
      t2[e2] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(t2, e2) {
      this.resolvedProperty.toArray(t2, e2);
    }
    _setValue_direct(t2, e2) {
      this.targetObject[this.propertyName] = t2[e2];
    }
    _setValue_direct_setNeedsUpdate(t2, e2) {
      this.targetObject[this.propertyName] = t2[e2], this.targetObject.needsUpdate = true;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t2, e2) {
      this.targetObject[this.propertyName] = t2[e2], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_array(t2, e2) {
      const s2 = this.resolvedProperty;
      for (let i2 = 0, r2 = s2.length; i2 !== r2; ++i2) s2[i2] = t2[e2++];
    }
    _setValue_array_setNeedsUpdate(t2, e2) {
      const s2 = this.resolvedProperty;
      for (let i2 = 0, r2 = s2.length; i2 !== r2; ++i2) s2[i2] = t2[e2++];
      this.targetObject.needsUpdate = true;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t2, e2) {
      const s2 = this.resolvedProperty;
      for (let i2 = 0, r2 = s2.length; i2 !== r2; ++i2) s2[i2] = t2[e2++];
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_arrayElement(t2, e2) {
      this.resolvedProperty[this.propertyIndex] = t2[e2];
    }
    _setValue_arrayElement_setNeedsUpdate(t2, e2) {
      this.resolvedProperty[this.propertyIndex] = t2[e2], this.targetObject.needsUpdate = true;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t2, e2) {
      this.resolvedProperty[this.propertyIndex] = t2[e2], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_fromArray(t2, e2) {
      this.resolvedProperty.fromArray(t2, e2);
    }
    _setValue_fromArray_setNeedsUpdate(t2, e2) {
      this.resolvedProperty.fromArray(t2, e2), this.targetObject.needsUpdate = true;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t2, e2) {
      this.resolvedProperty.fromArray(t2, e2), this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _getValue_unbound(t2, e2) {
      this.bind(), this.getValue(t2, e2);
    }
    _setValue_unbound(t2, e2) {
      this.bind(), this.setValue(t2, e2);
    }
    bind() {
      let t2 = this.node;
      const e2 = this.parsedPath, s2 = e2.objectName, i2 = e2.propertyName;
      let r2 = e2.propertyIndex;
      if (t2 || (t2 = _id.findNode(this.rootNode, e2.nodeName), this.node = t2), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t2) return void ai("PropertyBinding: No target node found for track: " + this.path + ".");
      if (s2) {
        let i3 = e2.objectIndex;
        switch (s2) {
          case "materials":
            if (!t2.material) return void oi("PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t2.material.materials) return void oi("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            t2 = t2.material.materials;
            break;
          case "bones":
            if (!t2.skeleton) return void oi("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            t2 = t2.skeleton.bones;
            for (let e3 = 0; e3 < t2.length; e3++) if (t2[e3].name === i3) {
              i3 = e3;
              break;
            }
            break;
          case "map":
            if ("map" in t2) {
              t2 = t2.map;
              break;
            }
            if (!t2.material) return void oi("PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t2.material.map) return void oi("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            t2 = t2.material.map;
            break;
          default:
            if (void 0 === t2[s2]) return void oi("PropertyBinding: Can not bind to objectName of node undefined.", this);
            t2 = t2[s2];
        }
        if (void 0 !== i3) {
          if (void 0 === t2[i3]) return void oi("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t2);
          t2 = t2[i3];
        }
      }
      const n2 = t2[i2];
      if (void 0 === n2) {
        return void oi("PropertyBinding: Trying to update property for track: " + e2.nodeName + "." + i2 + " but it wasn't found.", t2);
      }
      let a2 = this.Versioning.None;
      this.targetObject = t2, true === t2.isMaterial ? a2 = this.Versioning.NeedsUpdate : true === t2.isObject3D && (a2 = this.Versioning.MatrixWorldNeedsUpdate);
      let o2 = this.BindingType.Direct;
      if (void 0 !== r2) {
        if ("morphTargetInfluences" === i2) {
          if (!t2.geometry) return void oi("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          if (!t2.geometry.morphAttributes) return void oi("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          void 0 !== t2.morphTargetDictionary[r2] && (r2 = t2.morphTargetDictionary[r2]);
        }
        o2 = this.BindingType.ArrayElement, this.resolvedProperty = n2, this.propertyIndex = r2;
      } else void 0 !== n2.fromArray && void 0 !== n2.toArray ? (o2 = this.BindingType.HasFromToArray, this.resolvedProperty = n2) : Array.isArray(n2) ? (o2 = this.BindingType.EntireArray, this.resolvedProperty = n2) : this.propertyName = i2;
      this.getValue = this.GetterByBindingType[o2], this.setValue = this.SetterByBindingTypeAndVersioning[o2][a2];
    }
    unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
  };
  id.Composite = class {
    constructor(t2, e2, s2) {
      const i2 = s2 || id.parseTrackName(e2);
      this._targetGroup = t2, this._bindings = t2.subscribe_(e2, i2);
    }
    getValue(t2, e2) {
      this.bind();
      const s2 = this._targetGroup.nCachedObjects_, i2 = this._bindings[s2];
      void 0 !== i2 && i2.getValue(t2, e2);
    }
    setValue(t2, e2) {
      const s2 = this._bindings;
      for (let i2 = this._targetGroup.nCachedObjects_, r2 = s2.length; i2 !== r2; ++i2) s2[i2].setValue(t2, e2);
    }
    bind() {
      const t2 = this._bindings;
      for (let e2 = this._targetGroup.nCachedObjects_, s2 = t2.length; e2 !== s2; ++e2) t2[e2].bind();
    }
    unbind() {
      const t2 = this._bindings;
      for (let e2 = this._targetGroup.nCachedObjects_, s2 = t2.length; e2 !== s2; ++e2) t2[e2].unbind();
    }
  }, id.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, id.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, id.prototype.GetterByBindingType = [id.prototype._getValue_direct, id.prototype._getValue_array, id.prototype._getValue_arrayElement, id.prototype._getValue_toArray], id.prototype.SetterByBindingTypeAndVersioning = [[id.prototype._setValue_direct, id.prototype._setValue_direct_setNeedsUpdate, id.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [id.prototype._setValue_array, id.prototype._setValue_array_setNeedsUpdate, id.prototype._setValue_array_setMatrixWorldNeedsUpdate], [id.prototype._setValue_arrayElement, id.prototype._setValue_arrayElement_setNeedsUpdate, id.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [id.prototype._setValue_fromArray, id.prototype._setValue_fromArray_setNeedsUpdate, id.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
  var ad = new Float32Array(1);
  var md = new Qi();
  var wd = class _wd {
    static {
      _wd.prototype.isMatrix2 = true;
    }
    constructor(t2, e2, s2, i2) {
      this.elements = [1, 0, 0, 1], void 0 !== t2 && this.set(t2, e2, s2, i2);
    }
    identity() {
      return this.set(1, 0, 0, 1), this;
    }
    fromArray(t2, e2 = 0) {
      for (let s2 = 0; s2 < 4; s2++) this.elements[s2] = t2[s2 + e2];
      return this;
    }
    set(t2, e2, s2, i2) {
      const r2 = this.elements;
      return r2[0] = t2, r2[2] = e2, r2[1] = s2, r2[3] = i2, this;
    }
  };
  var Md = new _i();
  var _d = new Ti();
  var Ad = new Ti();
  var Td = new Ti();
  var zd = new Ti();
  var Cd = new Ti();
  var Id = new Ti();
  var Bd = new Ti();
  var Od = new Ti();
  var Rd = new Ti();
  var Ed = new Qi();
  var Nd = new Qi();
  var Dd = new Ti();
  var Ud = new Pr();
  var jd = new Pr();
  var Hd = new Ti();
  var Xd = new Ti();
  var Yd = new Ti();
  var Gd = new Ti();
  var $d = new $c();
  var tp = new Qr();
  var rp = new Ti();
  function up(t2, e2, s2, i2) {
    const r2 = (function(t3) {
      switch (t3) {
        case zt:
        case Ct:
          return { byteLength: 1, components: 1 };
        case Bt:
        case It:
        case Rt:
          return { byteLength: 2, components: 1 };
        case Et:
        case Nt:
          return { byteLength: 2, components: 4 };
        case Ot:
        case kt:
        case Pt:
          return { byteLength: 4, components: 1 };
        case Lt:
        case Ft:
          return { byteLength: 4, components: 3 };
      }
      throw new Error(`THREE.TextureUtils: Unknown texture type ${t3}.`);
    })(i2);
    switch (s2) {
      case 1021:
        return t2 * e2;
      case qt:
      case Ht:
        return t2 * e2 / r2.components * r2.byteLength;
      case 1030:
      case 1031:
        return t2 * e2 * 2 / r2.components * r2.byteLength;
      case 1022:
        return t2 * e2 * 3 / r2.components * r2.byteLength;
      case jt:
      case 1033:
        return t2 * e2 * 4 / r2.components * r2.byteLength;
      case 33776:
      case 33777:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 8;
      case 33778:
      case 33779:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 16;
      case 35841:
      case 35843:
        return Math.max(t2, 16) * Math.max(e2, 8) / 4;
      case 35840:
      case 35842:
        return Math.max(t2, 8) * Math.max(e2, 8) / 2;
      case 36196:
      case 37492:
      case 37488:
      case 37489:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 8;
      case 37496:
      case 37490:
      case 37491:
      case 37808:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 16;
      case 37809:
        return Math.floor((t2 + 4) / 5) * Math.floor((e2 + 3) / 4) * 16;
      case 37810:
        return Math.floor((t2 + 4) / 5) * Math.floor((e2 + 4) / 5) * 16;
      case 37811:
        return Math.floor((t2 + 5) / 6) * Math.floor((e2 + 4) / 5) * 16;
      case 37812:
        return Math.floor((t2 + 5) / 6) * Math.floor((e2 + 5) / 6) * 16;
      case 37813:
        return Math.floor((t2 + 7) / 8) * Math.floor((e2 + 4) / 5) * 16;
      case 37814:
        return Math.floor((t2 + 7) / 8) * Math.floor((e2 + 5) / 6) * 16;
      case 37815:
        return Math.floor((t2 + 7) / 8) * Math.floor((e2 + 7) / 8) * 16;
      case 37816:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 4) / 5) * 16;
      case 37817:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 5) / 6) * 16;
      case 37818:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 7) / 8) * 16;
      case 37819:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 9) / 10) * 16;
      case 37820:
        return Math.floor((t2 + 11) / 12) * Math.floor((e2 + 9) / 10) * 16;
      case 37821:
        return Math.floor((t2 + 11) / 12) * Math.floor((e2 + 11) / 12) * 16;
      case 36492:
      case 36494:
      case 36495:
        return Math.ceil(t2 / 4) * Math.ceil(e2 / 4) * 16;
      case 36283:
      case 36284:
        return Math.ceil(t2 / 4) * Math.ceil(e2 / 4) * 8;
      case 36285:
      case 36286:
        return Math.ceil(t2 / 4) * Math.ceil(e2 / 4) * 16;
    }
    throw new Error(`Unable to determine texture byte length for ${s2} format.`);
  }
  "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: t } })), "undefined" != typeof window && (window.__THREE__ ? ai("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = t);

  // vendor/three.module.min.js
  function On2() {
    let e2 = null, t2 = false, n2 = null, i2 = null;
    function r2(t3, a2) {
      n2(t3, a2), i2 = e2.requestAnimationFrame(r2);
    }
    return { start: function() {
      true !== t2 && null !== n2 && null !== e2 && (i2 = e2.requestAnimationFrame(r2), t2 = true);
    }, stop: function() {
      null !== e2 && e2.cancelAnimationFrame(i2), t2 = false;
    }, setAnimationLoop: function(e3) {
      n2 = e3;
    }, setContext: function(t3) {
      e2 = t3;
    } };
  }
  function Fn2(e2) {
    const t2 = /* @__PURE__ */ new WeakMap();
    return { get: function(e3) {
      return e3.isInterleavedBufferAttribute && (e3 = e3.data), t2.get(e3);
    }, remove: function(n2) {
      n2.isInterleavedBufferAttribute && (n2 = n2.data);
      const i2 = t2.get(n2);
      i2 && (e2.deleteBuffer(i2.buffer), t2.delete(n2));
    }, update: function(n2, i2) {
      if (n2.isInterleavedBufferAttribute && (n2 = n2.data), n2.isGLBufferAttribute) {
        const e3 = t2.get(n2);
        return void ((!e3 || e3.version < n2.version) && t2.set(n2, { buffer: n2.buffer, type: n2.type, bytesPerElement: n2.elementSize, version: n2.version }));
      }
      const r2 = t2.get(n2);
      if (void 0 === r2) t2.set(n2, (function(t3, n3) {
        const i3 = t3.array, r3 = t3.usage, a2 = i3.byteLength, o2 = e2.createBuffer();
        let s2;
        if (e2.bindBuffer(n3, o2), e2.bufferData(n3, i3, r3), t3.onUploadCallback(), i3 instanceof Float32Array) s2 = e2.FLOAT;
        else if ("undefined" != typeof Float16Array && i3 instanceof Float16Array) s2 = e2.HALF_FLOAT;
        else if (i3 instanceof Uint16Array) s2 = t3.isFloat16BufferAttribute ? e2.HALF_FLOAT : e2.UNSIGNED_SHORT;
        else if (i3 instanceof Int16Array) s2 = e2.SHORT;
        else if (i3 instanceof Uint32Array) s2 = e2.UNSIGNED_INT;
        else if (i3 instanceof Int32Array) s2 = e2.INT;
        else if (i3 instanceof Int8Array) s2 = e2.BYTE;
        else if (i3 instanceof Uint8Array) s2 = e2.UNSIGNED_BYTE;
        else {
          if (!(i3 instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + i3);
          s2 = e2.UNSIGNED_BYTE;
        }
        return { buffer: o2, type: s2, bytesPerElement: i3.BYTES_PER_ELEMENT, version: t3.version, size: a2 };
      })(n2, i2));
      else if (r2.version < n2.version) {
        if (r2.size !== n2.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
        !(function(t3, n3, i3) {
          const r3 = n3.array, a2 = n3.updateRanges;
          if (e2.bindBuffer(i3, t3), 0 === a2.length) e2.bufferSubData(i3, 0, r3);
          else {
            a2.sort((e3, t5) => e3.start - t5.start);
            let t4 = 0;
            for (let e3 = 1; e3 < a2.length; e3++) {
              const n4 = a2[t4], i4 = a2[e3];
              i4.start <= n4.start + n4.count + 1 ? n4.count = Math.max(n4.count, i4.start + i4.count - n4.start) : (++t4, a2[t4] = i4);
            }
            a2.length = t4 + 1;
            for (let t5 = 0, n4 = a2.length; t5 < n4; t5++) {
              const n5 = a2[t5];
              e2.bufferSubData(i3, n5.start * r3.BYTES_PER_ELEMENT, r3, n5.start, n5.count);
            }
            n3.clearUpdateRanges();
          }
          n3.onUploadCallback();
        })(r2.buffer, n2, i2), r2.version = n2.version;
      }
    } };
  }
  var Bn2 = { alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif", alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif", alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif", alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif", batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec4 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );\n	}\n#endif", batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif", begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated", iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif", color_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#endif", color_pars_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#endif", color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec4 vColor;\n#endif", color_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec4( 1.0 );\n#endif\n#ifdef USE_COLOR_ALPHA\n	vColor *= color;\n#elif defined( USE_COLOR )\n	vColor.rgb *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.rgb *= instanceColor.rgb;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\n#define inverseTransformDirection transformDirectionByInverseViewMatrix\nvec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {\n	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );\n}\nvec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif", colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );\n		#ifdef ENVMAP_BLENDING_MULTIPLY\n			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_MIX )\n			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_ADD )\n			outgoingLight += envColor.xyz * specularStrength * reflectivity;\n		#endif\n	#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif", envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif", lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;", lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert", lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif\n#include <lightprobes_pars_fragment>", lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.metalness = metalnessFactor;\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = vec3( 0.04 );\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif", lights_physical_pars_fragment: "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	vec3 diffuseContribution;\n	vec3 specularColor;\n	vec3 specularColorBlended;\n	float roughness;\n	float metalness;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n		vec3 iridescenceFresnelDielectric;\n		vec3 iridescenceFresnelMetallic;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		return 0.5 / max( gv + gl, EPSILON );\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColorBlended;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float rInv = 1.0 / ( roughness + 0.1 );\n	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;\n	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;\n	float DG = exp( a * dotNV + b );\n	return saturate( DG );\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\nvec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;\n	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;\n	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;\n	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;\n	float Ess_V = dfgV.x + dfgV.y;\n	float Ess_L = dfgL.x + dfgL.y;\n	float Ems_V = 1.0 - Ess_V;\n	float Ems_L = 1.0 - Ess_L;\n	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;\n	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );\n	float compensationFactor = Ems_V * Ems_L;\n	vec3 multiScatter = Fms * compensationFactor;\n	return singleScatter + multiScatter;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n		#ifdef USE_CLEARCOAT\n			vec3 Ncc = geometryClearcoatNormal;\n			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );\n			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );\n			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );\n			mat3 mInvClearcoat = mat3(\n				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),\n				vec3(             0, 1,             0 ),\n				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )\n			);\n			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;\n			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );\n		#endif\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n \n 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n \n 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );\n \n 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );\n \n 		irradiance *= sheenEnergyComp;\n \n 	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		diffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectDiffuse += diffuse;\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;\n 	#endif\n	vec3 singleScatteringDielectric = vec3( 0.0 );\n	vec3 multiScatteringDielectric = vec3( 0.0 );\n	vec3 singleScatteringMetallic = vec3( 0.0 );\n	vec3 multiScatteringMetallic = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#endif\n	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );\n	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );\n	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;\n	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	vec3 indirectSpecular = radiance * singleScattering;\n	indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		indirectSpecular *= sheenEnergyComp;\n		indirectDiffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectSpecular += indirectSpecular;\n	reflectedLight.indirectDiffuse += indirectDiffuse;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );\n		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n	#ifdef USE_LIGHT_PROBES_GRID\n		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;\n		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );\n		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )\n		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )\n			iblIrradiance += getIBLIrradiance( geometryNormal );\n		#endif\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	#if defined( LAMBERT ) || defined( PHONG )\n		irradiance += iblIrradiance;\n	#endif\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif", lightprobes_pars_fragment: "#ifdef USE_LIGHT_PROBES_GRID\nuniform highp sampler3D probesSH;\nuniform vec3 probesMin;\nuniform vec3 probesMax;\nuniform vec3 probesResolution;\nvec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {\n	vec3 res = probesResolution;\n	vec3 gridRange = probesMax - probesMin;\n	vec3 resMinusOne = res - 1.0;\n	vec3 probeSpacing = gridRange / resMinusOne;\n	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;\n	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );\n	uvw = uvw * resMinusOne / res + 0.5 / res;\n	float nz          = res.z;\n	float paddedSlices = nz + 2.0;\n	float atlasDepth  = 7.0 * paddedSlices;\n	float uvZBase     = uvw.z * nz + 1.0;\n	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );\n	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );\n	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );\n	vec3 c0 = s0.xyz;\n	vec3 c1 = vec3( s0.w, s1.xy );\n	vec3 c2 = vec3( s1.zw, s2.x );\n	vec3 c3 = s2.yzw;\n	vec3 c4 = s3.xyz;\n	vec3 c5 = vec3( s3.w, s4.xy );\n	vec3 c6 = vec3( s4.zw, s5.x );\n	vec3 c7 = s5.yzw;\n	vec3 c8 = s6.xyz;\n	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;\n	vec3 result = c0 * 0.886227;\n	result += c1 * 2.0 * 0.511664 * y;\n	result += c2 * 2.0 * 0.511664 * z;\n	result += c3 * 2.0 * 0.511664 * x;\n	result += c4 * 2.0 * 0.429043 * x * y;\n	result += c5 * 2.0 * 0.429043 * y * z;\n	result += c6 * ( 0.743125 * z * z - 0.247708 );\n	result += c7 * 2.0 * 0.429043 * x * z;\n	result += c8 * 0.429043 * ( x * x - y * y );\n	return max( result, vec3( 0.0 ) );\n}\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif", map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif", map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif", morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif", morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;", normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#if defined( USE_PACKED_NORMALMAP )\n		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );\n	#endif\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n		#ifdef FLIP_SIDED\n			vBitangent = - vBitangent;\n		#endif\n	#endif\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif", clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif", iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif", opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n	\n		return depth * ( far - near ) - far;\n	#else\n		return depth * ( near - far ) - near;\n	#endif\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		return ( near * far ) / ( ( near - far ) * depth - near );\n	#else\n		return ( near * far ) / ( ( far - near ) * depth - far );\n	#endif\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#endif\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#elif defined( SHADOWMAP_TYPE_BASIC )\n			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float interleavedGradientNoise( vec2 position ) {\n			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );\n		}\n		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {\n			const float goldenAngle = 2.399963229728653;\n			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );\n			float theta = float( sampleIndex ) * goldenAngle + phi;\n			return vec2( cos( theta ), sin( theta ) ) * r;\n		}\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			shadowCoord.z += shadowBias;\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n				float radius = shadowRadius * texelSize.x;\n				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n				shadow = (\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )\n				) * 0.2;\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#elif defined( SHADOWMAP_TYPE_VSM )\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;\n				float mean = distribution.x;\n				float variance = distribution.y * distribution.y;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					float hard_shadow = step( mean, shadowCoord.z );\n				#else\n					float hard_shadow = step( shadowCoord.z, mean );\n				#endif\n				\n				if ( hard_shadow == 1.0 ) {\n					shadow = 1.0;\n				} else {\n					variance = max( variance, 0.0000001 );\n					float d = shadowCoord.z - mean;\n					float p_max = variance / ( variance + d * d );\n					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );\n					shadow = max( hard_shadow, p_max );\n				}\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#else\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				float depth = texture2D( shadowMap, shadowCoord.xy ).r;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					shadow = step( depth, shadowCoord.z );\n				#else\n					shadow = step( shadowCoord.z, depth );\n				#endif\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#if defined( SHADOWMAP_TYPE_PCF )\n	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp -= shadowBias;\n			#else\n				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp += shadowBias;\n			#endif\n			float texelSize = shadowRadius / shadowMapSize.x;\n			vec3 absDir = abs( bd3D );\n			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );\n			tangent = normalize( cross( bd3D, tangent ) );\n			vec3 bitangent = cross( bd3D, tangent );\n			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n			vec2 sample0 = vogelDiskSample( 0, 5, phi );\n			vec2 sample1 = vogelDiskSample( 1, 5, phi );\n			vec2 sample2 = vogelDiskSample( 2, 5, phi );\n			vec2 sample3 = vogelDiskSample( 3, 5, phi );\n			vec2 sample4 = vogelDiskSample( 4, 5, phi );\n			shadow = (\n				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )\n			) * 0.2;\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#elif defined( SHADOWMAP_TYPE_BASIC )\n	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			float depth = textureCube( shadowMap, bd3D ).r;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				depth = 1.0 - depth;\n			#endif\n			shadow = step( dp, depth );\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#endif\n	#endif\n#endif", shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif", shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	#ifdef HAS_NORMAL\n		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n	#else\n		vec3 shadowWorldNormal = vec3( 0.0 );\n	#endif\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif", transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif", uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}", background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}", distance_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}", distance_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}", meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n \n		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;\n \n 	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}" };
  var Gn2 = { common: { diffuse: { value: new Pr(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ii() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ii() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ii() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ii() }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 }, dfgLUT: { value: null } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ii() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ii() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ii() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ii() }, normalScale: { value: new _i(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ii() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ii() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ii() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ii() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Pr(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null }, probesSH: { value: null }, probesMin: { value: new Ti() }, probesMax: { value: new Ti() }, probesResolution: { value: new Ti() } }, points: { diffuse: { value: new Pr(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ii() }, alphaTest: { value: 0 }, uvTransform: { value: new Ii() } }, sprite: { diffuse: { value: new Pr(16777215) }, opacity: { value: 1 }, center: { value: new _i(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ii() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ii() }, alphaTest: { value: 0 } } };
  var Hn2 = { basic: { uniforms: ql([Gn2.common, Gn2.specularmap, Gn2.envmap, Gn2.aomap, Gn2.lightmap, Gn2.fog]), vertexShader: Bn2.meshbasic_vert, fragmentShader: Bn2.meshbasic_frag }, lambert: { uniforms: ql([Gn2.common, Gn2.specularmap, Gn2.envmap, Gn2.aomap, Gn2.lightmap, Gn2.emissivemap, Gn2.bumpmap, Gn2.normalmap, Gn2.displacementmap, Gn2.fog, Gn2.lights, { emissive: { value: new Pr(0) }, envMapIntensity: { value: 1 } }]), vertexShader: Bn2.meshlambert_vert, fragmentShader: Bn2.meshlambert_frag }, phong: { uniforms: ql([Gn2.common, Gn2.specularmap, Gn2.envmap, Gn2.aomap, Gn2.lightmap, Gn2.emissivemap, Gn2.bumpmap, Gn2.normalmap, Gn2.displacementmap, Gn2.fog, Gn2.lights, { emissive: { value: new Pr(0) }, specular: { value: new Pr(1118481) }, shininess: { value: 30 }, envMapIntensity: { value: 1 } }]), vertexShader: Bn2.meshphong_vert, fragmentShader: Bn2.meshphong_frag }, standard: { uniforms: ql([Gn2.common, Gn2.envmap, Gn2.aomap, Gn2.lightmap, Gn2.emissivemap, Gn2.bumpmap, Gn2.normalmap, Gn2.displacementmap, Gn2.roughnessmap, Gn2.metalnessmap, Gn2.fog, Gn2.lights, { emissive: { value: new Pr(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Bn2.meshphysical_vert, fragmentShader: Bn2.meshphysical_frag }, toon: { uniforms: ql([Gn2.common, Gn2.aomap, Gn2.lightmap, Gn2.emissivemap, Gn2.bumpmap, Gn2.normalmap, Gn2.displacementmap, Gn2.gradientmap, Gn2.fog, Gn2.lights, { emissive: { value: new Pr(0) } }]), vertexShader: Bn2.meshtoon_vert, fragmentShader: Bn2.meshtoon_frag }, matcap: { uniforms: ql([Gn2.common, Gn2.bumpmap, Gn2.normalmap, Gn2.displacementmap, Gn2.fog, { matcap: { value: null } }]), vertexShader: Bn2.meshmatcap_vert, fragmentShader: Bn2.meshmatcap_frag }, points: { uniforms: ql([Gn2.points, Gn2.fog]), vertexShader: Bn2.points_vert, fragmentShader: Bn2.points_frag }, dashed: { uniforms: ql([Gn2.common, Gn2.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Bn2.linedashed_vert, fragmentShader: Bn2.linedashed_frag }, depth: { uniforms: ql([Gn2.common, Gn2.displacementmap]), vertexShader: Bn2.depth_vert, fragmentShader: Bn2.depth_frag }, normal: { uniforms: ql([Gn2.common, Gn2.bumpmap, Gn2.normalmap, Gn2.displacementmap, { opacity: { value: 1 } }]), vertexShader: Bn2.meshnormal_vert, fragmentShader: Bn2.meshnormal_frag }, sprite: { uniforms: ql([Gn2.sprite, Gn2.fog]), vertexShader: Bn2.sprite_vert, fragmentShader: Bn2.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ii() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Bn2.background_vert, fragmentShader: Bn2.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ii() } }, vertexShader: Bn2.backgroundCube_vert, fragmentShader: Bn2.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Bn2.cube_vert, fragmentShader: Bn2.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Bn2.equirect_vert, fragmentShader: Bn2.equirect_frag }, distance: { uniforms: ql([Gn2.common, Gn2.displacementmap, { referencePosition: { value: new Ti() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Bn2.distance_vert, fragmentShader: Bn2.distance_frag }, shadow: { uniforms: ql([Gn2.lights, Gn2.fog, { color: { value: new Pr(0) }, opacity: { value: 1 } }]), vertexShader: Bn2.shadow_vert, fragmentShader: Bn2.shadow_frag } };
  Hn2.physical = { uniforms: ql([Hn2.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ii() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ii() }, clearcoatNormalScale: { value: new _i(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ii() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ii() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ii() }, sheen: { value: 0 }, sheenColor: { value: new Pr(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ii() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ii() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ii() }, transmissionSamplerSize: { value: new _i() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ii() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Pr(0) }, specularColor: { value: new Pr(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ii() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ii() }, anisotropyVector: { value: new _i() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ii() } }]), vertexShader: Bn2.meshphysical_vert, fragmentShader: Bn2.meshphysical_frag };
  var Vn2 = { r: 0, b: 0, g: 0 };
  var Wn2 = new Qi();
  var zn2 = new Ii();
  function kn2(e2, t2, i2, r2, u2, g2) {
    const v2 = new Pr(0);
    let E2, S2, M2 = true === u2 ? 0 : 1, T2 = null, x2 = 0, R2 = null;
    function A2(e3) {
      let n2 = true === e3.isScene ? e3.background : null;
      if (n2 && n2.isTexture) {
        const i3 = e3.backgroundBlurriness > 0;
        n2 = t2.get(n2, i3);
      }
      return n2;
    }
    function b2(t3, n2) {
      t3.getRGB(Vn2, Xl(e2)), i2.buffers.color.setClear(Vn2.r, Vn2.g, Vn2.b, n2, g2);
    }
    return { getClearColor: function() {
      return v2;
    }, setClearColor: function(e3, t3 = 1) {
      v2.set(e3), M2 = t3, b2(v2, M2);
    }, getClearAlpha: function() {
      return M2;
    }, setClearAlpha: function(e3) {
      M2 = e3, b2(v2, M2);
    }, render: function(t3) {
      let n2 = false;
      const r3 = A2(t3);
      null === r3 ? b2(v2, M2) : r3 && r3.isColor && (b2(r3, 1), n2 = true);
      const a2 = e2.xr.getEnvironmentBlendMode();
      "additive" === a2 ? i2.buffers.color.setClear(0, 0, 0, 1, g2) : "alpha-blend" === a2 && i2.buffers.color.setClear(0, 0, 0, 0, g2), (e2.autoClear || n2) && (i2.buffers.depth.setTest(true), i2.buffers.depth.setMask(true), i2.buffers.color.setMask(true), e2.clear(e2.autoClearColor, e2.autoClearDepth, e2.autoClearStencil));
    }, addToRenderList: function(t3, n2) {
      const i3 = A2(n2);
      i3 && (i3.isCubeTexture || i3.mapping === pt) ? (void 0 === S2 && (S2 = new Ra(new yh(1, 1, 1), new Zl({ name: "BackgroundCubeMaterial", uniforms: Jl(Hn2.backgroundCube.uniforms), vertexShader: Hn2.backgroundCube.vertexShader, fragmentShader: Hn2.backgroundCube.fragmentShader, side: d, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), S2.geometry.deleteAttribute("normal"), S2.geometry.deleteAttribute("uv"), S2.onBeforeRender = function(e3, t4, n3) {
        this.matrixWorld.copyPosition(n3.matrixWorld);
      }, Object.defineProperty(S2.material, "envMap", { get: function() {
        return this.uniforms.envMap.value;
      } }), r2.update(S2)), S2.material.uniforms.envMap.value = i3, S2.material.uniforms.backgroundBlurriness.value = n2.backgroundBlurriness, S2.material.uniforms.backgroundIntensity.value = n2.backgroundIntensity, S2.material.uniforms.backgroundRotation.value.setFromMatrix4(Wn2.makeRotationFromEuler(n2.backgroundRotation)).transpose(), i3.isCubeTexture && false === i3.isRenderTargetTexture && S2.material.uniforms.backgroundRotation.value.premultiply(zn2), S2.material.toneMapped = Ri.getTransfer(i3.colorSpace) !== rs, T2 === i3 && x2 === i3.version && R2 === e2.toneMapping || (S2.material.needsUpdate = true, T2 = i3, x2 = i3.version, R2 = e2.toneMapping), S2.layers.enableAll(), t3.unshift(S2, S2.geometry, S2.material, 0, 0, null)) : i3 && i3.isTexture && (void 0 === E2 && (E2 = new Ra(new Ol(2, 2), new Zl({ name: "BackgroundMaterial", uniforms: Jl(Hn2.background.uniforms), vertexShader: Hn2.background.vertexShader, fragmentShader: Hn2.background.fragmentShader, side: u, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), E2.geometry.deleteAttribute("normal"), Object.defineProperty(E2.material, "map", { get: function() {
        return this.uniforms.t2D.value;
      } }), r2.update(E2)), E2.material.uniforms.t2D.value = i3, E2.material.uniforms.backgroundIntensity.value = n2.backgroundIntensity, E2.material.toneMapped = Ri.getTransfer(i3.colorSpace) !== rs, true === i3.matrixAutoUpdate && i3.updateMatrix(), E2.material.uniforms.uvTransform.value.copy(i3.matrix), T2 === i3 && x2 === i3.version && R2 === e2.toneMapping || (E2.material.needsUpdate = true, T2 = i3, x2 = i3.version, R2 = e2.toneMapping), E2.layers.enableAll(), t3.unshift(E2, E2.geometry, E2.material, 0, 0, null));
    }, dispose: function() {
      void 0 !== S2 && (S2.geometry.dispose(), S2.material.dispose(), S2 = void 0), void 0 !== E2 && (E2.geometry.dispose(), E2.material.dispose(), E2 = void 0);
    } };
  }
  function Xn2(e2, t2) {
    const n2 = e2.getParameter(e2.MAX_VERTEX_ATTRIBS), i2 = {}, r2 = c2(null);
    let a2 = r2, o2 = false;
    function s2(t3) {
      return e2.bindVertexArray(t3);
    }
    function l2(t3) {
      return e2.deleteVertexArray(t3);
    }
    function c2(e3) {
      const t3 = [], i3 = [], r3 = [];
      for (let e4 = 0; e4 < n2; e4++) t3[e4] = 0, i3[e4] = 0, r3[e4] = 0;
      return { geometry: null, program: null, wireframe: false, newAttributes: t3, enabledAttributes: i3, attributeDivisors: r3, object: e3, attributes: {}, index: null };
    }
    function d2() {
      const e3 = a2.newAttributes;
      for (let t3 = 0, n3 = e3.length; t3 < n3; t3++) e3[t3] = 0;
    }
    function u2(e3) {
      f2(e3, 0);
    }
    function f2(t3, n3) {
      const i3 = a2.newAttributes, r3 = a2.enabledAttributes, o3 = a2.attributeDivisors;
      i3[t3] = 1, 0 === r3[t3] && (e2.enableVertexAttribArray(t3), r3[t3] = 1), o3[t3] !== n3 && (e2.vertexAttribDivisor(t3, n3), o3[t3] = n3);
    }
    function p2() {
      const t3 = a2.newAttributes, n3 = a2.enabledAttributes;
      for (let i3 = 0, r3 = n3.length; i3 < r3; i3++) n3[i3] !== t3[i3] && (e2.disableVertexAttribArray(i3), n3[i3] = 0);
    }
    function m2(t3, n3, i3, r3, a3, o3, s3) {
      true === s3 ? e2.vertexAttribIPointer(t3, n3, i3, a3, o3) : e2.vertexAttribPointer(t3, n3, i3, r3, a3, o3);
    }
    function h2() {
      _2(), o2 = true, a2 !== r2 && (a2 = r2, s2(a2.object));
    }
    function _2() {
      r2.geometry = null, r2.program = null, r2.wireframe = false;
    }
    return { setup: function(n3, r3, l3, h3, _3) {
      let v2 = false;
      const E2 = (function(t3, n4, r4, a3) {
        const o3 = true === a3.wireframe;
        let s3 = i2[n4.id];
        void 0 === s3 && (s3 = {}, i2[n4.id] = s3);
        const l4 = true === t3.isInstancedMesh ? t3.id : 0;
        let d3 = s3[l4];
        void 0 === d3 && (d3 = {}, s3[l4] = d3);
        let u3 = d3[r4.id];
        void 0 === u3 && (u3 = {}, d3[r4.id] = u3);
        let f3 = u3[o3];
        void 0 === f3 && (f3 = c2(e2.createVertexArray()), u3[o3] = f3);
        return f3;
      })(n3, h3, l3, r3);
      a2 !== E2 && (a2 = E2, s2(a2.object)), v2 = (function(e3, t3, n4, i3) {
        const r4 = a2.attributes, o3 = t3.attributes;
        let s3 = 0;
        const l4 = n4.getAttributes();
        for (const t4 in l4) {
          if (l4[t4].location >= 0) {
            const n5 = r4[t4];
            let i4 = o3[t4];
            if (void 0 === i4 && ("instanceMatrix" === t4 && e3.instanceMatrix && (i4 = e3.instanceMatrix), "instanceColor" === t4 && e3.instanceColor && (i4 = e3.instanceColor)), void 0 === n5) return true;
            if (n5.attribute !== i4) return true;
            if (i4 && n5.data !== i4.data) return true;
            s3++;
          }
        }
        return a2.attributesNum !== s3 || a2.index !== i3;
      })(n3, h3, l3, _3), v2 && (function(e3, t3, n4, i3) {
        const r4 = {}, o3 = t3.attributes;
        let s3 = 0;
        const l4 = n4.getAttributes();
        for (const t4 in l4) {
          if (l4[t4].location >= 0) {
            let n5 = o3[t4];
            void 0 === n5 && ("instanceMatrix" === t4 && e3.instanceMatrix && (n5 = e3.instanceMatrix), "instanceColor" === t4 && e3.instanceColor && (n5 = e3.instanceColor));
            const i4 = {};
            i4.attribute = n5, n5 && n5.data && (i4.data = n5.data), r4[t4] = i4, s3++;
          }
        }
        a2.attributes = r4, a2.attributesNum = s3, a2.index = i3;
      })(n3, h3, l3, _3), null !== _3 && t2.update(_3, e2.ELEMENT_ARRAY_BUFFER), (v2 || o2) && (o2 = false, (function(n4, i3, r4, a3) {
        d2();
        const o3 = a3.attributes, s3 = r4.getAttributes(), l4 = i3.defaultAttributeValues;
        for (const i4 in s3) {
          const r5 = s3[i4];
          if (r5.location >= 0) {
            let s4 = o3[i4];
            if (void 0 === s4 && ("instanceMatrix" === i4 && n4.instanceMatrix && (s4 = n4.instanceMatrix), "instanceColor" === i4 && n4.instanceColor && (s4 = n4.instanceColor)), void 0 !== s4) {
              const i5 = s4.normalized, o4 = s4.itemSize, l5 = t2.get(s4);
              if (void 0 === l5) continue;
              const c3 = l5.buffer, d3 = l5.type, p3 = l5.bytesPerElement, h4 = d3 === e2.INT || d3 === e2.UNSIGNED_INT || s4.gpuType === kt;
              if (s4.isInterleavedBufferAttribute) {
                const t3 = s4.data, l6 = t3.stride, _4 = s4.offset;
                if (t3.isInstancedInterleavedBuffer) {
                  for (let e3 = 0; e3 < r5.locationSize; e3++) f2(r5.location + e3, t3.meshPerAttribute);
                  true !== n4.isInstancedMesh && void 0 === a3._maxInstanceCount && (a3._maxInstanceCount = t3.meshPerAttribute * t3.count);
                } else for (let e3 = 0; e3 < r5.locationSize; e3++) u2(r5.location + e3);
                e2.bindBuffer(e2.ARRAY_BUFFER, c3);
                for (let e3 = 0; e3 < r5.locationSize; e3++) m2(r5.location + e3, o4 / r5.locationSize, d3, i5, l6 * p3, (_4 + o4 / r5.locationSize * e3) * p3, h4);
              } else {
                if (s4.isInstancedBufferAttribute) {
                  for (let e3 = 0; e3 < r5.locationSize; e3++) f2(r5.location + e3, s4.meshPerAttribute);
                  true !== n4.isInstancedMesh && void 0 === a3._maxInstanceCount && (a3._maxInstanceCount = s4.meshPerAttribute * s4.count);
                } else for (let e3 = 0; e3 < r5.locationSize; e3++) u2(r5.location + e3);
                e2.bindBuffer(e2.ARRAY_BUFFER, c3);
                for (let e3 = 0; e3 < r5.locationSize; e3++) m2(r5.location + e3, o4 / r5.locationSize, d3, i5, o4 * p3, o4 / r5.locationSize * e3 * p3, h4);
              }
            } else if (void 0 !== l4) {
              const t3 = l4[i4];
              if (void 0 !== t3) switch (t3.length) {
                case 2:
                  e2.vertexAttrib2fv(r5.location, t3);
                  break;
                case 3:
                  e2.vertexAttrib3fv(r5.location, t3);
                  break;
                case 4:
                  e2.vertexAttrib4fv(r5.location, t3);
                  break;
                default:
                  e2.vertexAttrib1fv(r5.location, t3);
              }
            }
          }
        }
        p2();
      })(n3, r3, l3, h3), null !== _3 && e2.bindBuffer(e2.ELEMENT_ARRAY_BUFFER, t2.get(_3).buffer));
    }, reset: h2, resetDefaultState: _2, dispose: function() {
      h2();
      for (const e3 in i2) {
        const t3 = i2[e3];
        for (const e4 in t3) {
          const n3 = t3[e4];
          for (const e5 in n3) {
            const t4 = n3[e5];
            for (const e6 in t4) l2(t4[e6].object), delete t4[e6];
            delete n3[e5];
          }
        }
        delete i2[e3];
      }
    }, releaseStatesOfGeometry: function(e3) {
      if (void 0 === i2[e3.id]) return;
      const t3 = i2[e3.id];
      for (const e4 in t3) {
        const n3 = t3[e4];
        for (const e5 in n3) {
          const t4 = n3[e5];
          for (const e6 in t4) l2(t4[e6].object), delete t4[e6];
          delete n3[e5];
        }
      }
      delete i2[e3.id];
    }, releaseStatesOfObject: function(e3) {
      for (const t3 in i2) {
        const n3 = i2[t3], r3 = true === e3.isInstancedMesh ? e3.id : 0, a3 = n3[r3];
        if (void 0 !== a3) {
          for (const e4 in a3) {
            const t4 = a3[e4];
            for (const e5 in t4) l2(t4[e5].object), delete t4[e5];
            delete a3[e4];
          }
          delete n3[r3], 0 === Object.keys(n3).length && delete i2[t3];
        }
      }
    }, releaseStatesOfProgram: function(e3) {
      for (const t3 in i2) {
        const n3 = i2[t3];
        for (const t4 in n3) {
          const i3 = n3[t4];
          if (void 0 === i3[e3.id]) continue;
          const r3 = i3[e3.id];
          for (const e4 in r3) l2(r3[e4].object), delete r3[e4];
          delete i3[e3.id];
        }
      }
    }, initAttributes: d2, enableAttribute: u2, disableUnusedAttributes: p2 };
  }
  function Kn2(e2, t2, n2) {
    let i2;
    this.setMode = function(e3) {
      i2 = e3;
    }, this.render = function(t3, r2) {
      e2.drawArrays(i2, t3, r2), n2.update(r2, i2, 1);
    }, this.renderInstances = function(t3, r2, a2) {
      0 !== a2 && (e2.drawArraysInstanced(i2, t3, r2, a2), n2.update(r2, i2, a2));
    }, this.renderMultiDraw = function(e3, r2, a2) {
      if (0 === a2) return;
      t2.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i2, e3, 0, r2, 0, a2);
      let o2 = 0;
      for (let e4 = 0; e4 < a2; e4++) o2 += r2[e4];
      n2.update(o2, i2, 1);
    };
  }
  function Yn2(e2, t2, n2, i2) {
    let r2;
    function a2(t3) {
      if ("highp" === t3) {
        if (e2.getShaderPrecisionFormat(e2.VERTEX_SHADER, e2.HIGH_FLOAT).precision > 0 && e2.getShaderPrecisionFormat(e2.FRAGMENT_SHADER, e2.HIGH_FLOAT).precision > 0) return "highp";
        t3 = "mediump";
      }
      return "mediump" === t3 && e2.getShaderPrecisionFormat(e2.VERTEX_SHADER, e2.MEDIUM_FLOAT).precision > 0 && e2.getShaderPrecisionFormat(e2.FRAGMENT_SHADER, e2.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
    }
    let o2 = void 0 !== n2.precision ? n2.precision : "highp";
    const s2 = a2(o2);
    s2 !== o2 && (ai("WebGLRenderer:", o2, "not supported, using", s2, "instead."), o2 = s2);
    const l2 = true === n2.logarithmicDepthBuffer, c2 = true === n2.reversedDepthBuffer && t2.has("EXT_clip_control");
    true === n2.reversedDepthBuffer && false === c2 && ai("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
    return { isWebGL2: true, getMaxAnisotropy: function() {
      if (void 0 !== r2) return r2;
      if (true === t2.has("EXT_texture_filter_anisotropic")) {
        const n3 = t2.get("EXT_texture_filter_anisotropic");
        r2 = e2.getParameter(n3.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else r2 = 0;
      return r2;
    }, getMaxPrecision: a2, textureFormatReadable: function(t3) {
      return t3 === jt || i2.convert(t3) === e2.getParameter(e2.IMPLEMENTATION_COLOR_READ_FORMAT);
    }, textureTypeReadable: function(n3) {
      const r3 = n3 === Rt && (t2.has("EXT_color_buffer_half_float") || t2.has("EXT_color_buffer_float"));
      return !(n3 !== zt && i2.convert(n3) !== e2.getParameter(e2.IMPLEMENTATION_COLOR_READ_TYPE) && n3 !== Pt && !r3);
    }, precision: o2, logarithmicDepthBuffer: l2, reversedDepthBuffer: c2, maxTextures: e2.getParameter(e2.MAX_TEXTURE_IMAGE_UNITS), maxVertexTextures: e2.getParameter(e2.MAX_VERTEX_TEXTURE_IMAGE_UNITS), maxTextureSize: e2.getParameter(e2.MAX_TEXTURE_SIZE), maxCubemapSize: e2.getParameter(e2.MAX_CUBE_MAP_TEXTURE_SIZE), maxAttributes: e2.getParameter(e2.MAX_VERTEX_ATTRIBS), maxVertexUniforms: e2.getParameter(e2.MAX_VERTEX_UNIFORM_VECTORS), maxVaryings: e2.getParameter(e2.MAX_VARYING_VECTORS), maxFragmentUniforms: e2.getParameter(e2.MAX_FRAGMENT_UNIFORM_VECTORS), maxSamples: e2.getParameter(e2.MAX_SAMPLES), samples: e2.getParameter(e2.SAMPLES) };
  }
  function qn2(t2) {
    const n2 = this;
    let i2 = null, r2 = 0, a2 = false, o2 = false;
    const s2 = new lo(), l2 = new Ii(), c2 = { value: null, needsUpdate: false };
    function d2(e2, t3, i3, r3) {
      const a3 = null !== e2 ? e2.length : 0;
      let o3 = null;
      if (0 !== a3) {
        if (o3 = c2.value, true !== r3 || null === o3) {
          const n3 = i3 + 4 * a3, r4 = t3.matrixWorldInverse;
          l2.getNormalMatrix(r4), (null === o3 || o3.length < n3) && (o3 = new Float32Array(n3));
          for (let t4 = 0, n4 = i3; t4 !== a3; ++t4, n4 += 4) s2.copy(e2[t4]).applyMatrix4(r4, l2), s2.normal.toArray(o3, n4), o3[n4 + 3] = s2.constant;
        }
        c2.value = o3, c2.needsUpdate = true;
      }
      return n2.numPlanes = a3, n2.numIntersection = 0, o3;
    }
    this.uniform = c2, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e2, t3) {
      const n3 = 0 !== e2.length || t3 || 0 !== r2 || a2;
      return a2 = t3, r2 = e2.length, n3;
    }, this.beginShadows = function() {
      o2 = true, d2(null);
    }, this.endShadows = function() {
      o2 = false;
    }, this.setGlobalState = function(e2, t3) {
      i2 = d2(e2, t3, 0);
    }, this.setState = function(e2, s3, l3) {
      const u2 = e2.clippingPlanes, f2 = e2.clipIntersection, p2 = e2.clipShadows, m2 = t2.get(e2);
      if (!a2 || null === u2 || 0 === u2.length || o2 && !p2) o2 ? d2(null) : (function() {
        c2.value !== i2 && (c2.value = i2, c2.needsUpdate = r2 > 0);
        n2.numPlanes = r2, n2.numIntersection = 0;
      })();
      else {
        const e3 = o2 ? 0 : r2, t3 = 4 * e3;
        let n3 = m2.clippingState || null;
        c2.value = n3, n3 = d2(u2, s3, t3, l3);
        for (let e4 = 0; e4 !== t3; ++e4) n3[e4] = i2[e4];
        m2.clippingState = n3, this.numIntersection = f2 ? this.numPlanes : 0, this.numPlanes += e3;
      }
    };
  }
  zn2.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
  var jn2 = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
  var Zn2 = 20;
  var $n2 = new au();
  var Qn2 = new Pr();
  var Jn2 = null;
  var ei2 = 0;
  var ti2 = 0;
  var ni2 = false;
  var ii2 = new Ti();
  var ri2 = class {
    constructor(e2) {
      this._renderer = e2, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
    }
    fromScene(e2, t2 = 0, n2 = 0.1, i2 = 100, r2 = {}) {
      const { size: a2 = 256, position: o2 = ii2 } = r2;
      Jn2 = this._renderer.getRenderTarget(), ei2 = this._renderer.getActiveCubeFace(), ti2 = this._renderer.getActiveMipmapLevel(), ni2 = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a2);
      const s2 = this._allocateTargets();
      return s2.depthBuffer = true, this._sceneToCubeUV(e2, n2, i2, s2, o2), t2 > 0 && this._blur(s2, 0, 0, t2), this._applyPMREM(s2), this._cleanup(s2), s2;
    }
    fromEquirectangular(e2, t2 = null) {
      return this._fromTexture(e2, t2);
    }
    fromCubemap(e2, t2 = null) {
      return this._fromTexture(e2, t2);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial && (this._cubemapMaterial = li(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial && (this._equirectMaterial = si2(), this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose(), null !== this._backgroundBox && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
    }
    _setSize(e2) {
      this._lodMax = Math.floor(Math.log2(e2)), this._cubeSize = Math.pow(2, this._lodMax);
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._ggxMaterial && this._ggxMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
      for (let e2 = 0; e2 < this._lodMeshes.length; e2++) this._lodMeshes[e2].geometry.dispose();
    }
    _cleanup(e2) {
      this._renderer.setRenderTarget(Jn2, ei2, ti2), this._renderer.xr.enabled = ni2, e2.scissorTest = false, oi2(e2, 0, 0, e2.width, e2.height);
    }
    _fromTexture(e2, t2) {
      e2.mapping === lt || e2.mapping === ct ? this._setSize(0 === e2.image.length ? 16 : e2.image[0].width || e2.image[0].image.width) : this._setSize(e2.image.width / 4), Jn2 = this._renderer.getRenderTarget(), ei2 = this._renderer.getActiveCubeFace(), ti2 = this._renderer.getActiveMipmapLevel(), ni2 = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
      const n2 = t2 || this._allocateTargets();
      return this._textureToCubeUV(e2, n2), this._applyPMREM(n2), this._cleanup(n2), n2;
    }
    _allocateTargets() {
      const e2 = 3 * Math.max(this._cubeSize, 112), t2 = 4 * this._cubeSize, n2 = { magFilter: Mt, minFilter: Mt, generateMipmaps: false, type: Rt, format: jt, colorSpace: ss, depthBuffer: false }, r2 = ai2(e2, t2, n2);
      if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== e2 || this._pingPongRenderTarget.height !== t2) {
        null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = ai2(e2, t2, n2);
        const { _lodMax: r3 } = this;
        ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = (function(e3) {
          const t3 = [], n3 = [], i2 = [];
          let r4 = e3;
          const a2 = e3 - 4 + 1 + jn2.length;
          for (let s2 = 0; s2 < a2; s2++) {
            const a3 = Math.pow(2, r4);
            t3.push(a3);
            let l2 = 1 / a3;
            s2 > e3 - 4 ? l2 = jn2[s2 - e3 + 4 - 1] : 0 === s2 && (l2 = 0), n3.push(l2);
            const c2 = 1 / (a3 - 2), d2 = -c2, u2 = 1 + c2, f2 = [d2, d2, u2, d2, u2, u2, d2, d2, u2, u2, d2, u2], p2 = 6, m2 = 6, h2 = 3, _2 = 2, g2 = 1, v2 = new Float32Array(h2 * m2 * p2), E2 = new Float32Array(_2 * m2 * p2), S2 = new Float32Array(g2 * m2 * p2);
            for (let e4 = 0; e4 < p2; e4++) {
              const t4 = e4 % 3 * 2 / 3 - 1, n4 = e4 > 2 ? 0 : -1, i3 = [t4, n4, 0, t4 + 2 / 3, n4, 0, t4 + 2 / 3, n4 + 1, 0, t4, n4, 0, t4 + 2 / 3, n4 + 1, 0, t4, n4 + 1, 0];
              v2.set(i3, h2 * m2 * e4), E2.set(f2, _2 * m2 * e4);
              const r5 = [e4, e4, e4, e4, e4, e4];
              S2.set(r5, g2 * m2 * e4);
            }
            const M2 = new Wn();
            M2.setAttribute("position", new Mn(v2, h2)), M2.setAttribute("uv", new Mn(E2, _2)), M2.setAttribute("faceIndex", new Mn(S2, g2)), i2.push(new Ra(M2, null)), r4 > 4 && r4--;
          }
          return { lodMeshes: i2, sizeLods: t3, sigmas: n3 };
        })(r3)), this._blurMaterial = (function(e3, t3, n3) {
          const r4 = new Float32Array(Zn2), a2 = new Ti(0, 1, 0), o2 = new Zl({ name: "SphericalGaussianBlur", defines: { n: Zn2, CUBEUV_TEXEL_WIDTH: 1 / t3, CUBEUV_TEXEL_HEIGHT: 1 / n3, CUBEUV_MAX_MIP: `${e3}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: r4 }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: a2 } }, vertexShader: ci2(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		", blending: m, depthTest: false, depthWrite: false });
          return o2;
        })(r3, e2, t2), this._ggxMaterial = (function(e3, t3, n3) {
          const i2 = new Zl({ name: "PMREMGGXConvolution", defines: { GGX_SAMPLES: 256, CUBEUV_TEXEL_WIDTH: 1 / t3, CUBEUV_TEXEL_HEIGHT: 1 / n3, CUBEUV_MAX_MIP: `${e3}.0` }, uniforms: { envMap: { value: null }, roughness: { value: 0 }, mipInt: { value: 0 } }, vertexShader: ci2(), fragmentShader: '\n\n			precision highp float;\n			precision highp int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform float roughness;\n			uniform float mipInt;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			#define PI 3.14159265359\n\n			// Van der Corput radical inverse\n			float radicalInverse_VdC(uint bits) {\n				bits = (bits << 16u) | (bits >> 16u);\n				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\n				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\n				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\n				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\n				return float(bits) * 2.3283064365386963e-10; // / 0x100000000\n			}\n\n			// Hammersley sequence\n			vec2 hammersley(uint i, uint N) {\n				return vec2(float(i) / float(N), radicalInverse_VdC(i));\n			}\n\n			// GGX VNDF importance sampling (Eric Heitz 2018)\n			// "Sampling the GGX Distribution of Visible Normals"\n			// https://jcgt.org/published/0007/04/01/\n			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {\n				float alpha = roughness * roughness;\n\n				// Section 4.1: Orthonormal basis\n				vec3 T1 = vec3(1.0, 0.0, 0.0);\n				vec3 T2 = cross(V, T1);\n\n				// Section 4.2: Parameterization of projected area\n				float r = sqrt(Xi.x);\n				float phi = 2.0 * PI * Xi.y;\n				float t1 = r * cos(phi);\n				float t2 = r * sin(phi);\n				float s = 0.5 * (1.0 + V.z);\n				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;\n\n				// Section 4.3: Reprojection onto hemisphere\n				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;\n\n				// Section 3.4: Transform back to ellipsoid configuration\n				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));\n			}\n\n			void main() {\n				vec3 N = normalize(vOutputDirection);\n				vec3 V = N; // Assume view direction equals normal for pre-filtering\n\n				vec3 prefilteredColor = vec3(0.0);\n				float totalWeight = 0.0;\n\n				// For very low roughness, just sample the environment directly\n				if (roughness < 0.001) {\n					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);\n					return;\n				}\n\n				// Tangent space basis for VNDF sampling\n				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);\n				vec3 tangent = normalize(cross(up, N));\n				vec3 bitangent = cross(N, tangent);\n\n				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {\n					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));\n\n					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)\n					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);\n\n					// Transform H back to world space\n					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);\n					vec3 L = normalize(2.0 * dot(V, H) * H - V);\n\n					float NdotL = max(dot(N, L), 0.0);\n\n					if(NdotL > 0.0) {\n						// Sample environment at fixed mip level\n						// VNDF importance sampling handles the distribution filtering\n						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);\n\n						// Weight by NdotL for the split-sum approximation\n						// VNDF PDF naturally accounts for the visible microfacet distribution\n						prefilteredColor += sampleColor * NdotL;\n						totalWeight += NdotL;\n					}\n				}\n\n				if (totalWeight > 0.0) {\n					prefilteredColor = prefilteredColor / totalWeight;\n				}\n\n				gl_FragColor = vec4(prefilteredColor, 1.0);\n			}\n		', blending: m, depthTest: false, depthWrite: false });
          return i2;
        })(r3, e2, t2);
      }
      return r2;
    }
    _compileMaterial(e2) {
      const t2 = new Ra(new Wn(), e2);
      this._renderer.compile(t2, $n2);
    }
    _sceneToCubeUV(e2, t2, n2, i2, r2) {
      const a2 = new eu(90, 1, t2, n2), l2 = [1, -1, 1, 1, 1, 1], d2 = [1, 1, 1, -1, -1, -1], u2 = this._renderer, f2 = u2.autoClear, p2 = u2.toneMapping;
      u2.getClearColor(Qn2), u2.toneMapping = Q, u2.autoClear = false;
      u2.state.buffers.depth.getReversed() && (u2.setRenderTarget(i2), u2.clearDepth(), u2.setRenderTarget(null)), null === this._backgroundBox && (this._backgroundBox = new Ra(new yh(), new Ma({ name: "PMREM.Background", side: d, depthWrite: false, depthTest: false })));
      const m2 = this._backgroundBox, h2 = m2.material;
      let _2 = false;
      const g2 = e2.background;
      g2 ? g2.isColor && (h2.color.copy(g2), e2.background = null, _2 = true) : (h2.color.copy(Qn2), _2 = true);
      for (let t3 = 0; t3 < 6; t3++) {
        const n3 = t3 % 3;
        0 === n3 ? (a2.up.set(0, l2[t3], 0), a2.position.set(r2.x, r2.y, r2.z), a2.lookAt(r2.x + d2[t3], r2.y, r2.z)) : 1 === n3 ? (a2.up.set(0, 0, l2[t3]), a2.position.set(r2.x, r2.y, r2.z), a2.lookAt(r2.x, r2.y + d2[t3], r2.z)) : (a2.up.set(0, l2[t3], 0), a2.position.set(r2.x, r2.y, r2.z), a2.lookAt(r2.x, r2.y, r2.z + d2[t3]));
        const o2 = this._cubeSize;
        oi2(i2, n3 * o2, t3 > 2 ? o2 : 0, o2, o2), u2.setRenderTarget(i2), _2 && u2.render(m2, a2), u2.render(e2, a2);
      }
      u2.toneMapping = p2, u2.autoClear = f2, e2.background = g2;
    }
    _textureToCubeUV(e2, t2) {
      const n2 = this._renderer, i2 = e2.mapping === lt || e2.mapping === ct;
      i2 ? (null === this._cubemapMaterial && (this._cubemapMaterial = li()), this._cubemapMaterial.uniforms.flipEnvMap.value = false === e2.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = si2());
      const r2 = i2 ? this._cubemapMaterial : this._equirectMaterial, a2 = this._lodMeshes[0];
      a2.material = r2;
      r2.uniforms.envMap.value = e2;
      const o2 = this._cubeSize;
      oi2(t2, 0, 0, 3 * o2, 2 * o2), n2.setRenderTarget(t2), n2.render(a2, $n2);
    }
    _applyPMREM(e2) {
      const t2 = this._renderer, n2 = t2.autoClear;
      t2.autoClear = false;
      const i2 = this._lodMeshes.length;
      for (let t3 = 1; t3 < i2; t3++) this._applyGGXFilter(e2, t3 - 1, t3);
      t2.autoClear = n2;
    }
    _applyGGXFilter(e2, t2, n2) {
      const i2 = this._renderer, r2 = this._pingPongRenderTarget, a2 = this._ggxMaterial, o2 = this._lodMeshes[n2];
      o2.material = a2;
      const s2 = a2.uniforms, l2 = n2 / (this._lodMeshes.length - 1), c2 = t2 / (this._lodMeshes.length - 1), d2 = Math.sqrt(l2 * l2 - c2 * c2) * (0 + 1.25 * l2), { _lodMax: u2 } = this, f2 = this._sizeLods[n2], p2 = 3 * f2 * (n2 > u2 - 4 ? n2 - u2 + 4 : 0), m2 = 4 * (this._cubeSize - f2);
      s2.envMap.value = e2.texture, s2.roughness.value = d2, s2.mipInt.value = u2 - t2, oi2(r2, p2, m2, 3 * f2, 2 * f2), i2.setRenderTarget(r2), i2.render(o2, $n2), s2.envMap.value = r2.texture, s2.roughness.value = 0, s2.mipInt.value = u2 - n2, oi2(e2, p2, m2, 3 * f2, 2 * f2), i2.setRenderTarget(e2), i2.render(o2, $n2);
    }
    _blur(e2, t2, n2, i2, r2) {
      const a2 = this._pingPongRenderTarget;
      this._halfBlur(e2, a2, t2, n2, i2, "latitudinal", r2), this._halfBlur(a2, e2, n2, n2, i2, "longitudinal", r2);
    }
    _halfBlur(e2, t2, n2, i2, r2, a2, o2) {
      const s2 = this._renderer, l2 = this._blurMaterial;
      "latitudinal" !== a2 && "longitudinal" !== a2 && oi("blur direction must be either latitudinal or longitudinal!");
      const c2 = this._lodMeshes[i2];
      c2.material = l2;
      const d2 = l2.uniforms, u2 = this._sizeLods[n2] - 1, f2 = isFinite(r2) ? Math.PI / (2 * u2) : 2 * Math.PI / 39, p2 = r2 / f2, m2 = isFinite(r2) ? 1 + Math.floor(3 * p2) : Zn2;
      m2 > Zn2 && ai(`sigmaRadians, ${r2}, is too large and will clip, as it requested ${m2} samples when the maximum is set to 20`);
      const h2 = [];
      let _2 = 0;
      for (let e3 = 0; e3 < Zn2; ++e3) {
        const t3 = e3 / p2, n3 = Math.exp(-t3 * t3 / 2);
        h2.push(n3), 0 === e3 ? _2 += n3 : e3 < m2 && (_2 += 2 * n3);
      }
      for (let e3 = 0; e3 < h2.length; e3++) h2[e3] = h2[e3] / _2;
      d2.envMap.value = e2.texture, d2.samples.value = m2, d2.weights.value = h2, d2.latitudinal.value = "latitudinal" === a2, o2 && (d2.poleAxis.value = o2);
      const { _lodMax: g2 } = this;
      d2.dTheta.value = f2, d2.mipInt.value = g2 - n2;
      const E2 = this._sizeLods[i2];
      oi2(t2, 3 * E2 * (i2 > g2 - 4 ? i2 - g2 + 4 : 0), 4 * (this._cubeSize - E2), 3 * E2, 2 * E2), s2.setRenderTarget(t2), s2.render(c2, $n2);
    }
  };
  function ai2(e2, t2, n2) {
    const i2 = new Xi(e2, t2, n2);
    return i2.texture.mapping = pt, i2.texture.name = "PMREM.cubeUv", i2.scissorTest = true, i2;
  }
  function oi2(e2, t2, n2, i2, r2) {
    e2.viewport.set(t2, n2, i2, r2), e2.scissor.set(t2, n2, i2, r2);
  }
  function si2() {
    return new Zl({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ci2(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		", blending: m, depthTest: false, depthWrite: false });
  }
  function li() {
    return new Zl({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ci2(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		", blending: m, depthTest: false, depthWrite: false });
  }
  function ci2() {
    return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
  }
  var di2 = class extends Xi {
    constructor(e2 = 1, t2 = {}) {
      super(e2, e2, t2), this.isWebGLCubeRenderTarget = true;
      const n2 = { width: e2, height: e2, depth: 1 }, i2 = [n2, n2, n2, n2, n2, n2];
      this.texture = new lh(i2), this._setTextureOptions(t2), this.texture.isRenderTargetTexture = true;
    }
    fromEquirectangularTexture(e2, t2) {
      this.texture.type = t2.type, this.texture.colorSpace = t2.colorSpace, this.texture.generateMipmaps = t2.generateMipmaps, this.texture.minFilter = t2.minFilter, this.texture.magFilter = t2.magFilter;
      const n2 = { uniforms: { tEquirect: { value: null } }, vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			", fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			" }, i2 = new yh(5, 5, 5), r2 = new Zl({ name: "CubemapFromEquirect", uniforms: Jl(n2.uniforms), vertexShader: n2.vertexShader, fragmentShader: n2.fragmentShader, side: d, blending: m });
      r2.uniforms.tEquirect.value = t2;
      const a2 = new Ra(i2, r2), u2 = t2.minFilter;
      t2.minFilter === At && (t2.minFilter = Mt);
      return new Pu(1, 10, this).update(e2, a2), t2.minFilter = u2, a2.geometry.dispose(), a2.material.dispose(), this;
    }
    clear(e2, t2 = true, n2 = true, i2 = true) {
      const r2 = e2.getRenderTarget();
      for (let r3 = 0; r3 < 6; r3++) e2.setRenderTarget(this, r3), e2.clear(t2, n2, i2);
      e2.setRenderTarget(r2);
    }
  };
  function ui2(e2) {
    let t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap(), i2 = null;
    function r2(e3, t3) {
      return t3 === ut ? e3.mapping = lt : t3 === dt && (e3.mapping = ct), e3;
    }
    function a2(e3) {
      const n3 = e3.target;
      n3.removeEventListener("dispose", a2);
      const i3 = t2.get(n3);
      void 0 !== i3 && (t2.delete(n3), i3.dispose());
    }
    function o2(e3) {
      const t3 = e3.target;
      t3.removeEventListener("dispose", o2);
      const i3 = n2.get(t3);
      void 0 !== i3 && (n2.delete(t3), i3.dispose());
    }
    return { get: function(s2, l2 = false) {
      return null == s2 ? null : l2 ? (function(t3) {
        if (t3 && t3.isTexture) {
          const r3 = t3.mapping, a3 = r3 === ut || r3 === dt, s3 = r3 === lt || r3 === ct;
          if (a3 || s3) {
            let r4 = n2.get(t3);
            const l3 = void 0 !== r4 ? r4.texture.pmremVersion : 0;
            if (t3.isRenderTargetTexture && t3.pmremVersion !== l3) return null === i2 && (i2 = new ri2(e2)), r4 = a3 ? i2.fromEquirectangular(t3, r4) : i2.fromCubemap(t3, r4), r4.texture.pmremVersion = t3.pmremVersion, n2.set(t3, r4), r4.texture;
            if (void 0 !== r4) return r4.texture;
            {
              const l4 = t3.image;
              return a3 && l4 && l4.height > 0 || s3 && l4 && (function(e3) {
                let t4 = 0;
                const n3 = 6;
                for (let i3 = 0; i3 < n3; i3++) void 0 !== e3[i3] && t4++;
                return t4 === n3;
              })(l4) ? (null === i2 && (i2 = new ri2(e2)), r4 = a3 ? i2.fromEquirectangular(t3) : i2.fromCubemap(t3), r4.texture.pmremVersion = t3.pmremVersion, n2.set(t3, r4), t3.addEventListener("dispose", o2), r4.texture) : null;
            }
          }
        }
        return t3;
      })(s2) : (function(n3) {
        if (n3 && n3.isTexture) {
          const i3 = n3.mapping;
          if (i3 === ut || i3 === dt) {
            if (t2.has(n3)) {
              return r2(t2.get(n3).texture, n3.mapping);
            }
            {
              const i4 = n3.image;
              if (i4 && i4.height > 0) {
                const o3 = new di2(i4.height);
                return o3.fromEquirectangularTexture(e2, n3), t2.set(n3, o3), n3.addEventListener("dispose", a2), r2(o3.texture, n3.mapping);
              }
              return null;
            }
          }
        }
        return n3;
      })(s2);
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap(), null !== i2 && (i2.dispose(), i2 = null);
    } };
  }
  function fi2(e2) {
    const t2 = {};
    function n2(n3) {
      if (void 0 !== t2[n3]) return t2[n3];
      const i2 = e2.getExtension(n3);
      return t2[n3] = i2, i2;
    }
    return { has: function(e3) {
      return null !== n2(e3);
    }, init: function() {
      n2("EXT_color_buffer_float"), n2("WEBGL_clip_cull_distance"), n2("OES_texture_float_linear"), n2("EXT_color_buffer_half_float"), n2("WEBGL_multisampled_render_to_texture"), n2("WEBGL_render_shared_exponent");
    }, get: function(e3) {
      const t3 = n2(e3);
      return null === t3 && hi("WebGLRenderer: " + e3 + " extension not supported."), t3;
    } };
  }
  function pi2(e2, t2, n2, i2) {
    const r2 = {}, a2 = /* @__PURE__ */ new WeakMap();
    function o2(e3) {
      const s3 = e3.target;
      null !== s3.index && t2.remove(s3.index);
      for (const e4 in s3.attributes) t2.remove(s3.attributes[e4]);
      s3.removeEventListener("dispose", o2), delete r2[s3.id];
      const l2 = a2.get(s3);
      l2 && (t2.remove(l2), a2.delete(s3)), i2.releaseStatesOfGeometry(s3), true === s3.isInstancedBufferGeometry && delete s3._maxInstanceCount, n2.memory.geometries--;
    }
    function s2(e3) {
      const n3 = [], i3 = e3.index, r3 = e3.attributes.position;
      let o3 = 0;
      if (void 0 === r3) return;
      if (null !== i3) {
        const e4 = i3.array;
        o3 = i3.version;
        for (let t3 = 0, i4 = e4.length; t3 < i4; t3 += 3) {
          const i5 = e4[t3 + 0], r4 = e4[t3 + 1], a3 = e4[t3 + 2];
          n3.push(i5, r4, r4, a3, a3, i5);
        }
      } else {
        const e4 = r3.array;
        o3 = r3.version;
        for (let t3 = 0, i4 = e4.length / 3 - 1; t3 < i4; t3 += 3) {
          const e5 = t3 + 0, i5 = t3 + 1, r4 = t3 + 2;
          n3.push(e5, i5, i5, r4, r4, e5);
        }
      }
      const s3 = new (r3.count >= 65535 ? In : zn)(n3, 1);
      s3.version = o3;
      const l2 = a2.get(e3);
      l2 && t2.remove(l2), a2.set(e3, s3);
    }
    return { get: function(e3, t3) {
      return true === r2[t3.id] || (t3.addEventListener("dispose", o2), r2[t3.id] = true, n2.memory.geometries++), t3;
    }, update: function(n3) {
      const i3 = n3.attributes;
      for (const n4 in i3) t2.update(i3[n4], e2.ARRAY_BUFFER);
    }, getWireframeAttribute: function(e3) {
      const t3 = a2.get(e3);
      if (t3) {
        const n3 = e3.index;
        null !== n3 && t3.version < n3.version && s2(e3);
      } else s2(e3);
      return a2.get(e3);
    } };
  }
  function mi(e2, t2, n2) {
    let i2, r2, a2;
    this.setMode = function(e3) {
      i2 = e3;
    }, this.setIndex = function(e3) {
      r2 = e3.type, a2 = e3.bytesPerElement;
    }, this.render = function(t3, o2) {
      e2.drawElements(i2, o2, r2, t3 * a2), n2.update(o2, i2, 1);
    }, this.renderInstances = function(t3, o2, s2) {
      0 !== s2 && (e2.drawElementsInstanced(i2, o2, r2, t3 * a2, s2), n2.update(o2, i2, s2));
    }, this.renderMultiDraw = function(e3, a3, o2) {
      if (0 === o2) return;
      t2.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i2, a3, 0, r2, e3, 0, o2);
      let s2 = 0;
      for (let e4 = 0; e4 < o2; e4++) s2 += a3[e4];
      n2.update(s2, i2, 1);
    };
  }
  function hi2(e2) {
    const t2 = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return { memory: { geometries: 0, textures: 0 }, render: t2, programs: null, autoReset: true, reset: function() {
      t2.calls = 0, t2.triangles = 0, t2.points = 0, t2.lines = 0;
    }, update: function(n2, i2, r2) {
      switch (t2.calls++, i2) {
        case e2.TRIANGLES:
          t2.triangles += r2 * (n2 / 3);
          break;
        case e2.LINES:
          t2.lines += r2 * (n2 / 2);
          break;
        case e2.LINE_STRIP:
          t2.lines += r2 * (n2 - 1);
          break;
        case e2.LINE_LOOP:
          t2.lines += r2 * n2;
          break;
        case e2.POINTS:
          t2.points += r2 * n2;
          break;
        default:
          oi("WebGLInfo: Unknown draw mode:", i2);
      }
    } };
  }
  function _i2(e2, n2, i2) {
    const r2 = /* @__PURE__ */ new WeakMap(), a2 = new qi();
    return { update: function(o2, s2, l2) {
      const c2 = o2.morphTargetInfluences, d2 = s2.morphAttributes.position || s2.morphAttributes.normal || s2.morphAttributes.color, u2 = void 0 !== d2 ? d2.length : 0;
      let f2 = r2.get(s2);
      if (void 0 === f2 || f2.count !== u2) {
        let b2 = function() {
          R2.dispose(), r2.delete(s2), s2.removeEventListener("dispose", b2);
        };
        void 0 !== f2 && f2.texture.dispose();
        const p2 = void 0 !== s2.morphAttributes.position, m2 = void 0 !== s2.morphAttributes.normal, h2 = void 0 !== s2.morphAttributes.color, _2 = s2.morphAttributes.position || [], g2 = s2.morphAttributes.normal || [], v2 = s2.morphAttributes.color || [];
        let E2 = 0;
        true === p2 && (E2 = 1), true === m2 && (E2 = 2), true === h2 && (E2 = 3);
        let S2 = s2.attributes.position.count * E2, T2 = 1;
        S2 > n2.maxTextureSize && (T2 = Math.ceil(S2 / n2.maxTextureSize), S2 = n2.maxTextureSize);
        const x2 = new Float32Array(S2 * T2 * 4 * u2), R2 = new Yi(x2, S2, T2, u2);
        R2.type = Pt, R2.needsUpdate = true;
        const A2 = 4 * E2;
        for (let C2 = 0; C2 < u2; C2++) {
          const P2 = _2[C2], L2 = g2[C2], U2 = v2[C2], D2 = S2 * T2 * 4 * C2;
          for (let w2 = 0; w2 < P2.count; w2++) {
            const I2 = w2 * A2;
            true === p2 && (a2.fromBufferAttribute(P2, w2), x2[D2 + I2 + 0] = a2.x, x2[D2 + I2 + 1] = a2.y, x2[D2 + I2 + 2] = a2.z, x2[D2 + I2 + 3] = 0), true === m2 && (a2.fromBufferAttribute(L2, w2), x2[D2 + I2 + 4] = a2.x, x2[D2 + I2 + 5] = a2.y, x2[D2 + I2 + 6] = a2.z, x2[D2 + I2 + 7] = 0), true === h2 && (a2.fromBufferAttribute(U2, w2), x2[D2 + I2 + 8] = a2.x, x2[D2 + I2 + 9] = a2.y, x2[D2 + I2 + 10] = a2.z, x2[D2 + I2 + 11] = 4 === U2.itemSize ? a2.w : 1);
          }
        }
        f2 = { count: u2, texture: R2, size: new _i(S2, T2) }, r2.set(s2, f2), s2.addEventListener("dispose", b2);
      }
      if (true === o2.isInstancedMesh && null !== o2.morphTexture) l2.getUniforms().setValue(e2, "morphTexture", o2.morphTexture, i2);
      else {
        let N2 = 0;
        for (let O2 = 0; O2 < c2.length; O2++) N2 += c2[O2];
        const y2 = s2.morphTargetsRelative ? 1 : 1 - N2;
        l2.getUniforms().setValue(e2, "morphTargetBaseInfluence", y2), l2.getUniforms().setValue(e2, "morphTargetInfluences", c2);
      }
      l2.getUniforms().setValue(e2, "morphTargetsTexture", f2.texture, i2), l2.getUniforms().setValue(e2, "morphTargetsTextureSize", f2.size);
    } };
  }
  function gi2(e2, t2, n2, i2, r2) {
    let a2 = /* @__PURE__ */ new WeakMap();
    function o2(e3) {
      const t3 = e3.target;
      t3.removeEventListener("dispose", o2), i2.releaseStatesOfObject(t3), n2.remove(t3.instanceMatrix), null !== t3.instanceColor && n2.remove(t3.instanceColor);
    }
    return { update: function(i3) {
      const s2 = r2.render.frame, l2 = i3.geometry, c2 = t2.get(i3, l2);
      if (a2.get(c2) !== s2 && (t2.update(c2), a2.set(c2, s2)), i3.isInstancedMesh && (false === i3.hasEventListener("dispose", o2) && i3.addEventListener("dispose", o2), a2.get(i3) !== s2 && (n2.update(i3.instanceMatrix, e2.ARRAY_BUFFER), null !== i3.instanceColor && n2.update(i3.instanceColor, e2.ARRAY_BUFFER), a2.set(i3, s2))), i3.isSkinnedMesh) {
        const e3 = i3.skeleton;
        a2.get(e3) !== s2 && (e3.update(), a2.set(e3, s2));
      }
      return c2;
    }, dispose: function() {
      a2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  var vi2 = { [K]: "LINEAR_TONE_MAPPING", [tt]: "REINHARD_TONE_MAPPING", [et]: "CINEON_TONE_MAPPING", [st]: "ACES_FILMIC_TONE_MAPPING", [rt]: "AGX_TONE_MAPPING", [nt]: "NEUTRAL_TONE_MAPPING", [it]: "CUSTOM_TONE_MAPPING" };
  function Ei2(e2, t2, n2, i2, r2, a2) {
    const s2 = new Xi(t2, n2, { type: e2, depthBuffer: r2, stencilBuffer: a2, samples: i2 ? 4 : 0, depthTexture: r2 ? new dh(t2, n2) : void 0 }), l2 = new Xi(t2, n2, { type: Rt, depthBuffer: false, stencilBuffer: false }), c2 = new Wn();
    c2.setAttribute("position", new kn([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), c2.setAttribute("uv", new kn([0, 2, 0, 0, 2, 0], 2));
    const d2 = new Gl({ uniforms: { tDiffuse: { value: null } }, vertexShader: "\n			precision highp float;\n\n			uniform mat4 modelViewMatrix;\n			uniform mat4 projectionMatrix;\n\n			attribute vec3 position;\n			attribute vec2 uv;\n\n			varying vec2 vUv;\n\n			void main() {\n				vUv = uv;\n				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n			}", fragmentShader: "\n			precision highp float;\n\n			uniform sampler2D tDiffuse;\n\n			varying vec2 vUv;\n\n			#include <tonemapping_pars_fragment>\n			#include <colorspace_pars_fragment>\n\n			void main() {\n				gl_FragColor = texture2D( tDiffuse, vUv );\n\n				#ifdef LINEAR_TONE_MAPPING\n					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n				#elif defined( REINHARD_TONE_MAPPING )\n					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n				#elif defined( CINEON_TONE_MAPPING )\n					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n				#elif defined( ACES_FILMIC_TONE_MAPPING )\n					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n				#elif defined( AGX_TONE_MAPPING )\n					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n				#elif defined( NEUTRAL_TONE_MAPPING )\n					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n				#elif defined( CUSTOM_TONE_MAPPING )\n					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n				#endif\n\n				#ifdef SRGB_TRANSFER\n					gl_FragColor = sRGBTransferOETF( gl_FragColor );\n				#endif\n			}", depthTest: false, depthWrite: false }), u2 = new Ra(c2, d2), m2 = new au(-1, 1, 1, -1, 0, 1);
    let h2, _2 = null, g2 = null, v2 = false, S2 = null, M2 = [], T2 = false;
    this.setSize = function(e3, t3) {
      s2.setSize(e3, t3), l2.setSize(e3, t3);
      for (let n3 = 0; n3 < M2.length; n3++) {
        const i3 = M2[n3];
        i3.setSize && i3.setSize(e3, t3);
      }
    }, this.setEffects = function(e3) {
      M2 = e3, T2 = M2.length > 0 && true === M2[0].isRenderPass;
      const t3 = s2.width, n3 = s2.height;
      for (let e4 = 0; e4 < M2.length; e4++) {
        const i3 = M2[e4];
        i3.setSize && i3.setSize(t3, n3);
      }
    }, this.begin = function(e3, t3) {
      if (v2) return false;
      if (e3.toneMapping === Q && 0 === M2.length) return false;
      if (S2 = t3, null !== t3) {
        const e4 = t3.width, n3 = t3.height;
        s2.width === e4 && s2.height === n3 || this.setSize(e4, n3);
      }
      return false === T2 && e3.setRenderTarget(s2), h2 = e3.toneMapping, e3.toneMapping = Q, true;
    }, this.hasRenderPass = function() {
      return T2;
    }, this.end = function(e3, t3) {
      e3.toneMapping = h2, v2 = true;
      let n3 = s2, i3 = l2;
      for (let r3 = 0; r3 < M2.length; r3++) {
        const a3 = M2[r3];
        if (false !== a3.enabled && (a3.render(e3, i3, n3, t3), false !== a3.needsSwap)) {
          const e4 = n3;
          n3 = i3, i3 = e4;
        }
      }
      if (_2 !== e3.outputColorSpace || g2 !== e3.toneMapping) {
        _2 = e3.outputColorSpace, g2 = e3.toneMapping, d2.defines = {}, Ri.getTransfer(_2) === rs && (d2.defines.SRGB_TRANSFER = "");
        const t4 = vi2[g2];
        t4 && (d2.defines[t4] = ""), d2.needsUpdate = true;
      }
      d2.uniforms.tDiffuse.value = n3.texture, e3.setRenderTarget(S2), e3.render(u2, m2), S2 = null, v2 = false;
    }, this.isCompositing = function() {
      return v2;
    }, this.dispose = function() {
      s2.depthTexture && s2.depthTexture.dispose(), s2.dispose(), l2.dispose(), c2.dispose(), d2.dispose();
    };
  }
  var Si2 = new Ji();
  var Mi2 = new dh(1, 1);
  var Ti2 = new Yi();
  var xi2 = new Gi();
  var Ri2 = new lh();
  var Ai2 = [];
  var bi2 = [];
  var Ci2 = new Float32Array(16);
  var Pi2 = new Float32Array(9);
  var Li2 = new Float32Array(4);
  function Ui2(e2, t2, n2) {
    const i2 = e2[0];
    if (i2 <= 0 || i2 > 0) return e2;
    const r2 = t2 * n2;
    let a2 = Ai2[r2];
    if (void 0 === a2 && (a2 = new Float32Array(r2), Ai2[r2] = a2), 0 !== t2) {
      i2.toArray(a2, 0);
      for (let i3 = 1, r3 = 0; i3 !== t2; ++i3) r3 += n2, e2[i3].toArray(a2, r3);
    }
    return a2;
  }
  function Di2(e2, t2) {
    if (e2.length !== t2.length) return false;
    for (let n2 = 0, i2 = e2.length; n2 < i2; n2++) if (e2[n2] !== t2[n2]) return false;
    return true;
  }
  function wi2(e2, t2) {
    for (let n2 = 0, i2 = t2.length; n2 < i2; n2++) e2[n2] = t2[n2];
  }
  function Ii2(e2, t2) {
    let n2 = bi2[t2];
    void 0 === n2 && (n2 = new Int32Array(t2), bi2[t2] = n2);
    for (let i2 = 0; i2 !== t2; ++i2) n2[i2] = e2.allocateTextureUnit();
    return n2;
  }
  function Ni2(e2, t2) {
    const n2 = this.cache;
    n2[0] !== t2 && (e2.uniform1f(this.addr, t2), n2[0] = t2);
  }
  function yi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y || (e2.uniform2f(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform2fv(this.addr, t2), wi2(n2, t2);
    }
  }
  function Oi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z || (e2.uniform3f(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
    else if (void 0 !== t2.r) n2[0] === t2.r && n2[1] === t2.g && n2[2] === t2.b || (e2.uniform3f(this.addr, t2.r, t2.g, t2.b), n2[0] = t2.r, n2[1] = t2.g, n2[2] = t2.b);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform3fv(this.addr, t2), wi2(n2, t2);
    }
  }
  function Fi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z && n2[3] === t2.w || (e2.uniform4f(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform4fv(this.addr, t2), wi2(n2, t2);
    }
  }
  function Bi2(e2, t2) {
    const n2 = this.cache, i2 = t2.elements;
    if (void 0 === i2) {
      if (Di2(n2, t2)) return;
      e2.uniformMatrix2fv(this.addr, false, t2), wi2(n2, t2);
    } else {
      if (Di2(n2, i2)) return;
      Li2.set(i2), e2.uniformMatrix2fv(this.addr, false, Li2), wi2(n2, i2);
    }
  }
  function Gi2(e2, t2) {
    const n2 = this.cache, i2 = t2.elements;
    if (void 0 === i2) {
      if (Di2(n2, t2)) return;
      e2.uniformMatrix3fv(this.addr, false, t2), wi2(n2, t2);
    } else {
      if (Di2(n2, i2)) return;
      Pi2.set(i2), e2.uniformMatrix3fv(this.addr, false, Pi2), wi2(n2, i2);
    }
  }
  function Hi2(e2, t2) {
    const n2 = this.cache, i2 = t2.elements;
    if (void 0 === i2) {
      if (Di2(n2, t2)) return;
      e2.uniformMatrix4fv(this.addr, false, t2), wi2(n2, t2);
    } else {
      if (Di2(n2, i2)) return;
      Ci2.set(i2), e2.uniformMatrix4fv(this.addr, false, Ci2), wi2(n2, i2);
    }
  }
  function Vi2(e2, t2) {
    const n2 = this.cache;
    n2[0] !== t2 && (e2.uniform1i(this.addr, t2), n2[0] = t2);
  }
  function Wi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y || (e2.uniform2i(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform2iv(this.addr, t2), wi2(n2, t2);
    }
  }
  function zi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z || (e2.uniform3i(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform3iv(this.addr, t2), wi2(n2, t2);
    }
  }
  function ki2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z && n2[3] === t2.w || (e2.uniform4i(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform4iv(this.addr, t2), wi2(n2, t2);
    }
  }
  function Xi2(e2, t2) {
    const n2 = this.cache;
    n2[0] !== t2 && (e2.uniform1ui(this.addr, t2), n2[0] = t2);
  }
  function Ki2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y || (e2.uniform2ui(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform2uiv(this.addr, t2), wi2(n2, t2);
    }
  }
  function Yi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z || (e2.uniform3ui(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform3uiv(this.addr, t2), wi2(n2, t2);
    }
  }
  function qi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z && n2[3] === t2.w || (e2.uniform4ui(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform4uiv(this.addr, t2), wi2(n2, t2);
    }
  }
  function ji2(e2, t2, n2) {
    const i2 = this.cache, r2 = n2.allocateTextureUnit();
    let a2;
    i2[0] !== r2 && (e2.uniform1i(this.addr, r2), i2[0] = r2), this.type === e2.SAMPLER_2D_SHADOW ? (Mi2.compareFunction = n2.isReversedDepthBuffer() ? Bs : zs, a2 = Mi2) : a2 = Si2, n2.setTexture2D(t2 || a2, r2);
  }
  function Zi2(e2, t2, n2) {
    const i2 = this.cache, r2 = n2.allocateTextureUnit();
    i2[0] !== r2 && (e2.uniform1i(this.addr, r2), i2[0] = r2), n2.setTexture3D(t2 || xi2, r2);
  }
  function $i2(e2, t2, n2) {
    const i2 = this.cache, r2 = n2.allocateTextureUnit();
    i2[0] !== r2 && (e2.uniform1i(this.addr, r2), i2[0] = r2), n2.setTextureCube(t2 || Ri2, r2);
  }
  function Qi2(e2, t2, n2) {
    const i2 = this.cache, r2 = n2.allocateTextureUnit();
    i2[0] !== r2 && (e2.uniform1i(this.addr, r2), i2[0] = r2), n2.setTexture2DArray(t2 || Ti2, r2);
  }
  function Ji2(e2, t2) {
    e2.uniform1fv(this.addr, t2);
  }
  function er2(e2, t2) {
    const n2 = Ui2(t2, this.size, 2);
    e2.uniform2fv(this.addr, n2);
  }
  function tr2(e2, t2) {
    const n2 = Ui2(t2, this.size, 3);
    e2.uniform3fv(this.addr, n2);
  }
  function nr2(e2, t2) {
    const n2 = Ui2(t2, this.size, 4);
    e2.uniform4fv(this.addr, n2);
  }
  function ir2(e2, t2) {
    const n2 = Ui2(t2, this.size, 4);
    e2.uniformMatrix2fv(this.addr, false, n2);
  }
  function rr2(e2, t2) {
    const n2 = Ui2(t2, this.size, 9);
    e2.uniformMatrix3fv(this.addr, false, n2);
  }
  function ar2(e2, t2) {
    const n2 = Ui2(t2, this.size, 16);
    e2.uniformMatrix4fv(this.addr, false, n2);
  }
  function or2(e2, t2) {
    e2.uniform1iv(this.addr, t2);
  }
  function sr2(e2, t2) {
    e2.uniform2iv(this.addr, t2);
  }
  function lr2(e2, t2) {
    e2.uniform3iv(this.addr, t2);
  }
  function cr2(e2, t2) {
    e2.uniform4iv(this.addr, t2);
  }
  function dr2(e2, t2) {
    e2.uniform1uiv(this.addr, t2);
  }
  function ur2(e2, t2) {
    e2.uniform2uiv(this.addr, t2);
  }
  function fr2(e2, t2) {
    e2.uniform3uiv(this.addr, t2);
  }
  function pr2(e2, t2) {
    e2.uniform4uiv(this.addr, t2);
  }
  function mr2(e2, t2, n2) {
    const i2 = this.cache, r2 = t2.length, a2 = Ii2(n2, r2);
    let o2;
    Di2(i2, a2) || (e2.uniform1iv(this.addr, a2), wi2(i2, a2)), o2 = this.type === e2.SAMPLER_2D_SHADOW ? Mi2 : Si2;
    for (let e3 = 0; e3 !== r2; ++e3) n2.setTexture2D(t2[e3] || o2, a2[e3]);
  }
  function hr2(e2, t2, n2) {
    const i2 = this.cache, r2 = t2.length, a2 = Ii2(n2, r2);
    Di2(i2, a2) || (e2.uniform1iv(this.addr, a2), wi2(i2, a2));
    for (let e3 = 0; e3 !== r2; ++e3) n2.setTexture3D(t2[e3] || xi2, a2[e3]);
  }
  function _r2(e2, t2, n2) {
    const i2 = this.cache, r2 = t2.length, a2 = Ii2(n2, r2);
    Di2(i2, a2) || (e2.uniform1iv(this.addr, a2), wi2(i2, a2));
    for (let e3 = 0; e3 !== r2; ++e3) n2.setTextureCube(t2[e3] || Ri2, a2[e3]);
  }
  function gr2(e2, t2, n2) {
    const i2 = this.cache, r2 = t2.length, a2 = Ii2(n2, r2);
    Di2(i2, a2) || (e2.uniform1iv(this.addr, a2), wi2(i2, a2));
    for (let e3 = 0; e3 !== r2; ++e3) n2.setTexture2DArray(t2[e3] || Ti2, a2[e3]);
  }
  var vr2 = class {
    constructor(e2, t2, n2) {
      this.id = e2, this.addr = n2, this.cache = [], this.type = t2.type, this.setValue = (function(e3) {
        switch (e3) {
          case 5126:
            return Ni2;
          case 35664:
            return yi2;
          case 35665:
            return Oi2;
          case 35666:
            return Fi2;
          case 35674:
            return Bi2;
          case 35675:
            return Gi2;
          case 35676:
            return Hi2;
          case 5124:
          case 35670:
            return Vi2;
          case 35667:
          case 35671:
            return Wi2;
          case 35668:
          case 35672:
            return zi2;
          case 35669:
          case 35673:
            return ki2;
          case 5125:
            return Xi2;
          case 36294:
            return Ki2;
          case 36295:
            return Yi2;
          case 36296:
            return qi2;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return ji2;
          case 35679:
          case 36299:
          case 36307:
            return Zi2;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return $i2;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Qi2;
        }
      })(t2.type);
    }
  };
  var Er2 = class {
    constructor(e2, t2, n2) {
      this.id = e2, this.addr = n2, this.cache = [], this.type = t2.type, this.size = t2.size, this.setValue = (function(e3) {
        switch (e3) {
          case 5126:
            return Ji2;
          case 35664:
            return er2;
          case 35665:
            return tr2;
          case 35666:
            return nr2;
          case 35674:
            return ir2;
          case 35675:
            return rr2;
          case 35676:
            return ar2;
          case 5124:
          case 35670:
            return or2;
          case 35667:
          case 35671:
            return sr2;
          case 35668:
          case 35672:
            return lr2;
          case 35669:
          case 35673:
            return cr2;
          case 5125:
            return dr2;
          case 36294:
            return ur2;
          case 36295:
            return fr2;
          case 36296:
            return pr2;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return mr2;
          case 35679:
          case 36299:
          case 36307:
            return hr2;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return _r2;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return gr2;
        }
      })(t2.type);
    }
  };
  var Sr2 = class {
    constructor(e2) {
      this.id = e2, this.seq = [], this.map = {};
    }
    setValue(e2, t2, n2) {
      const i2 = this.seq;
      for (let r2 = 0, a2 = i2.length; r2 !== a2; ++r2) {
        const a3 = i2[r2];
        a3.setValue(e2, t2[a3.id], n2);
      }
    }
  };
  var Mr2 = /(\w+)(\])?(\[|\.)?/g;
  function Tr2(e2, t2) {
    e2.seq.push(t2), e2.map[t2.id] = t2;
  }
  function xr2(e2, t2, n2) {
    const i2 = e2.name, r2 = i2.length;
    for (Mr2.lastIndex = 0; ; ) {
      const a2 = Mr2.exec(i2), o2 = Mr2.lastIndex;
      let s2 = a2[1];
      const l2 = "]" === a2[2], c2 = a2[3];
      if (l2 && (s2 |= 0), void 0 === c2 || "[" === c2 && o2 + 2 === r2) {
        Tr2(n2, void 0 === c2 ? new vr2(s2, e2, t2) : new Er2(s2, e2, t2));
        break;
      }
      {
        let e3 = n2.map[s2];
        void 0 === e3 && (e3 = new Sr2(s2), Tr2(n2, e3)), n2 = e3;
      }
    }
  }
  var Rr2 = class {
    constructor(e2, t2) {
      this.seq = [], this.map = {};
      const n2 = e2.getProgramParameter(t2, e2.ACTIVE_UNIFORMS);
      for (let i3 = 0; i3 < n2; ++i3) {
        const n3 = e2.getActiveUniform(t2, i3);
        xr2(n3, e2.getUniformLocation(t2, n3.name), this);
      }
      const i2 = [], r2 = [];
      for (const t3 of this.seq) t3.type === e2.SAMPLER_2D_SHADOW || t3.type === e2.SAMPLER_CUBE_SHADOW || t3.type === e2.SAMPLER_2D_ARRAY_SHADOW ? i2.push(t3) : r2.push(t3);
      i2.length > 0 && (this.seq = i2.concat(r2));
    }
    setValue(e2, t2, n2, i2) {
      const r2 = this.map[t2];
      void 0 !== r2 && r2.setValue(e2, n2, i2);
    }
    setOptional(e2, t2, n2) {
      const i2 = t2[n2];
      void 0 !== i2 && this.setValue(e2, n2, i2);
    }
    static upload(e2, t2, n2, i2) {
      for (let r2 = 0, a2 = t2.length; r2 !== a2; ++r2) {
        const a3 = t2[r2], o2 = n2[a3.id];
        false !== o2.needsUpdate && a3.setValue(e2, o2.value, i2);
      }
    }
    static seqWithValue(e2, t2) {
      const n2 = [];
      for (let i2 = 0, r2 = e2.length; i2 !== r2; ++i2) {
        const r3 = e2[i2];
        r3.id in t2 && n2.push(r3);
      }
      return n2;
    }
  };
  function Ar2(e2, t2, n2) {
    const i2 = e2.createShader(t2);
    return e2.shaderSource(i2, n2), e2.compileShader(i2), i2;
  }
  var br2 = 0;
  var Cr2 = new Ii();
  function Pr2(e2, t2, n2) {
    const i2 = e2.getShaderParameter(t2, e2.COMPILE_STATUS), r2 = (e2.getShaderInfoLog(t2) || "").trim();
    if (i2 && "" === r2) return "";
    const a2 = /ERROR: 0:(\d+)/.exec(r2);
    if (a2) {
      const i3 = parseInt(a2[1]);
      return n2.toUpperCase() + "\n\n" + r2 + "\n\n" + (function(e3, t3) {
        const n3 = e3.split("\n"), i4 = [], r3 = Math.max(t3 - 6, 0), a3 = Math.min(t3 + 6, n3.length);
        for (let e4 = r3; e4 < a3; e4++) {
          const r4 = e4 + 1;
          i4.push(`${r4 === t3 ? ">" : " "} ${r4}: ${n3[e4]}`);
        }
        return i4.join("\n");
      })(e2.getShaderSource(t2), i3);
    }
    return r2;
  }
  function Lr2(e2, t2) {
    const n2 = (function(e3) {
      Ri._getMatrix(Cr2, Ri.workingColorSpace, e3);
      const t3 = `mat3( ${Cr2.elements.map((e4) => e4.toFixed(4))} )`;
      switch (Ri.getTransfer(e3)) {
        case is:
          return [t3, "LinearTransferOETF"];
        case rs:
          return [t3, "sRGBTransferOETF"];
        default:
          return ai("WebGLProgram: Unsupported color space: ", e3), [t3, "LinearTransferOETF"];
      }
    })(t2);
    return [`vec4 ${e2}( vec4 value ) {`, `	return ${n2[1]}( vec4( value.rgb * ${n2[0]}, value.a ) );`, "}"].join("\n");
  }
  var Ur2 = { [K]: "Linear", [tt]: "Reinhard", [et]: "Cineon", [st]: "ACESFilmic", [rt]: "AgX", [nt]: "Neutral", [it]: "Custom" };
  function Dr2(e2, t2) {
    const n2 = Ur2[t2];
    return void 0 === n2 ? (ai("WebGLProgram: Unsupported toneMapping:", t2), "vec3 " + e2 + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e2 + "( vec3 color ) { return " + n2 + "ToneMapping( color ); }";
  }
  var wr2 = new Ti();
  function Ir2() {
    Ri.getLuminanceCoefficients(wr2);
    return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${wr2.x.toFixed(4)}, ${wr2.y.toFixed(4)}, ${wr2.z.toFixed(4)} );`, "	return dot( weights, rgb );", "}"].join("\n");
  }
  function Nr2(e2) {
    return "" !== e2;
  }
  function yr2(e2, t2) {
    const n2 = t2.numSpotLightShadows + t2.numSpotLightMaps - t2.numSpotLightShadowsWithMaps;
    return e2.replace(/NUM_DIR_LIGHTS/g, t2.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t2.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t2.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n2).replace(/NUM_RECT_AREA_LIGHTS/g, t2.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t2.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t2.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t2.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t2.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t2.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t2.numPointLightShadows);
  }
  function Or2(e2, t2) {
    return e2.replace(/NUM_CLIPPING_PLANES/g, t2.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t2.numClippingPlanes - t2.numClipIntersection);
  }
  var Fr2 = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function Br2(e2) {
    return e2.replace(Fr2, Hr2);
  }
  var Gr2 = /* @__PURE__ */ new Map();
  function Hr2(e2, t2) {
    let n2 = Bn2[t2];
    if (void 0 === n2) {
      const e3 = Gr2.get(t2);
      if (void 0 === e3) throw new Error("THREE.WebGLProgram: Can not resolve #include <" + t2 + ">");
      n2 = Bn2[e3], ai('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t2, e3);
    }
    return Br2(n2);
  }
  var Vr2 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function Wr2(e2) {
    return e2.replace(Vr2, zr2);
  }
  function zr2(e2, t2, n2, i2) {
    let r2 = "";
    for (let e3 = parseInt(t2); e3 < parseInt(n2); e3++) r2 += i2.replace(/\[\s*i\s*\]/g, "[ " + e3 + " ]").replace(/UNROLLED_LOOP_INDEX/g, e3);
    return r2;
  }
  function kr2(e2) {
    let t2 = `precision ${e2.precision} float;
	precision ${e2.precision} int;
	precision ${e2.precision} sampler2D;
	precision ${e2.precision} samplerCube;
	precision ${e2.precision} sampler3D;
	precision ${e2.precision} sampler2DArray;
	precision ${e2.precision} sampler2DShadow;
	precision ${e2.precision} samplerCubeShadow;
	precision ${e2.precision} sampler2DArrayShadow;
	precision ${e2.precision} isampler2D;
	precision ${e2.precision} isampler3D;
	precision ${e2.precision} isamplerCube;
	precision ${e2.precision} isampler2DArray;
	precision ${e2.precision} usampler2D;
	precision ${e2.precision} usampler3D;
	precision ${e2.precision} usamplerCube;
	precision ${e2.precision} usampler2DArray;
	`;
    return "highp" === e2.precision ? t2 += "\n#define HIGH_PRECISION" : "mediump" === e2.precision ? t2 += "\n#define MEDIUM_PRECISION" : "lowp" === e2.precision && (t2 += "\n#define LOW_PRECISION"), t2;
  }
  var Xr2 = { [h]: "SHADOWMAP_TYPE_PCF", [c]: "SHADOWMAP_TYPE_VSM" };
  var Kr2 = { [lt]: "ENVMAP_TYPE_CUBE", [ct]: "ENVMAP_TYPE_CUBE", [pt]: "ENVMAP_TYPE_CUBE_UV" };
  var Yr2 = { [ct]: "ENVMAP_MODE_REFRACTION" };
  var qr2 = { [Z]: "ENVMAP_BLENDING_MULTIPLY", [G]: "ENVMAP_BLENDING_MIX", [$]: "ENVMAP_BLENDING_ADD" };
  function jr2(e2, t2, n2, i2) {
    const r2 = e2.getContext(), a2 = n2.defines;
    let o2 = n2.vertexShader, s2 = n2.fragmentShader;
    const l2 = (function(e3) {
      return Xr2[e3.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
    })(n2), c2 = (function(e3) {
      return false === e3.envMap ? "ENVMAP_TYPE_CUBE" : Kr2[e3.envMapMode] || "ENVMAP_TYPE_CUBE";
    })(n2), d2 = (function(e3) {
      return false === e3.envMap ? "ENVMAP_MODE_REFLECTION" : Yr2[e3.envMapMode] || "ENVMAP_MODE_REFLECTION";
    })(n2), u2 = (function(e3) {
      return false === e3.envMap ? "ENVMAP_BLENDING_NONE" : qr2[e3.combine] || "ENVMAP_BLENDING_NONE";
    })(n2), f2 = (function(e3) {
      const t3 = e3.envMapCubeUVHeight;
      if (null === t3) return null;
      const n3 = Math.log2(t3) - 2, i3 = 1 / t3;
      return { texelWidth: 1 / (3 * Math.max(Math.pow(2, n3), 112)), texelHeight: i3, maxMip: n3 };
    })(n2), p2 = (function(e3) {
      return [e3.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e3.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Nr2).join("\n");
    })(n2), m2 = (function(e3) {
      const t3 = [];
      for (const n3 in e3) {
        const i3 = e3[n3];
        false !== i3 && t3.push("#define " + n3 + " " + i3);
      }
      return t3.join("\n");
    })(a2), h2 = r2.createProgram();
    let _2, g2, E2 = n2.glslVersion ? "#version " + n2.glslVersion + "\n" : "";
    n2.isRawShaderMaterial ? (_2 = ["#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, m2].filter(Nr2).join("\n"), _2.length > 0 && (_2 += "\n"), g2 = ["#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, m2].filter(Nr2).join("\n"), g2.length > 0 && (g2 += "\n")) : (_2 = [kr2(n2), "#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, m2, n2.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", n2.batching ? "#define USE_BATCHING" : "", n2.batchingColor ? "#define USE_BATCHING_COLOR" : "", n2.instancing ? "#define USE_INSTANCING" : "", n2.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n2.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", n2.useFog && n2.fog ? "#define USE_FOG" : "", n2.useFog && n2.fogExp2 ? "#define FOG_EXP2" : "", n2.map ? "#define USE_MAP" : "", n2.envMap ? "#define USE_ENVMAP" : "", n2.envMap ? "#define " + d2 : "", n2.lightMap ? "#define USE_LIGHTMAP" : "", n2.aoMap ? "#define USE_AOMAP" : "", n2.bumpMap ? "#define USE_BUMPMAP" : "", n2.normalMap ? "#define USE_NORMALMAP" : "", n2.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n2.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n2.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n2.anisotropy ? "#define USE_ANISOTROPY" : "", n2.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n2.specularMap ? "#define USE_SPECULARMAP" : "", n2.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n2.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n2.metalnessMap ? "#define USE_METALNESSMAP" : "", n2.alphaMap ? "#define USE_ALPHAMAP" : "", n2.alphaHash ? "#define USE_ALPHAHASH" : "", n2.transmission ? "#define USE_TRANSMISSION" : "", n2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n2.thicknessMap ? "#define USE_THICKNESSMAP" : "", n2.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n2.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n2.mapUv ? "#define MAP_UV " + n2.mapUv : "", n2.alphaMapUv ? "#define ALPHAMAP_UV " + n2.alphaMapUv : "", n2.lightMapUv ? "#define LIGHTMAP_UV " + n2.lightMapUv : "", n2.aoMapUv ? "#define AOMAP_UV " + n2.aoMapUv : "", n2.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n2.emissiveMapUv : "", n2.bumpMapUv ? "#define BUMPMAP_UV " + n2.bumpMapUv : "", n2.normalMapUv ? "#define NORMALMAP_UV " + n2.normalMapUv : "", n2.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n2.displacementMapUv : "", n2.metalnessMapUv ? "#define METALNESSMAP_UV " + n2.metalnessMapUv : "", n2.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n2.roughnessMapUv : "", n2.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n2.anisotropyMapUv : "", n2.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n2.clearcoatMapUv : "", n2.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n2.clearcoatNormalMapUv : "", n2.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n2.clearcoatRoughnessMapUv : "", n2.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n2.iridescenceMapUv : "", n2.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n2.iridescenceThicknessMapUv : "", n2.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n2.sheenColorMapUv : "", n2.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n2.sheenRoughnessMapUv : "", n2.specularMapUv ? "#define SPECULARMAP_UV " + n2.specularMapUv : "", n2.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n2.specularColorMapUv : "", n2.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n2.specularIntensityMapUv : "", n2.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n2.transmissionMapUv : "", n2.thicknessMapUv ? "#define THICKNESSMAP_UV " + n2.thicknessMapUv : "", n2.vertexTangents && false === n2.flatShading ? "#define USE_TANGENT" : "", n2.vertexNormals ? "#define HAS_NORMAL" : "", n2.vertexColors ? "#define USE_COLOR" : "", n2.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n2.vertexUv1s ? "#define USE_UV1" : "", n2.vertexUv2s ? "#define USE_UV2" : "", n2.vertexUv3s ? "#define USE_UV3" : "", n2.pointsUvs ? "#define USE_POINTS_UV" : "", n2.flatShading ? "#define FLAT_SHADED" : "", n2.skinning ? "#define USE_SKINNING" : "", n2.morphTargets ? "#define USE_MORPHTARGETS" : "", n2.morphNormals && false === n2.flatShading ? "#define USE_MORPHNORMALS" : "", n2.morphColors ? "#define USE_MORPHCOLORS" : "", n2.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n2.morphTextureStride : "", n2.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n2.morphTargetsCount : "", n2.doubleSided ? "#define DOUBLE_SIDED" : "", n2.flipSided ? "#define FLIP_SIDED" : "", n2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n2.shadowMapEnabled ? "#define " + l2 : "", n2.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n2.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n2.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", n2.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(Nr2).join("\n"), g2 = [kr2(n2), "#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, m2, n2.useFog && n2.fog ? "#define USE_FOG" : "", n2.useFog && n2.fogExp2 ? "#define FOG_EXP2" : "", n2.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", n2.map ? "#define USE_MAP" : "", n2.matcap ? "#define USE_MATCAP" : "", n2.envMap ? "#define USE_ENVMAP" : "", n2.envMap ? "#define " + c2 : "", n2.envMap ? "#define " + d2 : "", n2.envMap ? "#define " + u2 : "", f2 ? "#define CUBEUV_TEXEL_WIDTH " + f2.texelWidth : "", f2 ? "#define CUBEUV_TEXEL_HEIGHT " + f2.texelHeight : "", f2 ? "#define CUBEUV_MAX_MIP " + f2.maxMip + ".0" : "", n2.lightMap ? "#define USE_LIGHTMAP" : "", n2.aoMap ? "#define USE_AOMAP" : "", n2.bumpMap ? "#define USE_BUMPMAP" : "", n2.normalMap ? "#define USE_NORMALMAP" : "", n2.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n2.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n2.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "", n2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n2.anisotropy ? "#define USE_ANISOTROPY" : "", n2.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n2.clearcoat ? "#define USE_CLEARCOAT" : "", n2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n2.dispersion ? "#define USE_DISPERSION" : "", n2.iridescence ? "#define USE_IRIDESCENCE" : "", n2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n2.specularMap ? "#define USE_SPECULARMAP" : "", n2.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n2.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n2.metalnessMap ? "#define USE_METALNESSMAP" : "", n2.alphaMap ? "#define USE_ALPHAMAP" : "", n2.alphaTest ? "#define USE_ALPHATEST" : "", n2.alphaHash ? "#define USE_ALPHAHASH" : "", n2.sheen ? "#define USE_SHEEN" : "", n2.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n2.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n2.transmission ? "#define USE_TRANSMISSION" : "", n2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n2.thicknessMap ? "#define USE_THICKNESSMAP" : "", n2.vertexTangents && false === n2.flatShading ? "#define USE_TANGENT" : "", n2.vertexColors || n2.instancingColor ? "#define USE_COLOR" : "", n2.vertexAlphas || n2.batchingColor ? "#define USE_COLOR_ALPHA" : "", n2.vertexUv1s ? "#define USE_UV1" : "", n2.vertexUv2s ? "#define USE_UV2" : "", n2.vertexUv3s ? "#define USE_UV3" : "", n2.pointsUvs ? "#define USE_POINTS_UV" : "", n2.gradientMap ? "#define USE_GRADIENTMAP" : "", n2.flatShading ? "#define FLAT_SHADED" : "", n2.doubleSided ? "#define DOUBLE_SIDED" : "", n2.flipSided ? "#define FLIP_SIDED" : "", n2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n2.shadowMapEnabled ? "#define " + l2 : "", n2.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n2.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n2.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "", n2.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n2.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", n2.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", n2.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n2.toneMapping !== Q ? "#define TONE_MAPPING" : "", n2.toneMapping !== Q ? Bn2.tonemapping_pars_fragment : "", n2.toneMapping !== Q ? Dr2("toneMapping", n2.toneMapping) : "", n2.dithering ? "#define DITHERING" : "", n2.opaque ? "#define OPAQUE" : "", Bn2.colorspace_pars_fragment, Lr2("linearToOutputTexel", n2.outputColorSpace), Ir2(), n2.useDepthPacking ? "#define DEPTH_PACKING " + n2.depthPacking : "", "\n"].filter(Nr2).join("\n")), o2 = Br2(o2), o2 = yr2(o2, n2), o2 = Or2(o2, n2), s2 = Br2(s2), s2 = yr2(s2, n2), s2 = Or2(s2, n2), o2 = Wr2(o2), s2 = Wr2(s2), true !== n2.isRawShaderMaterial && (E2 = "#version 300 es\n", _2 = [p2, "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + _2, g2 = ["#define varying in", n2.glslVersion === js ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n2.glslVersion === js ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + g2);
    const S2 = E2 + _2 + o2, M2 = E2 + g2 + s2, T2 = Ar2(r2, r2.VERTEX_SHADER, S2), x2 = Ar2(r2, r2.FRAGMENT_SHADER, M2);
    function R2(t3) {
      if (e2.debug.checkShaderErrors) {
        const n3 = r2.getProgramInfoLog(h2) || "", i3 = r2.getShaderInfoLog(T2) || "", a3 = r2.getShaderInfoLog(x2) || "", o3 = n3.trim(), s3 = i3.trim(), l3 = a3.trim();
        let c3 = true, d3 = true;
        if (false === r2.getProgramParameter(h2, r2.LINK_STATUS)) if (c3 = false, "function" == typeof e2.debug.onShaderError) e2.debug.onShaderError(r2, h2, T2, x2);
        else {
          const e3 = Pr2(r2, T2, "vertex"), n4 = Pr2(r2, x2, "fragment");
          oi("WebGLProgram: Shader Error " + r2.getError() + " - VALIDATE_STATUS " + r2.getProgramParameter(h2, r2.VALIDATE_STATUS) + "\n\nMaterial Name: " + t3.name + "\nMaterial Type: " + t3.type + "\n\nProgram Info Log: " + o3 + "\n" + e3 + "\n" + n4);
        }
        else "" !== o3 ? ai("WebGLProgram: Program Info Log:", o3) : "" !== s3 && "" !== l3 || (d3 = false);
        d3 && (t3.diagnostics = { runnable: c3, programLog: o3, vertexShader: { log: s3, prefix: _2 }, fragmentShader: { log: l3, prefix: g2 } });
      }
      r2.deleteShader(T2), r2.deleteShader(x2), A2 = new Rr2(r2, h2), b2 = (function(e3, t4) {
        const n3 = {}, i3 = e3.getProgramParameter(t4, e3.ACTIVE_ATTRIBUTES);
        for (let r3 = 0; r3 < i3; r3++) {
          const i4 = e3.getActiveAttrib(t4, r3), a3 = i4.name;
          let o3 = 1;
          i4.type === e3.FLOAT_MAT2 && (o3 = 2), i4.type === e3.FLOAT_MAT3 && (o3 = 3), i4.type === e3.FLOAT_MAT4 && (o3 = 4), n3[a3] = { type: i4.type, location: e3.getAttribLocation(t4, a3), locationSize: o3 };
        }
        return n3;
      })(r2, h2);
    }
    let A2, b2;
    r2.attachShader(h2, T2), r2.attachShader(h2, x2), void 0 !== n2.index0AttributeName ? r2.bindAttribLocation(h2, 0, n2.index0AttributeName) : true === n2.hasPositionAttribute && r2.bindAttribLocation(h2, 0, "position"), r2.linkProgram(h2), this.getUniforms = function() {
      return void 0 === A2 && R2(this), A2;
    }, this.getAttributes = function() {
      return void 0 === b2 && R2(this), b2;
    };
    let C2 = false === n2.rendererExtensionParallelShaderCompile;
    return this.isReady = function() {
      return false === C2 && (C2 = r2.getProgramParameter(h2, 37297)), C2;
    }, this.destroy = function() {
      i2.releaseStatesOfProgram(this), r2.deleteProgram(h2), this.program = void 0;
    }, this.type = n2.shaderType, this.name = n2.shaderName, this.id = br2++, this.cacheKey = t2, this.usedTimes = 1, this.program = h2, this.vertexShader = T2, this.fragmentShader = x2, this;
  }
  var Zr2 = 0;
  var $r2 = class {
    constructor() {
      this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
    }
    update(e2, t2, n2) {
      const i2 = this._getShaderCacheForMaterial(e2);
      return false === i2.has(t2) && (i2.add(t2), t2.usedTimes++), false === i2.has(n2) && (i2.add(n2), n2.usedTimes++), this;
    }
    remove(e2) {
      const t2 = this.materialCache.get(e2);
      for (const e3 of t2) e3.usedTimes--, 0 === e3.usedTimes && this.shaderCache.delete(e3.code);
      return this.materialCache.delete(e2), this;
    }
    getVertexShaderStage(e2) {
      return this._getShaderStage(e2.vertexShader);
    }
    getFragmentShaderStage(e2) {
      return this._getShaderStage(e2.fragmentShader);
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(e2) {
      const t2 = this.materialCache;
      let n2 = t2.get(e2);
      return void 0 === n2 && (n2 = /* @__PURE__ */ new Set(), t2.set(e2, n2)), n2;
    }
    _getShaderStage(e2) {
      const t2 = this.shaderCache;
      let n2 = t2.get(e2);
      return void 0 === n2 && (n2 = new Qr2(e2), t2.set(e2, n2)), n2;
    }
  };
  var Qr2 = class {
    constructor(e2) {
      this.id = Zr2++, this.code = e2, this.usedTimes = 0;
    }
  };
  function Jr2(e2, t2, n2, i2, r2, o2) {
    const s2 = new lr(), l2 = new $r2(), d2 = /* @__PURE__ */ new Set(), u2 = [], m2 = /* @__PURE__ */ new Map(), h2 = i2.logarithmicDepthBuffer;
    let _2 = i2.precision;
    const g2 = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distance", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
    function E2(e3) {
      return d2.add(e3), 0 === e3 ? "uv" : `uv${e3}`;
    }
    return { getParameters: function(r3, s3, u3, m3, S2, M2) {
      const T2 = m3.fog, x2 = S2.geometry, R2 = r3.isMeshStandardMaterial || r3.isMeshLambertMaterial || r3.isMeshPhongMaterial ? m3.environment : null, A2 = r3.isMeshStandardMaterial || r3.isMeshLambertMaterial && !r3.envMap || r3.isMeshPhongMaterial && !r3.envMap, b2 = t2.get(r3.envMap || R2, A2), C2 = b2 && b2.mapping === pt ? b2.image.height : null, P2 = g2[r3.type];
      null !== r3.precision && (_2 = i2.getMaxPrecision(r3.precision), _2 !== r3.precision && ai("WebGLProgram.getParameters:", r3.precision, "not supported, using", _2, "instead."));
      const U2 = x2.morphAttributes.position || x2.morphAttributes.normal || x2.morphAttributes.color, D2 = void 0 !== U2 ? U2.length : 0;
      let w2, I2, N2, y2, O2 = 0;
      if (void 0 !== x2.morphAttributes.position && (O2 = 1), void 0 !== x2.morphAttributes.normal && (O2 = 2), void 0 !== x2.morphAttributes.color && (O2 = 3), P2) {
        const e3 = Hn2[P2];
        w2 = e3.vertexShader, I2 = e3.fragmentShader;
      } else {
        w2 = r3.vertexShader, I2 = r3.fragmentShader;
        const e3 = l2.getVertexShaderStage(r3), t3 = l2.getFragmentShaderStage(r3);
        l2.update(r3, e3, t3), N2 = e3.id, y2 = t3.id;
      }
      const F2 = e2.getRenderTarget(), B2 = e2.state.buffers.depth.getReversed(), G2 = true === S2.isInstancedMesh, H2 = true === S2.isBatchedMesh, V2 = !!r3.map, W2 = !!r3.matcap, z2 = !!b2, k2 = !!r3.aoMap, X2 = !!r3.lightMap, K2 = !!r3.bumpMap && false === r3.wireframe, Y2 = !!r3.normalMap, q2 = !!r3.displacementMap, j2 = !!r3.emissiveMap, Z2 = !!r3.metalnessMap, $2 = !!r3.roughnessMap, Q2 = r3.anisotropy > 0, J2 = r3.clearcoat > 0, ee2 = r3.dispersion > 0, te2 = r3.iridescence > 0, ne2 = r3.sheen > 0, ie2 = r3.transmission > 0, re2 = Q2 && !!r3.anisotropyMap, ae2 = J2 && !!r3.clearcoatMap, oe2 = J2 && !!r3.clearcoatNormalMap, se2 = J2 && !!r3.clearcoatRoughnessMap, le2 = te2 && !!r3.iridescenceMap, ce2 = te2 && !!r3.iridescenceThicknessMap, de2 = ne2 && !!r3.sheenColorMap, ue2 = ne2 && !!r3.sheenRoughnessMap, fe2 = !!r3.specularMap, pe2 = !!r3.specularColorMap, me2 = !!r3.specularIntensityMap, Ee2 = ie2 && !!r3.transmissionMap, xe2 = ie2 && !!r3.thicknessMap, Re2 = !!r3.gradientMap, Ae2 = !!r3.alphaMap, be2 = r3.alphaTest > 0, Ce2 = !!r3.alphaHash, Pe2 = !!r3.extensions;
      let Le2 = Q;
      r3.toneMapped && (null !== F2 && true !== F2.isXRRenderTarget || (Le2 = e2.toneMapping));
      const Ue2 = { shaderID: P2, shaderType: r3.type, shaderName: r3.name, vertexShader: w2, fragmentShader: I2, defines: r3.defines, customVertexShaderID: N2, customFragmentShaderID: y2, isRawShaderMaterial: true === r3.isRawShaderMaterial, glslVersion: r3.glslVersion, precision: _2, batching: H2, batchingColor: H2 && null !== S2._colorsTexture, instancing: G2, instancingColor: G2 && null !== S2.instanceColor, instancingMorph: G2 && null !== S2.morphTexture, outputColorSpace: null === F2 ? e2.outputColorSpace : true === F2.isXRRenderTarget ? F2.texture.colorSpace : Ri.workingColorSpace, alphaToCoverage: !!r3.alphaToCoverage, map: V2, matcap: W2, envMap: z2, envMapMode: z2 && b2.mapping, envMapCubeUVHeight: C2, aoMap: k2, lightMap: X2, bumpMap: K2, normalMap: Y2, displacementMap: q2, emissiveMap: j2, normalMapObjectSpace: Y2 && r3.normalMapType === Ke, normalMapTangentSpace: Y2 && r3.normalMapType === Qe, packedNormalMap: Y2 && r3.normalMapType === Qe && (De2 = r3.normalMap.format, De2 === Xt || De2 === ce || De2 === ke), metalnessMap: Z2, roughnessMap: $2, anisotropy: Q2, anisotropyMap: re2, clearcoat: J2, clearcoatMap: ae2, clearcoatNormalMap: oe2, clearcoatRoughnessMap: se2, dispersion: ee2, iridescence: te2, iridescenceMap: le2, iridescenceThicknessMap: ce2, sheen: ne2, sheenColorMap: de2, sheenRoughnessMap: ue2, specularMap: fe2, specularColorMap: pe2, specularIntensityMap: me2, transmission: ie2, transmissionMap: Ee2, thicknessMap: xe2, gradientMap: Re2, opaque: false === r3.transparent && r3.blending === y && false === r3.alphaToCoverage, alphaMap: Ae2, alphaTest: be2, alphaHash: Ce2, combine: r3.combine, mapUv: V2 && E2(r3.map.channel), aoMapUv: k2 && E2(r3.aoMap.channel), lightMapUv: X2 && E2(r3.lightMap.channel), bumpMapUv: K2 && E2(r3.bumpMap.channel), normalMapUv: Y2 && E2(r3.normalMap.channel), displacementMapUv: q2 && E2(r3.displacementMap.channel), emissiveMapUv: j2 && E2(r3.emissiveMap.channel), metalnessMapUv: Z2 && E2(r3.metalnessMap.channel), roughnessMapUv: $2 && E2(r3.roughnessMap.channel), anisotropyMapUv: re2 && E2(r3.anisotropyMap.channel), clearcoatMapUv: ae2 && E2(r3.clearcoatMap.channel), clearcoatNormalMapUv: oe2 && E2(r3.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: se2 && E2(r3.clearcoatRoughnessMap.channel), iridescenceMapUv: le2 && E2(r3.iridescenceMap.channel), iridescenceThicknessMapUv: ce2 && E2(r3.iridescenceThicknessMap.channel), sheenColorMapUv: de2 && E2(r3.sheenColorMap.channel), sheenRoughnessMapUv: ue2 && E2(r3.sheenRoughnessMap.channel), specularMapUv: fe2 && E2(r3.specularMap.channel), specularColorMapUv: pe2 && E2(r3.specularColorMap.channel), specularIntensityMapUv: me2 && E2(r3.specularIntensityMap.channel), transmissionMapUv: Ee2 && E2(r3.transmissionMap.channel), thicknessMapUv: xe2 && E2(r3.thicknessMap.channel), alphaMapUv: Ae2 && E2(r3.alphaMap.channel), vertexTangents: !!x2.attributes.tangent && (Y2 || Q2), vertexNormals: !!x2.attributes.normal, vertexColors: r3.vertexColors, vertexAlphas: true === r3.vertexColors && !!x2.attributes.color && 4 === x2.attributes.color.itemSize, pointsUvs: true === S2.isPoints && !!x2.attributes.uv && (V2 || Ae2), fog: !!T2, useFog: true === r3.fog, fogExp2: !!T2 && T2.isFogExp2, flatShading: false === r3.wireframe && (true === r3.flatShading || void 0 === x2.attributes.normal && false === Y2 && (r3.isMeshLambertMaterial || r3.isMeshPhongMaterial || r3.isMeshStandardMaterial || r3.isMeshPhysicalMaterial)), sizeAttenuation: true === r3.sizeAttenuation, logarithmicDepthBuffer: h2, reversedDepthBuffer: B2, skinning: true === S2.isSkinnedMesh, hasPositionAttribute: void 0 !== x2.attributes.position, morphTargets: void 0 !== x2.morphAttributes.position, morphNormals: void 0 !== x2.morphAttributes.normal, morphColors: void 0 !== x2.morphAttributes.color, morphTargetsCount: D2, morphTextureStride: O2, numDirLights: s3.directional.length, numPointLights: s3.point.length, numSpotLights: s3.spot.length, numSpotLightMaps: s3.spotLightMap.length, numRectAreaLights: s3.rectArea.length, numHemiLights: s3.hemi.length, numDirLightShadows: s3.directionalShadowMap.length, numPointLightShadows: s3.pointShadowMap.length, numSpotLightShadows: s3.spotShadowMap.length, numSpotLightShadowsWithMaps: s3.numSpotLightShadowsWithMaps, numLightProbes: s3.numLightProbes, numLightProbeGrids: M2.length, numClippingPlanes: o2.numPlanes, numClipIntersection: o2.numIntersection, dithering: r3.dithering, shadowMapEnabled: e2.shadowMap.enabled && u3.length > 0, shadowMapType: e2.shadowMap.type, toneMapping: Le2, decodeVideoTexture: V2 && true === r3.map.isVideoTexture && Ri.getTransfer(r3.map.colorSpace) === rs, decodeVideoTextureEmissive: j2 && true === r3.emissiveMap.isVideoTexture && Ri.getTransfer(r3.emissiveMap.colorSpace) === rs, premultipliedAlpha: r3.premultipliedAlpha, doubleSided: r3.side === p, flipSided: r3.side === d, useDepthPacking: r3.depthPacking >= 0, depthPacking: r3.depthPacking || 0, index0AttributeName: r3.index0AttributeName, extensionClipCullDistance: Pe2 && true === r3.extensions.clipCullDistance && n2.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Pe2 && true === r3.extensions.multiDraw || H2) && n2.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n2.has("KHR_parallel_shader_compile"), customProgramCacheKey: r3.customProgramCacheKey() };
      var De2;
      return Ue2.vertexUv1s = d2.has(1), Ue2.vertexUv2s = d2.has(2), Ue2.vertexUv3s = d2.has(3), d2.clear(), Ue2;
    }, getProgramCacheKey: function(t3) {
      const n3 = [];
      if (t3.shaderID ? n3.push(t3.shaderID) : (n3.push(t3.customVertexShaderID), n3.push(t3.customFragmentShaderID)), void 0 !== t3.defines) for (const e3 in t3.defines) n3.push(e3), n3.push(t3.defines[e3]);
      return false === t3.isRawShaderMaterial && (!(function(e3, t4) {
        e3.push(t4.precision), e3.push(t4.outputColorSpace), e3.push(t4.envMapMode), e3.push(t4.envMapCubeUVHeight), e3.push(t4.mapUv), e3.push(t4.alphaMapUv), e3.push(t4.lightMapUv), e3.push(t4.aoMapUv), e3.push(t4.bumpMapUv), e3.push(t4.normalMapUv), e3.push(t4.displacementMapUv), e3.push(t4.emissiveMapUv), e3.push(t4.metalnessMapUv), e3.push(t4.roughnessMapUv), e3.push(t4.anisotropyMapUv), e3.push(t4.clearcoatMapUv), e3.push(t4.clearcoatNormalMapUv), e3.push(t4.clearcoatRoughnessMapUv), e3.push(t4.iridescenceMapUv), e3.push(t4.iridescenceThicknessMapUv), e3.push(t4.sheenColorMapUv), e3.push(t4.sheenRoughnessMapUv), e3.push(t4.specularMapUv), e3.push(t4.specularColorMapUv), e3.push(t4.specularIntensityMapUv), e3.push(t4.transmissionMapUv), e3.push(t4.thicknessMapUv), e3.push(t4.combine), e3.push(t4.fogExp2), e3.push(t4.sizeAttenuation), e3.push(t4.morphTargetsCount), e3.push(t4.morphAttributeCount), e3.push(t4.numDirLights), e3.push(t4.numPointLights), e3.push(t4.numSpotLights), e3.push(t4.numSpotLightMaps), e3.push(t4.numHemiLights), e3.push(t4.numRectAreaLights), e3.push(t4.numDirLightShadows), e3.push(t4.numPointLightShadows), e3.push(t4.numSpotLightShadows), e3.push(t4.numSpotLightShadowsWithMaps), e3.push(t4.numLightProbes), e3.push(t4.shadowMapType), e3.push(t4.toneMapping), e3.push(t4.numClippingPlanes), e3.push(t4.numClipIntersection), e3.push(t4.depthPacking);
      })(n3, t3), (function(e3, t4) {
        s2.disableAll(), t4.instancing && s2.enable(0);
        t4.instancingColor && s2.enable(1);
        t4.instancingMorph && s2.enable(2);
        t4.matcap && s2.enable(3);
        t4.envMap && s2.enable(4);
        t4.normalMapObjectSpace && s2.enable(5);
        t4.normalMapTangentSpace && s2.enable(6);
        t4.clearcoat && s2.enable(7);
        t4.iridescence && s2.enable(8);
        t4.alphaTest && s2.enable(9);
        t4.vertexColors && s2.enable(10);
        t4.vertexAlphas && s2.enable(11);
        t4.vertexUv1s && s2.enable(12);
        t4.vertexUv2s && s2.enable(13);
        t4.vertexUv3s && s2.enable(14);
        t4.vertexTangents && s2.enable(15);
        t4.anisotropy && s2.enable(16);
        t4.alphaHash && s2.enable(17);
        t4.batching && s2.enable(18);
        t4.dispersion && s2.enable(19);
        t4.batchingColor && s2.enable(20);
        t4.gradientMap && s2.enable(21);
        t4.packedNormalMap && s2.enable(22);
        t4.vertexNormals && s2.enable(23);
        e3.push(s2.mask), s2.disableAll(), t4.fog && s2.enable(0);
        t4.useFog && s2.enable(1);
        t4.flatShading && s2.enable(2);
        t4.logarithmicDepthBuffer && s2.enable(3);
        t4.reversedDepthBuffer && s2.enable(4);
        t4.skinning && s2.enable(5);
        t4.morphTargets && s2.enable(6);
        t4.morphNormals && s2.enable(7);
        t4.morphColors && s2.enable(8);
        t4.premultipliedAlpha && s2.enable(9);
        t4.shadowMapEnabled && s2.enable(10);
        t4.doubleSided && s2.enable(11);
        t4.flipSided && s2.enable(12);
        t4.useDepthPacking && s2.enable(13);
        t4.dithering && s2.enable(14);
        t4.transmission && s2.enable(15);
        t4.sheen && s2.enable(16);
        t4.opaque && s2.enable(17);
        t4.pointsUvs && s2.enable(18);
        t4.decodeVideoTexture && s2.enable(19);
        t4.decodeVideoTextureEmissive && s2.enable(20);
        t4.alphaToCoverage && s2.enable(21);
        t4.numLightProbeGrids > 0 && s2.enable(22);
        t4.hasPositionAttribute && s2.enable(23);
        e3.push(s2.mask);
      })(n3, t3), n3.push(e2.outputColorSpace)), n3.push(t3.customProgramCacheKey), n3.join();
    }, getUniforms: function(e3) {
      const t3 = g2[e3.type];
      let n3;
      if (t3) {
        const e4 = Hn2[t3];
        n3 = Yl.clone(e4.uniforms);
      } else n3 = e3.uniforms;
      return n3;
    }, acquireProgram: function(t3, n3) {
      let i3 = m2.get(n3);
      return void 0 !== i3 ? ++i3.usedTimes : (i3 = new jr2(e2, n3, t3, r2), u2.push(i3), m2.set(n3, i3)), i3;
    }, releaseProgram: function(e3) {
      if (0 === --e3.usedTimes) {
        const t3 = u2.indexOf(e3);
        u2[t3] = u2[u2.length - 1], u2.pop(), m2.delete(e3.cacheKey), e3.destroy();
      }
    }, releaseShaderCache: function(e3) {
      l2.remove(e3);
    }, programs: u2, dispose: function() {
      l2.dispose();
    } };
  }
  function ea2() {
    let e2 = /* @__PURE__ */ new WeakMap();
    return { has: function(t2) {
      return e2.has(t2);
    }, get: function(t2) {
      let n2 = e2.get(t2);
      return void 0 === n2 && (n2 = {}, e2.set(t2, n2)), n2;
    }, remove: function(t2) {
      e2.delete(t2);
    }, update: function(t2, n2, i2) {
      e2.get(t2)[n2] = i2;
    }, dispose: function() {
      e2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function ta2(e2, t2) {
    return e2.groupOrder !== t2.groupOrder ? e2.groupOrder - t2.groupOrder : e2.renderOrder !== t2.renderOrder ? e2.renderOrder - t2.renderOrder : e2.material.id !== t2.material.id ? e2.material.id - t2.material.id : e2.materialVariant !== t2.materialVariant ? e2.materialVariant - t2.materialVariant : e2.z !== t2.z ? e2.z - t2.z : e2.id - t2.id;
  }
  function na2(e2, t2) {
    return e2.groupOrder !== t2.groupOrder ? e2.groupOrder - t2.groupOrder : e2.renderOrder !== t2.renderOrder ? e2.renderOrder - t2.renderOrder : e2.z !== t2.z ? t2.z - e2.z : e2.id - t2.id;
  }
  function ia2() {
    const e2 = [];
    let t2 = 0;
    const n2 = [], i2 = [], r2 = [];
    function a2(e3) {
      let t3 = 0;
      return e3.isInstancedMesh && (t3 += 2), e3.isSkinnedMesh && (t3 += 1), t3;
    }
    function o2(n3, i3, r3, o3, s2, l2) {
      let c2 = e2[t2];
      return void 0 === c2 ? (c2 = { id: n3.id, object: n3, geometry: i3, material: r3, materialVariant: a2(n3), groupOrder: o3, renderOrder: n3.renderOrder, z: s2, group: l2 }, e2[t2] = c2) : (c2.id = n3.id, c2.object = n3, c2.geometry = i3, c2.material = r3, c2.materialVariant = a2(n3), c2.groupOrder = o3, c2.renderOrder = n3.renderOrder, c2.z = s2, c2.group = l2), t2++, c2;
    }
    return { opaque: n2, transmissive: i2, transparent: r2, init: function() {
      t2 = 0, n2.length = 0, i2.length = 0, r2.length = 0;
    }, push: function(e3, t3, a3, s2, l2, c2) {
      const d2 = o2(e3, t3, a3, s2, l2, c2);
      a3.transmission > 0 ? i2.push(d2) : true === a3.transparent ? r2.push(d2) : n2.push(d2);
    }, unshift: function(e3, t3, a3, s2, l2, c2) {
      const d2 = o2(e3, t3, a3, s2, l2, c2);
      a3.transmission > 0 ? i2.unshift(d2) : true === a3.transparent ? r2.unshift(d2) : n2.unshift(d2);
    }, finish: function() {
      for (let n3 = t2, i3 = e2.length; n3 < i3; n3++) {
        const t3 = e2[n3];
        if (null === t3.id) break;
        t3.id = null, t3.object = null, t3.geometry = null, t3.material = null, t3.group = null;
      }
    }, sort: function(e3, t3, a3) {
      n2.length > 1 && n2.sort(e3 || ta2), i2.length > 1 && i2.sort(t3 || na2), r2.length > 1 && r2.sort(t3 || na2), a3 && (n2.reverse(), i2.reverse(), r2.reverse());
    } };
  }
  function ra2() {
    let e2 = /* @__PURE__ */ new WeakMap();
    return { get: function(t2, n2) {
      const i2 = e2.get(t2);
      let r2;
      return void 0 === i2 ? (r2 = new ia2(), e2.set(t2, [r2])) : n2 >= i2.length ? (r2 = new ia2(), i2.push(r2)) : r2 = i2[n2], r2;
    }, dispose: function() {
      e2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function aa2() {
    const e2 = {};
    return { get: function(t2) {
      if (void 0 !== e2[t2.id]) return e2[t2.id];
      let r2;
      switch (t2.type) {
        case "DirectionalLight":
          r2 = { direction: new Ti(), color: new Pr() };
          break;
        case "SpotLight":
          r2 = { position: new Ti(), direction: new Ti(), color: new Pr(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
          break;
        case "PointLight":
          r2 = { position: new Ti(), color: new Pr(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          r2 = { direction: new Ti(), skyColor: new Pr(), groundColor: new Pr() };
          break;
        case "RectAreaLight":
          r2 = { color: new Pr(), position: new Ti(), halfWidth: new Ti(), halfHeight: new Ti() };
      }
      return e2[t2.id] = r2, r2;
    } };
  }
  var oa2 = 0;
  function sa2(e2, t2) {
    return (t2.castShadow ? 2 : 0) - (e2.castShadow ? 2 : 0) + (t2.map ? 1 : 0) - (e2.map ? 1 : 0);
  }
  function la2(e2) {
    const n2 = new aa2(), r2 = /* @__PURE__ */ (function() {
      const e3 = {};
      return { get: function(n3) {
        if (void 0 !== e3[n3.id]) return e3[n3.id];
        let i2;
        switch (n3.type) {
          case "DirectionalLight":
          case "SpotLight":
            i2 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new _i() };
            break;
          case "PointLight":
            i2 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new _i(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        }
        return e3[n3.id] = i2, i2;
      } };
    })(), a2 = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
    for (let e3 = 0; e3 < 9; e3++) a2.probe.push(new Ti());
    const o2 = new Ti(), s2 = new Qi(), l2 = new Qi();
    return { setup: function(t2) {
      let i2 = 0, o3 = 0, s3 = 0;
      for (let e3 = 0; e3 < 9; e3++) a2.probe[e3].set(0, 0, 0);
      let l3 = 0, c2 = 0, d2 = 0, u2 = 0, f2 = 0, p2 = 0, m2 = 0, h2 = 0, _2 = 0, g2 = 0, v2 = 0;
      t2.sort(sa2);
      for (let e3 = 0, E3 = t2.length; e3 < E3; e3++) {
        const E4 = t2[e3], S2 = E4.color, M2 = E4.intensity, T2 = E4.distance;
        let x2 = null;
        if (E4.shadow && E4.shadow.map && (x2 = E4.shadow.map.texture.format === Xt ? E4.shadow.map.texture : E4.shadow.map.depthTexture || E4.shadow.map.texture), E4.isAmbientLight) i2 += S2.r * M2, o3 += S2.g * M2, s3 += S2.b * M2;
        else if (E4.isLightProbe) {
          for (let e4 = 0; e4 < 9; e4++) a2.probe[e4].addScaledVector(E4.sh.coefficients[e4], M2);
          v2++;
        } else if (E4.isDirectionalLight) {
          const e4 = n2.get(E4);
          if (e4.color.copy(E4.color).multiplyScalar(E4.intensity), E4.castShadow) {
            const e5 = E4.shadow, t3 = r2.get(E4);
            t3.shadowIntensity = e5.intensity, t3.shadowBias = e5.bias, t3.shadowNormalBias = e5.normalBias, t3.shadowRadius = e5.radius, t3.shadowMapSize = e5.mapSize, a2.directionalShadow[l3] = t3, a2.directionalShadowMap[l3] = x2, a2.directionalShadowMatrix[l3] = E4.shadow.matrix, p2++;
          }
          a2.directional[l3] = e4, l3++;
        } else if (E4.isSpotLight) {
          const e4 = n2.get(E4);
          e4.position.setFromMatrixPosition(E4.matrixWorld), e4.color.copy(S2).multiplyScalar(M2), e4.distance = T2, e4.coneCos = Math.cos(E4.angle), e4.penumbraCos = Math.cos(E4.angle * (1 - E4.penumbra)), e4.decay = E4.decay, a2.spot[d2] = e4;
          const t3 = E4.shadow;
          if (E4.map && (a2.spotLightMap[_2] = E4.map, _2++, t3.updateMatrices(E4), E4.castShadow && g2++), a2.spotLightMatrix[d2] = t3.matrix, E4.castShadow) {
            const e5 = r2.get(E4);
            e5.shadowIntensity = t3.intensity, e5.shadowBias = t3.bias, e5.shadowNormalBias = t3.normalBias, e5.shadowRadius = t3.radius, e5.shadowMapSize = t3.mapSize, a2.spotShadow[d2] = e5, a2.spotShadowMap[d2] = x2, h2++;
          }
          d2++;
        } else if (E4.isRectAreaLight) {
          const e4 = n2.get(E4);
          e4.color.copy(S2).multiplyScalar(M2), e4.halfWidth.set(0.5 * E4.width, 0, 0), e4.halfHeight.set(0, 0.5 * E4.height, 0), a2.rectArea[u2] = e4, u2++;
        } else if (E4.isPointLight) {
          const e4 = n2.get(E4);
          if (e4.color.copy(E4.color).multiplyScalar(E4.intensity), e4.distance = E4.distance, e4.decay = E4.decay, E4.castShadow) {
            const e5 = E4.shadow, t3 = r2.get(E4);
            t3.shadowIntensity = e5.intensity, t3.shadowBias = e5.bias, t3.shadowNormalBias = e5.normalBias, t3.shadowRadius = e5.radius, t3.shadowMapSize = e5.mapSize, t3.shadowCameraNear = e5.camera.near, t3.shadowCameraFar = e5.camera.far, a2.pointShadow[c2] = t3, a2.pointShadowMap[c2] = x2, a2.pointShadowMatrix[c2] = E4.shadow.matrix, m2++;
          }
          a2.point[c2] = e4, c2++;
        } else if (E4.isHemisphereLight) {
          const e4 = n2.get(E4);
          e4.skyColor.copy(E4.color).multiplyScalar(M2), e4.groundColor.copy(E4.groundColor).multiplyScalar(M2), a2.hemi[f2] = e4, f2++;
        }
      }
      u2 > 0 && (true === e2.has("OES_texture_float_linear") ? (a2.rectAreaLTC1 = Gn2.LTC_FLOAT_1, a2.rectAreaLTC2 = Gn2.LTC_FLOAT_2) : (a2.rectAreaLTC1 = Gn2.LTC_HALF_1, a2.rectAreaLTC2 = Gn2.LTC_HALF_2)), a2.ambient[0] = i2, a2.ambient[1] = o3, a2.ambient[2] = s3;
      const E2 = a2.hash;
      E2.directionalLength === l3 && E2.pointLength === c2 && E2.spotLength === d2 && E2.rectAreaLength === u2 && E2.hemiLength === f2 && E2.numDirectionalShadows === p2 && E2.numPointShadows === m2 && E2.numSpotShadows === h2 && E2.numSpotMaps === _2 && E2.numLightProbes === v2 || (a2.directional.length = l3, a2.spot.length = d2, a2.rectArea.length = u2, a2.point.length = c2, a2.hemi.length = f2, a2.directionalShadow.length = p2, a2.directionalShadowMap.length = p2, a2.pointShadow.length = m2, a2.pointShadowMap.length = m2, a2.spotShadow.length = h2, a2.spotShadowMap.length = h2, a2.directionalShadowMatrix.length = p2, a2.pointShadowMatrix.length = m2, a2.spotLightMatrix.length = h2 + _2 - g2, a2.spotLightMap.length = _2, a2.numSpotLightShadowsWithMaps = g2, a2.numLightProbes = v2, E2.directionalLength = l3, E2.pointLength = c2, E2.spotLength = d2, E2.rectAreaLength = u2, E2.hemiLength = f2, E2.numDirectionalShadows = p2, E2.numPointShadows = m2, E2.numSpotShadows = h2, E2.numSpotMaps = _2, E2.numLightProbes = v2, a2.version = oa2++);
    }, setupView: function(e3, t2) {
      let n3 = 0, i2 = 0, r3 = 0, c2 = 0, d2 = 0;
      const u2 = t2.matrixWorldInverse;
      for (let t3 = 0, f2 = e3.length; t3 < f2; t3++) {
        const f3 = e3[t3];
        if (f3.isDirectionalLight) {
          const e4 = a2.directional[n3];
          e4.direction.setFromMatrixPosition(f3.matrixWorld), o2.setFromMatrixPosition(f3.target.matrixWorld), e4.direction.sub(o2), e4.direction.transformDirection(u2), n3++;
        } else if (f3.isSpotLight) {
          const e4 = a2.spot[r3];
          e4.position.setFromMatrixPosition(f3.matrixWorld), e4.position.applyMatrix4(u2), e4.direction.setFromMatrixPosition(f3.matrixWorld), o2.setFromMatrixPosition(f3.target.matrixWorld), e4.direction.sub(o2), e4.direction.transformDirection(u2), r3++;
        } else if (f3.isRectAreaLight) {
          const e4 = a2.rectArea[c2];
          e4.position.setFromMatrixPosition(f3.matrixWorld), e4.position.applyMatrix4(u2), l2.identity(), s2.copy(f3.matrixWorld), s2.premultiply(u2), l2.extractRotation(s2), e4.halfWidth.set(0.5 * f3.width, 0, 0), e4.halfHeight.set(0, 0.5 * f3.height, 0), e4.halfWidth.applyMatrix4(l2), e4.halfHeight.applyMatrix4(l2), c2++;
        } else if (f3.isPointLight) {
          const e4 = a2.point[i2];
          e4.position.setFromMatrixPosition(f3.matrixWorld), e4.position.applyMatrix4(u2), i2++;
        } else if (f3.isHemisphereLight) {
          const e4 = a2.hemi[d2];
          e4.direction.setFromMatrixPosition(f3.matrixWorld), e4.direction.transformDirection(u2), d2++;
        }
      }
    }, state: a2 };
  }
  function ca2(e2) {
    const t2 = new la2(e2), n2 = [], i2 = [], r2 = [];
    const a2 = { lightsArray: n2, shadowsArray: i2, lightProbeGridArray: r2, camera: null, lights: t2, transmissionRenderTarget: {}, textureUnits: 0 };
    return { init: function(e3) {
      a2.camera = e3, n2.length = 0, i2.length = 0, r2.length = 0;
    }, state: a2, setupLights: function() {
      t2.setup(n2);
    }, setupLightsView: function(e3) {
      t2.setupView(n2, e3);
    }, pushLight: function(e3) {
      n2.push(e3);
    }, pushShadow: function(e3) {
      i2.push(e3);
    }, pushLightProbeGrid: function(e3) {
      r2.push(e3);
    } };
  }
  function da2(e2) {
    let t2 = /* @__PURE__ */ new WeakMap();
    return { get: function(n2, i2 = 0) {
      const r2 = t2.get(n2);
      let a2;
      return void 0 === r2 ? (a2 = new ca2(e2), t2.set(n2, [a2])) : i2 >= r2.length ? (a2 = new ca2(e2), r2.push(a2)) : a2 = r2[i2], a2;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  var ua2 = [new Ti(1, 0, 0), new Ti(-1, 0, 0), new Ti(0, 1, 0), new Ti(0, -1, 0), new Ti(0, 0, 1), new Ti(0, 0, -1)];
  var fa2 = [new Ti(0, -1, 0), new Ti(0, -1, 0), new Ti(0, 0, 1), new Ti(0, 0, -1), new Ti(0, -1, 0), new Ti(0, -1, 0)];
  var pa2 = new Qi();
  var ma2 = new Ti();
  var ha2 = new Ti();
  function _a2(e2, n2, i2) {
    let r2 = new mo();
    const a2 = new _i(), s2 = new _i(), d2 = new qi(), u2 = new ic(), f2 = new rc(), p2 = {}, m2 = i2.maxTextureSize, _2 = { [u]: d, [d]: u, [p]: p }, g2 = new Zl({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new _i() }, radius: { value: 4 } }, vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );\n	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );\n}" }), S2 = g2.clone();
    S2.defines.HORIZONTAL_PASS = 1;
    const T2 = new Wn();
    T2.setAttribute("position", new Mn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
    const x2 = new Ra(T2, g2), R2 = this;
    this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = h;
    let A2 = this.type;
    function C2(t2, i3) {
      const r3 = n2.update(x2);
      g2.defines.VSM_SAMPLES !== t2.blurSamples && (g2.defines.VSM_SAMPLES = t2.blurSamples, S2.defines.VSM_SAMPLES = t2.blurSamples, g2.needsUpdate = true, S2.needsUpdate = true), null === t2.mapPass && (t2.mapPass = new Xi(a2.x, a2.y, { format: Xt, type: Rt })), g2.uniforms.shadow_pass.value = t2.map.depthTexture, g2.uniforms.resolution.value = t2.mapSize, g2.uniforms.radius.value = t2.radius, e2.setRenderTarget(t2.mapPass), e2.clear(), e2.renderBufferDirect(i3, null, r3, g2, x2, null), S2.uniforms.shadow_pass.value = t2.mapPass.texture, S2.uniforms.resolution.value = t2.mapSize, S2.uniforms.radius.value = t2.radius, e2.setRenderTarget(t2.map), e2.clear(), e2.renderBufferDirect(i3, null, r3, S2, x2, null);
    }
    function P2(t2, n3, i3, r3) {
      let a3 = null;
      const o2 = true === i3.isPointLight ? t2.customDistanceMaterial : t2.customDepthMaterial;
      if (void 0 !== o2) a3 = o2;
      else if (a3 = true === i3.isPointLight ? f2 : u2, e2.localClippingEnabled && true === n3.clipShadows && Array.isArray(n3.clippingPlanes) && 0 !== n3.clippingPlanes.length || n3.displacementMap && 0 !== n3.displacementScale || n3.alphaMap && n3.alphaTest > 0 || n3.map && n3.alphaTest > 0 || true === n3.alphaToCoverage) {
        const e3 = a3.uuid, t3 = n3.uuid;
        let i4 = p2[e3];
        void 0 === i4 && (i4 = {}, p2[e3] = i4);
        let r4 = i4[t3];
        void 0 === r4 && (r4 = a3.clone(), i4[t3] = r4, n3.addEventListener("dispose", U2)), a3 = r4;
      }
      if (a3.visible = n3.visible, a3.wireframe = n3.wireframe, a3.side = r3 === c ? null !== n3.shadowSide ? n3.shadowSide : n3.side : null !== n3.shadowSide ? n3.shadowSide : _2[n3.side], a3.alphaMap = n3.alphaMap, a3.alphaTest = true === n3.alphaToCoverage ? 0.5 : n3.alphaTest, a3.map = n3.map, a3.clipShadows = n3.clipShadows, a3.clippingPlanes = n3.clippingPlanes, a3.clipIntersection = n3.clipIntersection, a3.displacementMap = n3.displacementMap, a3.displacementScale = n3.displacementScale, a3.displacementBias = n3.displacementBias, a3.wireframeLinewidth = n3.wireframeLinewidth, a3.linewidth = n3.linewidth, true === i3.isPointLight && true === a3.isMeshDistanceMaterial) {
        e2.properties.get(a3).light = i3;
      }
      return a3;
    }
    function L2(t2, i3, a3, o2, s3) {
      if (false === t2.visible) return;
      if (t2.layers.test(i3.layers) && (t2.isMesh || t2.isLine || t2.isPoints) && (t2.castShadow || t2.receiveShadow && s3 === c) && (!t2.frustumCulled || r2.intersectsObject(t2))) {
        t2.modelViewMatrix.multiplyMatrices(a3.matrixWorldInverse, t2.matrixWorld);
        const r3 = n2.update(t2), l3 = t2.material;
        if (Array.isArray(l3)) {
          const n3 = r3.groups;
          for (let c2 = 0, d3 = n3.length; c2 < d3; c2++) {
            const d4 = n3[c2], u3 = l3[d4.materialIndex];
            if (u3 && u3.visible) {
              const n4 = P2(t2, u3, o2, s3);
              t2.onBeforeShadow(e2, t2, i3, a3, r3, n4, d4), e2.renderBufferDirect(a3, null, r3, n4, t2, d4), t2.onAfterShadow(e2, t2, i3, a3, r3, n4, d4);
            }
          }
        } else if (l3.visible) {
          const n3 = P2(t2, l3, o2, s3);
          t2.onBeforeShadow(e2, t2, i3, a3, r3, n3, null), e2.renderBufferDirect(a3, null, r3, n3, t2, null), t2.onAfterShadow(e2, t2, i3, a3, r3, n3, null);
        }
      }
      const l2 = t2.children;
      for (let e3 = 0, t3 = l2.length; e3 < t3; e3++) L2(l2[e3], i3, a3, o2, s3);
    }
    function U2(e3) {
      e3.target.removeEventListener("dispose", U2);
      for (const t2 in p2) {
        const n3 = p2[t2], i3 = e3.target.uuid;
        if (i3 in n3) {
          n3[i3].dispose(), delete n3[i3];
        }
      }
    }
    this.render = function(t2, n3, i3) {
      if (false === R2.enabled) return;
      if (false === R2.autoUpdate && false === R2.needsUpdate) return;
      if (0 === t2.length) return;
      this.type === l && (ai("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = h);
      const o2 = e2.getRenderTarget(), l2 = e2.getActiveCubeFace(), c2 = e2.getActiveMipmapLevel(), u3 = e2.state;
      u3.setBlending(m), true === u3.buffers.depth.getReversed() ? u3.buffers.color.setClear(0, 0, 0, 0) : u3.buffers.color.setClear(1, 1, 1, 1), u3.buffers.depth.setTest(true), u3.setScissorTest(false);
      const f3 = A2 !== this.type;
      f3 && n3.traverse(function(e3) {
        e3.material && (Array.isArray(e3.material) ? e3.material.forEach((e4) => e4.needsUpdate = true) : e3.material.needsUpdate = true);
      });
      for (let o3 = 0, l3 = t2.length; o3 < l3; o3++) {
        const l4 = t2[o3], c3 = l4.shadow;
        if (void 0 === c3) {
          ai("WebGLShadowMap:", l4, "has no shadow.");
          continue;
        }
        if (false === c3.autoUpdate && false === c3.needsUpdate) continue;
        a2.copy(c3.mapSize);
        const p3 = c3.getFrameExtents();
        a2.multiply(p3), s2.copy(c3.mapSize), (a2.x > m2 || a2.y > m2) && (a2.x > m2 && (s2.x = Math.floor(m2 / p3.x), a2.x = s2.x * p3.x, c3.mapSize.x = s2.x), a2.y > m2 && (s2.y = Math.floor(m2 / p3.y), a2.y = s2.y * p3.y, c3.mapSize.y = s2.y));
        const h2 = e2.state.buffers.depth.getReversed();
        if (c3.camera._reversedDepth = h2, null === c3.map || true === f3) {
          if (null !== c3.map && (null !== c3.map.depthTexture && (c3.map.depthTexture.dispose(), c3.map.depthTexture = null), c3.map.dispose()), this.type === c) {
            if (l4.isPointLight) {
              ai("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
              continue;
            }
            c3.map = new Xi(a2.x, a2.y, { format: Xt, type: Rt, minFilter: Mt, magFilter: Mt, generateMipmaps: false }), c3.map.texture.name = l4.name + ".shadowMap", c3.map.depthTexture = new dh(a2.x, a2.y, Pt), c3.map.depthTexture.name = l4.name + ".shadowMapDepth", c3.map.depthTexture.format = Wt, c3.map.depthTexture.compareFunction = null, c3.map.depthTexture.minFilter = ft, c3.map.depthTexture.magFilter = ft;
          } else l4.isPointLight ? (c3.map = new di2(a2.x), c3.map.depthTexture = new ph(a2.x, Ot)) : (c3.map = new Xi(a2.x, a2.y), c3.map.depthTexture = new dh(a2.x, a2.y, Ot)), c3.map.depthTexture.name = l4.name + ".shadowMap", c3.map.depthTexture.format = Wt, this.type === h ? (c3.map.depthTexture.compareFunction = h2 ? Bs : zs, c3.map.depthTexture.minFilter = Mt, c3.map.depthTexture.magFilter = Mt) : (c3.map.depthTexture.compareFunction = null, c3.map.depthTexture.minFilter = ft, c3.map.depthTexture.magFilter = ft);
          c3.camera.updateProjectionMatrix();
        }
        const _3 = c3.map.isWebGLCubeRenderTarget ? 6 : 1;
        for (let t3 = 0; t3 < _3; t3++) {
          if (c3.map.isWebGLCubeRenderTarget) e2.setRenderTarget(c3.map, t3), e2.clear();
          else {
            0 === t3 && (e2.setRenderTarget(c3.map), e2.clear());
            const n4 = c3.getViewport(t3);
            d2.set(s2.x * n4.x, s2.y * n4.y, s2.x * n4.z, s2.y * n4.w), u3.viewport(d2);
          }
          if (l4.isPointLight) {
            const e3 = c3.camera, n4 = c3.matrix, i4 = l4.distance || e3.far;
            i4 !== e3.far && (e3.far = i4, e3.updateProjectionMatrix()), ma2.setFromMatrixPosition(l4.matrixWorld), e3.position.copy(ma2), ha2.copy(e3.position), ha2.add(ua2[t3]), e3.up.copy(fa2[t3]), e3.lookAt(ha2), e3.updateMatrixWorld(), n4.makeTranslation(-ma2.x, -ma2.y, -ma2.z), pa2.multiplyMatrices(e3.projectionMatrix, e3.matrixWorldInverse), c3._frustum.setFromProjectionMatrix(pa2, e3.coordinateSystem, e3.reversedDepth);
          } else c3.updateMatrices(l4);
          r2 = c3.getFrustum(), L2(n3, i3, c3.camera, l4, this.type);
        }
        true !== c3.isPointLightShadow && this.type === c && C2(c3, i3), c3.needsUpdate = false;
      }
      A2 = this.type, R2.needsUpdate = false, e2.setRenderTarget(o2, l2, c2);
    };
  }
  function ga2(e2, t2) {
    const i2 = new function() {
      let t3 = false;
      const n2 = new qi();
      let i3 = null;
      const r3 = new qi(0, 0, 0, 0);
      return { setMask: function(n3) {
        i3 === n3 || t3 || (e2.colorMask(n3, n3, n3, n3), i3 = n3);
      }, setLocked: function(e3) {
        t3 = e3;
      }, setClear: function(t4, i4, a3, o3, s3) {
        true === s3 && (t4 *= o3, i4 *= o3, a3 *= o3), n2.set(t4, i4, a3, o3), false === r3.equals(n2) && (e2.clearColor(t4, i4, a3, o3), r3.copy(n2));
      }, reset: function() {
        t3 = false, i3 = null, r3.set(-1, 0, 0, 0);
      } };
    }(), r2 = new function() {
      let n2 = false, i3 = false, r3 = null, a3 = null, o3 = null;
      return { setReversed: function(e3) {
        if (i3 !== e3) {
          const n3 = t2.get("EXT_clip_control");
          e3 ? n3.clipControlEXT(n3.LOWER_LEFT_EXT, n3.ZERO_TO_ONE_EXT) : n3.clipControlEXT(n3.LOWER_LEFT_EXT, n3.NEGATIVE_ONE_TO_ONE_EXT), i3 = e3;
          const r4 = o3;
          o3 = null, this.setClear(r4);
        }
      }, getReversed: function() {
        return i3;
      }, setTest: function(t3) {
        t3 ? X2(e2.DEPTH_TEST) : Y2(e2.DEPTH_TEST);
      }, setMask: function(t3) {
        r3 === t3 || n2 || (e2.depthMask(t3), r3 = t3);
      }, setFunc: function(t3) {
        if (i3 && (t3 = ui[t3]), a3 !== t3) {
          switch (t3) {
            case U:
              e2.depthFunc(e2.NEVER);
              break;
            case j:
              e2.depthFunc(e2.ALWAYS);
              break;
            case W:
              e2.depthFunc(e2.LESS);
              break;
            case J:
              e2.depthFunc(e2.LEQUAL);
              break;
            case q:
              e2.depthFunc(e2.EQUAL);
              break;
            case H:
              e2.depthFunc(e2.GEQUAL);
              break;
            case X:
              e2.depthFunc(e2.GREATER);
              break;
            case Y:
              e2.depthFunc(e2.NOTEQUAL);
              break;
            default:
              e2.depthFunc(e2.LEQUAL);
          }
          a3 = t3;
        }
      }, setLocked: function(e3) {
        n2 = e3;
      }, setClear: function(t3) {
        o3 !== t3 && (o3 = t3, i3 && (t3 = 1 - t3), e2.clearDepth(t3));
      }, reset: function() {
        n2 = false, r3 = null, a3 = null, o3 = null, i3 = false;
      } };
    }(), a2 = new function() {
      let t3 = false, n2 = null, i3 = null, r3 = null, a3 = null, o3 = null, s3 = null, l3 = null, c2 = null;
      return { setTest: function(n3) {
        t3 || (n3 ? X2(e2.STENCIL_TEST) : Y2(e2.STENCIL_TEST));
      }, setMask: function(i4) {
        n2 === i4 || t3 || (e2.stencilMask(i4), n2 = i4);
      }, setFunc: function(t4, n3, o4) {
        i3 === t4 && r3 === n3 && a3 === o4 || (e2.stencilFunc(t4, n3, o4), i3 = t4, r3 = n3, a3 = o4);
      }, setOp: function(t4, n3, i4) {
        o3 === t4 && s3 === n3 && l3 === i4 || (e2.stencilOp(t4, n3, i4), o3 = t4, s3 = n3, l3 = i4);
      }, setLocked: function(e3) {
        t3 = e3;
      }, setClear: function(t4) {
        c2 !== t4 && (e2.clearStencil(t4), c2 = t4);
      }, reset: function() {
        t3 = false, n2 = null, i3 = null, r3 = null, a3 = null, o3 = null, s3 = null, l3 = null, c2 = null;
      } };
    }(), o2 = /* @__PURE__ */ new WeakMap(), s2 = /* @__PURE__ */ new WeakMap();
    let l2 = {}, d2 = {}, u2 = {}, f2 = /* @__PURE__ */ new WeakMap(), p2 = [], m2 = null, h2 = false, _2 = null, g2 = null, v2 = null, E2 = null, S2 = null, M2 = null, T2 = null, x2 = new Pr(0, 0, 0), R2 = 0, A2 = false, b2 = null, C2 = null, P2 = null, L2 = null, U2 = null;
    const I2 = e2.getParameter(e2.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let N2 = false, y2 = 0;
    const O2 = e2.getParameter(e2.VERSION);
    -1 !== O2.indexOf("WebGL") ? (y2 = parseFloat(/^WebGL (\d)/.exec(O2)[1]), N2 = y2 >= 1) : -1 !== O2.indexOf("OpenGL ES") && (y2 = parseFloat(/^OpenGL ES (\d)/.exec(O2)[1]), N2 = y2 >= 2);
    let F2 = null, B2 = {};
    const G2 = e2.getParameter(e2.SCISSOR_BOX), H2 = e2.getParameter(e2.VIEWPORT), V2 = new qi().fromArray(G2), W2 = new qi().fromArray(H2);
    function z2(t3, n2, i3, r3) {
      const a3 = new Uint8Array(4), o3 = e2.createTexture();
      e2.bindTexture(t3, o3), e2.texParameteri(t3, e2.TEXTURE_MIN_FILTER, e2.NEAREST), e2.texParameteri(t3, e2.TEXTURE_MAG_FILTER, e2.NEAREST);
      for (let o4 = 0; o4 < i3; o4++) t3 === e2.TEXTURE_3D || t3 === e2.TEXTURE_2D_ARRAY ? e2.texImage3D(n2, 0, e2.RGBA, 1, 1, r3, 0, e2.RGBA, e2.UNSIGNED_BYTE, a3) : e2.texImage2D(n2 + o4, 0, e2.RGBA, 1, 1, 0, e2.RGBA, e2.UNSIGNED_BYTE, a3);
      return o3;
    }
    const k2 = {};
    function X2(t3) {
      true !== l2[t3] && (e2.enable(t3), l2[t3] = true);
    }
    function Y2(t3) {
      false !== l2[t3] && (e2.disable(t3), l2[t3] = false);
    }
    k2[e2.TEXTURE_2D] = z2(e2.TEXTURE_2D, e2.TEXTURE_2D, 1), k2[e2.TEXTURE_CUBE_MAP] = z2(e2.TEXTURE_CUBE_MAP, e2.TEXTURE_CUBE_MAP_POSITIVE_X, 6), k2[e2.TEXTURE_2D_ARRAY] = z2(e2.TEXTURE_2D_ARRAY, e2.TEXTURE_2D_ARRAY, 1, 1), k2[e2.TEXTURE_3D] = z2(e2.TEXTURE_3D, e2.TEXTURE_3D, 1, 1), i2.setClear(0, 0, 0, 1), r2.setClear(1), a2.setClear(0), X2(e2.DEPTH_TEST), r2.setFunc(J), $2(false), Q2(r), X2(e2.CULL_FACE), Z2(m);
    const q2 = { [w]: e2.FUNC_ADD, [M]: e2.FUNC_SUBTRACT, [S]: e2.FUNC_REVERSE_SUBTRACT };
    q2[_] = e2.MIN, q2[A] = e2.MAX;
    const j2 = { [T]: e2.ZERO, [z]: e2.ONE, [C]: e2.SRC_COLOR, [B]: e2.SRC_ALPHA, [N]: e2.SRC_ALPHA_SATURATE, [R]: e2.DST_COLOR, [O]: e2.DST_ALPHA, [I]: e2.ONE_MINUS_SRC_COLOR, [k]: e2.ONE_MINUS_SRC_ALPHA, [E]: e2.ONE_MINUS_DST_COLOR, [P]: e2.ONE_MINUS_DST_ALPHA, [V]: e2.CONSTANT_COLOR, [L]: e2.ONE_MINUS_CONSTANT_COLOR, [F]: e2.CONSTANT_ALPHA, [D]: e2.ONE_MINUS_CONSTANT_ALPHA };
    function Z2(t3, n2, i3, r3, a3, o3, s3, l3, c2, d3) {
      if (t3 !== m) {
        if (false === h2 && (X2(e2.BLEND), h2 = true), t3 === b) a3 = a3 || n2, o3 = o3 || i3, s3 = s3 || r3, n2 === g2 && a3 === S2 || (e2.blendEquationSeparate(q2[n2], q2[a3]), g2 = n2, S2 = a3), i3 === v2 && r3 === E2 && o3 === M2 && s3 === T2 || (e2.blendFuncSeparate(j2[i3], j2[r3], j2[o3], j2[s3]), v2 = i3, E2 = r3, M2 = o3, T2 = s3), false !== l3.equals(x2) && c2 === R2 || (e2.blendColor(l3.r, l3.g, l3.b, c2), x2.copy(l3), R2 = c2), _2 = t3, A2 = false;
        else if (t3 !== _2 || d3 !== A2) {
          if (g2 === w && S2 === w || (e2.blendEquation(e2.FUNC_ADD), g2 = w, S2 = w), d3) switch (t3) {
            case y:
              e2.blendFuncSeparate(e2.ONE, e2.ONE_MINUS_SRC_ALPHA, e2.ONE, e2.ONE_MINUS_SRC_ALPHA);
              break;
            case g:
              e2.blendFunc(e2.ONE, e2.ONE);
              break;
            case f:
              e2.blendFuncSeparate(e2.ZERO, e2.ONE_MINUS_SRC_COLOR, e2.ZERO, e2.ONE);
              break;
            case x:
              e2.blendFuncSeparate(e2.DST_COLOR, e2.ONE_MINUS_SRC_ALPHA, e2.ZERO, e2.ONE);
              break;
            default:
              oi("WebGLState: Invalid blending: ", t3);
          }
          else switch (t3) {
            case y:
              e2.blendFuncSeparate(e2.SRC_ALPHA, e2.ONE_MINUS_SRC_ALPHA, e2.ONE, e2.ONE_MINUS_SRC_ALPHA);
              break;
            case g:
              e2.blendFuncSeparate(e2.SRC_ALPHA, e2.ONE, e2.ONE, e2.ONE);
              break;
            case f:
              oi("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case x:
              oi("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              oi("WebGLState: Invalid blending: ", t3);
          }
          v2 = null, E2 = null, M2 = null, T2 = null, x2.set(0, 0, 0), R2 = 0, _2 = t3, A2 = d3;
        }
      } else true === h2 && (Y2(e2.BLEND), h2 = false);
    }
    function $2(t3) {
      b2 !== t3 && (t3 ? e2.frontFace(e2.CW) : e2.frontFace(e2.CCW), b2 = t3);
    }
    function Q2(t3) {
      t3 !== i ? (X2(e2.CULL_FACE), t3 !== C2 && (t3 === r ? e2.cullFace(e2.BACK) : t3 === n ? e2.cullFace(e2.FRONT) : e2.cullFace(e2.FRONT_AND_BACK))) : Y2(e2.CULL_FACE), C2 = t3;
    }
    function J2(t3, n2, i3) {
      t3 ? (X2(e2.POLYGON_OFFSET_FILL), L2 === n2 && U2 === i3 || (L2 = n2, U2 = i3, r2.getReversed() && (n2 = -n2), e2.polygonOffset(n2, i3))) : Y2(e2.POLYGON_OFFSET_FILL);
    }
    return { buffers: { color: i2, depth: r2, stencil: a2 }, enable: X2, disable: Y2, bindFramebuffer: function(t3, n2) {
      return u2[t3] !== n2 && (e2.bindFramebuffer(t3, n2), u2[t3] = n2, t3 === e2.DRAW_FRAMEBUFFER && (u2[e2.FRAMEBUFFER] = n2), t3 === e2.FRAMEBUFFER && (u2[e2.DRAW_FRAMEBUFFER] = n2), true);
    }, drawBuffers: function(t3, n2) {
      let i3 = p2, r3 = false;
      if (t3) {
        i3 = f2.get(n2), void 0 === i3 && (i3 = [], f2.set(n2, i3));
        const a3 = t3.textures;
        if (i3.length !== a3.length || i3[0] !== e2.COLOR_ATTACHMENT0) {
          for (let t4 = 0, n3 = a3.length; t4 < n3; t4++) i3[t4] = e2.COLOR_ATTACHMENT0 + t4;
          i3.length = a3.length, r3 = true;
        }
      } else i3[0] !== e2.BACK && (i3[0] = e2.BACK, r3 = true);
      r3 && e2.drawBuffers(i3);
    }, useProgram: function(t3) {
      return m2 !== t3 && (e2.useProgram(t3), m2 = t3, true);
    }, setBlending: Z2, setMaterial: function(t3, n2) {
      t3.side === p ? Y2(e2.CULL_FACE) : X2(e2.CULL_FACE);
      let o3 = t3.side === d;
      n2 && (o3 = !o3), $2(o3), t3.blending === y && false === t3.transparent ? Z2(m) : Z2(t3.blending, t3.blendEquation, t3.blendSrc, t3.blendDst, t3.blendEquationAlpha, t3.blendSrcAlpha, t3.blendDstAlpha, t3.blendColor, t3.blendAlpha, t3.premultipliedAlpha), r2.setFunc(t3.depthFunc), r2.setTest(t3.depthTest), r2.setMask(t3.depthWrite), i2.setMask(t3.colorWrite);
      const s3 = t3.stencilWrite;
      a2.setTest(s3), s3 && (a2.setMask(t3.stencilWriteMask), a2.setFunc(t3.stencilFunc, t3.stencilRef, t3.stencilFuncMask), a2.setOp(t3.stencilFail, t3.stencilZFail, t3.stencilZPass)), J2(t3.polygonOffset, t3.polygonOffsetFactor, t3.polygonOffsetUnits), true === t3.alphaToCoverage ? X2(e2.SAMPLE_ALPHA_TO_COVERAGE) : Y2(e2.SAMPLE_ALPHA_TO_COVERAGE);
    }, setFlipSided: $2, setCullFace: Q2, setLineWidth: function(t3) {
      t3 !== P2 && (N2 && e2.lineWidth(t3), P2 = t3);
    }, setPolygonOffset: J2, setScissorTest: function(t3) {
      t3 ? X2(e2.SCISSOR_TEST) : Y2(e2.SCISSOR_TEST);
    }, activeTexture: function(t3) {
      void 0 === t3 && (t3 = e2.TEXTURE0 + I2 - 1), F2 !== t3 && (e2.activeTexture(t3), F2 = t3);
    }, bindTexture: function(t3, n2, i3) {
      void 0 === i3 && (i3 = null === F2 ? e2.TEXTURE0 + I2 - 1 : F2);
      let r3 = B2[i3];
      void 0 === r3 && (r3 = { type: void 0, texture: void 0 }, B2[i3] = r3), r3.type === t3 && r3.texture === n2 || (F2 !== i3 && (e2.activeTexture(i3), F2 = i3), e2.bindTexture(t3, n2 || k2[t3]), r3.type = t3, r3.texture = n2);
    }, unbindTexture: function() {
      const t3 = B2[F2];
      void 0 !== t3 && void 0 !== t3.type && (e2.bindTexture(t3.type, null), t3.type = void 0, t3.texture = void 0);
    }, compressedTexImage2D: function() {
      try {
        e2.compressedTexImage2D(...arguments);
      } catch (e3) {
        oi("WebGLState:", e3);
      }
    }, compressedTexImage3D: function() {
      try {
        e2.compressedTexImage3D(...arguments);
      } catch (e3) {
        oi("WebGLState:", e3);
      }
    }, texImage2D: function() {
      try {
        e2.texImage2D(...arguments);
      } catch (e3) {
        oi("WebGLState:", e3);
      }
    }, texImage3D: function() {
      try {
        e2.texImage3D(...arguments);
      } catch (e3) {
        oi("WebGLState:", e3);
      }
    }, pixelStorei: function(t3, n2) {
      d2[t3] !== n2 && (e2.pixelStorei(t3, n2), d2[t3] = n2);
    }, getParameter: function(t3) {
      return void 0 !== d2[t3] ? d2[t3] : e2.getParameter(t3);
    }, updateUBOMapping: function(t3, n2) {
      let i3 = s2.get(n2);
      void 0 === i3 && (i3 = /* @__PURE__ */ new WeakMap(), s2.set(n2, i3));
      let r3 = i3.get(t3);
      void 0 === r3 && (r3 = e2.getUniformBlockIndex(n2, t3.name), i3.set(t3, r3));
    }, uniformBlockBinding: function(t3, n2) {
      const i3 = s2.get(n2).get(t3);
      o2.get(n2) !== i3 && (e2.uniformBlockBinding(n2, i3, t3.__bindingPointIndex), o2.set(n2, i3));
    }, texStorage2D: function() {
      try {
        e2.texStorage2D(...arguments);
      } catch (e3) {
        oi("WebGLState:", e3);
      }
    }, texStorage3D: function() {
      try {
        e2.texStorage3D(...arguments);
      } catch (e3) {
        oi("WebGLState:", e3);
      }
    }, texSubImage2D: function() {
      try {
        e2.texSubImage2D(...arguments);
      } catch (e3) {
        oi("WebGLState:", e3);
      }
    }, texSubImage3D: function() {
      try {
        e2.texSubImage3D(...arguments);
      } catch (e3) {
        oi("WebGLState:", e3);
      }
    }, compressedTexSubImage2D: function() {
      try {
        e2.compressedTexSubImage2D(...arguments);
      } catch (e3) {
        oi("WebGLState:", e3);
      }
    }, compressedTexSubImage3D: function() {
      try {
        e2.compressedTexSubImage3D(...arguments);
      } catch (e3) {
        oi("WebGLState:", e3);
      }
    }, scissor: function(t3) {
      false === V2.equals(t3) && (e2.scissor(t3.x, t3.y, t3.z, t3.w), V2.copy(t3));
    }, viewport: function(t3) {
      false === W2.equals(t3) && (e2.viewport(t3.x, t3.y, t3.z, t3.w), W2.copy(t3));
    }, reset: function() {
      e2.disable(e2.BLEND), e2.disable(e2.CULL_FACE), e2.disable(e2.DEPTH_TEST), e2.disable(e2.POLYGON_OFFSET_FILL), e2.disable(e2.SCISSOR_TEST), e2.disable(e2.STENCIL_TEST), e2.disable(e2.SAMPLE_ALPHA_TO_COVERAGE), e2.blendEquation(e2.FUNC_ADD), e2.blendFunc(e2.ONE, e2.ZERO), e2.blendFuncSeparate(e2.ONE, e2.ZERO, e2.ONE, e2.ZERO), e2.blendColor(0, 0, 0, 0), e2.colorMask(true, true, true, true), e2.clearColor(0, 0, 0, 0), e2.depthMask(true), e2.depthFunc(e2.LESS), r2.setReversed(false), e2.clearDepth(1), e2.stencilMask(4294967295), e2.stencilFunc(e2.ALWAYS, 0, 4294967295), e2.stencilOp(e2.KEEP, e2.KEEP, e2.KEEP), e2.clearStencil(0), e2.cullFace(e2.BACK), e2.frontFace(e2.CCW), e2.polygonOffset(0, 0), e2.activeTexture(e2.TEXTURE0), e2.bindFramebuffer(e2.FRAMEBUFFER, null), e2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, null), e2.bindFramebuffer(e2.READ_FRAMEBUFFER, null), e2.useProgram(null), e2.lineWidth(1), e2.scissor(0, 0, e2.canvas.width, e2.canvas.height), e2.viewport(0, 0, e2.canvas.width, e2.canvas.height), e2.pixelStorei(e2.PACK_ALIGNMENT, 4), e2.pixelStorei(e2.UNPACK_ALIGNMENT, 4), e2.pixelStorei(e2.UNPACK_FLIP_Y_WEBGL, false), e2.pixelStorei(e2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false), e2.pixelStorei(e2.UNPACK_COLORSPACE_CONVERSION_WEBGL, e2.BROWSER_DEFAULT_WEBGL), e2.pixelStorei(e2.PACK_ROW_LENGTH, 0), e2.pixelStorei(e2.PACK_SKIP_PIXELS, 0), e2.pixelStorei(e2.PACK_SKIP_ROWS, 0), e2.pixelStorei(e2.UNPACK_ROW_LENGTH, 0), e2.pixelStorei(e2.UNPACK_IMAGE_HEIGHT, 0), e2.pixelStorei(e2.UNPACK_SKIP_PIXELS, 0), e2.pixelStorei(e2.UNPACK_SKIP_ROWS, 0), e2.pixelStorei(e2.UNPACK_SKIP_IMAGES, 0), l2 = {}, d2 = {}, F2 = null, B2 = {}, u2 = {}, f2 = /* @__PURE__ */ new WeakMap(), p2 = [], m2 = null, h2 = false, _2 = null, g2 = null, v2 = null, E2 = null, S2 = null, M2 = null, T2 = null, x2 = new Pr(0, 0, 0), R2 = 0, A2 = false, b2 = null, C2 = null, P2 = null, L2 = null, U2 = null, V2.set(0, 0, e2.canvas.width, e2.canvas.height), W2.set(0, 0, e2.canvas.width, e2.canvas.height), i2.reset(), r2.reset(), a2.reset();
    } };
  }
  function va2(e2, n2, i2, r2, a2, o2, s2) {
    const l2 = n2.has("WEBGL_multisampled_render_to_texture") ? n2.get("WEBGL_multisampled_render_to_texture") : null, c2 = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent), d2 = new _i(), u2 = /* @__PURE__ */ new WeakMap(), m2 = /* @__PURE__ */ new Set();
    let h2;
    const _2 = /* @__PURE__ */ new WeakMap();
    let g2 = false;
    try {
      g2 = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (e3) {
    }
    function E2(e3, t2) {
      return g2 ? new OffscreenCanvas(e3, t2) : Qs("canvas");
    }
    function x2(e3, t2, n3) {
      let i3 = 1;
      const r3 = te2(e3);
      if ((r3.width > n3 || r3.height > n3) && (i3 = n3 / Math.max(r3.width, r3.height)), i3 < 1) {
        if ("undefined" != typeof HTMLImageElement && e3 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e3 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e3 instanceof ImageBitmap || "undefined" != typeof VideoFrame && e3 instanceof VideoFrame) {
          const n4 = Math.floor(i3 * r3.width), a3 = Math.floor(i3 * r3.height);
          void 0 === h2 && (h2 = E2(n4, a3));
          const o3 = t2 ? E2(n4, a3) : h2;
          o3.width = n4, o3.height = a3;
          return o3.getContext("2d").drawImage(e3, 0, 0, n4, a3), ai("WebGLRenderer: Texture has been resized from (" + r3.width + "x" + r3.height + ") to (" + n4 + "x" + a3 + ")."), o3;
        }
        return "data" in e3 && ai("WebGLRenderer: Image in DataTexture is too big (" + r3.width + "x" + r3.height + ")."), e3;
      }
      return e3;
    }
    function R2(e3) {
      return e3.generateMipmaps;
    }
    function A2(t2) {
      e2.generateMipmap(t2);
    }
    function b2(t2) {
      return t2.isWebGLCubeRenderTarget ? e2.TEXTURE_CUBE_MAP : t2.isWebGL3DRenderTarget ? e2.TEXTURE_3D : t2.isWebGLArrayRenderTarget || t2.isCompressedArrayTexture ? e2.TEXTURE_2D_ARRAY : e2.TEXTURE_2D;
    }
    function C2(t2, i3, r3, a3, o3, s3 = false) {
      if (null !== t2) {
        if (void 0 !== e2[t2]) return e2[t2];
        ai("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + t2 + "'");
      }
      let l3;
      a3 && (l3 = n2.get("EXT_texture_norm16"), l3 || ai("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
      let c3 = i3;
      if (i3 === e2.RED && (r3 === e2.FLOAT && (c3 = e2.R32F), r3 === e2.HALF_FLOAT && (c3 = e2.R16F), r3 === e2.UNSIGNED_BYTE && (c3 = e2.R8), r3 === e2.UNSIGNED_SHORT && l3 && (c3 = l3.R16_EXT), r3 === e2.SHORT && l3 && (c3 = l3.R16_SNORM_EXT)), i3 === e2.RED_INTEGER && (r3 === e2.UNSIGNED_BYTE && (c3 = e2.R8UI), r3 === e2.UNSIGNED_SHORT && (c3 = e2.R16UI), r3 === e2.UNSIGNED_INT && (c3 = e2.R32UI), r3 === e2.BYTE && (c3 = e2.R8I), r3 === e2.SHORT && (c3 = e2.R16I), r3 === e2.INT && (c3 = e2.R32I)), i3 === e2.RG && (r3 === e2.FLOAT && (c3 = e2.RG32F), r3 === e2.HALF_FLOAT && (c3 = e2.RG16F), r3 === e2.UNSIGNED_BYTE && (c3 = e2.RG8), r3 === e2.UNSIGNED_SHORT && l3 && (c3 = l3.RG16_EXT), r3 === e2.SHORT && l3 && (c3 = l3.RG16_SNORM_EXT)), i3 === e2.RG_INTEGER && (r3 === e2.UNSIGNED_BYTE && (c3 = e2.RG8UI), r3 === e2.UNSIGNED_SHORT && (c3 = e2.RG16UI), r3 === e2.UNSIGNED_INT && (c3 = e2.RG32UI), r3 === e2.BYTE && (c3 = e2.RG8I), r3 === e2.SHORT && (c3 = e2.RG16I), r3 === e2.INT && (c3 = e2.RG32I)), i3 === e2.RGB_INTEGER && (r3 === e2.UNSIGNED_BYTE && (c3 = e2.RGB8UI), r3 === e2.UNSIGNED_SHORT && (c3 = e2.RGB16UI), r3 === e2.UNSIGNED_INT && (c3 = e2.RGB32UI), r3 === e2.BYTE && (c3 = e2.RGB8I), r3 === e2.SHORT && (c3 = e2.RGB16I), r3 === e2.INT && (c3 = e2.RGB32I)), i3 === e2.RGBA_INTEGER && (r3 === e2.UNSIGNED_BYTE && (c3 = e2.RGBA8UI), r3 === e2.UNSIGNED_SHORT && (c3 = e2.RGBA16UI), r3 === e2.UNSIGNED_INT && (c3 = e2.RGBA32UI), r3 === e2.BYTE && (c3 = e2.RGBA8I), r3 === e2.SHORT && (c3 = e2.RGBA16I), r3 === e2.INT && (c3 = e2.RGBA32I)), i3 === e2.RGB && (r3 === e2.UNSIGNED_SHORT && l3 && (c3 = l3.RGB16_EXT), r3 === e2.SHORT && l3 && (c3 = l3.RGB16_SNORM_EXT), r3 === e2.UNSIGNED_INT_5_9_9_9_REV && (c3 = e2.RGB9_E5), r3 === e2.UNSIGNED_INT_10F_11F_11F_REV && (c3 = e2.R11F_G11F_B10F)), i3 === e2.RGBA) {
        const t3 = s3 ? is : Ri.getTransfer(o3);
        r3 === e2.FLOAT && (c3 = e2.RGBA32F), r3 === e2.HALF_FLOAT && (c3 = e2.RGBA16F), r3 === e2.UNSIGNED_BYTE && (c3 = t3 === rs ? e2.SRGB8_ALPHA8 : e2.RGBA8), r3 === e2.UNSIGNED_SHORT && l3 && (c3 = l3.RGBA16_EXT), r3 === e2.SHORT && l3 && (c3 = l3.RGBA16_SNORM_EXT), r3 === e2.UNSIGNED_SHORT_4_4_4_4 && (c3 = e2.RGBA4), r3 === e2.UNSIGNED_SHORT_5_5_5_1 && (c3 = e2.RGB5_A1);
      }
      return c3 !== e2.R16F && c3 !== e2.R32F && c3 !== e2.RG16F && c3 !== e2.RG32F && c3 !== e2.RGBA16F && c3 !== e2.RGBA32F || n2.get("EXT_color_buffer_float"), c3;
    }
    function P2(t2, n3) {
      let i3;
      return t2 ? null === n3 || n3 === Ot || n3 === Vt ? i3 = e2.DEPTH24_STENCIL8 : n3 === Pt ? i3 = e2.DEPTH32F_STENCIL8 : n3 === Bt && (i3 = e2.DEPTH24_STENCIL8, ai("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : null === n3 || n3 === Ot || n3 === Vt ? i3 = e2.DEPTH_COMPONENT24 : n3 === Pt ? i3 = e2.DEPTH_COMPONENT32F : n3 === Bt && (i3 = e2.DEPTH_COMPONENT16), i3;
    }
    function L2(e3, t2) {
      return true === R2(e3) || e3.isFramebufferTexture && e3.minFilter !== ft && e3.minFilter !== Mt ? Math.log2(Math.max(t2.width, t2.height)) + 1 : void 0 !== e3.mipmaps && e3.mipmaps.length > 0 ? e3.mipmaps.length : e3.isCompressedTexture && Array.isArray(e3.image) ? t2.mipmaps.length : 1;
    }
    function U2(e3) {
      const t2 = e3.target;
      t2.removeEventListener("dispose", U2), (function(e4) {
        const t3 = r2.get(e4);
        if (void 0 === t3.__webglInit) return;
        const n3 = e4.source, i3 = _2.get(n3);
        if (i3) {
          const r3 = i3[t3.__cacheKey];
          r3.usedTimes--, 0 === r3.usedTimes && I2(e4), 0 === Object.keys(i3).length && _2.delete(n3);
        }
        r2.remove(e4);
      })(t2), t2.isVideoTexture && u2.delete(t2), t2.isHTMLTexture && m2.delete(t2);
    }
    function w2(t2) {
      const n3 = t2.target;
      n3.removeEventListener("dispose", w2), (function(t3) {
        const n4 = r2.get(t3);
        t3.depthTexture && (t3.depthTexture.dispose(), r2.remove(t3.depthTexture));
        if (t3.isWebGLCubeRenderTarget) for (let t4 = 0; t4 < 6; t4++) {
          if (Array.isArray(n4.__webglFramebuffer[t4])) for (let i4 = 0; i4 < n4.__webglFramebuffer[t4].length; i4++) e2.deleteFramebuffer(n4.__webglFramebuffer[t4][i4]);
          else e2.deleteFramebuffer(n4.__webglFramebuffer[t4]);
          n4.__webglDepthbuffer && e2.deleteRenderbuffer(n4.__webglDepthbuffer[t4]);
        }
        else {
          if (Array.isArray(n4.__webglFramebuffer)) for (let t4 = 0; t4 < n4.__webglFramebuffer.length; t4++) e2.deleteFramebuffer(n4.__webglFramebuffer[t4]);
          else e2.deleteFramebuffer(n4.__webglFramebuffer);
          if (n4.__webglDepthbuffer && e2.deleteRenderbuffer(n4.__webglDepthbuffer), n4.__webglMultisampledFramebuffer && e2.deleteFramebuffer(n4.__webglMultisampledFramebuffer), n4.__webglColorRenderbuffer) for (let t4 = 0; t4 < n4.__webglColorRenderbuffer.length; t4++) n4.__webglColorRenderbuffer[t4] && e2.deleteRenderbuffer(n4.__webglColorRenderbuffer[t4]);
          n4.__webglDepthRenderbuffer && e2.deleteRenderbuffer(n4.__webglDepthRenderbuffer);
        }
        const i3 = t3.textures;
        for (let t4 = 0, n5 = i3.length; t4 < n5; t4++) {
          const n6 = r2.get(i3[t4]);
          n6.__webglTexture && (e2.deleteTexture(n6.__webglTexture), s2.memory.textures--), r2.remove(i3[t4]);
        }
        r2.remove(t3);
      })(n3);
    }
    function I2(t2) {
      const n3 = r2.get(t2);
      e2.deleteTexture(n3.__webglTexture);
      const i3 = t2.source;
      delete _2.get(i3)[n3.__cacheKey], s2.memory.textures--;
    }
    let N2 = 0;
    function F2(t2, n3) {
      const a3 = r2.get(t2);
      if (t2.isVideoTexture && (function(e3) {
        const t3 = s2.render.frame;
        u2.get(e3) !== t3 && (u2.set(e3, t3), e3.update());
      })(t2), false === t2.isRenderTargetTexture && true !== t2.isExternalTexture && t2.version > 0 && a3.__version !== t2.version) {
        const e3 = t2.image;
        if (null === e3) ai("WebGLRenderer: Texture marked for update but no image data found.");
        else {
          if (false !== e3.complete) return void X2(a3, t2, n3);
          ai("WebGLRenderer: Texture marked for update but image is incomplete");
        }
      } else t2.isExternalTexture && (a3.__webglTexture = t2.sourceTexture ? t2.sourceTexture : null);
      i2.bindTexture(e2.TEXTURE_2D, a3.__webglTexture, e2.TEXTURE0 + n3);
    }
    const G2 = { [mt]: e2.REPEAT, [yt]: e2.CLAMP_TO_EDGE, [gt]: e2.MIRRORED_REPEAT }, H2 = { [ft]: e2.NEAREST, [xt]: e2.NEAREST_MIPMAP_NEAREST, [vt]: e2.NEAREST_MIPMAP_LINEAR, [Mt]: e2.LINEAR, [St]: e2.LINEAR_MIPMAP_NEAREST, [At]: e2.LINEAR_MIPMAP_LINEAR }, V2 = { [_s]: e2.NEVER, [ks]: e2.ALWAYS, [As]: e2.LESS, [zs]: e2.LEQUAL, [Ts]: e2.EQUAL, [Bs]: e2.GEQUAL, [Cs]: e2.GREATER, [Is]: e2.NOTEQUAL };
    function W2(t2, i3) {
      if (i3.type !== Pt || false !== n2.has("OES_texture_float_linear") || i3.magFilter !== Mt && i3.magFilter !== St && i3.magFilter !== vt && i3.magFilter !== At && i3.minFilter !== Mt && i3.minFilter !== St && i3.minFilter !== vt && i3.minFilter !== At || ai("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e2.texParameteri(t2, e2.TEXTURE_WRAP_S, G2[i3.wrapS]), e2.texParameteri(t2, e2.TEXTURE_WRAP_T, G2[i3.wrapT]), t2 !== e2.TEXTURE_3D && t2 !== e2.TEXTURE_2D_ARRAY || e2.texParameteri(t2, e2.TEXTURE_WRAP_R, G2[i3.wrapR]), e2.texParameteri(t2, e2.TEXTURE_MAG_FILTER, H2[i3.magFilter]), e2.texParameteri(t2, e2.TEXTURE_MIN_FILTER, H2[i3.minFilter]), i3.compareFunction && (e2.texParameteri(t2, e2.TEXTURE_COMPARE_MODE, e2.COMPARE_REF_TO_TEXTURE), e2.texParameteri(t2, e2.TEXTURE_COMPARE_FUNC, V2[i3.compareFunction])), true === n2.has("EXT_texture_filter_anisotropic")) {
        if (i3.magFilter === ft) return;
        if (i3.minFilter !== vt && i3.minFilter !== At) return;
        if (i3.type === Pt && false === n2.has("OES_texture_float_linear")) return;
        if (i3.anisotropy > 1 || r2.get(i3).__currentAnisotropy) {
          const o3 = n2.get("EXT_texture_filter_anisotropic");
          e2.texParameterf(t2, o3.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(i3.anisotropy, a2.getMaxAnisotropy())), r2.get(i3).__currentAnisotropy = i3.anisotropy;
        }
      }
    }
    function z2(t2, n3) {
      let i3 = false;
      void 0 === t2.__webglInit && (t2.__webglInit = true, n3.addEventListener("dispose", U2));
      const r3 = n3.source;
      let a3 = _2.get(r3);
      void 0 === a3 && (a3 = {}, _2.set(r3, a3));
      const o3 = (function(e3) {
        const t3 = [];
        return t3.push(e3.wrapS), t3.push(e3.wrapT), t3.push(e3.wrapR || 0), t3.push(e3.magFilter), t3.push(e3.minFilter), t3.push(e3.anisotropy), t3.push(e3.internalFormat), t3.push(e3.format), t3.push(e3.type), t3.push(e3.generateMipmaps), t3.push(e3.premultiplyAlpha), t3.push(e3.flipY), t3.push(e3.unpackAlignment), t3.push(e3.colorSpace), t3.join();
      })(n3);
      if (o3 !== t2.__cacheKey) {
        void 0 === a3[o3] && (a3[o3] = { texture: e2.createTexture(), usedTimes: 0 }, s2.memory.textures++, i3 = true), a3[o3].usedTimes++;
        const r4 = a3[t2.__cacheKey];
        void 0 !== r4 && (a3[t2.__cacheKey].usedTimes--, 0 === r4.usedTimes && I2(n3)), t2.__cacheKey = o3, t2.__webglTexture = a3[o3].texture;
      }
      return i3;
    }
    function k2(e3, t2, n3) {
      return Math.floor(Math.floor(e3 / n3) / t2);
    }
    function X2(t2, n3, s3) {
      let l3 = e2.TEXTURE_2D;
      (n3.isDataArrayTexture || n3.isCompressedArrayTexture) && (l3 = e2.TEXTURE_2D_ARRAY), n3.isData3DTexture && (l3 = e2.TEXTURE_3D);
      const c3 = z2(t2, n3), d3 = n3.source;
      i2.bindTexture(l3, t2.__webglTexture, e2.TEXTURE0 + s3);
      const u3 = r2.get(d3);
      if (d3.version !== u3.__version || true === c3) {
        i2.activeTexture(e2.TEXTURE0 + s3);
        if (false === ("undefined" != typeof ImageBitmap && n3.image instanceof ImageBitmap)) {
          const t4 = Ri.getPrimaries(Ri.workingColorSpace), r4 = n3.colorSpace === ts ? null : Ri.getPrimaries(n3.colorSpace), a3 = n3.colorSpace === ts || t4 === r4 ? e2.NONE : e2.BROWSER_DEFAULT_WEBGL;
          i2.pixelStorei(e2.UNPACK_FLIP_Y_WEBGL, n3.flipY), i2.pixelStorei(e2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n3.premultiplyAlpha), i2.pixelStorei(e2.UNPACK_COLORSPACE_CONVERSION_WEBGL, a3);
        }
        i2.pixelStorei(e2.UNPACK_ALIGNMENT, n3.unpackAlignment);
        let t3 = x2(n3.image, false, a2.maxTextureSize);
        t3 = ee2(n3, t3);
        const r3 = o2.convert(n3.format, n3.colorSpace), p2 = o2.convert(n3.type);
        let h3, _3 = C2(n3.internalFormat, r3, p2, n3.normalized, n3.colorSpace, n3.isVideoTexture);
        W2(l3, n3);
        const g3 = n3.mipmaps, E3 = true !== n3.isVideoTexture, S2 = void 0 === u3.__version || true === c3, M2 = d3.dataReady, b3 = L2(n3, t3);
        if (n3.isDepthTexture) _3 = P2(n3.format === Jt, n3.type), S2 && (E3 ? i2.texStorage2D(e2.TEXTURE_2D, 1, _3, t3.width, t3.height) : i2.texImage2D(e2.TEXTURE_2D, 0, _3, t3.width, t3.height, 0, r3, p2, null));
        else if (n3.isDataTexture) if (g3.length > 0) {
          E3 && S2 && i2.texStorage2D(e2.TEXTURE_2D, b3, _3, g3[0].width, g3[0].height);
          for (let t4 = 0, n4 = g3.length; t4 < n4; t4++) h3 = g3[t4], E3 ? M2 && i2.texSubImage2D(e2.TEXTURE_2D, t4, 0, 0, h3.width, h3.height, r3, p2, h3.data) : i2.texImage2D(e2.TEXTURE_2D, t4, _3, h3.width, h3.height, 0, r3, p2, h3.data);
          n3.generateMipmaps = false;
        } else E3 ? (S2 && i2.texStorage2D(e2.TEXTURE_2D, b3, _3, t3.width, t3.height), M2 && (function(t4, n4, r4, a3) {
          const o3 = t4.updateRanges;
          if (0 === o3.length) i2.texSubImage2D(e2.TEXTURE_2D, 0, 0, 0, n4.width, n4.height, r4, a3, n4.data);
          else {
            o3.sort((e3, t5) => e3.start - t5.start);
            let s4 = 0;
            for (let e3 = 1; e3 < o3.length; e3++) {
              const t5 = o3[s4], i3 = o3[e3], r5 = t5.start + t5.count, a4 = k2(i3.start, n4.width, 4), l5 = k2(t5.start, n4.width, 4);
              i3.start <= r5 + 1 && a4 === l5 && k2(i3.start + i3.count - 1, n4.width, 4) === a4 ? t5.count = Math.max(t5.count, i3.start + i3.count - t5.start) : (++s4, o3[s4] = i3);
            }
            o3.length = s4 + 1;
            const l4 = i2.getParameter(e2.UNPACK_ROW_LENGTH), c4 = i2.getParameter(e2.UNPACK_SKIP_PIXELS), d4 = i2.getParameter(e2.UNPACK_SKIP_ROWS);
            i2.pixelStorei(e2.UNPACK_ROW_LENGTH, n4.width);
            for (let t5 = 0, s5 = o3.length; t5 < s5; t5++) {
              const s6 = o3[t5], l5 = Math.floor(s6.start / 4), c5 = Math.ceil(s6.count / 4), d5 = l5 % n4.width, u4 = Math.floor(l5 / n4.width), f2 = c5, p3 = 1;
              i2.pixelStorei(e2.UNPACK_SKIP_PIXELS, d5), i2.pixelStorei(e2.UNPACK_SKIP_ROWS, u4), i2.texSubImage2D(e2.TEXTURE_2D, 0, d5, u4, f2, p3, r4, a3, n4.data);
            }
            t4.clearUpdateRanges(), i2.pixelStorei(e2.UNPACK_ROW_LENGTH, l4), i2.pixelStorei(e2.UNPACK_SKIP_PIXELS, c4), i2.pixelStorei(e2.UNPACK_SKIP_ROWS, d4);
          }
        })(n3, t3, r3, p2)) : i2.texImage2D(e2.TEXTURE_2D, 0, _3, t3.width, t3.height, 0, r3, p2, t3.data);
        else if (n3.isCompressedTexture) if (n3.isCompressedArrayTexture) {
          E3 && S2 && i2.texStorage3D(e2.TEXTURE_2D_ARRAY, b3, _3, g3[0].width, g3[0].height, t3.depth);
          for (let a3 = 0, o3 = g3.length; a3 < o3; a3++) if (h3 = g3[a3], n3.format !== jt) if (null !== r3) if (E3) {
            if (M2) if (n3.layerUpdates.size > 0) {
              const t4 = up(h3.width, h3.height, n3.format, n3.type);
              for (const o4 of n3.layerUpdates) {
                const n4 = h3.data.subarray(o4 * t4 / h3.data.BYTES_PER_ELEMENT, (o4 + 1) * t4 / h3.data.BYTES_PER_ELEMENT);
                i2.compressedTexSubImage3D(e2.TEXTURE_2D_ARRAY, a3, 0, 0, o4, h3.width, h3.height, 1, r3, n4);
              }
              n3.clearLayerUpdates();
            } else i2.compressedTexSubImage3D(e2.TEXTURE_2D_ARRAY, a3, 0, 0, 0, h3.width, h3.height, t3.depth, r3, h3.data);
          } else i2.compressedTexImage3D(e2.TEXTURE_2D_ARRAY, a3, _3, h3.width, h3.height, t3.depth, 0, h3.data, 0, 0);
          else ai("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          else E3 ? M2 && i2.texSubImage3D(e2.TEXTURE_2D_ARRAY, a3, 0, 0, 0, h3.width, h3.height, t3.depth, r3, p2, h3.data) : i2.texImage3D(e2.TEXTURE_2D_ARRAY, a3, _3, h3.width, h3.height, t3.depth, 0, r3, p2, h3.data);
        } else {
          E3 && S2 && i2.texStorage2D(e2.TEXTURE_2D, b3, _3, g3[0].width, g3[0].height);
          for (let t4 = 0, a3 = g3.length; t4 < a3; t4++) h3 = g3[t4], n3.format !== jt ? null !== r3 ? E3 ? M2 && i2.compressedTexSubImage2D(e2.TEXTURE_2D, t4, 0, 0, h3.width, h3.height, r3, h3.data) : i2.compressedTexImage2D(e2.TEXTURE_2D, t4, _3, h3.width, h3.height, 0, h3.data) : ai("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : E3 ? M2 && i2.texSubImage2D(e2.TEXTURE_2D, t4, 0, 0, h3.width, h3.height, r3, p2, h3.data) : i2.texImage2D(e2.TEXTURE_2D, t4, _3, h3.width, h3.height, 0, r3, p2, h3.data);
        }
        else if (n3.isDataArrayTexture) if (E3) {
          if (S2 && i2.texStorage3D(e2.TEXTURE_2D_ARRAY, b3, _3, t3.width, t3.height, t3.depth), M2) if (n3.layerUpdates.size > 0) {
            const a3 = up(t3.width, t3.height, n3.format, n3.type);
            for (const o3 of n3.layerUpdates) {
              const n4 = t3.data.subarray(o3 * a3 / t3.data.BYTES_PER_ELEMENT, (o3 + 1) * a3 / t3.data.BYTES_PER_ELEMENT);
              i2.texSubImage3D(e2.TEXTURE_2D_ARRAY, 0, 0, 0, o3, t3.width, t3.height, 1, r3, p2, n4);
            }
            n3.clearLayerUpdates();
          } else i2.texSubImage3D(e2.TEXTURE_2D_ARRAY, 0, 0, 0, 0, t3.width, t3.height, t3.depth, r3, p2, t3.data);
        } else i2.texImage3D(e2.TEXTURE_2D_ARRAY, 0, _3, t3.width, t3.height, t3.depth, 0, r3, p2, t3.data);
        else if (n3.isData3DTexture) E3 ? (S2 && i2.texStorage3D(e2.TEXTURE_3D, b3, _3, t3.width, t3.height, t3.depth), M2 && i2.texSubImage3D(e2.TEXTURE_3D, 0, 0, 0, 0, t3.width, t3.height, t3.depth, r3, p2, t3.data)) : i2.texImage3D(e2.TEXTURE_3D, 0, _3, t3.width, t3.height, t3.depth, 0, r3, p2, t3.data);
        else if (n3.isFramebufferTexture) {
          if (S2) if (E3) i2.texStorage2D(e2.TEXTURE_2D, b3, _3, t3.width, t3.height);
          else {
            let n4 = t3.width, a3 = t3.height;
            for (let t4 = 0; t4 < b3; t4++) i2.texImage2D(e2.TEXTURE_2D, t4, _3, n4, a3, 0, r3, p2, null), n4 >>= 1, a3 >>= 1;
          }
        } else if (n3.isHTMLTexture) {
          if ("texElementImage2D" in e2) {
            const i3 = e2.canvas;
            if (i3.hasAttribute("layoutsubtree") || i3.setAttribute("layoutsubtree", "true"), t3.parentNode !== i3) return i3.appendChild(t3), m2.add(n3), i3.onpaint = (e3) => {
              const t4 = e3.changedElements;
              for (const e4 of m2) t4.includes(e4.image) && (e4.needsUpdate = true);
            }, void i3.requestPaint();
            if (3 === e2.texElementImage2D.length) e2.texElementImage2D(e2.TEXTURE_2D, e2.RGBA8, t3);
            else {
              const n4 = 0, i4 = e2.RGBA, r4 = e2.RGBA, a3 = e2.UNSIGNED_BYTE;
              e2.texElementImage2D(e2.TEXTURE_2D, n4, i4, r4, a3, t3);
            }
            e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MIN_FILTER, e2.LINEAR), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_S, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_T, e2.CLAMP_TO_EDGE);
          }
        } else if (g3.length > 0) {
          if (E3 && S2) {
            const t4 = te2(g3[0]);
            i2.texStorage2D(e2.TEXTURE_2D, b3, _3, t4.width, t4.height);
          }
          for (let t4 = 0, n4 = g3.length; t4 < n4; t4++) h3 = g3[t4], E3 ? M2 && i2.texSubImage2D(e2.TEXTURE_2D, t4, 0, 0, r3, p2, h3) : i2.texImage2D(e2.TEXTURE_2D, t4, _3, r3, p2, h3);
          n3.generateMipmaps = false;
        } else if (E3) {
          if (S2) {
            const n4 = te2(t3);
            i2.texStorage2D(e2.TEXTURE_2D, b3, _3, n4.width, n4.height);
          }
          M2 && i2.texSubImage2D(e2.TEXTURE_2D, 0, 0, 0, r3, p2, t3);
        } else i2.texImage2D(e2.TEXTURE_2D, 0, _3, r3, p2, t3);
        R2(n3) && A2(l3), u3.__version = d3.version, n3.onUpdate && n3.onUpdate(n3);
      }
      t2.__version = n3.version;
    }
    function K2(t2, n3, a3, s3, c3, d3) {
      const u3 = o2.convert(a3.format, a3.colorSpace), f2 = o2.convert(a3.type), p2 = C2(a3.internalFormat, u3, f2, a3.normalized, a3.colorSpace), m3 = r2.get(n3), h3 = r2.get(a3);
      if (h3.__renderTarget = n3, !m3.__hasExternalTextures) {
        const t3 = Math.max(1, n3.width >> d3), r3 = Math.max(1, n3.height >> d3);
        c3 === e2.TEXTURE_3D || c3 === e2.TEXTURE_2D_ARRAY ? i2.texImage3D(c3, d3, p2, t3, r3, n3.depth, 0, u3, f2, null) : i2.texImage2D(c3, d3, p2, t3, r3, 0, u3, f2, null);
      }
      i2.bindFramebuffer(e2.FRAMEBUFFER, t2), J2(n3) ? l2.framebufferTexture2DMultisampleEXT(e2.FRAMEBUFFER, s3, c3, h3.__webglTexture, 0, Q2(n3)) : (c3 === e2.TEXTURE_2D || c3 >= e2.TEXTURE_CUBE_MAP_POSITIVE_X && c3 <= e2.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e2.framebufferTexture2D(e2.FRAMEBUFFER, s3, c3, h3.__webglTexture, d3), i2.bindFramebuffer(e2.FRAMEBUFFER, null);
    }
    function Y2(t2, n3, i3) {
      if (e2.bindRenderbuffer(e2.RENDERBUFFER, t2), n3.depthBuffer) {
        const r3 = n3.depthTexture, a3 = r3 && r3.isDepthTexture ? r3.type : null, o3 = P2(n3.stencilBuffer, a3), s3 = n3.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT;
        J2(n3) ? l2.renderbufferStorageMultisampleEXT(e2.RENDERBUFFER, Q2(n3), o3, n3.width, n3.height) : i3 ? e2.renderbufferStorageMultisample(e2.RENDERBUFFER, Q2(n3), o3, n3.width, n3.height) : e2.renderbufferStorage(e2.RENDERBUFFER, o3, n3.width, n3.height), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, s3, e2.RENDERBUFFER, t2);
      } else {
        const t3 = n3.textures;
        for (let r3 = 0; r3 < t3.length; r3++) {
          const a3 = t3[r3], s3 = o2.convert(a3.format, a3.colorSpace), c3 = o2.convert(a3.type), d3 = C2(a3.internalFormat, s3, c3, a3.normalized, a3.colorSpace);
          J2(n3) ? l2.renderbufferStorageMultisampleEXT(e2.RENDERBUFFER, Q2(n3), d3, n3.width, n3.height) : i3 ? e2.renderbufferStorageMultisample(e2.RENDERBUFFER, Q2(n3), d3, n3.width, n3.height) : e2.renderbufferStorage(e2.RENDERBUFFER, d3, n3.width, n3.height);
        }
      }
      e2.bindRenderbuffer(e2.RENDERBUFFER, null);
    }
    function q2(t2, n3, a3) {
      const s3 = true === n3.isWebGLCubeRenderTarget;
      if (i2.bindFramebuffer(e2.FRAMEBUFFER, t2), !n3.depthTexture || !n3.depthTexture.isDepthTexture) throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
      const c3 = r2.get(n3.depthTexture);
      if (c3.__renderTarget = n3, c3.__webglTexture && n3.depthTexture.image.width === n3.width && n3.depthTexture.image.height === n3.height || (n3.depthTexture.image.width = n3.width, n3.depthTexture.image.height = n3.height, n3.depthTexture.needsUpdate = true), s3) {
        if (void 0 === c3.__webglInit && (c3.__webglInit = true, n3.depthTexture.addEventListener("dispose", U2)), void 0 === c3.__webglTexture) {
          c3.__webglTexture = e2.createTexture(), i2.bindTexture(e2.TEXTURE_CUBE_MAP, c3.__webglTexture), W2(e2.TEXTURE_CUBE_MAP, n3.depthTexture);
          const t3 = o2.convert(n3.depthTexture.format), r3 = o2.convert(n3.depthTexture.type);
          let a4;
          n3.depthTexture.format === Wt ? a4 = e2.DEPTH_COMPONENT24 : n3.depthTexture.format === Jt && (a4 = e2.DEPTH24_STENCIL8);
          for (let i3 = 0; i3 < 6; i3++) e2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + i3, 0, a4, n3.width, n3.height, 0, t3, r3, null);
        }
      } else F2(n3.depthTexture, 0);
      const d3 = c3.__webglTexture, u3 = Q2(n3), f2 = s3 ? e2.TEXTURE_CUBE_MAP_POSITIVE_X + a3 : e2.TEXTURE_2D, p2 = n3.depthTexture.format === Jt ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT;
      if (n3.depthTexture.format === Wt) J2(n3) ? l2.framebufferTexture2DMultisampleEXT(e2.FRAMEBUFFER, p2, f2, d3, 0, u3) : e2.framebufferTexture2D(e2.FRAMEBUFFER, p2, f2, d3, 0);
      else {
        if (n3.depthTexture.format !== Jt) throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
        J2(n3) ? l2.framebufferTexture2DMultisampleEXT(e2.FRAMEBUFFER, p2, f2, d3, 0, u3) : e2.framebufferTexture2D(e2.FRAMEBUFFER, p2, f2, d3, 0);
      }
    }
    function j2(t2) {
      const n3 = r2.get(t2), a3 = true === t2.isWebGLCubeRenderTarget;
      if (n3.__boundDepthTexture !== t2.depthTexture) {
        const e3 = t2.depthTexture;
        if (n3.__depthDisposeCallback && n3.__depthDisposeCallback(), e3) {
          const t3 = () => {
            delete n3.__boundDepthTexture, delete n3.__depthDisposeCallback, e3.removeEventListener("dispose", t3);
          };
          e3.addEventListener("dispose", t3), n3.__depthDisposeCallback = t3;
        }
        n3.__boundDepthTexture = e3;
      }
      if (t2.depthTexture && !n3.__autoAllocateDepthBuffer) if (a3) for (let e3 = 0; e3 < 6; e3++) q2(n3.__webglFramebuffer[e3], t2, e3);
      else {
        const e3 = t2.texture.mipmaps;
        e3 && e3.length > 0 ? q2(n3.__webglFramebuffer[0], t2, 0) : q2(n3.__webglFramebuffer, t2, 0);
      }
      else if (a3) {
        n3.__webglDepthbuffer = [];
        for (let r3 = 0; r3 < 6; r3++) if (i2.bindFramebuffer(e2.FRAMEBUFFER, n3.__webglFramebuffer[r3]), void 0 === n3.__webglDepthbuffer[r3]) n3.__webglDepthbuffer[r3] = e2.createRenderbuffer(), Y2(n3.__webglDepthbuffer[r3], t2, false);
        else {
          const i3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, a4 = n3.__webglDepthbuffer[r3];
          e2.bindRenderbuffer(e2.RENDERBUFFER, a4), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, i3, e2.RENDERBUFFER, a4);
        }
      } else {
        const r3 = t2.texture.mipmaps;
        if (r3 && r3.length > 0 ? i2.bindFramebuffer(e2.FRAMEBUFFER, n3.__webglFramebuffer[0]) : i2.bindFramebuffer(e2.FRAMEBUFFER, n3.__webglFramebuffer), void 0 === n3.__webglDepthbuffer) n3.__webglDepthbuffer = e2.createRenderbuffer(), Y2(n3.__webglDepthbuffer, t2, false);
        else {
          const i3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, r4 = n3.__webglDepthbuffer;
          e2.bindRenderbuffer(e2.RENDERBUFFER, r4), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, i3, e2.RENDERBUFFER, r4);
        }
      }
      i2.bindFramebuffer(e2.FRAMEBUFFER, null);
    }
    const Z2 = [], $2 = [];
    function Q2(e3) {
      return Math.min(a2.maxSamples, e3.samples);
    }
    function J2(e3) {
      const t2 = r2.get(e3);
      return e3.samples > 0 && true === n2.has("WEBGL_multisampled_render_to_texture") && false !== t2.__useRenderToTexture;
    }
    function ee2(e3, t2) {
      const n3 = e3.colorSpace, i3 = e3.format, r3 = e3.type;
      return true === e3.isCompressedTexture || true === e3.isVideoTexture || n3 !== ss && n3 !== ts && (Ri.getTransfer(n3) === rs ? i3 === jt && r3 === zt || ai("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : oi("WebGLTextures: Unsupported texture color space:", n3)), t2;
    }
    function te2(e3) {
      return "undefined" != typeof HTMLImageElement && e3 instanceof HTMLImageElement ? (d2.width = e3.naturalWidth || e3.width, d2.height = e3.naturalHeight || e3.height) : "undefined" != typeof VideoFrame && e3 instanceof VideoFrame ? (d2.width = e3.displayWidth, d2.height = e3.displayHeight) : (d2.width = e3.width, d2.height = e3.height), d2;
    }
    this.allocateTextureUnit = function() {
      const e3 = N2;
      return e3 >= a2.maxTextures && ai("WebGLTextures: Trying to use " + e3 + " texture units while this GPU supports only " + a2.maxTextures), N2 += 1, e3;
    }, this.resetTextureUnits = function() {
      N2 = 0;
    }, this.getTextureUnits = function() {
      return N2;
    }, this.setTextureUnits = function(e3) {
      N2 = e3;
    }, this.setTexture2D = F2, this.setTexture2DArray = function(t2, n3) {
      const a3 = r2.get(t2);
      false === t2.isRenderTargetTexture && t2.version > 0 && a3.__version !== t2.version ? X2(a3, t2, n3) : (t2.isExternalTexture && (a3.__webglTexture = t2.sourceTexture ? t2.sourceTexture : null), i2.bindTexture(e2.TEXTURE_2D_ARRAY, a3.__webglTexture, e2.TEXTURE0 + n3));
    }, this.setTexture3D = function(t2, n3) {
      const a3 = r2.get(t2);
      false === t2.isRenderTargetTexture && t2.version > 0 && a3.__version !== t2.version ? X2(a3, t2, n3) : i2.bindTexture(e2.TEXTURE_3D, a3.__webglTexture, e2.TEXTURE0 + n3);
    }, this.setTextureCube = function(t2, n3) {
      const s3 = r2.get(t2);
      true !== t2.isCubeDepthTexture && t2.version > 0 && s3.__version !== t2.version ? (function(t3, n4, s4) {
        if (6 !== n4.image.length) return;
        const l3 = z2(t3, n4), c3 = n4.source;
        i2.bindTexture(e2.TEXTURE_CUBE_MAP, t3.__webglTexture, e2.TEXTURE0 + s4);
        const d3 = r2.get(c3);
        if (c3.version !== d3.__version || true === l3) {
          i2.activeTexture(e2.TEXTURE0 + s4);
          const t4 = Ri.getPrimaries(Ri.workingColorSpace), r3 = n4.colorSpace === ts ? null : Ri.getPrimaries(n4.colorSpace), u3 = n4.colorSpace === ts || t4 === r3 ? e2.NONE : e2.BROWSER_DEFAULT_WEBGL;
          i2.pixelStorei(e2.UNPACK_FLIP_Y_WEBGL, n4.flipY), i2.pixelStorei(e2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n4.premultiplyAlpha), i2.pixelStorei(e2.UNPACK_ALIGNMENT, n4.unpackAlignment), i2.pixelStorei(e2.UNPACK_COLORSPACE_CONVERSION_WEBGL, u3);
          const p2 = n4.isCompressedTexture || n4.image[0].isCompressedTexture, m3 = n4.image[0] && n4.image[0].isDataTexture, h3 = [];
          for (let e3 = 0; e3 < 6; e3++) h3[e3] = p2 || m3 ? m3 ? n4.image[e3].image : n4.image[e3] : x2(n4.image[e3], true, a2.maxCubemapSize), h3[e3] = ee2(n4, h3[e3]);
          const _3 = h3[0], g3 = o2.convert(n4.format, n4.colorSpace), E3 = o2.convert(n4.type), S2 = C2(n4.internalFormat, g3, E3, n4.normalized, n4.colorSpace), M2 = true !== n4.isVideoTexture, b3 = void 0 === d3.__version || true === l3, P3 = c3.dataReady;
          let U3, D2 = L2(n4, _3);
          if (W2(e2.TEXTURE_CUBE_MAP, n4), p2) {
            M2 && b3 && i2.texStorage2D(e2.TEXTURE_CUBE_MAP, D2, S2, _3.width, _3.height);
            for (let t5 = 0; t5 < 6; t5++) {
              U3 = h3[t5].mipmaps;
              for (let r4 = 0; r4 < U3.length; r4++) {
                const a3 = U3[r4];
                n4.format !== jt ? null !== g3 ? M2 ? P3 && i2.compressedTexSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, r4, 0, 0, a3.width, a3.height, g3, a3.data) : i2.compressedTexImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, r4, S2, a3.width, a3.height, 0, a3.data) : ai("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : M2 ? P3 && i2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, r4, 0, 0, a3.width, a3.height, g3, E3, a3.data) : i2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, r4, S2, a3.width, a3.height, 0, g3, E3, a3.data);
              }
            }
          } else {
            if (U3 = n4.mipmaps, M2 && b3) {
              U3.length > 0 && D2++;
              const t5 = te2(h3[0]);
              i2.texStorage2D(e2.TEXTURE_CUBE_MAP, D2, S2, t5.width, t5.height);
            }
            for (let t5 = 0; t5 < 6; t5++) if (m3) {
              M2 ? P3 && i2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, 0, 0, h3[t5].width, h3[t5].height, g3, E3, h3[t5].data) : i2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, S2, h3[t5].width, h3[t5].height, 0, g3, E3, h3[t5].data);
              for (let n5 = 0; n5 < U3.length; n5++) {
                const r4 = U3[n5].image[t5].image;
                M2 ? P3 && i2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, 0, 0, r4.width, r4.height, g3, E3, r4.data) : i2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, S2, r4.width, r4.height, 0, g3, E3, r4.data);
              }
            } else {
              M2 ? P3 && i2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, 0, 0, g3, E3, h3[t5]) : i2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, S2, g3, E3, h3[t5]);
              for (let n5 = 0; n5 < U3.length; n5++) {
                const r4 = U3[n5];
                M2 ? P3 && i2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, 0, 0, g3, E3, r4.image[t5]) : i2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, S2, g3, E3, r4.image[t5]);
              }
            }
          }
          R2(n4) && A2(e2.TEXTURE_CUBE_MAP), d3.__version = c3.version, n4.onUpdate && n4.onUpdate(n4);
        }
        t3.__version = n4.version;
      })(s3, t2, n3) : i2.bindTexture(e2.TEXTURE_CUBE_MAP, s3.__webglTexture, e2.TEXTURE0 + n3);
    }, this.rebindTextures = function(t2, n3, i3) {
      const a3 = r2.get(t2);
      void 0 !== n3 && K2(a3.__webglFramebuffer, t2, t2.texture, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, 0), void 0 !== i3 && j2(t2);
    }, this.setupRenderTarget = function(t2) {
      const n3 = t2.texture, a3 = r2.get(t2), l3 = r2.get(n3);
      t2.addEventListener("dispose", w2);
      const c3 = t2.textures, d3 = true === t2.isWebGLCubeRenderTarget, u3 = c3.length > 1;
      if (u3 || (void 0 === l3.__webglTexture && (l3.__webglTexture = e2.createTexture()), l3.__version = n3.version, s2.memory.textures++), d3) {
        a3.__webglFramebuffer = [];
        for (let t3 = 0; t3 < 6; t3++) if (n3.mipmaps && n3.mipmaps.length > 0) {
          a3.__webglFramebuffer[t3] = [];
          for (let i3 = 0; i3 < n3.mipmaps.length; i3++) a3.__webglFramebuffer[t3][i3] = e2.createFramebuffer();
        } else a3.__webglFramebuffer[t3] = e2.createFramebuffer();
      } else {
        if (n3.mipmaps && n3.mipmaps.length > 0) {
          a3.__webglFramebuffer = [];
          for (let t3 = 0; t3 < n3.mipmaps.length; t3++) a3.__webglFramebuffer[t3] = e2.createFramebuffer();
        } else a3.__webglFramebuffer = e2.createFramebuffer();
        if (u3) for (let t3 = 0, n4 = c3.length; t3 < n4; t3++) {
          const n5 = r2.get(c3[t3]);
          void 0 === n5.__webglTexture && (n5.__webglTexture = e2.createTexture(), s2.memory.textures++);
        }
        if (t2.samples > 0 && false === J2(t2)) {
          a3.__webglMultisampledFramebuffer = e2.createFramebuffer(), a3.__webglColorRenderbuffer = [], i2.bindFramebuffer(e2.FRAMEBUFFER, a3.__webglMultisampledFramebuffer);
          for (let n4 = 0; n4 < c3.length; n4++) {
            const i3 = c3[n4];
            a3.__webglColorRenderbuffer[n4] = e2.createRenderbuffer(), e2.bindRenderbuffer(e2.RENDERBUFFER, a3.__webglColorRenderbuffer[n4]);
            const r3 = o2.convert(i3.format, i3.colorSpace), s3 = o2.convert(i3.type), l4 = C2(i3.internalFormat, r3, s3, i3.normalized, i3.colorSpace, true === t2.isXRRenderTarget), d4 = Q2(t2);
            e2.renderbufferStorageMultisample(e2.RENDERBUFFER, d4, l4, t2.width, t2.height), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + n4, e2.RENDERBUFFER, a3.__webglColorRenderbuffer[n4]);
          }
          e2.bindRenderbuffer(e2.RENDERBUFFER, null), t2.depthBuffer && (a3.__webglDepthRenderbuffer = e2.createRenderbuffer(), Y2(a3.__webglDepthRenderbuffer, t2, true)), i2.bindFramebuffer(e2.FRAMEBUFFER, null);
        }
      }
      if (d3) {
        i2.bindTexture(e2.TEXTURE_CUBE_MAP, l3.__webglTexture), W2(e2.TEXTURE_CUBE_MAP, n3);
        for (let i3 = 0; i3 < 6; i3++) if (n3.mipmaps && n3.mipmaps.length > 0) for (let r3 = 0; r3 < n3.mipmaps.length; r3++) K2(a3.__webglFramebuffer[i3][r3], t2, n3, e2.COLOR_ATTACHMENT0, e2.TEXTURE_CUBE_MAP_POSITIVE_X + i3, r3);
        else K2(a3.__webglFramebuffer[i3], t2, n3, e2.COLOR_ATTACHMENT0, e2.TEXTURE_CUBE_MAP_POSITIVE_X + i3, 0);
        R2(n3) && A2(e2.TEXTURE_CUBE_MAP), i2.unbindTexture();
      } else if (u3) {
        for (let n4 = 0, o3 = c3.length; n4 < o3; n4++) {
          const o4 = c3[n4], s3 = r2.get(o4);
          let l4 = e2.TEXTURE_2D;
          (t2.isWebGL3DRenderTarget || t2.isWebGLArrayRenderTarget) && (l4 = t2.isWebGL3DRenderTarget ? e2.TEXTURE_3D : e2.TEXTURE_2D_ARRAY), i2.bindTexture(l4, s3.__webglTexture), W2(l4, o4), K2(a3.__webglFramebuffer, t2, o4, e2.COLOR_ATTACHMENT0 + n4, l4, 0), R2(o4) && A2(l4);
        }
        i2.unbindTexture();
      } else {
        let r3 = e2.TEXTURE_2D;
        if ((t2.isWebGL3DRenderTarget || t2.isWebGLArrayRenderTarget) && (r3 = t2.isWebGL3DRenderTarget ? e2.TEXTURE_3D : e2.TEXTURE_2D_ARRAY), i2.bindTexture(r3, l3.__webglTexture), W2(r3, n3), n3.mipmaps && n3.mipmaps.length > 0) for (let i3 = 0; i3 < n3.mipmaps.length; i3++) K2(a3.__webglFramebuffer[i3], t2, n3, e2.COLOR_ATTACHMENT0, r3, i3);
        else K2(a3.__webglFramebuffer, t2, n3, e2.COLOR_ATTACHMENT0, r3, 0);
        R2(n3) && A2(r3), i2.unbindTexture();
      }
      t2.depthBuffer && j2(t2);
    }, this.updateRenderTargetMipmap = function(e3) {
      const t2 = e3.textures;
      for (let n3 = 0, a3 = t2.length; n3 < a3; n3++) {
        const a4 = t2[n3];
        if (R2(a4)) {
          const t3 = b2(e3), n4 = r2.get(a4).__webglTexture;
          i2.bindTexture(t3, n4), A2(t3), i2.unbindTexture();
        }
      }
    }, this.updateMultisampleRenderTarget = function(t2) {
      if (t2.samples > 0) {
        if (false === J2(t2)) {
          const n3 = t2.textures, a3 = t2.width, o3 = t2.height;
          let s3 = e2.COLOR_BUFFER_BIT;
          const l3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, d3 = r2.get(t2), u3 = n3.length > 1;
          if (u3) for (let t3 = 0; t3 < n3.length; t3++) i2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglMultisampledFramebuffer), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.RENDERBUFFER, null), i2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglFramebuffer), e2.framebufferTexture2D(e2.DRAW_FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.TEXTURE_2D, null, 0);
          i2.bindFramebuffer(e2.READ_FRAMEBUFFER, d3.__webglMultisampledFramebuffer);
          const f2 = t2.texture.mipmaps;
          f2 && f2.length > 0 ? i2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, d3.__webglFramebuffer[0]) : i2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, d3.__webglFramebuffer);
          for (let i3 = 0; i3 < n3.length; i3++) {
            if (t2.resolveDepthBuffer && (t2.depthBuffer && (s3 |= e2.DEPTH_BUFFER_BIT), t2.stencilBuffer && t2.resolveStencilBuffer && (s3 |= e2.STENCIL_BUFFER_BIT)), u3) {
              e2.framebufferRenderbuffer(e2.READ_FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.RENDERBUFFER, d3.__webglColorRenderbuffer[i3]);
              const t3 = r2.get(n3[i3]).__webglTexture;
              e2.framebufferTexture2D(e2.DRAW_FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, t3, 0);
            }
            e2.blitFramebuffer(0, 0, a3, o3, 0, 0, a3, o3, s3, e2.NEAREST), true === c2 && (Z2.length = 0, $2.length = 0, Z2.push(e2.COLOR_ATTACHMENT0 + i3), t2.depthBuffer && false === t2.resolveDepthBuffer && (Z2.push(l3), $2.push(l3), e2.invalidateFramebuffer(e2.DRAW_FRAMEBUFFER, $2)), e2.invalidateFramebuffer(e2.READ_FRAMEBUFFER, Z2));
          }
          if (i2.bindFramebuffer(e2.READ_FRAMEBUFFER, null), i2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, null), u3) for (let t3 = 0; t3 < n3.length; t3++) {
            i2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglMultisampledFramebuffer), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.RENDERBUFFER, d3.__webglColorRenderbuffer[t3]);
            const a4 = r2.get(n3[t3]).__webglTexture;
            i2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglFramebuffer), e2.framebufferTexture2D(e2.DRAW_FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.TEXTURE_2D, a4, 0);
          }
          i2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, d3.__webglMultisampledFramebuffer);
        } else if (t2.depthBuffer && false === t2.resolveDepthBuffer && c2) {
          const n3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT;
          e2.invalidateFramebuffer(e2.DRAW_FRAMEBUFFER, [n3]);
        }
      }
    }, this.setupDepthRenderbuffer = j2, this.setupFrameBufferTexture = K2, this.useMultisampledRTT = J2, this.isReversedDepthBuffer = function() {
      return i2.buffers.depth.getReversed();
    };
  }
  function Ea2(e2, t2) {
    return { convert: function(n2, i2 = ts) {
      let r2;
      const a2 = Ri.getTransfer(i2);
      if (n2 === zt) return e2.UNSIGNED_BYTE;
      if (n2 === Et) return e2.UNSIGNED_SHORT_4_4_4_4;
      if (n2 === Nt) return e2.UNSIGNED_SHORT_5_5_5_1;
      if (n2 === Lt) return e2.UNSIGNED_INT_5_9_9_9_REV;
      if (n2 === Ft) return e2.UNSIGNED_INT_10F_11F_11F_REV;
      if (n2 === Ct) return e2.BYTE;
      if (n2 === It) return e2.SHORT;
      if (n2 === Bt) return e2.UNSIGNED_SHORT;
      if (n2 === kt) return e2.INT;
      if (n2 === Ot) return e2.UNSIGNED_INT;
      if (n2 === Pt) return e2.FLOAT;
      if (n2 === Rt) return e2.HALF_FLOAT;
      if (n2 === Dt) return e2.ALPHA;
      if (n2 === Ut) return e2.RGB;
      if (n2 === jt) return e2.RGBA;
      if (n2 === Wt) return e2.DEPTH_COMPONENT;
      if (n2 === Jt) return e2.DEPTH_STENCIL;
      if (n2 === qt) return e2.RED;
      if (n2 === Ht) return e2.RED_INTEGER;
      if (n2 === Xt) return e2.RG;
      if (n2 === Yt) return e2.RG_INTEGER;
      if (n2 === Gt) return e2.RGBA_INTEGER;
      if (n2 === $t || n2 === Qt || n2 === Kt || n2 === te) if (a2 === rs) {
        if (r2 = t2.get("WEBGL_compressed_texture_s3tc_srgb"), null === r2) return null;
        if (n2 === $t) return r2.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (n2 === Qt) return r2.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (n2 === Kt) return r2.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (n2 === te) return r2.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else {
        if (r2 = t2.get("WEBGL_compressed_texture_s3tc"), null === r2) return null;
        if (n2 === $t) return r2.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n2 === Qt) return r2.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n2 === Kt) return r2.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n2 === te) return r2.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      }
      if (n2 === ee || n2 === se || n2 === ie || n2 === re) {
        if (r2 = t2.get("WEBGL_compressed_texture_pvrtc"), null === r2) return null;
        if (n2 === ee) return r2.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n2 === se) return r2.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n2 === ie) return r2.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n2 === re) return r2.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (n2 === ne || n2 === ae || n2 === oe || n2 === he || n2 === le || n2 === ce || n2 === ue) {
        if (r2 = t2.get("WEBGL_compressed_texture_etc"), null === r2) return null;
        if (n2 === ne || n2 === ae) return a2 === rs ? r2.COMPRESSED_SRGB8_ETC2 : r2.COMPRESSED_RGB8_ETC2;
        if (n2 === oe) return a2 === rs ? r2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r2.COMPRESSED_RGBA8_ETC2_EAC;
        if (n2 === he) return r2.COMPRESSED_R11_EAC;
        if (n2 === le) return r2.COMPRESSED_SIGNED_R11_EAC;
        if (n2 === ce) return r2.COMPRESSED_RG11_EAC;
        if (n2 === ue) return r2.COMPRESSED_SIGNED_RG11_EAC;
      }
      if (n2 === de || n2 === pe || n2 === me || n2 === ye || n2 === ge || n2 === fe || n2 === xe || n2 === be || n2 === ve || n2 === we || n2 === Me || n2 === Se || n2 === _e || n2 === Ae) {
        if (r2 = t2.get("WEBGL_compressed_texture_astc"), null === r2) return null;
        if (n2 === de) return a2 === rs ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r2.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n2 === pe) return a2 === rs ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r2.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n2 === me) return a2 === rs ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r2.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n2 === ye) return a2 === rs ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r2.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n2 === ge) return a2 === rs ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r2.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n2 === fe) return a2 === rs ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r2.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n2 === xe) return a2 === rs ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r2.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n2 === be) return a2 === rs ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r2.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n2 === ve) return a2 === rs ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r2.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n2 === we) return a2 === rs ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r2.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n2 === Me) return a2 === rs ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r2.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n2 === Se) return a2 === rs ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r2.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n2 === _e) return a2 === rs ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r2.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n2 === Ae) return a2 === rs ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r2.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (n2 === Te || n2 === ze || n2 === Ce) {
        if (r2 = t2.get("EXT_texture_compression_bptc"), null === r2) return null;
        if (n2 === Te) return a2 === rs ? r2.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r2.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n2 === ze) return r2.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n2 === Ce) return r2.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      }
      if (n2 === Ie || n2 === Be || n2 === ke || n2 === Oe) {
        if (r2 = t2.get("EXT_texture_compression_rgtc"), null === r2) return null;
        if (n2 === Ie) return r2.COMPRESSED_RED_RGTC1_EXT;
        if (n2 === Be) return r2.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n2 === ke) return r2.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n2 === Oe) return r2.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      }
      return n2 === Vt ? e2.UNSIGNED_INT_24_8 : void 0 !== e2[n2] ? e2[n2] : null;
    } };
  }
  var Sa2 = class {
    constructor() {
      this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
    }
    init(e2, t2) {
      if (null === this.texture) {
        const n2 = new mh(e2.texture);
        e2.depthNear === t2.depthNear && e2.depthFar === t2.depthFar || (this.depthNear = e2.depthNear, this.depthFar = e2.depthFar), this.texture = n2;
      }
    }
    getMesh(e2) {
      if (null !== this.texture && null === this.mesh) {
        const t2 = e2.cameras[0].viewport, n2 = new Zl({ vertexShader: "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", fragmentShader: "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t2.z }, depthHeight: { value: t2.w } } });
        this.mesh = new Ra(new Ol(20, 20), n2);
      }
      return this.mesh;
    }
    reset() {
      this.texture = null, this.mesh = null;
    }
    getDepthTexture() {
      return this.texture;
    }
  };
  var Ma2 = class extends di {
    constructor(e2, n2) {
      super();
      const r2 = this;
      let a2 = null, o2 = 1, s2 = null, l2 = "local-floor", c2 = 1, d2 = null, u2 = null, f2 = null, p2 = null, m2 = null, h2 = null;
      const _2 = "undefined" != typeof XRWebGLBinding, g2 = new Sa2(), E2 = {}, M2 = n2.getContextAttributes();
      let x2 = null, R2 = null;
      const A2 = [], b2 = [], C2 = new _i();
      let L2 = null;
      const U2 = new eu();
      U2.viewport = new qi();
      const D2 = new eu();
      D2.viewport = new qi();
      const w2 = [U2, D2], N2 = new Ru();
      let y2 = null, O2 = null;
      function F2(e3) {
        const t2 = b2.indexOf(e3.inputSource);
        if (-1 === t2) return;
        const n3 = A2[t2];
        void 0 !== n3 && (n3.update(e3.inputSource, e3.frame, d2 || s2), n3.dispatchEvent({ type: e3.type, data: e3.inputSource }));
      }
      function B2() {
        a2.removeEventListener("select", F2), a2.removeEventListener("selectstart", F2), a2.removeEventListener("selectend", F2), a2.removeEventListener("squeeze", F2), a2.removeEventListener("squeezestart", F2), a2.removeEventListener("squeezeend", F2), a2.removeEventListener("end", B2), a2.removeEventListener("inputsourceschange", G2);
        for (let e3 = 0; e3 < A2.length; e3++) {
          const t2 = b2[e3];
          null !== t2 && (b2[e3] = null, A2[e3].disconnect(t2));
        }
        y2 = null, O2 = null, g2.reset();
        for (const e3 in E2) delete E2[e3];
        e2.setRenderTarget(x2), m2 = null, p2 = null, f2 = null, a2 = null, R2 = null, k2.stop(), r2.isPresenting = false, e2.setPixelRatio(L2), e2.setSize(C2.width, C2.height, false), r2.dispatchEvent({ type: "sessionend" });
      }
      function G2(e3) {
        for (let t2 = 0; t2 < e3.removed.length; t2++) {
          const n3 = e3.removed[t2], i2 = b2.indexOf(n3);
          i2 >= 0 && (b2[i2] = null, A2[i2].disconnect(n3));
        }
        for (let t2 = 0; t2 < e3.added.length; t2++) {
          const n3 = e3.added[t2];
          let i2 = b2.indexOf(n3);
          if (-1 === i2) {
            for (let e4 = 0; e4 < A2.length; e4++) {
              if (e4 >= b2.length) {
                b2.push(n3), i2 = e4;
                break;
              }
              if (null === b2[e4]) {
                b2[e4] = n3, i2 = e4;
                break;
              }
            }
            if (-1 === i2) break;
          }
          const r3 = A2[i2];
          r3 && r3.connect(n3);
        }
      }
      this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(e3) {
        let t2 = A2[e3];
        return void 0 === t2 && (t2 = new Cr(), A2[e3] = t2), t2.getTargetRaySpace();
      }, this.getControllerGrip = function(e3) {
        let t2 = A2[e3];
        return void 0 === t2 && (t2 = new Cr(), A2[e3] = t2), t2.getGripSpace();
      }, this.getHand = function(e3) {
        let t2 = A2[e3];
        return void 0 === t2 && (t2 = new Cr(), A2[e3] = t2), t2.getHandSpace();
      }, this.setFramebufferScaleFactor = function(e3) {
        o2 = e3, true === r2.isPresenting && ai("WebXRManager: Cannot change framebuffer scale while presenting.");
      }, this.setReferenceSpaceType = function(e3) {
        l2 = e3, true === r2.isPresenting && ai("WebXRManager: Cannot change reference space type while presenting.");
      }, this.getReferenceSpace = function() {
        return d2 || s2;
      }, this.setReferenceSpace = function(e3) {
        d2 = e3;
      }, this.getBaseLayer = function() {
        return null !== p2 ? p2 : m2;
      }, this.getBinding = function() {
        return null === f2 && _2 && (f2 = new XRWebGLBinding(a2, n2)), f2;
      }, this.getFrame = function() {
        return h2;
      }, this.getSession = function() {
        return a2;
      }, this.setSession = async function(t2) {
        if (a2 = t2, null !== a2) {
          x2 = e2.getRenderTarget(), a2.addEventListener("select", F2), a2.addEventListener("selectstart", F2), a2.addEventListener("selectend", F2), a2.addEventListener("squeeze", F2), a2.addEventListener("squeezestart", F2), a2.addEventListener("squeezeend", F2), a2.addEventListener("end", B2), a2.addEventListener("inputsourceschange", G2), true !== M2.xrCompatible && await n2.makeXRCompatible(), L2 = e2.getPixelRatio(), e2.getSize(C2);
          if (_2 && "createProjectionLayer" in XRWebGLBinding.prototype) {
            let t3 = null, i2 = null, r3 = null;
            M2.depth && (r3 = M2.stencil ? n2.DEPTH24_STENCIL8 : n2.DEPTH_COMPONENT24, t3 = M2.stencil ? Jt : Wt, i2 = M2.stencil ? Vt : Ot);
            const s3 = { colorFormat: n2.RGBA8, depthFormat: r3, scaleFactor: o2 };
            f2 = this.getBinding(), p2 = f2.createProjectionLayer(s3), a2.updateRenderState({ layers: [p2] }), e2.setPixelRatio(1), e2.setSize(p2.textureWidth, p2.textureHeight, false), R2 = new Xi(p2.textureWidth, p2.textureHeight, { format: jt, type: zt, depthTexture: new dh(p2.textureWidth, p2.textureHeight, i2, void 0, void 0, void 0, void 0, void 0, void 0, t3), stencilBuffer: M2.stencil, colorSpace: e2.outputColorSpace, samples: M2.antialias ? 4 : 0, resolveDepthBuffer: false === p2.ignoreDepthValues, resolveStencilBuffer: false === p2.ignoreDepthValues });
          } else {
            const t3 = { antialias: M2.antialias, alpha: true, depth: M2.depth, stencil: M2.stencil, framebufferScaleFactor: o2 };
            m2 = new XRWebGLLayer(a2, n2, t3), a2.updateRenderState({ baseLayer: m2 }), e2.setPixelRatio(1), e2.setSize(m2.framebufferWidth, m2.framebufferHeight, false), R2 = new Xi(m2.framebufferWidth, m2.framebufferHeight, { format: jt, type: zt, colorSpace: e2.outputColorSpace, stencilBuffer: M2.stencil, resolveDepthBuffer: false === m2.ignoreDepthValues, resolveStencilBuffer: false === m2.ignoreDepthValues });
          }
          R2.isXRRenderTarget = true, this.setFoveation(c2), d2 = null, s2 = await a2.requestReferenceSpace(l2), k2.setContext(a2), k2.start(), r2.isPresenting = true, r2.dispatchEvent({ type: "sessionstart" });
        }
      }, this.getEnvironmentBlendMode = function() {
        if (null !== a2) return a2.environmentBlendMode;
      }, this.getDepthTexture = function() {
        return g2.getDepthTexture();
      };
      const H2 = new Ti(), V2 = new Ti();
      function W2(e3, t2) {
        null === t2 ? e3.matrixWorld.copy(e3.matrix) : e3.matrixWorld.multiplyMatrices(t2.matrixWorld, e3.matrix), e3.matrixWorldInverse.copy(e3.matrixWorld).invert();
      }
      this.updateCamera = function(e3) {
        if (null === a2) return;
        let t2 = e3.near, n3 = e3.far;
        null !== g2.texture && (g2.depthNear > 0 && (t2 = g2.depthNear), g2.depthFar > 0 && (n3 = g2.depthFar)), N2.near = D2.near = U2.near = t2, N2.far = D2.far = U2.far = n3, y2 === N2.near && O2 === N2.far || (a2.updateRenderState({ depthNear: N2.near, depthFar: N2.far }), y2 = N2.near, O2 = N2.far), N2.layers.mask = 6 | e3.layers.mask, U2.layers.mask = -5 & N2.layers.mask, D2.layers.mask = -3 & N2.layers.mask;
        const i2 = e3.parent, r3 = N2.cameras;
        W2(N2, i2);
        for (let e4 = 0; e4 < r3.length; e4++) W2(r3[e4], i2);
        2 === r3.length ? (function(e4, t3, n4) {
          H2.setFromMatrixPosition(t3.matrixWorld), V2.setFromMatrixPosition(n4.matrixWorld);
          const i3 = H2.distanceTo(V2), r4 = t3.projectionMatrix.elements, a3 = n4.projectionMatrix.elements, o3 = r4[14] / (r4[10] - 1), s3 = r4[14] / (r4[10] + 1), l3 = (r4[9] + 1) / r4[5], c3 = (r4[9] - 1) / r4[5], d3 = (r4[8] - 1) / r4[0], u3 = (a3[8] + 1) / a3[0], f3 = o3 * d3, p3 = o3 * u3, m3 = i3 / (-d3 + u3), h3 = m3 * -d3;
          if (t3.matrixWorld.decompose(e4.position, e4.quaternion, e4.scale), e4.translateX(h3), e4.translateZ(m3), e4.matrixWorld.compose(e4.position, e4.quaternion, e4.scale), e4.matrixWorldInverse.copy(e4.matrixWorld).invert(), -1 === r4[10]) e4.projectionMatrix.copy(t3.projectionMatrix), e4.projectionMatrixInverse.copy(t3.projectionMatrixInverse);
          else {
            const t4 = o3 + m3, n5 = s3 + m3, r5 = f3 - h3, a4 = p3 + (i3 - h3), d4 = l3 * s3 / n5 * t4, u4 = c3 * s3 / n5 * t4;
            e4.projectionMatrix.makePerspective(r5, a4, d4, u4, t4, n5), e4.projectionMatrixInverse.copy(e4.projectionMatrix).invert();
          }
        })(N2, U2, D2) : N2.projectionMatrix.copy(U2.projectionMatrix), (function(e4, t3, n4) {
          null === n4 ? e4.matrix.copy(t3.matrixWorld) : (e4.matrix.copy(n4.matrixWorld), e4.matrix.invert(), e4.matrix.multiply(t3.matrixWorld));
          e4.matrix.decompose(e4.position, e4.quaternion, e4.scale), e4.updateMatrixWorld(true), e4.projectionMatrix.copy(t3.projectionMatrix), e4.projectionMatrixInverse.copy(t3.projectionMatrixInverse), e4.isPerspectiveCamera && (e4.fov = 2 * gi * Math.atan(1 / e4.projectionMatrix.elements[5]), e4.zoom = 1);
        })(e3, N2, i2);
      }, this.getCamera = function() {
        return N2;
      }, this.getFoveation = function() {
        if (null !== p2 || null !== m2) return c2;
      }, this.setFoveation = function(e3) {
        c2 = e3, null !== p2 && (p2.fixedFoveation = e3), null !== m2 && void 0 !== m2.fixedFoveation && (m2.fixedFoveation = e3);
      }, this.hasDepthSensing = function() {
        return null !== g2.texture;
      }, this.getDepthSensingMesh = function() {
        return g2.getMesh(N2);
      }, this.getCameraTexture = function(e3) {
        return E2[e3];
      };
      let z2 = null;
      const k2 = new On2();
      k2.setAnimationLoop(function(t2, n3) {
        if (u2 = n3.getViewerPose(d2 || s2), h2 = n3, null !== u2) {
          const t3 = u2.views;
          null !== m2 && (e2.setRenderTargetFramebuffer(R2, m2.framebuffer), e2.setRenderTarget(R2));
          let n4 = false;
          t3.length !== N2.cameras.length && (N2.cameras.length = 0, n4 = true);
          for (let i3 = 0; i3 < t3.length; i3++) {
            const r3 = t3[i3];
            let a3 = null;
            if (null !== m2) a3 = m2.getViewport(r3);
            else {
              const t4 = f2.getViewSubImage(p2, r3);
              a3 = t4.viewport, 0 === i3 && (e2.setRenderTargetTextures(R2, t4.colorTexture, t4.depthStencilTexture), e2.setRenderTarget(R2));
            }
            let o3 = w2[i3];
            void 0 === o3 && (o3 = new eu(), o3.layers.enable(i3), o3.viewport = new qi(), w2[i3] = o3), o3.matrix.fromArray(r3.transform.matrix), o3.matrix.decompose(o3.position, o3.quaternion, o3.scale), o3.projectionMatrix.fromArray(r3.projectionMatrix), o3.projectionMatrixInverse.copy(o3.projectionMatrix).invert(), o3.viewport.set(a3.x, a3.y, a3.width, a3.height), 0 === i3 && (N2.matrix.copy(o3.matrix), N2.matrix.decompose(N2.position, N2.quaternion, N2.scale)), true === n4 && N2.cameras.push(o3);
          }
          const i2 = a2.enabledFeatures;
          if (i2 && i2.includes("depth-sensing") && "gpu-optimized" == a2.depthUsage && _2) {
            f2 = r2.getBinding();
            const e3 = f2.getDepthInformation(t3[0]);
            e3 && e3.isValid && e3.texture && g2.init(e3, a2.renderState);
          }
          if (i2 && i2.includes("camera-access") && _2) {
            e2.state.unbindTexture(), f2 = r2.getBinding();
            for (let e3 = 0; e3 < t3.length; e3++) {
              const n5 = t3[e3].camera;
              if (n5) {
                let e4 = E2[n5];
                e4 || (e4 = new mh(), E2[n5] = e4);
                const t4 = f2.getCameraImage(n5);
                e4.sourceTexture = t4;
              }
            }
          }
        }
        for (let e3 = 0; e3 < A2.length; e3++) {
          const t3 = b2[e3], i2 = A2[e3];
          null !== t3 && void 0 !== i2 && i2.update(t3, n3, d2 || s2);
        }
        z2 && z2(t2, n3), n3.detectedPlanes && r2.dispatchEvent({ type: "planesdetected", data: n3 }), h2 = null;
      }), this.setAnimationLoop = function(e3) {
        z2 = e3;
      }, this.dispose = function() {
      };
    }
  };
  var Ta2 = new Qi();
  var xa2 = new Ii();
  function Ra2(e2, t2) {
    function n2(e3, t3) {
      true === e3.matrixAutoUpdate && e3.updateMatrix(), t3.value.copy(e3.matrix);
    }
    function i2(e3, i3) {
      e3.opacity.value = i3.opacity, i3.color && e3.diffuse.value.copy(i3.color), i3.emissive && e3.emissive.value.copy(i3.emissive).multiplyScalar(i3.emissiveIntensity), i3.map && (e3.map.value = i3.map, n2(i3.map, e3.mapTransform)), i3.alphaMap && (e3.alphaMap.value = i3.alphaMap, n2(i3.alphaMap, e3.alphaMapTransform)), i3.bumpMap && (e3.bumpMap.value = i3.bumpMap, n2(i3.bumpMap, e3.bumpMapTransform), e3.bumpScale.value = i3.bumpScale, i3.side === d && (e3.bumpScale.value *= -1)), i3.normalMap && (e3.normalMap.value = i3.normalMap, n2(i3.normalMap, e3.normalMapTransform), e3.normalScale.value.copy(i3.normalScale), i3.side === d && e3.normalScale.value.negate()), i3.displacementMap && (e3.displacementMap.value = i3.displacementMap, n2(i3.displacementMap, e3.displacementMapTransform), e3.displacementScale.value = i3.displacementScale, e3.displacementBias.value = i3.displacementBias), i3.emissiveMap && (e3.emissiveMap.value = i3.emissiveMap, n2(i3.emissiveMap, e3.emissiveMapTransform)), i3.specularMap && (e3.specularMap.value = i3.specularMap, n2(i3.specularMap, e3.specularMapTransform)), i3.alphaTest > 0 && (e3.alphaTest.value = i3.alphaTest);
      const r2 = t2.get(i3), a2 = r2.envMap, o2 = r2.envMapRotation;
      a2 && (e3.envMap.value = a2, e3.envMapRotation.value.setFromMatrix4(Ta2.makeRotationFromEuler(o2)).transpose(), a2.isCubeTexture && false === a2.isRenderTargetTexture && e3.envMapRotation.value.premultiply(xa2), e3.reflectivity.value = i3.reflectivity, e3.ior.value = i3.ior, e3.refractionRatio.value = i3.refractionRatio), i3.lightMap && (e3.lightMap.value = i3.lightMap, e3.lightMapIntensity.value = i3.lightMapIntensity, n2(i3.lightMap, e3.lightMapTransform)), i3.aoMap && (e3.aoMap.value = i3.aoMap, e3.aoMapIntensity.value = i3.aoMapIntensity, n2(i3.aoMap, e3.aoMapTransform));
    }
    return { refreshFogUniforms: function(t3, n3) {
      n3.color.getRGB(t3.fogColor.value, Xl(e2)), n3.isFog ? (t3.fogNear.value = n3.near, t3.fogFar.value = n3.far) : n3.isFogExp2 && (t3.fogDensity.value = n3.density);
    }, refreshMaterialUniforms: function(e3, r2, a2, o2, s2) {
      r2.isNodeMaterial ? r2.uniformsNeedUpdate = false : r2.isMeshBasicMaterial ? i2(e3, r2) : r2.isMeshLambertMaterial ? (i2(e3, r2), r2.envMap && (e3.envMapIntensity.value = r2.envMapIntensity)) : r2.isMeshToonMaterial ? (i2(e3, r2), (function(e4, t3) {
        t3.gradientMap && (e4.gradientMap.value = t3.gradientMap);
      })(e3, r2)) : r2.isMeshPhongMaterial ? (i2(e3, r2), (function(e4, t3) {
        e4.specular.value.copy(t3.specular), e4.shininess.value = Math.max(t3.shininess, 1e-4);
      })(e3, r2), r2.envMap && (e3.envMapIntensity.value = r2.envMapIntensity)) : r2.isMeshStandardMaterial ? (i2(e3, r2), (function(e4, t3) {
        e4.metalness.value = t3.metalness, t3.metalnessMap && (e4.metalnessMap.value = t3.metalnessMap, n2(t3.metalnessMap, e4.metalnessMapTransform));
        e4.roughness.value = t3.roughness, t3.roughnessMap && (e4.roughnessMap.value = t3.roughnessMap, n2(t3.roughnessMap, e4.roughnessMapTransform));
        t3.envMap && (e4.envMapIntensity.value = t3.envMapIntensity);
      })(e3, r2), r2.isMeshPhysicalMaterial && (function(e4, t3, i3) {
        e4.ior.value = t3.ior, t3.sheen > 0 && (e4.sheenColor.value.copy(t3.sheenColor).multiplyScalar(t3.sheen), e4.sheenRoughness.value = t3.sheenRoughness, t3.sheenColorMap && (e4.sheenColorMap.value = t3.sheenColorMap, n2(t3.sheenColorMap, e4.sheenColorMapTransform)), t3.sheenRoughnessMap && (e4.sheenRoughnessMap.value = t3.sheenRoughnessMap, n2(t3.sheenRoughnessMap, e4.sheenRoughnessMapTransform)));
        t3.clearcoat > 0 && (e4.clearcoat.value = t3.clearcoat, e4.clearcoatRoughness.value = t3.clearcoatRoughness, t3.clearcoatMap && (e4.clearcoatMap.value = t3.clearcoatMap, n2(t3.clearcoatMap, e4.clearcoatMapTransform)), t3.clearcoatRoughnessMap && (e4.clearcoatRoughnessMap.value = t3.clearcoatRoughnessMap, n2(t3.clearcoatRoughnessMap, e4.clearcoatRoughnessMapTransform)), t3.clearcoatNormalMap && (e4.clearcoatNormalMap.value = t3.clearcoatNormalMap, n2(t3.clearcoatNormalMap, e4.clearcoatNormalMapTransform), e4.clearcoatNormalScale.value.copy(t3.clearcoatNormalScale), t3.side === d && e4.clearcoatNormalScale.value.negate()));
        t3.dispersion > 0 && (e4.dispersion.value = t3.dispersion);
        t3.iridescence > 0 && (e4.iridescence.value = t3.iridescence, e4.iridescenceIOR.value = t3.iridescenceIOR, e4.iridescenceThicknessMinimum.value = t3.iridescenceThicknessRange[0], e4.iridescenceThicknessMaximum.value = t3.iridescenceThicknessRange[1], t3.iridescenceMap && (e4.iridescenceMap.value = t3.iridescenceMap, n2(t3.iridescenceMap, e4.iridescenceMapTransform)), t3.iridescenceThicknessMap && (e4.iridescenceThicknessMap.value = t3.iridescenceThicknessMap, n2(t3.iridescenceThicknessMap, e4.iridescenceThicknessMapTransform)));
        t3.transmission > 0 && (e4.transmission.value = t3.transmission, e4.transmissionSamplerMap.value = i3.texture, e4.transmissionSamplerSize.value.set(i3.width, i3.height), t3.transmissionMap && (e4.transmissionMap.value = t3.transmissionMap, n2(t3.transmissionMap, e4.transmissionMapTransform)), e4.thickness.value = t3.thickness, t3.thicknessMap && (e4.thicknessMap.value = t3.thicknessMap, n2(t3.thicknessMap, e4.thicknessMapTransform)), e4.attenuationDistance.value = t3.attenuationDistance, e4.attenuationColor.value.copy(t3.attenuationColor));
        t3.anisotropy > 0 && (e4.anisotropyVector.value.set(t3.anisotropy * Math.cos(t3.anisotropyRotation), t3.anisotropy * Math.sin(t3.anisotropyRotation)), t3.anisotropyMap && (e4.anisotropyMap.value = t3.anisotropyMap, n2(t3.anisotropyMap, e4.anisotropyMapTransform)));
        e4.specularIntensity.value = t3.specularIntensity, e4.specularColor.value.copy(t3.specularColor), t3.specularColorMap && (e4.specularColorMap.value = t3.specularColorMap, n2(t3.specularColorMap, e4.specularColorMapTransform));
        t3.specularIntensityMap && (e4.specularIntensityMap.value = t3.specularIntensityMap, n2(t3.specularIntensityMap, e4.specularIntensityMapTransform));
      })(e3, r2, s2)) : r2.isMeshMatcapMaterial ? (i2(e3, r2), (function(e4, t3) {
        t3.matcap && (e4.matcap.value = t3.matcap);
      })(e3, r2)) : r2.isMeshDepthMaterial ? i2(e3, r2) : r2.isMeshDistanceMaterial ? (i2(e3, r2), (function(e4, n3) {
        const i3 = t2.get(n3).light;
        e4.referencePosition.value.setFromMatrixPosition(i3.matrixWorld), e4.nearDistance.value = i3.shadow.camera.near, e4.farDistance.value = i3.shadow.camera.far;
      })(e3, r2)) : r2.isMeshNormalMaterial ? i2(e3, r2) : r2.isLineBasicMaterial ? ((function(e4, t3) {
        e4.diffuse.value.copy(t3.color), e4.opacity.value = t3.opacity, t3.map && (e4.map.value = t3.map, n2(t3.map, e4.mapTransform));
      })(e3, r2), r2.isLineDashedMaterial && (function(e4, t3) {
        e4.dashSize.value = t3.dashSize, e4.totalSize.value = t3.dashSize + t3.gapSize, e4.scale.value = t3.scale;
      })(e3, r2)) : r2.isPointsMaterial ? (function(e4, t3, i3, r3) {
        e4.diffuse.value.copy(t3.color), e4.opacity.value = t3.opacity, e4.size.value = t3.size * i3, e4.scale.value = 0.5 * r3, t3.map && (e4.map.value = t3.map, n2(t3.map, e4.uvTransform));
        t3.alphaMap && (e4.alphaMap.value = t3.alphaMap, n2(t3.alphaMap, e4.alphaMapTransform));
        t3.alphaTest > 0 && (e4.alphaTest.value = t3.alphaTest);
      })(e3, r2, a2, o2) : r2.isSpriteMaterial ? (function(e4, t3) {
        e4.diffuse.value.copy(t3.color), e4.opacity.value = t3.opacity, e4.rotation.value = t3.rotation, t3.map && (e4.map.value = t3.map, n2(t3.map, e4.mapTransform));
        t3.alphaMap && (e4.alphaMap.value = t3.alphaMap, n2(t3.alphaMap, e4.alphaMapTransform));
        t3.alphaTest > 0 && (e4.alphaTest.value = t3.alphaTest);
      })(e3, r2) : r2.isShadowMaterial ? (e3.color.value.copy(r2.color), e3.opacity.value = r2.opacity) : r2.isShaderMaterial && (r2.uniformsNeedUpdate = false);
    } };
  }
  function Aa2(e2, t2, n2, i2) {
    let r2 = {}, a2 = {}, o2 = [];
    const s2 = e2.getParameter(e2.MAX_UNIFORM_BUFFER_BINDINGS);
    function l2(t3, n3, i3, r3) {
      if (true === (function(e3, t4, n4, i4) {
        const r4 = e3.value, a3 = t4 + "_" + n4;
        if (void 0 === i4[a3]) return "number" == typeof r4 || "boolean" == typeof r4 ? i4[a3] = r4 : ArrayBuffer.isView(r4) ? i4[a3] = r4.slice() : i4[a3] = r4.clone(), true;
        {
          const e4 = i4[a3];
          if ("number" == typeof r4 || "boolean" == typeof r4) {
            if (e4 !== r4) return i4[a3] = r4, true;
          } else {
            if (ArrayBuffer.isView(r4)) return true;
            if (false === e4.equals(r4)) return e4.copy(r4), true;
          }
        }
        return false;
      })(t3, n3, i3, r3)) {
        const n4 = t3.__offset, i4 = t3.value;
        if (Array.isArray(i4)) {
          let e3 = 0;
          for (let n5 = 0; n5 < i4.length; n5++) {
            const r4 = i4[n5], a3 = d2(r4);
            c2(r4, t3.__data, e3), "number" == typeof r4 || "boolean" == typeof r4 || r4.isMatrix3 || ArrayBuffer.isView(r4) || (e3 += a3.storage / Float32Array.BYTES_PER_ELEMENT);
          }
        } else c2(i4, t3.__data, 0);
        e2.bufferSubData(e2.UNIFORM_BUFFER, n4, t3.__data);
      }
    }
    function c2(e3, t3, n3) {
      "number" == typeof e3 || "boolean" == typeof e3 ? t3[0] = e3 : e3.isMatrix3 ? (t3[0] = e3.elements[0], t3[1] = e3.elements[1], t3[2] = e3.elements[2], t3[3] = 0, t3[4] = e3.elements[3], t3[5] = e3.elements[4], t3[6] = e3.elements[5], t3[7] = 0, t3[8] = e3.elements[6], t3[9] = e3.elements[7], t3[10] = e3.elements[8], t3[11] = 0) : ArrayBuffer.isView(e3) ? t3.set(new e3.constructor(e3.buffer, e3.byteOffset, t3.length)) : e3.toArray(t3, n3);
    }
    function d2(e3) {
      const t3 = { boundary: 0, storage: 0 };
      return "number" == typeof e3 || "boolean" == typeof e3 ? (t3.boundary = 4, t3.storage = 4) : e3.isVector2 ? (t3.boundary = 8, t3.storage = 8) : e3.isVector3 || e3.isColor ? (t3.boundary = 16, t3.storage = 12) : e3.isVector4 ? (t3.boundary = 16, t3.storage = 16) : e3.isMatrix3 ? (t3.boundary = 48, t3.storage = 48) : e3.isMatrix4 ? (t3.boundary = 64, t3.storage = 64) : e3.isTexture ? ai("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(e3) ? (t3.boundary = 16, t3.storage = e3.byteLength) : ai("WebGLRenderer: Unsupported uniform value type.", e3), t3;
    }
    function u2(t3) {
      const n3 = t3.target;
      n3.removeEventListener("dispose", u2);
      const i3 = o2.indexOf(n3.__bindingPointIndex);
      o2.splice(i3, 1), e2.deleteBuffer(r2[n3.id]), delete r2[n3.id], delete a2[n3.id];
    }
    return { bind: function(e3, t3) {
      const n3 = t3.program;
      i2.uniformBlockBinding(e3, n3);
    }, update: function(n3, c3) {
      let f2 = r2[n3.id];
      void 0 === f2 && (!(function(e3) {
        const t3 = e3.uniforms;
        let n4 = 0;
        const i3 = 16;
        for (let e4 = 0, r4 = t3.length; e4 < r4; e4++) {
          const r5 = Array.isArray(t3[e4]) ? t3[e4] : [t3[e4]];
          for (let e5 = 0, t4 = r5.length; e5 < t4; e5++) {
            const t5 = r5[e5], a3 = Array.isArray(t5.value) ? t5.value : [t5.value];
            for (let e6 = 0, r6 = a3.length; e6 < r6; e6++) {
              const r7 = d2(a3[e6]), o3 = n4 % i3, s3 = o3 % r7.boundary, l3 = o3 + s3;
              n4 += s3, 0 !== l3 && i3 - l3 < r7.storage && (n4 += i3 - l3), t5.__data = new Float32Array(r7.storage / Float32Array.BYTES_PER_ELEMENT), t5.__offset = n4, n4 += r7.storage;
            }
          }
        }
        const r3 = n4 % i3;
        r3 > 0 && (n4 += i3 - r3);
        e3.__size = n4, e3.__cache = {};
      })(n3), f2 = (function(t3) {
        const n4 = (function() {
          for (let e3 = 0; e3 < s2; e3++) if (-1 === o2.indexOf(e3)) return o2.push(e3), e3;
          return oi("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
        })();
        t3.__bindingPointIndex = n4;
        const i3 = e2.createBuffer(), r3 = t3.__size, a3 = t3.usage;
        return e2.bindBuffer(e2.UNIFORM_BUFFER, i3), e2.bufferData(e2.UNIFORM_BUFFER, r3, a3), e2.bindBuffer(e2.UNIFORM_BUFFER, null), e2.bindBufferBase(e2.UNIFORM_BUFFER, n4, i3), i3;
      })(n3), r2[n3.id] = f2, n3.addEventListener("dispose", u2));
      const p2 = c3.program;
      i2.updateUBOMapping(n3, p2);
      const m2 = t2.render.frame;
      a2[n3.id] !== m2 && (!(function(t3) {
        const n4 = r2[t3.id], i3 = t3.uniforms, a3 = t3.__cache;
        e2.bindBuffer(e2.UNIFORM_BUFFER, n4);
        for (let e3 = 0, t4 = i3.length; e3 < t4; e3++) {
          const t5 = i3[e3];
          if (Array.isArray(t5)) for (let n5 = 0, i4 = t5.length; n5 < i4; n5++) l2(t5[n5], e3, n5, a3);
          else l2(t5, e3, 0, a3);
        }
        e2.bindBuffer(e2.UNIFORM_BUFFER, null);
      })(n3), a2[n3.id] = m2);
    }, dispose: function() {
      for (const t3 in r2) e2.deleteBuffer(r2[t3]);
      o2 = [], r2 = {}, a2 = {};
    } };
  }
  xa2.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
  var ba2 = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183]);
  var Ca2 = null;
  var Pa2 = class {
    constructor(e2 = {}) {
      const { canvas: t2 = Ks(), context: r2 = null, depth: a2 = true, stencil: o2 = false, alpha: s2 = false, antialias: l2 = false, premultipliedAlpha: d2 = true, preserveDrawingBuffer: p2 = false, powerPreference: m2 = "default", failIfMajorPerformanceCaveat: _2 = false, reversedDepthBuffer: g2 = false, outputBufferType: M2 = zt } = e2;
      let T2;
      if (this.isWebGLRenderer = true, null !== r2) {
        if ("undefined" != typeof WebGLRenderingContext && r2 instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
        T2 = r2.getContextAttributes().alpha;
      } else T2 = s2;
      const x2 = M2, R2 = /* @__PURE__ */ new Set([Gt, Yt, Ht]), A2 = /* @__PURE__ */ new Set([zt, Ot, Bt, Vt, Et, Nt]), b2 = new Uint32Array(4), C2 = new Int32Array(4), P2 = new Ti();
      let U2 = null, w2 = null;
      const N2 = [], y2 = [];
      let F2 = null;
      this.domElement = t2, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = Q, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
      const G2 = this;
      let H2 = false, V2 = null, W2 = null, z2 = null, k2 = null;
      this._outputColorSpace = es;
      let X2 = 0, Y2 = 0, q2 = null, j2 = -1, Z2 = null;
      const $2 = new qi(), Q2 = new qi();
      let J2 = null;
      const ee2 = new Pr(0);
      let te2 = 0, ne2 = t2.width, ie2 = t2.height, re2 = 1, ae2 = null, oe2 = null;
      const se2 = new qi(0, 0, ne2, ie2), le2 = new qi(0, 0, ne2, ie2);
      let ce2 = false;
      const de2 = new mo();
      let ue2 = false, fe2 = false;
      const pe2 = new Qi(), me2 = new Ti(), _e2 = new qi(), ge2 = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
      let ve2 = false;
      function Ee2() {
        return null === q2 ? re2 : 1;
      }
      let Me2, Te2, xe2, Re2, Ae2, be2, Ce2, Pe2, De2, we2, Ie2, Ne2, ye2, Oe2, Fe2, Be2, Ge2, He2, Ve2, We2, ze2, ke2, Xe2, Ke2 = r2;
      function Ye2(e3, n2) {
        return t2.getContext(e3, n2);
      }
      try {
        const e3 = { alpha: true, depth: a2, stencil: o2, antialias: l2, premultipliedAlpha: d2, preserveDrawingBuffer: p2, powerPreference: m2, failIfMajorPerformanceCaveat: _2 };
        if ("setAttribute" in t2 && t2.setAttribute("data-engine", `three.js r${t}`), t2.addEventListener("webglcontextlost", Ze2, false), t2.addEventListener("webglcontextrestored", $e2, false), t2.addEventListener("webglcontextcreationerror", Qe2, false), null === Ke2) {
          const t3 = "webgl2";
          if (Ke2 = Ye2(t3, e3), null === Ke2) throw Ye2(t3) ? new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
        }
      } catch (e3) {
        throw oi("WebGLRenderer: " + e3.message), e3;
      }
      function qe2() {
        Me2 = new fi2(Ke2), Me2.init(), ze2 = new Ea2(Ke2, Me2), Te2 = new Yn2(Ke2, Me2, e2, ze2), xe2 = new ga2(Ke2, Me2), Te2.reversedDepthBuffer && g2 && xe2.buffers.depth.setReversed(true), W2 = Ke2.createFramebuffer(), z2 = Ke2.createFramebuffer(), k2 = Ke2.createFramebuffer(), Re2 = new hi2(Ke2), Ae2 = new ea2(), be2 = new va2(Ke2, Me2, xe2, Ae2, Te2, ze2, Re2), Ce2 = new ui2(G2), Pe2 = new Fn2(Ke2), ke2 = new Xn2(Ke2, Pe2), De2 = new pi2(Ke2, Pe2, Re2, ke2), we2 = new gi2(Ke2, De2, Pe2, ke2, Re2), He2 = new _i2(Ke2, Te2, be2), Fe2 = new qn2(Ae2), Ie2 = new Jr2(G2, Ce2, Me2, Te2, ke2, Fe2), Ne2 = new Ra2(G2, Ae2), ye2 = new ra2(), Oe2 = new da2(Me2), Ge2 = new kn2(G2, Ce2, xe2, we2, T2, d2), Be2 = new _a2(G2, we2, Te2), Xe2 = new Aa2(Ke2, Re2, Te2, xe2), Ve2 = new Kn2(Ke2, Me2, Re2), We2 = new mi(Ke2, Me2, Re2), Re2.programs = Ie2.programs, G2.capabilities = Te2, G2.extensions = Me2, G2.properties = Ae2, G2.renderLists = ye2, G2.shadowMap = Be2, G2.state = xe2, G2.info = Re2;
      }
      qe2(), x2 !== zt && (F2 = new Ei2(x2, t2.width, t2.height, l2, a2, o2));
      const je2 = new Ma2(G2, Ke2);
      function Ze2(e3) {
        e3.preventDefault(), ri("WebGLRenderer: Context Lost."), H2 = true;
      }
      function $e2() {
        ri("WebGLRenderer: Context Restored."), H2 = false;
        const e3 = Re2.autoReset, t3 = Be2.enabled, n2 = Be2.autoUpdate, i2 = Be2.needsUpdate, r3 = Be2.type;
        qe2(), Re2.autoReset = e3, Be2.enabled = t3, Be2.autoUpdate = n2, Be2.needsUpdate = i2, Be2.type = r3;
      }
      function Qe2(e3) {
        oi("WebGLRenderer: A WebGL context could not be created. Reason: ", e3.statusMessage);
      }
      function Je2(e3) {
        const t3 = e3.target;
        t3.removeEventListener("dispose", Je2), (function(e4) {
          (function(e5) {
            const t4 = Ae2.get(e5).programs;
            void 0 !== t4 && (t4.forEach(function(e6) {
              Ie2.releaseProgram(e6);
            }), e5.isShaderMaterial && Ie2.releaseShaderCache(e5));
          })(e4), Ae2.remove(e4);
        })(t3);
      }
      function et2(e3, t3, n2) {
        true === e3.transparent && e3.side === p && false === e3.forceSinglePass ? (e3.side = d, e3.needsUpdate = true, dt2(e3, t3, n2), e3.side = u, e3.needsUpdate = true, dt2(e3, t3, n2), e3.side = p) : dt2(e3, t3, n2);
      }
      this.xr = je2, this.getContext = function() {
        return Ke2;
      }, this.getContextAttributes = function() {
        return Ke2.getContextAttributes();
      }, this.forceContextLoss = function() {
        const e3 = Me2.get("WEBGL_lose_context");
        e3 && e3.loseContext();
      }, this.forceContextRestore = function() {
        const e3 = Me2.get("WEBGL_lose_context");
        e3 && e3.restoreContext();
      }, this.getPixelRatio = function() {
        return re2;
      }, this.setPixelRatio = function(e3) {
        void 0 !== e3 && (re2 = e3, this.setSize(ne2, ie2, false));
      }, this.getSize = function(e3) {
        return e3.set(ne2, ie2);
      }, this.setSize = function(e3, n2, i2 = true) {
        je2.isPresenting ? ai("WebGLRenderer: Can't change size while VR device is presenting.") : (ne2 = e3, ie2 = n2, t2.width = Math.floor(e3 * re2), t2.height = Math.floor(n2 * re2), true === i2 && (t2.style.width = e3 + "px", t2.style.height = n2 + "px"), null !== F2 && F2.setSize(t2.width, t2.height), this.setViewport(0, 0, e3, n2));
      }, this.getDrawingBufferSize = function(e3) {
        return e3.set(ne2 * re2, ie2 * re2).floor();
      }, this.setDrawingBufferSize = function(e3, n2, i2) {
        ne2 = e3, ie2 = n2, re2 = i2, t2.width = Math.floor(e3 * i2), t2.height = Math.floor(n2 * i2), this.setViewport(0, 0, e3, n2);
      }, this.setEffects = function(e3) {
        if (x2 !== zt) {
          if (e3) {
            for (let t3 = 0; t3 < e3.length; t3++) if (true === e3[t3].isOutputPass) {
              ai("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
              break;
            }
          }
          F2.setEffects(e3 || []);
        } else oi("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
      }, this.getCurrentViewport = function(e3) {
        return e3.copy($2);
      }, this.getViewport = function(e3) {
        return e3.copy(se2);
      }, this.setViewport = function(e3, t3, n2, i2) {
        e3.isVector4 ? se2.set(e3.x, e3.y, e3.z, e3.w) : se2.set(e3, t3, n2, i2), xe2.viewport($2.copy(se2).multiplyScalar(re2).round());
      }, this.getScissor = function(e3) {
        return e3.copy(le2);
      }, this.setScissor = function(e3, t3, n2, i2) {
        e3.isVector4 ? le2.set(e3.x, e3.y, e3.z, e3.w) : le2.set(e3, t3, n2, i2), xe2.scissor(Q2.copy(le2).multiplyScalar(re2).round());
      }, this.getScissorTest = function() {
        return ce2;
      }, this.setScissorTest = function(e3) {
        xe2.setScissorTest(ce2 = e3);
      }, this.setOpaqueSort = function(e3) {
        ae2 = e3;
      }, this.setTransparentSort = function(e3) {
        oe2 = e3;
      }, this.getClearColor = function(e3) {
        return e3.copy(Ge2.getClearColor());
      }, this.setClearColor = function() {
        Ge2.setClearColor(...arguments);
      }, this.getClearAlpha = function() {
        return Ge2.getClearAlpha();
      }, this.setClearAlpha = function() {
        Ge2.setClearAlpha(...arguments);
      }, this.clear = function(e3 = true, t3 = true, n2 = true) {
        let i2 = 0;
        if (e3) {
          let e4 = false;
          if (null !== q2) {
            const t4 = q2.texture.format;
            e4 = R2.has(t4);
          }
          if (e4) {
            const e5 = q2.texture.type, t4 = A2.has(e5), n3 = Ge2.getClearColor(), i3 = Ge2.getClearAlpha(), r3 = n3.r, a3 = n3.g, o3 = n3.b;
            t4 ? (b2[0] = r3, b2[1] = a3, b2[2] = o3, b2[3] = i3, Ke2.clearBufferuiv(Ke2.COLOR, 0, b2)) : (C2[0] = r3, C2[1] = a3, C2[2] = o3, C2[3] = i3, Ke2.clearBufferiv(Ke2.COLOR, 0, C2));
          } else i2 |= Ke2.COLOR_BUFFER_BIT;
        }
        t3 && (i2 |= Ke2.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(true)), n2 && (i2 |= Ke2.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), 0 !== i2 && Ke2.clear(i2);
      }, this.clearColor = function() {
        this.clear(true, false, false);
      }, this.clearDepth = function() {
        this.clear(false, true, false);
      }, this.clearStencil = function() {
        this.clear(false, false, true);
      }, this.setNodesHandler = function(e3) {
        e3.setRenderer(this), V2 = e3;
      }, this.dispose = function() {
        t2.removeEventListener("webglcontextlost", Ze2, false), t2.removeEventListener("webglcontextrestored", $e2, false), t2.removeEventListener("webglcontextcreationerror", Qe2, false), Ge2.dispose(), ye2.dispose(), Oe2.dispose(), Ae2.dispose(), Ce2.dispose(), we2.dispose(), ke2.dispose(), Xe2.dispose(), Ie2.dispose(), je2.dispose(), je2.removeEventListener("sessionstart", nt2), je2.removeEventListener("sessionend", it2), rt2.stop();
      }, this.renderBufferDirect = function(e3, t3, n2, i2, r3, a3) {
        null === t3 && (t3 = ge2);
        const o3 = r3.isMesh && r3.matrixWorld.determinantAffine() < 0, s3 = (function(e4, t4, n3, i3, r4) {
          true !== t4.isScene && (t4 = ge2);
          be2.resetTextureUnits();
          const a4 = t4.fog, o4 = i3.isMeshStandardMaterial || i3.isMeshLambertMaterial || i3.isMeshPhongMaterial ? t4.environment : null, s4 = null === q2 ? G2.outputColorSpace : true === q2.isXRRenderTarget ? q2.texture.colorSpace : Ri.workingColorSpace, l4 = i3.isMeshStandardMaterial || i3.isMeshLambertMaterial && !i3.envMap || i3.isMeshPhongMaterial && !i3.envMap, c3 = Ce2.get(i3.envMap || o4, l4), d4 = true === i3.vertexColors && !!n3.attributes.color && 4 === n3.attributes.color.itemSize, u3 = !!n3.attributes.tangent && (!!i3.normalMap || i3.anisotropy > 0), p4 = !!n3.morphAttributes.position, m4 = !!n3.morphAttributes.normal, h3 = !!n3.morphAttributes.color;
          let _4 = Q;
          i3.toneMapped && (null !== q2 && true !== q2.isXRRenderTarget || (_4 = G2.toneMapping));
          const g4 = n3.morphAttributes.position || n3.morphAttributes.normal || n3.morphAttributes.color, v2 = void 0 !== g4 ? g4.length : 0, S2 = Ae2.get(i3), M3 = w2.state.lights;
          if (true === ue2 && (true === fe2 || e4 !== Z2)) {
            const t5 = e4 === Z2 && i3.id === j2;
            Fe2.setState(i3, e4, t5);
          }
          let T3 = false;
          i3.version === S2.__version ? S2.needsLights && S2.lightsStateVersion !== M3.state.version || S2.outputColorSpace !== s4 || r4.isBatchedMesh && false === S2.batching ? T3 = true : r4.isBatchedMesh || true !== S2.batching ? r4.isBatchedMesh && true === S2.batchingColor && null === r4.colorTexture || r4.isBatchedMesh && false === S2.batchingColor && null !== r4.colorTexture || r4.isInstancedMesh && false === S2.instancing ? T3 = true : r4.isInstancedMesh || true !== S2.instancing ? r4.isSkinnedMesh && false === S2.skinning ? T3 = true : r4.isSkinnedMesh || true !== S2.skinning ? r4.isInstancedMesh && true === S2.instancingColor && null === r4.instanceColor || r4.isInstancedMesh && false === S2.instancingColor && null !== r4.instanceColor || r4.isInstancedMesh && true === S2.instancingMorph && null === r4.morphTexture || r4.isInstancedMesh && false === S2.instancingMorph && null !== r4.morphTexture || S2.envMap !== c3 || true === i3.fog && S2.fog !== a4 ? T3 = true : void 0 === S2.numClippingPlanes || S2.numClippingPlanes === Fe2.numPlanes && S2.numIntersection === Fe2.numIntersection ? (S2.vertexAlphas !== d4 || S2.vertexTangents !== u3 || S2.morphTargets !== p4 || S2.morphNormals !== m4 || S2.morphColors !== h3 || S2.toneMapping !== _4 || S2.morphTargetsCount !== v2 || !!S2.lightProbeGrid != w2.state.lightProbeGridArray.length > 0) && (T3 = true) : T3 = true : T3 = true : T3 = true : T3 = true : (T3 = true, S2.__version = i3.version);
          let x3 = S2.currentProgram;
          true === T3 && (x3 = dt2(i3, t4, r4), V2 && i3.isNodeMaterial && V2.onUpdateProgram(i3, x3, S2));
          let R3 = false, A3 = false, b3 = false;
          const C3 = x3.getUniforms(), U3 = S2.uniforms;
          xe2.useProgram(x3.program) && (R3 = true, A3 = true, b3 = true);
          i3.id !== j2 && (j2 = i3.id, A3 = true);
          if (S2.needsLights) {
            const e5 = (function(e6, t5) {
              if (0 === e6.length) return null;
              if (1 === e6.length) return null !== e6[0].texture ? e6[0] : null;
              P2.setFromMatrixPosition(t5.matrixWorld);
              for (let t6 = 0, n4 = e6.length; t6 < n4; t6++) {
                const n5 = e6[t6];
                if (null !== n5.texture && n5.boundingBox.containsPoint(P2)) return n5;
              }
              return null;
            })(w2.state.lightProbeGridArray, r4);
            S2.lightProbeGrid !== e5 && (S2.lightProbeGrid = e5, A3 = true);
          }
          if (R3 || Z2 !== e4) {
            xe2.buffers.depth.getReversed() && true !== e4.reversedDepth && (e4._reversedDepth = true, e4.updateProjectionMatrix()), C3.setValue(Ke2, "projectionMatrix", e4.projectionMatrix), C3.setValue(Ke2, "viewMatrix", e4.matrixWorldInverse);
            const t5 = C3.map.cameraPosition;
            void 0 !== t5 && t5.setValue(Ke2, me2.setFromMatrixPosition(e4.matrixWorld)), Te2.logarithmicDepthBuffer && C3.setValue(Ke2, "logDepthBufFC", 2 / (Math.log(e4.far + 1) / Math.LN2)), (i3.isMeshPhongMaterial || i3.isMeshToonMaterial || i3.isMeshLambertMaterial || i3.isMeshBasicMaterial || i3.isMeshStandardMaterial || i3.isShaderMaterial) && C3.setValue(Ke2, "isOrthographic", true === e4.isOrthographicCamera), Z2 !== e4 && (Z2 = e4, A3 = true, b3 = true);
          }
          S2.needsLights && (M3.state.directionalShadowMap.length > 0 && C3.setValue(Ke2, "directionalShadowMap", M3.state.directionalShadowMap, be2), M3.state.spotShadowMap.length > 0 && C3.setValue(Ke2, "spotShadowMap", M3.state.spotShadowMap, be2), M3.state.pointShadowMap.length > 0 && C3.setValue(Ke2, "pointShadowMap", M3.state.pointShadowMap, be2));
          if (r4.isSkinnedMesh) {
            C3.setOptional(Ke2, r4, "bindMatrix"), C3.setOptional(Ke2, r4, "bindMatrixInverse");
            const e5 = r4.skeleton;
            e5 && (null === e5.boneTexture && e5.computeBoneTexture(), C3.setValue(Ke2, "boneTexture", e5.boneTexture, be2));
          }
          r4.isBatchedMesh && (C3.setOptional(Ke2, r4, "batchingTexture"), C3.setValue(Ke2, "batchingTexture", r4._matricesTexture, be2), C3.setOptional(Ke2, r4, "batchingIdTexture"), C3.setValue(Ke2, "batchingIdTexture", r4._indirectTexture, be2), C3.setOptional(Ke2, r4, "batchingColorTexture"), null !== r4._colorsTexture && C3.setValue(Ke2, "batchingColorTexture", r4._colorsTexture, be2));
          const D2 = n3.morphAttributes;
          void 0 === D2.position && void 0 === D2.normal && void 0 === D2.color || He2.update(r4, n3, x3);
          (A3 || S2.receiveShadow !== r4.receiveShadow) && (S2.receiveShadow = r4.receiveShadow, C3.setValue(Ke2, "receiveShadow", r4.receiveShadow));
          (i3.isMeshStandardMaterial || i3.isMeshLambertMaterial || i3.isMeshPhongMaterial) && null === i3.envMap && null !== t4.environment && (U3.envMapIntensity.value = t4.environmentIntensity);
          void 0 !== U3.dfgLUT && (U3.dfgLUT.value = (null === Ca2 && (Ca2 = new Xa(ba2, 16, 16, Xt, Rt), Ca2.name = "DFG_LUT", Ca2.minFilter = Mt, Ca2.magFilter = Mt, Ca2.wrapS = yt, Ca2.wrapT = yt, Ca2.generateMipmaps = false, Ca2.needsUpdate = true), Ca2));
          if (A3) {
            if (C3.setValue(Ke2, "toneMappingExposure", G2.toneMappingExposure), S2.needsLights && (N3 = b3, (I2 = U3).ambientLightColor.needsUpdate = N3, I2.lightProbe.needsUpdate = N3, I2.directionalLights.needsUpdate = N3, I2.directionalLightShadows.needsUpdate = N3, I2.pointLights.needsUpdate = N3, I2.pointLightShadows.needsUpdate = N3, I2.spotLights.needsUpdate = N3, I2.spotLightShadows.needsUpdate = N3, I2.rectAreaLights.needsUpdate = N3, I2.hemisphereLights.needsUpdate = N3), a4 && true === i3.fog && Ne2.refreshFogUniforms(U3, a4), Ne2.refreshMaterialUniforms(U3, i3, re2, ie2, w2.state.transmissionRenderTarget[e4.id]), S2.needsLights && S2.lightProbeGrid) {
              const e5 = S2.lightProbeGrid;
              U3.probesSH.value = e5.texture, U3.probesMin.value.copy(e5.boundingBox.min), U3.probesMax.value.copy(e5.boundingBox.max), U3.probesResolution.value.copy(e5.resolution);
            }
            Rr2.upload(Ke2, ut2(S2), U3, be2);
          }
          var I2, N3;
          i3.isShaderMaterial && true === i3.uniformsNeedUpdate && (Rr2.upload(Ke2, ut2(S2), U3, be2), i3.uniformsNeedUpdate = false);
          i3.isSpriteMaterial && C3.setValue(Ke2, "center", r4.center);
          if (C3.setValue(Ke2, "modelViewMatrix", r4.modelViewMatrix), C3.setValue(Ke2, "normalMatrix", r4.normalMatrix), C3.setValue(Ke2, "modelMatrix", r4.matrixWorld), void 0 !== i3.uniformsGroups) {
            const e5 = i3.uniformsGroups;
            for (let t5 = 0, n4 = e5.length; t5 < n4; t5++) {
              const n5 = e5[t5];
              Xe2.update(n5, x3), Xe2.bind(n5, x3);
            }
          }
          return x3;
        })(e3, t3, n2, i2, r3);
        xe2.setMaterial(i2, o3);
        let l3 = n2.index, c2 = 1;
        if (true === i2.wireframe) {
          if (l3 = De2.getWireframeAttribute(n2), void 0 === l3) return;
          c2 = 2;
        }
        const d3 = n2.drawRange, u2 = n2.attributes.position;
        let p3 = d3.start * c2, m3 = (d3.start + d3.count) * c2;
        null !== a3 && (p3 = Math.max(p3, a3.start * c2), m3 = Math.min(m3, (a3.start + a3.count) * c2)), null !== l3 ? (p3 = Math.max(p3, 0), m3 = Math.min(m3, l3.count)) : null != u2 && (p3 = Math.max(p3, 0), m3 = Math.min(m3, u2.count));
        const h2 = m3 - p3;
        if (h2 < 0 || h2 === 1 / 0) return;
        let _3;
        ke2.setup(r3, i2, s3, n2, l3);
        let g3 = Ve2;
        if (null !== l3 && (_3 = Pe2.get(l3), g3 = We2, g3.setIndex(_3)), r3.isMesh) true === i2.wireframe ? (xe2.setLineWidth(i2.wireframeLinewidth * Ee2()), g3.setMode(Ke2.LINES)) : g3.setMode(Ke2.TRIANGLES);
        else if (r3.isLine) {
          let e4 = i2.linewidth;
          void 0 === e4 && (e4 = 1), xe2.setLineWidth(e4 * Ee2()), r3.isLineSegments ? g3.setMode(Ke2.LINES) : r3.isLineLoop ? g3.setMode(Ke2.LINE_LOOP) : g3.setMode(Ke2.LINE_STRIP);
        } else r3.isPoints ? g3.setMode(Ke2.POINTS) : r3.isSprite && g3.setMode(Ke2.TRIANGLES);
        if (r3.isBatchedMesh) if (Me2.get("WEBGL_multi_draw")) g3.renderMultiDraw(r3._multiDrawStarts, r3._multiDrawCounts, r3._multiDrawCount);
        else {
          const e4 = r3._multiDrawStarts, t4 = r3._multiDrawCounts, n3 = r3._multiDrawCount, a4 = l3 ? Pe2.get(l3).bytesPerElement : 1, o4 = Ae2.get(i2).currentProgram.getUniforms();
          for (let i3 = 0; i3 < n3; i3++) o4.setValue(Ke2, "_gl_DrawID", i3), g3.render(e4[i3] / a4, t4[i3]);
        }
        else if (r3.isInstancedMesh) g3.renderInstances(p3, h2, r3.count);
        else if (n2.isInstancedBufferGeometry) {
          const e4 = void 0 !== n2._maxInstanceCount ? n2._maxInstanceCount : 1 / 0, t4 = Math.min(n2.instanceCount, e4);
          g3.renderInstances(p3, h2, t4);
        } else g3.render(p3, h2);
      }, this.compile = function(e3, t3, n2 = null) {
        null === n2 && (n2 = e3), w2 = Oe2.get(n2), w2.init(t3), y2.push(w2), n2.traverseVisible(function(e4) {
          e4.isLight && e4.layers.test(t3.layers) && (w2.pushLight(e4), e4.castShadow && w2.pushShadow(e4));
        }), e3 !== n2 && e3.traverseVisible(function(e4) {
          e4.isLight && e4.layers.test(t3.layers) && (w2.pushLight(e4), e4.castShadow && w2.pushShadow(e4));
        }), w2.setupLights();
        const i2 = /* @__PURE__ */ new Set();
        return e3.traverse(function(e4) {
          if (!(e4.isMesh || e4.isPoints || e4.isLine || e4.isSprite)) return;
          const t4 = e4.material;
          if (t4) if (Array.isArray(t4)) for (let r3 = 0; r3 < t4.length; r3++) {
            const a3 = t4[r3];
            et2(a3, n2, e4), i2.add(a3);
          }
          else et2(t4, n2, e4), i2.add(t4);
        }), w2 = y2.pop(), i2;
      }, this.compileAsync = function(e3, t3, n2 = null) {
        const i2 = this.compile(e3, t3, n2);
        return new Promise((t4) => {
          function n3() {
            i2.forEach(function(e4) {
              Ae2.get(e4).currentProgram.isReady() && i2.delete(e4);
            }), 0 !== i2.size ? setTimeout(n3, 10) : t4(e3);
          }
          null !== Me2.get("KHR_parallel_shader_compile") ? n3() : setTimeout(n3, 10);
        });
      };
      let tt2 = null;
      function nt2() {
        rt2.stop();
      }
      function it2() {
        rt2.start();
      }
      const rt2 = new On2();
      function at2(e3, t3, n2, i2) {
        if (false === e3.visible) return;
        if (e3.layers.test(t3.layers)) {
          if (e3.isGroup) n2 = e3.renderOrder;
          else if (e3.isLOD) true === e3.autoUpdate && e3.update(t3);
          else if (e3.isLightProbeGrid) w2.pushLightProbeGrid(e3);
          else if (e3.isLight) w2.pushLight(e3), e3.castShadow && w2.pushShadow(e3);
          else if (e3.isSprite) {
            if (!e3.frustumCulled || de2.intersectsSprite(e3)) {
              i2 && _e2.setFromMatrixPosition(e3.matrixWorld).applyMatrix4(pe2);
              const t4 = we2.update(e3), r4 = e3.material;
              r4.visible && U2.push(e3, t4, r4, n2, _e2.z, null);
            }
          } else if ((e3.isMesh || e3.isLine || e3.isPoints) && (!e3.frustumCulled || de2.intersectsObject(e3))) {
            const t4 = we2.update(e3), r4 = e3.material;
            if (i2 && (void 0 !== e3.boundingSphere ? (null === e3.boundingSphere && e3.computeBoundingSphere(), _e2.copy(e3.boundingSphere.center)) : (null === t4.boundingSphere && t4.computeBoundingSphere(), _e2.copy(t4.boundingSphere.center)), _e2.applyMatrix4(e3.matrixWorld).applyMatrix4(pe2)), Array.isArray(r4)) {
              const i3 = t4.groups;
              for (let a3 = 0, o3 = i3.length; a3 < o3; a3++) {
                const o4 = i3[a3], s3 = r4[o4.materialIndex];
                s3 && s3.visible && U2.push(e3, t4, s3, n2, _e2.z, o4);
              }
            } else r4.visible && U2.push(e3, t4, r4, n2, _e2.z, null);
          }
        }
        const r3 = e3.children;
        for (let e4 = 0, a3 = r3.length; e4 < a3; e4++) at2(r3[e4], t3, n2, i2);
      }
      function ot2(e3, t3, n2, i2) {
        const { opaque: r3, transmissive: a3, transparent: o3 } = e3;
        w2.setupLightsView(n2), true === ue2 && Fe2.setGlobalState(G2.clippingPlanes, n2), i2 && xe2.viewport($2.copy(i2)), r3.length > 0 && lt2(r3, t3, n2), a3.length > 0 && lt2(a3, t3, n2), o3.length > 0 && lt2(o3, t3, n2), xe2.buffers.depth.setTest(true), xe2.buffers.depth.setMask(true), xe2.buffers.color.setMask(true), xe2.setPolygonOffset(false);
      }
      function st2(e3, t3, n2, i2) {
        if (null !== (true === n2.isScene ? n2.overrideMaterial : null)) return;
        if (void 0 === w2.state.transmissionRenderTarget[i2.id]) {
          const e4 = Me2.has("EXT_color_buffer_half_float") || Me2.has("EXT_color_buffer_float");
          w2.state.transmissionRenderTarget[i2.id] = new Xi(1, 1, { generateMipmaps: true, type: e4 ? Rt : zt, minFilter: At, samples: Math.max(4, Te2.samples), stencilBuffer: o2, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Ri.workingColorSpace });
        }
        const r3 = w2.state.transmissionRenderTarget[i2.id], a3 = i2.viewport || $2;
        r3.setSize(a3.z * G2.transmissionResolutionScale, a3.w * G2.transmissionResolutionScale);
        const s3 = G2.getRenderTarget(), l3 = G2.getActiveCubeFace(), d3 = G2.getActiveMipmapLevel();
        G2.setRenderTarget(r3), G2.getClearColor(ee2), te2 = G2.getClearAlpha(), te2 < 1 && G2.setClearColor(16777215, 0.5), G2.clear(), ve2 && Ge2.render(n2);
        const u2 = G2.toneMapping;
        G2.toneMapping = Q;
        const p3 = i2.viewport;
        if (void 0 !== i2.viewport && (i2.viewport = void 0), w2.setupLightsView(i2), true === ue2 && Fe2.setGlobalState(G2.clippingPlanes, i2), lt2(e3, n2, i2), be2.updateMultisampleRenderTarget(r3), be2.updateRenderTargetMipmap(r3), false === Me2.has("WEBGL_multisampled_render_to_texture")) {
          let e4 = false;
          for (let r4 = 0, a4 = t3.length; r4 < a4; r4++) {
            const a5 = t3[r4], { object: o3, geometry: s4, material: l4, group: d4 } = a5;
            if (l4.side === p && o3.layers.test(i2.layers)) {
              const t4 = l4.side;
              l4.side = d, l4.needsUpdate = true, ct2(o3, n2, i2, s4, l4, d4), l4.side = t4, l4.needsUpdate = true, e4 = true;
            }
          }
          true === e4 && (be2.updateMultisampleRenderTarget(r3), be2.updateRenderTargetMipmap(r3));
        }
        G2.setRenderTarget(s3, l3, d3), G2.setClearColor(ee2, te2), void 0 !== p3 && (i2.viewport = p3), G2.toneMapping = u2;
      }
      function lt2(e3, t3, n2) {
        const i2 = true === t3.isScene ? t3.overrideMaterial : null;
        for (let r3 = 0, a3 = e3.length; r3 < a3; r3++) {
          const a4 = e3[r3], { object: o3, geometry: s3, group: l3 } = a4;
          let c2 = a4.material;
          true === c2.allowOverride && null !== i2 && (c2 = i2), o3.layers.test(n2.layers) && ct2(o3, t3, n2, s3, c2, l3);
        }
      }
      function ct2(e3, t3, n2, i2, r3, a3) {
        e3.onBeforeRender(G2, t3, n2, i2, r3, a3), e3.modelViewMatrix.multiplyMatrices(n2.matrixWorldInverse, e3.matrixWorld), e3.normalMatrix.getNormalMatrix(e3.modelViewMatrix), r3.onBeforeRender(G2, t3, n2, i2, e3, a3), true === r3.transparent && r3.side === p && false === r3.forceSinglePass ? (r3.side = d, r3.needsUpdate = true, G2.renderBufferDirect(n2, t3, i2, r3, e3, a3), r3.side = u, r3.needsUpdate = true, G2.renderBufferDirect(n2, t3, i2, r3, e3, a3), r3.side = p) : G2.renderBufferDirect(n2, t3, i2, r3, e3, a3), e3.onAfterRender(G2, t3, n2, i2, r3, a3);
      }
      function dt2(e3, t3, n2) {
        true !== t3.isScene && (t3 = ge2);
        const i2 = Ae2.get(e3), r3 = w2.state.lights, a3 = w2.state.shadowsArray, o3 = r3.state.version, s3 = Ie2.getParameters(e3, r3.state, a3, t3, n2, w2.state.lightProbeGridArray), l3 = Ie2.getProgramCacheKey(s3);
        let c2 = i2.programs;
        i2.environment = e3.isMeshStandardMaterial || e3.isMeshLambertMaterial || e3.isMeshPhongMaterial ? t3.environment : null, i2.fog = t3.fog;
        const d3 = e3.isMeshStandardMaterial || e3.isMeshLambertMaterial && !e3.envMap || e3.isMeshPhongMaterial && !e3.envMap;
        i2.envMap = Ce2.get(e3.envMap || i2.environment, d3), i2.envMapRotation = null !== i2.environment && null === e3.envMap ? t3.environmentRotation : e3.envMapRotation, void 0 === c2 && (e3.addEventListener("dispose", Je2), c2 = /* @__PURE__ */ new Map(), i2.programs = c2);
        let u2 = c2.get(l3);
        if (void 0 !== u2) {
          if (i2.currentProgram === u2 && i2.lightsStateVersion === o3) return ft2(e3, s3), u2;
        } else s3.uniforms = Ie2.getUniforms(e3), null !== V2 && e3.isNodeMaterial && V2.build(e3, n2, s3), e3.onBeforeCompile(s3, G2), u2 = Ie2.acquireProgram(s3, l3), c2.set(l3, u2), i2.uniforms = s3.uniforms;
        const f2 = i2.uniforms;
        return (e3.isShaderMaterial || e3.isRawShaderMaterial) && true !== e3.clipping || (f2.clippingPlanes = Fe2.uniform), ft2(e3, s3), i2.needsLights = (function(e4) {
          return e4.isMeshLambertMaterial || e4.isMeshToonMaterial || e4.isMeshPhongMaterial || e4.isMeshStandardMaterial || e4.isShadowMaterial || e4.isShaderMaterial && true === e4.lights;
        })(e3), i2.lightsStateVersion = o3, i2.needsLights && (f2.ambientLightColor.value = r3.state.ambient, f2.lightProbe.value = r3.state.probe, f2.directionalLights.value = r3.state.directional, f2.directionalLightShadows.value = r3.state.directionalShadow, f2.spotLights.value = r3.state.spot, f2.spotLightShadows.value = r3.state.spotShadow, f2.rectAreaLights.value = r3.state.rectArea, f2.ltc_1.value = r3.state.rectAreaLTC1, f2.ltc_2.value = r3.state.rectAreaLTC2, f2.pointLights.value = r3.state.point, f2.pointLightShadows.value = r3.state.pointShadow, f2.hemisphereLights.value = r3.state.hemi, f2.directionalShadowMatrix.value = r3.state.directionalShadowMatrix, f2.spotLightMatrix.value = r3.state.spotLightMatrix, f2.spotLightMap.value = r3.state.spotLightMap, f2.pointShadowMatrix.value = r3.state.pointShadowMatrix), i2.lightProbeGrid = w2.state.lightProbeGridArray.length > 0, i2.currentProgram = u2, i2.uniformsList = null, u2;
      }
      function ut2(e3) {
        if (null === e3.uniformsList) {
          const t3 = e3.currentProgram.getUniforms();
          e3.uniformsList = Rr2.seqWithValue(t3.seq, e3.uniforms);
        }
        return e3.uniformsList;
      }
      function ft2(e3, t3) {
        const n2 = Ae2.get(e3);
        n2.outputColorSpace = t3.outputColorSpace, n2.batching = t3.batching, n2.batchingColor = t3.batchingColor, n2.instancing = t3.instancing, n2.instancingColor = t3.instancingColor, n2.instancingMorph = t3.instancingMorph, n2.skinning = t3.skinning, n2.morphTargets = t3.morphTargets, n2.morphNormals = t3.morphNormals, n2.morphColors = t3.morphColors, n2.morphTargetsCount = t3.morphTargetsCount, n2.numClippingPlanes = t3.numClippingPlanes, n2.numIntersection = t3.numClipIntersection, n2.vertexAlphas = t3.vertexAlphas, n2.vertexTangents = t3.vertexTangents, n2.toneMapping = t3.toneMapping;
      }
      rt2.setAnimationLoop(function(e3) {
        tt2 && tt2(e3);
      }), "undefined" != typeof self && rt2.setContext(self), this.setAnimationLoop = function(e3) {
        tt2 = e3, je2.setAnimationLoop(e3), null === e3 ? rt2.stop() : rt2.start();
      }, je2.addEventListener("sessionstart", nt2), je2.addEventListener("sessionend", it2), this.render = function(e3, t3) {
        if (void 0 !== t3 && true !== t3.isCamera) return void oi("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        if (true === H2) return;
        null !== V2 && V2.renderStart(e3, t3);
        const n2 = true === je2.enabled && true === je2.isPresenting, i2 = null !== F2 && (null === q2 || n2) && F2.begin(G2, q2);
        if (true === e3.matrixWorldAutoUpdate && e3.updateMatrixWorld(), null === t3.parent && true === t3.matrixWorldAutoUpdate && t3.updateMatrixWorld(), true !== je2.enabled || true !== je2.isPresenting || null !== F2 && false !== F2.isCompositing() || (true === je2.cameraAutoUpdate && je2.updateCamera(t3), t3 = je2.getCamera()), true === e3.isScene && e3.onBeforeRender(G2, e3, t3, q2), w2 = Oe2.get(e3, y2.length), w2.init(t3), w2.state.textureUnits = be2.getTextureUnits(), y2.push(w2), pe2.multiplyMatrices(t3.projectionMatrix, t3.matrixWorldInverse), de2.setFromProjectionMatrix(pe2, Ws, t3.reversedDepth), fe2 = this.localClippingEnabled, ue2 = Fe2.init(this.clippingPlanes, fe2), U2 = ye2.get(e3, N2.length), U2.init(), N2.push(U2), true === je2.enabled && true === je2.isPresenting) {
          const e4 = G2.xr.getDepthSensingMesh();
          null !== e4 && at2(e4, t3, -1 / 0, G2.sortObjects);
        }
        at2(e3, t3, 0, G2.sortObjects), U2.finish(), true === G2.sortObjects && U2.sort(ae2, oe2, t3.reversedDepth), ve2 = false === je2.enabled || false === je2.isPresenting || false === je2.hasDepthSensing(), ve2 && Ge2.addToRenderList(U2, e3), this.info.render.frame++, true === this.info.autoReset && this.info.reset(), true === ue2 && Fe2.beginShadows();
        const r3 = w2.state.shadowsArray;
        Be2.render(r3, e3, t3), true === ue2 && Fe2.endShadows();
        if (false === (i2 && F2.hasRenderPass())) {
          const n3 = U2.opaque, i3 = U2.transmissive;
          if (w2.setupLights(), t3.isArrayCamera) {
            const r4 = t3.cameras;
            if (i3.length > 0) for (let t4 = 0, a3 = r4.length; t4 < a3; t4++) {
              st2(n3, i3, e3, r4[t4]);
            }
            ve2 && Ge2.render(e3);
            for (let t4 = 0, n4 = r4.length; t4 < n4; t4++) {
              const n5 = r4[t4];
              ot2(U2, e3, n5, n5.viewport);
            }
          } else i3.length > 0 && st2(n3, i3, e3, t3), ve2 && Ge2.render(e3), ot2(U2, e3, t3);
        }
        null !== q2 && 0 === Y2 && (be2.updateMultisampleRenderTarget(q2), be2.updateRenderTargetMipmap(q2)), i2 && F2.end(G2), true === e3.isScene && e3.onAfterRender(G2, e3, t3), ke2.resetDefaultState(), j2 = -1, Z2 = null, y2.pop(), y2.length > 0 ? (w2 = y2[y2.length - 1], be2.setTextureUnits(w2.state.textureUnits), true === ue2 && Fe2.setGlobalState(G2.clippingPlanes, w2.state.camera)) : w2 = null, N2.pop(), U2 = N2.length > 0 ? N2[N2.length - 1] : null, null !== V2 && V2.renderEnd();
      }, this.getActiveCubeFace = function() {
        return X2;
      }, this.getActiveMipmapLevel = function() {
        return Y2;
      }, this.getRenderTarget = function() {
        return q2;
      }, this.setRenderTargetTextures = function(e3, t3, n2) {
        const i2 = Ae2.get(e3);
        i2.__autoAllocateDepthBuffer = false === e3.resolveDepthBuffer, false === i2.__autoAllocateDepthBuffer && (i2.__useRenderToTexture = false), Ae2.get(e3.texture).__webglTexture = t3, Ae2.get(e3.depthTexture).__webglTexture = i2.__autoAllocateDepthBuffer ? void 0 : n2, i2.__hasExternalTextures = true;
      }, this.setRenderTargetFramebuffer = function(e3, t3) {
        const n2 = Ae2.get(e3);
        n2.__webglFramebuffer = t3, n2.__useDefaultFramebuffer = void 0 === t3;
      }, this.setRenderTarget = function(e3, t3 = 0, n2 = 0) {
        q2 = e3, X2 = t3, Y2 = n2;
        let i2 = null, r3 = false, a3 = false;
        if (e3) {
          const o3 = Ae2.get(e3);
          if (void 0 !== o3.__useDefaultFramebuffer) return xe2.bindFramebuffer(Ke2.FRAMEBUFFER, o3.__webglFramebuffer), $2.copy(e3.viewport), Q2.copy(e3.scissor), J2 = e3.scissorTest, xe2.viewport($2), xe2.scissor(Q2), xe2.setScissorTest(J2), void (j2 = -1);
          if (void 0 === o3.__webglFramebuffer) be2.setupRenderTarget(e3);
          else if (o3.__hasExternalTextures) be2.rebindTextures(e3, Ae2.get(e3.texture).__webglTexture, Ae2.get(e3.depthTexture).__webglTexture);
          else if (e3.depthBuffer) {
            const t4 = e3.depthTexture;
            if (o3.__boundDepthTexture !== t4) {
              if (null !== t4 && Ae2.has(t4) && (e3.width !== t4.image.width || e3.height !== t4.image.height)) throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
              be2.setupDepthRenderbuffer(e3);
            }
          }
          const s3 = e3.texture;
          (s3.isData3DTexture || s3.isDataArrayTexture || s3.isCompressedArrayTexture) && (a3 = true);
          const l3 = Ae2.get(e3).__webglFramebuffer;
          e3.isWebGLCubeRenderTarget ? (i2 = Array.isArray(l3[t3]) ? l3[t3][n2] : l3[t3], r3 = true) : i2 = e3.samples > 0 && false === be2.useMultisampledRTT(e3) ? Ae2.get(e3).__webglMultisampledFramebuffer : Array.isArray(l3) ? l3[n2] : l3, $2.copy(e3.viewport), Q2.copy(e3.scissor), J2 = e3.scissorTest;
        } else $2.copy(se2).multiplyScalar(re2).floor(), Q2.copy(le2).multiplyScalar(re2).floor(), J2 = ce2;
        0 !== n2 && (i2 = W2);
        if (xe2.bindFramebuffer(Ke2.FRAMEBUFFER, i2) && xe2.drawBuffers(e3, i2), xe2.viewport($2), xe2.scissor(Q2), xe2.setScissorTest(J2), r3) {
          const i3 = Ae2.get(e3.texture);
          Ke2.framebufferTexture2D(Ke2.FRAMEBUFFER, Ke2.COLOR_ATTACHMENT0, Ke2.TEXTURE_CUBE_MAP_POSITIVE_X + t3, i3.__webglTexture, n2);
        } else if (a3) {
          const i3 = t3;
          for (let t4 = 0; t4 < e3.textures.length; t4++) {
            const r4 = Ae2.get(e3.textures[t4]);
            Ke2.framebufferTextureLayer(Ke2.FRAMEBUFFER, Ke2.COLOR_ATTACHMENT0 + t4, r4.__webglTexture, n2, i3);
          }
        } else if (null !== e3 && 0 !== n2) {
          const t4 = Ae2.get(e3.texture);
          Ke2.framebufferTexture2D(Ke2.FRAMEBUFFER, Ke2.COLOR_ATTACHMENT0, Ke2.TEXTURE_2D, t4.__webglTexture, n2);
        }
        j2 = -1;
      }, this.readRenderTargetPixels = function(e3, t3, n2, i2, r3, a3, o3, s3 = 0) {
        if (!e3 || !e3.isWebGLRenderTarget) return void oi("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let l3 = Ae2.get(e3).__webglFramebuffer;
        if (e3.isWebGLCubeRenderTarget && void 0 !== o3 && (l3 = l3[o3]), l3) {
          xe2.bindFramebuffer(Ke2.FRAMEBUFFER, l3);
          try {
            const o4 = e3.textures[s3], l4 = o4.format, c2 = o4.type;
            if (e3.textures.length > 1 && Ke2.readBuffer(Ke2.COLOR_ATTACHMENT0 + s3), !Te2.textureFormatReadable(l4)) return void oi("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            if (!Te2.textureTypeReadable(c2)) return void oi("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            t3 >= 0 && t3 <= e3.width - i2 && n2 >= 0 && n2 <= e3.height - r3 && Ke2.readPixels(t3, n2, i2, r3, ze2.convert(l4), ze2.convert(c2), a3);
          } finally {
            const e4 = null !== q2 ? Ae2.get(q2).__webglFramebuffer : null;
            xe2.bindFramebuffer(Ke2.FRAMEBUFFER, e4);
          }
        }
      }, this.readRenderTargetPixelsAsync = async function(e3, t3, n2, i2, r3, a3, o3, s3 = 0) {
        if (!e3 || !e3.isWebGLRenderTarget) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let l3 = Ae2.get(e3).__webglFramebuffer;
        if (e3.isWebGLCubeRenderTarget && void 0 !== o3 && (l3 = l3[o3]), l3) {
          if (t3 >= 0 && t3 <= e3.width - i2 && n2 >= 0 && n2 <= e3.height - r3) {
            xe2.bindFramebuffer(Ke2.FRAMEBUFFER, l3);
            const o4 = e3.textures[s3], c2 = o4.format, d3 = o4.type;
            if (e3.textures.length > 1 && Ke2.readBuffer(Ke2.COLOR_ATTACHMENT0 + s3), !Te2.textureFormatReadable(c2)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
            if (!Te2.textureTypeReadable(d3)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
            const u2 = Ke2.createBuffer();
            Ke2.bindBuffer(Ke2.PIXEL_PACK_BUFFER, u2), Ke2.bufferData(Ke2.PIXEL_PACK_BUFFER, a3.byteLength, Ke2.STREAM_READ), Ke2.readPixels(t3, n2, i2, r3, ze2.convert(c2), ze2.convert(d3), 0);
            const f2 = null !== q2 ? Ae2.get(q2).__webglFramebuffer : null;
            xe2.bindFramebuffer(Ke2.FRAMEBUFFER, f2);
            const p3 = Ke2.fenceSync(Ke2.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return Ke2.flush(), await ci(Ke2, p3, 4), Ke2.bindBuffer(Ke2.PIXEL_PACK_BUFFER, u2), Ke2.getBufferSubData(Ke2.PIXEL_PACK_BUFFER, 0, a3), Ke2.deleteBuffer(u2), Ke2.deleteSync(p3), a3;
          }
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
        }
      }, this.copyFramebufferToTexture = function(e3, t3 = null, n2 = 0) {
        const i2 = Math.pow(2, -n2), r3 = Math.floor(e3.image.width * i2), a3 = Math.floor(e3.image.height * i2), o3 = null !== t3 ? t3.x : 0, s3 = null !== t3 ? t3.y : 0;
        be2.setTexture2D(e3, 0), Ke2.copyTexSubImage2D(Ke2.TEXTURE_2D, n2, 0, 0, o3, s3, r3, a3), xe2.unbindTexture();
      }, this.copyTextureToTexture = function(e3, t3, n2 = null, i2 = null, r3 = 0, a3 = 0) {
        let o3, s3, l3, c2, d3, u2, f2, p3, m3;
        const h2 = e3.isCompressedTexture ? e3.mipmaps[a3] : e3.image;
        if (null !== n2) o3 = n2.max.x - n2.min.x, s3 = n2.max.y - n2.min.y, l3 = n2.isBox3 ? n2.max.z - n2.min.z : 1, c2 = n2.min.x, d3 = n2.min.y, u2 = n2.isBox3 ? n2.min.z : 0;
        else {
          const t4 = Math.pow(2, -r3);
          o3 = Math.floor(h2.width * t4), s3 = Math.floor(h2.height * t4), l3 = e3.isDataArrayTexture ? h2.depth : e3.isData3DTexture ? Math.floor(h2.depth * t4) : 1, c2 = 0, d3 = 0, u2 = 0;
        }
        null !== i2 ? (f2 = i2.x, p3 = i2.y, m3 = i2.z) : (f2 = 0, p3 = 0, m3 = 0);
        const _3 = ze2.convert(t3.format), g3 = ze2.convert(t3.type);
        let v2;
        t3.isData3DTexture ? (be2.setTexture3D(t3, 0), v2 = Ke2.TEXTURE_3D) : t3.isDataArrayTexture || t3.isCompressedArrayTexture ? (be2.setTexture2DArray(t3, 0), v2 = Ke2.TEXTURE_2D_ARRAY) : (be2.setTexture2D(t3, 0), v2 = Ke2.TEXTURE_2D), xe2.activeTexture(Ke2.TEXTURE0), xe2.pixelStorei(Ke2.UNPACK_FLIP_Y_WEBGL, t3.flipY), xe2.pixelStorei(Ke2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t3.premultiplyAlpha), xe2.pixelStorei(Ke2.UNPACK_ALIGNMENT, t3.unpackAlignment);
        const E2 = xe2.getParameter(Ke2.UNPACK_ROW_LENGTH), S2 = xe2.getParameter(Ke2.UNPACK_IMAGE_HEIGHT), M3 = xe2.getParameter(Ke2.UNPACK_SKIP_PIXELS), T3 = xe2.getParameter(Ke2.UNPACK_SKIP_ROWS), x3 = xe2.getParameter(Ke2.UNPACK_SKIP_IMAGES);
        xe2.pixelStorei(Ke2.UNPACK_ROW_LENGTH, h2.width), xe2.pixelStorei(Ke2.UNPACK_IMAGE_HEIGHT, h2.height), xe2.pixelStorei(Ke2.UNPACK_SKIP_PIXELS, c2), xe2.pixelStorei(Ke2.UNPACK_SKIP_ROWS, d3), xe2.pixelStorei(Ke2.UNPACK_SKIP_IMAGES, u2);
        const R3 = e3.isDataArrayTexture || e3.isData3DTexture, A3 = t3.isDataArrayTexture || t3.isData3DTexture;
        if (e3.isDepthTexture) {
          const n3 = Ae2.get(e3), i3 = Ae2.get(t3), h3 = Ae2.get(n3.__renderTarget), _4 = Ae2.get(i3.__renderTarget);
          xe2.bindFramebuffer(Ke2.READ_FRAMEBUFFER, h3.__webglFramebuffer), xe2.bindFramebuffer(Ke2.DRAW_FRAMEBUFFER, _4.__webglFramebuffer);
          for (let n4 = 0; n4 < l3; n4++) R3 && (Ke2.framebufferTextureLayer(Ke2.READ_FRAMEBUFFER, Ke2.COLOR_ATTACHMENT0, Ae2.get(e3).__webglTexture, r3, u2 + n4), Ke2.framebufferTextureLayer(Ke2.DRAW_FRAMEBUFFER, Ke2.COLOR_ATTACHMENT0, Ae2.get(t3).__webglTexture, a3, m3 + n4)), Ke2.blitFramebuffer(c2, d3, o3, s3, f2, p3, o3, s3, Ke2.DEPTH_BUFFER_BIT, Ke2.NEAREST);
          xe2.bindFramebuffer(Ke2.READ_FRAMEBUFFER, null), xe2.bindFramebuffer(Ke2.DRAW_FRAMEBUFFER, null);
        } else if (0 !== r3 || e3.isRenderTargetTexture || Ae2.has(e3)) {
          const n3 = Ae2.get(e3), i3 = Ae2.get(t3);
          xe2.bindFramebuffer(Ke2.READ_FRAMEBUFFER, z2), xe2.bindFramebuffer(Ke2.DRAW_FRAMEBUFFER, k2);
          for (let e4 = 0; e4 < l3; e4++) R3 ? Ke2.framebufferTextureLayer(Ke2.READ_FRAMEBUFFER, Ke2.COLOR_ATTACHMENT0, n3.__webglTexture, r3, u2 + e4) : Ke2.framebufferTexture2D(Ke2.READ_FRAMEBUFFER, Ke2.COLOR_ATTACHMENT0, Ke2.TEXTURE_2D, n3.__webglTexture, r3), A3 ? Ke2.framebufferTextureLayer(Ke2.DRAW_FRAMEBUFFER, Ke2.COLOR_ATTACHMENT0, i3.__webglTexture, a3, m3 + e4) : Ke2.framebufferTexture2D(Ke2.DRAW_FRAMEBUFFER, Ke2.COLOR_ATTACHMENT0, Ke2.TEXTURE_2D, i3.__webglTexture, a3), 0 !== r3 ? Ke2.blitFramebuffer(c2, d3, o3, s3, f2, p3, o3, s3, Ke2.COLOR_BUFFER_BIT, Ke2.NEAREST) : A3 ? Ke2.copyTexSubImage3D(v2, a3, f2, p3, m3 + e4, c2, d3, o3, s3) : Ke2.copyTexSubImage2D(v2, a3, f2, p3, c2, d3, o3, s3);
          xe2.bindFramebuffer(Ke2.READ_FRAMEBUFFER, null), xe2.bindFramebuffer(Ke2.DRAW_FRAMEBUFFER, null);
        } else A3 ? e3.isDataTexture || e3.isData3DTexture ? Ke2.texSubImage3D(v2, a3, f2, p3, m3, o3, s3, l3, _3, g3, h2.data) : t3.isCompressedArrayTexture ? Ke2.compressedTexSubImage3D(v2, a3, f2, p3, m3, o3, s3, l3, _3, h2.data) : Ke2.texSubImage3D(v2, a3, f2, p3, m3, o3, s3, l3, _3, g3, h2) : e3.isDataTexture ? Ke2.texSubImage2D(Ke2.TEXTURE_2D, a3, f2, p3, o3, s3, _3, g3, h2.data) : e3.isCompressedTexture ? Ke2.compressedTexSubImage2D(Ke2.TEXTURE_2D, a3, f2, p3, h2.width, h2.height, _3, h2.data) : Ke2.texSubImage2D(Ke2.TEXTURE_2D, a3, f2, p3, o3, s3, _3, g3, h2);
        xe2.pixelStorei(Ke2.UNPACK_ROW_LENGTH, E2), xe2.pixelStorei(Ke2.UNPACK_IMAGE_HEIGHT, S2), xe2.pixelStorei(Ke2.UNPACK_SKIP_PIXELS, M3), xe2.pixelStorei(Ke2.UNPACK_SKIP_ROWS, T3), xe2.pixelStorei(Ke2.UNPACK_SKIP_IMAGES, x3), 0 === a3 && t3.generateMipmaps && Ke2.generateMipmap(v2), xe2.unbindTexture();
      }, this.initRenderTarget = function(e3) {
        void 0 === Ae2.get(e3).__webglFramebuffer && be2.setupRenderTarget(e3);
      }, this.initTexture = function(e3) {
        e3.isCubeTexture ? be2.setTextureCube(e3, 0) : e3.isData3DTexture ? be2.setTexture3D(e3, 0) : e3.isDataArrayTexture || e3.isCompressedArrayTexture ? be2.setTexture2DArray(e3, 0) : be2.setTexture2D(e3, 0), xe2.unbindTexture();
      }, this.resetState = function() {
        X2 = 0, Y2 = 0, q2 = null, xe2.reset(), ke2.reset();
      }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    get coordinateSystem() {
      return Ws;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(e2) {
      this._outputColorSpace = e2;
      const t2 = this.getContext();
      t2.drawingBufferColorSpace = Ri._getDrawingBufferColorSpace(e2), t2.unpackColorSpace = Ri._getUnpackColorSpace();
    }
  };

  // journey-source.mjs
  var journey = document.querySelector("#journey");
  var matrixCanvas = document.querySelector("#matrix-background");
  var canvas = document.querySelector("#world-canvas");
  var stationCards = [...document.querySelectorAll("[data-station-index]")];
  var navButtons = [...document.querySelectorAll("[data-route-index]")];
  var routeCount = document.querySelector("#route-count");
  var statusIndex = document.querySelector("#status-index");
  var statusName = document.querySelector("#status-name");
  var statusProgress = document.querySelector("#status-progress");
  var motionToggle = document.querySelector("#motion-toggle");
  var cursorOrb = document.querySelector("#cursor-orb");
  var notice = document.querySelector("#webgl-notice");
  var STATION_GAP = 34;
  var stations = [
    { en: "ABOUT RIVA", cn: "\u4E2A\u4EBA\u7B80\u4ECB", href: "about.html", side: -1, baseZ: -30 },
    { en: "PORTFOLIO", cn: "\u4F5C\u54C1\u96C6", href: "portfolio.html", side: 1, baseZ: -30 - STATION_GAP },
    { en: "CAMPUS LIFE", cn: "\u6821\u56ED\u751F\u6D3B", href: "campus.html", side: -1, baseZ: -30 - STATION_GAP * 2 },
    { en: "CONTACT", cn: "\u8054\u7CFB\u65B9\u5F0F", href: "contact.html", side: 1, baseZ: -30 - STATION_GAP * 3 }
  ].map((station) => ({ ...station, focusTravel: -11 - station.baseZ }));
  var STATION_CYCLE = STATION_GAP * stations.length;
  var STATION_FAR_Z = -STATION_CYCLE;
  var clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  var mod = (value, divisor) => (value % divisor + divisor) % divisor;
  var smoothstep = (min, max, value) => {
    const x2 = clamp((value - min) / (max - min), 0, 1);
    return x2 * x2 * (3 - 2 * x2);
  };
  var randomSeed = 281003;
  function random() {
    randomSeed = randomSeed * 16807 % 2147483647;
    return (randomSeed - 1) / 2147483646;
  }
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var lowPower = (navigator.hardwareConcurrency || 8) <= 4 || window.innerWidth < 720 && window.devicePixelRatio > 2;
  var reducedMotion = prefersReducedMotion.matches;
  var travel = 9;
  var velocity = 0;
  var driveTarget = null;
  var hoverPause = false;
  var activeIndex = 0;
  var lastFrame = performance.now();
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;
  var pointerTouchId = null;
  var previousTouchY = 0;
  var cursorTargetX = -100;
  var cursorTargetY = -100;
  var cursorX = -100;
  var cursorY = -100;
  var matrixContext = matrixCanvas?.getContext("2d", { alpha: true });
  var matrixStreams = [];
  var matrixCanvasWidth = 0;
  var matrixCanvasHeight = 0;
  var matrixPixelRatio = 1;
  var matrixColors = ["#826397", "#9b668f", "#765f9e", "#ad6d99"];
  function matrixStreamCount() {
    if (viewportWidth <= 640) return 18;
    return lowPower ? 29 : 38;
  }
  function createMatrixStream(index) {
    const side = index % 2 === 0 ? -1 : 1;
    const depthBand = [0.16, 0.5, 0.84][index % 3];
    const depth = clamp(depthBand + (random() - 0.5) * 0.14, 0.06, 0.96);
    const xBand = index % 6;
    const bandMin = 0.035 + xBand * 0.155;
    const bandMax = Math.min(0.965, bandMin + 0.105 + random() * 0.045);
    const length = 4 + Math.floor(random() * 8);
    const fontSize = 10 + depth * 4 + random() * 2;
    const spacing = fontSize * (1.24 + random() * 0.42);
    let characters = "";
    for (let character = 0; character < length; character += 1) {
      characters += random() > 0.5 ? "1" : "0";
    }
    return {
      side,
      depth,
      x: (bandMin + random() * (bandMax - bandMin)) * matrixCanvasWidth,
      y: random() * matrixCanvasHeight * 1.18 - matrixCanvasHeight * 0.18,
      length,
      characters,
      fontSize,
      spacing,
      speed: 8 + depth * 7 + random() * 4,
      alpha: depth > 0.72 ? 0.26 + random() * 0.04 : 0.13 + depth * 0.09 + random() * 0.02,
      sway: (random() - 0.5) * (2 + depth * 3),
      phase: random() * Math.PI * 2,
      color: matrixColors[index % matrixColors.length]
    };
  }
  function rebuildMatrixStreams() {
    matrixStreams.length = 0;
    if (!matrixContext) return;
    for (let index = 0; index < matrixStreamCount(); index += 1) {
      matrixStreams.push(createMatrixStream(index));
    }
  }
  function matrixVisibility(x2, y2) {
    const normalizedX = x2 / Math.max(matrixCanvasWidth, 1);
    const normalizedY = y2 / Math.max(matrixCanvasHeight, 1);
    const centerDistance = Math.abs(normalizedX - 0.5);
    const roadCorridor = 0.12 + normalizedY * 0.22;
    let visibility = 1;
    if (centerDistance < roadCorridor) {
      visibility = Math.min(visibility, 0.42 + smoothstep(0, roadCorridor, centerDistance) * 0.58);
    }
    if (normalizedX < 0.38 && normalizedY < 0.31) {
      visibility = Math.min(visibility, 0.4 + smoothstep(0, 0.31, normalizedY) * 0.6);
    }
    if (normalizedX > 0.75 && normalizedY < 0.62) {
      visibility = Math.min(visibility, 0.34 + smoothstep(0, 0.62, normalizedY) * 0.66);
    }
    if (normalizedY < 0.2) {
      visibility = Math.min(visibility, 0.4 + smoothstep(0, 0.2, normalizedY) * 0.6);
    }
    return clamp(visibility, 0, 1);
  }
  function drawMatrixBackground(timeSeconds, deltaSeconds) {
    if (!matrixContext || !matrixCanvasWidth || !matrixCanvasHeight) return;
    if (!reducedMotion) {
      matrixStreams.forEach((stream) => {
        stream.y += stream.speed * deltaSeconds;
        const cycleHeight = matrixCanvasHeight + stream.spacing * (stream.length + 2);
        if (stream.y > matrixCanvasHeight + stream.spacing) stream.y -= cycleHeight;
      });
    }
    matrixContext.clearRect(0, 0, matrixCanvasWidth, matrixCanvasHeight);
    matrixContext.textBaseline = "middle";
    matrixStreams.forEach((stream) => {
      const x2 = stream.x + Math.sin(timeSeconds * 0.18 + stream.phase) * stream.sway;
      matrixContext.font = `${Math.round(stream.fontSize)}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      matrixContext.fillStyle = stream.color;
      for (let character = 0; character < stream.length; character += 1) {
        const y2 = stream.y + character * stream.spacing;
        if (y2 < -stream.spacing || y2 > matrixCanvasHeight + stream.spacing) continue;
        const fadeFromEdges = smoothstep(-stream.spacing, stream.spacing * 1.5, y2) * (1 - smoothstep(matrixCanvasHeight - stream.spacing * 1.5, matrixCanvasHeight + stream.spacing, y2));
        const alpha = stream.alpha * fadeFromEdges * matrixVisibility(x2, y2);
        if (alpha < 8e-3) continue;
        matrixContext.globalAlpha = alpha;
        matrixContext.fillText(stream.characters[character], x2, y2);
      }
    });
    matrixContext.globalAlpha = 1;
  }
  function resizeMatrixBackground() {
    if (!matrixCanvas || !matrixContext) return;
    matrixCanvasWidth = viewportWidth;
    matrixCanvasHeight = viewportHeight;
    matrixPixelRatio = Math.min(window.devicePixelRatio || 1, lowPower ? 1.25 : 1.6);
    matrixCanvas.width = Math.round(matrixCanvasWidth * matrixPixelRatio);
    matrixCanvas.height = Math.round(matrixCanvasHeight * matrixPixelRatio);
    matrixCanvas.style.width = `${matrixCanvasWidth}px`;
    matrixCanvas.style.height = `${matrixCanvasHeight}px`;
    matrixContext.setTransform(matrixPixelRatio, 0, 0, matrixPixelRatio, 0, 0);
    rebuildMatrixStreams();
    drawMatrixBackground(0, 0);
  }
  var ROAD_WIDTH = 14;
  var ROAD_HALF = ROAD_WIDTH / 2;
  var ROAD_SEGMENT_LENGTH = 6;
  var ROAD_SEGMENT_COUNT = lowPower ? 28 : 38;
  var ROAD_POOL_LENGTH = ROAD_SEGMENT_LENGTH * ROAD_SEGMENT_COUNT;
  var NEAR_Z = 8;
  var ROAD_FADE_NEAR_Z = -24;
  var ROAD_FADE_FAR_Z = -70;
  var ROAD_FADE_FLOOR = 0.1;
  var ROAD_FADE_MIST_COLOR = "vec3(0.42, 0.34, 0.51)";
  var renderer;
  try {
    renderer = new Pa2({
      canvas,
      alpha: true,
      antialias: !lowPower,
      powerPreference: "high-performance"
    });
  } catch (error) {
    notice.hidden = false;
    journey.classList.add("is-webgl-unavailable");
    throw error;
  }
  renderer.setClearColor(0, 0);
  renderer.outputColorSpace = es;
  renderer.toneMapping = st;
  renderer.toneMappingExposure = 1.08;
  var scene = new Vr();
  scene.fog = new Nr(15391987, 66, 228);
  var camera = new eu(48, viewportWidth / viewportHeight, 0.1, 240);
  camera.position.set(0, 4.1, 11);
  var cameraTarget = new Ti(0, 1.15, -42);
  camera.lookAt(cameraTarget);
  scene.add(new Wc(16775167, 8280989, 1.8));
  var horizonLight = new nu(16760287, 4.2, 92, 1.4);
  horizonLight.position.set(0, 8, -54);
  scene.add(horizonLight);
  function makeRadialTexture(inner, outer) {
    const textureCanvas = document.createElement("canvas");
    textureCanvas.width = 256;
    textureCanvas.height = 256;
    const context = textureCanvas.getContext("2d");
    const gradient = context.createRadialGradient(128, 128, 4, 128, 128, 128);
    gradient.addColorStop(0, inner);
    gradient.addColorStop(0.42, outer);
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);
    const texture = new ch(textureCanvas);
    texture.colorSpace = es;
    return texture;
  }
  var horizonTexture = makeRadialTexture("rgba(255,250,224,.96)", "rgba(249,177,217,.26)");
  var horizonGlow = new la(new Gn({
    map: horizonTexture,
    transparent: true,
    opacity: 0.78,
    depthWrite: false,
    blending: g
  }));
  horizonGlow.position.set(0, 7.4, -65);
  horizonGlow.scale.set(31, 18, 1);
  scene.add(horizonGlow);
  function createStars() {
    const count = lowPower ? 90 : 170;
    const positions = new Float32Array(count * 3);
    for (let i2 = 0; i2 < count; i2 += 1) {
      positions[i2 * 3] = (random() - 0.5) * 130;
      positions[i2 * 3 + 1] = 5 + random() * 34;
      positions[i2 * 3 + 2] = -18 - random() * 180;
    }
    const geometry = new Wn();
    geometry.setAttribute("position", new Mn(positions, 3));
    const material = new Go({
      color: 16775935,
      size: lowPower ? 0.12 : 0.17,
      transparent: true,
      opacity: 0.58,
      depthWrite: false,
      sizeAttenuation: true
    });
    const points = new eh(geometry, material);
    points.renderOrder = -3;
    scene.add(points);
    return points;
  }
  var stars = createStars();
  var roadSegments = [];
  var roadPlaneGeometry = new Ol(ROAD_WIDTH, ROAD_SEGMENT_LENGTH + 0.08);
  var roadMaterial = new Ma({
    color: 5915511,
    transparent: true,
    opacity: 0.47,
    depthWrite: false,
    side: p,
    fog: true
  });
  function makeRoadSurfaceTexture() {
    const textureCanvas = document.createElement("canvas");
    textureCanvas.width = 256;
    textureCanvas.height = 512;
    const context = textureCanvas.getContext("2d");
    const sideGradient = context.createLinearGradient(0, 0, textureCanvas.width, 0);
    sideGradient.addColorStop(0, "rgba(60, 44, 92, .22)");
    sideGradient.addColorStop(0.2, "rgba(135, 99, 151, .08)");
    sideGradient.addColorStop(0.5, "rgba(255, 228, 245, .2)");
    sideGradient.addColorStop(0.8, "rgba(135, 99, 151, .08)");
    sideGradient.addColorStop(1, "rgba(60, 44, 92, .22)");
    context.fillStyle = sideGradient;
    context.fillRect(0, 0, textureCanvas.width, textureCanvas.height);
    const centerGlow = context.createRadialGradient(128, 88, 10, 128, 88, 210);
    centerGlow.addColorStop(0, "rgba(255, 240, 248, .18)");
    centerGlow.addColorStop(0.5, "rgba(226, 184, 222, .08)");
    centerGlow.addColorStop(1, "rgba(226, 184, 222, 0)");
    context.globalCompositeOperation = "screen";
    context.fillStyle = centerGlow;
    context.fillRect(0, 0, textureCanvas.width, textureCanvas.height);
    context.globalCompositeOperation = "source-over";
    for (let band = 30; band < textureCanvas.height; band += 72) {
      context.fillStyle = "rgba(255, 232, 246, .045)";
      context.fillRect(0, band, textureCanvas.width, 1);
    }
    const texture = new ch(textureCanvas);
    texture.colorSpace = es;
    texture.wrapT = mt;
    return texture;
  }
  var roadSurfaceMaterial = new Ma({
    map: makeRoadSurfaceTexture(),
    color: 16777215,
    transparent: true,
    opacity: 0.52,
    depthWrite: false,
    side: p,
    fog: true,
    toneMapped: false
  });
  var roadLineMaterial = new No({ color: 16107750, transparent: true, opacity: 0.58, depthWrite: false, fog: true });
  var roadEdgeMaterial = new No({ color: 15702991, transparent: true, opacity: 0.42, depthWrite: false, fog: true });
  var groundGridMaterial = new No({ color: 13874399, transparent: true, opacity: 0.19, depthWrite: false, fog: true });
  function applyRoadDepthFade(material) {
    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        "#include <common>",
        "#include <common>\nvarying float vRoadDepthFade;"
      ).replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
        vec4 roadWorldPosition = modelMatrix * vec4(transformed, 1.0);
        vRoadDepthFade = smoothstep(${ROAD_FADE_FAR_Z.toFixed(1)}, ${ROAD_FADE_NEAR_Z.toFixed(1)}, roadWorldPosition.z);`
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <common>",
        "#include <common>\nvarying float vRoadDepthFade;"
      ).replace(
        "#include <output_fragment>",
        `diffuseColor.rgb = mix(${ROAD_FADE_MIST_COLOR}, diffuseColor.rgb, vRoadDepthFade);
        diffuseColor.a *= ${ROAD_FADE_FLOOR.toFixed(2)} + (1.0 - ${ROAD_FADE_FLOOR.toFixed(2)}) * vRoadDepthFade;
        #include <output_fragment>`
      );
    };
    material.customProgramCacheKey = () => "road-depth-fade-v1";
    material.needsUpdate = true;
    return material;
  }
  applyRoadDepthFade(roadMaterial);
  applyRoadDepthFade(roadSurfaceMaterial);
  applyRoadDepthFade(roadLineMaterial);
  applyRoadDepthFade(roadEdgeMaterial);
  applyRoadDepthFade(groundGridMaterial);
  function createRoadSegment(index) {
    const group = new Tr();
    const plane = new Ra(roadPlaneGeometry, roadMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -0.04;
    plane.renderOrder = -1;
    group.add(plane);
    const surface = new Ra(roadPlaneGeometry, roadSurfaceMaterial);
    surface.rotation.x = -Math.PI / 2;
    surface.position.y = -0.015;
    surface.renderOrder = -0.5;
    group.add(surface);
    const crossGeometry = new Wn().setFromPoints([
      new Ti(-ROAD_HALF, 0.02, ROAD_SEGMENT_LENGTH / 2),
      new Ti(ROAD_HALF, 0.02, ROAD_SEGMENT_LENGTH / 2)
    ]);
    group.add(new Jo(crossGeometry, roadLineMaterial));
    const gridGeometry = new Wn().setFromPoints([
      new Ti(-31, 0.01, ROAD_SEGMENT_LENGTH / 2),
      new Ti(-ROAD_HALF - 0.2, 0.01, ROAD_SEGMENT_LENGTH / 2),
      new Ti(ROAD_HALF + 0.2, 0.01, ROAD_SEGMENT_LENGTH / 2),
      new Ti(31, 0.01, ROAD_SEGMENT_LENGTH / 2)
    ]);
    group.add(new Yo(gridGeometry, groundGridMaterial));
    group.userData.poolIndex = index;
    scene.add(group);
    roadSegments.push(group);
  }
  for (let i2 = 0; i2 < ROAD_SEGMENT_COUNT; i2 += 1) createRoadSegment(i2);
  var perspectiveLineGroup = new Tr();
  [-ROAD_HALF, ROAD_HALF].forEach((x2) => {
    const material = Math.abs(x2) === ROAD_HALF ? roadEdgeMaterial : groundGridMaterial;
    const geometry = new Wn().setFromPoints([
      new Ti(x2, 0.025, NEAR_Z),
      new Ti(x2, 0.025, -ROAD_POOL_LENGTH)
    ]);
    perspectiveLineGroup.add(new Jo(geometry, material));
  });
  scene.add(perspectiveLineGroup);
  var speedPointCount = lowPower ? 34 : 70;
  var speedPositions = new Float32Array(speedPointCount * 3);
  var speedSeeds = [];
  for (let i2 = 0; i2 < speedPointCount; i2 += 1) {
    speedSeeds.push({ x: (random() - 0.5) * 11.4, distance: random() * ROAD_POOL_LENGTH, y: 0.055 + random() * 0.08 });
  }
  var speedGeometry = new Wn();
  speedGeometry.setAttribute("position", new Mn(speedPositions, 3));
  var speedPoints = new eh(speedGeometry, new Go({
    color: 16764393,
    size: 0.085,
    transparent: true,
    opacity: 0.72,
    depthWrite: false,
    blending: g
  }));
  scene.add(speedPoints);
  var cityGroup = new Tr();
  cityGroup.position.z = -64;
  scene.add(cityGroup);
  function addOutlinedPart(parent, geometry, y2, color, opacity) {
    const mesh = new Ra(geometry, new Ma({
      color,
      transparent: true,
      opacity: opacity * 0.74,
      depthWrite: false,
      side: p,
      fog: true
    }));
    mesh.position.y = y2;
    const edges = new Yo(
      new Th(geometry, 18),
      new No({ color, transparent: true, opacity: opacity * 1.12, depthWrite: false, fog: false })
    );
    edges.position.y = y2;
    parent.add(mesh, edges);
  }
  function createTower({ x: x2, z: z2, height, radius, color, opacity, sides = 8, crown = "spire" }) {
    const tower = new Tr();
    tower.position.set(x2, 0, z2);
    const baseHeight = height * 0.7;
    addOutlinedPart(tower, new xh(radius * 0.58, radius, baseHeight, sides, 1, true), baseHeight / 2, color, opacity);
    addOutlinedPart(tower, new xh(radius * 0.28, radius * 0.6, height * 0.2, sides, 1, true), baseHeight + height * 0.1, color, opacity * 0.94);
    if (crown === "spire") {
      addOutlinedPart(tower, new bh(radius * 0.32, height * 0.22, sides, 1, true), height * 0.91, color, opacity);
    } else if (crown === "arc") {
      const ring = new Ra(
        new Vl(radius * 0.66, 0.055, 7, 30, Math.PI),
        new Ma({ color, transparent: true, opacity, depthWrite: false })
      );
      ring.position.y = height * 0.82;
      ring.rotation.z = Math.PI;
      tower.add(ring);
    } else {
      const halo = new Ra(
        new Vl(radius * 0.72, 0.045, 6, 32),
        new Ma({ color, transparent: true, opacity, depthWrite: false })
      );
      halo.position.y = height * 0.78;
      halo.rotation.x = Math.PI / 2;
      tower.add(halo);
    }
    const levelMaterial = new No({ color: 16109032, transparent: true, opacity: opacity * 0.78, depthWrite: false, fog: false });
    for (let level = 1; level < 5; level += 1) {
      const y2 = baseHeight / 5 * level;
      const ringRadius = radius * (1 - level * 0.055);
      const ring = new Zo(
        new Wn().setFromPoints(Array.from({ length: sides }, (_2, index) => {
          const angle = index / sides * Math.PI * 2;
          return new Ti(Math.cos(angle) * ringRadius, y2, Math.sin(angle) * ringRadius);
        })),
        levelMaterial
      );
      tower.add(ring);
    }
    cityGroup.add(tower);
    return tower;
  }
  var cityPalette = [15645148, 13218532, 12372201, 16771318];
  var cityTowers = [
    createTower({ x: 0, z: -3, height: 20, radius: 1.9, color: cityPalette[0], opacity: 0.34, sides: 8, crown: "spire" }),
    createTower({ x: -4.8, z: 1, height: 12, radius: 1.45, color: cityPalette[1], opacity: 0.29, sides: 7, crown: "halo" }),
    createTower({ x: 4.9, z: 0, height: 14, radius: 1.5, color: cityPalette[2], opacity: 0.29, sides: 8, crown: "arc" }),
    createTower({ x: -8.5, z: 6, height: 9.5, radius: 1.2, color: cityPalette[3], opacity: 0.24, sides: 6, crown: "arc" }),
    createTower({ x: 8.8, z: 7, height: 10.5, radius: 1.25, color: cityPalette[1], opacity: 0.24, sides: 7, crown: "halo" }),
    createTower({ x: -12.2, z: 11, height: 7, radius: 1.05, color: cityPalette[2], opacity: 0.2, sides: 6, crown: "spire" }),
    createTower({ x: 12.4, z: 10, height: 7.8, radius: 1.05, color: cityPalette[0], opacity: 0.21, sides: 8, crown: "spire" })
  ];
  function addBridge(fromTower, toTower, y2) {
    const start = fromTower.position.clone().add(new Ti(0, y2, 0));
    const end = toTower.position.clone().add(new Ti(0, y2, 0));
    const mid = start.clone().lerp(end, 0.5).add(new Ti(0, 0.55, 0));
    const curve = new qh(start, mid, end);
    const bridge = new Jo(
      new Wn().setFromPoints(curve.getPoints(28)),
      new No({ color: 14264783, transparent: true, opacity: 0.3, depthWrite: false, fog: false })
    );
    cityGroup.add(bridge);
  }
  addBridge(cityTowers[1], cityTowers[0], 7.6);
  addBridge(cityTowers[0], cityTowers[2], 8.4);
  addBridge(cityTowers[3], cityTowers[1], 5.3);
  addBridge(cityTowers[2], cityTowers[4], 5.8);
  var cityHaze = new la(new Gn({
    map: makeRadialTexture("rgba(255,226,244,.72)", "rgba(198,151,214,.15)"),
    transparent: true,
    opacity: 0.54,
    depthWrite: false
  }));
  cityHaze.position.set(0, 2.2, 8);
  cityHaze.scale.set(72, 12, 1);
  cityGroup.add(cityHaze);
  var stationObjects = [];
  function createStationObject(station, index) {
    const group = new Tr();
    const anchor = new Ar();
    anchor.position.y = 3.05;
    group.add(anchor);
    group.position.z = station.baseZ;
    group.userData.anchor = anchor;
    group.userData.stationIndex = index;
    scene.add(group);
    stationObjects.push(group);
  }
  stations.forEach(createStationObject);
  var projected = new Ti();
  var worldPosition = new Ti();
  function updateRoad() {
    const roadPhase = mod(travel, ROAD_POOL_LENGTH);
    roadSegments.forEach((segment) => {
      const distance = mod(segment.userData.poolIndex * ROAD_SEGMENT_LENGTH - roadPhase, ROAD_POOL_LENGTH);
      segment.position.z = NEAR_Z - distance - ROAD_SEGMENT_LENGTH / 2;
    });
    speedSeeds.forEach((seed, index) => {
      const distance = mod(seed.distance - roadPhase, ROAD_POOL_LENGTH);
      speedPositions[index * 3] = seed.x;
      speedPositions[index * 3 + 1] = seed.y;
      speedPositions[index * 3 + 2] = NEAR_Z - distance;
    });
    speedGeometry.attributes.position.needsUpdate = true;
  }
  function updateStations() {
    let nearestIndex = 0;
    let nearestDistance = Infinity;
    const signX = viewportWidth <= 640 ? 3.8 : viewportWidth <= 900 ? 7.1 : 9.4;
    stationObjects.forEach((object, index) => {
      const station = stations[index];
      object.position.x = station.side * signX;
      const worldZ = station.baseZ + travel;
      object.position.z = STATION_FAR_Z + mod(worldZ - STATION_FAR_Z, STATION_CYCLE);
      object.updateMatrixWorld();
      object.userData.anchor.getWorldPosition(worldPosition);
      projected.copy(worldPosition).project(camera);
      const depth = camera.position.z - worldPosition.z;
      const screenX = (projected.x * 0.5 + 0.5) * viewportWidth;
      const screenY = (-projected.y * 0.5 + 0.5) * viewportHeight;
      const perspectiveScale = clamp(21 / depth, 0.15, 1.16);
      const farFade = smoothstep(-150, -76, worldPosition.z);
      const nearFade = 1 - smoothstep(3.2, 8.5, worldPosition.z);
      const edgeFade = 1 - smoothstep(0.88, 1.18, Math.abs(projected.x));
      const opacity = clamp(farFade * nearFade * edgeFade, 0, 1);
      const visible = depth > 2 && projected.z > -1 && projected.z < 1 && opacity > 0.02;
      const readable = visible && perspectiveScale > 0.58 && opacity > 0.58;
      const card = stationCards[index];
      card.style.opacity = visible ? opacity.toFixed(3) : "0";
      card.style.transform = `translate3d(${screenX.toFixed(1)}px, ${screenY.toFixed(1)}px, 0) translate(-50%, -50%) scale(${perspectiveScale.toFixed(3)}) rotate(${station.side * 1.25}deg)`;
      card.style.zIndex = String(Math.round(1200 - depth));
      card.classList.toggle("is-readable", readable);
      card.setAttribute("aria-hidden", visible ? "false" : "true");
      card.tabIndex = readable ? 0 : -1;
      card.dataset.worldX = object.position.x.toFixed(2);
      card.dataset.worldY = object.userData.anchor.position.y.toFixed(2);
      card.dataset.worldZ = object.position.z.toFixed(2);
      const distanceToFocus = Math.abs(
        mod(travel - station.focusTravel + STATION_CYCLE / 2, STATION_CYCLE) - STATION_CYCLE / 2
      );
      if (distanceToFocus < nearestDistance) {
        nearestDistance = distanceToFocus;
        nearestIndex = index;
      }
    });
    if (nearestIndex !== activeIndex) activeIndex = nearestIndex;
    navButtons.forEach((button, index) => {
      const listItem = button.closest("li");
      const isActive = index === activeIndex;
      listItem.classList.toggle("is-active", isActive);
      if (isActive) button.setAttribute("aria-current", "step");
      else button.removeAttribute("aria-current");
    });
    const displayIndex = String(activeIndex + 1).padStart(2, "0");
    routeCount.textContent = `${displayIndex} / ${String(stations.length).padStart(2, "0")}`;
    statusIndex.textContent = displayIndex;
    statusName.textContent = stations[activeIndex].en;
    statusProgress.style.width = `${(mod(travel, STATION_CYCLE) / STATION_CYCLE * 100).toFixed(2)}%`;
  }
  function nextStationFocus(index) {
    const stationFocus = stations[index].focusTravel;
    const cyclesAhead = Math.max(0, Math.ceil((travel - stationFocus) / STATION_CYCLE));
    return stationFocus + cyclesAhead * STATION_CYCLE;
  }
  function updateDrive(deltaSeconds) {
    if (reducedMotion) {
      velocity = 0;
      return;
    }
    if (driveTarget !== null) {
      const difference = driveTarget - travel;
      const targetVelocity = clamp(difference * 1.55, -26, 34);
      const response = 1 - Math.exp(-5.4 * deltaSeconds);
      velocity += (targetVelocity - velocity) * response;
      if (Math.abs(difference) < 0.045 && Math.abs(velocity) < 0.12) {
        travel = driveTarget;
        velocity = 0;
        driveTarget = null;
      }
    } else {
      velocity *= Math.exp(-(hoverPause ? 9.5 : 2.25) * deltaSeconds);
    }
    velocity = clamp(velocity, -26, 36);
    travel += velocity * deltaSeconds;
  }
  function animate(now) {
    const deltaSeconds = Math.min(0.05, Math.max(1e-3, (now - lastFrame) / 1e3));
    lastFrame = now;
    updateDrive(deltaSeconds);
    updateRoad();
    updateStations();
    drawMatrixBackground(now / 1e3, deltaSeconds);
    cityGroup.position.z = -64 + travel * 0.014;
    stars.position.z = travel * 0.018;
    const speedRatio = clamp(Math.abs(velocity) / 30, 0, 1);
    const bob = reducedMotion ? 0 : Math.sin(now * 85e-4) * speedRatio * 1.4;
    journey.style.setProperty("--car-bob", `${bob.toFixed(2)}px`);
    journey.style.setProperty("--speed-glow", (0.36 + speedRatio * 0.34).toFixed(3));
    journey.dataset.travel = travel.toFixed(3);
    journey.dataset.velocity = velocity.toFixed(3);
    cursorX += (cursorTargetX - cursorX) * 0.24;
    cursorY += (cursorTargetY - cursorY) * 0.24;
    cursorOrb.style.setProperty("--cursor-x", `${cursorX.toFixed(1)}px`);
    cursorOrb.style.setProperty("--cursor-y", `${cursorY.toFixed(1)}px`);
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  }
  function resize() {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    camera.aspect = viewportWidth / viewportHeight;
    camera.fov = viewportWidth <= 640 ? 56 : viewportWidth <= 900 ? 51 : 48;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1.25 : 1.8));
    renderer.setSize(viewportWidth, viewportHeight, false);
    resizeMatrixBackground();
  }
  function setReducedMotion(value) {
    reducedMotion = value;
    if (reducedMotion) {
      velocity = 0;
      driveTarget = null;
    }
    document.body.classList.toggle("is-reduced-motion", reducedMotion);
    motionToggle.setAttribute("aria-pressed", String(reducedMotion));
    motionToggle.textContent = reducedMotion ? "MOTION REDUCED" : "REDUCE MOTION";
  }
  journey.addEventListener("wheel", (event) => {
    event.preventDefault();
    hoverPause = false;
    driveTarget = null;
    if (reducedMotion) {
      travel += event.deltaY * 0.035;
      return;
    }
    velocity = clamp(velocity + event.deltaY * 0.065, -24, 36);
  }, { passive: false });
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.routeIndex);
      hoverPause = false;
      const target = nextStationFocus(index);
      if (reducedMotion) travel = target;
      else driveTarget = target;
    });
  });
  stationCards.forEach((card) => {
    const startPause = () => {
      if (!card.classList.contains("is-readable")) return;
      hoverPause = true;
      cursorOrb.classList.add("is-hovering");
    };
    const endPause = () => {
      hoverPause = false;
      cursorOrb.classList.remove("is-hovering");
    };
    card.addEventListener("pointerenter", startPause);
    card.addEventListener("pointerleave", endPause);
    card.addEventListener("focus", startPause);
    card.addEventListener("blur", endPause);
  });
  document.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;
    cursorTargetX = event.clientX;
    cursorTargetY = event.clientY;
    cursorOrb.classList.add("is-visible");
  });
  journey.addEventListener("pointerleave", () => cursorOrb.classList.remove("is-visible", "is-hovering"));
  window.addEventListener("blur", () => cursorOrb.classList.remove("is-visible", "is-hovering"));
  journey.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse") return;
    pointerTouchId = event.pointerId;
    previousTouchY = event.clientY;
    journey.setPointerCapture?.(event.pointerId);
  });
  journey.addEventListener("pointermove", (event) => {
    if (event.pointerId !== pointerTouchId) return;
    const deltaY = previousTouchY - event.clientY;
    previousTouchY = event.clientY;
    driveTarget = null;
    if (reducedMotion) travel += deltaY * 0.045;
    else velocity = clamp(velocity + deltaY * 0.04, -20, 32);
  });
  journey.addEventListener("pointerup", (event) => {
    if (event.pointerId === pointerTouchId) pointerTouchId = null;
  });
  journey.addEventListener("pointercancel", () => {
    pointerTouchId = null;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "PageDown" && event.key !== "PageUp") return;
    if (event.target instanceof Element && event.target.closest("a, button") && !event.target.closest(".journey")) return;
    event.preventDefault();
    const direction = event.key === "ArrowDown" || event.key === "PageDown" ? 1 : -1;
    driveTarget = null;
    if (reducedMotion) travel += direction * 4;
    else velocity = clamp(velocity + direction * 8, -24, 36);
  });
  motionToggle.addEventListener("click", () => setReducedMotion(!reducedMotion));
  prefersReducedMotion.addEventListener?.("change", (event) => setReducedMotion(event.matches));
  window.addEventListener("resize", resize, { passive: true });
  resize();
  setReducedMotion(reducedMotion);
  updateRoad();
  updateStations();
  window.requestAnimationFrame(animate);
})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
