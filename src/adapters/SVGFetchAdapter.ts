import { SmartIconOptions } from "../types";
import { BaseAdapter } from "../BaseAdapter";

type SVGFetchAdapterOptions = {
    querySelector?: (name: string) => string;
};

export const SVGFetchAdapter =
    (options: SVGFetchAdapterOptions = {}) =>
    (config: SmartIconOptions) => {
        return class SVGFetchAdapter extends BaseAdapter(config) {
            getSvgText(): Node {
                const el = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                el.setAttribute("width", "100%");
                el.setAttribute("height", "100%");

                fetch(this.getPath())
                    .then((res) => res.text())
                    .then((svgText) => {
                        if (!options.querySelector) {
                            el.innerHTML = svgText;
                            return el.children[0];
                        }

                        const fragment = document
                            .createRange()
                            .createContextualFragment(svgText)
                            .querySelector(options.querySelector(this.name));

                        const viewBox = (fragment && fragment.getAttribute("viewBox")) || "";

                        if (viewBox) {
                            el.setAttribute("viewBox", viewBox);
                        }

                        if (fragment) {
                            el.innerHTML = fragment.innerHTML;
                        }
                    });

                return el;
            }
            generateTemplate() {
                return this.getSvgText();
            }
            update = async () => {
                this.replaceChildren(this.getSvgText());
            };
        };
    };
