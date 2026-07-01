# Directors' Timeline Archive Project Notes

このファイルは、Directors' Timeline Archive の設計書です。

人間とAIの両方が、サイトの目的、デザイン思想、ページ構成、データ構造、運用ルールを共有するために使います。

AIの作業ルールは `AGENTS.md`、デザインの詳細な視覚基準は `design-system.md` / `design-system.html` を参照してください。

## サイトコンセプト

Directors' Timeline Archive は、映画監督たちの作品年表を軸に、作品の流れ、時代背景、同時代の映画との関係を眺めるための個人制作アーカイブです。

主な目的は、ひとりの監督のキャリアを時系列でたどること、またはふたりの監督を同じ時間軸で比較し、創作の重なりや違いを見つけやすくすることです。

映画作品が中心ですが、近年の配信シリーズやテレビシリーズも監督のキャリアを語るうえで重要な場合は掲載します。媒体そのものよりも、創作の軌跡が見えることを優先します。

トップページの基本コピー:

```text
映画監督のキャリアを、一本のタイムラインで。
Directors’ Timeline Archive は、映画監督たちの作品と、時代背景を重ねて眺めるためのアーカイブです。

映画監督を1人選ぶと、その作品年表をたどれます。
2人選ぶと、公開時期や創作の流れを同じ時間軸で比較できます。
```

## デザイン思想

- ミニマルでタイポグラフィ中心。
- ライトグレー基調。
- 装飾は増やしすぎず、線、余白、文字の強弱で情報を整理する。
- Apple UI / Bloomberg 的な、静かで情報整理された印象を意識する。
- 映画ブログやレビューサイトのような情緒的な見せ方に寄せすぎない。
- PC表示の見た目は大きく崩さない。
- スマホでは無理に詰め込まず、文字サイズ、余白、情報量、表示順を調整する。

詳細なカラー、フォント、幅、コンポーネント例は `design-system.md` / `design-system.html` を参照する。

### コンテンツ幅

PC表示では、主要な一覧・情報ページの外側コンテンツ幅を基本的に `1100px` に揃える。

- `years.html` の `.year-container`
- `notes/index.html` の `.notes-index-container`
- `notes/*.html` の `.note-container`

コラム本文のような長文エリアは、読みやすさを優先して本文幅を絞ってよい。現在は `note-body` / `note-intent` を `760px` 程度にしている。

スマホ表示では、既存方針どおり左右余白を `1rem` 程度にして、無理にPC幅を維持しない。

### Timelineページの重要方針

`timeline.html` は最重要画面のひとつ。

PC / スマホともに、以下の構造を維持する。

- 左側: 監督Aの作品
- 中央: 縦方向の年代軸
- 右側: 監督Bの作品
- 年代ごとに左右の作品が配置される
- 中央軸を基準に2人のキャリアを比較する

スマホでも、左右の監督を上下積みにしない。画面に収まるように文字サイズ、余白、カラム幅を調整する。

作品タイトル下のキャッチコピー・補足テキストは、PC / スマホともに基本的に表示しない。

同時代の作品表示は、`同時代の作品` という見出しで、作品名のみを表示する。Film / Series タグは同時代の作品欄には出さない。

## ディレクトリ構成

現在の主な構成:

```text
/
├── index.html
├── directors.html
├── timeline.html
├── years.html
├── about.html
├── design-system.html
├── AGENTS.md
├── project-notes.md
├── design-system.md
├── style.css
├── home.js
├── main.js
├── years.js
├── editor-notes.js
├── robots.txt
├── sitemap.xml
├── CNAME
├── assets/
│   ├── logo.svg
│   └── ogp.png
└── notes/
    ├── index.html
    ├── david-lynch.html
    └── wes-craven.html
```

`design-system.html` は確認用資料ページで、`noindex` とする。通常のサイトマップには含めない。

## ページ構成

### `index.html`

トップページ / 入口。

主な構成:

1. サイトロゴと説明文
2. `探し方を選ぶ`
   - 監督から探す
   - 年代から探す
3. `テーマから比較してみる`
   - あらかじめ選んだテーマから2人比較へ遷移
4. `Editor's Notes`
   - 最新コラムを1件だけプレビュー表示
   - 個別記事へのリンクと Editor's Notes 一覧へのリンクを置く

### `directors.html`

監督選択専用ページ。

- 検索対象は英語名、日本語名、特徴タグ。
- 検索中も全監督を表示し、一致しない監督は薄くする。
- 一致しないカードもクリック可能。
- 選択済みカードは検索条件より選択状態を優先する。
- 1人選択で単独タイムライン、2人選択で比較タイムラインへ遷移する。

### `timeline.html`

単独監督または2人比較のタイムラインページ。

URL例:

```text
timeline.html?d1=nolan
timeline.html?d1=nolan&d2=villeneuve
```

### `years.html`

「年代から探す」ページ。

