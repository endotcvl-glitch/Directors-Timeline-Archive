function getActiveNavigationKey() {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const fileName = pathParts[pathParts.length - 1] || 'index.html';
    const isNotesPage = pathParts.includes('notes');

    if (isNotesPage) return 'notes';
    if (fileName === 'index.html') return 'home';
    if (fileName === 'directors.html') return 'directors';
    if (fileName === 'years.html') return 'years';
    if (fileName === 'today.html') return 'today';

    return '';
}

function renderSharedHeaders() {
    const activeKey = getActiveNavigationKey();

    document.querySelectorAll('[data-site-header]').forEach(shell => {
        const root = shell.dataset.root || '';
        const activeClass = key => key === activeKey ? ' class="is-active" aria-current="page"' : '';

        shell.innerHTML = `
            <a href="${root}index.html" class="site-title site-title-link" aria-label="Directors' Timeline Archive Home">
                <img src="${root}assets/header_logo.svg" alt="" class="site-title-logo">
            </a>
            <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="メニューを開く">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav class="header-nav" id="primary-navigation" aria-label="Primary navigation">
                <a href="${root}index.html"${activeClass('home')}>ホーム</a>
                <a href="${root}directors.html"${activeClass('directors')}>映画監督から選ぶ</a>
                <a href="${root}years.html"${activeClass('years')}>年代から探す</a>
                <a href="${root}today.html"${activeClass('today')}>今日は何の日</a>
                <a href="${root}index.html#comparison-themes">テーマで比較</a>
                <a href="${root}notes/index.html"${activeClass('notes')}>Editor's Notes</a>
                <span class="mobile-nav-secondary" aria-label="Secondary navigation">
                    <a href="${root}about.html">このサイトについて</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdN7yUjTtm66DHwKF5QB96z2W-cMja4MveVtbeCkA46DR5BCQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">お問合せ</a>
                    <a href="https://x.com/DTAarchive" class="social-link x-link" target="_blank" rel="noopener noreferrer" aria-label="X @DTAarchive">
                        <svg class="x-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153Zm-1.293 19.49h2.039L6.486 3.24H4.298l13.31 17.403Z"></path>
                        </svg>
                    </a>
                </span>
            </nav>
        `;
    });
}

function initializeNavigation() {
    const headerShells = document.querySelectorAll('.header-shell');
    const menuCloseDelay = 360;

    headerShells.forEach(shell => {
        const toggle = shell.querySelector('.nav-toggle');
        const nav = shell.querySelector('.header-nav');

        if (!toggle || !nav) {
            return;
        }

        function closeMenu() {
            shell.classList.remove('is-nav-open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'メニューを開く');
        }

        function openMenu() {
            shell.classList.add('is-nav-open');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.setAttribute('aria-label', 'メニューを閉じる');
        }

        toggle.addEventListener('click', () => {
            if (shell.classList.contains('is-nav-open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        function shouldDelayNavigation(event, link) {
            const isMenuOpen = shell.classList.contains('is-nav-open');
            const isMobile = window.matchMedia('(max-width: 1100px)').matches;
            const opensNewContext = link.target && link.target !== '_self';
            const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;

            return isMenuOpen && isMobile && !opensNewContext && !isModifiedClick && link.href;
        }

        nav.addEventListener('click', event => {
            const link = event.target.closest('a');

            if (link) {
                if (shouldDelayNavigation(event, link)) {
                    event.preventDefault();
                    closeMenu();

                    window.setTimeout(() => {
                        window.location.href = link.href;
                    }, menuCloseDelay);

                    return;
                }

                closeMenu();
            }
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        });

        window.addEventListener('resize', () => {
            if (window.matchMedia('(min-width: 1101px)').matches) {
                closeMenu();
            }
        });
    });
}

renderSharedHeaders();
initializeNavigation();
