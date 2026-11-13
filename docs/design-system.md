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
    --key-color: #a08257;
    --background-color-1: #48434c;
    --background-color-2: #eeece8;
    --background-color-3: #cfcfd1;
    --background-color-4: #f9f9f9;
    --point-color: #c3b7a7;
    --text-color-1: #353535;
    --text-color-2: #efefef;
    --bg-color: var(--background-color-2);
    --text-color: var(--text-color-1);
    --accent-color: var(--background-color-1);
    --accent-hover-color: var(--text-color-1);
    --text-hover-color: var(--key-color);
    --link-color: var(--accent-color);
    --link-hover-color: var(--text-hover-color);
    --button-color: var(--accent-color);
    --button-hover-color: var(--accent-hover-color);
    --timeline-color: var(--key-color);
    --timeline-tint: rgba(160, 130, 87, 0.06);
    --global-nav-bg: var(--background-color-1);
    --secondary-text: var(--text-color-1);
    --line-color: var(--background-color-3);
}
```

### 使い分け

- `--key-color`: ロゴ、見出し、年代軸に使うキーカラー `#a08257`。
- `--background-color-1`: グローバルナビなどの濃色背景 `#48434c`。
- `--background-color-2`: サイト全体の基本背景 `#eeece8`。
- `--background-color-3`: 罫線や区切りに使うグレー `#cfcfd1`。
- `--background-color-4`: カード群やタイムラインの明るいコンテンツ面に使うオフホワイト `#f9f9f9`。
- `--point-color`: 控えめなポイント面に使うベージュ `#c3b7a7`。
- `--text-color-1`: 明るい背景上の主要テキスト `#353535`。
- `--text-color-2`: 濃色背景上の明るいテキスト `#efefef`。
- `--bg-color` / `--text-color`: Background 2 / Text 1を参照する互換用セマンティック変数。
- `--accent-color`: 強い操作、選択状態、強調線にBackground 1を使用する。
- `--accent-hover-color`: hover時の濃色にText 1を使用する。
- `--text-hover-color`: リンクのhoverにKey Colorを使用する。
- `--link-color`: 本文内リンクや操作リンク。
- `--button-color`: ボタン、選択状態、大きな導線。
- `--timeline-color`: タイムラインの軸線や現在年の強調。
- `timeline.html` の中央年代軸の縦ラインは `--key-color` を使う。
- `--key-color`: トップページのセクション見出し、Editor's Notes の「この監督のこの一本」、timelineページの中央年代軸に使う。
- `--global-nav-bg`: 全ページ共通のグローバルナビ背景色。
- `--secondary-text`: Text 1を基準に、各コンポーネントのopacityで強弱をつける。
- `--line-color`: Background 3を参照し、区切り線、カード境界、静かなグルーピングに使う。

### 避けること

- 派手なアクセントカラーを増やさない。
- グラデーションや装飾的な色面を主役にしない。
- ページごとに独自カラーを作らない。

## タイポグラフィ

使用フォントは `Gen Interface JP`、行間はすべて `150%` とする。

| 分類 | スタイル | サイズ / 行間 |
| --- | --- | ---: |
| 見出し | XXXL | `56px / 150%` |
| 見出し | XXL | `44px / 150%` |
| 見出し | XL | `32px / 150%` |
| 見出し | L | `28px / 150%` |
| 見出し | M | `20px / 150%` |
| 見出し | S | `18px / 150%` |
| 見出し | XS | `16px / 150%` |
| 見出し | XXS | `13px / 150%` |
| 本文 | XL | `18px / 150%` |
| 本文 | L | `16px / 150%` |
| 本文 | M | `15px / 150%` |
| 本文 | S | `13px / 150%` |
| 本文 | XS | `11px / 150%` |
| 本文 | XXS | `10px / 150%` |
| 英数 | M | `24px / 150%` |
| 英数 | S | `18px / 150%` |
| 英数 | XS | `14px / 150%` |

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
