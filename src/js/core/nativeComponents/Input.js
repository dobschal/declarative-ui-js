import {Component} from "../util/Component.js";

export class Input extends Component {

    tag = "input";
    hasFocus = false;
    type = "text";

    constructor(value, placeholderText, onChange, type = "text", config = {}) {
        config.attributes = config.attributes ?? {};
        config.attributes.placeholder = placeholderText;
        config.value = value;
        config.events = config.events ?? {};
        config.events.input = (event) => {
            onChange(this.type === "number" ? Number(event.target.value) : event.target.value);
        };
        config.events.focus = () => {
            this.hasFocus = true;
        };
        config.events.focusOut = () => {
            this.hasFocus = false;
        };
        super(config);
        this.type = type;
    }

    build() {
        const hadFocus = this.hasFocus;
        const cursorPosition = this.htmlElement.selectionStart;
        super.build();
        if(hadFocus) {
            setTimeout(() => {
                this.htmlElement.focus();
                this.htmlElement.setSelectionRange(cursorPosition, cursorPosition);
            });
        }
    }

    /**
     * @returns {HTMLInputElement}
     */
    get htmlElement() {
        return super.htmlElement;
    }
}