- 2000年から2026年までを選択できる。
- 年号は1行の横スクロールナビ。
- 選択した年の Events と Films を表示する。
- スマホでは Events をコンパクトにし、縦幅を抑える。
- 作品データは `main.js` の `filmsData` から年別に集約する。
- イベントデータは `main.js` の `eventsData` から年別に表示する。

URL例:

```text
years.html?year=2008
```

### `about.html`

企画説明、NEWS、お問合せ導線を置くページ。

お問合せはGoogleフォームにリンクしている。

```text
https://docs.google.com/forms/d/e/1FAIpQLSdN7yUjTtm66DHwKF5QB96z2W-cMja4MveVtbeCkA46DR5BCQ/viewform?usp=dialog
```

Xアカウントへのリンクも設置している。

```text
https://x.com/DTAarchive
```

### `notes/index.html`

Editor's Notes 一覧ページ。

canonical は以下に統一する。

```text
https://directors-timeline-archive.com/notes/
```

### `notes/*.html`

監督単位の Editor's Notes 個別ページ。

作品単位ではなく、監督単位のページとして育てていく。

### `design-system.html`

カラー、タイポグラフィ、余白、コンポーネントを視覚的に確認するための資料ページ。

- `noindex`
- sitemapには含めない
- 公開サイトの通常導線には入れない

## データ構造

### 監督リスト

監督リストは `home.js` の `directors` 配列で管理する。

監督を追加するときは、以下を追加する。

- `id`
- `surname`
- `nameJa`
- `nameEn`
- `keywords`

年代カテゴリは、主に活動開始時期の目安で分類する。

### タイムライン用監督情報

`main.js` の `directorsInfo` にも同じ `id` で追加する。

例:

```js
'nolan': { fullNameEn: 'CHRISTOPHER NOLAN', nameJa: 'クリストファー・ノーラン', surname: 'NOLAN' },
```

`home.js` と `main.js` の `id` が一致していないと、選択ページからタイムラインへ正しく遷移できない。

### 作品データ

作品は `main.js` の `filmsData` に追加する。

基本形式:

```js
{ year: 2008, type: 'nolan', title: "ダークナイト", context: "正義を揺さぶるジョーカーという混沌。" }
```

Series の場合:

```js
{ year: 2022, type: 'burton', title: "ウェンズデー", context: "...", medium: "Series" }
```

Film / Series はタグとして表示される。指定がない場合は Film 扱い。

### Eventsデータ

`main.js` の `eventsData` に追加する。

基本形式:

```js
{ year: 2008, title: "MCUスタート", category: "FILM" }
```

想定カテゴリ:

- `FILM`
- `TECH`
- `WORLD`
- `INDUSTRY`

### Editor's Notesデータ

Editor's Notes は `editor-notes.js` の `editorNotes` 配列で管理する。

基本形式:

```js
{
    slug: "wes-craven",
    director: "Wes Craven",
    directorJa: "ウェス・クレイヴン",
    featuredFilm: {
        title: "A Nightmare on Elm Street",
        titleJa: "エルム街の悪夢",
        year: 1984
    },
    featuredFilms: [
        {
            title: "A Nightmare on Elm Street",
            titleJa: "エルム街の悪夢",
            year: 1984
        },
        {
            title: "Scream",
            titleJa: "スクリーム",
            year: 1996
        }
    ],
    heading: "この監督のこの一本",
    excerpt: "...",
    body: ["..."],
    additions: [],
    note: "..."
}
```

`featuredFilms` がある場合は、一覧表示で複数作品をまとめて表示できる。

## 追加コンテンツのルール

### 監督を追加する場合

1. `home.js` の `directors` に追加する。
2. `main.js` の `directorsInfo` に同じ `id` で追加する。
3. `main.js` の `filmsData` に作品を追加する。
4. 必要に応じて `eventsData` を追加する。
5. 監督名の日本語表記をサイト内で統一する。

### 作品を追加する場合

- 公開年を正確に入れる。
- `type` は監督IDと一致させる。
- `medium` がない場合は Film 扱い。
- Series を入れる場合は、監督のキャリアを語るうえで必要なものに限定する。

### Eventsを追加する場合

- 年代ページで見たときに、映画史や社会背景が分かるものを優先する。
- 細かすぎるニュースは増やしすぎない。
- カテゴリは `FILM` / `TECH` / `WORLD` / `INDUSTRY` を基本にする。

## Notes（この監督のこの一本）の運用ルール

Editor's Notes は、レビューサイト化するための機能ではない。

目的は、年表を作っている制作者が、年表を眺めながら気付いたことを静かに書く余白を作ること。

### 基本方針

- 作品単位ではなく、監督単位で1ページを持つ。
- 作品ごとにページを増やさない。
- 将来的に同じ監督ページへ追記できる構造にする。
- 「最高傑作」や「代表作」を選ぶ企画ではない。
- 星評価、点数、ランキング表現は使わない。
- 「その作家らしさに触れられる一本」という立ち位置を保つ。

### 一覧ページ

`notes/index.html` は Editor's Notes 一覧ページ。

