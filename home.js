const directors = [
    { category: '1950 -', items: [
        { id: 'kubrick', surname: 'KUBRICK', surnameJa: 'キューブリック', nameJa: 'スタンリー・キューブリック', nameEn: 'STANLEY KUBRICK', keywords: '完璧主義 / 徹底した構図 / 哲学的' }
    ]},
    { category: '1960 -', items: [
        { id: 'scorsese', surname: 'SCORSESE', surnameJa: 'スコセッシ', nameJa: 'マーティン・スコセッシ', nameEn: 'MARTIN SCORSESE', keywords: '犯罪と贖罪 / アメリカ社会 / 人間の情熱' },
        { id: 'romero', surname: 'ROMERO', surnameJa: 'ロメロ', nameJa: 'ジョージ・A・ロメロ', nameEn: 'GEORGE A. ROMERO', keywords: 'ゾンビ映画の父 / 社会風刺 / インディペンデント精神' },
        { id: 'cronenberg', surname: 'CRONENBERG', surnameJa: 'クローネンバーグ', nameJa: 'デヴィッド・クローネンバーグ', nameEn: 'DAVID CRONENBERG', keywords: 'ボディホラー / テクノロジーと身体 / 冷たい知性' },
        { id: 'donner', surname: 'DONNER', surnameJa: 'ドナー', nameJa: 'リチャード・ドナー', nameEn: 'RICHARD DONNER', keywords: '娯楽映画の職人 / ヒーロー映画の原点 / バディアクション' }
    ]},
    { category: '1970 -', items: [
        { id: 'lucas', surname: 'LUCAS', surnameJa: 'ルーカス', nameJa: 'ジョージ・ルーカス', nameEn: 'GEORGE LUCAS', keywords: 'スペースオペラ / デジタル革命 / 冒険の神話' },
        { id: 'eastwood', surname: 'EASTWOOD', surnameJa: 'イーストウッド', nameJa: 'クリント・イーストウッド', nameEn: 'CLINT EASTWOOD', keywords: '西部劇の継承 / 道徳と暴力 / 静かな演出' },
        { id: 'spielberg', surname: 'SPIELBERG', surnameJa: 'スピルバーグ', nameJa: 'スティーヴン・スピルバーグ', nameEn: 'STEVEN SPIELBERG', keywords: '驚異の物語 / 圧倒的映画術 / ヒューマニズム' },
        { id: 'lynch', surname: 'LYNCH', surnameJa: 'リンチ', nameJa: 'デイヴィッド・リンチ', nameEn: 'DAVID LYNCH', keywords: '悪夢と不条理とユーモア / サウンドデザイン / 超現実主義' },
        { id: 'hooper', surname: 'HOOPER', surnameJa: 'フーパー', nameJa: 'トビー・フーパー', nameEn: 'TOBE HOOPER', keywords: '低予算ホラー / アメリカの悪夢 / ざらついた恐怖' },
        { id: 'craven', surname: 'CRAVEN', surnameJa: 'クレイヴン', nameJa: 'ウェス・クレイヴン', nameEn: 'WES CRAVEN', keywords: '夢と現実の恐怖 / メタホラー / スラッシャー刷新' },
        { id: 'stone', surname: 'STONE', surnameJa: 'ストーン', nameJa: 'オリバー・ストーン', nameEn: 'OLIVER STONE', keywords: 'アメリカ政治 / 戦争の記憶 / 強烈な社会批評' },
        { id: 'argento', surname: 'ARGENTO', surnameJa: 'アルジェント', nameJa: 'ダリオ・アルジェント', nameEn: 'DARIO ARGENTO', keywords: 'ジャッロ / 色彩と殺意 / イタリアンホラー' },
        { id: 'carpenter', surname: 'CARPENTER', surnameJa: 'カーペンター', nameJa: 'ジョン・カーペンター', nameEn: 'JOHN CARPENTER', keywords: 'ミニマルな恐怖 / シンセサウンド / ジャンル映画の職人' },
        { id: 'miller', surname: 'MILLER', surnameJa: 'ミラー', nameJa: 'ジョージ・ミラー', nameEn: 'GEORGE MILLER', keywords: '身体性アクション / 神話的世界観 / 寓話的表現' },
        { id: 'scott', surname: 'SCOTT', surnameJa: 'スコット', nameJa: 'リドリー・スコット', nameEn: 'RIDLEY SCOTT', keywords: '重厚な世界構築 / 光と影の造形 /　神話性' },
        { id: 'zemeckis', surname: 'ZEMECKIS', surnameJa: 'ゼメキス', nameJa: 'ロバート・ゼメキス', nameEn: 'ROBERT ZEMECKIS', keywords: '技術革新 / ポップな物語 / 時間と記憶' },
        { id: 'cunningham', surname: 'CUNNINGHAM', surnameJa: 'カニンガム', nameJa: 'ショーン・S・カニンガム', nameEn: 'SEAN S. CUNNINGHAM', keywords: 'スラッシャーホラー / 独立系映画 / 13日の金曜日' },
        { id: 'verhoeven', surname: 'VERHOEVEN', surnameJa: 'バーホーベン', nameJa: 'ポール・バーホーベン', nameEn: 'PAUL VERHOEVEN', keywords: '暴力と風刺 / 挑発的表現 / SFアクション' }
    ]},
    { category: '1980 -', items: [
        { id: 'bigelow', surname: 'BIGELOW', surnameJa: 'ビグロー', nameJa: 'キャスリン・ビグロー', nameEn: 'KATHRYN BIGELOW', keywords: '緊迫のリアリズム / 極限の暴力 / 骨太な演出' },
        { id: 'mann', surname: 'MANN', surnameJa: 'マン', nameJa: 'マイケル・マン', nameEn: 'MICHAEL MANN', keywords: '都市犯罪 / 夜のリアリズム / 男たちの緊張' },
        { id: 'tonyscott', surname: 'SCOTT', surnameJa: 'スコット', nameJa: 'トニー・スコット', nameEn: 'TONY SCOTT', keywords: '疾走感ある編集 / 男たちの緊張 / スタイリッシュアクション' },
        { id: 'cameron', surname: 'CAMERON', surnameJa: 'キャメロン', nameJa: 'ジェームズ・キャメロン', nameEn: 'JAMES CAMERON', keywords: '技術革新 / 巨大スケール / 海洋とSF' },
        { id: 'jackson', surname: 'JACKSON', surnameJa: 'ジャクソン', nameJa: 'ピーター・ジャクソン', nameEn: 'PETER JACKSON', keywords: 'ファンタジー叙事詩 / 特殊効果 / ニュージーランド映画' },
        { id: 'emmerich', surname: 'EMMERICH', surnameJa: 'エメリッヒ', nameJa: 'ローランド・エメリッヒ', nameEn: 'ROLAND EMMERICH', keywords: 'ディザスター映画 / 巨大スケール / 破壊のスペクタクル' },
        { id: 'coen', surname: 'COENS', surnameJa: 'コーエン', nameJa: 'ジョエル＆イーサン・コーエン', nameEn: 'JOEL & ETHAN COEN', keywords: 'ブラックユーモア / 皮肉な運命 / 緻密な脚本' },
        { id: 'burton', surname: 'BURTON', surnameJa: 'バートン', nameJa: 'ティム・バートン', nameEn: 'TIM BURTON', keywords: 'ゴシック幻想 / 異形の愛 / ダークファンタジー' },
        { id: 'raimi', surname: 'RAIMI', surnameJa: 'ライミ', nameJa: 'サム・ライミ', nameEn: 'SAM RAIMI', keywords: 'スピード感のある演出 / コミック的映像 / ホラーとユーモア' },
        { id: 'mctiernan', surname: 'MCTIERNAN', surnameJa: 'マクティアナン', nameJa: 'ジョン・マクティアナン', nameEn: 'JOHN MCTIERNAN', keywords: '空間設計 / 緊迫のアクション / 肉体と知略' }
    ]},
    { category: '1990 -', items: [
        { id: 'fincher', surname: 'FINCHER', surnameJa: 'フィンチャー', nameJa: 'デイヴィッド・フィンチャー', nameEn: 'DAVID FINCHER', keywords: '精密演出 / 執着と狂気 / 冷徹な世界観' },
        { id: 'mendes', surname: 'MENDES', surnameJa: 'メンデス', nameJa: 'サム・メンデス', nameEn: 'SAM MENDES', keywords: '舞台的構成 / 英国的ドラマ / 大作と親密さ' },
        { id: 'shyamalan', surname: 'SHYAMALAN', surnameJa: 'シャマラン', nameJa: 'M・ナイト・シャマラン', nameEn: 'M. NIGHT SHYAMALAN', keywords: '不穏な日常 / ツイスト / 信仰と恐怖' },
        { id: 'tarantino', surname: 'TARANTINO', surnameJa: 'タランティーノ', nameJa: 'クエンティン・タランティーノ', nameEn: 'QUENTIN TARANTINO', keywords: '饒舌な会話劇 / 映画へのオマージュ / 鮮烈な暴力' },
        { id: 'wright', surname: 'WRIGHT', surnameJa: 'ライト', nameJa: 'エドガー・ライト', nameEn: 'EDGAR WRIGHT', keywords: '音楽との同期 / 高速カット割 / 究極のジャンル愛' },
        { id: 'pta', surname: 'ANDERSON', surnameJa: 'アンダーソン', nameJa: 'ポール・トーマス・アンダーソン', nameEn: 'PAUL THOMAS ANDERSON', keywords: '重厚な人間ドラマ / 狂気と愛 / 圧倒的演出力' },
        { id: 'anderson', surname: 'ANDERSON', surnameJa: 'アンダーソン', nameJa: 'ウェス・アンダーソン', nameEn: 'WES ANDERSON', keywords: 'シンメトリー構図 / 色彩設計 / 独自世界観' },
        { id: 'nolan', surname: 'NOLAN', surnameJa: 'ノーラン', nameJa: 'クリストファー・ノーラン', nameEn: 'CHRISTOPHER NOLAN', keywords: '時間構造/ 実写至上主義 / 究極の没入体験' },
        { id: 'reeves', surname: 'REEVES', surnameJa: 'リーヴス', nameJa: 'マット・リーヴス', nameEn: 'MATT REEVES', keywords: '感情的スケール / ダークな再解釈 / 緊張の演出' },
        { id: 'villeneuve', surname: 'VILLENEUVE', surnameJa: 'ヴィルヌーヴ', nameJa: 'ドゥニ・ヴィルヌーヴ', nameEn: 'DENIS VILLENEUVE', keywords: '壮大な静謐 / 映像美の極致 / 深遠なテーマ' },
        { id: 'wachowskis', surname: 'WACHOWSKIS', surnameJa: 'ウォシャウスキー', nameJa: 'ラナ＆リリー・ウォシャウスキー', nameEn: 'THE WACHOWSKIS', keywords: '革新的ビジュアル / 仮想現実 / 運命と解放' }
    ]},
    { category: '2000 -', items: [
        { id: 'favreau', surname: 'FAVREAU', surnameJa: 'ファヴロー', nameJa: 'ジョン・ファヴロー', nameEn: 'JON FAVREAU', keywords: 'ポップな娯楽性 / MCUの起点 / 実写とCGの融合' },
        { id: 'lordmiller', surname: 'LORD & MILLER', surnameJa: 'ロード', nameJa: 'フィル・ロード＆クリス・ミラー', nameEn: 'PHIL LORD & CHRISTOPHER MILLER', keywords: 'メタユーモア / ジャンル解体 / ポップな発明力' },
        { id: 'gunn', surname: 'GUNN', surnameJa: 'ガン', nameJa: 'ジェームズ・ガン', nameEn: 'JAMES GUNN', keywords: '異端のチーム劇 / 音楽とユーモア / 感情の爆発' },
        { id: 'snyder', surname: 'SNYDER', surnameJa: 'スナイダー', nameJa: 'ザック・スナイダー', nameEn: 'ZACK SNYDER', keywords: '神話的ヒーロー / 強烈な映像美 / スローモーション' },
        { id: 'cregger', surname: 'CREGGER', surnameJa: 'クレッガー', nameJa: 'ザック・クレッガー', nameEn: 'ZACH CREGGER', keywords: '予測不能な恐怖 / 不穏な構成 / ホラーとユーモア' },
        { id: 'abrams', surname: 'ABRAMS', surnameJa: 'エイブラムス', nameJa: 'J.J.エイブラムス', nameEn: 'J.J. ABRAMS', keywords: 'ミステリーボックス哲学 / 臨場感演出 /　過去作へのリスペクトと再構築' },
        { id: 'whedon', surname: 'WHEDON', surnameJa: 'ウェドン', nameJa: 'ジョス・ウェドン', nameEn: 'JOSS WHEDON', keywords: 'アンサンブル劇 / 軽快な会話 / ヒーロー群像' },
        { id: 'waititi', surname: 'WAITITI', surnameJa: 'ワイティティ', nameJa: 'タイカ・ワイティティ', nameEn: 'TAIKA WAITITI', keywords: '脱力ユーモア / 孤独 / カラフル' },
        { id: 'lanthimos', surname: 'LANTHIMOS', surnameJa: 'ランティモス', nameJa: 'ヨルゴス・ランティモス', nameEn: 'YORGOS LANTHIMOS', keywords: '不条理な寓話 / 冷たいユーモア / 身体と制度' },
        { id: 'russo', surname: 'RUSSOS', surnameJa: 'ルッソ', nameJa: 'アンソニー＆ジョー・ルッソ', nameEn: 'ANTHONY & JOE RUSSO', keywords: '大規模群像劇 / 緊迫のアクション / MCUの集大成' },
        { id: 'levy', surname: 'LEVY', surnameJa: 'レヴィ', nameJa: 'ショーン・レヴィ', nameEn: 'SHAWN LEVY', keywords: 'ファミリー娯楽 / 軽快なテンポ / ポップな冒険' },
        { id: 'wan', surname: 'WAN', surnameJa: 'ワン', nameJa: 'ジェームズ・ワン', nameEn: 'JAMES WAN', keywords: 'ホラーの新帝王 / 恐怖の視覚化 / スリラーの極致' },
        { id: 'derrickson', surname: 'DERRICKSON', surnameJa: 'デリクソン', nameJa: 'スコット・デリクソン', nameEn: 'SCOTT DERRICKSON', keywords: '超常ホラー / 信仰と恐怖 / ジャンル横断' },
        { id: 'chazelle', surname: 'CHAZELLE', surnameJa: 'チャゼル', nameJa: 'デイミアン・チャゼル', nameEn: 'DAMIEN CHAZELLE', keywords: '音楽と情熱 / 完璧なリズム / 夢と現実の交差' },
        { id: 'davidgordongreen', surname: 'GREEN', surnameJa: 'グリーン', nameJa: 'デヴィッド・ゴードン・グリーン', nameEn: 'DAVID GORDON GREEN', keywords: '南部の風景 / コメディと哀感 / ホラー再構築' }
    ]},
    { category: '2010 -', items: [
        { id: 'garland', surname: 'GARLAND', surnameJa: 'ガーランド', nameJa: 'アレックス・ガーランド', nameEn: 'ALEX GARLAND', keywords: '知的SF / 不穏な身体感覚 / 人間とテクノロジー' },
        { id: 'kosinski', surname: 'KOSINSKI', surnameJa: 'コシンスキー', nameJa: 'ジョセフ・コシンスキー', nameEn: 'JOSEPH KOSINSKI', keywords: '精密な映像設計 / 速度と機械美 / 大作エンタメ' },
        { id: 'gerwig', surname: 'GERWIG', surnameJa: 'ガーウィグ', nameJa: 'グレタ・ガーウィグ', nameEn: 'GRETA GERWIG', keywords: '現代女性の肖像 / 知的なユーモア / 瑞々しい感性' },
        { id: 'peele', surname: 'PEELE', surnameJa: 'ピール', nameJa: 'ジョーダン・ピール', nameEn: 'JORDAN PEELE', keywords: '社会派ホラー / 緻密な伏線 / 異質な恐怖' },
        { id: 'davidrobertmitchell', surname: 'MITCHELL', surnameJa: 'ミッチェル', nameJa: 'デヴィッド・ロバート・ミッチェル', nameEn: 'DAVID ROBERT MITCHELL', keywords: '郊外の不穏 / 青春と孤独 / 夢のような恐怖' },
        { id: 'coogler', surname: 'COOGLER', surnameJa: 'クーグラー', nameJa: 'ライアン・クーグラー', nameEn: 'RYAN COOGLER', keywords: 'アイデンティティ / 魂の継承 / 圧倒的躍動感' },
        { id: 'dacosta', surname: 'DACOSTA', surnameJa: 'ダコスタ', nameJa: 'ニア・ダコスタ', nameEn: 'NIA DACOSTA', keywords: '社会的寓話 / ジャンル横断 / 鋭い視点' },
        { id: 'zhao', surname: 'ZHAO', surnameJa: 'ジャオ', nameJa: 'クロエ・ジャオ', nameEn: 'CHLOÉ ZHAO', keywords: '圧倒的な自然美の映像 / ドキュメンタリータッチ / 静かなリアリズム' },
        { id: 'watts', surname: 'WATTS', surnameJa: 'ワッツ', nameJa: 'ジョン・ワッツ', nameEn: 'JON WATTS', keywords: '青春ヒーロー / 軽やかな成長譚 / MCUの日常感' },
        { id: 'aster', surname: 'ASTER', surnameJa: 'アスター', nameJa: 'アリ・アスター', nameEn: 'ARI ASTER', keywords: '家族の崩壊 / 不安と喪失 / 現代神話' },
        { id: 'roseglass', surname: 'GLASS', surnameJa: 'グラス', nameJa: 'ローズ・グラス', nameEn: 'ROSE GLASS', keywords: '信仰と執着 / クィアな欲望 / 身体と変容' },
        { id: 'fargeat', surname: 'FARGEAT', surnameJa: 'ファルジャ', nameJa: 'コラリー・ファルジャ', nameEn: 'CORALIE FARGEAT', keywords: 'ボディホラー / 女性の怒り / 鮮烈な映像' },
        { id: 'flanagan', surname: 'FLANAGAN', surnameJa: 'フラナガン', nameJa: 'マイク・フラナガン', nameEn: 'MIKE FLANAGAN', keywords: '情感あるホラー / 喪失と信仰 / スティーヴン・キング翻案' },
        { id: 'muschietti', surname: 'MUSCHIETTI', surnameJa: 'ムスキエティ', nameJa: 'アンディ・ムスキエティ', nameEn: 'ANDY MUSCHIETTI', keywords: '少年期の恐怖 / 怪異の視覚化 / 大作ホラー' },
        { id: 'cretton', surname: 'CRETTON', surnameJa: 'クレットン', nameJa: 'デスティン・ダニエル・クレットン', nameEn: 'DESTIN DANIEL CRETTON', keywords: '親密な人物描写 / 家族と共同体 / ヒーロー映画' },
        { id: 'trachtenberg', surname: 'TRACHTENBERG', surnameJa: 'トラクテンバーグ', nameJa: 'ダン・トラクテンバーグ', nameEn: 'DAN TRACHTENBERG', keywords: 'ロジカルアクション演出 / サバイバルSF / シリーズ再解釈' }
    ]},
    { category: '2020 -', items: [
        { id: 'fennell', surname: 'FENNELL', surnameJa: 'フェネル', nameJa: 'エメラルド・フェネル', nameEn: 'EMERALD FENNELL', keywords: '復讐と欲望 / ブラックユーモア / 階級と視線' },
        { id: 'okuno', surname: 'OKUNO', surnameJa: 'オクノ', nameJa: 'クロエ・オクノ', nameEn: 'CHLOE OKUNO', keywords: '心理的な恐怖 / 視線と孤独 / 静かな緊張' }
    ]}
];

