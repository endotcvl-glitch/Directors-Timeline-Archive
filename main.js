// --- Master Data ---
const directorsInfo = {
    'kubrick': { fullNameEn: 'STANLEY KUBRICK', nameJa: 'スタンリー・キューブリック', surname: 'KUBRICK' },
    'lucas': { fullNameEn: 'GEORGE LUCAS', nameJa: 'ジョージ・ルーカス', surname: 'LUCAS' },
    'spielberg': { fullNameEn: 'STEVEN SPIELBERG', nameJa: 'スティーヴン・スピルバーグ', surname: 'SPIELBERG' },
    'scorsese': { fullNameEn: 'MARTIN SCORSESE', nameJa: 'マーティン・スコセッシ', surname: 'SCORSESE' },
    'lynch': { fullNameEn: 'DAVID LYNCH', nameJa: 'デヴィッド・リンチ', surname: 'LYNCH' },
    'coen': { fullNameEn: 'JOEL & ETHAN COEN', nameJa: 'ジョエル＆イーサン・コーエン', surname: 'COENS' },
    'burton': { fullNameEn: 'TIM BURTON', nameJa: 'ティム・バートン', surname: 'BURTON' },
    'bigelow': { fullNameEn: 'KATHRYN BIGELOW', nameJa: 'キャスリン・ビグロー', surname: 'BIGELOW' },
    'cameron': { fullNameEn: 'JAMES CAMERON', nameJa: 'ジェームズ・キャメロン', surname: 'CAMERON' },
    'jackson': { fullNameEn: 'PETER JACKSON', nameJa: 'ピーター・ジャクソン', surname: 'JACKSON' },
    'pta': { fullNameEn: 'PAUL THOMAS ANDERSON', nameJa: 'ポール・トーマス・アンダーソン', surname: 'PTA' },
    'miller': { fullNameEn: 'GEORGE MILLER', nameJa: 'ジョージ・ミラー', surname: 'MILLER' },
    'wright': { fullNameEn: 'EDGAR WRIGHT', nameJa: 'エドガー・ライト', surname: 'WRIGHT' },
    'coogler': { fullNameEn: 'RYAN COOGLER', nameJa: 'ライアン・クーグラー', surname: 'COOGLER' },
    'fincher': { fullNameEn: 'DAVID FINCHER', nameJa: 'デイヴィッド・フィンチャー', surname: 'FINCHER' },
    'shyamalan': { fullNameEn: 'M. NIGHT SHYAMALAN', nameJa: 'M・ナイト・シャマラン', surname: 'SHYAMALAN' },
    'tarantino': { fullNameEn: 'QUENTIN TARANTINO', nameJa: 'クエンティン・タランティーノ', surname: 'TARANTINO' },
    'anderson': { fullNameEn: 'WES ANDERSON', nameJa: 'ウェス・アンダーソン', surname: 'ANDERSON' },
    'nolan': { fullNameEn: 'CHRISTOPHER NOLAN', nameJa: 'クリストファー・ノーラン', surname: 'NOLAN' },
    'villeneuve': { fullNameEn: 'DENIS VILLENEUVE', nameJa: 'ドゥニ・ヴィルヌーヴ', surname: 'VILLENEUVE' },
    'wachowskis': { fullNameEn: 'THE WACHOWSKIS', nameJa: 'ラナ＆リリー・ウォシャウスキー', surname: 'WACHOWSKIS' },
    'garland': { fullNameEn: 'ALEX GARLAND', nameJa: 'アレックス・ガーランド', surname: 'GARLAND' },
    'kosinski': { fullNameEn: 'JOSEPH KOSINSKI', nameJa: 'ジョセフ・コシンスキー', surname: 'KOSINSKI' },
    'gerwig': { fullNameEn: 'GRETA GERWIG', nameJa: 'グレタ・ガーウィグ', surname: 'GERWIG' },
    'chazelle': { fullNameEn: 'DAMIEN CHAZELLE', nameJa: 'デイミアン・チャゼル', surname: 'CHAZELLE' },
    'peele': { fullNameEn: 'JORDAN PEELE', nameJa: 'ジョーダン・ピール', surname: 'PEELE' },
    'aster': { fullNameEn: 'ARI ASTER', nameJa: 'アリ・アスター', surname: 'ASTER' },
    'wan': { fullNameEn: 'JAMES WAN', nameJa: 'ジェームズ・ワン', surname: 'WAN' },
    'favreau': { fullNameEn: 'JON FAVREAU', nameJa: 'ジョン・ファヴロー', surname: 'FAVREAU' },
    'gunn': { fullNameEn: 'JAMES GUNN', nameJa: 'ジェームズ・ガン', surname: 'GUNN' },
    'whedon': { fullNameEn: 'JOSS WHEDON', nameJa: 'ジョス・ウェドン', surname: 'WHEDON' },
    'waititi': { fullNameEn: 'TAIKA WAITITI', nameJa: 'タイカ・ワイティティ', surname: 'WAITITI' },
    'russo': { fullNameEn: 'ANTHONY & JOE RUSSO', nameJa: 'アンソニー＆ジョー・ルッソ', surname: 'RUSSOS' },
    'raimi': { fullNameEn: 'SAM RAIMI', nameJa: 'サム・ライミ', surname: 'RAIMI' },
    'levy': { fullNameEn: 'SHAWN LEVY', nameJa: 'ショーン・レヴィ', surname: 'LEVY' },
    'dacosta': { fullNameEn: 'NIA DACOSTA', nameJa: 'ニア・ダコスタ', surname: 'DACOSTA' },
    'zhao': { fullNameEn: 'CHLOÉ ZHAO', nameJa: 'クロエ・ジャオ', surname: 'ZHAO' },
    'watts': { fullNameEn: 'JON WATTS', nameJa: 'ジョン・ワッツ', surname: 'WATTS' },
    'reeves': { fullNameEn: 'MATT REEVES', nameJa: 'マット・リーヴス', surname: 'REEVES' },
    'trachtenberg': { fullNameEn: 'DAN TRACHTENBERG', nameJa: 'ダン・トラクテンバーグ', surname: 'TRACHTENBERG' },
    'zemeckis': { fullNameEn: 'ROBERT ZEMECKIS', nameJa: 'ロバート・ゼメキス', surname: 'ZEMECKIS' },
    'lanthimos': { fullNameEn: 'YORGOS LANTHIMOS', nameJa: 'ヨルゴス・ランティモス', surname: 'LANTHIMOS' },
    'scott': { fullNameEn: 'RIDLEY SCOTT', nameJa: 'リドリー・スコット', surname: 'SCOTT' },
    'abrams': { fullNameEn: 'J.J. ABRAMS', nameJa: 'J.J.エイブラムス', surname: 'ABRAMS' },
    'fennell': { fullNameEn: 'EMERALD FENNELL', nameJa: 'エメラルド・フェネル', surname: 'FENNELL' },
};

