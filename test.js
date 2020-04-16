import test from 'ava';
import compareUrls from '.';

test('main', t => {
	t.true(compareUrls('https://sindresorhus.com', 'https://sindresorhus.com/'));
	t.true(compareUrls('http://sindresorhus.com', '//sindresorhus.com'));
	t.true(compareUrls('https://sindresorhus.com', 'sindresorhus.com'));
	t.true(compareUrls('HTTPS://sindresorhus.com/?b=b&a=a', 'sindresorhus.com/?a=a&b=b'));
});