const comparisonThemes = [
    {
        title: '現代SFのかたち',
        description: 'SF映画へ至るまでの歩みを比べます',
        directorIds: ['nolan', 'villeneuve']
    },
    {
        title: 'ブロックバスターの原点',
        description: '大作誕生前後の歩みを比べます',
        directorIds: ['spielberg', 'lucas']
    },
    {
        title: '幻想と異形',
        description: '異形の世界を描く歩みを比べます',
        directorIds: ['lynch', 'burton']
    },
    {
        title: 'ヒーロー映画の変化',
        description: 'ホラーからヒーローへの歩みを比べます',
        directorIds: ['raimi', 'gunn']
    },
    {
        title: 'DCヒーローの再構築',
        description: 'DC映画へ至る歩みを比べます',
        directorIds: ['snyder', 'gunn']
    },
    {
        title: '多作の巨匠たち',
        description: '作品数と公開ペースを比べます',
        directorIds: ['spielberg', 'scorsese']
    },
    {
        title: '新時代のホラー牽引者',
        description: 'ホラー以後の作品選びを比べます',
        directorIds: ['wan', 'aster']
    },
    {
        title: '身体をめぐる欲望と恐怖',
        description: '身体を描く初期作品を比べます',
        directorIds: ['roseglass', 'fargeat']
    },
    {
        title: 'スティーヴン・キングを映す',
        description: 'キング映画化前後の歩みを比べます',
        directorIds: ['flanagan', 'muschietti']
    },
    {
        title: 'チームヒーローの時代',
        description: 'チーム映画へ至る歩みを比べます',
        directorIds: ['russo', 'gunn']
    },
    {
        title: '女性の自立と世界の違和感',
        description: '監督としての歩みを比べます',
        directorIds: ['gerwig', 'fennell']
    },
    {
        title: 'スコット兄弟の映像美',
        description: '兄弟の作風とジャンルを比べます',
        directorIds: ['scott', 'tonyscott']
    },
    {
        title: '謎を仕掛ける語り手たち',
        description: '謎を描く作品の歩みを比べます',
        directorIds: ['shyamalan', 'abrams']
    },
    {
        title: 'アメリカンホラーの革新者',
        description: '同時代のホラー作品を比べます',
        directorIds: ['hooper', 'craven']
    },
    {
        title: '制約から生まれた映画哲学',
        description: '低予算からの歩みを比べます',
        directorIds: ['carpenter', 'miller']
    }
];

