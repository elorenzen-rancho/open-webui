import './CWj6FrbW.js';
import './69_IOA4Y.js';
import {
	p as Se,
	g as je,
	o as rt,
	k as m,
	c as r,
	r as a,
	n as c,
	x as re,
	z as i,
	t as F,
	d as w,
	a as u,
	b as Te,
	e as fe,
	s as Fe,
	m as N,
	aX as M,
	l as e,
	u as H,
	f as _,
	A as yt,
	h as wt,
	i as He,
	E as it,
	D as Ke,
	w as ta,
	y as aa,
	q as me,
	b3 as E,
	aY as ha,
	B as _s
} from './CD8kWLvT.js';
import { i as q } from './CdIW-EUl.js';
import { e as Ae, i as Be } from './BUYMbiFA.js';
import { r as $t, a as be, e as ya, s as pa, f as xs } from './BfA5TzUS.js';
import { b as ot, c as bs } from './QcGoGJ5n.js';
import { b as hs } from './BCA7d6a5.js';
import { p as ys } from './Bfc47y5P.js';
import { i as Me } from './BolXBFGq.js';
import { p as te } from './DbBXQmQ3.js';
import { t as dt } from './DtbOSK9Q.js';
import { t as ga, f as _a, a as $s, u as ws } from './Bumd5cCN.js';
import { D as xa, a as ht } from './CHheSG1Y.js';
import { g as ks } from './BbCz17I0.js';
import { g as Is } from './Cx4D1nwr.js';
import { g as Ss } from './dLLUdGSv.js';
import { a as js, K as Ts, A as Fs } from './Dqf09jWH.js';
import { T as As } from './BqkwFjAH.js';
import { C as Ye } from './Bx8RuPyP.js';
import { T as Ie } from './BUv1YIBp.js';
import { d as Ms } from './CszhFJD9.js';
import { m as vt } from './DgCmIQGJ.js';
import { T as ba } from './DTFIeVjj.js';
import './BbDdJXLs.js';
import './sSXaIhmU.js';
import './D8_neGVh.js';
import './B5CD4DQe.js';
import { S as Cs } from './BqNz_fa8.js';
import { F as Ps } from './CsWaRabF.js';
import { P as Os } from './Cr47sKic.js';
import { A as Ds, L as zs } from './CbuOKq_q.js';
import { e as Bs } from './RzfOdOIn.js';
var Ls = _('<div class=" py-0.5 text-sm w-full capitalize font-medium"> </div>'),
	Es = _(
		'<div class=" flex items-center gap-2 mr-3"><div class="self-center flex items-center"><!></div> <!></div>'
	),
	Ns = _('<div class=" flex items-center flex-wrap"></div>'),
	Us = _(
		'<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs font-medium text-gray-500"> </div></div> <div class="flex flex-col mb-1"><!></div> <div class=" text-xs dark:text-gray-700"> </div></div>'
	);
function Rs(X, T) {
	Se(T, !1);
	const t = () => fe(v, '$i18n', x),
		[x, G] = Fe();
	let V = te(T, 'tools', 24, () => []),
		o = N({}),
		A = te(T, 'selectedToolIds', 28, () => []);
	const v = je('i18n');
	(rt(() => {
		m(
			o,
			V().reduce((S, $) => ((S[$.id] = { ...$, selected: A().includes($.id) }), S), {})
		);
	}),
		Me());
	var P = Us(),
		L = r(P),
		R = r(L),
		n = r(R, !0);
	(a(R), a(L));
	var y = c(L, 2),
		z = r(y);
	{
		var b = (S) => {
			var $ = Ns();
			(Ae(
				$,
				5,
				() => (e(o), i(() => Object.keys(e(o)))),
				Be,
				(f, p) => {
					var O = Es(),
						D = r(O),
						U = r(D);
					{
						let s = H(() => (e(o), e(p), i(() => (e(o)[e(p)].selected ? 'checked' : 'unchecked'))));
						Ye(U, {
							get state() {
								return e(s);
							},
							$$events: {
								change: (h) => {
									(M(o, (e(o)[e(p)].selected = h.detail === 'checked')),
										A(Object.keys(e(o)).filter((C) => e(o)[C].selected)));
								}
							}
						});
					}
					a(D);
					var j = c(D, 2);
					{
						let s = H(
							() => (
								e(o),
								e(p),
								i(() => {
									var h, C;
									return (
										((C = (h = e(o)[e(p)]) == null ? void 0 : h.meta) == null
											? void 0
											: C.description) ?? e(o)[e(p)].id
									);
								})
							)
						);
						Ie(j, {
							get content() {
								return e(s);
							},
							children: (h, C) => {
								var Z = Ls(),
									Q = r(Z, !0);
								(a(Z), F(() => w(Q, (e(o), e(p), i(() => e(o)[e(p)].name)))), u(h, Z));
							},
							$$slots: { default: !0 }
						});
					}
					(a(O), u(f, O));
				}
			),
				a($),
				u(S, $));
		};
		q(z, (S) => {
			(re(V()), i(() => V().length > 0) && S(b));
		});
	}
	a(y);
	var I = c(y, 2),
		k = r(I, !0);
	(a(I),
		a(P),
		F(
			(S, $) => {
				(w(n, S), w(k, $));
			},
			[
				() => (t(), i(() => t().t('Tools'))),
				() => (
					t(),
					i(() => t().t('To select toolkits here, add them to the "Tools" workspace first.'))
				)
			]
		),
		u(X, P),
		Te(),
		G());
}
var qs = _('<div class=" py-0.5 text-sm w-full capitalize font-medium"> </div>'),
	Gs = _(
		'<div class=" flex items-center gap-2 mr-3"><div class="self-center flex items-center"><!></div> <!></div>'
	),
	Hs = _('<div class=" flex items-center flex-wrap"></div>'),
	Ws = _(
		'<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs font-medium text-gray-500"> </div></div> <div class="flex flex-col mb-1"><!></div> <div class=" text-xs dark:text-gray-700"> </div></div>'
	);
function Js(X, T) {
	Se(T, !1);
	const t = () => fe(A, '$i18n', x),
		[x, G] = Fe();
	let V = te(T, 'selectedSkillIds', 28, () => []),
		o = N({});
	const A = je('i18n');
	(rt(async () => {
		const S = await Ms(localStorage.token).catch(() => null),
			$ = (S == null ? void 0 : S.items) ?? [];
		m(
			o,
			$.reduce((f, p) => ((f[p.id] = { ...p, selected: V().includes(p.id) }), f), {})
		);
	}),
		Me());
	var v = Ws(),
		P = r(v),
		L = r(P),
		R = r(L, !0);
	(a(L), a(P));
	var n = c(P, 2),
		y = r(n);
	{
		var z = (S) => {
				var $ = Hs();
				(Ae(
					$,
					5,
					() => (e(o), i(() => Object.keys(e(o)))),
					Be,
					(f, p) => {
						var O = Gs(),
							D = r(O),
							U = r(D);
						{
							let s = H(
								() => (e(o), e(p), i(() => (e(o)[e(p)].selected ? 'checked' : 'unchecked')))
							);
							Ye(U, {
								get state() {
									return e(s);
								},
								$$events: {
									change: (h) => {
										(M(o, (e(o)[e(p)].selected = h.detail === 'checked')),
											V(Object.keys(e(o)).filter((C) => e(o)[C].selected)));
									}
								}
							});
						}
						a(D);
						var j = c(D, 2);
						{
							let s = H(
								() => (
									e(o),
									e(p),
									i(() => {
										var h;
										return ((h = e(o)[e(p)]) == null ? void 0 : h.description) ?? e(o)[e(p)].id;
									})
								)
							);
							Ie(j, {
								get content() {
									return e(s);
								},
								children: (h, C) => {
									var Z = qs(),
										Q = r(Z, !0);
									(a(Z), F(() => w(Q, (e(o), e(p), i(() => e(o)[e(p)].name)))), u(h, Z));
								},
								$$slots: { default: !0 }
							});
						}
						(a(O), u(f, O));
					}
				),
					a($),
					u(S, $));
			},
			b = yt(() => (e(o), i(() => Object.keys(e(o)).length > 0)));
		q(y, (S) => {
			e(b) && S(z);
		});
	}
	a(n);
	var I = c(n, 2),
		k = r(I, !0);
	(a(I),
		a(v),
		F(
			(S, $) => {
				(w(R, S), w(k, $));
			},
			[
				() => (t(), i(() => t().t('Skills'))),
				() => (
					t(),
					i(() => t().t('To select skills here, add them to the "Skills" workspace first.'))
				)
			]
		),
		u(X, v),
		Te(),
		G());
}
var Vs = _(
		'<div class=" flex items-center gap-2 mr-3"><div class="self-center flex items-center"><!></div> <div class=" py-0.5 text-sm w-full capitalize font-medium"><!></div></div>'
	),
	Zs = _(
		'<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs font-medium text-gray-500"> </div></div> <div class="flex flex-col"><div class=" flex items-center flex-wrap"></div></div></div>'
	);
