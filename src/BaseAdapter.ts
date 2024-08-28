import { SmartIconOptions } from "./types";

export const BaseAdapter = (config: SmartIconOptions) =>
    class SmartIcon extends HTMLElement {
        constructor() {
            super();
        }

        getPath() {
            return config.resolvePath(this.name);
        }

        static get observedAttributes() {
            return ["name"];
        }

        get name() {
            const nameAttr = this.getAttribute("name");
            if (!nameAttr) {
                throw new Error("name is a required attribute on SmartIcon");
            }
            return config.aliases[nameAttr] || nameAttr;
        }

        set name(name: string) {
            this.setAttribute("name", name);
        }

        generateTemplate(): Node | null {
            return null;
        }

        update = (): void | Promise<void> => {
            return;
        };

        connectedCallback() {
            const template = this.generateTemplate();
            if (template) {
                this.replaceChildren(template);
            }
        }

        attributeChangedCallback(attrName: string): void {
            if (this.children[0] && attrName === "name") {
                this.update();
            }
        }
    };
