import {NativeComponent} from "../util/NativeComponent.js";

export class Button extends NativeComponent {
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