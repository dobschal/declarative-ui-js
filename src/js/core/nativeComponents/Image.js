import {NativeComponent} from "../util/NativeComponent.js";

export class Image extends NativeComponent {
    tag = "img";
    constructor(imageUrl, config = {}) {
        config.attributes = config.attributes ?? {};
        config.attributes.src = imageUrl;
        super(config);
    }
}