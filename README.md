# Vite + Reactでchrome-extension開発(CRXJS)
reference [https://crxjs.dev/vite-plugin/getting-started/react/create-project](https://crxjs.dev/vite-plugin/getting-started/react/create-project)

## install

```bash
pnpm create vite extension-with-vite-sample --template react-ts && \
 cd extension-with-vite-sample && pnpm i

pnpm i -D @crxjs/vite-plugin@beta
pnpm i @types/chrome @extend-chrome/storage
```

## sample

### vite.config.ts

```typescript
...

import { crx, defineManifest } from "@crxjs/vite-plugin";
import { manifest } from './manifest'

export default defineConfig({
  plugins: [
    react(),
    crx({ manifest: defineManifest(manifest) })
  ],
})
```

### manifest.ts

```typescript
export const manifest = {
  manifest_version: 3,
  name: "extension-with-vite-sample",
  version: "0.0.1",
  action: {
    default_popup: "index.html",
  },
} satisfies chrome.runtime.ManifestV3
```

## develop or build

```bash
pnpm run dev
# OR
pnpm run build
```

- distディレクトリをブラウザ拡張機能として読み込み
