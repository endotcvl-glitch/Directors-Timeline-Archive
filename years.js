const YEAR_START = 2000;
const YEAR_END = 2026;

const archiveData = window.directorsTimelineData || {};
const directorsInfoById = archiveData.directorsInfo || {};
const filmsDataByYear = archiveData.filmsData || [];
const eventsDataByYear = archiveData.eventsData || [];

const yearSummaries = {
    2000: 'デジタル撮影・編集が本格普及し始める。『グラディエーター』が大ヒットし歴史大作が復活。',
    2001: '『ロード・オブ・ザ・リング』シリーズ開始。夢のような物語と不安な現実が、。',
    2002: 'ヒーロー、SF、犯罪劇が大きく動き出した年。娯楽映画の勢いの中に、作家それぞれの色がはっきり見えてきます。',
    2003: 'マトリックスシリーズ完結。2作連続上映が大きな話題となりました。',
    2004: 'ホラー、青春、冒険、音楽映画まで、ジャンルの幅がぐっと広がった年。軽やかさの中にも、時代のざわめきが残ります。',
    2005: '人気シリーズの節目と、新しいヒーロー像の始まりが重なった年。大作映画が、少しずつ現代的な重さをまといはじめます。',
    2006: '犯罪劇やミステリー、家族向けの冒険まで、緊張と楽しさが同居する年。暗さと軽さのバランスが面白く見えてきます。',
    2007: '鋭い犯罪映画や作家性の強い作品が目立つ年。スマートフォンや配信の気配もあり、映画の見られ方も少し変わりはじめます。',
    2008: 'ヒーロー映画とシリーズ映画が、現代的な重さを持ちはじめた年。娯楽映画のスケールと作家性が近づいていきます。',
    2009: '3D映画の新しい驚きと、少しひねりのある作家映画が並んだ年。映画館で観る体験の大きさが、あらためて意識されます。',
    2010: '夢、記憶、過去へのまなざしが目立つ年。大きなジャンル映画の中にも、心の深いところへ向かう流れが広がります。',
    2011: '映画そのものへの愛や、少年時代の記憶に触れる作品が多い年。大きな出来事のあとで、物語の温度が少し優しく感じられます。',
    2012: 'ヒーロー映画が大きな集合体になり、歴史や神話も新しい形で語られた年。シリーズと作家性が近い距離で動いています。',
    2013: '孤独な人物や、居場所を探す物語が印象に残る年。配信時代の入り口で、映画とシリーズの境目も少しずつ揺れています。',
    2014: '宇宙、家族、音楽、ヒーローがそれぞれの熱量で広がった年。大作の中にも、小さな感情の揺れがしっかり残ります。',
    2015: '砂漠、宇宙、リング、銀河へと、映画が大きく遠くへ向かった年。懐かしいシリーズも、新しい顔で戻ってきます。',
    2016: '言葉、信仰、音楽、閉ざされた空間など、静かな緊張を持つ作品が並ぶ年。派手さよりも、余韻の強さが印象に残ります。',
    2017: '過去を見つめ直す作品と、新しい才能の登場が重なった年。映画の中の声や視点が、少し広がって見えてきます。',
    2018: 'ヒーロー映画が大きな節目を迎えつつ、ホラーやアニメーションも強い個性を見せた年。劇場と配信の距離も近づいていきます。',
    2019: '終わりゆく時代へのまなざしと、新しいヒットの形が並んだ年。大きな物語の完結と、個人的な物語の強さが同居しています。',
    2020: '世界が止まったような空気の中で、時間や記憶、怒りを扱う作品が目立つ年。映画の届き方も、大きく変わりはじめます。',
    2021: '劇場と配信のあいだで、映画の居場所を探していた年。大作も小さな物語も、再び観客へ届く道を探っています。',
    2022: '大きな続編と個人的な記憶の映画が並んだ年。シリーズ映画の迫力と、作り手自身の物語が近くに見えてきます。',
    2023: '大作映画と作家映画が、どちらも強く話題になった年。明るさ、怒り、孤独、歴史への視線が、同じ年の中で響き合っています。',
    2024: '砂の惑星や荒野、過去の名作の続編が目立つ年。見慣れた世界をもう一度開き直すような作品が並びます。',
    2025: '劇場で観る大きな映画と、配信で届く作品が自然に並ぶ年。シリーズの再出発や、作家たちの新しい挑戦が見えてきます。',
    2026: '大きな物語を、作家たちがそれぞれの方法で語り直していく年。神話、SF、犯罪劇が、次の映画体験へ向かっています。'
};

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

function renderYearSummary() {
    const summary = document.getElementById('selected-year-summary');
    const text = yearSummaries[selectedYear] || '';

    if (!summary) {
        return;
    }

    summary.textContent = text;
    summary.hidden = !text;
}

function renderYearView() {
    const yearTitle = document.getElementById('selected-year-title');
    const films = filmsDataByYear
        .filter(work => work.year === selectedYear)
        .sort((a, b) => getDirectorName(a.type).localeCompare(getDirectorName(b.type), 'ja'));
    const events = eventsDataByYear.filter(event => event.year === selectedYear);

    yearTitle.textContent = String(selectedYear);
    renderYearSummary();
    renderYearPicker();
    renderEvents(events);
    renderFilms(films);
}

renderYearView();