const filmsData = [
    // Stanley Kubrick
    { year: 1953, type: 'kubrick', title: "非情の罠", context: "敵地に墜落した4人の兵士を描いたデビュー作。" },
    { year: 1955, type: 'kubrick', title: "非情の標的", context: "引退を決意したボクサーが事件に巻き込まれるノワール映画。" },
    { year: 1956, type: 'kubrick', title: "現金に体を張れ", context: "緻密な計画で競馬場襲撃に挑む男たちを描く傑作犯罪映画。" },
    { year: 1957, type: 'kubrick', title: "突撃", context: "第一次世界大戦を舞台に、軍の上層部と兵士の対立を描いた反戦映画。" },
    { year: 1960, type: 'kubrick', title: "スパルタカス", context: "古代ローマを舞台に、奴隷たちの反乱を壮大に描いた歴史大作。" },
    { year: 1962, type: 'kubrick', title: "ロリータ", context: "中年男性と少女の倒錯した愛を描いた、ナボコフの同名小説の映画化。" },
    { year: 1964, type: 'kubrick', title: "博士の異常な愛情", context: "核戦争を題材に、冷戦下の政治と狂気を皮肉ったブラックコメディ。" },
    { year: 1968, type: 'kubrick', title: "2001年宇宙の旅", context: "人類の進化と宇宙の神秘を描いた、SF映画の金字塔。" },
    { year: 1971, type: 'kubrick', title: "時計じかけのオレンジ", context: "近未来を舞台に、暴力と洗脳をめぐる人間の本質を問う衝撃作。" },
    { year: 1975, type: 'kubrick', title: "バリー・リンドン", context: "18世紀のヨーロッパを舞台に、一人の男の成り上がりと没落を描いた歴史劇。" },
    { year: 1980, type: 'kubrick', title: "シャイニング", context: "雪山のホテルを舞台にした、恐怖の心理的描写が際立つホラー映画。" },
    { year: 1987, type: 'kubrick', title: "フルメタル・ジャケット", context: "ベトナム戦争下での過酷な訓練と戦場を描いた戦争ドラマ。" },
    { year: 1999, type: 'kubrick', title: "アイズ ワイド シャット", context: "仮面舞踏会などを通じ、人間の欲望と愛の深淵を暴く遺作。" },

    // George Lucas
    { year: 1971, type: 'lucas', title: "THX 1138", context: "管理社会からの逃走を描いた、ルーカスの長編監督デビュー作。" },
    { year: 1973, type: 'lucas', title: "アメリカン・グラフィティ", context: "1960年代初頭の若者文化を描いた青春映画の傑作。" },
    { year: 1977, type: 'lucas', title: "スター・ウォーズ エピソード4/新たなる希望", context: "世界的社会現象を巻き起こした、SF映画の金字塔。" },
    { year: 1999, type: 'lucas', title: "スター・ウォーズ エピソード1/ファントム・メナス", context: "新三部作の第1章。アナキン・スカイウォーカーの少年時代を描く。" },
    { year: 2002, type: 'lucas', title: "スター・ウォーズ エピソード2/クローンの攻撃", context: "新三部作の第2章。クローン戦争の勃発とジェダイの苦闘を描く。" },
    { year: 2005, type: 'lucas', title: "スター・ウォーズ エピソード3/シスの復讐", context: "新三部作の完結編。アナキンがダース・ベイダーへと変貌する悲劇を描く。" },

    // David Lynch
    { year: 1977, type: 'lynch', title: "イレイザーヘッド", context: "工業地帯を舞台に、奇妙な赤ん坊を育てる男の不安と恐怖を描いたデビュー作。" },
    { year: 1980, type: 'lynch', title: "エレファント・マン", context: "異形の姿で生まれた男と医師の交流を通じ、人間の尊厳を問う感動のドラマ。" },
    { year: 1984, type: 'lynch', title: "デューン/砂の惑星", context: "砂の惑星を舞台にした、壮大な宇宙帝国の権力争いを描くSF叙事詩。" },
    { year: 1986, type: 'lynch', title: "ブルーベルベット", context: "平穏な町に潜む狂気と暴力に足を踏み入れた青年が見る、アメリカの暗部。" },
    { year: 1990, type: 'lynch', title: "ツイン・ピークス Season 1", context: "ローラ・パーマー事件を起点に、郊外の闇と夢の論理をテレビへ持ち込んだ革新的シリーズ。", medium: "Series" },
    { year: 1990, type: 'lynch', title: "ツイン・ピークス Season 2", context: "1990年から1991年にかけて放送。物語をさらに迷宮化し、テレビ表現の可能性を押し広げた続章。", medium: "Series" },
    { year: 1990, type: 'lynch', title: "ワイルド・アット・ハート", context: "逃避行を続ける恋人たちを描いた、過激で情熱的なロードムービー。" },
    { year: 1992, type: 'lynch', title: "ツイン・ピークス/ローラ・パーマー最期の7日間", context: "ドラマの前日譚。ローラ・パーマーの死に至る最後の1週間。" },
    { year: 1997, type: 'lynch', title: "ロスト・ハイウェイ", context: "記憶とアイデンティティが交錯する、悪夢のようなミステリー・スリラー。" },
    { year: 1999, type: 'lynch', title: "ストレイト・ストーリー", context: "疎遠だった兄に会うため、トラクターで旅をした老人の実話に基づく温かな物語。" },
    { year: 2001, type: 'lynch', title: "マルホランド・ドライブ", context: "夢と現実が溶け合う、ハリウッドの闇と幻影を鮮烈に描いた傑作。" },
    { year: 2006, type: 'lynch', title: "インランド・エンパイア", context: "女優が次第に現実と虚構の境界を失っていく、実験的な長編。" },
    { year: 2017, type: 'lynch', title: "ツイン・ピークス: The Return", context: "全18話をリンチが監督し、テレビシリーズの形式を映画的な時間感覚へ押し広げたリミテッドシリーズ。", medium: "Series" },

    // Tim Burton
    { year: 1985, type: 'burton', title: "ピーウィーの大冒険", context: "大切な自転車を探すため、変わり者の男が全米を横断するコメディ。" },
    { year: 1988, type: 'burton', title: "ビートルジュース", context: "死後の世界を舞台にした、奇抜でダークなブラックコメディ。" },
    { year: 1989, type: 'burton', title: "バットマン", context: "ゴッサム・シティの闇を背景に、バットマンとジョーカーの戦いを描く。" },
    { year: 1990, type: 'burton', title: "シザーハンズ", context: "両手がハサミの人造人間が、人々と触れ合い葛藤する切ないファンタジー。" },
    { year: 1992, type: 'burton', title: "バットマン リターンズ", context: "ペンギンやキャットウーマンが登場する、バットマン・シリーズ第2作。" },
    { year: 1994, type: 'burton', title: "エド・ウッド", context: "史上最低の映画監督の情熱を描いた伝記。" },
    { year: 1996, type: 'burton', title: "マーズ・アタック！", context: "火星人が地球を襲撃する、ブラックユーモアあふれるSFパニック。" },
    { year: 1999, type: 'burton', title: "スリーピー・ホロウ", context: "首なし騎士の伝説を追う捜査官を描いた、ゴシック・ホラー。" },
    { year: 2001, type: 'burton', title: "PLANET OF THE APES/猿の惑星", context: "猿が支配する惑星に不時着した宇宙飛行士のSFアドベンチャー。" },
    { year: 2003, type: 'burton', title: "ビッグ・フィッシュ", context: "嘘か本当かわからない不思議な体験を語る父と息子の絆を描くドラマ。" },
    { year: 2005, type: 'burton', title: "チャーリーとチョコレート工場", context: "不思議な工場を舞台にした、カラフルで奇妙なファンタジー。" },
    { year: 2005, type: 'burton', title: "ティム・バートンのコープスブライド", context: "死者の花嫁と結婚してしまった青年を描く、切ないストップモーションアニメ。" },
    { year: 2007, type: 'burton', title: "スウィーニー・トッド フリート街の悪魔の理髪師", context: "復讐に燃える理髪師を描いた、ダークなミュージカル。" },
    { year: 2010, type: 'burton', title: "アリス・イン・ワンダーランド", context: "少女アリスが再訪した不思議の国での冒険を独創的な映像で描く。" },
    { year: 2012, type: 'burton', title: "ダーク・シャドウ", context: "現代に蘇った吸血鬼が、一族の再建を目指すコメディ。" },
    { year: 2012, type: 'burton', title: "フランケンウィニー", context: "愛犬を生き返らせた少年を描いた、モノクロのストップモーションアニメ。" },
    { year: 2014, type: 'burton', title: "ビッグ・アイズ", context: "「ビッグ・アイ」の絵で有名になった画家夫婦の驚きの実話。" },
    { year: 2016, type: 'burton', title: "ミス・ペレグリンと奇妙なこどもたち", context: "特殊な能力を持つ子供たちが暮らす孤児院を巡るファンタジー。" },
    { year: 2019, type: 'burton', title: "ダンボ", context: "大きな耳を持つ象のダンボが、空を飛ぶ力を手に入れる感動の物語。" },
    { year: 2022, type: 'burton', title: "ウェンズデー", context: "アダムス・ファミリーの娘ウェンズデーを主人公に、ゴシックな学園ミステリーとして再構築したNetflixシリーズ。", medium: "Series" },
    { year: 2024, type: 'burton', title: "ビートルジュース ビートルジュース", context: "奇才ビートルジュースが再び騒動を巻き起こすファンタジーの続編。" },

    // Joel & Ethan Coen
    { year: 1984, type: 'coen', title: "ブラッド・シンプル", context: "妻の浮気を疑った夫が殺し屋を雇う、ネオ・ノワール・サスペンス。" },
    { year: 1987, type: 'coen', title: "赤ちゃん泥棒", context: "元泥棒の男と元警官の妻が、赤ちゃんを誘拐するコメディ。" },
    { year: 1990, type: 'coen', title: "ミラーズ・クロッシング", context: "禁酒法時代のアメリカを舞台にした、ギャング同士の抗争劇。" },
    { year: 1991, type: 'coen', title: "バートン・フィンク", context: "ハリウッドに招かれた劇作家が、奇妙な体験に巻き込まれるサスペンス。" },
    { year: 1994, type: 'coen', title: "未来は今", context: "大企業の社長に抜擢された若者が、会社の陰謀に巻き込まれる喜劇。" },
    { year: 1996, type: 'coen', title: "ファーゴ", context: "誘拐事件をきっかけに、雪深い田舎町で起こる犯罪と騒動。" },
    { year: 1998, type: 'coen', title: "ビッグ・リボウスキ", context: "同姓同名の富豪と間違えられた男が、誘拐事件に巻き込まれるコメディ。" },
    { year: 2000, type: 'coen', title: "オー・ブラザー!", context: "脱獄した3人の囚人が、宝を求めて旅をする冒険コメディ。" },
    { year: 2001, type: 'coen', title: "バーバー", context: "妻の浮気と殺人事件に巻き込まれた理髪師の運命を描く物語。" },
    { year: 2003, type: 'coen', title: "ディボース・ショウ", context: "離婚弁護士と、彼を翻弄する女性の駆け引きを描くロマンティック・コメディ。" },
    { year: 2004, type: 'coen', title: "レディ・キラーズ", context: "老婦人の家に下宿した強盗団が、完全犯罪を計画する犯罪コメディ。" },
    { year: 2007, type: 'coen', title: "ノーカントリー", context: "偶然大金を手にした男と、彼を追う冷酷な殺し屋の死闘。" },
    { year: 2008, type: 'coen', title: "バーン・アフター・リーディング", context: "CIAの機密情報のディスクを巡って繰り広げられる騒動。" },
    { year: 2009, type: 'coen', title: "シリアスマン", context: "平凡なユダヤ人教授が、突然人生の災難に見舞われる不条理劇。" },
    { year: 2010, type: 'coen', title: "トゥルー・グリット", context: "父を殺された少女が、飲んだくれの保安官と共に犯人を追う西部劇。" },
    { year: 2013, type: 'coen', title: "インサイド・ルーウィン・デイヴィス 名もなき男の歌", context: "1960年代、売れないフォーク歌手の苦悩と孤独な日々。" },
    { year: 2016, type: 'coen', title: "ヘイル、シーザー!", context: "1950年代のハリウッドを舞台に、誘拐されたスターを救うべく奔走する物語。" },
    { year: 2018, type: 'coen', title: "バスターのバラード", context: "西部開拓時代をテーマにした6つのエピソードからなるオムニバス。" },

    // James Cameron
    { year: 1984, type: 'cameron', title: "ターミネーター", context: "低予算SFを、機械の悪夢と追跡劇の強度で神話化した出発点。" },
    { year: 1986, type: 'cameron', title: "エイリアン2", context: "ホラーを戦争映画へ拡張し、リプリーの母性と戦闘を結びつけた続編。" },
    { year: 1989, type: 'cameron', title: "アビス", context: "深海を舞台に、人類と未知の知性との接触を描いたSF大作。" },
    { year: 1991, type: 'cameron', title: "ターミネーター2", context: "デジタルVFXの躍進と、破壊者が守護者へ変わる物語を融合した到達点。" },
    { year: 1994, type: 'cameron', title: "トゥルーライズ", context: "スパイ映画と夫婦劇を、巨大なアクションのスケールで描く娯楽作。" },
    { year: 1997, type: 'cameron', title: "タイタニック", context: "歴史的悲劇とロマンスを、圧倒的なスペクタクルとして結晶させた大作。" },
    { year: 2009, type: 'cameron', title: "アバター", context: "3D映像とモーションキャプチャで、映画体験の基準を更新したSF巨編。" },
    { year: 2022, type: 'cameron', title: "アバター:ウェイ・オブ・ウォーター", context: "水中撮影と家族の物語を軸に、パンドラの世界をさらに拡張した続編。" },

    // Peter Jackson
    { year: 1987, type: 'jackson', title: "バッド・テイスト", context: "低予算の自主制作から生まれた、過激なユーモアと特殊効果に満ちた長編デビュー作。" },
    { year: 1989, type: 'jackson', title: "ミート・ザ・フィーブル 怒りのヒポポタマス", context: "人形劇のかわいらしさをブラックユーモアで裏返した、毒気の強いカルト作。" },
    { year: 1992, type: 'jackson', title: "ブレインデッド", context: "スプラッターとコメディを極端なエネルギーで結びつけた、初期ジャクソンの代表作。" },
    { year: 1994, type: 'jackson', title: "乙女の祈り", context: "実際の事件をもとに、少女たちの想像力と危うい親密さを繊細に描いた心理ドラマ。" },
    { year: 1996, type: 'jackson', title: "さまよう魂たち", context: "幽霊が見える男の物語を、ホラー、コメディ、VFXで軽快に組み立てた娯楽作。" },
    { year: 2001, type: 'jackson', title: "ロード・オブ・ザ・リング", context: "トールキンの壮大な世界を実写映画として立ち上げ、現代ファンタジー映画の基準を変えた第一章。" },
    { year: 2002, type: 'jackson', title: "ロード・オブ・ザ・リング/二つの塔", context: "複数の戦いと旅を並行して描き、中つ国のスケールと感情をさらに広げた第二章。" },
    { year: 2003, type: 'jackson', title: "ロード・オブ・ザ・リング/王の帰還", context: "長大な旅と戦争を圧倒的なスペクタクルで締めくくった、三部作の完結編。" },
    { year: 2005, type: 'jackson', title: "キング・コング", context: "古典的怪獣映画への愛を、最新VFXと冒険映画のスケールで語り直した大作。" },
    { year: 2009, type: 'jackson', title: "ラブリーボーン", context: "殺された少女の視点から、喪失と家族の再生を幻想的な映像で描いたドラマ。" },
    { year: 2012, type: 'jackson', title: "ホビット 思いがけない冒険", context: "再び中つ国へ戻り、ビルボの旅立ちを冒険の明るさと大作感で描いた前日譚。" },
    { year: 2013, type: 'jackson', title: "ホビット 竜に奪われた王国", context: "スマウグとの対峙を中心に、冒険の緊張とファンタジー世界の広がりを強めた第二章。" },
    { year: 2014, type: 'jackson', title: "ホビット 決戦のゆくえ", context: "中つ国をめぐる戦いと別れを描き、ホビット三部作を締めくくった完結編。" },
    { year: 2018, type: 'jackson', title: "彼らは生きていた", context: "第一次世界大戦の記録映像を修復・着色し、遠い戦争を現在の感覚へ近づけたドキュメンタリー。" },
    { year: 2021, type: 'jackson', title: "ザ・ビートルズ: Get Back", context: "膨大な記録映像を再編集し、ビートルズの創作現場を長い時間の流れで見せたドキュメンタリーシリーズ。", medium: "Series" },

    // The Wachowskis
    { year: 1996, type: 'wachowskis', title: "バウンド", context: "2人の女性がマフィアの金を奪うために協力するクライム・サスペンス。" },
    { year: 1999, type: 'wachowskis', title: "マトリックス", context: "仮想世界「マトリックス」からの人類解放を描くSFアクションの金字塔。" },
    { year: 2003, type: 'wachowskis', title: "マトリックス リローデッド", context: "マトリックス三部作の第2弾。機械軍との最終決戦に向けて奔走する。" },
    { year: 2003, type: 'wachowskis', title: "マトリックス レボリューションズ", context: "マトリックス三部作の完結編。ネオとスミスの壮絶な結末。" },
    { year: 2008, type: 'wachowskis', title: "スピード・レーサー", context: "日本のアニメを実写化。鮮烈な色彩と革新的な映像で描くレーシング映画。" },
    { year: 2012, type: 'wachowskis', title: "クラウド アトラス", context: "6つの時代で繰り広げられる物語が時空を超えてつながる壮大なドラマ。" },
    { year: 2015, type: 'wachowskis', title: "ジュピター", context: "宇宙の壮大な王位継承争いに巻き込まれた女性が運命に立ち向かう。" },
    { year: 2021, type: 'wachowskis', title: "マトリックス レザレクションズ", context: "再びマトリックスの世界に目覚めたネオの新たな戦いを描くシリーズ第4作。" },

    // Christopher Nolan
    { year: 1998, type: 'nolan', title: "フォロウィング", context: "時間軸を解体する手法の原点。" },
    { year: 2000, type: 'nolan', title: "メメント", context: "10分しか記憶が持たない男の逆行する時間。" },
    { year: 2002, type: 'nolan', title: "インソムニア", context: "不眠症に苛まれる刑事の倫理的境界。" },
    { year: 2005, type: 'nolan', title: "バットマン ビギンズ", context: "ヒーローを現実の恐怖と結びつける。" },
    { year: 2006, type: 'nolan', title: "プレステージ", context: "マジシャン同士の執念と自己犠牲。" },
    { year: 2008, type: 'nolan', title: "ダークナイト", context: "正義を揺さぶるジョーカーという混沌。" },
    { year: 2010, type: 'nolan', title: "インセプション", context: "潜在意識の階層を物理的空間として構築。" },
    { year: 2012, type: 'nolan', title: "ダークナイト ライジング", context: "伝説の終焉と新たな秩序への葛藤。" },
    { year: 2014, type: 'nolan', title: "インターステラー", context: "相対性理論と究極の親子愛。" },
    { year: 2017, type: 'nolan', title: "ダンケルク", context: "映像と音響で描く「生」の体験。" },
    { year: 2020, type: 'nolan', title: "TENET テネット", context: "時間の逆転と世界の救済。" },
    { year: 2023, type: 'nolan', title: "オッペンハイマー", context: "科学者の苦悩と原子の爆発。" },
    { year: 2026, type: 'nolan', title: "The Odyssey", context: "公開予定。ホメロスの叙事詩を基にした神話的アクション大作。IMAXフィルムカメラで撮影。" },

    // Denis Villeneuve
    { year: 1998, type: 'villeneuve', title: "8月32日、地球。", context: "交通事故を機に運命を模索する女性。" },
    { year: 2000, type: 'villeneuve', title: "渦", context: "運命の交錯と死、再生の物語。" },
    { year: 2009, type: 'villeneuve', title: "静かなる叫び", context: "大学乱射事件を静謐なモノクロで描く。" },
    { year: 2010, type: 'villeneuve', title: "灼熱の魂", context: "母の遺言を辿る衝撃的な悲劇の旅。" },
    { year: 2013, type: 'villeneuve', title: "プリズナーズ", context: "娘を誘拐された父の狂気と信仰。" },
    { year: 2013, type: 'villeneuve', title: "複製された男", context: "自分と同じ男を見つけた恐怖の迷宮。" },
    { year: 2015, type: 'villeneuve', title: "ボーダーライン", context: "麻薬戦争の闇と倫理の喪失。" },
    { year: 2016, type: 'villeneuve', title: "メッセージ", context: "言語と時間の認識、未知との対話。" },
    { year: 2017, type: 'villeneuve', title: "ブレードランナー 2049", context: "魂の所在を問うSFの金字塔の続編。" },
    { year: 2021, type: 'villeneuve', title: "DUNE/デューン 砂の惑星", context: "宇宙の運命を懸けた壮大な序章。" },
    { year: 2024, type: 'villeneuve', title: "DUNE/デューン 砂の惑星 PART2", context: "運命の覚醒と復讐の決戦。" },
    { year: 2026, type: 'villeneuve', title: "DUNE/デューン 砂の惑星 PART3", context: "公開予定。『砂の惑星救世主』を基に、ヴィルヌーヴ版三部作を締めくくる。" },

    // Steven Spielberg
    { year: 1971, type: 'spielberg', title: "激突！", context: "姿なき怪物（トラック）との極限のチェイス。" },
    { year: 1974, type: 'spielberg', title: "続・激突！/カージャック", context: "実話に基づいた、若き夫婦の逃避行と悲劇。" },
    { year: 1975, type: 'spielberg', title: "ジョーズ", context: "サメという恐怖を刻みつけた、近代ブロックバスターの原点。" },
    { year: 1977, type: 'spielberg', title: "未知との遭遇", context: "音と光による、宇宙知性との崇高な対話。" },
    { year: 1979, type: 'spielberg', title: "1941", context: "真珠湾攻撃直後の混乱を描く、ドタバタ戦争コメディ。" },
    { year: 1981, type: 'spielberg', title: "レイダース/失われたアーク", context: "冒険映画の完璧なスタイルを確立。" },
    { year: 1982, type: 'spielberg', title: "E.T.", context: "少年と異星人の、時代を超えた友情と別れ。" },
    { year: 1983, type: 'spielberg', title: "トワイライトゾーン/超次元の体験", context: "第2話「願い」を監督。魔法のような童話。" },
    { year: 1984, type: 'spielberg', title: "インディ・ジョーンズ/魔宮の伝説", context: "よりダークでスリリングな冒険の第2弾。" },
    { year: 1985, type: 'spielberg', title: "カラーパープル", context: "黒人女性の苦難と自立を描く、感動の人間ドラマ。" },
    { year: 1987, type: 'spielberg', title: "太陽の帝国", context: "戦時下の上海で生き抜く少年の目線。" },
    { year: 1989, type: 'spielberg', title: "インディ・ジョーンズ/最後の聖戦", context: "父と子の絆を軸に描く、聖杯を巡る旅。" },
    { year: 1989, type: 'spielberg', title: "オールウェイズ", context: "死を超えた愛を優しく描くファンタジー。" },
    { year: 1991, type: 'spielberg', title: "フック", context: "大人になったピーターパンの再会と冒険。" },
    { year: 1993, type: 'spielberg', title: "ジュラシック・パーク", context: "テクノロジーが恐竜に命を吹き込んだ瞬間。" },
    { year: 1993, type: 'spielberg', title: "シンドラーのリスト", context: "ホロコーストの悲劇と、人間性の灯火。" },
    { year: 1997, type: 'spielberg', title: "ロスト・ワールド/ジュラシック・パーク", context: "恐竜たちが再び牙を剥く、スリリングな続編。" },
    { year: 1997, type: 'spielberg', title: "アミスタッド", context: "奴隷船での反乱と、自由を求める裁判の記録。" },
    { year: 1998, type: 'spielberg', title: "プライベート・ライアン", context: "戦場の地獄を圧倒的な没入感で再現。" },
    { year: 2001, type: 'spielberg', title: "A.I.", context: "愛を乞う少年ロボットの、数千年の孤独。" },
    { year: 2002, type: 'spielberg', title: "マイノリティ・リポート", context: "運命は予知できるか。管理社会の近未来SF。" },
    { year: 2002, type: 'spielberg', title: "キャッチ・ミー・イフ・ユー・キャン", context: "天才詐欺師とFBI捜査官の、軽快な追跡劇。" },
    { year: 2004, type: 'spielberg', title: "ターミナル", context: "空港から出られなくなった男の、奇妙な共同生活。" },
    { year: 2005, type: 'spielberg', title: "宇宙戦争", context: "圧倒的な力による侵略と、崩壊する日常。" },
    { year: 2005, type: 'spielberg', title: "ミュンヘン", context: "オリンピック事件への報復と、暴力の連鎖。" },
    { year: 2008, type: 'spielberg', title: "インディ・ジョーンズ/クリスタル・スカルの王国", context: "19年ぶりの復活。冷戦下での新たな謎。" },
    { year: 2011, type: 'spielberg', title: "タンタンの冒険/ユニコーン号の秘密", context: "フルCGで描く、驚異のアクション・アドベンチャー。" },
    { year: 2011, type: 'spielberg', title: "戦火の馬", context: "一頭の馬の目を通して描かれる、第一次大戦の光景。" },
    { year: 2012, type: 'spielberg', title: "リンカーン", context: "奴隷制廃止に命を懸けた大統領、最後の数ヶ月。" },
    { year: 2015, type: 'spielberg', title: "ブリッジ・オブ・スパイ", context: "冷戦下のスパイ交換を巡る、手に汗握る交渉劇。" },
    { year: 2016, type: 'spielberg', title: "BFG：ビッグ・フレンドリー・ジャイアント", context: "孤独な巨人と少女の、心温まる友情の物語。" },
    { year: 2017, type: 'spielberg', title: "ペンタゴン・ペーパーズ/最高機密文書", context: "報道の自由を守り抜く者たちの、信念の闘い。" },
    { year: 2018, type: 'spielberg', title: "レディ・プレイヤー1", context: "ポップカルチャーへの愛とバーチャル世界の祝祭。" },
    { year: 2021, type: 'spielberg', title: "ウエスト・サイド・ストーリー", context: "不朽の名作ミュージカルを、現代の視点で見事に再構築。" },
    { year: 2022, type: 'spielberg', title: "フェイブルマンズ", context: "映画に魅せられた少年の、自伝的かつ残酷な家族の物語。" },
    { year: 2026, type: 'spielberg', title: "Disclosure Day", context: "公開予定。空の秘密と真実の開示をめぐる、スピルバーグのSFスリラー。" },

    // Martin Scorsese
    { year: 1967, type: 'scorsese', title: "ストリート・オブ・ノー・リターン", context: "スコセッシの長編デビュー作。ニューヨークの若者たち。" },
    { year: 1972, type: 'scorsese', title: "明日に処刑を…", context: "恐慌時代の列車強盗を描くアクション。" },
    { year: 1973, type: 'scorsese', title: "ミーン・ストリート", context: "リトル・イタリーの若者たちの暴力と宗教観。" },
    { year: 1974, type: 'scorsese', title: "アリスの恋", context: "自立を求めるシングルマザーの旅路。" },
    { year: 1976, type: 'scorsese', title: "タクシードライバー", context: "都会の孤独と狂気が爆発する、ベトナム後のアメリカ。" },
    { year: 1977, type: 'scorsese', title: "ニューヨーク・ニューヨーク", context: "ジャズの黄金期を描く、壮大なミュージカルドラマ。" },
    { year: 1978, type: 'scorsese', title: "ラスト・ワルツ", context: "伝説的バンド、ザ・バンドの解散コンサートの記録。" },
    { year: 1980, type: 'scorsese', title: "レイジング・ブル", context: "一人のボクサーの栄光と、自己破壊の記録。" },
    { year: 1983, type: 'scorsese', title: "キング・オブ・コメディ", context: "狂気的なファンによる、コメディアン誘拐劇。" },
    { year: 1985, type: 'scorsese', title: "アフター・アワーズ", context: "夜のニューヨークで繰り広げられる、悪夢のようなコメディ。" },
    { year: 1986, type: 'scorsese', title: "ハスラー2", context: "ポール・ニューマンとトム・クルーズ。世代交代のゲーム。" },
    { year: 1988, type: 'scorsese', title: "最後の誘惑", context: "イエス・キリストの人間としての葛藤を描く問題作。" },
    { year: 1990, type: 'scorsese', title: "グッドフェローズ", context: "マフィアの生き様を、目も眩むようなスピードで描く。" },
    { year: 1991, type: 'scorsese', title: "ケープ・フィアー", context: "復讐に燃える出所囚の恐怖。サイコスリラーの傑作。" },
    { year: 1993, type: 'scorsese', title: "エイジ・オブ・イノセンス/汚れなき情事", context: "19世紀のニューヨーク社交界。抑制された情熱の悲劇。" },
    { year: 1995, type: 'scorsese', title: "カジノ", context: "ラスベガスの支配と、人間の強欲な崩壊。" },
    { year: 1997, type: 'scorsese', title: "クンドゥン", context: "ダライ・ラマ14世の若き日の軌跡とチベットの苦難。" },
    { year: 1999, type: 'scorsese', title: "救命士", context: "夜の街を駆け抜ける救急救命士の、極限の精神状態。" },
    { year: 2002, type: 'scorsese', title: "ギャング・オブ・ニューヨーク", context: "ニューヨークの血塗られた誕生の歴史。" },
    { year: 2004, type: 'scorsese', title: "アビエイター", context: "ハワード・ヒューズの野望と病的なまでの完璧主義。" },
    { year: 2005, type: 'scorsese', title: "ボブ・ディラン ノー・ディレクション・ホーム", context: "ディランの若き日の苦悩と変遷を描く傑作ドキュメンタリー。" },
    { year: 2006, type: 'scorsese', title: "ディパーテッド", context: "裏切りと欺瞞。ネズミたちのデスゲーム。" },
    { year: 2008, type: 'scorsese', title: "シャイン・ア・ライト", context: "ローリング・ストーンズのライブを極上の映像で捉える。" },
    { year: 2010, type: 'scorsese', title: "シャッター アイランド", context: "孤島の精神病院で消えた囚人。謎が謎を呼ぶスリラー。" },
    { year: 2011, type: 'scorsese', title: "ジョージ・ハリスン/リヴィング・イン・ザ・マテリアル・ワールド", context: "ジョージの魂の遍歴を辿るドキュメンタリー。" },
    { year: 2011, type: 'scorsese', title: "ヒューゴの不思議な発明", context: "映画の創成期へのオマージュを込めたファンタジー。" },
    { year: 2013, type: 'scorsese', title: "ウルフ・オブ・ウォールストリート", context: "狂乱の金、ドラッグ、飽くなき野心の喜劇。" },
    { year: 2016, type: 'scorsese', title: "沈黙 -サイレンス-", context: "隠れキリシタンの苦悩と、神の沈黙への問い。" },
    { year: 2019, type: 'scorsese', title: "アイリッシュマン", context: "ある殺し屋の生涯と、アメリカの裏面史。" },
    { year: 2023, type: 'scorsese', title: "キラーズ・オブ・ザ・フラワームーン", context: "オセージ族の悲劇と、アメリカの深い罪。" },

    // Quentin Tarantino
    { year: 1992, type: 'tarantino', title: "レザボア・ドッグス", context: "強盗に失敗した男たちの、密室での心理戦と暴力。" },
    { year: 1994, type: 'tarantino', title: "パルプ・フィクション", context: "バラバラの時間軸が交差する、映画の文法を変えた傑作。" },
    { year: 1997, type: 'tarantino', title: "ジャッキー・ブラウン", context: "大人の哀愁と、緻密な騙し合いのファンク。" },
    { year: 2003, type: 'tarantino', title: "キル・ビル Vol.1", context: "日本のアニメ、時代劇、カンフーへの究極のラブレター。" },
    { year: 2004, type: 'tarantino', title: "キル・ビル Vol.2", context: "復讐の終焉。ザ・ブライドの母としての覚醒。" },
    { year: 2007, type: 'tarantino', title: "デス・プルーフ in グラインドハウス", context: "B級映画への偏愛。殺人カーと美女たちの壮絶な戦い。" },
    { year: 2009, type: 'tarantino', title: "イングロリアス・バスターズ", context: "映画という力で歴史を書き換える、カタルシスの頂点。" },
    { year: 2012, type: 'tarantino', title: "ジャンゴ 繋がれざる者", context: "奴隷制度への怒りを爆発させる、痛快なマカロニ・ウェスタン。" },
    { year: 2015, type: 'tarantino', title: "ヘイトフル・エイト", context: "雪山の密室で繰り広げられる、極限の疑心暗鬼。" },
    { year: 2019, type: 'tarantino', title: "ワンス・アポン・ア・タイム・イン・ハリウッド", context: "1969年、失われゆくハリウッドへの美しき挽歌。" },

    // David Fincher
    { year: 1992, type: 'fincher', title: "エイリアン3", context: "過酷な制作環境で産み落とされた、異色の三作目。" },
    { year: 1995, type: 'fincher', title: "セブン", context: "七つの大罪になぞらえた、究極の絶望のミステリー。" },
    { year: 1997, type: 'fincher', title: "ゲーム", context: "どこまでが現実か。悪夢のような誕生日プレゼント。" },
    { year: 1999, type: 'fincher', title: "ファイト・クラブ", context: "消費社会を破壊する、自己の分裂とカオス。" },
    { year: 2002, type: 'fincher', title: "パニック・ルーム", context: "家の中に閉じ込められた母子の、閉鎖空間での攻防。" },
    { year: 2007, type: 'fincher', title: "ゾディアック", context: "未解決事件の迷宮に、観客をも引きずり込む狂気の執念。" },
    { year: 2008, type: 'fincher', title: "ベンジャミン・バトン 数奇な人生", context: "若返っていく男の、美しくも残酷な時間の旅。" },
    { year: 2010, type: 'fincher', title: "ソーシャル・ネットワーク", context: "Facebook誕生に隠された、友情と野心と孤独。" },
    { year: 2011, type: 'fincher', title: "ドラゴン・タトゥーの女", context: "寒冷なスウェーデンを舞台にした、凍てつく復讐譚。" },
    { year: 2014, type: 'fincher', title: "ゴーン・ガール", context: "完璧な夫婦の裏に潜む、戦慄のメディア戦と狂気。" },
    { year: 2020, type: 'fincher', title: "MANK/マンク", context: "『市民ケーン』誕生の舞台裏。白黒で描く黄金期への愛憎。" },
    { year: 2023, type: 'fincher', title: "ザ・キラー", context: "緻密で非情な殺し屋の、ストイックな復讐劇。" },
    { year: 2026, type: 'fincher', title: "The Adventures of Cliff Booth", context: "公開予定。クリフ・ブースを主人公に、タランティーノ脚本をフィンチャーが監督するスピンオフ。" },

    // Wes Anderson
    { year: 1996, type: 'anderson', title: "アンソニーのハッピー・モーメント", context: "オフビートなユーモアと、愛すべきはみ出し者たち。" },
    { year: 1998, type: 'anderson', title: "天才マックスの世界", context: "奇妙な三角関係を描いた、青春映画の新たな地平。" },
    { year: 2001, type: 'anderson', title: "ザ・ロイヤル・テネンバウムズ", context: "バラバラの天才一家の、滑稽で切ない再生。" },
    { year: 2004, type: 'anderson', title: "ライフ・アクアティック", context: "海洋探検家チームの、シュールでカラフルな復讐の旅。" },
    { year: 2007, type: 'anderson', title: "ダージリン急行", context: "疎遠だった三兄弟。インドを走る列車での魂の再会。" },
    { year: 2009, type: 'anderson', title: "ファンタスティック Mr.FOX", context: "初のストップモーションアニメ。野生の知恵と家族愛。" },
    { year: 2012, type: 'anderson', title: "ムーンライズ・キングダム", context: "島全体を巻き込む、12歳の小さな逃避行。" },
    { year: 2014, type: 'anderson', title: "グランド・ブダペスト・ホテル", context: "失われた古き良き時代を、精密な箱庭に閉じ込めて。" },
    { year: 2018, type: 'anderson', title: "犬ヶ島", context: "日本へのオマージュ満載。ゴミの島での少年の冒険。" },
    { year: 2021, type: 'anderson', title: "フレンチ・ディスパッチ", context: "活字への愛が溢れる、動く短編小説集。" },
    { year: 2023, type: 'anderson', title: "アステロイド・シティ", context: "荒野の町で交差する、虚構と現実の迷宮。" },
    { year: 2025, type: 'anderson', title: "ザ・ザ・コルダのフェニキア計画", context: "砂漠のホテルを舞台に繰り広げられる、スパイたちの奇妙でカラフルな群像劇。" },

    // Kathryn Bigelow
    { year: 1981, type: 'bigelow', title: "ラブレス", context: "革ジャンのバイカー集団を描く、ビグローの単独長編デビュー作。" },
    { year: 1987, type: 'bigelow', title: "ニア・ダーク/月夜の出来事", context: "バイカーと吸血鬼を融合させた、夜のウェスタン。" },
    { year: 1990, type: 'bigelow', title: "ブルースチール", context: "女性警官と殺人鬼の息詰まる攻防。" },
    { year: 1991, type: 'bigelow', title: "ハートブルー", context: "波と極限状態に魅せられた男たちの、刹那の連帯。" },
    { year: 1995, type: 'bigelow', title: "ストレンジ・デイズ", context: "他者の記憶を体験する装置が呼ぶ、世紀末のカオス。" },
    { year: 2000, type: 'bigelow', title: "嵐の夜", context: "過去と現在が交錯する、孤島の殺人ミステリー。" },
    { year: 2002, type: 'bigelow', title: "K-19", context: "原子力潜水艦の事故。極限状況下での勇気と決断。" },
    { year: 2008, type: 'bigelow', title: "ハート・ロッカー", context: "爆発物処理班の、生と死が隣り合わせの依存。" },
    { year: 2012, type: 'bigelow', title: "ゼロ・ダーク・サーティ", context: "ビンラディン追跡の、過酷で冷徹な10年間の執念。" },
    { year: 2017, type: 'bigelow', title: "デトロイト", context: "差別と暴力が爆発した、デトロイト暴動の真実。" },
    { year: 2025, type: 'bigelow', title: "ハウス・オブ・ダイナマイト", context: "Netflixで配信された、米政府の緊迫したミサイル対応をリアルタイムで追う政治サスペンス。" },

    // Paul Thomas Anderson
    { year: 1996, type: 'pta', title: "ハードエイト", context: "ベテラン博打打ちと青年の奇妙な師弟関係を描いたデビュー作。" },
    { year: 1997, type: 'pta', title: "ブギーナイツ", context: "70-80年代ポルノ映画界の栄枯盛衰を群像劇として描く。" },
    { year: 1999, type: 'pta', title: "マグノリア", context: "L.A.を舞台に、交錯する人々の運命を圧倒的熱量で描く。" },
    { year: 2002, type: 'pta', title: "パンチドランク・ラブ", context: "孤独な男の不器用な愛を、鮮烈な色彩と音響で描く。" },
    { year: 2007, type: 'pta', title: "ゼア・ウィル・ビー・ブラッド", context: "石油王の強欲と信仰の衝突を描いた、アメリカの叙事詩。" },
    { year: 2012, type: 'pta', title: "ザ・マスター", context: "カリスマ的指導者と帰還兵の、魂の共鳴と反発。" },
    { year: 2014, type: 'pta', title: "インヒアレント・ヴァイス", context: "ヒッピー文化の終焉。混迷を極めるサイケデリック・ミステリー。" },
    { year: 2017, type: 'pta', title: "ファントム・スレッド", context: "完璧主義の仕立て屋と若きミューズ。究極の支配と愛。" },
    { year: 2021, type: 'pta', title: "リコリス・ピザ", context: "1970年代サンフェルナンド・バレー。若さと恋の狂騒曲。" },
    { year: 2025, type: 'pta', title: "One Battle After Another", context: "トマス・ピンチョンの小説を原作とした、PTA初のIMAX公開アクションコメディ。" },

    // George Miller
    { year: 1979, type: 'miller', title: "マッドマックス", context: "荒廃した近未来。家族を殺された警官の復讐劇。" },
    { year: 1981, type: 'miller', title: "マッドマックス2", context: "カーアクションの歴史を変えた、バイオレンスSFの最高峰。" },
    { year: 1983, type: 'miller', title: "トワイライトゾーン/超次元の体験", context: "第4話「2万フィートの戦慄」。飛行機の翼に潜む怪物を描く。" },
    { year: 1985, type: 'miller', title: "マッドマックス/サンダードーム", context: "シリーズ第3作。文明崩壊後の都市での闘いを描く。" },
    { year: 1987, type: 'miller', title: "イーストウィックの魔女たち", context: "3人の独身女性と、彼女らが呼び寄せた謎の男を巡るコメディ。" },
    { year: 1992, type: 'miller', title: "ロレンツォのオイル/命の詩", context: "難病の息子を救うため、医学の常識に挑む両親の実話。" },
    { year: 1998, type: 'miller', title: "ベイブ/都会へ行く", context: "都会へと迷い込んだ子ブタの冒険を描く、ダークなファンタジー。" },
    { year: 2006, type: 'miller', title: "ハッピー フィート", context: "歌えないがダンスが得意なペンギンの、勇気ある冒険。" },
    { year: 2011, type: 'miller', title: "ハッピー フィート2", context: "ペンギンたちの危機を救うべく、再びダンスで立ち上がる。" },
    { year: 2015, type: 'miller', title: "マッドマックス 怒りのデス・ロード", context: "狂気の世界でのノンストップ・アクション。映画表現の新地平。" },
    { year: 2022, type: 'miller', title: "アラビアンナイト 三千年の願い", context: "学者と魔人の対話を通じ、物語と欲望の正体を問う。" },
    { year: 2024, type: 'miller', title: "マッドマックス：フュリオサ", context: "若きフュリオサの、怒りと復讐に満ちた原点の物語。" },

    // Edgar Wright
    { year: 1995, type: 'wright', title: "A Fistful of Fingers", context: "ライトの長編デビュー作。西部劇へのオマージュに満ちたコメディ。" },
    { year: 2004, type: 'wright', title: "ショーン・オブ・ザ・デッド", context: "ゾンビと日常を融合させた、愛すべきゾンビ・コメディ。" },
    { year: 2007, type: 'wright', title: "ホット・ファズ", context: "田舎町の平穏の裏に隠された陰謀を暴く、痛快ポリス・アクション。" },
    { year: 2010, type: 'wright', title: "スコット・ピルグリム", context: "ゲーム的演出を駆使した、ポップで過激な青春ラブバトル。" },
    { year: 2013, type: 'wright', title: "ワールズ・エンド", context: "故郷のバーを巡る男たちの、ビールとSF的陰謀の一夜。" },
    { year: 2017, type: 'wright', title: "ベイビー・ドライバー", context: "音楽とカーアクションの完璧な同期。至福の没入体験。" },
    { year: 2021, type: 'wright', title: "ラストナイト・イン・ソーホー", context: "60年代ロンドンへの憧れが、悪夢へと変貌するホラー。" },
    { year: 2025, type: 'wright', title: "バトルランナー", context: "死のサバイバル番組に挑む男を描いた、スリリングなSFアクションリメイク。" },

    // Ryan Coogler
    { year: 2013, type: 'coogler', title: "フルートベール駅で", context: "理不尽に命を奪われた青年の、最後の一日を克明に描く。" },
    { year: 2015, type: 'coogler', title: "クリード チャンプを継ぐ男", context: "『ロッキー』の魂を継承し、新たな伝説を創り出した傑作。" },
    { year: 2018, type: 'coogler', title: "ブラックパンサー", context: "文化、アイデンティティ、正義を問う、MCUの金字塔。" },
    { year: 2022, type: 'coogler', title: "ブラックパンサー/ワカンダ・フォーエバー", context: "喪失を乗り越え、国と伝統を守る者たちの闘い。" },
    { year: 2025, type: 'coogler', title: "シナーズ", context: "1930年代アメリカ南部を舞台にした、漆黒のスーパーナチュラル・ホラー。" },

    // M. Night Shyamalan
    { year: 1992, type: 'shyamalan', title: "Praying with Anger", context: "インドに戻った青年の葛藤を描く、シャマランの長編監督デビュー作。" },
    { year: 1998, type: 'shyamalan', title: "翼のない天使", context: "祖父の死をきっかけに信仰と喪失を見つめる少年の成長譚。" },
    { year: 1999, type: 'shyamalan', title: "シックス・センス", context: "死者が見える少年と心理学者の交流を、静かな恐怖と喪失で描いた代表作。" },
    { year: 2000, type: 'shyamalan', title: "アンブレイカブル", context: "ヒーロー神話を日常の不穏さと身体の感覚から再解釈した作品。" },
    { year: 2002, type: 'shyamalan', title: "サイン", context: "家族の喪失と信仰の揺らぎを、宇宙からの脅威と重ねたSFスリラー。" },
    { year: 2004, type: 'shyamalan', title: "ヴィレッジ", context: "閉ざされた共同体の恐怖と、守るための嘘を寓話的に描く。" },
    { year: 2006, type: 'shyamalan', title: "レディ・イン・ザ・ウォーター", context: "集合住宅に現れた謎の女性をめぐる、現代の寓話的ファンタジー。" },
    { year: 2008, type: 'shyamalan', title: "ハプニング", context: "見えない異変が人々を襲う、環境不安と終末感を帯びたスリラー。" },
    { year: 2010, type: 'shyamalan', title: "エアベンダー", context: "四つの元素を操る世界を描く、アニメーション原作のファンタジー大作。" },
    { year: 2013, type: 'shyamalan', title: "アフター・アース", context: "荒廃した地球で父子が生存を試される、SFサバイバル作品。" },
    { year: 2015, type: 'shyamalan', title: "ヴィジット", context: "祖父母の家を訪れた姉弟が体験する違和感を、低予算ホラーとして再構築した復活作。" },
    { year: 2016, type: 'shyamalan', title: "スプリット", context: "多重人格の男に監禁された少女たちを描き、身体と怪物性を緊張感で押し出した作品。" },
    { year: 2019, type: 'shyamalan', title: "ミスター・ガラス", context: "『アンブレイカブル』から続くヒーロー神話を、精神病院の密室で収束させる。" },
    { year: 2021, type: 'shyamalan', title: "オールド", context: "急速に時間が進む浜辺で、家族と身体の変化をサスペンスとして描く。" },
    { year: 2023, type: 'shyamalan', title: "ノック 終末の訪問者", context: "世界の終わりを告げる訪問者たちと家族の選択を、閉鎖空間の緊張で描く。" },
    { year: 2024, type: 'shyamalan', title: "トラップ", context: "コンサート会場を舞台に、逃げ場のない罠と父娘関係を絡めたスリラー。" },

    // Greta Gerwig
    { year: 2017, type: 'gerwig', title: "レディ・バード", context: "誰もが経験する、故郷との決別と母への愛。" },
    { year: 2019, type: 'gerwig', title: "ストーリー・オブ・マイライフ", context: "時代に抗い、自らの筆で運命を切り拓く女性たち。" },
    { year: 2023, type: 'gerwig', title: "バービー", context: "完璧な世界から飛び出し、人間であることを肯定する。" },

    // Emerald Fennell
    { year: 2020, type: 'fennell', title: "プロミシング・ヤング・ウーマン", context: "復讐とケア、怒りとポップな色彩を交差させた長編監督デビュー作。" },
    { year: 2023, type: 'fennell', title: "Saltburn", context: "階級、欲望、視線のねじれをブラックユーモアで描く心理劇。" },

    // Damien Chazelle
    { year: 2009, type: 'chazelle', title: "ガイ・アンド・マデリン", context: "ヌーヴェルヴァーグへのオマージュを込めたジャズ・ミュージカル。" },
    { year: 2014, type: 'chazelle', title: "セッション", context: "狂気的な指導者とドラマー。魂を削るジャズの戦い。" },
    { year: 2016, type: 'chazelle', title: "ラ・ラ・ランド", context: "夢を追う二人。美しき色彩と、ビターな現実のミュージカル。" },
    { year: 2018, type: 'chazelle', title: "ファースト・マン", context: "月面着陸の裏にあった、一人の男の沈黙と死の影。" },
    { year: 2022, type: 'chazelle', title: "バビロン", context: "サイレントからトーキーへ。狂乱のハリウッドの黄金期。" },

    // Alex Garland
    { year: 2014, type: 'garland', title: "エクス・マキナ", context: "人工知能と欲望、支配の関係を、閉じた空間の心理戦として描いた監督デビュー作。" },
    { year: 2018, type: 'garland', title: "アナイアレイション -全滅領域-", context: "変異する自然と身体を通して、自己破壊と変容を描くSFスリラー。" },
    { year: 2020, type: 'garland', title: "DEVS/デヴス", context: "決定論と自由意志をめぐる問いを、テック企業の陰謀と静謐な映像で描いたシリーズ。", medium: "Series" },
    { year: 2022, type: 'garland', title: "MEN 同じ顔の男たち", context: "喪失と暴力の記憶を、民俗ホラーと身体的な悪夢へ変換した作品。" },
    { year: 2024, type: 'garland', title: "シビル・ウォー アメリカ最後の日", context: "分断されたアメリカを戦場として捉え、報道と暴力の距離を問うロードムービー。" },
    { year: 2025, type: 'garland', title: "Warfare", context: "戦場の一瞬をリアルタイム的な緊張で描く、レイ・メンドーサとの共同監督作。" },

    // Joseph Kosinski
    { year: 2010, type: 'kosinski', title: "トロン:レガシー", context: "デジタル世界の光と速度を、ミニマルな映像設計と音楽で再構築した長編監督デビュー作。" },
    { year: 2013, type: 'kosinski', title: "オブリビオン", context: "荒廃した地球と記憶の謎を、硬質なSFビジュアルで描いたSF作品。" },
    { year: 2017, type: 'kosinski', title: "オンリー・ザ・ブレイブ", context: "山火事に立ち向かう消防隊の連帯と犠牲を、実話をもとに描いたドラマ。" },
    { year: 2022, type: 'kosinski', title: "トップガン マーヴェリック", context: "実機撮影の身体感覚と継承の物語で、劇場体験の強さを再提示した大作。" },
    { year: 2022, type: 'kosinski', title: "スパイダーヘッド", context: "感情を操作する実験施設を舞台に、自由意志と管理を問うSFスリラー。" },
    { year: 2025, type: 'kosinski', title: "F1/エフワン", context: "モータースポーツの速度と身体感覚を、大型スクリーン向けの映像設計で描くレース映画。" },

    // Jordan Peele
    { year: 2017, type: 'peele', title: "ゲット・アウト", context: "人種差別の恐怖を、巧妙な伏線で描く新世代ホラー。" },
    { year: 2019, type: 'peele', title: "アス", context: "自分自身が最大の敵。鏡合わせの悪夢。" },
    { year: 2022, type: 'peele', title: "NOPE/ノープ", context: "空を見上げてはいけない。最悪の奇跡を目撃せよ。" },

    // Ari Aster
    { year: 2018, type: 'aster', title: "ヘレディタリー/継承", context: "逃れられない血脈の呪い。家族の崩壊の極致。" },
    { year: 2019, type: 'aster', title: "ミッドサマー", context: "白夜の村で繰り広げられる、美しき狂信の祝祭。" },
    { year: 2023, type: 'aster', title: "ボーはおそれている", context: "怪死した母のもとへ。壮大で不条理な、ある男の帰郷の旅。" },
    { year: 2025, type: 'aster', title: "エディントンへようこそ", context: "荒野の町エディントンを舞台に、ある夫婦が不条理な悪夢に巻き込まれるサスペンス。" },

    // James Wan
    { year: 2004, type: 'wan', title: "ソウ", context: "低予算ながら世界を震撼させた、ソリッド・シチュエーション・スリラーの金字塔。" },
    { year: 2007, type: 'wan', title: "デッド・サイレンス", context: "腹話術人形を題材にした、古典的で不気味なゴシック・ホラー。" },
    { year: 2007, type: 'wan', title: "狼の死刑宣告", context: "平穏な日常を壊された男の復讐を描く、壮絶なバイオレンス・アクション。" },
    { year: 2010, type: 'wan', title: "インシディアス", context: "家ではなく「息子」に何かが憑いている。新たな恐怖の扉を開いた傑作。" },
    { year: 2013, type: 'wan', title: "死霊館", context: "実在の心霊研究家夫妻の事件を描く、正統派にして最恐のホラー。" },
    { year: 2013, type: 'wan', title: "インシディアス 第2章", context: "前作の謎が解け明かされる。一家を襲うさらなる恐怖と過去の秘密。" },
    { year: 2015, type: 'wan', title: "ワイルド・スピード SKY MISSION", context: "シリーズ最大級のアクション。亡きポール・ウォーカーへの愛に溢れた一作。" },
    { year: 2016, type: 'wan', title: "死霊館 エンフィールド事件", context: "史上最長の心霊現象。恐怖演出の極致を見せつけた続編。" },
    { year: 2018, type: 'wan', title: "アクアマン", context: "海底の未知なる視覚体験。DCヒーローの新たな地平を切り拓いた大作。" },
    { year: 2021, type: 'wan', title: "マリグナント 狂暴な悪夢", context: "ジャンルの枠を超えた驚愕の展開。ジェームズ・ワンの狂気が炸裂する。" },
    { year: 2023, type: 'wan', title: "アクアマン/失われた王国", context: "失われた文明と家族の絆。ド派手な海洋アクション・アドベンチャー完結編。" },

    // Jon Favreau
    { year: 2001, type: 'favreau', title: "Made", context: "俳優仲間との軽妙な会話劇から始まる、ファヴローの長編監督デビュー作。" },
    { year: 2003, type: 'favreau', title: "エルフ", context: "クリスマス映画の定番となった、無邪気なユーモアに満ちたファンタジー・コメディ。" },
    { year: 2005, type: 'favreau', title: "ザスーラ", context: "ボードゲームが宇宙の冒険へ変わる、家族向けSFアドベンチャー。" },
    { year: 2008, type: 'favreau', title: "アイアンマン", context: "MCUの出発点となった、ヒーロー映画の新しい基準を作った作品。" },
    { year: 2010, type: 'favreau', title: "アイアンマン2", context: "スタークの自己破壊と継承を描き、MCUの世界観をさらに広げた続編。" },
    { year: 2011, type: 'favreau', title: "カウボーイ&エイリアン", context: "西部劇とSF侵略ものを掛け合わせたジャンル横断の大作。" },
    { year: 2014, type: 'favreau', title: "シェフ 三ツ星フードトラック始めました", context: "料理と移動を通して創作の喜びを取り戻す、軽やかなロードムービー。" },
    { year: 2016, type: 'favreau', title: "ジャングル・ブック", context: "実写とCGの境界を押し広げた、ディズニー古典の再構築。" },
    { year: 2019, type: 'favreau', title: "ライオン・キング", context: "フォトリアルCGで古典アニメーションを再構成した大型リメイク。" },

    // James Gunn
    { year: 2006, type: 'gunn', title: "スリザー", context: "B級ホラーとブラックユーモアを融合した、ガンの長編監督デビュー作。" },
    { year: 2010, type: 'gunn', title: "スーパー!", context: "普通の男がヒーローを名乗る、痛みと滑稽さに満ちた自警団映画。" },
    { year: 2014, type: 'gunn', title: "ガーディアンズ・オブ・ギャラクシー", context: "はみ出し者たちを家族へ変えた、音楽と宇宙活劇のMCU異色作。" },
    { year: 2017, type: 'gunn', title: "ガーディアンズ・オブ・ギャラクシー:リミックス", context: "父性と喪失をポップな宇宙絵巻として描いた続編。" },
    { year: 2021, type: 'gunn', title: "ザ・スーサイド・スクワッド", context: "悪党たちの使い捨て任務を、過激なユーモアと情で描いたDC作品。" },
    { year: 2022, type: 'gunn', title: "ピースメイカー", context: "『ザ・スーサイド・スクワッド』から続く、暴力と不器用な自己探求を描いたDCシリーズ。", medium: "Series" },
    { year: 2023, type: 'gunn', title: "ガーディアンズ・オブ・ギャラクシー:VOLUME 3", context: "チームの終章として、痛みを抱えた者たちの救済を描く。" },
    { year: 2025, type: 'gunn', title: "スーパーマン", context: "新たなDCユニバースの起点として、理想と優しさを背負うヒーロー像を再提示。" },

    // Joss Whedon
    { year: 1997, type: 'whedon', title: "バフィー 〜恋する十字架〜", context: "高校生活と怪物退治を重ね、若者の成長をジャンル横断の連続ドラマとして描いた代表作。", medium: "Series" },
    { year: 1999, type: 'whedon', title: "エンジェル", context: "『バフィー』から派生し、贖罪と都市の闇をよりノワール調に掘り下げたスピンオフシリーズ。", medium: "Series" },
    { year: 2002, type: 'whedon', title: "ファイヤーフライ 宇宙大戦争", context: "宇宙西部劇として、家族的な乗組員と辺境の自由を描いた短命ながら強い影響を残したシリーズ。", medium: "Series" },
    { year: 2005, type: 'whedon', title: "セレニティー", context: "テレビシリーズ『ファイヤーフライ』を映画として完結させたSF西部劇。" },
    { year: 2012, type: 'whedon', title: "アベンジャーズ", context: "複数のヒーローを一堂に集め、現代フランチャイズ映画の型を決定づけた作品。" },
    { year: 2015, type: 'whedon', title: "アベンジャーズ/エイジ・オブ・ウルトロン", context: "チームの亀裂と人工知能の暴走を描き、MCUの次章へつないだ大作。" },

    // Taika Waititi
    { year: 2007, type: 'waititi', title: "Eagle vs Shark", context: "不器用な恋と奇妙な距離感を描く、ワイティティの長編監督デビュー作。" },
    { year: 2010, type: 'waititi', title: "BOY", context: "ニュージーランドの少年の視点から、父への憧れと現実を描く成長譚。" },
    { year: 2014, type: 'waititi', title: "シェアハウス・ウィズ・ヴァンパイア", context: "吸血鬼の日常をモキュメンタリーで描いた、脱力系ホラー・コメディ。" },
    { year: 2016, type: 'waititi', title: "ハント・フォー・ザ・ワイルダーピープル", context: "孤独な少年と偏屈な男の逃避行を、ユーモアと温かさで描く。" },
    { year: 2017, type: 'waititi', title: "マイティ・ソー バトルロイヤル", context: "神話的ヒーローをポップで笑える冒険へ刷新したMCU作品。" },
    { year: 2019, type: 'waititi', title: "ジョジョ・ラビット", context: "戦時下の少年の幻想と成長を、風刺と痛みを交えて描いた寓話。" },
    { year: 2022, type: 'waititi', title: "ソー:ラブ&サンダー", context: "神と愛、喪失をカラフルなユーモアで包み込んだMCU続編。" },
    { year: 2023, type: 'waititi', title: "ネクスト・ゴール・ウィンズ", context: "弱小サッカーチームの再起を描く、実話ベースのスポーツ・コメディ。" },

    // Anthony & Joe Russo
    { year: 2002, type: 'russo', title: "ウェルカム・トゥ・コリンウッド", context: "失敗続きの小悪党たちを描く、軽妙な犯罪コメディ。" },
    { year: 2006, type: 'russo', title: "トラブル・マリッジ カレと私とデュプリーの場合", context: "結婚生活に居候が入り込む、ルッソ兄弟のスタジオ・コメディ。" },
    { year: 2014, type: 'russo', title: "キャプテン・アメリカ/ウィンター・ソルジャー", context: "スパイ・スリラーの緊張感でMCUの政治性を押し広げた作品。" },
    { year: 2016, type: 'russo', title: "シビル・ウォー/キャプテン・アメリカ", context: "理念の違いでヒーロー同士が衝突する、群像劇としての転換点。" },
    { year: 2018, type: 'russo', title: "アベンジャーズ/インフィニティ・ウォー", context: "巨大な群像と敗北の構造で、シリーズを最終局面へ導いた大作。" },
    { year: 2019, type: 'russo', title: "アベンジャーズ/エンドゲーム", context: "MCU初期サーガの集大成として、喪失と回復の物語を完結させた。" },
    { year: 2021, type: 'russo', title: "チェリー", context: "戦争、依存、犯罪へ落ちていく若者の人生を断片的に描くドラマ。" },
    { year: 2022, type: 'russo', title: "グレイマン", context: "世界各地を舞台に展開する、Netflix発の大規模スパイ・アクション。" },
    { year: 2025, type: 'russo', title: "エレクトリック・ステイト", context: "ロボットと少女の旅を描く、レトロフューチャーなSFアドベンチャー。" },

    // Sam Raimi
    { year: 1981, type: 'raimi', title: "死霊のはらわた", context: "低予算ながら過剰なカメラワークでホラー映画に強烈な衝撃を与えたデビュー作。" },
    { year: 1985, type: 'raimi', title: "XYZマーダーズ", context: "漫画的なテンポと犯罪劇を混ぜた、ライミ初期の異色コメディ。" },
    { year: 1987, type: 'raimi', title: "死霊のはらわたII", context: "ホラーとスラップスティックを極端に融合させたカルト続編。" },
    { year: 1990, type: 'raimi', title: "ダークマン", context: "怪人の悲哀とコミック的アクションを重ねたオリジナル・ヒーロー映画。" },
    { year: 1992, type: 'raimi', title: "キャプテン・スーパーマーケット", context: "中世へ飛ばされた男の暴走を描く、ホラー・ファンタジー活劇。" },
    { year: 1995, type: 'raimi', title: "クイック&デッド", context: "決闘の緊張をスタイリッシュに見せる、漫画的な西部劇。" },
    { year: 1998, type: 'raimi', title: "シンプル・プラン", context: "偶然手にした大金が人間関係を崩していく、抑制されたサスペンス。" },
    { year: 1999, type: 'raimi', title: "ラブ・オブ・ザ・ゲーム", context: "野球選手の最後の登板と人生の岐路を重ねるスポーツ・ドラマ。" },
    { year: 2000, type: 'raimi', title: "ギフト", context: "霊感を持つ女性が殺人事件に関わる、南部ゴシック調のミステリー。" },
    { year: 2002, type: 'raimi', title: "スパイダーマン", context: "コミック映画の表現を大衆的な感情と身体性で更新したヒーロー映画。" },
    { year: 2004, type: 'raimi', title: "スパイダーマン2", context: "ヒーローの責任と個人の幸福を描いた、シリーズ屈指の続編。" },
    { year: 2007, type: 'raimi', title: "スパイダーマン3", context: "増幅する欲望と赦しを、過剰なドラマとして描いた完結編。" },
    { year: 2009, type: 'raimi', title: "スペル", context: "呪いの恐怖を古典的かつ肉体的なホラー演出で叩きつける怪作。" },
    { year: 2013, type: 'raimi', title: "オズ はじまりの戦い", context: "魔法の国を大作ファンタジーとして描いた、ディズニー版前日譚。" },
    { year: 2022, type: 'raimi', title: "ドクター・ストレンジ/マルチバース・オブ・マッドネス", context: "MCUにライミ的ホラーと歪んだ異世界表現を持ち込んだ作品。" },

    // Shawn Levy
    { year: 2002, type: 'levy', title: "ビッグ・ライアー", context: "少年たちが映画プロデューサーに挑む、テンポのよいファミリー・コメディ。" },
    { year: 2003, type: 'levy', title: "ジャスト・マリッジ", context: "新婚旅行のトラブルを描く、軽快なロマンティック・コメディ。" },
    { year: 2006, type: 'levy', title: "ナイト ミュージアム", context: "夜の博物館が動き出す、レヴィの代表的なファミリー・アドベンチャー。" },
    { year: 2009, type: 'levy', title: "ナイト ミュージアム2", context: "スミソニアンを舞台に、さらに大きなスケールで歴史キャラクターが動き出す。" },
    { year: 2010, type: 'levy', title: "デート&ナイト", context: "平凡な夫婦が犯罪騒動に巻き込まれるアクション・コメディ。" },
    { year: 2011, type: 'levy', title: "リアル・スティール", context: "ロボット格闘と父子の再生を重ねた、感情豊かなSFスポーツ映画。" },
    { year: 2013, type: 'levy', title: "インターンシップ", context: "中年コンビがテック企業の研修に挑む職場コメディ。" },
    { year: 2014, type: 'levy', title: "ナイト ミュージアム/エジプト王の秘密", context: "シリーズの締めくくりとして、魔法の石板と別れを描く冒険作。" },
    { year: 2016, type: 'levy', title: "ストレンジャー・シングス 未知の世界", context: "製作総指揮と監督参加により、80年代映画的な冒険感を配信シリーズへ接続した代表的作品。", medium: "Series" },
    { year: 2021, type: 'levy', title: "フリー・ガイ", context: "ゲーム世界のモブが自我を得る、明るいメタ・アクション・コメディ。" },
    { year: 2022, type: 'levy', title: "アダム&アダム", context: "時間旅行と父子関係を重ねた、Netflix発のSFアドベンチャー。" },
    { year: 2024, type: 'levy', title: "デッドプール&ウルヴァリン", context: "R指定ヒーローの毒舌とマルチバース的祝祭を組み合わせたMCU作品。" },

    // Nia DaCosta
    { year: 2018, type: 'dacosta', title: "リトル・ウッズ", context: "地方の貧困と女性たちの選択を静かに描く、ダコスタの長編監督デビュー作。" },
    { year: 2021, type: 'dacosta', title: "キャンディマン", context: "都市伝説と人種の記憶を現代的に再解釈したホラー。" },
    { year: 2023, type: 'dacosta', title: "マーベルズ", context: "三人のヒーローの身体と力が交錯する、軽やかなMCUチームアップ。" },
    { year: 2025, type: 'dacosta', title: "Hedda", context: "イプセンの戯曲を現代的な心理劇として再構築した作品。" },

    // Chloé Zhao
    { year: 2015, type: 'zhao', title: "Songs My Brothers Taught Me", context: "先住民居留地の兄妹を自然光で見つめる、ジャオの長編監督デビュー作。" },
    { year: 2017, type: 'zhao', title: "ザ・ライダー", context: "負傷した若きロデオ選手の生を、ドキュメンタリー的な繊細さで描く。" },
    { year: 2020, type: 'zhao', title: "ノマドランド", context: "車上生活者たちの風景と孤独を、静かな詩情で捉えた作品。" },
    { year: 2021, type: 'zhao', title: "エターナルズ", context: "神話的ヒーロー群像を、時間と人間性の物語として描いたMCU作品。" },

    // Jon Watts
    { year: 2014, type: 'watts', title: "クラウン", context: "ピエロの衣装に呪われた男を描く、ワッツ初期のホラー。" },
    { year: 2015, type: 'watts', title: "COP CAR/コップ・カー", context: "少年たちが盗んだパトカーから危険へ踏み込む、緊張感あるスリラー。" },
    { year: 2017, type: 'watts', title: "スパイダーマン:ホームカミング", context: "青春映画の軽さでMCU版スパイダーマンを再起動した作品。" },
    { year: 2019, type: 'watts', title: "スパイダーマン:ファー・フロム・ホーム", context: "旅と喪失を通して、若きヒーローの自立を描いた続編。" },
    { year: 2021, type: 'watts', title: "スパイダーマン:ノー・ウェイ・ホーム", context: "マルチバース的再会と喪失を重ね、シリーズの節目となった大作。" },
    { year: 2024, type: 'watts', title: "ウルフズ", context: "二人の始末屋が同じ現場に現れる、スター共演のクライム・コメディ。" },

    // J.J. Abrams
    { year: 1998, type: 'abrams', title: "フェリシティの青春", context: "大学生活と恋愛を軸に、若者の選択と成長を繊細に描いた初期の青春シリーズ。", medium: "Series" },
    { year: 2001, type: 'abrams', title: "エイリアス", context: "二重生活を送る女性スパイを中心に、家族、陰謀、ミッションを高速で重ねる代表的シリーズ。", medium: "Series" },
    { year: 2004, type: 'abrams', title: "LOST", context: "無人島のサバイバルから始まり、謎と群像劇を世界的現象へ押し上げたミステリーシリーズ。", medium: "Series" },
    { year: 2006, type: 'abrams', title: "M:i:III", context: "テレビ的なスピード感と感情の軸を持ち込み、長編映画監督としてデビューしたスパイアクション。" },
    { year: 2008, type: 'abrams', title: "FRINGE/フリンジ", context: "超常科学と陰謀を軸に、ミステリーとSFを連続ドラマとして展開したシリーズ。", medium: "Series" },
    { year: 2009, type: 'abrams', title: "スター・トレック", context: "若い乗組員たちの出会いを描き、クラシックSFフランチャイズを現代的に再起動した作品。" },
    { year: 2011, type: 'abrams', title: "SUPER 8/スーパーエイト", context: "少年たちの映画作りと未知との遭遇を重ね、スピルバーグ的な冒険感を再解釈したSFドラマ。" },
    { year: 2013, type: 'abrams', title: "スター・トレック イントゥ・ダークネス", context: "復讐とテロリズムを軸に、再起動版スター・トレックをさらにアクション寄りに展開した続編。" },
    { year: 2015, type: 'abrams', title: "スター・ウォーズ/フォースの覚醒", context: "新世代のキャラクターを導入し、巨大フランチャイズを現代に再始動させたスペースオペラ。" },
    { year: 2019, type: 'abrams', title: "スター・ウォーズ/スカイウォーカーの夜明け", context: "続三部作の完結編として、血筋、記憶、継承をめぐる物語を締めくくった作品。" },

    // Matt Reeves
    { year: 1996, type: 'reeves', title: "ハッピィブルー", context: "親友の葬儀をきっかけに、恋と喪失を描くリーヴスの長編監督デビュー作。" },
    { year: 2008, type: 'reeves', title: "クローバーフィールド/HAKAISHA", context: "手持ちカメラの視点で都市崩壊を体験させる、怪獣映画の現代的再構築。" },
    { year: 2010, type: 'reeves', title: "モールス", context: "孤独な少年と吸血鬼の少女の関係を、冷たい静けさで描いたリメイク。" },
    { year: 2014, type: 'reeves', title: "猿の惑星:新世紀", context: "人類と猿の対立を、感情と政治のドラマとして描いたシリーズ再生の中核作。" },
    { year: 2017, type: 'reeves', title: "猿の惑星:聖戦記", context: "復讐と信仰を帯びた戦争映画として、シーザーの物語を荘厳に締めくくった作品。" },
    { year: 2022, type: 'reeves', title: "THE BATMAN-ザ・バットマン-", context: "若きバットマンを探偵映画とノワールの質感で再解釈したダークなヒーロー映画。" },

    // Dan Trachtenberg
    { year: 2016, type: 'trachtenberg', title: "10 クローバーフィールド・レーン", context: "地下シェルターという閉鎖空間で、外の脅威と内側の不信を緊張感たっぷりに描いた長編デビュー作。" },
    { year: 2022, type: 'trachtenberg', title: "プレデター：ザ・プレイ", context: "18世紀のコマンチ族の戦士を主人公に、プレデター神話をサバイバル映画として鮮やかに再起動した作品。" },
    { year: 2025, type: 'trachtenberg', title: "プレデター：最凶頂上決戦", context: "異なる時代の戦士たちとプレデターの戦いを描く、アンソロジー形式のアニメーション映画。" },
    { year: 2025, type: 'trachtenberg', title: "プレデター：バッドランド", context: "若きプレデターを主人公に据え、狩る側の視点からシリーズの世界を広げたSFアクション。" },

    // Robert Zemeckis
    { year: 1978, type: 'zemeckis', title: "抱きしめたい", context: "ビートルズ来米の熱狂を背景に、若者たちの一夜を描いた長編監督デビュー作。" },
    { year: 1980, type: 'zemeckis', title: "ユーズド・カー", context: "中古車販売店を舞台に、毒気のある笑いと勢いで描く初期コメディ。" },
    { year: 1984, type: 'zemeckis', title: "ロマンシング・ストーン 秘宝の谷", context: "冒険小説家が現実の冒険に巻き込まれる、軽快なアドベンチャー・ロマンス。" },
    { year: 1985, type: 'zemeckis', title: "バック・トゥ・ザ・フューチャー", context: "時間旅行と青春コメディを完璧に結びつけた、ポップ映画の金字塔。" },
    { year: 1988, type: 'zemeckis', title: "ロジャー・ラビット", context: "実写とアニメーションを融合させ、映画技術とノワール喜劇を結びつけた作品。" },
    { year: 1989, type: 'zemeckis', title: "バック・トゥ・ザ・フューチャー PART2", context: "未来と過去を交錯させ、時間改変のアイデアを加速させた続編。" },
    { year: 1990, type: 'zemeckis', title: "バック・トゥ・ザ・フューチャー PART3", context: "西部劇の形式で三部作を締めくくる、時間旅行シリーズの完結編。" },
    { year: 1992, type: 'zemeckis', title: "永遠に美しく…", context: "若さへの執着をブラックコメディと視覚効果で描いた風刺的ファンタジー。" },
    { year: 1994, type: 'zemeckis', title: "フォレスト・ガンプ/一期一会", context: "個人の人生とアメリカ現代史を視覚効果で重ね合わせた大衆映画の代表作。" },
    { year: 1997, type: 'zemeckis', title: "コンタクト", context: "科学、信仰、未知との対話を壮大なスケールで描いたSFドラマ。" },
    { year: 2000, type: 'zemeckis', title: "ホワット・ライズ・ビニース", context: "幽霊譚と夫婦の秘密をクラシカルなサスペンスとして組み立てた作品。" },
    { year: 2000, type: 'zemeckis', title: "キャスト・アウェイ", context: "孤島に取り残された男の時間と孤独を、身体的なサバイバルとして描いたドラマ。" },
    { year: 2004, type: 'zemeckis', title: "ポーラー・エクスプレス", context: "パフォーマンスキャプチャを大きく押し出した、技術実験性の高いクリスマス映画。" },
    { year: 2007, type: 'zemeckis', title: "ベオウルフ/呪われし勇者", context: "神話的英雄譚をデジタル映像で再構成したモーションキャプチャ作品。" },
    { year: 2009, type: 'zemeckis', title: "Disney's クリスマス・キャロル", context: "古典文学をデジタル表現で再構成し、幻想と恐怖を強調したクリスマス映画。" },
    { year: 2012, type: 'zemeckis', title: "フライト", context: "英雄的な緊急着陸の裏にある依存と罪を描いた、硬質な人間ドラマ。" },
    { year: 2015, type: 'zemeckis', title: "ザ・ウォーク", context: "綱渡りの実話を、空間体験と視覚効果で再現した伝記ドラマ。" },
    { year: 2016, type: 'zemeckis', title: "マリアンヌ", context: "戦時下の愛と疑念をクラシカルなスパイ・ロマンスとして描いた作品。" },
    { year: 2018, type: 'zemeckis', title: "マーウェン", context: "トラウマと創作の世界を、実写と人形的なイメージで交差させた作品。" },
    { year: 2020, type: 'zemeckis', title: "魔女がいっぱい", context: "ロアルド・ダール原作を、ブラックなファンタジーとして再映画化した作品。" },
    { year: 2022, type: 'zemeckis', title: "ピノキオ", context: "ディズニー古典を実写とCGで再構成した配信映画。" },
    { year: 2024, type: 'zemeckis', title: "Here", context: "固定された視点から、同じ場所に重なる時間と家族の記憶を描いた実験的ドラマ。" },

    // Yorgos Lanthimos
    { year: 2001, type: 'lanthimos', title: "My Best Friend", context: "ランティモスの初期長編。後年の不条理な人間観へつながるギリシャ時代の作品。" },
    { year: 2005, type: 'lanthimos', title: "キネッタ", context: "反復される行為と奇妙な距離感で、人間関係の不自然さを見つめる初期作。" },
    { year: 2009, type: 'lanthimos', title: "籠の中の乙女", context: "閉ざされた家族制度を不条理な寓話として描き、国際的評価を決定づけた作品。" },
    { year: 2011, type: 'lanthimos', title: "アルプス", context: "死者の代役を演じる人々を通じ、喪失と役割の奇妙な関係を描いた作品。" },
    { year: 2015, type: 'lanthimos', title: "ロブスター", context: "恋愛と社会制度を冷たいユーモアで寓話化した英語作品。" },
    { year: 2017, type: 'lanthimos', title: "聖なる鹿殺し", context: "罪と報復の構造を、神話的な不条理と不穏な身体感覚で描いたスリラー。" },
    { year: 2018, type: 'lanthimos', title: "女王陛下のお気に入り", context: "宮廷政治と欲望の駆け引きを、歪んだユーモアと視覚で描いた歴史劇。" },
    { year: 2023, type: 'lanthimos', title: "哀れなるものたち", context: "身体と自由をめぐる寓話を、極彩色の世界観で描いた奇想の成長譚。" },
    { year: 2024, type: 'lanthimos', title: "憐れみの3章", context: "支配、信仰、身体をめぐる複数の物語を、不条理なトーンで連ねたオムニバス。" },
    { year: 2025, type: 'lanthimos', title: "Bugonia", context: "陰謀論と権力への不信を、ブラックコメディとSF的設定で描いたリメイク作品。" },

    // Ridley Scott
    { year: 1977, type: 'scott', title: "デュエリスト/決闘者", context: "ナポレオン時代の執拗な決闘を、絵画的な光と構図で描いた長編監督デビュー作。" },
    { year: 1979, type: 'scott', title: "エイリアン", context: "宇宙船という閉鎖空間に身体的恐怖を持ち込んだ、SFホラーの金字塔。" },
    { year: 1982, type: 'scott', title: "ブレードランナー", context: "未来都市の視覚イメージと人造人間の存在論を結びつけたSF映画の古典。" },
    { year: 1985, type: 'scott', title: "レジェンド/光と闇の伝説", context: "幻想世界を濃密な美術と光で構築したダークファンタジー。" },
    { year: 1987, type: 'scott', title: "誰かに見られてる", context: "都市の視線と危険な恋愛を絡めた、スタイリッシュなサスペンス。" },
    { year: 1989, type: 'scott', title: "ブラック・レイン", context: "大阪を舞台に、異文化の衝突と犯罪都市のイメージを描いた刑事アクション。" },
    { year: 1991, type: 'scott', title: "テルマ&ルイーズ", context: "女性二人の逃避行を、自由と反抗のロードムービーとして刻んだ作品。" },
    { year: 1992, type: 'scott', title: "1492 コロンブス", context: "新大陸到達の神話と暴力を、壮大な歴史絵巻として描いた作品。" },
    { year: 1996, type: 'scott', title: "白い嵐", context: "帆船での訓練航海を通じ、若者たちの成長と自然の脅威を描くドラマ。" },
    { year: 1997, type: 'scott', title: "G.I.ジェーン", context: "女性兵士が過酷な訓練へ挑む、制度と身体の限界をめぐるアクションドラマ。" },
    { year: 2000, type: 'scott', title: "グラディエーター", context: "古代ローマの復讐劇を、重厚な美術と身体性で復活させた歴史大作。" },
    { year: 2001, type: 'scott', title: "ハンニバル", context: "レクター博士の美学と残酷性を、濃密な映像で描いたサスペンス続編。" },
    { year: 2001, type: 'scott', title: "ブラックホーク・ダウン", context: "市街戦の混乱を圧倒的な臨場感で描いた現代戦争映画。" },
    { year: 2003, type: 'scott', title: "マッチスティック・メン", context: "詐欺師の神経症と親子関係を軽妙に描いた犯罪ドラマ。" },
    { year: 2005, type: 'scott', title: "キングダム・オブ・ヘブン", context: "十字軍時代の信仰と政治を、壮大な歴史劇として描いた作品。" },
    { year: 2006, type: 'scott', title: "プロヴァンスの贈りもの", context: "南仏の風景と人生の再発見を描く、スコット作品では柔らかなロマンス。" },
    { year: 2007, type: 'scott', title: "アメリカン・ギャングスター", context: "麻薬王と刑事の対比を、社会の構造とともに描いた犯罪叙事詩。" },
    { year: 2008, type: 'scott', title: "ワールド・オブ・ライズ", context: "対テロ戦争の情報戦と不信を描いたスパイ・サスペンス。" },
    { year: 2010, type: 'scott', title: "ロビン・フッド", context: "伝説的英雄の起源を、戦争と政治の物語として再構築した歴史アクション。" },
    { year: 2012, type: 'scott', title: "プロメテウス", context: "人類の起源と創造主への問いを、エイリアン神話へ接続したSF大作。" },
    { year: 2013, type: 'scott', title: "悪の法則", context: "欲望と暴力の連鎖を、乾いた寓話として描いた犯罪スリラー。" },
    { year: 2014, type: 'scott', title: "エクソダス:神と王", context: "モーセの物語を大規模な映像で再構成した聖書叙事詩。" },
    { year: 2015, type: 'scott', title: "オデッセイ", context: "火星に取り残された宇宙飛行士の生存を、知性とユーモアで描いたSFサバイバル。" },
    { year: 2017, type: 'scott', title: "エイリアン:コヴェナント", context: "創造と怪物の系譜を、再びエイリアン神話の恐怖へ結びつけた作品。" },
    { year: 2017, type: 'scott', title: "ゲティ家の身代金", context: "誘拐事件と巨万の富の冷酷さを描いた実録サスペンス。" },
    { year: 2020, type: 'scott', title: "レイズド・バイ・ウルブス/神なき惑星", context: "人類の信仰と人工知能の母性をめぐる、SFシリーズの立ち上げを担った作品。", medium: "Series" },
    { year: 2021, type: 'scott', title: "最後の決闘裁判", context: "一つの事件を複数の視点から描き、権力と真実の構造を問う中世劇。" },
    { year: 2021, type: 'scott', title: "ハウス・オブ・グッチ", context: "ブランド一族の欲望と崩壊を、華やかな犯罪ドラマとして描いた作品。" },
    { year: 2023, type: 'scott', title: "ナポレオン", context: "英雄の神話と私生活の脆さを、戦争スペクタクルと心理劇で描いた歴史大作。" },
    { year: 2024, type: 'scott', title: "グラディエーターII", context: "ローマ帝国の暴力と継承を、前作の影を背負う新たな復讐劇として描いた続編。" }
];

