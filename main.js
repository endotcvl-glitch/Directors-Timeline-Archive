// --- Master Data ---
const directorsInfo = {
    'kubrick': { fullNameEn: 'STANLEY KUBRICK', nameJa: 'スタンリー・キューブリック', surname: 'KUBRICK', keywords: '完璧主義 / 徹底した構図 / 哲学的' },
    'lucas': { fullNameEn: 'GEORGE LUCAS', nameJa: 'ジョージ・ルーカス', surname: 'LUCAS', keywords: 'スペースオペラ / デジタル革命 / 冒険の神話' },
    'spielberg': { fullNameEn: 'STEVEN SPIELBERG', nameJa: 'スティーヴン・スピルバーグ', surname: 'SPIELBERG', keywords: '驚異の物語 / 圧倒的映画術 / ヒューマニズム' },
    'scorsese': { fullNameEn: 'MARTIN SCORSESE', nameJa: 'マーティン・スコセッシ', surname: 'SCORSESE', keywords: 'マフィアと信仰 / 移動撮影 / 魂の救済' },
    'lynch': { fullNameEn: 'DAVID LYNCH', nameJa: 'デヴィッド・リンチ', surname: 'LYNCH', keywords: '悪夢と不条理 / サウンドデザイン / 超現実主義' },
    'coen': { fullNameEn: 'JOEL & ETHAN COEN', nameJa: 'ジョエル＆イーサン・コーエン', surname: 'COENS', keywords: 'ブラックユーモア / 皮肉な運命 / 緻密な脚本' },
    'burton': { fullNameEn: 'TIM BURTON', nameJa: 'ティム・バートン', surname: 'BURTON', keywords: 'ゴシック・ファンタジー / 異形の愛 / 独創的ビジュアル' },
    'bigelow': { fullNameEn: 'KATHRYN BIGELOW', nameJa: 'キャスリン・ビグロー', surname: 'BIGELOW', keywords: '緊迫のリアリズム / 極限の暴力 / 骨太な演出' },
    'pta': { fullNameEn: 'PAUL THOMAS ANDERSON', nameJa: 'ポール・トーマス・アンダーソン', surname: 'PTA', keywords: '重厚な人間ドラマ / 狂気と愛 / 圧倒的演出力' },
    'miller': { fullNameEn: 'GEORGE MILLER', nameJa: 'ジョージ・ミラー', surname: 'MILLER', keywords: '荒野のバイオレンス / 怒涛のアクション / 視覚的物語' },
    'wright': { fullNameEn: 'EDGAR WRIGHT', nameJa: 'エドガー・ライト', surname: 'WRIGHT', keywords: '音楽との同期 / 高速カット割 / 究極のジャンル愛' },
    'coogler': { fullNameEn: 'RYAN COOGLER', nameJa: 'ライアン・クーグラー', surname: 'COOGLER', keywords: 'アイデンティティ / 魂の継承 / 圧倒的躍動感' },
    'fincher': { fullNameEn: 'DAVID FINCHER', nameJa: 'デイヴィッド・フィンチャー', surname: 'FINCHER', keywords: '完璧なデジタル美 / 徹底した情報量 / 冷徹な視点' },
    'tarantino': { fullNameEn: 'QUENTIN TARANTINO', nameJa: 'クエンティン・タランティーノ', surname: 'TARANTINO', keywords: '饒舌な会話劇 / 映画へのオマージュ / 鮮烈な暴力' },
    'anderson': { fullNameEn: 'WES ANDERSON', nameJa: 'ウェス・アンダーソン', surname: 'ANDERSON', keywords: 'シンメトリー構図 / 色彩設計 / 独自世界観' },
    'nolan': { fullNameEn: 'CHRISTOPHER NOLAN', nameJa: 'クリストファー・ノーラン', surname: 'NOLAN', keywords: '非線形な時間軸 / 実写至上主義 / 究極の没入体験' },
    'villeneuve': { fullNameEn: 'DENIS VILLENEUVE', nameJa: 'ドゥニ・ヴィルヌーヴ', surname: 'VILLENEUVE', keywords: '壮大な静謐 / 映像美の極致 / 深遠なテーマ' },
    'wachowskis': { fullNameEn: 'THE WACHOWSKIS', nameJa: 'ラナ＆リリー・ウォシャウスキー', surname: 'WACHOWSKIS', keywords: '革新的ビジュアル / サイバーパンク / 運命と解放' },
    'gerwig': { fullNameEn: 'GRETA GERWIG', nameJa: 'グレタ・ガーウィグ', surname: 'GERWIG', keywords: '現代女性の肖像 / 知的なユーモア / 瑞々しい感性' },
    'chazelle': { fullNameEn: 'DAMIEN CHAZELLE', nameJa: 'デイミアン・チャゼル', surname: 'CHAZELLE', keywords: '音楽と情熱 / 完璧なリズム / 夢と現実の交差' },
    'peele': { fullNameEn: 'JORDAN PEELE', nameJa: 'ジョーダン・ピール', surname: 'PEELE', keywords: '社会派ホラー / 緻密な伏線 / 異質な恐怖' },
    'aster': { fullNameEn: 'ARI ASTER', nameJa: 'アリ・アスター', surname: 'ASTER', keywords: '家族の崩壊 / 逃れられない呪い / 圧倒的不安感' },
    'wan': { fullNameEn: 'JAMES WAN', nameJa: 'ジェームズ・ワン', surname: 'WAN', keywords: 'ホラーの帝王 / 恐怖の視覚化 / スリラーの極致' }
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
    { year: 1990, type: 'lynch', title: "ワイルド・アット・ハート", context: "逃避行を続ける恋人たちを描いた、過激で情熱的なロードムービー。" },
    { year: 1992, type: 'lynch', title: "ツイン・ピークス/ローラ・パーマー最期の7日間", context: "ドラマの前日譚。ローラ・パーマー'の死に至る最後の1週間。" },
    { year: 1997, type: 'lynch', title: "ロスト・ハイウェイ", context: "記憶とアイデンティティが交錯する、悪夢のようなミステリー・スリラー。" },
    { year: 1999, type: 'lynch', title: "ストレイト・ストーリー", context: "疎遠だった兄に会うため、トラクターで旅をした老人の実話に基づく温かな物語。" },
    { year: 2001, type: 'lynch', title: "マルホランド・ドライブ", context: "夢と現実が溶け合う、ハリウッドの闇と幻影を鮮烈に描いた傑作。" },
    { year: 2006, type: 'lynch', title: "インランド・エンパイア", context: "女優が次第に現実と虚構の境界を失っていく、実験的な長編。" },

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

    // Greta Gerwig
    { year: 2017, type: 'gerwig', title: "レディ・バード", context: "誰もが経験する、故郷との決別と母への愛。" },
    { year: 2019, type: 'gerwig', title: "ストーリー・オブ・マイライフ", context: "時代に抗い、自らの筆で運命を切り拓く女性たち。" },
    { year: 2023, type: 'gerwig', title: "バービー", context: "完璧な世界から飛び出し、人間であることを肯定する。" },

    // Damien Chazelle
    { year: 2009, type: 'chazelle', title: "ガイ・アンド・マデリン", context: "ヌーヴェルヴァーグへのオマージュを込めたジャズ・ミュージカル。" },
    { year: 2014, type: 'chazelle', title: "セッション", context: "狂気的な指導者とドラマー。魂を削るジャズの戦い。" },
    { year: 2016, type: 'chazelle', title: "ラ・ラ・ランド", context: "夢を追う二人。美しき色彩と、ビターな現実のミュージカル。" },
    { year: 2018, type: 'chazelle', title: "ファースト・マン", context: "月面着陸の裏にあった、一人の男の沈黙と死の影。" },
    { year: 2022, type: 'chazelle', title: "バビロン", context: "サイレントからトーキーへ。狂乱のハリウッドの黄金期。" },

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
    { year: 2023, type: 'wan', title: "アクアマン/失われた王国", context: "失われた文明と家族の絆。ド派手な海洋アクション・アドベンチャー完結編。" }
];

