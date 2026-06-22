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
        { id: 'lynch', surname: 'LYNCH', nameJa: 'デヴィッド・リンチ', nameEn: 'DAVID LYNCH', keywords: '悪夢と不条理とユーモア / サウンドデザイン / 超現実主義' },
        { id: 'hooper', surname: 'HOOPER', nameJa: 'トビー・フーパー', nameEn: 'TOBE HOOPER', keywords: '低予算ホラー / アメリカの悪夢 / ざらついた恐怖' },
        { id: 'miller', surname: 'MILLER', nameJa: 'ジョージ・ミラー', nameEn: 'GEORGE MILLER', keywords: '身体性アクション / 神話的世界観 / 寓話的表現' },
        { id: 'scott', surname: 'SCOTT', nameJa: 'リドリー・スコット', nameEn: 'RIDLEY SCOTT', keywords: '重厚な世界構築 / 光と影の造形 /　神話性' },
        { id: 'zemeckis', surname: 'ZEMECKIS', nameJa: 'ロバート・ゼメキス', nameEn: 'ROBERT ZEMECKIS', keywords: '技術革新 / ポップな物語 / 時間と記憶' }
    ]},
    { category: '1980 -', items: [
        { id: 'bigelow', surname: 'BIGELOW', nameJa: 'キャスリン・ビグロー', nameEn: 'KATHRYN BIGELOW', keywords: '緊迫のリアリズム / 極限の暴力 / 骨太な演出' },
        { id: 'mann', surname: 'MANN', nameJa: 'マイケル・マン', nameEn: 'MICHAEL MANN', keywords: '都市犯罪 / 夜のリアリズム / 男たちの緊張' },
        { id: 'tonyscott', surname: 'SCOTT', nameJa: 'トニー・スコット', nameEn: 'TONY SCOTT', keywords: '疾走感ある編集 / 男たちの緊張 / スタイリッシュアクション' },
        { id: 'cameron', surname: 'CAMERON', nameJa: 'ジェームズ・キャメロン', nameEn: 'JAMES CAMERON', keywords: '技術革新 / 巨大スケール / 海洋とSF' },
        { id: 'jackson', surname: 'JACKSON', nameJa: 'ピーター・ジャクソン', nameEn: 'PETER JACKSON', keywords: 'ファンタジー叙事詩 / 特殊効果 / ニュージーランド映画' },
        { id: 'coen', surname: 'COENS', nameJa: 'ジョエル＆イーサン・コーエン', nameEn: 'JOEL & ETHAN COEN', keywords: 'ブラックユーモア / 皮肉な運命 / 緻密な脚本' },
        { id: 'burton', surname: 'BURTON', nameJa: 'ティム・バートン', nameEn: 'TIM BURTON', keywords: 'ゴシック幻想 / 異形の愛 / ダークファンタジー' },
        { id: 'raimi', surname: 'RAIMI', nameJa: 'サム・ライミ', nameEn: 'SAM RAIMI', keywords: 'スピード感のある演出 / コミック的映像 / ホラーとユーモア' }
    ]},
    { category: '1990 -', items: [
        { id: 'fincher', surname: 'FINCHER', nameJa: 'デイヴィッド・フィンチャー', nameEn: 'DAVID FINCHER', keywords: '精密演出 / 執着と狂気 / 冷徹な世界観' },
        { id: 'mendes', surname: 'MENDES', nameJa: 'サム・メンデス', nameEn: 'SAM MENDES', keywords: '舞台的構成 / 英国的ドラマ / 大作と親密さ' },
        { id: 'shyamalan', surname: 'SHYAMALAN', nameJa: 'M・ナイト・シャマラン', nameEn: 'M. NIGHT SHYAMALAN', keywords: '不穏な日常 / ツイスト / 信仰と恐怖' },
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
        { id: 'lordmiller', surname: 'LORD & MILLER', nameJa: 'フィル・ロード＆クリス・ミラー', nameEn: 'PHIL LORD & CHRISTOPHER MILLER', keywords: 'メタユーモア / ジャンル解体 / ポップな発明力' },
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
        { id: 'garland', surname: 'GARLAND', nameJa: 'アレックス・ガーランド', nameEn: 'ALEX GARLAND', keywords: '知的SF / 不穏な身体感覚 / 人間とテクノロジー' },
        { id: 'kosinski', surname: 'KOSINSKI', nameJa: 'ジョセフ・コシンスキー', nameEn: 'JOSEPH KOSINSKI', keywords: '精密な映像設計 / 速度と機械美 / 大作エンタメ' },
        { id: 'gerwig', surname: 'GERWIG', nameJa: 'グレタ・ガーウィグ', nameEn: 'GRETA GERWIG', keywords: '現代女性の肖像 / 知的なユーモア / 瑞々しい感性' },
        { id: 'peele', surname: 'PEELE', nameJa: 'ジョーダン・ピール', nameEn: 'JORDAN PEELE', keywords: '社会派ホラー / 緻密な伏線 / 異質な恐怖' },
        { id: 'coogler', surname: 'COOGLER', nameJa: 'ライアン・クーグラー', nameEn: 'RYAN COOGLER', keywords: 'アイデンティティ / 魂の継承 / 圧倒的躍動感' },
        { id: 'dacosta', surname: 'DACOSTA', nameJa: 'ニア・ダコスタ', nameEn: 'NIA DACOSTA', keywords: '社会的寓話 / ジャンル横断 / 鋭い視点' },
        { id: 'zhao', surname: 'ZHAO', nameJa: 'クロエ・ジャオ', nameEn: 'CHLOÉ ZHAO', keywords: '圧倒的な自然美の映像 / ドキュメンタリータッチ / 静かなリアリズム' },
        { id: 'watts', surname: 'WATTS', nameJa: 'ジョン・ワッツ', nameEn: 'JON WATTS', keywords: '青春ヒーロー / 軽やかな成長譚 / MCUの日常感' },
        { id: 'aster', surname: 'ASTER', nameJa: 'アリ・アスター', nameEn: 'ARI ASTER', keywords: '家族の崩壊 / 不安と喪失 / 現代神話' },
        { id: 'trachtenberg', surname: 'TRACHTENBERG', nameJa: 'ダン・トラクテンバーグ', nameEn: 'DAN TRACHTENBERG', keywords: 'ロジカルアクション演出 / サバイバルSF / シリーズ再解釈' }
    ]},
    { category: '2020 -', items: [
        { id: 'fennell', surname: 'FENNELL', nameJa: 'エメラルド・フェネル', nameEn: 'EMERALD FENNELL', keywords: '復讐と欲望 / ブラックユーモア / 階級と視線' }
    ]}
];