const episodesData = {
    1954: "『ゴジラ』公開 ",
    1957: "スプートニク1号打ち上げ 宇宙時代の幕開け",
    1963: "ケネディ大統領暗殺事件",
    1969: "アポロ11号月面着陸",
    1973: "第1次オイルショック",
    1975: "『ジョーズ』公開 ブロックバスター映画の誕生",
    1977: "ILM設立",
    1979: "ウォークマン発売",
    1981: "MTV放送開始",
    1985: "レンタルビデオ普及",
    1986: "チェルノブイリ原発事故",
    1989: "ベルリンの壁崩壊",
    1991: "『ターミネーター2』公開 デジタル技術の躍進",
    1993: "『ジュラシック・パーク』公開 CGIの衝撃",
    1995: "インターネット普及開始",
    1999: "『マトリックス』公開 映像表現の革命",
    2001: "9.11同時多発テロ",
    2005: "YouTubeスタート",
    2007: "iPhone発売 / Netflix配信開始",
    2008: "リーマン・ショック / MCUスタート",
    2009: "『アバター』公開 3D映画の再定義",
    2013: "Netflix自社制作開始",
    2017: "#MeToo運動",
    2020: "COVID-19パンデミック",
    2022: "生成AIの爆発的普及",
    2023: "ハリウッド大規模スト",
};