const episodesData = {
    1954: "『ゴジラ』公開 特撮映画の金字塔",
    1957: "スプートニク1号打ち上げ 宇宙時代の幕開け",
    1961: "ガガーリン 世界初の有人宇宙飛行",
    1963: "ケネディ大統領暗殺事件",
    1964: "東京オリンピック開催",
    1969: "アポロ11号月面着陸",
    1973: "第1次オイルショック",
    1975: "『ジョーズ』公開 ブロックバスター映画の誕生",
    1977: "ILM設立 / 『スター・ウォーズ』公開",
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
    2011: "東日本大震災",
    2013: "Netflix自社制作開始",
    2017: "#MeToo運動",
    2020: "COVID-19パンデミック",
    2022: "生成AIの爆発的普及",
    2023: "ハリウッド大規模スト",
    2024: "Apple Vision Pro発売",
    2025: "『エディントンへようこそ』等公開 配信と劇場の多様化",
    2026: "ノーラン『The Odyssey』、スピルバーグ『Disclosure Day』など注目作の公開予定"
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
    labels[0].innerHTML = `<div class="label-surname">${d1Info.surname || d1Info.fullNameEn}</div><div class="label-ja">${d1Info.nameJa}</div>`;

    // Right Label
    if (labels.length > 1) {
        if (d2Info) {
            labels[1].style.display = 'block';
            labels[1].innerHTML = `<div class="label-surname">${d2Info.surname || d2Info.fullNameEn}</div><div class="label-ja">${d2Info.nameJa}</div>`;
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

        const filmLeft = filmsData.find(f => f.year === year && f.type === d1);
        const filmRight = d2
            ? filmsData.find(f => f.year === year && f.type === d2)
            : null;

        // Single mode: Fetch other films from same year
        const otherFilms = (!d2)
            ? filmsData.filter(f => f.year === year && f.type !== d1)
            : [];

        const episode = episodesData[year] || (isNow ? "THE PRESENT / AI ERA" : "");
        row.innerHTML = `
            <div class="side nolan-side">
                ${filmLeft ? `
                    <div class="film-card">
                        <div class="card-content">
                            <h2 class="film-title">
                                <a href="https://www.google.com/search?q=${encodeURIComponent(filmLeft.title + ' ' + (directorsInfo[d1]?.fullNameEn || '') + ' movie')}" target="_blank" rel="noopener noreferrer">
                                    ${filmLeft.title}
                                </a>
                            </h2>
                            <p class="film-context">${filmLeft.context}</p>
                        </div>
                    </div>
                ` : ''}
            </div>

            <div class="center-axis">
                <div class="year-label">${year}</div>
                <div class="episode-label">${episode || ''}</div>
            </div>

            <div class="side villeneuve-side">
                ${filmRight ? `
                    <div class="film-card">
                        <div class="card-content">
                            <h2 class="film-title">
                                <a href="https://www.google.com/search?q=${encodeURIComponent(filmRight.title + ' ' + (directorsInfo[d2]?.fullNameEn || '') + ' movie')}" target="_blank" rel="noopener noreferrer">
                                    ${filmRight.title}
                                </a>
                            </h2>
                            <p class="film-context">${filmRight.context}</p>
                        </div>
                    </div>
                ` : (otherFilms.length > 0 ? `
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
setupJumpNav();
renderTimeline();
