(function () {
    const EVENTS_URL = 'data/events.json';
    const SITE_URL = 'https://directors-timeline-archive.com';
    const TYPE_LABELS = {
        movie_release: '公開日',
        director_birthday: '誕生日',
        director_deathday: '命日',
        award: 'Award',
        film_history: 'Film History',
        site_update: 'Site Update'
    };

    const todayDateEl = document.getElementById('today-date');
    const eventListEl = document.getElementById('today-events');
    const emptyEl = document.getElementById('today-empty');
    const errorEl = document.getElementById('today-error');

    initTodayPage();

    async function initTodayPage() {
        const selectedDate = getSelectedDate();
        todayDateEl.textContent = formatDisplayDate(selectedDate);

        try {
            const response = await fetch(EVENTS_URL);

            if (!response.ok) {
                throw new Error(`Failed to load events: ${response.status}`);
            }

            const events = await response.json();
            const matchedEvents = events
                .filter(event => event.date === selectedDate.key)
                .sort((a, b) => a.year - b.year);

            renderEvents(matchedEvents);
        } catch (error) {
            console.error(error);
            errorEl.hidden = false;
        }
    }

    function getSelectedDate() {
        const params = new URLSearchParams(window.location.search);
        const dateParam = params.get('date');
        const datePattern = /^\d{2}-\d{2}$/;

        if (datePattern.test(dateParam || '')) {
            const [month, day] = dateParam.split('-').map(Number);
            return { key: dateParam, month, day };
        }

        const now = new Date();
        const month = now.getMonth() + 1;
        const day = now.getDate();

        return {
            key: `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
            month,
            day
        };
    }

    function formatDisplayDate(date) {
        return `${date.month}月${date.day}日`;
    }

    function renderEvents(events) {
        eventListEl.innerHTML = '';

        if (events.length === 0) {
            emptyEl.hidden = false;
            return;
        }

        emptyEl.hidden = true;

        events.forEach(event => {
            eventListEl.appendChild(createEventCard(event));
        });
    }

    function createEventCard(event) {
        const article = document.createElement('article');
        article.className = 'today-event-card';

        const postText = createPostText(event);
        const links = Array.isArray(event.links) ? event.links : [];

        article.innerHTML = `
            <div class="today-event-main">
                <div class="today-event-meta">
                    <span class="today-type-label">${TYPE_LABELS[event.type] || event.type}</span>
                    <span>${event.year}</span>
                    ${event.country ? `<span>${event.country}</span>` : ''}
                </div>
                <h2>${escapeHtml(event.title)}</h2>
                <p>${escapeHtml(event.description || '')}</p>
                ${links.length > 0 ? `
                    <div class="today-related-links">
                        ${links.map(link => `<a href="${escapeHtml(link.url)}">${escapeHtml(link.label)}</a>`).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="today-post-box">
                <div class="today-post-header">
                    <h3>X投稿文</h3>
                    <button type="button" class="copy-post-button">Copy post</button>
                </div>
                <textarea readonly rows="8">${escapeHtml(postText)}</textarea>
                <p class="copy-status" aria-live="polite"></p>
            </div>
        `;

        const button = article.querySelector('.copy-post-button');
        const textarea = article.querySelector('textarea');
        const status = article.querySelector('.copy-status');

        button.addEventListener('click', () => copyPost(textarea.value, status));

        return article;
    }

    function createPostText(event) {
        const firstLine = event.type === 'movie_release'
            ? `今日は${event.title}の日。`
            : `今日は${event.title}。`;

        return [
            firstLine,
            '',
            event.description || '',
            '',
            "Directors' Timeline Archive",
            SITE_URL,
            '',
            '#映画 #映画監督 #Cinema #Film'
        ].join('\n');
    }

    async function copyPost(text, statusEl) {
        try {
            await navigator.clipboard.writeText(text);
            statusEl.textContent = 'コピーしました';
        } catch (error) {
            console.error(error);
            statusEl.textContent = 'コピーできませんでした。テキストを選択してコピーしてください。';
        }
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
})();
