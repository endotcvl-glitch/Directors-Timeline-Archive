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
            const isMobile = window.matchMedia('(max-width: 599px)').matches;
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
            if (window.matchMedia('(min-width: 600px)').matches) {
                closeMenu();
            }
        });
    });
}

initializeNavigation();
