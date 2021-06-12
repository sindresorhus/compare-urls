import test from 'ava';
import compareUrls from './index.js';

test('main', t => {
	t.true(compareUrls('https://sindresorhus.com', 'https://sindresorhus.com/'));
	t.true(compareUrls('https://sindresorhus.com', '//sindresorhus.com'));
	t.true(compareUrls('https://sindresorhus.com', 'sindresorhus.com'));
	t.true(compareUrls('HTTPS://sindresorhus.com/?b=b&a=a', 'sindresorhus.com/?a=a&b=b'));
});
