import '../chunks/CWj6FrbW.js';
import '../chunks/69_IOA4Y.js';
import {
	p as mt,
	g as ft,
	o as Ut,
	aX as R,
	l as t,
	c as l,
	r as a,
	n as $,
	aY as ut,
	k as v,
	t as k,
	x as ct,
	z as d,
	d as H,
	q as I,
	a as y,
	b as ht,
	e as F,
	s as zt,
	m as U,
	f as D,
	w as Kt,
	y as Qt,
	A as Vt,
	i as Pt,
	B as tt,
	D as Tt
} from '../chunks/CD8kWLvT.js';
import { i as et } from '../chunks/CdIW-EUl.js';
import { e as jt, i as Bt } from '../chunks/BUYMbiFA.js';
import { a as O, e as te, s as ee } from '../chunks/BfA5TzUS.js';
import { b as gt } from '../chunks/QcGoGJ5n.js';
import { b as pt } from '../chunks/BCA7d6a5.js';
import { i as xt } from '../chunks/BolXBFGq.js';
import { f as se } from '../chunks/CsWaRabF.js';
import { t as vt } from '../chunks/DtbOSK9Q.js';
import { g as ae } from '../chunks/D8_neGVh.js';
import { a as re } from '../chunks/CHheSG1Y.js';
import { b as oe, u as le, c as ie, a as ne } from '../chunks/Bumd5cCN.js';
import { c as de } from '../chunks/NOZGRrjn.js';
import { s as ce } from '../chunks/BbDdJXLs.js';
import { C as ve } from '../chunks/DLmUuatQ.js';
import { D as ue } from '../chunks/BP7slZPW.js';
import { D as ge } from '../chunks/FwjrSuro.js';
import { p as st } from '../chunks/DbBXQmQ3.js';
import { C as pe } from '../chunks/DmAbzQmi.js';
import { P as me } from '../chunks/DJIQFSNZ.js';
import { D as fe } from '../chunks/EP3pq2rN.js';
import { E as he } from '../chunks/BqRUOh4p.js';
var xe = D(
	'<div class="flex gap-2 group"><div class="flex items-start pt-1"><div class="px-2 py-1 text-sm font-semibold uppercase min-w-[6rem] text-left rounded-lg transition"> </div></div> <div class="flex-1"><textarea class="w-full bg-transparent outline-hidden rounded-lg p-2 text-sm resize-none overflow-hidden" rows="1"></textarea></div> <div class=" pt-1"><button class=" group-hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></button></div></div>'
);
function be(J, z) {
	mt(z, !1);
	const r = () => F(B, '$i18n', j),
		[j, L] = zt(),
		B = ft('i18n');
	let x = st(z, 'message', 12),
		N = st(z, 'idx', 8),
		X = st(z, 'onDelete', 8),
		u = U();
	(Ut(() => {
		(R(u, (t(u).style.height = '')), R(u, (t(u).style.height = t(u).scrollHeight + 'px')));
	}),
		xt());
	var Z = xe(),
		h = l(Z),
		Y = l(h),
		W = l(Y, !0);
	(a(Y), a(h));
	var C = $(h, 2),
		M = l(C);
	(ut(M),
		pt(
			M,
			(g) => v(u, g),
			() => t(u)
		),
		a(C));
	var P = $(C, 2),
		b = l(P);
	(a(P),
		a(Z),
		k(
			(g, A) => {
				(H(W, g),
					O(M, 'id', `${(ct(x()), d(() => x().role) ?? '')}-${N() ?? ''}-textarea`),
					O(M, 'placeholder', A));
			},
			[
				() => (r(), ct(x()), d(() => r().t(x().role))),
				() => (
					r(),
					ct(x()),
					d(() =>
						r().t('Enter {{role}} message here', {
							role: x().role === 'user' ? r().t('a user') : r().t('an assistant')
						})
					)
				)
			]
		),
		I('input', M, (g) => {
			(R(u, (t(u).style.height = '')), R(u, (t(u).style.height = t(u).scrollHeight + 'px')));
		}),
		I('focus', M, (g) => {
			(R(u, (t(u).style.height = '')), R(u, (t(u).style.height = t(u).scrollHeight + 'px')));
		}),
		gt(
			M,
			() => x().content,
			(g) => x((x().content = g), !0)
		),
		I('click', b, () => {
			X()();
		}),
		y(J, Z),
		ht(),
		L());
}
var ye = D('<div class="py-3 space-y-3"></div>');
function _e(J, z) {
	(mt(z, !1), ft('i18n'));
	let r = st(z, 'messages', 28, () => []);
	xt();
	var j = ye();
	(jt(j, 5, r, Bt, (L, B, x) => {
		be(L, {
			get message() {
				return t(B);
			},
			idx: x,
			onDelete: () => {
				r(r().filter((N, X) => X !== x));
			}
		});
	}),
		a(j),
		y(J, j),
		ht());
}
var we = D('<div class=" flex-1 text-gray-500 line-clamp-1"> </div>'),
	ke = D(
		'<div class="flex gap-2 justify-between items-center"><div class=" shrink-0 font-medium ml-1.5"> </div> <!> <div class="shrink-0"><button class="p-1.5 bg-transparent hover:bg-white/5 transition rounded-lg"><!></button></div></div>'
	),
	$e = D(
		'<div slot="content"><div class="pt-1 px-1.5"><textarea class="w-full h-full bg-transparent resize-none outline-hidden text-sm" rows="4"></textarea></div></div>'
	),
	De = D(
		'<button class="p-1.5 text-sm font-medium bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition rounded-lg"><!></button>'
	),
	Ce = D(
		'<button class="flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full"><div class="flex items-center line-clamp-1"> </div></button> <button class="flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full"><div class="flex items-center line-clamp-1"> </div></button>',
		1
	),
	Se = D(
		'<button slot="trigger" class="flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full"><!> <div class="flex items-center"> </div></button>'
	),
	Ee = D(
		'<div slot="content"><div class="min-w-[200px] rounded-2xl px-1 py-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg"><!></div></div>'
	),
	He = D('<option class="bg-gray-50 dark:bg-gray-700"> </option>'),
	Ie = D(
		'<button class="px-3.5 py-1.5 text-sm font-medium disabled:bg-gray-50 dark:disabled:hover:bg-gray-850 disabled:cursor-not-allowed bg-gray-50 hover:bg-gray-100 text-gray-900 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition rounded-lg"> </button> <button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-lg"> </button>',
		1
	),
	Me = D(
		'<button class="px-3 py-1.5 text-sm font-medium bg-gray-300 text-black transition rounded-lg"> </button>'
	),
	Pe = D(
		'<div class=" flex flex-col justify-between w-full overflow-y-auto h-full"><div class="mx-auto w-full md:px-0 h-full relative"><div class=" flex flex-col h-full px-3.5"><div class="flex w-full items-center gap-1.5"><!> <!></div> <div class=" pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0" id="messages-container"><div class=" h-full w-full flex flex-col"><div class="flex-1 p-1"><!></div></div></div> <div class="pb-3"><div class="border border-gray-100/30 dark:border-gray-850/30 w-full px-3 py-2.5 rounded-xl"><div class="py-0.5"><textarea class=" w-full h-full bg-transparent resize-none outline-hidden text-sm" rows="2"></textarea></div> <div class="flex justify-between flex-col sm:flex-row items-start sm:items-center gap-2 mt-2"><div class="shrink-0"><button type="button"><!></button></div> <div class="flex items-center justify-between gap-2 w-full sm:w-auto"><div class="flex-1"><select class=" bg-transparent border border-gray-100/30 dark:border-gray-850/30 rounded-lg py-1 px-2 -mx-0.5 text-sm outline-hidden w-full"></select></div> <div class="flex gap-2 shrink-0"><!></div></div></div></div></div></div></div></div>'
	);
