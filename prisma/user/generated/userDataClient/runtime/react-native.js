"use strict";
var ea = Object.create;
var Qt = Object.defineProperty;
var ta = Object.getOwnPropertyDescriptor;
var ra = Object.getOwnPropertyNames;
var na = Object.getPrototypeOf,
  ia = Object.prototype.hasOwnProperty;
var Se = (e, t) => () => (e && (t = e((e = 0))), t);
var ce = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Ye = (e, t) => {
    for (var r in t) Qt(e, r, { get: t[r], enumerable: !0 });
  },
  jn = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of ra(t))
        !ia.call(e, i) &&
          i !== r &&
          Qt(e, i, {
            get: () => t[i],
            enumerable: !(n = ta(t, i)) || n.enumerable,
          });
    return e;
  };
var fe = (e, t, r) => (
    (r = e != null ? ea(na(e)) : {}),
    jn(
      t || !e || !e.__esModule
        ? Qt(r, "default", { value: e, enumerable: !0 })
        : r,
      e,
    )
  ),
  Dr = (e) => jn(Qt({}, "__esModule", { value: !0 }), e);
var y,
  c = Se(() => {
    "use strict";
    y = {
      nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      },
      env: {},
      version: "",
      cwd: () => "/",
      stderr: {},
      argv: ["/bin/node"],
    };
  });
var x,
  p = Se(() => {
    "use strict";
    x =
      globalThis.performance ??
      (() => {
        let e = Date.now();
        return { now: () => Date.now() - e };
      })();
  });
var E,
  f = Se(() => {
    "use strict";
    E = () => {};
    E.prototype = E;
  });
var b,
  d = Se(() => {
    "use strict";
    b = class {
      constructor(t) {
        this.value = t;
      }
      deref() {
        return this.value;
      }
    };
  });
var oi = ce((tt) => {
  "use strict";
  m();
  c();
  p();
  f();
  d();
  var Jn = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    oa = Jn((e) => {
      "use strict";
      (e.byteLength = l), (e.toByteArray = g), (e.fromByteArray = R);
      var t = [],
        r = [],
        n = typeof Uint8Array < "u" ? Uint8Array : Array,
        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (o = 0, s = i.length; o < s; ++o)
        (t[o] = i[o]), (r[i.charCodeAt(o)] = o);
      var o, s;
      (r[45] = 62), (r[95] = 63);
      function a(C) {
        var A = C.length;
        if (A % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var F = C.indexOf("=");
        F === -1 && (F = A);
        var L = F === A ? 0 : 4 - (F % 4);
        return [F, L];
      }
      function l(C) {
        var A = a(C),
          F = A[0],
          L = A[1];
        return ((F + L) * 3) / 4 - L;
      }
      function u(C, A, F) {
        return ((A + F) * 3) / 4 - F;
      }
      function g(C) {
        var A,
          F = a(C),
          L = F[0],
          N = F[1],
          M = new n(u(C, L, N)),
          k = 0,
          z = N > 0 ? L - 4 : L,
          j;
        for (j = 0; j < z; j += 4)
          (A =
            (r[C.charCodeAt(j)] << 18) |
            (r[C.charCodeAt(j + 1)] << 12) |
            (r[C.charCodeAt(j + 2)] << 6) |
            r[C.charCodeAt(j + 3)]),
            (M[k++] = (A >> 16) & 255),
            (M[k++] = (A >> 8) & 255),
            (M[k++] = A & 255);
        return (
          N === 2 &&
            ((A = (r[C.charCodeAt(j)] << 2) | (r[C.charCodeAt(j + 1)] >> 4)),
            (M[k++] = A & 255)),
          N === 1 &&
            ((A =
              (r[C.charCodeAt(j)] << 10) |
              (r[C.charCodeAt(j + 1)] << 4) |
              (r[C.charCodeAt(j + 2)] >> 2)),
            (M[k++] = (A >> 8) & 255),
            (M[k++] = A & 255)),
          M
        );
      }
      function h(C) {
        return (
          t[(C >> 18) & 63] + t[(C >> 12) & 63] + t[(C >> 6) & 63] + t[C & 63]
        );
      }
      function v(C, A, F) {
        for (var L, N = [], M = A; M < F; M += 3)
          (L =
            ((C[M] << 16) & 16711680) +
            ((C[M + 1] << 8) & 65280) +
            (C[M + 2] & 255)),
            N.push(h(L));
        return N.join("");
      }
      function R(C) {
        for (
          var A, F = C.length, L = F % 3, N = [], M = 16383, k = 0, z = F - L;
          k < z;
          k += M
        )
          N.push(v(C, k, k + M > z ? z : k + M));
        return (
          L === 1
            ? ((A = C[F - 1]), N.push(t[A >> 2] + t[(A << 4) & 63] + "=="))
            : L === 2 &&
              ((A = (C[F - 2] << 8) + C[F - 1]),
              N.push(t[A >> 10] + t[(A >> 4) & 63] + t[(A << 2) & 63] + "=")),
          N.join("")
        );
      }
    }),
    sa = Jn((e) => {
      (e.read = function (t, r, n, i, o) {
        var s,
          a,
          l = o * 8 - i - 1,
          u = (1 << l) - 1,
          g = u >> 1,
          h = -7,
          v = n ? o - 1 : 0,
          R = n ? -1 : 1,
          C = t[r + v];
        for (
          v += R, s = C & ((1 << -h) - 1), C >>= -h, h += l;
          h > 0;
          s = s * 256 + t[r + v], v += R, h -= 8
        );
        for (
          a = s & ((1 << -h) - 1), s >>= -h, h += i;
          h > 0;
          a = a * 256 + t[r + v], v += R, h -= 8
        );
        if (s === 0) s = 1 - g;
        else {
          if (s === u) return a ? NaN : (C ? -1 : 1) * (1 / 0);
          (a = a + Math.pow(2, i)), (s = s - g);
        }
        return (C ? -1 : 1) * a * Math.pow(2, s - i);
      }),
        (e.write = function (t, r, n, i, o, s) {
          var a,
            l,
            u,
            g = s * 8 - o - 1,
            h = (1 << g) - 1,
            v = h >> 1,
            R = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            C = i ? 0 : s - 1,
            A = i ? 1 : -1,
            F = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? ((l = isNaN(r) ? 1 : 0), (a = h))
                : ((a = Math.floor(Math.log(r) / Math.LN2)),
                  r * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                  a + v >= 1 ? (r += R / u) : (r += R * Math.pow(2, 1 - v)),
                  r * u >= 2 && (a++, (u /= 2)),
                  a + v >= h
                    ? ((l = 0), (a = h))
                    : a + v >= 1
                      ? ((l = (r * u - 1) * Math.pow(2, o)), (a = a + v))
                      : ((l = r * Math.pow(2, v - 1) * Math.pow(2, o)),
                        (a = 0)));
            o >= 8;
            t[n + C] = l & 255, C += A, l /= 256, o -= 8
          );
          for (
            a = (a << o) | l, g += o;
            g > 0;
            t[n + C] = a & 255, C += A, a /= 256, g -= 8
          );
          t[n + C - A] |= F * 128;
        });
    }),
    Br = oa(),
    Xe = sa(),
    Un =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  tt.Buffer = T;
  tt.SlowBuffer = fa;
  tt.INSPECT_MAX_BYTES = 50;
  var Jt = 2147483647;
  tt.kMaxLength = Jt;
  T.TYPED_ARRAY_SUPPORT = aa();
  !T.TYPED_ARRAY_SUPPORT &&
    typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
    );
  function aa() {
    try {
      let e = new Uint8Array(1),
        t = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(t, Uint8Array.prototype),
        Object.setPrototypeOf(e, t),
        e.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(T.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (T.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(T.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (T.isBuffer(this)) return this.byteOffset;
    },
  });
  function Re(e) {
    if (e > Jt)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
    let t = new Uint8Array(e);
    return Object.setPrototypeOf(t, T.prototype), t;
  }
  function T(e, t, r) {
    if (typeof e == "number") {
      if (typeof t == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number',
        );
      return Ur(e);
    }
    return Wn(e, t, r);
  }
  T.poolSize = 8192;
  function Wn(e, t, r) {
    if (typeof e == "string") return ua(e, t);
    if (ArrayBuffer.isView(e)) return ca(e);
    if (e == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof e,
      );
    if (
      ye(e, ArrayBuffer) ||
      (e && ye(e.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (ye(e, SharedArrayBuffer) || (e && ye(e.buffer, SharedArrayBuffer))))
    )
      return Hn(e, t, r);
    if (typeof e == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number',
      );
    let n = e.valueOf && e.valueOf();
    if (n != null && n !== e) return T.from(n, t, r);
    let i = pa(e);
    if (i) return i;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof e[Symbol.toPrimitive] == "function"
    )
      return T.from(e[Symbol.toPrimitive]("string"), t, r);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof e,
    );
  }
  T.from = function (e, t, r) {
    return Wn(e, t, r);
  };
  Object.setPrototypeOf(T.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(T, Uint8Array);
  function Gn(e) {
    if (typeof e != "number")
      throw new TypeError('"size" argument must be of type number');
    if (e < 0)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
  }
  function la(e, t, r) {
    return (
      Gn(e),
      e <= 0
        ? Re(e)
        : t !== void 0
          ? typeof r == "string"
            ? Re(e).fill(t, r)
            : Re(e).fill(t)
          : Re(e)
    );
  }
  T.alloc = function (e, t, r) {
    return la(e, t, r);
  };
  function Ur(e) {
    return Gn(e), Re(e < 0 ? 0 : qr(e) | 0);
  }
  T.allocUnsafe = function (e) {
    return Ur(e);
  };
  T.allocUnsafeSlow = function (e) {
    return Ur(e);
  };
  function ua(e, t) {
    if (((typeof t != "string" || t === "") && (t = "utf8"), !T.isEncoding(t)))
      throw new TypeError("Unknown encoding: " + t);
    let r = Kn(e, t) | 0,
      n = Re(r),
      i = n.write(e, t);
    return i !== r && (n = n.slice(0, i)), n;
  }
  function $r(e) {
    let t = e.length < 0 ? 0 : qr(e.length) | 0,
      r = Re(t);
    for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
    return r;
  }
  function ca(e) {
    if (ye(e, Uint8Array)) {
      let t = new Uint8Array(e);
      return Hn(t.buffer, t.byteOffset, t.byteLength);
    }
    return $r(e);
  }
  function Hn(e, t, r) {
    if (t < 0 || e.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < t + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return (
      t === void 0 && r === void 0
        ? (n = new Uint8Array(e))
        : r === void 0
          ? (n = new Uint8Array(e, t))
          : (n = new Uint8Array(e, t, r)),
      Object.setPrototypeOf(n, T.prototype),
      n
    );
  }
  function pa(e) {
    if (T.isBuffer(e)) {
      let t = qr(e.length) | 0,
        r = Re(t);
      return r.length === 0 || e.copy(r, 0, 0, t), r;
    }
    if (e.length !== void 0)
      return typeof e.length != "number" || Qr(e.length) ? Re(0) : $r(e);
    if (e.type === "Buffer" && Array.isArray(e.data)) return $r(e.data);
  }
  function qr(e) {
    if (e >= Jt)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          Jt.toString(16) +
          " bytes",
      );
    return e | 0;
  }
  function fa(e) {
    return +e != e && (e = 0), T.alloc(+e);
  }
  T.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== T.prototype;
  };
  T.compare = function (e, t) {
    if (
      (ye(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)),
      ye(t, Uint8Array) && (t = T.from(t, t.offset, t.byteLength)),
      !T.isBuffer(e) || !T.isBuffer(t))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
      );
    if (e === t) return 0;
    let r = e.length,
      n = t.length;
    for (let i = 0, o = Math.min(r, n); i < o; ++i)
      if (e[i] !== t[i]) {
        (r = e[i]), (n = t[i]);
        break;
      }
    return r < n ? -1 : n < r ? 1 : 0;
  };
  T.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  };
  T.concat = function (e, t) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0) return T.alloc(0);
    let r;
    if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
    let n = T.allocUnsafe(t),
      i = 0;
    for (r = 0; r < e.length; ++r) {
      let o = e[r];
      if (ye(o, Uint8Array))
        i + o.length > n.length
          ? (T.isBuffer(o) || (o = T.from(o)), o.copy(n, i))
          : Uint8Array.prototype.set.call(n, o, i);
      else if (T.isBuffer(o)) o.copy(n, i);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      i += o.length;
    }
    return n;
  };
  function Kn(e, t) {
    if (T.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || ye(e, ArrayBuffer)) return e.byteLength;
    if (typeof e != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof e,
      );
    let r = e.length,
      n = arguments.length > 2 && arguments[2] === !0;
    if (!n && r === 0) return 0;
    let i = !1;
    for (;;)
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return jr(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return ii(e).length;
        default:
          if (i) return n ? -1 : jr(e).length;
          (t = ("" + t).toLowerCase()), (i = !0);
      }
  }
  T.byteLength = Kn;
  function da(e, t, r) {
    let n = !1;
    if (
      ((t === void 0 || t < 0) && (t = 0),
      t > this.length ||
        ((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
        ((r >>>= 0), (t >>>= 0), r <= t))
    )
      return "";
    for (e || (e = "utf8"); ; )
      switch (e) {
        case "hex":
          return Pa(this, t, r);
        case "utf8":
        case "utf-8":
          return Yn(this, t, r);
        case "ascii":
          return xa(this, t, r);
        case "latin1":
        case "binary":
          return va(this, t, r);
        case "base64":
          return ba(this, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ta(this, t, r);
        default:
          if (n) throw new TypeError("Unknown encoding: " + e);
          (e = (e + "").toLowerCase()), (n = !0);
      }
  }
  T.prototype._isBuffer = !0;
  function qe(e, t, r) {
    let n = e[t];
    (e[t] = e[r]), (e[r] = n);
  }
  T.prototype.swap16 = function () {
    let e = this.length;
    if (e % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < e; t += 2) qe(this, t, t + 1);
    return this;
  };
  T.prototype.swap32 = function () {
    let e = this.length;
    if (e % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < e; t += 4) qe(this, t, t + 3), qe(this, t + 1, t + 2);
    return this;
  };
  T.prototype.swap64 = function () {
    let e = this.length;
    if (e % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < e; t += 8)
      qe(this, t, t + 7),
        qe(this, t + 1, t + 6),
        qe(this, t + 2, t + 5),
        qe(this, t + 3, t + 4);
    return this;
  };
  T.prototype.toString = function () {
    let e = this.length;
    return e === 0
      ? ""
      : arguments.length === 0
        ? Yn(this, 0, e)
        : da.apply(this, arguments);
  };
  T.prototype.toLocaleString = T.prototype.toString;
  T.prototype.equals = function (e) {
    if (!T.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : T.compare(this, e) === 0;
  };
  T.prototype.inspect = function () {
    let e = "",
      t = tt.INSPECT_MAX_BYTES;
    return (
      (e = this.toString("hex", 0, t)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > t && (e += " ... "),
      "<Buffer " + e + ">"
    );
  };
  Un && (T.prototype[Un] = T.prototype.inspect);
  T.prototype.compare = function (e, t, r, n, i) {
    if (
      (ye(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)),
      !T.isBuffer(e))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof e,
      );
    if (
      (t === void 0 && (t = 0),
      r === void 0 && (r = e ? e.length : 0),
      n === void 0 && (n = 0),
      i === void 0 && (i = this.length),
      t < 0 || r > e.length || n < 0 || i > this.length)
    )
      throw new RangeError("out of range index");
    if (n >= i && t >= r) return 0;
    if (n >= i) return -1;
    if (t >= r) return 1;
    if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e)) return 0;
    let o = i - n,
      s = r - t,
      a = Math.min(o, s),
      l = this.slice(n, i),
      u = e.slice(t, r);
    for (let g = 0; g < a; ++g)
      if (l[g] !== u[g]) {
        (o = l[g]), (s = u[g]);
        break;
      }
    return o < s ? -1 : s < o ? 1 : 0;
  };
  function zn(e, t, r, n, i) {
    if (e.length === 0) return -1;
    if (
      (typeof r == "string"
        ? ((n = r), (r = 0))
        : r > 2147483647
          ? (r = 2147483647)
          : r < -2147483648 && (r = -2147483648),
      (r = +r),
      Qr(r) && (r = i ? 0 : e.length - 1),
      r < 0 && (r = e.length + r),
      r >= e.length)
    ) {
      if (i) return -1;
      r = e.length - 1;
    } else if (r < 0)
      if (i) r = 0;
      else return -1;
    if ((typeof t == "string" && (t = T.from(t, n)), T.isBuffer(t)))
      return t.length === 0 ? -1 : qn(e, t, r, n, i);
    if (typeof t == "number")
      return (
        (t = t & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? i
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : qn(e, [t], r, n, i)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function qn(e, t, r, n, i) {
    let o = 1,
      s = e.length,
      a = t.length;
    if (
      n !== void 0 &&
      ((n = String(n).toLowerCase()),
      n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")
    ) {
      if (e.length < 2 || t.length < 2) return -1;
      (o = 2), (s /= 2), (a /= 2), (r /= 2);
    }
    function l(g, h) {
      return o === 1 ? g[h] : g.readUInt16BE(h * o);
    }
    let u;
    if (i) {
      let g = -1;
      for (u = r; u < s; u++)
        if (l(e, u) === l(t, g === -1 ? 0 : u - g)) {
          if ((g === -1 && (g = u), u - g + 1 === a)) return g * o;
        } else g !== -1 && (u -= u - g), (g = -1);
    } else
      for (r + a > s && (r = s - a), u = r; u >= 0; u--) {
        let g = !0;
        for (let h = 0; h < a; h++)
          if (l(e, u + h) !== l(t, h)) {
            g = !1;
            break;
          }
        if (g) return u;
      }
    return -1;
  }
  T.prototype.includes = function (e, t, r) {
    return this.indexOf(e, t, r) !== -1;
  };
  T.prototype.indexOf = function (e, t, r) {
    return zn(this, e, t, r, !0);
  };
  T.prototype.lastIndexOf = function (e, t, r) {
    return zn(this, e, t, r, !1);
  };
  function ma(e, t, r, n) {
    r = Number(r) || 0;
    let i = e.length - r;
    n ? ((n = Number(n)), n > i && (n = i)) : (n = i);
    let o = t.length;
    n > o / 2 && (n = o / 2);
    let s;
    for (s = 0; s < n; ++s) {
      let a = parseInt(t.substr(s * 2, 2), 16);
      if (Qr(a)) return s;
      e[r + s] = a;
    }
    return s;
  }
  function ga(e, t, r, n) {
    return Wt(jr(t, e.length - r), e, r, n);
  }
  function ha(e, t, r, n) {
    return Wt(Ra(t), e, r, n);
  }
  function ya(e, t, r, n) {
    return Wt(ii(t), e, r, n);
  }
  function wa(e, t, r, n) {
    return Wt(ka(t, e.length - r), e, r, n);
  }
  T.prototype.write = function (e, t, r, n) {
    if (t === void 0) (n = "utf8"), (r = this.length), (t = 0);
    else if (r === void 0 && typeof t == "string")
      (n = t), (r = this.length), (t = 0);
    else if (isFinite(t))
      (t = t >>> 0),
        isFinite(r)
          ? ((r = r >>> 0), n === void 0 && (n = "utf8"))
          : ((n = r), (r = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported",
      );
    let i = this.length - t;
    if (
      ((r === void 0 || r > i) && (r = i),
      (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    let o = !1;
    for (;;)
      switch (n) {
        case "hex":
          return ma(this, e, t, r);
        case "utf8":
        case "utf-8":
          return ga(this, e, t, r);
        case "ascii":
        case "latin1":
        case "binary":
          return ha(this, e, t, r);
        case "base64":
          return ya(this, e, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return wa(this, e, t, r);
        default:
          if (o) throw new TypeError("Unknown encoding: " + n);
          (n = ("" + n).toLowerCase()), (o = !0);
      }
  };
  T.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function ba(e, t, r) {
    return t === 0 && r === e.length
      ? Br.fromByteArray(e)
      : Br.fromByteArray(e.slice(t, r));
  }
  function Yn(e, t, r) {
    r = Math.min(e.length, r);
    let n = [],
      i = t;
    for (; i < r; ) {
      let o = e[i],
        s = null,
        a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
      if (i + a <= r) {
        let l, u, g, h;
        switch (a) {
          case 1:
            o < 128 && (s = o);
            break;
          case 2:
            (l = e[i + 1]),
              (l & 192) === 128 &&
                ((h = ((o & 31) << 6) | (l & 63)), h > 127 && (s = h));
            break;
          case 3:
            (l = e[i + 1]),
              (u = e[i + 2]),
              (l & 192) === 128 &&
                (u & 192) === 128 &&
                ((h = ((o & 15) << 12) | ((l & 63) << 6) | (u & 63)),
                h > 2047 && (h < 55296 || h > 57343) && (s = h));
            break;
          case 4:
            (l = e[i + 1]),
              (u = e[i + 2]),
              (g = e[i + 3]),
              (l & 192) === 128 &&
                (u & 192) === 128 &&
                (g & 192) === 128 &&
                ((h =
                  ((o & 15) << 18) |
                  ((l & 63) << 12) |
                  ((u & 63) << 6) |
                  (g & 63)),
                h > 65535 && h < 1114112 && (s = h));
        }
      }
      s === null
        ? ((s = 65533), (a = 1))
        : s > 65535 &&
          ((s -= 65536),
          n.push(((s >>> 10) & 1023) | 55296),
          (s = 56320 | (s & 1023))),
        n.push(s),
        (i += a);
    }
    return Ea(n);
  }
  var Vn = 4096;
  function Ea(e) {
    let t = e.length;
    if (t <= Vn) return String.fromCharCode.apply(String, e);
    let r = "",
      n = 0;
    for (; n < t; )
      r += String.fromCharCode.apply(String, e.slice(n, (n += Vn)));
    return r;
  }
  function xa(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i] & 127);
    return n;
  }
  function va(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
    return n;
  }
  function Pa(e, t, r) {
    let n = e.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
    let i = "";
    for (let o = t; o < r; ++o) i += Oa[e[o]];
    return i;
  }
  function Ta(e, t, r) {
    let n = e.slice(t, r),
      i = "";
    for (let o = 0; o < n.length - 1; o += 2)
      i += String.fromCharCode(n[o] + n[o + 1] * 256);
    return i;
  }
  T.prototype.slice = function (e, t) {
    let r = this.length;
    (e = ~~e),
      (t = t === void 0 ? r : ~~t),
      e < 0 ? ((e += r), e < 0 && (e = 0)) : e > r && (e = r),
      t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
      t < e && (t = e);
    let n = this.subarray(e, t);
    return Object.setPrototypeOf(n, T.prototype), n;
  };
  function W(e, t, r) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > r)
      throw new RangeError("Trying to access beyond buffer length");
  }
  T.prototype.readUintLE = T.prototype.readUIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = this[e],
      i = 1,
      o = 0;
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
    return n;
  };
  T.prototype.readUintBE = T.prototype.readUIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = this[e + --t],
      i = 1;
    for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
    return n;
  };
  T.prototype.readUint8 = T.prototype.readUInt8 = function (e, t) {
    return (e = e >>> 0), t || W(e, 1, this.length), this[e];
  };
  T.prototype.readUint16LE = T.prototype.readUInt16LE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 2, this.length), this[e] | (this[e + 1] << 8)
    );
  };
  T.prototype.readUint16BE = T.prototype.readUInt16BE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 2, this.length), (this[e] << 8) | this[e + 1]
    );
  };
  T.prototype.readUint32LE = T.prototype.readUInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
        this[e + 3] * 16777216
    );
  };
  T.prototype.readUint32BE = T.prototype.readUInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      this[e] * 16777216 +
        ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    );
  };
  T.prototype.readBigUInt64LE = _e(function (e) {
    (e = e >>> 0), et(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && yt(e, this.length - 8);
    let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
    return BigInt(n) + (BigInt(i) << BigInt(32));
  });
  T.prototype.readBigUInt64BE = _e(function (e) {
    (e = e >>> 0), et(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && yt(e, this.length - 8);
    let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
    return (BigInt(n) << BigInt(32)) + BigInt(i);
  });
  T.prototype.readIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = this[e],
      i = 1,
      o = 0;
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
    return (i *= 128), n >= i && (n -= Math.pow(2, 8 * t)), n;
  };
  T.prototype.readIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = t,
      i = 1,
      o = this[e + --n];
    for (; n > 0 && (i *= 256); ) o += this[e + --n] * i;
    return (i *= 128), o >= i && (o -= Math.pow(2, 8 * t)), o;
  };
  T.prototype.readInt8 = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    );
  };
  T.prototype.readInt16LE = function (e, t) {
    (e = e >>> 0), t || W(e, 2, this.length);
    let r = this[e] | (this[e + 1] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  T.prototype.readInt16BE = function (e, t) {
    (e = e >>> 0), t || W(e, 2, this.length);
    let r = this[e + 1] | (this[e] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  T.prototype.readInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    );
  };
  T.prototype.readInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    );
  };
  T.prototype.readBigInt64LE = _e(function (e) {
    (e = e >>> 0), et(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && yt(e, this.length - 8);
    let n =
      this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
    );
  });
  T.prototype.readBigInt64BE = _e(function (e) {
    (e = e >>> 0), et(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && yt(e, this.length - 8);
    let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r)
    );
  });
  T.prototype.readFloatLE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 4, this.length), Xe.read(this, e, !0, 23, 4)
    );
  };
  T.prototype.readFloatBE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 4, this.length), Xe.read(this, e, !1, 23, 4)
    );
  };
  T.prototype.readDoubleLE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 8, this.length), Xe.read(this, e, !0, 52, 8)
    );
  };
  T.prototype.readDoubleBE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 8, this.length), Xe.read(this, e, !1, 52, 8)
    );
  };
  function oe(e, t, r, n, i, o) {
    if (!T.isBuffer(e))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < o)
      throw new RangeError('"value" argument is out of bounds');
    if (r + n > e.length) throw new RangeError("Index out of range");
  }
  T.prototype.writeUintLE = T.prototype.writeUIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      oe(this, e, t, r, s, 0);
    }
    let i = 1,
      o = 0;
    for (this[t] = e & 255; ++o < r && (i *= 256); )
      this[t + o] = (e / i) & 255;
    return t + r;
  };
  T.prototype.writeUintBE = T.prototype.writeUIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      oe(this, e, t, r, s, 0);
    }
    let i = r - 1,
      o = 1;
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      this[t + i] = (e / o) & 255;
    return t + r;
  };
  T.prototype.writeUint8 = T.prototype.writeUInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 1, 255, 0),
      (this[t] = e & 255),
      t + 1
    );
  };
  T.prototype.writeUint16LE = T.prototype.writeUInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 2, 65535, 0),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  T.prototype.writeUint16BE = T.prototype.writeUInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 2, 65535, 0),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  T.prototype.writeUint32LE = T.prototype.writeUInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 4, 4294967295, 0),
      (this[t + 3] = e >>> 24),
      (this[t + 2] = e >>> 16),
      (this[t + 1] = e >>> 8),
      (this[t] = e & 255),
      t + 4
    );
  };
  T.prototype.writeUint32BE = T.prototype.writeUInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 4, 4294967295, 0),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  function Zn(e, t, r, n, i) {
    ni(t, n, i, e, r, 7);
    let o = Number(t & BigInt(4294967295));
    (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      r
    );
  }
  function Xn(e, t, r, n, i) {
    ni(t, n, i, e, r, 7);
    let o = Number(t & BigInt(4294967295));
    (e[r + 7] = o),
      (o = o >> 8),
      (e[r + 6] = o),
      (o = o >> 8),
      (e[r + 5] = o),
      (o = o >> 8),
      (e[r + 4] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r + 3] = s),
      (s = s >> 8),
      (e[r + 2] = s),
      (s = s >> 8),
      (e[r + 1] = s),
      (s = s >> 8),
      (e[r] = s),
      r + 8
    );
  }
  T.prototype.writeBigUInt64LE = _e(function (e, t = 0) {
    return Zn(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  T.prototype.writeBigUInt64BE = _e(function (e, t = 0) {
    return Xn(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  T.prototype.writeIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      oe(this, e, t, r, a - 1, -a);
    }
    let i = 0,
      o = 1,
      s = 0;
    for (this[t] = e & 255; ++i < r && (o *= 256); )
      e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255);
    return t + r;
  };
  T.prototype.writeIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      oe(this, e, t, r, a - 1, -a);
    }
    let i = r - 1,
      o = 1,
      s = 0;
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255);
    return t + r;
  };
  T.prototype.writeInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      (this[t] = e & 255),
      t + 1
    );
  };
  T.prototype.writeInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 2, 32767, -32768),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  T.prototype.writeInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 2, 32767, -32768),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  T.prototype.writeInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 4, 2147483647, -2147483648),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      (this[t + 2] = e >>> 16),
      (this[t + 3] = e >>> 24),
      t + 4
    );
  };
  T.prototype.writeInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || oe(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  T.prototype.writeBigInt64LE = _e(function (e, t = 0) {
    return Zn(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  T.prototype.writeBigInt64BE = _e(function (e, t = 0) {
    return Xn(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  function ei(e, t, r, n, i, o) {
    if (r + n > e.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range");
  }
  function ti(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || ei(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
      Xe.write(e, t, r, n, 23, 4),
      r + 4
    );
  }
  T.prototype.writeFloatLE = function (e, t, r) {
    return ti(this, e, t, !0, r);
  };
  T.prototype.writeFloatBE = function (e, t, r) {
    return ti(this, e, t, !1, r);
  };
  function ri(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || ei(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
      Xe.write(e, t, r, n, 52, 8),
      r + 8
    );
  }
  T.prototype.writeDoubleLE = function (e, t, r) {
    return ri(this, e, t, !0, r);
  };
  T.prototype.writeDoubleBE = function (e, t, r) {
    return ri(this, e, t, !1, r);
  };
  T.prototype.copy = function (e, t, r, n) {
    if (!T.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (
      (r || (r = 0),
      !n && n !== 0 && (n = this.length),
      t >= e.length && (t = e.length),
      t || (t = 0),
      n > 0 && n < r && (n = r),
      n === r || e.length === 0 || this.length === 0)
    )
      return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length),
      e.length - t < n - r && (n = e.length - t + r);
    let i = n - r;
    return (
      this === e && typeof Uint8Array.prototype.copyWithin == "function"
        ? this.copyWithin(t, r, n)
        : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
      i
    );
  };
  T.prototype.fill = function (e, t, r, n) {
    if (typeof e == "string") {
      if (
        (typeof t == "string"
          ? ((n = t), (t = 0), (r = this.length))
          : typeof r == "string" && ((n = r), (r = this.length)),
        n !== void 0 && typeof n != "string")
      )
        throw new TypeError("encoding must be a string");
      if (typeof n == "string" && !T.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
      if (e.length === 1) {
        let o = e.charCodeAt(0);
        ((n === "utf8" && o < 128) || n === "latin1") && (e = o);
      }
    } else
      typeof e == "number"
        ? (e = e & 255)
        : typeof e == "boolean" && (e = Number(e));
    if (t < 0 || this.length < t || this.length < r)
      throw new RangeError("Out of range index");
    if (r <= t) return this;
    (t = t >>> 0), (r = r === void 0 ? this.length : r >>> 0), e || (e = 0);
    let i;
    if (typeof e == "number") for (i = t; i < r; ++i) this[i] = e;
    else {
      let o = T.isBuffer(e) ? e : T.from(e, n),
        s = o.length;
      if (s === 0)
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"',
        );
      for (i = 0; i < r - t; ++i) this[i + t] = o[i % s];
    }
    return this;
  };
  var Ze = {};
  function Vr(e, t, r) {
    Ze[e] = class extends r {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${e}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return e;
      }
      set code(n) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`;
      }
    };
  }
  Vr(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (e) {
      return e
        ? `${e} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError,
  );
  Vr(
    "ERR_INVALID_ARG_TYPE",
    function (e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    },
    TypeError,
  );
  Vr(
    "ERR_OUT_OF_RANGE",
    function (e, t, r) {
      let n = `The value of "${e}" is out of range.`,
        i = r;
      return (
        Number.isInteger(r) && Math.abs(r) > 2 ** 32
          ? (i = Qn(String(r)))
          : typeof r == "bigint" &&
            ((i = String(r)),
            (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
              (i = Qn(i)),
            (i += "n")),
        (n += ` It must be ${t}. Received ${i}`),
        n
      );
    },
    RangeError,
  );
  function Qn(e) {
    let t = "",
      r = e.length,
      n = e[0] === "-" ? 1 : 0;
    for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
    return `${e.slice(0, r)}${t}`;
  }
  function Ca(e, t, r) {
    et(t, "offset"),
      (e[t] === void 0 || e[t + r] === void 0) && yt(t, e.length - (r + 1));
  }
  function ni(e, t, r, n, i, o) {
    if (e > r || e < t) {
      let s = typeof t == "bigint" ? "n" : "",
        a;
      throw (
        (o > 3
          ? t === 0 || t === BigInt(0)
            ? (a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}`)
            : (a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}`)
          : (a = `>= ${t}${s} and <= ${r}${s}`),
        new Ze.ERR_OUT_OF_RANGE("value", a, e))
      );
    }
    Ca(n, i, o);
  }
  function et(e, t) {
    if (typeof e != "number") throw new Ze.ERR_INVALID_ARG_TYPE(t, "number", e);
  }
  function yt(e, t, r) {
    throw Math.floor(e) !== e
      ? (et(e, r), new Ze.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
      : t < 0
        ? new Ze.ERR_BUFFER_OUT_OF_BOUNDS()
        : new Ze.ERR_OUT_OF_RANGE(
            r || "offset",
            `>= ${r ? 1 : 0} and <= ${t}`,
            e,
          );
  }
  var Aa = /[^+/0-9A-Za-z-_]/g;
  function Sa(e) {
    if (((e = e.split("=")[0]), (e = e.trim().replace(Aa, "")), e.length < 2))
      return "";
    for (; e.length % 4 !== 0; ) e = e + "=";
    return e;
  }
  function jr(e, t) {
    t = t || 1 / 0;
    let r,
      n = e.length,
      i = null,
      o = [];
    for (let s = 0; s < n; ++s) {
      if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
        if (!i) {
          if (r > 56319) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          } else if (s + 1 === n) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          i = r;
          continue;
        }
        if (r < 56320) {
          (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
          continue;
        }
        r = (((i - 55296) << 10) | (r - 56320)) + 65536;
      } else i && (t -= 3) > -1 && o.push(239, 191, 189);
      if (((i = null), r < 128)) {
        if ((t -= 1) < 0) break;
        o.push(r);
      } else if (r < 2048) {
        if ((t -= 2) < 0) break;
        o.push((r >> 6) | 192, (r & 63) | 128);
      } else if (r < 65536) {
        if ((t -= 3) < 0) break;
        o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (r & 63) | 128);
      } else if (r < 1114112) {
        if ((t -= 4) < 0) break;
        o.push(
          (r >> 18) | 240,
          ((r >> 12) & 63) | 128,
          ((r >> 6) & 63) | 128,
          (r & 63) | 128,
        );
      } else throw new Error("Invalid code point");
    }
    return o;
  }
  function Ra(e) {
    let t = [];
    for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
    return t;
  }
  function ka(e, t) {
    let r,
      n,
      i,
      o = [];
    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
      (r = e.charCodeAt(s)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n);
    return o;
  }
  function ii(e) {
    return Br.toByteArray(Sa(e));
  }
  function Wt(e, t, r, n) {
    let i;
    for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
      t[i + r] = e[i];
    return i;
  }
  function ye(e, t) {
    return (
      e instanceof t ||
      (e != null &&
        e.constructor != null &&
        e.constructor.name != null &&
        e.constructor.name === t.name)
    );
  }
  function Qr(e) {
    return e !== e;
  }
  var Oa = (function () {
    let e = "0123456789abcdef",
      t = new Array(256);
    for (let r = 0; r < 16; ++r) {
      let n = r * 16;
      for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
    }
    return t;
  })();
  function _e(e) {
    return typeof BigInt > "u" ? Fa : e;
  }
  function Fa() {
    throw new Error("BigInt not supported");
  }
});
var w,
  m = Se(() => {
    "use strict";
    w = fe(oi());
  });
function Ma() {
  return !1;
}
var _a,
  La,
  Gt,
  Gr = Se(() => {
    "use strict";
    m();
    c();
    p();
    f();
    d();
    (_a = {}), (La = { existsSync: Ma, promises: _a }), (Gt = La);
  });
var gi = ce((gf, mi) => {
  "use strict";
  m();
  c();
  p();
  f();
  d();
  mi.exports = (zr(), Dr(Kr)).format;
});
var Kr = {};
Ye(Kr, {
  default: () => Xa,
  deprecate: () => yi,
  format: () => bi,
  inspect: () => wi,
  promisify: () => hi,
});
function hi(e) {
  return (...t) =>
    new Promise((r, n) => {
      e(...t, (i, o) => {
        i ? n(i) : r(o);
      });
    });
}
function yi(e, t) {
  return (...r) => (console.warn(t), e(...r));
}
function wi(e) {
  return JSON.stringify(e, (t, r) =>
    typeof r == "function"
      ? r.toString()
      : typeof r == "bigint"
        ? `${r}n`
        : r instanceof Error
          ? { ...r, message: r.message, stack: r.stack }
          : r,
  );
}
var bi,
  Za,
  Xa,
  zr = Se(() => {
    "use strict";
    m();
    c();
    p();
    f();
    d();
    (bi = gi()),
      (Za = { promisify: hi, deprecate: yi, inspect: wi, format: bi }),
      (Xa = Za);
  });
function il(...e) {
  return e.join("/");
}
function ol(...e) {
  return e.join("/");
}
var Ti,
  sl,
  al,
  we,
  en = Se(() => {
    "use strict";
    m();
    c();
    p();
    f();
    d();
    (Ti = "/"),
      (sl = { sep: Ti }),
      (al = { resolve: il, posix: sl, join: ol, sep: Ti }),
      (we = al);
  });
var Ci = ce(() => {
  "use strict";
  m();
  c();
  p();
  f();
  d();
});
var Ri = ce((fd, Si) => {
  "use strict";
  m();
  c();
  p();
  f();
  d();
  Si.exports = (e) => {
    let t = e.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
  };
});
var Oi = ce((wd, ki) => {
  "use strict";
  m();
  c();
  p();
  f();
  d();
  var ul = Ri();
  ki.exports = (e) => {
    let t = ul(e);
    if (t === 0) return e;
    let r = new RegExp(`^[ \\t]{${t}}`, "gm");
    return e.replace(r, "");
  };
});
var Kt,
  Fi = Se(() => {
    "use strict";
    m();
    c();
    p();
    f();
    d();
    Kt = class {
      constructor() {
        this.events = {};
      }
      on(t, r) {
        return (
          this.events[t] || (this.events[t] = []), this.events[t].push(r), this
        );
      }
      emit(t, ...r) {
        return this.events[t]
          ? (this.events[t].forEach((n) => {
              n(...r);
            }),
            !0)
          : !1;
      }
    };
  });
var _i = ce((Yd, Mi) => {
  "use strict";
  m();
  c();
  p();
  f();
  d();
  Mi.exports = (e, t = 1, r) => {
    if (
      ((r = { indent: " ", includeEmptyLines: !1, ...r }), typeof e != "string")
    )
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``,
      );
    if (typeof t != "number")
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``,
      );
    if (typeof r.indent != "string")
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``,
      );
    if (t === 0) return e;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(n, r.indent.repeat(t));
  };
});
var Ni = ce((um, Ii) => {
  "use strict";
  m();
  c();
  p();
  f();
  d();
  Ii.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  };
});
var nn = ce((gm, Di) => {
  "use strict";
  m();
  c();
  p();
  f();
  d();
  var ml = Ni();
  Di.exports = (e) => (typeof e == "string" ? e.replace(ml(), "") : e);
});
var Bi = ce((_m, Yt) => {
  "use strict";
  m();
  c();
  p();
  f();
  d();
  Yt.exports = (e = {}) => {
    let t;
    if (e.repoUrl) t = e.repoUrl;
    else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`;
    else
      throw new Error(
        "You need to specify either the `repoUrl` option or both the `user` and `repo` options",
      );
    let r = new URL(`${t}/issues/new`),
      n = [
        "body",
        "title",
        "labels",
        "template",
        "milestone",
        "assignee",
        "projects",
      ];
    for (let i of n) {
      let o = e[i];
      if (o !== void 0) {
        if (i === "labels" || i === "projects") {
          if (!Array.isArray(o))
            throw new TypeError(`The \`${i}\` option should be an array`);
          o = o.join(",");
        }
        r.searchParams.set(i, o);
      }
    }
    return r.toString();
  };
  Yt.exports.default = Yt.exports;
});
var qi = ce((ky, wl) => {
  wl.exports = {
    name: "@prisma/engines-version",
    version: "5.14.0-25.e9771e62de70f79a5e1c604a2d7c8e2a0a874b48",
    main: "index.js",
    types: "index.d.ts",
    license: "Apache-2.0",
    author: "Tim Suchanek <suchanek@prisma.io>",
    prisma: { enginesVersion: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48" },
    repository: {
      type: "git",
      url: "https://github.com/prisma/engines-wrapper.git",
      directory: "packages/engines-version",
    },
    devDependencies: { "@types/node": "18.19.32", typescript: "4.9.5" },
    files: ["index.js", "index.d.ts"],
    scripts: { build: "tsc -d" },
  };
});
var Vi = ce(() => {
  "use strict";
  m();
  c();
  p();
  f();
  d();
});
var Fn = ce((cA, ls) => {
  "use strict";
  m();
  c();
  p();
  f();
  d();
  ls.exports = (function () {
    function e(t, r, n, i, o) {
      return t < r || n < r ? (t > n ? n + 1 : t + 1) : i === o ? r : r + 1;
    }
    return function (t, r) {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        (t = r), (r = n);
      }
      for (
        var i = t.length, o = r.length;
        i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1);

      )
        i--, o--;
      for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
      if (((i -= s), (o -= s), i === 0 || o < 3)) return o;
      var a = 0,
        l,
        u,
        g,
        h,
        v,
        R,
        C,
        A,
        F,
        L,
        N,
        M,
        k = [];
      for (l = 0; l < i; l++) k.push(l + 1), k.push(t.charCodeAt(s + l));
      for (var z = k.length - 1; a < o - 3; )
        for (
          F = r.charCodeAt(s + (u = a)),
            L = r.charCodeAt(s + (g = a + 1)),
            N = r.charCodeAt(s + (h = a + 2)),
            M = r.charCodeAt(s + (v = a + 3)),
            R = a += 4,
            l = 0;
          l < z;
          l += 2
        )
          (C = k[l]),
            (A = k[l + 1]),
            (u = e(C, u, g, F, A)),
            (g = e(u, g, h, L, A)),
            (h = e(g, h, v, N, A)),
            (R = e(h, v, R, M, A)),
            (k[l] = R),
            (v = h),
            (h = g),
            (g = u),
            (u = C);
      for (; a < o; )
        for (F = r.charCodeAt(s + (u = a)), R = ++a, l = 0; l < z; l += 2)
          (C = k[l]), (k[l] = R = e(C, u, R, F, k[l + 1])), (u = C);
      return R;
    };
  })();
});
var fp = {};
Ye(fp, {
  Debug: () => Zr,
  Decimal: () => ve,
  Extensions: () => Jr,
  MetricsClient: () => nt,
  NotFoundError: () => Oe,
  PrismaClientInitializationError: () => V,
  PrismaClientKnownRequestError: () => G,
  PrismaClientRustPanicError: () => ue,
  PrismaClientUnknownRequestError: () => H,
  PrismaClientValidationError: () => Y,
  Public: () => Wr,
  Sql: () => se,
  defineDmmfProperty: () => Ui,
  empty: () => Ji,
  getPrismaClient: () => Ys,
  getRuntime: () => Zo,
  join: () => Qi,
  makeStrictEnum: () => Zs,
  objectEnumValues: () => Xt,
  raw: () => dn,
  sqltag: () => mn,
  warnEnvConflicts: () => void 0,
  warnOnce: () => St,
});
module.exports = Dr(fp);
m();
c();
p();
f();
d();
var Jr = {};
Ye(Jr, { defineExtension: () => si, getExtensionContext: () => ai });
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
function si(e) {
  return typeof e == "function" ? e : (t) => t.$extends(e);
}
m();
c();
p();
f();
d();
function ai(e) {
  return e;
}
var Wr = {};
Ye(Wr, { validator: () => li });
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
function li(...e) {
  return (t) => t;
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var Ht = {};
Ye(Ht, {
  $: () => di,
  bgBlack: () => Qa,
  bgBlue: () => Ha,
  bgCyan: () => za,
  bgGreen: () => Wa,
  bgMagenta: () => Ka,
  bgRed: () => Ja,
  bgWhite: () => Ya,
  bgYellow: () => Ga,
  black: () => ja,
  blue: () => Je,
  bold: () => de,
  cyan: () => ke,
  dim: () => wt,
  gray: () => xt,
  green: () => Et,
  grey: () => Va,
  hidden: () => Ba,
  inverse: () => Da,
  italic: () => Na,
  magenta: () => Ua,
  red: () => Ve,
  reset: () => Ia,
  strikethrough: () => $a,
  underline: () => bt,
  white: () => qa,
  yellow: () => Qe,
});
m();
c();
p();
f();
d();
var Hr,
  ui,
  ci,
  pi,
  fi = !0;
typeof y < "u" &&
  (({
    FORCE_COLOR: Hr,
    NODE_DISABLE_COLORS: ui,
    NO_COLOR: ci,
    TERM: pi,
  } = y.env || {}),
  (fi = y.stdout && y.stdout.isTTY));
var di = {
  enabled:
    !ui && ci == null && pi !== "dumb" && ((Hr != null && Hr !== "0") || fi),
};
function U(e, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, "g"),
    n = `\x1B[${e}m`,
    i = `\x1B[${t}m`;
  return function (o) {
    return !di.enabled || o == null
      ? o
      : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
  };
}
var Ia = U(0, 0),
  de = U(1, 22),
  wt = U(2, 22),
  Na = U(3, 23),
  bt = U(4, 24),
  Da = U(7, 27),
  Ba = U(8, 28),
  $a = U(9, 29),
  ja = U(30, 39),
  Ve = U(31, 39),
  Et = U(32, 39),
  Qe = U(33, 39),
  Je = U(34, 39),
  Ua = U(35, 39),
  ke = U(36, 39),
  qa = U(37, 39),
  xt = U(90, 39),
  Va = U(90, 39),
  Qa = U(40, 49),
  Ja = U(41, 49),
  Wa = U(42, 49),
  Ga = U(43, 49),
  Ha = U(44, 49),
  Ka = U(45, 49),
  za = U(46, 49),
  Ya = U(47, 49);
