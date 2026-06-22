const YEAR_START = 2000;
const YEAR_END = 2026;

const archiveData = window.directorsTimelineData || {};
const directorsInfoById = archiveData.directorsInfo || {};
const filmsDataByYear = archiveData.filmsData || [];
const eventsDataByYear = archiveData.eventsData || [];

const yearSummaries = {
    2000: '映画監督リドリー・スコットの『グラディエーター』が世界的な大ヒットを記録。映画監督クリストファー・ノーランの『メメント』が公開。時間というテーマがここから始まりました。',
    2001: '米同時多発テロ（9.11）で海外スターの来日などに影響。『ハリー・ポッター』『ロード・オブ・ザ・リング』など長編ファンタジー大作が公開されました。',
    2002: '映画監督ジョージ・ルーカスの『スター・ウォーズ エピソード2/クローンの攻撃』が、全編デジタル撮影によるメジャー大作として公開されました。',
    2003: '『マトリックス』の完結に至る続編２作『マトリックス リローデッド』『マトリックス レザレクションズ』が連続公開され話題となりました。',
    2004: '前年公開のロード・オブ・ザ・リング／王の帰還』が第76回アカデミー賞を席巻しました。',
    2005: '映画監督スティーヴン・スピルバーグの2作品公開。映画監督クリストファー・ノーランの『バットマン ビギンズ』が公開され新しいヒーロー映画の形を提示しました。',
    2006: '『パイレーツ・オブ・カリビアン/デッドマンズ・チェスト』が全世界で10億ドル以上の興行収入の大ヒット。ジョージ・ルーカスが映画界からの引退表明をし話題となりました。',
    2007: '全米脚本家組合による大規模なストライキが決行され来年以降の作品に影響を及ぼします。',
    2008: '『ダークナイト』がヒーロー映画の評価を一変させる中、『アイアンマン』が始動しマーベル・シネマティック・ユニバース（MCU)がスタートします。',
    2009: '『アバター』公開。3D映画とデジタル上映が急速に普及しました。世界歴代1位の興行収入を記録しています。',
    2010: '前年公開の『アバター』が引き続き記録的な大ヒットを継続し、映画館のデジタル化が世界規模で急加速しました。',
    2011: '『ハリー・ポッター』シリーズ完結。『猿の惑星』のリブート作『猿の惑星: 創世記』が成功し現在に至るまで続編が作り続けられている。',
    2012: '『アベンジャーズ』公開。映画監督サム・メンデスの『007 スカイフォール』がシリーズ50周年記念作品として全世界で大ヒットを記録しました。',
    2013: '映画監督マーティン・スコセッシとレオナルド・ディカプリオの5度目のタッグ『ウルフ・オブ・ウォールストリート』が公開。熱量の高さと狂気が話題に。',
    2014: 'クリストファー・ノーランの壮大なSF巨編『インターステラー』が公開されたほか、『アナと雪の女王』が大ヒット。',
    2015: '映画監督ジョージ・ミラーの『マッドマックス 怒りのデス・ロード』公開。翌年の第88回アカデミー賞で6冠を達成します。',
    2016: '映画監督アレックス・ガーランドの初長編作品となるSFスリラー『エクス・マキナ』が高く評価されました。',
    2017: '#MeToo運動が映画業界にも大きな影響を与えはじめます。多様なジャンルの大作映画が多く、その中でも『ラ・ラ・ランド』が新鮮で人気を博しました。',
    2018: '『ブラックパンサー』が社会現象となる。エンターテインメントと社会性の両立が注目されていきます。',
    2019: '『アベンジャーズ／エンドゲーム』公開されMCUへの熱気はここで到達点を迎えました。',
    2020: 'COVID-19により劇場公開が大規模停止。配信サービスへの移行が急速に進み始めた年です。',
    2021: '引き続きCOVID-19の影響により配信の共存が模索される。映画鑑賞スタイルの変化が定着し始めます。',
    2022: '36年ぶりの続編『トップガン マーヴェリック』を世界的大ヒット。',
    2023: 'ハリウッドで脚本家・俳優ストライキが発生。『バービー』と『オッペンハイマー』が社会現象となる。',
    2024: '映画監督アレックス・ガーランドの『シビル・ウォー アメリカ最後の日』公開。現代アメリカの分断をリアルに描き話題に。日本では年間映画興行収入ランキングから初めて実写洋画がランキングされませんでした。',
    2025: 'マーベルの大作が伸び悩み再構成が進む中、映画監督ジェームズ・ガンの新生『スーパーマン』が大ヒットを記録。',
    2026: '『プロジェクトヘイルメアリー』大ヒット。そのほかにもSF大作が多く公開。'
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
