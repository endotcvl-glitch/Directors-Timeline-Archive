const directors = [
    { category: '1950 -', items: [
        { id: 'kubrick', surname: 'KUBRICK', nameJa: 'スタンリー・キューブリック', nameEn: 'STANLEY KUBRICK', keywords: '完璧主義 / 徹底した構図 / 哲学的' }
    ]},
    { category: '1960 -', items: [
        { id: 'scorsese', surname: 'SCORSESE', nameJa: 'マーティン・スコセッシ', nameEn: 'MARTIN SCORSESE', keywords: '犯罪と贖罪 / アメリカ社会 / 人間の情熱' }
    ]},
    { category: '1970 -', items: [
        { id: 'lucas', surname: 'LUCAS', nameJa: 'ジョージ・ルーカス', nameEn: 'GEORGE LUCAS', keywords: 'スペースオペラ / デジタル革命 / 冒険の神話' },
        { id: 'spielberg', surname: 'SPIELBERG', nameJa: 'スティーヴン・スピルバーグ', nameEn: 'STEVEN SPIELBERG', keywords: '驚異の物語 / 圧倒的映画術 / ヒューマニズム' },
        { id: 'lynch', surname: 'LYNCH', nameJa: 'デヴィッド・リンチ', nameEn: 'DAVID LYNCH', keywords: '悪夢と不条理 / サウンドデザイン / 超現実主義' },
        { id: 'miller', surname: 'MILLER', nameJa: 'ジョージ・ミラー', nameEn: 'GEORGE MILLER', keywords: '身体性アクション / 神話的世界観 / 寓話的表現' },
        { id: 'scott', surname: 'SCOTT', nameJa: 'リドリー・スコット', nameEn: 'RIDLEY SCOTT', keywords: '重厚な世界構築 / 光と影の造形 / 歴史とSF' },
        { id: 'zemeckis', surname: 'ZEMECKIS', nameJa: 'ロバート・ゼメキス', nameEn: 'ROBERT ZEMECKIS', keywords: '技術革新 / ポップな物語 / 時間と記憶' }
    ]},
    { category: '1980 -', items: [
        { id: 'bigelow', surname: 'BIGELOW', nameJa: 'キャスリン・ビグロー', nameEn: 'KATHRYN BIGELOW', keywords: '緊迫のリアリズム / 極限の暴力 / 骨太な演出' },
        { id: 'coen', surname: 'COENS', nameJa: 'ジョエル＆イーサン・コーエン', nameEn: 'JOEL & ETHAN COEN', keywords: 'ブラックユーモア / 皮肉な運命 / 緻密な脚本' },
        { id: 'burton', surname: 'BURTON', nameJa: 'ティム・バートン', nameEn: 'TIM BURTON', keywords: 'ゴシック幻想 / 異形の愛 / ダークファンタジー' },
        { id: 'raimi', surname: 'RAIMI', nameJa: 'サム・ライミ', nameEn: 'SAM RAIMI', keywords: 'スピード感のある演出 / コミック的映像 / ホラーとユーモア' }
    ]},
    { category: '1990 -', items: [
        { id: 'fincher', surname: 'FINCHER', nameJa: 'デイヴィッド・フィンチャー', nameEn: 'DAVID FINCHER', keywords: '精密演出 / 執着と狂気 / 冷徹な世界観' },
        { id: 'tarantino', surname: 'TARANTINO', nameJa: 'クエンティン・タランティーノ', nameEn: 'QUENTIN TARANTINO', keywords: '饒舌な会話劇 / 映画へのオマージュ / 鮮烈な暴力' },
        { id: 'wright', surname: 'WRIGHT', nameJa: 'エドガー・ライト', nameEn: 'EDGAR WRIGHT', keywords: '音楽との同期 / 高速カット割 / 究極のジャンル愛' },
        { id: 'pta', surname: 'PTA', nameJa: 'ポール・トーマス・アンダーソン', nameEn: 'PAUL THOMAS ANDERSON', keywords: '重厚な人間ドラマ / 狂気と愛 / 圧倒的演出力' },
        { id: 'anderson', surname: 'ANDERSON', nameJa: 'ウェス・アンダーソン', nameEn: 'WES ANDERSON', keywords: 'シンメトリー構図 / 色彩設計 / 独自世界観' },
        { id: 'nolan', surname: 'NOLAN', nameJa: 'クリストファー・ノーラン', nameEn: 'CHRISTOPHER NOLAN', keywords: '時間構造/ 実写至上主義 / 究極の没入体験' },
        { id: 'reeves', surname: 'REEVES', nameJa: 'マット・リーヴス', nameEn: 'MATT REEVES', keywords: '感情的スケール / ダークな再解釈 / 緊張の演出' },
        { id: 'villeneuve', surname: 'VILLENEUVE', nameJa: 'ドゥニ・ヴィルヌーヴ', nameEn: 'DENIS VILLENEUVE', keywords: '壮大な静謐 / 映像美の極致 / 深遠なテーマ' },
        { id: 'wachowskis', surname: 'WACHOWSKIS', nameJa: 'ラナ＆リリー・ウォシャウスキー', nameEn: 'THE WACHOWSKIS', keywords: '革新的ビジュアル / 仮想現実 / 運命と解放' }
    ]},
    { category: '2000 -', items: [
        { id: 'favreau', surname: 'FAVREAU', nameJa: 'ジョン・ファヴロー', nameEn: 'JON FAVREAU', keywords: 'ポップな娯楽性 / MCUの起点 / 実写とCGの融合' },
        { id: 'gunn', surname: 'GUNN', nameJa: 'ジェームズ・ガン', nameEn: 'JAMES GUNN', keywords: '異端のチーム劇 / 音楽とユーモア / 感情の爆発' },
        { id: 'abrams', surname: 'ABRAMS', nameJa: 'J.J.エイブラムス', nameEn: 'J.J. ABRAMS', keywords: 'ミステリーボックス哲学 / 臨場感演出 /　過去作へのリスペクトと再構築' },
        { id: 'whedon', surname: 'WHEDON', nameJa: 'ジョス・ウェドン', nameEn: 'JOSS WHEDON', keywords: 'アンサンブル劇 / 軽快な会話 / ヒーロー群像' },
        { id: 'waititi', surname: 'WAITITI', nameJa: 'タイカ・ワイティティ', nameEn: 'TAIKA WAITITI', keywords: '脱力ユーモア / 孤独 / カラフル' },
        { id: 'lanthimos', surname: 'LANTHIMOS', nameJa: 'ヨルゴス・ランティモス', nameEn: 'YORGOS LANTHIMOS', keywords: '不条理な寓話 / 冷たいユーモア / 身体と制度' },
        { id: 'russo', surname: 'RUSSOS', nameJa: 'アンソニー＆ジョー・ルッソ', nameEn: 'ANTHONY & JOE RUSSO', keywords: '大規模群像劇 / 緊迫のアクション / MCUの集大成' },
        { id: 'levy', surname: 'LEVY', nameJa: 'ショーン・レヴィ', nameEn: 'SHAWN LEVY', keywords: 'ファミリー娯楽 / 軽快なテンポ / ポップな冒険' },
        { id: 'wan', surname: 'WAN', nameJa: 'ジェームズ・ワン', nameEn: 'JAMES WAN', keywords: 'ホラーの新帝王 / 恐怖の視覚化 / スリラーの極致' },
        { id: 'chazelle', surname: 'CHAZELLE', nameJa: 'デイミアン・チャゼル', nameEn: 'DAMIEN CHAZELLE', keywords: '音楽と情熱 / 完璧なリズム / 夢と現実の交差' }
    ]},
    { category: '2010 -', items: [
        { id: 'gerwig', surname: 'GERWIG', nameJa: 'グレタ・ガーウィグ', nameEn: 'GRETA GERWIG', keywords: '現代女性の肖像 / 知的なユーモア / 瑞々しい感性' },
        { id: 'peele', surname: 'PEELE', nameJa: 'ジョーダン・ピール', nameEn: 'JORDAN PEELE', keywords: '社会派ホラー / 緻密な伏線 / 異質な恐怖' },
        { id: 'coogler', surname: 'COOGLER', nameJa: 'ライアン・クーグラー', nameEn: 'RYAN COOGLER', keywords: 'アイデンティティ / 魂の継承 / 圧倒的躍動感' },
        { id: 'dacosta', surname: 'DACOSTA', nameJa: 'ニア・ダコスタ', nameEn: 'NIA DACOSTA', keywords: '社会的寓話 / ジャンル横断 / 鋭い視点' },
        { id: 'zhao', surname: 'ZHAO', nameJa: 'クロエ・ジャオ', nameEn: 'CHLOÉ ZHAO', keywords: '自然光の詩情 / 周縁の人生 / 静かなリアリズム' },
        { id: 'watts', surname: 'WATTS', nameJa: 'ジョン・ワッツ', nameEn: 'JON WATTS', keywords: '青春ヒーロー / 軽やかな成長譚 / MCUの日常感' },
        { id: 'aster', surname: 'ASTER', nameJa: 'アリ・アスター', nameEn: 'ARI ASTER', keywords: '家族の崩壊 / 不安と喪失 / 現代神話' }
    ]},
    { category: '2020 -', items: [
        { id: 'fennell', surname: 'FENNELL', nameJa: 'エメラルド・フェネル', nameEn: 'EMERALD FENNELL', keywords: '復讐と欲望 / ブラックユーモア / 階級と視線' }
    ]}
];

