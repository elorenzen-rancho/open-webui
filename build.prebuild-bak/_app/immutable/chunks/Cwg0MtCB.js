import './CWj6FrbW.js';
import './69_IOA4Y.js';
import {
	p as Me,
	g as Ae,
	w as Ee,
	k as _,
	l as r,
	x as _e,
	y as je,
	c as t,
	r as a,
	n as c,
	t as F,
	z as o,
	d as g,
	q as D,
	a as h,
	b as Be,
	e as re,
	s as Pe,
	m as te,
	i as We,
	E as Oe,
	D as be,
	f as G,
	F as He,
	C as Ke,
	u as Ge,
	aX as $e,
	B as Xe
} from './CD8kWLvT.js';
import { i as X } from './CdIW-EUl.js';
import { a as Ce, s as Le, c as qe, r as Ye } from './BfA5TzUS.js';
import { i as Ue } from './BolXBFGq.js';
import { p as $ } from './DbBXQmQ3.js';
import { c as ze, a as Je, u as Ve } from './Bumd5cCN.js';
import { t as ae } from './DtbOSK9Q.js';
import { a as De, s as Ze, b as Qe, e as et, u as tt } from './Cv8EOoqK.js';
import { o as at } from './BbDdJXLs.js';
import { M as Ne } from './sSXaIhmU.js';
import { L as rt } from './C6dcfJ7i.js';
import { X as Re } from './D48hh3kS.js';
import { A as st } from './CGYkAUsh.js';
import { s as ot } from './ByAzvrkO.js';
import { D as lt } from './BP7slZPW.js';
import { G as it } from './xUS4Kzob.js';
import { P as nt } from './DJIQFSNZ.js';
import { T as dt } from './BUv1YIBp.js';
import { D as ct } from './EP3pq2rN.js';
import { a as ut } from './NW0ItIZj.js';
import { b as vt } from './QcGoGJ5n.js';
import { p as ft } from './Bfc47y5P.js';
import { S as mt } from './BqNz_fa8.js';
import './D8_neGVh.js';
import { T as gt } from './DTFIeVjj.js';
import { K as pt } from './Dqf09jWH.js';
import { g as _t } from './CoWaXxzQ.js';
var bt = G(
		'<a target="_blank"> <span class=" underline"> </span>.</a> <button class="underline"> </button> ',
		1
	),
	xt = G('<div class="mt-3"><!></div>'),
	ht = G(
		'<button class="flex items-center gap-1 px-3.5 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-850 dark:text-white dark:hover:bg-gray-800 transition rounded-full" type="button"> </button>'
	),
	yt = G(
		'<div class="px-5 pt-4 pb-5 w-full flex flex-col"><div class="text-sm dark:text-gray-300"><!></div> <!> <div class="flex justify-end gap-1 mt-3"><!> <button class="flex items-center gap-1 px-3.5 py-2 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="button" id="copy-and-share-chat-button"><!> <!></button></div></div>'
	),
	wt = G(
		'<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-0.5"><div class=" text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <!></div>'
	);
