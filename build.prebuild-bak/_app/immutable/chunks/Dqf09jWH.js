import { b as Sa } from './CHheSG1Y.js';
import './CWj6FrbW.js';
import './69_IOA4Y.js';
import {
	p as ke,
	g as $e,
	C as Na,
	v as Ta,
	l as g,
	o as Ge,
	w as re,
	k as $t,
	y as je,
	c as n,
	r as a,
	n as x,
	z as s,
	t as b,
	a as _,
	h as Le,
	i as Yt,
	d as w,
	x as k,
	q as X,
	u as W,
	b as Ce,
	e as Gt,
	s as ze,
	m as Nt,
	D as we,
	f,
	aX as Da,
	A as Aa
} from './CD8kWLvT.js';
import { i as $ } from './CdIW-EUl.js';
import { e as Pe, i as Se } from './BUYMbiFA.js';
import { s as Ve } from './ByAzvrkO.js';
import { b as T, c as Ia } from './QcGoGJ5n.js';
import { b as Oa } from './BCA7d6a5.js';
import { i as Ne } from './BolXBFGq.js';
import { p as Vt } from './DbBXQmQ3.js';
import { c as Ea, u as qa, b as Ba } from './Bumd5cCN.js';
import { r as N, a as zt, f as Fa } from './BfA5TzUS.js';
import { d as Ra } from './BC4znSyB.js';
import { s as Ua } from './DLNPWPQH.js';
import { s as Ma, a as Ka } from './Cz9Pz2N7.js';
import { E as ne, v as Wa } from './BbDdJXLs.js';
import { D as Xa } from './BP7slZPW.js';
import { S as Ja } from './DebrQlxL.js';
import { T as L } from './BUv1YIBp.js';
import { P as La, D as Ha, F as Ga } from './NW0ItIZj.js';
import { D as Va } from './FsbvYLPp.js';
import { u as Ya } from './DvyeJwyB.js';
import { t as Lt } from './DtbOSK9Q.js';
import { S as He } from './B7AdTFQk.js';
import { T as Qa } from './DTFIeVjj.js';
import { P as Za } from './Cr47sKic.js';
const dl = async (U) => {
		const P = await fetch(`${Sa}/terminals/`, { headers: { Authorization: `Bearer ${U}` } }).catch(
			() => null
		);
		return !P || !P.ok ? [] : P.json().catch(() => []);
	},
	cl = async (U, P) => {
		const e = `${U.replace(/\/$/, '')}/api/config`,
			z = await fetch(e, { headers: { Authorization: `Bearer ${P}` } }).catch(() => null);
		return !z || !z.ok ? null : z.json().catch(() => null);
	},
	pl = async (U, P, e) => {
		const z = `${U.replace(/\/$/, '')}/files/cwd`,
			q = { Authorization: `Bearer ${P}` };
		e && (q['X-Session-Id'] = e);
		const I = await fetch(z, { headers: q }).catch(() => null);
		if (!I || !I.ok) return null;
		const D = await I.json().catch(() => null);
		return (D == null ? void 0 : D.cwd) ?? null;
	},
	_l = async (U, P, e = '/', z) => {
		const q = `${U.replace(/\/$/, '')}/files/list?directory=${encodeURIComponent(e)}`,
			I = { Authorization: `Bearer ${P}` };
		z && (I['X-Session-Id'] = z);
		const D = await fetch(q, { headers: I })
			.then(async (F) => {
				if (!F.ok) throw await F.json();
				return F.json();
			})
			.catch((F) => null);
		return (D == null ? void 0 : D.entries) ?? null;
	},
	fl = async (U, P, e, z) => {
		const q = `${U.replace(/\/$/, '')}/files/read?path=${encodeURIComponent(e)}`,
			I = { Authorization: `Bearer ${P}` };
		z && (I['X-Session-Id'] = z);
		const D = await fetch(q, { headers: I }).catch((nt) => null);
		if (!D || !D.ok) return null;
		const F = D.headers.get('content-type') ?? '';
		if (F.startsWith('image/') || F.startsWith('application/octet')) return `[Binary file: ${F}]`;
		const S = await D.json().catch(() => null);
		return (S == null ? void 0 : S.content) ?? null;
	},
	ml = async (U, P, e, z) => {
		const q = `${U.replace(/\/$/, '')}/files/view?path=${encodeURIComponent(e)}`,
			I = { Authorization: `Bearer ${P}` };
		z && (I['X-Session-Id'] = z);
		const D = await fetch(q, { headers: I }).catch(() => null);
		if (!D || !D.ok) return null;
		const F = e.split('/').pop() ?? 'file';
		return { blob: await D.blob(), filename: F };
	},
	xl = async (U, P, e, z) => {
		const q = `${U.replace(/\/$/, '')}/files/archive`,
			I = { Authorization: `Bearer ${P}`, 'Content-Type': 'application/json' },
			D = await fetch(q, { method: 'POST', headers: I, body: JSON.stringify({ paths: e }) }).catch(
				() => null
			);
		if (!D || !D.ok) return null;
		const S = (D.headers.get('content-disposition') ?? '').match(/filename="?([^"]+)"?/),
			nt = (S == null ? void 0 : S[1]) ?? 'download.zip';
		return { blob: await D.blob(), filename: nt };
	},
	hl = async (U, P, e, z, q) => {
		const I = `${U.replace(/\/$/, '')}/files/upload?directory=${encodeURIComponent(e)}`,
			D = new FormData();
		D.append('file', z);
		const F = { Authorization: `Bearer ${P}` };
		return (
			q && (F['X-Session-Id'] = q),
			await fetch(I, { method: 'POST', headers: F, body: D })
				.then(async (nt) => {
					if (!nt.ok) throw await nt.json();
					return nt.json();
				})
				.catch((nt) => null)
		);
	},
	gl = async (U, P, e, z) => {
		const q = `${U.replace(/\/$/, '')}/files/mkdir`,
			I = { Authorization: `Bearer ${P}`, 'Content-Type': 'application/json' };
		return (
			z && (I['X-Session-Id'] = z),
			await fetch(q, { method: 'POST', headers: I, body: JSON.stringify({ path: e }) })
				.then(async (F) => {
					if (!F.ok) throw await F.json();
					return F.json();
				})
				.catch((F) => null)
		);
	},
	bl = async (U, P, e, z) => {
		const q = `${U.replace(/\/$/, '')}/files/delete?path=${encodeURIComponent(e)}`,
			I = { Authorization: `Bearer ${P}` };
		return (
			z && (I['X-Session-Id'] = z),
			await fetch(q, { method: 'DELETE', headers: I })
				.then(async (F) => {
					if (!F.ok) throw await F.json();
					return F.json();
				})
				.catch((F) => null)
		);
	},
	yl = async (U, P, e, z) => {
		const q = `${U.replace(/\/$/, '')}/files/cwd`,
			I = { Authorization: `Bearer ${P}`, 'Content-Type': 'application/json' };
		return (
			z && (I['X-Session-Id'] = z),
			await fetch(q, { method: 'POST', headers: I, body: JSON.stringify({ path: e }) })
				.then(async (F) => {
					if (!F.ok) throw await F.json();
					return F.json();
				})
				.catch((F) => null)
		);
	},
	wl = async (U, P, e, z, q) => {
		const I = `${U.replace(/\/$/, '')}/files/move`,
			D = { Authorization: `Bearer ${P}`, 'Content-Type': 'application/json' };
		return (
			q && (D['X-Session-Id'] = q),
			await fetch(I, {
				method: 'POST',
				headers: D,
				body: JSON.stringify({ source: e, destination: z })
			})
				.then(async (S) => {
					if (!S.ok) throw await S.json();
					return S.json();
				})
				.catch((S) => ({ error: (S == null ? void 0 : S.detail) ?? 'Move failed' }))
		);
	},
	kl = async (U, P) => {
		const e = `${U.replace(/\/$/, '')}/ports`,
			z = await fetch(e, { headers: { Authorization: `Bearer ${P}` } }).catch(() => null);
		if (!z || !z.ok) return [];
		const q = await z.json().catch(() => null);
		return (q == null ? void 0 : q.ports) ?? [];
	},
	$l = (U, P, e = '') => `${U.replace(/\/$/, '')}/proxy/${P}/${e}`,
	jl = async (U, P, e) => {
		const z = `${U.replace(/\/$/, '')}/notebooks`;
		return await fetch(z, {
			method: 'POST',
			headers: { Authorization: `Bearer ${P}`, 'Content-Type': 'application/json' },
			body: JSON.stringify({ path: e })
		})
			.then(async (I) => {
				if (!I.ok) {
					const D = await I.json().catch(() => ({}));
					return { error: (D == null ? void 0 : D.detail) ?? `HTTP ${I.status}` };
				}
				return I.json();
			})
			.catch((I) => ({ error: 'Connection failed' }));
	},
	Cl = async (U, P, e, z, q) => {
		const I = `${U.replace(/\/$/, '')}/notebooks/${e}/execute`,
			D = { cell_index: z };
		return (
			q !== void 0 && (D.source = q),
			await fetch(I, {
				method: 'POST',
				headers: { Authorization: `Bearer ${P}`, 'Content-Type': 'application/json' },
				body: JSON.stringify(D)
			})
				.then(async (S) => {
					if (!S.ok) {
						const nt = await S.json().catch(() => ({}));
						return { error: (nt == null ? void 0 : nt.detail) ?? `HTTP ${S.status}` };
					}
					return S.json();
				})
				.catch((S) => ({ error: 'Connection failed' }))
		);
	},
	zl = async (U, P, e) => {
		const z = `${U.replace(/\/$/, '')}/notebooks/${e}`,
			q = await fetch(z, { method: 'DELETE', headers: { Authorization: `Bearer ${P}` } }).catch(
				() => null
			);
		return (q == null ? void 0 : q.ok) ?? !1;
	};
var tn = f('<div class="text-center text-xs text-gray-500 dark:text-gray-400 pt-4 pb-6"> </div>'),
	en = f('<div class="px-2 text-xs text-gray-500 py-1"><!></div>'),
	an = f('<div class="line-clamp-1 flex-1 text-sm text-left"> </div>'),
	nn = f(
		'<!> <div class=" px-2.5 py-1 rounded-xl w-full text-left flex justify-between items-center text-sm hover:bg-gray-50 hover:dark:bg-gray-800 hover:dark:text-gray-100 selected-command-option-button"><button class="w-full flex-1" type="button"><div class="  text-black dark:text-gray-100 flex items-center gap-1 shrink-0"><!> <!></div></button></div>',
		1
	),
	rn = f(
		'<div slot="content"><div class="z-[10000] text-black dark:text-white rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col bg-white dark:bg-gray-850 w-70 p-1.5"><div class=" flex w-full space-x-2 px-2 pb-0.5"><div class="flex flex-1"><div class=" self-center mr-2"><!></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/></div></div> <div class="max-h-56 overflow-y-scroll gap-0.5 flex flex-col"><!></div></div></div>'
	);
