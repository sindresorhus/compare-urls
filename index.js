import normalizeUrl from 'normalize-url';

export default function compareUrls(firstUrl, secondUrl) {
	if (firstUrl === secondUrl) {
		return true;
	}

	const options = {
		defaultProtocol: 'https:'
	};

	return normalizeUrl(firstUrl, options) === normalizeUrl(secondUrl, options);
}
