# [3.0.0](https://github.com/erictooth/smart-icon/compare/v2.0.0...v3.0.0) (2024-04-19)

* feat!: switch to light dom to allow access to element IDs in the parent DOM

# [2.0.0](https://github.com/erictooth/smart-icon/compare/v1.4.3...v2.0.0) (2022-08-14)

* fix!: bundle TS types directly with built files, and build with swc ([7c65dce](https://github.com/erictooth/smart-icon/commit/7c65dce242a2eb34b0afb46762b49fce81300e2a))


### BREAKING CHANGES

* the paths of esm and cjs builds have changed

## [1.4.3](https://github.com/erictooth/smart-icon/compare/v1.4.2...v1.4.3) (2021-11-19)


### Bug Fixes

* if `globalThis.customElements` is not available, no-op when `define` is called ([da44ea2](https://github.com/erictooth/smart-icon/commit/da44ea2a844708fb924d51d703f56df5b0851a12))

## [1.4.2](https://github.com/erictooth/smart-icon/compare/v1.4.1...v1.4.2) (2021-11-16)


### Bug Fixes

* **SVGFetchAdapter:** fix double update on initial render ([1bb3c9a](https://github.com/erictooth/smart-icon/commit/1bb3c9a23bd242795d14b526a46bb48db7d2b00e))
* use `globalThis` instead of `window` to improve SSR support ([c8b8866](https://github.com/erictooth/smart-icon/commit/c8b886636a10cff675db34f1f0c226fc7f0f2f00))

## [1.4.1](https://github.com/erictooth/smart-icon/compare/v1.4.0...v1.4.1) (2021-10-14)


### Bug Fixes

* remove optional chaining since some builds do not fully support it yet ([225f3c1](https://github.com/erictooth/smart-icon/commit/225f3c1e846d99228db15e8cfc3b40f72a07f6af))

# [1.4.0](https://github.com/erictooth/smart-icon/compare/v1.3.0...v1.4.0) (2021-10-12)


### Features

* **build:** add cjs build ([94d98b6](https://github.com/erictooth/smart-icon/commit/94d98b6d1cd5b32d4181167b3dec1da6c8a3fcd6))

# [1.3.0](https://github.com/erictooth/smart-icon/compare/v1.2.1...v1.3.0) (2021-07-25)


### Features

* add `querySelector` option to SVGFetchAdapter for CORS SVG sprite usage ([db5e4da](https://github.com/erictooth/smart-icon/commit/db5e4da59b914f6652415f0ace67dae0a9e89e6e))

## [1.2.1](https://github.com/erictooth/smart-icon/compare/v1.2.0...v1.2.1) (2021-07-25)


### Bug Fixes

* add missing SVGFetchAdapter export ([bb29e89](https://github.com/erictooth/smart-icon/commit/bb29e8928ae686019afec51d068ac6074c0ad10a))

# [1.2.0](https://github.com/erictooth/smart-icon/compare/v1.1.0...v1.2.0) (2021-07-25)


### Features

* add SVGFetchAdapter for loading icons from a cross-origin source ([5ac82d2](https://github.com/erictooth/smart-icon/commit/5ac82d2540020fdfb109a98709a5bffa5a0aa2d2))

# [1.1.0](https://github.com/erictooth/smart-icon/compare/v1.0.1...v1.1.0) (2021-07-01)


### Features

* export BaseAdapter to facilitate creation of custom adapters ([8028d88](https://github.com/erictooth/smart-icon/commit/8028d88937dda9f6cd2f0ef71dd8cc40f4e847a4))

## [1.0.1](https://github.com/erictooth/smart-icon/compare/v1.0.0...v1.0.1) (2021-06-24)


### Bug Fixes

* **build:** add unpkg field ([2ed97b0](https://github.com/erictooth/smart-icon/commit/2ed97b09da23bac12b2ccce0df486b19550b5603))

# [1.0.0](https://github.com/erictooth/smart-icon/compare/v0.2.1...v1.0.0) (2021-06-18)


### chore

* **release:** release 1.0.0 ([a63ea13](https://github.com/erictooth/smart-icon/commit/a63ea1303c49e55703f6ea5f407c59ca3c335c0d))


### BREAKING CHANGES

* **release:** release 1.0.0

## [0.2.1](https://github.com/erictooth/smart-icon/compare/v0.2.0...v0.2.1) (2021-06-18)


### Bug Fixes

* update description, keywords, and trigger release for updated npm metadata ([eda72d8](https://github.com/erictooth/smart-icon/commit/eda72d8e571e7b60fe273806edb3178c3cb4aff8))

# [0.2.0](https://github.com/erictooth/smart-icon/compare/v0.1.0...v0.2.0) (2021-06-17)


### Features

* work around errors caused by hot-reload dev environments ([a7215ae](https://github.com/erictooth/smart-icon/commit/a7215aef2b3a91bde12dc825838ccadae28718dc))
