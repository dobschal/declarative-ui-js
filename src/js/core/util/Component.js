/**
 * @typedef {object} ComponentConfig
 * @property {string} [tag] - default is "div"
 * @property {string|(()=>string)} [text]
 * @property {string|(()=>string)} [style]
 * @property {string|number|(()=>(string|number))} [value]
 * @property {Array<Component>} [children]
 * @property {boolean|(()=>boolean)} [if]
 * @property {{[string]: string|(()=>string)}} [attributes]
 * @property {{[string]: (Event) => void}} [events]
 * @property {string} [slot]
 */

export class Component {

    /** @member {Component} */
    parent = null;

    /** @member {string} */
    tag = "div";

    /** @member {string|(() => string)} */
    text = "";

    /** @member {Array<Component>} */
    children = [];

    /** @member {{[string]: (Event) => void}} */
    events = {};

    /** @member {boolean|(() => boolean)} */
    if = true;

    /** @member {string|(() => string)} */
    value = "";

    /** @member {string|(() => string)} */
    style = "";

    /** @member {{[string]: string|(()=>string)}} */
    attributes = {};

    /** @member {string} */
    slot = "";

    /**
     * @param {ComponentConfig} [config]
     */
    constructor(config = {}) {
        for (const configKey in config) {
            this[configKey] = config[configKey];
        }
    }

    build() {
        if (this.text) {
            this.htmlElement.innerText = typeof this.text === "function" ? this.text() : this.text;
        }
        if (this.value) {
            this.htmlElement.value = typeof this.value === "function" ? this.value() : this.value;
        }
        if (this.style) {
            this.htmlElement.className = typeof this.style === "function" ? this.style() : this.style;
        }
        this.children.forEach(childComponent => {
            childComponent.parent = this;
            childComponent.build();
        });
        for (const eventKey in this.events) {
            this.htmlElement.addEventListener(eventKey.toLowerCase(), this.events[eventKey]);
        }
        for (const key in this.attributes) {
            const value = typeof this.attributes[key] === "function" ? this.attributes[key]() : this.attributes[key];
            this.htmlElement.setAttribute(key, value);
        }
        if (this.parent instanceof Component) {
            if ((typeof this.if === "function" && this.if()) || (typeof this.if === "boolean" && this.if)) {
                this.parent.htmlElement.appendChild(this.htmlElement);
            } else if (this.htmlElement.parentElement) {
                this.htmlElement.parentElement.removeChild(this.htmlElement);
            }
        }
    }

    /**
     * @returns {HTMLElement}
     */
    get htmlElement() {
        if (!(this._htmlElement instanceof HTMLElement)) {
            this._htmlElement = document.createElement(this.tag);
        }
        return this._htmlElement;
    }

    set(key, value) {
        this[key] = value;
        this.build();
        return this;
    }

    fillSlot(key, component) {
        if (this.slot === key) {
            component.parent = this;
            return component.build();
        }
        this.children.forEach(childComponent => {
            childComponent.fillSlot(key, component);
        });
    }
}