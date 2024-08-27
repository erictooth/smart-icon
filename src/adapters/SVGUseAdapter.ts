import { SmartIconOptions } from "../types";
import { BaseAdapter } from "../BaseAdapter";

export const SVGUseAdapter = (config: SmartIconOptions) =>
    class SVGUseAdapter extends BaseAdapter(config) {
        generateTemplate() {
            const href = this.getPath();
            const el = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            el.setAttribute("width", "100%");
            el.setAttribute("height", "100%");
            const useEl = document.createElementNS("http://www.w3.org/2000/svg", "use");
            useEl.setAttribute("href", href);
            el.replaceChildren(useEl);
            return el;
        }

        update = () => {
            const useElem = this.children[0].children[0];
            useElem.setAttribute("href", this.getPath());
        };
    };