function Te(J, z) {
	mt(z, !1);
	const r = () => F(Z, '$i18n', N),
		j = () => F(ne, '$models', N),
		L = () => F(le, '$user', N),
		B = () => F(oe, '$settings', N),
		x = () => F(ie, '$config', N),
		[N, X] = zt(),
		{ saveAs: u } = se,
		Z = ft('i18n');
	let h = U(''),
		Y = U(!1),
		W = !1,
		C = U(),
		M = U(),
		P = U(!1),
		b = U(''),
		g = U('user'),
		A = U(''),
		c = U([]);
	const bt = () => {
			const e = t(M);
			e && (e.scrollTop = e == null ? void 0 : e.scrollHeight);
		},
		Nt = () => {
			W = !0;
		},
		yt = async () => {
			(await tt(),
				t(C) &&
					(R(C, (t(C).style.height = '')),
					R(C, (t(C).style.height = Math.min(t(C).scrollHeight, 555) + 'px'))));
		},
		At = async () => {
			var p;
			if (t(h) === '') {
				vt.error(r().t('Please select a model.'));
				return;
			}
			const e = j().find((m) => m.id === t(h));
			if (!e) {
				v(h, '');
				return;
			}
			const [o, s] = await de(
				localStorage.token,
				{
					model: e.id,
					stream: !0,
					messages: [t(b) ? { role: 'system', content: t(b) } : void 0, ...t(c)].filter((m) => m)
				},
				`${re}/api`
			);
			let i;
			(((p = t(c).at(-1)) == null ? void 0 : p.role) === 'assistant'
				? (i = t(c).at(-1))
				: ((i = { role: 'assistant', content: '' }), t(c).push(i), v(c, t(c))),
				await tt());
			const n = document.getElementById(`assistant-${t(c).length - 1}-textarea`);
			if (o && o.ok) {
				const m = o.body
					.pipeThrough(new TextDecoderStream())
					.pipeThrough(
						ce(`
`)
					)
					.getReader();
				for (;;) {
					const { value: f, done: w } = await m.read();
					if (w || W) {
						W && s.abort('User: Stop Response');
						break;
					}
					try {
						let S = f.split(`
`);
						for (const T of S)
							if (T !== '')
								if (T === 'data: [DONE]') v(c, t(c));
								else {
									let E = JSON.parse(T.replace(/^data: /, ''));
									if (
										i.content == '' &&
										E.choices[0].delta.content ==
											`
`
									)
										continue;
									((n.style.height = n.scrollHeight + 'px'),
										(i.content += E.choices[0].delta.content ?? ''),
										v(c, t(c)),
										(n.style.height = n.scrollHeight + 'px'),
										await tt());
								}
					} catch (S) {}
					bt();
				}
			}
		},
		_t = async () => {
			t(A) && (t(c).push({ role: t(g), content: t(A) }), v(c, t(c)), v(A, ''), await tt(), bt());
		},
		Rt = async () => {
			t(h) && (await _t(), v(Y, !0), await At(), v(Y, !1), (W = !1));
		},
		Jt = () => {
			const e = Math.floor(Date.now() / 1e3),
				o = {};
			let s = null,
				i = null;
			if (t(b)) {
				const m = crypto.randomUUID();
				((o[m] = {
					id: m,
					parentId: null,
					childrenIds: [],
					role: 'system',
					content: t(b),
					timestamp: e
				}),
					(i = m));
			}
			for (const m of t(c)) {
				const f = crypto.randomUUID();
				(i && o[i] && o[i].childrenIds.push(f),
					(o[f] = {
						id: f,
						parentId: i,
						childrenIds: [],
						role: m.role,
						content: m.content,
						timestamp: e,
						...(m.role === 'assistant' && t(h) ? { model: t(h) } : {})
					}),
					(s = f),
					(i = f));
			}
			const n = {
					chat: {
						title: 'Playground Chat',
						models: [t(h)],
						params: t(b) ? { system: t(b) } : {},
						history: { messages: o, currentId: s }
					},
					meta: {},
					pinned: !1,
					created_at: e,
					updated_at: e
				},
				p = new Blob([JSON.stringify([n], null, 2)], { type: 'application/json' });
			(u(p, `playground-chat-${Date.now()}.json`), vt.success(r().t('Chat exported successfully')));
		},
		Ot = () => {
			let e = '';
			t(b) &&
				(e += `### SYSTEM
${t(b)}

`);
			for (const s of t(c))
				e += `### ${s.role.toUpperCase()}
${s.content}

`;
			const o = new Blob([e.trim()], { type: 'text/plain' });
			(u(o, `playground-chat-${Date.now()}.txt`), vt.success(r().t('Chat exported successfully')));
		};
	(Ut(async () => {
		var e, o, s, i, n;
		(((e = L()) == null ? void 0 : e.role) !== 'admin' && (await ae('/')),
			(o = B()) != null && o.models
				? v(h, (s = B()) == null ? void 0 : s.models[0])
				: (i = x()) != null && i.default_models
					? v(h, (n = x()) == null ? void 0 : n.default_models.split(',')[0])
					: v(h, ''));
	}),
		Kt(
			() => t(P),
			() => {
				t(P) && yt();
			}
		),
		Qt(),
		xt());
	var at = Pe(),
		wt = l(at),
		kt = l(wt),
		rt = l(kt),
		$t = l(rt);
	ve($t, {
		className: 'w-full flex-1',
		buttonClassName:
			'w-full rounded-lg text-sm border border-gray-100/30 dark:border-gray-850/30 w-full py-1 px-1.5',
		grow: !0,
		get open() {
			return t(P);
		},
		set open(e) {
			v(P, e);
		},
		children: (e, o) => {
			var s = ke(),
				i = l(s),
				n = l(i, !0);
			a(i);
			var p = $(i, 2);
			{
				var m = (_) => {
						var K = we(),
							dt = l(K, !0);
						(a(K), k(() => H(dt, t(b))), y(_, K));
					},
					f = Vt(() => (t(P), t(b), d(() => !t(P) && t(b).trim())));
				et(p, (_) => {
					t(f) && _(m);
				});
			}
			var w = $(p, 2),
				S = l(w),
				T = l(S);
			{
				var E = (_) => {
						pe(_, { className: 'size-3.5' });
					},
					V = (_) => {
						me(_, { className: 'size-3.5' });
					};
				et(T, (_) => {
					t(P) ? _(E) : _(V, -1);
				});
			}
			(a(S),
				a(w),
				a(s),
				k((_) => H(n, _), [() => (r(), d(() => r().t('System Instructions')))]),
				y(e, s));
		},
		$$slots: {
			default: !0,
			content: (e, o) => {
				var s = $e(),
					i = l(s),
					n = l(i);
				(ut(n),
					pt(
						n,
						(p) => v(C, p),
						() => t(C)
					),
					a(i),
					a(s),
					k(
						(p) => O(n, 'placeholder', p),
						[() => (r(), d(() => r().t("You're a helpful assistant.")))]
					),
					gt(
						n,
						() => t(b),
						(p) => v(b, p)
					),
					I('input', n, () => {
						yt();
					}),
					y(e, s));
			}
		},
		$$legacy: !0
	});
	var Yt = $($t, 2);
	(ue(Yt, {
		children: (e, o) => {
			var s = De(),
				i = l(s);
			(he(i, { className: 'size-4' }),
				a(s),
				k((n) => O(s, 'aria-label', n), [() => (r(), d(() => r().t('More options')))]),
				y(e, s));
		},
		$$slots: {
			default: !0,
			content: (e, o) => {
				var s = Ee(),
					i = l(s),
					n = l(i);
				(ge(n, {
					children: (p, m) => {
						var f = Ce(),
							w = Pt(f),
							S = l(w),
							T = l(S, !0);
						(a(S), a(w));
						var E = $(w, 2),
							V = l(E),
							_ = l(V, !0);
						(a(V),
							a(E),
							k(
								(K, dt) => {
									((w.disabled = (t(c), d(() => t(c).length === 0))),
										H(T, K),
										(E.disabled = (t(c), d(() => t(c).length === 0))),
										H(_, dt));
								},
								[
									() => (r(), d(() => r().t('Export chat (.json)'))),
									() => (r(), d(() => r().t('Plain text (.txt)')))
								]
							),
							I('click', w, () => {
								Jt();
							}),
							I('click', E, () => {
								Ot();
							}),
							y(p, f));
					},
					$$slots: {
						default: !0,
						trigger: (p, m) => {
							var f = Se(),
								w = l(f);
							fe(w, { strokeWidth: '1.5' });
							var S = $(w, 2),
								T = l(S, !0);
							(a(S), a(f), k((E) => H(T, E), [() => (r(), d(() => r().t('Download')))]), y(p, f));
						}
					}
				}),
					a(i),
					a(s),
					y(e, s));
			}
		}
	}),
		a(rt));
	var Q = $(rt, 2),
		Dt = l(Q),
		Ct = l(Dt),
		Wt = l(Ct);
	(_e(Wt, {
		get messages() {
			return t(c);
		},
		set messages(e) {
			v(c, e);
		},
		$$legacy: !0
	}),
		a(Ct),
		a(Dt),
		a(Q),
		pt(
			Q,
			(e) => v(M, e),
			() => t(M)
		));
	var St = $(Q, 2),
		Et = l(St),
		ot = l(Et),
		G = l(ot);
	(ut(G), a(ot));
	var Ht = $(ot, 2),
		lt = l(Ht),
		q = l(lt),
		qt = l(q);
	{
		var Ft = (e) => {
				var o = Tt();
				(k((s) => H(o, s), [() => (r(), d(() => r().t('User')))]), y(e, o));
			},
			Lt = (e) => {
				var o = Tt();
				(k((s) => H(o, s), [() => (r(), d(() => r().t('Assistant')))]), y(e, o));
			};
		et(qt, (e) => {
			t(g) === 'user' ? e(Ft) : e(Lt, -1);
		});
	}
	(a(q), a(lt));
	var It = $(lt, 2),
		it = l(It),
		nt = l(it);
	(jt(nt, 5, j, Bt, (e, o) => {
		var s = He(),
			i = l(s, !0);
		a(s);
		var n = {};
		(k(() => {
			(H(i, (t(o), d(() => t(o).name))),
				n !== (n = (t(o), d(() => t(o).id))) &&
					(s.value = (s.__value = (t(o), d(() => t(o).id))) ?? ''));
		}),
			y(e, s));
	}),
		a(nt),
		a(it));
	var Mt = $(it, 2),
		Xt = l(Mt);
	{
		var Zt = (e) => {
				var o = Ie(),
					s = Pt(o),
					i = l(s, !0);
				a(s);
				var n = $(s, 2),
					p = l(n, !0);
				(a(n),
					k(
						(m, f) => {
							((s.disabled = t(A) === ''), H(i, m), H(p, f));
						},
						[() => (r(), d(() => r().t('Add'))), () => (r(), d(() => r().t('Run')))]
					),
					I('click', s, () => {
						(_t(), v(g, t(g) === 'user' ? 'assistant' : 'user'));
					}),
					I('click', n, () => {
						Rt();
					}),
					y(e, o));
			},
			Gt = (e) => {
				var o = Me(),
					s = l(o, !0);
				(a(o),
					k((i) => H(s, i), [() => (r(), d(() => r().t('Cancel')))]),
					I('click', o, () => {
						Nt();
					}),
					y(e, o));
			};
		et(Xt, (e) => {
			t(Y) ? e(Gt, -1) : e(Zt);
		});
	}
	(a(Mt),
		a(It),
		a(Ht),
		a(Et),
		a(St),
		a(kt),
		a(wt),
		a(at),
		k(
			(e, o) => {
				(O(G, 'placeholder', e),
					ee(
						q,
						1,
						`px-3.5 py-1.5 text-sm font-medium bg-gray-50 hover:bg-gray-100 text-gray-900 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition rounded-lg shrink-0 ${
							(B(),
							d(() => {
								var s;
								return (((s = B()) == null ? void 0 : s.highContrastMode) ?? !1)
									? ''
									: 'outline-hidden';
							}) ?? '')
						}`
					),
					O(q, 'aria-pressed', t(g) === 'assistant'),
					O(q, 'aria-label', o));
			},
			[
				() => (
					r(),
					t(g),
					d(() =>
						r().t('Enter {{role}} message here', {
							role: t(g) === 'user' ? r().t('a user') : r().t('an assistant')
						})
					)
				),
				() => (
					r(),
					t(g),
					d(() => r().t(t(g) === 'user' ? 'Switch to Assistant role' : 'Switch to User role'))
				)
			]
		),
		gt(
			G,
			() => t(A),
			(e) => v(A, e)
		),
		I('input', G, (e) => {
			((e.target.style.height = ''),
				(e.target.style.height = Math.min(e.target.scrollHeight, 150) + 'px'));
		}),
		I('focus', G, (e) => {
			((e.target.style.height = ''),
				(e.target.style.height = Math.min(e.target.scrollHeight, 150) + 'px'));
		}),
		I('click', q, () => {
			v(g, t(g) === 'user' ? 'assistant' : 'user');
		}),
		te(
			nt,
			() => t(h),
			(e) => v(h, e)
		),
		y(J, at),
		ht(),
		X());
}
function rs(J) {
	Te(J, {});
}
export { rs as component };
//# sourceMappingURL=30.KmN95bkY.js.map
