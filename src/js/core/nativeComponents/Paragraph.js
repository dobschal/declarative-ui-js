import {Component} from "../util/Component.js";

export class Paragraph extends Component {
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