const featuredComparisonNames = {
    nolan: 'C. NOLAN',
    villeneuve: 'D. VILLENEUVE',
    spielberg: 'S. SPIELBERG',
    lucas: 'G. LUCAS',
    lordmiller: 'LORD & MILLER',
    abrams: 'J.J. ABRAMS',
    russo: 'RUSSO BROTHERS',
    davidgordongreen: 'D. G. GREEN'
};

function getFeaturedComparisonName(director) {
    if (featuredComparisonNames[director.id]) {
        return featuredComparisonNames[director.id];
    }

    const nameParts = director.nameEn.trim().split(/\s+/);
    const surnameParts = director.surname.trim().split(/\s+/);
    const givenNameParts = nameParts.slice(0, Math.max(0, nameParts.length - surnameParts.length));
    const initials = givenNameParts.map(part => {
        if (part === '&') {
            return '&';
        }

        const initial = part.replace(/[^A-Z]/gi, '').charAt(0);
        return initial ? `${initial}.` : '';
    }).filter(Boolean).join(' ');

    return `${initials}${initials ? ' ' : ''}${director.surname}`;
}

const heroTimelineTracks = [
    { depth: 'far left', x: '4%', speed: '52s', delay: '-11s', side: 'left', years: [[1953, 8, true], [1968, 22], [1977, 39], [1982, 57, true], [1999, 75], [2008, 92]] },
    { depth: 'near', x: '28%', speed: '25s', delay: '-24s', years: [[1960, 4], [1975, 19, true], [1984, 34], [1994, 51], [2001, 69, true], [2014, 88]] },
    { depth: 'mid', x: '50%', speed: '38s', delay: '-7s', years: [[1957, 2, true], [1972, 18], [1988, 36], [2000, 54, true], [2010, 72], [2026, 90]] },
    { depth: 'front', speed: '19s', delay: '-18s', side: 'left', years: [[1964, 7], [1979, 24], [1991, 42, true], [2005, 59], [2015, 76], [2024, 94, true]] },
    { depth: 'far', x: '92%', speed: '58s', delay: '-29s', side: 'left', years: [[1959, 3], [1978, 21, true], [1986, 38], [1997, 56], [2012, 73, true], [2022, 91]] }
];

