SRC = $(shell find src)

.DEFAULT_GOAL := help

.PHONY: clean example help lint prepack

clean: ## Clean all build and install artifacts
	@git clean -dfX

dist-cjs: node_modules $(SRC)
	pnpm exec esbuild src/index.ts --bundle --sourcemap --format=cjs --platform=node --target=node12 --outfile=dist-cjs/smart-icon.js

dist-iife: node_modules $(SRC)
	pnpm exec esbuild src/index.ts --bundle --minify --sourcemap --format=iife --global-name=SmartIcon --outfile=dist-browser/smart-icon.iife.min.js

dist-module: node_modules $(SRC)
	pnpm exec esbuild src/index.ts --bundle --sourcemap --format=esm --outfile=dist-module/smart-icon.mjs

dist-types: node_modules $(SRC) tsconfig.json
	pnpm exec tsc --emitDeclarationOnly --declaration --declarationMap false --declarationDir dist-types

example: dist-iife ## Run an example server
	pnpm exec serve

lint: node_modules $(SRC)
	pnpm exec eslint src --ext=ts

node_modules: package.json pnpm-lock.yaml
	@pnpm install

prepack: dist-cjs dist-iife dist-module dist-types ## Build for publication to npm

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'