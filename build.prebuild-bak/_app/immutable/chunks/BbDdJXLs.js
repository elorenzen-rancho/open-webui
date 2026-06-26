const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'./D6Y7_RRD.js',
			'./BC4znSyB.js',
			'./BNKvJx6e.js',
			'./BkjLDdlA.js',
			'./CZJnjZH0.js',
			'./C1FmrZbK.js',
			'./B5CD4DQe.js',
			'./BX5WB7ra.js',
			'./CGEFt5-M.js',
			'./Bb3-t4AS.js',
			'./BsAKizII.js',
			'./CrKpsNbG.js',
			'./Dmth1JHB.js',
			'./CzDG__Ur.js',
			'./CrATNjtF.js',
			'./OtVwhkKS.js',
			'./C-V_EQOO.js',
			'./D9kC5om8.js',
			'./Cc3OSVma.js',
			'./BtqEITbA.js',
			'./Bi7T_FA4.js',
			'./DgYQHPtH.js'
		])
) => i.map((i) => d[i]);
import { _ as I } from './C1FmrZbK.js';
import { a as ke, c as ne, g as we, d as B, r as Ne } from './BC4znSyB.js';
import { a as ve } from './CHheSG1Y.js';
import { l as Ce } from './Bp9Sdq8c.js';
import { m as Z } from './DgCmIQGJ.js';
let V;
const Ie = new Uint8Array(16);
function _e() {
	if (
		!V &&
		((V = typeof crypto < 'u' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !V)
	)
		throw new Error(
			'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
		);
	return V(Ie);
}
const D = [];
for (let e = 0; e < 256; ++e) D.push((e + 256).toString(16).slice(1));
function Ue(e, t = 0) {
	return (
		D[e[t + 0]] +
		D[e[t + 1]] +
		D[e[t + 2]] +
		D[e[t + 3]] +
		'-' +
		D[e[t + 4]] +
		D[e[t + 5]] +
		'-' +
		D[e[t + 6]] +
		D[e[t + 7]] +
		'-' +
		D[e[t + 8]] +
		D[e[t + 9]] +
		'-' +
		D[e[t + 10]] +
		D[e[t + 11]] +
		D[e[t + 12]] +
		D[e[t + 13]] +
		D[e[t + 14]] +
		D[e[t + 15]]
	);
}
const Oe = typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
	ue = { randomUUID: Oe };
function qe(e, t, a) {
	if (ue.randomUUID && !e) return ue.randomUUID();
	e = e || {};
	const r = e.random || (e.rng || _e)();
	return ((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), Ue(r));
}
var Be = { exports: {} };
const je = {},
	$e = Object.freeze(
		Object.defineProperty({ __proto__: null, default: je }, Symbol.toStringTag, { value: 'Module' })
	),
	pe = ke($e);
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.10.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */ (function (e) {
	(function () {
		var t = 'input is invalid type',
			a = typeof window == 'object',
			r = a ? window : {};
		r.JS_SHA256_NO_WINDOW && (a = !1);
		var s = !a && typeof self == 'object',
			o =
				!r.JS_SHA256_NO_NODE_JS &&
				typeof process == 'object' &&
				process.versions &&
				process.versions.node;
		o ? (r = ne) : s && (r = self);
		var c = !r.JS_SHA256_NO_COMMON_JS && !0 && e.exports,
			l = !r.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < 'u',
			n = '0123456789abcdef'.split(''),
			h = [-2147483648, 8388608, 32768, 128],
			g = [24, 16, 8, 0],
			x = [
				1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748,
				2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206,
				2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122,
				1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891,
				3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
				1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
				3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877,
				958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452,
				2361852424, 2428436474, 2756734187, 3204031479, 3329325298
			],
			E = ['hex', 'array', 'digest', 'arrayBuffer'],
			q = [];
		((r.JS_SHA256_NO_NODE_JS || !Array.isArray) &&
			(Array.isArray = function (i) {
				return Object.prototype.toString.call(i) === '[object Array]';
			}),
			l &&
				(r.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
				(ArrayBuffer.isView = function (i) {
					return typeof i == 'object' && i.buffer && i.buffer.constructor === ArrayBuffer;
				}));
		var G = function (i, f) {
				return function (m) {
					return new F(f, !0).update(m)[i]();
				};
			},
			Y = function (i) {
				var f = G('hex', i);
				(o && (f = W(f, i)),
					(f.create = function () {
						return new F(i);
					}),
					(f.update = function (b) {
						return f.create().update(b);
					}));
				for (var m = 0; m < E.length; ++m) {
					var d = E[m];
					f[d] = G(d, i);
				}
				return f;
			},
			W = function (i, f) {
				var m = pe,
					d = pe.Buffer,
					b = f ? 'sha224' : 'sha256',
					p;
				d.from && !r.JS_SHA256_NO_BUFFER_FROM
					? (p = d.from)
					: (p = function (u) {
							return new d(u);
						});
				var y = function (u) {
					if (typeof u == 'string') return m.createHash(b).update(u, 'utf8').digest('hex');
					if (u == null) throw new Error(t);
					return (
						u.constructor === ArrayBuffer && (u = new Uint8Array(u)),
						Array.isArray(u) || ArrayBuffer.isView(u) || u.constructor === d
							? m.createHash(b).update(p(u)).digest('hex')
							: i(u)
					);
				};
				return y;
			},
			j = function (i, f) {
				return function (m, d) {
					return new $(m, f, !0).update(d)[i]();
				};
			},
			le = function (i) {
				var f = j('hex', i);
				((f.create = function (b) {
					return new $(b, i);
				}),
					(f.update = function (b, p) {
						return f.create(b).update(p);
					}));
				for (var m = 0; m < E.length; ++m) {
					var d = E[m];
					f[d] = j(d, i);
				}
				return f;
			};
		function F(i, f) {
			(f
				? ((q[0] =
						q[16] =
						q[1] =
						q[2] =
						q[3] =
						q[4] =
						q[5] =
						q[6] =
						q[7] =
						q[8] =
						q[9] =
						q[10] =
						q[11] =
						q[12] =
						q[13] =
						q[14] =
						q[15] =
							0),
					(this.blocks = q))
				: (this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
				i
					? ((this.h0 = 3238371032),
						(this.h1 = 914150663),
						(this.h2 = 812702999),
						(this.h3 = 4144912697),
						(this.h4 = 4290775857),
						(this.h5 = 1750603025),
						(this.h6 = 1694076839),
						(this.h7 = 3204075428))
					: ((this.h0 = 1779033703),
						(this.h1 = 3144134277),
						(this.h2 = 1013904242),
						(this.h3 = 2773480762),
						(this.h4 = 1359893119),
						(this.h5 = 2600822924),
						(this.h6 = 528734635),
						(this.h7 = 1541459225)),
				(this.block = this.start = this.bytes = this.hBytes = 0),
				(this.finalized = this.hashed = !1),
				(this.first = !0),
				(this.is224 = i));
		}
		((F.prototype.update = function (i) {
			if (!this.finalized) {
				var f,
					m = typeof i;
				if (m !== 'string') {
					if (m === 'object') {
						if (i === null) throw new Error(t);
						if (l && i.constructor === ArrayBuffer) i = new Uint8Array(i);
						else if (!Array.isArray(i) && (!l || !ArrayBuffer.isView(i))) throw new Error(t);
					} else throw new Error(t);
					f = !0;
				}
				for (var d, b = 0, p, y = i.length, u = this.blocks; b < y; ) {
					if (
						(this.hashed &&
							((this.hashed = !1),
							(u[0] = this.block),
							(u[16] =
								u[1] =
								u[2] =
								u[3] =
								u[4] =
								u[5] =
								u[6] =
								u[7] =
								u[8] =
								u[9] =
								u[10] =
								u[11] =
								u[12] =
								u[13] =
								u[14] =
								u[15] =
									0)),
						f)
					)
						for (p = this.start; b < y && p < 64; ++b) u[p >> 2] |= i[b] << g[p++ & 3];
					else
						for (p = this.start; b < y && p < 64; ++b)
							((d = i.charCodeAt(b)),
								d < 128
									? (u[p >> 2] |= d << g[p++ & 3])
									: d < 2048
										? ((u[p >> 2] |= (192 | (d >> 6)) << g[p++ & 3]),
											(u[p >> 2] |= (128 | (d & 63)) << g[p++ & 3]))
										: d < 55296 || d >= 57344
											? ((u[p >> 2] |= (224 | (d >> 12)) << g[p++ & 3]),
												(u[p >> 2] |= (128 | ((d >> 6) & 63)) << g[p++ & 3]),
												(u[p >> 2] |= (128 | (d & 63)) << g[p++ & 3]))
											: ((d = 65536 + (((d & 1023) << 10) | (i.charCodeAt(++b) & 1023))),
												(u[p >> 2] |= (240 | (d >> 18)) << g[p++ & 3]),
												(u[p >> 2] |= (128 | ((d >> 12) & 63)) << g[p++ & 3]),
												(u[p >> 2] |= (128 | ((d >> 6) & 63)) << g[p++ & 3]),
												(u[p >> 2] |= (128 | (d & 63)) << g[p++ & 3])));
					((this.lastByteIndex = p),
						(this.bytes += p - this.start),
						p >= 64
							? ((this.block = u[16]), (this.start = p - 64), this.hash(), (this.hashed = !0))
							: (this.start = p));
				}
				return (
					this.bytes > 4294967295 &&
						((this.hBytes += (this.bytes / 4294967296) << 0),
						(this.bytes = this.bytes % 4294967296)),
					this
				);
			}
		}),
			(F.prototype.finalize = function () {
				if (!this.finalized) {
					this.finalized = !0;
					var i = this.blocks,
						f = this.lastByteIndex;
					((i[16] = this.block),
						(i[f >> 2] |= h[f & 3]),
						(this.block = i[16]),
						f >= 56 &&
							(this.hashed || this.hash(),
							(i[0] = this.block),
							(i[16] =
								i[1] =
								i[2] =
								i[3] =
								i[4] =
								i[5] =
								i[6] =
								i[7] =
								i[8] =
								i[9] =
								i[10] =
								i[11] =
								i[12] =
								i[13] =
								i[14] =
								i[15] =
									0)),
						(i[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
						(i[15] = this.bytes << 3),
						this.hash());
				}
			}),
			(F.prototype.hash = function () {
				var i = this.h0,
					f = this.h1,
					m = this.h2,
					d = this.h3,
					b = this.h4,
					p = this.h5,
					y = this.h6,
					u = this.h7,
					w = this.blocks,
					A,
					S,
					R,
					T,
					v,
					k,
					N,
					O,
					J,
					K,
					P;
				for (A = 16; A < 64; ++A)
					((v = w[A - 15]),
						(S = ((v >>> 7) | (v << 25)) ^ ((v >>> 18) | (v << 14)) ^ (v >>> 3)),
						(v = w[A - 2]),
						(R = ((v >>> 17) | (v << 15)) ^ ((v >>> 19) | (v << 13)) ^ (v >>> 10)),
						(w[A] = (w[A - 16] + S + w[A - 7] + R) << 0));
				for (P = f & m, A = 0; A < 64; A += 4)
					(this.first
						? (this.is224
								? ((O = 300032),
									(v = w[0] - 1413257819),
									(u = (v - 150054599) << 0),
									(d = (v + 24177077) << 0))
								: ((O = 704751109),
									(v = w[0] - 210244248),
									(u = (v - 1521486534) << 0),
									(d = (v + 143694565) << 0)),
							(this.first = !1))
						: ((S = ((i >>> 2) | (i << 30)) ^ ((i >>> 13) | (i << 19)) ^ ((i >>> 22) | (i << 10))),
							(R = ((b >>> 6) | (b << 26)) ^ ((b >>> 11) | (b << 21)) ^ ((b >>> 25) | (b << 7))),
							(O = i & f),
							(T = O ^ (i & m) ^ P),
							(N = (b & p) ^ (~b & y)),
							(v = u + R + N + x[A] + w[A]),
							(k = S + T),
							(u = (d + v) << 0),
							(d = (v + k) << 0)),
						(S = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10))),
						(R = ((u >>> 6) | (u << 26)) ^ ((u >>> 11) | (u << 21)) ^ ((u >>> 25) | (u << 7))),
						(J = d & i),
						(T = J ^ (d & f) ^ O),
						(N = (u & b) ^ (~u & p)),
						(v = y + R + N + x[A + 1] + w[A + 1]),
						(k = S + T),
						(y = (m + v) << 0),
						(m = (v + k) << 0),
						(S = ((m >>> 2) | (m << 30)) ^ ((m >>> 13) | (m << 19)) ^ ((m >>> 22) | (m << 10))),
						(R = ((y >>> 6) | (y << 26)) ^ ((y >>> 11) | (y << 21)) ^ ((y >>> 25) | (y << 7))),
						(K = m & d),
						(T = K ^ (m & i) ^ J),
						(N = (y & u) ^ (~y & b)),
						(v = p + R + N + x[A + 2] + w[A + 2]),
						(k = S + T),
						(p = (f + v) << 0),
						(f = (v + k) << 0),
						(S = ((f >>> 2) | (f << 30)) ^ ((f >>> 13) | (f << 19)) ^ ((f >>> 22) | (f << 10))),
						(R = ((p >>> 6) | (p << 26)) ^ ((p >>> 11) | (p << 21)) ^ ((p >>> 25) | (p << 7))),
						(P = f & m),
						(T = P ^ (f & d) ^ K),
						(N = (p & y) ^ (~p & u)),
						(v = b + R + N + x[A + 3] + w[A + 3]),
						(k = S + T),
						(b = (i + v) << 0),
						(i = (v + k) << 0),
						(this.chromeBugWorkAround = !0));
				((this.h0 = (this.h0 + i) << 0),
					(this.h1 = (this.h1 + f) << 0),
					(this.h2 = (this.h2 + m) << 0),
					(this.h3 = (this.h3 + d) << 0),
					(this.h4 = (this.h4 + b) << 0),
					(this.h5 = (this.h5 + p) << 0),
					(this.h6 = (this.h6 + y) << 0),
					(this.h7 = (this.h7 + u) << 0));
			}),
			(F.prototype.hex = function () {
				this.finalize();
				var i = this.h0,
					f = this.h1,
					m = this.h2,
					d = this.h3,
					b = this.h4,
					p = this.h5,
					y = this.h6,
					u = this.h7,
					w =
						n[(i >> 28) & 15] +
						n[(i >> 24) & 15] +
						n[(i >> 20) & 15] +
						n[(i >> 16) & 15] +
						n[(i >> 12) & 15] +
						n[(i >> 8) & 15] +
						n[(i >> 4) & 15] +
						n[i & 15] +
						n[(f >> 28) & 15] +
						n[(f >> 24) & 15] +
						n[(f >> 20) & 15] +
						n[(f >> 16) & 15] +
						n[(f >> 12) & 15] +
						n[(f >> 8) & 15] +
						n[(f >> 4) & 15] +
						n[f & 15] +
						n[(m >> 28) & 15] +
						n[(m >> 24) & 15] +
						n[(m >> 20) & 15] +
						n[(m >> 16) & 15] +
						n[(m >> 12) & 15] +
						n[(m >> 8) & 15] +
						n[(m >> 4) & 15] +
						n[m & 15] +
						n[(d >> 28) & 15] +
						n[(d >> 24) & 15] +
						n[(d >> 20) & 15] +
						n[(d >> 16) & 15] +
						n[(d >> 12) & 15] +
						n[(d >> 8) & 15] +
						n[(d >> 4) & 15] +
						n[d & 15] +
						n[(b >> 28) & 15] +
						n[(b >> 24) & 15] +
						n[(b >> 20) & 15] +
						n[(b >> 16) & 15] +
						n[(b >> 12) & 15] +
						n[(b >> 8) & 15] +
						n[(b >> 4) & 15] +
						n[b & 15] +
						n[(p >> 28) & 15] +
						n[(p >> 24) & 15] +
						n[(p >> 20) & 15] +
						n[(p >> 16) & 15] +
						n[(p >> 12) & 15] +
						n[(p >> 8) & 15] +
						n[(p >> 4) & 15] +
						n[p & 15] +
						n[(y >> 28) & 15] +
						n[(y >> 24) & 15] +
						n[(y >> 20) & 15] +
						n[(y >> 16) & 15] +
						n[(y >> 12) & 15] +
						n[(y >> 8) & 15] +
						n[(y >> 4) & 15] +
						n[y & 15];
				return (
					this.is224 ||
						(w +=
							n[(u >> 28) & 15] +
							n[(u >> 24) & 15] +
							n[(u >> 20) & 15] +
							n[(u >> 16) & 15] +
							n[(u >> 12) & 15] +
							n[(u >> 8) & 15] +
							n[(u >> 4) & 15] +
							n[u & 15]),
					w
				);
			}),
			(F.prototype.toString = F.prototype.hex),
			(F.prototype.digest = function () {
				this.finalize();
				var i = this.h0,
					f = this.h1,
					m = this.h2,
					d = this.h3,
					b = this.h4,
					p = this.h5,
					y = this.h6,
					u = this.h7,
					w = [
						(i >> 24) & 255,
						(i >> 16) & 255,
						(i >> 8) & 255,
						i & 255,
						(f >> 24) & 255,
						(f >> 16) & 255,
						(f >> 8) & 255,
						f & 255,
						(m >> 24) & 255,
						(m >> 16) & 255,
						(m >> 8) & 255,
						m & 255,
						(d >> 24) & 255,
						(d >> 16) & 255,
						(d >> 8) & 255,
						d & 255,
						(b >> 24) & 255,
						(b >> 16) & 255,
						(b >> 8) & 255,
						b & 255,
						(p >> 24) & 255,
						(p >> 16) & 255,
						(p >> 8) & 255,
						p & 255,
						(y >> 24) & 255,
						(y >> 16) & 255,
						(y >> 8) & 255,
						y & 255
					];
				return (this.is224 || w.push((u >> 24) & 255, (u >> 16) & 255, (u >> 8) & 255, u & 255), w);
			}),
			(F.prototype.array = F.prototype.digest),
			(F.prototype.arrayBuffer = function () {
				this.finalize();
				var i = new ArrayBuffer(this.is224 ? 28 : 32),
					f = new DataView(i);
				return (
					f.setUint32(0, this.h0),
					f.setUint32(4, this.h1),
					f.setUint32(8, this.h2),
					f.setUint32(12, this.h3),
					f.setUint32(16, this.h4),
					f.setUint32(20, this.h5),
					f.setUint32(24, this.h6),
					this.is224 || f.setUint32(28, this.h7),
					i
				);
			}));
		function $(i, f, m) {
			var d,
				b = typeof i;
			if (b === 'string') {
				var p = [],
					y = i.length,
					u = 0,
					w;
				for (d = 0; d < y; ++d)
					((w = i.charCodeAt(d)),
						w < 128
							? (p[u++] = w)
							: w < 2048
								? ((p[u++] = 192 | (w >> 6)), (p[u++] = 128 | (w & 63)))
								: w < 55296 || w >= 57344
									? ((p[u++] = 224 | (w >> 12)),
										(p[u++] = 128 | ((w >> 6) & 63)),
										(p[u++] = 128 | (w & 63)))
									: ((w = 65536 + (((w & 1023) << 10) | (i.charCodeAt(++d) & 1023))),
										(p[u++] = 240 | (w >> 18)),
										(p[u++] = 128 | ((w >> 12) & 63)),
										(p[u++] = 128 | ((w >> 6) & 63)),
										(p[u++] = 128 | (w & 63))));
				i = p;
			} else if (b === 'object') {
				if (i === null) throw new Error(t);
				if (l && i.constructor === ArrayBuffer) i = new Uint8Array(i);
				else if (!Array.isArray(i) && (!l || !ArrayBuffer.isView(i))) throw new Error(t);
			} else throw new Error(t);
			i.length > 64 && (i = new F(f, !0).update(i).array());
			var A = [],
				S = [];
			for (d = 0; d < 64; ++d) {
				var R = i[d] || 0;
				((A[d] = 92 ^ R), (S[d] = 54 ^ R));
			}
			(F.call(this, f, m),
				this.update(S),
				(this.oKeyPad = A),
				(this.inner = !0),
				(this.sharedMemory = m));
		}
		(($.prototype = new F()),
			($.prototype.finalize = function () {
				if ((F.prototype.finalize.call(this), this.inner)) {
					this.inner = !1;
					var i = this.array();
					(F.call(this, this.is224, this.sharedMemory),
						this.update(this.oKeyPad),
						this.update(i),
						F.prototype.finalize.call(this));
				}
			}));
		var L = Y();
		((L.sha256 = L),
			(L.sha224 = Y(!0)),
			(L.sha256.hmac = le()),
			(L.sha224.hmac = le(!0)),
			c ? (e.exports = L) : ((r.sha256 = L.sha256), (r.sha224 = L.sha224)));
	})();
})(Be);
var Ee = { exports: {} };
(function (e, t) {
	(function (a, r) {
		e.exports = r();
	})(ne, function () {
		return function (a, r, s) {
			r.prototype.isToday = function () {
				var o = 'YYYY-MM-DD',
					c = s();
				return this.format(o) === c.format(o);
			};
		};
	});
})(Ee);
var Pe = Ee.exports;
const Ve = we(Pe);
var Ae = { exports: {} };
(function (e, t) {
	(function (a, r) {
		e.exports = r();
	})(ne, function () {
		return function (a, r, s) {
			r.prototype.isYesterday = function () {
				var o = 'YYYY-MM-DD',
					c = s().subtract(1, 'day');
				return this.format(o) === c.format(o);
			};
		};
	});
})(Ae);
var Me = Ae.exports;
const He = we(Me);
var H = ((e) => (
	(e.PUNCTUATION = 'punctuation'),
	(e.PARAGRAPHS = 'paragraphs'),
	(e.NONE = 'none'),
	e
))(H || {});
const ze = '' + new URL('../assets/pdf.worker.CliDBb4N.mjs', import.meta.url).href;
function Ge(e, t, a) {
	let r = 1,
		s = t.length;
	for (; r > 0 && s < e.length; )
		(e.startsWith(t, s) ? r++ : e.startsWith(a, s) && r--, r > 0 && s++);
	return r === 0 ? s + a.length : -1;
}
function Ye(e) {
	const t = {},
		a = /(\w+)="(.*?)"/g;
	let r;
	for (; (r = a.exec(e)) !== null; ) t[r[1]] = r[2];
	return t;
}
function We(e) {
	const t = /^<details(\s+[^>]*)?>\n/,
		a = /^<summary>(.*?)<\/summary>\n/,
		r = t.exec(e);
	if (r) {
		const s = Ge(e, '<details', '</details>');
		if (s === -1) return;
		const o = e.slice(0, s),
			c = r[0],
			l = Ye(c);
		let n = o.slice(c.length, -10).trim(),
			h = '';
		const g = a.exec(n);
		return (
			g && ((h = g[1].trim()), (n = n.slice(g[0].length).trim())),
			{ type: 'details', raw: o, summary: h, text: n, attributes: l }
		);
	}
}
function Je(e) {
	return e.match(/^<details[\s>]/) ? 0 : -1;
}
function Ke(e) {
	return `<details ${
		e.attributes
			? Object.entries(e.attributes)
					.map(([a, r]) => `${a}="${r}"`)
					.join(' ')
			: ''
	}>
  ${e.summary ? `<summary>${e.summary}</summary>` : ''}
  ${e.text}
  </details>`;
}
function Ze() {
	return { name: 'details', level: 'block', start: Je, tokenizer: We, renderer: Ke };
}
function Xe(e = {}) {
	return { extensions: [Ze()] };
}
const Qe = [
		{ left: '$$', right: '$$', display: !0 },
		{ left: '$', right: '$', display: !1 },
		{ left: '\\pu{', right: '}', display: !1 },
		{ left: '\\ce{', right: '}', display: !1 },
		{ left: '\\(', right: '\\)', display: !1 },
		{ left: '\\[', right: '\\]', display: !0 },
		{ left: '\\begin{equation}', right: '\\end{equation}', display: !0 }
	],
	re =
		'\\s。，、､;；„“‘’“”（）「」『』［］《》【】‹›«»…⋯:：？！～⇒?!-\\/:-@\\[-`{-~\\p{Script=Han}\\p{Script=Hiragana}\\p{Script=Katakana}\\p{Script=Hangul}',
	ae = new RegExp(`[${re}]`, 'u'),
	X = [],
	de = [];
function fe(e) {
	return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function et(e) {
	e.forEach((r) => {
		const { left: s, right: o, display: c } = r,
			l = fe(s),
			n = fe(o);
		c
			? (X.push(`${l}(?!\\n)((?:\\\\[^]|[^\\\\])+?)(?!\\n)${n}`),
				de.push(`${l}\\n((?:\\\\[^]|[^\\\\])+?)\\n${n}`))
			: X.push(`${l}((?:\\\\[^]|[^\\\\])+?)${n}`);
	});
	const t = new RegExp(`^(${X.join('|')})(?=[${re}]|$)`, 'u'),
		a = new RegExp(`^(${de.join('|')})(?=[${re}]|$)`, 'u');
	return { inlineRule: t, blockRule: a };
}
const { inlineRule: tt, blockRule: rt } = et(Qe),
	at = (e, t) => t >= e.length || ae.test(e.charAt(t)),
	st = (e, t) => /^(?:[ \t]*\r?\n|$)/.test(e.slice(t)),
	se = (e, t) =>
		t >= e.length - 1
			? -1
			: e[t] === '\\'
				? se(e, t + 2)
				: e[t] === '$' && e[t + 1] === '$'
					? t
					: se(e, t + 1),
	nt = (e, t, a = !1) => {
		if (!e.startsWith('$$')) return;
		const r = se(e, 2);
		if (r === -1) return;
		const s = e.slice(0, r + 2),
			o = s.slice(2, -2),
			c = r + 2;
		return [() => o.trim().length > 0, () => at(e, c), () => !a || st(e, c)].every((n) => n())
			? { type: t, raw: s, text: o, displayMode: !0 }
			: void 0;
	};
function ot(e = {}) {
	return { extensions: [it(), ct()] };
}
function Fe(e, t) {
	for (let a = 0; a < e.length; a++) {
		const r = e.charCodeAt(a);
		if (r === 36) {
			if (t && e.charAt(a + 1) !== '$') continue;
			if (a === 0 || ae.test(e.charAt(a - 1))) return a;
		} else if (r === 92) {
			const s = e.charAt(a + 1);
			if (t) {
				if (s !== '[' && s !== 'b') continue;
			} else if (s !== '(' && s !== 'c' && s !== 'p') continue;
			if (a === 0 || ae.test(e.charAt(a - 1))) return a;
		}
	}
}
function De(e, t, a) {
	if (e.startsWith('$$')) {
		const c = nt(e, a ? 'blockKatex' : 'inlineKatex', a);
		if (c) return c;
	}
	const r = a ? rt : tt,
		s = a ? 'blockKatex' : 'inlineKatex',
		o = e.match(r);
	if (o) {
		const c = o
			.slice(2)
			.filter((l) => l)
			.find((l) => l.trim());
		return { type: s, raw: o[0], text: c, displayMode: a };
	}
}
function it(e) {
	return {
		name: 'inlineKatex',
		level: 'inline',
		start(t) {
			return Fe(t, !1);
		},
		tokenizer(t, a) {
			return De(t, a, !1);
		},
		renderer(t) {
			return `${(t == null ? void 0 : t.text) ?? ''}`;
		}
	};
}
function ct(e) {
	return {
		name: 'blockKatex',
		level: 'block',
		start(t) {
			return Fe(t, !0);
		},
		tokenizer(t, a) {
			return De(t, a, !0);
		},
		renderer(t) {
			return `${(t == null ? void 0 : t.text) ?? ''}`;
		}
	};
}
var C = function () {
		return (
			(C =
				Object.assign ||
				function (e) {
					for (var t, a = 1, r = arguments.length; a < r; a++) {
						t = arguments[a];
						for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
					}
					return e;
				}),
			C.apply(this, arguments)
		);
	},
	lt = '~',
	ut = '~~';
function oe(e, t) {
	for (var a = {}, r = {}, s = e.split(ut), o = !1, c = 0; s.length > c; c++) {
		for (var l = s[c].split(lt), n = 0; n < l.length; n += 2) {
			var h = l[n],
				g = l[n + 1],
				x = '&' + h + ';';
			((a[x] = g), o && (a['&' + h] = g), (r[g] = x));
		}
		o = !0;
	}
	return t
		? { entities: C(C({}, a), t.entities), characters: C(C({}, r), t.characters) }
		: { entities: a, characters: r };
}
var Q = {
		xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
		html4:
			/&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
		html5:
			/&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
	},
	_ = {};
_.xml = oe(`lt~<~gt~>~quot~"~apos~'~amp~&`);
_.html4 = oe(
	`apos~'~OElig~Œ~oelig~œ~Scaron~Š~scaron~š~Yuml~Ÿ~circ~ˆ~tilde~˜~ensp~ ~emsp~ ~thinsp~ ~zwnj~‌~zwj~‍~lrm~‎~rlm~‏~ndash~–~mdash~—~lsquo~‘~rsquo~’~sbquo~‚~ldquo~“~rdquo~”~bdquo~„~dagger~†~Dagger~‡~permil~‰~lsaquo~‹~rsaquo~›~euro~€~fnof~ƒ~Alpha~Α~Beta~Β~Gamma~Γ~Delta~Δ~Epsilon~Ε~Zeta~Ζ~Eta~Η~Theta~Θ~Iota~Ι~Kappa~Κ~Lambda~Λ~Mu~Μ~Nu~Ν~Xi~Ξ~Omicron~Ο~Pi~Π~Rho~Ρ~Sigma~Σ~Tau~Τ~Upsilon~Υ~Phi~Φ~Chi~Χ~Psi~Ψ~Omega~Ω~alpha~α~beta~β~gamma~γ~delta~δ~epsilon~ε~zeta~ζ~eta~η~theta~θ~iota~ι~kappa~κ~lambda~λ~mu~μ~nu~ν~xi~ξ~omicron~ο~pi~π~rho~ρ~sigmaf~ς~sigma~σ~tau~τ~upsilon~υ~phi~φ~chi~χ~psi~ψ~omega~ω~thetasym~ϑ~upsih~ϒ~piv~ϖ~bull~•~hellip~…~prime~′~Prime~″~oline~‾~frasl~⁄~weierp~℘~image~ℑ~real~ℜ~trade~™~alefsym~ℵ~larr~←~uarr~↑~rarr~→~darr~↓~harr~↔~crarr~↵~lArr~⇐~uArr~⇑~rArr~⇒~dArr~⇓~hArr~⇔~forall~∀~part~∂~exist~∃~empty~∅~nabla~∇~isin~∈~notin~∉~ni~∋~prod~∏~sum~∑~minus~−~lowast~∗~radic~√~prop~∝~infin~∞~ang~∠~and~∧~or~∨~cap~∩~cup~∪~int~∫~there4~∴~sim~∼~cong~≅~asymp~≈~ne~≠~equiv~≡~le~≤~ge~≥~sub~⊂~sup~⊃~nsub~⊄~sube~⊆~supe~⊇~oplus~⊕~otimes~⊗~perp~⊥~sdot~⋅~lceil~⌈~rceil~⌉~lfloor~⌊~rfloor~⌋~lang~〈~rang~〉~loz~◊~spades~♠~clubs~♣~hearts~♥~diams~♦~~nbsp~ ~iexcl~¡~cent~¢~pound~£~curren~¤~yen~¥~brvbar~¦~sect~§~uml~¨~copy~©~ordf~ª~laquo~«~not~¬~shy~­~reg~®~macr~¯~deg~°~plusmn~±~sup2~²~sup3~³~acute~´~micro~µ~para~¶~middot~·~cedil~¸~sup1~¹~ordm~º~raquo~»~frac14~¼~frac12~½~frac34~¾~iquest~¿~Agrave~À~Aacute~Á~Acirc~Â~Atilde~Ã~Auml~Ä~Aring~Å~AElig~Æ~Ccedil~Ç~Egrave~È~Eacute~É~Ecirc~Ê~Euml~Ë~Igrave~Ì~Iacute~Í~Icirc~Î~Iuml~Ï~ETH~Ð~Ntilde~Ñ~Ograve~Ò~Oacute~Ó~Ocirc~Ô~Otilde~Õ~Ouml~Ö~times~×~Oslash~Ø~Ugrave~Ù~Uacute~Ú~Ucirc~Û~Uuml~Ü~Yacute~Ý~THORN~Þ~szlig~ß~agrave~à~aacute~á~acirc~â~atilde~ã~auml~ä~aring~å~aelig~æ~ccedil~ç~egrave~è~eacute~é~ecirc~ê~euml~ë~igrave~ì~iacute~í~icirc~î~iuml~ï~eth~ð~ntilde~ñ~ograve~ò~oacute~ó~ocirc~ô~otilde~õ~ouml~ö~divide~÷~oslash~ø~ugrave~ù~uacute~ú~ucirc~û~uuml~ü~yacute~ý~thorn~þ~yuml~ÿ~quot~"~amp~&~lt~<~gt~>`
);
_.html5 = oe(
	'Abreve~Ă~Acy~А~Afr~𝔄~Amacr~Ā~And~⩓~Aogon~Ą~Aopf~𝔸~ApplyFunction~⁡~Ascr~𝒜~Assign~≔~Backslash~∖~Barv~⫧~Barwed~⌆~Bcy~Б~Because~∵~Bernoullis~ℬ~Bfr~𝔅~Bopf~𝔹~Breve~˘~Bscr~ℬ~Bumpeq~≎~CHcy~Ч~Cacute~Ć~Cap~⋒~CapitalDifferentialD~ⅅ~Cayleys~ℭ~Ccaron~Č~Ccirc~Ĉ~Cconint~∰~Cdot~Ċ~Cedilla~¸~CenterDot~·~Cfr~ℭ~CircleDot~⊙~CircleMinus~⊖~CirclePlus~⊕~CircleTimes~⊗~ClockwiseContourIntegral~∲~CloseCurlyDoubleQuote~”~CloseCurlyQuote~’~Colon~∷~Colone~⩴~Congruent~≡~Conint~∯~ContourIntegral~∮~Copf~ℂ~Coproduct~∐~CounterClockwiseContourIntegral~∳~Cross~⨯~Cscr~𝒞~Cup~⋓~CupCap~≍~DD~ⅅ~DDotrahd~⤑~DJcy~Ђ~DScy~Ѕ~DZcy~Џ~Darr~↡~Dashv~⫤~Dcaron~Ď~Dcy~Д~Del~∇~Dfr~𝔇~DiacriticalAcute~´~DiacriticalDot~˙~DiacriticalDoubleAcute~˝~DiacriticalGrave~`~DiacriticalTilde~˜~Diamond~⋄~DifferentialD~ⅆ~Dopf~𝔻~Dot~¨~DotDot~⃜~DotEqual~≐~DoubleContourIntegral~∯~DoubleDot~¨~DoubleDownArrow~⇓~DoubleLeftArrow~⇐~DoubleLeftRightArrow~⇔~DoubleLeftTee~⫤~DoubleLongLeftArrow~⟸~DoubleLongLeftRightArrow~⟺~DoubleLongRightArrow~⟹~DoubleRightArrow~⇒~DoubleRightTee~⊨~DoubleUpArrow~⇑~DoubleUpDownArrow~⇕~DoubleVerticalBar~∥~DownArrow~↓~DownArrowBar~⤓~DownArrowUpArrow~⇵~DownBreve~̑~DownLeftRightVector~⥐~DownLeftTeeVector~⥞~DownLeftVector~↽~DownLeftVectorBar~⥖~DownRightTeeVector~⥟~DownRightVector~⇁~DownRightVectorBar~⥗~DownTee~⊤~DownTeeArrow~↧~Downarrow~⇓~Dscr~𝒟~Dstrok~Đ~ENG~Ŋ~Ecaron~Ě~Ecy~Э~Edot~Ė~Efr~𝔈~Element~∈~Emacr~Ē~EmptySmallSquare~◻~EmptyVerySmallSquare~▫~Eogon~Ę~Eopf~𝔼~Equal~⩵~EqualTilde~≂~Equilibrium~⇌~Escr~ℰ~Esim~⩳~Exists~∃~ExponentialE~ⅇ~Fcy~Ф~Ffr~𝔉~FilledSmallSquare~◼~FilledVerySmallSquare~▪~Fopf~𝔽~ForAll~∀~Fouriertrf~ℱ~Fscr~ℱ~GJcy~Ѓ~Gammad~Ϝ~Gbreve~Ğ~Gcedil~Ģ~Gcirc~Ĝ~Gcy~Г~Gdot~Ġ~Gfr~𝔊~Gg~⋙~Gopf~𝔾~GreaterEqual~≥~GreaterEqualLess~⋛~GreaterFullEqual~≧~GreaterGreater~⪢~GreaterLess~≷~GreaterSlantEqual~⩾~GreaterTilde~≳~Gscr~𝒢~Gt~≫~HARDcy~Ъ~Hacek~ˇ~Hat~^~Hcirc~Ĥ~Hfr~ℌ~HilbertSpace~ℋ~Hopf~ℍ~HorizontalLine~─~Hscr~ℋ~Hstrok~Ħ~HumpDownHump~≎~HumpEqual~≏~IEcy~Е~IJlig~Ĳ~IOcy~Ё~Icy~И~Idot~İ~Ifr~ℑ~Im~ℑ~Imacr~Ī~ImaginaryI~ⅈ~Implies~⇒~Int~∬~Integral~∫~Intersection~⋂~InvisibleComma~⁣~InvisibleTimes~⁢~Iogon~Į~Iopf~𝕀~Iscr~ℐ~Itilde~Ĩ~Iukcy~І~Jcirc~Ĵ~Jcy~Й~Jfr~𝔍~Jopf~𝕁~Jscr~𝒥~Jsercy~Ј~Jukcy~Є~KHcy~Х~KJcy~Ќ~Kcedil~Ķ~Kcy~К~Kfr~𝔎~Kopf~𝕂~Kscr~𝒦~LJcy~Љ~Lacute~Ĺ~Lang~⟪~Laplacetrf~ℒ~Larr~↞~Lcaron~Ľ~Lcedil~Ļ~Lcy~Л~LeftAngleBracket~⟨~LeftArrow~←~LeftArrowBar~⇤~LeftArrowRightArrow~⇆~LeftCeiling~⌈~LeftDoubleBracket~⟦~LeftDownTeeVector~⥡~LeftDownVector~⇃~LeftDownVectorBar~⥙~LeftFloor~⌊~LeftRightArrow~↔~LeftRightVector~⥎~LeftTee~⊣~LeftTeeArrow~↤~LeftTeeVector~⥚~LeftTriangle~⊲~LeftTriangleBar~⧏~LeftTriangleEqual~⊴~LeftUpDownVector~⥑~LeftUpTeeVector~⥠~LeftUpVector~↿~LeftUpVectorBar~⥘~LeftVector~↼~LeftVectorBar~⥒~Leftarrow~⇐~Leftrightarrow~⇔~LessEqualGreater~⋚~LessFullEqual~≦~LessGreater~≶~LessLess~⪡~LessSlantEqual~⩽~LessTilde~≲~Lfr~𝔏~Ll~⋘~Lleftarrow~⇚~Lmidot~Ŀ~LongLeftArrow~⟵~LongLeftRightArrow~⟷~LongRightArrow~⟶~Longleftarrow~⟸~Longleftrightarrow~⟺~Longrightarrow~⟹~Lopf~𝕃~LowerLeftArrow~↙~LowerRightArrow~↘~Lscr~ℒ~Lsh~↰~Lstrok~Ł~Lt~≪~Map~⤅~Mcy~М~MediumSpace~ ~Mellintrf~ℳ~Mfr~𝔐~MinusPlus~∓~Mopf~𝕄~Mscr~ℳ~NJcy~Њ~Nacute~Ń~Ncaron~Ň~Ncedil~Ņ~Ncy~Н~NegativeMediumSpace~​~NegativeThickSpace~​~NegativeThinSpace~​~NegativeVeryThinSpace~​~NestedGreaterGreater~≫~NestedLessLess~≪~NewLine~\n~Nfr~𝔑~NoBreak~⁠~NonBreakingSpace~ ~Nopf~ℕ~Not~⫬~NotCongruent~≢~NotCupCap~≭~NotDoubleVerticalBar~∦~NotElement~∉~NotEqual~≠~NotEqualTilde~≂̸~NotExists~∄~NotGreater~≯~NotGreaterEqual~≱~NotGreaterFullEqual~≧̸~NotGreaterGreater~≫̸~NotGreaterLess~≹~NotGreaterSlantEqual~⩾̸~NotGreaterTilde~≵~NotHumpDownHump~≎̸~NotHumpEqual~≏̸~NotLeftTriangle~⋪~NotLeftTriangleBar~⧏̸~NotLeftTriangleEqual~⋬~NotLess~≮~NotLessEqual~≰~NotLessGreater~≸~NotLessLess~≪̸~NotLessSlantEqual~⩽̸~NotLessTilde~≴~NotNestedGreaterGreater~⪢̸~NotNestedLessLess~⪡̸~NotPrecedes~⊀~NotPrecedesEqual~⪯̸~NotPrecedesSlantEqual~⋠~NotReverseElement~∌~NotRightTriangle~⋫~NotRightTriangleBar~⧐̸~NotRightTriangleEqual~⋭~NotSquareSubset~⊏̸~NotSquareSubsetEqual~⋢~NotSquareSuperset~⊐̸~NotSquareSupersetEqual~⋣~NotSubset~⊂⃒~NotSubsetEqual~⊈~NotSucceeds~⊁~NotSucceedsEqual~⪰̸~NotSucceedsSlantEqual~⋡~NotSucceedsTilde~≿̸~NotSuperset~⊃⃒~NotSupersetEqual~⊉~NotTilde~≁~NotTildeEqual~≄~NotTildeFullEqual~≇~NotTildeTilde~≉~NotVerticalBar~∤~Nscr~𝒩~Ocy~О~Odblac~Ő~Ofr~𝔒~Omacr~Ō~Oopf~𝕆~OpenCurlyDoubleQuote~“~OpenCurlyQuote~‘~Or~⩔~Oscr~𝒪~Otimes~⨷~OverBar~‾~OverBrace~⏞~OverBracket~⎴~OverParenthesis~⏜~PartialD~∂~Pcy~П~Pfr~𝔓~PlusMinus~±~Poincareplane~ℌ~Popf~ℙ~Pr~⪻~Precedes~≺~PrecedesEqual~⪯~PrecedesSlantEqual~≼~PrecedesTilde~≾~Product~∏~Proportion~∷~Proportional~∝~Pscr~𝒫~Qfr~𝔔~Qopf~ℚ~Qscr~𝒬~RBarr~⤐~Racute~Ŕ~Rang~⟫~Rarr~↠~Rarrtl~⤖~Rcaron~Ř~Rcedil~Ŗ~Rcy~Р~Re~ℜ~ReverseElement~∋~ReverseEquilibrium~⇋~ReverseUpEquilibrium~⥯~Rfr~ℜ~RightAngleBracket~⟩~RightArrow~→~RightArrowBar~⇥~RightArrowLeftArrow~⇄~RightCeiling~⌉~RightDoubleBracket~⟧~RightDownTeeVector~⥝~RightDownVector~⇂~RightDownVectorBar~⥕~RightFloor~⌋~RightTee~⊢~RightTeeArrow~↦~RightTeeVector~⥛~RightTriangle~⊳~RightTriangleBar~⧐~RightTriangleEqual~⊵~RightUpDownVector~⥏~RightUpTeeVector~⥜~RightUpVector~↾~RightUpVectorBar~⥔~RightVector~⇀~RightVectorBar~⥓~Rightarrow~⇒~Ropf~ℝ~RoundImplies~⥰~Rrightarrow~⇛~Rscr~ℛ~Rsh~↱~RuleDelayed~⧴~SHCHcy~Щ~SHcy~Ш~SOFTcy~Ь~Sacute~Ś~Sc~⪼~Scedil~Ş~Scirc~Ŝ~Scy~С~Sfr~𝔖~ShortDownArrow~↓~ShortLeftArrow~←~ShortRightArrow~→~ShortUpArrow~↑~SmallCircle~∘~Sopf~𝕊~Sqrt~√~Square~□~SquareIntersection~⊓~SquareSubset~⊏~SquareSubsetEqual~⊑~SquareSuperset~⊐~SquareSupersetEqual~⊒~SquareUnion~⊔~Sscr~𝒮~Star~⋆~Sub~⋐~Subset~⋐~SubsetEqual~⊆~Succeeds~≻~SucceedsEqual~⪰~SucceedsSlantEqual~≽~SucceedsTilde~≿~SuchThat~∋~Sum~∑~Sup~⋑~Superset~⊃~SupersetEqual~⊇~Supset~⋑~TRADE~™~TSHcy~Ћ~TScy~Ц~Tab~	~Tcaron~Ť~Tcedil~Ţ~Tcy~Т~Tfr~𝔗~Therefore~∴~ThickSpace~  ~ThinSpace~ ~Tilde~∼~TildeEqual~≃~TildeFullEqual~≅~TildeTilde~≈~Topf~𝕋~TripleDot~⃛~Tscr~𝒯~Tstrok~Ŧ~Uarr~↟~Uarrocir~⥉~Ubrcy~Ў~Ubreve~Ŭ~Ucy~У~Udblac~Ű~Ufr~𝔘~Umacr~Ū~UnderBar~_~UnderBrace~⏟~UnderBracket~⎵~UnderParenthesis~⏝~Union~⋃~UnionPlus~⊎~Uogon~Ų~Uopf~𝕌~UpArrow~↑~UpArrowBar~⤒~UpArrowDownArrow~⇅~UpDownArrow~↕~UpEquilibrium~⥮~UpTee~⊥~UpTeeArrow~↥~Uparrow~⇑~Updownarrow~⇕~UpperLeftArrow~↖~UpperRightArrow~↗~Upsi~ϒ~Uring~Ů~Uscr~𝒰~Utilde~Ũ~VDash~⊫~Vbar~⫫~Vcy~В~Vdash~⊩~Vdashl~⫦~Vee~⋁~Verbar~‖~Vert~‖~VerticalBar~∣~VerticalLine~|~VerticalSeparator~❘~VerticalTilde~≀~VeryThinSpace~ ~Vfr~𝔙~Vopf~𝕍~Vscr~𝒱~Vvdash~⊪~Wcirc~Ŵ~Wedge~⋀~Wfr~𝔚~Wopf~𝕎~Wscr~𝒲~Xfr~𝔛~Xopf~𝕏~Xscr~𝒳~YAcy~Я~YIcy~Ї~YUcy~Ю~Ycirc~Ŷ~Ycy~Ы~Yfr~𝔜~Yopf~𝕐~Yscr~𝒴~ZHcy~Ж~Zacute~Ź~Zcaron~Ž~Zcy~З~Zdot~Ż~ZeroWidthSpace~​~Zfr~ℨ~Zopf~ℤ~Zscr~𝒵~abreve~ă~ac~∾~acE~∾̳~acd~∿~acy~а~af~⁡~afr~𝔞~aleph~ℵ~amacr~ā~amalg~⨿~andand~⩕~andd~⩜~andslope~⩘~andv~⩚~ange~⦤~angle~∠~angmsd~∡~angmsdaa~⦨~angmsdab~⦩~angmsdac~⦪~angmsdad~⦫~angmsdae~⦬~angmsdaf~⦭~angmsdag~⦮~angmsdah~⦯~angrt~∟~angrtvb~⊾~angrtvbd~⦝~angsph~∢~angst~Å~angzarr~⍼~aogon~ą~aopf~𝕒~ap~≈~apE~⩰~apacir~⩯~ape~≊~apid~≋~approx~≈~approxeq~≊~ascr~𝒶~ast~*~asympeq~≍~awconint~∳~awint~⨑~bNot~⫭~backcong~≌~backepsilon~϶~backprime~‵~backsim~∽~backsimeq~⋍~barvee~⊽~barwed~⌅~barwedge~⌅~bbrk~⎵~bbrktbrk~⎶~bcong~≌~bcy~б~becaus~∵~because~∵~bemptyv~⦰~bepsi~϶~bernou~ℬ~beth~ℶ~between~≬~bfr~𝔟~bigcap~⋂~bigcirc~◯~bigcup~⋃~bigodot~⨀~bigoplus~⨁~bigotimes~⨂~bigsqcup~⨆~bigstar~★~bigtriangledown~▽~bigtriangleup~△~biguplus~⨄~bigvee~⋁~bigwedge~⋀~bkarow~⤍~blacklozenge~⧫~blacksquare~▪~blacktriangle~▴~blacktriangledown~▾~blacktriangleleft~◂~blacktriangleright~▸~blank~␣~blk12~▒~blk14~░~blk34~▓~block~█~bne~=⃥~bnequiv~≡⃥~bnot~⌐~bopf~𝕓~bot~⊥~bottom~⊥~bowtie~⋈~boxDL~╗~boxDR~╔~boxDl~╖~boxDr~╓~boxH~═~boxHD~╦~boxHU~╩~boxHd~╤~boxHu~╧~boxUL~╝~boxUR~╚~boxUl~╜~boxUr~╙~boxV~║~boxVH~╬~boxVL~╣~boxVR~╠~boxVh~╫~boxVl~╢~boxVr~╟~boxbox~⧉~boxdL~╕~boxdR~╒~boxdl~┐~boxdr~┌~boxh~─~boxhD~╥~boxhU~╨~boxhd~┬~boxhu~┴~boxminus~⊟~boxplus~⊞~boxtimes~⊠~boxuL~╛~boxuR~╘~boxul~┘~boxur~└~boxv~│~boxvH~╪~boxvL~╡~boxvR~╞~boxvh~┼~boxvl~┤~boxvr~├~bprime~‵~breve~˘~bscr~𝒷~bsemi~⁏~bsim~∽~bsime~⋍~bsol~\\~bsolb~⧅~bsolhsub~⟈~bullet~•~bump~≎~bumpE~⪮~bumpe~≏~bumpeq~≏~cacute~ć~capand~⩄~capbrcup~⩉~capcap~⩋~capcup~⩇~capdot~⩀~caps~∩︀~caret~⁁~caron~ˇ~ccaps~⩍~ccaron~č~ccirc~ĉ~ccups~⩌~ccupssm~⩐~cdot~ċ~cemptyv~⦲~centerdot~·~cfr~𝔠~chcy~ч~check~✓~checkmark~✓~cir~○~cirE~⧃~circeq~≗~circlearrowleft~↺~circlearrowright~↻~circledR~®~circledS~Ⓢ~circledast~⊛~circledcirc~⊚~circleddash~⊝~cire~≗~cirfnint~⨐~cirmid~⫯~cirscir~⧂~clubsuit~♣~colon~:~colone~≔~coloneq~≔~comma~,~commat~@~comp~∁~compfn~∘~complement~∁~complexes~ℂ~congdot~⩭~conint~∮~copf~𝕔~coprod~∐~copysr~℗~cross~✗~cscr~𝒸~csub~⫏~csube~⫑~csup~⫐~csupe~⫒~ctdot~⋯~cudarrl~⤸~cudarrr~⤵~cuepr~⋞~cuesc~⋟~cularr~↶~cularrp~⤽~cupbrcap~⩈~cupcap~⩆~cupcup~⩊~cupdot~⊍~cupor~⩅~cups~∪︀~curarr~↷~curarrm~⤼~curlyeqprec~⋞~curlyeqsucc~⋟~curlyvee~⋎~curlywedge~⋏~curvearrowleft~↶~curvearrowright~↷~cuvee~⋎~cuwed~⋏~cwconint~∲~cwint~∱~cylcty~⌭~dHar~⥥~daleth~ℸ~dash~‐~dashv~⊣~dbkarow~⤏~dblac~˝~dcaron~ď~dcy~д~dd~ⅆ~ddagger~‡~ddarr~⇊~ddotseq~⩷~demptyv~⦱~dfisht~⥿~dfr~𝔡~dharl~⇃~dharr~⇂~diam~⋄~diamond~⋄~diamondsuit~♦~die~¨~digamma~ϝ~disin~⋲~div~÷~divideontimes~⋇~divonx~⋇~djcy~ђ~dlcorn~⌞~dlcrop~⌍~dollar~$~dopf~𝕕~dot~˙~doteq~≐~doteqdot~≑~dotminus~∸~dotplus~∔~dotsquare~⊡~doublebarwedge~⌆~downarrow~↓~downdownarrows~⇊~downharpoonleft~⇃~downharpoonright~⇂~drbkarow~⤐~drcorn~⌟~drcrop~⌌~dscr~𝒹~dscy~ѕ~dsol~⧶~dstrok~đ~dtdot~⋱~dtri~▿~dtrif~▾~duarr~⇵~duhar~⥯~dwangle~⦦~dzcy~џ~dzigrarr~⟿~eDDot~⩷~eDot~≑~easter~⩮~ecaron~ě~ecir~≖~ecolon~≕~ecy~э~edot~ė~ee~ⅇ~efDot~≒~efr~𝔢~eg~⪚~egs~⪖~egsdot~⪘~el~⪙~elinters~⏧~ell~ℓ~els~⪕~elsdot~⪗~emacr~ē~emptyset~∅~emptyv~∅~emsp13~ ~emsp14~ ~eng~ŋ~eogon~ę~eopf~𝕖~epar~⋕~eparsl~⧣~eplus~⩱~epsi~ε~epsiv~ϵ~eqcirc~≖~eqcolon~≕~eqsim~≂~eqslantgtr~⪖~eqslantless~⪕~equals~=~equest~≟~equivDD~⩸~eqvparsl~⧥~erDot~≓~erarr~⥱~escr~ℯ~esdot~≐~esim~≂~excl~!~expectation~ℰ~exponentiale~ⅇ~fallingdotseq~≒~fcy~ф~female~♀~ffilig~ﬃ~fflig~ﬀ~ffllig~ﬄ~ffr~𝔣~filig~ﬁ~fjlig~fj~flat~♭~fllig~ﬂ~fltns~▱~fopf~𝕗~fork~⋔~forkv~⫙~fpartint~⨍~frac13~⅓~frac15~⅕~frac16~⅙~frac18~⅛~frac23~⅔~frac25~⅖~frac35~⅗~frac38~⅜~frac45~⅘~frac56~⅚~frac58~⅝~frac78~⅞~frown~⌢~fscr~𝒻~gE~≧~gEl~⪌~gacute~ǵ~gammad~ϝ~gap~⪆~gbreve~ğ~gcirc~ĝ~gcy~г~gdot~ġ~gel~⋛~geq~≥~geqq~≧~geqslant~⩾~ges~⩾~gescc~⪩~gesdot~⪀~gesdoto~⪂~gesdotol~⪄~gesl~⋛︀~gesles~⪔~gfr~𝔤~gg~≫~ggg~⋙~gimel~ℷ~gjcy~ѓ~gl~≷~glE~⪒~gla~⪥~glj~⪤~gnE~≩~gnap~⪊~gnapprox~⪊~gne~⪈~gneq~⪈~gneqq~≩~gnsim~⋧~gopf~𝕘~grave~`~gscr~ℊ~gsim~≳~gsime~⪎~gsiml~⪐~gtcc~⪧~gtcir~⩺~gtdot~⋗~gtlPar~⦕~gtquest~⩼~gtrapprox~⪆~gtrarr~⥸~gtrdot~⋗~gtreqless~⋛~gtreqqless~⪌~gtrless~≷~gtrsim~≳~gvertneqq~≩︀~gvnE~≩︀~hairsp~ ~half~½~hamilt~ℋ~hardcy~ъ~harrcir~⥈~harrw~↭~hbar~ℏ~hcirc~ĥ~heartsuit~♥~hercon~⊹~hfr~𝔥~hksearow~⤥~hkswarow~⤦~hoarr~⇿~homtht~∻~hookleftarrow~↩~hookrightarrow~↪~hopf~𝕙~horbar~―~hscr~𝒽~hslash~ℏ~hstrok~ħ~hybull~⁃~hyphen~‐~ic~⁣~icy~и~iecy~е~iff~⇔~ifr~𝔦~ii~ⅈ~iiiint~⨌~iiint~∭~iinfin~⧜~iiota~℩~ijlig~ĳ~imacr~ī~imagline~ℐ~imagpart~ℑ~imath~ı~imof~⊷~imped~Ƶ~in~∈~incare~℅~infintie~⧝~inodot~ı~intcal~⊺~integers~ℤ~intercal~⊺~intlarhk~⨗~intprod~⨼~iocy~ё~iogon~į~iopf~𝕚~iprod~⨼~iscr~𝒾~isinE~⋹~isindot~⋵~isins~⋴~isinsv~⋳~isinv~∈~it~⁢~itilde~ĩ~iukcy~і~jcirc~ĵ~jcy~й~jfr~𝔧~jmath~ȷ~jopf~𝕛~jscr~𝒿~jsercy~ј~jukcy~є~kappav~ϰ~kcedil~ķ~kcy~к~kfr~𝔨~kgreen~ĸ~khcy~х~kjcy~ќ~kopf~𝕜~kscr~𝓀~lAarr~⇚~lAtail~⤛~lBarr~⤎~lE~≦~lEg~⪋~lHar~⥢~lacute~ĺ~laemptyv~⦴~lagran~ℒ~langd~⦑~langle~⟨~lap~⪅~larrb~⇤~larrbfs~⤟~larrfs~⤝~larrhk~↩~larrlp~↫~larrpl~⤹~larrsim~⥳~larrtl~↢~lat~⪫~latail~⤙~late~⪭~lates~⪭︀~lbarr~⤌~lbbrk~❲~lbrace~{~lbrack~[~lbrke~⦋~lbrksld~⦏~lbrkslu~⦍~lcaron~ľ~lcedil~ļ~lcub~{~lcy~л~ldca~⤶~ldquor~„~ldrdhar~⥧~ldrushar~⥋~ldsh~↲~leftarrow~←~leftarrowtail~↢~leftharpoondown~↽~leftharpoonup~↼~leftleftarrows~⇇~leftrightarrow~↔~leftrightarrows~⇆~leftrightharpoons~⇋~leftrightsquigarrow~↭~leftthreetimes~⋋~leg~⋚~leq~≤~leqq~≦~leqslant~⩽~les~⩽~lescc~⪨~lesdot~⩿~lesdoto~⪁~lesdotor~⪃~lesg~⋚︀~lesges~⪓~lessapprox~⪅~lessdot~⋖~lesseqgtr~⋚~lesseqqgtr~⪋~lessgtr~≶~lesssim~≲~lfisht~⥼~lfr~𝔩~lg~≶~lgE~⪑~lhard~↽~lharu~↼~lharul~⥪~lhblk~▄~ljcy~љ~ll~≪~llarr~⇇~llcorner~⌞~llhard~⥫~lltri~◺~lmidot~ŀ~lmoust~⎰~lmoustache~⎰~lnE~≨~lnap~⪉~lnapprox~⪉~lne~⪇~lneq~⪇~lneqq~≨~lnsim~⋦~loang~⟬~loarr~⇽~lobrk~⟦~longleftarrow~⟵~longleftrightarrow~⟷~longmapsto~⟼~longrightarrow~⟶~looparrowleft~↫~looparrowright~↬~lopar~⦅~lopf~𝕝~loplus~⨭~lotimes~⨴~lowbar~_~lozenge~◊~lozf~⧫~lpar~(~lparlt~⦓~lrarr~⇆~lrcorner~⌟~lrhar~⇋~lrhard~⥭~lrtri~⊿~lscr~𝓁~lsh~↰~lsim~≲~lsime~⪍~lsimg~⪏~lsqb~[~lsquor~‚~lstrok~ł~ltcc~⪦~ltcir~⩹~ltdot~⋖~lthree~⋋~ltimes~⋉~ltlarr~⥶~ltquest~⩻~ltrPar~⦖~ltri~◃~ltrie~⊴~ltrif~◂~lurdshar~⥊~luruhar~⥦~lvertneqq~≨︀~lvnE~≨︀~mDDot~∺~male~♂~malt~✠~maltese~✠~map~↦~mapsto~↦~mapstodown~↧~mapstoleft~↤~mapstoup~↥~marker~▮~mcomma~⨩~mcy~м~measuredangle~∡~mfr~𝔪~mho~℧~mid~∣~midast~*~midcir~⫰~minusb~⊟~minusd~∸~minusdu~⨪~mlcp~⫛~mldr~…~mnplus~∓~models~⊧~mopf~𝕞~mp~∓~mscr~𝓂~mstpos~∾~multimap~⊸~mumap~⊸~nGg~⋙̸~nGt~≫⃒~nGtv~≫̸~nLeftarrow~⇍~nLeftrightarrow~⇎~nLl~⋘̸~nLt~≪⃒~nLtv~≪̸~nRightarrow~⇏~nVDash~⊯~nVdash~⊮~nacute~ń~nang~∠⃒~nap~≉~napE~⩰̸~napid~≋̸~napos~ŉ~napprox~≉~natur~♮~natural~♮~naturals~ℕ~nbump~≎̸~nbumpe~≏̸~ncap~⩃~ncaron~ň~ncedil~ņ~ncong~≇~ncongdot~⩭̸~ncup~⩂~ncy~н~neArr~⇗~nearhk~⤤~nearr~↗~nearrow~↗~nedot~≐̸~nequiv~≢~nesear~⤨~nesim~≂̸~nexist~∄~nexists~∄~nfr~𝔫~ngE~≧̸~nge~≱~ngeq~≱~ngeqq~≧̸~ngeqslant~⩾̸~nges~⩾̸~ngsim~≵~ngt~≯~ngtr~≯~nhArr~⇎~nharr~↮~nhpar~⫲~nis~⋼~nisd~⋺~niv~∋~njcy~њ~nlArr~⇍~nlE~≦̸~nlarr~↚~nldr~‥~nle~≰~nleftarrow~↚~nleftrightarrow~↮~nleq~≰~nleqq~≦̸~nleqslant~⩽̸~nles~⩽̸~nless~≮~nlsim~≴~nlt~≮~nltri~⋪~nltrie~⋬~nmid~∤~nopf~𝕟~notinE~⋹̸~notindot~⋵̸~notinva~∉~notinvb~⋷~notinvc~⋶~notni~∌~notniva~∌~notnivb~⋾~notnivc~⋽~npar~∦~nparallel~∦~nparsl~⫽⃥~npart~∂̸~npolint~⨔~npr~⊀~nprcue~⋠~npre~⪯̸~nprec~⊀~npreceq~⪯̸~nrArr~⇏~nrarr~↛~nrarrc~⤳̸~nrarrw~↝̸~nrightarrow~↛~nrtri~⋫~nrtrie~⋭~nsc~⊁~nsccue~⋡~nsce~⪰̸~nscr~𝓃~nshortmid~∤~nshortparallel~∦~nsim~≁~nsime~≄~nsimeq~≄~nsmid~∤~nspar~∦~nsqsube~⋢~nsqsupe~⋣~nsubE~⫅̸~nsube~⊈~nsubset~⊂⃒~nsubseteq~⊈~nsubseteqq~⫅̸~nsucc~⊁~nsucceq~⪰̸~nsup~⊅~nsupE~⫆̸~nsupe~⊉~nsupset~⊃⃒~nsupseteq~⊉~nsupseteqq~⫆̸~ntgl~≹~ntlg~≸~ntriangleleft~⋪~ntrianglelefteq~⋬~ntriangleright~⋫~ntrianglerighteq~⋭~num~#~numero~№~numsp~ ~nvDash~⊭~nvHarr~⤄~nvap~≍⃒~nvdash~⊬~nvge~≥⃒~nvgt~>⃒~nvinfin~⧞~nvlArr~⤂~nvle~≤⃒~nvlt~<⃒~nvltrie~⊴⃒~nvrArr~⤃~nvrtrie~⊵⃒~nvsim~∼⃒~nwArr~⇖~nwarhk~⤣~nwarr~↖~nwarrow~↖~nwnear~⤧~oS~Ⓢ~oast~⊛~ocir~⊚~ocy~о~odash~⊝~odblac~ő~odiv~⨸~odot~⊙~odsold~⦼~ofcir~⦿~ofr~𝔬~ogon~˛~ogt~⧁~ohbar~⦵~ohm~Ω~oint~∮~olarr~↺~olcir~⦾~olcross~⦻~olt~⧀~omacr~ō~omid~⦶~ominus~⊖~oopf~𝕠~opar~⦷~operp~⦹~orarr~↻~ord~⩝~order~ℴ~orderof~ℴ~origof~⊶~oror~⩖~orslope~⩗~orv~⩛~oscr~ℴ~osol~⊘~otimesas~⨶~ovbar~⌽~par~∥~parallel~∥~parsim~⫳~parsl~⫽~pcy~п~percnt~%~period~.~pertenk~‱~pfr~𝔭~phiv~ϕ~phmmat~ℳ~phone~☎~pitchfork~⋔~planck~ℏ~planckh~ℎ~plankv~ℏ~plus~+~plusacir~⨣~plusb~⊞~pluscir~⨢~plusdo~∔~plusdu~⨥~pluse~⩲~plussim~⨦~plustwo~⨧~pm~±~pointint~⨕~popf~𝕡~pr~≺~prE~⪳~prap~⪷~prcue~≼~pre~⪯~prec~≺~precapprox~⪷~preccurlyeq~≼~preceq~⪯~precnapprox~⪹~precneqq~⪵~precnsim~⋨~precsim~≾~primes~ℙ~prnE~⪵~prnap~⪹~prnsim~⋨~profalar~⌮~profline~⌒~profsurf~⌓~propto~∝~prsim~≾~prurel~⊰~pscr~𝓅~puncsp~ ~qfr~𝔮~qint~⨌~qopf~𝕢~qprime~⁗~qscr~𝓆~quaternions~ℍ~quatint~⨖~quest~?~questeq~≟~rAarr~⇛~rAtail~⤜~rBarr~⤏~rHar~⥤~race~∽̱~racute~ŕ~raemptyv~⦳~rangd~⦒~range~⦥~rangle~⟩~rarrap~⥵~rarrb~⇥~rarrbfs~⤠~rarrc~⤳~rarrfs~⤞~rarrhk~↪~rarrlp~↬~rarrpl~⥅~rarrsim~⥴~rarrtl~↣~rarrw~↝~ratail~⤚~ratio~∶~rationals~ℚ~rbarr~⤍~rbbrk~❳~rbrace~}~rbrack~]~rbrke~⦌~rbrksld~⦎~rbrkslu~⦐~rcaron~ř~rcedil~ŗ~rcub~}~rcy~р~rdca~⤷~rdldhar~⥩~rdquor~”~rdsh~↳~realine~ℛ~realpart~ℜ~reals~ℝ~rect~▭~rfisht~⥽~rfr~𝔯~rhard~⇁~rharu~⇀~rharul~⥬~rhov~ϱ~rightarrow~→~rightarrowtail~↣~rightharpoondown~⇁~rightharpoonup~⇀~rightleftarrows~⇄~rightleftharpoons~⇌~rightrightarrows~⇉~rightsquigarrow~↝~rightthreetimes~⋌~ring~˚~risingdotseq~≓~rlarr~⇄~rlhar~⇌~rmoust~⎱~rmoustache~⎱~rnmid~⫮~roang~⟭~roarr~⇾~robrk~⟧~ropar~⦆~ropf~𝕣~roplus~⨮~rotimes~⨵~rpar~)~rpargt~⦔~rppolint~⨒~rrarr~⇉~rscr~𝓇~rsh~↱~rsqb~]~rsquor~’~rthree~⋌~rtimes~⋊~rtri~▹~rtrie~⊵~rtrif~▸~rtriltri~⧎~ruluhar~⥨~rx~℞~sacute~ś~sc~≻~scE~⪴~scap~⪸~sccue~≽~sce~⪰~scedil~ş~scirc~ŝ~scnE~⪶~scnap~⪺~scnsim~⋩~scpolint~⨓~scsim~≿~scy~с~sdotb~⊡~sdote~⩦~seArr~⇘~searhk~⤥~searr~↘~searrow~↘~semi~;~seswar~⤩~setminus~∖~setmn~∖~sext~✶~sfr~𝔰~sfrown~⌢~sharp~♯~shchcy~щ~shcy~ш~shortmid~∣~shortparallel~∥~sigmav~ς~simdot~⩪~sime~≃~simeq~≃~simg~⪞~simgE~⪠~siml~⪝~simlE~⪟~simne~≆~simplus~⨤~simrarr~⥲~slarr~←~smallsetminus~∖~smashp~⨳~smeparsl~⧤~smid~∣~smile~⌣~smt~⪪~smte~⪬~smtes~⪬︀~softcy~ь~sol~/~solb~⧄~solbar~⌿~sopf~𝕤~spadesuit~♠~spar~∥~sqcap~⊓~sqcaps~⊓︀~sqcup~⊔~sqcups~⊔︀~sqsub~⊏~sqsube~⊑~sqsubset~⊏~sqsubseteq~⊑~sqsup~⊐~sqsupe~⊒~sqsupset~⊐~sqsupseteq~⊒~squ~□~square~□~squarf~▪~squf~▪~srarr~→~sscr~𝓈~ssetmn~∖~ssmile~⌣~sstarf~⋆~star~☆~starf~★~straightepsilon~ϵ~straightphi~ϕ~strns~¯~subE~⫅~subdot~⪽~subedot~⫃~submult~⫁~subnE~⫋~subne~⊊~subplus~⪿~subrarr~⥹~subset~⊂~subseteq~⊆~subseteqq~⫅~subsetneq~⊊~subsetneqq~⫋~subsim~⫇~subsub~⫕~subsup~⫓~succ~≻~succapprox~⪸~succcurlyeq~≽~succeq~⪰~succnapprox~⪺~succneqq~⪶~succnsim~⋩~succsim~≿~sung~♪~supE~⫆~supdot~⪾~supdsub~⫘~supedot~⫄~suphsol~⟉~suphsub~⫗~suplarr~⥻~supmult~⫂~supnE~⫌~supne~⊋~supplus~⫀~supset~⊃~supseteq~⊇~supseteqq~⫆~supsetneq~⊋~supsetneqq~⫌~supsim~⫈~supsub~⫔~supsup~⫖~swArr~⇙~swarhk~⤦~swarr~↙~swarrow~↙~swnwar~⤪~target~⌖~tbrk~⎴~tcaron~ť~tcedil~ţ~tcy~т~tdot~⃛~telrec~⌕~tfr~𝔱~therefore~∴~thetav~ϑ~thickapprox~≈~thicksim~∼~thkap~≈~thksim~∼~timesb~⊠~timesbar~⨱~timesd~⨰~tint~∭~toea~⤨~top~⊤~topbot~⌶~topcir~⫱~topf~𝕥~topfork~⫚~tosa~⤩~tprime~‴~triangle~▵~triangledown~▿~triangleleft~◃~trianglelefteq~⊴~triangleq~≜~triangleright~▹~trianglerighteq~⊵~tridot~◬~trie~≜~triminus~⨺~triplus~⨹~trisb~⧍~tritime~⨻~trpezium~⏢~tscr~𝓉~tscy~ц~tshcy~ћ~tstrok~ŧ~twixt~≬~twoheadleftarrow~↞~twoheadrightarrow~↠~uHar~⥣~ubrcy~ў~ubreve~ŭ~ucy~у~udarr~⇅~udblac~ű~udhar~⥮~ufisht~⥾~ufr~𝔲~uharl~↿~uharr~↾~uhblk~▀~ulcorn~⌜~ulcorner~⌜~ulcrop~⌏~ultri~◸~umacr~ū~uogon~ų~uopf~𝕦~uparrow~↑~updownarrow~↕~upharpoonleft~↿~upharpoonright~↾~uplus~⊎~upsi~υ~upuparrows~⇈~urcorn~⌝~urcorner~⌝~urcrop~⌎~uring~ů~urtri~◹~uscr~𝓊~utdot~⋰~utilde~ũ~utri~▵~utrif~▴~uuarr~⇈~uwangle~⦧~vArr~⇕~vBar~⫨~vBarv~⫩~vDash~⊨~vangrt~⦜~varepsilon~ϵ~varkappa~ϰ~varnothing~∅~varphi~ϕ~varpi~ϖ~varpropto~∝~varr~↕~varrho~ϱ~varsigma~ς~varsubsetneq~⊊︀~varsubsetneqq~⫋︀~varsupsetneq~⊋︀~varsupsetneqq~⫌︀~vartheta~ϑ~vartriangleleft~⊲~vartriangleright~⊳~vcy~в~vdash~⊢~vee~∨~veebar~⊻~veeeq~≚~vellip~⋮~verbar~|~vert~|~vfr~𝔳~vltri~⊲~vnsub~⊂⃒~vnsup~⊃⃒~vopf~𝕧~vprop~∝~vrtri~⊳~vscr~𝓋~vsubnE~⫋︀~vsubne~⊊︀~vsupnE~⫌︀~vsupne~⊋︀~vzigzag~⦚~wcirc~ŵ~wedbar~⩟~wedge~∧~wedgeq~≙~wfr~𝔴~wopf~𝕨~wp~℘~wr~≀~wreath~≀~wscr~𝓌~xcap~⋂~xcirc~◯~xcup~⋃~xdtri~▽~xfr~𝔵~xhArr~⟺~xharr~⟷~xlArr~⟸~xlarr~⟵~xmap~⟼~xnis~⋻~xodot~⨀~xopf~𝕩~xoplus~⨁~xotime~⨂~xrArr~⟹~xrarr~⟶~xscr~𝓍~xsqcup~⨆~xuplus~⨄~xutri~△~xvee~⋁~xwedge~⋀~yacy~я~ycirc~ŷ~ycy~ы~yfr~𝔶~yicy~ї~yopf~𝕪~yscr~𝓎~yucy~ю~zacute~ź~zcaron~ž~zcy~з~zdot~ż~zeetrf~ℨ~zfr~𝔷~zhcy~ж~zigrarr~⇝~zopf~𝕫~zscr~𝓏~~AMP~&~COPY~©~GT~>~LT~<~QUOT~"~REG~®',
	_.html4
);
var pt = {
		0: 65533,
		128: 8364,
		130: 8218,
		131: 402,
		132: 8222,
		133: 8230,
		134: 8224,
		135: 8225,
		136: 710,
		137: 8240,
		138: 352,
		139: 8249,
		140: 338,
		142: 381,
		145: 8216,
		146: 8217,
		147: 8220,
		148: 8221,
		149: 8226,
		150: 8211,
		151: 8212,
		152: 732,
		153: 8482,
		154: 353,
		155: 8250,
		156: 339,
		158: 382,
		159: 376
	},
	dt =
		String.fromCodePoint ||
		function (e) {
			return String.fromCharCode(
				Math.floor((e - 65536) / 1024) + 55296,
				((e - 65536) % 1024) + 56320
			);
		},
	U = function () {
		return (
			(U =
				Object.assign ||
				function (e) {
					for (var t, a = 1, r = arguments.length; a < r; a++) {
						t = arguments[a];
						for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
					}
					return e;
				}),
			U.apply(this, arguments)
		);
	},
	ft = U(U({}, _), { all: _.html5 }),
	ht = { scope: 'body', level: 'all' },
	ee = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g,
	te = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g,
	he = {
		xml: { strict: ee, attribute: te, body: Q.xml },
		html4: { strict: ee, attribute: te, body: Q.html4 },
		html5: { strict: ee, attribute: te, body: Q.html5 }
	},
	gt = U(U({}, he), { all: he.html5 }),
	Se = String.fromCharCode,
	mt = Se(65533);
function bt(e, t, a, r) {
	var s = e,
		o = e[e.length - 1];
	if (a && o === '=') s = e;
	else if (r && o !== ';') s = e;
	else {
		var c = t[e];
		if (c) s = c;
		else if (e[0] === '&' && e[1] === '#') {
			var l = e[2],
				n = l == 'x' || l == 'X' ? parseInt(e.substr(3), 16) : parseInt(e.substr(2));
			s = n >= 1114111 ? mt : n > 65535 ? dt(n) : Se(pt[n] || n);
		}
	}
	return s;
}
function xt(e, t) {
	var a = t === void 0 ? ht : t,
		r = a.level,
		s = r === void 0 ? 'all' : r,
		o = a.scope,
		c = o === void 0 ? (s === 'xml' ? 'strict' : 'body') : o;
	if (!e) return '';
	var l = gt[s][c],
		n = ft[s].entities,
		h = c === 'attribute',
		g = c === 'strict';
	return e.replace(l, function (x) {
		return bt(x, n, h, g);
	});
}
B.extend(Ne);
B.extend(Ve);
B.extend(He);
B.extend(Ce);
const Gt = (e) =>
	new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(e);
function yt(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
const ie = (e, t) =>
		e
			.split(/(```[\s\S]*?```|`[\s\S]*?`)/)
			.map((a) => (a.startsWith('```') || a.startsWith('`') ? a : t(a)))
			.join(''),
	Yt = (e, t, a) => {
		if (!e.includes('{{')) return e;
		const r = [
			{ regex: /{{char}}/gi, replacement: t },
			{ regex: /{{user}}/gi, replacement: a },
			{
				regex: /{{VIDEO_FILE_ID_([a-f0-9-]+)}}/gi,
				replacement: (s, o) => `<video src="${ve}/api/v1/files/${o}/content" controls></video>`
			},
			{
				regex: /{{HTML_FILE_ID_([a-f0-9-]+)}}/gi,
				replacement: (s, o) => `<file type="html" id="${o}" />`
			}
		];
		return (
			(e = ie(
				e,
				(s) => (
					r.forEach(({ regex: o, replacement: c }) => {
						c != null && (s = s.replace(o, c));
					}),
					s
				)
			)),
			e
		);
	},
	Wt = (e) =>
		e
			.replace(/<\|[a-z]*$/, '')
			.replace(/<\|[a-z]+\|$/, '')
			.replace(/<$/, '')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;')
			.replaceAll(/<\|[a-z]+\|>/g, ' ')
			.trim(),
	Jt = (e) => ((e = wt(e)), e.trim());
function ge(e) {
	return new RegExp('\\p{Script=Han}', 'u').test(e);
}
function wt(e) {
	return (
		/[\u4e00-\u9fa5]/.test(e) &&
			(e = e
				.split(
					`
`
				)
				.map(
					(r) => (
						/[\u4e00-\u9fa5]/.test(r) &&
							r.includes('*') &&
							(/（|）/.test(r) && ((r = M(r, '**', '（', '）')), (r = M(r, '*', '（', '）'))),
							/“|”/.test(r) && ((r = M(r, '**', '“', '”')), (r = M(r, '*', '“', '”')))),
						r
					)
				).join(`
`)),
		e
	);
}
function M(e, t, a, r) {
	const s = yt(t),
		o = new RegExp(`(.?)(?<!${s})(${s})([^${s}]+)(${s})(?!${s})(.)`, 'g');
	return e.replace(o, (c, l, n, h, g, x) =>
		(h.startsWith(a) && l && l.length > 0 && ge(l[l.length - 1])) ||
		(h.endsWith(r) && x && x.length > 0 && ge(x[0]))
			? `${l} ${n}${h}${g} ${x}`
			: c
	);
}
function me(e) {
	return xt(e);
}
const Kt = (e) => e.charAt(0).toUpperCase() + e.slice(1),
	Zt = (e) => {
		let t = '';
		return new TransformStream({
			transform(a, r) {
				t += a;
				const s = t.split(e);
				(s.slice(0, -1).forEach((o) => r.enqueue(o)), (t = s[s.length - 1]));
			},
			flush(a) {
				t && a.enqueue(t);
			}
		});
	},
	Xt = (e) => {
		const t = { messages: {}, currentId: null };
		let a = null,
			r = null;
		for (const s of e)
			((r = qe()),
				a !== null && (t.messages[a].childrenIds = [...t.messages[a].childrenIds, r]),
				(t.messages[r] = { ...s, id: r, parentId: a, childrenIds: [] }),
				(a = r));
		return ((t.currentId = r), t);
	},
	vt = () => {
		const e = document.createElement('canvas'),
			t = e.getContext('2d');
		((e.height = 1), (e.width = 1));
		const a = new ImageData(e.width, e.height),
			r = a.data;
		for (let o = 0; o < a.data.length; o += 1)
			o % 4 !== 3 ? (r[o] = Math.floor(256 * Math.random())) : (r[o] = 255);
		t.putImageData(a, 0, 0);
		const s = t.getImageData(0, 0, e.width, e.height).data;
		for (let o = 0; o < s.length; o += 1) if (s[o] !== r[o]) return (s[o], r[o], !1);
		return !0;
	};
let be = !1;
async function qt(e, t, a, r = 'image/jpeg') {
	var c;
	const s = document.createElement('canvas');
	((s.width = t), (s.height = a), (c = s.getContext('2d')) == null || c.drawImage(e, 0, 0, t, a));
	const o = () => s.toDataURL(r);
	return !be &&
		s.toBlob &&
		/android|iphone|ipad|ipod/i.test(navigator == null ? void 0 : navigator.userAgent)
		? ((be = !0),
			new Promise((l) => {
				s.toBlob((n) => {
					if (!n) {
						l(o());
						return;
					}
					const h = new FileReader();
					((h.onload = () => l(String(h.result))), (h.onerror = () => l(o())), h.readAsDataURL(n));
				}, r);
			}))
		: Promise.resolve(o());
}
const Qt = async (e, t, a) =>
		new Promise((r, s) => {
			const o = new Image();
			((o.onload = async () => {
				var h;
				let c = o.width,
					l = o.height;
				if (t && a) {
					if (c <= t && l <= a) {
						r(e);
						return;
					}
					c / l > t / a
						? ((l = Math.round((t * l) / c)), (c = t))
						: ((c = Math.round((a * c) / l)), (l = a));
				} else if (t) {
					if (c <= t) {
						r(e);
						return;
					}
					((l = Math.round((t * l) / c)), (c = t));
				} else if (a) {
					if (l <= a) {
						r(e);
						return;
					}
					((c = Math.round((a * c) / l)), (l = a));
				}
				const n = ((h = e.match(/^data:([^;]+);/)) == null ? void 0 : h[1]) ?? 'image/jpeg';
				r(await qt(o, c, l, n));
			}),
				(o.onerror = (c) => s(c)),
				(o.src = e));
		}),
	er = (e) => {
		const t = document.createElement('canvas'),
			a = t.getContext('2d');
		if (((t.width = 100), (t.height = 100), !vt())) return `${ve}/user.png`;
		((a.fillStyle = '#F39C12'),
			a.fillRect(0, 0, t.width, t.height),
			(a.fillStyle = '#FFFFFF'),
			(a.font = '40px Helvetica'),
			(a.textAlign = 'center'),
			(a.textBaseline = 'middle'));
		const r = e.trim(),
			s = r.length > 0 ? r[0] + (r.split(' ').length > 1 ? r[r.lastIndexOf(' ') + 1] : '') : '';
		return (a.fillText(s.toUpperCase(), t.width / 2, t.height / 2), t.toDataURL());
	},
	tr = (e) => {
		const t = B(e);
		return t.isToday()
			? 'Today at {{LOCALIZED_TIME}}'
			: t.isYesterday()
				? 'Yesterday at {{LOCALIZED_TIME}}'
				: '{{LOCALIZED_DATE}} at {{LOCALIZED_TIME}}';
	},
	Et = async (e, t = null, a = !1) => {
		if (a) {
			let r = '';
			if (t) r = t;
			else {
				const o = {};
				(Z.use(ot(o)),
					Z.use(Xe(o)),
					(r = `
			<div>
				<style>
					pre {
						background-color: #f6f8fa;
						border-radius: 6px;
						padding: 16px;
						overflow: auto;
					}
					code {
						font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
						font-size: 14px;
					}
					.hljs-keyword { color: #d73a49; }
					.hljs-string { color: #032f62; }
					.hljs-comment { color: #6a737d; }
					.hljs-function { color: #6f42c1; }
					.hljs-number { color: #005cc5; }
					.hljs-operator { color: #d73a49; }
					.hljs-class { color: #6f42c1; }
					.hljs-title { color: #6f42c1; }
					.hljs-params { color: #24292e; }
					.hljs-built_in { color: #005cc5; }
					blockquote {
						border-left: 4px solid #dfe2e5;
						padding-left: 16px;
						color: #6a737d;
						margin-left: 0;
						margin-right: 0;
					}
					table {
						border-collapse: collapse;
						width: 100%;
						margin-bottom: 16px;
					}
					table, th, td {
						border: 1px solid #dfe2e5;
					}
					th, td {
						padding: 8px 12px;
					}
					th {
						background-color: #f6f8fa;
					}
				</style>
				${Z.parse(e)}
			</div>
		`));
			}
			const s = new Blob([r], { type: 'text/html' });
			try {
				const o = new ClipboardItem({
					'text/html': s,
					'text/plain': new Blob([e], { type: 'text/plain' })
				});
				return (await navigator.clipboard.write([o]), !0);
			} catch {
				return await Et(e);
			}
		} else {
			let r = !1;
			if (!navigator.clipboard) {
				const s = document.createElement('textarea');
				((s.value = e),
					(s.style.top = '0'),
					(s.style.left = '0'),
					(s.style.position = 'fixed'),
					document.body.appendChild(s),
					s.focus({ preventScroll: !0 }),
					s.select());
				try {
					('' + (document.execCommand('copy') ? 'successful' : 'unsuccessful'), (r = !0));
				} catch {}
				return (document.body.removeChild(s), r);
			}
			return (
				(r = await navigator.clipboard
					.writeText(e)
					.then(() => !0)
					.catch((s) => !1)),
				r
			);
		}
	},
	rr = (e, t) =>
		t === '0.0.0'
			? !1
			: t.localeCompare(e, void 0, { numeric: !0, sensitivity: 'case', caseFirst: 'upper' }) < 0,
	ar = (e) => {
		const t = /\{\{([^}]+)\}\}/g,
			a = [];
		let r;
		for (; (r = t.exec(e)) !== null; )
			a.push({ word: r[1].trim(), startIndex: r.index, endIndex: t.lastIndex - 1 });
		return a;
	},
	sr = (e) => (e.some((t) => 'mapping' in t) ? 'openai' : 'webui'),
	nr = async (e = !1) => {
		const t = await new Promise((s, o) => {
			navigator.geolocation.getCurrentPosition(s, o);
		}).catch((s) => {
			throw s;
		});
		if (!t) return 'Location not available';
		const { latitude: a, longitude: r } = t.coords;
		return e ? { latitude: a, longitude: r } : `${a.toFixed(3)}, ${r.toFixed(3)} (lat, long)`;
	},
	At = (e) => {
		var t, a;
		try {
			const r = (t = e == null ? void 0 : e.content) == null ? void 0 : t.parts;
			if (Array.isArray(r)) {
				const s = r.filter((o) => typeof o == 'string');
				if (s.length > 0)
					return s.join(`
`);
			}
			return ((a = e == null ? void 0 : e.content) == null ? void 0 : a.text) || '';
		} catch {
			return '';
		}
	},
	Ft = (e) => {
		var l, n, h;
		const t = e.mapping,
			a = [];
		let r = '',
			s = null;
		for (const g in t) {
			const x = t[g];
			r = g;
			try {
				if (
					a.length == 0 &&
					(x.message == null ||
						(((l = x.message.content.parts) == null ? void 0 : l[0]) == '' &&
							x.message.content.text == null))
				)
					continue;
				{
					const E = (h = (n = x.message) == null ? void 0 : n.author) == null ? void 0 : h.role;
					if (E === 'system' || E === 'tool') continue;
					const q = {
						id: g,
						parentId: s,
						childrenIds: x.children || [],
						role: E !== 'user' ? 'assistant' : 'user',
						content: At(x.message),
						model: 'gpt-3.5-turbo',
						done: !0,
						context: null
					};
					(a.push(q), (s = r));
				}
			} catch {}
		}
		a.length > 0 && (a[a.length - 1].childrenIds = []);
		const o = {};
		return (
			a.forEach((g) => (o[g.id] = g)),
			{
				history: { currentId: r, messages: o },
				models: ['gpt-3.5-turbo'],
				messages: a,
				options: {},
				timestamp: e.create_time,
				title: e.title ?? 'New Chat'
			}
		);
	},
	Dt = (e) => {
		const t = e.messages;
		if (t.length === 0) return !1;
		for (const a of t) if (typeof a.content != 'string') return !1;
		return !0;
	},
	or = (e) => {
		const t = [];
		for (const a of e) {
			if (!('mapping' in a)) {
				a.title ?? a.id;
				continue;
			}
			const r = Ft(a);
			Dt(r) && t.push({ id: a.id, user_id: '', title: a.title, chat: r, timestamp: a.create_time });
		}
		return t;
	},
	ir = (e) => {
		let t;
		try {
			t = new URL(e);
		} catch {
			return !1;
		}
		return t.protocol === 'http:' || t.protocol === 'https:';
	},
	cr = (e) =>
		e.startsWith('https://www.youtube.com') ||
		e.startsWith('https://youtu.be') ||
		e.startsWith('https://youtube.com') ||
		e.startsWith('https://m.youtube.com'),
	St = (e) => {
		const t = new RegExp('\\p{RGI_Emoji}', 'gv');
		return e.replace(t, '');
	},
	Rt = (e) =>
		e
			.replace(/(```[\s\S]*?```)/g, '')
			.replace(/^\|.*\|$/gm, '')
			.replace(/(?:\*\*|__)(.*?)(?:\*\*|__)/g, '$1')
			.replace(/(?:[*_])(.*?)(?:[*_])/g, '$1')
			.replace(/~~(.*?)~~/g, '$1')
			.replace(/`([^`]+)`/g, '$1')
			.replace(/!?\[([^\]]*)\](?:\([^)]+\)|\[[^\]]*\])/g, '$1')
			.replace(/^\[[^\]]+\]:\s*.*$/gm, '')
			.replace(/^#{1,6}\s+/gm, '')
			.replace(/^\s*[-*+]\s+/gm, '')
			.replace(/^\s*(?:\d+\.)\s+/gm, '')
			.replace(/^\s*>[> ]*/gm, '')
			.replace(/^\s*:\s+/gm, '')
			.replace(/\[\^[^\]]*\]/g, '')
			.replace(
				/\n{2,}/g,
				`
`
			),
	ce = (e) => Rt(St(e.trim())),
	Lt = (e, t) =>
		ie(e, (a) => {
			for (const r of t)
				a = a.replace(new RegExp(`<details\\s+type="${r}"[^>]*>.*?<\\/details>`, 'gis'), '');
			return a;
		}).trim(),
	xe = (e) => (
		(e = e.replace(/<details[^>]*>[\s\S]*?<\/details>/gi, '')),
		ie(e, (t) => t.replace(/<details[^>]*>.*?<\/details>/gis, '')).trim()
	),
	lr = (e) => {
		e = Lt(e, ['reasoning', 'code_interpreter']);
		const t = /<details\s+type="tool_calls"([^>]*)>([\s\S]*?)<\/details>/gis,
			a = e.match(t);
		if (a)
			for (const r of a) {
				const s = /(\w+)="([^"]*)"/g,
					o = {};
				let c;
				for (; (c = s.exec(r)) !== null; ) o[c[1]] = c[2];
				let l = '';
				if (o.result) l = me(o.result);
				else {
					const n = r.match(/<summary>[\s\S]*?<\/summary>\s*([\s\S]*?)\s*<\/details>/i);
					n && n[1].trim() && (l = me(n[1].trim()));
				}
				l && (e = e.replace(r, l));
			}
		return e;
	},
	Re = /```[\s\S]*?```/g,
	Tt = (e) => {
		const t = [];
		let a = 0;
		e = e.replace(Re, (s) => {
			const o = `\0${a}\0`;
			return ((t[a++] = s), o);
		});
		let r = e.split(new RegExp('(?<=[.!?])\\s+|\\n+'));
		return (
			(r = r.map((s) => s.replace(/\u0000(\d+)\u0000/g, (o, c) => t[c]))),
			r.map(ce).filter(Boolean)
		);
	},
	kt = (e) => {
		const t = [];
		let a = 0;
		e = e.replace(Re, (s) => {
			const o = `\0${a}\0`;
			return ((t[a++] = s), o);
		});
		let r = e.split(/\n+/);
		return (
			(r = r.map((s) => s.replace(/\u0000(\d+)\u0000/g, (o, c) => t[c]))),
			r.map(ce).filter(Boolean)
		);
	},
	Nt = (e) =>
		Tt(e).reduce((t, a) => {
			const r = t.length - 1;
			if (r >= 0) {
				const s = t[r],
					o = s.split(/\s+/).length,
					c = s.length;
				o < 4 || c < 50 ? (t[r] = s + ' ' + a) : t.push(a);
			} else t.push(a);
			return t;
		}, []),
	ur = (e, t = 'punctuation') => {
		e = e.replace(/<details[^>]*>[\s\S]*?<\/details>/gi, '');
		const a = [];
		switch (t) {
			default:
			case H.PUNCTUATION:
				a.push(...Nt(e));
				break;
			case H.PARAGRAPHS:
				a.push(...kt(e));
				break;
			case H.NONE:
				a.push(ce(e));
				break;
		}
		return a;
	},
	pr = (e, t) => new File([e], t, { type: e.type }),
	dr = (e, t, a = '') => ({
		'{{USER_NAME}}': e,
		'{{USER_EMAIL}}': a || 'Unknown',
		'{{USER_LOCATION}}': t || 'Unknown',
		'{{CURRENT_DATETIME}}': It(),
		'{{CURRENT_DATE}}': Le(),
		'{{CURRENT_TIME}}': Te(),
		'{{CURRENT_WEEKDAY}}': Ut(),
		'{{CURRENT_TIMEZONE}}': _t(),
		'{{USER_LANGUAGE}}': localStorage.getItem('locale') || 'en-US'
	}),
	Ct = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	],
	fr = (e) => {
		const t = new Date(),
			a = new Date(e * 1e3),
			s = (t.getTime() - a.getTime()) / (1e3 * 3600 * 24),
			o = t.getDate(),
			c = t.getMonth(),
			l = t.getFullYear(),
			n = a.getDate(),
			h = a.getMonth(),
			g = a.getFullYear();
		return l === g && c === h && o === n
			? 'Today'
			: l === g && c === h && o - n === 1
				? 'Yesterday'
				: s <= 7
					? 'Previous 7 days'
					: s <= 30
						? 'Previous 30 days'
						: l === g
							? Ct[h]
							: a.getFullYear().toString();
	},
	hr = (e) => {
		const t = {};
		let a = !1,
			r = !1;
		const s = /^\s*([a-z_]+):\s*(.*)\s*$/i,
			o = e.split(`
`);
		if (o[0].trim() !== '"""') return {};
		a = !0;
		for (let c = 1; c < o.length; c++) {
			const l = o[c];
			if (l.includes('"""') && a) {
				r = !0;
				break;
			}
			if (a && !r) {
				const n = s.exec(l);
				if (n) {
					const [, h, g] = n;
					t[h.trim()] = g.trim();
				}
			}
		}
		return t;
	},
	gr = (e, t, a) => {
		const r = e.map((o) => o.code);
		return t.map((o) => r.find((c) => c.startsWith(o))).find(Boolean) || a;
	},
	Le = () => {
		const e = new Date(),
			t = e.getFullYear(),
			a = String(e.getMonth() + 1).padStart(2, '0'),
			r = String(e.getDate()).padStart(2, '0');
		return `${t}-${a}-${r}`;
	},
	Te = () => new Date().toTimeString().split(' ')[0],
	It = () => `${Le()} ${Te()}`,
	_t = () => Intl.DateTimeFormat().resolvedOptions().timeZone,
	Ut = () =>
		['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][
			new Date().getDay()
		],
	mr = (e, t) => {
		const a = [];
		let r = t;
		for (; r != null; ) {
			const s = e.messages[r];
			if (s === void 0) break;
			(a.push(s), (r = s.parentId));
		}
		return a.reverse();
	},
	br = (e) => {
		if (e == null) return 'Unknown size';
		if (typeof e != 'number' || e < 0) return 'Invalid size';
		if (e === 0) return '0 B';
		const t = ['B', 'KB', 'MB', 'GB', 'TB'];
		let a = 0;
		for (; e >= 1024 && a < t.length - 1; ) ((e /= 1024), a++);
		return `${e.toFixed(1)} ${t[a]}`;
	},
	xr = (e) =>
		e
			? e.split(`
`).length
			: 0;
function z(e, t, a = new Set()) {
	if (!e) return {};
	if (e.$ref) {
		const s = e.$ref.split('/').pop();
		if (a.has(s)) return {};
		a.add(s);
		const o = t.schemas[s];
		return z(o, t, a);
	}
	if (e.type) {
		const r = { type: e.type };
		switch ((e.description && (r.description = e.description), e.type)) {
			case 'object':
				((r.properties = {}), (r.required = e.required || []));
				for (const [s, o] of Object.entries(e.properties || {})) r.properties[s] = z(o, t);
				break;
			case 'array':
				r.items = z(e.items, t);
				break;
		}
		return r;
	}
	return {};
}
const yr = (e) => {
		const t = [];
		if (!e || !e.paths) return t;
		for (const [a, r] of Object.entries(e.paths))
			for (const [s, o] of Object.entries(r))
				if (o != null && o.operationId) {
					const c = {
						name: o.operationId,
						description: o.description || o.summary || 'No description available.',
						parameters: { type: 'object', properties: {}, required: [] }
					};
					if (
						(o.parameters &&
							o.parameters.forEach((l) => {
								const n = l == null ? void 0 : l.name;
								if (!n) return;
								const h = (l == null ? void 0 : l.schema) ?? {};
								let g = h.description || l.description || '';
								(h.enum &&
									Array.isArray(h.enum) &&
									(g += `. Possible values: ${h.enum.join(', ')}`),
									(c.parameters.properties[n] = { type: h.type, description: g }),
									l.required && c.parameters.required.push(n));
							}),
						o.requestBody)
					) {
						const l = o.requestBody.content;
						if (l && l['application/json']) {
							const n = l['application/json'].schema,
								h = z(n, e.components);
							h.properties
								? ((c.parameters.properties = { ...c.parameters.properties, ...h.properties }),
									h.required &&
										(c.parameters.required = [
											...new Set([...c.parameters.required, ...h.required])
										]))
								: h.type === 'array' && (c.parameters = h);
						}
					}
					t.push(c);
				}
		return t;
	},
	wr = (e) =>
		e
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/\s+/g, '-')
			.replace(/[^a-zA-Z0-9-_]/g, '')
			.toLowerCase(),
	vr = (e) =>
		e
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^\w]+/g, '_')
			.replace(/^_+|_+$/g, '')
			.toLowerCase(),
	qr = (e) => {
		const t = /{{\s*([^|}\s]+)\s*\|\s*([^}]+)\s*}}/g,
			a = /{{\s*([^|}\s]+)\s*}}/g,
			r = {};
		let s;
		for (; (s = t.exec(e)) !== null; ) {
			const o = s[1].trim(),
				c = s[2].trim();
			r[o] = Ot(c);
		}
		for (; (s = a.exec(e)) !== null; ) {
			const o = s[1].trim();
			r.hasOwnProperty(o) || (r[o] = { type: 'text' });
		}
		return r;
	},
	ye = (e, t) => {
		const a = [];
		let r = '',
			s = 0,
			o = !1,
			c = !1;
		for (let l = 0; l < e.length; l++) {
			const n = e[l];
			if (c) {
				((r += n), (c = !1));
				continue;
			}
			if (n === '\\') {
				((r += n), (c = !0));
				continue;
			}
			if (n === '"' && !c) {
				((o = !o), (r += n));
				continue;
			}
			if (
				!o &&
				(n === '{' || n === '[' ? s++ : (n === '}' || n === ']') && s--, n === t && s === 0)
			) {
				(a.push(r.trim()), (r = ''));
				continue;
			}
			r += n;
		}
		return (r.trim() && a.push(r.trim()), a);
	},
	Ot = (e) => {
		const t = ye(e, ':'),
			[a, ...r] = t,
			s = a.startsWith('type=') ? a.slice(5) : a,
			o = r.reduce((c, l) => {
				const n = l.trim();
				if (!n) return c;
				const h = ye(n, '=');
				if (h.length === 1) {
					const q = h[0].trim();
					return q.length > 0 ? { ...c, [q]: !0 } : c;
				}
				const [g, ...x] = h,
					E = x.join('=');
				return !g || E == null ? c : { ...c, [g.trim()]: Bt(E.trim()) };
			}, {});
		return { type: s, ...o };
	},
	Bt = (e) => {
		if (e.startsWith('"') && e.endsWith('"')) return e.slice(1, -1);
		if (/^[\[{]/.test(e))
			try {
				return JSON.parse(e);
			} catch {
				return e;
			}
		return e;
	};
async function jt() {
	if (!window.pdfjsLib) {
		const e = await I(() => import('./O_bA2-Zs.js'), [], import.meta.url);
		if (((e.GlobalWorkerOptions.workerSrc = ze), !window.pdfjsLib))
			throw new Error('pdfjsLib is required for PDF extraction');
	}
	return window.pdfjsLib;
}
const Er = async (e) => {
		const t = [
			'.txt',
			'.md',
			'.csv',
			'.json',
			'.js',
			'.ts',
			'.css',
			'.html',
			'.xml',
			'.yaml',
			'.yml',
			'.rtf'
		];
		function a(n) {
			const h = n.lastIndexOf('.');
			return h === -1 ? '' : n.substr(h).toLowerCase();
		}
		async function r(n) {
			const h = await jt(),
				g = await n.arrayBuffer(),
				x = await h.getDocument({ data: g }).promise;
			let E = '';
			for (let q = 1; q <= x.numPages; q++) {
				const W = (await (await x.getPage(q)).getTextContent()).items.map((j) => j.str);
				E +=
					W.join(' ') +
					`
`;
			}
			return E;
		}
		function s(n) {
			return new Promise((h, g) => {
				const x = new FileReader();
				((x.onload = () => h(x.result)), (x.onerror = g), x.readAsText(n));
			});
		}
		async function o(n) {
			const [h, { default: g }] = await Promise.all([
				n.arrayBuffer(),
				I(
					() => import('./D6Y7_RRD.js').then((E) => E.i),
					__vite__mapDeps([0, 1, 2]),
					import.meta.url
				)
			]);
			return (await g.extractRawText({ arrayBuffer: h })).value;
		}
		const c = e.type || '',
			l = a(e.name);
		if (c === 'application/pdf' || l === '.pdf') return await r(e);
		if (
			c === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
			l === '.docx'
		)
			return await o(e);
		if (c.startsWith('text/') || t.includes(l)) return await s(e);
		try {
			return await s(e);
		} catch {
			throw new Error('Unsupported or non-text file type: ' + (e.name || c));
		}
	},
	Ar = (e) => {
		const t = new Date(),
			a = new Date(e);
		let r = t.getFullYear() - a.getFullYear();
		const s = t.getMonth() - a.getMonth();
		return ((s < 0 || (s === 0 && t.getDate() < a.getDate())) && r--, r.toString());
	},
	Fr = async (e) => {
		var a;
		const { default: t } = await I(
			async () => {
				const { default: r } = await import('./BkjLDdlA.js').then((s) => s.h);
				return { default: r };
			},
			__vite__mapDeps([3, 1]),
			import.meta.url
		);
		try {
			return await t({ blob: e, toType: 'image/jpeg' });
		} catch (r) {
			if ((a = r == null ? void 0 : r.message) != null && a.includes('already browser readable'))
				return e;
			throw r;
		}
	},
	Dr = (e) => {
		try {
			return decodeURIComponent(e);
		} catch {
			return e;
		}
	},
	Sr = async () => {
		const { default: e } = await I(
			async () => {
				const { default: t } = await import('./CZJnjZH0.js').then((a) => a.b6);
				return { default: t };
			},
			__vite__mapDeps([4, 5, 1, 6, 7, 8, 9]),
			import.meta.url
		);
		return (
			e.initialize({
				startOnLoad: !1,
				theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default',
				securityLevel: 'loose'
			}),
			e
		);
	},
	$t = (e) => {
		var t, a, r;
		typeof document > 'u' ||
			((t = document.getElementById(e)) == null || t.remove(),
			(a = document.getElementById(`d${e}`)) == null || a.remove(),
			(r = document.getElementById(`i${e}`)) == null || r.remove());
	},
	Rr = async (e, t, a) => {
		const r = `mermaid-${qe()}`;
		try {
			if (await e.parse(t, { suppressErrors: !1 })) {
				const { svg: o } = await e.render(r, t);
				return o;
			}
			return '';
		} finally {
			$t(r);
		}
	},
	Lr = async (e, t) => {
		const a = await I(
				() => import('./BsAKizII.js'),
				__vite__mapDeps([10, 11, 8, 12, 13, 14, 15, 16, 17, 18, 9, 19, 20]),
				import.meta.url
			),
			r = JSON.parse(e);
		let s = r;
		return (
			r.$schema &&
				r.$schema.includes('vega-lite') &&
				(s = (
					await I(
						() => import('./DgYQHPtH.js'),
						__vite__mapDeps([21, 10, 11, 8, 12, 13, 14, 15, 16, 17, 18, 9, 19, 20]),
						import.meta.url
					)
				).compile(r).spec),
			await new a.View(a.parse(s), { renderer: 'none' }).toSVG()
		);
	},
	Tr = (e) => {
		e = xe(e);
		const t = e.match(/```[\s\S]*?```/g);
		let a = [],
			r = [];
		const s = () => {
			r.length === 0 && r.push({ html: '', css: '', js: '' });
		};
		if (t)
			(t.forEach((n) => {
				const h = n
						.split(
							`
`
						)[0]
						.replace('```', '')
						.trim()
						.toLowerCase(),
					g = n.replace(/```[\s\S]*?\n/, '').replace(/```$/, '');
				a.push({ lang: h, code: g });
			}),
				a.forEach((n) => {
					const { lang: h, code: g } = n;
					h === 'html'
						? r.push({
								html:
									g +
									`
`,
								css: '',
								js: ''
							})
						: h === 'css'
							? (s(),
								(r[r.length - 1].css +=
									g +
									`
`))
							: (h === 'javascript' || h === 'js') &&
								(s(),
								(r[r.length - 1].js +=
									g +
									`
`));
				}));
		else {
			e = xe(e);
			const n = e.match(/<html>[\s\S]*?<\/html>/gi),
				h = e.match(/<style>[\s\S]*?<\/style>/gi),
				g = e.match(/<script>[\s\S]*?<\/script>/gi);
			(n &&
				n.forEach((x) => {
					const E = x.replace(/<\/?html>/gi, '');
					r.push({
						html:
							E +
							`
`,
						css: '',
						js: ''
					});
				}),
				h &&
					h.forEach((x) => {
						const E = x.replace(/<\/?style>/gi, '');
						(s(),
							(r[r.length - 1].css +=
								E +
								`
`));
					}),
				g &&
					g.forEach((x) => {
						const E = x.replace(/<\/?script>/gi, '');
						(s(),
							(r[r.length - 1].js +=
								E +
								`
`));
					}));
		}
		const o = r.map((n) => n.html).join(''),
			c = r.map((n) => n.css).join(''),
			l = r.map((n) => n.js).join('');
		return {
			codeBlocks: a,
			html: o.trim(),
			css: c.trim(),
			js: l.trim(),
			htmlGroups: r
				.filter((n) => n.html.trim() || n.css.trim() || n.js.trim())
				.map((n) => ({ html: n.html.trim(), css: n.css.trim(), js: n.js.trim() }))
		};
	},
	kr = (e) => {
		const t = e.match(/^---\s*\n([\s\S]*?)\n---/);
		if (t) {
			const a = {};
			return (
				t[1]
					.split(
						`
`
					)
					.forEach((r) => {
						const [s, ...o] = r.split(':');
						s &&
							o &&
							(a[s.trim()] = o
								.join(':')
								.trim()
								.replace(/^["']|["']$/g, ''));
					}),
				a
			);
		}
		return {};
	},
	Nr = (e) => e.replace(/[-_]/g, ' ').replace(/\b\w/g, (t) => t.toUpperCase()),
	Cr = (e, t) => {
		e && (t.showControls.set(!0), t.showFileNavPath.set(e));
	};
export {
	Lr as $,
	qr as A,
	Fr as B,
	Qt as C,
	ar as D,
	Dr as E,
	Gt as F,
	ze as G,
	br as H,
	xr as I,
	Ve as J,
	He as K,
	gr as L,
	Cr as M,
	je as N,
	xe as O,
	Wt as P,
	ur as Q,
	sr as R,
	or as S,
	H as T,
	cr as U,
	Er as V,
	Sr as W,
	Rr as X,
	Tr as Y,
	lr as Z,
	dr as _,
	yr as a,
	me as a0,
	xt as a1,
	ot as a2,
	Xe as a3,
	Yt as a4,
	Jt as a5,
	nr as b,
	rr as c,
	wr as d,
	hr as e,
	Nr as f,
	fr as g,
	mr as h,
	ir as i,
	Xt as j,
	er as k,
	vt as l,
	Kt as m,
	vr as n,
	Et as o,
	kr as p,
	pr as q,
	tr as r,
	Zt as s,
	Ar as t,
	Le as u,
	qe as v,
	Te as w,
	It as x,
	_t as y,
	Ut as z
};
//# sourceMappingURL=BbDdJXLs.js.map