function Ks(X, T) {
	Se(T, !1);
	const t = () => fe(V, '$i18n', x),
		[x, G] = Fe(),
		V = je('i18n');
	let o = te(T, 'filters', 24, () => []),
		A = te(T, 'selectedFilterIds', 28, () => []),
		v = N({});
	(rt(() => {
		m(
			v,
			o().reduce((n, y) => ((n[y.id] = { ...y, selected: A().includes(y.id) }), n), {})
		);
	}),
		Me());
	var P = wt(),
		L = He(P);
	{
		var R = (n) => {
			var y = Zs(),
				z = r(y),
				b = r(z),
				I = r(b, !0);
			(a(b), a(z));
			var k = c(z, 2),
				S = r(k);
			(Ae(
				S,
				5,
				() => (e(v), i(() => Object.keys(e(v)))),
				Be,
				($, f) => {
					var p = Vs(),
						O = r(p),
						D = r(O);
					{
						let s = H(
							() => (
								e(v),
								e(f),
								i(() => (e(v)[e(f)].is_global || e(v)[e(f)].selected ? 'checked' : 'unchecked'))
							)
						);
						Ye(D, {
							get state() {
								return e(s);
							},
							get disabled() {
								return (e(v), e(f), i(() => e(v)[e(f)].is_global));
							},
							$$events: {
								change: (h) => {
									e(v)[e(f)].is_global ||
										(M(v, (e(v)[e(f)].selected = h.detail === 'checked')),
										A(Object.keys(e(v)).filter((C) => e(v)[C].selected)));
								}
							}
						});
					}
					a(O);
					var U = c(O, 2),
						j = r(U);
					(Ie(j, {
						get content() {
							return (e(v), e(f), i(() => e(v)[e(f)].meta.description));
						},
						children: (s, h) => {
							it();
							var C = Ke();
							(F(() => w(C, (e(v), e(f), i(() => e(v)[e(f)].name)))), u(s, C));
						},
						$$slots: { default: !0 }
					}),
						a(U),
						a(p),
						u($, p));
				}
			),
				a(S),
				a(k),
				a(y),
				F(($) => w(I, $), [() => (t(), i(() => t().t('Filters')))]),
				u(n, y));
		};
		q(L, (n) => {
			(re(o()), i(() => o().length > 0) && n(R));
		});
	}
	(u(X, P), Te(), G());
}
var Ys = _(
		'<div class=" flex items-center gap-2 mr-3"><div class="self-center flex items-center"><!></div> <div class=" py-0.5 text-sm w-full capitalize font-medium"><!></div></div>'
	),
	Xs = _(
		'<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs font-medium text-gray-500"> </div></div> <div class="flex flex-col"><div class=" flex items-center flex-wrap"></div></div></div>'
	);
function Qs(X, T) {
	Se(T, !1);
	const t = () => fe(V, '$i18n', x),
		[x, G] = Fe(),
		V = je('i18n');
	let o = te(T, 'actions', 24, () => []),
		A = te(T, 'selectedActionIds', 28, () => []),
		v = N({});
	(rt(() => {
		m(
			v,
			o().reduce((n, y) => ((n[y.id] = { ...y, selected: A().includes(y.id) }), n), {})
		);
	}),
		Me());
	var P = wt(),
		L = He(P);
	{
		var R = (n) => {
			var y = Xs(),
				z = r(y),
				b = r(z),
				I = r(b, !0);
			(a(b), a(z));
			var k = c(z, 2),
				S = r(k);
			(Ae(
				S,
				5,
				() => (e(v), i(() => Object.keys(e(v)))),
				Be,
				($, f) => {
					var p = Ys(),
						O = r(p),
						D = r(O);
					{
						let s = H(
							() => (
								e(v),
								e(f),
								i(() => (e(v)[e(f)].is_global || e(v)[e(f)].selected ? 'checked' : 'unchecked'))
							)
						);
						Ye(D, {
							get state() {
								return e(s);
							},
							get disabled() {
								return (e(v), e(f), i(() => e(v)[e(f)].is_global));
							},
							$$events: {
								change: (h) => {
									e(v)[e(f)].is_global ||
										(M(v, (e(v)[e(f)].selected = h.detail === 'checked')),
										A(Object.keys(e(v)).filter((C) => e(v)[C].selected)));
								}
							}
						});
					}
					a(O);
					var U = c(O, 2),
						j = r(U);
					(Ie(j, {
						get content() {
							return (e(v), e(f), i(() => e(v)[e(f)].meta.description));
						},
						children: (s, h) => {
							it();
							var C = Ke();
							(F(() => w(C, (e(v), e(f), i(() => e(v)[e(f)].name)))), u(s, C));
						},
						$$slots: { default: !0 }
					}),
						a(U),
						a(p),
						u($, p));
				}
			),
				a(S),
				a(k),
				a(y),
				F(($) => w(I, $), [() => (t(), i(() => t().t('Actions')))]),
				u(n, y));
		};
		q(L, (n) => {
			(re(o()), i(() => o().length > 0) && n(R));
		});
	}
	(u(X, P), Te(), G());
}
var er = _(
		'<div class=" flex items-center gap-2 mr-3"><!> <div class=" py-0.5 text-sm capitalize"><!></div></div>'
	),
	tr = _(
		'<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs font-medium text-gray-500"> </div></div> <div class="flex items-center mt-2 flex-wrap"></div></div>'
	);
function ar(X, T) {
	Se(T, !1);
	const t = () => fe(o, '$i18n', x),
		[x, G] = Fe(),
		V = N(),
		o = je('i18n'),
		A = {
			vision: { label: t().t('Vision'), description: t().t('Model accepts image inputs') },
			file_upload: { label: t().t('File Upload'), description: t().t('Model accepts file inputs') },
			file_context: {
				label: t().t('File Context'),
				description: t().t('Inject file content into conversation context')
			},
			web_search: {
				label: t().t('Web Search'),
				description: t().t('Model can search the web for information')
			},
			image_generation: {
				label: t().t('Image Generation'),
				description: t().t('Model can generate images based on text prompts')
			},
			code_interpreter: {
				label: t().t('Code Interpreter'),
				description: t().t('Model can execute code and perform calculations')
			},
			terminal: {
				label: t().t('Terminal'),
				description: t().t(
					'Model can access Open Terminal for command execution and file management'
				)
			},
			usage: {
				label: t().t('Usage'),
				description: t().t(
					'Sends `stream_options: { include_usage: true }` in the request.\nSupported providers will return token usage information in the response when set.'
				)
			},
			citations: {
				label: t().t('Citations'),
				description: t().t('Displays citations in the response')
			},
			status_updates: {
				label: t().t('Status Updates'),
				description: t().t('Displays status updates (e.g., web search progress) in the response')
			},
			builtin_tools: {
				label: t().t('Builtin Tools'),
				description: t().t(
					'Automatically inject system tools in native function calling mode (e.g., timestamps, memory, chat history, notes, etc.)'
				)
			}
		};
	let v = te(T, 'capabilities', 28, () => ({}));
	(ta(
		() => re(v()),
		() => {
			m(
				V,
				Object.keys(A).filter((z) => !(z === 'file_context' && !v().file_upload))
			);
		}
	),
		aa(),
		Me());
	var P = tr(),
		L = r(P),
		R = r(L),
		n = r(R, !0);
	(a(R), a(L));
	var y = c(L, 2);
	(Ae(
		y,
		5,
		() => e(V),
		Be,
		(z, b) => {
			var I = er(),
				k = r(I);
			{
				let f = H(() => (re(v()), e(b), i(() => (v()[e(b)] ? 'checked' : 'unchecked'))));
				Ye(k, {
					get state() {
						return e(f);
					},
					$$events: {
						change: (p) => {
							v((v()[e(b)] = p.detail === 'checked'), !0);
						}
					}
				});
			}
			var S = c(k, 2),
				$ = r(S);
			{
				let f = H(() => (re(vt), e(b), i(() => vt.parse(A[e(b)].description))));
				Ie($, {
					get content() {
						return e(f);
					},
					children: (p, O) => {
						it();
						var D = Ke();
						(F((U) => w(D, U), [() => (t(), e(b), i(() => t().t(A[e(b)].label)))]), u(p, D));
					},
					$$slots: { default: !0 }
				});
			}
			(a(S), a(I), u(z, I));
		}
	),
		a(y),
		a(P),
		F((z) => w(n, z), [() => (t(), i(() => t().t('Capabilities')))]),
		u(X, P),
		Te(),
		G());
}
var sr = _(
		'<div class=" flex items-center gap-2 mr-3"><div class="self-center flex items-center"><!></div> <div class=" py-0.5 text-sm w-full capitalize font-medium"><!></div></div>'
	),
	rr = _('<div class=" flex items-center flex-wrap"></div>'),
	ir = _(
		'<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs text-gray-500 font-medium"> </div></div> <div class="flex flex-col"><!></div></div>'
	);
function lr(X, T) {
	Se(T, !1);
	const t = () => fe(V, '$i18n', x),
		[x, G] = Fe(),
		V = je('i18n');
	let o = te(T, 'filters', 24, () => []),
		A = te(T, 'selectedFilterIds', 28, () => []),
		v = N({});
	(rt(() => {
		m(
			v,
			o().reduce((I, k) => ((I[k.id] = { ...k, selected: A().includes(k.id) }), I), {})
		);
	}),
		Me());
	var P = ir(),
		L = r(P),
		R = r(L),
		n = r(R, !0);
	(a(R), a(L));
	var y = c(L, 2),
		z = r(y);
	{
		var b = (I) => {
			var k = rr();
			(Ae(
				k,
				5,
				() => (e(v), i(() => Object.keys(e(v)))),
				Be,
				(S, $) => {
					var f = sr(),
						p = r(f),
						O = r(p);
					{
						let j = H(() => (e(v), e($), i(() => (e(v)[e($)].selected ? 'checked' : 'unchecked'))));
						Ye(O, {
							get state() {
								return e(j);
							},
							$$events: {
								change: (s) => {
									(M(v, (e(v)[e($)].selected = s.detail === 'checked')),
										A(Object.keys(e(v)).filter((h) => e(v)[h].selected)));
								}
							}
						});
					}
					a(p);
					var D = c(p, 2),
						U = r(D);
					(Ie(U, {
						get content() {
							return (e(v), e($), i(() => e(v)[e($)].meta.description));
						},
						children: (j, s) => {
							it();
							var h = Ke();
							(F(() => w(h, (e(v), e($), i(() => e(v)[e($)].name)))), u(j, h));
						},
						$$slots: { default: !0 }
					}),
						a(D),
						a(f),
						u(S, f));
				}
			),
				a(k),
				u(I, k));
		};
		q(z, (I) => {
			(re(o()), i(() => o().length > 0) && I(b));
		});
	}
	(a(y),
		a(P),
		F((I) => w(n, I), [() => (t(), i(() => t().t('Default Filters')))]),
		u(X, P),
		Te(),
		G());
}
var nr = _(
		'<div class=" flex items-center gap-2 mr-3"><!> <div class=" py-0.5 text-sm capitalize"><!></div></div>'
	),
	dr = _(
		'<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs font-medium text-gray-500"> </div></div> <div class="flex items-center mt-2 flex-wrap"></div></div>'
	);
