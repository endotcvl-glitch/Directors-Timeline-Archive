# Directors' Timeline Archive Design System

## 目的

このドキュメントは、Directors' Timeline Archive の見た目と操作感を一貫させるためのデザイン指針です。

このサイトの主役は、映画監督、作品、年代、時代背景をタイムラインとして眺める体験です。装飾や強い演出ではなく、余白、罫線、文字の強弱で情報を整理します。

## デザイン原則

- ミニマルでタイポグラフィ中心にする。
- ライトグレー基調を維持する。
- 装飾は増やしすぎず、線、余白、文字の階層で見せる。
- Apple UI / Bloomberg 的な、静かで情報整理された印象を目指す。
- 映画ブログやレビューサイトのような情緒的な見せ方に寄せすぎない。
- データベース的な客観性を保ちつつ、Editor's Notes では制作者の視点を控えめに見せる。
- PC表示の見た目は大きく崩さず、スマホでは無理に詰め込まない。

## カラー

現在の基本カラーは `style.css` の `:root` で管理する。

```css
:root {
    --bg-color: #f0f0f0;
    --text-color: #1a1a1a;
    --accent-color: #57545b;
    --accent-hover-color: #48434c;
    --text-hover-color: #b39562;
    --link-color: var(--accent-color);
    --link-hover-color: var(--text-hover-color);
    --button-color: var(--accent-color);
    --button-hover-color: var(--accent-hover-color);
    --timeline-color: var(--accent-color);
    --timeline-tint: rgba(87, 84, 91, 0.06);
    --global-nav-bg: #48434c;
    --secondary-text: #666666;
    --line-color: #d8d8d8;
}
```

### 使い分け

- `--bg-color`: ページ背景。サイト全体のライトグレー。
- `--text-color`: 主要テキスト。見出し、本文。
- `--accent-color`: 強い操作、選択状態、強調線など。現在はグレイッシュな `#57545b`。
- `--accent-hover-color`: ボタン背景など、濃色のhover状態に使うグレイッシュカラー。
- `--text-hover-color`: リンクやテキストのhover色。現在は `#b39562`。
- `--link-color`: 本文内リンクや操作リンク。
- `--button-color`: ボタン、選択状態、大きな導線。
- `--timeline-color`: タイムラインの軸線や現在年の強調。
- `timeline.html` の中央年代軸の縦ラインは、ロゴ色に合わせて `#a08257` を使う。
- `#a08257`: ロゴ色。トップページのセクション見出し、Editor's Notes の「この監督のこの一本」、timelineページの中央年代軸に使う。
- `--global-nav-bg`: 全ページ共通のグローバルナビ背景色。
- `--secondary-text`: 補助情報、説明文、メタ情報。
- `--line-color`: 区切り線、カード境界、静かなグルーピング。

### 避けること

- 派手なアクセントカラーを増やさない。
- グラデーションや装飾的な色面を主役にしない。
- ページごとに独自カラーを作らない。

## タイポグラフィ

テキストデザインは Figma の `design-system`（node `45:5`）を基準にし、`style.css` の `:root` で管理する。

Gen Interface JPは、全HTMLの`head`からjsDelivr CDN版のRegular（400）とBold（700）を読み込む。

```html
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gen-interface-jp@0.8.0/cdn/400.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gen-interface-jp@0.8.0/cdn/700.css">
```

```css
:root {
    --font-interface: 'Gen Interface JP', sans-serif;
    --font-sans: 'Gen Interface JP', sans-serif;
    --font-serif: 'Gen Interface JP', sans-serif;
    --font-title: 'Gen Interface JP', sans-serif;
    --font-number: 'Roboto', 'Gen Interface JP', sans-serif;
    --title-letter-spacing: 0.12em;
}
```

### Figmaテキストスケール

見出しは `Gen Interface JP Bold`（`700`）、本文は `Gen Interface JP Regular`（`400`）を使用する。どちらも行間は `1.5`、字間は `0.04em` とする。