function oa(q, p) {
	Me(p, !1);
	const e = () => re(ue, '$i18n', z),
		Y = () => re(Je, '$models', z),
		E = () => re(ze, '$config', z),
		[z, ce] = Pe();
	let w = $(p, 'chatId', 8),
		l = te(null),
		J = null,
		B = te([]);
	const ue = Ae('i18n'),
		M = async () => {
			r(l);
			const i = await Ze(localStorage.token, w());
			return (
				(J = `${window.location.origin}/s/${i.share_id}`),
				_(l, await De(localStorage.token, w())),
				J
			);
		},
		k = async () => {
			const i = r(l).chat;
			ae.success(e().t('Redirecting you to Open WebUI Community'));
			const L = 'https://openwebui.com',
				P = await window.open(`${L}/chats/upload`, '_blank');
			window.addEventListener(
				'message',
				(u) => {
					u.origin === L &&
						u.data === 'loaded' &&
						P.postMessage(
							JSON.stringify({ chat: i, models: Y().filter((A) => i.models.includes(A.id)) }),
							'*'
						);
				},
				!1
			);
		},
		N = async () => {
			if (w())
				try {
					_(B, (await Qe(localStorage.token, w())) ?? []);
				} catch (i) {
					_(B, []);
				}
		},
		x = async () => {
			try {
				(await tt(localStorage.token, w(), r(B)), ae.success(e().t('Access updated')));
			} catch (i) {
				ae.error(`${i}`);
			}
		};
	let m = $(p, 'show', 12, !1);
	const y = (i) => (r(l) ? (i ? r(l).id !== i.id || r(l).share_id !== i.share_id : !1) : !0);
	(Ee(
		() => (_e(m()), _e(w()), r(l)),
		() => {
			m() &&
				(async () => {
					if (w()) {
						const i = await De(localStorage.token, w());
						(y(i) && _(l, i), await N());
					} else (_(l, null), _(B, []), r(l));
				})();
		}
	),
		je(),
		Ue(),
		Ne(q, {
			size: 'md',
			get show() {
				return m();
			},
			set show(i) {
				m(i);
			},
			children: (i, L) => {
				var P = wt(),
					u = t(P),
					A = t(u),
					U = t(A, !0);
				a(A);
				var C = c(A, 2),
					S = t(C);
				(Re(S, { className: 'size-5' }), a(C), a(u));
				var O = c(u, 2);
				{
					var se = (R) => {
						var I = yt(),
							H = t(I),
							V = t(H);
						{
							var oe = (v) => {
									var d = bt(),
										b = We(d),
										T = t(b),
										he = c(T),
										ge = t(he, !0);
									(a(he), Oe(), a(b));
									var ye = c(b),
										ee = c(ye),
										de = t(ee, !0);
									a(ee);
									var we = c(ee);
									(F(
										(ke, Ie, s, n, f) => {
											(Ce(b, 'href', `/s/${(r(l), o(() => r(l).share_id) ?? '')}`),
												g(T, `${ke ?? ''} `),
												g(ge, Ie),
												g(ye, ` ${s ?? ''} `),
												g(de, n),
												g(we, ` ${f ?? ''}`));
										},
										[
											() => (e(), o(() => e().t('You have shared this chat'))),
											() => (e(), o(() => e().t('before'))),
											() => (e(), o(() => e().t('Click here to'))),
											() => (e(), o(() => e().t('delete this link'))),
											() => (e(), o(() => e().t('and create a new shared link.')))
										]
									),
										D('click', ee, async () => {
											(await et(localStorage.token, w())) &&
												_(l, await De(localStorage.token, w()));
										}),
										h(v, d));
								},
								Z = (v) => {
									var d = be();
									(F(
										(b) => g(d, b),
										[
											() => (
												e(),
												o(() =>
													e().t(
														"Messages you send after creating your link won't be shared. Users with the URL will be able to view the shared chat."
													)
												)
											)
										]
									),
										h(v, d));
								};
							X(V, (v) => {
								(r(l), o(() => r(l).share_id) ? v(oe) : v(Z, -1));
							});
						}
						a(H);
						var K = c(H, 2);
						{
							var Q = (v) => {
								var d = xt(),
									b = t(d);
								(st(b, {
									accessRoles: ['read'],
									onChange: x,
									get accessGrants() {
										return r(B);
									},
									set accessGrants(T) {
										_(B, T);
									},
									$$legacy: !0
								}),
									a(d),
									h(v, d));
							};
							X(K, (v) => {
								(r(l), o(() => r(l).share_id) && v(Q));
							});
						}
						var le = c(K, 2),
							ve = t(le);
						{
							var fe = (v) => {
								var d = ht(),
									b = t(d, !0);
								(a(d),
									F((T) => g(b, T), [() => (e(), o(() => e().t('Share to Open WebUI Community')))]),
									D('click', d, () => {
										k();
									}),
									h(v, d));
							};
							X(ve, (v) => {
								(E(),
									o(() => {
										var d;
										return (d = E()) == null ? void 0 : d.features.enable_community_sharing;
									}) && v(fe));
							});
						}
						var ie = c(ve, 2),
							ne = t(ie);
						rt(ne, {});
						var me = c(ne, 2);
						{
							var Se = (v) => {
									var d = be();
									(F((b) => g(d, b), [() => (e(), o(() => e().t('Update and Copy Link')))]),
										h(v, d));
								},
								xe = (v) => {
									var d = be();
									(F((b) => g(d, b), [() => (e(), o(() => e().t('Copy Link')))]), h(v, d));
								};
							X(me, (v) => {
								(r(l), o(() => r(l).share_id) ? v(Se) : v(xe, -1));
							});
						}
						(a(ie),
							a(le),
							a(I),
							D('click', ie, async () => {
								if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
									const d = async () => {
										const b = await M();
										return new Blob([b], { type: 'text/plain' });
									};
									navigator.clipboard
										.write([new ClipboardItem({ 'text/plain': d() })])
										.then(() => !0)
										.catch((b) => !1);
								} else at(await M());
								ae.success(e().t('Copied shared chat URL to clipboard!'));
							}),
							h(R, I));
					};
					X(O, (R) => {
						r(l) && R(se);
					});
				}
				(a(P),
					F(
						(R, I) => {
							(g(U, R), Ce(C, 'aria-label', I));
						},
						[() => (e(), o(() => e().t('Share Chat'))), () => (e(), o(() => e().t('Close')))]
					),
					D('click', C, () => {
						m(!1);
					}),
					h(i, P));
			},
			$$slots: { default: !0 },
			$$legacy: !0
		}),
		Be(),
		ce());
}
var kt = He(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path></svg>'
);
function la(q, p) {
	let e = $(p, 'className', 8, 'size-4'),
		Y = $(p, 'strokeWidth', 8, '1.5');
	var E = kt();
	(F(() => {
		(Ce(E, 'stroke-width', Y()), Le(E, 0, qe(e())));
	}),
		h(q, E));
}
var $t = G('<button><!></button>'),
	Ct = G(
		'<div slot="content"><div class="min-w-[170px] rounded-2xl px-1 py-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg"><button class="flex gap-2 items-center px-3 py-1.5 text-sm select-none cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button> <hr class="border-gray-50/30 dark:border-gray-800/30 my-1"/> <button class="flex gap-2 items-center px-3 py-1.5 text-sm select-none cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button> <button class="flex gap-2 items-center px-3 py-1.5 text-sm select-none cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button> <button class="flex gap-2 items-center px-3 py-1.5 text-sm select-none cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button></div></div>'
	);