function sn(U, P) {
	ke(P, !1);
	const e = () => Gt(I, '$i18n', z),
		[z, q] = ze(),
		I = $e('i18n'),
		D = Na();
	let F = Vt(P, 'onClose', 8, () => {}),
		S = Nt(!1),
		nt = Nt(''),
		t = Nt(),
		gt = Nt([]),
		bt = Nt([]),
		Bt = Nt([]),
		jt = Nt([]);
	Ta(() => {
		clearTimeout(g(t));
	});
	const Ft = () => {
			(Pt(), Ht(), It());
		},
		Pt = async () => {
			const rt = await Ua(localStorage.token, g(nt)).catch(() => null);
			rt &&
				$t(
					gt,
					rt.items.map((ct) => ({
						...ct,
						type: 'note',
						name: ct.title,
						description: Ra(ct.updated_at / 1e6).fromNow()
					}))
				);
		},
		Ht = async () => {
			const rt = await Ma(localStorage.token, g(nt)).catch(() => null);
			rt &&
				$t(
					bt,
					rt.items.map((ct) => ({ ...ct, type: 'collection' }))
				);
		},
		It = async () => {
			const rt = await Ka(localStorage.token, g(nt)).catch(() => null);
			rt &&
				$t(
					Bt,
					rt.items.map((ct) => {
						var yt;
						return {
							...ct,
							type: 'file',
							name: ((yt = ct.meta) == null ? void 0 : yt.name) || ct.filename,
							description: ct.description || ''
						};
					})
				);
		};
	(Ge(async () => {
		Ft();
	}),
		re(
			() => (g(gt), g(bt), g(Bt)),
			() => {
				$t(jt, [...g(gt), ...g(bt), ...g(Bt)]);
			}
		),
		re(
			() => (g(nt), g(t)),
			() => {
				g(nt) !== void 0 &&
					(clearTimeout(g(t)),
					$t(
						t,
						setTimeout(() => {
							Ft();
						}, 300)
					));
			}
		),
		je(),
		Ne(),
		Xa(U, {
			get show() {
				return g(S);
			},
			set show(rt) {
				$t(S, rt);
			},
			$$events: {
				change: (rt) => {
					rt.detail === !1 && (F()(), $t(nt, ''));
				}
			},
			children: (rt, ct) => {
				var yt = Le(),
					Ot = Yt(yt);
				(Ve(Ot, P, 'default', {}, null), _(rt, yt));
			},
			$$slots: {
				default: !0,
				content: (rt, ct) => {
					var yt = rn(),
						Ot = n(yt),
						Tt = n(Ot),
						Et = n(Tt),
						Rt = n(Et),
						Y = n(Rt);
					(Ja(Y, { className: 'size-3.5' }), a(Rt));
					var H = x(Rt, 2);
					(N(H), a(Et), a(Tt));
					var it = x(Tt, 2),
						V = n(it);
					{
						var ft = (G) => {
								var Z = tn(),
									lt = n(Z, !0);
								(a(Z),
									b((ut) => w(lt, ut), [() => (e(), s(() => e().t('No knowledge found')))]),
									_(G, Z));
							},
							st = (G) => {
								var Z = Le(),
									lt = Yt(Z);
								(Pe(
									lt,
									1,
									() => g(jt),
									Se,
									(ut, et, Ut) => {
										var Mt = nn(),
											Dt = Yt(Mt);
										{
											var Kt = (pt) => {
												var dt = en(),
													mt = n(dt);
												{
													var Ct = (wt) => {
															var vt = we();
															(b((Xt) => w(vt, Xt), [() => (e(), s(() => e().t('Notes')))]),
																_(wt, vt));
														},
														Zt = (wt) => {
															var vt = we();
															(b((Xt) => w(vt, Xt), [() => (e(), s(() => e().t('Collections')))]),
																_(wt, vt));
														},
														qt = (wt) => {
															var vt = we();
															(b((Xt) => w(vt, Xt), [() => (e(), s(() => e().t('Files')))]),
																_(wt, vt));
														};
													$(mt, (wt) => {
														(g(et),
															s(() => {
																var vt;
																return ((vt = g(et)) == null ? void 0 : vt.type) === 'note';
															})
																? wt(Ct)
																: (g(et),
																	s(() => {
																		var vt;
																		return (
																			((vt = g(et)) == null ? void 0 : vt.type) === 'collection'
																		);
																	})
																		? wt(Zt, 1)
																		: (g(et),
																			s(() => {
																				var vt;
																				return ((vt = g(et)) == null ? void 0 : vt.type) === 'file';
																			}) && wt(qt, 2))));
													});
												}
												(a(dt), _(pt, dt));
											};
											$(Dt, (pt) => {
												(g(et),
													g(jt),
													s(() => {
														var dt, mt;
														return (
															Ut === 0 ||
															((dt = g(et)) == null ? void 0 : dt.type) !==
																((mt = g(jt)[Ut - 1]) == null ? void 0 : mt.type)
														);
													}) && pt(Kt));
											});
										}
										var Wt = x(Dt, 2),
											St = n(Wt),
											tt = n(St),
											At = n(tt);
										{
											var se = (pt) => {
													{
														let dt = W(() => (e(), s(() => e().t('Note'))));
														L(pt, {
															get content() {
																return g(dt);
															},
															placement: 'top',
															tippyOptions: { zIndex: 1e5 },
															children: (mt, Ct) => {
																La(mt, { className: 'size-4' });
															},
															$$slots: { default: !0 }
														});
													}
												},
												le = (pt) => {
													{
														let dt = W(() => (e(), s(() => e().t('Collection'))));
														L(pt, {
															get content() {
																return g(dt);
															},
															placement: 'top',
															tippyOptions: { zIndex: 1e5 },
															children: (mt, Ct) => {
																Ha(mt, { className: 'size-4' });
															},
															$$slots: { default: !0 }
														});
													}
												},
												Qt = (pt) => {
													{
														let dt = W(() => (e(), s(() => e().t('File'))));
														L(pt, {
															get content() {
																return g(dt);
															},
															placement: 'top',
															tippyOptions: { zIndex: 1e5 },
															children: (mt, Ct) => {
																Va(mt, { className: 'size-4' });
															},
															$$slots: { default: !0 }
														});
													}
												};
											$(At, (pt) => {
												(g(et),
													s(() => g(et).type === 'note')
														? pt(se)
														: (g(et),
															s(() => g(et).type === 'collection')
																? pt(le, 1)
																: (g(et), s(() => g(et).type === 'file') && pt(Qt, 2))));
											});
										}
										var ae = x(At, 2);
										{
											let pt = W(
												() => (
													g(et),
													k(ne),
													s(() => {
														var dt;
														return g(et).description || ne((dt = g(et)) == null ? void 0 : dt.name);
													})
												)
											);
											L(ae, {
												get content() {
													return g(pt);
												},
												placement: 'top-start',
												tippyOptions: { zIndex: 1e5 },
												children: (dt, mt) => {
													var Ct = an(),
														Zt = n(Ct, !0);
													(a(Ct),
														b(
															(qt) => w(Zt, qt),
															[
																() => (
																	k(ne),
																	g(et),
																	s(() => {
																		var qt;
																		return ne((qt = g(et)) == null ? void 0 : qt.name);
																	})
																)
															]
														),
														_(dt, Ct));
												},
												$$slots: { default: !0 }
											});
										}
										(a(tt),
											a(St),
											a(Wt),
											X('click', St, () => {
												(D('select', g(et)), $t(S, !1));
											}),
											_(ut, Mt));
									}
								),
									_(G, Z));
							};
						$(V, (G) => {
							(g(jt), s(() => g(jt).length === 0) ? G(ft) : G(st, -1));
						});
					}
					(a(it),
						a(Ot),
						a(yt),
						b((G) => zt(H, 'placeholder', G), [() => (e(), s(() => e().t('Search')))]),
						T(
							H,
							() => g(nt),
							(G) => $t(nt, G)
						),
						_(rt, yt));
				}
			},
			$$legacy: !0
		}),
		Ce(),
		q());
}
var ln = f(
		'<div class="mb-2"><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs font-medium text-gray-500"> </div></div></div>'
	),
	on = f('<div class=" flex flex-wrap items-center gap-2 mb-2.5"></div>'),
	un = f(
		'<div class=" px-3.5 py-1.5 font-medium hover:bg-black/5 dark:hover:bg-white/5 outline outline-1 outline-gray-100 dark:outline-gray-850 rounded-3xl"> </div>'
	),
	vn = f(
		'<button class=" px-3.5 py-1.5 font-medium hover:bg-black/5 dark:hover:bg-white/5 outline outline-1 outline-gray-100 dark:outline-gray-850 rounded-3xl" type="button"> </button>'
	),
	dn = f('<div class="flex flex-wrap flex-row text-sm gap-1"><!> <!></div>'),
	cn = f(
		'<input type="file" hidden="" multiple=""/> <div><!> <div class="flex flex-col mb-1"><!> <!></div> <div class=" text-xs dark:text-gray-700"> </div></div>',
		1
	);
