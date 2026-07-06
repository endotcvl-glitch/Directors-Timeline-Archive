function initializeNavigation() {
    const headerShells = document.querySelectorAll('.header-shell');

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

        nav.addEventListener('click', event => {
            if (event.target.closest('a')) {
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
