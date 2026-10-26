(function () {
  'use strict';

  var MAIL = 'nullwarelabs@duck.com';
  var SWIFTSERVICE_URL = 'https://github.com/nullwarelabs/nullwarelabs.github.io/releases/latest/download/SwiftService_Setup.exe';
  var EXOLUTE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.saieesoft.exolute&pcampaignid=web_share';
  var ASKANONYMOUS_URL = 'https://t.me/AskAnonymousBot';

  /* ---------- Icons (lucide, inline SVG) ---------- */
  var ICONS = {
    'send': '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    'copy': '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    'check': '<path d="M20 6 9 17l-5-5"/>',
    'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    'cpu': '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
    'smartphone': '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    'wifi-off': '<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',
    'lock': '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    'heart': '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>'
  };

  function icon(name, cls) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="' + (cls || '') + '">' + (ICONS[name] || '') + '</svg>';
  }

  function replaceIcons(root) {
    var nodes = (root || document).querySelectorAll('i[data-icon]');
    Array.prototype.forEach.call(nodes, function (el) {
      var wrap = document.createElement('span');
      wrap.innerHTML = icon(el.getAttribute('data-icon'), el.getAttribute('class'));
      el.parentNode.replaceChild(wrap.firstChild, el);
    });
  }

  /* ---------- Data ---------- */
  var SERVICES = [
    { number: '01', name: 'Windows Utilities', description: 'Creation of fast, lightweight desktop tools for system cleanup, registry repair, DNS optimization, and performance tuning with zero background bloat.' },
    { number: '02', name: 'Android Applications', description: 'Designing and building native mobile experiences with clean interfaces, real-time data synchronization, and reliable offline-first architecture.' },
    { number: '03', name: 'Telegram Bots', description: 'Custom high-speed bots and automated workflows focused on instant message routing, end-to-end user privacy, and effortless interaction.' },
    { number: '04', name: 'UI / UX & Product Design', description: 'Crafting cohesive, minimal visual identities and sharp interfaces that communicate a clear and memorable presence across desktop and mobile.' },
    { number: '05', name: 'Web & Custom Software', description: 'Engineering modern, responsive web experiences and bespoke single-purpose software tailored to solve real problems with precision.' }
  ];

  var PROJECTS = [
    {
      id: 'swiftservice', number: '01', category: 'Windows Utility', name: 'SwiftService', href: SWIFTSERVICE_URL,
      cardTopTitle: 'Zero-Telemetry Architecture',
      cardTopSub: 'All system cleanup, registry repair, and network tuning runs 100% locally on your machine with no background tracking.',
      cardTopTag: 'WINDOWS 10 / 11',
      cardBottomTitle: 'Core Optimization Suite',
      cardBottomList: ['Deep system cleanup & temporary junk removal', 'Safe registry maintenance & broken key repair', 'Low-latency network & DNS configuration tools', 'Game mode & background performance tuning'],
      mainVisualTitle: 'SWIFTSERVICE ENGINE',
      mainVisualSubtitle: 'Comprehensive Windows optimization suite — clean, repair, and tune your system in one lightweight application.',
      iconName: 'cpu'
    },
    {
      id: 'exolute', number: '02', category: 'Android App', name: 'Exolute Converter', href: EXOLUTE_PLAY_URL,
      cardTopTitle: 'Offline-Ready Mode',
      cardTopSub: 'Automatically caches the latest synchronized exchange rates on your device so you can convert currencies anywhere.',
      cardTopTag: 'GOOGLE PLAY',
      cardBottomTitle: 'Financial Precision',
      cardBottomList: ['Real-time exchange rates across global currencies', 'Interactive historical rate charts & trends', 'Distraction-free, minimal Material interface', 'Instant multi-currency calculation'],
      mainVisualTitle: 'EXOLUTE CONVERTER',
      mainVisualSubtitle: 'Real-time currency converter with historical data, offline mode, and a sharp, minimal interface.',
      iconName: 'smartphone'
    },
    {
      id: 'askanonymousbot', number: '03', category: 'Telegram Bot', name: '@AskAnonymousBot', href: ASKANONYMOUS_URL,
      cardTopTitle: 'End-to-End Anonymity',
      cardTopSub: 'Routes anonymous questions and replies directly inside Telegram without storing message history or sender metadata.',
      cardTopTag: 'TELEGRAM',
      cardBottomTitle: 'Instant Q&A Flow',
      cardBottomList: ['Personal shareable link generated in one tap', 'Zero persistent message content storage', 'Native swipe-to-reply workflow inside Telegram', 'Built-in anti-spam & privacy controls'],
      mainVisualTitle: '@ASKANONYMOUSBOT',
      mainVisualSubtitle: 'Telegram bot for anonymous messaging with end-to-end privacy and no data storage.',
      iconName: 'message-square'
    }
  ];

  var SWIFT_MODULES = ['System Cleanup', 'Registry Repair', 'DNS & Network', 'Game Boost', 'Privacy Shield', 'EN / RU Local'];

  /* ---------- Render: services ---------- */
  function renderServices() {
    var html = SERVICES.map(function (s, i) {
      var borderTop = i === 0 ? 'border-top:1px solid rgba(12,12,12,0.15);' : '';
      return '' +
        '<div data-fade data-delay="' + (i * 0.1) + '" data-y="30">' +
          '<div style="' + borderTop + 'border-bottom:1px solid rgba(12,12,12,0.15);" class="py-8 sm:py-10 md:py-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 md:gap-16 group transition-colors duration-300">' +
            '<span style="font-size:clamp(3rem,10vw,140px)" class="font-black text-[#0C0C0C] leading-none tracking-tight select-none min-w-[110px] sm:min-w-[160px] md:min-w-[210px] transition-transform duration-300 group-hover:translate-x-2">' + s.number + '</span>' +
            '<div class="flex flex-col gap-2 sm:gap-3">' +
              '<h3 style="font-size:clamp(1rem,2.2vw,2.1rem)" class="font-medium uppercase text-[#0C0C0C] tracking-wide">' + s.name + '</h3>' +
              '<p style="font-size:clamp(0.85rem,1.6vw,1.25rem)" class="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60">' + s.description + '</p>' +
            '</div>' +
          '</div>' +
        '</div>';
    }).join('');
    document.getElementById('services-list').innerHTML = html;
  }

  /* ---------- Render: projects ---------- */
  function centerpiece(p) {
    if (p.id === 'swiftservice') {
      return '<div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">' +
        SWIFT_MODULES.map(function (m, i) {
          return '<div class="rounded-3xl bg-black/45 border border-white/10 p-3.5 sm:p-4 backdrop-blur-md">' +
            '<span class="text-[10px] uppercase tracking-widest text-[#B600A8] block mb-1">0' + (i + 1) + '</span>' +
            '<span class="text-xs sm:text-sm font-medium text-white">' + m + '</span></div>';
        }).join('') + '</div>';
    }
    if (p.id === 'exolute') {
      return '<div class="rounded-3xl bg-black/45 border border-white/10 p-5 sm:p-6 backdrop-blur-md space-y-4">' +
        '<div class="flex items-center justify-between text-xs uppercase tracking-widest text-[#D7E2EA]/60">' +
          '<span>Real-Time Exchange</span>' +
          '<span class="flex items-center gap-1.5 text-emerald-400">' + icon('wifi-off', 'w-3.5 h-3.5') + ' Offline Ready</span>' +
        '</div>' +
        '<div class="grid grid-cols-2 gap-3">' +
          '<div class="rounded-2xl bg-white/5 p-3.5 border border-white/10"><span class="text-xs text-[#D7E2EA]/50 block">USD</span><span class="text-xl sm:text-2xl font-bold text-white">$1,000.00</span></div>' +
          '<div class="rounded-2xl bg-[#B600A8]/20 p-3.5 border border-[#B600A8]/50"><span class="text-xs text-[#D7E2EA]/70 block">EUR</span><span class="text-xl sm:text-2xl font-bold text-white">€924.50</span></div>' +
        '</div></div>';
    }
    return '<div class="rounded-3xl bg-black/45 border border-white/10 p-5 sm:p-6 backdrop-blur-md space-y-3">' +
      '<div class="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B600A8]">' + icon('lock', 'w-3.5 h-3.5') + ' Zero Data Storage</div>' +
      '<p class="text-sm sm:text-base text-white font-light">&ldquo;Receive anonymous messages directly in Telegram with full end-to-end privacy.&rdquo;</p>' +
      '<div class="text-xs text-[#D7E2EA]/50 uppercase tracking-wider">t.me/AskAnonymousBot</div></div>';
  }

  function projectCard(p, index, total) {
    var list = p.cardBottomList.map(function (item) {
      return '<li class="flex items-center gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/85 font-light">' +
        '<span class="w-1.5 h-1.5 rounded-full bg-[#B600A8] flex-shrink-0"></span><span class="truncate">' + item + '</span></li>';
    }).join('');

    return '' +
    '<div data-sticky data-index="' + index + '" data-total="' + total + '" class="h-[85vh] sticky top-24 md:top-32 flex items-start justify-center w-full">' +
      '<div class="sticky-card relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-[0_-20px_60px_rgba(0,0,0,0.9)]" style="top:' + (index * 28) + 'px;transform-origin:top center;">' +

        '<div class="flex flex-wrap items-center justify-between gap-4 pb-5 sm:pb-7 px-2 sm:px-4">' +
          '<div class="flex items-center gap-4 sm:gap-8">' +
            '<span style="font-size:clamp(3rem,8vw,110px)" class="font-black text-[#D7E2EA] leading-none tracking-tight select-none">' + p.number + '</span>' +
            '<div class="flex flex-col">' +
              '<span class="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest font-light">' + p.category + '</span>' +
              '<h3 style="font-size:clamp(1.35rem,3vw,2.5rem)" class="text-[#D7E2EA] font-bold uppercase tracking-tight leading-tight">' + p.name + '</h3>' +
            '</div>' +
          '</div>' +
          '<a href="' + p.href + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer whitespace-nowrap select-none"><span>Live Project</span>' + icon('arrow-up-right', 'w-4 h-4') + '</a>' +
        '</div>' +

        '<div class="flex flex-col md:flex-row gap-3 sm:gap-4 w-full">' +
          '<div class="w-full md:w-[40%] flex flex-col gap-3 sm:gap-4">' +
            '<div style="height:clamp(130px,16vw,230px)" class="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-gradient-to-br from-[#181922] to-[#101116] border border-[#D7E2EA]/15 p-6 sm:p-8 flex flex-col justify-between">' +
              '<div class="flex items-center justify-between">' +
                '<span class="text-[11px] sm:text-xs uppercase tracking-widest text-[#B600A8] font-semibold">' + p.cardTopTag + '</span>' +
                icon('shield-check', 'w-4 h-4 text-[#D7E2EA]/50') +
              '</div>' +
              '<div>' +
                '<h4 class="text-base sm:text-xl font-bold uppercase text-[#D7E2EA] leading-tight mb-1">' + p.cardTopTitle + '</h4>' +
                '<p class="text-xs sm:text-sm text-[#D7E2EA]/65 font-light line-clamp-2 leading-snug">' + p.cardTopSub + '</p>' +
              '</div>' +
            '</div>' +
            '<div style="height:clamp(160px,22vw,340px)" class="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#13141B] border border-[#D7E2EA]/15 p-6 sm:p-8 flex flex-col justify-between">' +
              '<span class="text-[11px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/45 font-medium">' + p.cardBottomTitle + '</span>' +
              '<ul class="space-y-1.5 sm:space-y-2.5 my-auto">' + list + '</ul>' +
              '<div class="text-[11px] uppercase tracking-widest text-[#D7E2EA]/40">NULLWARE · BUILT WITH PRECISION</div>' +
            '</div>' +
          '</div>' +

          '<div style="min-height:clamp(280px,39vw,586px)" class="w-full md:w-[60%] overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-gradient-to-br from-[#18011F] via-[#12131A] to-[#260D2E] border border-[#D7E2EA]/20 p-7 sm:p-10 flex flex-col justify-between relative group">' +
            '<div class="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-[#B600A8]/20 blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-125"></div>' +
            '<div class="flex items-center justify-between relative z-10">' +
              '<span class="px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs uppercase tracking-widest text-[#D7E2EA]">' + p.name + '</span>' +
              '<div class="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#D7E2EA]">' + icon(p.iconName, 'w-5 h-5') + '</div>' +
            '</div>' +
            '<div class="my-auto py-6 relative z-10">' + centerpiece(p) + '</div>' +
            '<div class="relative z-10">' +
              '<h4 style="font-size:clamp(1.4rem,2.8vw,2.4rem)" class="font-black uppercase tracking-tight text-white leading-none mb-2">' + p.mainVisualTitle + '</h4>' +
              '<p class="text-xs sm:text-sm md:text-base text-[#D7E2EA]/75 font-light max-w-xl leading-relaxed">' + p.mainVisualSubtitle + '</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function renderProjects() {
    document.getElementById('projects-list').innerHTML = PROJECTS.map(function (p, i) {
      return projectCard(p, i, PROJECTS.length);
    }).join('');
  }

  /* ---------- Fade-in on scroll ---------- */
  function initFade() {
    var els = document.querySelectorAll('[data-fade]');
    var ease = 'cubic-bezier(0.25, 0.1, 0.25, 1)';

    Array.prototype.forEach.call(els, function (el) {
      var x = parseFloat(el.getAttribute('data-x') || '0');
      var y = parseFloat(el.getAttribute('data-y') || '30');
      el.style.opacity = '0';
      el.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    });

    function show(el) {
      var delay = parseFloat(el.getAttribute('data-delay') || '0');
      var dur = parseFloat(el.getAttribute('data-duration') || '0.7');
      el.style.transition = 'opacity ' + dur + 's ' + ease + ' ' + delay + 's, transform ' + dur + 's ' + ease + ' ' + delay + 's';
      el.style.opacity = '1';
      el.style.transform = 'translate(0,0)';
    }

    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(els, show);
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          show(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '50px' });

    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  }

  /* ---------- About text: letters light up on scroll ---------- */
  var charSpans = [];
  var aboutEl = null;

  function initAboutText() {
    aboutEl = document.getElementById('about-text');
    if (!aboutEl) return;

    var text = aboutEl.textContent;
    var total = text.length;
    var words = text.split(' ');
    var counter = 0;
    aboutEl.textContent = '';

    words.forEach(function (word, wi) {
      var w = document.createElement('span');
      w.style.display = 'inline-block';
      w.style.whiteSpace = 'nowrap';

      word.split('').forEach(function (ch) {
        var s = document.createElement('span');
        s.textContent = ch;
        s.style.opacity = '0.2';
        charSpans.push({ el: s, start: counter / total, end: (counter + 1) / total });
        counter++;
        w.appendChild(s);
      });
      aboutEl.appendChild(w);

      if (wi < words.length - 1) {
        var sp = document.createElement('span');
        sp.innerHTML = '&nbsp;';
        sp.style.opacity = '0.2';
        charSpans.push({ el: sp, start: counter / total, end: (counter + 1) / total });
        counter++;
        aboutEl.appendChild(sp);
      }
    });
  }

  function updateAboutText() {
    if (!aboutEl) return;
    var vh = window.innerHeight;
    var rect = aboutEl.getBoundingClientRect();
    // progress 0 when top hits 80% of the viewport, 1 when bottom hits 20%
    var p = (0.8 * vh - rect.top) / (0.6 * vh + rect.height);
    p = Math.min(1, Math.max(0, p));
    charSpans.forEach(function (c) {
      var t = (p - c.start) / (c.end - c.start);
      t = Math.min(1, Math.max(0, t));
      c.el.style.opacity = String(0.2 + 0.8 * t);
    });
  }

  /* ---------- Sticky project cards: scale down while stacking ---------- */
  function updateSticky() {
    var wraps = document.querySelectorAll('[data-sticky]');
    Array.prototype.forEach.call(wraps, function (wrap) {
      var index = parseInt(wrap.getAttribute('data-index'), 10);
      var total = parseInt(wrap.getAttribute('data-total'), 10);
      var rect = wrap.getBoundingClientRect();
      var p = Math.min(1, Math.max(0, -rect.top / rect.height));
      var target = 1 - (total - 1 - index) * 0.03;
      var scale = 1 + (target - 1) * p;
      wrap.querySelector('.sticky-card').style.transform = 'scale(' + scale + ')';
    });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      updateAboutText();
      updateSticky();
      ticking = false;
    });
  }

  /* ---------- Navigation + contact modal ---------- */
  function initNav() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-scroll]'), function (btn) {
      btn.addEventListener('click', function () {
        var el = document.getElementById(btn.getAttribute('data-scroll'));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  function initModal() {
    var modal = document.getElementById('contact-modal');

    function open() {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    Array.prototype.forEach.call(document.querySelectorAll('[data-open-contact]'), function (btn) {
      btn.addEventListener('click', open);
    });
    document.getElementById('modal-close').addEventListener('click', close);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    var idle = document.getElementById('copy-idle');
    var done = document.getElementById('copy-done');
    document.getElementById('copy-email').addEventListener('click', function () {
      function showCopied() {
        idle.classList.add('hidden');
        done.classList.remove('hidden');
        done.classList.add('inline-flex');
        setTimeout(function () {
          done.classList.add('hidden');
          done.classList.remove('inline-flex');
          idle.classList.remove('hidden');
        }, 2000);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(MAIL).then(showCopied, function () {
          window.location.href = 'mailto:' + MAIL;
        });
      } else {
        window.location.href = 'mailto:' + MAIL;
      }
    });
  }

  function initForm() {
    var form = document.getElementById('contact-form');
    var status = document.getElementById('form-status');
    var btn = document.getElementById('form-submit');
    if (!form) return;

    function setStatus(text, ok) {
      status.textContent = text;
      status.className = 'text-sm font-light ' + (ok ? 'text-emerald-400' : 'text-red-400');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      btn.disabled = true;
      btn.textContent = 'Sending...';
      status.className = 'hidden';

      fetch('https://formsubmit.co/ajax/' + MAIL, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
        .then(function (r) {
          return r.json().then(function (j) { return { ok: r.ok, data: j }; });
        })
        .then(function (res) {
          var success = res.ok && (res.data.success === true || res.data.success === 'true');
          if (!success) throw new Error('failed');
          form.reset();
          setStatus('Message sent. Thank you!', true);
        })
        .catch(function () {
          setStatus('Could not send the message. Please email ' + MAIL + ' directly.', false);
        })
        .then(function () {
          btn.disabled = false;
          btn.textContent = 'Send Message';
        });
    });
  }

  /* ---------- Init ---------- */
  renderServices();
  renderProjects();
  replaceIcons(document);
  initAboutText();
  initFade();
  initNav();
  initModal();
  initForm();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();