function ia(q, p) {
	Me(p, !1);
	const e = () => re(z, '$i18n', Y),
		[Y, E] = Pe(),
		z = Ae('i18n'),
		ce = Ke();
	let w = $(p, 'align', 8, 'start'),
		l = $(p, 'onEdit', 8, () => {}),
		J = $(p, 'onExport', 8, () => {}),
		B = $(p, 'onDelete', 8, () => {}),
		ue = $(p, 'onCreateSub', 8, () => {}),
		M = te(!1);
	(Ue(),
		lt(q, {
			get align() {
				return w();
			},
			onOpenChange: (k) => {
				k === !1 && ce('close');
			},
			get show() {
				return r(M);
			},
			set show(k) {
				_(M, k);
			},
			children: (k, N) => {
				{
					let x = Ge(() => (e(), o(() => e().t('More'))));
					dt(k, {
						get content() {
							return r(x);
						},
						children: (m, y) => {
							var i = $t(),
								L = t(i);
							(ot(L, p, 'default', {}, null),
								a(i),
								D('click', i, (P) => {
									(P.stopPropagation(), _(M, !r(M)));
								}),
								h(m, i));
						},
						$$slots: { default: !0 }
					});
				}
			},
			$$slots: {
				default: !0,
				content: (k, N) => {
					var x = Ct(),
						m = t(x),
						y = t(m),
						i = t(y);
					ut(i, {});
					var L = c(i, 2),
						P = t(L, !0);
					(a(L), a(y));
					var u = c(y, 4),
						A = t(u);
					nt(A, {});
					var U = c(A, 2),
						C = t(U, !0);
					(a(U), a(u));
					var S = c(u, 2),
						O = t(S);
					ct(O, {});
					var se = c(O, 2),
						R = t(se, !0);
					(a(se), a(S));
					var I = c(S, 2),
						H = t(I);
					it(H, {});
					var V = c(H, 2),
						oe = t(V, !0);
					(a(V),
						a(I),
						a(m),
						a(x),
						F(
							(Z, K, Q, le) => {
								(g(P, Z), g(C, K), g(R, Q), g(oe, le));
							},
							[
								() => (e(), o(() => e().t('Create Folder'))),
								() => (e(), o(() => e().t('Edit'))),
								() => (e(), o(() => e().t('Export'))),
								() => (e(), o(() => e().t('Delete')))
							]
						),
						D('click', y, () => {
							ue()();
						}),
						D('click', u, () => {
							l()();
						}),
						D('click', S, () => {
							J()();
						}),
						D('click', I, () => {
							B()();
						}),
						h(k, x));
				}
			},
			$$legacy: !0
		}),
		Be(),
		E());
}
var St = G(
		'<div class="my-1"><div class="mb-2 text-xs text-gray-500"> </div> <div><!></div></div>'
	),
	It = G(
		'<div slot="label"><div class="flex w-full justify-between"><div class=" mb-2 text-xs text-gray-500"> </div></div></div>'
	),
	Ft = G('<div class="ml-2 self-center"><!></div>'),
	Dt = G(
		'<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-1"><div class=" text-lg font-medium self-center"><!></div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="flex flex-col w-full mt-1"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><input id="folder-name" class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text" autocomplete="off"/></div></div> <input id="folder-background-image-input" type="file" hidden="" accept="image/*"/> <div class="flex justify-between w-full mt-1 items-center"><div class="text-xs text-gray-500"> </div> <div><button aria-labelledby="chat-background-label background-image-url-state" class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><span class="ml-2 self-center" id="background-image-url-state"> </span></button></div></div> <hr class=" border-gray-50 dark:border-gray-850/30 my-2.5 w-full"/> <!> <div class="my-2"><!></div> <div class="flex justify-end pt-3 text-sm font-medium gap-1.5"><button type="submit"> <!></button></div></form></div></div></div>'
	);
