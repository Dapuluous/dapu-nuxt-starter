# dapu-nuxt-starter

A Nuxt 4 starter template with a layer-based architecture, pre-configured with UI, linting, and theming.

## Stack

- **[Nuxt 4](https://nuxt.com)** — with `compatibilityVersion: 4`
- **[Nuxt UI v4](https://ui.nuxt.com)** — component library (includes Tailwind CSS v4 and color mode)
- **[Nuxt ESLint](https://eslint.nuxt.com)** — auto-configured ESLint with Nuxt rules
- **[eslint-plugin-perfectionist](https://eslint-plugin-perfectionist.azat.io)** — sorting rules for imports, props, etc.
- **[animate.css](https://animate.style)** — CSS animation utility classes
- **Color mode** — defaults to `light`

## Layer Architecture

The project uses [Nuxt Layers](https://nuxt.com/docs/getting-started/layers) to organize features. Each layer is self-contained with its own pages, components, composables, and utilities.

```
layer-template/              # Copy this to scaffold a new layer
layers/
├── base/                    # Core layer — layouts, shared composables/utils, Nuxt v4 compat
│   └── app/
│       ├── layouts/default.vue
│       ├── pages/index.vue          # → /
│       ├── composables/
│       └── utils/
└── about/                   # Example feature layer
    └── app/
        ├── pages/about/index.vue    # → /about
        ├── components/
        ├── composables/
        └── utils/
```

### Adding a New Layer

1. Copy `layer-template/` into `layers/` and rename it (e.g. `layers/dashboard`)
2. Rename the page folder to match: `app/pages/dashboard/index.vue` → resolves to `/dashboard`
3. Rename all `FeatureName` / `featureName` / `feature-name` placeholders to your feature
4. Register the layer in [nuxt.config.ts](nuxt.config.ts):
   ```ts
   extends: ['./layers/base', './layers/dashboard']
   ```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at `http://localhost:3000` |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |

## Setup

```bash
npm install
npm run dev
```
