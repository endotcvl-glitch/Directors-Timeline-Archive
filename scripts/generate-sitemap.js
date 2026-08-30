const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const mainSource = fs.readFileSync(path.join(root, 'main.js'), 'utf8');
const directorsBlock = mainSource.match(/const directorsInfo = \{([\s\S]*?)\n\};/);

if (!directorsBlock) {
    throw new Error('main.js の directorsInfo を読み取れませんでした。');
}

const directorIds = [...directorsBlock[1].matchAll(/^\s*'([^']+)':\s*\{/gm)].map(match => match[1]);
const staticUrls = [
    ['', '2026-07-07'],
    ['directors.html', '2026-08-30'],
    ['timeline.html', '2026-08-30'],
    ['years.html', '2026-07-07'],
    ['today.html', '2026-07-07'],
    ['about.html', '2026-07-07'],
    ['notes/', '2026-08-29'],
    ['notes/david-lynch.html', '2026-07-07'],
    ['notes/wes-craven.html', '2026-07-07'],
    ['notes/edgar-wright.html', '2026-08-13'],
    ['notes/john-carpenter.html', '2026-08-29']
];
const timelineUrls = directorIds.map(id => [`timeline.html?d1=${id}`, '2026-08-30']);
const escapeXml = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const urls = [...staticUrls, ...timelineUrls];
const entries = urls.map(([pathname, lastmod]) => `    <url>\n        <loc>${escapeXml(`https://directors-timeline-archive.com/${pathname}`)}</loc>\n        <lastmod>${lastmod}</lastmod>\n    </url>`).join('\n');
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

fs.writeFileSync(path.join(root, 'sitemap.xml'), xml);
console.log(`sitemap.xml: ${urls.length} URLs (${directorIds.length} directors)`);
