(() => {
const el = (s, r = document) => r.querySelector(s);
const els = (s, r = document) => Array.from(r.querySelectorAll(s));
const MAIL = 'nullwarelabs@duck.com';

const ICONS = {
  swiftservice: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>',
  exolute: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  askanonymousbot: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  repo: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>'
};

const PRODUCTS = [
  {
    id: 'swiftservice',
    name: 'SwiftService',
    ver: 'v1.2.1',
    plat: 'Windows',
    cat: 'tagSystem',
    status: 'Released',
    desc: 'swiftDesc',
    long: 'swiftModalDesc',
    tags: ['tagSystem', 'tagWindows', 'tagUtils'],
    feat: [1, 2, 3, 4, 5, 6].map(n => 'swiftFeature' + n),
    note: 'swiftPrivacy',
    shots: 4,
    req: 'Windows 10 / Windows 11 (64-bit), Administrator privileges for system service and registry operations.',
    docSlug: 'swiftservice',
    repoUrl: 'https://github.com/nullwarelabs/nullwarelabs.github.io/releases',
    primary: {
      href: 'https://github.com/nullwarelabs/nullwarelabs.github.io/releases/latest/download/SwiftService_Setup.exe',
      label: 'swiftDownloadBtn'
    },
    faq: [
      {
        q: 'Does SwiftService send any telemetry or background data?',
        a: 'No. SwiftService executes all cleanup, registry, and DNS operations strictly locally on your machine with zero network tracking.'
      },
      {
        q: 'Which languages are supported inside the application?',
        a: 'SwiftService supports full English (EN) and Russian (RU) interface localization.'
      }
    ]
  },
  {
    id: 'exolute',
    name: 'Exolute Converter',
    ver: 'Play Store',
    plat: 'Android',
    cat: 'tagFinance',
    status: 'Released',
    desc: 'exoluteDesc',
    long: 'exoluteDesc',
    tags: ['tagFinance', 'tagAndroid', 'tagOffline'],
    feat: [
      'Real-time exchange rate conversion across major global currencies',
      'Offline mode caching latest synchronized rates for travel and low-connectivity areas',
      'Historical currency charts and clean, distraction-free Material interface'
    ],
    req: 'Android 8.0+ (installed via Google Play Store).',
    docSlug: 'exolute',
    privacyUrl: 'exolute-privacy-policy.html',
    primary: {
      href: 'https://play.google.com/store/apps/details?id=com.saieesoft.exolute&pcampaignid=web_share',
      label: 'viewStore'
    },
    faq: [
      {
        q: 'Can Exolute Converter work without an internet connection?',
        a: 'Yes. Exolute caches the most recently fetched exchange rates locally so you can convert currencies offline.'
      },
      {
        q: 'Where can I review the Exolute Privacy Policy?',
        a: 'The official Exolute Privacy Policy is hosted directly on our platform at /exolute-privacy-policy.html.'
      }
    ]
  },
  {
    id: 'askanonymousbot',
    name: '@AskAnonymousBot',
    ver: 'Live Bot',
    plat: 'Telegram',
    cat: 'tagPrivacy',
    status: 'Released',
    desc: 'askDesc',
    long: 'askDesc',
    tags: ['tagSocial', 'tagPrivacy'],
    rawTags: ['Telegram'],
    feat: [
      'Personal shareable links for receiving anonymous questions directly in Telegram',
      'Privacy-first message routing without persistent message content logging',
      'Instant reply workflow and spam protection controls inside Telegram'
    ],
    req: 'Any device with an active Telegram client (Desktop, iOS, Android, or Web).',
    docSlug: 'askanonymousbot',
    primary: {
      href: 'https://t.me/AskAnonymousBot',
      label: 'openTelegram'
    },
    faq: [
      {
        q: 'How do I receive anonymous messages?',
        a: 'Open @AskAnonymousBot in Telegram, press Start, and share your generated link on your profile or channel.'
      }
    ]
  }
];

const INITIAL_PROJECTS = [
  {
    id: 'nullwarelabs-web',
    name: 'nullwarelabs.github.io',
    cat: 'Web Platform',
    status: 'Active',
    lang: 'JavaScript / HTML / CSS',
    desc: 'Zero-dependency static web architecture, documentation portal, multilingual localization engine (7 languages), and release distribution hub for Nullware Labs.',
    url: 'https://github.com/nullwarelabs/nullwarelabs.github.io'
  },
  {
    id: 'swiftservice-dist',
    name: 'SwiftService Release Distribution',
    cat: 'Windows Systems',
    status: 'Active',
    lang: 'Windows x64 Installer',
    desc: 'Public release artifact hosting and versioned installer distribution for the SwiftService Windows optimization utility.',
    url: 'https://github.com/nullwarelabs/nullwarelabs.github.io/releases'
  }
];

const INITIAL_CHANGELOG = [
  {
    ver: 'v2.0.0',
    date: '2026-10',
    product: 'Nullware Platform',
    productId: 'platform',
    title: 'Nullware Labs Platform Redesign & Documentation Hub',
    items: [
      { type: 'added', text: 'Dedicated Documentation portal, Projects & Experiments directory, and structured Changelog timeline.' },
      { type: 'added', text: 'Global Ctrl+K / Cmd+K command palette indexing products, projects, documentation, and release notes.' },
      { type: 'improved', text: 'Multi-criteria filtering by platform and category across the product catalog with 7-language localization.' }
    ]
  },
  {
    ver: 'v1.2.1',
    date: '2026',
    product: 'SwiftService',
    productId: 'swiftservice',
    title: 'SwiftService Windows Optimization Suite Release',
    downloadUrl: 'https://github.com/nullwarelabs/nullwarelabs.github.io/releases/latest/download/SwiftService_Setup.exe',
    items: [
      { type: 'added', text: 'System cleanup and temporary junk removal engine for Windows.' },
      { type: 'added', text: 'Registry maintenance, network & DNS configuration tools, and game performance tuning.' },
      { type: 'improved', text: 'Complete EN / RU localization with strict zero-telemetry local execution.' }
    ]
  },
  {
    ver: 'Release',
    date: '2026',
    product: 'Exolute Converter',
    productId: 'exolute',
    title: 'Exolute Currency Converter on Google Play',
    items: [
      { type: 'added', text: 'Real-time currency conversion with historical charts and offline rate caching on Android.' },
      { type: 'added', text: 'Published official Exolute Privacy Policy on nullwarelabs.github.io.' }
    ]
  }
];

const DOCS = [
  {
    slug: 'getting-started',
    title: 'Overview & Ecosystem',
    summary: 'Introduction to Nullware Labs software principles, distribution channels, and verification.',
    sections: [
      {
        h: 'About the Studio Ecosystem',
        p: 'Nullware Labs develops focused, single-purpose software utilities across Windows, Android, and Telegram. Every tool is designed to operate with minimal overhead and transparent privacy guarantees.'
      },
      {
        h: 'Official Distribution Channels',
        p: 'Always obtain Nullware Labs software from our verified distribution endpoints listed below:',
        code: 'Website:      https://nullwarelabs.github.io/\nGitHub Org:   https://github.com/nullwarelabs\nGoogle Play:  https://play.google.com/store/apps/dev?id=6446780682856756622\nTelegram Bot: https://t.me/AskAnonymousBot'
      }
    ]
  },
  {
    slug: 'swiftservice',
    title: 'SwiftService Guide',
    summary: 'Installation, system requirements, modules, and privacy architecture for SwiftService on Windows.',
    productId: 'swiftservice',
    sections: [
      {
        h: 'Installation & Execution',
        p: 'Download the latest SwiftService_Setup.exe installer from the official GitHub Releases endpoint. Administrator permissions are required so SwiftService can manage Windows services, flush DNS caches, and repair registry entries.',
        code: 'Installer: SwiftService_Setup.exe\nVersion:   v1.2.1\nPlatform:  Windows 10 / 11 (x64)\nLanguages: English (EN), Russian (RU)'
      },
      {
        h: 'Core Optimization Modules',
        p: 'SwiftService groups system maintenance into five focused modules: System Cleanup & Junk Removal, Registry Maintenance & Repair, Network & DNS Tools, Game & Performance Optimization, and Privacy & Security Management.'
      },
      {
        h: 'Zero-Telemetry Architecture',
        p: 'SwiftService does not include analytics SDKs, background updaters, or external telemetry calls. All operations run locally on your machine.'
      }
    ]
  },
  {
    slug: 'exolute',
    title: 'Exolute Converter',
    summary: 'Usage guide, offline exchange rate caching, and privacy documentation for Exolute Converter on Android.',
    productId: 'exolute',
    sections: [
      {
        h: 'Overview & Offline Mode',
        p: 'Exolute Converter provides real-time currency conversion and historical exchange rate charts on Android. Whenever a network connection is available, rates are synchronized and cached locally for offline access.',
        code: 'Package ID: com.saieesoft.exolute\nPlatform:   Android (Google Play)\nPrivacy:    https://nullwarelabs.github.io/exolute-privacy-policy.html'
      }
    ]
  },
  {
    slug: 'askanonymousbot',
    title: '@AskAnonymousBot',
    summary: 'How to configure and use @AskAnonymousBot on Telegram for end-to-end anonymous Q&A.',
    productId: 'askanonymousbot',
    sections: [
      {
        h: 'Quick Start in Telegram',
        p: 'Launch @AskAnonymousBot in Telegram to generate your unique anonymous inbox link. Share the link on your social profiles to receive messages directly inside Telegram without exposing sender metadata.',
        code: 'Bot Handle: @AskAnonymousBot\nDirect URL: https://t.me/AskAnonymousBot'
      }
    ]
  }
];

const NAV_PAGES = [
  ['#/products', 'navProducts'],
  ['#/projects', 'navProjects'],
  ['#/changelog', 'navChangelog'],
  ['#/docs', 'navDocs'],
  ['#/about', 'navAbout'],
  ['#/contact', 'contact']
];

let lang = 'en';
const state = {
  q: '',
  plat: '',
  cat: '',
  sort: 'name',
  projCat: '',
  clFilter: '',
  docSearch: '',
  ghSynced: false,
  projects: INITIAL_PROJECTS.slice(),
  changelog: INITIAL_CHANGELOG.slice()
};

const t = k =>
  (translations[lang] && translations[lang][k]) ??
  (extra[lang] && extra[lang][k]) ??
  extra.en[k] ??
  translations.en[k] ??
  k;

const esc = s =>
  String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const renderTags = p =>
  '<div class="tags">' +
  p.tags.map(k => '<span class="chip">' + esc(t(k)) + '</span>').join('') +
  (p.rawTags || []).map(x => '<span class="chip">' + esc(x) + '</span>').join('') +
  '</div>';

const renderVer = p => (p.ver ? '<span class="chip v">' + esc(p.ver) + '</span>' : '');

async function syncGitHubData() {
  const cacheKey = 'nullware-gh-cache-v1';
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.ts < 1800000) {
        applyGitHubData(parsed.repos, parsed.releases);
        return;
      }
    }
    const responses = await Promise.all([
      fetch('https://api.github.com/users/nullwarelabs/repos?sort=updated&per_page=10'),
      fetch('https://api.github.com/repos/nullwarelabs/nullwarelabs.github.io/releases?per_page=5')
    ]);
    const repos = responses[0].ok ? await responses[0].json() : null;
    const releases = responses[1].ok ? await responses[1].json() : null;
    if (repos || releases) {
      sessionStorage.setItem(cacheKey, JSON.stringify({ ts: Date.now(), repos: repos, releases: releases }));
      applyGitHubData(repos, releases);
    }
  } catch (err) {}
}