const comparisonThemes = [
    {
        title: '時間と記憶',
        description: '時間構造とスケールの扱いから、現代SFの広がりを見比べる。',
        directorIds: ['nolan', 'villeneuve']
    },
    {
        title: 'ブロックバスターの原点',
        description: '70年代以降の娯楽映画を大きく変えたふたりの歩みを見る。',
        directorIds: ['spielberg', 'lucas']
    },
    {
        title: '幻想と異形',
        description: '夢、悪夢、異形の世界をどう映画にしてきたかをたどる。',
        directorIds: ['lynch', 'burton']
    },
    {
        title: 'ヒーロー映画の変化',
        description: '現代のヒーロー映画が、作家性とシリーズ展開の間でどう変化したかを見る。',
        directorIds: ['raimi', 'gunn']
    },
    {
        title: '多作の巨匠たち',
        description: '長いキャリアの中で膨大な作品を生み出してきたふたりの密度を見比べる。',
        directorIds: ['spielberg', 'scorsese']
    },
    {
        title: '現代ホラーの恐怖設計',
        description: 'ジャンル映画の恐怖と、現代的な不安の描き方を比較する。',
        directorIds: ['wan', 'aster']
    },
    {
        title: 'チームヒーローの時代',
        description: '大規模なチーム劇と、はみ出し者たちのヒーロー像を見比べる。',
        directorIds: ['russo', 'gunn']
    }
];