function renderHeroTimelineMotion() {
    const container = document.getElementById('home-timeline-motion');

    if (!container) {
        return;
    }

    container.innerHTML = heroTimelineTracks.map(track => {
        const trackStyle = [
            track.x ? `--motion-x:${track.x}` : '',
            `--motion-speed:${track.speed}`,
            `--motion-delay:${track.delay}`
        ].filter(Boolean).join(';');

        const events = [0, 1, 2].flatMap(segment => track.years.map(([year, position, isKey]) => {
            const loopPosition = position / 3 + (100 / 3) * segment;
            return `
                <span class="home-motion-event${isKey ? ' is-key' : ''}" style="--motion-y:${loopPosition}%">
                    <b class="home-motion-year">${year}</b>
                </span>
            `;
        })).join('');

        return `
            <span class="home-motion-track depth-${track.depth.replace(' ', ' depth-')}" style="${trackStyle}">
                <span class="home-motion-stream${track.side === 'left' ? ' track-left' : ''}">${events}</span>
            </span>
        `;
    }).join('');
}

let selectedDirectors = [];
let searchQuery = '';
let selectionLimitTimer = null;
let directorView = 'decade';

const surnameCollator = new Intl.Collator('ja');
const kanaRows = [
    ['ア', 'アイウエオァィゥェォ'],
    ['カ', 'カキクケコヵヶ'],
    ['サ', 'サシスセソ'],
    ['タ', 'タチツテトッ'],
    ['ナ', 'ナニヌネノ'],
    ['ハ', 'ハヒフヘホ'],
    ['マ', 'マミムメモ'],
    ['ヤ', 'ヤユヨャュョ'],
    ['ラ', 'ラリルレロ'],
    ['ワ', 'ワヰヱヲン']
];

