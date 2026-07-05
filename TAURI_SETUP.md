# Tauri setup commands

Dev Container に入った状態で、リポジトリの root から実行します。

## React + TypeScript でひな形を作る

`--identifier` は自分のアプリに合わせて書き換えてください（例: `com.example.myapp`）。

```bash
pnpm create tauri-app@latest . \
  --template react-ts \
  --manager pnpm \
  --identifier com.example.myapp \
  --yes \
  --force
```

`--template` を差し替えれば React 以外のフロントエンド（`vue-ts` / `svelte-ts` / `vanilla-ts` など）でも生成できます。

## 開発起動

```bash
pnpm tauri dev
```

Vite の開発サーバーは **14000**、HMR は **14001** を使います（`.devcontainer` で自動転送されるポートと揃えてあります）。ひな形生成後、`vite.config.ts` の `server.port` / `server.hmr.port` を 14000 / 14001 に合わせてください。

### Tauri ウィンドウの表示（コンテナ内 GUI）

Tauri はデスクトップ GUI アプリのため、コンテナ内に仮想デスクトップ（[desktop-lite](https://github.com/devcontainers/features/tree/main/src/desktop-lite)）を同梱しています。`pnpm tauri dev` で起動したウィンドウは以下から確認できます。

- ブラウザ (noVNC): <http://localhost:16080>（パスワード: `vscode`）
- VNC クライアント: `localhost:15901`（パスワード: `vscode`）

WebView（WebKitGTK）の描画は、コンテナ向けに `WEBKIT_DISABLE_DMABUF_RENDERER` / `WEBKIT_DISABLE_COMPOSITING_MODE` と `DISPLAY=:1` を `devcontainer.json` の `containerEnv` で設定済みです。

## ビルド

```bash
pnpm tauri build
```