現在のカード表示順:

```text
ウェス・クレイヴン
エルム街の悪夢／スクリーム
続きを読む →
```

運用:

- ページタイトル下に `この監督のこの一本` があるため、カード内では繰り返さない。
- カードは横いっぱいをリンク反応エリアにする。
- `続きを読む →` は右端に寄せる。
- 日本語表記をメインにする。
- 一覧カードの作品名には『』を付けない。
- 新しく追加したコラムが一覧の上に来るようにする。
- 英語名、英題、年は一覧では出しすぎない。必要な場合は詳細ページで扱う。

### トップページ

`index.html` では、コラムを複数並べず、最新の1件だけをプレビュー表示する。

新しいコラムを追加した場合は、`editor-notes.js` の後ろに追加し、トップページではその最新コラムが自動表示されるようにする。

### 個別ページ

例:

```text
notes/wes-craven.html
```

構成:

- 監督名
- 見出し
- 作品名
- 本文
- 定型注記
- 一覧へ戻る

個別ページの `<title>` は作品名を含める。

例:

```text
エルム街の悪夢／スクリーム｜この監督のこの一本 | Directors Timeline Archive
```

## SEO方針

### title

主要ページの現在の方針:

- トップ: `映画監督の作品年表 | Directors Timeline Archive`
- 監督一覧: `映画監督を比較する | Directors Timeline Archive`
- 年代: `年代から映画を探す | Directors Timeline Archive`
- About: `このサイトについて | Directors Timeline Archive`
- Notes一覧: `この監督のこの一本 | Directors Timeline Archive`

Notes個別ページは、作品名を先頭に入れる。

### meta description

全HTMLにページごとの `meta description` を設定する。

OGP / Twitter Card の description も、原則として `meta description` と揃える。

### canonical

sitemapに掲載するURLとcanonicalを一致させる。

トップページは `/index.html` ではなく `/` に統一する。

```text
https://directors-timeline-archive.com/
```

Notes一覧は `/notes/index.html` ではなく `/notes/` に統一する。

```text
https://directors-timeline-archive.com/notes/
```

### sitemap.xml

SEO向けにシンプルな形式にする。

- `/` と `/index.html` を重複させない。
- `priority` は入れない。
- `changefreq` は入れない。
- `lastmod` は残す。
- canonical URL と一致させる。
- `design-system.html` のような `noindex` 資料ページは含めない。
- 存在しないNotesページは含めない。

### robots.txt

以下の形式を維持する。

```txt
User-agent: *
Allow: /

Sitemap: https://directors-timeline-archive.com/sitemap.xml
```

### OGP / favicon / GA4

- 既存のOGPタグを不用意に削除しない。
- `assets/ogp.png` をOGP画像として使う。
- favicon設定を削除しない。
- GA4タグを削除しない。

## 更新履歴（NEWS運用）

大きな変更のみ `about.html` の NEWS に追加する。

NEWS に載せる基準:

- 新ページ追加
- 主要機能追加
- 表示構造の大きな改善
- データ対象の大きな拡充

細かな余白調整、文言修正、SEO微調整は、基本的にはNEWSに載せなくてよい。

## 今後追加予定の機能

- お問合せフォームの項目や説明文を必要に応じて調整する。
- テーマ比較をさらに整理・追加する。
- 年代ページの Events を増やす。
- 監督ごとの Series 掲載方針を整理する。
- Editor's Notes の監督ページを増やす。
- Figma側のデザインデータを最新状態に更新する。

## 開発メモ

### 共通ナビ

全ページのヘッダーに共通ナビあり。

- `HOME`
- `監督から探す`
- `年代から探す`
- `テーマで比較`

Footer には以下を表示。

- `SELECT DIRECTORS`
- `EXPLORE BY YEAR`
- `ABOUT / NEWS`
- `お問合せ`
- `X @DTAarchive`

### キャッシュ対策

CSS更新後は、必要に応じてHTML側の `style.css?v=...` を更新してキャッシュを避ける。

JS更新後は、必要に応じて `home.js?v=...`、`main.js?v=...`、`years.js?v=...`、`editor-notes.js?v=...` を更新する。

### 確認コマンド

JS変更後:

```sh
node --check home.js
node --check main.js
node --check years.js
```

HTML変更後:

```sh
python3 -m html.parser index.html
```

XML変更後:

```sh
python3 -c 'import xml.etree.ElementTree as ET; ET.parse("sitemap.xml")'
```

差分の空白チェック:

```sh
git diff --check
```

ローカル確認:

```sh
python3 -m http.server 8765
```

その後、ブラウザで以下を確認する。

- `http://127.0.0.1:8765/index.html`
- `http://127.0.0.1:8765/directors.html`
- `http://127.0.0.1:8765/timeline.html?d1=nolan&d2=villeneuve`
- `http://127.0.0.1:8765/years.html?year=2008`
- `http://127.0.0.1:8765/about.html`
- `http://127.0.0.1:8765/notes/`