function getDirectorGroups() {
    if (directorView === 'decade') {
        return [...directors].reverse().map(group => ({
            id: `directors-${group.category.slice(0, 4)}`,
            label: group.category.slice(0, 4),
            navLabel: `${group.category.slice(0, 4)}年代`,
            items: group.items
        }));
    }

    const sorted = getAllDirectors().slice().sort((a, b) =>
        surnameCollator.compare(a.surnameJa, b.surnameJa)
        || surnameCollator.compare(a.nameJa, b.nameJa)
    );
    // 濁点を外して、ガ行はカ行、ヴはア行にまとめる。
    const firstKana = director => director.surnameJa.normalize('NFKC').normalize('NFD')[0];
    return kanaRows.map(([kana, letters], index) => ({
        id: `directors-kana-${index}`,
        label: `${kana}行`,
        navLabel: `${kana}行`,
        items: sorted.filter(director => letters.includes(firstKana(director)))
    })).filter(group => group.items.length > 0);
}

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
        link.setAttribute('aria-label', `${theme.title}：${themeDirectors[0].nameJa}と${themeDirectors[1].nameJa}を比較`);
        link.innerHTML = `
            <h3 class="theme-card-title">${theme.title}</h3>
            <p class="theme-comparison-reason">${theme.description}</p>
            <span class="theme-pair">
                ${themeDirectors.map(director => `
                    <span class="theme-director theme-director--${director.id}">
                        <span class="theme-director-gradient" aria-hidden="true"></span>
                        <span class="theme-director-copy">
                            <span class="theme-director-name-en">${getFeaturedComparisonName(director)}</span>
                            <span class="theme-director-name">${director.nameJa}</span>
                        </span>
                    </span>
                `).join('')}
            </span>
            <span class="theme-card-action">年表で比較 <span aria-hidden="true">→</span></span>
        `;
        container.appendChild(link);
    });
}