let selectedDirectors = [];
let searchQuery = '';

function normalizeText(value) {
    return String(value || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

function matchesSearch(dir) {
    const query = normalizeText(searchQuery.trim());

    if (!query) {
        return true;
    }

    return [
        dir.nameEn,
        dir.nameJa,
        dir.keywords
    ].some(value => normalizeText(value).includes(query));
}

function hasExactMatch() {
    const query = searchQuery.trim();

    if (!query) {
        return true;
    }

    return directors.some(group => group.items.some(matchesSearch));
}

function getAllDirectors() {
    return directors.flatMap(group => group.items);
}

function getDirectorById(id) {
    return getAllDirectors().find(dir => dir.id === id);
}

function renderComparisonThemes() {
    const container = document.getElementById('theme-list');

    if (!container) {
        return;
    }

    container.innerHTML = '';

    comparisonThemes.forEach(theme => {
        const themeDirectors = theme.directorIds.map(getDirectorById).filter(Boolean);

        if (themeDirectors.length !== 2) {
            return;
        }

        const link = document.createElement('a');
        link.className = 'theme-item';
        link.href = `timeline.html?d1=${theme.directorIds[0]}&d2=${theme.directorIds[1]}`;
        link.innerHTML = `
            <div>
                <h3>${theme.title}</h3>
                <p>${theme.description}</p>
            </div>
            <div class="theme-pair">
                <span>${themeDirectors[0].nameJa}</span>
                <span>${themeDirectors[1].nameJa}</span>
            </div>
        `;
        container.appendChild(link);
    });
}

function renderList() {
    const container = document.getElementById('director-grid');
    const isSearching = searchQuery.trim().length > 0;
    const hasMatch = hasExactMatch();
    let firstMatchItem = null;
    container.className = 'director-list';
    container.innerHTML = '';

    if (isSearching && !hasMatch) {
        const empty = document.createElement('div');
        empty.className = 'director-search-note';
        empty.textContent = 'No exact match';
        container.appendChild(empty);
    }

    directors.forEach(group => {
        // Render Category Header
        const header = document.createElement('div');
        header.className = 'director-category-title';
        header.textContent = group.category;
        container.appendChild(header);

        // Render Directors in Group
        group.items.forEach(dir => {
            const isSelected = selectedDirectors.includes(dir.id);
            const isMatch = matchesSearch(dir);
            const item = document.createElement('div');
            item.className = [
                'director-item',
                isSelected ? 'selected' : '',
                isSearching && !isMatch && !isSelected ? 'search-dimmed' : ''
            ].filter(Boolean).join(' ');
            item.innerHTML = `
                <div class="item-name-ja">
                    ${dir.nameJa}
                    ${dir.keywords ? `<div class="item-keywords">${dir.keywords}</div>` : ''}
                </div>
            `;
            item.onclick = () => toggleSelection(dir.id);
            container.appendChild(item);

            if (isSearching && isMatch && !firstMatchItem) {
                firstMatchItem = item;
            }
        });
    });

    if (firstMatchItem) {
        requestAnimationFrame(() => {
            firstMatchItem.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    }
}

function toggleSelection(id) {
    const index = selectedDirectors.indexOf(id);
    if (index > -1) {
        selectedDirectors.splice(index, 1);
    } else {
        if (selectedDirectors.length < 2) {
            selectedDirectors.push(id);
        } else {
            // 3人目は選ばせず、2人まで
            selectedDirectors.shift();
            selectedDirectors.push(id);
        }
    }
    
    updateUI();
}

function updateUI() {
    renderList();
    const btn = document.getElementById('compare-btn');
    const allItems = getAllDirectors();

    if (selectedDirectors.length === 1) {
        const d1 = allItems.find(d => d.id === selectedDirectors[0]);
        btn.textContent = `${d1.nameJa} の作品年表を見る`;
        btn.classList.add('visible');
    } else if (selectedDirectors.length === 2) {
        const names = selectedDirectors.map(id => allItems.find(d => d.id === id).nameJa);
        btn.textContent = `${names[0]} と ${names[1]} を比較する`;
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
}

document.getElementById('compare-btn').onclick = () => {
    if (selectedDirectors.length >= 1) {
        const d1 = selectedDirectors[0];
        const d2 = selectedDirectors[1] || '';
        window.location.href = `timeline.html?d1=${d1}${d2 ? `&d2=${d2}` : ''}`;
    }
};

document.getElementById('director-search').addEventListener('input', (event) => {
    searchQuery = event.target.value;
    renderList();
});

// Initial Render
renderComparisonThemes();
renderList();
