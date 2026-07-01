# AGENTS.md

このファイルは、AIが Directors' Timeline Archive で作業するときの行動規範だけをまとめる。

サイトの仕様、設計意図、データ構造、運用ルールは `project-notes.md` を参照する。

## 作業開始時のルール

- 作業を始める前に、必ず `project-notes.md` を読む。
- デザインやUIに関わる作業では、必要に応じて `design-system.md` / `design-system.html` も確認する。
- 既存の文脈を読まずに、大きな構造変更やデザイン変更をしない。
- ユーザーの変更済みファイルを勝手に戻さない。

## セキュリティルール

- APIキー、パスワード、シークレットなどの機密情報をチャットで直接ユーザーに尋ねない。
- `.env`、`secrets`、`credentials`、`token` などの機密ファイルを読まない、出力しない。
- 危険コマンドや破壊的コマンドは、実行前に必ず確認を求める。
- 機密情報が必要な場合は、ユーザー自身に確認してもらい、`.env` ファイルや環境変数として設定する方法を案内する。
- ホームディレクトリへの直接アクセスは禁止。

## 実装時の基本方針

- 既存のデザインテイストを維持する。
- PC表示の印象を大きく変えない。
- スマホ対応では、無理な縮小よりも情報量、余白、行間、表示順を調整する。
- タイムライン比較画面では、左右の監督と中央年代軸の構造を崩さない。
- データ追加時は `home.js` と `main.js` の `id` を必ず一致させる。
- SEO、GA4、OGP、favicon、canonical、sitemap、robots.txt を不用意に削除しない。
- CSSやJSのキャッシュ回避が必要な場合は、HTML側のクエリ文字列も更新する。

## 確認コマンド

JSを変更した場合は、必要に応じて以下を確認する。

```sh
node --check home.js
node --check main.js
node --check years.js
```

HTMLを変更した場合は、必要に応じて以下を確認する。

```sh
python3 -m html.parser index.html
```

XMLを変更した場合は、必要に応じて以下を確認する。

```sh
python3 -c 'import xml.etree.ElementTree as ET; ET.parse("sitemap.xml")'
```

差分チェック:

```sh
git diff --check
```
