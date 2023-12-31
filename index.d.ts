/**
Compare URLs by first normalizing them.

@param firstUrl - The first URL to compare.
@param secondUrl - The second URL to compare.
@returns A boolean indicating whether the URLs are the same.

@example
```
import compareUrls from 'compare-urls';

compareUrls('HTTPS://sindresorhus.com/?b=b&a=a', 'sindresorhus.com/?a=a&b=b');
//=> true
```
*/
export default function compareUrls(firstUrl: string, secondUrl: string): boolean;