const eventsData = [
    { year: 2000, title: "DVD市場が映画鑑賞の中心メディアとして拡大", category: "INDUSTRY" },
    { year: 2001, title: "9.11同時多発テロ", category: "WORLD" },
    { year: 2002, title: "『ロード・オブ・ザ・リング』三部作が世界的現象に", category: "FILM" },
    { year: 2003, title: "デジタル上映とVFX大作の存在感が拡大", category: "TECH" },
    { year: 2004, title: "Facebook開始", category: "TECH" },
    { year: 2005, title: "YouTubeスタート", category: "TECH" },
    { year: 2006, title: "Twitter開始", category: "TECH" },
    { year: 2007, title: "iPhone発売", category: "TECH" },
    { year: 2007, title: "Netflix配信開始", category: "INDUSTRY" },
    { year: 2008, title: "リーマン・ショック", category: "WORLD" },
    { year: 2008, title: "MCUスタート", category: "FILM" },
    { year: 2009, title: "『アバター』公開 3D映画の再定義", category: "FILM" },
    { year: 2010, title: "3D映画ブームが世界的に拡大", category: "INDUSTRY" },
    { year: 2011, title: "東日本大震災", category: "WORLD" },
    { year: 2012, title: "DisneyがLucasfilmを買収", category: "INDUSTRY" },
    { year: 2013, title: "Netflix自社制作開始", category: "INDUSTRY" },
    { year: 2014, title: "ストリーミング作品の映画賞・批評での存在感が拡大", category: "INDUSTRY" },
    { year: 2015, title: "『スター・ウォーズ』新三部作が始動", category: "FILM" },
    { year: 2016, title: "配信プラットフォームのオリジナル作品競争が加速", category: "INDUSTRY" },
    { year: 2017, title: "#MeToo運動", category: "INDUSTRY" },
    { year: 2018, title: "配信と劇場公開をめぐる議論が拡大", category: "INDUSTRY" },
    { year: 2019, title: "Disney+開始", category: "INDUSTRY" },
    { year: 2020, title: "COVID-19パンデミック", category: "WORLD" },
    { year: 2021, title: "劇場公開と配信同時公開の議論が本格化", category: "INDUSTRY" },
    { year: 2022, title: "生成AIの爆発的普及", category: "TECH" },
    { year: 2023, title: "ハリウッド大規模スト", category: "INDUSTRY" },
    { year: 2024, title: "生成AIと映像制作をめぐる議論が拡大", category: "TECH" },
    { year: 2025, title: "映画館体験と配信視聴の共存が定着", category: "INDUSTRY" },
    { year: 2026, title: "大作シリーズと作家映画の公開予定が集中", category: "FILM" }
];

