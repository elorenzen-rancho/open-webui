import './CWj6FrbW.js';
import './69_IOA4Y.js';
import {
	p as q,
	o as w,
	B as k,
	l as i,
	aX as d,
	aY as I,
	k as S,
	t as B,
	q as m,
	a as L,
	b as N,
	m as T,
	f as A
} from './CD8kWLvT.js';
import { a as u, s as E, c as F } from './BfA5TzUS.js';
import { b as H } from './QcGoGJ5n.js';
import { b as M } from './BCA7d6a5.js';
import { i as O } from './BolXBFGq.js';
import { p as l } from './DbBXQmQ3.js';
var X = A('<textarea style="field-sizing: content;"></textarea>');
function Q(h, t) {
	q(t, !1);
	let x = l(t, 'value', 12, ''),
		f = l(t, 'placeholder', 8, ''),
		b = l(t, 'rows', 8, 1),
		n = l(t, 'minSize', 8, null),
		o = l(t, 'maxSize', 8, null),
		g = l(t, 'required', 8, !1),
		y = l(t, 'readonly', 8, !1),
		v = l(
			t,
			'className',
			8,
			'w-full rounded-lg px-3.5 py-2 text-sm bg-gray-50 dark:text-gray-300 dark:bg-gray-850 outline-hidden  h-full'
		),
		_ = l(t, 'ariaLabel', 8, null),
		p = l(t, 'onInput', 8, () => {}),
		z = l(t, 'onBlur', 8, () => {}),
		r = T();
	w(async () => {
		(await k(),
			s(),
			requestAnimationFrame(() => {
				const a = setInterval(() => {
					i(r) && (clearInterval(a), s());
				}, 100);
			}));
	});
	const s = () => {
		if (i(r)) {
			d(r, (i(r).style.height = ''));
			let a = i(r).scrollHeight;
			(o() && a > o() && (a = o()),
				n() && a < n() && (a = n()),
				d(r, (i(r).style.height = `${a}px`)));
		}
	};
	O();
	var e = X();
	(I(e),
		M(
			e,
			(a) => S(r, a),
			() => i(r)
		),
		B(() => {
			(u(e, 'placeholder', f()),
				u(e, 'aria-label', _() || f()),
				E(e, 1, F(v())),
				u(e, 'rows', b()),
				(e.required = g()),
				(e.readOnly = y()));
		}),
		H(e, x),
		m('input', e, (a) => {
			(s(), p()(a));
		}),
		m('focus', e, () => {
			s();
		}),
		m('blur', e, function (...a) {
			var c;
			(c = z()) == null || c.apply(this, a);
		}),
		L(h, e),
		N());
}
export { Q as T };
//# sourceMappingURL=DTFIeVjj.js.map