m();
c();
p();
f();
d();
var el = 100,
  Ei = ["green", "yellow", "blue", "magenta", "cyan", "red"],
  vt = [],
  xi = Date.now(),
  tl = 0,
  Yr = typeof y < "u" ? y.env : {};
globalThis.DEBUG ??= Yr.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= Yr.DEBUG_COLORS ? Yr.DEBUG_COLORS === "true" : !0;
var Pt = {
  enable(e) {
    typeof e == "string" && (globalThis.DEBUG = e);
  },
  disable() {
    let e = globalThis.DEBUG;
    return (globalThis.DEBUG = ""), e;
  },
  enabled(e) {
    let t = globalThis.DEBUG.split(",").map((i) =>
        i.replace(/[.+?^${}()|[\]\\]/g, "\\$&"),
      ),
      r = t.some((i) =>
        i === "" || i[0] === "-"
          ? !1
          : e.match(RegExp(i.split("*").join(".*") + "$")),
      ),
      n = t.some((i) =>
        i === "" || i[0] !== "-"
          ? !1
          : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")),
      );
    return r && !n;
  },
  log: (...e) => {
    let [t, r, ...n] = e,
      i;
    typeof require == "function" &&
    typeof y < "u" &&
    typeof y.stderr < "u" &&
    typeof y.stderr.write == "function"
      ? (i = (...o) => {
          try {
            let s = (zr(), Dr(Kr));
            y.stderr.write(
              s.format(...o) +
                `
`,
            );
          } catch {
            i = console.warn ?? console.log;
          }
        })
      : (i = console.warn ?? console.log),
      i(`${t} ${r}`, ...n);
  },
  formatters: {},
};
function rl(e) {
  let t = {
      color: Ei[tl++ % Ei.length],
      enabled: Pt.enabled(e),
      namespace: e,
      log: Pt.log,
      extend: () => {},
    },
    r = (...n) => {
      let { enabled: i, namespace: o, color: s, log: a } = t;
      if (
        (n.length !== 0 && vt.push([o, ...n]),
        vt.length > el && vt.shift(),
        Pt.enabled(o) || i)
      ) {
        let l = n.map((g) => (typeof g == "string" ? g : nl(g))),
          u = `+${Date.now() - xi}ms`;
        (xi = Date.now()),
          globalThis.DEBUG_COLORS
            ? a(Ht[s](de(o)), ...l, Ht[s](u))
            : a(o, ...l, u);
      }
    };
  return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => (t[i] = o) });
}
var Zr = new Proxy(rl, { get: (e, t) => Pt[t], set: (e, t, r) => (Pt[t] = r) });
function nl(e, t = 2) {
  let r = new Set();
  return JSON.stringify(
    e,
    (n, i) => {
      if (typeof i == "object" && i !== null) {
        if (r.has(i)) return "[Circular *]";
        r.add(i);
      } else if (typeof i == "bigint") return i.toString();
      return i;
    },
    t,
  );
}
function vi(e = 7500) {
  let t = vt.map(
    ([r, ...n]) =>
      `${r} ${n.map((i) => (typeof i == "string" ? i : JSON.stringify(i))).join(" ")}`,
  ).join(`
`);
  return t.length < e ? t : t.slice(-e);
}
function Pi() {
  vt.length = 0;
}
var le = Zr;
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var Xr = [
  "darwin",
  "darwin-arm64",
  "debian-openssl-1.0.x",
  "debian-openssl-1.1.x",
  "debian-openssl-3.0.x",
  "rhel-openssl-1.0.x",
  "rhel-openssl-1.1.x",
  "rhel-openssl-3.0.x",
  "linux-arm64-openssl-1.1.x",
  "linux-arm64-openssl-1.0.x",
  "linux-arm64-openssl-3.0.x",
  "linux-arm-openssl-1.1.x",
  "linux-arm-openssl-1.0.x",
  "linux-arm-openssl-3.0.x",
  "linux-musl",
  "linux-musl-openssl-3.0.x",
  "linux-musl-arm64-openssl-1.1.x",
  "linux-musl-arm64-openssl-3.0.x",
  "linux-nixos",
  "linux-static-x64",
  "linux-static-arm64",
  "windows",
  "freebsd11",
  "freebsd12",
  "freebsd13",
  "freebsd14",
  "freebsd15",
  "openbsd",
  "netbsd",
  "arm",
];
m();
c();
p();
f();
d();
var Ai = "library";
function Tt(e) {
  let t = ll();
  return (
    t ||
    (e?.config.engineType === "library"
      ? "library"
      : e?.config.engineType === "binary"
        ? "binary"
        : Ai)
  );
}
function ll() {
  let e = y.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var Le;
((t) => {
  let e;
  ((k) => (
    (k.findUnique = "findUnique"),
    (k.findUniqueOrThrow = "findUniqueOrThrow"),
    (k.findFirst = "findFirst"),
    (k.findFirstOrThrow = "findFirstOrThrow"),
    (k.findMany = "findMany"),
    (k.create = "create"),
    (k.createMany = "createMany"),
    (k.createManyAndReturn = "createManyAndReturn"),
    (k.update = "update"),
    (k.updateMany = "updateMany"),
    (k.upsert = "upsert"),
    (k.delete = "delete"),
    (k.deleteMany = "deleteMany"),
    (k.groupBy = "groupBy"),
    (k.count = "count"),
    (k.aggregate = "aggregate"),
    (k.findRaw = "findRaw"),
    (k.aggregateRaw = "aggregateRaw")
  ))((e = t.ModelAction ||= {}));
})((Le ||= {}));
m();
c();
p();
f();
d();
en();
function tn(e) {
  return we.sep === we.posix.sep ? e : e.split(we.sep).join(we.posix.sep);
}
var At = {};
Ye(At, {
  error: () => fl,
  info: () => pl,
  log: () => cl,
  query: () => dl,
  should: () => Li,
  tags: () => Ct,
  warn: () => rn,
});
m();
c();
p();
f();
d();
var Ct = {
    error: Ve("prisma:error"),
    warn: Qe("prisma:warn"),
    info: ke("prisma:info"),
    query: Je("prisma:query"),
  },
  Li = { warn: () => !y.env.PRISMA_DISABLE_WARNINGS };
function cl(...e) {
  console.log(...e);
}
function rn(e, ...t) {
  Li.warn() && console.warn(`${Ct.warn} ${e}`, ...t);
}
function pl(e, ...t) {
  console.info(`${Ct.info} ${e}`, ...t);
}
function fl(e, ...t) {
  console.error(`${Ct.error} ${e}`, ...t);
}
function dl(e, ...t) {
  console.log(`${Ct.query} ${e}`, ...t);
}
m();
c();
p();
f();
d();
function zt(e, t) {
  if (!e)
    throw new Error(
      `${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`,
    );
}
m();
c();
p();
f();
d();
function We(e, t) {
  throw new Error(t);
}
m();
c();
p();
f();
d();
function on(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
m();
c();
p();
f();
d();
var sn = (e, t) => e.reduce((r, n) => ((r[t(n)] = n), r), {});
m();
c();
p();
f();
d();
function rt(e, t) {
  let r = {};
  for (let n of Object.keys(e)) r[n] = t(e[n], n);
  return r;
}
m();
c();
p();
f();
d();
function an(e, t) {
  if (e.length === 0) return;
  let r = e[0];
  for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
  return r;
}
m();
c();
p();
f();
d();
function re(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
m();
c();
p();
f();
d();
var $i = new Set(),
  St = (e, t, ...r) => {
    $i.has(e) || ($i.add(e), rn(t, ...r));
  };
m();
c();
p();
f();
d();
var G = class extends Error {
  constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
    super(t),
      (this.name = "PrismaClientKnownRequestError"),
      (this.code = r),
      (this.clientVersion = n),
      (this.meta = i),
      Object.defineProperty(this, "batchRequestIdx", {
        value: o,
        enumerable: !1,
        writable: !0,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
re(G, "PrismaClientKnownRequestError");
var Oe = class extends G {
  constructor(t, r) {
    super(t, { code: "P2025", clientVersion: r }),
      (this.name = "NotFoundError");
  }
};
re(Oe, "NotFoundError");
m();
c();
p();
f();
d();
var V = class e extends Error {
  constructor(t, r, n) {
    super(t),
      (this.name = "PrismaClientInitializationError"),
      (this.clientVersion = r),
      (this.errorCode = n),
      Error.captureStackTrace(e);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
re(V, "PrismaClientInitializationError");
m();
c();
p();
f();
d();
var ue = class extends Error {
  constructor(t, r) {
    super(t),
      (this.name = "PrismaClientRustPanicError"),
      (this.clientVersion = r);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
re(ue, "PrismaClientRustPanicError");
m();
c();
p();
f();
d();
var H = class extends Error {
  constructor(t, { clientVersion: r, batchRequestIdx: n }) {
    super(t),
      (this.name = "PrismaClientUnknownRequestError"),
      (this.clientVersion = r),
      Object.defineProperty(this, "batchRequestIdx", {
        value: n,
        writable: !0,
        enumerable: !1,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
re(H, "PrismaClientUnknownRequestError");
m();
c();
p();
f();
d();
var Y = class extends Error {
  constructor(r, { clientVersion: n }) {
    super(r);
    this.name = "PrismaClientValidationError";
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
re(Y, "PrismaClientValidationError");
m();
c();
p();
f();
d();
var nt = class {
  constructor(t) {
    this._engine = t;
  }
  prometheus(t) {
    return this._engine.metrics({ format: "prometheus", ...t });
  }
  json(t) {
    return this._engine.metrics({ format: "json", ...t });
  }
};
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
function Rt(e) {
  let t;
  return {
    get() {
      return t || (t = { value: e() }), t.value;
    },
  };
}
function Ui(e, t) {
  let r = Rt(() => gl(t));
  Object.defineProperty(e, "dmmf", { get: () => r.get() });
}
function gl(e) {
  return {
    datamodel: { models: ln(e.models), enums: ln(e.enums), types: ln(e.types) },
  };
}
function ln(e) {
  return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
}
m();
c();
p();
f();
d();
var Zt = Symbol(),
  un = new WeakMap(),
  Fe = class {
    constructor(t) {
      t === Zt
        ? un.set(this, `Prisma.${this._getName()}`)
        : un.set(
            this,
            `new Prisma.${this._getNamespace()}.${this._getName()}()`,
          );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return un.get(this);
    }
  },
  kt = class extends Fe {
    _getNamespace() {
      return "NullTypes";
    }
  },
  Ot = class extends kt {};
cn(Ot, "DbNull");
var Ft = class extends kt {};
cn(Ft, "JsonNull");
var Mt = class extends kt {};
cn(Mt, "AnyNull");
var Xt = {
  classes: { DbNull: Ot, JsonNull: Ft, AnyNull: Mt },
  instances: { DbNull: new Ot(Zt), JsonNull: new Ft(Zt), AnyNull: new Mt(Zt) },
};
function cn(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
function _t(e) {
  return {
    ok: !1,
    error: e,
    map() {
      return _t(e);
    },
    flatMap() {
      return _t(e);
    },
  };
}
var pn = class {
    constructor() {
      this.registeredErrors = [];
    }
    consumeError(t) {
      return this.registeredErrors[t];
    }
    registerNewError(t) {
      let r = 0;
      for (; this.registeredErrors[r] !== void 0; ) r++;
      return (this.registeredErrors[r] = { error: t }), r;
    }
  },
  fn = (e) => {
    let t = new pn(),
      r = Ge(t, e.startTransaction.bind(e)),
      n = {
        adapterName: e.adapterName,
        errorRegistry: t,
        queryRaw: Ge(t, e.queryRaw.bind(e)),
        executeRaw: Ge(t, e.executeRaw.bind(e)),
        provider: e.provider,
        startTransaction: async (...i) => (await r(...i)).map((s) => hl(t, s)),
      };
    return (
      e.getConnectionInfo &&
        (n.getConnectionInfo = yl(t, e.getConnectionInfo.bind(e))),
      n
    );
  },
  hl = (e, t) => ({
    adapterName: t.adapterName,
    provider: t.provider,
    options: t.options,
    queryRaw: Ge(e, t.queryRaw.bind(t)),
    executeRaw: Ge(e, t.executeRaw.bind(t)),
    commit: Ge(e, t.commit.bind(t)),
    rollback: Ge(e, t.rollback.bind(t)),
  });
function Ge(e, t) {
  return async (...r) => {
    try {
      return await t(...r);
    } catch (n) {
      let i = e.registerNewError(n);
      return _t({ kind: "GenericJs", id: i });
    }
  };
}
function yl(e, t) {
  return (...r) => {
    try {
      return t(...r);
    } catch (n) {
      let i = e.registerNewError(n);
      return _t({ kind: "GenericJs", id: i });
    }
  };
}
var zs = fe(qi());
var wk = fe(Vi());
Fi();
Gr();
en();
m();
c();
p();
f();
d();
var se = class e {
  constructor(t, r) {
    if (t.length - 1 !== r.length)
      throw t.length === 0
        ? new TypeError("Expected at least 1 string")
        : new TypeError(
            `Expected ${t.length} strings to have ${t.length - 1} values`,
          );
    let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
    (this.values = new Array(n)),
      (this.strings = new Array(n + 1)),
      (this.strings[0] = t[0]);
    let i = 0,
      o = 0;
    for (; i < r.length; ) {
      let s = r[i++],
        a = t[i];
      if (s instanceof e) {
        this.strings[o] += s.strings[0];
        let l = 0;
        for (; l < s.values.length; )
          (this.values[o++] = s.values[l++]), (this.strings[o] = s.strings[l]);
        this.strings[o] += a;
      } else (this.values[o++] = s), (this.strings[o] = a);
    }
  }
  get sql() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `?${this.strings[r++]}`;
    return n;
  }
  get statement() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `:${r}${this.strings[r++]}`;
    return n;
  }
  get text() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `$${r}${this.strings[r++]}`;
    return n;
  }
  inspect() {
    return {
      sql: this.sql,
      statement: this.statement,
      text: this.text,
      values: this.values,
    };
  }
};
function Qi(e, t = ",", r = "", n = "") {
  if (e.length === 0)
    throw new TypeError(
      "Expected `join([])` to be called with an array of multiple elements, but got an empty array",
    );
  return new se([r, ...Array(e.length - 1).fill(t), n], e);
}
function dn(e) {
  return new se([e], []);
}
var Ji = dn("");
function mn(e, ...t) {
  return new se(e, t);
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
function Lt(e) {
  return {
    getKeys() {
      return Object.keys(e);
    },
    getPropertyValue(t) {
      return e[t];
    },
  };
}
m();
c();
p();
f();
d();
function ne(e, t) {
  return {
    getKeys() {
      return [e];
    },
    getPropertyValue() {
      return t();
    },
  };
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var be = class {
  constructor() {
    this._map = new Map();
  }
  get(t) {
    return this._map.get(t)?.value;
  }
  set(t, r) {
    this._map.set(t, { value: r });
  }
  getOrCreate(t, r) {
    let n = this._map.get(t);
    if (n) return n.value;
    let i = r();
    return this.set(t, i), i;
  }
};
function He(e) {
  let t = new be();
  return {
    getKeys() {
      return e.getKeys();
    },
    getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    },
    getPropertyDescriptor(r) {
      return e.getPropertyDescriptor?.(r);
    },
  };
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var er = { enumerable: !0, configurable: !0, writable: !0 };
function tr(e) {
  let t = new Set(e);
  return {
    getOwnPropertyDescriptor: () => er,
    has: (r, n) => t.has(n),
    set: (r, n, i) => t.add(n) && Reflect.set(r, n, i),
    ownKeys: () => [...t],
  };
}
var Wi = Symbol.for("nodejs.util.inspect.custom");
function Ee(e, t) {
  let r = bl(t),
    n = new Set(),
    i = new Proxy(e, {
      get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      },
      has(o, s) {
        if (n.has(s)) return !0;
        let a = r.get(s);
        return a ? a.has?.(s) ?? !0 : Reflect.has(o, s);
      },
      ownKeys(o) {
        let s = Gi(Reflect.ownKeys(o), r),
          a = Gi(Array.from(r.keys()), r);
        return [...new Set([...s, ...a, ...n])];
      },
      set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === !1
          ? !1
          : (n.add(s), Reflect.set(o, s, a));
      },
      getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l = r.get(s);
        return l
          ? l.getPropertyDescriptor
            ? { ...er, ...l?.getPropertyDescriptor(s) }
            : er
          : a;
      },
      defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      },
    });
  return (
    (i[Wi] = function () {
      let o = { ...this };
      return delete o[Wi], o;
    }),
    i
  );
}
function bl(e) {
  let t = new Map();
  for (let r of e) {
    let n = r.getKeys();
    for (let i of n) t.set(i, r);
  }
  return t;
}
function Gi(e, t) {
  return e.filter((r) => t.get(r)?.has?.(r) ?? !0);
}
m();
c();
p();
f();
d();
function it(e) {
  return {
    getKeys() {
      return e;
    },
    has() {
      return !1;
    },
    getPropertyValue() {},
  };
}
m();
c();
p();
f();
d();
function rr(e, t) {
  return {
    batch: e,
    transaction:
      t?.kind === "batch"
        ? { isolationLevel: t.options.isolationLevel }
        : void 0,
  };
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var ot = class {
  constructor(t = 0, r) {
    this.context = r;
    this.lines = [];
    this.currentLine = "";
    this.currentIndent = 0;
    this.currentIndent = t;
  }
  write(t) {
    return typeof t == "string" ? (this.currentLine += t) : t.write(this), this;
  }
  writeJoined(t, r) {
    let n = r.length - 1;
    for (let i = 0; i < r.length; i++)
      this.write(r[i]), i !== n && this.write(t);
    return this;
  }
  writeLine(t) {
    return this.write(t).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()),
      (this.currentLine = ""),
      (this.marginSymbol = void 0);
    let t = this.afterNextNewLineCallback;
    return (this.afterNextNewLineCallback = void 0), t?.(), this;
  }
  withIndent(t) {
    return this.indent(), t(this), this.unindent(), this;
  }
  afterNextNewline(t) {
    return (this.afterNextNewLineCallback = t), this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(t) {
    return (this.marginSymbol = t), this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let t = this.currentLine.padStart(
      this.currentLine.length + 2 * this.currentIndent,
    );
    return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
  }
};
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
function Hi(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
m();
c();
p();
f();
d();
function st(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
  );
}
function nr(e) {
  return e.toString() !== "Invalid Date";
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var at = 9e15,
  Be = 1e9,
  gn = "0123456789abcdef",
  or =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  sr =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  hn = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -at,
    maxE: at,
    crypto: !1,
  },
  Zi,
  Me,
  I = !0,
  lr = "[DecimalError] ",
  De = lr + "Invalid argument: ",
  Xi = lr + "Precision limit exceeded",
  eo = lr + "crypto unavailable",
  to = "[object Decimal]",
  te = Math.floor,
  J = Math.pow,
  El = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  xl = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  vl = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  ro = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  ge = 1e7,
  _ = 7,
  Pl = 9007199254740991,
  Tl = or.length - 1,
  yn = sr.length - 1,
  S = { toStringTag: to };
S.absoluteValue = S.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), O(e);
};
S.ceil = function () {
  return O(new this.constructor(this), this.e + 1, 2);
};
S.clampedTo = S.clamp = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN);
  if (e.gt(t)) throw Error(De + t);
  return (r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
S.comparedTo = S.cmp = function (e) {
  var t,
    r,
    n,
    i,
    o = this,
    s = o.d,
    a = (e = new o.constructor(e)).d,
    l = o.s,
    u = e.s;
  if (!s || !a)
    return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ (l < 0) ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
  if (l !== u) return l;
  if (o.e !== e.e) return (o.e > e.e) ^ (l < 0) ? 1 : -1;
  for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (s[t] !== a[t]) return (s[t] > a[t]) ^ (l < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (l < 0) ? 1 : -1;
};
S.cosine = S.cos = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.d
    ? r.d[0]
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + _),
        (n.rounding = 1),
        (r = Cl(n, ao(n, r))),
        (n.precision = e),
        (n.rounding = t),
        O(Me == 2 || Me == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN);
};
S.cubeRoot = S.cbrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g = this,
    h = g.constructor;
  if (!g.isFinite() || g.isZero()) return new h(g);
  for (
    I = !1,
      o = g.s * J(g.s * g, 1 / 3),
      !o || Math.abs(o) == 1 / 0
        ? ((r = Z(g.d)),
          (e = g.e),
          (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"),
          (o = J(r, 1 / 3)),
          (e = te((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
          o == 1 / 0
            ? (r = "5e" + e)
            : ((r = o.toExponential()),
              (r = r.slice(0, r.indexOf("e") + 1) + e)),
          (n = new h(r)),
          (n.s = g.s))
        : (n = new h(o.toString())),
      s = (e = h.precision) + 3;
    ;

  )
    if (
      ((a = n),
      (l = a.times(a).times(a)),
      (u = l.plus(g)),
      (n = $(u.plus(g).times(a), u.plus(l), s + 2, 1)),
      Z(a.d).slice(0, s) === (r = Z(n.d)).slice(0, s))
    )
      if (((r = r.slice(s - 3, s + 1)), r == "9999" || (!i && r == "4999"))) {
        if (!i && (O(a, e + 1, 0), a.times(a).times(a).eq(g))) {
          n = a;
          break;
        }
        (s += 4), (i = 1);
      } else {
        (!+r || (!+r.slice(1) && r.charAt(0) == "5")) &&
          (O(n, e + 1, 1), (t = !n.times(n).times(n).eq(g)));
        break;
      }
  return (I = !0), O(n, e, h.rounding, t);
};
S.decimalPlaces = S.dp = function () {
  var e,
    t = this.d,
    r = NaN;
  if (t) {
    if (((e = t.length - 1), (r = (e - te(this.e / _)) * _), (e = t[e]), e))
      for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
S.dividedBy = S.div = function (e) {
  return $(this, new this.constructor(e));
};
S.dividedToIntegerBy = S.divToInt = function (e) {
  var t = this,
    r = t.constructor;
  return O($(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
S.equals = S.eq = function (e) {
  return this.cmp(e) === 0;
};
S.floor = function () {
  return O(new this.constructor(this), this.e + 1, 3);
};
S.greaterThan = S.gt = function (e) {
  return this.cmp(e) > 0;
};
S.greaterThanOrEqualTo = S.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
S.hyperbolicCosine = S.cosh = function () {
  var e,
    t,
    r,
    n,
    i,
    o = this,
    s = o.constructor,
    a = new s(1);
  if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
  if (o.isZero()) return a;
  (r = s.precision),
    (n = s.rounding),
    (s.precision = r + Math.max(o.e, o.sd()) + 4),
    (s.rounding = 1),
    (i = o.d.length),
    i < 32
      ? ((e = Math.ceil(i / 3)), (t = (1 / cr(4, e)).toString()))
      : ((e = 16), (t = "2.3283064365386962890625e-10")),
    (o = lt(s, 1, o.times(t), new s(1), !0));
  for (var l, u = e, g = new s(8); u--; )
    (l = o.times(o)), (o = a.minus(l.times(g.minus(l.times(g)))));
  return O(o, (s.precision = r), (s.rounding = n), !0);
};
S.hyperbolicSine = S.sinh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  if (!i.isFinite() || i.isZero()) return new o(i);
  if (
    ((t = o.precision),
    (r = o.rounding),
    (o.precision = t + Math.max(i.e, i.sd()) + 4),
    (o.rounding = 1),
    (n = i.d.length),
    n < 3)
  )
    i = lt(o, 2, i, i, !0);
  else {
    (e = 1.4 * Math.sqrt(n)),
      (e = e > 16 ? 16 : e | 0),
      (i = i.times(1 / cr(5, e))),
      (i = lt(o, 2, i, i, !0));
    for (var s, a = new o(5), l = new o(16), u = new o(20); e--; )
      (s = i.times(i)), (i = i.times(a.plus(s.times(l.times(s).plus(u)))));
  }
  return (o.precision = t), (o.rounding = r), O(i, t, r, !0);
};
S.hyperbolicTangent = S.tanh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 7),
        (n.rounding = 1),
        $(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
    : new n(r.s);
};
S.inverseCosine = S.acos = function () {
  var e,
    t = this,
    r = t.constructor,
    n = t.abs().cmp(1),
    i = r.precision,
    o = r.rounding;
  return n !== -1
    ? n === 0
      ? t.isNeg()
        ? me(r, i, o)
        : new r(0)
      : new r(NaN)
    : t.isZero()
      ? me(r, i + 4, o).times(0.5)
      : ((r.precision = i + 6),
        (r.rounding = 1),
        (t = t.asin()),
        (e = me(r, i + 4, o).times(0.5)),
        (r.precision = i),
        (r.rounding = o),
        e.minus(t));
};
S.inverseHyperbolicCosine = S.acosh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.lte(1)
    ? new n(r.eq(1) ? 0 : NaN)
    : r.isFinite()
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
        (n.rounding = 1),
        (I = !1),
        (r = r.times(r).minus(1).sqrt().plus(r)),
        (I = !0),
        (n.precision = e),
        (n.rounding = t),
        r.ln())
      : new n(r);
};
S.inverseHyperbolicSine = S.asinh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return !r.isFinite() || r.isZero()
    ? new n(r)
    : ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
      (n.rounding = 1),
      (I = !1),
      (r = r.times(r).plus(1).sqrt().plus(r)),
      (I = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln());
};
S.inverseHyperbolicTangent = S.atanh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isFinite()
    ? i.e >= 0
      ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
      : ((e = o.precision),
        (t = o.rounding),
        (n = i.sd()),
        Math.max(n, e) < 2 * -i.e - 1
          ? O(new o(i), e, t, !0)
          : ((o.precision = r = n - i.e),
            (i = $(i.plus(1), new o(1).minus(i), r + e, 1)),
            (o.precision = e + 4),
            (o.rounding = 1),
            (i = i.ln()),
            (o.precision = e),
            (o.rounding = t),
            i.times(0.5)))
    : new o(NaN);
};
S.inverseSine = S.asin = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isZero()
    ? new o(i)
    : ((t = i.abs().cmp(1)),
      (r = o.precision),
      (n = o.rounding),
      t !== -1
        ? t === 0
          ? ((e = me(o, r + 4, n).times(0.5)), (e.s = i.s), e)
          : new o(NaN)
        : ((o.precision = r + 6),
          (o.rounding = 1),
          (i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan()),
          (o.precision = r),
          (o.rounding = n),
          i.times(2)));
};
S.inverseTangent = S.atan = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = this,
    g = u.constructor,
    h = g.precision,
    v = g.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new g(u);
    if (u.abs().eq(1) && h + 4 <= yn)
      return (s = me(g, h + 4, v).times(0.25)), (s.s = u.s), s;
  } else {
    if (!u.s) return new g(NaN);
    if (h + 4 <= yn) return (s = me(g, h + 4, v).times(0.5)), (s.s = u.s), s;
  }
  for (
    g.precision = a = h + 10,
      g.rounding = 1,
      r = Math.min(28, (a / _ + 2) | 0),
      e = r;
    e;
    --e
  )
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (
    I = !1, t = Math.ceil(a / _), n = 1, l = u.times(u), s = new g(u), i = u;
    e !== -1;

  )
    if (
      ((i = i.times(l)),
      (o = s.minus(i.div((n += 2)))),
      (i = i.times(l)),
      (s = o.plus(i.div((n += 2)))),
      s.d[t] !== void 0)
    )
      for (e = t; s.d[e] === o.d[e] && e--; );
  return (
    r && (s = s.times(2 << (r - 1))),
    (I = !0),
    O(s, (g.precision = h), (g.rounding = v), !0)
  );
};
S.isFinite = function () {
  return !!this.d;
};
S.isInteger = S.isInt = function () {
  return !!this.d && te(this.e / _) > this.d.length - 2;
};
S.isNaN = function () {
  return !this.s;
};
S.isNegative = S.isNeg = function () {
  return this.s < 0;
};
S.isPositive = S.isPos = function () {
  return this.s > 0;
};
S.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
S.lessThan = S.lt = function (e) {
  return this.cmp(e) < 0;
};
S.lessThanOrEqualTo = S.lte = function (e) {
  return this.cmp(e) < 1;
};
S.logarithm = S.log = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = this,
    g = u.constructor,
    h = g.precision,
    v = g.rounding,
    R = 5;
  if (e == null) (e = new g(10)), (t = !0);
  else {
    if (((e = new g(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1)))
      return new g(NaN);
    t = e.eq(10);
  }
  if (((r = u.d), u.s < 0 || !r || !r[0] || u.eq(1)))
    return new g(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1) o = !0;
    else {
      for (i = r[0]; i % 10 === 0; ) i /= 10;
      o = i !== 1;
    }
  if (
    ((I = !1),
    (a = h + R),
    (s = Ne(u, a)),
    (n = t ? ar(g, a + 10) : Ne(e, a)),
    (l = $(s, n, a, 1)),
    It(l.d, (i = h), v))
  )
    do
      if (
        ((a += 10),
        (s = Ne(u, a)),
        (n = t ? ar(g, a + 10) : Ne(e, a)),
        (l = $(s, n, a, 1)),
        !o)
      ) {
        +Z(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = O(l, h + 1, 0));
        break;
      }
    while (It(l.d, (i += 10), v));
  return (I = !0), O(l, h, v);
};
S.minus = S.sub = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g,
    h,
    v,
    R = this,
    C = R.constructor;
  if (((e = new C(e)), !R.d || !e.d))
    return (
      !R.s || !e.s
        ? (e = new C(NaN))
        : R.d
          ? (e.s = -e.s)
          : (e = new C(e.d || R.s !== e.s ? R : NaN)),
      e
    );
  if (R.s != e.s) return (e.s = -e.s), R.plus(e);
  if (
    ((u = R.d), (v = e.d), (a = C.precision), (l = C.rounding), !u[0] || !v[0])
  ) {
    if (v[0]) e.s = -e.s;
    else if (u[0]) e = new C(R);
    else return new C(l === 3 ? -0 : 0);
    return I ? O(e, a, l) : e;
  }
  if (((r = te(e.e / _)), (g = te(R.e / _)), (u = u.slice()), (o = g - r), o)) {
    for (
      h = o < 0,
        h
          ? ((t = u), (o = -o), (s = v.length))
          : ((t = v), (r = g), (s = u.length)),
        n = Math.max(Math.ceil(a / _), s) + 2,
        o > n && ((o = n), (t.length = 1)),
        t.reverse(),
        n = o;
      n--;

    )
      t.push(0);
    t.reverse();
  } else {
    for (n = u.length, s = v.length, h = n < s, h && (s = n), n = 0; n < s; n++)
      if (u[n] != v[n]) {
        h = u[n] < v[n];
        break;
      }
    o = 0;
  }
  for (
    h && ((t = u), (u = v), (v = t), (e.s = -e.s)),
      s = u.length,
      n = v.length - s;
    n > 0;
    --n
  )
    u[s++] = 0;
  for (n = v.length; n > o; ) {
    if (u[--n] < v[n]) {
      for (i = n; i && u[--i] === 0; ) u[i] = ge - 1;
      --u[i], (u[n] += ge);
    }
    u[n] -= v[n];
  }
  for (; u[--s] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --r;
  return u[0]
    ? ((e.d = u), (e.e = ur(u, r)), I ? O(e, a, l) : e)
    : new C(l === 3 ? -0 : 0);
};
S.modulo = S.mod = function (e) {
  var t,
    r = this,
    n = r.constructor;
  return (
    (e = new n(e)),
    !r.d || !e.s || (e.d && !e.d[0])
      ? new n(NaN)
      : !e.d || (r.d && !r.d[0])
        ? O(new n(r), n.precision, n.rounding)
        : ((I = !1),
          n.modulo == 9
            ? ((t = $(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
            : (t = $(r, e, 0, n.modulo, 1)),
          (t = t.times(e)),
          (I = !0),
          r.minus(t))
  );
};
S.naturalExponential = S.exp = function () {
  return wn(this);
};
S.naturalLogarithm = S.ln = function () {
  return Ne(this);
};
S.negated = S.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s), O(e);
};
S.plus = S.add = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g,
    h = this,
    v = h.constructor;
  if (((e = new v(e)), !h.d || !e.d))
    return (
      !h.s || !e.s
        ? (e = new v(NaN))
        : h.d || (e = new v(e.d || h.s === e.s ? h : NaN)),
      e
    );
  if (h.s != e.s) return (e.s = -e.s), h.minus(e);
  if (
    ((u = h.d), (g = e.d), (a = v.precision), (l = v.rounding), !u[0] || !g[0])
  )
    return g[0] || (e = new v(h)), I ? O(e, a, l) : e;
  if (((o = te(h.e / _)), (n = te(e.e / _)), (u = u.slice()), (i = o - n), i)) {
    for (
      i < 0
        ? ((r = u), (i = -i), (s = g.length))
        : ((r = g), (n = o), (s = u.length)),
        o = Math.ceil(a / _),
        s = o > s ? o + 1 : s + 1,
        i > s && ((i = s), (r.length = 1)),
        r.reverse();
      i--;

    )
      r.push(0);
    r.reverse();
  }
  for (
    s = u.length,
      i = g.length,
      s - i < 0 && ((i = s), (r = g), (g = u), (u = r)),
      t = 0;
    i;

  )
    (t = ((u[--i] = u[i] + g[i] + t) / ge) | 0), (u[i] %= ge);
  for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; ) u.pop();
  return (e.d = u), (e.e = ur(u, n)), I ? O(e, a, l) : e;
};
S.precision = S.sd = function (e) {
  var t,
    r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(De + e);
  return (
    r.d ? ((t = no(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t
  );
};
S.round = function () {
  var e = this,
    t = e.constructor;
  return O(new t(e), e.e + 1, t.rounding);
};
S.sine = S.sin = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + _),
        (n.rounding = 1),
        (r = Sl(n, ao(n, r))),
        (n.precision = e),
        (n.rounding = t),
        O(Me > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
S.squareRoot = S.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s = this,
    a = s.d,
    l = s.e,
    u = s.s,
    g = s.constructor;
  if (u !== 1 || !a || !a[0])
    return new g(!u || (u < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0);
  for (
    I = !1,
      u = Math.sqrt(+s),
      u == 0 || u == 1 / 0
        ? ((t = Z(a)),
          (t.length + l) % 2 == 0 && (t += "0"),
          (u = Math.sqrt(t)),
          (l = te((l + 1) / 2) - (l < 0 || l % 2)),
          u == 1 / 0
            ? (t = "5e" + l)
            : ((t = u.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + l)),
          (n = new g(t)))
        : (n = new g(u.toString())),
      r = (l = g.precision) + 3;
    ;

  )
    if (
      ((o = n),
      (n = o.plus($(s, o, r + 2, 1)).times(0.5)),
      Z(o.d).slice(0, r) === (t = Z(n.d)).slice(0, r))
    )
      if (((t = t.slice(r - 3, r + 1)), t == "9999" || (!i && t == "4999"))) {
        if (!i && (O(o, l + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        (r += 4), (i = 1);
      } else {
        (!+t || (!+t.slice(1) && t.charAt(0) == "5")) &&
          (O(n, l + 1, 1), (e = !n.times(n).eq(s)));
        break;
      }
  return (I = !0), O(n, l, g.rounding, e);
};
S.tangent = S.tan = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 10),
        (n.rounding = 1),
        (r = r.sin()),
        (r.s = 1),
        (r = $(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
        (n.precision = e),
        (n.rounding = t),
        O(Me == 2 || Me == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
S.times = S.mul = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g = this,
    h = g.constructor,
    v = g.d,
    R = (e = new h(e)).d;
  if (((e.s *= g.s), !v || !v[0] || !R || !R[0]))
    return new h(
      !e.s || (v && !v[0] && !R) || (R && !R[0] && !v)
        ? NaN
        : !v || !R
          ? e.s / 0
          : e.s * 0,
    );
  for (
    r = te(g.e / _) + te(e.e / _),
      l = v.length,
      u = R.length,
      l < u && ((o = v), (v = R), (R = o), (s = l), (l = u), (u = s)),
      o = [],
      s = l + u,
      n = s;
    n--;

  )
    o.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      (a = o[i] + R[n] * v[i - n - 1] + t),
        (o[i--] = a % ge | 0),
        (t = (a / ge) | 0);
    o[i] = (o[i] + t) % ge | 0;
  }
  for (; !o[--s]; ) o.pop();
  return (
    t ? ++r : o.shift(),
    (e.d = o),
    (e.e = ur(o, r)),
    I ? O(e, h.precision, h.rounding) : e
  );
};
S.toBinary = function (e, t) {
  return En(this, 2, e, t);
};
S.toDecimalPlaces = S.toDP = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (ae(e, 0, Be),
        t === void 0 ? (t = n.rounding) : ae(t, 0, 8),
        O(r, e + r.e + 1, t))
  );
};
S.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = xe(n, !0))
      : (ae(e, 0, Be),
        t === void 0 ? (t = i.rounding) : ae(t, 0, 8),
        (n = O(new i(n), e + 1, t)),
        (r = xe(n, !0, e + 1))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
S.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    o = i.constructor;
  return (
    e === void 0
      ? (r = xe(i))
      : (ae(e, 0, Be),
        t === void 0 ? (t = o.rounding) : ae(t, 0, 8),
        (n = O(new o(i), e + i.e + 1, t)),
        (r = xe(n, !1, e + n.e + 1))),
    i.isNeg() && !i.isZero() ? "-" + r : r
  );
};
S.toFraction = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g,
    h,
    v,
    R = this,
    C = R.d,
    A = R.constructor;
  if (!C) return new A(R);
  if (
    ((u = r = new A(1)),
    (n = l = new A(0)),
    (t = new A(n)),
    (o = t.e = no(C) - R.e - 1),
    (s = o % _),
    (t.d[0] = J(10, s < 0 ? _ + s : s)),
    e == null)
  )
    e = o > 0 ? t : u;
  else {
    if (((a = new A(e)), !a.isInt() || a.lt(u))) throw Error(De + a);
    e = a.gt(t) ? (o > 0 ? t : u) : a;
  }
  for (
    I = !1,
      a = new A(Z(C)),
      g = A.precision,
      A.precision = o = C.length * _ * 2;
    (h = $(a, t, 0, 1, 1)), (i = r.plus(h.times(n))), i.cmp(e) != 1;

  )
    (r = n),
      (n = i),
      (i = u),
      (u = l.plus(h.times(i))),
      (l = i),
      (i = t),
      (t = a.minus(h.times(i))),
      (a = i);
  return (
    (i = $(e.minus(r), n, 0, 1, 1)),
    (l = l.plus(i.times(u))),
    (r = r.plus(i.times(n))),
    (l.s = u.s = R.s),
    (v =
      $(u, n, o, 1)
        .minus(R)
        .abs()
        .cmp($(l, r, o, 1).minus(R).abs()) < 1
        ? [u, n]
        : [l, r]),
    (A.precision = g),
    (I = !0),
    v
  );
};
S.toHexadecimal = S.toHex = function (e, t) {
  return En(this, 16, e, t);
};
S.toNearest = function (e, t) {
  var r = this,
    n = r.constructor;
  if (((r = new n(r)), e == null)) {
    if (!r.d) return r;
    (e = new n(1)), (t = n.rounding);
  } else {
    if (((e = new n(e)), t === void 0 ? (t = n.rounding) : ae(t, 0, 8), !r.d))
      return e.s ? r : e;
    if (!e.d) return e.s && (e.s = r.s), e;
  }
  return (
    e.d[0]
      ? ((I = !1), (r = $(r, e, 0, t, 1).times(e)), (I = !0), O(r))
      : ((e.s = r.s), (r = e)),
    r
  );
};
S.toNumber = function () {
  return +this;
};
S.toOctal = function (e, t) {
  return En(this, 8, e, t);
};
S.toPower = S.pow = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a = this,
    l = a.constructor,
    u = +(e = new l(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(J(+a, u));
  if (((a = new l(a)), a.eq(1))) return a;
  if (((n = l.precision), (o = l.rounding), e.eq(1))) return O(a, n, o);
  if (((t = te(e.e / _)), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Pl))
    return (i = io(l, a, r, n)), e.s < 0 ? new l(1).div(i) : O(i, n, o);
  if (((s = a.s), s < 0)) {
    if (t < e.d.length - 1) return new l(NaN);
    if ((e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1))
      return (a.s = s), a;
  }
  return (
    (r = J(+a, u)),
    (t =
      r == 0 || !isFinite(r)
        ? te(u * (Math.log("0." + Z(a.d)) / Math.LN10 + a.e + 1))
        : new l(r + "").e),
    t > l.maxE + 1 || t < l.minE - 1
      ? new l(t > 0 ? s / 0 : 0)
      : ((I = !1),
        (l.rounding = a.s = 1),
        (r = Math.min(12, (t + "").length)),
        (i = wn(e.times(Ne(a, n + r)), n)),
        i.d &&
          ((i = O(i, n + 5, 1)),
          It(i.d, n, o) &&
            ((t = n + 10),
            (i = O(wn(e.times(Ne(a, t + r)), t), t + 5, 1)),
            +Z(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = O(i, n + 1, 0)))),
        (i.s = s),
        (I = !0),
        (l.rounding = o),
        O(i, n, o))
  );
};
S.toPrecision = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = xe(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
      : (ae(e, 1, Be),
        t === void 0 ? (t = i.rounding) : ae(t, 0, 8),
        (n = O(new i(n), e, t)),
        (r = xe(n, e <= n.e || n.e <= i.toExpNeg, e))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
S.toSignificantDigits = S.toSD = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (ae(e, 1, Be), t === void 0 ? (t = n.rounding) : ae(t, 0, 8)),
    O(new n(r), e, t)
  );
};
S.toString = function () {
  var e = this,
    t = e.constructor,
    r = xe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
S.truncated = S.trunc = function () {
  return O(new this.constructor(this), this.e + 1, 1);
};
S.valueOf = S.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = xe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Z(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    o = "",
    s = e[0];
  if (i > 0) {
    for (o += s, t = 1; t < i; t++)
      (n = e[t] + ""), (r = _ - n.length), r && (o += Ie(r)), (o += n);
    (s = e[t]), (n = s + ""), (r = _ - n.length), r && (o += Ie(r));
  } else if (s === 0) return "0";
  for (; s % 10 === 0; ) s /= 10;
  return o + s;
}
function ae(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(De + e);
}
function It(e, t, r, n) {
  var i, o, s, a;
  for (o = e[0]; o >= 10; o /= 10) --t;
  return (
    --t < 0 ? ((t += _), (i = 0)) : ((i = Math.ceil((t + 1) / _)), (t %= _)),
    (o = J(10, _ - t)),
    (a = e[i] % o | 0),
    n == null
      ? t < 3
        ? (t == 0 ? (a = (a / 100) | 0) : t == 1 && (a = (a / 10) | 0),
          (s =
            (r < 4 && a == 99999) ||
            (r > 3 && a == 49999) ||
            a == 5e4 ||
            a == 0))
        : (s =
            (((r < 4 && a + 1 == o) || (r > 3 && a + 1 == o / 2)) &&
              ((e[i + 1] / o / 100) | 0) == J(10, t - 2) - 1) ||
            ((a == o / 2 || a == 0) && ((e[i + 1] / o / 100) | 0) == 0))
      : t < 4
        ? (t == 0
            ? (a = (a / 1e3) | 0)
            : t == 1
              ? (a = (a / 100) | 0)
              : t == 2 && (a = (a / 10) | 0),
          (s = ((n || r < 4) && a == 9999) || (!n && r > 3 && a == 4999)))
        : (s =
            (((n || r < 4) && a + 1 == o) || (!n && r > 3 && a + 1 == o / 2)) &&
            ((e[i + 1] / o / 1e3) | 0) == J(10, t - 3) - 1),
    s
  );
}
function ir(e, t, r) {
  for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= t;
    for (i[0] += gn.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
      i[n] > r - 1 &&
        (i[n + 1] === void 0 && (i[n + 1] = 0),
        (i[n + 1] += (i[n] / r) | 0),
        (i[n] %= r));
  }
  return i.reverse();
}
function Cl(e, t) {
  var r, n, i;
  if (t.isZero()) return t;
  (n = t.d.length),
    n < 32
      ? ((r = Math.ceil(n / 3)), (i = (1 / cr(4, r)).toString()))
      : ((r = 16), (i = "2.3283064365386962890625e-10")),
    (e.precision += r),
    (t = lt(e, 1, t.times(i), new e(1)));
  for (var o = r; o--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return (e.precision -= r), t;
}
var $ = (function () {
  function e(n, i, o) {
    var s,
      a = 0,
      l = n.length;
    for (n = n.slice(); l--; )
      (s = n[l] * i + a), (n[l] = s % o | 0), (a = (s / o) | 0);
    return a && n.unshift(a), n;
  }
  function t(n, i, o, s) {
    var a, l;
    if (o != s) l = o > s ? 1 : -1;
    else
      for (a = l = 0; a < o; a++)
        if (n[a] != i[a]) {
          l = n[a] > i[a] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, o, s) {
    for (var a = 0; o--; )
      (n[o] -= a), (a = n[o] < i[o] ? 1 : 0), (n[o] = a * s + n[o] - i[o]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, o, s, a, l) {
    var u,
      g,
      h,
      v,
      R,
      C,
      A,
      F,
      L,
      N,
      M,
      k,
      z,
      j,
      ht,
      Q,
      ie,
      Ae,
      X,
      ze,
      Vt = n.constructor,
      Nr = n.s == i.s ? 1 : -1,
      ee = n.d,
      B = i.d;
    if (!ee || !ee[0] || !B || !B[0])
      return new Vt(
        !n.s || !i.s || (ee ? B && ee[0] == B[0] : !B)
          ? NaN
          : (ee && ee[0] == 0) || !B
            ? Nr * 0
            : Nr / 0,
      );
    for (
      l
        ? ((R = 1), (g = n.e - i.e))
        : ((l = ge), (R = _), (g = te(n.e / R) - te(i.e / R))),
        X = B.length,
        ie = ee.length,
        L = new Vt(Nr),
        N = L.d = [],
        h = 0;
      B[h] == (ee[h] || 0);
      h++
    );
    if (
      (B[h] > (ee[h] || 0) && g--,
      o == null
        ? ((j = o = Vt.precision), (s = Vt.rounding))
        : a
          ? (j = o + (n.e - i.e) + 1)
          : (j = o),
      j < 0)
    )
      N.push(1), (C = !0);
    else {
      if (((j = (j / R + 2) | 0), (h = 0), X == 1)) {
        for (v = 0, B = B[0], j++; (h < ie || v) && j--; h++)
          (ht = v * l + (ee[h] || 0)), (N[h] = (ht / B) | 0), (v = ht % B | 0);
        C = v || h < ie;
      } else {
        for (
          v = (l / (B[0] + 1)) | 0,
            v > 1 &&
              ((B = e(B, v, l)),
              (ee = e(ee, v, l)),
              (X = B.length),
              (ie = ee.length)),
            Q = X,
            M = ee.slice(0, X),
            k = M.length;
          k < X;

        )
          M[k++] = 0;
        (ze = B.slice()), ze.unshift(0), (Ae = B[0]), B[1] >= l / 2 && ++Ae;
        do
          (v = 0),
            (u = t(B, M, X, k)),
            u < 0
              ? ((z = M[0]),
                X != k && (z = z * l + (M[1] || 0)),
                (v = (z / Ae) | 0),
                v > 1
                  ? (v >= l && (v = l - 1),
                    (A = e(B, v, l)),
                    (F = A.length),
                    (k = M.length),
                    (u = t(A, M, F, k)),
                    u == 1 && (v--, r(A, X < F ? ze : B, F, l)))
                  : (v == 0 && (u = v = 1), (A = B.slice())),
                (F = A.length),
                F < k && A.unshift(0),
                r(M, A, k, l),
                u == -1 &&
                  ((k = M.length),
                  (u = t(B, M, X, k)),
                  u < 1 && (v++, r(M, X < k ? ze : B, k, l))),
                (k = M.length))
              : u === 0 && (v++, (M = [0])),
            (N[h++] = v),
            u && M[0] ? (M[k++] = ee[Q] || 0) : ((M = [ee[Q]]), (k = 1));
        while ((Q++ < ie || M[0] !== void 0) && j--);
        C = M[0] !== void 0;
      }
      N[0] || N.shift();
    }
    if (R == 1) (L.e = g), (Zi = C);
    else {
      for (h = 1, v = N[0]; v >= 10; v /= 10) h++;
      (L.e = h + g * R - 1), O(L, a ? o + L.e + 1 : o, s, C);
    }
    return L;
  };
})();
function O(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    u,
    g,
    h,
    v,
    R = e.constructor;
  e: if (t != null) {
    if (((h = e.d), !h)) return e;
    for (i = 1, a = h[0]; a >= 10; a /= 10) i++;
    if (((o = t - i), o < 0))
      (o += _),
        (s = t),
        (g = h[(v = 0)]),
        (l = (g / J(10, i - s - 1)) % 10 | 0);
    else if (((v = Math.ceil((o + 1) / _)), (a = h.length), v >= a))
      if (n) {
        for (; a++ <= v; ) h.push(0);
        (g = l = 0), (i = 1), (o %= _), (s = o - _ + 1);
      } else break e;
    else {
      for (g = a = h[v], i = 1; a >= 10; a /= 10) i++;
      (o %= _),
        (s = o - _ + i),
        (l = s < 0 ? 0 : (g / J(10, i - s - 1)) % 10 | 0);
    }
    if (
      ((n =
        n ||
        t < 0 ||
        h[v + 1] !== void 0 ||
        (s < 0 ? g : g % J(10, i - s - 1))),
      (u =
        r < 4
          ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : l > 5 ||
            (l == 5 &&
              (r == 4 ||
                n ||
                (r == 6 &&
                  (o > 0 ? (s > 0 ? g / J(10, i - s) : 0) : h[v - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7)))),
      t < 1 || !h[0])
    )
      return (
        (h.length = 0),
        u
          ? ((t -= e.e + 1), (h[0] = J(10, (_ - (t % _)) % _)), (e.e = -t || 0))
          : (h[0] = e.e = 0),
        e
      );
    if (
      (o == 0
        ? ((h.length = v), (a = 1), v--)
        : ((h.length = v + 1),
          (a = J(10, _ - o)),
          (h[v] = s > 0 ? ((g / J(10, i - s)) % J(10, s) | 0) * a : 0)),
      u)
    )
      for (;;)
        if (v == 0) {
          for (o = 1, s = h[0]; s >= 10; s /= 10) o++;
          for (s = h[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, h[0] == ge && (h[0] = 1));
          break;
        } else {
          if (((h[v] += a), h[v] != ge)) break;
          (h[v--] = 0), (a = 1);
        }
    for (o = h.length; h[--o] === 0; ) h.pop();
  }
  return (
    I &&
      (e.e > R.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < R.minE && ((e.e = 0), (e.d = [0]))),
    e
  );
}
function xe(e, t, r) {
  if (!e.isFinite()) return so(e);
  var n,
    i = e.e,
    o = Z(e.d),
    s = o.length;
  return (
    t
      ? (r && (n = r - s) > 0
          ? (o = o.charAt(0) + "." + o.slice(1) + Ie(n))
          : s > 1 && (o = o.charAt(0) + "." + o.slice(1)),
        (o = o + (e.e < 0 ? "e" : "e+") + e.e))
      : i < 0
        ? ((o = "0." + Ie(-i - 1) + o), r && (n = r - s) > 0 && (o += Ie(n)))
        : i >= s
          ? ((o += Ie(i + 1 - s)),
            r && (n = r - i - 1) > 0 && (o = o + "." + Ie(n)))
          : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)),
            r && (n = r - s) > 0 && (i + 1 === s && (o += "."), (o += Ie(n)))),
    o
  );
}
function ur(e, t) {
  var r = e[0];
  for (t *= _; r >= 10; r /= 10) t++;
  return t;
}
function ar(e, t, r) {
  if (t > Tl) throw ((I = !0), r && (e.precision = r), Error(Xi));
  return O(new e(or), t, 1, !0);
}
function me(e, t, r) {
  if (t > yn) throw Error(Xi);
  return O(new e(sr), t, r, !0);
}
function no(e) {
  var t = e.length - 1,
    r = t * _ + 1;
  if (((t = e[t]), t)) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
function Ie(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function io(e, t, r, n) {
  var i,
    o = new e(1),
    s = Math.ceil(n / _ + 4);
  for (I = !1; ; ) {
    if (
      (r % 2 && ((o = o.times(t)), zi(o.d, s) && (i = !0)),
      (r = te(r / 2)),
      r === 0)
    ) {
      (r = o.d.length - 1), i && o.d[r] === 0 && ++o.d[r];
      break;
    }
    (t = t.times(t)), zi(t.d, s);
  }
  return (I = !0), o;
}
function Ki(e) {
  return e.d[e.d.length - 1] & 1;
}
function oo(e, t, r) {
  for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
    if (((n = new e(t[o])), n.s)) i[r](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function wn(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = 0,
    g = 0,
    h = 0,
    v = e.constructor,
    R = v.rounding,
    C = v.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new v(
      e.d
        ? e.d[0]
          ? e.s < 0
            ? 0
            : 1 / 0
          : 1
        : e.s
          ? e.s < 0
            ? 0
            : e
          : NaN,
    );
  for (
    t == null ? ((I = !1), (l = C)) : (l = t), a = new v(0.03125);
    e.e > -2;

  )
    (e = e.times(a)), (h += 5);
  for (
    n = ((Math.log(J(2, h)) / Math.LN10) * 2 + 5) | 0,
      l += n,
      r = o = s = new v(1),
      v.precision = l;
    ;

  ) {
    if (
      ((o = O(o.times(e), l, 1)),
      (r = r.times(++g)),
      (a = s.plus($(o, r, l, 1))),
      Z(a.d).slice(0, l) === Z(s.d).slice(0, l))
    ) {
      for (i = h; i--; ) s = O(s.times(s), l, 1);
      if (t == null)
        if (u < 3 && It(s.d, l - n, R, u))
          (v.precision = l += 10), (r = o = a = new v(1)), (g = 0), u++;
        else return O(s, (v.precision = C), R, (I = !0));
      else return (v.precision = C), s;
    }
    s = a;
  }
}
function Ne(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g,
    h,
    v,
    R = 1,
    C = 10,
    A = e,
    F = A.d,
    L = A.constructor,
    N = L.rounding,
    M = L.precision;
  if (A.s < 0 || !F || !F[0] || (!A.e && F[0] == 1 && F.length == 1))
    return new L(F && !F[0] ? -1 / 0 : A.s != 1 ? NaN : F ? 0 : A);
  if (
    (t == null ? ((I = !1), (g = M)) : (g = t),
    (L.precision = g += C),
    (r = Z(F)),
    (n = r.charAt(0)),
    Math.abs((o = A.e)) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (A = A.times(e)), (r = Z(A.d)), (n = r.charAt(0)), R++;
    (o = A.e),
      n > 1 ? ((A = new L("0." + r)), o++) : (A = new L(n + "." + r.slice(1)));
  } else
    return (
      (u = ar(L, g + 2, M).times(o + "")),
      (A = Ne(new L(n + "." + r.slice(1)), g - C).plus(u)),
      (L.precision = M),
      t == null ? O(A, M, N, (I = !0)) : A
    );
  for (
    h = A,
      l = s = A = $(A.minus(1), A.plus(1), g, 1),
      v = O(A.times(A), g, 1),
      i = 3;
    ;

  ) {
    if (
      ((s = O(s.times(v), g, 1)),
      (u = l.plus($(s, new L(i), g, 1))),
      Z(u.d).slice(0, g) === Z(l.d).slice(0, g))
    )
      if (
        ((l = l.times(2)),
        o !== 0 && (l = l.plus(ar(L, g + 2, M).times(o + ""))),
        (l = $(l, new L(R), g, 1)),
        t == null)
      )
        if (It(l.d, g - C, N, a))
          (L.precision = g += C),
            (u = s = A = $(h.minus(1), h.plus(1), g, 1)),
            (v = O(A.times(A), g, 1)),
            (i = a = 1);
        else return O(l, (L.precision = M), N, (I = !0));
      else return (L.precision = M), l;
    (l = u), (i += 2);
  }
}
function so(e) {
  return String((e.s * e.s) / 0);
}
function bn(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (e.e = r = r - n - 1),
      (e.d = []),
      (n = (r + 1) % _),
      r < 0 && (n += _),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= _; n < i; )
        e.d.push(+t.slice(n, (n += _)));
      (t = t.slice(n)), (n = _ - t.length);
    } else n -= i;
    for (; n--; ) t += "0";
    e.d.push(+t),
      I &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function Al(e, t) {
  var r, n, i, o, s, a, l, u, g;
  if (t.indexOf("_") > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), ro.test(t))) return bn(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
  if (xl.test(t)) (r = 16), (t = t.toLowerCase());
  else if (El.test(t)) r = 2;
  else if (vl.test(t)) r = 8;
  else throw Error(De + t);
  for (
    o = t.search(/p/i),
      o > 0
        ? ((l = +t.slice(o + 1)), (t = t.substring(2, o)))
        : (t = t.slice(2)),
      o = t.indexOf("."),
      s = o >= 0,
      n = e.constructor,
      s &&
        ((t = t.replace(".", "")),
        (a = t.length),
        (o = a - o),
        (i = io(n, new n(r), o, o * 2))),
      u = ir(t, r, ge),
      g = u.length - 1,
      o = g;
    u[o] === 0;
    --o
  )
    u.pop();
  return o < 0
    ? new n(e.s * 0)
    : ((e.e = ur(u, g)),
      (e.d = u),
      (I = !1),
      s && (e = $(e, i, a * 4)),
      l && (e = e.times(Math.abs(l) < 54 ? J(2, l) : Ke.pow(2, l))),
      (I = !0),
      e);
}
function Sl(e, t) {
  var r,
    n = t.d.length;
  if (n < 3) return t.isZero() ? t : lt(e, 2, t, t);
  (r = 1.4 * Math.sqrt(n)),
    (r = r > 16 ? 16 : r | 0),
    (t = t.times(1 / cr(5, r))),
    (t = lt(e, 2, t, t));
  for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
    (i = t.times(t)), (t = t.times(o.plus(i.times(s.times(i).minus(a)))));
  return t;
}
function lt(e, t, r, n, i) {
  var o,
    s,
    a,
    l,
    u = 1,
    g = e.precision,
    h = Math.ceil(g / _);
  for (I = !1, l = r.times(r), a = new e(n); ; ) {
    if (
      ((s = $(a.times(l), new e(t++ * t++), g, 1)),
      (a = i ? n.plus(s) : n.minus(s)),
      (n = $(s.times(l), new e(t++ * t++), g, 1)),
      (s = a.plus(n)),
      s.d[h] !== void 0)
    ) {
      for (o = h; s.d[o] === a.d[o] && o--; );
      if (o == -1) break;
    }
    (o = a), (a = n), (n = s), (s = o), u++;
  }
  return (I = !0), (s.d.length = h + 1), s;
}
function cr(e, t) {
  for (var r = e; --t; ) r *= e;
  return r;
}
function ao(e, t) {
  var r,
    n = t.s < 0,
    i = me(e, e.precision, 1),
    o = i.times(0.5);
  if (((t = t.abs()), t.lte(o))) return (Me = n ? 4 : 1), t;
  if (((r = t.divToInt(i)), r.isZero())) Me = n ? 3 : 2;
  else {
    if (((t = t.minus(r.times(i))), t.lte(o)))
      return (Me = Ki(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
    Me = Ki(r) ? (n ? 1 : 4) : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function En(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    u,
    g,
    h,
    v,
    R = e.constructor,
    C = r !== void 0;
  if (
    (C
      ? (ae(r, 1, Be), n === void 0 ? (n = R.rounding) : ae(n, 0, 8))
      : ((r = R.precision), (n = R.rounding)),
    !e.isFinite())
  )
    g = so(e);
  else {
    for (
      g = xe(e),
        s = g.indexOf("."),
        C
          ? ((i = 2), t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2))
          : (i = t),
        s >= 0 &&
          ((g = g.replace(".", "")),
          (v = new R(1)),
          (v.e = g.length - s),
          (v.d = ir(xe(v), 10, i)),
          (v.e = v.d.length)),
        h = ir(g, 10, i),
        o = l = h.length;
      h[--l] == 0;

    )
      h.pop();
    if (!h[0]) g = C ? "0p+0" : "0";
    else {
      if (
        (s < 0
          ? o--
          : ((e = new R(e)),
            (e.d = h),
            (e.e = o),
            (e = $(e, v, r, n, 0, i)),
            (h = e.d),
            (o = e.e),
            (u = Zi)),
        (s = h[r]),
        (a = i / 2),
        (u = u || h[r + 1] !== void 0),
        (u =
          n < 4
            ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              (s === a &&
                (n === 4 ||
                  u ||
                  (n === 6 && h[r - 1] & 1) ||
                  n === (e.s < 0 ? 8 : 7)))),
        (h.length = r),
        u)
      )
        for (; ++h[--r] > i - 1; ) (h[r] = 0), r || (++o, h.unshift(1));
      for (l = h.length; !h[l - 1]; --l);
      for (s = 0, g = ""; s < l; s++) g += gn.charAt(h[s]);
      if (C) {
        if (l > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --l; l % s; l++) g += "0";
            for (h = ir(g, i, t), l = h.length; !h[l - 1]; --l);
            for (s = 1, g = "1."; s < l; s++) g += gn.charAt(h[s]);
          } else g = g.charAt(0) + "." + g.slice(1);
        g = g + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; ) g = "0" + g;
        g = "0." + g;
      } else if (++o > l) for (o -= l; o--; ) g += "0";
      else o < l && (g = g.slice(0, o) + "." + g.slice(o));
    }
    g = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + g;
  }
  return e.s < 0 ? "-" + g : g;
}
function zi(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function Rl(e) {
  return new this(e).abs();
}
function kl(e) {
  return new this(e).acos();
}
function Ol(e) {
  return new this(e).acosh();
}
function Fl(e, t) {
  return new this(e).plus(t);
}
function Ml(e) {
  return new this(e).asin();
}
function _l(e) {
  return new this(e).asinh();
}
function Ll(e) {
  return new this(e).atan();
}
function Il(e) {
  return new this(e).atanh();
}
function Nl(e, t) {
  (e = new this(e)), (t = new this(t));
  var r,
    n = this.precision,
    i = this.rounding,
    o = n + 4;
  return (
    !e.s || !t.s
      ? (r = new this(NaN))
      : !e.d && !t.d
        ? ((r = me(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
        : !t.d || e.isZero()
          ? ((r = t.s < 0 ? me(this, n, i) : new this(0)), (r.s = e.s))
          : !e.d || t.isZero()
            ? ((r = me(this, o, 1).times(0.5)), (r.s = e.s))
            : t.s < 0
              ? ((this.precision = o),
                (this.rounding = 1),
                (r = this.atan($(e, t, o, 1))),
                (t = me(this, o, 1)),
                (this.precision = n),
                (this.rounding = i),
                (r = e.s < 0 ? r.minus(t) : r.plus(t)))
              : (r = this.atan($(e, t, o, 1))),
    r
  );
}
function Dl(e) {
  return new this(e).cbrt();
}
function Bl(e) {
  return O((e = new this(e)), e.e + 1, 2);
}
function $l(e, t, r) {
  return new this(e).clamp(t, r);
}
function jl(e) {
  if (!e || typeof e != "object") throw Error(lr + "Object expected");
  var t,
    r,
    n,
    i = e.defaults === !0,
    o = [
      "precision",
      1,
      Be,
      "rounding",
      0,
      8,
      "toExpNeg",
      -at,
      0,
      "toExpPos",
      0,
      at,
      "maxE",
      0,
      at,
      "minE",
      -at,
      0,
      "modulo",
      0,
      9,
    ];
  for (t = 0; t < o.length; t += 3)
    if (((r = o[t]), i && (this[r] = hn[r]), (n = e[r]) !== void 0))
      if (te(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(De + r + ": " + n);
  if (((r = "crypto"), i && (this[r] = hn[r]), (n = e[r]) !== void 0))
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (
          typeof crypto < "u" &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[r] = !0;
        else throw Error(eo);
      else this[r] = !1;
    else throw Error(De + r + ": " + n);
  return this;
}
function Ul(e) {
  return new this(e).cos();
}
function ql(e) {
  return new this(e).cosh();
}
function lo(e) {
  var t, r, n;
  function i(o) {
    var s,
      a,
      l,
      u = this;
    if (!(u instanceof i)) return new i(o);
    if (((u.constructor = i), Yi(o))) {
      (u.s = o.s),
        I
          ? !o.d || o.e > i.maxE
            ? ((u.e = NaN), (u.d = null))
            : o.e < i.minE
              ? ((u.e = 0), (u.d = [0]))
              : ((u.e = o.e), (u.d = o.d.slice()))
          : ((u.e = o.e), (u.d = o.d ? o.d.slice() : o.d));
      return;
    }
    if (((l = typeof o), l === "number")) {
      if (o === 0) {
        (u.s = 1 / o < 0 ? -1 : 1), (u.e = 0), (u.d = [0]);
        return;
      }
      if ((o < 0 ? ((o = -o), (u.s = -1)) : (u.s = 1), o === ~~o && o < 1e7)) {
        for (s = 0, a = o; a >= 10; a /= 10) s++;
        I
          ? s > i.maxE
            ? ((u.e = NaN), (u.d = null))
            : s < i.minE
              ? ((u.e = 0), (u.d = [0]))
              : ((u.e = s), (u.d = [o]))
          : ((u.e = s), (u.d = [o]));
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), (u.e = NaN), (u.d = null);
        return;
      }
      return bn(u, o.toString());
    } else if (l !== "string") throw Error(De + o);
    return (
      (a = o.charCodeAt(0)) === 45
        ? ((o = o.slice(1)), (u.s = -1))
        : (a === 43 && (o = o.slice(1)), (u.s = 1)),
      ro.test(o) ? bn(u, o) : Al(u, o)
    );
  }
  if (
    ((i.prototype = S),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.EUCLID = 9),
    (i.config = i.set = jl),
    (i.clone = lo),
    (i.isDecimal = Yi),
    (i.abs = Rl),
    (i.acos = kl),
    (i.acosh = Ol),
    (i.add = Fl),
    (i.asin = Ml),
    (i.asinh = _l),
    (i.atan = Ll),
    (i.atanh = Il),
    (i.atan2 = Nl),
    (i.cbrt = Dl),
    (i.ceil = Bl),
    (i.clamp = $l),
    (i.cos = Ul),
    (i.cosh = ql),
    (i.div = Vl),
    (i.exp = Ql),
    (i.floor = Jl),
    (i.hypot = Wl),
    (i.ln = Gl),
    (i.log = Hl),
    (i.log10 = zl),
    (i.log2 = Kl),
    (i.max = Yl),
    (i.min = Zl),
    (i.mod = Xl),
    (i.mul = eu),
    (i.pow = tu),
    (i.random = ru),
    (i.round = nu),
    (i.sign = iu),
    (i.sin = ou),
    (i.sinh = su),
    (i.sqrt = au),
    (i.sub = lu),
    (i.sum = uu),
    (i.tan = cu),
    (i.tanh = pu),
    (i.trunc = fu),
    e === void 0 && (e = {}),
    e && e.defaults !== !0)
  )
    for (
      n = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto",
      ],
        t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return i.config(e), i;
}
function Vl(e, t) {
  return new this(e).div(t);
}
function Ql(e) {
  return new this(e).exp();
}
function Jl(e) {
  return O((e = new this(e)), e.e + 1, 3);
}
function Wl() {
  var e,
    t,
    r = new this(0);
  for (I = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return (I = !0), new this(1 / 0);
      r = t;
    }
  return (I = !0), r.sqrt();
}
function Yi(e) {
  return e instanceof Ke || (e && e.toStringTag === to) || !1;
}
function Gl(e) {
  return new this(e).ln();
}
function Hl(e, t) {
  return new this(e).log(t);
}
function Kl(e) {
  return new this(e).log(2);
}
function zl(e) {
  return new this(e).log(10);
}
function Yl() {
  return oo(this, arguments, "lt");
}
function Zl() {
  return oo(this, arguments, "gt");
}
function Xl(e, t) {
  return new this(e).mod(t);
}
function eu(e, t) {
  return new this(e).mul(t);
}
function tu(e, t) {
  return new this(e).pow(t);
}
function ru(e) {
  var t,
    r,
    n,
    i,
    o = 0,
    s = new this(1),
    a = [];
  if (
    (e === void 0 ? (e = this.precision) : ae(e, 1, Be),
    (n = Math.ceil(e / _)),
    this.crypto)
  )
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        (i = t[o]),
          i >= 429e7
            ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0])
            : (a[o++] = i % 1e7);
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes((n *= 4)); o < n; )
        (i =
          t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24)),
          i >= 214e7
            ? crypto.randomBytes(4).copy(t, o)
            : (a.push(i % 1e7), (o += 4));
      o = n / 4;
    } else throw Error(eo);
  else for (; o < n; ) a[o++] = (Math.random() * 1e7) | 0;
  for (
    n = a[--o],
      e %= _,
      n && e && ((i = J(10, _ - e)), (a[o] = ((n / i) | 0) * i));
    a[o] === 0;
    o--
  )
    a.pop();
  if (o < 0) (r = 0), (a = [0]);
  else {
    for (r = -1; a[0] === 0; r -= _) a.shift();
    for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
    n < _ && (r -= _ - n);
  }
  return (s.e = r), (s.d = a), s;
}
function nu(e) {
  return O((e = new this(e)), e.e + 1, this.rounding);
}
function iu(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function ou(e) {
  return new this(e).sin();
}
function su(e) {
  return new this(e).sinh();
}
function au(e) {
  return new this(e).sqrt();
}
function lu(e, t) {
  return new this(e).sub(t);
}
function uu() {
  var e = 0,
    t = arguments,
    r = new this(t[e]);
  for (I = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
  return (I = !0), O(r, this.precision, this.rounding);
}
function cu(e) {
  return new this(e).tan();
}
function pu(e) {
  return new this(e).tanh();
}
function fu(e) {
  return O((e = new this(e)), e.e + 1, 1);
}
S[Symbol.for("nodejs.util.inspect.custom")] = S.toString;
S[Symbol.toStringTag] = "Decimal";
var Ke = (S.constructor = lo(hn));
or = new Ke(or);
sr = new Ke(sr);
var ve = Ke;
function ut(e) {
  return Ke.isDecimal(e)
    ? !0
    : e !== null &&
        typeof e == "object" &&
        typeof e.s == "number" &&
        typeof e.e == "number" &&
        typeof e.toFixed == "function" &&
        Array.isArray(e.d);
}
m();
c();
p();
f();
d();
var Nt = class {
  constructor(t, r, n, i, o) {
    (this.modelName = t),
      (this.name = r),
      (this.typeName = n),
      (this.isList = i),
      (this.isEnum = o);
  }
  _toGraphQLInputType() {
    let t = this.isList ? "List" : "",
      r = this.isEnum ? "Enum" : "";
    return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function ct(e) {
  return e instanceof Nt;
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var pr = class {
  constructor(t) {
    this.value = t;
  }
  write(t) {
    t.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
};
m();
c();
p();
f();
d();
var fr = (e) => e,
  dr = { bold: fr, red: fr, green: fr, dim: fr, enabled: !1 },
  uo = { bold: de, red: Ve, green: Et, dim: wt, enabled: !0 },
  pt = {
    write(e) {
      e.writeLine(",");
    },
  };
m();
c();
p();
f();
d();
var Pe = class {
  constructor(t) {
    this.contents = t;
    this.isUnderlined = !1;
    this.color = (t) => t;
  }
  underline() {
    return (this.isUnderlined = !0), this;
  }
  setColor(t) {
    return (this.color = t), this;
  }
  write(t) {
    let r = t.getCurrentLineLength();
    t.write(this.color(this.contents)),
      this.isUnderlined &&
        t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(
            this.color("~".repeat(this.contents.length)),
          );
        });
  }
};
m();
c();
p();
f();
d();
var $e = class {
  constructor() {
    this.hasError = !1;
  }
  markAsError() {
    return (this.hasError = !0), this;
  }
};
var ft = class extends $e {
  constructor() {
    super(...arguments);
    this.items = [];
  }
  addItem(r) {
    return this.items.push(new pr(r)), this;
  }
  getField(r) {
    return this.items[r];
  }
  getPrintWidth() {
    return this.items.length === 0
      ? 2
      : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
  }
  write(r) {
    if (this.items.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithItems(r);
  }
  writeEmpty(r) {
    let n = new Pe("[]");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithItems(r) {
    let { colors: n } = r.context;
    r
      .writeLine("[")
      .withIndent(() => r.writeJoined(pt, this.items).newLine())
      .write("]"),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
  }
  asObject() {}
};
m();
c();
p();
f();
d();
var co = ": ",
  mr = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = !1;
    }
    markAsError() {
      this.hasError = !0;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + co.length;
    }
    write(t) {
      let r = new Pe(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red),
        t.write(r).write(co).write(this.value);
    }
  };
m();
c();
p();
f();
d();
var gr = class e extends $e {
  constructor() {
    super(...arguments);
    this.fields = {};
    this.suggestions = [];
  }
  addField(r) {
    this.fields[r.name] = r;
  }
  addSuggestion(r) {
    this.suggestions.push(r);
  }
  getField(r) {
    return this.fields[r];
  }
  getDeepField(r) {
    let [n, ...i] = r,
      o = this.getField(n);
    if (!o) return;
    let s = o;
    for (let a of i) {
      let l;
      if (
        (s.value instanceof e
          ? (l = s.value.getField(a))
          : s.value instanceof ft && (l = s.value.getField(Number(a))),
        !l)
      )
        return;
      s = l;
    }
    return s;
  }
  getDeepFieldValue(r) {
    return r.length === 0 ? this : this.getDeepField(r)?.value;
  }
  hasField(r) {
    return !!this.getField(r);
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(r) {
    delete this.fields[r];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(r) {
    return this.getField(r)?.value;
  }
  getDeepSubSelectionValue(r) {
    let n = this;
    for (let i of r) {
      if (!(n instanceof e)) return;
      let o = n.getSubSelectionValue(i);
      if (!o) return;
      n = o;
    }
    return n;
  }
  getDeepSelectionParent(r) {
    let n = this.getSelectionParent();
    if (!n) return;
    let i = n;
    for (let o of r) {
      let s = i.value.getFieldValue(o);
      if (!s || !(s instanceof e)) return;
      let a = s.getSelectionParent();
      if (!a) return;
      i = a;
    }
    return i;
  }
  getSelectionParent() {
    let r = this.getField("select")?.value.asObject();
    if (r) return { kind: "select", value: r };
    let n = this.getField("include")?.value.asObject();
    if (n) return { kind: "include", value: n };
  }
  getSubSelectionValue(r) {
    return this.getSelectionParent()?.value.fields[r].value;
  }
  getPrintWidth() {
    let r = Object.values(this.fields);
    return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
  }
  write(r) {
    let n = Object.values(this.fields);
    if (n.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithContents(r, n);
  }
  asObject() {
    return this;
  }
  writeEmpty(r) {
    let n = new Pe("{}");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithContents(r, n) {
    r.writeLine("{").withIndent(() => {
      r.writeJoined(pt, [...n, ...this.suggestions]).newLine();
    }),
      r.write("}"),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
  }
};
m();
c();
p();
f();
d();
var K = class extends $e {
  constructor(r) {
    super();
    this.text = r;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(r) {
    let n = new Pe(this.text);
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
  }
  asObject() {}
};
var xn = class {
  constructor(t) {
    this.errorMessages = [];
    this.arguments = t;
  }
  write(t) {
    t.write(this.arguments);
  }
  addErrorMessage(t) {
    this.errorMessages.push(t);
  }
  renderAllMessages(t) {
    return this.errorMessages.map((r) => r(t)).join(`
`);
  }
};
function hr(e) {
  return new xn(po(e));
}
function po(e) {
  let t = new gr();
  for (let [r, n] of Object.entries(e)) {
    let i = new mr(r, fo(n));
    t.addField(i);
  }
  return t;
}
function fo(e) {
  if (typeof e == "string") return new K(JSON.stringify(e));
  if (typeof e == "number" || typeof e == "boolean") return new K(String(e));
  if (typeof e == "bigint") return new K(`${e}n`);
  if (e === null) return new K("null");
  if (e === void 0) return new K("undefined");
  if (ut(e)) return new K(`new Prisma.Decimal("${e.toFixed()}")`);
  if (e instanceof Uint8Array)
    return w.Buffer.isBuffer(e)
      ? new K(`Buffer.alloc(${e.byteLength})`)
      : new K(`new Uint8Array(${e.byteLength})`);
  if (e instanceof Date) {
    let t = nr(e) ? e.toISOString() : "Invalid Date";
    return new K(`new Date("${t}")`);
  }
  return e instanceof Fe
    ? new K(`Prisma.${e._getName()}`)
    : ct(e)
      ? new K(`prisma.${Hi(e.modelName)}.$fields.${e.name}`)
      : Array.isArray(e)
        ? mu(e)
        : typeof e == "object"
          ? po(e)
          : new K(Object.prototype.toString.call(e));
}
function mu(e) {
  let t = new ft();
  for (let r of e) t.addItem(fo(r));
  return t;
}
function mo(e) {
  if (e === void 0) return "";
  let t = hr(e);
  return new ot(0, { colors: dr }).write(t).toString();
}
m();
c();
p();
f();
d();
var gu = "P2037";
function yr({ error: e, user_facing_error: t }, r, n) {
  return t.error_code
    ? new G(hu(t, n), {
        code: t.error_code,
        clientVersion: r,
        meta: t.meta,
        batchRequestIdx: t.batch_request_idx,
      })
    : new H(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
function hu(e, t) {
  let r = e.message;
  return (
    (t === "postgresql" || t === "postgres" || t === "mysql") &&
      e.error_code === gu &&
      (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`),
    r
  );
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var Dt = "<unknown>";
function go(e) {
  var t = e.split(`
`);
  return t.reduce(function (r, n) {
    var i = bu(n) || xu(n) || Tu(n) || Ru(n) || Au(n);
    return i && r.push(i), r;
  }, []);
}
var yu =
    /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  wu = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function bu(e) {
  var t = yu.exec(e);
  if (!t) return null;
  var r = t[2] && t[2].indexOf("native") === 0,
    n = t[2] && t[2].indexOf("eval") === 0,
    i = wu.exec(t[2]);
  return (
    n && i != null && ((t[2] = i[1]), (t[3] = i[2]), (t[4] = i[3])),
    {
      file: r ? null : t[2],
      methodName: t[1] || Dt,
      arguments: r ? [t[2]] : [],
      lineNumber: t[3] ? +t[3] : null,
      column: t[4] ? +t[4] : null,
    }
  );
}
var Eu =
  /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function xu(e) {
  var t = Eu.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || Dt,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var vu =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
  Pu = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function Tu(e) {
  var t = vu.exec(e);
  if (!t) return null;
  var r = t[3] && t[3].indexOf(" > eval") > -1,
    n = Pu.exec(t[3]);
  return (
    r && n != null && ((t[3] = n[1]), (t[4] = n[2]), (t[5] = null)),
    {
      file: t[3],
      methodName: t[1] || Dt,
      arguments: t[2] ? t[2].split(",") : [],
      lineNumber: t[4] ? +t[4] : null,
      column: t[5] ? +t[5] : null,
    }
  );
}
var Cu = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function Au(e) {
  var t = Cu.exec(e);
  return t
    ? {
        file: t[3],
        methodName: t[1] || Dt,
        arguments: [],
        lineNumber: +t[4],
        column: t[5] ? +t[5] : null,
      }
    : null;
}
var Su =
  /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Ru(e) {
  var t = Su.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || Dt,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var vn = class {
    getLocation() {
      return null;
    }
  },
  Pn = class {
    constructor() {
      this._error = new Error();
    }
    getLocation() {
      let t = this._error.stack;
      if (!t) return null;
      let n = go(t).find((i) => {
        if (!i.file) return !1;
        let o = tn(i.file);
        return (
          o !== "<anonymous>" &&
          !o.includes("@prisma") &&
          !o.includes("/packages/client/src/runtime/") &&
          !o.endsWith("/runtime/binary.js") &&
          !o.endsWith("/runtime/library.js") &&
          !o.endsWith("/runtime/edge.js") &&
          !o.endsWith("/runtime/edge-esm.js") &&
          !o.startsWith("internal/") &&
          !i.methodName.includes("new ") &&
          !i.methodName.includes("getCallSite") &&
          !i.methodName.includes("Proxy.") &&
          i.methodName.split(".").length < 4
        );
      });
      return !n || !n.file
        ? null
        : {
            fileName: n.file,
            lineNumber: n.lineNumber,
            columnNumber: n.column,
          };
    }
  };
function je(e) {
  return e === "minimal"
    ? typeof $EnabledCallSite == "function" && e !== "minimal"
      ? new $EnabledCallSite()
      : new vn()
    : new Pn();
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var ho = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function dt(e = {}) {
  let t = Ou(e);
  return Object.entries(t).reduce(
    (n, [i, o]) => (
      ho[i] !== void 0 ? (n.select[i] = { select: o }) : (n[i] = o), n
    ),
    { select: {} },
  );
}
function Ou(e = {}) {
  return typeof e._count == "boolean"
    ? { ...e, _count: { _all: e._count } }
    : e;
}
function wr(e = {}) {
  return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
}
function yo(e, t) {
  let r = wr(e);
  return t({ action: "aggregate", unpacker: r, argsMapper: dt })(e);
}
m();
c();
p();
f();
d();
function Fu(e = {}) {
  let { select: t, ...r } = e;
  return typeof t == "object"
    ? dt({ ...r, _count: t })
    : dt({ ...r, _count: { _all: !0 } });
}
function Mu(e = {}) {
  return typeof e.select == "object"
    ? (t) => wr(e)(t)._count
    : (t) => wr(e)(t)._count._all;
}
function wo(e, t) {
  return t({ action: "count", unpacker: Mu(e), argsMapper: Fu })(e);
}
m();
c();
p();
f();
d();
function _u(e = {}) {
  let t = dt(e);
  if (Array.isArray(t.by))
    for (let r of t.by) typeof r == "string" && (t.select[r] = !0);
  else typeof t.by == "string" && (t.select[t.by] = !0);
  return t;
}
function Lu(e = {}) {
  return (t) => (
    typeof e?._count == "boolean" &&
      t.forEach((r) => {
        r._count = r._count._all;
      }),
    t
  );
}
function bo(e, t) {
  return t({ action: "groupBy", unpacker: Lu(e), argsMapper: _u })(e);
}
function Eo(e, t, r) {
  if (t === "aggregate") return (n) => yo(n, r);
  if (t === "count") return (n) => wo(n, r);
  if (t === "groupBy") return (n) => bo(n, r);
}
m();
c();
p();
f();
d();
function xo(e, t) {
  let r = t.fields.filter((i) => !i.relationName),
    n = sn(r, (i) => i.name);
  return new Proxy(
    {},
    {
      get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new Nt(e, o, s.type, s.isList, s.kind === "enum");
      },
      ...tr(Object.keys(n)),
    },
  );
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var vo = (e) => (Array.isArray(e) ? e : e.split(".")),
  Tn = (e, t) => vo(t).reduce((r, n) => r && r[n], e),
  Po = (e, t, r) =>
    vo(t).reduceRight(
      (n, i, o, s) => Object.assign({}, Tn(e, s.slice(0, o)), { [i]: n }),
      r,
    );
function Iu(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, "select", e];
}
function Nu(e, t, r) {
  return t === void 0 ? e ?? {} : Po(t, r, e || !0);
}
function Cn(e, t, r, n, i, o) {
  let a = e._runtimeDataModel.models[t].fields.reduce(
    (l, u) => ({ ...l, [u.name]: u }),
    {},
  );
  return (l) => {
    let u = je(e._errorFormat),
      g = Iu(n, i),
      h = Nu(l, o, g),
      v = r({ dataPath: g, callsite: u })(h),
      R = Du(e, t);
    return new Proxy(v, {
      get(C, A) {
        if (!R.includes(A)) return C[A];
        let L = [a[A].type, r, A],
          N = [g, h];
        return Cn(e, ...L, ...N);
      },
      ...tr([...R, ...Object.getOwnPropertyNames(v)]),
    });
  };
}
function Du(e, t) {
  return e._runtimeDataModel.models[t].fields
    .filter((r) => r.kind === "object")
    .map((r) => r.name);
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var Ro = fe(_i());
m();
c();
p();
f();
d();
Gr();
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var To = {
  keyword: ke,
  entity: ke,
  value: (e) => de(Je(e)),
  punctuation: Je,
  directive: ke,
  function: ke,
  variable: (e) => de(Je(e)),
  string: (e) => de(Et(e)),
  boolean: Qe,
  number: ke,
  comment: xt,
};
var Bu = (e) => e,
  br = {},
  $u = 0,
  D = {
    manual: br.Prism && br.Prism.manual,
    disableWorkerMessageHandler:
      br.Prism && br.Prism.disableWorkerMessageHandler,
    util: {
      encode: function (e) {
        if (e instanceof he) {
          let t = e;
          return new he(t.type, D.util.encode(t.content), t.alias);
        } else
          return Array.isArray(e)
            ? e.map(D.util.encode)
            : e
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/\u00a0/g, " ");
      },
      type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function (e) {
        return (
          e.__id || Object.defineProperty(e, "__id", { value: ++$u }), e.__id
        );
      },
      clone: function e(t, r) {
        let n,
          i,
          o = D.util.type(t);
        switch (((r = r || {}), o)) {
          case "Object":
            if (((i = D.util.objId(t)), r[i])) return r[i];
            (n = {}), (r[i] = n);
            for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
            return n;
          case "Array":
            return (
              (i = D.util.objId(t)),
              r[i]
                ? r[i]
                : ((n = []),
                  (r[i] = n),
                  t.forEach(function (s, a) {
                    n[a] = e(s, r);
                  }),
                  n)
            );
          default:
            return t;
        }
      },
    },
    languages: {
      extend: function (e, t) {
        let r = D.util.clone(D.languages[e]);
        for (let n in t) r[n] = t[n];
        return r;
      },
      insertBefore: function (e, t, r, n) {
        n = n || D.languages;
        let i = n[e],
          o = {};
        for (let a in i)
          if (i.hasOwnProperty(a)) {
            if (a == t) for (let l in r) r.hasOwnProperty(l) && (o[l] = r[l]);
            r.hasOwnProperty(a) || (o[a] = i[a]);
          }
        let s = n[e];
        return (
          (n[e] = o),
          D.languages.DFS(D.languages, function (a, l) {
            l === s && a != e && (this[a] = o);
          }),
          o
        );
      },
      DFS: function e(t, r, n, i) {
        i = i || {};
        let o = D.util.objId;
        for (let s in t)
          if (t.hasOwnProperty(s)) {
            r.call(t, s, t[s], n || s);
            let a = t[s],
              l = D.util.type(a);
            l === "Object" && !i[o(a)]
              ? ((i[o(a)] = !0), e(a, r, null, i))
              : l === "Array" && !i[o(a)] && ((i[o(a)] = !0), e(a, r, s, i));
          }
      },
    },
    plugins: {},
    highlight: function (e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return (
        D.hooks.run("before-tokenize", n),
        (n.tokens = D.tokenize(n.code, n.grammar)),
        D.hooks.run("after-tokenize", n),
        he.stringify(D.util.encode(n.tokens), n.language)
      );
    },
    matchGrammar: function (e, t, r, n, i, o, s) {
      for (let A in r) {
        if (!r.hasOwnProperty(A) || !r[A]) continue;
        if (A == s) return;
        let F = r[A];
        F = D.util.type(F) === "Array" ? F : [F];
        for (let L = 0; L < F.length; ++L) {
          let N = F[L],
            M = N.inside,
            k = !!N.lookbehind,
            z = !!N.greedy,
            j = 0,
            ht = N.alias;
          if (z && !N.pattern.global) {
            let Q = N.pattern.toString().match(/[imuy]*$/)[0];
            N.pattern = RegExp(N.pattern.source, Q + "g");
          }
          N = N.pattern || N;
          for (let Q = n, ie = i; Q < t.length; ie += t[Q].length, ++Q) {
            let Ae = t[Q];
            if (t.length > e.length) return;
            if (Ae instanceof he) continue;
            if (z && Q != t.length - 1) {
              N.lastIndex = ie;
              var h = N.exec(e);
              if (!h) break;
              var g = h.index + (k ? h[1].length : 0),
                v = h.index + h[0].length,
                a = Q,
                l = ie;
              for (
                let B = t.length;
                a < B && (l < v || (!t[a].type && !t[a - 1].greedy));
                ++a
              )
                (l += t[a].length), g >= l && (++Q, (ie = l));
              if (t[Q] instanceof he) continue;
              (u = a - Q), (Ae = e.slice(ie, l)), (h.index -= ie);
            } else {
              N.lastIndex = 0;
              var h = N.exec(Ae),
                u = 1;
            }
            if (!h) {
              if (o) break;
              continue;
            }
            k && (j = h[1] ? h[1].length : 0);
            var g = h.index + j,
              h = h[0].slice(j),
              v = g + h.length,
              R = Ae.slice(0, g),
              C = Ae.slice(v);
            let X = [Q, u];
            R && (++Q, (ie += R.length), X.push(R));
            let ze = new he(A, M ? D.tokenize(h, M) : h, ht, h, z);
            if (
              (X.push(ze),
              C && X.push(C),
              Array.prototype.splice.apply(t, X),
              u != 1 && D.matchGrammar(e, t, r, Q, ie, !0, A),
              o)
            )
              break;
          }
        }
      }
    },
    tokenize: function (e, t) {
      let r = [e],
        n = t.rest;
      if (n) {
        for (let i in n) t[i] = n[i];
        delete t.rest;
      }
      return D.matchGrammar(e, r, t, 0, 0, !1), r;
    },
    hooks: {
      all: {},
      add: function (e, t) {
        let r = D.hooks.all;
        (r[e] = r[e] || []), r[e].push(t);
      },
      run: function (e, t) {
        let r = D.hooks.all[e];
        if (!(!r || !r.length)) for (var n = 0, i; (i = r[n++]); ) i(t);
      },
    },
    Token: he,
  };
D.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/,
};
D.languages.javascript = D.languages.extend("clike", {
  "class-name": [
    D.languages.clike["class-name"],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  number:
    /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function:
    /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator:
    /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
});
D.languages.javascript["class-name"][0].pattern =
  /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
D.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern:
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0,
  },
  "function-variable": {
    pattern:
      /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function",
  },
  parameter: [
    {
      pattern:
        /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
      lookbehind: !0,
      inside: D.languages.javascript,
    },
    {
      pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
      inside: D.languages.javascript,
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: D.languages.javascript,
    },
    {
      pattern:
        /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: D.languages.javascript,
    },
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
D.languages.markup && D.languages.markup.tag.addInlined("script", "javascript");
D.languages.js = D.languages.javascript;
D.languages.typescript = D.languages.extend("javascript", {
  keyword:
    /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  builtin:
    /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
D.languages.ts = D.languages.typescript;
function he(e, t, r, n, i) {
  (this.type = e),
    (this.content = t),
    (this.alias = r),
    (this.length = (n || "").length | 0),
    (this.greedy = !!i);
}
he.stringify = function (e, t) {
  return typeof e == "string"
    ? e
    : Array.isArray(e)
      ? e
          .map(function (r) {
            return he.stringify(r, t);
          })
          .join("")
      : ju(e.type)(e.content);
};
function ju(e) {
  return To[e] || Bu;
}
function Co(e) {
  return Uu(e, D.languages.javascript);
}
function Uu(e, t) {
  return D.tokenize(e, t)
    .map((n) => he.stringify(n))
    .join("");
}
m();
c();
p();
f();
d();
var Ao = fe(Oi());
function So(e) {
  return (0, Ao.default)(e);
}
var Er = class e {
  static read(t) {
    let r;
    try {
      r = Gt.readFileSync(t, "utf-8");
    } catch {
      return null;
    }
    return e.fromContent(r);
  }
  static fromContent(t) {
    let r = t.split(/\r?\n/);
    return new e(1, r);
  }
  constructor(t, r) {
    (this.firstLineNumber = t), (this.lines = r);
  }
  get lastLineNumber() {
    return this.firstLineNumber + this.lines.length - 1;
  }
  mapLineAt(t, r) {
    if (
      t < this.firstLineNumber ||
      t > this.lines.length + this.firstLineNumber
    )
      return this;
    let n = t - this.firstLineNumber,
      i = [...this.lines];
    return (i[n] = r(i[n])), new e(this.firstLineNumber, i);
  }
  mapLines(t) {
    return new e(
      this.firstLineNumber,
      this.lines.map((r, n) => t(r, this.firstLineNumber + n)),
    );
  }
  lineAt(t) {
    return this.lines[t - this.firstLineNumber];
  }
  prependSymbolAt(t, r) {
    return this.mapLines((n, i) => (i === t ? `${r} ${n}` : `  ${n}`));
  }
  slice(t, r) {
    let n = this.lines.slice(t - 1, r).join(`
`);
    return new e(
      t,
      So(n).split(`
`),
    );
  }
  highlight() {
    let t = Co(this.toString());
    return new e(
      this.firstLineNumber,
      t.split(`
`),
    );
  }
  toString() {
    return this.lines.join(`
`);
  }
};
var qu = {
    red: Ve,
    gray: xt,
    dim: wt,
    bold: de,
    underline: bt,
    highlightSource: (e) => e.highlight(),
  },
  Vu = {
    red: (e) => e,
    gray: (e) => e,
    dim: (e) => e,
    bold: (e) => e,
    underline: (e) => e,
    highlightSource: (e) => e,
  };
function Qu({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
  return {
    functionName: `prisma.${t}()`,
    message: e,
    isPanic: r ?? !1,
    callArguments: n,
  };
}
function Ju(
  { callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i },
  o,
) {
  let s = Qu({ message: t, originalMethod: r, isPanic: n, callArguments: i });
  if (!e || typeof window < "u" || y.env.NODE_ENV === "production") return s;
  let a = e.getLocation();
  if (!a || !a.lineNumber || !a.columnNumber) return s;
  let l = Math.max(1, a.lineNumber - 3),
    u = Er.read(a.fileName)?.slice(l, a.lineNumber),
    g = u?.lineAt(a.lineNumber);
  if (u && g) {
    let h = Gu(g),
      v = Wu(g);
    if (!v) return s;
    (s.functionName = `${v.code})`),
      (s.location = a),
      n ||
        (u = u.mapLineAt(a.lineNumber, (C) => C.slice(0, v.openingBraceIndex))),
      (u = o.highlightSource(u));
    let R = String(u.lastLineNumber).length;
    if (
      ((s.contextLines = u
        .mapLines((C, A) => o.gray(String(A).padStart(R)) + " " + C)
        .mapLines((C) => o.dim(C))
        .prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192")))),
      i)
    ) {
      let C = h + R + 1;
      (C += 2), (s.callArguments = (0, Ro.default)(i, C).slice(C));
    }
  }
  return s;
}
function Wu(e) {
  let t = Object.keys(Le.ModelAction).join("|"),
    n = new RegExp(String.raw`\.(${t})\(`).exec(e);
  if (n) {
    let i = n.index + n[0].length,
      o = e.lastIndexOf(" ", n.index) + 1;
    return { code: e.slice(o, i), openingBraceIndex: i };
  }
  return null;
}
function Gu(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    if (e.charAt(r) !== " ") return t;
    t++;
  }
  return t;
}
function Hu(
  {
    functionName: e,
    location: t,
    message: r,
    isPanic: n,
    contextLines: i,
    callArguments: o,
  },
  s,
) {
  let a = [""],
    l = t ? " in" : ":";
  if (
    (n
      ? (a.push(
          s.red(
            `Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`,
          ),
        ),
        a.push(
          s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`),
        ))
      : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)),
    t && a.push(s.underline(Ku(t))),
    i)
  ) {
    a.push("");
    let u = [i.toString()];
    o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
  } else a.push(""), o && a.push(o), a.push("");
  return (
    a.push(r),
    a.join(`
`)
  );
}
function Ku(e) {
  let t = [e.fileName];
  return (
    e.lineNumber && t.push(String(e.lineNumber)),
    e.columnNumber && t.push(String(e.columnNumber)),
    t.join(":")
  );
}
function mt(e) {
  let t = e.showColors ? qu : Vu,
    r;
  return (r = Ju(e, t)), Hu(r, t);
}
function ko(e, t, r, n) {
  return e === Le.ModelAction.findFirstOrThrow ||
    e === Le.ModelAction.findUniqueOrThrow
    ? zu(t, r, n)
    : n;
}
function zu(e, t, r) {
  return async (n) => {
    if ("rejectOnNotFound" in n.args) {
      let o = mt({
        originalMethod: n.clientMethod,
        callsite: n.callsite,
        message: "'rejectOnNotFound' option is not supported",
      });
      throw new Y(o, { clientVersion: t });
    }
    return await r(n).catch((o) => {
      throw o instanceof G && o.code === "P2025"
        ? new Oe(`No ${e} found`, t)
        : o;
    });
  };
}
m();
c();
p();
f();
d();
function Te(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
var Yu = [
    "findUnique",
    "findUniqueOrThrow",
    "findFirst",
    "findFirstOrThrow",
    "create",
    "update",
    "upsert",
    "delete",
  ],
  Zu = ["aggregate", "count", "groupBy"];
function An(e, t) {
  let r = e._extensions.getAllModelExtensions(t) ?? {},
    n = [
      Xu(e, t),
      tc(e, t),
      Lt(r),
      ne("name", () => t),
      ne("$name", () => t),
      ne("$parent", () => e._appliedParent),
    ];
  return Ee({}, n);
}
function Xu(e, t) {
  let r = Te(t),
    n = Object.keys(Le.ModelAction).concat("count");
  return {
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = i,
        s = (l) => e._request(l);
      s = ko(o, t, e._clientVersion, s);
      let a = (l) => (u) => {
        let g = je(e._errorFormat);
        return e._createPrismaPromise((h) => {
          let v = {
            args: u,
            dataPath: [],
            action: o,
            model: t,
            clientMethod: `${r}.${i}`,
            jsModelName: r,
            transaction: h,
            callsite: g,
          };
          return s({ ...v, ...l });
        });
      };
      return Yu.includes(o) ? Cn(e, t, a) : ec(i) ? Eo(e, i, a) : a({});
    },
  };
}
function ec(e) {
  return Zu.includes(e);
}
function tc(e, t) {
  return He(
    ne("fields", () => {
      let r = e._runtimeDataModel.models[t];
      return xo(t, r);
    }),
  );
}
m();
c();
p();
f();
d();
function Oo(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
var Sn = Symbol();
function Bt(e) {
  let t = [rc(e), ne(Sn, () => e), ne("$parent", () => e._appliedParent)],
    r = e._extensions.getAllClientExtensions();
  return r && t.push(Lt(r)), Ee(e, t);
}
function rc(e) {
  let t = Object.keys(e._runtimeDataModel.models),
    r = t.map(Te),
    n = [...new Set(t.concat(r))];
  return He({
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = Oo(i);
      if (e._runtimeDataModel.models[o] !== void 0) return An(e, o);
      if (e._runtimeDataModel.models[i] !== void 0) return An(e, i);
    },
    getPropertyDescriptor(i) {
      if (!r.includes(i)) return { enumerable: !1 };
    },
  });
}
function Fo(e) {
  return e[Sn] ? e[Sn] : e;
}
function Mo(e) {
  if (typeof e == "function") return e(this);
  if (e.client?.__AccelerateEngine) {
    let r = e.client.__AccelerateEngine;
    this._originalClient._engine = new r(
      this._originalClient._accelerateEngineConfig,
    );
  }
  let t = Object.create(this._originalClient, {
    _extensions: { value: this._extensions.append(e) },
    _appliedParent: { value: this, configurable: !0 },
    $use: { value: void 0 },
    $on: { value: void 0 },
  });
  return Bt(t);
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
function _o({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
  let o = i.getAllComputedFields(t);
  if (!o) return e;
  let s = [],
    a = [];
  for (let l of Object.values(o)) {
    if (n) {
      if (n[l.name]) continue;
      let u = l.needs.filter((g) => n[g]);
      u.length > 0 && a.push(it(u));
    } else if (r) {
      if (!r[l.name]) continue;
      let u = l.needs.filter((g) => !r[g]);
      u.length > 0 && a.push(it(u));
    }
    nc(e, l.needs) && s.push(ic(l, Ee(e, s)));
  }
  return s.length > 0 || a.length > 0 ? Ee(e, [...s, ...a]) : e;
}
function nc(e, t) {
  return t.every((r) => on(e, r));
}
function ic(e, t) {
  return He(ne(e.name, () => e.compute(t)));
}
m();
c();
p();
f();
d();
function xr({
  visitor: e,
  result: t,
  args: r,
  runtimeDataModel: n,
  modelName: i,
}) {
  if (Array.isArray(t)) {
    for (let s = 0; s < t.length; s++)
      t[s] = xr({
        result: t[s],
        args: r,
        modelName: i,
        runtimeDataModel: n,
        visitor: e,
      });
    return t;
  }
  let o = e(t, i, r) ?? t;
  return (
    r.include &&
      Lo({
        includeOrSelect: r.include,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    r.select &&
      Lo({
        includeOrSelect: r.select,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    o
  );
}
function Lo({
  includeOrSelect: e,
  result: t,
  parentModelName: r,
  runtimeDataModel: n,
  visitor: i,
}) {
  for (let [o, s] of Object.entries(e)) {
    if (!s || t[o] == null) continue;
    let l = n.models[r].fields.find((g) => g.name === o);
    if (!l || l.kind !== "object" || !l.relationName) continue;
    let u = typeof s == "object" ? s : {};
    t[o] = xr({
      visitor: i,
      result: t[o],
      args: u,
      modelName: l.type,
      runtimeDataModel: n,
    });
  }
}
function Io({
  result: e,
  modelName: t,
  args: r,
  extensions: n,
  runtimeDataModel: i,
}) {
  return n.isEmpty() || e == null || typeof e != "object" || !i.models[t]
    ? e
    : xr({
        result: e,
        args: r ?? {},
        modelName: t,
        runtimeDataModel: i,
        visitor: (s, a, l) =>
          _o({
            result: s,
            modelName: Te(a),
            select: l.select,
            omit: l.omit,
            extensions: n,
          }),
      });
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
function No(e) {
  if (e instanceof se) return oc(e);
  if (Array.isArray(e)) {
    let r = [e[0]];
    for (let n = 1; n < e.length; n++) r[n] = $t(e[n]);
    return r;
  }
  let t = {};
  for (let r in e) t[r] = $t(e[r]);
  return t;
}
function oc(e) {
  return new se(e.strings, e.values);
}
function $t(e) {
  if (typeof e != "object" || e == null || e instanceof Fe || ct(e)) return e;
  if (ut(e)) return new ve(e.toFixed());
  if (st(e)) return new Date(+e);
  if (ArrayBuffer.isView(e)) return e.slice(0);
  if (Array.isArray(e)) {
    let t = e.length,
      r;
    for (r = Array(t); t--; ) r[t] = $t(e[t]);
    return r;
  }
  if (typeof e == "object") {
    let t = {};
    for (let r in e)
      r === "__proto__"
        ? Object.defineProperty(t, r, {
            value: $t(e[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (t[r] = $t(e[r]));
    return t;
  }
  We(e, "Unknown value");
}
function Bo(e, t, r, n = 0) {
  return e._createPrismaPromise((i) => {
    let o = t.customDataProxyFetch;
    return (
      "transaction" in t &&
        i !== void 0 &&
        (t.transaction?.kind === "batch" && t.transaction.lock.then(),
        (t.transaction = i)),
      n === r.length
        ? e._executeRequest(t)
        : r[n]({
            model: t.model,
            operation: t.model ? t.action : t.clientMethod,
            args: No(t.args ?? {}),
            __internalParams: t,
            query: (s, a = t) => {
              let l = a.customDataProxyFetch;
              return (
                (a.customDataProxyFetch = qo(o, l)),
                (a.args = s),
                Bo(e, a, r, n + 1)
              );
            },
          })
    );
  });
}
function $o(e, t) {
  let { jsModelName: r, action: n, clientMethod: i } = t,
    o = r ? n : i;
  if (e._extensions.isEmpty()) return e._executeRequest(t);
  let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
  return Bo(e, t, s);
}
function jo(e) {
  return (t) => {
    let r = { requests: t },
      n = t[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? Uo(r, n, 0, e) : e(r);
  };
}
function Uo(e, t, r, n) {
  if (r === t.length) return n(e);
  let i = e.customDataProxyFetch,
    o = e.requests[0].transaction;
  return t[r]({
    args: {
      queries: e.requests.map((s) => ({
        model: s.modelName,
        operation: s.action,
        args: s.args,
      })),
      transaction: o
        ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 }
        : void 0,
    },
    __internalParams: e,
    query(s, a = e) {
      let l = a.customDataProxyFetch;
      return (a.customDataProxyFetch = qo(i, l)), Uo(a, t, r + 1, n);
    },
  });
}
var Do = (e) => e;
function qo(e = Do, t = Do) {
  return (r) => e(t(r));
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
function Qo(e, t, r) {
  let n = Te(r);
  return !t.result || !(t.result.$allModels || t.result[n])
    ? e
    : sc({
        ...e,
        ...Vo(t.name, e, t.result.$allModels),
        ...Vo(t.name, e, t.result[n]),
      });
}
function sc(e) {
  let t = new be(),
    r = (n, i) =>
      t.getOrCreate(n, () =>
        i.has(n)
          ? [n]
          : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]),
      );
  return rt(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function Vo(e, t, r) {
  return r
    ? rt(r, ({ needs: n, compute: i }, o) => ({
        name: o,
        needs: n ? Object.keys(n).filter((s) => n[s]) : [],
        compute: ac(t, o, i),
      }))
    : {};
}
function ac(e, t, r) {
  let n = e?.[t]?.compute;
  return n ? (i) => r({ ...i, [t]: n(i) }) : r;
}
function Jo(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (e[n.name]) for (let i of n.needs) r[i] = !0;
  return r;
}
function Wo(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (!e[n.name]) for (let i of n.needs) delete r[i];
  return r;
}
var vr = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new be();
      this.modelExtensionsCache = new be();
      this.queryCallbacksCache = new be();
      this.clientExtensions = Rt(() =>
        this.extension.client
          ? {
              ...this.previous?.getAllClientExtensions(),
              ...this.extension.client,
            }
          : this.previous?.getAllClientExtensions(),
      );
      this.batchCallbacks = Rt(() => {
        let t = this.previous?.getAllBatchQueryCallbacks() ?? [],
          r = this.extension.query?.$__internalBatch;
        return r ? t.concat(r) : t;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () =>
        Qo(this.previous?.getAllComputedFields(t), this.extension, t),
      );
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        let r = Te(t);
        return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
          ? this.previous?.getAllModelExtensions(t)
          : {
              ...this.previous?.getAllModelExtensions(t),
              ...this.extension.model.$allModels,
              ...this.extension.model[r],
            };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        let n = this.previous?.getAllQueryCallbacks(t, r) ?? [],
          i = [],
          o = this.extension.query;
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations)
          ? n
          : (o[t] !== void 0 &&
              (o[t][r] !== void 0 && i.push(o[t][r]),
              o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)),
            t !== "$none" &&
              o.$allModels !== void 0 &&
              (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]),
              o.$allModels.$allOperations !== void 0 &&
                i.push(o.$allModels.$allOperations)),
            o[r] !== void 0 && i.push(o[r]),
            o.$allOperations !== void 0 && i.push(o.$allOperations),
            n.concat(i));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  },
  Pr = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e();
    }
    static single(t) {
      return new e(new vr(t));
    }
    isEmpty() {
      return this.head === void 0;
    }
    append(t) {
      return new e(new vr(t, this.head));
    }
    getAllComputedFields(t) {
      return this.head?.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      return this.head?.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      return this.head?.getAllQueryCallbacks(t, r) ?? [];
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
  };
m();
c();
p();
f();
d();
var Go = le("prisma:client"),
  Ho = { Vercel: "vercel", "Netlify CI": "netlify" };
function Ko({ postinstall: e, ciName: t, clientVersion: r }) {
  if (
    (Go("checkPlatformCaching:postinstall", e),
    Go("checkPlatformCaching:ciName", t),
    e === !0 && t && t in Ho)
  ) {
    let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Ho[t]}-build`;
    throw (console.error(n), new V(n, r));
  }
}
m();
c();
p();
f();
d();
function zo(e, t) {
  return e
    ? e.datasources
      ? e.datasources
      : e.datasourceUrl
        ? { [t[0]]: { url: e.datasourceUrl } }
        : {}
    : {};
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var lc = "Cloudflare-Workers",
  uc = "node";
function Yo() {
  return typeof Netlify == "object"
    ? "netlify"
    : typeof EdgeRuntime == "string"
      ? "edge-light"
      : globalThis.navigator?.userAgent === lc
        ? "workerd"
        : globalThis.Deno
          ? "deno"
          : globalThis.__lagon__
            ? "lagon"
            : globalThis.process?.release?.name === uc
              ? "node"
              : globalThis.Bun
                ? "bun"
                : globalThis.fastly
                  ? "fastly"
                  : "unknown";
}
var cc = {
  node: "Node.js",
  workerd: "Cloudflare Workers",
  deno: "Deno and Deno Deploy",
  netlify: "Netlify Edge Functions",
  "edge-light": "Vercel Edge Functions or Edge Middleware",
};
function Zo() {
  let e = Yo();
  return {
    id: e,
    prettyName: cc[e] || e,
    isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e),
  };
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var Rn = fe(nn());
m();
c();
p();
f();
d();
function Xo(e) {
  return e
    ? e
        .replace(/".*"/g, '"X"')
        .replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`)
    : "";
}
m();
c();
p();
f();
d();
function es(e) {
  return e
    .split(
      `
`,
    )
    .map((t) =>
      t
        .replace(
          /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/,
          "",
        )
        .replace(/\+\d+\s*ms$/, ""),
    ).join(`
`);
}
m();
c();
p();
f();
d();
var pc = fe(Ci()),
  ts = fe(Bi());
function rs({
  title: e,
  user: t = "prisma",
  repo: r = "prisma",
  template: n = "bug_report.yml",
  body: i,
}) {
  return (0, ts.default)({ user: t, repo: r, template: n, title: e, body: i });
}
function ns({
  version: e,
  binaryTarget: t,
  title: r,
  description: n,
  engineVersion: i,
  database: o,
  query: s,
}) {
  let a = vi(6e3 - (s?.length ?? 0)),
    l = es((0, Rn.default)(a)),
    u = n
      ? `# Description
\`\`\`
${n}
\`\`\``
      : "",
    g = (0,
    Rn.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${y.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Xo(s) : ""}
\`\`\`
`),
    h = rs({ title: r, body: g });
  return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${bt(h)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
m();
c();
p();
f();
d();
function Tr({
  inlineDatasources: e,
  overrideDatasources: t,
  env: r,
  clientVersion: n,
}) {
  let i,
    o = Object.keys(e)[0],
    s = e[o]?.url,
    a = t[o]?.url;
  if (
    (o === void 0
      ? (i = void 0)
      : a
        ? (i = a)
        : s?.value
          ? (i = s.value)
          : s?.fromEnvVar && (i = r[s.fromEnvVar]),
    s?.fromEnvVar !== void 0 && i === void 0)
  )
    throw new V(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
  if (i === void 0)
    throw new V(
      "error: Missing URL environment variable, value, or override.",
      n,
    );
  return i;
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
function is(e) {
  if (e?.kind === "itx") return e.options.id;
}
m();
c();
p();
f();
d();
var kn = class {
    constructor(t, r, n) {
      this.engineObject = __PrismaProxy.create({
        datamodel: t.datamodel,
        env: y.env,
        ignoreEnvVarErrors: !0,
        datasourceOverrides: t.datasourceOverrides ?? {},
        logLevel: t.logLevel,
        logQueries: t.logQueries ?? !1,
        logCallback: r,
      });
    }
    async connect(t) {
      return __PrismaProxy.connect(this.engineObject, t);
    }
    async disconnect(t) {
      return __PrismaProxy.disconnect(this.engineObject, t);
    }
    query(t, r, n) {
      return __PrismaProxy.execute(this.engineObject, t, r, n);
    }
    sdlSchema() {
      return Promise.resolve("{}");
    }
    dmmf(t) {
      return Promise.resolve("{}");
    }
    async startTransaction(t, r) {
      return __PrismaProxy.startTransaction(this.engineObject, t, r);
    }
    async commitTransaction(t, r) {
      return __PrismaProxy.commitTransaction(this.engineObject, t, r);
    }
    async rollbackTransaction(t, r) {
      return __PrismaProxy.rollbackTransaction(this.engineObject, t, r);
    }
    metrics(t) {
      return Promise.resolve("{}");
    }
    async applyPendingMigrations() {
      return __PrismaProxy.applyPendingMigrations(this.engineObject);
    }
  },
  os = {
    async loadLibrary(e) {
      if (!__PrismaProxy)
        throw new V(
          "__PrismaProxy not detected make sure React Native bindings are installed",
          e.clientVersion,
        );
      return {
        debugPanic() {
          return Promise.reject("{}");
        },
        dmmf() {
          return Promise.resolve("{}");
        },
        version() {
          return { commit: "unknown", version: "unknown" };
        },
        QueryEngine: kn,
      };
    },
  };
var fc = "P2036",
  Ce = le("prisma:client:libraryEngine");
function dc(e) {
  return e.item_type === "query" && "query" in e;
}
function mc(e) {
  return "level" in e ? e.level === "error" && e.message === "PANIC" : !1;
}
var RC = [...Xr, "native"],
  ss = 0,
  jt = class {
    constructor(t, r) {
      this.name = "LibraryEngine";
      (this.libraryLoader = os),
        (this.config = t),
        (this.libraryStarted = !1),
        (this.logQueries = t.logQueries ?? !1),
        (this.logLevel = t.logLevel ?? "error"),
        (this.logEmitter = t.logEmitter),
        (this.datamodel = t.inlineSchema),
        t.enableDebugLogs && (this.logLevel = "debug");
      let n = Object.keys(t.overrideDatasources)[0],
        i = t.overrideDatasources[n]?.url;
      n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }),
        (this.libraryInstantiationPromise = this.instantiateLibrary()),
        this.checkForTooManyEngines();
    }
    checkForTooManyEngines() {
      ss === 10 &&
        console.warn(
          `${Qe("warn(prisma-client)")} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`,
        );
    }
    async applyPendingMigrations() {
      await this.start(), await this.engine?.applyPendingMigrations();
    }
    async transaction(t, r, n) {
      await this.start();
      let i = JSON.stringify(r),
        o;
      if (t === "start") {
        let a = JSON.stringify({
          max_wait: n.maxWait,
          timeout: n.timeout,
          isolation_level: n.isolationLevel,
        });
        o = await this.engine?.startTransaction(a, i);
      } else
        t === "commit"
          ? (o = await this.engine?.commitTransaction(n.id, i))
          : t === "rollback" &&
            (o = await this.engine?.rollbackTransaction(n.id, i));
      let s = this.parseEngineResponse(o);
      if (gc(s)) {
        let a = this.getExternalAdapterError(s);
        throw a
          ? a.error
          : new G(s.message, {
              code: s.error_code,
              clientVersion: this.config.clientVersion,
              meta: s.meta,
            });
      }
      return s;
    }
    async instantiateLibrary() {
      if ((Ce("internalSetup"), this.libraryInstantiationPromise))
        return this.libraryInstantiationPromise;
      (this.binaryTarget = await this.getCurrentBinaryTarget()),
        await this.loadEngine(),
        this.version();
    }
    async getCurrentBinaryTarget() {}
    parseEngineResponse(t) {
      if (!t)
        throw new H("Response from the Engine was empty", {
          clientVersion: this.config.clientVersion,
        });
      try {
        return JSON.parse(t);
      } catch {
        throw new H("Unable to JSON.parse response from engine", {
          clientVersion: this.config.clientVersion,
        });
      }
    }
    async loadEngine() {
      if (!this.engine) {
        this.QueryEngineConstructor ||
          ((this.library = await this.libraryLoader.loadLibrary(this.config)),
          (this.QueryEngineConstructor = this.library.QueryEngine));
        try {
          let t = new b(this),
            { adapter: r } = this.config;
          r && Ce("Using driver adapter: %O", r),
            (this.engine = new this.QueryEngineConstructor(
              {
                datamodel: this.datamodel,
                env: y.env,
                logQueries: this.config.logQueries ?? !1,
                ignoreEnvVarErrors: !0,
                datasourceOverrides: this.datasourceOverrides ?? {},
                logLevel: this.logLevel,
                configDir: this.config.cwd,
                engineProtocol: "json",
              },
              (n) => {
                t.deref()?.logger(n);
              },
              r,
            )),
            ss++;
        } catch (t) {
          let r = t,
            n = this.parseInitError(r.message);
          throw typeof n == "string"
            ? r
            : new V(n.message, this.config.clientVersion, n.error_code);
        }
      }
    }
    logger(t) {
      let r = this.parseEngineResponse(t);
      if (r) {
        if ("span" in r) {
          this.config.tracingHelper.createEngineSpan(r);
          return;
        }
        (r.level = r?.level.toLowerCase() ?? "unknown"),
          dc(r)
            ? this.logEmitter.emit("query", {
                timestamp: new Date(),
                query: r.query,
                params: r.params,
                duration: Number(r.duration_ms),
                target: r.module_path,
              })
            : mc(r)
              ? (this.loggerRustPanic = new ue(
                  On(
                    this,
                    `${r.message}: ${r.reason} in ${r.file}:${r.line}:${r.column}`,
                  ),
                  this.config.clientVersion,
                ))
              : this.logEmitter.emit(r.level, {
                  timestamp: new Date(),
                  message: r.message,
                  target: r.module_path,
                });
      }
    }
    parseInitError(t) {
      try {
        return JSON.parse(t);
      } catch {}
      return t;
    }
    parseRequestError(t) {
      try {
        return JSON.parse(t);
      } catch {}
      return t;
    }
    onBeforeExit() {
      throw new Error(
        '"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.',
      );
    }
    async start() {
      if (
        (await this.libraryInstantiationPromise,
        await this.libraryStoppingPromise,
        this.libraryStartingPromise)
      )
        return (
          Ce(
            `library already starting, this.libraryStarted: ${this.libraryStarted}`,
          ),
          this.libraryStartingPromise
        );
      if (this.libraryStarted) return;
      let t = async () => {
        Ce("library starting");
        try {
          let r = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.connect(JSON.stringify(r)),
            (this.libraryStarted = !0),
            Ce("library started");
        } catch (r) {
          let n = this.parseInitError(r.message);
          throw typeof n == "string"
            ? r
            : new V(n.message, this.config.clientVersion, n.error_code);
        } finally {
          this.libraryStartingPromise = void 0;
        }
      };
      return (
        (this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan(
          "connect",
          t,
        )),
        this.libraryStartingPromise
      );
    }
    async stop() {
      if (
        (await this.libraryStartingPromise,
        await this.executingQueryPromise,
        this.libraryStoppingPromise)
      )
        return Ce("library is already stopping"), this.libraryStoppingPromise;
      if (!this.libraryStarted) return;
      let t = async () => {
        await new Promise((n) => setTimeout(n, 5)), Ce("library stopping");
        let r = { traceparent: this.config.tracingHelper.getTraceParent() };
        await this.engine?.disconnect(JSON.stringify(r)),
          (this.libraryStarted = !1),
          (this.libraryStoppingPromise = void 0),
          Ce("library stopped");
      };
      return (
        (this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan(
          "disconnect",
          t,
        )),
        this.libraryStoppingPromise
      );
    }
    version() {
      return (
        (this.versionInfo = this.library?.version()),
        this.versionInfo?.version ?? "unknown"
      );
    }
    debugPanic(t) {
      return this.library?.debugPanic(t);
    }
    async request(t, { traceparent: r, interactiveTransaction: n }) {
      Ce(`sending request, this.libraryStarted: ${this.libraryStarted}`);
      let i = JSON.stringify({ traceparent: r }),
        o = JSON.stringify(t);
      try {
        await this.start(),
          (this.executingQueryPromise = this.engine?.query(o, i, n?.id)),
          (this.lastQuery = o);
        let s = this.parseEngineResponse(await this.executingQueryPromise);
        if (s.errors)
          throw s.errors.length === 1
            ? this.buildQueryError(s.errors[0])
            : new H(JSON.stringify(s.errors), {
                clientVersion: this.config.clientVersion,
              });
        if (this.loggerRustPanic) throw this.loggerRustPanic;
        return { data: s, elapsed: 0 };
      } catch (s) {
        if (s instanceof V) throw s;
        if (s.code === "GenericFailure" && s.message?.startsWith("PANIC:"))
          throw new ue(On(this, s.message), this.config.clientVersion);
        let a = this.parseRequestError(s.message);
        throw typeof a == "string"
          ? s
          : new H(
              `${a.message}
${a.backtrace}`,
              { clientVersion: this.config.clientVersion },
            );
      }
    }
    async requestBatch(t, { transaction: r, traceparent: n }) {
      Ce("requestBatch");
      let i = rr(t, r);
      await this.start(),
        (this.lastQuery = JSON.stringify(i)),
        (this.executingQueryPromise = this.engine.query(
          this.lastQuery,
          JSON.stringify({ traceparent: n }),
          is(r),
        ));
      let o = await this.executingQueryPromise,
        s = this.parseEngineResponse(o);
      if (s.errors)
        throw s.errors.length === 1
          ? this.buildQueryError(s.errors[0])
          : new H(JSON.stringify(s.errors), {
              clientVersion: this.config.clientVersion,
            });
      let { batchResult: a, errors: l } = s;
      if (Array.isArray(a))
        return a.map((u) =>
          u.errors && u.errors.length > 0
            ? this.loggerRustPanic ?? this.buildQueryError(u.errors[0])
            : { data: u, elapsed: 0 },
        );
      throw l && l.length === 1
        ? new Error(l[0].error)
        : new Error(JSON.stringify(s));
    }
    buildQueryError(t) {
      if (t.user_facing_error.is_panic)
        return new ue(
          On(this, t.user_facing_error.message),
          this.config.clientVersion,
        );
      let r = this.getExternalAdapterError(t.user_facing_error);
      return r
        ? r.error
        : yr(t, this.config.clientVersion, this.config.activeProvider);
    }
    getExternalAdapterError(t) {
      if (t.error_code === fc && this.config.adapter) {
        let r = t.meta?.id;
        zt(
          typeof r == "number",
          "Malformed external JS error received from the engine",
        );
        let n = this.config.adapter.errorRegistry.consumeError(r);
        return zt(n, "External error with reported id was not registered"), n;
      }
    }
    async metrics(t) {
      await this.start();
      let r = await this.engine.metrics(JSON.stringify(t));
      return t.format === "prometheus" ? r : this.parseEngineResponse(r);
    }
  };
function gc(e) {
  return typeof e == "object" && e !== null && e.error_code !== void 0;
}
function On(e, t) {
  return ns({
    binaryTarget: e.binaryTarget,
    title: t,
    version: e.config.clientVersion,
    engineVersion: e.versionInfo?.commit,
    database: e.config.activeProvider,
    query: e.lastQuery,
  });
}
function as({ copyEngine: e = !0 }, t) {
  let r;
  try {
    r = Tr({
      inlineDatasources: t.inlineDatasources,
      overrideDatasources: t.overrideDatasources,
      env: { ...t.env, ...y.env },
      clientVersion: t.clientVersion,
    });
  } catch {}
  e &&
    r?.startsWith("prisma://") &&
    St(
      "recommend--no-engine",
      "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)",
    );
  let n = Tt(t.generator),
    i = !!(r?.startsWith("prisma://") || !e),
    o = !!t.adapter,
    s = n === "library",
    a = n === "binary";
  if ((i && o) || (o && !1)) {
    let l;
    throw (
      (e
        ? r?.startsWith("prisma://")
          ? (l = [
              "Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.",
              "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor.",
            ])
          : (l = [
              "Prisma Client was configured to use both the `adapter` and Accelerate, please chose one.",
            ])
        : (l = [
            "Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.",
            "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter.",
          ]),
      new Y(
        l.join(`
`),
        { clientVersion: t.clientVersion },
      ))
    );
  }
  return new jt(t);
}
m();
c();
p();
f();
d();
function Cr({ generator: e }) {
  return e?.previewFeatures ?? [];
}
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var ds = fe(Fn());
m();
c();
p();
f();
d();
function ps(e, t) {
  let r = fs(e),
    n = hc(r),
    i = wc(n);
  i ? Ar(i, t) : t.addErrorMessage(() => "Unknown error");
}
function fs(e) {
  return e.errors.flatMap((t) => (t.kind === "Union" ? fs(t) : [t]));
}
function hc(e) {
  let t = new Map(),
    r = [];
  for (let n of e) {
    if (n.kind !== "InvalidArgumentType") {
      r.push(n);
      continue;
    }
    let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`,
      o = t.get(i);
    o
      ? t.set(i, {
          ...n,
          argument: {
            ...n.argument,
            typeNames: yc(o.argument.typeNames, n.argument.typeNames),
          },
        })
      : t.set(i, n);
  }
  return r.push(...t.values()), r;
}
function yc(e, t) {
  return [...new Set(e.concat(t))];
}
function wc(e) {
  return an(e, (t, r) => {
    let n = us(t),
      i = us(r);
    return n !== i ? n - i : cs(t) - cs(r);
  });
}
function us(e) {
  let t = 0;
  return (
    Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
    Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
    t
  );
}
function cs(e) {
  switch (e.kind) {
    case "InvalidArgumentValue":
    case "ValueTooLarge":
      return 20;
    case "InvalidArgumentType":
      return 10;
    case "RequiredArgumentMissing":
      return -10;
    default:
      return 0;
  }
}
m();
c();
p();
f();
d();
var pe = class {
  constructor(t, r) {
    this.name = t;
    this.value = r;
    this.isRequired = !1;
  }
  makeRequired() {
    return (this.isRequired = !0), this;
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.addMarginSymbol(r(this.isRequired ? "+" : "?")),
      t.write(r(this.name)),
      this.isRequired || t.write(r("?")),
      t.write(r(": ")),
      typeof this.value == "string"
        ? t.write(r(this.value))
        : t.write(this.value);
  }
};
m();
c();
p();
f();
d();
var Sr = class {
  constructor() {
    this.fields = [];
  }
  addField(t, r) {
    return (
      this.fields.push({
        write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        },
      }),
      this
    );
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.writeLine(r("{"))
      .withIndent(() => {
        t.writeJoined(pt, this.fields).newLine();
      })
      .write(r("}"))
      .addMarginSymbol(r("+"));
  }
};
function Ar(e, t) {
  switch (e.kind) {
    case "MutuallyExclusiveFields":
      bc(e, t);
      break;
    case "IncludeOnScalar":
      Ec(e, t);
      break;
    case "EmptySelection":
      xc(e, t);
      break;
    case "UnknownSelectionField":
      Tc(e, t);
      break;
    case "UnknownArgument":
      Cc(e, t);
      break;
    case "UnknownInputField":
      Ac(e, t);
      break;
    case "RequiredArgumentMissing":
      Sc(e, t);
      break;
    case "InvalidArgumentType":
      Rc(e, t);
      break;
    case "InvalidArgumentValue":
      kc(e, t);
      break;
    case "ValueTooLarge":
      Oc(e, t);
      break;
    case "SomeFieldsMissing":
      Fc(e, t);
      break;
    case "TooManyFieldsGiven":
      Mc(e, t);
      break;
    case "Union":
      ps(e, t);
      break;
    default:
      throw new Error("not implemented: " + e.kind);
  }
}
function bc(e, t) {
  let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  r &&
    (r.getField(e.firstField)?.markAsError(),
    r.getField(e.secondField)?.markAsError()),
    t.addErrorMessage(
      (n) =>
        `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`,
    );
}
function Ec(e, t) {
  let [r, n] = Rr(e.selectionPath),
    i = e.outputType,
    o = t.arguments.getDeepSelectionParent(r)?.value;
  if (o && (o.getField(n)?.markAsError(), i))
    for (let s of i.fields)
      s.isRelation && o.addSuggestion(new pe(s.name, "true"));
  t.addErrorMessage((s) => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
    return (
      i ? (a += ` on model ${s.bold(i.name)}. ${Ut(s)}`) : (a += "."),
      (a += `
Note that ${s.bold("include")} statements only accept relation fields.`),
      a
    );
  });
}
function xc(e, t) {
  let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (r) {
    let n = r.getField("omit")?.value.asObject();
    if (n) {
      vc(e, t, n);
      return;
    }
  }
  Pc(e, t);
}
function vc(e, t, r) {
  r.removeAllFields();
  for (let n of e.outputType.fields) r.addSuggestion(new pe(n.name, "false"));
  t.addErrorMessage(
    (n) =>
      `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`,
  );
}
function Pc(e, t) {
  let r = e.outputType,
    n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value,
    i = n?.isEmpty() ?? !1;
  n && (n.removeAllFields(), hs(n, r)),
    t.addErrorMessage((o) =>
      i
        ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${Ut(o)}`
        : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`,
    );
}
function Tc(e, t) {
  let [r, n] = Rr(e.selectionPath),
    i = t.arguments.getDeepSubSelectionValue(r)?.asObject(),
    o;
  if (i) {
    let s = i.getFieldValue("select")?.asObject(),
      a = i.getFieldValue("include")?.asObject(),
      l = i.getFieldValue("omit")?.asObject();
    s?.hasField(n)
      ? ((o = "select"), s.getField(n)?.markAsError(), hs(s, e.outputType))
      : a?.hasField(n)
        ? ((o = "include"), a.getField(n)?.markAsError(), _c(a, e.outputType))
        : l?.hasField(n) &&
          ((o = "omit"), l.getField(n)?.markAsError(), Lc(l, e.outputType));
  }
  t.addErrorMessage((s) => {
    let a = [`Unknown field ${s.red(`\`${n}\``)}`];
    return (
      o && a.push(`for ${s.bold(o)} statement`),
      a.push(`on model ${s.bold(`\`${e.outputType.name}\``)}.`),
      a.push(Ut(s)),
      a.join(" ")
    );
  });
}
function Cc(e, t) {
  let r = e.argumentPath[0],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  n && (n.getField(r)?.markAsError(), Ic(n, e.arguments)),
    t.addErrorMessage((i) =>
      ms(
        i,
        r,
        e.arguments.map((o) => o.name),
      ),
    );
}
function Ac(e, t) {
  let [r, n] = Rr(e.argumentPath),
    i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (i) {
    i.getDeepField(e.argumentPath)?.markAsError();
    let o = i.getDeepFieldValue(r)?.asObject();
    o && ys(o, e.inputType);
  }
  t.addErrorMessage((o) =>
    ms(
      o,
      n,
      e.inputType.fields.map((s) => s.name),
    ),
  );
}
function ms(e, t, r) {
  let n = [`Unknown argument \`${e.red(t)}\`.`],
    i = Dc(t, r);
  return (
    i && n.push(`Did you mean \`${e.green(i)}\`?`),
    r.length > 0 && n.push(Ut(e)),
    n.join(" ")
  );
}
function Sc(e, t) {
  let r;
  t.addErrorMessage((l) =>
    r?.value instanceof K && r.value.text === "null"
      ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.`
      : `Argument \`${l.green(o)}\` is missing.`,
  );
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (!n) return;
  let [i, o] = Rr(e.argumentPath),
    s = new Sr(),
    a = n.getDeepFieldValue(i)?.asObject();
  if (a)
    if (
      ((r = a.getField(o)),
      r && a.removeField(o),
      e.inputTypes.length === 1 && e.inputTypes[0].kind === "object")
    ) {
      for (let l of e.inputTypes[0].fields)
        s.addField(l.name, l.typeNames.join(" | "));
      a.addSuggestion(new pe(o, s).makeRequired());
    } else {
      let l = e.inputTypes.map(gs).join(" | ");
      a.addSuggestion(new pe(o, l).makeRequired());
    }
}
function gs(e) {
  return e.kind === "list" ? `${gs(e.elementType)}[]` : e.name;
}
function Rc(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  n && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage((i) => {
      let o = kr(
        "or",
        e.argument.typeNames.map((s) => i.green(s)),
      );
      return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
    });
}
function kc(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  n && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage((i) => {
      let o = [`Invalid value for argument \`${i.bold(r)}\``];
      if (
        (e.underlyingError && o.push(`: ${e.underlyingError}`),
        o.push("."),
        e.argument.typeNames.length > 0)
      ) {
        let s = kr(
          "or",
          e.argument.typeNames.map((a) => i.green(a)),
        );
        o.push(` Expected ${s}.`);
      }
      return o.join("");
    });
}
function Oc(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),
    i;
  if (n) {
    let s = n.getDeepField(e.argumentPath)?.value;
    s?.markAsError(), s instanceof K && (i = s.text);
  }
  t.addErrorMessage((o) => {
    let s = ["Unable to fit value"];
    return (
      i && s.push(o.red(i)),
      s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``),
      s.join(" ")
    );
  });
}
function Fc(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (n) {
    let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
    i && ys(i, e.inputType);
  }
  t.addErrorMessage((i) => {
    let o = [
      `Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1
        ? e.constraints.requiredFields
          ? o.push(
              `${i.green("at least one of")} ${kr(
                "or",
                e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``),
              )} arguments.`,
            )
          : o.push(`${i.green("at least one")} argument.`)
        : o.push(
            `${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`,
          ),
      o.push(Ut(i)),
      o.join(" ")
    );
  });
}
function Mc(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),
    i = [];
  if (n) {
    let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
    o && (o.markAsError(), (i = Object.keys(o.getFields())));
  }
  t.addErrorMessage((o) => {
    let s = [
      `Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1
        ? s.push(`${o.green("exactly one")} argument,`)
        : e.constraints.maxFieldCount == 1
          ? s.push(`${o.green("at most one")} argument,`)
          : s.push(
              `${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`,
            ),
      s.push(
        `but you provided ${kr(
          "and",
          i.map((a) => o.red(a)),
        )}. Please choose`,
      ),
      e.constraints.maxFieldCount === 1
        ? s.push("one.")
        : s.push(`${e.constraints.maxFieldCount}.`),
      s.join(" ")
    );
  });
}
function hs(e, t) {
  for (let r of t.fields)
    e.hasField(r.name) || e.addSuggestion(new pe(r.name, "true"));
}
function _c(e, t) {
  for (let r of t.fields)
    r.isRelation &&
      !e.hasField(r.name) &&
      e.addSuggestion(new pe(r.name, "true"));
}
function Lc(e, t) {
  for (let r of t.fields)
    !e.hasField(r.name) &&
      !r.isRelation &&
      e.addSuggestion(new pe(r.name, "true"));
}
function Ic(e, t) {
  for (let r of t)
    e.hasField(r.name) ||
      e.addSuggestion(new pe(r.name, r.typeNames.join(" | ")));
}
function ys(e, t) {
  if (t.kind === "object")
    for (let r of t.fields)
      e.hasField(r.name) ||
        e.addSuggestion(new pe(r.name, r.typeNames.join(" | ")));
}
function Rr(e) {
  let t = [...e],
    r = t.pop();
  if (!r) throw new Error("unexpected empty path");
  return [t, r];
}
function Ut({ green: e, enabled: t }) {
  return (
    "Available options are " +
    (t ? `listed in ${e("green")}` : "marked with ?") +
    "."
  );
}
function kr(e, t) {
  if (t.length === 1) return t[0];
  let r = [...t],
    n = r.pop();
  return `${r.join(", ")} ${e} ${n}`;
}
var Nc = 3;
function Dc(e, t) {
  let r = 1 / 0,
    n;
  for (let i of t) {
    let o = (0, ds.default)(e, i);
    o > Nc || (o < r && ((r = o), (n = i)));
  }
  return n;
}
function Or({
  args: e,
  errors: t,
  errorFormat: r,
  callsite: n,
  originalMethod: i,
  clientVersion: o,
}) {
  let s = hr(e);
  for (let h of t) Ar(h, s);
  let a = r === "pretty" ? uo : dr,
    l = s.renderAllMessages(a),
    u = new ot(0, { colors: a }).write(s).toString(),
    g = mt({
      message: l,
      callsite: n,
      originalMethod: i,
      showColors: r === "pretty",
      callArguments: u,
    });
  throw new Y(g, { clientVersion: o });
}
var Bc = {
  findUnique: "findUnique",
  findUniqueOrThrow: "findUniqueOrThrow",
  findFirst: "findFirst",
  findFirstOrThrow: "findFirstOrThrow",
  findMany: "findMany",
  count: "aggregate",
  create: "createOne",
  createMany: "createMany",
  createManyAndReturn: "createManyAndReturn",
  update: "updateOne",
  updateMany: "updateMany",
  upsert: "upsertOne",
  delete: "deleteOne",
  deleteMany: "deleteMany",
  executeRaw: "executeRaw",
  queryRaw: "queryRaw",
  aggregate: "aggregate",
  groupBy: "groupBy",
  runCommandRaw: "runCommandRaw",
  findRaw: "findRaw",
  aggregateRaw: "aggregateRaw",
};
function ws({
  modelName: e,
  action: t,
  args: r,
  runtimeDataModel: n,
  extensions: i,
  callsite: o,
  clientMethod: s,
  errorFormat: a,
  clientVersion: l,
  previewFeatures: u,
}) {
  let g = new Mn({
    runtimeDataModel: n,
    modelName: e,
    action: t,
    rootArgs: r,
    callsite: o,
    extensions: i,
    selectionPath: [],
    argumentPath: [],
    originalMethod: s,
    errorFormat: a,
    clientVersion: l,
    previewFeatures: u,
  });
  return { modelName: e, action: Bc[t], query: _n(r, g) };
}
function _n({ select: e, include: t, ...r } = {}, n) {
  let i;
  return (
    n.isPreviewFeatureOn("omitApi") && ((i = r.omit), delete r.omit),
    { arguments: Es(r, n), selection: $c(e, t, i, n) }
  );
}
function $c(e, t, r, n) {
  return e
    ? (t
        ? n.throwValidationError({
            kind: "MutuallyExclusiveFields",
            firstField: "include",
            secondField: "select",
            selectionPath: n.getSelectionPath(),
          })
        : r &&
          n.isPreviewFeatureOn("omitApi") &&
          n.throwValidationError({
            kind: "MutuallyExclusiveFields",
            firstField: "omit",
            secondField: "select",
            selectionPath: n.getSelectionPath(),
          }),
      Vc(e, n))
    : jc(n, t, r);
}
function jc(e, t, r) {
  let n = {};
  return (
    e.model && !e.isRawAction() && ((n.$composites = !0), (n.$scalars = !0)),
    t && Uc(n, t, e),
    r && e.isPreviewFeatureOn("omitApi") && qc(n, r, e),
    n
  );
}
function Uc(e, t, r) {
  for (let [n, i] of Object.entries(t)) {
    let o = r.findField(n);
    o &&
      o?.kind !== "object" &&
      r.throwValidationError({
        kind: "IncludeOnScalar",
        selectionPath: r.getSelectionPath().concat(n),
        outputType: r.getOutputTypeDescription(),
      }),
      i === !0
        ? (e[n] = !0)
        : typeof i == "object" && (e[n] = _n(i, r.nestSelection(n)));
  }
}
function qc(e, t, r) {
  let n = r.getComputedFields(),
    i = Wo(t, n);
  for (let [o, s] of Object.entries(i)) {
    let a = r.findField(o);
    (n?.[o] && !a) || (e[o] = !s);
  }
}
function Vc(e, t) {
  let r = {},
    n = t.getComputedFields(),
    i = Jo(e, n);
  for (let [o, s] of Object.entries(i)) {
    let a = t.findField(o);
    (n?.[o] && !a) ||
      (s === !0
        ? (r[o] = !0)
        : typeof s == "object" && (r[o] = _n(s, t.nestSelection(o))));
  }
  return r;
}
function bs(e, t) {
  if (e === null) return null;
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
    return e;
  if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
  if (st(e)) {
    if (nr(e)) return { $type: "DateTime", value: e.toISOString() };
    t.throwValidationError({
      kind: "InvalidArgumentValue",
      selectionPath: t.getSelectionPath(),
      argumentPath: t.getArgumentPath(),
      argument: { name: t.getArgumentName(), typeNames: ["Date"] },
      underlyingError: "Provided Date object is invalid",
    });
  }
  if (ct(e))
    return {
      $type: "FieldRef",
      value: { _ref: e.name, _container: e.modelName },
    };
  if (Array.isArray(e)) return Qc(e, t);
  if (ArrayBuffer.isView(e))
    return { $type: "Bytes", value: w.Buffer.from(e).toString("base64") };
  if (Jc(e)) return e.values;
  if (ut(e)) return { $type: "Decimal", value: e.toFixed() };
  if (e instanceof Fe) {
    if (e !== Xt.instances[e._getName()])
      throw new Error("Invalid ObjectEnumValue");
    return { $type: "Enum", value: e._getName() };
  }
  if (Wc(e)) return e.toJSON();
  if (typeof e == "object") return Es(e, t);
  t.throwValidationError({
    kind: "InvalidArgumentValue",
    selectionPath: t.getSelectionPath(),
    argumentPath: t.getArgumentPath(),
    argument: { name: t.getArgumentName(), typeNames: [] },
    underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
  });
}
function Es(e, t) {
  if (e.$type) return { $type: "Raw", value: e };
  let r = {};
  for (let n in e) {
    let i = e[n];
    i !== void 0 && (r[n] = bs(i, t.nestArgument(n)));
  }
  return r;
}
function Qc(e, t) {
  let r = [];
  for (let n = 0; n < e.length; n++) {
    let i = t.nestArgument(String(n)),
      o = e[n];
    o === void 0 &&
      t.throwValidationError({
        kind: "InvalidArgumentValue",
        selectionPath: i.getSelectionPath(),
        argumentPath: i.getArgumentPath(),
        argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] },
        underlyingError:
          "Can not use `undefined` value within array. Use `null` or filter out `undefined` values",
      }),
      r.push(bs(o, i));
  }
  return r;
}
function Jc(e) {
  return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0;
}
function Wc(e) {
  return typeof e == "object" && e !== null && typeof e.toJSON == "function";
}
var Mn = class e {
  constructor(t) {
    this.params = t;
    this.params.modelName &&
      (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
  }
  throwValidationError(t) {
    Or({
      errors: [t],
      originalMethod: this.params.originalMethod,
      args: this.params.rootArgs ?? {},
      callsite: this.params.callsite,
      errorFormat: this.params.errorFormat,
      clientVersion: this.params.clientVersion,
    });
  }
  getSelectionPath() {
    return this.params.selectionPath;
  }
  getArgumentPath() {
    return this.params.argumentPath;
  }
  getArgumentName() {
    return this.params.argumentPath[this.params.argumentPath.length - 1];
  }
  getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.model))
      return {
        name: this.params.modelName,
        fields: this.model.fields.map((t) => ({
          name: t.name,
          typeName: "boolean",
          isRelation: t.kind === "object",
        })),
      };
  }
  isRawAction() {
    return [
      "executeRaw",
      "queryRaw",
      "runCommandRaw",
      "findRaw",
      "aggregateRaw",
    ].includes(this.params.action);
  }
  isPreviewFeatureOn(t) {
    return this.params.previewFeatures.includes(t);
  }
  getComputedFields() {
    if (this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(t) {
    return this.model?.fields.find((r) => r.name === t);
  }
  nestSelection(t) {
    let r = this.findField(t),
      n = r?.kind === "object" ? r.type : void 0;
    return new e({
      ...this.params,
      modelName: n,
      selectionPath: this.params.selectionPath.concat(t),
    });
  }
  nestArgument(t) {
    return new e({
      ...this.params,
      argumentPath: this.params.argumentPath.concat(t),
    });
  }
};
m();
c();
p();
f();
d();
var xs = (e) => ({ command: e });
m();
c();
p();
f();
d();
m();
c();
p();
f();
d();
var vs = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
m();
c();
p();
f();
d();
function qt(e) {
  try {
    return Ps(e, "fast");
  } catch {
    return Ps(e, "slow");
  }
}
function Ps(e, t) {
  return JSON.stringify(e.map((r) => Gc(r, t)));
}
function Gc(e, t) {
  return typeof e == "bigint"
    ? { prisma__type: "bigint", prisma__value: e.toString() }
    : st(e)
      ? { prisma__type: "date", prisma__value: e.toJSON() }
      : ve.isDecimal(e)
        ? { prisma__type: "decimal", prisma__value: e.toJSON() }
        : w.Buffer.isBuffer(e)
          ? { prisma__type: "bytes", prisma__value: e.toString("base64") }
          : Hc(e) || ArrayBuffer.isView(e)
            ? {
                prisma__type: "bytes",
                prisma__value: w.Buffer.from(e).toString("base64"),
              }
            : typeof e == "object" && t === "slow"
              ? Cs(e)
              : e;
}
function Hc(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == "object" && e !== null
      ? e[Symbol.toStringTag] === "ArrayBuffer" ||
        e[Symbol.toStringTag] === "SharedArrayBuffer"
      : !1;
}
function Cs(e) {
  if (typeof e != "object" || e === null) return e;
  if (typeof e.toJSON == "function") return e.toJSON();
  if (Array.isArray(e)) return e.map(Ts);
  let t = {};
  for (let r of Object.keys(e)) t[r] = Ts(e[r]);
  return t;
}
function Ts(e) {
  return typeof e == "bigint" ? e.toString() : Cs(e);
}
var Kc = /^(\s*alter\s)/i,
  As = le("prisma:client");
function Ln(e, t, r, n) {
  if (
    !(e !== "postgresql" && e !== "cockroachdb") &&
    r.length > 0 &&
    Kc.exec(t)
  )
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var In =
    ({ clientMethod: e, activeProvider: t }) =>
    (r) => {
      let n = "",
        i;
      if (Array.isArray(r)) {
        let [o, ...s] = r;
        (n = o), (i = { values: qt(s || []), __prismaRawParameters__: !0 });
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            (n = r.sql),
              (i = { values: qt(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            (n = r.text),
              (i = { values: qt(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case "sqlserver": {
            (n = vs(r)),
              (i = { values: qt(r.values), __prismaRawParameters__: !0 });
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return (
        i?.values
          ? As(`prisma.${e}(${n}, ${i.values})`)
          : As(`prisma.${e}(${n})`),
        { query: n, parameters: i }
      );
    },
  Ss = {
    requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    },
    middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new se(t, r);
    },
  },
  Rs = {
    requestArgsToMiddlewareArgs(e) {
      return [e];
    },
    middlewareArgsToRequestArgs(e) {
      return e[0];
    },
  };
m();
c();
p();
f();
d();
function Nn(e) {
  return function (r) {
    let n,
      i = (o = e) => {
        try {
          return o === void 0 || o?.kind === "itx"
            ? (n ??= ks(r(o)))
            : ks(r(o));
        } catch (s) {
          return Promise.reject(s);
        }
      };
    return {
      then(o, s) {
        return i().then(o, s);
      },
      catch(o) {
        return i().catch(o);
      },
      finally(o) {
        return i().finally(o);
      },
      requestTransaction(o) {
        let s = i(o);
        return s.requestTransaction ? s.requestTransaction(o) : s;
      },
      [Symbol.toStringTag]: "PrismaPromise",
    };
  };
}
function ks(e) {
  return typeof e.then == "function" ? e : Promise.resolve(e);
}
m();
c();
p();
f();
d();
var Os = {
    isEnabled() {
      return !1;
    },
    getTraceParent() {
      return "00-10-10-00";
    },
    async createEngineSpan() {},
    getActiveContext() {},
    runInChildSpan(e, t) {
      return t();
    },
  },
  Dn = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    createEngineSpan(t) {
      return this.getGlobalTracingHelper().createEngineSpan(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      return globalThis.PRISMA_INSTRUMENTATION?.helper ?? Os;
    }
  };
function Fs(e) {
  return e.includes("tracing") ? new Dn() : Os;
}
m();
c();
p();
f();
d();
function Ms(e, t = () => {}) {
  let r,
    n = new Promise((i) => (r = i));
  return {
    then(i) {
      return --e === 0 && r(t()), i?.(n);
    },
  };
}
m();
c();
p();
f();
d();
var zc = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"],
  _s = zc;
m();
c();
p();
f();
d();
function Ls(e) {
  return typeof e == "string"
    ? e
    : e.reduce(
        (t, r) => {
          let n = typeof r == "string" ? r : r.level;
          return n === "query"
            ? t
            : t && (r === "info" || t === "info")
              ? "info"
              : n;
        },
        void 0,
      );
}
m();
c();
p();
f();
d();
var Fr = class {
  constructor() {
    this._middlewares = [];
  }
  use(t) {
    this._middlewares.push(t);
  }
  get(t) {
    return this._middlewares[t];
  }
  has(t) {
    return !!this._middlewares[t];
  }
  length() {
    return this._middlewares.length;
  }
};
m();
c();
p();
f();
d();
var Ns = fe(nn());
m();
c();
p();
f();
d();
function Mr(e) {
  return typeof e.batchRequestIdx == "number";
}
m();
c();
p();
f();
d();
function _r(e) {
  return e === null
    ? e
    : Array.isArray(e)
      ? e.map(_r)
      : typeof e == "object"
        ? Yc(e)
          ? Zc(e)
          : rt(e, _r)
        : e;
}
function Yc(e) {
  return e !== null && typeof e == "object" && typeof e.$type == "string";
}
function Zc({ $type: e, value: t }) {
  switch (e) {
    case "BigInt":
      return BigInt(t);
    case "Bytes":
      return w.Buffer.from(t, "base64");
    case "DateTime":
      return new Date(t);
    case "Decimal":
      return new ve(t);
    case "Json":
      return JSON.parse(t);
    default:
      We(t, "Unknown tagged value");
  }
}
m();
c();
p();
f();
d();
function Is(e) {
  if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
  let t = [];
  return (
    e.modelName && t.push(e.modelName),
    e.query.arguments && t.push(Bn(e.query.arguments)),
    t.push(Bn(e.query.selection)),
    t.join("")
  );
}
function Bn(e) {
  return `(${Object.keys(e)
    .sort()
    .map((r) => {
      let n = e[r];
      return typeof n == "object" && n !== null ? `(${r} ${Bn(n)})` : r;
    })
    .join(" ")})`;
}
m();
c();
p();
f();
d();
var Xc = {
  aggregate: !1,
  aggregateRaw: !1,
  createMany: !0,
  createManyAndReturn: !0,
  createOne: !0,
  deleteMany: !0,
  deleteOne: !0,
  executeRaw: !0,
  findFirst: !1,
  findFirstOrThrow: !1,
  findMany: !1,
  findRaw: !1,
  findUnique: !1,
  findUniqueOrThrow: !1,
  groupBy: !1,
  queryRaw: !1,
  runCommandRaw: !0,
  updateMany: !0,
  updateOne: !0,
  upsertOne: !0,
};
function $n(e) {
  return Xc[e];
}
m();
c();
p();
f();
d();
var Lr = class {
  constructor(t) {
    this.options = t;
    this.tickActive = !1;
    this.batches = {};
  }
  request(t) {
    let r = this.options.batchBy(t);
    return r
      ? (this.batches[r] ||
          ((this.batches[r] = []),
          this.tickActive ||
            ((this.tickActive = !0),
            y.nextTick(() => {
              this.dispatchBatches(), (this.tickActive = !1);
            }))),
        new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        }))
      : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t],
        r.length === 1
          ? this.options
              .singleLoader(r[0].request)
              .then((n) => {
                n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
              })
              .catch((n) => {
                r[0].reject(n);
              })
          : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)),
            this.options
              .batchLoader(r.map((n) => n.request))
              .then((n) => {
                if (n instanceof Error)
                  for (let i = 0; i < r.length; i++) r[i].reject(n);
                else
                  for (let i = 0; i < r.length; i++) {
                    let o = n[i];
                    o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
                  }
              })
              .catch((n) => {
                for (let i = 0; i < r.length; i++) r[i].reject(n);
              }));
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};
var ep = le("prisma:client:request_handler"),
  Ir = class {
    constructor(t, r) {
      (this.logEmitter = r),
        (this.client = t),
        (this.dataloader = new Lr({
          batchLoader: jo(async ({ requests: n, customDataProxyFetch: i }) => {
            let { transaction: o, otelParentCtx: s } = n[0],
              a = n.map((h) => h.protocolQuery),
              l = this.client._tracingHelper.getTraceParent(s),
              u = n.some((h) => $n(h.protocolQuery.action));
            return (
              await this.client._engine.requestBatch(a, {
                traceparent: l,
                transaction: tp(o),
                containsWrite: u,
                customDataProxyFetch: i,
              })
            ).map((h, v) => {
              if (h instanceof Error) return h;
              try {
                return this.mapQueryEngineResult(n[v], h);
              } catch (R) {
                return R;
              }
            });
          }),
          singleLoader: async (n) => {
            let i = n.transaction?.kind === "itx" ? Ds(n.transaction) : void 0,
              o = await this.client._engine.request(n.protocolQuery, {
                traceparent: this.client._tracingHelper.getTraceParent(),
                interactiveTransaction: i,
                isWrite: $n(n.protocolQuery.action),
                customDataProxyFetch: n.customDataProxyFetch,
              });
            return this.mapQueryEngineResult(n, o);
          },
          batchBy: (n) =>
            n.transaction?.id
              ? `transaction-${n.transaction.id}`
              : Is(n.protocolQuery),
          batchOrder(n, i) {
            return n.transaction?.kind === "batch" &&
              i.transaction?.kind === "batch"
              ? n.transaction.index - i.transaction.index
              : 0;
          },
        }));
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let {
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
        } = t;
        this.handleAndLogRequestError({
          error: r,
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
        });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let i = n?.data,
        o = n?.elapsed,
        s = this.unpack(i, t, r);
      return y.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw (
          (this.logEmitter &&
            this.logEmitter.emit("error", {
              message: r.message,
              target: t.clientMethod,
              timestamp: new Date(),
            }),
          r)
        );
      }
    }
    handleRequestError({
      error: t,
      clientMethod: r,
      callsite: n,
      transaction: i,
      args: o,
      modelName: s,
    }) {
      if ((ep(t), rp(t, i) || t instanceof Oe)) throw t;
      if (t instanceof G && np(t)) {
        let l = Bs(t.meta);
        Or({
          args: o,
          errors: [l],
          callsite: n,
          errorFormat: this.client._errorFormat,
          originalMethod: r,
          clientVersion: this.client._clientVersion,
        });
      }
      let a = t.message;
      if (
        (n &&
          (a = mt({
            callsite: n,
            originalMethod: r,
            isPanic: t.isPanic,
            showColors: this.client._errorFormat === "pretty",
            message: a,
          })),
        (a = this.sanitizeMessage(a)),
        t.code)
      ) {
        let l = s ? { modelName: s, ...t.meta } : t.meta;
        throw new G(a, {
          code: t.code,
          clientVersion: this.client._clientVersion,
          meta: l,
          batchRequestIdx: t.batchRequestIdx,
        });
      } else {
        if (t.isPanic) throw new ue(a, this.client._clientVersion);
        if (t instanceof H)
          throw new H(a, {
            clientVersion: this.client._clientVersion,
            batchRequestIdx: t.batchRequestIdx,
          });
        if (t instanceof V) throw new V(a, this.client._clientVersion);
        if (t instanceof ue) throw new ue(a, this.client._clientVersion);
      }
      throw ((t.clientVersion = this.client._clientVersion), t);
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty"
        ? (0, Ns.default)(t)
        : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t)) return t;
      let i = Object.values(t)[0],
        o = r.filter((a) => a !== "select" && a !== "include"),
        s = _r(Tn(i, o));
      return n ? n(s) : s;
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
function tp(e) {
  if (e) {
    if (e.kind === "batch")
      return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
    if (e.kind === "itx") return { kind: "itx", options: Ds(e) };
    We(e, "Unknown transaction kind");
  }
}
function Ds(e) {
  return { id: e.id, payload: e.payload };
}
function rp(e, t) {
  return Mr(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
}
function np(e) {
  return e.code === "P2009" || e.code === "P2012";
}
function Bs(e) {
  if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(Bs) };
  if (Array.isArray(e.selectionPath)) {
    let [, ...t] = e.selectionPath;
    return { ...e, selectionPath: t };
  }
  return e;
}
m();
c();
p();
f();
d();
var $s = "5.14.0";
var js = $s;
m();
c();
p();
f();
d();
function Us(e) {
  return e.map((t) => {
    let r = {};
    for (let n of Object.keys(t)) r[n] = qs(t[n]);
    return r;
  });
}
function qs({ prisma__type: e, prisma__value: t }) {
  switch (e) {
    case "bigint":
      return BigInt(t);
    case "bytes":
      return w.Buffer.from(t, "base64");
    case "decimal":
      return new ve(t);
    case "datetime":
    case "date":
      return new Date(t);
    case "time":
      return new Date(`1970-01-01T${t}Z`);
    case "array":
      return t.map(qs);
    default:
      return t;
  }
}
m();
c();
p();
f();
d();
var Ws = fe(Fn());
m();
c();
p();
f();
d();
var q = class extends Error {
  constructor(t) {
    super(
      t +
        `
Read more at https://pris.ly/d/client-constructor`,
    ),
      (this.name = "PrismaClientConstructorValidationError");
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
re(q, "PrismaClientConstructorValidationError");
var Vs = [
    "datasources",
    "datasourceUrl",
    "errorFormat",
    "adapter",
    "log",
    "transactionOptions",
    "__internal",
  ],
  Qs = ["pretty", "colorless", "minimal"],
  Js = ["info", "query", "warn", "error"],
  op = {
    datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new q(
            `Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`,
          );
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = gt(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new q(
              `Unknown datasource ${r} provided to PrismaClient constructor.${i}`,
            );
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new q(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new q(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new q(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    },
    adapter: (e, t) => {
      if (e === null) return;
      if (e === void 0)
        throw new q(
          '"adapter" property must not be undefined, use null to conditionally disable driver adapters.',
        );
      if (!Cr(t).includes("driverAdapters"))
        throw new q(
          '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.',
        );
      if (Tt() === "binary")
        throw new q(
          'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.',
        );
    },
    datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string")
        throw new q(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new q(
            `Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`,
          );
        if (!Qs.includes(e)) {
          let t = gt(e, Qs);
          throw new q(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
          );
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e))
        throw new q(
          `Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`,
        );
      function t(r) {
        if (typeof r == "string" && !Js.includes(r)) {
          let n = gt(r, Js);
          throw new q(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
          );
        }
      }
      for (let r of e) {
        t(r);
        let n = {
          level: t,
          emit: (i) => {
            let o = ["stdout", "event"];
            if (!o.includes(i)) {
              let s = gt(i, o);
              throw new q(
                `Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              );
            }
          },
        };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i]) n[i](o);
            else
              throw new q(
                `Invalid property ${i} for "log" provided to PrismaClient constructor`,
              );
      }
    },
    transactionOptions: (e) => {
      if (!e) return;
      let t = e.maxWait;
      if (t != null && t <= 0)
        throw new q(
          `Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`,
        );
      let r = e.timeout;
      if (r != null && r <= 0)
        throw new q(
          `Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`,
        );
    },
    __internal: (e) => {
      if (!e) return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object")
        throw new q(
          `Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`,
        );
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = gt(r, t);
          throw new q(
            `Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`,
          );
        }
    },
  };
function Gs(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!Vs.includes(r)) {
      let i = gt(r, Vs);
      throw new q(
        `Unknown property ${r} provided to PrismaClient constructor.${i}`,
      );
    }
    op[r](n, t);
  }
  if (e.datasourceUrl && e.datasources)
    throw new q(
      'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them',
    );
}
function gt(e, t) {
  if (t.length === 0 || typeof e != "string") return "";
  let r = sp(e, t);
  return r ? ` Did you mean "${r}"?` : "";
}
function sp(e, t) {
  if (t.length === 0) return null;
  let r = t.map((i) => ({ value: i, distance: (0, Ws.default)(e, i) }));
  r.sort((i, o) => (i.distance < o.distance ? -1 : 1));
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
m();
c();
p();
f();
d();
function Hs(e) {
  return e.length === 0
    ? Promise.resolve([])
    : new Promise((t, r) => {
        let n = new Array(e.length),
          i = null,
          o = !1,
          s = 0,
          a = () => {
            o || (s++, s === e.length && ((o = !0), i ? r(i) : t(n)));
          },
          l = (u) => {
            o || ((o = !0), r(u));
          };
        for (let u = 0; u < e.length; u++)
          e[u].then(
            (g) => {
              (n[u] = g), a();
            },
            (g) => {
              if (!Mr(g)) {
                l(g);
                return;
              }
              g.batchRequestIdx === u ? l(g) : (i || (i = g), a());
            },
          );
      });
}
var Ue = le("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var ap = {
    requestArgsToMiddlewareArgs: (e) => e,
    middlewareArgsToRequestArgs: (e) => e,
  },
  lp = Symbol.for("prisma.client.transaction.id"),
  up = {
    id: 0,
    nextId() {
      return ++this.id;
    },
  };
function Ys(e) {
  class t {
    constructor(n) {
      this._originalClient = this;
      this._middlewares = new Fr();
      this._createPrismaPromise = Nn();
      this.$extends = Mo;
      (e = n?.__internal?.configOverride?.(e) ?? e), Ko(e), n && Gs(n, e);
      let i = n?.adapter ? fn(n.adapter) : void 0,
        o = new Kt().on("error", () => {});
      (this._extensions = Pr.empty()),
        (this._previewFeatures = Cr(e)),
        (this._clientVersion = e.clientVersion ?? js),
        (this._activeProvider = e.activeProvider),
        (this._tracingHelper = Fs(this._previewFeatures));
      let s = {
          rootEnvPath:
            e.relativeEnvPaths.rootEnvPath &&
            we.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath:
            e.relativeEnvPaths.schemaEnvPath &&
            we.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        a = e.injectableEdgeEnv?.();
      try {
        let l = n ?? {},
          u = l.__internal ?? {},
          g = u.debug === !0;
        g && le.enable("prisma:client");
        let h = we.resolve(e.dirname, e.relativePath);
        Gt.existsSync(h) || (h = e.dirname),
          Ue("dirname", e.dirname),
          Ue("relativePath", e.relativePath),
          Ue("cwd", h);
        let v = u.engine || {};
        if (
          (l.errorFormat
            ? (this._errorFormat = l.errorFormat)
            : y.env.NODE_ENV === "production"
              ? (this._errorFormat = "minimal")
              : y.env.NO_COLOR
                ? (this._errorFormat = "colorless")
                : (this._errorFormat = "colorless"),
          (this._runtimeDataModel = e.runtimeDataModel),
          (this._engineConfig = {
            cwd: h,
            dirname: e.dirname,
            enableDebugLogs: g,
            allowTriggerPanic: v.allowTriggerPanic,
            datamodelPath: we.join(e.dirname, e.filename ?? "schema.prisma"),
            prismaPath: v.binaryPath ?? void 0,
            engineEndpoint: v.endpoint,
            generator: e.generator,
            showColors: this._errorFormat === "pretty",
            logLevel: l.log && Ls(l.log),
            logQueries:
              l.log &&
              !!(typeof l.log == "string"
                ? l.log === "query"
                : l.log.find((R) =>
                    typeof R == "string" ? R === "query" : R.level === "query",
                  )),
            env: a?.parsed ?? {},
            flags: [],
            engineWasm: e.engineWasm,
            clientVersion: e.clientVersion,
            engineVersion: e.engineVersion,
            previewFeatures: this._previewFeatures,
            activeProvider: e.activeProvider,
            inlineSchema: e.inlineSchema,
            overrideDatasources: zo(l, e.datasourceNames),
            inlineDatasources: e.inlineDatasources,
            inlineSchemaHash: e.inlineSchemaHash,
            tracingHelper: this._tracingHelper,
            transactionOptions: {
              maxWait: l.transactionOptions?.maxWait ?? 2e3,
              timeout: l.transactionOptions?.timeout ?? 5e3,
              isolationLevel: l.transactionOptions?.isolationLevel,
            },
            logEmitter: o,
            isBundled: e.isBundled,
            adapter: i,
          }),
          (this._accelerateEngineConfig = {
            ...this._engineConfig,
            accelerateUtils: {
              resolveDatasourceUrl: Tr,
              getBatchRequestPayload: rr,
              prismaGraphQLToJSError: yr,
              PrismaClientUnknownRequestError: H,
              PrismaClientInitializationError: V,
              PrismaClientKnownRequestError: G,
              debug: le("prisma:client:accelerateEngine"),
              engineVersion: zs.version,
              clientVersion: e.clientVersion,
            },
          }),
          Ue("clientVersion", e.clientVersion),
          (this._engine = as(e, this._engineConfig)),
          (this._requestHandler = new Ir(this, o)),
          l.log)
        )
          for (let R of l.log) {
            let C =
              typeof R == "string" ? R : R.emit === "stdout" ? R.level : null;
            C &&
              this.$on(C, (A) => {
                At.log(`${At.tags[C] ?? ""}`, A.message || A.query);
              });
          }
        this._metrics = new nt(this._engine);
      } catch (l) {
        throw ((l.clientVersion = this._clientVersion), l);
      }
      return (this._appliedParent = Bt(this));
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    $use(n) {
      this._middlewares.use(n);
    }
    $on(n, i) {
      n === "beforeExit"
        ? this._engine.onBeforeExit(i)
        : n && this._engineConfig.logEmitter.on(n, i);
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      }
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      } finally {
        Pi();
      }
    }
    $executeRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({
        action: "executeRaw",
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: In({ clientMethod: i, activeProvider: a }),
        callsite: je(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = Ks(n, i);
          return (
            Ln(
              this._activeProvider,
              s.text,
              s.values,
              Array.isArray(n)
                ? "prisma.$executeRaw`<SQL>`"
                : "prisma.$executeRaw(sql`<SQL>`)",
            ),
            this.$executeRawInternal(o, "$executeRaw", s, a)
          );
        }
        throw new Y(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise(
        (o) => (
          Ln(
            this._activeProvider,
            n,
            i,
            "prisma.$executeRawUnsafe(<SQL>, [...values])",
          ),
          this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])
        ),
      );
    }
    $runCommandRaw(n) {
      if (e.activeProvider !== "mongodb")
        throw new Y(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
          { clientVersion: this._clientVersion },
        );
      return this._createPrismaPromise((i) =>
        this._request({
          args: n,
          clientMethod: "$runCommandRaw",
          dataPath: [],
          action: "runCommandRaw",
          argsMapper: xs,
          callsite: je(this._errorFormat),
          transaction: i,
        }),
      );
    }
    async $queryRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({
        action: "queryRaw",
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: In({ clientMethod: i, activeProvider: a }),
        callsite: je(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      }).then(Us);
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, "$queryRaw", ...Ks(n, i));
        throw new Y(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $queryRawUnsafe(n, ...i) {
      return this._createPrismaPromise((o) =>
        this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]),
      );
    }
    _transactionWithArray({ promises: n, options: i }) {
      let o = up.nextId(),
        s = Ms(n.length),
        a = n.map((l, u) => {
          if (l?.[Symbol.toStringTag] !== "PrismaPromise")
            throw new Error(
              "All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.",
            );
          let g =
              i?.isolationLevel ??
              this._engineConfig.transactionOptions.isolationLevel,
            h = { kind: "batch", id: o, index: u, isolationLevel: g, lock: s };
          return l.requestTransaction?.(h) ?? l;
        });
      return Hs(a);
    }
    async _transactionWithCallback({ callback: n, options: i }) {
      let o = { traceparent: this._tracingHelper.getTraceParent() },
        s = {
          maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait,
          timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout,
          isolationLevel:
            i?.isolationLevel ??
            this._engineConfig.transactionOptions.isolationLevel,
        },
        a = await this._engine.transaction("start", o, s),
        l;
      try {
        let u = { kind: "itx", ...a };
        (l = await n(this._createItxClient(u))),
          await this._engine.transaction("commit", o, a);
      } catch (u) {
        throw (
          (await this._engine.transaction("rollback", o, a).catch(() => {}), u)
        );
      }
      return l;
    }
    _createItxClient(n) {
      return Bt(
        Ee(Fo(this), [
          ne("_appliedParent", () => this._appliedParent._createItxClient(n)),
          ne("_createPrismaPromise", () => Nn(n)),
          ne(lp, () => n.id),
          it(_s),
        ]),
      );
    }
    $transaction(n, i) {
      let o;
      typeof n == "function"
        ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1"
          ? (o = () => {
              throw new Error(
                "Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.",
              );
            })
          : (o = () =>
              this._transactionWithCallback({ callback: n, options: i }))
        : (o = () => this._transactionWithArray({ promises: n, options: i }));
      let s = { name: "transaction", attributes: { method: "$transaction" } };
      return this._tracingHelper.runInChildSpan(s, o);
    }
    _request(n) {
      n.otelParentCtx = this._tracingHelper.getActiveContext();
      let i = n.middlewareArgsMapper ?? ap,
        o = {
          args: i.requestArgsToMiddlewareArgs(n.args),
          dataPath: n.dataPath,
          runInTransaction: !!n.transaction,
          action: n.action,
          model: n.model,
        },
        s = {
          middleware: {
            name: "middleware",
            middleware: !0,
            attributes: { method: "$use" },
            active: !1,
          },
          operation: {
            name: "operation",
            attributes: {
              method: o.action,
              model: o.model,
              name: o.model ? `${o.model}.${o.action}` : o.action,
            },
          },
        },
        a = -1,
        l = async (u) => {
          let g = this._middlewares.get(++a);
          if (g)
            return this._tracingHelper.runInChildSpan(s.middleware, (F) =>
              g(u, (L) => (F?.end(), l(L))),
            );
          let { runInTransaction: h, args: v, ...R } = u,
            C = { ...n, ...R };
          v && (C.args = i.middlewareArgsToRequestArgs(v)),
            n.transaction !== void 0 && h === !1 && delete C.transaction;
          let A = await $o(this, C);
          return C.model
            ? Io({
                result: A,
                modelName: C.model,
                args: C.args,
                extensions: this._extensions,
                runtimeDataModel: this._runtimeDataModel,
              })
            : A;
        };
      return this._tracingHelper.runInChildSpan(s.operation, () => l(o));
    }
    async _executeRequest({
      args: n,
      clientMethod: i,
      dataPath: o,
      callsite: s,
      action: a,
      model: l,
      argsMapper: u,
      transaction: g,
      unpacker: h,
      otelParentCtx: v,
      customDataProxyFetch: R,
    }) {
      try {
        n = u ? u(n) : n;
        let C = { name: "serialize" },
          A = this._tracingHelper.runInChildSpan(C, () =>
            ws({
              modelName: l,
              runtimeDataModel: this._runtimeDataModel,
              action: a,
              args: n,
              clientMethod: i,
              callsite: s,
              extensions: this._extensions,
              errorFormat: this._errorFormat,
              clientVersion: this._clientVersion,
              previewFeatures: this._previewFeatures,
            }),
          );
        return (
          le.enabled("prisma:client") &&
            (Ue("Prisma Client call:"),
            Ue(`prisma.${i}(${mo(n)})`),
            Ue("Generated request:"),
            Ue(
              JSON.stringify(A, null, 2) +
                `
`,
            )),
          g?.kind === "batch" && (await g.lock),
          this._requestHandler.request({
            protocolQuery: A,
            modelName: l,
            action: a,
            clientMethod: i,
            dataPath: o,
            callsite: s,
            args: n,
            extensions: this._extensions,
            transaction: g,
            unpacker: h,
            otelParentCtx: v,
            otelChildCtx: this._tracingHelper.getActiveContext(),
            customDataProxyFetch: R,
          })
        );
      } catch (C) {
        throw ((C.clientVersion = this._clientVersion), C);
      }
    }
    get $metrics() {
      if (!this._hasPreviewFlag("metrics"))
        throw new Y(
          "`metrics` preview feature must be enabled in order to access metrics API",
          { clientVersion: this._clientVersion },
        );
      return this._metrics;
    }
    _hasPreviewFlag(n) {
      return !!this._engineConfig.previewFeatures?.includes(n);
    }
    $applyPendingMigrations() {
      return this._engine.applyPendingMigrations();
    }
  }
  return t;
}
function Ks(e, t) {
  return cp(e) ? [new se(e, t), Ss] : [e, Rs];
}
function cp(e) {
  return Array.isArray(e) && Array.isArray(e.raw);
}
m();
c();
p();
f();
d();
var pp = new Set([
  "toJSON",
  "$$typeof",
  "asymmetricMatch",
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
]);
function Zs(e) {
  return new Proxy(e, {
    get(t, r) {
      if (r in t) return t[r];
      if (!pp.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
    },
  });
}
m();
c();
p();
f();
d();
0 &&
  (module.exports = {
    Debug,
    Decimal,
    Extensions,
    MetricsClient,
    NotFoundError,
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
    Public,
    Sql,
    defineDmmfProperty,
    empty,
    getPrismaClient,
    getRuntime,
    join,
    makeStrictEnum,
    objectEnumValues,
    raw,
    sqltag,
    warnEnvConflicts,
    warnOnce,
  });
//# sourceMappingURL=react-native.js.map