| トークン | 見出し | 本文 |
| --- | ---: | ---: |
| XXXL | `56px` | — |
| XXL | `44px` | — |
| XL | `32px` | `18px` |
| L | `28px` | `16px` |
| M | `20px` | `15px` |
| S | `18px` | `13px` |
| XS | `16px` | `11px` |
| XXS | `13px` | `10px` |

CSS変数は以下を使う。

```css
:root {
    --text-heading-xxxl: 56px;
    --text-heading-xxl: 44px;
    --text-heading-xl: 32px;
    --text-heading-l: 28px;
    --text-heading-m: 20px;
    --text-heading-s: 18px;
    --text-heading-xs: 16px;
    --text-heading-xxs: 13px;
    --text-body-xl: 18px;
    --text-body-l: 16px;
    --text-body-m: 15px;
    --text-body-s: 13px;
    --text-body-xs: 11px;
    --text-body-xxs: 10px;
    --text-line-height: 1.5;
    --text-letter-spacing: 0.04em;
}
```

既存サイトへの割り当ては、現状の見た目に最も近い段階を選ぶ。ページタイトルは見出し/XL、セクション見出しは見出し/L、カード見出しは見出し/MまたはS、標準本文は本文/LまたはM、補助文は本文/SまたはXSを基本とする。ヒーローロゴと数字・年号・日付のサイズ体系はこの変更の対象外とする。

### 基本方針

- 日本語の見出し・本文・通常UIは `--font-interface` を使う。
- HTMLテキストは原則として `--font-interface` を使う。既存の `--font-sans`、`--font-serif`、`--font-title` は互換用の別名として同じフォントを参照する。
- SVGで表示するサイトロゴはフォント統一の対象外とする。
- 年号、日付、作品年など数字を見せる場面は `--font-number` を使う。
- 文字の強弱は、サイズ、太さ、色、余白で作る。
- 文字間は基本的に詰めすぎない。負の letter-spacing は使わない。

### 主な階層

- サイトタイトル: `--font-title`（Gen Interface JP）、大文字、広めの letter-spacing。
- ページタイトル: 見出し/XL（`32px`）。個別記事の大見出しなど、既存表示が大きい箇所は見出し/XXL（`44px`）。
- セクション見出し: 見出し/L（`28px`）、`font-weight: 700`、`#a08257`、letter-spacing `0.04em`。
- 数字: `--font-number`、監督一覧の年代見出し、timelineの年号、年代ページの年号、今日は何の日の日付、NEWSの日付、コラム作品年など、年号や日付に使う。letter-spacing は文脈に応じてやや広めにする。
- 本文: `--font-interface`、読みやすい行間を優先。
- 補助テキスト: `--secondary-text`、小さめ。
- 操作リンク: 太字、小さめ、letter-spacing をやや広くする。

### 使用箇所別のサイズ

主な画面上の見出し・年号は以下を基準にする。

| 用途 | セレクタ | サイズ / ウエイト / 字間 |
| --- | --- | --- |
| ページタイトル | `.page-hero h1` | `32px`（見出し/XL）/ `700` / `0.04em` |
| セクション見出し | `.section-heading h2` | `28px`（見出し/L）/ `700` / `0.04em` |
| カード / リスト見出し | `.explore-path-title` / `.theme-item h3` / `.item-name-ja` / `.year-film-item h4` / `.today-event-card h2` / `.notice-item h3` / `.note-card-*` | サイズは用途別 / `700` / `0.04em` |
| timeline 監督名 | `.label-surname` | `1.35rem` / `700` / `0.06em` |
| timeline 作品タイトル | `.film-title` | `1.6rem` / `700` / `0` |
| timeline 年号 | `.year-label` | `1.4rem` / `700` / `--font-number` |
| 今日は何の日の日付 | `.today-date-panel h2` | `clamp(1.7rem, 4vw, 2.6rem)` / `700` / `--font-number` |
| Editor's Notes 作品名 | `.note-featured-film` | `20px`（見出し/M）/ `700` / `0.04em` |