function applyGitHubData(repos, releases) {
  if (Array.isArray(releases) && releases.length > 0) {
    const latest = releases[0];
    const swift = PRODUCTS.find(p => p.id === 'swiftservice');
    if (swift && latest.tag_name) {
      swift.ver = latest.tag_name;
    }
    releases.forEach(rel => {
      if (!rel.tag_name) return;
      const exists = state.changelog.some(c => c.ver.toLowerCase() === rel.tag_name.toLowerCase());
      if (!exists) {
        const pubDate = rel.published_at ? rel.published_at.slice(0, 10) : '2026';
        const firstLine = rel.body ? rel.body.split('\n')[0].replace(/^[#*-]\s*/, '') : 'Published release on GitHub.';
        state.changelog.unshift({
          ver: rel.tag_name,
          date: pubDate,
          product: 'SwiftService',
          productId: 'swiftservice',
          title: rel.name || ('SwiftService ' + rel.tag_name),
          downloadUrl: rel.html_url,
          items: [{ type: 'added', text: firstLine }]
        });
      }
    });
    state.ghSynced = true;
  }
  if (Array.isArray(repos) && repos.length > 0) {
    repos.forEach(r => {
      if (!r.name) return;
      const exists = state.projects.some(p => p.name.toLowerCase() === r.name.toLowerCase());
      if (!exists) {
        state.projects.push({
          id: r.name.toLowerCase(),
          name: r.name,
          cat: 'Open Source',
          status: r.archived ? 'Archived' : 'Active',
          lang: r.language || 'Repository',
          desc: r.description || 'Public repository maintained by Nullware Labs on GitHub.',
          url: r.html_url
        });
      }
    });
    state.ghSynced = true;
  }
}

const views = {
  home() {
    const recent = state.changelog.slice(0, 2);
    const prodRows = PRODUCTS.map(p =>
      '<a role="listitem" href="#/products/' + p.id + '">' +
        '<span class="index-title"><span class="prod-icon">' + (ICONS[p.id] || ICONS.repo) + '</span><b>' + esc(p.name) + '</b></span>' +
        '<small class="muted">' + esc(t(p.desc)) + '</small>' +
        '<span class="chip">' + esc(p.plat) + '</span>' +
        renderVer(p) +
      '</a>'
    ).join('');

    const pillars = [1, 2, 3].map(n =>
      '<div class="feature-box">' +
        '<h3>' + esc(t('ap' + n + 'h')) + '</h3>' +
        '<p>' + esc(t('ap' + n + 'p')) + '</p>' +
      '</div>'
    ).join('');

    const projCards = state.projects.slice(0, 2).map(proj =>
      '<div class="card">' +
        '<div class="card-head">' +
          '<h3>' + esc(proj.name) + '</h3>' +
          '<span class="chip status-active">' + esc(proj.status) + '</span>' +
        '</div>' +
        '<p>' + esc(proj.desc) + '</p>' +
        '<div class="card-foot">' +
          '<span class="muted">' + esc(proj.lang) + '</span>' +
          '<a class="section-link" href="' + esc(proj.url) + '" target="_blank" rel="noopener">GitHub ↗</a>' +
        '</div>' +
      '</div>'
    ).join('');

    const relCards = recent.map(r =>
      '<div class="card">' +
        '<div class="card-head">' +
          '<div class="row">' +
            '<span class="chip v">' + esc(r.ver) + '</span>' +
            '<span class="chip">' + esc(r.product) + '</span>' +
          '</div>' +
          '<small class="muted">' + esc(r.date) + '</small>' +
        '</div>' +
        '<h3>' + esc(r.title) + '</h3>' +
        '<p>' + esc(r.items[0] ? r.items[0].text : '') + '</p>' +
      '</div>'
    ).join('');

    return (
      '<div class="fade">' +
        '<div class="hero">' +
          '<div class="kicker"><span class="status-dot"></span> ' + esc(t('heroKicker')) + '</div>' +
          '<h1>' + esc(t('heroH')) + '</h1>' +
          '<p class="lead">' + esc(t('heroP')) + '</p>' +
          '<div class="row">' +
            '<a class="btn primary" href="#/products">' + esc(t('ctaProducts')) + '</a>' +
            '<a class="btn" href="#/docs">' + esc(t('navDocs')) + '</a>' +
            '<a class="btn ghost" href="#/about">' + esc(t('ctaAbout')) + '</a>' +
          '</div>' +
        '</div>' +
        '<section>' +
          '<div class="section-head">' +
            '<h2>' + esc(t('productsH')) + '</h2>' +
            '<a class="section-link" href="#/products">' + esc(t('viewAllProducts')) + '</a>' +
          '</div>' +
          '<div class="index" role="list" aria-label="' + esc(t('index')) + '">' + prodRows + '</div>' +
        '</section>' +
        '<section>' +
          '<div class="section-head"><h2>' + esc(t('approachH')) + '</h2></div>' +
          '<div class="cols">' + pillars + '</div>' +
        '</section>' +
        '<section>' +
          '<div class="section-head">' +
            '<h2>' + esc(t('projectsH')) + '</h2>' +
            '<a class="section-link" href="#/projects">' + esc(t('viewAllProjects')) + '</a>' +
          '</div>' +
          '<div class="grid">' + projCards + '</div>' +
        '</section>' +
        '<section>' +
          '<div class="section-head">' +
            '<h2>' + esc(t('recentReleases')) + '</h2>' +
            '<a class="section-link" href="#/changelog">' + esc(t('viewChangelog')) + '</a>' +
          '</div>' +
          '<div class="grid">' + relCards + '</div>' +
        '</section>' +
      '</div>'
    );
  },

  products() {
    const plats = Array.from(new Set(PRODUCTS.map(p => p.plat)));
    const cats = Array.from(new Set(PRODUCTS.map(p => p.cat)));
    const platBtns = plats.map(x =>
      '<button class="btn pill" type="button" data-p="' + esc(x) + '" aria-pressed="' + (state.plat === x) + '">' + esc(x) + '</button>'
    ).join('');
    const catBtns = cats.map(c =>
      '<button class="btn pill" type="button" data-cat="' + esc(c) + '" aria-pressed="' + (state.cat === c) + '">' + esc(t(c)) + '</button>'
    ).join('');

    return (
      '<div class="fade">' +
        '<div class="kicker">' + esc(t('navProducts')) + '</div>' +
        '<h1>' + esc(t('productsH')) + '</h1>' +
        '<p class="lead">' + esc(t('projectsSub')) + '</p>' +
        '<div class="bar">' +
          '<input id="f" type="search" placeholder="' + esc(t('searchPh')) + '" aria-label="' + esc(t('search')) + '" value="' + esc(state.q) + '">' +
          '<div class="row" role="group" aria-label="' + esc(t('platform')) + '">' +
            '<button class="btn pill" type="button" data-p="" aria-pressed="' + (!state.plat) + '">' + esc(t('filterAll')) + '</button>' +
            platBtns +
          '</div>' +
          '<div class="row" role="group" aria-label="' + esc(t('category')) + '">' +
            catBtns +
          '</div>' +
          '<select id="s" aria-label="' + esc(t('sortBy')) + '">' +
            '<option value="name">' + esc(t('sortName')) + '</option>' +
            '<option value="plat"' + (state.sort === 'plat' ? ' selected' : '') + '>' + esc(t('sortPlatform')) + '</option>' +
          '</select>' +
        '</div>' +
        '<div id="list" aria-live="polite"></div>' +
      '</div>'
    );
  },

  product(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return views.nf();
    document.title = p.name + ' · Nullware Labs';
    const prodReleases = state.changelog.filter(c => c.productId === p.id);

    let shotsHtml = '';
    if (p.shots) {
      const shotBtns = Array.from({ length: p.shots }, (_, i) =>
        '<button class="btn pill" type="button" data-s="' + (i + 1) + '" aria-pressed="' + (i === 0) + '" aria-label="' + esc(t('shot')) + ' ' + (i + 1) + '">' +
          esc(t('shot')) + ' ' + (i + 1) +
        '</button>'
      ).join('');
      shotsHtml =
        '<div class="shots">' +
          '<img id="shot" src="assets/screenshots/screenshot1.png" alt="' + esc(p.name) + ' ' + esc(t('shot')) + ' 1" width="1280" height="800">' +
          '<div class="row">' + shotBtns + '</div>' +
        '</div>';
    } else {
      shotsHtml =
        '<div class="spec-box">' +
          '<h3>' + esc(t('sysReq')) + '</h3>' +
          '<p class="muted" style="margin-top:8px">' + esc(p.req) + '</p>' +
          '<div class="note" style="margin-top:16px"><strong>' + esc(p.name) + '</strong> · ' + esc(p.plat) + ' (' + esc(t('available')) + ')</div>' +
        '</div>';
    }

    const featHtml = p.feat
      ? '<h2 style="font-size:1.15rem;margin-top:24px">' + esc(t('features')) + '</h2>' +
        '<ul class="feat">' + p.feat.map(k => '<li>' + esc(t(k)) + '</li>').join('') + '</ul>'
      : '';

    const reqHtml = p.shots && p.req
      ? '<h2 style="font-size:1.15rem;margin-top:20px">' + esc(t('sysReq')) + '</h2>' +
        '<p class="muted" style="margin:6px 0 18px">' + esc(p.req) + '</p>'
      : '';

    const noteHtml = p.note ? '<div class="note">' + esc(t(p.note)) + '</div>' : '';

    const relSection = prodReleases.length
      ? '<section>' +
          '<h2>' + esc(t('changelogH')) + ' · ' + esc(p.name) + '</h2>' +
          '<div class="timeline" style="margin-top:16px">' +
            prodReleases.map(r =>
              '<div class="release-card">' +
                '<div class="release-head">' +
                  '<div class="row"><span class="chip v">' + esc(r.ver) + '</span><strong>' + esc(r.title) + '</strong></div>' +
                  '<span class="muted">' + esc(r.date) + '</span>' +
                '</div>' +
                '<ul class="release-items">' +
                  r.items.map(it =>
                    '<li><span class="badge-type badge-' + esc(it.type) + '">' + esc(it.type) + '</span><span>' + esc(it.text) + '</span></li>'
                  ).join('') +
                '</ul>' +
              '</div>'
            ).join('') +
          '</div>' +
        '</section>'
      : '';

    const faqSection = p.faq && p.faq.length
      ? '<section>' +
          '<h2>' + esc(t('faqH')) + '</h2>' +
          '<div class="faq-list" style="margin-top:16px">' +
            p.faq.map(f =>
              '<details class="faq-item">' +
                '<summary>' + esc(f.q) + ' <span>+</span></summary>' +
                '<p>' + esc(f.a) + '</p>' +
              '</details>'
            ).join('') +
          '</div>' +
        '</section>'
      : '';

    return (
      '<div class="fade">' +
        '<p><a href="#/products" class="muted">' + esc(t('back')) + '</a></p>' +
        '<div class="detail" style="margin-top:20px">' +
          '<div>' +
            '<div class="row" style="margin-bottom:12px">' +
              '<span class="prod-icon">' + (ICONS[p.id] || ICONS.repo) + '</span>' +
              '<span class="chip status-released">' + esc(t('available')) + '</span>' +
              renderVer(p) +
            '</div>' +
            '<h1>' + esc(p.name) + '</h1>' +
            '<p class="lead">' + esc(t(p.long || p.desc)) + '</p>' +
            renderTags(p) +
            '<dl class="meta-grid">' +
              '<div><dt>' + esc(t('platform')) + '</dt><dd>' + esc(p.plat) + '</dd></div>' +
              '<div><dt>' + esc(t('version')) + '</dt><dd>' + esc(p.ver) + '</dd></div>' +
              '<div><dt>' + esc(t('status')) + '</dt><dd>' + esc(t('available')) + '</dd></div>' +
            '</dl>' +
            featHtml +
            reqHtml +
            noteHtml +
            '<div class="row" style="margin-top:22px">' +
              '<a class="btn primary" href="' + esc(p.primary.href) + '" target="_blank" rel="noopener">' + esc(t(p.primary.label)) + '</a>' +
              (p.docSlug ? '<a class="btn" href="#/docs/' + esc(p.docSlug) + '">' + esc(t('readDocs')) + '</a>' : '') +
              (p.privacyUrl ? '<a class="btn" href="' + esc(p.privacyUrl) + '">' + esc(t('privacyPolicy')) + '</a>' : '') +
              (p.repoUrl ? '<a class="btn" href="' + esc(p.repoUrl) + '" target="_blank" rel="noopener">' + esc(t('sourceCode')) + '</a>' : '') +
              (p.id === 'swiftservice' ? '<a class="btn" href="https://www.paypal.com/paypalme/YaroslavStepura" target="_blank" rel="noopener">' + esc(t('swiftSupportBtn')) + '</a>' : '') +
            '</div>' +
          '</div>' +
          shotsHtml +
        '</div>' +
        relSection +
        faqSection +
      '</div>'
    );
  },

  projects() {
    const cats = Array.from(new Set(state.projects.map(p => p.cat)));
    const filtered = state.projects.filter(p => !state.projCat || p.cat === state.projCat);
    const catBtns = cats.map(c =>
      '<button class="btn pill" type="button" data-pcat="' + esc(c) + '" aria-pressed="' + (state.projCat === c) + '">' + esc(c) + '</button>'
    ).join('');

    const cards = filtered.map(proj =>
      '<div class="card">' +
        '<div class="card-head">' +
          '<div class="row">' +
            '<span class="prod-icon">' + ICONS.repo + '</span>' +
            '<h3>' + esc(proj.name) + '</h3>' +
          '</div>' +
          '<span class="chip status-active">' + esc(proj.status) + '</span>' +
        '</div>' +
        '<p>' + esc(proj.desc) + '</p>' +
        '<div class="tags">' +
          '<span class="chip">' + esc(proj.cat) + '</span>' +
          '<span class="chip">' + esc(proj.lang) + '</span>' +
        '</div>' +
        '<div class="card-foot">' +
          '<span class="muted">github.com/nullwarelabs</span>' +
          '<a class="btn" href="' + esc(proj.url) + '" target="_blank" rel="noopener">' + esc(t('sourceCode')) + ' ↗</a>' +
        '</div>' +
      '</div>'
    ).join('');

    return (
      '<div class="fade">' +
        '<div class="kicker">' + esc(state.ghSynced ? t('syncLive') : t('syncLocal')) + '</div>' +
        '<h1>' + esc(t('projectsH')) + '</h1>' +
        '<p class="lead">' + esc(t('projectsLead')) + '</p>' +
        '<div class="bar">' +
          '<button class="btn pill" type="button" data-pcat="" aria-pressed="' + (!state.projCat) + '">' + esc(t('filterAll')) + '</button>' +
          catBtns +
        '</div>' +
        '<div class="grid">' + cards + '</div>' +
      '</div>'
    );
  },

  changelog() {
    const prods = Array.from(new Set(state.changelog.map(c => c.product)));
    const list = state.changelog.filter(c => !state.clFilter || c.product === state.clFilter);
    const filterBtns = prods.map(pr =>
      '<button class="btn pill" type="button" data-clf="' + esc(pr) + '" aria-pressed="' + (state.clFilter === pr) + '">' + esc(pr) + '</button>'
    ).join('');

    const entries = list.map(r =>
      '<article class="release-card">' +
        '<div class="release-head">' +
          '<div class="row">' +
            '<span class="chip v">' + esc(r.ver) + '</span>' +
            '<span class="chip">' + esc(r.product) + '</span>' +
            '<h3>' + esc(r.title) + '</h3>' +
          '</div>' +
          '<span class="muted">' + esc(r.date) + '</span>' +
        '</div>' +
        '<ul class="release-items">' +
          r.items.map(it =>
            '<li><span class="badge-type badge-' + esc(it.type) + '">' + esc(it.type) + '</span><span>' + esc(it.text) + '</span></li>'
          ).join('') +
        '</ul>' +
        (r.downloadUrl
          ? '<div class="row" style="margin-top:16px"><a class="btn" href="' + esc(r.downloadUrl) + '" target="_blank" rel="noopener">' + esc(t('download')) + ' ↗</a></div>'
          : '') +
      '</article>'
    ).join('');

    return (
      '<div class="fade">' +
        '<div class="kicker">' + esc(state.ghSynced ? t('syncLive') : t('syncLocal')) + '</div>' +
        '<h1>' + esc(t('changelogH')) + '</h1>' +
        '<p class="lead">' + esc(t('changelogLead')) + '</p>' +
        '<div class="bar">' +
          '<button class="btn pill" type="button" data-clf="" aria-pressed="' + (!state.clFilter) + '">' + esc(t('filterAll')) + '</button>' +
          filterBtns +
        '</div>' +
        '<div class="timeline">' + entries + '</div>' +
      '</div>'
    );
  },

  docs(slug) {
    const activeSlug = slug || DOCS[0].slug;
    const doc = DOCS.find(d => d.slug === activeSlug);
    if (!doc) return views.nf();
    document.title = doc.title + ' · Docs · Nullware Labs';
    const q = state.docSearch.trim().toLowerCase();
    const visibleDocs = DOCS.filter(
      d => !q || (d.title + ' ' + d.summary + ' ' + d.sections.map(s => s.h + ' ' + s.p).join(' ')).toLowerCase().includes(q)
    );
    const idx = DOCS.findIndex(d => d.slug === doc.slug);
    const prev = DOCS[idx - 1];
    const next = DOCS[idx + 1];

    const navHtml = visibleDocs.length
      ? visibleDocs.map(d =>
          '<a class="docs-nav-link" href="#/docs/' + esc(d.slug) + '"' + (d.slug === doc.slug ? ' aria-current="page"' : '') + '>' + esc(d.title) + '</a>'
        ).join('')
      : '<p class="muted" style="padding:8px;font-size:.85rem">' + esc(t('noResults')) + '</p>';

    const sectionsHtml = doc.sections.map(s =>
      '<h2>' + esc(s.h) + '</h2>' +
      '<p>' + esc(s.p) + '</p>' +
      (s.code
        ? '<div class="code-block">' +
            '<button class="btn copy-code" type="button" data-code="' + esc(s.code) + '">' + esc(t('copy')) + '</button>' +
            '<pre><code>' + esc(s.code) + '</code></pre>' +
          '</div>'
        : '')
    ).join('');

    return (
      '<div class="fade">' +
        '<div class="docs-layout">' +
          '<aside class="docs-sidebar" aria-label="Documentation navigation">' +
            '<input id="docSearchInput" type="search" placeholder="' + esc(t('search')) + '..." value="' + esc(state.docSearch) + '" aria-label="Search documentation">' +
            '<div id="docNavLinks">' + navHtml + '</div>' +
          '</aside>' +
          '<article class="docs-article">' +
            '<nav class="breadcrumbs" aria-label="Breadcrumb">' +
              '<a href="#/">Nullware Labs</a> <span>/</span> <a href="#/docs">' + esc(t('navDocs')) + '</a> <span>/</span> <span>' + esc(doc.title) + '</span>' +
            '</nav>' +
            '<h1>' + esc(doc.title) + '</h1>' +
            '<p class="lead" style="margin:8px 0 20px">' + esc(doc.summary) + '</p>' +
            sectionsHtml +
            '<div class="row" style="justify-content:space-between;margin-top:36px;padding-top:20px;border-top:1px solid var(--line)">' +
              (prev ? '<a class="btn" href="#/docs/' + esc(prev.slug) + '">← ' + esc(prev.title) + '</a>' : '<span></span>') +
              (next ? '<a class="btn" href="#/docs/' + esc(next.slug) + '">' + esc(next.title) + ' →</a>' : '<span></span>') +
            '</div>' +
          '</article>' +
        '</div>' +
      '</div>'
    );
  },

  about() {
    const pillars = [1, 2, 3].map(n =>
      '<div class="feature-box">' +
        '<h3>' + esc(t('ap' + n + 'h')) + '</h3>' +
        '<p>' + esc(t('ap' + n + 'p')) + '</p>' +
      '</div>'
    ).join('');

    return (
      '<div class="fade">' +
        '<div class="kicker">' + esc(t('heroKicker')) + '</div>' +
        '<h1>' + esc(t('aboutH')) + '</h1>' +
        '<p class="lead">' + esc(t('aboutP')) + '</p>' +
        '<section>' +
          '<h2>' + esc(t('approachH')) + '</h2>' +
          '<div class="cols" style="margin-top:18px">' + pillars + '</div>' +
        '</section>' +
        '<section>' +
          '<h2>Domains & Platforms</h2>' +
          '<div class="cols" style="margin-top:18px">' +
            '<div class="feature-box">' +
              '<h3>Windows Systems</h3>' +
              '<p>Native system maintenance, service control, DNS tooling, and zero-telemetry optimization via SwiftService.</p>' +
            '</div>' +
            '<div class="feature-box">' +
              '<h3>Android Applications</h3>' +
              '<p>Offline-capable mobile utilities published on Google Play, including Exolute Converter.</p>' +
            '</div>' +
            '<div class="feature-box">' +
              '<h3>Telegram Automation</h3>' +
              '<p>Privacy-centric bots and messaging workflows such as @AskAnonymousBot with zero message storage.</p>' +
            '</div>' +
          '</div>' +
        '</section>' +
      '</div>'
    );
  },

  contact() {
    return (
      '<div class="fade">' +
        '<div class="kicker">' + esc(t('connect')) + '</div>' +
        '<h1>' + esc(t('contactH')) + '</h1>' +
        '<p class="lead">' + esc(t('contactDesc')) + '</p>' +
        '<div class="row">' +
          '<a class="btn primary" href="mailto:' + MAIL + '">' + MAIL + '</a>' +
          '<button class="btn" id="copy" type="button">' + esc(t('copy')) + '</button>' +
          '<a class="btn" href="https://github.com/nullwarelabs" target="_blank" rel="noopener">' + esc(t('github')) + ' ↗</a>' +
          '<a class="btn" href="https://play.google.com/store/apps/dev?id=6446780682856756622" target="_blank" rel="noopener">' + esc(t('playStore')) + ' ↗</a>' +
        '</div>' +
        '<form class="contact-form" action="https://formsubmit.co/' + MAIL + '" method="POST">' +
          '<input type="hidden" name="_captcha" value="false">' +
          '<input type="hidden" name="_subject" value="New message from Nullware Labs">' +
          '<input type="hidden" name="_next" value="https://nullwarelabs.github.io/#/contact">' +
          '<input name="name" placeholder="' + esc(t('namePlaceholder')) + '" aria-label="' + esc(t('namePlaceholder')) + '" required maxlength="100">' +
          '<input type="email" name="email" placeholder="' + esc(t('emailPlaceholder')) + '" aria-label="' + esc(t('emailPlaceholder')) + '" required maxlength="150">' +
          '<textarea name="message" placeholder="' + esc(t('messagePlaceholder')) + '" aria-label="' + esc(t('messagePlaceholder')) + '" required maxlength="4000"></textarea>' +
          '<button class="btn primary" type="submit">' + esc(t('sendBtn')) + '</button>' +
        '</form>' +
        '<p class="muted" style="margin-top:14px;max-width:54ch;font-size:.88rem">' + esc(t('mailNote')) + '</p>' +
      '</div>'
    );
  },

  nf() {
    document.title = t('notFound') + ' · Nullware Labs';
    return (
      '<div class="empty fade">' +
        '<h1 style="font-size:2rem;margin:0 auto 10px">' + esc(t('notFound')) + '</h1>' +
        '<p>' + esc(t('notFoundP')) + '</p>' +
        '<a class="btn primary" href="#/">' + esc(t('goHome')) + '</a>' +
      '</div>'
    );
  }
};

function renderProductList() {
  const listEl = el('#list');
  if (!listEl) return;
  const q = state.q.trim().toLowerCase();
  const items = PRODUCTS.filter(
    p =>
      (!state.plat || p.plat === state.plat) &&
      (!state.cat || p.cat === state.cat) &&
      (!q || (p.name + ' ' + p.plat + ' ' + t(p.desc) + ' ' + t(p.cat)).toLowerCase().includes(q))
  );
  items.sort((a, b) => (a[state.sort] || '').localeCompare(b[state.sort] || '') || a.name.localeCompare(b.name));
  listEl.innerHTML = items.length
    ? '<div class="grid">' +
        items.map(p =>
          '<a class="card" href="#/products/' + p.id + '">' +
            '<div class="card-head">' +
              '<div class="row">' +
                '<span class="prod-icon">' + (ICONS[p.id] || ICONS.repo) + '</span>' +
                '<h3>' + esc(p.name) + '</h3>' +
              '</div>' +
              renderVer(p) +
            '</div>' +
            '<p>' + esc(t(p.desc)) + '</p>' +
            renderTags(p) +
            '<div class="card-foot">' +
              '<span class="chip status-released">' + esc(p.plat) + ' · ' + esc(t('available')) + '</span>' +
              '<span class="section-link">' + esc(t('viewDetails')) + ' →</span>' +
            '</div>' +
          '</a>'
        ).join('') +
      '</div>'
    : '<div class="empty"><p>' + esc(t('empty')) + '</p><button class="btn" id="reset" type="button">' + esc(t('reset')) + '</button></div>';

  const r = el('#reset');
  if (r) {
    r.onclick = () => {
      state.q = '';
      state.plat = '';
      state.cat = '';
      route();
    };
  }
}

function route() {
  const parts = (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean);
  const a = parts[0];
  const b = parts[1];
  let html = '';
  let title = 'Nullware Labs · Independent Software Studio';

  if (!a) {
    html = views.home();
  } else if (a === 'products' && !b) {
    html = views.products();
    title = t('productsH') + ' · Nullware Labs';
  } else if (a === 'products' && b) {
    html = views.product(b);
  } else if (a === 'projects' && !b) {
    html = views.projects();
    title = t('projectsH') + ' · Nullware Labs';
  } else if (a === 'changelog' && !b) {
    html = views.changelog();
    title = t('changelogH') + ' · Nullware Labs';
  } else if (a === 'docs') {
    html = views.docs(b);
  } else if (a === 'about' && !b) {
    html = views.about();
    title = t('navAbout') + ' · Nullware Labs';
  } else if (a === 'contact' && !b) {
    html = views.contact();
    title = t('contact') + ' · Nullware Labs';
  } else {
    html = views.nf();
  }

  el('#app').innerHTML = html;
  const customTitleRoute =
    (a === 'products' && b) ||
    a === 'docs' ||
    (a && ['products', 'projects', 'changelog', 'docs', 'about', 'contact'].indexOf(a) === -1);
  if (!customTitleRoute) document.title = title;

  els('#nav a').forEach(l => {
    if (l.getAttribute('href') === '#/' + a) l.setAttribute('aria-current', 'page');
    else l.removeAttribute('aria-current');
  });

  if (a === 'products' && !b) {
    renderProductList();
    el('#f').oninput = e => {
      state.q = e.target.value;
      renderProductList();
    };
    el('#s').onchange = e => {
      state.sort = e.target.value;
      renderProductList();
    };
    els('[data-p]').forEach(btn => {
      btn.onclick = () => {
        state.plat = btn.dataset.p;
        route();
      };
    });
    els('[data-cat]').forEach(btn => {
      btn.onclick = () => {
        state.cat = state.cat === btn.dataset.cat ? '' : btn.dataset.cat;
        route();
      };
    });
  }

  els('[data-pcat]').forEach(btn => {
    btn.onclick = () => {
      state.projCat = btn.dataset.pcat;
      route();
    };
  });

  els('[data-clf]').forEach(btn => {
    btn.onclick = () => {
      state.clFilter = btn.dataset.clf;
      route();
    };
  });

  const docInput = el('#docSearchInput');
  if (docInput) {
    docInput.oninput = e => {
      state.docSearch = e.target.value;
      const q = state.docSearch.trim().toLowerCase();
      const visible = DOCS.filter(
        d => !q || (d.title + ' ' + d.summary + ' ' + d.sections.map(s => s.h + ' ' + s.p).join(' ')).toLowerCase().includes(q)
      );
      el('#docNavLinks').innerHTML = visible.length
        ? visible.map(d =>
            '<a class="docs-nav-link" href="#/docs/' + esc(d.slug) + '"' + (d.slug === (b || DOCS[0].slug) ? ' aria-current="page"' : '') + '>' + esc(d.title) + '</a>'
          ).join('')
        : '<p class="muted" style="padding:8px;font-size:.85rem">' + esc(t('noResults')) + '</p>';
    };
  }

  els('.copy-code').forEach(btn => {
    btn.onclick = async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.code);
        btn.textContent = t('copied');
        setTimeout(() => {
          btn.textContent = t('copy');
        }, 1600);
      } catch (err) {}
    };
  });

  els('[data-s]').forEach(btn => {
    btn.onclick = () => {
      const shot = el('#shot');
      if (shot) {
        shot.src = 'assets/screenshots/screenshot' + btn.dataset.s + '.png';
        shot.alt = t('shot') + ' ' + btn.dataset.s;
      }
      els('[data-s]').forEach(x => x.setAttribute('aria-pressed', String(x === btn)));
    };
  });

  const im = el('#shot');
  if (im) {
    im.onerror = () => {
      let m = el('#shotErr');
      if (!m) {
        m = document.createElement('p');
        m.id = 'shotErr';
        m.className = 'note';
        im.after(m);
      }
      m.textContent = t('shotErr') + ': ' + im.getAttribute('src');
    };
    im.onload = () => {
      const errNode = el('#shotErr');
      if (errNode) errNode.remove();
    };
  }

  const c = el('#copy');
  if (c) {
    c.onclick = async () => {
      try {
        await navigator.clipboard.writeText(MAIL);
        c.textContent = t('copied');
      } catch (err) {
        location.href = 'mailto:' + MAIL;
      }
    };
  }

  el('#nav').classList.remove('open');
  el('#menu').setAttribute('aria-expanded', 'false');
}

