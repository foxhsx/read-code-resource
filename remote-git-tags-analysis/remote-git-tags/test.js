import test from 'ava';
import remoteGitTags from './index.js';

test('main', async t => {
	const tags = await remoteGitTags('https://github.com/foxhsx/static-blog.git');
	console.log(t);
	console.log(tags);
});
