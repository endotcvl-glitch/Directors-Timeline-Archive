const YEAR_START = 2000;
const YEAR_END = 2026;

const archiveData = window.directorsTimelineData || {};
const directorsInfoById = archiveData.directorsInfo || {};
const filmsDataByYear = archiveData.filmsData || [];
const eventsDataByYear = archiveData.eventsData || [];

let selectedYear = getInitialYear();

function getInitialYear() {
    const params = new URLSearchParams(window.location.search);
    const year = Number(params.get('year'));

    if (Number.isInteger(year) && year >= YEAR_START && year <= YEAR_END) {
        return year;
    }

    return 2008;
}

function updateYearParam(year) {
    const url = new URL(window.location.href);
    url.searchParams.set('year', String(year));
    window.history.replaceState({}, '', url);
}

function getDirectorName(id) {
    return directorsInfoById[id]?.nameJa || id;
}

function getWorkMedium(work) {
    return work.medium || 'Film';
}

function renderYearPicker() {
    const picker = document.getElementById('year-picker');
    picker.innerHTML = '';

    for (let year = YEAR_START; year <= YEAR_END; year += 1) {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = String(year);
        button.className = year === selectedYear ? 'active' : '';
        button.setAttribute('aria-pressed', year === selectedYear ? 'true' : 'false');
        button.addEventListener('click', () => {
            selectedYear = year;
            updateYearParam(year);
            renderYearView();
        });
        picker.appendChild(button);
    }
}

function renderEvents(events) {
    const container = document.getElementById('year-events');

    if (events.length === 0) {
        container.innerHTML = '<p class="year-empty">No events recorded.</p>';
        return;
    }

    container.innerHTML = events.map(event => `
        <article class="year-event-item">
            <span>${event.category}</span>
            <p>${event.title}</p>
        </article>
    `).join('');
}

function renderFilms(films) {
    const container = document.getElementById('year-films');

    if (films.length === 0) {
        container.innerHTML = '<p class="year-empty">No films recorded.</p>';
        return;
    }

    container.innerHTML = films.map(work => `
        <a class="year-film-item" href="timeline.html?d1=${work.type}">
            <div>
                <h4>${work.title}</h4>
                <p>${getDirectorName(work.type)}</p>
            </div>
            <span>${getWorkMedium(work)}</span>
        </a>
    `).join('');
}

function renderYearView() {
    const yearTitle = document.getElementById('selected-year-title');
    const films = filmsDataByYear
        .filter(work => work.year === selectedYear)
        .sort((a, b) => getDirectorName(a.type).localeCompare(getDirectorName(b.type), 'ja'));
    const events = eventsDataByYear.filter(event => event.year === selectedYear);

    yearTitle.textContent = String(selectedYear);
    renderYearPicker();
    renderEvents(events);
    renderFilms(films);
}

renderYearView();