function Pl(U, P) {
	ke(P, !1);
	const e = () => Gt(qa, '$user', D),
		z = () => Gt(nt, '$i18n', D),
		q = () => Gt(Ba, '$settings', D),
		I = () => Gt(Ea, '$config', D),
		[D, F] = ze();
	let S = Vt(P, 'selectedItems', 28, () => []);
	const nt = $e('i18n');
	let t = Nt(!1),
		gt = Nt(null),
		bt = Nt(null);
	const Bt = async (Y, H = !1) => {
			var ft, st, G, Z, lt, ut, et, Ut, Mt, Dt, Kt, Wt;
			if (
				((ft = e()) == null ? void 0 : ft.role) !== 'admin' &&
				!(
					((Z = (G = (st = e()) == null ? void 0 : st.permissions) == null ? void 0 : G.chat) ==
					null
						? void 0
						: Z.file_upload) ?? !0
				)
			)
				return (Lt.error(z().t('You do not have permission to upload files.')), null);
			const it = Wa(),
				V = {
					type: 'file',
					file: '',
					id: null,
					url: '',
					name: Y.name,
					collection_name: '',
					status: 'uploading',
					size: Y.size,
					error: '',
					itemId: it,
					...(H ? { context: 'full' } : {})
				};
			if (V.size == 0) return (Lt.error(z().t('You cannot upload an empty file.')), null);
			S([...S(), V]);
			try {
				let St = null;
				(Y.type.startsWith('audio/') || Y.type.startsWith('video/')) &&
					(et = (ut = (lt = q()) == null ? void 0 : lt.audio) == null ? void 0 : ut.stt) != null &&
					et.language &&
					(St = {
						language:
							(Dt = (Mt = (Ut = q()) == null ? void 0 : Ut.audio) == null ? void 0 : Mt.stt) == null
								? void 0
								: Dt.language
					});
				const tt = await Ya(localStorage.token, Y, St);
				tt
					? (tt.id,
						V.name,
						(Kt = tt == null ? void 0 : tt.meta) == null || Kt.collection_name,
						tt.error && (console.warn('File upload warning:', tt.error), Lt.warning(tt.error)),
						(V.status = 'uploaded'),
						(V.file = tt),
						(V.id = tt.id),
						(V.collection_name =
							((Wt = tt == null ? void 0 : tt.meta) == null ? void 0 : Wt.collection_name) ||
							(tt == null ? void 0 : tt.collection_name)),
						(V.url = `${tt.id}`),
						S(S()))
					: S(S().filter((At) => (At == null ? void 0 : At.itemId) !== it));
			} catch (St) {
				(Lt.error(`${St}`), S(S().filter((tt) => (tt == null ? void 0 : tt.itemId) !== it)));
			}
		},
		jt = async (Y) => {
			Y.forEach(async (H) => {
				var it, V, ft, st, G, Z, lt, ut;
				if (
					(H.name,
					H.type,
					H.size,
					H.name.split('.').at(-1),
					(((V = (it = I()) == null ? void 0 : it.file) == null ? void 0 : V.max_size) ?? null) !==
						null &&
						H.size >
							(((st = (ft = I()) == null ? void 0 : ft.file) == null ? void 0 : st.max_size) ?? 0) *
								1024 *
								1024)
				) {
					(H.size,
						(((Z = (G = I()) == null ? void 0 : G.file) == null ? void 0 : Z.max_size) ?? 0) *
							1024 *
							1024,
						Lt.error(
							z().t('File size should not exceed {{maxSize}} MB.', {
								maxSize: (ut = (lt = I()) == null ? void 0 : lt.file) == null ? void 0 : ut.max_size
							})
						));
					return;
				}
				H.type.startsWith('image/') ? Lt.error(z().t('Unsupported file type.')) : Bt(H);
			});
		};
	(Ge(async () => {
		$t(t, !0);
	}),
		re(
			() => k(S()),
			() => {
				S() === null && S([]);
			}
		),
		je(),
		Ne());
	var Ft = cn(),
		Pt = Yt(Ft);
	Oa(
		Pt,
		(Y) => $t(gt, Y),
		() => g(gt)
	);
	var Ht = x(Pt, 2),
		It = n(Ht);
	Ve(It, P, 'label', {}, (Y) => {
		var H = ln(),
			it = n(H),
			V = n(it),
			ft = n(V, !0);
		(a(V), a(it), a(H), b((st) => w(ft, st), [() => (z(), s(() => z().t('Knowledge')))]), _(Y, H));
	});
	var rt = x(It, 2),
		ct = n(rt);
	{
		var yt = (Y) => {
			var H = on();
			(Pe(H, 5, S, Se, (it, V, ft) => {
				{
					let st = W(() => (g(V), s(() => g(V).status === 'uploading'))),
						G = W(
							() => (
								g(V),
								s(() => {
									var Z, lt;
									return (Z = g(V)) != null && Z.legacy
										? `Legacy${g(V).type ? ` ${g(V).type}` : ''}`
										: (((lt = g(V)) == null ? void 0 : lt.type) ?? 'collection');
								})
							)
						);
					Ga(it, {
						get file() {
							return g(V);
						},
						small: !0,
						get item() {
							return g(V);
						},
						get name() {
							return (g(V), s(() => g(V).name));
						},
						modal: !0,
						edit: !0,
						get loading() {
							return g(st);
						},
						get type() {
							return g(G);
						},
						dismissible: !0,
						$$events: {
							dismiss: (Z) => {
								S(S().filter((lt, ut) => ut !== ft));
							}
						}
					});
				}
			}),
				a(H),
				_(Y, H));
		};
		$(ct, (Y) => {
			(k(S()),
				s(() => {
					var H;
					return ((H = S()) == null ? void 0 : H.length) > 0;
				}) && Y(yt));
		});
	}
	var Ot = x(ct, 2);
	{
		var Tt = (Y) => {
			var H = dn(),
				it = n(H);
			sn(it, {
				$$events: {
					select: (st) => {
						const G = st.detail;
						S().find((Z) => Z.id === G.id) || S([...S(), { ...G }]);
					}
				},
				children: (st, G) => {
					var Z = un(),
						lt = n(Z, !0);
					(a(Z), b((ut) => w(lt, ut), [() => (z(), s(() => z().t('Select Knowledge')))]), _(st, Z));
				},
				$$slots: { default: !0 }
			});
			var V = x(it, 2);
			{
				var ft = (st) => {
					var G = vn(),
						Z = n(G, !0);
					(a(G),
						b((lt) => w(Z, lt), [() => (z(), s(() => z().t('Upload Files')))]),
						X('click', G, () => {
							g(gt).click();
						}),
						_(st, G));
				};
				$(V, (st) => {
					(e(),
						s(() => {
							var G, Z, lt, ut;
							return (
								((G = e()) == null ? void 0 : G.role) === 'admin' ||
								((ut =
									(lt = (Z = e()) == null ? void 0 : Z.permissions) == null ? void 0 : lt.chat) ==
								null
									? void 0
									: ut.file_upload)
							);
						}) && st(ft));
				});
			}
			(a(H), _(Y, H));
		};
		$(Ot, (Y) => {
			g(t) && Y(Tt);
		});
	}
	a(rt);
	var Et = x(rt, 2),
		Rt = n(Et, !0);
	(a(Et),
		a(Ht),
		b(
			(Y) => w(Rt, Y),
			[
				() => (
					z(),
					s(() =>
						z().t('To attach knowledge base here, add them to the "Knowledge" workspace first.')
					)
				)
			]
		),
		Ia(
			Pt,
			() => g(bt),
			(Y) => $t(bt, Y)
		),
		X('change', Pt, async () => {
			if (g(bt) && g(bt).length > 0) {
				const Y = Array.from(g(bt));
				jt(Y);
			} else Lt.error(z().t('File not found.'));
			Da(gt, (g(gt).value = ''));
		}),
		_(U, Ft),
		Ce(),
		F());
}
var pn = f('<span class="ml-2 self-center"> </span>'),
	_n = f('<span class="ml-2 self-center"> </span>'),
	fn = f('<span class="ml-2 self-center"> </span>'),
	mn = f(
		'<div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div>'
	),
	xn = f('<span class="ml-2 self-center"> </span>'),
	hn = f('<span class="ml-2 self-center"> </span>'),
	gn = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	bn = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="1" max="128" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="1" step="any"/></div></div>'
	),
	yn = f('<div><!> <!></div>'),
	wn = f('<span class="ml-2 self-center"> </span>'),
	kn = f('<span class="ml-2 self-center"> </span>'),
	$n = f(
		'<div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div>'
	),
	jn = f('<span class="ml-2 self-center"> </span>'),
	Cn = f('<span class="ml-2 self-center"> </span>'),
	zn = f('<span class="ml-2 self-center"> </span>'),
	Pn = f('<span class="ml-2 self-center"> </span>'),
	Sn = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	Nn = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text" autocomplete="off"/></div> <div class=" flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text" autocomplete="off"/></div></div>'
	),
	Tn = f('<span class="ml-2 self-center"> </span>'),
	Dn = f('<span class="ml-2 self-center"> </span>'),
	An = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	In = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="number" autocomplete="off" min="0"/></div></div>'
	),
	On = f('<span class="ml-2 self-center"> </span>'),
	En = f('<span class="ml-2 self-center"> </span>'),
	qn = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	Bn = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text" autocomplete="off"/></div></div>'
	),
	Fn = f('<span class="ml-2 self-center"> </span>'),
	Rn = f('<span class="ml-2 self-center"> </span>'),
	Un = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	Mn = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="2" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="2" step="any"/></div></div>'
	),
	Kn = f('<span class="ml-2 self-center"> </span>'),
	Wn = f('<span class="ml-2 self-center"> </span>'),
	Xn = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	Jn = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text" autocomplete="off"/></div></div>'
	),
	Ln = f('<span class="ml-2 self-center"> </span>'),
	Hn = f('<span class="ml-2 self-center"> </span>'),
	Gn = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	Vn = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text" autocomplete="off"/></div></div>'
	),
	Yn = f('<span class="ml-2 self-center"> </span>'),
	Qn = f('<span class="ml-2 self-center"> </span>'),
	Zn = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	tr = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="-2" max="131072" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="-2" step="1"/></div></div>'
	),
	er = f('<span class="ml-2 self-center"> </span>'),
	ar = f('<span class="ml-2 self-center"> </span>'),
	nr = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	rr = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="1000" step="0.5" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="100" step="any"/></div></div>'
	),
	sr = f('<span class="ml-2 self-center"> </span>'),
	lr = f('<span class="ml-2 self-center"> </span>'),
	or = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	ir = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="1" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="1" step="any"/></div></div>'
	),
	ur = f('<span class="ml-2 self-center"> </span>'),
	vr = f('<span class="ml-2 self-center"> </span>'),
	dr = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	cr = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="1" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="1" step="any"/></div></div>'
	),
	pr = f('<span class="ml-2 self-center"> </span>'),
	_r = f('<span class="ml-2 self-center"> </span>'),
	fr = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	mr = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="-2" max="2" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="-2" max="2" step="any"/></div></div>'
	),
	xr = f('<span class="ml-2 self-center"> </span>'),
	hr = f('<span class="ml-2 self-center"> </span>'),
	gr = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"></div> <button class="p-1 px-3 text-xs flex rounded transition flex-shrink-0 outline-none" type="button"><!></button></div>'
	),
	br = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="-2" max="2" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="-2" max="2" step="any"/></div></div>'
	),
	yr = f('<span class="ml-2 self-center"> </span>'),
	wr = f('<span class="ml-2 self-center"> </span>'),
	kr = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	$r = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="2" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="2" step="1"/></div></div>'
	),
	jr = f('<span class="ml-2 self-center"> </span>'),
	Cr = f('<span class="ml-2 self-center"> </span>'),
	zr = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	Pr = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="1" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="1" step="any"/></div></div>'
	),
	Sr = f('<span class="ml-2 self-center"> </span>'),
	Nr = f('<span class="ml-2 self-center"> </span>'),
	Tr = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	Dr = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="10" step="0.5" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="10" step="any"/></div></div>'
	),
	Ar = f('<span class="ml-2 self-center"> </span>'),
	Ir = f('<span class="ml-2 self-center"> </span>'),
	Or = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	Er = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="-1" max="128" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="-1" max="128" step="1"/></div></div>'
	),
	qr = f('<span class="ml-2 self-center"> </span>'),
	Br = f('<span class="ml-2 self-center"> </span>'),
	Fr = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	Rr = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="2" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="2" step="any"/></div></div>'
	),
	Ur = f('<span class="ml-2 self-center"> </span>'),
	Mr = f('<span class="ml-2 self-center"> </span>'),
	Kr = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"></div> <button class="p-1 px-3 text-xs flex rounded transition flex-shrink-0 outline-none" type="button"><!></button></div>'
	),
	Wr = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="-2" max="2" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="-2" max="2" step="any"/></div></div>'
	),
	Xr = f('<span class="ml-2 self-center"> </span>'),
	Jr = f('<span class="ml-2 self-center"> </span>'),
	Lr = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	Hr = f(
		'<div class="flex justify-between items-center mt-1"><div class="text-xs text-gray-500"> </div> <div class=" pr-2"><!></div></div>'
	),
	Gr = f('<span class="ml-2 self-center"> </span>'),
	Vr = f('<span class="ml-2 self-center"> </span>'),
	Yr = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	Qr = f(
		'<div class="flex justify-between items-center mt-1"><div class="text-xs text-gray-500"> </div> <div class=" pr-2"><!></div></div>'
	),
	Zr = f(
		'<div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div>',
		1
	),
	ts = f('<span class="ml-2 self-center"> </span>'),
	es = f('<span class="ml-2 self-center"> </span>'),
	as = f('<span class="ml-2 self-center"> </span>'),
	ns = f('<span class="ml-2 self-center"> </span>'),
	rs = f(
		'<div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div>'
	),
	ss = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text" autocomplete="off"/></div></div>'
	),
	ls = f('<span class="ml-2 self-center"> </span>'),
	os = f('<span class="ml-2 self-center"> </span>'),
	is = f(
		'<div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div>'
	),
	us = f('<div class="flex mt-0.5 space-x-2"><!></div>'),
	vs = f('<span class="ml-2 self-center"> </span>'),
	ds = f('<span class="ml-2 self-center"> </span>'),
	cs = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	ps = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="-1" max="10240000" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="-1" step="1"/></div></div>'
	),
	_s = f('<span class="ml-2 self-center"> </span>'),
	fs = f('<span class="ml-2 self-center"> </span>'),
	ms = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	xs = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="-1" max="10240000" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="-1" step="1"/></div></div>'
	),
	hs = f('<span class="ml-2 self-center"> </span>'),
	gs = f('<span class="ml-2 self-center"> </span>'),
	bs = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	ys = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="256" max="8192" step="256" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="256" step="256"/></div></div>'
	),
	ws = f('<span class="ml-2 self-center"> </span>'),
	ks = f('<span class="ml-2 self-center"> </span>'),
	$s = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	js = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="1" max="256" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="1" max="256" step="1"/></div></div>'
	),
	Cs = f('<span class="ml-2 self-center"> </span>'),
	zs = f('<span class="ml-2 self-center"> </span>'),
	Ps = f(
		'<div class="flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>'
	),
	Ss = f(
		'<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="256" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="256" step="1"/></div></div>'
	),
	Ns = f('<span class="ml-2 self-center"> </span>'),
	Ts = f('<span class="ml-2 self-center"> </span>'),
	Ds = f(
		'<div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div>'
	),
	As = f(
		'<div class="flex mt-0.5 space-x-2"><input class="w-full text-sm bg-transparent outline-hidden" type="text"/></div>'
	),
	Is = f(
		'<div class=" py-0.5 w-full justify-between mb-1"><div class="flex w-full justify-between"><div class=" self-center text-xs"><input type="text" class=" text-xs w-full bg-transparent outline-none"/></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"> </button></div> <div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input type="text" class="text-sm w-full bg-transparent outline-hidden outline-none"/></div></div></div>'
	),
	Os = f(
		'<div class="flex flex-col justify-center"><!> <button class=" flex gap-2 items-center w-full text-center justify-center mt-1 mb-5" type="button"><div><!></div> <div> </div></button></div>'
	),
	Es = f(
		'<div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <!>',
		1
	),
	qs = f(
		'<div class=" space-y-1 text-xs pb-safe-bottom"><div><!></div> <!> <div><!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <!> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <!></div>'
	);
