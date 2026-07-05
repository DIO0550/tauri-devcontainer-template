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

## VS Code 拡張機能

- [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
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

ポート **4000**（Vite 開発サーバー）と **4001**（HMR）がホストへ自動転送されます。

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
- **転送ポート**: `.devcontainer/devcontainer.json` の `forwardPorts` と `.devcontainer/docker-compose.yml` の `ports` を揃えて変更します。
- **セットアップスクリプト**: `Dockerfile` / `devcontainer.json` はコンテナ構築時に外部 gist（リポジトリオーナーの gist）から gh / pnpm / AI ツール / tmux / Playwright などのセットアップスクリプトを取得します。用途に応じて差し替え・削除してください。

## ライセンス

[MIT](LICENSE)