年号、日付、作品年など `--font-number` を使う要素は、既存のフォントサイズと字間を維持する。

## レイアウト幅

PC表示では、主要な一覧・情報ページの外側コンテンツ幅を `1100px` に揃える。

対象:

- `years.html` の `.year-container`
- `today.html` の `.today-container`
- `notes/index.html` の `.notes-index-container`
- `notes/*.html` の `.note-container`

現在の基準:

```css
.year-container,
.today-container,
.notes-index-container,
.note-container {
    width: min(100%, 1100px);
    max-width: 1100px;
}
```

通常の情報ページは `.info-container` を使う。必要に応じて個別ページ側のクラスで幅を上書きする。

長文本文は読みやすさを優先して幅を絞ってよい。現在の Editor's Notes 個別ページでは、本文まわりを `760px` 程度にしている。

```css
.note-body,
.note-intent {
    max-width: 760px;
}
```

スマホ表示では、左右余白を `1rem` 程度にして、PC幅を無理に維持しない。

## 余白

### 基本方針

- 余白は情報のまとまりを見せるために使う。
- カードや囲みを増やすより、上下余白と罫線で区切る。
- PCではゆったり、スマホでは縦に長くなりすぎないように調整する。

### ページ上部

- 固定ヘッダーがあるため、各ページのメインコンテンツには十分な上 padding を取る。
- `info-container` は現在 `padding: 150px clamp(1.25rem, 5vw, 4rem) 110px;`。
- `year-container` は現在 `padding: 130px clamp(1.25rem, 5vw, 4rem) 68px;`。

### セクション区切り

- 大きなセクションは上罫線で区切る。
- 区切り線は `--line-color`、重要なページ冒頭やタイムラインの強調は `--accent-color` を使う。

## コンポーネント

### Header

- サイト全体のナビゲーション。
- 背景は `--global-nav-bg`、文字は白寄りの低コントラスト。
- ロゴは `assets/header_logo.svg` を使い、ブラウザ左側に配置する。
- グローバルメニュー項目は `1100px` のコンテンツ幅内で左寄せにする。
- メニュー項目は `ホーム`、`映画監督から選ぶ`、`年代から探す`、`今日は何の日`、`テーマで比較`、`Editor's Notes` を基本にする。
- 現在地は `is-active` で表現する。
- モバイルでは主要導線のあとに少し間を開けて、`このサイトについて`、`お問合せ`、`@DTAarchive` を補助導線として表示する。
- モバイルの主要導線は補助導線より大きく表示し、各項目の縦方向のタップ領域を広めに取る。
- モバイルメニューの背景は、開いたときにヘッダー下から画面下まで敷く。
- モバイルメニューの開閉は、控えめなスライド、フェード、高さの変化で表現する。動きは軽く、本文閲覧を邪魔しない範囲に留める。
- モバイルメニューから内部ページへ遷移する時は、柔らかい閉じるアニメーションが少し見えてから遷移する。
- モバイルでは横スクロールや折り返しを許容し、ナビが本文に重ならないようにする。

関連クラス:

- `.timeline-header`
- `.header-shell`
- `.site-title`
- `.site-title-link`
- `.site-title-logo`
- `.header-nav`
- `.mobile-nav-secondary`

### Footer

- 主要導線を静かに再提示する。
- サイト全体の終端として、強い装飾は使わない。
- ロゴは `assets/logo-top.svg` を使い、幅は `260px` を基準にする。
- メインコンテンツとの間はゆったり取り、footerの上側余白で終端感を出す。

関連クラス:

- `.site-footer`
- `.footer-title`
- `.footer-nav`

### Page Hero

一覧ページ、情報ページ、年代ページで使うページ冒頭。

構成:

- ページタイトル: ページ内で最も強い見出し。
- 説明文: `--secondary-text` の短い補足。

関連クラス:

- `.page-hero`
- `.section-heading`
- `.editor-note-subtitle`

### Year Page

年代から探すページは、外側幅 `1100px` を基準にする。

関連クラス:

- `.year-container`
- `.year-picker`
- `.year-summary`
- `.year-results`
- `.year-events-panel`
- `.year-films-panel`

### Editor's Notes Index

Editor's Notes 一覧は、作品紹介リストではなく、監督単位の入口として扱う。

indexページではコラムを複数並べず、最新の1件だけをプレビュー表示する。新しいコラムを追加した場合は、`editor-notes.js` の後ろに追加し、indexページではその最新コラムが自動表示されるようにする。すべてのコラムは Editor's Notes 一覧ページで見せる。

現在のカード表示順:

```text
ウェス・クレイヴン
エルム街の悪夢／スクリーム
続きを読む →
```

方針:

- ページタイトル下に `この監督のこの一本` があるため、カード内では繰り返さない。
- カードは横いっぱいをリンク反応エリアにする。
- `続きを読む →` は右端に寄せる。
- 日本語表記をメインにする。
- 一覧カードの作品名には『』を付けない。
- 新しく追加したコラムが一覧の上に来るようにする。
- 英語名、英題、年は一覧では出しすぎない。必要な場合は詳細ページで扱う。

関連クラス:

- `.notes-index-container`
- `.note-card-list`
- `.note-card`
- `.note-card-director-ja`
- `.note-card-film-ja`
- `.note-card-link`

### Editor's Notes Detail

個別コラムページは、外側幅を `1100px` に揃え、本文幅は読みやすさを優先して絞る。

方針:

- 監督単位のページとして扱う。
- 作品ごとにページを増やさない。
- 本文はレビューではなく、年表を眺めながら気になった一本というトーンにする。
- 監督の年表へのリンクを置く場合は、コラム本文の最後に配置する。補足注記や一覧へ戻るリンクの後ろには置かない。
- 星評価、点数、強いレビュー表現は使わない。

関連クラス:

- `.note-container`
- `.note-article`
- `.note-heading`
- `.note-featured-film`
- `.note-body`
- `.note-intent`

## インタラクション

- hover は控えめにする。
- クリック可能な領域は見た目の幅と一致させる。
- 重要な一覧項目は、テキスト部分だけでなく行全体をリンクにする。
- 反応は opacity、border、軽い transform 程度に留める。
- UIの説明文を増やしすぎず、見れば分かる配置にする。

## レスポンシブ

### PC

- 主要コンテンツ幅は `1100px` を基準にする。
- タイムライン、年代ページ、Editor’s Notes は横幅を活かして情報を整理する。

### Mobile

- 左右余白は `1rem` 程度を基準にする。
- 文字サイズと行間を落としすぎない。
- 横並びが窮屈な場合は、縦積みや横スクロールを検討する。
- Timeline ページだけは、比較構造を維持するため左右カラムを単純な上下積みにしない。

## SEO / Metadata

デザイン変更時も、既存のSEO、OGP、GA4、favicon設定を削除しない。

新規HTMLページを追加する場合は、最低限以下を確認する。

- `title`
- `meta description`
- canonical URL
- OGP
- Twitter Card
- favicon
- GA4タグ
- 必要に応じて JSON-LD

## 文体とトーン

### サイト全体

- 客観的、簡潔、静か。
- 映画監督の歩みと時代背景を眺めるアーカイブとして書く。
- 煽り文句やランキング的な表現は避ける。

### Editor's Notes

- 制作者の個人的な視点は出してよい。
- ただしレビューサイト化しない。
- 「最高傑作」「代表作」と断定するより、「年表の中で見たときに気になる一本」「その作家らしさに触れられる一本」という立ち位置を保つ。

## 変更時のチェック

CSS変更後:

```sh
git diff --check
```

JS変更後:

```sh
node --check home.js
node --check main.js
node --check years.js
```

確認観点:

- PCで主要ページの幅が揃っているか。
- スマホで横はみ出しがないか。
- 文字が詰まりすぎていないか。
- 罫線、余白、文字階層で情報が整理されているか。
- 既存のSEO、GA4、favicon設定を壊していないか。
