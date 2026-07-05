# tauri-devcontainer-template

Tauri + React (TypeScript) 開発をすぐに始めるための **Dev Container テンプレート**です。
Ubuntu ベースのコンテナに、Tauri のビルドに必要なシステムライブラリ・Node.js・Rust ツールチェーンをあらかじめ組み込んでいます。ホスト側に依存環境を入れずに、統一された開発環境を再現できます。

## 含まれるツール

| カテゴリ | ツール / バージョン |
| --- | --- |
| OS | Ubuntu 24.04 |
| Node.js | v24 (nodesource) |
| パッケージマネージャー | pnpm |
| Rust | stable (`rustup` / `rustfmt` / `clippy` / `rust-src`) |
| Tauri CLI | v2 (`@tauri-apps/cli` / Node ベース。`pnpm tauri` で利用) |
| バージョン管理 | Git |
| GitHub CLI | gh |
| テスト | Playwright (ブラウザ依存パッケージ込み) |
| ターミナル | tmux |
| GUI 表示 | desktop-lite (noVNC / VNC。Tauri ウィンドウをブラウザで表示) |

## VS Code 拡張機能

- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) — 保存時に自動フォーマット

## 前提条件

- [Docker](https://www.docker.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Dev Containers 拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## 使い方

1. このリポジトリを **Use this template** でコピー、またはクローンします。
2. VS Code でプロジェクトを開きます。
3. コマンドパレット (`F1`) → **Dev Containers: Reopen in Container** を選択します。
4. コンテナのビルドが完了すると、開発環境が利用可能になります。
5. [TAURI_SETUP.md](TAURI_SETUP.md) の手順で Tauri アプリのひな形を生成します。

以下のポートがホストへ自動転送されます。

| ポート | 用途 |
| --- | --- |
| 14000 | Vite 開発サーバー |
| 14001 | Vite HMR |
| 16080 | デスクトップ表示 (noVNC / ブラウザ) |
| 15901 | デスクトップ表示 (VNC クライアント) |

## Tauri ウィンドウの表示（コンテナ内 GUI）

Tauri はデスクトップ GUI アプリのため、コンテナ内に仮想デスクトップ（[desktop-lite](https://github.com/devcontainers/features/tree/main/src/desktop-lite)）を同梱しています。`pnpm tauri dev` で起動したウィンドウは、ブラウザで <http://localhost:16080>（パスワード: `vscode`）、または VNC クライアントで `localhost:15901` から確認できます。

WebView（WebKitGTK）の描画向けに `WEBKIT_DISABLE_DMABUF_RENDERER` / `WEBKIT_DISABLE_COMPOSITING_MODE` / `DISPLAY=:1` を `devcontainer.json` の `containerEnv` に設定済みです。

## プロジェクト構成

```
.devcontainer/
├── devcontainer.json   # Dev Container 設定
├── docker-compose.yml  # Docker Compose 定義
└── node/
    └── Dockerfile      # コンテナイメージ定義
.vscode/
└── extensions.json     # 推奨拡張機能
TAURI_SETUP.md          # Tauri ひな形生成 / 開発コマンド
```

## カスタマイズ

- **Node.js のバージョン**: `.devcontainer/node/Dockerfile` の `ARG NODE_VERSION` を変更します。
- **転送ポート**: アプリのポート（`14000`/`14001`）は `.devcontainer/devcontainer.json` の `forwardPorts` と `.devcontainer/docker-compose.yml` の `ports` を揃えて変更します。GUI ポート（`16080`/`15901`）は `devcontainer.json` の `features` の `webPort` / `vncPort` と `forwardPorts` を揃えます。
- **GUI パスワード**: `devcontainer.json` の `features` → `desktop-lite` → `password` で変更します。GUI が不要な場合は `features` / `containerEnv` / GUI ポートを削除します。
- **セットアップスクリプト**: `Dockerfile` / `devcontainer.json` はコンテナ構築時に外部 gist（リポジトリオーナーの gist）から gh / pnpm / AI ツール / tmux / Playwright などのセットアップスクリプトを取得します。用途に応じて差し替え・削除してください。

## ライセンス

[MIT](LICENSE)