function or(X, T) {
	Se(T, !1);
	const t = () => fe(V, '$i18n', x),
		[x, G] = Fe(),
		V = je('i18n'),
		o = {
			web_search: {
				label: t().t('Web Search'),
				description: t().t('Model can search the web for information')
			},
			image_generation: {
				label: t().t('Image Generation'),
				description: t().t('Model can generate images based on text prompts')
			},
			code_interpreter: {
				label: t().t('Code Interpreter'),
				description: t().t('Model can execute code and perform calculations')
			}
		};
	let A = te(T, 'availableFeatures', 24, () => [
			'web_search',
			'image_generation',
			'code_interpreter'
		]),
		v = te(T, 'featureIds', 28, () => []);
	Me();
	var P = dr(),
		L = r(P),
		R = r(L),
		n = r(R, !0);
	(a(R), a(L));
	var y = c(L, 2);
	(Ae(y, 5, A, Be, (z, b) => {
		var I = nr(),
			k = r(I);
		{
			let f = H(() => (re(v()), e(b), i(() => (v().includes(e(b)) ? 'checked' : 'unchecked'))));
			Ye(k, {
				get state() {
					return e(f);
				},
				$$events: {
					change: (p) => {
						p.detail === 'checked' ? v([...v(), e(b)]) : v(v().filter((O) => O !== e(b)));
					}
				}
			});
		}
		var S = c(k, 2),
			$ = r(S);
		{
			let f = H(() => (re(vt), e(b), i(() => vt.parse(o[e(b)].description))));
			Ie($, {
				get content() {
					return e(f);
				},
				children: (p, O) => {
					it();
					var D = Ke();
					(F((U) => w(D, U), [() => (t(), e(b), i(() => t().t(o[e(b)].label)))]), u(p, D));
				},
				$$slots: { default: !0 }
			});
		}
		(a(S), a(I), u(z, I));
	}),
		a(y),
		a(P),
		F((z) => w(n, z), [() => (t(), i(() => t().t('Default Features')))]),
		u(X, P),
		Te(),
		G());
}
var vr = _(
		'<div class="flex items-center gap-2 mr-3"><!> <div class="py-0.5 text-sm"><!></div></div>'
	),
	cr = _(
		'<div><div class="flex w-full justify-between mb-1"><div class="self-center text-xs font-medium text-gray-500"> </div></div> <div class="flex items-center mt-2 flex-wrap"></div></div>'
	);
function ur(X, T) {
	Se(T, !1);
	const t = () => fe(V, '$i18n', x),
		[x, G] = Fe(),
		V = je('i18n'),
		o = {
			time: {
				label: t().t('Time & Calculation'),
				description: t().t('Get current time and perform date/time calculations')
			},
			memory: { label: t().t('Memory'), description: t().t('Search and manage user memories') },
			chats: {
				label: t().t('Chat History'),
				description: t().t('Search and view user chat history')
			},
			notes: { label: t().t('Notes'), description: t().t('Search, view, and manage user notes') },
			knowledge: {
				label: t().t('Knowledge Base'),
				description: t().t('Browse and query knowledge bases')
			},
			channels: {
				label: t().t('Channels'),
				description: t().t('Search channels and channel messages')
			},
			web_search: {
				label: t().t('Web Search'),
				description: t().t('Search the web and fetch URLs')
			},
			image_generation: {
				label: t().t('Image Generation'),
				description: t().t('Generate and edit images')
			},
			code_interpreter: { label: t().t('Code Interpreter'), description: t().t('Execute code') },
			tasks: {
				label: t().t('Task Management'),
				description: t().t('Break down complex requests into trackable steps')
			},
			automations: {
				label: t().t('Automations'),
				description: t().t('Create and manage scheduled automations')
			},
			calendar: {
				label: t().t('Calendar'),
				description: t().t('List calendars, search, create, update, and delete calendar events')
			}
		},
		A = Object.keys(o);
	let v = te(T, 'builtinTools', 28, () => ({}));
	Me();
	var P = cr(),
		L = r(P),
		R = r(L),
		n = r(R, !0);
	(a(R), a(L));
	var y = c(L, 2);
	(Ae(
		y,
		5,
		() => A,
		Be,
		(z, b) => {
			var I = vr(),
				k = r(I);
			{
				let f = H(() => (re(v()), e(b), i(() => (v()[e(b)] !== !1 ? 'checked' : 'unchecked'))));
				Ye(k, {
					get state() {
						return e(f);
					},
					$$events: {
						change: (p) => {
							(p.detail === 'checked' ? delete v()[e(b)] : v((v()[e(b)] = !1), !0), v(v()));
						}
					}
				});
			}
			var S = c(k, 2),
				$ = r(S);
			{
				let f = H(() => (re(vt), e(b), i(() => vt.parse(o[e(b)].description))));
				Ie($, {
					get content() {
						return e(f);
					},
					children: (p, O) => {
						it();
						var D = Ke();
						(F((U) => w(D, U), [() => (t(), e(b), i(() => t().t(o[e(b)].label)))]), u(p, D));
					},
					$$slots: { default: !0 }
				});
			}
			(a(S), a(I), u(z, I));
		}
	),
		a(y),
		a(P),
		F((z) => w(n, z), [() => (t(), i(() => t().t('Builtin Tools')))]),
		u(X, P),
		Te(),
		G());
}
var mr = _(
		'<button class="flex text-xs items-center space-x-1 py-1 rounded-xl bg-transparent dark:text-gray-200 transition" type="button"><div class=" self-center font-medium line-clamp-1"> </div></button>'
	),
	fr = _('<input class="text-sm w-full bg-transparent outline-hidden"/>'),
	pr = _(
		'<input class="text-sm w-full bg-transparent outline-hidden text-gray-600 dark:text-gray-400"/>'
	),
	gr = _(
		'<textarea class="text-sm w-full bg-transparent outline-hidden resize-none" rows="2"></textarea>'
	),
	_r = _(
		'<div class=" flex border rounded-2xl border-gray-100/30 dark:border-gray-850/30 bg-transparent p-2"><div class="flex flex-col md:flex-row w-full gap-1 md:gap-2 px-2"><div class="gap-0.5 min-w-60"><!> <!></div> <!></div> <button class="p-1 self-start" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div>'
	),
	xr = _('<div class="flex flex-col gap-2"></div>'),
	br = _('<div class="text-xs text-center w-full text-gray-500 mb-1.5"> </div>'),
	hr = _(
		'<div class=" space-y-3"><div class="flex w-full justify-between mb-1.5"><div class=" self-center text-xs flex-1 shrink-0 w-full"> </div> <div class="flex justify-end gap-2"><input id="prompt-suggestions-import-input" type="file" accept=".json" hidden=""/> <button class="flex text-xs items-center space-x-1 py-1 rounded-xl bg-transparent dark:text-gray-200 transition" type="button"><div class=" self-center font-medium line-clamp-1"> </div></button> <!> <button class=" px-1.5 rounded-xl transition font-medium text-sm flex items-center" type="button"><!></button></div></div> <!></div>'
	);
