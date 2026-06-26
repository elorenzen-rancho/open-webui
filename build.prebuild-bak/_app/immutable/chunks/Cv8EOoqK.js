import { b as s } from './CHheSG1Y.js';
import { g as h } from './BbDdJXLs.js';
const d = async (e, r, a) => {
		let n = null;
		const t = await fetch(`${s}/chats/new`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				authorization: `Bearer ${e}`
			},
			body: JSON.stringify({ chat: r, folder_id: a ?? null })
		})
			.then(async (o) => {
				if (!o.ok) throw await o.json();
				return o.json();
			})
			.catch((o) => ((n = o), null));
		if (n) throw n;
		return t;
	},
	w = async (e) => {
		let r = null;
		const a = await fetch(`${s}/chats/unarchive/all`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (n) => {
				if (!n.ok) throw await n.json();
				return n.json();
			})
			.then((n) => n)
			.catch((n) => ((r = n.detail), null));
		if (r) throw r;
		return a;
	},
	j = async (e, r) => {
		let a = null;
		const n = await fetch(`${s}/chats/import`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				authorization: `Bearer ${e}`
			},
			body: JSON.stringify({ chats: r })
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.catch((t) => ((a = t), null));
		if (a) throw a;
		return n;
	},
	f = async (e = '', r = null, a = !1, n = !1) => {
		let t = null;
		const o = new URLSearchParams();
		(r !== null && o.append('page', `${r}`),
			n && o.append('include_folders', 'true'),
			a && o.append('include_pinned', 'true'));
		const c = await fetch(`${s}/chats/?${o.toString()}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (i) => {
				if (!i.ok) throw await i.json();
				return i.json();
			})
			.then((i) => i)
			.catch((i) => ((t = i), null));
		if (t) throw t;
		return c ? c.map((i) => ({ ...i, time_range: h(i.updated_at) })) : [];
	},
	y = async (e = '', r, a = 1, n) => {
		let t = null;
		const o = new URLSearchParams();
		(o.append('page', `${a}`),
			n &&
				Object.entries(n).forEach(([i, l]) => {
					l != null && o.append(i, l.toString());
				}));
		const c = await fetch(`${s}/chats/list/user/${r}?${o.toString()}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (i) => {
				if (!i.ok) throw await i.json();
				return i.json();
			})
			.then((i) => i)
			.catch((i) => ((t = i), null));
		if (t) throw t;
		return c.map((i) => ({ ...i, time_range: h(i.updated_at) }));
	},
	$ = async (e = '', r = 1, a) => {
		let n = null;
		const t = new URLSearchParams();
		(t.append('page', `${r}`),
			a &&
				Object.entries(a).forEach(([c, i]) => {
					i != null && t.append(c, i.toString());
				}));
		const o = await fetch(`${s}/chats/archived?${t.toString()}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (c) => {
				if (!c.ok) throw await c.json();
				return c.json();
			})
			.then((c) => c)
			.catch((c) => ((n = c), null));
		if (n) throw n;
		return o.map((c) => ({ ...c, time_range: h(c.updated_at) }));
	},
	T = async (e = '', r = 1, a) => {
		let n = null;
		const t = new URLSearchParams();
		(t.append('page', `${r}`),
			a &&
				Object.entries(a).forEach(([c, i]) => {
					i != null && t.append(c, i.toString());
				}));
		const o = await fetch(`${s}/chats/shared?${t.toString()}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (c) => {
				if (!c.ok) throw await c.json();
				return c.json();
			})
			.then((c) => c)
			.catch((c) => ((n = c), null));
		if (n) throw n;
		return o.map((c) => ({ ...c, time_range: h(c.updated_at) }));
	},
	m = async (e) => {
		let r = null;
		const a = await fetch(`${s}/chats/all`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (n) => {
				if (!n.ok) throw await n.json();
				return n.json();
			})
			.then((n) => n)
			.catch((n) => ((r = n), null));
		if (r) throw r;
		return a;
	},
	C = async (e, r, a = 1) => {
		let n = null;
		const t = new URLSearchParams();
		(t.append('text', r), t.append('page', `${a}`));
		const o = await fetch(`${s}/chats/search?${t.toString()}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (c) => {
				if (!c.ok) throw await c.json();
				return c.json();
			})
			.then((c) => c)
			.catch((c) => ((n = c), null));
		if (n) throw n;
		return o.map((c) => ({ ...c, time_range: h(c.updated_at) }));
	},
	g = async (e, r) => {
		let a = null;
		const n = await fetch(`${s}/chats/folder/${r}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.then((t) => t)
			.catch((t) => ((a = t), null));
		if (a) throw a;
		return n;
	},
	B = async (e, r, a = 1) => {
		let n = null;
		const t = new URLSearchParams();
		a !== null && t.append('page', `${a}`);
		const o = await fetch(`${s}/chats/folder/${r}/list?${t.toString()}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (c) => {
				if (!c.ok) throw await c.json();
				return c.json();
			})
			.then((c) => c)
			.catch((c) => ((n = c), null));
		if (n) throw n;
		return o;
	},
	A = async (e) => {
		let r = null;
		const a = await fetch(`${s}/chats/all/archived`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (n) => {
				if (!n.ok) throw await n.json();
				return n.json();
			})
			.then((n) => n)
			.catch((n) => ((r = n), null));
		if (r) throw r;
		return a;
	},
	S = async (e) => {
		let r = null;
		const a = await fetch(`${s}/chats/all/db`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (n) => {
				if (!n.ok) throw await n.json();
				return n.json();
			})
			.then((n) => n)
			.catch((n) => ((r = n), null));
		if (r) throw r;
		return a;
	},
	z = async (e) => {
		let r = null;
		const a = await fetch(`${s}/chats/all/tags`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (n) => {
				if (!n.ok) throw await n.json();
				return n.json();
			})
			.then((n) => n)
			.catch((n) => ((r = n), null));
		if (r) throw r;
		return a;
	},
	E = async (e = '') => {
		let r = null;
		const a = await fetch(`${s}/chats/pinned`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (n) => {
				if (!n.ok) throw await n.json();
				return n.json();
			})
			.then((n) => n)
			.catch((n) => ((r = n), null));
		if (r) throw r;
		return a.map((n) => ({ ...n, time_range: h(n.updated_at) }));
	},
	P = async (e, r) => {
		let a = null;
		const n = await fetch(`${s}/chats/${r}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.then((t) => t)
			.catch((t) => ((a = t.detail), null));
		if (a) throw a;
		return n;
	},
	O = async (e, r) => {
		let a = null;
		const n = await fetch(`${s}/chats/share/${r}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.then((t) => t)
			.catch((t) => ((a = t), null));
		if (a) throw a;
		return n;
	},
	G = async (e, r) => {
		let a = null;
		const n = await fetch(`${s}/chats/${r}/pinned`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.then((t) => t)
			.catch((t) => ((a = t), 'detail' in t ? (a = t.detail) : (a = t), null));
		if (a) throw a;
		return n;
	},
	I = async (e, r) => {
		let a = null;
		const n = await fetch(`${s}/chats/${r}/pin`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.then((t) => t)
			.catch((t) => ((a = t), 'detail' in t ? (a = t.detail) : (a = t), null));
		if (a) throw a;
		return n;
	},
	_ = async (e, r, a) => {
		let n = null;
		const t = await fetch(`${s}/chats/${r}/clone`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			},
			body: JSON.stringify({ ...(a && { title: a }) })
		})
			.then(async (o) => {
				if (!o.ok) throw await o.json();
				return o.json();
			})
			.then((o) => o)
			.catch((o) => ((n = o), 'detail' in o ? (n = o.detail) : (n = o), null));
		if (n) throw n;
		return t;
	},
	L = async (e, r) => {
		let a = null;
		const n = await fetch(`${s}/chats/${r}/clone/shared`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.then((t) => t)
			.catch((t) => ((a = t), 'detail' in t ? (a = t.detail) : (a = t), null));
		if (a) throw a;
		return n;
	},
	b = async (e, r) => {
		let a = null;
		const n = await fetch(`${s}/chats/${r}/share`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.then((t) => t)
			.catch((t) => ((a = t), null));
		if (a) throw a;
		return n;
	},
	U = async (e, r, a) => {
		let n = null;
		const t = await fetch(`${s}/chats/${r}/folder`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			},
			body: JSON.stringify({ folder_id: a })
		})
			.then(async (o) => {
				if (!o.ok) throw await o.json();
				return o.json();
			})
			.then((o) => o)
			.catch((o) => ((n = o), null));
		if (n) throw n;
		return t;
	},
	v = async (e, r) => {
		let a = null;
		const n = await fetch(`${s}/chats/${r}/archive`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.then((t) => t)
			.catch((t) => ((a = t), null));
		if (a) throw a;
		return n;
	},
	x = async (e, r) => {
		let a = null;
		const n = await fetch(`${s}/chats/${r}/share`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.then((t) => t)
			.catch((t) => ((a = t), null));
		if (a) throw a;
		return n;
	},
	J = async (e, r, a) => {
		let n = null;
		const t = await fetch(`${s}/chats/shared/${r}/access/update`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			},
			body: JSON.stringify({ access_grants: a })
		})
			.then(async (o) => {
				if (!o.ok) throw await o.json();
				return o.json();
			})
			.then((o) => o)
			.catch((o) => ((n = o), null));
		if (n) throw n;
		return t;
	},
	N = async (e, r) => {
		let a = null;
		const n = await fetch(`${s}/chats/shared/${r}/access`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.then((t) => t)
			.catch((t) => ((a = t), null));
		if (a) throw a;
		return n;
	},
	R = async (e, r, a) => {
		let n = null;
		const t = await fetch(`${s}/chats/${r}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			},
			body: JSON.stringify({ chat: a })
		})
			.then(async (o) => {
				if (!o.ok) throw await o.json();
				return o.json();
			})
			.then((o) => o)
			.catch((o) => ((n = o), null));
		if (n) throw n;
		return t;
	},
	D = async (e, r) => {
		let a = null;
		const n = await fetch(`${s}/chats/${r}`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.then((t) => t)
			.catch((t) => ((a = t.detail), null));
		if (a) throw a;
		return n;
	},
	k = async (e, r) => {
		let a = null;
		const n = await fetch(`${s}/chats/${r}/tags`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.then((t) => t)
			.catch((t) => ((a = t), null));
		if (a) throw a;
		return n;
	},
	F = async (e, r, a) => {
		let n = null;
		const t = await fetch(`${s}/chats/${r}/tags`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			},
			body: JSON.stringify({ name: a })
		})
			.then(async (o) => {
				if (!o.ok) throw await o.json();
				return o.json();
			})
			.then((o) => o)
			.catch((o) => ((n = o.detail), null));
		if (n) throw n;
		return t;
	},
	q = async (e, r, a) => {
		let n = null;
		const t = await fetch(`${s}/chats/${r}/tags`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			},
			body: JSON.stringify({ name: a })
		})
			.then(async (o) => {
				if (!o.ok) throw await o.json();
				return o.json();
			})
			.then((o) => o)
			.catch((o) => ((n = o), null));
		if (n) throw n;
		return t;
	},
	H = async (e) => {
		let r = null;
		const a = await fetch(`${s}/chats/`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (n) => {
				if (!n.ok) throw await n.json();
				return n.json();
			})
			.then((n) => n)
			.catch((n) => ((r = n.detail), null));
		if (r) throw r;
		return a;
	},
	K = async (e) => {
		let r = null;
		const a = await fetch(`${s}/chats/archive/all`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (n) => {
				if (!n.ok) throw await n.json();
				return n.json();
			})
			.then((n) => n)
			.catch((n) => ((r = n.detail), null));
		if (r) throw r;
		return a;
	},
	W = async (e, r = 1, a = {}) => {
		let n = null;
		const t = new URLSearchParams();
		if ((t.append('page', `${r}`), a)) for (const [c, i] of Object.entries(a)) t.append(c, `${i}`);
		const o = await fetch(`${s}/chats/stats/export?${t.toString()}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (c) => {
				if (!c.ok) throw await c.json();
				return c.json();
			})
			.then((c) => c)
			.catch((c) => ((n = c), null));
		if (n) throw n;
		return o;
	},
	M = async (e, r) => {
		let a = null;
		const n = await fetch(`${s}/chats/stats/export/${r}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(e && { authorization: `Bearer ${e}` })
			}
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.then((t) => t)
			.catch((t) => ((a = t), null));
		if (a) throw a;
		return n;
	},
	Q = async (e = '', r = null) => {
		const a = new AbortController();
		let n = null,
			t = `${s}/chats/stats/export?stream=true`;
		r && (t += `&updated_at=${r}`);
		const o = await fetch(t, {
			signal: a.signal,
			method: 'GET',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${e}` }
		}).catch((c) => ((n = c), null));
		if (n) throw n;
		return [o, a];
	};
export {
	j as A,
	g as B,
	C,
	T as D,
	K as E,
	H as F,
	m as G,
	k as H,
	F as I,
	q as J,
	d as K,
	P as a,
	N as b,
	L as c,
	D as d,
	x as e,
	M as f,
	O as g,
	W as h,
	Q as i,
	f as j,
	z as k,
	y as l,
	R as m,
	S as n,
	$ as o,
	A as p,
	v as q,
	w as r,
	b as s,
	I as t,
	J as u,
	G as v,
	E as w,
	U as x,
	_ as y,
	B as z
};
//# sourceMappingURL=Cv8EOoqK.js.map