function i18nStatic() {
  els('[data-i]').forEach(node => {
    node.textContent = t(node.dataset.i);
  });
  el('#q').placeholder = t('searchPh');
  el('#theme').setAttribute('aria-label', t('theme'));
  el('#lang').setAttribute('aria-label', t('language'));
  document.documentElement.lang = lang === 'ua' ? 'uk' : lang;
}

function setLang(l, persist = true) {
  if (!translations[l]) l = 'en';
  lang = l;
  el('#lang').value = l;
  if (persist) {
    try {
      localStorage.setItem('nullware-lang', l);
    } catch (err) {}
  }
  i18nStatic();
  route();
}

const pal = el('#pal');
function openPal() {
  el('#q').value = '';
  fillPal('');
  pal.showModal();
  el('#q').focus();
}

function fillPal(q) {
  q = q.trim().toLowerCase();
  const entries = []
    .concat(
      NAV_PAGES.map(pair => ({ href: pair[0], title: t(pair[1]), badge: 'Page', search: t(pair[1]) })),
      PRODUCTS.map(p => ({
        href: '#/products/' + p.id,
        title: p.name,
        badge: p.plat,
        search: p.name + ' ' + p.plat + ' ' + t(p.desc)
      })),
      state.projects.map(pr => ({
        href: '#/projects',
        title: pr.name,
        badge: 'Project',
        search: pr.name + ' ' + pr.cat + ' ' + pr.desc
      })),
      DOCS.map(d => ({
        href: '#/docs/' + d.slug,
        title: d.title,
        badge: 'Docs',
        search: d.title + ' ' + d.summary
      })),
      state.changelog.map(cl => ({
        href: '#/changelog',
        title: cl.product + ' ' + cl.ver,
        badge: 'Release',
        search: cl.product + ' ' + cl.ver + ' ' + cl.title
      }))
    )
    .filter(item => !q || item.search.toLowerCase().includes(q));

  el('#res').innerHTML = entries.length
    ? entries.map(item =>
        '<li role="option"><a href="' + esc(item.href) + '"><span>' + esc(item.title) + '</span><span class="chip">' + esc(item.badge) + '</span></a></li>'
      ).join('')
    : '<li class="muted" style="padding:12px">' + esc(t('noResults')) + '</li>';
}

