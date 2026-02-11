# Bicycle Party つくば市ローカライズ - 変更タスクリスト

このドキュメントは、SHIFTウェブサイト（ポートランド向け）をつくば市向けに日本語化するために必要な変更点をまとめたものです。

---

## 完了した作業

### 1. `site/config/_default/hugo.toml` - メイン設定ファイル ✅

- [x] about: Umbrellaへの参照を削除、筑波大学ADPプロジェクトとして記述
- [x] copyright: 空に（写真クレジットは必要に応じて追加）
- [x] disclaimer: Umbrellaへの参照を削除
- [x] verificationURL: コメントアウト
- [x] donations: コメントアウト（寄付機能は不要）
- [x] festival.name: プレースホルダーに変更

### 2. `app/config.js` - バックエンド設定ファイル ✅

- [x] devEndpoints.remoteUrl: SNSフィードをコメントアウト
- [x] email.sender/support/moderator: プレースホルダー（contact@example.com）に変更
- [x] crawl: 日本語化（つくば市自転車イベントカレンダー）
- [x] cal.pedalp/shift: 日本語化
- [x] cal.base.prod: プレースホルダードメインに変更

### 3. `site/data/carousel/*.yaml` - カルーセル画像テキスト ✅

- [x] welcome.yaml: 日本語化
- [x] bike-fun.yaml: 日本語化 + つくば市に変更
- [x] lead-rides.yaml: 日本語化
- [x] public-health.yaml: 日本語化
- [x] bike-for-justice.yaml: 日本語化
- [x] bike-fun-app.yaml: 削除（外部アプリへのリンク）
- [x] rack-rentals.yaml: コメントアウト済み（変更なし）

### 4. `site/data/clients/*.yaml` - スポンサー情報 ✅

- [x] すべてのファイルを削除（スポンサーセクションは空のまま維持）

### 5. `site/content/pages/groups.md` - コミュニティグループ一覧 ✅

- [x] ポートランドの団体一覧を削除
- [x] つくば市向けのプレースホルダーに置き換え
- [x] 協力団体追加用のテンプレートを用意

### 6. その他のコンテンツファイル ✅

- [x] donate.md: 「寄付」から「参加する」に変更、資金寄付セクションを削除
- [x] contact.md: GitHubリンクをプレースホルダーに
- [x] bike-racks.md: 「準備中」のプレースホルダーに変更
- [x] pedalpalooza-posters-past.md: archive/に移動
- [x] pedalpalooza-previous.md: archive/に移動

---

## 今後の作業（任意）

### 画像ファイル（ロゴ等）

以下の画像ファイルをつくば市用に置き換えることを検討：

| ファイルパス | 用途 |
|--------------|------|
| `site/static/images/shift-logo-large.jpg` | メインロゴ |
| `site/static/img/cal/logos/shift-logo.svg` | ナビゲーションロゴ |
| `site/static/images/carousel/*.jpg` | カルーセル画像（必要に応じて） |

### プレイブック（運営マニュアル）

`site/content/playbooks/` にポートランド固有の運営マニュアルがあります。必要に応じて更新または削除を検討：

- `shift-umbrella-playbook.md`
- `pedalpalooza-playbook.md`
- `technology-playbook.md`
- `social-media-playbook.md`

### アーカイブ

`site/content/archive/` に過去のポートランドイベントのアーカイブがあります。必要に応じて削除を検討。

---

## 設定が必要な項目（決まり次第更新）

以下の項目は、情報が確定したら更新してください：

### メールアドレス
- `app/config.js` の `email.sender.address`
- `app/config.js` の `email.support`
- `app/config.js` の `email.moderator`

### ドメイン
- `app/config.js` の `cal.pedalp.guid`
- `app/config.js` の `cal.shift.guid`
- `app/config.js` の `cal.base.prod`

### SNS/ソーシャルメディア
- `hugo.toml` の `verificationURL`
- `app/config.js` の `devEndpoints.remoteUrl`

### フェスティバル名
- `hugo.toml` の `festival.name`

### 協力団体
- `hugo.toml` の `about`（団体リンクを追加する場合）
- `site/content/pages/groups.md`

---

*最終更新: 2026-01-25*
