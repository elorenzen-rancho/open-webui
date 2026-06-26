import './CWj6FrbW.js';
import './69_IOA4Y.js';
import {
	p as O,
	o as P,
	v as j,
	w as q,
	y as A,
	h as B,
	i as I,
	a as h,
	b as K,
	x as b,
	l as e,
	k as f,
	m as u,
	c as g,
	r as y,
	t as S,
	z as W,
	q as _,
	f as G
} from './CD8kWLvT.js';
import { i as H } from './CdIW-EUl.js';
import { s as J } from './ByAzvrkO.js';
import { t as k, f as Q } from './BDmj1FQE.js';
import { s as x } from './BfA5TzUS.js';
import { b as R } from './BCA7d6a5.js';
import { i as U } from './BolXBFGq.js';
import { p as c } from './DbBXQmQ3.js';
import { f as V } from './CXaewINb.js';
import { c as X } from './B6VcIur7.js';
var Y = G(
	'<div aria-modal="true" role="dialog" style="scrollbar-gutter: stable;"><div><!></div></div>'
);
function de(E, l) {
	O(l, !1);
	let s = c(l, 'show', 12, !0),
		v = c(l, 'size', 8, 'md'),
		C = c(l, 'containerClassName', 8, 'p-3'),
		L = c(l, 'className', 8, 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-4xl'),
		o = u(null),
		r = u(null);
	const M = (t) =>
			t === 'full'
				? 'w-full'
				: t === 'xs'
					? 'w-[16rem]'
					: t === 'sm'
						? 'w-[30rem]'
						: t === 'md'
							? 'w-[42rem]'
							: t === 'lg'
								? 'w-[56rem]'
								: t === 'xl'
									? 'w-[70rem]'
									: t === '2xl'
										? 'w-[84rem]'
										: t === '3xl'
											? 'w-[100rem]'
											: 'w-[56rem]',
		p = (t) => {
			t.key === 'Escape' && N() && s(!1);
		},
		N = () => {
			const t = document.getElementsByClassName('modal');
			return t.length && t[t.length - 1] === e(o);
		};
	P(() => {});
	let n = u(),
		i = u();
	(j(() => {
		(s(!1), e(r) && e(r).deactivate(), e(o) && document.body.removeChild(e(o)));
	}),
		q(
			() => (b(s()), e(o), e(r), e(n), e(i)),
			() => {
				s() && e(o)
					? (document.body.appendChild(e(o)),
						f(
							r,
							X(e(o), {
								allowOutsideClick: (t) =>
									t.target.closest('[data-sonner-toast]') !== null ||
									t.target.closest('.modal-content') === null
							})
						),
						e(r).activate(),
						f(n, (t) => {
							e(r) && e(o) && !e(o).contains(t.target) && e(r).pause();
						}),
						f(i, () => {
							e(r) && e(r).unpause();
						}),
						document.addEventListener('pointerdown', e(n), !0),
						e(o).addEventListener('focusin', e(i)),
						window.addEventListener('keydown', p),
						(document.body.style.overflow = 'hidden'))
					: e(o) &&
						(e(r) && (e(r).deactivate(), f(r, null)),
						e(n) && document.removeEventListener('pointerdown', e(n), !0),
						e(i) && e(o).removeEventListener('focusin', e(i)),
						window.removeEventListener('keydown', p),
						document.body.removeChild(e(o)),
						(document.body.style.overflow = 'unset'));
			}
		),
		A(),
		U());
	var w = B(),
		T = I(w);
	{
		var D = (t) => {
			var a = Y(),
				d = g(a),
				F = g(d);
			(J(F, l, 'default', {}, null),
				y(d),
				y(a),
				R(
					a,
					(m) => f(o, m),
					() => e(o)
				),
				S(
					(m) => {
						(x(
							a,
							1,
							`modal fixed top-0 right-0 left-0 bottom-0 bg-black/30 dark:bg-black/60 w-full h-screen max-h-[100dvh] ${C() ?? ''}  flex justify-center z-9999 overflow-y-auto overscroll-contain`,
							'svelte-1vr5p4p'
						),
							x(
								d,
								1,
								`m-auto max-w-full ${m ?? ''} ${v() !== 'full' ? 'mx-2' : ''} shadow-3xl min-h-fit scrollbar-hidden ${L() ?? ''} border border-white dark:border-gray-850`,
								'svelte-1vr5p4p'
							));
					},
					[() => (b(v()), W(() => M(v())))]
				),
				k(1, d, () => V),
				_('mousedown', d, (m) => {
					m.stopPropagation();
				}),
				k(
					1,
					a,
					() => Q,
					() => ({ duration: 10 })
				),
				_('mousedown', a, () => {
					s(!1);
				}),
				h(t, a));
		};
		H(T, (t) => {
			s() && t(D);
		});
	}
	(h(E, w), K());
}
export { de as M };
//# sourceMappingURL=sSXaIhmU.js.map