el('#q').oninput = e => fillPal(e.target.value);
el('#q').onkeydown = e => {
  const firstLink = el('#res a');
  if (e.key === 'ArrowDown' && firstLink) {
    e.preventDefault();
    firstLink.focus();
  }
  if (e.key === 'Enter' && firstLink) {
    firstLink.click();
  }
};
el('#res').onkeydown = e => {
  const links = els('#res a');
  const i = links.indexOf(document.activeElement);
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    const nextLink = links[Math.min(i + 1, links.length - 1)];
    if (nextLink) nextLink.focus();
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (i > 0) links[i - 1].focus();
    else el('#q').focus();
  }
};
el('#res').onclick = e => {
  if (e.target.closest('a')) pal.close();
};
const closePalBtn = el('#closePal');
if (closePalBtn) closePalBtn.onclick = () => pal.close();
pal.onclick = e => {
  if (e.target === pal) pal.close();
};
el('#searchBtn').onclick = openPal;

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (pal.open) pal.close();
    else openPal();
  }
});

if (/Mac|iPhone|iPad/.test(navigator.platform)) {
  el('#kbd').textContent = '⌘ K';
}

el('#theme').onclick = () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  try {
    localStorage.setItem('nullware-theme', nextTheme);
  } catch (err) {}
};

el('#menu').onclick = () => {
  const isOpen = el('#nav').classList.toggle('open');
  el('#menu').setAttribute('aria-expanded', String(isOpen));
};

el('#lang').onchange = e => setLang(e.target.value);

addEventListener('hashchange', () => {
  route();
  scrollTo(0, 0);
  el('#app').focus({ preventScroll: true });
});

let savedLang = null;
try {
  savedLang = localStorage.getItem('nullware-lang');
} catch (err) {}
const browserLang = (navigator.language || 'en').split('-')[0];
setLang(savedLang && translations[savedLang] ? savedLang : translations[browserLang] ? browserLang : 'en', false);

syncGitHubData().then(() => {
  route();
});
})();