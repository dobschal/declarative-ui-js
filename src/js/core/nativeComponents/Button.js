import {Component} from "../util/Component.js";

export class Button extends Component {
    tag = "button";

    /**
     * @param {string} text
     * @param {(Event) => void} onClick
     * @param {ComponentConfig} config
     */
    constructor(text, onClick, config = {}) {
        config.text = text;
        config.events = config.events ?? {};
        config.events.click = onClick;
        super(config);
    }
}