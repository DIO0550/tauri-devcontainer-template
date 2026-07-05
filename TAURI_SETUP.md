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

Vite の開発サーバーは **4000**、HMR は **4001** を使います（`.devcontainer` で自動転送されるポートと揃えてあります）。ひな形生成後、`vite.config.ts` の `server.port` / `server.hmr.port` を 4000 / 4001 に合わせてください。

## ビルド

```bash
pnpm tauri build
```
