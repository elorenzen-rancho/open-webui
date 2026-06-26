import '../chunks/CWj6FrbW.js';
import '../chunks/69_IOA4Y.js';
import {
	p as Zt,
	C as ge,
	c as n,
	n as c,
	x as D,
	z as s,
	r,
	t as P,
	d as m,
	q as K,
	a as $,
	l as t,
	b as te,
	u as nt,
	f as C,
	g as oe,
	w as rt,
	k as i,
	y as ie,
	s as se,
	m as p,
	e as Ht,
	i as Jt,
	A as Ge,
	a9 as he,
	aY as Xe,
	o as Ke,
	j as Qe,
	$ as Ze,
	B as me
} from '../chunks/CD8kWLvT.js';
import { i as jt } from '../chunks/CdIW-EUl.js';
import { h as ta } from '../chunks/d1mQnqxV.js';
import { s as xt, b as ke, a as Qt, e as be, r as Rt } from '../chunks/BfA5TzUS.js';
import { i as ee } from '../chunks/BolXBFGq.js';
import { t as Et } from '../chunks/DtbOSK9Q.js';
import { g as we } from '../chunks/D8_neGVh.js';
import { W as ea, s as ye, m as aa } from '../chunks/Bumd5cCN.js';
import { b as Vt } from '../chunks/CHheSG1Y.js';
import { e as yt, i as Pt } from '../chunks/BUYMbiFA.js';
import { s as ne } from '../chunks/Bfc47y5P.js';
import { p as tt } from '../chunks/DbBXQmQ3.js';
import { T as De } from '../chunks/BUv1YIBp.js';
import { C as $e } from '../chunks/ByiSdoor.js';
import { b as qt, a as ra } from '../chunks/QcGoGJ5n.js';
import { M as na } from '../chunks/sSXaIhmU.js';
import { X as oa } from '../chunks/D48hh3kS.js';
import { S as Ce } from '../chunks/BqNz_fa8.js';
import { S as ia } from '../chunks/GgKrrMKs.js';
import { S as sa } from '../chunks/CDVagW2w.js';
import { C as la } from '../chunks/BjKZlgv7.js';
import { C as da } from '../chunks/BorfY2-J.js';
const ca = async (H) => {
		let g = null;
		const e = await fetch(`${Vt}/calendars/`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				authorization: `Bearer ${H}`
			}
		})
			.then(async (S) => {
				if (!S.ok) throw await S.json();
				return S.json();
			})
			.catch((S) => ((g = S.detail), null));
		if (g) throw g;
		return e;
	},
	va = async (H, g) => {
		let e = null;
		const S = await fetch(`${Vt}/calendars/${g}/delete`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				authorization: `Bearer ${H}`
			}
		})
			.then(async (_) => {
				if (!_.ok) throw await _.json();
				return _.json();
			})
			.catch((_) => ((e = _.detail), null));
		if (e) throw e;
		return (S == null ? void 0 : S.status) ?? !1;
	},
	ua = async (H, g, e, S) => {
		let _ = null;
		const h = new URLSearchParams();
		(h.append('start', g), h.append('end', e));
		const T = await fetch(`${Vt}/calendars/events?${h.toString()}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				authorization: `Bearer ${H}`
			}
		})
			.then(async (E) => {
				if (!E.ok) throw await E.json();
				return E.json();
			})
			.catch((E) => ((_ = E.detail), null));
		if (_) throw _;
		return T;
	},
	ga = async (H, g) => {
		let e = null;
		const S = await fetch(`${Vt}/calendars/events/create`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				authorization: `Bearer ${H}`
			},
			body: JSON.stringify(g)
		})
			.then(async (_) => {
				if (!_.ok) throw await _.json();
				return _.json();
			})
			.catch((_) => ((e = _.detail), null));
		if (e) throw e;
		return S;
	},
	fa = async (H, g, e) => {
		let S = null;
		const _ = await fetch(`${Vt}/calendars/events/${g}/update`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				authorization: `Bearer ${H}`
			},
			body: JSON.stringify(e)
		})
			.then(async (h) => {
				if (!h.ok) throw await h.json();
				return h.json();
			})
			.catch((h) => ((S = h.detail), null));
		if (S) throw S;
		return _;
	},
	pa = async (H, g) => {
		let e = null;
		const S = await fetch(`${Vt}/calendars/events/${g}/delete`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				authorization: `Bearer ${H}`
			}
		})
			.then(async (_) => {
				if (!_.ok) throw await _.json();
				return _.json();
			})
			.catch((_) => ((e = _.detail), null));
		if (e) throw e;
		return (S == null ? void 0 : S.status) ?? !1;
	};
var xa = C('<span class="text-gray-500 dark:text-gray-400"> </span>'),
	_a = C(
		'<button><span class="shrink-0 size-[7px] rounded-full mt-[5px]"></span> <span class="truncate"><!> </span></button>'
	);
function ue(H, g) {
	Zt(g, !1);
	let e = tt(g, 'event', 8),
		S = tt(g, 'calendarColor', 8, null);
	const _ = ge();
	ee();
	{
		let h = nt(() => (D(e()), s(() => e().title))),
			T = nt(() => (D(e()), s(() => (e().location ? ` · ${e().location}` : ''))));
		De(H, {
			get content() {
				return `${t(h) ?? ''}${t(T) ?? ''}`;
			},
			children: (E, x) => {
				var R = _a(),
					_t = n(R),
					lt = c(_t, 2),
					A = n(lt);
				{
					var q = (k) => {
						var M = xa(),
							et = n(M, !0);
						(r(M),
							P(
								(V) => m(et, V),
								[
									() => (
										D(e()),
										s(() =>
											new Date(e().start_at / 1e6)
												.toLocaleTimeString(void 0, { hour: 'numeric', minute: '2-digit' })
												.replace(' ', '')
										)
									)
								]
							),
							$(k, M));
					};
					jt(A, (k) => {
						(D(e()), s(() => !e().all_day) && k(q));
					});
				}
				var I = c(A);
				(r(lt),
					r(R),
					P(() => {
						(xt(
							R,
							1,
							`w-full text-left text-xs flex items-start gap-1.5 py-[1px] px-0.5 rounded-md
			${
				(D(e()),
				s(() => {
					var k;
					return (k = e().meta) != null && k.automation_id ? 'opacity-60' : '';
				}) ?? '')
			}
			hover:bg-gray-50 dark:hover:bg-gray-800/50 transition truncate`
						),
							ke(
								_t,
								`background-color: ${(D(e()), D(S()), s(() => e().color || S() || '#3b82f6') ?? '')};`
							),
							m(I, ` ${(D(e()), s(() => e().title) ?? '')}`));
					}),
					K(
						'click',
						R,
						ne(() => _('click', e()))
					),
					$(E, R));
			},
			$$slots: { default: !0 }
		});
	}
	te();
}
var ha = C(
		'<div class="px-2 py-1.5 text-xs text-gray-400 dark:text-gray-500 text-left truncate"> </div>'
	),
	ma = C(
		'<div class="text-[10px] text-gray-400 dark:text-gray-500 px-1 mt-auto hover:text-gray-700 dark:hover:text-gray-200 text-left w-full truncate z-10"> </div>'
	),
	ba = C(
		'<button><div class="flex justify-start px-0.5 mb-0.5"><span> </span></div> <div class="flex flex-col gap-0 flex-1 overflow-hidden"><!> <!></div></button>'
	),
	wa = C(
		'<div class="flex-1 flex flex-col min-h-0 px-3 pb-3"><div class="grid grid-cols-7"></div> <div class="flex-1 grid grid-cols-7 auto-rows-fr min-h-0 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100/30 dark:border-gray-850/30"></div></div>'
	),
	ya = C(
		'<div><div class="text-[11px] text-gray-400 dark:text-gray-500"> </div> <div> </div></div>'
	),
	ka = C(
		'<div class="text-[10px] text-gray-400 dark:text-gray-500 px-1 mt-auto hover:text-gray-700 dark:hover:text-gray-200 text-left w-full truncate z-10"> </div>'
	),
	Da = C('<button><div class="flex flex-col gap-0.5 w-full min-h-0"><!> <!></div></button>'),
	$a = C(
		'<div><div class="text-[10px] text-gray-400 dark:text-gray-500 text-right pr-2 select-none -mt-1.5 z-10"> </div> <!></div>'
	),
	Ca = C(
		'<div class="flex-1 flex flex-col min-h-0 px-3 pb-3"><div class="flex-1 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100/30 dark:border-gray-850/30 overflow-hidden relative"><div class="absolute inset-0 overflow-x-auto flex flex-col"><div class="min-w-[700px] flex flex-col flex-1"><div class="grid grid-cols-[52px_repeat(7,1fr)] shrink-0 border-b border-gray-100/30 dark:border-gray-850/30"><div></div> <!></div> <div class="flex-1 overflow-y-auto"></div></div></div></div></div>'
	),
	Sa =
		C(`<div><div class="w-14 shrink-0 text-[10px] text-gray-400 dark:text-gray-500 text-right pr-3 mt-1 select-none"> </div> <button class="flex-1 border-l border-gray-100/15 dark:border-gray-850/15 px-1.5 py-0.5
								hover:bg-gray-50/50 dark:hover:bg-gray-850/20 transition cursor-pointer flex flex-col text-left justify-start"><div class="flex flex-col gap-0.5 w-full"></div></button></div>`),
	Ma = C(
		'<div class="flex-1 flex flex-col min-h-0 px-3 pb-3"><div class="flex-1 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100/30 dark:border-gray-850/30 overflow-y-auto"></div></div>'
	),
	Ta = C('<div class="flex flex-col h-full w-full min-h-0 min-w-0"><!></div>');
function Ea(H, g) {
	Zt(g, !1);
	const e = () => Ht(I, '$i18n', S),
		[S, _] = se(),
		h = p(),
		T = p(),
		E = p(),
		x = p(),
		R = p(),
		_t = p(),
		lt = p(),
		A = p(),
		q = p(),
		I = oe('i18n'),
		k = ge();
	let M = tt(g, 'events', 24, () => []),
		et = tt(g, 'calendars', 24, () => []),
		V = tt(g, 'visibleCalendarIds', 24, () => new Set()),
		N = tt(g, 'view', 12, 'month'),
		B = tt(g, 'currentDate', 28, () => new Date());
	const dt = 1e6,
		ct = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	function ht(o) {
		return o.toDateString() === new Date().toDateString();
	}
	function $t(o) {
		return o.getMonth() === B().getMonth();
	}
	function ot(o, v, w = t(T)) {
		const W = new Date(o.getFullYear(), o.getMonth(), o.getDate(), v).getTime(),
			F = W + 36e5;
		return w.filter((l) => {
			const a = l.start_at / dt;
			return a >= W && a < F;
		});
	}
	function kt(o) {
		return o === 0 ? '12 AM' : o < 12 ? `${o} AM` : o === 12 ? '12 PM' : `${o - 12} PM`;
	}
	function At(o) {
		B(o);
		const v = new Date(o.getFullYear(), o.getMonth(), o.getDate(), 9).getTime();
		k('createEvent', { start_at: v * dt });
	}
	function St(o) {
		(B(o), N('day'), k('viewChange', N()), k('navigate', { date: B() }));
	}
	function Mt(o, v) {
		B(o);
		const w = new Date(o.getFullYear(), o.getMonth(), o.getDate(), v).getTime();
		k('createEvent', { start_at: w * dt });
	}
	function vt(o) {
		k('eventClick', o);
	}
	(rt(
		() => D(et()),
		() => {
			i(
				h,
				et().reduce((o, v) => ({ ...o, [v.id]: v.color }), {})
			);
		}
	),
		rt(
			() => (D(M()), D(V())),
			() => {
				i(
					T,
					M().filter((o) => V().has(o.calendar_id))
				);
			}
		),
		rt(
			() => t(T),
			() => {
				i(
					E,
					(() => {
						const o = {};
						for (const v of t(T)) {
							const w = v.start_at / dt,
								W = (v.end_at || v.start_at) / dt,
								F = new Date(w),
								l = new Date(W),
								a = new Date(F.getFullYear(), F.getMonth(), F.getDate()),
								d = new Date(l.getFullYear(), l.getMonth(), l.getDate()).getTime();
							for (; a.getTime() <= d; ) {
								const u = a.getTime().toString();
								((o[u] ?? (o[u] = [])).push(v), a.setDate(a.getDate() + 1));
							}
						}
						return o;
					})()
				);
			}
		),
		rt(
			() => D(B()),
			() => {
				i(x, new Date(B().getFullYear(), B().getMonth(), 1));
			}
		),
		rt(
			() => t(x),
			() => {
				i(
					R,
					(() => {
						const o = new Date(t(x));
						return (o.setDate(o.getDate() - o.getDay()), o);
					})()
				);
			}
		),
		rt(
			() => t(R),
			() => {
				i(
					_t,
					(() => {
						const o = [],
							v = new Date(t(R));
						for (let w = 0; w < 42; w++) (o.push(new Date(v)), v.setDate(v.getDate() + 1));
						return o;
					})()
				);
			}
		),
		rt(
			() => D(B()),
			() => {
				i(
					lt,
					(() => {
						const o = new Date(B());
						return (o.setDate(o.getDate() - o.getDay()), o.setHours(0, 0, 0, 0), o);
					})()
				);
			}
		),
		rt(
			() => t(lt),
			() => {
				i(
					A,
					(() => {
						const o = [],
							v = new Date(t(lt));
						for (let w = 0; w < 7; w++) (o.push(new Date(v)), v.setDate(v.getDate() + 1));
						return o;
					})()
				);
			}
		),
		rt(
			() => {},
			() => {
				i(
					q,
					Array.from({ length: 24 }, (o, v) => v)
				);
			}
		),
		ie(),
		ee());
	var Tt = Ta(),
		Nt = n(Tt);
	{
		var zt = (o) => {
				var v = wa(),
					w = n(v);
				(yt(
					w,
					5,
					() => ct,
					Pt,
					(F, l) => {
						var a = ha(),
							d = n(a, !0);
						(r(a), P((u) => m(d, u), [() => (e(), t(l), s(() => e().t(t(l))))]), $(F, a));
					}
				),
					r(w));
				var W = c(w, 2);
				(yt(
					W,
					5,
					() => t(_t),
					Pt,
					(F, l, a) => {
						const d = nt(
								() => (
									t(l),
									s(() =>
										new Date(t(l).getFullYear(), t(l).getMonth(), t(l).getDate())
											.getTime()
											.toString()
									)
								)
							),
							u = nt(() => (t(E), D(t(d)), s(() => t(E)[t(d)] || []))),
							f = nt(() => a % 7),
							Y = nt(() => s(() => Math.floor(a / 7)));
						var y = ba(),
							L = n(y),
							G = n(L),
							it = n(G, !0);
						(r(G), r(L));
						var Q = c(L, 2),
							J = n(Q);
						yt(
							J,
							1,
							() => (D(t(u)), s(() => t(u).slice(0, 3))),
							(st) => st.instance_id || st.id,
							(st, X) => {
								ue(st, {
									get event() {
										return t(X);
									},
									get calendarColor() {
										return (t(h), t(X), s(() => t(h)[t(X).calendar_id]));
									},
									$$events: { click: () => vt(t(X)) }
								});
							}
						);
						var U = c(J, 2);
						{
							var Z = (st) => {
								var X = ma(),
									mt = n(X);
								(r(X),
									P(() => m(mt, `+${(D(t(u)), s(() => t(u).length - 3) ?? '')} more`)),
									K(
										'click',
										X,
										ne(() => St(t(l)))
									),
									$(st, X));
							};
							jt(U, (st) => {
								(D(t(u)), s(() => t(u).length > 3) && st(Z));
							});
						}
						(r(Q),
							r(y),
							P(
								(st, X, mt) => {
									(xt(
										y,
										1,
										`p-1 min-h-0 text-left overflow-hidden transition cursor-pointer flex flex-col
							${st ?? ''}
							hover:bg-gray-50/80 dark:hover:bg-gray-850/30
							${t(f) > 0 ? 'border-l border-gray-100/20 dark:border-gray-850/20' : ''}
							${t(Y) > 0 ? 'border-t border-gray-100/20 dark:border-gray-850/20' : ''}`
									),
										xt(
											G,
											1,
											`text-xs w-6 h-6 flex items-center justify-center rounded-full
								${X ?? ''}`
										),
										m(it, mt));
								},
								[
									() => (t(l), s(() => ($t(t(l)) ? '' : 'opacity-40'))),
									() => (
										t(l),
										s(() =>
											ht(t(l)) ? 'bg-blue-500 text-white' : 'text-gray-500 dark:text-gray-400'
										)
									),
									() => (t(l), s(() => t(l).getDate()))
								]
							),
							K('click', y, () => At(t(l))),
							$(F, y));
					}
				),
					r(W),
					r(v),
					$(o, v));
			},
			z = (o) => {
				var v = Ca(),
					w = n(v),
					W = n(w),
					F = n(W),
					l = n(F),
					a = c(n(l), 2);
				(yt(
					a,
					1,
					() => t(A),
					Pt,
					(u, f) => {
						var Y = ya(),
							y = n(Y),
							L = n(y, !0);
						r(y);
						var G = c(y, 2),
							it = n(G, !0);
						(r(G),
							r(Y),
							P(
								(Q, J, U, Z) => {
									(xt(Y, 1, `text-center py-2.5 ${Q ?? ''}`),
										m(L, J),
										xt(
											G,
											1,
											`text-sm mt-0.5 w-7 h-7 flex items-center justify-center mx-auto rounded-full ${U ?? ''}`
										),
										m(it, Z));
								},
								[
									() => (
										t(f),
										s(() =>
											t(f).getDay() > 0 ? 'border-l border-gray-100/20 dark:border-gray-850/20' : ''
										)
									),
									() => (t(f), s(() => ct[t(f).getDay()])),
									() => (t(f), s(() => (ht(t(f)) ? 'bg-blue-500 text-white' : ''))),
									() => (t(f), s(() => t(f).getDate()))
								]
							),
							$(u, Y));
					}
				),
					r(l));
				var d = c(l, 2);
				(yt(
					d,
					5,
					() => t(q),
					Pt,
					(u, f) => {
						var Y = $a(),
							y = n(Y),
							L = n(y, !0);
						r(y);
						var G = c(y, 2);
						(yt(
							G,
							1,
							() => t(A),
							Pt,
							(it, Q) => {
								const J = nt(() => (t(Q), t(f), t(T), s(() => ot(t(Q), t(f), t(T)))));
								var U = Da(),
									Z = n(U),
									st = n(Z);
								yt(
									st,
									1,
									() => (D(t(J)), s(() => t(J).slice(0, 3))),
									(ut) => ut.instance_id || ut.id,
									(ut, gt) => {
										ue(ut, {
											get event() {
												return t(gt);
											},
											get calendarColor() {
												return (t(h), t(gt), s(() => t(h)[t(gt).calendar_id]));
											},
											$$events: { click: () => vt(t(gt)) }
										});
									}
								);
								var X = c(st, 2);
								{
									var mt = (ut) => {
										var gt = ka(),
											It = n(gt);
										(r(gt),
											P(() => m(It, `+${(D(t(J)), s(() => t(J).length - 3) ?? '')} more`)),
											K(
												'click',
												gt,
												ne(() => St(t(Q)))
											),
											$(ut, gt));
									};
									jt(X, (ut) => {
										(D(t(J)), s(() => t(J).length > 3) && ut(mt));
									});
								}
								(r(Z),
									r(U),
									P(
										(ut) =>
											xt(
												U,
												1,
												`px-0.5 py-0.5 ${ut ?? ''} hover:bg-gray-50/50 dark:hover:bg-gray-850/20 transition cursor-pointer min-w-0 flex flex-col`
											),
										[
											() => (
												t(Q),
												s(() =>
													t(Q).getDay() > 0
														? 'border-l border-gray-100/15 dark:border-gray-850/15'
														: ''
												)
											)
										]
									),
									K('click', U, () => Mt(t(Q), t(f))),
									$(it, U));
							}
						),
							r(Y),
							P(
								(it) => {
									(xt(
										Y,
										1,
										`grid grid-cols-[52px_repeat(7,1fr)] min-h-[52px] ${t(f) > 0 ? 'border-t border-gray-100/15 dark:border-gray-850/15' : ''}`
									),
										m(L, it));
								},
								[() => (t(f), s(() => (t(f) > 0 ? kt(t(f)) : '')))]
							),
							$(u, Y));
					}
				),
					r(d),
					r(F),
					r(W),
					r(w),
					r(v),
					$(o, v));
			},
			j = (o) => {
				var v = Ma(),
					w = n(v);
				(yt(
					w,
					5,
					() => t(q),
					Pt,
					(W, F) => {
						const l = nt(() => (D(B()), t(F), t(T), s(() => ot(B(), t(F), t(T)))));
						var a = Sa(),
							d = n(a),
							u = n(d, !0);
						r(d);
						var f = c(d, 2),
							Y = n(f);
						(yt(
							Y,
							5,
							() => t(l),
							(y) => y.instance_id || y.id,
							(y, L) => {
								ue(y, {
									get event() {
										return t(L);
									},
									get calendarColor() {
										return (t(h), t(L), s(() => t(h)[t(L).calendar_id]));
									},
									$$events: { click: () => vt(t(L)) }
								});
							}
						),
							r(Y),
							r(f),
							r(a),
							P(
								(y) => {
									(xt(
										a,
										1,
										`flex min-h-[52px] ${t(F) > 0 ? 'border-t border-gray-100/15 dark:border-gray-850/15' : ''}`
									),
										m(u, y));
								},
								[() => (t(F), s(() => kt(t(F))))]
							),
							K('click', f, () => Mt(B(), t(F))),
							$(W, a));
					}
				),
					r(w),
					r(v),
					$(o, v));
			};
		jt(Nt, (o) => {
			N() === 'month' ? o(zt) : N() === 'week' ? o(z, 1) : o(j, -1);
		});
	}
	(r(Tt), $(H, Tt), te(), _());
}
var ja = C('<div class="py-0.5"> </div>'),
	Aa = C('<button> </button>'),
	Na = C(`<span class="shrink-0 p-0.5 rounded opacity-0 group-hover:opacity-100
								transition-all duration-150" role="button" tabindex="-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-3"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg></span>`),
	za =
		C(`<div class="group flex items-center w-full"><button class="flex items-center gap-2 px-2 py-1 rounded-lg text-xs transition
						hover:bg-gray-50 dark:hover:bg-gray-800/50 flex-1 text-left min-w-0"><span class="shrink-0 size-2.5 rounded-full transition-opacity"></span> <span> </span> <!></button></div>`),
	Ia = C(
		'<!> <div class="flex flex-col gap-4"><div><div class="flex items-center justify-between px-1 mb-1.5 mt-1.5"><div class="text-[11px] font-medium"> </div> <div class="flex items-center gap-0.5"><button class="p-0.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-3"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg></button> <button class="p-0.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-3"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg></button></div></div> <div class="grid grid-cols-7 text-center text-[9px] text-gray-400 dark:text-gray-500 mb-0.5"></div> <div class="grid grid-cols-7 text-center text-[10px]"></div></div> <div><div class="flex items-center justify-between mb-1 px-1"><div class="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-wider"> </div></div> <!></div></div>',
		1
	);
function Ba(H, g) {
	Zt(g, !1);
	const e = () => Ht(lt, '$i18n', S),
		[S, _] = se(),
		h = p(),
		T = p(),
		E = p(),
		x = p(),
		R = p(),
		_t = p(),
		lt = oe('i18n');
	let A = tt(g, 'calendars', 24, () => []),
		q = tt(g, 'visibleCalendarIds', 24, () => new Set()),
		I = tt(g, 'currentDate', 24, () => new Date()),
		k = tt(g, 'onToggle', 8, () => {});
	tt(g, 'onCreateCalendar', 8, () => {});
	let M = tt(g, 'onDeleteCalendar', 8, () => {}),
		et = tt(g, 'onDateSelect', 8, () => {}),
		V = p(!1),
		N = p(null);
	function B(a) {
		return !a.is_default && !a.is_system;
	}
	function dt(a, d) {
		(a.stopPropagation(), i(N, d), i(V, !0));
	}
	function ct() {
		(t(N) && M()(t(N).id), i(N, null));
	}
	function ht(a) {
		return a.toDateString() === new Date().toDateString();
	}
	function $t(a) {
		t(h) + a > 11 ? (i(h, 0), he(T)) : t(h) + a < 0 ? (i(h, 11), he(T, -1)) : i(h, t(h) + a);
	}
	(rt(
		() => D(I()),
		() => {
			i(h, I().getMonth());
		}
	),
		rt(
			() => D(I()),
			() => {
				i(T, I().getFullYear());
			}
		),
		rt(
			() => (t(T), t(h)),
			() => {
				i(E, new Date(t(T), t(h), 1));
			}
		),
		rt(
			() => t(E),
			() => {
				i(
					x,
					(() => {
						const a = new Date(t(E));
						return (a.setDate(a.getDate() - a.getDay()), a);
					})()
				);
			}
		),
		rt(
			() => t(x),
			() => {
				i(
					R,
					(() => {
						const a = [],
							d = new Date(t(x));
						for (let u = 0; u < 42; u++) (a.push(new Date(d)), d.setDate(d.getDate() + 1));
						return a;
					})()
				);
			}
		),
		rt(
			() => {},
			() => {
				i(_t, [
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
				]);
			}
		),
		ie(),
		ee());
	var ot = Ia(),
		kt = Jt(ot);
	{
		let a = nt(() => (e(), s(() => e().t('Delete Calendar')))),
			d = nt(
				() => (
					e(),
					t(N),
					s(() => {
						var f;
						return e().t(
							'This will permanently delete the calendar "{{name}}" and all its events. This action cannot be undone.',
							{ name: ((f = t(N)) == null ? void 0 : f.name) ?? '' }
						);
					})
				)
			),
			u = nt(() => (e(), s(() => e().t('Delete'))));
		$e(kt, {
			get title() {
				return t(a);
			},
			get message() {
				return t(d);
			},
			get confirmLabel() {
				return t(u);
			},
			onConfirm: ct,
			get show() {
				return t(V);
			},
			set show(f) {
				i(V, f);
			},
			$$legacy: !0
		});
	}
	var At = c(kt, 2),
		St = n(At),
		Mt = n(St),
		vt = n(Mt),
		Tt = n(vt);
	r(vt);
	var Nt = c(vt, 2),
		zt = n(Nt),
		z = c(zt, 2);
	(r(Nt), r(Mt));
	var j = c(Mt, 2);
	(yt(
		j,
		4,
		() => ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		Pt,
		(a, d) => {
			var u = ja(),
				f = n(u, !0);
			(r(u), P(() => m(f, d)), $(a, u));
		}
	),
		r(j));
	var o = c(j, 2);
	(yt(
		o,
		5,
		() => t(R),
		Pt,
		(a, d) => {
			var u = Aa(),
				f = n(u, !0);
			(r(u),
				P(
					(Y, y, L, G, it) => {
						(xt(
							u,
							1,
							`w-6 h-6 flex items-center justify-center rounded-full transition
						${Y ?? ''}
						${y ?? ''}
						${L ?? ''}
						${G ?? ''}`
						),
							m(f, it));
					},
					[
						() => (
							t(d),
							t(h),
							s(() => (t(d).getMonth() !== t(h) ? 'text-gray-300 dark:text-gray-600' : ''))
						),
						() => (t(d), s(() => (ht(t(d)) ? 'bg-blue-500 text-white' : ''))),
						() => (
							t(d),
							D(I()),
							s(() =>
								t(d).toDateString() === I().toDateString() && !ht(t(d))
									? 'bg-gray-200 dark:bg-gray-700'
									: ''
							)
						),
						() => (
							t(d),
							D(I()),
							s(() =>
								!ht(t(d)) && t(d).toDateString() !== I().toDateString()
									? 'hover:bg-gray-100 dark:hover:bg-gray-800'
									: ''
							)
						),
						() => (t(d), s(() => t(d).getDate()))
					]
				),
				K('click', u, () => et()(t(d))),
				$(a, u));
		}
	),
		r(o),
		r(St));
	var v = c(St, 2),
		w = n(v),
		W = n(w),
		F = n(W, !0);
	(r(W), r(w));
	var l = c(w, 2);
	(yt(
		l,
		1,
		A,
		(a) => a.id,
		(a, d) => {
			var u = za(),
				f = n(u),
				Y = n(f),
				y = c(Y, 2),
				L = n(y, !0);
			r(y);
			var G = c(y, 2);
			{
				var it = (J) => {
						var U = Na();
						(P((Z) => Qt(U, 'title', Z), [() => (e(), s(() => e().t('Delete calendar')))]),
							K(
								'click',
								U,
								ne((Z) => dt(Z, t(d)))
							),
							$(J, U));
					},
					Q = Ge(() => (t(d), s(() => B(t(d)))));
				jt(G, (J) => {
					t(Q) && J(it);
				});
			}
			(r(f),
				r(u),
				P(
					(J, U) => {
						(ke(
							Y,
							`background-color: ${(t(d), s(() => t(d).color || '#3b82f6') ?? '')}; opacity: ${J ?? ''};`
						),
							xt(y, 1, `truncate flex-1 ${U ?? ''}`),
							m(L, (t(d), s(() => t(d).name))));
					},
					[
						() => (D(q()), t(d), s(() => (q().has(t(d).id) ? '1' : '0.25'))),
						() => (
							D(q()),
							t(d),
							s(() => (q().has(t(d).id) ? '' : 'text-gray-400 dark:text-gray-500'))
						)
					]
				),
				K('click', f, () => k()(t(d).id)),
				$(a, u));
		}
	),
		r(v),
		r(At),
		P(
			(a) => {
				(m(Tt, `${(t(_t), t(h), s(() => t(_t)[t(h)]) ?? '')} ${t(T) ?? ''}`), m(F, a));
			},
			[() => (e(), s(() => e().t('Calendars')))]
		),
		K('click', zt, () => $t(-1)),
		K('click', z, () => $t(1)),
		$(H, ot),
		te(),
		_());
}
var Fa = C('<option> </option>'),
	Ya = C(
		'<input type="time" class="bg-transparent outline-hidden"/> <span class="text-gray-300 dark:text-gray-600">–</span> <input type="time" class="bg-transparent outline-hidden"/>',
		1
	),
	Oa = C(
		'<button class="px-3 py-1 text-xs text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition" type="button"> </button>'
	),
	Pa = C('<span class="shrink-0"><!></span>'),
	Wa = C(
		'<div><div class="flex justify-between dark:text-gray-100 px-5 pt-4 pb-2"><input class="w-full text-lg bg-transparent outline-hidden font-primary placeholder:text-gray-300 dark:placeholder:text-gray-700" type="text"/> <button class="self-center shrink-0 ml-2"><!></button></div> <div class="px-5 pb-2 flex flex-col gap-3"><div><div class="mb-1 text-xs text-gray-500"> </div> <select class="w-full text-sm bg-transparent outline-hidden cursor-pointer"></select></div> <div><div class="mb-1 text-xs text-gray-500"> </div> <div class="flex items-center gap-2 text-sm flex-wrap"><input type="date" class="bg-transparent outline-hidden"/> <!> <label class="flex items-center gap-1.5 cursor-pointer text-xs text-gray-400 ml-auto"><input type="checkbox" class="accent-blue-500"/> </label></div></div> <div><div class="mb-1 text-xs text-gray-500"> </div> <input class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"/></div> <div><div class="mb-1 text-xs text-gray-500"> </div> <select class="w-full text-sm bg-transparent outline-hidden cursor-pointer"><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option></select></div> <div><div class="mb-1 text-xs text-gray-500"> </div> <textarea class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700 resize-none min-h-[4rem]" rows="3"></textarea></div></div> <div class="flex items-center justify-between px-4 pb-3.5 pt-1 gap-2"><div class="flex items-center gap-0.5 flex-1 min-w-0"><!></div> <div class="flex items-center gap-2 shrink-0"><button class="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition" type="button"> </button> <button type="button"> <!></button></div></div></div>'
	),
	La = C('<!> <!>', 1);
function Ha(H, g) {
	Zt(g, !1);
	const e = () => Ht(h, '$i18n', S),
		[S, _] = se(),
		h = oe('i18n'),
		T = ge();
	let E = tt(g, 'show', 12, !1),
		x = tt(g, 'event', 8, null),
		R = tt(g, 'calendars', 24, () => []),
		_t = tt(g, 'defaultCalendarId', 8, ''),
		lt = tt(g, 'defaultStartAt', 8, null),
		A = p(''),
		q = p(''),
		I = p(''),
		k = p(''),
		M = p(''),
		et = '',
		V = p(''),
		N = p(!1),
		B = p(''),
		dt = p(10),
		ct = p(!1),
		ht = p(!1);
	const $t = 1e6;
	function ot(z) {
		return new Date(z / $t).toISOString().slice(0, 10);
	}
	function kt(z) {
		return new Date(z / $t).toTimeString().slice(0, 5);
	}
	function At(z, j) {
		return new Date(`${z}T${j || '00:00'}`).getTime() * $t;
	}
	function St() {
		var z;
		if (x())
			(i(A, x().title),
				i(q, x().description || ''),
				i(I, x().calendar_id),
				i(k, ot(x().start_at)),
				i(M, kt(x().start_at)),
				(et = x().end_at ? ot(x().end_at) : ''),
				i(V, x().end_at ? kt(x().end_at) : ''),
				i(N, x().all_day),
				i(B, x().location || ''),
				i(dt, ((z = x().meta) == null ? void 0 : z.alert_minutes) ?? 10));
		else {
			if ((i(A, ''), i(q, ''), i(I, _t() || (R().length > 0 ? R()[0].id : '')), lt())) {
				(i(k, ot(lt())), i(M, kt(lt())));
				const j = lt() + 60 * 60 * 1e3 * $t;
				((et = ot(j)), i(V, kt(j)));
			} else {
				const j = new Date();
				(i(k, j.toISOString().slice(0, 10)), i(M, j.toTimeString().slice(0, 5)));
				const o = new Date(j.getTime() + 60 * 60 * 1e3);
				((et = o.toISOString().slice(0, 10)), i(V, o.toTimeString().slice(0, 5)));
			}
			(i(N, !1), i(B, ''), i(dt, 10));
		}
	}
	const Mt = async () => {
			var z;
			if (!t(A).trim()) {
				Et.error(e().t('Title is required'));
				return;
			}
			i(ct, !0);
			try {
				const j = At(t(k), t(N) ? '00:00' : t(M)),
					o = et ? At(et, t(N) ? '23:59' : t(V)) : void 0;
				if (x() && !((z = x().meta) != null && z.automation_id)) {
					const v = await fa(localStorage.token, x().id, {
						calendar_id: t(I),
						title: t(A).trim(),
						description: t(q).trim() || void 0,
						start_at: j,
						end_at: o,
						all_day: t(N),
						location: t(B).trim() || void 0,
						meta: { alert_minutes: t(dt) }
					});
					v && (Et.success(e().t('Event updated')), T('save', v), E(!1));
				} else {
					const v = {
							calendar_id: t(I),
							title: t(A).trim(),
							description: t(q).trim() || void 0,
							start_at: j,
							end_at: o,
							all_day: t(N),
							location: t(B).trim() || void 0,
							meta: { alert_minutes: t(dt) }
						},
						w = await ga(localStorage.token, v);
					w && (Et.success(e().t('Event created')), T('save', w), E(!1));
				}
			} catch (j) {
				Et.error(`${j}`);
			} finally {
				i(ct, !1);
			}
		},
		vt = async () => {
			var z;
			if (!(!x() || ((z = x().meta) != null && z.automation_id))) {
				i(ct, !0);
				try {
					(await pa(localStorage.token, x().id),
						Et.success(e().t('Event deleted')),
						T('delete', x()),
						E(!1));
				} catch (j) {
					Et.error(`${j}`);
				} finally {
					i(ct, !1);
				}
			}
		};
	(rt(
		() => D(E()),
		() => {
			E() && St();
		}
	),
		ie(),
		ee());
	var Tt = La(),
		Nt = Jt(Tt);
	na(Nt, {
		size: 'md',
		get show() {
			return E();
		},
		set show(z) {
			E(z);
		},
		children: (z, j) => {
			var o = Wa(),
				v = n(o),
				w = n(v);
			Rt(w);
			var W = c(w, 2),
				F = n(W);
			(oa(F, { className: 'size-5' }), r(W), r(v));
			var l = c(v, 2),
				a = n(l),
				d = n(a),
				u = n(d, !0);
			r(d);
			var f = c(d, 2);
			(yt(
				f,
				5,
				() => (D(R()), s(() => R().filter((b) => b.id !== '__scheduled_tasks__'))),
				(b) => b.id,
				(b, O) => {
					var ft = Fa(),
						Yt = n(ft, !0);
					r(ft);
					var Ot = {};
					(P(() => {
						(m(Yt, (t(O), s(() => t(O).name))),
							Ot !== (Ot = (t(O), s(() => t(O).id))) &&
								(ft.value = (ft.__value = (t(O), s(() => t(O).id))) ?? ''));
					}),
						$(b, ft));
				}
			),
				r(f),
				r(a));
			var Y = c(a, 2),
				y = n(Y),
				L = n(y, !0);
			r(y);
			var G = c(y, 2),
				it = n(G);
			Rt(it);
			var Q = c(it, 2);
			{
				var J = (b) => {
					var O = Ya(),
						ft = Jt(O);
					Rt(ft);
					var Yt = c(ft, 4);
					(Rt(Yt),
						qt(
							ft,
							() => t(M),
							(Ot) => i(M, Ot)
						),
						qt(
							Yt,
							() => t(V),
							(Ot) => i(V, Ot)
						),
						$(b, O));
				};
				jt(Q, (b) => {
					t(N) || b(J);
				});
			}
			var U = c(Q, 2),
				Z = n(U);
			Rt(Z);
			var st = c(Z);
			(r(U), r(G), r(Y));
			var X = c(Y, 2),
				mt = n(X),
				ut = n(mt, !0);
			r(mt);
			var gt = c(mt, 2);
			(Rt(gt), r(X));
			var It = c(X, 2),
				Wt = n(It),
				le = n(Wt, !0);
			r(Wt);
			var Ut = c(Wt, 2),
				Lt = n(Ut),
				bt = n(Lt, !0);
			(r(Lt), (Lt.value = Lt.__value = -1));
			var at = c(Lt),
				Bt = n(at, !0);
			(r(at), (at.value = at.__value = 0));
			var Dt = c(at),
				Ft = n(Dt, !0);
			(r(Dt), (Dt.value = Dt.__value = 5));
			var wt = c(Dt),
				Ct = n(wt, !0);
			(r(wt), (wt.value = wt.__value = 10));
			var pt = c(wt),
				Gt = n(pt, !0);
			(r(pt), (pt.value = pt.__value = 15));
			var Xt = c(pt),
				Se = n(Xt, !0);
			(r(Xt), (Xt.value = Xt.__value = 30));
			var ae = c(Xt),
				Me = n(ae, !0);
			(r(ae), (ae.value = ae.__value = 60), r(Ut), r(It));
			var fe = c(It, 2),
				de = n(fe),
				Te = n(de, !0);
			r(de);
			var ce = c(de, 2);
			(Xe(ce), r(fe), r(l));
			var pe = c(l, 2),
				ve = n(pe),
				Ee = n(ve);
			{
				var je = (b) => {
					var O = Oa(),
						ft = n(O, !0);
					(r(O),
						P(
							(Yt) => {
								((O.disabled = t(ct)), m(ft, Yt));
							},
							[() => (e(), s(() => e().t('Delete')))]
						),
						K('click', O, () => i(ht, !0)),
						$(b, O));
				};
				jt(Ee, (b) => {
					(D(x()),
						s(() => {
							var O;
							return x() && !((O = x().meta) != null && O.automation_id);
						}) && b(je));
				});
			}
			r(ve);
			var xe = c(ve, 2),
				re = n(xe),
				Ae = n(re, !0);
			r(re);
			var Kt = c(re, 2),
				_e = n(Kt),
				Ne = c(_e);
			{
				var ze = (b) => {
					var O = Pa(),
						ft = n(O);
					(Ce(ft, {}), r(O), $(b, O));
				};
				jt(Ne, (b) => {
					t(ct) && b(ze);
				});
			}
			(r(Kt),
				r(xe),
				r(pe),
				r(o),
				P(
					(b, O, ft, Yt, Ot, Ie, Be, Fe, Ye, Oe, Pe, We, Le, He, Je, Ue, Re, qe, Ve) => {
						(Qt(w, 'placeholder', b),
							Qt(W, 'aria-label', O),
							m(u, ft),
							m(L, Yt),
							m(st, ` ${Ot ?? ''}`),
							m(ut, Ie),
							Qt(gt, 'placeholder', Be),
							m(le, Fe),
							m(bt, Ye),
							m(Bt, Oe),
							m(Ft, Pe),
							m(Ct, We),
							m(Gt, Le),
							m(Se, He),
							m(Me, Je),
							m(Te, Ue),
							Qt(ce, 'placeholder', Re),
							m(Ae, qe),
							xt(
								Kt,
								1,
								`px-3.5 py-1.5 text-sm bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 ${t(ct) ? 'cursor-not-allowed' : ''}`
							),
							(Kt.disabled = t(ct)),
							m(_e, `${Ve ?? ''} `));
					},
					[
						() => (e(), s(() => e().t('Event title'))),
						() => (e(), s(() => e().t('Close'))),
						() => (e(), s(() => e().t('Calendar'))),
						() => (e(), s(() => e().t('When'))),
						() => (e(), s(() => e().t('All day'))),
						() => (e(), s(() => e().t('Location'))),
						() => (e(), s(() => e().t('Add location'))),
						() => (e(), s(() => e().t('Reminder'))),
						() => (e(), s(() => e().t('None'))),
						() => (e(), s(() => e().t('At time of event'))),
						() => (e(), s(() => e().t('5 minutes before'))),
						() => (e(), s(() => e().t('10 minutes before'))),
						() => (e(), s(() => e().t('15 minutes before'))),
						() => (e(), s(() => e().t('30 minutes before'))),
						() => (e(), s(() => e().t('1 hour before'))),
						() => (e(), s(() => e().t('Description'))),
						() => (e(), s(() => e().t('Add description'))),
						() => (e(), s(() => e().t('Cancel'))),
						() => (
							D(x()),
							e(),
							s(() => {
								var b;
								return x() && !((b = x().meta) != null && b.automation_id)
									? e().t('Save')
									: e().t('Create');
							})
						)
					]
				),
				qt(
					w,
					() => t(A),
					(b) => i(A, b)
				),
				K('click', W, () => E(!1)),
				be(
					f,
					() => t(I),
					(b) => i(I, b)
				),
				qt(
					it,
					() => t(k),
					(b) => i(k, b)
				),
				ra(
					Z,
					() => t(N),
					(b) => i(N, b)
				),
				qt(
					gt,
					() => t(B),
					(b) => i(B, b)
				),
				be(
					Ut,
					() => t(dt),
					(b) => i(dt, b)
				),
				qt(
					ce,
					() => t(q),
					(b) => i(q, b)
				),
				K('click', re, () => E(!1)),
				K('click', Kt, Mt),
				$(z, o));
		},
		$$slots: { default: !0 },
		$$legacy: !0
	});
	var zt = c(Nt, 2);
	{
		let z = nt(() => (e(), s(() => e().t('Delete Event')))),
			j = nt(() => (e(), s(() => e().t('This action cannot be undone. Do you wish to continue?'))));
		$e(zt, {
			get title() {
				return t(z);
			},
			get message() {
				return t(j);
			},
			get show() {
				return t(ht);
			},
			set show(o) {
				i(ht, o);
			},
			$$events: { confirm: vt },
			$$legacy: !0
		});
	}
	($(H, Tt), te(), _());
}
var Ja = C(
		'<button id="sidebar-toggle-button" class="cursor-pointer flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-850 transition"><div class="self-center p-1.5"><!></div></button>'
	),
	Ua = C('<div><!></div>'),
	Ra = C(
		'<span class="inline-flex h-input px-0.5 outline-hidden bg-transparent truncate line-clamp-1"> </span> <!>',
		1
	),
	qa = C(' <div><!></div>', 1),
	Va = C(
		'<nav class="px-3 pt-2 pb-2 backdrop-blur-xl drag-region select-none shrink-0"><div class="flex items-center gap-1"><!> <div class="flex w-full items-center"><div class="flex items-center gap-0.5 py-1"><span class="min-w-fit px-1 text-sm select-none"> </span> <button class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-850 transition" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3.5 text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg></button> <button class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-850 transition" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3.5 text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg></button></div> <div class="ml-auto flex items-center gap-1"><button class="hidden sm:inline text-xs px-2 py-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-850 transition text-gray-500 hover:text-gray-700 dark:hover:text-white"> </button> <!> <button class="ml-1 px-2 py-1.5 text-xs gap-1 rounded-xl bg-black text-white dark:bg-white dark:text-black transition text-sm flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> <span class="hidden sm:inline"> </span></button></div></div></div></nav> <div class="flex flex-1 min-h-0"><div class="hidden md:flex flex-col w-56 shrink-0 pr-1.5 pl-3 overflow-y-auto"><!></div> <div class="flex-1 flex flex-col min-h-0"><!></div></div>',
		1
	),
	Ga = C('<div class="w-full h-full flex justify-center items-center"><!></div>'),
	Xa = C('<!> <div><!></div>', 1);
function wr(H, g) {
	Zt(g, !1);
	const e = () => Ht(_t, '$i18n', T),
		S = () => Ht(ea, '$WEBUI_NAME', T),
		_ = () => Ht(ye, '$showSidebar', T),
		h = () => Ht(aa, '$mobile', T),
		[T, E] = se(),
		x = p(),
		R = p(),
		_t = oe('i18n');
	let lt = p(!1),
		A = p([]),
		q = p([]),
		I = p(new Set()),
		k = p('month'),
		M = p(new Date()),
		et = p(!1),
		V = p(null),
		N = p(null);
	const B = [
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
		dt = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	function ct() {
		const l = new Date(t(M));
		let a, d;
		return (
			t(k) === 'month'
				? ((a = new Date(l.getFullYear(), l.getMonth(), 1)),
					a.setDate(a.getDate() - a.getDay()),
					(d = new Date(a)),
					d.setDate(d.getDate() + 42))
				: t(k) === 'week'
					? ((a = new Date(l)),
						a.setDate(a.getDate() - a.getDay()),
						a.setHours(0, 0, 0, 0),
						(d = new Date(a)),
						d.setDate(d.getDate() + 7))
					: ((a = new Date(l.getFullYear(), l.getMonth(), l.getDate())),
						(d = new Date(a)),
						d.setDate(d.getDate() + 1)),
			{ start: a.toISOString(), end: d.toISOString() }
		);
	}
	async function ht() {
		try {
			(i(A, (await ca(localStorage.token)) ?? []), i(I, new Set(t(A).map((l) => l.id))));
		} catch (l) {
			i(A, []);
		}
	}
	async function $t() {
		try {
			const { start: l, end: a } = ct();
			i(q, await ua(localStorage.token, l, a));
		} catch (l) {
			Et.error(`${l}`);
		}
	}
	async function ot() {
		await $t();
	}
	function kt(l) {
		const a = new Set(t(I));
		(a.has(l) ? a.delete(l) : a.add(l), i(I, a));
	}
	async function At(l) {
		try {
			(await va(localStorage.token, l))
				? (Et.success(e().t('Calendar deleted')), await ht(), await ot())
				: Et.error(e().t('Failed to delete calendar'));
		} catch (a) {
			Et.error(`${a}`);
		}
	}
	function St(l) {
		(i(V, null), i(N, l.detail.start_at), i(et, !0));
	}
	function Mt(l) {
		var d, u;
		const a = l.detail;
		if ((d = a.meta) != null && d.automation_id) {
			(u = a.meta) != null && u.chat_id
				? we(`/c/${a.meta.chat_id}`)
				: we(`/automations/${a.meta.automation_id}`);
			return;
		}
		(i(V, a), i(N, null), i(et, !0));
	}
	async function vt() {
		(await me(), ot());
	}
	async function Tt(l) {
		(i(M, l), await me(), ot());
	}
	function Nt() {
		(i(V, null), i(N, null), i(et, !0));
	}
	function zt(l) {
		const a = new Date(t(M));
		(t(k) === 'month'
			? (a.setDate(1), a.setMonth(a.getMonth() + l))
			: t(k) === 'week'
				? a.setDate(a.getDate() + l * 7)
				: a.setDate(a.getDate() + l),
			i(M, a),
			vt());
	}
	function z() {
		(i(M, new Date()), vt());
	}
	(Ke(async () => {
		(await ht(), await ot(), i(lt, !0));
	}),
		rt(
			() => t(A),
			() => {
				var l, a;
				i(
					x,
					((l = t(A).find((d) => d.is_default)) == null ? void 0 : l.id) ||
						((a = t(A)[0]) == null ? void 0 : a.id) ||
						''
				);
			}
		),
		rt(
			() => (t(k), t(M)),
			() => {
				i(
					R,
					t(k) === 'day'
						? `${dt[t(M).getDay()]}, ${B[t(M).getMonth()]} ${t(M).getDate()}, ${t(M).getFullYear()}`
						: `${B[t(M).getMonth()]} ${t(M).getFullYear()}`
				);
			}
		),
		ie(),
		ee());
	var j = Xa();
	ta('1d6n9tu', (l) => {
		Qe(
			(a) => {
				Ze.title = `${a ?? ''} • ${S() ?? ''}`;
			},
			[() => (e(), s(() => e().t('Calendar')))]
		);
	});
	var o = Jt(j);
	Ha(o, {
		get event() {
			return t(V);
		},
		get calendars() {
			return t(A);
		},
		get defaultCalendarId() {
			return t(x);
		},
		get defaultStartAt() {
			return t(N);
		},
		get show() {
			return t(et);
		},
		set show(l) {
			i(et, l);
		},
		$$events: { save: () => ot(), delete: () => ot() },
		$$legacy: !0
	});
	var v = c(o, 2),
		w = n(v);
	{
		var W = (l) => {
				var a = Va(),
					d = Jt(a),
					u = n(d),
					f = n(u);
				{
					var Y = (bt) => {
						var at = Ua(),
							Bt = n(at);
						{
							let Dt = nt(
								() => (_(), e(), s(() => (_() ? e().t('Close Sidebar') : e().t('Open Sidebar'))))
							);
							De(Bt, {
								get content() {
									return t(Dt);
								},
								interactive: !0,
								children: (Ft, wt) => {
									var Ct = Ja(),
										pt = n(Ct),
										Gt = n(pt);
									(ia(Gt, {}), r(pt), r(Ct), K('click', Ct, () => ye.set(!_())), $(Ft, Ct));
								},
								$$slots: { default: !0 }
							});
						}
						(r(at),
							P(() => xt(at, 1, `${_() ? 'md:hidden' : ''} flex flex-none items-center`)),
							$(bt, at));
					};
					jt(f, (bt) => {
						h() && bt(Y);
					});
				}
				var y = c(f, 2),
					L = n(y),
					G = n(L),
					it = n(G, !0);
				r(G);
				var Q = c(G, 2),
					J = c(Q, 2);
				r(L);
				var U = c(L, 2),
					Z = n(U),
					st = n(Z, !0);
				r(Z);
				var X = c(Z, 2);
				{
					let bt = nt(
						() => (
							e(),
							s(() => [
								{ value: 'day', label: e().t('Day') },
								{ value: 'week', label: e().t('Week') },
								{ value: 'month', label: e().t('Month') }
							])
						)
					);
					sa(X, {
						get items() {
							return t(bt);
						},
						onChange: () => vt(),
						triggerClass:
							'relative flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-gray-850 rounded-xl text-xs',
						contentClass:
							'rounded-2xl w-40 p-1 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-850 dark:text-white shadow-lg',
						align: 'end',
						get value() {
							return t(k);
						},
						set value(at) {
							i(k, at);
						},
						$$slots: {
							trigger: (at, Bt) => {
								const Dt = nt(() => Bt.selectedLabel);
								var Ft = Ra(),
									wt = Jt(Ft),
									Ct = n(wt, !0);
								r(wt);
								var pt = c(wt, 2);
								(da(pt, { className: 'size-3.5', strokeWidth: '2.5' }),
									P(() => m(Ct, t(Dt))),
									$(at, Ft));
							},
							item: (at, Bt) => {
								const Dt = nt(() => Bt.item),
									Ft = nt(() => Bt.selected);
								var wt = qa(),
									Ct = Jt(wt),
									pt = c(Ct),
									Gt = n(pt);
								(la(Gt, {}),
									r(pt),
									P(() => {
										(m(Ct, `${(D(t(Dt)), s(() => t(Dt).label) ?? '')} `),
											xt(pt, 1, `ml-auto ${t(Ft) ? '' : 'invisible'}`));
									}),
									$(at, wt));
							}
						},
						$$legacy: !0
					});
				}
				var mt = c(X, 2),
					ut = c(n(mt), 2),
					gt = n(ut, !0);
				(r(ut), r(mt), r(U), r(y), r(u), r(d));
				var It = c(d, 2),
					Wt = n(It),
					le = n(Wt);
				(Ba(le, {
					get calendars() {
						return t(A);
					},
					get visibleCalendarIds() {
						return t(I);
					},
					get currentDate() {
						return t(M);
					},
					onToggle: kt,
					onDeleteCalendar: At,
					onDateSelect: Tt
				}),
					r(Wt));
				var Ut = c(Wt, 2),
					Lt = n(Ut);
				(Ea(Lt, {
					get events() {
						return t(q);
					},
					get calendars() {
						return t(A);
					},
					get visibleCalendarIds() {
						return t(I);
					},
					get view() {
						return t(k);
					},
					set view(bt) {
						i(k, bt);
					},
					get currentDate() {
						return t(M);
					},
					set currentDate(bt) {
						i(M, bt);
					},
					$$events: { createEvent: St, eventClick: Mt, navigate: vt, viewChange: vt },
					$$legacy: !0
				}),
					r(Ut),
					r(It),
					P(
						(bt, at) => {
							(m(it, t(R)), m(st, bt), m(gt, at));
						},
						[() => (e(), s(() => e().t('Today'))), () => (e(), s(() => e().t('New Event')))]
					),
					K('click', Q, () => zt(-1)),
					K('click', J, () => zt(1)),
					K('click', Z, z),
					K('click', mt, Nt),
					$(l, a));
			},
			F = (l) => {
				var a = Ga(),
					d = n(a);
				(Ce(d, { className: 'size-5' }), r(a), $(l, a));
			};
		jt(w, (l) => {
			t(lt) ? l(W) : l(F, -1);
		});
	}
	(r(v),
		P(() =>
			xt(
				v,
				1,
				`flex flex-col w-full h-screen max-h-[100dvh] transition-width duration-200 ease-in-out ${_() ? 'md:max-w-[calc(100%-var(--sidebar-width))]' : ''} max-w-full`
			)
		),
		$(H, j),
		te(),
		E());
}
export { wr as component };
//# sourceMappingURL=24.BX98V7SB.js.map
