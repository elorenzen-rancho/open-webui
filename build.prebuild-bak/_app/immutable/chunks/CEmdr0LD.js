const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f || (m.f = ['./DPFs2k7n.js', './CD8kWLvT.js', './DIeogL5L.js'])
) => i.map((i) => d[i]);
import './CWj6FrbW.js';
import './69_IOA4Y.js';
import {
	v as Rs,
	b1 as Cn,
	bN as es,
	b4 as Se,
	o as Ls,
	by as Pp,
	bE as zp,
	g as Rn,
	p as en,
	w as $e,
	y as yn,
	a as K,
	b as tn,
	e as yt,
	s as ln,
	x as $,
	f as ae,
	c as Q,
	k as le,
	l as y,
	r as G,
	m as We,
	X as Pn,
	q as Ee,
	t as ge,
	F as Tt,
	z as L,
	n as Oe,
	u as ut,
	i as Ht,
	A as ts,
	C as Bp,
	aX as rt,
	B as Vl,
	d as et,
	b3 as pt,
	aY as $p,
	h as vs,
	D as xi
} from './CD8kWLvT.js';
import { s as Wl } from './ByAzvrkO.js';
import { h as Lt, a as De, s as Le, c as Mt, g as _p, e as Hp, r as js } from './BfA5TzUS.js';
import { b as rn } from './BCA7d6a5.js';
import { i as nn } from './BolXBFGq.js';
import { l as Br, p as P } from './DbBXQmQ3.js';
import { a as Fp } from './dVgjv0ms.js';
import { c as Vp } from './DTNUVO6b.js';
import { t as Wp, T as dt } from './BUv1YIBp.js';
import { _ as jp } from './C1FmrZbK.js';
import { i as wt } from './CdIW-EUl.js';
import { b as st } from './B5BwDDu6.js';
import { m as Kr } from './DgCmIQGJ.js';
import Up from './B5CD4DQe.js';
import { H as Gu, b as ja, e as qp } from './B6dDhFZ1.js';
import { U as Kp, V as Jp } from './chV95BsE.js';
import {
	f as Xu,
	s as Qu,
	o as Yu,
	b as Zu,
	c as ed,
	d as td,
	h as nd,
	i as rd,
	e as sd
} from './CWQ2H1iU.js';
import { P as Gp, b as Ua, a as Xp } from './CHheSG1Y.js';
import { e as mr, i as gr } from './BUYMbiFA.js';
import { a as Qp, b as Rt } from './QcGoGJ5n.js';
import { p as Yp } from './Bfc47y5P.js';
import { V as qa, a as Zp, J as em } from './Bumd5cCN.js';
import { t as Ka } from './DtbOSK9Q.js';
import { U as wi, E as Us, i as Ja } from './BbDdJXLs.js';
import { X as tm } from './D48hh3kS.js';
import { M as nm } from './sSXaIhmU.js';
import { S as rm } from './BqNz_fa8.js';
import { M as sm } from './Ug_Q_RKr.js';
import { j as om } from './BYvd1aFs.js';
import { d as im, r as lm } from './BC4znSyB.js';
import { e as am } from './CoWaXxzQ.js';
import { s as cm, a as um } from './Cz9Pz2N7.js';
import { D as dm } from './FsbvYLPp.js';
import { D as fm, a as hm } from './NW0ItIZj.js';
import { G as pm } from './0B8A818I.js';
import { F as mm } from './Dpe3txJG.js';
import { d as gm } from './CszhFJD9.js';
function od(t) {
	try {
		Rs(t);
	} catch {
		return t();
	}
}
function ym(t, e) {
	let n = [];
	const r = (l) => {
			n.push(l);
		},
		s = () => {
			(n.forEach((l) => l()), (n = []));
		},
		o = es(t, (l) => (s(), e(l, r)));
	return (
		od(s),
		{
			...o,
			subscribe: (...l) => {
				const a = o.subscribe(...l);
				return () => {
					(a(), s());
				};
			}
		}
	);
}
function Si(t, e) {
	if (!Ps) return () => {};
	const n = ym(t, (r, s) => ({ stores: r, onUnsubscribe: s })).subscribe(
		({ stores: r, onUnsubscribe: s }) => {
			const o = e(r);
			o && s(o);
		}
	);
	return (od(n), n);
}
function bm(t) {
	const e = {};
	return (
		Object.keys(t).forEach((n) => {
			const r = n,
				s = t[r];
			e[r] = Cn(s);
		}),
		e
	);
}
function vm(t) {
	return function (e, n) {
		if (n === void 0) return;
		const r = t[e];
		r && r.set(n);
	};
}
function jl(t) {
	return Object.keys(t).reduce((e, n) => (t[n] === void 0 ? e : e + `${n}:${t[n]};`), '');
}
let tl = null,
	ir = null;
function id(t) {
	switch (t) {
		case 'horizontal':
			return 'ew-resize';
		case 'horizontal-max':
			return 'w-resize';
		case 'horizontal-min':
			return 'e-resize';
		case 'vertical':
			return 'ns-resize';
		case 'vertical-max':
			return 'n-resize';
		case 'vertical-min':
			return 's-resize';
	}
}
function km() {
	ir !== null && (document.head.removeChild(ir), (tl = null), (ir = null));
}
function Ci(t) {
	if (tl === t) return;
	tl = t;
	const e = id(t);
	(ir === null && ((ir = document.createElement('style')), document.head.appendChild(ir)),
		(ir.innerHTML = `*{cursor: ${e}!important;}`));
}
function xm({
	defaultSize: t,
	dragState: e,
	layout: n,
	paneData: r,
	paneIndex: s,
	precision: o = 3
}) {
	const i = n[s];
	let l;
	return (
		i == null ? (l = t ?? '1') : r.length === 1 ? (l = '1') : (l = i.toPrecision(o)),
		jl({
			'flex-basis': 0,
			'flex-grow': l,
			'flex-shrink': 1,
			overflow: 'hidden',
			'pointer-events': e !== null ? 'none' : void 0
		})
	);
}
function wm({ layout: t, panesArray: e, pivotIndices: n }) {
	let r = 0,
		s = 100,
		o = 0,
		i = 0;
	const l = n[0];
	for (let d = 0; d < e.length; d++) {
		const { constraints: f } = e[d],
			{ maxSize: h = 100, minSize: p = 0 } = f;
		d === l ? ((r = p), (s = h)) : ((o += p), (i += h));
	}
	const a = Math.min(s, 100 - o),
		c = Math.max(r, 100 - i),
		u = t[l];
	return { valueMax: a, valueMin: c, valueNow: u };
}
let Sm = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict',
	Cm = (t = 21) => {
		let e = '',
			n = t | 0;
		for (; n--; ) e += Sm[(Math.random() * 64) | 0];
		return e;
	};
function Ul(t = null) {
	return t ?? Cm(10);
}
const Tm = 100,
	ql = 10;
function Ga(t) {
	try {
		if (typeof localStorage > 'u')
			throw new Error('localStorage is not supported in this environment');
		((t.getItem = (e) => localStorage.getItem(e)),
			(t.setItem = (e, n) => localStorage.setItem(e, n)));
	} catch (e) {
		((t.getItem = () => null), (t.setItem = () => {}));
	}
}
function ld(t) {
	return `paneforge:${t}`;
}
function ad(t) {
	return t
		.map((n) => {
			const { constraints: r, id: s, idIsFromProps: o, order: i } = n;
			return o ? s : i ? `${i}:${JSON.stringify(r)}` : JSON.stringify(r);
		})
		.sort()
		.join(',');
}
function cd(t, e) {
	try {
		const n = ld(t),
			r = e.getItem(n),
			s = JSON.parse(r || '');
		if (typeof s == 'object' && s !== null) return s;
	} catch {}
	return null;
}
function Mm(t, e, n) {
	const r = cd(t, n) || {},
		s = ad(e);
	return r[s] || null;
}
function Em(t, e, n, r, s) {
	const o = ld(t),
		i = ad(e),
		l = cd(t, s) || {};
	l[i] = { expandToSizes: Object.fromEntries(n.entries()), layout: r };
	try {
		s.setItem(o, JSON.stringify(l));
	} catch (a) {}
}
const Xa = {};
function Am(t, e = 10) {
	let n = null;
	return (...s) => {
		(n !== null && clearTimeout(n),
			(n = setTimeout(() => {
				t(...s);
			}, e)));
	};
}
function Nm({
	autoSaveId: t,
	layout: e,
	storage: n,
	paneDataArrayStore: r,
	paneSizeBeforeCollapseStore: s
}) {
	const o = Se(r);
	if (e.length === 0 || e.length !== o.length) return;
	let i = Xa[t];
	i == null && ((i = Am(Em, Tm)), (Xa[t] = i));
	const l = [...o],
		a = Se(s),
		c = new Map(a);
	i(t, l, c, e, n);
}
function ud(t) {
	const e = {};
	for (const n in t) {
		const r = t[n];
		r !== void 0 && (e[n] = r);
	}
	return e;
}
function Om(...t) {
	return (...e) => {
		for (const n of t) typeof n == 'function' && n(...e);
	};
}
function sr(t, e, n, r) {
	const s = Array.isArray(e) ? e : [e];
	return (
		s.forEach((o) => t.addEventListener(o, n, r)),
		() => {
			s.forEach((o) => t.removeEventListener(o, n, r));
		}
	);
}
function Vt(t, e, n = ql) {
	return ks(t, e, n) === 0;
}
function ks(t, e, n = ql) {
	const r = Qa(t, n),
		s = Qa(e, n);
	return Math.sign(r - s);
}
function Jr(t, e) {
	if (t.length !== e.length) return !1;
	for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
	return !0;
}
function Qa(t, e) {
	return parseFloat(t.toFixed(e));
}
function Ze(t, e = 'Assertion failed!') {
	if (!t) throw Error(e);
}
function Dr({ paneConstraints: t, paneIndex: e, initialSize: n }) {
	const r = t[e];
	Ze(r != null, 'Pane constraints should not be null.');
	const { collapsedSize: s = 0, collapsible: o, maxSize: i = 100, minSize: l = 0 } = r;
	let a = n;
	return (ks(a, l) < 0 && (a = Im(a, o, s, l)), (a = Math.min(i, a)), parseFloat(a.toFixed(ql)));
}
function Im(t, e, n, r) {
	if (!e) return r;
	const s = (n + r) / 2;
	return ks(t, s) < 0 ? n : r;
}
function Gr({ delta: t, layout: e, paneConstraints: n, pivotIndices: r, trigger: s }) {
	if (Vt(t, 0)) return e;
	const o = [...e],
		[i, l] = r;
	let a = 0;
	if (s === 'keyboard') {
		{
			const u = t < 0 ? l : i,
				d = n[u];
			if ((Ze(d), d.collapsible)) {
				const f = e[u];
				Ze(f != null);
				const h = n[u];
				Ze(h);
				const { collapsedSize: p = 0, minSize: m = 0 } = h;
				if (Vt(f, p)) {
					const g = m - f;
					ks(g, Math.abs(t)) > 0 && (t = t < 0 ? 0 - g : g);
				}
			}
		}
		{
			const u = t < 0 ? i : l,
				d = n[u];
			Ze(d);
			const { collapsible: f } = d;
			if (f) {
				const h = e[u];
				Ze(h != null);
				const p = n[u];
				Ze(p);
				const { collapsedSize: m = 0, minSize: g = 0 } = p;
				if (Vt(h, g)) {
					const b = h - m;
					ks(b, Math.abs(t)) > 0 && (t = t < 0 ? 0 - b : b);
				}
			}
		}
	}
	{
		const u = t < 0 ? 1 : -1;
		let d = t < 0 ? l : i,
			f = 0;
		for (;;) {
			const p = e[d];
			Ze(p != null);
			const g = Dr({ paneConstraints: n, paneIndex: d, initialSize: 100 }) - p;
			if (((f += g), (d += u), d < 0 || d >= n.length)) break;
		}
		const h = Math.min(Math.abs(t), Math.abs(f));
		t = t < 0 ? 0 - h : h;
	}
	{
		let d = t < 0 ? i : l;
		for (; d >= 0 && d < n.length; ) {
			const f = Math.abs(t) - Math.abs(a),
				h = e[d];
			Ze(h != null);
			const p = h - f,
				m = Dr({ paneConstraints: n, paneIndex: d, initialSize: p });
			if (
				!Vt(h, m) &&
				((a += h - m),
				(o[d] = m),
				a.toPrecision(3).localeCompare(Math.abs(t).toPrecision(3), void 0, { numeric: !0 }) >= 0)
			)
				break;
			t < 0 ? d-- : d++;
		}
	}
	if (Vt(a, 0)) return e;
	{
		const u = t < 0 ? l : i,
			d = e[u];
		Ze(d != null);
		const f = d + a,
			h = Dr({ paneConstraints: n, paneIndex: u, initialSize: f });
		if (((o[u] = h), !Vt(h, f))) {
			let p = f - h,
				g = t < 0 ? l : i;
			for (; g >= 0 && g < n.length; ) {
				const b = o[g];
				Ze(b != null);
				const S = b + p,
					O = Dr({ paneConstraints: n, paneIndex: g, initialSize: S });
				if ((Vt(b, O) || ((p -= O - b), (o[g] = O)), Vt(p, 0))) break;
				t > 0 ? g-- : g++;
			}
		}
	}
	const c = o.reduce((u, d) => d + u, 0);
	return Vt(c, 100) ? o : e;
}
const Ps = typeof document < 'u';
function Dm(t) {
	return t instanceof HTMLElement;
}
function dd(t) {
	return t.type === 'keydown';
}
function fd(t) {
	return t.type.startsWith('mouse');
}
function hd(t) {
	return t.type.startsWith('touch');
}
const Rr = {
		getItem: (t) => (Ga(Rr), Rr.getItem(t)),
		setItem: (t, e) => {
			(Ga(Rr), Rr.setItem(t, e));
		}
	},
	Rm = {
		id: null,
		onLayout: null,
		keyboardResizeBy: null,
		autoSaveId: null,
		direction: 'horizontal',
		storage: Rr
	};
function Lm(t) {
	const e = { ...Rm, ...ud(t) },
		n = bm(e),
		{ autoSaveId: r, direction: s, keyboardResizeBy: o, storage: i, onLayout: l } = n,
		a = Cn(Ul()),
		c = Cn(null),
		u = Cn([]),
		d = Cn([]),
		f = Cn(!1),
		h = Cn({}),
		p = Cn(new Map()),
		m = Cn(0);
	(Si([a, u, d], ([w, A, v]) => Pm({ groupId: w, layout: A, paneDataArray: v })),
		Ls(() => U()),
		Si([r, u, i], ([w, A, v]) => {
			w &&
				Nm({
					autoSaveId: w,
					layout: A,
					storage: v,
					paneDataArrayStore: d,
					paneSizeBeforeCollapseStore: p
				});
		}));
	function g(w) {
		const A = Se(u),
			v = Se(d);
		if (!w.constraints.collapsible) return;
		const D = v.map((Ae) => Ae.constraints),
			{ collapsedSize: I = 0, paneSize: q, pivotIndices: J } = Tr(v, w, A);
		if ((Ze(q != null), q === I)) return;
		p.update((Ae) => (Ae.set(w.id, q), Ae));
		const Te = Ar(v, w) === v.length - 1 ? q - I : I - q,
			ue = Gr({
				delta: Te,
				layout: A,
				paneConstraints: D,
				pivotIndices: J,
				trigger: 'imperative-api'
			});
		if (Jr(A, ue)) return;
		u.set(ue);
		const Me = Se(l);
		(Me && Me(ue), Xr(v, ue, Se(h)));
	}
	function b(w) {
		const A = Se(u),
			v = Se(d),
			{ paneSize: D } = Tr(v, w, A);
		return D;
	}
	const S = es([d, u, c], ([w, A, v]) => (D, I) => {
		const q = Ar(w, D);
		return xm({ defaultSize: I, dragState: v, layout: A, paneData: w, paneIndex: q });
	});
	function O(w) {
		const A = Se(d),
			v = Se(u),
			{ collapsedSize: D = 0, collapsible: I, paneSize: q } = Tr(A, w, v);
		return !I || q > D;
	}
	function H(w) {
		(d.update((A) => {
			const v = [...A, w];
			return (
				v.sort((D, I) => {
					const q = D.order,
						J = I.order;
					return q == null && J == null ? 0 : q == null ? -1 : J == null ? 1 : q - J;
				}),
				v
			);
		}),
			f.set(!0));
	}
	Si([f], ([w]) => {
		if (!w) return;
		f.set(!1);
		const A = Se(r),
			v = Se(i),
			D = Se(u),
			I = Se(d);
		let q = null;
		if (A) {
			const Te = Mm(A, I, v);
			Te && (p.set(new Map(Object.entries(Te.expandToSizes))), (q = Te.layout));
		}
		q == null && (q = $m({ paneDataArray: I }));
		const J = _m({ layout: q, paneConstraints: I.map((Te) => Te.constraints) });
		if (Jr(D, J)) return;
		u.set(J);
		const xe = Se(l);
		(xe && xe(J), Xr(I, J, Se(h)));
	});
	function E(w) {
		return function (v) {
			v.preventDefault();
			const D = Se(s),
				I = Se(c),
				q = Se(a),
				J = Se(o),
				xe = Se(u),
				Te = Se(d),
				{ initialLayout: ue } = I ?? {},
				Me = Za(q, w);
			let Ae = Hm(v, w, D, I, J);
			if (Ae === 0) return;
			const ke = D === 'horizontal';
			document.dir === 'rtl' && ke && (Ae = -Ae);
			const te = Te.map((Ce) => Ce.constraints),
				de = Gr({
					delta: Ae,
					layout: ue ?? xe,
					paneConstraints: te,
					pivotIndices: Me,
					trigger: dd(v) ? 'keyboard' : 'mouse-or-touch'
				}),
				Re = !Jr(xe, de);
			if (
				((fd(v) || hd(v)) &&
					Se(m) != Ae &&
					(m.set(Ae),
					Ci(
						Re
							? ke
								? 'horizontal'
								: 'vertical'
							: ke
								? Ae < 0
									? 'horizontal-min'
									: 'horizontal-max'
								: Ae < 0
									? 'vertical-min'
									: 'vertical-max'
					)),
				Re)
			) {
				u.set(de);
				const Ce = Se(l);
				(Ce && Ce(de), Xr(Te, de, Se(h)));
			}
		};
	}
	function x(w, A) {
		const v = Se(u),
			D = Se(d),
			I = D.map((Ae) => Ae.constraints),
			{ paneSize: q, pivotIndices: J } = Tr(D, w, v);
		Ze(q != null);
		const Te = Ar(D, w) === D.length - 1 ? q - A : A - q,
			ue = Gr({
				delta: Te,
				layout: v,
				paneConstraints: I,
				pivotIndices: J,
				trigger: 'imperative-api'
			});
		if (Jr(v, ue)) return;
		u.set(ue);
		const Me = Se(l);
		(Me == null || Me(ue), Xr(D, ue, Se(h)));
	}
	function k(w, A) {
		const v = Se(s),
			D = Se(u),
			I = Kl(w);
		Ze(I);
		const q = md(v, A);
		c.set({
			dragHandleId: w,
			dragHandleRect: I.getBoundingClientRect(),
			initialCursorPosition: q,
			initialLayout: D
		});
	}
	function M() {
		(km(), c.set(null));
	}
	function T(w) {
		const A = Se(d),
			v = Ar(A, w);
		v < 0 || d.update((D) => (D.splice(v, 1), h.update((I) => (delete I[w.id], I)), f.set(!0), D));
	}
	function _(w) {
		const A = Se(d),
			v = Se(u),
			{ collapsedSize: D = 0, collapsible: I, paneSize: q } = Tr(A, w, v);
		return I === !0 && q === D;
	}
	function C(w) {
		const A = Se(u),
			v = Se(d);
		if (!w.constraints.collapsible) return;
		const D = v.map((de) => de.constraints),
			{ collapsedSize: I = 0, paneSize: q, minSize: J = 0, pivotIndices: xe } = Tr(v, w, A);
		if (q !== I) return;
		const Te = Se(p).get(w.id),
			ue = Te != null && Te >= J ? Te : J,
			Ae = Ar(v, w) === v.length - 1 ? q - ue : ue - q,
			ke = Gr({
				delta: Ae,
				layout: A,
				paneConstraints: D,
				pivotIndices: xe,
				trigger: 'imperative-api'
			});
		if (Jr(A, ke)) return;
		u.set(ke);
		const te = Se(l);
		(te == null || te(ke), Xr(v, ke, Se(h)));
	}
	const ce = es([s], ([w]) =>
			jl({
				display: 'flex',
				'flex-direction': w === 'horizontal' ? 'row' : 'column',
				height: '100%',
				overflow: 'hidden',
				width: '100%'
			})
		),
		W = es([s, a], ([w, A]) => ({
			'data-pane-group': '',
			'data-direction': w,
			'data-pane-group-id': A
		})),
		ee = es([ce, W], ([w, A]) => ({ style: w, ...A }));
	function U() {
		const w = Se(a),
			v = zs(w).map((D) => {
				const I = D.getAttribute('data-pane-resizer-id');
				if (!I) return Ya;
				const [q, J] = Bm(w, I, Se(d));
				if (q == null || J == null) return Ya;
				const Te = sr(D, 'keydown', (ue) => {
					if (ue.defaultPrevented || ue.key !== 'Enter') return;
					ue.preventDefault();
					const Me = Se(d),
						Ae = Me.findIndex((ye) => ye.id === q);
					if (Ae < 0) return;
					const ke = Me[Ae];
					Ze(ke);
					const te = Se(u),
						de = te[Ae],
						{ collapsedSize: Re = 0, collapsible: Ce, minSize: Be = 0 } = ke.constraints;
					if (!(de != null && Ce)) return;
					const be = Gr({
						delta: Vt(de, Re) ? Be - de : Re - de,
						layout: te,
						paneConstraints: Me.map((ye) => ye.constraints),
						pivotIndices: Za(w, I),
						trigger: 'keyboard'
					});
					te !== be && u.set(be);
				});
				return () => {
					Te();
				};
			});
		return () => {
			v.forEach((D) => D());
		};
	}
	function j(w) {
		u.set(w);
	}
	function Y() {
		return Se(u);
	}
	return {
		methods: {
			collapsePane: g,
			expandPane: C,
			getSize: b,
			getPaneStyle: S,
			isCollapsed: _,
			isExpanded: O,
			registerPane: H,
			registerResizeHandle: E,
			resizePane: x,
			startDragging: k,
			stopDragging: M,
			unregisterPane: T,
			setLayout: j,
			getLayout: Y
		},
		states: {
			direction: s,
			dragState: c,
			groupId: a,
			paneGroupAttrs: ee,
			paneGroupSelectors: W,
			paneGroupStyle: ce,
			layout: u
		},
		options: n
	};
}
function Pm({ groupId: t, layout: e, paneDataArray: n }) {
	const r = zs(t);
	for (let s = 0; s < n.length - 1; s++) {
		const {
				valueMax: o,
				valueMin: i,
				valueNow: l
			} = wm({ layout: e, panesArray: n, pivotIndices: [s, s + 1] }),
			a = r[s];
		if (Dm(a)) {
			const c = n[s];
			(a.setAttribute('aria-controls', c.id),
				a.setAttribute('aria-valuemax', '' + Math.round(o)),
				a.setAttribute('aria-valuemin', '' + Math.round(i)),
				a.setAttribute('aria-valuenow', l != null ? '' + Math.round(l) : ''));
		}
	}
	return () => {
		r.forEach((s) => {
			(s.removeAttribute('aria-controls'),
				s.removeAttribute('aria-valuemax'),
				s.removeAttribute('aria-valuemin'),
				s.removeAttribute('aria-valuenow'));
		});
	};
}
function zs(t) {
	return Ps
		? Array.from(document.querySelectorAll(`[data-pane-resizer-id][data-pane-group-id="${t}"]`))
		: [];
}
function zm(t) {
	if (!Ps) return null;
	const e = document.querySelector(`[data-pane-group][data-pane-group-id="${t}"]`);
	return e || null;
}
function Ya() {}
function Bm(t, e, n) {
	var a, c;
	const r = Kl(e),
		s = zs(t),
		o = r ? s.indexOf(r) : -1,
		i = ((a = n[o]) == null ? void 0 : a.id) ?? null,
		l = ((c = n[o + 1]) == null ? void 0 : c.id) ?? null;
	return [i, l];
}
function Kl(t) {
	if (!Ps) return null;
	const e = document.querySelector(`[data-pane-resizer-id="${t}"]`);
	return e || null;
}
function pd(t, e) {
	return Ps ? (zs(t).findIndex((s) => s.getAttribute('data-pane-resizer-id') === e) ?? null) : null;
}
function Za(t, e) {
	const n = pd(t, e);
	return n != null ? [n, n + 1] : [-1, -1];
}
function Tr(t, e, n) {
	const r = t.map((c) => c.constraints),
		s = Ar(t, e),
		o = r[s],
		l = s === t.length - 1 ? [s - 1, s] : [s, s + 1],
		a = n[s];
	return { ...o, paneSize: a, pivotIndices: l };
}
function Ar(t, e) {
	return t.findIndex((n) => n.id === e.id);
}
function Xr(t, e, n) {
	e.forEach((r, s) => {
		const o = t[s];
		Ze(o);
		const { callbacks: i, constraints: l, id: a } = o,
			{ collapsedSize: c = 0, collapsible: u } = l,
			d = n[a];
		if (!(d == null || r !== d)) return;
		n[a] = r;
		const { onCollapse: f, onExpand: h, onResize: p } = i;
		(p == null || p(r, d),
			u &&
				(f || h) &&
				(h && (d == null || d === c) && r !== c && h(),
				f && (d == null || d !== c) && r === c && f()));
	});
}
function $m({ paneDataArray: t }) {
	const e = Array(t.length),
		n = t.map((o) => o.constraints);
	let r = 0,
		s = 100;
	for (let o = 0; o < t.length; o++) {
		const i = n[o];
		Ze(i);
		const { defaultSize: l } = i;
		l != null && (r++, (e[o] = l), (s -= l));
	}
	for (let o = 0; o < t.length; o++) {
		const i = n[o];
		Ze(i);
		const { defaultSize: l } = i;
		if (l != null) continue;
		const a = t.length - r,
			c = s / a;
		(r++, (e[o] = c), (s -= c));
	}
	return e;
}
function _m({ layout: t, paneConstraints: e }) {
	const n = [...t],
		r = n.reduce((o, i) => o + i, 0);
	if (n.length !== e.length)
		throw Error(`Invalid ${e.length} pane layout: ${n.map((o) => `${o}%`).join(', ')}`);
	if (!Vt(r, 100))
		for (let o = 0; o < e.length; o++) {
			const i = n[o];
			Ze(i != null);
			const l = (100 / r) * i;
			n[o] = l;
		}
	let s = 0;
	for (let o = 0; o < e.length; o++) {
		const i = n[o];
		Ze(i != null);
		const l = Dr({ paneConstraints: e, paneIndex: o, initialSize: i });
		i != l && ((s += i - l), (n[o] = l));
	}
	if (!Vt(s, 0))
		for (let o = 0; o < e.length; o++) {
			const i = n[o];
			Ze(i != null);
			const l = i + s,
				a = Dr({ paneConstraints: e, paneIndex: o, initialSize: l });
			if (i !== a && ((s -= a - i), (n[o] = a), Vt(s, 0))) break;
		}
	return n;
}
function Hm(t, e, n, r, s) {
	if (dd(t)) {
		const o = n === 'horizontal';
		let i = 0;
		t.shiftKey ? (i = 100) : s != null ? (i = s) : (i = 10);
		let l = 0;
		switch (t.key) {
			case 'ArrowDown':
				l = o ? 0 : i;
				break;
			case 'ArrowLeft':
				l = o ? -i : 0;
				break;
			case 'ArrowRight':
				l = o ? i : 0;
				break;
			case 'ArrowUp':
				l = o ? 0 : -i;
				break;
			case 'End':
				l = 100;
				break;
			case 'Home':
				l = -100;
				break;
		}
		return l;
	} else return r == null ? 0 : Fm(t, e, n, r);
}
function Fm(t, e, n, r) {
	const s = n === 'horizontal',
		o = Kl(e);
	Ze(o);
	const i = o.getAttribute('data-pane-group-id');
	Ze(i);
	const { initialCursorPosition: l } = r,
		a = md(n, t),
		c = zm(i);
	Ze(c);
	const u = c.getBoundingClientRect(),
		d = s ? u.width : u.height;
	return ((a - l) / d) * 100;
}
function md(t, e) {
	const n = t === 'horizontal';
	if (fd(e)) return n ? e.clientX : e.clientY;
	if (hd(e)) {
		const r = e.touches[0];
		return (Ze(r), n ? r.screenX : r.screenY);
	} else throw Error(`Unsupported event type "${e.type}"`);
}
const nl = Symbol('PF_GROUP_CTX');
function Vm(t) {
	const e = Lm(ud(t)),
		n = vm(e.options),
		r = { ...e, updateOption: n };
	return (Pp(nl, r), r);
}
function gd(t) {
	if (!zp(nl)) throw new Error(`${t} components must be rendered with a <PaneGroup> container`);
	return Rn(nl);
}
var Wm = ae('<div><!></div>');
function qT(t, e) {
	const n = Br(e, ['children', '$$slots', '$$events', '$$legacy']),
		r = Br(n, [
			'autoSaveId',
			'direction',
			'id',
			'keyboardResizeBy',
			'onLayoutChange',
			'storage',
			'el',
			'paneGroup',
			'style'
		]);
	en(e, !1);
	const s = () => yt(E, '$groupId', l),
		o = () => yt(O, '$paneGroupStyle', l),
		i = () => yt(H, '$paneGroupSelectors', l),
		[l, a] = ln(),
		c = We();
	let u = P(e, 'autoSaveId', 8, null),
		d = P(e, 'direction', 8),
		f = P(e, 'id', 8, null),
		h = P(e, 'keyboardResizeBy', 8, null),
		p = P(e, 'onLayoutChange', 8, null),
		m = P(e, 'storage', 8, Rr),
		g = P(e, 'el', 28, () => {}),
		b = P(e, 'paneGroup', 28, () => {}),
		S = P(e, 'style', 24, () => {});
	const {
		states: { paneGroupStyle: O, paneGroupSelectors: H, groupId: E },
		methods: { setLayout: x, getLayout: k },
		updateOption: M
	} = Vm({
		autoSaveId: u(),
		direction: d(),
		id: f(),
		keyboardResizeBy: h(),
		onLayout: p(),
		storage: m()
	});
	(b({ getLayout: k, setLayout: x, getId: () => s() }),
		$e(
			() => $(u()),
			() => {
				M('autoSaveId', u());
			}
		),
		$e(
			() => $(d()),
			() => {
				M('direction', d());
			}
		),
		$e(
			() => $(f()),
			() => {
				M('id', f());
			}
		),
		$e(
			() => $(h()),
			() => {
				M('keyboardResizeBy', h());
			}
		),
		$e(
			() => $(p()),
			() => {
				M('onLayout', p());
			}
		),
		$e(
			() => $(m()),
			() => {
				M('storage', m());
			}
		),
		$e(
			() => (o(), $(S())),
			() => {
				le(c, o() + (S() ?? ''));
			}
		),
		yn(),
		nn());
	var T = Wm();
	Lt(T, () => ({ id: s(), ...i(), style: y(c), ...r }));
	var _ = Q(T);
	(Wl(_, e, 'default', {}, null),
		G(T),
		rn(
			T,
			(C) => g(C),
			() => g()
		),
		K(t, T),
		tn(),
		a());
}
var jm = ae('<div><!></div>');
function KT(t, e) {
	const n = Br(e, ['children', '$$slots', '$$events', '$$legacy']),
		r = Br(n, [
			'collapsedSize',
			'collapsible',
			'defaultSize',
			'maxSize',
			'minSize',
			'onCollapse',
			'onExpand',
			'onResize',
			'order',
			'el',
			'pane',
			'id',
			'style'
		]);
	en(e, !1);
	const s = () => yt(k, '$getPaneStyle', i),
		o = () => yt(j, '$groupId', i),
		[i, l] = ln(),
		a = We(),
		c = We();
	let u = P(e, 'collapsedSize', 24, () => {}),
		d = P(e, 'collapsible', 24, () => {}),
		f = P(e, 'defaultSize', 24, () => {}),
		h = P(e, 'maxSize', 24, () => {}),
		p = P(e, 'minSize', 24, () => {}),
		m = P(e, 'onCollapse', 24, () => {}),
		g = P(e, 'onExpand', 24, () => {}),
		b = P(e, 'onResize', 24, () => {}),
		S = P(e, 'order', 24, () => {}),
		O = P(e, 'el', 28, () => {}),
		H = P(e, 'pane', 28, () => {}),
		E = P(e, 'id', 24, () => {}),
		x = P(e, 'style', 24, () => {});
	const {
			methods: {
				getPaneStyle: k,
				registerPane: M,
				unregisterPane: T,
				collapsePane: _,
				expandPane: C,
				getSize: ce,
				isCollapsed: W,
				isExpanded: ee,
				resizePane: U
			},
			states: { groupId: j }
		} = gd('Pane'),
		Y = Ul(E());
	let w = We();
	(H({
		collapse: () => {
			_(y(w));
		},
		expand: () => C(y(w)),
		getSize: () => ce(y(w)),
		isCollapsed: () => W(y(w)),
		isExpanded: () => ee(y(w)),
		resize: (D) => U(y(w), D),
		getId: () => Y
	}),
		Ls(
			() => (
				M(y(w)),
				() => {
					T(y(w));
				}
			)
		),
		$e(
			() => ($(m()), $(g()), $(b()), $(u()), $(d()), $(f()), $(h()), $(p()), $(E()), $(S())),
			() => {
				le(w, {
					callbacks: { onCollapse: m(), onExpand: g(), onResize: b() },
					constraints: {
						collapsedSize: u(),
						collapsible: d(),
						defaultSize: f(),
						maxSize: h(),
						minSize: p()
					},
					id: Y,
					idIsFromProps: E() !== void 0,
					order: S()
				});
			}
		),
		$e(
			() => (s(), y(w), $(f()), $(x())),
			() => {
				le(a, s()(y(w), f()) + (x() ?? ''));
			}
		),
		$e(
			() => o(),
			() => {
				le(c, { 'data-pane': '', 'data-pane-id': Y, 'data-pane-group-id': o() });
			}
		),
		yn(),
		nn());
	var A = jm();
	Lt(A, () => ({ style: y(a), ...y(c), ...r }));
	var v = Q(A);
	(Wl(v, e, 'default', {}, null),
		G(A),
		rn(
			A,
			(D) => O(D),
			() => O()
		),
		K(t, A),
		tn(),
		l());
}
function Ti(t, e) {
	let n = () => {};
	function r(s) {
		n();
		const {
			disabled: o,
			resizeHandler: i,
			isDragging: l,
			stopDragging: a,
			onDragging: c = void 0
		} = s;
		if (o || i === null || !l) return;
		const u = (h) => {
				i(h);
			},
			d = (h) => {
				i(h);
			},
			f = () => {
				(t.blur(), a(), c && c(!1));
			};
		n = Om(
			sr(document.body, 'contextmenu', f),
			sr(document.body, 'mousemove', u),
			sr(document.body, 'touchmove', u, { passive: !1 }),
			sr(document.body, 'mouseleave', d),
			sr(window, 'mouseup', f),
			sr(window, 'touchend', f)
		);
	}
	return (
		r(e),
		{
			update: r,
			onDestroy() {
				n();
			}
		}
	);
}
var Um = ae('<div><!></div>');
function JT(t, e) {
	const n = Br(e, ['children', '$$slots', '$$events', '$$legacy']),
		r = Br(n, ['disabled', 'onDraggingChange', 'tabIndex', 'el', 'id', 'style']);
	en(e, !1);
	const s = () => yt(x, '$dragState', l),
		o = () => yt(k, '$groupId', l),
		i = () => yt(E, '$direction', l),
		[l, a] = ln(),
		c = We(),
		u = We(),
		d = We();
	let f = P(e, 'disabled', 8, !1),
		h = P(e, 'onDraggingChange', 24, () => {}),
		p = P(e, 'tabIndex', 8, 0),
		m = P(e, 'el', 12, null),
		g = P(e, 'id', 24, () => {}),
		b = P(e, 'style', 24, () => {});
	const {
			methods: { registerResizeHandle: S, startDragging: O, stopDragging: H },
			states: { direction: E, dragState: x, groupId: k }
		} = gd('PaneResizer'),
		M = Ul(g());
	let T = We(!1),
		_ = We(null);
	function C() {
		var j;
		const U = m();
		U && (U.blur(), H(), (j = h()) == null || j(!1));
	}
	Ls(() => {
		f() ? le(_, null) : le(_, S(M));
	});
	function ce(U) {
		if (f() || !y(_) || U.defaultPrevented) return;
		if (['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'End', 'Home'].includes(U.key)) {
			(U.preventDefault(), y(_)(U));
			return;
		}
		if (U.key !== 'F6') return;
		U.preventDefault();
		const Y = zs(o()),
			w = pd(o(), M);
		if (w === null) return;
		const A = U.shiftKey ? (w > 0 ? w - 1 : Y.length - 1) : w + 1 < Y.length ? w + 1 : 0;
		Y[A].focus();
	}
	($e(
		() => s(),
		() => {
			var U;
			le(c, ((U = s()) == null ? void 0 : U.dragHandleId) === M);
		}
	),
		$e(
			() => $(f()),
			() => {
				f() ? le(_, null) : le(_, S(M));
			}
		),
		$e(
			() => (i(), $(b())),
			() => {
				le(
					u,
					jl({
						cursor: id(i()),
						'touch-action': 'none',
						'user-select': 'none',
						'-webkit-user-select': 'none',
						'-webkit-touch-callout': 'none'
					}) + b()
				);
			}
		),
		$e(
			() => (i(), o(), y(c), y(T), $(f())),
			() => {
				le(d, {
					'data-direction': i(),
					'data-pane-group-id': o(),
					'data-active': y(c) ? 'pointer' : y(T) ? 'keyboard' : void 0,
					'data-enabled': !f(),
					'data-pane-resizer-id': M,
					'data-pane-resizer': ''
				});
			}
		),
		yn(),
		nn());
	var W = Um();
	Lt(W, () => ({ role: 'separator', style: y(u), tabindex: p(), ...y(d), ...r }));
	var ee = Q(W);
	(Wl(ee, e, 'default', {}, null),
		G(W),
		rn(
			W,
			(U) => m(U),
			() => m()
		),
		Fp(
			W,
			(U, j) => (Ti == null ? void 0 : Ti(U, j)),
			() => ({
				disabled: f(),
				resizeHandler: y(_),
				stopDragging: H,
				isDragging: y(c),
				onDragging: h()
			})
		),
		Pn(() => Ee('keydown', W, ce)),
		Pn(() => Ee('blur', W, () => le(T, !1))),
		Pn(() => Ee('focus', W, () => le(T, !0))),
		Pn(() =>
			Ee('mousedown', W, (U) => {
				var j;
				(U.preventDefault(), O(M, U), (j = h()) == null || j(!0));
			})
		),
		Pn(() => Ee('mouseup', W, C)),
		Pn(() => Ee('touchcancel', W, C)),
		Pn(() => Ee('touchend', W, C)),
		Pn(() =>
			Ee('touchstart', W, (U) => {
				var j;
				(U.preventDefault(), O(M, U), (j = h()) == null || j(!0));
			})
		),
		K(t, W),
		tn(),
		a());
}
function GT(t, e = {}) {
	return function () {
		let r = null,
			s = null,
			o = null,
			i = null;
		return {
			onStart: (l) => {
				var a;
				((s = document.createElement('div')),
					(s.className = 'suggestion-list-container'),
					document.body.appendChild(s),
					(r = Vp({
						component: t,
						target: s,
						props: {
							char: (a = l == null ? void 0 : l.text) == null ? void 0 : a.charAt(0),
							query: l == null ? void 0 : l.query,
							command: (c) => {
								l.command({ id: c.id, label: c.label });
							},
							...e
						},
						context: new Map([['i18n', e == null ? void 0 : e.i18n]])
					})),
					(i = document.createElement('div')),
					Object.assign(i.style, {
						position: 'fixed',
						left: '0px',
						top: '0px',
						width: '0px',
						height: '0px'
					}),
					document.body.appendChild(i),
					(o = Wp(i, {
						getReferenceClientRect: l.clientRect,
						appendTo: () => document.body,
						content: s,
						interactive: !0,
						trigger: 'manual',
						theme: 'transparent',
						placement: 'top-start',
						offset: [-10, -2],
						arrow: !1,
						popperOptions: {
							strategy: 'fixed',
							modifiers: [
								{
									name: 'preventOverflow',
									options: { boundary: 'viewport', altAxis: !0, tether: !0, padding: 8 }
								},
								{
									name: 'flip',
									options: {
										boundary: 'viewport',
										fallbackPlacements: ['top-end', 'bottom-start', 'bottom-end']
									}
								},
								{ name: 'computeStyles', options: { adaptive: !0 } }
							]
						},
						interactiveBorder: 8
					})),
					o == null || o.show());
			},
			onUpdate: (l) => {
				r &&
					(r.$set({
						query: l.query,
						command: (a) => {
							l.command({ id: a.id, label: a.label });
						}
					}),
					l.clientRect && o && o.setProps({ getReferenceClientRect: l.clientRect }));
			},
			onKeyDown: (l) => {
				var a;
				return (
					((a = r == null ? void 0 : r._onKeyDown) == null ? void 0 : a.call(r, l.event)) ?? !1
				);
			},
			onExit: () => {
				(o == null || o.destroy(), (o = null));
				try {
					r == null || r.$destroy();
				} catch {}
				((r = null),
					s != null && s.parentNode && s.parentNode.removeChild(s),
					(s = null),
					i != null && i.parentNode && i.parentNode.removeChild(i),
					(i = null));
			}
		};
	};
}
var qm = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M2 19V9C2 7.89543 2.89543 7 4 7H4.5C5.12951 7 5.72229 6.70361 6.1 6.2L8.32 3.24C8.43331 3.08892 8.61115 3 8.8 3H15.2C15.3889 3 15.5667 3.08892 15.68 3.24L17.9 6.2C18.2777 6.70361 18.8705 7 19.5 7H20C21.1046 7 22 7.89543 22 9V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
);
function XT(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = qm();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var Km = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21.4383 11.6622L12.2483 20.8522C11.1225 21.9781 9.59552 22.6106 8.00334 22.6106C6.41115 22.6106 4.88418 21.9781 3.75834 20.8522C2.63249 19.7264 2 18.1994 2 16.6072C2 15.015 2.63249 13.4881 3.75834 12.3622L12.9483 3.17222C13.6989 2.42166 14.7169 2 15.7783 2C16.8398 2 17.8578 2.42166 18.6083 3.17222C19.3589 3.92279 19.7806 4.94077 19.7806 6.00222C19.7806 7.06368 19.3589 8.08166 18.6083 8.83222L9.40834 18.0222C9.03306 18.3975 8.52406 18.6083 7.99334 18.6083C7.46261 18.6083 6.95362 18.3975 6.57834 18.0222C6.20306 17.6469 5.99222 17.138 5.99222 16.6072C5.99222 16.0765 6.20306 15.5675 6.57834 15.1922L15.0683 6.71222" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
);
function QT(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = Km();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
function Jm(t) {
	for (var e = 1; e < arguments.length; e++) {
		var n = arguments[e];
		for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r]);
	}
	return t;
}
function rl(t, e) {
	return Array(e + 1).join(t);
}
function yd(t) {
	return t.replace(/^\n*/, '');
}
function bd(t) {
	for (
		var e = t.length;
		e > 0 &&
		t[e - 1] ===
			`
`;
	)
		e--;
	return t.substring(0, e);
}
function vd(t) {
	return bd(yd(t));
}
var Gm = [
	'ADDRESS',
	'ARTICLE',
	'ASIDE',
	'AUDIO',
	'BLOCKQUOTE',
	'BODY',
	'CANVAS',
	'CENTER',
	'DD',
	'DIR',
	'DIV',
	'DL',
	'DT',
	'FIELDSET',
	'FIGCAPTION',
	'FIGURE',
	'FOOTER',
	'FORM',
	'FRAMESET',
	'H1',
	'H2',
	'H3',
	'H4',
	'H5',
	'H6',
	'HEADER',
	'HGROUP',
	'HR',
	'HTML',
	'ISINDEX',
	'LI',
	'MAIN',
	'MENU',
	'NAV',
	'NOFRAMES',
	'NOSCRIPT',
	'OL',
	'OUTPUT',
	'P',
	'PRE',
	'SECTION',
	'TABLE',
	'TBODY',
	'TD',
	'TFOOT',
	'TH',
	'THEAD',
	'TR',
	'UL'
];
function Jl(t) {
	return Gl(t, Gm);
}
var kd = [
	'AREA',
	'BASE',
	'BR',
	'COL',
	'COMMAND',
	'EMBED',
	'HR',
	'IMG',
	'INPUT',
	'KEYGEN',
	'LINK',
	'META',
	'PARAM',
	'SOURCE',
	'TRACK',
	'WBR'
];
function xd(t) {
	return Gl(t, kd);
}
function Xm(t) {
	return Sd(t, kd);
}
var wd = [
	'A',
	'TABLE',
	'THEAD',
	'TBODY',
	'TFOOT',
	'TH',
	'TD',
	'IFRAME',
	'SCRIPT',
	'AUDIO',
	'VIDEO'
];
function Qm(t) {
	return Gl(t, wd);
}
function Ym(t) {
	return Sd(t, wd);
}
function Gl(t, e) {
	return e.indexOf(t.nodeName) >= 0;
}
function Sd(t, e) {
	return (
		t.getElementsByTagName &&
		e.some(function (n) {
			return t.getElementsByTagName(n).length;
		})
	);
}
var It = {};
It.paragraph = {
	filter: 'p',
	replacement: function (t) {
		return (
			`

` +
			t +
			`

`
		);
	}
};
It.lineBreak = {
	filter: 'br',
	replacement: function (t, e, n) {
		return (
			n.br +
			`
`
		);
	}
};
It.heading = {
	filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
	replacement: function (t, e, n) {
		var r = Number(e.nodeName.charAt(1));
		if (n.headingStyle === 'setext' && r < 3) {
			var s = rl(r === 1 ? '=' : '-', t.length);
			return (
				`

` +
				t +
				`
` +
				s +
				`

`
			);
		} else
			return (
				`

` +
				rl('#', r) +
				' ' +
				t +
				`

`
			);
	}
};
It.blockquote = {
	filter: 'blockquote',
	replacement: function (t) {
		return (
			(t = vd(t).replace(/^/gm, '> ')),
			`

` +
				t +
				`

`
		);
	}
};
It.list = {
	filter: ['ul', 'ol'],
	replacement: function (t, e) {
		var n = e.parentNode;
		return n.nodeName === 'LI' && n.lastElementChild === e
			? `
` + t
			: `

` +
					t +
					`

`;
	}
};
It.listItem = {
	filter: 'li',
	replacement: function (t, e, n) {
		var r = n.bulletListMarker + '   ',
			s = e.parentNode;
		if (s.nodeName === 'OL') {
			var o = s.getAttribute('start'),
				i = Array.prototype.indexOf.call(s.children, e);
			r = (o ? Number(o) + i : i + 1) + '.  ';
		}
		var l = /\n$/.test(t);
		return (
			(t =
				vd(t) +
				(l
					? `
`
					: '')),
			(t = t.replace(
				/\n/gm,
				`
` + ' '.repeat(r.length)
			)),
			r +
				t +
				(e.nextSibling
					? `
`
					: '')
		);
	}
};
It.indentedCodeBlock = {
	filter: function (t, e) {
		return (
			e.codeBlockStyle === 'indented' &&
			t.nodeName === 'PRE' &&
			t.firstChild &&
			t.firstChild.nodeName === 'CODE'
		);
	},
	replacement: function (t, e, n) {
		return (
			`

    ` +
			e.firstChild.textContent.replace(
				/\n/g,
				`
    `
			) +
			`

`
		);
	}
};
It.fencedCodeBlock = {
	filter: function (t, e) {
		return (
			e.codeBlockStyle === 'fenced' &&
			t.nodeName === 'PRE' &&
			t.firstChild &&
			t.firstChild.nodeName === 'CODE'
		);
	},
	replacement: function (t, e, n) {
		for (
			var r = e.firstChild.getAttribute('class') || '',
				s = (r.match(/language-(\S+)/) || [null, ''])[1],
				o = e.firstChild.textContent,
				i = n.fence.charAt(0),
				l = 3,
				a = new RegExp('^' + i + '{3,}', 'gm'),
				c;
			(c = a.exec(o));
		)
			c[0].length >= l && (l = c[0].length + 1);
		var u = rl(i, l);
		return (
			`

` +
			u +
			s +
			`
` +
			o.replace(/\n$/, '') +
			`
` +
			u +
			`

`
		);
	}
};
It.horizontalRule = {
	filter: 'hr',
	replacement: function (t, e, n) {
		return (
			`

` +
			n.hr +
			`

`
		);
	}
};
It.inlineLink = {
	filter: function (t, e) {
		return e.linkStyle === 'inlined' && t.nodeName === 'A' && t.getAttribute('href');
	},
	replacement: function (t, e) {
		var n = e.getAttribute('href');
		n && (n = n.replace(/([()])/g, '\\$1'));
		var r = mo(e.getAttribute('title'));
		return (r && (r = ' "' + r.replace(/"/g, '\\"') + '"'), '[' + t + '](' + n + r + ')');
	}
};
It.referenceLink = {
	filter: function (t, e) {
		return e.linkStyle === 'referenced' && t.nodeName === 'A' && t.getAttribute('href');
	},
	replacement: function (t, e, n) {
		var r = e.getAttribute('href'),
			s = mo(e.getAttribute('title'));
		s && (s = ' "' + s + '"');
		var o, i;
		switch (n.linkReferenceStyle) {
			case 'collapsed':
				((o = '[' + t + '][]'), (i = '[' + t + ']: ' + r + s));
				break;
			case 'shortcut':
				((o = '[' + t + ']'), (i = '[' + t + ']: ' + r + s));
				break;
			default:
				var l = this.references.length + 1;
				((o = '[' + t + '][' + l + ']'), (i = '[' + l + ']: ' + r + s));
		}
		return (this.references.push(i), o);
	},
	references: [],
	append: function (t) {
		var e = '';
		return (
			this.references.length &&
				((e =
					`

` +
					this.references.join(`
`) +
					`

`),
				(this.references = [])),
			e
		);
	}
};
It.emphasis = {
	filter: ['em', 'i'],
	replacement: function (t, e, n) {
		return t.trim() ? n.emDelimiter + t + n.emDelimiter : '';
	}
};
It.strong = {
	filter: ['strong', 'b'],
	replacement: function (t, e, n) {
		return t.trim() ? n.strongDelimiter + t + n.strongDelimiter : '';
	}
};
It.code = {
	filter: function (t) {
		var e = t.previousSibling || t.nextSibling,
			n = t.parentNode.nodeName === 'PRE' && !e;
		return t.nodeName === 'CODE' && !n;
	},
	replacement: function (t) {
		if (!t) return '';
		t = t.replace(/\r?\n|\r/g, ' ');
		for (
			var e = /^`|^ .*?[^ ].* $|`$/.test(t) ? ' ' : '', n = '`', r = t.match(/`+/gm) || [];
			r.indexOf(n) !== -1;
		)
			n = n + '`';
		return n + e + t + e + n;
	}
};
It.image = {
	filter: 'img',
	replacement: function (t, e) {
		var n = mo(e.getAttribute('alt')),
			r = e.getAttribute('src') || '',
			s = mo(e.getAttribute('title')),
			o = s ? ' "' + s + '"' : '';
		return r ? '![' + n + '](' + r + o + ')' : '';
	}
};
function mo(t) {
	return t
		? t.replace(
				/(\n+\s*)+/g,
				`
`
			)
		: '';
}
function Cd(t) {
	((this.options = t),
		(this._keep = []),
		(this._remove = []),
		(this.blankRule = { replacement: t.blankReplacement }),
		(this.keepReplacement = t.keepReplacement),
		(this.defaultRule = { replacement: t.defaultReplacement }),
		(this.array = []));
	for (var e in t.rules) this.array.push(t.rules[e]);
}
Cd.prototype = {
	add: function (t, e) {
		this.array.unshift(e);
	},
	keep: function (t) {
		this._keep.unshift({ filter: t, replacement: this.keepReplacement });
	},
	remove: function (t) {
		this._remove.unshift({
			filter: t,
			replacement: function () {
				return '';
			}
		});
	},
	forNode: function (t) {
		if (t.isBlank) return this.blankRule;
		var e;
		return (e = Mi(this.array, t, this.options)) ||
			(e = Mi(this._keep, t, this.options)) ||
			(e = Mi(this._remove, t, this.options))
			? e
			: this.defaultRule;
	},
	forEach: function (t) {
		for (var e = 0; e < this.array.length; e++) t(this.array[e], e);
	}
};
function Mi(t, e, n) {
	for (var r = 0; r < t.length; r++) {
		var s = t[r];
		if (Zm(s, e, n)) return s;
	}
}
function Zm(t, e, n) {
	var r = t.filter;
	if (typeof r == 'string') {
		if (r === e.nodeName.toLowerCase()) return !0;
	} else if (Array.isArray(r)) {
		if (r.indexOf(e.nodeName.toLowerCase()) > -1) return !0;
	} else if (typeof r == 'function') {
		if (r.call(t, e, n)) return !0;
	} else throw new TypeError('`filter` needs to be a string, array, or function');
}
function eg(t) {
	var e = t.element,
		n = t.isBlock,
		r = t.isVoid,
		s =
			t.isPre ||
			function (d) {
				return d.nodeName === 'PRE';
			};
	if (!(!e.firstChild || s(e))) {
		for (var o = null, i = !1, l = null, a = ec(l, e, s); a !== e; ) {
			if (a.nodeType === 3 || a.nodeType === 4) {
				var c = a.data.replace(/[ \r\n\t]+/g, ' ');
				if (((!o || / $/.test(o.data)) && !i && c[0] === ' ' && (c = c.substr(1)), !c)) {
					a = Ei(a);
					continue;
				}
				((a.data = c), (o = a));
			} else if (a.nodeType === 1)
				n(a) || a.nodeName === 'BR'
					? (o && (o.data = o.data.replace(/ $/, '')), (o = null), (i = !1))
					: r(a) || s(a)
						? ((o = null), (i = !0))
						: o && (i = !1);
			else {
				a = Ei(a);
				continue;
			}
			var u = ec(l, a, s);
			((l = a), (a = u));
		}
		o && ((o.data = o.data.replace(/ $/, '')), o.data || Ei(o));
	}
}
function Ei(t) {
	var e = t.nextSibling || t.parentNode;
	return (t.parentNode.removeChild(t), e);
}
function ec(t, e, n) {
	return (t && t.parentNode === e) || n(e)
		? e.nextSibling || e.parentNode
		: e.firstChild || e.nextSibling || e.parentNode;
}
var Xl = typeof window < 'u' ? window : {};
function tg() {
	var t = Xl.DOMParser,
		e = !1;
	try {
		new t().parseFromString('', 'text/html') && (e = !0);
	} catch {}
	return e;
}
function ng() {
	var t = function () {};
	return (
		rg()
			? (t.prototype.parseFromString = function (e) {
					var n = new window.ActiveXObject('htmlfile');
					return ((n.designMode = 'on'), n.open(), n.write(e), n.close(), n);
				})
			: (t.prototype.parseFromString = function (e) {
					var n = document.implementation.createHTMLDocument('');
					return (n.open(), n.write(e), n.close(), n);
				}),
		t
	);
}
function rg() {
	var t = !1;
	try {
		document.implementation.createHTMLDocument('').open();
	} catch {
		Xl.ActiveXObject && (t = !0);
	}
	return t;
}
var sg = tg() ? Xl.DOMParser : ng();
function og(t, e) {
	var n;
	if (typeof t == 'string') {
		var r = ig().parseFromString(
			'<x-turndown id="turndown-root">' + t + '</x-turndown>',
			'text/html'
		);
		n = r.getElementById('turndown-root');
	} else n = t.cloneNode(!0);
	return (eg({ element: n, isBlock: Jl, isVoid: xd, isPre: e.preformattedCode ? lg : null }), n);
}
var Ai;
function ig() {
	return ((Ai = Ai || new sg()), Ai);
}
function lg(t) {
	return t.nodeName === 'PRE' || t.nodeName === 'CODE';
}
function ag(t, e) {
	return (
		(t.isBlock = Jl(t)),
		(t.isCode = t.nodeName === 'CODE' || t.parentNode.isCode),
		(t.isBlank = cg(t)),
		(t.flankingWhitespace = ug(t, e)),
		t
	);
}
function cg(t) {
	return !xd(t) && !Qm(t) && /^\s*$/i.test(t.textContent) && !Xm(t) && !Ym(t);
}
function ug(t, e) {
	if (t.isBlock || (e.preformattedCode && t.isCode)) return { leading: '', trailing: '' };
	var n = dg(t.textContent);
	return (
		n.leadingAscii && tc('left', t, e) && (n.leading = n.leadingNonAscii),
		n.trailingAscii && tc('right', t, e) && (n.trailing = n.trailingNonAscii),
		{ leading: n.leading, trailing: n.trailing }
	);
}
function dg(t) {
	var e = t.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);
	return {
		leading: e[1],
		leadingAscii: e[2],
		leadingNonAscii: e[3],
		trailing: e[4],
		trailingNonAscii: e[5],
		trailingAscii: e[6]
	};
}
function tc(t, e, n) {
	var r, s, o;
	return (
		t === 'left' ? ((r = e.previousSibling), (s = / $/)) : ((r = e.nextSibling), (s = /^ /)),
		r &&
			(r.nodeType === 3
				? (o = s.test(r.nodeValue))
				: n.preformattedCode && r.nodeName === 'CODE'
					? (o = !1)
					: r.nodeType === 1 && !Jl(r) && (o = s.test(r.textContent))),
		o
	);
}
var fg = Array.prototype.reduce,
	hg = [
		[/\\/g, '\\\\'],
		[/\*/g, '\\*'],
		[/^-/g, '\\-'],
		[/^\+ /g, '\\+ '],
		[/^(=+)/g, '\\$1'],
		[/^(#{1,6}) /g, '\\$1 '],
		[/`/g, '\\`'],
		[/^~~~/g, '\\~~~'],
		[/\[/g, '\\['],
		[/\]/g, '\\]'],
		[/^>/g, '\\>'],
		[/_/g, '\\_'],
		[/^(\d+)\. /g, '$1\\. ']
	];
function go(t) {
	if (!(this instanceof go)) return new go(t);
	var e = {
		rules: It,
		headingStyle: 'setext',
		hr: '* * *',
		bulletListMarker: '*',
		codeBlockStyle: 'indented',
		fence: '```',
		emDelimiter: '_',
		strongDelimiter: '**',
		linkStyle: 'inlined',
		linkReferenceStyle: 'full',
		br: '  ',
		preformattedCode: !1,
		blankReplacement: function (n, r) {
			return r.isBlock
				? `

`
				: '';
		},
		keepReplacement: function (n, r) {
			return r.isBlock
				? `

` +
						r.outerHTML +
						`

`
				: r.outerHTML;
		},
		defaultReplacement: function (n, r) {
			return r.isBlock
				? `

` +
						n +
						`

`
				: n;
		}
	};
	((this.options = Jm({}, e, t)), (this.rules = new Cd(this.options)));
}
go.prototype = {
	turndown: function (t) {
		if (!gg(t)) throw new TypeError(t + ' is not a string, or an element/document/fragment node.');
		if (t === '') return '';
		var e = Td.call(this, new og(t, this.options));
		return pg.call(this, e);
	},
	use: function (t) {
		if (Array.isArray(t)) for (var e = 0; e < t.length; e++) this.use(t[e]);
		else if (typeof t == 'function') t(this);
		else throw new TypeError('plugin must be a Function or an Array of Functions');
		return this;
	},
	addRule: function (t, e) {
		return (this.rules.add(t, e), this);
	},
	keep: function (t) {
		return (this.rules.keep(t), this);
	},
	remove: function (t) {
		return (this.rules.remove(t), this);
	},
	escape: function (t) {
		return hg.reduce(function (e, n) {
			return e.replace(n[0], n[1]);
		}, t);
	}
};
function Td(t) {
	var e = this;
	return fg.call(
		t.childNodes,
		function (n, r) {
			r = new ag(r, e.options);
			var s = '';
			return (
				r.nodeType === 3
					? (s = r.isCode ? r.nodeValue : e.escape(r.nodeValue))
					: r.nodeType === 1 && (s = mg.call(e, r)),
				Md(n, s)
			);
		},
		''
	);
}
function pg(t) {
	var e = this;
	return (
		this.rules.forEach(function (n) {
			typeof n.append == 'function' && (t = Md(t, n.append(e.options)));
		}),
		t.replace(/^[\t\r\n]+/, '').replace(/[\t\r\n\s]+$/, '')
	);
}
function mg(t) {
	var e = this.rules.forNode(t),
		n = Td.call(this, t),
		r = t.flankingWhitespace;
	return (
		(r.leading || r.trailing) && (n = n.trim()),
		r.leading + e.replacement(n, t, this.options) + r.trailing
	);
}
function Md(t, e) {
	var n = bd(t),
		r = yd(e),
		s = Math.max(t.length - n.length, e.length - r.length),
		o = `

`.substring(0, s);
	return n + o + r;
}
function gg(t) {
	return (
		t != null &&
		(typeof t == 'string' ||
			(t.nodeType && (t.nodeType === 1 || t.nodeType === 9 || t.nodeType === 11)))
	);
}
var jr = {};
Object.defineProperty(jr, '__esModule', { value: !0 });
var nc = /highlight-(?:text|source)-([a-z0-9]+)/;
function Ed(t) {
	t.addRule('highlightedCodeBlock', {
		filter: function (e) {
			var n = e.firstChild;
			return e.nodeName === 'DIV' && nc.test(e.className) && n && n.nodeName === 'PRE';
		},
		replacement: function (e, n, r) {
			var s = n.className || '',
				o = (s.match(nc) || [null, ''])[1];
			return (
				`

` +
				r.fence +
				o +
				`
` +
				n.firstChild.textContent +
				`
` +
				r.fence +
				`

`
			);
		}
	});
}
function Ad(t) {
	t.addRule('strikethrough', {
		filter: ['del', 's', 'strike'],
		replacement: function (e) {
			return '~~' + e + '~~';
		}
	});
}
var yg = Array.prototype.indexOf,
	bg = Array.prototype.every,
	Xn = {},
	vg = { left: ':---', right: '---:', center: ':---:' };
let sl = null,
	Nd = null;
const rc = new WeakMap();
function kg(t) {
	return t ? (t.getAttribute('align') || t.style.textAlign || '').toLowerCase() : '';
}
function Od(t) {
	return t ? vg[t] : '---';
}
function Id(t, e) {
	for (var n = { left: 0, right: 0, center: 0, '': 0 }, r = '', s = 0; s < t.rows.length; ++s) {
		var o = t.rows[s];
		if (e < o.childNodes.length) {
			var i = kg(o.childNodes[e]);
			(++n[i], n[i] > n[r] && (r = i));
		}
	}
	return r;
}
Xn.tableCell = {
	filter: ['th', 'td'],
	replacement: function (t, e) {
		return Ql(Pd(e)) ? t : Dd(t, e);
	}
};
Xn.tableRow = {
	filter: 'tr',
	replacement: function (t, e) {
		const n = Pd(e);
		if (Ql(n)) return t;
		var r = '';
		if (xg(e)) {
			const i = zd(n);
			for (var s = 0; s < i; s++) {
				const l = s < e.childNodes.length ? e.childNodes[s] : null;
				var o = Od(Id(n, s));
				r += Dd(o, l, s);
			}
		}
		return (
			`
` +
			t +
			(r
				? `
` + r
				: '')
		);
	}
};
Xn.table = {
	filter: function (t, e) {
		return t.nodeName === 'TABLE';
	},
	replacement: function (t, e) {
		if (Ld(e, Nd)) {
			let l = e.outerHTML,
				a = Cg(e);
			return a === null || !a.classList.contains('joplin-table-wrapper')
				? `

<div class="joplin-table-wrapper">${l}</div>

`
				: l;
		} else {
			if (Ql(e)) return t;
			t = t.replace(
				/\n+/g,
				`
`
			);
			var n = t.trim().split(`
`);
			n.length >= 2 && (n = n[1]);
			var r = /\| :?---/.test(n),
				s = zd(e),
				o = '';
			if (s && !r) {
				o =
					'|' +
					'     |'.repeat(s) +
					`
|`;
				for (var i = 0; i < s; ++i) o += ' ' + Od(Id(e, i)) + ' |';
			}
			const l = (e.caption && e.caption.textContent) || '',
				a = l
					? `${l}

`
					: '',
				c = `${o}${t}`.trimStart();
			return `

${a}${c}

`;
		}
	}
};
Xn.tableCaption = { filter: ['caption'], replacement: () => '' };
Xn.tableColgroup = { filter: ['colgroup', 'col'], replacement: () => '' };
Xn.tableSection = {
	filter: ['thead', 'tbody', 'tfoot'],
	replacement: function (t) {
		return t;
	}
};
function xg(t) {
	var e = t.parentNode;
	return (
		e.nodeName === 'THEAD' ||
		(e.firstChild === t &&
			(e.nodeName === 'TABLE' || wg(e)) &&
			bg.call(t.childNodes, function (n) {
				return n.nodeName === 'TH';
			}))
	);
}
function wg(t) {
	var e = t.previousSibling;
	return t.nodeName === 'TBODY' && (!e || (e.nodeName === 'THEAD' && /^\s*$/i.test(e.textContent)));
}
function Dd(t, e = null, n = null) {
	n === null && (n = yg.call(e.parentNode.childNodes, e));
	var r = ' ';
	n === 0 && (r = '| ');
	let s = t.trim().replace(/\n\r/g, '<br>').replace(/\n/g, '<br>');
	for (s = s.replace(/\|+/g, '\\|'); s.length < 3; ) s += ' ';
	return (e && (s = Tg(s, e, ' ')), r + s + ' |');
}
function Rd(t) {
	if (!t.childNodes) return !1;
	for (let e = 0; e < t.childNodes.length; e++) {
		const n = t.childNodes[e];
		if (n.nodeName === 'TABLE' || Rd(n)) return !0;
	}
	return !1;
}
const ol = (t, e) => {
		if (!t.childNodes) return !1;
		for (let n = 0; n < t.childNodes.length; n++) {
			const r = t.childNodes[n];
			if ((e === 'code' && sl && sl(r)) || e.includes(r.nodeName) || ol(r, e)) return !0;
		}
		return !1;
	},
	Ld = (t, e) => {
		const n = ['UL', 'OL', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'HR', 'BLOCKQUOTE'];
		return (e.preserveNestedTables && n.push('TABLE'), ol(t, 'code') || ol(t, n));
	};
function Ql(t) {
	const e = rc.get(t);
	if (e !== void 0) return e;
	const n = Sg(t);
	return (rc.set(t, n), n);
}
function Sg(t) {
	return !!(!t || !t.rows || (t.rows.length === 1 && t.rows[0].childNodes.length <= 1) || Rd(t));
}
function Cg(t) {
	let e = t.parentNode;
	for (; e.nodeName !== 'DIV'; ) if (((e = e.parentNode), !e)) return null;
	return e;
}
function Pd(t) {
	let e = t.parentNode;
	for (; e.nodeName !== 'TABLE'; ) if (((e = e.parentNode), !e)) return null;
	return e;
}
function Tg(t, e, n) {
	const r = e.getAttribute('colspan') || 1;
	for (let s = 1; s < r; s++) t += ' | ' + n.repeat(3);
	return t;
}
function zd(t) {
	let e = 0;
	for (let n = 0; n < t.rows.length; n++) {
		const s = t.rows[n].childNodes.length;
		s > e && (e = s);
	}
	return e;
}
function Bd(t) {
	((sl = t.isCodeBlock),
		(Nd = t.options),
		t.keep(function (n) {
			return !!(n.nodeName === 'TABLE' && Ld(n, t.options));
		}));
	for (var e in Xn) t.addRule(e, Xn[e]);
}
function $d(t) {
	t.addRule('taskListItems', {
		filter: function (e) {
			const n = e.parentNode,
				r = n.parentNode;
			return (
				e.type === 'checkbox' &&
				(n.nodeName === 'LI' || (n.nodeName === 'LABEL' && r && r.nodeName === 'LI'))
			);
		},
		replacement: function (e, n) {
			return (n.checked ? '[x]' : '[ ]') + ' ';
		}
	});
}
function Mg(t) {
	t.use([Ed, Ad, Bd, $d]);
}
var Eg = (jr.gfm = Mg);
jr.highlightedCodeBlock = Ed;
jr.strikethrough = Ad;
jr.tables = Bd;
jr.taskListItems = $d;
function xt(t) {
	this.content = t;
}
xt.prototype = {
	constructor: xt,
	find: function (t) {
		for (var e = 0; e < this.content.length; e += 2) if (this.content[e] === t) return e;
		return -1;
	},
	get: function (t) {
		var e = this.find(t);
		return e == -1 ? void 0 : this.content[e + 1];
	},
	update: function (t, e, n) {
		var r = n && n != t ? this.remove(n) : this,
			s = r.find(t),
			o = r.content.slice();
		return (s == -1 ? o.push(n || t, e) : ((o[s + 1] = e), n && (o[s] = n)), new xt(o));
	},
	remove: function (t) {
		var e = this.find(t);
		if (e == -1) return this;
		var n = this.content.slice();
		return (n.splice(e, 2), new xt(n));
	},
	addToStart: function (t, e) {
		return new xt([t, e].concat(this.remove(t).content));
	},
	addToEnd: function (t, e) {
		var n = this.remove(t).content.slice();
		return (n.push(t, e), new xt(n));
	},
	addBefore: function (t, e, n) {
		var r = this.remove(e),
			s = r.content.slice(),
			o = r.find(t);
		return (s.splice(o == -1 ? s.length : o, 0, e, n), new xt(s));
	},
	forEach: function (t) {
		for (var e = 0; e < this.content.length; e += 2) t(this.content[e], this.content[e + 1]);
	},
	prepend: function (t) {
		return ((t = xt.from(t)), t.size ? new xt(t.content.concat(this.subtract(t).content)) : this);
	},
	append: function (t) {
		return ((t = xt.from(t)), t.size ? new xt(this.subtract(t).content.concat(t.content)) : this);
	},
	subtract: function (t) {
		var e = this;
		t = xt.from(t);
		for (var n = 0; n < t.content.length; n += 2) e = e.remove(t.content[n]);
		return e;
	},
	toObject: function () {
		var t = {};
		return (
			this.forEach(function (e, n) {
				t[e] = n;
			}),
			t
		);
	},
	get size() {
		return this.content.length >> 1;
	}
};
xt.from = function (t) {
	if (t instanceof xt) return t;
	var e = [];
	if (t) for (var n in t) e.push(n, t[n]);
	return new xt(e);
};
function _d(t, e, n) {
	for (let r = 0; ; r++) {
		if (r == t.childCount || r == e.childCount) return t.childCount == e.childCount ? null : n;
		let s = t.child(r),
			o = e.child(r);
		if (s == o) {
			n += s.nodeSize;
			continue;
		}
		if (!s.sameMarkup(o)) return n;
		if (s.isText && s.text != o.text) {
			for (let i = 0; s.text[i] == o.text[i]; i++) n++;
			return n;
		}
		if (s.content.size || o.content.size) {
			let i = _d(s.content, o.content, n + 1);
			if (i != null) return i;
		}
		n += s.nodeSize;
	}
}
function Hd(t, e, n, r) {
	for (let s = t.childCount, o = e.childCount; ; ) {
		if (s == 0 || o == 0) return s == o ? null : { a: n, b: r };
		let i = t.child(--s),
			l = e.child(--o),
			a = i.nodeSize;
		if (i == l) {
			((n -= a), (r -= a));
			continue;
		}
		if (!i.sameMarkup(l)) return { a: n, b: r };
		if (i.isText && i.text != l.text) {
			let c = 0,
				u = Math.min(i.text.length, l.text.length);
			for (; c < u && i.text[i.text.length - c - 1] == l.text[l.text.length - c - 1]; )
				(c++, n--, r--);
			return { a: n, b: r };
		}
		if (i.content.size || l.content.size) {
			let c = Hd(i.content, l.content, n - 1, r - 1);
			if (c) return c;
		}
		((n -= a), (r -= a));
	}
}
class z {
	constructor(e, n) {
		if (((this.content = e), (this.size = n || 0), n == null))
			for (let r = 0; r < e.length; r++) this.size += e[r].nodeSize;
	}
	nodesBetween(e, n, r, s = 0, o) {
		for (let i = 0, l = 0; l < n; i++) {
			let a = this.content[i],
				c = l + a.nodeSize;
			if (c > e && r(a, s + l, o || null, i) !== !1 && a.content.size) {
				let u = l + 1;
				a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, n - u), r, s + u);
			}
			l = c;
		}
	}
	descendants(e) {
		this.nodesBetween(0, this.size, e);
	}
	textBetween(e, n, r, s) {
		let o = '',
			i = !0;
		return (
			this.nodesBetween(
				e,
				n,
				(l, a) => {
					let c = l.isText
						? l.text.slice(Math.max(e, a) - a, n - a)
						: l.isLeaf
							? s
								? typeof s == 'function'
									? s(l)
									: s
								: l.type.spec.leafText
									? l.type.spec.leafText(l)
									: ''
							: '';
					(l.isBlock && ((l.isLeaf && c) || l.isTextblock) && r && (i ? (i = !1) : (o += r)),
						(o += c));
				},
				0
			),
			o
		);
	}
	append(e) {
		if (!e.size) return this;
		if (!this.size) return e;
		let n = this.lastChild,
			r = e.firstChild,
			s = this.content.slice(),
			o = 0;
		for (
			n.isText && n.sameMarkup(r) && ((s[s.length - 1] = n.withText(n.text + r.text)), (o = 1));
			o < e.content.length;
			o++
		)
			s.push(e.content[o]);
		return new z(s, this.size + e.size);
	}
	cut(e, n = this.size) {
		if (e == 0 && n == this.size) return this;
		let r = [],
			s = 0;
		if (n > e)
			for (let o = 0, i = 0; i < n; o++) {
				let l = this.content[o],
					a = i + l.nodeSize;
				(a > e &&
					((i < e || a > n) &&
						(l.isText
							? (l = l.cut(Math.max(0, e - i), Math.min(l.text.length, n - i)))
							: (l = l.cut(Math.max(0, e - i - 1), Math.min(l.content.size, n - i - 1)))),
					r.push(l),
					(s += l.nodeSize)),
					(i = a));
			}
		return new z(r, s);
	}
	cutByIndex(e, n) {
		return e == n
			? z.empty
			: e == 0 && n == this.content.length
				? this
				: new z(this.content.slice(e, n));
	}
	replaceChild(e, n) {
		let r = this.content[e];
		if (r == n) return this;
		let s = this.content.slice(),
			o = this.size + n.nodeSize - r.nodeSize;
		return ((s[e] = n), new z(s, o));
	}
	addToStart(e) {
		return new z([e].concat(this.content), this.size + e.nodeSize);
	}
	addToEnd(e) {
		return new z(this.content.concat(e), this.size + e.nodeSize);
	}
	eq(e) {
		if (this.content.length != e.content.length) return !1;
		for (let n = 0; n < this.content.length; n++) if (!this.content[n].eq(e.content[n])) return !1;
		return !0;
	}
	get firstChild() {
		return this.content.length ? this.content[0] : null;
	}
	get lastChild() {
		return this.content.length ? this.content[this.content.length - 1] : null;
	}
	get childCount() {
		return this.content.length;
	}
	child(e) {
		let n = this.content[e];
		if (!n) throw new RangeError('Index ' + e + ' out of range for ' + this);
		return n;
	}
	maybeChild(e) {
		return this.content[e] || null;
	}
	forEach(e) {
		for (let n = 0, r = 0; n < this.content.length; n++) {
			let s = this.content[n];
			(e(s, r, n), (r += s.nodeSize));
		}
	}
	findDiffStart(e, n = 0) {
		return _d(this, e, n);
	}
	findDiffEnd(e, n = this.size, r = e.size) {
		return Hd(this, e, n, r);
	}
	findIndex(e) {
		if (e == 0) return qs(0, e);
		if (e == this.size) return qs(this.content.length, e);
		if (e > this.size || e < 0) throw new RangeError(`Position ${e} outside of fragment (${this})`);
		for (let n = 0, r = 0; ; n++) {
			let s = this.child(n),
				o = r + s.nodeSize;
			if (o >= e) return o == e ? qs(n + 1, o) : qs(n, r);
			r = o;
		}
	}
	toString() {
		return '<' + this.toStringInner() + '>';
	}
	toStringInner() {
		return this.content.join(', ');
	}
	toJSON() {
		return this.content.length ? this.content.map((e) => e.toJSON()) : null;
	}
	static fromJSON(e, n) {
		if (!n) return z.empty;
		if (!Array.isArray(n)) throw new RangeError('Invalid input for Fragment.fromJSON');
		return new z(n.map(e.nodeFromJSON));
	}
	static fromArray(e) {
		if (!e.length) return z.empty;
		let n,
			r = 0;
		for (let s = 0; s < e.length; s++) {
			let o = e[s];
			((r += o.nodeSize),
				s && o.isText && e[s - 1].sameMarkup(o)
					? (n || (n = e.slice(0, s)),
						(n[n.length - 1] = o.withText(n[n.length - 1].text + o.text)))
					: n && n.push(o));
		}
		return new z(n || e, r);
	}
	static from(e) {
		if (!e) return z.empty;
		if (e instanceof z) return e;
		if (Array.isArray(e)) return this.fromArray(e);
		if (e.attrs) return new z([e], e.nodeSize);
		throw new RangeError(
			'Can not convert ' +
				e +
				' to a Fragment' +
				(e.nodesBetween ? ' (looks like multiple versions of prosemirror-model were loaded)' : '')
		);
	}
}
z.empty = new z([], 0);
const Ni = { index: 0, offset: 0 };
function qs(t, e) {
	return ((Ni.index = t), (Ni.offset = e), Ni);
}
function yo(t, e) {
	if (t === e) return !0;
	if (!(t && typeof t == 'object') || !(e && typeof e == 'object')) return !1;
	let n = Array.isArray(t);
	if (Array.isArray(e) != n) return !1;
	if (n) {
		if (t.length != e.length) return !1;
		for (let r = 0; r < t.length; r++) if (!yo(t[r], e[r])) return !1;
	} else {
		for (let r in t) if (!(r in e) || !yo(t[r], e[r])) return !1;
		for (let r in e) if (!(r in t)) return !1;
	}
	return !0;
}
let Je = class il {
	constructor(e, n) {
		((this.type = e), (this.attrs = n));
	}
	addToSet(e) {
		let n,
			r = !1;
		for (let s = 0; s < e.length; s++) {
			let o = e[s];
			if (this.eq(o)) return e;
			if (this.type.excludes(o.type)) n || (n = e.slice(0, s));
			else {
				if (o.type.excludes(this.type)) return e;
				(!r && o.type.rank > this.type.rank && (n || (n = e.slice(0, s)), n.push(this), (r = !0)),
					n && n.push(o));
			}
		}
		return (n || (n = e.slice()), r || n.push(this), n);
	}
	removeFromSet(e) {
		for (let n = 0; n < e.length; n++)
			if (this.eq(e[n])) return e.slice(0, n).concat(e.slice(n + 1));
		return e;
	}
	isInSet(e) {
		for (let n = 0; n < e.length; n++) if (this.eq(e[n])) return !0;
		return !1;
	}
	eq(e) {
		return this == e || (this.type == e.type && yo(this.attrs, e.attrs));
	}
	toJSON() {
		let e = { type: this.type.name };
		for (let n in this.attrs) {
			e.attrs = this.attrs;
			break;
		}
		return e;
	}
	static fromJSON(e, n) {
		if (!n) throw new RangeError('Invalid input for Mark.fromJSON');
		let r = e.marks[n.type];
		if (!r) throw new RangeError(`There is no mark type ${n.type} in this schema`);
		let s = r.create(n.attrs);
		return (r.checkAttrs(s.attrs), s);
	}
	static sameSet(e, n) {
		if (e == n) return !0;
		if (e.length != n.length) return !1;
		for (let r = 0; r < e.length; r++) if (!e[r].eq(n[r])) return !1;
		return !0;
	}
	static setFrom(e) {
		if (!e || (Array.isArray(e) && e.length == 0)) return il.none;
		if (e instanceof il) return [e];
		let n = e.slice();
		return (n.sort((r, s) => r.type.rank - s.type.rank), n);
	}
};
Je.none = [];
class bo extends Error {}
class X {
	constructor(e, n, r) {
		((this.content = e), (this.openStart = n), (this.openEnd = r));
	}
	get size() {
		return this.content.size - this.openStart - this.openEnd;
	}
	insertAt(e, n) {
		let r = Vd(this.content, e + this.openStart, n);
		return r && new X(r, this.openStart, this.openEnd);
	}
	removeBetween(e, n) {
		return new X(
			Fd(this.content, e + this.openStart, n + this.openStart),
			this.openStart,
			this.openEnd
		);
	}
	eq(e) {
		return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
	}
	toString() {
		return this.content + '(' + this.openStart + ',' + this.openEnd + ')';
	}
	toJSON() {
		if (!this.content.size) return null;
		let e = { content: this.content.toJSON() };
		return (
			this.openStart > 0 && (e.openStart = this.openStart),
			this.openEnd > 0 && (e.openEnd = this.openEnd),
			e
		);
	}
	static fromJSON(e, n) {
		if (!n) return X.empty;
		let r = n.openStart || 0,
			s = n.openEnd || 0;
		if (typeof r != 'number' || typeof s != 'number')
			throw new RangeError('Invalid input for Slice.fromJSON');
		return new X(z.fromJSON(e, n.content), r, s);
	}
	static maxOpen(e, n = !0) {
		let r = 0,
			s = 0;
		for (let o = e.firstChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.firstChild)
			r++;
		for (let o = e.lastChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.lastChild) s++;
		return new X(e, r, s);
	}
}
X.empty = new X(z.empty, 0, 0);
function Fd(t, e, n) {
	let { index: r, offset: s } = t.findIndex(e),
		o = t.maybeChild(r),
		{ index: i, offset: l } = t.findIndex(n);
	if (s == e || o.isText) {
		if (l != n && !t.child(i).isText) throw new RangeError('Removing non-flat range');
		return t.cut(0, e).append(t.cut(n));
	}
	if (r != i) throw new RangeError('Removing non-flat range');
	return t.replaceChild(r, o.copy(Fd(o.content, e - s - 1, n - s - 1)));
}
function Vd(t, e, n, r) {
	let { index: s, offset: o } = t.findIndex(e),
		i = t.maybeChild(s);
	if (o == e || i.isText)
		return r && !r.canReplace(s, s, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
	let l = Vd(i.content, e - o - 1, n, i);
	return l && t.replaceChild(s, i.copy(l));
}
function Ag(t, e, n) {
	if (n.openStart > t.depth) throw new bo('Inserted content deeper than insertion position');
	if (t.depth - n.openStart != e.depth - n.openEnd) throw new bo('Inconsistent open depths');
	return Wd(t, e, n, 0);
}
function Wd(t, e, n, r) {
	let s = t.index(r),
		o = t.node(r);
	if (s == e.index(r) && r < t.depth - n.openStart) {
		let i = Wd(t, e, n, r + 1);
		return o.copy(o.content.replaceChild(s, i));
	} else if (n.content.size)
		if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
			let i = t.parent,
				l = i.content;
			return dr(i, l.cut(0, t.parentOffset).append(n.content).append(l.cut(e.parentOffset)));
		} else {
			let { start: i, end: l } = Ng(n, t);
			return dr(o, Ud(t, i, l, e, r));
		}
	else return dr(o, vo(t, e, r));
}
function jd(t, e) {
	if (!e.type.compatibleContent(t.type))
		throw new bo('Cannot join ' + e.type.name + ' onto ' + t.type.name);
}
function ll(t, e, n) {
	let r = t.node(n);
	return (jd(r, e.node(n)), r);
}
function ur(t, e) {
	let n = e.length - 1;
	n >= 0 && t.isText && t.sameMarkup(e[n]) ? (e[n] = t.withText(e[n].text + t.text)) : e.push(t);
}
function as(t, e, n, r) {
	let s = (e || t).node(n),
		o = 0,
		i = e ? e.index(n) : s.childCount;
	t && ((o = t.index(n)), t.depth > n ? o++ : t.textOffset && (ur(t.nodeAfter, r), o++));
	for (let l = o; l < i; l++) ur(s.child(l), r);
	e && e.depth == n && e.textOffset && ur(e.nodeBefore, r);
}
function dr(t, e) {
	return (t.type.checkContent(e), t.copy(e));
}
function Ud(t, e, n, r, s) {
	let o = t.depth > s && ll(t, e, s + 1),
		i = r.depth > s && ll(n, r, s + 1),
		l = [];
	return (
		as(null, t, s, l),
		o && i && e.index(s) == n.index(s)
			? (jd(o, i), ur(dr(o, Ud(t, e, n, r, s + 1)), l))
			: (o && ur(dr(o, vo(t, e, s + 1)), l), as(e, n, s, l), i && ur(dr(i, vo(n, r, s + 1)), l)),
		as(r, null, s, l),
		new z(l)
	);
}
function vo(t, e, n) {
	let r = [];
	if ((as(null, t, n, r), t.depth > n)) {
		let s = ll(t, e, n + 1);
		ur(dr(s, vo(t, e, n + 1)), r);
	}
	return (as(e, null, n, r), new z(r));
}
function Ng(t, e) {
	let n = e.depth - t.openStart,
		s = e.node(n).copy(t.content);
	for (let o = n - 1; o >= 0; o--) s = e.node(o).copy(z.from(s));
	return {
		start: s.resolveNoCache(t.openStart + n),
		end: s.resolveNoCache(s.content.size - t.openEnd - n)
	};
}
class xs {
	constructor(e, n, r) {
		((this.pos = e), (this.path = n), (this.parentOffset = r), (this.depth = n.length / 3 - 1));
	}
	resolveDepth(e) {
		return e == null ? this.depth : e < 0 ? this.depth + e : e;
	}
	get parent() {
		return this.node(this.depth);
	}
	get doc() {
		return this.node(0);
	}
	node(e) {
		return this.path[this.resolveDepth(e) * 3];
	}
	index(e) {
		return this.path[this.resolveDepth(e) * 3 + 1];
	}
	indexAfter(e) {
		return (
			(e = this.resolveDepth(e)),
			this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1)
		);
	}
	start(e) {
		return ((e = this.resolveDepth(e)), e == 0 ? 0 : this.path[e * 3 - 1] + 1);
	}
	end(e) {
		return ((e = this.resolveDepth(e)), this.start(e) + this.node(e).content.size);
	}
	before(e) {
		if (((e = this.resolveDepth(e)), !e))
			throw new RangeError('There is no position before the top-level node');
		return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
	}
	after(e) {
		if (((e = this.resolveDepth(e)), !e))
			throw new RangeError('There is no position after the top-level node');
		return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
	}
	get textOffset() {
		return this.pos - this.path[this.path.length - 1];
	}
	get nodeAfter() {
		let e = this.parent,
			n = this.index(this.depth);
		if (n == e.childCount) return null;
		let r = this.pos - this.path[this.path.length - 1],
			s = e.child(n);
		return r ? e.child(n).cut(r) : s;
	}
	get nodeBefore() {
		let e = this.index(this.depth),
			n = this.pos - this.path[this.path.length - 1];
		return n ? this.parent.child(e).cut(0, n) : e == 0 ? null : this.parent.child(e - 1);
	}
	posAtIndex(e, n) {
		n = this.resolveDepth(n);
		let r = this.path[n * 3],
			s = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
		for (let o = 0; o < e; o++) s += r.child(o).nodeSize;
		return s;
	}
	marks() {
		let e = this.parent,
			n = this.index();
		if (e.content.size == 0) return Je.none;
		if (this.textOffset) return e.child(n).marks;
		let r = e.maybeChild(n - 1),
			s = e.maybeChild(n);
		if (!r) {
			let l = r;
			((r = s), (s = l));
		}
		let o = r.marks;
		for (var i = 0; i < o.length; i++)
			o[i].type.spec.inclusive === !1 &&
				(!s || !o[i].isInSet(s.marks)) &&
				(o = o[i--].removeFromSet(o));
		return o;
	}
	marksAcross(e) {
		let n = this.parent.maybeChild(this.index());
		if (!n || !n.isInline) return null;
		let r = n.marks,
			s = e.parent.maybeChild(e.index());
		for (var o = 0; o < r.length; o++)
			r[o].type.spec.inclusive === !1 &&
				(!s || !r[o].isInSet(s.marks)) &&
				(r = r[o--].removeFromSet(r));
		return r;
	}
	sharedDepth(e) {
		for (let n = this.depth; n > 0; n--) if (this.start(n) <= e && this.end(n) >= e) return n;
		return 0;
	}
	blockRange(e = this, n) {
		if (e.pos < this.pos) return e.blockRange(this);
		for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
			if (e.pos <= this.end(r) && (!n || n(this.node(r)))) return new ko(this, e, r);
		return null;
	}
	sameParent(e) {
		return this.pos - this.parentOffset == e.pos - e.parentOffset;
	}
	max(e) {
		return e.pos > this.pos ? e : this;
	}
	min(e) {
		return e.pos < this.pos ? e : this;
	}
	toString() {
		let e = '';
		for (let n = 1; n <= this.depth; n++)
			e += (e ? '/' : '') + this.node(n).type.name + '_' + this.index(n - 1);
		return e + ':' + this.parentOffset;
	}
	static resolve(e, n) {
		if (!(n >= 0 && n <= e.content.size)) throw new RangeError('Position ' + n + ' out of range');
		let r = [],
			s = 0,
			o = n;
		for (let i = e; ; ) {
			let { index: l, offset: a } = i.content.findIndex(o),
				c = o - a;
			if ((r.push(i, l, s + a), !c || ((i = i.child(l)), i.isText))) break;
			((o = c - 1), (s += a + 1));
		}
		return new xs(n, r, o);
	}
	static resolveCached(e, n) {
		let r = sc.get(e);
		if (r)
			for (let o = 0; o < r.elts.length; o++) {
				let i = r.elts[o];
				if (i.pos == n) return i;
			}
		else sc.set(e, (r = new Og()));
		let s = (r.elts[r.i] = xs.resolve(e, n));
		return ((r.i = (r.i + 1) % Ig), s);
	}
}
class Og {
	constructor() {
		((this.elts = []), (this.i = 0));
	}
}
const Ig = 12,
	sc = new WeakMap();
class ko {
	constructor(e, n, r) {
		((this.$from = e), (this.$to = n), (this.depth = r));
	}
	get start() {
		return this.$from.before(this.depth + 1);
	}
	get end() {
		return this.$to.after(this.depth + 1);
	}
	get parent() {
		return this.$from.node(this.depth);
	}
	get startIndex() {
		return this.$from.index(this.depth);
	}
	get endIndex() {
		return this.$to.indexAfter(this.depth);
	}
}
const Dg = Object.create(null);
class Qt {
	constructor(e, n, r, s = Je.none) {
		((this.type = e), (this.attrs = n), (this.marks = s), (this.content = r || z.empty));
	}
	get children() {
		return this.content.content;
	}
	get nodeSize() {
		return this.isLeaf ? 1 : 2 + this.content.size;
	}
	get childCount() {
		return this.content.childCount;
	}
	child(e) {
		return this.content.child(e);
	}
	maybeChild(e) {
		return this.content.maybeChild(e);
	}
	forEach(e) {
		this.content.forEach(e);
	}
	nodesBetween(e, n, r, s = 0) {
		this.content.nodesBetween(e, n, r, s, this);
	}
	descendants(e) {
		this.nodesBetween(0, this.content.size, e);
	}
	get textContent() {
		return this.isLeaf && this.type.spec.leafText
			? this.type.spec.leafText(this)
			: this.textBetween(0, this.content.size, '');
	}
	textBetween(e, n, r, s) {
		return this.content.textBetween(e, n, r, s);
	}
	get firstChild() {
		return this.content.firstChild;
	}
	get lastChild() {
		return this.content.lastChild;
	}
	eq(e) {
		return this == e || (this.sameMarkup(e) && this.content.eq(e.content));
	}
	sameMarkup(e) {
		return this.hasMarkup(e.type, e.attrs, e.marks);
	}
	hasMarkup(e, n, r) {
		return (
			this.type == e &&
			yo(this.attrs, n || e.defaultAttrs || Dg) &&
			Je.sameSet(this.marks, r || Je.none)
		);
	}
	copy(e = null) {
		return e == this.content ? this : new Qt(this.type, this.attrs, e, this.marks);
	}
	mark(e) {
		return e == this.marks ? this : new Qt(this.type, this.attrs, this.content, e);
	}
	cut(e, n = this.content.size) {
		return e == 0 && n == this.content.size ? this : this.copy(this.content.cut(e, n));
	}
	slice(e, n = this.content.size, r = !1) {
		if (e == n) return X.empty;
		let s = this.resolve(e),
			o = this.resolve(n),
			i = r ? 0 : s.sharedDepth(n),
			l = s.start(i),
			c = s.node(i).content.cut(s.pos - l, o.pos - l);
		return new X(c, s.depth - i, o.depth - i);
	}
	replace(e, n, r) {
		return Ag(this.resolve(e), this.resolve(n), r);
	}
	nodeAt(e) {
		for (let n = this; ; ) {
			let { index: r, offset: s } = n.content.findIndex(e);
			if (((n = n.maybeChild(r)), !n)) return null;
			if (s == e || n.isText) return n;
			e -= s + 1;
		}
	}
	childAfter(e) {
		let { index: n, offset: r } = this.content.findIndex(e);
		return { node: this.content.maybeChild(n), index: n, offset: r };
	}
	childBefore(e) {
		if (e == 0) return { node: null, index: 0, offset: 0 };
		let { index: n, offset: r } = this.content.findIndex(e);
		if (r < e) return { node: this.content.child(n), index: n, offset: r };
		let s = this.content.child(n - 1);
		return { node: s, index: n - 1, offset: r - s.nodeSize };
	}
	resolve(e) {
		return xs.resolveCached(this, e);
	}
	resolveNoCache(e) {
		return xs.resolve(this, e);
	}
	rangeHasMark(e, n, r) {
		let s = !1;
		return (n > e && this.nodesBetween(e, n, (o) => (r.isInSet(o.marks) && (s = !0), !s)), s);
	}
	get isBlock() {
		return this.type.isBlock;
	}
	get isTextblock() {
		return this.type.isTextblock;
	}
	get inlineContent() {
		return this.type.inlineContent;
	}
	get isInline() {
		return this.type.isInline;
	}
	get isText() {
		return this.type.isText;
	}
	get isLeaf() {
		return this.type.isLeaf;
	}
	get isAtom() {
		return this.type.isAtom;
	}
	toString() {
		if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
		let e = this.type.name;
		return (
			this.content.size && (e += '(' + this.content.toStringInner() + ')'),
			qd(this.marks, e)
		);
	}
	contentMatchAt(e) {
		let n = this.type.contentMatch.matchFragment(this.content, 0, e);
		if (!n) throw new Error('Called contentMatchAt on a node with invalid content');
		return n;
	}
	canReplace(e, n, r = z.empty, s = 0, o = r.childCount) {
		let i = this.contentMatchAt(e).matchFragment(r, s, o),
			l = i && i.matchFragment(this.content, n);
		if (!l || !l.validEnd) return !1;
		for (let a = s; a < o; a++) if (!this.type.allowsMarks(r.child(a).marks)) return !1;
		return !0;
	}
	canReplaceWith(e, n, r, s) {
		if (s && !this.type.allowsMarks(s)) return !1;
		let o = this.contentMatchAt(e).matchType(r),
			i = o && o.matchFragment(this.content, n);
		return i ? i.validEnd : !1;
	}
	canAppend(e) {
		return e.content.size
			? this.canReplace(this.childCount, this.childCount, e.content)
			: this.type.compatibleContent(e.type);
	}
	check() {
		(this.type.checkContent(this.content), this.type.checkAttrs(this.attrs));
		let e = Je.none;
		for (let n = 0; n < this.marks.length; n++) {
			let r = this.marks[n];
			(r.type.checkAttrs(r.attrs), (e = r.addToSet(e)));
		}
		if (!Je.sameSet(e, this.marks))
			throw new RangeError(
				`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((n) => n.type.name)}`
			);
		this.content.forEach((n) => n.check());
	}
	toJSON() {
		let e = { type: this.type.name };
		for (let n in this.attrs) {
			e.attrs = this.attrs;
			break;
		}
		return (
			this.content.size && (e.content = this.content.toJSON()),
			this.marks.length && (e.marks = this.marks.map((n) => n.toJSON())),
			e
		);
	}
	static fromJSON(e, n) {
		if (!n) throw new RangeError('Invalid input for Node.fromJSON');
		let r;
		if (n.marks) {
			if (!Array.isArray(n.marks)) throw new RangeError('Invalid mark data for Node.fromJSON');
			r = n.marks.map(e.markFromJSON);
		}
		if (n.type == 'text') {
			if (typeof n.text != 'string') throw new RangeError('Invalid text node in JSON');
			return e.text(n.text, r);
		}
		let s = z.fromJSON(e, n.content),
			o = e.nodeType(n.type).create(n.attrs, s, r);
		return (o.type.checkAttrs(o.attrs), o);
	}
}
Qt.prototype.text = void 0;
class xo extends Qt {
	constructor(e, n, r, s) {
		if ((super(e, n, null, s), !r)) throw new RangeError('Empty text nodes are not allowed');
		this.text = r;
	}
	toString() {
		return this.type.spec.toDebugString
			? this.type.spec.toDebugString(this)
			: qd(this.marks, JSON.stringify(this.text));
	}
	get textContent() {
		return this.text;
	}
	textBetween(e, n) {
		return this.text.slice(e, n);
	}
	get nodeSize() {
		return this.text.length;
	}
	mark(e) {
		return e == this.marks ? this : new xo(this.type, this.attrs, this.text, e);
	}
	withText(e) {
		return e == this.text ? this : new xo(this.type, this.attrs, e, this.marks);
	}
	cut(e = 0, n = this.text.length) {
		return e == 0 && n == this.text.length ? this : this.withText(this.text.slice(e, n));
	}
	eq(e) {
		return this.sameMarkup(e) && this.text == e.text;
	}
	toJSON() {
		let e = super.toJSON();
		return ((e.text = this.text), e);
	}
}
function qd(t, e) {
	for (let n = t.length - 1; n >= 0; n--) e = t[n].type.name + '(' + e + ')';
	return e;
}
class yr {
	constructor(e) {
		((this.validEnd = e), (this.next = []), (this.wrapCache = []));
	}
	static parse(e, n) {
		let r = new Rg(e, n);
		if (r.next == null) return yr.empty;
		let s = Kd(r);
		r.next && r.err('Unexpected trailing text');
		let o = Hg(_g(s));
		return (Fg(o, r), o);
	}
	matchType(e) {
		for (let n = 0; n < this.next.length; n++) if (this.next[n].type == e) return this.next[n].next;
		return null;
	}
	matchFragment(e, n = 0, r = e.childCount) {
		let s = this;
		for (let o = n; s && o < r; o++) s = s.matchType(e.child(o).type);
		return s;
	}
	get inlineContent() {
		return this.next.length != 0 && this.next[0].type.isInline;
	}
	get defaultType() {
		for (let e = 0; e < this.next.length; e++) {
			let { type: n } = this.next[e];
			if (!(n.isText || n.hasRequiredAttrs())) return n;
		}
		return null;
	}
	compatible(e) {
		for (let n = 0; n < this.next.length; n++)
			for (let r = 0; r < e.next.length; r++) if (this.next[n].type == e.next[r].type) return !0;
		return !1;
	}
	fillBefore(e, n = !1, r = 0) {
		let s = [this];
		function o(i, l) {
			let a = i.matchFragment(e, r);
			if (a && (!n || a.validEnd)) return z.from(l.map((c) => c.createAndFill()));
			for (let c = 0; c < i.next.length; c++) {
				let { type: u, next: d } = i.next[c];
				if (!(u.isText || u.hasRequiredAttrs()) && s.indexOf(d) == -1) {
					s.push(d);
					let f = o(d, l.concat(u));
					if (f) return f;
				}
			}
			return null;
		}
		return o(this, []);
	}
	findWrapping(e) {
		for (let r = 0; r < this.wrapCache.length; r += 2)
			if (this.wrapCache[r] == e) return this.wrapCache[r + 1];
		let n = this.computeWrapping(e);
		return (this.wrapCache.push(e, n), n);
	}
	computeWrapping(e) {
		let n = Object.create(null),
			r = [{ match: this, type: null, via: null }];
		for (; r.length; ) {
			let s = r.shift(),
				o = s.match;
			if (o.matchType(e)) {
				let i = [];
				for (let l = s; l.type; l = l.via) i.push(l.type);
				return i.reverse();
			}
			for (let i = 0; i < o.next.length; i++) {
				let { type: l, next: a } = o.next[i];
				!l.isLeaf &&
					!l.hasRequiredAttrs() &&
					!(l.name in n) &&
					(!s.type || a.validEnd) &&
					(r.push({ match: l.contentMatch, type: l, via: s }), (n[l.name] = !0));
			}
		}
		return null;
	}
	get edgeCount() {
		return this.next.length;
	}
	edge(e) {
		if (e >= this.next.length) throw new RangeError(`There's no ${e}th edge in this content match`);
		return this.next[e];
	}
	toString() {
		let e = [];
		function n(r) {
			e.push(r);
			for (let s = 0; s < r.next.length; s++) e.indexOf(r.next[s].next) == -1 && n(r.next[s].next);
		}
		return (
			n(this),
			e.map((r, s) => {
				let o = s + (r.validEnd ? '*' : ' ') + ' ';
				for (let i = 0; i < r.next.length; i++)
					o += (i ? ', ' : '') + r.next[i].type.name + '->' + e.indexOf(r.next[i].next);
				return o;
			}).join(`
`)
		);
	}
}
yr.empty = new yr(!0);
class Rg {
	constructor(e, n) {
		((this.string = e),
			(this.nodeTypes = n),
			(this.inline = null),
			(this.pos = 0),
			(this.tokens = e.split(/\s*(?=\b|\W|$)/)),
			this.tokens[this.tokens.length - 1] == '' && this.tokens.pop(),
			this.tokens[0] == '' && this.tokens.shift());
	}
	get next() {
		return this.tokens[this.pos];
	}
	eat(e) {
		return this.next == e && (this.pos++ || !0);
	}
	err(e) {
		throw new SyntaxError(e + " (in content expression '" + this.string + "')");
	}
}
function Kd(t) {
	let e = [];
	do e.push(Lg(t));
	while (t.eat('|'));
	return e.length == 1 ? e[0] : { type: 'choice', exprs: e };
}
function Lg(t) {
	let e = [];
	do e.push(Pg(t));
	while (t.next && t.next != ')' && t.next != '|');
	return e.length == 1 ? e[0] : { type: 'seq', exprs: e };
}
function Pg(t) {
	let e = $g(t);
	for (;;)
		if (t.eat('+')) e = { type: 'plus', expr: e };
		else if (t.eat('*')) e = { type: 'star', expr: e };
		else if (t.eat('?')) e = { type: 'opt', expr: e };
		else if (t.eat('{')) e = zg(t, e);
		else break;
	return e;
}
function oc(t) {
	/\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
	let e = Number(t.next);
	return (t.pos++, e);
}
function zg(t, e) {
	let n = oc(t),
		r = n;
	return (
		t.eat(',') && (t.next != '}' ? (r = oc(t)) : (r = -1)),
		t.eat('}') || t.err('Unclosed braced range'),
		{ type: 'range', min: n, max: r, expr: e }
	);
}
function Bg(t, e) {
	let n = t.nodeTypes,
		r = n[e];
	if (r) return [r];
	let s = [];
	for (let o in n) {
		let i = n[o];
		i.isInGroup(e) && s.push(i);
	}
	return (s.length == 0 && t.err("No node type or group '" + e + "' found"), s);
}
function $g(t) {
	if (t.eat('(')) {
		let e = Kd(t);
		return (t.eat(')') || t.err('Missing closing paren'), e);
	} else if (/\W/.test(t.next)) t.err("Unexpected token '" + t.next + "'");
	else {
		let e = Bg(t, t.next).map(
			(n) => (
				t.inline == null
					? (t.inline = n.isInline)
					: t.inline != n.isInline && t.err('Mixing inline and block content'),
				{ type: 'name', value: n }
			)
		);
		return (t.pos++, e.length == 1 ? e[0] : { type: 'choice', exprs: e });
	}
}
function _g(t) {
	let e = [[]];
	return (s(o(t, 0), n()), e);
	function n() {
		return e.push([]) - 1;
	}
	function r(i, l, a) {
		let c = { term: a, to: l };
		return (e[i].push(c), c);
	}
	function s(i, l) {
		i.forEach((a) => (a.to = l));
	}
	function o(i, l) {
		if (i.type == 'choice') return i.exprs.reduce((a, c) => a.concat(o(c, l)), []);
		if (i.type == 'seq')
			for (let a = 0; ; a++) {
				let c = o(i.exprs[a], l);
				if (a == i.exprs.length - 1) return c;
				s(c, (l = n()));
			}
		else if (i.type == 'star') {
			let a = n();
			return (r(l, a), s(o(i.expr, a), a), [r(a)]);
		} else if (i.type == 'plus') {
			let a = n();
			return (s(o(i.expr, l), a), s(o(i.expr, a), a), [r(a)]);
		} else {
			if (i.type == 'opt') return [r(l)].concat(o(i.expr, l));
			if (i.type == 'range') {
				let a = l;
				for (let c = 0; c < i.min; c++) {
					let u = n();
					(s(o(i.expr, a), u), (a = u));
				}
				if (i.max == -1) s(o(i.expr, a), a);
				else
					for (let c = i.min; c < i.max; c++) {
						let u = n();
						(r(a, u), s(o(i.expr, a), u), (a = u));
					}
				return [r(a)];
			} else {
				if (i.type == 'name') return [r(l, void 0, i.value)];
				throw new Error('Unknown expr type');
			}
		}
	}
}
function Jd(t, e) {
	return e - t;
}
function ic(t, e) {
	let n = [];
	return (r(e), n.sort(Jd));
	function r(s) {
		let o = t[s];
		if (o.length == 1 && !o[0].term) return r(o[0].to);
		n.push(s);
		for (let i = 0; i < o.length; i++) {
			let { term: l, to: a } = o[i];
			!l && n.indexOf(a) == -1 && r(a);
		}
	}
}
function Hg(t) {
	let e = Object.create(null);
	return n(ic(t, 0));
	function n(r) {
		let s = [];
		r.forEach((i) => {
			t[i].forEach(({ term: l, to: a }) => {
				if (!l) return;
				let c;
				for (let u = 0; u < s.length; u++) s[u][0] == l && (c = s[u][1]);
				ic(t, a).forEach((u) => {
					(c || s.push([l, (c = [])]), c.indexOf(u) == -1 && c.push(u));
				});
			});
		});
		let o = (e[r.join(',')] = new yr(r.indexOf(t.length - 1) > -1));
		for (let i = 0; i < s.length; i++) {
			let l = s[i][1].sort(Jd);
			o.next.push({ type: s[i][0], next: e[l.join(',')] || n(l) });
		}
		return o;
	}
}
function Fg(t, e) {
	for (let n = 0, r = [t]; n < r.length; n++) {
		let s = r[n],
			o = !s.validEnd,
			i = [];
		for (let l = 0; l < s.next.length; l++) {
			let { type: a, next: c } = s.next[l];
			(i.push(a.name),
				o && !(a.isText || a.hasRequiredAttrs()) && (o = !1),
				r.indexOf(c) == -1 && r.push(c));
		}
		o &&
			e.err(
				'Only non-generatable nodes (' +
					i.join(', ') +
					') in a required position (see https://prosemirror.net/docs/guide/#generatable)'
			);
	}
}
function Gd(t) {
	let e = Object.create(null);
	for (let n in t) {
		let r = t[n];
		if (!r.hasDefault) return null;
		e[n] = r.default;
	}
	return e;
}
function Xd(t, e) {
	let n = Object.create(null);
	for (let r in t) {
		let s = e && e[r];
		if (s === void 0) {
			let o = t[r];
			if (o.hasDefault) s = o.default;
			else throw new RangeError('No value supplied for attribute ' + r);
		}
		n[r] = s;
	}
	return n;
}
function Qd(t, e, n, r) {
	for (let s in e)
		if (!(s in t)) throw new RangeError(`Unsupported attribute ${s} for ${n} of type ${s}`);
	for (let s in t) {
		let o = t[s];
		o.validate && o.validate(e[s]);
	}
}
function Yd(t, e) {
	let n = Object.create(null);
	if (e) for (let r in e) n[r] = new Wg(t, r, e[r]);
	return n;
}
let lc = class Zd {
	constructor(e, n, r) {
		((this.name = e),
			(this.schema = n),
			(this.spec = r),
			(this.markSet = null),
			(this.groups = r.group ? r.group.split(' ') : []),
			(this.attrs = Yd(e, r.attrs)),
			(this.defaultAttrs = Gd(this.attrs)),
			(this.contentMatch = null),
			(this.inlineContent = null),
			(this.isBlock = !(r.inline || e == 'text')),
			(this.isText = e == 'text'));
	}
	get isInline() {
		return !this.isBlock;
	}
	get isTextblock() {
		return this.isBlock && this.inlineContent;
	}
	get isLeaf() {
		return this.contentMatch == yr.empty;
	}
	get isAtom() {
		return this.isLeaf || !!this.spec.atom;
	}
	isInGroup(e) {
		return this.groups.indexOf(e) > -1;
	}
	get whitespace() {
		return this.spec.whitespace || (this.spec.code ? 'pre' : 'normal');
	}
	hasRequiredAttrs() {
		for (let e in this.attrs) if (this.attrs[e].isRequired) return !0;
		return !1;
	}
	compatibleContent(e) {
		return this == e || this.contentMatch.compatible(e.contentMatch);
	}
	computeAttrs(e) {
		return !e && this.defaultAttrs ? this.defaultAttrs : Xd(this.attrs, e);
	}
	create(e = null, n, r) {
		if (this.isText) throw new Error("NodeType.create can't construct text nodes");
		return new Qt(this, this.computeAttrs(e), z.from(n), Je.setFrom(r));
	}
	createChecked(e = null, n, r) {
		return (
			(n = z.from(n)),
			this.checkContent(n),
			new Qt(this, this.computeAttrs(e), n, Je.setFrom(r))
		);
	}
	createAndFill(e = null, n, r) {
		if (((e = this.computeAttrs(e)), (n = z.from(n)), n.size)) {
			let i = this.contentMatch.fillBefore(n);
			if (!i) return null;
			n = i.append(n);
		}
		let s = this.contentMatch.matchFragment(n),
			o = s && s.fillBefore(z.empty, !0);
		return o ? new Qt(this, e, n.append(o), Je.setFrom(r)) : null;
	}
	validContent(e) {
		let n = this.contentMatch.matchFragment(e);
		if (!n || !n.validEnd) return !1;
		for (let r = 0; r < e.childCount; r++) if (!this.allowsMarks(e.child(r).marks)) return !1;
		return !0;
	}
	checkContent(e) {
		if (!this.validContent(e))
			throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
	}
	checkAttrs(e) {
		Qd(this.attrs, e, 'node', this.name);
	}
	allowsMarkType(e) {
		return this.markSet == null || this.markSet.indexOf(e) > -1;
	}
	allowsMarks(e) {
		if (this.markSet == null) return !0;
		for (let n = 0; n < e.length; n++) if (!this.allowsMarkType(e[n].type)) return !1;
		return !0;
	}
	allowedMarks(e) {
		if (this.markSet == null) return e;
		let n;
		for (let r = 0; r < e.length; r++)
			this.allowsMarkType(e[r].type) ? n && n.push(e[r]) : n || (n = e.slice(0, r));
		return n ? (n.length ? n : Je.none) : e;
	}
	static compile(e, n) {
		let r = Object.create(null);
		e.forEach((o, i) => (r[o] = new Zd(o, n, i)));
		let s = n.spec.topNode || 'doc';
		if (!r[s]) throw new RangeError("Schema is missing its top node type ('" + s + "')");
		if (!r.text) throw new RangeError("Every schema needs a 'text' type");
		for (let o in r.text.attrs)
			throw new RangeError('The text node type should not have attributes');
		return r;
	}
};
function Vg(t, e, n) {
	let r = n.split('|');
	return (s) => {
		let o = s === null ? 'null' : typeof s;
		if (r.indexOf(o) < 0)
			throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${o}`);
	};
}
class Wg {
	constructor(e, n, r) {
		((this.hasDefault = Object.prototype.hasOwnProperty.call(r, 'default')),
			(this.default = r.default),
			(this.validate = typeof r.validate == 'string' ? Vg(e, n, r.validate) : r.validate));
	}
	get isRequired() {
		return !this.hasDefault;
	}
}
class si {
	constructor(e, n, r, s) {
		((this.name = e),
			(this.rank = n),
			(this.schema = r),
			(this.spec = s),
			(this.attrs = Yd(e, s.attrs)),
			(this.excluded = null));
		let o = Gd(this.attrs);
		this.instance = o ? new Je(this, o) : null;
	}
	create(e = null) {
		return !e && this.instance ? this.instance : new Je(this, Xd(this.attrs, e));
	}
	static compile(e, n) {
		let r = Object.create(null),
			s = 0;
		return (e.forEach((o, i) => (r[o] = new si(o, s++, n, i))), r);
	}
	removeFromSet(e) {
		for (var n = 0; n < e.length; n++)
			e[n].type == this && ((e = e.slice(0, n).concat(e.slice(n + 1))), n--);
		return e;
	}
	isInSet(e) {
		for (let n = 0; n < e.length; n++) if (e[n].type == this) return e[n];
	}
	checkAttrs(e) {
		Qd(this.attrs, e, 'mark', this.name);
	}
	excludes(e) {
		return this.excluded.indexOf(e) > -1;
	}
}
class ef {
	constructor(e) {
		((this.linebreakReplacement = null), (this.cached = Object.create(null)));
		let n = (this.spec = {});
		for (let s in e) n[s] = e[s];
		((n.nodes = xt.from(e.nodes)),
			(n.marks = xt.from(e.marks || {})),
			(this.nodes = lc.compile(this.spec.nodes, this)),
			(this.marks = si.compile(this.spec.marks, this)));
		let r = Object.create(null);
		for (let s in this.nodes) {
			if (s in this.marks) throw new RangeError(s + ' can not be both a node and a mark');
			let o = this.nodes[s],
				i = o.spec.content || '',
				l = o.spec.marks;
			if (
				((o.contentMatch = r[i] || (r[i] = yr.parse(i, this.nodes))),
				(o.inlineContent = o.contentMatch.inlineContent),
				o.spec.linebreakReplacement)
			) {
				if (this.linebreakReplacement) throw new RangeError('Multiple linebreak nodes defined');
				if (!o.isInline || !o.isLeaf)
					throw new RangeError('Linebreak replacement nodes must be inline leaf nodes');
				this.linebreakReplacement = o;
			}
			o.markSet =
				l == '_' ? null : l ? ac(this, l.split(' ')) : l == '' || !o.inlineContent ? [] : null;
		}
		for (let s in this.marks) {
			let o = this.marks[s],
				i = o.spec.excludes;
			o.excluded = i == null ? [o] : i == '' ? [] : ac(this, i.split(' '));
		}
		((this.nodeFromJSON = (s) => Qt.fromJSON(this, s)),
			(this.markFromJSON = (s) => Je.fromJSON(this, s)),
			(this.topNodeType = this.nodes[this.spec.topNode || 'doc']),
			(this.cached.wrappings = Object.create(null)));
	}
	node(e, n = null, r, s) {
		if (typeof e == 'string') e = this.nodeType(e);
		else if (e instanceof lc) {
			if (e.schema != this)
				throw new RangeError('Node type from different schema used (' + e.name + ')');
		} else throw new RangeError('Invalid node type: ' + e);
		return e.createChecked(n, r, s);
	}
	text(e, n) {
		let r = this.nodes.text;
		return new xo(r, r.defaultAttrs, e, Je.setFrom(n));
	}
	mark(e, n) {
		return (typeof e == 'string' && (e = this.marks[e]), e.create(n));
	}
	nodeType(e) {
		let n = this.nodes[e];
		if (!n) throw new RangeError('Unknown node type: ' + e);
		return n;
	}
}
function ac(t, e) {
	let n = [];
	for (let r = 0; r < e.length; r++) {
		let s = e[r],
			o = t.marks[s],
			i = o;
		if (o) n.push(o);
		else
			for (let l in t.marks) {
				let a = t.marks[l];
				(s == '_' || (a.spec.group && a.spec.group.split(' ').indexOf(s) > -1)) && n.push((i = a));
			}
		if (!i) throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
	}
	return n;
}
function jg(t) {
	return t.tag != null;
}
function Ug(t) {
	return t.style != null;
}
class On {
	constructor(e, n) {
		((this.schema = e), (this.rules = n), (this.tags = []), (this.styles = []));
		let r = (this.matchedStyles = []);
		(n.forEach((s) => {
			if (jg(s)) this.tags.push(s);
			else if (Ug(s)) {
				let o = /[^=]*/.exec(s.style)[0];
				(r.indexOf(o) < 0 && r.push(o), this.styles.push(s));
			}
		}),
			(this.normalizeLists = !this.tags.some((s) => {
				if (!/^(ul|ol)\b/.test(s.tag) || !s.node) return !1;
				let o = e.nodes[s.node];
				return o.contentMatch.matchType(o);
			})));
	}
	parse(e, n = {}) {
		let r = new uc(this, n, !1);
		return (r.addAll(e, Je.none, n.from, n.to), r.finish());
	}
	parseSlice(e, n = {}) {
		let r = new uc(this, n, !0);
		return (r.addAll(e, Je.none, n.from, n.to), X.maxOpen(r.finish()));
	}
	matchTag(e, n, r) {
		for (let s = r ? this.tags.indexOf(r) + 1 : 0; s < this.tags.length; s++) {
			let o = this.tags[s];
			if (
				Jg(e, o.tag) &&
				(o.namespace === void 0 || e.namespaceURI == o.namespace) &&
				(!o.context || n.matchesContext(o.context))
			) {
				if (o.getAttrs) {
					let i = o.getAttrs(e);
					if (i === !1) continue;
					o.attrs = i || void 0;
				}
				return o;
			}
		}
	}
	matchStyle(e, n, r, s) {
		for (let o = s ? this.styles.indexOf(s) + 1 : 0; o < this.styles.length; o++) {
			let i = this.styles[o],
				l = i.style;
			if (
				!(
					l.indexOf(e) != 0 ||
					(i.context && !r.matchesContext(i.context)) ||
					(l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != n))
				)
			) {
				if (i.getAttrs) {
					let a = i.getAttrs(n);
					if (a === !1) continue;
					i.attrs = a || void 0;
				}
				return i;
			}
		}
	}
	static schemaRules(e) {
		let n = [];
		function r(s) {
			let o = s.priority == null ? 50 : s.priority,
				i = 0;
			for (; i < n.length; i++) {
				let l = n[i];
				if ((l.priority == null ? 50 : l.priority) < o) break;
			}
			n.splice(i, 0, s);
		}
		for (let s in e.marks) {
			let o = e.marks[s].spec.parseDOM;
			o &&
				o.forEach((i) => {
					(r((i = dc(i))), i.mark || i.ignore || i.clearMark || (i.mark = s));
				});
		}
		for (let s in e.nodes) {
			let o = e.nodes[s].spec.parseDOM;
			o &&
				o.forEach((i) => {
					(r((i = dc(i))), i.node || i.ignore || i.mark || (i.node = s));
				});
		}
		return n;
	}
	static fromSchema(e) {
		return e.cached.domParser || (e.cached.domParser = new On(e, On.schemaRules(e)));
	}
}
const tf = {
		address: !0,
		article: !0,
		aside: !0,
		blockquote: !0,
		canvas: !0,
		dd: !0,
		div: !0,
		dl: !0,
		fieldset: !0,
		figcaption: !0,
		figure: !0,
		footer: !0,
		form: !0,
		h1: !0,
		h2: !0,
		h3: !0,
		h4: !0,
		h5: !0,
		h6: !0,
		header: !0,
		hgroup: !0,
		hr: !0,
		li: !0,
		noscript: !0,
		ol: !0,
		output: !0,
		p: !0,
		pre: !0,
		section: !0,
		table: !0,
		tfoot: !0,
		ul: !0
	},
	qg = { head: !0, noscript: !0, object: !0, script: !0, style: !0, title: !0 },
	nf = { ol: !0, ul: !0 },
	ws = 1,
	al = 2,
	cs = 4;
function cc(t, e, n) {
	return e != null
		? (e ? ws : 0) | (e === 'full' ? al : 0)
		: t && t.whitespace == 'pre'
			? ws | al
			: n & ~cs;
}
class Ks {
	constructor(e, n, r, s, o, i) {
		((this.type = e),
			(this.attrs = n),
			(this.marks = r),
			(this.solid = s),
			(this.options = i),
			(this.content = []),
			(this.activeMarks = Je.none),
			(this.match = o || (i & cs ? null : e.contentMatch)));
	}
	findWrapping(e) {
		if (!this.match) {
			if (!this.type) return [];
			let n = this.type.contentMatch.fillBefore(z.from(e));
			if (n) this.match = this.type.contentMatch.matchFragment(n);
			else {
				let r = this.type.contentMatch,
					s;
				return (s = r.findWrapping(e.type)) ? ((this.match = r), s) : null;
			}
		}
		return this.match.findWrapping(e.type);
	}
	finish(e) {
		if (!(this.options & ws)) {
			let r = this.content[this.content.length - 1],
				s;
			if (r && r.isText && (s = /[ \t\r\n\u000c]+$/.exec(r.text))) {
				let o = r;
				r.text.length == s[0].length
					? this.content.pop()
					: (this.content[this.content.length - 1] = o.withText(
							o.text.slice(0, o.text.length - s[0].length)
						));
			}
		}
		let n = z.from(this.content);
		return (
			!e && this.match && (n = n.append(this.match.fillBefore(z.empty, !0))),
			this.type ? this.type.create(this.attrs, n, this.marks) : n
		);
	}
	inlineContext(e) {
		return this.type
			? this.type.inlineContent
			: this.content.length
				? this.content[0].isInline
				: e.parentNode && !tf.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
	}
}
class uc {
	constructor(e, n, r) {
		((this.parser = e),
			(this.options = n),
			(this.isOpen = r),
			(this.open = 0),
			(this.localPreserveWS = !1));
		let s = n.topNode,
			o,
			i = cc(null, n.preserveWhitespace, 0) | (r ? cs : 0);
		(s
			? (o = new Ks(s.type, s.attrs, Je.none, !0, n.topMatch || s.type.contentMatch, i))
			: r
				? (o = new Ks(null, null, Je.none, !0, null, i))
				: (o = new Ks(e.schema.topNodeType, null, Je.none, !0, null, i)),
			(this.nodes = [o]),
			(this.find = n.findPositions),
			(this.needsBlock = !1));
	}
	get top() {
		return this.nodes[this.open];
	}
	addDOM(e, n) {
		e.nodeType == 3 ? this.addTextNode(e, n) : e.nodeType == 1 && this.addElement(e, n);
	}
	addTextNode(e, n) {
		let r = e.nodeValue,
			s = this.top,
			o = s.options & al ? 'full' : this.localPreserveWS || (s.options & ws) > 0,
			{ schema: i } = this.parser;
		if (o === 'full' || s.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
			if (o)
				if (o === 'full')
					r = r.replace(
						/\r\n?/g,
						`
`
					);
				else if (
					i.linebreakReplacement &&
					/[\r\n]/.test(r) &&
					this.top.findWrapping(i.linebreakReplacement.create())
				) {
					let l = r.split(/\r?\n|\r/);
					for (let a = 0; a < l.length; a++)
						(a && this.insertNode(i.linebreakReplacement.create(), n, !0),
							l[a] && this.insertNode(i.text(l[a]), n, !/\S/.test(l[a])));
					r = '';
				} else r = r.replace(/\r?\n|\r/g, ' ');
			else if (
				((r = r.replace(/[ \t\r\n\u000c]+/g, ' ')),
				/^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1)
			) {
				let l = s.content[s.content.length - 1],
					a = e.previousSibling;
				(!l || (a && a.nodeName == 'BR') || (l.isText && /[ \t\r\n\u000c]$/.test(l.text))) &&
					(r = r.slice(1));
			}
			(r && this.insertNode(i.text(r), n, !/\S/.test(r)), this.findInText(e));
		} else this.findInside(e);
	}
	addElement(e, n, r) {
		let s = this.localPreserveWS,
			o = this.top;
		(e.tagName == 'PRE' || /pre/.test(e.style && e.style.whiteSpace)) &&
			(this.localPreserveWS = !0);
		let i = e.nodeName.toLowerCase(),
			l;
		nf.hasOwnProperty(i) && this.parser.normalizeLists && Kg(e);
		let a =
			(this.options.ruleFromNode && this.options.ruleFromNode(e)) ||
			(l = this.parser.matchTag(e, this, r));
		e: if (a ? a.ignore : qg.hasOwnProperty(i)) (this.findInside(e), this.ignoreFallback(e, n));
		else if (!a || a.skip || a.closeParent) {
			a && a.closeParent
				? (this.open = Math.max(0, this.open - 1))
				: a && a.skip.nodeType && (e = a.skip);
			let c,
				u = this.needsBlock;
			if (tf.hasOwnProperty(i))
				(o.content.length && o.content[0].isInline && this.open && (this.open--, (o = this.top)),
					(c = !0),
					o.type || (this.needsBlock = !0));
			else if (!e.firstChild) {
				this.leafFallback(e, n);
				break e;
			}
			let d = a && a.skip ? n : this.readStyles(e, n);
			(d && this.addAll(e, d), c && this.sync(o), (this.needsBlock = u));
		} else {
			let c = this.readStyles(e, n);
			c && this.addElementByRule(e, a, c, a.consuming === !1 ? l : void 0);
		}
		this.localPreserveWS = s;
	}
	leafFallback(e, n) {
		e.nodeName == 'BR' &&
			this.top.type &&
			this.top.type.inlineContent &&
			this.addTextNode(
				e.ownerDocument.createTextNode(`
`),
				n
			);
	}
	ignoreFallback(e, n) {
		e.nodeName == 'BR' &&
			(!this.top.type || !this.top.type.inlineContent) &&
			this.findPlace(this.parser.schema.text('-'), n, !0);
	}
	readStyles(e, n) {
		let r = e.style;
		if (r && r.length)
			for (let s = 0; s < this.parser.matchedStyles.length; s++) {
				let o = this.parser.matchedStyles[s],
					i = r.getPropertyValue(o);
				if (i)
					for (let l = void 0; ; ) {
						let a = this.parser.matchStyle(o, i, this, l);
						if (!a) break;
						if (a.ignore) return null;
						if (
							(a.clearMark
								? (n = n.filter((c) => !a.clearMark(c)))
								: (n = n.concat(this.parser.schema.marks[a.mark].create(a.attrs))),
							a.consuming === !1)
						)
							l = a;
						else break;
					}
			}
		return n;
	}
	addElementByRule(e, n, r, s) {
		let o, i;
		if (n.node)
			if (((i = this.parser.schema.nodes[n.node]), i.isLeaf))
				this.insertNode(i.create(n.attrs), r, e.nodeName == 'BR') || this.leafFallback(e, r);
			else {
				let a = this.enter(i, n.attrs || null, r, n.preserveWhitespace);
				a && ((o = !0), (r = a));
			}
		else {
			let a = this.parser.schema.marks[n.mark];
			r = r.concat(a.create(n.attrs));
		}
		let l = this.top;
		if (i && i.isLeaf) this.findInside(e);
		else if (s) this.addElement(e, r, s);
		else if (n.getContent)
			(this.findInside(e),
				n.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r, !1)));
		else {
			let a = e;
			(typeof n.contentElement == 'string'
				? (a = e.querySelector(n.contentElement))
				: typeof n.contentElement == 'function'
					? (a = n.contentElement(e))
					: n.contentElement && (a = n.contentElement),
				this.findAround(e, a, !0),
				this.addAll(a, r),
				this.findAround(e, a, !1));
		}
		o && this.sync(l) && this.open--;
	}
	addAll(e, n, r, s) {
		let o = r || 0;
		for (
			let i = r ? e.childNodes[r] : e.firstChild, l = s == null ? null : e.childNodes[s];
			i != l;
			i = i.nextSibling, ++o
		)
			(this.findAtPoint(e, o), this.addDOM(i, n));
		this.findAtPoint(e, o);
	}
	findPlace(e, n, r) {
		let s, o;
		for (let i = this.open, l = 0; i >= 0; i--) {
			let a = this.nodes[i],
				c = a.findWrapping(e);
			if (c && (!s || s.length > c.length + l) && ((s = c), (o = a), !c.length)) break;
			if (a.solid) {
				if (r) break;
				l += 2;
			}
		}
		if (!s) return null;
		this.sync(o);
		for (let i = 0; i < s.length; i++) n = this.enterInner(s[i], null, n, !1);
		return n;
	}
	insertNode(e, n, r) {
		if (e.isInline && this.needsBlock && !this.top.type) {
			let o = this.textblockFromContext();
			o && (n = this.enterInner(o, null, n));
		}
		let s = this.findPlace(e, n, r);
		if (s) {
			this.closeExtra();
			let o = this.top;
			o.match && (o.match = o.match.matchType(e.type));
			let i = Je.none;
			for (let l of s.concat(e.marks))
				(o.type ? o.type.allowsMarkType(l.type) : fc(l.type, e.type)) && (i = l.addToSet(i));
			return (o.content.push(e.mark(i)), !0);
		}
		return !1;
	}
	enter(e, n, r, s) {
		let o = this.findPlace(e.create(n), r, !1);
		return (o && (o = this.enterInner(e, n, r, !0, s)), o);
	}
	enterInner(e, n, r, s = !1, o) {
		this.closeExtra();
		let i = this.top;
		i.match = i.match && i.match.matchType(e);
		let l = cc(e, o, i.options);
		i.options & cs && i.content.length == 0 && (l |= cs);
		let a = Je.none;
		return (
			(r = r.filter((c) =>
				(i.type ? i.type.allowsMarkType(c.type) : fc(c.type, e)) ? ((a = c.addToSet(a)), !1) : !0
			)),
			this.nodes.push(new Ks(e, n, a, s, null, l)),
			this.open++,
			r
		);
	}
	closeExtra(e = !1) {
		let n = this.nodes.length - 1;
		if (n > this.open) {
			for (; n > this.open; n--) this.nodes[n - 1].content.push(this.nodes[n].finish(e));
			this.nodes.length = this.open + 1;
		}
	}
	finish() {
		return (
			(this.open = 0),
			this.closeExtra(this.isOpen),
			this.nodes[0].finish(!!(this.isOpen || this.options.topOpen))
		);
	}
	sync(e) {
		for (let n = this.open; n >= 0; n--) {
			if (this.nodes[n] == e) return ((this.open = n), !0);
			this.localPreserveWS && (this.nodes[n].options |= ws);
		}
		return !1;
	}
	get currentPos() {
		this.closeExtra();
		let e = 0;
		for (let n = this.open; n >= 0; n--) {
			let r = this.nodes[n].content;
			for (let s = r.length - 1; s >= 0; s--) e += r[s].nodeSize;
			n && e++;
		}
		return e;
	}
	findAtPoint(e, n) {
		if (this.find)
			for (let r = 0; r < this.find.length; r++)
				this.find[r].node == e && this.find[r].offset == n && (this.find[r].pos = this.currentPos);
	}
	findInside(e) {
		if (this.find)
			for (let n = 0; n < this.find.length; n++)
				this.find[n].pos == null &&
					e.nodeType == 1 &&
					e.contains(this.find[n].node) &&
					(this.find[n].pos = this.currentPos);
	}
	findAround(e, n, r) {
		if (e != n && this.find)
			for (let s = 0; s < this.find.length; s++)
				this.find[s].pos == null &&
					e.nodeType == 1 &&
					e.contains(this.find[s].node) &&
					n.compareDocumentPosition(this.find[s].node) & (r ? 2 : 4) &&
					(this.find[s].pos = this.currentPos);
	}
	findInText(e) {
		if (this.find)
			for (let n = 0; n < this.find.length; n++)
				this.find[n].node == e &&
					(this.find[n].pos = this.currentPos - (e.nodeValue.length - this.find[n].offset));
	}
	matchesContext(e) {
		if (e.indexOf('|') > -1) return e.split(/\s*\|\s*/).some(this.matchesContext, this);
		let n = e.split('/'),
			r = this.options.context,
			s = !this.isOpen && (!r || r.parent.type == this.nodes[0].type),
			o = -(r ? r.depth + 1 : 0) + (s ? 0 : 1),
			i = (l, a) => {
				for (; l >= 0; l--) {
					let c = n[l];
					if (c == '') {
						if (l == n.length - 1 || l == 0) continue;
						for (; a >= o; a--) if (i(l - 1, a)) return !0;
						return !1;
					} else {
						let u =
							a > 0 || (a == 0 && s) ? this.nodes[a].type : r && a >= o ? r.node(a - o).type : null;
						if (!u || (u.name != c && !u.isInGroup(c))) return !1;
						a--;
					}
				}
				return !0;
			};
		return i(n.length - 1, this.open);
	}
	textblockFromContext() {
		let e = this.options.context;
		if (e)
			for (let n = e.depth; n >= 0; n--) {
				let r = e.node(n).contentMatchAt(e.indexAfter(n)).defaultType;
				if (r && r.isTextblock && r.defaultAttrs) return r;
			}
		for (let n in this.parser.schema.nodes) {
			let r = this.parser.schema.nodes[n];
			if (r.isTextblock && r.defaultAttrs) return r;
		}
	}
}
function Kg(t) {
	for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
		let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
		r && nf.hasOwnProperty(r) && n
			? (n.appendChild(e), (e = n))
			: r == 'li'
				? (n = e)
				: r && (n = null);
	}
}
function Jg(t, e) {
	return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(
		t,
		e
	);
}
function dc(t) {
	let e = {};
	for (let n in t) e[n] = t[n];
	return e;
}
function fc(t, e) {
	let n = e.schema.nodes;
	for (let r in n) {
		let s = n[r];
		if (!s.allowsMarkType(t)) continue;
		let o = [],
			i = (l) => {
				o.push(l);
				for (let a = 0; a < l.edgeCount; a++) {
					let { type: c, next: u } = l.edge(a);
					if (c == e || (o.indexOf(u) < 0 && i(u))) return !0;
				}
			};
		if (i(s.contentMatch)) return !0;
	}
}
class Sr {
	constructor(e, n) {
		((this.nodes = e), (this.marks = n));
	}
	serializeFragment(e, n = {}, r) {
		r || (r = Oi(n).createDocumentFragment());
		let s = r,
			o = [];
		return (
			e.forEach((i) => {
				if (o.length || i.marks.length) {
					let l = 0,
						a = 0;
					for (; l < o.length && a < i.marks.length; ) {
						let c = i.marks[a];
						if (!this.marks[c.type.name]) {
							a++;
							continue;
						}
						if (!c.eq(o[l][0]) || c.type.spec.spanning === !1) break;
						(l++, a++);
					}
					for (; l < o.length; ) s = o.pop()[1];
					for (; a < i.marks.length; ) {
						let c = i.marks[a++],
							u = this.serializeMark(c, i.isInline, n);
						u && (o.push([c, s]), s.appendChild(u.dom), (s = u.contentDOM || u.dom));
					}
				}
				s.appendChild(this.serializeNodeInner(i, n));
			}),
			r
		);
	}
	serializeNodeInner(e, n) {
		let { dom: r, contentDOM: s } = lo(Oi(n), this.nodes[e.type.name](e), null, e.attrs);
		if (s) {
			if (e.isLeaf) throw new RangeError('Content hole not allowed in a leaf node spec');
			this.serializeFragment(e.content, n, s);
		}
		return r;
	}
	serializeNode(e, n = {}) {
		let r = this.serializeNodeInner(e, n);
		for (let s = e.marks.length - 1; s >= 0; s--) {
			let o = this.serializeMark(e.marks[s], e.isInline, n);
			o && ((o.contentDOM || o.dom).appendChild(r), (r = o.dom));
		}
		return r;
	}
	serializeMark(e, n, r = {}) {
		let s = this.marks[e.type.name];
		return s && lo(Oi(r), s(e, n), null, e.attrs);
	}
	static renderSpec(e, n, r = null, s) {
		return lo(e, n, r, s);
	}
	static fromSchema(e) {
		return (
			e.cached.domSerializer ||
			(e.cached.domSerializer = new Sr(this.nodesFromSchema(e), this.marksFromSchema(e)))
		);
	}
	static nodesFromSchema(e) {
		let n = hc(e.nodes);
		return (n.text || (n.text = (r) => r.text), n);
	}
	static marksFromSchema(e) {
		return hc(e.marks);
	}
}
function hc(t) {
	let e = {};
	for (let n in t) {
		let r = t[n].spec.toDOM;
		r && (e[n] = r);
	}
	return e;
}
function Oi(t) {
	return t.document || window.document;
}
const pc = new WeakMap();
function Gg(t) {
	let e = pc.get(t);
	return (e === void 0 && pc.set(t, (e = Xg(t))), e);
}
function Xg(t) {
	let e = null;
	function n(r) {
		if (r && typeof r == 'object')
			if (Array.isArray(r))
				if (typeof r[0] == 'string') (e || (e = []), e.push(r));
				else for (let s = 0; s < r.length; s++) n(r[s]);
			else for (let s in r) n(r[s]);
	}
	return (n(t), e);
}
function lo(t, e, n, r) {
	if (typeof e == 'string') return { dom: t.createTextNode(e) };
	if (e.nodeType != null) return { dom: e };
	if (e.dom && e.dom.nodeType != null) return e;
	let s = e[0],
		o;
	if (typeof s != 'string') throw new RangeError('Invalid array passed to renderSpec');
	if (r && (o = Gg(r)) && o.indexOf(e) > -1)
		throw new RangeError(
			'Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.'
		);
	let i = s.indexOf(' ');
	i > 0 && ((n = s.slice(0, i)), (s = s.slice(i + 1)));
	let l,
		a = n ? t.createElementNS(n, s) : t.createElement(s),
		c = e[1],
		u = 1;
	if (c && typeof c == 'object' && c.nodeType == null && !Array.isArray(c)) {
		u = 2;
		for (let d in c)
			if (c[d] != null) {
				let f = d.indexOf(' ');
				f > 0
					? a.setAttributeNS(d.slice(0, f), d.slice(f + 1), c[d])
					: d == 'style' && a.style
						? (a.style.cssText = c[d])
						: a.setAttribute(d, c[d]);
			}
	}
	for (let d = u; d < e.length; d++) {
		let f = e[d];
		if (f === 0) {
			if (d < e.length - 1 || d > u)
				throw new RangeError('Content hole must be the only child of its parent node');
			return { dom: a, contentDOM: a };
		} else {
			let { dom: h, contentDOM: p } = lo(t, f, n, r);
			if ((a.appendChild(h), p)) {
				if (l) throw new RangeError('Multiple content holes');
				l = p;
			}
		}
	}
	return { dom: a, contentDOM: l };
}
const rf = 65535,
	sf = Math.pow(2, 16);
function Qg(t, e) {
	return t + e * sf;
}
function mc(t) {
	return t & rf;
}
function Yg(t) {
	return (t - (t & rf)) / sf;
}
const of = 1,
	lf = 2,
	ao = 4,
	af = 8;
class cl {
	constructor(e, n, r) {
		((this.pos = e), (this.delInfo = n), (this.recover = r));
	}
	get deleted() {
		return (this.delInfo & af) > 0;
	}
	get deletedBefore() {
		return (this.delInfo & (of | ao)) > 0;
	}
	get deletedAfter() {
		return (this.delInfo & (lf | ao)) > 0;
	}
	get deletedAcross() {
		return (this.delInfo & ao) > 0;
	}
}
class Wt {
	constructor(e, n = !1) {
		if (((this.ranges = e), (this.inverted = n), !e.length && Wt.empty)) return Wt.empty;
	}
	recover(e) {
		let n = 0,
			r = mc(e);
		if (!this.inverted)
			for (let s = 0; s < r; s++) n += this.ranges[s * 3 + 2] - this.ranges[s * 3 + 1];
		return this.ranges[r * 3] + n + Yg(e);
	}
	mapResult(e, n = 1) {
		return this._map(e, n, !1);
	}
	map(e, n = 1) {
		return this._map(e, n, !0);
	}
	_map(e, n, r) {
		let s = 0,
			o = this.inverted ? 2 : 1,
			i = this.inverted ? 1 : 2;
		for (let l = 0; l < this.ranges.length; l += 3) {
			let a = this.ranges[l] - (this.inverted ? s : 0);
			if (a > e) break;
			let c = this.ranges[l + o],
				u = this.ranges[l + i],
				d = a + c;
			if (e <= d) {
				let f = c ? (e == a ? -1 : e == d ? 1 : n) : n,
					h = a + s + (f < 0 ? 0 : u);
				if (r) return h;
				let p = e == (n < 0 ? a : d) ? null : Qg(l / 3, e - a),
					m = e == a ? lf : e == d ? of : ao;
				return ((n < 0 ? e != a : e != d) && (m |= af), new cl(h, m, p));
			}
			s += u - c;
		}
		return r ? e + s : new cl(e + s, 0, null);
	}
	touches(e, n) {
		let r = 0,
			s = mc(n),
			o = this.inverted ? 2 : 1,
			i = this.inverted ? 1 : 2;
		for (let l = 0; l < this.ranges.length; l += 3) {
			let a = this.ranges[l] - (this.inverted ? r : 0);
			if (a > e) break;
			let c = this.ranges[l + o],
				u = a + c;
			if (e <= u && l == s * 3) return !0;
			r += this.ranges[l + i] - c;
		}
		return !1;
	}
	forEach(e) {
		let n = this.inverted ? 2 : 1,
			r = this.inverted ? 1 : 2;
		for (let s = 0, o = 0; s < this.ranges.length; s += 3) {
			let i = this.ranges[s],
				l = i - (this.inverted ? o : 0),
				a = i + (this.inverted ? 0 : o),
				c = this.ranges[s + n],
				u = this.ranges[s + r];
			(e(l, l + c, a, a + u), (o += u - c));
		}
	}
	invert() {
		return new Wt(this.ranges, !this.inverted);
	}
	toString() {
		return (this.inverted ? '-' : '') + JSON.stringify(this.ranges);
	}
	static offset(e) {
		return e == 0 ? Wt.empty : new Wt(e < 0 ? [0, -e, 0] : [0, 0, e]);
	}
}
Wt.empty = new Wt([]);
class Ss {
	constructor(e, n, r = 0, s = e ? e.length : 0) {
		((this.mirror = n),
			(this.from = r),
			(this.to = s),
			(this._maps = e || []),
			(this.ownData = !(e || n)));
	}
	get maps() {
		return this._maps;
	}
	slice(e = 0, n = this.maps.length) {
		return new Ss(this._maps, this.mirror, e, n);
	}
	appendMap(e, n) {
		(this.ownData ||
			((this._maps = this._maps.slice()),
			(this.mirror = this.mirror && this.mirror.slice()),
			(this.ownData = !0)),
			(this.to = this._maps.push(e)),
			n != null && this.setMirror(this._maps.length - 1, n));
	}
	appendMapping(e) {
		for (let n = 0, r = this._maps.length; n < e._maps.length; n++) {
			let s = e.getMirror(n);
			this.appendMap(e._maps[n], s != null && s < n ? r + s : void 0);
		}
	}
	getMirror(e) {
		if (this.mirror) {
			for (let n = 0; n < this.mirror.length; n++)
				if (this.mirror[n] == e) return this.mirror[n + (n % 2 ? -1 : 1)];
		}
	}
	setMirror(e, n) {
		(this.mirror || (this.mirror = []), this.mirror.push(e, n));
	}
	appendMappingInverted(e) {
		for (let n = e.maps.length - 1, r = this._maps.length + e._maps.length; n >= 0; n--) {
			let s = e.getMirror(n);
			this.appendMap(e._maps[n].invert(), s != null && s > n ? r - s - 1 : void 0);
		}
	}
	invert() {
		let e = new Ss();
		return (e.appendMappingInverted(this), e);
	}
	map(e, n = 1) {
		if (this.mirror) return this._map(e, n, !0);
		for (let r = this.from; r < this.to; r++) e = this._maps[r].map(e, n);
		return e;
	}
	mapResult(e, n = 1) {
		return this._map(e, n, !1);
	}
	_map(e, n, r) {
		let s = 0;
		for (let o = this.from; o < this.to; o++) {
			let i = this._maps[o],
				l = i.mapResult(e, n);
			if (l.recover != null) {
				let a = this.getMirror(o);
				if (a != null && a > o && a < this.to) {
					((o = a), (e = this._maps[a].recover(l.recover)));
					continue;
				}
			}
			((s |= l.delInfo), (e = l.pos));
		}
		return r ? e : new cl(e, s, null);
	}
}
const Ii = Object.create(null);
class Dt {
	getMap() {
		return Wt.empty;
	}
	merge(e) {
		return null;
	}
	static fromJSON(e, n) {
		if (!n || !n.stepType) throw new RangeError('Invalid input for Step.fromJSON');
		let r = Ii[n.stepType];
		if (!r) throw new RangeError(`No step type ${n.stepType} defined`);
		return r.fromJSON(e, n);
	}
	static jsonID(e, n) {
		if (e in Ii) throw new RangeError('Duplicate use of step JSON ID ' + e);
		return ((Ii[e] = n), (n.prototype.jsonID = e), n);
	}
}
class ft {
	constructor(e, n) {
		((this.doc = e), (this.failed = n));
	}
	static ok(e) {
		return new ft(e, null);
	}
	static fail(e) {
		return new ft(null, e);
	}
	static fromReplace(e, n, r, s) {
		try {
			return ft.ok(e.replace(n, r, s));
		} catch (o) {
			if (o instanceof bo) return ft.fail(o.message);
			throw o;
		}
	}
}
function Yl(t, e, n) {
	let r = [];
	for (let s = 0; s < t.childCount; s++) {
		let o = t.child(s);
		(o.content.size && (o = o.copy(Yl(o.content, e, o))),
			o.isInline && (o = e(o, n, s)),
			r.push(o));
	}
	return z.fromArray(r);
}
class jn extends Dt {
	constructor(e, n, r) {
		(super(), (this.from = e), (this.to = n), (this.mark = r));
	}
	apply(e) {
		let n = e.slice(this.from, this.to),
			r = e.resolve(this.from),
			s = r.node(r.sharedDepth(this.to)),
			o = new X(
				Yl(
					n.content,
					(i, l) =>
						!i.isAtom || !l.type.allowsMarkType(this.mark.type)
							? i
							: i.mark(this.mark.addToSet(i.marks)),
					s
				),
				n.openStart,
				n.openEnd
			);
		return ft.fromReplace(e, this.from, this.to, o);
	}
	invert() {
		return new on(this.from, this.to, this.mark);
	}
	map(e) {
		let n = e.mapResult(this.from, 1),
			r = e.mapResult(this.to, -1);
		return (n.deleted && r.deleted) || n.pos >= r.pos ? null : new jn(n.pos, r.pos, this.mark);
	}
	merge(e) {
		return e instanceof jn && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from
			? new jn(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark)
			: null;
	}
	toJSON() {
		return { stepType: 'addMark', mark: this.mark.toJSON(), from: this.from, to: this.to };
	}
	static fromJSON(e, n) {
		if (typeof n.from != 'number' || typeof n.to != 'number')
			throw new RangeError('Invalid input for AddMarkStep.fromJSON');
		return new jn(n.from, n.to, e.markFromJSON(n.mark));
	}
}
Dt.jsonID('addMark', jn);
class on extends Dt {
	constructor(e, n, r) {
		(super(), (this.from = e), (this.to = n), (this.mark = r));
	}
	apply(e) {
		let n = e.slice(this.from, this.to),
			r = new X(
				Yl(n.content, (s) => s.mark(this.mark.removeFromSet(s.marks)), e),
				n.openStart,
				n.openEnd
			);
		return ft.fromReplace(e, this.from, this.to, r);
	}
	invert() {
		return new jn(this.from, this.to, this.mark);
	}
	map(e) {
		let n = e.mapResult(this.from, 1),
			r = e.mapResult(this.to, -1);
		return (n.deleted && r.deleted) || n.pos >= r.pos ? null : new on(n.pos, r.pos, this.mark);
	}
	merge(e) {
		return e instanceof on && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from
			? new on(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark)
			: null;
	}
	toJSON() {
		return { stepType: 'removeMark', mark: this.mark.toJSON(), from: this.from, to: this.to };
	}
	static fromJSON(e, n) {
		if (typeof n.from != 'number' || typeof n.to != 'number')
			throw new RangeError('Invalid input for RemoveMarkStep.fromJSON');
		return new on(n.from, n.to, e.markFromJSON(n.mark));
	}
}
Dt.jsonID('removeMark', on);
class Un extends Dt {
	constructor(e, n) {
		(super(), (this.pos = e), (this.mark = n));
	}
	apply(e) {
		let n = e.nodeAt(this.pos);
		if (!n) return ft.fail("No node at mark step's position");
		let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
		return ft.fromReplace(e, this.pos, this.pos + 1, new X(z.from(r), 0, n.isLeaf ? 0 : 1));
	}
	invert(e) {
		let n = e.nodeAt(this.pos);
		if (n) {
			let r = this.mark.addToSet(n.marks);
			if (r.length == n.marks.length) {
				for (let s = 0; s < n.marks.length; s++)
					if (!n.marks[s].isInSet(r)) return new Un(this.pos, n.marks[s]);
				return new Un(this.pos, this.mark);
			}
		}
		return new br(this.pos, this.mark);
	}
	map(e) {
		let n = e.mapResult(this.pos, 1);
		return n.deletedAfter ? null : new Un(n.pos, this.mark);
	}
	toJSON() {
		return { stepType: 'addNodeMark', pos: this.pos, mark: this.mark.toJSON() };
	}
	static fromJSON(e, n) {
		if (typeof n.pos != 'number')
			throw new RangeError('Invalid input for AddNodeMarkStep.fromJSON');
		return new Un(n.pos, e.markFromJSON(n.mark));
	}
}
Dt.jsonID('addNodeMark', Un);
class br extends Dt {
	constructor(e, n) {
		(super(), (this.pos = e), (this.mark = n));
	}
	apply(e) {
		let n = e.nodeAt(this.pos);
		if (!n) return ft.fail("No node at mark step's position");
		let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
		return ft.fromReplace(e, this.pos, this.pos + 1, new X(z.from(r), 0, n.isLeaf ? 0 : 1));
	}
	invert(e) {
		let n = e.nodeAt(this.pos);
		return !n || !this.mark.isInSet(n.marks) ? this : new Un(this.pos, this.mark);
	}
	map(e) {
		let n = e.mapResult(this.pos, 1);
		return n.deletedAfter ? null : new br(n.pos, this.mark);
	}
	toJSON() {
		return { stepType: 'removeNodeMark', pos: this.pos, mark: this.mark.toJSON() };
	}
	static fromJSON(e, n) {
		if (typeof n.pos != 'number')
			throw new RangeError('Invalid input for RemoveNodeMarkStep.fromJSON');
		return new br(n.pos, e.markFromJSON(n.mark));
	}
}
Dt.jsonID('removeNodeMark', br);
class gt extends Dt {
	constructor(e, n, r, s = !1) {
		(super(), (this.from = e), (this.to = n), (this.slice = r), (this.structure = s));
	}
	apply(e) {
		return this.structure && ul(e, this.from, this.to)
			? ft.fail('Structure replace would overwrite content')
			: ft.fromReplace(e, this.from, this.to, this.slice);
	}
	getMap() {
		return new Wt([this.from, this.to - this.from, this.slice.size]);
	}
	invert(e) {
		return new gt(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
	}
	map(e) {
		let n = e.mapResult(this.from, 1),
			r = e.mapResult(this.to, -1);
		return n.deletedAcross && r.deletedAcross
			? null
			: new gt(n.pos, Math.max(n.pos, r.pos), this.slice, this.structure);
	}
	merge(e) {
		if (!(e instanceof gt) || e.structure || this.structure) return null;
		if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
			let n =
				this.slice.size + e.slice.size == 0
					? X.empty
					: new X(
							this.slice.content.append(e.slice.content),
							this.slice.openStart,
							e.slice.openEnd
						);
			return new gt(this.from, this.to + (e.to - e.from), n, this.structure);
		} else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
			let n =
				this.slice.size + e.slice.size == 0
					? X.empty
					: new X(
							e.slice.content.append(this.slice.content),
							e.slice.openStart,
							this.slice.openEnd
						);
			return new gt(e.from, this.to, n, this.structure);
		} else return null;
	}
	toJSON() {
		let e = { stepType: 'replace', from: this.from, to: this.to };
		return (
			this.slice.size && (e.slice = this.slice.toJSON()),
			this.structure && (e.structure = !0),
			e
		);
	}
	static fromJSON(e, n) {
		if (typeof n.from != 'number' || typeof n.to != 'number')
			throw new RangeError('Invalid input for ReplaceStep.fromJSON');
		return new gt(n.from, n.to, X.fromJSON(e, n.slice), !!n.structure);
	}
}
Dt.jsonID('replace', gt);
class bt extends Dt {
	constructor(e, n, r, s, o, i, l = !1) {
		(super(),
			(this.from = e),
			(this.to = n),
			(this.gapFrom = r),
			(this.gapTo = s),
			(this.slice = o),
			(this.insert = i),
			(this.structure = l));
	}
	apply(e) {
		if (this.structure && (ul(e, this.from, this.gapFrom) || ul(e, this.gapTo, this.to)))
			return ft.fail('Structure gap-replace would overwrite content');
		let n = e.slice(this.gapFrom, this.gapTo);
		if (n.openStart || n.openEnd) return ft.fail('Gap is not a flat range');
		let r = this.slice.insertAt(this.insert, n.content);
		return r ? ft.fromReplace(e, this.from, this.to, r) : ft.fail('Content does not fit in gap');
	}
	getMap() {
		return new Wt([
			this.from,
			this.gapFrom - this.from,
			this.insert,
			this.gapTo,
			this.to - this.gapTo,
			this.slice.size - this.insert
		]);
	}
	invert(e) {
		let n = this.gapTo - this.gapFrom;
		return new bt(
			this.from,
			this.from + this.slice.size + n,
			this.from + this.insert,
			this.from + this.insert + n,
			e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
			this.gapFrom - this.from,
			this.structure
		);
	}
	map(e) {
		let n = e.mapResult(this.from, 1),
			r = e.mapResult(this.to, -1),
			s = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1),
			o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
		return (n.deletedAcross && r.deletedAcross) || s < n.pos || o > r.pos
			? null
			: new bt(n.pos, r.pos, s, o, this.slice, this.insert, this.structure);
	}
	toJSON() {
		let e = {
			stepType: 'replaceAround',
			from: this.from,
			to: this.to,
			gapFrom: this.gapFrom,
			gapTo: this.gapTo,
			insert: this.insert
		};
		return (
			this.slice.size && (e.slice = this.slice.toJSON()),
			this.structure && (e.structure = !0),
			e
		);
	}
	static fromJSON(e, n) {
		if (
			typeof n.from != 'number' ||
			typeof n.to != 'number' ||
			typeof n.gapFrom != 'number' ||
			typeof n.gapTo != 'number' ||
			typeof n.insert != 'number'
		)
			throw new RangeError('Invalid input for ReplaceAroundStep.fromJSON');
		return new bt(
			n.from,
			n.to,
			n.gapFrom,
			n.gapTo,
			X.fromJSON(e, n.slice),
			n.insert,
			!!n.structure
		);
	}
}
Dt.jsonID('replaceAround', bt);
function ul(t, e, n) {
	let r = t.resolve(e),
		s = n - e,
		o = r.depth;
	for (; s > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; ) (o--, s--);
	if (s > 0) {
		let i = r.node(o).maybeChild(r.indexAfter(o));
		for (; s > 0; ) {
			if (!i || i.isLeaf) return !0;
			((i = i.firstChild), s--);
		}
	}
	return !1;
}
function Zg(t, e, n, r) {
	let s = [],
		o = [],
		i,
		l;
	(t.doc.nodesBetween(e, n, (a, c, u) => {
		if (!a.isInline) return;
		let d = a.marks;
		if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
			let f = Math.max(c, e),
				h = Math.min(c + a.nodeSize, n),
				p = r.addToSet(d);
			for (let m = 0; m < d.length; m++)
				d[m].isInSet(p) ||
					(i && i.to == f && i.mark.eq(d[m]) ? (i.to = h) : s.push((i = new on(f, h, d[m]))));
			l && l.to == f ? (l.to = h) : o.push((l = new jn(f, h, r)));
		}
	}),
		s.forEach((a) => t.step(a)),
		o.forEach((a) => t.step(a)));
}
function e0(t, e, n, r) {
	let s = [],
		o = 0;
	(t.doc.nodesBetween(e, n, (i, l) => {
		if (!i.isInline) return;
		o++;
		let a = null;
		if (r instanceof si) {
			let c = i.marks,
				u;
			for (; (u = r.isInSet(c)); ) ((a || (a = [])).push(u), (c = u.removeFromSet(c)));
		} else r ? r.isInSet(i.marks) && (a = [r]) : (a = i.marks);
		if (a && a.length) {
			let c = Math.min(l + i.nodeSize, n);
			for (let u = 0; u < a.length; u++) {
				let d = a[u],
					f;
				for (let h = 0; h < s.length; h++) {
					let p = s[h];
					p.step == o - 1 && d.eq(s[h].style) && (f = p);
				}
				f ? ((f.to = c), (f.step = o)) : s.push({ style: d, from: Math.max(l, e), to: c, step: o });
			}
		}
	}),
		s.forEach((i) => t.step(new on(i.from, i.to, i.style))));
}
function Zl(t, e, n, r = n.contentMatch, s = !0) {
	let o = t.doc.nodeAt(e),
		i = [],
		l = e + 1;
	for (let a = 0; a < o.childCount; a++) {
		let c = o.child(a),
			u = l + c.nodeSize,
			d = r.matchType(c.type);
		if (!d) i.push(new gt(l, u, X.empty));
		else {
			r = d;
			for (let f = 0; f < c.marks.length; f++)
				n.allowsMarkType(c.marks[f].type) || t.step(new on(l, u, c.marks[f]));
			if (s && c.isText && n.whitespace != 'pre') {
				let f,
					h = /\r?\n|\r/g,
					p;
				for (; (f = h.exec(c.text)); )
					(p || (p = new X(z.from(n.schema.text(' ', n.allowedMarks(c.marks))), 0, 0)),
						i.push(new gt(l + f.index, l + f.index + f[0].length, p)));
			}
		}
		l = u;
	}
	if (!r.validEnd) {
		let a = r.fillBefore(z.empty, !0);
		t.replace(l, l, new X(a, 0, 0));
	}
	for (let a = i.length - 1; a >= 0; a--) t.step(i[a]);
}
function t0(t, e, n) {
	return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function Ur(t) {
	let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
	for (let r = t.depth, s = 0, o = 0; ; --r) {
		let i = t.$from.node(r),
			l = t.$from.index(r) + s,
			a = t.$to.indexAfter(r) - o;
		if (r < t.depth && i.canReplace(l, a, n)) return r;
		if (r == 0 || i.type.spec.isolating || !t0(i, l, a)) break;
		(l && (s = 1), a < i.childCount && (o = 1));
	}
	return null;
}
function n0(t, e, n) {
	let { $from: r, $to: s, depth: o } = e,
		i = r.before(o + 1),
		l = s.after(o + 1),
		a = i,
		c = l,
		u = z.empty,
		d = 0;
	for (let p = o, m = !1; p > n; p--)
		m || r.index(p) > 0 ? ((m = !0), (u = z.from(r.node(p).copy(u))), d++) : a--;
	let f = z.empty,
		h = 0;
	for (let p = o, m = !1; p > n; p--)
		m || s.after(p + 1) < s.end(p) ? ((m = !0), (f = z.from(s.node(p).copy(f))), h++) : c++;
	t.step(new bt(a, c, i, l, new X(u.append(f), d, h), u.size - d, !0));
}
function ea(t, e, n = null, r = t) {
	let s = r0(t, e),
		o = s && s0(r, e);
	return o ? s.map(gc).concat({ type: e, attrs: n }).concat(o.map(gc)) : null;
}
function gc(t) {
	return { type: t, attrs: null };
}
function r0(t, e) {
	let { parent: n, startIndex: r, endIndex: s } = t,
		o = n.contentMatchAt(r).findWrapping(e);
	if (!o) return null;
	let i = o.length ? o[0] : e;
	return n.canReplaceWith(r, s, i) ? o : null;
}
function s0(t, e) {
	let { parent: n, startIndex: r, endIndex: s } = t,
		o = n.child(r),
		i = e.contentMatch.findWrapping(o.type);
	if (!i) return null;
	let a = (i.length ? i[i.length - 1] : e).contentMatch;
	for (let c = r; a && c < s; c++) a = a.matchType(n.child(c).type);
	return !a || !a.validEnd ? null : i;
}
function o0(t, e, n) {
	let r = z.empty;
	for (let i = n.length - 1; i >= 0; i--) {
		if (r.size) {
			let l = n[i].type.contentMatch.matchFragment(r);
			if (!l || !l.validEnd)
				throw new RangeError(
					'Wrapper type given to Transform.wrap does not form valid content of its parent wrapper'
				);
		}
		r = z.from(n[i].type.create(n[i].attrs, r));
	}
	let s = e.start,
		o = e.end;
	t.step(new bt(s, o, s, o, new X(r, 0, 0), n.length, !0));
}
function i0(t, e, n, r, s) {
	if (!r.isTextblock) throw new RangeError('Type given to setBlockType should be a textblock');
	let o = t.steps.length;
	t.doc.nodesBetween(e, n, (i, l) => {
		let a = typeof s == 'function' ? s(i) : s;
		if (i.isTextblock && !i.hasMarkup(r, a) && l0(t.doc, t.mapping.slice(o).map(l), r)) {
			let c = null;
			if (r.schema.linebreakReplacement) {
				let h = r.whitespace == 'pre',
					p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
				h && !p ? (c = !1) : !h && p && (c = !0);
			}
			(c === !1 && uf(t, i, l, o), Zl(t, t.mapping.slice(o).map(l, 1), r, void 0, c === null));
			let u = t.mapping.slice(o),
				d = u.map(l, 1),
				f = u.map(l + i.nodeSize, 1);
			return (
				t.step(new bt(d, f, d + 1, f - 1, new X(z.from(r.create(a, null, i.marks)), 0, 0), 1, !0)),
				c === !0 && cf(t, i, l, o),
				!1
			);
		}
	});
}
function cf(t, e, n, r) {
	e.forEach((s, o) => {
		if (s.isText) {
			let i,
				l = /\r?\n|\r/g;
			for (; (i = l.exec(s.text)); ) {
				let a = t.mapping.slice(r).map(n + 1 + o + i.index);
				t.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
			}
		}
	});
}
function uf(t, e, n, r) {
	e.forEach((s, o) => {
		if (s.type == s.type.schema.linebreakReplacement) {
			let i = t.mapping.slice(r).map(n + 1 + o);
			t.replaceWith(
				i,
				i + 1,
				e.type.schema.text(`
`)
			);
		}
	});
}
function l0(t, e, n) {
	let r = t.resolve(e),
		s = r.index();
	return r.parent.canReplaceWith(s, s + 1, n);
}
function a0(t, e, n, r, s) {
	let o = t.doc.nodeAt(e);
	if (!o) throw new RangeError('No node at given position');
	n || (n = o.type);
	let i = n.create(r, null, s || o.marks);
	if (o.isLeaf) return t.replaceWith(e, e + o.nodeSize, i);
	if (!n.validContent(o.content)) throw new RangeError('Invalid content for node type ' + n.name);
	t.step(new bt(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new X(z.from(i), 0, 0), 1, !0));
}
function In(t, e, n = 1, r) {
	let s = t.resolve(e),
		o = s.depth - n,
		i = (r && r[r.length - 1]) || s.parent;
	if (
		o < 0 ||
		s.parent.type.spec.isolating ||
		!s.parent.canReplace(s.index(), s.parent.childCount) ||
		!i.type.validContent(s.parent.content.cutByIndex(s.index(), s.parent.childCount))
	)
		return !1;
	for (let c = s.depth - 1, u = n - 2; c > o; c--, u--) {
		let d = s.node(c),
			f = s.index(c);
		if (d.type.spec.isolating) return !1;
		let h = d.content.cutByIndex(f, d.childCount),
			p = r && r[u + 1];
		p && (h = h.replaceChild(0, p.type.create(p.attrs)));
		let m = (r && r[u]) || d;
		if (!d.canReplace(f + 1, d.childCount) || !m.type.validContent(h)) return !1;
	}
	let l = s.indexAfter(o),
		a = r && r[0];
	return s.node(o).canReplaceWith(l, l, a ? a.type : s.node(o + 1).type);
}
function c0(t, e, n = 1, r) {
	let s = t.doc.resolve(e),
		o = z.empty,
		i = z.empty;
	for (let l = s.depth, a = s.depth - n, c = n - 1; l > a; l--, c--) {
		o = z.from(s.node(l).copy(o));
		let u = r && r[c];
		i = z.from(u ? u.type.create(u.attrs, i) : s.node(l).copy(i));
	}
	t.step(new gt(e, e, new X(o.append(i), n, n), !0));
}
function er(t, e) {
	let n = t.resolve(e),
		r = n.index();
	return df(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function u0(t, e) {
	e.content.size || t.type.compatibleContent(e.type);
	let n = t.contentMatchAt(t.childCount),
		{ linebreakReplacement: r } = t.type.schema;
	for (let s = 0; s < e.childCount; s++) {
		let o = e.child(s),
			i = o.type == r ? t.type.schema.nodes.text : o.type;
		if (((n = n.matchType(i)), !n || !t.type.allowsMarks(o.marks))) return !1;
	}
	return n.validEnd;
}
function df(t, e) {
	return !!(t && e && !t.isLeaf && u0(t, e));
}
function oi(t, e, n = -1) {
	let r = t.resolve(e);
	for (let s = r.depth; ; s--) {
		let o,
			i,
			l = r.index(s);
		if (
			(s == r.depth
				? ((o = r.nodeBefore), (i = r.nodeAfter))
				: n > 0
					? ((o = r.node(s + 1)), l++, (i = r.node(s).maybeChild(l)))
					: ((o = r.node(s).maybeChild(l - 1)), (i = r.node(s + 1))),
			o && !o.isTextblock && df(o, i) && r.node(s).canReplace(l, l + 1))
		)
			return e;
		if (s == 0) break;
		e = n < 0 ? r.before(s) : r.after(s);
	}
}
function d0(t, e, n) {
	let r = null,
		{ linebreakReplacement: s } = t.doc.type.schema,
		o = t.doc.resolve(e - n),
		i = o.node().type;
	if (s && i.inlineContent) {
		let u = i.whitespace == 'pre',
			d = !!i.contentMatch.matchType(s);
		u && !d ? (r = !1) : !u && d && (r = !0);
	}
	let l = t.steps.length;
	if (r === !1) {
		let u = t.doc.resolve(e + n);
		uf(t, u.node(), u.before(), l);
	}
	i.inlineContent && Zl(t, e + n - 1, i, o.node().contentMatchAt(o.index()), r == null);
	let a = t.mapping.slice(l),
		c = a.map(e - n);
	if ((t.step(new gt(c, a.map(e + n, -1), X.empty, !0)), r === !0)) {
		let u = t.doc.resolve(c);
		cf(t, u.node(), u.before(), t.steps.length);
	}
	return t;
}
function f0(t, e, n) {
	let r = t.resolve(e);
	if (r.parent.canReplaceWith(r.index(), r.index(), n)) return e;
	if (r.parentOffset == 0)
		for (let s = r.depth - 1; s >= 0; s--) {
			let o = r.index(s);
			if (r.node(s).canReplaceWith(o, o, n)) return r.before(s + 1);
			if (o > 0) return null;
		}
	if (r.parentOffset == r.parent.content.size)
		for (let s = r.depth - 1; s >= 0; s--) {
			let o = r.indexAfter(s);
			if (r.node(s).canReplaceWith(o, o, n)) return r.after(s + 1);
			if (o < r.node(s).childCount) return null;
		}
	return null;
}
function ff(t, e, n) {
	let r = t.resolve(e);
	if (!n.content.size) return e;
	let s = n.content;
	for (let o = 0; o < n.openStart; o++) s = s.firstChild.content;
	for (let o = 1; o <= (n.openStart == 0 && n.size ? 2 : 1); o++)
		for (let i = r.depth; i >= 0; i--) {
			let l = i == r.depth ? 0 : r.pos <= (r.start(i + 1) + r.end(i + 1)) / 2 ? -1 : 1,
				a = r.index(i) + (l > 0 ? 1 : 0),
				c = r.node(i),
				u = !1;
			if (o == 1) u = c.canReplace(a, a, s);
			else {
				let d = c.contentMatchAt(a).findWrapping(s.firstChild.type);
				u = d && c.canReplaceWith(a, a, d[0]);
			}
			if (u) return l == 0 ? r.pos : l < 0 ? r.before(i + 1) : r.after(i + 1);
		}
	return null;
}
function ii(t, e, n = e, r = X.empty) {
	if (e == n && !r.size) return null;
	let s = t.resolve(e),
		o = t.resolve(n);
	return hf(s, o, r) ? new gt(e, n, r) : new h0(s, o, r).fit();
}
function hf(t, e, n) {
	return (
		!n.openStart &&
		!n.openEnd &&
		t.start() == e.start() &&
		t.parent.canReplace(t.index(), e.index(), n.content)
	);
}
class h0 {
	constructor(e, n, r) {
		((this.$from = e),
			(this.$to = n),
			(this.unplaced = r),
			(this.frontier = []),
			(this.placed = z.empty));
		for (let s = 0; s <= e.depth; s++) {
			let o = e.node(s);
			this.frontier.push({ type: o.type, match: o.contentMatchAt(e.indexAfter(s)) });
		}
		for (let s = e.depth; s > 0; s--) this.placed = z.from(e.node(s).copy(this.placed));
	}
	get depth() {
		return this.frontier.length - 1;
	}
	fit() {
		for (; this.unplaced.size; ) {
			let c = this.findFittable();
			c ? this.placeNodes(c) : this.openMore() || this.dropNode();
		}
		let e = this.mustMoveInline(),
			n = this.placed.size - this.depth - this.$from.depth,
			r = this.$from,
			s = this.close(e < 0 ? this.$to : r.doc.resolve(e));
		if (!s) return null;
		let o = this.placed,
			i = r.depth,
			l = s.depth;
		for (; i && l && o.childCount == 1; ) ((o = o.firstChild.content), i--, l--);
		let a = new X(o, i, l);
		return e > -1
			? new bt(r.pos, e, this.$to.pos, this.$to.end(), a, n)
			: a.size || r.pos != this.$to.pos
				? new gt(r.pos, s.pos, a)
				: null;
	}
	findFittable() {
		let e = this.unplaced.openStart;
		for (let n = this.unplaced.content, r = 0, s = this.unplaced.openEnd; r < e; r++) {
			let o = n.firstChild;
			if ((n.childCount > 1 && (s = 0), o.type.spec.isolating && s <= r)) {
				e = r;
				break;
			}
			n = o.content;
		}
		for (let n = 1; n <= 2; n++)
			for (let r = n == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
				let s,
					o = null;
				r
					? ((o = Di(this.unplaced.content, r - 1).firstChild), (s = o.content))
					: (s = this.unplaced.content);
				let i = s.firstChild;
				for (let l = this.depth; l >= 0; l--) {
					let { type: a, match: c } = this.frontier[l],
						u,
						d = null;
					if (
						n == 1 &&
						(i
							? c.matchType(i.type) || (d = c.fillBefore(z.from(i), !1))
							: o && a.compatibleContent(o.type))
					)
						return { sliceDepth: r, frontierDepth: l, parent: o, inject: d };
					if (n == 2 && i && (u = c.findWrapping(i.type)))
						return { sliceDepth: r, frontierDepth: l, parent: o, wrap: u };
					if (o && c.matchType(o.type)) break;
				}
			}
	}
	openMore() {
		let { content: e, openStart: n, openEnd: r } = this.unplaced,
			s = Di(e, n);
		return !s.childCount || s.firstChild.isLeaf
			? !1
			: ((this.unplaced = new X(e, n + 1, Math.max(r, s.size + n >= e.size - r ? n + 1 : 0))), !0);
	}
	dropNode() {
		let { content: e, openStart: n, openEnd: r } = this.unplaced,
			s = Di(e, n);
		if (s.childCount <= 1 && n > 0) {
			let o = e.size - n <= n + s.size;
			this.unplaced = new X(ns(e, n - 1, 1), n - 1, o ? n - 1 : r);
		} else this.unplaced = new X(ns(e, n, 1), n, r);
	}
	placeNodes({ sliceDepth: e, frontierDepth: n, parent: r, inject: s, wrap: o }) {
		for (; this.depth > n; ) this.closeFrontierNode();
		if (o) for (let m = 0; m < o.length; m++) this.openFrontierNode(o[m]);
		let i = this.unplaced,
			l = r ? r.content : i.content,
			a = i.openStart - e,
			c = 0,
			u = [],
			{ match: d, type: f } = this.frontier[n];
		if (s) {
			for (let m = 0; m < s.childCount; m++) u.push(s.child(m));
			d = d.matchFragment(s);
		}
		let h = l.size + e - (i.content.size - i.openEnd);
		for (; c < l.childCount; ) {
			let m = l.child(c),
				g = d.matchType(m.type);
			if (!g) break;
			(c++,
				(c > 1 || a == 0 || m.content.size) &&
					((d = g),
					u.push(pf(m.mark(f.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1))));
		}
		let p = c == l.childCount;
		(p || (h = -1),
			(this.placed = rs(this.placed, n, z.from(u))),
			(this.frontier[n].match = d),
			p &&
				h < 0 &&
				r &&
				r.type == this.frontier[this.depth].type &&
				this.frontier.length > 1 &&
				this.closeFrontierNode());
		for (let m = 0, g = l; m < h; m++) {
			let b = g.lastChild;
			(this.frontier.push({ type: b.type, match: b.contentMatchAt(b.childCount) }),
				(g = b.content));
		}
		this.unplaced = p
			? e == 0
				? X.empty
				: new X(ns(i.content, e - 1, 1), e - 1, h < 0 ? i.openEnd : e - 1)
			: new X(ns(i.content, e, c), i.openStart, i.openEnd);
	}
	mustMoveInline() {
		if (!this.$to.parent.isTextblock) return -1;
		let e = this.frontier[this.depth],
			n;
		if (
			!e.type.isTextblock ||
			!Ri(this.$to, this.$to.depth, e.type, e.match, !1) ||
			(this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
		)
			return -1;
		let { depth: r } = this.$to,
			s = this.$to.after(r);
		for (; r > 1 && s == this.$to.end(--r); ) ++s;
		return s;
	}
	findCloseLevel(e) {
		e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
			let { match: r, type: s } = this.frontier[n],
				o = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)),
				i = Ri(e, n, s, r, o);
			if (i) {
				for (let l = n - 1; l >= 0; l--) {
					let { match: a, type: c } = this.frontier[l],
						u = Ri(e, l, c, a, !0);
					if (!u || u.childCount) continue e;
				}
				return { depth: n, fit: i, move: o ? e.doc.resolve(e.after(n + 1)) : e };
			}
		}
	}
	close(e) {
		let n = this.findCloseLevel(e);
		if (!n) return null;
		for (; this.depth > n.depth; ) this.closeFrontierNode();
		(n.fit.childCount && (this.placed = rs(this.placed, n.depth, n.fit)), (e = n.move));
		for (let r = n.depth + 1; r <= e.depth; r++) {
			let s = e.node(r),
				o = s.type.contentMatch.fillBefore(s.content, !0, e.index(r));
			this.openFrontierNode(s.type, s.attrs, o);
		}
		return e;
	}
	openFrontierNode(e, n = null, r) {
		let s = this.frontier[this.depth];
		((s.match = s.match.matchType(e)),
			(this.placed = rs(this.placed, this.depth, z.from(e.create(n, r)))),
			this.frontier.push({ type: e, match: e.contentMatch }));
	}
	closeFrontierNode() {
		let n = this.frontier.pop().match.fillBefore(z.empty, !0);
		n.childCount && (this.placed = rs(this.placed, this.frontier.length, n));
	}
}
function ns(t, e, n) {
	return e == 0
		? t.cutByIndex(n, t.childCount)
		: t.replaceChild(0, t.firstChild.copy(ns(t.firstChild.content, e - 1, n)));
}
function rs(t, e, n) {
	return e == 0
		? t.append(n)
		: t.replaceChild(t.childCount - 1, t.lastChild.copy(rs(t.lastChild.content, e - 1, n)));
}
function Di(t, e) {
	for (let n = 0; n < e; n++) t = t.firstChild.content;
	return t;
}
function pf(t, e, n) {
	if (e <= 0) return t;
	let r = t.content;
	return (
		e > 1 && (r = r.replaceChild(0, pf(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))),
		e > 0 &&
			((r = t.type.contentMatch.fillBefore(r).append(r)),
			n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(z.empty, !0)))),
		t.copy(r)
	);
}
function Ri(t, e, n, r, s) {
	let o = t.node(e),
		i = s ? t.indexAfter(e) : t.index(e);
	if (i == o.childCount && !n.compatibleContent(o.type)) return null;
	let l = r.fillBefore(o.content, !0, i);
	return l && !p0(n, o.content, i) ? l : null;
}
function p0(t, e, n) {
	for (let r = n; r < e.childCount; r++) if (!t.allowsMarks(e.child(r).marks)) return !0;
	return !1;
}
function m0(t) {
	return t.spec.defining || t.spec.definingForContent;
}
function g0(t, e, n, r) {
	if (!r.size) return t.deleteRange(e, n);
	let s = t.doc.resolve(e),
		o = t.doc.resolve(n);
	if (hf(s, o, r)) return t.step(new gt(e, n, r));
	let i = gf(s, o);
	i[i.length - 1] == 0 && i.pop();
	let l = -(s.depth + 1);
	i.unshift(l);
	for (let f = s.depth, h = s.pos - 1; f > 0; f--, h--) {
		let p = s.node(f).type.spec;
		if (p.defining || p.definingAsContext || p.isolating) break;
		i.indexOf(f) > -1 ? (l = f) : s.before(f) == h && i.splice(1, 0, -f);
	}
	let a = i.indexOf(l),
		c = [],
		u = r.openStart;
	for (let f = r.content, h = 0; ; h++) {
		let p = f.firstChild;
		if ((c.push(p), h == r.openStart)) break;
		f = p.content;
	}
	for (let f = u - 1; f >= 0; f--) {
		let h = c[f],
			p = m0(h.type);
		if (p && !h.sameMarkup(s.node(Math.abs(l) - 1))) u = f;
		else if (p || !h.type.isTextblock) break;
	}
	for (let f = r.openStart; f >= 0; f--) {
		let h = (f + u + 1) % (r.openStart + 1),
			p = c[h];
		if (p)
			for (let m = 0; m < i.length; m++) {
				let g = i[(m + a) % i.length],
					b = !0;
				g < 0 && ((b = !1), (g = -g));
				let S = s.node(g - 1),
					O = s.index(g - 1);
				if (S.canReplaceWith(O, O, p.type, p.marks))
					return t.replace(
						s.before(g),
						b ? o.after(g) : n,
						new X(mf(r.content, 0, r.openStart, h), h, r.openEnd)
					);
			}
	}
	let d = t.steps.length;
	for (let f = i.length - 1; f >= 0 && (t.replace(e, n, r), !(t.steps.length > d)); f--) {
		let h = i[f];
		h < 0 || ((e = s.before(h)), (n = o.after(h)));
	}
}
function mf(t, e, n, r, s) {
	if (e < n) {
		let o = t.firstChild;
		t = t.replaceChild(0, o.copy(mf(o.content, e + 1, n, r, o)));
	}
	if (e > r) {
		let o = s.contentMatchAt(0),
			i = o.fillBefore(t).append(t);
		t = i.append(o.matchFragment(i).fillBefore(z.empty, !0));
	}
	return t;
}
function y0(t, e, n, r) {
	if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
		let s = f0(t.doc, e, r.type);
		s != null && (e = n = s);
	}
	t.replaceRange(e, n, new X(z.from(r), 0, 0));
}
function b0(t, e, n) {
	let r = t.doc.resolve(e),
		s = t.doc.resolve(n),
		o = gf(r, s);
	for (let i = 0; i < o.length; i++) {
		let l = o[i],
			a = i == o.length - 1;
		if ((a && l == 0) || r.node(l).type.contentMatch.validEnd)
			return t.delete(r.start(l), s.end(l));
		if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), s.indexAfter(l - 1))))
			return t.delete(r.before(l), s.after(l));
	}
	for (let i = 1; i <= r.depth && i <= s.depth; i++)
		if (
			e - r.start(i) == r.depth - i &&
			n > r.end(i) &&
			s.end(i) - n != s.depth - i &&
			r.start(i - 1) == s.start(i - 1) &&
			r.node(i - 1).canReplace(r.index(i - 1), s.index(i - 1))
		)
			return t.delete(r.before(i), n);
	t.delete(e, n);
}
function gf(t, e) {
	let n = [],
		r = Math.min(t.depth, e.depth);
	for (let s = r; s >= 0; s--) {
		let o = t.start(s);
		if (
			o < t.pos - (t.depth - s) ||
			e.end(s) > e.pos + (e.depth - s) ||
			t.node(s).type.spec.isolating ||
			e.node(s).type.spec.isolating
		)
			break;
		(o == e.start(s) ||
			(s == t.depth &&
				s == e.depth &&
				t.parent.inlineContent &&
				e.parent.inlineContent &&
				s &&
				e.start(s - 1) == o - 1)) &&
			n.push(s);
	}
	return n;
}
class Pr extends Dt {
	constructor(e, n, r) {
		(super(), (this.pos = e), (this.attr = n), (this.value = r));
	}
	apply(e) {
		let n = e.nodeAt(this.pos);
		if (!n) return ft.fail("No node at attribute step's position");
		let r = Object.create(null);
		for (let o in n.attrs) r[o] = n.attrs[o];
		r[this.attr] = this.value;
		let s = n.type.create(r, null, n.marks);
		return ft.fromReplace(e, this.pos, this.pos + 1, new X(z.from(s), 0, n.isLeaf ? 0 : 1));
	}
	getMap() {
		return Wt.empty;
	}
	invert(e) {
		return new Pr(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
	}
	map(e) {
		let n = e.mapResult(this.pos, 1);
		return n.deletedAfter ? null : new Pr(n.pos, this.attr, this.value);
	}
	toJSON() {
		return { stepType: 'attr', pos: this.pos, attr: this.attr, value: this.value };
	}
	static fromJSON(e, n) {
		if (typeof n.pos != 'number' || typeof n.attr != 'string')
			throw new RangeError('Invalid input for AttrStep.fromJSON');
		return new Pr(n.pos, n.attr, n.value);
	}
}
Dt.jsonID('attr', Pr);
class Cs extends Dt {
	constructor(e, n) {
		(super(), (this.attr = e), (this.value = n));
	}
	apply(e) {
		let n = Object.create(null);
		for (let s in e.attrs) n[s] = e.attrs[s];
		n[this.attr] = this.value;
		let r = e.type.create(n, e.content, e.marks);
		return ft.ok(r);
	}
	getMap() {
		return Wt.empty;
	}
	invert(e) {
		return new Cs(this.attr, e.attrs[this.attr]);
	}
	map(e) {
		return this;
	}
	toJSON() {
		return { stepType: 'docAttr', attr: this.attr, value: this.value };
	}
	static fromJSON(e, n) {
		if (typeof n.attr != 'string') throw new RangeError('Invalid input for DocAttrStep.fromJSON');
		return new Cs(n.attr, n.value);
	}
}
Dt.jsonID('docAttr', Cs);
let $r = class extends Error {};
$r = function t(e) {
	let n = Error.call(this, e);
	return ((n.__proto__ = t.prototype), n);
};
$r.prototype = Object.create(Error.prototype);
$r.prototype.constructor = $r;
$r.prototype.name = 'TransformError';
class ta {
	constructor(e) {
		((this.doc = e), (this.steps = []), (this.docs = []), (this.mapping = new Ss()));
	}
	get before() {
		return this.docs.length ? this.docs[0] : this.doc;
	}
	step(e) {
		let n = this.maybeStep(e);
		if (n.failed) throw new $r(n.failed);
		return this;
	}
	maybeStep(e) {
		let n = e.apply(this.doc);
		return (n.failed || this.addStep(e, n.doc), n);
	}
	get docChanged() {
		return this.steps.length > 0;
	}
	changedRange() {
		let e = 1e9,
			n = -1e9;
		for (let r = 0; r < this.mapping.maps.length; r++) {
			let s = this.mapping.maps[r];
			(r && ((e = s.map(e, 1)), (n = s.map(n, -1))),
				s.forEach((o, i, l, a) => {
					((e = Math.min(e, l)), (n = Math.max(n, a)));
				}));
		}
		return e == 1e9 ? null : { from: e, to: n };
	}
	addStep(e, n) {
		(this.docs.push(this.doc),
			this.steps.push(e),
			this.mapping.appendMap(e.getMap()),
			(this.doc = n));
	}
	replace(e, n = e, r = X.empty) {
		let s = ii(this.doc, e, n, r);
		return (s && this.step(s), this);
	}
	replaceWith(e, n, r) {
		return this.replace(e, n, new X(z.from(r), 0, 0));
	}
	delete(e, n) {
		return this.replace(e, n, X.empty);
	}
	insert(e, n) {
		return this.replaceWith(e, e, n);
	}
	replaceRange(e, n, r) {
		return (g0(this, e, n, r), this);
	}
	replaceRangeWith(e, n, r) {
		return (y0(this, e, n, r), this);
	}
	deleteRange(e, n) {
		return (b0(this, e, n), this);
	}
	lift(e, n) {
		return (n0(this, e, n), this);
	}
	join(e, n = 1) {
		return (d0(this, e, n), this);
	}
	wrap(e, n) {
		return (o0(this, e, n), this);
	}
	setBlockType(e, n = e, r, s = null) {
		return (i0(this, e, n, r, s), this);
	}
	setNodeMarkup(e, n, r = null, s) {
		return (a0(this, e, n, r, s), this);
	}
	setNodeAttribute(e, n, r) {
		return (this.step(new Pr(e, n, r)), this);
	}
	setDocAttribute(e, n) {
		return (this.step(new Cs(e, n)), this);
	}
	addNodeMark(e, n) {
		return (this.step(new Un(e, n)), this);
	}
	removeNodeMark(e, n) {
		let r = this.doc.nodeAt(e);
		if (!r) throw new RangeError('No node at position ' + e);
		if (n instanceof Je) n.isInSet(r.marks) && this.step(new br(e, n));
		else {
			let s = r.marks,
				o,
				i = [];
			for (; (o = n.isInSet(s)); ) (i.push(new br(e, o)), (s = o.removeFromSet(s)));
			for (let l = i.length - 1; l >= 0; l--) this.step(i[l]);
		}
		return this;
	}
	split(e, n = 1, r) {
		return (c0(this, e, n, r), this);
	}
	addMark(e, n, r) {
		return (Zg(this, e, n, r), this);
	}
	removeMark(e, n, r) {
		return (e0(this, e, n, r), this);
	}
	clearIncompatible(e, n, r) {
		return (Zl(this, e, n, r), this);
	}
}
const Li = Object.create(null);
class ve {
	constructor(e, n, r) {
		((this.$anchor = e), (this.$head = n), (this.ranges = r || [new yf(e.min(n), e.max(n))]));
	}
	get anchor() {
		return this.$anchor.pos;
	}
	get head() {
		return this.$head.pos;
	}
	get from() {
		return this.$from.pos;
	}
	get to() {
		return this.$to.pos;
	}
	get $from() {
		return this.ranges[0].$from;
	}
	get $to() {
		return this.ranges[0].$to;
	}
	get empty() {
		let e = this.ranges;
		for (let n = 0; n < e.length; n++) if (e[n].$from.pos != e[n].$to.pos) return !1;
		return !0;
	}
	content() {
		return this.$from.doc.slice(this.from, this.to, !0);
	}
	replace(e, n = X.empty) {
		let r = n.content.lastChild,
			s = null;
		for (let l = 0; l < n.openEnd; l++) ((s = r), (r = r.lastChild));
		let o = e.steps.length,
			i = this.ranges;
		for (let l = 0; l < i.length; l++) {
			let { $from: a, $to: c } = i[l],
				u = e.mapping.slice(o);
			(e.replaceRange(u.map(a.pos), u.map(c.pos), l ? X.empty : n),
				l == 0 && vc(e, o, (r ? r.isInline : s && s.isTextblock) ? -1 : 1));
		}
	}
	replaceWith(e, n) {
		let r = e.steps.length,
			s = this.ranges;
		for (let o = 0; o < s.length; o++) {
			let { $from: i, $to: l } = s[o],
				a = e.mapping.slice(r),
				c = a.map(i.pos),
				u = a.map(l.pos);
			o ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, n), vc(e, r, n.isInline ? -1 : 1));
		}
	}
	static findFrom(e, n, r = !1) {
		let s = e.parent.inlineContent ? new pe(e) : Nr(e.node(0), e.parent, e.pos, e.index(), n, r);
		if (s) return s;
		for (let o = e.depth - 1; o >= 0; o--) {
			let i =
				n < 0
					? Nr(e.node(0), e.node(o), e.before(o + 1), e.index(o), n, r)
					: Nr(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, n, r);
			if (i) return i;
		}
		return null;
	}
	static near(e, n = 1) {
		return this.findFrom(e, n) || this.findFrom(e, -n) || new Ut(e.node(0));
	}
	static atStart(e) {
		return Nr(e, e, 0, 0, 1) || new Ut(e);
	}
	static atEnd(e) {
		return Nr(e, e, e.content.size, e.childCount, -1) || new Ut(e);
	}
	static fromJSON(e, n) {
		if (!n || !n.type) throw new RangeError('Invalid input for Selection.fromJSON');
		let r = Li[n.type];
		if (!r) throw new RangeError(`No selection type ${n.type} defined`);
		return r.fromJSON(e, n);
	}
	static jsonID(e, n) {
		if (e in Li) throw new RangeError('Duplicate use of selection JSON ID ' + e);
		return ((Li[e] = n), (n.prototype.jsonID = e), n);
	}
	getBookmark() {
		return pe.between(this.$anchor, this.$head).getBookmark();
	}
}
ve.prototype.visible = !0;
class yf {
	constructor(e, n) {
		((this.$from = e), (this.$to = n));
	}
}
let yc = !1;
function bc(t) {
	!yc &&
		!t.parent.inlineContent &&
		((yc = !0),
		console.warn(
			'TextSelection endpoint not pointing into a node with inline content (' +
				t.parent.type.name +
				')'
		));
}
class pe extends ve {
	constructor(e, n = e) {
		(bc(e), bc(n), super(e, n));
	}
	get $cursor() {
		return this.$anchor.pos == this.$head.pos ? this.$head : null;
	}
	map(e, n) {
		let r = e.resolve(n.map(this.head));
		if (!r.parent.inlineContent) return ve.near(r);
		let s = e.resolve(n.map(this.anchor));
		return new pe(s.parent.inlineContent ? s : r, r);
	}
	replace(e, n = X.empty) {
		if ((super.replace(e, n), n == X.empty)) {
			let r = this.$from.marksAcross(this.$to);
			r && e.ensureMarks(r);
		}
	}
	eq(e) {
		return e instanceof pe && e.anchor == this.anchor && e.head == this.head;
	}
	getBookmark() {
		return new li(this.anchor, this.head);
	}
	toJSON() {
		return { type: 'text', anchor: this.anchor, head: this.head };
	}
	static fromJSON(e, n) {
		if (typeof n.anchor != 'number' || typeof n.head != 'number')
			throw new RangeError('Invalid input for TextSelection.fromJSON');
		return new pe(e.resolve(n.anchor), e.resolve(n.head));
	}
	static create(e, n, r = n) {
		let s = e.resolve(n);
		return new this(s, r == n ? s : e.resolve(r));
	}
	static between(e, n, r) {
		let s = e.pos - n.pos;
		if (((!r || s) && (r = s >= 0 ? 1 : -1), !n.parent.inlineContent)) {
			let o = ve.findFrom(n, r, !0) || ve.findFrom(n, -r, !0);
			if (o) n = o.$head;
			else return ve.near(n, r);
		}
		return (
			e.parent.inlineContent ||
				(s == 0
					? (e = n)
					: ((e = (ve.findFrom(e, -r, !0) || ve.findFrom(e, r, !0)).$anchor),
						e.pos < n.pos != s < 0 && (e = n))),
			new pe(e, n)
		);
	}
}
ve.jsonID('text', pe);
class li {
	constructor(e, n) {
		((this.anchor = e), (this.head = n));
	}
	map(e) {
		return new li(e.map(this.anchor), e.map(this.head));
	}
	resolve(e) {
		return pe.between(e.resolve(this.anchor), e.resolve(this.head));
	}
}
class fe extends ve {
	constructor(e) {
		let n = e.nodeAfter,
			r = e.node(0).resolve(e.pos + n.nodeSize);
		(super(e, r), (this.node = n));
	}
	map(e, n) {
		let { deleted: r, pos: s } = n.mapResult(this.anchor),
			o = e.resolve(s);
		return r ? ve.near(o) : new fe(o);
	}
	content() {
		return new X(z.from(this.node), 0, 0);
	}
	eq(e) {
		return e instanceof fe && e.anchor == this.anchor;
	}
	toJSON() {
		return { type: 'node', anchor: this.anchor };
	}
	getBookmark() {
		return new na(this.anchor);
	}
	static fromJSON(e, n) {
		if (typeof n.anchor != 'number')
			throw new RangeError('Invalid input for NodeSelection.fromJSON');
		return new fe(e.resolve(n.anchor));
	}
	static create(e, n) {
		return new fe(e.resolve(n));
	}
	static isSelectable(e) {
		return !e.isText && e.type.spec.selectable !== !1;
	}
}
fe.prototype.visible = !1;
ve.jsonID('node', fe);
class na {
	constructor(e) {
		this.anchor = e;
	}
	map(e) {
		let { deleted: n, pos: r } = e.mapResult(this.anchor);
		return n ? new li(r, r) : new na(r);
	}
	resolve(e) {
		let n = e.resolve(this.anchor),
			r = n.nodeAfter;
		return r && fe.isSelectable(r) ? new fe(n) : ve.near(n);
	}
}
class Ut extends ve {
	constructor(e) {
		super(e.resolve(0), e.resolve(e.content.size));
	}
	replace(e, n = X.empty) {
		if (n == X.empty) {
			e.delete(0, e.doc.content.size);
			let r = ve.atStart(e.doc);
			r.eq(e.selection) || e.setSelection(r);
		} else super.replace(e, n);
	}
	toJSON() {
		return { type: 'all' };
	}
	static fromJSON(e) {
		return new Ut(e);
	}
	map(e) {
		return new Ut(e);
	}
	eq(e) {
		return e instanceof Ut;
	}
	getBookmark() {
		return v0;
	}
}
ve.jsonID('all', Ut);
const v0 = {
	map() {
		return this;
	},
	resolve(t) {
		return new Ut(t);
	}
};
function Nr(t, e, n, r, s, o = !1) {
	if (e.inlineContent) return pe.create(t, n);
	for (let i = r - (s > 0 ? 0 : 1); s > 0 ? i < e.childCount : i >= 0; i += s) {
		let l = e.child(i);
		if (l.isAtom) {
			if (!o && fe.isSelectable(l)) return fe.create(t, n - (s < 0 ? l.nodeSize : 0));
		} else {
			let a = Nr(t, l, n + s, s < 0 ? l.childCount : 0, s, o);
			if (a) return a;
		}
		n += l.nodeSize * s;
	}
	return null;
}
function vc(t, e, n) {
	let r = t.steps.length - 1;
	if (r < e) return;
	let s = t.steps[r];
	if (!(s instanceof gt || s instanceof bt)) return;
	let o = t.mapping.maps[r],
		i;
	(o.forEach((l, a, c, u) => {
		i == null && (i = u);
	}),
		t.setSelection(ve.near(t.doc.resolve(i), n)));
}
const kc = 1,
	Js = 2,
	xc = 4;
class k0 extends ta {
	constructor(e) {
		(super(e.doc),
			(this.curSelectionFor = 0),
			(this.updated = 0),
			(this.meta = Object.create(null)),
			(this.time = Date.now()),
			(this.curSelection = e.selection),
			(this.storedMarks = e.storedMarks));
	}
	get selection() {
		return (
			this.curSelectionFor < this.steps.length &&
				((this.curSelection = this.curSelection.map(
					this.doc,
					this.mapping.slice(this.curSelectionFor)
				)),
				(this.curSelectionFor = this.steps.length)),
			this.curSelection
		);
	}
	setSelection(e) {
		if (e.$from.doc != this.doc)
			throw new RangeError('Selection passed to setSelection must point at the current document');
		return (
			(this.curSelection = e),
			(this.curSelectionFor = this.steps.length),
			(this.updated = (this.updated | kc) & ~Js),
			(this.storedMarks = null),
			this
		);
	}
	get selectionSet() {
		return (this.updated & kc) > 0;
	}
	setStoredMarks(e) {
		return ((this.storedMarks = e), (this.updated |= Js), this);
	}
	ensureMarks(e) {
		return (
			Je.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e),
			this
		);
	}
	addStoredMark(e) {
		return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
	}
	removeStoredMark(e) {
		return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
	}
	get storedMarksSet() {
		return (this.updated & Js) > 0;
	}
	addStep(e, n) {
		(super.addStep(e, n), (this.updated = this.updated & ~Js), (this.storedMarks = null));
	}
	setTime(e) {
		return ((this.time = e), this);
	}
	replaceSelection(e) {
		return (this.selection.replace(this, e), this);
	}
	replaceSelectionWith(e, n = !0) {
		let r = this.selection;
		return (
			n &&
				(e = e.mark(
					this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || Je.none)
				)),
			r.replaceWith(this, e),
			this
		);
	}
	deleteSelection() {
		return (this.selection.replace(this), this);
	}
	insertText(e, n, r) {
		let s = this.doc.type.schema;
		if (n == null) return e ? this.replaceSelectionWith(s.text(e), !0) : this.deleteSelection();
		{
			if ((r == null && (r = n), !e)) return this.deleteRange(n, r);
			let o = this.storedMarks;
			if (!o) {
				let i = this.doc.resolve(n);
				o = r == n ? i.marks() : i.marksAcross(this.doc.resolve(r));
			}
			return (
				this.replaceRangeWith(n, r, s.text(e, o)),
				!this.selection.empty &&
					this.selection.to == n + e.length &&
					this.setSelection(ve.near(this.selection.$to)),
				this
			);
		}
	}
	setMeta(e, n) {
		return ((this.meta[typeof e == 'string' ? e : e.key] = n), this);
	}
	getMeta(e) {
		return this.meta[typeof e == 'string' ? e : e.key];
	}
	get isGeneric() {
		for (let e in this.meta) return !1;
		return !0;
	}
	scrollIntoView() {
		return ((this.updated |= xc), this);
	}
	get scrolledIntoView() {
		return (this.updated & xc) > 0;
	}
}
function wc(t, e) {
	return !e || !t ? t : t.bind(e);
}
class ss {
	constructor(e, n, r) {
		((this.name = e), (this.init = wc(n.init, r)), (this.apply = wc(n.apply, r)));
	}
}
const x0 = [
	new ss('doc', {
		init(t) {
			return t.doc || t.schema.topNodeType.createAndFill();
		},
		apply(t) {
			return t.doc;
		}
	}),
	new ss('selection', {
		init(t, e) {
			return t.selection || ve.atStart(e.doc);
		},
		apply(t) {
			return t.selection;
		}
	}),
	new ss('storedMarks', {
		init(t) {
			return t.storedMarks || null;
		},
		apply(t, e, n, r) {
			return r.selection.$cursor ? t.storedMarks : null;
		}
	}),
	new ss('scrollToSelection', {
		init() {
			return 0;
		},
		apply(t, e) {
			return t.scrolledIntoView ? e + 1 : e;
		}
	})
];
class Pi {
	constructor(e, n) {
		((this.schema = e),
			(this.plugins = []),
			(this.pluginsByKey = Object.create(null)),
			(this.fields = x0.slice()),
			n &&
				n.forEach((r) => {
					if (this.pluginsByKey[r.key])
						throw new RangeError('Adding different instances of a keyed plugin (' + r.key + ')');
					(this.plugins.push(r),
						(this.pluginsByKey[r.key] = r),
						r.spec.state && this.fields.push(new ss(r.key, r.spec.state, r)));
				}));
	}
}
class Lr {
	constructor(e) {
		this.config = e;
	}
	get schema() {
		return this.config.schema;
	}
	get plugins() {
		return this.config.plugins;
	}
	apply(e) {
		return this.applyTransaction(e).state;
	}
	filterTransaction(e, n = -1) {
		for (let r = 0; r < this.config.plugins.length; r++)
			if (r != n) {
				let s = this.config.plugins[r];
				if (s.spec.filterTransaction && !s.spec.filterTransaction.call(s, e, this)) return !1;
			}
		return !0;
	}
	applyTransaction(e) {
		if (!this.filterTransaction(e)) return { state: this, transactions: [] };
		let n = [e],
			r = this.applyInner(e),
			s = null;
		for (;;) {
			let o = !1;
			for (let i = 0; i < this.config.plugins.length; i++) {
				let l = this.config.plugins[i];
				if (l.spec.appendTransaction) {
					let a = s ? s[i].n : 0,
						c = s ? s[i].state : this,
						u = a < n.length && l.spec.appendTransaction.call(l, a ? n.slice(a) : n, c, r);
					if (u && r.filterTransaction(u, i)) {
						if ((u.setMeta('appendedTransaction', e), !s)) {
							s = [];
							for (let d = 0; d < this.config.plugins.length; d++)
								s.push(d < i ? { state: r, n: n.length } : { state: this, n: 0 });
						}
						(n.push(u), (r = r.applyInner(u)), (o = !0));
					}
					s && (s[i] = { state: r, n: n.length });
				}
			}
			if (!o) return { state: r, transactions: n };
		}
	}
	applyInner(e) {
		if (!e.before.eq(this.doc)) throw new RangeError('Applying a mismatched transaction');
		let n = new Lr(this.config),
			r = this.config.fields;
		for (let s = 0; s < r.length; s++) {
			let o = r[s];
			n[o.name] = o.apply(e, this[o.name], this, n);
		}
		return n;
	}
	get tr() {
		return new k0(this);
	}
	static create(e) {
		let n = new Pi(e.doc ? e.doc.type.schema : e.schema, e.plugins),
			r = new Lr(n);
		for (let s = 0; s < n.fields.length; s++) r[n.fields[s].name] = n.fields[s].init(e, r);
		return r;
	}
	reconfigure(e) {
		let n = new Pi(this.schema, e.plugins),
			r = n.fields,
			s = new Lr(n);
		for (let o = 0; o < r.length; o++) {
			let i = r[o].name;
			s[i] = this.hasOwnProperty(i) ? this[i] : r[o].init(e, s);
		}
		return s;
	}
	toJSON(e) {
		let n = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
		if (
			(this.storedMarks && (n.storedMarks = this.storedMarks.map((r) => r.toJSON())),
			e && typeof e == 'object')
		)
			for (let r in e) {
				if (r == 'doc' || r == 'selection')
					throw new RangeError('The JSON fields `doc` and `selection` are reserved');
				let s = e[r],
					o = s.spec.state;
				o && o.toJSON && (n[r] = o.toJSON.call(s, this[s.key]));
			}
		return n;
	}
	static fromJSON(e, n, r) {
		if (!n) throw new RangeError('Invalid input for EditorState.fromJSON');
		if (!e.schema) throw new RangeError("Required config field 'schema' missing");
		let s = new Pi(e.schema, e.plugins),
			o = new Lr(s);
		return (
			s.fields.forEach((i) => {
				if (i.name == 'doc') o.doc = Qt.fromJSON(e.schema, n.doc);
				else if (i.name == 'selection') o.selection = ve.fromJSON(o.doc, n.selection);
				else if (i.name == 'storedMarks')
					n.storedMarks && (o.storedMarks = n.storedMarks.map(e.schema.markFromJSON));
				else {
					if (r)
						for (let l in r) {
							let a = r[l],
								c = a.spec.state;
							if (
								a.key == i.name &&
								c &&
								c.fromJSON &&
								Object.prototype.hasOwnProperty.call(n, l)
							) {
								o[i.name] = c.fromJSON.call(a, e, n[l], o);
								return;
							}
						}
					o[i.name] = i.init(e, o);
				}
			}),
			o
		);
	}
}
function bf(t, e, n) {
	for (let r in t) {
		let s = t[r];
		(s instanceof Function ? (s = s.bind(e)) : r == 'handleDOMEvents' && (s = bf(s, e, {})),
			(n[r] = s));
	}
	return n;
}
class ze {
	constructor(e) {
		((this.spec = e),
			(this.props = {}),
			e.props && bf(e.props, this, this.props),
			(this.key = e.key ? e.key.key : vf('plugin')));
	}
	getState(e) {
		return e[this.key];
	}
}
const zi = Object.create(null);
function vf(t) {
	return t in zi ? t + '$' + ++zi[t] : ((zi[t] = 0), t + '$');
}
class _e {
	constructor(e = 'key') {
		this.key = vf(e);
	}
	get(e) {
		return e.config.pluginsByKey[this.key];
	}
	getState(e) {
		return e[this.key];
	}
}
const St = function (t) {
		for (var e = 0; ; e++) if (((t = t.previousSibling), !t)) return e;
	},
	_r = function (t) {
		let e = t.assignedSlot || t.parentNode;
		return e && e.nodeType == 11 ? e.host : e;
	};
let dl = null;
const En = function (t, e, n) {
		let r = dl || (dl = document.createRange());
		return (r.setEnd(t, n ?? t.nodeValue.length), r.setStart(t, e || 0), r);
	},
	w0 = function () {
		dl = null;
	},
	vr = function (t, e, n, r) {
		return n && (Sc(t, e, n, r, -1) || Sc(t, e, n, r, 1));
	},
	S0 = /^(img|br|input|textarea|hr)$/i;
function Sc(t, e, n, r, s) {
	for (var o; ; ) {
		if (t == n && e == r) return !0;
		if (e == (s < 0 ? 0 : Xt(t))) {
			let i = t.parentNode;
			if (!i || i.nodeType != 1 || Bs(t) || S0.test(t.nodeName) || t.contentEditable == 'false')
				return !1;
			((e = St(t) + (s < 0 ? 0 : 1)), (t = i));
		} else if (t.nodeType == 1) {
			let i = t.childNodes[e + (s < 0 ? -1 : 0)];
			if (i.nodeType == 1 && i.contentEditable == 'false')
				if (!((o = i.pmViewDesc) === null || o === void 0) && o.ignoreForSelection) e += s;
				else return !1;
			else ((t = i), (e = s < 0 ? Xt(t) : 0));
		} else return !1;
	}
}
function Xt(t) {
	return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function C0(t, e) {
	for (;;) {
		if (t.nodeType == 3 && e) return t;
		if (t.nodeType == 1 && e > 0) {
			if (t.contentEditable == 'false') return null;
			((t = t.childNodes[e - 1]), (e = Xt(t)));
		} else if (t.parentNode && !Bs(t)) ((e = St(t)), (t = t.parentNode));
		else return null;
	}
}
function T0(t, e) {
	for (;;) {
		if (t.nodeType == 3 && e < t.nodeValue.length) return t;
		if (t.nodeType == 1 && e < t.childNodes.length) {
			if (t.contentEditable == 'false') return null;
			((t = t.childNodes[e]), (e = 0));
		} else if (t.parentNode && !Bs(t)) ((e = St(t) + 1), (t = t.parentNode));
		else return null;
	}
}
function M0(t, e, n) {
	for (let r = e == 0, s = e == Xt(t); r || s; ) {
		if (t == n) return !0;
		let o = St(t);
		if (((t = t.parentNode), !t)) return !1;
		((r = r && o == 0), (s = s && o == Xt(t)));
	}
}
function Bs(t) {
	let e;
	for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode);
	return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const ai = function (t) {
	return t.focusNode && vr(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function or(t, e) {
	let n = document.createEvent('Event');
	return (n.initEvent('keydown', !0, !0), (n.keyCode = t), (n.key = n.code = e), n);
}
function E0(t) {
	let e = t.activeElement;
	for (; e && e.shadowRoot; ) e = e.shadowRoot.activeElement;
	return e;
}
function A0(t, e, n) {
	if (t.caretPositionFromPoint)
		try {
			let r = t.caretPositionFromPoint(e, n);
			if (r) return { node: r.offsetNode, offset: Math.min(Xt(r.offsetNode), r.offset) };
		} catch {}
	if (t.caretRangeFromPoint) {
		let r = t.caretRangeFromPoint(e, n);
		if (r) return { node: r.startContainer, offset: Math.min(Xt(r.startContainer), r.startOffset) };
	}
}
const mn = typeof navigator < 'u' ? navigator : null,
	Cc = typeof document < 'u' ? document : null,
	tr = (mn && mn.userAgent) || '',
	fl = /Edge\/(\d+)/.exec(tr),
	kf = /MSIE \d/.exec(tr),
	hl = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(tr),
	Ft = !!(kf || hl || fl),
	Kn = kf ? document.documentMode : hl ? +hl[1] : fl ? +fl[1] : 0,
	Yt = !Ft && /gecko\/(\d+)/i.test(tr);
Yt && +(/Firefox\/(\d+)/.exec(tr) || [0, 0])[1];
const pl = !Ft && /Chrome\/(\d+)/.exec(tr),
	Ct = !!pl,
	xf = pl ? +pl[1] : 0,
	Nt = !Ft && !!mn && /Apple Computer/.test(mn.vendor),
	Hr = Nt && (/Mobile\/\w+/.test(tr) || (!!mn && mn.maxTouchPoints > 2)),
	Gt = Hr || (mn ? /Mac/.test(mn.platform) : !1),
	wf = mn ? /Win/.test(mn.platform) : !1,
	An = /Android \d/.test(tr),
	$s = !!Cc && 'webkitFontSmoothing' in Cc.documentElement.style,
	N0 = $s ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function O0(t) {
	let e = t.defaultView && t.defaultView.visualViewport;
	return e
		? { left: 0, right: e.width, top: 0, bottom: e.height }
		: {
				left: 0,
				right: t.documentElement.clientWidth,
				top: 0,
				bottom: t.documentElement.clientHeight
			};
}
function xn(t, e) {
	return typeof t == 'number' ? t : t[e];
}
function I0(t) {
	let e = t.getBoundingClientRect(),
		n = e.width / t.offsetWidth || 1,
		r = e.height / t.offsetHeight || 1;
	return {
		left: e.left,
		right: e.left + t.clientWidth * n,
		top: e.top,
		bottom: e.top + t.clientHeight * r
	};
}
function Tc(t, e, n) {
	let r = t.someProp('scrollThreshold') || 0,
		s = t.someProp('scrollMargin') || 5,
		o = t.dom.ownerDocument;
	for (let i = n || t.dom; i; ) {
		if (i.nodeType != 1) {
			i = _r(i);
			continue;
		}
		let l = i,
			a = l == o.body,
			c = a ? O0(o) : I0(l),
			u = 0,
			d = 0;
		if (
			(e.top < c.top + xn(r, 'top')
				? (d = -(c.top - e.top + xn(s, 'top')))
				: e.bottom > c.bottom - xn(r, 'bottom') &&
					(d =
						e.bottom - e.top > c.bottom - c.top
							? e.top + xn(s, 'top') - c.top
							: e.bottom - c.bottom + xn(s, 'bottom')),
			e.left < c.left + xn(r, 'left')
				? (u = -(c.left - e.left + xn(s, 'left')))
				: e.right > c.right - xn(r, 'right') && (u = e.right - c.right + xn(s, 'right')),
			u || d)
		)
			if (a) o.defaultView.scrollBy(u, d);
			else {
				let h = l.scrollLeft,
					p = l.scrollTop;
				(d && (l.scrollTop += d), u && (l.scrollLeft += u));
				let m = l.scrollLeft - h,
					g = l.scrollTop - p;
				e = { left: e.left - m, top: e.top - g, right: e.right - m, bottom: e.bottom - g };
			}
		let f = a ? 'fixed' : getComputedStyle(i).position;
		if (/^(fixed|sticky)$/.test(f)) break;
		i = f == 'absolute' ? i.offsetParent : _r(i);
	}
}
function D0(t) {
	let e = t.dom.getBoundingClientRect(),
		n = Math.max(0, e.top),
		r,
		s;
	for (let o = (e.left + e.right) / 2, i = n + 1; i < Math.min(innerHeight, e.bottom); i += 5) {
		let l = t.root.elementFromPoint(o, i);
		if (!l || l == t.dom || !t.dom.contains(l)) continue;
		let a = l.getBoundingClientRect();
		if (a.top >= n - 20) {
			((r = l), (s = a.top));
			break;
		}
	}
	return { refDOM: r, refTop: s, stack: Sf(t.dom) };
}
function Sf(t) {
	let e = [],
		n = t.ownerDocument;
	for (
		let r = t;
		r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), t != n);
		r = _r(r)
	);
	return e;
}
function R0({ refDOM: t, refTop: e, stack: n }) {
	let r = t ? t.getBoundingClientRect().top : 0;
	Cf(n, r == 0 ? 0 : r - e);
}
function Cf(t, e) {
	for (let n = 0; n < t.length; n++) {
		let { dom: r, top: s, left: o } = t[n];
		(r.scrollTop != s + e && (r.scrollTop = s + e), r.scrollLeft != o && (r.scrollLeft = o));
	}
}
let Mr = null;
function L0(t) {
	if (t.setActive) return t.setActive();
	if (Mr) return t.focus(Mr);
	let e = Sf(t);
	(t.focus(
		Mr == null
			? {
					get preventScroll() {
						return ((Mr = { preventScroll: !0 }), !0);
					}
				}
			: void 0
	),
		Mr || ((Mr = !1), Cf(e, 0)));
}
function Tf(t, e) {
	let n,
		r = 2e8,
		s,
		o = 0,
		i = e.top,
		l = e.top,
		a,
		c;
	for (let u = t.firstChild, d = 0; u; u = u.nextSibling, d++) {
		let f;
		if (u.nodeType == 1) f = u.getClientRects();
		else if (u.nodeType == 3) f = En(u).getClientRects();
		else continue;
		for (let h = 0; h < f.length; h++) {
			let p = f[h];
			if (p.top <= i && p.bottom >= l) {
				((i = Math.max(p.bottom, i)), (l = Math.min(p.top, l)));
				let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
				if (m < r) {
					((n = u),
						(r = m),
						(s =
							m && n.nodeType == 3 ? { left: p.right < e.left ? p.right : p.left, top: e.top } : e),
						u.nodeType == 1 && m && (o = d + (e.left >= (p.left + p.right) / 2 ? 1 : 0)));
					continue;
				}
			} else
				p.top > e.top &&
					!a &&
					p.left <= e.left &&
					p.right >= e.left &&
					((a = u), (c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top }));
			!n &&
				((e.left >= p.right && e.top >= p.top) || (e.left >= p.left && e.top >= p.bottom)) &&
				(o = d + 1);
		}
	}
	return (
		!n && a && ((n = a), (s = c), (r = 0)),
		n && n.nodeType == 3
			? P0(n, s)
			: !n || (r && n.nodeType == 1)
				? { node: t, offset: o }
				: Tf(n, s)
	);
}
function P0(t, e) {
	let n = t.nodeValue.length,
		r = document.createRange(),
		s;
	for (let o = 0; o < n; o++) {
		(r.setEnd(t, o + 1), r.setStart(t, o));
		let i = Bn(r, 1);
		if (i.top != i.bottom && ra(e, i)) {
			s = { node: t, offset: o + (e.left >= (i.left + i.right) / 2 ? 1 : 0) };
			break;
		}
	}
	return (r.detach(), s || { node: t, offset: 0 });
}
function ra(t, e) {
	return (
		t.left >= e.left - 1 && t.left <= e.right + 1 && t.top >= e.top - 1 && t.top <= e.bottom + 1
	);
}
function z0(t, e) {
	let n = t.parentNode;
	return n && /^li$/i.test(n.nodeName) && e.left < t.getBoundingClientRect().left ? n : t;
}
function B0(t, e, n) {
	let { node: r, offset: s } = Tf(e, n),
		o = -1;
	if (r.nodeType == 1 && !r.firstChild) {
		let i = r.getBoundingClientRect();
		o = i.left != i.right && n.left > (i.left + i.right) / 2 ? 1 : -1;
	}
	return t.docView.posFromDOM(r, s, o);
}
function $0(t, e, n, r) {
	let s = -1;
	for (let o = e, i = !1; o != t.dom; ) {
		let l = t.docView.nearestDesc(o, !0),
			a;
		if (!l) return null;
		if (
			l.dom.nodeType == 1 &&
			((l.node.isBlock && l.parent) || !l.contentDOM) &&
			((a = l.dom.getBoundingClientRect()).width || a.height) &&
			(l.node.isBlock &&
				l.parent &&
				!/^T(R|BODY|HEAD|FOOT)$/.test(l.dom.nodeName) &&
				((!i && a.left > r.left) || a.top > r.top
					? (s = l.posBefore)
					: ((!i && a.right < r.left) || a.bottom < r.top) && (s = l.posAfter),
				(i = !0)),
			!l.contentDOM && s < 0 && !l.node.isText)
		)
			return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2)
				? l.posBefore
				: l.posAfter;
		o = l.dom.parentNode;
	}
	return s > -1 ? s : t.docView.posFromDOM(e, n, -1);
}
function Mf(t, e, n) {
	let r = t.childNodes.length;
	if (r && n.top < n.bottom)
		for (
			let s = Math.max(
					0,
					Math.min(r - 1, Math.floor((r * (e.top - n.top)) / (n.bottom - n.top)) - 2)
				),
				o = s;
			;
		) {
			let i = t.childNodes[o];
			if (i.nodeType == 1) {
				let l = i.getClientRects();
				for (let a = 0; a < l.length; a++) {
					let c = l[a];
					if (ra(e, c)) return Mf(i, e, c);
				}
			}
			if ((o = (o + 1) % r) == s) break;
		}
	return t;
}
function _0(t, e) {
	let n = t.dom.ownerDocument,
		r,
		s = 0,
		o = A0(n, e.left, e.top);
	o && ({ node: r, offset: s } = o);
	let i = (t.root.elementFromPoint ? t.root : n).elementFromPoint(e.left, e.top),
		l;
	if (!i || !t.dom.contains(i.nodeType != 1 ? i.parentNode : i)) {
		let c = t.dom.getBoundingClientRect();
		if (!ra(e, c) || ((i = Mf(t.dom, e, c)), !i)) return null;
	}
	if (Nt) for (let c = i; r && c; c = _r(c)) c.draggable && (r = void 0);
	if (((i = z0(i, e)), r)) {
		if (
			Yt &&
			r.nodeType == 1 &&
			((s = Math.min(s, r.childNodes.length)), s < r.childNodes.length)
		) {
			let u = r.childNodes[s],
				d;
			u.nodeName == 'IMG' &&
				(d = u.getBoundingClientRect()).right <= e.left &&
				d.bottom > e.top &&
				s++;
		}
		let c;
		($s &&
			s &&
			r.nodeType == 1 &&
			(c = r.childNodes[s - 1]).nodeType == 1 &&
			c.contentEditable == 'false' &&
			c.getBoundingClientRect().top >= e.top &&
			s--,
			r == t.dom &&
			s == r.childNodes.length - 1 &&
			r.lastChild.nodeType == 1 &&
			e.top > r.lastChild.getBoundingClientRect().bottom
				? (l = t.state.doc.content.size)
				: (s == 0 || r.nodeType != 1 || r.childNodes[s - 1].nodeName != 'BR') &&
					(l = $0(t, r, s, e)));
	}
	l == null && (l = B0(t, i, e));
	let a = t.docView.nearestDesc(i, !0);
	return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function Mc(t) {
	return t.top < t.bottom || t.left < t.right;
}
function Bn(t, e) {
	let n = t.getClientRects();
	if (n.length) {
		let r = n[e < 0 ? 0 : n.length - 1];
		if (Mc(r)) return r;
	}
	return Array.prototype.find.call(n, Mc) || t.getBoundingClientRect();
}
const H0 = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function Ef(t, e, n) {
	let { node: r, offset: s, atom: o } = t.docView.domFromPos(e, n < 0 ? -1 : 1),
		i = $s || Yt;
	if (r.nodeType == 3)
		if (i && (H0.test(r.nodeValue) || (n < 0 ? !s : s == r.nodeValue.length))) {
			let a = Bn(En(r, s, s), n);
			if (Yt && s && /\s/.test(r.nodeValue[s - 1]) && s < r.nodeValue.length) {
				let c = Bn(En(r, s - 1, s - 1), -1);
				if (c.top == a.top) {
					let u = Bn(En(r, s, s + 1), -1);
					if (u.top != a.top) return Qr(u, u.left < c.left);
				}
			}
			return a;
		} else {
			let a = s,
				c = s,
				u = n < 0 ? 1 : -1;
			return (
				n < 0 && !s
					? (c++, (u = -1))
					: n >= 0 && s == r.nodeValue.length
						? (a--, (u = 1))
						: n < 0
							? a--
							: c++,
				Qr(Bn(En(r, a, c), u), u < 0)
			);
		}
	if (!t.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
		if (o == null && s && (n < 0 || s == Xt(r))) {
			let a = r.childNodes[s - 1];
			if (a.nodeType == 1) return Bi(a.getBoundingClientRect(), !1);
		}
		if (o == null && s < Xt(r)) {
			let a = r.childNodes[s];
			if (a.nodeType == 1) return Bi(a.getBoundingClientRect(), !0);
		}
		return Bi(r.getBoundingClientRect(), n >= 0);
	}
	if (o == null && s && (n < 0 || s == Xt(r))) {
		let a = r.childNodes[s - 1],
			c =
				a.nodeType == 3
					? En(a, Xt(a) - (i ? 0 : 1))
					: a.nodeType == 1 && (a.nodeName != 'BR' || !a.nextSibling)
						? a
						: null;
		if (c) return Qr(Bn(c, 1), !1);
	}
	if (o == null && s < Xt(r)) {
		let a = r.childNodes[s];
		for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; ) a = a.nextSibling;
		let c = a ? (a.nodeType == 3 ? En(a, 0, i ? 0 : 1) : a.nodeType == 1 ? a : null) : null;
		if (c) return Qr(Bn(c, -1), !0);
	}
	return Qr(Bn(r.nodeType == 3 ? En(r) : r, -n), n >= 0);
}
function Qr(t, e) {
	if (t.width == 0) return t;
	let n = e ? t.left : t.right;
	return { top: t.top, bottom: t.bottom, left: n, right: n };
}
function Bi(t, e) {
	if (t.height == 0) return t;
	let n = e ? t.top : t.bottom;
	return { top: n, bottom: n, left: t.left, right: t.right };
}
function Af(t, e, n) {
	let r = t.state,
		s = t.root.activeElement;
	(r != e && t.updateState(e), s != t.dom && t.focus());
	try {
		return n();
	} finally {
		(r != e && t.updateState(r), s != t.dom && s && s.focus());
	}
}
function F0(t, e, n) {
	let r = e.selection,
		s = n == 'up' ? r.$from : r.$to;
	return Af(t, e, () => {
		let { node: o } = t.docView.domFromPos(s.pos, n == 'up' ? -1 : 1);
		for (;;) {
			let l = t.docView.nearestDesc(o, !0);
			if (!l) break;
			if (l.node.isBlock) {
				o = l.contentDOM || l.dom;
				break;
			}
			o = l.dom.parentNode;
		}
		let i = Ef(t, s.pos, 1);
		for (let l = o.firstChild; l; l = l.nextSibling) {
			let a;
			if (l.nodeType == 1) a = l.getClientRects();
			else if (l.nodeType == 3) a = En(l, 0, l.nodeValue.length).getClientRects();
			else continue;
			for (let c = 0; c < a.length; c++) {
				let u = a[c];
				if (
					u.bottom > u.top + 1 &&
					(n == 'up'
						? i.top - u.top > (u.bottom - i.top) * 2
						: u.bottom - i.bottom > (i.bottom - u.top) * 2)
				)
					return !1;
			}
		}
		return !0;
	});
}
const V0 = /[\u0590-\u08ac]/;
function W0(t, e, n) {
	let { $head: r } = e.selection;
	if (!r.parent.isTextblock) return !1;
	let s = r.parentOffset,
		o = !s,
		i = s == r.parent.content.size,
		l = t.domSelection();
	return l
		? !V0.test(r.parent.textContent) || !l.modify
			? n == 'left' || n == 'backward'
				? o
				: i
			: Af(t, e, () => {
					let {
							focusNode: a,
							focusOffset: c,
							anchorNode: u,
							anchorOffset: d
						} = t.domSelectionRange(),
						f = l.caretBidiLevel;
					l.modify('move', n, 'character');
					let h = r.depth ? t.docView.domAfterPos(r.before()) : t.dom,
						{ focusNode: p, focusOffset: m } = t.domSelectionRange(),
						g = (p && !h.contains(p.nodeType == 1 ? p : p.parentNode)) || (a == p && c == m);
					try {
						(l.collapse(u, d), a && (a != u || c != d) && l.extend && l.extend(a, c));
					} catch {}
					return (f != null && (l.caretBidiLevel = f), g);
				})
		: r.pos == r.start() || r.pos == r.end();
}
let Ec = null,
	Ac = null,
	Nc = !1;
function j0(t, e, n) {
	return Ec == e && Ac == n
		? Nc
		: ((Ec = e), (Ac = n), (Nc = n == 'up' || n == 'down' ? F0(t, e, n) : W0(t, e, n)));
}
const Zt = 0,
	Oc = 1,
	lr = 2,
	gn = 3;
class _s {
	constructor(e, n, r, s) {
		((this.parent = e),
			(this.children = n),
			(this.dom = r),
			(this.contentDOM = s),
			(this.dirty = Zt),
			(r.pmViewDesc = this));
	}
	matchesWidget(e) {
		return !1;
	}
	matchesMark(e) {
		return !1;
	}
	matchesNode(e, n, r) {
		return !1;
	}
	matchesHack(e) {
		return !1;
	}
	parseRule() {
		return null;
	}
	stopEvent(e) {
		return !1;
	}
	get size() {
		let e = 0;
		for (let n = 0; n < this.children.length; n++) e += this.children[n].size;
		return e;
	}
	get border() {
		return 0;
	}
	destroy() {
		((this.parent = void 0), this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0));
		for (let e = 0; e < this.children.length; e++) this.children[e].destroy();
	}
	posBeforeChild(e) {
		for (let n = 0, r = this.posAtStart; ; n++) {
			let s = this.children[n];
			if (s == e) return r;
			r += s.size;
		}
	}
	get posBefore() {
		return this.parent.posBeforeChild(this);
	}
	get posAtStart() {
		return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
	}
	get posAfter() {
		return this.posBefore + this.size;
	}
	get posAtEnd() {
		return this.posAtStart + this.size - 2 * this.border;
	}
	localPosFromDOM(e, n, r) {
		if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
			if (r < 0) {
				let o, i;
				if (e == this.contentDOM) o = e.childNodes[n - 1];
				else {
					for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
					o = e.previousSibling;
				}
				for (; o && !((i = o.pmViewDesc) && i.parent == this); ) o = o.previousSibling;
				return o ? this.posBeforeChild(i) + i.size : this.posAtStart;
			} else {
				let o, i;
				if (e == this.contentDOM) o = e.childNodes[n];
				else {
					for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
					o = e.nextSibling;
				}
				for (; o && !((i = o.pmViewDesc) && i.parent == this); ) o = o.nextSibling;
				return o ? this.posBeforeChild(i) : this.posAtEnd;
			}
		let s;
		if (e == this.dom && this.contentDOM) s = n > St(this.contentDOM);
		else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
			s = e.compareDocumentPosition(this.contentDOM) & 2;
		else if (this.dom.firstChild) {
			if (n == 0)
				for (let o = e; ; o = o.parentNode) {
					if (o == this.dom) {
						s = !1;
						break;
					}
					if (o.previousSibling) break;
				}
			if (s == null && n == e.childNodes.length)
				for (let o = e; ; o = o.parentNode) {
					if (o == this.dom) {
						s = !0;
						break;
					}
					if (o.nextSibling) break;
				}
		}
		return (s ?? r > 0) ? this.posAtEnd : this.posAtStart;
	}
	nearestDesc(e, n = !1) {
		for (let r = !0, s = e; s; s = s.parentNode) {
			let o = this.getDesc(s),
				i;
			if (o && (!n || o.node))
				if (
					r &&
					(i = o.nodeDOM) &&
					!(i.nodeType == 1 ? i.contains(e.nodeType == 1 ? e : e.parentNode) : i == e)
				)
					r = !1;
				else return o;
		}
	}
	getDesc(e) {
		let n = e.pmViewDesc;
		for (let r = n; r; r = r.parent) if (r == this) return n;
	}
	posFromDOM(e, n, r) {
		for (let s = e; s; s = s.parentNode) {
			let o = this.getDesc(s);
			if (o) return o.localPosFromDOM(e, n, r);
		}
		return -1;
	}
	descAt(e) {
		for (let n = 0, r = 0; n < this.children.length; n++) {
			let s = this.children[n],
				o = r + s.size;
			if (r == e && o != r) {
				for (; !s.border && s.children.length; )
					for (let i = 0; i < s.children.length; i++) {
						let l = s.children[i];
						if (l.size) {
							s = l;
							break;
						}
					}
				return s;
			}
			if (e < o) return s.descAt(e - r - s.border);
			r = o;
		}
	}
	domFromPos(e, n) {
		if (!this.contentDOM) return { node: this.dom, offset: 0, atom: e + 1 };
		let r = 0,
			s = 0;
		for (let o = 0; r < this.children.length; r++) {
			let i = this.children[r],
				l = o + i.size;
			if (l > e || i instanceof Of) {
				s = e - o;
				break;
			}
			o = l;
		}
		if (s) return this.children[r].domFromPos(s - this.children[r].border, n);
		for (let o; r && !(o = this.children[r - 1]).size && o instanceof Nf && o.side >= 0; r--);
		if (n <= 0) {
			let o,
				i = !0;
			for (
				;
				(o = r ? this.children[r - 1] : null), !(!o || o.dom.parentNode == this.contentDOM);
				r--, i = !1
			);
			return o && n && i && !o.border && !o.domAtom
				? o.domFromPos(o.size, n)
				: { node: this.contentDOM, offset: o ? St(o.dom) + 1 : 0 };
		} else {
			let o,
				i = !0;
			for (
				;
				(o = r < this.children.length ? this.children[r] : null),
					!(!o || o.dom.parentNode == this.contentDOM);
				r++, i = !1
			);
			return o && i && !o.border && !o.domAtom
				? o.domFromPos(0, n)
				: { node: this.contentDOM, offset: o ? St(o.dom) : this.contentDOM.childNodes.length };
		}
	}
	parseRange(e, n, r = 0) {
		if (this.children.length == 0)
			return {
				node: this.contentDOM,
				from: e,
				to: n,
				fromOffset: 0,
				toOffset: this.contentDOM.childNodes.length
			};
		let s = -1,
			o = -1;
		for (let i = r, l = 0; ; l++) {
			let a = this.children[l],
				c = i + a.size;
			if (s == -1 && e <= c) {
				let u = i + a.border;
				if (
					e >= u &&
					n <= c - a.border &&
					a.node &&
					a.contentDOM &&
					this.contentDOM.contains(a.contentDOM)
				)
					return a.parseRange(e, n, u);
				e = i;
				for (let d = l; d > 0; d--) {
					let f = this.children[d - 1];
					if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
						s = St(f.dom) + 1;
						break;
					}
					e -= f.size;
				}
				s == -1 && (s = 0);
			}
			if (s > -1 && (c > n || l == this.children.length - 1)) {
				n = c;
				for (let u = l + 1; u < this.children.length; u++) {
					let d = this.children[u];
					if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(-1)) {
						o = St(d.dom);
						break;
					}
					n += d.size;
				}
				o == -1 && (o = this.contentDOM.childNodes.length);
				break;
			}
			i = c;
		}
		return { node: this.contentDOM, from: e, to: n, fromOffset: s, toOffset: o };
	}
	emptyChildAt(e) {
		if (this.border || !this.contentDOM || !this.children.length) return !1;
		let n = this.children[e < 0 ? 0 : this.children.length - 1];
		return n.size == 0 || n.emptyChildAt(e);
	}
	domAfterPos(e) {
		let { node: n, offset: r } = this.domFromPos(e, 0);
		if (n.nodeType != 1 || r == n.childNodes.length) throw new RangeError('No node after pos ' + e);
		return n.childNodes[r];
	}
	setSelection(e, n, r, s = !1) {
		let o = Math.min(e, n),
			i = Math.max(e, n);
		for (let h = 0, p = 0; h < this.children.length; h++) {
			let m = this.children[h],
				g = p + m.size;
			if (o > p && i < g) return m.setSelection(e - p - m.border, n - p - m.border, r, s);
			p = g;
		}
		let l = this.domFromPos(e, e ? -1 : 1),
			a = n == e ? l : this.domFromPos(n, n ? -1 : 1),
			c = r.root.getSelection(),
			u = r.domSelectionRange(),
			d = !1;
		if ((Yt || Nt) && e == n) {
			let { node: h, offset: p } = l;
			if (h.nodeType == 3) {
				if (
					((d = !!(
						p &&
						h.nodeValue[p - 1] ==
							`
`
					)),
					d && p == h.nodeValue.length)
				)
					for (let m = h, g; m; m = m.parentNode) {
						if ((g = m.nextSibling)) {
							g.nodeName == 'BR' && (l = a = { node: g.parentNode, offset: St(g) + 1 });
							break;
						}
						let b = m.pmViewDesc;
						if (b && b.node && b.node.isBlock) break;
					}
			} else {
				let m = h.childNodes[p - 1];
				d = m && (m.nodeName == 'BR' || m.contentEditable == 'false');
			}
		}
		if (Yt && u.focusNode && u.focusNode != a.node && u.focusNode.nodeType == 1) {
			let h = u.focusNode.childNodes[u.focusOffset];
			h && h.contentEditable == 'false' && (s = !0);
		}
		if (
			!(s || (d && Nt)) &&
			vr(l.node, l.offset, u.anchorNode, u.anchorOffset) &&
			vr(a.node, a.offset, u.focusNode, u.focusOffset)
		)
			return;
		let f = !1;
		if ((c.extend || e == n) && !(d && Yt)) {
			c.collapse(l.node, l.offset);
			try {
				(e != n && c.extend(a.node, a.offset), (f = !0));
			} catch {}
		}
		if (!f) {
			if (e > n) {
				let p = l;
				((l = a), (a = p));
			}
			let h = document.createRange();
			(h.setEnd(a.node, a.offset),
				h.setStart(l.node, l.offset),
				c.removeAllRanges(),
				c.addRange(h));
		}
	}
	ignoreMutation(e) {
		return !this.contentDOM && e.type != 'selection';
	}
	get contentLost() {
		return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
	}
	markDirty(e, n) {
		for (let r = 0, s = 0; s < this.children.length; s++) {
			let o = this.children[s],
				i = r + o.size;
			if (r == i ? e <= i && n >= r : e < i && n > r) {
				let l = r + o.border,
					a = i - o.border;
				if (e >= l && n <= a) {
					((this.dirty = e == r || n == i ? lr : Oc),
						e == l && n == a && (o.contentLost || o.dom.parentNode != this.contentDOM)
							? (o.dirty = gn)
							: o.markDirty(e - l, n - l));
					return;
				} else
					o.dirty =
						o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length
							? lr
							: gn;
			}
			r = i;
		}
		this.dirty = lr;
	}
	markParentsDirty() {
		let e = 1;
		for (let n = this.parent; n; n = n.parent, e++) {
			let r = e == 1 ? lr : Oc;
			n.dirty < r && (n.dirty = r);
		}
	}
	get domAtom() {
		return !1;
	}
	get ignoreForCoords() {
		return !1;
	}
	get ignoreForSelection() {
		return !1;
	}
	isText(e) {
		return !1;
	}
}
class Nf extends _s {
	constructor(e, n, r, s) {
		let o,
			i = n.type.toDOM;
		if (
			(typeof i == 'function' &&
				(i = i(r, () => {
					if (!o) return s;
					if (o.parent) return o.parent.posBeforeChild(o);
				})),
			!n.type.spec.raw)
		) {
			if (i.nodeType != 1) {
				let l = document.createElement('span');
				(l.appendChild(i), (i = l));
			}
			((i.contentEditable = 'false'), i.classList.add('ProseMirror-widget'));
		}
		(super(e, [], i, null), (this.widget = n), (this.widget = n), (o = this));
	}
	matchesWidget(e) {
		return this.dirty == Zt && e.type.eq(this.widget.type);
	}
	parseRule() {
		return { ignore: !0 };
	}
	stopEvent(e) {
		let n = this.widget.spec.stopEvent;
		return n ? n(e) : !1;
	}
	ignoreMutation(e) {
		return e.type != 'selection' || this.widget.spec.ignoreSelection;
	}
	destroy() {
		(this.widget.type.destroy(this.dom), super.destroy());
	}
	get domAtom() {
		return !0;
	}
	get ignoreForSelection() {
		return !!this.widget.type.spec.relaxedSide;
	}
	get side() {
		return this.widget.type.side;
	}
}
class U0 extends _s {
	constructor(e, n, r, s) {
		(super(e, [], n, null), (this.textDOM = r), (this.text = s));
	}
	get size() {
		return this.text.length;
	}
	localPosFromDOM(e, n) {
		return e != this.textDOM ? this.posAtStart + (n ? this.size : 0) : this.posAtStart + n;
	}
	domFromPos(e) {
		return { node: this.textDOM, offset: e };
	}
	ignoreMutation(e) {
		return e.type === 'characterData' && e.target.nodeValue == e.oldValue;
	}
}
class kr extends _s {
	constructor(e, n, r, s, o) {
		(super(e, [], r, s), (this.mark = n), (this.spec = o));
	}
	static create(e, n, r, s) {
		let o = s.nodeViews[n.type.name],
			i = o && o(n, s, r);
		return (
			(!i || !i.dom) && (i = Sr.renderSpec(document, n.type.spec.toDOM(n, r), null, n.attrs)),
			new kr(e, n, i.dom, i.contentDOM || i.dom, i)
		);
	}
	parseRule() {
		return this.dirty & gn || this.mark.type.spec.reparseInView
			? null
			: { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
	}
	matchesMark(e) {
		return this.dirty != gn && this.mark.eq(e);
	}
	markDirty(e, n) {
		if ((super.markDirty(e, n), this.dirty != Zt)) {
			let r = this.parent;
			for (; !r.node; ) r = r.parent;
			(r.dirty < this.dirty && (r.dirty = this.dirty), (this.dirty = Zt));
		}
	}
	slice(e, n, r) {
		let s = kr.create(this.parent, this.mark, !0, r),
			o = this.children,
			i = this.size;
		(n < i && (o = gl(o, n, i, r)), e > 0 && (o = gl(o, 0, e, r)));
		for (let l = 0; l < o.length; l++) o[l].parent = s;
		return ((s.children = o), s);
	}
	ignoreMutation(e) {
		return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
	}
	destroy() {
		(this.spec.destroy && this.spec.destroy(), super.destroy());
	}
}
class Jn extends _s {
	constructor(e, n, r, s, o, i, l, a, c) {
		(super(e, [], o, i),
			(this.node = n),
			(this.outerDeco = r),
			(this.innerDeco = s),
			(this.nodeDOM = l));
	}
	static create(e, n, r, s, o, i) {
		let l = o.nodeViews[n.type.name],
			a,
			c =
				l &&
				l(
					n,
					o,
					() => {
						if (!a) return i;
						if (a.parent) return a.parent.posBeforeChild(a);
					},
					r,
					s
				),
			u = c && c.dom,
			d = c && c.contentDOM;
		if (n.isText) {
			if (!u) u = document.createTextNode(n.text);
			else if (u.nodeType != 3) throw new RangeError('Text must be rendered as a DOM text node');
		} else
			u ||
				({ dom: u, contentDOM: d } = Sr.renderSpec(document, n.type.spec.toDOM(n), null, n.attrs));
		!d &&
			!n.isText &&
			u.nodeName != 'BR' &&
			(u.hasAttribute('contenteditable') || (u.contentEditable = 'false'),
			n.type.spec.draggable && (u.draggable = !0));
		let f = u;
		return (
			(u = Rf(u, r, n)),
			c
				? (a = new q0(e, n, r, s, u, d || null, f, c, o, i + 1))
				: n.isText
					? new ci(e, n, r, s, u, f, o)
					: new Jn(e, n, r, s, u, d || null, f, o, i + 1)
		);
	}
	parseRule() {
		if (this.node.type.spec.reparseInView) return null;
		let e = { node: this.node.type.name, attrs: this.node.attrs };
		if ((this.node.type.whitespace == 'pre' && (e.preserveWhitespace = 'full'), !this.contentDOM))
			e.getContent = () => this.node.content;
		else if (!this.contentLost) e.contentElement = this.contentDOM;
		else {
			for (let n = this.children.length - 1; n >= 0; n--) {
				let r = this.children[n];
				if (this.dom.contains(r.dom.parentNode)) {
					e.contentElement = r.dom.parentNode;
					break;
				}
			}
			e.contentElement || (e.getContent = () => z.empty);
		}
		return e;
	}
	matchesNode(e, n, r) {
		return this.dirty == Zt && e.eq(this.node) && wo(n, this.outerDeco) && r.eq(this.innerDeco);
	}
	get size() {
		return this.node.nodeSize;
	}
	get border() {
		return this.node.isLeaf ? 0 : 1;
	}
	updateChildren(e, n) {
		let r = this.node.inlineContent,
			s = n,
			o = e.composing ? this.localCompositionInfo(e, n) : null,
			i = o && o.pos > -1 ? o : null,
			l = o && o.pos < 0,
			a = new J0(this, i && i.node, e);
		(Q0(
			this.node,
			this.innerDeco,
			(c, u, d) => {
				(c.spec.marks
					? a.syncToMarks(c.spec.marks, r, e, u)
					: c.type.side >= 0 &&
						!d &&
						a.syncToMarks(u == this.node.childCount ? Je.none : this.node.child(u).marks, r, e, u),
					a.placeWidget(c, e, s));
			},
			(c, u, d, f) => {
				a.syncToMarks(c.marks, r, e, f);
				let h;
				(a.findNodeMatch(c, u, d, f) ||
					(l &&
						e.state.selection.from > s &&
						e.state.selection.to < s + c.nodeSize &&
						(h = a.findIndexWithChild(o.node)) > -1 &&
						a.updateNodeAt(c, u, d, h, e)) ||
					a.updateNextNode(c, u, d, e, f, s) ||
					a.addNode(c, u, d, e, s),
					(s += c.nodeSize));
			}
		),
			a.syncToMarks([], r, e, 0),
			this.node.isTextblock && a.addTextblockHacks(),
			a.destroyRest(),
			(a.changed || this.dirty == lr) &&
				(i && this.protectLocalComposition(e, i),
				If(this.contentDOM, this.children, e),
				Hr && Y0(this.dom)));
	}
	localCompositionInfo(e, n) {
		let { from: r, to: s } = e.state.selection;
		if (!(e.state.selection instanceof pe) || r < n || s > n + this.node.content.size) return null;
		let o = e.input.compositionNode;
		if (!o || !this.dom.contains(o.parentNode)) return null;
		if (this.node.inlineContent) {
			let i = o.nodeValue,
				l = Z0(this.node.content, i, r - n, s - n);
			return l < 0 ? null : { node: o, pos: l, text: i };
		} else return { node: o, pos: -1, text: '' };
	}
	protectLocalComposition(e, { node: n, pos: r, text: s }) {
		if (this.getDesc(n)) return;
		let o = n;
		for (; o.parentNode != this.contentDOM; o = o.parentNode) {
			for (; o.previousSibling; ) o.parentNode.removeChild(o.previousSibling);
			for (; o.nextSibling; ) o.parentNode.removeChild(o.nextSibling);
			o.pmViewDesc && (o.pmViewDesc = void 0);
		}
		let i = new U0(this, o, n, s);
		(e.input.compositionNodes.push(i), (this.children = gl(this.children, r, r + s.length, e, i)));
	}
	update(e, n, r, s) {
		return this.dirty == gn || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, n, r, s), !0);
	}
	updateInner(e, n, r, s) {
		(this.updateOuterDeco(n),
			(this.node = e),
			(this.innerDeco = r),
			this.contentDOM && this.updateChildren(s, this.posAtStart),
			(this.dirty = Zt));
	}
	updateOuterDeco(e) {
		if (wo(e, this.outerDeco)) return;
		let n = this.nodeDOM.nodeType != 1,
			r = this.dom;
		((this.dom = Df(this.dom, this.nodeDOM, ml(this.outerDeco, this.node, n), ml(e, this.node, n))),
			this.dom != r && ((r.pmViewDesc = void 0), (this.dom.pmViewDesc = this)),
			(this.outerDeco = e));
	}
	selectNode() {
		this.nodeDOM.nodeType == 1 &&
			(this.nodeDOM.classList.add('ProseMirror-selectednode'),
			(this.contentDOM || !this.node.type.spec.draggable) && (this.nodeDOM.draggable = !0));
	}
	deselectNode() {
		this.nodeDOM.nodeType == 1 &&
			(this.nodeDOM.classList.remove('ProseMirror-selectednode'),
			(this.contentDOM || !this.node.type.spec.draggable) &&
				this.nodeDOM.removeAttribute('draggable'));
	}
	get domAtom() {
		return this.node.isAtom;
	}
}
function Ic(t, e, n, r, s) {
	Rf(r, e, t);
	let o = new Jn(void 0, t, e, n, r, r, r, s, 0);
	return (o.contentDOM && o.updateChildren(s, 0), o);
}
class ci extends Jn {
	constructor(e, n, r, s, o, i, l) {
		super(e, n, r, s, o, null, i, l, 0);
	}
	parseRule() {
		let e = this.nodeDOM.parentNode;
		for (; e && e != this.dom && !e.pmIsDeco; ) e = e.parentNode;
		return { skip: e || !0 };
	}
	update(e, n, r, s) {
		return this.dirty == gn || (this.dirty != Zt && !this.inParent()) || !e.sameMarkup(this.node)
			? !1
			: (this.updateOuterDeco(n),
				(this.dirty != Zt || e.text != this.node.text) &&
					e.text != this.nodeDOM.nodeValue &&
					((this.nodeDOM.nodeValue = e.text),
					s.trackWrites == this.nodeDOM && (s.trackWrites = null)),
				(this.node = e),
				(this.dirty = Zt),
				!0);
	}
	inParent() {
		let e = this.parent.contentDOM;
		for (let n = this.nodeDOM; n; n = n.parentNode) if (n == e) return !0;
		return !1;
	}
	domFromPos(e) {
		return { node: this.nodeDOM, offset: e };
	}
	localPosFromDOM(e, n, r) {
		return e == this.nodeDOM
			? this.posAtStart + Math.min(n, this.node.text.length)
			: super.localPosFromDOM(e, n, r);
	}
	ignoreMutation(e) {
		return e.type != 'characterData' && e.type != 'selection';
	}
	slice(e, n, r) {
		let s = this.node.cut(e, n),
			o = document.createTextNode(s.text);
		return new ci(this.parent, s, this.outerDeco, this.innerDeco, o, o, r);
	}
	markDirty(e, n) {
		(super.markDirty(e, n),
			this.dom != this.nodeDOM &&
				(e == 0 || n == this.nodeDOM.nodeValue.length) &&
				(this.dirty = gn));
	}
	get domAtom() {
		return !1;
	}
	isText(e) {
		return this.node.text == e;
	}
}
class Of extends _s {
	parseRule() {
		return { ignore: !0 };
	}
	matchesHack(e) {
		return this.dirty == Zt && this.dom.nodeName == e;
	}
	get domAtom() {
		return !0;
	}
	get ignoreForCoords() {
		return this.dom.nodeName == 'IMG';
	}
}
class q0 extends Jn {
	constructor(e, n, r, s, o, i, l, a, c, u) {
		(super(e, n, r, s, o, i, l, c, u), (this.spec = a));
	}
	update(e, n, r, s) {
		if (this.dirty == gn) return !1;
		if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
			let o = this.spec.update(e, n, r);
			return (o && this.updateInner(e, n, r, s), o);
		} else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, n, r, s);
	}
	selectNode() {
		this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
	}
	deselectNode() {
		this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
	}
	setSelection(e, n, r, s) {
		this.spec.setSelection ? this.spec.setSelection(e, n, r.root) : super.setSelection(e, n, r, s);
	}
	destroy() {
		(this.spec.destroy && this.spec.destroy(), super.destroy());
	}
	stopEvent(e) {
		return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
	}
	ignoreMutation(e) {
		return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
	}
}
function If(t, e, n) {
	let r = t.firstChild,
		s = !1;
	for (let o = 0; o < e.length; o++) {
		let i = e[o],
			l = i.dom;
		if (l.parentNode == t) {
			for (; l != r; ) ((r = Dc(r)), (s = !0));
			r = r.nextSibling;
		} else ((s = !0), t.insertBefore(l, r));
		if (i instanceof kr) {
			let a = r ? r.previousSibling : t.lastChild;
			(If(i.contentDOM, i.children, n), (r = a ? a.nextSibling : t.firstChild));
		}
	}
	for (; r; ) ((r = Dc(r)), (s = !0));
	s && n.trackWrites == t && (n.trackWrites = null);
}
const us = function (t) {
	t && (this.nodeName = t);
};
us.prototype = Object.create(null);
const ar = [new us()];
function ml(t, e, n) {
	if (t.length == 0) return ar;
	let r = n ? ar[0] : new us(),
		s = [r];
	for (let o = 0; o < t.length; o++) {
		let i = t[o].type.attrs;
		if (i) {
			i.nodeName && s.push((r = new us(i.nodeName)));
			for (let l in i) {
				let a = i[l];
				a != null &&
					(n && s.length == 1 && s.push((r = new us(e.isInline ? 'span' : 'div'))),
					l == 'class'
						? (r.class = (r.class ? r.class + ' ' : '') + a)
						: l == 'style'
							? (r.style = (r.style ? r.style + ';' : '') + a)
							: l != 'nodeName' && (r[l] = a));
			}
		}
	}
	return s;
}
function Df(t, e, n, r) {
	if (n == ar && r == ar) return e;
	let s = e;
	for (let o = 0; o < r.length; o++) {
		let i = r[o],
			l = n[o];
		if (o) {
			let a;
			((l &&
				l.nodeName == i.nodeName &&
				s != t &&
				(a = s.parentNode) &&
				a.nodeName.toLowerCase() == i.nodeName) ||
				((a = document.createElement(i.nodeName)),
				(a.pmIsDeco = !0),
				a.appendChild(s),
				(l = ar[0])),
				(s = a));
		}
		K0(s, l || ar[0], i);
	}
	return s;
}
function K0(t, e, n) {
	for (let r in e)
		r != 'class' && r != 'style' && r != 'nodeName' && !(r in n) && t.removeAttribute(r);
	for (let r in n)
		r != 'class' && r != 'style' && r != 'nodeName' && n[r] != e[r] && t.setAttribute(r, n[r]);
	if (e.class != n.class) {
		let r = e.class ? e.class.split(' ').filter(Boolean) : [],
			s = n.class ? n.class.split(' ').filter(Boolean) : [];
		for (let o = 0; o < r.length; o++) s.indexOf(r[o]) == -1 && t.classList.remove(r[o]);
		for (let o = 0; o < s.length; o++) r.indexOf(s[o]) == -1 && t.classList.add(s[o]);
		t.classList.length == 0 && t.removeAttribute('class');
	}
	if (e.style != n.style) {
		if (e.style) {
			let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,
				s;
			for (; (s = r.exec(e.style)); ) t.style.removeProperty(s[1]);
		}
		n.style && (t.style.cssText += n.style);
	}
}
function Rf(t, e, n) {
	return Df(t, t, ar, ml(e, n, t.nodeType != 1));
}
function wo(t, e) {
	if (t.length != e.length) return !1;
	for (let n = 0; n < t.length; n++) if (!t[n].type.eq(e[n].type)) return !1;
	return !0;
}
function Dc(t) {
	let e = t.nextSibling;
	return (t.parentNode.removeChild(t), e);
}
class J0 {
	constructor(e, n, r) {
		((this.lock = n),
			(this.view = r),
			(this.index = 0),
			(this.stack = []),
			(this.changed = !1),
			(this.top = e),
			(this.preMatch = G0(e.node.content, e)));
	}
	destroyBetween(e, n) {
		if (e != n) {
			for (let r = e; r < n; r++) this.top.children[r].destroy();
			(this.top.children.splice(e, n - e), (this.changed = !0));
		}
	}
	destroyRest() {
		this.destroyBetween(this.index, this.top.children.length);
	}
	syncToMarks(e, n, r, s) {
		let o = 0,
			i = this.stack.length >> 1,
			l = Math.min(i, e.length);
		for (
			;
			o < l &&
			(o == i - 1 ? this.top : this.stack[(o + 1) << 1]).matchesMark(e[o]) &&
			e[o].type.spec.spanning !== !1;
		)
			o++;
		for (; o < i; )
			(this.destroyRest(),
				(this.top.dirty = Zt),
				(this.index = this.stack.pop()),
				(this.top = this.stack.pop()),
				i--);
		for (; i < e.length; ) {
			this.stack.push(this.top, this.index + 1);
			let a = -1,
				c = this.top.children.length;
			s < this.preMatch.index && (c = Math.min(this.index + 3, c));
			for (let u = this.index; u < c; u++) {
				let d = this.top.children[u];
				if (d.matchesMark(e[i]) && !this.isLocked(d.dom)) {
					a = u;
					break;
				}
			}
			if (a > -1)
				(a > this.index && ((this.changed = !0), this.destroyBetween(this.index, a)),
					(this.top = this.top.children[this.index]));
			else {
				let u = kr.create(this.top, e[i], n, r);
				(this.top.children.splice(this.index, 0, u), (this.top = u), (this.changed = !0));
			}
			((this.index = 0), i++);
		}
	}
	findNodeMatch(e, n, r, s) {
		let o = -1,
			i;
		if (
			s >= this.preMatch.index &&
			(i = this.preMatch.matches[s - this.preMatch.index]).parent == this.top &&
			i.matchesNode(e, n, r)
		)
			o = this.top.children.indexOf(i, this.index);
		else
			for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
				let c = this.top.children[l];
				if (c.matchesNode(e, n, r) && !this.preMatch.matched.has(c)) {
					o = l;
					break;
				}
			}
		return o < 0 ? !1 : (this.destroyBetween(this.index, o), this.index++, !0);
	}
	updateNodeAt(e, n, r, s, o) {
		let i = this.top.children[s];
		return (
			i.dirty == gn && i.dom == i.contentDOM && (i.dirty = lr),
			i.update(e, n, r, o) ? (this.destroyBetween(this.index, s), this.index++, !0) : !1
		);
	}
	findIndexWithChild(e) {
		for (;;) {
			let n = e.parentNode;
			if (!n) return -1;
			if (n == this.top.contentDOM) {
				let r = e.pmViewDesc;
				if (r) {
					for (let s = this.index; s < this.top.children.length; s++)
						if (this.top.children[s] == r) return s;
				}
				return -1;
			}
			e = n;
		}
	}
	updateNextNode(e, n, r, s, o, i) {
		for (let l = this.index; l < this.top.children.length; l++) {
			let a = this.top.children[l];
			if (a instanceof Jn) {
				let c = this.preMatch.matched.get(a);
				if (c != null && c != o) return !1;
				let u = a.dom,
					d,
					f =
						this.isLocked(u) &&
						!(
							e.isText &&
							a.node &&
							a.node.isText &&
							a.nodeDOM.nodeValue == e.text &&
							a.dirty != gn &&
							wo(n, a.outerDeco)
						);
				if (!f && a.update(e, n, r, s))
					return (
						this.destroyBetween(this.index, l),
						a.dom != u && (this.changed = !0),
						this.index++,
						!0
					);
				if (!f && (d = this.recreateWrapper(a, e, n, r, s, i)))
					return (
						this.destroyBetween(this.index, l),
						(this.top.children[this.index] = d),
						d.contentDOM && ((d.dirty = lr), d.updateChildren(s, i + 1), (d.dirty = Zt)),
						(this.changed = !0),
						this.index++,
						!0
					);
				break;
			}
		}
		return !1;
	}
	recreateWrapper(e, n, r, s, o, i) {
		if (
			e.dirty ||
			n.isAtom ||
			!e.children.length ||
			!e.node.content.eq(n.content) ||
			!wo(r, e.outerDeco) ||
			!s.eq(e.innerDeco)
		)
			return null;
		let l = Jn.create(this.top, n, r, s, o, i);
		if (l.contentDOM) {
			((l.children = e.children), (e.children = []));
			for (let a of l.children) a.parent = l;
		}
		return (e.destroy(), l);
	}
	addNode(e, n, r, s, o) {
		let i = Jn.create(this.top, e, n, r, s, o);
		(i.contentDOM && i.updateChildren(s, o + 1),
			this.top.children.splice(this.index++, 0, i),
			(this.changed = !0));
	}
	placeWidget(e, n, r) {
		let s = this.index < this.top.children.length ? this.top.children[this.index] : null;
		if (s && s.matchesWidget(e) && (e == s.widget || !s.widget.type.toDOM.parentNode)) this.index++;
		else {
			let o = new Nf(this.top, e, n, r);
			(this.top.children.splice(this.index++, 0, o), (this.changed = !0));
		}
	}
	addTextblockHacks() {
		let e = this.top.children[this.index - 1],
			n = this.top;
		for (; e instanceof kr; ) ((n = e), (e = n.children[n.children.length - 1]));
		(!e ||
			!(e instanceof ci) ||
			/\n$/.test(e.node.text) ||
			(this.view.requiresGeckoHackNode && /\s$/.test(e.node.text))) &&
			((Nt || Ct) && e && e.dom.contentEditable == 'false' && this.addHackNode('IMG', n),
			this.addHackNode('BR', this.top));
	}
	addHackNode(e, n) {
		if (n == this.top && this.index < n.children.length && n.children[this.index].matchesHack(e))
			this.index++;
		else {
			let r = document.createElement(e);
			(e == 'IMG' && ((r.className = 'ProseMirror-separator'), (r.alt = '')),
				e == 'BR' && (r.className = 'ProseMirror-trailingBreak'));
			let s = new Of(this.top, [], r, null);
			(n != this.top ? n.children.push(s) : n.children.splice(this.index++, 0, s),
				(this.changed = !0));
		}
	}
	isLocked(e) {
		return this.lock && (e == this.lock || (e.nodeType == 1 && e.contains(this.lock.parentNode)));
	}
}
function G0(t, e) {
	let n = e,
		r = n.children.length,
		s = t.childCount,
		o = new Map(),
		i = [];
	e: for (; s > 0; ) {
		let l;
		for (;;)
			if (r) {
				let c = n.children[r - 1];
				if (c instanceof kr) ((n = c), (r = c.children.length));
				else {
					((l = c), r--);
					break;
				}
			} else {
				if (n == e) break e;
				((r = n.parent.children.indexOf(n)), (n = n.parent));
			}
		let a = l.node;
		if (a) {
			if (a != t.child(s - 1)) break;
			(--s, o.set(l, s), i.push(l));
		}
	}
	return { index: s, matched: o, matches: i.reverse() };
}
function X0(t, e) {
	return t.type.side - e.type.side;
}
function Q0(t, e, n, r) {
	let s = e.locals(t),
		o = 0;
	if (s.length == 0) {
		for (let c = 0; c < t.childCount; c++) {
			let u = t.child(c);
			(r(u, s, e.forChild(o, u), c), (o += u.nodeSize));
		}
		return;
	}
	let i = 0,
		l = [],
		a = null;
	for (let c = 0; ; ) {
		let u, d;
		for (; i < s.length && s[i].to == o; ) {
			let g = s[i++];
			g.widget && (u ? (d || (d = [u])).push(g) : (u = g));
		}
		if (u)
			if (d) {
				d.sort(X0);
				for (let g = 0; g < d.length; g++) n(d[g], c, !!a);
			} else n(u, c, !!a);
		let f, h;
		if (a) ((h = -1), (f = a), (a = null));
		else if (c < t.childCount) ((h = c), (f = t.child(c++)));
		else break;
		for (let g = 0; g < l.length; g++) l[g].to <= o && l.splice(g--, 1);
		for (; i < s.length && s[i].from <= o && s[i].to > o; ) l.push(s[i++]);
		let p = o + f.nodeSize;
		if (f.isText) {
			let g = p;
			i < s.length && s[i].from < g && (g = s[i].from);
			for (let b = 0; b < l.length; b++) l[b].to < g && (g = l[b].to);
			g < p && ((a = f.cut(g - o)), (f = f.cut(0, g - o)), (p = g), (h = -1));
		} else for (; i < s.length && s[i].to < p; ) i++;
		let m = f.isInline && !f.isLeaf ? l.filter((g) => !g.inline) : l.slice();
		(r(f, m, e.forChild(o, f), h), (o = p));
	}
}
function Y0(t) {
	if (t.nodeName == 'UL' || t.nodeName == 'OL') {
		let e = t.style.cssText;
		((t.style.cssText = e + '; list-style: square !important'),
			window.getComputedStyle(t).listStyle,
			(t.style.cssText = e));
	}
}
function Z0(t, e, n, r) {
	for (let s = 0, o = 0; s < t.childCount && o <= r; ) {
		let i = t.child(s++),
			l = o;
		if (((o += i.nodeSize), !i.isText)) continue;
		let a = i.text;
		for (; s < t.childCount; ) {
			let c = t.child(s++);
			if (((o += c.nodeSize), !c.isText)) break;
			a += c.text;
		}
		if (o >= n) {
			if (o >= r && a.slice(r - e.length - l, r - l) == e) return r - e.length;
			let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
			if (c >= 0 && c + e.length + l >= n) return l + c;
			if (n == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e) return r;
		}
	}
	return -1;
}
function gl(t, e, n, r, s) {
	let o = [];
	for (let i = 0, l = 0; i < t.length; i++) {
		let a = t[i],
			c = l,
			u = (l += a.size);
		c >= n || u <= e
			? o.push(a)
			: (c < e && o.push(a.slice(0, e - c, r)),
				s && (o.push(s), (s = void 0)),
				u > n && o.push(a.slice(n - c, a.size, r)));
	}
	return o;
}
function sa(t, e = null) {
	let n = t.domSelectionRange(),
		r = t.state.doc;
	if (!n.focusNode) return null;
	let s = t.docView.nearestDesc(n.focusNode),
		o = s && s.size == 0,
		i = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
	if (i < 0) return null;
	let l = r.resolve(i),
		a,
		c;
	if (ai(n)) {
		for (a = i; s && !s.node; ) s = s.parent;
		let d = s.node;
		if (
			s &&
			d.isAtom &&
			fe.isSelectable(d) &&
			s.parent &&
			!(d.isInline && M0(n.focusNode, n.focusOffset, s.dom))
		) {
			let f = s.posBefore;
			c = new fe(i == f ? l : r.resolve(f));
		}
	} else {
		if (n instanceof t.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
			let d = i,
				f = i;
			for (let h = 0; h < n.rangeCount; h++) {
				let p = n.getRangeAt(h);
				((d = Math.min(d, t.docView.posFromDOM(p.startContainer, p.startOffset, 1))),
					(f = Math.max(f, t.docView.posFromDOM(p.endContainer, p.endOffset, -1))));
			}
			if (d < 0) return null;
			(([a, i] = f == t.state.selection.anchor ? [f, d] : [d, f]), (l = r.resolve(i)));
		} else a = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
		if (a < 0) return null;
	}
	let u = r.resolve(a);
	if (!c) {
		let d = e == 'pointer' || (t.state.selection.head < l.pos && !o) ? 1 : -1;
		c = oa(t, u, l, d);
	}
	return c;
}
function Lf(t) {
	return t.editable
		? t.hasFocus()
		: zf(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function Dn(t, e = !1) {
	let n = t.state.selection;
	if ((Pf(t, n), !!Lf(t))) {
		if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && Ct) {
			let r = t.domSelectionRange(),
				s = t.domObserver.currentSelection;
			if (
				r.anchorNode &&
				s.anchorNode &&
				vr(r.anchorNode, r.anchorOffset, s.anchorNode, s.anchorOffset)
			) {
				((t.input.mouseDown.delayedSelectionSync = !0), t.domObserver.setCurSelection());
				return;
			}
		}
		if ((t.domObserver.disconnectSelection(), t.cursorWrapper)) ty(t);
		else {
			let { anchor: r, head: s } = n,
				o,
				i;
			(Rc &&
				!(n instanceof pe) &&
				(n.$from.parent.inlineContent || (o = Lc(t, n.from)),
				!n.empty && !n.$from.parent.inlineContent && (i = Lc(t, n.to))),
				t.docView.setSelection(r, s, t, e),
				Rc && (o && Pc(o), i && Pc(i)),
				n.visible
					? t.dom.classList.remove('ProseMirror-hideselection')
					: (t.dom.classList.add('ProseMirror-hideselection'),
						'onselectionchange' in document && ey(t)));
		}
		(t.domObserver.setCurSelection(), t.domObserver.connectSelection());
	}
}
const Rc = Nt || (Ct && xf < 63);
function Lc(t, e) {
	let { node: n, offset: r } = t.docView.domFromPos(e, 0),
		s = r < n.childNodes.length ? n.childNodes[r] : null,
		o = r ? n.childNodes[r - 1] : null;
	if (Nt && s && s.contentEditable == 'false') return $i(s);
	if ((!s || s.contentEditable == 'false') && (!o || o.contentEditable == 'false')) {
		if (s) return $i(s);
		if (o) return $i(o);
	}
}
function $i(t) {
	return (
		(t.contentEditable = 'true'),
		Nt && t.draggable && ((t.draggable = !1), (t.wasDraggable = !0)),
		t
	);
}
function Pc(t) {
	((t.contentEditable = 'false'), t.wasDraggable && ((t.draggable = !0), (t.wasDraggable = null)));
}
function ey(t) {
	let e = t.dom.ownerDocument;
	e.removeEventListener('selectionchange', t.input.hideSelectionGuard);
	let n = t.domSelectionRange(),
		r = n.anchorNode,
		s = n.anchorOffset;
	e.addEventListener(
		'selectionchange',
		(t.input.hideSelectionGuard = () => {
			(n.anchorNode != r || n.anchorOffset != s) &&
				(e.removeEventListener('selectionchange', t.input.hideSelectionGuard),
				setTimeout(() => {
					(!Lf(t) || t.state.selection.visible) &&
						t.dom.classList.remove('ProseMirror-hideselection');
				}, 20));
		})
	);
}
function ty(t) {
	let e = t.domSelection();
	if (!e) return;
	let n = t.cursorWrapper.dom,
		r = n.nodeName == 'IMG';
	(r ? e.collapse(n.parentNode, St(n) + 1) : e.collapse(n, 0),
		!r && !t.state.selection.visible && Ft && Kn <= 11 && ((n.disabled = !0), (n.disabled = !1)));
}
function Pf(t, e) {
	if (e instanceof fe) {
		let n = t.docView.descAt(e.from);
		n != t.lastSelectedViewDesc && (zc(t), n && n.selectNode(), (t.lastSelectedViewDesc = n));
	} else zc(t);
}
function zc(t) {
	t.lastSelectedViewDesc &&
		(t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(),
		(t.lastSelectedViewDesc = void 0));
}
function oa(t, e, n, r) {
	return t.someProp('createSelectionBetween', (s) => s(t, e, n)) || pe.between(e, n, r);
}
function Bc(t) {
	return t.editable && !t.hasFocus() ? !1 : zf(t);
}
function zf(t) {
	let e = t.domSelectionRange();
	if (!e.anchorNode) return !1;
	try {
		return (
			t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) &&
			(t.editable ||
				t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode))
		);
	} catch {
		return !1;
	}
}
function ny(t) {
	let e = t.docView.domFromPos(t.state.selection.anchor, 0),
		n = t.domSelectionRange();
	return vr(e.node, e.offset, n.anchorNode, n.anchorOffset);
}
function yl(t, e) {
	let { $anchor: n, $head: r } = t.selection,
		s = e > 0 ? n.max(r) : n.min(r),
		o = s.parent.inlineContent
			? s.depth
				? t.doc.resolve(e > 0 ? s.after() : s.before())
				: null
			: s;
	return o && ve.findFrom(o, e);
}
function $n(t, e) {
	return (t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0);
}
function $c(t, e, n) {
	let r = t.state.selection;
	if (r instanceof pe)
		if (n.indexOf('s') > -1) {
			let { $head: s } = r,
				o = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter;
			if (!o || o.isText || !o.isLeaf) return !1;
			let i = t.state.doc.resolve(s.pos + o.nodeSize * (e < 0 ? -1 : 1));
			return $n(t, new pe(r.$anchor, i));
		} else if (r.empty) {
			if (t.endOfTextblock(e > 0 ? 'forward' : 'backward')) {
				let s = yl(t.state, e);
				return s && s instanceof fe ? $n(t, s) : !1;
			} else if (!(Gt && n.indexOf('m') > -1)) {
				let s = r.$head,
					o = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter,
					i;
				if (!o || o.isText) return !1;
				let l = e < 0 ? s.pos - o.nodeSize : s.pos;
				return o.isAtom || ((i = t.docView.descAt(l)) && !i.contentDOM)
					? fe.isSelectable(o)
						? $n(t, new fe(e < 0 ? t.state.doc.resolve(s.pos - o.nodeSize) : s))
						: $s
							? $n(t, new pe(t.state.doc.resolve(e < 0 ? l : l + o.nodeSize)))
							: !1
					: !1;
			}
		} else return !1;
	else {
		if (r instanceof fe && r.node.isInline) return $n(t, new pe(e > 0 ? r.$to : r.$from));
		{
			let s = yl(t.state, e);
			return s ? $n(t, s) : !1;
		}
	}
}
function So(t) {
	return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function ds(t, e) {
	let n = t.pmViewDesc;
	return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != 'BR');
}
function Er(t, e) {
	return e < 0 ? ry(t) : sy(t);
}
function ry(t) {
	let e = t.domSelectionRange(),
		n = e.focusNode,
		r = e.focusOffset;
	if (!n) return;
	let s,
		o,
		i = !1;
	for (Yt && n.nodeType == 1 && r < So(n) && ds(n.childNodes[r], -1) && (i = !0); ; )
		if (r > 0) {
			if (n.nodeType != 1) break;
			{
				let l = n.childNodes[r - 1];
				if (ds(l, -1)) ((s = n), (o = --r));
				else if (l.nodeType == 3) ((n = l), (r = n.nodeValue.length));
				else break;
			}
		} else {
			if (Bf(n)) break;
			{
				let l = n.previousSibling;
				for (; l && ds(l, -1); ) ((s = n.parentNode), (o = St(l)), (l = l.previousSibling));
				if (l) ((n = l), (r = So(n)));
				else {
					if (((n = n.parentNode), n == t.dom)) break;
					r = 0;
				}
			}
		}
	i ? bl(t, n, r) : s && bl(t, s, o);
}
function sy(t) {
	let e = t.domSelectionRange(),
		n = e.focusNode,
		r = e.focusOffset;
	if (!n) return;
	let s = So(n),
		o,
		i;
	for (;;)
		if (r < s) {
			if (n.nodeType != 1) break;
			let l = n.childNodes[r];
			if (ds(l, 1)) ((o = n), (i = ++r));
			else break;
		} else {
			if (Bf(n)) break;
			{
				let l = n.nextSibling;
				for (; l && ds(l, 1); ) ((o = l.parentNode), (i = St(l) + 1), (l = l.nextSibling));
				if (l) ((n = l), (r = 0), (s = So(n)));
				else {
					if (((n = n.parentNode), n == t.dom)) break;
					r = s = 0;
				}
			}
		}
	o && bl(t, o, i);
}
function Bf(t) {
	let e = t.pmViewDesc;
	return e && e.node && e.node.isBlock;
}
function oy(t, e) {
	for (; t && e == t.childNodes.length && !Bs(t); ) ((e = St(t) + 1), (t = t.parentNode));
	for (; t && e < t.childNodes.length; ) {
		let n = t.childNodes[e];
		if (n.nodeType == 3) return n;
		if (n.nodeType == 1 && n.contentEditable == 'false') break;
		((t = n), (e = 0));
	}
}
function iy(t, e) {
	for (; t && !e && !Bs(t); ) ((e = St(t)), (t = t.parentNode));
	for (; t && e; ) {
		let n = t.childNodes[e - 1];
		if (n.nodeType == 3) return n;
		if (n.nodeType == 1 && n.contentEditable == 'false') break;
		((t = n), (e = t.childNodes.length));
	}
}
function bl(t, e, n) {
	if (e.nodeType != 3) {
		let o, i;
		(i = oy(e, n)) ? ((e = i), (n = 0)) : (o = iy(e, n)) && ((e = o), (n = o.nodeValue.length));
	}
	let r = t.domSelection();
	if (!r) return;
	if (ai(r)) {
		let o = document.createRange();
		(o.setEnd(e, n), o.setStart(e, n), r.removeAllRanges(), r.addRange(o));
	} else r.extend && r.extend(e, n);
	t.domObserver.setCurSelection();
	let { state: s } = t;
	setTimeout(() => {
		t.state == s && Dn(t);
	}, 50);
}
function _c(t, e) {
	let n = t.state.doc.resolve(e);
	if (!(Ct || wf) && n.parent.inlineContent) {
		let s = t.coordsAtPos(e);
		if (e > n.start()) {
			let o = t.coordsAtPos(e - 1),
				i = (o.top + o.bottom) / 2;
			if (i > s.top && i < s.bottom && Math.abs(o.left - s.left) > 1)
				return o.left < s.left ? 'ltr' : 'rtl';
		}
		if (e < n.end()) {
			let o = t.coordsAtPos(e + 1),
				i = (o.top + o.bottom) / 2;
			if (i > s.top && i < s.bottom && Math.abs(o.left - s.left) > 1)
				return o.left > s.left ? 'ltr' : 'rtl';
		}
	}
	return getComputedStyle(t.dom).direction == 'rtl' ? 'rtl' : 'ltr';
}
function Hc(t, e, n) {
	let r = t.state.selection;
	if ((r instanceof pe && !r.empty) || n.indexOf('s') > -1 || (Gt && n.indexOf('m') > -1))
		return !1;
	let { $from: s, $to: o } = r;
	if (!s.parent.inlineContent || t.endOfTextblock(e < 0 ? 'up' : 'down')) {
		let i = yl(t.state, e);
		if (i && i instanceof fe) return $n(t, i);
	}
	if (!s.parent.inlineContent) {
		let i = e < 0 ? s : o,
			l = r instanceof Ut ? ve.near(i, e) : ve.findFrom(i, e);
		return l ? $n(t, l) : !1;
	}
	return !1;
}
function Fc(t, e) {
	if (!(t.state.selection instanceof pe)) return !0;
	let { $head: n, $anchor: r, empty: s } = t.state.selection;
	if (!n.sameParent(r)) return !0;
	if (!s) return !1;
	if (t.endOfTextblock(e > 0 ? 'forward' : 'backward')) return !0;
	let o = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
	if (o && !o.isText) {
		let i = t.state.tr;
		return (
			e < 0 ? i.delete(n.pos - o.nodeSize, n.pos) : i.delete(n.pos, n.pos + o.nodeSize),
			t.dispatch(i),
			!0
		);
	}
	return !1;
}
function Vc(t, e, n) {
	(t.domObserver.stop(), (e.contentEditable = n), t.domObserver.start());
}
function ly(t) {
	if (!Nt || t.state.selection.$head.parentOffset > 0) return !1;
	let { focusNode: e, focusOffset: n } = t.domSelectionRange();
	if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == 'false') {
		let r = e.firstChild;
		(Vc(t, r, 'true'), setTimeout(() => Vc(t, r, 'false'), 20));
	}
	return !1;
}
function ay(t) {
	let e = '';
	return (
		t.ctrlKey && (e += 'c'),
		t.metaKey && (e += 'm'),
		t.altKey && (e += 'a'),
		t.shiftKey && (e += 's'),
		e
	);
}
function cy(t, e) {
	let n = e.keyCode,
		r = ay(e);
	if (n == 8 || (Gt && n == 72 && r == 'c')) return Fc(t, -1) || Er(t, -1);
	if ((n == 46 && !e.shiftKey) || (Gt && n == 68 && r == 'c')) return Fc(t, 1) || Er(t, 1);
	if (n == 13 || n == 27) return !0;
	if (n == 37 || (Gt && n == 66 && r == 'c')) {
		let s = n == 37 ? (_c(t, t.state.selection.from) == 'ltr' ? -1 : 1) : -1;
		return $c(t, s, r) || Er(t, s);
	} else if (n == 39 || (Gt && n == 70 && r == 'c')) {
		let s = n == 39 ? (_c(t, t.state.selection.from) == 'ltr' ? 1 : -1) : 1;
		return $c(t, s, r) || Er(t, s);
	} else {
		if (n == 38 || (Gt && n == 80 && r == 'c')) return Hc(t, -1, r) || Er(t, -1);
		if (n == 40 || (Gt && n == 78 && r == 'c')) return ly(t) || Hc(t, 1, r) || Er(t, 1);
		if (r == (Gt ? 'm' : 'c') && (n == 66 || n == 73 || n == 89 || n == 90)) return !0;
	}
	return !1;
}
function ia(t, e) {
	t.someProp('transformCopied', (h) => {
		e = h(e, t);
	});
	let n = [],
		{ content: r, openStart: s, openEnd: o } = e;
	for (; s > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
		(s--, o--);
		let h = r.firstChild;
		(n.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), (r = h.content));
	}
	let i = t.someProp('clipboardSerializer') || Sr.fromSchema(t.state.schema),
		l = Wf(),
		a = l.createElement('div');
	a.appendChild(i.serializeFragment(r, { document: l }));
	let c = a.firstChild,
		u,
		d = 0;
	for (; c && c.nodeType == 1 && (u = Vf[c.nodeName.toLowerCase()]); ) {
		for (let h = u.length - 1; h >= 0; h--) {
			let p = l.createElement(u[h]);
			for (; a.firstChild; ) p.appendChild(a.firstChild);
			(a.appendChild(p), d++);
		}
		c = a.firstChild;
	}
	c &&
		c.nodeType == 1 &&
		c.setAttribute('data-pm-slice', `${s} ${o}${d ? ` -${d}` : ''} ${JSON.stringify(n)}`);
	let f =
		t.someProp('clipboardTextSerializer', (h) => h(e, t)) ||
		e.content.textBetween(
			0,
			e.content.size,
			`

`
		);
	return { dom: a, text: f, slice: e };
}
function $f(t, e, n, r, s) {
	let o = s.parent.type.spec.code,
		i,
		l;
	if (!n && !e) return null;
	let a = !!e && (r || o || !n);
	if (a) {
		if (
			(t.someProp('transformPastedText', (f) => {
				e = f(e, o || r, t);
			}),
			o)
		)
			return (
				(l = new X(
					z.from(
						t.state.schema.text(
							e.replace(
								/\r\n?/g,
								`
`
							)
						)
					),
					0,
					0
				)),
				t.someProp('transformPasted', (f) => {
					l = f(l, t, !0);
				}),
				l
			);
		let d = t.someProp('clipboardTextParser', (f) => f(e, s, r, t));
		if (d) l = d;
		else {
			let f = s.marks(),
				{ schema: h } = t.state,
				p = Sr.fromSchema(h);
			((i = document.createElement('div')),
				e.split(/(?:\r\n?|\n)+/).forEach((m) => {
					let g = i.appendChild(document.createElement('p'));
					m && g.appendChild(p.serializeNode(h.text(m, f)));
				}));
		}
	} else
		(t.someProp('transformPastedHTML', (d) => {
			n = d(n, t);
		}),
			(i = hy(n)),
			$s && py(i));
	let c = i && i.querySelector('[data-pm-slice]'),
		u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute('data-pm-slice') || '');
	if (u && u[3])
		for (let d = +u[3]; d > 0; d--) {
			let f = i.firstChild;
			for (; f && f.nodeType != 1; ) f = f.nextSibling;
			if (!f) break;
			i = f;
		}
	if (
		(l ||
			(l = (
				t.someProp('clipboardParser') ||
				t.someProp('domParser') ||
				On.fromSchema(t.state.schema)
			).parseSlice(i, {
				preserveWhitespace: !!(a || u),
				context: s,
				ruleFromNode(f) {
					return f.nodeName == 'BR' &&
						!f.nextSibling &&
						f.parentNode &&
						!uy.test(f.parentNode.nodeName)
						? { ignore: !0 }
						: null;
				}
			})),
		u)
	)
		l = my(Wc(l, +u[1], +u[2]), u[4]);
	else if (((l = X.maxOpen(dy(l.content, s), !0)), l.openStart || l.openEnd)) {
		let d = 0,
			f = 0;
		for (
			let h = l.content.firstChild;
			d < l.openStart && !h.type.spec.isolating;
			d++, h = h.firstChild
		);
		for (
			let h = l.content.lastChild;
			f < l.openEnd && !h.type.spec.isolating;
			f++, h = h.lastChild
		);
		l = Wc(l, d, f);
	}
	return (
		t.someProp('transformPasted', (d) => {
			l = d(l, t, a);
		}),
		l
	);
}
const uy =
	/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function dy(t, e) {
	if (t.childCount < 2) return t;
	for (let n = e.depth; n >= 0; n--) {
		let s = e.node(n).contentMatchAt(e.index(n)),
			o,
			i = [];
		if (
			(t.forEach((l) => {
				if (!i) return;
				let a = s.findWrapping(l.type),
					c;
				if (!a) return (i = null);
				if ((c = i.length && o.length && Hf(a, o, l, i[i.length - 1], 0))) i[i.length - 1] = c;
				else {
					i.length && (i[i.length - 1] = Ff(i[i.length - 1], o.length));
					let u = _f(l, a);
					(i.push(u), (s = s.matchType(u.type)), (o = a));
				}
			}),
			i)
		)
			return z.from(i);
	}
	return t;
}
function _f(t, e, n = 0) {
	for (let r = e.length - 1; r >= n; r--) t = e[r].create(null, z.from(t));
	return t;
}
function Hf(t, e, n, r, s) {
	if (s < t.length && s < e.length && t[s] == e[s]) {
		let o = Hf(t, e, n, r.lastChild, s + 1);
		if (o) return r.copy(r.content.replaceChild(r.childCount - 1, o));
		if (r.contentMatchAt(r.childCount).matchType(s == t.length - 1 ? n.type : t[s + 1]))
			return r.copy(r.content.append(z.from(_f(n, t, s + 1))));
	}
}
function Ff(t, e) {
	if (e == 0) return t;
	let n = t.content.replaceChild(t.childCount - 1, Ff(t.lastChild, e - 1)),
		r = t.contentMatchAt(t.childCount).fillBefore(z.empty, !0);
	return t.copy(n.append(r));
}
function vl(t, e, n, r, s, o) {
	let i = e < 0 ? t.firstChild : t.lastChild,
		l = i.content;
	return (
		t.childCount > 1 && (o = 0),
		s < r - 1 && (l = vl(l, e, n, r, s + 1, o)),
		s >= n &&
			(l =
				e < 0
					? i
							.contentMatchAt(0)
							.fillBefore(l, o <= s)
							.append(l)
					: l.append(i.contentMatchAt(i.childCount).fillBefore(z.empty, !0))),
		t.replaceChild(e < 0 ? 0 : t.childCount - 1, i.copy(l))
	);
}
function Wc(t, e, n) {
	return (
		e < t.openStart && (t = new X(vl(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)),
		n < t.openEnd && (t = new X(vl(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)),
		t
	);
}
const Vf = {
	thead: ['table'],
	tbody: ['table'],
	tfoot: ['table'],
	caption: ['table'],
	colgroup: ['table'],
	col: ['table', 'colgroup'],
	tr: ['table', 'tbody'],
	td: ['table', 'tbody', 'tr'],
	th: ['table', 'tbody', 'tr']
};
let jc = null;
function Wf() {
	return jc || (jc = document.implementation.createHTMLDocument('title'));
}
let _i = null;
function fy(t) {
	let e = window.trustedTypes;
	return e
		? (_i ||
				(_i = e.defaultPolicy || e.createPolicy('ProseMirrorClipboard', { createHTML: (n) => n })),
			_i.createHTML(t))
		: t;
}
function hy(t) {
	let e = /^(\s*<meta [^>]*>)*/.exec(t);
	e && (t = t.slice(e[0].length));
	let n = Wf().createElement('div'),
		r = /<([a-z][^>\s]+)/i.exec(t),
		s;
	if (
		((s = r && Vf[r[1].toLowerCase()]) &&
			(t =
				s.map((o) => '<' + o + '>').join('') +
				t +
				s
					.map((o) => '</' + o + '>')
					.reverse()
					.join('')),
		(n.innerHTML = fy(t)),
		s)
	)
		for (let o = 0; o < s.length; o++) n = n.querySelector(s[o]) || n;
	return n;
}
function py(t) {
	let e = t.querySelectorAll(Ct ? 'span:not([class]):not([style])' : 'span.Apple-converted-space');
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		r.childNodes.length == 1 &&
			r.textContent == ' ' &&
			r.parentNode &&
			r.parentNode.replaceChild(t.ownerDocument.createTextNode(' '), r);
	}
}
function my(t, e) {
	if (!t.size) return t;
	let n = t.content.firstChild.type.schema,
		r;
	try {
		r = JSON.parse(e);
	} catch {
		return t;
	}
	let { content: s, openStart: o, openEnd: i } = t;
	for (let l = r.length - 2; l >= 0; l -= 2) {
		let a = n.nodes[r[l]];
		if (!a || a.hasRequiredAttrs()) break;
		((s = z.from(a.create(r[l + 1], s))), o++, i++);
	}
	return new X(s, o, i);
}
const Pt = {},
	zt = {},
	gy = { touchstart: !0, touchmove: !0 };
class yy {
	constructor() {
		((this.shiftKey = !1),
			(this.mouseDown = null),
			(this.lastKeyCode = null),
			(this.lastKeyCodeTime = 0),
			(this.lastClick = { time: 0, x: 0, y: 0, type: '', button: 0 }),
			(this.lastSelectionOrigin = null),
			(this.lastSelectionTime = 0),
			(this.lastIOSEnter = 0),
			(this.lastIOSEnterFallbackTimeout = -1),
			(this.lastFocus = 0),
			(this.lastTouch = 0),
			(this.lastChromeDelete = 0),
			(this.composing = !1),
			(this.compositionNode = null),
			(this.composingTimeout = -1),
			(this.compositionNodes = []),
			(this.compositionEndedAt = -2e8),
			(this.compositionID = 1),
			(this.badSafariComposition = !1),
			(this.compositionPendingChanges = 0),
			(this.domChangeCount = 0),
			(this.eventHandlers = Object.create(null)),
			(this.hideSelectionGuard = null));
	}
}
function by(t) {
	for (let e in Pt) {
		let n = Pt[e];
		t.dom.addEventListener(
			e,
			(t.input.eventHandlers[e] = (r) => {
				ky(t, r) && !la(t, r) && (t.editable || !(r.type in zt)) && n(t, r);
			}),
			gy[e] ? { passive: !0 } : void 0
		);
	}
	(Nt && t.dom.addEventListener('input', () => null), kl(t));
}
function qn(t, e) {
	((t.input.lastSelectionOrigin = e), (t.input.lastSelectionTime = Date.now()));
}
function vy(t) {
	t.domObserver.stop();
	for (let e in t.input.eventHandlers) t.dom.removeEventListener(e, t.input.eventHandlers[e]);
	(clearTimeout(t.input.composingTimeout), clearTimeout(t.input.lastIOSEnterFallbackTimeout));
}
function kl(t) {
	t.someProp('handleDOMEvents', (e) => {
		for (let n in e)
			t.input.eventHandlers[n] ||
				t.dom.addEventListener(n, (t.input.eventHandlers[n] = (r) => la(t, r)));
	});
}
function la(t, e) {
	return t.someProp('handleDOMEvents', (n) => {
		let r = n[e.type];
		return r ? r(t, e) || e.defaultPrevented : !1;
	});
}
function ky(t, e) {
	if (!e.bubbles) return !0;
	if (e.defaultPrevented) return !1;
	for (let n = e.target; n != t.dom; n = n.parentNode)
		if (!n || n.nodeType == 11 || (n.pmViewDesc && n.pmViewDesc.stopEvent(e))) return !1;
	return !0;
}
function xy(t, e) {
	!la(t, e) && Pt[e.type] && (t.editable || !(e.type in zt)) && Pt[e.type](t, e);
}
zt.keydown = (t, e) => {
	let n = e;
	if (
		((t.input.shiftKey = n.keyCode == 16 || n.shiftKey),
		!Uf(t, n) &&
			((t.input.lastKeyCode = n.keyCode),
			(t.input.lastKeyCodeTime = Date.now()),
			!(An && Ct && n.keyCode == 13)))
	)
		if (
			(n.keyCode != 229 && t.domObserver.forceFlush(),
			Hr && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey)
		) {
			let r = Date.now();
			((t.input.lastIOSEnter = r),
				(t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
					t.input.lastIOSEnter == r &&
						(t.someProp('handleKeyDown', (s) => s(t, or(13, 'Enter'))), (t.input.lastIOSEnter = 0));
				}, 200)));
		} else
			t.someProp('handleKeyDown', (r) => r(t, n)) || cy(t, n) ? n.preventDefault() : qn(t, 'key');
};
zt.keyup = (t, e) => {
	e.keyCode == 16 && (t.input.shiftKey = !1);
};
zt.keypress = (t, e) => {
	let n = e;
	if (Uf(t, n) || !n.charCode || (n.ctrlKey && !n.altKey) || (Gt && n.metaKey)) return;
	if (t.someProp('handleKeyPress', (s) => s(t, n))) {
		n.preventDefault();
		return;
	}
	let r = t.state.selection;
	if (!(r instanceof pe) || !r.$from.sameParent(r.$to)) {
		let s = String.fromCharCode(n.charCode),
			o = () => t.state.tr.insertText(s).scrollIntoView();
		(!/[\r\n]/.test(s) &&
			!t.someProp('handleTextInput', (i) => i(t, r.$from.pos, r.$to.pos, s, o)) &&
			t.dispatch(o()),
			n.preventDefault());
	}
};
function ui(t) {
	return { left: t.clientX, top: t.clientY };
}
function wy(t, e) {
	let n = e.x - t.clientX,
		r = e.y - t.clientY;
	return n * n + r * r < 100;
}
function aa(t, e, n, r, s) {
	if (r == -1) return !1;
	let o = t.state.doc.resolve(r);
	for (let i = o.depth + 1; i > 0; i--)
		if (
			t.someProp(e, (l) =>
				i > o.depth
					? l(t, n, o.nodeAfter, o.before(i), s, !0)
					: l(t, n, o.node(i), o.before(i), s, !1)
			)
		)
			return !0;
	return !1;
}
function zr(t, e, n) {
	if ((t.focused || t.focus(), t.state.selection.eq(e))) return;
	let r = t.state.tr.setSelection(e);
	(r.setMeta('pointer', !0), t.dispatch(r));
}
function Sy(t, e) {
	if (e == -1) return !1;
	let n = t.state.doc.resolve(e),
		r = n.nodeAfter;
	return r && r.isAtom && fe.isSelectable(r) ? (zr(t, new fe(n)), !0) : !1;
}
function Cy(t, e) {
	if (e == -1) return !1;
	let n = t.state.selection,
		r,
		s;
	n instanceof fe && (r = n.node);
	let o = t.state.doc.resolve(e);
	for (let i = o.depth + 1; i > 0; i--) {
		let l = i > o.depth ? o.nodeAfter : o.node(i);
		if (fe.isSelectable(l)) {
			r && n.$from.depth > 0 && i >= n.$from.depth && o.before(n.$from.depth + 1) == n.$from.pos
				? (s = o.before(n.$from.depth))
				: (s = o.before(i));
			break;
		}
	}
	return s != null ? (zr(t, fe.create(t.state.doc, s)), !0) : !1;
}
function Ty(t, e, n, r, s) {
	return (
		aa(t, 'handleClickOn', e, n, r) ||
		t.someProp('handleClick', (o) => o(t, e, r)) ||
		(s ? Cy(t, n) : Sy(t, n))
	);
}
function My(t, e, n, r) {
	return (
		aa(t, 'handleDoubleClickOn', e, n, r) || t.someProp('handleDoubleClick', (s) => s(t, e, r))
	);
}
function Ey(t, e, n, r) {
	return (
		aa(t, 'handleTripleClickOn', e, n, r) ||
		t.someProp('handleTripleClick', (s) => s(t, e, r)) ||
		Ay(t, n, r)
	);
}
function Ay(t, e, n) {
	if (n.button != 0) return !1;
	let r = t.state.doc;
	if (e == -1) return r.inlineContent ? (zr(t, pe.create(r, 0, r.content.size)), !0) : !1;
	let s = r.resolve(e);
	for (let o = s.depth + 1; o > 0; o--) {
		let i = o > s.depth ? s.nodeAfter : s.node(o),
			l = s.before(o);
		if (i.inlineContent) zr(t, pe.create(r, l + 1, l + 1 + i.content.size));
		else if (fe.isSelectable(i)) zr(t, fe.create(r, l));
		else continue;
		return !0;
	}
}
function ca(t) {
	return Co(t);
}
const jf = Gt ? 'metaKey' : 'ctrlKey';
Pt.mousedown = (t, e) => {
	let n = e;
	t.input.shiftKey = n.shiftKey;
	let r = ca(t),
		s = Date.now(),
		o = 'singleClick';
	(s - t.input.lastClick.time < 500 &&
		wy(n, t.input.lastClick) &&
		!n[jf] &&
		t.input.lastClick.button == n.button &&
		(t.input.lastClick.type == 'singleClick'
			? (o = 'doubleClick')
			: t.input.lastClick.type == 'doubleClick' && (o = 'tripleClick')),
		(t.input.lastClick = { time: s, x: n.clientX, y: n.clientY, type: o, button: n.button }));
	let i = t.posAtCoords(ui(n));
	i &&
		(o == 'singleClick'
			? (t.input.mouseDown && t.input.mouseDown.done(), (t.input.mouseDown = new Ny(t, i, n, !!r)))
			: (o == 'doubleClick' ? My : Ey)(t, i.pos, i.inside, n)
				? n.preventDefault()
				: qn(t, 'pointer'));
};
class Ny {
	constructor(e, n, r, s) {
		((this.view = e),
			(this.pos = n),
			(this.event = r),
			(this.flushed = s),
			(this.delayedSelectionSync = !1),
			(this.mightDrag = null),
			(this.startDoc = e.state.doc),
			(this.selectNode = !!r[jf]),
			(this.allowDefault = r.shiftKey));
		let o, i;
		if (n.inside > -1) ((o = e.state.doc.nodeAt(n.inside)), (i = n.inside));
		else {
			let u = e.state.doc.resolve(n.pos);
			((o = u.parent), (i = u.depth ? u.before() : 0));
		}
		const l = s ? null : r.target,
			a = l ? e.docView.nearestDesc(l, !0) : null;
		this.target = a && a.nodeDOM.nodeType == 1 ? a.nodeDOM : null;
		let { selection: c } = e.state;
		(((r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1) ||
			(c instanceof fe && c.from <= i && c.to > i)) &&
			(this.mightDrag = {
				node: o,
				pos: i,
				addAttr: !!(this.target && !this.target.draggable),
				setUneditable: !!(this.target && Yt && !this.target.hasAttribute('contentEditable'))
			}),
			this.target &&
				this.mightDrag &&
				(this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
				(this.view.domObserver.stop(),
				this.mightDrag.addAttr && (this.target.draggable = !0),
				this.mightDrag.setUneditable &&
					setTimeout(() => {
						this.view.input.mouseDown == this &&
							this.target.setAttribute('contentEditable', 'false');
					}, 20),
				this.view.domObserver.start()),
			e.root.addEventListener('mouseup', (this.up = this.up.bind(this))),
			e.root.addEventListener('mousemove', (this.move = this.move.bind(this))),
			qn(e, 'pointer'));
	}
	done() {
		(this.view.root.removeEventListener('mouseup', this.up),
			this.view.root.removeEventListener('mousemove', this.move),
			this.mightDrag &&
				this.target &&
				(this.view.domObserver.stop(),
				this.mightDrag.addAttr && this.target.removeAttribute('draggable'),
				this.mightDrag.setUneditable && this.target.removeAttribute('contentEditable'),
				this.view.domObserver.start()),
			this.delayedSelectionSync && setTimeout(() => Dn(this.view)),
			(this.view.input.mouseDown = null));
	}
	up(e) {
		if ((this.done(), !this.view.dom.contains(e.target))) return;
		let n = this.pos;
		(this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(ui(e))),
			this.updateAllowDefault(e),
			this.allowDefault || !n
				? qn(this.view, 'pointer')
				: Ty(this.view, n.pos, n.inside, e, this.selectNode)
					? e.preventDefault()
					: e.button == 0 &&
						  (this.flushed ||
								(Nt && this.mightDrag && !this.mightDrag.node.isAtom) ||
								(Ct &&
									!this.view.state.selection.visible &&
									Math.min(
										Math.abs(n.pos - this.view.state.selection.from),
										Math.abs(n.pos - this.view.state.selection.to)
									) <= 2))
						? (zr(this.view, ve.near(this.view.state.doc.resolve(n.pos))), e.preventDefault())
						: qn(this.view, 'pointer'));
	}
	move(e) {
		(this.updateAllowDefault(e), qn(this.view, 'pointer'), e.buttons == 0 && this.done());
	}
	updateAllowDefault(e) {
		!this.allowDefault &&
			(Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) &&
			(this.allowDefault = !0);
	}
}
Pt.touchstart = (t) => {
	((t.input.lastTouch = Date.now()), ca(t), qn(t, 'pointer'));
};
Pt.touchmove = (t) => {
	((t.input.lastTouch = Date.now()), qn(t, 'pointer'));
};
Pt.contextmenu = (t) => ca(t);
function Uf(t, e) {
	return t.composing
		? !0
		: Nt && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500
			? ((t.input.compositionEndedAt = -2e8), !0)
			: !1;
}
const Oy = An ? 5e3 : -1;
zt.compositionstart = zt.compositionupdate = (t) => {
	if (!t.composing) {
		t.domObserver.flush();
		let { state: e } = t,
			n = e.selection.$to;
		if (
			e.selection instanceof pe &&
			(e.storedMarks ||
				(!n.textOffset &&
					n.parentOffset &&
					n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)) ||
				(Ct && wf && Iy(t)))
		)
			((t.markCursor = t.state.storedMarks || n.marks()), Co(t, !0), (t.markCursor = null));
		else if (
			(Co(t, !e.selection.empty),
			Yt && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length)
		) {
			let r = t.domSelectionRange();
			for (let s = r.focusNode, o = r.focusOffset; s && s.nodeType == 1 && o != 0; ) {
				let i = o < 0 ? s.lastChild : s.childNodes[o - 1];
				if (!i) break;
				if (i.nodeType == 3) {
					let l = t.domSelection();
					l && l.collapse(i, i.nodeValue.length);
					break;
				} else ((s = i), (o = -1));
			}
		}
		t.input.composing = !0;
	}
	qf(t, Oy);
};
function Iy(t) {
	let { focusNode: e, focusOffset: n } = t.domSelectionRange();
	if (!e || e.nodeType != 1 || n >= e.childNodes.length) return !1;
	let r = e.childNodes[n];
	return r.nodeType == 1 && r.contentEditable == 'false';
}
zt.compositionend = (t, e) => {
	t.composing &&
		((t.input.composing = !1),
		(t.input.compositionEndedAt = e.timeStamp),
		(t.input.compositionPendingChanges = t.domObserver.pendingRecords().length
			? t.input.compositionID
			: 0),
		(t.input.compositionNode = null),
		t.input.badSafariComposition
			? t.domObserver.forceFlush()
			: t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()),
		t.input.compositionID++,
		qf(t, 20));
};
function qf(t, e) {
	(clearTimeout(t.input.composingTimeout),
		e > -1 && (t.input.composingTimeout = setTimeout(() => Co(t), e)));
}
function Kf(t) {
	for (
		t.composing && ((t.input.composing = !1), (t.input.compositionEndedAt = Ry()));
		t.input.compositionNodes.length > 0;
	)
		t.input.compositionNodes.pop().markParentsDirty();
}
function Dy(t) {
	let e = t.domSelectionRange();
	if (!e.focusNode) return null;
	let n = C0(e.focusNode, e.focusOffset),
		r = T0(e.focusNode, e.focusOffset);
	if (n && r && n != r) {
		let s = r.pmViewDesc,
			o = t.domObserver.lastChangedTextNode;
		if (n == o || r == o) return o;
		if (!s || !s.isText(r.nodeValue)) return r;
		if (t.input.compositionNode == r) {
			let i = n.pmViewDesc;
			if (!(!i || !i.isText(n.nodeValue))) return r;
		}
	}
	return n || r;
}
function Ry() {
	let t = document.createEvent('Event');
	return (t.initEvent('event', !0, !0), t.timeStamp);
}
function Co(t, e = !1) {
	if (!(An && t.domObserver.flushingSoon >= 0)) {
		if ((t.domObserver.forceFlush(), Kf(t), e || (t.docView && t.docView.dirty))) {
			let n = sa(t),
				r = t.state.selection;
			return (
				n && !n.eq(r)
					? t.dispatch(t.state.tr.setSelection(n))
					: (t.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent
						? t.dispatch(t.state.tr.deleteSelection())
						: t.updateState(t.state),
				!0
			);
		}
		return !1;
	}
}
function Ly(t, e) {
	if (!t.dom.parentNode) return;
	let n = t.dom.parentNode.appendChild(document.createElement('div'));
	(n.appendChild(e), (n.style.cssText = 'position: fixed; left: -10000px; top: 10px'));
	let r = getSelection(),
		s = document.createRange();
	(s.selectNodeContents(e),
		t.dom.blur(),
		r.removeAllRanges(),
		r.addRange(s),
		setTimeout(() => {
			(n.parentNode && n.parentNode.removeChild(n), t.focus());
		}, 50));
}
const Ts = (Ft && Kn < 15) || (Hr && N0 < 604);
Pt.copy = zt.cut = (t, e) => {
	let n = e,
		r = t.state.selection,
		s = n.type == 'cut';
	if (r.empty) return;
	let o = Ts ? null : n.clipboardData,
		i = r.content(),
		{ dom: l, text: a } = ia(t, i);
	(o
		? (n.preventDefault(),
			o.clearData(),
			o.setData('text/html', l.innerHTML),
			o.setData('text/plain', a))
		: Ly(t, l),
		s && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta('uiEvent', 'cut')));
};
function Py(t) {
	return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1
		? t.content.firstChild
		: null;
}
function zy(t, e) {
	if (!t.dom.parentNode) return;
	let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code,
		r = t.dom.parentNode.appendChild(document.createElement(n ? 'textarea' : 'div'));
	(n || (r.contentEditable = 'true'),
		(r.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
		r.focus());
	let s = t.input.shiftKey && t.input.lastKeyCode != 45;
	setTimeout(() => {
		(t.focus(),
			r.parentNode && r.parentNode.removeChild(r),
			n ? Ms(t, r.value, null, s, e) : Ms(t, r.textContent, r.innerHTML, s, e));
	}, 50);
}
function Ms(t, e, n, r, s) {
	let o = $f(t, e, n, r, t.state.selection.$from);
	if (t.someProp('handlePaste', (a) => a(t, s, o || X.empty))) return !0;
	if (!o) return !1;
	let i = Py(o),
		l = i ? t.state.tr.replaceSelectionWith(i, r) : t.state.tr.replaceSelection(o);
	return (t.dispatch(l.scrollIntoView().setMeta('paste', !0).setMeta('uiEvent', 'paste')), !0);
}
function Jf(t) {
	let e = t.getData('text/plain') || t.getData('Text');
	if (e) return e;
	let n = t.getData('text/uri-list');
	return n ? n.replace(/\r?\n/g, ' ') : '';
}
zt.paste = (t, e) => {
	let n = e;
	if (t.composing && !An) return;
	let r = Ts ? null : n.clipboardData,
		s = t.input.shiftKey && t.input.lastKeyCode != 45;
	r && Ms(t, Jf(r), r.getData('text/html'), s, n) ? n.preventDefault() : zy(t, n);
};
class Gf {
	constructor(e, n, r) {
		((this.slice = e), (this.move = n), (this.node = r));
	}
}
const By = Gt ? 'altKey' : 'ctrlKey';
function Xf(t, e) {
	let n = t.someProp('dragCopies', (r) => !r(e));
	return n ?? !e[By];
}
Pt.dragstart = (t, e) => {
	let n = e,
		r = t.input.mouseDown;
	if ((r && r.done(), !n.dataTransfer)) return;
	let s = t.state.selection,
		o = s.empty ? null : t.posAtCoords(ui(n)),
		i;
	if (!(o && o.pos >= s.from && o.pos <= (s instanceof fe ? s.to - 1 : s.to))) {
		if (r && r.mightDrag) i = fe.create(t.state.doc, r.mightDrag.pos);
		else if (n.target && n.target.nodeType == 1) {
			let d = t.docView.nearestDesc(n.target, !0);
			d &&
				d.node.type.spec.draggable &&
				d != t.docView &&
				(i = fe.create(t.state.doc, d.posBefore));
		}
	}
	let l = (i || t.state.selection).content(),
		{ dom: a, text: c, slice: u } = ia(t, l);
	((!n.dataTransfer.files.length || !Ct || xf > 120) && n.dataTransfer.clearData(),
		n.dataTransfer.setData(Ts ? 'Text' : 'text/html', a.innerHTML),
		(n.dataTransfer.effectAllowed = 'copyMove'),
		Ts || n.dataTransfer.setData('text/plain', c),
		(t.dragging = new Gf(u, Xf(t, n), i)));
};
Pt.dragend = (t) => {
	let e = t.dragging;
	window.setTimeout(() => {
		t.dragging == e && (t.dragging = null);
	}, 50);
};
zt.dragover = zt.dragenter = (t, e) => e.preventDefault();
zt.drop = (t, e) => {
	try {
		$y(t, e, t.dragging);
	} finally {
		t.dragging = null;
	}
};
function $y(t, e, n) {
	if (!e.dataTransfer) return;
	let r = t.posAtCoords(ui(e));
	if (!r) return;
	let s = t.state.doc.resolve(r.pos),
		o = n && n.slice;
	o
		? t.someProp('transformPasted', (h) => {
				o = h(o, t, !1);
			})
		: (o = $f(t, Jf(e.dataTransfer), Ts ? null : e.dataTransfer.getData('text/html'), !1, s));
	let i = !!(n && Xf(t, e));
	if (t.someProp('handleDrop', (h) => h(t, e, o || X.empty, i))) {
		e.preventDefault();
		return;
	}
	if (!o) return;
	e.preventDefault();
	let l = o ? ff(t.state.doc, s.pos, o) : s.pos;
	l == null && (l = s.pos);
	let a = t.state.tr;
	if (i) {
		let { node: h } = n;
		h ? h.replace(a) : a.deleteSelection();
	}
	let c = a.mapping.map(l),
		u = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1,
		d = a.doc;
	if ((u ? a.replaceRangeWith(c, c, o.content.firstChild) : a.replaceRange(c, c, o), a.doc.eq(d)))
		return;
	let f = a.doc.resolve(c);
	if (
		u &&
		fe.isSelectable(o.content.firstChild) &&
		f.nodeAfter &&
		f.nodeAfter.sameMarkup(o.content.firstChild)
	)
		a.setSelection(new fe(f));
	else {
		let h = a.mapping.map(l);
		(a.mapping.maps[a.mapping.maps.length - 1].forEach((p, m, g, b) => (h = b)),
			a.setSelection(oa(t, f, a.doc.resolve(h))));
	}
	(t.focus(), t.dispatch(a.setMeta('uiEvent', 'drop')));
}
Pt.focus = (t) => {
	((t.input.lastFocus = Date.now()),
		t.focused ||
			(t.domObserver.stop(),
			t.dom.classList.add('ProseMirror-focused'),
			t.domObserver.start(),
			(t.focused = !0),
			setTimeout(() => {
				t.docView &&
					t.hasFocus() &&
					!t.domObserver.currentSelection.eq(t.domSelectionRange()) &&
					Dn(t);
			}, 20)));
};
Pt.blur = (t, e) => {
	let n = e;
	t.focused &&
		(t.domObserver.stop(),
		t.dom.classList.remove('ProseMirror-focused'),
		t.domObserver.start(),
		n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(),
		(t.focused = !1));
};
Pt.beforeinput = (t, e) => {
	if (Ct && An && e.inputType == 'deleteContentBackward') {
		t.domObserver.flushSoon();
		let { domChangeCount: r } = t.input;
		setTimeout(() => {
			if (
				t.input.domChangeCount != r ||
				(t.dom.blur(), t.focus(), t.someProp('handleKeyDown', (o) => o(t, or(8, 'Backspace'))))
			)
				return;
			let { $cursor: s } = t.state.selection;
			s && s.pos > 0 && t.dispatch(t.state.tr.delete(s.pos - 1, s.pos).scrollIntoView());
		}, 50);
	}
};
for (let t in zt) Pt[t] = zt[t];
function Es(t, e) {
	if (t == e) return !0;
	for (let n in t) if (t[n] !== e[n]) return !1;
	for (let n in e) if (!(n in t)) return !1;
	return !0;
}
class To {
	constructor(e, n) {
		((this.toDOM = e), (this.spec = n || fr), (this.side = this.spec.side || 0));
	}
	map(e, n, r, s) {
		let { pos: o, deleted: i } = e.mapResult(n.from + s, this.side < 0 ? -1 : 1);
		return i ? null : new tt(o - r, o - r, this);
	}
	valid() {
		return !0;
	}
	eq(e) {
		return (
			this == e ||
			(e instanceof To &&
				((this.spec.key && this.spec.key == e.spec.key) ||
					(this.toDOM == e.toDOM && Es(this.spec, e.spec))))
		);
	}
	destroy(e) {
		this.spec.destroy && this.spec.destroy(e);
	}
}
class Gn {
	constructor(e, n) {
		((this.attrs = e), (this.spec = n || fr));
	}
	map(e, n, r, s) {
		let o = e.map(n.from + s, this.spec.inclusiveStart ? -1 : 1) - r,
			i = e.map(n.to + s, this.spec.inclusiveEnd ? 1 : -1) - r;
		return o >= i ? null : new tt(o, i, this);
	}
	valid(e, n) {
		return n.from < n.to;
	}
	eq(e) {
		return this == e || (e instanceof Gn && Es(this.attrs, e.attrs) && Es(this.spec, e.spec));
	}
	static is(e) {
		return e.type instanceof Gn;
	}
	destroy() {}
}
class ua {
	constructor(e, n) {
		((this.attrs = e), (this.spec = n || fr));
	}
	map(e, n, r, s) {
		let o = e.mapResult(n.from + s, 1);
		if (o.deleted) return null;
		let i = e.mapResult(n.to + s, -1);
		return i.deleted || i.pos <= o.pos ? null : new tt(o.pos - r, i.pos - r, this);
	}
	valid(e, n) {
		let { index: r, offset: s } = e.content.findIndex(n.from),
			o;
		return s == n.from && !(o = e.child(r)).isText && s + o.nodeSize == n.to;
	}
	eq(e) {
		return this == e || (e instanceof ua && Es(this.attrs, e.attrs) && Es(this.spec, e.spec));
	}
	destroy() {}
}
class tt {
	constructor(e, n, r) {
		((this.from = e), (this.to = n), (this.type = r));
	}
	copy(e, n) {
		return new tt(e, n, this.type);
	}
	eq(e, n = 0) {
		return this.type.eq(e.type) && this.from + n == e.from && this.to + n == e.to;
	}
	map(e, n, r) {
		return this.type.map(e, this, n, r);
	}
	static widget(e, n, r) {
		return new tt(e, e, new To(n, r));
	}
	static inline(e, n, r, s) {
		return new tt(e, n, new Gn(r, s));
	}
	static node(e, n, r, s) {
		return new tt(e, n, new ua(r, s));
	}
	get spec() {
		return this.type.spec;
	}
	get inline() {
		return this.type instanceof Gn;
	}
	get widget() {
		return this.type instanceof To;
	}
}
const Or = [],
	fr = {};
class Ve {
	constructor(e, n) {
		((this.local = e.length ? e : Or), (this.children = n.length ? n : Or));
	}
	static create(e, n) {
		return n.length ? Mo(n, e, 0, fr) : At;
	}
	find(e, n, r) {
		let s = [];
		return (this.findInner(e ?? 0, n ?? 1e9, s, 0, r), s);
	}
	findInner(e, n, r, s, o) {
		for (let i = 0; i < this.local.length; i++) {
			let l = this.local[i];
			l.from <= n && l.to >= e && (!o || o(l.spec)) && r.push(l.copy(l.from + s, l.to + s));
		}
		for (let i = 0; i < this.children.length; i += 3)
			if (this.children[i] < n && this.children[i + 1] > e) {
				let l = this.children[i] + 1;
				this.children[i + 2].findInner(e - l, n - l, r, s + l, o);
			}
	}
	map(e, n, r) {
		return this == At || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || fr);
	}
	mapInner(e, n, r, s, o) {
		let i;
		for (let l = 0; l < this.local.length; l++) {
			let a = this.local[l].map(e, r, s);
			a && a.type.valid(n, a)
				? (i || (i = [])).push(a)
				: o.onRemove && o.onRemove(this.local[l].spec);
		}
		return this.children.length
			? _y(this.children, i || [], e, n, r, s, o)
			: i
				? new Ve(i.sort(hr), Or)
				: At;
	}
	add(e, n) {
		return n.length ? (this == At ? Ve.create(e, n) : this.addInner(e, n, 0)) : this;
	}
	addInner(e, n, r) {
		let s,
			o = 0;
		e.forEach((l, a) => {
			let c = a + r,
				u;
			if ((u = Yf(n, l, c))) {
				for (s || (s = this.children.slice()); o < s.length && s[o] < a; ) o += 3;
				(s[o] == a
					? (s[o + 2] = s[o + 2].addInner(l, u, c + 1))
					: s.splice(o, 0, a, a + l.nodeSize, Mo(u, l, c + 1, fr)),
					(o += 3));
			}
		});
		let i = Qf(o ? Zf(n) : n, -r);
		for (let l = 0; l < i.length; l++) i[l].type.valid(e, i[l]) || i.splice(l--, 1);
		return new Ve(i.length ? this.local.concat(i).sort(hr) : this.local, s || this.children);
	}
	remove(e) {
		return e.length == 0 || this == At ? this : this.removeInner(e, 0);
	}
	removeInner(e, n) {
		let r = this.children,
			s = this.local;
		for (let o = 0; o < r.length; o += 3) {
			let i,
				l = r[o] + n,
				a = r[o + 1] + n;
			for (let u = 0, d; u < e.length; u++)
				(d = e[u]) && d.from > l && d.to < a && ((e[u] = null), (i || (i = [])).push(d));
			if (!i) continue;
			r == this.children && (r = this.children.slice());
			let c = r[o + 2].removeInner(i, l + 1);
			c != At ? (r[o + 2] = c) : (r.splice(o, 3), (o -= 3));
		}
		if (s.length) {
			for (let o = 0, i; o < e.length; o++)
				if ((i = e[o]))
					for (let l = 0; l < s.length; l++)
						s[l].eq(i, n) && (s == this.local && (s = this.local.slice()), s.splice(l--, 1));
		}
		return r == this.children && s == this.local ? this : s.length || r.length ? new Ve(s, r) : At;
	}
	forChild(e, n) {
		if (this == At) return this;
		if (n.isLeaf) return Ve.empty;
		let r, s;
		for (let l = 0; l < this.children.length; l += 3)
			if (this.children[l] >= e) {
				this.children[l] == e && (r = this.children[l + 2]);
				break;
			}
		let o = e + 1,
			i = o + n.content.size;
		for (let l = 0; l < this.local.length; l++) {
			let a = this.local[l];
			if (a.from < i && a.to > o && a.type instanceof Gn) {
				let c = Math.max(o, a.from) - o,
					u = Math.min(i, a.to) - o;
				c < u && (s || (s = [])).push(a.copy(c, u));
			}
		}
		if (s) {
			let l = new Ve(s.sort(hr), Or);
			return r ? new Fn([l, r]) : l;
		}
		return r || At;
	}
	eq(e) {
		if (this == e) return !0;
		if (
			!(e instanceof Ve) ||
			this.local.length != e.local.length ||
			this.children.length != e.children.length
		)
			return !1;
		for (let n = 0; n < this.local.length; n++) if (!this.local[n].eq(e.local[n])) return !1;
		for (let n = 0; n < this.children.length; n += 3)
			if (
				this.children[n] != e.children[n] ||
				this.children[n + 1] != e.children[n + 1] ||
				!this.children[n + 2].eq(e.children[n + 2])
			)
				return !1;
		return !0;
	}
	locals(e) {
		return da(this.localsInner(e));
	}
	localsInner(e) {
		if (this == At) return Or;
		if (e.inlineContent || !this.local.some(Gn.is)) return this.local;
		let n = [];
		for (let r = 0; r < this.local.length; r++)
			this.local[r].type instanceof Gn || n.push(this.local[r]);
		return n;
	}
	forEachSet(e) {
		e(this);
	}
}
Ve.empty = new Ve([], []);
Ve.removeOverlap = da;
const At = Ve.empty;
class Fn {
	constructor(e) {
		this.members = e;
	}
	map(e, n) {
		const r = this.members.map((s) => s.map(e, n, fr));
		return Fn.from(r);
	}
	forChild(e, n) {
		if (n.isLeaf) return Ve.empty;
		let r = [];
		for (let s = 0; s < this.members.length; s++) {
			let o = this.members[s].forChild(e, n);
			o != At && (o instanceof Fn ? (r = r.concat(o.members)) : r.push(o));
		}
		return Fn.from(r);
	}
	eq(e) {
		if (!(e instanceof Fn) || e.members.length != this.members.length) return !1;
		for (let n = 0; n < this.members.length; n++) if (!this.members[n].eq(e.members[n])) return !1;
		return !0;
	}
	locals(e) {
		let n,
			r = !0;
		for (let s = 0; s < this.members.length; s++) {
			let o = this.members[s].localsInner(e);
			if (o.length)
				if (!n) n = o;
				else {
					r && ((n = n.slice()), (r = !1));
					for (let i = 0; i < o.length; i++) n.push(o[i]);
				}
		}
		return n ? da(r ? n : n.sort(hr)) : Or;
	}
	static from(e) {
		switch (e.length) {
			case 0:
				return At;
			case 1:
				return e[0];
			default:
				return new Fn(
					e.every((n) => n instanceof Ve)
						? e
						: e.reduce((n, r) => n.concat(r instanceof Ve ? r : r.members), [])
				);
		}
	}
	forEachSet(e) {
		for (let n = 0; n < this.members.length; n++) this.members[n].forEachSet(e);
	}
}
function _y(t, e, n, r, s, o, i) {
	let l = t.slice();
	for (let c = 0, u = o; c < n.maps.length; c++) {
		let d = 0;
		(n.maps[c].forEach((f, h, p, m) => {
			let g = m - p - (h - f);
			for (let b = 0; b < l.length; b += 3) {
				let S = l[b + 1];
				if (S < 0 || f > S + u - d) continue;
				let O = l[b] + u - d;
				h >= O ? (l[b + 1] = f <= O ? -2 : -1) : f >= u && g && ((l[b] += g), (l[b + 1] += g));
			}
			d += g;
		}),
			(u = n.maps[c].map(u, -1)));
	}
	let a = !1;
	for (let c = 0; c < l.length; c += 3)
		if (l[c + 1] < 0) {
			if (l[c + 1] == -2) {
				((a = !0), (l[c + 1] = -1));
				continue;
			}
			let u = n.map(t[c] + o),
				d = u - s;
			if (d < 0 || d >= r.content.size) {
				a = !0;
				continue;
			}
			let f = n.map(t[c + 1] + o, -1),
				h = f - s,
				{ index: p, offset: m } = r.content.findIndex(d),
				g = r.maybeChild(p);
			if (g && m == d && m + g.nodeSize == h) {
				let b = l[c + 2].mapInner(n, g, u + 1, t[c] + o + 1, i);
				b != At ? ((l[c] = d), (l[c + 1] = h), (l[c + 2] = b)) : ((l[c + 1] = -2), (a = !0));
			} else a = !0;
		}
	if (a) {
		let c = Hy(l, t, e, n, s, o, i),
			u = Mo(c, r, 0, i);
		e = u.local;
		for (let d = 0; d < l.length; d += 3) l[d + 1] < 0 && (l.splice(d, 3), (d -= 3));
		for (let d = 0, f = 0; d < u.children.length; d += 3) {
			let h = u.children[d];
			for (; f < l.length && l[f] < h; ) f += 3;
			l.splice(f, 0, u.children[d], u.children[d + 1], u.children[d + 2]);
		}
	}
	return new Ve(e.sort(hr), l);
}
function Qf(t, e) {
	if (!e || !t.length) return t;
	let n = [];
	for (let r = 0; r < t.length; r++) {
		let s = t[r];
		n.push(new tt(s.from + e, s.to + e, s.type));
	}
	return n;
}
function Hy(t, e, n, r, s, o, i) {
	function l(a, c) {
		for (let u = 0; u < a.local.length; u++) {
			let d = a.local[u].map(r, s, c);
			d ? n.push(d) : i.onRemove && i.onRemove(a.local[u].spec);
		}
		for (let u = 0; u < a.children.length; u += 3) l(a.children[u + 2], a.children[u] + c + 1);
	}
	for (let a = 0; a < t.length; a += 3) t[a + 1] == -1 && l(t[a + 2], e[a] + o + 1);
	return n;
}
function Yf(t, e, n) {
	if (e.isLeaf) return null;
	let r = n + e.nodeSize,
		s = null;
	for (let o = 0, i; o < t.length; o++)
		(i = t[o]) && i.from > n && i.to < r && ((s || (s = [])).push(i), (t[o] = null));
	return s;
}
function Zf(t) {
	let e = [];
	for (let n = 0; n < t.length; n++) t[n] != null && e.push(t[n]);
	return e;
}
function Mo(t, e, n, r) {
	let s = [],
		o = !1;
	e.forEach((l, a) => {
		let c = Yf(t, l, a + n);
		if (c) {
			o = !0;
			let u = Mo(c, l, n + a + 1, r);
			u != At && s.push(a, a + l.nodeSize, u);
		}
	});
	let i = Qf(o ? Zf(t) : t, -n).sort(hr);
	for (let l = 0; l < i.length; l++)
		i[l].type.valid(e, i[l]) || (r.onRemove && r.onRemove(i[l].spec), i.splice(l--, 1));
	return i.length || s.length ? new Ve(i, s) : At;
}
function hr(t, e) {
	return t.from - e.from || t.to - e.to;
}
function da(t) {
	let e = t;
	for (let n = 0; n < e.length - 1; n++) {
		let r = e[n];
		if (r.from != r.to)
			for (let s = n + 1; s < e.length; s++) {
				let o = e[s];
				if (o.from == r.from) {
					o.to != r.to &&
						(e == t && (e = t.slice()),
						(e[s] = o.copy(o.from, r.to)),
						Uc(e, s + 1, o.copy(r.to, o.to)));
					continue;
				} else {
					o.from < r.to &&
						(e == t && (e = t.slice()),
						(e[n] = r.copy(r.from, o.from)),
						Uc(e, s, r.copy(o.from, r.to)));
					break;
				}
			}
	}
	return e;
}
function Uc(t, e, n) {
	for (; e < t.length && hr(n, t[e]) > 0; ) e++;
	t.splice(e, 0, n);
}
function Hi(t) {
	let e = [];
	return (
		t.someProp('decorations', (n) => {
			let r = n(t.state);
			r && r != At && e.push(r);
		}),
		t.cursorWrapper && e.push(Ve.create(t.state.doc, [t.cursorWrapper.deco])),
		Fn.from(e)
	);
}
const Fy = {
		childList: !0,
		characterData: !0,
		characterDataOldValue: !0,
		attributes: !0,
		attributeOldValue: !0,
		subtree: !0
	},
	Vy = Ft && Kn <= 11;
class Wy {
	constructor() {
		((this.anchorNode = null),
			(this.anchorOffset = 0),
			(this.focusNode = null),
			(this.focusOffset = 0));
	}
	set(e) {
		((this.anchorNode = e.anchorNode),
			(this.anchorOffset = e.anchorOffset),
			(this.focusNode = e.focusNode),
			(this.focusOffset = e.focusOffset));
	}
	clear() {
		this.anchorNode = this.focusNode = null;
	}
	eq(e) {
		return (
			e.anchorNode == this.anchorNode &&
			e.anchorOffset == this.anchorOffset &&
			e.focusNode == this.focusNode &&
			e.focusOffset == this.focusOffset
		);
	}
}
class jy {
	constructor(e, n) {
		((this.view = e),
			(this.handleDOMChange = n),
			(this.queue = []),
			(this.flushingSoon = -1),
			(this.observer = null),
			(this.currentSelection = new Wy()),
			(this.onCharData = null),
			(this.suppressingSelectionUpdates = !1),
			(this.lastChangedTextNode = null),
			(this.observer =
				window.MutationObserver &&
				new window.MutationObserver((r) => {
					for (let s = 0; s < r.length; s++) this.queue.push(r[s]);
					Ft &&
					Kn <= 11 &&
					r.some(
						(s) =>
							(s.type == 'childList' && s.removedNodes.length) ||
							(s.type == 'characterData' && s.oldValue.length > s.target.nodeValue.length)
					)
						? this.flushSoon()
						: Nt && e.composing && r.some((s) => s.type == 'childList' && s.target.nodeName == 'TR')
							? ((e.input.badSafariComposition = !0), this.flushSoon())
							: this.flush();
				})),
			Vy &&
				(this.onCharData = (r) => {
					(this.queue.push({ target: r.target, type: 'characterData', oldValue: r.prevValue }),
						this.flushSoon());
				}),
			(this.onSelectionChange = this.onSelectionChange.bind(this)));
	}
	flushSoon() {
		this.flushingSoon < 0 &&
			(this.flushingSoon = window.setTimeout(() => {
				((this.flushingSoon = -1), this.flush());
			}, 20));
	}
	forceFlush() {
		this.flushingSoon > -1 &&
			(window.clearTimeout(this.flushingSoon), (this.flushingSoon = -1), this.flush());
	}
	start() {
		(this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Fy)),
			this.onCharData &&
				this.view.dom.addEventListener('DOMCharacterDataModified', this.onCharData),
			this.connectSelection());
	}
	stop() {
		if (this.observer) {
			let e = this.observer.takeRecords();
			if (e.length) {
				for (let n = 0; n < e.length; n++) this.queue.push(e[n]);
				window.setTimeout(() => this.flush(), 20);
			}
			this.observer.disconnect();
		}
		(this.onCharData &&
			this.view.dom.removeEventListener('DOMCharacterDataModified', this.onCharData),
			this.disconnectSelection());
	}
	connectSelection() {
		this.view.dom.ownerDocument.addEventListener('selectionchange', this.onSelectionChange);
	}
	disconnectSelection() {
		this.view.dom.ownerDocument.removeEventListener('selectionchange', this.onSelectionChange);
	}
	suppressSelectionUpdates() {
		((this.suppressingSelectionUpdates = !0),
			setTimeout(() => (this.suppressingSelectionUpdates = !1), 50));
	}
	onSelectionChange() {
		if (Bc(this.view)) {
			if (this.suppressingSelectionUpdates) return Dn(this.view);
			if (Ft && Kn <= 11 && !this.view.state.selection.empty) {
				let e = this.view.domSelectionRange();
				if (e.focusNode && vr(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
					return this.flushSoon();
			}
			this.flush();
		}
	}
	setCurSelection() {
		this.currentSelection.set(this.view.domSelectionRange());
	}
	ignoreSelectionChange(e) {
		if (!e.focusNode) return !0;
		let n = new Set(),
			r;
		for (let o = e.focusNode; o; o = _r(o)) n.add(o);
		for (let o = e.anchorNode; o; o = _r(o))
			if (n.has(o)) {
				r = o;
				break;
			}
		let s = r && this.view.docView.nearestDesc(r);
		if (s && s.ignoreMutation({ type: 'selection', target: r.nodeType == 3 ? r.parentNode : r }))
			return (this.setCurSelection(), !0);
	}
	pendingRecords() {
		if (this.observer) for (let e of this.observer.takeRecords()) this.queue.push(e);
		return this.queue;
	}
	flush() {
		let { view: e } = this;
		if (!e.docView || this.flushingSoon > -1) return;
		let n = this.pendingRecords();
		n.length && (this.queue = []);
		let r = e.domSelectionRange(),
			s =
				!this.suppressingSelectionUpdates &&
				!this.currentSelection.eq(r) &&
				Bc(e) &&
				!this.ignoreSelectionChange(r),
			o = -1,
			i = -1,
			l = !1,
			a = [];
		if (e.editable)
			for (let u = 0; u < n.length; u++) {
				let d = this.registerMutation(n[u], a);
				d &&
					((o = o < 0 ? d.from : Math.min(d.from, o)),
					(i = i < 0 ? d.to : Math.max(d.to, i)),
					d.typeOver && (l = !0));
			}
		if (
			a.some((u) => u.nodeName == 'BR') &&
			(e.input.lastKeyCode == 8 || e.input.lastKeyCode == 46)
		) {
			for (let u of a)
				if (u.nodeName == 'BR' && u.parentNode) {
					let d = u.nextSibling;
					d && d.nodeType == 1 && d.contentEditable == 'false' && u.parentNode.removeChild(u);
				}
		} else if (Yt && a.length) {
			let u = a.filter((d) => d.nodeName == 'BR');
			if (u.length == 2) {
				let [d, f] = u;
				d.parentNode && d.parentNode.parentNode == f.parentNode ? f.remove() : d.remove();
			} else {
				let { focusNode: d } = this.currentSelection;
				for (let f of u) {
					let h = f.parentNode;
					h && h.nodeName == 'LI' && (!d || Ky(e, d) != h) && f.remove();
				}
			}
		}
		let c = null;
		o < 0 &&
		s &&
		e.input.lastFocus > Date.now() - 200 &&
		Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 &&
		ai(r) &&
		(c = sa(e)) &&
		c.eq(ve.near(e.state.doc.resolve(0), 1))
			? ((e.input.lastFocus = 0), Dn(e), this.currentSelection.set(r), e.scrollToSelection())
			: (o > -1 || s) &&
				(o > -1 && (e.docView.markDirty(o, i), Uy(e)),
				e.input.badSafariComposition && ((e.input.badSafariComposition = !1), Jy(e, a)),
				this.handleDOMChange(o, i, l, a),
				e.docView && e.docView.dirty
					? e.updateState(e.state)
					: this.currentSelection.eq(r) || Dn(e),
				this.currentSelection.set(r));
	}
	registerMutation(e, n) {
		if (n.indexOf(e.target) > -1) return null;
		let r = this.view.docView.nearestDesc(e.target);
		if (
			(e.type == 'attributes' &&
				(r == this.view.docView ||
					e.attributeName == 'contenteditable' ||
					(e.attributeName == 'style' && !e.oldValue && !e.target.getAttribute('style')))) ||
			!r ||
			r.ignoreMutation(e)
		)
			return null;
		if (e.type == 'childList') {
			for (let u = 0; u < e.addedNodes.length; u++) {
				let d = e.addedNodes[u];
				(n.push(d), d.nodeType == 3 && (this.lastChangedTextNode = d));
			}
			if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
				return { from: r.posBefore, to: r.posAfter };
			let s = e.previousSibling,
				o = e.nextSibling;
			if (Ft && Kn <= 11 && e.addedNodes.length)
				for (let u = 0; u < e.addedNodes.length; u++) {
					let { previousSibling: d, nextSibling: f } = e.addedNodes[u];
					((!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (s = d),
						(!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (o = f));
				}
			let i = s && s.parentNode == e.target ? St(s) + 1 : 0,
				l = r.localPosFromDOM(e.target, i, -1),
				a = o && o.parentNode == e.target ? St(o) : e.target.childNodes.length,
				c = r.localPosFromDOM(e.target, a, 1);
			return { from: l, to: c };
		} else
			return e.type == 'attributes'
				? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border }
				: ((this.lastChangedTextNode = e.target),
					{ from: r.posAtStart, to: r.posAtEnd, typeOver: e.target.nodeValue == e.oldValue });
	}
}
let qc = new WeakMap(),
	Kc = !1;
function Uy(t) {
	if (
		!qc.has(t) &&
		(qc.set(t, null),
		['normal', 'nowrap', 'pre-line'].indexOf(getComputedStyle(t.dom).whiteSpace) !== -1)
	) {
		if (((t.requiresGeckoHackNode = Yt), Kc)) return;
		(console.warn(
			"ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."
		),
			(Kc = !0));
	}
}
function Jc(t, e) {
	let n = e.startContainer,
		r = e.startOffset,
		s = e.endContainer,
		o = e.endOffset,
		i = t.domAtPos(t.state.selection.anchor);
	return (
		vr(i.node, i.offset, s, o) && ([n, r, s, o] = [s, o, n, r]),
		{ anchorNode: n, anchorOffset: r, focusNode: s, focusOffset: o }
	);
}
function qy(t, e) {
	if (e.getComposedRanges) {
		let s = e.getComposedRanges(t.root)[0];
		if (s) return Jc(t, s);
	}
	let n;
	function r(s) {
		(s.preventDefault(), s.stopImmediatePropagation(), (n = s.getTargetRanges()[0]));
	}
	return (
		t.dom.addEventListener('beforeinput', r, !0),
		document.execCommand('indent'),
		t.dom.removeEventListener('beforeinput', r, !0),
		n ? Jc(t, n) : null
	);
}
function Ky(t, e) {
	for (let n = e.parentNode; n && n != t.dom; n = n.parentNode) {
		let r = t.docView.nearestDesc(n, !0);
		if (r && r.node.isBlock) return n;
	}
	return null;
}
function Jy(t, e) {
	var n;
	let { focusNode: r, focusOffset: s } = t.domSelectionRange();
	for (let o of e)
		if (((n = o.parentNode) === null || n === void 0 ? void 0 : n.nodeName) == 'TR') {
			let i = o.nextSibling;
			for (; i && i.nodeName != 'TD' && i.nodeName != 'TH'; ) i = i.nextSibling;
			if (i) {
				let l = i;
				for (;;) {
					let a = l.firstChild;
					if (
						!a ||
						a.nodeType != 1 ||
						a.contentEditable == 'false' ||
						/^(BR|IMG)$/.test(a.nodeName)
					)
						break;
					l = a;
				}
				(l.insertBefore(o, l.firstChild), r == o && t.domSelection().collapse(o, s));
			} else o.parentNode.removeChild(o);
		}
}
function Gy(t, e, n) {
	let { node: r, fromOffset: s, toOffset: o, from: i, to: l } = t.docView.parseRange(e, n),
		a = t.domSelectionRange(),
		c,
		u = a.anchorNode;
	if (
		(u &&
			t.dom.contains(u.nodeType == 1 ? u : u.parentNode) &&
			((c = [{ node: u, offset: a.anchorOffset }]),
			ai(a) || c.push({ node: a.focusNode, offset: a.focusOffset })),
		Ct && t.input.lastKeyCode === 8)
	)
		for (let g = o; g > s; g--) {
			let b = r.childNodes[g - 1],
				S = b.pmViewDesc;
			if (b.nodeName == 'BR' && !S) {
				o = g;
				break;
			}
			if (!S || S.size) break;
		}
	let d = t.state.doc,
		f = t.someProp('domParser') || On.fromSchema(t.state.schema),
		h = d.resolve(i),
		p = null,
		m = f.parse(r, {
			topNode: h.parent,
			topMatch: h.parent.contentMatchAt(h.index()),
			topOpen: !0,
			from: s,
			to: o,
			preserveWhitespace: h.parent.type.whitespace == 'pre' ? 'full' : !0,
			findPositions: c,
			ruleFromNode: Xy,
			context: h
		});
	if (c && c[0].pos != null) {
		let g = c[0].pos,
			b = c[1] && c[1].pos;
		(b == null && (b = g), (p = { anchor: g + i, head: b + i }));
	}
	return { doc: m, sel: p, from: i, to: l };
}
function Xy(t) {
	let e = t.pmViewDesc;
	if (e) return e.parseRule();
	if (t.nodeName == 'BR' && t.parentNode) {
		if (Nt && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
			let n = document.createElement('div');
			return (n.appendChild(document.createElement('li')), { skip: n });
		} else if (t.parentNode.lastChild == t || (Nt && /^(tr|table)$/i.test(t.parentNode.nodeName)))
			return { ignore: !0 };
	} else if (t.nodeName == 'IMG' && t.getAttribute('mark-placeholder')) return { ignore: !0 };
	return null;
}
const Qy =
	/^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Yy(t, e, n, r, s) {
	let o = t.input.compositionPendingChanges || (t.composing ? t.input.compositionID : 0);
	if (((t.input.compositionPendingChanges = 0), e < 0)) {
		let k = t.input.lastSelectionTime > Date.now() - 50 ? t.input.lastSelectionOrigin : null,
			M = sa(t, k);
		if (M && !t.state.selection.eq(M)) {
			if (
				Ct &&
				An &&
				t.input.lastKeyCode === 13 &&
				Date.now() - 100 < t.input.lastKeyCodeTime &&
				t.someProp('handleKeyDown', (_) => _(t, or(13, 'Enter')))
			)
				return;
			let T = t.state.tr.setSelection(M);
			(k == 'pointer' ? T.setMeta('pointer', !0) : k == 'key' && T.scrollIntoView(),
				o && T.setMeta('composition', o),
				t.dispatch(T));
		}
		return;
	}
	let i = t.state.doc.resolve(e),
		l = i.sharedDepth(n);
	((e = i.before(l + 1)), (n = t.state.doc.resolve(n).after(l + 1)));
	let a = t.state.selection,
		c = Gy(t, e, n),
		u = t.state.doc,
		d = u.slice(c.from, c.to),
		f,
		h;
	(t.input.lastKeyCode === 8 && Date.now() - 100 < t.input.lastKeyCodeTime
		? ((f = t.state.selection.to), (h = 'end'))
		: ((f = t.state.selection.from), (h = 'start')),
		(t.input.lastKeyCode = null));
	let p = t1(d.content, c.doc.content, c.from, f, h);
	if (
		(p && t.input.domChangeCount++,
		((Hr && t.input.lastIOSEnter > Date.now() - 225) || An) &&
			s.some((k) => k.nodeType == 1 && !Qy.test(k.nodeName)) &&
			(!p || p.endA >= p.endB) &&
			t.someProp('handleKeyDown', (k) => k(t, or(13, 'Enter'))))
	) {
		t.input.lastIOSEnter = 0;
		return;
	}
	if (!p)
		if (
			r &&
			a instanceof pe &&
			!a.empty &&
			a.$head.sameParent(a.$anchor) &&
			!t.composing &&
			!(c.sel && c.sel.anchor != c.sel.head)
		)
			p = { start: a.from, endA: a.to, endB: a.to };
		else {
			if (c.sel) {
				let k = Gc(t, t.state.doc, c.sel);
				if (k && !k.eq(t.state.selection)) {
					let M = t.state.tr.setSelection(k);
					(o && M.setMeta('composition', o), t.dispatch(M));
				}
			}
			return;
		}
	(t.state.selection.from < t.state.selection.to &&
		p.start == p.endB &&
		t.state.selection instanceof pe &&
		(p.start > t.state.selection.from &&
		p.start <= t.state.selection.from + 2 &&
		t.state.selection.from >= c.from
			? (p.start = t.state.selection.from)
			: p.endA < t.state.selection.to &&
				p.endA >= t.state.selection.to - 2 &&
				t.state.selection.to <= c.to &&
				((p.endB += t.state.selection.to - p.endA), (p.endA = t.state.selection.to))),
		Ft &&
			Kn <= 11 &&
			p.endB == p.start + 1 &&
			p.endA == p.start &&
			p.start > c.from &&
			c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == '  ' &&
			(p.start--, p.endA--, p.endB--));
	let m = c.doc.resolveNoCache(p.start - c.from),
		g = c.doc.resolveNoCache(p.endB - c.from),
		b = u.resolve(p.start),
		S = m.sameParent(g) && m.parent.inlineContent && b.end() >= p.endA;
	if (
		((Hr &&
			t.input.lastIOSEnter > Date.now() - 225 &&
			(!S || s.some((k) => k.nodeName == 'DIV' || k.nodeName == 'P'))) ||
			(!S &&
				m.pos < c.doc.content.size &&
				(!m.sameParent(g) || !m.parent.inlineContent) &&
				m.pos < g.pos &&
				!/\S/.test(c.doc.textBetween(m.pos, g.pos, '', '')))) &&
		t.someProp('handleKeyDown', (k) => k(t, or(13, 'Enter')))
	) {
		t.input.lastIOSEnter = 0;
		return;
	}
	if (
		t.state.selection.anchor > p.start &&
		e1(u, p.start, p.endA, m, g) &&
		t.someProp('handleKeyDown', (k) => k(t, or(8, 'Backspace')))
	) {
		An && Ct && t.domObserver.suppressSelectionUpdates();
		return;
	}
	(Ct && p.endB == p.start && (t.input.lastChromeDelete = Date.now()),
		An &&
			!S &&
			m.start() != g.start() &&
			g.parentOffset == 0 &&
			m.depth == g.depth &&
			c.sel &&
			c.sel.anchor == c.sel.head &&
			c.sel.head == p.endA &&
			((p.endB -= 2),
			(g = c.doc.resolveNoCache(p.endB - c.from)),
			setTimeout(() => {
				t.someProp('handleKeyDown', function (k) {
					return k(t, or(13, 'Enter'));
				});
			}, 20)));
	let O = p.start,
		H = p.endA,
		E = (k) => {
			let M = k || t.state.tr.replace(O, H, c.doc.slice(p.start - c.from, p.endB - c.from));
			if (c.sel) {
				let T = Gc(t, M.doc, c.sel);
				T &&
					!(
						(Ct &&
							t.composing &&
							T.empty &&
							(p.start != p.endB || t.input.lastChromeDelete < Date.now() - 100) &&
							(T.head == O || T.head == M.mapping.map(H) - 1)) ||
						(Ft && T.empty && T.head == O)
					) &&
					M.setSelection(T);
			}
			return (o && M.setMeta('composition', o), M.scrollIntoView());
		},
		x;
	if (S)
		if (m.pos == g.pos) {
			Ft &&
				Kn <= 11 &&
				m.parentOffset == 0 &&
				(t.domObserver.suppressSelectionUpdates(), setTimeout(() => Dn(t), 20));
			let k = E(t.state.tr.delete(O, H)),
				M = u.resolve(p.start).marksAcross(u.resolve(p.endA));
			(M && k.ensureMarks(M), t.dispatch(k));
		} else if (
			p.endA == p.endB &&
			(x = Zy(
				m.parent.content.cut(m.parentOffset, g.parentOffset),
				b.parent.content.cut(b.parentOffset, p.endA - b.start())
			))
		) {
			let k = E(t.state.tr);
			(x.type == 'add' ? k.addMark(O, H, x.mark) : k.removeMark(O, H, x.mark), t.dispatch(k));
		} else if (
			m.parent.child(m.index()).isText &&
			m.index() == g.index() - (g.textOffset ? 0 : 1)
		) {
			let k = m.parent.textBetween(m.parentOffset, g.parentOffset),
				M = () => E(t.state.tr.insertText(k, O, H));
			t.someProp('handleTextInput', (T) => T(t, O, H, k, M)) || t.dispatch(M());
		} else t.dispatch(E());
	else t.dispatch(E());
}
function Gc(t, e, n) {
	return Math.max(n.anchor, n.head) > e.content.size
		? null
		: oa(t, e.resolve(n.anchor), e.resolve(n.head));
}
function Zy(t, e) {
	let n = t.firstChild.marks,
		r = e.firstChild.marks,
		s = n,
		o = r,
		i,
		l,
		a;
	for (let u = 0; u < r.length; u++) s = r[u].removeFromSet(s);
	for (let u = 0; u < n.length; u++) o = n[u].removeFromSet(o);
	if (s.length == 1 && o.length == 0)
		((l = s[0]), (i = 'add'), (a = (u) => u.mark(l.addToSet(u.marks))));
	else if (s.length == 0 && o.length == 1)
		((l = o[0]), (i = 'remove'), (a = (u) => u.mark(l.removeFromSet(u.marks))));
	else return null;
	let c = [];
	for (let u = 0; u < e.childCount; u++) c.push(a(e.child(u)));
	if (z.from(c).eq(t)) return { mark: l, type: i };
}
function e1(t, e, n, r, s) {
	if (n - e <= s.pos - r.pos || Fi(r, !0, !1) < s.pos) return !1;
	let o = t.resolve(e);
	if (!r.parent.isTextblock) {
		let l = o.nodeAfter;
		return l != null && n == e + l.nodeSize;
	}
	if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock) return !1;
	let i = t.resolve(Fi(o, !0, !0));
	return !i.parent.isTextblock || i.pos > n || Fi(i, !0, !1) < n
		? !1
		: r.parent.content.cut(r.parentOffset).eq(i.parent.content);
}
function Fi(t, e, n) {
	let r = t.depth,
		s = e ? t.end() : t.pos;
	for (; r > 0 && (e || t.indexAfter(r) == t.node(r).childCount); ) (r--, s++, (e = !1));
	if (n) {
		let o = t.node(r).maybeChild(t.indexAfter(r));
		for (; o && !o.isLeaf; ) ((o = o.firstChild), s++);
	}
	return s;
}
function t1(t, e, n, r, s) {
	let o = t.findDiffStart(e, n);
	if (o == null) return null;
	let { a: i, b: l } = t.findDiffEnd(e, n + t.size, n + e.size);
	if (s == 'end') {
		let a = Math.max(0, o - Math.min(i, l));
		r -= i + a - o;
	}
	if (i < o && t.size < e.size) {
		let a = r <= o && r >= i ? o - r : 0;
		((o -= a),
			o && o < e.size && Xc(e.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1),
			(l = o + (l - i)),
			(i = o));
	} else if (l < o) {
		let a = r <= o && r >= l ? o - r : 0;
		((o -= a),
			o && o < t.size && Xc(t.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1),
			(i = o + (i - l)),
			(l = o));
	}
	return { start: o, endA: i, endB: l };
}
function Xc(t) {
	if (t.length != 2) return !1;
	let e = t.charCodeAt(0),
		n = t.charCodeAt(1);
	return e >= 56320 && e <= 57343 && n >= 55296 && n <= 56319;
}
class eh {
	constructor(e, n) {
		((this._root = null),
			(this.focused = !1),
			(this.trackWrites = null),
			(this.mounted = !1),
			(this.markCursor = null),
			(this.cursorWrapper = null),
			(this.lastSelectedViewDesc = void 0),
			(this.input = new yy()),
			(this.prevDirectPlugins = []),
			(this.pluginViews = []),
			(this.requiresGeckoHackNode = !1),
			(this.dragging = null),
			(this._props = n),
			(this.state = n.state),
			(this.directPlugins = n.plugins || []),
			this.directPlugins.forEach(tu),
			(this.dispatch = this.dispatch.bind(this)),
			(this.dom = (e && e.mount) || document.createElement('div')),
			e &&
				(e.appendChild
					? e.appendChild(this.dom)
					: typeof e == 'function'
						? e(this.dom)
						: e.mount && (this.mounted = !0)),
			(this.editable = Zc(this)),
			Yc(this),
			(this.nodeViews = eu(this)),
			(this.docView = Ic(this.state.doc, Qc(this), Hi(this), this.dom, this)),
			(this.domObserver = new jy(this, (r, s, o, i) => Yy(this, r, s, o, i))),
			this.domObserver.start(),
			by(this),
			this.updatePluginViews());
	}
	get composing() {
		return this.input.composing;
	}
	get props() {
		if (this._props.state != this.state) {
			let e = this._props;
			this._props = {};
			for (let n in e) this._props[n] = e[n];
			this._props.state = this.state;
		}
		return this._props;
	}
	update(e) {
		e.handleDOMEvents != this._props.handleDOMEvents && kl(this);
		let n = this._props;
		((this._props = e),
			e.plugins && (e.plugins.forEach(tu), (this.directPlugins = e.plugins)),
			this.updateStateInner(e.state, n));
	}
	setProps(e) {
		let n = {};
		for (let r in this._props) n[r] = this._props[r];
		n.state = this.state;
		for (let r in e) n[r] = e[r];
		this.update(n);
	}
	updateState(e) {
		this.updateStateInner(e, this._props);
	}
	updateStateInner(e, n) {
		var r;
		let s = this.state,
			o = !1,
			i = !1;
		(e.storedMarks && this.composing && (Kf(this), (i = !0)), (this.state = e));
		let l = s.plugins != e.plugins || this._props.plugins != n.plugins;
		if (l || this._props.plugins != n.plugins || this._props.nodeViews != n.nodeViews) {
			let h = eu(this);
			r1(h, this.nodeViews) && ((this.nodeViews = h), (o = !0));
		}
		((l || n.handleDOMEvents != this._props.handleDOMEvents) && kl(this),
			(this.editable = Zc(this)),
			Yc(this));
		let a = Hi(this),
			c = Qc(this),
			u =
				s.plugins != e.plugins && !s.doc.eq(e.doc)
					? 'reset'
					: e.scrollToSelection > s.scrollToSelection
						? 'to selection'
						: 'preserve',
			d = o || !this.docView.matchesNode(e.doc, c, a);
		(d || !e.selection.eq(s.selection)) && (i = !0);
		let f = u == 'preserve' && i && this.dom.style.overflowAnchor == null && D0(this);
		if (i) {
			this.domObserver.stop();
			let h =
				d &&
				(Ft || Ct) &&
				!this.composing &&
				!s.selection.empty &&
				!e.selection.empty &&
				n1(s.selection, e.selection);
			if (d) {
				let p = Ct ? (this.trackWrites = this.domSelectionRange().focusNode) : null;
				(this.composing && (this.input.compositionNode = Dy(this)),
					(o || !this.docView.update(e.doc, c, a, this)) &&
						(this.docView.updateOuterDeco(c),
						this.docView.destroy(),
						(this.docView = Ic(e.doc, c, a, this.dom, this))),
					p && (!this.trackWrites || !this.dom.contains(this.trackWrites)) && (h = !0));
			}
			(h ||
			!(
				this.input.mouseDown &&
				this.domObserver.currentSelection.eq(this.domSelectionRange()) &&
				ny(this)
			)
				? Dn(this, h)
				: (Pf(this, e.selection), this.domObserver.setCurSelection()),
				this.domObserver.start());
		}
		(this.updatePluginViews(s),
			!((r = this.dragging) === null || r === void 0) &&
				r.node &&
				!s.doc.eq(e.doc) &&
				this.updateDraggedNode(this.dragging, s),
			u == 'reset'
				? (this.dom.scrollTop = 0)
				: u == 'to selection'
					? this.scrollToSelection()
					: f && R0(f));
	}
	scrollToSelection() {
		let e = this.domSelectionRange().focusNode;
		if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode))) {
			if (!this.someProp('handleScrollToSelection', (n) => n(this)))
				if (this.state.selection instanceof fe) {
					let n = this.docView.domAfterPos(this.state.selection.from);
					n.nodeType == 1 && Tc(this, n.getBoundingClientRect(), e);
				} else Tc(this, this.coordsAtPos(this.state.selection.head, 1), e);
		}
	}
	destroyPluginViews() {
		let e;
		for (; (e = this.pluginViews.pop()); ) e.destroy && e.destroy();
	}
	updatePluginViews(e) {
		if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
			((this.prevDirectPlugins = this.directPlugins), this.destroyPluginViews());
			for (let n = 0; n < this.directPlugins.length; n++) {
				let r = this.directPlugins[n];
				r.spec.view && this.pluginViews.push(r.spec.view(this));
			}
			for (let n = 0; n < this.state.plugins.length; n++) {
				let r = this.state.plugins[n];
				r.spec.view && this.pluginViews.push(r.spec.view(this));
			}
		} else
			for (let n = 0; n < this.pluginViews.length; n++) {
				let r = this.pluginViews[n];
				r.update && r.update(this, e);
			}
	}
	updateDraggedNode(e, n) {
		let r = e.node,
			s = -1;
		if (this.state.doc.nodeAt(r.from) == r.node) s = r.from;
		else {
			let o = r.from + (this.state.doc.content.size - n.doc.content.size);
			(o > 0 && this.state.doc.nodeAt(o)) == r.node && (s = o);
		}
		this.dragging = new Gf(e.slice, e.move, s < 0 ? void 0 : fe.create(this.state.doc, s));
	}
	someProp(e, n) {
		let r = this._props && this._props[e],
			s;
		if (r != null && (s = n ? n(r) : r)) return s;
		for (let i = 0; i < this.directPlugins.length; i++) {
			let l = this.directPlugins[i].props[e];
			if (l != null && (s = n ? n(l) : l)) return s;
		}
		let o = this.state.plugins;
		if (o)
			for (let i = 0; i < o.length; i++) {
				let l = o[i].props[e];
				if (l != null && (s = n ? n(l) : l)) return s;
			}
	}
	hasFocus() {
		if (Ft) {
			let e = this.root.activeElement;
			if (e == this.dom) return !0;
			if (!e || !this.dom.contains(e)) return !1;
			for (; e && this.dom != e && this.dom.contains(e); ) {
				if (e.contentEditable == 'false') return !1;
				e = e.parentElement;
			}
			return !0;
		}
		return this.root.activeElement == this.dom;
	}
	focus() {
		(this.domObserver.stop(), this.editable && L0(this.dom), Dn(this), this.domObserver.start());
	}
	get root() {
		let e = this._root;
		if (e == null) {
			for (let n = this.dom.parentNode; n; n = n.parentNode)
				if (n.nodeType == 9 || (n.nodeType == 11 && n.host))
					return (
						n.getSelection ||
							(Object.getPrototypeOf(n).getSelection = () => n.ownerDocument.getSelection()),
						(this._root = n)
					);
		}
		return e || document;
	}
	updateRoot() {
		this._root = null;
	}
	posAtCoords(e) {
		return _0(this, e);
	}
	coordsAtPos(e, n = 1) {
		return Ef(this, e, n);
	}
	domAtPos(e, n = 0) {
		return this.docView.domFromPos(e, n);
	}
	nodeDOM(e) {
		let n = this.docView.descAt(e);
		return n ? n.nodeDOM : null;
	}
	posAtDOM(e, n, r = -1) {
		let s = this.docView.posFromDOM(e, n, r);
		if (s == null) throw new RangeError('DOM position not inside the editor');
		return s;
	}
	endOfTextblock(e, n) {
		return j0(this, n || this.state, e);
	}
	pasteHTML(e, n) {
		return Ms(this, '', e, !1, n || new ClipboardEvent('paste'));
	}
	pasteText(e, n) {
		return Ms(this, e, null, !0, n || new ClipboardEvent('paste'));
	}
	serializeForClipboard(e) {
		return ia(this, e);
	}
	destroy() {
		this.docView &&
			(vy(this),
			this.destroyPluginViews(),
			this.mounted
				? (this.docView.update(this.state.doc, [], Hi(this), this), (this.dom.textContent = ''))
				: this.dom.parentNode && this.dom.parentNode.removeChild(this.dom),
			this.docView.destroy(),
			(this.docView = null),
			w0());
	}
	get isDestroyed() {
		return this.docView == null;
	}
	dispatchEvent(e) {
		return xy(this, e);
	}
	domSelectionRange() {
		let e = this.domSelection();
		return e
			? (Nt &&
					this.root.nodeType === 11 &&
					E0(this.dom.ownerDocument) == this.dom &&
					qy(this, e)) ||
					e
			: { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
	}
	domSelection() {
		return this.root.getSelection();
	}
}
eh.prototype.dispatch = function (t) {
	let e = this._props.dispatchTransaction;
	e ? e.call(this, t) : this.updateState(this.state.apply(t));
};
function Qc(t) {
	let e = Object.create(null);
	return (
		(e.class = 'ProseMirror'),
		(e.contenteditable = String(t.editable)),
		t.someProp('attributes', (n) => {
			if ((typeof n == 'function' && (n = n(t.state)), n))
				for (let r in n)
					r == 'class'
						? (e.class += ' ' + n[r])
						: r == 'style'
							? (e.style = (e.style ? e.style + ';' : '') + n[r])
							: !e[r] && r != 'contenteditable' && r != 'nodeName' && (e[r] = String(n[r]));
		}),
		e.translate || (e.translate = 'no'),
		[tt.node(0, t.state.doc.content.size, e)]
	);
}
function Yc(t) {
	if (t.markCursor) {
		let e = document.createElement('img');
		((e.className = 'ProseMirror-separator'),
			e.setAttribute('mark-placeholder', 'true'),
			e.setAttribute('alt', ''),
			(t.cursorWrapper = {
				dom: e,
				deco: tt.widget(t.state.selection.from, e, { raw: !0, marks: t.markCursor })
			}));
	} else t.cursorWrapper = null;
}
function Zc(t) {
	return !t.someProp('editable', (e) => e(t.state) === !1);
}
function n1(t, e) {
	let n = Math.min(t.$anchor.sharedDepth(t.head), e.$anchor.sharedDepth(e.head));
	return t.$anchor.start(n) != e.$anchor.start(n);
}
function eu(t) {
	let e = Object.create(null);
	function n(r) {
		for (let s in r) Object.prototype.hasOwnProperty.call(e, s) || (e[s] = r[s]);
	}
	return (t.someProp('nodeViews', n), t.someProp('markViews', n), e);
}
function r1(t, e) {
	let n = 0,
		r = 0;
	for (let s in t) {
		if (t[s] != e[s]) return !0;
		n++;
	}
	for (let s in e) r++;
	return n != r;
}
function tu(t) {
	if (t.spec.state || t.spec.filterTransaction || t.spec.appendTransaction)
		throw new RangeError('Plugins passed directly to the view must not have a state component');
}
const fa = (t, e) =>
	t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function th(t, e) {
	let { $cursor: n } = t.selection;
	return !n || (e ? !e.endOfTextblock('backward', t) : n.parentOffset > 0) ? null : n;
}
const nh = (t, e, n) => {
		let r = th(t, n);
		if (!r) return !1;
		let s = ha(r);
		if (!s) {
			let i = r.blockRange(),
				l = i && Ur(i);
			return l == null ? !1 : (e && e(t.tr.lift(i, l).scrollIntoView()), !0);
		}
		let o = s.nodeBefore;
		if (dh(t, s, e, -1)) return !0;
		if (r.parent.content.size == 0 && (Fr(o, 'end') || fe.isSelectable(o)))
			for (let i = r.depth; ; i--) {
				let l = ii(t.doc, r.before(i), r.after(i), X.empty);
				if (l && l.slice.size < l.to - l.from) {
					if (e) {
						let a = t.tr.step(l);
						(a.setSelection(
							Fr(o, 'end')
								? ve.findFrom(a.doc.resolve(a.mapping.map(s.pos, -1)), -1)
								: fe.create(a.doc, s.pos - o.nodeSize)
						),
							e(a.scrollIntoView()));
					}
					return !0;
				}
				if (i == 1 || r.node(i - 1).childCount > 1) break;
			}
		return o.isAtom && s.depth == r.depth - 1
			? (e && e(t.tr.delete(s.pos - o.nodeSize, s.pos).scrollIntoView()), !0)
			: !1;
	},
	s1 = (t, e, n) => {
		let r = th(t, n);
		if (!r) return !1;
		let s = ha(r);
		return s ? rh(t, s, e) : !1;
	},
	o1 = (t, e, n) => {
		let r = oh(t, n);
		if (!r) return !1;
		let s = pa(r);
		return s ? rh(t, s, e) : !1;
	};
function rh(t, e, n) {
	let r = e.nodeBefore,
		s = r,
		o = e.pos - 1;
	for (; !s.isTextblock; o--) {
		if (s.type.spec.isolating) return !1;
		let u = s.lastChild;
		if (!u) return !1;
		s = u;
	}
	let i = e.nodeAfter,
		l = i,
		a = e.pos + 1;
	for (; !l.isTextblock; a++) {
		if (l.type.spec.isolating) return !1;
		let u = l.firstChild;
		if (!u) return !1;
		l = u;
	}
	let c = ii(t.doc, o, a, X.empty);
	if (!c || c.from != o || (c instanceof gt && c.slice.size >= a - o)) return !1;
	if (n) {
		let u = t.tr.step(c);
		(u.setSelection(pe.create(u.doc, o)), n(u.scrollIntoView()));
	}
	return !0;
}
function Fr(t, e, n = !1) {
	for (let r = t; r; r = e == 'start' ? r.firstChild : r.lastChild) {
		if (r.isTextblock) return !0;
		if (n && r.childCount != 1) return !1;
	}
	return !1;
}
const sh = (t, e, n) => {
	let { $head: r, empty: s } = t.selection,
		o = r;
	if (!s) return !1;
	if (r.parent.isTextblock) {
		if (n ? !n.endOfTextblock('backward', t) : r.parentOffset > 0) return !1;
		o = ha(r);
	}
	let i = o && o.nodeBefore;
	return !i || !fe.isSelectable(i)
		? !1
		: (e && e(t.tr.setSelection(fe.create(t.doc, o.pos - i.nodeSize)).scrollIntoView()), !0);
};
function ha(t) {
	if (!t.parent.type.spec.isolating)
		for (let e = t.depth - 1; e >= 0; e--) {
			if (t.index(e) > 0) return t.doc.resolve(t.before(e + 1));
			if (t.node(e).type.spec.isolating) break;
		}
	return null;
}
function oh(t, e) {
	let { $cursor: n } = t.selection;
	return !n || (e ? !e.endOfTextblock('forward', t) : n.parentOffset < n.parent.content.size)
		? null
		: n;
}
const ih = (t, e, n) => {
		let r = oh(t, n);
		if (!r) return !1;
		let s = pa(r);
		if (!s) return !1;
		let o = s.nodeAfter;
		if (dh(t, s, e, 1)) return !0;
		if (r.parent.content.size == 0 && (Fr(o, 'start') || fe.isSelectable(o))) {
			let i = ii(t.doc, r.before(), r.after(), X.empty);
			if (i && i.slice.size < i.to - i.from) {
				if (e) {
					let l = t.tr.step(i);
					(l.setSelection(
						Fr(o, 'start')
							? ve.findFrom(l.doc.resolve(l.mapping.map(s.pos)), 1)
							: fe.create(l.doc, l.mapping.map(s.pos))
					),
						e(l.scrollIntoView()));
				}
				return !0;
			}
		}
		return o.isAtom && s.depth == r.depth - 1
			? (e && e(t.tr.delete(s.pos, s.pos + o.nodeSize).scrollIntoView()), !0)
			: !1;
	},
	lh = (t, e, n) => {
		let { $head: r, empty: s } = t.selection,
			o = r;
		if (!s) return !1;
		if (r.parent.isTextblock) {
			if (n ? !n.endOfTextblock('forward', t) : r.parentOffset < r.parent.content.size) return !1;
			o = pa(r);
		}
		let i = o && o.nodeAfter;
		return !i || !fe.isSelectable(i)
			? !1
			: (e && e(t.tr.setSelection(fe.create(t.doc, o.pos)).scrollIntoView()), !0);
	};
function pa(t) {
	if (!t.parent.type.spec.isolating)
		for (let e = t.depth - 1; e >= 0; e--) {
			let n = t.node(e);
			if (t.index(e) + 1 < n.childCount) return t.doc.resolve(t.after(e + 1));
			if (n.type.spec.isolating) break;
		}
	return null;
}
const i1 = (t, e) => {
		let n = t.selection,
			r = n instanceof fe,
			s;
		if (r) {
			if (n.node.isTextblock || !er(t.doc, n.from)) return !1;
			s = n.from;
		} else if (((s = oi(t.doc, n.from, -1)), s == null)) return !1;
		if (e) {
			let o = t.tr.join(s);
			(r && o.setSelection(fe.create(o.doc, s - t.doc.resolve(s).nodeBefore.nodeSize)),
				e(o.scrollIntoView()));
		}
		return !0;
	},
	l1 = (t, e) => {
		let n = t.selection,
			r;
		if (n instanceof fe) {
			if (n.node.isTextblock || !er(t.doc, n.to)) return !1;
			r = n.to;
		} else if (((r = oi(t.doc, n.to, 1)), r == null)) return !1;
		return (e && e(t.tr.join(r).scrollIntoView()), !0);
	},
	a1 = (t, e) => {
		let { $from: n, $to: r } = t.selection,
			s = n.blockRange(r),
			o = s && Ur(s);
		return o == null ? !1 : (e && e(t.tr.lift(s, o).scrollIntoView()), !0);
	},
	ah = (t, e) => {
		let { $head: n, $anchor: r } = t.selection;
		return !n.parent.type.spec.code || !n.sameParent(r)
			? !1
			: (e &&
					e(
						t.tr
							.insertText(
								`
`
							)
							.scrollIntoView()
					),
				!0);
	};
function ma(t) {
	for (let e = 0; e < t.edgeCount; e++) {
		let { type: n } = t.edge(e);
		if (n.isTextblock && !n.hasRequiredAttrs()) return n;
	}
	return null;
}
const c1 = (t, e) => {
		let { $head: n, $anchor: r } = t.selection;
		if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
		let s = n.node(-1),
			o = n.indexAfter(-1),
			i = ma(s.contentMatchAt(o));
		if (!i || !s.canReplaceWith(o, o, i)) return !1;
		if (e) {
			let l = n.after(),
				a = t.tr.replaceWith(l, l, i.createAndFill());
			(a.setSelection(ve.near(a.doc.resolve(l), 1)), e(a.scrollIntoView()));
		}
		return !0;
	},
	ch = (t, e) => {
		let n = t.selection,
			{ $from: r, $to: s } = n;
		if (n instanceof Ut || r.parent.inlineContent || s.parent.inlineContent) return !1;
		let o = ma(s.parent.contentMatchAt(s.indexAfter()));
		if (!o || !o.isTextblock) return !1;
		if (e) {
			let i = (!r.parentOffset && s.index() < s.parent.childCount ? r : s).pos,
				l = t.tr.insert(i, o.createAndFill());
			(l.setSelection(pe.create(l.doc, i + 1)), e(l.scrollIntoView()));
		}
		return !0;
	},
	uh = (t, e) => {
		let { $cursor: n } = t.selection;
		if (!n || n.parent.content.size) return !1;
		if (n.depth > 1 && n.after() != n.end(-1)) {
			let o = n.before();
			if (In(t.doc, o)) return (e && e(t.tr.split(o).scrollIntoView()), !0);
		}
		let r = n.blockRange(),
			s = r && Ur(r);
		return s == null ? !1 : (e && e(t.tr.lift(r, s).scrollIntoView()), !0);
	};
function u1(t) {
	return (e, n) => {
		let { $from: r, $to: s } = e.selection;
		if (e.selection instanceof fe && e.selection.node.isBlock)
			return !r.parentOffset || !In(e.doc, r.pos)
				? !1
				: (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
		if (!r.depth) return !1;
		let o = [],
			i,
			l,
			a = !1,
			c = !1;
		for (let h = r.depth; ; h--)
			if (r.node(h).isBlock) {
				((a = r.end(h) == r.pos + (r.depth - h)),
					(c = r.start(h) == r.pos - (r.depth - h)),
					(l = ma(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1)))),
					o.unshift(a && l ? { type: l } : null),
					(i = h));
				break;
			} else {
				if (h == 1) return !1;
				o.unshift(null);
			}
		let u = e.tr;
		(e.selection instanceof pe || e.selection instanceof Ut) && u.deleteSelection();
		let d = u.mapping.map(r.pos),
			f = In(u.doc, d, o.length, o);
		if ((f || ((o[0] = l ? { type: l } : null), (f = In(u.doc, d, o.length, o))), !f)) return !1;
		if ((u.split(d, o.length, o), !a && c && r.node(i).type != l)) {
			let h = u.mapping.map(r.before(i)),
				p = u.doc.resolve(h);
			l &&
				r.node(i - 1).canReplaceWith(p.index(), p.index() + 1, l) &&
				u.setNodeMarkup(u.mapping.map(r.before(i)), l);
		}
		return (n && n(u.scrollIntoView()), !0);
	};
}
const d1 = u1(),
	f1 = (t, e) => {
		let { $from: n, to: r } = t.selection,
			s,
			o = n.sharedDepth(r);
		return o == 0 ? !1 : ((s = n.before(o)), e && e(t.tr.setSelection(fe.create(t.doc, s))), !0);
	};
function h1(t, e, n) {
	let r = e.nodeBefore,
		s = e.nodeAfter,
		o = e.index();
	return !r || !s || !r.type.compatibleContent(s.type)
		? !1
		: !r.content.size && e.parent.canReplace(o - 1, o)
			? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0)
			: !e.parent.canReplace(o, o + 1) || !(s.isTextblock || er(t.doc, e.pos))
				? !1
				: (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function dh(t, e, n, r) {
	let s = e.nodeBefore,
		o = e.nodeAfter,
		i,
		l,
		a = s.type.spec.isolating || o.type.spec.isolating;
	if (!a && h1(t, e, n)) return !0;
	let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
	if (
		c &&
		(i = (l = s.contentMatchAt(s.childCount)).findWrapping(o.type)) &&
		l.matchType(i[0] || o.type).validEnd
	) {
		if (n) {
			let h = e.pos + o.nodeSize,
				p = z.empty;
			for (let b = i.length - 1; b >= 0; b--) p = z.from(i[b].create(null, p));
			p = z.from(s.copy(p));
			let m = t.tr.step(new bt(e.pos - 1, h, e.pos, h, new X(p, 1, 0), i.length, !0)),
				g = m.doc.resolve(h + 2 * i.length);
			(g.nodeAfter && g.nodeAfter.type == s.type && er(m.doc, g.pos) && m.join(g.pos),
				n(m.scrollIntoView()));
		}
		return !0;
	}
	let u = o.type.spec.isolating || (r > 0 && a) ? null : ve.findFrom(e, 1),
		d = u && u.$from.blockRange(u.$to),
		f = d && Ur(d);
	if (f != null && f >= e.depth) return (n && n(t.tr.lift(d, f).scrollIntoView()), !0);
	if (c && Fr(o, 'start', !0) && Fr(s, 'end')) {
		let h = s,
			p = [];
		for (; p.push(h), !h.isTextblock; ) h = h.lastChild;
		let m = o,
			g = 1;
		for (; !m.isTextblock; m = m.firstChild) g++;
		if (h.canReplace(h.childCount, h.childCount, m.content)) {
			if (n) {
				let b = z.empty;
				for (let O = p.length - 1; O >= 0; O--) b = z.from(p[O].copy(b));
				let S = t.tr.step(
					new bt(
						e.pos - p.length,
						e.pos + o.nodeSize,
						e.pos + g,
						e.pos + o.nodeSize - g,
						new X(b, p.length, 0),
						0,
						!0
					)
				);
				n(S.scrollIntoView());
			}
			return !0;
		}
	}
	return !1;
}
function fh(t) {
	return function (e, n) {
		let r = e.selection,
			s = t < 0 ? r.$from : r.$to,
			o = s.depth;
		for (; s.node(o).isInline; ) {
			if (!o) return !1;
			o--;
		}
		return s.node(o).isTextblock
			? (n && n(e.tr.setSelection(pe.create(e.doc, t < 0 ? s.start(o) : s.end(o)))), !0)
			: !1;
	};
}
const p1 = fh(-1),
	m1 = fh(1);
function g1(t, e = null) {
	return function (n, r) {
		let { $from: s, $to: o } = n.selection,
			i = s.blockRange(o),
			l = i && ea(i, t, e);
		return l ? (r && r(n.tr.wrap(i, l).scrollIntoView()), !0) : !1;
	};
}
function nu(t, e = null) {
	return function (n, r) {
		let s = !1;
		for (let o = 0; o < n.selection.ranges.length && !s; o++) {
			let {
				$from: { pos: i },
				$to: { pos: l }
			} = n.selection.ranges[o];
			n.doc.nodesBetween(i, l, (a, c) => {
				if (s) return !1;
				if (!(!a.isTextblock || a.hasMarkup(t, e)))
					if (a.type == t) s = !0;
					else {
						let u = n.doc.resolve(c),
							d = u.index();
						s = u.parent.canReplaceWith(d, d + 1, t);
					}
			});
		}
		if (!s) return !1;
		if (r) {
			let o = n.tr;
			for (let i = 0; i < n.selection.ranges.length; i++) {
				let {
					$from: { pos: l },
					$to: { pos: a }
				} = n.selection.ranges[i];
				o.setBlockType(l, a, t, e);
			}
			r(o.scrollIntoView());
		}
		return !0;
	};
}
function ga(...t) {
	return function (e, n, r) {
		for (let s = 0; s < t.length; s++) if (t[s](e, n, r)) return !0;
		return !1;
	};
}
ga(fa, nh, sh);
ga(fa, ih, lh);
ga(ah, ch, uh, d1);
typeof navigator < 'u'
	? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
	: typeof os < 'u' && os.platform && os.platform() == 'darwin';
function y1(t, e = null) {
	return function (n, r) {
		let { $from: s, $to: o } = n.selection,
			i = s.blockRange(o);
		if (!i) return !1;
		let l = r ? n.tr : null;
		return b1(l, i, t, e) ? (r && r(l.scrollIntoView()), !0) : !1;
	};
}
function b1(t, e, n, r = null) {
	let s = !1,
		o = e,
		i = e.$from.doc;
	if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
		if (e.$from.index(e.depth - 1) == 0) return !1;
		let a = i.resolve(e.start - 2);
		((o = new ko(a, a, e.depth)),
			e.endIndex < e.parent.childCount &&
				(e = new ko(e.$from, i.resolve(e.$to.end(e.depth)), e.depth)),
			(s = !0));
	}
	let l = ea(o, n, r, e);
	return l ? (t && v1(t, e, l, s, n), !0) : !1;
}
function v1(t, e, n, r, s) {
	let o = z.empty;
	for (let u = n.length - 1; u >= 0; u--) o = z.from(n[u].type.create(n[u].attrs, o));
	t.step(new bt(e.start - (r ? 2 : 0), e.end, e.start, e.end, new X(o, 0, 0), n.length, !0));
	let i = 0;
	for (let u = 0; u < n.length; u++) n[u].type == s && (i = u + 1);
	let l = n.length - i,
		a = e.start + n.length - (r ? 2 : 0),
		c = e.parent;
	for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1)
		(!f && In(t.doc, a, l) && (t.split(a, l), (a += 2 * l)), (a += c.child(u).nodeSize));
	return t;
}
function k1(t) {
	return function (e, n) {
		let { $from: r, $to: s } = e.selection,
			o = r.blockRange(s, (i) => i.childCount > 0 && i.firstChild.type == t);
		return o ? (n ? (r.node(o.depth - 1).type == t ? x1(e, n, t, o) : w1(e, n, o)) : !0) : !1;
	};
}
function x1(t, e, n, r) {
	let s = t.tr,
		o = r.end,
		i = r.$to.end(r.depth);
	o < i &&
		(s.step(new bt(o - 1, i, o, i, new X(z.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)),
		(r = new ko(s.doc.resolve(r.$from.pos), s.doc.resolve(i), r.depth)));
	const l = Ur(r);
	if (l == null) return !1;
	s.lift(r, l);
	let a = s.doc.resolve(s.mapping.map(o, -1) - 1);
	return (
		er(s.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && s.join(a.pos),
		e(s.scrollIntoView()),
		!0
	);
}
function w1(t, e, n) {
	let r = t.tr,
		s = n.parent;
	for (let h = n.end, p = n.endIndex - 1, m = n.startIndex; p > m; p--)
		((h -= s.child(p).nodeSize), r.delete(h - 1, h + 1));
	let o = r.doc.resolve(n.start),
		i = o.nodeAfter;
	if (r.mapping.map(n.end) != n.start + o.nodeAfter.nodeSize) return !1;
	let l = n.startIndex == 0,
		a = n.endIndex == s.childCount,
		c = o.node(-1),
		u = o.index(-1);
	if (!c.canReplace(u + (l ? 0 : 1), u + 1, i.content.append(a ? z.empty : z.from(s)))) return !1;
	let d = o.pos,
		f = d + i.nodeSize;
	return (
		r.step(
			new bt(
				d - (l ? 1 : 0),
				f + (a ? 1 : 0),
				d + 1,
				f - 1,
				new X(
					(l ? z.empty : z.from(s.copy(z.empty))).append(a ? z.empty : z.from(s.copy(z.empty))),
					l ? 0 : 1,
					a ? 0 : 1
				),
				l ? 0 : 1
			)
		),
		e(r.scrollIntoView()),
		!0
	);
}
function S1(t) {
	return function (e, n) {
		let { $from: r, $to: s } = e.selection,
			o = r.blockRange(s, (c) => c.childCount > 0 && c.firstChild.type == t);
		if (!o) return !1;
		let i = o.startIndex;
		if (i == 0) return !1;
		let l = o.parent,
			a = l.child(i - 1);
		if (a.type != t) return !1;
		if (n) {
			let c = a.lastChild && a.lastChild.type == l.type,
				u = z.from(c ? t.create() : null),
				d = new X(z.from(t.create(null, z.from(l.type.create(null, u)))), c ? 3 : 1, 0),
				f = o.start,
				h = o.end;
			n(e.tr.step(new bt(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView());
		}
		return !0;
	};
}
const C1 = typeof navigator < 'u' && /Mac|iP(hone|[oa]d)/.test(navigator.platform),
	T1 = typeof navigator < 'u' && /Win/.test(navigator.platform);
function M1(t) {
	let e = t.split(/-(?!$)/),
		n = e[e.length - 1];
	n == 'Space' && (n = ' ');
	let r, s, o, i;
	for (let l = 0; l < e.length - 1; l++) {
		let a = e[l];
		if (/^(cmd|meta|m)$/i.test(a)) i = !0;
		else if (/^a(lt)?$/i.test(a)) r = !0;
		else if (/^(c|ctrl|control)$/i.test(a)) s = !0;
		else if (/^s(hift)?$/i.test(a)) o = !0;
		else if (/^mod$/i.test(a)) C1 ? (i = !0) : (s = !0);
		else throw new Error('Unrecognized modifier name: ' + a);
	}
	return (
		r && (n = 'Alt-' + n),
		s && (n = 'Ctrl-' + n),
		i && (n = 'Meta-' + n),
		o && (n = 'Shift-' + n),
		n
	);
}
function E1(t) {
	let e = Object.create(null);
	for (let n in t) e[M1(n)] = t[n];
	return e;
}
function Vi(t, e, n = !0) {
	return (
		e.altKey && (t = 'Alt-' + t),
		e.ctrlKey && (t = 'Ctrl-' + t),
		e.metaKey && (t = 'Meta-' + t),
		n && e.shiftKey && (t = 'Shift-' + t),
		t
	);
}
function A1(t) {
	return new ze({ props: { handleKeyDown: ya(t) } });
}
function ya(t) {
	let e = E1(t);
	return function (n, r) {
		let s = Kp(r),
			o,
			i = e[Vi(s, r)];
		if (i && i(n.state, n.dispatch, n)) return !0;
		if (s.length == 1 && s != ' ') {
			if (r.shiftKey) {
				let l = e[Vi(s, r, !1)];
				if (l && l(n.state, n.dispatch, n)) return !0;
			}
			if (
				(r.altKey || r.metaKey || r.ctrlKey) &&
				!(T1 && r.ctrlKey && r.altKey) &&
				(o = Jp[r.keyCode]) &&
				o != s
			) {
				let l = e[Vi(o, r)];
				if (l && l(n.state, n.dispatch, n)) return !0;
			}
		}
		return !1;
	};
}
var N1 = Object.defineProperty,
	ba = (t, e) => {
		for (var n in e) N1(t, n, { get: e[n], enumerable: !0 });
	};
function di(t) {
	const { state: e, transaction: n } = t;
	let { selection: r } = n,
		{ doc: s } = n,
		{ storedMarks: o } = n;
	return {
		...e,
		apply: e.apply.bind(e),
		applyTransaction: e.applyTransaction.bind(e),
		plugins: e.plugins,
		schema: e.schema,
		reconfigure: e.reconfigure.bind(e),
		toJSON: e.toJSON.bind(e),
		get storedMarks() {
			return o;
		},
		get selection() {
			return r;
		},
		get doc() {
			return s;
		},
		get tr() {
			return ((r = n.selection), (s = n.doc), (o = n.storedMarks), n);
		}
	};
}
var fi = class {
		constructor(t) {
			((this.editor = t.editor),
				(this.rawCommands = this.editor.extensionManager.commands),
				(this.customState = t.state));
		}
		get hasCustomState() {
			return !!this.customState;
		}
		get state() {
			return this.customState || this.editor.state;
		}
		get commands() {
			const { rawCommands: t, editor: e, state: n } = this,
				{ view: r } = e,
				{ tr: s } = n,
				o = this.buildProps(s);
			return Object.fromEntries(
				Object.entries(t).map(([i, l]) => [
					i,
					(...c) => {
						const u = l(...c)(o);
						return (!s.getMeta('preventDispatch') && !this.hasCustomState && r.dispatch(s), u);
					}
				])
			);
		}
		get chain() {
			return () => this.createChain();
		}
		get can() {
			return () => this.createCan();
		}
		createChain(t, e = !0) {
			const { rawCommands: n, editor: r, state: s } = this,
				{ view: o } = r,
				i = [],
				l = !!t,
				a = t || s.tr,
				c = () => (
					!l && e && !a.getMeta('preventDispatch') && !this.hasCustomState && o.dispatch(a),
					i.every((d) => d === !0)
				),
				u = {
					...Object.fromEntries(
						Object.entries(n).map(([d, f]) => [
							d,
							(...p) => {
								const m = this.buildProps(a, e),
									g = f(...p)(m);
								return (i.push(g), u);
							}
						])
					),
					run: c
				};
			return u;
		}
		createCan(t) {
			const { rawCommands: e, state: n } = this,
				r = !1,
				s = t || n.tr,
				o = this.buildProps(s, r);
			return {
				...Object.fromEntries(
					Object.entries(e).map(([l, a]) => [l, (...c) => a(...c)({ ...o, dispatch: void 0 })])
				),
				chain: () => this.createChain(s, r)
			};
		}
		buildProps(t, e = !0) {
			const { rawCommands: n, editor: r, state: s } = this,
				{ view: o } = r,
				i = {
					tr: t,
					editor: r,
					view: o,
					state: di({ state: s, transaction: t }),
					dispatch: e ? () => {} : void 0,
					chain: () => this.createChain(t, e),
					can: () => this.createCan(t),
					get commands() {
						return Object.fromEntries(Object.entries(n).map(([l, a]) => [l, (...c) => a(...c)(i)]));
					}
				};
			return i;
		}
	},
	hh = {};
ba(hh, {
	blur: () => O1,
	clearContent: () => I1,
	clearNodes: () => D1,
	command: () => R1,
	createParagraphNear: () => L1,
	cut: () => P1,
	deleteCurrentNode: () => z1,
	deleteNode: () => B1,
	deleteRange: () => $1,
	deleteSelection: () => _1,
	enter: () => H1,
	exitCode: () => F1,
	extendMarkRange: () => V1,
	first: () => W1,
	focus: () => U1,
	forEach: () => q1,
	insertContent: () => K1,
	insertContentAt: () => X1,
	joinBackward: () => Z1,
	joinDown: () => Y1,
	joinForward: () => eb,
	joinItemBackward: () => tb,
	joinItemForward: () => nb,
	joinTextblockBackward: () => rb,
	joinTextblockForward: () => sb,
	joinUp: () => Q1,
	keyboardShortcut: () => ib,
	lift: () => lb,
	liftEmptyBlock: () => ab,
	liftListItem: () => cb,
	newlineInCode: () => ub,
	resetAttributes: () => db,
	scrollIntoView: () => fb,
	selectAll: () => hb,
	selectNodeBackward: () => pb,
	selectNodeForward: () => mb,
	selectParentNode: () => gb,
	selectTextblockEnd: () => yb,
	selectTextblockStart: () => bb,
	setContent: () => vb,
	setMark: () => $b,
	setMeta: () => _b,
	setNode: () => Hb,
	setNodeSelection: () => Fb,
	setTextDirection: () => Vb,
	setTextSelection: () => Wb,
	sinkListItem: () => jb,
	splitBlock: () => Ub,
	splitListItem: () => qb,
	toggleList: () => Kb,
	toggleMark: () => Jb,
	toggleNode: () => Gb,
	toggleWrap: () => Xb,
	undoInputRule: () => Qb,
	unsetAllMarks: () => Yb,
	unsetMark: () => Zb,
	unsetTextDirection: () => ev,
	updateAttributes: () => tv,
	wrapIn: () => nv,
	wrapInList: () => rv
});
var O1 =
		() =>
		({ editor: t, view: e }) => (
			requestAnimationFrame(() => {
				var n;
				t.isDestroyed ||
					(e.dom.blur(),
					(n = window == null ? void 0 : window.getSelection()) == null || n.removeAllRanges());
			}),
			!0
		),
	I1 =
		(t = !0) =>
		({ commands: e }) =>
			e.setContent('', { emitUpdate: t }),
	D1 =
		() =>
		({ state: t, tr: e, dispatch: n }) => {
			const { selection: r } = e,
				{ ranges: s } = r;
			return (
				n &&
					s.forEach(({ $from: o, $to: i }) => {
						t.doc.nodesBetween(o.pos, i.pos, (l, a) => {
							if (l.type.isText) return;
							const { doc: c, mapping: u } = e,
								d = c.resolve(u.map(a)),
								f = c.resolve(u.map(a + l.nodeSize)),
								h = d.blockRange(f);
							if (!h) return;
							const p = Ur(h);
							if (l.type.isTextblock) {
								const { defaultType: m } = d.parent.contentMatchAt(d.index());
								e.setNodeMarkup(h.start, m);
							}
							(p || p === 0) && e.lift(h, p);
						});
					}),
				!0
			);
		},
	R1 = (t) => (e) => t(e),
	L1 =
		() =>
		({ state: t, dispatch: e }) =>
			ch(t, e),
	P1 =
		(t, e) =>
		({ editor: n, tr: r }) => {
			const { state: s } = n,
				o = s.doc.slice(t.from, t.to);
			r.deleteRange(t.from, t.to);
			const i = r.mapping.map(e);
			return (
				r.insert(i, o.content),
				r.setSelection(new pe(r.doc.resolve(Math.max(i - 1, 0)))),
				!0
			);
		},
	z1 =
		() =>
		({ tr: t, dispatch: e }) => {
			const { selection: n } = t,
				r = n.$anchor.node();
			if (r.content.size > 0) return !1;
			const s = t.selection.$anchor;
			for (let o = s.depth; o > 0; o -= 1)
				if (s.node(o).type === r.type) {
					if (e) {
						const l = s.before(o),
							a = s.after(o);
						t.delete(l, a).scrollIntoView();
					}
					return !0;
				}
			return !1;
		};
function ht(t, e) {
	if (typeof t == 'string') {
		if (!e.nodes[t])
			throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
		return e.nodes[t];
	}
	return t;
}
var B1 =
		(t) =>
		({ tr: e, state: n, dispatch: r }) => {
			const s = ht(t, n.schema),
				o = e.selection.$anchor;
			for (let i = o.depth; i > 0; i -= 1)
				if (o.node(i).type === s) {
					if (r) {
						const a = o.before(i),
							c = o.after(i);
						e.delete(a, c).scrollIntoView();
					}
					return !0;
				}
			return !1;
		},
	$1 =
		(t) =>
		({ tr: e, dispatch: n }) => {
			const { from: r, to: s } = t;
			return (n && e.delete(r, s), !0);
		},
	_1 =
		() =>
		({ state: t, dispatch: e }) =>
			fa(t, e),
	H1 =
		() =>
		({ commands: t }) =>
			t.keyboardShortcut('Enter'),
	F1 =
		() =>
		({ state: t, dispatch: e }) =>
			c1(t, e);
function va(t) {
	return Object.prototype.toString.call(t) === '[object RegExp]';
}
function Eo(t, e, n = { strict: !0 }) {
	const r = Object.keys(e);
	return r.length
		? r.every((s) => (n.strict ? e[s] === t[s] : va(e[s]) ? e[s].test(t[s]) : e[s] === t[s]))
		: !0;
}
function ph(t, e, n = {}) {
	return t.find(
		(r) => r.type === e && Eo(Object.fromEntries(Object.keys(n).map((s) => [s, r.attrs[s]])), n)
	);
}
function ru(t, e, n = {}) {
	return !!ph(t, e, n);
}
function ka(t, e, n) {
	var r;
	if (!t || !e) return;
	let s = t.parent.childAfter(t.parentOffset);
	if (
		((!s.node || !s.node.marks.some((u) => u.type === e)) &&
			(s = t.parent.childBefore(t.parentOffset)),
		!s.node ||
			!s.node.marks.some((u) => u.type === e) ||
			((n = n || ((r = s.node.marks[0]) == null ? void 0 : r.attrs)), !ph([...s.node.marks], e, n)))
	)
		return;
	let i = s.index,
		l = t.start() + s.offset,
		a = i + 1,
		c = l + s.node.nodeSize;
	for (; i > 0 && ru([...t.parent.child(i - 1).marks], e, n); )
		((i -= 1), (l -= t.parent.child(i).nodeSize));
	for (; a < t.parent.childCount && ru([...t.parent.child(a).marks], e, n); )
		((c += t.parent.child(a).nodeSize), (a += 1));
	return { from: l, to: c };
}
function Ln(t, e) {
	if (typeof t == 'string') {
		if (!e.marks[t])
			throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
		return e.marks[t];
	}
	return t;
}
var V1 =
		(t, e = {}) =>
		({ tr: n, state: r, dispatch: s }) => {
			const o = Ln(t, r.schema),
				{ doc: i, selection: l } = n,
				{ $from: a, from: c, to: u } = l;
			if (s) {
				const d = ka(a, o, e);
				if (d && d.from <= c && d.to >= u) {
					const f = pe.create(i, d.from, d.to);
					n.setSelection(f);
				}
			}
			return !0;
		},
	W1 = (t) => (e) => {
		const n = typeof t == 'function' ? t(e) : t;
		for (let r = 0; r < n.length; r += 1) if (n[r](e)) return !0;
		return !1;
	};
function xa(t) {
	return t instanceof pe;
}
function Nn(t = 0, e = 0, n = 0) {
	return Math.min(Math.max(t, e), n);
}
function mh(t, e = null) {
	if (!e) return null;
	const n = ve.atStart(t),
		r = ve.atEnd(t);
	if (e === 'start' || e === !0) return n;
	if (e === 'end') return r;
	const s = n.from,
		o = r.to;
	return e === 'all'
		? pe.create(t, Nn(0, s, o), Nn(t.content.size, s, o))
		: pe.create(t, Nn(e, s, o), Nn(e, s, o));
}
function su() {
	return navigator.platform === 'Android' || /android/i.test(navigator.userAgent);
}
function Ao() {
	return (
		['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(
			navigator.platform
		) ||
		(navigator.userAgent.includes('Mac') && 'ontouchend' in document)
	);
}
function j1() {
	return typeof navigator < 'u' ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
var U1 =
		(t = null, e = {}) =>
		({ editor: n, view: r, tr: s, dispatch: o }) => {
			e = { scrollIntoView: !0, ...e };
			const i = () => {
				((Ao() || su()) && r.dom.focus(),
					j1() && !Ao() && !su() && r.dom.focus({ preventScroll: !0 }),
					requestAnimationFrame(() => {
						n.isDestroyed ||
							(r.focus(), e != null && e.scrollIntoView && n.commands.scrollIntoView());
					}));
			};
			try {
				if ((r.hasFocus() && t === null) || t === !1) return !0;
			} catch {
				return !1;
			}
			if (o && t === null && !xa(n.state.selection)) return (i(), !0);
			const l = mh(s.doc, t) || n.state.selection,
				a = n.state.selection.eq(l);
			return (
				o && (a || s.setSelection(l), a && s.storedMarks && s.setStoredMarks(s.storedMarks), i()),
				!0
			);
		},
	q1 = (t, e) => (n) => t.every((r, s) => e(r, { ...n, index: s })),
	K1 =
		(t, e) =>
		({ tr: n, commands: r }) =>
			r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e),
	gh = (t) => {
		const e = t.childNodes;
		for (let n = e.length - 1; n >= 0; n -= 1) {
			const r = e[n];
			r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue)
				? t.removeChild(r)
				: r.nodeType === 1 && gh(r);
		}
		return t;
	};
function Gs(t) {
	if (typeof window > 'u')
		throw new Error(
			'[tiptap error]: there is no window object available, so this function cannot be used'
		);
	const e = `<body>${t}</body>`,
		n = new window.DOMParser().parseFromString(e, 'text/html').body;
	return gh(n);
}
function As(t, e, n) {
	if (t instanceof Qt || t instanceof z) return t;
	n = { slice: !0, parseOptions: {}, ...n };
	const r = typeof t == 'object' && t !== null,
		s = typeof t == 'string';
	if (r)
		try {
			if (Array.isArray(t) && t.length > 0) return z.fromArray(t.map((l) => e.nodeFromJSON(l)));
			const i = e.nodeFromJSON(t);
			return (n.errorOnInvalidContent && i.check(), i);
		} catch (o) {
			if (n.errorOnInvalidContent)
				throw new Error('[tiptap error]: Invalid JSON content', { cause: o });
			return (
				console.warn('[tiptap warn]: Invalid content.', 'Passed value:', t, 'Error:', o),
				As('', e, n)
			);
		}
	if (s) {
		if (n.errorOnInvalidContent) {
			let i = !1,
				l = '';
			const a = new ef({
				topNode: e.spec.topNode,
				marks: e.spec.marks,
				nodes: e.spec.nodes.append({
					__tiptap__private__unknown__catch__all__node: {
						content: 'inline*',
						group: 'block',
						parseDOM: [
							{
								tag: '*',
								getAttrs: (c) => ((i = !0), (l = typeof c == 'string' ? c : c.outerHTML), null)
							}
						]
					}
				})
			});
			if (
				(n.slice
					? On.fromSchema(a).parseSlice(Gs(t), n.parseOptions)
					: On.fromSchema(a).parse(Gs(t), n.parseOptions),
				n.errorOnInvalidContent && i)
			)
				throw new Error('[tiptap error]: Invalid HTML content', {
					cause: new Error(`Invalid element found: ${l}`)
				});
		}
		const o = On.fromSchema(e);
		return n.slice ? o.parseSlice(Gs(t), n.parseOptions).content : o.parse(Gs(t), n.parseOptions);
	}
	return As('', e, n);
}
function J1(t, e, n) {
	const r = t.steps.length - 1;
	if (r < e) return;
	const s = t.steps[r];
	if (!(s instanceof gt || s instanceof bt)) return;
	const o = t.mapping.maps[r];
	let i = 0;
	(o.forEach((l, a, c, u) => {
		i === 0 && (i = u);
	}),
		t.setSelection(ve.near(t.doc.resolve(i), n)));
}
var G1 = (t) => !('type' in t),
	X1 =
		(t, e, n) =>
		({ tr: r, dispatch: s, editor: o }) => {
			var i;
			if (s) {
				n = {
					parseOptions: o.options.parseOptions,
					updateSelection: !0,
					applyInputRules: !1,
					applyPasteRules: !1,
					...n
				};
				let l;
				const a = (g) => {
						o.emit('contentError', {
							editor: o,
							error: g,
							disableCollaboration: () => {
								'collaboration' in o.storage &&
									typeof o.storage.collaboration == 'object' &&
									o.storage.collaboration &&
									(o.storage.collaboration.isDisabled = !0);
							}
						});
					},
					c = { preserveWhitespace: 'full', ...n.parseOptions };
				if (!n.errorOnInvalidContent && !o.options.enableContentCheck && o.options.emitContentError)
					try {
						As(e, o.schema, { parseOptions: c, errorOnInvalidContent: !0 });
					} catch (g) {
						a(g);
					}
				try {
					l = As(e, o.schema, {
						parseOptions: c,
						errorOnInvalidContent:
							(i = n.errorOnInvalidContent) != null ? i : o.options.enableContentCheck
					});
				} catch (g) {
					return (a(g), !1);
				}
				let { from: u, to: d } =
						typeof t == 'number' ? { from: t, to: t } : { from: t.from, to: t.to },
					f = !0,
					h = !0;
				if (
					((G1(l) ? l : [l]).forEach((g) => {
						(g.check(), (f = f ? g.isText && g.marks.length === 0 : !1), (h = h ? g.isBlock : !1));
					}),
					u === d && h)
				) {
					const { parent: g } = r.doc.resolve(u);
					g.isTextblock && !g.type.spec.code && !g.childCount && ((u -= 1), (d += 1));
				}
				let m;
				if (f) {
					if (Array.isArray(e)) m = e.map((g) => g.text || '').join('');
					else if (e instanceof z) {
						let g = '';
						(e.forEach((b) => {
							b.text && (g += b.text);
						}),
							(m = g));
					} else typeof e == 'object' && e && e.text ? (m = e.text) : (m = e);
					r.insertText(m, u, d);
				} else {
					m = l;
					const g = r.doc.resolve(u),
						b = g.node(),
						S = g.parentOffset === 0,
						O = b.isText || b.isTextblock,
						H = b.content.size > 0;
					(S && O && H && (u = Math.max(0, u - 1)), r.replaceWith(u, d, m));
				}
				(n.updateSelection && J1(r, r.steps.length - 1, -1),
					n.applyInputRules && r.setMeta('applyInputRules', { from: u, text: m }),
					n.applyPasteRules && r.setMeta('applyPasteRules', { from: u, text: m }));
			}
			return !0;
		},
	Q1 =
		() =>
		({ state: t, dispatch: e }) =>
			i1(t, e),
	Y1 =
		() =>
		({ state: t, dispatch: e }) =>
			l1(t, e),
	Z1 =
		() =>
		({ state: t, dispatch: e }) =>
			nh(t, e),
	eb =
		() =>
		({ state: t, dispatch: e }) =>
			ih(t, e),
	tb =
		() =>
		({ state: t, dispatch: e, tr: n }) => {
			try {
				const r = oi(t.doc, t.selection.$from.pos, -1);
				return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
			} catch {
				return !1;
			}
		},
	nb =
		() =>
		({ state: t, dispatch: e, tr: n }) => {
			try {
				const r = oi(t.doc, t.selection.$from.pos, 1);
				return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
			} catch {
				return !1;
			}
		},
	rb =
		() =>
		({ state: t, dispatch: e }) =>
			s1(t, e),
	sb =
		() =>
		({ state: t, dispatch: e }) =>
			o1(t, e);
function yh() {
	return typeof navigator < 'u' ? /Mac/.test(navigator.platform) : !1;
}
function ob(t) {
	const e = t.split(/-(?!$)/);
	let n = e[e.length - 1];
	n === 'Space' && (n = ' ');
	let r, s, o, i;
	for (let l = 0; l < e.length - 1; l += 1) {
		const a = e[l];
		if (/^(cmd|meta|m)$/i.test(a)) i = !0;
		else if (/^a(lt)?$/i.test(a)) r = !0;
		else if (/^(c|ctrl|control)$/i.test(a)) s = !0;
		else if (/^s(hift)?$/i.test(a)) o = !0;
		else if (/^mod$/i.test(a)) Ao() || yh() ? (i = !0) : (s = !0);
		else throw new Error(`Unrecognized modifier name: ${a}`);
	}
	return (
		r && (n = `Alt-${n}`),
		s && (n = `Ctrl-${n}`),
		i && (n = `Meta-${n}`),
		o && (n = `Shift-${n}`),
		n
	);
}
var ib =
	(t) =>
	({ editor: e, view: n, tr: r, dispatch: s }) => {
		const o = ob(t).split(/-(?!$)/),
			i = o.find((c) => !['Alt', 'Ctrl', 'Meta', 'Shift'].includes(c)),
			l = new KeyboardEvent('keydown', {
				key: i === 'Space' ? ' ' : i,
				altKey: o.includes('Alt'),
				ctrlKey: o.includes('Ctrl'),
				metaKey: o.includes('Meta'),
				shiftKey: o.includes('Shift'),
				bubbles: !0,
				cancelable: !0
			}),
			a = e.captureTransaction(() => {
				n.someProp('handleKeyDown', (c) => c(n, l));
			});
		return (
			a == null ||
				a.steps.forEach((c) => {
					const u = c.map(r.mapping);
					u && s && r.maybeStep(u);
				}),
			!0
		);
	};
function Qn(t, e, n = {}) {
	const { from: r, to: s, empty: o } = t.selection,
		i = e ? ht(e, t.schema) : null,
		l = [];
	t.doc.nodesBetween(r, s, (d, f) => {
		if (d.isText) return;
		const h = Math.max(r, f),
			p = Math.min(s, f + d.nodeSize);
		l.push({ node: d, from: h, to: p });
	});
	const a = s - r,
		c = l
			.filter((d) => (i ? i.name === d.node.type.name : !0))
			.filter((d) => Eo(d.node.attrs, n, { strict: !1 }));
	return o ? !!c.length : c.reduce((d, f) => d + f.to - f.from, 0) >= a;
}
var lb =
		(t, e = {}) =>
		({ state: n, dispatch: r }) => {
			const s = ht(t, n.schema);
			return Qn(n, s, e) ? a1(n, r) : !1;
		},
	ab =
		() =>
		({ state: t, dispatch: e }) =>
			uh(t, e),
	cb =
		(t) =>
		({ state: e, dispatch: n }) => {
			const r = ht(t, e.schema);
			return k1(r)(e, n);
		},
	ub =
		() =>
		({ state: t, dispatch: e }) =>
			ah(t, e);
function hi(t, e) {
	return e.nodes[t] ? 'node' : e.marks[t] ? 'mark' : null;
}
function ou(t, e) {
	const n = typeof e == 'string' ? [e] : e;
	return Object.keys(t).reduce((r, s) => (n.includes(s) || (r[s] = t[s]), r), {});
}
var db =
		(t, e) =>
		({ tr: n, state: r, dispatch: s }) => {
			let o = null,
				i = null;
			const l = hi(typeof t == 'string' ? t : t.name, r.schema);
			if (!l) return !1;
			(l === 'node' && (o = ht(t, r.schema)), l === 'mark' && (i = Ln(t, r.schema)));
			let a = !1;
			return (
				n.selection.ranges.forEach((c) => {
					r.doc.nodesBetween(c.$from.pos, c.$to.pos, (u, d) => {
						(o && o === u.type && ((a = !0), s && n.setNodeMarkup(d, void 0, ou(u.attrs, e))),
							i &&
								u.marks.length &&
								u.marks.forEach((f) => {
									i === f.type &&
										((a = !0), s && n.addMark(d, d + u.nodeSize, i.create(ou(f.attrs, e))));
								}));
					});
				}),
				a
			);
		},
	fb =
		() =>
		({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0),
	hb =
		() =>
		({ tr: t, dispatch: e }) => {
			if (e) {
				const n = new Ut(t.doc);
				t.setSelection(n);
			}
			return !0;
		},
	pb =
		() =>
		({ state: t, dispatch: e }) =>
			sh(t, e),
	mb =
		() =>
		({ state: t, dispatch: e }) =>
			lh(t, e),
	gb =
		() =>
		({ state: t, dispatch: e }) =>
			f1(t, e),
	yb =
		() =>
		({ state: t, dispatch: e }) =>
			m1(t, e),
	bb =
		() =>
		({ state: t, dispatch: e }) =>
			p1(t, e);
function xl(t, e, n = {}, r = {}) {
	return As(t, e, { slice: !1, parseOptions: n, errorOnInvalidContent: r.errorOnInvalidContent });
}
var vb =
	(t, { errorOnInvalidContent: e, emitUpdate: n = !0, parseOptions: r = {} } = {}) =>
	({ editor: s, tr: o, dispatch: i, commands: l }) => {
		const { doc: a } = o;
		if (r.preserveWhitespace !== 'full') {
			const c = xl(t, s.schema, r, { errorOnInvalidContent: e ?? s.options.enableContentCheck });
			return (i && o.replaceWith(0, a.content.size, c).setMeta('preventUpdate', !n), !0);
		}
		return (
			i && o.setMeta('preventUpdate', !n),
			l.insertContentAt({ from: 0, to: a.content.size }, t, {
				parseOptions: r,
				errorOnInvalidContent: e ?? s.options.enableContentCheck
			})
		);
	};
function bh(t, e) {
	const n = Ln(e, t.schema),
		{ from: r, to: s, empty: o } = t.selection,
		i = [];
	o
		? (t.storedMarks && i.push(...t.storedMarks), i.push(...t.selection.$head.marks()))
		: t.doc.nodesBetween(r, s, (a) => {
				i.push(...a.marks);
			});
	const l = i.find((a) => a.type.name === n.name);
	return l ? { ...l.attrs } : {};
}
function vh(t, e) {
	const n = new ta(t);
	return (
		e.forEach((r) => {
			r.steps.forEach((s) => {
				n.step(s);
			});
		}),
		n
	);
}
function kb(t) {
	for (let e = 0; e < t.edgeCount; e += 1) {
		const { type: n } = t.edge(e);
		if (n.isTextblock && !n.hasRequiredAttrs()) return n;
	}
	return null;
}
function wl(t, e) {
	const n = [];
	return (
		t.descendants((r, s) => {
			e(r) && n.push({ node: r, pos: s });
		}),
		n
	);
}
function xb(t, e, n) {
	const r = [];
	return (
		t.nodesBetween(e.from, e.to, (s, o) => {
			n(s) && r.push({ node: s, pos: o });
		}),
		r
	);
}
function kh(t, e) {
	for (let n = t.depth; n > 0; n -= 1) {
		const r = t.node(n);
		if (e(r)) return { pos: n > 0 ? t.before(n) : 0, start: t.start(n), depth: n, node: r };
	}
}
function pi(t) {
	return (e) => kh(e.$from, t);
}
function ie(t, e, n) {
	return t.config[e] === void 0 && t.parent
		? ie(t.parent, e, n)
		: typeof t.config[e] == 'function'
			? t.config[e].bind({ ...n, parent: t.parent ? ie(t.parent, e, n) : null })
			: t.config[e];
}
function wa(t) {
	return t
		.map((e) => {
			const n = { name: e.name, options: e.options, storage: e.storage },
				r = ie(e, 'addExtensions', n);
			return r ? [e, ...wa(r())] : e;
		})
		.flat(10);
}
function Sa(t, e) {
	const n = Sr.fromSchema(e).serializeFragment(t),
		s = document.implementation.createHTMLDocument().createElement('div');
	return (s.appendChild(n), s.innerHTML);
}
function xh(t) {
	return typeof t == 'function';
}
function Fe(t, e = void 0, ...n) {
	return xh(t) ? (e ? t.bind(e)(...n) : t(...n)) : t;
}
function wb(t = {}) {
	return Object.keys(t).length === 0 && t.constructor === Object;
}
function Vr(t) {
	const e = t.filter((s) => s.type === 'extension'),
		n = t.filter((s) => s.type === 'node'),
		r = t.filter((s) => s.type === 'mark');
	return { baseExtensions: e, nodeExtensions: n, markExtensions: r };
}
function wh(t) {
	const e = [],
		{ nodeExtensions: n, markExtensions: r } = Vr(t),
		s = [...n, ...r],
		o = {
			default: null,
			validate: void 0,
			rendered: !0,
			renderHTML: null,
			parseHTML: null,
			keepOnSplit: !0,
			isRequired: !1
		},
		i = n.filter((c) => c.name !== 'text').map((c) => c.name),
		l = r.map((c) => c.name),
		a = [...i, ...l];
	return (
		t.forEach((c) => {
			const u = { name: c.name, options: c.options, storage: c.storage, extensions: s },
				d = ie(c, 'addGlobalAttributes', u);
			if (!d) return;
			d().forEach((h) => {
				let p;
				(Array.isArray(h.types)
					? (p = h.types)
					: h.types === '*'
						? (p = a)
						: h.types === 'nodes'
							? (p = i)
							: h.types === 'marks'
								? (p = l)
								: (p = []),
					p.forEach((m) => {
						Object.entries(h.attributes).forEach(([g, b]) => {
							e.push({ type: m, name: g, attribute: { ...o, ...b } });
						});
					}));
			});
		}),
		s.forEach((c) => {
			const u = { name: c.name, options: c.options, storage: c.storage },
				d = ie(c, 'addAttributes', u);
			if (!d) return;
			const f = d();
			Object.entries(f).forEach(([h, p]) => {
				const m = { ...o, ...p };
				(typeof (m == null ? void 0 : m.default) == 'function' && (m.default = m.default()),
					m != null &&
						m.isRequired &&
						(m == null ? void 0 : m.default) === void 0 &&
						delete m.default,
					e.push({ type: c.name, name: h, attribute: m }));
			});
		}),
		e
	);
}
function Sb(t) {
	const e = [];
	let n = '',
		r = !1,
		s = !1,
		o = 0;
	const i = t.length;
	for (let l = 0; l < i; l += 1) {
		const a = t[l];
		if (a === "'" && !s) {
			((r = !r), (n += a));
			continue;
		}
		if (a === '"' && !r) {
			((s = !s), (n += a));
			continue;
		}
		if (!r && !s) {
			if (a === '(') {
				((o += 1), (n += a));
				continue;
			}
			if (a === ')' && o > 0) {
				((o -= 1), (n += a));
				continue;
			}
			if (a === ';' && o === 0) {
				(e.push(n), (n = ''));
				continue;
			}
		}
		n += a;
	}
	return (n && e.push(n), e);
}
function iu(t) {
	const e = [],
		n = Sb(t || ''),
		r = n.length;
	for (let s = 0; s < r; s += 1) {
		const o = n[s],
			i = o.indexOf(':');
		if (i === -1) continue;
		const l = o.slice(0, i).trim(),
			a = o.slice(i + 1).trim();
		l && a && e.push([l, a]);
	}
	return e;
}
function je(...t) {
	return t
		.filter((e) => !!e)
		.reduce((e, n) => {
			const r = { ...e };
			return (
				Object.entries(n).forEach(([s, o]) => {
					if (!r[s]) {
						r[s] = o;
						return;
					}
					if (s === 'class') {
						const l = o ? String(o).split(' ') : [],
							a = r[s] ? r[s].split(' ') : [],
							c = l.filter((u) => !a.includes(u));
						r[s] = [...a, ...c].join(' ');
					} else if (s === 'style') {
						const l = new Map([...iu(r[s]), ...iu(o)]);
						r[s] = Array.from(l.entries())
							.map(([a, c]) => `${a}: ${c}`)
							.join('; ');
					} else r[s] = o;
				}),
				r
			);
		}, {});
}
function Ns(t, e) {
	return e
		.filter((n) => n.type === t.type.name)
		.filter((n) => n.attribute.rendered)
		.map((n) =>
			n.attribute.renderHTML ? n.attribute.renderHTML(t.attrs) || {} : { [n.name]: t.attrs[n.name] }
		)
		.reduce((n, r) => je(n, r), {});
}
function Cb(t) {
	return typeof t != 'string'
		? t
		: t.match(/^[+-]?(?:\d*\.)?\d+$/)
			? Number(t)
			: t === 'true'
				? !0
				: t === 'false'
					? !1
					: t;
}
function lu(t, e) {
	return 'style' in t
		? t
		: {
				...t,
				getAttrs: (n) => {
					const r = t.getAttrs ? t.getAttrs(n) : t.attrs;
					if (r === !1) return !1;
					const s = e.reduce((o, i) => {
						const l = i.attribute.parseHTML ? i.attribute.parseHTML(n) : Cb(n.getAttribute(i.name));
						return l == null ? o : { ...o, [i.name]: l };
					}, {});
					return { ...r, ...s };
				}
			};
}
function au(t) {
	return Object.fromEntries(
		Object.entries(t).filter(([e, n]) => (e === 'attrs' && wb(n) ? !1 : n != null))
	);
}
function cu(t) {
	var e, n;
	const r = {};
	return (
		!((e = t == null ? void 0 : t.attribute) != null && e.isRequired) &&
			'default' in ((t == null ? void 0 : t.attribute) || {}) &&
			(r.default = t.attribute.default),
		((n = t == null ? void 0 : t.attribute) == null ? void 0 : n.validate) !== void 0 &&
			(r.validate = t.attribute.validate),
		[t.name, r]
	);
}
function Tb(t, e) {
	var n;
	const r = wh(t),
		{ nodeExtensions: s, markExtensions: o } = Vr(t),
		i = (n = s.find((c) => ie(c, 'topNode'))) == null ? void 0 : n.name,
		l = Object.fromEntries(
			s.map((c) => {
				const u = r.filter((b) => b.type === c.name),
					d = { name: c.name, options: c.options, storage: c.storage, editor: e },
					f = t.reduce((b, S) => {
						const O = ie(S, 'extendNodeSchema', d);
						return { ...b, ...(O ? O(c) : {}) };
					}, {}),
					h = au({
						...f,
						content: Fe(ie(c, 'content', d)),
						marks: Fe(ie(c, 'marks', d)),
						group: Fe(ie(c, 'group', d)),
						inline: Fe(ie(c, 'inline', d)),
						atom: Fe(ie(c, 'atom', d)),
						selectable: Fe(ie(c, 'selectable', d)),
						draggable: Fe(ie(c, 'draggable', d)),
						code: Fe(ie(c, 'code', d)),
						whitespace: Fe(ie(c, 'whitespace', d)),
						linebreakReplacement: Fe(ie(c, 'linebreakReplacement', d)),
						defining: Fe(ie(c, 'defining', d)),
						isolating: Fe(ie(c, 'isolating', d)),
						attrs: Object.fromEntries(u.map(cu))
					}),
					p = Fe(ie(c, 'parseHTML', d));
				p && (h.parseDOM = p.map((b) => lu(b, u)));
				const m = ie(c, 'renderHTML', d);
				m && (h.toDOM = (b) => m({ node: b, HTMLAttributes: Ns(b, u) }));
				const g = ie(c, 'renderText', d);
				return (g && (h.toText = g), [c.name, h]);
			})
		),
		a = Object.fromEntries(
			o.map((c) => {
				const u = r.filter((g) => g.type === c.name),
					d = { name: c.name, options: c.options, storage: c.storage, editor: e },
					f = t.reduce((g, b) => {
						const S = ie(b, 'extendMarkSchema', d);
						return { ...g, ...(S ? S(c) : {}) };
					}, {}),
					h = au({
						...f,
						inclusive: Fe(ie(c, 'inclusive', d)),
						excludes: Fe(ie(c, 'excludes', d)),
						group: Fe(ie(c, 'group', d)),
						spanning: Fe(ie(c, 'spanning', d)),
						code: Fe(ie(c, 'code', d)),
						attrs: Object.fromEntries(u.map(cu))
					}),
					p = Fe(ie(c, 'parseHTML', d));
				p && (h.parseDOM = p.map((g) => lu(g, u)));
				const m = ie(c, 'renderHTML', d);
				return (m && (h.toDOM = (g) => m({ mark: g, HTMLAttributes: Ns(g, u) })), [c.name, h]);
			})
		);
	return new ef({ topNode: i, nodes: l, marks: a });
}
function Mb(t) {
	const e = t.filter((n, r) => t.indexOf(n) !== r);
	return Array.from(new Set(e));
}
function fs(t) {
	return t.sort((n, r) => {
		const s = ie(n, 'priority') || 100,
			o = ie(r, 'priority') || 100;
		return s > o ? -1 : s < o ? 1 : 0;
	});
}
function Sh(t) {
	const e = fs(wa(t)),
		n = Mb(e.map((r) => r.name));
	return (
		n.length &&
			console.warn(
				`[tiptap warn]: Duplicate extension names found: [${n.map((r) => `'${r}'`).join(', ')}]. This can lead to issues.`
			),
		e
	);
}
function Ch(t, e, n) {
	const { from: r, to: s } = e,
		{
			blockSeparator: o = `

`,
			textSerializers: i = {}
		} = n || {};
	let l = '';
	return (
		t.nodesBetween(r, s, (a, c, u, d) => {
			var f;
			a.isBlock && c > r && (l += o);
			const h = i == null ? void 0 : i[a.type.name];
			if (h) return (u && (l += h({ node: a, pos: c, parent: u, index: d, range: e })), !1);
			a.isText &&
				(l +=
					(f = a == null ? void 0 : a.text) == null ? void 0 : f.slice(Math.max(r, c) - c, s - c));
		}),
		l
	);
}
function Th(t, e) {
	const n = { from: 0, to: t.content.size };
	return Ch(t, n, e);
}
function Ca(t) {
	return Object.fromEntries(
		Object.entries(t.nodes)
			.filter(([, e]) => e.spec.toText)
			.map(([e, n]) => [e, n.spec.toText])
	);
}
function Eb(t, e) {
	const n = ht(e, t.schema),
		{ from: r, to: s } = t.selection,
		o = [];
	t.doc.nodesBetween(r, s, (l) => {
		o.push(l);
	});
	const i = o.reverse().find((l) => l.type.name === n.name);
	return i ? { ...i.attrs } : {};
}
function Mh(t, e) {
	const n = hi(typeof e == 'string' ? e : e.name, t.schema);
	return n === 'node' ? Eb(t, e) : n === 'mark' ? bh(t, e) : {};
}
function Ab(t, e = JSON.stringify) {
	const n = {};
	return t.filter((r) => {
		const s = e(r);
		return Object.prototype.hasOwnProperty.call(n, s) ? !1 : (n[s] = !0);
	});
}
function Nb(t) {
	const e = Ab(t);
	return e.length === 1
		? e
		: e.filter(
				(n, r) =>
					!e
						.filter((o, i) => i !== r)
						.some(
							(o) =>
								n.oldRange.from >= o.oldRange.from &&
								n.oldRange.to <= o.oldRange.to &&
								n.newRange.from >= o.newRange.from &&
								n.newRange.to <= o.newRange.to
						)
			);
}
function Eh(t) {
	const { mapping: e, steps: n } = t,
		r = [];
	return (
		e.maps.forEach((s, o) => {
			const i = [];
			if (s.ranges.length)
				s.forEach((l, a) => {
					i.push({ from: l, to: a });
				});
			else {
				const { from: l, to: a } = n[o];
				if (l === void 0 || a === void 0) return;
				i.push({ from: l, to: a });
			}
			i.forEach(({ from: l, to: a }) => {
				const c = e.slice(o).map(l, -1),
					u = e.slice(o).map(a),
					d = e.invert().map(c, -1),
					f = e.invert().map(u);
				r.push({ oldRange: { from: d, to: f }, newRange: { from: c, to: u } });
			});
		}),
		Nb(r)
	);
}
function Ta(t, e, n) {
	const r = [];
	return (
		t === e
			? n
					.resolve(t)
					.marks()
					.forEach((s) => {
						const o = n.resolve(t),
							i = ka(o, s.type);
						i && r.push({ mark: s, ...i });
					})
			: n.nodesBetween(t, e, (s, o) => {
					!s ||
						(s == null ? void 0 : s.nodeSize) === void 0 ||
						r.push(...s.marks.map((i) => ({ from: o, to: o + s.nodeSize, mark: i })));
				}),
		r
	);
}
var Ob = (t, e, n, r = 20) => {
	const s = t.doc.resolve(n);
	let o = r,
		i = null;
	for (; o > 0 && i === null; ) {
		const l = s.node(o);
		(l == null ? void 0 : l.type.name) === e ? (i = l) : (o -= 1);
	}
	return [i, o];
};
function Yr(t, e) {
	return e.nodes[t] || e.marks[t] || null;
}
function co(t, e, n) {
	return Object.fromEntries(
		Object.entries(n).filter(([r]) => {
			const s = t.find((o) => o.type === e && o.name === r);
			return s ? s.attribute.keepOnSplit : !1;
		})
	);
}
var Ib = (t, e = 500) => {
	let n = '';
	const r = t.parentOffset;
	return (
		t.parent.nodesBetween(Math.max(0, r - e), r, (s, o, i, l) => {
			var a, c;
			const u =
				((c = (a = s.type.spec).toText) == null
					? void 0
					: c.call(a, { node: s, pos: o, parent: i, index: l })) ||
				s.textContent ||
				'%leaf%';
			n += s.isAtom && !s.isText ? u : u.slice(0, Math.max(0, r - o));
		}),
		n
	);
};
function Sl(t, e, n = {}) {
	const { empty: r, ranges: s } = t.selection,
		o = e ? Ln(e, t.schema) : null;
	if (r)
		return !!(t.storedMarks || t.selection.$from.marks())
			.filter((d) => (o ? o.name === d.type.name : !0))
			.find((d) => Eo(d.attrs, n, { strict: !1 }));
	let i = 0;
	const l = [];
	if (
		(s.forEach(({ $from: d, $to: f }) => {
			const h = d.pos,
				p = f.pos;
			t.doc.nodesBetween(h, p, (m, g) => {
				if (o && m.inlineContent && !m.type.allowsMarkType(o)) return !1;
				if (!m.isText && !m.marks.length) return;
				const b = Math.max(h, g),
					S = Math.min(p, g + m.nodeSize),
					O = S - b;
				((i += O), l.push(...m.marks.map((H) => ({ mark: H, from: b, to: S }))));
			});
		}),
		i === 0)
	)
		return !1;
	const a = l
			.filter((d) => (o ? o.name === d.mark.type.name : !0))
			.filter((d) => Eo(d.mark.attrs, n, { strict: !1 }))
			.reduce((d, f) => d + f.to - f.from, 0),
		c = l
			.filter((d) => (o ? d.mark.type !== o && d.mark.type.excludes(o) : !0))
			.reduce((d, f) => d + f.to - f.from, 0);
	return (a > 0 ? a + c : a) >= i;
}
function Db(t, e, n = {}) {
	if (!e) return Qn(t, null, n) || Sl(t, null, n);
	const r = hi(e, t.schema);
	return r === 'node' ? Qn(t, e, n) : r === 'mark' ? Sl(t, e, n) : !1;
}
var Rb = (t, e) => {
		const { $from: n, $to: r, $anchor: s } = t.selection;
		if (e) {
			const o = pi((l) => l.type.name === e)(t.selection);
			if (!o) return !1;
			const i = t.doc.resolve(o.pos + 1);
			return s.pos + 1 === i.end();
		}
		return !(r.parentOffset < r.parent.nodeSize - 2 || n.pos !== r.pos);
	},
	Lb = (t) => {
		const { $from: e, $to: n } = t.selection;
		return !(e.parentOffset > 0 || e.pos !== n.pos);
	};
function uu(t, e) {
	return Array.isArray(e) ? e.some((n) => (typeof n == 'string' ? n : n.name) === t.name) : e;
}
function du(t, e) {
	const { nodeExtensions: n } = Vr(e),
		r = n.find((i) => i.name === t);
	if (!r) return !1;
	const s = { name: r.name, options: r.options, storage: r.storage },
		o = Fe(ie(r, 'group', s));
	return typeof o != 'string' ? !1 : o.split(' ').includes('list');
}
function mi(t, { checkChildren: e = !0, ignoreWhitespace: n = !1 } = {}) {
	var r;
	if (n) {
		if (t.type.name === 'hardBreak') return !0;
		if (t.isText) return /^\s*$/m.test((r = t.text) != null ? r : '');
	}
	if (t.isText) return !t.text;
	if (t.isAtom || t.isLeaf) return !1;
	if (t.content.childCount === 0) return !0;
	if (e) {
		let s = !0;
		return (
			t.content.forEach((o) => {
				s !== !1 && (mi(o, { ignoreWhitespace: n, checkChildren: e }) || (s = !1));
			}),
			s
		);
	}
	return !1;
}
function Ah(t) {
	return t instanceof fe;
}
var Nh = class Oh {
	constructor(e) {
		this.position = e;
	}
	static fromJSON(e) {
		return new Oh(e.position);
	}
	toJSON() {
		return { position: this.position };
	}
};
function Pb(t, e) {
	const n = e.mapping.mapResult(t.position);
	return { position: new Nh(n.pos), mapResult: n };
}
function zb(t) {
	return new Nh(t);
}
function Ih(t, e, n) {
	const s = t.state.doc.content.size,
		o = Nn(e, 0, s),
		i = Nn(n, 0, s),
		l = t.coordsAtPos(o),
		a = t.coordsAtPos(i, -1),
		c = Math.min(l.top, a.top),
		u = Math.max(l.bottom, a.bottom),
		d = Math.min(l.left, a.left),
		f = Math.max(l.right, a.right),
		h = f - d,
		p = u - c,
		b = { top: c, bottom: u, left: d, right: f, width: h, height: p, x: d, y: c };
	return { ...b, toJSON: () => b };
}
function Bb(t, e, n) {
	var r;
	const { selection: s } = e;
	let o = null;
	if ((xa(s) && (o = s.$cursor), o)) {
		const l = (r = t.storedMarks) != null ? r : o.marks();
		return (
			o.parent.type.allowsMarkType(n) && (!!n.isInSet(l) || !l.some((c) => c.type.excludes(n)))
		);
	}
	const { ranges: i } = s;
	return i.some(({ $from: l, $to: a }) => {
		let c = l.depth === 0 ? t.doc.inlineContent && t.doc.type.allowsMarkType(n) : !1;
		return (
			t.doc.nodesBetween(l.pos, a.pos, (u, d, f) => {
				if (c) return !1;
				if (u.isInline) {
					const h = !f || f.type.allowsMarkType(n),
						p = !!n.isInSet(u.marks) || !u.marks.some((m) => m.type.excludes(n));
					c = h && p;
				}
				return !c;
			}),
			c
		);
	});
}
var $b =
		(t, e = {}) =>
		({ tr: n, state: r, dispatch: s }) => {
			const { selection: o } = n,
				{ empty: i, ranges: l } = o,
				a = Ln(t, r.schema);
			if (s)
				if (i) {
					const c = bh(r, a);
					n.addStoredMark(a.create({ ...c, ...e }));
				} else
					l.forEach((c) => {
						const u = c.$from.pos,
							d = c.$to.pos;
						r.doc.nodesBetween(u, d, (f, h) => {
							const p = Math.max(h, u),
								m = Math.min(h + f.nodeSize, d);
							f.marks.find((b) => b.type === a)
								? f.marks.forEach((b) => {
										a === b.type && n.addMark(p, m, a.create({ ...b.attrs, ...e }));
									})
								: n.addMark(p, m, a.create(e));
						});
					});
			return Bb(r, n, a);
		},
	_b =
		(t, e) =>
		({ tr: n }) => (n.setMeta(t, e), !0),
	Hb =
		(t, e = {}) =>
		({ state: n, dispatch: r, chain: s }) => {
			const o = ht(t, n.schema);
			let i;
			return (
				n.selection.$anchor.sameParent(n.selection.$head) && (i = n.selection.$anchor.parent.attrs),
				o.isTextblock
					? s()
							.command(({ commands: l }) => (nu(o, { ...i, ...e })(n) ? !0 : l.clearNodes()))
							.command(({ state: l }) => nu(o, { ...i, ...e })(l, r))
							.run()
					: (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'),
						!1)
			);
		},
	Fb =
		(t) =>
		({ tr: e, dispatch: n }) => {
			if (n) {
				const { doc: r } = e,
					s = Nn(t, 0, r.content.size),
					o = fe.create(r, s);
				e.setSelection(o);
			}
			return !0;
		},
	Vb =
		(t, e) =>
		({ tr: n, state: r, dispatch: s }) => {
			const { selection: o } = r;
			let i, l;
			return (
				typeof e == 'number'
					? ((i = e), (l = e))
					: e && 'from' in e && 'to' in e
						? ((i = e.from), (l = e.to))
						: ((i = o.from), (l = o.to)),
				s &&
					n.doc.nodesBetween(i, l, (a, c) => {
						a.isText || n.setNodeMarkup(c, void 0, { ...a.attrs, dir: t });
					}),
				!0
			);
		},
	Wb =
		(t) =>
		({ tr: e, dispatch: n }) => {
			if (n) {
				const { doc: r } = e,
					{ from: s, to: o } = typeof t == 'number' ? { from: t, to: t } : t,
					i = pe.atStart(r).from,
					l = pe.atEnd(r).to,
					a = Nn(s, i, l),
					c = Nn(o, i, l),
					u = pe.create(r, a, c);
				e.setSelection(u);
			}
			return !0;
		},
	jb =
		(t) =>
		({ state: e, dispatch: n }) => {
			const r = ht(t, e.schema);
			return S1(r)(e, n);
		};
function fu(t, e) {
	const n = t.storedMarks || (t.selection.$to.parentOffset && t.selection.$from.marks());
	if (n) {
		const r = n.filter((s) => (e == null ? void 0 : e.includes(s.type.name)));
		t.tr.ensureMarks(r);
	}
}
var Ub =
		({ keepMarks: t = !0 } = {}) =>
		({ tr: e, state: n, dispatch: r, editor: s }) => {
			const { selection: o, doc: i } = e,
				{ $from: l, $to: a } = o,
				c = s.extensionManager.attributes,
				u = co(c, l.node().type.name, l.node().attrs);
			if (o instanceof fe && o.node.isBlock)
				return !l.parentOffset || !In(i, l.pos)
					? !1
					: (r && (t && fu(n, s.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()),
						!0);
			if (!l.parent.isBlock) return !1;
			const d = a.parentOffset === a.parent.content.size,
				f = l.depth === 0 ? void 0 : kb(l.node(-1).contentMatchAt(l.indexAfter(-1)));
			let h = d && f ? [{ type: f, attrs: u }] : void 0,
				p = In(e.doc, e.mapping.map(l.pos), 1, h);
			if (
				(!h &&
					!p &&
					In(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) &&
					((p = !0), (h = f ? [{ type: f, attrs: u }] : void 0)),
				r)
			) {
				if (
					p &&
					(o instanceof pe && e.deleteSelection(),
					e.split(e.mapping.map(l.pos), 1, h),
					f && !d && !l.parentOffset && l.parent.type !== f)
				) {
					const m = e.mapping.map(l.before()),
						g = e.doc.resolve(m);
					l.node(-1).canReplaceWith(g.index(), g.index() + 1, f) &&
						e.setNodeMarkup(e.mapping.map(l.before()), f);
				}
				(t && fu(n, s.extensionManager.splittableMarks), e.scrollIntoView());
			}
			return p;
		},
	qb =
		(t, e = {}) =>
		({ tr: n, state: r, dispatch: s, editor: o }) => {
			var i;
			const l = ht(t, r.schema),
				{ $from: a, $to: c } = r.selection,
				u = r.selection.node;
			if ((u && u.isBlock) || a.depth < 2 || !a.sameParent(c)) return !1;
			const d = a.node(-1);
			if (d.type !== l) return !1;
			const f = o.extensionManager.attributes;
			if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
				if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
					return !1;
				if (s) {
					let b = z.empty;
					const S = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
					for (let M = a.depth - S; M >= a.depth - 3; M -= 1) b = z.from(a.node(M).copy(b));
					const O =
							a.indexAfter(-1) < a.node(-2).childCount
								? 1
								: a.indexAfter(-2) < a.node(-3).childCount
									? 2
									: 3,
						H = { ...co(f, a.node().type.name, a.node().attrs), ...e },
						E = ((i = l.contentMatch.defaultType) == null ? void 0 : i.createAndFill(H)) || void 0;
					b = b.append(z.from(l.createAndFill(null, E) || void 0));
					const x = a.before(a.depth - (S - 1));
					n.replace(x, a.after(-O), new X(b, 4 - S, 0));
					let k = -1;
					(n.doc.nodesBetween(x, n.doc.content.size, (M, T) => {
						if (k > -1) return !1;
						M.isTextblock && M.content.size === 0 && (k = T + 1);
					}),
						k > -1 && n.setSelection(pe.near(n.doc.resolve(k))),
						n.scrollIntoView());
				}
				return !0;
			}
			const h = c.pos === a.end() ? d.contentMatchAt(0).defaultType : null,
				p = { ...co(f, d.type.name, d.attrs), ...e },
				m = { ...co(f, a.node().type.name, a.node().attrs), ...e };
			n.delete(a.pos, c.pos);
			const g = h
				? [
						{ type: l, attrs: p },
						{ type: h, attrs: m }
					]
				: [{ type: l, attrs: p }];
			if (!In(n.doc, a.pos, 2)) return !1;
			if (s) {
				const { selection: b, storedMarks: S } = r,
					{ splittableMarks: O } = o.extensionManager,
					H = S || (b.$to.parentOffset && b.$from.marks());
				if ((n.split(a.pos, 2, g).scrollIntoView(), !H || !s)) return !0;
				const E = H.filter((x) => O.includes(x.type.name));
				n.ensureMarks(E);
			}
			return !0;
		},
	Wi = (t, e) => {
		const n = pi((i) => i.type === e)(t.selection);
		if (!n) return !0;
		const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
		if (r === void 0) return !0;
		const s = t.doc.nodeAt(r);
		return (n.node.type === (s == null ? void 0 : s.type) && er(t.doc, n.pos) && t.join(n.pos), !0);
	},
	ji = (t, e) => {
		const n = pi((i) => i.type === e)(t.selection);
		if (!n) return !0;
		const r = t.doc.resolve(n.start).after(n.depth);
		if (r === void 0) return !0;
		const s = t.doc.nodeAt(r);
		return (n.node.type === (s == null ? void 0 : s.type) && er(t.doc, r) && t.join(r), !0);
	},
	Kb =
		(t, e, n, r = {}) =>
		({ editor: s, tr: o, state: i, dispatch: l, chain: a, commands: c, can: u }) => {
			const { extensions: d, splittableMarks: f } = s.extensionManager,
				h = ht(t, i.schema),
				p = ht(e, i.schema),
				{ selection: m, storedMarks: g } = i,
				{ $from: b, $to: S } = m,
				O = b.blockRange(S),
				H = g || (m.$to.parentOffset && m.$from.marks());
			if (!O) return !1;
			const E = pi((x) => du(x.type.name, d))(m);
			if (O.depth >= 1 && E && O.depth - E.depth <= 1) {
				if (E.node.type === h) return c.liftListItem(p);
				if (du(E.node.type.name, d) && h.validContent(E.node.content) && l)
					return a()
						.command(() => (o.setNodeMarkup(E.pos, h), !0))
						.command(() => Wi(o, h))
						.command(() => ji(o, h))
						.run();
			}
			return !n || !H || !l
				? a()
						.command(() => (u().wrapInList(h, r) ? !0 : c.clearNodes()))
						.wrapInList(h, r)
						.command(() => Wi(o, h))
						.command(() => ji(o, h))
						.run()
				: a()
						.command(() => {
							const x = u().wrapInList(h, r),
								k = H.filter((M) => f.includes(M.type.name));
							return (o.ensureMarks(k), x ? !0 : c.clearNodes());
						})
						.wrapInList(h, r)
						.command(() => Wi(o, h))
						.command(() => ji(o, h))
						.run();
		},
	Jb =
		(t, e = {}, n = {}) =>
		({ state: r, commands: s }) => {
			const { extendEmptyMarkRange: o = !1 } = n,
				i = Ln(t, r.schema);
			return Sl(r, i, e) ? s.unsetMark(i, { extendEmptyMarkRange: o }) : s.setMark(i, e);
		},
	Gb =
		(t, e, n = {}) =>
		({ state: r, commands: s }) => {
			const o = ht(t, r.schema),
				i = ht(e, r.schema),
				l = Qn(r, o, n);
			let a;
			return (
				r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs),
				l ? s.setNode(i, a) : s.setNode(o, { ...a, ...n })
			);
		},
	Xb =
		(t, e = {}) =>
		({ state: n, commands: r }) => {
			const s = ht(t, n.schema);
			return Qn(n, s, e) ? r.lift(s) : r.wrapIn(s, e);
		},
	Qb =
		() =>
		({ state: t, dispatch: e }) => {
			const n = t.plugins;
			for (let r = 0; r < n.length; r += 1) {
				const s = n[r];
				let o;
				if (s.spec.isInputRules && (o = s.getState(t))) {
					if (e) {
						const i = t.tr,
							l = o.transform;
						for (let a = l.steps.length - 1; a >= 0; a -= 1) i.step(l.steps[a].invert(l.docs[a]));
						if (o.text) {
							const a = i.doc.resolve(o.from).marks();
							i.replaceWith(o.from, o.to, t.schema.text(o.text, a));
						} else i.delete(o.from, o.to);
					}
					return !0;
				}
			}
			return !1;
		},
	Yb =
		() =>
		({ tr: t, dispatch: e }) => {
			const { selection: n } = t,
				{ empty: r, ranges: s } = n;
			return (
				r ||
					(e &&
						s.forEach((o) => {
							t.removeMark(o.$from.pos, o.$to.pos);
						})),
				!0
			);
		},
	Zb =
		(t, e = {}) =>
		({ tr: n, state: r, dispatch: s }) => {
			var o;
			const { extendEmptyMarkRange: i = !1 } = e,
				{ selection: l } = n,
				a = Ln(t, r.schema),
				{ $from: c, empty: u, ranges: d } = l;
			if (!s) return !0;
			if (u && i) {
				let { from: f, to: h } = l;
				const p = (o = c.marks().find((g) => g.type === a)) == null ? void 0 : o.attrs,
					m = ka(c, a, p);
				(m && ((f = m.from), (h = m.to)), n.removeMark(f, h, a));
			} else
				d.forEach((f) => {
					n.removeMark(f.$from.pos, f.$to.pos, a);
				});
			return (n.removeStoredMark(a), !0);
		},
	ev =
		(t) =>
		({ tr: e, state: n, dispatch: r }) => {
			const { selection: s } = n;
			let o, i;
			return (
				typeof t == 'number'
					? ((o = t), (i = t))
					: t && 'from' in t && 'to' in t
						? ((o = t.from), (i = t.to))
						: ((o = s.from), (i = s.to)),
				r &&
					e.doc.nodesBetween(o, i, (l, a) => {
						if (l.isText) return;
						const c = { ...l.attrs };
						(delete c.dir, e.setNodeMarkup(a, void 0, c));
					}),
				!0
			);
		},
	tv =
		(t, e = {}) =>
		({ tr: n, state: r, dispatch: s }) => {
			let o = null,
				i = null;
			const l = hi(typeof t == 'string' ? t : t.name, r.schema);
			if (!l) return !1;
			(l === 'node' && (o = ht(t, r.schema)), l === 'mark' && (i = Ln(t, r.schema)));
			let a = !1;
			return (
				n.selection.ranges.forEach((c) => {
					const u = c.$from.pos,
						d = c.$to.pos;
					let f, h, p, m;
					(n.selection.empty
						? r.doc.nodesBetween(u, d, (g, b) => {
								o &&
									o === g.type &&
									((a = !0),
									(p = Math.max(b, u)),
									(m = Math.min(b + g.nodeSize, d)),
									(f = b),
									(h = g));
							})
						: r.doc.nodesBetween(u, d, (g, b) => {
								(b < u &&
									o &&
									o === g.type &&
									((a = !0),
									(p = Math.max(b, u)),
									(m = Math.min(b + g.nodeSize, d)),
									(f = b),
									(h = g)),
									b >= u &&
										b <= d &&
										(o &&
											o === g.type &&
											((a = !0), s && n.setNodeMarkup(b, void 0, { ...g.attrs, ...e })),
										i &&
											g.marks.length &&
											g.marks.forEach((S) => {
												if (i === S.type && ((a = !0), s)) {
													const O = Math.max(b, u),
														H = Math.min(b + g.nodeSize, d);
													n.addMark(O, H, i.create({ ...S.attrs, ...e }));
												}
											})));
							}),
						h &&
							(f !== void 0 && s && n.setNodeMarkup(f, void 0, { ...h.attrs, ...e }),
							i &&
								h.marks.length &&
								h.marks.forEach((g) => {
									i === g.type && s && n.addMark(p, m, i.create({ ...g.attrs, ...e }));
								})));
				}),
				a
			);
		},
	nv =
		(t, e = {}) =>
		({ state: n, dispatch: r }) => {
			const s = ht(t, n.schema);
			return g1(s, e)(n, r);
		},
	rv =
		(t, e = {}) =>
		({ state: n, dispatch: r }) => {
			const s = ht(t, n.schema);
			return y1(s, e)(n, r);
		},
	sv = class {
		constructor() {
			this.callbacks = {};
		}
		on(t, e) {
			return (this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), this);
		}
		emit(t, ...e) {
			const n = this.callbacks[t];
			return (n && n.forEach((r) => r.apply(this, e)), this);
		}
		off(t, e) {
			const n = this.callbacks[t];
			return (
				n && (e ? (this.callbacks[t] = n.filter((r) => r !== e)) : delete this.callbacks[t]),
				this
			);
		}
		once(t, e) {
			const n = (...r) => {
				(this.off(t, n), e.apply(this, r));
			};
			return this.on(t, n);
		}
		removeAllListeners() {
			this.callbacks = {};
		}
	},
	Hs = class {
		constructor(t) {
			var e;
			((this.find = t.find),
				(this.handler = t.handler),
				(this.undoable = (e = t.undoable) != null ? e : !0));
		}
	},
	ov = (t, e) => {
		if (va(e)) return e.exec(t);
		const n = e(t);
		if (!n) return null;
		const r = [n.text];
		return (
			(r.index = n.index),
			(r.input = t),
			(r.data = n.data),
			n.replaceWith &&
				(n.text.includes(n.replaceWith) ||
					console.warn(
						'[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'
					),
				r.push(n.replaceWith)),
			r
		);
	};
function Xs(t) {
	var e;
	const { editor: n, from: r, to: s, text: o, rules: i, plugin: l } = t,
		{ view: a } = n;
	if (a.composing) return !1;
	const c = a.state.doc.resolve(r);
	if (
		c.parent.type.spec.code ||
		((e = c.nodeBefore || c.nodeAfter) != null && e.marks.find((f) => f.type.spec.code))
	)
		return !1;
	let u = !1;
	const d = Ib(c) + o;
	return (
		i.forEach((f) => {
			if (u) return;
			const h = ov(d, f.find);
			if (!h) return;
			const p = a.state.tr,
				m = di({ state: a.state, transaction: p }),
				g = { from: r - (h[0].length - o.length), to: s },
				{ commands: b, chain: S, can: O } = new fi({ editor: n, state: m });
			f.handler({ state: m, range: g, match: h, commands: b, chain: S, can: O }) === null ||
				!p.steps.length ||
				(f.undoable && p.setMeta(l, { transform: p, from: r, to: s, text: o }),
				a.dispatch(p),
				(u = !0));
		}),
		u
	);
}
function iv(t) {
	const { editor: e, rules: n } = t,
		r = new ze({
			state: {
				init() {
					return null;
				},
				apply(s, o, i) {
					const l = s.getMeta(r);
					if (l) return l;
					const a = s.getMeta('applyInputRules');
					return (
						!!a &&
							setTimeout(() => {
								let { text: u } = a;
								typeof u == 'string' ? (u = u) : (u = Sa(z.from(u), i.schema));
								const { from: d } = a,
									f = d + u.length;
								Xs({ editor: e, from: d, to: f, text: u, rules: n, plugin: r });
							}),
						s.selectionSet || s.docChanged ? null : o
					);
				}
			},
			props: {
				handleTextInput(s, o, i, l) {
					return Xs({ editor: e, from: o, to: i, text: l, rules: n, plugin: r });
				},
				handleDOMEvents: {
					compositionend: (s) => (
						setTimeout(() => {
							const { $cursor: o } = s.state.selection;
							o && Xs({ editor: e, from: o.pos, to: o.pos, text: '', rules: n, plugin: r });
						}),
						!1
					)
				},
				handleKeyDown(s, o) {
					if (o.key !== 'Enter') return !1;
					const { $cursor: i } = s.state.selection;
					return i
						? Xs({
								editor: e,
								from: i.pos,
								to: i.pos,
								text: `
`,
								rules: n,
								plugin: r
							})
						: !1;
				}
			},
			isInputRules: !0
		});
	return r;
}
function lv(t) {
	return Object.prototype.toString.call(t).slice(8, -1);
}
function Qs(t) {
	return lv(t) !== 'Object'
		? !1
		: t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function Dh(t, e) {
	const n = { ...t };
	return (
		Qs(t) &&
			Qs(e) &&
			Object.keys(e).forEach((r) => {
				Qs(e[r]) && Qs(t[r]) ? (n[r] = Dh(t[r], e[r])) : (n[r] = e[r]);
			}),
		n
	);
}
var Ma = class {
		constructor(t = {}) {
			((this.type = 'extendable'),
				(this.parent = null),
				(this.child = null),
				(this.name = ''),
				(this.config = { name: this.name }),
				(this.config = { ...this.config, ...t }),
				(this.name = this.config.name));
		}
		get options() {
			return { ...(Fe(ie(this, 'addOptions', { name: this.name })) || {}) };
		}
		get storage() {
			return { ...(Fe(ie(this, 'addStorage', { name: this.name, options: this.options })) || {}) };
		}
		configure(t = {}) {
			const e = this.extend({ ...this.config, addOptions: () => Dh(this.options, t) });
			return ((e.name = this.name), (e.parent = this.parent), e);
		}
		extend(t = {}) {
			const e = new this.constructor({ ...this.config, ...t });
			return (
				(e.parent = this),
				(this.child = e),
				(e.name = 'name' in t ? t.name : e.parent.name),
				e
			);
		}
	},
	nr = class Rh extends Ma {
		constructor() {
			(super(...arguments), (this.type = 'mark'));
		}
		static create(e = {}) {
			const n = typeof e == 'function' ? e() : e;
			return new Rh(n);
		}
		static handleExit({ editor: e, mark: n }) {
			const { tr: r } = e.state,
				s = e.state.selection.$from;
			if (s.pos === s.end()) {
				const i = s.marks();
				if (!!!i.find((c) => (c == null ? void 0 : c.type.name) === n.name)) return !1;
				const a = i.find((c) => (c == null ? void 0 : c.type.name) === n.name);
				return (a && r.removeStoredMark(a), r.insertText(' ', s.pos), e.view.dispatch(r), !0);
			}
			return !1;
		}
		configure(e) {
			return super.configure(e);
		}
		extend(e) {
			const n = typeof e == 'function' ? e() : e;
			return super.extend(n);
		}
	};
function av(t) {
	return typeof t == 'number';
}
var cv = class {
		constructor(t) {
			((this.find = t.find), (this.handler = t.handler));
		}
	},
	uv = (t, e, n) => {
		if (va(e)) return [...t.matchAll(e)];
		const r = e(t, n);
		return r
			? r.map((s) => {
					const o = [s.text];
					return (
						(o.index = s.index),
						(o.input = t),
						(o.data = s.data),
						s.replaceWith &&
							(s.text.includes(s.replaceWith) ||
								console.warn(
									'[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'
								),
							o.push(s.replaceWith)),
						o
					);
				})
			: [];
	};
function dv(t) {
	const { editor: e, state: n, from: r, to: s, rule: o, pasteEvent: i, dropEvent: l } = t,
		{ commands: a, chain: c, can: u } = new fi({ editor: e, state: n }),
		d = [];
	return (
		n.doc.nodesBetween(r, s, (h, p) => {
			var m, g, b, S, O;
			if (
				((g = (m = h.type) == null ? void 0 : m.spec) != null && g.code) ||
				!(h.isText || h.isTextblock || h.isInline)
			)
				return;
			const H =
					(O = (S = (b = h.content) == null ? void 0 : b.size) != null ? S : h.nodeSize) != null
						? O
						: 0,
				E = Math.max(r, p),
				x = Math.min(s, p + H);
			if (E >= x) return;
			const k = h.isText ? h.text || '' : h.textBetween(E - p, x - p, void 0, '￼');
			uv(k, o.find, i).forEach((T) => {
				if (T.index === void 0) return;
				const _ = E + T.index + 1,
					C = _ + T[0].length,
					ce = { from: n.tr.mapping.map(_), to: n.tr.mapping.map(C) },
					W = o.handler({
						state: n,
						range: ce,
						match: T,
						commands: a,
						chain: c,
						can: u,
						pasteEvent: i,
						dropEvent: l
					});
				d.push(W);
			});
		}),
		d.every((h) => h !== null)
	);
}
var Ys = null,
	fv = (t) => {
		var e;
		const n = new ClipboardEvent('paste', { clipboardData: new DataTransfer() });
		return ((e = n.clipboardData) == null || e.setData('text/html', t), n);
	};
function hv(t) {
	const { editor: e, rules: n } = t;
	let r = null,
		s = !1,
		o = !1,
		i = typeof ClipboardEvent < 'u' ? new ClipboardEvent('paste') : null,
		l;
	try {
		l = typeof DragEvent < 'u' ? new DragEvent('drop') : null;
	} catch {
		l = null;
	}
	const a = ({ state: u, from: d, to: f, rule: h, pasteEvt: p }) => {
		const m = u.tr,
			g = di({ state: u, transaction: m });
		if (
			!(
				!dv({
					editor: e,
					state: g,
					from: Math.max(d - 1, 0),
					to: f.b - 1,
					rule: h,
					pasteEvent: p,
					dropEvent: l
				}) || !m.steps.length
			)
		) {
			try {
				l = typeof DragEvent < 'u' ? new DragEvent('drop') : null;
			} catch {
				l = null;
			}
			return ((i = typeof ClipboardEvent < 'u' ? new ClipboardEvent('paste') : null), m);
		}
	};
	return n.map(
		(u) =>
			new ze({
				view(d) {
					const f = (p) => {
							var m;
							((r =
								(m = d.dom.parentElement) != null && m.contains(p.target)
									? d.dom.parentElement
									: null),
								r && (Ys = e));
						},
						h = () => {
							Ys && (Ys = null);
						};
					return (
						window.addEventListener('dragstart', f),
						window.addEventListener('dragend', h),
						{
							destroy() {
								(window.removeEventListener('dragstart', f),
									window.removeEventListener('dragend', h));
							}
						}
					);
				},
				props: {
					handleDOMEvents: {
						drop: (d, f) => {
							if (((o = r === d.dom.parentElement), (l = f), !o)) {
								const h = Ys;
								h != null &&
									h.isEditable &&
									setTimeout(() => {
										const p = h.state.selection;
										p && h.commands.deleteRange({ from: p.from, to: p.to });
									}, 10);
							}
							return !1;
						},
						paste: (d, f) => {
							var h;
							const p = (h = f.clipboardData) == null ? void 0 : h.getData('text/html');
							return ((i = f), (s = !!(p != null && p.includes('data-pm-slice'))), !1);
						}
					}
				},
				appendTransaction: (d, f, h) => {
					const p = d[0],
						m = p.getMeta('uiEvent') === 'paste' && !s,
						g = p.getMeta('uiEvent') === 'drop' && !o,
						b = p.getMeta('applyPasteRules'),
						S = !!b;
					if (!m && !g && !S) return;
					if (S) {
						let { text: E } = b;
						typeof E == 'string' ? (E = E) : (E = Sa(z.from(E), h.schema));
						const { from: x } = b,
							k = x + E.length,
							M = fv(E);
						return a({ rule: u, state: h, from: x, to: { b: k }, pasteEvt: M });
					}
					const O = f.doc.content.findDiffStart(h.doc.content),
						H = f.doc.content.findDiffEnd(h.doc.content);
					if (!(!av(O) || !H || O === H.b))
						return a({ rule: u, state: h, from: O, to: H, pasteEvt: i });
				}
			})
	);
}
var gi = class {
	constructor(t, e) {
		((this.splittableMarks = []),
			(this.editor = e),
			(this.baseExtensions = t),
			(this.extensions = Sh(t)),
			(this.schema = Tb(this.extensions, e)),
			this.setupExtensions());
	}
	get commands() {
		return this.extensions.reduce((t, e) => {
			const n = {
					name: e.name,
					options: e.options,
					storage: this.editor.extensionStorage[e.name],
					editor: this.editor,
					type: Yr(e.name, this.schema)
				},
				r = ie(e, 'addCommands', n);
			return r ? { ...t, ...r() } : t;
		}, {});
	}
	get plugins() {
		const { editor: t } = this;
		return fs([...this.extensions].reverse()).flatMap((r) => {
			const s = {
					name: r.name,
					options: r.options,
					storage: this.editor.extensionStorage[r.name],
					editor: t,
					type: Yr(r.name, this.schema)
				},
				o = [],
				i = ie(r, 'addKeyboardShortcuts', s);
			let l = {};
			if (
				(r.type === 'mark' &&
					ie(r, 'exitable', s) &&
					(l.ArrowRight = () => nr.handleExit({ editor: t, mark: r })),
				i)
			) {
				const f = Object.fromEntries(
					Object.entries(i()).map(([h, p]) => [h, () => p({ editor: t })])
				);
				l = { ...l, ...f };
			}
			const a = A1(l);
			o.push(a);
			const c = ie(r, 'addInputRules', s);
			if (uu(r, t.options.enableInputRules) && c) {
				const f = c();
				if (f && f.length) {
					const h = iv({ editor: t, rules: f }),
						p = Array.isArray(h) ? h : [h];
					o.push(...p);
				}
			}
			const u = ie(r, 'addPasteRules', s);
			if (uu(r, t.options.enablePasteRules) && u) {
				const f = u();
				if (f && f.length) {
					const h = hv({ editor: t, rules: f });
					o.push(...h);
				}
			}
			const d = ie(r, 'addProseMirrorPlugins', s);
			if (d) {
				const f = d();
				o.push(...f);
			}
			return o;
		});
	}
	get attributes() {
		return wh(this.extensions);
	}
	get nodeViews() {
		const { editor: t } = this,
			{ nodeExtensions: e } = Vr(this.extensions);
		return Object.fromEntries(
			e
				.filter((n) => !!ie(n, 'addNodeView'))
				.map((n) => {
					const r = this.attributes.filter((a) => a.type === n.name),
						s = {
							name: n.name,
							options: n.options,
							storage: this.editor.extensionStorage[n.name],
							editor: t,
							type: ht(n.name, this.schema)
						},
						o = ie(n, 'addNodeView', s);
					if (!o) return [];
					const i = o();
					if (!i) return [];
					const l = (a, c, u, d, f) => {
						const h = Ns(a, r);
						return i({
							node: a,
							view: c,
							getPos: u,
							decorations: d,
							innerDecorations: f,
							editor: t,
							extension: n,
							HTMLAttributes: h
						});
					};
					return [n.name, l];
				})
		);
	}
	dispatchTransaction(t) {
		const { editor: e } = this;
		return fs([...this.extensions].reverse()).reduceRight((r, s) => {
			const o = {
					name: s.name,
					options: s.options,
					storage: this.editor.extensionStorage[s.name],
					editor: e,
					type: Yr(s.name, this.schema)
				},
				i = ie(s, 'dispatchTransaction', o);
			return i
				? (l) => {
						i.call(o, { transaction: l, next: r });
					}
				: r;
		}, t);
	}
	transformPastedHTML(t) {
		const { editor: e } = this;
		return fs([...this.extensions]).reduce(
			(r, s) => {
				const o = {
						name: s.name,
						options: s.options,
						storage: this.editor.extensionStorage[s.name],
						editor: e,
						type: Yr(s.name, this.schema)
					},
					i = ie(s, 'transformPastedHTML', o);
				return i
					? (l, a) => {
							const c = r(l, a);
							return i.call(o, c);
						}
					: r;
			},
			t || ((r) => r)
		);
	}
	get markViews() {
		const { editor: t } = this,
			{ markExtensions: e } = Vr(this.extensions);
		return Object.fromEntries(
			e
				.filter((n) => !!ie(n, 'addMarkView'))
				.map((n) => {
					const r = this.attributes.filter((l) => l.type === n.name),
						s = {
							name: n.name,
							options: n.options,
							storage: this.editor.extensionStorage[n.name],
							editor: t,
							type: Ln(n.name, this.schema)
						},
						o = ie(n, 'addMarkView', s);
					if (!o) return [];
					const i = (l, a, c) => {
						const u = Ns(l, r);
						return o()({
							mark: l,
							view: a,
							inline: c,
							editor: t,
							extension: n,
							HTMLAttributes: u,
							updateAttributes: (d) => {
								Mv(l, t, d);
							}
						});
					};
					return [n.name, i];
				})
		);
	}
	setupExtensions() {
		const t = this.extensions;
		((this.editor.extensionStorage = Object.fromEntries(t.map((e) => [e.name, e.storage]))),
			t.forEach((e) => {
				var n;
				const r = {
					name: e.name,
					options: e.options,
					storage: this.editor.extensionStorage[e.name],
					editor: this.editor,
					type: Yr(e.name, this.schema)
				};
				e.type === 'mark' &&
					((n = Fe(ie(e, 'keepOnSplit', r))) == null || n) &&
					this.splittableMarks.push(e.name);
				const s = ie(e, 'onBeforeCreate', r),
					o = ie(e, 'onCreate', r),
					i = ie(e, 'onUpdate', r),
					l = ie(e, 'onSelectionUpdate', r),
					a = ie(e, 'onTransaction', r),
					c = ie(e, 'onFocus', r),
					u = ie(e, 'onBlur', r),
					d = ie(e, 'onDestroy', r);
				(s && this.editor.on('beforeCreate', s),
					o && this.editor.on('create', o),
					i && this.editor.on('update', i),
					l && this.editor.on('selectionUpdate', l),
					a && this.editor.on('transaction', a),
					c && this.editor.on('focus', c),
					u && this.editor.on('blur', u),
					d && this.editor.on('destroy', d));
			}));
	}
};
gi.resolve = Sh;
gi.sort = fs;
gi.flatten = wa;
var pv = {};
ba(pv, {
	ClipboardTextSerializer: () => Ph,
	Commands: () => zh,
	Delete: () => Bh,
	Drop: () => $h,
	Editable: () => _h,
	FocusEvents: () => Fh,
	Keymap: () => Vh,
	Paste: () => Wh,
	Tabindex: () => jh,
	TextDirection: () => Uh,
	focusEventsPluginKey: () => Hh
});
var Ue = class Lh extends Ma {
		constructor() {
			(super(...arguments), (this.type = 'extension'));
		}
		static create(e = {}) {
			const n = typeof e == 'function' ? e() : e;
			return new Lh(n);
		}
		configure(e) {
			return super.configure(e);
		}
		extend(e) {
			const n = typeof e == 'function' ? e() : e;
			return super.extend(n);
		}
	},
	Ph = Ue.create({
		name: 'clipboardTextSerializer',
		addOptions() {
			return { blockSeparator: void 0 };
		},
		addProseMirrorPlugins() {
			return [
				new ze({
					key: new _e('clipboardTextSerializer'),
					props: {
						clipboardTextSerializer: () => {
							const { editor: t } = this,
								{ state: e, schema: n } = t,
								{ doc: r, selection: s } = e,
								{ ranges: o } = s,
								i = Math.min(...o.map((u) => u.$from.pos)),
								l = Math.max(...o.map((u) => u.$to.pos)),
								a = Ca(n);
							return Ch(
								r,
								{ from: i, to: l },
								{
									...(this.options.blockSeparator !== void 0
										? { blockSeparator: this.options.blockSeparator }
										: {}),
									textSerializers: a
								}
							);
						}
					}
				})
			];
		}
	}),
	zh = Ue.create({
		name: 'commands',
		addCommands() {
			return { ...hh };
		}
	}),
	Bh = Ue.create({
		name: 'delete',
		onUpdate({ transaction: t, appendedTransactions: e }) {
			var n, r, s;
			const o = () => {
				var i, l, a, c;
				if (
					(c =
						(a =
							(l = (i = this.editor.options.coreExtensionOptions) == null ? void 0 : i.delete) ==
							null
								? void 0
								: l.filterTransaction) == null
							? void 0
							: a.call(l, t)) != null
						? c
						: t.getMeta('y-sync$')
				)
					return;
				const u = vh(t.before, [t, ...e]);
				Eh(u).forEach((h) => {
					u.mapping.mapResult(h.oldRange.from).deletedAfter &&
						u.mapping.mapResult(h.oldRange.to).deletedBefore &&
						u.before.nodesBetween(h.oldRange.from, h.oldRange.to, (p, m) => {
							const g = m + p.nodeSize - 2,
								b = h.oldRange.from <= m && g <= h.oldRange.to;
							this.editor.emit('delete', {
								type: 'node',
								node: p,
								from: m,
								to: g,
								newFrom: u.mapping.map(m),
								newTo: u.mapping.map(g),
								deletedRange: h.oldRange,
								newRange: h.newRange,
								partial: !b,
								editor: this.editor,
								transaction: t,
								combinedTransform: u
							});
						});
				});
				const f = u.mapping;
				u.steps.forEach((h, p) => {
					var m, g;
					if (h instanceof on) {
						const b = f.slice(p).map(h.from, -1),
							S = f.slice(p).map(h.to),
							O = f.invert().map(b, -1),
							H = f.invert().map(S),
							E = (m = u.doc.nodeAt(b - 1)) == null ? void 0 : m.marks.some((k) => k.eq(h.mark)),
							x = (g = u.doc.nodeAt(S)) == null ? void 0 : g.marks.some((k) => k.eq(h.mark));
						this.editor.emit('delete', {
							type: 'mark',
							mark: h.mark,
							from: h.from,
							to: h.to,
							deletedRange: { from: O, to: H },
							newRange: { from: b, to: S },
							partial: !!(x || E),
							editor: this.editor,
							transaction: t,
							combinedTransform: u
						});
					}
				});
			};
			(s =
				(r = (n = this.editor.options.coreExtensionOptions) == null ? void 0 : n.delete) == null
					? void 0
					: r.async) == null || s
				? setTimeout(o, 0)
				: o();
		}
	}),
	$h = Ue.create({
		name: 'drop',
		addProseMirrorPlugins() {
			return [
				new ze({
					key: new _e('tiptapDrop'),
					props: {
						handleDrop: (t, e, n, r) => {
							this.editor.emit('drop', { editor: this.editor, event: e, slice: n, moved: r });
						}
					}
				})
			];
		}
	}),
	_h = Ue.create({
		name: 'editable',
		addProseMirrorPlugins() {
			return [
				new ze({ key: new _e('editable'), props: { editable: () => this.editor.options.editable } })
			];
		}
	}),
	Hh = new _e('focusEvents'),
	Fh = Ue.create({
		name: 'focusEvents',
		addProseMirrorPlugins() {
			const { editor: t } = this;
			return [
				new ze({
					key: Hh,
					props: {
						handleDOMEvents: {
							focus: (e, n) => {
								t.isFocused = !0;
								const r = t.state.tr.setMeta('focus', { event: n }).setMeta('addToHistory', !1);
								return (e.dispatch(r), !1);
							},
							blur: (e, n) => {
								t.isFocused = !1;
								const r = t.state.tr.setMeta('blur', { event: n }).setMeta('addToHistory', !1);
								return (e.dispatch(r), !1);
							}
						}
					}
				})
			];
		}
	}),
	Vh = Ue.create({
		name: 'keymap',
		addKeyboardShortcuts() {
			const t = () =>
					this.editor.commands.first(({ commands: i }) => [
						() => i.undoInputRule(),
						() =>
							i.command(({ tr: l }) => {
								const { selection: a, doc: c } = l,
									{ empty: u, $anchor: d } = a,
									{ pos: f, parent: h } = d,
									p = d.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : d,
									m = p.parent.type.spec.isolating,
									g = d.pos - d.parentOffset,
									b = m && p.parent.childCount === 1 ? g === d.pos : ve.atStart(c).from === f;
								return !u ||
									!h.type.isTextblock ||
									h.textContent.length ||
									!b ||
									(b && d.parent.type.name === 'paragraph')
									? !1
									: i.clearNodes();
							}),
						() => i.deleteSelection(),
						() => i.joinBackward(),
						() => i.selectNodeBackward()
					]),
				e = () =>
					this.editor.commands.first(({ commands: i }) => [
						() => i.deleteSelection(),
						() => i.deleteCurrentNode(),
						() => i.joinForward(),
						() => i.selectNodeForward()
					]),
				r = {
					Enter: () =>
						this.editor.commands.first(({ commands: i }) => [
							() => i.newlineInCode(),
							() => i.createParagraphNear(),
							() => i.liftEmptyBlock(),
							() => i.splitBlock()
						]),
					'Mod-Enter': () => this.editor.commands.exitCode(),
					Backspace: t,
					'Mod-Backspace': t,
					'Shift-Backspace': t,
					Delete: e,
					'Mod-Delete': e,
					'Mod-a': () => this.editor.commands.selectAll()
				},
				s = { ...r },
				o = {
					...r,
					'Ctrl-h': t,
					'Alt-Backspace': t,
					'Ctrl-d': e,
					'Ctrl-Alt-Backspace': e,
					'Alt-Delete': e,
					'Alt-d': e,
					'Ctrl-a': () => this.editor.commands.selectTextblockStart(),
					'Ctrl-e': () => this.editor.commands.selectTextblockEnd()
				};
			return Ao() || yh() ? o : s;
		},
		addProseMirrorPlugins() {
			return [
				new ze({
					key: new _e('clearDocument'),
					appendTransaction: (t, e, n) => {
						if (t.some((m) => m.getMeta('composition'))) return;
						const r = t.some((m) => m.docChanged) && !e.doc.eq(n.doc),
							s = t.some((m) => m.getMeta('preventClearDocument'));
						if (!r || s) return;
						const { empty: o, from: i, to: l } = e.selection,
							a = ve.atStart(e.doc).from,
							c = ve.atEnd(e.doc).to;
						if (o || !(i === a && l === c) || !mi(n.doc)) return;
						const f = n.tr,
							h = di({ state: n, transaction: f }),
							{ commands: p } = new fi({ editor: this.editor, state: h });
						if ((p.clearNodes(), !!f.steps.length)) return f;
					}
				})
			];
		}
	}),
	Wh = Ue.create({
		name: 'paste',
		addProseMirrorPlugins() {
			return [
				new ze({
					key: new _e('tiptapPaste'),
					props: {
						handlePaste: (t, e, n) => {
							this.editor.emit('paste', { editor: this.editor, event: e, slice: n });
						}
					}
				})
			];
		}
	}),
	jh = Ue.create({
		name: 'tabindex',
		addProseMirrorPlugins() {
			return [
				new ze({
					key: new _e('tabindex'),
					props: { attributes: () => (this.editor.isEditable ? { tabindex: '0' } : {}) }
				})
			];
		}
	}),
	Uh = Ue.create({
		name: 'textDirection',
		addOptions() {
			return { direction: void 0 };
		},
		addGlobalAttributes() {
			if (!this.options.direction) return [];
			const { nodeExtensions: t } = Vr(this.extensions);
			return [
				{
					types: t.filter((e) => e.name !== 'text').map((e) => e.name),
					attributes: {
						dir: {
							default: this.options.direction,
							parseHTML: (e) => {
								const n = e.getAttribute('dir');
								return n && (n === 'ltr' || n === 'rtl' || n === 'auto')
									? n
									: this.options.direction;
							},
							renderHTML: (e) => (e.dir ? { dir: e.dir } : {})
						}
					}
				}
			];
		},
		addProseMirrorPlugins() {
			return [
				new ze({
					key: new _e('textDirection'),
					props: {
						attributes: () => {
							const t = this.options.direction;
							return t ? { dir: t } : {};
						}
					}
				})
			];
		}
	}),
	mv = class is {
		constructor(e, n, r = !1, s = null) {
			((this.currentNode = null),
				(this.actualDepth = null),
				(this.isBlock = r),
				(this.resolvedPos = e),
				(this.editor = n),
				(this.currentNode = s));
		}
		get name() {
			return this.node.type.name;
		}
		get node() {
			return this.currentNode || this.resolvedPos.node();
		}
		get element() {
			return this.editor.view.domAtPos(this.pos).node;
		}
		get depth() {
			var e;
			return (e = this.actualDepth) != null ? e : this.resolvedPos.depth;
		}
		get pos() {
			return this.resolvedPos.pos;
		}
		get content() {
			return this.node.content;
		}
		set content(e) {
			let n = this.from,
				r = this.to;
			if (this.isBlock) {
				if (this.content.size === 0) {
					`${this.name}${this.pos}`;
					return;
				}
				((n = this.from + 1), (r = this.to - 1));
			}
			this.editor.commands.insertContentAt({ from: n, to: r }, e);
		}
		get attributes() {
			return this.node.attrs;
		}
		get textContent() {
			return this.node.textContent;
		}
		get size() {
			return this.node.nodeSize;
		}
		get from() {
			return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
		}
		get range() {
			return { from: this.from, to: this.to };
		}
		get to() {
			return this.isBlock
				? this.pos + this.size
				: this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
		}
		get parent() {
			if (this.depth === 0) return null;
			const e = this.resolvedPos.start(this.resolvedPos.depth - 1),
				n = this.resolvedPos.doc.resolve(e);
			return new is(n, this.editor);
		}
		get before() {
			let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
			return (
				e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)),
				new is(e, this.editor)
			);
		}
		get after() {
			let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
			return (
				e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)),
				new is(e, this.editor)
			);
		}
		get children() {
			const e = [];
			return (
				this.node.content.forEach((n, r) => {
					const s = n.isBlock && !n.isTextblock,
						o = n.isAtom && !n.isText,
						i = n.isInline,
						l = this.pos + r + (o ? 0 : 1);
					if (l < 0 || l > this.resolvedPos.doc.nodeSize - 2) return;
					const a = this.resolvedPos.doc.resolve(l);
					if (!s && !i && a.depth <= this.depth) return;
					const c = new is(a, this.editor, s, s || i ? n : null);
					(s && (c.actualDepth = this.depth + 1), e.push(c));
				}),
				e
			);
		}
		get firstChild() {
			return this.children[0] || null;
		}
		get lastChild() {
			const e = this.children;
			return e[e.length - 1] || null;
		}
		closest(e, n = {}) {
			let r = null,
				s = this.parent;
			for (; s && !r; ) {
				if (s.node.type.name === e)
					if (Object.keys(n).length > 0) {
						const o = s.node.attrs,
							i = Object.keys(n);
						for (let l = 0; l < i.length; l += 1) {
							const a = i[l];
							if (o[a] !== n[a]) break;
						}
					} else r = s;
				s = s.parent;
			}
			return r;
		}
		querySelector(e, n = {}) {
			return this.querySelectorAll(e, n, !0)[0] || null;
		}
		querySelectorAll(e, n = {}, r = !1) {
			let s = [];
			if (!this.children || this.children.length === 0) return s;
			const o = Object.keys(n);
			return (
				this.children.forEach((i) => {
					(r && s.length > 0) ||
						(i.node.type.name === e && o.every((a) => n[a] === i.node.attrs[a]) && s.push(i),
						!(r && s.length > 0) && (s = s.concat(i.querySelectorAll(e, n, r))));
				}),
				s
			);
		}
		setAttribute(e) {
			const { tr: n } = this.editor.state;
			(n.setNodeMarkup(this.from, void 0, { ...this.node.attrs, ...e }),
				this.editor.view.dispatch(n));
		}
	},
	gv = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`;
function yv(t, e, n) {
	const r = document.querySelector('style[data-tiptap-style]');
	if (r !== null) return r;
	const s = document.createElement('style');
	return (
		e && s.setAttribute('nonce', e),
		s.setAttribute('data-tiptap-style', ''),
		(s.innerHTML = t),
		document.getElementsByTagName('head')[0].appendChild(s),
		s
	);
}
var bv = class extends sv {
	constructor(t = {}) {
		(super(),
			(this.css = null),
			(this.className = 'tiptap'),
			(this.editorView = null),
			(this.isFocused = !1),
			(this.isInitialized = !1),
			(this.extensionStorage = {}),
			(this.instanceId = Math.random().toString(36).slice(2, 9)),
			(this.options = {
				element: typeof document < 'u' ? document.createElement('div') : null,
				content: '',
				injectCSS: !0,
				injectNonce: void 0,
				extensions: [],
				autofocus: !1,
				editable: !0,
				textDirection: void 0,
				editorProps: {},
				parseOptions: {},
				coreExtensionOptions: {},
				enableInputRules: !0,
				enablePasteRules: !0,
				enableCoreExtensions: !0,
				enableContentCheck: !1,
				emitContentError: !1,
				onBeforeCreate: () => null,
				onCreate: () => null,
				onMount: () => null,
				onUnmount: () => null,
				onUpdate: () => null,
				onSelectionUpdate: () => null,
				onTransaction: () => null,
				onFocus: () => null,
				onBlur: () => null,
				onDestroy: () => null,
				onContentError: ({ error: r }) => {
					throw r;
				},
				onPaste: () => null,
				onDrop: () => null,
				onDelete: () => null,
				enableExtensionDispatchTransaction: !0
			}),
			(this.isCapturingTransaction = !1),
			(this.capturedTransaction = null),
			(this.utils = { getUpdatedPosition: Pb, createMappablePosition: zb }),
			this.setOptions(t),
			this.createExtensionManager(),
			this.createCommandManager(),
			this.createSchema(),
			this.on('beforeCreate', this.options.onBeforeCreate),
			this.emit('beforeCreate', { editor: this }),
			this.on('mount', this.options.onMount),
			this.on('unmount', this.options.onUnmount),
			this.on('contentError', this.options.onContentError),
			this.on('create', this.options.onCreate),
			this.on('update', this.options.onUpdate),
			this.on('selectionUpdate', this.options.onSelectionUpdate),
			this.on('transaction', this.options.onTransaction),
			this.on('focus', this.options.onFocus),
			this.on('blur', this.options.onBlur),
			this.on('destroy', this.options.onDestroy),
			this.on('drop', ({ event: r, slice: s, moved: o }) => this.options.onDrop(r, s, o)),
			this.on('paste', ({ event: r, slice: s }) => this.options.onPaste(r, s)),
			this.on('delete', this.options.onDelete));
		const e = this.createDoc(),
			n = mh(e, this.options.autofocus);
		((this.editorState = Lr.create({ doc: e, schema: this.schema, selection: n || void 0 })),
			this.options.element && this.mount(this.options.element));
	}
	mount(t) {
		if (typeof document > 'u')
			throw new Error(
				"[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment."
			);
		(this.createView(t),
			this.emit('mount', { editor: this }),
			this.css && !document.head.contains(this.css) && document.head.appendChild(this.css),
			window.setTimeout(() => {
				this.isDestroyed ||
					(this.options.autofocus !== !1 &&
						this.options.autofocus !== null &&
						this.commands.focus(this.options.autofocus),
					this.emit('create', { editor: this }),
					(this.isInitialized = !0));
			}, 0));
	}
	unmount() {
		if (this.editorView) {
			const t = this.editorView.dom;
			(t != null && t.editor && delete t.editor, this.editorView.destroy());
		}
		if (
			((this.editorView = null),
			(this.isInitialized = !1),
			this.css && !document.querySelectorAll(`.${this.className}`).length)
		)
			try {
				typeof this.css.remove == 'function'
					? this.css.remove()
					: this.css.parentNode && this.css.parentNode.removeChild(this.css);
			} catch (t) {
				console.warn('Failed to remove CSS element:', t);
			}
		((this.css = null), this.emit('unmount', { editor: this }));
	}
	get storage() {
		return this.extensionStorage;
	}
	get commands() {
		return this.commandManager.commands;
	}
	chain() {
		return this.commandManager.chain();
	}
	can() {
		return this.commandManager.can();
	}
	injectCSS() {
		this.options.injectCSS &&
			typeof document < 'u' &&
			(this.css = yv(gv, this.options.injectNonce));
	}
	setOptions(t = {}) {
		((this.options = { ...this.options, ...t }),
			!(!this.editorView || !this.state || this.isDestroyed) &&
				(this.options.editorProps && this.view.setProps(this.options.editorProps),
				this.view.updateState(this.state)));
	}
	setEditable(t, e = !0) {
		(this.setOptions({ editable: t }),
			e &&
				this.emit('update', {
					editor: this,
					transaction: this.state.tr,
					appendedTransactions: []
				}));
	}
	get isEditable() {
		return this.options.editable && this.view && this.view.editable;
	}
	get view() {
		return this.editorView
			? this.editorView
			: new Proxy(
					{
						state: this.editorState,
						updateState: (t) => {
							this.editorState = t;
						},
						dispatch: (t) => {
							this.dispatchTransaction(t);
						},
						composing: !1,
						dragging: null,
						editable: !0,
						isDestroyed: !1
					},
					{
						get: (t, e) => {
							if (this.editorView) return this.editorView[e];
							if (e === 'state') return this.editorState;
							if (e in t) return Reflect.get(t, e);
							throw new Error(
								`[tiptap error]: The editor view is not available. Cannot access view['${e}']. The editor may not be mounted yet.`
							);
						}
					}
				);
	}
	get state() {
		return (this.editorView && (this.editorState = this.view.state), this.editorState);
	}
	registerPlugin(t, e) {
		const n = xh(e) ? e(t, [...this.state.plugins]) : [...this.state.plugins, t],
			r = this.state.reconfigure({ plugins: n });
		return (this.view.updateState(r), r);
	}
	unregisterPlugin(t) {
		if (this.isDestroyed) return;
		const e = this.state.plugins;
		let n = e;
		if (
			([].concat(t).forEach((s) => {
				const o = typeof s == 'string' ? `${s}$` : s.key;
				n = n.filter((i) => !i.key.startsWith(o));
			}),
			e.length === n.length)
		)
			return;
		const r = this.state.reconfigure({ plugins: n });
		return (this.view.updateState(r), r);
	}
	createExtensionManager() {
		var t, e;
		const r = [
			...(this.options.enableCoreExtensions
				? [
						_h,
						Ph.configure({
							blockSeparator:
								(e =
									(t = this.options.coreExtensionOptions) == null
										? void 0
										: t.clipboardTextSerializer) == null
									? void 0
									: e.blockSeparator
						}),
						zh,
						Fh,
						Vh,
						jh,
						$h,
						Wh,
						Bh,
						Uh.configure({ direction: this.options.textDirection })
					].filter((s) =>
						typeof this.options.enableCoreExtensions == 'object'
							? this.options.enableCoreExtensions[s.name] !== !1
							: !0
					)
				: []),
			...this.options.extensions
		].filter((s) => ['extension', 'node', 'mark'].includes(s == null ? void 0 : s.type));
		this.extensionManager = new gi(r, this);
	}
	createCommandManager() {
		this.commandManager = new fi({ editor: this });
	}
	createSchema() {
		this.schema = this.extensionManager.schema;
	}
	createDoc() {
		let t;
		try {
			t = xl(this.options.content, this.schema, this.options.parseOptions, {
				errorOnInvalidContent: this.options.enableContentCheck
			});
		} catch (e) {
			if (
				!(e instanceof Error) ||
				!['[tiptap error]: Invalid JSON content', '[tiptap error]: Invalid HTML content'].includes(
					e.message
				)
			)
				throw e;
			(this.emit('contentError', {
				editor: this,
				error: e,
				disableCollaboration: () => {
					('collaboration' in this.storage &&
						typeof this.storage.collaboration == 'object' &&
						this.storage.collaboration &&
						(this.storage.collaboration.isDisabled = !0),
						(this.options.extensions = this.options.extensions.filter(
							(n) => n.name !== 'collaboration'
						)),
						this.createExtensionManager());
				}
			}),
				(t = xl(this.options.content, this.schema, this.options.parseOptions, {
					errorOnInvalidContent: !1
				})));
		}
		return t;
	}
	createView(t) {
		const { editorProps: e, enableExtensionDispatchTransaction: n } = this.options,
			r = e.dispatchTransaction || this.dispatchTransaction.bind(this),
			s = n ? this.extensionManager.dispatchTransaction(r) : r,
			o = e.transformPastedHTML,
			i = this.extensionManager.transformPastedHTML(o);
		this.editorView = new eh(t, {
			...e,
			attributes: { role: 'textbox', ...(e == null ? void 0 : e.attributes) },
			dispatchTransaction: s,
			transformPastedHTML: i,
			state: this.editorState,
			markViews: this.extensionManager.markViews,
			nodeViews: this.extensionManager.nodeViews
		});
		const l = this.state.reconfigure({ plugins: this.extensionManager.plugins });
		(this.view.updateState(l), this.prependClass(), this.injectCSS());
		const a = this.view.dom;
		a.editor = this;
	}
	createNodeViews() {
		this.view.isDestroyed ||
			this.view.setProps({
				markViews: this.extensionManager.markViews,
				nodeViews: this.extensionManager.nodeViews
			});
	}
	prependClass() {
		this.view.dom.className = `${this.className} ${this.view.dom.className}`;
	}
	captureTransaction(t) {
		((this.isCapturingTransaction = !0), t(), (this.isCapturingTransaction = !1));
		const e = this.capturedTransaction;
		return ((this.capturedTransaction = null), e);
	}
	dispatchTransaction(t) {
		if (this.view.isDestroyed) return;
		if (this.isCapturingTransaction) {
			if (!this.capturedTransaction) {
				this.capturedTransaction = t;
				return;
			}
			t.steps.forEach((c) => {
				var u;
				return (u = this.capturedTransaction) == null ? void 0 : u.step(c);
			});
			return;
		}
		const { state: e, transactions: n } = this.state.applyTransaction(t),
			r = !this.state.selection.eq(e.selection),
			s = n.includes(t),
			o = this.state;
		if ((this.emit('beforeTransaction', { editor: this, transaction: t, nextState: e }), !s))
			return;
		(this.view.updateState(e),
			this.emit('transaction', { editor: this, transaction: t, appendedTransactions: n.slice(1) }),
			r && this.emit('selectionUpdate', { editor: this, transaction: t }));
		const i = n.findLast((c) => c.getMeta('focus') || c.getMeta('blur')),
			l = i == null ? void 0 : i.getMeta('focus'),
			a = i == null ? void 0 : i.getMeta('blur');
		(l && this.emit('focus', { editor: this, event: l.event, transaction: i }),
			a && this.emit('blur', { editor: this, event: a.event, transaction: i }),
			!(t.getMeta('preventUpdate') || !n.some((c) => c.docChanged) || o.doc.eq(e.doc)) &&
				this.emit('update', { editor: this, transaction: t, appendedTransactions: n.slice(1) }));
	}
	getAttributes(t) {
		return Mh(this.state, t);
	}
	isActive(t, e) {
		const n = typeof t == 'string' ? t : null,
			r = typeof t == 'string' ? e : t;
		return Db(this.state, n, r);
	}
	getJSON() {
		return this.state.doc.toJSON();
	}
	getHTML() {
		return Sa(this.state.doc.content, this.schema);
	}
	getText(t) {
		const {
			blockSeparator: e = `

`,
			textSerializers: n = {}
		} = t || {};
		return Th(this.state.doc, { blockSeparator: e, textSerializers: { ...Ca(this.schema), ...n } });
	}
	get isEmpty() {
		return mi(this.state.doc);
	}
	destroy() {
		(this.emit('destroy'), this.unmount(), this.removeAllListeners());
	}
	get isDestroyed() {
		var t, e;
		return (e = (t = this.editorView) == null ? void 0 : t.isDestroyed) != null ? e : !0;
	}
	$node(t, e) {
		var n;
		return ((n = this.$doc) == null ? void 0 : n.querySelector(t, e)) || null;
	}
	$nodes(t, e) {
		var n;
		return ((n = this.$doc) == null ? void 0 : n.querySelectorAll(t, e)) || null;
	}
	$pos(t) {
		const e = this.state.doc.resolve(t);
		return new mv(e, this);
	}
	get $doc() {
		return this.$pos(0);
	}
};
function Yn(t) {
	return new Hs({
		find: t.find,
		handler: ({ state: e, range: n, match: r }) => {
			const s = Fe(t.getAttributes, void 0, r);
			if (s === !1 || s === null) return null;
			const { tr: o } = e,
				i = r[r.length - 1],
				l = r[0];
			if (i) {
				const a = l.search(/\S/),
					c = n.from + l.indexOf(i),
					u = c + i.length;
				if (
					Ta(n.from, n.to, e.doc)
						.filter((h) => h.mark.type.excluded.find((m) => m === t.type && m !== h.mark.type))
						.filter((h) => h.to > c).length
				)
					return null;
				(u < n.to && o.delete(u, n.to), c > n.from && o.delete(n.from + a, c));
				const f = n.from + a + i.length;
				(o.addMark(n.from + a, f, t.type.create(s || {})), o.removeStoredMark(t.type));
			}
		},
		undoable: t.undoable
	});
}
function qh(t) {
	return new Hs({
		find: t.find,
		handler: ({ state: e, range: n, match: r }) => {
			const s = Fe(t.getAttributes, void 0, r) || {},
				{ tr: o } = e,
				i = n.from;
			let l = n.to;
			const a = t.type.create(s);
			if (r[1]) {
				const c = r[0].lastIndexOf(r[1]);
				let u = i + c;
				u > l ? (u = l) : (l = u + r[1].length);
				const d = r[0][r[0].length - 1];
				(o.insertText(d, i + r[0].length - 1), o.replaceWith(u, l, a));
			} else if (r[0]) {
				const c = t.type.isInline ? i : i - 1;
				o.insert(c, t.type.create(s)).delete(o.mapping.map(i), o.mapping.map(l));
			}
			o.scrollIntoView();
		},
		undoable: t.undoable
	});
}
function Cl(t) {
	return new Hs({
		find: t.find,
		handler: ({ state: e, range: n, match: r }) => {
			const s = e.doc.resolve(n.from),
				o = Fe(t.getAttributes, void 0, r) || {};
			if (!s.node(-1).canReplaceWith(s.index(-1), s.indexAfter(-1), t.type)) return null;
			e.tr.delete(n.from, n.to).setBlockType(n.from, n.from, t.type, o);
		},
		undoable: t.undoable
	});
}
function at(t) {
	return new Hs({
		find: t.find,
		handler: ({ state: e, range: n, match: r }) => {
			let s = t.replace,
				o = n.from;
			const i = n.to;
			if (r[1]) {
				const l = r[0].lastIndexOf(r[1]);
				((s += r[0].slice(l + r[1].length)), (o += l));
				const a = o - i;
				a > 0 && ((s = r[0].slice(l - a, l) + s), (o = i));
			}
			e.tr.insertText(s, o, i);
		},
		undoable: t.undoable
	});
}
function Wr(t) {
	return new Hs({
		find: t.find,
		handler: ({ state: e, range: n, match: r, chain: s }) => {
			const o = Fe(t.getAttributes, void 0, r) || {},
				i = e.tr.delete(n.from, n.to),
				a = i.doc.resolve(n.from).blockRange(),
				c = a && ea(a, t.type, o);
			if (!c) return null;
			if ((i.wrap(a, c), t.keepMarks && t.editor)) {
				const { selection: d, storedMarks: f } = e,
					{ splittableMarks: h } = t.editor.extensionManager,
					p = f || (d.$to.parentOffset && d.$from.marks());
				if (p) {
					const m = p.filter((g) => h.includes(g.type.name));
					i.ensureMarks(m);
				}
			}
			if (t.keepAttributes) {
				const d =
					t.type.name === 'bulletList' || t.type.name === 'orderedList' ? 'listItem' : 'taskList';
				s().updateAttributes(d, o).run();
			}
			const u = i.doc.resolve(n.from - 1).nodeBefore;
			u &&
				u.type === t.type &&
				er(i.doc, n.from - 1) &&
				(!t.joinPredicate || t.joinPredicate(r, u)) &&
				i.join(n.from - 1);
		},
		undoable: t.undoable
	});
}
function vv(t, e) {
	const { selection: n } = t,
		{ $from: r } = n;
	if (n instanceof fe) {
		const o = r.index();
		return r.parent.canReplaceWith(o, o + 1, e);
	}
	let s = r.depth;
	for (; s >= 0; ) {
		const o = r.index(s);
		if (r.node(s).contentMatchAt(o).matchType(e)) return !0;
		s -= 1;
	}
	return !1;
}
function kv(t) {
	return t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
var xv = {};
ba(xv, {
	createAtomBlockMarkdownSpec: () => wv,
	createBlockMarkdownSpec: () => Sv,
	createInlineMarkdownSpec: () => Kh,
	parseAttributes: () => Ea,
	parseIndentedBlocks: () => Tl,
	renderNestedMarkdownContent: () => Na,
	serializeAttributes: () => Aa
});
function Ea(t) {
	if (!(t != null && t.trim())) return {};
	const e = {},
		n = [],
		r = t.replace(/["']([^"']*)["']/g, (c) => (n.push(c), `__QUOTED_${n.length - 1}__`)),
		s = r.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
	if (s) {
		const c = s.map((u) => u.trim().slice(1));
		e.class = c.join(' ');
	}
	const o = r.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
	o && (e.id = o[1]);
	const i = /([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g;
	Array.from(r.matchAll(i)).forEach(([, c, u]) => {
		var d;
		const f = parseInt(((d = u.match(/__QUOTED_(\d+)__/)) == null ? void 0 : d[1]) || '0', 10),
			h = n[f];
		h && (e[c] = h.slice(1, -1));
	});
	const a = r
		.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, '')
		.replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, '')
		.replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, '')
		.trim();
	return (
		a &&
			a
				.split(/\s+/)
				.filter(Boolean)
				.forEach((u) => {
					u.match(/^[a-zA-Z][\w-]*$/) && (e[u] = !0);
				}),
		e
	);
}
function Aa(t) {
	if (!t || Object.keys(t).length === 0) return '';
	const e = [];
	return (
		t.class &&
			String(t.class)
				.split(/\s+/)
				.filter(Boolean)
				.forEach((r) => e.push(`.${r}`)),
		t.id && e.push(`#${t.id}`),
		Object.entries(t).forEach(([n, r]) => {
			n === 'class' ||
				n === 'id' ||
				(r === !0 ? e.push(n) : r !== !1 && r != null && e.push(`${n}="${String(r)}"`));
		}),
		e.join(' ')
	);
}
function wv(t) {
	const {
			nodeName: e,
			name: n,
			parseAttributes: r = Ea,
			serializeAttributes: s = Aa,
			defaultAttributes: o = {},
			requiredAttributes: i = [],
			allowedAttributes: l
		} = t,
		a = n || e,
		c = (u) => {
			if (!l) return u;
			const d = {};
			return (
				l.forEach((f) => {
					f in u && (d[f] = u[f]);
				}),
				d
			);
		};
	return {
		parseMarkdown: (u, d) => {
			const f = { ...o, ...u.attributes };
			return d.createNode(e, f, []);
		},
		markdownTokenizer: {
			name: e,
			level: 'block',
			start(u) {
				var d;
				const f = new RegExp(`^:::${a}(?:\\s|$)`, 'm'),
					h = (d = u.match(f)) == null ? void 0 : d.index;
				return h !== void 0 ? h : -1;
			},
			tokenize(u, d, f) {
				const h = new RegExp(`^:::${a}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`),
					p = u.match(h);
				if (!p) return;
				const m = p[1] || '',
					g = r(m);
				if (!i.find((S) => !(S in g))) return { type: e, raw: p[0], attributes: g };
			}
		},
		renderMarkdown: (u) => {
			const d = c(u.attrs || {}),
				f = s(d),
				h = f ? ` {${f}}` : '';
			return `:::${a}${h} :::`;
		}
	};
}
function Sv(t) {
	const {
			nodeName: e,
			name: n,
			getContent: r,
			parseAttributes: s = Ea,
			serializeAttributes: o = Aa,
			defaultAttributes: i = {},
			content: l = 'block',
			allowedAttributes: a
		} = t,
		c = n || e,
		u = (d) => {
			if (!a) return d;
			const f = {};
			return (
				a.forEach((h) => {
					h in d && (f[h] = d[h]);
				}),
				f
			);
		};
	return {
		parseMarkdown: (d, f) => {
			let h;
			if (r) {
				const m = r(d);
				h = typeof m == 'string' ? [{ type: 'text', text: m }] : m;
			} else
				l === 'block' ? (h = f.parseChildren(d.tokens || [])) : (h = f.parseInline(d.tokens || []));
			const p = { ...i, ...d.attributes };
			return f.createNode(e, p, h);
		},
		markdownTokenizer: {
			name: e,
			level: 'block',
			start(d) {
				var f;
				const h = new RegExp(`^:::${c}`, 'm'),
					p = (f = d.match(h)) == null ? void 0 : f.index;
				return p !== void 0 ? p : -1;
			},
			tokenize(d, f, h) {
				var p;
				const m = new RegExp(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*\\n`),
					g = d.match(m);
				if (!g) return;
				const [b, S = ''] = g,
					O = s(S);
				let H = 1;
				const E = b.length;
				let x = '';
				const k = /^:::([\w-]*)(\s.*)?/gm,
					M = d.slice(E);
				for (k.lastIndex = 0; ; ) {
					const T = k.exec(M);
					if (T === null) break;
					const _ = T.index,
						C = T[1];
					if (!((p = T[2]) != null && p.endsWith(':::'))) {
						if (C) H += 1;
						else if (((H -= 1), H === 0)) {
							const ce = M.slice(0, _);
							x = ce.trim();
							const W = d.slice(0, E + _ + T[0].length);
							let ee = [];
							if (x)
								if (l === 'block')
									for (
										ee = h.blockTokens(ce),
											ee.forEach((U) => {
												U.text &&
													(!U.tokens || U.tokens.length === 0) &&
													(U.tokens = h.inlineTokens(U.text));
											});
										ee.length > 0;
									) {
										const U = ee[ee.length - 1];
										if (U.type === 'paragraph' && (!U.text || U.text.trim() === '')) ee.pop();
										else break;
									}
								else ee = h.inlineTokens(x);
							return { type: e, raw: W, attributes: O, content: x, tokens: ee };
						}
					}
				}
			}
		},
		renderMarkdown: (d, f) => {
			const h = u(d.attrs || {}),
				p = o(h),
				m = p ? ` {${p}}` : '',
				g = f.renderChildren(
					d.content || [],
					`

`
				);
			return `:::${c}${m}

${g}

:::`;
		}
	};
}
function Cv(t) {
	if (!t.trim()) return {};
	const e = {},
		n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
	let r = n.exec(t);
	for (; r !== null; ) {
		const [, s, o, i] = r;
		((e[s] = o || i), (r = n.exec(t)));
	}
	return e;
}
function Tv(t) {
	return Object.entries(t)
		.filter(([, e]) => e != null)
		.map(([e, n]) => `${e}="${n}"`)
		.join(' ');
}
function Kh(t) {
	const {
			nodeName: e,
			name: n,
			getContent: r,
			parseAttributes: s = Cv,
			serializeAttributes: o = Tv,
			defaultAttributes: i = {},
			selfClosing: l = !1,
			allowedAttributes: a
		} = t,
		c = n || e,
		u = (f) => {
			if (!a) return f;
			const h = {};
			return (
				a.forEach((p) => {
					const m = typeof p == 'string' ? p : p.name,
						g = typeof p == 'string' ? void 0 : p.skipIfDefault;
					if (m in f) {
						const b = f[m];
						if (g !== void 0 && b === g) return;
						h[m] = b;
					}
				}),
				h
			);
		},
		d = c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	return {
		parseMarkdown: (f, h) => {
			const p = { ...i, ...f.attributes };
			if (l) return h.createNode(e, p);
			const m = r ? r(f) : f.content || '';
			return m ? h.createNode(e, p, [h.createTextNode(m)]) : h.createNode(e, p, []);
		},
		markdownTokenizer: {
			name: e,
			level: 'inline',
			start(f) {
				const h = l
						? new RegExp(`\\[${d}\\s*[^\\]]*\\]`)
						: new RegExp(`\\[${d}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${d}\\]`),
					p = f.match(h),
					m = p == null ? void 0 : p.index;
				return m !== void 0 ? m : -1;
			},
			tokenize(f, h, p) {
				const m = l
						? new RegExp(`^\\[${d}\\s*([^\\]]*)\\]`)
						: new RegExp(`^\\[${d}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${d}\\]`),
					g = f.match(m);
				if (!g) return;
				let b = '',
					S = '';
				if (l) {
					const [, H] = g;
					S = H;
				} else {
					const [, H, E] = g;
					((S = H), (b = E || ''));
				}
				const O = s(S.trim());
				return { type: e, raw: g[0], content: b.trim(), attributes: O };
			}
		},
		renderMarkdown: (f) => {
			let h = '';
			r
				? (h = r(f))
				: f.content &&
					f.content.length > 0 &&
					(h = f.content
						.filter((b) => b.type === 'text')
						.map((b) => b.text)
						.join(''));
			const p = u(f.attrs || {}),
				m = o(p),
				g = m ? ` ${m}` : '';
			return l ? `[${c}${g}]` : `[${c}${g}]${h}[/${c}]`;
		}
	};
}
function Tl(t, e, n) {
	var r, s, o, i;
	const l = t.split(`
`),
		a = [];
	let c = '',
		u = 0;
	const d = e.baseIndentSize || 2;
	for (; u < l.length; ) {
		const f = l[u],
			h = f.match(e.itemPattern);
		if (!h) {
			if (a.length > 0) break;
			if (f.trim() === '') {
				((u += 1),
					(c = `${c}${f}
`));
				continue;
			} else return;
		}
		const p = e.extractItemData(h),
			{ indentLevel: m, mainContent: g } = p;
		c = `${c}${f}
`;
		const b = [g];
		for (u += 1; u < l.length; ) {
			const E = l[u];
			if (E.trim() === '') {
				const k = l.slice(u + 1).findIndex((_) => _.trim() !== '');
				if (k === -1) break;
				if (
					(((s = (r = l[u + 1 + k].match(/^(\s*)/)) == null ? void 0 : r[1]) == null
						? void 0
						: s.length) || 0) > m
				) {
					(b.push(E),
						(c = `${c}${E}
`),
						(u += 1));
					continue;
				} else break;
			}
			if (
				(((i = (o = E.match(/^(\s*)/)) == null ? void 0 : o[1]) == null ? void 0 : i.length) || 0) >
				m
			)
				(b.push(E),
					(c = `${c}${E}
`),
					(u += 1));
			else break;
		}
		let S;
		const O = b.slice(1);
		if (O.length > 0) {
			const E = O.map((x) => x.slice(m + d)).join(`
`);
			E.trim() && (e.customNestedParser ? (S = e.customNestedParser(E)) : (S = n.blockTokens(E)));
		}
		const H = e.createToken(p, S);
		a.push(H);
	}
	if (a.length !== 0) return { items: a, raw: c };
}
function Na(t, e, n, r) {
	if (!t || !Array.isArray(t.content)) return '';
	const s = typeof n == 'function' ? n(r) : n,
		[o, ...i] = t.content,
		l = e.renderChildren([o]);
	let a = `${s}${l}`;
	return (
		i &&
			i.length > 0 &&
			i.forEach((c, u) => {
				var d, f;
				const h =
					(f = (d = e.renderChild) == null ? void 0 : d.call(e, c, u + 1)) != null
						? f
						: e.renderChildren([c]);
				if (h != null) {
					const p = h
						.split(
							`
`
						)
						.map((m) => (m ? e.indent(m) : e.indent(''))).join(`
`);
					a +=
						c.type === 'paragraph'
							? `

${p}`
							: `
${p}`;
				}
			}),
		a
	);
}
function Mv(t, e, n = {}) {
	const { state: r } = e,
		{ doc: s, tr: o } = r,
		i = t;
	(s.descendants((l, a) => {
		const c = o.mapping.map(a),
			u = o.mapping.map(a) + l.nodeSize;
		let d = null;
		if (
			(l.marks.forEach((h) => {
				if (h !== i) return !1;
				d = h;
			}),
			!d)
		)
			return;
		let f = !1;
		if (
			(Object.keys(n).forEach((h) => {
				n[h] !== d.attrs[h] && (f = !0);
			}),
			f)
		) {
			const h = t.type.create({ ...t.attrs, ...n });
			(o.removeMark(c, u, t.type), o.addMark(c, u, h));
		}
	}),
		o.docChanged && e.view.dispatch(o));
}
var mt = class Jh extends Ma {
	constructor() {
		(super(...arguments), (this.type = 'node'));
	}
	static create(e = {}) {
		const n = typeof e == 'function' ? e() : e;
		return new Jh(n);
	}
	configure(e) {
		return super.configure(e);
	}
	extend(e) {
		const n = typeof e == 'function' ? e() : e;
		return super.extend(n);
	}
};
function Zn(t) {
	return new cv({
		find: t.find,
		handler: ({ state: e, range: n, match: r, pasteEvent: s }) => {
			const o = Fe(t.getAttributes, void 0, r, s);
			if (o === !1 || o === null) return null;
			const { tr: i } = e,
				l = r[r.length - 1],
				a = r[0];
			let c = n.to;
			if (l) {
				const u = a.search(/\S/),
					d = n.from + a.indexOf(l),
					f = d + l.length;
				if (
					Ta(n.from, n.to, e.doc)
						.filter((p) => p.mark.type.excluded.find((g) => g === t.type && g !== p.mark.type))
						.filter((p) => p.to > d).length
				)
					return null;
				(f < n.to && i.delete(f, n.to),
					d > n.from && i.delete(n.from + u, d),
					(c = n.from + u + l.length),
					i.addMark(n.from + u, c, t.type.create(o || {})),
					i.removeStoredMark(t.type));
			}
		}
	});
}
const Ev = Ue.create({
	name: 'aiAutocompletion',
	addOptions() {
		return { generateCompletion: () => Promise.resolve(''), debounceTime: 1e3 };
	},
	addGlobalAttributes() {
		return [
			{
				types: ['paragraph'],
				attributes: {
					class: {
						default: null,
						parseHTML: (t) => t.getAttribute('class'),
						renderHTML: (t) => (t.class ? { class: t.class } : {})
					},
					'data-prompt': {
						default: null,
						parseHTML: (t) => t.getAttribute('data-prompt'),
						renderHTML: (t) => (t['data-prompt'] ? { 'data-prompt': t['data-prompt'] } : {})
					},
					'data-suggestion': {
						default: null,
						parseHTML: (t) => t.getAttribute('data-suggestion'),
						renderHTML: (t) =>
							t['data-suggestion'] ? { 'data-suggestion': t['data-suggestion'] } : {}
					}
				}
			}
		];
	},
	addProseMirrorPlugins() {
		let t = null,
			e = !1,
			n = 0,
			r = 0,
			s = !1;
		const o = (i) => {
			const { state: l, dispatch: a } = i,
				{ selection: c } = l,
				{ $head: u } = c;
			if (c.empty && u.pos === u.end() && this.options.debounceTime !== null) {
				clearTimeout(t);
				const d = u.before();
				t = setTimeout(() => {
					if (s) return !1;
					const f = i.state,
						h = f.selection,
						p = f.doc.nodeAt(d);
					if (
						p &&
						p.type.name === 'paragraph' &&
						h.$head.pos === h.$head.end() &&
						h.$head.pos === d + p.nodeSize - 1
					) {
						const m = p.textContent;
						if (m.trim() !== '') {
							if (e) return !0;
							((e = !0),
								this.options
									.generateCompletion(m)
									.then((g) => {
										g &&
											g.trim() !== '' &&
											i.state.selection.$head.pos === i.state.selection.$head.end() &&
											i.state === f &&
											i.dispatch(
												f.tr.setNodeMarkup(d, null, {
													...p.attrs,
													class: 'ai-autocompletion',
													'data-prompt': m,
													'data-suggestion': g
												})
											);
									})
									.finally(() => {
										e = !1;
									}));
						}
					}
				}, this.options.debounceTime);
			}
		};
		return [
			new ze({
				key: new _e('aiAutocompletion'),
				props: {
					handleKeyDown: (i, l) => {
						const { state: a, dispatch: c } = i,
							{ selection: u } = a,
							{ $head: d } = u;
						if (d.parent.type.name !== 'paragraph') return !1;
						const f = d.parent;
						if (l.key === 'Tab') {
							if (f.attrs['data-suggestion']) {
								const h = f.attrs['data-suggestion'];
								return (
									c(
										a.tr
											.insertText(h, d.pos)
											.setNodeMarkup(d.before(), null, {
												...f.attrs,
												class: null,
												'data-prompt': null,
												'data-suggestion': null
											})
									),
									!0
								);
							}
						} else
							(f.attrs['data-suggestion'] &&
								c(
									a.tr.setNodeMarkup(d.before(), null, {
										...f.attrs,
										class: null,
										'data-prompt': null,
										'data-suggestion': null
									})
								),
								o(i));
						return !1;
					},
					handleDOMEvents: {
						compositionstart: () => ((s = !0), !1),
						compositionend: (i) => ((s = !1), o(i), !1),
						touchstart: (i, l) => ((n = l.touches[0].clientX), (r = l.touches[0].clientY), !1),
						touchend: (i, l) => {
							const a = l.changedTouches[0].clientX,
								c = l.changedTouches[0].clientY,
								u = a - n,
								d = c - r;
							if (Math.abs(u) > Math.abs(d) && u > 50) {
								const { state: f, dispatch: h } = i,
									{ selection: p } = f,
									{ $head: m } = p,
									g = m.parent;
								if (g.type.name === 'paragraph' && g.attrs['data-suggestion']) {
									const b = g.attrs['data-suggestion'];
									return (
										h(
											f.tr
												.insertText(b, m.pos)
												.setNodeMarkup(m.before(), null, {
													...g.attrs,
													class: null,
													'data-prompt': null,
													'data-suggestion': null
												})
										),
										!0
									);
								}
							}
							return !1;
						},
						mouseup: (i, l) => {
							const { state: a, dispatch: c } = i;
							clearTimeout(t);
							const u = a.tr;
							return (
								a.doc.descendants((d, f) => {
									d.type.name === 'paragraph' &&
										d.attrs['data-suggestion'] &&
										u.setNodeMarkup(f, null, {
											...d.attrs,
											class: null,
											'data-prompt': null,
											'data-suggestion': null
										});
								}),
								u.docChanged && c(u),
								!1
							);
						}
					}
				}
			})
		];
	}
});
var No = (t, e) => {
		if (t === 'slot') return 0;
		if (t instanceof Function) return t(e);
		const { children: n, ...r } = e ?? {};
		if (t === 'svg')
			throw new Error(
				'SVG elements are not supported in the JSX syntax, use the array syntax instead'
			);
		return [t, r, n];
	},
	Av = /^\s*>\s$/,
	Nv = mt.create({
		name: 'blockquote',
		addOptions() {
			return { HTMLAttributes: {} };
		},
		content: 'block+',
		group: 'block',
		defining: !0,
		parseHTML() {
			return [{ tag: 'blockquote' }];
		},
		renderHTML({ HTMLAttributes: t }) {
			return No('blockquote', { ...je(this.options.HTMLAttributes, t), children: No('slot', {}) });
		},
		parseMarkdown: (t, e) => {
			var n;
			const r = (n = e.parseBlockChildren) != null ? n : e.parseChildren;
			return e.createNode('blockquote', void 0, r(t.tokens || []));
		},
		renderMarkdown: (t, e) => {
			if (!t.content) return '';
			const n = '>',
				r = [];
			return (
				t.content.forEach((s, o) => {
					var i, l;
					const u = (
						(l = (i = e.renderChild) == null ? void 0 : i.call(e, s, o)) != null
							? l
							: e.renderChildren([s])
					)
						.split(
							`
`
						)
						.map((d) => (d.trim() === '' ? n : `${n} ${d}`));
					r.push(
						u.join(`
`)
					);
				}),
				r.join(`
${n}
`)
			);
		},
		addCommands() {
			return {
				setBlockquote:
					() =>
					({ commands: t }) =>
						t.wrapIn(this.name),
				toggleBlockquote:
					() =>
					({ commands: t }) =>
						t.toggleWrap(this.name),
				unsetBlockquote:
					() =>
					({ commands: t }) =>
						t.lift(this.name)
			};
		},
		addKeyboardShortcuts() {
			return { 'Mod-Shift-b': () => this.editor.commands.toggleBlockquote() };
		},
		addInputRules() {
			return [Wr({ find: Av, type: this.type })];
		}
	}),
	Ov = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/,
	Iv = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g,
	Dv = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/,
	Rv = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g,
	Lv = nr.create({
		name: 'bold',
		addOptions() {
			return { HTMLAttributes: {} };
		},
		parseHTML() {
			return [
				{ tag: 'strong' },
				{ tag: 'b', getAttrs: (t) => t.style.fontWeight !== 'normal' && null },
				{ style: 'font-weight=400', clearMark: (t) => t.type.name === this.name },
				{ style: 'font-weight', getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null }
			];
		},
		renderHTML({ HTMLAttributes: t }) {
			return No('strong', { ...je(this.options.HTMLAttributes, t), children: No('slot', {}) });
		},
		markdownTokenName: 'strong',
		parseMarkdown: (t, e) => e.applyMark('bold', e.parseInline(t.tokens || [])),
		renderMarkdown: (t, e) => `**${e.renderChildren(t)}**`,
		addCommands() {
			return {
				setBold:
					() =>
					({ commands: t }) =>
						t.setMark(this.name),
				toggleBold:
					() =>
					({ commands: t }) =>
						t.toggleMark(this.name),
				unsetBold:
					() =>
					({ commands: t }) =>
						t.unsetMark(this.name)
			};
		},
		addKeyboardShortcuts() {
			return {
				'Mod-b': () => this.editor.commands.toggleBold(),
				'Mod-B': () => this.editor.commands.toggleBold()
			};
		},
		addInputRules() {
			return [Yn({ find: Ov, type: this.type }), Yn({ find: Dv, type: this.type })];
		},
		addPasteRules() {
			return [Zn({ find: Iv, type: this.type }), Zn({ find: Rv, type: this.type })];
		}
	}),
	Pv = /(^|[^`])`([^`]+)`(?!`)$/,
	zv = /(^|[^`])`([^`]+)`(?!`)/g,
	Gh = nr.create({
		name: 'code',
		addOptions() {
			return { HTMLAttributes: {} };
		},
		excludes: '_',
		code: !0,
		exitable: !0,
		parseHTML() {
			return [{ tag: 'code' }];
		},
		renderHTML({ HTMLAttributes: t }) {
			return ['code', je(this.options.HTMLAttributes, t), 0];
		},
		markdownTokenName: 'codespan',
		parseMarkdown: (t, e) => e.applyMark('code', [{ type: 'text', text: t.text || '' }]),
		renderMarkdown: (t, e) => (t.content ? `\`${e.renderChildren(t.content)}\`` : ''),
		addCommands() {
			return {
				setCode:
					() =>
					({ commands: t }) =>
						t.setMark(this.name),
				toggleCode:
					() =>
					({ commands: t }) =>
						t.toggleMark(this.name),
				unsetCode:
					() =>
					({ commands: t }) =>
						t.unsetMark(this.name)
			};
		},
		addKeyboardShortcuts() {
			return { 'Mod-e': () => this.editor.commands.toggleCode() };
		},
		addInputRules() {
			return [Yn({ find: Pv, type: this.type })];
		},
		addPasteRules() {
			return [Zn({ find: zv, type: this.type })];
		}
	}),
	Bv = Gh,
	Ui = 4,
	$v = /^```([a-z]+)?[\s\n]$/,
	_v = /^~~~([a-z]+)?[\s\n]$/,
	Xh = mt.create({
		name: 'codeBlock',
		addOptions() {
			return {
				languageClassPrefix: 'language-',
				exitOnTripleEnter: !0,
				exitOnArrowDown: !0,
				defaultLanguage: null,
				enableTabIndentation: !1,
				tabSize: Ui,
				HTMLAttributes: {}
			};
		},
		content: 'text*',
		marks: '',
		group: 'block',
		code: !0,
		defining: !0,
		addAttributes() {
			return {
				language: {
					default: this.options.defaultLanguage,
					parseHTML: (t) => {
						var e;
						const { languageClassPrefix: n } = this.options;
						if (!n) return null;
						const o = [...(((e = t.firstElementChild) == null ? void 0 : e.classList) || [])]
							.filter((i) => i.startsWith(n))
							.map((i) => i.replace(n, ''))[0];
						return o || null;
					},
					rendered: !1
				}
			};
		},
		parseHTML() {
			return [{ tag: 'pre', preserveWhitespace: 'full' }];
		},
		renderHTML({ node: t, HTMLAttributes: e }) {
			return [
				'pre',
				je(this.options.HTMLAttributes, e),
				[
					'code',
					{ class: t.attrs.language ? this.options.languageClassPrefix + t.attrs.language : null },
					0
				]
			];
		},
		markdownTokenName: 'code',
		parseMarkdown: (t, e) => {
			var n, r;
			return ((n = t.raw) == null ? void 0 : n.startsWith('```')) === !1 &&
				((r = t.raw) == null ? void 0 : r.startsWith('~~~')) === !1 &&
				t.codeBlockStyle !== 'indented'
				? []
				: e.createNode(
						'codeBlock',
						{ language: t.lang || null },
						t.text ? [e.createTextNode(t.text)] : []
					);
		},
		renderMarkdown: (t, e) => {
			var n;
			let r = '';
			const s = ((n = t.attrs) == null ? void 0 : n.language) || '';
			return (
				t.content
					? (r = [`\`\`\`${s}`, e.renderChildren(t.content), '```'].join(`
`))
					: (r = `\`\`\`${s}

\`\`\``),
				r
			);
		},
		addCommands() {
			return {
				setCodeBlock:
					(t) =>
					({ commands: e }) =>
						e.setNode(this.name, t),
				toggleCodeBlock:
					(t) =>
					({ commands: e }) =>
						e.toggleNode(this.name, 'paragraph', t)
			};
		},
		addKeyboardShortcuts() {
			return {
				'Mod-Alt-c': () => this.editor.commands.toggleCodeBlock(),
				Backspace: () => {
					const { empty: t, $anchor: e } = this.editor.state.selection,
						n = e.pos === 1;
					return !t || e.parent.type.name !== this.name
						? !1
						: n || !e.parent.textContent.length
							? this.editor.commands.clearNodes()
							: !1;
				},
				Tab: ({ editor: t }) => {
					var e;
					if (!this.options.enableTabIndentation) return !1;
					const n = (e = this.options.tabSize) != null ? e : Ui,
						{ state: r } = t,
						{ selection: s } = r,
						{ $from: o, empty: i } = s;
					if (o.parent.type !== this.type) return !1;
					const l = ' '.repeat(n);
					return i
						? t.commands.insertContent(l)
						: t.commands.command(({ tr: a }) => {
								const { from: c, to: u } = s,
									h = r.doc
										.textBetween(
											c,
											u,
											`
`,
											`
`
										)
										.split(
											`
`
										)
										.map((p) => l + p).join(`
`);
								return (a.replaceWith(c, u, r.schema.text(h)), !0);
							});
				},
				'Shift-Tab': ({ editor: t }) => {
					var e;
					if (!this.options.enableTabIndentation) return !1;
					const n = (e = this.options.tabSize) != null ? e : Ui,
						{ state: r } = t,
						{ selection: s } = r,
						{ $from: o, empty: i } = s;
					return o.parent.type !== this.type
						? !1
						: i
							? t.commands.command(({ tr: l }) => {
									var a;
									const { pos: c } = o,
										u = o.start(),
										d = o.end(),
										h = r.doc.textBetween(
											u,
											d,
											`
`,
											`
`
										).split(`
`);
									let p = 0,
										m = 0;
									const g = c - u;
									for (let x = 0; x < h.length; x += 1) {
										if (m + h[x].length >= g) {
											p = x;
											break;
										}
										m += h[x].length + 1;
									}
									const S = ((a = h[p].match(/^ */)) == null ? void 0 : a[0]) || '',
										O = Math.min(S.length, n);
									if (O === 0) return !0;
									let H = u;
									for (let x = 0; x < p; x += 1) H += h[x].length + 1;
									return (
										l.delete(H, H + O),
										c - H <= O && l.setSelection(pe.create(l.doc, H)),
										!0
									);
								})
							: t.commands.command(({ tr: l }) => {
									const { from: a, to: c } = s,
										f = r.doc
											.textBetween(
												a,
												c,
												`
`,
												`
`
											)
											.split(
												`
`
											)
											.map((h) => {
												var p;
												const m = ((p = h.match(/^ */)) == null ? void 0 : p[0]) || '',
													g = Math.min(m.length, n);
												return h.slice(g);
											}).join(`
`);
									return (l.replaceWith(a, c, r.schema.text(f)), !0);
								});
				},
				Enter: ({ editor: t }) => {
					if (!this.options.exitOnTripleEnter) return !1;
					const { state: e } = t,
						{ selection: n } = e,
						{ $from: r, empty: s } = n;
					if (!s || r.parent.type !== this.type) return !1;
					const o = r.parentOffset === r.parent.nodeSize - 2,
						i = r.parent.textContent.endsWith(`

`);
					return !o || !i
						? !1
						: t
								.chain()
								.command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0))
								.exitCode()
								.run();
				},
				ArrowDown: ({ editor: t }) => {
					if (!this.options.exitOnArrowDown) return !1;
					const { state: e } = t,
						{ selection: n, doc: r } = e,
						{ $from: s, empty: o } = n;
					if (!o || s.parent.type !== this.type || !(s.parentOffset === s.parent.nodeSize - 2))
						return !1;
					const l = s.after();
					return l === void 0
						? !1
						: r.nodeAt(l)
							? t.commands.command(({ tr: c }) => (c.setSelection(ve.near(r.resolve(l))), !0))
							: t.commands.exitCode();
				}
			};
		},
		addInputRules() {
			return [
				Cl({ find: $v, type: this.type, getAttributes: (t) => ({ language: t[1] }) }),
				Cl({ find: _v, type: this.type, getAttributes: (t) => ({ language: t[1] }) })
			];
		},
		addProseMirrorPlugins() {
			return [
				new ze({
					key: new _e('codeBlockVSCodeHandler'),
					props: {
						handlePaste: (t, e) => {
							if (!e.clipboardData || this.editor.isActive(this.type.name)) return !1;
							const n = e.clipboardData.getData('text/plain'),
								r = e.clipboardData.getData('vscode-editor-data'),
								s = r ? JSON.parse(r) : void 0,
								o = s == null ? void 0 : s.mode;
							if (!n || !o) return !1;
							const { tr: i, schema: l } = t.state,
								a = l.text(
									n.replace(
										/\r\n?/g,
										`
`
									)
								);
							return (
								i.replaceSelectionWith(this.type.create({ language: o }, a)),
								i.selection.$from.parent.type !== this.type &&
									i.setSelection(pe.near(i.doc.resolve(Math.max(0, i.selection.from - 2)))),
								i.setMeta('paste', !0),
								t.dispatch(i),
								!0
							);
						}
					}
				})
			];
		}
	}),
	Hv = mt.create({
		name: 'doc',
		topNode: !0,
		content: 'block+',
		renderMarkdown: (t, e) =>
			t.content
				? e.renderChildren(
						t.content,
						`

`
					)
				: ''
	}),
	Fv = mt.create({
		name: 'hardBreak',
		markdownTokenName: 'br',
		addOptions() {
			return { keepMarks: !0, HTMLAttributes: {} };
		},
		inline: !0,
		group: 'inline',
		selectable: !1,
		linebreakReplacement: !0,
		parseHTML() {
			return [{ tag: 'br' }];
		},
		renderHTML({ HTMLAttributes: t }) {
			return ['br', je(this.options.HTMLAttributes, t)];
		},
		renderText() {
			return `
`;
		},
		renderMarkdown: () => `  
`,
		parseMarkdown: () => ({ type: 'hardBreak' }),
		addCommands() {
			return {
				setHardBreak:
					() =>
					({ commands: t, chain: e, state: n, editor: r }) =>
						t.first([
							() => t.exitCode(),
							() =>
								t.command(() => {
									const { selection: s, storedMarks: o } = n;
									if (s.$from.parent.type.spec.isolating) return !1;
									const { keepMarks: i } = this.options,
										{ splittableMarks: l } = r.extensionManager,
										a = o || (s.$to.parentOffset && s.$from.marks());
									return e()
										.insertContent({ type: this.name })
										.command(({ tr: c, dispatch: u }) => {
											if (u && a && i) {
												const d = a.filter((f) => l.includes(f.type.name));
												c.ensureMarks(d);
											}
											return !0;
										})
										.run();
								})
						])
			};
		},
		addKeyboardShortcuts() {
			return {
				'Mod-Enter': () => this.editor.commands.setHardBreak(),
				'Shift-Enter': () => this.editor.commands.setHardBreak()
			};
		}
	}),
	Vv = mt.create({
		name: 'heading',
		addOptions() {
			return { levels: [1, 2, 3, 4, 5, 6], HTMLAttributes: {} };
		},
		content: 'inline*',
		group: 'block',
		defining: !0,
		addAttributes() {
			return { level: { default: 1, rendered: !1 } };
		},
		parseHTML() {
			return this.options.levels.map((t) => ({ tag: `h${t}`, attrs: { level: t } }));
		},
		renderHTML({ node: t, HTMLAttributes: e }) {
			return [
				`h${this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]}`,
				je(this.options.HTMLAttributes, e),
				0
			];
		},
		parseMarkdown: (t, e) =>
			e.createNode('heading', { level: t.depth || 1 }, e.parseInline(t.tokens || [])),
		renderMarkdown: (t, e) => {
			var n;
			const r = (n = t.attrs) != null && n.level ? parseInt(t.attrs.level, 10) : 1,
				s = '#'.repeat(r);
			return t.content ? `${s} ${e.renderChildren(t.content)}` : '';
		},
		addCommands() {
			return {
				setHeading:
					(t) =>
					({ commands: e }) =>
						this.options.levels.includes(t.level) ? e.setNode(this.name, t) : !1,
				toggleHeading:
					(t) =>
					({ commands: e }) =>
						this.options.levels.includes(t.level) ? e.toggleNode(this.name, 'paragraph', t) : !1
			};
		},
		addKeyboardShortcuts() {
			return this.options.levels.reduce(
				(t, e) => ({
					...t,
					[`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
				}),
				{}
			);
		},
		addInputRules() {
			return this.options.levels.map((t) =>
				Cl({
					find: new RegExp(`^(#{${Math.min(...this.options.levels)},${t}})\\s$`),
					type: this.type,
					getAttributes: { level: t }
				})
			);
		}
	}),
	Wv = mt.create({
		name: 'horizontalRule',
		addOptions() {
			return { HTMLAttributes: {}, nextNodeType: 'paragraph' };
		},
		group: 'block',
		parseHTML() {
			return [{ tag: 'hr' }];
		},
		renderHTML({ HTMLAttributes: t }) {
			return ['hr', je(this.options.HTMLAttributes, t)];
		},
		markdownTokenName: 'hr',
		parseMarkdown: (t, e) => e.createNode('horizontalRule'),
		renderMarkdown: () => '---',
		addCommands() {
			return {
				setHorizontalRule:
					() =>
					({ chain: t, state: e }) => {
						if (!vv(e, e.schema.nodes[this.name])) return !1;
						const { selection: n } = e,
							{ $to: r } = n,
							s = t();
						return (
							Ah(n)
								? s.insertContentAt(r.pos, { type: this.name })
								: s.insertContent({ type: this.name }),
							s
								.command(({ state: o, tr: i, dispatch: l }) => {
									if (l) {
										const { $to: a } = i.selection,
											c = a.end();
										if (a.nodeAfter)
											a.nodeAfter.isTextblock
												? i.setSelection(pe.create(i.doc, a.pos + 1))
												: a.nodeAfter.isBlock
													? i.setSelection(fe.create(i.doc, a.pos))
													: i.setSelection(pe.create(i.doc, a.pos));
										else {
											const u =
													o.schema.nodes[this.options.nextNodeType] ||
													a.parent.type.contentMatch.defaultType,
												d = u == null ? void 0 : u.create();
											d && (i.insert(c, d), i.setSelection(pe.create(i.doc, c + 1)));
										}
										i.scrollIntoView();
									}
									return !0;
								})
								.run()
						);
					}
			};
		},
		addInputRules() {
			return [qh({ find: /^(?:---|—-|___\s|\*\*\*\s)$/, type: this.type })];
		}
	}),
	jv = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/,
	Uv = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g,
	qv = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/,
	Kv = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g,
	Jv = nr.create({
		name: 'italic',
		addOptions() {
			return { HTMLAttributes: {} };
		},
		parseHTML() {
			return [
				{ tag: 'em' },
				{ tag: 'i', getAttrs: (t) => t.style.fontStyle !== 'normal' && null },
				{ style: 'font-style=normal', clearMark: (t) => t.type.name === this.name },
				{ style: 'font-style=italic' }
			];
		},
		renderHTML({ HTMLAttributes: t }) {
			return ['em', je(this.options.HTMLAttributes, t), 0];
		},
		addCommands() {
			return {
				setItalic:
					() =>
					({ commands: t }) =>
						t.setMark(this.name),
				toggleItalic:
					() =>
					({ commands: t }) =>
						t.toggleMark(this.name),
				unsetItalic:
					() =>
					({ commands: t }) =>
						t.unsetMark(this.name)
			};
		},
		markdownTokenName: 'em',
		parseMarkdown: (t, e) => e.applyMark('italic', e.parseInline(t.tokens || [])),
		renderMarkdown: (t, e) => `*${e.renderChildren(t)}*`,
		addKeyboardShortcuts() {
			return {
				'Mod-i': () => this.editor.commands.toggleItalic(),
				'Mod-I': () => this.editor.commands.toggleItalic()
			};
		},
		addInputRules() {
			return [Yn({ find: jv, type: this.type }), Yn({ find: qv, type: this.type })];
		},
		addPasteRules() {
			return [Zn({ find: Uv, type: this.type }), Zn({ find: Kv, type: this.type })];
		}
	});
const Gv =
		'aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2',
	Xv =
		'ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2',
	Ml = 'numeric',
	El = 'ascii',
	Al = 'alpha',
	hs = 'asciinumeric',
	ls = 'alphanumeric',
	Nl = 'domain',
	Qh = 'emoji',
	Qv = 'scheme',
	Yv = 'slashscheme',
	qi = 'whitespace';
function Zv(t, e) {
	return (t in e || (e[t] = []), e[t]);
}
function cr(t, e, n) {
	(e[Ml] && ((e[hs] = !0), (e[ls] = !0)),
		e[El] && ((e[hs] = !0), (e[Al] = !0)),
		e[hs] && (e[ls] = !0),
		e[Al] && (e[ls] = !0),
		e[ls] && (e[Nl] = !0),
		e[Qh] && (e[Nl] = !0));
	for (const r in e) {
		const s = Zv(r, n);
		s.indexOf(t) < 0 && s.push(t);
	}
}
function ek(t, e) {
	const n = {};
	for (const r in e) e[r].indexOf(t) >= 0 && (n[r] = !0);
	return n;
}
function _t(t = null) {
	((this.j = {}), (this.jr = []), (this.jd = null), (this.t = t));
}
_t.groups = {};
_t.prototype = {
	accepts() {
		return !!this.t;
	},
	go(t) {
		const e = this,
			n = e.j[t];
		if (n) return n;
		for (let r = 0; r < e.jr.length; r++) {
			const s = e.jr[r][0],
				o = e.jr[r][1];
			if (o && s.test(t)) return o;
		}
		return e.jd;
	},
	has(t, e = !1) {
		return e ? t in this.j : !!this.go(t);
	},
	ta(t, e, n, r) {
		for (let s = 0; s < t.length; s++) this.tt(t[s], e, n, r);
	},
	tr(t, e, n, r) {
		r = r || _t.groups;
		let s;
		return (e && e.j ? (s = e) : ((s = new _t(e)), n && r && cr(e, n, r)), this.jr.push([t, s]), s);
	},
	ts(t, e, n, r) {
		let s = this;
		const o = t.length;
		if (!o) return s;
		for (let i = 0; i < o - 1; i++) s = s.tt(t[i]);
		return s.tt(t[o - 1], e, n, r);
	},
	tt(t, e, n, r) {
		r = r || _t.groups;
		const s = this;
		if (e && e.j) return ((s.j[t] = e), e);
		const o = e;
		let i,
			l = s.go(t);
		if (
			(l
				? ((i = new _t()),
					Object.assign(i.j, l.j),
					i.jr.push.apply(i.jr, l.jr),
					(i.jd = l.jd),
					(i.t = l.t))
				: (i = new _t()),
			o)
		) {
			if (r)
				if (i.t && typeof i.t == 'string') {
					const a = Object.assign(ek(i.t, r), n);
					cr(o, a, r);
				} else n && cr(o, n, r);
			i.t = o;
		}
		return ((s.j[t] = i), i);
	}
};
const Ne = (t, e, n, r, s) => t.ta(e, n, r, s),
	ot = (t, e, n, r, s) => t.tr(e, n, r, s),
	hu = (t, e, n, r, s) => t.ts(e, n, r, s),
	V = (t, e, n, r, s) => t.tt(e, n, r, s),
	Tn = 'WORD',
	Ol = 'UWORD',
	Yh = 'ASCIINUMERICAL',
	Zh = 'ALPHANUMERICAL',
	Os = 'LOCALHOST',
	Il = 'TLD',
	Dl = 'UTLD',
	uo = 'SCHEME',
	Ir = 'SLASH_SCHEME',
	Oa = 'NUM',
	Rl = 'WS',
	Ia = 'NL',
	ps = 'OPENBRACE',
	ms = 'CLOSEBRACE',
	Oo = 'OPENBRACKET',
	Io = 'CLOSEBRACKET',
	Do = 'OPENPAREN',
	Ro = 'CLOSEPAREN',
	Lo = 'OPENANGLEBRACKET',
	Po = 'CLOSEANGLEBRACKET',
	zo = 'FULLWIDTHLEFTPAREN',
	Bo = 'FULLWIDTHRIGHTPAREN',
	$o = 'LEFTCORNERBRACKET',
	_o = 'RIGHTCORNERBRACKET',
	Ho = 'LEFTWHITECORNERBRACKET',
	Fo = 'RIGHTWHITECORNERBRACKET',
	Vo = 'FULLWIDTHLESSTHAN',
	Wo = 'FULLWIDTHGREATERTHAN',
	jo = 'AMPERSAND',
	Uo = 'APOSTROPHE',
	qo = 'ASTERISK',
	_n = 'AT',
	Ko = 'BACKSLASH',
	Jo = 'BACKTICK',
	Go = 'CARET',
	Vn = 'COLON',
	Da = 'COMMA',
	Xo = 'DOLLAR',
	fn = 'DOT',
	Qo = 'EQUALS',
	Ra = 'EXCLAMATION',
	Jt = 'HYPHEN',
	gs = 'PERCENT',
	Yo = 'PIPE',
	Zo = 'PLUS',
	ei = 'POUND',
	ys = 'QUERY',
	La = 'QUOTE',
	ep = 'FULLWIDTHMIDDLEDOT',
	Pa = 'SEMI',
	hn = 'SLASH',
	bs = 'TILDE',
	ti = 'UNDERSCORE',
	tp = 'EMOJI',
	ni = 'SYM';
var np = Object.freeze({
	__proto__: null,
	ALPHANUMERICAL: Zh,
	AMPERSAND: jo,
	APOSTROPHE: Uo,
	ASCIINUMERICAL: Yh,
	ASTERISK: qo,
	AT: _n,
	BACKSLASH: Ko,
	BACKTICK: Jo,
	CARET: Go,
	CLOSEANGLEBRACKET: Po,
	CLOSEBRACE: ms,
	CLOSEBRACKET: Io,
	CLOSEPAREN: Ro,
	COLON: Vn,
	COMMA: Da,
	DOLLAR: Xo,
	DOT: fn,
	EMOJI: tp,
	EQUALS: Qo,
	EXCLAMATION: Ra,
	FULLWIDTHGREATERTHAN: Wo,
	FULLWIDTHLEFTPAREN: zo,
	FULLWIDTHLESSTHAN: Vo,
	FULLWIDTHMIDDLEDOT: ep,
	FULLWIDTHRIGHTPAREN: Bo,
	HYPHEN: Jt,
	LEFTCORNERBRACKET: $o,
	LEFTWHITECORNERBRACKET: Ho,
	LOCALHOST: Os,
	NL: Ia,
	NUM: Oa,
	OPENANGLEBRACKET: Lo,
	OPENBRACE: ps,
	OPENBRACKET: Oo,
	OPENPAREN: Do,
	PERCENT: gs,
	PIPE: Yo,
	PLUS: Zo,
	POUND: ei,
	QUERY: ys,
	QUOTE: La,
	RIGHTCORNERBRACKET: _o,
	RIGHTWHITECORNERBRACKET: Fo,
	SCHEME: uo,
	SEMI: Pa,
	SLASH: hn,
	SLASH_SCHEME: Ir,
	SYM: ni,
	TILDE: bs,
	TLD: Il,
	UNDERSCORE: ti,
	UTLD: Dl,
	UWORD: Ol,
	WORD: Tn,
	WS: Rl
});
const wn = /[a-z]/,
	Zr = new RegExp('\\p{L}', 'u'),
	Ki = new RegExp('\\p{Emoji}', 'u'),
	Sn = /\d/,
	Ji = /\s/,
	pu = '\r',
	Gi = `
`,
	tk = '️',
	nk = '‍',
	Xi = '￼';
let Zs = null,
	eo = null;
function rk(t = []) {
	const e = {};
	_t.groups = e;
	const n = new _t();
	(Zs == null && (Zs = mu(Gv)),
		eo == null && (eo = mu(Xv)),
		V(n, "'", Uo),
		V(n, '{', ps),
		V(n, '}', ms),
		V(n, '[', Oo),
		V(n, ']', Io),
		V(n, '(', Do),
		V(n, ')', Ro),
		V(n, '<', Lo),
		V(n, '>', Po),
		V(n, '（', zo),
		V(n, '）', Bo),
		V(n, '「', $o),
		V(n, '」', _o),
		V(n, '『', Ho),
		V(n, '』', Fo),
		V(n, '＜', Vo),
		V(n, '＞', Wo),
		V(n, '&', jo),
		V(n, '*', qo),
		V(n, '@', _n),
		V(n, '`', Jo),
		V(n, '^', Go),
		V(n, ':', Vn),
		V(n, ',', Da),
		V(n, '$', Xo),
		V(n, '.', fn),
		V(n, '=', Qo),
		V(n, '!', Ra),
		V(n, '-', Jt),
		V(n, '%', gs),
		V(n, '|', Yo),
		V(n, '+', Zo),
		V(n, '#', ei),
		V(n, '?', ys),
		V(n, '"', La),
		V(n, '/', hn),
		V(n, ';', Pa),
		V(n, '~', bs),
		V(n, '_', ti),
		V(n, '\\', Ko),
		V(n, '・', ep));
	const r = ot(n, Sn, Oa, { [Ml]: !0 });
	ot(r, Sn, r);
	const s = ot(r, wn, Yh, { [hs]: !0 }),
		o = ot(r, Zr, Zh, { [ls]: !0 }),
		i = ot(n, wn, Tn, { [El]: !0 });
	(ot(i, Sn, s), ot(i, wn, i), ot(s, Sn, s), ot(s, wn, s));
	const l = ot(n, Zr, Ol, { [Al]: !0 });
	(ot(l, wn), ot(l, Sn, o), ot(l, Zr, l), ot(o, Sn, o), ot(o, wn), ot(o, Zr, o));
	const a = V(n, Gi, Ia, { [qi]: !0 }),
		c = V(n, pu, Rl, { [qi]: !0 }),
		u = ot(n, Ji, Rl, { [qi]: !0 });
	(V(n, Xi, u),
		V(c, Gi, a),
		V(c, Xi, u),
		ot(c, Ji, u),
		V(u, pu),
		V(u, Gi),
		ot(u, Ji, u),
		V(u, Xi, u));
	const d = ot(n, Ki, tp, { [Qh]: !0 });
	(V(d, '#'), ot(d, Ki, d), V(d, tk, d));
	const f = V(d, nk);
	(V(f, '#'), ot(f, Ki, d));
	const h = [
			[wn, i],
			[Sn, s]
		],
		p = [
			[wn, null],
			[Zr, l],
			[Sn, o]
		];
	for (let m = 0; m < Zs.length; m++) zn(n, Zs[m], Il, Tn, h);
	for (let m = 0; m < eo.length; m++) zn(n, eo[m], Dl, Ol, p);
	(cr(Il, { tld: !0, ascii: !0 }, e),
		cr(Dl, { utld: !0, alpha: !0 }, e),
		zn(n, 'file', uo, Tn, h),
		zn(n, 'mailto', uo, Tn, h),
		zn(n, 'http', Ir, Tn, h),
		zn(n, 'https', Ir, Tn, h),
		zn(n, 'ftp', Ir, Tn, h),
		zn(n, 'ftps', Ir, Tn, h),
		cr(uo, { scheme: !0, ascii: !0 }, e),
		cr(Ir, { slashscheme: !0, ascii: !0 }, e),
		(t = t.sort((m, g) => (m[0] > g[0] ? 1 : -1))));
	for (let m = 0; m < t.length; m++) {
		const g = t[m][0],
			S = t[m][1] ? { [Qv]: !0 } : { [Yv]: !0 };
		(g.indexOf('-') >= 0
			? (S[Nl] = !0)
			: wn.test(g)
				? Sn.test(g)
					? (S[hs] = !0)
					: (S[El] = !0)
				: (S[Ml] = !0),
			hu(n, g, g, S));
	}
	return (
		hu(n, 'localhost', Os, { ascii: !0 }),
		(n.jd = new _t(ni)),
		{ start: n, tokens: Object.assign({ groups: e }, np) }
	);
}
function rp(t, e) {
	const n = sk(e.replace(/[A-Z]/g, (l) => l.toLowerCase())),
		r = n.length,
		s = [];
	let o = 0,
		i = 0;
	for (; i < r; ) {
		let l = t,
			a = null,
			c = 0,
			u = null,
			d = -1,
			f = -1;
		for (; i < r && (a = l.go(n[i])); )
			((l = a),
				l.accepts() ? ((d = 0), (f = 0), (u = l)) : d >= 0 && ((d += n[i].length), f++),
				(c += n[i].length),
				(o += n[i].length),
				i++);
		((o -= d), (i -= f), (c -= d), s.push({ t: u.t, v: e.slice(o - c, o), s: o - c, e: o }));
	}
	return s;
}
function sk(t) {
	const e = [],
		n = t.length;
	let r = 0;
	for (; r < n; ) {
		let s = t.charCodeAt(r),
			o,
			i =
				s < 55296 || s > 56319 || r + 1 === n || (o = t.charCodeAt(r + 1)) < 56320 || o > 57343
					? t[r]
					: t.slice(r, r + 2);
		(e.push(i), (r += i.length));
	}
	return e;
}
function zn(t, e, n, r, s) {
	let o;
	const i = e.length;
	for (let l = 0; l < i - 1; l++) {
		const a = e[l];
		(t.j[a] ? (o = t.j[a]) : ((o = new _t(r)), (o.jr = s.slice()), (t.j[a] = o)), (t = o));
	}
	return ((o = new _t(n)), (o.jr = s.slice()), (t.j[e[i - 1]] = o), o);
}
function mu(t) {
	const e = [],
		n = [];
	let r = 0,
		s = '0123456789';
	for (; r < t.length; ) {
		let o = 0;
		for (; s.indexOf(t[r + o]) >= 0; ) o++;
		if (o > 0) {
			e.push(n.join(''));
			for (let i = parseInt(t.substring(r, r + o), 10); i > 0; i--) n.pop();
			r += o;
		} else (n.push(t[r]), r++);
	}
	return e;
}
const Is = {
	defaultProtocol: 'http',
	events: null,
	format: gu,
	formatHref: gu,
	nl2br: !1,
	tagName: 'a',
	target: null,
	rel: null,
	validate: !0,
	truncate: 1 / 0,
	className: null,
	attributes: null,
	ignoreTags: [],
	render: null
};
function za(t, e = null) {
	let n = Object.assign({}, Is);
	t && (n = Object.assign(n, t instanceof za ? t.o : t));
	const r = n.ignoreTags,
		s = [];
	for (let o = 0; o < r.length; o++) s.push(r[o].toUpperCase());
	((this.o = n), e && (this.defaultRender = e), (this.ignoreTags = s));
}
za.prototype = {
	o: Is,
	ignoreTags: [],
	defaultRender(t) {
		return t;
	},
	check(t) {
		return this.get('validate', t.toString(), t);
	},
	get(t, e, n) {
		const r = e != null;
		let s = this.o[t];
		return (
			s &&
			(typeof s == 'object'
				? ((s = n.t in s ? s[n.t] : Is[t]), typeof s == 'function' && r && (s = s(e, n)))
				: typeof s == 'function' && r && (s = s(e, n.t, n)),
			s)
		);
	},
	getObj(t, e, n) {
		let r = this.o[t];
		return (typeof r == 'function' && e != null && (r = r(e, n.t, n)), r);
	},
	render(t) {
		const e = t.render(this);
		return (this.get('render', null, t) || this.defaultRender)(e, t.t, t);
	}
};
function gu(t) {
	return t;
}
function sp(t, e) {
	((this.t = 'token'), (this.v = t), (this.tk = e));
}
sp.prototype = {
	isLink: !1,
	toString() {
		return this.v;
	},
	toHref(t) {
		return this.toString();
	},
	toFormattedString(t) {
		const e = this.toString(),
			n = t.get('truncate', e, this),
			r = t.get('format', e, this);
		return n && r.length > n ? r.substring(0, n) + '…' : r;
	},
	toFormattedHref(t) {
		return t.get('formatHref', this.toHref(t.get('defaultProtocol')), this);
	},
	startIndex() {
		return this.tk[0].s;
	},
	endIndex() {
		return this.tk[this.tk.length - 1].e;
	},
	toObject(t = Is.defaultProtocol) {
		return {
			type: this.t,
			value: this.toString(),
			isLink: this.isLink,
			href: this.toHref(t),
			start: this.startIndex(),
			end: this.endIndex()
		};
	},
	toFormattedObject(t) {
		return {
			type: this.t,
			value: this.toFormattedString(t),
			isLink: this.isLink,
			href: this.toFormattedHref(t),
			start: this.startIndex(),
			end: this.endIndex()
		};
	},
	validate(t) {
		return t.get('validate', this.toString(), this);
	},
	render(t) {
		const e = this,
			n = this.toHref(t.get('defaultProtocol')),
			r = t.get('formatHref', n, this),
			s = t.get('tagName', n, e),
			o = this.toFormattedString(t),
			i = {},
			l = t.get('className', n, e),
			a = t.get('target', n, e),
			c = t.get('rel', n, e),
			u = t.getObj('attributes', n, e),
			d = t.getObj('events', n, e);
		return (
			(i.href = r),
			l && (i.class = l),
			a && (i.target = a),
			c && (i.rel = c),
			u && Object.assign(i, u),
			{ tagName: s, attributes: i, content: o, eventListeners: d }
		);
	}
};
function yi(t, e) {
	class n extends sp {
		constructor(s, o) {
			(super(s, o), (this.t = t));
		}
	}
	for (const r in e) n.prototype[r] = e[r];
	return ((n.t = t), n);
}
const yu = yi('email', {
		isLink: !0,
		toHref() {
			return 'mailto:' + this.toString();
		}
	}),
	bu = yi('text'),
	ok = yi('nl'),
	to = yi('url', {
		isLink: !0,
		toHref(t = Is.defaultProtocol) {
			return this.hasProtocol() ? this.v : `${t}://${this.v}`;
		},
		hasProtocol() {
			const t = this.tk;
			return t.length >= 2 && t[0].t !== Os && t[1].t === Vn;
		}
	}),
	Kt = (t) => new _t(t);
function ik({ groups: t }) {
	const e = t.domain.concat([
			jo,
			qo,
			_n,
			Ko,
			Jo,
			Go,
			Xo,
			Qo,
			Jt,
			Oa,
			gs,
			Yo,
			Zo,
			ei,
			hn,
			ni,
			bs,
			ti
		]),
		n = [
			Uo,
			Vn,
			Da,
			fn,
			Ra,
			gs,
			ys,
			La,
			Pa,
			Lo,
			Po,
			ps,
			ms,
			Io,
			Oo,
			Do,
			Ro,
			zo,
			Bo,
			$o,
			_o,
			Ho,
			Fo,
			Vo,
			Wo
		],
		r = [jo, Uo, qo, Ko, Jo, Go, Xo, Qo, Jt, ps, ms, gs, Yo, Zo, ei, ys, hn, ni, bs, ti],
		s = Kt(),
		o = V(s, bs);
	(Ne(o, r, o), Ne(o, t.domain, o));
	const i = Kt(),
		l = Kt(),
		a = Kt();
	(Ne(s, t.domain, i),
		Ne(s, t.scheme, l),
		Ne(s, t.slashscheme, a),
		Ne(i, r, o),
		Ne(i, t.domain, i));
	const c = V(i, _n);
	(V(o, _n, c), V(l, _n, c), V(a, _n, c));
	const u = V(o, fn);
	(Ne(u, r, o), Ne(u, t.domain, o));
	const d = Kt();
	(Ne(c, t.domain, d), Ne(d, t.domain, d));
	const f = V(d, fn);
	Ne(f, t.domain, d);
	const h = Kt(yu);
	(Ne(f, t.tld, h), Ne(f, t.utld, h), V(c, Os, h));
	const p = V(d, Jt);
	(V(p, Jt, p), Ne(p, t.domain, d), Ne(h, t.domain, d), V(h, fn, f), V(h, Jt, p));
	const m = V(h, Vn);
	Ne(m, t.numeric, yu);
	const g = V(i, Jt),
		b = V(i, fn);
	(V(g, Jt, g), Ne(g, t.domain, i), Ne(b, r, o), Ne(b, t.domain, i));
	const S = Kt(to);
	(Ne(b, t.tld, S),
		Ne(b, t.utld, S),
		Ne(S, t.domain, i),
		Ne(S, r, o),
		V(S, fn, b),
		V(S, Jt, g),
		V(S, _n, c));
	const O = V(S, Vn),
		H = Kt(to);
	Ne(O, t.numeric, H);
	const E = Kt(to),
		x = Kt();
	(Ne(E, e, E), Ne(E, n, x), Ne(x, e, E), Ne(x, n, x), V(S, hn, E), V(H, hn, E));
	const k = V(l, Vn),
		M = V(a, Vn),
		T = V(M, hn),
		_ = V(T, hn);
	(Ne(l, t.domain, i),
		V(l, fn, b),
		V(l, Jt, g),
		Ne(a, t.domain, i),
		V(a, fn, b),
		V(a, Jt, g),
		Ne(k, t.domain, E),
		V(k, hn, E),
		V(k, ys, E),
		Ne(_, t.domain, E),
		Ne(_, e, E),
		V(_, hn, E));
	const C = [
		[ps, ms],
		[Oo, Io],
		[Do, Ro],
		[Lo, Po],
		[zo, Bo],
		[$o, _o],
		[Ho, Fo],
		[Vo, Wo]
	];
	for (let ce = 0; ce < C.length; ce++) {
		const [W, ee] = C[ce],
			U = V(E, W);
		(V(x, W, U), V(U, ee, E));
		const j = Kt(to);
		Ne(U, e, j);
		const Y = Kt();
		(Ne(U, n), Ne(j, e, j), Ne(j, n, Y), Ne(Y, e, j), Ne(Y, n, Y), V(j, ee, E), V(Y, ee, E));
	}
	return (V(s, Os, S), V(s, Ia, ok), { start: s, tokens: np });
}
function lk(t, e, n) {
	let r = n.length,
		s = 0,
		o = [],
		i = [];
	for (; s < r; ) {
		let l = t,
			a = null,
			c = null,
			u = 0,
			d = null,
			f = -1;
		for (; s < r && !(a = l.go(n[s].t)); ) i.push(n[s++]);
		for (; s < r && (c = a || l.go(n[s].t)); )
			((a = null), (l = c), l.accepts() ? ((f = 0), (d = l)) : f >= 0 && f++, s++, u++);
		if (f < 0) ((s -= u), s < r && (i.push(n[s]), s++));
		else {
			(i.length > 0 && (o.push(Qi(bu, e, i)), (i = [])), (s -= f), (u -= f));
			const h = d.t,
				p = n.slice(s - u, s);
			o.push(Qi(h, e, p));
		}
	}
	return (i.length > 0 && o.push(Qi(bu, e, i)), o);
}
function Qi(t, e, n) {
	const r = n[0].s,
		s = n[n.length - 1].e,
		o = e.slice(r, s);
	return new t(o, n);
}
const ak = (typeof console < 'u' && console && console.warn) || (() => {}),
	ck =
		'until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.',
	Ye = {
		scanner: null,
		parser: null,
		tokenQueue: [],
		pluginQueue: [],
		customSchemes: [],
		initialized: !1
	};
function uk() {
	return (
		(_t.groups = {}),
		(Ye.scanner = null),
		(Ye.parser = null),
		(Ye.tokenQueue = []),
		(Ye.pluginQueue = []),
		(Ye.customSchemes = []),
		(Ye.initialized = !1),
		Ye
	);
}
function vu(t, e = !1) {
	if (
		(Ye.initialized &&
			ak(`linkifyjs: already initialized - will not register custom scheme "${t}" ${ck}`),
		!/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t))
	)
		throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
	Ye.customSchemes.push([t, e]);
}
function dk() {
	Ye.scanner = rk(Ye.customSchemes);
	for (let t = 0; t < Ye.tokenQueue.length; t++) Ye.tokenQueue[t][1]({ scanner: Ye.scanner });
	Ye.parser = ik(Ye.scanner.tokens);
	for (let t = 0; t < Ye.pluginQueue.length; t++)
		Ye.pluginQueue[t][1]({ scanner: Ye.scanner, parser: Ye.parser });
	return ((Ye.initialized = !0), Ye);
}
function Ba(t) {
	return (Ye.initialized || dk(), lk(Ye.parser.start, t, rp(Ye.scanner.start, t)));
}
Ba.scan = rp;
function op(t, e = null, n = null) {
	if (e && typeof e == 'object') {
		if (n) throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
		((n = e), (e = null));
	}
	const r = new za(n),
		s = Ba(t),
		o = [];
	for (let i = 0; i < s.length; i++) {
		const l = s[i];
		l.isLink && (!e || l.t === e) && r.check(l) && o.push(l.toFormattedObject(r));
	}
	return o;
}
var $a = '[\0-   ᠎ -\u2029 　]',
	fk = new RegExp($a),
	hk = new RegExp(`${$a}$`),
	pk = new RegExp($a, 'g');
function mk(t) {
	return t.length === 1
		? t[0].isLink
		: t.length === 3 && t[1].isLink
			? ['()', '[]'].includes(t[0].value + t[2].value)
			: !1;
}
function gk(t) {
	return new ze({
		key: new _e('autolink'),
		appendTransaction: (e, n, r) => {
			const s = e.some((c) => c.docChanged) && !n.doc.eq(r.doc),
				o = e.some((c) => c.getMeta('preventAutolink'));
			if (!s || o) return;
			const { tr: i } = r,
				l = vh(n.doc, [...e]);
			if (
				(Eh(l).forEach(({ newRange: c }) => {
					const u = xb(r.doc, c, (h) => h.isTextblock);
					let d, f;
					if (u.length > 1)
						((d = u[0]), (f = r.doc.textBetween(d.pos, d.pos + d.node.nodeSize, void 0, ' ')));
					else if (u.length) {
						const h = r.doc.textBetween(c.from, c.to, ' ', ' ');
						if (!hk.test(h)) return;
						((d = u[0]), (f = r.doc.textBetween(d.pos, c.to, void 0, ' ')));
					}
					if (d && f) {
						const h = f.split(fk).filter(Boolean);
						if (h.length <= 0) return !1;
						const p = h[h.length - 1],
							m = d.pos + f.lastIndexOf(p);
						if (!p) return !1;
						const g = Ba(p).map((b) => b.toObject(t.defaultProtocol));
						if (!mk(g)) return !1;
						g.filter((b) => b.isLink)
							.map((b) => ({ ...b, from: m + b.start + 1, to: m + b.end + 1 }))
							.filter((b) =>
								r.schema.marks.code ? !r.doc.rangeHasMark(b.from, b.to, r.schema.marks.code) : !0
							)
							.filter((b) => t.validate(b.value))
							.filter((b) => t.shouldAutoLink(b.value))
							.forEach((b) => {
								Ta(b.from, b.to, r.doc).some((S) => S.mark.type === t.type) ||
									i.addMark(b.from, b.to, t.type.create({ href: b.href }));
							});
					}
				}),
				!!i.steps.length)
			)
				return i;
		}
	});
}
function yk(t) {
	return new ze({
		key: new _e('handleClickLink'),
		props: {
			handleClick: (e, n, r) => {
				var s, o;
				if (r.button !== 0 || !e.editable) return !1;
				let i = null;
				if (r.target instanceof HTMLAnchorElement) i = r.target;
				else {
					const a = r.target;
					if (!a) return !1;
					const c = t.editor.view.dom;
					((i = a.closest('a')), i && !c.contains(i) && (i = null));
				}
				if (!i) return !1;
				let l = !1;
				if (
					(t.enableClickSelection && (l = t.editor.commands.extendMarkRange(t.type.name)),
					t.openOnClick)
				) {
					const a = Mh(e.state, t.type.name),
						c = (s = i.href) != null ? s : a.href,
						u = (o = i.target) != null ? o : a.target;
					c && (window.open(c, u), (l = !0));
				}
				return l;
			}
		}
	});
}
function bk(t) {
	return new ze({
		key: new _e('handlePasteLink'),
		props: {
			handlePaste: (e, n, r) => {
				const { shouldAutoLink: s } = t,
					{ state: o } = e,
					{ selection: i } = o,
					{ empty: l } = i;
				if (l) return !1;
				let a = '';
				r.content.forEach((u) => {
					a += u.textContent;
				});
				const c = op(a, { defaultProtocol: t.defaultProtocol }).find(
					(u) => u.isLink && u.value === a
				);
				return !a || !c || (s !== void 0 && !s(c.value))
					? !1
					: t.editor.commands.setMark(t.type, { href: c.href });
			}
		}
	});
}
function rr(t, e) {
	const n = ['http', 'https', 'ftp', 'ftps', 'mailto', 'tel', 'callto', 'sms', 'cid', 'xmpp'];
	return (
		e &&
			e.forEach((r) => {
				const s = typeof r == 'string' ? r : r.scheme;
				s && n.push(s);
			}),
		!t ||
			t
				.replace(pk, '')
				.match(new RegExp(`^(?:(?:${n.join('|')}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`, 'i'))
	);
}
var vk = nr.create({
		name: 'link',
		priority: 1e3,
		keepOnSplit: !1,
		exitable: !0,
		onCreate() {
			(this.options.validate &&
				!this.options.shouldAutoLink &&
				((this.options.shouldAutoLink = this.options.validate),
				console.warn(
					'The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.'
				)),
				this.options.protocols.forEach((t) => {
					if (typeof t == 'string') {
						vu(t);
						return;
					}
					vu(t.scheme, t.optionalSlashes);
				}));
		},
		onDestroy() {
			uk();
		},
		inclusive() {
			return this.options.autolink;
		},
		addOptions() {
			return {
				openOnClick: !0,
				enableClickSelection: !1,
				linkOnPaste: !0,
				autolink: !0,
				protocols: [],
				defaultProtocol: 'http',
				HTMLAttributes: { target: '_blank', rel: 'noopener noreferrer nofollow', class: null },
				isAllowedUri: (t, e) => !!rr(t, e.protocols),
				validate: (t) => !!t,
				shouldAutoLink: (t) => {
					const e = /^[a-z][a-z0-9+.-]*:\/\//i.test(t),
						n = /^[a-z][a-z0-9+.-]*:/i.test(t);
					if (e || (n && !t.includes('@'))) return !0;
					const s = (t.includes('@') ? t.split('@').pop() : t).split(/[/?#:]/)[0];
					return !(/^\d{1,3}(\.\d{1,3}){3}$/.test(s) || !/\./.test(s));
				}
			};
		},
		addAttributes() {
			return {
				href: {
					default: null,
					parseHTML(t) {
						return t.getAttribute('href');
					}
				},
				target: { default: this.options.HTMLAttributes.target },
				rel: { default: this.options.HTMLAttributes.rel },
				class: { default: this.options.HTMLAttributes.class },
				title: { default: null }
			};
		},
		parseHTML() {
			return [
				{
					tag: 'a[href]',
					getAttrs: (t) => {
						const e = t.getAttribute('href');
						return !e ||
							!this.options.isAllowedUri(e, {
								defaultValidate: (n) => !!rr(n, this.options.protocols),
								protocols: this.options.protocols,
								defaultProtocol: this.options.defaultProtocol
							})
							? !1
							: null;
					}
				}
			];
		},
		renderHTML({ HTMLAttributes: t }) {
			return this.options.isAllowedUri(t.href, {
				defaultValidate: (e) => !!rr(e, this.options.protocols),
				protocols: this.options.protocols,
				defaultProtocol: this.options.defaultProtocol
			})
				? ['a', je(this.options.HTMLAttributes, t), 0]
				: ['a', je(this.options.HTMLAttributes, { ...t, href: '' }), 0];
		},
		markdownTokenName: 'link',
		parseMarkdown: (t, e) =>
			e.applyMark('link', e.parseInline(t.tokens || []), { href: t.href, title: t.title || null }),
		renderMarkdown: (t, e) => {
			var n, r, s, o;
			const i = (r = (n = t.attrs) == null ? void 0 : n.href) != null ? r : '',
				l = (o = (s = t.attrs) == null ? void 0 : s.title) != null ? o : '',
				a = e.renderChildren(t);
			return l ? `[${a}](${i} "${l}")` : `[${a}](${i})`;
		},
		addCommands() {
			return {
				setLink:
					(t) =>
					({ chain: e }) => {
						const { href: n } = t;
						return this.options.isAllowedUri(n, {
							defaultValidate: (r) => !!rr(r, this.options.protocols),
							protocols: this.options.protocols,
							defaultProtocol: this.options.defaultProtocol
						})
							? e().setMark(this.name, t).setMeta('preventAutolink', !0).run()
							: !1;
					},
				toggleLink:
					(t) =>
					({ chain: e }) => {
						const { href: n } = t || {};
						return n &&
							!this.options.isAllowedUri(n, {
								defaultValidate: (r) => !!rr(r, this.options.protocols),
								protocols: this.options.protocols,
								defaultProtocol: this.options.defaultProtocol
							})
							? !1
							: e()
									.toggleMark(this.name, t, { extendEmptyMarkRange: !0 })
									.setMeta('preventAutolink', !0)
									.run();
					},
				unsetLink:
					() =>
					({ chain: t }) =>
						t()
							.unsetMark(this.name, { extendEmptyMarkRange: !0 })
							.setMeta('preventAutolink', !0)
							.run()
			};
		},
		addPasteRules() {
			return [
				Zn({
					find: (t) => {
						const e = [];
						if (t) {
							const { protocols: n, defaultProtocol: r } = this.options,
								s = op(t).filter(
									(o) =>
										o.isLink &&
										this.options.isAllowedUri(o.value, {
											defaultValidate: (i) => !!rr(i, n),
											protocols: n,
											defaultProtocol: r
										})
								);
							s.length &&
								s.forEach((o) => {
									this.options.shouldAutoLink(o.value) &&
										e.push({ text: o.value, data: { href: o.href }, index: o.start });
								});
						}
						return e;
					},
					type: this.type,
					getAttributes: (t) => {
						var e;
						return { href: (e = t.data) == null ? void 0 : e.href };
					}
				})
			];
		},
		addProseMirrorPlugins() {
			const t = [],
				{ protocols: e, defaultProtocol: n } = this.options;
			return (
				this.options.autolink &&
					t.push(
						gk({
							type: this.type,
							defaultProtocol: this.options.defaultProtocol,
							validate: (r) =>
								this.options.isAllowedUri(r, {
									defaultValidate: (s) => !!rr(s, e),
									protocols: e,
									defaultProtocol: n
								}),
							shouldAutoLink: this.options.shouldAutoLink
						})
					),
				t.push(
					yk({
						type: this.type,
						editor: this.editor,
						openOnClick:
							this.options.openOnClick === 'whenNotEditable' ? !0 : this.options.openOnClick,
						enableClickSelection: this.options.enableClickSelection
					})
				),
				this.options.linkOnPaste &&
					t.push(
						bk({
							editor: this.editor,
							defaultProtocol: this.options.defaultProtocol,
							type: this.type,
							shouldAutoLink: this.options.shouldAutoLink
						})
					),
				t
			);
		}
	}),
	kk = Object.defineProperty,
	xk = (t, e) => {
		for (var n in e) kk(t, n, { get: e[n], enumerable: !0 });
	},
	wk = 'listItem',
	ku = 'textStyle',
	xu = /^\s*([-+*])\s$/,
	ip = mt.create({
		name: 'bulletList',
		addOptions() {
			return { itemTypeName: 'listItem', HTMLAttributes: {}, keepMarks: !1, keepAttributes: !1 };
		},
		group: 'block list',
		content() {
			return `${this.options.itemTypeName}+`;
		},
		parseHTML() {
			return [{ tag: 'ul' }];
		},
		renderHTML({ HTMLAttributes: t }) {
			return ['ul', je(this.options.HTMLAttributes, t), 0];
		},
		markdownTokenName: 'list',
		parseMarkdown: (t, e) =>
			t.type !== 'list' || t.ordered
				? []
				: { type: 'bulletList', content: t.items ? e.parseChildren(t.items) : [] },
		renderMarkdown: (t, e) =>
			t.content
				? e.renderChildren(
						t.content,
						`
`
					)
				: '',
		markdownOptions: { indentsContent: !0 },
		addCommands() {
			return {
				toggleBulletList:
					() =>
					({ commands: t, chain: e }) =>
						this.options.keepAttributes
							? e()
									.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
									.updateAttributes(wk, this.editor.getAttributes(ku))
									.run()
							: t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
			};
		},
		addKeyboardShortcuts() {
			return { 'Mod-Shift-8': () => this.editor.commands.toggleBulletList() };
		},
		addInputRules() {
			let t = Wr({ find: xu, type: this.type });
			return (
				(this.options.keepMarks || this.options.keepAttributes) &&
					(t = Wr({
						find: xu,
						type: this.type,
						keepMarks: this.options.keepMarks,
						keepAttributes: this.options.keepAttributes,
						getAttributes: () => this.editor.getAttributes(ku),
						editor: this.editor
					})),
				[t]
			);
		}
	}),
	lp = mt.create({
		name: 'listItem',
		addOptions() {
			return {
				HTMLAttributes: {},
				bulletListTypeName: 'bulletList',
				orderedListTypeName: 'orderedList'
			};
		},
		content: 'paragraph block*',
		defining: !0,
		parseHTML() {
			return [{ tag: 'li' }];
		},
		renderHTML({ HTMLAttributes: t }) {
			return ['li', je(this.options.HTMLAttributes, t), 0];
		},
		markdownTokenName: 'list_item',
		parseMarkdown: (t, e) => {
			var n;
			if (t.type !== 'list_item') return [];
			const r = (n = e.parseBlockChildren) != null ? n : e.parseChildren;
			let s = [];
			if (t.tokens && t.tokens.length > 0)
				if (t.tokens.some((i) => i.type === 'paragraph')) s = r(t.tokens);
				else {
					const i = t.tokens[0];
					if (i && i.type === 'text' && i.tokens && i.tokens.length > 0) {
						if (
							((s = [{ type: 'paragraph', content: e.parseInline(i.tokens) }]), t.tokens.length > 1)
						) {
							const a = t.tokens.slice(1),
								c = r(a);
							s.push(...c);
						}
					} else s = r(t.tokens);
				}
			return (
				s.length === 0 && (s = [{ type: 'paragraph', content: [] }]),
				{ type: 'listItem', content: s }
			);
		},
		renderMarkdown: (t, e, n) =>
			Na(
				t,
				e,
				(r) => {
					var s, o;
					return r.parentType === 'bulletList'
						? '- '
						: r.parentType === 'orderedList'
							? `${(((o = (s = r.meta) == null ? void 0 : s.parentAttrs) == null ? void 0 : o.start) || 1) + r.index}. `
							: '- ';
				},
				n
			),
		addKeyboardShortcuts() {
			return {
				Enter: () => this.editor.commands.splitListItem(this.name),
				Tab: () => this.editor.commands.sinkListItem(this.name),
				'Shift-Tab': () => this.editor.commands.liftListItem(this.name)
			};
		}
	}),
	Sk = {};
xk(Sk, {
	findListItemPos: () => Fs,
	getNextListDepth: () => _a,
	handleBackspace: () => Ll,
	handleDelete: () => Pl,
	hasListBefore: () => ap,
	hasListItemAfter: () => Ck,
	hasListItemBefore: () => cp,
	listItemHasSubList: () => up,
	nextListIsDeeper: () => dp,
	nextListIsHigher: () => fp
});
var Fs = (t, e) => {
		const { $from: n } = e.selection,
			r = ht(t, e.schema);
		let s = null,
			o = n.depth,
			i = n.pos,
			l = null;
		for (; o > 0 && l === null; ) ((s = n.node(o)), s.type === r ? (l = o) : ((o -= 1), (i -= 1)));
		return l === null ? null : { $pos: e.doc.resolve(i), depth: l };
	},
	_a = (t, e) => {
		const n = Fs(t, e);
		if (!n) return !1;
		const [, r] = Ob(e, t, n.$pos.pos + 4);
		return r;
	},
	ap = (t, e, n) => {
		const { $anchor: r } = t.selection,
			s = Math.max(0, r.pos - 2),
			o = t.doc.resolve(s).node();
		return !(!o || !n.includes(o.type.name));
	},
	cp = (t, e) => {
		var n;
		const { $anchor: r } = e.selection,
			s = e.doc.resolve(r.pos - 2);
		return !(s.index() === 0 || ((n = s.nodeBefore) == null ? void 0 : n.type.name) !== t);
	},
	up = (t, e, n) => {
		if (!n) return !1;
		const r = ht(t, e.schema);
		let s = !1;
		return (
			n.descendants((o) => {
				o.type === r && (s = !0);
			}),
			s
		);
	},
	Ll = (t, e, n) => {
		if (t.commands.undoInputRule()) return !0;
		if (t.state.selection.from !== t.state.selection.to) return !1;
		if (!Qn(t.state, e) && ap(t.state, e, n)) {
			const { $anchor: l } = t.state.selection,
				a = t.state.doc.resolve(l.before() - 1),
				c = [];
			a.node().descendants((f, h) => {
				f.type.name === e && c.push({ node: f, pos: h });
			});
			const u = c.at(-1);
			if (!u) return !1;
			const d = t.state.doc.resolve(a.start() + u.pos + 1);
			return t
				.chain()
				.cut({ from: l.start() - 1, to: l.end() + 1 }, d.end())
				.joinForward()
				.run();
		}
		if (!Qn(t.state, e) || !Lb(t.state)) return !1;
		const r = Fs(e, t.state);
		if (!r) return !1;
		const o = t.state.doc.resolve(r.$pos.pos - 2).node(r.depth),
			i = up(e, t.state, o);
		return cp(e, t.state) && !i ? t.commands.joinItemBackward() : t.chain().liftListItem(e).run();
	},
	dp = (t, e) => {
		const n = _a(t, e),
			r = Fs(t, e);
		return !r || !n ? !1 : n > r.depth;
	},
	fp = (t, e) => {
		const n = _a(t, e),
			r = Fs(t, e);
		return !r || !n ? !1 : n < r.depth;
	},
	Pl = (t, e) => {
		if (!Qn(t.state, e) || !Rb(t.state, e)) return !1;
		const { selection: n } = t.state,
			{ $from: r, $to: s } = n;
		return !n.empty && r.sameParent(s)
			? !1
			: dp(e, t.state)
				? t
						.chain()
						.focus(t.state.selection.from + 4)
						.lift(e)
						.joinBackward()
						.run()
				: fp(e, t.state)
					? t.chain().joinForward().joinBackward().run()
					: t.commands.joinItemForward();
	},
	Ck = (t, e) => {
		var n;
		const { $anchor: r } = e.selection,
			s = e.doc.resolve(r.pos - r.parentOffset - 2);
		return !(
			s.index() === s.parent.childCount - 1 ||
			((n = s.nodeAfter) == null ? void 0 : n.type.name) !== t
		);
	},
	hp = Ue.create({
		name: 'listKeymap',
		addOptions() {
			return {
				listTypes: [
					{ itemName: 'listItem', wrapperNames: ['bulletList', 'orderedList'] },
					{ itemName: 'taskItem', wrapperNames: ['taskList'] }
				]
			};
		},
		addKeyboardShortcuts() {
			return {
				Delete: ({ editor: t }) => {
					let e = !1;
					return (
						this.options.listTypes.forEach(({ itemName: n }) => {
							t.state.schema.nodes[n] !== void 0 && Pl(t, n) && (e = !0);
						}),
						e
					);
				},
				'Mod-Delete': ({ editor: t }) => {
					let e = !1;
					return (
						this.options.listTypes.forEach(({ itemName: n }) => {
							t.state.schema.nodes[n] !== void 0 && Pl(t, n) && (e = !0);
						}),
						e
					);
				},
				Backspace: ({ editor: t }) => {
					let e = !1;
					return (
						this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
							t.state.schema.nodes[n] !== void 0 && Ll(t, n, r) && (e = !0);
						}),
						e
					);
				},
				'Mod-Backspace': ({ editor: t }) => {
					let e = !1;
					return (
						this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
							t.state.schema.nodes[n] !== void 0 && Ll(t, n, r) && (e = !0);
						}),
						e
					);
				}
			};
		}
	}),
	wu = /^(\s*)(\d+)\.\s+(.*)$/,
	Tk = /^\s/;
function Mk(t) {
	const e = [];
	let n = 0,
		r = 0;
	for (; n < t.length; ) {
		const s = t[n],
			o = s.match(wu);
		if (!o) break;
		const [, i, l, a] = o,
			c = i.length;
		let u = a,
			d = n + 1;
		const f = [s];
		for (; d < t.length; ) {
			const h = t[d];
			if (h.match(wu)) break;
			if (h.trim() === '')
				(f.push(h),
					(u += `
`),
					(d += 1));
			else if (h.match(Tk))
				(f.push(h),
					(u += `
${h.slice(c + 2)}`),
					(d += 1));
			else break;
		}
		(e.push({
			indent: c,
			number: parseInt(l, 10),
			content: u.trim(),
			raw: f.join(`
`)
		}),
			(r = d),
			(n = d));
	}
	return [e, r];
}
function pp(t, e, n) {
	var r;
	const s = [];
	let o = 0;
	for (; o < t.length; ) {
		const i = t[o];
		if (i.indent === e) {
			const l = i.content.split(`
`),
				a = ((r = l[0]) == null ? void 0 : r.trim()) || '',
				c = [];
			a && c.push({ type: 'paragraph', raw: a, tokens: n.inlineTokens(a) });
			const u = l
				.slice(1)
				.join(
					`
`
				)
				.trim();
			if (u) {
				const h = n.blockTokens(u);
				c.push(...h);
			}
			let d = o + 1;
			const f = [];
			for (; d < t.length && t[d].indent > e; ) (f.push(t[d]), (d += 1));
			if (f.length > 0) {
				const h = Math.min(...f.map((m) => m.indent)),
					p = pp(f, h, n);
				c.push({
					type: 'list',
					ordered: !0,
					start: f[0].number,
					items: p,
					raw: f.map((m) => m.raw).join(`
`)
				});
			}
			(s.push({ type: 'list_item', raw: i.raw, tokens: c }), (o = d));
		} else o += 1;
	}
	return s;
}
function Ek(t, e) {
	return t.map((n) => {
		if (n.type !== 'list_item') return e.parseChildren([n])[0];
		const r = [];
		return (
			n.tokens &&
				n.tokens.length > 0 &&
				n.tokens.forEach((s) => {
					if (
						s.type === 'paragraph' ||
						s.type === 'list' ||
						s.type === 'blockquote' ||
						s.type === 'code'
					)
						r.push(...e.parseChildren([s]));
					else if (s.type === 'text' && s.tokens) {
						const o = e.parseChildren([s]);
						r.push({ type: 'paragraph', content: o });
					} else {
						const o = e.parseChildren([s]);
						o.length > 0 && r.push(...o);
					}
				}),
			{ type: 'listItem', content: r }
		);
	});
}
var Ak = 'listItem',
	Su = 'textStyle',
	Cu = /^(\d+)\.\s$/,
	mp = mt.create({
		name: 'orderedList',
		addOptions() {
			return { itemTypeName: 'listItem', HTMLAttributes: {}, keepMarks: !1, keepAttributes: !1 };
		},
		group: 'block list',
		content() {
			return `${this.options.itemTypeName}+`;
		},
		addAttributes() {
			return {
				start: {
					default: 1,
					parseHTML: (t) =>
						t.hasAttribute('start') ? parseInt(t.getAttribute('start') || '', 10) : 1
				},
				type: { default: null, parseHTML: (t) => t.getAttribute('type') }
			};
		},
		parseHTML() {
			return [{ tag: 'ol' }];
		},
		renderHTML({ HTMLAttributes: t }) {
			const { start: e, ...n } = t;
			return e === 1
				? ['ol', je(this.options.HTMLAttributes, n), 0]
				: ['ol', je(this.options.HTMLAttributes, t), 0];
		},
		markdownTokenName: 'list',
		parseMarkdown: (t, e) => {
			if (t.type !== 'list' || !t.ordered) return [];
			const n = t.start || 1,
				r = t.items ? Ek(t.items, e) : [];
			return n !== 1
				? { type: 'orderedList', attrs: { start: n }, content: r }
				: { type: 'orderedList', content: r };
		},
		renderMarkdown: (t, e) =>
			t.content
				? e.renderChildren(
						t.content,
						`
`
					)
				: '',
		markdownTokenizer: {
			name: 'orderedList',
			level: 'block',
			start: (t) => {
				const e = t.match(/^(\s*)(\d+)\.\s+/),
					n = e == null ? void 0 : e.index;
				return n !== void 0 ? n : -1;
			},
			tokenize: (t, e, n) => {
				var r;
				const s = t.split(`
`),
					[o, i] = Mk(s);
				if (o.length === 0) return;
				const l = pp(o, 0, n);
				return l.length === 0
					? void 0
					: {
							type: 'list',
							ordered: !0,
							start: ((r = o[0]) == null ? void 0 : r.number) || 1,
							items: l,
							raw: s.slice(0, i).join(`
`)
						};
			}
		},
		markdownOptions: { indentsContent: !0 },
		addCommands() {
			return {
				toggleOrderedList:
					() =>
					({ commands: t, chain: e }) =>
						this.options.keepAttributes
							? e()
									.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
									.updateAttributes(Ak, this.editor.getAttributes(Su))
									.run()
							: t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
			};
		},
		addKeyboardShortcuts() {
			return { 'Mod-Shift-7': () => this.editor.commands.toggleOrderedList() };
		},
		addInputRules() {
			let t = Wr({
				find: Cu,
				type: this.type,
				getAttributes: (e) => ({ start: +e[1] }),
				joinPredicate: (e, n) => n.childCount + n.attrs.start === +e[1]
			});
			return (
				(this.options.keepMarks || this.options.keepAttributes) &&
					(t = Wr({
						find: Cu,
						type: this.type,
						keepMarks: this.options.keepMarks,
						keepAttributes: this.options.keepAttributes,
						getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(Su) }),
						joinPredicate: (e, n) => n.childCount + n.attrs.start === +e[1],
						editor: this.editor
					})),
				[t]
			);
		}
	}),
	Nk = /^\s*(\[([( |x])?\])\s$/,
	Ok = mt.create({
		name: 'taskItem',
		addOptions() {
			return { nested: !1, HTMLAttributes: {}, taskListTypeName: 'taskList', a11y: void 0 };
		},
		content() {
			return this.options.nested ? 'paragraph block*' : 'paragraph+';
		},
		defining: !0,
		addAttributes() {
			return {
				checked: {
					default: !1,
					keepOnSplit: !1,
					parseHTML: (t) => {
						const e = t.getAttribute('data-checked');
						return e === '' || e === 'true';
					},
					renderHTML: (t) => ({ 'data-checked': t.checked })
				}
			};
		},
		parseHTML() {
			return [{ tag: `li[data-type="${this.name}"]`, priority: 51 }];
		},
		renderHTML({ node: t, HTMLAttributes: e }) {
			return [
				'li',
				je(this.options.HTMLAttributes, e, { 'data-type': this.name }),
				[
					'label',
					['input', { type: 'checkbox', checked: t.attrs.checked ? 'checked' : null }],
					['span']
				],
				['div', 0]
			];
		},
		parseMarkdown: (t, e) => {
			const n = [];
			if (
				(t.tokens && t.tokens.length > 0
					? n.push(e.createNode('paragraph', {}, e.parseInline(t.tokens)))
					: t.text
						? n.push(e.createNode('paragraph', {}, [e.createNode('text', { text: t.text })]))
						: n.push(e.createNode('paragraph', {}, [])),
				t.nestedTokens && t.nestedTokens.length > 0)
			) {
				const r = e.parseChildren(t.nestedTokens);
				n.push(...r);
			}
			return e.createNode('taskItem', { checked: t.checked || !1 }, n);
		},
		renderMarkdown: (t, e) => {
			var n;
			const s = `- [${(n = t.attrs) != null && n.checked ? 'x' : ' '}] `;
			return Na(t, e, s);
		},
		addKeyboardShortcuts() {
			const t = {
				Enter: () => this.editor.commands.splitListItem(this.name),
				'Shift-Tab': () => this.editor.commands.liftListItem(this.name)
			};
			return this.options.nested
				? { ...t, Tab: () => this.editor.commands.sinkListItem(this.name) }
				: t;
		},
		addNodeView() {
			return ({ node: t, HTMLAttributes: e, getPos: n, editor: r }) => {
				const s = document.createElement('li'),
					o = document.createElement('label'),
					i = document.createElement('span'),
					l = document.createElement('input'),
					a = document.createElement('div'),
					c = (d) => {
						var f, h;
						l.ariaLabel =
							((h = (f = this.options.a11y) == null ? void 0 : f.checkboxLabel) == null
								? void 0
								: h.call(f, d, l.checked)) ||
							`Task item checkbox for ${d.textContent || 'empty task item'}`;
					};
				(c(t),
					(o.contentEditable = 'false'),
					(l.type = 'checkbox'),
					l.addEventListener('mousedown', (d) => d.preventDefault()),
					l.addEventListener('change', (d) => {
						if (!r.isEditable && !this.options.onReadOnlyChecked) {
							l.checked = !l.checked;
							return;
						}
						const { checked: f } = d.target;
						(r.isEditable &&
							typeof n == 'function' &&
							r
								.chain()
								.focus(void 0, { scrollIntoView: !1 })
								.command(({ tr: h }) => {
									const p = n();
									if (typeof p != 'number') return !1;
									const m = h.doc.nodeAt(p);
									return (
										h.setNodeMarkup(p, void 0, { ...(m == null ? void 0 : m.attrs), checked: f }),
										!0
									);
								})
								.run(),
							!r.isEditable &&
								this.options.onReadOnlyChecked &&
								(this.options.onReadOnlyChecked(t, f) || (l.checked = !l.checked)));
					}),
					Object.entries(this.options.HTMLAttributes).forEach(([d, f]) => {
						s.setAttribute(d, f);
					}),
					(s.dataset.checked = t.attrs.checked),
					(l.checked = t.attrs.checked),
					o.append(l, i),
					s.append(o, a),
					Object.entries(e).forEach(([d, f]) => {
						s.setAttribute(d, f);
					}));
				let u = new Set(Object.keys(e));
				return {
					dom: s,
					contentDOM: a,
					update: (d) => {
						if (d.type !== this.type) return !1;
						((s.dataset.checked = d.attrs.checked), (l.checked = d.attrs.checked), c(d));
						const f = r.extensionManager.attributes,
							h = Ns(d, f),
							p = new Set(Object.keys(h)),
							m = this.options.HTMLAttributes;
						return (
							u.forEach((g) => {
								p.has(g) || (g in m ? s.setAttribute(g, m[g]) : s.removeAttribute(g));
							}),
							Object.entries(h).forEach(([g, b]) => {
								b == null
									? g in m
										? s.setAttribute(g, m[g])
										: s.removeAttribute(g)
									: s.setAttribute(g, b);
							}),
							(u = p),
							!0
						);
					}
				};
			};
		},
		addInputRules() {
			return [
				Wr({
					find: Nk,
					type: this.type,
					getAttributes: (t) => ({ checked: t[t.length - 1] === 'x' })
				})
			];
		}
	}),
	Ik = mt.create({
		name: 'taskList',
		addOptions() {
			return { itemTypeName: 'taskItem', HTMLAttributes: {} };
		},
		group: 'block list',
		content() {
			return `${this.options.itemTypeName}+`;
		},
		parseHTML() {
			return [{ tag: `ul[data-type="${this.name}"]`, priority: 51 }];
		},
		renderHTML({ HTMLAttributes: t }) {
			return ['ul', je(this.options.HTMLAttributes, t, { 'data-type': this.name }), 0];
		},
		parseMarkdown: (t, e) => e.createNode('taskList', {}, e.parseChildren(t.items || [])),
		renderMarkdown: (t, e) =>
			t.content
				? e.renderChildren(
						t.content,
						`
`
					)
				: '',
		markdownTokenizer: {
			name: 'taskList',
			level: 'block',
			start(t) {
				var e;
				const n = (e = t.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)) == null ? void 0 : e.index;
				return n !== void 0 ? n : -1;
			},
			tokenize(t, e, n) {
				const r = (o) => {
						const i = Tl(
							o,
							{
								itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
								extractItemData: (l) => ({
									indentLevel: l[1].length,
									mainContent: l[4],
									checked: l[3].toLowerCase() === 'x'
								}),
								createToken: (l, a) => ({
									type: 'taskItem',
									raw: '',
									mainContent: l.mainContent,
									indentLevel: l.indentLevel,
									checked: l.checked,
									text: l.mainContent,
									tokens: n.inlineTokens(l.mainContent),
									nestedTokens: a
								}),
								customNestedParser: r
							},
							n
						);
						return i ? [{ type: 'taskList', raw: i.raw, items: i.items }] : n.blockTokens(o);
					},
					s = Tl(
						t,
						{
							itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
							extractItemData: (o) => ({
								indentLevel: o[1].length,
								mainContent: o[4],
								checked: o[3].toLowerCase() === 'x'
							}),
							createToken: (o, i) => ({
								type: 'taskItem',
								raw: '',
								mainContent: o.mainContent,
								indentLevel: o.indentLevel,
								checked: o.checked,
								text: o.mainContent,
								tokens: n.inlineTokens(o.mainContent),
								nestedTokens: i
							}),
							customNestedParser: r
						},
						n
					);
				if (s) return { type: 'taskList', raw: s.raw, items: s.items };
			}
		},
		markdownOptions: { indentsContent: !0 },
		addCommands() {
			return {
				toggleTaskList:
					() =>
					({ commands: t }) =>
						t.toggleList(this.name, this.options.itemTypeName)
			};
		},
		addKeyboardShortcuts() {
			return { 'Mod-Shift-9': () => this.editor.commands.toggleTaskList() };
		}
	}),
	Dk = Ue.create({
		name: 'listKit',
		addExtensions() {
			const t = [];
			return (
				this.options.bulletList !== !1 && t.push(ip.configure(this.options.bulletList)),
				this.options.listItem !== !1 && t.push(lp.configure(this.options.listItem)),
				this.options.listKeymap !== !1 && t.push(hp.configure(this.options.listKeymap)),
				this.options.orderedList !== !1 && t.push(mp.configure(this.options.orderedList)),
				this.options.taskItem !== !1 && t.push(Ok.configure(this.options.taskItem)),
				this.options.taskList !== !1 && t.push(Ik.configure(this.options.taskList)),
				t
			);
		}
	}),
	Tu = '&nbsp;',
	Rk = ' ',
	Lk = mt.create({
		name: 'paragraph',
		priority: 1e3,
		addOptions() {
			return { HTMLAttributes: {} };
		},
		group: 'block',
		content: 'inline*',
		parseHTML() {
			return [{ tag: 'p' }];
		},
		renderHTML({ HTMLAttributes: t }) {
			return ['p', je(this.options.HTMLAttributes, t), 0];
		},
		parseMarkdown: (t, e) => {
			const n = t.tokens || [];
			if (n.length === 1 && n[0].type === 'image') return e.parseChildren([n[0]]);
			const r = e.parseInline(n);
			return r.length === 1 && r[0].type === 'text' && (r[0].text === Tu || r[0].text === Rk)
				? e.createNode('paragraph', void 0, [])
				: e.createNode('paragraph', void 0, r);
		},
		renderMarkdown: (t, e, n) => {
			var r, s;
			if (!t) return '';
			const o = Array.isArray(t.content) ? t.content : [];
			if (o.length === 0) {
				const i = Array.isArray(
					(r = n == null ? void 0 : n.previousNode) == null ? void 0 : r.content
				)
					? n.previousNode.content
					: [];
				return ((s = n == null ? void 0 : n.previousNode) == null ? void 0 : s.type) ===
					'paragraph' && i.length === 0
					? Tu
					: '';
			}
			return e.renderChildren(o);
		},
		addCommands() {
			return {
				setParagraph:
					() =>
					({ commands: t }) =>
						t.setNode(this.name)
			};
		},
		addKeyboardShortcuts() {
			return { 'Mod-Alt-0': () => this.editor.commands.setParagraph() };
		}
	}),
	Pk = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/,
	zk = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g,
	Bk = nr.create({
		name: 'strike',
		addOptions() {
			return { HTMLAttributes: {} };
		},
		parseHTML() {
			return [
				{ tag: 's' },
				{ tag: 'del' },
				{ tag: 'strike' },
				{
					style: 'text-decoration',
					consuming: !1,
					getAttrs: (t) => (t.includes('line-through') ? {} : !1)
				}
			];
		},
		renderHTML({ HTMLAttributes: t }) {
			return ['s', je(this.options.HTMLAttributes, t), 0];
		},
		markdownTokenName: 'del',
		parseMarkdown: (t, e) => e.applyMark('strike', e.parseInline(t.tokens || [])),
		renderMarkdown: (t, e) => `~~${e.renderChildren(t)}~~`,
		addCommands() {
			return {
				setStrike:
					() =>
					({ commands: t }) =>
						t.setMark(this.name),
				toggleStrike:
					() =>
					({ commands: t }) =>
						t.toggleMark(this.name),
				unsetStrike:
					() =>
					({ commands: t }) =>
						t.unsetMark(this.name)
			};
		},
		addKeyboardShortcuts() {
			return { 'Mod-Shift-s': () => this.editor.commands.toggleStrike() };
		},
		addInputRules() {
			return [Yn({ find: Pk, type: this.type })];
		},
		addPasteRules() {
			return [Zn({ find: zk, type: this.type })];
		}
	}),
	$k = mt.create({
		name: 'text',
		group: 'inline',
		parseMarkdown: (t) => ({ type: 'text', text: t.text || '' }),
		renderMarkdown: (t) => t.text || ''
	}),
	_k = nr.create({
		name: 'underline',
		addOptions() {
			return { HTMLAttributes: {} };
		},
		parseHTML() {
			return [
				{ tag: 'u' },
				{
					style: 'text-decoration',
					consuming: !1,
					getAttrs: (t) => (t.includes('underline') ? {} : !1)
				}
			];
		},
		renderHTML({ HTMLAttributes: t }) {
			return ['u', je(this.options.HTMLAttributes, t), 0];
		},
		parseMarkdown(t, e) {
			return e.applyMark(this.name || 'underline', e.parseInline(t.tokens || []));
		},
		renderMarkdown(t, e) {
			return `++${e.renderChildren(t)}++`;
		},
		markdownTokenizer: {
			name: 'underline',
			level: 'inline',
			start(t) {
				return t.indexOf('++');
			},
			tokenize(t, e, n) {
				const s = /^(\+\+)([\s\S]+?)(\+\+)/.exec(t);
				if (!s) return;
				const o = s[2].trim();
				return { type: 'underline', raw: s[0], text: o, tokens: n.inlineTokens(o) };
			}
		},
		addCommands() {
			return {
				setUnderline:
					() =>
					({ commands: t }) =>
						t.setMark(this.name),
				toggleUnderline:
					() =>
					({ commands: t }) =>
						t.toggleMark(this.name),
				unsetUnderline:
					() =>
					({ commands: t }) =>
						t.unsetMark(this.name)
			};
		},
		addKeyboardShortcuts() {
			return {
				'Mod-u': () => this.editor.commands.toggleUnderline(),
				'Mod-U': () => this.editor.commands.toggleUnderline()
			};
		}
	});
function Hk(t = {}) {
	return new ze({
		view(e) {
			return new Fk(e, t);
		}
	});
}
class Fk {
	constructor(e, n) {
		var r;
		((this.editorView = e),
			(this.cursorPos = null),
			(this.element = null),
			(this.timeout = -1),
			(this.width = (r = n.width) !== null && r !== void 0 ? r : 1),
			(this.color = n.color === !1 ? void 0 : n.color || 'black'),
			(this.class = n.class),
			(this.handlers = ['dragover', 'dragend', 'drop', 'dragleave'].map((s) => {
				let o = (i) => {
					this[s](i);
				};
				return (e.dom.addEventListener(s, o), { name: s, handler: o });
			})));
	}
	destroy() {
		this.handlers.forEach(({ name: e, handler: n }) =>
			this.editorView.dom.removeEventListener(e, n)
		);
	}
	update(e, n) {
		this.cursorPos != null &&
			n.doc != e.state.doc &&
			(this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
	}
	setCursor(e) {
		e != this.cursorPos &&
			((this.cursorPos = e),
			e == null
				? (this.element.parentNode.removeChild(this.element), (this.element = null))
				: this.updateOverlay());
	}
	updateOverlay() {
		let e = this.editorView.state.doc.resolve(this.cursorPos),
			n = !e.parent.inlineContent,
			r,
			s = this.editorView.dom,
			o = s.getBoundingClientRect(),
			i = o.width / s.offsetWidth,
			l = o.height / s.offsetHeight;
		if (n) {
			let d = e.nodeBefore,
				f = e.nodeAfter;
			if (d || f) {
				let h = this.editorView.nodeDOM(this.cursorPos - (d ? d.nodeSize : 0));
				if (h) {
					let p = h.getBoundingClientRect(),
						m = d ? p.bottom : p.top;
					d &&
						f &&
						(m = (m + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
					let g = (this.width / 2) * l;
					r = { left: p.left, right: p.right, top: m - g, bottom: m + g };
				}
			}
		}
		if (!r) {
			let d = this.editorView.coordsAtPos(this.cursorPos),
				f = (this.width / 2) * i;
			r = { left: d.left - f, right: d.left + f, top: d.top, bottom: d.bottom };
		}
		let a = this.editorView.dom.offsetParent;
		(this.element ||
			((this.element = a.appendChild(document.createElement('div'))),
			this.class && (this.element.className = this.class),
			(this.element.style.cssText = 'position: absolute; z-index: 50; pointer-events: none;'),
			this.color && (this.element.style.backgroundColor = this.color)),
			this.element.classList.toggle('prosemirror-dropcursor-block', n),
			this.element.classList.toggle('prosemirror-dropcursor-inline', !n));
		let c, u;
		if (!a || (a == document.body && getComputedStyle(a).position == 'static'))
			((c = -pageXOffset), (u = -pageYOffset));
		else {
			let d = a.getBoundingClientRect(),
				f = d.width / a.offsetWidth,
				h = d.height / a.offsetHeight;
			((c = d.left - a.scrollLeft * f), (u = d.top - a.scrollTop * h));
		}
		((this.element.style.left = (r.left - c) / i + 'px'),
			(this.element.style.top = (r.top - u) / l + 'px'),
			(this.element.style.width = (r.right - r.left) / i + 'px'),
			(this.element.style.height = (r.bottom - r.top) / l + 'px'));
	}
	scheduleRemoval(e) {
		(clearTimeout(this.timeout), (this.timeout = setTimeout(() => this.setCursor(null), e)));
	}
	dragover(e) {
		if (!this.editorView.editable) return;
		let n = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }),
			r = n && n.inside >= 0 && this.editorView.state.doc.nodeAt(n.inside),
			s = r && r.type.spec.disableDropCursor,
			o = typeof s == 'function' ? s(this.editorView, n, e) : s;
		if (n && !o) {
			let i = n.pos;
			if (this.editorView.dragging && this.editorView.dragging.slice) {
				let l = ff(this.editorView.state.doc, i, this.editorView.dragging.slice);
				l != null && (i = l);
			}
			(this.setCursor(i), this.scheduleRemoval(5e3));
		}
	}
	dragend() {
		this.scheduleRemoval(20);
	}
	drop() {
		this.scheduleRemoval(20);
	}
	dragleave(e) {
		this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
	}
}
class it extends ve {
	constructor(e) {
		super(e, e);
	}
	map(e, n) {
		let r = e.resolve(n.map(this.head));
		return it.valid(r) ? new it(r) : ve.near(r);
	}
	content() {
		return X.empty;
	}
	eq(e) {
		return e instanceof it && e.head == this.head;
	}
	toJSON() {
		return { type: 'gapcursor', pos: this.head };
	}
	static fromJSON(e, n) {
		if (typeof n.pos != 'number') throw new RangeError('Invalid input for GapCursor.fromJSON');
		return new it(e.resolve(n.pos));
	}
	getBookmark() {
		return new Ha(this.anchor);
	}
	static valid(e) {
		let n = e.parent;
		if (n.inlineContent || !Vk(e) || !Wk(e)) return !1;
		let r = n.type.spec.allowGapCursor;
		if (r != null) return r;
		let s = n.contentMatchAt(e.index()).defaultType;
		return s && s.isTextblock;
	}
	static findGapCursorFrom(e, n, r = !1) {
		e: for (;;) {
			if (!r && it.valid(e)) return e;
			let s = e.pos,
				o = null;
			for (let i = e.depth; ; i--) {
				let l = e.node(i);
				if (n > 0 ? e.indexAfter(i) < l.childCount : e.index(i) > 0) {
					o = l.child(n > 0 ? e.indexAfter(i) : e.index(i) - 1);
					break;
				} else if (i == 0) return null;
				s += n;
				let a = e.doc.resolve(s);
				if (it.valid(a)) return a;
			}
			for (;;) {
				let i = n > 0 ? o.firstChild : o.lastChild;
				if (!i) {
					if (o.isAtom && !o.isText && !fe.isSelectable(o)) {
						((e = e.doc.resolve(s + o.nodeSize * n)), (r = !1));
						continue e;
					}
					break;
				}
				((o = i), (s += n));
				let l = e.doc.resolve(s);
				if (it.valid(l)) return l;
			}
			return null;
		}
	}
}
it.prototype.visible = !1;
it.findFrom = it.findGapCursorFrom;
ve.jsonID('gapcursor', it);
class Ha {
	constructor(e) {
		this.pos = e;
	}
	map(e) {
		return new Ha(e.map(this.pos));
	}
	resolve(e) {
		let n = e.resolve(this.pos);
		return it.valid(n) ? new it(n) : ve.near(n);
	}
}
function gp(t) {
	return t.isAtom || t.spec.isolating || t.spec.createGapCursor;
}
function Vk(t) {
	for (let e = t.depth; e >= 0; e--) {
		let n = t.index(e),
			r = t.node(e);
		if (n == 0) {
			if (r.type.spec.isolating) return !0;
			continue;
		}
		for (let s = r.child(n - 1); ; s = s.lastChild) {
			if ((s.childCount == 0 && !s.inlineContent) || gp(s.type)) return !0;
			if (s.inlineContent) return !1;
		}
	}
	return !0;
}
function Wk(t) {
	for (let e = t.depth; e >= 0; e--) {
		let n = t.indexAfter(e),
			r = t.node(e);
		if (n == r.childCount) {
			if (r.type.spec.isolating) return !0;
			continue;
		}
		for (let s = r.child(n); ; s = s.firstChild) {
			if ((s.childCount == 0 && !s.inlineContent) || gp(s.type)) return !0;
			if (s.inlineContent) return !1;
		}
	}
	return !0;
}
function jk() {
	return new ze({
		props: {
			decorations: Jk,
			createSelectionBetween(t, e, n) {
				return e.pos == n.pos && it.valid(n) ? new it(n) : null;
			},
			handleClick: qk,
			handleKeyDown: Uk,
			handleDOMEvents: { beforeinput: Kk }
		}
	});
}
const Uk = ya({
	ArrowLeft: no('horiz', -1),
	ArrowRight: no('horiz', 1),
	ArrowUp: no('vert', -1),
	ArrowDown: no('vert', 1)
});
function no(t, e) {
	const n = t == 'vert' ? (e > 0 ? 'down' : 'up') : e > 0 ? 'right' : 'left';
	return function (r, s, o) {
		let i = r.selection,
			l = e > 0 ? i.$to : i.$from,
			a = i.empty;
		if (i instanceof pe) {
			if (!o.endOfTextblock(n) || l.depth == 0) return !1;
			((a = !1), (l = r.doc.resolve(e > 0 ? l.after() : l.before())));
		}
		let c = it.findGapCursorFrom(l, e, a);
		return c ? (s && s(r.tr.setSelection(new it(c))), !0) : !1;
	};
}
function qk(t, e, n) {
	if (!t || !t.editable) return !1;
	let r = t.state.doc.resolve(e);
	if (!it.valid(r)) return !1;
	let s = t.posAtCoords({ left: n.clientX, top: n.clientY });
	return s && s.inside > -1 && fe.isSelectable(t.state.doc.nodeAt(s.inside))
		? !1
		: (t.dispatch(t.state.tr.setSelection(new it(r))), !0);
}
function Kk(t, e) {
	if (e.inputType != 'insertCompositionText' || !(t.state.selection instanceof it)) return !1;
	let { $from: n } = t.state.selection,
		r = n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);
	if (!r) return !1;
	let s = z.empty;
	for (let i = r.length - 1; i >= 0; i--) s = z.from(r[i].createAndFill(null, s));
	let o = t.state.tr.replace(n.pos, n.pos, new X(s, 0, 0));
	return (o.setSelection(pe.near(o.doc.resolve(n.pos + 1))), t.dispatch(o), !1);
}
function Jk(t) {
	if (!(t.selection instanceof it)) return null;
	let e = document.createElement('div');
	return (
		(e.className = 'ProseMirror-gapcursor'),
		Ve.create(t.doc, [tt.widget(t.selection.head, e, { key: 'gapcursor' })])
	);
}
var ri = 200,
	vt = function () {};
vt.prototype.append = function (e) {
	return e.length
		? ((e = vt.from(e)),
			(!this.length && e) ||
				(e.length < ri && this.leafAppend(e)) ||
				(this.length < ri && e.leafPrepend(this)) ||
				this.appendInner(e))
		: this;
};
vt.prototype.prepend = function (e) {
	return e.length ? vt.from(e).append(this) : this;
};
vt.prototype.appendInner = function (e) {
	return new Gk(this, e);
};
vt.prototype.slice = function (e, n) {
	return (
		e === void 0 && (e = 0),
		n === void 0 && (n = this.length),
		e >= n ? vt.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, n))
	);
};
vt.prototype.get = function (e) {
	if (!(e < 0 || e >= this.length)) return this.getInner(e);
};
vt.prototype.forEach = function (e, n, r) {
	(n === void 0 && (n = 0),
		r === void 0 && (r = this.length),
		n <= r ? this.forEachInner(e, n, r, 0) : this.forEachInvertedInner(e, n, r, 0));
};
vt.prototype.map = function (e, n, r) {
	(n === void 0 && (n = 0), r === void 0 && (r = this.length));
	var s = [];
	return (
		this.forEach(
			function (o, i) {
				return s.push(e(o, i));
			},
			n,
			r
		),
		s
	);
};
vt.from = function (e) {
	return e instanceof vt ? e : e && e.length ? new yp(e) : vt.empty;
};
var yp = (function (t) {
	function e(r) {
		(t.call(this), (this.values = r));
	}
	(t && (e.__proto__ = t),
		(e.prototype = Object.create(t && t.prototype)),
		(e.prototype.constructor = e));
	var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
	return (
		(e.prototype.flatten = function () {
			return this.values;
		}),
		(e.prototype.sliceInner = function (s, o) {
			return s == 0 && o == this.length ? this : new e(this.values.slice(s, o));
		}),
		(e.prototype.getInner = function (s) {
			return this.values[s];
		}),
		(e.prototype.forEachInner = function (s, o, i, l) {
			for (var a = o; a < i; a++) if (s(this.values[a], l + a) === !1) return !1;
		}),
		(e.prototype.forEachInvertedInner = function (s, o, i, l) {
			for (var a = o - 1; a >= i; a--) if (s(this.values[a], l + a) === !1) return !1;
		}),
		(e.prototype.leafAppend = function (s) {
			if (this.length + s.length <= ri) return new e(this.values.concat(s.flatten()));
		}),
		(e.prototype.leafPrepend = function (s) {
			if (this.length + s.length <= ri) return new e(s.flatten().concat(this.values));
		}),
		(n.length.get = function () {
			return this.values.length;
		}),
		(n.depth.get = function () {
			return 0;
		}),
		Object.defineProperties(e.prototype, n),
		e
	);
})(vt);
vt.empty = new yp([]);
var Gk = (function (t) {
	function e(n, r) {
		(t.call(this),
			(this.left = n),
			(this.right = r),
			(this.length = n.length + r.length),
			(this.depth = Math.max(n.depth, r.depth) + 1));
	}
	return (
		t && (e.__proto__ = t),
		(e.prototype = Object.create(t && t.prototype)),
		(e.prototype.constructor = e),
		(e.prototype.flatten = function () {
			return this.left.flatten().concat(this.right.flatten());
		}),
		(e.prototype.getInner = function (r) {
			return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
		}),
		(e.prototype.forEachInner = function (r, s, o, i) {
			var l = this.left.length;
			if (
				(s < l && this.left.forEachInner(r, s, Math.min(o, l), i) === !1) ||
				(o > l &&
					this.right.forEachInner(r, Math.max(s - l, 0), Math.min(this.length, o) - l, i + l) ===
						!1)
			)
				return !1;
		}),
		(e.prototype.forEachInvertedInner = function (r, s, o, i) {
			var l = this.left.length;
			if (
				(s > l && this.right.forEachInvertedInner(r, s - l, Math.max(o, l) - l, i + l) === !1) ||
				(o < l && this.left.forEachInvertedInner(r, Math.min(s, l), o, i) === !1)
			)
				return !1;
		}),
		(e.prototype.sliceInner = function (r, s) {
			if (r == 0 && s == this.length) return this;
			var o = this.left.length;
			return s <= o
				? this.left.slice(r, s)
				: r >= o
					? this.right.slice(r - o, s - o)
					: this.left.slice(r, o).append(this.right.slice(0, s - o));
		}),
		(e.prototype.leafAppend = function (r) {
			var s = this.right.leafAppend(r);
			if (s) return new e(this.left, s);
		}),
		(e.prototype.leafPrepend = function (r) {
			var s = this.left.leafPrepend(r);
			if (s) return new e(s, this.right);
		}),
		(e.prototype.appendInner = function (r) {
			return this.left.depth >= Math.max(this.right.depth, r.depth) + 1
				? new e(this.left, new e(this.right, r))
				: new e(this, r);
		}),
		e
	);
})(vt);
const Xk = 500;
class sn {
	constructor(e, n) {
		((this.items = e), (this.eventCount = n));
	}
	popEvent(e, n) {
		if (this.eventCount == 0) return null;
		let r = this.items.length;
		for (; ; r--)
			if (this.items.get(r - 1).selection) {
				--r;
				break;
			}
		let s, o;
		n && ((s = this.remapping(r, this.items.length)), (o = s.maps.length));
		let i = e.tr,
			l,
			a,
			c = [],
			u = [];
		return (
			this.items.forEach(
				(d, f) => {
					if (!d.step) {
						(s || ((s = this.remapping(r, f + 1)), (o = s.maps.length)), o--, u.push(d));
						return;
					}
					if (s) {
						u.push(new pn(d.map));
						let h = d.step.map(s.slice(o)),
							p;
						(h &&
							i.maybeStep(h).doc &&
							((p = i.mapping.maps[i.mapping.maps.length - 1]),
							c.push(new pn(p, void 0, void 0, c.length + u.length))),
							o--,
							p && s.appendMap(p, o));
					} else i.maybeStep(d.step);
					if (d.selection)
						return (
							(l = s ? d.selection.map(s.slice(o)) : d.selection),
							(a = new sn(
								this.items.slice(0, r).append(u.reverse().concat(c)),
								this.eventCount - 1
							)),
							!1
						);
				},
				this.items.length,
				0
			),
			{ remaining: a, transform: i, selection: l }
		);
	}
	addTransform(e, n, r, s) {
		let o = [],
			i = this.eventCount,
			l = this.items,
			a = !s && l.length ? l.get(l.length - 1) : null;
		for (let u = 0; u < e.steps.length; u++) {
			let d = e.steps[u].invert(e.docs[u]),
				f = new pn(e.mapping.maps[u], d, n),
				h;
			((h = a && a.merge(f)) && ((f = h), u ? o.pop() : (l = l.slice(0, l.length - 1))),
				o.push(f),
				n && (i++, (n = void 0)),
				s || (a = f));
		}
		let c = i - r.depth;
		return (c > Yk && ((l = Qk(l, c)), (i -= c)), new sn(l.append(o), i));
	}
	remapping(e, n) {
		let r = new Ss();
		return (
			this.items.forEach(
				(s, o) => {
					let i =
						s.mirrorOffset != null && o - s.mirrorOffset >= e
							? r.maps.length - s.mirrorOffset
							: void 0;
					r.appendMap(s.map, i);
				},
				e,
				n
			),
			r
		);
	}
	addMaps(e) {
		return this.eventCount == 0
			? this
			: new sn(this.items.append(e.map((n) => new pn(n))), this.eventCount);
	}
	rebased(e, n) {
		if (!this.eventCount) return this;
		let r = [],
			s = Math.max(0, this.items.length - n),
			o = e.mapping,
			i = e.steps.length,
			l = this.eventCount;
		this.items.forEach((f) => {
			f.selection && l--;
		}, s);
		let a = n;
		this.items.forEach((f) => {
			let h = o.getMirror(--a);
			if (h == null) return;
			i = Math.min(i, h);
			let p = o.maps[h];
			if (f.step) {
				let m = e.steps[h].invert(e.docs[h]),
					g = f.selection && f.selection.map(o.slice(a + 1, h));
				(g && l++, r.push(new pn(p, m, g)));
			} else r.push(new pn(p));
		}, s);
		let c = [];
		for (let f = n; f < i; f++) c.push(new pn(o.maps[f]));
		let u = this.items.slice(0, s).append(c).append(r),
			d = new sn(u, l);
		return (d.emptyItemCount() > Xk && (d = d.compress(this.items.length - r.length)), d);
	}
	emptyItemCount() {
		let e = 0;
		return (
			this.items.forEach((n) => {
				n.step || e++;
			}),
			e
		);
	}
	compress(e = this.items.length) {
		let n = this.remapping(0, e),
			r = n.maps.length,
			s = [],
			o = 0;
		return (
			this.items.forEach(
				(i, l) => {
					if (l >= e) (s.push(i), i.selection && o++);
					else if (i.step) {
						let a = i.step.map(n.slice(r)),
							c = a && a.getMap();
						if ((r--, c && n.appendMap(c, r), a)) {
							let u = i.selection && i.selection.map(n.slice(r));
							u && o++;
							let d = new pn(c.invert(), a, u),
								f,
								h = s.length - 1;
							(f = s.length && s[h].merge(d)) ? (s[h] = f) : s.push(d);
						}
					} else i.map && r--;
				},
				this.items.length,
				0
			),
			new sn(vt.from(s.reverse()), o)
		);
	}
}
sn.empty = new sn(vt.empty, 0);
function Qk(t, e) {
	let n;
	return (
		t.forEach((r, s) => {
			if (r.selection && e-- == 0) return ((n = s), !1);
		}),
		t.slice(n)
	);
}
class pn {
	constructor(e, n, r, s) {
		((this.map = e), (this.step = n), (this.selection = r), (this.mirrorOffset = s));
	}
	merge(e) {
		if (this.step && e.step && !e.selection) {
			let n = e.step.merge(this.step);
			if (n) return new pn(n.getMap().invert(), n, this.selection);
		}
	}
}
class Hn {
	constructor(e, n, r, s, o) {
		((this.done = e),
			(this.undone = n),
			(this.prevRanges = r),
			(this.prevTime = s),
			(this.prevComposition = o));
	}
}
const Yk = 20;
function Zk(t, e, n, r) {
	let s = n.getMeta(pr),
		o;
	if (s) return s.historyState;
	n.getMeta(nx) && (t = new Hn(t.done, t.undone, null, 0, -1));
	let i = n.getMeta('appendedTransaction');
	if (n.steps.length == 0) return t;
	if (i && i.getMeta(pr))
		return i.getMeta(pr).redo
			? new Hn(
					t.done.addTransform(n, void 0, r, fo(e)),
					t.undone,
					Mu(n.mapping.maps),
					t.prevTime,
					t.prevComposition
				)
			: new Hn(
					t.done,
					t.undone.addTransform(n, void 0, r, fo(e)),
					null,
					t.prevTime,
					t.prevComposition
				);
	if (n.getMeta('addToHistory') !== !1 && !(i && i.getMeta('addToHistory') === !1)) {
		let l = n.getMeta('composition'),
			a =
				t.prevTime == 0 ||
				(!i &&
					t.prevComposition != l &&
					(t.prevTime < (n.time || 0) - r.newGroupDelay || !ex(n, t.prevRanges))),
			c = i ? Yi(t.prevRanges, n.mapping) : Mu(n.mapping.maps);
		return new Hn(
			t.done.addTransform(n, a ? e.selection.getBookmark() : void 0, r, fo(e)),
			sn.empty,
			c,
			n.time,
			l ?? t.prevComposition
		);
	} else
		return (o = n.getMeta('rebased'))
			? new Hn(
					t.done.rebased(n, o),
					t.undone.rebased(n, o),
					Yi(t.prevRanges, n.mapping),
					t.prevTime,
					t.prevComposition
				)
			: new Hn(
					t.done.addMaps(n.mapping.maps),
					t.undone.addMaps(n.mapping.maps),
					Yi(t.prevRanges, n.mapping),
					t.prevTime,
					t.prevComposition
				);
}
function ex(t, e) {
	if (!e) return !1;
	if (!t.docChanged) return !0;
	let n = !1;
	return (
		t.mapping.maps[0].forEach((r, s) => {
			for (let o = 0; o < e.length; o += 2) r <= e[o + 1] && s >= e[o] && (n = !0);
		}),
		n
	);
}
function Mu(t) {
	let e = [];
	for (let n = t.length - 1; n >= 0 && e.length == 0; n--)
		t[n].forEach((r, s, o, i) => e.push(o, i));
	return e;
}
function Yi(t, e) {
	if (!t) return null;
	let n = [];
	for (let r = 0; r < t.length; r += 2) {
		let s = e.map(t[r], 1),
			o = e.map(t[r + 1], -1);
		s <= o && n.push(s, o);
	}
	return n;
}
function tx(t, e, n) {
	let r = fo(e),
		s = pr.get(e).spec.config,
		o = (n ? t.undone : t.done).popEvent(e, r);
	if (!o) return null;
	let i = o.selection.resolve(o.transform.doc),
		l = (n ? t.done : t.undone).addTransform(o.transform, e.selection.getBookmark(), s, r),
		a = new Hn(n ? l : o.remaining, n ? o.remaining : l, null, 0, -1);
	return o.transform.setSelection(i).setMeta(pr, { redo: n, historyState: a });
}
let Zi = !1,
	Eu = null;
function fo(t) {
	let e = t.plugins;
	if (Eu != e) {
		((Zi = !1), (Eu = e));
		for (let n = 0; n < e.length; n++)
			if (e[n].spec.historyPreserveItems) {
				Zi = !0;
				break;
			}
	}
	return Zi;
}
const pr = new _e('history'),
	nx = new _e('closeHistory');
function rx(t = {}) {
	return (
		(t = { depth: t.depth || 100, newGroupDelay: t.newGroupDelay || 500 }),
		new ze({
			key: pr,
			state: {
				init() {
					return new Hn(sn.empty, sn.empty, null, 0, -1);
				},
				apply(e, n, r) {
					return Zk(n, r, e, t);
				}
			},
			config: t,
			props: {
				handleDOMEvents: {
					beforeinput(e, n) {
						let r = n.inputType,
							s = r == 'historyUndo' ? vp : r == 'historyRedo' ? kp : null;
						return !s || !e.editable ? !1 : (n.preventDefault(), s(e.state, e.dispatch));
					}
				}
			}
		})
	);
}
function bp(t, e) {
	return (n, r) => {
		let s = pr.getState(n);
		if (!s || (t ? s.undone : s.done).eventCount == 0) return !1;
		if (r) {
			let o = tx(s, n, t);
			o && r(e ? o.scrollIntoView() : o);
		}
		return !0;
	};
}
const vp = bp(!1, !0),
	kp = bp(!0, !0);
var sx = Ue.create({
		name: 'characterCount',
		addOptions() {
			return {
				limit: null,
				mode: 'textSize',
				textCounter: (t) => t.length,
				wordCounter: (t) => t.split(' ').filter((e) => e !== '').length
			};
		},
		addStorage() {
			return { characters: () => 0, words: () => 0 };
		},
		onBeforeCreate() {
			((this.storage.characters = (t) => {
				const e = (t == null ? void 0 : t.node) || this.editor.state.doc;
				if (((t == null ? void 0 : t.mode) || this.options.mode) === 'textSize') {
					const r = e.textBetween(0, e.content.size, void 0, ' ');
					return this.options.textCounter(r);
				}
				return e.nodeSize;
			}),
				(this.storage.words = (t) => {
					const e = (t == null ? void 0 : t.node) || this.editor.state.doc,
						n = e.textBetween(0, e.content.size, ' ', ' ');
					return this.options.wordCounter(n);
				}));
		},
		addProseMirrorPlugins() {
			let t = !1;
			return [
				new ze({
					key: new _e('characterCount'),
					appendTransaction: (e, n, r) => {
						if (t) return;
						const s = this.options.limit;
						if (s == null || s === 0) {
							t = !0;
							return;
						}
						const o = this.storage.characters({ node: r.doc });
						if (o > s) {
							const i = o - s,
								l = 0,
								a = i;
							console.warn(
								`[CharacterCount] Initial content exceeded limit of ${s} characters. Content was automatically trimmed.`
							);
							const c = r.tr.deleteRange(l, a);
							return ((t = !0), c);
						}
						t = !0;
					},
					filterTransaction: (e, n) => {
						const r = this.options.limit;
						if (!e.docChanged || r === 0 || r === null || r === void 0) return !0;
						const s = this.storage.characters({ node: n.doc }),
							o = this.storage.characters({ node: e.doc });
						if (o <= r || (s > r && o > r && o <= s)) return !0;
						if ((s > r && o > r && o > s) || !e.getMeta('paste')) return !1;
						const l = e.selection.$head.pos,
							a = o - r,
							c = l - a,
							u = l;
						return (e.deleteRange(c, u), !(this.storage.characters({ node: e.doc }) > r));
					}
				})
			];
		}
	}),
	ox = Ue.create({
		name: 'dropCursor',
		addOptions() {
			return { color: 'currentColor', width: 1, class: void 0 };
		},
		addProseMirrorPlugins() {
			return [Hk(this.options)];
		}
	});
Ue.create({
	name: 'focus',
	addOptions() {
		return { className: 'has-focus', mode: 'all' };
	},
	addProseMirrorPlugins() {
		return [
			new ze({
				key: new _e('focus'),
				props: {
					decorations: ({ doc: t, selection: e }) => {
						const { isEditable: n, isFocused: r } = this.editor,
							{ anchor: s } = e,
							o = [];
						if (!n || !r) return Ve.create(t, []);
						let i = 0;
						this.options.mode === 'deepest' &&
							t.descendants((a, c) => {
								if (a.isText) return;
								if (!(s >= c && s <= c + a.nodeSize - 1)) return !1;
								i += 1;
							});
						let l = 0;
						return (
							t.descendants((a, c) => {
								if (a.isText || !(s >= c && s <= c + a.nodeSize - 1)) return !1;
								if (
									((l += 1),
									(this.options.mode === 'deepest' && i - l > 0) ||
										(this.options.mode === 'shallowest' && l > 1))
								)
									return this.options.mode === 'deepest';
								o.push(tt.node(c, c + a.nodeSize, { class: this.options.className }));
							}),
							Ve.create(t, o)
						);
					}
				}
			})
		];
	}
});
var ix = Ue.create({
		name: 'gapCursor',
		addProseMirrorPlugins() {
			return [jk()];
		},
		extendNodeSchema(t) {
			var e;
			const n = { name: t.name, options: t.options, storage: t.storage };
			return { allowGapCursor: (e = Fe(ie(t, 'allowGapCursor', n))) != null ? e : null };
		}
	}),
	Au = 'placeholder';
function lx(t) {
	return t
		.replace(/\s+/g, '-')
		.replace(/[^a-zA-Z0-9-]/g, '')
		.replace(/^[0-9-]+/, '')
		.replace(/^-+/, '')
		.toLowerCase();
}
var ax = Ue.create({
	name: 'placeholder',
	addOptions() {
		return {
			emptyEditorClass: 'is-editor-empty',
			emptyNodeClass: 'is-empty',
			dataAttribute: Au,
			placeholder: 'Write something …',
			showOnlyWhenEditable: !0,
			showOnlyCurrent: !0,
			includeChildren: !1
		};
	},
	addProseMirrorPlugins() {
		const t = this.options.dataAttribute ? `data-${lx(this.options.dataAttribute)}` : `data-${Au}`;
		return [
			new ze({
				key: new _e('placeholder'),
				props: {
					decorations: ({ doc: e, selection: n }) => {
						const r = this.editor.isEditable || !this.options.showOnlyWhenEditable,
							{ anchor: s } = n,
							o = [];
						if (!r) return null;
						const i = this.editor.isEmpty;
						return (
							e.descendants((l, a) => {
								const c = s >= a && s <= a + l.nodeSize,
									u = !l.isLeaf && mi(l);
								if ((c || !this.options.showOnlyCurrent) && u) {
									const d = [this.options.emptyNodeClass];
									i && d.push(this.options.emptyEditorClass);
									const f = tt.node(a, a + l.nodeSize, {
										class: d.join(' '),
										[t]:
											typeof this.options.placeholder == 'function'
												? this.options.placeholder({
														editor: this.editor,
														node: l,
														pos: a,
														hasAnchor: c
													})
												: this.options.placeholder
									});
									o.push(f);
								}
								return this.options.includeChildren;
							}),
							Ve.create(e, o)
						);
					}
				}
			})
		];
	}
});
Ue.create({
	name: 'selection',
	addOptions() {
		return { className: 'selection' };
	},
	addProseMirrorPlugins() {
		const { editor: t, options: e } = this;
		return [
			new ze({
				key: new _e('selection'),
				props: {
					decorations(n) {
						return n.selection.empty ||
							t.isFocused ||
							!t.isEditable ||
							Ah(n.selection) ||
							t.view.dragging
							? null
							: Ve.create(n.doc, [
									tt.inline(n.selection.from, n.selection.to, { class: e.className })
								]);
					}
				}
			})
		];
	}
});
function Nu({ types: t, node: e }) {
	return (e && Array.isArray(t) && t.includes(e.type)) || (e == null ? void 0 : e.type) === t;
}
var cx = Ue.create({
		name: 'trailingNode',
		addOptions() {
			return { node: void 0, notAfter: [] };
		},
		addProseMirrorPlugins() {
			var t;
			const e = new _e(this.name),
				n =
					this.options.node ||
					((t = this.editor.schema.topNodeType.contentMatch.defaultType) == null
						? void 0
						: t.name) ||
					'paragraph',
				r = Object.entries(this.editor.schema.nodes)
					.map(([, s]) => s)
					.filter((s) => (this.options.notAfter || []).concat(n).includes(s.name));
			return [
				new ze({
					key: e,
					appendTransaction: (s, o, i) => {
						const { doc: l, tr: a, schema: c } = i,
							u = e.getState(i),
							d = l.content.size,
							f = c.nodes[n];
						if (u) return a.insert(d, f.create());
					},
					state: {
						init: (s, o) => {
							const i = o.tr.doc.lastChild;
							return !Nu({ node: i, types: r });
						},
						apply: (s, o) => {
							if (!s.docChanged || s.getMeta('__uniqueIDTransaction')) return o;
							const i = s.doc.lastChild;
							return !Nu({ node: i, types: r });
						}
					}
				})
			];
		}
	}),
	ux = Ue.create({
		name: 'undoRedo',
		addOptions() {
			return { depth: 100, newGroupDelay: 500 };
		},
		addCommands() {
			return {
				undo:
					() =>
					({ state: t, dispatch: e }) =>
						vp(t, e),
				redo:
					() =>
					({ state: t, dispatch: e }) =>
						kp(t, e)
			};
		},
		addProseMirrorPlugins() {
			return [rx(this.options)];
		},
		addKeyboardShortcuts() {
			return {
				'Mod-z': () => this.editor.commands.undo(),
				'Shift-Mod-z': () => this.editor.commands.redo(),
				'Mod-y': () => this.editor.commands.redo(),
				'Mod-я': () => this.editor.commands.undo(),
				'Shift-Mod-я': () => this.editor.commands.redo()
			};
		}
	}),
	dx = Ue.create({
		name: 'starterKit',
		addExtensions() {
			var t, e, n, r;
			const s = [];
			return (
				this.options.bold !== !1 && s.push(Lv.configure(this.options.bold)),
				this.options.blockquote !== !1 && s.push(Nv.configure(this.options.blockquote)),
				this.options.bulletList !== !1 && s.push(ip.configure(this.options.bulletList)),
				this.options.code !== !1 && s.push(Gh.configure(this.options.code)),
				this.options.codeBlock !== !1 && s.push(Xh.configure(this.options.codeBlock)),
				this.options.document !== !1 && s.push(Hv.configure(this.options.document)),
				this.options.dropcursor !== !1 && s.push(ox.configure(this.options.dropcursor)),
				this.options.gapcursor !== !1 && s.push(ix.configure(this.options.gapcursor)),
				this.options.hardBreak !== !1 && s.push(Fv.configure(this.options.hardBreak)),
				this.options.heading !== !1 && s.push(Vv.configure(this.options.heading)),
				this.options.undoRedo !== !1 && s.push(ux.configure(this.options.undoRedo)),
				this.options.horizontalRule !== !1 && s.push(Wv.configure(this.options.horizontalRule)),
				this.options.italic !== !1 && s.push(Jv.configure(this.options.italic)),
				this.options.listItem !== !1 && s.push(lp.configure(this.options.listItem)),
				this.options.listKeymap !== !1 &&
					s.push(hp.configure((t = this.options) == null ? void 0 : t.listKeymap)),
				this.options.link !== !1 &&
					s.push(vk.configure((e = this.options) == null ? void 0 : e.link)),
				this.options.orderedList !== !1 && s.push(mp.configure(this.options.orderedList)),
				this.options.paragraph !== !1 && s.push(Lk.configure(this.options.paragraph)),
				this.options.strike !== !1 && s.push(Bk.configure(this.options.strike)),
				this.options.text !== !1 && s.push($k.configure(this.options.text)),
				this.options.underline !== !1 &&
					s.push(_k.configure((n = this.options) == null ? void 0 : n.underline)),
				this.options.trailingNode !== !1 &&
					s.push(cx.configure((r = this.options) == null ? void 0 : r.trailingNode)),
				s
			);
		}
	}),
	fx = dx;
let zl, Bl;
if (typeof WeakMap < 'u') {
	let t = new WeakMap();
	((zl = (e) => t.get(e)), (Bl = (e, n) => (t.set(e, n), n)));
} else {
	const t = [];
	let n = 0;
	((zl = (r) => {
		for (let s = 0; s < t.length; s += 2) if (t[s] == r) return t[s + 1];
	}),
		(Bl = (r, s) => (n == 10 && (n = 0), (t[n++] = r), (t[n++] = s))));
}
var lt = class {
	constructor(t, e, n, r) {
		((this.width = t), (this.height = e), (this.map = n), (this.problems = r));
	}
	findCell(t) {
		for (let e = 0; e < this.map.length; e++) {
			const n = this.map[e];
			if (n != t) continue;
			const r = e % this.width,
				s = (e / this.width) | 0;
			let o = r + 1,
				i = s + 1;
			for (let l = 1; o < this.width && this.map[e + l] == n; l++) o++;
			for (let l = 1; i < this.height && this.map[e + this.width * l] == n; l++) i++;
			return { left: r, top: s, right: o, bottom: i };
		}
		throw new RangeError(`No cell with offset ${t} found`);
	}
	colCount(t) {
		for (let e = 0; e < this.map.length; e++) if (this.map[e] == t) return e % this.width;
		throw new RangeError(`No cell with offset ${t} found`);
	}
	nextCell(t, e, n) {
		const { left: r, right: s, top: o, bottom: i } = this.findCell(t);
		return e == 'horiz'
			? (n < 0 ? r == 0 : s == this.width)
				? null
				: this.map[o * this.width + (n < 0 ? r - 1 : s)]
			: (n < 0 ? o == 0 : i == this.height)
				? null
				: this.map[r + this.width * (n < 0 ? o - 1 : i)];
	}
	rectBetween(t, e) {
		const { left: n, right: r, top: s, bottom: o } = this.findCell(t),
			{ left: i, right: l, top: a, bottom: c } = this.findCell(e);
		return {
			left: Math.min(n, i),
			top: Math.min(s, a),
			right: Math.max(r, l),
			bottom: Math.max(o, c)
		};
	}
	cellsInRect(t) {
		const e = [],
			n = {};
		for (let r = t.top; r < t.bottom; r++)
			for (let s = t.left; s < t.right; s++) {
				const o = r * this.width + s,
					i = this.map[o];
				n[i] ||
					((n[i] = !0),
					!(
						(s == t.left && s && this.map[o - 1] == i) ||
						(r == t.top && r && this.map[o - this.width] == i)
					) && e.push(i));
			}
		return e;
	}
	positionAt(t, e, n) {
		for (let r = 0, s = 0; ; r++) {
			const o = s + n.child(r).nodeSize;
			if (r == t) {
				let i = e + t * this.width;
				const l = (t + 1) * this.width;
				for (; i < l && this.map[i] < s; ) i++;
				return i == l ? o - 1 : this.map[i];
			}
			s = o;
		}
	}
	static get(t) {
		return zl(t) || Bl(t, hx(t));
	}
};
function hx(t) {
	if (t.type.spec.tableRole != 'table') throw new RangeError('Not a table node: ' + t.type.name);
	const e = px(t),
		n = t.childCount,
		r = [];
	let s = 0,
		o = null;
	const i = [];
	for (let c = 0, u = e * n; c < u; c++) r[c] = 0;
	for (let c = 0, u = 0; c < n; c++) {
		const d = t.child(c);
		u++;
		for (let p = 0; ; p++) {
			for (; s < r.length && r[s] != 0; ) s++;
			if (p == d.childCount) break;
			const m = d.child(p),
				{ colspan: g, rowspan: b, colwidth: S } = m.attrs;
			for (let O = 0; O < b; O++) {
				if (O + c >= n) {
					(o || (o = [])).push({ type: 'overlong_rowspan', pos: u, n: b - O });
					break;
				}
				const H = s + O * e;
				for (let E = 0; E < g; E++) {
					r[H + E] == 0
						? (r[H + E] = u)
						: (o || (o = [])).push({ type: 'collision', row: c, pos: u, n: g - E });
					const x = S && S[E];
					if (x) {
						const k = ((H + E) % e) * 2,
							M = i[k];
						M == null || (M != x && i[k + 1] == 1)
							? ((i[k] = x), (i[k + 1] = 1))
							: M == x && i[k + 1]++;
					}
				}
			}
			((s += g), (u += m.nodeSize));
		}
		const f = (c + 1) * e;
		let h = 0;
		for (; s < f; ) r[s++] == 0 && h++;
		(h && (o || (o = [])).push({ type: 'missing', row: c, n: h }), u++);
	}
	(e === 0 || n === 0) && (o || (o = [])).push({ type: 'zero_sized' });
	const l = new lt(e, n, r, o);
	let a = !1;
	for (let c = 0; !a && c < i.length; c += 2) i[c] != null && i[c + 1] < n && (a = !0);
	return (a && mx(l, i, t), l);
}
function px(t) {
	let e = -1,
		n = !1;
	for (let r = 0; r < t.childCount; r++) {
		const s = t.child(r);
		let o = 0;
		if (n)
			for (let i = 0; i < r; i++) {
				const l = t.child(i);
				for (let a = 0; a < l.childCount; a++) {
					const c = l.child(a);
					i + c.attrs.rowspan > r && (o += c.attrs.colspan);
				}
			}
		for (let i = 0; i < s.childCount; i++) {
			const l = s.child(i);
			((o += l.attrs.colspan), l.attrs.rowspan > 1 && (n = !0));
		}
		e == -1 ? (e = o) : e != o && (e = Math.max(e, o));
	}
	return e;
}
function mx(t, e, n) {
	t.problems || (t.problems = []);
	const r = {};
	for (let s = 0; s < t.map.length; s++) {
		const o = t.map[s];
		if (r[o]) continue;
		r[o] = !0;
		const i = n.nodeAt(o);
		if (!i) throw new RangeError(`No cell with offset ${o} found`);
		let l = null;
		const a = i.attrs;
		for (let c = 0; c < a.colspan; c++) {
			const u = e[((s + c) % t.width) * 2];
			u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = gx(a)))[c] = u);
		}
		l && t.problems.unshift({ type: 'colwidth mismatch', pos: o, colwidth: l });
	}
}
function gx(t) {
	if (t.colwidth) return t.colwidth.slice();
	const e = [];
	for (let n = 0; n < t.colspan; n++) e.push(0);
	return e;
}
function Ot(t) {
	let e = t.cached.tableNodeTypes;
	if (!e) {
		e = t.cached.tableNodeTypes = {};
		for (const n in t.nodes) {
			const r = t.nodes[n],
				s = r.spec.tableRole;
			s && (e[s] = r);
		}
	}
	return e;
}
const Wn = new _e('selectingCells');
function xr(t) {
	for (let e = t.depth - 1; e > 0; e--)
		if (t.node(e).type.spec.tableRole == 'row') return t.node(0).resolve(t.before(e + 1));
	return null;
}
function yx(t) {
	for (let e = t.depth; e > 0; e--) {
		const n = t.node(e).type.spec.tableRole;
		if (n === 'cell' || n === 'header_cell') return t.node(e);
	}
	return null;
}
function an(t) {
	const e = t.selection.$head;
	for (let n = e.depth; n > 0; n--) if (e.node(n).type.spec.tableRole == 'row') return !0;
	return !1;
}
function bi(t) {
	const e = t.selection;
	if ('$anchorCell' in e && e.$anchorCell)
		return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
	if ('node' in e && e.node && e.node.type.spec.tableRole == 'cell') return e.$anchor;
	const n = xr(e.$head) || bx(e.$head);
	if (n) return n;
	throw new RangeError(`No cell found around position ${e.head}`);
}
function bx(t) {
	for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
		const r = e.type.spec.tableRole;
		if (r == 'cell' || r == 'header_cell') return t.doc.resolve(n);
	}
	for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
		const r = e.type.spec.tableRole;
		if (r == 'cell' || r == 'header_cell') return t.doc.resolve(n - e.nodeSize);
	}
}
function $l(t) {
	return t.parent.type.spec.tableRole == 'row' && !!t.nodeAfter;
}
function vx(t) {
	return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function Fa(t, e) {
	return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function xp(t, e, n) {
	const r = t.node(-1),
		s = lt.get(r),
		o = t.start(-1),
		i = s.nextCell(t.pos - o, e, n);
	return i == null ? null : t.node(0).resolve(o + i);
}
function wr(t, e, n = 1) {
	const r = { ...t, colspan: t.colspan - n };
	return (
		r.colwidth &&
			((r.colwidth = r.colwidth.slice()),
			r.colwidth.splice(e, n),
			r.colwidth.some((s) => s > 0) || (r.colwidth = null)),
		r
	);
}
function wp(t, e, n = 1) {
	const r = { ...t, colspan: t.colspan + n };
	if (r.colwidth) {
		r.colwidth = r.colwidth.slice();
		for (let s = 0; s < n; s++) r.colwidth.splice(e, 0, 0);
	}
	return r;
}
function kx(t, e, n) {
	const r = Ot(e.type.schema).header_cell;
	for (let s = 0; s < t.height; s++) if (e.nodeAt(t.map[n + s * t.width]).type != r) return !1;
	return !0;
}
var Ge = class Mn extends ve {
	constructor(e, n = e) {
		const r = e.node(-1),
			s = lt.get(r),
			o = e.start(-1),
			i = s.rectBetween(e.pos - o, n.pos - o),
			l = e.node(0),
			a = s.cellsInRect(i).filter((u) => u != n.pos - o);
		a.unshift(n.pos - o);
		const c = a.map((u) => {
			const d = r.nodeAt(u);
			if (!d) throw new RangeError(`No cell with offset ${u} found`);
			const f = o + u + 1;
			return new yf(l.resolve(f), l.resolve(f + d.content.size));
		});
		(super(c[0].$from, c[0].$to, c), (this.$anchorCell = e), (this.$headCell = n));
	}
	map(e, n) {
		const r = e.resolve(n.map(this.$anchorCell.pos)),
			s = e.resolve(n.map(this.$headCell.pos));
		if ($l(r) && $l(s) && Fa(r, s)) {
			const o = this.$anchorCell.node(-1) != r.node(-1);
			return o && this.isRowSelection()
				? Mn.rowSelection(r, s)
				: o && this.isColSelection()
					? Mn.colSelection(r, s)
					: new Mn(r, s);
		}
		return pe.between(r, s);
	}
	content() {
		const e = this.$anchorCell.node(-1),
			n = lt.get(e),
			r = this.$anchorCell.start(-1),
			s = n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r),
			o = {},
			i = [];
		for (let a = s.top; a < s.bottom; a++) {
			const c = [];
			for (let u = a * n.width + s.left, d = s.left; d < s.right; d++, u++) {
				const f = n.map[u];
				if (o[f]) continue;
				o[f] = !0;
				const h = n.findCell(f);
				let p = e.nodeAt(f);
				if (!p) throw new RangeError(`No cell with offset ${f} found`);
				const m = s.left - h.left,
					g = h.right - s.right;
				if (m > 0 || g > 0) {
					let b = p.attrs;
					if (
						(m > 0 && (b = wr(b, 0, m)), g > 0 && (b = wr(b, b.colspan - g, g)), h.left < s.left)
					) {
						if (((p = p.type.createAndFill(b)), !p))
							throw new RangeError(`Could not create cell with attrs ${JSON.stringify(b)}`);
					} else p = p.type.create(b, p.content);
				}
				if (h.top < s.top || h.bottom > s.bottom) {
					const b = { ...p.attrs, rowspan: Math.min(h.bottom, s.bottom) - Math.max(h.top, s.top) };
					h.top < s.top ? (p = p.type.createAndFill(b)) : (p = p.type.create(b, p.content));
				}
				c.push(p);
			}
			i.push(e.child(a).copy(z.from(c)));
		}
		const l = this.isColSelection() && this.isRowSelection() ? e : i;
		return new X(z.from(l), 1, 1);
	}
	replace(e, n = X.empty) {
		const r = e.steps.length,
			s = this.ranges;
		for (let i = 0; i < s.length; i++) {
			const { $from: l, $to: a } = s[i],
				c = e.mapping.slice(r);
			e.replace(c.map(l.pos), c.map(a.pos), i ? X.empty : n);
		}
		const o = ve.findFrom(e.doc.resolve(e.mapping.slice(r).map(this.to)), -1);
		o && e.setSelection(o);
	}
	replaceWith(e, n) {
		this.replace(e, new X(z.from(n), 0, 0));
	}
	forEachCell(e) {
		const n = this.$anchorCell.node(-1),
			r = lt.get(n),
			s = this.$anchorCell.start(-1),
			o = r.cellsInRect(r.rectBetween(this.$anchorCell.pos - s, this.$headCell.pos - s));
		for (let i = 0; i < o.length; i++) e(n.nodeAt(o[i]), s + o[i]);
	}
	isColSelection() {
		const e = this.$anchorCell.index(-1),
			n = this.$headCell.index(-1);
		if (Math.min(e, n) > 0) return !1;
		const r = e + this.$anchorCell.nodeAfter.attrs.rowspan,
			s = n + this.$headCell.nodeAfter.attrs.rowspan;
		return Math.max(r, s) == this.$headCell.node(-1).childCount;
	}
	static colSelection(e, n = e) {
		const r = e.node(-1),
			s = lt.get(r),
			o = e.start(-1),
			i = s.findCell(e.pos - o),
			l = s.findCell(n.pos - o),
			a = e.node(0);
		return (
			i.top <= l.top
				? (i.top > 0 && (e = a.resolve(o + s.map[i.left])),
					l.bottom < s.height && (n = a.resolve(o + s.map[s.width * (s.height - 1) + l.right - 1])))
				: (l.top > 0 && (n = a.resolve(o + s.map[l.left])),
					i.bottom < s.height &&
						(e = a.resolve(o + s.map[s.width * (s.height - 1) + i.right - 1]))),
			new Mn(e, n)
		);
	}
	isRowSelection() {
		const e = this.$anchorCell.node(-1),
			n = lt.get(e),
			r = this.$anchorCell.start(-1),
			s = n.colCount(this.$anchorCell.pos - r),
			o = n.colCount(this.$headCell.pos - r);
		if (Math.min(s, o) > 0) return !1;
		const i = s + this.$anchorCell.nodeAfter.attrs.colspan,
			l = o + this.$headCell.nodeAfter.attrs.colspan;
		return Math.max(i, l) == n.width;
	}
	eq(e) {
		return (
			e instanceof Mn &&
			e.$anchorCell.pos == this.$anchorCell.pos &&
			e.$headCell.pos == this.$headCell.pos
		);
	}
	static rowSelection(e, n = e) {
		const r = e.node(-1),
			s = lt.get(r),
			o = e.start(-1),
			i = s.findCell(e.pos - o),
			l = s.findCell(n.pos - o),
			a = e.node(0);
		return (
			i.left <= l.left
				? (i.left > 0 && (e = a.resolve(o + s.map[i.top * s.width])),
					l.right < s.width && (n = a.resolve(o + s.map[s.width * (l.top + 1) - 1])))
				: (l.left > 0 && (n = a.resolve(o + s.map[l.top * s.width])),
					i.right < s.width && (e = a.resolve(o + s.map[s.width * (i.top + 1) - 1]))),
			new Mn(e, n)
		);
	}
	toJSON() {
		return { type: 'cell', anchor: this.$anchorCell.pos, head: this.$headCell.pos };
	}
	static fromJSON(e, n) {
		return new Mn(e.resolve(n.anchor), e.resolve(n.head));
	}
	static create(e, n, r = n) {
		return new Mn(e.resolve(n), e.resolve(r));
	}
	getBookmark() {
		return new xx(this.$anchorCell.pos, this.$headCell.pos);
	}
};
Ge.prototype.visible = !1;
ve.jsonID('cell', Ge);
var xx = class Sp {
	constructor(e, n) {
		((this.anchor = e), (this.head = n));
	}
	map(e) {
		return new Sp(e.map(this.anchor), e.map(this.head));
	}
	resolve(e) {
		const n = e.resolve(this.anchor),
			r = e.resolve(this.head);
		return n.parent.type.spec.tableRole == 'row' &&
			r.parent.type.spec.tableRole == 'row' &&
			n.index() < n.parent.childCount &&
			r.index() < r.parent.childCount &&
			Fa(n, r)
			? new Ge(n, r)
			: ve.near(r, 1);
	}
};
function wx(t) {
	if (!(t.selection instanceof Ge)) return null;
	const e = [];
	return (
		t.selection.forEachCell((n, r) => {
			e.push(tt.node(r, r + n.nodeSize, { class: 'selectedCell' }));
		}),
		Ve.create(t.doc, e)
	);
}
function Sx({ $from: t, $to: e }) {
	if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
	let n = t.pos,
		r = e.pos,
		s = t.depth;
	for (; s >= 0 && !(t.after(s + 1) < t.end(s)); s--, n++);
	for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--);
	return n == r && /row|table/.test(t.node(s).type.spec.tableRole);
}
function Cx({ $from: t, $to: e }) {
	let n, r;
	for (let s = t.depth; s > 0; s--) {
		const o = t.node(s);
		if (o.type.spec.tableRole === 'cell' || o.type.spec.tableRole === 'header_cell') {
			n = o;
			break;
		}
	}
	for (let s = e.depth; s > 0; s--) {
		const o = e.node(s);
		if (o.type.spec.tableRole === 'cell' || o.type.spec.tableRole === 'header_cell') {
			r = o;
			break;
		}
	}
	return n !== r && e.parentOffset === 0;
}
function Tx(t, e, n) {
	const r = (e || t).selection,
		s = (e || t).doc;
	let o, i;
	if (r instanceof fe && (i = r.node.type.spec.tableRole)) {
		if (i == 'cell' || i == 'header_cell') o = Ge.create(s, r.from);
		else if (i == 'row') {
			const l = s.resolve(r.from + 1);
			o = Ge.rowSelection(l, l);
		} else if (!n) {
			const l = lt.get(r.node),
				a = r.from + 1,
				c = a + l.map[l.width * l.height - 1];
			o = Ge.create(s, a + 1, c);
		}
	} else
		r instanceof pe && Sx(r)
			? (o = pe.create(s, r.from))
			: r instanceof pe && Cx(r) && (o = pe.create(s, r.$from.start(), r.$from.end()));
	return (o && (e || (e = t.tr)).setSelection(o), e);
}
const Mx = new _e('fix-tables');
function Cp(t, e, n, r) {
	const s = t.childCount,
		o = e.childCount;
	e: for (let i = 0, l = 0; i < o; i++) {
		const a = e.child(i);
		for (let c = l, u = Math.min(s, i + 3); c < u; c++)
			if (t.child(c) == a) {
				((l = c + 1), (n += a.nodeSize));
				continue e;
			}
		(r(a, n),
			l < s && t.child(l).sameMarkup(a)
				? Cp(t.child(l), a, n + 1, r)
				: a.nodesBetween(0, a.content.size, r, n + 1),
			(n += a.nodeSize));
	}
}
function Tp(t, e) {
	let n;
	const r = (s, o) => {
		s.type.spec.tableRole == 'table' && (n = Ex(t, s, o, n));
	};
	return (e ? e.doc != t.doc && Cp(e.doc, t.doc, 0, r) : t.doc.descendants(r), n);
}
function Ex(t, e, n, r) {
	const s = lt.get(e);
	if (!s.problems) return r;
	r || (r = t.tr);
	const o = [];
	for (let a = 0; a < s.height; a++) o.push(0);
	for (let a = 0; a < s.problems.length; a++) {
		const c = s.problems[a];
		if (c.type == 'collision') {
			const u = e.nodeAt(c.pos);
			if (!u) continue;
			const d = u.attrs;
			for (let f = 0; f < d.rowspan; f++) o[c.row + f] += c.n;
			r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, wr(d, d.colspan - c.n, c.n));
		} else if (c.type == 'missing') o[c.row] += c.n;
		else if (c.type == 'overlong_rowspan') {
			const u = e.nodeAt(c.pos);
			if (!u) continue;
			r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, {
				...u.attrs,
				rowspan: u.attrs.rowspan - c.n
			});
		} else if (c.type == 'colwidth mismatch') {
			const u = e.nodeAt(c.pos);
			if (!u) continue;
			r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, { ...u.attrs, colwidth: c.colwidth });
		} else if (c.type == 'zero_sized') {
			const u = r.mapping.map(n);
			r.delete(u, u + e.nodeSize);
		}
	}
	let i, l;
	for (let a = 0; a < o.length; a++) o[a] && (i == null && (i = a), (l = a));
	for (let a = 0, c = n + 1; a < s.height; a++) {
		const u = e.child(a),
			d = c + u.nodeSize,
			f = o[a];
		if (f > 0) {
			let h = 'cell';
			u.firstChild && (h = u.firstChild.type.spec.tableRole);
			const p = [];
			for (let g = 0; g < f; g++) {
				const b = Ot(t.schema)[h].createAndFill();
				b && p.push(b);
			}
			const m = (a == 0 || i == a - 1) && l == a ? c + 1 : d - 1;
			r.insert(r.mapping.map(m), p);
		}
		c = d;
	}
	return r.setMeta(Mx, { fixTables: !0 });
}
function bn(t) {
	const e = t.selection,
		n = bi(t),
		r = n.node(-1),
		s = n.start(-1),
		o = lt.get(r);
	return {
		...(e instanceof Ge
			? o.rectBetween(e.$anchorCell.pos - s, e.$headCell.pos - s)
			: o.findCell(n.pos - s)),
		tableStart: s,
		map: o,
		table: r
	};
}
function Mp(t, { map: e, tableStart: n, table: r }, s) {
	let o = s > 0 ? -1 : 0;
	kx(e, r, s + o) && (o = s == 0 || s == e.width ? null : 0);
	for (let i = 0; i < e.height; i++) {
		const l = i * e.width + s;
		if (s > 0 && s < e.width && e.map[l - 1] == e.map[l]) {
			const a = e.map[l],
				c = r.nodeAt(a);
			(t.setNodeMarkup(t.mapping.map(n + a), null, wp(c.attrs, s - e.colCount(a))),
				(i += c.attrs.rowspan - 1));
		} else {
			const a = o == null ? Ot(r.type.schema).cell : r.nodeAt(e.map[l + o]).type,
				c = e.positionAt(i, s, r);
			t.insert(t.mapping.map(n + c), a.createAndFill());
		}
	}
	return t;
}
function Ax(t, e) {
	if (!an(t)) return !1;
	if (e) {
		const n = bn(t);
		e(Mp(t.tr, n, n.left));
	}
	return !0;
}
function Nx(t, e) {
	if (!an(t)) return !1;
	if (e) {
		const n = bn(t);
		e(Mp(t.tr, n, n.right));
	}
	return !0;
}
function Ox(t, { map: e, table: n, tableStart: r }, s) {
	const o = t.mapping.maps.length;
	for (let i = 0; i < e.height; ) {
		const l = i * e.width + s,
			a = e.map[l],
			c = n.nodeAt(a),
			u = c.attrs;
		if ((s > 0 && e.map[l - 1] == a) || (s < e.width - 1 && e.map[l + 1] == a))
			t.setNodeMarkup(t.mapping.slice(o).map(r + a), null, wr(u, s - e.colCount(a)));
		else {
			const d = t.mapping.slice(o).map(r + a);
			t.delete(d, d + c.nodeSize);
		}
		i += u.rowspan;
	}
}
function Ix(t, e) {
	if (!an(t)) return !1;
	if (e) {
		const n = bn(t),
			r = t.tr;
		if (n.left == 0 && n.right == n.map.width) return !1;
		for (let s = n.right - 1; Ox(r, n, s), s != n.left; s--) {
			const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!o) throw new RangeError('No table found');
			((n.table = o), (n.map = lt.get(o)));
		}
		e(r);
	}
	return !0;
}
function Dx(t, e, n) {
	var r;
	const s = Ot(e.type.schema).header_cell;
	for (let o = 0; o < t.width; o++)
		if (((r = e.nodeAt(t.map[o + n * t.width])) === null || r === void 0 ? void 0 : r.type) != s)
			return !1;
	return !0;
}
function Ep(t, { map: e, tableStart: n, table: r }, s) {
	let o = n;
	for (let c = 0; c < s; c++) o += r.child(c).nodeSize;
	const i = [];
	let l = s > 0 ? -1 : 0;
	Dx(e, r, s + l) && (l = s == 0 || s == e.height ? null : 0);
	for (let c = 0, u = e.width * s; c < e.width; c++, u++)
		if (s > 0 && s < e.height && e.map[u] == e.map[u - e.width]) {
			const d = e.map[u],
				f = r.nodeAt(d).attrs;
			(t.setNodeMarkup(n + d, null, { ...f, rowspan: f.rowspan + 1 }), (c += f.colspan - 1));
		} else {
			var a;
			const d =
					l == null
						? Ot(r.type.schema).cell
						: (a = r.nodeAt(e.map[u + l * e.width])) === null || a === void 0
							? void 0
							: a.type,
				f = d == null ? void 0 : d.createAndFill();
			f && i.push(f);
		}
	return (t.insert(o, Ot(r.type.schema).row.create(null, i)), t);
}
function Rx(t, e) {
	if (!an(t)) return !1;
	if (e) {
		const n = bn(t);
		e(Ep(t.tr, n, n.top));
	}
	return !0;
}
function Lx(t, e) {
	if (!an(t)) return !1;
	if (e) {
		const n = bn(t);
		e(Ep(t.tr, n, n.bottom));
	}
	return !0;
}
function Px(t, { map: e, table: n, tableStart: r }, s) {
	let o = 0;
	for (let c = 0; c < s; c++) o += n.child(c).nodeSize;
	const i = o + n.child(s).nodeSize,
		l = t.mapping.maps.length;
	t.delete(o + r, i + r);
	const a = new Set();
	for (let c = 0, u = s * e.width; c < e.width; c++, u++) {
		const d = e.map[u];
		if (!a.has(d)) {
			if ((a.add(d), s > 0 && d == e.map[u - e.width])) {
				const f = n.nodeAt(d).attrs;
				(t.setNodeMarkup(t.mapping.slice(l).map(d + r), null, { ...f, rowspan: f.rowspan - 1 }),
					(c += f.colspan - 1));
			} else if (s < e.height && d == e.map[u + e.width]) {
				const f = n.nodeAt(d),
					h = f.attrs,
					p = f.type.create({ ...h, rowspan: f.attrs.rowspan - 1 }, f.content),
					m = e.positionAt(s + 1, c, n);
				(t.insert(t.mapping.slice(l).map(r + m), p), (c += h.colspan - 1));
			}
		}
	}
}
function zx(t, e) {
	if (!an(t)) return !1;
	if (e) {
		const n = bn(t),
			r = t.tr;
		if (n.top == 0 && n.bottom == n.map.height) return !1;
		for (let s = n.bottom - 1; Px(r, n, s), s != n.top; s--) {
			const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!o) throw new RangeError('No table found');
			((n.table = o), (n.map = lt.get(n.table)));
		}
		e(r);
	}
	return !0;
}
function Ou(t) {
	const e = t.content;
	return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function Bx({ width: t, height: e, map: n }, r) {
	let s = r.top * t + r.left,
		o = s,
		i = (r.bottom - 1) * t + r.left,
		l = s + (r.right - r.left - 1);
	for (let a = r.top; a < r.bottom; a++) {
		if ((r.left > 0 && n[o] == n[o - 1]) || (r.right < t && n[l] == n[l + 1])) return !0;
		((o += t), (l += t));
	}
	for (let a = r.left; a < r.right; a++) {
		if ((r.top > 0 && n[s] == n[s - t]) || (r.bottom < e && n[i] == n[i + t])) return !0;
		(s++, i++);
	}
	return !1;
}
function Iu(t, e) {
	const n = t.selection;
	if (!(n instanceof Ge) || n.$anchorCell.pos == n.$headCell.pos) return !1;
	const r = bn(t),
		{ map: s } = r;
	if (Bx(s, r)) return !1;
	if (e) {
		const o = t.tr,
			i = {};
		let l = z.empty,
			a,
			c;
		for (let u = r.top; u < r.bottom; u++)
			for (let d = r.left; d < r.right; d++) {
				const f = s.map[u * s.width + d],
					h = r.table.nodeAt(f);
				if (!(i[f] || !h))
					if (((i[f] = !0), a == null)) ((a = f), (c = h));
					else {
						Ou(h) || (l = l.append(h.content));
						const p = o.mapping.map(f + r.tableStart);
						o.delete(p, p + h.nodeSize);
					}
			}
		if (a == null || c == null) return !0;
		if (
			(o.setNodeMarkup(a + r.tableStart, null, {
				...wp(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
				rowspan: r.bottom - r.top
			}),
			l.size > 0)
		) {
			const u = a + 1 + c.content.size,
				d = Ou(c) ? a + 1 : u;
			o.replaceWith(d + r.tableStart, u + r.tableStart, l);
		}
		(o.setSelection(new Ge(o.doc.resolve(a + r.tableStart))), e(o));
	}
	return !0;
}
function Du(t, e) {
	const n = Ot(t.schema);
	return $x(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function $x(t) {
	return (e, n) => {
		const r = e.selection;
		let s, o;
		if (r instanceof Ge) {
			if (r.$anchorCell.pos != r.$headCell.pos) return !1;
			((s = r.$anchorCell.nodeAfter), (o = r.$anchorCell.pos));
		} else {
			var i;
			if (((s = yx(r.$from)), !s)) return !1;
			o = (i = xr(r.$from)) === null || i === void 0 ? void 0 : i.pos;
		}
		if (s == null || o == null || (s.attrs.colspan == 1 && s.attrs.rowspan == 1)) return !1;
		if (n) {
			let l = s.attrs;
			const a = [],
				c = l.colwidth;
			(l.rowspan > 1 && (l = { ...l, rowspan: 1 }), l.colspan > 1 && (l = { ...l, colspan: 1 }));
			const u = bn(e),
				d = e.tr;
			for (let h = 0; h < u.right - u.left; h++)
				a.push(c ? { ...l, colwidth: c && c[h] ? [c[h]] : null } : l);
			let f;
			for (let h = u.top; h < u.bottom; h++) {
				let p = u.map.positionAt(h, u.left, u.table);
				h == u.top && (p += s.nodeSize);
				for (let m = u.left, g = 0; m < u.right; m++, g++)
					(m == u.left && h == u.top) ||
						d.insert(
							(f = d.mapping.map(p + u.tableStart, 1)),
							t({ node: s, row: h, col: m }).createAndFill(a[g])
						);
			}
			(d.setNodeMarkup(o, t({ node: s, row: u.top, col: u.left }), a[0]),
				r instanceof Ge &&
					d.setSelection(new Ge(d.doc.resolve(r.$anchorCell.pos), f ? d.doc.resolve(f) : void 0)),
				n(d));
		}
		return !0;
	};
}
function _x(t, e) {
	return function (n, r) {
		if (!an(n)) return !1;
		const s = bi(n);
		if (s.nodeAfter.attrs[t] === e) return !1;
		if (r) {
			const o = n.tr;
			(n.selection instanceof Ge
				? n.selection.forEachCell((i, l) => {
						i.attrs[t] !== e && o.setNodeMarkup(l, null, { ...i.attrs, [t]: e });
					})
				: o.setNodeMarkup(s.pos, null, { ...s.nodeAfter.attrs, [t]: e }),
				r(o));
		}
		return !0;
	};
}
function Hx(t) {
	return function (e, n) {
		if (!an(e)) return !1;
		if (n) {
			const r = Ot(e.schema),
				s = bn(e),
				o = e.tr,
				i = s.map.cellsInRect(
					t == 'column'
						? { left: s.left, top: 0, right: s.right, bottom: s.map.height }
						: t == 'row'
							? { left: 0, top: s.top, right: s.map.width, bottom: s.bottom }
							: s
				),
				l = i.map((a) => s.table.nodeAt(a));
			for (let a = 0; a < i.length; a++)
				l[a].type == r.header_cell && o.setNodeMarkup(s.tableStart + i[a], r.cell, l[a].attrs);
			if (o.steps.length === 0)
				for (let a = 0; a < i.length; a++)
					o.setNodeMarkup(s.tableStart + i[a], r.header_cell, l[a].attrs);
			n(o);
		}
		return !0;
	};
}
function Ru(t, e, n) {
	const r = e.map.cellsInRect({
		left: 0,
		top: 0,
		right: t == 'row' ? e.map.width : 1,
		bottom: t == 'column' ? e.map.height : 1
	});
	for (let s = 0; s < r.length; s++) {
		const o = e.table.nodeAt(r[s]);
		if (o && o.type !== n.header_cell) return !1;
	}
	return !0;
}
function Ds(t, e) {
	return (
		(e = e || { useDeprecatedLogic: !1 }),
		e.useDeprecatedLogic
			? Hx(t)
			: function (n, r) {
					if (!an(n)) return !1;
					if (r) {
						const s = Ot(n.schema),
							o = bn(n),
							i = n.tr,
							l = Ru('row', o, s),
							a = Ru('column', o, s),
							c = (t === 'column' ? l : t === 'row' && a) ? 1 : 0,
							u =
								t == 'column'
									? { left: 0, top: c, right: 1, bottom: o.map.height }
									: t == 'row'
										? { left: c, top: 0, right: o.map.width, bottom: 1 }
										: o,
							d =
								t == 'column'
									? a
										? s.cell
										: s.header_cell
									: t == 'row'
										? l
											? s.cell
											: s.header_cell
										: s.cell;
						(o.map.cellsInRect(u).forEach((f) => {
							const h = f + o.tableStart,
								p = i.doc.nodeAt(h);
							p && i.setNodeMarkup(h, d, p.attrs);
						}),
							r(i));
					}
					return !0;
				}
	);
}
Ds('row', { useDeprecatedLogic: !0 });
Ds('column', { useDeprecatedLogic: !0 });
const Fx = Ds('cell', { useDeprecatedLogic: !0 });
function Vx(t, e) {
	if (e < 0) {
		const n = t.nodeBefore;
		if (n) return t.pos - n.nodeSize;
		for (let r = t.index(-1) - 1, s = t.before(); r >= 0; r--) {
			const o = t.node(-1).child(r),
				i = o.lastChild;
			if (i) return s - 1 - i.nodeSize;
			s -= o.nodeSize;
		}
	} else {
		if (t.index() < t.parent.childCount - 1) return t.pos + t.nodeAfter.nodeSize;
		const n = t.node(-1);
		for (let r = t.indexAfter(-1), s = t.after(); r < n.childCount; r++) {
			const o = n.child(r);
			if (o.childCount) return s + 1;
			s += o.nodeSize;
		}
	}
	return null;
}
function Lu(t) {
	return function (e, n) {
		if (!an(e)) return !1;
		const r = Vx(bi(e), t);
		if (r == null) return !1;
		if (n) {
			const s = e.doc.resolve(r);
			n(e.tr.setSelection(pe.between(s, vx(s))).scrollIntoView());
		}
		return !0;
	};
}
function Wx(t, e) {
	const n = t.selection.$anchor;
	for (let r = n.depth; r > 0; r--)
		if (n.node(r).type.spec.tableRole == 'table')
			return (e && e(t.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0);
	return !1;
}
function ro(t, e) {
	const n = t.selection;
	if (!(n instanceof Ge)) return !1;
	if (e) {
		const r = t.tr,
			s = Ot(t.schema).cell.createAndFill().content;
		(n.forEachCell((o, i) => {
			o.content.eq(s) ||
				r.replace(r.mapping.map(i + 1), r.mapping.map(i + o.nodeSize - 1), new X(s, 0, 0));
		}),
			r.docChanged && e(r));
	}
	return !0;
}
function jx(t) {
	if (t.size === 0) return null;
	let { content: e, openStart: n, openEnd: r } = t;
	for (; e.childCount == 1 && ((n > 0 && r > 0) || e.child(0).type.spec.tableRole == 'table'); )
		(n--, r--, (e = e.child(0).content));
	const s = e.child(0),
		o = s.type.spec.tableRole,
		i = s.type.schema,
		l = [];
	if (o == 'row')
		for (let a = 0; a < e.childCount; a++) {
			let c = e.child(a).content;
			const u = a ? 0 : Math.max(0, n - 1),
				d = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
			((u || d) && (c = _l(Ot(i).row, new X(c, u, d)).content), l.push(c));
		}
	else if (o == 'cell' || o == 'header_cell')
		l.push(n || r ? _l(Ot(i).row, new X(e, n, r)).content : e);
	else return null;
	return Ux(i, l);
}
function Ux(t, e) {
	const n = [];
	for (let s = 0; s < e.length; s++) {
		const o = e[s];
		for (let i = o.childCount - 1; i >= 0; i--) {
			const { rowspan: l, colspan: a } = o.child(i).attrs;
			for (let c = s; c < s + l; c++) n[c] = (n[c] || 0) + a;
		}
	}
	let r = 0;
	for (let s = 0; s < n.length; s++) r = Math.max(r, n[s]);
	for (let s = 0; s < n.length; s++)
		if ((s >= e.length && e.push(z.empty), n[s] < r)) {
			const o = Ot(t).cell.createAndFill(),
				i = [];
			for (let l = n[s]; l < r; l++) i.push(o);
			e[s] = e[s].append(z.from(i));
		}
	return { height: e.length, width: r, rows: e };
}
function _l(t, e) {
	const n = t.createAndFill();
	return new ta(n).replace(0, n.content.size, e).doc;
}
function qx({ width: t, height: e, rows: n }, r, s) {
	if (t != r) {
		const o = [],
			i = [];
		for (let l = 0; l < n.length; l++) {
			const a = n[l],
				c = [];
			for (let u = o[l] || 0, d = 0; u < r; d++) {
				let f = a.child(d % a.childCount);
				(u + f.attrs.colspan > r &&
					(f = f.type.createChecked(
						wr(f.attrs, f.attrs.colspan, u + f.attrs.colspan - r),
						f.content
					)),
					c.push(f),
					(u += f.attrs.colspan));
				for (let h = 1; h < f.attrs.rowspan; h++) o[l + h] = (o[l + h] || 0) + f.attrs.colspan;
			}
			i.push(z.from(c));
		}
		((n = i), (t = r));
	}
	if (e != s) {
		const o = [];
		for (let i = 0, l = 0; i < s; i++, l++) {
			const a = [],
				c = n[l % e];
			for (let u = 0; u < c.childCount; u++) {
				let d = c.child(u);
				(i + d.attrs.rowspan > s &&
					(d = d.type.create({ ...d.attrs, rowspan: Math.max(1, s - d.attrs.rowspan) }, d.content)),
					a.push(d));
			}
			o.push(z.from(a));
		}
		((n = o), (e = s));
	}
	return { width: t, height: e, rows: n };
}
function Kx(t, e, n, r, s, o, i) {
	const l = t.doc.type.schema,
		a = Ot(l);
	let c, u;
	if (s > e.width)
		for (let d = 0, f = 0; d < e.height; d++) {
			const h = n.child(d);
			f += h.nodeSize;
			const p = [];
			let m;
			h.lastChild == null || h.lastChild.type == a.cell
				? (m = c || (c = a.cell.createAndFill()))
				: (m = u || (u = a.header_cell.createAndFill()));
			for (let g = e.width; g < s; g++) p.push(m);
			t.insert(t.mapping.slice(i).map(f - 1 + r), p);
		}
	if (o > e.height) {
		const d = [];
		for (let p = 0, m = (e.height - 1) * e.width; p < Math.max(e.width, s); p++) {
			const g = p >= e.width ? !1 : n.nodeAt(e.map[m + p]).type == a.header_cell;
			d.push(g ? u || (u = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill()));
		}
		const f = a.row.create(null, z.from(d)),
			h = [];
		for (let p = e.height; p < o; p++) h.push(f);
		t.insert(t.mapping.slice(i).map(r + n.nodeSize - 2), h);
	}
	return !!(c || u);
}
function Pu(t, e, n, r, s, o, i, l) {
	if (i == 0 || i == e.height) return !1;
	let a = !1;
	for (let c = s; c < o; c++) {
		const u = i * e.width + c,
			d = e.map[u];
		if (e.map[u - e.width] == d) {
			a = !0;
			const f = n.nodeAt(d),
				{ top: h, left: p } = e.findCell(d);
			(t.setNodeMarkup(t.mapping.slice(l).map(d + r), null, { ...f.attrs, rowspan: i - h }),
				t.insert(
					t.mapping.slice(l).map(e.positionAt(i, p, n)),
					f.type.createAndFill({ ...f.attrs, rowspan: h + f.attrs.rowspan - i })
				),
				(c += f.attrs.colspan - 1));
		}
	}
	return a;
}
function zu(t, e, n, r, s, o, i, l) {
	if (i == 0 || i == e.width) return !1;
	let a = !1;
	for (let c = s; c < o; c++) {
		const u = c * e.width + i,
			d = e.map[u];
		if (e.map[u - 1] == d) {
			a = !0;
			const f = n.nodeAt(d),
				h = e.colCount(d),
				p = t.mapping.slice(l).map(d + r);
			(t.setNodeMarkup(p, null, wr(f.attrs, i - h, f.attrs.colspan - (i - h))),
				t.insert(p + f.nodeSize, f.type.createAndFill(wr(f.attrs, 0, i - h))),
				(c += f.attrs.rowspan - 1));
		}
	}
	return a;
}
function Bu(t, e, n, r, s) {
	let o = n ? t.doc.nodeAt(n - 1) : t.doc;
	if (!o) throw new Error('No table found');
	let i = lt.get(o);
	const { top: l, left: a } = r,
		c = a + s.width,
		u = l + s.height,
		d = t.tr;
	let f = 0;
	function h() {
		if (((o = n ? d.doc.nodeAt(n - 1) : d.doc), !o)) throw new Error('No table found');
		((i = lt.get(o)), (f = d.mapping.maps.length));
	}
	(Kx(d, i, o, n, c, u, f) && h(),
		Pu(d, i, o, n, a, c, l, f) && h(),
		Pu(d, i, o, n, a, c, u, f) && h(),
		zu(d, i, o, n, l, u, a, f) && h(),
		zu(d, i, o, n, l, u, c, f) && h());
	for (let p = l; p < u; p++) {
		const m = i.positionAt(p, a, o),
			g = i.positionAt(p, c, o);
		d.replace(
			d.mapping.slice(f).map(m + n),
			d.mapping.slice(f).map(g + n),
			new X(s.rows[p - l], 0, 0)
		);
	}
	(h(),
		d.setSelection(
			new Ge(
				d.doc.resolve(n + i.positionAt(l, a, o)),
				d.doc.resolve(n + i.positionAt(u - 1, c - 1, o))
			)
		),
		e(d));
}
const Jx = ya({
	ArrowLeft: so('horiz', -1),
	ArrowRight: so('horiz', 1),
	ArrowUp: so('vert', -1),
	ArrowDown: so('vert', 1),
	'Shift-ArrowLeft': oo('horiz', -1),
	'Shift-ArrowRight': oo('horiz', 1),
	'Shift-ArrowUp': oo('vert', -1),
	'Shift-ArrowDown': oo('vert', 1),
	Backspace: ro,
	'Mod-Backspace': ro,
	Delete: ro,
	'Mod-Delete': ro
});
function ho(t, e, n) {
	return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function so(t, e) {
	return (n, r, s) => {
		if (!s) return !1;
		const o = n.selection;
		if (o instanceof Ge) return ho(n, r, ve.near(o.$headCell, e));
		if (t != 'horiz' && !o.empty) return !1;
		const i = Ap(s, t, e);
		if (i == null) return !1;
		if (t == 'horiz') return ho(n, r, ve.near(n.doc.resolve(o.head + e), e));
		{
			const l = n.doc.resolve(i),
				a = xp(l, t, e);
			let c;
			return (
				a
					? (c = ve.near(a, 1))
					: e < 0
						? (c = ve.near(n.doc.resolve(l.before(-1)), -1))
						: (c = ve.near(n.doc.resolve(l.after(-1)), 1)),
				ho(n, r, c)
			);
		}
	};
}
function oo(t, e) {
	return (n, r, s) => {
		if (!s) return !1;
		const o = n.selection;
		let i;
		if (o instanceof Ge) i = o;
		else {
			const a = Ap(s, t, e);
			if (a == null) return !1;
			i = new Ge(n.doc.resolve(a));
		}
		const l = xp(i.$headCell, t, e);
		return l ? ho(n, r, new Ge(i.$anchorCell, l)) : !1;
	};
}
function Gx(t, e) {
	const n = t.state.doc,
		r = xr(n.resolve(e));
	return r ? (t.dispatch(t.state.tr.setSelection(new Ge(r))), !0) : !1;
}
function Xx(t, e, n) {
	if (!an(t.state)) return !1;
	let r = jx(n);
	const s = t.state.selection;
	if (s instanceof Ge) {
		r || (r = { width: 1, height: 1, rows: [z.from(_l(Ot(t.state.schema).cell, n))] });
		const o = s.$anchorCell.node(-1),
			i = s.$anchorCell.start(-1),
			l = lt.get(o).rectBetween(s.$anchorCell.pos - i, s.$headCell.pos - i);
		return ((r = qx(r, l.right - l.left, l.bottom - l.top)), Bu(t.state, t.dispatch, i, l, r), !0);
	} else if (r) {
		const o = bi(t.state),
			i = o.start(-1);
		return (Bu(t.state, t.dispatch, i, lt.get(o.node(-1)).findCell(o.pos - i), r), !0);
	} else return !1;
}
function Qx(t, e) {
	var n;
	if (e.button != 0 || e.ctrlKey || e.metaKey) return;
	const r = $u(t, e.target);
	let s;
	if (e.shiftKey && t.state.selection instanceof Ge)
		(o(t.state.selection.$anchorCell, e), e.preventDefault());
	else if (
		e.shiftKey &&
		r &&
		(s = xr(t.state.selection.$anchor)) != null &&
		((n = el(t, e)) === null || n === void 0 ? void 0 : n.pos) != s.pos
	)
		(o(s, e), e.preventDefault());
	else if (!r) return;
	function o(a, c) {
		let u = el(t, c);
		const d = Wn.getState(t.state) == null;
		if (!u || !Fa(a, u))
			if (d) u = a;
			else return;
		const f = new Ge(a, u);
		if (d || !t.state.selection.eq(f)) {
			const h = t.state.tr.setSelection(f);
			(d && h.setMeta(Wn, a.pos), t.dispatch(h));
		}
	}
	function i() {
		(t.root.removeEventListener('mouseup', i),
			t.root.removeEventListener('dragstart', i),
			t.root.removeEventListener('mousemove', l),
			Wn.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(Wn, -1)));
	}
	function l(a) {
		const c = a,
			u = Wn.getState(t.state);
		let d;
		if (u != null) d = t.state.doc.resolve(u);
		else if ($u(t, c.target) != r && ((d = el(t, e)), !d)) return i();
		d && o(d, c);
	}
	(t.root.addEventListener('mouseup', i),
		t.root.addEventListener('dragstart', i),
		t.root.addEventListener('mousemove', l));
}
function Ap(t, e, n) {
	if (!(t.state.selection instanceof pe)) return null;
	const { $head: r } = t.state.selection;
	for (let s = r.depth - 1; s >= 0; s--) {
		const o = r.node(s);
		if ((n < 0 ? r.index(s) : r.indexAfter(s)) != (n < 0 ? 0 : o.childCount)) return null;
		if (o.type.spec.tableRole == 'cell' || o.type.spec.tableRole == 'header_cell') {
			const i = r.before(s),
				l = e == 'vert' ? (n > 0 ? 'down' : 'up') : n > 0 ? 'right' : 'left';
			return t.endOfTextblock(l) ? i : null;
		}
	}
	return null;
}
function $u(t, e) {
	for (; e && e != t.dom; e = e.parentNode) if (e.nodeName == 'TD' || e.nodeName == 'TH') return e;
	return null;
}
function el(t, e) {
	const n = t.posAtCoords({ left: e.clientX, top: e.clientY });
	if (!n) return null;
	let { inside: r, pos: s } = n;
	return (r >= 0 && xr(t.state.doc.resolve(r))) || xr(t.state.doc.resolve(s));
}
var Yx = class {
	constructor(e, n) {
		((this.node = e),
			(this.defaultCellMinWidth = n),
			(this.dom = document.createElement('div')),
			(this.dom.className = 'tableWrapper'),
			(this.table = this.dom.appendChild(document.createElement('table'))),
			this.table.style.setProperty('--default-cell-min-width', `${n}px`),
			(this.colgroup = this.table.appendChild(document.createElement('colgroup'))),
			Hl(e, this.colgroup, this.table, n),
			(this.contentDOM = this.table.appendChild(document.createElement('tbody'))));
	}
	update(e) {
		return e.type != this.node.type
			? !1
			: ((this.node = e), Hl(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
	}
	ignoreMutation(e) {
		return e.type == 'attributes' && (e.target == this.table || this.colgroup.contains(e.target));
	}
};
function Hl(t, e, n, r, s, o) {
	let i = 0,
		l = !0,
		a = e.firstChild;
	const c = t.firstChild;
	if (c) {
		for (let d = 0, f = 0; d < c.childCount; d++) {
			const { colspan: h, colwidth: p } = c.child(d).attrs;
			for (let m = 0; m < h; m++, f++) {
				const g = s == f ? o : p && p[m],
					b = g ? g + 'px' : '';
				if (((i += g || r), g || (l = !1), a))
					(a.style.width != b && (a.style.width = b), (a = a.nextSibling));
				else {
					const S = document.createElement('col');
					((S.style.width = b), e.appendChild(S));
				}
			}
		}
		for (; a; ) {
			var u;
			const d = a.nextSibling;
			((u = a.parentNode) === null || u === void 0 || u.removeChild(a), (a = d));
		}
		l
			? ((n.style.width = i + 'px'), (n.style.minWidth = ''))
			: ((n.style.width = ''), (n.style.minWidth = i + 'px'));
	}
}
const jt = new _e('tableColumnResizing');
function Zx({
	handleWidth: t = 5,
	cellMinWidth: e = 25,
	defaultCellMinWidth: n = 100,
	View: r = Yx,
	lastColumnResizable: s = !0
} = {}) {
	const o = new ze({
		key: jt,
		state: {
			init(i, l) {
				var a;
				const c =
						(a = o.spec) === null || a === void 0 || (a = a.props) === null || a === void 0
							? void 0
							: a.nodeViews,
					u = Ot(l.schema).table.name;
				return (r && c && (c[u] = (d, f) => new r(d, n, f)), new ew(-1, !1));
			},
			apply(i, l) {
				return l.apply(i);
			}
		},
		props: {
			attributes: (i) => {
				const l = jt.getState(i);
				return l && l.activeHandle > -1 ? { class: 'resize-cursor' } : {};
			},
			handleDOMEvents: {
				mousemove: (i, l) => {
					tw(i, l, t, s);
				},
				mouseleave: (i) => {
					nw(i);
				},
				mousedown: (i, l) => {
					rw(i, l, e, n);
				}
			},
			decorations: (i) => {
				const l = jt.getState(i);
				if (l && l.activeHandle > -1) return aw(i, l.activeHandle);
			},
			nodeViews: {}
		}
	});
	return o;
}
var ew = class po {
	constructor(e, n) {
		((this.activeHandle = e), (this.dragging = n));
	}
	apply(e) {
		const n = this,
			r = e.getMeta(jt);
		if (r && r.setHandle != null) return new po(r.setHandle, !1);
		if (r && r.setDragging !== void 0) return new po(n.activeHandle, r.setDragging);
		if (n.activeHandle > -1 && e.docChanged) {
			let s = e.mapping.map(n.activeHandle, -1);
			return ($l(e.doc.resolve(s)) || (s = -1), new po(s, n.dragging));
		}
		return n;
	}
};
function tw(t, e, n, r) {
	if (!t.editable) return;
	const s = jt.getState(t.state);
	if (s && !s.dragging) {
		const o = ow(e.target);
		let i = -1;
		if (o) {
			const { left: l, right: a } = o.getBoundingClientRect();
			e.clientX - l <= n
				? (i = _u(t, e, 'left', n))
				: a - e.clientX <= n && (i = _u(t, e, 'right', n));
		}
		if (i != s.activeHandle) {
			if (!r && i !== -1) {
				const l = t.state.doc.resolve(i),
					a = l.node(-1),
					c = lt.get(a),
					u = l.start(-1);
				if (c.colCount(l.pos - u) + l.nodeAfter.attrs.colspan - 1 == c.width - 1) return;
			}
			Np(t, i);
		}
	}
}
function nw(t) {
	if (!t.editable) return;
	const e = jt.getState(t.state);
	e && e.activeHandle > -1 && !e.dragging && Np(t, -1);
}
function rw(t, e, n, r) {
	var s;
	if (!t.editable) return !1;
	const o = (s = t.dom.ownerDocument.defaultView) !== null && s !== void 0 ? s : window,
		i = jt.getState(t.state);
	if (!i || i.activeHandle == -1 || i.dragging) return !1;
	const l = t.state.doc.nodeAt(i.activeHandle),
		a = sw(t, i.activeHandle, l.attrs);
	t.dispatch(t.state.tr.setMeta(jt, { setDragging: { startX: e.clientX, startWidth: a } }));
	function c(d) {
		(o.removeEventListener('mouseup', c), o.removeEventListener('mousemove', u));
		const f = jt.getState(t.state);
		f != null &&
			f.dragging &&
			(iw(t, f.activeHandle, Hu(f.dragging, d, n)),
			t.dispatch(t.state.tr.setMeta(jt, { setDragging: null })));
	}
	function u(d) {
		if (!d.which) return c(d);
		const f = jt.getState(t.state);
		if (f && f.dragging) {
			const h = Hu(f.dragging, d, n);
			Fu(t, f.activeHandle, h, r);
		}
	}
	return (
		Fu(t, i.activeHandle, a, r),
		o.addEventListener('mouseup', c),
		o.addEventListener('mousemove', u),
		e.preventDefault(),
		!0
	);
}
function sw(t, e, { colspan: n, colwidth: r }) {
	const s = r && r[r.length - 1];
	if (s) return s;
	const o = t.domAtPos(e);
	let i = o.node.childNodes[o.offset].offsetWidth,
		l = n;
	if (r) for (let a = 0; a < n; a++) r[a] && ((i -= r[a]), l--);
	return i / l;
}
function ow(t) {
	for (; t && t.nodeName != 'TD' && t.nodeName != 'TH'; )
		t = t.classList && t.classList.contains('ProseMirror') ? null : t.parentNode;
	return t;
}
function _u(t, e, n, r) {
	const s = n == 'right' ? -r : r,
		o = t.posAtCoords({ left: e.clientX + s, top: e.clientY });
	if (!o) return -1;
	const { pos: i } = o,
		l = xr(t.state.doc.resolve(i));
	if (!l) return -1;
	if (n == 'right') return l.pos;
	const a = lt.get(l.node(-1)),
		c = l.start(-1),
		u = a.map.indexOf(l.pos - c);
	return u % a.width == 0 ? -1 : c + a.map[u - 1];
}
function Hu(t, e, n) {
	const r = e.clientX - t.startX;
	return Math.max(n, t.startWidth + r);
}
function Np(t, e) {
	t.dispatch(t.state.tr.setMeta(jt, { setHandle: e }));
}
function iw(t, e, n) {
	const r = t.state.doc.resolve(e),
		s = r.node(-1),
		o = lt.get(s),
		i = r.start(-1),
		l = o.colCount(r.pos - i) + r.nodeAfter.attrs.colspan - 1,
		a = t.state.tr;
	for (let c = 0; c < o.height; c++) {
		const u = c * o.width + l;
		if (c && o.map[u] == o.map[u - o.width]) continue;
		const d = o.map[u],
			f = s.nodeAt(d).attrs,
			h = f.colspan == 1 ? 0 : l - o.colCount(d);
		if (f.colwidth && f.colwidth[h] == n) continue;
		const p = f.colwidth ? f.colwidth.slice() : lw(f.colspan);
		((p[h] = n), a.setNodeMarkup(i + d, null, { ...f, colwidth: p }));
	}
	a.docChanged && t.dispatch(a);
}
function Fu(t, e, n, r) {
	const s = t.state.doc.resolve(e),
		o = s.node(-1),
		i = s.start(-1),
		l = lt.get(o).colCount(s.pos - i) + s.nodeAfter.attrs.colspan - 1;
	let a = t.domAtPos(s.start(-1)).node;
	for (; a && a.nodeName != 'TABLE'; ) a = a.parentNode;
	a && Hl(o, a.firstChild, a, r, l, n);
}
function lw(t) {
	return Array(t).fill(0);
}
function aw(t, e) {
	const n = [],
		r = t.doc.resolve(e),
		s = r.node(-1);
	if (!s) return Ve.empty;
	const o = lt.get(s),
		i = r.start(-1),
		l = o.colCount(r.pos - i) + r.nodeAfter.attrs.colspan - 1;
	for (let c = 0; c < o.height; c++) {
		const u = l + c * o.width;
		if (
			(l == o.width - 1 || o.map[u] != o.map[u + 1]) &&
			(c == 0 || o.map[u] != o.map[u - o.width])
		) {
			var a;
			const d = o.map[u],
				f = i + d + s.nodeAt(d).nodeSize - 1,
				h = document.createElement('div');
			((h.className = 'column-resize-handle'),
				!((a = jt.getState(t)) === null || a === void 0) &&
					a.dragging &&
					n.push(tt.node(i + d, i + d + s.nodeAt(d).nodeSize, { class: 'column-resize-dragging' })),
				n.push(tt.widget(f, h)));
		}
	}
	return Ve.create(t.doc, n);
}
function cw({ allowTableNodeSelection: t = !1 } = {}) {
	return new ze({
		key: Wn,
		state: {
			init() {
				return null;
			},
			apply(e, n) {
				const r = e.getMeta(Wn);
				if (r != null) return r == -1 ? null : r;
				if (n == null || !e.docChanged) return n;
				const { deleted: s, pos: o } = e.mapping.mapResult(n);
				return s ? null : o;
			}
		},
		props: {
			decorations: wx,
			handleDOMEvents: { mousedown: Qx },
			createSelectionBetween(e) {
				return Wn.getState(e.state) != null ? e.state.selection : null;
			},
			handleTripleClick: Gx,
			handleKeyDown: Jx,
			handlePaste: Xx
		},
		appendTransaction(e, n, r) {
			return Tx(r, Tp(r, n), t);
		}
	});
}
function uw(t, e) {
	const n = Math.min(t.top, e.top),
		r = Math.max(t.bottom, e.bottom),
		s = Math.min(t.left, e.left),
		i = Math.max(t.right, e.right) - s,
		l = r - n,
		a = s,
		c = n;
	return new DOMRect(a, c, i, l);
}
var dw = class {
		constructor({
			editor: t,
			element: e,
			view: n,
			pluginKey: r = 'bubbleMenu',
			updateDelay: s = 250,
			resizeDelay: o = 60,
			shouldShow: i,
			appendTo: l,
			getReferencedVirtualElement: a,
			options: c
		}) {
			((this.preventHide = !1),
				(this.isVisible = !1),
				(this.scrollTarget = window),
				(this.floatingUIOptions = {
					strategy: 'absolute',
					placement: 'top',
					offset: 8,
					flip: {},
					shift: {},
					arrow: !1,
					size: !1,
					autoPlacement: !1,
					hide: !1,
					inline: !1,
					onShow: void 0,
					onHide: void 0,
					onUpdate: void 0,
					onDestroy: void 0
				}),
				(this.shouldShow = ({ view: d, state: f, from: h, to: p }) => {
					const { doc: m, selection: g } = f,
						{ empty: b } = g,
						S = !m.textBetween(h, p).length && xa(f.selection),
						O = this.element.contains(document.activeElement);
					return !(!(d.hasFocus() || O) || b || S || !this.editor.isEditable);
				}),
				(this.mousedownHandler = () => {
					this.preventHide = !0;
				}),
				(this.dragstartHandler = () => {
					this.hide();
				}),
				(this.resizeHandler = () => {
					(this.resizeDebounceTimer && clearTimeout(this.resizeDebounceTimer),
						(this.resizeDebounceTimer = window.setTimeout(() => {
							this.updatePosition();
						}, this.resizeDelay)));
				}),
				(this.focusHandler = () => {
					setTimeout(() => this.update(this.editor.view));
				}),
				(this.blurHandler = ({ event: d }) => {
					var f;
					if (this.editor.isDestroyed) {
						this.destroy();
						return;
					}
					if (this.preventHide) {
						this.preventHide = !1;
						return;
					}
					(d != null &&
						d.relatedTarget &&
						(f = this.element.parentNode) != null &&
						f.contains(d.relatedTarget)) ||
						((d == null ? void 0 : d.relatedTarget) !== this.editor.view.dom && this.hide());
				}),
				(this.handleDebouncedUpdate = (d, f) => {
					const h = !(f != null && f.selection.eq(d.state.selection)),
						p = !(f != null && f.doc.eq(d.state.doc));
					(!h && !p) ||
						(this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer),
						(this.updateDebounceTimer = window.setTimeout(() => {
							this.updateHandler(d, h, p, f);
						}, this.updateDelay)));
				}),
				(this.updateHandler = (d, f, h, p) => {
					const { composing: m } = d;
					if (m || (!f && !h)) return;
					if (!this.getShouldShow(p)) {
						this.hide();
						return;
					}
					(this.updatePosition(), this.show());
				}),
				(this.transactionHandler = ({ transaction: d }) => {
					const f = d.getMeta(this.pluginKey);
					f === 'updatePosition'
						? this.updatePosition()
						: f &&
							typeof f == 'object' &&
							f.type === 'updateOptions' &&
							this.updateOptions(f.options);
				}));
			var u;
			((this.editor = t),
				(this.element = e),
				(this.view = n),
				(this.pluginKey = r),
				(this.updateDelay = s),
				(this.resizeDelay = o),
				(this.appendTo = l),
				(this.scrollTarget = (u = c == null ? void 0 : c.scrollTarget) != null ? u : window),
				(this.getReferencedVirtualElement = a),
				(this.floatingUIOptions = { ...this.floatingUIOptions, ...c }),
				(this.element.tabIndex = 0),
				i && (this.shouldShow = i),
				this.element.addEventListener('mousedown', this.mousedownHandler, { capture: !0 }),
				this.view.dom.addEventListener('dragstart', this.dragstartHandler),
				this.editor.on('focus', this.focusHandler),
				this.editor.on('blur', this.blurHandler),
				this.editor.on('transaction', this.transactionHandler),
				window.addEventListener('resize', this.resizeHandler),
				this.scrollTarget.addEventListener('scroll', this.resizeHandler),
				this.update(n, n.state),
				this.getShouldShow() && (this.show(), this.updatePosition()));
		}
		get middlewares() {
			const t = [];
			return (
				this.floatingUIOptions.flip &&
					t.push(
						Xu(
							typeof this.floatingUIOptions.flip != 'boolean' ? this.floatingUIOptions.flip : void 0
						)
					),
				this.floatingUIOptions.shift &&
					t.push(
						Qu(
							typeof this.floatingUIOptions.shift != 'boolean'
								? this.floatingUIOptions.shift
								: void 0
						)
					),
				this.floatingUIOptions.offset &&
					t.push(
						Yu(
							typeof this.floatingUIOptions.offset != 'boolean'
								? this.floatingUIOptions.offset
								: void 0
						)
					),
				this.floatingUIOptions.arrow && t.push(Zu(this.floatingUIOptions.arrow)),
				this.floatingUIOptions.size &&
					t.push(
						ed(
							typeof this.floatingUIOptions.size != 'boolean' ? this.floatingUIOptions.size : void 0
						)
					),
				this.floatingUIOptions.autoPlacement &&
					t.push(
						td(
							typeof this.floatingUIOptions.autoPlacement != 'boolean'
								? this.floatingUIOptions.autoPlacement
								: void 0
						)
					),
				this.floatingUIOptions.hide &&
					t.push(
						nd(
							typeof this.floatingUIOptions.hide != 'boolean' ? this.floatingUIOptions.hide : void 0
						)
					),
				this.floatingUIOptions.inline &&
					t.push(
						rd(
							typeof this.floatingUIOptions.inline != 'boolean'
								? this.floatingUIOptions.inline
								: void 0
						)
					),
				t
			);
		}
		get virtualElement() {
			var t, e, n;
			const { selection: r } = this.editor.state,
				s = (t = this.getReferencedVirtualElement) == null ? void 0 : t.call(this);
			if (s) return s;
			if (!((n = (e = this.view) == null ? void 0 : e.dom) != null && n.parentNode)) return;
			const o = Ih(this.view, r.from, r.to);
			let i = { getBoundingClientRect: () => o, getClientRects: () => [o] };
			if (r instanceof fe) {
				let l = this.view.nodeDOM(r.from);
				const a = l.dataset.nodeViewWrapper ? l : l.querySelector('[data-node-view-wrapper]');
				(a && (l = a),
					l &&
						(i = {
							getBoundingClientRect: () => l.getBoundingClientRect(),
							getClientRects: () => [l.getBoundingClientRect()]
						}));
			}
			if (r instanceof Ge) {
				const { $anchorCell: l, $headCell: a } = r,
					c = l ? l.pos : a.pos,
					u = a ? a.pos : l.pos,
					d = this.view.nodeDOM(c),
					f = this.view.nodeDOM(u);
				if (!d || !f) return;
				const h =
					d === f
						? d.getBoundingClientRect()
						: uw(d.getBoundingClientRect(), f.getBoundingClientRect());
				i = { getBoundingClientRect: () => h, getClientRects: () => [h] };
			}
			return i;
		}
		updatePosition() {
			const t = this.virtualElement;
			t &&
				sd(t, this.element, {
					placement: this.floatingUIOptions.placement,
					strategy: this.floatingUIOptions.strategy,
					middleware: this.middlewares
				}).then(({ x: e, y: n, strategy: r, middlewareData: s }) => {
					var o, i;
					if (((o = s.hide) != null && o.referenceHidden) || ((i = s.hide) != null && i.escaped)) {
						this.element.style.visibility = 'hidden';
						return;
					}
					((this.element.style.visibility = 'visible'),
						(this.element.style.width = 'max-content'),
						(this.element.style.position = r),
						(this.element.style.left = `${e}px`),
						(this.element.style.top = `${n}px`),
						this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate());
				});
		}
		update(t, e) {
			const { state: n } = t,
				r = n.selection.from !== n.selection.to;
			if (this.updateDelay > 0 && r) {
				this.handleDebouncedUpdate(t, e);
				return;
			}
			const s = !(e != null && e.selection.eq(t.state.selection)),
				o = !(e != null && e.doc.eq(t.state.doc));
			this.updateHandler(t, s, o, e);
		}
		getShouldShow(t) {
			var e;
			const { state: n } = this.view,
				{ selection: r } = n,
				{ ranges: s } = r,
				o = Math.min(...s.map((a) => a.$from.pos)),
				i = Math.max(...s.map((a) => a.$to.pos));
			return (
				((e = this.shouldShow) == null
					? void 0
					: e.call(this, {
							editor: this.editor,
							element: this.element,
							view: this.view,
							state: n,
							oldState: t,
							from: o,
							to: i
						})) || !1
			);
		}
		show() {
			var t;
			if (this.isVisible) return;
			((this.element.style.visibility = 'visible'), (this.element.style.opacity = '1'));
			const e = typeof this.appendTo == 'function' ? this.appendTo() : this.appendTo;
			((t = e ?? this.view.dom.parentElement) == null || t.appendChild(this.element),
				this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(),
				(this.isVisible = !0));
		}
		hide() {
			this.isVisible &&
				((this.element.style.visibility = 'hidden'),
				(this.element.style.opacity = '0'),
				this.element.remove(),
				this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(),
				(this.isVisible = !1));
		}
		updateOptions(t) {
			var e;
			if (
				(t.updateDelay !== void 0 && (this.updateDelay = t.updateDelay),
				t.resizeDelay !== void 0 && (this.resizeDelay = t.resizeDelay),
				t.appendTo !== void 0 && (this.appendTo = t.appendTo),
				t.getReferencedVirtualElement !== void 0 &&
					(this.getReferencedVirtualElement = t.getReferencedVirtualElement),
				t.shouldShow !== void 0 && t.shouldShow && (this.shouldShow = t.shouldShow),
				t.options !== void 0)
			) {
				const n = (e = t.options.scrollTarget) != null ? e : window;
				(n !== this.scrollTarget &&
					(this.scrollTarget.removeEventListener('scroll', this.resizeHandler),
					(this.scrollTarget = n),
					this.scrollTarget.addEventListener('scroll', this.resizeHandler)),
					(this.floatingUIOptions = { ...this.floatingUIOptions, ...t.options }));
			}
		}
		destroy() {
			(this.hide(),
				this.element.removeEventListener('mousedown', this.mousedownHandler, { capture: !0 }),
				this.view.dom.removeEventListener('dragstart', this.dragstartHandler),
				window.removeEventListener('resize', this.resizeHandler),
				this.scrollTarget.removeEventListener('scroll', this.resizeHandler),
				this.editor.off('focus', this.focusHandler),
				this.editor.off('blur', this.blurHandler),
				this.editor.off('transaction', this.transactionHandler),
				this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy());
		}
	},
	fw = (t) =>
		new ze({
			key: typeof t.pluginKey == 'string' ? new _e(t.pluginKey) : t.pluginKey,
			view: (e) => new dw({ view: e, ...t })
		}),
	hw = Ue.create({
		name: 'bubbleMenu',
		addOptions() {
			return {
				element: null,
				pluginKey: 'bubbleMenu',
				updateDelay: void 0,
				appendTo: void 0,
				shouldShow: null
			};
		},
		addProseMirrorPlugins() {
			return this.options.element
				? [
						fw({
							pluginKey: this.options.pluginKey,
							editor: this.editor,
							element: this.options.element,
							updateDelay: this.options.updateDelay,
							options: this.options.options,
							appendTo: this.options.appendTo,
							getReferencedVirtualElement: this.options.getReferencedVirtualElement,
							shouldShow: this.options.shouldShow
						})
					]
				: [];
		}
	}),
	pw = hw,
	mw = class {
		constructor({
			editor: t,
			element: e,
			view: n,
			pluginKey: r = 'floatingMenu',
			updateDelay: s = 250,
			resizeDelay: o = 60,
			options: i,
			appendTo: l,
			shouldShow: a
		}) {
			((this.preventHide = !1),
				(this.isVisible = !1),
				(this.scrollTarget = window),
				(this.shouldShow = ({ view: u, state: d }) => {
					const { selection: f } = d,
						{ $anchor: h, empty: p } = f,
						m = h.depth === 1,
						g =
							h.parent.isTextblock &&
							!h.parent.type.spec.code &&
							!h.parent.textContent &&
							h.parent.childCount === 0 &&
							!this.getTextContent(h.parent);
					return !(!u.hasFocus() || !p || !m || !g || !this.editor.isEditable);
				}),
				(this.floatingUIOptions = {
					strategy: 'absolute',
					placement: 'right',
					offset: 8,
					flip: {},
					shift: {},
					arrow: !1,
					size: !1,
					autoPlacement: !1,
					hide: !1,
					inline: !1
				}),
				(this.updateHandler = (u, d, f, h) => {
					const { composing: p } = u;
					if (p || (!d && !f)) return;
					if (!this.getShouldShow(h)) {
						this.hide();
						return;
					}
					(this.updatePosition(), this.show());
				}),
				(this.mousedownHandler = () => {
					this.preventHide = !0;
				}),
				(this.focusHandler = () => {
					setTimeout(() => this.update(this.editor.view));
				}),
				(this.blurHandler = ({ event: u }) => {
					var d;
					if (this.preventHide) {
						this.preventHide = !1;
						return;
					}
					(u != null &&
						u.relatedTarget &&
						(d = this.element.parentNode) != null &&
						d.contains(u.relatedTarget)) ||
						((u == null ? void 0 : u.relatedTarget) !== this.editor.view.dom && this.hide());
				}),
				(this.transactionHandler = ({ transaction: u }) => {
					const d = u.getMeta(this.pluginKey);
					d === 'updatePosition'
						? this.updatePosition()
						: d &&
							typeof d == 'object' &&
							d.type === 'updateOptions' &&
							this.updateOptions(d.options);
				}),
				(this.resizeHandler = () => {
					(this.resizeDebounceTimer && clearTimeout(this.resizeDebounceTimer),
						(this.resizeDebounceTimer = window.setTimeout(() => {
							this.updatePosition();
						}, this.resizeDelay)));
				}));
			var c;
			((this.editor = t),
				(this.element = e),
				(this.view = n),
				(this.pluginKey = r),
				(this.updateDelay = s),
				(this.resizeDelay = o),
				(this.appendTo = l),
				(this.scrollTarget = (c = i == null ? void 0 : i.scrollTarget) != null ? c : window),
				(this.floatingUIOptions = { ...this.floatingUIOptions, ...i }),
				(this.element.tabIndex = 0),
				a && (this.shouldShow = a),
				this.element.addEventListener('mousedown', this.mousedownHandler, { capture: !0 }),
				this.editor.on('focus', this.focusHandler),
				this.editor.on('blur', this.blurHandler),
				this.editor.on('transaction', this.transactionHandler),
				window.addEventListener('resize', this.resizeHandler),
				this.scrollTarget.addEventListener('scroll', this.resizeHandler),
				this.update(n, n.state),
				this.getShouldShow() && (this.show(), this.updatePosition()));
		}
		getTextContent(t) {
			return Th(t, { textSerializers: Ca(this.editor.schema) });
		}
		get middlewares() {
			const t = [];
			return (
				this.floatingUIOptions.flip &&
					t.push(
						Xu(
							typeof this.floatingUIOptions.flip != 'boolean' ? this.floatingUIOptions.flip : void 0
						)
					),
				this.floatingUIOptions.shift &&
					t.push(
						Qu(
							typeof this.floatingUIOptions.shift != 'boolean'
								? this.floatingUIOptions.shift
								: void 0
						)
					),
				this.floatingUIOptions.offset &&
					t.push(
						Yu(
							typeof this.floatingUIOptions.offset != 'boolean'
								? this.floatingUIOptions.offset
								: void 0
						)
					),
				this.floatingUIOptions.arrow && t.push(Zu(this.floatingUIOptions.arrow)),
				this.floatingUIOptions.size &&
					t.push(
						ed(
							typeof this.floatingUIOptions.size != 'boolean' ? this.floatingUIOptions.size : void 0
						)
					),
				this.floatingUIOptions.autoPlacement &&
					t.push(
						td(
							typeof this.floatingUIOptions.autoPlacement != 'boolean'
								? this.floatingUIOptions.autoPlacement
								: void 0
						)
					),
				this.floatingUIOptions.hide &&
					t.push(
						nd(
							typeof this.floatingUIOptions.hide != 'boolean' ? this.floatingUIOptions.hide : void 0
						)
					),
				this.floatingUIOptions.inline &&
					t.push(
						rd(
							typeof this.floatingUIOptions.inline != 'boolean'
								? this.floatingUIOptions.inline
								: void 0
						)
					),
				t
			);
		}
		getShouldShow(t) {
			var e;
			const { state: n } = this.view,
				{ selection: r } = n,
				{ ranges: s } = r,
				o = Math.min(...s.map((a) => a.$from.pos)),
				i = Math.max(...s.map((a) => a.$to.pos));
			return (e = this.shouldShow) == null
				? void 0
				: e.call(this, {
						editor: this.editor,
						view: this.view,
						state: n,
						oldState: t,
						from: o,
						to: i
					});
		}
		updateOptions(t) {
			var e;
			if (
				(t.updateDelay !== void 0 && (this.updateDelay = t.updateDelay),
				t.resizeDelay !== void 0 && (this.resizeDelay = t.resizeDelay),
				t.appendTo !== void 0 && (this.appendTo = t.appendTo),
				t.shouldShow !== void 0 && t.shouldShow && (this.shouldShow = t.shouldShow),
				t.options !== void 0)
			) {
				const n = (e = t.options.scrollTarget) != null ? e : window;
				(n !== this.scrollTarget &&
					(this.scrollTarget.removeEventListener('scroll', this.resizeHandler),
					(this.scrollTarget = n),
					this.scrollTarget.addEventListener('scroll', this.resizeHandler)),
					(this.floatingUIOptions = { ...this.floatingUIOptions, ...t.options }));
			}
		}
		updatePosition() {
			const { selection: t } = this.editor.state,
				e = Ih(this.view, t.from, t.to);
			sd({ getBoundingClientRect: () => e, getClientRects: () => [e] }, this.element, {
				placement: this.floatingUIOptions.placement,
				strategy: this.floatingUIOptions.strategy,
				middleware: this.middlewares
			}).then(({ x: r, y: s, strategy: o, middlewareData: i }) => {
				var l, a;
				if (((l = i.hide) != null && l.referenceHidden) || ((a = i.hide) != null && a.escaped)) {
					this.element.style.visibility = 'hidden';
					return;
				}
				((this.element.style.visibility = 'visible'),
					(this.element.style.width = 'max-content'),
					(this.element.style.position = o),
					(this.element.style.left = `${r}px`),
					(this.element.style.top = `${s}px`),
					this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate());
			});
		}
		update(t, e) {
			const n = !(e != null && e.selection.eq(t.state.selection)),
				r = !(e != null && e.doc.eq(t.state.doc));
			this.updateHandler(t, n, r, e);
		}
		show() {
			var t;
			if (this.isVisible) return;
			((this.element.style.visibility = 'visible'), (this.element.style.opacity = '1'));
			const e = typeof this.appendTo == 'function' ? this.appendTo() : this.appendTo;
			((t = e ?? this.view.dom.parentElement) == null || t.appendChild(this.element),
				this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(),
				(this.isVisible = !0));
		}
		hide() {
			this.isVisible &&
				((this.element.style.visibility = 'hidden'),
				(this.element.style.opacity = '0'),
				this.element.remove(),
				this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(),
				(this.isVisible = !1));
		}
		destroy() {
			(this.hide(),
				this.element.removeEventListener('mousedown', this.mousedownHandler, { capture: !0 }),
				window.removeEventListener('resize', this.resizeHandler),
				this.scrollTarget.removeEventListener('scroll', this.resizeHandler),
				this.editor.off('focus', this.focusHandler),
				this.editor.off('blur', this.blurHandler),
				this.editor.off('transaction', this.transactionHandler),
				this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy());
		}
	},
	gw = (t) =>
		new ze({
			key: typeof t.pluginKey == 'string' ? new _e(t.pluginKey) : t.pluginKey,
			view: (e) => new mw({ view: e, ...t })
		}),
	yw = Ue.create({
		name: 'floatingMenu',
		addOptions() {
			return {
				element: null,
				options: {},
				pluginKey: 'floatingMenu',
				updateDelay: void 0,
				resizeDelay: void 0,
				appendTo: void 0,
				shouldShow: null
			};
		},
		addCommands() {
			return {
				updateFloatingMenuPosition:
					() =>
					({ tr: t, dispatch: e }) => (e && t.setMeta(this.options.pluginKey, 'updatePosition'), !0)
			};
		},
		addProseMirrorPlugins() {
			return this.options.element
				? [
						gw({
							pluginKey: this.options.pluginKey,
							editor: this.editor,
							element: this.options.element,
							updateDelay: this.options.updateDelay,
							resizeDelay: this.options.resizeDelay,
							options: this.options.options,
							appendTo: this.options.appendTo,
							shouldShow: this.options.shouldShow
						})
					]
				: [];
		}
	}),
	bw = yw,
	vw = mt.create({
		name: 'tableCell',
		addOptions() {
			return { HTMLAttributes: {} };
		},
		content: 'block+',
		addAttributes() {
			return {
				colspan: { default: 1 },
				rowspan: { default: 1 },
				colwidth: {
					default: null,
					parseHTML: (t) => {
						var e, n;
						const r = t.getAttribute('colwidth'),
							s = r ? r.split(',').map((o) => parseInt(o, 10)) : null;
						if (!s) {
							const o =
									(e = t.closest('table')) == null ? void 0 : e.querySelectorAll('colgroup > col'),
								i = Array.from(((n = t.parentElement) == null ? void 0 : n.children) || []).indexOf(
									t
								);
							if (i && i > -1 && o && o[i]) {
								const l = o[i].getAttribute('width');
								return l ? [parseInt(l, 10)] : null;
							}
						}
						return s;
					}
				}
			};
		},
		tableRole: 'cell',
		isolating: !0,
		parseHTML() {
			return [{ tag: 'td' }];
		},
		renderHTML({ HTMLAttributes: t }) {
			return ['td', je(this.options.HTMLAttributes, t), 0];
		}
	}),
	kw = mt.create({
		name: 'tableHeader',
		addOptions() {
			return { HTMLAttributes: {} };
		},
		content: 'block+',
		addAttributes() {
			return {
				colspan: { default: 1 },
				rowspan: { default: 1 },
				colwidth: {
					default: null,
					parseHTML: (t) => {
						const e = t.getAttribute('colwidth');
						return e ? e.split(',').map((r) => parseInt(r, 10)) : null;
					}
				}
			};
		},
		tableRole: 'header_cell',
		isolating: !0,
		parseHTML() {
			return [{ tag: 'th' }];
		},
		renderHTML({ HTMLAttributes: t }) {
			return ['th', je(this.options.HTMLAttributes, t), 0];
		}
	}),
	xw = mt.create({
		name: 'tableRow',
		addOptions() {
			return { HTMLAttributes: {} };
		},
		content: '(tableCell | tableHeader)*',
		tableRole: 'row',
		parseHTML() {
			return [{ tag: 'tr' }];
		},
		renderHTML({ HTMLAttributes: t }) {
			return ['tr', je(this.options.HTMLAttributes, t), 0];
		}
	});
function Fl(t, e) {
	return e ? ['width', `${Math.max(e, t)}px`] : ['min-width', `${t}px`];
}
function Vu(t, e, n, r, s, o) {
	var i;
	let l = 0,
		a = !0,
		c = e.firstChild;
	const u = t.firstChild;
	if (u !== null)
		for (let f = 0, h = 0; f < u.childCount; f += 1) {
			const { colspan: p, colwidth: m } = u.child(f).attrs;
			for (let g = 0; g < p; g += 1, h += 1) {
				const b = s === h ? o : m && m[g],
					S = b ? `${b}px` : '';
				if (((l += b || r), b || (a = !1), c)) {
					if (c.style.width !== S) {
						const [O, H] = Fl(r, b);
						c.style.setProperty(O, H);
					}
					c = c.nextSibling;
				} else {
					const O = document.createElement('col'),
						[H, E] = Fl(r, b);
					(O.style.setProperty(H, E), e.appendChild(O));
				}
			}
		}
	for (; c; ) {
		const f = c.nextSibling;
		((i = c.parentNode) == null || i.removeChild(c), (c = f));
	}
	const d = t.attrs.style && typeof t.attrs.style == 'string' && /\bwidth\s*:/i.test(t.attrs.style);
	a && !d
		? ((n.style.width = `${l}px`), (n.style.minWidth = ''))
		: ((n.style.width = ''), (n.style.minWidth = `${l}px`));
}
var ww = class {
	constructor(t, e) {
		((this.node = t),
			(this.cellMinWidth = e),
			(this.dom = document.createElement('div')),
			(this.dom.className = 'tableWrapper'),
			(this.table = this.dom.appendChild(document.createElement('table'))),
			t.attrs.style && (this.table.style.cssText = t.attrs.style),
			(this.colgroup = this.table.appendChild(document.createElement('colgroup'))),
			Vu(t, this.colgroup, this.table, e),
			(this.contentDOM = this.table.appendChild(document.createElement('tbody'))));
	}
	update(t) {
		return t.type !== this.node.type
			? !1
			: ((this.node = t), Vu(t, this.colgroup, this.table, this.cellMinWidth), !0);
	}
	ignoreMutation(t) {
		const e = t.target,
			n = this.dom.contains(e),
			r = this.contentDOM.contains(e);
		return !!(
			n &&
			!r &&
			(t.type === 'attributes' || t.type === 'childList' || t.type === 'characterData')
		);
	}
};
function Sw(t, e, n, r) {
	let s = 0,
		o = !0;
	const i = [],
		l = t.firstChild;
	if (!l) return {};
	for (let d = 0, f = 0; d < l.childCount; d += 1) {
		const { colspan: h, colwidth: p } = l.child(d).attrs;
		for (let m = 0; m < h; m += 1, f += 1) {
			const g = n === f ? r : p && p[m];
			((s += g || e), g || (o = !1));
			const [b, S] = Fl(e, g);
			i.push(['col', { style: `${b}: ${S}` }]);
		}
	}
	const a = o ? `${s}px` : '',
		c = o ? '' : `${s}px`;
	return { colgroup: ['colgroup', {}, ...i], tableWidth: a, tableMinWidth: c };
}
function Wu(t, e) {
	return t.createAndFill();
}
function Cw(t) {
	if (t.cached.tableNodeTypes) return t.cached.tableNodeTypes;
	const e = {};
	return (
		Object.keys(t.nodes).forEach((n) => {
			const r = t.nodes[n];
			r.spec.tableRole && (e[r.spec.tableRole] = r);
		}),
		(t.cached.tableNodeTypes = e),
		e
	);
}
function Tw(t, e, n, r, s) {
	const o = Cw(t),
		i = [],
		l = [];
	for (let c = 0; c < n; c += 1) {
		const u = Wu(o.cell);
		if ((u && l.push(u), r)) {
			const d = Wu(o.header_cell);
			d && i.push(d);
		}
	}
	const a = [];
	for (let c = 0; c < e; c += 1) a.push(o.row.createChecked(null, r && c === 0 ? i : l));
	return o.table.createChecked(null, a);
}
function Mw(t) {
	return t instanceof Ge;
}
var io = ({ editor: t }) => {
		const { selection: e } = t.state;
		if (!Mw(e)) return !1;
		let n = 0;
		const r = kh(e.ranges[0].$from, (o) => o.type.name === 'table');
		return (
			r == null ||
				r.node.descendants((o) => {
					if (o.type.name === 'table') return !1;
					['tableCell', 'tableHeader'].includes(o.type.name) && (n += 1);
				}),
			n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1
		);
	},
	Ew = '';
function Aw(t) {
	return (t || '').replace(/\s+/g, ' ').trim();
}
function Nw(t, e, n = {}) {
	var r;
	const s = (r = n.cellLineSeparator) != null ? r : Ew;
	if (!t || !t.content || t.content.length === 0) return '';
	const o = [];
	t.content.forEach((p) => {
		const m = [];
		(p.content &&
			p.content.forEach((g) => {
				let b = '';
				g.content && Array.isArray(g.content) && g.content.length > 1
					? (b = g.content.map((E) => e.renderChildren(E)).join(s))
					: (b = g.content ? e.renderChildren(g.content) : '');
				const S = Aw(b),
					O = g.type === 'tableHeader';
				m.push({ text: S, isHeader: O });
			}),
			o.push(m));
	});
	const i = o.reduce((p, m) => Math.max(p, m.length), 0);
	if (i === 0) return '';
	const l = new Array(i).fill(0);
	o.forEach((p) => {
		var m;
		for (let g = 0; g < i; g += 1) {
			const S = (((m = p[g]) == null ? void 0 : m.text) || '').length;
			(S > l[g] && (l[g] = S), l[g] < 3 && (l[g] = 3));
		}
	});
	const a = (p, m) => p + ' '.repeat(Math.max(0, m - p.length)),
		c = o[0],
		u = c.some((p) => p.isHeader);
	let d = `
`;
	const f = new Array(i).fill(0).map((p, m) => (u && c[m] && c[m].text) || '');
	return (
		(d += `| ${f.map((p, m) => a(p, l[m])).join(' | ')} |
`),
		(d += `| ${l.map((p) => '-'.repeat(Math.max(3, p))).join(' | ')} |
`),
		(u ? o.slice(1) : o).forEach((p) => {
			d += `| ${new Array(i)
				.fill(0)
				.map((m, g) => a((p[g] && p[g].text) || '', l[g]))
				.join(' | ')} |
`;
		}),
		d
	);
}
var Ow = Nw,
	Iw = mt.create({
		name: 'table',
		addOptions() {
			return {
				HTMLAttributes: {},
				resizable: !1,
				renderWrapper: !1,
				handleWidth: 5,
				cellMinWidth: 25,
				View: ww,
				lastColumnResizable: !0,
				allowTableNodeSelection: !1
			};
		},
		content: 'tableRow+',
		tableRole: 'table',
		isolating: !0,
		group: 'block',
		parseHTML() {
			return [{ tag: 'table' }];
		},
		renderHTML({ node: t, HTMLAttributes: e }) {
			const { colgroup: n, tableWidth: r, tableMinWidth: s } = Sw(t, this.options.cellMinWidth),
				o = e.style;
			function i() {
				return o || (r ? `width: ${r}` : `min-width: ${s}`);
			}
			const l = ['table', je(this.options.HTMLAttributes, e, { style: i() }), n, ['tbody', 0]];
			return this.options.renderWrapper ? ['div', { class: 'tableWrapper' }, l] : l;
		},
		parseMarkdown: (t, e) => {
			const n = [];
			if (t.header) {
				const r = [];
				(t.header.forEach((s) => {
					r.push(
						e.createNode('tableHeader', {}, [
							{ type: 'paragraph', content: e.parseInline(s.tokens) }
						])
					);
				}),
					n.push(e.createNode('tableRow', {}, r)));
			}
			return (
				t.rows &&
					t.rows.forEach((r) => {
						const s = [];
						(r.forEach((o) => {
							s.push(
								e.createNode('tableCell', {}, [
									{ type: 'paragraph', content: e.parseInline(o.tokens) }
								])
							);
						}),
							n.push(e.createNode('tableRow', {}, s)));
					}),
				e.createNode('table', void 0, n)
			);
		},
		renderMarkdown: (t, e) => Ow(t, e),
		addCommands() {
			return {
				insertTable:
					({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) =>
					({ tr: r, dispatch: s, editor: o }) => {
						const i = Tw(o.schema, t, e, n);
						if (s) {
							const l = r.selection.from + 1;
							r.replaceSelectionWith(i)
								.scrollIntoView()
								.setSelection(pe.near(r.doc.resolve(l)));
						}
						return !0;
					},
				addColumnBefore:
					() =>
					({ state: t, dispatch: e }) =>
						Ax(t, e),
				addColumnAfter:
					() =>
					({ state: t, dispatch: e }) =>
						Nx(t, e),
				deleteColumn:
					() =>
					({ state: t, dispatch: e }) =>
						Ix(t, e),
				addRowBefore:
					() =>
					({ state: t, dispatch: e }) =>
						Rx(t, e),
				addRowAfter:
					() =>
					({ state: t, dispatch: e }) =>
						Lx(t, e),
				deleteRow:
					() =>
					({ state: t, dispatch: e }) =>
						zx(t, e),
				deleteTable:
					() =>
					({ state: t, dispatch: e }) =>
						Wx(t, e),
				mergeCells:
					() =>
					({ state: t, dispatch: e }) =>
						Iu(t, e),
				splitCell:
					() =>
					({ state: t, dispatch: e }) =>
						Du(t, e),
				toggleHeaderColumn:
					() =>
					({ state: t, dispatch: e }) =>
						Ds('column')(t, e),
				toggleHeaderRow:
					() =>
					({ state: t, dispatch: e }) =>
						Ds('row')(t, e),
				toggleHeaderCell:
					() =>
					({ state: t, dispatch: e }) =>
						Fx(t, e),
				mergeOrSplit:
					() =>
					({ state: t, dispatch: e }) =>
						Iu(t, e) ? !0 : Du(t, e),
				setCellAttribute:
					(t, e) =>
					({ state: n, dispatch: r }) =>
						_x(t, e)(n, r),
				goToNextCell:
					() =>
					({ state: t, dispatch: e }) =>
						Lu(1)(t, e),
				goToPreviousCell:
					() =>
					({ state: t, dispatch: e }) =>
						Lu(-1)(t, e),
				fixTables:
					() =>
					({ state: t, dispatch: e }) => (e && Tp(t), !0),
				setCellSelection:
					(t) =>
					({ tr: e, dispatch: n }) => {
						if (n) {
							const r = Ge.create(e.doc, t.anchorCell, t.headCell);
							e.setSelection(r);
						}
						return !0;
					}
			};
		},
		addKeyboardShortcuts() {
			return {
				Tab: () =>
					this.editor.commands.goToNextCell()
						? !0
						: this.editor.can().addRowAfter()
							? this.editor.chain().addRowAfter().goToNextCell().run()
							: !1,
				'Shift-Tab': () => this.editor.commands.goToPreviousCell(),
				Backspace: io,
				'Mod-Backspace': io,
				Delete: io,
				'Mod-Delete': io
			};
		},
		addProseMirrorPlugins() {
			return [
				...(this.options.resizable && this.editor.isEditable
					? [
							Zx({
								handleWidth: this.options.handleWidth,
								cellMinWidth: this.options.cellMinWidth,
								defaultCellMinWidth: this.options.cellMinWidth,
								View: this.options.View,
								lastColumnResizable: this.options.lastColumnResizable
							})
						]
					: []),
				cw({ allowTableNodeSelection: this.options.allowTableNodeSelection })
			];
		},
		extendNodeSchema(t) {
			const e = { name: t.name, options: t.options, storage: t.storage };
			return { tableRole: Fe(ie(t, 'tableRole', e)) };
		}
	}),
	Dw = Ue.create({
		name: 'tableKit',
		addExtensions() {
			const t = [];
			return (
				this.options.table !== !1 && t.push(Iw.configure(this.options.table)),
				this.options.tableCell !== !1 && t.push(vw.configure(this.options.tableCell)),
				this.options.tableHeader !== !1 && t.push(kw.configure(this.options.tableHeader)),
				this.options.tableRow !== !1 && t.push(xw.configure(this.options.tableRow)),
				t
			);
		}
	});
const Rw = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/,
	Lw = mt.create({
		name: 'image',
		addOptions() {
			return { inline: !1, allowBase64: !1, HTMLAttributes: {} };
		},
		inline() {
			return this.options.inline;
		},
		group() {
			return this.options.inline ? 'inline' : 'block';
		},
		draggable: !0,
		addAttributes() {
			return {
				file: { default: null },
				src: { default: null },
				alt: { default: null },
				title: { default: null },
				width: { default: null },
				height: { default: null }
			};
		},
		parseHTML() {
			return [{ tag: this.options.allowBase64 ? 'img[src]' : 'img[src]:not([src^="data:"])' }];
		},
		renderHTML({ HTMLAttributes: t }) {
			return (t.file && delete t.file, ['img', je(this.options.HTMLAttributes, t)]);
		},
		addNodeView() {
			return ({ node: t, editor: e }) => {
				var l;
				const n = document.createElement('img');
				(n.setAttribute('src', t.attrs.src || ''),
					n.setAttribute('alt', t.attrs.alt || ''),
					n.setAttribute('title', t.attrs.title || ''));
				const r = document.createElement('div'),
					s = document.createElement('img'),
					o = t.attrs.src.replace('data://', '');
				(s.setAttribute('id', `image:${o}`),
					s.classList.add('rounded-md', 'max-h-72', 'w-fit', 'object-contain'));
				const i = ((l = e.storage) == null ? void 0 : l.files) || [];
				if (i && t.attrs.src.startsWith('data://')) {
					const a = i.find((c) => c.id === o);
					a ? s.setAttribute('src', a.url || '') : s.setAttribute('src', '/image-placeholder.png');
				} else s.setAttribute('src', t.attrs.src || '');
				return (
					s.setAttribute('alt', t.attrs.alt || ''),
					s.setAttribute('title', t.attrs.title || ''),
					s.addEventListener('data', (a) => {
						if (((a == null ? void 0 : a.files) || []) && t.attrs.src.startsWith('data://')) {
							const u = i.find((d) => d.id === o);
							u
								? s.setAttribute('src', u.url || '')
								: s.setAttribute('src', '/image-placeholder.png');
						}
					}),
					r.append(s),
					{ dom: s, contentDOM: n }
				);
			};
		},
		addCommands() {
			return {
				setImage:
					(t) =>
					({ commands: e }) =>
						e.insertContent({ type: this.name, attrs: t })
			};
		},
		addInputRules() {
			return [
				qh({
					find: Rw,
					type: this.type,
					getAttributes: (t) => {
						const [, , e, n, r] = t;
						return { src: n, alt: e, title: r };
					}
				})
			];
		}
	});
var Pw = ({ key: t, editor: e, onPaste: n, onDrop: r, allowedMimeTypes: s }) =>
		new ze({
			key: t || new _e('fileHandler'),
			props: {
				handleDrop(o, i) {
					var l;
					if (!r || !((l = i.dataTransfer) != null && l.files.length)) return !1;
					const a = o.posAtCoords({ left: i.clientX, top: i.clientY });
					let c = Array.from(i.dataTransfer.files);
					return (
						s && (c = c.filter((u) => s.includes(u.type))),
						c.length === 0
							? !1
							: (i.preventDefault(),
								i.stopPropagation(),
								r(e, c, (a == null ? void 0 : a.pos) || 0),
								!0)
					);
				},
				handlePaste(o, i) {
					var l;
					if (!n || !((l = i.clipboardData) != null && l.files.length)) return !1;
					let a = Array.from(i.clipboardData.files);
					const c = i.clipboardData.getData('text/html');
					return (
						s && (a = a.filter((u) => s.includes(u.type))),
						!(a.length === 0 || (i.preventDefault(), i.stopPropagation(), n(e, a, c), c.length > 0))
					);
				}
			}
		}),
	zw = Ue.create({
		name: 'fileHandler',
		addOptions() {
			return { onPaste: void 0, onDrop: void 0, allowedMimeTypes: void 0 };
		},
		addProseMirrorPlugins() {
			return [
				Pw({
					key: new _e(this.name),
					editor: this.editor,
					allowedMimeTypes: this.options.allowedMimeTypes,
					onDrop: this.options.onDrop,
					onPaste: this.options.onPaste
				})
			];
		}
	}),
	Bw = zw,
	$w = (t) => at({ find: /--$/, replace: t ?? '—' }),
	_w = (t) => at({ find: /\.\.\.$/, replace: t ?? '…' }),
	Hw = (t) => at({ find: /(?:^|[\s{[(<'"\u2018\u201C])(")$/, replace: t ?? '“' }),
	Fw = (t) => at({ find: /"$/, replace: t ?? '”' }),
	Vw = (t) => at({ find: /(?:^|[\s{[(<'"\u2018\u201C])(')$/, replace: t ?? '‘' }),
	Ww = (t) => at({ find: /'$/, replace: t ?? '’' }),
	jw = (t) => at({ find: /<-$/, replace: t ?? '←' }),
	Uw = (t) => at({ find: /->$/, replace: t ?? '→' }),
	qw = (t) => at({ find: /\(c\)$/, replace: t ?? '©' }),
	Kw = (t) => at({ find: /\(tm\)$/, replace: t ?? '™' }),
	Jw = (t) => at({ find: /\(sm\)$/, replace: t ?? '℠' }),
	Gw = (t) => at({ find: /\(r\)$/, replace: t ?? '®' }),
	Xw = (t) => at({ find: /(?:^|\s)(1\/2)\s$/, replace: t ?? '½' }),
	Qw = (t) => at({ find: /\+\/-$/, replace: t ?? '±' }),
	Yw = (t) => at({ find: /!=$/, replace: t ?? '≠' }),
	Zw = (t) => at({ find: /<<$/, replace: t ?? '«' }),
	eS = (t) => at({ find: />>$/, replace: t ?? '»' }),
	tS = (t) => at({ find: /\d+\s?([*x])\s?\d+$/, replace: t ?? '×' }),
	nS = (t) => at({ find: /\^2$/, replace: t ?? '²' }),
	rS = (t) => at({ find: /\^3$/, replace: t ?? '³' }),
	sS = (t) => at({ find: /(?:^|\s)(1\/4)\s$/, replace: t ?? '¼' }),
	oS = (t) => at({ find: /(?:^|\s)(3\/4)\s$/, replace: t ?? '¾' }),
	iS = Ue.create({
		name: 'typography',
		addOptions() {
			return {
				closeDoubleQuote: '”',
				closeSingleQuote: '’',
				copyright: '©',
				ellipsis: '…',
				emDash: '—',
				laquo: '«',
				leftArrow: '←',
				multiplication: '×',
				notEqual: '≠',
				oneHalf: '½',
				oneQuarter: '¼',
				openDoubleQuote: '“',
				openSingleQuote: '‘',
				plusMinus: '±',
				raquo: '»',
				registeredTrademark: '®',
				rightArrow: '→',
				servicemark: '℠',
				superscriptThree: '³',
				superscriptTwo: '²',
				threeQuarters: '¾',
				trademark: '™'
			};
		},
		addInputRules() {
			const t = [];
			return (
				this.options.emDash !== !1 && t.push($w(this.options.emDash)),
				this.options.ellipsis !== !1 && t.push(_w(this.options.ellipsis)),
				this.options.openDoubleQuote !== !1 && t.push(Hw(this.options.openDoubleQuote)),
				this.options.closeDoubleQuote !== !1 && t.push(Fw(this.options.closeDoubleQuote)),
				this.options.openSingleQuote !== !1 && t.push(Vw(this.options.openSingleQuote)),
				this.options.closeSingleQuote !== !1 && t.push(Ww(this.options.closeSingleQuote)),
				this.options.leftArrow !== !1 && t.push(jw(this.options.leftArrow)),
				this.options.rightArrow !== !1 && t.push(Uw(this.options.rightArrow)),
				this.options.copyright !== !1 && t.push(qw(this.options.copyright)),
				this.options.trademark !== !1 && t.push(Kw(this.options.trademark)),
				this.options.servicemark !== !1 && t.push(Jw(this.options.servicemark)),
				this.options.registeredTrademark !== !1 && t.push(Gw(this.options.registeredTrademark)),
				this.options.oneHalf !== !1 && t.push(Xw(this.options.oneHalf)),
				this.options.plusMinus !== !1 && t.push(Qw(this.options.plusMinus)),
				this.options.notEqual !== !1 && t.push(Yw(this.options.notEqual)),
				this.options.laquo !== !1 && t.push(Zw(this.options.laquo)),
				this.options.raquo !== !1 && t.push(eS(this.options.raquo)),
				this.options.multiplication !== !1 && t.push(tS(this.options.multiplication)),
				this.options.superscriptTwo !== !1 && t.push(nS(this.options.superscriptTwo)),
				this.options.superscriptThree !== !1 && t.push(rS(this.options.superscriptThree)),
				this.options.oneQuarter !== !1 && t.push(sS(this.options.oneQuarter)),
				this.options.threeQuarters !== !1 && t.push(oS(this.options.threeQuarters)),
				t
			);
		}
	}),
	lS = iS,
	aS = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/,
	cS = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g;
nr.create({
	name: 'highlight',
	addOptions() {
		return { multicolor: !1, HTMLAttributes: {} };
	},
	addAttributes() {
		return this.options.multicolor
			? {
					color: {
						default: null,
						parseHTML: (t) => t.getAttribute('data-color') || t.style.backgroundColor,
						renderHTML: (t) =>
							t.color
								? { 'data-color': t.color, style: `background-color: ${t.color}; color: inherit` }
								: {}
					}
				}
			: {};
	},
	parseHTML() {
		return [{ tag: 'mark' }];
	},
	renderHTML({ HTMLAttributes: t }) {
		return ['mark', je(this.options.HTMLAttributes, t), 0];
	},
	renderMarkdown: (t, e) => `==${e.renderChildren(t)}==`,
	parseMarkdown: (t, e) => e.applyMark('highlight', e.parseInline(t.tokens || [])),
	markdownTokenizer: {
		name: 'highlight',
		level: 'inline',
		start: (t) => t.indexOf('=='),
		tokenize(t, e, n) {
			const s = /^(==)([^=]+)(==)/.exec(t);
			if (s) {
				const o = s[2].trim(),
					i = n.inlineTokens(o);
				return { type: 'highlight', raw: s[0], text: o, tokens: i };
			}
		}
	},
	addCommands() {
		return {
			setHighlight:
				(t) =>
				({ commands: e }) =>
					e.setMark(this.name, t),
			toggleHighlight:
				(t) =>
				({ commands: e }) =>
					e.toggleMark(this.name, t),
			unsetHighlight:
				() =>
				({ commands: t }) =>
					t.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return { 'Mod-Shift-h': () => this.editor.commands.toggleHighlight() };
	},
	addInputRules() {
		return [Yn({ find: aS, type: this.type })];
	},
	addPasteRules() {
		return [Zn({ find: cS, type: this.type })];
	}
});
function Op(t, e = []) {
	return t.flatMap((n) => {
		const r = [...e, ...(n.properties ? n.properties.className : [])];
		return n.children ? Op(n.children, r) : { text: n.value, classes: r };
	});
}
function ju(t) {
	return t.value || t.children || [];
}
function uS(t) {
	return !!Gu.getLanguage(t);
}
function Uu({ doc: t, name: e, lowlight: n, defaultLanguage: r }) {
	const s = [];
	return (
		wl(t, (o) => o.type.name === e).forEach((o) => {
			var i;
			let l = o.pos + 1;
			const a = o.node.attrs.language || r,
				c = n.listLanguages(),
				u =
					a && (c.includes(a) || uS(a) || ((i = n.registered) != null && i.call(n, a)))
						? ju(n.highlight(a, o.node.textContent))
						: ju(n.highlightAuto(o.node.textContent));
			Op(u).forEach((d) => {
				const f = l + d.text.length;
				if (d.classes.length) {
					const h = tt.inline(l, f, { class: d.classes.join(' ') });
					s.push(h);
				}
				l = f;
			});
		}),
		Ve.create(t, s)
	);
}
function dS(t) {
	return typeof t == 'function';
}
function fS({ name: t, lowlight: e, defaultLanguage: n }) {
	if (!['highlight', 'highlightAuto', 'listLanguages'].every((s) => dS(e[s])))
		throw Error(
			'You should provide an instance of lowlight to use the code-block-lowlight extension'
		);
	const r = new ze({
		key: new _e('lowlight'),
		state: {
			init: (s, { doc: o }) => Uu({ doc: o, name: t, lowlight: e, defaultLanguage: n }),
			apply: (s, o, i, l) => {
				const a = i.selection.$head.parent.type.name,
					c = l.selection.$head.parent.type.name,
					u = wl(i.doc, (f) => f.type.name === t),
					d = wl(l.doc, (f) => f.type.name === t);
				return s.docChanged &&
					([a, c].includes(t) ||
						d.length !== u.length ||
						s.steps.some(
							(f) =>
								f.from !== void 0 &&
								f.to !== void 0 &&
								u.some((h) => h.pos >= f.from && h.pos + h.node.nodeSize <= f.to)
						))
					? Uu({ doc: s.doc, name: t, lowlight: e, defaultLanguage: n })
					: o.map(s.mapping, s.doc);
			}
		},
		props: {
			decorations(s) {
				return r.getState(s);
			}
		}
	});
	return r;
}
var hS = Xh.extend({
		addOptions() {
			var t;
			return {
				...((t = this.parent) == null ? void 0 : t.call(this)),
				lowlight: {},
				languageClassPrefix: 'language-',
				exitOnTripleEnter: !0,
				exitOnArrowDown: !0,
				defaultLanguage: null,
				enableTabIndentation: !1,
				tabSize: 4,
				HTMLAttributes: {}
			};
		},
		addProseMirrorPlugins() {
			var t;
			return [
				...(((t = this.parent) == null ? void 0 : t.call(this)) || []),
				fS({
					name: this.name,
					lowlight: this.options.lowlight,
					defaultLanguage: this.options.defaultLanguage
				})
			];
		}
	}),
	pS = hS;
function mS(t) {
	var e;
	const {
			char: n,
			allowSpaces: r,
			allowToIncludeChar: s,
			allowedPrefixes: o,
			startOfLine: i,
			$position: l
		} = t,
		a = r && !s,
		c = kv(n),
		u = new RegExp(`\\s${c}$`),
		d = i ? '^' : '',
		f = s ? '' : c,
		h = a
			? new RegExp(`${d}${c}.*?(?=\\s${f}|$)`, 'gm')
			: new RegExp(`${d}(?:^)?${c}[^\\s${f}]*`, 'gm'),
		p = ((e = l.nodeBefore) == null ? void 0 : e.isText) && l.nodeBefore.text;
	if (!p) return null;
	const m = l.pos - p.length,
		g = Array.from(p.matchAll(h)).pop();
	if (!g || g.input === void 0 || g.index === void 0) return null;
	const b = g.input.slice(Math.max(0, g.index - 1), g.index),
		S = new RegExp(`^[${o == null ? void 0 : o.join('')}\0]?$`).test(b);
	if (o !== null && !S) return null;
	const O = m + g.index;
	let H = O + g[0].length;
	return (
		a && u.test(p.slice(H - 1, H + 1)) && ((g[0] += ' '), (H += 1)),
		O < l.pos && H >= l.pos
			? { range: { from: O, to: H }, query: g[0].slice(n.length), text: g[0] }
			: null
	);
}
var gS = new _e('suggestion');
function yS({
	pluginKey: t = gS,
	editor: e,
	char: n = '@',
	allowSpaces: r = !1,
	allowToIncludeChar: s = !1,
	allowedPrefixes: o = [' '],
	startOfLine: i = !1,
	decorationTag: l = 'span',
	decorationClass: a = 'suggestion',
	decorationContent: c = '',
	decorationEmptyClass: u = 'is-empty',
	command: d = () => null,
	items: f = () => [],
	render: h = () => ({}),
	allow: p = () => !0,
	findSuggestionMatch: m = mS,
	shouldShow: g
}) {
	let b;
	const S = h == null ? void 0 : h(),
		O = () => {
			const k = e.state.selection.$anchor.pos,
				M = e.view.coordsAtPos(k),
				{ top: T, right: _, bottom: C, left: ce } = M;
			try {
				return new DOMRect(ce, T, _ - ce, C - T);
			} catch {
				return null;
			}
		},
		H = (k, M) =>
			M
				? () => {
						const T = t.getState(e.state),
							_ = T == null ? void 0 : T.decorationId,
							C = k.dom.querySelector(`[data-decoration-id="${_}"]`);
						return (C == null ? void 0 : C.getBoundingClientRect()) || null;
					}
				: O;
	function E(k, M) {
		var T;
		try {
			const C = t.getState(k.state),
				ce =
					C != null && C.decorationId
						? k.dom.querySelector(`[data-decoration-id="${C.decorationId}"]`)
						: null,
				W = {
					editor: e,
					range: (C == null ? void 0 : C.range) || { from: 0, to: 0 },
					query: (C == null ? void 0 : C.query) || null,
					text: (C == null ? void 0 : C.text) || null,
					items: [],
					command: (ee) =>
						d({
							editor: e,
							range: (C == null ? void 0 : C.range) || { from: 0, to: 0 },
							props: ee
						}),
					decorationNode: ce,
					clientRect: H(k, ce)
				};
			(T = S == null ? void 0 : S.onExit) == null || T.call(S, W);
		} catch {}
		const _ = k.state.tr.setMeta(M, { exit: !0 });
		k.dispatch(_);
	}
	const x = new ze({
		key: t,
		view() {
			return {
				update: async (k, M) => {
					var T, _, C, ce, W, ee, U;
					const j = (T = this.key) == null ? void 0 : T.getState(M),
						Y = (_ = this.key) == null ? void 0 : _.getState(k.state),
						w = j.active && Y.active && j.range.from !== Y.range.from,
						A = !j.active && Y.active,
						v = j.active && !Y.active,
						D = !A && !v && j.query !== Y.query,
						I = A || (w && D),
						q = D || w,
						J = v || (w && D);
					if (!I && !q && !J) return;
					const xe = J && !I ? j : Y,
						Te = k.dom.querySelector(`[data-decoration-id="${xe.decorationId}"]`);
					((b = {
						editor: e,
						range: xe.range,
						query: xe.query,
						text: xe.text,
						items: [],
						command: (ue) => d({ editor: e, range: xe.range, props: ue }),
						decorationNode: Te,
						clientRect: H(k, Te)
					}),
						I && ((C = S == null ? void 0 : S.onBeforeStart) == null || C.call(S, b)),
						q && ((ce = S == null ? void 0 : S.onBeforeUpdate) == null || ce.call(S, b)),
						(q || I) && (b.items = await f({ editor: e, query: xe.query })),
						J && ((W = S == null ? void 0 : S.onExit) == null || W.call(S, b)),
						q && ((ee = S == null ? void 0 : S.onUpdate) == null || ee.call(S, b)),
						I && ((U = S == null ? void 0 : S.onStart) == null || U.call(S, b)));
				},
				destroy: () => {
					var k;
					b && ((k = S == null ? void 0 : S.onExit) == null || k.call(S, b));
				}
			};
		},
		state: {
			init() {
				return { active: !1, range: { from: 0, to: 0 }, query: null, text: null, composing: !1 };
			},
			apply(k, M, T, _) {
				const { isEditable: C } = e,
					{ composing: ce } = e.view,
					{ selection: W } = k,
					{ empty: ee, from: U } = W,
					j = { ...M },
					Y = k.getMeta(t);
				if (Y && Y.exit)
					return (
						(j.active = !1),
						(j.decorationId = null),
						(j.range = { from: 0, to: 0 }),
						(j.query = null),
						(j.text = null),
						j
					);
				if (((j.composing = ce), C && (ee || e.view.composing))) {
					(U < M.range.from || U > M.range.to) && !ce && !M.composing && (j.active = !1);
					const w = m({
							char: n,
							allowSpaces: r,
							allowToIncludeChar: s,
							allowedPrefixes: o,
							startOfLine: i,
							$position: W.$from
						}),
						A = `id_${Math.floor(Math.random() * 4294967295)}`;
					w &&
					p({ editor: e, state: _, range: w.range, isActive: M.active }) &&
					(!g || g({ editor: e, range: w.range, query: w.query, text: w.text, transaction: k }))
						? ((j.active = !0),
							(j.decorationId = M.decorationId ? M.decorationId : A),
							(j.range = w.range),
							(j.query = w.query),
							(j.text = w.text))
						: (j.active = !1);
				} else j.active = !1;
				return (
					j.active ||
						((j.decorationId = null),
						(j.range = { from: 0, to: 0 }),
						(j.query = null),
						(j.text = null)),
					j
				);
			}
		},
		props: {
			handleKeyDown(k, M) {
				var T, _, C, ce;
				const { active: W, range: ee } = x.getState(k.state);
				if (!W) return !1;
				if (M.key === 'Escape' || M.key === 'Esc') {
					const j = x.getState(k.state),
						Y = (T = b == null ? void 0 : b.decorationNode) != null ? T : null,
						w =
							Y ??
							(j != null && j.decorationId
								? k.dom.querySelector(`[data-decoration-id="${j.decorationId}"]`)
								: null);
					if (
						((_ = S == null ? void 0 : S.onKeyDown) == null
							? void 0
							: _.call(S, { view: k, event: M, range: j.range })) ||
						!1
					)
						return !0;
					const v = {
						editor: e,
						range: j.range,
						query: j.query,
						text: j.text,
						items: [],
						command: (D) => d({ editor: e, range: j.range, props: D }),
						decorationNode: w,
						clientRect: w ? () => w.getBoundingClientRect() || null : null
					};
					return ((C = S == null ? void 0 : S.onExit) == null || C.call(S, v), E(k, t), !0);
				}
				return (
					((ce = S == null ? void 0 : S.onKeyDown) == null
						? void 0
						: ce.call(S, { view: k, event: M, range: ee })) || !1
				);
			},
			decorations(k) {
				const { active: M, range: T, decorationId: _, query: C } = x.getState(k);
				if (!M) return null;
				const ce = !(C != null && C.length),
					W = [a];
				return (
					ce && W.push(u),
					Ve.create(k.doc, [
						tt.inline(T.from, T.to, {
							nodeName: l,
							class: W.join(' '),
							'data-decoration-id': _,
							'data-decoration-content': c
						})
					])
				);
			}
		}
	});
	return x;
}
function bS({ editor: t, overrideSuggestionOptions: e, extensionName: n, char: r = '@' }) {
	const s = new _e();
	return {
		editor: t,
		char: r,
		pluginKey: s,
		command: ({ editor: o, range: i, props: l }) => {
			var a, c, u;
			const d = o.view.state.selection.$to.nodeAfter;
			(((a = d == null ? void 0 : d.text) == null ? void 0 : a.startsWith(' ')) && (i.to += 1),
				o
					.chain()
					.focus()
					.insertContentAt(i, [
						{ type: n, attrs: { ...l, mentionSuggestionChar: r } },
						{ type: 'text', text: ' ' }
					])
					.run(),
				(u = (c = o.view.dom.ownerDocument.defaultView) == null ? void 0 : c.getSelection()) ==
					null || u.collapseToEnd());
		},
		allow: ({ state: o, range: i }) => {
			const l = o.doc.resolve(i.from),
				a = o.schema.nodes[n];
			return !!l.parent.type.contentMatch.matchType(a);
		},
		...e
	};
}
function Ip(t) {
	return (t.options.suggestions.length ? t.options.suggestions : [t.options.suggestion]).map((e) =>
		bS({ editor: t.editor, overrideSuggestionOptions: e, extensionName: t.name, char: e.char })
	);
}
function qu(t, e) {
	const n = Ip(t),
		r = n.find((s) => s.char === e);
	return r || (n.length ? n[0] : null);
}
var vS = mt.create({
		name: 'mention',
		priority: 101,
		addOptions() {
			return {
				HTMLAttributes: {},
				renderText({ node: t, suggestion: e }) {
					var n, r;
					return `${(n = e == null ? void 0 : e.char) != null ? n : '@'}${(r = t.attrs.label) != null ? r : t.attrs.id}`;
				},
				deleteTriggerWithBackspace: !1,
				renderHTML({ options: t, node: e, suggestion: n }) {
					var r, s;
					return [
						'span',
						je(this.HTMLAttributes, t.HTMLAttributes),
						`${(r = n == null ? void 0 : n.char) != null ? r : '@'}${(s = e.attrs.label) != null ? s : e.attrs.id}`
					];
				},
				suggestions: [],
				suggestion: {}
			};
		},
		group: 'inline',
		inline: !0,
		selectable: !1,
		atom: !0,
		addAttributes() {
			return {
				id: {
					default: null,
					parseHTML: (t) => t.getAttribute('data-id'),
					renderHTML: (t) => (t.id ? { 'data-id': t.id } : {})
				},
				label: {
					default: null,
					parseHTML: (t) => t.getAttribute('data-label'),
					renderHTML: (t) => (t.label ? { 'data-label': t.label } : {})
				},
				mentionSuggestionChar: {
					default: '@',
					parseHTML: (t) => t.getAttribute('data-mention-suggestion-char'),
					renderHTML: (t) => ({ 'data-mention-suggestion-char': t.mentionSuggestionChar })
				}
			};
		},
		parseHTML() {
			return [{ tag: `span[data-type="${this.name}"]` }];
		},
		renderHTML({ node: t, HTMLAttributes: e }) {
			const n = qu(this, t.attrs.mentionSuggestionChar);
			if (this.options.renderLabel !== void 0)
				return (
					console.warn('renderLabel is deprecated use renderText and renderHTML instead'),
					[
						'span',
						je({ 'data-type': this.name }, this.options.HTMLAttributes, e),
						this.options.renderLabel({ options: this.options, node: t, suggestion: n })
					]
				);
			const r = { ...this.options };
			r.HTMLAttributes = je({ 'data-type': this.name }, this.options.HTMLAttributes, e);
			const s = this.options.renderHTML({ options: r, node: t, suggestion: n });
			return typeof s == 'string'
				? ['span', je({ 'data-type': this.name }, this.options.HTMLAttributes, e), s]
				: s;
		},
		...Kh({
			nodeName: 'mention',
			name: '@',
			selfClosing: !0,
			allowedAttributes: ['id', 'label', { name: 'mentionSuggestionChar', skipIfDefault: '@' }],
			parseAttributes: (t) => {
				const e = {},
					n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
				let r = n.exec(t);
				for (; r !== null; ) {
					const [, s, o, i] = r,
						l = o ?? i;
					((e[s === 'char' ? 'mentionSuggestionChar' : s] = l), (r = n.exec(t)));
				}
				return e;
			},
			serializeAttributes: (t) =>
				Object.entries(t)
					.filter(([, e]) => e != null)
					.map(([e, n]) => `${e === 'mentionSuggestionChar' ? 'char' : e}="${n}"`)
					.join(' ')
		}),
		renderText({ node: t }) {
			const e = {
				options: this.options,
				node: t,
				suggestion: qu(this, t.attrs.mentionSuggestionChar)
			};
			return this.options.renderLabel !== void 0
				? (console.warn('renderLabel is deprecated use renderText and renderHTML instead'),
					this.options.renderLabel(e))
				: this.options.renderText(e);
		},
		addKeyboardShortcuts() {
			return {
				Backspace: () =>
					this.editor.commands.command(({ tr: t, state: e }) => {
						let n = !1;
						const { selection: r } = e,
							{ empty: s, anchor: o } = r;
						if (!s) return !1;
						let i = new Qt(),
							l = 0;
						return (
							e.doc.nodesBetween(o - 1, o, (a, c) => {
								if (a.type.name === this.name) return ((n = !0), (i = a), (l = c), !1);
							}),
							n &&
								t.insertText(
									this.options.deleteTriggerWithBackspace ? '' : i.attrs.mentionSuggestionChar,
									l,
									l + i.nodeSize
								),
							n
						);
					})
			};
		},
		addProseMirrorPlugins() {
			return Ip(this).map(yS);
		}
	}),
	kS = vS,
	xS = Tt(
		'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linejoin="round" d="M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z"></path></svg>'
	);
function wS(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = xS();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var SS = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"></path></svg>'
);
function CS(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = SS();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var TS = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501m4.501-8.627 2.25-1.5v10.126m0 0h-2.25m2.25 0h2.25"></path></svg>'
);
function MS(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = TS();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var ES = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 19.5H16.5v-1.609a2.25 2.25 0 0 1 1.244-2.012l2.89-1.445c.651-.326 1.116-.955 1.116-1.683 0-.498-.04-.987-.118-1.463-.135-.825-.835-1.422-1.668-1.489a15.202 15.202 0 0 0-3.464.12M2.243 4.492v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501"></path></svg>'
);
function AS(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = ES();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var NS = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.905 14.626a4.52 4.52 0 0 1 .738 3.603c-.154.695-.794 1.143-1.504 1.208a15.194 15.194 0 0 1-3.639-.104m4.405-4.707a4.52 4.52 0 0 0 .738-3.603c-.154-.696-.794-1.144-1.504-1.209a15.19 15.19 0 0 0-3.639.104m4.405 4.708H18M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501"></path></svg>'
);
function OS(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = NS();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var IS = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803"></path></svg>'
);
function DS(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = IS();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var RS = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg>'
);
function LS(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = RS();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var PS = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99"></path></svg>'
);
function zS(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = PS();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var BS = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 12a8.912 8.912 0 0 1-.318-.079c-1.585-.424-2.904-1.247-3.76-2.236-.873-1.009-1.265-2.19-.968-3.301.59-2.2 3.663-3.29 6.863-2.432A8.186 8.186 0 0 1 16.5 5.21M6.42 17.81c.857.99 2.176 1.812 3.761 2.237 3.2.858 6.274-.23 6.863-2.431.233-.868.044-1.779-.465-2.617M3.75 12h16.5"></path></svg>'
);
function $S(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = BS();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var _S = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.995 3.744v7.5a6 6 0 1 1-12 0v-7.5m-2.25 16.502h16.5"></path></svg>'
);
function HS(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = _S();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var FS = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" stroke-width="1.5"></path><path d="M7 12.5L10 15.5L17 8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
);
function VS(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = FS();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var WS = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M16.75 12H6.75M6.75 12L9.5 14.75M6.75 12L9.5 9.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 15V9C2 6.79086 3.79086 5 6 5H18C20.2091 5 22 6.79086 22 9V15C22 17.2091 20.2091 19 18 19H6C3.79086 19 2 17.2091 2 15Z"></path></svg>'
);
function jS(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = WS();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var US = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M6.75 12H16.75M16.75 12L14 14.75M16.75 12L14 9.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 15V9C2 6.79086 3.79086 5 6 5H18C20.2091 5 22 6.79086 22 9V15C22 17.2091 20.2091 19 18 19H6C3.79086 19 2 17.2091 2 15Z"></path></svg>'
);
function qS(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = US();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var KS = ae('<button type="button"><!></button>'),
	JS = ae('<button type="button"><!></button>'),
	GS = ae('<button type="button"><!></button>'),
	XS = ae(
		'<button class="hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-1.5 transition-all" type="button"><!></button>'
	),
	QS = ae(
		'<button class="hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-1.5 transition-all" type="button"><!></button>'
	),
	YS = ae('<!> <!>', 1),
	ZS = ae('<button type="button"><!></button>'),
	eC = ae('<button type="button"><!></button>'),
	tC = ae('<button type="button"><!></button>'),
	nC = ae('<button type="button"><!></button>'),
	rC = ae('<button type="button"><!></button>'),
	sC = ae('<button type="button"><!></button>'),
	oC = ae('<button type="button"><!></button>'),
	iC = ae('<button type="button"><!></button>'),
	lC = ae(
		'<div class="flex gap-0.5 p-0.5 rounded-xl shadow-lg bg-white text-gray-800 dark:text-white dark:bg-gray-850 min-w-fit border border-gray-100 dark:border-gray-800"><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></div>'
	);
function Ku(t, e) {
	en(e, !1);
	const n = () => yt(o, '$i18n', r),
		[r, s] = ln(),
		o = Rn('i18n');
	let i = P(e, 'editor', 8, null);
	nn();
	var l = lC(),
		a = Q(l);
	{
		let x = ut(() => (n(), L(() => n().t('H1'))));
		dt(a, {
			placement: 'top',
			get content() {
				return y(x);
			},
			children: (k, M) => {
				var T = KS(),
					_ = Q(T);
				(MS(_, {}),
					G(T),
					ge(
						(C) =>
							Le(
								T,
								1,
								`${C ?? ''} hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-1.5 transition-all`
							),
						[
							() => (
								$(i()),
								L(() => {
									var C;
									return (C = i()) != null && C.isActive('heading', { level: 1 })
										? 'bg-gray-50 dark:bg-gray-700'
										: '';
								})
							)
						]
					),
					Ee('click', T, () => {
						var C;
						return (C = i()) == null ? void 0 : C.chain().focus().toggleHeading({ level: 1 }).run();
					}),
					K(k, T));
			},
			$$slots: { default: !0 }
		});
	}
	var c = Oe(a, 2);
	{
		let x = ut(() => (n(), L(() => n().t('H2'))));
		dt(c, {
			placement: 'top',
			get content() {
				return y(x);
			},
			children: (k, M) => {
				var T = JS(),
					_ = Q(T);
				(AS(_, {}),
					G(T),
					ge(
						(C) =>
							Le(
								T,
								1,
								`${C ?? ''} hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-1.5 transition-all`
							),
						[
							() => (
								$(i()),
								L(() => {
									var C;
									return (C = i()) != null && C.isActive('heading', { level: 2 })
										? 'bg-gray-50 dark:bg-gray-700'
										: '';
								})
							)
						]
					),
					Ee('click', T, () => {
						var C;
						return (C = i()) == null ? void 0 : C.chain().focus().toggleHeading({ level: 2 }).run();
					}),
					K(k, T));
			},
			$$slots: { default: !0 }
		});
	}
	var u = Oe(c, 2);
	{
		let x = ut(() => (n(), L(() => n().t('H3'))));
		dt(u, {
			placement: 'top',
			get content() {
				return y(x);
			},
			children: (k, M) => {
				var T = GS(),
					_ = Q(T);
				(OS(_, {}),
					G(T),
					ge(
						(C) =>
							Le(
								T,
								1,
								`${C ?? ''} hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-1.5 transition-all`
							),
						[
							() => (
								$(i()),
								L(() => {
									var C;
									return (C = i()) != null && C.isActive('heading', { level: 3 })
										? 'bg-gray-50 dark:bg-gray-700'
										: '';
								})
							)
						]
					),
					Ee('click', T, () => {
						var C;
						return (C = i()) == null ? void 0 : C.chain().focus().toggleHeading({ level: 3 }).run();
					}),
					K(k, T));
			},
			$$slots: { default: !0 }
		});
	}
	var d = Oe(u, 2);
	{
		var f = (x) => {
				var k = YS(),
					M = Ht(k);
				{
					let _ = ut(() => (n(), L(() => n().t('Lift List'))));
					dt(M, {
						placement: 'top',
						get content() {
							return y(_);
						},
						children: (C, ce) => {
							var W = XS(),
								ee = Q(W);
							(jS(ee, {}),
								G(W),
								Ee('click', W, () => {
									var U, j;
									(j = i()) == null ||
										j.commands.liftListItem(
											(U = i()) != null && U.isActive('taskList') ? 'taskItem' : 'listItem'
										);
								}),
								K(C, W));
						},
						$$slots: { default: !0 }
					});
				}
				var T = Oe(M, 2);
				{
					let _ = ut(() => (n(), L(() => n().t('Sink List'))));
					dt(T, {
						placement: 'top',
						get content() {
							return y(_);
						},
						children: (C, ce) => {
							var W = QS(),
								ee = Q(W);
							(qS(ee, {}),
								G(W),
								Ee('click', W, () => {
									var U, j;
									return (j = i()) == null
										? void 0
										: j.commands.sinkListItem(
												(U = i()) != null && U.isActive('taskList') ? 'taskItem' : 'listItem'
											);
								}),
								K(C, W));
						},
						$$slots: { default: !0 }
					});
				}
				K(x, k);
			},
			h = ts(
				() => (
					$(i()),
					L(() => {
						var x, k, M;
						return (
							((x = i()) == null ? void 0 : x.isActive('bulletList')) ||
							((k = i()) == null ? void 0 : k.isActive('orderedList')) ||
							((M = i()) == null ? void 0 : M.isActive('taskList'))
						);
					})
				)
			);
		wt(d, (x) => {
			y(h) && x(f);
		});
	}
	var p = Oe(d, 2);
	{
		let x = ut(() => (n(), L(() => n().t('Bullet List'))));
		dt(p, {
			placement: 'top',
			get content() {
				return y(x);
			},
			children: (k, M) => {
				var T = ZS(),
					_ = Q(T);
				(LS(_, {}),
					G(T),
					ge(
						(C) =>
							Le(
								T,
								1,
								`${C ?? ''} hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-1.5 transition-all`
							),
						[
							() => (
								$(i()),
								L(() => {
									var C;
									return (C = i()) != null && C.isActive('bulletList')
										? 'bg-gray-50 dark:bg-gray-700'
										: '';
								})
							)
						]
					),
					Ee('click', T, () => {
						var C;
						return (C = i()) == null ? void 0 : C.chain().focus().toggleBulletList().run();
					}),
					K(k, T));
			},
			$$slots: { default: !0 }
		});
	}
	var m = Oe(p, 2);
	{
		let x = ut(() => (n(), L(() => n().t('Ordered List'))));
		dt(m, {
			placement: 'top',
			get content() {
				return y(x);
			},
			children: (k, M) => {
				var T = eC(),
					_ = Q(T);
				(zS(_, {}),
					G(T),
					ge(
						(C) =>
							Le(
								T,
								1,
								`${C ?? ''} hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-1.5 transition-all`
							),
						[
							() => (
								$(i()),
								L(() => {
									var C;
									return (C = i()) != null && C.isActive('orderedList')
										? 'bg-gray-50 dark:bg-gray-700'
										: '';
								})
							)
						]
					),
					Ee('click', T, () => {
						var C;
						return (C = i()) == null ? void 0 : C.chain().focus().toggleOrderedList().run();
					}),
					K(k, T));
			},
			$$slots: { default: !0 }
		});
	}
	var g = Oe(m, 2);
	{
		let x = ut(() => (n(), L(() => n().t('Task List'))));
		dt(g, {
			placement: 'top',
			get content() {
				return y(x);
			},
			children: (k, M) => {
				var T = tC(),
					_ = Q(T);
				(VS(_, {}),
					G(T),
					ge(
						(C) =>
							Le(
								T,
								1,
								`${C ?? ''} hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-1.5 transition-all`
							),
						[
							() => (
								$(i()),
								L(() => {
									var C;
									return (C = i()) != null && C.isActive('taskList')
										? 'bg-gray-50 dark:bg-gray-700'
										: '';
								})
							)
						]
					),
					Ee('click', T, () => {
						var C;
						return (C = i()) == null ? void 0 : C.chain().focus().toggleTaskList().run();
					}),
					K(k, T));
			},
			$$slots: { default: !0 }
		});
	}
	var b = Oe(g, 2);
	{
		let x = ut(() => (n(), L(() => n().t('Bold'))));
		dt(b, {
			placement: 'top',
			get content() {
				return y(x);
			},
			children: (k, M) => {
				var T = nC(),
					_ = Q(T);
				(wS(_, {}),
					G(T),
					ge(
						(C) =>
							Le(
								T,
								1,
								`${C ?? ''} hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-1.5 transition-all`
							),
						[
							() => (
								$(i()),
								L(() => {
									var C;
									return (C = i()) != null && C.isActive('bold')
										? 'bg-gray-50 dark:bg-gray-700'
										: '';
								})
							)
						]
					),
					Ee('click', T, () => {
						var C;
						return (C = i()) == null ? void 0 : C.chain().focus().toggleBold().run();
					}),
					K(k, T));
			},
			$$slots: { default: !0 }
		});
	}
	var S = Oe(b, 2);
	{
		let x = ut(() => (n(), L(() => n().t('Italic'))));
		dt(S, {
			placement: 'top',
			get content() {
				return y(x);
			},
			children: (k, M) => {
				var T = rC(),
					_ = Q(T);
				(DS(_, {}),
					G(T),
					ge(
						(C) =>
							Le(
								T,
								1,
								`${C ?? ''} hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-1.5 transition-all`
							),
						[
							() => (
								$(i()),
								L(() => {
									var C;
									return (C = i()) != null && C.isActive('italic')
										? 'bg-gray-50 dark:bg-gray-700'
										: '';
								})
							)
						]
					),
					Ee('click', T, () => {
						var C;
						return (C = i()) == null ? void 0 : C.chain().focus().toggleItalic().run();
					}),
					K(k, T));
			},
			$$slots: { default: !0 }
		});
	}
	var O = Oe(S, 2);
	{
		let x = ut(() => (n(), L(() => n().t('Underline'))));
		dt(O, {
			placement: 'top',
			get content() {
				return y(x);
			},
			children: (k, M) => {
				var T = sC(),
					_ = Q(T);
				(HS(_, {}),
					G(T),
					ge(
						(C) =>
							Le(
								T,
								1,
								`${C ?? ''} hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-1.5 transition-all`
							),
						[
							() => (
								$(i()),
								L(() => {
									var C;
									return (C = i()) != null && C.isActive('underline')
										? 'bg-gray-50 dark:bg-gray-700'
										: '';
								})
							)
						]
					),
					Ee('click', T, () => {
						var C;
						return (C = i()) == null ? void 0 : C.chain().focus().toggleUnderline().run();
					}),
					K(k, T));
			},
			$$slots: { default: !0 }
		});
	}
	var H = Oe(O, 2);
	{
		let x = ut(() => (n(), L(() => n().t('Strikethrough'))));
		dt(H, {
			placement: 'top',
			get content() {
				return y(x);
			},
			children: (k, M) => {
				var T = oC(),
					_ = Q(T);
				($S(_, {}),
					G(T),
					ge(
						(C) =>
							Le(
								T,
								1,
								`${C ?? ''} hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-1.5 transition-all`
							),
						[
							() => (
								$(i()),
								L(() => {
									var C;
									return (C = i()) != null && C.isActive('strike')
										? 'bg-gray-50 dark:bg-gray-700'
										: '';
								})
							)
						]
					),
					Ee('click', T, () => {
						var C;
						return (C = i()) == null ? void 0 : C.chain().focus().toggleStrike().run();
					}),
					K(k, T));
			},
			$$slots: { default: !0 }
		});
	}
	var E = Oe(H, 2);
	{
		let x = ut(() => (n(), L(() => n().t('Code Block'))));
		dt(E, {
			placement: 'top',
			get content() {
				return y(x);
			},
			children: (k, M) => {
				var T = iC(),
					_ = Q(T);
				(CS(_, {}),
					G(T),
					ge(
						(C) =>
							Le(
								T,
								1,
								`${C ?? ''} hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-1.5 transition-all`
							),
						[
							() => (
								$(i()),
								L(() => {
									var C;
									return (C = i()) != null && C.isActive('codeBlock')
										? 'bg-gray-50 dark:bg-gray-700'
										: '';
								})
							)
						]
					),
					Ee('click', T, () => {
						var C;
						return (C = i()) == null ? void 0 : C.chain().focus().toggleCodeBlock().run();
					}),
					K(k, T));
			},
			$$slots: { default: !0 }
		});
	}
	(G(l), K(t, l), tn(), s());
}
const Ju = {},
	aC = 'hljs-';
function cC(t) {
	const e = Gu.newInstance();
	return (
		t && o(t),
		{
			highlight: n,
			highlightAuto: r,
			listLanguages: s,
			register: o,
			registerAlias: i,
			registered: l
		}
	);
	function n(a, c, u) {
		const d = u || Ju,
			f = typeof d.prefix == 'string' ? d.prefix : aC;
		if (!e.getLanguage(a)) throw new Error('Unknown language: `' + a + '` is not registered');
		e.configure({ __emitter: uC, classPrefix: f });
		const h = e.highlight(c, { ignoreIllegals: !0, language: a });
		if (h.errorRaised)
			throw new Error('Could not highlight with `Highlight.js`', { cause: h.errorRaised });
		const p = h._emitter.root,
			m = p.data;
		return ((m.language = h.language), (m.relevance = h.relevance), p);
	}
	function r(a, c) {
		const d = (c || Ju).subset || s();
		let f = -1,
			h = 0,
			p;
		for (; ++f < d.length; ) {
			const m = d[f];
			if (!e.getLanguage(m)) continue;
			const g = n(m, a, c);
			g.data &&
				g.data.relevance !== void 0 &&
				g.data.relevance > h &&
				((h = g.data.relevance), (p = g));
		}
		return p || { type: 'root', children: [], data: { language: void 0, relevance: h } };
	}
	function s() {
		return e.listLanguages();
	}
	function o(a, c) {
		if (typeof a == 'string') e.registerLanguage(a, c);
		else {
			let u;
			for (u in a) Object.hasOwn(a, u) && e.registerLanguage(u, a[u]);
		}
	}
	function i(a, c) {
		if (typeof a == 'string')
			e.registerAliases(typeof c == 'string' ? c : [...c], { languageName: a });
		else {
			let u;
			for (u in a)
				if (Object.hasOwn(a, u)) {
					const d = a[u];
					e.registerAliases(typeof d == 'string' ? d : [...d], { languageName: u });
				}
		}
	}
	function l(a) {
		return !!e.getLanguage(a);
	}
}
class uC {
	constructor(e) {
		((this.options = e),
			(this.root = { type: 'root', children: [], data: { language: void 0, relevance: 0 } }),
			(this.stack = [this.root]));
	}
	addText(e) {
		if (e === '') return;
		const n = this.stack[this.stack.length - 1],
			r = n.children[n.children.length - 1];
		r && r.type === 'text' ? (r.value += e) : n.children.push({ type: 'text', value: e });
	}
	startScope(e) {
		this.openNode(String(e));
	}
	endScope() {
		this.closeNode();
	}
	__addSublanguage(e, n) {
		const r = this.stack[this.stack.length - 1],
			s = e.root.children;
		n
			? r.children.push({
					type: 'element',
					tagName: 'span',
					properties: { className: [n] },
					children: s
				})
			: r.children.push(...s);
	}
	openNode(e) {
		const n = this,
			r = e.split('.').map(function (i, l) {
				return l ? i + '_'.repeat(l) : n.options.classPrefix + i;
			}),
			s = this.stack[this.stack.length - 1],
			o = { type: 'element', tagName: 'span', properties: { className: r }, children: [] };
		(s.children.push(o), this.stack.push(o));
	}
	closeNode() {
		this.stack.pop();
	}
	finalize() {}
	toHTML() {
		return '';
	}
}
const dn = new _e('listPointerDrag');
function dC(t = {}) {
	const {
			itemTypeNames: e = ['listItem', 'taskItem', 'list_item'],
			getEditor: n = null,
			handleTitle: r = 'Drag to move',
			handleInnerHTML: s = '⋮⋮',
			classItemWithHandle: o = 'pm-li--with-handle',
			classHandle: i = 'pm-list-drag-handle',
			classDropBefore: l = 'pm-li-drop-before',
			classDropAfter: a = 'pm-li-drop-after',
			classDropInto: c = 'pm-li-drop-into',
			classDropOutdent: u = 'pm-li-drop-outdent',
			classDraggingGhost: d = 'pm-li-ghost',
			dragThresholdPx: f = 2,
			intoThresholdX: h = 28,
			outdentThresholdX: p = 10
		} = t,
		m = new Set(e),
		g = (w) => w && m.has(w.type.name),
		b = new Set(['bulletList', 'orderedList', 'taskList', 'bullet_list', 'ordered_list']),
		S = (w) => w && b.has(w.type.name);
	function O(w) {
		var v;
		const A = (v = w == null ? void 0 : w.type) == null ? void 0 : v.name;
		return A
			? A === 'taskList'
				? m.has('taskItem')
					? 'taskItem'
					: null
				: A === 'orderedList' || A === 'bulletList'
					? m.has('listItem')
						? 'listItem'
						: m.has('list_item')
							? 'list_item'
							: null
					: A === 'ordered_list' || A === 'bullet_list'
						? m.has('list_item')
							? 'list_item'
							: m.has('listItem')
								? 'listItem'
								: null
						: null
			: null;
	}
	function H(w, A) {
		const v = w.resolve(Math.max(1, Math.min(A, w.content.size - 1)));
		for (let D = v.depth; D >= 0; D--) {
			const I = v.node(D);
			if (S(I)) {
				const q = v.before(D);
				return { node: I, depth: D, start: q, end: q + I.nodeSize };
			}
		}
		return null;
	}
	function E(w, A, v) {
		var Ae, ke;
		const D = w.schema,
			I = v,
			q = typeof I == 'string' ? I : O(I);
		if (!q) return A;
		const J = D.nodes[q];
		if (!J) return A;
		const xe = D.nodes[I.type.name];
		if (!xe) return A;
		const Te = (te, de) => {
				var Re;
				if ((te.type.name, (Re = de == null ? void 0 : de.type) == null || Re.name, S(te))) {
					const Ce = [];
					return (
						te.content.forEach((Be) => {
							Ce.push(E(w, Be, de));
						}),
						xe.create(te.attrs, z.from(Ce), te.marks)
					);
				}
				if (te.content && te.content.size > 0) {
					const Ce = [];
					return (
						te.content.forEach((Be) => {
							Ce.push(Te(Be, de));
						}),
						te.type.create(te.attrs, z.from(Ce), te.marks)
					);
				}
				return te;
			},
			ue = [];
		A.content.forEach((te) => {
			ue.push(Te(te, I));
		});
		const Me = {};
		if (J.attrs)
			for (const te in J.attrs)
				if (Object.prototype.hasOwnProperty.call(A.attrs || {}, te)) Me[te] = A.attrs[te];
				else {
					const de = J.attrs[te];
					Me[te] = typeof (de == null ? void 0 : de.default) < 'u' ? de.default : null;
				}
		if (q !== A.type.name) {
			const te = (Ae = J.spec) == null ? void 0 : Ae.marks,
				de = te ? A.marks.filter((Re) => te.includes(Re.type.name)) : [];
			return J.create(Me, z.from(ue), de);
		}
		try {
			return J.create(Me, z.from(ue), A.marks);
		} catch {
			const te = D.nodes.paragraph;
			if (te) {
				const de =
					((ke = A.content.firstChild) == null ? void 0 : ke.type) === te
						? z.from(ue)
						: z.from([te.create(null, ue)]);
				return J.create(Me, de, A.marks);
			}
		}
		return J.create(Me, z.from(ue), A.marks);
	}
	function x(w) {
		const A = [];
		return (
			w.descendants((v, D) => {
				g(v) &&
					(A.push(tt.node(D, D + v.nodeSize, { class: o })),
					A.push(
						tt.widget(
							D + 1,
							(I, q) => {
								const J = document.createElement('span');
								return (
									(J.className = i),
									J.setAttribute('title', r),
									J.setAttribute('role', 'button'),
									J.setAttribute('aria-label', 'Drag list item'),
									(J.contentEditable = 'false'),
									(J.innerHTML = s),
									(J.pmGetPos = q),
									J
								);
							},
							{ side: -1, ignoreSelection: !0 }
						)
					));
			}),
			Ve.create(w, A)
		);
	}
	function k(w) {
		for (let A = w.depth; A > 0; A--) {
			const v = w.node(A);
			if (g(v)) {
				const D = w.before(A);
				return { depth: A, node: v, start: D, end: D + v.nodeSize };
			}
		}
		return null;
	}
	function M(w, A, v) {
		const D = w.posAtCoords({ left: A, top: v });
		if (!D) return null;
		const I = w.state.doc.resolve(D.pos),
			q = k(I);
		if (!q) return null;
		const J = w.nodeDOM(q.start);
		if (!(J instanceof Element)) return null;
		const xe = J.getBoundingClientRect(),
			ue = getComputedStyle(J).direction === 'rtl' ? xe.right - A : A - xe.left,
			Me = v - xe.top < xe.height / 2,
			Ae = ue <= p ? 'outdent' : ue >= h ? 'into' : Me ? 'before' : 'after';
		return { ...q, dom: J, mode: Ae };
	}
	const T = (w) => ({ decorations: x(w.doc), dragging: null, dropTarget: null }),
		_ = (w, A) => {
			let v = w.docChanged ? x(w.doc) : A.decorations.map(w.mapping, w.doc),
				D = { ...A, decorations: v };
			const I = w.getMeta(dn);
			return (
				I &&
					(I.type === 'set-drag' && (D = { ...D, dragging: I.dragging }),
					I.type === 'set-drop' && (D = { ...D, dropTarget: I.drop }),
					I.type === 'clear' && (D = { ...D, dragging: null, dropTarget: null })),
				D
			);
		},
		C = (w) => {
			const A = dn.getState(w);
			if (!A) return null;
			let v = A.decorations;
			if (A.dropTarget) {
				const { start: D, end: I, mode: q } = A.dropTarget,
					J = q === 'before' ? l : q === 'after' ? a : q === 'into' ? c : u;
				v = v.add(w.doc, [tt.node(D, I, { class: J })]);
			}
			return v;
		},
		ce = (w, A) => w.dispatch(w.state.tr.setMeta(dn, { type: 'set-drag', dragging: A })),
		W = (w, A) => w.dispatch(w.state.tr.setMeta(dn, { type: 'set-drop', drop: A })),
		ee = (w) => w.dispatch(w.state.tr.setMeta(dn, { type: 'clear' }));
	function U(w, A, v) {
		const { state: D, dispatch: I } = w,
			{ doc: q } = D,
			J = q.nodeAt(A);
		if (!J || !g(J)) return { ok: !1 };
		if (v >= A && v <= A + J.nodeSize) return { ok: !0, newStart: A };
		const xe = q.resolve(A + 1);
		let Te = -1;
		for (let be = xe.depth; be > 0; be--)
			if (xe.node(be) === J) {
				Te = be;
				break;
			}
		if (Te < 0) return { ok: !1 };
		const ue = Te - 1,
			Me = xe.node(ue),
			Ae = xe.before(ue),
			ke = Me.childCount === 1 ? Ae : A,
			te = Me.childCount === 1 ? Ae + Me.nodeSize : A + J.nodeSize;
		let de = D.tr.delete(ke, te);
		const Re = de.mapping.map(v, 1),
			Ce = H(de.doc, Re),
			Be = Ce ? E(D, J, Ce.node) : J;
		try {
			de = de.insert(Re, Be);
		} catch (be) {
			const ye = D.schema,
				Ie =
					Me.type.name === 'taskList'
						? ye.nodes.taskList
							? 'taskList'
							: null
						: Me.type.name === 'orderedList' || Me.type.name === 'ordered_list'
							? ye.nodes.orderedList
								? 'orderedList'
								: ye.nodes.ordered_list
									? 'ordered_list'
									: null
							: ye.nodes.bulletList
								? 'bulletList'
								: ye.nodes.bullet_list
									? 'bullet_list'
									: null;
			if (Ie) {
				const Qe = ye.nodes[Ie];
				if (Qe) {
					const Xe = Qe.create(null, E(D, J, Qe));
					de = de.insert(Re, Xe);
				} else return { ok: !1 };
			} else return { ok: !1 };
		}
		return (I(de.scrollIntoView()), { ok: !0, newStart: Re });
	}
	function j(w, A) {
		var q;
		const v = document.createElement('div');
		v.className = d;
		const D = w.nodeDOM(A),
			I = D instanceof Element ? D.getBoundingClientRect() : null;
		return (
			I &&
				((v.style.position = 'fixed'),
				(v.style.left = I.left + 'px'),
				(v.style.top = I.top + 'px'),
				(v.style.width = I.width + 'px'),
				(v.style.pointerEvents = 'none'),
				(v.style.opacity = '0.75'),
				(v.textContent = ((q = D.textContent) == null ? void 0 : q.trim().slice(0, 80)) || '…')),
			document.body.appendChild(v),
			v
		);
	}
	const Y = (w, A, v) => {
		w && (w.style.transform = `translate(${Math.round(A)}px, ${Math.round(v)}px)`);
	};
	return new ze({
		key: dn,
		state: { init: (w, A) => T(A), apply: _ },
		props: {
			decorations: C,
			handleDOMEvents: {
				mousedown(w, A) {
					var Ae;
					const v = A.target,
						D = (Ae = v.closest) == null ? void 0 : Ae.call(v, `.${i}`);
					if (!D) return !1;
					A.preventDefault();
					const I = D.pmGetPos;
					if (typeof I != 'function') return !0;
					const J = I() - 1;
					try {
						w.dispatch(w.state.tr.setSelection(fe.create(w.state.doc, J)));
					} catch {}
					const xe = { x: A.clientX, y: A.clientY },
						Te = j(w, J);
					ce(w, { fromStart: J, startMouse: xe, ghostEl: Te, active: !1 });
					const ue = (ke) => {
							var ye;
							const te = dn.getState(w.state);
							if (!(te != null && te.dragging)) return;
							const de = ke.clientX - te.dragging.startMouse.x,
								Re = ke.clientY - te.dragging.startMouse.y;
							(!te.dragging.active &&
								Math.hypot(de, Re) > f &&
								ce(w, { ...te.dragging, active: !0 }),
								Y(te.dragging.ghostEl, de, Re));
							const Ce = M(w, ke.clientX, ke.clientY);
							if (!Ce) return W(w, null);
							const Be = Ce.mode === 'before' ? Ce.start : (Ce.mode === 'after', Ce.end),
								be = (ye = dn.getState(w.state)) == null ? void 0 : ye.dropTarget;
							(!be || be.start !== Ce.start || be.end !== Ce.end || be.mode !== Ce.mode) &&
								W(w, { start: Ce.start, end: Ce.end, mode: Ce.mode, toPos: Be });
						},
						Me = () => {
							var de, Re, Ce;
							(window.removeEventListener('mousemove', ue, !0),
								window.removeEventListener('mouseup', Me, !0));
							const ke = dn.getState(w.state);
							(de = ke == null ? void 0 : ke.dragging) != null &&
								de.ghostEl &&
								ke.dragging.ghostEl.remove();
							const te = (Be, be) => {
								const ye = Be.nodeAt(be);
								if (ye && g(ye)) return ye.type.name;
								const Ie = Be.resolve(Math.min(be + 1, Be.content.size));
								for (let Xe = Ie.depth; Xe > 0; Xe--) {
									const qt = Ie.node(Xe);
									if (g(qt)) return qt.type.name;
								}
								const Qe = ['taskItem', 'listItem', 'list_item'];
								for (const Xe of Qe) if (m.has(Xe)) return Xe;
								return Array.from(m)[0];
							};
							if (ke != null && ke.dragging && ke != null && ke.dropTarget && ke.dragging.active) {
								const { fromStart: Be } = ke.dragging,
									{ toPos: be, mode: ye } = ke.dropTarget,
									Ie = U(w, Be, be);
								if (Ie.ok && typeof Ie.newStart == 'number' && n) {
									const Qe = n();
									if (Qe != null && Qe.commands) {
										Qe.commands.setNodeSelection(Ie.newStart);
										const Xe = te(w.state.doc, Ie.newStart),
											qt = Qe.chain().focus();
										ye === 'into' && (Ce = (Re = Qe.can()).sinkListItem) != null && Ce.call(Re, Xe)
											? qt.sinkListItem(Xe).run()
											: qt.run();
									}
								}
							}
							ee(w);
						};
					return (
						window.addEventListener('mousemove', ue, !0),
						window.addEventListener('mouseup', Me, !0),
						!0
					);
				},
				keydown(w, A) {
					var v;
					if (A.key === 'Escape') {
						const D = dn.getState(w.state);
						return (
							(v = D == null ? void 0 : D.dragging) != null &&
								v.ghostEl &&
								D.dragging.ghostEl.remove(),
							ee(w),
							!0
						);
					}
					return !1;
				}
			}
		}
	});
}
var fC = ae(
		'<div id="bubble-menu" class="p-0" style="visibility: hidden; opacity: 0; position: absolute; z-index: 9999;"><!></div> <div id="floating-menu" class="p-0" style="visibility: hidden; opacity: 0; position: absolute; z-index: 9999;"><!></div>',
		1
	),
	hC = ae('<!> <div dir="auto"></div>', 1);
function ZT(t, e) {
	en(e, !1);
	const n = () => yt(i, '$i18n', r),
		[r, s] = ln();
	Kr.use({
		breaks: !0,
		gfm: !0,
		renderer: {
			list(N, R, Z) {
				if (N.includes('data-checked=')) return `<ul data-type="taskList">${N}</ul>`;
				const ne = R ? 'ol' : 'ul',
					re = R && Z !== 1 ? ` start="${Z}"` : '';
				return `<${ne}${re}>${N}</${ne}>`;
			},
			listitem(N, R, Z) {
				return R
					? `<li data-type="taskItem" data-checked="${Z ? 'true' : 'false'}">${N}</li>`
					: `<li>${N}</li>`;
			}
		}
	});
	const o = new go({ codeBlockStyle: 'fenced', headingStyle: 'atx' });
	((o.escape = (N) => N),
		o.addRule('singleNewlineParagraphs', {
			filter: 'p',
			replacement(N) {
				return (
					`
` +
					N +
					`
`
				);
			}
		}),
		o.use(Eg),
		o.addRule('tableHeaders', {
			filter: 'th',
			replacement(N, R) {
				return N;
			}
		}),
		o.addRule('tables', {
			filter: 'table',
			replacement(N, R) {
				const Z = Array.from(R.querySelectorAll('tr'));
				if (Z.length === 0) return N;
				let se = `
`;
				return (
					Z.forEach((ne, re) => {
						const me = Array.from(ne.querySelectorAll('th, td')),
							oe = me.map((we) => {
								let Pe = o.turndown(we.innerHTML).trim();
								return ((Pe = Pe.replace(/^\n+|\n+$/g, '')), Pe);
							});
						if (
							((se +=
								'| ' +
								oe.join(' | ') +
								` |
`),
							re === 0)
						) {
							const we = me.map(() => '---').join(' | ');
							se +=
								'| ' +
								we +
								` |
`;
						}
					}),
					se +
						`
`
				);
			}
		}),
		o.addRule('taskListItems', {
			filter: (N) =>
				N.nodeName === 'LI' &&
				(N.getAttribute('data-checked') === 'true' || N.getAttribute('data-checked') === 'false'),
			replacement(N, R) {
				const Z = R.getAttribute('data-checked') === 'true';
				return (
					(N = N.replace(/^\s+/, '')),
					`- [${Z ? 'x' : ' '}] ${N}
`
				);
			}
		}),
		o.addRule('mentions', {
			filter: (N) => N.nodeName === 'SPAN' && N.getAttribute('data-type') === 'mention',
			replacement: (N, R) => {
				const Z = R.getAttribute('data-id') || '';
				return `<${R.getAttribute('data-mention-suggestion-char') || '@'}${Z}>`;
			}
		}));
	const i = Rn('i18n'),
		l = Bp(),
		a = new RegExp('(?<=\\s|^)`([^`]+)`(?!`)$'),
		c = Bv.extend({
			addInputRules() {
				return [Yn({ find: a, type: this.type })];
			}
		});
	let u = P(e, 'oncompositionstart', 8, (N) => {}),
		d = P(e, 'oncompositionend', 8, (N) => {}),
		f = P(e, 'onChange', 8, (N) => {});
	const h = cC(ja.listLanguages().reduce((N, R) => ((N[R] = () => ja.getLanguage(R)), N), {}));
	let p = P(e, 'editor', 12, null),
		m = P(e, 'socket', 8, null),
		g = P(e, 'user', 8, null),
		b = P(e, 'files', 24, () => []),
		S = P(e, 'documentId', 8, ''),
		O = P(e, 'className', 8, 'input-prose min-h-fit h-full'),
		H = P(e, 'placeholder', 24, () => n().t('Type here...')),
		E = We(H());
	const x = () => {
		var N;
		(le(E, H()), p() && ((N = p()) == null || N.view.dispatch(p().state.tr)));
	};
	let k = P(e, 'richText', 8, !0),
		M = P(e, 'dragHandle', 8, !1),
		T = P(e, 'link', 8, !1),
		_ = P(e, 'image', 8, !1),
		C = P(e, 'fileHandler', 8, !1),
		ce = P(e, 'suggestions', 8, null),
		W = P(e, 'onFileDrop', 8, (N, R, Z) => {
			R.forEach((se) => {
				const ne = new FileReader();
				(ne.readAsDataURL(se),
					(ne.onload = () => {
						N.chain()
							.insertContentAt(Z, { type: 'image', attrs: { src: ne.result } })
							.focus()
							.run();
					}));
			});
		}),
		ee = P(e, 'onFilePaste', 8, (N, R, Z) => {
			R.forEach((se) => {
				if (Z) return !1;
				const ne = new FileReader();
				(ne.readAsDataURL(se),
					(ne.onload = () => {
						N.chain()
							.insertContentAt(N.state.selection.anchor, {
								type: 'image',
								attrs: { src: ne.result }
							})
							.focus()
							.run();
					}));
			});
		}),
		U = P(e, 'onSelectionUpdate', 8, (N) => {}),
		j = P(e, 'id', 8, ''),
		Y = P(e, 'value', 12, ''),
		w = P(e, 'html', 8, ''),
		A = P(e, 'json', 8, !1),
		v = P(e, 'raw', 8, !1),
		D = P(e, 'editable', 8, !0),
		I = P(e, 'collaboration', 8, !1),
		q = P(e, 'showFormattingToolbar', 8, !0),
		J = P(e, 'preserveBreaks', 8, !1),
		xe = P(e, 'generateAutoCompletion', 8, async () => null),
		Te = P(e, 'autocomplete', 8, !1),
		ue = P(e, 'messageInput', 8, !1),
		Me = P(e, 'shiftEnter', 8, !1),
		Ae = P(e, 'largeTextAsFile', 8, !1),
		ke = P(e, 'insertPromptAsRichText', 8, !1),
		te = P(e, 'floatingMenuPlacement', 8, 'bottom-start'),
		de = null,
		Re = '',
		Ce = '',
		Be = '',
		be = null,
		ye = We(null),
		Ie = We(null),
		Qe = We(null);
	const Xe = () => {
		if (!p()) return '';
		const { state: N } = p().view,
			R = N.selection.from,
			se = N.doc.resolve(R),
			ne = se.parent;
		se.start();
		const re = ne.textContent,
			me = se.parentOffset;
		let oe = me,
			we = me;
		for (; oe > 0 && !/\s/.test(re[oe - 1]); ) oe--;
		for (; we < re.length && !/\s/.test(re[we]); ) we++;
		return re.slice(oe, we);
	};
	function qt(N, R) {
		const Z = N.resolve(R),
			se = Z.parent,
			ne = Z.start(),
			re = se.textContent,
			me = Z.parentOffset;
		let oe = me,
			we = me;
		for (; oe > 0 && !/\s/.test(re[oe - 1]); ) oe--;
		for (; we < re.length && !/\s/.test(re[we]); ) we++;
		return { start: ne + oe, end: ne + we };
	}
	const Cr = async (N) => {
			const { state: R, dispatch: Z } = p().view,
				{ selection: se } = R,
				ne = se.from,
				{ start: re, end: me } = qt(R.doc, ne);
			let oe = R.tr;
			if (ke()) {
				const we = Up.sanitize(Kr.parse(N, { breaks: !0, gfm: !0 }).trim()),
					Pe = document.createElement('div');
				Pe.innerHTML = we;
				const $t = On.fromSchema(R.schema).parse(Pe).content;
				let nt = [];
				($t.forEach((kn) => {
					kn.type.name === 'paragraph' ? nt.push(...kn.content.content) : nt.push(kn);
				}),
					(oe = oe.replaceWith(re, me, nt)));
				const un = re + nt.reduce((kn, ki) => kn + ki.nodeSize, 0);
				oe = oe.setSelection(ve.near(oe.doc.resolve(un)));
			} else if (
				N.includes(`
`)
			) {
				const Pe = N.split(
					`
`
				).map((nt, un) =>
					un === 0
						? R.schema.text(nt || [])
						: R.schema.nodes.paragraph.create({}, nt ? R.schema.text(nt) : void 0)
				);
				oe = oe.replaceWith(re, me, Pe);
				let kt,
					$t = re;
				for (let nt = 0; nt < Pe.length; nt++) $t += Pe[nt].nodeSize;
				((kt = $t), (oe = oe.setSelection(pe.near(oe.doc.resolve(kt)))));
			} else
				((oe = oe.replaceWith(re, me, N !== '' ? R.schema.text(N) : [])),
					(oe = oe.setSelection(R.selection.constructor.near(oe.doc.resolve(re + N.length + 1)))));
			(Z(oe), await Vl());
		},
		Bt = (N) => {
			if (!(!p() || !p().view)) {
				if (N === '') p().commands.clearContent();
				else {
					const Z = N.split(
						`
`
					)
						.map((se) =>
							se
								? `<p>${se
										.replace(/&/g, '&amp;')
										.replace(/</g, '&lt;')
										.replace(/>/g, '&gt;')
										.replace(/&lt;([@#$])([\w.\-:/]+)(?:\|([^&]*?))?&gt;/g, (me, oe, we, Pe) => {
											const kt = Pe != null && Pe.length ? Pe : we;
											return `<span class="mention" data-type="mention" data-id="${we}" data-label="${kt}" data-mention-suggestion-char="${oe}">${oe}${kt}</span>`;
										})}</p>`
								: '<p></p>'
						)
						.join('');
					p().commands.setContent(Z);
				}
				(F(p().view.state, p().view.dispatch), he());
			}
		},
		cn = (N) => {
			if (!p() || !p().view) return;
			const { state: R, view: Z } = p(),
				{ schema: se, tr: ne } = R,
				re = Kr.parse(N);
			(p().commands.insertContent(re), he());
		},
		vi = (N, R) => {
			if (
				!R.includes(`
`)
			)
				return N.schema.text(R);
			const Z = [];
			return (
				R.split(
					`
`
				).forEach((se, ne) => {
					(ne > 0 && Z.push(N.schema.nodes.hardBreak.create()), se && Z.push(N.schema.text(se)));
				}),
				Z
			);
		},
		Vs = (N) => {
			if (!p() || !p().view) return;
			const { state: R, view: Z } = p(),
				{ doc: se } = R;
			let ne = R.tr;
			const re = [];
			(se.descendants((me, oe) => {
				if (me.isText && me.text) {
					const we = me.text,
						Pe = we.replace(/{{\s*([^|}]+)(?:\|[^}]*)?\s*}}/g, (kt, $t) => {
							const nt = $t.trim();
							return N.hasOwnProperty(nt) ? String(N[nt]) : kt;
						});
					Pe !== we && re.push({ from: oe, to: oe + we.length, text: Pe });
				}
			}),
				re.reverse().forEach(({ from: me, to: oe, text: we }) => {
					ne = ne.replaceWith(me, oe, we !== '' ? vi(R, we) : []);
				}),
				re.length > 0 && Z.dispatch(ne));
		},
		he = () => {
			if (p() && p().view) {
				if (p().isDestroyed) return;
				try {
					(p().view.focus(), p().view.dispatch(p().view.state.tr.scrollIntoView()));
				} catch (N) {
					console.warn('Error focusing editor', N);
				}
			}
		};
	function B(N, R = 0) {
		const Z = [{ start: '{{', end: '}}' }];
		let se = null;
		return (
			N.nodesBetween(R, N.content.size, (ne, re) => {
				if (se) return !1;
				if (ne.isText) {
					const me = ne.text;
					let oe = Math.max(0, R - re);
					for (; oe < me.length; ) {
						for (const we of Z)
							if (me.startsWith(we.start, oe)) {
								const Pe = me.indexOf(we.end, oe + we.start.length);
								if (Pe !== -1) return ((se = { from: re + oe, to: re + Pe + we.end.length }), !1);
							}
						oe++;
					}
				}
			}),
			se
		);
	}
	function F(N, R) {
		const { doc: Z, selection: se } = N,
			ne = se.to;
		let re = B(Z, ne);
		if ((re || (re = B(Z, 0)), re)) {
			if (R) {
				const me = N.tr.setSelection(pe.create(Z, re.from, re.to));
				(R(me), R(me.scrollIntoView().setMeta('preventScroll', !0)));
			}
			return !0;
		}
		return !1;
	}
	const ct = (N) => {
			p().commands.setContent(N);
		},
		qe = () => {
			Y() !== '' &&
				setTimeout(() => {
					F(p().view.state, p().view.dispatch) || p().commands.focus('end');
				}, 0);
		},
		He = Ue.create({
			name: 'selectionDecoration',
			addProseMirrorPlugins() {
				return [
					new ze({
						key: new _e('selection'),
						props: {
							decorations: (N) => {
								const { selection: R } = N,
									{ focused: Z } = this.editor;
								return Z || R.empty
									? null
									: Ve.create(N.doc, [tt.inline(R.from, R.to, { class: 'editor-selection' })]);
							}
						}
					})
				];
			}
		}),
		Ke = Ue.create({
			name: 'listItemDragHandle',
			addProseMirrorPlugins() {
				return [dC({ itemTypeNames: ['listItem', 'taskItem'], getEditor: () => this.editor })];
			}
		});
	(Ls(async () => {
		if (((de = Y()), A())) de || (de = w() ? w() : null);
		else if (
			(J() &&
				o.addRule('preserveBreaks', {
					filter: 'br',
					replacement(N) {
						return '<br/>';
					}
				}),
			!v())
		) {
			async function N(R, Z = 3, se = 100) {
				try {
					return Kr.parse(
						R.replaceAll(
							`
<br/>`,
							'<br/>'
						),
						{ breaks: !1 }
					);
				} catch {
					return Z <= 1 ? R : (await new Promise((re) => setTimeout(re, se)), N(R, Z - 1, se));
				}
			}
			de = await N(Y());
		}
		if (I() && S() && m() && g()) {
			const { SocketIOCollaborationProvider: N } = await jp(
				async () => {
					const { SocketIOCollaborationProvider: R } = await import('./DPFs2k7n.js');
					return { SocketIOCollaborationProvider: R };
				},
				__vite__mapDeps([0, 1, 2]),
				import.meta.url
			);
			be = new N(S(), m(), g(), de);
		}
		(p(
			new bv({
				element: y(Qe),
				extensions: [
					fx.configure({
						link: T(),
						code: !1,
						...(k()
							? { codeBlock: !1, bulletList: !1, orderedList: !1, listItem: !1, listKeymap: !1 }
							: {}),
						...(k() ? {} : { strike: !1 })
					}),
					c,
					...(M() ? [Ke] : []),
					ax.configure({ placeholder: () => y(E), showOnlyWhenEditable: !1 }),
					He,
					...(k()
						? [
								pS.configure({ lowlight: h }),
								lS,
								Dw.configure({ table: { resizable: !0 } }),
								Dk.configure({ taskItem: { nested: !0 } })
							]
						: []),
					...(ce()
						? [kS.configure({ HTMLAttributes: { class: 'mention' }, suggestions: ce() })]
						: []),
					sx.configure({}),
					...(_() ? [Lw] : []),
					...(C() ? [Bw.configure({ onDrop: W(), onPaste: ee() })] : []),
					...(Te()
						? [
								Ev.configure({
									generateCompletion: async (N) => {
										if (N.trim().length === 0) return null;
										const R = await xe()(N).catch(() => null);
										return !R || R.trim().length === 0 ? null : R;
									}
								})
							]
						: []),
					...(k() && q()
						? [
								pw.configure({
									element: y(Ie),
									appendTo: () => document.body,
									options: { strategy: 'fixed', placement: 'top', offset: 2 },
									shouldShow: ({ editor: N, view: R, state: Z, oldState: se, from: ne, to: re }) =>
										!N || !N.view || N.isDestroyed ? !1 : R.hasFocus() && ne !== re
								}),
								bw.configure({
									element: y(ye),
									appendTo: () => document.body,
									options: { strategy: 'fixed', placement: te(), offset: 4 },
									shouldShow: ({ editor: N, view: R, state: Z, oldState: se }) => {
										if (!N || !N.view || N.isDestroyed) return !1;
										const { selection: ne } = Z,
											{ $anchor: re, empty: me } = ne,
											oe = re.depth === 1,
											we =
												re.parent.isTextblock &&
												!re.parent.type.spec.code &&
												!re.parent.textContent &&
												re.parent.childCount === 0;
										return R.hasFocus() && me && oe && we && N.isEditable;
									}
								})
							]
						: []),
					...(I() && be ? [be.getEditorExtension()] : [])
				],
				content: I() ? void 0 : de,
				autofocus: !!ue(),
				onTransaction: () => {
					(p(p()),
						p() &&
							((Re = p().getHTML()),
							(Ce = p().getJSON()),
							k()
								? (Be = o
										.turndown(
											Re.replace(/<p><\/p>/g, '<br/>').replace(/ {2,}/g, (N) =>
												N.replace(/ /g, ' ')
											)
										)
										.replace(/\u00a0/g, ' '))
								: (Be = o
										.turndown(
											Re.replace(/<p><\/p>/g, '<br/>')
												.replace(/ {2,}/g, (N) => N.replace(/ /g, ' '))
												.replace(/\t/g, '    ')
										)
										.replace(/\u00a0/g, ' ')),
							f()({ html: Re, json: Ce, md: Be }),
							A()
								? Y(Ce)
								: v()
									? Y(Re)
									: (J() || (Be = Be.replace(/<br\/>/g, '')),
										Y() !== Be &&
											(Y(Be),
											p().isActive('paragraph') && Y() === '' && p().commands.clearContent()))));
				},
				editorProps: {
					attributes: { id: j() },
					handleDrop: (N, R) => {
						var se;
						const Z = (se = R.dataTransfer) == null ? void 0 : se.getData('text/plain');
						if (Z)
							try {
								const ne = JSON.parse(Z);
								if (ne.type === 'chat' && ne.id) return !0;
							} catch {}
						return !1;
					},
					handlePaste: (N, R) => {
						var Z;
						if (!k()) {
							R.preventDefault();
							const { state: se, dispatch: ne } = N,
								me = (
									((Z = R.clipboardData) == null ? void 0 : Z.getData('text/plain')) ?? ''
								).replace(
									/\r\n/g,
									`
`
								).split(`
`),
								oe = [];
							me.forEach((Pe, kt) => {
								(kt > 0 && oe.push(se.schema.nodes.hardBreak.create()),
									Pe.length > 0 && oe.push(se.schema.text(Pe)));
							});
							const we = z.fromArray(oe);
							return (ne(se.tr.replaceSelectionWith(we, !1).scrollIntoView()), !0);
						}
						return !1;
					},
					handleDOMEvents: {
						compositionstart: (N, R) => (u()(R), !1),
						compositionend: (N, R) => (d()(R), !1),
						beforeinput: (N, R) => {
							var se;
							if (
								/Android/i.test(navigator.userAgent) &&
								R.inputType === 'insertText' &&
								(se = R.data) != null &&
								se.includes(`
`)
							) {
								R.preventDefault();
								const { state: ne, dispatch: re } = N,
									{ from: me, to: oe } = ne.selection,
									we = R.data.split(`
`),
									Pe = [];
								we.forEach(($t, nt) => {
									(nt > 0 && Pe.push(ne.schema.nodes.hardBreak.create()),
										$t.length > 0 && Pe.push(ne.schema.text($t)));
								});
								const kt = z.fromArray(Pe);
								return (re(ne.tr.replaceWith(me, oe, kt).scrollIntoView()), !0);
							}
							return !1;
						},
						focus: (N, R) => (l('focus', { event: R }), !1),
						keyup: (N, R) => (l('keyup', { event: R }), !1),
						keydown: (N, R) => {
							if (ue()) {
								let ne = function (re) {
									let me = se;
									for (; me; ) {
										if (re.includes(me.parent.type.name)) return !0;
										if (!me.depth) break;
										me = Z.doc.resolve(me.before());
									}
									return !1;
								};
								const { state: Z } = N,
									{ $head: se } = Z.selection;
								if (R.key === 'Tab') {
									if (ne(['codeBlock']))
										return (p().commands.insertContent('	'), R.preventDefault(), !0);
									if (F(N.state, N.dispatch)) return (R.preventDefault(), !0);
								}
								if (R.key === 'Enter') {
									const re = R.ctrlKey || R.metaKey,
										{ state: me } = N,
										{ $from: oe } = me.selection,
										we = oe.before(oe.depth),
										Pe = oe.after(oe.depth),
										kt = me.doc
											.textBetween(
												we,
												Pe,
												`
`,
												'\0'
											)
											.trim();
									if (R.shiftKey && !re)
										return kt.startsWith('```')
											? !1
											: (p().commands.enter(),
												N.dispatch(N.state.tr.scrollIntoView()),
												R.preventDefault(),
												!0);
									{
										const $t = ne(['codeBlock']),
											nt = ne(['listItem', 'bulletList', 'orderedList', 'taskList']),
											un = ne(['heading']);
										if ($t || nt || un) return !1;
										const kn = document.getElementById('suggestions-container');
										if (kt.startsWith('#') && kn) return !0;
									}
								}
								if (Me() && R.key === 'Enter' && R.shiftKey && !R.ctrlKey && !R.metaKey)
									return (
										p().commands.setHardBreak(),
										N.dispatch(N.state.tr.scrollIntoView()),
										R.preventDefault(),
										!0
									);
							}
							return (l('keydown', { event: R }), !1);
						},
						paste: (N, R) => {
							if (R.clipboardData) {
								const Z = R.clipboardData.getData('text/plain');
								if (Z) {
									if (Ae() && Z.length > Gp)
										return (l('paste', { event: R }), R.preventDefault(), !0);
									const me = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent),
										oe =
											typeof window < 'u' &&
											(/wv/i.test(navigator.userAgent) ||
												(navigator.userAgent.includes('Android') &&
													!navigator.userAgent.includes('Chrome')) ||
												(navigator.userAgent.includes('Safari') &&
													!navigator.userAgent.includes('Version')));
									if (
										me &&
										oe &&
										Z.includes(`
`)
									) {
										const { state: we, dispatch: Pe } = N,
											{ from: kt, to: $t } = we.selection,
											nt = Z.split(`
`),
											un = [];
										nt.forEach((Wa, Lp) => {
											(Lp > 0 && un.push(we.schema.nodes.hardBreak.create()),
												Wa.length > 0 && un.push(we.schema.text(Wa)));
										});
										const kn = z.fromArray(un),
											ki = we.tr.replaceWith(kt, $t, kn);
										return (Pe(ki.scrollIntoView()), R.preventDefault(), !0);
									}
									return !1;
								}
								const se = Array.from(R.clipboardData.files).some((me) =>
										me.type.startsWith('image/')
									),
									ne = Array.from(R.clipboardData.items).some((me) => me.type.startsWith('image/')),
									re = Array.from(R.clipboardData.files).length > 0;
								if (se || ne || re) return (l('paste', { event: R }), R.preventDefault(), !0);
							}
							return (N.dispatch(N.state.tr.scrollIntoView()), !1);
						},
						copy: (N, R) => {
							if (!R.clipboardData || k()) return !1;
							const { state: Z } = N,
								{ from: se, to: ne } = Z.selection,
								re = Z.doc.textBetween(
									se,
									ne,
									`
`
								),
								me = Z.doc.cut(se, ne),
								oe = p().schema ? p().getHTML(me) : p().getHTML();
							return (
								R.clipboardData.setData('text/plain', re),
								R.clipboardData.setData('text/html', oe),
								R.preventDefault(),
								!0
							);
						}
					}
				},
				onBeforeCreate: ({ editor: N }) => {
					b() && (N.storage.files = b());
				},
				onSelectionUpdate: U(),
				onBlur: () => {
					(y(Ie) &&
						(rt(Ie, (y(Ie).style.visibility = 'hidden')), rt(Ie, (y(Ie).style.opacity = '0'))),
						y(ye) &&
							(rt(ye, (y(ye).style.visibility = 'hidden')), rt(ye, (y(ye).style.opacity = '0'))));
				},
				enableInputRules: k(),
				enablePasteRules: k()
			})
		),
			be == null || be.setEditor(p(), () => ({ md: Be, html: Re, json: Ce })),
			ue() && qe());
	}),
		Rs(() => {
			(be && be.destroy(), p() && p().destroy());
		}));
	const Et = () => {
		if (!p()) return;
		const N = p().getJSON(),
			R = p().getHTML();
		let Z = o
			.turndown(
				(J() ? R.replace(/<p><\/p>/g, '<br/>') : R).replace(/ {2,}/g, (se) => se.replace(/ /g, ' '))
			)
			.replace(/\u00a0/g, ' ');
		if (Y() === '') {
			(p().commands.clearContent(), qe());
			return;
		}
		A()
			? qp(Y(), N) || (p().commands.setContent(Y()), qe())
			: v()
				? Y() !== R && (p().commands.setContent(Y()), qe())
				: Y() !== Z &&
					(p().commands.setContent(
						J()
							? Y()
							: Kr.parse(
									Y().replaceAll(
										`
<br/>`,
										'<br/>'
									),
									{ breaks: !1 }
								)
					),
					qe());
	};
	($e(
		() => ($(H()), y(E)),
		() => {
			H() !== y(E) && x();
		}
	),
		$e(
			() => ($(p()), $(D())),
			() => {
				p() && p().setOptions({ editable: D() });
			}
		),
		$e(
			() => ($(Y()), $(w()), $(p())),
			() => {
				Y() === null && w() !== null && p() && p().commands.setContent(w());
			}
		),
		$e(
			() => ($(Y()), $(p()), $(I())),
			() => {
				Y() !== null && p() && !I() && Et();
			}
		),
		yn());
	var vn = {
		getWordAtDocPos: Xe,
		replaceCommandWithText: Cr,
		setText: Bt,
		insertContent: cn,
		replaceVariables: Vs,
		focus: he,
		setContent: ct
	};
	nn();
	var qr = hC(),
		Va = Ht(qr);
	{
		var Dp = (N) => {
			var R = fC(),
				Z = Ht(R),
				se = Q(Z);
			(Ku(se, {
				get editor() {
					return p();
				}
			}),
				G(Z),
				rn(
					Z,
					(me) => le(Ie, me),
					() => y(Ie)
				));
			var ne = Oe(Z, 2),
				re = Q(ne);
			(Ku(re, {
				get editor() {
					return p();
				}
			}),
				G(ne),
				rn(
					ne,
					(me) => le(ye, me),
					() => y(ye)
				),
				K(N, R));
		};
		wt(Va, (N) => {
			k() && q() && N(Dp);
		});
	}
	var Ws = Oe(Va, 2);
	(rn(
		Ws,
		(N) => le(Qe, N),
		() => y(Qe)
	),
		ge(() => {
			(Le(Ws, 1, `relative w-full min-w-full ${O() ?? ''} ${D() ? '' : 'cursor-not-allowed'}`),
				(Ws.dir = Ws.dir));
		}),
		K(t, qr),
		st(e, 'getWordAtDocPos', Xe),
		st(e, 'replaceCommandWithText', Cr),
		st(e, 'setText', Bt),
		st(e, 'insertContent', cn),
		st(e, 'replaceVariables', Vs),
		st(e, 'focus', he),
		st(e, 'setContent', ct));
	var Rp = tn(vn);
	return (s(), Rp);
}
var pC = ae('<span class=" text-gray-500"> </span>'),
	mC = ae('<option disabled="" selected=""> </option>'),
	gC = ae('<option> </option>'),
	yC = ae(
		'<select class="w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100/30 dark:border-gray-850/30"><!><!></select>'
	),
	bC = ae(
		'<div class="flex items-center space-x-2"><div class="relative flex justify-center items-center gap-2"><input/> <label class="text-sm"> </label></div> <input type="text" class="flex-1 py-1 text-sm dark:text-gray-300 bg-transparent outline-hidden" autocomplete="off"/></div>'
	),
	vC = ae(
		'<div class="flex items-center space-x-2"><div class="relative size-6"><input/></div> <input type="text" class="flex-1 py-2 text-sm dark:text-gray-300 bg-transparent outline-hidden" autocomplete="off"/></div>'
	),
	kC = ae('<input/>'),
	xC = ae('<input/>'),
	wC = ae('<input/>'),
	SC = ae('<input/>'),
	CC = ae('<input/>'),
	TC = ae(
		'<div class="flex items-center space-x-2"><div class="relative flex justify-center items-center gap-2 flex-1"><input/></div> <input type="text" class=" py-1 text-sm dark:text-gray-300 bg-transparent outline-hidden text-right" autocomplete="off"/></div>'
	),
	MC = ae('<input/>'),
	EC = ae('<input/>'),
	AC = ae('<input/>'),
	NC = ae('<input/>'),
	OC = ae(
		'<div class="flex flex-col items-center gap-1"><!> <input type="text" class=" w-full py-1 text-left text-sm dark:text-gray-300 bg-transparent outline-hidden" autocomplete="off"/></div>'
	),
	IC = ae(
		'<textarea class="w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100/30 dark:border-gray-850/30" autocomplete="off"></textarea>'
	),
	DC = ae(
		'<div class=" py-0.5 w-full justify-between"><div class="flex w-full justify-between mb-1.5"><div class=" self-center text-xs font-medium"> <!></div></div> <div class="flex mt-0.5 mb-0.5 space-x-2"><div class=" flex-1"><!></div></div></div>'
	),
	RC = ae('<div class="flex flex-col gap-1"></div>'),
	LC = ae(
		'<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class=" text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1"><!></div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-white hover:bg-gray-100 text-black dark:bg-black dark:text-white dark:hover:bg-gray-900 transition rounded-full" type="button"> </button> <button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit"> </button></div></form></div></div></div>'
	);
function eM(t, e) {
	en(e, !1);
	const n = () => yt(o, '$i18n', r),
		[r, s] = ln(),
		o = Rn('i18n');
	let i = P(e, 'show', 12, !1),
		l = P(e, 'variables', 24, () => ({})),
		a = P(e, 'onSave', 8, (h) => {}),
		c = We(!0),
		u = We({});
	const d = async () => {
			const h = {};
			for (const p of Object.keys(y(u)))
				typeof y(u)[p] == 'string'
					? (h[p] = y(u)[p].replace(
							/\r\n/g,
							`
`
						))
					: (h[p] = y(u)[p]);
			(a()(h), i(!1));
		},
		f = async () => {
			le(c, !0);
			const h = {},
				p = Object.keys(l() ?? {});
			for (const g of p) {
				const b = l()[g];
				(b == null ? void 0 : b.default) !== void 0 ? (h[g] = b.default) : (h[g] = '');
			}
			(le(u, h), le(c, !1), await Vl());
			const m = document.getElementById('input-variable-0');
			m && m.focus();
		};
	($e(
		() => $(i()),
		() => {
			i() && f();
		}
	),
		yn(),
		nn(),
		nm(t, {
			size: 'md',
			get show() {
				return i();
			},
			set show(h) {
				i(h);
			},
			children: (h, p) => {
				var m = LC(),
					g = Q(m),
					b = Q(g),
					S = Q(b, !0);
				G(b);
				var O = Oe(b, 2),
					H = Q(O);
				(tm(H, { className: 'size-5' }), G(O), G(g));
				var E = Oe(g, 2),
					x = Q(E),
					k = Q(x),
					M = Q(k),
					T = Q(M);
				{
					var _ = (Y) => {
							var w = RC();
							(mr(
								w,
								5,
								() => ($(l()), L(() => Object.keys(l()))),
								gr,
								(A, v, D) => {
									const I = ut(() => {
										const { type: he, ...B } = ($(l()), y(v), L(() => l()[y(v)] ?? {}));
										return { type: he, variableAttributes: B };
									});
									var q = DC(),
										J = Q(q),
										xe = Q(J),
										Te = Q(xe),
										ue = Oe(Te);
									{
										var Me = (he) => {
											var B = pC(),
												F = Q(B);
											(G(B),
												ge(
													(ct) => et(F, `*${ct ?? ''}`),
													[() => (n(), L(() => n().t('required')))]
												),
												K(he, B));
										};
										wt(ue, (he) => {
											($(l()),
												y(v),
												L(() => {
													var B;
													return ((B = l()[y(v)]) == null ? void 0 : B.required) ?? !1;
												}) && he(Me));
										});
									}
									(G(xe), G(J));
									var Ae = Oe(J, 2),
										ke = Q(Ae),
										te = Q(ke);
									{
										var de = (he) => {
												var B = yC();
												De(B, 'id', `input-variable-${D}`);
												var F = Q(B);
												{
													var ct = (He) => {
														var Ke = mC(),
															Et = Q(Ke, !0);
														(G(Ke),
															(Ke.value = Ke.__value = ''),
															ge(() => et(Et, ($(l()), y(v), L(() => l()[y(v)].placeholder)))),
															K(He, Ke));
													};
													wt(F, (He) => {
														($(l()),
															y(v),
															L(() => {
																var Ke;
																return (Ke = l()[y(v)]) == null ? void 0 : Ke.placeholder;
															}) && He(ct));
													});
												}
												var qe = Oe(F);
												(mr(
													qe,
													1,
													() => (
														$(l()),
														y(v),
														L(() => {
															var He;
															return ((He = l()[y(v)]) == null ? void 0 : He.options) ?? [];
														})
													),
													gr,
													(He, Ke) => {
														var Et = gC(),
															vn = Q(Et, !0);
														G(Et);
														var qr = {};
														(ge(() => {
															(_p(Et, (y(Ke), y(u), y(v), L(() => y(Ke) === y(u)[y(v)]))),
																et(vn, y(Ke)),
																qr !== (qr = y(Ke)) && (Et.value = (Et.__value = y(Ke)) ?? ''));
														}),
															K(He, Et));
													}
												),
													G(B),
													Hp(
														B,
														() => y(u)[y(v)],
														(He) => (
															rt(u, (y(u)[y(v)] = He)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													K(he, B));
											},
											Re = (he) => {
												var B = bC(),
													F = Q(B),
													ct = Q(F);
												Lt(
													ct,
													() => ({
														type: 'checkbox',
														class:
															'size-3.5 rounded cursor-pointer border border-gray-200 dark:border-gray-700',
														id: `input-variable-${D}`,
														...y(I).variableAttributes
													}),
													void 0,
													void 0,
													void 0,
													void 0,
													!0
												);
												var qe = Oe(ct, 2);
												De(qe, 'for', `input-variable-${D}`);
												var He = Q(qe, !0);
												(G(qe), G(F));
												var Ke = Oe(F, 2);
												(js(Ke),
													G(B),
													ge(
														(Et) => {
															(et(
																He,
																($(l()),
																y(v),
																L(() => {
																	var vn;
																	return ((vn = l()[y(v)]) == null ? void 0 : vn.label) ?? y(v);
																}))
															),
																De(Ke, 'placeholder', Et),
																(Ke.required =
																	($(l()),
																	y(v),
																	L(() => {
																		var vn;
																		return ((vn = l()[y(v)]) == null ? void 0 : vn.required) ?? !1;
																	}))));
														},
														[() => (n(), L(() => n().t('Enter value (true/false)')))]
													),
													Qp(
														ct,
														() => y(u)[y(v)],
														(Et) => (
															rt(u, (y(u)[y(v)] = Et)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													Rt(
														Ke,
														() => y(u)[y(v)],
														(Et) => (
															rt(u, (y(u)[y(v)] = Et)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													K(he, B));
											},
											Ce = (he) => {
												var B = vC(),
													F = Q(B),
													ct = Q(F);
												(Lt(
													ct,
													() => ({
														type: 'color',
														class:
															'size-6 rounded cursor-pointer border border-gray-200 dark:border-gray-700',
														value: (y(u), y(v), L(() => y(u)[y(v)])),
														id: `input-variable-${D}`,
														...y(I).variableAttributes
													}),
													void 0,
													void 0,
													void 0,
													void 0,
													!0
												),
													G(F));
												var qe = Oe(F, 2);
												(js(qe),
													G(B),
													ge(
														(He) => {
															(De(qe, 'placeholder', He),
																(qe.required =
																	($(l()),
																	y(v),
																	L(() => {
																		var Ke;
																		return ((Ke = l()[y(v)]) == null ? void 0 : Ke.required) ?? !1;
																	}))));
														},
														[() => (n(), L(() => n().t('Enter hex color (e.g. #FF0000)')))]
													),
													Ee('input', ct, (He) => {
														(rt(u, (y(u)[y(v)] = He.target.value.toUpperCase())),
															pt(() => {
																(y(v), l());
															}));
													}),
													Rt(
														qe,
														() => y(u)[y(v)],
														(He) => (
															rt(u, (y(u)[y(v)] = He)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													K(he, B));
											},
											Be = (he) => {
												var B = kC();
												(Lt(
													B,
													() => ({
														type: 'date',
														class:
															'w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100/30 dark:border-gray-850/30',
														placeholder:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.placeholder) ?? '';
															})),
														autocomplete: 'off',
														id: `input-variable-${D}`,
														required:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.required) ?? !1;
															})),
														...y(I).variableAttributes
													}),
													void 0,
													void 0,
													void 0,
													void 0,
													!0
												),
													Rt(
														B,
														() => y(u)[y(v)],
														(F) => (
															rt(u, (y(u)[y(v)] = F)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													K(he, B));
											},
											be = (he) => {
												var B = xC();
												(Lt(
													B,
													() => ({
														type: 'datetime-local',
														class:
															'w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100/30 dark:border-gray-850/30',
														placeholder:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.placeholder) ?? '';
															})),
														autocomplete: 'off',
														id: `input-variable-${D}`,
														required:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.required) ?? !1;
															})),
														...y(I).variableAttributes
													}),
													void 0,
													void 0,
													void 0,
													void 0,
													!0
												),
													Rt(
														B,
														() => y(u)[y(v)],
														(F) => (
															rt(u, (y(u)[y(v)] = F)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													K(he, B));
											},
											ye = (he) => {
												var B = wC();
												(Lt(
													B,
													() => ({
														type: 'email',
														class:
															'w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100/30 dark:border-gray-850/30',
														placeholder:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.placeholder) ?? '';
															})),
														autocomplete: 'off',
														id: `input-variable-${D}`,
														required:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.required) ?? !1;
															})),
														...y(I).variableAttributes
													}),
													void 0,
													void 0,
													void 0,
													void 0,
													!0
												),
													Rt(
														B,
														() => y(u)[y(v)],
														(F) => (
															rt(u, (y(u)[y(v)] = F)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													K(he, B));
											},
											Ie = (he) => {
												var B = SC();
												(Lt(
													B,
													() => ({
														type: 'month',
														class:
															'w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100/30 dark:border-gray-850/30',
														placeholder:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.placeholder) ?? '';
															})),
														autocomplete: 'off',
														id: `input-variable-${D}`,
														required:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.required) ?? !1;
															})),
														...y(I).variableAttributes
													}),
													void 0,
													void 0,
													void 0,
													void 0,
													!0
												),
													Rt(
														B,
														() => y(u)[y(v)],
														(F) => (
															rt(u, (y(u)[y(v)] = F)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													K(he, B));
											},
											Qe = (he) => {
												var B = CC();
												(Lt(
													B,
													() => ({
														type: 'number',
														class:
															'w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100/30 dark:border-gray-850/30',
														placeholder:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.placeholder) ?? '';
															})),
														autocomplete: 'off',
														id: `input-variable-${D}`,
														required:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.required) ?? !1;
															})),
														...y(I).variableAttributes
													}),
													void 0,
													void 0,
													void 0,
													void 0,
													!0
												),
													Rt(
														B,
														() => y(u)[y(v)],
														(F) => (
															rt(u, (y(u)[y(v)] = F)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													K(he, B));
											},
											Xe = (he) => {
												var B = TC(),
													F = Q(B),
													ct = Q(F);
												(Lt(
													ct,
													() => ({
														type: 'range',
														class:
															'w-full rounded-lg py-1 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100/30 dark:border-gray-850/30',
														id: `input-variable-${D}`,
														...y(I).variableAttributes
													}),
													void 0,
													void 0,
													void 0,
													void 0,
													!0
												),
													G(F));
												var qe = Oe(F, 2);
												(js(qe),
													G(B),
													ge(
														(He) => {
															(De(qe, 'placeholder', He),
																(qe.required =
																	($(l()),
																	y(v),
																	L(() => {
																		var Ke;
																		return ((Ke = l()[y(v)]) == null ? void 0 : Ke.required) ?? !1;
																	}))));
														},
														[() => (n(), L(() => n().t('Enter value')))]
													),
													Rt(
														ct,
														() => y(u)[y(v)],
														(He) => (
															rt(u, (y(u)[y(v)] = He)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													Rt(
														qe,
														() => y(u)[y(v)],
														(He) => (
															rt(u, (y(u)[y(v)] = He)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													K(he, B));
											},
											qt = (he) => {
												var B = MC();
												(Lt(
													B,
													() => ({
														type: 'tel',
														class:
															'w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100/30 dark:border-gray-850/30',
														placeholder:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.placeholder) ?? '';
															})),
														autocomplete: 'off',
														id: `input-variable-${D}`,
														required:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.required) ?? !1;
															})),
														...y(I).variableAttributes
													}),
													void 0,
													void 0,
													void 0,
													void 0,
													!0
												),
													Rt(
														B,
														() => y(u)[y(v)],
														(F) => (
															rt(u, (y(u)[y(v)] = F)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													K(he, B));
											},
											Cr = (he) => {
												var B = EC();
												(Lt(
													B,
													() => ({
														type: 'text',
														class:
															'w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100/30 dark:border-gray-850/30',
														placeholder:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.placeholder) ?? '';
															})),
														autocomplete: 'off',
														id: `input-variable-${D}`,
														required:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.required) ?? !1;
															})),
														...y(I).variableAttributes
													}),
													void 0,
													void 0,
													void 0,
													void 0,
													!0
												),
													Rt(
														B,
														() => y(u)[y(v)],
														(F) => (
															rt(u, (y(u)[y(v)] = F)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													K(he, B));
											},
											Bt = (he) => {
												var B = AC();
												(Lt(
													B,
													() => ({
														type: 'time',
														class:
															'w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100/30 dark:border-gray-850/30',
														placeholder:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.placeholder) ?? '';
															})),
														autocomplete: 'off',
														id: `input-variable-${D}`,
														required:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.required) ?? !1;
															})),
														...y(I).variableAttributes
													}),
													void 0,
													void 0,
													void 0,
													void 0,
													!0
												),
													Rt(
														B,
														() => y(u)[y(v)],
														(F) => (
															rt(u, (y(u)[y(v)] = F)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													K(he, B));
											},
											cn = (he) => {
												var B = NC();
												(Lt(
													B,
													() => ({
														type: 'url',
														class:
															'w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100/30 dark:border-gray-850/30',
														placeholder:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.placeholder) ?? '';
															})),
														autocomplete: 'off',
														id: `input-variable-${D}`,
														required:
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.required) ?? !1;
															})),
														...y(I).variableAttributes
													}),
													void 0,
													void 0,
													void 0,
													void 0,
													!0
												),
													Rt(
														B,
														() => y(u)[y(v)],
														(F) => (
															rt(u, (y(u)[y(v)] = F)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													K(he, B));
											},
											vi = (he) => {
												var B = OC(),
													F = Q(B);
												{
													let qe = ut(
														() => (
															y(u),
															y(v),
															L(() =>
																((y(u)[y(v)] ?? '').includes(',') ?? !1)
																	? y(u)[y(v)].split(',')
																	: null
															)
														)
													);
													sm(F, {
														get setViewLocation() {
															return y(qe);
														},
														onClick: (He) => {
															(rt(u, (y(u)[y(v)] = He)),
																pt(() => {
																	(y(v), l());
																}));
														}
													});
												}
												var ct = Oe(F, 2);
												(js(ct),
													G(B),
													ge(
														(qe) => {
															(De(ct, 'placeholder', qe),
																(ct.required =
																	($(l()),
																	y(v),
																	L(() => {
																		var He;
																		return ((He = l()[y(v)]) == null ? void 0 : He.required) ?? !1;
																	}))));
														},
														[() => (n(), L(() => n().t('Enter coordinates (e.g. 51.505, -0.09)')))]
													),
													Rt(
														ct,
														() => y(u)[y(v)],
														(qe) => (
															rt(u, (y(u)[y(v)] = qe)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													K(he, B));
											},
											Vs = (he) => {
												var B = IC();
												($p(B),
													De(B, 'id', `input-variable-${D}`),
													ge(() => {
														(De(
															B,
															'placeholder',
															($(l()),
															y(v),
															L(() => {
																var F;
																return ((F = l()[y(v)]) == null ? void 0 : F.placeholder) ?? '';
															}))
														),
															(B.required =
																($(l()),
																y(v),
																L(() => {
																	var F;
																	return ((F = l()[y(v)]) == null ? void 0 : F.required) ?? !1;
																}))));
													}),
													Rt(
														B,
														() => y(u)[y(v)],
														(F) => (
															rt(u, (y(u)[y(v)] = F)),
															pt(() => {
																(y(v), l());
															})
														)
													),
													K(he, B));
											};
										wt(te, (he) => {
											($(l()),
												y(v),
												L(() => {
													var B;
													return ((B = l()[y(v)]) == null ? void 0 : B.type) === 'select';
												})
													? he(de)
													: ($(l()),
														y(v),
														L(() => {
															var B;
															return ((B = l()[y(v)]) == null ? void 0 : B.type) === 'checkbox';
														})
															? he(Re, 1)
															: ($(l()),
																y(v),
																L(() => {
																	var B;
																	return ((B = l()[y(v)]) == null ? void 0 : B.type) === 'color';
																})
																	? he(Ce, 2)
																	: ($(l()),
																		y(v),
																		L(() => {
																			var B;
																			return ((B = l()[y(v)]) == null ? void 0 : B.type) === 'date';
																		})
																			? he(Be, 3)
																			: ($(l()),
																				y(v),
																				L(() => {
																					var B;
																					return (
																						((B = l()[y(v)]) == null ? void 0 : B.type) ===
																						'datetime-local'
																					);
																				})
																					? he(be, 4)
																					: ($(l()),
																						y(v),
																						L(() => {
																							var B;
																							return (
																								((B = l()[y(v)]) == null ? void 0 : B.type) ===
																								'email'
																							);
																						})
																							? he(ye, 5)
																							: ($(l()),
																								y(v),
																								L(() => {
																									var B;
																									return (
																										((B = l()[y(v)]) == null ? void 0 : B.type) ===
																										'month'
																									);
																								})
																									? he(Ie, 6)
																									: ($(l()),
																										y(v),
																										L(() => {
																											var B;
																											return (
																												((B = l()[y(v)]) == null
																													? void 0
																													: B.type) === 'number'
																											);
																										})
																											? he(Qe, 7)
																											: ($(l()),
																												y(v),
																												L(() => {
																													var B;
																													return (
																														((B = l()[y(v)]) == null
																															? void 0
																															: B.type) === 'range'
																													);
																												})
																													? he(Xe, 8)
																													: ($(l()),
																														y(v),
																														L(() => {
																															var B;
																															return (
																																((B = l()[y(v)]) == null
																																	? void 0
																																	: B.type) === 'tel'
																															);
																														})
																															? he(qt, 9)
																															: ($(l()),
																																y(v),
																																L(() => {
																																	var B;
																																	return (
																																		((B = l()[y(v)]) == null
																																			? void 0
																																			: B.type) === 'text'
																																	);
																																})
																																	? he(Cr, 10)
																																	: ($(l()),
																																		y(v),
																																		L(() => {
																																			var B;
																																			return (
																																				((B = l()[y(v)]) == null
																																					? void 0
																																					: B.type) === 'time'
																																			);
																																		})
																																			? he(Bt, 11)
																																			: ($(l()),
																																				y(v),
																																				L(() => {
																																					var B;
																																					return (
																																						((B = l()[y(v)]) == null
																																							? void 0
																																							: B.type) === 'url'
																																					);
																																				})
																																					? he(cn, 12)
																																					: ($(l()),
																																						y(v),
																																						L(() => {
																																							var B;
																																							return (
																																								((B = l()[y(v)]) ==
																																								null
																																									? void 0
																																									: B.type) ===
																																								'map'
																																							);
																																						})
																																							? he(vi, 13)
																																							: he(
																																									Vs,
																																									-1
																																								)))))))))))))));
										});
									}
									(G(ke), G(Ae), G(q), ge(() => et(Te, `${y(v) ?? ''} `)), K(A, q));
								}
							),
								G(w),
								K(Y, w));
						},
						C = (Y) => {
							rm(Y, { className: 'size-5' });
						};
					wt(T, (Y) => {
						y(c) ? Y(C, -1) : Y(_);
					});
				}
				G(M);
				var ce = Oe(M, 2),
					W = Q(ce),
					ee = Q(W, !0);
				G(W);
				var U = Oe(W, 2),
					j = Q(U, !0);
				(G(U),
					G(ce),
					G(k),
					G(x),
					G(E),
					G(m),
					ge(
						(Y, w, A) => {
							(et(S, Y), et(ee, w), et(j, A));
						},
						[
							() => (n(), L(() => n().t('Input Variables'))),
							() => (n(), L(() => n().t('Cancel'))),
							() => (n(), L(() => n().t('Save')))
						]
					),
					Ee('click', O, () => {
						i(!1);
					}),
					Ee('click', W, () => {
						i(!1);
					}),
					Ee(
						'submit',
						k,
						Yp(() => {
							d();
						})
					),
					K(h, m));
			},
			$$slots: { default: !0 },
			$$legacy: !0
		}),
		tn(),
		s());
}
var PC = ae(
		'<button type="button"><span class=" font-medium text-black dark:text-gray-100"> </span> <span class=" text-xs text-gray-600 dark:text-gray-100"> </span></button>'
	),
	zC = ae('<div class=" space-y-0.5 scrollbar-hidden"></div>'),
	BC = ae('<div class="px-2 text-xs text-gray-500 py-1"> </div> <!>', 1);
function $C(t, e) {
	en(e, !1);
	const n = () => yt(o, '$i18n', r),
		[r, s] = ln(),
		o = Rn('i18n');
	let i = P(e, 'query', 8, ''),
		l = P(e, 'onSelect', 8, (k) => {}),
		a = We(0),
		c = P(e, 'filteredItems', 28, () => []),
		u = We(),
		d = We([]);
	Rs(() => {
		clearTimeout(y(u));
	});
	const f = async () => {
			const k = await om(localStorage.token).catch(() => null);
			k && le(d, k);
		},
		h = () => {
			le(a, Math.max(0, y(a) - 1));
		},
		p = () => {
			le(a, Math.min(y(a) + 1, c().length - 1));
		},
		m = async () => {
			const k = c()[y(a)];
			k && l()({ type: 'prompt', data: k });
		};
	($e(
		() => ($(i()), y(u)),
		() => {
			i() !== void 0 &&
				(clearTimeout(y(u)),
				le(
					u,
					setTimeout(() => {
						f();
					}, 200)
				));
		}
	),
		$e(
			() => (y(d), $(i())),
			() => {
				c(
					y(d)
						.filter((k) => k.command.toLowerCase().includes(i().toLowerCase()))
						.sort((k, M) => k.name.localeCompare(M.name))
				);
			}
		),
		$e(
			() => $(i()),
			() => {
				i() && le(a, 0);
			}
		),
		yn());
	var g = { selectUp: h, selectDown: p, select: m };
	nn();
	var b = BC(),
		S = Ht(b),
		O = Q(S, !0);
	G(S);
	var H = Oe(S, 2);
	{
		var E = (k) => {
			var M = zC();
			(mr(M, 5, c, gr, (T, _, C) => {
				dt(T, {
					get content() {
						return (y(_), L(() => y(_).name));
					},
					placement: 'top-start',
					children: (ce, W) => {
						var ee = PC(),
							U = Q(ee),
							j = Q(U, !0);
						G(U);
						var Y = Oe(U, 2),
							w = Q(Y, !0);
						(G(Y),
							G(ee),
							ge(() => {
								(Le(
									ee,
									1,
									` px-3 py-1 rounded-xl w-full text-left ${C === y(a) ? '  bg-gray-50 dark:bg-gray-800 selected-command-option-button' : ''} truncate`
								),
									De(ee, 'data-selected', C === y(a)),
									et(j, (y(_), L(() => y(_).command))),
									et(w, (y(_), L(() => y(_).name))));
							}),
							Ee('click', ee, () => {
								l()({ type: 'prompt', data: y(_) });
							}),
							Ee('mousemove', ee, () => {
								le(a, C);
							}),
							Ee('focus', ee, () => {}),
							K(ce, ee));
					},
					$$slots: { default: !0 }
				});
			}),
				G(M),
				K(k, M));
		};
		wt(H, (k) => {
			($(c()), L(() => c().length > 0) && k(E));
		});
	}
	(ge((k) => et(O, k), [() => (n(), L(() => n().t('Prompts')))]),
		K(t, b),
		st(e, 'selectUp', h),
		st(e, 'selectDown', p),
		st(e, 'select', m));
	var x = tn(g);
	return (s(), x);
}
var _C = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M14 12L10.5 14V10L14 12Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 12.7075V11.2924C2 8.39705 2 6.94939 2.90549 6.01792C3.81099 5.08645 5.23656 5.04613 8.08769 4.96549C9.43873 4.92728 10.8188 4.8999 12 4.8999C13.1812 4.8999 14.5613 4.92728 15.9123 4.96549C18.7634 5.04613 20.189 5.08645 21.0945 6.01792C22 6.94939 22 8.39705 22 11.2924V12.7075C22 15.6028 22 17.0505 21.0945 17.9819C20.189 18.9134 18.7635 18.9537 15.9124 19.0344C14.5613 19.0726 13.1812 19.1 12 19.1C10.8188 19.1 9.43867 19.0726 8.0876 19.0344C5.23651 18.9537 3.81097 18.9134 2.90548 17.9819C2 17.0505 2 15.6028 2 12.7075Z"></path></svg>'
);
function HC(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = _C();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var FC = ae('<div class="px-2 text-xs text-gray-500 py-1"><!></div>'),
	VC = ae('<div class="line-clamp-1 flex-1"> </div>'),
	WC = ae(
		'<button type="button"><div class="  text-black dark:text-gray-100 flex items-center gap-1"><!> <!></div></button>'
	),
	jC = ae('<!> <!>', 1),
	UC = ae(
		'<button class="px-2 py-1 rounded-xl w-full text-left bg-gray-50 dark:bg-gray-800 dark:text-gray-100 selected-command-option-button" type="button"><div class="  text-black dark:text-gray-100 line-clamp-1 flex items-center gap-1"><!> <div class="truncate flex-1"> </div></div></button>'
	),
	qC = ae(
		'<button class="px-2 py-1 rounded-xl w-full text-left bg-gray-50 dark:bg-gray-800 dark:text-gray-100 selected-command-option-button" type="button"><div class="  text-black dark:text-gray-100 line-clamp-1 flex items-center gap-1"><!> <div class="truncate flex-1"> </div></div></button>'
	),
	KC = ae('<!> <!>', 1);
function JC(t, e) {
	en(e, !1);
	const n = () => yt(qa, '$folders', s),
		r = () => yt(i, '$i18n', s),
		[s, o] = ln();
	im.extend(lm);
	const i = Rn('i18n');
	let l = P(e, 'query', 8, ''),
		a = P(e, 'onSelect', 8, (W) => {}),
		c = We(0),
		u = We([]),
		d = We(),
		f = P(e, 'filteredItems', 28, () => []);
	const h = () => {
			le(c, Math.max(0, y(c) - 1));
		},
		p = () => {
			le(c, Math.min(y(c) + 1, f().length - 1));
		},
		m = async () => {
			const W = document.querySelector('[data-selected="true"]');
			W && W.click();
		};
	let g = We([]),
		b = We([]),
		S = We([]);
	Rs(() => {
		clearTimeout(y(d));
	});
	const O = () => {
			(H(), E(), x());
		},
		H = async () => {
			le(
				g,
				n()
					.map((W) => ({ ...W, type: 'folder', description: r().t('Folder'), title: W.name }))
					.filter((W) => W.name.toLowerCase().includes(l().toLowerCase()))
			);
		},
		E = async () => {
			const W = await cm(localStorage.token, l()).catch(() => null);
			W &&
				le(
					b,
					W.items.map((ee) => ({ ...ee, type: 'collection' }))
				);
		},
		x = async () => {
			const W = await um(localStorage.token, l()).catch(() => null);
			W &&
				le(
					S,
					W.items.map((ee) => ({
						...ee,
						type: 'file',
						name: ee.filename,
						description: ee.collection ? ee.collection.name : ''
					}))
				);
		};
	(Ls(async () => {
		(n() === null && (await qa.set(await am(localStorage.token))), await Vl());
	}),
		$e(
			() => (y(g), y(b), y(S)),
			() => {
				le(u, [...y(g), ...y(b), ...y(S)]);
			}
		),
		$e(
			() => ($(l()), y(u)),
			() => {
				f([
					...(l().startsWith('http')
						? wi(l())
							? [{ type: 'youtube', name: l(), description: l() }]
							: [{ type: 'web', name: l(), description: l() }]
						: []),
					...y(u)
				]);
			}
		),
		$e(
			() => $(l()),
			() => {
				l() && le(c, 0);
			}
		),
		$e(
			() => ($(l()), y(d)),
			() => {
				l() !== void 0 &&
					(clearTimeout(y(d)),
					le(
						d,
						setTimeout(() => {
							O();
						}, 200)
					));
			}
		),
		yn());
	var k = { selectUp: h, selectDown: p, select: m };
	nn();
	var M = vs(),
		T = Ht(M);
	{
		var _ = (W) => {
				var ee = KC(),
					U = Ht(ee);
				mr(U, 1, f, gr, (D, I, q) => {
					var J = jC(),
						xe = Ht(J);
					{
						var Te = (ke) => {
							var te = FC(),
								de = Q(te);
							{
								var Re = (be) => {
										var ye = xi();
										(ge((Ie) => et(ye, Ie), [() => (r(), L(() => r().t('Folders')))]), K(be, ye));
									},
									Ce = (be) => {
										var ye = xi();
										(ge((Ie) => et(ye, Ie), [() => (r(), L(() => r().t('Collections')))]),
											K(be, ye));
									},
									Be = (be) => {
										var ye = xi();
										(ge((Ie) => et(ye, Ie), [() => (r(), L(() => r().t('Files')))]), K(be, ye));
									};
								wt(de, (be) => {
									(y(I),
										L(() => {
											var ye;
											return ((ye = y(I)) == null ? void 0 : ye.type) === 'folder';
										})
											? be(Re)
											: (y(I),
												L(() => {
													var ye;
													return ((ye = y(I)) == null ? void 0 : ye.type) === 'collection';
												})
													? be(Ce, 1)
													: (y(I),
														L(() => {
															var ye;
															return ((ye = y(I)) == null ? void 0 : ye.type) === 'file';
														}) && be(Be, 2))));
								});
							}
							(G(te), K(ke, te));
						};
						wt(xe, (ke) => {
							(y(I),
								y(u),
								L(() => {
									var te, de;
									return (
										q === 0 ||
										((te = y(I)) == null ? void 0 : te.type) !==
											((de = y(u)[q - 1]) == null ? void 0 : de.type)
									);
								}) && ke(Te));
						});
					}
					var ue = Oe(xe, 2);
					{
						var Me = (ke) => {
								var te = WC(),
									de = Q(te),
									Re = Q(de);
								{
									let Be = ut(
										() => (
											y(I),
											r(),
											L(() => {
												var be, ye, Ie, Qe, Xe;
												return (be = y(I)) != null && be.legacy
													? r().t('Legacy')
													: ((ye = y(I)) == null ? void 0 : ye.type) === 'file'
														? `${(Qe = (Ie = y(I)) == null ? void 0 : Ie.collection) == null ? void 0 : Qe.name} > ${r().t('File')}`
														: ((Xe = y(I)) == null ? void 0 : Xe.type) === 'collection'
															? r().t('Collection')
															: '';
											})
										)
									);
									dt(Re, {
										get content() {
											return y(Be);
										},
										placement: 'top',
										children: (be, ye) => {
											var Ie = vs(),
												Qe = Ht(Ie);
											{
												var Xe = (Bt) => {
														fm(Bt, { className: 'size-4' });
													},
													qt = (Bt) => {
														hm(Bt, { className: 'size-4' });
													},
													Cr = (Bt) => {
														dm(Bt, { className: 'size-4' });
													};
												wt(Qe, (Bt) => {
													(y(I),
														L(() => {
															var cn;
															return ((cn = y(I)) == null ? void 0 : cn.type) === 'collection';
														})
															? Bt(Xe)
															: (y(I),
																L(() => {
																	var cn;
																	return ((cn = y(I)) == null ? void 0 : cn.type) === 'folder';
																})
																	? Bt(qt, 1)
																	: Bt(Cr, -1)));
												});
											}
											K(be, Ie);
										},
										$$slots: { default: !0 }
									});
								}
								var Ce = Oe(Re, 2);
								{
									let Be = ut(
										() => (
											$(Us),
											y(I),
											L(() => {
												var be;
												return `${Us((be = y(I)) == null ? void 0 : be.name)}`;
											})
										)
									);
									dt(Ce, {
										get content() {
											return y(Be);
										},
										placement: 'top-start',
										children: (be, ye) => {
											var Ie = VC(),
												Qe = Q(Ie, !0);
											(G(Ie),
												ge(
													(Xe) => et(Qe, Xe),
													[
														() => (
															$(Us),
															y(I),
															L(() => {
																var Xe;
																return Us((Xe = y(I)) == null ? void 0 : Xe.name);
															})
														)
													]
												),
												K(be, Ie));
										},
										$$slots: { default: !0 }
									});
								}
								(G(de),
									G(te),
									ge(() => {
										(Le(
											te,
											1,
											` px-2 py-1 rounded-xl w-full text-left flex justify-between items-center ${q === y(c) ? ' bg-gray-50 dark:bg-gray-800 dark:text-gray-100 selected-command-option-button' : ''}`
										),
											De(te, 'data-selected', q === y(c)));
									}),
									Ee('click', te, () => {
										(y(I), a()({ type: 'knowledge', data: y(I) }));
									}),
									Ee('mousemove', te, () => {
										le(c, q);
									}),
									K(ke, te));
							},
							Ae = ts(() => (y(I), L(() => !['youtube', 'web'].includes(y(I).type))));
						wt(ue, (ke) => {
							y(Ae) && ke(Me);
						});
					}
					K(D, J);
				});
				var j = Oe(U, 2);
				{
					var Y = (D) => {
							var I = UC(),
								q = Q(I),
								J = Q(q);
							{
								let ue = ut(() => (r(), L(() => r().t('YouTube'))));
								dt(J, {
									get content() {
										return y(ue);
									},
									placement: 'top',
									children: (Me, Ae) => {
										HC(Me, { className: 'size-4' });
									},
									$$slots: { default: !0 }
								});
							}
							var xe = Oe(J, 2),
								Te = Q(xe, !0);
							(G(xe),
								G(q),
								G(I),
								ge(
									(ue) => {
										(De(I, 'data-selected', ue), et(Te, l()));
									},
									[
										() => (
											y(c),
											$(f()),
											L(() => y(c) === f().findIndex((ue) => ue.type === 'youtube'))
										)
									]
								),
								Ee('click', I, () => {
									Ja(l())
										? a()({ type: 'web', data: l() })
										: Ka.error(
												r().t(
													'Oops! Looks like the URL is invalid. Please double-check and try again.'
												)
											);
								}),
								K(D, I));
						},
						w = ts(() => ($(wi), $(l()), L(() => wi(l())))),
						A = (D) => {
							var I = qC(),
								q = Q(I),
								J = Q(q);
							{
								let ue = ut(() => (r(), L(() => r().t('Web'))));
								dt(J, {
									get content() {
										return y(ue);
									},
									placement: 'top',
									children: (Me, Ae) => {
										pm(Me, { className: 'size-4' });
									},
									$$slots: { default: !0 }
								});
							}
							var xe = Oe(J, 2),
								Te = Q(xe, !0);
							(G(xe),
								G(q),
								G(I),
								ge(
									(ue) => {
										(De(I, 'data-selected', ue), et(Te, l()));
									},
									[() => (y(c), $(f()), L(() => y(c) === f().findIndex((ue) => ue.type === 'web')))]
								),
								Ee('click', I, () => {
									Ja(l())
										? a()({ type: 'web', data: l() })
										: Ka.error(
												r().t(
													'Oops! Looks like the URL is invalid. Please double-check and try again.'
												)
											);
								}),
								K(D, I));
						},
						v = ts(() => ($(l()), L(() => l().startsWith('http'))));
					wt(j, (D) => {
						y(w) ? D(Y) : y(v) && D(A, 1);
					});
				}
				K(W, ee);
			},
			C = ts(() => ($(f()), $(l()), L(() => f().length > 0 || l().startsWith('http'))));
		wt(T, (W) => {
			y(C) && W(_);
		});
	}
	(K(t, M), st(e, 'selectUp', h), st(e, 'selectDown', p), st(e, 'select', m));
	var ce = tn(k);
	return (o(), ce);
}
var GC = ae(
		'<button type="button"><div class="flex text-black dark:text-gray-100 line-clamp-1"><img class="rounded-full size-5 items-center mr-2"/> <div class="truncate"> </div></div></button>'
	),
	XC = ae('<div class="px-2 text-xs text-gray-500 py-1"> </div> <!>', 1);
function QC(t, e) {
	en(e, !1);
	const n = () => yt(Zp, '$models', s),
		r = () => yt(i, '$i18n', s),
		[s, o] = ln(),
		i = Rn('i18n');
	let l = P(e, 'query', 8, ''),
		a = P(e, 'onSelect', 8, (x) => {}),
		c = We(0),
		u = P(e, 'filteredItems', 28, () => []),
		d = new mm(
			n()
				.filter((x) => {
					var k, M;
					return !(
						(M = (k = x == null ? void 0 : x.info) == null ? void 0 : k.meta) != null && M.hidden
					);
				})
				.map((x) => {
					var M, T, _, C, ce;
					return {
						...x,
						modelName: x == null ? void 0 : x.name,
						tags:
							(_ =
								(T = (M = x == null ? void 0 : x.info) == null ? void 0 : M.meta) == null
									? void 0
									: T.tags) == null
								? void 0
								: _.map((W) => W.name).join(' '),
						desc:
							(ce = (C = x == null ? void 0 : x.info) == null ? void 0 : C.meta) == null
								? void 0
								: ce.description
					};
				}),
			{ keys: ['value', 'tags', 'modelName'], threshold: 0.5 }
		);
	const f = () => {
			le(c, Math.max(0, y(c) - 1));
		},
		h = () => {
			le(c, Math.min(y(c) + 1, u().length - 1));
		},
		p = async () => {
			const x = u()[y(c)];
			x && a()({ type: 'model', data: x });
		};
	($e(
		() => ($(l()), n()),
		() => {
			u(
				l()
					? d.search(l()).map((x) => x.item)
					: n().filter((x) => {
							var k, M;
							return !(
								(M = (k = x == null ? void 0 : x.info) == null ? void 0 : k.meta) != null &&
								M.hidden
							);
						})
			);
		}
	),
		$e(
			() => $(l()),
			() => {
				l() && le(c, 0);
			}
		),
		yn());
	var m = { selectUp: f, selectDown: h, select: p };
	nn();
	var g = XC(),
		b = Ht(g),
		S = Q(b, !0);
	G(b);
	var O = Oe(b, 2);
	{
		var H = (x) => {
			var k = vs(),
				M = Ht(k);
			(mr(M, 1, u, gr, (T, _, C) => {
				dt(T, {
					get content() {
						return (y(_), L(() => y(_).id));
					},
					placement: 'top-start',
					children: (ce, W) => {
						var ee = GC(),
							U = Q(ee),
							j = Q(U),
							Y = Oe(j, 2),
							w = Q(Y, !0);
						(G(Y),
							G(U),
							G(ee),
							ge(() => {
								(Le(
									ee,
									1,
									`px-2.5 py-1.5 rounded-xl w-full text-left ${C === y(c) ? 'bg-gray-50 dark:bg-gray-800 selected-command-option-button' : ''}`
								),
									De(ee, 'data-selected', C === y(c)),
									De(
										j,
										'src',
										($(Ua),
										y(_),
										r(),
										L(() => `${Ua}/models/model/profile/image?id=${y(_).id}&lang=${r().language}`))
									),
									De(
										j,
										'alt',
										(y(_),
										L(() => {
											var A;
											return ((A = y(_)) == null ? void 0 : A.name) ?? y(_).id;
										}))
									),
									et(w, (y(_), L(() => y(_).name))));
							}),
							Ee('error', j, (A) => {
								A.currentTarget.src = '/favicon.png';
							}),
							Ee('click', ee, () => {
								a()({ type: 'model', data: y(_) });
							}),
							Ee('mousemove', ee, () => {
								le(c, C);
							}),
							Ee('focus', ee, () => {}),
							K(ce, ee));
					},
					$$slots: { default: !0 }
				});
			}),
				K(x, k));
		};
		wt(O, (x) => {
			($(u()), L(() => u().length > 0) && x(H));
		});
	}
	(ge((x) => et(S, x), [() => (r(), L(() => r().t('Models')))]),
		K(t, g),
		st(e, 'selectUp', f),
		st(e, 'selectDown', h),
		st(e, 'select', p));
	var E = tn(m);
	return (o(), E);
}
var YC = Tt(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.8476 13.317L9.50515 18.2798C8.70833 19.1905 7.29167 19.1905 6.49485 18.2798L2.15238 13.317C1.49259 12.563 1.49259 11.437 2.15238 10.683L6.49485 5.72018C7.29167 4.80952 8.70833 4.80952 9.50515 5.72017L13.8476 10.683C14.5074 11.437 14.5074 12.563 13.8476 13.317Z"></path><path d="M13 19L17.8844 13.3016C18.5263 12.5526 18.5263 11.4474 17.8844 10.6984L13 5"></path><path d="M17 19L21.8844 13.3016C22.5263 12.5526 22.5263 11.4474 21.8844 10.6984L17 5"></path></svg>'
);
function ZC(t, e) {
	let n = P(e, 'className', 8, 'size-4'),
		r = P(e, 'strokeWidth', 8, '1.5');
	var s = YC();
	(ge(() => {
		(De(s, 'stroke-width', r()), Le(s, 0, Mt(n())));
	}),
		K(t, s));
}
var eT = ae(
		'<button type="button"><div class="flex text-black dark:text-gray-100 line-clamp-1 items-center"><div class="flex items-center justify-center size-5 mr-2 shrink-0"><!></div> <div class="truncate"> </div> <div class="ml-2 text-xs text-gray-500 truncate"> </div></div></button>'
	),
	tT = ae('<div class="px-2 text-xs text-gray-500 py-1"> </div> <!>', 1);
function nT(t, e) {
	en(e, !1);
	const n = () => yt(o, '$i18n', r),
		[r, s] = ln(),
		o = Rn('i18n');
	let i = P(e, 'query', 8, ''),
		l = P(e, 'onSelect', 8, (x) => {}),
		a = We(0),
		c = P(e, 'filteredItems', 28, () => []),
		u = We();
	Rs(() => {
		clearTimeout(y(u));
	});
	const d = async () => {
			const x = await gm(localStorage.token, i()).catch(() => null);
			x && c(x.items);
		},
		f = () => {
			le(a, Math.max(0, y(a) - 1));
		},
		h = () => {
			le(a, Math.min(y(a) + 1, c().length - 1));
		},
		p = async () => {
			const x = c()[y(a)];
			x && l()({ type: 'skill', data: x });
		};
	($e(
		() => ($(i()), y(u)),
		() => {
			i() !== void 0 &&
				(clearTimeout(y(u)),
				le(
					u,
					setTimeout(() => {
						d();
					}, 200)
				));
		}
	),
		$e(
			() => $(i()),
			() => {
				i() && le(a, 0);
			}
		),
		yn());
	var m = { selectUp: f, selectDown: h, select: p };
	nn();
	var g = tT(),
		b = Ht(g),
		S = Q(b, !0);
	G(b);
	var O = Oe(b, 2);
	{
		var H = (x) => {
			var k = vs(),
				M = Ht(k);
			(mr(M, 1, c, gr, (T, _, C) => {
				{
					let ce = ut(() => (y(_), L(() => y(_).description || y(_).name)));
					dt(T, {
						get content() {
							return y(ce);
						},
						placement: 'top-start',
						children: (W, ee) => {
							var U = eT(),
								j = Q(U),
								Y = Q(j),
								w = Q(Y);
							(ZC(w, { className: 'size-4' }), G(Y));
							var A = Oe(Y, 2),
								v = Q(A, !0);
							G(A);
							var D = Oe(A, 2),
								I = Q(D, !0);
							(G(D),
								G(j),
								G(U),
								ge(() => {
									(Le(
										U,
										1,
										`px-2.5 py-1.5 rounded-xl w-full text-left ${C === y(a) ? 'bg-gray-50 dark:bg-gray-800 selected-command-option-button' : ''}`
									),
										De(U, 'data-selected', C === y(a)),
										et(v, (y(_), L(() => y(_).name))),
										et(I, (y(_), L(() => y(_).id))));
								}),
								Ee('click', U, () => {
									l()({ type: 'skill', data: y(_) });
								}),
								Ee('mousemove', U, () => {
									le(a, C);
								}),
								Ee('focus', U, () => {}),
								K(W, U));
						},
						$$slots: { default: !0 }
					});
				}
			}),
				K(x, k));
		};
		wt(O, (x) => {
			($(c()), L(() => c().length > 0) && x(H));
		});
	}
	(ge((x) => et(S, x), [() => (n(), L(() => n().t('Skills')))]),
		K(t, g),
		st(e, 'selectUp', f),
		st(e, 'selectDown', h),
		st(e, 'select', p));
	var E = tn(m);
	return (s(), E);
}
var rT = ae(
		'<button type="button"><div class="flex items-center gap-2 text-black dark:text-gray-100"><img class="size-5 flex-shrink-0" loading="lazy"/> <div class="truncate text-sm"> </div></div></button>'
	),
	sT = ae('<div class="px-2 text-xs text-gray-500 py-1"> </div> <!>', 1);
function oT(t, e) {
	en(e, !1);
	const n = () => yt(o, '$i18n', r),
		[r, s] = ln(),
		o = Rn('i18n');
	let i = P(e, 'query', 8, ''),
		l = P(e, 'onSelect', 8, (O) => {}),
		a = We(0),
		c = P(e, 'filteredItems', 28, () => []);
	const u = Object.entries(em).map(([O, H]) => ({
			name: O,
			shortCodes: typeof H == 'string' ? [H] : H
		})),
		d = () => {
			le(a, Math.max(0, y(a) - 1));
		},
		f = () => {
			le(a, Math.min(y(a) + 1, c().length - 1));
		},
		h = async () => {
			const O = c()[y(a)];
			O && l()({ type: 'emoji', data: O });
		};
	($e(
		() => $(i()),
		() => {
			if (i() && i().length >= 2) {
				const O = i().toLowerCase();
				c(
					u
						.filter(
							(H) =>
								H.name.toLowerCase().includes(O) ||
								H.shortCodes.some((E) => E.toLowerCase().includes(O))
						)
						.sort((H, E) => {
							const x = (k) =>
								k.shortCodes.some((M) => M.toLowerCase() === O)
									? 0
									: k.shortCodes.some((M) => M.toLowerCase().startsWith(O))
										? 1
										: 2;
							return x(H) - x(E);
						})
						.slice(0, 50)
				);
			} else c([]);
		}
	),
		$e(
			() => $(i()),
			() => {
				i() && le(a, 0);
			}
		),
		yn());
	var p = { selectUp: d, selectDown: f, select: h };
	nn();
	var m = vs(),
		g = Ht(m);
	{
		var b = (O) => {
			var H = sT(),
				E = Ht(H),
				x = Q(E, !0);
			G(E);
			var k = Oe(E, 2);
			(mr(k, 1, c, gr, (M, T, _) => {
				var C = rT(),
					ce = Q(C),
					W = Q(ce),
					ee = Oe(W, 2),
					U = Q(ee);
				(G(ee),
					G(ce),
					G(C),
					ge(
						(j) => {
							(Le(
								C,
								1,
								`px-2.5 py-1.5 rounded-xl w-full text-left ${_ === y(a) ? 'bg-gray-50 dark:bg-gray-800 selected-command-option-button' : ''}`
							),
								De(C, 'data-selected', _ === y(a)),
								De(W, 'src', `${Xp}/assets/emojis/${j ?? ''}.svg`),
								De(W, 'alt', (y(T), L(() => y(T).name))),
								et(U, `:${(y(T), L(() => y(T).shortCodes[0]) ?? '')}:`));
						},
						[() => (y(T), L(() => y(T).name.toLowerCase()))]
					),
					Ee('click', C, () => {
						l()({ type: 'emoji', data: y(T) });
					}),
					Ee('mousemove', C, () => {
						le(a, _);
					}),
					Ee('focus', C, () => {}),
					K(M, C));
			}),
				ge((M) => et(x, M), [() => (n(), L(() => n().t('Emojis')))]),
				K(O, H));
		};
		wt(g, (O) => {
			($(c()), L(() => c().length > 0) && O(b));
		});
	}
	(K(t, m), st(e, 'selectUp', d), st(e, 'selectDown', f), st(e, 'select', h));
	var S = tn(p);
	return (s(), S);
}
var iT = ae(
	'<div id="suggestions-container"><div class="overflow-y-auto scrollbar-thin max-h-60"><!></div></div>'
);
function tM(t, e) {
	en(e, !1);
	let n = P(e, 'char', 8, ''),
		r = P(e, 'query', 8, ''),
		s = P(e, 'command', 8),
		o = P(e, 'onSelect', 8, (E) => {}),
		i = P(e, 'onUpload', 8, (E) => {}),
		l = P(e, 'insertTextHandler', 8, (E) => {}),
		a = We(null),
		c = We([]);
	const u = (E) => {
		var x, k, M;
		if (!['ArrowUp', 'ArrowDown', 'Enter', 'Tab', 'Escape'].includes(E.key)) return !1;
		if (E.key === 'ArrowUp') {
			(x = y(a)) == null || x.selectUp();
			const T = document.querySelector('[data-selected="true"]');
			return (
				T == null || T.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'instant' }),
				!0
			);
		}
		if (E.key === 'ArrowDown') {
			(k = y(a)) == null || k.selectDown();
			const T = document.querySelector('[data-selected="true"]');
			return (
				T == null || T.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'instant' }),
				!0
			);
		}
		return E.key === 'Enter' || E.key === 'Tab'
			? ((M = y(a)) == null || M.select(), E.key === 'Enter' && E.preventDefault(), !0)
			: E.key === 'Escape';
	};
	function d(E) {
		return u(E);
	}
	var f = { _onKeyDown: d };
	nn();
	var h = iT(),
		p = Q(h),
		m = Q(p);
	{
		var g = (E) => {
				rn(
					$C(E, {
						get query() {
							return r();
						},
						onSelect: (x) => {
							const { type: k, data: M } = x;
							k === 'prompt' && l()(M.content);
						},
						get filteredItems() {
							return y(c);
						},
						set filteredItems(x) {
							le(c, x);
						},
						$$legacy: !0
					}),
					(x) => le(a, x),
					() => y(a)
				);
			},
			b = (E) => {
				rn(
					JC(E, {
						get query() {
							return r();
						},
						onSelect: (x) => {
							const { type: k, data: M } = x;
							k === 'knowledge'
								? (l()(''), i()({ type: 'file', data: M }))
								: k === 'web' && (l()(''), i()({ type: 'web', data: M }));
						},
						get filteredItems() {
							return y(c);
						},
						set filteredItems(x) {
							le(c, x);
						},
						$$legacy: !0
					}),
					(x) => le(a, x),
					() => y(a)
				);
			},
			S = (E) => {
				rn(
					QC(E, {
						get query() {
							return r();
						},
						onSelect: (x) => {
							const { type: k, data: M } = x;
							k === 'model' && (l()(''), o()({ type: 'model', data: M }));
						},
						get filteredItems() {
							return y(c);
						},
						set filteredItems(x) {
							le(c, x);
						},
						$$legacy: !0
					}),
					(x) => le(a, x),
					() => y(a)
				);
			},
			O = (E) => {
				rn(
					nT(E, {
						get query() {
							return r();
						},
						onSelect: (x) => {
							const { type: k, data: M } = x;
							k === 'skill' &&
								(s()({ id: `${M.id}|${M.name}`, label: M.name }), o()({ type: 'skill', data: M }));
						},
						get filteredItems() {
							return y(c);
						},
						set filteredItems(x) {
							le(c, x);
						},
						$$legacy: !0
					}),
					(x) => le(a, x),
					() => y(a)
				);
			},
			H = (E) => {
				rn(
					oT(E, {
						get query() {
							return r();
						},
						onSelect: (x) => {
							const { type: k, data: M } = x;
							k === 'emoji' && s()({ id: M.name, label: M.shortCodes[0] });
						},
						get filteredItems() {
							return y(c);
						},
						set filteredItems(x) {
							le(c, x);
						},
						$$legacy: !0
					}),
					(x) => le(a, x),
					() => y(a)
				);
			};
		wt(m, (E) => {
			n() === '/'
				? E(g)
				: n() === '#'
					? E(b, 1)
					: n() === '@'
						? E(S, 2)
						: n() === '$'
							? E(O, 3)
							: n() === ':' && E(H, 4);
		});
	}
	return (
		G(p),
		G(h),
		ge(() =>
			Le(
				h,
				1,
				`${(y(c), L(() => ((y(c) ?? []).length > 0 ? '' : 'hidden')) ?? '')} rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col bg-white dark:bg-gray-850 w-72 p-1`
			)
		),
		K(t, h),
		st(e, '_onKeyDown', d),
		tn(f)
	);
}
export {
	Ut as A,
	QT as C,
	Ve as D,
	Ue as E,
	z as F,
	eM as I,
	fe as N,
	qT as P,
	ZT as R,
	X as S,
	pe as T,
	XT as a,
	tM as b,
	KT as c,
	JT as d,
	_e as e,
	ze as f,
	GT as g,
	Qt as h,
	tt as i,
	A1 as k
};
//# sourceMappingURL=CEmdr0LD.js.map