function renderEditorNotePreview() {
    const container = document.getElementById('editor-note-teaser');
    const notes = window.editorNotes || [];
    const note = notes[notes.length - 1];

    if (!container || !note) {
        return;
    }

    container.innerHTML = '';

    const heading = document.createElement('h2');
    heading.id = 'editor-note-title';
    heading.className = 'editor-note-subtitle';
    heading.textContent = note.heading;

    const title = document.createElement('p');
    title.className = 'editor-note-film-title';
    title.textContent = `${note.directorJa} ${formatEditorNoteFilmTitles(note)}`;

    const excerpt = document.createElement('p');
    excerpt.className = 'editor-note-excerpt';
    excerpt.textContent = note.excerpt;

    const link = document.createElement('a');
    link.className = 'editor-note-link';
    link.href = `notes/${encodeURIComponent(note.slug)}.html`;
    link.textContent = '続きを読む →';

    const links = document.createElement('div');
    links.className = 'editor-note-links';

    const indexLink = document.createElement('a');
    indexLink.className = 'editor-note-link';
    indexLink.href = 'notes/index.html';
    indexLink.textContent = "Editor's Notesをもっと見る";

    links.appendChild(link);
    links.appendChild(indexLink);

    container.appendChild(heading);
    container.appendChild(title);
    container.appendChild(excerpt);
    container.appendChild(links);
}