function na(q, p) {
	Me(p, !1);
	const e = () => re(w, '$i18n', z),
		Y = () => re(ze, '$config', z),
		E = () => re(Ve, '$user', z),
		[z, ce] = Pe(),
		w = Ae('i18n');
	let l = $(p, 'show', 12, !1),
		J = $(p, 'onSubmit', 8, (u) => {}),
		B = $(p, 'folderId', 8, null),
		ue = $(p, 'parentId', 8, null),
		M = $(p, 'edit', 8, !1),
		k = null,
		N = te(''),
		x = te({ background_image_url: null }),
		m = te({ system_prompt: '', files: [] }),
		y = te(!1);
	const i = async () => {
			var A, U, C, S;
			if (
				(_(y, !0),
				(((A = r(m)) == null ? void 0 : A.files) ?? []).some((O) => O.status === 'uploading'))
			) {
				(ae.error(e().t('Please wait until all files are uploaded.')), _(y, !1));
				return;
			}
			const u =
				((C = (U = Y()) == null ? void 0 : U.features) == null
					? void 0
					: C.folder_max_file_count) ?? '';
			if (u && (((S = r(m)) == null ? void 0 : S.files) ?? []).length > u) {
				(ae.error(e().t('Maximum number of files per folder is {{max}}.', { max: u ?? 0 })),
					_(y, !1));
				return;
			}
			(await J()({ name: r(N), meta: r(x), data: r(m), parent_id: M() ? void 0 : ue() }),
				l(!1),
				_(y, !1));
		},
		L = async () => {
			(B() &&
				((k = await _t(localStorage.token, B()).catch((u) => (ae.error(`${u}`), null))),
				_(N, k.name),
				_(x, k.meta || { background_image_url: null }),
				_(m, k.data || { system_prompt: '', files: [] })),
				P());
		},
		P = async () => {
			await Xe();
			const u = document.getElementById('folder-name');
			u && (u.focus(), u.select());
		};
	(Ee(
		() => _e(l()),
		() => {
			l() && L();
		}
	),
		Ee(
			() => (_e(l()), _e(M())),
			() => {
				!l() &&
					!M() &&
					(_(N, ''), _(x, { background_image_url: null }), _(m, { system_prompt: '', files: [] }));
			}
		),
		je(),
		Ue(),
		Ne(q, {
			size: 'md',
			get show() {
				return l();
			},
			set show(u) {
				l(u);
			},
			children: (u, A) => {
				var U = Dt(),
					C = t(U),
					S = t(C),
					O = t(S);
				{
					var se = (s) => {
							var n = be();
							(F((f) => g(n, f), [() => (e(), o(() => e().t('Edit Folder')))]), h(s, n));
						},
						R = (s) => {
							var n = be();
							(F((f) => g(n, f), [() => (e(), o(() => e().t('Create Folder')))]), h(s, n));
						};
					X(O, (s) => {
						M() ? s(se) : s(R, -1);
					});
				}
				a(S);
				var I = c(S, 2),
					H = t(I);
				(Re(H, { className: 'size-5' }), a(I), a(C));
				var V = c(C, 2),
					oe = t(V),
					Z = t(oe),
					K = t(Z),
					Q = t(K),
					le = t(Q, !0);
				a(Q);
				var ve = c(Q, 2),
					fe = t(ve);
				(Ye(fe), a(ve), a(K));
				var ie = c(K, 2),
					ne = c(ie, 2),
					me = t(ne),
					Se = t(me, !0);
				a(me);
				var xe = c(me, 2),
					v = t(xe),
					d = t(v),
					b = t(d, !0);
				(a(d), a(v), a(xe), a(ne));
				var T = c(ne, 4);
				{
					var he = (s) => {
						var n = St(),
							f = t(n),
							j = t(f, !0);
						a(f);
						var W = c(f, 2),
							Fe = t(W);
						{
							let pe = Ge(
								() => (
									e(),
									o(() =>
										e().t(`Write your model system prompt content here
e.g.) You are Mario from Super Mario Bros, acting as an assistant.`)
									)
								)
							);
							gt(Fe, {
								className: ' text-sm w-full bg-transparent outline-hidden ',
								get placeholder() {
									return r(pe);
								},
								maxSize: 200,
								get value() {
									return r(m).system_prompt;
								},
								set value(Te) {
									$e(m, (r(m).system_prompt = Te));
								},
								$$legacy: !0
							});
						}
						(a(W),
							a(n),
							F((pe) => g(j, pe), [() => (e(), o(() => e().t('System Prompt')))]),
							h(s, n));
					};
					X(T, (s) => {
						(E(),
							o(() => {
								var n, f, j;
								return (
									((n = E()) == null ? void 0 : n.role) === 'admin' ||
									(((j = (f = E()) == null ? void 0 : f.permissions.chat) == null
										? void 0
										: j.system_prompt) ??
										!0)
								);
							}) && s(he));
					});
				}
				var ge = c(T, 2),
					ye = t(ge);
				(pt(ye, {
					get selectedItems() {
						return r(m).files;
					},
					set selectedItems(s) {
						$e(m, (r(m).files = s));
					},
					$$slots: {
						label: (s, n) => {
							var f = It(),
								j = t(f),
								W = t(j),
								Fe = t(W, !0);
							(a(W),
								a(j),
								a(f),
								F((pe) => g(Fe, pe), [() => (e(), o(() => e().t('Knowledge')))]),
								h(s, f));
						}
					},
					$$legacy: !0
				}),
					a(ge));
				var ee = c(ge, 2),
					de = t(ee),
					we = t(de),
					ke = c(we);
				{
					var Ie = (s) => {
						var n = Ft(),
							f = t(n);
						(mt(f, {}), a(n), h(s, n));
					};
					X(ke, (s) => {
						r(y) && s(Ie);
					});
				}
				(a(de),
					a(ee),
					a(Z),
					a(oe),
					a(V),
					a(U),
					F(
						(s, n, f, j, W) => {
							(g(le, s),
								Ce(fe, 'placeholder', n),
								g(Se, f),
								g(b, j),
								Le(
									de,
									1,
									`px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-950 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center ${r(y) ? ' cursor-not-allowed' : ''}`
								),
								(de.disabled = r(y)),
								g(we, `${W ?? ''} `));
						},
						[
							() => (e(), o(() => e().t('Folder Name'))),
							() => (e(), o(() => e().t('Enter folder name'))),
							() => (e(), o(() => e().t('Folder Background Image'))),
							() => (
								r(x),
								e(),
								o(() => {
									var s;
									return (((s = r(x)) == null ? void 0 : s.background_image_url) ?? null) === null
										? e().t('Upload')
										: e().t('Reset');
								})
							),
							() => (e(), o(() => e().t('Save')))
						]
					),
					D('click', I, () => {
						l(!1);
					}),
					vt(
						fe,
						() => r(N),
						(s) => _(N, s)
					),
					D('change', ie, (s) => {
						const n = s.target.files;
						let f = new FileReader();
						((f.onload = (j) => {
							let W = `${j.target.result}`;
							$e(x, (r(x).background_image_url = W));
						}),
							n &&
							n.length > 0 &&
							['image/gif', 'image/webp', 'image/jpeg', 'image/png'].includes(n[0].type)
								? f.readAsDataURL(n[0])
								: (`${n[0].type}`, (s.target.value = '')));
					}),
					D('click', v, () => {
						var s;
						if (((s = r(x)) == null ? void 0 : s.background_image_url) !== null)
							$e(x, (r(x).background_image_url = null));
						else {
							const n = document.getElementById('folder-background-image-input');
							n && n.click();
						}
					}),
					D(
						'submit',
						Z,
						ft(() => {
							i();
						})
					),
					h(u, U));
			},
			$$slots: { default: !0 },
			$$legacy: !0
		}),
		Be(),
		ce());
}
export { la as D, na as F, oa as S, ia as a };
//# sourceMappingURL=Cwg0MtCB.js.map
