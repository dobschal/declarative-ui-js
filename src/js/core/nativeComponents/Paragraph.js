import {NativeComponent} from "../util/NativeComponent.js";

export class Paragraph extends NativeComponent {
    tag = "p";

    /**
     * @param {string|(() => string)} text
     * @param {ComponentConfig} config
     */
    constructor(text, config = {}) {
        super({
            ...config,
            text
        });
    }
}