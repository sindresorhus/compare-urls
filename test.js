import test from 'ava';
import m from '.';

test('main', t => {
	t.true(m('http://sindresorhus.com', 'http://sindresorhus.com/'));
	t.true(m('http://sindresorhus.com', '//sindresorhus.com'));
	t.true(m('http://sindresorhus.com', 'sindresorhus.com'));
	t.true(m('HTTP://sindresorhus.com/?b=b&a=a', 'sindresorhus.com/?a=a&b=b'));
});
