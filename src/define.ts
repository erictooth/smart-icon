import { DefineOptions, SmartIconOptions } from "./types";

type DefineResult = {
    update: (
        arg0: Partial<SmartIconOptions> | ((prev: SmartIconOptions) => Partial<SmartIconOptions>)
    ) => void;
};

type DefineFn = (componentName: string, options: DefineOptions) => DefineResult;

const createdElems: Record<string, DefineResult> = {};

export const define: DefineFn = (componentName, options) => {
    if (!globalThis || !globalThis.customElements) {
        return {
            update: () => undefined
        }
    }
    if (globalThis.customElements.get(componentName)) {
        if (createdElems[componentName]) {
            console.error(
                `smart-icon: \`${componentName}\` is already defined. If you need to update the configuration, you can use the update function instead. This error may show when used in a hot-reload development environment; to fix it you can check if the element has been already been defined before calling SmartIcon.define.`
            );
            return createdElems[componentName];
        }
        throw new Error(
            `smart-icon: \`${componentName}\` has already been defined. Please choose another name.`
        );
    }

    const config: SmartIconOptions = {
        resolvePath: options.resolvePath,
        aliases: options.aliases || {},
    };

    const triggerUpdate = (): void => {
        for (const el of document.querySelectorAll(componentName)) {
            if ("update" in el && typeof el.update === "function") {
                el.update();
            }
        }
    };

    globalThis.customElements.define(componentName, options.adapter(config));

    const result: DefineResult = {
        update: (options) => {
            const opts = typeof options === "function" ? options(config) : options;

            for (const key in opts) {
                //@ts-ignore
                config[key] = opts[key];
            }

            triggerUpdate();
        },
    };

    createdElems[componentName] = result;

    return result;
};