function Sl(U, P) {
	ke(P, !1);
	const e = () => Gt(I, '$i18n', z),
		[z, q] = ze(),
		I = $e('i18n');
	let D = Vt(P, 'onChange', 8, () => {}),
		F = Vt(P, 'admin', 8, !1),
		S = Vt(P, 'custom', 8, !1),
		t = Vt(P, 'params', 12, {
			stream_response: null,
			stream_delta_chunk_size: null,
			function_calling: null,
			reasoning_tags: null,
			seed: null,
			stop: null,
			temperature: null,
			reasoning_effort: null,
			logit_bias: null,
			max_tokens: null,
			top_k: null,
			top_p: null,
			min_p: null,
			frequency_penalty: null,
			presence_penalty: null,
			mirostat: null,
			mirostat_eta: null,
			mirostat_tau: null,
			repeat_last_n: null,
			tfs_z: null,
			repeat_penalty: null,
			use_mmap: null,
			use_mlock: null,
			think: null,
			format: null,
			keep_alive: null,
			num_keep: null,
			num_ctx: null,
			num_batch: null,
			num_thread: null,
			num_gpu: null
		});
	(re(
		() => (k(t()), k(D())),
		() => {
			t() && D()(t());
		}
	),
		je(),
		Ne());
	var gt = qs(),
		bt = n(gt),
		Bt = n(bt);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'When enabled, the model will respond to each chat message in real-time, generating a response as soon as the user sends a message. This mode is useful for live chat applications, but may impact performance on slower hardware.'
					)
				)
			)
		);
		L(Bt, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = mn(),
					u = n(i),
					m = n(u, !0);
				a(u);
				var d = x(u, 2),
					j = n(d);
				{
					var C = (o) => {
							var p = pn(),
								y = n(p, !0);
							(a(p), b((R) => w(y, R), [() => (e(), s(() => e().t('On')))]), _(o, p));
						},
						v = (o) => {
							var p = _n(),
								y = n(p, !0);
							(a(p), b((R) => w(y, R), [() => (e(), s(() => e().t('Off')))]), _(o, p));
						},
						r = (o) => {
							var p = fn(),
								y = n(p, !0);
							(a(p), b((R) => w(y, R), [() => (e(), s(() => e().t('Default')))]), _(o, p));
						};
					$(j, (o) => {
						(k(t()),
							s(() => t().stream_response === !0)
								? o(C)
								: (k(t()), s(() => t().stream_response === !1) ? o(v, 1) : o(r, -1)));
					});
				}
				(a(d),
					a(i),
					b((o) => w(m, o), [() => (e(), s(() => e().t('Stream Chat Response')))]),
					X('click', d, () => {
						var o;
						t(
							(t().stream_response =
								(((o = t()) == null ? void 0 : o.stream_response) ?? null) === null
									? !0
									: t().stream_response
										? !1
										: null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	a(bt);
	var jt = x(bt, 2);
	{
		var Ft = (c) => {
			var l = yn(),
				h = n(l);
			{
				let m = W(
					() => (
						e(),
						s(() =>
							e().t(
								'The stream delta chunk size for the model. Increasing the chunk size will make the model respond with larger pieces of text at once.'
							)
						)
					)
				);
				L(h, {
					get content() {
						return g(m);
					},
					placement: 'top-start',
					className: 'inline-tooltip',
					children: (d, j) => {
						var C = gn(),
							v = n(C),
							r = n(v, !0);
						a(v);
						var o = x(v, 2),
							p = n(o);
						{
							var y = (B) => {
									var O = xn(),
										K = n(O, !0);
									(a(O), b((at) => w(K, at), [() => (e(), s(() => e().t('Default')))]), _(B, O));
								},
								R = (B) => {
									var O = hn(),
										K = n(O, !0);
									(a(O), b((at) => w(K, at), [() => (e(), s(() => e().t('Custom')))]), _(B, O));
								};
							$(p, (B) => {
								(k(t()),
									s(() => {
										var O;
										return (
											(((O = t()) == null ? void 0 : O.stream_delta_chunk_size) ?? null) === null
										);
									})
										? B(y)
										: B(R, -1));
							});
						}
						(a(o),
							a(C),
							b((B) => w(r, B), [() => (e(), s(() => e().t('Stream Delta Chunk Size')))]),
							X('click', o, () => {
								var B;
								t(
									(t().stream_delta_chunk_size =
										(((B = t()) == null ? void 0 : B.stream_delta_chunk_size) ?? null) === null
											? 1
											: null),
									!0
								);
							}),
							_(d, C));
					},
					$$slots: { default: !0 }
				});
			}
			var i = x(h, 2);
			{
				var u = (m) => {
					var d = bn(),
						j = n(d),
						C = n(j);
					(N(C), a(j));
					var v = x(j, 2),
						r = n(v);
					(N(r),
						a(v),
						a(d),
						T(
							C,
							() => t().stream_delta_chunk_size,
							(o) => t((t().stream_delta_chunk_size = o), !0)
						),
						T(
							r,
							() => t().stream_delta_chunk_size,
							(o) => t((t().stream_delta_chunk_size = o), !0)
						),
						_(m, d));
				};
				$(i, (m) => {
					(k(t()),
						s(() => {
							var d;
							return (((d = t()) == null ? void 0 : d.stream_delta_chunk_size) ?? null) !== null;
						}) && m(u));
				});
			}
			(a(l), _(c, l));
		};
		$(jt, (c) => {
			F() && c(Ft);
		});
	}
	var Pt = x(jt, 2),
		Ht = n(Pt);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						"Default mode works with a wider range of models by calling tools once before execution. Native mode leverages the model's built-in tool-calling capabilities, but requires the model to inherently support this feature."
					)
				)
			)
		);
		L(Ht, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = $n(),
					u = n(i),
					m = n(u, !0);
				a(u);
				var d = x(u, 2),
					j = n(d);
				{
					var C = (r) => {
							var o = wn(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Native')))]), _(r, o));
						},
						v = (r) => {
							var o = kn(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Default')))]), _(r, o));
						};
					$(j, (r) => {
						(k(t()), s(() => t().function_calling === 'native') ? r(C) : r(v, -1));
					});
				}
				(a(d),
					a(i),
					b((r) => w(m, r), [() => (e(), s(() => e().t('Function Calling')))]),
					X('click', d, () => {
						var r;
						t(
							(t().function_calling =
								(((r = t()) == null ? void 0 : r.function_calling) ?? null) === null
									? 'native'
									: null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	a(Pt);
	var It = x(Pt, 2),
		rt = n(It);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'Enable, disable, or customize the reasoning tags used by the model. "Enabled" uses default tags, "Disabled" turns off reasoning tags, and "Custom" lets you specify your own start and end tags.'
					)
				)
			)
		);
		L(rt, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = Sn(),
					u = n(i),
					m = n(u, !0);
				a(u);
				var d = x(u, 2),
					j = n(d);
				{
					var C = (p) => {
							var y = jn(),
								R = n(y, !0);
							(a(y), b((B) => w(R, B), [() => (e(), s(() => e().t('Default')))]), _(p, y));
						},
						v = (p) => {
							var y = Cn(),
								R = n(y, !0);
							(a(y), b((B) => w(R, B), [() => (e(), s(() => e().t('Enabled')))]), _(p, y));
						},
						r = (p) => {
							var y = zn(),
								R = n(y, !0);
							(a(y), b((B) => w(R, B), [() => (e(), s(() => e().t('Disabled')))]), _(p, y));
						},
						o = (p) => {
							var y = Pn(),
								R = n(y, !0);
							(a(y), b((B) => w(R, B), [() => (e(), s(() => e().t('Custom')))]), _(p, y));
						};
					$(j, (p) => {
						(k(t()),
							s(() => {
								var y;
								return (((y = t()) == null ? void 0 : y.reasoning_tags) ?? null) === null;
							})
								? p(C)
								: (k(t()),
									s(() => {
										var y;
										return (((y = t()) == null ? void 0 : y.reasoning_tags) ?? null) === !0;
									})
										? p(v, 1)
										: (k(t()),
											s(() => {
												var y;
												return (((y = t()) == null ? void 0 : y.reasoning_tags) ?? null) === !1;
											})
												? p(r, 2)
												: p(o, -1))));
					});
				}
				(a(d),
					a(i),
					b((p) => w(m, p), [() => (e(), s(() => e().t('Reasoning Tags')))]),
					X('click', d, () => {
						var p, y, R;
						(((p = t()) == null ? void 0 : p.reasoning_tags) ?? null) === null
							? t((t().reasoning_tags = ['', '']), !0)
							: (((y = t()) == null ? void 0 : y.reasoning_tags) ?? []).length === 2
								? t((t().reasoning_tags = !0), !0)
								: (((R = t()) == null ? void 0 : R.reasoning_tags) ?? null) !== !1
									? t((t().reasoning_tags = !1), !0)
									: t((t().reasoning_tags = null), !0);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var ct = x(rt, 2);
	{
		var yt = (c) => {
				var l = Nn(),
					h = n(l),
					i = n(h);
				(N(i), a(h));
				var u = x(h, 2),
					m = n(u);
				(N(m),
					a(u),
					a(l),
					b(
						(d, j) => {
							(zt(i, 'placeholder', d), zt(m, 'placeholder', j));
						},
						[() => (e(), s(() => e().t('Start Tag'))), () => (e(), s(() => e().t('End Tag')))]
					),
					T(
						i,
						() => t().reasoning_tags[0],
						(d) => t((t().reasoning_tags[0] = d), !0)
					),
					T(
						m,
						() => t().reasoning_tags[1],
						(d) => t((t().reasoning_tags[1] = d), !0)
					),
					_(c, l));
			},
			Ot = Aa(
				() => (
					k(t()),
					s(() => {
						var c, l;
						return (
							![!0, !1, null].includes(((c = t()) == null ? void 0 : c.reasoning_tags) ?? null) &&
							(((l = t()) == null ? void 0 : l.reasoning_tags) ?? []).length === 2
						);
					})
				)
			);
		$(ct, (c) => {
			g(Ot) && c(yt);
		});
	}
	a(It);
	var Tt = x(It, 2),
		Et = n(Tt);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'Sets the random number seed to use for generation. Setting this to a specific number will make the model generate the same text for the same prompt.'
					)
				)
			)
		);
		L(Et, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = An(),
					u = n(i),
					m = n(u, !0);
				a(u);
				var d = x(u, 2),
					j = n(d);
				{
					var C = (r) => {
							var o = Tn(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Default')))]), _(r, o));
						},
						v = (r) => {
							var o = Dn(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Custom')))]), _(r, o));
						};
					$(j, (r) => {
						(k(t()),
							s(() => {
								var o;
								return (((o = t()) == null ? void 0 : o.seed) ?? null) === null;
							})
								? r(C)
								: r(v, -1));
					});
				}
				(a(d),
					a(i),
					b((r) => w(m, r), [() => (e(), s(() => e().t('Seed')))]),
					X('click', d, () => {
						var r;
						t((t().seed = (((r = t()) == null ? void 0 : r.seed) ?? null) === null ? 0 : null), !0);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var Rt = x(Et, 2);
	{
		var Y = (c) => {
			var l = In(),
				h = n(l),
				i = n(h);
			(N(i),
				a(h),
				a(l),
				b((u) => zt(i, 'placeholder', u), [() => (e(), s(() => e().t('Enter Seed')))]),
				T(
					i,
					() => t().seed,
					(u) => t((t().seed = u), !0)
				),
				_(c, l));
		};
		$(Rt, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.seed) ?? null) !== null;
				}) && c(Y));
		});
	}
	a(Tt);
	var H = x(Tt, 2),
		it = n(H);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'Sets the stop sequences to use. When this pattern is encountered, the LLM will stop generating text and return. Multiple stop patterns may be set by specifying multiple separate stop parameters in a modelfile.'
					)
				)
			)
		);
		L(it, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = qn(),
					u = n(i),
					m = n(u, !0);
				a(u);
				var d = x(u, 2),
					j = n(d);
				{
					var C = (r) => {
							var o = On(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Default')))]), _(r, o));
						},
						v = (r) => {
							var o = En(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Custom')))]), _(r, o));
						};
					$(j, (r) => {
						(k(t()),
							s(() => {
								var o;
								return (((o = t()) == null ? void 0 : o.stop) ?? null) === null;
							})
								? r(C)
								: r(v, -1));
					});
				}
				(a(d),
					a(i),
					b((r) => w(m, r), [() => (e(), s(() => e().t('Stop Sequence')))]),
					X('click', d, () => {
						var r;
						t(
							(t().stop = (((r = t()) == null ? void 0 : r.stop) ?? null) === null ? '' : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var V = x(it, 2);
	{
		var ft = (c) => {
			var l = Bn(),
				h = n(l),
				i = n(h);
			(N(i),
				a(h),
				a(l),
				b((u) => zt(i, 'placeholder', u), [() => (e(), s(() => e().t('Enter stop sequence')))]),
				T(
					i,
					() => t().stop,
					(u) => t((t().stop = u), !0)
				),
				_(c, l));
		};
		$(V, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.stop) ?? null) !== null;
				}) && c(ft));
		});
	}
	a(H);
	var st = x(H, 2),
		G = n(st);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'The temperature of the model. Increasing the temperature will make the model answer more creatively.'
					)
				)
			)
		);
		L(G, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = Un(),
					u = n(i),
					m = n(u, !0);
				a(u);
				var d = x(u, 2),
					j = n(d);
				{
					var C = (r) => {
							var o = Fn(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Default')))]), _(r, o));
						},
						v = (r) => {
							var o = Rn(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Custom')))]), _(r, o));
						};
					$(j, (r) => {
						(k(t()),
							s(() => {
								var o;
								return (((o = t()) == null ? void 0 : o.temperature) ?? null) === null;
							})
								? r(C)
								: r(v, -1));
					});
				}
				(a(d),
					a(i),
					b((r) => w(m, r), [() => (e(), s(() => e().t('Temperature')))]),
					X('click', d, () => {
						var r;
						t(
							(t().temperature =
								(((r = t()) == null ? void 0 : r.temperature) ?? null) === null ? 0.8 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var Z = x(G, 2);
	{
		var lt = (c) => {
			var l = Mn(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().temperature,
					(d) => t((t().temperature = d), !0)
				),
				T(
					m,
					() => t().temperature,
					(d) => t((t().temperature = d), !0)
				),
				_(c, l));
		};
		$(Z, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.temperature) ?? null) !== null;
				}) && c(lt));
		});
	}
	a(st);
	var ut = x(st, 2),
		et = n(ut);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'Constrains effort on reasoning for reasoning models. Only applicable to reasoning models from specific providers that support reasoning effort.'
					)
				)
			)
		);
		L(et, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = Xn(),
					u = n(i),
					m = n(u, !0);
				a(u);
				var d = x(u, 2),
					j = n(d);
				{
					var C = (r) => {
							var o = Kn(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Default')))]), _(r, o));
						},
						v = (r) => {
							var o = Wn(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Custom')))]), _(r, o));
						};
					$(j, (r) => {
						(k(t()),
							s(() => {
								var o;
								return (((o = t()) == null ? void 0 : o.reasoning_effort) ?? null) === null;
							})
								? r(C)
								: r(v, -1));
					});
				}
				(a(d),
					a(i),
					b((r) => w(m, r), [() => (e(), s(() => e().t('Reasoning Effort')))]),
					X('click', d, () => {
						var r;
						t(
							(t().reasoning_effort =
								(((r = t()) == null ? void 0 : r.reasoning_effort) ?? null) === null
									? 'medium'
									: null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var Ut = x(et, 2);
	{
		var Mt = (c) => {
			var l = Jn(),
				h = n(l),
				i = n(h);
			(N(i),
				a(h),
				a(l),
				b((u) => zt(i, 'placeholder', u), [() => (e(), s(() => e().t('Enter reasoning effort')))]),
				T(
					i,
					() => t().reasoning_effort,
					(u) => t((t().reasoning_effort = u), !0)
				),
				_(c, l));
		};
		$(Ut, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.reasoning_effort) ?? null) !== null;
				}) && c(Mt));
		});
	}
	a(ut);
	var Dt = x(ut, 2),
		Kt = n(Dt);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'Boosting or penalizing specific tokens for constrained responses. Bias values will be clamped between -100 and 100 (inclusive). (Default: none)'
					)
				)
			)
		);
		L(Kt, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = Gn(),
					u = n(i);
				u.textContent = 'logit_bias';
				var m = x(u, 2),
					d = n(m);
				{
					var j = (v) => {
							var r = Ln(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Default')))]), _(v, r));
						},
						C = (v) => {
							var r = Hn(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Custom')))]), _(v, r));
						};
					$(d, (v) => {
						(k(t()),
							s(() => {
								var r;
								return (((r = t()) == null ? void 0 : r.logit_bias) ?? null) === null;
							})
								? v(j)
								: v(C, -1));
					});
				}
				(a(m),
					a(i),
					X('click', m, () => {
						var v;
						t(
							(t().logit_bias =
								(((v = t()) == null ? void 0 : v.logit_bias) ?? null) === null ? '' : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var Wt = x(Kt, 2);
	{
		var St = (c) => {
			var l = Vn(),
				h = n(l),
				i = n(h);
			(N(i),
				a(h),
				a(l),
				b(
					(u) => zt(i, 'placeholder', u),
					[
						() => (
							e(),
							s(() =>
								e().t(
									'Enter comma-separated "token:bias_value" pairs (example: 5432:100, 413:-100)'
								)
							)
						)
					]
				),
				T(
					i,
					() => t().logit_bias,
					(u) => t((t().logit_bias = u), !0)
				),
				_(c, l));
		};
		$(Wt, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.logit_bias) ?? null) !== null;
				}) && c(St));
		});
	}
	a(Dt);
	var tt = x(Dt, 2),
		At = n(tt);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'This option sets the maximum number of tokens the model can generate in its response. Increasing this limit allows the model to provide longer answers, but it may also increase the likelihood of unhelpful or irrelevant content being generated.'
					)
				)
			)
		);
		L(At, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = Zn(),
					u = n(i);
				u.textContent = 'max_tokens';
				var m = x(u, 2),
					d = n(m);
				{
					var j = (v) => {
							var r = Yn(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Default')))]), _(v, r));
						},
						C = (v) => {
							var r = Qn(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Custom')))]), _(v, r));
						};
					$(d, (v) => {
						(k(t()),
							s(() => {
								var r;
								return (((r = t()) == null ? void 0 : r.max_tokens) ?? null) === null;
							})
								? v(j)
								: v(C, -1));
					});
				}
				(a(m),
					a(i),
					X('click', m, () => {
						var v;
						t(
							(t().max_tokens =
								(((v = t()) == null ? void 0 : v.max_tokens) ?? null) === null ? 128 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var se = x(At, 2);
	{
		var le = (c) => {
			var l = tr(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().max_tokens,
					(d) => t((t().max_tokens = d), !0)
				),
				T(
					m,
					() => t().max_tokens,
					(d) => t((t().max_tokens = d), !0)
				),
				_(c, l));
		};
		$(se, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.max_tokens) ?? null) !== null;
				}) && c(le));
		});
	}
	a(tt);
	var Qt = x(tt, 2),
		ae = n(Qt);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'Reduces the probability of generating nonsense. A higher value (e.g. 100) will give more diverse answers, while a lower value (e.g. 10) will be more conservative.'
					)
				)
			)
		);
		L(ae, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = nr(),
					u = n(i);
				u.textContent = 'top_k';
				var m = x(u, 2),
					d = n(m);
				{
					var j = (v) => {
							var r = er(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Default')))]), _(v, r));
						},
						C = (v) => {
							var r = ar(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Custom')))]), _(v, r));
						};
					$(d, (v) => {
						(k(t()),
							s(() => {
								var r;
								return (((r = t()) == null ? void 0 : r.top_k) ?? null) === null;
							})
								? v(j)
								: v(C, -1));
					});
				}
				(a(m),
					a(i),
					X('click', m, () => {
						var v;
						t(
							(t().top_k = (((v = t()) == null ? void 0 : v.top_k) ?? null) === null ? 40 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var pt = x(ae, 2);
	{
		var dt = (c) => {
			var l = rr(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().top_k,
					(d) => t((t().top_k = d), !0)
				),
				T(
					m,
					() => t().top_k,
					(d) => t((t().top_k = d), !0)
				),
				_(c, l));
		};
		$(pt, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.top_k) ?? null) !== null;
				}) && c(dt));
		});
	}
	a(Qt);
	var mt = x(Qt, 2),
		Ct = n(mt);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'Works together with top-k. A higher value (e.g., 0.95) will lead to more diverse text, while a lower value (e.g., 0.5) will generate more focused and conservative text.'
					)
				)
			)
		);
		L(Ct, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = or(),
					u = n(i);
				u.textContent = 'top_p';
				var m = x(u, 2),
					d = n(m);
				{
					var j = (v) => {
							var r = sr(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Default')))]), _(v, r));
						},
						C = (v) => {
							var r = lr(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Custom')))]), _(v, r));
						};
					$(d, (v) => {
						(k(t()),
							s(() => {
								var r;
								return (((r = t()) == null ? void 0 : r.top_p) ?? null) === null;
							})
								? v(j)
								: v(C, -1));
					});
				}
				(a(m),
					a(i),
					X('click', m, () => {
						var v;
						t(
							(t().top_p = (((v = t()) == null ? void 0 : v.top_p) ?? null) === null ? 0.9 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var Zt = x(Ct, 2);
	{
		var qt = (c) => {
			var l = ir(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().top_p,
					(d) => t((t().top_p = d), !0)
				),
				T(
					m,
					() => t().top_p,
					(d) => t((t().top_p = d), !0)
				),
				_(c, l));
		};
		$(Zt, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.top_p) ?? null) !== null;
				}) && c(qt));
		});
	}
	a(mt);
	var wt = x(mt, 2),
		vt = n(wt);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'Alternative to the top_p, and aims to ensure a balance of quality and variety. The parameter p represents the minimum probability for a token to be considered, relative to the probability of the most likely token. For example, with p=0.05 and the most likely token having a probability of 0.9, logits with a value less than 0.045 are filtered out.'
					)
				)
			)
		);
		L(vt, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = dr(),
					u = n(i);
				u.textContent = 'min_p';
				var m = x(u, 2),
					d = n(m);
				{
					var j = (v) => {
							var r = ur(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Default')))]), _(v, r));
						},
						C = (v) => {
							var r = vr(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Custom')))]), _(v, r));
						};
					$(d, (v) => {
						(k(t()),
							s(() => {
								var r;
								return (((r = t()) == null ? void 0 : r.min_p) ?? null) === null;
							})
								? v(j)
								: v(C, -1));
					});
				}
				(a(m),
					a(i),
					X('click', m, () => {
						var v;
						t(
							(t().min_p = (((v = t()) == null ? void 0 : v.min_p) ?? null) === null ? 0 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var Xt = x(vt, 2);
	{
		var Ye = (c) => {
			var l = cr(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().min_p,
					(d) => t((t().min_p = d), !0)
				),
				T(
					m,
					() => t().min_p,
					(d) => t((t().min_p = d), !0)
				),
				_(c, l));
		};
		$(Xt, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.min_p) ?? null) !== null;
				}) && c(Ye));
		});
	}
	a(wt);
	var oe = x(wt, 2),
		Te = n(oe);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'Sets a scaling bias against tokens to penalize repetitions, based on how many times they have appeared. A higher value (e.g., 1.5) will penalize repetitions more strongly, while a lower value (e.g., 0.9) will be more lenient. At 0, it is disabled.'
					)
				)
			)
		);
		L(Te, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = fr(),
					u = n(i);
				u.textContent = 'frequency_penalty';
				var m = x(u, 2),
					d = n(m);
				{
					var j = (v) => {
							var r = pr(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Default')))]), _(v, r));
						},
						C = (v) => {
							var r = _r(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Custom')))]), _(v, r));
						};
					$(d, (v) => {
						(k(t()),
							s(() => {
								var r;
								return (((r = t()) == null ? void 0 : r.frequency_penalty) ?? null) === null;
							})
								? v(j)
								: v(C, -1));
					});
				}
				(a(m),
					a(i),
					X('click', m, () => {
						var v;
						t(
							(t().frequency_penalty =
								(((v = t()) == null ? void 0 : v.frequency_penalty) ?? null) === null ? 1.1 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var Qe = x(Te, 2);
	{
		var Ze = (c) => {
			var l = mr(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().frequency_penalty,
					(d) => t((t().frequency_penalty = d), !0)
				),
				T(
					m,
					() => t().frequency_penalty,
					(d) => t((t().frequency_penalty = d), !0)
				),
				_(c, l));
		};
		$(Qe, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.frequency_penalty) ?? null) !== null;
				}) && c(Ze));
		});
	}
	a(oe);
	var ie = x(oe, 2),
		De = n(ie);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'Sets a flat bias against tokens that have appeared at least once. A higher value (e.g., 1.5) will penalize repetitions more strongly, while a lower value (e.g., 0.9) will be more lenient. At 0, it is disabled.'
					)
				)
			)
		);
		L(De, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = gr(),
					u = n(i);
				u.textContent = 'presence_penalty';
				var m = x(u, 2),
					d = n(m);
				{
					var j = (v) => {
							var r = xr(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Default')))]), _(v, r));
						},
						C = (v) => {
							var r = hr(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Custom')))]), _(v, r));
						};
					$(d, (v) => {
						(k(t()),
							s(() => {
								var r;
								return (((r = t()) == null ? void 0 : r.presence_penalty) ?? null) === null;
							})
								? v(j)
								: v(C, -1));
					});
				}
				(a(m),
					a(i),
					X('click', m, () => {
						var v;
						t(
							(t().presence_penalty =
								(((v = t()) == null ? void 0 : v.presence_penalty) ?? null) === null ? 0 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var ta = x(De, 2);
	{
		var ea = (c) => {
			var l = br(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().presence_penalty,
					(d) => t((t().presence_penalty = d), !0)
				),
				T(
					m,
					() => t().presence_penalty,
					(d) => t((t().presence_penalty = d), !0)
				),
				_(c, l));
		};
		$(ta, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.presence_penalty) ?? null) !== null;
				}) && c(ea));
		});
	}
	a(ie);
	var ue = x(ie, 2),
		Ae = n(ue);
	{
		let c = W(() => (e(), s(() => e().t('Enable Mirostat sampling for controlling perplexity.'))));
		L(Ae, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = kr(),
					u = n(i);
				u.textContent = 'mirostat';
				var m = x(u, 2),
					d = n(m);
				{
					var j = (v) => {
							var r = yr(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Default')))]), _(v, r));
						},
						C = (v) => {
							var r = wr(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Custom')))]), _(v, r));
						};
					$(d, (v) => {
						(k(t()),
							s(() => {
								var r;
								return (((r = t()) == null ? void 0 : r.mirostat) ?? null) === null;
							})
								? v(j)
								: v(C, -1));
					});
				}
				(a(m),
					a(i),
					X('click', m, () => {
						var v;
						t(
							(t().mirostat =
								(((v = t()) == null ? void 0 : v.mirostat) ?? null) === null ? 0 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var aa = x(Ae, 2);
	{
		var na = (c) => {
			var l = $r(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().mirostat,
					(d) => t((t().mirostat = d), !0)
				),
				T(
					m,
					() => t().mirostat,
					(d) => t((t().mirostat = d), !0)
				),
				_(c, l));
		};
		$(aa, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.mirostat) ?? null) !== null;
				}) && c(na));
		});
	}
	a(ue);
	var ve = x(ue, 2),
		Ie = n(ve);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'Influences how quickly the algorithm responds to feedback from the generated text. A lower learning rate will result in slower adjustments, while a higher learning rate will make the algorithm more responsive.'
					)
				)
			)
		);
		L(Ie, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = zr(),
					u = n(i);
				u.textContent = 'mirostat_eta';
				var m = x(u, 2),
					d = n(m);
				{
					var j = (v) => {
							var r = jr(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Default')))]), _(v, r));
						},
						C = (v) => {
							var r = Cr(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Custom')))]), _(v, r));
						};
					$(d, (v) => {
						(k(t()),
							s(() => {
								var r;
								return (((r = t()) == null ? void 0 : r.mirostat_eta) ?? null) === null;
							})
								? v(j)
								: v(C, -1));
					});
				}
				(a(m),
					a(i),
					X('click', m, () => {
						var v;
						t(
							(t().mirostat_eta =
								(((v = t()) == null ? void 0 : v.mirostat_eta) ?? null) === null ? 0.1 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var ra = x(Ie, 2);
	{
		var sa = (c) => {
			var l = Pr(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().mirostat_eta,
					(d) => t((t().mirostat_eta = d), !0)
				),
				T(
					m,
					() => t().mirostat_eta,
					(d) => t((t().mirostat_eta = d), !0)
				),
				_(c, l));
		};
		$(ra, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.mirostat_eta) ?? null) !== null;
				}) && c(sa));
		});
	}
	a(ve);
	var de = x(ve, 2),
		Oe = n(de);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'Controls the balance between coherence and diversity of the output. A lower value will result in more focused and coherent text.'
					)
				)
			)
		);
		L(Oe, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = Tr(),
					u = n(i);
				u.textContent = 'mirostat_tau';
				var m = x(u, 2),
					d = n(m);
				{
					var j = (v) => {
							var r = Sr(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Default')))]), _(v, r));
						},
						C = (v) => {
							var r = Nr(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Custom')))]), _(v, r));
						};
					$(d, (v) => {
						(k(t()),
							s(() => {
								var r;
								return (((r = t()) == null ? void 0 : r.mirostat_tau) ?? null) === null;
							})
								? v(j)
								: v(C, -1));
					});
				}
				(a(m),
					a(i),
					X('click', m, () => {
						var v;
						t(
							(t().mirostat_tau =
								(((v = t()) == null ? void 0 : v.mirostat_tau) ?? null) === null ? 5 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var la = x(Oe, 2);
	{
		var oa = (c) => {
			var l = Dr(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().mirostat_tau,
					(d) => t((t().mirostat_tau = d), !0)
				),
				T(
					m,
					() => t().mirostat_tau,
					(d) => t((t().mirostat_tau = d), !0)
				),
				_(c, l));
		};
		$(la, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.mirostat_tau) ?? null) !== null;
				}) && c(oa));
		});
	}
	a(de);
	var ce = x(de, 2),
		Ee = n(ce);
	{
		let c = W(
			() => (
				e(),
				s(() => e().t('Sets how far back for the model to look back to prevent repetition.'))
			)
		);
		L(Ee, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = Or(),
					u = n(i);
				u.textContent = 'repeat_last_n';
				var m = x(u, 2),
					d = n(m);
				{
					var j = (v) => {
							var r = Ar(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Default')))]), _(v, r));
						},
						C = (v) => {
							var r = Ir(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Custom')))]), _(v, r));
						};
					$(d, (v) => {
						(k(t()),
							s(() => {
								var r;
								return (((r = t()) == null ? void 0 : r.repeat_last_n) ?? null) === null;
							})
								? v(j)
								: v(C, -1));
					});
				}
				(a(m),
					a(i),
					X('click', m, () => {
						var v;
						t(
							(t().repeat_last_n =
								(((v = t()) == null ? void 0 : v.repeat_last_n) ?? null) === null ? 64 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var ia = x(Ee, 2);
	{
		var ua = (c) => {
			var l = Er(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().repeat_last_n,
					(d) => t((t().repeat_last_n = d), !0)
				),
				T(
					m,
					() => t().repeat_last_n,
					(d) => t((t().repeat_last_n = d), !0)
				),
				_(c, l));
		};
		$(ia, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.repeat_last_n) ?? null) !== null;
				}) && c(ua));
		});
	}
	a(ce);
	var pe = x(ce, 2),
		qe = n(pe);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'Tail free sampling is used to reduce the impact of less probable tokens from the output. A higher value (e.g., 2.0) will reduce the impact more, while a value of 1.0 disables this setting.'
					)
				)
			)
		);
		L(qe, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = Fr(),
					u = n(i);
				u.textContent = 'tfs_z';
				var m = x(u, 2),
					d = n(m);
				{
					var j = (v) => {
							var r = qr(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Default')))]), _(v, r));
						},
						C = (v) => {
							var r = Br(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Custom')))]), _(v, r));
						};
					$(d, (v) => {
						(k(t()),
							s(() => {
								var r;
								return (((r = t()) == null ? void 0 : r.tfs_z) ?? null) === null;
							})
								? v(j)
								: v(C, -1));
					});
				}
				(a(m),
					a(i),
					X('click', m, () => {
						var v;
						t(
							(t().tfs_z = (((v = t()) == null ? void 0 : v.tfs_z) ?? null) === null ? 1 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var va = x(qe, 2);
	{
		var da = (c) => {
			var l = Rr(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().tfs_z,
					(d) => t((t().tfs_z = d), !0)
				),
				T(
					m,
					() => t().tfs_z,
					(d) => t((t().tfs_z = d), !0)
				),
				_(c, l));
		};
		$(va, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.tfs_z) ?? null) !== null;
				}) && c(da));
		});
	}
	a(pe);
	var _e = x(pe, 2),
		Be = n(_e);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'Control the repetition of token sequences in the generated text. A higher value (e.g., 1.5) will penalize repetitions more strongly, while a lower value (e.g., 1.1) will be more lenient. At 1, it is disabled.'
					)
				)
			)
		);
		L(Be, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = Kr(),
					u = n(i);
				u.textContent = 'repeat_penalty';
				var m = x(u, 2),
					d = n(m);
				{
					var j = (v) => {
							var r = Ur(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Default')))]), _(v, r));
						},
						C = (v) => {
							var r = Mr(),
								o = n(r, !0);
							(a(r), b((p) => w(o, p), [() => (e(), s(() => e().t('Custom')))]), _(v, r));
						};
					$(d, (v) => {
						(k(t()),
							s(() => {
								var r;
								return (((r = t()) == null ? void 0 : r.repeat_penalty) ?? null) === null;
							})
								? v(j)
								: v(C, -1));
					});
				}
				(a(m),
					a(i),
					X('click', m, () => {
						var v;
						t(
							(t().repeat_penalty =
								(((v = t()) == null ? void 0 : v.repeat_penalty) ?? null) === null ? 1.1 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var ca = x(Be, 2);
	{
		var pa = (c) => {
			var l = Wr(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().repeat_penalty,
					(d) => t((t().repeat_penalty = d), !0)
				),
				T(
					m,
					() => t().repeat_penalty,
					(d) => t((t().repeat_penalty = d), !0)
				),
				_(c, l));
		};
		$(ca, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.repeat_penalty) ?? null) !== null;
				}) && c(pa));
		});
	}
	a(_e);
	var Fe = x(_e, 2);
	{
		var _a = (c) => {
			var l = Zr(),
				h = Yt(l),
				i = n(h);
			{
				let r = W(
					() => (
						e(),
						s(() =>
							e().t(
								'Enable Memory Mapping (mmap) to load model data. This option allows the system to use disk storage as an extension of RAM by treating disk files as if they were in RAM. This can improve model performance by allowing for faster data access. However, it may not work correctly with all systems and can consume a significant amount of disk space.'
							)
						)
					)
				);
				L(i, {
					get content() {
						return g(r);
					},
					placement: 'top-start',
					className: 'inline-tooltip',
					children: (o, p) => {
						var y = Lr(),
							R = n(y);
						R.textContent = 'use_mmap';
						var B = x(R, 2),
							O = n(B);
						{
							var K = (A) => {
									var E = Xr(),
										ot = n(E, !0);
									(a(E), b((Q) => w(ot, Q), [() => (e(), s(() => e().t('Default')))]), _(A, E));
								},
								at = (A) => {
									var E = Jr(),
										ot = n(E, !0);
									(a(E), b((Q) => w(ot, Q), [() => (e(), s(() => e().t('Custom')))]), _(A, E));
								};
							$(O, (A) => {
								(k(t()),
									s(() => {
										var E;
										return (((E = t()) == null ? void 0 : E.use_mmap) ?? null) === null;
									})
										? A(K)
										: A(at, -1));
							});
						}
						(a(B),
							a(y),
							X('click', B, () => {
								var A;
								t(
									(t().use_mmap =
										(((A = t()) == null ? void 0 : A.use_mmap) ?? null) === null ? !0 : null),
									!0
								);
							}),
							_(o, y));
					},
					$$slots: { default: !0 }
				});
			}
			var u = x(i, 2);
			{
				var m = (r) => {
					var o = Hr(),
						p = n(o),
						y = n(p, !0);
					a(p);
					var R = x(p, 2),
						B = n(R);
					(He(B, {
						get state() {
							return t().use_mmap;
						},
						set state(O) {
							t((t().use_mmap = O), !0);
						},
						$$legacy: !0
					}),
						a(R),
						a(o),
						b(
							(O) => w(y, O),
							[() => (k(t()), e(), s(() => (t().use_mmap ? e().t('Enabled') : e().t('Disabled'))))]
						),
						_(r, o));
				};
				$(u, (r) => {
					(k(t()),
						s(() => {
							var o;
							return (((o = t()) == null ? void 0 : o.use_mmap) ?? null) !== null;
						}) && r(m));
				});
			}
			a(h);
			var d = x(h, 2),
				j = n(d);
			{
				let r = W(
					() => (
						e(),
						s(() =>
							e().t(
								"Enable Memory Locking (mlock) to prevent model data from being swapped out of RAM. This option locks the model's working set of pages into RAM, ensuring that they will not be swapped out to disk. This can help maintain performance by avoiding page faults and ensuring fast data access."
							)
						)
					)
				);
				L(j, {
					get content() {
						return g(r);
					},
					placement: 'top-start',
					className: 'inline-tooltip',
					children: (o, p) => {
						var y = Yr(),
							R = n(y);
						R.textContent = 'use_mlock';
						var B = x(R, 2),
							O = n(B);
						{
							var K = (A) => {
									var E = Gr(),
										ot = n(E, !0);
									(a(E), b((Q) => w(ot, Q), [() => (e(), s(() => e().t('Default')))]), _(A, E));
								},
								at = (A) => {
									var E = Vr(),
										ot = n(E, !0);
									(a(E), b((Q) => w(ot, Q), [() => (e(), s(() => e().t('Custom')))]), _(A, E));
								};
							$(O, (A) => {
								(k(t()),
									s(() => {
										var E;
										return (((E = t()) == null ? void 0 : E.use_mlock) ?? null) === null;
									})
										? A(K)
										: A(at, -1));
							});
						}
						(a(B),
							a(y),
							X('click', B, () => {
								var A;
								t(
									(t().use_mlock =
										(((A = t()) == null ? void 0 : A.use_mlock) ?? null) === null ? !0 : null),
									!0
								);
							}),
							_(o, y));
					},
					$$slots: { default: !0 }
				});
			}
			var C = x(j, 2);
			{
				var v = (r) => {
					var o = Qr(),
						p = n(o),
						y = n(p, !0);
					a(p);
					var R = x(p, 2),
						B = n(R);
					(He(B, {
						get state() {
							return t().use_mlock;
						},
						set state(O) {
							t((t().use_mlock = O), !0);
						},
						$$legacy: !0
					}),
						a(R),
						a(o),
						b(
							(O) => w(y, O),
							[() => (k(t()), e(), s(() => (t().use_mlock ? e().t('Enabled') : e().t('Disabled'))))]
						),
						_(r, o));
				};
				$(C, (r) => {
					(k(t()),
						s(() => {
							var o;
							return (((o = t()) == null ? void 0 : o.use_mlock) ?? null) !== null;
						}) && r(v));
				});
			}
			(a(d), _(c, l));
		};
		$(Fe, (c) => {
			F() && c(_a);
		});
	}
	var fe = x(Fe, 2),
		Re = n(fe);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'This option enables or disables the use of the reasoning feature in Ollama, which allows the model to think before generating a response. When enabled, the model can take a moment to process the conversation context and generate a more thoughtful response.'
					)
				)
			)
		);
		L(Re, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = rs(),
					u = n(i),
					m = n(u);
				a(u);
				var d = x(u, 2),
					j = n(d);
				{
					var C = (p) => {
							var y = ts(),
								R = n(y, !0);
							(a(y), b((B) => w(R, B), [() => (e(), s(() => e().t('On')))]), _(p, y));
						},
						v = (p) => {
							var y = es(),
								R = n(y, !0);
							(a(y), b((B) => w(R, B), [() => (e(), s(() => e().t('Off')))]), _(p, y));
						},
						r = (p) => {
							var y = as(),
								R = n(y, !0);
							(a(y), b((B) => w(R, B), [() => (e(), s(() => e().t('Custom')))]), _(p, y));
						},
						o = (p) => {
							var y = ns(),
								R = n(y, !0);
							(a(y), b((B) => w(R, B), [() => (e(), s(() => e().t('Default')))]), _(p, y));
						};
					$(j, (p) => {
						(k(t()),
							s(() => t().think === !0)
								? p(C)
								: (k(t()),
									s(() => t().think === !1)
										? p(v, 1)
										: (k(t()), s(() => typeof t().think == 'string') ? p(r, 2) : p(o, -1))));
					});
				}
				(a(d),
					a(i),
					b((p) => w(m, `think (${p ?? ''})`), [() => (e(), s(() => e().t('Ollama')))]),
					X('click', d, () => {
						var p;
						(((p = t()) == null ? void 0 : p.think) ?? null) === null
							? t((t().think = !0), !0)
							: t().think === !0
								? t((t().think = 'medium'), !0)
								: typeof t().think == 'string'
									? t((t().think = !1), !0)
									: t((t().think = null), !0);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var fa = x(Re, 2);
	{
		var ma = (c) => {
			var l = ss(),
				h = n(l),
				i = n(h);
			(N(i),
				a(h),
				a(l),
				b(
					(u) => zt(i, 'placeholder', u),
					[() => (e(), s(() => e().t("e.g. 'low', 'medium', 'high'")))]
				),
				T(
					i,
					() => t().think,
					(u) => t((t().think = u), !0)
				),
				_(c, l));
		};
		$(fa, (c) => {
			(k(t()), s(() => typeof t().think == 'string') && c(ma));
		});
	}
	a(fe);
	var me = x(fe, 2),
		Ue = n(me);
	{
		let c = W(
			() => (
				e(),
				s(() => e().t('The format to return a response in. Format can be json or a JSON schema.'))
			)
		);
		L(Ue, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = is(),
					u = n(i),
					m = n(u);
				a(u);
				var d = x(u, 2),
					j = n(d);
				{
					var C = (r) => {
							var o = ls(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Default')))]), _(r, o));
						},
						v = (r) => {
							var o = os(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('JSON')))]), _(r, o));
						};
					$(j, (r) => {
						(k(t()),
							s(() => {
								var o;
								return (((o = t()) == null ? void 0 : o.format) ?? null) === null;
							})
								? r(C)
								: r(v, -1));
					});
				}
				(a(d),
					a(i),
					b((r) => w(m, `format (${r ?? ''})`), [() => (e(), s(() => e().t('Ollama')))]),
					X('click', d, () => {
						var r;
						t(
							(t().format =
								(((r = t()) == null ? void 0 : r.format) ?? null) === null ? 'json' : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var xa = x(Ue, 2);
	{
		var ha = (c) => {
			var l = us(),
				h = n(l);
			{
				let i = W(() => (e(), s(() => e().t('e.g. "json" or a JSON schema'))));
				Qa(h, {
					className: 'w-full  text-sm bg-transparent outline-hidden',
					get placeholder() {
						return g(i);
					},
					get value() {
						return t().format;
					},
					set value(u) {
						t((t().format = u), !0);
					},
					$$legacy: !0
				});
			}
			(a(l), _(c, l));
		};
		$(xa, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.format) ?? null) !== null;
				}) && c(ha));
		});
	}
	a(me);
	var xe = x(me, 2),
		Me = n(xe);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'This option controls how many tokens are preserved when refreshing the context. For example, if set to 2, the last 2 tokens of the conversation context will be retained. Preserving context can help maintain the continuity of a conversation, but it may reduce the ability to respond to new topics.'
					)
				)
			)
		);
		L(Me, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = cs(),
					u = n(i),
					m = n(u);
				a(u);
				var d = x(u, 2),
					j = n(d);
				{
					var C = (r) => {
							var o = vs(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Default')))]), _(r, o));
						},
						v = (r) => {
							var o = ds(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Custom')))]), _(r, o));
						};
					$(j, (r) => {
						(k(t()),
							s(() => {
								var o;
								return (((o = t()) == null ? void 0 : o.num_keep) ?? null) === null;
							})
								? r(C)
								: r(v, -1));
					});
				}
				(a(d),
					a(i),
					b((r) => w(m, `num_keep (${r ?? ''})`), [() => (e(), s(() => e().t('Ollama')))]),
					X('click', d, () => {
						var r;
						t(
							(t().num_keep =
								(((r = t()) == null ? void 0 : r.num_keep) ?? null) === null ? 24 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var ga = x(Me, 2);
	{
		var ba = (c) => {
			var l = ps(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().num_keep,
					(d) => t((t().num_keep = d), !0)
				),
				T(
					m,
					() => t().num_keep,
					(d) => t((t().num_keep = d), !0)
				),
				_(c, l));
		};
		$(ga, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.num_keep) ?? null) !== null;
				}) && c(ba));
		});
	}
	a(xe);
	var he = x(xe, 2),
		Ke = n(he);
	{
		let c = W(
			() => (
				e(),
				s(() => e().t('Sets the size of the context window used to generate the next token.'))
			)
		);
		L(Ke, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = ms(),
					u = n(i),
					m = n(u);
				a(u);
				var d = x(u, 2),
					j = n(d);
				{
					var C = (r) => {
							var o = _s(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Default')))]), _(r, o));
						},
						v = (r) => {
							var o = fs(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Custom')))]), _(r, o));
						};
					$(j, (r) => {
						(k(t()),
							s(() => {
								var o;
								return (((o = t()) == null ? void 0 : o.num_ctx) ?? null) === null;
							})
								? r(C)
								: r(v, -1));
					});
				}
				(a(d),
					a(i),
					b((r) => w(m, `num_ctx (${r ?? ''})`), [() => (e(), s(() => e().t('Ollama')))]),
					X('click', d, () => {
						var r;
						t(
							(t().num_ctx =
								(((r = t()) == null ? void 0 : r.num_ctx) ?? null) === null ? 2048 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var ya = x(Ke, 2);
	{
		var wa = (c) => {
			var l = xs(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().num_ctx,
					(d) => t((t().num_ctx = d), !0)
				),
				T(
					m,
					() => t().num_ctx,
					(d) => t((t().num_ctx = d), !0)
				),
				_(c, l));
		};
		$(ya, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.num_ctx) ?? null) !== null;
				}) && c(wa));
		});
	}
	a(he);
	var ge = x(he, 2),
		We = n(ge);
	{
		let c = W(
			() => (
				e(),
				s(() =>
					e().t(
						'The batch size determines how many text requests are processed together at once. A higher batch size can increase the performance and speed of the model, but it also requires more memory.'
					)
				)
			)
		);
		L(We, {
			get content() {
				return g(c);
			},
			placement: 'top-start',
			className: 'inline-tooltip',
			children: (l, h) => {
				var i = bs(),
					u = n(i),
					m = n(u);
				a(u);
				var d = x(u, 2),
					j = n(d);
				{
					var C = (r) => {
							var o = hs(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Default')))]), _(r, o));
						},
						v = (r) => {
							var o = gs(),
								p = n(o, !0);
							(a(o), b((y) => w(p, y), [() => (e(), s(() => e().t('Custom')))]), _(r, o));
						};
					$(j, (r) => {
						(k(t()),
							s(() => {
								var o;
								return (((o = t()) == null ? void 0 : o.num_batch) ?? null) === null;
							})
								? r(C)
								: r(v, -1));
					});
				}
				(a(d),
					a(i),
					b((r) => w(m, `num_batch (${r ?? ''})`), [() => (e(), s(() => e().t('Ollama')))]),
					X('click', d, () => {
						var r;
						t(
							(t().num_batch =
								(((r = t()) == null ? void 0 : r.num_batch) ?? null) === null ? 512 : null),
							!0
						);
					}),
					_(l, i));
			},
			$$slots: { default: !0 }
		});
	}
	var ka = x(We, 2);
	{
		var $a = (c) => {
			var l = ys(),
				h = n(l),
				i = n(h);
			(N(i), a(h));
			var u = x(h, 2),
				m = n(u);
			(N(m),
				a(u),
				a(l),
				T(
					i,
					() => t().num_batch,
					(d) => t((t().num_batch = d), !0)
				),
				T(
					m,
					() => t().num_batch,
					(d) => t((t().num_batch = d), !0)
				),
				_(c, l));
		};
		$(ka, (c) => {
			(k(t()),
				s(() => {
					var l;
					return (((l = t()) == null ? void 0 : l.num_batch) ?? null) !== null;
				}) && c($a));
		});
	}
	a(ge);
	var ja = x(ge, 2);
	{
		var Ca = (c) => {
			var l = Es(),
				h = Yt(l),
				i = n(h);
			{
				let O = W(
					() => (
						e(),
						s(() =>
							e().t(
								'Set the number of worker threads used for computation. This option controls how many threads are used to process incoming requests concurrently. Increasing this value can improve performance under high concurrency workloads but may also consume more CPU resources.'
							)
						)
					)
				);
				L(i, {
					get content() {
						return g(O);
					},
					placement: 'top-start',
					className: 'inline-tooltip',
					children: (K, at) => {
						var A = $s(),
							E = n(A),
							ot = n(E);
						a(E);
						var Q = x(E, 2),
							Jt = n(Q);
						{
							var xt = (M) => {
									var J = ws(),
										ht = n(J, !0);
									(a(J), b((_t) => w(ht, _t), [() => (e(), s(() => e().t('Default')))]), _(M, J));
								},
								kt = (M) => {
									var J = ks(),
										ht = n(J, !0);
									(a(J), b((_t) => w(ht, _t), [() => (e(), s(() => e().t('Custom')))]), _(M, J));
								};
							$(Jt, (M) => {
								(k(t()),
									s(() => {
										var J;
										return (((J = t()) == null ? void 0 : J.num_thread) ?? null) === null;
									})
										? M(xt)
										: M(kt, -1));
							});
						}
						(a(Q),
							a(A),
							b((M) => w(ot, `num_thread (${M ?? ''})`), [() => (e(), s(() => e().t('Ollama')))]),
							X('click', Q, () => {
								var M;
								t(
									(t().num_thread =
										(((M = t()) == null ? void 0 : M.num_thread) ?? null) === null ? 2 : null),
									!0
								);
							}),
							_(K, A));
					},
					$$slots: { default: !0 }
				});
			}
			var u = x(i, 2);
			{
				var m = (O) => {
					var K = js(),
						at = n(K),
						A = n(at);
					(N(A), a(at));
					var E = x(at, 2),
						ot = n(E);
					(N(ot),
						a(E),
						a(K),
						T(
							A,
							() => t().num_thread,
							(Q) => t((t().num_thread = Q), !0)
						),
						T(
							ot,
							() => t().num_thread,
							(Q) => t((t().num_thread = Q), !0)
						),
						_(O, K));
				};
				$(u, (O) => {
					(k(t()),
						s(() => {
							var K;
							return (((K = t()) == null ? void 0 : K.num_thread) ?? null) !== null;
						}) && O(m));
				});
			}
			a(h);
			var d = x(h, 2),
				j = n(d);
			{
				let O = W(
					() => (
						e(),
						s(() =>
							e().t(
								'Set the number of layers, which will be off-loaded to GPU. Increasing this value can significantly improve performance for models that are optimized for GPU acceleration but may also consume more power and GPU resources.'
							)
						)
					)
				);
				L(j, {
					get content() {
						return g(O);
					},
					placement: 'top-start',
					className: 'inline-tooltip',
					children: (K, at) => {
						var A = Ps(),
							E = n(A),
							ot = n(E);
						a(E);
						var Q = x(E, 2),
							Jt = n(Q);
						{
							var xt = (M) => {
									var J = Cs(),
										ht = n(J, !0);
									(a(J), b((_t) => w(ht, _t), [() => (e(), s(() => e().t('Default')))]), _(M, J));
								},
								kt = (M) => {
									var J = zs(),
										ht = n(J, !0);
									(a(J), b((_t) => w(ht, _t), [() => (e(), s(() => e().t('Custom')))]), _(M, J));
								};
							$(Jt, (M) => {
								(k(t()),
									s(() => {
										var J;
										return (((J = t()) == null ? void 0 : J.num_gpu) ?? null) === null;
									})
										? M(xt)
										: M(kt, -1));
							});
						}
						(a(Q),
							a(A),
							b((M) => w(ot, `num_gpu (${M ?? ''})`), [() => (e(), s(() => e().t('Ollama')))]),
							X('click', Q, () => {
								var M;
								t(
									(t().num_gpu =
										(((M = t()) == null ? void 0 : M.num_gpu) ?? null) === null ? 0 : null),
									!0
								);
							}),
							_(K, A));
					},
					$$slots: { default: !0 }
				});
			}
			var C = x(j, 2);
			{
				var v = (O) => {
					var K = Ss(),
						at = n(K),
						A = n(at);
					(N(A), a(at));
					var E = x(at, 2),
						ot = n(E);
					(N(ot),
						a(E),
						a(K),
						T(
							A,
							() => t().num_gpu,
							(Q) => t((t().num_gpu = Q), !0)
						),
						T(
							ot,
							() => t().num_gpu,
							(Q) => t((t().num_gpu = Q), !0)
						),
						_(O, K));
				};
				$(C, (O) => {
					(k(t()),
						s(() => {
							var K;
							return (((K = t()) == null ? void 0 : K.num_gpu) ?? null) !== null;
						}) && O(v));
				});
			}
			a(d);
			var r = x(d, 2),
				o = n(r);
			{
				let O = W(
					() => (
						e(),
						s(() =>
							e().t(
								'This option controls how long the model will stay loaded into memory following the request (default: 5m)'
							)
						)
					)
				);
				L(o, {
					get content() {
						return g(O);
					},
					placement: 'top-start',
					className: 'inline-tooltip',
					children: (K, at) => {
						var A = Ds(),
							E = n(A),
							ot = n(E);
						a(E);
						var Q = x(E, 2),
							Jt = n(Q);
						{
							var xt = (M) => {
									var J = Ns(),
										ht = n(J, !0);
									(a(J), b((_t) => w(ht, _t), [() => (e(), s(() => e().t('Default')))]), _(M, J));
								},
								kt = (M) => {
									var J = Ts(),
										ht = n(J, !0);
									(a(J), b((_t) => w(ht, _t), [() => (e(), s(() => e().t('Custom')))]), _(M, J));
								};
							$(Jt, (M) => {
								(k(t()),
									s(() => {
										var J;
										return (((J = t()) == null ? void 0 : J.keep_alive) ?? null) === null;
									})
										? M(xt)
										: M(kt, -1));
							});
						}
						(a(Q),
							a(A),
							b((M) => w(ot, `keep_alive (${M ?? ''})`), [() => (e(), s(() => e().t('Ollama')))]),
							X('click', Q, () => {
								var M;
								t(
									(t().keep_alive =
										(((M = t()) == null ? void 0 : M.keep_alive) ?? null) === null ? '5m' : null),
									!0
								);
							}),
							_(K, A));
					},
					$$slots: { default: !0 }
				});
			}
			var p = x(o, 2);
			{
				var y = (O) => {
					var K = As(),
						at = n(K);
					(N(at),
						a(K),
						b(
							(A) => zt(at, 'placeholder', A),
							[() => (e(), s(() => e().t("e.g. '30s','10m'. Valid time units are 's', 'm', 'h'.")))]
						),
						T(
							at,
							() => t().keep_alive,
							(A) => t((t().keep_alive = A), !0)
						),
						_(O, K));
				};
				$(p, (O) => {
					(k(t()),
						s(() => {
							var K;
							return (((K = t()) == null ? void 0 : K.keep_alive) ?? null) !== null;
						}) && O(y));
				});
			}
			a(r);
			var R = x(r, 2);
			{
				var B = (O) => {
					var K = Os(),
						at = n(K);
					Pe(
						at,
						1,
						() => (
							k(t()),
							s(() => {
								var xt;
								return Object.keys(((xt = t()) == null ? void 0 : xt.custom_params) ?? {});
							})
						),
						Se,
						(xt, kt) => {
							var M = Is(),
								J = n(M),
								ht = n(J),
								_t = n(ht);
							(N(_t), a(ht));
							var be = x(ht, 2),
								za = n(be, !0);
							(a(be), a(J));
							var Xe = x(J, 2),
								Je = n(Xe),
								ye = n(Je);
							(N(ye),
								a(Je),
								a(Xe),
								a(M),
								b(
									(te, ee, Pa) => {
										(zt(_t, 'placeholder', te),
											Fa(_t, g(kt)),
											w(za, ee),
											zt(ye, 'placeholder', Pa));
									},
									[
										() => (e(), s(() => e().t('Custom Parameter Name'))),
										() => (e(), s(() => e().t('Remove'))),
										() => (e(), s(() => e().t('Custom Parameter Value')))
									]
								),
								X('change', _t, (te) => {
									const ee = te.target.value.trim();
									ee &&
										ee !== g(kt) &&
										(t((t().custom_params[ee] = t().custom_params[g(kt)]), !0),
										delete t().custom_params[g(kt)],
										t({ ...t(), custom_params: { ...t().custom_params } }));
								}),
								X('click', be, () => {
									(delete t().custom_params[g(kt)],
										t({ ...t(), custom_params: { ...t().custom_params } }));
								}),
								T(
									ye,
									() => t().custom_params[g(kt)],
									(te) => t((t().custom_params[g(kt)] = te), !0)
								),
								_(xt, M));
						}
					);
					var A = x(at, 2),
						E = n(A),
						ot = n(E);
					(Za(ot, {}), a(E));
					var Q = x(E, 2),
						Jt = n(Q, !0);
					(a(Q),
						a(A),
						a(K),
						b((xt) => w(Jt, xt), [() => (e(), s(() => e().t('Add Custom Parameter')))]),
						X('click', A, () => {
							var xt;
							(t(
								(t().custom_params =
									(((xt = t()) == null ? void 0 : xt.custom_params) ?? {}) || {}),
								!0
							),
								t((t().custom_params.custom_param_name = 'custom_param_value'), !0));
						}),
						_(O, K));
				};
				$(R, (O) => {
					S() && F() && O(B);
				});
			}
			_(c, l);
		};
		$(ja, (c) => {
			F() && c(Ca);
		});
	}
	(a(gt), _(U, gt), Ce(), q());
}
export {
	Sl as A,
	Pl as K,
	dl as a,
	kl as b,
	jl as c,
	$l as d,
	Cl as e,
	pl as f,
	cl as g,
	yl as h,
	ml as i,
	bl as j,
	xl as k,
	_l as l,
	wl as m,
	gl as n,
	fl as r,
	zl as s,
	hl as u
};
//# sourceMappingURL=Dqf09jWH.js.map
