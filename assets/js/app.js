(() => {
const $ = (s, r = document) => r.querySelector(s);
const MAIL = 'nullwarelabs@duck.com';
// Only verified products from the original site.
const PRODUCTS = [
 { id:'swiftservice', name:'SwiftService', ver:'v1.2.1', plat:'Windows', desc:'swiftDesc', long:'swiftModalDesc', tags:['tagSystem','tagWindows','tagUtils'],
   feat:[1,2,3,4,5,6].map(n => 'swiftFeature'+n), note:'swiftPrivacy', shots:4,
   primary:{ href:'https://github.com/nullwarelabs/nullwarelabs.github.io/releases/latest/download/SwiftService_Setup.exe', label:'swiftDownloadBtn' } },
 { id:'exolute', name:'Exolute Converter', plat:'Android', desc:'exoluteDesc', tags:['tagFinance','tagAndroid','tagOffline'],
   primary:{ href:'https://play.google.com/store/apps/details?id=com.saieesoft.exolute&pcampaignid=web_share', label:'viewStore' } },
 { id:'askanonymousbot', name:'@AskAnonymousBot', plat:'Telegram', desc:'askDesc', tags:['tagSocial','tagPrivacy'], rawTags:['Telegram'],
   primary:{ href:'https://t.me/AskAnonymousBot', label:'openTelegram' } }
];
const PAGES = [['#/products','navProducts'],['#/about','navAbout'],['#/contact','contact']];

let lang = 'en';
const t = k => (translations[lang] && translations[lang][k]) ?? (extra[lang] && extra[lang][k]) ?? extra.en[k] ?? translations.en[k] ?? k;
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const tags = p => '<div class="tags">' + p.tags.map(k => `<span class="chip">${esc(t(k))}</span>`).join('') + (p.rawTags||[]).map(x => `<span class="chip">${x}</span>`).join('') + '</div>';
const ver = p => p.ver ? `<span class="chip v">${p.ver}</span>` : '';

const views = {
 home() {
  return `<div class="fade"><p class="kicker">${t('heroKicker')}</p><h1>${t('heroH')}</h1><p class="lead">${t('heroP')}</p>
  <div class="row"><a class="btn primary" href="#/products">${t('ctaProducts')}</a><a class="btn" href="#/about">${t('ctaAbout')}</a></div>
  <div class="index" role="list" aria-label="${t('index')}">${PRODUCTS.map(p => `<a role="listitem" href="#/products/${p.id}"><b>${p.name}</b><small>${esc(t(p.desc))}</small><span class="chip">${p.plat}</span>${ver(p) || '<span></span>'}</a>`).join('')}</div>
  <section><h2>${t('approachH')}</h2><div class="cols">${[1,2,3].map(n => `<div><h3>${t('ap'+n+'h')}</h3><p>${t('ap'+n+'p')}</p></div>`).join('')}</div></section></div>`;
 },
 products() {
  const plats = [...new Set(PRODUCTS.map(p => p.plat))];
  return `<div class="fade"><h1 style="font-size:2.4rem">${t('productsH')}</h1><p class="lead">${t('projectsSub')}</p>
  <div class="bar"><input id="f" type="search" placeholder="${t('searchPh')}" aria-label="${t('search')}" value="${esc(state.q)}">
  <span class="row" role="group" aria-label="${t('platform')}"><button class="btn pill" data-p="" aria-pressed="${!state.plat}">${t('filterAll')}</button>${plats.map(x => `<button class="btn pill" data-p="${x}" aria-pressed="${state.plat===x}">${x}</button>`).join('')}</span>
  <select id="s" aria-label="${t('sortBy')}"><option value="name">${t('sortName')}</option><option value="plat" ${state.sort==='plat'?'selected':''}>${t('sortPlatform')}</option></select></div>
  <div id="list" aria-live="polite"></div></div>`;
 },
 product(id) {
  const p = PRODUCTS.find(x => x.id === id); if (!p) return views.nf();
  document.title = p.name + ' · Nullware Labs';
  const shots = p.shots ? `<div class="shots"><img id="shot" src="assets/screenshots/screenshot1.png" alt="${t('shot')} 1" width="1280" height="800"><div class="row">${Array.from({length:p.shots},(_, i) => `<button class="btn pill" data-s="${i+1}" aria-pressed="${i===0}" aria-label="${t('shot')} ${i+1}">${i+1}</button>`).join('')}</div></div>` : '';
  return `<div class="fade"><p><a href="#/products" class="muted">${t('back')}</a></p><div class="detail" style="margin-top:20px"><div>
  <h1 style="font-size:2.6rem">${p.name}</h1><p class="lead">${esc(t(p.long || p.desc))}</p>${tags(p)}
  <dl><dt>${t('platform')}</dt><dd>${p.plat}</dd>${p.ver ? `<dt>${t('version')}</dt><dd>${p.ver}</dd>` : ''}<dt>${t('status')}</dt><dd>${t('available')}</dd></dl>
  ${p.feat ? `<h2 style="font-size:1.15rem">${t('features')}</h2><ul class="feat">${p.feat.map(k => `<li>${esc(t(k))}</li>`).join('')}</ul>` : ''}
  ${p.note ? `<div class="note">${esc(t(p.note))}</div>` : ''}
  <div class="row"><a class="btn primary" href="${p.primary.href}" target="_blank" rel="noopener">${esc(t(p.primary.label))}</a>${p.id==='swiftservice' ? `<a class="btn" href="https://www.paypal.com/paypalme/YaroslavStepura" target="_blank" rel="noopener">${t('swiftSupportBtn')}</a>` : ''}</div>
  </div>${shots}</div></div>`;
 },
 about() {
  return `<div class="fade"><h1 style="font-size:2.4rem">${t('aboutH')}</h1><p class="lead">${t('aboutP')}</p>
  <section><h2>${t('approachH')}</h2><div class="cols">${[1,2,3].map(n => `<div><h3>${t('ap'+n+'h')}</h3><p>${t('ap'+n+'p')}</p></div>`).join('')}</div></section></div>`;
 },
 contact() {
  return `<div class="fade"><h1 style="font-size:2.4rem">${t('contactH')}</h1><p class="lead">${t('contactDesc')}</p>
  <div class="row"><a class="btn" href="mailto:${MAIL}">${MAIL}</a><button class="btn" id="copy">${t('copy')}</button><a class="btn" href="https://github.com/nullwarelabs" target="_blank" rel="noopener">${t('github')}</a><a class="btn" href="https://play.google.com/store/apps/dev?id=6446780682856756622" target="_blank" rel="noopener">${t('playStore')}</a></div>
  <form action="https://formsubmit.co/${MAIL}" method="POST"><input type="hidden" name="_captcha" value="false"><input type="hidden" name="_subject" value="New message from nullware"><input type="hidden" name="_next" value="https://nullwarelabs.github.io/#/contact">
   <input name="name" placeholder="${t('namePlaceholder')}" aria-label="${t('namePlaceholder')}" required maxlength="100"><input type="email" name="email" placeholder="${t('emailPlaceholder')}" aria-label="${t('emailPlaceholder')}" required maxlength="150">
   <textarea name="message" placeholder="${t('messagePlaceholder')}" aria-label="${t('messagePlaceholder')}" required maxlength="4000"></textarea><button class="btn primary" type="submit">${t('sendBtn')}</button></form>
  <p class="muted" style="margin-top:14px;max-width:52ch;font-size:.9rem">${t('mailNote')}</p></div>`;
 },
 nf() { document.title = t('notFound') + ' · Nullware Labs'; return `<div class="empty"><h1 style="font-size:2rem;margin:0 auto 10px">${t('notFound')}</h1><p>${t('notFoundP')}</p><a class="btn primary" href="#/">${t('goHome')}</a></div>`; }
};
const state = { q:'', plat:'', sort:'name' };

function renderList() {
  const q = state.q.trim().toLowerCase();
  let items = PRODUCTS.filter(p => (!state.plat || p.plat === state.plat) && (!q || (p.name + ' ' + p.plat + ' ' + t(p.desc)).toLowerCase().includes(q)));
  items.sort((a, b) => (a[state.sort] || '').localeCompare(b[state.sort] || '') || a.name.localeCompare(b.name));
  $('#list').innerHTML = items.length
   ? `<div class="grid">${items.map(p => `<a class="card" href="#/products/${p.id}"><div class="row" style="justify-content:space-between"><h3>${p.name}</h3>${ver(p)}</div><p>${esc(t(p.desc))}</p>${tags(p)}<span class="chip" style="align-self:flex-start">${p.plat} · ${t('available')}</span></a>`).join('')}</div>`
   : `<div class="empty"><p>${t('empty')}</p><button class="btn" id="reset">${t('reset')}</button></div>`;
  const r = $('#reset'); if (r) r.onclick = () => { state.q = ''; state.plat = ''; route(); };
}

function route() {
  const parts = (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean);
  const [a, b] = parts;
  let html, title = 'Nullware Labs';
  if (!a) html = views.home();
  else if (a === 'products' && !b) { html = views.products(); title = t('productsH') + ' · Nullware Labs'; }
  else if (a === 'products') html = views.product(b);
  else if (a === 'about') { html = views.about(); title = t('navAbout') + ' · Nullware Labs'; }
  else if (a === 'contact') { html = views.contact(); title = t('contact') + ' · Nullware Labs'; }
  else html = views.nf();
  $('#app').innerHTML = html;
  const own = (a === 'products' && b) || !['', 'products', 'about', 'contact'].includes(a || '') && a;
  if (!own) document.title = title;
  document.querySelectorAll('nav a').forEach(l => {
    if (l.getAttribute('href') === '#/' + a) l.setAttribute('aria-current', 'page'); else l.removeAttribute('aria-current');
  });
  if (a === 'products' && !b) {
    renderList();
    $('#f').oninput = e => { state.q = e.target.value; renderList(); };
    $('#s').onchange = e => { state.sort = e.target.value; renderList(); };
    document.querySelectorAll('[data-p]').forEach(btn => btn.onclick = () => { state.plat = btn.dataset.p; route(); $('#app').querySelector('[aria-pressed=true]')?.focus(); });
  }
  document.querySelectorAll('[data-s]').forEach(btn => btn.onclick = () => {
    $('#shot').src = `assets/screenshots/screenshot${btn.dataset.s}.png`; $('#shot').alt = `${t('shot')} ${btn.dataset.s}`;
    document.querySelectorAll('[data-s]').forEach(x => x.setAttribute('aria-pressed', x === btn));
  });
  const im = $('#shot');
  if (im) { const fail = () => { let m = $('#shotErr'); if (!m) { m = document.createElement('p'); m.id = 'shotErr'; m.className = 'note'; im.after(m); } m.textContent = t('shotErr') + ': ' + im.getAttribute('src'); }; im.onerror = fail; im.onload = () => $('#shotErr')?.remove(); }
  const c = $('#copy'); if (c) c.onclick = async () => { try { await navigator.clipboard.writeText(MAIL); c.textContent = t('copied'); } catch { location.href = 'mailto:' + MAIL; } };
  $('#nav').classList.remove('open'); $('#menu').setAttribute('aria-expanded', 'false');
}

function i18nStatic() {
  document.querySelectorAll('[data-i]').forEach(el => el.textContent = t(el.dataset.i));
  $('#q').placeholder = t('searchPh'); $('#theme').setAttribute('aria-label', t('theme')); $('#lang').setAttribute('aria-label', t('language'));
  document.documentElement.lang = lang === 'ua' ? 'uk' : lang;
}
function setLang(l, persist = true) {
  if (!translations[l]) l = 'en'; lang = l; $('#lang').value = l;
  if (persist) try { localStorage.setItem('nullware-lang', l); } catch {}
  i18nStatic(); route();
}

// Command palette (Ctrl/Cmd+K)
const pal = $('#pal');
function openPal() { $('#q').value = ''; fillPal(''); pal.showModal(); $('#q').focus(); }
function fillPal(q) {
  q = q.toLowerCase();
  const rows = [...PAGES.map(([h, k]) => [h, t(k), '']), ...PRODUCTS.map(p => ['#/products/' + p.id, p.name, p.plat + ' ' + t(p.desc)])]
    .filter(([, n, x]) => (n + ' ' + x).toLowerCase().includes(q));
  $('#res').innerHTML = rows.length ? rows.map(([h, n]) => `<li><a href="${h}">${esc(n)}</a></li>`).join('') : `<li class="muted" style="padding:10px 12px">${t('noResults')}</li>`;
}
$('#q').oninput = e => fillPal(e.target.value);
$('#q').onkeydown = e => { if (e.key === 'ArrowDown') { e.preventDefault(); $('#res a')?.focus(); } if (e.key === 'Enter') $('#res a')?.click(); };
$('#res').onkeydown = e => {
  const links = [...document.querySelectorAll('#res a')], i = links.indexOf(document.activeElement);
  if (e.key === 'ArrowDown') { e.preventDefault(); links[Math.min(i + 1, links.length - 1)]?.focus(); }
  if (e.key === 'ArrowUp') { e.preventDefault(); i > 0 ? links[i - 1].focus() : $('#q').focus(); }
};
$('#res').onclick = e => { if (e.target.closest('a')) pal.close(); };
pal.onclick = e => { if (e.target === pal) pal.close(); };
$('#searchBtn').onclick = openPal;
document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); pal.open ? pal.close() : openPal(); } });
if (/Mac|iPhone|iPad/.test(navigator.platform)) $('#kbd').textContent = '⌘ K';

$('#theme').onclick = () => {
  const n = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = n; try { localStorage.setItem('nullware-theme', n); } catch {}
};
$('#menu').onclick = () => { const o = $('#nav').classList.toggle('open'); $('#menu').setAttribute('aria-expanded', o); };
$('#lang').onchange = e => setLang(e.target.value);
addEventListener('hashchange', () => { route(); scrollTo(0, 0); $('#app').focus({ preventScroll: true }); });

let saved = null; try { saved = localStorage.getItem('nullware-lang'); } catch {}
const br = (navigator.language || 'en').split('-')[0];
setLang(saved && translations[saved] ? saved : (translations[br] ? br : 'en'), false);
})();