function yr(X, T) {
	Se(T, !1);
	const t = () => fe(V, '$i18n', x),
		[x, G] = Fe(),
		V = je('i18n');
	let o = te(T, 'promptSuggestions', 28, () => []),
		A = N([]);
	const v = () => {
		m(
			A,
			o().map(
				(j) => (
					typeof j.title == 'string'
						? (j.title = [j.title, ''])
						: Array.isArray(j.title) || (j.title = ['', '']),
					j
				)
			)
		);
	};
	(ta(
		() => re(o()),
		() => {
			o() && v();
		}
	),
		aa(),
		Me());
	var P = hr(),
		L = r(P),
		R = r(L),
		n = r(R, !0);
	a(R);
	var y = c(R, 2),
		z = r(y),
		b = c(z, 2),
		I = r(b),
		k = r(I, !0);
	(a(I), a(b));
	var S = c(b, 2);
	{
		var $ = (j) => {
			var s = mr(),
				h = r(s),
				C = r(h, !0);
			(a(h),
				a(s),
				F((Z) => w(C, Z), [() => (t(), i(() => t().t('Export')))]),
				me('click', s, async () => {
					let Z = new Blob([JSON.stringify(o())], { type: 'application/json' });
					Ps.saveAs(Z, `prompt-suggestions-export-${Date.now()}.json`);
				}),
				u(j, s));
		};
		q(S, (j) => {
			(re(o()), i(() => o().length) && j($));
		});
	}
	var f = c(S, 2),
		p = r(f);
	(Os(p, { className: 'size-3', strokeWidth: '2.5' }), a(f), a(y), a(L));
	var O = c(L, 2);
	{
		var D = (j) => {
				var s = xr();
				(Ae(
					s,
					5,
					() => e(A),
					Be,
					(h, C, Z) => {
						var Q = _r(),
							he = r(Q),
							Le = r(he),
							se = r(Le);
						{
							let ye = H(() => (t(), i(() => t().t('e.g. Tell me a fun fact'))));
							Ie(se, {
								get content() {
									return e(ye);
								},
								placement: 'top-start',
								children: ($e, Ue) => {
									var de = fr();
									($t(de),
										F((pe) => be(de, 'placeholder', pe), [() => (t(), i(() => t().t('Title')))]),
										ot(
											de,
											() => e(C).title[0],
											(pe) => ((e(C).title[0] = pe), E(() => e(A)))
										),
										u($e, de));
								},
								$$slots: { default: !0 }
							});
						}
						var Ee = c(se, 2);
						{
							let ye = H(() => (t(), i(() => t().t('e.g. about the Roman Empire'))));
							Ie(Ee, {
								get content() {
									return e(ye);
								},
								placement: 'top-start',
								children: ($e, Ue) => {
									var de = pr();
									($t(de),
										F((pe) => be(de, 'placeholder', pe), [() => (t(), i(() => t().t('Subtitle')))]),
										ot(
											de,
											() => e(C).title[1],
											(pe) => ((e(C).title[1] = pe), E(() => e(A)))
										),
										u($e, de));
								},
								$$slots: { default: !0 }
							});
						}
						a(Le);
						var Ne = c(Le, 2);
						{
							let ye = H(
								() => (t(), i(() => t().t('e.g. Tell me a fun fact about the Roman Empire')))
							);
							Ie(Ne, {
								className: 'w-full self-center items-center flex',
								get content() {
									return e(ye);
								},
								placement: 'top-start',
								children: ($e, Ue) => {
									var de = gr();
									(ha(de),
										F((pe) => be(de, 'placeholder', pe), [() => (t(), i(() => t().t('Prompt')))]),
										ot(
											de,
											() => e(C).content,
											(pe) => ((e(C).content = pe), E(() => e(A)))
										),
										u($e, de));
								},
								$$slots: { default: !0 }
							});
						}
						a(he);
						var Xe = c(he, 2);
						(a(Q),
							me('click', Xe, () => {
								(o().splice(Z, 1), o(o()));
							}),
							u(h, Q));
					}
				),
					a(s),
					u(j, s));
			},
			U = (j) => {
				var s = br(),
					h = r(s, !0);
				(a(s), F((C) => w(h, C), [() => (t(), i(() => t().t('No suggestion prompts')))]), u(j, s));
			};
		q(O, (j) => {
			(e(A), i(() => e(A).length > 0) ? j(D) : j(U, -1));
		});
	}
	(a(P),
		F(
			(j, s) => {
				(w(n, j), w(k, s));
			},
			[
				() => (t(), i(() => t().t('Default Prompt Suggestions'))),
				() => (t(), i(() => t().t('Import')))
			]
		),
		me('change', z, (j) => {
			const s = j.target.files;
			if (!s || s.length === 0) return;
			let h = new FileReader();
			((h.onload = async (C) => {
				try {
					let Z = JSON.parse(C.target.result);
					((Z = Z.map(
						(Q) => (
							typeof Q.title == 'string'
								? (Q.title = [Q.title, ''])
								: Array.isArray(Q.title) || (Q.title = ['', '']),
							Q
						)
					)),
						o([...o(), ...Z]));
				} catch {
					dt.error(t().t('Invalid JSON file'));
					return;
				}
			}),
				h.readAsText(s[0]),
				(j.target.value = ''));
		}),
		me('click', b, () => {
			const j = document.getElementById('prompt-suggestions-import-input');
			j && j.click();
		}),
		me('click', f, () => {
			(o().length === 0 || o().at(-1).content !== '') &&
				o([...o(), { content: '', title: ['', ''] }]);
		}),
		u(X, P),
		Te(),
		G());
}
var $r = _('<option> </option>'),
	wr = _(
		'<div class="flex w-full justify-between mb-1"><div class="self-center text-xs font-medium text-gray-500"> </div></div> <select class="w-full text-sm bg-transparent outline-hidden cursor-pointer"><option> </option><!></select>',
		1
	);
function kr(X, T) {
	Se(T, !1);
	const t = () => fe(V, '$i18n', x),
		[x, G] = Fe(),
		V = je('i18n');
	let o = te(T, 'terminalId', 12, ''),
		A = N([]);
	(rt(async () => {
		m(A, await js(localStorage.token));
	}),
		Me());
	var v = wt(),
		P = He(v);
	{
		var L = (R) => {
			var n = wr(),
				y = He(n),
				z = r(y),
				b = r(z, !0);
			(a(z), a(y));
			var I = c(y, 2),
				k = r(I),
				S = r(k, !0);
			(a(k), (k.value = k.__value = ''));
			var $ = c(k);
			(Ae(
				$,
				1,
				() => e(A),
				(f) => f.id,
				(f, p) => {
					var O = $r(),
						D = r(O, !0);
					a(O);
					var U = {};
					(F(() => {
						(w(D, (e(p), i(() => e(p).name || e(p).id))),
							U !== (U = (e(p), i(() => e(p).id))) &&
								(O.value = (O.__value = (e(p), i(() => e(p).id))) ?? ''));
					}),
						u(f, O));
				}
			),
				a(I),
				F(
					(f, p) => {
						(w(b, f), w(S, p));
					},
					[() => (t(), i(() => t().t('Terminal'))), () => (t(), i(() => t().t('None')))]
				),
				ya(I, o),
				u(R, n));
		};
		q(P, (R) => {
			(e(A), i(() => e(A).length > 0) && R(L));
		});
	}
	(u(X, v), Te(), G());
}
var Ir = _(
		'<button class="flex space-x-1"><div class=" self-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4"><path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd"></path></svg></div> <div class=" self-center text-sm font-medium"> </div></button>'
	),
	Sr = _('<img alt="model profile" class="rounded-xl size-20 md:size-48 object-cover shrink-0"/>'),
	jr = _('<img alt="model profile" class=" rounded-xl size-20 md:size-48 object-cover shrink-0"/>'),
	Tr = _('<option class=" text-gray-900"> </option>'),
	Fr = _(
		'<div class="mb-1"><div class=" text-xs font-medium mb-1 text-gray-500"> </div> <div><select class="text-sm w-full bg-transparent outline-hidden" required=""><option class=" text-gray-900"> </option><!></select></div></div>'
	),
	Ar = _('<span class="ml-2 self-center"> </span>'),
	Mr = _('<span class="ml-2 self-center"> </span>'),
	Cr = _('<span class="ml-2 self-center"> </span>'),
	Pr = _('<span class="ml-2 self-center"> </span>'),
	Or = _('<div class="my-2"><!></div>'),
	Dr = _('<span class="ml-2 self-center"> </span>'),
	zr = _('<span class="ml-2 self-center"> </span>'),
	Br = _('<div class="my-4"><!></div>'),
	Lr = _('<div class="my-4"><!></div> <!>', 1),
	Er = _('<div class="my-4"><!></div>'),
	Nr = _('<hr class=" border-gray-100/30 dark:border-gray-850/30 my-4"/> <!> <!>', 1),
	Ur = _('<div class="my-4"><!></div>'),
	Rr = _('<div class="my-4"><!></div>'),
	qr = _('<div class="my-4"><!></div>'),
	Gr = _('<div class="ml-1.5 self-center"><!></div>'),
	Hr = _('<span class="ml-2 self-center"> </span>'),
	Wr = _('<span class="ml-2 self-center"> </span>'),
	Jr = _(
		'<div><textarea class="text-sm w-full bg-transparent outline-hidden resize-none" rows="10" disabled="" readonly=""></textarea></div>'
	),
	Vr = _(
		'<form class="flex flex-col md:flex-row w-full gap-3 md:gap-6"><div class="w-full px-1"><div class="flex flex-row gap-4 md:gap-6 w-full"><div class="self-start flex justify-center my-2 shrink-0"><div class="self-center"><button type="button"><!> <div class="absolute bottom-0 right-0 z-10"><div class="m-1.5"><div class="shadow-xl p-1 rounded-full border-2 border-white bg-gray-800 text-white group-hover:bg-gray-600 transition dark:border-black dark:bg-white dark:group-hover:bg-gray-200 dark:text-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.5 5.707a.5.5 0 0 0-.146-.353l-1-1a.5.5 0 0 0-.708 0L9.354 9.646a.5.5 0 0 1-.708 0L6.354 7.354a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9.707ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd"></path></svg></div></div></div> <div class="absolute top-0 bottom-0 left-0 right-0 bg-white dark:bg-black rounded-lg opacity-0 group-hover:opacity-20 transition"></div></button> <div class="flex w-full mt-1 justify-end"><button class="px-2 py-1 text-gray-500 rounded-lg text-xs" type="button"> </button></div></div></div> <div class="flex flex-col w-full flex-1"><div class="flex justify-between items-start my-2"><div class=" flex flex-col w-full"><div class="flex-1 w-full"><input class="text-3xl w-full bg-transparent outline-hidden" required=""/></div> <div class="flex-1 w-full"><div><input class="text-xs w-full bg-transparent outline-hidden" required=""/></div></div></div> <div class="shrink-0"><button class="bg-gray-50 shrink-0 hover:bg-gray-100 text-black dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white transition px-2 py-1 rounded-full flex gap-1 items-center" type="button"><!> <div class="text-sm font-medium shrink-0"> </div></button></div></div> <!> <div class="mb-1"><div class="mb-1 flex w-full justify-between items-center"><div class=" self-center text-xs font-medium text-gray-500"> </div> <button class="p-1 text-xs flex rounded-sm transition" type="button"><!></button></div> <!></div> <div class="w-full mb-1 max-w-full"><div><!></div></div></div></div> <div class="my-2"><div class="flex w-full justify-between"><div class=" self-center text-xs font-medium text-gray-500"> </div></div> <div class="mt-2"><div class="my-1"><div class=" text-xs font-medium mb-2"> </div> <div><!></div></div> <div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div> <!></div></div> <hr class=" border-gray-100/30 dark:border-gray-850/30 my-2"/> <div class="my-2"><div class="flex w-full justify-between items-center"><div class="flex w-full justify-between items-center"><div class=" self-center text-xs font-medium text-gray-500"> </div> <button class="p-1 text-xs flex rounded-sm transition" type="button"><!></button></div></div> <!></div> <div class="my-4"><!></div> <div class="my-4"><!></div> <div class="my-4"><!></div> <!> <hr class=" border-gray-100/30 dark:border-gray-850/30 my-4"/> <div class="my-4"><!></div> <!> <!> <!> <div class="my-4"><div class="flex w-full justify-between mb-1"><div class="self-center text-xs font-medium text-gray-500"> </div></div> <input class="w-full text-sm bg-transparent outline-hidden" type="text"/></div> <hr class=" border-gray-100/30 dark:border-gray-850/30 my-4"/> <div class="my-2 flex justify-end"><button type="submit"><div class=" self-center font-medium"><!></div> <!></button></div> <div class="my-2 text-gray-300 dark:text-gray-700 pb-20"><div class="flex w-full justify-between mb-2"><div class=" self-center text-sm font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div> <!></div></div></form>'
	),
	Zr = _(
		'<!> <!> <div class="w-full max-h-full flex justify-center"><input type="file" hidden="" accept="image/*"/> <!></div>',
		1
	);