const comparisonThemes = [
    {
        title: '現代SFのかたち',
        description: '時間を組み替えるノーランと、静かに世界を広げるヴィルヌーヴ。現代SFの見え方が少し変わるふたりです。',
        directorIds: ['nolan', 'villeneuve']
    },
    {
        title: 'ブロックバスターの原点',
        description: '映画館で物語を観ることの大切さを教えてくれたふたり。その始まりと広がりをたどります。',
        directorIds: ['spielberg', 'lucas']
    },
    {
        title: '幻想と異形',
        description: '奇妙で、少しこわくて、どこか愛おしい世界。夢と悪夢のあいだを歩くふたりを比べます。',
        directorIds: ['lynch', 'burton']
    },
    {
        title: 'ヒーロー映画の変化',
        description: 'ヒーローはどう変わってきたのか。熱さ、ユーモア、チーム感の違いを見比べられます。',
        directorIds: ['raimi', 'gunn']
    },
    {
        title: '多作の巨匠たち',
        description: '長いキャリアの中で、何度も映画の風景を変えてきたふたり。作品の多さと変化を眺めます。',
        directorIds: ['spielberg', 'scorsese']
    },
    {
        title: '新時代のホラー牽引者',
        description: 'ただ驚かせるだけではない、今の時代の怖さ。ジャンルの広げ方をふたりの作品から見ていきます。',
        directorIds: ['wan', 'aster']
    },
    {
        title: 'チームヒーローの時代',
        description: '仲間が集まり、ぶつかり、ひとつの物語になっていく。チームで描くヒーロー像を比べます。',
        directorIds: ['russo', 'gunn']
    },
    {
        title: '女性の自立と世界の違和感',
        description: '自分らしく生きようとする人たちと、どこか居心地の悪い世界。その描き方の違いを見ていきます。',
        directorIds: ['gerwig', 'fennell']
    },
    {
        title: 'スコット兄弟の映像美',
        description: '重厚な世界を築くリドリーと、速度と熱で駆け抜けるトニー。兄弟それぞれの映像感覚を比べます。',
        directorIds: ['scott', 'tonyscott']
    },
    {
        title: '謎を仕掛ける語り手たち',
        description: '静かに伏線を積み上げるシャマランと、謎そのものを推進力にするエイブラムス。物語の引き込み方を比べます。',
        directorIds: ['shyamalan', 'abrams']
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

    if (!container) {
        return;
    }

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

function setCompareButtonContent(button, mainText, noteText = '') {
    button.innerHTML = '';

    const main = document.createElement('span');
    main.className = 'compare-action-main';
    main.textContent = mainText;
    button.appendChild(main);

    if (noteText) {
        const note = document.createElement('span');
        note.className = 'compare-action-note';
        note.textContent = noteText;
        button.appendChild(note);
    }
}

function updateUI() {
    renderList();
    const btn = document.getElementById('compare-btn');

    if (!btn) {
        return;
    }

    const allItems = getAllDirectors();

    if (selectedDirectors.length === 1) {
        const d1 = allItems.find(d => d.id === selectedDirectors[0]);
        setCompareButtonContent(
            btn,
            `${d1.nameJa} の作品年表を見る`,
            'もう1人監督を選ぶと2人の監督の作品年表の比較ができます'
        );
        btn.classList.add('visible');
    } else if (selectedDirectors.length === 2) {
        const names = selectedDirectors.map(id => allItems.find(d => d.id === id).nameJa);
        setCompareButtonContent(btn, `${names[0]} と ${names[1]} を比較する`);
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
}

const compareButton = document.getElementById('compare-btn');

if (compareButton) {
    compareButton.onclick = () => {
        if (selectedDirectors.length >= 1) {
            const d1 = selectedDirectors[0];
            const d2 = selectedDirectors[1] || '';
            window.location.href = `timeline.html?d1=${d1}${d2 ? `&d2=${d2}` : ''}`;
        }
    };
}

const directorSearchInput = document.getElementById('director-search');

if (directorSearchInput) {
    directorSearchInput.addEventListener('input', (event) => {
        searchQuery = event.target.value;
        renderList();
    });
}

// Initial Render
renderComparisonThemes();
renderList();