function formatEditorNoteFilmTitles(note) {
    const films = note.featuredFilms || (note.featuredFilm ? [note.featuredFilm] : []);

    return films.map(film => film.titleJa).join('／');
}

function renderList({ scrollToMatch = false } = {}) {
    const container = document.getElementById('director-grid');

    if (!container) {
        return;
    }

    const isSearching = searchQuery.trim().length > 0;
    const hasMatch = hasExactMatch();
    const focusedDirectorId = document.activeElement?.dataset.directorId;
    const groups = getDirectorGroups();
    let firstMatchItem = null;
    container.className = directorView === 'kana' ? 'director-list director-list--kana' : 'director-list';
    container.setAttribute('aria-labelledby', `director-tab-${directorView}`);
    container.innerHTML = '';

    const groupNav = document.getElementById('director-group-nav');
    if (groupNav) {
        groupNav.setAttribute('aria-label', directorView === 'kana' ? '五十音から監督を探す' : '年代から監督を探す');
        groupNav.replaceChildren(...groups.map(group => {
            const link = document.createElement('a');
            link.href = `#${group.id}`;
            link.textContent = group.navLabel;
            return link;
        }));
    }

    if (isSearching && !hasMatch) {
        const empty = document.createElement('div');
        empty.className = 'director-search-note';
        empty.textContent = '一致する監督が見つかりませんでした';
        container.appendChild(empty);
    }

    groups.forEach(group => {
        // Render Category Header
        const header = document.createElement('h2');
        header.className = directorView === 'kana'
            ? 'director-category-title director-category-title--kana'
            : 'director-category-title director-category-title--cards';
        header.id = group.id;
        header.textContent = group.label;
        container.appendChild(header);

        const groupContainer = document.createElement('div');
        groupContainer.className = directorView === 'kana' ? 'director-name-list' : 'director-card-grid';

        // Render Directors in Group
        group.items.forEach(dir => {
            const isSelected = selectedDirectors.includes(dir.id);
            const isMatch = matchesSearch(dir);
            const item = document.createElement('a');
            item.className = [
                'director-item',
                directorView === 'kana' ? 'director-name-item' : 'director-item--card',
                directorView === 'kana' ? '' : `theme-director--${dir.id}`,
                isSelected ? 'selected' : '',
                isSearching && !isMatch && !isSelected ? 'search-dimmed' : ''
            ].filter(Boolean).join(' ');
            item.href = `timeline.html?d1=${encodeURIComponent(dir.id)}`;
            item.dataset.directorId = dir.id;
            item.setAttribute('role', 'checkbox');
            item.setAttribute('aria-label', isSelected
                ? `${dir.nameJa}を比較対象から外す`
                : `${dir.nameJa}を比較対象に選択する`
            );
            item.setAttribute('aria-checked', String(isSelected));
            item.innerHTML = directorView === 'kana' ? `
                <span class="director-name-copy">
                    <span class="director-name-ja">${dir.nameJa}</span>
                    <span class="director-name-en" lang="en">${dir.nameEn}</span>
                </span>
                <span class="director-name-check" aria-hidden="true"></span>
            ` : `
                <span class="director-item-gradient" aria-hidden="true"></span>
                <span class="item-name-copy director-card-name-copy">
                    <span class="director-card-name-en">${getFeaturedComparisonName(dir)}</span>
                    <span class="director-card-name-ja">${dir.nameJa}</span>
                </span>
            `;
            item.addEventListener('click', event => {
                if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
                    return;
                }
                event.preventDefault();
                toggleSelection(dir.id);
            });
            item.addEventListener('keydown', event => {
                if (event.key === ' ') {
                    event.preventDefault();
                    toggleSelection(dir.id);
                }
            });
            groupContainer.appendChild(item);

            if (isSearching && isMatch && !firstMatchItem) {
                firstMatchItem = item;
            }
        });

        container.appendChild(groupContainer);
    });

    if (focusedDirectorId) {
        container.querySelector(`[data-director-id="${focusedDirectorId}"]`)?.focus({ preventScroll: true });
    }

    if (scrollToMatch && firstMatchItem) {
        requestAnimationFrame(() => {
            firstMatchItem.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    }
}

function toggleSelection(id) {
    const tray = document.getElementById('comparison-tray');

    if (selectionLimitTimer) {
        window.clearTimeout(selectionLimitTimer);
        selectionLimitTimer = null;
    }
    tray?.classList.remove('selection-limit');

    const index = selectedDirectors.indexOf(id);
    if (index > -1) {
        selectedDirectors.splice(index, 1);
    } else {
        if (selectedDirectors.length < 2) {
            selectedDirectors.push(id);
        } else {
            showSelectionLimitMessage();
            return;
        }
    }
    
    updateUI();
}

function setCompareButtonContent(button, mainText, noteText = '') {
    let main = button.querySelector('.compare-action-main');
    let note = button.querySelector('.compare-action-note');

    if (!main) {
        main = document.createElement('span');
        main.className = 'compare-action-main';
        button.prepend(main);
    }
    main.textContent = mainText;

    if (noteText) {
        if (!note) {
            note = document.createElement('span');
            note.className = 'compare-action-note';
            main.insertAdjacentElement('afterend', note);
        }
        note.textContent = noteText;
        note.hidden = false;
    } else if (note) {
        note.hidden = true;
    }
}

function showSelectionLimitMessage() {
    const tray = document.getElementById('comparison-tray');
    const btn = document.getElementById('compare-btn');

    if (!tray || !btn) {
        return;
    }

    tray.classList.remove('selection-limit');
    void tray.offsetWidth;
    tray.classList.add('selection-limit');
    setCompareButtonContent(btn, '監督を入れ替える場合にはどちらかを×で外してください');

    selectionLimitTimer = window.setTimeout(() => {
        tray.classList.remove('selection-limit');
        selectionLimitTimer = null;

        if (selectedDirectors.length === 2) {
            setCompareButtonContent(btn, '2人の年表を比較する');
        } else {
            updateUI();
        }
    }, 2200);
}

function updateUI() {
    renderList();
    const btn = document.getElementById('compare-btn');
    const tray = document.getElementById('comparison-tray');
    const slots = Array.from(document.querySelectorAll('[data-comparison-slot]'));

    if (!btn || !tray) {
        return;
    }

    const allItems = getAllDirectors();
    const selectedItems = selectedDirectors.map(id => allItems.find(d => d.id === id)).filter(Boolean);

    slots.forEach((slot, index) => {
        const director = selectedItems[index];
        const name = slot.querySelector('.comparison-tray-slot-name');

        slot.className = 'comparison-tray-slot';
        slot.disabled = !director;

        if (director) {
            slot.classList.add('is-filled', `theme-director--${director.id}`);
            slot.setAttribute('aria-label', `${director.nameJa}を選択から外す`);
            name.textContent = director.nameJa;
            slot.onclick = () => toggleSelection(director.id);
        } else {
            slot.setAttribute('aria-label', `${index + 1}人目の監督は未選択です`);
            name.textContent = '監督を選択';
            slot.onclick = null;
        }
    });

    tray.classList.toggle('visible', selectedItems.length > 0);
    document.body.classList.toggle('has-director-selection', selectedItems.length > 0);
    btn.disabled = selectedItems.length === 0;

    if (selectedDirectors.length === 1) {
        const d1 = selectedItems[0];
        setCompareButtonContent(
            btn,
            `${d1.nameJa}の年表を見る`,
            'もう1人選ぶと比較できます'
        );
    } else if (selectedDirectors.length === 2) {
        setCompareButtonContent(btn, '2人の年表を比較する');
    } else {
        setCompareButtonContent(btn, '映画監督を選択してください', '2人選ぶと作品年表を比較できます');
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
        renderList({ scrollToMatch: true });
    });
}

const directorViewTabs = Array.from(document.querySelectorAll('[data-director-view]'));

function setDirectorView(tab) {
    directorView = tab.dataset.directorView;
    directorViewTabs.forEach(button => {
        const isActive = button === tab;
        button.setAttribute('aria-selected', String(isActive));
        button.tabIndex = isActive ? 0 : -1;
    });
    renderList();
}

directorViewTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setDirectorView(tab));
    tab.addEventListener('keydown', event => {
        let nextIndex;
        if (event.key === 'ArrowRight') nextIndex = (index + 1) % directorViewTabs.length;
        else if (event.key === 'ArrowLeft') nextIndex = (index + directorViewTabs.length - 1) % directorViewTabs.length;
        else if (event.key === 'Home') nextIndex = 0;
        else if (event.key === 'End') nextIndex = directorViewTabs.length - 1;
        else return;
        event.preventDefault();
        directorViewTabs[nextIndex].focus();
        setDirectorView(directorViewTabs[nextIndex]);
    });
});

// Initial Render
renderHeroTimelineMotion();
renderComparisonThemes();
renderEditorNotePreview();
renderList();