function Fi(X, T) {
	Se(T, !1);
	const t = () => fe(P, '$i18n', A),
		x = () => fe($s, '$models', A),
		G = () => fe(ws, '$user', A),
		V = () => fe(ga, '$tools', A),
		o = () => fe(_a, '$functions', A),
		[A, v] = Fe(),
		P = je('i18n');
	let L = te(T, 'onSubmit', 8),
		R = te(T, 'onBack', 8, null),
		n = te(T, 'model', 12, null),
		y = te(T, 'edit', 8, !1),
		z = te(T, 'preset', 8, !0),
		b = N(!1),
		I = N(),
		k = N(),
		S = N(!1),
		$ = N(!1),
		f = N(!1),
		p = N(!1),
		O = N(''),
		D = N(''),
		U = N(!0),
		j = N(''),
		s = N({
			id: '',
			base_model_id: null,
			name: '',
			meta: {
				profile_image_url: `${ht}/static/favicon.png`,
				description: '',
				suggestion_prompts: null,
				tags: []
			},
			params: { system: '' }
		}),
		h = N({ system: '' }),
		C = N([]),
		Z = N([]),
		Q = N([]),
		he = N([]),
		Le = N([]),
		se = N({ ...xa }),
		Ee = N([]),
		Ne = N({}),
		Xe = N([]),
		ye = N([]),
		$e = N(''),
		Ue = N({ voice: '' });
	const de = async () => {
		var Ce;
		if (
			(m(b, !0),
			M(s, (e(s).id = e(O))),
			E(() => {
				(t(), x(), n());
			}),
			M(s, (e(s).name = e(D))),
			E(() => {
				(t(), x(), n());
			}),
			e(O) === '')
		) {
			(dt.error(t().t('Model ID is required.')), m(b, !1));
			return;
		}
		if (e(D) === '') {
			(dt.error(t().t('Model Name is required.')), m(b, !1));
			return;
		}
		if (e(C).some((ge) => ge.status === 'uploading')) {
			(dt.error(t().t('Please wait until all files are uploaded.')), m(b, !1));
			return;
		}
		(M(s, (e(s).params = { ...e(s).params, ...e(h) })),
			E(() => {
				(t(), x(), n());
			}),
			M(s, (e(s).access_grants = e(ye))),
			E(() => {
				(t(), x(), n());
			}),
			M(s, (e(s).meta.capabilities = e(se))),
			E(() => {
				(t(), x(), n());
			}),
			e(U)
				? (M(
						s,
						(e(s).meta.description =
							e(s).meta.description.trim() === '' ? null : e(s).meta.description)
					),
					E(() => {
						(t(), x(), n());
					}))
				: (M(s, (e(s).meta.description = null)),
					E(() => {
						(t(), x(), n());
					})),
			e(C).length > 0
				? (M(s, (e(s).meta.knowledge = e(C))),
					E(() => {
						(t(), x(), n());
					}))
				: e(s).meta.knowledge && delete e(s).meta.knowledge,
			e(Z).length > 0
				? (M(s, (e(s).meta.toolIds = e(Z))),
					E(() => {
						(t(), x(), n());
					}))
				: e(s).meta.toolIds && delete e(s).meta.toolIds,
			e(Q).length > 0
				? (M(s, (e(s).meta.skillIds = e(Q))),
					E(() => {
						(t(), x(), n());
					}))
				: e(s).meta.skillIds && delete e(s).meta.skillIds,
			e(he).length > 0
				? (M(s, (e(s).meta.filterIds = e(he))),
					E(() => {
						(t(), x(), n());
					}))
				: e(s).meta.filterIds && delete e(s).meta.filterIds,
			e(Le).length > 0
				? (M(s, (e(s).meta.defaultFilterIds = e(Le))),
					E(() => {
						(t(), x(), n());
					}))
				: e(s).meta.defaultFilterIds && delete e(s).meta.defaultFilterIds,
			e(Xe).length > 0
				? (M(s, (e(s).meta.actionIds = e(Xe))),
					E(() => {
						(t(), x(), n());
					}))
				: e(s).meta.actionIds && delete e(s).meta.actionIds,
			e(Ee).length > 0
				? (M(s, (e(s).meta.defaultFeatureIds = e(Ee))),
					E(() => {
						(t(), x(), n());
					}))
				: e(s).meta.defaultFeatureIds && delete e(s).meta.defaultFeatureIds,
			Object.keys(e(Ne)).length > 0
				? (M(s, (e(s).meta.builtinTools = e(Ne))),
					E(() => {
						(t(), x(), n());
					}))
				: e(s).meta.builtinTools && delete e(s).meta.builtinTools,
			e($e)
				? (M(s, (e(s).meta.terminalId = e($e))),
					E(() => {
						(t(), x(), n());
					}))
				: e(s).meta.terminalId && delete e(s).meta.terminalId,
			e(Ue).voice !== ''
				? (e(s).meta.tts ||
						(M(s, (e(s).meta.tts = {})),
						E(() => {
							(t(), x(), n());
						})),
					M(s, (e(s).meta.tts.voice = e(Ue).voice)),
					E(() => {
						(t(), x(), n());
					}))
				: (Ce = e(s).meta.tts) != null &&
					Ce.voice &&
					(delete e(s).meta.tts.voice,
					Object.keys(e(s).meta.tts).length === 0 && delete e(s).meta.tts),
			M(s, (e(s).params.system = e(j).trim() === '' ? null : e(j))),
			E(() => {
				(t(), x(), n());
			}),
			M(
				s,
				(e(s).params.stop = e(h).stop
					? (typeof e(h).stop == 'string' ? e(h).stop.split(',') : e(h).stop).filter((ge) =>
							ge.trim()
						)
					: null)
			),
			E(() => {
				(t(), x(), n());
			}),
			Object.keys(e(s).params).forEach((ge) => {
				(e(s).params[ge] === '' || e(s).params[ge] === null) && delete e(s).params[ge];
			}),
			await L()(e(s)),
			m(b, !1));
	};
	(rt(async () => {
		var ut,
			kt,
			mt,
			Qe,
			It,
			St,
			ae,
			ie,
			_e,
			xe,
			W,
			Y,
			K,
			oe,
			et,
			Re,
			tt,
			Pe,
			qe,
			Oe,
			We,
			Je,
			Ve,
			lt,
			ft,
			pt,
			at,
			gt,
			nt,
			_t,
			xt;
		(await ga.set(await ks(localStorage.token)), await _a.set(await Is(localStorage.token)));
		const Ce = await Ss(localStorage.token).catch(() => null),
			ge = (Ce == null ? void 0 : Ce.DEFAULT_MODEL_METADATA) ?? {};
		(m(se, { ...xa, ...(ge.capabilities ?? {}) }),
			m(Ee, ge.defaultFeatureIds ?? []),
			m(Ne, ge.builtinTools ?? {}));
		const ct = document.getElementById('workspace-container');
		if ((ct && (ct.scrollTop = 0), n())) {
			if (
				(m(D, n().name),
				await _s(),
				m(O, n().id),
				m(
					U,
					((kt = (ut = n()) == null ? void 0 : ut.meta) == null ? void 0 : kt.description) !== null
				),
				n().base_model_id)
			) {
				const ee = x()
					.filter((we) => !(we != null && we.preset) && !((we == null ? void 0 : we.arena) ?? !1))
					.find((we) => [n().base_model_id, `${n().base_model_id}:latest`].includes(we.id));
				n(ee ? (n().base_model_id = ee.id) : (n().base_model_id = null), !0);
			}
			(m(j, ((Qe = (mt = n()) == null ? void 0 : mt.params) == null ? void 0 : Qe.system) ?? ''),
				m(h, { ...e(h), ...((It = n()) == null ? void 0 : It.params) }),
				M(
					h,
					(e(h).stop =
						(St = e(h)) != null && St.stop
							? (typeof e(h).stop == 'string'
									? e(h).stop.split(',')
									: (((ae = e(h)) == null ? void 0 : ae.stop) ?? [])
								).join(',')
							: null)
				),
				m(
					C,
					(
						((_e = (ie = n()) == null ? void 0 : ie.meta) == null ? void 0 : _e.knowledge) ?? []
					).map((ee) =>
						ee != null && ee.collection_name && (ee == null ? void 0 : ee.type) !== 'file'
							? { id: ee.collection_name, name: ee.name, legacy: !0 }
							: ee != null && ee.collection_names
								? {
										name: ee.name,
										type: 'collection',
										collection_names: ee.collection_names,
										legacy: !0
									}
								: ee
					)
				),
				m(Z, ((W = (xe = n()) == null ? void 0 : xe.meta) == null ? void 0 : W.toolIds) ?? []),
				m(Q, ((K = (Y = n()) == null ? void 0 : Y.meta) == null ? void 0 : K.skillIds) ?? []),
				m(he, ((et = (oe = n()) == null ? void 0 : oe.meta) == null ? void 0 : et.filterIds) ?? []),
				m(
					Le,
					((tt = (Re = n()) == null ? void 0 : Re.meta) == null ? void 0 : tt.defaultFilterIds) ??
						[]
				),
				m(Xe, ((qe = (Pe = n()) == null ? void 0 : Pe.meta) == null ? void 0 : qe.actionIds) ?? []),
				m(se, {
					...e(se),
					...(((We = (Oe = n()) == null ? void 0 : Oe.meta) == null ? void 0 : We.capabilities) ??
						{})
				}),
				m(
					Ee,
					((Ve = (Je = n()) == null ? void 0 : Je.meta) == null ? void 0 : Ve.defaultFeatureIds) ??
						e(Ee)
				),
				m(
					Ne,
					((ft = (lt = n()) == null ? void 0 : lt.meta) == null ? void 0 : ft.builtinTools) ?? e(Ne)
				),
				m(
					$e,
					((at = (pt = n()) == null ? void 0 : pt.meta) == null ? void 0 : at.terminalId) ?? ''
				),
				m(Ue, {
					voice:
						((_t = (nt = (gt = n()) == null ? void 0 : gt.meta) == null ? void 0 : nt.tts) == null
							? void 0
							: _t.voice) ?? ''
				}),
				m(ye, ((xt = n()) == null ? void 0 : xt.access_grants) ?? []),
				m(s, {
					...e(s),
					...JSON.parse(JSON.stringify(n() ? n() : { id: n().id, name: n().name }))
				}),
				n());
		}
		m(p, !0);
	}),
		ta(
			() => (re(y()), e(D)),
			() => {
				y() ||
					(e(D) &&
						m(
							O,
							e(D)
								.replace(/\s+/g, '-')
								.replace(/[^a-zA-Z0-9-]/g, '')
								.toLowerCase()
						));
			}
		),
		aa(),
		Me());
	var pe = wt(),
		$a = He(pe);
	{
		var wa = (Ce) => {
			var ge = Zr(),
				ct = He(ge);
			{
				let ae = H(() => (z() ? ['read', 'write'] : ['read'])),
					ie = H(
						() => (
							G(),
							i(() => {
								var W, Y, K, oe;
								return (
									((K =
										(Y = (W = G()) == null ? void 0 : W.permissions) == null
											? void 0
											: Y.sharing) == null
										? void 0
										: K.models) || ((oe = G()) == null ? void 0 : oe.role) === 'admin'
								);
							})
						)
					),
					_e = H(
						() => (
							G(),
							i(() => {
								var W, Y, K, oe;
								return (
									((K =
										(Y = (W = G()) == null ? void 0 : W.permissions) == null
											? void 0
											: Y.sharing) == null
										? void 0
										: K.public_models) || ((oe = G()) == null ? void 0 : oe.role) === 'admin'
								);
							})
						)
					),
					xe = H(
						() => (
							G(),
							i(() => {
								var W, Y, K, oe;
								return (
									(((K =
										(Y = (W = G()) == null ? void 0 : W.permissions) == null
											? void 0
											: Y.access_grants) == null
										? void 0
										: K.allow_users) ??
										!0) ||
									((oe = G()) == null ? void 0 : oe.role) === 'admin'
								);
							})
						)
					);
				Ds(ct, {
					get accessRoles() {
						return e(ae);
					},
					get share() {
						return e(ie);
					},
					get sharePublic() {
						return e(_e);
					},
					get shareUsers() {
						return e(xe);
					},
					onChange: async () => {
						var W;
						if (y() && (W = n()) != null && W.id)
							try {
								(await Bs(localStorage.token, n().id, n().name ?? e(D), e(ye)),
									dt.success(t().t('Saved')));
							} catch (Y) {
								dt.error((Y == null ? void 0 : Y.detail) ?? `${Y}`);
							}
					},
					get show() {
						return e(f);
					},
					set show(W) {
						m(f, W);
					},
					get accessGrants() {
						return e(ye);
					},
					set accessGrants(W) {
						m(ye, W);
					},
					$$legacy: !0
				});
			}
			var ut = c(ct, 2);
			{
				var kt = (ae) => {
					var ie = Ir(),
						_e = c(r(ie), 2),
						xe = r(_e, !0);
					(a(_e),
						a(ie),
						F((W) => w(xe, W), [() => (t(), i(() => t().t('Back')))]),
						me('click', ie, () => {
							R()();
						}),
						u(ae, ie));
				};
				q(ut, (ae) => {
					R() && ae(kt);
				});
			}
			var mt = c(ut, 2),
				Qe = r(mt);
			hs(
				Qe,
				(ae) => m(I, ae),
				() => e(I)
			);
			var It = c(Qe, 2);
			{
				var St = (ae) => {
					var ie = Vr(),
						_e = r(ie),
						xe = r(_e),
						W = r(xe),
						Y = r(W),
						K = r(Y),
						oe = r(K);
					{
						var et = (l) => {
								var d = Sr();
								(F(() => be(d, 'src', (e(s), i(() => e(s).meta.profile_image_url)))), u(l, d));
							},
							Re = (l) => {
								var d = jr();
								(F(() => be(d, 'src', `${ht}/static/favicon.png`)), u(l, d));
							};
						q(oe, (l) => {
							(e(s), i(() => e(s).meta.profile_image_url) ? l(et) : l(Re, -1));
						});
					}
					(it(4), a(K));
					var tt = c(K, 2),
						Pe = r(tt),
						qe = r(Pe, !0);
					(a(Pe), a(tt), a(Y), a(W));
					var Oe = c(W, 2),
						We = r(Oe),
						Je = r(We),
						Ve = r(Je),
						lt = r(Ve);
					($t(lt), a(Ve));
					var ft = c(Ve, 2),
						pt = r(ft),
						at = r(pt);
					($t(at), a(pt), a(ft), a(Je));
					var gt = c(Je, 2),
						nt = r(gt),
						_t = r(nt);
					zs(_t, { strokeWidth: '2.5', className: 'size-3.5 shrink-0' });
					var xt = c(_t, 2),
						ee = r(xt, !0);
					(a(xt), a(nt), a(gt), a(We));
					var we = c(We, 2);
					{
						var ka = (l) => {
							var d = Fr(),
								g = r(d),
								B = r(g, !0);
							a(g);
							var ke = c(g, 2),
								ve = r(ke),
								ce = r(ve),
								st = r(ce, !0);
							(a(ce), (ce.value = (ce.__value = null) ?? ''));
							var le = c(ce);
							(Ae(
								le,
								1,
								() => (
									x(),
									re(n()),
									i(() =>
										x().filter(
											(J) =>
												(n() ? J.id !== n().id : !0) &&
												!(J != null && J.preset) &&
												(J == null ? void 0 : J.owned_by) !== 'arena' &&
												!((J == null ? void 0 : J.direct) ?? !1)
										)
									)
								),
								Be,
								(J, ue, De, Ze) => {
									var Ge = Tr(),
										ea = r(Ge, !0);
									a(Ge);
									var ne = {};
									(F(() => {
										(w(ea, (e(ue), i(() => e(ue).name))),
											ne !== (ne = (e(ue), i(() => e(ue).id))) &&
												(Ge.value = (Ge.__value = (e(ue), i(() => e(ue).id))) ?? ''));
									}),
										u(J, Ge));
								}
							),
								a(ve),
								a(ke),
								a(d),
								F(
									(J, ue, De) => {
										(w(B, J), be(ve, 'placeholder', ue), w(st, De));
									},
									[
										() => (t(), i(() => t().t('Base Model (From)'))),
										() => (t(), i(() => t().t('Select a base model (e.g. llama3, gpt-4o)'))),
										() => (t(), i(() => t().t('Select a base model')))
									]
								),
								ya(
									ve,
									() => e(s).base_model_id,
									(J) => (
										M(s, (e(s).base_model_id = J)),
										E(() => {
											(t(), x(), n());
										})
									)
								),
								u(l, d));
						};
						q(we, (l) => {
							z() && l(ka);
						});
					}
					var Tt = c(we, 2),
						Ft = r(Tt),
						At = r(Ft),
						Ia = r(At, !0);
					a(At);
					var bt = c(At, 2),
						Sa = r(bt);
					{
						var ja = (l) => {
								var d = Ar(),
									g = r(d, !0);
								(a(d), F((B) => w(g, B), [() => (t(), i(() => t().t('Default')))]), u(l, d));
							},
							Ta = (l) => {
								var d = Mr(),
									g = r(d, !0);
								(a(d), F((B) => w(g, B), [() => (t(), i(() => t().t('Custom')))]), u(l, d));
							};
						q(Sa, (l) => {
							e(U) ? l(Ta, -1) : l(ja);
						});
					}
					(a(bt), a(Ft));
					var Fa = c(Ft, 2);
					{
						var Aa = (l) => {
							{
								let d = H(
									() => (t(), i(() => t().t('Add a short description about what this model does')))
								);
								ba(l, {
									className:
										' text-sm w-full bg-transparent outline-hidden resize-none overflow-y-hidden ',
									get placeholder() {
										return e(d);
									},
									get value() {
										return e(s).meta.description;
									},
									set value(g) {
										(M(s, (e(s).meta.description = g)),
											E(() => {
												(t(), x(), n());
											}));
									},
									$$legacy: !0
								});
							}
						};
						q(Fa, (l) => {
							e(U) && l(Aa);
						});
					}
					a(Tt);
					var sa = c(Tt, 2),
						ra = r(sa),
						Ma = r(ra);
					{
						let l = H(
							() => (
								e(s),
								i(() => {
									var d, g;
									return (
										((g = (d = e(s)) == null ? void 0 : d.meta) == null ? void 0 : g.tags) ?? []
									);
								})
							)
						);
						As(Ma, {
							get tags() {
								return e(l);
							},
							$$events: {
								delete: (d) => {
									const g = d.detail;
									(M(s, (e(s).meta.tags = e(s).meta.tags.filter((B) => B.name !== g))),
										E(() => {
											(t(), x(), n());
										}));
								},
								add: (d) => {
									var B, ke;
									const g = d.detail;
									(((ke = (B = e(s)) == null ? void 0 : B.meta) == null ? void 0 : ke.tags) ?? null)
										? (M(s, (e(s).meta.tags = [...e(s).meta.tags, { name: g }])),
											E(() => {
												(t(), x(), n());
											}))
										: (M(s, (e(s).meta.tags = [{ name: g }])),
											E(() => {
												(t(), x(), n());
											}));
								}
							}
						});
					}
					(a(ra), a(sa), a(Oe), a(xe));
					var Mt = c(xe, 2),
						Ct = r(Mt),
						ia = r(Ct),
						Ca = r(ia, !0);
					(a(ia), a(Ct));
					var la = c(Ct, 2),
						Pt = r(la),
						Ot = r(Pt),
						Pa = r(Ot, !0);
					a(Ot);
					var na = c(Ot, 2),
						Oa = r(na);
					{
						let l = H(
							() => (
								t(),
								i(() =>
									t().t(`Write your model system prompt content here
e.g.) You are Mario from Super Mario Bros, acting as an assistant.`)
								)
							)
						);
						ba(Oa, {
							className:
								' text-sm w-full bg-transparent outline-hidden resize-none overflow-y-hidden ',
							get placeholder() {
								return e(l);
							},
							rows: 4,
							get value() {
								return e(j);
							},
							set value(d) {
								m(j, d);
							},
							$$legacy: !0
						});
					}
					(a(na), a(Pt));
					var Dt = c(Pt, 2),
						zt = r(Dt),
						Da = r(zt, !0);
					a(zt);
					var Bt = c(zt, 2),
						za = r(Bt);
					{
						var Ba = (l) => {
								var d = Cr(),
									g = r(d, !0);
								(a(d), F((B) => w(g, B), [() => (t(), i(() => t().t('Hide')))]), u(l, d));
							},
							La = (l) => {
								var d = Pr(),
									g = r(d, !0);
								(a(d), F((B) => w(g, B), [() => (t(), i(() => t().t('Show')))]), u(l, d));
							};
						q(za, (l) => {
							e(S) ? l(Ba) : l(La, -1);
						});
					}
					(a(Bt), a(Dt));
					var Ea = c(Dt, 2);
					{
						var Na = (l) => {
							var d = Or(),
								g = r(d);
							(Fs(g, {
								admin: !0,
								custom: !0,
								get params() {
									return e(h);
								},
								set params(B) {
									m(h, B);
								},
								$$legacy: !0
							}),
								a(d),
								u(l, d));
						};
						q(Ea, (l) => {
							e(S) && l(Na);
						});
					}
					(a(la), a(Mt));
					var Lt = c(Mt, 4),
						Et = r(Lt),
						da = r(Et),
						Nt = r(da),
						Ua = r(Nt, !0);
					a(Nt);
					var Ut = c(Nt, 2),
						Ra = r(Ut);
					{
						var qa = (l) => {
								var d = Dr(),
									g = r(d, !0);
								(a(d), F((B) => w(g, B), [() => (t(), i(() => t().t('Default')))]), u(l, d));
							},
							Ga = (l) => {
								var d = zr(),
									g = r(d, !0);
								(a(d), F((B) => w(g, B), [() => (t(), i(() => t().t('Custom')))]), u(l, d));
							};
						q(Ra, (l) => {
							(e(s),
								i(() => {
									var d, g;
									return (
										(((g = (d = e(s)) == null ? void 0 : d.meta) == null
											? void 0
											: g.suggestion_prompts) ?? null) === null
									);
								})
									? l(qa)
									: l(Ga, -1));
						});
					}
					(a(Ut), a(da), a(Et));
					var Ha = c(Et, 2);
					{
						var Wa = (l) => {
							yr(l, {
								get promptSuggestions() {
									return e(s).meta.suggestion_prompts;
								},
								set promptSuggestions(d) {
									(M(s, (e(s).meta.suggestion_prompts = d)),
										E(() => {
											(t(), x(), n());
										}));
								},
								$$legacy: !0
							});
						};
						q(Ha, (l) => {
							(e(s),
								i(() => {
									var d, g;
									return (g = (d = e(s)) == null ? void 0 : d.meta) == null
										? void 0
										: g.suggestion_prompts;
								}) && l(Wa));
						});
					}
					a(Lt);
					var Rt = c(Lt, 2),
						Ja = r(Rt);
					(Ts(Ja, {
						get selectedItems() {
							return e(C);
						},
						set selectedItems(l) {
							m(C, l);
						},
						$$legacy: !0
					}),
						a(Rt));
					var qt = c(Rt, 2),
						Va = r(qt);
					{
						let l = H(() => V() ?? []);
						Rs(Va, {
							get tools() {
								return e(l);
							},
							get selectedToolIds() {
								return e(Z);
							},
							set selectedToolIds(d) {
								m(Z, d);
							},
							$$legacy: !0
						});
					}
					a(qt);
					var Gt = c(qt, 2),
						Za = r(Gt);
					(Js(Za, {
						get selectedSkillIds() {
							return e(Q);
						},
						set selectedSkillIds(l) {
							m(Q, l);
						},
						$$legacy: !0
					}),
						a(Gt));
					var oa = c(Gt, 2);
					{
						var Ka = (l) => {
								var d = Nr(),
									g = c(He(d), 2);
								{
									var B = (le) => {
											const J = H(
												() => (
													o(),
													e(he),
													i(() =>
														o().filter((ne) => {
															var ze;
															return (
																ne.type === 'filter' &&
																(e(he).includes(ne.id) || (ne == null ? void 0 : ne.is_global)) &&
																((ze = ne == null ? void 0 : ne.meta) == null ? void 0 : ze.toggle)
															);
														})
													)
												)
											);
											var ue = Lr(),
												De = He(ue),
												Ze = r(De);
											{
												let ne = H(
													() => (o(), i(() => (o() ?? []).filter((ze) => ze.type === 'filter')))
												);
												Ks(Ze, {
													get filters() {
														return e(ne);
													},
													get selectedFilterIds() {
														return e(he);
													},
													set selectedFilterIds(ze) {
														m(he, ze);
													},
													$$legacy: !0
												});
											}
											a(De);
											var Ge = c(De, 2);
											{
												var ea = (ne) => {
													var ze = Br(),
														ps = r(ze);
													(lr(ps, {
														get filters() {
															return e(J);
														},
														get selectedFilterIds() {
															return e(Le);
														},
														set selectedFilterIds(gs) {
															m(Le, gs);
														},
														$$legacy: !0
													}),
														a(ze),
														u(ne, ze));
												};
												q(Ge, (ne) => {
													(re(e(J)), i(() => e(J).length > 0) && ne(ea));
												});
											}
											u(le, ue);
										},
										ke = yt(
											() => (
												o(),
												i(() => (o() ?? []).filter((le) => le.type === 'filter').length > 0)
											)
										);
									q(g, (le) => {
										e(ke) && le(B);
									});
								}
								var ve = c(g, 2);
								{
									var ce = (le) => {
											var J = Er(),
												ue = r(J);
											{
												let De = H(
													() => (o(), i(() => (o() ?? []).filter((Ze) => Ze.type === 'action')))
												);
												Qs(ue, {
													get actions() {
														return e(De);
													},
													get selectedActionIds() {
														return e(Xe);
													},
													set selectedActionIds(Ze) {
														m(Xe, Ze);
													},
													$$legacy: !0
												});
											}
											(a(J), u(le, J));
										},
										st = yt(
											() => (
												o(),
												i(() => (o() ?? []).filter((le) => le.type === 'action').length > 0)
											)
										);
									q(ve, (le) => {
										e(st) && le(ce);
									});
								}
								u(l, d);
							},
							Ya = yt(
								() => (
									o(),
									i(
										() =>
											(o() ?? []).filter((l) => l.type === 'filter').length > 0 ||
											(o() ?? []).filter((l) => l.type === 'action').length > 0
									)
								)
							);
						q(oa, (l) => {
							e(Ya) && l(Ka);
						});
					}
					var Ht = c(oa, 4),
						Xa = r(Ht);
					(ar(Xa, {
						get capabilities() {
							return e(se);
						},
						set capabilities(l) {
							m(se, l);
						},
						$$legacy: !0
					}),
						a(Ht));
					var va = c(Ht, 2);
					{
						var Qa = (l) => {
								const d = H(
									() => (
										e(se),
										i(() =>
											Object.entries(e(se))
												.filter(
													([ve, ce]) =>
														ce &&
														['web_search', 'code_interpreter', 'image_generation'].includes(ve)
												)
												.map(([ve, ce]) => ve)
										)
									)
								);
								var g = wt(),
									B = He(g);
								{
									var ke = (ve) => {
										var ce = Ur(),
											st = r(ce);
										(or(st, {
											get availableFeatures() {
												return e(d);
											},
											get featureIds() {
												return e(Ee);
											},
											set featureIds(le) {
												m(Ee, le);
											},
											$$legacy: !0
										}),
											a(ce),
											u(ve, ce));
									};
									q(B, (ve) => {
										(re(e(d)), i(() => e(d).length > 0) && ve(ke));
									});
								}
								u(l, g);
							},
							es = yt(
								() => (e(se), i(() => Object.keys(e(se)).filter((l) => e(se)[l]).length > 0))
							);
						q(va, (l) => {
							e(es) && l(Qa);
						});
					}
					var ca = c(va, 2);
					{
						var ts = (l) => {
							var d = Rr(),
								g = r(d);
							(ur(g, {
								get builtinTools() {
									return e(Ne);
								},
								set builtinTools(B) {
									m(Ne, B);
								},
								$$legacy: !0
							}),
								a(d),
								u(l, d));
						};
						q(ca, (l) => {
							(e(se), i(() => e(se).builtin_tools) && l(ts));
						});
					}
					var ua = c(ca, 2);
					{
						var as = (l) => {
							var d = qr(),
								g = r(d);
							(kr(g, {
								get terminalId() {
									return e($e);
								},
								set terminalId(B) {
									m($e, B);
								},
								$$legacy: !0
							}),
								a(d),
								u(l, d));
						};
						q(ua, (l) => {
							(e(se), i(() => e(se).terminal) && l(as));
						});
					}
					var Wt = c(ua, 2),
						Jt = r(Wt),
						ma = r(Jt),
						ss = r(ma, !0);
					(a(ma), a(Jt));
					var Vt = c(Jt, 2);
					($t(Vt), a(Wt));
					var Zt = c(Wt, 4),
						jt = r(Zt),
						Kt = r(jt),
						rs = r(Kt);
					{
						var is = (l) => {
								var d = Ke();
								(F((g) => w(d, g), [() => (t(), i(() => t().t('Save & Update')))]), u(l, d));
							},
							ls = (l) => {
								var d = Ke();
								(F((g) => w(d, g), [() => (t(), i(() => t().t('Save & Create')))]), u(l, d));
							};
						q(rs, (l) => {
							y() ? l(is) : l(ls, -1);
						});
					}
					a(Kt);
					var ns = c(Kt, 2);
					{
						var ds = (l) => {
							var d = Gr(),
								g = r(d);
							(Cs(g, {}), a(d), u(l, d));
						};
						q(ns, (l) => {
							e(b) && l(ds);
						});
					}
					(a(jt), a(Zt));
					var fa = c(Zt, 2),
						Yt = r(fa),
						Xt = r(Yt),
						os = r(Xt, !0);
					a(Xt);
					var Qt = c(Xt, 2),
						vs = r(Qt);
					{
						var cs = (l) => {
								var d = Hr(),
									g = r(d, !0);
								(a(d), F((B) => w(g, B), [() => (t(), i(() => t().t('Hide')))]), u(l, d));
							},
							us = (l) => {
								var d = Wr(),
									g = r(d, !0);
								(a(d), F((B) => w(g, B), [() => (t(), i(() => t().t('Show')))]), u(l, d));
							};
						q(vs, (l) => {
							e($) ? l(cs) : l(us, -1);
						});
					}
					(a(Qt), a(Yt));
					var ms = c(Yt, 2);
					{
						var fs = (l) => {
							var d = Jr(),
								g = r(d);
							(ha(g),
								a(d),
								F((B) => xs(g, B), [() => (e(s), i(() => JSON.stringify(e(s), null, 2)))]),
								u(l, d));
						};
						q(ms, (l) => {
							e($) && l(fs);
						});
					}
					(a(fa),
						a(_e),
						a(ie),
						F(
							(l, d, g, B, ke, ve, ce, st, le, J, ue, De, Ze, Ge) => {
								(pa(
									K,
									1,
									`rounded-2xl flex shrink-0 items-center ${(e(s), re(ht), i(() => (e(s).meta.profile_image_url !== `${ht}/static/favicon.png` ? 'bg-transparent' : 'bg-white')) ?? '')} shadow-xl group relative`
								),
									be(K, 'aria-label', l),
									w(qe, d),
									be(lt, 'placeholder', g),
									be(at, 'placeholder', B),
									(at.disabled = y()),
									w(ee, ke),
									w(Ia, ve),
									be(bt, 'aria-pressed', e(U) ? 'true' : 'false'),
									be(bt, 'aria-label', ce),
									w(Ca, st),
									w(Pa, le),
									w(Da, J),
									w(Ua, ue),
									w(ss, De),
									be(Vt, 'placeholder', Ze),
									pa(
										jt,
										1,
										` text-sm px-3 py-2 transition rounded-lg ${e(b) ? ' cursor-not-allowed bg-black hover:bg-gray-900 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black' : 'bg-black hover:bg-gray-900 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black'} flex w-full justify-center`
									),
									(jt.disabled = e(b)),
									w(os, Ge));
							},
							[
								() => (t(), i(() => t().t('Upload profile image'))),
								() => (t(), i(() => t().t('Reset Image'))),
								() => (t(), i(() => t().t('Model Name'))),
								() => (t(), i(() => t().t('Model ID'))),
								() => (t(), i(() => t().t('Access'))),
								() => (t(), i(() => t().t('Description'))),
								() => (
									e(U),
									t(),
									i(() =>
										e(U)
											? t().t('Custom description enabled')
											: t().t('Default description enabled')
									)
								),
								() => (t(), i(() => t().t('Model Params'))),
								() => (t(), i(() => t().t('System Prompt'))),
								() => (t(), i(() => t().t('Advanced Params'))),
								() => (t(), i(() => t().t('Prompts'))),
								() => (t(), i(() => t().t('TTS Voice'))),
								() => (t(), i(() => t().t('e.g. alloy, echo, shimmer'))),
								() => (t(), i(() => t().t('JSON Preview')))
							]
						),
						me('click', K, () => {
							e(I).click();
						}),
						me('click', Pe, () => {
							(M(s, (e(s).meta.profile_image_url = `${ht}/static/favicon.png`)),
								E(() => {
									(t(), x(), n());
								}));
						}),
						ot(
							lt,
							() => e(D),
							(l) => m(D, l)
						),
						ot(
							at,
							() => e(O),
							(l) => m(O, l)
						),
						me('click', nt, () => {
							m(f, !0);
						}),
						me('click', bt, () => {
							m(U, !e(U));
						}),
						me('click', Bt, () => {
							m(S, !e(S));
						}),
						me('click', Ut, () => {
							var l, d;
							(((d = (l = e(s)) == null ? void 0 : l.meta) == null
								? void 0
								: d.suggestion_prompts) ?? null) === null
								? (M(s, (e(s).meta.suggestion_prompts = [{ content: '', title: ['', ''] }])),
									E(() => {
										(t(), x(), n());
									}))
								: (M(s, (e(s).meta.suggestion_prompts = null)),
									E(() => {
										(t(), x(), n());
									}));
						}),
						ot(
							Vt,
							() => e(Ue).voice,
							(l) => M(Ue, (e(Ue).voice = l))
						),
						me('click', Qt, () => {
							m($, !e($));
						}),
						me(
							'submit',
							ie,
							ys(() => {
								de();
							})
						),
						u(ae, ie));
				};
				q(It, (ae) => {
					(!y() || (y() && n())) && ae(St);
				});
			}
			(a(mt),
				bs(
					Qe,
					() => e(k),
					(ae) => m(k, ae)
				),
				me('change', Qe, () => {
					var ie, _e;
					let ae = new FileReader();
					((ae.onload = (xe) => {
						var oe, et;
						let W = `${(oe = xe.target) == null ? void 0 : oe.result}`;
						const Y = (et = e(k)[0]) == null ? void 0 : et.type;
						if (Y === 'image/gif' || Y === 'image/webp') {
							(M(s, (e(s).meta.profile_image_url = W)),
								E(() => {
									(t(), x(), n());
								}),
								m(k, null),
								M(I, (e(I).value = '')));
							return;
						}
						const K = new Image();
						((K.src = W),
							(K.onload = function () {
								const Re = document.createElement('canvas'),
									tt = Re.getContext('2d'),
									Pe = K.width / K.height;
								let qe, Oe;
								(Pe > 1 ? ((qe = 250 * Pe), (Oe = 250)) : ((qe = 250), (Oe = 250 / Pe)),
									(Re.width = 250),
									(Re.height = 250));
								const We = (250 - qe) / 2,
									Je = (250 - Oe) / 2;
								tt.drawImage(K, We, Je, qe, Oe);
								const Ve = Re.toDataURL('image/webp', 0.8);
								(M(s, (e(s).meta.profile_image_url = Ve)),
									E(() => {
										(t(), x(), n());
									}),
									m(k, null),
									M(I, (e(I).value = '')));
							}));
					}),
						e(k) &&
						e(k).length > 0 &&
						['image/gif', 'image/webp', 'image/jpeg', 'image/png', 'image/svg+xml'].includes(
							(ie = e(k)[0]) == null ? void 0 : ie.type
						)
							? ae.readAsDataURL(e(k)[0])
							: (`${(_e = e(k)[0]) == null ? void 0 : _e.type}`, m(k, null)));
				}),
				u(Ce, ge));
		};
		q($a, (Ce) => {
			e(p) && Ce(wa);
		});
	}
	(u(X, pe), Te(), v());
}
export { ur as B, ar as C, or as D, Fi as M, yr as P };
//# sourceMappingURL=BNbkR19p.js.map
