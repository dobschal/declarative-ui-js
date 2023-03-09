import {Component} from "../util/Component.js";

export class Image extends Component {
    tag = "img";
    constructor(imageUrl, config = {}) {
        config.attributes = config.attributes ?? {};
        config.attributes.src = imageUrl;
        super(config);
    }
}