window.directorsTimelineData = {
    directorsInfo,
    filmsData,
    episodesData,
    eventsData
};

function normalizeDirectorId(id, fallback = 'nolan') {
    return Object.prototype.hasOwnProperty.call(directorsInfo, id) ? id : fallback;
}

function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const d1 = normalizeDirectorId(params.get('d1'));
    const d2Param = params.get('d2');

    return {
        d1,
        d2: d2Param ? normalizeDirectorId(d2Param, null) : null
    };
}

function updateHeaderLabels(d1Id, d2Id) {
    const d1Info = directorsInfo[d1Id] || directorsInfo['nolan'];
    const d2Info = d2Id ? directorsInfo[d2Id] : null;

    const labels = document.querySelectorAll('.label');
    if (labels.length < 1) return;

    // Left Label
    labels[0].innerHTML = `<div class="label-surname">${d1Info.nameJa}</div><div class="label-ja">${d1Info.fullNameEn}</div>`;

    // Right Label
    if (labels.length > 1) {
        if (d2Info) {
            labels[1].style.display = 'block';
            labels[1].innerHTML = `<div class="label-surname">${d2Info.nameJa}</div><div class="label-ja">${d2Info.fullNameEn}</div>`;
        } else {
            labels[1].style.display = 'block';
            labels[1].innerHTML = `<div class="label-en">CONTEMPORARY WORKS</div><div class="label-ja">同時代の作品</div>`;
        }
    }
}

