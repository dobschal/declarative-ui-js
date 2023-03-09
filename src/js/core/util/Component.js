import {NativeComponent} from "./NativeComponent.js";

export class Component {
    children = [];
    parent = null;

    constructor(parent) {
        this.parent = parent;
    }

    build() {
        this.children.forEach(childComponent => {
            childComponent.parent = this.parent;
            childComponent.build();
        });
    }

    set(key, value) {
        this[key] = value;
        this.build();
        return this;
    }

    fillSlot(key, component) {
        this.children.forEach(childComponent => {
            childComponent.fillSlot(key, component);
        });
    }
}