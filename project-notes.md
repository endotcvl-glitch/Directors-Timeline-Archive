# Directors' Timeline Archive Project Notes

## プロジェクト概要

Directors' Timeline Archive は、映画監督たちの作品年表を軸に、作品の流れ、時代背景、同時代の映画との関係を眺めるための個人制作アーカイブです。

主な目的は、ひとりの監督のキャリアを時系列でたどること、またはふたりの監督を同じ時間軸で比較し、創作の重なりや違いを見つけやすくすることです。

映画作品が中心ですが、近年の配信シリーズやテレビシリーズも監督のキャリアを語るうえで重要な場合は掲載します。媒体そのものよりも、創作の軌跡が見えることを優先します。

## デザイン方針

- ミニマルでタイポグラフィ中心。
- ライトグレー基調。
- 装飾は増やしすぎず、線、余白、文字の強弱で情報を整理する。
- Apple UI / Bloomberg 的な、静かで情報整理された印象を意識する。
- PC表示の見た目は大きく崩さない。
- スマホでは無理に詰め込まず、文字サイズ、余白、情報量を調整する。

## 重要なレイアウト方針

### コンテンツ幅

PC表示では、主要な一覧・情報ページの外側コンテンツ幅を基本的に `1100px` に揃える。

- `years.html` の `year-container`
- `notes/index.html` の `notes-index-container`
- `notes/*.html` の `note-container`

コラム本文のような長文エリアは、読みやすさを優先して本文幅を絞ってよい。現在は `note-body` / `note-intent` を `760px` 程度にしている。

スマホ表示では、既存方針どおり左右余白を `1rem` 程度にして、無理にPC幅を維持しない。

### Timeline ページ

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

### Index ページ

`index.html` は入口ページ。

現在の主な構成:

1. サイトタイトルと説明文
2. `探し方を選ぶ`
   - 監督から探す
   - 年代から探す
3. `テーマから比較してみる`
   - あらかじめ選んだテーマから2人比較へ遷移
4. `Editor's Notes`
   - 最新コラムを1件だけプレビュー表示する
   - 個別記事へのリンクと Editor's Notes 一覧へのリンクを置く

監督検索・監督選択は `directors.html` に分離済み。

### Directors ページ

`directors.html` は監督選択専用ページ。

- 検索対象は英語名、日本語名、特徴タグ。
- 検索中も全監督を表示し、一致しない監督は薄くする。
- 一致しないカードもクリック可能。
- 選択済みカードは検索条件より選択状態を優先する。
- 1人選択で単独タイムライン、2人選択で比較タイムラインへ遷移する。

### Years ページ

`years.html` は「年代から探す」ページ。

- 2000年から2026年までを選択できる。
- 年号は1行の横スクロールナビ。
- 選択した年の Events と Films を表示する。
- スマホでは Events をコンパクトにし、縦幅を抑える。
- 作品データは `main.js` の `filmsData` から年別に集約する。
- イベントデータは `main.js` の `eventsData` から年別に表示する。

## ページ構成

- `index.html`
  - トップページ / 入口
  - 探し方の選択
  - テーマ比較への導線

- `directors.html`
  - 監督検索
  - 監督選択
  - Compare ボタン

- `timeline.html`
  - 単独監督または2人比較のタイムライン
  - URL例: `timeline.html?d1=nolan&d2=villeneuve`

- `years.html`
  - 年代から作品と出来事を見るページ
  - URL例: `years.html?year=2008`

- `about.html`
  - 企画説明
  - NEWS
  - お問合せ導線

## データ管理

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

### Events データ

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

## 現在の主な実装メモ

- 全ページのヘッダーに共通ナビあり。
  - `HOME`
  - `監督から探す`
  - `年代から探す`
  - `テーマで比較`

- Footer には以下を表示。
  - `SELECT DIRECTORS`
  - `EXPLORE BY YEAR`
  - `ABOUT / NEWS`
  - `お問合せ`

- `お問合せ` は Googleフォームにリンクしている。
  - URL: `https://docs.google.com/forms/d/e/1FAIpQLSdN7yUjTtm66DHwKF5QB96z2W-cMja4MveVtbeCkA46DR5BCQ/viewform?usp=dialog`

- CSS更新後は、HTML側の `style.css?v=...` を更新してキャッシュを避けることがある。

- JS更新後は、必要に応じて `home.js?v=...` や `main.js?v=...` を更新する。

## 最近追加した要素

- `directors.html` を追加し、監督選択をトップページから分離。
- `years.html` / `years.js` を追加し、「年代から探す」を実装。
- `project-notes.md` を追加。
- ヘッダー共通ナビを追加。
- Footer にお問合せリンクを追加。
- 監督データにジェームズ・キャメロンを追加。
- Film / Series 表記を追加。
- NEWS に「年代から探す」を追加。

## NEWS の運用

大きな変更のみ `about.html` の NEWS に追加する。

NEWS に載せる基準:

- 新ページ追加
- 主要機能追加
- 表示構造の大きな改善
- データ対象の大きな拡充

細かな余白調整や文言修正は、基本的にはNEWSに載せなくてよい。

## 確認コマンド

JS変更後:

```sh
node --check home.js
node --check main.js
node --check years.js
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

## 今後の候補

- お問合せフォームの項目や説明文を必要に応じて調整する。
- テーマ比較をさらに整理・追加する。
- 年代ページの Events を増やす。
- 監督ごとの Series 掲載方針を整理する。
- Figma側のデザインデータを最新状態に更新する。
