import {NativeComponent} from "../core/util/NativeComponent.js";
import {Component} from "../core/util/Component.js";

export class DefaultLayout extends Component {
    children = [
        new NativeComponent({
            style: "layout",
            slot: "default"
        })
    ];
}