function jumpTo(year) {
    let el = document.getElementById(`year-${year}`);
    // If specific year not found, find the first available year after it
    if (!el) {
        const latestDataYear = Math.max(...filmsData.map(f => f.year));
        for (let y = year; y <= latestDataYear; y++) {
            el = document.getElementById(`year-${y}`);
            if (el) break;
        }
    }

    if (el) {
        const offset = 200; // Account for sticky header and jump-nav
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

function setupJumpNav() {
    document.querySelectorAll('.jump-nav button[data-jump-year]').forEach(btn => {
        btn.addEventListener('click', () => jumpTo(Number(btn.dataset.jumpYear)));
    });
}

function getWorkMedium(work) {
    return work.medium || 'Film';
}

function getWorkMediumClass(work) {
    return getWorkMedium(work).toLowerCase();
}

function getWorkSearchType(work) {
    return getWorkMedium(work) === 'Series' ? 'series' : 'movie';
}

function renderWorkCard(work, directorId) {
    return `
        <div class="film-card">
            <div class="card-content">
                <div class="work-medium ${getWorkMediumClass(work)}">${getWorkMedium(work)}</div>
                <h2 class="film-title">
                    <a href="https://www.google.com/search?q=${encodeURIComponent(work.title + ' ' + (directorsInfo[directorId]?.fullNameEn || '') + ' ' + getWorkSearchType(work))}" target="_blank" rel="noopener noreferrer">
                        ${work.title}
                    </a>
                </h2>
                <p class="film-context">${work.context}</p>
            </div>
        </div>
    `;
}

function renderTimeline() {
    const { d1, d2 } = getUrlParams();
    updateHeaderLabels(d1, d2);

    const container = document.getElementById('timeline-container');
    const labels = document.querySelector('.director-labels');
    container.innerHTML = '';

    // Handle single mode styling
    if (!d2) {
        container.classList.add('single-mode');
        if (labels) labels.classList.add('single-mode');
    } else {
        container.classList.remove('single-mode');
        if (labels) labels.classList.remove('single-mode');
    }
    // Calculate dynamic start year based on directors' debut
    const d1Debut = filmsData.find(f => f.type === d1)?.year || 1953;
    const d2Debut = d2 ? (filmsData.find(f => f.type === d2)?.year || Infinity) : Infinity;
    const debutYear = Math.min(d1Debut, d2Debut);

    // Set start year to debut year, but not earlier than our absolute floor
    const startYear = Math.max(1953, debutYear);
    const latestDataYear = Math.max(...filmsData.map(f => f.year));
    const currentYear = new Date().getFullYear();
    const endYear = Math.max(currentYear, latestDataYear);

    // Update jump nav visibility based on start year
    document.querySelectorAll('.jump-nav button[data-jump-year]').forEach(btn => {
        const jumpYear = Number(btn.dataset.jumpYear);
        if (jumpYear < Math.floor(startYear / 10) * 10) {
            btn.style.display = 'none';
        } else {
            btn.style.display = 'inline-block';
        }
    });

    // Add 50s/60s buttons if needed
    const jumpNav = document.querySelector('.jump-nav');
    if (startYear < 1960 && !document.getElementById('jump-1950')) {
        const btn50 = document.createElement('button');
        btn50.id = 'jump-1950';
        btn50.textContent = '50s';
        btn50.dataset.jumpYear = '1950';
        btn50.addEventListener('click', () => jumpTo(1950));
        jumpNav.prepend(btn50);
    }
    if (startYear < 1970 && !document.getElementById('jump-1960')) {
        const btn60 = document.createElement('button');
        btn60.id = 'jump-1960';
        btn60.textContent = '60s';
        btn60.dataset.jumpYear = '1960';
        btn60.addEventListener('click', () => jumpTo(1960));
        // Insert after 50s if it exists
        const btn50 = document.getElementById('jump-1950');
        if (btn50) {
            btn50.after(btn60);
        } else {
            jumpNav.prepend(btn60);
        }
    }

    // Add future/now highlight
    for (let year = startYear; year <= endYear; year++) {
        const row = document.createElement('div');
        const isNow = year === currentYear;
        row.className = `timeline-row ${isNow ? 'is-current' : ''}`;
        row.id = `year-${year}`;

        const worksLeft = filmsData.filter(f => f.year === year && f.type === d1);
        const worksRight = d2
            ? filmsData.filter(f => f.year === year && f.type === d2)
            : null;

        // Single mode: Fetch other films from same year
        const otherFilms = (!d2)
            ? filmsData.filter(f => f.year === year && f.type !== d1)
            : [];

        const episode = episodesData[year] || (isNow ? "THE PRESENT / AI ERA" : "");
        row.innerHTML = `
            <div class="side nolan-side">
                ${worksLeft.map(work => renderWorkCard(work, d1)).join('')}
            </div>

            <div class="center-axis">
                <div class="year-label">${year}</div>
                <div class="episode-label">${episode || ''}</div>
            </div>

            <div class="side villeneuve-side">
                ${d2 ? worksRight.map(work => renderWorkCard(work, d2)).join('') : (otherFilms.length > 0 ? `
                    <div class="other-films-container">
                        ${otherFilms.map(f => `
                            <div class="other-film-item" data-director-id="${f.type}" role="button" tabindex="0">
                                <span class="other-film-title">『${f.title}』</span>
                            </div>
                        `).join('')}
                    </div>
                ` : '')}
            </div>
        `;
        row.querySelectorAll('.other-film-item').forEach(item => {
            const openComparison = () => {
                window.location.href = `timeline.html?d1=${d1}&d2=${item.dataset.directorId}`;
            };

            item.addEventListener('click', openComparison);
            item.addEventListener('keydown', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openComparison();
                }
            });
        });
        container.appendChild(row);
    }
}
if (document.getElementById('timeline-container')) {
    setupJumpNav();
    renderTimeline();
}
