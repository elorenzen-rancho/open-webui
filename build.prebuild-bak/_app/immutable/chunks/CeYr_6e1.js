import { c as r } from './CHheSG1Y.js';
import './CWj6FrbW.js';
import './69_IOA4Y.js';
import { t as c, a as p, F as h } from './CD8kWLvT.js';
import { s as u, c as d, a as f } from './BfA5TzUS.js';
import { p as s } from './DbBXQmQ3.js';
const A = async (a = '', i = {}) => {
		let e = null;
		const n = await fetch(`${r}/verify`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${a}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ ...i })
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.catch((t) => {
				var o;
				return (
					(e = `Ollama: ${((o = t == null ? void 0 : t.error) == null ? void 0 : o.message) ?? 'Network Problem'}`),
					[]
				);
			});
		if (e) throw e;
		return n;
	},
	O = async (a = '') => {
		let i = null;
		const e = await fetch(`${r}/config`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(a && { authorization: `Bearer ${a}` })
			}
		})
			.then(async (n) => {
				if (!n.ok) throw await n.json();
				return n.json();
			})
			.catch((n) => ('detail' in n ? (i = n.detail) : (i = 'Server connection failed'), null));
		if (i) throw i;
		return e;
	},
	T = async (a = '', i) => {
		let e = null;
		const n = await fetch(`${r}/config/update`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(a && { authorization: `Bearer ${a}` })
			},
			body: JSON.stringify({ ...i })
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.catch((t) => ('detail' in t ? (e = t.detail) : (e = 'Server connection failed'), null));
		if (e) throw e;
		return n;
	},
	S = async (a, i) => {
		let e = null;
		const n = await fetch(`${r}/api/version`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(a && { authorization: `Bearer ${a}` })
			}
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.catch((t) => ('detail' in t ? (e = t.detail) : (e = 'Server connection failed'), null));
		if (e) throw e;
		return (n == null ? void 0 : n.version) ?? !1;
	},
	v = async (a = '', i = null) => {
		let e = null;
		const n = await fetch(`${r}/api/tags${i !== null ? `/${i}` : ''}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(a && { authorization: `Bearer ${a}` })
			}
		})
			.then(async (t) => {
				if (!t.ok) throw await t.json();
				return t.json();
			})
			.catch((t) => ('detail' in t ? (e = t.detail) : (e = 'Server connection failed'), null));
		if (e) throw e;
		return ((n == null ? void 0 : n.models) ?? [])
			.map((t) => ({ id: t.model, name: t.name ?? t.model, ...t }))
			.sort((t, o) =>
				((t == null ? void 0 : t.name) ?? (t == null ? void 0 : t.id) ?? '').localeCompare(
					(o == null ? void 0 : o.name) ?? (o == null ? void 0 : o.id) ?? ''
				)
			);
	},
	B = async (a, i) => {
		let e = null;
		const n = await fetch(`${r}/api/unload`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${a}`
			},
			body: JSON.stringify({ model: i })
		}).catch((t) => ((e = t), null));
		if (e) throw e;
		return n;
	},
	z = async (a, i, e = null) => {
		let n = null;
		const t = await fetch(`${r}/api/create${e !== null ? `/${e}` : ''}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${a}`
			},
			body: JSON.stringify(i)
		}).catch((o) => ((n = o), null));
		if (n) throw n;
		return t;
	},
	N = async (a, i, e = null) => {
		let n = null;
		const t = await fetch(`${r}/api/delete${e !== null ? `/${e}` : ''}`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${a}`
			},
			body: JSON.stringify({ model: i })
		})
			.then(async (o) => {
				if (!o.ok) throw await o.json();
				return o.json();
			})
			.then((o) => !0)
			.catch((o) => ((n = o), 'detail' in o && (n = o.detail), null));
		if (n) throw n;
		return t;
	},
	M = async (a, i, e = null) => {
		let n = null;
		const t = new AbortController(),
			o = await fetch(`${r}/api/pull${e !== null ? `/${e}` : ''}`, {
				signal: t.signal,
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${a}`
				},
				body: JSON.stringify({ name: i })
			}).catch((l) => ((n = l), 'detail' in l && (n = l.detail), null));
		if (n) throw n;
		return [o, t];
	},
	P = async (a, i, e = null) => {
		let n = null;
		const t = await fetch(`${r}/models/download${e !== null ? `/${e}` : ''}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${a}`
			},
			body: JSON.stringify({ url: i })
		}).catch((o) => ((n = o), 'detail' in o && (n = o.detail), null));
		if (n) throw n;
		return t;
	},
	k = async (a, i, e = null) => {
		let n = null;
		const t = new FormData();
		t.append('file', i);
		const o = await fetch(`${r}/models/upload${e !== null ? `/${e}` : ''}`, {
			method: 'POST',
			headers: { Authorization: `Bearer ${a}` },
			body: t
		}).catch((l) => ((n = l), 'detail' in l && (n = l.detail), null));
		if (n) throw n;
		return o;
	};
var m = h(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4C6 4 6 8 6 10C4.33333 10 1 11 1 15C1 19 4.33333 20 6 20H18C19.6667 20 23 19 23 15C23 11 19.6667 10 18 10C18 8 18 4 12 4Z" stroke-linejoin="round"></path></svg>'
);
function E(a, i) {
	let e = s(i, 'className', 8, 'w-4 h-4'),
		n = s(i, 'strokeWidth', 8, '1.5');
	var t = m();
	(c(() => {
		(u(t, 0, d(e())), f(t, 'stroke-width', n()));
	}),
		p(a, t));
}
export {
	E as C,
	P as a,
	O as b,
	z as c,
	N as d,
	T as e,
	S as f,
	v as g,
	B as h,
	M as p,
	k as u,
	A as v
};
//# sourceMappingURL=CeYr_6e1.js.map
